/* ==========================================================================
   content-data.js — ALL curriculum/learning content lives here now.
   This file was split out of index.html so that content can grow (new
   rhymes, words, letters, videos, syllabus tags) WITHOUT touching app logic.

   ---- SYLLABUS TAGGING (added per earlier discussion) ----
   SYLLABUS_TAGS maps a module key -> which school curriculum it is aligned
   to. This powers a small "syllabus badge" that can be shown next to each
   module on the home screen / activity header, e.g. "স্কুল সিলেবাস অনুযায়ী".
   Fill in the `source` field once you've mapped a module's content against
   a real school curriculum (Cambridge Early Years framework, or a specific
   school's playgroup/nursery term plan). Leave source:'' to hide the badge
   for a module until it's actually been checked against a syllabus — do
   NOT show the badge before the content has really been verified.
   ========================================================================== */

const SYLLABUS_TAGS = {
  letters:        { source:'', term:'' }, // e.g. source:'Cambridge Early Years — Bangla Literacy'
  numbers:        { source:'', term:'' },
  match:          { source:'', term:'' },
  draw:           { source:'', term:'' },
  animals:        { source:'', term:'' },
  words:          { source:'', term:'' },
  mathgame:       { source:'', term:'' },
  english:        { source:'', term:'' },
  multiplication: { source:'', term:'' },
  sentences:      { source:'', term:'' },
  rhymes:         { source:'', term:'' },
  videos:         { source:'', term:'' }
};

// ---------------------------------------------------------------------------
// বাংলা স্বরবর্ণ ও ব্যঞ্জনবর্ণ — [অক্ষর, উদাহরণ শব্দ]
// ---------------------------------------------------------------------------
const letters = [
  // স্বরবর্ণ (১১টি)
  ['অ','অজগর'],['আ','আম'],['ই','ইলিশ'],['ঈ','ঈগল'],['উ','উট'],['ঊ','ঊষা'],
  ['ঋ','ঋষি'],['এ','একতারা'],['ঐ','ঐরাবত'],['ও','ওল'],['ঔ','ঔষধ'],
  // ব্যঞ্জনবর্ণ (৩৯টি)
  ['ক','কলম'],['খ','খরগোশ'],['গ','গরু'],['ঘ','ঘড়ি'],['ঙ','কাঙারু'],
  ['চ','চাঁদ'],['ছ','ছাতা'],['জ','জাহাজ'],['ঝ','ঝুড়ি'],['ঞ','বিজ্ঞান'],
  ['ট','টমেটো'],['ঠ','ঠোঁট'],['ড','ডাব'],['ঢ','ঢোল'],['ণ','বাণ'],
  ['ত','তাল'],['থ','থালা'],['দ','দই'],['ধ','ধান'],['ন','নদী'],
  ['প','পাখি'],['ফ','ফুল'],['ব','বই'],['ভ','ভালুক'],['ম','মাছ'],
  ['য','যমুনা'],['র','রথ'],['ল','লাল'],['শ','শাক'],['ষ','ষাঁড়'],
  ['স','সাপ'],['হ','হাতি'],['ড়','বড়ই'],['ঢ়','আষাঢ়'],['য়','নয়'],['ৎ','সৎ']
];

// 4th field = topic tag, matched against CURRICULUM science/primaryScience
// topics (e.g. "Fruits", "Body Parts", "About family", "Classroom objects")
// so the words module can show only the words relevant to what's actually
// being taught this term — same pattern as animalList's pet/wild/general tag.
const wordList = [
  {word:'মা', syll:['মা'], emoji:'👩', tag:'family'},
  {word:'বাবা', syll:['বা','বা'], emoji:'👨', tag:'family'},
  {word:'আম', syll:['আ','ম'], emoji:'🥭', tag:'fruit'},
  {word:'জল', syll:['জ','ল'], emoji:'💧', tag:'general'},
  {word:'ফল', syll:['ফ','ল'], emoji:'🍎', tag:'fruit'},
  {word:'কলা', syll:['ক','লা'], emoji:'🍌', tag:'fruit'},
  {word:'মাছ', syll:['মা','ছ'], emoji:'🐟', tag:'fish'},
  {word:'হাত', syll:['হা','ত'], emoji:'✋', tag:'body'},
  {word:'বই', syll:['ব','ই'], emoji:'📚', tag:'classroom'},
  {word:'টমেটো', syll:['ট','মে','টো'], emoji:'🍅', tag:'vegetable'}
];

const englishLetters = [
  ['A','Apple','🍎'],['B','Ball','⚽'],['C','Cat','🐱'],['D','Dog','🐶'],['E','Elephant','🐘'],
  ['F','Fish','🐟'],['G','Goat','🐐'],['H','Hat','🎩'],['I','Ice cream','🍦'],['J','Jug','🫙'],
  ['K','Kite','🪁'],['L','Lion','🦁'],['M','Moon','🌙'],['N','Nest','🪺'],['O','Orange','🍊'],
  ['P','Parrot','🦜'],['Q','Queen','👑'],['R','Rabbit','🐇'],['S','Sun','☀️'],['T','Tiger','🐯'],
  ['U','Umbrella','☂️'],['V','Van','🚐'],['W','Watch','⌚'],['X','Xylophone','🎼'],['Y','Yak','🐂'],['Z','Zebra','🦓']
];

const sentenceList = [
  {text:'মা আমাকে ভালোবাসে', emoji:'❤️'},
  {text:'আমি স্কুলে যাই', emoji:'🎒'},
  {text:'সূর্য পূর্ব দিকে ওঠে', emoji:'🌅'},
  {text:'আমরা বই পড়ি', emoji:'📖'},
  {text:'বাবা অফিসে যান', emoji:'💼'},
  {text:'পাখিরা আকাশে ওড়ে', emoji:'🐦'},
  {text:'আমার একটা লাল বল আছে', emoji:'🔴'},
  {text:'আমরা একসাথে খেলি', emoji:'🤝'}
];

/* Parent tip: add more curated videos/playlists here.
   - type:'video' → single video, id is the YouTube video ID
   - type:'playlist' → a whole curated playlist embedded natively (full YouTube controls, native "up next"
     queue), without embedding an entire channel page (YouTube does not allow channel pages to be framed) */
const videoSections = [
  {
    tag:'সিসিমপুর', tagEn:'Sisimpur',
    channel:'Sisimpur',
    items:[
      {type:'video', title:'সিসিমপুর পরিবার - পর্ব ১', id:'M341Hd0Lzew'},
      {type:'video', title:'সিসিমপুর পরিবার - পর্ব ২', id:'djE_hSAA2wg'},
      {type:'video', title:'সিসিমপুরের মজার ঘটনা', id:'ZE-4Hm7u1es'}
    ]
  },
  {
    tag:'Kids Diana Show', tagEn:'Kids Diana Show',
    channel:'Kids Diana Show',
    items:[
      {type:'playlist', title:'Kids Diana Show — Playlist', listId:'PLsmeyw-Rsn1md2BhG8CmArhVJwiXqZi--'}
    ]
  }
];

// 4th field = tag ('pet' | 'wild' | 'general') so the animals module can be
// filtered against CURRICULUM science topics like "Pet animals" / "Wild
// animals" once a level+term is selected. Add more entries with the right
// tag as the list grows — general = neither clearly pet nor wild (birds,
// insects, etc, usually taught as their own science topic).
const animalList = [
  ['🦁','সিংহ','গর্জন করে','wild'], ['🐄','গরু','হাম্বা ডাকে','pet'], ['🐘','হাতি','বড় শুঁড় আছে','wild'],
  ['🐦','পাখি','কিচিরমিচির করে','general'], ['🐸','ব্যাঙ','ঘ্যাঙঘ্যাঙ ডাকে','wild'], ['🐕','কুকুর','ঘেউঘেউ করে','pet'],
  ['🐱','বিড়াল','মিঁয়াও করে','pet'], ['🐝','মৌমাছি','ভনভন করে','general']
];

/* ---------- Science extras: seasons, weather, months, day/night, meal
   time, rainbow — flashcard content for CURRICULUM science topics that
   previously had no matching module (only read aloud via 🔊). Same
   {emoji, word, sub, tag} shape as wordList so buildScienceExtra can reuse
   the same card/grid rendering pattern as buildWords. `tag` is matched
   against the science topic text in routeForSyllabusTopic — keep tags in
   sync with the exact CURRICULUM wording ("Day and Night", "12 Months",
   "Meal time", "Six seasons", "Rainbow", "Weather"). Content here is plain
   factual vocabulary (season/month names, weather words), not quoted from
   any single source, so no wording-verification risk like the chora. */
const scienceExtraList = [
  // দিন-রাত
  {emoji:'☀️', word:'দিন', sub:'সূর্য ওঠে, চারদিক আলো হয়ে যায়', tag:'daynight'},
  {emoji:'🌙', word:'রাত', sub:'চাঁদ-তারা দেখা যায়, আমরা ঘুমাই', tag:'daynight'},
  // ছয় ঋতু
  {emoji:'☀️', word:'গ্রীষ্ম', sub:'খুব গরম থাকে', tag:'season'},
  {emoji:'🌧️', word:'বর্ষা', sub:'অনেক বৃষ্টি হয়', tag:'season'},
  {emoji:'🍂', word:'শরৎ', sub:'নীল আকাশে সাদা মেঘ', tag:'season'},
  {emoji:'🌾', word:'হেমন্ত', sub:'নতুন ধান ঘরে ওঠে', tag:'season'},
  {emoji:'❄️', word:'শীত', sub:'ঠান্ডা লাগে, লেপ-কাঁথা লাগে', tag:'season'},
  {emoji:'🌸', word:'বসন্ত', sub:'ফুল ফোটে, ঋতুরাজ বলা হয়', tag:'season'},
  // আবহাওয়া
  {emoji:'🌤️', word:'রোদ', sub:'আকাশ পরিষ্কার, সূর্যের আলো', tag:'weather'},
  {emoji:'🌧️', word:'বৃষ্টি', sub:'আকাশ থেকে পানি পড়ে', tag:'weather'},
  {emoji:'☁️', word:'মেঘ', sub:'আকাশে ভাসমান পানির কণা', tag:'weather'},
  {emoji:'🌬️', word:'ঝড়', sub:'জোরে বাতাস বয়', tag:'weather'},
  {emoji:'🌫️', word:'কুয়াশা', sub:'শীতের সকালে চারদিক ঝাপসা', tag:'weather'},
  // ১২ মাস (বাংলা)
  {emoji:'📅', word:'বৈশাখ', sub:'বাংলা নববর্ষের মাস', tag:'month'},
  {emoji:'📅', word:'জ্যৈষ্ঠ', sub:'মধু মাস, অনেক ফল পাকে', tag:'month'},
  {emoji:'📅', word:'আষাঢ়', sub:'বর্ষা শুরুর মাস', tag:'month'},
  {emoji:'📅', word:'শ্রাবণ', sub:'ভারী বৃষ্টির মাস', tag:'month'},
  {emoji:'📅', word:'ভাদ্র', sub:'শরৎ শুরুর মাস', tag:'month'},
  {emoji:'📅', word:'আশ্বিন', sub:'পূজার মাস', tag:'month'},
  {emoji:'📅', word:'কার্তিক', sub:'হেমন্তের শুরু', tag:'month'},
  {emoji:'📅', word:'অগ্রহায়ণ', sub:'নবান্নের মাস', tag:'month'},
  {emoji:'📅', word:'পৌষ', sub:'শীতের শুরু, পিঠার মাস', tag:'month'},
  {emoji:'📅', word:'মাঘ', sub:'সবচেয়ে ঠান্ডার মাস', tag:'month'},
  {emoji:'📅', word:'ফাল্গুন', sub:'বসন্তের শুরু', tag:'month'},
  {emoji:'📅', word:'চৈত্র', sub:'বছরের শেষ মাস, গরম শুরু', tag:'month'},
  // খাবারের সময়
  {emoji:'🍳', word:'সকালের নাস্তা', sub:'ঘুম থেকে উঠে প্রথম খাবার', tag:'mealtime'},
  {emoji:'🍛', word:'দুপুরের খাবার', sub:'দিনের প্রধান খাবার', tag:'mealtime'},
  {emoji:'🍪', word:'বিকেলের নাস্তা', sub:'খেলার আগে হালকা খাবার', tag:'mealtime'},
  {emoji:'🍽️', word:'রাতের খাবার', sub:'ঘুমানোর আগে শেষ খাবার', tag:'mealtime'},
  // রংধনু
  {emoji:'🔴', word:'লাল', sub:'রংধনুর প্রথম রং', tag:'rainbow'},
  {emoji:'🟠', word:'কমলা', sub:'রংধনুর দ্বিতীয় রং', tag:'rainbow'},
  {emoji:'🟡', word:'হলুদ', sub:'রংধনুর তৃতীয় রং', tag:'rainbow'},
  {emoji:'🟢', word:'সবুজ', sub:'রংধনুর চতুর্থ রং', tag:'rainbow'},
  {emoji:'🔵', word:'আকাশি', sub:'রংধনুর পঞ্চম রং', tag:'rainbow'},
  {emoji:'🔷', word:'নীল', sub:'রংধনুর ষষ্ঠ রং', tag:'rainbow'},
  {emoji:'🟣', word:'বেগুনি', sub:'রংধনুর সপ্তম রং', tag:'rainbow'}
];
// Maps a scienceExtraList `tag` to the CURRICULUM phrase(s) that should
// unlock it — used by routeForSyllabusTopic (index.html) so a chip only
// turns ▶️ when its exact topic is actually covered here.
const SCIENCE_EXTRA_TAG_MATCH = {
  daynight: /day\s*and\s*night/i,
  season:   /season/i,
  weather:  /weather/i,
  month:    /month/i,
  mealtime: /meal\s*time/i,
  rainbow:  /rainbow/i
};

