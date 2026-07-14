/* RSSB BCI 2026 - Mega bank part 03: Current Affairs + General Ability */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG03";
  function b(paper, subject, topic, sub, diff, qHi, qEn, opts, ans, expl, trick, optsEn) {
    n++;
    const oEn = optsEn || opts;
    A.push({
      id: `${PFX}-${String(n).padStart(4, "0")}`,
      paper, subject, topic, subtopic: sub, difficulty: diff,
      question: `${qHi}\n${qEn}`, questionHi: qHi, questionEn: qEn,
      options: opts.map((o, i) => `${o} / ${oEn[i]}`), optionsHi: opts, optionsEn: oEn,
      answer: ans, explanation: expl, trick: trick || "", time: 40,
      sourceType: "Most important 2026 (verified)"
    });
  }
  // === QUESTIONS START ===

  /* ===================== CURRENT AFFAIRS (Rajasthan schemes + static) ===================== */

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "Palanhar Yojana", "Easy",
    "Palanhar Yojana kis rajya ki anathon evं jarooratmand baccho ke liye yojana hai?",
    "Palanhar Yojana is a scheme of which state for orphan and needy children?",
    ["Rajasthan", "Gujarat", "Madhya Pradesh", "Punjab"], 0,
    "Palanhar Yojana Rajasthan sarkar ki yojana hai jismein anath/jarooratmand baccho ke palan-poshan ke liye aarthik sahayata di jati hai.",
    "Palanhar = paalne wala; Rajasthan ki scheme.",
    ["Rajasthan", "Gujarat", "Madhya Pradesh", "Punjab"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "Jan Aadhaar", "Easy",
    "Rajasthan ki Jan Aadhaar Yojana mein pariwar ko diya jane wala number kitne ank ka hota hai?",
    "In Rajasthan's Jan Aadhaar Yojana, the family is given a number of how many digits?",
    ["8 ank", "10 ank", "12 ank", "16 ank"], 1,
    "Jan Aadhaar card mein 10-ank ka pariwar pehchaan number diya jata hai (ek pariwar-ek pehchaan).",
    "Jan Aadhaar = 10 digit; Aadhaar = 12 digit.",
    ["8 digit", "10 digit", "12 digit", "16 digit"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "Chiranjeevi Yojana", "Easy",
    "Mukhyamantri Chiranjeevi Swasthya Bima Yojana kis kshetra se sambandhit hai?",
    "Mukhyamantri Chiranjeevi Swasthya Bima Yojana is related to which sector?",
    ["Shiksha", "Swasthya (health) bima", "Rozgar", "Krishi"], 1,
    "Yah Rajasthan ki swasthya bima (health insurance) yojana hai jismein cashless ilaj ka laabh milta hai.",
    "Swasthya Bima = health insurance.",
    ["Education", "Health insurance", "Employment", "Agriculture"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "Urban employment", "Medium",
    "Indira Gandhi Shahari Rozgar Guarantee Yojana kin logon ko rozgar deti hai?",
    "The Indira Gandhi Shahari Rozgar Guarantee Yojana provides employment to whom?",
    ["Gramin (rural) parivaar", "Shahari (urban) parivaar", "Kisan", "Vidhyarthi"], 1,
    "Yah Rajasthan ki shahari kshetron mein rozgar dene wali yojana hai (MNREGA ka shahari roop).",
    "Shahari = urban.",
    ["Rural families", "Urban families", "Farmers", "Students"]);

  b("Paper-I", "Current Affairs", "National current affairs", "Beti Bachao", "Medium",
    "Beti Bachao Beti Padhao abhiyaan 2015 mein kis rajya se shuru kiya gaya tha?",
    "The Beti Bachao Beti Padhao campaign was launched in 2015 from which state?",
    ["Rajasthan", "Haryana (Panipat)", "Uttar Pradesh", "Bihar"], 1,
    "Yah abhiyaan 22 January 2015 ko Panipat, Haryana se shuru kiya gaya tha.",
    "Panipat, Haryana se shuruat.",
    ["Rajasthan", "Haryana (Panipat)", "Uttar Pradesh", "Bihar"]);

  b("Paper-I", "Current Affairs", "National current affairs", "Capital", "Easy",
    "Bharat ki rajdhani kaun si hai?",
    "What is the capital of India?",
    ["Mumbai", "New Delhi", "Kolkata", "Chennai"], 1,
    "Bharat ki rajdhani New Delhi hai.",
    "",
    ["Mumbai", "New Delhi", "Kolkata", "Chennai"]);

  b("Paper-I", "Current Affairs", "National current affairs", "Currency", "Easy",
    "Bharat ki mudra (currency) kya hai?",
    "What is the currency of India?",
    ["Dollar", "Rupaya (Rupee)", "Taka", "Rupiah"], 1,
    "Bharat ki mudra Bharatiya Rupaya (INR) hai.",
    "",
    ["Dollar", "Rupee", "Taka", "Rupiah"]);

  b("Paper-I", "Current Affairs", "National current affairs", "River", "Easy",
    "Bharat ki rashtriya nadi (national river) kaun si hai?",
    "Which is the national river of India?",
    ["Yamuna", "Ganga", "Godavari", "Narmada"], 1,
    "Ganga ko 2008 mein Bharat ki rashtriya nadi ghoshit kiya gaya.",
    "",
    ["Yamuna", "Ganga", "Godavari", "Narmada"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "Capital of Rajasthan", "Easy",
    "Rajasthan ki rajdhani kaun si hai?",
    "What is the capital of Rajasthan?",
    ["Jodhpur", "Udaipur", "Jaipur", "Kota"], 2,
    "Rajasthan ki rajdhani Jaipur (Pink City) hai.",
    "Pink City = Jaipur.",
    ["Jodhpur", "Udaipur", "Jaipur", "Kota"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "State bird", "Medium",
    "Rajasthan ka rajya pakshi (state bird) kaun sa hai?",
    "What is the state bird of Rajasthan?",
    ["Mor", "Godawan (Great Indian Bustard)", "Koyal", "Saras"], 1,
    "Rajasthan ka rajya pakshi Godawan (Great Indian Bustard) hai.",
    "Godawan = state bird.",
    ["Peacock", "Godawan (Great Indian Bustard)", "Cuckoo", "Crane"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "State tree", "Medium",
    "Rajasthan ka rajya vriksha (state tree) kaun sa hai?",
    "What is the state tree of Rajasthan?",
    ["Neem", "Khejri", "Peepal", "Banyan"], 1,
    "Rajasthan ka rajya vriksha Khejri hai (marusthal ka kalpvriksha).",
    "Khejri = state tree of Rajasthan.",
    ["Neem", "Khejri", "Peepal", "Banyan"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "State flower", "Medium",
    "Rajasthan ka rajya pushp (state flower) kaun sa hai?",
    "What is the state flower of Rajasthan?",
    ["Kamal", "Rohida", "Gulab", "Champa"], 1,
    "Rajasthan ka rajya pushp Rohida hai (Marwar teak / desert teak).",
    "Rohida = state flower.",
    ["Lotus", "Rohida", "Rose", "Champa"]);

  b("Paper-I", "Current Affairs", "National current affairs", "Canal", "Medium",
    "Indira Gandhi Nahar (Rajasthan Nahar) mukhyata kis rajya ke marusthaliya kshetra ko paani deti hai?",
    "The Indira Gandhi Canal mainly supplies water to the desert region of which state?",
    ["Gujarat", "Rajasthan", "Haryana", "Punjab"], 1,
    "Indira Gandhi Nahar Punjab ke Harike barrage se nikalti hai aur Rajasthan ke marusthal ko paani pahunchati hai.",
    "Rajasthan ki 'jeevan rekha'.",
    ["Gujarat", "Rajasthan", "Haryana", "Punjab"]);

  b("Paper-I", "Current Affairs", "Awards", "Bharat Ratna", "Easy",
    "Bharat ka sarvocch nagrik samman (highest civilian award) kaun sa hai?",
    "Which is the highest civilian award of India?",
    ["Padma Vibhushan", "Bharat Ratna", "Padma Bhushan", "Padma Shri"], 1,
    "Bharat Ratna Bharat ka sarvocch nagrik samman hai.",
    "Bharat Ratna > Padma Vibhushan.",
    ["Padma Vibhushan", "Bharat Ratna", "Padma Bhushan", "Padma Shri"]);

  b("Paper-I", "Current Affairs", "Awards", "Param Vir Chakra", "Medium",
    "Yudhkaal ka sarvocch veerta samman (highest wartime gallantry award) kaun sa hai?",
    "Which is the highest wartime gallantry award of India?",
    ["Ashok Chakra", "Param Vir Chakra", "Vir Chakra", "Maha Vir Chakra"], 1,
    "Param Vir Chakra yudh ke samay ka sarvocch veerta puraskar hai.",
    "Param Vir = highest (wartime).",
    ["Ashok Chakra", "Param Vir Chakra", "Vir Chakra", "Maha Vir Chakra"]);

  b("Paper-I", "Current Affairs", "Sports", "Cricket team", "Easy",
    "Ek cricket team mein maidan par kitne khiladi hote hain?",
    "How many players are there in a cricket team on the field?",
    ["9", "10", "11", "12"], 2,
    "Cricket mein ek team ke 11 khiladi maidan par hote hain.",
    "Cricket = 11.",
    ["9", "10", "11", "12"]);

  b("Paper-I", "Current Affairs", "Sports", "Hockey team", "Easy",
    "Field hockey mein ek team mein kitne khiladi hote hain?",
    "How many players are there in a field hockey team?",
    ["9", "10", "11", "12"], 2,
    "Field hockey mein ek team ke 11 khiladi hote hain.",
    "Hockey = 11.",
    ["9", "10", "11", "12"]);

  b("Paper-I", "Current Affairs", "Science and technology", "ISRO", "Medium",
    "ISRO (Bharatiya Antriksh Anusandhan Sangathan) ka mukhyalay kahan hai?",
    "Where is the headquarters of ISRO (Indian Space Research Organisation)?",
    ["New Delhi", "Bengaluru", "Hyderabad", "Chennai"], 1,
    "ISRO ka mukhyalay Bengaluru (Karnataka) mein hai.",
    "ISRO HQ = Bengaluru.",
    ["New Delhi", "Bengaluru", "Hyderabad", "Chennai"]);

  b("Paper-I", "Current Affairs", "Science and technology", "Chandrayaan-3", "Medium",
    "Bharat ka Chandrayaan-3 mission chandrama ke kis kshetra ke paas safal landing ke liye jaana jata hai?",
    "India's Chandrayaan-3 mission is known for a successful landing near which region of the Moon?",
    ["Uttari dhruv", "Dakshini dhruv (South Pole)", "Bhoomadhya rekha", "Poorvi kshetra"], 1,
    "Chandrayaan-3 ne chandrama ke dakshini dhruv (South Pole) kshetra ke paas safal soft landing ki thi.",
    "South Pole ke paas landing.",
    ["North Pole", "South Pole", "Equator", "Eastern region"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "Largest district area", "Hard",
    "Kshetrafal ki drishti se paramparagat roop se Rajasthan ka sabse bada zila kaun sa raha hai?",
    "By area, which has traditionally been the largest district of Rajasthan?",
    ["Barmer", "Jaisalmer", "Bikaner", "Jodhpur"], 1,
    "Jaisalmer kshetrafal ki drishti se Rajasthan ka sabse bada zila raha hai.",
    "Jaisalmer = area mein sabse bada.",
    ["Barmer", "Jaisalmer", "Bikaner", "Jodhpur"]);

  /* ===================== GENERAL ABILITY ===================== */

  /* --- LCM & HCF --- */

  b("Paper-I", "General Ability", "Basic Numeracy", "LCM", "Easy",
    "12 aur 18 ka LCM (laghuttam samapavartya) kya hai?",
    "What is the LCM (Least Common Multiple) of 12 and 18?",
    ["24", "36", "54", "72"], 1,
    "12 = 2^2*3, 18 = 2*3^2. LCM = 2^2*3^2 = 36.",
    "LCM sabse chhota saanjha gunaj.",
    ["24", "36", "54", "72"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "HCF", "Easy",
    "12 aur 18 ka HCF (mahattam samapavartak) kya hai?",
    "What is the HCF (Highest Common Factor) of 12 and 18?",
    ["3", "6", "9", "12"], 1,
    "12 ke gunankhand: 1,2,3,4,6,12; 18 ke: 1,2,3,6,9,18. Sabse bada saanjha = 6.",
    "HCF sabse bada saanjha gunankhand.",
    ["3", "6", "9", "12"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "LCM", "Easy",
    "4, 6 aur 8 ka LCM kya hai?",
    "What is the LCM of 4, 6 and 8?",
    ["12", "24", "48", "16"], 1,
    "4 = 2^2, 6 = 2*3, 8 = 2^3. LCM = 2^3*3 = 24.",
    "",
    ["12", "24", "48", "16"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "HCF", "Medium",
    "24 aur 36 ka HCF kya hai?",
    "What is the HCF of 24 and 36?",
    ["6", "8", "12", "18"], 2,
    "24 = 2^3*3, 36 = 2^2*3^2. HCF = 2^2*3 = 12.",
    "",
    ["6", "8", "12", "18"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "LCM", "Medium",
    "15 aur 20 ka LCM kya hai?",
    "What is the LCM of 15 and 20?",
    ["30", "45", "60", "75"], 2,
    "15 = 3*5, 20 = 2^2*5. LCM = 2^2*3*5 = 60.",
    "",
    ["30", "45", "60", "75"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "HCF", "Medium",
    "48 aur 60 ka HCF kya hai?",
    "What is the HCF of 48 and 60?",
    ["6", "12", "16", "24"], 1,
    "48 = 2^4*3, 60 = 2^2*3*5. HCF = 2^2*3 = 12.",
    "",
    ["6", "12", "16", "24"]);

  /* --- Number series --- */

  b("Paper-I", "General Ability", "General Mental Ability", "Number series", "Easy",
    "Shreni poori karein: 2, 4, 8, 16, ?",
    "Complete the series: 2, 4, 8, 16, ?",
    ["24", "30", "32", "36"], 2,
    "Pratyek pad pichhle ka dogun hai: 16*2 = 32.",
    "Double hota jaa raha hai.",
    ["24", "30", "32", "36"]);

  b("Paper-I", "General Ability", "General Mental Ability", "Number series", "Easy",
    "Shreni poori karein: 3, 6, 9, 12, ?",
    "Complete the series: 3, 6, 9, 12, ?",
    ["13", "14", "15", "18"], 2,
    "3 ke gunaj: agla pad 12+3 = 15.",
    "+3 pattern.",
    ["13", "14", "15", "18"]);

  b("Paper-I", "General Ability", "General Mental Ability", "Number series", "Medium",
    "Shreni poori karein (vargon ki shreni): 1, 4, 9, 16, ?",
    "Complete the series (squares): 1, 4, 9, 16, ?",
    ["20", "24", "25", "36"], 2,
    "Ye 1^2,2^2,3^2,4^2 hain; agla 5^2 = 25.",
    "Perfect squares.",
    ["20", "24", "25", "36"]);

  b("Paper-I", "General Ability", "General Mental Ability", "Number series", "Medium",
    "Shreni poori karein (ghan/cubes): 1, 8, 27, 64, ?",
    "Complete the series (cubes): 1, 8, 27, 64, ?",
    ["100", "121", "125", "128"], 2,
    "Ye 1^3,2^3,3^3,4^3 hain; agla 5^3 = 125.",
    "Perfect cubes.",
    ["100", "121", "125", "128"]);

  b("Paper-I", "General Ability", "General Mental Ability", "Wrong term", "Hard",
    "Is shreni mein galat pad kaun sa hai: 4, 9, 16, 23, 36?",
    "Which is the wrong term in the series: 4, 9, 16, 23, 36?",
    ["9", "16", "23", "36"], 2,
    "Ye vargon ki shreni honi chahiye: 4,9,16,25,36. Isliye 23 galat hai (25 hona chahiye).",
    "Squares check karo: 25 ki jagah 23.",
    ["9", "16", "23", "36"]);

  /* --- Clock angle --- */

  b("Paper-I", "General Ability", "General Mental Ability", "Clock angle", "Medium",
    "3:00 baje ghadi ki sui-yon ke beech kitne degree ka kon banta hai?",
    "What is the angle between the hands of a clock at 3:00?",
    ["30 degree", "60 degree", "90 degree", "120 degree"], 2,
    "Formula |30H - 5.5M| = |30*3 - 5.5*0| = 90 degree.",
    "|30H - 5.5M|.",
    ["30 degree", "60 degree", "90 degree", "120 degree"]);

  b("Paper-I", "General Ability", "General Mental Ability", "Clock angle", "Medium",
    "6:00 baje ghadi ki sui-yon ke beech kitne degree ka kon banta hai?",
    "What is the angle between the hands of a clock at 6:00?",
    ["90 degree", "120 degree", "150 degree", "180 degree"], 3,
    "Formula |30*6 - 5.5*0| = 180 degree (sui-yaan seedhi rekha mein).",
    "6 baje = 180 degree.",
    ["90 degree", "120 degree", "150 degree", "180 degree"]);

  b("Paper-I", "General Ability", "General Mental Ability", "Clock angle", "Hard",
    "3:30 baje ghadi ki sui-yon ke beech kitne degree ka kon banta hai?",
    "What is the angle between the hands of a clock at 3:30?",
    ["75 degree", "80 degree", "90 degree", "105 degree"], 0,
    "|30H - 5.5M| = |30*3 - 5.5*30| = |90 - 165| = 75 degree.",
    "|90 - 165| = 75.",
    ["75 degree", "80 degree", "90 degree", "105 degree"]);

  /* --- Calendar --- */

  b("Paper-I", "General Ability", "General Mental Ability", "Calendar", "Medium",
    "Agar aaj Somvaar (Monday) hai, to aaj se 15 din baad kaun sa din hoga?",
    "If today is Monday, which day will it be 15 days from today?",
    ["Somvaar", "Mangalvaar", "Budhvaar", "Ravivaar"], 1,
    "15 = 2 saptaah + 1 din; 15 mod 7 = 1. Somvaar + 1 = Mangalvaar (Tuesday).",
    "15 mod 7 = 1 din aage.",
    ["Monday", "Tuesday", "Wednesday", "Sunday"]);

  b("Paper-I", "General Ability", "General Mental Ability", "Calendar", "Hard",
    "100 varshon (ek shatabdi) mein kitne 'odd days' (visham din) hote hain?",
    "How many odd days are there in 100 years?",
    ["3", "4", "5", "6"], 2,
    "100 varsh mein 24 leap year + 76 saadharan year: odd days = 76*1 + 24*2 = 124; 124 mod 7 = 5.",
    "100 saal = 5 odd days.",
    ["3", "4", "5", "6"]);

  /* --- Direction sense --- */

  b("Paper-I", "General Ability", "Analytical Ability", "Direction sense", "Medium",
    "Ek vyakti 3 km uttar chalta hai, phir dahine mudkar 4 km poorab chalta hai. Prarambhik bindu se uski doori kitni hai?",
    "A man walks 3 km north, then turns right and walks 4 km east. How far is he from the starting point?",
    ["5 km", "7 km", "1 km", "12 km"], 0,
    "Yah samkon tribhuj hai: doori = sqrt(3^2 + 4^2) = sqrt(25) = 5 km.",
    "3-4-5 tribhuj.",
    ["5 km", "7 km", "1 km", "12 km"]);

  b("Paper-I", "General Ability", "Analytical Ability", "Direction sense", "Easy",
    "Ek vyakti uttar (north) ki or mukh karke khada hai. Woh dahine mudta hai, phir dobara dahine mudta hai. Ab woh kis dishaa mein mukh kiye hai?",
    "A person is facing north. He turns right, then turns right again. Which direction is he now facing?",
    ["Uttar", "Poorab", "Dakshin", "Paschim"], 2,
    "North -> dahine -> East -> dahine -> South. Ab woh dakshin (south) ki or hai.",
    "Do baar dahine = 180 degree ghooma.",
    ["North", "East", "South", "West"]);

  /* --- Coding-decoding --- */

  b("Paper-I", "General Ability", "Logical Reasoning", "Coding-decoding", "Medium",
    "Ek code mein CAT = DBU (pratyek akshar +1). Isi niyam se DOG ka code kya hoga?",
    "In a code CAT = DBU (each letter +1). By the same rule, what is the code for DOG?",
    ["EPH", "EPG", "CPH", "EQH"], 0,
    "Pratyek akshar ko +1 karo: D->E, O->P, G->H. Isliye DOG = EPH.",
    "Har akshar +1.",
    ["EPH", "EPG", "CPH", "EQH"]);

  b("Paper-I", "General Ability", "Logical Reasoning", "Coding-decoding", "Medium",
    "Agar A=1, B=2, C=3 ... ke anusaar akshar-maan liye jayein, to 'BAD' ke akshron ka yog kya hoga?",
    "If letters have values A=1, B=2, C=3 ..., what is the sum of the letters in 'BAD'?",
    ["6", "7", "8", "9"], 1,
    "B=2, A=1, D=4; yog = 2+1+4 = 7.",
    "Sthaan-maan jodo.",
    ["6", "7", "8", "9"]);

  /* --- Blood relations --- */

  b("Paper-I", "General Ability", "Analytical Ability", "Blood relations", "Medium",
    "Ek photo ki or ishaara karte hue Ravi ne kaha, 'Yah mere pita ka putra hai, parantu mere koi bhai nahin hai.' Photo mein kaun hai?",
    "Pointing to a photo, Ravi said, 'He is the son of my father, but I have no brothers.' Who is in the photo?",
    ["Uska pita", "Ravi swayam", "Uska chacha", "Uska beta"], 1,
    "Pita ka putra jabki koi bhai nahin = Ravi swayam.",
    "Bhai nahin => khud.",
    ["His father", "Ravi himself", "His uncle", "His son"]);

  b("Paper-I", "General Ability", "Analytical Ability", "Blood relations", "Medium",
    "A, B ka pita hai aur B, C ki maata hai. To A, C ka kya lagta hai?",
    "A is the father of B, and B is the mother of C. What is A to C?",
    ["Pita", "Dada/Nana (grandfather)", "Bhai", "Chacha"], 1,
    "A -> B (pita), B -> C (maata). Isliye A, C ka dada/nana (grandfather) hai.",
    "Ek peedhi upar do baar = grandparent.",
    ["Father", "Grandfather", "Brother", "Uncle"]);

  /* --- Ratio / percentage / average --- */

  b("Paper-I", "General Ability", "Basic Numeracy", "Average", "Easy",
    "10, 20 aur 30 ka ausat (average) kya hai?",
    "What is the average of 10, 20 and 30?",
    ["15", "20", "25", "30"], 1,
    "Yog = 60; ausat = 60/3 = 20.",
    "Yog / sankhya.",
    ["15", "20", "25", "30"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "Percentage", "Easy",
    "200 ka 25% kitna hota hai?",
    "What is 25% of 200?",
    ["25", "40", "50", "75"], 2,
    "25% of 200 = 200*25/100 = 50.",
    "25% = 1/4.",
    ["25", "40", "50", "75"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "Ratio", "Medium",
    "50 ko 2:3 ke anupaat mein baanta jaye to bada bhaag kitna hoga?",
    "If 50 is divided in the ratio 2:3, what is the larger part?",
    ["20", "25", "30", "35"], 2,
    "Kul bhaag = 2+3 = 5. Bada bhaag = (3/5)*50 = 30.",
    "3/5 hissa.",
    ["20", "25", "30", "35"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "Percentage", "Medium",
    "40, 200 ka kitne pratishat (percent) hai?",
    "40 is what percent of 200?",
    ["10%", "20%", "25%", "40%"], 1,
    "(40/200)*100 = 20%.",
    "",
    ["10%", "20%", "25%", "40%"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "Average", "Easy",
    "Pratham 5 prakritik sankhyaon (1,2,3,4,5) ka ausat kya hai?",
    "What is the average of the first 5 natural numbers (1,2,3,4,5)?",
    ["2", "3", "4", "5"], 1,
    "Yog = 15; ausat = 15/5 = 3.",
    "",
    ["2", "3", "4", "5"]);

  /* --- Odd one out --- */

  b("Paper-I", "General Ability", "Logical Reasoning", "Odd one out", "Easy",
    "Diye gaye mein se vishम (odd) sankhya chunein: 3, 5, 7, 9",
    "Choose the odd number out: 3, 5, 7, 9",
    ["3", "5", "7", "9"], 3,
    "3, 5, 7 abhajya (prime) hain; 9 abhajya nahin hai (9 = 3*3).",
    "9 prime nahin.",
    ["3", "5", "7", "9"]);

  b("Paper-I", "General Ability", "Logical Reasoning", "Odd one out", "Easy",
    "Bemel (odd one out) chunein: Sher, Kutta, Billi, Aam",
    "Choose the odd one out: Lion, Dog, Cat, Mango",
    ["Sher", "Kutta", "Billi", "Aam"], 3,
    "Sher, Kutta, Billi jaanwar hain; Aam ek phal hai.",
    "Baaki jaanwar, Aam phal.",
    ["Lion", "Dog", "Cat", "Mango"]);

  /* --- Syllogism --- */

  b("Paper-I", "General Ability", "Logical Reasoning", "Syllogism", "Medium",
    "Kathan: Sabhi billiyan jaanwar hain. Sabhi jaanwar sajeev hain. Nishkarsh kya hai?",
    "Statements: All cats are animals. All animals are living things. What follows?",
    ["Sabhi billiyan sajeev hain", "Koi billi sajeev nahin", "Kuchh jaanwar billi nahin (nishchit galat)", "Kuchh sajeev jaanwar nahin"], 0,
    "Billi -> jaanwar -> sajeev, isliye sabhi billiyan sajeev hain (valid).",
    "Chain: cat -> animal -> living.",
    ["All cats are living things", "No cat is living", "Some animals are not cats (must be false)", "Some living things are not animals"]);

  /* --- Mirror image / problem solving / DI --- */

  b("Paper-I", "General Ability", "Problem Solving", "Age problem", "Medium",
    "Pita ki aayu putra se 3 guni hai. Yadi putra ki aayu 12 varsh hai, to pita ki aayu kitni hai?",
    "A father's age is 3 times his son's. If the son is 12 years old, what is the father's age?",
    ["24 varsh", "30 varsh", "36 varsh", "48 varsh"], 2,
    "Pita ki aayu = 3*12 = 36 varsh.",
    "3 guna.",
    ["24 years", "30 years", "36 years", "48 years"]);

  b("Paper-I", "General Ability", "Data Interpretation", "Table reading", "Medium",
    "Ek talika mein 4 chhatron ke ank hain: Amit=80, Bina=90, Chetan=70, Deepa=100. In sabhi ka ausat ank kya hai?",
    "A table shows marks of 4 students: Amit=80, Bina=90, Chetan=70, Deepa=100. What is their average mark?",
    ["80", "85", "90", "95"], 1,
    "Yog = 80+90+70+100 = 340; ausat = 340/4 = 85.",
    "Yog/4.",
    ["80", "85", "90", "95"]);

  b("Paper-I", "General Ability", "Data Interpretation", "Table reading", "Medium",
    "Upar di gayi talika (Amit=80, Bina=90, Chetan=70, Deepa=100) mein sabse adhik ank kisके hain?",
    "In the above table (Amit=80, Bina=90, Chetan=70, Deepa=100), who has the highest marks?",
    ["Amit", "Bina", "Chetan", "Deepa"], 3,
    "Sabse adhik ank Deepa (100) ke hain.",
    "100 sabse bada.",
    ["Amit", "Bina", "Chetan", "Deepa"]);

  b("Paper-I", "General Ability", "Data Sufficiency", "Sufficiency", "Hard",
    "Prashn: X ki aayu kya hai? Kathan I: X, Y se 5 varsh bada hai. Kathan II: Y ki aayu 20 varsh hai. Uttar dene ke liye kaun se kathan chahiye?",
    "Question: What is X's age? Statement I: X is 5 years older than Y. Statement II: Y is 20 years old. Which statements are needed to answer?",
    ["Sirf I paryapt", "Sirf II paryapt", "Dono I aur II milkar paryapt", "Dono milkar bhi paryapt nahin"], 2,
    "I se sirf antar pata chalta hai, II se sirf Y ki aayu. Dono milakar: X = 20+5 = 25 varsh. Isliye dono zaroori.",
    "Dono chahiye.",
    ["Only I sufficient", "Only II sufficient", "Both I and II together sufficient", "Even both together not sufficient"]);

  b("Paper-I", "General Ability", "Decision Making", "Best choice", "Medium",
    "Ek dukaan par same product par offer hain: A) 500 rupaye par 10% chhoot, B) 500 rupaye par 40 rupaye ki seedhi chhoot. Kaun sa offer sasta hai?",
    "At a shop, offers on the same product: A) 10% off on Rs 500, B) flat Rs 40 off on Rs 500. Which offer is cheaper?",
    ["Offer A", "Offer B", "Dono barabar", "Nirdharit nahin ho sakta"], 0,
    "A: 10% of 500 = 50 rupaye chhoot (keemat 450). B: 40 rupaye chhoot (keemat 460). Offer A sasta hai.",
    "50 > 40 chhoot, isliye A.",
    ["Offer A", "Offer B", "Both equal", "Cannot be determined"]);

  b("Paper-I", "General Ability", "General Mental Ability", "Number series", "Medium",
    "Shreni poori karein: 5, 10, 20, 40, ?",
    "Complete the series: 5, 10, 20, 40, ?",
    ["50", "60", "80", "100"], 2,
    "Pratyek pad pichhle ka dogun: 40*2 = 80.",
    "Double.",
    ["50", "60", "80", "100"]);

  b("Paper-I", "General Ability", "General Mental Ability", "Number series", "Medium",
    "Shreni poori karein (abhajya sankhya): 2, 3, 5, 7, 11, ?",
    "Complete the series (primes): 2, 3, 5, 7, 11, ?",
    ["12", "13", "14", "15"], 1,
    "Ye abhajya sankhyaein hain; 11 ke baad agli abhajya sankhya 13 hai.",
    "Next prime after 11.",
    ["12", "13", "14", "15"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "HCF-LCM relation", "Hard",
    "Do sankhyaon ka gunanfal 216 hai aur unka HCF 6 hai, to unka LCM kya hoga?",
    "The product of two numbers is 216 and their HCF is 6. What is their LCM?",
    ["24", "36", "42", "48"], 1,
    "Niyam: HCF * LCM = gunanfal. LCM = 216/6 = 36.",
    "HCF*LCM = product.",
    ["24", "36", "42", "48"]);

  b("Paper-I", "General Ability", "Logical Reasoning", "Coding-decoding", "Hard",
    "Yadi 'CAB' ko ulta likhne par 'BAC' banta hai, to isi niyam se 'DOG' ko ulta likhne par kya banega?",
    "If 'CAB' written in reverse becomes 'BAC', then by the same rule what does 'DOG' become in reverse?",
    ["GOD", "OGD", "DGO", "ODG"], 0,
    "Akshron ko ulta karo: D-O-G -> G-O-D.",
    "Seedha ulta padhो.",
    ["GOD", "OGD", "DGO", "ODG"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
