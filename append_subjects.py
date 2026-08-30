# Append English, Math, Islam, GK, Science, Computer, Moral, Drawing
import json

from build_full_database import bangla, q, vocab, block

# 2. ENGLISH (36 lessons)
english = []

# Units 1-15
eft_units = [
  ("Unit 1 — Greetings and Introductions", "Hello and goodbye greetings", "Greet friends politely with Hello and My name is.", "Hello, Good morning, and Goodbye are polite greetings to start our day.", "greet", "say hello warmly", "morning", "early part of day", "friend", "someone you play with", "Smiling while saying hello is understood in every country!", "What do you say in the morning?", "Good morning", ["Good morning", "Good night", "Goodbye", "Sleep"], "Good morning is used in the morning."),
  ("Unit 2 — Alphabet A to E Sounds and Words", "Letters A, B, C, D, E sounds", "Learn sounds for A, B, C, D, E.", "A is for Apple, B is for Ball, C is for Cat, D is for Dog, E is for Egg.", "sound", "what we hear", "letter", "alphabet symbol", "apple", "sweet red fruit", "Elephants can recognize their own reflections in a mirror!", "Which letter does 'Apple' start with?", "A", ["A", "B", "C", "D"], "Apple starts with letter A."),
  ("Unit 3 — Alphabet F to J Sounds and Words", "Letters F, G, H, I, J sounds", "Discover words for F, G, H, I, J.", "F is for Fish, G is for Grapes, H is for Hen, I is for Ink, J is for Jug.", "grapes", "sweet small fruits", "jug", "water container", "fish", "swims in water", "Frogs drink water through their skin!", "Which word starts with F?", "Fish", ["Fish", "Hen", "Jug", "Grapes"], "Fish starts with F."),
  ("Unit 4 — Alphabet K to O Sounds and Words", "Letters K, L, M, N, O sounds", "Discover words for K, L, M, N, O.", "K is for Kite, L is for Lion, M is for Mango, N is for Nest, O is for Orange.", "kite", "flies in wind", "nest", "home for birds", "mango", "sweet fruit", "Owls can turn their heads almost all the way around!", "Where does a bird lay eggs?", "In a nest", ["In a nest", "In a cup", "In a jug", "In a box"], "Birds build nests for eggs."),
  ("Unit 5 — Alphabet P to T Sounds and Words", "Letters P, Q, R, S, T sounds", "Discover words for P, Q, R, S, T.", "P is for Pencil, Q is for Queen, R is for Rainbow, S is for Sun, T is for Tiger.", "quilt", "warm blanket", "rainbow", "seven colors in sky", "tiger", "striped big cat", "Every tiger has a completely unique stripe pattern!", "What do we write with?", "Pencil", ["Pencil", "Tree", "Ship", "Sun"], "We write with a pencil."),
  ("Unit 6 — Alphabet U to Z and the Full ABC Song", "Letters U, V, W, X, Y, Z", "Complete all 26 letters of the alphabet.", "U is for Umbrella, V is for Vase, W is for Watch, X is for Xylophone, Y is for Yo-yo, Z is for Zebra.", "umbrella", "keeps rain away", "vase", "flower pot", "zebra", "striped animal", "There are 26 letters and 5 vowels in English!", "What protects us from rain?", "Umbrella", ["Umbrella", "Vase", "Watch", "Yo-yo"], "An umbrella keeps us dry."),
  ("Unit 7 — Classroom Commands and Actions", "Classroom polite commands", "Follow polite classroom instructions.", "Stand up, Sit down, Open your book, and Raise your hand are polite commands.", "command", "polite instruction", "listen", "hear carefully", "polite", "kind manners", "Raising hands in class is respected across schools worldwide!", "What do you do before speaking?", "Raise your hand", ["Raise your hand", "Shout", "Run", "Sleep"], "Raise hand for permission."),
  ("Unit 8 — Common Sight Words", "Sight words the, and, is, on, in", "Read top everyday sight words instantly.", "The, and, is, in, on, and it help us read simple sentences quickly.", "sight word", "word read instantly", "sentence", "words making sense", "mat", "floor cover", "100 sight words make up half of all words in children's books!", "Complete: The book is _____ the desk.", "on", ["on", "the", "and", "is"], "On shows location on desk."),
  ("Unit 9 — Colors All Around Us", "Color names in English", "Identify and name colors in nature.", "Red apple, blue sky, green grass, yellow sun, white milk, and black hair brighten our world.", "color", "red, blue, or yellow", "bright", "full of light", "ripe", "ready to eat", "Mixing blue and yellow paint makes fresh green!", "What color is garden grass?", "Green", ["Green", "Red", "Blue", "Black"], "Grass is green."),
  ("Unit 10 — Numbers in Words (One to Ten)", "Number words One to Ten", "Read and spell number words 1 to 10.", "One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten are number words.", "count", "naming numbers in order", "rickshaw", "3-wheeled vehicle", "number", "count value", "Spiders have 8 legs, but insects have 6 legs!", "Spelling for number 3 is:", "Three", ["Three", "Tree", "Thee", "Free"], "3 is spelled T-H-R-E-E."),
  ("Unit 11 — Parts of Our Body", "Human body parts", "Name parts of body and their actions.", "Eyes see, ears hear, nose smells, mouth eats, hands write, and legs walk and jump.", "chew", "crush food with teeth", "clap", "strike hands", "body", "physical self", "Human eyes can distinguish millions of different color shades!", "Which part smells flowers?", "Nose", ["Nose", "Ears", "Legs", "Eyes"], "We smell with our nose."),
  ("Unit 12 — Animals Around Us", "Pets and wild animals", "Name common animals and their sounds.", "Cat says meow, dog barks woof, cow gives milk, and lion rules the jungle.", "domestic", "lives near humans", "trunk", "elephant's long nose", "beak", "bird's mouth", "Cows have best friends in their herd and stay happy together!", "Which animal gives milk?", "Cow", ["Cow", "Lion", "Dog", "Cat"], "Cows give healthy milk."),
  ("Unit 13 — Fruits and Vegetables", "Healthy fruits and vegetables", "Name sweet fruits and green vegetables.", "Mango is sweet, banana is yellow, jackfruit is national fruit, tomato is red, and spinach gives strength.", "jackfruit", "national fruit", "vegetable", "healthy plant food", "energy", "strength to play", "Jackfruit is the largest tree-borne fruit in the world!", "National fruit of Bangladesh is:", "Jackfruit", ["Jackfruit", "Apple", "Orange", "Banana"], "Jackfruit is national fruit."),
  ("Unit 14 — Days of the Week", "Seven days of the week", "Recite the 7 days in order.", "Sunday, Monday, Tuesday, Wednesday, Thursday are school days; Friday and Saturday are weekends.", "week", "seven days period", "weekend", "rest days", "holiday", "fun day off", "Every month has at least 4 full weeks!", "How many days in a week?", "7", ["7", "5", "10", "12"], "A week has 7 days."),
  ("Unit 15 — Short Reading Story: Rima and Her Kitten", "Reading comprehension", "Read a story and answer questions.", "Rima has a white kitten named Mimi. Mimi chases a small red ball and drinks warm milk.", "kitten", "baby cat", "purr", "happy cat sound", "curl", "roll into cozy ball", "Cats spend 70 percent of their lives resting!", "What is the kitten's name?", "Mimi", ["Mimi", "Tommy", "Kitty", "Lucy"], "The kitten is Mimi.")
]