/* ---------- Lesson-card content for class1 subjects that have no
   vocabulary/activity shape (Islam, Social Studies, Computer, Moral
   Education) — CURRICULUM only lists chapter/lesson titles for these, so
   each entry here is a short (1–2 sentence) plain, factual note plus the
   read-aloud text, scoped modestly per the hand-off notes rather than
   full lesson content. `title` must match the CURRICULUM topic wording
   closely enough for findLessonIndexByTitle's fuzzy match to work — only
   chapters listed here get a ▶️ chip in আমার ক্লাস, everything else stays
   🔊. IMPORTANT: this is a scaffold, not verified against the actual
   textbook — especially the Islam entries should be checked against the
   real NCTB book before relying on them for anything beyond a placeholder
   read-aloud note. Extend this array the same way as new chapters are
   confirmed. */
const LESSON_CONTENT = {
  bangla: [
    {
      title: "পাঠ ৬-১০: স্বরবর্ণ ও কারচিহ্ন দিয়ে শব্দ পড়া (পৃ ৬-১২)",
      learningObjective: "আজকে তুমি বাংলা স্বরবর্ণ এবং তাদের কারচিহ্ন দিয়ে সুন্দর সুন্দর সহজ শব্দ পড়তে শিখবে।",
      warmUp: "তুমি কি জানো স্বরবর্ণগুলো যখন বন্ধুদের সাথে বসে, তখন তাদের রূপ বদলে কারচিহ্ন হয়ে যায়?",
      mainContent: [
        {
          heading: "আ-কার (া) এর জাদু",
          text: "স্বরবর্ণ 'আ' যখন অন্য বর্ণের পাশে বসে, তখন সে আ-কার (া) হয়ে যায়। যেমন ক-এর সাথে আ-কার দিলে হয় কা। কা আর কা মিলে হয় কাকা।"
        },
        {
          heading: "ই-কার (ি) এর হাসি",
          text: "হ্রস্ব ই থেকে আসে হ্রস্ব ই-কার (ি)। এটা বর্ণের আগে বসে। যেমন ডালিম ও চিঁড়ে। চ-এ ই-কার চি, ন-এ ই-কার নি, মিলে হয় চিনি।"
        },
        {
          heading: "উ-কার (ু) এর সুর",
          text: "হ্রস্ব উ থেকে আসে হ্রস্ব উ-কার (ু)। এটা বর্ণের নিচে বসে। যেমন ম-এ উ-কার মু, খ মিলে হয় মুখ। খ-এ উ-কার খু, ক-এ উ-কার কু, মিলে হয় খুকু।"
        },
        {
          heading: "শব্দ পড়ে আনন্দ",
          text: "এবার চলো একসাথে পড়ি। বাবা, মা, মামা, জামা, পাখি, ফুল। কারচিহ্ন যোগ করলেই কত সুন্দর নতুন নতুন শব্দ তৈরি হয়!"
        }
      ],
      keyVocabulary: [
        {
          word: "স্বরবর্ণ",
          meaning: "যে বর্ণগুলো নিজে নিজেই উচ্চারিত হতে পারে।"
        },
        {
          word: "কারচিহ্ন",
          meaning: "স্বরবর্ণের ছোট রূপ যা অন্য বর্ণের সাথে বসে।"
        },
        {
          word: "খুকু",
          meaning: "ছোট মেয়ে শিশুকে আদর করে খুকু বলে।"
        }
      ],
      funFact: "বাংলা ভাষায় মোট ১০টি কারচিহ্ন আছে, কিন্তু 'অ' বর্ণের কোনো কারচিহ্ন নেই!",
      practiceQuestions: [
        {
          question: "'ক' বর্ণের সাথে আ-কার (া) যোগ করলে কী হয়?",
          type: "multiple_choice",
          options: ["কা", "কি", "কু", "কে"],
          correctAnswer: "কা",
          explanation: "ক-এর সাথে আ-কার যুক্ত হলে 'কা' উচ্চারিত হয়।"
        },
        {
          question: "নিচের কোন শব্দটিতে হ্রস্ব ই-কার (ি) আছে?",
          type: "multiple_choice",
          options: ["মামা", "পাখি", "ফুল", "আম"],
          correctAnswer: "পাখি",
          explanation: "পাখি বানানে খ-এর সাথে হ্রস্ব ই-কার (ি) আছে।"
        },
        {
          question: "ম-এ উ-কার আর খ মিলে কোন শব্দ তৈরি হয়?",
          type: "multiple_choice",
          options: ["মুখ", "মাখ", "মেঘ", "মোর"],
          correctAnswer: "মুখ",
          explanation: "ম-এ হ্রস্ব উ-কার 'মু' এবং 'খ' মিলে 'মুখ' হয়।"
        }
      ],
      parentTip: "খাবার টেবিলে বা ঘরে থাকা বিভিন্ন জিনিস দেখিয়ে (যেমন: থালা, বাটি, চিনি) সন্তানকে কোনটিতে কী কারচিহ্ন আছে তা জিজ্ঞেস করুন।"
    },
    {
      title: "পাঠ ১১-১৫: ক থেকে ঞ পর্যন্ত ব্যঞ্জনবর্ণের সহজ শব্দ (পৃ ১৩-১৯)",
      learningObjective: "আজকে তুমি ক থেকে ঞ পর্যন্ত বর্ণগুলো চিনে সেগুলো দিয়ে মজার মজার শব্দ পড়তে শিখবে।",
      warmUp: "তোমার পছন্দের ফলের নাম কি আম নাকি কলা? কলা লিখতে কোন বর্ণটি লাগে জানো?",
      mainContent: [
        {
          heading: "ক, খ, গ দিয়ে শুরু",
          text: "ক-তে কলা, কলা খেতে ভারী মজা। খ-তে খাতা, খাতায় আমরা ছবি আঁকি। গ-তে গাছ, গাছে গাছে সবুজ পাতা দোলে।"
        },
        {
          heading: "ঘ এবং ঙ এর গান",
          text: "ঘ-তে ঘর, আমাদের ছোট সুন্দর ঘর। ঙ-তে ব্যাঙ, বর্ষাকালে পুকুর পাড়ে ডাকে ঘ্যাঙর ঘ্যাঙ।"
        },
        {
          heading: "চ, ছ, জ, ঝ এর খেলা",
          text: "চ-তে চাঁদ, রাতের আকাশে রূপালী চাঁদ। ছ-তে ছাতা, বৃষ্টি হলে মাথায় দিই। জ-তে জল, তৃষ্ণা পেলে জল খাই। ঝ-তে ঝড়, বৈশাখ মাসে আসে ঝড়।"
        },
        {
          heading: "ঞ দিয়ে শব্দ পরিচয়",
          text: "ঞ-তে মিঞা। বিড়াল ডাকে মিঞা মিঞা। ক থেকে ঞ পর্যন্ত বর্ণগুলো কত সুন্দর!"
        }
      ],
      keyVocabulary: [
        {
          word: "ব্যঞ্জনবর্ণ",
          meaning: "যে বর্ণগুলো স্বরবর্ণের সাহায্য ছাড়া একা একা স্পষ্টভাবে উচ্চারিত হতে পারে না।"
        },
        {
          word: "ছাতা",
          meaning: "রোদ ও বৃষ্টি থেকে বাঁচার জন্য যা মাথায় ধরা হয়।"
        },
        {
          word: "ঝড়",
          meaning: "খুব জোরে বয়ে যাওয়া বাতাস।"
        }
      ],
      funFact: "চাঁদের নিজস্ব আলো নেই, সূর্যের আলোতেই চাঁদ রাতের আকাশে চকচক করে!",
      practiceQuestions: [
        {
          question: "বৃষ্টি হলে আমরা মাথায় কী দিই?",
          type: "multiple_choice",
          options: ["খাতা", "ছাতা", "থালা", "ঘড়ি"],
          correctAnswer: "ছাতা",
          explanation: "বৃষ্টি থেকে বাঁচতে আমরা ছাতা ব্যবহার করি।"
        },
        {
          question: "রাতের আকাশে কী ওঠে?",
          type: "multiple_choice",
          options: ["চাঁদ", "সূর্য", "ঘাস", "ঝড়"],
          correctAnswer: "চাঁদ",
          explanation: "রাতের বেলা আকাশে রূপালী চাঁদ দেখা যায়।"
        },
        {
          question: "'গাছ' শব্দের প্রথম বর্ণ কোনটি?",
          type: "multiple_choice",
          options: ["ক", "খ", "গ", "ঘ"],
          correctAnswer: "গ",
          explanation: "গাছ বানান গ-া-ছ, তাই প্রথম বর্ণ হলো 'গ'।"
        }
      ],
      parentTip: "বাসায় বসে সন্তানকে 'ক' থেকে 'ঞ' বর্ণগুলোর ফ্ল্যাশকার্ড বা কাগজে লিখে এলোমেলো করে সাজাতে দিন।"
    },
    {
      title: "পাঠ ১৬-২০: ট থেকে ন পর্যন্ত ব্যঞ্জনবর্ণের সহজ শব্দ (পৃ ২০-২৭)",
      learningObjective: "আজকে তুমি ট থেকে ন পর্যন্ত বর্ণগুলো দিয়ে পরিচিত নানা জিনিসের নাম বলতে ও পড়তে পারবে।",
      warmUp: "তুমি কি কখনো রাস্তায় টমটম বা ডাব বিক্রি করতে দেখেছ?",
      mainContent: [
        {
          heading: "ট, ঠ, ড, ঢ এর মজা",
          text: "ট-তে টিয়া, লাল ঠোঁটের সুন্দর টিয়া পাখি। ঠ-তে ঠোঁট, পাখির মুখে সুন্দর ঠোঁট। ড-তে ডাব, মিষ্টি ডাবের ঠান্ডা পানি। ঢ-তে ঢাক, পূজায় বাজে ঢাকের বাদ্য।"
        },
        {
          heading: "ণ এর পরিচয়",
          text: "ণ হলো মূর্ধন্য-ণ। হরিণ বানানে ণ থাকে। বনে থাকে মায়াবী হরিণ, সে ঘাস খায়।"
        },
        {
          heading: "ত, থ, দ, ধ এর গল্প",
          text: "ত-তে তরমুজ, লাল টকটকে মিষ্টি তরমুজ। থ-তে থালা, থালায় সাজানো গরম ভাত। দ-তে দোয়েল, দোয়েল আমাদের জাতীয় পাখি। ধ-তে ধান, বাতাসে দোলে সোনালী ধান।"
        },
        {
          heading: "ন দিয়ে নদী",
          text: "ন হলো দন্ত্য-ন। ন-তে নদী। এঁকেবেঁকে বয়ে যায় আমাদের নদী। নদীতে চলে ছোট বড় নৌকা।"
        }
      ],
      keyVocabulary: [
        {
          word: "দোয়েল",
          meaning: "কালো ও সাদা রঙের মিষ্টি সুরে গান গাওয়া বাংলাদেশের জাতীয় পাখি।"
        },
        {
          word: "হরিণ",
          meaning: "সুন্দর চোখ আর দ্রুত দৌড়াতে পারা বনের একটি শান্ত প্রাণী।"
        },
        {
          word: "নদী",
          meaning: "যেখানে সারা বছর মিষ্টি পানি বয়ে চলে সাগরের দিকে।"
        }
      ],
      funFact: "দোয়েল পাখি লেজ উঁচু করে খুব সুন্দর শিষ দিয়ে গান গায়!",
      practiceQuestions: [
        {
          question: "বাংলাদেশের জাতীয় পাখির নাম কী?",
          type: "multiple_choice",
          options: ["টিয়া", "দোয়েল", "কাক", "ময়ূর"],
          correctAnswer: "দোয়েল",
          explanation: "দোয়েল হলো বাংলাদেশের জাতীয় পাখি।"
        },
        {
          question: "মিষ্টি পানির জন্য আমরা কোন ফল খাই?",
          type: "multiple_choice",
          options: ["ডাব", "ঢাক", "ধান", "ঘাস"],
          correctAnswer: "ডাব",
          explanation: "ডাবের ভেতর মিষ্টি ও ঠান্ডা পানি থাকে।"
        },
        {
          question: "'তরমুজ' শব্দের প্রথম বর্ণ কোনটি?",
          type: "multiple_choice",
          options: ["ত", "থ", "দ", "ধ"],
          correctAnswer: "ত",
          explanation: "ত-তে তরমুজ হয়।"
        }
      ],
      parentTip: "বাচ্চাকে একটি দোয়েল পাখির ছবি দেখিয়ে তার সাদা ও কালো রঙের অংশগুলো চিহ্নিত করতে বলুন।"
    },
    {
      title: "পাঠ ২১-২৫: প থেকে চন্দ্রবিন্দু পর্যন্ত ব্যঞ্জনবর্ণের রূপ (পৃ ২৮-৩৫)",
      learningObjective: "আজকে তুমি প থেকে চন্দ্রবিন্দু পর্যন্ত বর্ণগুলো দিয়ে নানা নতুন শব্দ শিখবে ও চিনবে।",
      warmUp: "ফুলের উপর যখন রঙিন প্রজাপতি ওড়ে, দেখতে কেমন লাগে তোমার?",
      mainContent: [
        {
          heading: "প, ফ, ব, ভ, ম এর বাগান",
          text: "প-তে পাতা, গাছে গাছে সবুজ পাতা। ফ-তে ফুল, বাগানে ফোটে কত রঙের ফুল। ব-তে বই, নতুন বই পড়তে ভালো লাগে। ভ-তে ভালুক, বনে থাকে কালো ভালুক। ম-তে মাছ, নদীতে সাঁতার কাটে রূপালী মাছ।"
        },
        {
          heading: "য, র, ল, ব এর সুর",
          text: "য-তে যাঁতা, গম পিষে আটা বানায় যাঁতা। র-তে রথ, মেলায় টানি রথের মেলা। ল-তে লাল, লাল গোলাপ দেখতে সুন্দর। ব-তে বক, বিলে দাঁড়িয়ে থাকে সাদা বক।"
        },
        {
          heading: "তিন শ (শ, ষ, স) এবং হ",
          text: "শ-তে শাপলা, আমাদের জাতীয় ফুল। ষ-তে ষাঁড়, মাঠে ঘাস খায়। স-তে সিংহ, বনের রাজা সিংহ। হ-তে হাতি, মস্ত বড় শুঁড় দোলায় হাতি।"
        },
        {
          heading: "বাকি বর্ণগুলোর গল্প",
          text: "ড়-তে ঘুড়ি ওড়ে আকাশে। ঢ়-তে আষাঢ় মাসে বৃষ্টি হয়। য়-তে ময়ূর নাচে পেখম তুলে। ৎ, ং, ঃ, ঁ দিয়ে তৈরি হয় উৎসব, সিংহ, দুঃখ ও চাঁদ।"
        }
      ],
      keyVocabulary: [
        {
          word: "শাপলা",
          meaning: "পানিতে ফোটা বাংলাদেশের জাতীয় ফুল।"
        },
        {
          word: "ময়ূর",
          meaning: "রঙিন পেখম মেলে নাচতে পারা সুন্দর একটি পাখি।"
        },
        {
          word: "পেখম",
          meaning: "ময়ূরের ছড়ানো সুন্দর লম্বা রঙিন ডানা।"
        }
      ],
      funFact: "ময়ূর যখন খুশি হয়, তখন তার সমস্ত রঙিন পেখম পাখা গোল করে মেলে ধরে নাচে!",
      practiceQuestions: [
        {
          question: "বনের রাজা কাকে বলা হয়?",
          type: "multiple_choice",
          options: ["হাতি", "ভালুক", "সিংহ", "বক"],
          correctAnswer: "সিংহ",
          explanation: "সিংহকে বনের রাজা বলা হয়।"
        },
        {
          question: "কোন পাখি পেখম তুলে নাচে?",
          type: "multiple_choice",
          options: ["ময়ূর", "দোয়েল", "কাক", "টিয়া"],
          correctAnswer: "ময়ূর",
          explanation: "ময়ূর পেখম মেলে সুন্দর করে নাচে।"
        },
        {
          question: "বাংলাদেশের জাতীয় ফুলের নাম কী?",
          type: "multiple_choice",
          options: ["গোলাপ", "শাপলা", "বেলি", "জবা"],
          correctAnswer: "শাপলা",
          explanation: "শাপলা হলো বাংলাদেশের জাতীয় ফুল।"
        }
      ],
      parentTip: "কাগজে 'শ', 'ষ', 'স' লিখে বাচ্চাকে তিনটি ভিন্ন 'শ' এর সাথে পরিচিত করান এবং শব্দে তাদের ব্যবহার দেখান।"
    },
    {
      title: "পাঠ ২৬-২৭: দুই ও তিন বর্ণের সরল শব্দ গঠন (পৃ ৩৬-৪২)",
      learningObjective: "আজকে তুমি কোনো কারচিহ্ন ছাড়া এবং কারচিহ্ন দিয়ে দুই ও তিন বর্ণের সহজ শব্দ বানান করে পড়তে শিখবে।",
      warmUp: "ব আর ই একসাথে বসালে কী শব্দ হয়? তুমি কি বলতে পারবে?",
      mainContent: [
        {
          heading: "দুই বর্ণের সহজ শব্দ",
          text: "চলো দুটি বর্ণ পাশাপাশি বসাই। ব আর ই মিলে হয় 'বই'। আ আর ম মিলে হয় 'আম'। জ আর ল মিলে হয় 'জল'। ফ আর ল মিলে হয় 'ফল'।"
        },
        {
          heading: "ঘরে ও বাগানের শব্দ",
          text: "ঘ আর র মিলে হয় 'ঘর'। ব আর ন মিলে হয় 'বন'। ম আর ন মিলে হয় 'মন'। র আর থ মিলে হয় 'রথ'।"
        },
        {
          heading: "তিন বর্ণের সুন্দর শব্দ",
          text: "এবার তিনটি বর্ণ একসাথে রাখব। ক, ল আর ম মিলে হয় 'কলম'। ক, দ আর ম মিলে হয় 'কদম'। শ, প আর ল-এ আ-কার মিলে হয় 'শাপলা'।"
        },
        {
          heading: "শব্দ পড়ে আনন্দ",
          text: "ন, য আর ন মিলে হয় 'নয়ন'। নয়ন মানে চোখ। গ, র আর ম মিলে হয় 'গরম'। গ্রীষ্মকালে খুব গরম পড়ে।"
        }
      ],
      keyVocabulary: [
        {
          word: "নয়ন",
          meaning: "চোখ, যা দিয়ে আমরা সবকিছু সুন্দরভাবে দেখতে পাই।"
        },
        {
          word: "কলম",
          meaning: "যা দিয়ে আমরা খাতায় সুন্দর করে লিখি।"
        },
        {
          word: "কদম",
          meaning: "বর্ষাকালে ফোটা গোল গোল সুন্দর ফুল।"
        }
      ],
      funFact: "কদম ফুল দেখতে একদম ছোট গোল বলের মতো হয়!",
      practiceQuestions: [
        {
          question: "'আ' এবং 'ম' পাশাপাশি বসলে কোন সুস্বাদু ফলের নাম হয়?",
          type: "multiple_choice",
          options: ["আম", "জাম", "তাল", "লিচু"],
          correctAnswer: "আম",
          explanation: "আ + ম = আম।"
        },
        {
          question: "'কলম' শব্দটি কয়টি বর্ণ দিয়ে তৈরি?",
          type: "multiple_choice",
          options: ["১টি", "২টি", "৩টি", "৪টি"],
          correctAnswer: "৩টি",
          explanation: "ক, ল এবং ম—এই ৩টি বর্ণ দিয়ে কলম শব্দটি গঠিত।"
        },
        {
          question: "'নয়ন' শব্দের অর্থ কী?",
          type: "multiple_choice",
          options: ["হাত", "পা", "চোখ", "নাক"],
          correctAnswer: "চোখ",
          explanation: "নয়ন মানে হলো চোখ।"
        }
      ],
      parentTip: "ঘরে থাকা ৩টি বর্ণযুক্ত জিনিস (যেমন: কলম, বোতল, চশমা) দেখিয়ে বর্ণগুলো মুখে ভেঙে ভেঙে উচ্চারণ করতে শেখান।"
    },
    {
      title: "পাঠ ২৮-২৯: ছোট ছোট বাক্য পড়া ও বোঝা (পৃ ৪৩-৪৯)",
      learningObjective: "আজকে তুমি একাধিক শব্দ একসাথে সাজিয়ে মিষ্টি ও অর্থপূর্ণ ছোট ছোট বাক্য পড়তে শিখবে।",
      warmUp: "সকালে ঘুম থেকে উঠে তুমি প্রথমে কী করো? মুখ ধোও তাই না?",
      mainContent: [
        {
          heading: "সকালের কাজ",
          text: "ভোর হলো। আলো ফুটল। খুকু ওঠো। মুখ ধোও। পড়তে বসো। সকালে মন দিয়ে পড়লে সবকিছু সহজে মনে থাকে।"
        },
        {
          heading: "আমাদের ফুল ও ফল",
          text: "আম পাকে। জাম পাকে। গাছে ফুল ফোটে। লাল গোলাপ হাসে। বাতাস দোলে। প্রজাপতি উড়ে যায়।"
        },
        {
          heading: "স্কুলে চলো",
          text: "বই নাও। খাতা নাও। স্কুলে যাই। মাঠে খেলি। বন্ধুদের সাথে মিলেমিশে খেলা করি।"
        },
        {
          heading: "ভালবাসার কথা",
          text: "মা আমার প্রিয়। বাবা আমাকে ভালোবাসেন। আমরা সবাইকে সম্মান করব। সত্য কথা বলব।"
        }
      ],
      keyVocabulary: [
        {
          word: "ভোর",
          meaning: "খুব সকালের সময়, যখন সূর্য ওঠে।"
        },
        {
          word: "সম্মান",
          meaning: "বড়দের শ্রদ্ধা করা ও মান্য করা।"
        },
        {
          word: "মিলেমিশে",
          meaning: "সবাই একসাথে মিলে আনন্দ করা।"
        }
      ],
      funFact: "প্রতিদিন সকালে পাখি গান গেয়ে পৃথিবীর সবাইকে ঘুম থেকে জাগিয়ে তোলে!",
      practiceQuestions: [
        {
          question: "ভোর হলে কী ফোটে?",
          type: "multiple_choice",
          options: ["আলো", "অন্ধকার", "বৃষ্টি", "মেঘ"],
          correctAnswer: "আলো",
          explanation: "সকাল হলে বা ভোর হলে চারদিকে আলো ফোটে।"
        },
        {
          question: "আমরা কাদের সাথে মাঠে খেলি?",
          type: "multiple_choice",
          options: ["শত্রুদের সাথে", "বন্ধুদের সাথে", "গাছের সাথে", "মেঘের সাথে"],
          correctAnswer: "বন্ধুদের সাথে",
          explanation: "মাঠে আমরা বন্ধুদের সাথে মিলেমিশে খেলি।"
        },
        {
          question: "আমরা সবসময় কেমন কথা বলব?",
          type: "multiple_choice",
          options: ["মিথ্যা কথা", "রাগ করে কথা", "সত্য কথা", "ভুল কথা"],
          correctAnswer: "সত্য কথা",
          explanation: "আমাদের সর্বদা সত্য কথা বলা উচিত।"
        }
      ],
      parentTip: "বাচ্চাকে ৩-৪ শব্দের একটি সহজ বাক্য (যেমন: 'আমি ভাত খাই') নিজে নিজে লিখতে এবং উচ্চস্বরে পড়তে বলুন।"
    },
    {
      title: "বানান শিখন (পৃ ৫০)",
      learningObjective: "আজকে তুমি সঠিক বানানে বাংলা শব্দ লিখতে ও ভুল বানান খুঁজে বের করতে শিখবে।",
      warmUp: "তুমি কি জানো পানিতে যে পাখি ভাসে তার নাম 'হাঁস'? হাঁস বানানে মাথায় কি চন্দ্রবিন্দু থাকে?",
      mainContent: [
        {
          heading: "বানান কেন জরুরি?",
          text: "আমরা যখন সঠিক বানানে লিখি, তখন লেখার অর্থ সুন্দর ও স্পষ্ট হয়। ভুল বানান লিখলে কথার অর্থ বদলে যেতে পারে।"
        },
        {
          heading: "চন্দ্রবিন্দু (ঁ) এর সঠিক ব্যবহার",
          text: "চাঁদ, হাঁস, বাঁশ, ফাঁদ—এই শব্দগুলোর মাথায় নাকের সুরে চন্দ্রবিন্দু (ঁ) বসে। চ-এ আ-কার চন্দ্রবিন্দু আর দ মিলে হয় 'চাঁদ'।"
        },
        {
          heading: "রসালো ফলের বানান",
          text: "আম (আ-ম), জাম (জ-া-ম), কলা (ক-ল-া), লিচু (ল-ি-চ-ু)। সবগুলো ফলের বানানে বর্ণ ও কারচিহ্ন ঠিক জায়গায় বসাতে হয়।"
        },
        {
          heading: "চলো বানান মেলাই",
          text: "প-া-খ-ি হলো 'পাখি'। গ-া-ছ হলো 'গাছ'। ব-ই হলো 'বই'। প্রতিদিন একটু একটু বানান লিখলে হাত সুন্দর হয়।"
        }
      ],
      keyVocabulary: [
        {
          word: "বানান",
          meaning: "বর্ণ ও কারচিহ্নকে সঠিক নিয়মে পরপর সাজিয়ে শব্দ লেখা।"
        },
        {
          word: "সঠিক",
          meaning: "যা একদম নির্ভুল ও ঠিক।"
        },
        {
          word: "চাঁদ",
          meaning: "রাতের আকাশের উজ্জ্বল গোল আলো।"
        }
      ],
      funFact: "বাংলায় চন্দ্রবিন্দু হলো একটি নাসিক্য বর্ণ, কারণ এটি উচ্চারণ করতে নাকের সাহায্য লাগে!",
      practiceQuestions: [
        {
          question: "'চাঁদ' শব্দের সঠিক বানান কোনটি?",
          type: "multiple_choice",
          options: ["চাদ", "চাঁদ", "চান্দ", "চাদঁ"],
          correctAnswer: "চাঁদ",
          explanation: "চ-এ আ-কার চন্দ্রবিন্দু আর দ মিলে 'চাঁদ' হয়।"
        },
        {
          question: "'পাখি' শব্দের সঠিক বানান কোনটি?",
          type: "multiple_choice",
          options: ["পাখি", "পাখী", "পখি", "পাকী"],
          correctAnswer: "পাখি",
          explanation: "প-এ আ-কার আর খ-এ হ্রস্ব ই-কার মিলে 'পাখি' হয়।"
        },
        {
          question: "'কলা' বানানে ল-এর সাথে কোন কারচিহ্ন বসে?",
          type: "multiple_choice",
          options: ["আ-কার", "ই-কার", "উ-কার", "এ-কার"],
          correctAnswer: "আ-কার",
          explanation: "ক + ল + া = কলা।"
        }
      ],
      parentTip: "শিশুকে ৫টি সহজ শব্দ মুখে বলে খাতায় শ্রুতলিপি (Dictation) হিসেবে লিখতে দিন।"
    },
    {
      title: "বাক্যরূপ: বর্ণমালা দিয়ে সুন্দর শব্দ সাজানো",
      learningObjective: "আজকে তুমি বাংলা বর্ণমালাকে সঠিকভাবে ক্রমানুসারে চিনে তা দিয়ে শব্দ ও বাক্য সাজাতে শিখবে।",
      warmUp: "আমাদের বাংলা বর্ণমালায় মোট কতটি বর্ণ আছে, তুমি কি বলতে পারবে?",
      mainContent: [
        {
          heading: "বর্ণমালা কী?",
          text: "সব স্বরবর্ণ আর ব্যঞ্জনবর্ণ একসাথে মিলে হয় বর্ণমালা। বাংলায় ১১টি স্বরবর্ণ এবং ৩৯টি ব্যঞ্জনবর্ণ আছে। মোট ৫০টি বর্ণ।"
        },
        {
          heading: "বর্ণমালার ক্রম",
          text: "অ-এর পরে আ, তারপর ই। ক-এর পরে খ, তারপর গ। বর্ণগুলো সবসময় তার সঠিক ক্রমানুসারে বসে।"
        },
        {
          heading: "বর্ণ সাজিয়ে শব্দ তৈরি",
          text: "যদি আমরা লিখি 'ল' আর 'ক', তবে অর্থ হয় না। কিন্তু 'ক' আগে আর 'ল' পরে দিলে হয় 'কল'। বর্ণ ঠিকমতো সাজালেই সুন্দর শব্দ হয়।"
        },
        {
          heading: "শব্দ সাজিয়ে বাক্য",
          text: "শব্দগুলোকে নিয়মমতো বসালে বাক্য হয়। যেমন: 'খাই ভাত আমি' ভুল। সঠিক বাক্য হলো: 'আমি ভাত খাই'।"
        }
      ],
      keyVocabulary: [
        {
          word: "বর্ণমালা",
          meaning: "একটি ভাষার সকল বর্ণের সুবিন্যস্ত তালিকা।"
        },
        {
          word: "ক্রম",
          meaning: "একটির পর একটি সাজানো সঠিক ধারাবাহিকতা।"
        },
        {
          word: "বাক্য",
          meaning: "কয়েকটি শব্দ একসাথে মিলে মনের সম্পূর্ণ ভাব প্রকাশ করা।"
        }
      ],
      funFact: "বাংলা বর্ণমালা দেখতে খুবই সুন্দর এবং এর প্রতিটি বর্ণের আলাদা চমৎকার ধ্বনি রয়েছে!",
      practiceQuestions: [
        {
          question: "বাংলা ভাষায় মোট কয়টি স্বরবর্ণ আছে?",
          type: "multiple_choice",
          options: ["৭টি", "৯টি", "১১টি", "৩৯টি"],
          correctAnswer: "১১টি",
          explanation: "বাংলায় মোট ১১টি স্বরবর্ণ রয়েছে।"
        },
        {
          question: "শব্দগুলো সাজিয়ে সঠিক বাক্য কোনটি: 'স্কুলে যাই আমি'?",
          type: "multiple_choice",
          options: ["আমি স্কুলে যাই", "যাই স্কুলে আমি", "স্কুলে আমি যাই", "যাই আমি স্কুলে"],
          correctAnswer: "আমি স্কুলে যাই",
          explanation: "'আমি স্কুলে যাই' হলো ব্যাকরণগতভাবে সঠিক বাক্য।"
        },
        {
          question: "'ক'-এর পরের বর্ণ কোনটি?",
          type: "multiple_choice",
          options: ["গ", "খ", "ঘ", "ঙ"],
          correctAnswer: "খ",
          explanation: "ক-এর পরেই খ আসে।"
        }
      ],
      parentTip: "কাগজের টুকরোয় 'আমি', 'আম', 'খাই' আলাদা লিখে শিশুকে সঠিকভাবে সাজিয়ে বাক্য বানানোর খেলা খেলতে দিন।"
    },
    {
      title: "বাক্যরূপ: যুক্তবর্ণ ও সহজ বাক্য গঠন",
      learningObjective: "আজকে তুমি দুটি বর্ণ একসাথে যুক্ত হয়ে কীভাবে যুক্তবর্ণ তৈরি করে তা চিনে সহজ বাক্য পড়তে শিখবে।",
      warmUp: "আম্মু যখন তোমাকে আদর করে 'বাচ্চা' ডাকে, তখন চ-এর সাথে চ মিলে কী হয় জানো?",
      mainContent: [
        {
          heading: "যুক্তবর্ণ কী?",
          text: "যখন দুটি ব্যঞ্জনবর্ণ একসাথে হাত ধরে জোড়া লাগে, তখন তাকে যুক্তবর্ণ বলে। যেমন ক আর ত মিলে হয় ক্ত।"
        },
        {
          heading: "সহজ কিছু যুক্তবর্ণ",
          text: "ক + ত = ক্ত (যেমন: রক্ত, শক্ত)। চ + চ = চ্চ (যেমন: বাচ্চা)। ল + প = ল্প (যেমন: গল্প)।"
        },
        {
          heading: "যুক্তবর্ণ দিয়ে বাক্য পড়া",
          text: "দাদি আমাদের মজার গল্প বলেন। গাছটির কাণ্ড খুব শক্ত। লাল রক্ত টকটকে। আমরা সবাই মিলে খেলি।"
        },
        {
          heading: "যুক্তবর্ণ চেনার আনন্দ",
          text: "যুক্তবর্ণ দেখলে ভয় পাওয়ার কিছু নেই। দুটি বন্ধু বর্ণ একসাথে বসে চমৎকার নতুন ধ্বনি তৈরি করে।"
        }
      ],
      keyVocabulary: [
        {
          word: "যুক্তবর্ণ",
          meaning: "একের বেশি বর্ণ একসাথে জুড়ে তৈরি হওয়া বর্ণ।"
        },
        {
          word: "শক্ত",
          meaning: "যা সহজে ভাঙে না বা বাঁকে না।"
        },
        {
          word: "গল্প",
          meaning: "মজার কোনো ঘটনা বা রূপকথার কাহিনি।"
        }
      ],
      funFact: "যুক্তবর্ণগুলোকে দেখতে অনেক সময় নতুন অক্ষরের মতো মনে হলেও এগুলো মূলত দুটি পরিচিত বর্ণের মিলন!",
      practiceQuestions: [
        {
          question: "'গল্প' শব্দে কোন যুক্তবর্ণটি আছে?",
          type: "multiple_choice",
          options: ["ল্প (ল+প)", "ক্ত (ক+ত)", "চ্চ (চ+চ)", "ন্দ (ন+দ)"],
          correctAnswer: "ল্প (ল+প)",
          explanation: "গল্প বানানে ল ও প মিলে 'ল্প' হয়েছে।"
        },
        {
          question: "ক + ত মিলে কোন যুক্তবর্ণ হয়?",
          type: "multiple_choice",
          options: ["ক্ত", "ক্ষ", "জ্ঞ", "ঞ্চ"],
          correctAnswer: "ক্ত",
          explanation: "ক এবং ত মিলে 'ক্ত' গঠিত হয়।"
        },
        {
          question: "দাদি আমাদের কী শোনান?",
          type: "multiple_choice",
          options: ["গল্প", "ঝগড়া", "ভয়", "রাগ"],
          correctAnswer: "গল্প",
          explanation: "দাদি আমাদের রূপকথার মজার গল্প শোনান।"
        }
      ],
      parentTip: "শিশুর পাঠ্যবই বা যেকোনো গল্পের বই থেকে ১-২টি সহজ যুক্তবর্ণের শব্দ গোল দাগ দিয়ে খুঁজে বের করতে বলুন।"
    },
    {
      title: "বাক্যরূপ: বিপরীত শব্দ শেখা ও বাক্যে ব্যবহার",
      learningObjective: "আজকে তুমি বিভিন্ন পরিচিত শব্দের উল্টো বা বিপরীত অর্থ জেনে তা দিয়ে বাক্য বলতে শিখবে।",
      warmUp: "দিনের বেলা আকাশে সূর্য হাসে, আর দিনের উল্টো রাতের বেলা আকাশে কী হাসে?",
      mainContent: [
        {
          heading: "বিপরীত শব্দ কী?",
          text: "একটি শব্দের একদম উল্টো অর্থ প্রকাশ করা শব্দকে বিপরীত শব্দ বলে। যেমন দিনের উল্টো রাত।"
        },
        {
          heading: "সহজ কিছু বিপরীত শব্দ",
          text: "ভালো এর বিপরীত মন্দ। সাদা এর বিপরীত কালো। বড় এর বিপরীত ছোট। আলো এর বিপরীত অন্ধকার।"
        },
        {
          heading: "আরও কিছু মজার বিপরীত শব্দ",
          text: "গরম এর বিপরীত ঠান্ডা। দিন এর বিপরীত রাত। উঁচু এর বিপরীত নিচু। হাসির বিপরীত কান্না।"
        },
        {
          heading: "বাক্যে বিপরীত শব্দের খেলা",
          text: "আইসক্রিম খুব ঠান্ডা, কিন্তু চা খুব গরম। হাতি খুব বড় প্রাণী, কিন্তু পিঁপড়ে খুব ছোট।"
        }
      ],
      keyVocabulary: [
        {
          word: "বিপরীত",
          meaning: "যা অন্য কিছুর সম্পূর্ণ উল্টো বা ভিন্ন।"
        },
        {
          word: "অন্ধকার",
          meaning: "যেখানে কোনো আলো নেই।"
        },
        {
          word: "ঠান্ডা",
          meaning: "বরফের মতো শীতল অনুভূতি।"
        }
      ],
      funFact: "বিপরীত শব্দ জানলে আমরা যেকোনো জিনিসের তুলনা খুব সহজে করতে পারি!",
      practiceQuestions: [
        {
          question: "'সাদা' শব্দের বিপরীত শব্দ কোনটি?",
          type: "multiple_choice",
          options: ["লাল", "কালো", "নীল", "হলুদ"],
          correctAnswer: "কালো",
          explanation: "সাদার বিপরীত হলো কালো।"
        },
        {
          question: "'বড়' শব্দের বিপরীত শব্দ কী?",
          type: "multiple_choice",
          options: ["ছোট", "মোটা", "লম্বা", "ভারী"],
          correctAnswer: "ছোট",
          explanation: "বড় এর বিপরীত শব্দ ছোট।"
        },
        {
          question: "চা যদি গরম হয়, তবে বরফ কেমন?",
          type: "multiple_choice",
          options: ["গরম", "মিষ্টি", "ঠান্ডা", "টক"],
          correctAnswer: "ঠান্ডা",
          explanation: "গরমের বিপরীত হলো ঠান্ডা।"
        }
      ],
      parentTip: "বাসার বিভিন্ন জিনিস দেখিয়ে (যেমন: বড় বাটি ও ছোট চামচ) শিশুকে বিপরীত জোড়া বলতে উৎসাহিত করুন।"
    },
    {
      title: "বাক্যরূপ: প্রতিশব্দ (একই অর্থের শব্দ)",
      learningObjective: "আজকে তুমি একই জিনিসকে কতগুলো ভিন্ন ভিন্ন সুন্দর নামে ডাকা যায় তা শিখবে।",
      warmUp: "তুমি কি জানো তোমার মা-কে আমরা আর কী সুন্দর নামে ডাকতে পারি? জননী বা মাতা!",
      mainContent: [
        {
          heading: "প্রতিশব্দ কী?",
          text: "একই অর্থ কিন্তু আলাদা দেখতে শব্দগুলোকে প্রতিশব্দ বা সমার্থক শব্দ বলে। জিনিস একটাই, কিন্তু নাম অনেক!"
        },
        {
          heading: "মা ও বাবার প্রতিশব্দ",
          text: "মা-কে আমরা বলতে পারি 'মাতা' বা 'জননী'। বাবা-কে আমরা বলতে পারি 'পিতা' বা 'জনক'।"
        },
        {
          heading: "প্রকৃতির প্রতিশব্দ",
          text: "জল-এর আরেকটি নাম 'পানি'। গাছ-এর আরেকটি নাম 'বৃক্ষ'। ফুল-এর আরেকটি নাম 'কুসুম'। চাঁদ-এর আরেকটি নাম 'শশী'।"
        },
        {
          heading: "সূর্য ও আকাশের নাম",
          text: "সূর্য-কে আমরা বলি 'রবি'। আকাশ-কে আমরা বলি 'গগন'। রবি সকালে গগনে ওঠে এবং আলো দেয়।"
        }
      ],
      keyVocabulary: [
        {
          word: "প্রতিশব্দ",
          meaning: "একই অর্থ বোঝায় এমন অন্য একটি শব্দ।"
        },
        {
          word: "বৃক্ষ",
          meaning: "বড় ও ছায়াদানকারী গাছ।"
        },
        {
          word: "গগন",
          meaning: "মাথার উপরের নীল আকাশ।"
        }
      ],
      funFact: "সূর্যের এতগুলো সুন্দর নাম আছে—রবি, ভানু, তপন, দিবাকর!",
      practiceQuestions: [
        {
          question: "'জল' শব্দের আরেকটি প্রতিশব্দ কী?",
          type: "multiple_choice",
          options: ["পানি", "দুধ", "তেল", "চা"],
          correctAnswer: "পানি",
          explanation: "জল এবং পানি একই অর্থ প্রকাশ করে।"
        },
        {
          question: "'গাছ' শব্দের প্রতিশব্দ কোনটি?",
          type: "multiple_choice",
          options: ["ফুল", "পাতা", "বৃক্ষ", "ফল"],
          correctAnswer: "বৃক্ষ",
          explanation: "গাছের আরেক নাম হলো বৃক্ষ।"
        },
        {
          question: "'সূর্য' শব্দের আরেকটি নাম কী?",
          type: "multiple_choice",
          options: ["চাঁদ", "রবি", "মেঘ", "তারা"],
          correctAnswer: "রবি",
          explanation: "সূর্যকে আমরা রবি নামেও ডাকি।"
        }
      ],
      parentTip: "আকাশ বা গাছ দেখিয়ে শিশুকে জিজ্ঞেস করুন এর আর কী কী সুন্দর নাম সে জানে।"
    },
    {
      title: "বাক্যরূপ: এক কথায় প্রকাশ",
      learningObjective: "আজকে তুমি অনেকগুলো শব্দকে ছোট করে মাত্র একটি কথায় কীভাবে সুন্দর করে বলতে হয় তা শিখবে।",
      warmUp: "যে মাটির জিনিস তৈরি করে, তাকে এক কথায় কী বলে তুমি কি জানো?",
      mainContent: [
        {
          heading: "এক কথায় প্রকাশ কী?",
          text: "অনেকগুলো কথাকে যখন আমরা ছোট্ট একটি সুন্দর শব্দে বলি, তখন তাকে এক কথায় প্রকাশ বলে। এতে কথা শুনতে মিষ্টি লাগে।"
        },
        {
          heading: "আমাদের চারপাশে যারা কাজ করেন",
          text: "যিনি মাটি দিয়ে হাঁড়ি-পাতিল গড়েন, তাকে বলে 'কুমার'। যিনি মাছ ধরেন, তাকে বলে 'জেলে'। যিনি ফসল ফলান, তাকে বলে 'কৃষক'।"
        },
        {
          heading: "গুণ ও স্বভাবের কথা",
          text: "যে সত্যি কথা বলে, তাকে বলে 'সত্যবাদী'। যার দয়া আছে, তাকে বলে 'দয়ালু'। যে গান গায়, তাকে বলে 'গায়ক'।"
        },
        {
          heading: "এক কথায় সুন্দর বাক্য",
          text: "কৃষক মাঠে ধান কাটেন। জেলে নদীতে জাল ফেলেন। আমরা সবাই সত্যবাদী হব।"
        }
      ],
      keyVocabulary: [
        {
          word: "কৃষক",
          meaning: "যিনি মাঠে রোদে পুড়ে আমাদের জন্য ফসল ও খাবার ফলান।"
        },
        {
          word: "জেলে",
          meaning: "যিনি নদী বা সাগরে জাল ফেলে মাছ ধরেন।"
        },
        {
          word: "সত্যবাদী",
          meaning: "যে মানুষ কখনোই মিথ্যা বলে না, সবসময় সত্য কথা বলে।"
        }
      ],
      funFact: "কৃষক ভাইয়েরা দিনরাত পরিশ্রম করে ধান ফলান বলেই আমরা পেট ভরে গরম ভাত খেতে পারি!",
      practiceQuestions: [
        {
          question: "যিনি নদীতে মাছ ধরেন, তাকে এক কথায় কী বলে?",
          type: "multiple_choice",
          options: ["কুমার", "জেলে", "কৃষক", "কামার"],
          correctAnswer: "জেলে",
          explanation: "মাছ শিকারীকে এক কথায় জেলে বলা হয়।"
        },
        {
          question: "যে সবসময় সত্য কথা বলে, তাকে কী বলা হয়?",
          type: "multiple_choice",
          options: ["মিথ্যুক", "সত্যবাদী", "দয়ালু", "গায়ক"],
          correctAnswer: "সত্যবাদী",
          explanation: "যে সর্বদা সত্য কথা বলে সে সত্যবাদী।"
        },
        {
          question: "যিনি মাঠে ফসল ফলান, তাকে কী বলে?",
          type: "multiple_choice",
          options: ["কৃষক", "ডাক্তার", "শিক্ষক", "চালক"],
          correctAnswer: "কৃষক",
          explanation: "মাঠে ফসল ফলান কৃষক।"
        }
      ],
      parentTip: "শিশুর সাথে পেশা নিয়ে কথা বলুন: 'যিনি আমাদের পড়ান তাকে কী বলে? শিক্ষক!' এভাবে অন্যান্য পেশার নামও শেখান।"
    },
    {
      title: "অনুচ্ছেদ: আমার মা",
      learningObjective: "আজকে তুমি 'আমার মা' অনুচ্ছেদটি পড়ে মায়ের মমতা, স্নেহ এবং পরিবারের প্রতি তাঁর ভালোবাসা সম্পর্কে বাক্য পড়তে শিখবে।",
      warmUp: "পৃথিবীতে তোমাকে সবচেয়ে বেশি কে ভালোবাসেন এবং পরম যত্নে জড়িয়ে রাখেন?",
      mainContent: [
        {
          heading: "আমার সবচেয়ে প্রিয় মা",
          text: "আমার মায়ের নাম খুব সুন্দর। মা আমাকে পৃথিবীর সবার চেয়ে বেশি ভালোবাসেন। মা আমার সেরা বন্ধু।"
        },
        {
          heading: "মায়ের মমতা ও যত্ন",
          text: "মা আমাকে খুব সকালে ঘুম থেকে জাগান। তিনি আমার জন্য সুস্বাদু ও পুষ্টিকর খাবার রান্না করেন। আমি অসুস্থ হলে মা সারারাত জেগে আমার মাথায় হাত বুলিয়ে দেন।"
        },
        {
          heading: "পড়ালেখা ও গল্প বলা",
          text: "মা আমাকে প্রতিদিন পরম যত্নে পড়তে বসান। সুন্দর করে পড়া বুঝিয়ে দেন। রাতে ঘুমানোর আগে মা আমাকে মজার মজার পরীর গল্প শোনান।"
        },
        {
          heading: "মাকে আমার শ্রদ্ধা",
          text: "আমি আমার মায়ের সব কথা মন দিয়ে মেনে চলি। মাকে কখনো কষ্ট দিই না। আমি আমার মাকে অনেক অনেক ভালোবাসি।"
        }
      ],
      keyVocabulary: [
        {
          word: "মমতা",
          meaning: "মায়ের বুকভরা গভীর স্নেহ ও অসীম ভালোবাসা।"
        },
        {
          word: "পুষ্টিকর",
          meaning: "যে ভালো খাবার খেলে শরীর সুস্থ ও সবল থাকে।"
        },
        {
          word: "শ্রদ্ধা",
          meaning: "বড়দের প্রতি দেখানো ভালোবাসা ও সম্মান।"
        }
      ],
      funFact: "মায়ের মুখের মিষ্টি হাসি শিশুর মনকে মুহূর্তের মধ্যে খুশি ও আনন্দময় করে তোলে!",
      practiceQuestions: [
        {
          question: "কে আমাদের সবচেয়ে বেশি ভালোবাসেন ও যত্ন নেন?",
          type: "multiple_choice",
          options: ["মা", "শত্রু", "অচেনা লোক", "কেউ না"],
          correctAnswer: "মা",
          explanation: "মা আমাদের পরম স্নেহে ভালোবাসেন ও যত্ন নেন।"
        },
        {
          question: "রাতে ঘুমানোর আগে মা আমাদের কী শোনান?",
          type: "multiple_choice",
          options: ["মজার গল্প", "ভয়ের কথা", "রাগ", "চিৎকার"],
          correctAnswer: "মজার গল্প",
          explanation: "মা আমাদের আদর করে সুন্দর সুন্দর গল্প শোনান।"
        },
        {
          question: "মায়ের সাথে আমাদের কেমন ব্যবহার করা উচিত?",
          type: "multiple_choice",
          options: ["খারাপ ব্যবহার", "সব কথা মেনে চলা ও ভালোবাসা", "অমান্য করা", "কথা না শোনা"],
          correctAnswer: "সব কথা মেনে চলা ও ভালোবাসা",
          explanation: "আমাদের উচিত মায়ের সব কথা মেনে চলা এবং তাঁকে ভালোবাসা।"
        }
      ],
      parentTip: "সন্তানকে মায়ের জন্য একটি ছোট্ট ফুল দিয়ে অথবা জড়িয়ে ধরে 'মা, আমি তোমাকে ভালোবাসি' বলতে উৎসাহিত করুন।"
    },
    {
      title: "অনুচ্ছেদ: জাতীয় ফুল শাপলা",
      learningObjective: "আজকে তুমি বাংলাদেশের জাতীয় ফুল শাপলা সম্পর্কে সহজ ও সুন্দর বাক্য পড়তে ও জানতে পারবে।",
      warmUp: "বর্ষাকালে গ্রামের পুকুর বা বিলের পানিতে সাদা সাদা কী ফুল ফুটে থাকতে দেখেছ?",
      mainContent: [
        {
          heading: "আমাদের জাতীয় ফুল",
          text: "শাপলা হলো আমাদের বাংলাদেশের জাতীয় ফুল। এটি একটি চমৎকার জলজ ফুল, যা পানিতে জন্মায় ও ফোটে।"
        },
        {
          heading: "কোথায় ফোটে শাপলা?",
          text: "গ্রামের পুকুর, খাল, বিল ও ঝিলে প্রচুর শাপলা ফোটে। বর্ষা ও শরৎকালে পুরো বিল শাপলা ফুলে ভরে যায়। দূর থেকে দেখতে খুব সুন্দর লাগে।"
        },
        {
          heading: "শাপলার রূপ ও রং",
          text: "শাপলা ফুল সাধারণত সাদা ও লাল রঙের হয়। তবে সাদা শাপলাই আমাদের জাতীয় ফুল। শাপলার পাতাগুলো গোল গোল এবং পানিতে ভেসে থাকে।"
        },
        {
          heading: "শাপলার ডাঁটা ও ভেট",
          text: "শাপলার লম্বা ডাঁটা তরকারি হিসেবে রান্না করে খাওয়া যায়। শাপলার ফলকে বলে ঢ্যাপ বা ভেট। ঢ্যাপের খই খেতে ভারী মিষ্টি ও সুস্বাদু।"
        }
      ],
      keyVocabulary: [
        {
          word: "জলজ",
          meaning: "যা পানিতে জন্মায় এবং পানিতেই বেঁচে থাকে।"
        },
        {
          word: "বিল",
          meaning: "প্রচুর জল ও জলজ উদ্ভিদে ভরা বড় প্রাকৃতিক জলাশয়।"
        },
        {
          word: "ঢ্যাপ",
          meaning: "শাপলা ফুলের গোল ফল, যা থেকে সুস্বাদু খই বানানো হয়।"
        }
      ],
      funFact: "বাংলাদেশের এক টাকার মুদ্রায় এবং সরকারি প্রতীকে সাদা শাপলা ফুলের সুন্দর ছবি আঁকা আছে!",
      practiceQuestions: [
        {
          question: "বাংলাদেশের জাতীয় ফুলের নাম কী?",
          type: "multiple_choice",
          options: ["গোলাপ", "সাদা শাপলা", "বেলি", "গাঁদা"],
          correctAnswer: "সাদা শাপলা",
          explanation: "সাদা শাপলা হলো আমাদের জাতীয় ফুল।"
        },
        {
          question: "শাপলা ফুল কোথায় ফোটে?",
          type: "multiple_choice",
          options: ["গাছের ডালে", "পানিতে", "পাহাড়ে", "মরুভূমিতে"],
          correctAnswer: "পানিতে",
          explanation: "শাপলা একটি জলজ ফুল, তাই এটি পুকুর ও বিলের পানিতে ফোটে।"
        },
        {
          question: "শাপলার গোল ফলকে কী বলে?",
          type: "multiple_choice",
          options: ["আম", "ঢ্যাপ", "ডাব", "জাম"],
          correctAnswer: "ঢ্যাপ",
          explanation: "শাপলার ফলকে ঢ্যাপ বা ভেট বলা হয়।"
        }
      ],
      parentTip: "শিশুকে একটি শাপলা ফুলের ছবি বা এক টাকার কয়েন দেখিয়ে সেখানে শাপলা ফুলটি চিহ্নিত করতে বলুন।"
    }
  ],
  islam: [
    {
      title: 'Chapter I, Unit 1: Allah the Almighty',
      note: 'আল্লাহ আমাদের সবার সৃষ্টিকর্তা। তিনি একজন, তাঁর কোনো শরিক নেই। আমরা তাঁকেই ভালোবাসি ও তাঁর কাছে প্রার্থনা করি।'
    },
    {
      title: 'Chapter II, Unit 1: The Prophet Hazrat Muhammad (S.A.W)',
      note: 'হযরত মুহাম্মদ (সা.) আল্লাহর প্রিয় নবী। তিনি সবাইকে সততা, ভালোবাসা ও ভালো ব্যবহার শিখিয়েছেন।'
    },
    {
      title: 'Chapter II, Unit 3: Honesty (a story based on Hadith)',
      note: 'সততা মানে সবসময় সত্য কথা বলা। ইসলামে সততাকে সবচেয়ে ভালো গুণগুলোর একটি বলা হয়েছে।'
    }
  ],
  socialStudies: [
    { title: 'Lesson 2: Our Family', note: 'পরিবারে আমরা বাবা-মা, ভাই-বোন ও অন্য স্বজনদের নিয়ে একসাথে থাকি। সবাই একে অপরকে সাহায্য করে।' },
    { title: 'Lesson 7: Our School', note: 'বিদ্যালয় হলো সেই জায়গা যেখানে আমরা শিক্ষকদের কাছে পড়াশোনা শিখি ও বন্ধুদের সাথে খেলি।' },
    { title: 'Lesson 8: Bangladesh — Our Motherland', note: 'বাংলাদেশ আমাদের মাতৃভূমি। এর রাজধানীর নাম ঢাকা, আর জাতীয় পতাকা সবুজের মধ্যে লাল বৃত্ত।' },
    { title: 'Lesson 19: Day and Night', note: 'পৃথিবী নিজের অক্ষে ঘোরে বলে দিন ও রাত হয় — সূর্যের আলো থাকলে দিন, না থাকলে রাত।' }
  ],
  computer: [
    { title: 'Chapter 1: Computer, a Smart Machine', note: 'কম্পিউটার একটি স্মার্ট যন্ত্র, যা আমাদের নির্দেশ অনুযায়ী কাজ করে — লেখা, ছবি আঁকা, খেলা সবই করা যায়।' },
    { title: 'Chapter 2: Parts of a Computer', note: 'কম্পিউটারের প্রধান অংশ: মনিটর (স্ক্রিন), কি-বোর্ড, মাউস আর সিপিইউ (CPU)।' },
    { title: 'Chapter 4: About the Keyboard', note: 'কি-বোর্ড দিয়ে আমরা লেখা টাইপ করি — এতে অক্ষর, সংখ্যা ও বিশেষ চিহ্নের বোতাম থাকে।' }
  ],
  moralEducation: [
    { title: 'Look for Values — Ch 2: A Good Friend', note: 'একজন ভালো বন্ধু সবসময় সত্য কথা বলে, বিপদে পাশে থাকে আর অন্যকে সাহায্য করে।' },
    { title: 'More Values — Ch 4: Doing Things for My Family', note: 'পরিবারের ছোট ছোট কাজে সাহায্য করা — যেমন ঘর গোছানো — একটা ভালো অভ্যাস।' }
  ]
};

