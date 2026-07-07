/*
 * RSSB BCI 2026 - Extra high-yield question bank (Paper-I + Paper-II).
 * Most-important, syllabus-ke-according verified factual MCQs.
 * Browser: window.RSSB_BANK_EXTRA ; Node: module.exports.
 */
(function (root) {
  "use strict";
  const arr = [];
  let n = 0;
  // e(paper, subject, topic, sub, diff, qHi, qEn, opts, ans, expl, trick, optsEn)
  function e(paper, subject, topic, sub, diff, qHi, qEn, opts, ans, expl, trick, optsEn) {
    n++;
    const oEn = optsEn || opts;
    arr.push({
      id: `EX-${String(n).padStart(4, "0")}`,
      paper, subject, topic, subtopic: sub, difficulty: diff,
      question: `${qHi}\n${qEn}`, questionHi: qHi, questionEn: qEn,
      options: opts.map((o, i) => `${o} / ${oEn[i]}`), optionsHi: opts, optionsEn: oEn,
      answer: ans, explanation: expl, trick: trick || "", time: 40,
      sourceType: "Most important 2026 (verified)"
    });
  }

  /* ======================= PAPER-I ======================= */

  /* -- Rajasthan Art & Culture -- */
  e("Paper-I", "Rajasthan Art & Culture", "Festivals", "Gangaur", "Medium",
    "Gangaur tyohaar mukhyata kis devi ko samarpit hai?",
    "The Gangaur festival is mainly dedicated to which goddess?",
    ["Gauri (Parvati)", "Lakshmi", "Saraswati", "Durga"], 0,
    "Gangaur Gauri (Parvati) ko samarpit hai aur Rajasthan mein suhaag ke liye manaya jaata hai.", "Gan+gaur = Gauri.",
    ["Gauri (Parvati)", "Lakshmi", "Saraswati", "Durga"]);
  e("Paper-I", "Rajasthan Art & Culture", "Folk music", "Instrument", "Medium",
    "Ravanhatha kis prakaar ka vaadya yantra hai?",
    "Ravanhatha is which type of musical instrument?",
    ["Taar wala (string)", "Dhol type", "Bansuri type", "Ghanta type"], 0,
    "Ravanhatha ek prachin taar (string) vaadya yantra hai jo Rajasthan mein lok geeton mein bajaya jaata hai.", "Ravanhatha = string instrument.",
    ["String instrument", "Drum type", "Flute type", "Bell type"]);
  e("Paper-I", "Rajasthan Art & Culture", "Paintings", "Bani Thani", "Medium",
    "Prasiddh 'Bani Thani' painting kis chitrashaili (school) se sambandhit hai?",
    "The famous 'Bani Thani' painting belongs to which school?",
    ["Kishangarh", "Mewar", "Bundi", "Kota"], 0,
    "Bani Thani Kishangarh chitrashaili ki pratinidhi kriti hai, ise 'Indian Mona Lisa' bhi kehte hain.", "Bani Thani = Kishangarh.");
  e("Paper-I", "Rajasthan Art & Culture", "Architecture", "Karni Mata", "Medium",
    "Chuhon (rats) ke liye prasiddh Karni Mata mandir kaha hai?",
    "The Karni Mata temple, famous for rats, is located where?",
    ["Deshnok (Bikaner)", "Pushkar (Ajmer)", "Nathdwara", "Kolayat"], 0,
    "Deshnok (Bikaner) ka Karni Mata mandir chuhon ke liye prasiddh hai.", "Karni Mata = Deshnok, Bikaner.");

  /* -- Rajasthan History -- */
  e("Paper-I", "Rajasthan History", "Major dynasties", "Mewar", "Medium",
    "Mewar (Udaipur) rajya kis rajvansh se sambandhit tha?",
    "The Mewar (Udaipur) kingdom belonged to which dynasty?",
    ["Sisodia", "Rathore", "Kachwaha", "Chauhan"], 0,
    "Mewar Sisodia rajvansh ka tha; Marwar (Jodhpur) Rathore ka aur Amber/Jaipur Kachwaha ka.", "Mewar=Sisodia, Marwar=Rathore, Jaipur=Kachwaha.");
  e("Paper-I", "Rajasthan History", "Architecture", "Hawa Mahal", "Medium",
    "Hawa Mahal (Palace of Winds) kis sheher mein sthit hai?",
    "In which city is the Hawa Mahal (Palace of Winds) located?",
    ["Jaipur", "Jodhpur", "Udaipur", "Kota"], 0,
    "Hawa Mahal Jaipur mein hai, Maharaja Sawai Pratap Singh ne banwaya tha.", "Hawa Mahal = Jaipur.");
  e("Paper-I", "Rajasthan History", "Architecture", "Kumbhalgarh", "Medium",
    "Kumbhalgarh durg kis liye vishesh roop se prasiddh hai?",
    "Kumbhalgarh fort is especially famous for what?",
    ["Vishwa ki doosri sabse lambi deewar", "Sabse purana mandir", "Sabse badi jheel", "Sabse unchi choti"], 0,
    "Kumbhalgarh (Rajsamand) ki deewar Great Wall of China ke baad vishwa ki doosri sabse lambi deewar hai.", "Kumbhalgarh = lambi deewar.",
    ["The world's second longest wall", "The oldest temple", "The largest lake", "The highest peak"]);

  /* -- Rajasthan Geography -- */
  e("Paper-I", "Rajasthan Geography", "Physical features", "Area", "Easy",
    "Kshetrafal ki drishti se Bharat ka sabse bada rajya kaunsa hai?",
    "By area, which is the largest state of India?",
    ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"], 0,
    "Rajasthan kshetrafal ke aadhaar par Bharat ka sabse bada rajya hai.", "Sabse bada rajya (area) = Rajasthan.");
  e("Paper-I", "Rajasthan Geography", "Minerals", "Marble", "Medium",
    "Prasiddh safed sangmarmar (white marble) kis sthaan se nikalta hai?",
    "Famous white marble is extracted from which place?",
    ["Makrana", "Khetri", "Zawar", "Degana"], 0,
    "Makrana (Nagaur) ka safed sangmarmar prasiddh hai; Taj Mahal isi se bana.", "Makrana = marble (Taj Mahal).");
  e("Paper-I", "Rajasthan Geography", "Minerals", "Copper", "Medium",
    "Khetri (Jhunjhunu) kis khanij (mineral) ke liye prasiddh hai?",
    "Khetri (Jhunjhunu) is famous for which mineral?",
    ["Tamba (Copper)", "Sona", "Coyla", "Namak"], 0,
    "Khetri tambe (copper) ke liye prasiddh hai.", "Khetri = copper.",
    ["Copper", "Gold", "Coal", "Salt"]);
  e("Paper-I", "Rajasthan Geography", "Climate", "Tropic", "Medium",
    "Kark rekha (Tropic of Cancer) Rajasthan ke kis jile se guzarti hai?",
    "The Tropic of Cancer passes through which district of Rajasthan?",
    ["Banswara", "Bikaner", "Jaipur", "Alwar"], 0,
    "Kark rekha Rajasthan ke dakshini jile Banswara se guzarti hai.", "Kark rekha = Banswara.");
  e("Paper-I", "Rajasthan Geography", "Agriculture", "Bajra", "Medium",
    "Rajasthan kis fasal ke utpadan mein Bharat mein agrani (leading) hai?",
    "Rajasthan is a leading producer of which crop in India?",
    ["Bajra aur sarson", "Chawal", "Chai", "Kapaas only"], 0,
    "Rajasthan bajra, sarson (mustard) aur oon (wool) utpadan mein agrani hai.", "Rajasthan = bajra, sarson, oon.",
    ["Millet (bajra) and mustard", "Rice", "Tea", "Only cotton"]);
  e("Paper-I", "Rajasthan Geography", "Rivers and lakes", "City of Lakes", "Easy",
    "Rajasthan ka kaunsa sheher 'City of Lakes' (jheelon ka sheher) kehlata hai?",
    "Which city of Rajasthan is called the 'City of Lakes'?",
    ["Udaipur", "Jaipur", "Jodhpur", "Kota"], 0,
    "Udaipur ko City of Lakes kehte hain (Pichola, Fateh Sagar jheelein).", "Udaipur = jheelein.");
  e("Paper-I", "Rajasthan Geography", "Physical features", "Blue City", "Easy",
    "Rajasthan ka kaunsa sheher 'Blue City' (Sun City) kehlata hai?",
    "Which city of Rajasthan is called the 'Blue City' (Sun City)?",
    ["Jodhpur", "Jaipur", "Udaipur", "Bikaner"], 0,
    "Jodhpur ko Blue City aur Sun City kehte hain.", "Jodhpur = Blue/Sun City.");

  /* -- General Science: Physics -- */
  e("Paper-I", "General Science", "Physics basics", "Power", "Easy",
    "Shakti (power) ka SI unit kya hai?",
    "What is the SI unit of power?",
    ["Watt", "Joule", "Newton", "Ampere"], 0,
    "Shakti ka SI matrak Watt (W) hai; 1 Watt = 1 Joule/second.", "Power = Watt.");
  e("Paper-I", "General Science", "Physics basics", "Pressure", "Medium",
    "Dabaav (pressure) ka SI unit kya hai?",
    "What is the SI unit of pressure?",
    ["Pascal", "Newton", "Watt", "Joule"], 0,
    "Dabaav ka SI matrak Pascal (Pa) hai.", "Pressure = Pascal.");
  e("Paper-I", "General Science", "Physics basics", "Gravity", "Medium",
    "Prithvi par gurutvakarshan ke kaaran tvaran (g) ka maan lagbhag kitna hai?",
    "What is the approximate value of acceleration due to gravity (g) on Earth?",
    ["9.8 m/s²", "9.8 km/s", "98 m/s²", "1.8 m/s²"], 0,
    "Prithvi par g ka maan lagbhag 9.8 m/s² hota hai.", "g ≈ 9.8 m/s².");
  e("Paper-I", "General Science", "Physics basics", "Sound", "Medium",
    "Dhwani (sound) kis madhyam mein sabse tez chalti hai?",
    "In which medium does sound travel fastest?",
    ["Thos (solid)", "Drav (liquid)", "Gas", "Vacuum"], 0,
    "Dhwani thos mein sabse tez aur vacuum mein bilkul nahi chalti.", "Solid > liquid > gas; vacuum = zero.",
    ["Solid", "Liquid", "Gas", "Vacuum"]);

  /* -- General Science: Chemistry -- */
  e("Paper-I", "General Science", "Chemistry basics", "Salt", "Easy",
    "Sadharan namak (common salt) ka rasaayanik naam kya hai?",
    "What is the chemical name of common salt?",
    ["Sodium chloride (NaCl)", "Sodium bicarbonate", "Calcium carbonate", "Potassium nitrate"], 0,
    "Sadharan namak sodium chloride (NaCl) hai.", "Namak = NaCl.");
  e("Paper-I", "General Science", "Chemistry basics", "pH", "Medium",
    "Shudh paani (pure water) ka pH maan kitna hota hai?",
    "What is the pH value of pure water?",
    ["7 (neutral)", "0", "14", "1"], 0,
    "Shudh paani neutral hota hai, iska pH 7 hai.", "Neutral pH = 7.");
  e("Paper-I", "General Science", "Chemistry basics", "Atmosphere", "Medium",
    "Vayumandal (atmosphere) mein sabse adhik matra mein kaunsi gas hai?",
    "Which gas is present in the largest amount in the atmosphere?",
    ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"], 0,
    "Vayumandal mein lagbhag 78% Nitrogen aur 21% Oxygen hoti hai.", "Sabse zyada = Nitrogen (78%).");
  e("Paper-I", "General Science", "Chemistry basics", "Diamond", "Medium",
    "Prakriti ka sabse kathor (hardest) padarth kaunsa hai?",
    "Which is the hardest natural substance?",
    ["Heera (Diamond)", "Sona", "Loha", "Granite"], 0,
    "Heera (diamond) prakriti ka sabse kathor padarth hai (carbon ka roop).", "Sabse kathor = diamond.",
    ["Diamond", "Gold", "Iron", "Granite"]);

  /* -- General Science: Biology/Health -- */
  e("Paper-I", "General Science", "Biology basics", "Chromosomes", "Medium",
    "Manav ke pratyek koshika (cell) mein kitne chromosomes hote hain?",
    "How many chromosomes are there in each human cell?",
    ["46 (23 jode)", "23", "48", "44"], 0,
    "Manav koshika mein 46 chromosomes (23 jode) hote hain.", "Human = 46 (23 pairs).",
    ["46 (23 pairs)", "23", "48", "44"]);
  e("Paper-I", "General Science", "Biology basics", "Largest gland", "Medium",
    "Manav sharir ki sabse badi granthi (gland) kaunsi hai?",
    "Which is the largest gland in the human body?",
    ["Yakrit (Liver)", "Agnyashay", "Thyroid", "Adrenal"], 0,
    "Liver (yakrit) manav sharir ki sabse badi granthi hai.", "Sabse badi gland = Liver.",
    ["Liver", "Pancreas", "Thyroid", "Adrenal"]);
  e("Paper-I", "General Science", "Health and nutrition", "Blood donor", "Hard",
    "Kaunsa blood group 'universal donor' kehlata hai?",
    "Which blood group is called the 'universal donor'?",
    ["O negative", "AB positive", "A positive", "B negative"], 0,
    "O negative kisi ko bhi de sakta hai, isliye universal donor; AB positive universal recipient hai.", "O– donor, AB+ recipient.");
  e("Paper-I", "General Science", "Health and nutrition", "Iodine", "Medium",
    "Iodine ki kami se kaunsa rog hota hai?",
    "Deficiency of iodine causes which disease?",
    ["Ghengha (Goitre)", "Scurvy", "Rickets", "Anemia"], 0,
    "Iodine ki kami se ghengha (goitre) rog hota hai.", "Iodine kami = goitre.",
    ["Goitre", "Scurvy", "Rickets", "Anemia"]);
  e("Paper-I", "General Science", "Health and nutrition", "Malaria", "Medium",
    "Malaria rog kis jeev se failta hai?",
    "Malaria disease is spread by which organism?",
    ["Female Anopheles machhar", "Aedes machhar", "Housefly", "Cockroach"], 0,
    "Malaria Plasmodium parjeevi ke kaaran hota hai jo maada Anopheles machhar se failta hai.", "Malaria = Anopheles machhar.",
    ["Female Anopheles mosquito", "Aedes mosquito", "Housefly", "Cockroach"]);

  /* -- Space -- */
  e("Paper-I", "General Science", "Environment", "Red planet", "Easy",
    "Kis grah ko 'Laal Grah' (Red Planet) kaha jaata hai?",
    "Which planet is called the 'Red Planet'?",
    ["Mangal (Mars)", "Budh", "Shukra", "Brihaspati"], 0,
    "Iron oxide ke kaaran Mangal (Mars) laal dikhta hai.", "Red planet = Mars.",
    ["Mars", "Mercury", "Venus", "Jupiter"]);
  e("Paper-I", "General Science", "Environment", "Hottest planet", "Medium",
    "Souramandal ka sabse garam grah kaunsa hai?",
    "Which is the hottest planet in the solar system?",
    ["Shukra (Venus)", "Budh (Mercury)", "Mangal", "Prithvi"], 0,
    "Ghane CO2 vayumandal (greenhouse) ke kaaran Venus sabse garam grah hai.", "Sabse garam = Venus.",
    ["Venus", "Mercury", "Mars", "Earth"]);

  /* -- General Knowledge / static -- */
  e("Paper-I", "Current Affairs", "National current affairs", "National Bird", "Easy",
    "Bharat ka rashtriya pakshi kaunsa hai?",
    "What is the national bird of India?",
    ["Mor (Peacock)", "Tota", "Koyal", "Baaz"], 0,
    "Bharat ka rashtriya pakshi Mor (Peacock) hai.", "India bird = Peacock.",
    ["Peacock", "Parrot", "Cuckoo", "Eagle"]);
  e("Paper-I", "Current Affairs", "National current affairs", "National Animal", "Easy",
    "Bharat ka rashtriya pashu kaunsa hai?",
    "What is the national animal of India?",
    ["Bagh (Tiger)", "Sher", "Haathi", "Ghoda"], 0,
    "Bharat ka rashtriya pashu Bagh (Royal Bengal Tiger) hai.", "India animal = Tiger.",
    ["Tiger", "Lion", "Elephant", "Horse"]);
  e("Paper-I", "Current Affairs", "National current affairs", "Constitution", "Medium",
    "Bharat ka samvidhaan kab laagu (effective) hua?",
    "When did the Constitution of India come into effect?",
    ["26 January 1950", "15 August 1947", "26 November 1949", "2 October 1950"], 0,
    "Samvidhaan 26 January 1950 ko laagu hua, isliye Ganatantra Diwas manate hain.", "26 Jan 1950 = Republic Day.");

  /* -- Reasoning concepts -- */
  e("Paper-I", "General Ability", "Logical Reasoning", "Blood Relation", "Medium",
    "Agar A, B ka pita hai, to B, A ka kya hai?",
    "If A is the father of B, then B is A's what?",
    ["Santan (child)", "Pita", "Bhai", "Chacha"], 0,
    "A pita hai to B uski santaan (beta/beti) hai.", "Relation ulta karke socho.",
    ["Child", "Father", "Brother", "Uncle"]);
  e("Paper-I", "General Ability", "Analytical Ability", "Analogy", "Medium",
    "Ungli : Haath :: Patti (leaf) : ?",
    "Finger : Hand :: Leaf : ?",
    ["Ped (Tree)", "Jad", "Phool", "Beej"], 0,
    "Ungli haath ka hissa hai, waise hi patti ped ka hissa hai.", "Part-whole relation.",
    ["Tree", "Root", "Flower", "Seed"]);

  /* ======================= PAPER-II ======================= */

  /* -- Fundamentals / History -- */
  e("Paper-II", "Fundamentals of Computer", "Data Processing", "Nibble", "Easy",
    "4 bits ke samooh ko kya kehte hain?",
    "A group of 4 bits is called?",
    ["Nibble", "Byte", "Word", "Bit"], 0,
    "4 bit = 1 nibble; 8 bit = 1 byte.", "Aadha byte = nibble.");
  e("Paper-II", "Fundamentals of Computer", "Computer Basics", "First programmer", "Medium",
    "Vishwa ki pehli computer programmer kaun maani jaati hain?",
    "Who is considered the world's first computer programmer?",
    ["Ada Lovelace", "Grace Hopper", "Marie Curie", "Katherine Johnson"], 0,
    "Ada Lovelace ko duniya ki pehli programmer maana jaata hai (Babbage ke engine ke liye).", "First programmer = Ada Lovelace.");
  e("Paper-II", "Fundamentals of Computer", "Computer Basics", "GUI", "Easy",
    "GUI ka full form kya hai?",
    "What is the full form of GUI?",
    ["Graphical User Interface", "General Utility Interface", "Graphic Universal Icon", "Global User Input"], 0,
    "GUI = Graphical User Interface, jisme icons/windows se interact karte hain.", "GUI = graphics wala interface.");
  e("Paper-II", "Fundamentals of Computer", "Output Devices", "Impact printer", "Medium",
    "Nimn mein se kaunsa impact printer hai?",
    "Which of the following is an impact printer?",
    ["Dot matrix", "Laser", "Inkjet", "Thermal"], 0,
    "Dot matrix impact printer hai (ribbon par takkar), laser/inkjet non-impact hain.", "Dot matrix = impact.");

  /* -- MS Office shortcuts / features -- */
  e("Paper-II", "Data Processing", "MS Word", "Bold", "Easy",
    "MS Word mein text ko bold karne ki shortcut key kya hai?",
    "What is the shortcut key to make text bold in MS Word?",
    ["Ctrl + B", "Ctrl + U", "Ctrl + I", "Ctrl + D"], 0,
    "Ctrl+B bold, Ctrl+I italic, Ctrl+U underline.", "B=Bold, I=Italic, U=Underline.");
  e("Paper-II", "Data Processing", "MS Word", "Find", "Easy",
    "MS Office mein 'Find' (dhundhna) ki shortcut key kya hai?",
    "What is the shortcut key for 'Find' in MS Office?",
    ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + K"], 0,
    "Ctrl+F Find, Ctrl+H Replace hota hai.", "F = Find.");
  e("Paper-II", "Data Processing", "MS Excel", "Worksheet", "Medium",
    "Excel mein row aur column ke kaatne se bana box kya kehlata hai?",
    "The box formed by intersection of a row and column in Excel is called?",
    ["Cell", "Range", "Sheet", "Table"], 0,
    "Row aur column ke intersection ko cell kehte hain.", "Intersection = Cell.");
  e("Paper-II", "Data Processing", "MS Excel", "Function", "Hard",
    "Excel mein doosri table se value dhundhne wala common function kaunsa hai?",
    "Which common Excel function looks up a value from another table?",
    ["VLOOKUP", "SUM", "TODAY", "LEN"], 0,
    "VLOOKUP vertical lookup karke kisi table se matching value laata hai.", "V-LOOKUP = vertical dhundho.");

  /* -- Programming -- */
  e("Paper-II", "Programming Fundamentals", "Arrays", "Index", "Medium",
    "C/Java/Python mein array ka pehla index kya hota hai?",
    "In C/Java/Python, what is the first index of an array?",
    ["0", "1", "-1", "2"], 0,
    "Inn languages mein array indexing 0 se shuru hoti hai.", "Array starts at 0.");
  e("Paper-II", "Programming Fundamentals", "Control Statements", "Decision", "Medium",
    "Flowchart mein decision (nirnay) ke liye kaunsa symbol use hota hai?",
    "Which symbol is used for a decision in a flowchart?",
    ["Diamond", "Rectangle", "Oval", "Parallelogram"], 0,
    "Diamond decision, rectangle process, oval start/end, parallelogram input/output darshata hai.", "Decision = Diamond.");
  e("Paper-II", "Programming Fundamentals", "Data Types", "Boolean", "Medium",
    "Boolean data type kitni values le sakta hai?",
    "How many values can a Boolean data type hold?",
    ["2 (True/False)", "10", "Infinite", "0"], 0,
    "Boolean sirf do values leta hai: True ya False (1 ya 0).", "Boolean = True/False.",
    ["2 (True/False)", "10", "Infinite", "0"]);
  e("Paper-II", "Programming Fundamentals", "Functions", "Recursion", "Hard",
    "Recursion ka arth kya hai?",
    "What does recursion mean?",
    ["Function ka khud ko call karna", "Loop chalana", "File save karna", "Variable delete karna"], 0,
    "Recursion mein ek function apne aap ko call karta hai jab tak base condition na aaye.", "Recursion = khud ko call.",
    ["A function calling itself", "Running a loop", "Saving a file", "Deleting a variable"]);

  /* -- Networking / Internet -- */
  e("Paper-II", "Communication and Network Concepts", "Introduction to Networks", "WWW", "Medium",
    "World Wide Web (WWW) ke aavishkaarak kaun hain?",
    "Who invented the World Wide Web (WWW)?",
    ["Tim Berners-Lee", "Charles Babbage", "Bill Gates", "Steve Jobs"], 0,
    "Tim Berners-Lee ne 1989 mein WWW ka aavishkaar kiya.", "WWW = Tim Berners-Lee.");
  e("Paper-II", "Internet of Things and Applications", "Internet Protocol", "URL", "Easy",
    "URL ka full form kya hai?",
    "What is the full form of URL?",
    ["Uniform Resource Locator", "Universal Router Link", "Uniform Router Location", "United Resource Locator"], 0,
    "URL = Uniform Resource Locator, kisi web resource ka pata.", "URL = web ka address.");
  e("Paper-II", "Network Security", "Security", "HTTPS", "Medium",
    "HTTPS mein 'S' kis cheez ko darshata hai?",
    "What does the 'S' in HTTPS represent?",
    ["Secure", "Server", "System", "Standard"], 0,
    "HTTPS = HTTP + Secure (SSL/TLS encryption ke saath).", "S = Secure.");
  e("Paper-II", "Communication and Network Concepts", "Networking Devices", "Modem", "Medium",
    "Modem ka mukhya kaam kya hai?",
    "What is the main function of a modem?",
    ["Digital aur analog signal ke beech convert karna", "Sirf print karna", "Virus banane", "Sirf typing"], 0,
    "Modem (Modulator-Demodulator) digital data ko analog aur vapas convert karta hai.", "Modem = Mo(dulate)+dem.",
    ["Converting between digital and analog signals", "Only printing", "Creating virus", "Only typing"]);
  e("Paper-II", "Communication and Network Concepts", "Introduction to Networks", "IP", "Medium",
    "Internet par har device ki unique pehchaan kya hoti hai?",
    "What uniquely identifies each device on the internet?",
    ["IP address", "Font", "Wallpaper", "Filename"], 0,
    "IP address har network device ko unique pehchaan deta hai.", "IP = network ka pata.");

  /* -- Network Security -- */
  e("Paper-II", "Network Security", "Security", "Phishing", "Medium",
    "Phishing attack ka mukhya uddeshya kya hota hai?",
    "What is the main aim of a phishing attack?",
    ["Nakli message se personal/bank jaankari churana", "Speed badhana", "Font badalna", "Backup lena"], 0,
    "Phishing mein nakli email/website se user ki sanvedanshil jaankari (password, OTP) churayi jaati hai.", "Phishing = nakli jaal se chori.",
    ["Stealing personal/bank info via fake messages", "Increasing speed", "Changing fonts", "Taking backup"]);
  e("Paper-II", "Network Security", "Security", "Encryption", "Hard",
    "Encryption ka mukhya uddeshya kya hai?",
    "What is the main purpose of encryption?",
    ["Data ko coded/unreadable roop mein badalna", "Data delete karna", "Speed badhana", "Font badhana"], 0,
    "Encryption data ko cipher (coded) roop mein badalta hai taaki bina key ke koi na padh sake.", "Encrypt = talebandi (lock).",
    ["Converting data to a coded/unreadable form", "Deleting data", "Increasing speed", "Increasing font"]);

  /* -- OS -- */
  e("Paper-II", "Computer Organization and Operating System", "Operating System Overview", "Kernel", "Hard",
    "Operating system ka core (central) hissa kya kehlata hai?",
    "What is the central core part of an operating system called?",
    ["Kernel", "Shell", "Driver", "File"], 0,
    "Kernel OS ka core hai jo hardware aur processes manage karta hai.", "Core of OS = Kernel.");
  e("Paper-II", "Computer Organization and Operating System", "Operating System Overview", "Android", "Medium",
    "Android operating system kis par based hai?",
    "The Android operating system is based on what?",
    ["Linux kernel", "Windows", "macOS", "DOS"], 0,
    "Android Linux kernel par based mobile OS hai.", "Android = Linux based.");

  /* -- DBMS -- */
  e("Paper-II", "Database Management System", "SQL", "WHERE", "Medium",
    "SQL mein rows filter karne ke liye kaunsa clause use hota hai?",
    "Which SQL clause is used to filter rows?",
    ["WHERE", "ORDER BY", "GROUP BY", "CREATE"], 0,
    "WHERE clause condition ke aadhaar par rows filter karta hai.", "Filter rows = WHERE.");
  e("Paper-II", "Database Management System", "SQL", "ORDER BY", "Medium",
    "SQL mein result ko sort karne ke liye kaunsa clause use hota hai?",
    "Which SQL clause is used to sort the result?",
    ["ORDER BY", "WHERE", "INSERT", "DROP"], 0,
    "ORDER BY result ko ascending/descending sort karta hai.", "Sort = ORDER BY.");
  e("Paper-II", "Database Management System", "RDBMS", "Foreign Key", "Hard",
    "Foreign key ka mukhya kaam kya hai?",
    "What is the main role of a foreign key?",
    ["Do tables ke beech sambandh (link) banana", "Font badalna", "Row delete karna", "Backup lena"], 0,
    "Foreign key ek table ki primary key ko doosri table se jodkar relationship banati hai.", "Foreign key = tables ko jode.",
    ["Linking two tables", "Changing fonts", "Deleting rows", "Taking backup"]);

  /* -- Pedagogy -- */
  e("Paper-II", "Pedagogy", "Learning Theories", "Operant", "Hard",
    "Operant conditioning ka siddhant kisne diya?",
    "Who gave the theory of operant conditioning?",
    ["B.F. Skinner", "Pavlov", "Piaget", "Freud"], 0,
    "Skinner ne operant conditioning diya; Pavlov ne classical conditioning.", "Skinner=operant, Pavlov=classical.");
  e("Paper-II", "Pedagogy", "Teaching Methods", "Learning by doing", "Medium",
    "'Learning by doing' (karke seekhna) siddhant kisse juda hai?",
    "'Learning by doing' is associated with whom?",
    ["John Dewey", "Skinner", "Pavlov", "Freud"], 0,
    "John Dewey ne 'learning by doing' par bal diya (activity based).", "Learning by doing = Dewey.");
  e("Paper-II", "Pedagogy", "Evaluation", "Bloom", "Hard",
    "Shaikshik uddeshyon ke vargikaran (taxonomy) ke liye kaun prasiddh hai?",
    "Who is famous for the taxonomy of educational objectives?",
    ["Benjamin Bloom", "Piaget", "Skinner", "Dewey"], 0,
    "Benjamin Bloom ne learning ke objectives ka taxonomy (cognitive, affective, psychomotor) diya.", "Taxonomy = Bloom.");
  e("Paper-II", "Pedagogy", "Child Psychology", "Montessori", "Medium",
    "Montessori shiksha paddhati kisne viksit ki?",
    "Who developed the Montessori method of education?",
    ["Maria Montessori", "Froebel", "Gandhi", "Tagore"], 0,
    "Maria Montessori ne chote bachchon ke liye activity-based Montessori method banaya.", "Montessori = Maria Montessori.");

  /* ============ PAPER-II : Full forms (bahut poocha jaata hai) ============ */
  const fullForms = [
    ["RAM", "Random Access Memory", ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Run Access Memory"], "RAM = Random Access Memory (temporary, volatile)."],
    ["ROM", "Read Only Memory", ["Read Only Memory", "Random Only Memory", "Run Only Memory", "Read Open Memory"], "ROM = Read Only Memory (permanent, non-volatile)."],
    ["USB", "Universal Serial Bus", ["Universal Serial Bus", "Universal System Bus", "United Serial Bus", "Universal Serial Byte"], "USB = Universal Serial Bus (data/charging port)."],
    ["CPU", "Central Processing Unit", ["Central Processing Unit", "Central Program Unit", "Computer Personal Unit", "Central Process Utility"], "CPU = Central Processing Unit (brain of computer)."],
    ["ALU", "Arithmetic Logic Unit", ["Arithmetic Logic Unit", "Access Logic Unit", "Arithmetic Local Unit", "Alternate Logic Unit"], "ALU = Arithmetic Logic Unit (calculations in CPU)."],
    ["HTTP", "HyperText Transfer Protocol", ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transmission Path", "Home Text Transfer Protocol"], "HTTP = HyperText Transfer Protocol (web)."],
    ["FTP", "File Transfer Protocol", ["File Transfer Protocol", "Fast Transfer Protocol", "File Transmission Path", "Folder Transfer Protocol"], "FTP = File Transfer Protocol (file upload/download)."],
    ["DNS", "Domain Name System", ["Domain Name System", "Data Name Server", "Digital Network System", "Domain Network Server"], "DNS = Domain Name System (naam ko IP mein badalta hai)."],
    ["ISP", "Internet Service Provider", ["Internet Service Provider", "Internet System Protocol", "Internal Service Provider", "Internet Speed Provider"], "ISP = Internet Service Provider (internet deta hai)."],
    ["PDF", "Portable Document Format", ["Portable Document Format", "Personal Document File", "Printed Document Format", "Portable Data File"], "PDF = Portable Document Format."],
    ["GUI", "Graphical User Interface", ["Graphical User Interface", "General User Input", "Graphic Utility Icon", "Global User Interface"], "GUI = Graphical User Interface."],
    ["BIOS", "Basic Input Output System", ["Basic Input Output System", "Binary Input Output System", "Basic Internal Operating System", "Base Input Output Setup"], "BIOS = Basic Input Output System (booting)."],
    ["SQL", "Structured Query Language", ["Structured Query Language", "Simple Query Language", "System Query Language", "Sequential Query Language"], "SQL = Structured Query Language (database)."],
    ["HTML", "HyperText Markup Language", ["HyperText Markup Language", "High Text Markup Language", "HyperText Machine Language", "Home Tool Markup Language"], "HTML = HyperText Markup Language (web pages)."],
    ["LAN", "Local Area Network", ["Local Area Network", "Large Area Network", "Long Access Network", "Linked Area Network"], "LAN = Local Area Network (chota area)."],
    ["WAN", "Wide Area Network", ["Wide Area Network", "Wireless Area Network", "Web Area Network", "World Access Network"], "WAN = Wide Area Network (bada area, jaise internet)."],
    ["SSD", "Solid State Drive", ["Solid State Drive", "Super Speed Drive", "Solid System Disk", "Static State Drive"], "SSD = Solid State Drive (fast storage)."],
    ["OCR", "Optical Character Recognition", ["Optical Character Recognition", "Optical Colour Reader", "Online Character Reader", "Optical Code Recognition"], "OCR = Optical Character Recognition (text scan)."],
    ["UPS", "Uninterruptible Power Supply", ["Uninterruptible Power Supply", "Universal Power Supply", "United Power System", "Unlimited Power Supply"], "UPS = Uninterruptible Power Supply (backup power)."],
    ["VPN", "Virtual Private Network", ["Virtual Private Network", "Verified Private Network", "Virtual Public Network", "Visual Private Network"], "VPN = Virtual Private Network (secure connection)."]
  ];
  fullForms.forEach(([abbr, correct, opts, expl]) => {
    e("Paper-II", "Fundamentals of Computer", "Computer Basics", "Full Forms", "Easy",
      `${abbr} ka full form kya hai?`, `What is the full form of ${abbr}?`,
      opts, 0, expl, `${abbr} = ${correct}.`);
  });

  /* ============ PAPER-II : Shortcuts, files, hardware ============ */
  e("Paper-II", "Data Processing", "MS Word", "Shortcut", "Easy",
    "Kisi bhi program mein 'Select All' ki shortcut key kya hai?",
    "What is the shortcut key for 'Select All'?",
    ["Ctrl + A", "Ctrl + S", "Ctrl + E", "Ctrl + L"], 0,
    "Ctrl+A pura content select karta hai.", "A = All.");
  e("Paper-II", "Data Processing", "MS Word", "Shortcut", "Easy",
    "Kisi action ko undo (wapas) karne ki shortcut key kya hai?",
    "What is the shortcut key to Undo an action?",
    ["Ctrl + Z", "Ctrl + Y", "Ctrl + U", "Ctrl + X"], 0,
    "Ctrl+Z undo, Ctrl+Y redo karta hai.", "Z = undo (zurra wapas).");
  e("Paper-II", "Computer Organization and Operating System", "Operating System Overview", "Shortcut", "Medium",
    "Windows mein active window/program band karne ki key kya hai?",
    "In Windows, which key closes the active window/program?",
    ["Alt + F4", "Ctrl + F4 only", "Shift + F4", "Tab + F4"], 0,
    "Alt+F4 active program/window ko band karta hai.", "Alt+F4 = close.");
  e("Paper-II", "Fundamentals of Computer", "File Types", "Executable", "Medium",
    "Windows mein kaunsi file extension executable (chal sakne wali) program ki hoti hai?",
    "Which file extension is an executable program in Windows?",
    [".exe", ".txt", ".jpg", ".mp3"], 0,
    ".exe executable program file hoti hai; .txt text, .jpg image, .mp3 audio.", ".exe = execute.");
  e("Paper-II", "Fundamentals of Computer", "File Types", "Image", "Easy",
    "Nimn mein se kaunsi image file ki extension hai?",
    "Which of the following is an image file extension?",
    [".jpg", ".docx", ".mp3", ".exe"], 0,
    ".jpg (JPEG) image file extension hai.", "jpg/png/gif = image.");
  e("Paper-II", "Fundamentals of Computer", "Computer Basics", "Motherboard", "Medium",
    "Computer ke saare parts ko jodne wala main circuit board kya kehlata hai?",
    "The main circuit board that connects all computer parts is called?",
    ["Motherboard", "Monitor", "Keyboard", "CPU"], 0,
    "Motherboard main board hai jispar CPU, RAM aur baaki components jude hote hain.", "Main board = Motherboard.");
  e("Paper-II", "Fundamentals of Computer", "Computer Basics", "Cold Boot", "Medium",
    "Band computer ko power on karke start karna kya kehlata hai?",
    "Starting a computer from a powered-off state is called?",
    ["Cold booting", "Warm booting", "Formatting", "Debugging"], 0,
    "Band computer ko on karna cold boot; chalte computer ko restart karna warm boot.", "Off se on = cold boot.",
    ["Cold booting", "Warm booting", "Formatting", "Debugging"]);
  e("Paper-II", "Fundamentals of Computer", "Output Devices", "Softcopy", "Medium",
    "Monitor par dikhne wale output ko kya kehte hain?",
    "The output shown on a monitor is called?",
    ["Soft copy", "Hard copy", "Backup", "Draft"], 0,
    "Screen par dikhne wala output soft copy; printer se kagaz par nikla output hard copy.", "Screen = soft, kagaz = hard.",
    ["Soft copy", "Hard copy", "Backup", "Draft"]);

  /* ============ PAPER-II : Programming / DSA ============ */
  e("Paper-II", "Programming Fundamentals", "Programming Techniques", "Debugging", "Easy",
    "Program se errors (bugs) ko dhundhkar theek karna kya kehlata hai?",
    "Finding and fixing errors (bugs) in a program is called?",
    ["Debugging", "Compiling", "Formatting", "Encoding"], 0,
    "Debugging mein program ke bugs identify karke theek kiye jaate hain.", "Bug hatana = debugging.",
    ["Debugging", "Compiling", "Formatting", "Encoding"]);
  e("Paper-II", "Programming Fundamentals", "Programming Techniques", "Translator", "Hard",
    "Assembly language ko machine language mein badalne wala translator kaunsa hai?",
    "Which translator converts assembly language into machine language?",
    ["Assembler", "Compiler", "Interpreter", "Linker"], 0,
    "Assembler assembly code ko machine code mein badalta hai.", "Assembly => Assembler.");
  e("Paper-II", "Programming Fundamentals", "Operators", "Equality", "Medium",
    "Zyadatar programming languages mein do values ko equal compare karne ka operator kya hai?",
    "In most programming languages, which operator compares two values for equality?",
    ["==", "=", "=<", "!"], 0,
    "== comparison (equality) hai; = assignment (value dena) hai.", "== compare, = assign.");
  e("Paper-II", "Programming Fundamentals", "Variables", "Variable", "Easy",
    "Program mein data ko store karne ke liye naam wale storage ko kya kehte hain?",
    "A named storage used to hold data in a program is called?",
    ["Variable", "Constant", "Loop", "Comment"], 0,
    "Variable ek naam wala storage hai jiski value change ho sakti hai.", "Variable = badalne wala data.",
    ["Variable", "Constant", "Loop", "Comment"]);
  e("Paper-II", "Data Structures and Algorithms", "Searching", "Linear Search", "Medium",
    "Linear (sequential) search ka time complexity kya hota hai?",
    "What is the time complexity of linear (sequential) search?",
    ["O(n)", "O(log n)", "O(1)", "O(n^2)"], 0,
    "Linear search har element ek-ek karke check karta hai, isliye O(n).", "Ek-ek dekhna = O(n).");
  e("Paper-II", "Data Structures and Algorithms", "Arrays", "Array", "Medium",
    "Array ke baare mein kaunsa statement sahi hai?",
    "Which statement about an array is correct?",
    ["Same type ke elements ka collection, contiguous memory mein", "Alag-alag type ka ek hi element", "Sirf ek variable", "Ek programming language"], 0,
    "Array same data type ke elements ka indexed collection hai jo laga-laga (contiguous) memory mein rehta hai.", "Array = same type, index se access.",
    ["A collection of same-type elements in contiguous memory", "A single element of mixed type", "Just one variable", "A programming language"]);
  e("Paper-II", "Data Structures and Algorithms", "Binary Tree", "Root", "Medium",
    "Tree data structure mein sabse upar wale node ko kya kehte hain?",
    "The topmost node in a tree data structure is called?",
    ["Root", "Leaf", "Edge", "Path"], 0,
    "Tree ka sabse upar ka node root; sabse neeche bina child wale node leaf kehlate hain.", "Top node = Root.");
  e("Paper-II", "Data Structures and Algorithms", "Stack", "Peek", "Hard",
    "Stack ke top element ko bina remove kiye dekhne wale operation ko kya kehte hain?",
    "The operation to view the top element of a stack without removing it is called?",
    ["Peek", "Push", "Pop", "Enqueue"], 0,
    "Peek/Top top element sirf dekhta hai; pop remove karta hai.", "Sirf dekhna = Peek.");

  /* ============ PAPER-II : Networking / Internet / DBMS / Web ============ */
  e("Paper-II", "Communication and Network Concepts", "OSI Model", "First Layer", "Medium",
    "OSI model ki sabse pehli (lowest) layer kaunsi hai?",
    "Which is the first (lowest) layer of the OSI model?",
    ["Physical layer", "Application layer", "Transport layer", "Network layer"], 0,
    "OSI ki sabse neeche Physical layer aur sabse upar Application layer hoti hai.", "Layer 1 = Physical.");
  e("Paper-II", "Communication and Network Concepts", "Introduction to Networks", "Server", "Easy",
    "Network mein services/data provide karne wale main computer ko kya kehte hain?",
    "The main computer that provides services/data in a network is called?",
    ["Server", "Client", "Modem", "Printer"], 0,
    "Server data/services deta hai, client use karta hai.", "Deta hai = Server.");
  e("Paper-II", "Communication and Network Concepts", "Introduction to Networks", "Bandwidth", "Medium",
    "Network bandwidth kis unit mein maapi jaati hai?",
    "In which unit is network bandwidth measured?",
    ["bits per second (bps)", "Hertz only", "Pixels", "Bytes only"], 0,
    "Bandwidth data transfer rate hai, bits per second (bps) mein maapi jaati hai.", "Bandwidth = bps.",
    ["bits per second (bps)", "only Hertz", "Pixels", "only Bytes"]);
  e("Paper-II", "Internet of Things and Applications", "E-Commerce", "B2C", "Medium",
    "Amazon/Flipkart par company se seedha customer ko bechna kis e-commerce model mein aata hai?",
    "Selling directly from a company to a customer (like Amazon) is which e-commerce model?",
    ["B2C", "B2B", "C2C", "G2C"], 0,
    "Business to Consumer (B2C) mein business seedha end customer ko bechta hai.", "B2C = Business to Consumer.");
  e("Paper-II", "Internet of Things and Applications", "HTML", "Link Tag", "Medium",
    "HTML mein hyperlink banane ke liye kaunsa tag use hota hai?",
    "Which HTML tag is used to create a hyperlink?",
    ["<a>", "<img>", "<p>", "<br>"], 0,
    "<a> (anchor) tag href attribute ke saath hyperlink banata hai.", "a = anchor = link.");
  e("Paper-II", "Internet of Things and Applications", "HTML", "Image Tag", "Medium",
    "HTML mein image dikhane ke liye kaunsa tag use hota hai?",
    "Which HTML tag is used to display an image?",
    ["<img>", "<image>", "<pic>", "<src>"], 0,
    "<img> tag src attribute ke saath image show karta hai.", "img = image.");
  e("Paper-II", "Internet of Things and Applications", "Scripts", "CSS", "Medium",
    "Web page ko style/design (rang, layout) dene ke liye kya use hota hai?",
    "What is used to style/design a web page (colors, layout)?",
    ["CSS", "SQL", "FTP", "TCP"], 0,
    "CSS (Cascading Style Sheets) web page ki styling (rang, font, layout) karta hai.", "CSS = styling.");
  e("Paper-II", "Database Management System", "RDBMS", "Row", "Medium",
    "Relational database ki table mein ek row (record) ko technically kya kehte hain?",
    "In a relational database table, a row (record) is technically called?",
    ["Tuple", "Attribute", "Column", "Domain"], 0,
    "Table mein row ko tuple aur column ko attribute kehte hain.", "Row = Tuple, Column = Attribute.");
  e("Paper-II", "Database Management System", "Database Overview", "DBA", "Medium",
    "Database ko manage aur maintain karne wale vyakti ko kya kehte hain?",
    "The person who manages and maintains a database is called?",
    ["DBA (Database Administrator)", "Programmer", "Analyst", "Operator"], 0,
    "DBA (Database Administrator) database ko design, secure aur maintain karta hai.", "DBA = database ka admin.",
    ["DBA (Database Administrator)", "Programmer", "Analyst", "Operator"]);

  /* ============ PAPER-I : aur Rajasthan / Science / GK ============ */
  e("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Longest River", "Medium",
    "Rajasthan mein sabse lambi nadi kaunsi hai?",
    "Which is the longest river in Rajasthan?",
    ["Chambal", "Luni", "Banas", "Mahi"], 0,
    "Chambal Rajasthan ki sabse lambi (aur barah-maasi) nadi hai.", "Sabse lambi (Raj) = Chambal.");
  e("Paper-I", "Rajasthan Geography", "Wildlife", "Desert NP", "Medium",
    "Godawan (Great Indian Bustard) ke sanrakshan ke liye Desert National Park kaha hai?",
    "The Desert National Park (for Great Indian Bustard) is located where?",
    ["Jaisalmer", "Kota", "Alwar", "Bharatpur"], 0,
    "Desert National Park Jaisalmer-Barmer kshetra mein hai, Godawan ke liye prasiddh.", "Desert NP = Jaisalmer.");
  e("Paper-I", "Rajasthan Art & Culture", "Saints and Lok Devta", "Bishnoi", "Hard",
    "Ped-paudhon aur jeevon ki raksha ke liye Khejarli balidan kis samaj se juda hai?",
    "The Khejarli sacrifice (to protect trees) is associated with which community?",
    ["Bishnoi", "Meena", "Bhil", "Garasia"], 0,
    "1730 mein Amrita Devi ke netritva mein Bishnoi samaj ne khejri ped bachane ke liye balidan diya.", "Khejarli = Bishnoi (Amrita Devi).",
    ["Bishnoi", "Meena", "Bhil", "Garasia"]);
  e("Paper-I", "Rajasthan History", "Major dynasties", "Khanwa", "Hard",
    "Khanwa ka yudh (1527) kin ke beech hua tha?",
    "The Battle of Khanwa (1527) was fought between whom?",
    ["Rana Sanga aur Babur", "Pratap aur Akbar", "Prithviraj aur Ghori", "Hemu aur Akbar"], 0,
    "1527 mein Khanwa mein Rana Sanga (Mewar) aur Babur ke beech yudh hua, jisme Babur jeeta.", "Khanwa = Rana Sanga vs Babur.");
  e("Paper-I", "Rajasthan Art & Culture", "Folk dances", "Language", "Medium",
    "Marwari, Mewari aur Dhundhari kya hain?",
    "What are Marwari, Mewari and Dhundhari?",
    ["Rajasthani bhasha ki boliyaan (dialects)", "Nritya", "Nadiyan", "Kile"], 0,
    "Ye Rajasthani bhasha ki pramukh boliyaan (dialects) hain.", "Boliyaan = dialects.",
    ["Dialects of the Rajasthani language", "Dances", "Rivers", "Forts"]);
  e("Paper-I", "General Science", "Physics basics", "Frequency", "Medium",
    "Aavritti (frequency) ka SI unit kya hai?",
    "What is the SI unit of frequency?",
    ["Hertz", "Watt", "Newton", "Joule"], 0,
    "Aavritti ka SI matrak Hertz (Hz) hai.", "Frequency = Hertz.");
  e("Paper-I", "General Science", "Physics basics", "Resistance", "Medium",
    "Vidyut pratirodh (electrical resistance) ka SI unit kya hai?",
    "What is the SI unit of electrical resistance?",
    ["Ohm", "Ampere", "Volt", "Watt"], 0,
    "Pratirodh ka SI matrak Ohm (Ω) hai.", "Resistance = Ohm.");
  e("Paper-I", "General Science", "Biology basics", "Smallest bone", "Hard",
    "Manav sharir ki sabse choti haddi kaunsi hai?",
    "Which is the smallest bone in the human body?",
    ["Stapes (kaan mein)", "Femur", "Tibia", "Radius"], 0,
    "Stapes (kaan ki haddi) manav sharir ki sabse choti haddi hai; Femur sabse badi.", "Sabse choti = Stapes (kaan).",
    ["Stapes (in the ear)", "Femur", "Tibia", "Radius"]);
  e("Paper-I", "General Science", "Biology basics", "Largest organ", "Medium",
    "Manav sharir ka sabse bada ang (organ) kaunsa hai?",
    "Which is the largest organ of the human body?",
    ["Twacha (Skin)", "Liver", "Heart", "Brain"], 0,
    "Twacha (skin) manav sharir ka sabse bada ang hai.", "Sabse bada ang = Skin.",
    ["Skin", "Liver", "Heart", "Brain"]);
  e("Paper-I", "General Science", "Chemistry basics", "Baking soda", "Medium",
    "Baking soda ka rasaayanik naam kya hai?",
    "What is the chemical name of baking soda?",
    ["Sodium bicarbonate", "Sodium chloride", "Calcium carbonate", "Sodium hydroxide"], 0,
    "Baking soda sodium bicarbonate (NaHCO3) hai.", "Baking soda = sodium bicarbonate.");
  e("Paper-I", "General Science", "Environment", "Nearest planet", "Medium",
    "Sooraj ke sabse nazdeek kaunsa grah hai?",
    "Which planet is nearest to the Sun?",
    ["Budh (Mercury)", "Shukra", "Prithvi", "Mangal"], 0,
    "Budh (Mercury) sooraj ke sabse nazdeek grah hai.", "Sabse paas = Mercury.",
    ["Mercury", "Venus", "Earth", "Mars"]);
  e("Paper-I", "General Ability", "Basic Numeracy", "Roman", "Medium",
    "Roman ank (Roman numeral) mein 'L' ka maan kya hota hai?",
    "In Roman numerals, what is the value of 'L'?",
    ["50", "100", "500", "5"], 0,
    "Roman mein I=1, V=5, X=10, L=50, C=100, D=500, M=1000.", "L = 50.");

  /* =================================================================== */
  /* ====== NAYE 2026 EXPECTED QUESTIONS (23 Aug 2026 exam) ============ */
  /* ====== 2022 pattern + poora syllabus, verified factual MCQs ======= */
  /* =================================================================== */

  /* -------- PAPER-I : Rajasthan GK -------- */
  e("Paper-I", "Rajasthan Geography", "Rivers", "Longest river", "Medium",
    "Rajasthan ki sabse lambi nadi (poori tarah rajya ke andar behne wali) kaunsi hai?",
    "Which is the longest river flowing entirely within Rajasthan?",
    ["Banas", "Chambal", "Luni", "Mahi"], 0,
    "Banas Rajasthan ki sabse lambi nadi hai jo poori tarah rajya ke andar behti hai; iska udgam Khamnor pahadi (Rajsamand) se hai.", "Banas = 'ban aas' rajya ke andar.");
  e("Paper-I", "Rajasthan Geography", "Rivers", "Perennial", "Medium",
    "Rajasthan ki ekmatra baarah-maasi (perennial) nadi kaunsi hai?",
    "Which is the only perennial river of Rajasthan?",
    ["Chambal", "Banas", "Luni", "Kali Sindh"], 0,
    "Chambal Rajasthan ki ekmatra sadaneera (perennial) nadi hai.", "Baarah-maasi = Chambal.");
  e("Paper-I", "Rajasthan Geography", "Lakes", "Salt lake", "Medium",
    "Bharat ki sabse badi khaare paani ki jheel Sambhar kis zile mein hai?",
    "India's largest inland salt lake, Sambhar, is in which district?",
    ["Jaipur (aur Nagaur)", "Udaipur", "Kota", "Alwar"], 0,
    "Sambhar jheel Bharat ki sabse badi antardeshiya khaare paani ki jheel hai, mukhyata Jaipur-Nagaur ke beech.", "Namak = Sambhar.",
    ["Jaipur (and Nagaur)", "Udaipur", "Kota", "Alwar"]);
  e("Paper-I", "Rajasthan Geography", "Physical", "Highest point", "Easy",
    "Rajasthan ki sabse oonchi choti Guru Shikhar kis parvat par sthit hai?",
    "Rajasthan's highest peak, Guru Shikhar, is on which mountain?",
    ["Mount Abu (Aravalli)", "Vindhya", "Satpura", "Himalaya"], 0,
    "Guru Shikhar (~1722 m) Mount Abu, Aravalli shrinkhala mein Rajasthan ka sabse ooncha bindu hai.", "Sabse ooncha = Guru Shikhar, Abu.",
    ["Mount Abu (Aravalli)", "Vindhya", "Satpura", "Himalaya"]);
  e("Paper-I", "Rajasthan Art & Culture", "Dance", "Kalbeliya", "Medium",
    "UNESCO ki dharohar suchi mein shaamil Kalbeliya nritya kis samuday se juda hai?",
    "The Kalbeliya dance, on UNESCO's heritage list, is associated with which community?",
    ["Kalbelia (saperon ka samuday)", "Bhil", "Meena", "Garasia"], 0,
    "Kalbeliya nritya Kalbelia (saperon) samuday ka hai aur 2010 mein UNESCO intangible heritage mein shaamil hua.", "Kalbeliya = Kalbelia saap wale.",
    ["Kalbelia (snake charmer community)", "Bhil", "Meena", "Garasia"]);
  e("Paper-I", "Rajasthan GK", "Tribes", "Largest tribe", "Medium",
    "Rajasthan ki sabse badi janjaati (tribe) kaunsi hai?",
    "Which is the largest tribe of Rajasthan?",
    ["Bhil", "Meena", "Garasia", "Sahariya"], 1,
    "Jansankhya ke aadhaar par Meena Rajasthan ki sabse badi janjaati hai, uske baad Bhil.", "Sankhya: Meena > Bhil.");
  e("Paper-I", "Rajasthan GK", "National Parks", "Tigers", "Medium",
    "Baaghon (tigers) ke liye prasiddh Ranthambore National Park kis zile mein hai?",
    "Ranthambore National Park, famous for tigers, is in which district?",
    ["Sawai Madhopur", "Bharatpur", "Kota", "Alwar"], 0,
    "Ranthambore National Park Sawai Madhopur mein baaghon ke liye prasiddh hai.", "Ranthambore = Sawai Madhopur baagh.");
  e("Paper-I", "Rajasthan GK", "National Parks", "Bird sanctuary", "Medium",
    "Pakshiyon ke liye prasiddh Keoladeo National Park (UNESCO) kaha sthit hai?",
    "Keoladeo National Park (UNESCO), famous for birds, is located where?",
    ["Bharatpur", "Sawai Madhopur", "Bikaner", "Jaisalmer"], 0,
    "Keoladeo (Ghana) National Park Bharatpur mein pravaasi pakshiyon ke liye prasiddh, UNESCO World Heritage hai.", "Ghana = Bharatpur pakshi.");
  e("Paper-I", "Rajasthan GK", "State symbols", "State bird", "Medium",
    "Rajasthan ka rajya pakshi (state bird) kaunsa hai?",
    "What is the state bird of Rajasthan?",
    ["Godawan (Great Indian Bustard)", "Mor", "Koyal", "Baaz"], 0,
    "Rajasthan ka rajya pakshi Godawan (Great Indian Bustard / Son Chiraiya) hai.", "State bird = Godawan.",
    ["Godawan (Great Indian Bustard)", "Peacock", "Koel", "Falcon"]);
  e("Paper-I", "Rajasthan GK", "State symbols", "State tree", "Easy",
    "Rajasthan ka rajya vriksh (state tree) kaunsa hai?",
    "What is the state tree of Rajasthan?",
    ["Khejri", "Neem", "Peepal", "Rohida"], 0,
    "Khejri Rajasthan ka rajya vriksh hai (rajya pushp = Rohida).", "State tree = Khejri, phool = Rohida.");
  e("Paper-I", "Rajasthan History", "Formation", "Statehood", "Medium",
    "Rajasthan Diwas kis tareekh ko manaya jaata hai?",
    "On which date is Rajasthan Day (Rajasthan Diwas) celebrated?",
    ["30 March", "1 November", "15 August", "26 January"], 0,
    "30 March 1949 ko Rajasthan ka ekikaran hua, isliye 30 March ko Rajasthan Diwas manaya jaata hai.", "30 March = Rajasthan Diwas.");
  e("Paper-I", "Rajasthan GK", "Fairs", "Camel fair", "Easy",
    "Prasiddh oont mela (camel fair) Pushkar kis zile mein lagta hai?",
    "The famous Pushkar camel fair is held in which district?",
    ["Ajmer", "Jodhpur", "Bikaner", "Jaisalmer"], 0,
    "Pushkar mela Ajmer zile mein Kartik maas mein lagta hai, oont mele ke liye prasiddh.", "Pushkar = Ajmer.");

  /* -------- PAPER-I : General Science / Ability -------- */
  e("Paper-I", "General Science", "Human body", "Vitamin C", "Medium",
    "Vitamin C ki kami se kaunsa rog hota hai?",
    "Deficiency of Vitamin C causes which disease?",
    ["Scurvy", "Rickets", "Night blindness", "Beri-beri"], 0,
    "Vitamin C (ascorbic acid) ki kami se scurvy (mashudon se khoon) hota hai.", "C ki kami = Scurvy.");
  e("Paper-I", "General Science", "Physics", "Force unit", "Easy",
    "Bal (force) ki SI ikaai (unit) kya hai?",
    "What is the SI unit of force?",
    ["Newton", "Joule", "Watt", "Pascal"], 0,
    "Bal ki SI unit Newton (N) hai; Joule = kaam/urja, Watt = power, Pascal = pressure.", "Force = Newton.");
  e("Paper-I", "General Science", "Chemistry", "Neutral pH", "Easy",
    "Shuddh (neutral) jal ka pH maan kitna hota hai?",
    "What is the pH value of pure (neutral) water?",
    ["7", "0", "14", "10"], 0,
    "Neutral jal ka pH 7 hota hai; 7 se kam = amleey (acidic), 7 se zyada = kshaareey (basic).", "Neutral = 7.");

  /* -------- PAPER-II : Computer Fundamentals -------- */
  e("Paper-II", "Fundamentals of Computer", "Memory", "KB", "Easy",
    "1 Kilobyte (KB) mein kitne bytes hote hain?",
    "How many bytes are there in 1 Kilobyte (KB)?",
    ["1024", "1000", "512", "8"], 0,
    "1 KB = 1024 bytes = 2^10 bytes.", "Computer mein 1 KB = 1024.");
  e("Paper-II", "Fundamentals of Computer", "Memory", "Volatile", "Medium",
    "Nimn mein se kaunsi memory volatile (bijli jaate hi data mit jaata) hai?",
    "Which of the following memory is volatile (loses data when power is off)?",
    ["RAM", "ROM", "Hard Disk", "SSD"], 0,
    "RAM volatile hoti hai — power off hote hi data khatam; ROM/Hard Disk non-volatile hain.", "RAM = temporary/volatile.");
  e("Paper-II", "Fundamentals of Computer", "CPU", "ALU", "Medium",
    "CPU ka kaunsa bhaag ganitiya aur tarkik (arithmetic-logic) operations karta hai?",
    "Which part of the CPU performs arithmetic and logical operations?",
    ["ALU", "Control Unit", "Register", "Cache"], 0,
    "ALU (Arithmetic Logic Unit) ganitiya aur tarkik operations karti hai; Control Unit niyantran karta hai.", "Ganit + logic = ALU.");
  e("Paper-II", "Fundamentals of Computer", "Full forms", "CPU", "Easy",
    "CPU ka poora naam (full form) kya hai?",
    "What is the full form of CPU?",
    ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Control Processing Unit"], 0,
    "CPU = Central Processing Unit, computer ka 'brain'.", "CPU = Central Processing Unit.");
  e("Paper-II", "Fundamentals of Computer", "Number System", "Binary of 10", "Medium",
    "Decimal sankhya 10 ka binary roop kya hai?",
    "What is the binary representation of decimal 10?",
    ["1010", "1100", "1001", "1110"], 0,
    "10 = 8 + 2 = 1010 (binary).", "8+2 = 1010.");
  e("Paper-II", "Fundamentals of Computer", "Software", "Compiler vs Interpreter", "Hard",
    "Poore program ko ek saath machine code mein anuvad karne wala kya kehlata hai?",
    "What translates an entire program into machine code at once?",
    ["Compiler", "Interpreter", "Assembler", "Linker"], 0,
    "Compiler poore program ko ek baar mein anuvad karta hai; Interpreter line-by-line.", "Ek saath = Compiler, line-by-line = Interpreter.");

  /* -------- PAPER-II : MS Office / Shortcuts -------- */
  e("Paper-II", "Data Processing", "Shortcuts", "Undo", "Easy",
    "MS Word/Windows mein last action ko undo (wapas) karne ki shortcut kya hai?",
    "Which shortcut undoes the last action in MS Word/Windows?",
    ["Ctrl + Z", "Ctrl + Y", "Ctrl + U", "Ctrl + X"], 0,
    "Ctrl+Z = Undo; Ctrl+Y = Redo.", "Z = undo (zzz wapas).");
  e("Paper-II", "Data Processing", "MS Excel", "SUM", "Medium",
    "MS Excel mein A1 se A10 tak ka yog nikalne ka sahi formula kaunsa hai?",
    "In MS Excel, which formula correctly sums A1 to A10?",
    ["=SUM(A1:A10)", "=ADD(A1:A10)", "=TOTAL(A1:A10)", "=SUM(A1-A10)"], 0,
    "Excel mein yog ke liye =SUM(A1:A10) sahi hai; ':' range darshata hai.", "Yog = SUM(range).");
  e("Paper-II", "Data Processing", "File formats", "Excel extension", "Easy",
    "MS Excel 2007+ ki workbook file ki default extension kya hai?",
    "What is the default file extension of an MS Excel 2007+ workbook?",
    [".xlsx", ".docx", ".pptx", ".txt"], 0,
    "Excel workbook = .xlsx; Word = .docx; PowerPoint = .pptx.", "Excel = xlsx.");
  e("Paper-II", "Data Processing", "PowerPoint", "Slideshow", "Medium",
    "MS PowerPoint mein slideshow shuru se start karne ki shortcut key kya hai?",
    "Which key starts a slideshow from the beginning in MS PowerPoint?",
    ["F5", "F2", "F7", "Esc"], 0,
    "F5 slideshow shuru se chalu karta hai; Shift+F5 current slide se.", "PPT show = F5.");

  /* -------- PAPER-II : Networking / Security / IoT -------- */
  e("Paper-II", "Communication and Network Concepts", "OSI Model", "Layers", "Medium",
    "OSI reference model mein kitni layers (parat) hoti hain?",
    "How many layers are there in the OSI reference model?",
    ["7", "5", "4", "6"], 0,
    "OSI model mein 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.", "OSI = 7 layers.");
  e("Paper-II", "Communication and Network Concepts", "IP Address", "IPv4 bits", "Hard",
    "IPv4 address kitne bits ka hota hai?",
    "How many bits are there in an IPv4 address?",
    ["32", "64", "128", "16"], 0,
    "IPv4 = 32-bit (4 octets); IPv6 = 128-bit.", "IPv4 = 32, IPv6 = 128.");
  e("Paper-II", "Network Security", "Security", "Firewall", "Medium",
    "Network ko anadhikrit (unauthorized) access se bachane wali system kya kehlati hai?",
    "Which system protects a network from unauthorized access?",
    ["Firewall", "Router", "Modem", "Switch"], 0,
    "Firewall aane-jaane wale traffic ko monitor/filter karke network ki suraksha karti hai.", "Suraksha deewar = Firewall.");
  e("Paper-II", "Internet of Things and Applications", "IoT", "Definition", "Medium",
    "IoT (Internet of Things) mein 'Things' se mukhyata kya matlab hai?",
    "In IoT (Internet of Things), 'Things' mainly refers to what?",
    ["Internet se jude physical devices/sensors", "Sirf mobile apps", "Sirf websites", "Sirf software files"], 0,
    "IoT mein Things = internet se jude bhautik devices/sensors jo data bhejte-lete hain.", "IoT = jude hue devices.",
    ["Physical devices/sensors connected to internet", "Only mobile apps", "Only websites", "Only software files"]);

  /* -------- PAPER-II : OS / DBMS / DSA -------- */
  e("Paper-II", "Computer Organization and Operating System", "Process", "Deadlock", "Hard",
    "Do ya adhik process ek doosre ke resources ke liye anant-kaal tak rukein — yeh sthiti kya kehlati hai?",
    "When two or more processes wait forever for each other's resources, it is called?",
    ["Deadlock", "Booting", "Paging", "Spooling"], 0,
    "Deadlock mein processes ek doosre ke resource ke liye hamesha rukti hain aur koi aage nahi badhti.", "Fasa hua = Deadlock.");
  e("Paper-II", "Database Management System", "Keys", "Primary key", "Medium",
    "Table mein har record ko unique roop se pehchaanne wali key kya kehlati hai?",
    "Which key uniquely identifies each record in a table?",
    ["Primary Key", "Foreign Key", "Candidate Key", "Composite Key"], 0,
    "Primary Key har row ko unique roop se pehchaanti hai aur NULL nahi ho sakti.", "Unique pehchaan = Primary Key.");
  e("Paper-II", "Database Management System", "SQL", "SELECT", "Easy",
    "SQL mein table se data (rows) laane ke liye kaunsa command use hota hai?",
    "Which SQL command is used to retrieve data (rows) from a table?",
    ["SELECT", "INSERT", "DELETE", "UPDATE"], 0,
    "SELECT command table se data retrieve karta hai.", "Data laao = SELECT.");
  e("Paper-II", "Programming Fundamentals", "Data Structures", "Stack", "Medium",
    "Stack data structure kis sidhaant par kaam karta hai?",
    "On which principle does a Stack data structure work?",
    ["LIFO (Last In First Out)", "FIFO (First In First Out)", "Random", "Sorted"], 0,
    "Stack LIFO par kaam karta hai — jo aakhri mein aaya wahi pehle nikalta hai; Queue FIFO.", "Stack = LIFO, Queue = FIFO.");
  e("Paper-II", "Programming Fundamentals", "Arrays", "Index start", "Easy",
    "Adhikaansh programming languages (C, Java, Python) mein array ka pehla index kya hota hai?",
    "In most programming languages (C, Java, Python), what is the first index of an array?",
    ["0", "1", "-1", "2"], 0,
    "Array indexing 0 se shuru hoti hai, isliye pehla element index 0 par hota hai.", "Array shuru = 0.");

  /* -------- PAPER-II : Pedagogy -------- */
  e("Paper-II", "Pedagogy", "Learning Theories", "Cognitive development", "Hard",
    "Bachchon ke sangyanaatmak vikaas (cognitive development) ke charno ka siddhant kisne diya?",
    "Who proposed the theory of stages of children's cognitive development?",
    ["Jean Piaget", "B.F. Skinner", "Ivan Pavlov", "Abraham Maslow"], 0,
    "Jean Piaget ne cognitive development ke 4 charan (sensorimotor, preoperational, concrete, formal) diye.", "Cognitive stages = Piaget.");
  e("Paper-II", "Pedagogy", "Learning Theories", "ZPD", "Hard",
    "'Zone of Proximal Development (ZPD)' ki avdharana kis manovaigyanik ne di?",
    "The concept of the 'Zone of Proximal Development (ZPD)' was given by which psychologist?",
    ["Lev Vygotsky", "Jean Piaget", "Jerome Bruner", "Kohlberg"], 0,
    "ZPD ki avdharana Lev Vygotsky ne di — jo bachcha madad se seekh sakta hai wahi zone.", "ZPD = Vygotsky.");

  if (typeof module !== "undefined" && module.exports) module.exports = arr;
  else root.RSSB_BANK_EXTRA = arr;
})(typeof window !== "undefined" ? window : this);
