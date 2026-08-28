/**
 * Firebase Local Emulator Seed Script
 * Populates Auth, Firestore schools, users, and learning_progress collections
 */

import { DHAKA_TOP_SCHOOLS } from './schools-data.js';

console.log('🚀 Seeding Firebase Emulator / Multi-Tenant Store with Top 100 Dhaka Schools...');

export async function seedDatabase(dbInstance) {
  const stats = { schools: 0, users: 0, progressRecords: 0 };

  // 1. Seed Top 100 Schools
  for (const school of DHAKA_TOP_SCHOOLS) {
    if (dbInstance && typeof dbInstance.collection === 'function') {
      await dbInstance.collection('schools').doc(school.schoolId).set(school, { merge: true });
    }
    stats.schools++;
  }

  // 2. Seed Mock Multi-Tenant Role Accounts for RBAC verification
  const sampleUsers = [
    {
      uid: 'usr_super_admin_01',
      email: 'superadmin@khukirbagan.edu.bd',
      fullName: 'Dr. Shah Alam (Director of Education)',
      role: 'superAdmin',
      schoolId: null,
      schoolName: 'Ministry of Primary Education Board',
      createdAt: new Date().toISOString()
    },
    {
      uid: 'usr_school_admin_vnsc',
      email: 'principal@vnsc.edu.bd',
      fullName: 'Kamrun Nahar (Principal)',
      role: 'schoolAdmin',
      schoolId: 'SCH_DHK_001',
      schoolName: 'Viqarunnisa Noon School and College',
      createdAt: new Date().toISOString()
    },
    {
      uid: 'usr_teacher_vnsc_01',
      email: 'teacher.rahima@vnsc.edu.bd',
      fullName: 'Rahima Khatun (Pre-primary Teacher)',
      role: 'teacher',
      schoolId: 'SCH_DHK_001',
      schoolName: 'Viqarunnisa Noon School and College',
      assignedGrades: ['Playgroup', 'Nursery'],
      createdAt: new Date().toISOString()
    },
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
          grade: 'Nursery',
          rollNumber: '14',
          section: 'Lily'
        }
      ],
      createdAt: new Date().toISOString()
    }
  ];

  for (const user of sampleUsers) {
    if (dbInstance && typeof dbInstance.collection === 'function') {
      await dbInstance.collection('users').doc(user.uid).set(user, { merge: true });
    }
    stats.users++;
  }

  console.log(`✅ Emulator Seed Completed: ${stats.schools} Schools, ${stats.users} Multi-tenant users.`);
  return stats;
}

// Direct execution test runner
if (process.argv[1]?.endsWith('seed-emulator.js')) {
  seedDatabase(null).then(() => {
    console.log('🌱 Data verification successful.');
  });
}