for title, obj, warm, text, w1, m1, w2, m2, w3, m3, fact, qtxt, qans, qopts, qexp in eft_units:
    english.append({
        "title": f"English for Today: {title}",
        "learningObjective": obj,
        "warmUp": warm,
        "mainContent": [block("Lesson Focus", text)],
        "keyVocabulary": [vocab(w1, m1), vocab(w2, m2), vocab(w3, m3)],
        "funFact": fact,
        "practiceQuestions": [q(qtxt, qans, qopts, qexp), q("Is learning English fun?", "Yes", ["Yes", "No", "Never", "Maybe"], "Yes it is!"), q("Do we speak politely?", "Yes", ["Yes", "No", "Never", "Sometimes"], "Always speak politely.")],
        "parentTip": "Practice naming items aloud with your child in English."
    })

# Grammar 1-5
grammars = [
  ("Lesson 1: Nouns", "Naming words", "Identify nouns for person, place, animal, thing.", "A noun is a naming word: Father, School, Tiger, Book are all nouns.", "noun", "naming word", "person", "human being", "place", "location", "Most words in the dictionary are nouns!", "Which word is a noun?", "Cat", ["Cat", "Run", "Blue", "Fast"], "Cat is an animal noun."),
  ("Lesson 2: Verbs", "Action words", "Identify action words.", "A verb is a doing word: run, jump, read, eat, sleep are verbs.", "verb", "action word", "action", "doing something", "fly", "move in air", "Every complete sentence must have a verb!", "Which is an action verb?", "Jump", ["Jump", "Table", "Green", "Cat"], "Jump is an action."),
  ("Lesson 3: Singular and Plural", "One and many", "Add 's' to make plural words.", "Singular means one (one cat); Plural means many (two cats). Add 's' to make plural.", "singular", "only one", "plural", "more than one", "add", "join together", "Some words like 'sheep' stay the same for one and many!", "Plural of 'book' is:", "Books", ["Books", "Bookes", "Book", "Booking"], "Add s to make books."),
  ("Lesson 4: Simple Present Tense", "Daily routines", "Express daily habits in present tense.", "I brush teeth daily. He drinks milk. Simple present shows daily routine.", "routine", "daily habit", "habit", "repeated action", "shine", "give light", "The sun always rises in the east!", "Complete: 'He _____ milk.'", "drinks", ["drinks", "drink", "drinking", "drank"], "He takes drinks with an s."),
  ("Lesson 5: Articles (a, an, the)", "Using a, an, the", "Use 'a' for consonants, 'an' for vowels, 'the' for unique things.", "Use 'an' before vowels (an apple), 'a' before consonants (a cat), 'the' for unique items (the sun).", "article", "a, an, the", "vowel", "A, E, I, O, U", "consonant", "non-vowel letters", "Every English word contains a vowel sound!", "Which article goes before 'egg'?", "An", ["An", "A", "Them", "These"], "Egg begins with vowel E.")
]

