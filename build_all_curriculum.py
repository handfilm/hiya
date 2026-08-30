import json

def q(text, ans, opts, exp):
    return {"question": text, "type": "multiple_choice", "options": opts, "correctAnswer": ans, "explanation": exp}
def vocab(w, m):
    return {"word": w, "meaning": m}
def block(h, t):
    return {"heading": h, "text": t}

from append_subjects import bangla, english

# 3. MATH (22 lessons)
math = [
  # Elementary Math
  {
    "title": "Elementary Mathematics, Lesson 1: Counting 1 to 50",
    "learningObjective": "Count numbers from 1 to 50 in order.",
    "warmUp": "Can you count to 10 on your fingers?",
    "mainContent": [block("Tens and Ones", "Count by tens: 10, 20, 30, 40, 50. Every number grows by 1: 1, 2, 3... 49, 50!")],
    "keyVocabulary": [vocab("count", "naming numbers in order"), vocab("ten", "group of ten ones"), vocab("fifty", "five tens (50)")],
    "funFact": "We count in tens because humans have 10 fingers!",
    "practiceQuestions": [q("Number after 19:", "20", ["20", "18", "21", "17"], "20 follows 19."), q("Number before 40:", "39", ["39", "41", "38", "30"], "39 comes before 40."), q("How many tens make 50?", "5 tens", ["5 tens", "4 tens", "3 tens", "2 tens"], "5 tens make 50.")],
    "parentTip": "Count 50 steps together while walking."
  },
  {
    "title": "Elementary Mathematics, Lesson 2: Comparing Numbers (greater, smaller, equal)",
    "learningObjective": "Compare numbers using greater (>), smaller (<), and equal (=).",
    "warmUp": "Would you rather have 8 mangoes or 2 mangoes?",
    "mainContent": [block("Comparing Quantities", "Greater means more (9 > 4). Smaller means less (3 < 7). Equal means the same (5 = 5).")],
    "keyVocabulary": [vocab("greater", "more in amount"), vocab("smaller", "less in amount"), vocab("equal", "exact same value")],
    "funFact": "The equal sign (=) was invented in 1557!",
    "practiceQuestions": [q("Which is greater: 15 or 8?", "15", ["15", "8", "Equal", "0"], "15 is larger."), q("Which symbol fits: 6 _____ 10?", "< (smaller than)", ["< (smaller than)", "> (greater than)", "=", "+"], "6 is smaller than 10."), q("Which pair is equal?", "7 and 7", ["7 and 7", "4 and 9", "2 and 8", "10 and 1"], "7 equals 7.")],
    "parentTip": "Use crocodile hands chomping the bigger number."
  },
  {
    "title": "Elementary Mathematics, Lesson 3: Number Order",
    "learningObjective": "Arrange numbers in ascending and descending order.",
    "warmUp": "Do step numbers go up or down when climbing stairs?",
    "mainContent": [block("Ascending and Descending", "Ascending goes small to big (2, 5, 8). Descending goes big to small (8, 5, 2). Between 4 and 6 is 5.")],
    "keyVocabulary": [vocab("order", "proper sequence"), vocab("ascending", "small to big"), vocab("between", "in the middle")],
    "funFact": "Rocket launch countdowns use descending order: 3, 2, 1, Blast off!",
    "practiceQuestions": [q("Number between 14 and 16:", "15", ["15", "13", "17", "18"], "15 is between 14 and 16."), q("Ascending order for 9, 3, 6:", "3, 6, 9", ["3, 6, 9", "9, 6, 3", "6, 3, 9", "3, 9, 6"], "3, 6, 9 is small to big."), q("Number before 25:", "24", ["24", "26", "23", "20"], "24 is before 25.")],
    "parentTip": "Line up number cards from smallest to largest."
  },
  # Mental Math
  {
    "title": "Mental Mathematics, Lesson 1: Simple Addition within 20",
    "learningObjective": "Add numbers up to 20 mentally.",
    "warmUp": "What is 4 biscuits plus 2 biscuits?",
    "mainContent": [block("Putting Together", "Addition (+) joins amounts. To solve 7 + 3, put 7 in mind and count 3 fingers: 8, 9, 10! Sum is 10.")],
    "keyVocabulary": [vocab("addition", "combining numbers"), vocab("sum", "total answer"), vocab("plus", "symbol (+) for adding")],
    "funFact": "Adding 0 never changes the number: 9 + 0 = 9!",
    "practiceQuestions": [q("What is 5 + 4?", "9", ["9", "8", "10", "7"], "5 + 4 = 9."), q("What is 10 + 7?", "17", ["17", "16", "18", "20"], "10 + 7 = 17."), q("8 apples + 2 apples =", "10", ["10", "9", "11", "12"], "8 + 2 = 10.")],
    "parentTip": "Practice 'Put big number in mind and count forward'."
  },
  {
    "title": "Mental Mathematics, Lesson 2: Simple Subtraction within 20",
    "learningObjective": "Subtract numbers up to 20 mentally.",
    "warmUp": "If you have 5 balloons and 1 pops, how many are left?",
    "mainContent": [block("Taking Away", "Subtraction (-) takes away items. To solve 9 - 3, count back 3 from 9: 8, 7, 6! Difference is 6.")],
    "keyVocabulary": [vocab("subtraction", "taking away"), vocab("minus", "symbol (-) for subtracting"), vocab("difference", "remaining amount")],
    "funFact": "Subtracting a number from itself is always 0: 8 - 8 = 0!",
    "practiceQuestions": [q("What is 8 - 3?", "5", ["5", "6", "4", "7"], "8 - 3 = 5."), q("What is 12 - 2?", "10", ["10", "9", "11", "8"], "12 - 2 = 10."), q("7 birds on tree, 2 fly away. Left:", "5", ["5", "6", "4", "3"], "7 - 2 = 5.")],
    "parentTip": "Count backward from 10 to 1 together."
  },
  {
    "title": "Mental Mathematics, Lesson 3: Quick Mental Math Tricks",
    "learningObjective": "Use doubles and friends of 10 for quick math.",
    "warmUp": "What is double 3 (3 + 3)?",
    "mainContent": [block("Math Tricks", "Doubles: 2+2=4, 3+3=6, 5+5=10. Friends of 10: 1+9, 2+8, 3+7, 4+6, 5+5 make 10. To add 9: add 10, minus 1.")],
    "keyVocabulary": [vocab("doubles", "adding number to itself"), vocab("mental math", "calculating in head"), vocab("trick", "smart fast method")],
    "funFact": "Friends of 10 make adding large numbers super easy!",
    "practiceQuestions": [q("Double 4 is:", "8", ["8", "6", "10", "7"], "4 + 4 = 8."), q("Friend of 7 to make 10:", "3", ["3", "2", "4", "5"], "7 + 3 = 10."), q("What is 5 + 5?", "10", ["10", "9", "11", "12"], "5 + 5 = 10.")],
    "parentTip": "Call out a number and ask for its Friend of 10."
  },
  # Even and Odd
  {
    "title": "Even and Odd Numbers (1 to 50)",
    "learningObjective": "Identify even and odd numbers up to 50.",
    "warmUp": "Do shoes come in pairs of two?",
    "mainContent": [block("Even and Odd Pairs", "Even numbers make pairs ending in 0, 2, 4, 6, 8 (2, 4, 6... 50). Odd numbers have 1 left over ending in 1, 3, 5, 7, 9 (1, 3, 5... 49).")],
    "keyVocabulary": [vocab("even", "splits into pairs by 2s"), vocab("odd", "leaves 1 remainder"), vocab("pair", "group of two")],
    "funFact": "Zero is an even number sitting between -1 and 1!",
    "practiceQuestions": [q("Is 6 even or odd?", "Even", ["Even", "Odd", "Neither", "Both"], "6 pairs up evenly."), q("Which number is odd?", "7", ["7", "4", "8", "10"], "7 ends in 7."), q("Even numbers end in:", "0, 2, 4, 6, 8", ["0, 2, 4, 6, 8", "1, 3, 5, 7, 9", "9 only", "3 only"], "Even ends in 0, 2, 4, 6, 8.")],
    "parentTip": "Pair up 7 coins to show 1 coin left over."
  }
]

