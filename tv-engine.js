/**
 * 📺 TV WILL BE THE NEXT BLACKBOARD — Unified Smart TV Remote & 10-Foot UI Engine
 * --------------------------------------------------------------------------
 * Complete Smart TV / Android TV / Google TV / Apple TV / WebOS / Tizen Engine
 * with Hardware Remote Control Layer, Gamepad API Polling,
 * Hardware Back Button Interception, Adult Parental Gate,
 * and 2-Minute Particle Firefly Ambient Screensaver.
 * 
 * Features:
 * 1. Universal Remote D-Pad normalization (Android TV, Tizen, webOS, Fire TV, Apple TV, Gamepad)
 * 2. 2-Minute Idle Ambient TV Screensaver with particle firefly bioluminescence
 * 3. 2D Spatial D-Pad navigation (Up, Down, Left, Right, Enter/OK, Back/Escape)
 * 4. 5% Title-safe overscan safe zones & 10-foot typography
 * 5. Tizen & webOS hardware remote key registration
 * 6. Adult-Tier Parental Gate (Grown-Up Gate) with Multiplication Challenge
 * 7. Zero-network Web Audio API focus, error, and success synthesis
 * 8. Fullscreen Digital Blackboard with chalk canvas
 * 9. 10-Foot Flashcard detail modals with Bengali pronunciation
 */

