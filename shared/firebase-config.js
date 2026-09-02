/**
 * Hiya / Khukir Bagan — Centralized Firebase Configuration & Multi-Tenant Auth Client
 * 
 * Provides unified credentials, service instances, and Custom Claims synchronization
 * across the main single-page application (index.html) and all standalone educational games.
 */

(function(global) {
  'use strict';

  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyA9kOUaQK0V4s9ZNV1ezgYQnq_OBFpVoSo",
    authDomain: "hiya-2cd78.firebaseapp.com",
    projectId: "hiya-2cd78",
    storageBucket: "hiya-2cd78.firebasestorage.app",
    messagingSenderId: "473906193558",
    appId: "1:473906193558:web:304cde07e050faaa308eb7"
  };

  let _app = null;
  let _auth = null;
  let _db = null;
  let _storage = null;
  let _isInitialized = false;

  function initFirebase() {
    if (_isInitialized) {
      return { app: _app, auth: _auth, db: _db, storage: _storage };
    }

    if (typeof firebase !== 'undefined') {
      try {
        if (!firebase.apps.length) {
          _app = firebase.initializeApp(FIREBASE_CONFIG);
        } else {
          _app = firebase.app();
        }

        if (typeof firebase.auth === 'function') {
          _auth = firebase.auth();
        }
        if (typeof firebase.firestore === 'function') {
          _db = firebase.firestore();
        }
        if (typeof firebase.storage === 'function') {
          _storage = firebase.storage();
        }
        _isInitialized = true;
      } catch (err) {
        console.warn('[FirebaseConfig] Initialization warning:', err);
      }
    }

    return { app: _app, auth: _auth, db: _db, storage: _storage };
  }

  /**
   * Request server-side Custom Claims minting / synchronization (role, schoolId)
   * Ensures Firestore security rules evaluate request.auth.token.role correctly.
   */
  async function syncUserCustomClaims(user, desiredRole = 'parent', schoolId = null) {
    if (!user || user.isAnonymous) return null;
    try {
      const idToken = await user.getIdToken(false);
      const res = await fetch('/api/auth/set-custom-claims', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`
        },
        body: JSON.stringify({
          uid: user.uid,
          email: user.email,
          role: desiredRole,
          schoolId: schoolId
        })
      });

      if (res.ok) {
        // Force refresh ID token so new custom claims are immediately present in client JWT
        await user.getIdToken(true);
        const tokenResult = await user.getIdTokenResult(true);
        return tokenResult.claims;
      }
    } catch (e) {
      console.warn('[FirebaseConfig] Custom claims sync notice:', e);
    }
    return null;
  }

  // Export to global browser window and CommonJS/ESM
  const HiyaFirebase = {
    config: FIREBASE_CONFIG,
    init: initFirebase,
    get app() { return _app || initFirebase().app; },
    get auth() { return _auth || initFirebase().auth; },
    get db() { return _db || initFirebase().db; },
    get storage() { return _storage || initFirebase().storage; },
    syncUserCustomClaims: syncUserCustomClaims
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = HiyaFirebase;
  } else {
    global.HiyaFirebase = HiyaFirebase;
    global.HIYA_FIREBASE_CONFIG = FIREBASE_CONFIG;
  }
})(typeof window !== 'undefined' ? window : this);