for title, obj, warm, text, w1, m1, w2, m2, w3, m3, fact, qtxt, qans, qopts, qexp in grammars:
    english.append({
        "title": f"Bichitra Grammar, {title}",
        "learningObjective": obj,
        "warmUp": warm,
        "mainContent": [block("Grammar Rule", text)],
        "keyVocabulary": [vocab(w1, m1), vocab(w2, m2), vocab(w3, m3)],
        "funFact": fact,
        "practiceQuestions": [q(qtxt, qans, qopts, qexp), q("Do vowels use 'an'?", "Yes", ["Yes", "No", "Never", "Sometimes"], "Vowels take an."), q("Is pencil a noun?", "Yes", ["Yes", "No", "Maybe", "Never"], "Pencil is a noun.")],
        "parentTip": "Practice identifying nouns and verbs around the house."
    })

# Paragraphs
english.append({
    "title": "Paragraph writing: Our Country",
    "learningObjective": "Write a model paragraph about Bangladesh.",
    "warmUp": "What is our country's name?",
    "mainContent": [block("Model Paragraph", "The name of our country is Bangladesh. It is a land of green fields and rivers. Our capital is Dhaka. Our national flower is the white water lily. I love my country very much.")],
    "keyVocabulary": [vocab("capital", "main city"), vocab("homeland", "native country"), vocab("proud", "feeling joy for country")],
    "funFact": "Bangladesh has over 700 flowing rivers!",
    "practiceQuestions": [q("Capital of Bangladesh is:", "Dhaka", ["Dhaka", "Sylhet", "Khulna", "Chittagong"], "Dhaka is the capital."), q("National flower is:", "Water Lily", ["Water Lily", "Rose", "Tulip", "Daisy"], "Water Lily (Shapla) is national flower."), q("Our country is:", "Bangladesh", ["Bangladesh", "India", "Nepal", "China"], "Our country is Bangladesh.")],
    "parentTip": "Have your child copy the 5 sentences neatly into their notebook."
})
english.append({
    "title": "Paragraph writing: My Family",
    "learningObjective": "Write a loving paragraph about family.",
    "warmUp": "How many members live in your family?",
    "mainContent": [block("Model Paragraph", "I have a wonderful family. There are four members: my father, mother, sister, and me. My father works hard and mother cares for us. We eat meals together. I love my family.")],
    "keyVocabulary": [vocab("family", "parents and children"), vocab("member", "person in family"), vocab("share", "give part of what you have")],
    "funFact": "Family laughter creates joy and boosts good health!",
    "practiceQuestions": [q("Who cares for us at home?", "Parents", ["Parents", "Strangers", "Nobody", "Monsters"], "Parents love and care for us."), q("Families eat meals:", "Together", ["Together", "Alone", "In dark", "Never"], "Eating together brings joy."), q("Do we love our family?", "Yes", ["Yes", "No", "Never", "Maybe"], "We love our family.")],
    "parentTip": "Look at family photos and name each member in English."
})

