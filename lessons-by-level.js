// ============================================================================
// Lessons Catalog By Grade Level (Playgroup, Nursery, KG, Class 1)
// Provides structured, interactive lessons for all subjects per grade.
// ============================================================================

const LESSON_CONTENT_BY_LEVEL = {
  // --------------------------------------------------------------------------
  // 👶 PLAYGROUP
  // --------------------------------------------------------------------------
  playgroup: {
    bangla: [
      {
        title: "পাঠ ১: স্বরবর্ণের গান — অ থেকে ঈ",
        term: "midTerm",
        learningObjective: "অ, আ, ই, ঈ বর্ণগুলো চেনা ও উদাহরণ শব্দ বলা।",
        warmUp: "অ-তে অলি উড়ে ফুলে ফুলে, আ-তে আম খাই পেট পুরে!",
        mainContent: [
          { heading: "অ ও আ চেনা", text: "অ-তে অলি, অজগর। আ-তে আম, আতা। ছবি দেখে বর্ণ বলো।" },
          { heading: "ই ও ঈ চেনা", text: "ই-তে ইঁদুর, ইলিশ। ঈ-তে ঈগল, ঈদ। সুন্দর করে মুখে উচ্চারণ করো।" }
        ],
        keyVocabulary: [
          { word: "অলি", meaning: "ছোট মৌমাছি" },
          { word: "আম", meaning: "মিষ্টি সুস্বাদু ফল" },
          { word: "ইলিশ", meaning: "আমাদের জাতীয় মাছ" }
        ],
        funFact: "ইলিশ মাছ নদীর রূপালি রানি হিসেবে পরিচিত!",
        practiceQuestions: [
          { question: "অ-তে কী হয়?", options: ["অলি", "কলম", "বই", "মাছ"], correctAnswer: "অলি", explanation: "অ-তে অলি ও অজগর হয়।" },
          { question: "আমাদের জাতীয় মাছের নাম কী?", options: ["ইলিশ", "রুই", "কাতলা", "শিং"], correctAnswer: "ইলিশ", explanation: "ই-তে ইলিশ আমাদের জাতীয় মাছ।" }
        ]
      },
      {
        title: "পাঠ ২: স্বরবর্ণের রূপ — উ থেকে ঔ",
        term: "midTerm",
        learningObjective: "উ, ঊ, ঋ, এ, ঐ, ও, ঔ বর্ণগুলোর উচ্চারণ ও শব্দ শেখা।",
        warmUp: "উট চলে মরুর দেশে, একতারা বাজে মিষ্টি সুরে!",
        mainContent: [
          { heading: "উ ও ঊ", text: "উ-তে উট চলে মরুর দেশে। ঊ-তে ঊষা হাসে মিষ্টি বেশে।" },
          { heading: "ঋ, এ, ঐ, ও, ঔ", text: "ঋ-তে ঋতু। এ-তে একতারা। ঐ-তে ঐরাবত (হাতি)। ও-তে ওল। ঔ-তে ঔষধ।" }
        ],
        keyVocabulary: [
          { word: "ঊষা", meaning: "ভোরের সোনালি আলো" },
          { word: "ঐরাবত", meaning: "বড় হাতি" },
          { word: "ঔষধ", meaning: "সুস্থ হওয়ার দাওয়াই" }
        ],
        funFact: "ঐরাবত হলো হাতির আরেক নাম!",
        practiceQuestions: [
          { question: "একতারা কোন বর্ণ দিয়ে শুরু হয়?", options: ["এ", "ও", "অ", "ই"], correctAnswer: "এ", explanation: "এ-তে একতারা বাজে।" }
        ]
      },
      {
        title: "পাঠ ৩: স্বরবর্ণের মজার খেলা ও মিলকরণ",
        term: "midTerm",
        learningObjective: "ছবির সাথে সঠিক স্বরবর্ণ মিলিয়ে বলা।",
        mainContent: [
          { heading: "খালিঘর পূরণ", text: "অ-এর পরে আ, ই-এর পরে ঈ, উ-এর পরে ঊ।" },
          { heading: "ছবি মিলানো", text: "আমের ছবি দেখলে আ বলবে, ইঁদুরের ছবি দেখলে ই বলবে।" }
        ],
        keyVocabulary: [{ word: "বর্ণমালা", meaning: "লেখার সুন্দর অক্ষর" }],
        funFact: "বাংলা ভাষায় মোট ১১টি স্বরবর্ণ আছে।",
        practiceQuestions: [
          { question: "অ-এর পরের বর্ণ কোনটি?", options: ["আ", "ই", "ঈ", "উ"], correctAnswer: "আ", explanation: "অ-এর ঠিক পরেই আ আসে।" }
        ]
      },
      {
        title: "পাঠ ৪: মজার ছড়া — ঝিলের জলে ও খোকন খোকন",
        term: "midTerm",
        learningObjective: "তাল মিলিয়ে মিষ্টি সুরে বাংলা ছড়া আবৃত্তি করা।",
        mainContent: [
          { heading: "ঝিলের জলে পদ্ম ভাসে", text: "ঝিলের জলে পদ্ম ভাসে, ডালিম গাছে মৌ। খোকন সোনা হাসে দেখো, মিষ্টি মুখের বউ।" },
          { heading: "খোকন খোকন ডাক পাড়ি", text: "খোকন খোকন ডাক পাড়ি, খোকন মোদের কার? আয়রে খোকন ঘরে আয়, দুধ মেখে ভাত খা।" }
        ],
        keyVocabulary: [{ word: "পদ্ম", meaning: "পানির সুন্দর ফুল" }],
        funFact: "ছড়া শুনলে ছোটদের মন আনন্দে ভরে ওঠে!",
        practiceQuestions: [
          { question: "খোকন সোনাকে কী দিয়ে ভাত খেতে বলা হয়েছে?", options: ["দুধ মেখে", "ঘি দিয়ে", "গুড় দিয়ে", "মধু দিয়ে"], correctAnswer: "দুধ মেখে", explanation: "ছড়াতে বলা হয়েছে: 'দুধ মেখে ভাত খা'।" }
        ]
      },
      {
        title: "পাঠ ৫: ব্যঞ্জনবর্ণ শুরু — ক থেকে ঙ",
        term: "finalTerm",
        learningObjective: "ক, খ, গ, ঘ, ঙ বর্ণ চেনা ও মুখস্থ বলা।",
        mainContent: [
          { heading: "ক ও খ", text: "ক-তে কলম দিয়ে লিখি। খ-তে খরগোশ ছোটে বনে।" },
          { heading: "গ, ঘ ও ঙ", text: "গ-তে গরু দেয় দুধ। ঘ-তে ঘুড়ি ওড়ে আকাশে। ঙ-তে কোলাব্যাঙ ডাকে বর্ষায়।" }
        ],
        keyVocabulary: [
          { word: "কলম", meaning: "লেখার সুন্দর কাঠি" },
          { word: "খরগোশ", meaning: "নরম মিষ্টি কানওয়ালা প্রাণী" }
        ],
        funFact: "খরগোশ গাজর খেতে খুব ভালোবাসে!",
        practiceQuestions: [
          { question: "ক-তে কী দিয়ে আমরা লিখি?", options: ["কলম", "চশমা", "বই", "ছাতা"], correctAnswer: "কলম", explanation: "ক-তে কলম দিয়ে লিখি।" }
        ]
      },
      {
        title: "পাঠ ৬: ব্যঞ্জনবর্ণের সহজ শব্দ — চ থেকে ঞ",
        term: "finalTerm",
        learningObjective: "চ, ছ, জ, ঝ, ঞ বর্ণ চেনা ও শব্দ শেখা।",
        mainContent: [
          { heading: "চ ও ছ", text: "চ-তে চশমা পরি চোখে। ছ-তে ছাতা মাথায় বৃষ্টিতে চলি।" },
          { heading: "জ, ঝ ও ঞ", text: "জ-তে জাহাজ ভাসে সাগরে। ঝ-তে ঝুড়ি ভরা ফল। ঞ-তে মিঞা ভাই হাসে।" }
        ],
        keyVocabulary: [{ word: "জাহাজ", meaning: "সমুদ্রে চলার বড় জলযান" }],
        funFact: "জাহাজ এত বড় হয়েও পানিতে ভাসে!",
        practiceQuestions: [
          { question: "বৃষ্টি হলে আমরা মাথায় কী দিই?", options: ["ছাতা", "টুপি", "চশমা", "ঝুড়ি"], correctAnswer: "ছাতা", explanation: "ছ-তে ছাতা মাথায় দিই।" }
        ]
      },
      {
        title: "পাঠ ৭: ব্যঞ্জনবর্ণের রূপ — ট থেকে ম",
        term: "finalTerm",
        learningObjective: "ট, ঠ, ড, ঢ, প, ব, ম চেনা।",
        mainContent: [
          { heading: "ট ও ঠ", text: "ট-তে টিয়াপাখি লাল ঠোঁট। ঠ-তে ঠাঁই নাই ছোট ঘরে।" },
          { heading: "প, ব ও ম", text: "প-তে পাখি গায় গান। ব-তে বক থাকে বিলে। ম-তে মাছ সাঁতার কাটে।" }
        ],
        keyVocabulary: [{ word: "টিয়া", meaning: "সবুজ রঙের সুন্দর পাখি" }],
        funFact: "টিয়াপাখির ঠোঁট লাল রঙের হয়!",
        practiceQuestions: [
          { question: "মাছ কোথায় সাঁতার কাটে?", options: ["পানিতে", "গাছে", "আকাশে", "মাটিতে"], correctAnswer: "পানিতে", explanation: "ম-তে মাছ পানিতে সাঁতার কাটে।" }
        ]
      },
      {
        title: "পাঠ ৮: মজার ছড়া — ভোর হলো ও কাজের লোক",
        term: "finalTerm",
        learningObjective: "ভোর হলো দোর খোলো ছড়াটি আবৃত্তি করা।",
        mainContent: [
          { heading: "ভোর হলো", text: "ভোর হলো দোর খোলো, খুকুমণি ওঠ রে! ওই ডাকে জুঁই-শাখে, ফুল-খুকি ছোট রে!" }
        ],
        keyVocabulary: [{ word: "দোর", meaning: "দরজা" }],
        funFact: "ভোরে ঘুম থেকে উঠলে শরীর ও মন সুস্থ থাকে।",
        practiceQuestions: [
          { question: "ভোর হলে কী খুলতে বলা হয়েছে?", options: ["দোর (দরজা)", "বই", "ঝুড়ি", "ছাতা"], correctAnswer: "দোর (দরজা)", explanation: "ছড়াতে বলা হয়েছে: 'ভোর হলো দোর খোলো'।" }
        ]
      }
    ],
    english: [
      {
        title: "Lesson 1: Alphabet Fun — Letters A to D",
        term: "midTerm",
        learningObjective: "Recognize uppercase and lowercase letters A, B, C, D with phonics sounds.",
        mainContent: [
          { heading: "Letter A & B", text: "A is for Apple 🍎 (ah-ah-apple). B is for Ball ⚽ (b-b-ball)." },
          { heading: "Letter C & D", text: "C is for Cat 🐱 (c-c-cat). D is for Dog 🐶 (d-d-dog)." }
        ],
        keyVocabulary: [
          { word: "Apple", meaning: "A sweet red round fruit" },
          { word: "Ball", meaning: "A round toy to play with" }
        ],
        funFact: "Apples float in water because 25% of their volume is air!",
        practiceQuestions: [
          { question: "What letter does 'Apple' start with?", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "A is for Apple." }
        ]
      },
      {
        title: "Lesson 2: Alphabet Fun — Letters E to H",
        term: "midTerm",
        learningObjective: "Recognize letters E, F, G, H with words.",
        mainContent: [
          { heading: "Letters E & F", text: "E is for Elephant 🐘. F is for Fish 🐟." },
          { heading: "Letters G & H", text: "G is for Grapes 🍇. H is for Hat 🎩." }
        ],
        keyVocabulary: [{ word: "Elephant", meaning: "A very big animal with a trunk" }],
        funFact: "Elephants can recognize themselves in a mirror!",
        practiceQuestions: [
          { question: "F is for which animal in the water?", options: ["Fish", "Cat", "Dog", "Ant"], correctAnswer: "Fish", explanation: "F is for Fish." }
        ]
      },
      {
        title: "Lesson 3: Alphabet Fun — Letters I to L",
        term: "midTerm",
        learningObjective: "Identify letters I, J, K, L and practice writing.",
        mainContent: [
          { heading: "Letters I & J", text: "I is for Ice cream 🍦. J is for Jug 🥛." },
          { heading: "Letters K & L", text: "K is for Kite 🪁. L is for Lion 🦁." }
        ],
        keyVocabulary: [{ word: "Lion", meaning: "King of the jungle" }],
        funFact: "Lions sleep up to 20 hours a day!",
        practiceQuestions: [
          { question: "K is for what flying toy in the sky?", options: ["Kite", "Car", "Ball", "Jug"], correctAnswer: "Kite", explanation: "K is for Kite flying in the sky." }
        ]
      },
      {
        title: "Lesson 4: Rhyme Time — Twinkle Twinkle & Baa Baa Sheep",
        term: "midTerm",
        learningObjective: "Sing classic nursery rhymes with actions and rhythm.",
        mainContent: [
          { heading: "Twinkle, Twinkle, Little Star", text: "Twinkle, twinkle, little star, How I wonder what you are! Up above the world so high, Like a diamond in the sky." },
          { heading: "Baa Baa Black Sheep", text: "Baa, baa, black sheep, have you any wool? Yes sir, yes sir, three bags full!" }
        ],
        keyVocabulary: [{ word: "Diamond", meaning: "A shiny, precious bright gem" }],
        funFact: "Stars shine because they are giant balls of glowing gas!",
        practiceQuestions: [
          { question: "The star is like a diamond in the _____?", options: ["sky", "water", "tree", "room"], correctAnswer: "sky", explanation: "Like a diamond in the sky!" }
        ]
      },
      {
        title: "Lesson 5: Alphabet Wonder — Letters M to P",
        term: "finalTerm",
        learningObjective: "Learn letters M, N, O, P and match with pictures.",
        mainContent: [
          { heading: "Letters M & N", text: "M is for Mango 🥭. N is for Nest 🪺." },
          { heading: "Letters O & P", text: "O is for Orange 🍊. P is for Pen 🖊️." }
        ],
        keyVocabulary: [{ word: "Nest", meaning: "Bird's cozy home" }],
        funFact: "Birds weave nests using small twigs, leaves, and cotton!",
        practiceQuestions: [
          { question: "M is for which sweet summer fruit?", options: ["Mango", "Pen", "Nest", "Fish"], correctAnswer: "Mango", explanation: "M is for Mango." }
        ]
      },
      {
        title: "Lesson 6: Alphabet Wonder — Letters Q to T",
        term: "finalTerm",
        learningObjective: "Learn letters Q, R, S, T with pronunciation.",
        mainContent: [
          { heading: "Letters Q & R", text: "Q is for Queen 👑. R is for Rose 🌹." },
          { heading: "Letters S & T", text: "S is for Sun ☀️. T is for Tiger 🐯." }
        ],
        keyVocabulary: [{ word: "Tiger", meaning: "Our national royal animal" }],
        funFact: "Every tiger has a unique stripe pattern like human fingerprints!",
        practiceQuestions: [
          { question: "T is for which brave striped animal?", options: ["Tiger", "Cat", "Rabbit", "Mouse"], correctAnswer: "Tiger", explanation: "T is for Tiger." }
        ]
      },
      {
        title: "Lesson 7: Alphabet Wonder — Letters U to Z",
        term: "finalTerm",
        learningObjective: "Complete the alphabet with letters U, V, W, X, Y, Z.",
        mainContent: [
          { heading: "Letters U, V & W", text: "U is for Umbrella ☂️. V is for Van 🚐. W is for Watch ⌚." },
          { heading: "Letters X, Y & Z", text: "X is for Xylophone 🎵. Y is for Yak 🐂. Z is for Zebra 🦓." }
        ],
        keyVocabulary: [{ word: "Zebra", meaning: "An animal with black and white stripes" }],
        funFact: "Zebras can sleep while standing up!",
        practiceQuestions: [
          { question: "What do we use when it rains?", options: ["Umbrella", "Watch", "Van", "Yak"], correctAnswer: "Umbrella", explanation: "U is for Umbrella." }
        ]
      },
      {
        title: "Lesson 8: Rhyme Time — Johny Johny & One Two Buckle My Shoe",
        term: "finalTerm",
        learningObjective: "Recite rhymes with clear pronunciation and joyful gestures.",
        mainContent: [
          { heading: "Johny Johny", text: "Johny, Johny, Yes, Papa? Eating sugar? No, Papa! Telling lies? No, Papa! Open your mouth, Ha! Ha! Ha!" },
          { heading: "One Two Buckle My Shoe", text: "One, two, buckle my shoe; Three, four, knock at the door; Five, six, pick up sticks; Seven, eight, lay them straight; Nine, ten, a big fat hen!" }
        ],
        keyVocabulary: [{ word: "Buckle", meaning: "To fasten a strap" }],
        funFact: "Counting rhymes help your brain remember numbers faster!",
        practiceQuestions: [
          { question: "In the rhyme, what was Johny asked about?", options: ["Eating sugar", "Drinking milk", "Going to school", "Playing ball"], correctAnswer: "Eating sugar", explanation: "Eating sugar? No, Papa!" }
        ]
      }
    ],
    math: [
      {
        title: "পাঠ ১: সংখ্যা চেনা ও গণনা — ১ থেকে ৫",
        term: "midTerm",
        learningObjective: "১ থেকে ৫ পর্যন্ত মুখে বলা, আঙুলে গোনা ও লেখা চেনা।",
        mainContent: [
          { heading: "১, ২, ৩", text: "১-এ একটি চাঁদ 🌙, ২-এ দুটি চোখ 👀, ৩-এ তিন চাকার রিকশা 🛺।" },
          { heading: "৪ ও ৫", text: "৪-এ চারটি পা 🐾, ৫-এ হাতের পাঁচ আঙুল ✋।" }
        ],
        keyVocabulary: [{ word: "গণনা", meaning: "জিনিসপত্র এক এক করে গোনা" }],
        funFact: "প্রতিটি মানুষের হাতে পাঁচটি করে আঙুল থাকে!",
        practiceQuestions: [
          { question: "আমাদের কয়টি চোখ আছে?", options: ["২টি", "১টি", "৩টি", "৪টি"], correctAnswer: "২টি", explanation: "আমাদের ২টি চোখ আছে।" }
        ]
      },
      {
        title: "পাঠ ২: ছবি গুনে সংখ্যা বলা — ১ থেকে ৫",
        term: "midTerm",
        learningObjective: "ছবি দেখে কয়টি বস্তু আছে সঠিকভাবে বলা।",
        mainContent: [
          { heading: "বস্তু গণনা", text: "🍎 ১টি আপেল। 🍎🍎 ২টি আপেল। 🍎🍎🍎 ৩টি আপেল।" }
        ],
        keyVocabulary: [{ word: "সংখ্যা", meaning: "পরিমাণ বোঝানোর চিহ্ন" }],
        funFact: "সংখ্যা দিয়ে পৃথিবীর সব কিছু গোনা যায়!",
        practiceQuestions: [
          { question: "৩-এর পরের সংখ্যা কোনটি?", options: ["৪", "২", "৫", "১"], correctAnswer: "৪", explanation: "৩-এর পর ৪ আসে।" }
        ]
      },
      {
        title: "পাঠ ৩: সংখ্যা চেনা ও গণনা — ৬ থেকে ১০",
        term: "midTerm",
        learningObjective: "৬, ৭, ৮, ৯, ১০ সংখ্যাগুলোর পরিচয় পাওয়া।",
        mainContent: [
          { heading: "৬ থেকে ১০", text: "৬-এ ছয় ঋতু। ৭-এ সাত সাগর। ৮-এ আটটি পা মাকড়সার। ৯-এ নয়টি গ্রহ। ১০-এ দুই হাতের দশ আঙুল।" }
        ],
        keyVocabulary: [{ word: "ঋতু", meaning: "বছরের বিশেষ আবহাওয়া" }],
        funFact: "আমাদের দুই হাতে মোট ১০টি আঙুল আছে!",
        practiceQuestions: [
          { question: "দুই হাত মিলিয়ে মোট কয়টি আঙুল হয়?", options: ["১০টি", "৫টি", "৮টি", "৭টি"], correctAnswer: "১০টি", explanation: "৫ + ৫ = ১০টি আঙুল।" }
        ]
      },
      {
        title: "পাঠ ৪: কম ও বেশি — More and Less",
        term: "midTerm",
        learningObjective: "কোথায় বেশি জিনিস আর কোথায় কম জিনিস তা বুঝতে পারা।",
        mainContent: [
          { heading: "তুলনা করি", text: "এক থালায় ৩টি লাড্ডু, অন্য থালায় ১টি লাড্ডু। ৩টি লাড্ডু হলো বেশি, ১টি হলো কম।" }
        ],
        keyVocabulary: [
          { word: "বেশি", meaning: "পরিমাণে অনেক" },
          { word: "কম", meaning: "পরিমাণে অল্প" }
        ],
        funFact: "তুলনা করে আমরা বুঝতে পারি কোনটি বড় বা কোনটি বেশি!",
        practiceQuestions: [
          { question: "৫ এবং ২ এর মধ্যে কোনটি বেশি?", options: ["৫", "২", "দুটোই সমান", "কোনোটিই নয়"], correctAnswer: "৫", explanation: "৫ সংখ্যাটি ২ থেকে বেশি।" }
        ]
      },
      {
        title: "পাঠ ৫: সংখ্যা চেনা ও গণনা — ১১ থেকে ১৫",
        term: "finalTerm",
        learningObjective: "১১, ১২, ১৩, ১৪, ১৫ সংখ্যাগুলো মুখে বলা ও চেনা।",
        mainContent: [
          { heading: "১১ থেকে ১৫", text: "১০ আর ১ হলো ১১ (এগারো)। ১০ আর ২ হলো ১২ (বারো)। ১০ আর ৩ হলো ১৩। ১০ আর ৪ হলো ১৪। ১০ আর ৫ হলো ১৫।" }
        ],
        keyVocabulary: [{ word: "দশক", meaning: "দশটি জিনিসের দল" }],
        funFact: "১০-এর সাথে ১ যোগ করলেই ১১ হয়!",
        practiceQuestions: [
          { question: "১০ এর পরের সংখ্যাটি কী?", options: ["১১", "৯", "১২", "১৩"], correctAnswer: "১১", explanation: "১০-এর পর ১১।" }
        ]
      },
      {
        title: "পাঠ ৬: সংখ্যা চেনা ও গণনা — ১৬ থেকে ২০",
        term: "finalTerm",
        learningObjective: "১৬, ১৭, ১৮, ১৯, ২০ পর্যন্ত মুখে পরিষ্কার বলা।",
        mainContent: [
          { heading: "১৬ থেকে ২০", text: "১৬ (ষোলো), ১৭ (সতেরো), ১৮ (আঠারো), ১৯ (উনিশ), ২০ (বিশ)।" }
        ],
        keyVocabulary: [{ word: "বিশ", meaning: "দুই কুড়ি বা দুটি দশের সমষ্টি" }],
        funFact: "১ থেকে ২০ শিখলে ছোটরা অনেক গণনা নিজেই করতে পারে!",
        practiceQuestions: [
          { question: "১৯ এর পরের সংখ্যা কোনটি?", options: ["২০", "১৮", "২১", "১৭"], correctAnswer: "২০", explanation: "১৯-এর পরে ২০ আসে।" }
        ]
      },
      {
        title: "পাঠ ৭: বড় ও ছোট — Big and Small",
        term: "finalTerm",
        learningObjective: "বস্তুর আকার দেখে বড় ও ছোট আলাদা করা।",
        mainContent: [
          { heading: "আকারের খেলা", text: "হাতি হলো অনেক বড় 🐘, আর পিঁপড়ে হলো খুব ছোট 🐜। ফুটবল বড় ⚽, মার্বেল ছোট 🟢।" }
        ],
        keyVocabulary: [
          { word: "বিশাল", meaning: "অনেক অনেক বড়" },
          { word: "ক্ষুদ্র", meaning: "খুব ছোট" }
        ],
        funFact: "নীল তিমি পৃথিবীর সবচেয়ে বড় জীব!",
        practiceQuestions: [
          { question: "হাতি ও পিঁপড়ের মধ্যে কোনটি বড়?", options: ["হাতি", "পিঁপড়ে", "দুটোই সমান", "কোনোটিই নয়"], correctAnswer: "হাতি", explanation: "হাতি অনেক বড় প্রাণী।" }
        ]
      }
    ],
    science: [
      {
        title: "পাঠ ১: চারপাশের ফুল — শাপলা ও গোলাপ",
        term: "midTerm",
        learningObjective: "আমাদের জাতীয় ফুল শাপলা এবং অন্যান্য মিষ্টি ফুলের নাম শেখা।",
        mainContent: [
          { heading: "শাপলা ও গোলাপ", text: "শাপলা আমাদের জাতীয় ফুল। শাপলা পানিতে ফোটে। গোলাপের সুবাস চমৎকার।" },
          { heading: "গাঁদা ও জবা", text: "গাঁদা ফুল হলুদ রঙের। জবা ফুল টুকটুকে লাল।" }
        ],
        keyVocabulary: [{ word: "শাপলা", meaning: "বাংলাদেশের জাতীয় ফুল" }],
        funFact: "শাপলা ফুল রাতেও নদীর বুকে আলো ছড়ায়!",
        practiceQuestions: [
          { question: "বাংলাদেশের জাতীয় ফুলের নাম কী?", options: ["শাপলা", "গোলাপ", "জবা", "গাঁদা"], correctAnswer: "শাপলা", explanation: "সাদা শাপলা বাংলাদেশের জাতীয় ফুল।" }
        ]
      },
      {
        title: "পাঠ ২: স্বাদের ফল — আম, জাম ও কলা",
        term: "midTerm",
        learningObjective: "পরিচিত ফলের নাম ও ফলের স্বাদ জানা।",
        mainContent: [
          { heading: "মিষ্টি ফল", text: "কাঁঠাল আমাদের জাতীয় ফল। আম ফলের রাজা। কলা খেলে শক্তি বাড়ে।" }
        ],
        keyVocabulary: [{ word: "কাঁঠাল", meaning: "জাতীয় ফল, ভেতরে মিষ্টি কোয়া থাকে" }],
        funFact: "আমকে ফলের রাজা বলা হয়!",
        practiceQuestions: [
          { question: "বাংলাদেশের জাতীয় ফলের নাম কী?", options: ["কাঁঠাল", "আম", "কলা", "লিচু"], correctAnswer: "কাঁঠাল", explanation: "কাঁঠাল আমাদের জাতীয় ফল।" }
        ]
      },
      {
        title: "পাঠ ৩: আমাদের পশু বন্ধুরা — গরু, বিড়াল ও কুকুর",
        term: "midTerm",
        learningObjective: "গৃহপালিত পশুদের নাম ও তাদের ডাক চেনা।",
        mainContent: [
          { heading: "পশুদের পরিচয়", text: "গরু ডাকে হাম্বা হাম্বা। বিড়াল ডাকে মিউ মিউ। কুকুর ডাকে ঘেউ ঘেউ। বাঘ আমাদের জাতীয় পশু।" }
        ],
        keyVocabulary: [{ word: "রয়েল বেঙ্গল টাইগার", meaning: "বাংলাদেশের জাতীয় পশু বাঘ" }],
        funFact: "বিড়াল অন্ধকারেও খুব ভালো দেখতে পায়!",
        practiceQuestions: [
          { question: "হাম্বা হাম্বা করে কে ডাকে?", options: ["গরু", "বিড়াল", "কুকুর", "ছাগল"], correctAnswer: "গরু", explanation: "গরু হাম্বা হাম্বা করে ডাকে।" }
        ]
      },
      {
        title: "পাঠ ৪: আমার শরীর — চোখ, কান, নাক ও হাত",
        term: "midTerm",
        learningObjective: "শরীরের গুরুত্বপূর্ণ অঙ্গ এবং তাদের কাজ বোঝা।",
        mainContent: [
          { heading: "অঙ্গ ও কাজ", text: "চোখ দিয়ে আমরা দেখি 👀। কান দিয়ে গান শুনি 👂। নাক দিয়ে সুবাস শুঁকি 👃। হাত দিয়ে কাজ করি ✋।" }
        ],
        keyVocabulary: [{ word: "ইন্দ্রিয়", meaning: "যে অঙ্গ দিয়ে আমরা অনুভব করি" }],
        funFact: "চোখের পলক ফেলে চোখকে পরিষ্কার রাখা হয়!",
        practiceQuestions: [
          { question: "আমরা কোন অঙ্গ দিয়ে দেখি?", options: ["চোখ", "কান", "নাক", "হাত"], correctAnswer: "চোখ", explanation: "চোখ দিয়ে আমরা সুন্দর পৃথিবী দেখি।" }
        ]
      },
      {
        title: "পাঠ ৫: সুন্দর পাখি — দোয়েল ও টিয়া",
        term: "finalTerm",
        learningObjective: "পাখিদের নাম ও বৈশিষ্ট্য চেনা।",
        mainContent: [
          { heading: "পাখির গান", text: "দোয়েল আমাদের জাতীয় পাখি। দোয়েল মিষ্টি সুরে শিষ দেয়। টিয়াপাখির ঠোঁট লাল।" }
        ],
        keyVocabulary: [{ word: "দোয়েল", meaning: "কালো-সাদা রঙের জাতীয় পাখি" }],
        funFact: "দোয়েল পাখি গাছের ডালে ডালে লেজ নাচিয়ে নাচে!",
        practiceQuestions: [
          { question: "বাংলাদেশের জাতীয় পাখির নাম কী?", options: ["দোয়েল", "টিয়া", "কাক", "ময়না"], correctAnswer: "দোয়েল", explanation: "দোয়েল আমাদের জাতীয় পাখি।" }
        ]
      },
      {
        title: "পাঠ ৬: শাকসবজি খাই — আলু, গাজর ও টমেটো",
        term: "finalTerm",
        learningObjective: "শাকসবজির নাম ও রঙিন পুষ্টিগুণ জানা।",
        mainContent: [
          { heading: "স্বাস্থ্যকর সবজি", text: "লাল টমেটো, কমলা গাজর, সবুজ শসা। প্রতিদিন শাকসবজি খেলে শরীর সুস্থ ও সুন্দর থাকে।" }
        ],
        keyVocabulary: [{ word: "পুষ্টি", meaning: "শরীরের স্বাস্থ্য ও বৃদ্ধির খাবার" }],
        funFact: "গাজর খেলে চোখের দৃষ্টি ভালো থাকে!",
        practiceQuestions: [
          { question: "টমেটোর রঙ কেমন হয়?", options: ["লাল", "নীল", "কালো", "সাদা"], correctAnswer: "লাল", explanation: "পাকা টমেটোর রঙ সুন্দর লাল।" }
        ]
      },
      {
        title: "পাঠ ৭: রংধনুর সাত রঙ ও দিন-রাত",
        term: "finalTerm",
        learningObjective: "রংধনুর রঙ এবং সূর্য ওঠা ও ডোবার ধারণা।",
        mainContent: [
          { heading: "রংধনু ও দিন-রাত", text: "আকাশে মেঘ আর রোদের খেলায় রংধনু ওঠে। দিনে সূর্য আলো দেয় ☀️, রাতে চাঁদমামা হাসে 🌙।" }
        ],
        keyVocabulary: [{ word: "রংধনু", meaning: "বৃষ্টির পর আকাশে সাত রঙের ধনুক" }],
        funFact: "রংধনুতে মোট ৭টি রঙ থাকে!",
        practiceQuestions: [
          { question: "রংধনুতে কয়টি রঙ থাকে?", options: ["৭টি", "৫টি", "৩টি", "১০টি"], correctAnswer: "৭টি", explanation: "রংধনুতে ৭টি সুন্দর রঙ থাকে।" }
        ]
      }
    ],
    drawing: [
      {
        title: "পাঠ ১: রঙের মেলা — লাল, নীল, হলুদ ও সবুজ",
        term: "midTerm",
        learningObjective: "চারটি প্রাথমিক রঙ চেনা ও রঙের নাম বলা।",
        mainContent: [
          { heading: "রঙের নাম", text: "লাল (রক্তের মতো), নীল (আকাশের মতো), হলুদ (সূর্যের মতো), সবুজ (গাছের পাতার মতো)।" }
        ],
        keyVocabulary: [{ word: "রঙিন", meaning: "সুন্দর রঙে সাজানো" }],
        funFact: "গাছের পাতা সবুজ হয় ক্লোরোফিলের কারণে!",
        practiceQuestions: [
          { question: "গাছের পাতার রঙ কেমন?", options: ["সবুজ", "নীল", "কালো", "সাদা"], correctAnswer: "সবুজ", explanation: "গাছের পাতা সাধারণত সবুজ রঙের হয়।" }
        ]
      },
      {
        title: "পাঠ ২: গোল ও সরলরেখা আঁকার খেলা",
        term: "midTerm",
        learningObjective: "পেন্সিল দিয়ে সোজা দাগ ও গোল বৃত্ত আঁকা।",
        mainContent: [
          { heading: "রেখা ও বৃত্ত", text: "একটি সোজা দাগ টানো। এবার গোল করে একটি সূর্য বা ফুটবল বানাও!" }
        ],
        keyVocabulary: [{ word: "বৃত্ত", meaning: "গোলাকার সুন্দর দাগ" }],
        funFact: "গোল বৃত্ত দিয়ে চাকা, থালা, সূর্য সবই বানানো যায়!",
        practiceQuestions: [
          { question: "ফুটবলের আকার কেমন?", options: ["গোলাকার (বৃত্ত)", "চৌকো", "ত্রিকোণ", "সরলরেখা"], correctAnswer: "গোলাকার (বৃত্ত)", explanation: "ফুটবল গোল আকারের হয়।" }
        ]
      },
      {
        title: "পাঠ ৩: রঙিন বেলুন ও মেঘ রঙ করা",
        term: "finalTerm",
        learningObjective: "বেলুনের ছবি এঁকে পছন্দের রঙে ভরাট করা।",
        mainContent: [
          { heading: "বেলুন ও মেঘ", text: "উপরে ভাসছে নীল মেঘ। নিচে একটি লাল সুতোয় বাঁধা রঙিন বেলুন উড়ছে আকাশে!" }
        ],
        keyVocabulary: [{ word: "বেলুন", meaning: "হাওয়ায় ফোলা খেলার বস্তু" }],
        funFact: "হিলিয়াম গ্যাস ভরা বেলুন বাতাসে হাত ছাড়লেই উপরে উঠে যায়!",
        practiceQuestions: [
          { question: "বেলুনে কী ভরলে তা ফুলে ওঠে?", options: ["বাতাস বা গ্যাস", "পানি", "বালু", "মাটি"], correctAnswer: "বাতাস বা গ্যাস", explanation: "বাতাস দিলে বেলুন ফুলে ওঠে।" }
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 🌿 NURSERY
  // --------------------------------------------------------------------------
  nursery: {
    bangla: [
      {
        title: "পাঠ ১: স্বরবর্ণের সঠিক উচ্চারণ ও রূপ (অ থেকে ঔ)",
        term: "midTerm",
        learningObjective: "১১টি স্বরবর্ণ চিনে শুদ্ধ উচ্চারণে পড়া ও লেখা।",
        warmUp: "অ, আ, ই, ঈ, উ, ঊ, ঋ, এ, ঐ, ও, ঔ — চল একসাথে বলি!",
        mainContent: [
          { heading: "হ্রস্ব ও দীর্ঘ স্বর", text: "ই হলো হ্রস্ব ই (ছোট টান), ঈ হলো দীর্ঘ ঈ (একটু লম্বা সুর)। উ ও ঊ তেমনি।" },
          { heading: "শব্দ গঠন", text: "অ-তে অজগর, আ-তে আম, ই-তে ইঁদুর, ঈ-তে ঈগল, উ-তে উট, ঊ-তে ঊর্মি, ঋ-তে ঋষি, এ-তে একতা, ঐ-তে ঐক্য, ও-তে ওজন, ঔ-তে ঔষধ।" }
        ],
        keyVocabulary: [
          { word: "ঊর্মি", meaning: "সাগরের ঢেউ" },
          { word: "ঐক্য", meaning: "মিলেমিশে এক হয়ে থাকা" }
        ],
        funFact: "ঋ বর্ণটি এখন স্বরবর্ণে কেবল বিশেষ কিছু শব্দে ব্যবহৃত হয়!",
        practiceQuestions: [
          { question: "'ঔষধ' শব্দের প্রথম বর্ণ কোনটি?", options: ["ঔ", "ও", "অ", "উ"], correctAnswer: "ঔ", explanation: "ঔ-তে ঔষধ ভালো করে রোগ।" }
        ]
      },
      {
        title: "পাঠ ২: ব্যঞ্জনবর্ণ রূপ — ক থেকে ঞ পর্যন্ত",
        term: "midTerm",
        learningObjective: "ক, খ, গ, ঘ, ঙ, চ, ছ, জ, ঝ, ঞ পরিচিতি ও শব্দ।",
        mainContent: [
          { heading: "ক-বর্গ", text: "ক-তে কাঁঠাল, খ-তে খাতা, গ-তে গোলাপ, ঘ-তে ঘড়ি, ঙ-তে রঙিন।" },
          { heading: "চ-বর্গ", text: "চ-তে চাঁদ, ছ-তে ছাগল, জ-তে জবা, ঝ-তে ঝর্ণা, ঞ-তে মিঞা।" }
        ],
        keyVocabulary: [{ word: "ঝর্ণা", meaning: "পাহাড় থেকে নেমে আসা পানির ধারা" }],
        funFact: "ঘড়ি আমাদের সঠিক সময় দেখতে সাহায্য করে!",
        practiceQuestions: [
          { question: "সময় দেখার জন্য কোনটি ব্যবহার করি?", options: ["ঘড়ি", "ছাতা", "খাতা", "গোলাপ"], correctAnswer: "ঘড়ি", explanation: "ঘ-তে ঘড়ি সময় জানায়।" }
        ]
      },
      {
        title: "পাঠ ৩: ব্যঞ্জনবর্ণ রূপ — ট থেকে ন পর্যন্ত",
        term: "midTerm",
        learningObjective: "ট, ঠ, ড, ঢ, ণ, ত, থ, দ, ধ, ন চেনা ও লেখা।",
        mainContent: [
          { heading: "ট-বর্গ", text: "ট-তে টমেটো, ঠ-তে ঠেলাগাড়ি, ড-তে ডাব, ঢ-তে ঢাক, ণ-তে হরিণ।" },
          { heading: "ত-বর্গ", text: "ত-তে তরমুজ, থ-তে থালা, দ-তে দোয়েল, ধ-তে ধান, ন-তে নদী।" }
        ],
        keyVocabulary: [{ word: "ডাব", meaning: "মিষ্টি পানির নারিকেলের কচি রূপ" }],
        funFact: "ডাবের পানি শরীর ঠান্ডা রাখে ও খুব পুষ্টিকর!",
        practiceQuestions: [
          { question: "ত-তে কোন রসালো মিষ্টি ফল হয়?", options: ["তরমুজ", "টমেটো", "ডাব", "ধান"], correctAnswer: "তরমুজ", explanation: "ত-তে তরমুজ।" }
        ]
      },
      {
        title: "পাঠ ৪: ব্যঞ্জনবর্ণ রূপ — প থেকে ম পর্যন্ত",
        term: "midTerm",
        learningObjective: "প, ফ, ব, ভ, ম সঠিকভাবে চেনা ও উদাহরণ দেওয়া।",
        mainContent: [
          { heading: "প-বর্গ", text: "প-তে পায়রা, ফ-তে ফুল, ব-তে বই, ভ-তে ভালুক, ম-তে ময়ূর।" }
        ],
        keyVocabulary: [{ word: "পায়রা", meaning: "শান্তির প্রতীক কবুতর" }],
        funFact: "ময়ূর পেখম মেলে বৃষ্টিতে নাচে!",
        practiceQuestions: [
          { question: "পেখম তুলে কে নাচে?", options: ["ময়ূর", "পায়রা", "ভালুক", "বক"], correctAnswer: "ময়ূর", explanation: "ম-তে ময়ূর পেখম মেলে নাচে।" }
        ]
      },
      {
        title: "পাঠ ৫: খালিঘর পূরণ ও আগের-পরের বর্ণ",
        term: "midTerm",
        learningObjective: "বর্ণমালার ধারাবাহিকতা বজায় রেখে খালিঘর পূরণ করা।",
        mainContent: [
          { heading: "আগের ও পরের বর্ণ", text: "ক-এর পরে খ, খ-এর পরে গ। ট-এর আগে ঞ, পরে ঠ। সঠিক বর্ণটি খালি জায়গায় বসাও।" }
        ],
        keyVocabulary: [{ word: "ধারাবাহিকতা", meaning: "একের পর এক নিয়মমতো সাজানো" }],
        funFact: "নিয়মমতো বর্ণ সাজালে খুব সুন্দর দেখায়!",
        practiceQuestions: [
          { question: "গ-এর পরের বর্ণ কোনটি?", options: ["ঘ", "ঙ", "খ", "চ"], correctAnswer: "ঘ", explanation: "ক, খ, গ, ঘ।" }
        ]
      },
      {
        title: "পাঠ ৬: ছড়া পাঠ — আতা গাছে তোতা পাখি ও তাঁতির বাড়ি",
        term: "midTerm",
        learningObjective: "জনপ্রিয় ছড়া শুদ্ধ ও স্পষ্ট উচ্চারণে আবৃত্তি করা।",
        mainContent: [
          { heading: "আতা গাছে তোতা পাখি", text: "আতা গাছে তোতা পাখি, ডালিম গাছে মৌ। এত ডাকি তবু কথা, কও না কেন বউ?" },
          { heading: "তাঁতির বাড়ি", text: "তাঁতির বাড়ি ব্যাঙের বাসা, কোলা ব্যাঙের ছা। খায় দায় গান গায়, তা ধিন ধিন তা!" }
        ],
        keyVocabulary: [{ word: "তোতা", meaning: "কথা বলা সবুজ টিয়াপাখি" }],
        funFact: "তোতা পাখিকে আদর করে কথা শেখালে সে মানুষের মতো কথা বলতে পারে!",
        practiceQuestions: [
          { question: "তোতা পাখি কোন গাছে বসে ছিল?", options: ["আতা গাছে", "আম গাছে", "জাম গাছে", "ডালিম গাছে"], correctAnswer: "আতা গাছে", explanation: "আতা গাছে তোতা পাখি!" }
        ]
      },
      {
        title: "পাঠ ৭: ব্যঞ্জনবর্ণ সমাপ্তি — য থেকে হ পর্যন্ত",
        term: "finalTerm",
        learningObjective: "য, র, ল, শ, ষ, স, হ বর্ণগুলো চেনা।",
        mainContent: [
          { heading: "অন্তঃস্থ ও উষ্ম বর্ণ", text: "য-তে যাতা, র-তে রথ, ল-তে লাটিম, শ-তে শাপলা, ষ-তে ষাঁড়, স-তে সিংহ, হ-তে হাতি।" }
        ],
        keyVocabulary: [{ word: "সিংহ", meaning: "বনের শক্তিশালী পশুরাজ" }],
        funFact: "সিংহ এক লাফে অনেক দূর যেতে পারে!",
        practiceQuestions: [
          { question: "বনের রাজা কাকে বলা হয়?", options: ["সিংহ", "হাতি", "বাঘ", "ঘোড়া"], correctAnswer: "সিংহ", explanation: "স-তে সিংহ বনের রাজা।" }
        ]
      },
      {
        title: "পাঠ ৮: বিশেষ বর্ণ — ড়, ঢ়, য়, ৎ, ং, ঃ, ঁ",
        term: "finalTerm",
        learningObjective: "বিন্দুযুক্ত ও অতিরিক্ত বর্ণগুলোর পরিচয় জানা।",
        mainContent: [
          { heading: "বিন্দুযুক্ত বর্ণ", text: "ড়-তে গাড়ি, ঢ়-তে আষাঢ়, য়-তে পায়রা, ৎ-তে মৎস্য, ং-তে রং, ঃ-তে দুঃখ, ঁ-তে চাঁদ।" }
        ],
        keyVocabulary: [{ word: "মৎস্য", meaning: "মাছ" }],
        funFact: "চন্দ্রবিন্দু (ঁ) হলো নাকের সুর দিয়ে উচ্চারণ করার চিহ্ন!",
        practiceQuestions: [
          { question: "'চাঁদ' বানানে কোন চিহ্নটি থাকে?", options: ["চন্দ্রবিন্দু (ঁ)", "অনুস্বার (ং)", "বিসর্গ (ঃ)", "হসন্ত"], correctAnswer: "চন্দ্রবিন্দু (ঁ)", explanation: "চ + া + ঁ + দ = চাঁদ।" }
        ]
      },
      {
        title: "পাঠ ৯: ছবির সাথে বর্ণ মেলানো ও সহজ শব্দ",
        term: "finalTerm",
        learningObjective: "ছবি দেখে প্রথম বর্ণটি চিনে শব্দ মুখে বলা।",
        mainContent: [
          { heading: "ছবি ও শব্দ", text: "আম (আ), বই (ব), ফুল (ফ), মেঘ (ম), সূর্য (স)। ছবির পাশে বর্ণ লেখো।" }
        ],
        keyVocabulary: [{ word: "শব্দ", meaning: "অর্থপূর্ণ অক্ষরের মেলবন্ধন" }],
        funFact: "শব্দ দিয়ে আমরা মনের সব কথা প্রকাশ করি!",
        practiceQuestions: [
          { question: "'বই' শব্দের প্রথম বর্ণ কোনটি?", options: ["ব", "ই", "প", "ক"], correctAnswer: "ব", explanation: "ব-তে বই পড়ি।" }
        ]
      },
      {
        title: "পাঠ ১০: মজার ছড়া — সিংহ মামা ও হাট্টিমাটিম টিম",
        term: "finalTerm",
        learningObjective: "হাট্টিমাটিম টিম ও সিংহ মামা ছড়া আবৃত্তি করা।",
        mainContent: [
          { heading: "হাট্টিমাটিম টিম", text: "হাট্টিমাটিম টিম, তারা মাঠে পাড়ে ডিম। তাদের খাঁড়া দুটো শিং, তারা হাট্টিমাটিম টিম!" }
        ],
        keyVocabulary: [{ word: "শিং", meaning: "মাথার শক্ত ধারালো অংশ" }],
        funFact: "হাট্টিমাটিম টিম একটি মজার কল্পনার ছড়া!",
        practiceQuestions: [
          { question: "হাট্টিমাটিম টিম কোথায় ডিম পাড়ে?", options: ["মাঠে", "গাছে", "পানিতে", "ঘরে"], correctAnswer: "মাঠে", explanation: "ছড়াতে বলা হয়েছে: 'তারা মাঠে পাড়ে ডিম'।" }
        ]
      }
    ],
    english: [
      {
        title: "Lesson 1: Capital & Small Alphabet — A to F",
        term: "midTerm",
        learningObjective: "Match uppercase and lowercase A-F and write initial sounds.",
        mainContent: [
          { heading: "Aa to Cc", text: "Aa (Apple), Bb (Bat), Cc (Cup)." },
          { heading: "Dd to Ff", text: "Dd (Duck), Ee (Egg), Ff (Fan)." }
        ],
        keyVocabulary: [{ word: "Duck", meaning: "A swimming water bird" }],
        funFact: "Duck feathers are waterproof!",
        practiceQuestions: [
          { question: "What is the small letter for 'B'?", options: ["b", "d", "p", "q"], correctAnswer: "b", explanation: "Capital B matches small b." }
        ]
      },
      {
        title: "Lesson 2: Capital & Small Alphabet — G to L",
        term: "midTerm",
        learningObjective: "Match letters Gg to Ll with words and pictures.",
        mainContent: [
          { heading: "Gg to Ii", text: "Gg (Goat), Hh (Hat), Ii (Ink)." },
          { heading: "Jj to Ll", text: "Jj (Jam), Kk (King), Ll (Lamp)." }
        ],
        keyVocabulary: [{ word: "Lamp", meaning: "A light device that brightens the room" }],
        funFact: "Lamps bring bright light in the dark evening!",
        practiceQuestions: [
          { question: "Which letter comes after H?", options: ["I", "J", "G", "K"], correctAnswer: "I", explanation: "G, H, I." }
        ]
      },
      {
        title: "Lesson 3: After, Before and Between Letters (A to L)",
        term: "midTerm",
        learningObjective: "Identify missing letters in alphabet sequences.",
        mainContent: [
          { heading: "Alphabet Order", text: "Before B is A. After C is D. Between E and G is F." }
        ],
        keyVocabulary: [{ word: "Between", meaning: "In the middle of two things" }],
        funFact: "The English alphabet has 26 letters in total!",
        practiceQuestions: [
          { question: "What comes between A and C?", options: ["B", "D", "E", "F"], correctAnswer: "B", explanation: "A, B, C." }
        ]
      },
      {
        title: "Lesson 4: Join Pictures with First Letters",
        term: "midTerm",
        learningObjective: "Connect pictures of animals and objects to their initial letter.",
        mainContent: [
          { heading: "Picture Match", text: "🍎 matches with A. 🐱 matches with C. 🐟 matches with F." }
        ],
        keyVocabulary: [{ word: "Initial", meaning: "The very first letter of a word" }],
        funFact: "Every name begins with a capital initial letter!",
        practiceQuestions: [
          { question: "Which letter matches with a Cat?", options: ["C", "A", "B", "D"], correctAnswer: "C", explanation: "C is for Cat." }
        ]
      },
      {
        title: "Lesson 5: Rhymes — Early to Bed & Rain Rain",
        term: "midTerm",
        learningObjective: "Sing Early to Bed and Rain Rain Go Away with cheerful gestures.",
        mainContent: [
          { heading: "Early to Bed", text: "Early to bed and early to rise, Makes a man healthy, wealthy, and wise!" },
          { heading: "Rain Rain Go Away", text: "Rain, rain, go away, Come again another day, Little Johnny wants to play!" }
        ],
        keyVocabulary: [{ word: "Healthy", meaning: "Fit and free from sickness" }],
        funFact: "Sleeping early keeps children energetic all day long!",
        practiceQuestions: [
          { question: "Who wants to play in the rain rhyme?", options: ["Little Johnny", "Little Tommy", "Little Kitty", "Little Puppy"], correctAnswer: "Little Johnny", explanation: "Little Johnny wants to play!" }
        ]
      },
      {
        title: "Lesson 6: Capital & Small Alphabet — M to S",
        term: "finalTerm",
        learningObjective: "Identify letters Mm to Ss and their sounds.",
        mainContent: [
          { heading: "Mm to Pp", text: "Mm (Moon), Nn (Net), Oo (Owl), Pp (Pen)." },
          { heading: "Qq to Ss", text: "Qq (Queen), Rr (Ring), Ss (Star)." }
        ],
        keyVocabulary: [{ word: "Star", meaning: "A twinkling light in the night sky" }],
        funFact: "The Sun is the closest star to Earth!",
        practiceQuestions: [
          { question: "Which letter is for Moon?", options: ["M", "N", "O", "P"], correctAnswer: "M", explanation: "M is for Moon." }
        ]
      },
      {
        title: "Lesson 7: Capital & Small Alphabet — T to Z",
        term: "finalTerm",
        learningObjective: "Complete alphabet learning from Tt to Zz.",
        mainContent: [
          { heading: "Tt to Ww", text: "Tt (Tree), Uu (Urn), Vv (Van), Ww (Watch)." },
          { heading: "Xx to Zz", text: "Xx (Box), Yy (Yo-yo), Zz (Zoo)." }
        ],
        keyVocabulary: [{ word: "Tree", meaning: "A tall green plant with leaves and branches" }],
        funFact: "Trees give us fresh oxygen to breathe!",
        practiceQuestions: [
          { question: "Which letter comes right after Y?", options: ["Z", "X", "W", "V"], correctAnswer: "Z", explanation: "Z is the last letter of the alphabet." }
        ]
      },
      {
        title: "Lesson 8: Complete Words with Vowels (a, e, i, o, u)",
        term: "finalTerm",
        learningObjective: "Fill in 3-letter CVC words using vowel sounds.",
        mainContent: [
          { heading: "Vowel Power", text: "c-a-t (Cat), p-e-n (Pen), p-i-n (Pin), p-o-t (Pot), s-u-n (Sun)." }
        ],
        keyVocabulary: [{ word: "Vowels", meaning: "The 5 special helper letters: A, E, I, O, U" }],
        funFact: "Almost every English word has at least one vowel!",
        practiceQuestions: [
          { question: "Fill in the blank: c _ t (A friendly furry pet)", options: ["a", "e", "o", "u"], correctAnswer: "a", explanation: "c-a-t = Cat." }
        ]
      },
      {
        title: "Lesson 9: Rhymes — What I Can Do & Engine Engine Number Nine",
        term: "finalTerm",
        learningObjective: "Recite rhythmic action songs with rhythm and smiles.",
        mainContent: [
          { heading: "Engine Engine Number Nine", text: "Engine, engine, number nine, Going down Chicago line; If the train goes off the track, Will I get my money back? Yes, no, maybe so!" }
        ],
        keyVocabulary: [{ word: "Engine", meaning: "The powerful front car of a train" }],
        funFact: "Trains travel on smooth steel railway tracks!",
        practiceQuestions: [
          { question: "What number was the engine in the rhyme?", options: ["Nine", "Seven", "Five", "Ten"], correctAnswer: "Nine", explanation: "Engine, engine, number nine!" }
        ]
      }
    ],
    math: [
      {
        title: "পাঠ ১: সংখ্যা ১ থেকে ২০ পর্যন্ত লেখা ও পড়া",
        term: "midTerm",
        learningObjective: "১ থেকে ২০ পর্যন্ত সংখ্যা নির্ভুলভাবে চেনা ও খাতায় লেখা।",
        mainContent: [
          { heading: "১ থেকে ১০", text: "১, ২, ৩, ৪, ৫, ৬, ৭, ৮, ৯, ১০।" },
          { heading: "১১ থেকে ২০", text: "১১, ১২, ১৩, ১৪, ১৫, ১৬, ১৭, ১৮, ১৯, ২০।" }
        ],
        keyVocabulary: [{ word: "অঙ্ক", meaning: "সংখ্যা লেখার এক একটি প্রতীক" }],
        funFact: "আমাদের গণিতের শুরু এই সহজ সংখ্যাগুলো দিয়েই!",
        practiceQuestions: [
          { question: "১৪-এর পরের সংখ্যাটি কত?", options: ["১৫", "১৩", "১৬", "১৭"], correctAnswer: "১৫", explanation: "১৪-এর পরে ১৫।" }
        ]
      },
      {
        title: "পাঠ ২: আগের, মাঝের ও পরের সংখ্যা (১ থেকে ২০)",
        term: "midTerm",
        learningObjective: "সংখ্যার ক্রম বুঝে মাঝের বা পরের সংখ্যা নির্ণয় করা।",
        mainContent: [
          { heading: "ক্রম অনুযায়ী", text: "৭-এর পরে ৮। ১২ ও ১৪-এর মাঝে ১৩। ১৯-এর আগে ১৮।" }
        ],
        keyVocabulary: [{ word: "ক্রম", meaning: "ছোট থেকে বড় ধারাবাহিক সাজানো" }],
        funFact: "সংখ্যা সবসময় সমান দূরত্বে এক এক করে বাড়ে!",
        practiceQuestions: [
          { question: "৮ এবং ১০ এর মাঝের সংখ্যাটি কত?", options: ["৯", "৭", "১১", "৬"], correctAnswer: "৯", explanation: "৮, ৯, ১০।" }
        ]
      },
      {
        title: "পাঠ ৩: ছবি গুনে সঠিক সংখ্যা গোল করা",
        term: "midTerm",
        learningObjective: "নির্দিষ্ট সংখ্যক বস্তু গুনে সঠিক সংখ্যা নির্বাচন করা।",
        mainContent: [
          { heading: "গণনার অনুশীলন", text: "🌟🌟🌟🌟 ৪টি তারা। 🎈🎈🎈🎈🎈 ৫টি বেলুন।" }
        ],
        keyVocabulary: [{ word: "পরিমাপ", meaning: "কতগুলো আছে তা বের করা" }],
        funFact: "তারা রাতের আকাশে আলোর মতো জ্বলজ্বল করে!",
        practiceQuestions: [
          { question: "তিনটি পাখির সাথে আরও দুটি পাখি বসলে মোট কয়টি পাখি হয়?", options: ["৫টি", "৪টি", "৬টি", "৩টি"], correctAnswer: "৫টি", explanation: "৩ + ২ = ৫।" }
        ]
      },
      {
        title: "পাঠ ৪: বড় ও ছোট বস্তু চিহ্নিত করা",
        term: "midTerm",
        learningObjective: "বস্তুর তুলনা করে বড় ও ছোট চিহ্নিত করা।",
        mainContent: [
          { heading: "তুলনার নিয়ম", text: "বড় তরমুজ 🍉 এবং ছোট আপেল 🍎। গাছ বড় 🌳, ঘাস ছোট 🌱।" }
        ],
        keyVocabulary: [{ word: "আকার", meaning: "কোনো বস্তু কতটুকু জায়গা নেয়" }],
        funFact: "আমের চেয়ে তরমুজ অনেক বড় ফল!",
        practiceQuestions: [
          { question: "তরমুজ ও লিচুর মধ্যে কোনটি ছোট?", options: ["লিচু", "তরমুজ", "দুটোই সমান", "কোনোটিই নয়"], correctAnswer: "লিচু", explanation: "লিচু তরমুজের চেয়ে অনেক ছোট।" }
        ]
      },
      {
        title: "পাঠ ৫: সংখ্যা ২১ থেকে ৫০ পর্যন্ত চেনা",
        term: "finalTerm",
        learningObjective: "২১ থেকে ৫০ পর্যন্ত সংখ্যা মুখে বলা ও সাজানো।",
        mainContent: [
          { heading: "২১ থেকে ৩০", text: "২১, ২২, ২৩, ২৪, ২৫, ২৬, ২৭, ২৮, ২৯, ৩০।" },
          { heading: "৩১ থেকে ৫০", text: "৩১ থেকে ৪০ এবং ৪১ থেকে ৫০ পর্যন্ত দশের দলে গোনা।" }
        ],
        keyVocabulary: [{ word: "পঞ্চাশ", meaning: "৫০ বা ৫টি দশের দল" }],
        funFact: "৫০ হলো ১০০-এর ঠিক অর্ধেক!",
        practiceQuestions: [
          { question: "২৯-এর পরের সংখ্যা কোনটি?", options: ["৩০", "২৮", "৩১", "৩২"], correctAnswer: "৩০", explanation: "২৯-এর পরে ৩০।" }
        ]
      },
      {
        title: "পাঠ ৬: মিসিং নাম্বার ও খালিঘর পূরণ (১ থেকে ৫০)",
        term: "finalTerm",
        learningObjective: "খালি ঘরে সঠিক সংখ্যা বসিয়ে ধারা সম্পন্ন করা।",
        mainContent: [
          { heading: "ধারা পূরণ", text: "২৫, ২৬, ___, ২৮। খালি জায়গায় হবে ২৭।" }
        ],
        keyVocabulary: [{ word: "খালিঘর", meaning: "যেখানে সঠিক উত্তর লিখতে হয়" }],
        funFact: "পাজল সমাধান করলে বুদ্ধি বাড়ে!",
        practiceQuestions: [
          { question: "৪১, ৪২, ___, ৪৪ — খালি ঘরে কী হবে?", options: ["৪৩", "৪৫", "৪০", "৪৬"], correctAnswer: "৪৩", explanation: "৪১, ৪২, ৪৩, ৪৪।" }
        ]
      },
      {
        title: "পাঠ ৭: বিন্দু মিলিয়ে ছবি তৈরি (১ থেকে ৩০)",
        term: "finalTerm",
        learningObjective: "বিন্দু যোগ করে তারা, তারা ও মাছের সুন্দর ছবি তৈরি করা।",
        mainContent: [
          { heading: "বিন্দু মেলানো", text: "১ থেকে শুরু করে ২, ৩, ৪ এভাবে দাগ টানলে লুকিয়ে থাকা ছবি ফুটে ওঠে!" }
        ],
        keyVocabulary: [{ word: "বিন্দু", meaning: "ছোট একটি দাগের ফোটা" }],
        funFact: "বিন্দু মিলিয়ে ছবি আঁকলে হাত দ্রুত পেন্সিল চালাতে শেখে!",
        practiceQuestions: [
          { question: "বিন্দু মেলানোর খেলায় প্রথম কোন সংখ্যা থেকে শুরু করতে হয়?", options: ["১", "১০", "০", "৫"], correctAnswer: "১", explanation: "সবসময় ১ থেকে শুরু করতে হয়।" }
        ]
      },
      {
        title: "পাঠ ৮: লম্বা ও খাটো এবং বেশি ও কম",
        term: "finalTerm",
        learningObjective: "দৈর্ঘ্যের তুলনা: লম্বা (Long) বনাম খাটো (Short)।",
        mainContent: [
          { heading: "দৈর্ঘ্যের ধারণা", text: "জিরাফের গলা অনেক লম্বা 🦒। খরগোশের লেজ খুব খাটো 🐇।" }
        ],
        keyVocabulary: [
          { word: "লম্বা", meaning: "যার দৈর্ঘ্য অনেক বেশি" },
          { word: "খাটো", meaning: "যার দৈর্ঘ্য কম" }
        ],
        funFact: "জিরাফ পৃথিবীর সবচেয়ে লম্বা প্রাণী!",
        practiceQuestions: [
          { question: "জিরাফের গলা কেমন?", options: ["লম্বা", "খাটো", "গোল", "চৌকো"], correctAnswer: "লম্বা", explanation: "জিরাফের গলা অনেক লম্বা।" }
        ]
      }
    ],
    science: [
      {
        title: "পাঠ ১: আমাদের শরীর ও পঞ্চ ইন্দ্রিয়",
        term: "midTerm",
        learningObjective: "চোখ, কান, নাক, জিভ ও ত্বকের বিশেষ কাজগুলো জানা।",
        mainContent: [
          { heading: "পঞ্চ ইন্দ্রিয়", text: "চোখে দেখি, কানে শুনি, নাকে গন্ধ নিই, জিভে স্বাদ পাই, আর ত্বক দিয়ে ঠান্ডা-গরম স্পর্শ বুঝি।" }
        ],
        keyVocabulary: [{ word: "স্পর্শ", meaning: "ত্বক দিয়ে অনুভব করা" }],
        funFact: "জিভের আলাদা আলাদা অংশে মিষ্টি, টক, নোনতা ও তিতো স্বাদ বোঝা যায়!",
        practiceQuestions: [
          { question: "কোন অঙ্গ দিয়ে আমরা মিষ্টি বা ঝাল স্বাদ বুঝি?", options: ["জিভ", "কান", "চোখ", "নাক"], correctAnswer: "জিভ", explanation: "জিভ দিয়ে খাবারের স্বাদ পাওয়া যায়।" }
        ]
      },
      {
        title: "পাঠ ২: পরিচিত ফুল ও ফল",
        term: "midTerm",
        learningObjective: "শাপলা, গোলাপ, আম, জাম, কাঁঠালের রঙ ও সুবাস।",
        mainContent: [
          { heading: "বাগানের ফুল ও ফল", text: "শাপলা পানিতে ফোটে। গোলাপের সুন্দর পাপড়ি থাকে। আম পাকা হলে মিষ্টি হয়।" }
        ],
        keyVocabulary: [{ word: "পাপড়ি", meaning: "ফুলের রঙিন সুন্দর পাতা" }],
        funFact: "মৌমাছিরা ফুলের মিষ্টি মধু সংগ্রহ করে মৌচাক বানায়!",
        practiceQuestions: [
          { question: "মৌমাছি ফুল থেকে কী সংগ্রহ করে?", options: ["মধু", "পানি", "পাতা", "মাটি"], correctAnswer: "মধু", explanation: "মৌমাছি ফুল থেকে মধু নেয়।" }
        ]
      },
      {
        title: "পাঠ ৩: পোষা প্রাণী ও তাদের যত্ন",
        term: "midTerm",
        learningObjective: "বিড়াল, কুকুর, হাঁস, মুরগির বাসস্থান ও খাবার।",
        mainContent: [
          { heading: "পোষা প্রাণীর মায়া", text: "বিড়াল দুধ-মাছ খায়। মুরগি সকালে ডাকে ও ডিম দেয়। পশুদের ভালোবাসতে হয়।" }
        ],
        keyVocabulary: [{ word: "গৃহপালিত", meaning: "যেসব প্রাণী ঘরে বা খামারে লালন-পালন করা হয়" }],
        funFact: "মুরগির ডিমে প্রচুর প্রোটিন থাকে যা আমাদের শক্তিশালী করে!",
        practiceQuestions: [
          { question: "আমাদের সকালে ডিম দেয় কোন পাখি?", options: ["মুরগি বা হাঁস", "কাক", "চড়ুই", "টিয়া"], correctAnswer: "মুরগি বা হাঁস", explanation: "হাঁস ও মুরগি ডিম দেয়।" }
        ]
      },
      {
        title: "পাঠ ৪: শ্রেণিকক্ষের জিনিস ও সপ্তাহের ৭ দিন",
        term: "midTerm",
        learningObjective: "বই, খাতা, পেন্সিল এবং শনিবার থেকে শুক্রবার ৭ দিনের নাম।",
        mainContent: [
          { heading: "সাত দিনের নাম", text: "শনিবার, রবিবার, সোমবার, মঙ্গলবার, বুধবার, বৃহস্পতিবার, শুক্রবার।" }
        ],
        keyVocabulary: [{ word: "সপ্তাহ", meaning: "পরপর সাতটি দিনের সমষ্টি" }],
        funFact: "সপ্তাহের প্রতিটি দিনের আলাদা মিষ্টি নাম আছে!",
        practiceQuestions: [
          { question: "এক সপ্তাহে কয়টি দিন থাকে?", options: ["৭টি", "৫টি", "১০টি", "১২টি"], correctAnswer: "৭টি", explanation: "এক সপ্তাহে ৭ দিন থাকে।" }
        ]
      },
      {
        title: "পাঠ ৫: বন্য প্রাণী ও তাদের বাসস্থান",
        term: "finalTerm",
        learningObjective: "বাঘ, সিংহ, হরিণ ও হাতি কোথায় বাস করে জানা।",
        mainContent: [
          { heading: "বনের বাসিন্দা", text: "সুন্দরবনে বাঘ ও চিত্রা হরিণ থাকে। পাহাড়ে হাতি থাকে। বনের পশুপাখি প্রকৃতিকে সুন্দর রাখে।" }
        ],
        keyVocabulary: [{ word: "সুন্দরবন", meaning: "বিশ্বের বৃহত্তম ম্যানগ্রোভ বন" }],
        funFact: "সুন্দরবনের রয়েল বেঙ্গল টাইগার সাঁতার কাটতে খুব ওস্তাদ!",
        practiceQuestions: [
          { question: "চিত্রা হরিণ সাধারণত কোথায় বাস করে?", options: ["বনে বা জঙ্গলে", "নদীতে", "ঘরের ছাদে", "আকাশে"], correctAnswer: "বনে বা জঙ্গলে", explanation: "হরিণ বনের শান্তিবাদী প্রাণী।" }
        ]
      },
      {
        title: "পাঠ ৬: দিন ও রাত এবং ১২ মাসের নাম",
        term: "finalTerm",
        learningObjective: "সূর্য ও পৃথিবীর ঘূর্ণনে দিন-রাত হওয়া এবং ১২ মাসের নাম।",
        mainContent: [
          { heading: "দিন ও রাত", text: "সূর্য উঠলে সকাল ও দিন হয়। সূর্য ডুবলে অন্ধকার রাত নামে। বৈশাখ থেকে চৈত্র বারো মাস।" }
        ],
        keyVocabulary: [{ word: "দিবারাত্রি", meaning: "দিন ও রাতের চক্র" }],
        funFact: "পৃথিবী নিজের অক্ষের উপর ঘোরে বলেই দিন আর রাত হয়!",
        practiceQuestions: [
          { question: "দিনে আমাদের আলো ও তাপ কে দেয়?", options: ["সূর্য", "চাঁদ", "তারা", "মেঘ"], correctAnswer: "সূর্য", explanation: "সূর্য আমাদের আলো ও শক্তি দেয়।" }
        ]
      },
      {
        title: "পাঠ ৭: বাংলাদেশের ছয় ঋতু ও রংধনু",
        term: "finalTerm",
        learningObjective: "গ্রীষ্ম, বর্ষা, শরৎ, হেমন্ত, শীত, বসন্ত — ছয় ঋতুর রূপ।",
        mainContent: [
          { heading: "ছয় ঋতুর দেশ", text: "গ্রীষ্মে মিষ্টি আম পাকে। বর্ষায় বৃষ্টি ঝরে। শীতে পিঠাপুলি খাওয়া হয়। বসন্তে কোকিল ডাকে।" }
        ],
        keyVocabulary: [{ word: "ঋতুরাজ", meaning: "বসন্ত কালকে ঋতুর রাজা বলা হয়" }],
        funFact: "বাংলাদেশকে ছয় ঋতুর মায়াবী দেশ বলা হয়!",
        practiceQuestions: [
          { question: "কোকিল পাখি কোন ঋতুতে মিষ্টি সুরে ডাকে?", options: ["বসন্ত ঋতুতে", "শীত ঋতুতে", "গ্রীষ্ম ঋতুতে", "বর্ষা ঋতুতে"], correctAnswer: "বসন্ত ঋতুতে", explanation: "বসন্তে কোকিল ডাকে কুহু কুহু।" }
        ]
      }
    ],
    drawing: [
      {
        title: "পাঠ ১: বৃত্ত ও ত্রিভুজ দিয়ে পতাকা আঁকা",
        term: "midTerm",
        learningObjective: "সবুজ আয়তক্ষেত্রের মাঝে লাল বৃত্ত দিয়ে জাতীয় পতাকা আঁকা।",
        mainContent: [
          { heading: "পতাকা আঁকার নিয়ম", text: "প্রথমে একটি সোজা বাক্স আঁকো (সবুজ রঙ)। তার ঠিক মাঝে একটি সুন্দর গোল বৃত্ত আঁকো (টুকটুকে লাল রঙ)।" }
        ],
        keyVocabulary: [{ word: "জাতীয় পতাকা", meaning: "দেশের সার্বভৌমত্বের প্রতীক" }],
        funFact: "আমাদের পতাকার সবুজ মানে বাংলার শ্যামল প্রকৃতি, আর লাল মানে উদীয়মান সূর্য!",
        practiceQuestions: [
          { question: "বাংলাদেশের জাতীয় পতাকার বৃত্তটির রঙ কী?", options: ["টুকটুকে লাল", "হলুদ", "নীল", "সাদা"], correctAnswer: "টুকটুকে লাল", explanation: "সবুজের মাঝে লাল বৃত্ত।" }
        ]
      },
      {
        title: "পাঠ ২: মিষ্টি আপেল ও রঙিন মাছ আঁকা",
        term: "midTerm",
        learningObjective: "সহজ বক্ররেখা দিয়ে আপেল ও পানির মাছ আঁকা ও রঙ করা।",
        mainContent: [
          { heading: "মাছ ও আপেল", text: "একটি গোল করে উপরে ছোট বোঁটা দিলে আপেল হয়। ডিম্বাকার দাগে লেজ ও ডানা জুড়লে মাছ হয়।" }
        ],
        keyVocabulary: [{ word: "পাখনা", meaning: "মাছের সাঁতার কাটার পাখা" }],
        funFact: "মাছ পানির নিচে চোখ খোলা রেখেই ঘুমায়!",
        practiceQuestions: [
          { question: "মাছ কিসের সাহায্যে পানিতে সাঁতার কাটে?", options: ["পাখনা বা লেজ", "পা", "নাক", "কান"], correctAnswer: "পাখনা বা লেজ", explanation: "পাখনা দিয়ে মাছ পানিতে সাঁতার কাটে।" }
        ]
      },
      {
        title: "পাঠ ৩: মিষ্টি আম ও একটি সুন্দর গ্রাম্য কুঁড়েঘর",
        term: "finalTerm",
        learningObjective: "ত্রিভুজ দিয়ে ঘরের চাল ও আয়তক্ষেত্র দিয়ে দেয়াল এঁকে কুঁড়েঘর বানানো।",
        mainContent: [
          { heading: "কুঁড়েঘর আঁকা", text: "উপরে একটি ত্রিভুজ আঁকো ঘরের চালের জন্য। নিচে একটি চারকোনা বাক্স আঁকো। পাশে একটি ছোট দরজা দাও!" }
        ],
        keyVocabulary: [{ word: "কুঁড়েঘর", meaning: "গ্রামের ছোট ছনের বা মাটির ঘর" }],
        funFact: "কুঁড়েঘরের চালের জন্য খড় বা টিন ব্যবহার করা হয়!",
        practiceQuestions: [
          { question: "ঘরের চাল আঁকতে কোন জ্যামিতিক রূপ সবচেয়ে সহজ?", options: ["ত্রিভুজ", "বৃত্ত", "বিন্দু", "রেখা"], correctAnswer: "ত্রিভুজ", explanation: "ত্রিভুজ দিয়ে সুন্দর চাল আঁকা যায়।" }
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 🌱 KG (KINDERGARTEN)
  // --------------------------------------------------------------------------
  kg: {
    bangla: [
      {
        title: "পাঠ ১: স্বরবর্ণ ও ব্যঞ্জনবর্ণের সঠিক রূপ ও উচ্চারণ",
        term: "midTerm",
        learningObjective: "স্বরবর্ণ (অ–ঔ) ও ব্যঞ্জনবর্ণের (ক–হ) পূর্ণাঙ্গ রূপ ও ধ্বনি বোঝা।",
        warmUp: "বর্ণমালার সঠিক উচ্চারণ জানলে বানান কখনো ভুল হয় না!",
        mainContent: [
          { heading: "বর্ণমালার পূর্ণাঙ্গ রূপ", text: "বাংলায় ১১টি স্বরবর্ণ এবং ৩৯টি ব্যঞ্জনবর্ণ মিলিয়ে মোট ৫০টি বর্ণ রয়েছে।" },
          { heading: "মাত্রা চেনা", text: "পূর্ণমাত্রা, অর্ধমাত্রা ও মাত্রাহীন বর্ণ চিনে রাখা খুব দরকার।" }
        ],
        keyVocabulary: [
          { word: "মাত্রা", meaning: "বর্ণের উপরের সোজা রেখা" },
          { word: "বর্ণমালা", meaning: "ভাষার সব অক্ষরের সুশৃঙ্খল সমষ্টি" }
        ],
        funFact: "বাংলা বর্ণমালায় মাত্রাহীন বর্ণ আছে ১০টি!",
        practiceQuestions: [
          { question: "বাংলায় মোট কয়টি স্বরবর্ণ রয়েছে?", options: ["১১টি", "৭টি", "৩৯টি", "৫০টি"], correctAnswer: "১১টি", explanation: "বাংলায় ১১টি স্বরবর্ণ আছে।" }
        ]
      },
      {
        title: "পাঠ ২: কারচিহ্ন ছাড়া সহজ শব্দ গঠন (পৃ ১৪–১৭)",
        term: "midTerm",
        learningObjective: "কোনো কারচিহ্ন ছাড়া দুই ও তিন অক্ষরের অর্থপূর্ণ শব্দ তৈরি করা।",
        mainContent: [
          { heading: "দুই বর্ণের শব্দ", text: "ক + ল = কল। ব + ই = বই। ঘ + র = ঘর। জ + ল = জল। ফ + ল = ফল।" },
          { heading: "তিন বর্ণের শব্দ", text: "ক + ল + ম = কলম। শ + প + থ = শপথ। ন + র + ম = নরম। গ + র + ম = গরম।" }
        ],
        keyVocabulary: [
          { word: "শপথ", meaning: "দৃঢ় প্রতিজ্ঞা" },
          { word: "কলম", meaning: "লেখার সুন্দর উপকরণ" }
        ],
        funFact: "কারচিহ্ন ছাড়াও শত শত সুন্দর বাংলা শব্দ লেখা যায়!",
        practiceQuestions: [
          { question: "ক + ল + ম মিলে কোন শব্দটি হয়?", options: ["কলম", "কদম", "বই", "ফল"], correctAnswer: "কলম", explanation: "ক + ল + ম = কলম।" }
        ]
      },
      {
        title: "পাঠ ৩: আ-কার (া) ও ই-কার (ি) যোগে শব্দ গঠন",
        term: "midTerm",
        learningObjective: "আ-কার ও হ্রস্ব ই-কার ব্যবহার করে শব্দ পড়া ও লেখা।",
        mainContent: [
          { heading: "আ-কার (া)", text: "ব + া + ব + া = বাবা। ম + া + ম + া = মামা। ছ + া + ত + া = ছাতা।" },
          { heading: "ই-কার (ি)", text: "প + া + খ + ি = পাখি। ড + ি + ম = ডিম। চ + ি + ঠ + ি = চিঠি।" }
        ],
        keyVocabulary: [
          { word: "চিঠি", meaning: "কাউকে পাঠানো লিখিত বার্তা" },
          { word: "ছাতা", meaning: "রোদ ও বৃষ্টি থেকে বাঁচার ছাদ" }
        ],
        funFact: "আ-কার সবসময় বর্ণের ডানপাশে বসে!",
        practiceQuestions: [
          { question: "'বাবা' শব্দে কোন কারচিহ্নটি রয়েছে?", options: ["আ-কার (া)", "ই-কার (ি)", "উ-কার (ু)", "এ-কার (ে)"], correctAnswer: "আ-কার (া)", explanation: "ব + া + ব + া = বাবা।" }
        ]
      },
      {
        title: "পাঠ ৪: ঈ-কার (ী) ও উ-কার (ু) যোগে শব্দ গঠন",
        term: "midTerm",
        learningObjective: "দীর্ঘ ঈ-কার ও হ্রস্ব উ-কার দিয়ে শব্দ গঠন করা।",
        mainContent: [
          { heading: "ঈ-কার (ী)", text: "ন + দ + ী = নদী। ত + ী + র = তীর। গ + ী + ত = গীত (গান)।" },
          { heading: "উ-কার (ু)", text: "ফ + ু + ল = ফুল। দ + ু + ধ = দুধ। ম + ু + খ = মুখ। খ + ু + ক + ি = খুকি।" }
        ],
        keyVocabulary: [
          { word: "নদী", meaning: "প্রাকৃতিক বহমান জলধারা" },
          { word: "গীত", meaning: "মধুর গান" }
        ],
        funFact: "বাংলাদেশে প্রায় ৭০০-র বেশি নদী ছড়িয়ে রয়েছে!",
        practiceQuestions: [
          { question: "'নদী' শব্দের শেষে কোন কারচিহ্ন আছে?", options: ["ঈ-কার (ী)", "আ-কার (া)", "উ-কার (ু)", "ঐ-কার (ৈ)"], correctAnswer: "ঈ-কার (ী)", explanation: "ন + দ + ী = নদী।" }
        ]
      },
      {
        title: "পাঠ ৫: সুন্দর পাখি ও সুস্বাদু ফলের নাম",
        term: "midTerm",
        learningObjective: "আমাদের প্রিয় পাখি ও ফলগুলোর নাম সঠিকভাবে লেখা।",
        mainContent: [
          { heading: "পাখিদের নাম", text: "দোয়েল, টিয়া, ময়না, চড়ুই, কোকিল, বক।" },
          { heading: "ফলের নাম", text: "আম, জাম, কাঁঠাল, লিচু, কলা, পেঁপে, ডালিম।" }
        ],
        keyVocabulary: [{ word: "ডালিম", meaning: "ভেতরে লাল মুক্তোর দানার মতো মিষ্টি ফল" }],
        funFact: "দোয়েল পাখির শরীরে সাদা ও কালো রঙের চমৎকার নকশা থাকে!",
        practiceQuestions: [
          { question: "কোনটি আমাদের জাতীয় ফল?", options: ["কাঁঠাল", "আম", "পেঁপে", "লিচু"], correctAnswer: "কাঁঠাল", explanation: "কাঁঠাল বাংলাদেশের জাতীয় ফল।" }
        ]
      },
      {
        title: "পাঠ ৬: ছড়া পাঠ — মামার বাড়ি ও আতা গাছে তোতা পাখি",
        term: "midTerm",
        learningObjective: "ছন্দের তালে মিষ্টি সুরে মামার বাড়ি আবৃত্তি করা।",
        mainContent: [
          { heading: "মামার বাড়ি (জসীমউদ্দীন)", text: "আয় ছেলেরা, আয় মেয়েরা, ফুল তুলিতে যাই, ফুলের মালা গলায় দিয়ে মামার বাড়ি যাই। ঝড়ের দিনে মামার দেশে আম কুড়াতে সুখ, পাকা জামের মধুর রসে রঙিন করি মুখ।" }
        ],
        keyVocabulary: [{ word: "আম কুড়ানো", meaning: "ঝড়ে পড়া আম কুড়িয়ে নেওয়া" }],
        funFact: "পল্লীকবি জসীমউদ্দীন এই মিষ্টি ছড়াটি লিখেছিলেন!",
        practiceQuestions: [
          { question: "ঝড়ের দিনে মামার দেশে কী কুড়াতে সুখ?", options: ["আম কুড়াতে", "ফুল তুলতে", "মাছ ধরতে", "পাতা কুড়াতে"], correctAnswer: "আম কুড়াতে", explanation: "ঝড়ের দিনে মামার দেশে আম কুড়াতে সুখ!" }
        ]
      },
      {
        title: "পাঠ ৭: ছড়া পাঠ — আমাদের ছোট নদী ও আমার পণ",
        term: "midTerm",
        learningObjective: "আমাদের ছোট নদী ও আমার পণ ছড়া আবৃত্তি করা।",
        mainContent: [
          { heading: "আমাদের ছোট নদী (রবীন্দ্রনাথ ঠাকুর)", text: "আমাদের ছোট নদী চলে বাঁকে বাঁকে, বৈশাখ মাসে তার হাঁটু জল থাকে। পার হয়ে যায় গোরু, পার হয় গাড়ি, দুই ধার উঁচু তার, ঢালু তার পাড়ি।" },
          { heading: "আমার পণ (মদনমোহন তর্কালঙ্কার)", text: "সকালে উঠিয়া আমি মনে মনে বলি, সারা দিন আমি যেন ভালো হয়ে চলি। আদেশ করেন যাহা মোর গুরুজনে, আমি যেন সেই কাজ করি ভালো মনে।" }
        ],
        keyVocabulary: [{ word: "গুরুজন", meaning: "পিতা-মাতা, শিক্ষক ও বয়োজ্যেষ্ঠ শ্রদ্ধেয় ব্যক্তি" }],
        funFact: "সকালে ভালো প্রতিজ্ঞা করলে সারাদিন মন ভালো থাকে!",
        practiceQuestions: [
          { question: "বৈশাখ মাসে ছোট নদীতে কতটুকু জল থাকে?", options: ["হাঁটু জল", "গলা জল", "কোমর জল", "জল থাকে না"], correctAnswer: "হাঁটু জল", explanation: "বৈশাখ মাসে তার হাঁটু জল থাকে।" }
        ]
      },
      {
        title: "পাঠ ৮: ঊ-কার (ূ) ও ঋ-কার (ৃ) যোগে শব্দ গঠন",
        term: "finalTerm",
        learningObjective: "ঊ-কার ও ঋ-কার দিয়ে নতুন শব্দ শেখা।",
        mainContent: [
          { heading: "ঊ-কার (ূ)", text: "ম + ূ + ল = মূল। স + ূ + র + ্ + য = সূর্য। ক + ূ + প = কূপ।" },
          { heading: "ঋ-কার (ৃ)", text: "ম + ৃ + গ = মৃগ (হরিণ)। গ + ৃ + হ = গৃহ (ঘর)। ত + ৃ + ণ = তৃণ (ঘাস)।" }
        ],
        keyVocabulary: [
          { word: "মৃগ", meaning: "হরিণ" },
          { word: "গৃহ", meaning: "ঘর বা বাড়ি" }
        ],
        funFact: "মৃগ মানে বনের সুন্দর মায়াবী হরিণ!",
        practiceQuestions: [
          { question: "'মৃগ' শব্দের অর্থ কী?", options: ["হরিণ", "বাঘ", "পাখি", "হাতি"], correctAnswer: "হরিণ", explanation: "মৃগ মানে হরিণ।" }
        ]
      },
      {
        title: "পাঠ ৯: এ-কার (ে) ও ঐ-কার (ৈ) যোগে শব্দ গঠন",
        term: "finalTerm",
        learningObjective: "এ-কার ও ঐ-কার ব্যবহার করে শব্দ তৈরি করা।",
        mainContent: [
          { heading: "এ-কার (ে)", text: "ম + ে + ঘ = মেঘ। দ + ে + শ = দেশ। ত + ে + ল = তেল।" },
          { heading: "ঐ-কার (ৈ)", text: "স + ৈ + ন + ি + ক = সৈনিক। ব + ৈ + শ + া + খ = বৈশাখ। ত + ৈ + র + ী = তৈরী।" }
        ],
        keyVocabulary: [{ word: "সৈনিক", meaning: "দেশ রক্ষা করেন যিনি, বীর যোদ্ধা" }],
        funFact: "বৈশাখ হলো বাংলা বছরের প্রথম মাস!",
        practiceQuestions: [
          { question: "বাংলা বছরের প্রথম মাসের নাম কী?", options: ["বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ"], correctAnswer: "বৈশাখ", explanation: "বৈশাখ বাংলা সনের প্রথম মাস।" }
        ]
      },
      {
        title: "পাঠ ১০: ও-কার (ো) ও ঔ-কার (ৌ) যোগে শব্দ গঠন",
        term: "finalTerm",
        learningObjective: "ও-কার ও ঔ-কার যোগে শব্দ লেখা ও পড়া।",
        mainContent: [
          { heading: "ও-কার (ো)", text: "গ + ো + ল + া + প = গোলাপ। ভ + ো + র = ভোর। ঢ + ো + ল = ঢোল।" },
          { heading: "ঔ-কার (ৌ)", text: "ন + ৌ + ক + া = নৌকা। প + ৌ + ষ = পৌষ। ম + ৌ = মৌ (মধু)।" }
        ],
        keyVocabulary: [
          { word: "নৌকা", meaning: "নদীতে চলার ঐতিহ্যবাহী বাহন" },
          { word: "মৌ", meaning: "মিষ্টি মধু" }
        ],
        funFact: "নৌকা বাংলাদেশের নদীমাতৃক রূপের এক সুন্দর প্রতীক!",
        practiceQuestions: [
          { question: "'নৌকা' শব্দে কোন কারচিহ্নটি রয়েছে?", options: ["ঔ-কার (ৌ)", "ও-কার (ো)", "ঐ-কার (ৈ)", "উ-কার (ু)"], correctAnswer: "ঔ-কার (ৌ)", explanation: "ন + ৌ + ক + া = নৌকা।" }
        ]
      },
      {
        title: "পাঠ ১১: সাতদিনের নাম ও রঙিন রঙের নাম",
        term: "finalTerm",
        learningObjective: "শনিবার থেকে শুক্রবার এবং লাল-নীল রঙের বানান নির্ভুল লেখা।",
        mainContent: [
          { heading: "সাতদিনের নাম", text: "শনিবার, রবিবার, সোমবার, মঙ্গলবার, বুধবার, বৃহস্পতিবার, শুক্রবার।" },
          { heading: "রঙের নাম", text: "লাল, সবুজ, নীল, হলুদ, সাদা, কালো, কমলা, বেগুনি।" }
        ],
        keyVocabulary: [{ word: "ছুটির দিন", meaning: "যেদিন বিদ্যালয়ে বিশ্রাম ও আনন্দের দিন" }],
        funFact: "শুক্রবার আমাদের সাপ্তাহিক ছুটির দিন!",
        practiceQuestions: [
          { question: "বৃহস্পতিবারের পরের দিনটির নাম কী?", options: ["শুক্রবার", "শনিবার", "বুধবার", "রবিবার"], correctAnswer: "শুক্রবার", explanation: "বৃহস্পতিবারের পর শুক্রবার আসে।" }
        ]
      },
      {
        title: "পাঠ ১২: ছড়া পাঠ — আমাদের গ্রাম ও ছুটি",
        term: "finalTerm",
        learningObjective: "আমাদের গ্রাম ও প্রভাতী ছড়াটি সুরে আবৃত্তি করা।",
        mainContent: [
          { heading: "আমাদের গ্রাম (বন্দে আলী মিয়া)", text: "আমাদের ছোট গাঁয়ে ছোট ছোট ঘর, থাকি সেথা সবে মিলে কেহ নাহি পর। পাড়ার সকল ছেলে মোরা ভাই ভাই, একসাথে খেলি আর পাঠশালে যাই।" },
          { heading: "ছুটি (রবীন্দ্রনাথ ঠাকুর)", text: "মেঘের কোলে রোদ হেসেছে বাদল গেছে টুটি, আজ আমাদের ছুটি ও ভাই আজ আমাদের ছুটি!" }
        ],
        keyVocabulary: [{ word: "পাঠশাল", meaning: "লেখাপড়া শেখার বিদ্যালয়" }],
        funFact: "গ্রামে সবাই মিলেমিশে এক পরিবারের মতো থাকে!",
        practiceQuestions: [
          { question: "মেঘের কোলে রোদ হাসলে কী টুটে যায়?", options: ["বাদল (বৃষ্টি)", "রোদ্দুর", "রাত", "বাতাস"], correctAnswer: "বাদল (বৃষ্টি)", explanation: "মেঘের কোলে রোদ হেসেছে বাদল গেছে টুটি।" }
        ]
      }
    ],
    english: [
      {
        title: "Lesson 1: Alphabet Handwriting & Phonics Sounds (A to Z)",
        term: "midTerm",
        learningObjective: "Write neatly in four-line grids and identify all 26 letter sounds.",
        mainContent: [
          { heading: "Phonics & Neat Writing", text: "Every letter has a name and a sound. A says 'ah', B says 'buh', C says 'kuh'." }
        ],
        keyVocabulary: [{ word: "Alphabet", meaning: "The set of 26 letters used to write English" }],
        funFact: "The quick brown fox jumps over the lazy dog has all 26 letters!",
        practiceQuestions: [
          { question: "How many letters are there in the English alphabet?", options: ["26", "24", "28", "30"], correctAnswer: "26", explanation: "There are 26 letters in English." }
        ]
      },
      {
        title: "Lesson 2: Use of 'A' and 'An'",
        term: "midTerm",
        learningObjective: "Learn the golden vowel rule: use 'an' before a, e, i, o, u and 'a' before consonants.",
        mainContent: [
          { heading: "When to use 'An'", text: "Use 'an' before vowel sounds: an apple 🍎, an egg 🥚, an inkpot 🫙, an orange 🍊, an umbrella ☂️." },
          { heading: "When to use 'A'", text: "Use 'a' before consonant sounds: a cat 🐱, a dog 🐶, a fan 🪭, a girl 👧, a pen 🖊️." }
        ],
        keyVocabulary: [
          { word: "Vowel", meaning: "A, E, I, O, U" },
          { word: "Consonant", meaning: "The other 21 letters of the alphabet" }
        ],
        funFact: "Saying 'an apple' is much smoother to speak than 'a apple'!",
        practiceQuestions: [
          { question: "Which article goes before 'apple'?", options: ["an", "a", "the", "in"], correctAnswer: "an", explanation: "An apple because 'a' is a vowel." },
          { question: "Which article goes before 'cat'?", options: ["a", "an", "on", "at"], correctAnswer: "a", explanation: "A cat because 'c' is a consonant." }
        ]
      },
      {
        title: "Lesson 3: Use of 'This' and 'That'",
        term: "midTerm",
        learningObjective: "Use 'This' for nearby objects and 'That' for objects far away.",
        mainContent: [
          { heading: "This (Near)", text: "This is a book (near in my hand). This is an apple." },
          { heading: "That (Far)", text: "That is a bird (far in the sky). That is a star." }
        ],
        keyVocabulary: [
          { word: "Near", meaning: "Close to you" },
          { word: "Far", meaning: "At a distance away" }
        ],
        funFact: "You can point your finger to remember: This is right here, That is over there!",
        practiceQuestions: [
          { question: "For an airplane flying far up in the sky, we say:", options: ["That is a plane", "This is a plane", "These is a plane", "It are a plane"], correctAnswer: "That is a plane", explanation: "We use 'That' for distant objects." }
        ]
      },
      {
        title: "Lesson 4: Use of 'I am' and 'You are'",
        term: "midTerm",
        learningObjective: "Introduce yourself and speak politely to your friend.",
        mainContent: [
          { heading: "I am & You are", text: "I am a boy / girl. I am a student. You are my friend. You are a good teacher." }
        ],
        keyVocabulary: [{ word: "Student", meaning: "A person who is learning at school" }],
        funFact: "Polite words make everyone happy around you!",
        practiceQuestions: [
          { question: "Fill in the blank: I _____ a student.", options: ["am", "is", "are", "be"], correctAnswer: "am", explanation: "I am a student." }
        ]
      },
      {
        title: "Lesson 5: Word Making A to M",
        term: "midTerm",
        learningObjective: "Build and spell three and four-letter words from A to M.",
        mainContent: [
          { heading: "Words A to F", text: "Ant, Ball, Cat, Doll, Egg, Fish." },
          { heading: "Words G to M", text: "Girl, Hat, Ice, Jam, Kite, Leaf, Moon." }
        ],
        keyVocabulary: [{ word: "Doll", meaning: "A beloved toy figure" }],
        funFact: "Kites were invented over two thousand years ago!",
        practiceQuestions: [
          { question: "Spell the word for 🐱:", options: ["Cat", "Cot", "Cut", "Bat"], correctAnswer: "Cat", explanation: "C-A-T spells Cat." }
        ]
      },
      {
        title: "Lesson 6: Rhymes — Cobbler Cobbler & One Two Buckle My Shoe",
        term: "midTerm",
        learningObjective: "Sing traditional KG rhymes with actions and rhythm.",
        mainContent: [
          { heading: "Cobbler, Cobbler", text: "Cobbler, cobbler, mend my shoe, Get it done by half past two; Stitch it up, and stitch it down, Then I'll give you half a crown." }
        ],
        keyVocabulary: [{ word: "Cobbler", meaning: "A person who repairs shoes" }],
        funFact: "Cobblers use special needles and strong thread to fix boots!",
        practiceQuestions: [
          { question: "What does the cobbler mend?", options: ["Shoe", "Shirt", "Hat", "Watch"], correctAnswer: "Shoe", explanation: "Cobbler, cobbler, mend my shoe!" }
        ]
      },
      {
        title: "Lesson 7: Rhymes — Teddy Bear & Ding Dong Bell",
        term: "midTerm",
        learningObjective: "Perform action rhymes with active movement and joyful smiles.",
        mainContent: [
          { heading: "Teddy Bear, Teddy Bear", text: "Teddy bear, teddy bear, turn around! Teddy bear, teddy bear, touch the ground! Teddy bear, teddy bear, tie your shoe! Teddy bear, teddy bear, that will do!" }
        ],
        keyVocabulary: [{ word: "Ground", meaning: "The solid surface of the earth" }],
        funFact: "Action rhymes help your body stretch and stay active!",
        practiceQuestions: [
          { question: "What did the teddy bear touch?", options: ["The ground", "The sky", "The wall", "The bed"], correctAnswer: "The ground", explanation: "Teddy bear, teddy bear, touch the ground!" }
        ]
      },
      {
        title: "Lesson 8: Word Making N to Z",
        term: "finalTerm",
        learningObjective: "Spell words from N to Z correctly.",
        mainContent: [
          { heading: "Words N to S", text: "Net, Owl, Pen, Queen, Ring, Sun." },
          { heading: "Words T to Z", text: "Tree, Urn, Van, Watch, X-ray, Yak, Zebra." }
        ],
        keyVocabulary: [{ word: "Watch", meaning: "A small timepiece worn on the wrist" }],
        funFact: "The Sun gives light to all the planets!",
        practiceQuestions: [
          { question: "What shines brightly during the day?", options: ["Sun", "Moon", "Net", "Pen"], correctAnswer: "Sun", explanation: "S is for Sun." }
        ]
      },
      {
        title: "Lesson 9: Pronouns — He / She, His / Her & My / Your",
        term: "finalTerm",
        learningObjective: "Use 'He' for boys and 'She' for girls with possessive forms.",
        mainContent: [
          { heading: "He and She", text: "He is a boy. His name is Kamal. She is a girl. Her name is Rina." },
          { heading: "My and Your", text: "This is my pencil. That is your bag." }
        ],
        keyVocabulary: [{ word: "Pronoun", meaning: "A word that takes the place of a noun" }],
        funFact: "He and She make sentences shorter and easier to say!",
        practiceQuestions: [
          { question: "For our mother or sister, we use:", options: ["She", "He", "It", "They"], correctAnswer: "She", explanation: "We use 'She' for girls and women." }
        ]
      },
      {
        title: "Lesson 10: Joining Words with 'And'",
        term: "finalTerm",
        learningObjective: "Combine two words or things using the conjunction 'and'.",
        mainContent: [
          { heading: "Joining Pairs", text: "A bat and a ball 🏏. A cup and a saucer ☕. A boy and a girl 👦👧. Bread and butter 🧈." }
        ],
        keyVocabulary: [{ word: "And", meaning: "A joining word that brings two things together" }],
        funFact: "'And' is one of the most common connecting words in English!",
        practiceQuestions: [
          { question: "A pen _____ a paper.", options: ["and", "or", "but", "so"], correctAnswer: "and", explanation: "A pen and a paper." }
        ]
      },
      {
        title: "Lesson 11: 12 Months of the Year & Days of the Week",
        term: "finalTerm",
        learningObjective: "Recite all 12 English months and 7 days with clear spelling.",
        mainContent: [
          { heading: "12 Months", text: "January, February, March, April, May, June, July, August, September, October, November, December." },
          { heading: "7 Days", text: "Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday." }
        ],
        keyVocabulary: [{ word: "Calendar", meaning: "A chart showing days, weeks, and months of the year" }],
        funFact: "July and August are named after Julius Caesar and Augustus Caesar!",
        practiceQuestions: [
          { question: "What is the first month of the year?", options: ["January", "December", "March", "June"], correctAnswer: "January", explanation: "January is the first month." }
        ]
      },
      {
        title: "Lesson 12: Rhymes — Chubby Cheeks & Thirty Days Have September",
        term: "finalTerm",
        learningObjective: "Learn Chubby Cheeks and remember month days with poetry.",
        mainContent: [
          { heading: "Chubby Cheeks", text: "Chubby cheeks, dimple chin, Rosy lips, teeth within, Curly hair, very fair, Eyes are blue, lovely too, Teacher's pet, is that you? Yes, Yes, Yes!" },
          { heading: "Thirty Days", text: "Thirty days have September, April, June, and November; All the rest have thirty-one, Except February alone." }
        ],
        keyVocabulary: [{ word: "Dimple", meaning: "A cute little indentation on the cheek when smiling" }],
        funFact: "February usually has 28 days, but has 29 in a leap year!",
        practiceQuestions: [
          { question: "In Chubby Cheeks, the lips are:", options: ["Rosy", "Blue", "Green", "Yellow"], correctAnswer: "Rosy", explanation: "Rosy lips, teeth within!" }
        ]
      }
    ],
    math: [
      {
        title: "পাঠ ১: সংখ্যা ১ থেকে ৭০ পর্যন্ত গণনা ও লেখা",
        term: "midTerm",
        learningObjective: "১ থেকে ৭০ পর্যন্ত সংখ্যা নির্ভুলভাবে চেনা ও খাতায় লেখা।",
        mainContent: [
          { heading: "গণনা ১ থেকে ৭০", text: "দশ দশ করে এগিয়ে যাও: ১০, ২০, ৩০, ৪০, ৫০, ৬০, ৭০। প্রতি দশের মাঝে ৯টি করে সংখ্যা আছে।" }
        ],
        keyVocabulary: [{ word: "সত্তর", meaning: "সাতটি দশের সমাহার (৭০)" }],
        funFact: "দশকের দলে গণনা করলে বড় বড় সংখ্যা সহজে হিসাব করা যায়!",
        practiceQuestions: [
          { question: "৫৯-এর পরের সংখ্যাটি কত?", options: ["৬০", "৫৮", "৬১", "৭০"], correctAnswer: "৬০", explanation: "৫৯-এর পরে ৬০ আসে।" }
        ]
      },
      {
        title: "পাঠ ২: ছোট ও বড় সংখ্যা নির্ণয় (১ থেকে ৭০)",
        term: "midTerm",
        learningObjective: "দুটি সংখ্যার তুলনা করে ছোট সংখ্যা ও বড় সংখ্যা খুঁজে বের করা।",
        mainContent: [
          { heading: "তুলনার পদ্ধতি", text: "প্রথমে দশকের ঘর দেখো। যে সংখ্যার দশক বড়, সেই সংখ্যাটি বড়। যেমন: ৪২ এবং ৩৫-এর মধ্যে ৪২ বড় কারণ ৪ দশক ৩ দশক থেকে বেশি।" }
        ],
        keyVocabulary: [
          { word: "বৃহত্তর", meaning: "সবচেয়ে বড় বা তুলনামূলক বড়" },
          { word: "ক্ষুদ্রতর", meaning: "তুলনামূলক ছোট" }
        ],
        funFact: "দশকের ঘর দেখলে এক সেকেন্ডেই বড় সংখ্যা চেনা যায়!",
        practiceQuestions: [
          { question: "৫৬ এবং ৬৫ এর মধ্যে কোনটি বড় সংখ্যা?", options: ["৬৫", "৫৬", "উভয়ই সমান", "কোনোটিই নয়"], correctAnswer: "৬৫", explanation: "৬৫ সংখ্যায় ৬টি দশক আছে, তাই ৬৫ বড়।" }
        ]
      },
      {
        title: "পাঠ ৩: গাণিতিক চিহ্ন বসানো — >, < এবং =",
        term: "midTerm",
        learningObjective: "গ্রেটার দ্যান (>), লেস দ্যান (<) এবং ইকুয়াল (=) চিহ্নের সঠিক ব্যবহার।",
        mainContent: [
          { heading: "কুমিরের হাঁ-মুখ নিয়ম", text: "চিহ্নের খোলা মুখ সবসময় বড় সংখ্যার দিকে থাকে! যেমন: ৮ > ৩ (আট তিনের চেয়ে বড়), ১২ < ২৫ (বারো পঁচিশের চেয়ে ছোট), ২০ = ২০ (দুটোই সমান)।" }
        ],
        keyVocabulary: [
          { word: "সমান (=)", meaning: "উভয়পাশে পরিমাণ অবিকল এক" },
          { word: "চিহ্ন", meaning: "গণিতে বোঝানোর বিশেষ রূপ" }
        ],
        funFact: "মনে রাখবে: কুমির সবসময় বেশি মাছ খাওয়ার জন্য বড় সংখ্যার দিকে মুখ হাঁ করে!",
        practiceQuestions: [
          { question: "১৫ _____ ১০ — সঠিক চিহ্ন কোনটি?", options: [">", "<", "=", "+"], correctAnswer: ">", explanation: "১৫ বড়, তাই খোলা মুখ ১৫-এর দিকে (১৫ > ১০)।" }
        ]
      },
      {
        title: "পাঠ ৪: কথায় লেখা ১ থেকে ১৭ (Numbers in Words)",
        term: "midTerm",
        learningObjective: "১ থেকে ১৭ পর্যন্ত বাংলায় ও ইংরেজিতে বানান করে লেখা।",
        mainContent: [
          { heading: "বাংলা ও ইংরেজি বানান", text: "১ = এক (One), ২ = দুই (Two), ৩ = তিন (Three), ৪ = চার (Four), ৫ = পাঁচ (Five), ১০ = দশ (Ten), ১৫ = পনেরো (Fifteen), ১৭ = সতেরো (Seventeen)।" }
        ],
        keyVocabulary: [{ word: "বানান", meaning: "বর্ণ দিয়ে সঠিকভাবে শব্দ লেখা" }],
        funFact: "সংখ্যা কথায় লিখলে ব্যাংক চেক বা রসিদে কখনো জালিয়াতি করা যায় না!",
        practiceQuestions: [
          { question: "'Ten' কোন সংখ্যার ইংরেজি শব্দ?", options: ["১০", "১", "৫", "৭"], correctAnswer: "১০", explanation: "১০ = Ten." }
        ]
      },
      {
        title: "পাঠ ৫: আগে, পরে ও মাঝের সংখ্যা (Before, After, Between)",
        term: "midTerm",
        learningObjective: "১ থেকে ৭০-এর মধ্যে শূন্যস্থান পূরণ ও ধারা নির্ণয়।",
        mainContent: [
          { heading: "অনুশীলন", text: "৩৪-এর আগে ৩৩। ৪৮-এর পরে ৪৯। ৬১ এবং ৬৩-এর মাঝে ৬২।" }
        ],
        keyVocabulary: [{ word: "পূর্ববর্তী", meaning: "ঠিক আগের সংখ্যা" }],
        funFact: "যে কোনো সংখ্যার ঠিক আগের সংখ্যা পেতে ১ বিয়োগ করলেই হয়!",
        practiceQuestions: [
          { question: "৪৯ এবং ৫১ এর মাঝের সংখ্যাটি কত?", options: ["৫০", "৪৮", "৫২", "৫৩"], correctAnswer: "৫০", explanation: "৪৯, ৫০, ৫১।" }
        ]
      },
      {
        title: "পাঠ ৬: সহজ নামতা — ০, ১ ও ২ এর গুণের নামতা",
        term: "midTerm",
        learningObjective: "গুণ কীভাবে একই সংখ্যা বারবার যোগ করা তা বোঝা এবং নামতা শেখা।",
        mainContent: [
          { heading: "২-এর নামতা", text: "২ × ১ = ২, ২ × ২ = ৪, ২ × ৩ = ৬, ২ × ৪ = ৮, ২ × ৫ = ১০, ২ × ৬ = ১২, ২ × ৭ = ১৪, ২ × ৮ = ১৬, ২ × ৯ = ১৮, ২ × ১০ = ২০।" }
        ],
        keyVocabulary: [{ word: "গুণ", meaning: "বারবার একই সংখ্যা যোগ করার দ্রুত নিয়ম" }],
        funFact: "যেকোনো সংখ্যাকে ০ দিয়ে গুণ করলে উত্তর সবসময় ০ হয়!",
        practiceQuestions: [
          { question: "২ × ৪ = কত?", options: ["৮", "৬", "১০", "৪"], correctAnswer: "৮", explanation: "চার দুগুণে আট (২ × ৪ = ৮)।" }
        ]
      },
      {
        title: "পাঠ ৭: সংখ্যা ৭১ থেকে ১০০ পর্যন্ত গণনা ও সাজানো",
        term: "finalTerm",
        learningObjective: "৭১ থেকে ১০০ পর্যন্ত সংখ্যা চেনা ও ছোট থেকে বড় সাজানো।",
        mainContent: [
          { heading: "শতক জয়", text: "৭১ থেকে ৮০, ৮১ থেকে ৯০, ৯১ থেকে ১০০। ১০০ হলো তিন অঙ্কের প্রথম সংখ্যা (এক শতক)!" }
        ],
        keyVocabulary: [{ word: "শতক", meaning: "১০০ বা দশটি দশের বড় দল" }],
        funFact: "১০০ রানে ক্রিকেটে ব্যাটসম্যান সেঞ্চুরি করেন!",
        practiceQuestions: [
          { question: "৯৯-এর ঠিক পরের সংখ্যাটি কত?", options: ["১০০", "৯৮", "১০১", "৯০"], correctAnswer: "১০০", explanation: "৯৯-এর পর ১০০ আসে।" }
        ]
      },
      {
        title: "পাঠ ৮: পাশাপাশি ও উপর-নিচ সহজ যোগ (Addition)",
        term: "finalTerm",
        learningObjective: "একক ও দশকের সহজ যোগফল বের করা।",
        mainContent: [
          { heading: "যোগের আনন্দ", text: "৪ + ৩ = ৭। ১২ + ৫ = ১৭। দাগ টেনে বা আঙুল গুনে সহজে যোগ করো।" }
        ],
        keyVocabulary: [{ word: "যোগফল", meaning: "সবগুলো বস্তু একত্রে মিলিয়ে মোট যা হয়" }],
        funFact: "যোগ করলে সবসময় জিনিসের পরিমাণ বাড়ে!",
        practiceQuestions: [
          { question: "৫ + ৪ = কত?", options: ["৯", "৮", "৭", "১০"], correctAnswer: "৯", explanation: "৫ + ৪ = ৯।" }
        ]
      },
      {
        title: "পাঠ ৯: উল্টো গণনা ৪০ থেকে ১ পর্যন্ত (Reverse Counting)",
        term: "finalTerm",
        learningObjective: "রকেট উৎক্ষেপণের মতো উল্টো দিকে সংখ্যা গুনে আসা।",
        mainContent: [
          { heading: "কাউন্টডাউন", text: "১০, ৯, ৮, ৭, ৬, ৫, ৪, ৩, ২, ১, ব্লাস্ট অফ! ৪০ থেকে ১ পর্যন্ত উল্টো বলা।" }
        ],
        keyVocabulary: [{ word: "কাউন্টডাউন", meaning: "বড় থেকে ছোটর দিকে উল্টো গণনা" }],
        funFact: "মহাকাশে রকেট পাঠানোর সময় উল্টো গণনা করা হয়!",
        practiceQuestions: [
          { question: "উল্টো গণনায় ১০-এর আগে কোন সংখ্যাটি আসে?", options: ["৯", "১১", "৮", "১২"], correctAnswer: "৯", explanation: "১০, ৯, ৮..." }
        ]
      },
      {
        title: "পাঠ ১০: জ্যামিতিক আকৃতি পরিচিতি — গোলক, কিউব, সিলিন্ডার ও কোণ",
        term: "finalTerm",
        learningObjective: "বাস্তব জীবনের বস্তু দিয়ে ত্রিমাত্রিক আকার চেনা।",
        mainContent: [
          { heading: "আকার চিনি", text: "ফুটবল হলো গোলক (Sphere)। লুডুর ছক্কা হলো কিউব (Cube)। ব্যাটারি বা ড্রাম হলো সিলিন্ডার (Cylinder)। আইসক্রিমের ঠোঙা হলো কোণ (Cone)।" }
        ],
        keyVocabulary: [
          { word: "গোলক", meaning: "চারদিকে সমান গোল কঠিন রূপ" },
          { word: "কিউব", meaning: "ছয়টি সমান চারকোনা পাশওয়ালা আকৃতি" }
        ],
        funFact: "লুডুর ছক্কার প্রতিটি পাশ একদম নিখুঁত বর্গাকার!",
        practiceQuestions: [
          { question: "লুডুর ছক্কার আকৃতি কেমন?", options: ["কিউব (ঘনক)", "গোলক", "সিলিন্ডার", "ত্রিভুজ"], correctAnswer: "কিউব (ঘনক)", explanation: "লুডুর ছক্কা একটি কিউব।" }
        ]
      },
      {
        title: "পাঠ ১১: ঘড়ি ও সময় দেখা (Reading Clock)",
        term: "finalTerm",
        learningObjective: "ঘড়ির ছোট কাঁটা ও বড় কাঁটা দেখে পূর্ণ ঘণ্টা বলা।",
        mainContent: [
          { heading: "ঘড়ির কাঁটা", text: "ছোট কাঁটা ঘণ্টার সময় নির্দেশ করে। বড় কাঁটা মিনিটের সময় নির্দেশ করে। বড় কাঁটা ১২-তে আর ছোট কাঁটা ৩-এ থাকলে বাজে ঠিক ৩টা।" }
        ],
        keyVocabulary: [
          { word: "ঘণ্টা", meaning: "সময়ের পরিমাপ (৬০ মিনিট)" },
          { word: "মিনিট", meaning: "সময়ের ছোট পরিমাপ" }
        ],
        funFact: "দিনে মোট ২৪ ঘণ্টা সময় থাকে!",
        practiceQuestions: [
          { question: "ঘড়ির ছোট কাঁটা ৪-এ এবং বড় কাঁটা ১২-তে থাকলে কয়টা বাজে?", options: ["৪টা", "১২টা", "৫টা", "৩টা"], correctAnswer: "৪টা", explanation: "ছোট কাঁটা যেখানে থাকে ততটা বাজে (৪টা)।" }
        ]
      },
      {
        title: "পাঠ ১২: নামতা — ৩, ৪ ও ৫ এর গুণের নামতা",
        term: "finalTerm",
        learningObjective: "৩, ৪ ও ৫ এর নামতা মুখস্থ ও প্রয়োগ করা।",
        mainContent: [
          { heading: "৫-এর সহজ নামতা", text: "৫ × ১ = ৫, ৫ × ২ = ১০, ৫ × ৩ = ১৫, ৫ × ৪ = ২০, ৫ × ৫ = ২৫, ৫ × ৬ = ৩০, ৫ × ৭ = ৩৫, ৫ × ৮ = ৪০, ৫ × ৯ = ৪৫, ৫ × ১০ = ৫০।" }
        ],
        keyVocabulary: [{ word: "নামতা", meaning: "গুণের সুন্দর ছন্দবদ্ধ তালিকা" }],
        funFact: "৫-এর নামতার সব উত্তরের শেষে ০ অথবা ৫ থাকে!",
        practiceQuestions: [
          { question: "৫ × ৩ = কত?", options: ["১৫", "১০", "২০", "১২"], correctAnswer: "১৫", explanation: "তিন পাঁচে পনেরো (৫ × ৩ = ১৫)।" }
        ]
      },
      {
        title: "পাঠ ১৩: কথায় লেখা ১৮ থেকে ৩০ এবং জোড়-বিজোড় সংখ্যা",
        term: "finalTerm",
        learningObjective: "কথায় লেখা এবং ২, ৪, ৬, ৮ জোড় সংখ্যা চেনা।",
        mainContent: [
          { heading: "জোড় ও বিজোড়", text: "জোড় (Even): যাদের জোড়া বাঁধা যায় — ২, ৪, ৬, ৮, ১০। বিজোড় (Odd): ১, ৩, ৫, ৭, ৯।" }
        ],
        keyVocabulary: [
          { word: "জোড়", meaning: "দুটো দুটো করে ভাগ করা যায়" },
          { word: "বিজোড়", meaning: "জোড়া বাঁধার পর একটি বাকি থাকে" }
        ],
        funFact: "জোতা বা মোজা আমরা সবসময় জোড়ায় পরি!",
        practiceQuestions: [
          { question: "কোন সংখ্যাটি জোড় সংখ্যা?", options: ["৬", "৩", "৫", "৭"], correctAnswer: "৬", explanation: "৬ একটি জোড় সংখ্যা।" }
        ]
      }
    ],
    science: [
      {
        title: "পাঠ ১: পরিবার ও সুন্দর পরিবেশ",
        term: "midTerm",
        learningObjective: "পিতা-মাতা, ভাই-বোন ও চারপাশের পরিবেশের যত্ন নেওয়া।",
        mainContent: [
          { heading: "আমাদের পরিবার", text: "মা, বাবা, ভাই, বোন নিয়ে আমাদের পরিবার। পরিবারে সবাই মিলেমিশে কাজ করলে ঘর আনন্দে ভরে ওঠে।" }
        ],
        keyVocabulary: [{ word: "পরিবেশ", meaning: "আমাদের চারপাশের গাছপালা, মাটি, বাতাস ও মানুষ" }],
        funFact: "গাছপালা লাগালে আমাদের চারপাশের বাতাস নির্মল ও শীতল থাকে!",
        practiceQuestions: [
          { question: "পরিবেশ সুন্দর রাখতে আমাদের কী লাগানো উচিত?", options: ["গাছপালা", "আবর্জনা", "প্লাস্টিক", "পাথর"], correctAnswer: "গাছপালা", explanation: "গাছপালা পরিবেশ পরিষ্কার ও সবুজ রাখে।" }
        ]
      },
      {
        title: "পাঠ ২: উদ্ভিদ, ফুল ও গাছের জীবন",
        term: "midTerm",
        learningObjective: "গাছের মূল, কাণ্ড, পাতা, ফুল ও ফলের পরিচয়।",
        mainContent: [
          { heading: "গাছের অংশসমূহ", text: "মূল মাটির নিচে থাকে ও পানি টানে। কাণ্ড গাছকে সোজা দাঁড় করিয়ে রাখে। পাতায় গাছ খাবার তৈরি করে।" }
        ],
        keyVocabulary: [
          { word: "মূল (শিকড়)", meaning: "মাটির নিচে গাছের ভিত্তি" },
          { word: "সালোকসংশ্লেষণ", meaning: "সূর্যের আলোয় পাতার খাবার তৈরির পদ্ধতি" }
        ],
        funFact: "গাছও আমাদের মতো জল পান করে এবং সূর্যের আলোয় খাবার বানায়!",
        practiceQuestions: [
          { question: "গাছের কোন অংশ মাটির নিচে থাকে?", options: ["মূল বা শিকড়", "পাতা", "ফুল", "ফল"], correctAnswer: "মূল বা শিকড়", explanation: "শিকড় মাটির নিচে থাকে।" }
        ]
      },
      {
        title: "পাঠ ৩: গৃহপালিত ও খামারের পশু",
        term: "midTerm",
        learningObjective: "গরু, ছাগল, ভেড়া, ঘোড়া ইত্যাদির উপকারিতা জানা।",
        mainContent: [
          { heading: "উপকারী পশুপাখি", text: "গরু ও ছাগল আমাদের দুধ দেয়। ভেড়া আমাদের পশম দেয় যা দিয়ে গরম সোয়েটার বানানো হয়।" }
        ],
        keyVocabulary: [{ word: "পশম", meaning: "ভেড়ার নরম লোম যা দিয়ে সুতা তৈরি হয়" }],
        funFact: "দুধে প্রচুর ক্যালসিয়াম থাকে যা দাঁত ও হাড়কে মজবুত করে!",
        practiceQuestions: [
          { question: "শীতের সোয়েটার বানাতে কোন প্রাণীর পশম কাজে লাগে?", options: ["ভেড়া", "বিড়াল", "ঘোড়া", "গরু"], correctAnswer: "ভেড়া", explanation: "ভেড়ার পশম থেকে উলের কাপড় হয়।" }
        ]
      },
      {
        title: "পাঠ ৪: মানবদেহ, পঞ্চ ইন্দ্রিয় ও ব্যক্তিগত পরিচ্ছন্নতা",
        term: "midTerm",
        learningObjective: "স্বাস্থ্যবিধি মেনে প্রতিদিন হাত ধোয়া, দাঁত মাজা ও নখ পরিষ্কার রাখা।",
        mainContent: [
          { heading: "স্বাস্থ্যবিধি", text: "খাওয়ার আগে সাবান দিয়ে ২০ সেকেন্ড হাত ধোবে। দিনে দুইবার দাঁত ব্রাশ করবে — সকালে ও রাতে ঘুমানোর আগে।" }
        ],
        keyVocabulary: [{ word: "জীবাণু", meaning: "অদৃশ্য ক্ষুদ্র ক্ষতিকর পোকা যা রোগ তৈরি করে" }],
        funFact: "সাবান দিয়ে হাত ধুলে সব ক্ষতিকর জীবাণু ধুয়ে যায়!",
        practiceQuestions: [
          { question: "দিনে কয়বার দাঁত ব্রাশ করা ভালো?", options: ["২ বার", "১ বার", "৫ বার", "ব্রাশ না করলেও হয়"], correctAnswer: "২ বার", explanation: "সকালে ও রাতে ঘুমানোর আগে দিনে ২ বার।" }
        ]
      },
      {
        title: "পাঠ ৫: পুষ্টিকর খাবার ও স্বাস্থ্যকর অভ্যাস",
        term: "midTerm",
        learningObjective: "ফলমূল, ডিম, শাকসবজি, দুধ ইত্যাদি সুষম খাবারের গুরুত্ব।",
        mainContent: [
          { heading: "সুষম খাবার", text: "জাঙ্ক ফুড বা চিপস-কোমল পানীয় স্বাস্থ্যের ক্ষতি করে। ডিম, দুধ, ভাত, মাছ ও শাকসবজি শরীরকে সবল করে।" }
        ],
        keyVocabulary: [{ word: "সুষম খাদ্য", meaning: "যে খাবারে সব প্রয়োজনীয় পুষ্টি উপাদান থাকে" }],
        funFact: "প্রতিদিন একটি করে ডিম খেলে দেহের পেশি ও শক্তি বৃদ্ধি পায়!",
        practiceQuestions: [
          { question: "কোন খাবারটি স্বাস্থ্যের জন্য সবচেয়ে ভালো?", options: ["দুধ ও ফলমূল", "চিপস", "কোমল পানীয়", "খোলা রাস্তার বাসি খাবার"], correctAnswer: "দুধ ও ফলমূল", explanation: "দুধ ও তাজা ফল পুষ্টিকর খাবার।" }
        ]
      },
      {
        title: "পাঠ ৬: শাকসবজি ও ফলমূলের পুষ্টিগুণ",
        term: "finalTerm",
        learningObjective: "শাকসবজি ও রঙিন ফলের ভিটামিন সম্পর্কে জানা।",
        mainContent: [
          { heading: "ভিটামিনের ভাণ্ডার", text: "লেবু ও কমলায় ভিটামিন সি থাকে যা সর্দি-কাশি থেকে রক্ষা করে। গাজর ও পাকা পেঁপেতে ভিটামিন এ থাকে যা চোখের জ্যোতি বাড়ায়।" }
        ],
        keyVocabulary: [{ word: "ভিটামিন", meaning: "শরীরের রোগ প্রতিরোধ করার বিশেষ উপাদান" }],
        funFact: "ভিটামিন সি আমাদের ত্বকের ক্ষত দ্রুত সারিয়ে তোলে!",
        practiceQuestions: [
          { question: "লেবু ও কমলায় কোন ভিটামিন প্রচুর পরিমাণে থাকে?", options: ["ভিটামিন সি", "ভিটামিন ডি", "ভিটামিন বি", "লোহা"], correctAnswer: "ভিটামিন সি", explanation: "টক ফলে ভিটামিন সি থাকে।" }
        ]
      },
      {
        title: "পাঠ ৭: প্রাণী ও তাদের আদুরে ছানারা",
        term: "finalTerm",
        learningObjective: "প্রাণী ও তাদের বাচ্চাদের নাম (Cat-Kitten, Dog-Puppy, Cow-Calf)।",
        mainContent: [
          { heading: "প্রাণীর সন্তান", text: "বিড়ালের ছানাকে কিটেন (Kitten) বলে। কুকুরের ছানাকে পাপি (Puppy) বলে। গরুর বাছুরকে কাফ (Calf) বলে। হাঁসের ছানাকে ডাকলিং (Duckling) বলে।" }
        ],
        keyVocabulary: [{ word: "বাছুর", meaning: "গরুর ছোট বাচ্চা" }],
        funFact: "হাঁসের ছানারা জন্মের কয়েক ঘণ্টার মধ্যেই মায়ের সাথে সাঁতার কাটতে পারে!",
        practiceQuestions: [
          { question: "বিড়ালের বাচ্চাকে ইংরেজিতে কী বলা হয়?", options: ["Kitten", "Puppy", "Calf", "Cub"], correctAnswer: "Kitten", explanation: "A baby cat is called a Kitten." }
        ]
      },
      {
        title: "পাঠ ৮: জলজ প্রাণী ও মাছের রাজ্য",
        term: "finalTerm",
        learningObjective: "মাছ, কচ্ছপ, তিমি, ডলফিনের জীবনধারা বোঝা।",
        mainContent: [
          { heading: "পানির জীব", text: "মাছ ফুলকার সাহায্যে পানিতে শ্বাস নেয়। তিমি ও ডলফিন পানির ওপরে এসে ফুসফুস দিয়ে বাতাস নেয়।" }
        ],
        keyVocabulary: [{ word: "ফুলকা", meaning: "মাছের শ্বাস নেওয়ার বিশেষ অঙ্গ" }],
        funFact: "ডলফিন খুব বুদ্ধিমান এবং মানুষের খুব ভালো বন্ধু!",
        practiceQuestions: [
          { question: "মাছ কিসের সাহায্যে পানির নিচে শ্বাস নেয়?", options: ["ফুলকা", "ফুসফুস", "লেজ", "পাখনা"], correctAnswer: "ফুলকা", explanation: "ফুলকার সাহায্যে মাছ শ্বাস নেয়।" }
        ]
      },
      {
        title: "পাঠ ৯: বন্য প্রাণী ও সুন্দরবনের ঐতিহ্য",
        term: "finalTerm",
        learningObjective: "সুন্দরবনের রয়েল বেঙ্গল টাইগার ও হরিণ সংরক্ষণ।",
        mainContent: [
          { heading: "বনের জীববৈচিত্র্য", text: "সুন্দরবনে সুন্দরী গাছ, কেওড়া গাছ এবং নানা রঙের পাখি বাস করে। আমাদের বন্য প্রাণী রক্ষা করা উচিত।" }
        ],
        keyVocabulary: [{ word: "ম্যানগ্রোভ", meaning: "লবণাক্ত পানিতে বেড়ে ওঠা উপকূলীয় বন" }],
        funFact: "সুন্দরবন বিশ্ব ঐতিহ্যের একটি অনন্য সম্পদ!",
        practiceQuestions: [
          { question: "রয়েল বেঙ্গল টাইগার কোন বনে বাস করে?", options: ["সুন্দরবন", "শালবন", "ভাওয়াল বন", "মধুপুর বন"], correctAnswer: "সুন্দরবন", explanation: "সুন্দরবন রয়েল বেঙ্গল টাইগারের আসল বাড়ি।" }
        ]
      },
      {
        title: "পাঠ ১০: বাংলাদেশের ছয় ঋতু ও আবহাওয়া",
        term: "finalTerm",
        learningObjective: "ঋতু পরিবর্তনের কারণ এবং আবহাওয়ার ধরন বোঝা।",
        mainContent: [
          { heading: "ছয় ঋতু", text: "গ্রীষ্ম (তীব্র রোদ ও মিষ্টি ফল), বর্ষা (ঝুম বৃষ্টি ও কদম ফুল), শরৎ (নীল আকাশ ও কাশফুল), হেমন্ত (নতুন ধানের সুবাস), শীত (কুয়াশা ও পিঠাপুলি), বসন্ত (কোকিলের গান ও নতুন পাতা)।" }
        ],
        keyVocabulary: [{ word: "কাশফুল", meaning: "শরৎকালে নদীর তীরে ফোটা সাদা তুলতুলে ফুল" }],
        funFact: "শরতের নীল আকাশে সাদা মেঘ পেঁজা তুলোর মতো ভেসে বেড়ায়!",
        practiceQuestions: [
          { question: "নদীর তীরে সাদা কাশফুল কোন ঋতুতে ফোটে?", options: ["শরৎকালে", "গ্রীষ্মকালে", "শীতকালে", "বর্ষাকালে"], correctAnswer: "শরৎকালে", explanation: "শরতের অন্যতম সৌন্দর্য কাশফুল।" }
        ]
      }
    ],
    islam: [
      {
        title: "পাঠ ১: মহান আল্লাহর পরিচয় ও সুন্দর সৃষ্টি",
        term: "midTerm",
        learningObjective: "আল্লাহ তায়ালা আমাদের একমাত্র সৃষ্টিকর্তা ও পালনকর্তা তা জানা।",
        mainContent: [
          { heading: "আল্লাহ তায়ালা", text: "আল্লাহ এক ও অদ্বিতীয়। তিনি আকাশ, পৃথিবী, চাঁদ, সূর্য, নদ-নদী এবং আমাদের সৃষ্টি করেছেন।" }
        ],
        keyVocabulary: [{ word: "খালেক", meaning: "সৃষ্টিকর্তা (যিনি সব তৈরি করেছেন)" }],
        funFact: "আল্লাহর সুন্দর সৃষ্টি দেখলে সুবহানাল্লাহ বলতে হয়!",
        practiceQuestions: [
          { question: "আমাদের এবং এই সুন্দর পৃথিবীকে কে সৃষ্টি করেছেন?", options: ["মহান আল্লাহ তায়ালা", "সূর্য", "মানুষ", "চাঁদ"], correctAnswer: "মহান আল্লাহ তায়ালা", explanation: "মহান আল্লাহ তায়ালা সবকিছুর সৃষ্টিকর্তা।" }
        ]
      },
      {
        title: "পাঠ ২: সালাম দেওয়ার শিষ্টাচার ও মর্যাদা",
        term: "midTerm",
        learningObjective: "আসসালামু আলাইকুম বলার নিয়ম ও উত্তর দেওয়া শেখা।",
        mainContent: [
          { heading: "সালামের ফজিলত", text: "কারও সাথে দেখা হলে আগে বলবে: 'আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ' (আপনার উপর শান্তি ও রহমত বর্ষিত হোক)। উত্তরে বলবে: 'ওয়া আলাইকুমুস সালাম ওয়া রাহমাতুল্লাহ'।" }
        ],
        keyVocabulary: [{ word: "সালাম", meaning: "শান্তির দোয়া" }],
        funFact: "যে ব্যক্তি আগে সালাম দেয় সে বেশি সওয়াব পায়!",
        practiceQuestions: [
          { question: "কারও সাথে দেখা হলে আমরা প্রথমে কী বলি?", options: ["আসসালামু আলাইকুম", "শুভ রাত্রি", "ধন্যবাদ", "বিদায়"], correctAnswer: "আসসালামু আলাইকুম", explanation: "দেখা হলেই প্রথমে সালাম দিতে হয়।" }
        ]
      },
      {
        title: "পাঠ ৩: সুন্দর দোয়া — বিসমিল্লাহ ও আলহামদুলিল্লাহ",
        term: "midTerm",
        learningObjective: "যেকোনো ভালো কাজের শুরুতে বিসমিল্লাহ এবং শেষে আলহামদুলিল্লাহ বলা।",
        mainContent: [
          { heading: "দৈনন্দিন দোয়া", text: "খাবার খাওয়ার আগে ও পড়া শুরুর আগে বলবে: 'বিসমিল্লাহির রাহমানির রাহিম'। খাবার খাওয়া শেষে বলবে: 'আলহামদুলিল্লাহ' (সমস্ত প্রশংসা আল্লাহর)।" }
        ],
        keyVocabulary: [{ word: "আলহামদুলিল্লাহ", meaning: "সমস্ত প্রশংসা একমাত্র আল্লাহর" }],
        funFact: "বিসমিল্লাহ বলে কাজ শুরু করলে কাজে বরকত হয়!",
        practiceQuestions: [
          { question: "খাবার খাওয়া শেষে কী বলতে হয়?", options: ["আলহামদুলিল্লাহ", "বিসমিল্লাহ", "আল্লাহু আকবার", "সুবহানাল্লাহ"], correctAnswer: "আলহামদুলিল্লাহ", explanation: "খাবার শেষে আল্লাহর কৃতজ্ঞতায় আলহামদুলিল্লাহ বলি।" }
        ]
      },
      {
        title: "পাঠ ৪: পিতা-মাতার প্রতি শ্রদ্ধা ও ভালোবাসা",
        term: "finalTerm",
        learningObjective: "বাবা-মার কথা মেনে চলা এবং তাদের জন্য দোয়া করা।",
        mainContent: [
          { heading: "বাবা-মায়ের হক", text: "বাবা-মা আমাদের সবচেয়ে বেশি ভালোবাসেন। তাদের সাথে কখনো উচ্চস্বরে কথা বলবে না। সবসময় তাদের সম্মান করবে।" }
        ],
        keyVocabulary: [{ word: "শ্রদ্ধা", meaning: "মনে গভীর সম্মান পোষণ করা" }],
        funFact: "মায়ের পায়ের নিচে সন্তানের জান্নাত রয়েছে!",
        practiceQuestions: [
          { question: "পিতা-মাতার সাথে আমাদের কেমন ব্যবহার করা উচিত?", options: ["সবসময় সম্মান ও ভালোবাসাপূর্ণ", "কড়া সুরে কথা বলা", "তাদের কথা না শোনা", "অমনোযোগ দেওয়া"], correctAnswer: "সবসময় সম্মান ও ভালোবাসাপূর্ণ", explanation: "বাবা-মাকে সবসময় সম্মান ও সেবা করতে হয়।" }
        ]
      },
      {
        title: "পাঠ ৫: সত্যবাদিতা ও সততা",
        term: "finalTerm",
        learningObjective: "কখনো মিথ্যা না বলা এবং সব পরিস্থিতিতে সত্যবাদী থাকা।",
        mainContent: [
          { heading: "সত্যের জয়", text: "আমাদের প্রিয় নবী হযরত মুহাম্মদ (সা.) ছোটবেলা থেকেই কখনো মিথ্যা বলতেন না। সবাই তাঁকে 'আল-আমিন' (বিশ্বস্ত) বলে ডাকতো।" }
        ],
        keyVocabulary: [{ word: "আল-আমিন", meaning: "পরম বিশ্বস্ত ও সত্যবাদী" }],
        funFact: "সত্য মানুষকে মুক্তি দেয়, আর মিথ্যা মানুষকে ধ্বংস করে!",
        practiceQuestions: [
          { question: "প্রিয় নবীজি (সা.)-কে সত্যবাদিতার জন্য কী উপাধি দেওয়া হয়েছিল?", options: ["আল-আমিন", "সুলতান", "আমির", "খতিব"], correctAnswer: "আল-আমিন", explanation: "তিনি ছিলেন সত্যবাদী ও আল-আমিন।" }
        ]
      },
      {
        title: "পাঠ ৬: কালেমা তায়্যিবা ও তার মধুর অর্থ",
        term: "finalTerm",
        learningObjective: "লা ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসুলুল্লাহ মুখস্থ ও অর্থ জানা।",
        mainContent: [
          { heading: "কালেমা তায়্যিবা", text: "'লা ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসুলুল্লাহ' — আল্লাহ ছাড়া কোনো উপাস্য নেই, হযরত মুহাম্মদ (সা.) আল্লাহর প্রেরিত রাসুল।" }
        ],
        keyVocabulary: [{ word: "তায়্যিবা", meaning: "পবিত্র ও উত্তম বাক্য" }],
        funFact: "কালেমা তায়্যিবা হলো ঈমানের মূল ভিত্তি!",
        practiceQuestions: [
          { question: "কালেমা তায়্যিবার অর্থ কী?", options: ["আল্লাহ ছাড়া কোনো উপাস্য নেই", "সূর্য আলো দেয়", "চাঁদ সুন্দর", "গাছপালা আমাদের বন্ধু"], correctAnswer: "আল্লাহ ছাড়া কোনো উপাস্য নেই", explanation: "আল্লাহ ছাড়া কোনো মাবুদ বা উপাস্য নেই।" }
        ]
      }
    ],
    drawing: [
      {
        title: "পাঠ ১: সহজ নৌকা ও পানির ঢেউ আঁকা",
        term: "midTerm",
        learningObjective: "অর্ধবৃত্ত ও সরলরেখা দিয়ে সুন্দর পালতোলা নৌকা আঁকা।",
        mainContent: [
          { heading: "নৌকা আঁকার ধাপ", text: "প্রথমে নৌকার তলদেশ আঁকো। উপরে একটি ত্রিভুজ পাল দাও। নিচে নীল রঙের ঢেউ খেলানো পানির দাগ টানো।" }
        ],
        keyVocabulary: [{ word: "পাল", meaning: "বাতাসের সাহায্যে নৌকা চালানোর কাপড়" }],
        funFact: "পালতোলা নৌকা বাতাসের শক্তিতে ছুটে চলে!",
        practiceQuestions: [
          { question: "নৌকা কিসের ওপর ভেসে চলে?", options: ["পানি বা নদী", "রাস্তা", "গাছ", "আকাশ"], correctAnswer: "পানি বা নদী", explanation: "নৌকা পানিতে ভাসে।" }
        ]
      },
      {
        title: "পাঠ ২: সুন্দর একটি গ্রাম্য বাড়ি আঁকা ও রঙ করা",
        term: "midTerm",
        learningObjective: "জ্যামিতিক রূপ দিয়ে দেয়াল, চাল, দরজা ও জানালা এঁকে রঙ করা।",
        mainContent: [
          { heading: "বাড়ি আঁকার নিয়ম", text: "চাল লাল বা বাদামি রঙ করো। দেয়াল হালকা হলুদ করো। দরজায় খয়েরি রঙ দাও।" }
        ],
        keyVocabulary: [{ word: "জানালা", meaning: "আলো-বাতাস আসার পথ" }],
        funFact: "জানালা দিয়ে ঘরে তাজা মিষ্টি বাতাস আসে!",
        practiceQuestions: [
          { question: "ঘরে আলো-বাতাস আসার জন্য কী থাকে?", options: ["জানালা", "দেয়াল", "ছাদ", "মেঝে"], correctAnswer: "জানালা", explanation: "জানালা দিয়ে আলো-বাতাস ঢোকে।" }
        ]
      },
      {
        title: "পাঠ ৩: লাল গোলাপ ও রঙিন প্রজাপতি আঁকা",
        term: "finalTerm",
        learningObjective: "গোলাকার পাপড়ি ও সুন্দর ডানা এঁকে রঙিন করা।",
        mainContent: [
          { heading: "প্রজাপতি ও ফুল", text: "প্রজাপতির দুই ডানা একদম সমান হয়। ডানায় গোল গোল হলুদ ও নীল ফোঁটা দিয়ে সাজাও!" }
        ],
        keyVocabulary: [{ word: "প্রতিসাম্য", meaning: "দুই পাশ হুবহু একই রকম সমান হওয়া" }],
        funFact: "প্রজাপতির দুই ডানার নকশা একদম এক রকম হয়!",
        practiceQuestions: [
          { question: "প্রজাপতির কয়টি ডানা থাকে?", options: ["৪টি (২ জোড়া)", "২টি", "৬টি", "৮টি"], correctAnswer: "৪টি (২ জোড়া)", explanation: "প্রজাপতির ৪টি রঙিন ডানা থাকে।" }
        ]
      },
      {
        title: "পাঠ ৪: শখের গাড়ি আঁকা ও রঙ করা",
        term: "finalTerm",
        learningObjective: "আয়তক্ষেত্র ও দুটি চাকা দিয়ে সুন্দর খেলনা গাড়ি আঁকা।",
        mainContent: [
          { heading: "গাড়ি আঁকার কৌশল", text: "একটি আয়তাকার দেহ আঁকো। নিচে দুটি কালো গোল চাকা বানাও। সামনে কাচের হেডলাইট আঁকো।" }
        ],
        keyVocabulary: [{ word: "চাকা", meaning: "যানবাহন চলার গোল ঘুরন্ত অংশ" }],
        funFact: "চাকা আবিষ্কারের পর মানুষের যাতায়াত সহজ হয়ে গিয়েছিল!",
        practiceQuestions: [
          { question: "গাড়ির চাকা কেমন আকারের হয়?", options: ["গোলাকার", "ত্রিকোণাকার", "চারকোনা", "ঢেউ খেলানো"], correctAnswer: "গোলাকার", explanation: "চাকা গোল হওয়ার কারণে সহজে ঘোরে।" }
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 🎓 CLASS 1
  // Points to LESSON_CONTENT (defined in content-data.js)
  // --------------------------------------------------------------------------
  class1: (typeof LESSON_CONTENT !== 'undefined' ? LESSON_CONTENT : {})
};

// If LESSON_CONTENT loads afterwards or already loaded, wire it up safely
if(typeof LESSON_CONTENT !== 'undefined'){
  LESSON_CONTENT_BY_LEVEL.class1 = LESSON_CONTENT;
}

window.LESSON_CONTENT_BY_LEVEL = LESSON_CONTENT_BY_LEVEL;
