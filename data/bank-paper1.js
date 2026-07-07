/*
 * RSSB BCI 2026 - Paper-I (Rajasthan GK, Science, Reasoning) curated bank.
 * Factual verified bilingual MCQs.
 * Browser: window.RSSB_BANK_P1 ; Node: module.exports.
 */
(function (root) {
  "use strict";
  const arr = [];
  let n = 0;
  function b(subject, topic, sub, diff, qHi, qEn, opts, ans, expl, trick, time, optsEn) {
    n++;
    const oEn = optsEn || opts;
    arr.push({
      id: `P1-${String(n).padStart(4, "0")}`,
      paper: "Paper-I", subject, topic, subtopic: sub, difficulty: diff,
      question: `${qHi}\n${qEn}`, questionHi: qHi, questionEn: qEn,
      options: opts.map((o, i) => `${o} / ${oEn[i]}`), optionsHi: opts, optionsEn: oEn,
      answer: ans, explanation: expl, trick: trick || "", time: time || 40,
      sourceType: "Curated important (verified)"
    });
  }

  /* ---------- Rajasthan Art & Culture ---------- */
  b("Rajasthan Art & Culture", "Folk dances", "Ghoomar", "Easy",
    "Rajasthan ka sabse prasiddh mahilaon dwara kiya jaane wala lok nritya kaunsa hai?",
    "Which is the most famous folk dance of Rajasthan performed by women?",
    ["Ghoomar", "Bihu", "Bhangra", "Garba"], 0,
    "Ghoomar Rajasthan ka pramukh lok nritya hai jo mahilaayein ghaghra pehen kar ghoomti hui karti hain.", "Ghoomar = ghoomna.");
  b("Rajasthan Art & Culture", "Folk dances", "Kalbelia", "Medium",
    "Kaunsa Rajasthani lok nritya UNESCO ki intangible heritage list mein shaamil hai?",
    "Which Rajasthani folk dance is in the UNESCO intangible heritage list?",
    ["Kalbelia", "Ghoomar", "Kathak", "Chari"], 0,
    "Kalbelia nritya ko 2010 mein UNESCO ne intangible cultural heritage ghoshit kiya.", "Kalbelia = UNESCO (2010).");
  b("Rajasthan Art & Culture", "Festivals", "Pushkar", "Easy",
    "Prasiddh Pushkar mela Rajasthan ke kis jile mein lagta hai?",
    "The famous Pushkar fair is held in which district of Rajasthan?",
    ["Ajmer", "Jaipur", "Jodhpur", "Udaipur"], 0,
    "Pushkar mela Ajmer jile mein lagta hai, jaha vishwa ka ekmatra Brahma mandir bhi hai.", "Pushkar = Ajmer.");
  b("Rajasthan Art & Culture", "Architecture", "Dilwara", "Medium",
    "Prasiddh Dilwara Jain mandir kaha sthit hain?",
    "The famous Dilwara Jain temples are located where?",
    ["Mount Abu", "Chittorgarh", "Jaisalmer", "Bikaner"], 0,
    "Dilwara ke sangmarmar ke Jain mandir Mount Abu (Sirohi) mein hain, apni nakkashi ke liye prasiddh.", "Dilwara = Mount Abu.");
  b("Rajasthan Art & Culture", "Handicrafts", "Blue Pottery", "Medium",
    "Blue Pottery kis sheher ka prasiddh handicraft hai?",
    "Blue Pottery is a famous handicraft of which city?",
    ["Jaipur", "Kota", "Ajmer", "Alwar"], 0,
    "Neeli mitti wali Blue Pottery Jaipur ka prasiddh shilp hai.", "Blue Pottery = Jaipur.");

  /* ---------- Rajasthan History ---------- */
  b("Rajasthan History", "Freedom movement", "Maharana Pratap", "Medium",
    "Haldighati ka yudh (1576) kin ke beech hua tha?",
    "The Battle of Haldighati (1576) was fought between whom?",
    ["Maharana Pratap aur Mughal (Man Singh)", "Prithviraj aur Ghori", "Rana Sanga aur Babur", "Akbar aur Hemu"], 0,
    "1576 mein Haldighati mein Maharana Pratap aur Akbar ki sena (Man Singh ke netritva) ke beech yudh hua.", "Haldighati = Pratap vs Mughal.",
    45, ["Maharana Pratap and the Mughals (Man Singh)", "Prithviraj and Ghori", "Rana Sanga and Babur", "Akbar and Hemu"]);
  b("Rajasthan History", "Major dynasties", "Chittorgarh", "Medium",
    "Rajasthan ka sabse bada kila (fort) kaunsa hai?",
    "Which is the largest fort of Rajasthan?",
    ["Chittorgarh Fort", "Amber Fort", "Junagarh Fort", "Taragarh Fort"], 0,
    "Chittorgarh durg Rajasthan ka sabse bada kila hai aur veerta-balidaan ka prateek.", "Chittorgarh = sabse bada kila.");
  b("Rajasthan History", "Modern history", "Formation", "Medium",
    "Rajasthan Diwas (Rajasthan Day) kis din manaya jaata hai?",
    "On which day is Rajasthan Day celebrated?",
    ["30 March", "1 November", "15 August", "26 January"], 0,
    "30 March 1949 ko Greater Rajasthan bana, isliye 30 March ko Rajasthan Diwas manaya jaata hai.", "30 March = Rajasthan Diwas.");
  b("Rajasthan History", "Modern history", "Capital", "Easy",
    "Rajasthan ki rajdhani (capital) kaunsi hai?",
    "What is the capital of Rajasthan?",
    ["Jaipur", "Jodhpur", "Udaipur", "Ajmer"], 0,
    "Jaipur Rajasthan ki rajdhani hai, jise Pink City bhi kehte hain.", "Jaipur = Pink City = capital.");
  b("Rajasthan History", "Major dynasties", "Prithviraj", "Medium",
    "Prithviraj Chauhan kis vansh ke shaasak the?",
    "Prithviraj Chauhan belonged to which dynasty?",
    ["Chauhan (Chahamana)", "Sisodia", "Rathore", "Kachwaha"], 0,
    "Prithviraj Chauhan Chauhan (Chahamana) vansh ke prasiddh shaasak the (Ajmer-Delhi).", "Prithviraj = Chauhan vansh.",
    45, ["Chauhan (Chahamana)", "Sisodia", "Rathore", "Kachwaha"]);

  /* ---------- Rajasthan Geography ---------- */
  b("Rajasthan Geography", "Physical features", "Aravalli", "Medium",
    "Rajasthan ki sabse unchi choti (highest peak) kaunsi hai?",
    "Which is the highest peak of Rajasthan?",
    ["Guru Shikhar", "Taragarh", "Achalgarh", "Nag Pahar"], 0,
    "Guru Shikhar (Mount Abu, Aravalli) Rajasthan ki sabse unchi choti hai (~1722 m).", "Guru Shikhar = sabse unchi choti.");
  b("Rajasthan Geography", "Physical features", "Desert", "Easy",
    "Rajasthan ke bade hisse mein kaunsa registaan (desert) faila hai?",
    "Which desert covers a large part of Rajasthan?",
    ["Thar", "Sahara", "Gobi", "Kalahari"], 0,
    "Thar registaan (Great Indian Desert) Rajasthan ke pashchimi bhaag mein faila hai.", "Rajasthan = Thar desert.");
  b("Rajasthan Geography", "Rivers and lakes", "Sambhar", "Medium",
    "Bharat ki sabse badi khaare paani ki jheel (inland saltwater lake) kaunsi hai?",
    "Which is the largest inland saltwater lake in India?",
    ["Sambhar", "Pichola", "Nakki", "Fateh Sagar"], 0,
    "Sambhar jheel (Jaipur ke paas) Bharat ki sabse badi khaare paani ki jheel hai.", "Sambhar = namak ki jheel.");
  b("Rajasthan Geography", "Rivers and lakes", "Luni", "Medium",
    "Rajasthan ke registaan ki pramukh nadi kaunsi hai?",
    "Which is the main river of the Rajasthan desert region?",
    ["Luni", "Ganga", "Yamuna", "Narmada"], 0,
    "Luni Aravalli se nikalkar registaani ilaake se behti hui Kutch ke Rann mein samati hai.", "Luni = registaan ki nadi.");
  b("Rajasthan Geography", "Physical features", "Area", "Medium",
    "Kshetrafal (area) ke aadhaar par Rajasthan ka sabse bada jila kaunsa hai?",
    "By area, which is the largest district of Rajasthan?",
    ["Jaisalmer", "Bikaner", "Barmer", "Jodhpur"], 0,
    "Jaisalmer kshetrafal ke aadhaar par Rajasthan ka sabse bada jila hai.", "Jaisalmer = sabse bada jila.");
  b("Rajasthan Geography", "Wildlife", "Tiger", "Medium",
    "Ranthambore National Park kis jaanwar ke liye prasiddh hai?",
    "Ranthambore National Park is famous for which animal?",
    ["Bagh (Tiger)", "Sher (Lion)", "Haathi (Elephant)", "Gainda (Rhino)"], 0,
    "Ranthambore (Sawai Madhopur) baaghon (tigers) ke liye prasiddh hai.", "Ranthambore = tiger.",
    40, ["Tiger", "Lion", "Elephant", "Rhino"]);
  b("Rajasthan Geography", "Wildlife", "Bird", "Medium",
    "Keoladeo National Park (Bharatpur) mukhyata kis liye prasiddh hai?",
    "Keoladeo National Park (Bharatpur) is mainly famous for what?",
    ["Pakshi (birds)", "Bagh", "Bhaaloo", "Magarmach"], 0,
    "Keoladeo (Bharatpur) pravaasi pakshiyon ke liye prasiddh UNESCO world heritage bird sanctuary hai.", "Keoladeo = birds.",
    40, ["Birds", "Tigers", "Bears", "Crocodiles"]);

  /* ---------- Rajasthan State symbols ---------- */
  b("Rajasthan Art & Culture", "Saints and Lok Devta", "State Bird", "Medium",
    "Rajasthan ka rajya pakshi (state bird) kaunsa hai?",
    "What is the state bird of Rajasthan?",
    ["Godawan (Great Indian Bustard)", "Mor", "Koyal", "Tota"], 0,
    "Rajasthan ka rajya pakshi Godawan (Great Indian Bustard) hai.", "Rajya pakshi = Godawan.",
    40, ["Great Indian Bustard (Godawan)", "Peacock", "Cuckoo", "Parrot"]);
  b("Rajasthan Art & Culture", "Saints and Lok Devta", "State Tree", "Medium",
    "Rajasthan ka rajya vriksh (state tree) kaunsa hai?",
    "What is the state tree of Rajasthan?",
    ["Khejri", "Neem", "Peepal", "Banyan"], 0,
    "Khejri (Prosopis cineraria) Rajasthan ka rajya vriksh hai, jise 'registaan ka kalpvriksh' kehte hain.", "Rajya vriksh = Khejri.");
  b("Rajasthan Art & Culture", "Saints and Lok Devta", "State Flower", "Medium",
    "Rajasthan ka rajya pushp (state flower) kaunsa hai?",
    "What is the state flower of Rajasthan?",
    ["Rohida", "Kamal", "Gulab", "Champa"], 0,
    "Rohida (Tecomella undulata) Rajasthan ka rajya pushp hai.", "Rajya pushp = Rohida.");

  /* ---------- General Science: Physics ---------- */
  b("General Science", "Physics basics", "Force", "Easy",
    "Bal (force) ka SI unit kya hai?",
    "What is the SI unit of force?",
    ["Newton", "Joule", "Watt", "Pascal"], 0,
    "Bal ka SI matrak Newton (N) hai.", "Force = Newton.");
  b("General Science", "Physics basics", "Light", "Medium",
    "Prakash (light) ki gati (vacuum mein) lagbhag kitni hoti hai?",
    "What is the approximate speed of light in vacuum?",
    ["3 × 10^8 m/s", "3 × 10^6 m/s", "3 × 10^5 m/s", "3 × 10^10 m/s"], 0,
    "Vacuum mein prakash ki gati lagbhag 3 × 10^8 meter/second hoti hai.", "Light = 3 lakh km/s.");
  b("General Science", "Physics basics", "Current", "Easy",
    "Vidyut dhaara (electric current) ka SI unit kya hai?",
    "What is the SI unit of electric current?",
    ["Ampere", "Volt", "Ohm", "Watt"], 0,
    "Vidyut dhaara ka SI matrak Ampere (A) hai.", "Current = Ampere.");
  b("General Science", "Physics basics", "Energy", "Medium",
    "Kaarya (work) aur urja (energy) ka SI unit kya hai?",
    "What is the SI unit of work and energy?",
    ["Joule", "Newton", "Watt", "Pascal"], 0,
    "Kaarya aur urja dono ka SI matrak Joule (J) hai.", "Energy = Joule.");

  /* ---------- General Science: Chemistry ---------- */
  b("General Science", "Chemistry basics", "Water", "Easy",
    "Paani (water) ka rasaayanik sutra (chemical formula) kya hai?",
    "What is the chemical formula of water?",
    ["H2O", "CO2", "O2", "H2O2"], 0,
    "Paani do hydrogen aur ek oxygen se banta hai, sutra H2O.", "Water = H2O.");
  b("General Science", "Chemistry basics", "CO2", "Easy",
    "Carbon dioxide ka rasaayanik sutra kya hai?",
    "What is the chemical formula of carbon dioxide?",
    ["CO2", "CO", "O2", "C2O"], 0,
    "Carbon dioxide ka sutra CO2 hai (ek carbon, do oxygen).", "CO2 = carbon dioxide.");
  b("General Science", "Chemistry basics", "Gold", "Medium",
    "Sona (Gold) ka rasaayanik prateek (symbol) kya hai?",
    "What is the chemical symbol of Gold?",
    ["Au", "Ag", "Gd", "Go"], 0,
    "Gold ka symbol Au (Latin: Aurum) hai. Silver = Ag.", "Gold = Au.");
  b("General Science", "Chemistry basics", "Acid", "Medium",
    "Nimbu aur santra mein kaunsa acid paaya jaata hai?",
    "Which acid is found in lemon and orange?",
    ["Citric acid", "Sulfuric acid", "Lactic acid", "Nitric acid"], 0,
    "Nimbu-santra jaise khatte phalon mein citric acid hota hai.", "Citrus = citric acid.");

  /* ---------- General Science: Biology / Health ---------- */
  b("General Science", "Biology basics", "Bones", "Medium",
    "Ek vayask (adult) manav sharir mein kitni haddiyan (bones) hoti hain?",
    "How many bones are there in an adult human body?",
    ["206", "300", "270", "150"], 0,
    "Vayask manav sharir mein 206 haddiyan hoti hain (bachche mein zyada, baad mein jud jaati hain).", "Adult = 206 bones.");
  b("General Science", "Biology basics", "Photosynthesis", "Medium",
    "Paudhe apna bhojan kis prakriya se banate hain?",
    "By which process do plants make their food?",
    ["Photosynthesis (pravaksanshleshan)", "Respiration", "Digestion", "Fermentation"], 0,
    "Paudhe sooraj ki roshni, CO2 aur paani se photosynthesis dwara bhojan banate hain.", "Paudhe = photosynthesis.",
    40, ["Photosynthesis", "Respiration", "Digestion", "Fermentation"]);
  b("General Science", "Health and nutrition", "Vitamin C", "Medium",
    "Vitamin C ki kami se kaunsa rog hota hai?",
    "Deficiency of Vitamin C causes which disease?",
    ["Scurvy", "Rickets", "Night blindness", "Goitre"], 0,
    "Vitamin C ki kami se scurvy (mashudon se khoon) hota hai.", "Vitamin C kami = scurvy.");
  b("General Science", "Health and nutrition", "Vitamin D", "Medium",
    "Suraj ki roshni se sharir mein kaunsa vitamin banta hai?",
    "Which vitamin is produced in the body from sunlight?",
    ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"], 0,
    "Suraj ki UV roshni se twacha mein Vitamin D banta hai (haddiyon ke liye zaroori).", "Dhoop = Vitamin D.");
  b("General Science", "Biology basics", "Blood", "Medium",
    "Manav rakt (blood) ko laal rang kaun deta hai?",
    "What gives red colour to human blood?",
    ["Hemoglobin", "Plasma", "Platelets", "White blood cells"], 0,
    "Hemoglobin (jisme iron hota hai) rakt ko laal rang deta hai aur oxygen le jaata hai.", "Laal khoon = hemoglobin.");

  /* ---------- General Science: Space / Earth ---------- */
  b("General Science", "Environment", "Planet", "Easy",
    "Souramandal (solar system) ka sabse bada grah kaunsa hai?",
    "Which is the largest planet in the solar system?",
    ["Jupiter (Brihaspati)", "Saturn", "Earth", "Mars"], 0,
    "Jupiter (Brihaspati) souramandal ka sabse bada grah hai.", "Sabse bada grah = Jupiter.",
    35, ["Jupiter", "Saturn", "Earth", "Mars"]);
  b("General Science", "Environment", "Sun", "Easy",
    "Prithvi ke sabse nazdeek taara (star) kaunsa hai?",
    "Which is the nearest star to the Earth?",
    ["Sooraj (Sun)", "Chand", "Polaris", "Sirius"], 0,
    "Sooraj prithvi ke sabse nazdeek taara hai.", "Nazdeek taara = Sun.",
    35, ["The Sun", "The Moon", "Polaris", "Sirius"]);
  b("General Science", "Environment", "Ozone", "Medium",
    "Ozone layer suraj ki kaunsi harmful kirno se bachati hai?",
    "The ozone layer protects us from which harmful rays of the sun?",
    ["Ultraviolet (UV)", "Infrared", "X-ray", "Gamma"], 0,
    "Ozone parat suraj ki ultraviolet (UV) kirno ko rokti hai.", "Ozone = UV se bachaav.");

  /* ---------- General Knowledge / Static ---------- */
  b("Current Affairs", "National current affairs", "Capital", "Easy",
    "Bharat ki rajdhani kaunsi hai?",
    "What is the capital of India?",
    ["New Delhi", "Mumbai", "Kolkata", "Jaipur"], 0,
    "Bharat ki rajdhani New Delhi hai.", "India capital = New Delhi.");
  b("Current Affairs", "National current affairs", "Currency", "Easy",
    "Bharat ki mudra (currency) kya hai?",
    "What is the currency of India?",
    ["Rupaya (Rupee)", "Dollar", "Taka", "Rupiah"], 0,
    "Bharat ki mudra Rupaya (Indian Rupee, ₹) hai.", "India = Rupee (₹).",
    30, ["Rupee", "Dollar", "Taka", "Rupiah"]);
  b("Current Affairs", "National current affairs", "River", "Medium",
    "Bharat ki sabse lambi nadi kaunsi hai?",
    "Which is the longest river in India?",
    ["Ganga", "Yamuna", "Godavari", "Narmada"], 0,
    "Ganga Bharat ki sabse lambi nadi hai.", "Sabse lambi nadi (India) = Ganga.");
  b("Current Affairs", "National current affairs", "Father", "Easy",
    "Rashtrapita (Father of the Nation) kise kaha jaata hai?",
    "Who is called the Father of the Nation of India?",
    ["Mahatma Gandhi", "Nehru", "Patel", "Subhash Bose"], 0,
    "Mahatma Gandhi ko Rashtrapita kaha jaata hai.", "Rashtrapita = Gandhi ji.");

  /* ---------- Reasoning concept (non-numeric) ---------- */
  b("General Ability", "Analytical Ability", "Odd One", "Medium",
    "Nimn mein se odd one out chuno: Kutta, Billi, Sher, Gulab.",
    "Choose the odd one out: Dog, Cat, Lion, Rose.",
    ["Gulab (Rose)", "Kutta", "Billi", "Sher"], 0,
    "Kutta, billi, sher jaanwar hain; gulab ek phool hai, isliye odd one.", "Category alag = odd one.",
    35, ["Rose", "Dog", "Cat", "Lion"]);
  b("General Ability", "Analytical Ability", "Direction", "Medium",
    "Suraj kis disha mein ugta hai?",
    "In which direction does the sun rise?",
    ["Poorv (East)", "Pashchim (West)", "Uttar (North)", "Dakshin (South)"], 0,
    "Suraj poorv (East) disha mein ugta aur pashchim mein doobta hai.", "Sunrise = East.",
    30, ["East", "West", "North", "South"]);
  b("General Ability", "Logical Reasoning", "Relation", "Medium",
    "Agar 'Doctor' ka sambandh 'Hospital' se hai, to 'Teacher' ka sambandh kisse hai?",
    "If 'Doctor' relates to 'Hospital', then 'Teacher' relates to?",
    ["School", "Court", "Factory", "Farm"], 0,
    "Doctor hospital mein kaam karta hai, waise hi teacher school mein.", "Kaam ki jagah ka relation.",
    35, ["School", "Court", "Factory", "Farm"]);

  if (typeof module !== "undefined" && module.exports) module.exports = arr;
  else root.RSSB_BANK_P1 = arr;
})(typeof window !== "undefined" ? window : this);