# Times Tables 1 to 9
for t in range(1, 10):
    math.append({
        "title": f"Times Table of {t}",
        "learningObjective": f"Master the {t} Times Table up to {t} x 10 = {t*10}.",
        "warmUp": f"What is skip counting by {t}s?",
        "mainContent": [block(f"Table of {t}", ", ".join([f"{t}x{i}={t*i}" for i in range(1, 11)]))],
        "keyVocabulary": [vocab("multiplication", "repeated equal groups"), vocab("times", "number of groups"), vocab("product", "answer to multiplication")],
        "funFact": f"{t} x 10 is always {t*10}!",
        "practiceQuestions": [q(f"What is {t} x 2?", str(t*2), [str(t*2), str(t*2+1), str(t*2-1), str(t+2)], f"{t} x 2 = {t*2}."), q(f"What is {t} x 5?", str(t*5), [str(t*5), str(t*5+2), str(t*5-2), str(t*4)], f"{t} x 5 = {t*5}."), q(f"What is {t} x 10?", str(t*10), [str(t*10), str(t*10+5), str(t*10-5), "100"], f"{t} x 10 = {t*10}.")],
        "parentTip": f"Chant the {t} times table rhythmically together."
    })

# Write Numbers in Words 1-50
math.append({
    "title": "Write Numbers in Words (1 to 50)",
    "learningObjective": "Spell number words from One (1) to Fifty (50).",
    "warmUp": "Can you spell 10 in English?",
    "mainContent": [block("Spelling Number Words", "1-10: One to Ten; 11-20: Eleven to Twenty; 21-50: Twenty-one, Thirty, Forty, Fifty. Spell tens and ones clearly.")],
    "keyVocabulary": [vocab("spelling", "writing letters correctly"), vocab("twenty", "number 20"), vocab("forty", "number 40 (no u)")],
    "funFact": "Forty is the only number word with letters in alphabetical order!",
    "practiceQuestions": [q("Spelling for 20 is:", "Twenty", ["Twenty", "Twenti", "Twanty", "Tventy"], "20 is Twenty."), q("Spelling for 40 is:", "Forty", ["Forty", "Fourty", "Forti", "Fourtie"], "40 is Forty without a u."), q("Spelling for 15 is:", "Fifteen", ["Fifteen", "Fiveteen", "Fiftin", "Fivetean"], "15 is Fifteen.")],
    "parentTip": "Write 5 number words on cards and match with numerals."
})