/* ==========================================================================
   CURRICULUM — real school syllabus, structured as:
   level -> term -> subject -> topics
   This is separate from the older SYLLABUS_TAGS badge (which just labels a
   module). CURRICULUM is the actual content plan used to decide WHAT goes
   into each module for each class/term, and later to auto-switch what a
   child sees when the parent selects their level in the dashboard.

   Only "playgroup" is filled in so far (from the syllabus you shared).
   Add "nursery", "kg", "class1" the same way as you get their syllabus —
   same shape each time, so the level-switch logic in the app only needs
   to be written once and will work for every class.
   ========================================================================== */
const CURRICULUM = {
  playgroup: {
    midTerm: {
      english: {
        rhymes: ['Twinkle, Twinkle, Little Star', 'Baa Baa Black Sheep', 'Johnny Johnny', 'What I Can Do'],
        letters: 'A–L / a–l',
        joiningLetters: 'A–L / a–l',
        missingLetters: 'A–L / a–l',
        joiningPictures: 'A–L / a–l',
        written: 'A–F / a–f'
      },
      bangla: {
        chora: ['ঝিলের জলে পদ্ম ভাসে', 'খোকন খোকন', 'আয়রে আয় টিয়ে', 'তাঁতির বাড়ি'],
        shorborno: 'অ – ঔ (মিলকরণ, খালিঘর পূরণ, ছবি মিলকরণ)',
        borno: 'অ – ঈ (লিখিত)',
        sonkha_written: '১–৫ (লিখিত)',
        sonkha_oral: '১–১০ (মিলকরণ, খালিঘর পূরণ, মৌখিক)'
      },
      mathematics: {
        number: '1–10 (Oral & Identification)',
        joiningNumbers: '1–10',
        missingNumbers: '1–10',
        written: '1–5',
        activities: ['Circle the Correct Number', 'Same & Different', 'More & Less']
      },
      science: {
        topics: ['Name of Flowers', 'Name of Fruits', "Animal's Name", 'Body Parts', 'Class Room Objects', 'Meal Time', 'Shapes Name']
      },
      drawing: { referenceBook: 'My Colour Book' }
    },
    finalTerm: {
      english: {
        rhymes: ['Pussy Cat', 'Our Band', 'Jack & Jill', 'One Two Buckle My Shoe'],
        letters: 'M–Z / m–z',
        joiningLetters: 'M–Z / m–z',
        missingLetters: 'M–Z / m–z',
        joiningPictures: 'M–Z / m–z',
        written: 'G–N / g–n'
      },
      bangla: {
        chora: ['ছোট্ট পাখি', 'কাজের লোক', 'ভোর হল', 'কানা বগীর ছা'],
        borno_written: 'উ – ঔ (লিখিত)',
        sonkha_written: '৬–১০ (লিখিত)',
        bebbjonborno: 'ক – ম (মিলকরণ, খালিঘর পূরণ, ছবি মিলকরণ, মৌখিক)',
        sonkha_oral: '১১–২০ (মিলকরণ, খালিঘর পূরণ, মৌখিক)'
      },
      mathematics: {
        number: '11–20 (Oral & Identification)',
        joiningNumbers: '11–20',
        missingNumbers: '11–20',
        activities: ['Count & Colour', 'Circle the Object'],
        written: '6–10',
        countAndWrite: true
      },
      science: {
        topics: ["Bird's Name", 'Name of Vegetables', 'The Colours of Rainbow', 'Name of Seven Days', 'Day – Night', "6 Season's Name"]
      },
      drawing: { referenceBook: 'My Colour Book' }
    }
  },

  // ---- Nursery (from 20200216090259_Class_-_Nursery.pdf) ----
  nursery: {
    midTerm: {
      bangla: {
        topics: [
          'স্বরবর্ণ পরিচয় (অ – ঔ)', 'ব্যঞ্জনবর্ণ পরিচয় (ক – ত)',
          'খালিঘর পূরণ ও সাজিয়ে লেখা', 'ছবির সাথে বর্ণ মিলানো',
          'ছড়া: আতা গাছে তোতা পাখি, খোকন খোকন ডাক পাড়ি, তাঁতির বাড়ি, চাঁদ উঠেছে ফুল ফুটেছে, আয় বৃষ্টি, কে বকেছে কে মেরেছে, নোটন নোটন পায়রা',
          'সাধারণ জ্ঞান (মৌখিক): ফলের নাম, রংধনুর ৭টি রঙের নাম, মাছের নাম'
        ]
      },
      english: {
        topics: [
          'Capital letters (A–L), Small letters (a–l)',
          'After / before / between letters',
          'Join picture with letter, first letter of names',
          'Missing letters, match capital–small',
          'Rhymes: Early to Bed, Rain Rain, Twinkle Twinkle, A for Apple, The Cat in the Hat, Are You Sleeping, Prayer',
          'General Knowledge (oral)'
        ]
      },
      mathematics: {
        topics: [
          'Numbers 1–20 (written & oral)', 'Missing numbers 1–20', 'Count & write the number',
          'Match number with picture', 'Join the dots (1–20)',
          'After / before / between numbers (1–20)', 'Count & circle',
          'Bigger / smaller objects'
        ]
      },
      science: {
        topics: ['Body parts', 'Flowers', 'About family', 'Pet animals', 'Classroom objects', 'Fruits', 'Seven days name']
      },
      drawing: {
        topics: [
          'Drawing: Balloon', 'Colour: Flag, Apple, Bird, Fish',
          'Join dots & colour: Circle, Triangle, Sun', 'Paste paper pieces: Cloud, House'
        ]
      }
    },
    finalTerm: {
      bangla: {
        topics: [
          'ব্যঞ্জনবর্ণ পরিচয় (ড – হ)', 'পরের / মাঝের / আগের বর্ণ',
          'ছবির সাথে বর্ণ মিলানো, সাজিয়ে লেখা',
          'ছড়া: সিংহ মামা, হাট্টিমাটিম টিম, খোকা যাবে শ্বশুর বাড়ি, ইলিশ ভাজা, মিথ্যা কথা বলতে নেই, আম পাতা জোড়া জোড়া, বাক বাক কুম পায়রা',
          'সাধারণ জ্ঞান: ফুলের নাম, পাখির নাম, বাংলাদেশ, পশুর নাম'
        ]
      },
      english: {
        topics: [
          'Capital & small letters (A–Z / a–z)', 'After / before / between letters',
          'Join picture with letter, convert small/capital', 'Missing letters, complete word with a,e,i,o,u',
          'Rhymes: What I Can Do, Monkey in the Mango Tree, Ten Little Fingers, There Was a Bee, Engine Engine Number Nine, God Bless Me, Bye Baby Bunting',
          '2 words for each letter (oral), General Knowledge'
        ]
      },
      mathematics: {
        topics: [
          'Numbers 1–50 (written & oral)', 'Missing numbers 1–50', 'Match number with picture (1–30)',
          'Join the dots (1–50)', 'After / before / between numbers (1–50)', 'More & less',
          'Count & circle, Long / short'
        ]
      },
      science: {
        topics: ['Vegetables', 'Wild animals', 'Day and Night', '12 Months', 'Meal time', 'Birds', 'Six seasons', 'Rainbow', 'Weather']
      },
      drawing: {
        topics: [
          'Drawing: Rat, Crown', 'Colour: Papaya, Ice-cream, Carrot, Litchi, Penguin',
          'Join dots & colour: Square, Rectangle, Mango, Cat', 'Paste paper pieces: Boat, Flower'
        ]
      }
    }
  },

  // ---- KG (from 20190930120922_Class_-_K_G_-_I.pdf — KG-II syllabus pending) ----
  kg: {
    midTerm: {
      bangla: {
        topics: [
          'স্বরবর্ণ পরিচয় (পৃ ৫,৬), ব্যঞ্জনবর্ণ পরিচয় (পৃ ১৪–১৭)',
          'কারচিহ্ন ছাড়া শব্দ গঠন, স্বরচিহ্ন ও তার ব্যবহার',
          'পাখি ও ফলের নাম', 'শব্দ গঠন (অ–ঔ, ক–ঙ)',
          'ছড়া: মামার বাড়ি, আতা গাছে তোতা পাখি, আমাদের ছোট নদী, খোকন খোকন ডাক পাড়ি, আমার পণ, খুকি ও কাঠবিড়ালি, আয় আয় চাঁদ মামা, চাঁদ উঠেছে'
        ]
      },
      english: {
        topics: [
          'Use of a / an, Circle the right word', 'Use of I am / You are, This / That',
          'Alphabet handwriting practice (A–Z)',
          'Rhymes: Cobbler Cobbler, One Two Buckle My Shoe, Teddy Bear Teddy Bear, Red Bird Blue Bird, Hickety Pickety, Ding Dong Bell, My Jack in the Box, Thank You Dear God, Rain on the Green Grass',
          'Word making (A–M)'
        ]
      },
      mathematics: {
        topics: [
          'Numbers 1–70 (after / before / between / missing)', 'Smaller & greater number',
          'Number in words (1–17)', 'Put the sign (>, <, =)', 'Times table 0, 1, 2', 'Counting 1–70'
        ]
      },
      science: {
        topics: ['About family', 'Classroom objects', 'Flowers', 'Pet animals', 'Body parts', 'Day and Night', 'Meal Time', 'Birds', 'Fruits, Date with Day']
      },
      drawing: {
        topics: [
          'Colour: Elephant, Candle, Frog, Chick', 'Drawing: Boat, Ant, House',
          'Join dots & colour: Train, Jackfruit, Toy', 'Paste paper pieces: Papaya, Tomato'
        ]
      }
    },
    finalTerm: {
      bangla: {
        topics: [
          'স্বরচিহ্ন যোগে শব্দ গঠন (ড – হ)', 'রঙের নাম ও সাতদিনের নাম',
          'ছড়া: আমাদের গ্রাম, সবুর করো, ঘুম পাড়ানির গান, প্রার্থনা, প্রভাতী, আমি হব, ছুটি, কানা বগীর ছা',
          'শব্দ গঠন (জ–হ)'
        ]
      },
      english: {
        topics: [
          'Use of He / She, And, My / Your, His / Her', 'Answer to the questions',
          "Colour's name, Picture dictionary", '12 months name',
          'Rhymes: Tooth-Brush, Chubby Cheeks, Thirty Days Have September, Bits of Paper, I Sent a Letter to My Mother, Little Jack Horner, The Cuckoo, Peter Peter Pumpkin-Eater',
          'Word making (N–Z)'
        ]
      },
      mathematics: {
        topics: [
          'Numbers 1–100 (arrange, ascending / descending, missing)', 'Addition (horizontal & vertical)',
          'Reverse number 40–1', "Shapes' name", 'Time', 'Times table 3, 4, 5',
          'Number in words (1–30)', 'Odd number (1–100)'
        ]
      },
      science: {
        topics: ['Vegetables', 'Body parts', 'Rainbow & colours', 'Animals and their babies', 'Fish', 'Wild animals', 'Six seasons', 'Weather']
      },
      drawing: {
        topics: [
          'Colour: Rocket, Helicopter, Pitcher, Snail, Clown, Doll face', 'Drawing: Car, Bee, Butterfly, Flower',
          'Join dots & colour: Penguin, Horn, Bucket', 'Paste paper pieces: Mango, Brinjal'
        ]
      }
    }
  },

  // ---- Class 1 (from 20200216090202_Class_-_I.pdf) ----
  class1: {
    midTerm: {
      bangla: {
        topics: [
          'পাঠ ৬-১০: স্বরবর্ণ ও কারচিহ্ন দিয়ে শব্দ পড়া (পৃ ৬-১২)',
          'পাঠ ১১-১৫: ক থেকে ঞ পর্যন্ত ব্যঞ্জনবর্ণের সহজ শব্দ (পৃ ১৩-১৯)',
          'পাঠ ১৬-২০: ট থেকে ন পর্যন্ত ব্যঞ্জনবর্ণের সহজ শব্দ (পৃ ২০-২৭)',
          'পাঠ ২১-২৫: প থেকে চন্দ্রবিন্দু পর্যন্ত ব্যঞ্জনবর্ণের রূপ (পৃ ২৮-৩৫)',
          'পাঠ ২৬-২৭: দুই ও তিন বর্ণের সরল শব্দ গঠন (পৃ ৩৬-৪২)',
          'পাঠ ২৮-২৯: ছোট ছোট বাক্য পড়া ও বোঝা (পৃ ৪৩-৪৯)',
          'বানান শিখন (পৃ ৫০)',
          'বাক্যরূপ: বর্ণমালা দিয়ে সুন্দর শব্দ সাজানো',
          'বাক্যরূপ: যুক্তবর্ণ ও সহজ বাক্য গঠন',
          'বাক্যরূপ: বিপরীত শব্দ শেখা ও বাক্যে ব্যবহার',
          'বাক্যরূপ: প্রতিশব্দ (একই অর্থের শব্দ)',
          'বাক্যরূপ: এক কথায় প্রকাশ',
          'অনুচ্ছেদ: আমার মা',
          'অনুচ্ছেদ: জাতীয় ফুল শাপলা'
        ]
      },
      english: {
        topics: [
          'English for Today: Unit 1–15', 'Bichitra Grammar: selected chapters',
          'Paragraph writing: Our Country, My Family', 'A Magic Place: ch 1–14'
        ]
      },
      elementaryMathematics: {
        topics: [
          'Elementary Mathematics — selected pages (numbers, comparisons)',
          'Mental Mathematics (selected)', 'Even – odd numbers (1–50)', 'Times table (1–9)',
          'Write in words (1–50)', 'Geometry: Point, Line, Angle, Circle, Triangle'
        ]
      },
      islam: {
        topics: [
          'Chapter I, Unit 1: Allah the Almighty',
          'Chapter II, Unit 1: The Prophet Hazrat Muhammad (S.A.W)',
          'Chapter II, Unit 2: The Story of Hazrat Adam and Hawwa (A.S)',
          'Chapter II, Unit 3: Honesty (a story based on Hadith)'
        ]
      },
      socialStudies: {
        topics: [
          'Lesson 1: My Personal Diary', 'Lesson 2: Our Family', 'Lesson 3: Duties in a Family',
          'Lesson 4: Home Sweet Home', 'Lesson 5: Our Environment', 'Lesson 6: Our Neighbor',
          'Lesson 7: Our School', 'Lesson 8: Bangladesh — Our Motherland', 'Lesson 9: Food', 'Lesson 10: Market',
          'General Knowledge: Chapter 2, 12, 13, 14, 15'
        ]
      },
      primaryScience: {
        topics: [
          'Chapter 1: You and Your Surroundings', 'Chapter 2: Living and Non-living Things',
          'Chapter 3: The World of Plants', 'Chapter 5: The World of Animals',
          'Chapter 7: Knowing Your Body', 'Chapter 11: Air', 'Chapter 13: Weather'
        ]
      },
      computer: {
        topics: ['Chapter 1: Computer, a Smart Machine', 'Chapter 2: Parts of a Computer', 'Chapter 3: Uses of a Computer', 'Chapter 4: About the Keyboard']
      },
      moralEducation: {
        topics: [
          'Look for Values — Ch 1: Ramdin and Rukmi, Ch 2: A Good Friend',
          'More Values — Ch 1: Grandma at Prayer, Ch 2: Time to Pray, Ch 3: Ticket for All, Ch 4: Doing Things for My Family, Ch 5: A Boy and a Parrot'
        ]
      },
      drawing: {
        topics: ['Draw only: Balloon, Kite, Water Lily, Hen (any two)', 'Draw and colour: Design Jar, Village Scenery (any one)']
      }
    },
    finalTerm: {
      bangla: {
        topics: [
          'পাঠ ৩০–৫৬ (পৃ ৪২–৭২), বানান শিখন ১–১০০',
          'ব্যাকরণ: শব্দ, বাক্য, পদ, লিঙ্গ, বিপরীত শব্দ, প্রতিশব্দ, লিঙ্গ পরিবর্তন, এক কথায় প্রকাশ',
          'অনুচ্ছেদ: জাতীয় পাখি দোয়েল, আমাদের বিদ্যালয়'
        ]
      },
      english: {
        topics: [
          'English for Today: Unit 16–30', 'Bichitra Grammar: selected chapters',
          'Paragraph writing: Our Classroom, Our Victory Day', 'A Magic Place: ch 15–25'
        ]
      },
      elementaryMathematics: {
        topics: [
          'Elementary Mathematics — selected pages (up to 100)', 'Mental Mathematics (selected)',
          'Even – odd numbers (51–100)', 'Times table (10–14)', 'Write in words (51–100)',
          'Geometry: Quadrilateral, Rectangle, Triangle, Circle, Angle'
        ]
      },
      islam: {
        topics: [
          'Chapter III, Unit 1: Message of Allah', 'Chapter III, Unit 2: Quranic Surahs with English Translations',
          'Chapter IV, Unit 1: Custom and Traditions (Islamic Festivals)', 'Chapter IV, Unit 2: Mosques'
        ]
      },
      socialStudies: {
        topics: [
          'Lesson 11: Religion', 'Lesson 12: Festivals', 'Lesson 13: Our National Festivals',
          'Lesson 14: The Earth — Our Home', 'Lesson 15: The Caveman', 'Lesson 16: Mountains',
          'Lesson 17: Polite Words', 'Lesson 18: The Oceans', 'Lesson 19: Day and Night', 'Lesson 20: Democracy — Choice of Majority',
          'General Knowledge: Chapter 11, 16, 17, 18, 19'
        ]
      },
      primaryScience: {
        topics: [
          'Chapter 4: Plants as Food', 'Chapter 6: Food and Shelter for Animals', 'Chapter 8: Food for Health',
          'Chapter 9: Housing and Clothing', 'Chapter 10: Keeping Safe and Healthy', 'Chapter 12: Water',
          'Chapter 14: The Sun, Moon and Stars'
        ]
      },
      computer: {
        topics: ['Chapter 5: Using a Computer Mouse', "Chapter 6: Let's Paint", 'Chapter 7: Fun with Tux Paint', 'Chapter 8: Using a Computer — the Right Way']
      },
      moralEducation: {
        topics: [
          'Look for Values — Ch 3: A Greedy Neighbor, Ch 4: The Faithful Dog',
          'More Values — Ch 7: Growing Flowers, Ch 8: Time to Pray, Ch 10: Polite Words, Ch 11: Well Done Class-1'
        ]
      },
      drawing: {
        topics: ['Draw only: Bird, Brinjal, Mushroom, Rupchanda (any two)', 'Draw and colour: Tortoise, Natural Scenery (any one)']
      }
    }
  }
};

