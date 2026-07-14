/* RSSB BCI 2026 - Mega bank part 11: Current Affairs + General Ability (set 2) */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG11";
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

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "Kalibai Bheel Scooty Yojana", "Easy",
    "Kalibai Bheel Medhavi Chhatra Scooty Yojana kis varg ke liye hai?",
    "The Kalibai Bheel Medhavi Chhatra Scooty Yojana is meant for whom?",
    ["Meritorious girl students", "Ex-servicemen", "Farmers", "Old-age pensioners"], 0,
    "Rajasthan sarkar ki is yojana mein 12vin ke medhavi chhatraon (ladkiyon) ko aage padhai jari rakhne hetu nishulk scooty di jati hai.",
    "Scooty + Chhatra = padhne wali ladkiyan.",
    ["Meritorious girl students", "Ex-servicemen", "Farmers", "Old-age pensioners"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "Rajshri Yojana", "Easy",
    "Rajasthan ki Rajshri Yojana kiske kalyan se sambandhit hai?",
    "The Rajshri Yojana of Rajasthan is related to the welfare of whom?",
    ["Girl child", "Widows", "Fishermen", "Handloom weavers"], 0,
    "Rajshri Yojana mein balika ke janm se class 12 tak vibhinn charano mein aarthik sahayata di jati hai taaki balika shiksha aur suraksha ko badhava mile.",
    "Raj-SHRI = balika (girl child) welfare.",
    ["Girl child", "Widows", "Fishermen", "Handloom weavers"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "Shubh Shakti Yojana", "Medium",
    "Shubh Shakti Yojana kin mahilaon/kishoriyon ke liye aarthik sahayata deti hai?",
    "For whom does the Shubh Shakti Yojana provide financial assistance?",
    ["Registered construction workers' women/daughters", "Retired teachers", "Sarpanch", "Bank employees"], 0,
    "Yah nirmaan shramik kalyan mandal ki yojana hai jismein panjikrit nirmaan shramikon ki patni ya vayask putri ko aarthik sahayata di jati hai.",
    "Nirmaan (construction) shramik parivaar ki mahilayen.",
    ["Registered construction workers' women/daughters", "Retired teachers", "Sarpanch", "Bank employees"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "Nishulk Dawa Yojana", "Easy",
    "Mukhyamantri Nishulk Dawa Yojana ka mukhya uddeshya kya hai?",
    "What is the main objective of the Mukhyamantri Nishulk Dawa Yojana?",
    ["Free medicines at government hospitals", "Free bus travel", "Free laptops", "Free electricity"], 0,
    "Is yojana mein rajkiya chikitsa sansthaon mein marizon ko nishulk (free) davaiyan uplabdh karayi jati hain.",
    "Dawa = medicine, nishulk = free.",
    ["Free medicines at government hospitals", "Free bus travel", "Free laptops", "Free electricity"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "Nishulk Janch Yojana", "Easy",
    "Mukhyamantri Nishulk Janch Yojana ke antargat kya nishulk pradan kiya jata hai?",
    "What is provided free of cost under the Mukhyamantri Nishulk Janch Yojana?",
    ["Diagnostic tests/investigations", "House loans", "Sewing machines", "Cooking gas"], 0,
    "Is yojana mein rajkiya aspatalon mein vibhinn jancho (diagnostic tests) ki suvidha nishulk di jati hai.",
    "Janch = test/investigation.",
    ["Diagnostic tests/investigations", "House loans", "Sewing machines", "Cooking gas"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "Indira Rasoi Yojana", "Medium",
    "Indira Rasoi Yojana ka mukhya uddeshya kya raha hai?",
    "What has been the main objective of the Indira Rasoi Yojana?",
    ["Providing subsidised nutritious meals to the poor", "Distributing free seeds", "Building roads", "Providing free coaching"], 0,
    "Indira Rasoi Yojana mein 'Koi bhukha na soye' ke sankalp ke saath jarooratmando ko riyayati (subsidised) poushtik bhojan diya jata hai.",
    "Rasoi = kitchen; sasta bhojan.",
    ["Providing subsidised nutritious meals to the poor", "Distributing free seeds", "Building roads", "Providing free coaching"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "Anuprati Coaching Yojana", "Medium",
    "Mukhyamantri Anuprati Coaching Yojana kis prakar ki sahayata deti hai?",
    "What kind of support does the Mukhyamantri Anuprati Coaching Yojana provide?",
    ["Free coaching for competitive exams", "Free tractors", "Free mobile phones", "Free housing"], 0,
    "Is yojana mein aarthik roop se kamzor evं sanshadhanheen vidyarthiyon ko pratiyogi parikshaon ki nishulk coaching di jati hai.",
    "Coaching = pratiyogi pariksha taiyari.",
    ["Free coaching for competitive exams", "Free tractors", "Free mobile phones", "Free housing"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "Silicosis policy", "Medium",
    "Silicosis Niti (policy) laagu karne wala desh ka pehla rajya kaun hai?",
    "Which was the first state in the country to implement a Silicosis policy?",
    ["Rajasthan", "Haryana", "Bihar", "Odisha"], 0,
    "Rajasthan desh ka pehla rajya tha jisne silicosis (khnij/khaan majdooron ki bimari) ke liye alag niti laagu ki.",
    "Khnan majdoor ki bimari - Rajasthan pehla.",
    ["Rajasthan", "Haryana", "Bihar", "Odisha"]);

  b("Paper-I", "Current Affairs", "Rajasthan schemes", "English medium schools", "Easy",
    "Rajasthan mein Mahatma Gandhi ke naam par khole gaye vidyalay kis madhyam ke hain?",
    "The schools opened in Rajasthan in the name of Mahatma Gandhi are of which medium?",
    ["English medium", "Sanskrit medium", "Urdu medium", "Only Hindi medium"], 0,
    "Mahatma Gandhi Rajkiya Vidyalay angrezi madhyam (English medium) ke sarkari school hain jo gunvattapoorna angrezi shiksha uplabdh karate hain.",
    "Mahatma Gandhi school = English medium.",
    ["English medium", "Sanskrit medium", "Urdu medium", "Only Hindi medium"]);

  b("Paper-I", "Current Affairs", "Rajasthan static GK", "Formation day", "Easy",
    "Rajasthan rajya ka sthapna divas (poorna ekikaran) kis tithi ko manaya jata hai?",
    "On which date is the formation day of Rajasthan (its unification) celebrated?",
    ["30 March", "1 November", "15 August", "26 January"], 0,
    "30 March 1949 ko Vrihad Rajasthan ka gathan hua, isiliye 30 March ko Rajasthan Diwas manaya jata hai.",
    "30 March = Rajasthan Diwas.",
    ["30 March", "1 November", "15 August", "26 January"]);

  b("Paper-I", "Current Affairs", "Rajasthan static GK", "Largest district", "Easy",
    "Kshetraphal (area) ki drishti se Rajasthan ka sabse bada zila (paramparik roop se) kaun sa mana jata hai?",
    "By area, which is traditionally regarded as the largest district of Rajasthan?",
    ["Jaisalmer", "Jaipur", "Kota", "Bharatpur"], 0,
    "Jaisalmer apne vishaal registan kshetra ke kaaran kshetraphal mein Rajasthan ka sabse bada zila mana jata hai.",
    "Registan = Jaisalmer sabse bada.",
    ["Jaisalmer", "Jaipur", "Kota", "Bharatpur"]);

  b("Paper-I", "Current Affairs", "Rajasthan static GK", "Assembly seats", "Easy",
    "Rajasthan Vidhan Sabha mein nirvachit sadasyon (seats) ki sankhya kitni hai?",
    "How many elected member seats are there in the Rajasthan Legislative Assembly?",
    ["200", "230", "182", "160"], 0,
    "Rajasthan Vidhan Sabha mein 200 nirvachit vidhayak (MLA) hote hain.",
    "Rajasthan Vidhan Sabha = 200.",
    ["200", "230", "182", "160"]);

  b("Paper-I", "Current Affairs", "Rajasthan static GK", "First Chief Minister", "Medium",
    "Rajasthan ke pehle mukhyamantri (Chief Minister) kaun the?",
    "Who was the first Chief Minister of Rajasthan?",
    ["Heera Lal Shastri", "Mohan Lal Sukhadia", "Jai Narayan Vyas", "Tika Ram Paliwal"], 0,
    "Heera Lal Shastri Rajasthan ke pratham mukhyamantri the.",
    "Pehle CM = Heera Lal Shastri.",
    ["Heera Lal Shastri", "Mohan Lal Sukhadia", "Jai Narayan Vyas", "Tika Ram Paliwal"]);

  b("Paper-I", "Current Affairs", "Rajasthan static GK", "State bird", "Easy",
    "Rajasthan ka rajya pakshi (state bird) kaun sa hai?",
    "What is the state bird of Rajasthan?",
    ["Godawan (Great Indian Bustard)", "Mor (Peacock)", "Koyal", "Hans"], 0,
    "Rajasthan ka rajya pakshi Godawan (Great Indian Bustard) hai, jo ek sankatgrast (endangered) pakshi hai.",
    "Rajya pakshi = Godawan.",
    ["Godawan (Great Indian Bustard)", "Mor (Peacock)", "Koyal", "Hans"]);

  b("Paper-I", "Current Affairs", "Rajasthan static GK", "State tree", "Easy",
    "Rajasthan ka rajya vriksh (state tree) kaun sa hai?",
    "What is the state tree of Rajasthan?",
    ["Khejri", "Neem", "Peepal", "Aam"], 0,
    "Khejri (Prosopis cineraria) Rajasthan ka rajya vriksh hai, jise 'registan ka kalpvriksh' bhi kehte hain.",
    "Registan ka kalpvriksh = Khejri.",
    ["Khejri", "Neem", "Peepal", "Aam"]);

  b("Paper-I", "Current Affairs", "Rajasthan static GK", "Highest peak", "Medium",
    "Rajasthan/Aravali ka sabse ooncha shikhar (highest peak) kaun sa hai?",
    "What is the highest peak of Rajasthan / the Aravalli range?",
    ["Guru Shikhar", "Serwari", "Taragarh", "Achalgarh"], 0,
    "Guru Shikhar (Mount Abu ke paas, lagbhag 1722 m) Aravali shrenkhala evं Rajasthan ka sabse ooncha shikhar hai.",
    "Mount Abu ke paas = Guru Shikhar.",
    ["Guru Shikhar", "Serwari", "Taragarh", "Achalgarh"]);

  b("Paper-I", "Current Affairs", "National current affairs", "Constitution", "Medium",
    "Bharat ka samvidhan (Constitution) kis tithi ko laagu (effective) hua?",
    "On which date did the Constitution of India come into effect?",
    ["26 January 1950", "15 August 1947", "26 November 1949", "2 October 1950"], 0,
    "Samvidhan 26 November 1949 ko apnaya gaya aur 26 January 1950 ko laagu hua, isiliye 26 January ko Ganatantra Diwas manaya jata hai.",
    "26 Jan 1950 = laagu; 26 Nov 1949 = apnaya.",
    ["26 January 1950", "15 August 1947", "26 November 1949", "2 October 1950"]);

  b("Paper-I", "Current Affairs", "National current affairs", "First President", "Easy",
    "Swatantra Bharat ke pehle Rashtrapati (President) kaun the?",
    "Who was the first President of independent India?",
    ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Jawaharlal Nehru", "Zakir Husain"], 0,
    "Dr. Rajendra Prasad Bharat ke pratham Rashtrapati the.",
    "Pehle Rashtrapati = Rajendra Prasad.",
    ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Jawaharlal Nehru", "Zakir Husain"]);

  b("Paper-I", "Current Affairs", "Awards", "Highest civilian award", "Easy",
    "Bharat ka sarvochch nagrik sammaan (highest civilian award) kaun sa hai?",
    "Which is the highest civilian award of India?",
    ["Bharat Ratna", "Padma Vibhushan", "Param Vir Chakra", "Ashok Chakra"], 0,
    "Bharat Ratna desh ka sarvochch nagrik sammaan hai; Param Vir Chakra sarvochch sainik sammaan hai.",
    "Nagrik = Bharat Ratna; sainik = Param Vir Chakra.",
    ["Bharat Ratna", "Padma Vibhushan", "Param Vir Chakra", "Ashok Chakra"]);

  b("Paper-I", "Current Affairs", "Sports", "Khel Ratna", "Medium",
    "Bharat ka sarvochch khel sammaan 'Major Dhyan Chand Khel Ratna' kis kshetra se hai?",
    "The 'Major Dhyan Chand Khel Ratna', India's highest sporting honour, is associated with which field?",
    ["Sports/games", "Cinema", "Literature", "Agriculture"], 0,
    "Major Dhyan Chand Khel Ratna Award Bharat ka sarvochch khel purskar hai, jo khiladiyon ko diya jata hai. Dhyan Chand hockey ke jaadugar mane jate hain.",
    "Khel Ratna = sports; Dhyan Chand = hockey.",
    ["Sports/games", "Cinema", "Literature", "Agriculture"]);

  /* ===================== GENERAL ABILITY (self-contained, deterministic) ===================== */

  b("Paper-I", "General Ability", "Basic Numeracy", "LCM of three numbers", "Medium",
    "8, 12 aur 16 ka LCM (lghuttam samapavartya) kya hoga?",
    "What is the LCM of 8, 12 and 16?",
    ["48", "24", "96", "64"], 0,
    "8=2^3, 12=2^2*3, 16=2^4. LCM = 2^4 * 3 = 16*3 = 48.",
    "Sabse badi power lo: 2^4 aur 3 -> 48.",
    ["48", "24", "96", "64"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "HCF by division", "Medium",
    "84 aur 105 ka HCF (mahattam samapavartak) kya hoga?",
    "What is the HCF of 84 and 105?",
    ["21", "7", "42", "12"], 0,
    "84 = 2^2*3*7, 105 = 3*5*7. Ubhaynishth guNankhand = 3*7 = 21. Vibhajan vidhi: 105=84*1+21, 84=21*4+0 -> HCF 21.",
    "Common factors 3 aur 7 -> 21.",
    ["21", "7", "42", "12"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "LCM of fractions", "Hard",
    "Bhinno 3/4, 5/6 aur 7/8 ka LCM kya hoga?",
    "What is the LCM of the fractions 3/4, 5/6 and 7/8?",
    ["105/2", "35/24", "105/24", "1/2"], 0,
    "Bhinno ka LCM = (ansho ka LCM)/(haro ka HCF). Ansh 3,5,7 ka LCM = 105. Har 4,6,8 ka HCF = 2. Ateh 105/2.",
    "LCM of numerators / HCF of denominators.",
    ["105/2", "35/24", "105/24", "1/2"]);

  b("Paper-I", "General Ability", "General Mental Ability", "Number series - missing term", "Medium",
    "Shrenkhala mein lupt (missing) sankhya gyaat karein: 2, 6, 12, 20, 30, ?",
    "Find the missing number in the series: 2, 6, 12, 20, 30, ?",
    ["42", "40", "36", "44"], 0,
    "Antar +4, +6, +8, +10 badhta ja raha hai, agla antar +12. 30+12 = 42.",
    "Antar 4,6,8,10,12 -> 30+12=42.",
    ["42", "40", "36", "44"]);

  b("Paper-I", "General Ability", "General Mental Ability", "Number series - wrong term", "Hard",
    "Is shrenkhala mein galat (wrong) pad kaun sa hai? 2, 5, 10, 18, 26",
    "Which is the wrong term in the series? 2, 5, 10, 18, 26",
    ["18", "10", "26", "5"], 0,
    "Sahi pattern n^2+1 hai: 1+1=2, 4+1=5, 9+1=10, 16+1=17, 25+1=26. 18 ki jagah 17 hona chahiye, ateh 18 galat hai.",
    "n^2+1: 17 aana chahiye, 18 nahi.",
    ["18", "10", "26", "5"]);

  b("Paper-I", "General Ability", "General Mental Ability", "Geometric series", "Medium",
    "Lupt pad gyaat karein: 3, 6, 12, 24, ?, 96",
    "Find the missing term: 3, 6, 12, 24, ?, 96",
    ["48", "36", "72", "60"], 0,
    "Pratyek pad pichhle ka dugna (x2) hai. 24 x 2 = 48, aur 48 x 2 = 96.",
    "Har baar x2 -> 24*2=48.",
    ["48", "36", "72", "60"]);

  b("Paper-I", "General Ability", "Logical Reasoning", "Alternating series", "Hard",
    "Lupt pad gyaat karein: 5, 10, 8, 16, 14, 28, ?",
    "Find the missing term: 5, 10, 8, 16, 14, 28, ?",
    ["26", "30", "24", "56"], 0,
    "Pattern ekantar hai: x2, -2, x2, -2... 5x2=10, 10-2=8, 8x2=16, 16-2=14, 14x2=28, 28-2=26.",
    "x2 phir -2 dohrao -> 28-2=26.",
    ["26", "30", "24", "56"]);

  b("Paper-I", "General Ability", "General Mental Ability", "Clock angle", "Hard",
    "3:40 baje ghadi ki minute aur hour suiyon ke beech ka kon (angle) kya hoga?",
    "What is the angle between the hour and minute hands of a clock at 3:40?",
    ["130 degree", "120 degree", "140 degree", "150 degree"], 0,
    "Kon = |30H - 5.5M| = |30*3 - 5.5*40| = |90 - 220| = 130 degree.",
    "|30H - 5.5M| = |90-220| = 130.",
    ["130 degree", "120 degree", "140 degree", "150 degree"]);

  b("Paper-I", "General Ability", "Logical Reasoning", "Mirror image time", "Medium",
    "Ek ghadi mein samay 4:20 hai. Darpan (mirror) mein iska pratibimb samay kya dikhega?",
    "A clock shows 4:20. What time will its mirror image show?",
    ["7:40", "8:40", "7:20", "8:20"], 0,
    "Darpan samay = 11:60 minus vaastavik samay = 11:60 - 4:20 = 7:40.",
    "11:60 - diya gaya samay = 7:40.",
    ["7:40", "8:40", "7:20", "8:20"]);

  b("Paper-I", "General Ability", "Problem Solving", "Clock hands coincide", "Hard",
    "4 aur 5 baje ke beech ghadi ki dono suiyan (hands) kis samay ek doosre par aa jati (coincide) hain?",
    "Between 4 and 5 o'clock, at what time do the two hands of the clock coincide?",
    ["21 9/11 minutes past 4", "22 minutes past 4", "20 minutes past 4", "21 minutes past 4"], 0,
    "H aur H+1 ke beech suiyan (60H/11) minute par milti hain. H=4 -> 60*4/11 = 240/11 = 21 9/11 minute.",
    "Coincide = 60H/11 = 240/11 = 21 9/11.",
    ["21 9/11 minutes past 4", "22 minutes past 4", "20 minutes past 4", "21 minutes past 4"]);

  b("Paper-I", "General Ability", "Analytical Ability", "Day of week", "Hard",
    "Yadi 15 August 1947 ko shukravar (Friday) tha, to 15 August 1948 ko kaun sa din tha? (1948 leap varsh hai)",
    "If 15 August 1947 was a Friday, what day was 15 August 1948? (1948 is a leap year)",
    ["Sunday", "Saturday", "Monday", "Friday"], 0,
    "Is avadhi mein 29 February 1948 aata hai, ateh 366 din = 366 mod 7 = 2 vishesh din. Friday + 2 = Sunday.",
    "Leap avadhi -> +2 din -> Friday+2 = Sunday.",
    ["Sunday", "Saturday", "Monday", "Friday"]);

  b("Paper-I", "General Ability", "Analytical Ability", "Direction and distance", "Medium",
    "Ek vyakti 4 km uttar (north) chalta hai, phir daayein mudkar 3 km poorv (east) chalta hai. Prarambhik bindu se uski doori kitni hai?",
    "A person walks 4 km north, then turns right and walks 3 km east. How far is he from the starting point?",
    ["5 km", "7 km", "1 km", "6 km"], 0,
    "Yah samkoN tribhuj hai. Doori = sqrt(4^2 + 3^2) = sqrt(16+9) = sqrt(25) = 5 km.",
    "3-4-5 tribhuj -> 5 km.",
    ["5 km", "7 km", "1 km", "6 km"]);

  b("Paper-I", "General Ability", "Logical Reasoning", "Direction - facing after turns", "Medium",
    "Ek vyakti uttar (north) ki or munh karke khada hai. Vah daayein mudta hai, phir dobara daayein mudta hai. Ab uska munh kis disha mein hai?",
    "A person faces north. He turns right, then turns right again. Which direction is he now facing?",
    ["South", "East", "West", "North"], 0,
    "Uttar se daayein mudne par poorv (east), phir daayein mudne par dakshin (south). Ab munh dakshin ki or hai.",
    "North -> right -> East -> right -> South.",
    ["South", "East", "West", "North"]);

  b("Paper-I", "General Ability", "Logical Reasoning", "Number coding", "Medium",
    "Yadi FACE ko 6135 likha jaata hai (A=1, B=2, ...), to HEAD kaise likha jaayega?",
    "If FACE is written as 6135 (A=1, B=2, ...), how will HEAD be written?",
    ["8514", "8415", "8541", "8154"], 0,
    "Akshar sthaan maan: H=8, E=5, A=1, D=4. Ateh HEAD = 8514.",
    "H=8, E=5, A=1, D=4 -> 8514.",
    ["8514", "8415", "8541", "8154"]);

  b("Paper-I", "General Ability", "Logical Reasoning", "Substitution coding", "Medium",
    "Yadi ek code mein DELHI ko EFMIJ likha jaata hai, to MUMBAI ko kaise likha jaayega?",
    "If in a certain code DELHI is written as EFMIJ, how will MUMBAI be written?",
    ["NVNCBJ", "NVNBCJ", "LTLABH", "NVMCBJ"], 0,
    "Pratyek akshar +1 shift: D->E, E->F, L->M, H->I, I->J. Ateh M->N, U->V, M->N, B->C, A->B, I->J = NVNCBJ.",
    "Har akshar +1 -> MUMBAI = NVNCBJ.",
    ["NVNCBJ", "NVNBCJ", "LTLABH", "NVMCBJ"]);

  b("Paper-I", "General Ability", "Decision Making", "Arithmetic coding", "Medium",
    "Yadi 5#3 = 16 aur 4#6 = 20 hai, to 7#2 = ?",
    "If 5#3 = 16 and 4#6 = 20, then 7#2 = ?",
    ["18", "14", "16", "20"], 0,
    "Niyam: (a+b)*2. (5+3)*2=16, (4+6)*2=20. Ateh (7+2)*2 = 9*2 = 18.",
    "(a+b) ka dugna -> (7+2)*2=18.",
    ["18", "14", "16", "20"]);

  b("Paper-I", "General Ability", "Logical Reasoning", "Blood relations", "Medium",
    "A, B ka pita hai; B, C ka bhai hai; C, D ki maata hai. A, D se kaise sambandhit hai?",
    "A is B's father; B is C's brother; C is D's mother. How is A related to D?",
    ["Grandfather", "Father", "Uncle", "Brother"], 0,
    "A -> B ka pita; B aur C bhai-bahan, ateh A, C ka bhi pita. C, D ki maata hai, ateh A, D ka nana/dada (grandfather) hai.",
    "A parent of C, C parent of D -> A = D ka grandfather.",
    ["Grandfather", "Father", "Uncle", "Brother"]);

  b("Paper-I", "General Ability", "Analytical Ability", "Ranking from other end", "Easy",
    "40 vidyarthiyon ki ek pankti mein Ram baayein (left) se 12ve sthaan par hai. Daayein (right) se uska sthaan kya hai?",
    "In a row of 40 students, Ram is 12th from the left. What is his position from the right?",
    ["29th", "28th", "30th", "27th"], 0,
    "Daayein se sthaan = Kul - Baayein se sthaan + 1 = 40 - 12 + 1 = 29va.",
    "Kul - baayein + 1 = 40-12+1 = 29.",
    ["29th", "28th", "30th", "27th"]);

  b("Paper-I", "General Ability", "Analytical Ability", "Ranking - total count", "Easy",
    "Ek pankti mein Anil oopar (top) se 7ve aur neeche (bottom) se 18ve sthaan par hai. Kul kitne vyakti hain?",
    "In a row, Anil is 7th from the top and 18th from the bottom. How many persons are there in total?",
    ["24", "25", "23", "26"], 0,
    "Kul = (oopar se sthaan) + (neeche se sthaan) - 1 = 7 + 18 - 1 = 24.",
    "7 + 18 - 1 = 24.",
    ["24", "25", "23", "26"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "Ratio and proportion", "Easy",
    "720 ko 3:5 ke anupaat mein baanta jaaye to bada bhaag kitna hoga?",
    "If 720 is divided in the ratio 3:5, what is the larger part?",
    ["450", "270", "480", "400"], 0,
    "Kul bhaag = 3+5 = 8. Ek bhaag = 720/8 = 90. Bada bhaag = 5*90 = 450 (chhota = 3*90 = 270).",
    "720/8=90; 5*90=450.",
    ["450", "270", "480", "400"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "Percentage", "Easy",
    "480 ka 15% kitna hoga?",
    "What is 15% of 480?",
    ["72", "68", "75", "70"], 0,
    "15% of 480 = 480 * 15/100 = 72.",
    "480 * 0.15 = 72.",
    ["72", "68", "75", "70"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "Profit and loss", "Medium",
    "Ek vastu ka kraya moolya (CP) 500 rupaye hai aur vikraya moolya (SP) 575 rupaye hai. Laabh pratishat (profit %) kitna hai?",
    "An article is bought for Rs. 500 and sold for Rs. 575. What is the profit percentage?",
    ["15%", "12%", "20%", "10%"], 0,
    "Laabh = 575 - 500 = 75. Laabh% = (75/500)*100 = 15%.",
    "Laabh 75 par 500 -> 15%.",
    ["15%", "12%", "20%", "10%"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "Average", "Easy",
    "6 ke pehle 5 gunajon (multiples) ka aausat (average) kya hoga?",
    "What is the average of the first five multiples of 6?",
    ["18", "15", "20", "21"], 0,
    "Gunaj: 6, 12, 18, 24, 30. Yog = 90. Aausat = 90/5 = 18.",
    "Yog 90 / 5 = 18 (madhya pad bhi 18).",
    ["18", "15", "20", "21"]);

  b("Paper-I", "General Ability", "Problem Solving", "Time and work", "Hard",
    "A ek kaam 12 din mein aur B usi kaam ko 18 din mein karta hai. Dono milkar kaam kitne din mein poora karenge?",
    "A can do a work in 12 days and B in 18 days. In how many days will they finish it working together?",
    ["7 1/5 days", "7 days", "6 days", "8 days"], 0,
    "Ek din ka kaam = 1/12 + 1/18 = 3/36 + 2/36 = 5/36. Kul samay = 36/5 = 7.2 = 7 1/5 din.",
    "1/12+1/18 = 5/36 -> 36/5 = 7 1/5.",
    ["7 1/5 days", "7 days", "6 days", "8 days"]);

  b("Paper-I", "General Ability", "Problem Solving", "Speed distance time", "Easy",
    "Ek car 240 km ki doori 4 ghante mein tay karti hai. Iski aausat chaal (speed) kya hai?",
    "A car covers 240 km in 4 hours. What is its average speed?",
    ["60 km/h", "50 km/h", "70 km/h", "48 km/h"], 0,
    "Chaal = doori / samay = 240 / 4 = 60 km/h.",
    "240/4 = 60 km/h.",
    ["60 km/h", "50 km/h", "70 km/h", "48 km/h"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "Simple interest", "Medium",
    "8000 rupaye par 5% varshik dar se 3 varsh ka saadharan byaaj (simple interest) kitna hoga?",
    "What is the simple interest on Rs. 8000 at 5% per annum for 3 years?",
    ["1200", "1000", "1500", "800"], 0,
    "SI = P*R*T/100 = 8000*5*3/100 = 120000/100 = 1200 rupaye.",
    "PRT/100 = 8000*5*3/100 = 1200.",
    ["1200", "1000", "1500", "800"]);

  b("Paper-I", "General Ability", "Basic Numeracy", "Compound interest", "Hard",
    "10000 rupaye par 10% varshik dar se 2 varsh ka chakravriddhi byaaj (compound interest) kitna hoga?",
    "What is the compound interest on Rs. 10000 at 10% per annum for 2 years?",
    ["2100", "2000", "2200", "1100"], 0,
    "Rashi = 10000*(1.1)^2 = 10000*1.21 = 12100. CI = 12100 - 10000 = 2100 rupaye.",
    "10000*1.21=12100; CI=2100.",
    ["2100", "2000", "2200", "1100"]);

  b("Paper-I", "General Ability", "Problem Solving", "Problem on ages", "Hard",
    "Ek pita ki aayu apne putra ki aayu se 3 guna hai. 12 varsh baad pita ki aayu putra ki dugni ho jaayegi. Putra ki vartamaan aayu kya hai?",
    "A father's age is 3 times his son's age. After 12 years, the father's age will be twice the son's. What is the son's present age?",
    ["12 years", "10 years", "15 years", "14 years"], 0,
    "Maana putra = x, pita = 3x. 3x+12 = 2(x+12) -> 3x+12 = 2x+24 -> x = 12. Ateh putra 12 varsh (pita 36 varsh).",
    "3x+12=2(x+12) -> x=12.",
    ["12 years", "10 years", "15 years", "14 years"]);

  b("Paper-I", "General Ability", "Logical Reasoning", "Syllogism", "Medium",
    "Kathan: sabhi billiyan janwar hain. Sabhi janwar jeevit hain. Nishkarsh: sabhi billiyan jeevit hain. Kya nishkarsh sahi hai?",
    "Statements: All cats are animals. All animals are living. Conclusion: All cats are living. Is the conclusion valid?",
    ["Yes, it follows", "No, it does not follow", "Data insufficient", "Only partly true"], 0,
    "Billi -> janwar -> jeevit ki shrenkhala se billiyan bhi jeevit hain, ateh nishkarsh maanya (valid) hai.",
    "A->B->C ateh A->C sahi.",
    ["Yes, it follows", "No, it does not follow", "Data insufficient", "Only partly true"]);

  b("Paper-I", "General Ability", "Logical Reasoning", "Number analogy", "Easy",
    "6 : 36 :: 8 : ? (varg sambandh)",
    "6 : 36 :: 8 : ? (square relationship)",
    ["64", "48", "16", "72"], 0,
    "Sambandh varg (square) ka hai: 6^2 = 36. Ateh 8^2 = 64.",
    "Varg: 8*8 = 64.",
    ["64", "48", "16", "72"]);

  b("Paper-I", "General Ability", "Logical Reasoning", "Odd one out - cubes", "Medium",
    "Nimn mein se asamaan (odd one out) chunein: 8, 27, 64, 100",
    "Choose the odd one out: 8, 27, 64, 100",
    ["100", "8", "27", "64"], 0,
    "8=2^3, 27=3^3, 64=4^3 (poorna ghan hain), parantu 100 poorna ghan nahi hai (100=10^2). Ateh 100 asamaan hai.",
    "Baaki poorna ghan; 100 nahi.",
    ["100", "8", "27", "64"]);

  b("Paper-I", "General Ability", "Logical Reasoning", "Odd one out - prime", "Easy",
    "Nimn mein se asamaan (odd one out) chunein: 3, 5, 7, 9, 11",
    "Choose the odd one out: 3, 5, 7, 9, 11",
    ["9", "7", "5", "11"], 0,
    "3, 5, 7, 11 abhajya (prime) sankhyaen hain, parantu 9 = 3*3 abhajya nahi hai. Ateh 9 asamaan hai.",
    "Baaki prime; 9 = 3x3.",
    ["9", "7", "5", "11"]);

  b("Paper-I", "General Ability", "Analytical Ability", "Linear seating arrangement", "Medium",
    "A, B, C, D, E ek pankti mein khade hain. A baayein sire par hai, E daayein sire par hai, B doosre sthaan par hai, aur C, B aur D ke beech mein hai. Beech (middle) mein kaun hai?",
    "A, B, C, D, E stand in a row. A is at the left end, E is at the right end, B is second, and C is between B and D. Who is in the middle?",
    ["C", "B", "D", "A"], 0,
    "Kram: A(1), B(2), C(3), D(4), E(5). Paanch mein beech ka sthaan 3ra hai, jahan C hai.",
    "A,B,C,D,E -> beech mein C.",
    ["C", "B", "D", "A"]);

  b("Paper-I", "General Ability", "Data Interpretation", "Table - average sales", "Medium",
    "Ek dukaan ki bikri: Som 20, Mangal 30, Budh 25, Guru 25 (units). Char dino ki aausat (average) daily bikri kya hai?",
    "A shop's sales: Mon 20, Tue 30, Wed 25, Thu 25 (units). What is the average daily sales over the four days?",
    ["25", "20", "30", "27"], 0,
    "Kul bikri = 20+30+25+25 = 100. Aausat = 100/4 = 25 units.",
    "Yog 100 / 4 din = 25.",
    ["25", "20", "30", "27"]);

  b("Paper-I", "General Ability", "Data Sufficiency", "Two statements", "Hard",
    "Prashn: X ki aayu kya hai? Kathan I: X, Y se 3 varsh bada hai. Kathan II: Y 15 varsh ka hai. Uttar dene ke liye kaun se kathan aavashyak hain?",
    "Question: What is X's age? Statement I: X is 3 years older than Y. Statement II: Y is 15 years old. Which statements are needed to answer?",
    ["Both I and II together", "Only I", "Only II", "Either I or II alone"], 0,
    "Akele I ya II se X ki aayu nahi nikalti. Dono milakar: X = 15 + 3 = 18 varsh. Ateh dono aavashyak hain.",
    "Dono chahiye -> X = 15+3 = 18.",
    ["Both I and II together", "Only I", "Only II", "Either I or II alone"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
