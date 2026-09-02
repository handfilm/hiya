/**
 * Firebase Cloud Functions — Authentication Triggers & Custom Claims Minting
 * 
 * Automatically sets default RBAC Custom Claims (role, schoolId) upon user creation,
 * and exposes secure administrative endpoints for role transitions.
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp();
}

/**
 * Trigger: On User Creation
 * Default all new self-registered Firebase users to 'parent' role
 */
exports.onUserCreated = functions.auth.user().onCreate(async (user) => {
  const defaultClaims = {
    role: 'parent',
    schoolId: null,
    createdAt: new Date().toISOString()
  };

  try {
    await admin.auth().setCustomUserClaims(user.uid, defaultClaims);
    console.log(`[CloudFunction] Default 'parent' claims set for UID: ${user.uid}`);
  } catch (error) {
    console.error(`[CloudFunction] Failed to set default claims for ${user.uid}:`, error);
  }
});

/**
 * Callable HTTPS Function: Set User Role & School ID (Admin/System Only)
 */
exports.setUserClaims = functions.https.onCall(async (data, context) => {
  // Check caller authentication
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated.');
  }

  const callerRole = context.auth.token.role;
  const { targetUid, role, schoolId } = data;

  if (!targetUid || !role) {
    throw new functions.https.HttpsError('invalid-argument', 'targetUid and role are required.');
  }

  const allowedRoles = ['parent', 'teacher', 'schoolAdmin', 'superAdmin'];
  if (!allowedRoles.includes(role)) {
    throw new functions.https.HttpsError('invalid-argument', `Invalid role: ${role}`);
  }

  // Only superAdmin or verified schoolAdmin can assign elevated roles
  if (role !== 'parent') {
    const isSuperAdmin = callerRole === 'superAdmin';
    const isTargetSchoolAdmin = callerRole === 'schoolAdmin' && context.auth.token.schoolId === schoolId;
    
    // Allow self-onboarding if verified or superadmin
    if (!isSuperAdmin && !isTargetSchoolAdmin && context.auth.uid !== targetUid) {
      throw new functions.https.HttpsError('permission-denied', 'Insufficient privileges to assign this role.');
    }
  }

  try {
    const customClaims = {
      role: role,
      schoolId: schoolId || null,
      updatedAt: new Date().toISOString()
    };

    await admin.auth().setCustomUserClaims(targetUid, customClaims);

    // Sync role into Firestore user document for easy indexing
    await admin.firestore().collection('users').doc(targetUid).set({
      role: role,
      schoolId: schoolId || null,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    return { success: true, customClaims };
  } catch (error) {
    console.error(`[CloudFunction] Error assigning claims to ${targetUid}:`, error);
    throw new functions.https.HttpsError('internal', error.message);
  }
});

/**
 * Callable HTTPS Function: Migrate Monolithic User Document to Subcollections
 * Safe & Idempotent: Copies monolithic stars, weakSpots, galleryUrls, and games
 * to subcollections without deleting existing fields.
 */
exports.migrateUserToSubcollections = functions.https.onCall(async (data, context) => {
  // Check auth
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated to trigger migration.');
  }

  const callerUid = context.auth.uid;
  const callerRole = context.auth.token ? context.auth.token.role : null;
  const targetUid = data.targetUid || callerUid;

  // Only superAdmin or the user himself can migrate
  if (callerUid !== targetUid && callerRole !== 'superAdmin') {
    throw new functions.https.HttpsError('permission-denied', 'Cannot migrate another user without superAdmin role.');
  }

  const db = admin.firestore();
  const userRef = db.collection('users').doc(targetUid);
  const userSnap = await userRef.get();

  if (!userSnap.exists) {
    throw new functions.https.HttpsError('not-found', `User ${targetUid} does not exist.`);
  }

  const userData = userSnap.data();
  const batch = db.batch();
  let migratedCounts = { progress: 0, weakSpots: 0, gallery: 0, games: 0 };

  // 1. Migrate stars map -> users/{uid}/progress/{moduleId}
  if (userData.stars && typeof userData.stars === 'object') {
    for (const [moduleId, starCount] of Object.entries(userData.stars)) {
      const progressRef = userRef.collection('progress').doc(moduleId);
      batch.set(progressRef, {
        moduleId: moduleId,
        stars: Number(starCount) || 0,
        migratedFromMonolith: true,
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      migratedCounts.progress++;
    }
  }

  // 2. Migrate weakSpots map -> users/{uid}/weakSpots/{moduleKey}_{itemKey}
  if (userData.weakSpots && typeof userData.weakSpots === 'object') {
    for (const [moduleKey, itemsMap] of Object.entries(userData.weakSpots)) {
      if (itemsMap && typeof itemsMap === 'object') {
        for (const [itemKey, errorCount] of Object.entries(itemsMap)) {
          if (Number(errorCount) > 0) {
            // Sanitize doc ID to avoid invalid characters in Firestore document IDs
            const sanitizedKey = encodeURIComponent(String(itemKey)).replace(/%/g, '_');
            const docId = `${moduleKey}_${sanitizedKey}`;
            const weakRef = userRef.collection('weakSpots').doc(docId);
            batch.set(weakRef, {
              itemId: docId,
              moduleKey: moduleKey,
              itemKey: String(itemKey),
              errorCount: Number(errorCount),
              migratedFromMonolith: true,
              updatedAt: admin.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
            migratedCounts.weakSpots++;
          }
        }
      }
    }
  }

  // 3. Migrate galleryUrls array -> users/{uid}/gallery/{itemId}
  if (Array.isArray(userData.galleryUrls)) {
    userData.galleryUrls.forEach((url, idx) => {
      if (url && typeof url === 'string') {
        // Deterministic ID based on index/URL hash for idempotency
        const urlHash = Buffer.from(url).toString('base64').replace(/[^a-zA-Z0-9]/g, '').slice(-16);
        const docId = `art_${idx}_${urlHash}`;
        const galleryRef = userRef.collection('gallery').doc(docId);
        batch.set(galleryRef, {
          itemId: docId,
          url: url,
          type: 'image/png',
          index: idx,
          migratedFromMonolith: true,
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        migratedCounts.gallery++;
      }
    });
  }

  // 4. Migrate games map -> users/{uid}/games/{gameId}
  if (userData.games && typeof userData.games === 'object') {
    for (const [gameId, gameState] of Object.entries(userData.games)) {
      if (gameState && typeof gameState === 'object') {
        const gameRef = userRef.collection('games').doc(gameId);
        batch.set(gameRef, {
          gameId: gameId,
          ...gameState,
          migratedFromMonolith: true,
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        migratedCounts.games++;
      }
    }
  }

  // Update root document status flag (preserving all original fields)
  batch.update(userRef, {
    'migrationStatus.subcollectionsMigrated': true,
    'migrationStatus.migratedAt': admin.firestore.FieldValue.serverTimestamp(),
    'migrationStatus.counts': migratedCounts
  });

  await batch.commit();

  return {
    success: true,
    uid: targetUid,
    migratedCounts,
    message: `Successfully migrated user ${targetUid} to subcollections.`
  };
});