# Geometry Point, Line, Angle, Circle, Triangle (5 lessons)
geo = [
  ("Geometry: Point", "A point is a tiny exact dot in space.", "dot", "tiny mark", "position", "exact location", "point", "zero size dot", "A point has no length, width, or height!"),
  ("Geometry: Line", "A straight line connects points without bending.", "line", "straight path", "straight", "not curved", "segment", "part of line", "A straight line is the shortest path between two points!"),
  ("Geometry: Angle", "An angle is formed where two straight lines meet at a corner.", "angle", "space between meeting lines", "corner", "vertex where lines meet", "vertex", "meeting point", "Corners of a book are right angles!"),
  ("Geometry: Circle", "A circle is perfectly round like a coin or clock.", "circle", "round closed shape", "round", "curved without corners", "center", "middle point", "A circle has zero sharp corners!"),
  ("Geometry: Triangle", "A triangle is a shape with exactly 3 straight sides and 3 corners.", "triangle", "shape with 3 sides", "side", "straight boundary line", "corner", "point where sides meet", "Triangles are the strongest building shapes in bridges!")
]
for title, text, w1, m1, w2, m2, w3, m3, fact in geo:
    math.append({
        "title": title,
        "learningObjective": f"Understand {title.lower()}.",
        "warmUp": f"Where do you see {title.split()[-1].lower()}s in your room?",
        "mainContent": [block("Geometric Shape", text)],
        "keyVocabulary": [vocab(w1, m1), vocab(w2, m2), vocab(w3, m3)],
        "funFact": fact,
        "practiceQuestions": [q(f"What defines a {title.split()[-1]}?", text[:20]+"...", [text[:20]+"...", "None", "Water", "Cloud"], "Correct geometry definition."), q("Is geometry fun?", "Yes", ["Yes", "No", "Never", "Maybe"], "Geometry is fun!"), q("Do shapes surround us?", "Yes", ["Yes", "No", "Never", "Rarely"], "Shapes are everywhere.")],
        "parentTip": "Spot shapes and lines around the house."
    })

print(f"Math count: {len(math)}")

# 4. ISLAM (4 lessons)
islam = [
  {
    "title": "Allah the Almighty",
    "learningObjective": "Learn that Allah is the One Creator of all things.",
    "warmUp": "Who created the shining sun and starry sky?",
    "mainContent": [block("The One Creator", "Allah is One. He has no partners. Allah created humans, animals, stars, and flowers. He loves and protects us.")],
    "keyVocabulary": [vocab("Allah", "The One Supreme Creator"), vocab("Almighty", "Having all power"), vocab("Creator", "The One who makes everything")],
    "funFact": "Saying Alhamdulillah thanks Allah for all His blessings!",
    "practiceQuestions": [q("Who created the heavens and earth?", "Allah", ["Allah", "Kings", "Clouds", "Nobody"], "Allah created everything."), q("How many Gods are there?", "One", ["One", "Two", "Three", "Many"], "Allah is One (Tawhid)."), q("What do we say when thankful?", "Alhamdulillah", ["Alhamdulillah", "Bismillah", "Astaghfirullah", "Goodbye"], "Alhamdulillah means praise be to Allah.")],
    "parentTip": "Look at trees and sky together and say Alhamdulillah."
  },
  {
    "title": "The Prophet Muhammad (SAW)",
    "learningObjective": "Learn about the life and kindness of Prophet Muhammad (SAW).",
    "warmUp": "What is the name of our beloved last Prophet?",
    "mainContent": [block("Mercy to Mankind", "Prophet Muhammad (SAW) was born in Makkah. He was known as Al-Amin (the trustworthy). He showed kindness to children, animals, and elders.")],
    "keyVocabulary": [vocab("Prophet", "Messenger of Allah"), vocab("Al-Amin", "The trustworthy one"), vocab("Kindness", "Caring for everyone")],
    "funFact": "Prophet Muhammad (SAW) loved smiles and said a smile is charity!",
    "practiceQuestions": [q("Where was Prophet Muhammad (SAW) born?", "Makkah", ["Makkah", "Madinah", "Dhaka", "Cairo"], "He was born in Makkah."), q("What title was he known by?", "Al-Amin", ["Al-Amin", "Al-Malik", "Al-Qadir", "Al-Kabir"], "Al-Amin means trustworthy."), q("How did he treat children?", "With love and kindness", ["With love and kindness", "With anger", "Ignored them", "Harshly"], "He was loving to children.")],
    "parentTip": "Practice sending Darud (Salawat) upon the Prophet (SAW)."
  },
  {
    "title": "Story of Adam and Hawwa (AS)",
    "learningObjective": "Learn about the first human beings created by Allah.",
    "warmUp": "Who was the very first person created by Allah?",
    "mainContent": [block("First Humans", "Allah created Prophet Adam (AS) and Hawwa (AS) as the first human parents. Angels were taught all names by Adam.")],
    "keyVocabulary": [vocab("Adam", "First prophet and human"), vocab("Hawwa", "First mother of mankind"), vocab("Angel", "Creation made of light")],
    "funFact": "All humans across the world are part of one big family descended from Adam and Hawwa!",
    "practiceQuestions": [q("Who was the first Prophet?", "Adam (AS)", ["Adam (AS)", "Nuh (AS)", "Musa (AS)", "Isa (AS)"], "Prophet Adam (AS) was the first."), q("Who was the first mother?", "Hawwa (AS)", ["Hawwa (AS)", "Maryam", "Khadijah", "Aisha"], "Hawwa (AS) was first mother."), q("Who created them?", "Allah", ["Allah", "Wind", "Water", "Stars"], "Allah created them.")],
    "parentTip": "Remind your child that all people are brothers and sisters in humanity."
  },
  {
    "title": "Honesty in Islam",
    "learningObjective": "Understand the great blessing of speaking the truth.",
    "warmUp": "Why should we always speak the truth even when scared?",
    "mainContent": [block("Truthfulness", "Honesty means telling the truth and not cheating. Allah loves truthful people. Being honest brings peace and trust.")],
    "keyVocabulary": [vocab("Honesty", "Truthfulness and fairness"), vocab("Trust", "Belief in someone's goodness"), vocab("Reward", "Good return from Allah")],
    "funFact": "Truthfulness leads to righteousness, and righteousness leads to Paradise!",
    "practiceQuestions": [q("What should we always speak?", "The truth", ["The truth", "Lies", "Secrets", "Excuses"], "Always speak the truth."), q("Does Allah love honest children?", "Yes, deeply", ["Yes, deeply", "No", "Never", "Sometimes"], "Allah loves the truthful."), q("What does honesty build?", "Trust and friendship", ["Trust and friendship", "Fear", "Fighting", "Sadness"], "Honesty builds trust.")],
    "parentTip": "Praise your child whenever they honestly admit a small mistake."
  }
]

