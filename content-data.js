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

const wordList = [
  {word:'মা', syll:['মা'], emoji:'👩'},
  {word:'বাবা', syll:['বা','বা'], emoji:'👨'},
  {word:'আম', syll:['আ','ম'], emoji:'🥭'},
  {word:'জল', syll:['জ','ল'], emoji:'💧'},
  {word:'ফল', syll:['ফ','ল'], emoji:'🍎'},
  {word:'কলা', syll:['ক','লা'], emoji:'🍌'},
  {word:'মাছ', syll:['মা','ছ'], emoji:'🐟'},
  {word:'হাত', syll:['হা','ত'], emoji:'✋'},
  {word:'বই', syll:['ব','ই'], emoji:'📚'},
  {word:'টমেটো', syll:['ট','মে','টো'], emoji:'🍅'}
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

const animalList = [
  ['🦁','সিংহ','গর্জন করে'],['🐄','গরু','হাম্বা ডাকে'],['🐘','হাতি','বড় শুঁড় আছে'],
  ['🐦','পাখি','কিচিরমিচির করে'],['🐸','ব্যাঙ','ঘ্যাঙঘ্যাঙ ডাকে'],['🐕','কুকুর','ঘেউঘেউ করে'],
  ['🐱','বিড়াল','মিঁয়াও করে'],['🐝','মৌমাছি','ভনভন করে']
];

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
  }
  // nursery: { midTerm:{...}, finalTerm:{...} },
  // kg:      { midTerm:{...}, finalTerm:{...} },
  // class1:  { midTerm:{...}, finalTerm:{...} }
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
  }
];
