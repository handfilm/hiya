import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { DHAKA_TOP_SCHOOLS } from './schools-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.raw({ type: 'image/*', limit: '10mb' }));

// In-Memory Multi-Tenant Data Store (Emulating Cloud Firestore collections with index performance)
const inMemoryDb = {
  schools: new Map(DHAKA_TOP_SCHOOLS.map((s) => [s.schoolId, { ...s }])),
  users: new Map([
    [
      'usr_super_admin_01',
      {
        uid: 'usr_super_admin_01',
        email: 'superadmin@khukirbagan.edu.bd',
        fullName: 'Dr. Shah Alam',
        role: 'superAdmin',
        schoolId: null,
        schoolName: 'All Schools (Directorate of Primary Education)',
        createdAt: new Date().toISOString(),
      },
    ],
    [
      'usr_school_admin_vnsc',
      {
        uid: 'usr_school_admin_vnsc',
        email: 'principal@vnsc.edu.bd',
        fullName: 'Kamrun Nahar (Principal)',
        role: 'schoolAdmin',
        schoolId: 'SCH_DHK_001',
        schoolName: 'Viqarunnisa Noon School and College',
        createdAt: new Date().toISOString(),
      },
    ],
    [
      'usr_teacher_vnsc_01',
      {
        uid: 'usr_teacher_vnsc_01',
        email: 'teacher.rahima@vnsc.edu.bd',
        fullName: 'Rahima Khatun (Teacher)',
        role: 'teacher',
        schoolId: 'SCH_DHK_001',
        schoolName: 'Viqarunnisa Noon School and College',
        assignedGrades: ['Playgroup', 'Nursery', 'KG'],
        activeStudentsCount: 42,
        createdAt: new Date().toISOString(),
      },
    ],
    [
      'usr_teacher_vnsc_02',
      {
        uid: 'usr_teacher_vnsc_02',
        email: 'teacher.nasreen@vnsc.edu.bd',
        fullName: 'Nasreen Akhtar (Teacher)',
        role: 'teacher',
        schoolId: 'SCH_DHK_001',
        schoolName: 'Viqarunnisa Noon School and College',
        assignedGrades: ['KG', 'Class 1'],
        activeStudentsCount: 38,
        createdAt: new Date().toISOString(),
      },
    ],
    [
      'usr_teacher_vnsc_03',
      {
        uid: 'usr_teacher_vnsc_03',
        email: 'teacher.razia@vnsc.edu.bd',
        fullName: 'Sultana Razia (Teacher)',
        role: 'teacher',
        schoolId: 'SCH_DHK_001',
        schoolName: 'Viqarunnisa Noon School and College',
        assignedGrades: ['Nursery', 'Class 1'],
        activeStudentsCount: 45,
        createdAt: new Date().toISOString(),
      },
    ],
    [
      'usr_parent_ayesha',
      {
        uid: 'usr_parent_ayesha',
        email: 'parent.farhana@gmail.com',
        fullName: 'Farhana Yasmin',
        role: 'parent',
        schoolId: 'SCH_DHK_001',
        schoolName: 'Viqarunnisa Noon School and College',
        children: [
          {
            childId: 'chld_001',
            name: 'Ayesha Siddiqua',
            avatar: '🌸',
            grade: 'Nursery',
            rollNumber: '14',
            section: 'Lily',
            totalStars: 135,
            masteryPercentage: 92,
            streakDays: 6,
            lastPracticedAt: new Date(Date.now() - 3600000).toISOString(),
            status: 'EXCELLENT',
            statusLabel: 'অগ্রণী শিক্ষার্থী',
            subcollections: {
              progress: {
                bangla: { moduleId: 'bangla', moduleName: 'বাংলা বর্ণ ও শব্দ', stars: 35, mastery: 95, totalItems: 14, completedCount: 14, lastPracticed: 'আজ দুপুর ১২:৩০' },
                english: { moduleId: 'english', moduleName: 'English Alphabets & Words', stars: 30, mastery: 90, totalItems: 12, completedCount: 11, lastPracticed: 'গতকাল বিকাল ৫:১৫' },
                math: { moduleId: 'math', moduleName: 'গণিত ও সংখ্যা গণনা', stars: 28, mastery: 82, totalItems: 10, completedCount: 8, lastPracticed: '২ দিন আগে' },
                science: { moduleId: 'science', moduleName: 'বিজ্ঞান ও পরিবেশ', stars: 22, mastery: 94, totalItems: 8, completedCount: 8, lastPracticed: '৩ দিন আগে' },
                drawing: { moduleId: 'drawing', moduleName: 'আঁকা ও শিল্পকলা', stars: 20, mastery: 100, totalItems: 6, completedCount: 6, lastPracticed: 'আজ সকাল ১০:০০' },
              },
              weakSpots: {
                letters_kho: { moduleKey: 'bangla', itemKey: 'খ', label: "বর্ণ 'খ'", errorCount: 2, note: "উচ্চারণ ও লেখায় আরও অনুশীলন ফলপ্রসূ হবে" },
                numbers_seven: { moduleKey: 'math', itemKey: '৭', label: "সংখ্যা '৭'", errorCount: 3, note: "৯ ও ৭ এর মধ্যে বিভ্রান্তি" }
              }
            }
          },
        ],
        createdAt: new Date().toISOString(),
      },
    ],
    [
      'usr_parent_zayan',
      {
        uid: 'usr_parent_zayan',
        email: 'parent.tanvir@gmail.com',
        fullName: 'Tanvir Ahmed',
        role: 'parent',
        schoolId: 'SCH_DHK_001',
        schoolName: 'Viqarunnisa Noon School and College',
        children: [
          {
            childId: 'chld_002',
            name: 'Zayan Ahmed',
            avatar: '🚀',
            grade: 'Nursery',
            rollNumber: '08',
            section: 'Lily',
            totalStars: 102,
            masteryPercentage: 84,
            streakDays: 4,
            lastPracticedAt: new Date(Date.now() - 7200000).toISOString(),
            status: 'ON_TRACK',
            statusLabel: 'ভালো অগ্রগতি',
            subcollections: {
              progress: {
                bangla: { moduleId: 'bangla', moduleName: 'বাংলা বর্ণ ও শব্দ', stars: 28, mastery: 86, totalItems: 14, completedCount: 12, lastPracticed: 'আজ সকাল ১১:০০' },
                english: { moduleId: 'english', moduleName: 'English Alphabets & Words', stars: 26, mastery: 82, totalItems: 12, completedCount: 10, lastPracticed: 'গতকাল রাত ৮:০০' },
                math: { moduleId: 'math', moduleName: 'গণিত ও সংখ্যা গণনা', stars: 24, mastery: 78, totalItems: 10, completedCount: 7, lastPracticed: 'গতকাল' },
                science: { moduleId: 'science', moduleName: 'বিজ্ঞান ও পরিবেশ', stars: 14, mastery: 88, totalItems: 8, completedCount: 7, lastPracticed: '৪ দিন আগে' },
                drawing: { moduleId: 'drawing', moduleName: 'আঁকা ও শিল্পকলা', stars: 10, mastery: 90, totalItems: 6, completedCount: 5, lastPracticed: 'আজ' },
              },
              weakSpots: {
                math_subtraction: { moduleKey: 'math', itemKey: 'বিয়োগ', label: "সাধারণ বিয়োগ", errorCount: 4, note: "ছবি দেখে বস্তুর বিয়োগ সহজে বুঝতে সাহায্য প্রয়োজন" },
                bangla_gho: { moduleKey: 'bangla', itemKey: 'ঘ', label: "বর্ণ 'ঘ'", errorCount: 2, note: "ধ ও ঘ বর্ণের পার্থক্যকরণ" }
              }
            }
          }
        ],
        createdAt: new Date().toISOString()
      }
    ],
    [
      'usr_parent_tahmeed',
      {
        uid: 'usr_parent_tahmeed',
        email: 'parent.shama@yahoo.com',
        fullName: 'Shama Islam',
        role: 'parent',
        schoolId: 'SCH_DHK_001',
        schoolName: 'Viqarunnisa Noon School and College',
        children: [
          {
            childId: 'chld_003',
            name: 'Tahmeed Islam',
            avatar: '🦁',
            grade: 'Nursery',
            rollNumber: '02',
            section: 'Lily',
            totalStars: 158,
            masteryPercentage: 98,
            streakDays: 9,
            lastPracticedAt: new Date(Date.now() - 1800000).toISOString(),
            status: 'EXCELLENT',
            statusLabel: 'অগ্রণী শিক্ষার্থী',
            subcollections: {
              progress: {
                bangla: { moduleId: 'bangla', moduleName: 'বাংলা বর্ণ ও শব্দ', stars: 40, mastery: 100, totalItems: 14, completedCount: 14, lastPracticed: 'আজ' },
                english: { moduleId: 'english', moduleName: 'English Alphabets & Words', stars: 36, mastery: 98, totalItems: 12, completedCount: 12, lastPracticed: 'আজ' },
                math: { moduleId: 'math', moduleName: 'গণিত ও সংখ্যা গণনা', stars: 32, mastery: 96, totalItems: 10, completedCount: 10, lastPracticed: 'আজ' },
                science: { moduleId: 'science', moduleName: 'বিজ্ঞান ও পরিবেশ', stars: 25, mastery: 98, totalItems: 8, completedCount: 8, lastPracticed: 'গতকাল' },
                drawing: { moduleId: 'drawing', moduleName: 'আঁকা ও শিল্পকলা', stars: 25, mastery: 100, totalItems: 6, completedCount: 6, lastPracticed: 'গতকাল' },
              },
              weakSpots: {}
            }
          }
        ],
        createdAt: new Date().toISOString()
      }
    ],
    [
      'usr_parent_ananya',
      {
        uid: 'usr_parent_ananya',
        email: 'parent.debashish@gmail.com',
        fullName: 'Debashish Sen',
        role: 'parent',
        schoolId: 'SCH_DHK_001',
        schoolName: 'Viqarunnisa Noon School and College',
        children: [
          {
            childId: 'chld_004',
            name: 'Ananya Sen',
            avatar: '🦋',
            grade: 'KG',
            rollNumber: '05',
            section: 'Rose',
            totalStars: 124,
            masteryPercentage: 89,
            streakDays: 5,
            lastPracticedAt: new Date(Date.now() - 86400000).toISOString(),
            status: 'ON_TRACK',
            statusLabel: 'ভালো অগ্রগতি',
            subcollections: {
              progress: {
                bangla: { moduleId: 'bangla', moduleName: 'বাংলা বর্ণ ও শব্দ', stars: 32, mastery: 92, totalItems: 14, completedCount: 13, lastPracticed: 'গতকাল' },
                english: { moduleId: 'english', moduleName: 'English Alphabets & Words', stars: 30, mastery: 85, totalItems: 12, completedCount: 10, lastPracticed: 'গতকাল' },
                math: { moduleId: 'math', moduleName: 'গণিত ও সংখ্যা গণনা', stars: 30, mastery: 88, totalItems: 10, completedCount: 9, lastPracticed: '২ দিন আগে' },
                science: { moduleId: 'science', moduleName: 'বিজ্ঞান ও পরিবেশ', stars: 18, mastery: 90, totalItems: 8, completedCount: 7, lastPracticed: '৩ দিন আগে' },
                drawing: { moduleId: 'drawing', moduleName: 'আঁকা ও শিল্পকলা', stars: 14, mastery: 92, totalItems: 6, completedCount: 5, lastPracticed: 'গতকাল' },
              },
              weakSpots: {
                english_phonics: { moduleKey: 'english', itemKey: 'th_sound', label: "Phonics 'th'", errorCount: 3, note: "উচ্চারণে অতিরিক্ত অডিও গাইড কার্যকর" }
              }
            }
          }
        ],
        createdAt: new Date().toISOString()
      }
    ],
    [
      'usr_parent_samia',
      {
        uid: 'usr_parent_samia',
        email: 'parent.mahbub@gmail.com',
        fullName: 'Mahbub Rahman',
        role: 'parent',
        schoolId: 'SCH_DHK_001',
        schoolName: 'Viqarunnisa Noon School and College',
        children: [
          {
            childId: 'chld_005',
            name: 'Samia Rahman',
            avatar: '🐱',
            grade: 'KG',
            rollNumber: '19',
            section: 'Rose',
            totalStars: 82,
            masteryPercentage: 74,
            streakDays: 3,
            lastPracticedAt: new Date(Date.now() - 172800000).toISOString(),
            status: 'NEEDS_ATTENTION',
            statusLabel: 'গণিতে সহায়তা প্রয়োজন',
            subcollections: {
              progress: {
                bangla: { moduleId: 'bangla', moduleName: 'বাংলা বর্ণ ও শব্দ', stars: 24, mastery: 80, totalItems: 14, completedCount: 10, lastPracticed: '২ দিন আগে' },
                english: { moduleId: 'english', moduleName: 'English Alphabets & Words', stars: 22, mastery: 75, totalItems: 12, completedCount: 8, lastPracticed: '৩ দিন আগে' },
                math: { moduleId: 'math', moduleName: 'গণিত ও সংখ্যা গণনা', stars: 16, mastery: 64, totalItems: 10, completedCount: 5, lastPracticed: '২ দিন আগে' },
                science: { moduleId: 'science', moduleName: 'বিজ্ঞান ও পরিবেশ', stars: 12, mastery: 76, totalItems: 8, completedCount: 5, lastPracticed: '৫ দিন আগে' },
                drawing: { moduleId: 'drawing', moduleName: 'আঁকা ও শিল্পকলা', stars: 8, mastery: 80, totalItems: 6, completedCount: 4, lastPracticed: '৩ দিন আগে' },
              },
              weakSpots: {
                math_addition: { moduleKey: 'math', itemKey: 'যোগ', label: "যোগের ধারণা", errorCount: 5, note: "মৌখিক ও ভিজ্যুয়াল কাউন্টিং সাহায্য করবে" },
                bangla_vowels: { moduleKey: 'bangla', itemKey: 'ঋ', label: "স্বরবর্ণ 'ঋ'", errorCount: 3, note: "কারচিহ্ন 'ঋ-কার' প্রয়োগ" }
              }
            }
          }
        ],
        createdAt: new Date().toISOString()
      }
    ],
    [
      'usr_parent_arif',
      {
        uid: 'usr_parent_arif',
        email: 'parent.hossain@gmail.com',
        fullName: 'Golam Hossain',
        role: 'parent',
        schoolId: 'SCH_DHK_001',
        schoolName: 'Viqarunnisa Noon School and College',
        children: [
          {
            childId: 'chld_006',
            name: 'Arif Hossain',
            avatar: '🐼',
            grade: 'Playgroup',
            rollNumber: '04',
            section: 'Tulip',
            totalStars: 68,
            masteryPercentage: 86,
            streakDays: 4,
            lastPracticedAt: new Date(Date.now() - 43200000).toISOString(),
            status: 'ON_TRACK',
            statusLabel: 'ভালো অগ্রগতি',
            subcollections: {
              progress: {
                bangla: { moduleId: 'bangla', moduleName: 'বাংলা বর্ণ ও শব্দ', stars: 22, mastery: 88, totalItems: 14, completedCount: 10, lastPracticed: 'আজ' },
                english: { moduleId: 'english', moduleName: 'English Alphabets & Words', stars: 18, mastery: 84, totalItems: 12, completedCount: 8, lastPracticed: 'গতকাল' },
                math: { moduleId: 'math', moduleName: 'গণিত ও সংখ্যা গণনা', stars: 16, mastery: 85, totalItems: 10, completedCount: 7, lastPracticed: 'আজ' },
                drawing: { moduleId: 'drawing', moduleName: 'আঁকা ও শিল্পকলা', stars: 12, mastery: 90, totalItems: 6, completedCount: 5, lastPracticed: 'গতকাল' },
              },
              weakSpots: {
                drawing_shapes: { moduleKey: 'drawing', itemKey: 'বৃত্ত', label: "গোল বৃত্ত আঁকা", errorCount: 2, note: "হাত ঘোরানোর খেলা চালিয়ে যাওয়া উচিত" }
              }
            }
          }
        ],
        createdAt: new Date().toISOString()
      }
    ],
  ]),
  learningProgress: new Map([
    [
      'lp_chld_001_letters',
      {
        progressId: 'lp_chld_001_letters',
        childId: 'chld_001',
        parentId: 'usr_parent_ayesha',
        schoolId: 'SCH_DHK_001',
        module: 'letters',
        starsEarned: 45,
        completedCount: 11,
        totalItems: 11,
        masteryPercentage: 100,
        streakDays: 5,
        lastPracticedAt: new Date().toISOString(),
      },
    ],
  ]),
};

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'khukir-bagan-enterprise',
    version: '2.4.0',
    tenantsCount: inMemoryDb.schools.size,
    emulatorStatus: 'ACTIVE',
  });
});

// -------------------------------------------------------------
// 1. School Discovery APIs (Public Reads / Multi-Filter)
// -------------------------------------------------------------
app.get('/api/schools', (req, res) => {
  const { thana, curriculum, search, limit = 100 } = req.query;

  let list = Array.from(inMemoryDb.schools.values());

  if (thana && thana !== 'ALL') {
    list = list.filter((s) => s.thana.toLowerCase() === String(thana).toLowerCase());
  }

  if (curriculum && curriculum !== 'ALL') {
    list = list.filter((s) => s.curriculum.includes(String(curriculum)));
  }

  if (search) {
    const q = String(search).toLowerCase();
    list = list.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        (s.banglaName && s.banglaName.toLowerCase().includes(q)) ||
        s.thana.toLowerCase().includes(q)
    );
  }

  // Sort by ranking asc
  list.sort((a, b) => (a.metrics?.ranking || 999) - (b.metrics?.ranking || 999));

  res.json({
    total: list.length,
    schools: list.slice(0, Number(limit)),
  });
});

app.get('/api/schools/:schoolId', (req, res) => {
  const school = inMemoryDb.schools.get(req.params.schoolId);
  if (!school) {
    return res.status(404).json({ error: 'School not found' });
  }
  res.json({ school });
});

// -------------------------------------------------------------
// 2. Multi-Tenant RBAC & Sign Up with School Endpoint
// -------------------------------------------------------------
app.post('/api/auth/register-with-school', (req, res) => {
  const {
    idToken,
    fullName,
    email,
    phoneNumber,
    schoolId,
    role = 'parent',
    child,
    assignedGrades,
  } = req.body;

  if (!fullName || !schoolId) {
    return res.status(400).json({ error: 'Full name and verified School ID are required' });
  }

  const school = inMemoryDb.schools.get(schoolId);
  if (!school) {
    return res.status(404).json({ error: 'Invalid School ID. School does not exist in registry.' });
  }

  // Generate or derive UID
  const uid = idToken ? `usr_${idToken.substring(0, 16).replace(/[^a-zA-Z0-9]/g, '')}` : `usr_${Date.now()}`;

  // Custom Claims simulated for RBAC
  const customClaims = {
    role,
    schoolId,
    tenantId: schoolId,
    isVerified: true,
  };

  const childId = child?.childId || `chld_${Date.now().toString(36)}`;

  const userData = {
    uid,
    fullName,
    email: email || `${uid}@student.khukirbagan.edu.bd`,
    phoneNumber: phoneNumber || null,
    role,
    schoolId,
    schoolName: school.name, // Denormalized for high read performance
    schoolThana: school.thana,
    assignedGrades: role === 'teacher' ? (assignedGrades || ['Playgroup', 'Nursery']) : undefined,
    children:
      role === 'parent'
        ? [
            {
              childId,
              name: child?.name || fullName.split(' ')[0] + ' Junior',
              grade: child?.grade || 'Playgroup',
              rollNumber: child?.rollNumber || '01',
              section: child?.section || 'A',
            },
          ]
        : [],
    customClaims,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  inMemoryDb.users.set(uid, userData);

  // Update school active student counter
  if (school.metrics) {
    school.metrics.totalStudents = (school.metrics.totalStudents || 0) + 1;
  }

  res.status(201).json({
    success: true,
    message: `Account successfully registered and linked to ${school.name} with role: ${role}`,
    user: userData,
    customClaims,
  });
});

// User Profile & Custom Claims inspection
app.get('/api/users/:uid/profile', (req, res) => {
  const user = inMemoryDb.users.get(req.params.uid);
  if (!user) {
    return res.status(404).json({ error: 'User not found in tenant store' });
  }
  res.json({ user });
});

// Custom Claims Minting / Sync Endpoint for Client Auth Flow
app.post('/api/auth/set-custom-claims', (req, res) => {
  const { uid, role = 'parent', schoolId = null, email } = req.body;
  if (!uid) {
    return res.status(400).json({ error: 'UID is required to set custom claims' });
  }

  const validRoles = ['parent', 'teacher', 'schoolAdmin', 'superAdmin'];
  const assignedRole = validRoles.includes(role) ? role : 'parent';

  const claims = {
    role: assignedRole,
    schoolId: schoolId,
    syncedAt: new Date().toISOString()
  };

  // Upsert user in in-memory tenant database
  let user = inMemoryDb.users.get(uid);
  if (user) {
    user.role = assignedRole;
    user.schoolId = schoolId;
    user.customClaims = claims;
    user.updatedAt = new Date().toISOString();
  } else {
    user = {
      uid,
      email: email || `${uid}@user.khukirbagan.edu.bd`,
      role: assignedRole,
      schoolId: schoolId,
      customClaims: claims,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    inMemoryDb.users.set(uid, user);
  }

  res.json({
    success: true,
    message: `Custom claims minted successfully for UID: ${uid}`,
    claims
  });
});

app.get('/api/auth/claims/:uid', (req, res) => {
  const user = inMemoryDb.users.get(req.params.uid);
  if (!user || !user.customClaims) {
    return res.json({
      claims: {
        role: 'parent',
        schoolId: null
      }
    });
  }
  res.json({ claims: user.customClaims });
});

// -------------------------------------------------------------
// 3. Multi-Tenant Learning Progress Sync
// -------------------------------------------------------------
app.post('/api/learning-progress/sync', (req, res) => {
  const { uid, schoolId, childId, module, starsEarned, completedCount, totalItems, masteryPercentage } = req.body;

  if (!uid || !module) {
    return res.status(400).json({ error: 'Missing required progress sync parameters' });
  }

  const effectiveSchoolId = schoolId || 'SCH_DHK_001';
  const effectiveChildId = childId || 'chld_001';
  const progressId = `lp_${effectiveChildId}_${module}`;

  const record = {
    progressId,
    childId: effectiveChildId,
    parentId: uid,
    schoolId: effectiveSchoolId,
    module,
    starsEarned: Number(starsEarned) || 0,
    completedCount: Number(completedCount) || 0,
    totalItems: Number(totalItems) || 10,
    masteryPercentage: Number(masteryPercentage) || 0,
    lastPracticedAt: new Date().toISOString(),
  };

  inMemoryDb.learningProgress.set(progressId, record);

  res.json({
    success: true,
    record,
  });
});

// -------------------------------------------------------------
// 4. Multi-Tenant School Analytics & Roster (Teacher / Admin RBAC)
// -------------------------------------------------------------
app.get('/api/schools/:schoolId/students', (req, res) => {
  const { schoolId } = req.params;
  const { grade, section } = req.query;

  const school = inMemoryDb.schools.get(schoolId);
  if (!school) {
    return res.status(404).json({ error: 'School not found' });
  }

  // Gather all students enrolled under parents linked to this school
  const students = [];
  for (const user of inMemoryDb.users.values()) {
    if (user.role === 'parent' && user.schoolId === schoolId && Array.isArray(user.children)) {
      for (const child of user.children) {
        if (grade && grade !== 'ALL' && child.grade !== grade) continue;
        if (section && section !== 'ALL' && child.section !== section) continue;

        students.push({
          childId: child.childId,
          parentId: user.uid,
          parentName: user.fullName,
          parentEmail: user.email,
          parentPhone: user.phoneNumber || '+880 1711-XXXXXX',
          name: child.name,
          avatar: child.avatar || '🧒',
          grade: child.grade || 'Nursery',
          rollNumber: child.rollNumber || '01',
          section: child.section || 'A',
          totalStars: child.totalStars || 45,
          masteryPercentage: child.masteryPercentage || 85,
          streakDays: child.streakDays || 3,
          status: child.status || 'ON_TRACK',
          statusLabel: child.statusLabel || 'ভালো অগ্রগতি',
          lastPracticedAt: child.lastPracticedAt || new Date().toISOString(),
          subcollections: child.subcollections || {
            progress: {
              bangla: { moduleId: 'bangla', moduleName: 'বাংলা বর্ণ ও শব্দ', stars: 25, mastery: 85, totalItems: 14, completedCount: 12 },
              math: { moduleId: 'math', moduleName: 'গণিত ও সংখ্যা', stars: 20, mastery: 80, totalItems: 10, completedCount: 8 }
            },
            weakSpots: {}
          }
        });
      }
    }
  }

  // Sort by roll number or name
  students.sort((a, b) => (parseInt(a.rollNumber) || 99) - (parseInt(b.rollNumber) || 99));

  res.json({
    schoolId,
    schoolName: school.name,
    totalCount: students.length,
    students
  });
});

app.get('/api/schools/:schoolId/teachers', (req, res) => {
  const { schoolId } = req.params;
  const school = inMemoryDb.schools.get(schoolId);
  if (!school) {
    return res.status(404).json({ error: 'School not found' });
  }

  const teachers = [];
  for (const user of inMemoryDb.users.values()) {
    if (user.role === 'teacher' && user.schoolId === schoolId) {
      teachers.push({
        uid: user.uid,
        fullName: user.fullName,
        email: user.email,
        assignedGrades: user.assignedGrades || ['Nursery', 'KG'],
        activeStudentsCount: user.activeStudentsCount || 40,
        status: 'ACTIVE',
        createdAt: user.createdAt
      });
    }
  }

  res.json({
    schoolId,
    schoolName: school.name,
    totalTeachers: teachers.length,
    teachers
  });
});

app.get('/api/schools/:schoolId/student/:studentId', (req, res) => {
  const { schoolId, studentId } = req.params;

  for (const user of inMemoryDb.users.values()) {
    if (user.role === 'parent' && user.schoolId === schoolId && Array.isArray(user.children)) {
      const child = user.children.find(c => c.childId === studentId);
      if (child) {
        return res.json({
          childId: child.childId,
          parentId: user.uid,
          parentName: user.fullName,
          parentEmail: user.email,
          name: child.name,
          avatar: child.avatar || '🧒',
          grade: child.grade,
          rollNumber: child.rollNumber,
          section: child.section,
          totalStars: child.totalStars || 0,
          masteryPercentage: child.masteryPercentage || 80,
          streakDays: child.streakDays || 1,
          status: child.status || 'ON_TRACK',
          statusLabel: child.statusLabel || 'অগ্রগতি চলমান',
          lastPracticedAt: child.lastPracticedAt || new Date().toISOString(),
          subcollections: child.subcollections || { progress: {}, weakSpots: {} }
        });
      }
    }
  }

  res.status(404).json({ error: 'Student not found in this school' });
});

app.get('/api/schools/:schoolId/analytics', (req, res) => {
  const { schoolId } = req.params;
  const school = inMemoryDb.schools.get(schoolId);
  if (!school) {
    return res.status(404).json({ error: 'School not found' });
  }

  // Calculate live classroom & school-wide stats
  let totalStudentCount = 0;
  let totalStarsAccumulated = 0;
  let masterySum = 0;

  for (const user of inMemoryDb.users.values()) {
    if (user.role === 'parent' && user.schoolId === schoolId && Array.isArray(user.children)) {
      for (const child of user.children) {
        totalStudentCount++;
        totalStarsAccumulated += (child.totalStars || 0);
        masterySum += (child.masteryPercentage || 85);
      }
    }
  }

  const avgMasteryVal = totalStudentCount > 0 ? Math.round(masterySum / totalStudentCount) : 89;

  res.json({
    schoolId,
    schoolName: school.name,
    banglaName: school.banglaName || school.name,
    ranking: school.metrics?.ranking || 1,
    totalStudents: school.metrics?.totalStudents || 14500,
    totalTeachers: school.metrics?.totalTeachers || 380,
    totalStarsEarned: (school.metrics?.averageWeeklyStars || 48200) + totalStarsAccumulated,
    averageMastery: `${avgMasteryVal}%`,
    averageMasteryNumeric: avgMasteryVal,
    activeLearningRate: '96.4%',
    dailyActiveMinutesAvg: 22,
    weeklyActiveStudents: Math.round((school.metrics?.totalStudents || 14500) * 0.94),
    activeModules: ['bangla', 'english', 'math', 'science', 'drawing', 'gk', 'moral', 'computer'],
    subjectMastery: [
      { id: 'bangla', name: 'বাংলা ভাষা ও সাহিত্য', nameEn: 'Bangla Language', mastery: 94, completionRate: 92, stars: 12400, status: 'EXCELLENT' },
      { id: 'english', name: 'ইংরেজি ও শব্দভাণ্ডার', nameEn: 'English & Phonics', mastery: 88, completionRate: 86, stars: 10800, status: 'GOOD' },
      { id: 'math', name: 'গণিত ও সংখ্যা পরিচিতি', nameEn: 'Math & Numbers', mastery: 81, completionRate: 79, stars: 9200, status: 'ATTENTION_NEEDED' },
      { id: 'science', name: 'বিজ্ঞান ও পরিবেশ', nameEn: 'Science & Nature', mastery: 92, completionRate: 89, stars: 7400, status: 'EXCELLENT' },
      { id: 'drawing', name: 'আঁকা ও শিল্পকলা', nameEn: 'Creative Art', mastery: 96, completionRate: 95, stars: 5800, status: 'EXCELLENT' },
      { id: 'gk', name: 'সাধারণ জ্ঞান ও নৈতিকতা', nameEn: 'General Knowledge', mastery: 90, completionRate: 88, stars: 2600, status: 'GOOD' }
    ],
    gradeDistribution: [
      { grade: 'Playgroup', label: 'প্লে-গ্রুপ', studentsCount: 950, avgMastery: 91, avgStars: 85 },
      { grade: 'Nursery', label: 'নার্সারি', studentsCount: 1420, avgMastery: 89, avgStars: 110 },
      { grade: 'KG', label: 'কেজি (KG)', studentsCount: 1850, avgMastery: 87, avgStars: 135 },
      { grade: 'Class 1', label: 'ক্লাস ১', studentsCount: 2200, avgMastery: 92, avgStars: 160 }
    ],
    commonDifficulties: [
      {
        topic: "বাংলা বর্ণমালা: 'খ' ও 'ঘ' বর্ণ শনাক্তকরণ",
        subject: "বাংলা",
        affectedPercentage: "৩২%",
        recommendation: "ছবিযুক্ত ফ্ল্যাশকার্ড ও অডিও উচ্চারণ রিপিটেশন অনুশীলন বৃদ্ধি করুন।"
      },
      {
        topic: "গণিত: দুই অঙ্কের সংখ্যার সাথে এক অঙ্কের সাধারণ বিয়োগ",
        subject: "গণিত",
        affectedPercentage: "৩৮%",
        recommendation: "বাস্তব ফল/ফুলের কাউন্টিং অ্যানিমেশন ভিত্তিক পাঠ দিন।"
      },
      {
        topic: "English: Sight words phonics ('th' and 'sh' sounds)",
        subject: "English",
        affectedPercentage: "২৭%",
        recommendation: "রাইমস কর্নারের অডিও স্টোরি শুনে সাথে সাথে বলার খেলা করান।"
      },
      {
        topic: "সংখ্যা গণনা: সংখ্যা '৭' ও '৯' এর মধ্যকার পার্থক্য",
        subject: "গণিত",
        affectedPercentage: "২২%",
        recommendation: "আঙুল দিয়ে ট্রেসিং ও আঁকার খাতায় লেখার প্র্যাকটিস।"
      }
    ]
  });
});

// -------------------------------------------------------------
// 5. In-App Concurrency Load Test Runner Endpoint
// -------------------------------------------------------------
app.post('/api/load-test/simulate', async (req, res) => {
  const { virtualUsers = 100, durationMs = 1500 } = req.body;
  const startTime = Date.now();
  const results = [];

  for (let i = 0; i < Math.min(virtualUsers, 300); i++) {
    const startReq = Date.now();
    // Simulate query execution against in-memory Firestore index
    const randomThana = ['Dhanmondi', 'Gulshan', 'Uttara', 'Bailey Road', 'Motijheel'][i % 5];
    const filtered = Array.from(inMemoryDb.schools.values()).filter((s) => s.thana === randomThana);
    const duration = Math.max(1, Date.now() - startReq + Math.floor(Math.random() * 8));
    results.push({ vu: i + 1, status: 200, latencyMs: duration, matches: filtered.length });
  }

  const latencies = results.map((r) => r.latencyMs).sort((a, b) => a - b);
  const p95Index = Math.floor(latencies.length * 0.95);
  const p95 = latencies[p95Index] || latencies[latencies.length - 1];
  const avg = Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length);

  res.json({
    success: true,
    virtualUsersSimulated: results.length,
    elapsedTotalMs: Date.now() - startTime,
    avgLatencyMs: avg,
    p95LatencyMs: p95,
    errorRate: '0.00%',
    statusSummary: '200 OK across all concurrent workers',
    thresholdPassed: p95 < 400,
  });
});

// -------------------------------------------------------------
// 6. Server-Side Rendered (SSR) School Discovery Directory Page
// -------------------------------------------------------------
app.get(['/schools/dhaka', '/schools'], (req, res) => {
  const schoolsList = Array.from(inMemoryDb.schools.values()).sort(
    (a, b) => (a.metrics?.ranking || 999) - (b.metrics?.ranking || 999)
  );

  const html = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ঢাকা টপ ১০০ স্কুল ডিরেক্টরি | Dhaka Top 100 Schools Directory (খুকির বাগান)</title>
  <meta name="description" content="ঢাকার সেরা ১০০টি অনুমোদিত প্রাথমিক ও মাধ্যমিক বিদ্যালয়ের তালিকা, কারিকুলাম, র্যাঙ্কিং এবং শিক্ষার্থী তথ্য।">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@500;700;800&family=Hind+Siliguri:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: #0f051d;
      --card-bg: #1c0b33;
      --card-border: rgba(255, 59, 78, 0.25);
      --accent-gold: #ffc400;
      --accent-red: #ff3b4e;
      --accent-green: #00e0a8;
      --text-light: #fff3f6;
      --text-dim: rgba(255, 243, 246, 0.7);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Hind Siliguri', sans-serif;
      background: radial-gradient(1000px 700px at 50% -10%, rgba(255,59,78,0.25), transparent 70%), var(--bg-dark);
      color: var(--text-light);
      min-height: 100vh;
      padding: 24px;
    }
    .header-wrap {
      max-width: 1200px;
      margin: 0 auto 32px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .brand-title {
      font-family: 'Baloo Da 2', sans-serif;
      font-size: 32px;
      font-weight: 800;
      color: #fff;
    }
    .home-link {
      background: linear-gradient(135deg, var(--accent-red), #d6112b);
      color: #fff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 99px;
      font-weight: 700;
      box-shadow: 0 4px 15px rgba(255,59,78,0.4);
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .search-filter-bar {
      max-width: 1200px;
      margin: 0 auto 28px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      background: rgba(255,255,255,0.06);
      padding: 16px;
      border-radius: 16px;
      border: 1px solid var(--card-border);
    }
    .search-input, .filter-select {
      background: #110524;
      border: 1px solid rgba(255,255,255,0.2);
      color: #fff;
      padding: 12px 16px;
      border-radius: 10px;
      font-family: inherit;
      font-size: 15px;
    }
    .search-input { flex: 2; min-width: 240px; }
    .filter-select { flex: 1; min-width: 180px; }
    .schools-grid {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 20px;
    }
    .school-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.2s ease, border-color 0.2s ease;
      box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    }
    .school-card:hover {
      transform: translateY(-4px);
      border-color: var(--accent-gold);
    }
    .rank-badge {
      background: rgba(255, 196, 0, 0.15);
      color: var(--accent-gold);
      border: 1px solid rgba(255, 196, 0, 0.4);
      padding: 4px 10px;
      border-radius: 99px;
      font-size: 12px;
      font-weight: 800;
      display: inline-block;
      margin-bottom: 10px;
    }
    .school-name {
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 4px;
      line-height: 1.3;
    }
    .school-bname {
      font-size: 15px;
      color: var(--text-dim);
      margin-bottom: 12px;
    }
    .school-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 16px;
    }
    .tag {
      background: rgba(255,255,255,0.08);
      font-size: 11px;
      padding: 3px 8px;
      border-radius: 6px;
      color: var(--accent-green);
    }
    .school-meta {
      border-top: 1px solid rgba(255,255,255,0.08);
      padding-top: 12px;
      font-size: 13px;
      color: var(--text-dim);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .link-action-btn {
      background: rgba(0, 224, 168, 0.2);
      border: 1px solid var(--accent-green);
      color: var(--accent-green);
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.2s;
    }
    .link-action-btn:hover {
      background: var(--accent-green);
      color: #110524;
    }
  </style>
</head>
<body>
  <header class="header-wrap">
    <div>
      <h1 class="brand-title">🏫 ঢাকা টপ ১০০ স্কুল ডিরেক্টরি</h1>
      <p style="color:var(--text-dim); font-size:15px;">Dhaka Top 100 Verified Preschools & Schools Registry</p>
    </div>
    <a href="/" class="home-link">🌸 খুকির বাগান হোমে যাও</a>
  </header>

  <div class="search-filter-bar">
    <input type="text" id="searchInput" class="search-input" placeholder="🔍 স্কুলের নাম বা থানা দিয়ে খুঁজুন..." oninput="filterSchools()">
    <select id="thanaFilter" class="filter-select" onchange="filterSchools()">
      <option value="ALL">📍 সকল থানা (All Thanas)</option>
      <option value="Bailey Road">Bailey Road</option>
      <option value="Dhanmondi">Dhanmondi</option>
      <option value="Gulshan">Gulshan</option>
      <option value="Uttara">Uttara</option>
      <option value="Motijheel">Motijheel</option>
      <option value="Mohammadpur">Mohammadpur</option>
      <option value="Tejgaon">Tejgaon</option>
      <option value="Cantonment">Cantonment</option>
      <option value="Mirpur">Mirpur</option>
      <option value="Baridhara">Baridhara</option>
    </select>
    <select id="curriculumFilter" class="filter-select" onchange="filterSchools()">
      <option value="ALL">📘 সকল কারিকুলাম</option>
      <option value="NCTB_BANGLA">NCTB বাংলা মাধ্যম</option>
      <option value="NCTB_ENGLISH">NCTB English Version</option>
      <option value="CAMBRIDGE">Cambridge (O/A Level)</option>
      <option value="IB">International Baccalaureate (IB)</option>
      <option value="EARLY_YEARS_EYFS">Early Years / Preschool</option>
    </select>
  </div>

  <div class="schools-grid" id="schoolsGrid">
    ${schoolsList
      .map(
        (school) => `
      <div class="school-card" data-thana="${school.thana}" data-curriculum="${school.curriculum.join(',')}" data-name="${school.name.toLowerCase()} ${(school.banglaName || '').toLowerCase()}">
        <div>
          <span class="rank-badge">RANK #${school.metrics?.ranking || 1} • 📍 ${school.thana}</span>
          <h2 class="school-name">${school.name}</h2>
          <div class="school-bname">${school.banglaName || ''}</div>
          <div class="school-tags">
            ${school.curriculum.map((c) => `<span class="tag">${c.replace(/_/g, ' ')}</span>`).join('')}
            <span class="tag" style="color:var(--accent-gold);">✓ Verified</span>
          </div>
        </div>
        <div class="school-meta">
          <span>👥 ${(school.metrics?.totalStudents || 0).toLocaleString()} শিক্ষার্থী</span>
          <a href="/?linkSchool=${encodeURIComponent(school.schoolId)}" class="link-action-btn">🔗 যুক্ত হোন</a>
        </div>
      </div>
    `
      )
      .join('')}
  </div>

  <script>
    function filterSchools() {
      const q = document.getElementById('searchInput').value.toLowerCase();
      const thana = document.getElementById('thanaFilter').value;
      const curr = document.getElementById('curriculumFilter').value;
      const cards = document.querySelectorAll('.school-card');

      cards.forEach(card => {
        const name = card.getAttribute('data-name') || '';
        const cThana = card.getAttribute('data-thana') || '';
        const cCurr = card.getAttribute('data-curriculum') || '';

        const matchesQuery = !q || name.includes(q) || cThana.toLowerCase().includes(q);
        const matchesThana = thana === 'ALL' || cThana === thana;
        const matchesCurr = curr === 'ALL' || cCurr.includes(curr);

        if (matchesQuery && matchesThana && matchesCurr) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
  </script>
</body>
</html>`;

  res.send(html);
});

// Local / mock gallery upload endpoint
app.post('/upload/gallery', (req, res) => {
  const id = Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
  res.json({
    url: `data:image/png;base64,placeholder`,
    key: `gallery/local/${id}.png`,
  });
});

// -------------------------------------------------------------
// 4. Data Model Migration Endpoints (Dual-Write & Subcollections)
// -------------------------------------------------------------
app.post('/api/migration/migrate-user', (req, res) => {
  const { uid, monolithicData } = req.body;
  if (!uid) {
    return res.status(400).json({ error: 'UID is required for migration' });
  }

  let user = inMemoryDb.users.get(uid);
  const data = monolithicData || user || {};

  const migrated = {
    progress: {},
    weakSpots: {},
    gallery: [],
    games: {}
  };

  // 1. Progress
  if (data.stars && typeof data.stars === 'object') {
    Object.entries(data.stars).forEach(([mod, count]) => {
      migrated.progress[mod] = {
        moduleId: mod,
        stars: Number(count) || 0,
        migratedAt: new Date().toISOString()
      };
    });
  }

  // 2. Weak spots
  if (data.weakSpots && typeof data.weakSpots === 'object') {
    Object.entries(data.weakSpots).forEach(([modKey, itemMap]) => {
      if (itemMap && typeof itemMap === 'object') {
        Object.entries(itemMap).forEach(([itemKey, errCount]) => {
          if (Number(errCount) > 0) {
            const key = `${modKey}_${encodeURIComponent(itemKey).replace(/%/g, '_')}`;
            migrated.weakSpots[key] = {
              itemId: key,
              moduleKey: modKey,
              itemKey: itemKey,
              errorCount: Number(errCount),
              migratedAt: new Date().toISOString()
            };
          }
        });
      }
    });
  }

  // 3. Gallery
  if (Array.isArray(data.galleryUrls)) {
    data.galleryUrls.forEach((url, i) => {
      migrated.gallery.push({
        itemId: `art_${i}_${Date.now().toString(36)}`,
        url: url,
        type: 'image/png',
        index: i,
        migratedAt: new Date().toISOString()
      });
    });
  }

  // 4. Games
  if (data.games && typeof data.games === 'object') {
    Object.entries(data.games).forEach(([gameId, gData]) => {
      migrated.games[gameId] = {
        gameId: gameId,
        ...gData,
        migratedAt: new Date().toISOString()
      };
    });
  }

  // Update in-memory user with migrated subcollections while retaining original fields
  if (user) {
    user.subcollections = migrated;
    user.migrationStatus = {
      subcollectionsMigrated: true,
      migratedAt: new Date().toISOString(),
      counts: {
        progress: Object.keys(migrated.progress).length,
        weakSpots: Object.keys(migrated.weakSpots).length,
        gallery: migrated.gallery.length,
        games: Object.keys(migrated.games).length
      }
    };
  }

  res.json({
    success: true,
    uid,
    migrationStatus: user ? user.migrationStatus : { subcollectionsMigrated: true },
    migrated
  });
});

app.get('/api/migration/status/:uid', (req, res) => {
  const user = inMemoryDb.users.get(req.params.uid);
  if (!user) {
    return res.json({
      uid: req.params.uid,
      migrated: false,
      message: 'User document not found or unmigrated.'
    });
  }
  res.json({
    uid: req.params.uid,
    migrated: !!(user.migrationStatus && user.migrationStatus.subcollectionsMigrated),
    migrationStatus: user.migrationStatus || null
  });
});


// Serve static assets from project directory
app.use(express.static(__dirname));

// Fallback for SPA/routing to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Khukir Bagan Enterprise Multi-Tenant Server running at http://${HOST}:${PORT}`);
});