/* Bangla display labels for CURRICULUM subject keys — used by the parent
   dashboard's syllabus browser to render a friendly subject name instead
   of the raw camelCase key. Add an entry here whenever a new subject key
   is introduced in CURRICULUM. */
const SUBJECT_LABELS = {
  bangla: 'বাংলা', english: 'ইংরেজি', mathematics: 'গণিত',
  elementaryMathematics: 'গণিত (Elementary Mathematics)',
  science: 'বিজ্ঞান', primaryScience: 'বিজ্ঞান (Primary Science)',
  drawing: 'অঙ্কন', islam: 'ইসলাম শিক্ষা', socialStudies: 'সমাজ ও সাধারণ জ্ঞান',
  computer: 'কম্পিউটার', moralEducation: 'নৈতিক শিক্ষা'
};

/* Term labels — same two-term (mid/final) shape is used across every
   class, even though some school documents call them "Half-Yearly" /
   "Annual Examination" instead of "Mid Term" / "Final Term". */
const CURRICULUM_TERM_LABELS = {
  midTerm: { bn: 'মিড টার্ম / অর্ধবার্ষিক', en: 'Mid Term / Half-Yearly' },
  finalTerm: { bn: 'ফাইনাল টার্ম / বার্ষিক', en: 'Final Term / Annual' }
};

