/*
 * RSSB Basic Computer Instructor 2026 - Naya prashn bank (SHUDDH HINDI).
 * Poore syllabus (Paper-I + Paper-II) ke high-yield, achhe se verify kiye gaye
 * factual MCQs. Prashn Devanagari Hindi + English dono mein.
 * Browser: window.RSSB_BANK_2026H ; Node: module.exports.
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
      id: `H26-${String(n).padStart(4, "0")}`,
      paper, subject, topic, subtopic: sub, difficulty: diff,
      question: `${qHi}\n${qEn}`, questionHi: qHi, questionEn: qEn,
      options: opts.map((o, i) => (oEn[i] && oEn[i] !== o ? `${o} / ${oEn[i]}` : `${o}`)),
      optionsHi: opts, optionsEn: oEn,
      answer: ans, explanation: expl, trick: trick || "", time: 40,
      sourceType: "Most important 2026 (verified)"
    });
  }

  /* =================================================================== */
  /* ======================= PAPER-I : RAJASTHAN ======================= */
  /* =================================================================== */

  /* ---------------- Rajasthan History ---------------- */
  e("Paper-I", "Rajasthan History", "Battles", "Haldighati", "Medium",
    "हल्दीघाटी का प्रसिद्ध युद्ध (1576) किन दो पक्षों के बीच हुआ?",
    "The famous Battle of Haldighati (1576) was fought between which two sides?",
    ["महाराणा प्रताप और अकबर (मानसिंह)", "पृथ्वीराज और गौरी", "राणा सांगा और बाबर", "जयसिंह और औरंगजेब"], 0,
    "हल्दीघाटी का युद्ध 1576 में महाराणा प्रताप और अकबर की सेना (मानसिंह के नेतृत्व) के बीच हुआ था।", "हल्दीघाटी = प्रताप बनाम अकबर।",
    ["Maharana Pratap vs Akbar (Man Singh)", "Prithviraj vs Ghori", "Rana Sanga vs Babur", "Jai Singh vs Aurangzeb"]);
  e("Paper-I", "Rajasthan History", "Battles", "Tarain", "Medium",
    "पृथ्वीराज चौहान और मोहम्मद गौरी के बीच कौन-सा प्रसिद्ध युद्ध हुआ?",
    "Which famous battle was fought between Prithviraj Chauhan and Muhammad Ghori?",
    ["तराइन का युद्ध", "पानीपत का युद्ध", "हल्दीघाटी का युद्ध", "खानवा का युद्ध"], 0,
    "तराइन के युद्ध (1191 व 1192) पृथ्वीराज चौहान और मोहम्मद गौरी के बीच हुए।", "तराइन = पृथ्वीराज बनाम गौरी।",
    ["Battle of Tarain", "Battle of Panipat", "Battle of Haldighati", "Battle of Khanwa"]);
  e("Paper-I", "Rajasthan History", "Monuments", "Vijay Stambh", "Medium",
    "चित्तौड़गढ़ का प्रसिद्ध विजय स्तंभ किसने बनवाया था?",
    "Who built the famous Vijay Stambh (Tower of Victory) at Chittorgarh?",
    ["राणा कुम्भा", "राणा सांगा", "महाराणा प्रताप", "राव जोधा"], 0,
    "विजय स्तंभ राणा कुम्भा ने मालवा के महमूद खिलजी पर विजय की स्मृति में बनवाया था।", "विजय स्तंभ = राणा कुम्भा।",
    ["Rana Kumbha", "Rana Sanga", "Maharana Pratap", "Rao Jodha"]);
  e("Paper-I", "Rajasthan History", "Rulers", "Jaipur founder", "Medium",
    "जयपुर शहर की स्थापना (1727) किसने की थी?",
    "Who founded the city of Jaipur (1727)?",
    ["सवाई जयसिंह द्वितीय", "राव जोधा", "उदयसिंह", "मानसिंह"], 0,
    "जयपुर की स्थापना सवाई जयसिंह द्वितीय ने 1727 में की; उन्होंने जंतर-मंतर भी बनवाया।", "जयपुर = सवाई जयसिंह।",
    ["Sawai Jai Singh II", "Rao Jodha", "Udai Singh", "Man Singh"]);
  e("Paper-I", "Rajasthan History", "Rulers", "Jodhpur founder", "Medium",
    "जोधपुर शहर और मेहरानगढ़ किले की स्थापना किसने की थी?",
    "Who founded the city of Jodhpur and Mehrangarh fort?",
    ["राव जोधा", "राव बीका", "राणा कुम्भा", "पृथ्वीराज चौहान"], 0,
    "राव जोधा ने 1459 में जोधपुर बसाया और मेहरानगढ़ किले की नींव रखी।", "जोधपुर = राव जोधा।",
    ["Rao Jodha", "Rao Bika", "Rana Kumbha", "Prithviraj Chauhan"]);
  e("Paper-I", "Rajasthan History", "Personalities", "Panna Dhai", "Medium",
    "पन्ना धाय ने अपने पुत्र का बलिदान देकर किसकी रक्षा की थी?",
    "Panna Dhai sacrificed her own son to protect whom?",
    ["उदयसिंह", "राणा सांगा", "राणा कुम्भा", "महाराणा प्रताप"], 0,
    "पन्ना धाय ने बनवीर से उदयसिंह की रक्षा हेतु अपने पुत्र चंदन का बलिदान दिया।", "पन्ना धाय = उदयसिंह की रक्षा।",
    ["Udai Singh", "Rana Sanga", "Rana Kumbha", "Maharana Pratap"]);
  e("Paper-I", "Rajasthan History", "1857 Revolt", "First uprising", "Hard",
    "1857 की क्रांति की शुरुआत राजस्थान में सबसे पहले किस छावनी से हुई?",
    "In Rajasthan, the 1857 revolt first began at which cantonment?",
    ["नसीराबाद", "एरिनपुरा", "नीमच", "ब्यावर"], 0,
    "राजस्थान में 1857 की क्रांति सबसे पहले 28 मई 1857 को नसीराबाद (अजमेर) छावनी में भड़की।", "पहला = नसीराबाद।",
    ["Nasirabad", "Erinpura", "Neemuch", "Beawar"]);
  e("Paper-I", "Rajasthan History", "Integration", "First CM", "Medium",
    "एकीकृत राजस्थान (1949) के प्रथम मुख्यमंत्री कौन थे?",
    "Who was the first Chief Minister of united Rajasthan (1949)?",
    ["हीरालाल शास्त्री", "मोहनलाल सुखाड़िया", "जयनारायण व्यास", "टीकाराम पालीवाल"], 0,
    "30 मार्च 1949 को बने वृहद् राजस्थान के प्रथम मुख्यमंत्री हीरालाल शास्त्री थे।", "प्रथम CM = हीरालाल शास्त्री।",
    ["Heera Lal Shastri", "Mohanlal Sukhadia", "Jai Narayan Vyas", "Tikaram Paliwal"]);
  e("Paper-I", "Rajasthan History", "Literature", "Annals", "Hard",
    "'एनल्स एंड एंटीक्विटीज ऑफ राजस्थान' पुस्तक किसने लिखी?",
    "Who wrote the book 'Annals and Antiquities of Rajasthan'?",
    ["कर्नल जेम्स टॉड", "अबुल फजल", "मुहणोत नैणसी", "दयाराम साहनी"], 0,
    "कर्नल जेम्स टॉड ने यह ग्रंथ लिखा; उन्हें 'राजस्थान के इतिहास का पिता' कहा जाता है।", "टॉड = राजस्थान का इतिहास।",
    ["Colonel James Tod", "Abul Fazl", "Muhnot Nainsi", "Daya Ram Sahni"]);
  e("Paper-I", "Rajasthan History", "Jauhar", "Padmini", "Medium",
    "1303 में चित्तौड़ पर आक्रमण करने वाला दिल्ली सुल्तान कौन था (रानी पद्मिनी का जौहर)?",
    "Which Delhi Sultan attacked Chittor in 1303 (associated with Rani Padmini's Jauhar)?",
    ["अलाउद्दीन खिलजी", "मोहम्मद गौरी", "बाबर", "अकबर"], 0,
    "अलाउद्दीन खिलजी ने 1303 में चित्तौड़ पर आक्रमण किया, जिससे रानी पद्मिनी का जौहर जुड़ा है।", "पद्मिनी जौहर = अलाउद्दीन खिलजी।",
    ["Alauddin Khilji", "Muhammad Ghori", "Babur", "Akbar"]);

  /* ---------------- Rajasthan Art & Culture ---------------- */
  e("Paper-I", "Rajasthan Art & Culture", "Cities", "Blue city", "Easy",
    "राजस्थान का कौन-सा शहर 'ब्लू सिटी' (नीला शहर) कहलाता है?",
    "Which city of Rajasthan is called the 'Blue City'?",
    ["जोधपुर", "जयपुर", "उदयपुर", "जैसलमेर"], 0,
    "जोधपुर को नीले रंग के मकानों के कारण 'ब्लू सिटी' कहते हैं।", "नीला = जोधपुर।",
    ["Jodhpur", "Jaipur", "Udaipur", "Jaisalmer"]);
  e("Paper-I", "Rajasthan Art & Culture", "Cities", "Golden city", "Easy",
    "राजस्थान का 'स्वर्ण नगरी' (गोल्डन सिटी) कौन-सा शहर है?",
    "Which city of Rajasthan is known as the 'Golden City'?",
    ["जैसलमेर", "जयपुर", "बीकानेर", "अजमेर"], 0,
    "पीले पत्थर से बने भवनों के कारण जैसलमेर को 'स्वर्ण नगरी' कहा जाता है।", "सोना = जैसलमेर।",
    ["Jaisalmer", "Jaipur", "Bikaner", "Ajmer"]);
  e("Paper-I", "Rajasthan Art & Culture", "Cities", "Pink city", "Easy",
    "'गुलाबी नगरी' (पिंक सिटी) के नाम से कौन-सा शहर प्रसिद्ध है?",
    "Which city is famous as the 'Pink City'?",
    ["जयपुर", "जोधपुर", "कोटा", "अलवर"], 0,
    "जयपुर को गुलाबी रंग की इमारतों के कारण 'पिंक सिटी' कहते हैं।", "गुलाबी = जयपुर।",
    ["Jaipur", "Jodhpur", "Kota", "Alwar"]);
  e("Paper-I", "Rajasthan Art & Culture", "Dance", "Ghoomar", "Medium",
    "राजस्थान का प्रसिद्ध लोक नृत्य 'घूमर' मुख्यतः किसके द्वारा किया जाता है?",
    "The famous folk dance 'Ghoomar' of Rajasthan is mainly performed by whom?",
    ["महिलाओं द्वारा", "केवल पुरुषों द्वारा", "बच्चों द्वारा", "साधुओं द्वारा"], 0,
    "घूमर राजस्थान का प्रसिद्ध लोक नृत्य है जो मुख्यतः महिलाएँ घाघरा पहनकर करती हैं।", "घूमर = महिला नृत्य।",
    ["Women", "Only men", "Children", "Saints"]);
  e("Paper-I", "Rajasthan Art & Culture", "Craft", "Puppet", "Medium",
    "राजस्थान की प्रसिद्ध लकड़ी की कठपुतली कला किस नाम से जानी जाती है?",
    "Rajasthan's famous wooden puppet art is known as?",
    ["कठपुतली", "फड़", "मांडना", "थेवा"], 0,
    "कठपुतली राजस्थान की प्रसिद्ध लोक कला है, जिसमें लकड़ी की गुड़ियों से कहानियाँ दिखाई जाती हैं।", "कठपुतली = puppet।",
    ["Kathputli (puppet)", "Phad", "Mandana", "Thewa"]);
  e("Paper-I", "Rajasthan Art & Culture", "Folk deities", "Ramdevji", "Medium",
    "लोक देवता बाबा रामदेव का प्रसिद्ध मेला (रामदेवरा) किस जिले में लगता है?",
    "The famous fair of folk deity Baba Ramdev (Ramdevra) is held in which district?",
    ["जैसलमेर", "बीकानेर", "नागौर", "बाड़मेर"], 0,
    "बाबा रामदेव का मंदिर एवं मेला रामदेवरा (रुणिचा), जैसलमेर जिले में है।", "रामदेवरा = जैसलमेर।",
    ["Jaisalmer", "Bikaner", "Nagaur", "Barmer"]);
  e("Paper-I", "Rajasthan Art & Culture", "Music", "Instruments", "Medium",
    "निम्न में से कौन-सा राजस्थान का प्रसिद्ध तार वाद्य यंत्र है?",
    "Which of the following is a famous string instrument of Rajasthan?",
    ["सारंगी", "ढोल", "नगाड़ा", "बांसुरी"], 0,
    "सारंगी राजस्थान का प्रसिद्ध तार (string) वाद्य यंत्र है; ढोल व नगाड़ा ताल वाद्य हैं।", "सारंगी = तार वाद्य।",
    ["Sarangi", "Dhol", "Nagara", "Flute"]);

  /* ---------------- Rajasthan Geography ---------------- */
  e("Paper-I", "Rajasthan Geography", "Area", "Largest state", "Easy",
    "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन-सा है?",
    "Which is the largest state of India by area?",
    ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"], 0,
    "क्षेत्रफल की दृष्टि से राजस्थान भारत का सबसे बड़ा राज्य है।", "सबसे बड़ा (क्षेत्रफल) = राजस्थान।",
    ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"]);
  e("Paper-I", "Rajasthan Geography", "Mountains", "Aravalli", "Medium",
    "अरावली पर्वत श्रृंखला के बारे में सही कथन कौन-सा है?",
    "Which statement about the Aravalli range is correct?",
    ["यह भारत की सबसे प्राचीन वलित पर्वत श्रृंखला है", "यह सबसे नई पर्वत श्रृंखला है", "यह हिमालय से ऊँची है", "यह ज्वालामुखी पर्वत है"], 0,
    "अरावली भारत की सबसे प्राचीन वलित (fold) पर्वत श्रृंखला है, जो राजस्थान से होकर गुजरती है।", "अरावली = सबसे प्राचीन।",
    ["It is India's oldest fold mountain range", "It is the newest range", "It is higher than Himalaya", "It is a volcanic mountain"]);
  e("Paper-I", "Rajasthan Geography", "Desert", "Thar", "Easy",
    "भारत का सबसे बड़ा मरुस्थल 'थार' मुख्यतः किस राज्य में फैला है?",
    "India's largest desert, the Thar, mainly lies in which state?",
    ["राजस्थान", "गुजरात", "पंजाब", "हरियाणा"], 0,
    "थार (महान भारतीय मरुस्थल) मुख्यतः पश्चिमी राजस्थान में फैला है।", "थार = राजस्थान।",
    ["Rajasthan", "Gujarat", "Punjab", "Haryana"]);
  e("Paper-I", "Rajasthan Geography", "Rivers", "Luni", "Medium",
    "पश्चिमी राजस्थान की प्रमुख खारे पानी की नदी कौन-सी है, जो कच्छ के रण में समाप्त होती है?",
    "Which is the main saline river of western Rajasthan that ends in the Rann of Kutch?",
    ["लूनी", "बनास", "चंबल", "माही"], 0,
    "लूनी पश्चिमी राजस्थान की प्रमुख नदी है; इसका जल खारा है और यह कच्छ के रण में समाप्त होती है।", "लूनी = खारी, कच्छ में।",
    ["Luni", "Banas", "Chambal", "Mahi"]);
  e("Paper-I", "Rajasthan Geography", "Minerals", "Makrana marble", "Medium",
    "प्रसिद्ध मकराना संगमरमर (जो ताजमहल में प्रयुक्त हुआ) राजस्थान के किस जिले में मिलता है?",
    "The famous Makrana marble (used in the Taj Mahal) is found in which district of Rajasthan?",
    ["नागौर", "उदयपुर", "जयपुर", "कोटा"], 0,
    "मकराना संगमरमर नागौर जिले में मिलता है और ताजमहल में प्रयुक्त हुआ था।", "मकराना = नागौर।",
    ["Nagaur", "Udaipur", "Jaipur", "Kota"]);
  e("Paper-I", "Rajasthan Geography", "Minerals", "Khetri copper", "Medium",
    "तांबे के लिए प्रसिद्ध 'खेतड़ी' राजस्थान के किस जिले में है?",
    "Khetri, famous for copper, is located in which district of Rajasthan?",
    ["झुंझुनूं", "उदयपुर", "अलवर", "भीलवाड़ा"], 0,
    "खेतड़ी (झुंझुनूं) तांबे की खदानों के लिए प्रसिद्ध है।", "खेतड़ी = तांबा, झुंझुनूं।",
    ["Jhunjhunu", "Udaipur", "Alwar", "Bhilwara"]);

  /* =================================================================== */
  /* ==================== PAPER-I : GENERAL SCIENCE ==================== */
  /* =================================================================== */
  e("Paper-I", "General Science", "Chemistry", "Water formula", "Easy",
    "जल का रासायनिक सूत्र क्या है?",
    "What is the chemical formula of water?",
    ["H₂O", "CO₂", "O₂", "NaCl"], 0,
    "जल का रासायनिक सूत्र H₂O है (दो हाइड्रोजन + एक ऑक्सीजन)।", "पानी = H₂O।");
  e("Paper-I", "General Science", "Biology", "Bones", "Medium",
    "एक वयस्क मानव शरीर में कुल कितनी हड्डियाँ होती हैं?",
    "How many bones are there in an adult human body?",
    ["206", "300", "212", "180"], 0,
    "वयस्क मानव शरीर में 206 हड्डियाँ होती हैं (नवजात में लगभग 300)।", "वयस्क = 206।");
  e("Paper-I", "General Science", "Biology", "Insulin", "Medium",
    "इंसुलिन हार्मोन शरीर की किस ग्रंथि से स्रावित होता है?",
    "Insulin hormone is secreted by which gland of the body?",
    ["अग्न्याशय (Pancreas)", "यकृत (Liver)", "थायरॉइड", "पिट्यूटरी"], 0,
    "इंसुलिन अग्न्याशय (पैंक्रियास) से स्रावित होता है और रक्त शर्करा नियंत्रित करता है; कमी से मधुमेह होता है।", "इंसुलिन = अग्न्याशय।",
    ["Pancreas", "Liver", "Thyroid", "Pituitary"]);
  e("Paper-I", "General Science", "Biology", "Malaria", "Medium",
    "मलेरिया रोग किसके काटने से फैलता है?",
    "Malaria disease spreads through the bite of which organism?",
    ["मादा एनोफिलीज मच्छर", "नर मच्छर", "मक्खी", "पिस्सू"], 0,
    "मलेरिया मादा एनोफिलीज मच्छर के काटने से फैलता है; डेंगू एडीज मच्छर से।", "मलेरिया = मादा एनोफिलीज।",
    ["Female Anopheles mosquito", "Male mosquito", "Housefly", "Flea"]);
  e("Paper-I", "General Science", "Physics", "Light speed", "Medium",
    "निर्वात (vacuum) में प्रकाश की चाल लगभग कितनी होती है?",
    "The speed of light in vacuum is approximately?",
    ["3 × 10⁸ मीटर/सेकंड", "3 × 10⁶ मीटर/सेकंड", "3 × 10⁵ किमी/घंटा", "3 × 10¹⁰ मीटर/सेकंड"], 0,
    "निर्वात में प्रकाश की चाल लगभग 3 × 10⁸ मीटर/सेकंड (लगभग 3 लाख किमी/सेकंड) है।", "प्रकाश = 3×10⁸ m/s।",
    ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁵ km/h", "3 × 10¹⁰ m/s"]);
  e("Paper-I", "General Science", "Physics", "Current unit", "Easy",
    "विद्युत धारा (electric current) मापने की इकाई क्या है?",
    "What is the unit of measuring electric current?",
    ["एम्पियर (Ampere)", "वोल्ट (Volt)", "ओम (Ohm)", "वाट (Watt)"], 0,
    "विद्युत धारा की इकाई एम्पियर है; वोल्ट = विभवांतर, ओम = प्रतिरोध, वाट = शक्ति।", "धारा = एम्पियर।",
    ["Ampere", "Volt", "Ohm", "Watt"]);
  e("Paper-I", "General Science", "Biology", "Universal donor", "Hard",
    "कौन-सा रक्त समूह 'सर्वदाता' (universal donor) कहलाता है?",
    "Which blood group is called the 'universal donor'?",
    ["O नेगेटिव", "AB पॉजिटिव", "A पॉजिटिव", "B नेगेटिव"], 0,
    "O नेगेटिव रक्त समूह सर्वदाता है; AB पॉजिटिव सर्वग्राही (universal recipient) है।", "O− = सर्वदाता।",
    ["O negative", "AB positive", "A positive", "B negative"]);
  e("Paper-I", "General Science", "Chemistry", "Lightest gas", "Medium",
    "सबसे हल्की गैस कौन-सी है?",
    "Which is the lightest gas?",
    ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "नाइट्रोजन"], 0,
    "हाइड्रोजन सबसे हल्की गैस है।", "सबसे हल्की = हाइड्रोजन।",
    ["Hydrogen", "Helium", "Oxygen", "Nitrogen"]);

  /* =================================================================== */
  /* ================= PAPER-II : COMPUTER FUNDAMENTALS =============== */
  /* =================================================================== */
  e("Paper-II", "Fundamentals of Computer", "History", "Father of computer", "Easy",
    "'कंप्यूटर का जनक' (Father of Computer) किसे कहा जाता है?",
    "Who is called the 'Father of Computer'?",
    ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "जॉन वॉन न्यूमैन", "बिल गेट्स"], 0,
    "चार्ल्स बैबेज को कंप्यूटर का जनक कहा जाता है; उन्होंने Analytical Engine की कल्पना की।", "जनक = चार्ल्स बैबेज।",
    ["Charles Babbage", "Alan Turing", "John von Neumann", "Bill Gates"]);
  e("Paper-II", "Fundamentals of Computer", "Data", "Bit", "Easy",
    "कंप्यूटर में सूचना की सबसे छोटी इकाई क्या है?",
    "What is the smallest unit of information in a computer?",
    ["बिट (Bit)", "बाइट (Byte)", "निबल (Nibble)", "वर्ड (Word)"], 0,
    "बिट (Binary Digit) सूचना की सबसे छोटी इकाई है; 8 बिट = 1 बाइट।", "सबसे छोटी = Bit।",
    ["Bit", "Byte", "Nibble", "Word"]);
  e("Paper-II", "Fundamentals of Computer", "Data", "Byte bits", "Easy",
    "1 बाइट (Byte) में कितने बिट होते हैं?",
    "How many bits are there in 1 Byte?",
    ["8", "4", "16", "10"], 0,
    "1 बाइट = 8 बिट।", "1 Byte = 8 bits।");
  e("Paper-II", "Fundamentals of Computer", "Generations", "First gen", "Medium",
    "कंप्यूटर की प्रथम पीढ़ी (first generation) में किस तकनीक का प्रयोग होता था?",
    "Which technology was used in the first generation of computers?",
    ["वैक्यूम ट्यूब", "ट्रांजिस्टर", "इंटीग्रेटेड सर्किट (IC)", "माइक्रोप्रोसेसर"], 0,
    "प्रथम पीढ़ी में वैक्यूम ट्यूब, दूसरी में ट्रांजिस्टर, तीसरी में IC और चौथी में माइक्रोप्रोसेसर का प्रयोग हुआ।", "पहली पीढ़ी = वैक्यूम ट्यूब।",
    ["Vacuum tubes", "Transistors", "Integrated Circuits (IC)", "Microprocessors"]);
  e("Paper-II", "Fundamentals of Computer", "Memory", "Fastest memory", "Medium",
    "निम्न में से कौन-सी सबसे तेज़ मेमोरी है?",
    "Which of the following is the fastest memory?",
    ["रजिस्टर (Register)", "RAM", "हार्ड डिस्क", "पेन ड्राइव"], 0,
    "CPU के अंदर स्थित रजिस्टर सबसे तेज़ मेमोरी है, उसके बाद कैश, फिर RAM।", "सबसे तेज़ = Register।",
    ["Register", "RAM", "Hard Disk", "Pen Drive"]);
  e("Paper-II", "Fundamentals of Computer", "Storage", "Unit order", "Medium",
    "इनमें से सबसे बड़ी भंडारण इकाई (storage unit) कौन-सी है?",
    "Which of these is the largest storage unit?",
    ["टेराबाइट (TB)", "गीगाबाइट (GB)", "मेगाबाइट (MB)", "किलोबाइट (KB)"], 0,
    "क्रम: KB < MB < GB < TB, अतः टेराबाइट सबसे बड़ी है।", "क्रम: KB<MB<GB<TB।",
    ["Terabyte (TB)", "Gigabyte (GB)", "Megabyte (MB)", "Kilobyte (KB)"]);
  e("Paper-II", "Fundamentals of Computer", "Devices", "Input device", "Easy",
    "निम्न में से कौन-सा इनपुट डिवाइस है?",
    "Which of the following is an input device?",
    ["कीबोर्ड", "मॉनिटर", "प्रिंटर", "स्पीकर"], 0,
    "कीबोर्ड इनपुट डिवाइस है; मॉनिटर, प्रिंटर और स्पीकर आउटपुट डिवाइस हैं।", "कीबोर्ड = इनपुट।",
    ["Keyboard", "Monitor", "Printer", "Speaker"]);
  e("Paper-II", "Fundamentals of Computer", "Full forms", "RAM", "Easy",
    "RAM का पूरा नाम क्या है?",
    "What is the full form of RAM?",
    ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Run Access Memory"], 0,
    "RAM = Random Access Memory, यह अस्थायी (volatile) मुख्य मेमोरी है।", "RAM = Random Access Memory।");
  e("Paper-II", "Fundamentals of Computer", "Number System", "Hex base", "Medium",
    "हेक्साडेसिमल (hexadecimal) संख्या पद्धति का आधार (base) क्या होता है?",
    "What is the base of the hexadecimal number system?",
    ["16", "8", "10", "2"], 0,
    "हेक्साडेसिमल का आधार 16 है (0-9 व A-F); बाइनरी=2, ऑक्टल=8, डेसिमल=10।", "Hex = base 16।");
  e("Paper-II", "Fundamentals of Computer", "Software", "System software", "Medium",
    "निम्न में से कौन-सा सिस्टम सॉफ्टवेयर है?",
    "Which of the following is a system software?",
    ["ऑपरेटिंग सिस्टम", "MS Word", "फोटोशॉप", "गूगल क्रोम"], 0,
    "ऑपरेटिंग सिस्टम सिस्टम सॉफ्टवेयर है; बाकी एप्लिकेशन सॉफ्टवेयर हैं।", "OS = सिस्टम सॉफ्टवेयर।",
    ["Operating System", "MS Word", "Photoshop", "Google Chrome"]);

  /* =================================================================== */
  /* ================= PAPER-II : MS OFFICE / DATA ==================== */
  /* =================================================================== */
  e("Paper-II", "Data Processing", "MS Word", "Save shortcut", "Easy",
    "MS Word में दस्तावेज़ को सेव करने की शॉर्टकट कुंजी क्या है?",
    "Which shortcut key saves a document in MS Word?",
    ["Ctrl + S", "Ctrl + P", "Ctrl + V", "Ctrl + N"], 0,
    "Ctrl+S दस्तावेज़ सेव करता है; Ctrl+P प्रिंट।", "Save = Ctrl+S।");
  e("Paper-II", "Data Processing", "MS Word", "Bold", "Easy",
    "MS Word में चयनित टेक्स्ट को बोल्ड करने की शॉर्टकट कुंजी क्या है?",
    "Which shortcut makes the selected text bold in MS Word?",
    ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + D"], 0,
    "Ctrl+B = Bold, Ctrl+I = Italic, Ctrl+U = Underline।", "Bold = B।");
  e("Paper-II", "Data Processing", "MS Word", "Copy", "Easy",
    "किसी चयनित सामग्री को कॉपी करने की शॉर्टकट कुंजी कौन-सी है?",
    "Which shortcut key copies the selected content?",
    ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"], 0,
    "Ctrl+C = Copy, Ctrl+X = Cut, Ctrl+V = Paste।", "Copy = C।");
  e("Paper-II", "Data Processing", "MS Excel", "Formula start", "Medium",
    "MS Excel में कोई भी फॉर्मूला किस चिह्न से शुरू होता है?",
    "In MS Excel, every formula begins with which symbol?",
    ["= (बराबर)", "+ (जोड़)", "@ (एट)", "# (हैश)"], 0,
    "Excel में फॉर्मूला हमेशा '=' चिह्न से शुरू होता है, जैसे =SUM(A1:A5)।", "फॉर्मूला = से शुरू।",
    ["= (equals)", "+ (plus)", "@ (at)", "# (hash)"]);
  e("Paper-II", "Data Processing", "MS Excel", "Average", "Medium",
    "MS Excel में औसत (average) निकालने के लिए कौन-सा फंक्शन प्रयोग होता है?",
    "Which function is used to find the average in MS Excel?",
    ["AVERAGE", "SUM", "COUNT", "MAX"], 0,
    "AVERAGE फंक्शन दिए गए मानों का औसत निकालता है, जैसे =AVERAGE(A1:A10)।", "औसत = AVERAGE।");
  e("Paper-II", "Data Processing", "MS PowerPoint", "File type", "Medium",
    "MS PowerPoint की प्रस्तुति (presentation) फाइल की मुख्य एक्सटेंशन क्या है?",
    "What is the main file extension of an MS PowerPoint presentation?",
    [".pptx", ".docx", ".xlsx", ".txt"], 0,
    "PowerPoint प्रस्तुति = .pptx; Word = .docx; Excel = .xlsx।", "PPT = pptx।");
  e("Paper-II", "Data Processing", "Windows", "Select all", "Easy",
    "किसी दस्तावेज़ में सम्पूर्ण सामग्री का चयन (select all) करने की शॉर्टकट क्या है?",
    "Which shortcut selects all content in a document?",
    ["Ctrl + A", "Ctrl + S", "Ctrl + E", "Ctrl + F"], 0,
    "Ctrl+A सम्पूर्ण सामग्री का चयन करता है।", "Select All = A।");

  /* =================================================================== */
  /* ============== PAPER-II : PROGRAMMING / DSA ====================== */
  /* =================================================================== */
  e("Paper-II", "Programming Fundamentals", "DSA", "Queue", "Medium",
    "क्यू (Queue) डेटा संरचना किस सिद्धांत पर कार्य करती है?",
    "On which principle does a Queue data structure work?",
    ["FIFO (First In First Out)", "LIFO (Last In First Out)", "रैंडम", "क्रमबद्ध"], 0,
    "Queue FIFO पर कार्य करती है — जो पहले आता है वही पहले निकलता है; Stack LIFO पर।", "Queue = FIFO।",
    ["FIFO (First In First Out)", "LIFO (Last In First Out)", "Random", "Sorted"]);
  e("Paper-II", "Programming Fundamentals", "Languages", "C creator", "Hard",
    "'C' प्रोग्रामिंग भाषा का विकास किसने किया?",
    "Who developed the 'C' programming language?",
    ["डेनिस रिची", "जेम्स गोसलिंग", "गुइडो वैन रोसम", "बजार्न स्ट्रॉस्ट्रुप"], 0,
    "C भाषा का विकास डेनिस रिची ने (1972, बेल लैब्स) किया; Java = गोसलिंग, Python = गुइडो।", "C = डेनिस रिची।",
    ["Dennis Ritchie", "James Gosling", "Guido van Rossum", "Bjarne Stroustrup"]);
  e("Paper-II", "Programming Fundamentals", "Languages", "Python creator", "Hard",
    "'Python' प्रोग्रामिंग भाषा किसने बनाई?",
    "Who created the 'Python' programming language?",
    ["गुइडो वैन रोसम", "डेनिस रिची", "जेम्स गोसलिंग", "बिल गेट्स"], 0,
    "Python का विकास गुइडो वैन रोसम ने किया।", "Python = गुइडो वैन रोसम।",
    ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Bill Gates"]);
  e("Paper-II", "Programming Fundamentals", "Basics", "Flowchart", "Easy",
    "किसी समस्या के हल के चरणों को चित्रों/प्रतीकों द्वारा दर्शाना क्या कहलाता है?",
    "Representing the steps of a solution using diagrams/symbols is called?",
    ["फ्लोचार्ट (Flowchart)", "एल्गोरिदम", "प्रोग्राम", "कंपाइलर"], 0,
    "फ्लोचार्ट समस्या-समाधान के चरणों का चित्रात्मक निरूपण है; एल्गोरिदम शब्दों में चरणबद्ध विधि है।", "चित्र = Flowchart।",
    ["Flowchart", "Algorithm", "Program", "Compiler"]);
  e("Paper-II", "Programming Fundamentals", "Search", "Binary search", "Hard",
    "बाइनरी सर्च (binary search) लागू करने के लिए डेटा कैसा होना आवश्यक है?",
    "For binary search to work, the data must be?",
    ["क्रमबद्ध (sorted)", "अक्रमित (unsorted)", "खाली", "दोहरा"], 0,
    "बाइनरी सर्च केवल क्रमबद्ध (sorted) डेटा पर कार्य करती है; लीनियर सर्च दोनों पर।", "Binary search = sorted चाहिए।",
    ["Sorted", "Unsorted", "Empty", "Duplicated"]);
  e("Paper-II", "Programming Fundamentals", "OOP", "Class object", "Medium",
    "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग में 'क्लास' (class) क्या है?",
    "In Object Oriented Programming, what is a 'class'?",
    ["ऑब्जेक्ट बनाने का खाका/टेम्पलेट", "एक चर (variable)", "एक लूप", "एक फाइल"], 0,
    "क्लास एक टेम्पलेट/खाका है जिससे ऑब्जेक्ट बनाए जाते हैं।", "Class = खाका, Object = उससे बनी वस्तु।",
    ["A blueprint/template to create objects", "A variable", "A loop", "A file"]);
  e("Paper-II", "Programming Fundamentals", "Errors", "Syntax error", "Medium",
    "प्रोग्राम में भाषा के नियमों (व्याकरण) के उल्लंघन से होने वाली त्रुटि क्या कहलाती है?",
    "An error caused by violating the grammar rules of a language is called?",
    ["सिंटैक्स एरर (Syntax error)", "लॉजिकल एरर", "रनटाइम एरर", "हार्डवेयर एरर"], 0,
    "सिंटैक्स (व्याकरण) के उल्लंघन से सिंटैक्स एरर होती है; तर्क की गलती से लॉजिकल एरर।", "व्याकरण गलती = Syntax error।",
    ["Syntax error", "Logical error", "Runtime error", "Hardware error"]);

  /* =================================================================== */
  /* ========= PAPER-II : NETWORKING / INTERNET / IoT ================= */
  /* =================================================================== */
  e("Paper-II", "Communication and Network Concepts", "LAN", "LAN full form", "Easy",
    "LAN का पूरा नाम क्या है?",
    "What is the full form of LAN?",
    ["Local Area Network", "Large Area Network", "Long Access Network", "Local Access Node"], 0,
    "LAN = Local Area Network, यह छोटे क्षेत्र (कार्यालय/भवन) का नेटवर्क है।", "LAN = Local Area Network।");
  e("Paper-II", "Communication and Network Concepts", "WWW", "WWW inventor", "Medium",
    "वर्ल्ड वाइड वेब (WWW) का आविष्कार किसने किया?",
    "Who invented the World Wide Web (WWW)?",
    ["टिम बर्नर्स-ली", "चार्ल्स बैबेज", "बिल गेट्स", "विंट सर्फ"], 0,
    "WWW का आविष्कार टिम बर्नर्स-ली ने किया।", "WWW = टिम बर्नर्स-ली।",
    ["Tim Berners-Lee", "Charles Babbage", "Bill Gates", "Vint Cerf"]);
  e("Paper-II", "Communication and Network Concepts", "Devices", "Router", "Medium",
    "दो अलग-अलग नेटवर्कों को जोड़ने तथा डेटा पैकेट का मार्ग तय करने वाला उपकरण कौन-सा है?",
    "Which device connects two different networks and routes data packets?",
    ["राउटर (Router)", "मॉडेम", "प्रिंटर", "स्कैनर"], 0,
    "राउटर विभिन्न नेटवर्कों को जोड़कर डेटा पैकेट का सर्वोत्तम मार्ग तय करता है।", "मार्ग तय = Router।",
    ["Router", "Modem", "Printer", "Scanner"]);
  e("Paper-II", "Communication and Network Concepts", "Topology", "Star", "Hard",
    "किस नेटवर्क टोपोलॉजी में सभी नोड एक केंद्रीय हब/स्विच से जुड़े होते हैं?",
    "In which network topology are all nodes connected to a central hub/switch?",
    ["स्टार (Star)", "बस (Bus)", "रिंग (Ring)", "मेश (Mesh)"], 0,
    "स्टार टोपोलॉजी में सभी नोड एक केंद्रीय हब/स्विच से जुड़ते हैं।", "केंद्रीय हब = Star।",
    ["Star", "Bus", "Ring", "Mesh"]);
  e("Paper-II", "Internet of Things and Applications", "Protocol", "HTTP", "Medium",
    "HTTP का पूरा नाम क्या है?",
    "What is the full form of HTTP?",
    ["HyperText Transfer Protocol", "High Text Transfer Protocol", "HyperText Transmission Path", "Hyper Transfer Text Protocol"], 0,
    "HTTP = HyperText Transfer Protocol, वेब पेज स्थानांतरण हेतु प्रयुक्त होता है।", "HTTP = HyperText Transfer Protocol।");
  e("Paper-II", "Internet of Things and Applications", "Email", "Email symbol", "Easy",
    "ई-मेल पते (email address) में कौन-सा चिह्न अनिवार्य रूप से प्रयोग होता है?",
    "Which symbol is mandatory in an email address?",
    ["@", "#", "&", "*"], 0,
    "प्रत्येक ई-मेल पते में '@' चिह्न होता है, जैसे name@example.com।", "Email = @।");
  e("Paper-II", "Communication and Network Concepts", "IP", "IPv6 bits", "Hard",
    "IPv6 पता कितने बिट का होता है?",
    "How many bits are there in an IPv6 address?",
    ["128", "32", "64", "256"], 0,
    "IPv6 = 128 बिट; IPv4 = 32 बिट।", "IPv6 = 128, IPv4 = 32।");

  /* =================================================================== */
  /* ============ PAPER-II : OS / COMPUTER ORGANIZATION =============== */
  /* =================================================================== */
  e("Paper-II", "Computer Organization and Operating System", "OS", "OS example", "Easy",
    "निम्न में से कौन-सा एक ऑपरेटिंग सिस्टम है?",
    "Which of the following is an Operating System?",
    ["लिनक्स (Linux)", "MS Word", "एक्सेल", "क्रोम"], 0,
    "Linux एक ऑपरेटिंग सिस्टम है; Windows, macOS, Android भी OS हैं।", "Linux/Windows = OS।",
    ["Linux", "MS Word", "Excel", "Chrome"]);
  e("Paper-II", "Computer Organization and Operating System", "OS", "OS function", "Medium",
    "ऑपरेटिंग सिस्टम का मुख्य कार्य क्या है?",
    "What is the main function of an Operating System?",
    ["हार्डवेयर व संसाधनों का प्रबंधन करना", "दस्तावेज़ टाइप करना", "चित्र बनाना", "गाने चलाना"], 0,
    "OS कंप्यूटर के हार्डवेयर, मेमोरी, प्रोसेस व संसाधनों का प्रबंधन करता है और यूज़र-हार्डवेयर के बीच सेतु है।", "OS = संसाधन प्रबंधन।",
    ["Manage hardware and resources", "Type documents", "Draw pictures", "Play songs"]);
  e("Paper-II", "Computer Organization and Operating System", "OS", "Multitasking", "Medium",
    "एक ही समय में एक से अधिक कार्य (task) चलाने की क्षमता क्या कहलाती है?",
    "The ability to run more than one task at the same time is called?",
    ["मल्टीटास्किंग (Multitasking)", "बूटिंग", "फॉर्मेटिंग", "डिबगिंग"], 0,
    "एक साथ अनेक कार्य चलाना मल्टीटास्किंग कहलाता है।", "एक साथ अनेक कार्य = Multitasking।",
    ["Multitasking", "Booting", "Formatting", "Debugging"]);
  e("Paper-II", "Computer Organization and Operating System", "OS", "Mobile OS", "Medium",
    "निम्न में से कौन-सा मोबाइल ऑपरेटिंग सिस्टम है?",
    "Which of the following is a mobile operating system?",
    ["एंड्रॉइड (Android)", "MS-DOS", "यूनिक्स सर्वर", "पास्कल"], 0,
    "Android गूगल द्वारा विकसित मोबाइल ऑपरेटिंग सिस्टम है (लिनक्स आधारित)।", "मोबाइल OS = Android/iOS।",
    ["Android", "MS-DOS", "Unix server", "Pascal"]);
  e("Paper-II", "Computer Organization and Operating System", "Interface", "GUI", "Medium",
    "GUI का पूरा नाम क्या है?",
    "What is the full form of GUI?",
    ["Graphical User Interface", "General User Interface", "Graphical Unit Interface", "Global User Interface"], 0,
    "GUI = Graphical User Interface, जिसमें आइकन/मेन्यू द्वारा कंप्यूटर से संवाद होता है।", "GUI = Graphical User Interface।");

  /* =================================================================== */
  /* ==================== PAPER-II : DBMS ============================= */
  /* =================================================================== */
  e("Paper-II", "Database Management System", "Basics", "DBMS full form", "Easy",
    "DBMS का पूरा नाम क्या है?",
    "What is the full form of DBMS?",
    ["Database Management System", "Data Backup Management System", "Digital Base Management System", "Data Base Motion System"], 0,
    "DBMS = Database Management System, जो डेटाबेस बनाने व प्रबंधित करने का सॉफ्टवेयर है।", "DBMS = Database Management System।");
  e("Paper-II", "Database Management System", "Relational", "Row", "Medium",
    "रिलेशनल डेटाबेस की तालिका (table) में एक पंक्ति (row) को क्या कहते हैं?",
    "In a relational database table, a row is also called?",
    ["रिकॉर्ड/ट्यूपल", "फील्ड", "एट्रिब्यूट", "कॉलम"], 0,
    "तालिका में पंक्ति = रिकॉर्ड (tuple) और स्तंभ (column) = फील्ड/एट्रिब्यूट।", "Row = record/tuple।",
    ["Record/Tuple", "Field", "Attribute", "Column"]);
  e("Paper-II", "Database Management System", "SQL", "INSERT", "Medium",
    "SQL में तालिका में नया डेटा (row) जोड़ने के लिए कौन-सा कमांड प्रयोग होता है?",
    "Which SQL command is used to add new data (a row) into a table?",
    ["INSERT", "SELECT", "DROP", "UPDATE"], 0,
    "INSERT कमांड तालिका में नई पंक्ति जोड़ता है; SELECT पढ़ता है, UPDATE बदलता है, DROP हटाता है।", "जोड़ना = INSERT।");
  e("Paper-II", "Database Management System", "Keys", "Foreign key", "Hard",
    "एक तालिका का वह गुण जो दूसरी तालिका की प्राथमिक कुंजी को संदर्भित करता है, क्या कहलाता है?",
    "An attribute in a table that refers to the primary key of another table is called?",
    ["विदेशी कुंजी (Foreign Key)", "प्राथमिक कुंजी", "अभ्यर्थी कुंजी", "सुपर कुंजी"], 0,
    "फॉरेन की (विदेशी कुंजी) दूसरी तालिका की प्राथमिक कुंजी को संदर्भित करके तालिकाओं में संबंध बनाती है।", "संबंध जोड़ना = Foreign Key।",
    ["Foreign Key", "Primary Key", "Candidate Key", "Super Key"]);
  e("Paper-II", "Database Management System", "RDBMS", "Example", "Medium",
    "निम्न में से कौन-सा एक RDBMS (सम्बन्धात्मक डेटाबेस) सॉफ्टवेयर है?",
    "Which of the following is an RDBMS software?",
    ["MySQL", "MS Word", "फोटोशॉप", "क्रोम"], 0,
    "MySQL एक लोकप्रिय RDBMS है; Oracle व SQL Server भी RDBMS हैं।", "MySQL/Oracle = RDBMS।",
    ["MySQL", "MS Word", "Photoshop", "Chrome"]);

  /* =================================================================== */
  /* ================= PAPER-II : CYBER SECURITY ===================== */
  /* =================================================================== */
  e("Paper-II", "Network Security", "Malware", "Virus", "Medium",
    "कंप्यूटर वायरस मूलतः क्या है?",
    "A computer virus is basically?",
    ["एक हानिकारक प्रोग्राम (सॉफ्टवेयर)", "एक हार्डवेयर पुर्जा", "एक इनपुट डिवाइस", "एक प्रकार की मेमोरी"], 0,
    "कंप्यूटर वायरस एक हानिकारक प्रोग्राम है जो स्वयं की प्रतिलिपि बनाकर फाइलों/सिस्टम को नुकसान पहुँचाता है।", "वायरस = हानिकारक प्रोग्राम।",
    ["A harmful program (software)", "A hardware part", "An input device", "A type of memory"]);
  e("Paper-II", "Network Security", "Protection", "Antivirus", "Easy",
    "वायरस का पता लगाकर हटाने वाले सॉफ्टवेयर को क्या कहते हैं?",
    "Software that detects and removes viruses is called?",
    ["एंटीवायरस", "कंपाइलर", "ब्राउज़र", "स्प्रेडशीट"], 0,
    "एंटीवायरस सॉफ्टवेयर वायरस को पहचानकर हटाता है, जैसे क्विक हील, एवास्ट।", "वायरस हटाना = Antivirus।",
    ["Antivirus", "Compiler", "Browser", "Spreadsheet"]);
  e("Paper-II", "Network Security", "Attacks", "Phishing", "Hard",
    "नकली ई-मेल/वेबसाइट द्वारा उपयोगकर्ता की गोपनीय जानकारी (पासवर्ड आदि) चुराना क्या कहलाता है?",
    "Stealing a user's confidential info (passwords etc.) via fake emails/websites is called?",
    ["फिशिंग (Phishing)", "बूटिंग", "कैशिंग", "स्पूलिंग"], 0,
    "फिशिंग में ठग नकली ई-मेल/वेबसाइट से गोपनीय जानकारी चुराते हैं।", "धोखा देकर जानकारी चुराना = Phishing।",
    ["Phishing", "Booting", "Caching", "Spooling"]);
  e("Paper-II", "Network Security", "Cryptography", "Encryption", "Hard",
    "डेटा को अनधिकृत पहुँच से बचाने हेतु उसे कोड में बदलने की प्रक्रिया क्या कहलाती है?",
    "The process of converting data into code to protect it from unauthorized access is called?",
    ["एन्क्रिप्शन (Encryption)", "डिलीशन", "फॉर्मेटिंग", "कम्प्रेशन"], 0,
    "एन्क्रिप्शन में डेटा को गुप्त कोड में बदला जाता है; वापस पढ़ने योग्य बनाना डिक्रिप्शन कहलाता है।", "कोड में बदलना = Encryption।",
    ["Encryption", "Deletion", "Formatting", "Compression"]);

  /* =================================================================== */
  /* ==================== PAPER-II : PEDAGOGY ======================== */
  /* =================================================================== */
  e("Paper-II", "Pedagogy", "Theories", "Classical conditioning", "Hard",
    "'शास्त्रीय अनुबंधन' (Classical Conditioning) का सिद्धांत किसने दिया?",
    "Who gave the theory of 'Classical Conditioning'?",
    ["इवान पावलोव", "बी.एफ. स्किनर", "जीन पियाजे", "थार्नडाइक"], 0,
    "इवान पावलोव ने कुत्ते पर प्रयोग द्वारा शास्त्रीय अनुबंधन का सिद्धांत दिया।", "पावलोव = Classical Conditioning (कुत्ता)।",
    ["Ivan Pavlov", "B.F. Skinner", "Jean Piaget", "Thorndike"]);
  e("Paper-II", "Pedagogy", "Theories", "Operant conditioning", "Hard",
    "'क्रिया-प्रसूत अनुबंधन' (Operant Conditioning) का सिद्धांत किससे संबंधित है?",
    "The theory of 'Operant Conditioning' is associated with whom?",
    ["बी.एफ. स्किनर", "इवान पावलोव", "कोहलर", "फ्रॉएबेल"], 0,
    "बी.एफ. स्किनर ने पुनर्बलन (reinforcement) आधारित क्रिया-प्रसूत अनुबंधन का सिद्धांत दिया।", "स्किनर = Operant Conditioning।",
    ["B.F. Skinner", "Ivan Pavlov", "Kohler", "Froebel"]);
  e("Paper-II", "Pedagogy", "Taxonomy", "Bloom", "Hard",
    "शैक्षिक उद्देश्यों का वर्गीकरण (Taxonomy of Educational Objectives) किसने प्रस्तुत किया?",
    "Who presented the 'Taxonomy of Educational Objectives'?",
    ["बेंजामिन ब्लूम", "पियाजे", "वाइगोत्स्की", "मास्लो"], 0,
    "बेंजामिन ब्लूम ने शैक्षिक उद्देश्यों को ज्ञानात्मक, भावात्मक व क्रियात्मक तीन क्षेत्रों में वर्गीकृत किया।", "वर्गीकरण = ब्लूम।",
    ["Benjamin Bloom", "Piaget", "Vygotsky", "Maslow"]);
  e("Paper-II", "Pedagogy", "Methods", "Project method", "Medium",
    "'प्रोजेक्ट विधि' (Project Method) के प्रवर्तक कौन माने जाते हैं?",
    "Who is considered the founder of the 'Project Method'?",
    ["किलपैट्रिक", "फ्रॉएबेल", "मॉन्टेसरी", "पावलोव"], 0,
    "प्रोजेक्ट विधि के प्रवर्तक विलियम किलपैट्रिक हैं, जो 'करके सीखने' पर आधारित है।", "Project Method = किलपैट्रिक।",
    ["Kilpatrick", "Froebel", "Montessori", "Pavlov"]);
  e("Paper-II", "Pedagogy", "Motivation", "Maslow", "Medium",
    "'आवश्यकताओं का पदानुक्रम' (Hierarchy of Needs) सिद्धांत किसने दिया?",
    "Who gave the 'Hierarchy of Needs' theory?",
    ["अब्राहम मास्लो", "स्किनर", "कोहलबर्ग", "ब्रूनर"], 0,
    "अब्राहम मास्लो ने आवश्यकताओं का पदानुक्रम (शारीरिक → सुरक्षा → सामाजिक → सम्मान → आत्म-साक्षात्कार) दिया।", "पदानुक्रम = मास्लो।",
    ["Abraham Maslow", "Skinner", "Kohlberg", "Bruner"]);
  e("Paper-II", "Pedagogy", "Evaluation", "Formative", "Medium",
    "अधिगम के दौरान बीच-बीच में किया जाने वाला सतत मूल्यांकन क्या कहलाता है?",
    "The continuous assessment done during the learning process is called?",
    ["रचनात्मक मूल्यांकन (Formative)", "योगात्मक मूल्यांकन (Summative)", "अंतिम परीक्षा", "प्रवेश परीक्षा"], 0,
    "अधिगम के दौरान होने वाला सतत मूल्यांकन रचनात्मक (formative) है; सत्र के अंत का योगात्मक (summative)।", "बीच का = Formative।",
    ["Formative", "Summative", "Final exam", "Entrance exam"]);

  if (typeof module !== "undefined" && module.exports) module.exports = arr;
  else root.RSSB_BANK_2026H = arr;
})(typeof window !== "undefined" ? window : this);