print(f"Islam count: {len(islam)}")

# 5. GK (15 lessons)
gk = []
gk_list = [
  ("Lesson 1: Our Beautiful Earth", "Earth is round and covered with blue oceans and green land.", "earth", "ocean", "continent", "Earth is the only planet known to support life!"),
  ("Lesson 2: Flags and National Emblems", "Bangladesh flag is green with a red circle representing freedom.", "flag", "emblem", "circle", "The red circle represents the rising sun of independence!"),
  ("Lesson 3: Wonders of the World", "Great Wall of China and Pyramids of Egypt are ancient wonders.", "wonder", "pyramid", "ancient", "The Great Wall is over 13,000 miles long!"),
  ("Lesson 4: Great Leaders of Bangladesh", "Bangabandhu Sheikh Mujibur Rahman is the Father of the Nation.", "leader", "nation", "freedom", "17th March is Children's Day in Bangladesh celebrating Bangabandhu!"),
  ("Lesson 5: Means of Transport", "Buses, trains, boats, and aeroplanes carry people and goods.", "transport", "vehicle", "aeroplane", "Aeroplanes can fly faster than the speed of birds!"),
  ("Lesson 6: Community Helpers", "Doctors, teachers, police, and firefighters keep us safe and healthy.", "doctor", "firefighter", "police", "Firefighters rush to put out fires and rescue cats!"),
  ("Lesson 7: Famous Monuments of Dhaka", "Lalbagh Fort, Ahsan Manzil, and National Parliament are in Dhaka.", "monument", "fort", "parliament", "Ahsan Manzil is called the Pink Palace of Dhaka!"),
  ("Lesson 8: Animal Habitats", "Fish live in water, birds in nests, and lions in dens.", "habitat", "den", "aquatic", "Polar bears live in snowy Arctic ice!"),
  ("Lesson 9: Seasons of Bangladesh", "Bangladesh has 6 seasons: Summer, Rainy, Autumn, Late Autumn, Winter, Spring.", "season", "monsoon", "winter", "Bangladesh is famous as the land of six seasons (Shoro Ritu)!"),
  ("Lesson 10: Healthy Habits and Manners", "Wash hands, say please and thank you, and sleep on time.", "manner", "hygiene", "polite", "Washing hands with soap for 20 seconds removes germs!"),
  ("Chapter 2: The Sun, Moon, and Stars", "The Sun gives heat and light; the Moon shines at night.", "sun", "moon", "star", "Light from the Sun reaches Earth in about 8 minutes!"),
  ("Chapter 12: Inventions and Discoveries", "The wheel, lightbulb, and telephone changed our world.", "invention", "wheel", "bulb", "The wheel was invented over 5,000 years ago!"),
  ("Chapter 13: Sports and Games", "Cricket, football, and ha-du-du (Kabaddi) are popular sports.", "sport", "cricket", "kabaddi", "Kabaddi is the national sport of Bangladesh!"),
  ("Chapter 14: Festivals of Bangladesh", "Pohela Boishakh, Eid, and Independence Day bring great joy.", "festival", "boishakh", "celebration", "Pohela Boishakh is celebrated with colorful Mangal Shobhajatra!"),
  ("Chapter 15: Space and Planets", "Our Solar System has 8 planets orbiting the bright Sun.", "planet", "solar system", "orbit", "Jupiter is the largest planet in our solar system!")
]

for title, text, w1, w2, w3, fact in gk_list:
    gk.append({
        "title": f"General Knowledge, {title}",
        "learningObjective": f"Learn facts about {title.split(':')[-1].strip()}.",
        "warmUp": "What interesting fact will we discover today?",
        "mainContent": [block("Knowledge Fact", text)],
        "keyVocabulary": [vocab(w1, "key topic term"), vocab(w2, "important concept"), vocab(w3, "world knowledge word")],
        "funFact": fact,
        "practiceQuestions": [q("What is the main topic?", title.split(':')[-1].strip(), [title.split(':')[-1].strip(), "None", "Cooking", "Dancing"], "Topic matches lesson."), q("Is GK helpful?", "Yes", ["Yes", "No", "Never", "Maybe"], "GK broadens mind."), q("Do we live on Earth?", "Yes", ["Yes", "No", "Mars", "Moon"], "We live on Earth.")],
        "parentTip": "Discuss this topic during dinner conversation."
    })

print(f"GK count: {len(gk)}")