/* ---------- AUDIO_MAP — natural-voice audio lookup (Priority 1) ----------
   Populate this once you've generated/recorded natural audio for a piece
   of content. Key = a stable content key (rhyme `key`, or `letter:অ`,
   `word:মা`, `animal:সিংহ`, etc — pick one consistent scheme as you add
   files), value = the hosted URL. index.html's speakSmart()/playRhyme()
   check this FIRST and only fall back to robotic speechSynthesis when a
   key is missing — so filling this in gradually, rhyme by rhyme,
   immediately improves that content with zero code changes.

   Files are hosted in Cloudflare R2 (see r2-worker/SETUP.md): push a file
   with `wrangler r2 object put khukir-bagan-assets/audio/rhymes/humpty.mp3
   --file ./humpty.mp3` then point the URL at your deployed Worker
   (or custom domain). Empty for now: no audio has been generated/hosted
   yet, this is just the wiring. */
const AUDIO_MAP = {
  // humpty: 'https://khukir-bagan-assets.YOUR-SUBDOMAIN.workers.dev/audio/rhymes/humpty.mp3',
};

/* ---------- Rhymes (with word-by-word highlight voice-over) ----------
   NOTE for content growth: this list is currently English-only (Humpty
   Dumpty, Twinkle Twinkle, Johnny Johnny, Rain Rain). Per the product
   strategy, add Bangla chora/rhymes here too (e.g. আয় আয় চাঁদ মামা,
   খোকা ঘুমাল) so the module actually reflects a Bangla+English syllabus,
   not English-only content under a Bangla-titled module. */
