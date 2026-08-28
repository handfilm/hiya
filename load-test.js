import http from 'k6/http';
import { check, sleep } from 'k6';

/**
 * k6 Enterprise Concurrency Load Test
 * Evaluates performance of Dhaka School Discovery, Multi-Tenant RBAC Registration,
 * and Learning Progress Synchronization.
 */

export const options = {
  stages: [
    { duration: '15s', target: 50 },   // Warm-up to 50 concurrent virtual users
    { duration: '30s', target: 200 },  // Ramped traffic to 200 VUs
    { duration: '30s', target: 300 },  // Peak load: 300 concurrent requests
    { duration: '15s', target: 0 },    // Gradual cool-down
  ],
  thresholds: {
    // 95% of requests must complete under 350ms
    http_req_duration: ['p(95)<350'],
    // Request error rate must remain under 1%
    http_req_failed: ['rate<0.01'],
  },
};

const BASE_URL = __ENV.TARGET_URL || 'http://localhost:3000';

export default function () {
  // 1. Benchmark School Discovery API (Public Reads)
  const resSchoolsApi = http.get(`${BASE_URL}/api/schools?thana=Dhanmondi&curriculum=CAMBRIDGE`);
  check(resSchoolsApi, {
    'schools API status is 200': (r) => r.status === 200,
    'schools API latency < 200ms': (r) => r.timings.duration < 200,
  });

  // 2. Benchmark Server-Side Rendered School Discovery Directory Page
  const resSchoolsPage = http.get(`${BASE_URL}/schools/dhaka`);
  check(resSchoolsPage, {
    'schools SSR page status is 200': (r) => r.status === 200,
    'schools SSR page contains Top 100': (r) => r.body.includes('Dhaka Top 100 Schools'),
  });

  // 3. Benchmark Multi-Tenant Parent Registration & RBAC Claims
  const uniqueId = `${__VU}_${__ITER}`;
  const registerPayload = JSON.stringify({
    fullName: `Parent Test ${uniqueId}`,
    email: `parent_${uniqueId}@gmail.com`,
    phoneNumber: '+8801700000000',
    schoolId: 'SCH_DHK_001',
    role: 'parent',
    child: {
      name: `Child ${uniqueId}`,
      grade: 'Nursery',
      rollNumber: String((__ITER % 50) + 1),
      section: 'Rose',
    },
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'X-Mock-Emulator-Token': `emu_token_${uniqueId}`,
    },
  };

  const resRegister = http.post(`${BASE_URL}/api/auth/register-with-school`, registerPayload, params);
  check(resRegister, {
    'register endpoint responded 200 or valid': (r) => r.status === 200 || r.status === 201,
  });

  // 4. Benchmark Progress Sync for Tenant
  const progressPayload = JSON.stringify({
    uid: `usr_parent_${uniqueId}`,
    schoolId: 'SCH_DHK_001',
    childId: `chld_${uniqueId}`,
    module: 'letters',
    starsEarned: 15,
    completedCount: 11,
    totalItems: 11,
    masteryPercentage: 100,
  });

  const resProgress = http.post(`${BASE_URL}/api/learning-progress/sync`, progressPayload, params);
  check(resProgress, {
    'learning progress sync 200': (r) => r.status === 200,
  });

  sleep(1);
}