# 6. SCIENCE (7 lessons)
science = []
sci_list = [
  ("Chapter 1: Living and Non-Living Things", "Living things breathe, eat, and grow (plants, animals). Non-living things do not grow (stones, toys).", "living", "non-living", "breathe", "Plants are living things that can make their own food!"),
  ("Chapter 2: Plant Life and Parts of a Plant", "Plants have roots, stem, leaves, flowers, and fruits. Roots absorb water.", "root", "stem", "leaf", "Leaves are called the food factories of plants!"),
  ("Chapter 3: Animal Life and Homes", "Animals need food and shelter. Birds live in nests, bees in hives, cows in sheds.", "shelter", "hive", "herbivore", "Bees dance to tell friends where sweet flowers are!"),
  ("Chapter 5: Human Body and Senses", "We have five senses: sight (eyes), hearing (ears), smell (nose), taste (tongue), touch (skin).", "sense", "sight", "tongue", "Your tongue has thousands of taste buds!"),
  ("Chapter 7: Air and Water", "All living things need clean air to breathe and fresh water to drink.", "oxygen", "clean water", "breeze", "Moving air is called wind!"),
  ("Chapter 11: Weather and Seasons", "Weather can be sunny, rainy, windy, or cloudy. It changes day to day.", "sunny", "cloudy", "rainy", "Clouds are made of millions of tiny floating water droplets!"),
  ("Chapter 13: Light and Shadow", "Light helps us see. When an object blocks light, a dark shadow forms.", "light", "shadow", "opaque", "Shadows are longest early in the morning and late afternoon!")
]
for title, text, w1, w2, w3, fact in sci_list:
    science.append({
        "title": f"Primary Science, {title}",
        "learningObjective": f"Understand {title.split(':')[-1].strip()}.",
        "warmUp": "What science wonder will we observe today?",
        "mainContent": [block("Science Principle", text)],
        "keyVocabulary": [vocab(w1, "science term"), vocab(w2, "natural element"), vocab(w3, "observation word")],
        "funFact": fact,
        "practiceQuestions": [q("What is a living thing?", "Plant", ["Plant", "Stone", "Toy", "Chair"], "Plants grow and breathe."), q("How many senses do we have?", "5", ["5", "3", "7", "10"], "We have 5 senses."), q("What creates a shadow?", "Blocking light", ["Blocking light", "Dark paint", "Water", "Wind"], "Shadows form when light is blocked.")],
        "parentTip": "Do a mini nature walk on the balcony to observe plants and shadows."
    })

print(f"Science count: {len(science)}")

# 7. COMPUTER (4 lessons)
computer = [
  {
    "title": "Computer Studies, Chapter 1: What is a Computer?",
    "learningObjective": "Learn that a computer is a smart electronic machine.",
    "warmUp": "Have you seen a computer or laptop at home or school?",
    "mainContent": [block("Smart Machine", "A computer is an electronic machine. It works very fast, never gets tired, and helps us draw, write, and play learning games.")],
    "keyVocabulary": [vocab("Computer", "An electronic calculating machine"), vocab("Machine", "A man-made tool that makes work easy"), vocab("Electronic", "Runs on electricity")],
    "funFact": "The first computers were as big as an entire classroom!",
    "practiceQuestions": [q("A computer is a:", "Smart electronic machine", ["Smart electronic machine", "Wild animal", "Tree", "Kitchen fruit"], "Computers run on electricity."), q("Does a computer get tired?", "No, never", ["No, never", "Yes quickly", "Only on Sundays", "Every minute"], "Computers work continuously."), q("What can we do on computer?", "Draw, write, learn", ["Draw, write, learn", "Cook rice", "Wash clothes", "Sleep"], "We use it for learning and art.")],
    "parentTip": "Show your child the keyboard and mouse on a computer."
  },
  {
    "title": "Computer Studies, Chapter 2: Parts of a Computer",
    "learningObjective": "Identify Monitor, CPU, Keyboard, and Mouse.",
    "warmUp": "Which part of a computer looks like a television screen?",
    "mainContent": [block("Four Main Parts", "Monitor shows pictures on screen. CPU is the brain in the box. Keyboard has keys to type. Mouse points and clicks.")],
    "keyVocabulary": [vocab("Monitor", "Screen displaying output"), vocab("CPU", "Central Processing Unit (brain)"), vocab("Keyboard", "Board with letters and numbers")],
    "funFact": "The CPU does millions of calculations in a single second!",
    "practiceQuestions": [q("Brain of the computer is:", "CPU", ["CPU", "Monitor", "Mouse", "Speaker"], "CPU is the brain."), q("Which part shows the screen?", "Monitor", ["Monitor", "CPU", "Keyboard", "Wire"], "Monitor displays screen."), q("What has alphabet keys?", "Keyboard", ["Keyboard", "Mouse", "Monitor", "Printer"], "Keyboard has keys to type.")],
    "parentTip": "Point out the screen and buttons on a device."
  },
  {
    "title": "Computer Studies, Chapter 3: Uses of Computers",
    "learningObjective": "Understand where and how computers help people.",
    "warmUp": "Where have you seen computers used?",
    "mainContent": [block("Everywhere Around Us", "Computers are used in schools to learn, hospitals to treat patients, banks to manage money, and airports to fly planes.")],
    "keyVocabulary": [vocab("Hospital", "Place where doctors heal patients"), vocab("Bank", "Safe place for money"), vocab("Airport", "Where aeroplanes land")],
    "funFact": "Smartphones are powerful pocket-sized computers!",
    "practiceQuestions": [q("Computers in schools help us:", "Learn and study", ["Learn and study", "Sleep", "Fight", "Break toys"], "Used for educational learning."), q("Where are computers used?", "Schools, banks, hospitals", ["Schools, banks, hospitals", "Only in jungle", "Nowhere", "Under sea only"], "Computers are used everywhere."), q("Can computers play music?", "Yes", ["Yes", "No", "Never", "Impossible"], "Computers play audio and video.")],
    "parentTip": "Spot computers at a bank or supermarket checkout counter."
  },
  {
    "title": "Computer Studies, Chapter 4: Computer Manners and Care",
    "learningObjective": "Follow safe and polite computer lab rules.",
    "warmUp": "Should we eat juicy snacks right on top of a computer keyboard?",
    "mainContent": [block("Lab Rules", "Keep hands clean and dry. Do not eat or drink near computers. Press keys gently. Sit straight and keep good posture.")],
    "keyVocabulary": [vocab("Manner", "Polite and safe behavior"), vocab("Posture", "Sitting straight and healthy"), vocab("Gentle", "Soft and careful touch")],
    "funFact": "Sitting straight while using a computer keeps your spine strong and healthy!",
    "practiceQuestions": [q("Should food be kept near computers?", "No, keep food away", ["No, keep food away", "Yes, spill water", "Eat curry on it", "Pour juice"], "Food and liquids can damage electronics."), q("How should keys be pressed?", "Gently and softly", ["Gently and softly", "Hit with hammer", "Kick", "Pound hard"], "Press keys gently."), q("How should you sit?", "Straight with good posture", ["Straight with good posture", "Lying down", "Upside down", "Slouching"], "Sit with straight back.")],
    "parentTip": "Remind your child to wash hands before touching screens."
  }
]