const rhymesList = [
  {
    key:'humpty', emoji:'🥚', titleKey:'rhyme_humpty',
    text:"Humpty Dumpty sat on a wall,\nHumpty Dumpty had a great fall.\nAll the king's horses and all the king's men,\nCouldn't put Humpty together again."
  },
  {
    key:'twinkle', emoji:'⭐', titleKey:'rhyme_twinkle',
    text:"Twinkle, twinkle, little star,\nHow I wonder what you are!\nUp above the world so high,\nLike a diamond in the sky.\nTwinkle, twinkle, little star,\nHow I wonder what you are!"
  },
  {
    key:'johnny', emoji:'🧒', titleKey:'rhyme_johnny',
    text:"Johnny, Johnny! Yes, Papa?\nEating sugar? No, Papa.\nTelling lies? No, Papa.\nOpen your mouth! Ha ha ha!"
  },
  {
    key:'rain', emoji:'🌧️', titleKey:'rhyme_rain',
    text:"Rain, rain, go away,\nCome again another day.\nLittle Johnny wants to play,\nRain, rain, go away."
  },
  /* ---- Added this session: traditional Mother Goose rhymes, matched
     against titles CURRICULUM already names for playgroup/nursery/kg
     (Baa Baa Black Sheep, Jack & Jill, One Two Buckle My Shoe, Pussy Cat,
     Ten Little Fingers, Cobbler Cobbler, Teddy Bear Teddy Bear, Ding Dong
     Bell, Thirty Days Have September, Little Jack Horner, Peter Peter
     Pumpkin-Eater, Bye Baby Bunting, Engine Engine Number Nine, Are You
     Sleeping). These are all public-domain, centuries-old, anonymous
     nursery rhymes — same category as Twinkle Twinkle / Humpty Dumpty
     already above, standard canonical wording. */
  {
    key:'baabaa', emoji:'🐑', titleKey:'rhyme_baabaa',
    text:"Baa, baa, black sheep, have you any wool?\nYes sir, yes sir, three bags full;\nOne for the master, one for the dame,\nAnd one for the little boy who lives down the lane."
  },
  {
    key:'jackjill', emoji:'⛰️', titleKey:'rhyme_jackjill',
    text:"Jack and Jill went up the hill,\nTo fetch a pail of water;\nJack fell down and broke his crown,\nAnd Jill came tumbling after."
  },
  {
    key:'onetwo', emoji:'👞', titleKey:'rhyme_onetwo',
    text:"One, two, buckle my shoe;\nThree, four, knock at the door;\nFive, six, pick up sticks;\nSeven, eight, lay them straight;\nNine, ten, a big fat hen."
  },
  {
    key:'pussycat', emoji:'🐈', titleKey:'rhyme_pussycat',
    text:"Pussy cat, pussy cat, where have you been?\nI've been to London to visit the Queen.\nPussy cat, pussy cat, what did you there?\nI frightened a little mouse under her chair."
  },
  {
    key:'tenfingers', emoji:'✋', titleKey:'rhyme_tenfingers',
    text:"I have ten little fingers, and they all belong to me,\nI can make them do things, would you like to see?\nI can shut them up tight, I can open them wide,\nI can put them together, I can make them all hide."
  },
  {
    key:'cobbler', emoji:'👟', titleKey:'rhyme_cobbler',
    text:"Cobbler, cobbler, mend my shoe,\nGet it done by half past two;\nHalf past two is much too late,\nGet it done by half past eight."
  },
  {
    key:'teddybear', emoji:'🧸', titleKey:'rhyme_teddybear',
    text:"Teddy bear, teddy bear, turn around;\nTeddy bear, teddy bear, touch the ground;\nTeddy bear, teddy bear, switch off the light;\nTeddy bear, teddy bear, say goodnight."
  },
  {
    key:'dingdong', emoji:'🔔', titleKey:'rhyme_dingdong',
    text:"Ding, dong, bell, pussy's in the well.\nWho put her in? Little Johnny Green.\nWho pulled her out? Little Johnny Stout.\nWhat a naughty boy was that, to try to drown poor pussy cat."
  },
  {
    key:'thirtydays', emoji:'📅', titleKey:'rhyme_thirtydays',
    text:"Thirty days have September, April, June, and November;\nAll the rest have thirty-one,\nExcept February alone,\nWhich has twenty-eight days clear,\nAnd twenty-nine in each leap year."
  },
  {
    key:'jackhorner', emoji:'🥧', titleKey:'rhyme_jackhorner',
    text:"Little Jack Horner sat in a corner,\nEating his Christmas pie;\nHe put in his thumb, and pulled out a plum,\nAnd said, What a good boy am I!"
  },
  {
    key:'peterpumpkin', emoji:'🎃', titleKey:'rhyme_peterpumpkin',
    text:"Peter, Peter, pumpkin eater,\nHad a wife and couldn't keep her;\nHe put her in a pumpkin shell,\nAnd there he kept her very well."
  },
  {
    key:'byebaby', emoji:'👶', titleKey:'rhyme_byebaby',
    text:"Bye, baby bunting, Daddy's gone a-hunting,\nGone to get a rabbit skin\nTo wrap the baby bunting in."
  },
  {
    key:'enginenine', emoji:'🚂', titleKey:'rhyme_enginenine',
    text:"Engine, engine, number nine,\nGoing down Chicago line;\nIf the train falls off the track,\nDo you want your money back?"
  },
  {
    key:'aresleeping', emoji:'🔔', titleKey:'rhyme_aresleeping',
    text:"Are you sleeping, are you sleeping, Brother John, Brother John?\nMorning bells are ringing, morning bells are ringing,\nDing, ding, dong, ding, ding, dong."
  },
  /* ---- Bangla chora — only added where the exact traditional/anonymous
     folk wording could be verified (web-checked, marked "প্রচলিত"/folk in
     multiple independent sources) rather than typed from uncertain memory,
     since getting a children's rhyme wrong is worse than leaving it out.
     The remaining ~35 chora titles CURRICULUM names (আতা গাছে তোতা পাখি,
     খোকন খোকন, তাঁতির বাড়ি, নোটন নোটন পায়রা, etc.) still need to be typed
     in from your own school's textbook — that's the most reliable source
     and avoids any risk of a wrong regional variant. See STATUS doc. */
  {
    key:'hattima', emoji:'🐣', titleKey:'rhyme_hattima',
    text:"হাট্টিমা টিম্ টিম্,\nতারা মাঠে পাড়ে ডিম্!\nতাদের খাড়া দুটো শিং,\nতারা হাট্টিমা টিম্ টিম্।"
  },
  {
    key:'chadmama', emoji:'🌙', titleKey:'rhyme_chadmama',
    text:"আয় আয় চাঁদ মামা টিপ দিয়ে যা\nচাঁদের কপালে চাঁদ টিপ দিয়ে যা।\nধান ভানলে কুঁড়ো দেব\nমাছ কাটলে মুড়ো দেব\nকাল গাইয়ের দুধ দেব\nদুধ খাবার বাটি দেব\nচাঁদের কপালে চাঁদ টিপ দিয়ে যা।"
  }
];

