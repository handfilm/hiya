/**
 * Hiya / Khukir Bagan — Teacher & School Admin Dashboards Module
 * Phase 4 Implementation: Read-Only Classroom & School-Wide Portals with Route Guards
 */

(function(global) {
  'use strict';

  // State
  let currentRole = 'teacher'; // 'parent', 'teacher', 'schoolAdmin', 'superAdmin'
  let currentSchoolId = 'SCH_DHK_001';
  let activeTeacherTab = 'roster'; // 'roster', 'analytics'
  let activeAdminTab = 'overview'; // 'overview', 'teachers', 'students', 'reports'
  let activeGradeFilter = 'ALL';
  let studentSearchQuery = '';
  let cachedStudents = [];
  let cachedTeachers = [];
  let cachedAnalytics = null;
  let selectedStudent = null;

  // Test accounts definitions for easy verification
  const TEST_ACCOUNTS = {
    teacher: {
      uid: 'usr_teacher_vnsc_01',
      name: 'রাহিমা খাতুন (শিক্ষক)',
      nameEn: 'Rahima Khatun (Teacher)',
      email: 'teacher.rahima@vnsc.edu.bd',
      role: 'teacher',
      schoolId: 'SCH_DHK_001',
      schoolName: 'Viqarunnisa Noon School and College',
      assignedGrades: ['Playgroup', 'Nursery', 'KG']
    },
    schoolAdmin: {
      uid: 'usr_school_admin_vnsc',
      name: 'কামরুন নাহার (অধ্যক্ষ)',
      nameEn: 'Kamrun Nahar (Principal)',
      email: 'principal@vnsc.edu.bd',
      role: 'schoolAdmin',
      schoolId: 'SCH_DHK_001',
      schoolName: 'Viqarunnisa Noon School and College'
    },
    parent: {
      uid: 'usr_parent_ayesha',
      name: 'ফারহানা ইয়াসমিন (অভিভাবক)',
      nameEn: 'Farhana Yasmin (Parent)',
      email: 'parent.farhana@gmail.com',
      role: 'parent',
      schoolId: 'SCH_DHK_001',
      schoolName: 'Viqarunnisa Noon School and College'
    },
    superAdmin: {
      uid: 'usr_super_admin_01',
      name: 'ড. শাহ আলম (সুপার অ্যাডমিন)',
      nameEn: 'Dr. Shah Alam (Super Admin)',
      email: 'superadmin@khukirbagan.edu.bd',
      role: 'superAdmin',
      schoolId: 'SCH_DHK_001',
      schoolName: 'All Schools (DPE)'
    }
  };

  /**
   * Route Guard: Verify access control based on user's custom claims role
   */
  function verifyAccess(requiredRoles, targetRouteName) {
    // Check in-memory role or claims
    const isAllowed = requiredRoles.includes(currentRole);
    if (!isAllowed) {
      showGracefulAccessToast(targetRouteName);
      // Fallback navigate to home
      if (typeof window.drawerGo === 'function') {
        window.drawerGo('home');
      } else if (typeof window.showHome === 'function') {
        window.showHome();
      }
      return false;
    }
    return true;
  }

  /**
   * Graceful non-intimidating toast for unauthorized accounts (parent/child)
   */
  function showGracefulAccessToast(targetRouteName) {
    let toast = document.getElementById('taAccessToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'taAccessToast';
      toast.className = 'ta-access-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>🌷</span> <span>এই পেজটি শুধুমাত্র শিক্ষক ও বিদ্যালয় প্রশাসনের জন্য নির্ধারিত। আপনি আপনার প্রিয় বাগানে আছেন!</span>`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  /**
   * Role Switcher Helper for Testing & Verification
   */
  async function switchTestRole(role) {
    if (!TEST_ACCOUNTS[role]) return;
    const account = TEST_ACCOUNTS[role];
    currentRole = role;
    currentSchoolId = account.schoolId || 'SCH_DHK_001';

    try {
      await fetch('/api/auth/set-custom-claims', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid: account.uid,
          role: role,
          schoolId: currentSchoolId,
          email: account.email
        })
      });
    } catch (err) {
      console.warn('[Portal] Test claims sync notice:', err);
    }

    // Refresh UI based on target
    const currentHash = window.location.hash;
    if (currentHash === '#teacher' || currentHash === '#teacherDashboard') {
      if (role === 'parent') {
        verifyAccess(['teacher', 'superAdmin'], 'শিক্ষক ড্যাশবোর্ড');
      } else {
        renderTeacherDashboard();
      }
    } else if (currentHash === '#school-admin' || currentHash === '#schoolAdminDashboard') {
      if (role === 'parent' || role === 'teacher') {
        verifyAccess(['schoolAdmin', 'superAdmin'], 'অ্যাডমিন ড্যাশবোর্ড');
      } else {
        renderSchoolAdminDashboard();
      }
    } else {
      // Re-render role preview if in modal
      if (typeof window.updateRbacClaimsPreview === 'function') {
        window.updateRbacClaimsPreview();
      }
    }
  }

  /**
   * Render Role Switcher Bar Component
   */
  function renderRoleSwitcherBar(activeRole) {
    return `
      <div class="ta-test-switcher-bar" id="taTestSwitcher">
        <div class="ta-test-switcher-label">
          <span>⚡ RBAC টেস্ট সুইচ (Claims Simulator):</span>
        </div>
        <div class="ta-test-roles-group">
          <button class="ta-role-chip ${activeRole === 'teacher' ? 'active' : ''}" onclick="TeacherAdminPortal.switchRole('teacher')">
            👩‍🏫 শিক্ষক (Teacher)
          </button>
          <button class="ta-role-chip ${activeRole === 'schoolAdmin' ? 'active' : ''}" onclick="TeacherAdminPortal.switchRole('schoolAdmin')">
            🏛️ অধ্যক্ষ (Admin)
          </button>
          <button class="ta-role-chip ${activeRole === 'parent' ? 'active' : ''}" onclick="TeacherAdminPortal.switchRole('parent')">
            👨‍👩‍👧 অভিভাবক (Parent - Blocked)
          </button>
          <button class="ta-role-chip ${activeRole === 'superAdmin' ? 'active' : ''}" onclick="TeacherAdminPortal.switchRole('superAdmin')">
            👑 সুপার অ্যাডমিন
          </button>
        </div>
      </div>
    `;
  }

  /**
   * =========================================================================
   * 1. TEACHER DASHBOARD
   * =========================================================================
   */
  async function renderTeacherDashboard() {
    if (!verifyAccess(['teacher', 'superAdmin', 'schoolAdmin'], 'শিক্ষক ড্যাশবোর্ড')) {
      return;
    }

    const container = document.getElementById('teacherDashboardContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="ta-dashboard-wrap">
        <header class="ta-header-banner">
          <div class="ta-header-inner">
            <div class="ta-brand-area">
              <span class="ta-brand-icon">👩‍🏫</span>
              <div>
                <h1 class="ta-portal-title">
                  শিক্ষক ড্যাশবোর্ড
                  <span class="ta-portal-badge">Teacher Portal</span>
                </h1>
                <div class="ta-school-badge">
                  <span>🏫 ${TEST_ACCOUNTS[currentRole]?.schoolName || 'Viqarunnisa Noon School and College'}</span>
                  <span>•</span>
                  <span>শ্রেণি: প্লে, নার্সারি ও কেজি</span>
                </div>
              </div>
            </div>
            <div class="ta-header-actions">
              <button class="btn secondary" style="font-size:13px; padding:6px 14px; border-radius:20px; border:1px solid rgba(255,255,255,0.2);" onclick="window.drawerGo('home')">
                🏡 হোম বাগান
              </button>
            </div>
          </div>
        </header>

        <div class="ta-container">
          ${renderRoleSwitcherBar(currentRole)}

          <!-- Nav Tabs -->
          <div class="ta-nav-tabs">
            <button class="ta-tab-btn ${activeTeacherTab === 'roster' ? 'active' : ''}" onclick="TeacherAdminPortal.setTeacherTab('roster')">
              <span>👥 আমার শ্রেণির শিক্ষার্থীরা</span>
            </button>
            <button class="ta-tab-btn ${activeTeacherTab === 'analytics' ? 'active' : ''}" onclick="TeacherAdminPortal.setTeacherTab('analytics')">
              <span>📊 শ্রেণিকক্ষ অ্যানালিটিক্স</span>
            </button>
          </div>

          <!-- Content Body -->
          <div id="taTeacherContent">
            <div style="text-align:center; padding:40px; color:rgba(255,255,255,0.6);">
              তথ্য লোড হচ্ছে...
            </div>
          </div>
        </div>
      </div>
    `;

    // Fetch data and populate tab
    await loadTeacherData();
  }

  async function loadTeacherData() {
    try {
      const [studentsRes, analyticsRes] = await Promise.all([
        fetch(`/api/schools/${currentSchoolId}/students`),
        fetch(`/api/schools/${currentSchoolId}/analytics`)
      ]);

      const studentsData = await studentsRes.json();
      const analyticsData = await analyticsRes.json();

      cachedStudents = studentsData.students || [];
      cachedAnalytics = analyticsData || {};

      if (activeTeacherTab === 'roster') {
        renderTeacherRosterTab();
      } else {
        renderTeacherAnalyticsTab();
      }
    } catch (err) {
      console.error('Error loading teacher data:', err);
      const content = document.getElementById('taTeacherContent');
      if (content) {
        content.innerHTML = `
          <div class="ta-empty-state">
            <div class="ta-empty-icon">⚠️</div>
            <div class="ta-empty-title">তথ্য লোড করতে সমস্যা হয়েছে</div>
            <div class="ta-empty-desc">অনুগ্রহ করে ইন্টারনেট সংযোগ চেক করে পুনরায় চেষ্টা করুন।</div>
          </div>
        `;
      }
    }
  }

  function renderTeacherRosterTab() {
    const content = document.getElementById('taTeacherContent');
    if (!content) return;

    // Filter students
    let filtered = cachedStudents.filter(s => {
      if (activeGradeFilter !== 'ALL' && s.grade !== activeGradeFilter) return false;
      if (studentSearchQuery) {
        const q = studentSearchQuery.toLowerCase();
        return s.name.toLowerCase().includes(q) || s.rollNumber.includes(q);
      }
      return true;
    });

    const metricsHtml = `
      <div class="ta-metrics-grid">
        <div class="ta-metric-card">
          <div class="ta-metric-head">
            <span>মোট শিক্ষার্থী</span>
            <span class="ta-metric-icon">🎒</span>
          </div>
          <div class="ta-metric-val">${cachedStudents.length} জন</div>
          <div class="ta-metric-sub">নার্সারি, কেজি ও প্লে-গ্রুপ</div>
        </div>
        <div class="ta-metric-card">
          <div class="ta-metric-head">
            <span>গড় পারদর্শিতা</span>
            <span class="ta-metric-icon">🎯</span>
          </div>
          <div class="ta-metric-val" style="color:var(--accent-green, #00E0A8);">${cachedAnalytics?.averageMastery || '89%'}</div>
          <div class="ta-metric-sub">পাঠ সমাপ্তির হার: ৯২%</div>
        </div>
        <div class="ta-metric-card">
          <div class="ta-metric-head">
            <span>অর্জিত মোট স্টার</span>
            <span class="ta-metric-icon">⭐</span>
          </div>
          <div class="ta-metric-val" style="color:var(--accent-gold, #FFC400);">
            ${cachedStudents.reduce((acc, s) => acc + (s.totalStars || 0), 0)} ⭐
          </div>
          <div class="ta-metric-sub">সাপ্তাহিক নিয়মিত অনুশীলন</div>
        </div>
        <div class="ta-metric-card">
          <div class="ta-metric-head">
            <span>বিশেষ মনোযোগ প্রয়োজন</span>
            <span class="ta-metric-icon">💡</span>
          </div>
          <div class="ta-metric-val" style="color:var(--ruby-500, #FF3B4E);">
            ${cachedStudents.filter(s => s.status === 'NEEDS_ATTENTION').length} জন
          </div>
          <div class="ta-metric-sub">গণিত ও বর্ণমালার পুনরাবৃত্তি</div>
        </div>
      </div>
    `;

    const toolbarHtml = `
      <div class="ta-toolbar">
        <div class="ta-filter-group">
          <span style="font-size:14px; font-weight:600; color:rgba(255,243,246,0.7);">শ্রেণি নির্বাচন:</span>
          <select class="ta-select" id="taGradeSelect" onchange="TeacherAdminPortal.handleGradeFilter(this.value)">
            <option value="ALL" ${activeGradeFilter === 'ALL' ? 'selected' : ''}>সকল শ্রেণি (All)</option>
            <option value="Nursery" ${activeGradeFilter === 'Nursery' ? 'selected' : ''}>নার্সারি (Nursery - Lily)</option>
            <option value="KG" ${activeGradeFilter === 'KG' ? 'selected' : ''}>কেজি (KG - Rose)</option>
            <option value="Playgroup" ${activeGradeFilter === 'Playgroup' ? 'selected' : ''}>প্লে-গ্রুপ (Playgroup - Tulip)</option>
          </select>
        </div>
        <div>
          <input 
            type="text" 
            class="ta-search-input" 
            placeholder="🔍 শিক্ষার্থীর নাম বা রোল দিয়ে খুঁজুন..." 
            value="${studentSearchQuery}"
            oninput="TeacherAdminPortal.handleSearch(this.value)"
          />
        </div>
      </div>
    `;

    let studentsListHtml = '';
    if (filtered.length === 0) {
      studentsListHtml = `
        <div class="ta-empty-state">
          <div class="ta-empty-icon">🌱</div>
          <h3 class="ta-empty-title">কোনো শিক্ষার্থী পাওয়া যায়নি</h3>
          <p class="ta-empty-desc">আপনার নির্বাচিত ফিল্টারে কোনো শিক্ষার্থীর তথ্য নেই। অন্য শ্রেণি নির্বাচন করুন অথবা নতুন শিক্ষার্থী লিঙ্ক করুন।</p>
        </div>
      `;
    } else {
      studentsListHtml = `
        <div class="ta-students-grid">
          ${filtered.map(s => {
            const statusClass = s.status === 'EXCELLENT' ? 'excellent' : (s.status === 'NEEDS_ATTENTION' ? 'attention' : 'ontrack');
            const weakKeys = Object.values(s.subcollections?.weakSpots || {});
            
            return `
              <div class="ta-student-card">
                <div class="ta-student-card-head">
                  <div class="ta-student-avatar">${s.avatar || '🧒'}</div>
                  <div class="ta-student-meta">
                    <h3 class="ta-student-name">${s.name}</h3>
                    <div class="ta-student-info">
                      <span>শ্রেণি: <strong>${s.grade} (${s.section})</strong></span>
                      <span>•</span>
                      <span>রোল: <strong>${s.rollNumber}</strong></span>
                    </div>
                  </div>
                  <span class="ta-status-tag ${statusClass}">
                    ${s.statusLabel || 'অগ্রগতি চলমান'}
                  </span>
                </div>

                <div class="ta-student-stats-row">
                  <div class="ta-stat-item">
                    <span class="ta-stat-item-label">মোট স্টার</span>
                    <span class="ta-stat-item-value" style="color:var(--accent-gold, #FFC400);">⭐ ${s.totalStars}</span>
                  </div>
                  <div class="ta-stat-item">
                    <span class="ta-stat-item-label">পারদর্শিতা</span>
                    <span class="ta-stat-item-value" style="color:var(--accent-green, #00E0A8);">${s.masteryPercentage}%</span>
                  </div>
                  <div class="ta-stat-item">
                    <span class="ta-stat-item-label">ধারাবাহিকতা</span>
                    <span class="ta-stat-item-value">${s.streakDays} দিন</span>
                  </div>
                </div>

                ${weakKeys.length > 0 ? `
                  <div>
                    <div style="font-size:11px; color:rgba(255,243,246,0.6); margin-bottom:4px;">রিভিশন প্রয়োজন:</div>
                    <div class="ta-weak-pills-wrap">
                      ${weakKeys.map(w => `<span class="ta-weak-pill">⚠️ ${w.label}</span>`).join('')}
                    </div>
                  </div>
                ` : `
                  <div style="font-size:12px; color:var(--accent-green, #00E0A8); display:flex; align-items:center; gap:4px;">
                    <span>✓</span> <span>সকল বিষয়ে নিয়মিত পারদর্শী</span>
                  </div>
                `}

                <button class="ta-btn-view-profile" onclick="TeacherAdminPortal.openStudentModal('${s.childId}')">
                  <span>📄 বিস্তারিত অগ্রগতি প্রোফাইল</span>
                </button>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    content.innerHTML = metricsHtml + toolbarHtml + studentsListHtml;
  }

  function renderTeacherAnalyticsTab() {
    const content = document.getElementById('taTeacherContent');
    if (!content || !cachedAnalytics) return;

    const data = cachedAnalytics;

    content.innerHTML = `
      <div class="ta-analytics-grid">
        <!-- Subject Mastery Panel -->
        <div class="ta-panel">
          <div class="ta-panel-head">
            <h2 class="ta-panel-title">
              <span>📚 বিষয়ভিত্তিক পারদর্শিতা ও অগ্রগতি</span>
            </h2>
            <span style="font-size:12px; color:rgba(255,243,246,0.7);">ক্লাস গড়: ${data.averageMastery}</span>
          </div>

          <div>
            ${(data.subjectMastery || []).map(sub => `
              <div class="ta-subject-row">
                <div class="ta-subject-info">
                  <span>${sub.name}</span>
                  <span style="color:var(--accent-green, #00E0A8);">${sub.mastery}%</span>
                </div>
                <div class="ta-progress-track">
                  <div class="ta-progress-fill ${sub.id}" style="width:${sub.mastery}%;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Common Difficulties Panel -->
        <div class="ta-panel">
          <div class="ta-panel-head">
            <h2 class="ta-panel-title">
              <span>💡 শ্রেণিকক্ষের সাধারণ দুর্বলতা ও পরামর্শ</span>
            </h2>
            <span style="font-size:12px; color:var(--accent-gold, #FFC400);">৪টি ক্ষেত্র চিহ্নিত</span>
          </div>

          <div style="display:flex; flex-direction:column; gap:12px;">
            ${(data.commonDifficulties || []).map(diff => `
              <div class="ta-difficulty-card">
                <div class="ta-difficulty-head">
                  <span class="ta-difficulty-topic">${diff.topic}</span>
                  <span class="ta-difficulty-badge">${diff.affectedPercentage} শিক্ষার্থী</span>
                </div>
                <div class="ta-difficulty-rec">
                  <strong>পরামর্শ:</strong> ${diff.recommendation}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Student Detailed Profile Modal (Showing Subcollections data)
   */
  function openStudentModal(studentId) {
    selectedStudent = cachedStudents.find(s => s.childId === studentId);
    if (!selectedStudent) return;

    let modal = document.getElementById('taStudentModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'taStudentModal';
      modal.className = 'ta-modal-overlay';
      document.body.appendChild(modal);
    }

    const s = selectedStudent;
    const progressList = Object.values(s.subcollections?.progress || {});
    const weakList = Object.values(s.subcollections?.weakSpots || {});

    modal.innerHTML = `
      <div class="ta-modal-content">
        <div class="ta-modal-header">
          <div style="display:flex; align-items:center; gap:12px;">
            <span style="font-size:32px;">${s.avatar || '🧒'}</span>
            <div>
              <h2 style="font-size:20px; margin:0; color:#FFFFFF;">${s.name}</h2>
              <div style="font-size:13px; color:rgba(255,243,246,0.7);">
                ${s.grade} (${s.section}) • রোল: ${s.rollNumber} • অভিভাবক: ${s.parentName}
              </div>
            </div>
          </div>
          <button class="ta-modal-close" onclick="TeacherAdminPortal.closeStudentModal()">✕</button>
        </div>

        <div class="ta-modal-body">
          <!-- Overview Cards -->
          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
            <div style="background:rgba(0,0,0,0.3); padding:12px; border-radius:12px; text-align:center;">
              <div style="font-size:12px; color:rgba(255,243,246,0.6);">মোট স্টার</div>
              <div style="font-size:20px; font-weight:800; color:var(--accent-gold, #FFC400);">⭐ ${s.totalStars}</div>
            </div>
            <div style="background:rgba(0,0,0,0.3); padding:12px; border-radius:12px; text-align:center;">
              <div style="font-size:12px; color:rgba(255,243,246,0.6);">গড় পারদর্শিতা</div>
              <div style="font-size:20px; font-weight:800; color:var(--accent-green, #00E0A8);">${s.masteryPercentage}%</div>
            </div>
            <div style="background:rgba(0,0,0,0.3); padding:12px; border-radius:12px; text-align:center;">
              <div style="font-size:12px; color:rgba(255,243,246,0.6);">অনুশীলন স্ট্রিক</div>
              <div style="font-size:20px; font-weight:800; color:#00CCFF;">🔥 ${s.streakDays} দিন</div>
            </div>
          </div>

          <!-- Subject Mastery from Subcollection (users/{uid}/progress/{moduleId}) -->
          <div>
            <h3 style="font-size:16px; margin:0 0 12px 0; color:#FFFFFF; display:flex; align-items:center; gap:6px;">
              <span>📊 পাঠ্যক্রম ও বিষয়ভিত্তিক দক্ষতা (Progress Subcollection)</span>
            </h3>
            <div style="display:flex; flex-direction:column; gap:10px;">
              ${progressList.length > 0 ? progressList.map(p => `
                <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:12px;">
                  <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:14px; font-weight:600;">
                    <span>${p.moduleName || p.moduleId}</span>
                    <span style="color:var(--accent-gold, #FFC400);">⭐ ${p.stars} (${p.mastery}%)</span>
                  </div>
                  <div class="ta-progress-track">
                    <div class="ta-progress-fill ${p.moduleId}" style="width:${p.mastery}%;"></div>
                  </div>
                  <div style="display:flex; justify-content:space-between; font-size:11px; color:rgba(255,243,246,0.5); margin-top:6px;">
                    <span>পাঠ সমাপ্ত: ${p.completedCount}/${p.totalItems}</span>
                    <span>সর্বশেষ অনুশীলন: ${p.lastPracticed || 'সম্প্রতি'}</span>
                  </div>
                </div>
              `).join('') : '<p style="color:rgba(255,243,246,0.6); font-size:13px;">এখনও কোনো বিষয় অনুশীলন করেনি।</p>'}
            </div>
          </div>

          <!-- Weak Spots from Subcollection (users/{uid}/weakSpots) -->
          <div>
            <h3 style="font-size:16px; margin:0 0 12px 0; color:#FFFFFF; display:flex; align-items:center; gap:6px;">
              <span>⚠️ বিশেষ যত্ন ও রিভিশনের তালিকা (Weak Spots)</span>
            </h3>
            ${weakList.length > 0 ? `
              <div style="display:flex; flex-direction:column; gap:8px;">
                ${weakList.map(w => `
                  <div style="background:rgba(255,59,78,0.1); border-left:3px solid var(--ruby-500, #FF3B4E); padding:10px 14px; border-radius:0 8px 8px 0;">
                    <div style="font-size:13px; font-weight:700; color:#FFA4A4;">
                      ${w.label} (ভুল প্রচেষ্টা: ${w.errorCount} বার)
                    </div>
                    <div style="font-size:12px; color:rgba(255,243,246,0.8); margin-top:2px;">
                      পরামর্শ: ${w.note || 'পুনরাবৃত্তি প্রয়োজন'}
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : `
              <div style="background:rgba(0,224,168,0.1); border-left:3px solid var(--accent-green, #00E0A8); padding:10px 14px; border-radius:0 8px 8px 0; font-size:13px; color:var(--accent-green, #00E0A8);">
                ✓ কোনো দুর্বল ক্ষেত্র নেই — চমৎকার পারফরম্যান্স!
              </div>
            `}
          </div>

          <!-- Parent Contact Info -->
          <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:14px; font-size:13px; color:rgba(255,243,246,0.7); display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px;">
            <span>👨‍👩‍👧 অভিভাবক: <strong>${s.parentName}</strong></span>
            <span>✉️ ${s.parentEmail}</span>
            <span>📞 ${s.parentPhone}</span>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('open');
  }

  function closeStudentModal() {
    const modal = document.getElementById('taStudentModal');
    if (modal) modal.classList.remove('open');
  }

  /**
   * =========================================================================
   * 2. SCHOOL ADMIN DASHBOARD
   * =========================================================================
   */
  async function renderSchoolAdminDashboard() {
    if (!verifyAccess(['schoolAdmin', 'superAdmin'], 'বিদ্যালয় প্রশাসন ড্যাশবোর্ড')) {
      return;
    }

    const container = document.getElementById('schoolAdminDashboardContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="ta-dashboard-wrap">
        <header class="ta-header-banner">
          <div class="ta-header-inner">
            <div class="ta-brand-area">
              <span class="ta-brand-icon">🏛️</span>
              <div>
                <h1 class="ta-portal-title">
                  বিদ্যালয় প্রশাসন ড্যাশবোর্ড
                  <span class="ta-portal-badge" style="background:#8A2BE2;">School Admin Portal</span>
                </h1>
                <div class="ta-school-badge">
                  <span>🏫 ${TEST_ACCOUNTS.schoolAdmin.schoolName}</span>
                  <span>•</span>
                  <span>ঢাকা শীর্ষ র্যাঙ্কিং: #১</span>
                </div>
              </div>
            </div>
            <div class="ta-header-actions">
              <button class="btn secondary" style="font-size:13px; padding:6px 14px; border-radius:20px; border:1px solid rgba(255,255,255,0.2);" onclick="window.drawerGo('home')">
                🏡 হোম বাগান
              </button>
            </div>
          </div>
        </header>

        <div class="ta-container">
          ${renderRoleSwitcherBar(currentRole)}

          <!-- Nav Tabs -->
          <div class="ta-nav-tabs">
            <button class="ta-tab-btn ${activeAdminTab === 'overview' ? 'active' : ''}" onclick="TeacherAdminPortal.setAdminTab('overview')">
              <span>🏫 প্রাতিষ্ঠানিক পর্যালোচনা</span>
            </button>
            <button class="ta-tab-btn ${activeAdminTab === 'teachers' ? 'active' : ''}" onclick="TeacherAdminPortal.setAdminTab('teachers')">
              <span>👩‍🏫 শিক্ষকবৃন্দের তালিকা</span>
            </button>
            <button class="ta-tab-btn ${activeAdminTab === 'students' ? 'active' : ''}" onclick="TeacherAdminPortal.setAdminTab('students')">
              <span>🎒 শিক্ষার্থী ব্যবস্থাপনা</span>
            </button>
            <button class="ta-tab-btn ${activeAdminTab === 'reports' ? 'active' : ''}" onclick="TeacherAdminPortal.setAdminTab('reports')">
              <span>📈 সার্বিক রিপোর্ট ও অ্যানালিটিক্স</span>
            </button>
          </div>

          <!-- Content Body -->
          <div id="taAdminContent">
            <div style="text-align:center; padding:40px; color:rgba(255,255,255,0.6);">
              তথ্য লোড হচ্ছে...
            </div>
          </div>
        </div>
      </div>
    `;

    await loadAdminData();
  }

  async function loadAdminData() {
    try {
      const [analyticsRes, teachersRes, studentsRes] = await Promise.all([
        fetch(`/api/schools/${currentSchoolId}/analytics`),
        fetch(`/api/schools/${currentSchoolId}/teachers`),
        fetch(`/api/schools/${currentSchoolId}/students`)
      ]);

      cachedAnalytics = await analyticsRes.json();
      const teachersData = await teachersRes.json();
      const studentsData = await studentsRes.json();

      cachedTeachers = teachersData.teachers || [];
      cachedStudents = studentsData.students || [];

      if (activeAdminTab === 'overview') {
        renderAdminOverviewTab();
      } else if (activeAdminTab === 'teachers') {
        renderAdminTeachersTab();
      } else if (activeAdminTab === 'students') {
        renderAdminStudentsTab();
      } else {
        renderAdminReportsTab();
      }
    } catch (err) {
      console.error('Error loading admin data:', err);
    }
  }

  function renderAdminOverviewTab() {
    const content = document.getElementById('taAdminContent');
    if (!content || !cachedAnalytics) return;

    const a = cachedAnalytics;

    content.innerHTML = `
      <div class="ta-metrics-grid">
        <div class="ta-metric-card">
          <div class="ta-metric-head">
            <span>মোট শিক্ষার্থী</span>
            <span class="ta-metric-icon">🎓</span>
          </div>
          <div class="ta-metric-val">${(a.totalStudents || 14500).toLocaleString()} জন</div>
          <div class="ta-metric-sub">সকল শাখা ও শ্রেণি মিলিয়ে</div>
        </div>
        <div class="ta-metric-card">
          <div class="ta-metric-head">
            <span>অনুমোদিত শিক্ষক</span>
            <span class="ta-metric-icon">👩‍🏫</span>
          </div>
          <div class="ta-metric-val">${a.totalTeachers || 380} জন</div>
          <div class="ta-metric-sub">সক্রিয় শিক্ষক মেন্টর</div>
        </div>
        <div class="ta-metric-card">
          <div class="ta-metric-head">
            <span>অর্জিত মোট স্টার</span>
            <span class="ta-metric-icon">⭐</span>
          </div>
          <div class="ta-metric-val" style="color:var(--accent-gold, #FFC400);">
            ${(a.totalStarsEarned || 48200).toLocaleString()} ⭐
          </div>
          <div class="ta-metric-sub">ঢাকা বিভাগে ১ম স্থান</div>
        </div>
        <div class="ta-metric-card">
          <div class="ta-metric-head">
            <span>প্রাতিষ্ঠানিক পারদর্শিতা</span>
            <span class="ta-metric-icon">📈</span>
          </div>
          <div class="ta-metric-val" style="color:var(--accent-green, #00E0A8);">${a.averageMastery}</div>
          <div class="ta-metric-sub">সক্রিয় উপস্থিতি: ${a.activeLearningRate}</div>
        </div>
      </div>

      <!-- Grade Distribution Breakdown -->
      <div class="ta-panel" style="margin-bottom:24px;">
        <div class="ta-panel-head">
          <h2 class="ta-panel-title">
            <span>📊 শ্রেণিভিত্তিক শিক্ষার্থী বণ্টন ও গড় পারদর্শিতা</span>
          </h2>
          <span style="font-size:12px; color:rgba(255,243,246,0.7);">জাতীয় কারিকুলাম ও ইংলিশ ভার্সন</span>
        </div>

        <div class="ta-table-wrap">
          <table class="ta-table">
            <thead>
              <tr>
                <th>শ্রেণি (Grade)</th>
                <th>শিক্ষার্থী সংখ্যা</th>
                <th>গড় পারদর্শিতা</th>
                <th>অর্জিত গড় স্টার</th>
                <th>অবস্থা</th>
              </tr>
            </thead>
            <tbody>
              ${(a.gradeDistribution || []).map(g => `
                <tr>
                  <td><strong>${g.label}</strong></td>
                  <td>${g.studentsCount.toLocaleString()} জন</td>
                  <td><span style="color:var(--accent-green, #00E0A8); font-weight:700;">${g.avgMastery}%</span></td>
                  <td>⭐ ${g.avgStars}</td>
                  <td><span class="ta-status-tag excellent">চমৎকার প্রবৃদ্ধি</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderAdminTeachersTab() {
    const content = document.getElementById('taAdminContent');
    if (!content) return;

    content.innerHTML = `
      <div class="ta-panel">
        <div class="ta-panel-head">
          <h2 class="ta-panel-title">
            <span>👩‍🏫 শিক্ষক ও মেন্টর তালিকা (${cachedTeachers.length} জন)</span>
          </h2>
        </div>

        <div class="ta-table-wrap">
          <table class="ta-table">
            <thead>
              <tr>
                <th>শিক্ষকের নাম</th>
                <th>ইমেইল / যোগাযোগ</th>
                <th>দায়িত্বপ্রাপ্ত শ্রেণি</th>
                <th>শিক্ষার্থী সংখ্যা</th>
                <th>স্ট্যাটাস</th>
              </tr>
            </thead>
            <tbody>
              ${cachedTeachers.map(t => `
                <tr>
                  <td><strong>${t.fullName}</strong></td>
                  <td>${t.email}</td>
                  <td>${(t.assignedGrades || []).join(', ')}</td>
                  <td>${t.activeStudentsCount} জন</td>
                  <td><span class="ta-status-tag excellent">অনুমোদিত শিক্ষক</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderAdminStudentsTab() {
    const content = document.getElementById('taAdminContent');
    if (!content) return;

    content.innerHTML = `
      <div class="ta-panel">
        <div class="ta-panel-head">
          <h2 class="ta-panel-title">
            <span>🎒 নিবন্ধিত শিক্ষার্থী তালিকা (${cachedStudents.length} জন)</span>
          </h2>
        </div>

        <div class="ta-table-wrap">
          <table class="ta-table">
            <thead>
              <tr>
                <th>শিক্ষার্থী</th>
                <th>শ্রেণি ও সেকশন</th>
                <th>রোল</th>
                <th>অভিভাবক</th>
                <th>মোট স্টার</th>
                <th>পারদর্শিতা</th>
                <th>অ্যাকশন</th>
              </tr>
            </thead>
            <tbody>
              ${cachedStudents.map(s => `
                <tr>
                  <td>
                    <div style="display:flex; align-items:center; gap:8px;">
                      <span>${s.avatar || '🧒'}</span>
                      <strong>${s.name}</strong>
                    </div>
                  </td>
                  <td>${s.grade} (${s.section})</td>
                  <td>${s.rollNumber}</td>
                  <td>${s.parentName}</td>
                  <td><strong style="color:var(--accent-gold, #FFC400);">⭐ ${s.totalStars}</strong></td>
                  <td><span style="color:var(--accent-green, #00E0A8); font-weight:700;">${s.masteryPercentage}%</span></td>
                  <td>
                    <button class="btn secondary" style="font-size:12px; padding:4px 10px;" onclick="TeacherAdminPortal.openStudentModal('${s.childId}')">
                      প্রোফাইল
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderAdminReportsTab() {
    const content = document.getElementById('taAdminContent');
    if (!content || !cachedAnalytics) return;

    const a = cachedAnalytics;

    content.innerHTML = `
      <div class="ta-analytics-grid">
        <div class="ta-panel">
          <div class="ta-panel-head">
            <h2 class="ta-panel-title">
              <span>📈 প্রাতিষ্ঠানিক বিষয়ভিত্তিক রিপোর্ট</span>
            </h2>
          </div>
          <div>
            ${(a.subjectMastery || []).map(sub => `
              <div class="ta-subject-row">
                <div class="ta-subject-info">
                  <span>${sub.name}</span>
                  <span style="color:var(--accent-green, #00E0A8);">${sub.mastery}%</span>
                </div>
                <div class="ta-progress-track">
                  <div class="ta-progress-fill ${sub.id}" style="width:${sub.mastery}%;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="ta-panel">
          <div class="ta-panel-head">
            <h2 class="ta-panel-title">
              <span>🏛️ ঢাকা বিভাগীয় বেঞ্চমার্কিং</span>
            </h2>
            <span class="ta-status-tag excellent">র্যাঙ্ক: #১ (শীর্ষ ১০০)</span>
          </div>
          <div style="font-size:14px; line-height:1.6; color:rgba(255,243,246,0.85);">
            <p>• ভিকারুননিসা নূন স্কুল অ্যান্ড কলেজ ঢাকা বিভাগের অনুমোদিত প্রাথমিক বিদ্যালয়সমূহের মধ্যে ধারাবাহিকতায় শীর্ষে অবস্থান করছে।</p>
            <p>• প্লে থেকে কেজি পর্যন্ত শিক্ষার্থীদের মধ্যে বাংলা বর্ণমালা ও সংখ্যা গণনায় সক্রিয় উপস্থিতির হার ৯৬.৪%।</p>
            <p>• নিয়মিত অভিভাবক সংযোগ ও হোম লার্নিং স্ট্রিকে অগ্রগতি বজায় রয়েছে।</p>
          </div>
        </div>
      </div>
    `;
  }

  // Public API
  const TeacherAdminPortal = {
    get currentRole() { return currentRole; },
    set currentRole(r) { currentRole = r; },
    renderTeacherDashboard,
    renderSchoolAdminDashboard,
    setTeacherTab: (tab) => {
      activeTeacherTab = tab;
      const btns = document.querySelectorAll('.ta-tab-btn');
      btns.forEach((b, i) => b.classList.toggle('active', (i === 0 && tab === 'roster') || (i === 1 && tab === 'analytics')));
      if (tab === 'roster') renderTeacherRosterTab();
      else renderTeacherAnalyticsTab();
    },
    setAdminTab: (tab) => {
      activeAdminTab = tab;
      renderSchoolAdminDashboard();
    },
    handleGradeFilter: (val) => {
      activeGradeFilter = val;
      renderTeacherRosterTab();
    },
    handleSearch: (val) => {
      studentSearchQuery = val;
      renderTeacherRosterTab();
    },
    openStudentModal,
    closeStudentModal,
    switchRole: switchTestRole,
    verifyAccess
  };

  global.TeacherAdminPortal = TeacherAdminPortal;

})(typeof window !== 'undefined' ? window : this);