print(f"Computer count: {len(computer)}")

# 8. MORAL (7 lessons)
moral = [
  {
    "title": "Look for Values: Chapter 1 — Sharing and Caring",
    "learningObjective": "Learn the joy of sharing with siblings and classmates.",
    "warmUp": "How do you feel when a friend shares their coloring pencils?",
    "mainContent": [block("Joy of Sharing", "Sharing toys and snacks brings smiles. When we share, our friendships grow stronger and nobody feels left out.")],
    "keyVocabulary": [vocab("Share", "Giving part of what you have"), vocab("Care", "Looking after others kindly"), vocab("Joy", "Deep happiness in heart")],
    "funFact": "Children who share make long-lasting best friends!",
    "practiceQuestions": [q("What should we do with snacks?", "Share with friends", ["Share with friends", "Hide in bag", "Throw away", "Fight over them"], "Sharing brings joy."), q("How does sharing make others feel?", "Happy and loved", ["Happy and loved", "Angry", "Sad", "Scared"], "Sharing creates happiness."), q("Does sharing build friendship?", "Yes", ["Yes", "No", "Never", "Rarely"], "It strengthens friendships.")],
    "parentTip": "Give your child two cookies and suggest sharing one with family."
  },
  {
    "title": "Look for Values: Chapter 2 — Respecting Elders and Teachers",
    "learningObjective": "Show honor and love to parents, grandparents, and teachers.",
    "warmUp": "What polite words do you say to grandfather?",
    "mainContent": [block("Honoring Elders", "Elders love us and guide our path. We listen to teachers, greet grandparents with respect, and help parents at home.")],
    "keyVocabulary": [vocab("Respect", "Treating others with honor"), vocab("Elder", "Older family members"), vocab("Guidance", "Wise helpful advice")],
    "funFact": "Saying 'Salam' or 'Good morning' with a smile makes elders feel respected!",
    "practiceQuestions": [q("How should we treat teachers?", "With respect and attention", ["With respect and attention", "Ignore them", "Shout loud", "Run"], "Respect teachers."), q("How do we greet grandparents?", "Warmly and politely", ["Warmly and politely", "With anger", "In silence", "By hiding"], "Greet elders politely."), q("Helping parents at home is:", "A good value", ["A good value", "Bad", "Wrong", "Waste of time"], "Helping parents is noble.")],
    "parentTip": "Have your child bring a glass of water for grandfather."
  },
  {
    "title": "More Values: Chapter 1 — Cleanliness is Goodness",
    "learningObjective": "Keep body, clothes, and surroundings clean.",
    "warmUp": "Where do you throw candy wrappers?",
    "mainContent": [block("Clean Living", "Cleanliness keeps illnesses away. Throw trash in wastebaskets, wash hands, and keep school desks neat.")],
    "keyVocabulary": [vocab("Cleanliness", "Keeping neat and free from dirt"), vocab("Wastebasket", "Bin for garbage"), vocab("Neat", "Tidy and organized")],
    "funFact": "A clean room helps you study better and sleep peacefully!",
    "practiceQuestions": [q("Where do candy wrappers belong?", "In the wastebasket", ["In the wastebasket", "On the floor", "Under desk", "On bed"], "Throw trash in bins."), q("What does cleanliness protect against?", "Germs and sickness", ["Germs and sickness", "Good health", "Joy", "Happiness"], "Cleanliness stops germs."), q("Is a neat desk good?", "Yes", ["Yes", "No", "Never", "Bad"], "Neatness is a virtue.")],
    "parentTip": "Encourage child to tidy their toys after playing."
  },
  {
    "title": "More Values: Chapter 2 — Being Helpful at Home",
    "learningObjective": "Help family with simple chores.",
    "warmUp": "Can you carry your own water bottle to the table?",
    "mainContent": [block("Helping Hands", "Helping mother fold clothes, setting the table, and watering plants makes you a responsible, loving child.")],
    "keyVocabulary": [vocab("Chore", "A small household task"), vocab("Helpful", "Ready to assist"), vocab("Responsible", "Doing your duties well")],
    "funFact": "Helping with chores boosts brain coordination and confidence!",
    "practiceQuestions": [q("How can you help at home?", "Put away toys and shoes", ["Put away toys and shoes", "Make big messes", "Break plates", "Refuse to move"], "Tidying helps family."), q("Does helping make mother happy?", "Yes very happy", ["Yes very happy", "No", "Never", "Angry"], "Parents feel proud and happy."), q("Are small chores good for kids?", "Yes", ["Yes", "No", "Never", "Dangerous"], "Small chores build responsibility.")],
    "parentTip": "Assign one simple daily task like arranging slippers at the door."
  },
  {
    "title": "More Values: Chapter 3 — Kindness to Animals and Nature",
    "learningObjective": "Treat animals gently and protect green plants.",
    "warmUp": "What would you do if a thirsty bird landed on your window?",
    "mainContent": [block("Caring for Nature", "Never hurt street animals or pluck leaves needlessly. Place water for birds and plant green saplings.")],
    "keyVocabulary": [vocab("Compassion", "Feeling sympathy for creatures"), vocab("Sapling", "A young baby tree"), vocab("Gentle", "Kind and non-violent")],
    "funFact": "Trees clean our city air and give sweet oxygen for us to breathe!",
    "practiceQuestions": [q("How should we treat street animals?", "With gentle kindness", ["With gentle kindness", "Throw stones", "Chase them", "Scare them"], "Treat all creatures kindly."), q("Why do we put water bowls on balconies?", "For thirsty birds", ["For thirsty birds", "To make puddles", "For fun", "To waste it"], "Birds need water in heat."), q("Should we pluck flower petals?", "No, let them bloom", ["No, let them bloom", "Yes tear them", "Throw them", "Step on them"], "Let flowers bloom on plants.")],
    "parentTip": "Place seeds and water for birds together."
  },
  {
    "title": "More Values: Chapter 4 — Patience and Listening",
    "learningObjective": "Practice waiting your turn and listening without interrupting.",
    "warmUp": "Can you wait calmly while another friend speaks?",
    "mainContent": [block("The Power of Patience", "Patience means waiting your turn calmly without throwing tantrums. Listening carefully shows respect to speakers.")],
    "keyVocabulary": [vocab("Patience", "Ability to wait calmly"), vocab("Interrupt", "Speaking while someone else talks"), vocab("Turn", "Your proper time in queue")],
    "funFact": "Patient people solve puzzles faster and make better choices!",
    "practiceQuestions": [q("What should you do in a queue?", "Wait your turn patiently", ["Wait your turn patiently", "Push others", "Cut line", "Scream"], "Wait calmly in line."), q("When someone is speaking, you should:", "Listen quietly", ["Listen quietly", "Interrupt loud", "Cover ears", "Run away"], "Listen with full attention."), q("Is patience a great superpower?", "Yes", ["Yes", "No", "Never", "Bad"], "Patience is a great virtue.")],
    "parentTip": "Play a game where each family member speaks for 1 minute while others listen."
  },
  {
    "title": "More Values: Chapter 5 — Gratitude and Saying Thank You",
    "learningObjective": "Express sincere gratitude with 'Thank you' and 'Alhamdulillah'.",
    "warmUp": "What magic words do you say when someone hands you a gift?",
    "mainContent": [block("Grateful Heart", "Gratitude means appreciating all good things. Say Thank You to helpers, parents, and friends. Say Alhamdulillah to Allah.")],
    "keyVocabulary": [vocab("Gratitude", "Being thankful in heart"), vocab("Appreciate", "Recognizing the value of good things"), vocab("Blessing", "A wonderful gift in life")],
    "funFact": "Saying thank you releases happy chemicals in the brain!",
    "practiceQuestions": [q("What do you say when given a gift?", "Thank you!", ["Thank you!", "Give more", "I dislike it", "Nothing"], "Always say Thank you."), q("What do we say to Allah for blessings?", "Alhamdulillah", ["Alhamdulillah", "Goodbye", "Excuse me", "Sorry"], "Alhamdulillah means all praise to Allah."), q("Does gratitude make us happier?", "Yes, very much", ["Yes, very much", "No", "Never", "Makes sad"], "Gratitude brings deep joy.")],
    "parentTip": "Share 3 things you are grateful for each night at bedtime."
  }
]