# A Magic Place 1-14
amp_titles = [
  "Chapter 1 — The Wooden Gate", "Chapter 2 — The Whispering Trees", "Chapter 3 — The Brook of Floating Lanterns",
  "Chapter 4 — The Meadow of Giggle Flowers", "Chapter 5 — The Rainbow Bridge", "Chapter 6 — The Crystal Cave",
  "Chapter 7 — Barnaby the Gentle Bear", "Chapter 8 — The Valley of Fireflies", "Chapter 9 — The Cloud Castle",
  "Chapter 10 — Placing the Four Petals", "Chapter 11 — The Forest Feast", "Chapter 12 — The River of Starlight",
  "Chapter 13 — The Gift of Seeds", "Chapter 14 — Home for Dinner"
]
for i, ch in enumerate(amp_titles, 1):
    english.append({
        "title": f"A Magic Place: {ch}",
        "learningObjective": f"Read story episode {i} about Leo and Maya's magical adventure.",
        "warmUp": "What magical discovery will the children make today?",
        "mainContent": [block(f"Episode {i} Story", f"Leo and Maya explore the enchanted forest, meet friendly animal guides, collect crystal petals, and restore light through teamwork, kindness, and courage.")],
        "keyVocabulary": [vocab("adventure", "exciting journey"), vocab("magic", "wondrous power"), vocab("friendship", "caring for friends")],
        "funFact": f"Chapter {i} shows that kindness and courage always triumph!",
        "practiceQuestions": [q("Who are the children?", "Leo and Maya", ["Leo and Maya", "Tom and Jerry", "Ali and Roni", "Sara and Mita"], "Leo and Maya are the hero children."), q("What guide helps them?", "Pippin the squirrel", ["Pippin the squirrel", "A dragon", "A shark", "A ghost"], "Pippin guides them."), q("How do they succeed?", "Through kindness and teamwork", ["Through kindness and teamwork", "By fighting", "By running away", "By sleeping"], "Teamwork wins.")],
        "parentTip": "Ask your child what character they liked best in today's story."
    })

print(f"English count: {len(english)}")

with open("full_curriculum_partial.json", "w", encoding="utf-8") as f:
    json.dump({"bangla": bangla, "english": english}, f, ensure_ascii=False)