/* ==========================================================================
   LEVEL + TERM CONTENT NARROWING
   ==========================================================================
   Everything below reads CURRICULUM (above) and works out how far a child
   at a given level+term "should" be into letters/numbers/tables — so each
   activity module can show a syllabus-sized slice instead of always the
   full list. This is deliberately generic (driven by the CURRICULUM data,
   not hardcoded per module) EXCEPT for Bangla letters, where the syllabus
   text mixes vowel + consonant ranges too inconsistently across levels for
   safe automatic parsing — that one small table is hand-checked instead
   (see BANGLA_LETTER_CEILING below, with the syllabus line it comes from).
   Nothing here ever throws if CURRICULUM is missing data for a level/term —
   every function falls back to "show everything" so a module never breaks
   or empties out just because a syllabus cell hasn't been filled in yet.
   ========================================================================== */

// Flattens every string/array leaf under the given subject key(s) of
// CURRICULUM[level][term] into one text blob, each value prefixed with its
// own key so range-finders can stay anchored to the right field
// (e.g. "number: 1–10 ..." vs "joiningNumbers: 1–20 ...").
function curriculumTextBlob(level, term, subjectKeys){
  const termData = CURRICULUM[level] && CURRICULUM[level][term];
  if(!termData) return '';
  const parts = [];
  function walk(key, val){
    if(val == null) return;
    if(Array.isArray(val)){ parts.push(key + ': ' + val.join(', ')); return; }
    if(typeof val === 'object'){ Object.entries(val).forEach(([k,v]) => walk(k,v)); return; }
    parts.push(key + ': ' + val);
  }
  subjectKeys.forEach(sk => { if(termData[sk]) walk(sk, termData[sk]); });
  return parts.join(' | ');
}