(function() {
  'use strict';

  // ================= 1. Zero-Latency Synthesized Web Audio Engine =================
  class TVAudioSynth {
    constructor() {
      this.ctx = null;
    }

    init() {
      if (!this.ctx && typeof window !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
    }

    playMove() {
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(460, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.04);
      } catch (e) {}
    }

    playSelect() {
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(587.33, this.ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(1174.66, this.ctx.currentTime + 0.07);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.07);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.07);
      } catch (e) {}
    }

    playError() {
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, this.ctx.currentTime);
        osc.frequency.setValueAtTime(140, this.ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.28);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.28);
      } catch (e) {}
    }

    playSuccess() {
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const now = this.ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + i * 0.06);
          gain.gain.setValueAtTime(0.08, now + i * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.18);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + i * 0.06);
          osc.stop(now + i * 0.06 + 0.18);
        });
      } catch (e) {}
    }
  }

  const tvAudio = new TVAudioSynth();
  window.tvAudio = tvAudio;

  // ================= 2. TV State & Curriculum Data =================
  const TV_DATA = {
    swaraborno: [
      { glyph: 'অ', word: 'অজগর', icon: '🐍', ph: 'অ তে অজগর' },
      { glyph: 'আ', word: 'আম', icon: '🥭', ph: 'আ তে আম' },
      { glyph: 'ই', word: 'ইলিশ', icon: '🐟', ph: 'ই তে ইলিশ' },
      { glyph: 'ঈ', word: 'ঈগল', icon: '🦅', ph: 'ঈ তে ঈগল' },
      { glyph: 'উ', word: 'উট', icon: '🐪', ph: 'উ তে উট' },
      { glyph: 'ঊ', word: 'ঊষা', icon: '🌅', ph: 'ঊ তে ঊষা' },
      { glyph: 'ঋ', word: 'ঋষি', icon: '🧘', ph: 'ঋ তে ঋষি' },
      { glyph: 'এ', word: 'একতারা', icon: '🪕', ph: 'এ তে একতারা' },
      { glyph: 'ঐ', word: 'ঐরাবত', icon: '🐘', ph: 'ঐ তে ঐরাবত' },
      { glyph: 'ও', word: 'ওল', icon: '🍠', ph: 'ও তে ওল' },
      { glyph: 'ঔ', word: 'ঔষধ', icon: '💊', ph: 'ঔ তে ঔষধ' }
    ],
    byanjonborno: [
      { glyph: 'ক', word: 'কাক', icon: '🐦', ph: 'ক তে কাক' },
      { glyph: 'খ', word: 'খরগোশ', icon: '🐇', ph: 'খ তে খরগোশ' },
      { glyph: 'গ', word: 'গরু', icon: '🐄', ph: 'গ তে গরু' },
      { glyph: 'ঘ', word: 'ঘুড়ি', icon: '🪁', ph: 'ঘ তে ঘুড়ি' },
      { glyph: 'ঙ', word: 'ব্যাঙ', icon: '🐸', ph: 'ঙ তে ব্যাঙ' },
      { glyph: 'চ', word: 'চাঁদ', icon: '🌙', ph: 'চ তে চাঁদ' },
      { glyph: 'ছ', word: 'ছাতা', icon: '☂️', ph: 'ছ তে ছাতা' },
      { glyph: 'জ', word: 'জাহাজ', icon: '🚢', ph: 'জ তে জাহাজ' },
      { glyph: 'ঝ', word: 'ঝুড়ি', icon: '🧺', ph: 'ঝ তে ঝুড়ি' },
      { glyph: 'ঞ', word: 'মিঞা', icon: '🐱', ph: 'ঞ তে মিঞা' }
    ],
    numbers: [
      { num: '১', word: 'এক', desc: '১টি পাখি', icon: '🐦' },
      { num: '২', word: 'দুই', desc: '২টি আম', icon: '🥭' },
      { num: '৩', word: 'তিন', desc: '৩টি ফুল', icon: '🌸' },
      { num: '৪', word: 'চার', desc: '৪টি বল', icon: '⚽' },
      { num: '৫', word: 'পাঁচ', desc: '৫টি তারা', icon: '⭐' },
      { num: '৬', word: 'ছয়', desc: '৬টি মাছ', icon: '🐟' },
      { num: '৭', word: 'সাত', desc: '৭টি প্রজাপতি', icon: '🦋' },
      { num: '৮', word: 'আট', desc: '৮টি গাড়ি', icon: '🚗' },
      { num: '৯', word: 'নয়', desc: '৯টি বেলুন', icon: '🎈' },
      { num: '১০', word: 'দশ', desc: '১০টি পাতা', icon: '🍃' }
    ],
    activities: [
      { id: 'blackboard', title: 'ডিজিটাল ব্ল্যাকবোর্ড', badge: 'Chalk Mode', icon: '🖍️', desc: 'বড় পর্দায় মুক্তহস্তে আঁকো ও চক প্র্যাকটিস করো' },
      { id: 'letters', title: 'বর্ণ বাগান (অক্ষর)', badge: 'Letters', icon: '🔤', desc: 'বাংলা বর্ণমালা শোনো, চিনো ও পড়ো' },
      { id: 'numbers', title: 'সংখ্যা মৌমাছি', badge: 'Numbers', icon: '🐝', desc: 'গুনে গুনে ১ থেকে ১০ গণনা শেখা' },
      { id: 'match', title: 'মিলাও তো! (স্মৃতি পরীক্ষা)', badge: 'Memory Quiz', icon: '🍎', desc: 'একই জোড়ার কার্ড খুঁজে বের করো' },
      { id: 'mathgame', title: 'সহজ যোগ-বিয়োগ', badge: 'Quick Math', icon: '➕', desc: 'মজার ছবি দিয়ে প্রাথমিক গণিত' },
      { id: 'rhymes', title: 'ছড়ার বাগান', badge: 'Rhymes', icon: '🎵', desc: 'জনপ্রিয় সব বাংলা ও ইংরেজি ছড়া' }
    ],
    games: [
      { id: 'bubbleocean', file: 'bubble-ocean.html', title: 'বাবল ওশেন', icon: '🫧', badge: 'Game', desc: 'সমুদ্রের বন্ধুদের সাথে বুদবুদ ফাটাও' },
      { id: 'tinychef', file: 'tiny-chef-kitchen.html', title: 'টাইনি শেফ কিচেন', icon: '🍳', badge: 'Cooking', desc: 'মজার মজার মজাদার খাবার বানাও' },
      { id: 'skypainter', file: 'sky-painter.html', title: 'স্কাই পেইন্টার', icon: '🎨', badge: 'Art', desc: 'আকাশ জুড়ে নিয়ন আলোয় ছবি আঁকো' },
      { id: 'shapebuilder', file: 'shape-builder-city.html', title: 'শেইপ বিল্ডার সিটি', icon: '🧩', badge: 'Building', desc: 'জ্যামিতিক আকৃতি দিয়ে সুন্দর শহর বানাও' },
      { id: 'melodyfarm', file: 'melody-farm.html', title: 'মেলোডি ফার্ম', icon: '🎵', badge: 'Music', desc: 'খামারের প্রাণীদের সুরেলা অর্কেস্ট্রা' },
      { id: 'glimmerglow', file: 'glimmer-glow.html', title: 'Glimmer & Glow', icon: '💄', badge: 'Dressup', desc: 'রঙিন সাজগোজ ও মেকওভার আর্ট' }
    ]
  };

  // ================= 3. TV State Controllers =================
  let isTVMode = false;
  let focusSection = 'sidebar'; // 'sidebar' | 'content' | 'modal' | 'blackboard' | 'parental_gate'
  let sidebarIndex = 0;
  let contentRow = 0;
  let contentCol = 0;
  const rowColMemory = {};

  const SIDEBAR_ITEMS = [
    { id: 'home', icon: '🏠', label: 'হোম' },
    { id: 'swaraborno', icon: '🔤', label: 'স্বরবর্ণ' },
    { id: 'byanjonborno', icon: '📖', label: 'ব্যঞ্জনবর্ণ' },
    { id: 'numbers', icon: '🔢', label: 'সংখ্যা' },
    { id: 'blackboard', icon: '🖍️', label: 'ব্ল্যাকবোর্ড' },
    { id: 'games', icon: '🎮', label: 'গেম জগৎ' },
    { id: 'dashboard', icon: '📊', label: 'প্যারেন্ট ড্যাশ' },
    { id: 'exit_tv', icon: '📱', label: 'ওয়েব/মোবাইল মোড' },
    { id: 'exit_app', icon: '🚪', label: 'অ্যাপ প্রস্থান (Exit)' }
  ];

  // ================= 4. Build TV DOM =================
  function initTVDOM() {
    if (document.getElementById('tvAppContainer')) return;

    const tvWrap = document.createElement('div');
    tvWrap.id = 'tvAppContainer';
    tvWrap.className = 'tv-app-container';
    tvWrap.innerHTML = `
      <!-- Left 10-Foot Vertical Sidebar -->
      <aside class="tv-sidebar" id="tvSidebar">
        <div>
          <div class="tv-brand">
            <div class="tv-brand-logo">🌱</div>
            <div>
              <h1 class="tv-brand-title">খুকির বাগান</h1>
              <div class="tv-brand-sub">TV Edition</div>
            </div>
          </div>
          <nav class="tv-nav" id="tvSidebarNav">
            ${SIDEBAR_ITEMS.map((item, i) => `
              <button class="tv-nav-item" data-sidebar-idx="${i}" data-nav-id="${item.id}" tabindex="0">
                <span class="icon">${item.icon}</span>
                <span>${item.label}</span>
              </button>
            `).join('')}
          </nav>
        </div>

        <!-- TV D-Pad Remote Legend -->
        <div class="tv-remote-legend">
          <div class="tv-remote-legend-title">D-PAD REMOTE CONTROL</div>
          <div class="tv-remote-legend-keys">
            <span class="tv-key-badge">▲▼◄► সরান</span>
            <span class="tv-key-badge highlight">[OK] বাছাই</span>
            <span class="tv-key-badge">[Back] প্রস্থান যাচাই</span>
          </div>
        </div>
      </aside>

      <!-- Main 10-Foot Content Canvas -->
      <main class="tv-main" id="tvMain">
        
        <!-- Blackboard Slogan Hero Banner -->
        <section class="tv-blackboard-hero" id="tvHeroBanner">
          <div class="tv-slogan-pill">★ TV will be the next Blackboard ★</div>
          <h2 class="tv-hero-title">বসার ঘরের বড় পর্দায় আনন্দের বর্ণমালা ও ড্রয়িং পাঠশালা</h2>
          <p class="tv-hero-desc">
            রিমোটের বোতাম দিয়ে সহজেই বর্ণমালা, সংখ্যা, ছড়া এবং ডিজিটাল ব্ল্যাকবোর্ডে চক দিয়ে আঁকা অনুশীলন করুন।
          </p>
        </section>

        <!-- Content Row 0: Activities & Blackboard -->
        <section class="tv-carousel-section" id="tvRowSection-0">
          <div class="tv-section-header">
            <h3 class="tv-section-title"><span>✨</span> বিশেষ কার্যক্রম ও ড্রয়িং</h3>
            <span class="tv-section-hint">রিমোটের [OK] চেপে প্রবেশ করুন</span>
          </div>
          <div class="tv-carousel-track" data-row-idx="0">
            ${TV_DATA.activities.map((act, col) => `
              <div class="tv-card tv-card-wide" data-row="0" data-col="${col}" data-act-id="${act.id}" tabindex="0">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:38px;">${act.icon}</span>
                  <span class="tv-card-badge">${act.badge}</span>
                </div>
                <div>
                  <h4 class="tv-card-title">${act.title}</h4>
                  <p class="tv-card-desc">${act.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Content Row 1: Swaraborno (অ-ঔ) -->
        <section class="tv-carousel-section" id="tvRowSection-1">
          <div class="tv-section-header">
            <h3 class="tv-section-title"><span>📖</span> বাংলা স্বরবর্ণ (Bangla Vowels)</h3>
            <span class="tv-section-hint">মোট ১১টি বর্ণ</span>
          </div>
          <div class="tv-carousel-track" data-row-idx="1">
            ${TV_DATA.swaraborno.map((item, col) => `
              <div class="tv-card tv-card-square" data-row="1" data-col="${col}" data-type="swaraborno" data-idx="${col}" tabindex="0">
                <div class="tv-card-glyph" style="color:#34D399;">${item.glyph}</div>
                <div class="tv-card-word">${item.word}</div>
                <div class="tv-card-emoji">${item.icon}</div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Content Row 2: Numbers (১-১০) -->
        <section class="tv-carousel-section" id="tvRowSection-2">
          <div class="tv-section-header">
            <h3 class="tv-section-title"><span>🔢</span> সংখ্যা ও গণনা (১ থেকে ১০)</h3>
            <span class="tv-section-hint">ছবি দেখে সংখ্যা চেনা</span>
          </div>
          <div class="tv-carousel-track" data-row-idx="2">
            ${TV_DATA.numbers.map((item, col) => `
              <div class="tv-card tv-card-square" data-row="2" data-col="${col}" data-type="number" data-idx="${col}" tabindex="0">
                <div class="tv-card-glyph" style="color:#60A5FA;">${item.num}</div>
                <div class="tv-card-word" style="color:#93C5FD;">${item.word}</div>
                <div style="font-size:16px; opacity:0.85; margin-top:2px;">${item.desc}</div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Content Row 3: Byanjonborno (ক-ঞ) -->
        <section class="tv-carousel-section" id="tvRowSection-3">
          <div class="tv-section-header">
            <h3 class="tv-section-title"><span>🔤</span> বাংলা ব্যঞ্জনবর্ণ (Consonants)</h3>
            <span class="tv-section-hint">ক, খ, গ, ঘ...</span>
          </div>
          <div class="tv-carousel-track" data-row-idx="3">
            ${TV_DATA.byanjonborno.map((item, col) => `
              <div class="tv-card tv-card-square" data-row="3" data-col="${col}" data-type="byanjonborno" data-idx="${col}" tabindex="0">
                <div class="tv-card-glyph" style="color:#F472B6;">${item.glyph}</div>
                <div class="tv-card-word" style="color:#FBCFE8;">${item.word}</div>
                <div class="tv-card-emoji">${item.icon}</div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Content Row 4: Standalone Preschool Games -->
        <section class="tv-carousel-section" id="tvRowSection-4">
          <div class="tv-section-header">
            <h3 class="tv-section-title"><span>🎮</span> মজার ৬টি প্রি-স্কুল গেম</h3>
            <span class="tv-section-hint">ফুলস্ক্রিন গেম খেলুন</span>
          </div>
          <div class="tv-carousel-track" data-row-idx="4">
            ${TV_DATA.games.map((g, col) => `
              <div class="tv-card tv-card-wide" data-row="4" data-col="${col}" data-game-file="${g.file}" tabindex="0">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:40px;">${g.icon}</span>
                  <span class="tv-card-badge" style="color:#38BDF8; background:rgba(56,189,248,0.15);">${g.badge}</span>
                </div>
                <div>
                  <h4 class="tv-card-title">${g.title}</h4>
                  <p class="tv-card-desc">${g.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

      </main>
    `;

    document.body.appendChild(tvWrap);

    // Setup TV Mode & Exit buttons in the web header and menu drawer
    injectTVModeButtons();
  }

  // Inject TV Mode and Exit App launch buttons into standard Web Topbar & Menu Drawer
  function injectTVModeButtons() {
    const topbar = document.querySelector('.global-topbar') || document.querySelector('.home-topbar');
    if (topbar) {
      if (!document.getElementById('topbarTVToggle')) {
        const tvBtn = document.createElement('button');
        tvBtn.id = 'topbarTVToggle';
        tvBtn.className = 'pill-btn tv-mode-btn';
        tvBtn.style.marginRight = '8px';
        tvBtn.innerHTML = `📺 <span>TV মোড (10-Foot UI)</span>`;
        tvBtn.onclick = () => setTVMode(true);
        const ref = topbar.querySelector('.lang-toggle') || topbar.firstChild;
        topbar.insertBefore(tvBtn, ref);
      }

      if (!document.getElementById('topbarExitAppBtn')) {
        const exitBtn = document.createElement('button');
        exitBtn.id = 'topbarExitAppBtn';
        exitBtn.className = 'pill-btn app-exit-btn';
        exitBtn.style.marginRight = '8px';
        exitBtn.innerHTML = `🚪 <span>প্রস্থান (Exit)</span>`;
        exitBtn.onclick = () => openParentalGateModal();
        const ref = topbar.querySelector('.lang-toggle') || topbar.firstChild;
        topbar.insertBefore(exitBtn, ref);
      }
    }

    const drawer = document.getElementById('drawer');
    if (drawer) {
      if (!document.getElementById('drawerTVToggle')) {
        const item = document.createElement('div');
        item.id = 'drawerTVToggle';
        item.className = 'drawer-item';
        item.style.background = 'rgba(79, 70, 229, 0.2)';
        item.style.fontWeight = 'bold';
        item.innerHTML = `<span class="di-icon">📺</span><span>স্মার্ট টিভি মোড (10-Foot UI)</span>`;
        item.onclick = () => {
          if (typeof window.closeDrawer === 'function') window.closeDrawer();
          setTVMode(true);
        };
        const head = drawer.querySelector('.drawer-head');
        if (head && head.nextElementSibling) {
          drawer.insertBefore(item, head.nextElementSibling);
        }
      }

      if (!document.getElementById('drawerExitAppToggle')) {
        const exitItem = document.createElement('div');
        exitItem.id = 'drawerExitAppToggle';
        exitItem.className = 'drawer-item';
        exitItem.style.background = 'rgba(225, 29, 72, 0.2)';
        exitItem.style.color = '#FDA4AF';
        exitItem.style.fontWeight = 'bold';
        exitItem.innerHTML = `<span class="di-icon">🚪</span><span>অ্যাপ বন্ধ করুন (Parental Gate)</span>`;
        exitItem.onclick = () => {
          if (typeof window.closeDrawer === 'function') window.closeDrawer();
          openParentalGateModal();
        };
        drawer.appendChild(exitItem);
      }
    }
  }

  // ================= 5. Spatial Focus Manager =================
  function updateSpatialFocus() {
    // Clear existing focus classes
    document.querySelectorAll('.tv-focused').forEach(el => el.classList.remove('tv-focused'));

    if (parentalGateState.isOpen) {
      const gateBtns = document.querySelectorAll('.tv-gate-option-btn');
      if (gateBtns[parentalGateState.focusedIndex]) {
        gateBtns[parentalGateState.focusedIndex].classList.add('tv-focused');
        gateBtns[parentalGateState.focusedIndex].focus({ preventScroll: true });
      }
    } else if (focusSection === 'sidebar') {
      const navItems = document.querySelectorAll('#tvSidebarNav .tv-nav-item');
      if (navItems[sidebarIndex]) {
        navItems[sidebarIndex].classList.add('tv-focused');
        navItems[sidebarIndex].focus({ preventScroll: true });
        navItems[sidebarIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } else if (focusSection === 'content') {
      const targetCard = document.querySelector(`.tv-card[data-row="${contentRow}"][data-col="${contentCol}"]`);
      if (targetCard) {
        targetCard.classList.add('tv-focused');
        targetCard.focus({ preventScroll: true });
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    } else if (focusSection === 'modal') {
      const modalBtn = document.querySelector('.tv-modal-btn.primary') || document.querySelector('.tv-modal-btn');
      if (modalBtn) {
        modalBtn.classList.add('tv-focused');
        modalBtn.focus({ preventScroll: true });
      }
    }
  }

  // ================= 6. Universal TV Remote & Key Identifier Normalization Layer =================
  /**
   * Translates ANY Smart TV remote key event (Android TV, Tizen, webOS, Fire TV, Apple TV, Roku, Linux, Gamepads)
   * into clean unified actions.
   */
  function normalizeRemoteEvent(e) {
    const key = e.key || '';
    const code = e.keyCode || e.which || 0;

    // --- D-PAD UP ---
    if (
      key === 'ArrowUp' || key === 'Up' || key === 'UIKeyInputUpArrow' || key === 'UpArrow' || key === 'KEY_UP' ||
      code === 38 || code === 19 || code === 29460 || code === 103 || code === 1
    ) {
      return 'UP';
    }

    // --- D-PAD DOWN ---
    if (
      key === 'ArrowDown' || key === 'Down' || key === 'UIKeyInputDownArrow' || key === 'DownArrow' || key === 'KEY_DOWN' ||
      code === 40 || code === 20 || code === 29461 || code === 108 || code === 2
    ) {
      return 'DOWN';
    }

    // --- D-PAD LEFT ---
    if (
      key === 'ArrowLeft' || key === 'Left' || key === 'UIKeyInputLeftArrow' || key === 'LeftArrow' || key === 'KEY_LEFT' ||
      code === 37 || code === 21 || code === 29462 || code === 105 || code === 3
    ) {
      return 'LEFT';
    }

    // --- D-PAD RIGHT ---
    if (
      key === 'ArrowRight' || key === 'Right' || key === 'UIKeyInputRightArrow' || key === 'RightArrow' || key === 'KEY_RIGHT' ||
      code === 39 || code === 22 || code === 29463 || code === 106 || code === 4
    ) {
      return 'RIGHT';
    }

    // --- OK / SELECT / ENTER / CENTER ---
    if (
      key === 'Enter' || key === 'Select' || key === 'Accept' || key === 'OK' || key === 'Ok' || key === ' ' || key === 'Space' || key === 'Spacebar' ||
      key === 'HeadsetHook' || key === 'MediaPlayPause' || key === 'MediaPlay' || key === 'MediaSelect' || key === 'KEY_ENTER' || key === 'KEY_OK' ||
      code === 13 || code === 23 || code === 66 || code === 32 || code === 1536 || code === 29443 || code === 102 || code === 179 || code === 256
    ) {
      return 'OK';
    }

    // --- BACK / RETURN / ESCAPE / EXIT ---
    if (
      key === 'Escape' || key === 'Backspace' || key === 'GoBack' || key === 'Back' || key === 'BrowserBack' || key === 'XF86Back' ||
      key === 'Exit' || key === 'HistoryBack' || key === 'KEY_BACK' || key === 'KEY_EXIT' ||
      code === 27 || code === 8 || code === 4 || code === 10009 || code === 10182 || code === 461 || code === 166 || code === 29464 || code === 10071
    ) {
      return 'BACK';
    }

    // --- SPECIAL COLORED BUTTONS ---
    if (key === 'ColorF0Red' || key === 'Red' || code === 403) return 'COLOR_RED';
    if (key === 'ColorF1Green' || key === 'Green' || code === 404) return 'COLOR_GREEN';
    if (key === 'ColorF2Yellow' || key === 'Yellow' || code === 405) return 'COLOR_YELLOW';
    if (key === 'ColorF3Blue' || key === 'Blue' || code === 406) return 'COLOR_BLUE';

    return null;
  }

  // Unified Spatial Dispatcher for both Hardware Key events and Gamepad inputs
  function dispatchTVAction(action) {
    if (!action) return;

    // Any remote activity dismisses the Ambient Screensaver and resets idle countdown
    resetIdleTimer();
    if (isScreensaverActive) {
      dismissAmbientScreensaver();
      return;
    }

    // --- Strict Parental Gate Trap Handler ---
    if (parentalGateState.isOpen) {
      if (action === 'RIGHT' || action === 'DOWN') {
        tvAudio.playMove();
        parentalGateState.focusedIndex = (parentalGateState.focusedIndex + 1) % 3;
        updateSpatialFocus();
      } else if (action === 'LEFT' || action === 'UP') {
        tvAudio.playMove();
        parentalGateState.focusedIndex = (parentalGateState.focusedIndex - 1 + 3) % 3;
        updateSpatialFocus();
      } else if (action === 'OK') {
        const chosen = parentalGateState.options[parentalGateState.focusedIndex];
        handleParentalGateAnswer(chosen);
      } else if (action === 'BACK') {
        tvAudio.playMove();
        closeParentalGateModal();
      }
      return;
    }

    // Web Mode Remote Handling (when user uses remote outside of full TV mode)
    if (!isTVMode) {
      if (['UP', 'DOWN', 'LEFT', 'RIGHT'].includes(action)) {
        if (!document.querySelector('input:focus, textarea:focus')) {
          setTVMode(true);
        }
        return;
      }
      if (action === 'BACK') {
        const actWrap = document.getElementById('activity');
        const dashWrap = document.getElementById('dashboard');
        if (actWrap && actWrap.classList.contains('open')) {
          if (typeof window.showHome === 'function') window.showHome();
          return;
        }
        if (dashWrap && dashWrap.classList.contains('open')) {
          if (typeof window.closeDashboard === 'function') window.closeDashboard();
          return;
        }
        openParentalGateModal();
        return;
      }
      return;
    }

    // --- Full TV Mode Action Execution ---

    // 1. Back Action
    if (action === 'BACK') {
      tvAudio.playMove();

      if (document.getElementById('tvDetailModal')) {
        closeTVDetailModal();
        return;
      }
      if (document.getElementById('tvBlackboardScreen')) {
        closeTVBlackboard();
        return;
      }
      if (focusSection === 'content') {
        focusSection = 'sidebar';
        updateSpatialFocus();
        return;
      }
      if (focusSection === 'sidebar') {
        openParentalGateModal();
        return;
      }
      return;
    }

    // 2. OK / Select Action
    if (action === 'OK') {
      tvAudio.playSelect();

      if (document.getElementById('tvDetailModal')) {
        closeTVDetailModal();
        return;
      }

      if (focusSection === 'sidebar') {
        const activeNav = SIDEBAR_ITEMS[sidebarIndex];
        if (!activeNav) return;
        if (activeNav.id === 'exit_app') {
          openParentalGateModal();
        } else if (activeNav.id === 'exit_tv') {
          setTVMode(false);
        } else if (activeNav.id === 'blackboard') {
          openTVBlackboard();
        } else if (activeNav.id === 'dashboard') {
          setTVMode(false);
          if (typeof window.openDashboard === 'function') window.openDashboard();
        } else if (activeNav.id === 'swaraborno') {
          focusSection = 'content';
          contentRow = 1;
          contentCol = 0;
          updateSpatialFocus();
        } else if (activeNav.id === 'byanjonborno') {
          focusSection = 'content';
          contentRow = 3;
          contentCol = 0;
          updateSpatialFocus();
        } else if (activeNav.id === 'numbers') {
          focusSection = 'content';
          contentRow = 2;
          contentCol = 0;
          updateSpatialFocus();
        } else if (activeNav.id === 'games') {
          focusSection = 'content';
          contentRow = 4;
          contentCol = 0;
          updateSpatialFocus();
        } else {
          // Home
          focusSection = 'content';
          contentRow = 0;
          contentCol = 0;
          updateSpatialFocus();
        }
        return;
      }

      if (focusSection === 'content') {
        const focusedCard = document.querySelector(`.tv-card[data-row="${contentRow}"][data-col="${contentCol}"]`);
        if (focusedCard) {
          handleCardSelect(focusedCard);
        }
        return;
      }
      return;
    }

    // 3. 2D D-Pad Matrix Navigation
    let moved = false;

    if (focusSection === 'sidebar') {
      if (action === 'DOWN') {
        if (sidebarIndex < SIDEBAR_ITEMS.length - 1) {
          sidebarIndex++;
          moved = true;
        }
      } else if (action === 'UP') {
        if (sidebarIndex > 0) {
          sidebarIndex--;
          moved = true;
        }
      } else if (action === 'RIGHT') {
        focusSection = 'content';
        const targetRow = Math.min(sidebarIndex, 4);
        contentRow = targetRow;
        contentCol = rowColMemory[contentRow] || 0;
        moved = true;
      }
    } else if (focusSection === 'content') {
      const rowItemCounts = [
        TV_DATA.activities.length,
        TV_DATA.swaraborno.length,
        TV_DATA.numbers.length,
        TV_DATA.byanjonborno.length,
        TV_DATA.games.length
      ];
      const maxCols = rowItemCounts[contentRow] || 1;

      if (action === 'LEFT') {
        if (contentCol > 0) {
          contentCol--;
          rowColMemory[contentRow] = contentCol;
          moved = true;
        } else {
          // Move left into vertical sidebar
          focusSection = 'sidebar';
          sidebarIndex = Math.min(contentRow, SIDEBAR_ITEMS.length - 1);
          moved = true;
        }
      } else if (action === 'RIGHT') {
        if (contentCol < maxCols - 1) {
          contentCol++;
          rowColMemory[contentRow] = contentCol;
          moved = true;
        }
      } else if (action === 'DOWN') {
        if (contentRow < rowItemCounts.length - 1) {
          contentRow++;
          const nextMax = rowItemCounts[contentRow];
          contentCol = Math.min(rowColMemory[contentRow] ?? contentCol, nextMax - 1);
          moved = true;
        }
      } else if (action === 'UP') {
        if (contentRow > 0) {
          contentRow--;
          const nextMax = rowItemCounts[contentRow];
          contentCol = Math.min(rowColMemory[contentRow] ?? contentCol, nextMax - 1);
          moved = true;
        } else {
          const hero = document.getElementById('tvHeroBanner');
          if (hero) hero.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }

    // 4. Quick Colored Remote Shortcuts
    if (action === 'COLOR_RED') {
      openTVBlackboard();
    } else if (action === 'COLOR_GREEN') {
      focusSection = 'content'; contentRow = 1; contentCol = 0; moved = true;
    } else if (action === 'COLOR_YELLOW') {
      focusSection = 'content'; contentRow = 2; contentCol = 0; moved = true;
    } else if (action === 'COLOR_BLUE') {
      focusSection = 'content'; contentRow = 4; contentCol = 0; moved = true;
    }

    if (moved) {
      tvAudio.playMove();
      updateSpatialFocus();
    }
  }

  function handleSpatialKeyDown(e) {
    const action = normalizeRemoteEvent(e);
    if (action) {
      // Prevent browser default arrow scrolling or space page down
      e.preventDefault();
      e.stopPropagation();
      dispatchTVAction(action);
    }
  }

  // ================= 7. GAMEPAD / BLUETOOTH REMOTE API POLLER =================
  let lastGamepadTimestamp = 0;
  let lastGamepadActionTime = 0;
  const GAMEPAD_DEBOUNCE_MS = 175;

  function pollGamepads() {
    try {
      if (typeof navigator !== 'undefined' && navigator.getGamepads) {
        const gamepads = navigator.getGamepads();
        const now = performance.now();

        for (let i = 0; i < gamepads.length; i++) {
          const gp = gamepads[i];
          if (!gp) continue;

          // Check if timestamp updated
          if (gp.timestamp && gp.timestamp === lastGamepadTimestamp) continue;
          lastGamepadTimestamp = gp.timestamp || now;

          if (now - lastGamepadActionTime < GAMEPAD_DEBOUNCE_MS) continue;

          let action = null;

          // Check D-Pad Buttons (standard mapping)
          // 12: Up, 13: Down, 14: Left, 15: Right
          if (gp.buttons[12] && gp.buttons[12].pressed) action = 'UP';
          else if (gp.buttons[13] && gp.buttons[13].pressed) action = 'DOWN';
          else if (gp.buttons[14] && gp.buttons[14].pressed) action = 'LEFT';
          else if (gp.buttons[15] && gp.buttons[15].pressed) action = 'RIGHT';

          // Check Analog Stick Axes
          else if (gp.axes && gp.axes[1] < -0.5) action = 'UP';
          else if (gp.axes && gp.axes[1] > 0.5) action = 'DOWN';
          else if (gp.axes && gp.axes[0] < -0.5) action = 'LEFT';
          else if (gp.axes && gp.axes[0] > 0.5) action = 'RIGHT';

          // Check Action / OK Buttons (0: A/Cross, 2: X, 9: Start, 16: Center)
          else if (
            (gp.buttons[0] && gp.buttons[0].pressed) ||
            (gp.buttons[9] && gp.buttons[9].pressed) ||
            (gp.buttons[16] && gp.buttons[16].pressed)
          ) {
            action = 'OK';
          }

          // Check Back Buttons (1: B/Circle, 8: Select/Back, 17: Back)
          else if (
            (gp.buttons[1] && gp.buttons[1].pressed) ||
            (gp.buttons[8] && gp.buttons[8].pressed) ||
            (gp.buttons[17] && gp.buttons[17].pressed)
          ) {
            action = 'BACK';
          }

          if (action) {
            lastGamepadActionTime = now;
            dispatchTVAction(action);
            break;
          }
        }
      }
    } catch (err) {}
    requestAnimationFrame(pollGamepads);
  }

  // ================= 8. SMART TV PLATFORM HARDWARE REGISTRATIONS =================
  function registerSmartTVPlatformKeys() {
    // 1. Samsung Tizen Key Registration
    try {
      if (typeof window !== 'undefined' && window.tizen && window.tizen.tvinputdevice) {
        const tizenKeys = [
          'Return', 'Exit', 'ColorF0Red', 'ColorF1Green', 'ColorF2Yellow', 'ColorF3Blue',
          'MediaPlay', 'MediaPause', 'MediaPlayPause', 'MediaFastForward', 'MediaRewind',
          '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
        ];
        tizenKeys.forEach(keyName => {
          try {
            window.tizen.tvinputdevice.registerKey(keyName);
          } catch (e) {}
        });
      }
    } catch (e) {}

    // 2. LG webOS Cursor State & Platform Back
    try {
      if (typeof window !== 'undefined' && window.webOS) {
        document.addEventListener('cursorStateChange', (e) => {
          if (e && e.detail && !e.detail.visibility) {
            updateSpatialFocus();
          }
        });
      }
    } catch (e) {}
  }

  // ================= 9. PARENTAL GATE (GROWN-UP GATE) ENGINE =================
  const parentalGateState = {
    isOpen: false,
    num1: 8,
    num2: 7,
    correctAnswer: 56,
    options: [48, 56, 64],
    focusedIndex: 0,
    prevFocusSection: 'content'
  };

  function toBengaliDigits(n) {
    const bn = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
    return String(n).split('').map(d => bn[d] || d).join('');
  }

  function generateParentalChallenge() {
    const n1 = Math.floor(Math.random() * 4) + 6; // 6, 7, 8, 9
    const n2 = Math.floor(Math.random() * 6) + 4; // 4, 5, 6, 7, 8, 9
    const correct = n1 * n2;

    const diff1 = (Math.floor(Math.random() * 3) + 1) * (Math.random() > 0.5 ? 1 : -1) * (n1 > 6 ? 2 : 1);
    let opt1 = correct + (diff1 === 0 ? 6 : diff1 * 2);
    let opt2 = correct + (diff1 > 0 ? -8 : 10);
    if (opt1 === correct) opt1 += 4;
    if (opt2 === correct || opt2 === opt1) opt2 = correct - 6;

    const opts = [correct, opt1, opt2].sort(() => Math.random() - 0.5);

    parentalGateState.num1 = n1;
    parentalGateState.num2 = n2;
    parentalGateState.correctAnswer = correct;
    parentalGateState.options = opts;
    parentalGateState.focusedIndex = 0;
  }

  function openParentalGateModal() {
    closeParentalGateModal();
    generateParentalChallenge();

    parentalGateState.prevFocusSection = focusSection;
    parentalGateState.isOpen = true;
    focusSection = 'parental_gate';

    const gate = document.createElement('div');
    gate.id = 'tvParentalGateModal';
    gate.className = 'tv-parental-gate-overlay';
    gate.innerHTML = `
      <div class="tv-parental-gate-card" id="tvGateCard">
        <div class="tv-gate-icon-badge">🔒</div>
        <h2 class="tv-gate-title">অভিভাবক যাচাই (Grown-Up Gate)</h2>
        <p class="tv-gate-sub">
          অ্যাপটি বন্ধ বা প্রস্থান করার জন্য নিচের প্রাপ্তবয়স্কদের গণিতটির সঠিক উত্তর দিন:
        </p>

        <!-- Adult Math Challenge -->
        <div class="tv-gate-challenge-box">
          <div class="tv-gate-math-expr">
            ${parentalGateState.num1} × ${parentalGateState.num2} = ?
            <span style="font-size:24px; color:#A7F3D0; margin-left:12px; font-weight:700;">
              (${toBengaliDigits(parentalGateState.num1)} × ${toBengaliDigits(parentalGateState.num2)} = ?)
            </span>
          </div>
        </div>

        <!-- 3 Large Focus-Trapped 10-Foot Buttons -->
        <div class="tv-gate-options-row">
          ${parentalGateState.options.map((opt, idx) => `
            <button class="tv-gate-option-btn" data-gate-idx="${idx}" data-opt-val="${opt}">
              ${opt}
            </button>
          `).join('')}
        </div>

        <div id="tvGateErrorBanner" style="display:none;" class="tv-gate-error-banner"></div>

        <!-- TV Remote Helper Legend -->
        <div class="tv-gate-legend">
          <span class="tv-gate-legend-key">◄ ► বোতাম দিয়ে বাছুন</span>
          <span class="tv-gate-legend-key" style="background:rgba(244,63,94,0.3); color:#FECDD3; border-color:#F43F5E;">
            [OK] যাচাই করুন
          </span>
          <span class="tv-gate-legend-key">[Back] বাতিল করে ফিরে যান</span>
        </div>
      </div>
    `;

    document.body.appendChild(gate);

    document.querySelectorAll('.tv-gate-option-btn').forEach((btn, idx) => {
      btn.onclick = () => {
        parentalGateState.focusedIndex = idx;
        updateSpatialFocus();
        const chosen = parseInt(btn.dataset.optVal, 10);
        handleParentalGateAnswer(chosen);
      };
    });

    updateSpatialFocus();
  }

  function handleParentalGateAnswer(chosen) {
    const card = document.getElementById('tvGateCard');
    const errBanner = document.getElementById('tvGateErrorBanner');

    if (chosen === parentalGateState.correctAnswer) {
      tvAudio.playSuccess();

      if (card) {
        card.innerHTML = `
          <div class="tv-gate-icon-badge" style="background:rgba(52,211,153,0.2); border-color:#34D399;">👋</div>
          <h2 class="tv-gate-title" style="color:#34D399;">সঠিক উত্তর! ধন্যবাদ</h2>
          <p class="tv-gate-sub" style="font-size:24px; margin-top:14px;">
            অ্যাপটি বন্ধ হচ্ছে... আবার দেখা হবে!
          </p>
        `;
      }

      setTimeout(() => {
        executeSystemExit();
      }, 900);

    } else {
      tvAudio.playError();

      if (card) {
        card.classList.remove('animate-shake');
        void card.offsetWidth;
        card.classList.add('animate-shake');
      }

      if (errBanner) {
        errBanner.style.display = 'block';
        errBanner.textContent = '⚠️ ভুল উত্তর! অভিভাবক ছাড়া প্রস্থান সম্ভব নয়।';
      }

      setTimeout(() => {
        closeParentalGateModal();
      }, 800);
    }
  }

  function closeParentalGateModal() {
    const gate = document.getElementById('tvParentalGateModal');
    if (gate) {
      gate.remove();
    }
    parentalGateState.isOpen = false;
    focusSection = parentalGateState.prevFocusSection || 'content';
    updateSpatialFocus();
  }

  function executeSystemExit() {
    try {
      if (typeof window !== 'undefined' && window.tizen && window.tizen.application) {
        window.tizen.application.getCurrentApplication().exit();
        return;
      }
      if (typeof window !== 'undefined' && window.webOS && window.webOS.platformBack) {
        window.webOS.platformBack();
        return;
      }
      if (typeof navigator !== 'undefined' && navigator.app && navigator.app.exitApp) {
        navigator.app.exitApp();
        return;
      }
      window.close();
      window.history.back();
    } catch (e) {
      window.close();
    }
  }

  window.openParentalGate = openParentalGateModal;
  window.closeParentalGate = closeParentalGateModal;
  window.handleAppExit = openParentalGateModal;

  // Intercept Browser History popstate
  window.history.pushState({ tvAppGate: true }, '');
  window.addEventListener('popstate', () => {
    window.history.pushState({ tvAppGate: true }, '');
    const actWrap = document.getElementById('activity');
    const dashWrap = document.getElementById('dashboard');
    if (actWrap && actWrap.classList.contains('open')) {
      if (typeof window.showHome === 'function') window.showHome();
      return;
    }
    if (dashWrap && dashWrap.classList.contains('open')) {
      if (typeof window.closeDashboard === 'function') window.closeDashboard();
      return;
    }
    if (document.getElementById('tvBlackboardScreen')) {
      closeTVBlackboard();
      return;
    }
    openParentalGateModal();
  });

  // ================= 10. Card Selection & 10-Foot Modals =================
  function handleCardSelect(card) {
    const actId = card.dataset.actId;
    const gameFile = card.dataset.gameFile;
    const type = card.dataset.type;
    const idx = parseInt(card.dataset.idx, 10);

    if (actId === 'blackboard') {
      openTVBlackboard();
      return;
    }

    if (actId) {
      if (typeof window.openActivity === 'function') {
        setTVMode(false);
        window.openActivity(actId);
      }
      return;
    }

    if (gameFile) {
      if (typeof window.launchGame === 'function') {
        window.launchGame(gameFile);
      } else {
        window.open(gameFile, '_blank');
      }
      return;
    }

    if (type === 'swaraborno') {
      const item = TV_DATA.swaraborno[idx];
      openTVDetailModal(item.glyph, item.word, item.icon, item.ph);
    } else if (type === 'byanjonborno') {
      const item = TV_DATA.byanjonborno[idx];
      openTVDetailModal(item.glyph, item.word, item.icon, item.ph);
    } else if (type === 'number') {
      const item = TV_DATA.numbers[idx];
      openTVDetailModal(item.num, item.word, item.icon, `${item.word}, ${item.desc}`);
    }
  }

  function openTVDetailModal(glyph, word, emoji, speechText) {
    closeTVDetailModal();
    focusSection = 'modal';

    const modal = document.createElement('div');
    modal.id = 'tvDetailModal';
    modal.className = 'tv-modal-overlay';
    modal.innerHTML = `
      <div class="tv-modal-card">
        <div class="tv-slogan-pill">★ TV will be the next Blackboard ★</div>
        <div class="tv-modal-glyph">${glyph}</div>
        <div class="tv-modal-word">${emoji} ${word}</div>
        <div class="tv-modal-sub">${speechText}</div>
        <div class="tv-modal-actions">
          <button class="tv-modal-btn primary tv-focused" id="tvModalCloseBtn">[OK] বন্ধ করুন (Back)</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    if (typeof window.speak === 'function') {
      try { window.speak(speechText); } catch (e) {}
    }

    const closeBtn = document.getElementById('tvModalCloseBtn');
    if (closeBtn) {
      closeBtn.onclick = () => closeTVDetailModal();
    }
    updateSpatialFocus();
  }

  function closeTVDetailModal() {
    const modal = document.getElementById('tvDetailModal');
    if (modal) {
      modal.remove();
      focusSection = 'content';
      updateSpatialFocus();
    }
  }

  // ================= 11. Fullscreen Digital Blackboard (Chalk Mode) =================
  let chalkColor = '#FFFFFF';
  let chalkSize = 10;
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function openTVBlackboard() {
    closeTVBlackboard();
    focusSection = 'blackboard';

    const bb = document.createElement('div');
    bb.id = 'tvBlackboardScreen';
    bb.className = 'tv-blackboard-screen';
    bb.innerHTML = `
      <div class="tv-blackboard-topbar">
        <div class="tv-blackboard-title">
          <span>🖍️</span>
          <span>ডিজিটাল ব্ল্যাকবোর্ড (Digital Blackboard)</span>
        </div>
        <div style="display:flex; gap:14px; align-items:center;">
          <span style="font-size:20px; font-weight:700; color:#A7F3D0;">TV will be the next Blackboard</span>
          <button class="tv-modal-btn" id="tvBBClearBtn" style="background:rgba(255,255,255,0.15); color:#FFF; font-size:18px; padding:10px 20px;">
            🧹 পরিষ্কার করো
          </button>
          <button class="tv-modal-btn" id="tvBBCloseBtn" style="background:#E11D48; color:#FFF; font-size:18px; padding:10px 20px;">
            [Back] প্রস্থান
          </button>
        </div>
      </div>

      <div class="tv-blackboard-canvas-area" id="tvBBCanvasWrap">
        <div class="tv-blackboard-watermark">অ আ ক খ ১ ২</div>
        <canvas id="tvChalkCanvas"></canvas>
      </div>

      <div class="tv-blackboard-bottombar">
        <div class="tv-chalk-swatches">
          <button class="tv-chalk-swatch active" data-color="#FFFFFF">⚪ সাদা চক</button>
          <button class="tv-chalk-swatch" data-color="#FDE047">🟡 হলুদ চক</button>
          <button class="tv-chalk-swatch" data-color="#F472B6">🌸 গোলাপি চক</button>
          <button class="tv-chalk-swatch" data-color="#38BDF8">🔷 আকাশি চক</button>
          <button class="tv-chalk-swatch" data-color="#4ADE80">🌿 সবুজ চক</button>
        </div>
        <div style="color:#CBD5E1; font-size:18px; font-weight:700;">
          💡 স্মার্ট টিভি রিমোট, এয়ার-মাউস বা স্পর্শ দিয়ে চক ড্রয়িং করুন
        </div>
      </div>
    `;

    document.body.appendChild(bb);

    const canvas = document.getElementById('tvChalkCanvas');
    const wrap = document.getElementById('tvBBCanvasWrap');
    if (canvas && wrap) {
      canvas.width = wrap.clientWidth;
      canvas.height = wrap.clientHeight;
      const ctx = canvas.getContext('2d');
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      function drawLine(x1, y1, x2, y2) {
        ctx.strokeStyle = chalkColor;
        ctx.lineWidth = chalkSize;
        ctx.shadowColor = chalkColor;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      canvas.onpointerdown = (e) => {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        lastX = e.clientX - rect.left;
        lastY = e.clientY - rect.top;
      };

      window.onpointermove = (e) => {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const curX = e.clientX - rect.left;
        const curY = e.clientY - rect.top;
        drawLine(lastX, lastY, curX, curY);
        lastX = curX;
        lastY = curY;
      };

      window.onpointerup = () => { isDrawing = false; };
    }

    document.querySelectorAll('.tv-chalk-swatch').forEach(swatch => {
      swatch.onclick = () => {
        document.querySelectorAll('.tv-chalk-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        chalkColor = swatch.dataset.color;
        tvAudio.playSelect();
      };
    });

    document.getElementById('tvBBClearBtn').onclick = () => {
      const canvas = document.getElementById('tvChalkCanvas');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        tvAudio.playSelect();
      }
    };

    document.getElementById('tvBBCloseBtn').onclick = () => {
      closeTVBlackboard();
    };
  }

  function closeTVBlackboard() {
    const bb = document.getElementById('tvBlackboardScreen');
    if (bb) {
      bb.remove();
      focusSection = 'content';
      updateSpatialFocus();
    }
  }

  // ================= 12. AMBIENT TV SCREEN (PARTICLE-BASED FIREFLY SCREENSAVER) =================
  const IDLE_TIMEOUT_MS = 120000; // 2 minutes of idle
  let idleTimer = null;
  let isScreensaverActive = false;
  let fireflyCanvas = null;
  let fireflyCtx = null;
  let fireflies = [];
  let fireflyAnimId = null;
  let clockIntervalId = null;

  class Firefly {
    constructor(w, h) {
      this.w = w;
      this.h = h;
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * this.w;
      this.y = initial ? Math.random() * this.h : (Math.random() > 0.5 ? -20 : this.h + 20);
      this.radius = 2.5 + Math.random() * 3.5;
      this.baseAlpha = 0.3 + Math.random() * 0.7;
      this.alpha = this.baseAlpha;
      this.pulseSpeed = 0.02 + Math.random() * 0.035;
      this.pulseOffset = Math.random() * Math.PI * 2;
      this.speed = 0.3 + Math.random() * 0.7;
      this.angle = Math.random() * Math.PI * 2;
      this.turnSpeed = (Math.random() - 0.5) * 0.04;

      // Color Palette: Warm gold, glowing teal, bioluminescent pastel green
      const colors = [
        { r: 255, g: 216, b: 102 }, // Gold
        { r: 63, g: 235, b: 201 },  // Teal
        { r: 134, g: 239, b: 172 }, // Soft Green
        { r: 255, g: 243, b: 176 }  // Warm Pale Yellow
      ];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.angle += this.turnSpeed;
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;

      this.pulseOffset += this.pulseSpeed;
      this.alpha = Math.max(0.05, Math.sin(this.pulseOffset) * this.baseAlpha);

      if (this.x < -30 || this.x > this.w + 30 || this.y < -30 || this.y > this.h + 30) {
        this.reset(false);
      }
    }

    draw(ctx) {
      if (this.alpha <= 0.01) return;

      ctx.save();
      ctx.globalAlpha = this.alpha;

      // Outer gentle bioluminescent glow
      const glowRad = this.radius * 7;
      const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowRad);
      grad.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1)`);
      grad.addColorStop(0.3, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.4)`);
      grad.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(this.x, this.y, glowRad, 0, Math.PI * 2);
      ctx.fill();

      // Bright inner core
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 0.7, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
  }

  function initFireflyScreensaver() {
    fireflyCanvas = document.getElementById('fireflyScreensaverCanvas');
    if (!fireflyCanvas) return;
    fireflyCanvas.width = window.innerWidth;
    fireflyCanvas.height = window.innerHeight;
    fireflyCtx = fireflyCanvas.getContext('2d');

    fireflies = [];
    const count = Math.min(55, Math.floor(window.innerWidth / 30));
    for (let i = 0; i < count; i++) {
      fireflies.push(new Firefly(fireflyCanvas.width, fireflyCanvas.height));
    }

    window.addEventListener('resize', () => {
      if (fireflyCanvas) {
        fireflyCanvas.width = window.innerWidth;
        fireflyCanvas.height = window.innerHeight;
      }
    });
  }

  function renderFireflyLoop() {
    if (!isScreensaverActive || !fireflyCtx) return;

    fireflyCtx.clearRect(0, 0, fireflyCanvas.width, fireflyCanvas.height);

    for (let i = 0; i < fireflies.length; i++) {
      fireflies[i].update();
      fireflies[i].draw(fireflyCtx);
    }

    fireflyAnimId = requestAnimationFrame(renderFireflyLoop);
  }

  function updateAmbientClock() {
    const timeEl = document.getElementById('tvAmbientTime');
    const dateEl = document.getElementById('tvAmbientDate');
    if (!timeEl || !dateEl) return;

    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'রাত / বিকেল' : 'সকাল / দুপুর';
    hours = hours % 12 || 12;

    const bnHours = toBengaliDigits(hours);
    const bnMinutes = toBengaliDigits(minutes);
    timeEl.textContent = `${bnHours}:${bnMinutes}`;

    const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    dateEl.textContent = `${days[now.getDay()]}, ${toBengaliDigits(now.getDate())} ${months[now.getMonth()]} • খুকির বাগান শান্ত প্রহর`;
  }

  function triggerAmbientScreensaver() {
    if (isScreensaverActive) return;
    isScreensaverActive = true;

    const ss = document.getElementById('tvAmbientScreensaver');
    if (!ss) return;

    initFireflyScreensaver();
    updateAmbientClock();
    clockIntervalId = setInterval(updateAmbientClock, 1000);

    ss.style.display = 'flex';
    void ss.offsetWidth; // force reflow
    ss.classList.add('active');

    renderFireflyLoop();
  }

  function dismissAmbientScreensaver() {
    if (!isScreensaverActive) return;
    isScreensaverActive = false;

    const ss = document.getElementById('tvAmbientScreensaver');
    if (ss) {
      ss.classList.remove('active');
      setTimeout(() => {
        if (!isScreensaverActive) {
          ss.style.display = 'none';
          if (fireflyAnimId) cancelAnimationFrame(fireflyAnimId);
          if (clockIntervalId) clearInterval(clockIntervalId);
        }
      }, 600);
    }
  }

  function resetIdleTimer() {
    if (idleTimer) clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      triggerAmbientScreensaver();
    }, IDLE_TIMEOUT_MS);
  }

  // Register user activity listeners to maintain the 2-minute screensaver timer
  ['keydown', 'keyup', 'mousemove', 'pointerdown', 'touchstart', 'wheel'].forEach(evt => {
    window.addEventListener(evt, () => {
      resetIdleTimer();
      if (isScreensaverActive) dismissAmbientScreensaver();
    }, { passive: true });
  });

  window.triggerScreensaver = triggerAmbientScreensaver;
  window.dismissScreensaver = dismissAmbientScreensaver;

  // ================= 13. Toggle TV Mode =================
  function setTVMode(active) {
    isTVMode = active;
    initTVDOM();

    if (active) {
      document.body.classList.add('tv-mode-active');
      focusSection = 'content';
      contentRow = 0;
      contentCol = 0;
      updateSpatialFocus();
      tvAudio.playSelect();
      resetIdleTimer();
    } else {
      document.body.classList.remove('tv-mode-active');
      closeTVDetailModal();
      closeTVBlackboard();
      dismissAmbientScreensaver();
      if (typeof window.showHome === 'function') {
        window.showHome();
      }
    }
  }

  window.setTVMode = setTVMode;
  window.toggleTVMode = () => setTVMode(!isTVMode);

  // ================= 14. Event Registration & Poller Initialization =================
  // Capturing listeners on both window and document for absolute TV reliability
  window.addEventListener('keydown', handleSpatialKeyDown, { capture: true, passive: false });
  document.addEventListener('keydown', handleSpatialKeyDown, { capture: true, passive: false });

  // Initialize Gamepad API poller
  pollGamepads();

  // Initialize Smart TV platform hooks
  registerSmartTVPlatformKeys();

  // Initialize idle timer for Ambient TV Screen
  resetIdleTimer();

  // DOM Content Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initTVDOM();
    });
  } else {
    initTVDOM();
  }

})();