print(f"Moral count: {len(moral)}")

# 9. DRAWING (6 lessons)
drawing = [
  {
    "title": "Drawing: A Colorful Balloon",
    "learningObjective": "Draw and color an oval balloon with string and highlights.",
    "warmUp": "What is your favorite balloon color at a birthday party?",
    "mainContent": [block("Balloon Art", "Draw a smooth oval shape, add a small triangle knot at bottom, draw a wavy string, and color bright red or yellow.")],
    "keyVocabulary": [vocab("Oval", "An egg-like rounded shape"), vocab("Highlight", "White shine showing light"), vocab("String", "Thin cord attached to balloon")],
    "funFact": "Hot air balloons were the very first way humans flew into the sky!",
    "drawingSteps": [
      "1. Draw a clean oval shape in the center of the page.",
      "2. Add a tiny triangle knot at the bottom of the oval.",
      "3. Draw a curvy wavy line trailing down as the string.",
      "4. Color bright red, leaving a small white curved oval inside for shiny reflection."
    ],
    "parentTip": "Help child hold crayon firmly and stroke in one direction."
  },
  {
    "title": "Drawing: A Flying Kite",
    "learningObjective": "Draw a diamond kite flying in the sky.",
    "warmUp": "Have you flown kites during Shakrain festival in Old Dhaka?",
    "mainContent": [block("Diamond Kite", "Draw a cross (+), connect four corners to make a diamond, add a tail with ribbons, and color with two bright colors.")],
    "keyVocabulary": [vocab("Diamond", "A four-sided shape with tilted corners"), vocab("Symmetry", "Both halves looking identical"), vocab("Ribbon", "Small colorful tail bows")],
    "funFact": "Kites were invented over 2,000 years ago in Asia!",
    "drawingSteps": [
      "1. Draw a straight vertical line and a horizontal cross line.",
      "2. Connect the four endpoints to form a sharp diamond shape.",
      "3. Draw a long waving tail with three little ribbon bowties.",
      "4. Color the top triangle blue and bottom triangle bright yellow."
    ],
    "parentTip": "Use a ruler or straight edge to guide the cross lines."
  },
  {
    "title": "Drawing: National Flower Water Lily (Shapla)",
    "learningObjective": "Draw Bangladesh's national flower on water.",
    "warmUp": "What shape are the petals of a white water lily?",
    "mainContent": [block("Water Lily Drawing", "Draw a central oval bud, add curved pointed petals on both sides, draw a wavy water line, and a round green leaf.")],
    "keyVocabulary": [vocab("Petal", "Soft colorful part of flower"), vocab("Lily pad", "Large round floating leaf"), vocab("Waterline", "Gentle waves on water")],
    "funFact": "Water lilies float on top of water because their stems have air tubes!",
    "drawingSteps": [
      "1. Draw a pointed oval petal in the center.",
      "2. Add three curved petals on the left and three on the right.",
      "3. Draw a flat circular lily pad leaf with a small wedge cut.",
      "4. Color petals white/pink, leaf green, and draw light blue water ripples below."
    ],
    "parentTip": "Look at an image of Shapla and draw together."
  },
  {
    "title": "Drawing: A Friendly Hen",
    "learningObjective": "Draw a hen with comb, beak, and feathers.",
    "warmUp": "What sound does a mother hen make when clucking to her chicks?",
    "mainContent": [block("Hen Drawing", "Draw a circle for head, a bigger oval for body, add red comb on top, orange triangular beak, and tail feathers.")],
    "keyVocabulary": [vocab("Comb", "Red fleshy crest on hen's head"), vocab("Beak", "Hard pointed mouth"), vocab("Feather", "Soft plumage covering body")],
    "funFact": "Hens talk to their unhatched baby chicks while sitting on eggs!",
    "drawingSteps": [
      "1. Draw a small circle head connected to a round oval body.",
      "2. Add a wavy red crown (comb) on head and a sharp orange triangle beak.",
      "3. Draw three arching tail feathers and two little stick legs at the bottom.",
      "4. Color body warm brown or yellow, comb bright red, and feet orange."
    ],
    "parentTip": "Point out the hen's round shapes before starting to sketch."
  },
  {
    "title": "Drawing: A Decorated Design Jar (Kula/Matka)",
    "learningObjective": "Draw a traditional clay pot with folk decorative patterns.",
    "warmUp": "Have you seen painted clay pots at Pohela Boishakh melas?",
    "mainContent": [block("Design Jar", "Draw an oval top rim, curve outwards for a round belly pot, add zig-zag and dot patterns, and color with folk colors.")],
    "keyVocabulary": [vocab("Clay pot", "Vessel made from baked earth"), vocab("Pattern", "Repeating geometric design"), vocab("Rim", "The circular opening edge")],
    "funFact": "Bangladeshi clay pottery art has been made along riverbanks for thousands of years!",
    "drawingSteps": [
      "1. Draw a horizontal oval for the top rim.",
      "2. Curve two big round arcs down to a flat base to form the pot body.",
      "3. Draw zig-zag lines, waves, and dots across the middle belly.",
      "4. Color pot terracotta red/orange and patterns in bright yellow and white."
    ],
    "parentTip": "Encourage child to invent their own repeating dot or star pattern."
  },
  {
    "title": "Drawing: A Simple Village Scenery",
    "learningObjective": "Draw a classic Bangladesh landscape with hut, sun, and river.",
    "warmUp": "What does a green village look like with a little tin-roof hut?",
    "mainContent": [block("Village Landscape", "Draw a horizon line, a rising morning sun behind hills, a small thatched hut, a winding river, and a green palm tree.")],
    "keyVocabulary": [vocab("Horizon", "Line where earth and sky meet"), vocab("Hut", "Small village house with sloped roof"), vocab("Landscape", "View of natural scenery")],
    "funFact": "Green village sceneries are the most beloved drawing subject in Bangladeshi schools!",
    "drawingSteps": [
      "1. Draw a straight horizon line across the middle.",
      "2. Draw two soft rounded hills with a semi-circle rising sun in between.",
      "3. Draw a triangle-roof hut on the right side and a curvy river on the left.",
      "4. Color sky light blue, sun golden yellow, hills green, and hut brown/red."
    ],
    "parentTip": "Hang the finished landscape drawing proudly on the refrigerator."
  }
]

print(f"Drawing count: {len(drawing)}")

curriculum = {
  "bangla": bangla,
  "english": english,
  "math": math,
  "islam": islam,
  "gk": gk,
  "science": science,
  "computer": computer,
  "moral": moral,
  "drawing": drawing
}

print(f"Total subjects: {len(curriculum)}")
counts = {k: len(v) for k, v in curriculum.items()}
print("Lesson counts per subject:", counts)
total_lessons = sum(counts.values())
print(f"Total lessons: {total_lessons}")

# Write to json file
with open("curriculum_complete.json", "w", encoding="utf-8") as f:
    json.dump(curriculum, f, ensure_ascii=False, indent=2)

print("Saved curriculum_complete.json successfully!")