// Numbers: syllabus always states these as "Number(s): X–Y", cumulative
// per term (e.g. playgroup midTerm 1–10, finalTerm 11–20) — the module
// itself shows 1..max so learning stays cumulative rather than resetting.
function curriculumNumberCeiling(level, term){
  const blob = curriculumTextBlob(level, term, ['mathematics','elementaryMathematics']);
  const m = blob.match(/number\S*:?\s*\(?(\d+)\s*[–-]\s*(\d+)/i);
  return m ? Number(m[2]) : null;
}

// Times tables mentioned for the term, e.g. "Times table 0, 1, 2" or
// "Times table (10–14)". Returns an array of table numbers, or null.
function curriculumTimesTables(level, term){
  const blob = curriculumTextBlob(level, term, ['mathematics','elementaryMathematics']);
  const m = blob.match(/times\s*table\S*:?\s*\(?([\d,\s–-]+)\)?/i);
  if(!m) return null;
  const chunk = m[1];
  const range = chunk.match(/(\d+)\s*[–-]\s*(\d+)/);
  if(range){
    const out = [];
    for(let i=Number(range[1]); i<=Number(range[2]); i++) out.push(i);
    return out;
  }
  const list = chunk.split(',').map(s=>parseInt(s.trim(),10)).filter(n=>!isNaN(n));
  return list.length ? list : null;
}

// English (Latin) letters — only matches single-letter en-dash ranges like
// "A–L" / "N–Z" so it doesn't mistake things like "Tooth-Brush" (ordinary
// hyphen, not en-dash) for a range.
function curriculumEnglishLetterCeiling(level, term){
  const blob = curriculumTextBlob(level, term, ['english']);
  const re = /(?<![A-Za-z])([A-Za-z])\s*–\s*([A-Za-z])(?![A-Za-z])/g;
  // Several fields repeat the range at different strictness (e.g. the full
  // "letters" range vs a narrower "written" subset) — take the most
  // generous (max index) as the recognition ceiling for this term.
  let m, best = -1;
  while((m = re.exec(blob))){
    const idx = englishLetters.findIndex(l => l[0] === m[2].toUpperCase());
    if(idx > best) best = idx;
  }
  return best >= 0 ? best : null;
}

// Bangla letters — hand-checked cumulative ceiling (index into the combined
// `letters` array: vowels 0–10, then consonants 11–49) per level/term,
// worked out directly from the CURRICULUM.*.bangla text above. Update this
// alongside CURRICULUM if the underlying syllabus text changes.
const BANGLA_LETTER_CEILING = {
  // shorborno অ–ঔ (oral/matching only) + borno অ–ঈ (written) → vowels only
  playgroup: { midTerm: 10,  finalTerm: 35 }, // finalTerm: vowels done + বেব্যঞ্জনবর্ণ ক–ম
  // "স্বরবর্ণ পরিচয় (অ–ঔ)" + "ব্যঞ্জনবর্ণ পরিচয় (ক–ত)"
  nursery:   { midTerm: 26,  finalTerm: 49 }, // finalTerm: "ব্যঞ্জনবর্ণ পরিচয় (ড–হ)" → all done
  // "শব্দ গঠন (অ–ঔ, ক–ঙ)"
  kg:        { midTerm: 15,  finalTerm: 49 }, // finalTerm: "শব্দ গঠন (জ–হ)" → treat as full alphabet by year end
  class1:    { midTerm: 49,  finalTerm: 49 }  // full alphabet already known coming into Class 1
};
function curriculumBanglaLetterCeiling(level, term){
  const byLevel = BANGLA_LETTER_CEILING[level];
  if(!byLevel) return null;
  return (byLevel[term] != null) ? byLevel[term] : null;
}

// Shared by animal/word filtering below: the science (or primaryScience,
// for class1) topic list as one lowercase blob, so simple substring checks
// like "pet animal" / "fruit" can decide what's relevant this term.
function curriculumScienceTopicsBlob(level, term){
  const termData = CURRICULUM[level] && CURRICULUM[level][term];
  if(!termData) return '';
  const topics = (termData.science && termData.science.topics) || (termData.primaryScience && termData.primaryScience.topics) || [];
  return topics.join(' | ').toLowerCase();
}

// Single entry point activity modules call — always returns usable numbers
// (falling back to "show everything") so a missing/incomplete CURRICULUM
// entry never breaks a module.
function getSyllabusRanges(level, term){
  const numCeil = curriculumNumberCeiling(level, term);
  const banCeil = curriculumBanglaLetterCeiling(level, term);
  const engCeil = curriculumEnglishLetterCeiling(level, term);
  const tables = curriculumTimesTables(level, term);
  return {
    numberMax: numCeil != null ? numCeil : null,
    banglaLetterCeiling: banCeil != null ? banCeil : (letters.length - 1),
    englishLetterCeiling: engCeil != null ? engCeil : (englishLetters.length - 1),
    tables: tables && tables.length ? tables : null
  };
}

// Rhymes/chora — returns the list of rhyme/chora titles CURRICULUM names
// for this level+term (English "rhymes" + Bangla "chora"), so buildRhymes
// can show curriculum-matched rhymes first with a small syllabus badge.
function curriculumRhymeTitles(level, term){
  const termData = CURRICULUM[level] && CURRICULUM[level][term];
  if(!termData) return [];
  const out = [];
  if(termData.english && Array.isArray(termData.english.rhymes)) out.push(...termData.english.rhymes);
  if(termData.bangla && Array.isArray(termData.bangla.chora)) out.push(...termData.bangla.chora);
  return out;
}
