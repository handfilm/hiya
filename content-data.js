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
          'পাঠ ১–২৯ (পৃ ১–৪১), বানান শিখন ১–৫০',
          'ব্যাকরণ: বর্ণ, বর্ণমালা, ভাষা, বিপরীত শব্দ, প্রতিশব্দ, এক কথায় প্রকাশ',
          'অনুচ্ছেদ: আমার মা, জাতীয় ফুল শাপলা'
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
   of content (see hand-off doc, "Option A — pre-generate audio once, host
   as static files"). Key = a stable content key (rhyme `key`, or
   `letter:অ`, `word:মা`, `animal:সিংহ`, etc — pick one consistent scheme
   as you add files), value = the hosted URL (GitHub Pages static file or
   Drive direct-link). index.html's speakSmart()/playRhyme() check this
   FIRST and only fall back to robotic speechSynthesis when a key is
   missing — so filling this in gradually, rhyme by rhyme, immediately
   improves that content with zero code changes. Empty for now: no audio
   has been generated/hosted yet, this is just the wiring. */
const AUDIO_MAP = {
  // 'humpty': 'https://yourdomain.com/audio/rhymes/humpty.mp3',
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
