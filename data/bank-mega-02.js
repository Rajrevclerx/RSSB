/* RSSB BCI 2026 - Mega bank part 02: Rajasthan Geography + General Science */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG02";
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

  /* ---------------- RAJASTHAN GEOGRAPHY (~25) ---------------- */

  b("Paper-I", "Rajasthan Geography", "Physical features", "Highest peak", "Easy",
    "राजस्थान की सबसे ऊँची चोटी कौन सी है?",
    "Which is the highest peak of Rajasthan?",
    ["गुरु शिखर", "सेर", "तारागढ़", "अचलगढ़"],
    0,
    "गुरु शिखर (माउंट आबू) राजस्थान की सबसे ऊँची चोटी है, ऊँचाई लगभग 1722 मीटर।",
    "गुरु शिखर = सबसे ऊँची (1722 मी)।",
    ["Guru Shikhar", "Ser", "Taragarh", "Achalgarh"]);

  b("Paper-I", "Rajasthan Geography", "Physical features", "Aravalli", "Easy",
    "अरावली पर्वत श्रृंखला राजस्थान में किस दिशा में फैली है?",
    "In which direction does the Aravalli range extend across Rajasthan?",
    ["उत्तर-पूर्व से दक्षिण-पश्चिम", "उत्तर से दक्षिण", "पूर्व से पश्चिम", "उत्तर-पश्चिम से दक्षिण-पूर्व"],
    0,
    "अरावली श्रृंखला राज्य में उत्तर-पूर्व (खेतड़ी) से दक्षिण-पश्चिम की ओर फैली है।",
    "अरावली = NE से SW तिरछी।",
    ["North-east to South-west", "North to South", "East to West", "North-west to South-east"]);

  b("Paper-I", "Rajasthan Geography", "Physical features", "Thar desert", "Easy",
    "थार मरुस्थल राजस्थान के किस भाग में स्थित है?",
    "In which part of Rajasthan is the Thar Desert located?",
    ["पश्चिमी", "पूर्वी", "दक्षिणी", "मध्य"],
    0,
    "थार (महान भारतीय) मरुस्थल राजस्थान के पश्चिमी भाग में स्थित है।",
    "थार = पश्चिमी रेगिस्तान।",
    ["Western", "Eastern", "Southern", "Central"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Longest river", "Medium",
    "राजस्थान में सबसे लंबी नदी कौन सी है (राज्य में प्रवाह के आधार पर)?",
    "Which is the longest river of Rajasthan (by flow within the state)?",
    ["चंबल", "बनास", "लूनी", "माही"],
    1,
    "बनास राजस्थान में पूर्णतः बहने वाली सबसे लंबी नदी है, जो अरावली से निकलती है।",
    "बनास = राज्य के भीतर सबसे लंबी।",
    ["Chambal", "Banas", "Luni", "Mahi"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Luni", "Medium",
    "लूनी नदी किस स्थान से निकलती है?",
    "The Luni river originates from which place?",
    ["नाग पहाड़ (अजमेर)", "जयसमंद", "कुम्भलगढ़", "आबू पर्वत"],
    0,
    "लूनी नदी अजमेर के निकट नाग पहाड़ (अरावली) से निकलती है और कच्छ के रण में गिरती है।",
    "लूनी = नाग पहाड़, अजमेर से।",
    ["Naga Hills (Ajmer)", "Jaisamand", "Kumbhalgarh", "Mt Abu"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Chambal", "Medium",
    "चंबल नदी किस अपवाह तंत्र का भाग है?",
    "The Chambal river is part of which drainage system?",
    ["बंगाल की खाड़ी (यमुना-गंगा)", "अरब सागर", "आंतरिक अपवाह", "कच्छ का रण"],
    0,
    "चंबल यमुना की सहायक नदी है, अतः यह बंगाल की खाड़ी अपवाह तंत्र का भाग है।",
    "चंबल → यमुना → गंगा → बंगाल की खाड़ी।",
    ["Bay of Bengal (Yamuna-Ganga)", "Arabian Sea", "Inland drainage", "Rann of Kutch"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Largest saltwater lake", "Easy",
    "राजस्थान की सबसे बड़ी खारे पानी की झील कौन सी है?",
    "Which is the largest saltwater lake of Rajasthan?",
    ["सांभर", "पुष्कर", "पिछोला", "राजसमंद"],
    0,
    "सांभर झील (जयपुर-नागौर) भारत की सबसे बड़ी अंतःस्थलीय खारे पानी की झील है।",
    "सांभर = सबसे बड़ी खारी झील।",
    ["Sambhar", "Pushkar", "Pichola", "Rajsamand"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Freshwater lakes", "Medium",
    "निम्न में से कौन सी झील मीठे पानी की झील नहीं है?",
    "Which of the following is NOT a freshwater lake?",
    ["जयसमंद", "राजसमंद", "पिछोला", "डीडवाना"],
    3,
    "डीडवाना खारे पानी की झील है; जयसमंद, राजसमंद व पिछोला मीठे पानी की झीलें हैं।",
    "डीडवाना/सांभर/पचपदरा = खारी।",
    ["Jaisamand", "Rajsamand", "Pichola", "Didwana"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Jaisamand", "Medium",
    "जयसमंद झील किस जिले में स्थित है?",
    "In which district is Jaisamand lake located?",
    ["उदयपुर", "जयपुर", "अजमेर", "भरतपुर"],
    0,
    "जयसमंद (ढेबर) झील उदयपुर जिले में है, यह एक कृत्रिम मीठे पानी की झील है।",
    "जयसमंद = उदयपुर।",
    ["Udaipur", "Jaipur", "Ajmer", "Bharatpur"]);

  b("Paper-I", "Rajasthan Geography", "Minerals", "Zinc and lead", "Medium",
    "जावर खदानें (उदयपुर) किस खनिज के लिए प्रसिद्ध हैं?",
    "The Zawar mines (Udaipur) are famous for which mineral?",
    ["जस्ता व सीसा", "तांबा", "टंगस्टन", "जिप्सम"],
    0,
    "जावर की खदानें जस्ता (जिंक) व सीसा (लेड) के लिए प्रसिद्ध हैं।",
    "जावर = जस्ता-सीसा।",
    ["Zinc and lead", "Copper", "Tungsten", "Gypsum"]);

  b("Paper-I", "Rajasthan Geography", "Minerals", "Copper", "Medium",
    "खेतड़ी (झुंझुनूं) किस खनिज के लिए प्रसिद्ध है?",
    "Khetri (Jhunjhunu) is famous for which mineral?",
    ["तांबा", "जस्ता", "संगमरमर", "टंगस्टन"],
    0,
    "खेतड़ी तांबे (कॉपर) के भंडार व खनन के लिए प्रसिद्ध है।",
    "खेतड़ी = तांबा (Copper)।",
    ["Copper", "Zinc", "Marble", "Tungsten"]);

  b("Paper-I", "Rajasthan Geography", "Minerals", "Marble", "Easy",
    "मकराना किस खनिज के लिए प्रसिद्ध है?",
    "Makrana is famous for which mineral?",
    ["संगमरमर", "चूना पत्थर", "जिप्सम", "टंगस्टन"],
    0,
    "मकराना (नागौर) उच्च गुणवत्ता के संगमरमर के लिए प्रसिद्ध है; ताजमहल में इसका प्रयोग हुआ।",
    "मकराना = संगमरमर (मार्बल)।",
    ["Marble", "Limestone", "Gypsum", "Tungsten"]);

  b("Paper-I", "Rajasthan Geography", "Minerals", "Tungsten", "Hard",
    "देगाना (नागौर) किस खनिज के लिए जाना जाता है?",
    "Degana (Nagaur) is known for which mineral?",
    ["टंगस्टन", "तांबा", "जिप्सम", "जस्ता"],
    0,
    "देगाना टंगस्टन (वुल्फ्रेमाइट) खनिज के लिए प्रसिद्ध है।",
    "देगाना = टंगस्टन।",
    ["Tungsten", "Copper", "Gypsum", "Zinc"]);

  b("Paper-I", "Rajasthan Geography", "Minerals", "Not correctly matched", "Hard",
    "निम्न में कौन सा युग्म (खनिज - स्थान) सही सुमेलित नहीं है?",
    "Which pair (mineral - place) is NOT correctly matched?",
    ["तांबा - खेतड़ी", "संगमरमर - मकराना", "जिप्सम - जामसर", "टंगस्टन - जावर"],
    3,
    "टंगस्टन देगाना से जुड़ा है, जावर से नहीं; जावर जस्ता-सीसा के लिए प्रसिद्ध है।",
    "जावर = जस्ता-सीसा, टंगस्टन नहीं।",
    ["Copper - Khetri", "Marble - Makrana", "Gypsum - Jamsar", "Tungsten - Zawar"]);

  b("Paper-I", "Rajasthan Geography", "Minerals", "Gypsum", "Medium",
    "जामसर (बीकानेर) किस खनिज के लिए प्रसिद्ध है?",
    "Jamsar (Bikaner) is famous for which mineral?",
    ["जिप्सम", "तांबा", "संगमरमर", "टंगस्टन"],
    0,
    "जामसर जिप्सम के भंडार के लिए प्रसिद्ध है।",
    "जामसर = जिप्सम।",
    ["Gypsum", "Copper", "Marble", "Tungsten"]);

  b("Paper-I", "Rajasthan Geography", "Climate", "Rainfall", "Medium",
    "राजस्थान में सर्वाधिक वर्षा किस क्षेत्र में होती है?",
    "In which region of Rajasthan does the highest rainfall occur?",
    ["दक्षिण-पूर्वी (झालावाड़-आबू)", "पश्चिमी (जैसलमेर)", "उत्तरी (गंगानगर)", "मध्य (अजमेर)"],
    0,
    "दक्षिण-पूर्व व माउंट आबू क्षेत्र में सर्वाधिक वर्षा होती है, जैसलमेर में सबसे कम।",
    "SE भाग = सबसे अधिक वर्षा।",
    ["South-east (Jhalawar-Abu)", "West (Jaisalmer)", "North (Ganganagar)", "Central (Ajmer)"]);

  b("Paper-I", "Rajasthan Geography", "Climate", "Lowest rainfall", "Easy",
    "राजस्थान का सबसे शुष्क (सबसे कम वर्षा वाला) जिला कौन सा है?",
    "Which is the driest (lowest rainfall) district of Rajasthan?",
    ["जैसलमेर", "उदयपुर", "कोटा", "झालावाड़"],
    0,
    "जैसलमेर में राज्य की सबसे कम वर्षा होती है।",
    "जैसलमेर = सबसे कम वर्षा।",
    ["Jaisalmer", "Udaipur", "Kota", "Jhalawar"]);

  b("Paper-I", "Rajasthan Geography", "Soil", "Desert soil", "Medium",
    "राजस्थान के पश्चिमी मरुस्थलीय भाग में मुख्यतः कौन सी मिट्टी पाई जाती है?",
    "Which soil is mainly found in the western desert part of Rajasthan?",
    ["रेतीली (मरुस्थलीय) मिट्टी", "काली मिट्टी", "जलोढ़ मिट्टी", "लाल मिट्टी"],
    0,
    "पश्चिमी भाग में रेतीली/मरुस्थलीय मिट्टी पाई जाती है, जो जल धारण नहीं कर पाती।",
    "पश्चिम = रेतीली मिट्टी।",
    ["Sandy (desert) soil", "Black soil", "Alluvial soil", "Red soil"]);

  b("Paper-I", "Rajasthan Geography", "Soil", "Black soil", "Medium",
    "राजस्थान में काली (कपासी) मिट्टी मुख्यतः किस क्षेत्र में पाई जाती है?",
    "Black (cotton) soil in Rajasthan is mainly found in which region?",
    ["दक्षिण-पूर्वी (हाड़ौती)", "पश्चिमी मरुस्थल", "उत्तरी मैदान", "अरावली शिखर"],
    0,
    "हाड़ौती पठार (कोटा, बूँदी, झालावाड़) में काली मिट्टी पाई जाती है, कपास के लिए उपयुक्त।",
    "हाड़ौती = काली मिट्टी।",
    ["South-east (Hadoti)", "Western desert", "Northern plain", "Aravalli peaks"]);

  b("Paper-I", "Rajasthan Geography", "Wildlife", "Ranthambore", "Easy",
    "रणथंभौर राष्ट्रीय उद्यान किस लिए प्रसिद्ध है?",
    "Ranthambore National Park is famous for which animal?",
    ["बाघ", "गैंडा", "शेर", "हाथी"],
    0,
    "रणथंभौर (सवाई माधोपुर) बाघों (टाइगर) के लिए प्रसिद्ध है।",
    "रणथंभौर = बाघ।",
    ["Tiger", "Rhinoceros", "Lion", "Elephant"]);

  b("Paper-I", "Rajasthan Geography", "Wildlife", "Keoladeo", "Medium",
    "केवलादेव राष्ट्रीय उद्यान (भरतपुर) किसके लिए प्रसिद्ध है?",
    "Keoladeo National Park (Bharatpur) is famous for what?",
    ["पक्षी (प्रवासी पक्षी)", "बाघ", "भालू", "मगरमच्छ"],
    0,
    "केवलादेव (घना) पक्षी अभयारण्य प्रवासी पक्षियों के लिए प्रसिद्ध, यूनेस्को विश्व धरोहर स्थल है।",
    "केवलादेव/घना = पक्षी।",
    ["Birds (migratory)", "Tiger", "Bear", "Crocodile"]);

  b("Paper-I", "Rajasthan Geography", "Wildlife", "Sariska", "Medium",
    "सरिस्का बाघ अभयारण्य किस जिले में स्थित है?",
    "In which district is Sariska Tiger Reserve located?",
    ["अलवर", "कोटा", "जयपुर", "उदयपुर"],
    0,
    "सरिस्का बाघ अभयारण्य अलवर जिले में स्थित है।",
    "सरिस्का = अलवर।",
    ["Alwar", "Kota", "Jaipur", "Udaipur"]);

  b("Paper-I", "Rajasthan Geography", "Wildlife", "Desert NP", "Medium",
    "मरु राष्ट्रीय उद्यान (डेजर्ट नेशनल पार्क) किस पक्षी के लिए प्रसिद्ध है?",
    "The Desert National Park is famous for which bird?",
    ["गोडावण (ग्रेट इंडियन बस्टर्ड)", "मोर", "सारस", "फ्लेमिंगो"],
    0,
    "मरु राष्ट्रीय उद्यान (जैसलमेर-बाड़मेर) राज्य पक्षी गोडावण के लिए प्रसिद्ध है।",
    "मरु उद्यान = गोडावण।",
    ["Great Indian Bustard (Godawan)", "Peacock", "Crane", "Flamingo"]);

  b("Paper-I", "Rajasthan Geography", "Agriculture", "Mustard", "Medium",
    "राजस्थान भारत में किस तिलहन फसल का सबसे बड़ा उत्पादक है?",
    "Rajasthan is the largest producer in India of which oilseed crop?",
    ["सरसों", "मूँगफली", "सूरजमुखी", "सोयाबीन"],
    0,
    "राजस्थान सरसों (राई) का देश में सबसे बड़ा उत्पादक राज्य है।",
    "राजस्थान = सरसों में अव्वल।",
    ["Mustard", "Groundnut", "Sunflower", "Soybean"]);

  b("Paper-I", "Rajasthan Geography", "Agriculture", "Bajra", "Medium",
    "राजस्थान के शुष्क क्षेत्रों की प्रमुख खाद्यान्न फसल कौन सी है?",
    "Which is the main food-grain crop of the arid regions of Rajasthan?",
    ["बाजरा", "धान", "गन्ना", "जूट"],
    0,
    "बाजरा शुष्क क्षेत्रों की प्रमुख फसल है; राजस्थान बाजरा उत्पादन में अग्रणी है।",
    "मरुस्थल = बाजरा।",
    ["Bajra (Pearl millet)", "Paddy", "Sugarcane", "Jute"]);

  /* ---------------- GENERAL SCIENCE (~25) ---------------- */

  b("Paper-I", "General Science", "Physics basics", "Escape velocity", "Medium",
    "पृथ्वी से पलायन वेग (एस्केप वेलोसिटी) लगभग कितना है?",
    "The escape velocity from Earth is approximately how much?",
    ["11.2 किमी/से", "9.8 किमी/से", "7.9 किमी/से", "15 किमी/से"],
    0,
    "पृथ्वी की सतह से पलायन वेग लगभग 11.2 किमी/सेकंड है।",
    "पलायन वेग = 11.2 किमी/से।",
    ["11.2 km/s", "9.8 km/s", "7.9 km/s", "15 km/s"]);

  b("Paper-I", "General Science", "Physics basics", "Newton first law", "Easy",
    "जड़त्व का नियम न्यूटन के किस गति नियम को कहा जाता है?",
    "The law of inertia is which of Newton's laws of motion?",
    ["पहला नियम", "दूसरा नियम", "तीसरा नियम", "गुरुत्वाकर्षण नियम"],
    0,
    "न्यूटन का पहला गति नियम जड़त्व का नियम कहलाता है।",
    "पहला नियम = जड़त्व।",
    ["First law", "Second law", "Third law", "Law of gravitation"]);

  b("Paper-I", "General Science", "Physics basics", "SI unit of force", "Easy",
    "बल का SI मात्रक क्या है?",
    "What is the SI unit of force?",
    ["न्यूटन", "जूल", "वाट", "पास्कल"],
    0,
    "बल का SI मात्रक न्यूटन (N) है।",
    "बल = न्यूटन।",
    ["Newton", "Joule", "Watt", "Pascal"]);

  b("Paper-I", "General Science", "Physics basics", "SI unit of power", "Medium",
    "शक्ति (पावर) का SI मात्रक क्या है?",
    "What is the SI unit of power?",
    ["वाट", "जूल", "न्यूटन", "एम्पियर"],
    0,
    "शक्ति का SI मात्रक वाट (W = जूल/सेकंड) है।",
    "शक्ति = वाट।",
    ["Watt", "Joule", "Newton", "Ampere"]);

  b("Paper-I", "General Science", "Physics basics", "Speed of light", "Medium",
    "निर्वात में प्रकाश की चाल लगभग कितनी होती है?",
    "The speed of light in vacuum is approximately?",
    ["3 x 10⁸ मी/से", "3 x 10⁶ मी/से", "3 x 10¹⁰ मी/से", "3 x 10⁵ मी/से"],
    0,
    "निर्वात में प्रकाश की चाल लगभग 3 x 10⁸ मीटर/सेकंड है।",
    "प्रकाश = 3 लाख किमी/से।",
    ["3 x 10⁸ m/s", "3 x 10⁶ m/s", "3 x 10¹⁰ m/s", "3 x 10⁵ m/s"]);

  b("Paper-I", "General Science", "Chemistry basics", "pH neutral", "Easy",
    "उदासीन (न्यूट्रल) विलयन का pH मान कितना होता है?",
    "What is the pH value of a neutral solution?",
    ["7", "0", "14", "1"],
    0,
    "उदासीन विलयन (जैसे शुद्ध जल) का pH 7 होता है।",
    "न्यूट्रल = pH 7।",
    ["7", "0", "14", "1"]);

  b("Paper-I", "General Science", "Chemistry basics", "Acid in stomach", "Medium",
    "मानव आमाशय (पेट) में पाचन के लिए कौन सा अम्ल पाया जाता है?",
    "Which acid is present in the human stomach for digestion?",
    ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
    0,
    "आमाशय में हाइड्रोक्लोरिक अम्ल (HCl) पाचन में सहायक होता है।",
    "पेट = HCl।",
    ["Hydrochloric acid", "Sulphuric acid", "Nitric acid", "Acetic acid"]);

  b("Paper-I", "General Science", "Chemistry basics", "Common salt", "Easy",
    "साधारण नमक (टेबल सॉल्ट) का रासायनिक सूत्र क्या है?",
    "What is the chemical formula of common salt (table salt)?",
    ["NaCl", "CaCO₃", "NaHCO₃", "KCl"],
    0,
    "साधारण नमक सोडियम क्लोराइड (NaCl) है।",
    "नमक = NaCl।",
    ["NaCl", "CaCO₃", "NaHCO₃", "KCl"]);

  b("Paper-I", "General Science", "Chemistry basics", "Baking soda", "Medium",
    "खाने का सोडा (बेकिंग सोडा) रासायनिक रूप से क्या है?",
    "Baking soda is chemically which compound?",
    ["सोडियम बाइकार्बोनेट", "सोडियम क्लोराइड", "कैल्शियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड"],
    0,
    "बेकिंग सोडा सोडियम बाइकार्बोनेट (NaHCO₃) है।",
    "बेकिंग सोडा = NaHCO₃।",
    ["Sodium bicarbonate", "Sodium chloride", "Calcium carbonate", "Sodium hydroxide"]);

  b("Paper-I", "General Science", "Chemistry basics", "Not correctly matched", "Hard",
    "निम्न में कौन सा युग्म (पदार्थ - रासायनिक नाम) सही सुमेलित नहीं है?",
    "Which pair (substance - chemical name) is NOT correctly matched?",
    ["चूना पत्थर - कैल्शियम कार्बोनेट", "धावन सोडा - सोडियम कार्बोनेट", "नौसादर - अमोनियम क्लोराइड", "बुझा चूना - कैल्शियम कार्बोनेट"],
    3,
    "बुझा चूना कैल्शियम हाइड्रॉक्साइड Ca(OH)₂ है, कैल्शियम कार्बोनेट नहीं।",
    "बुझा चूना = Ca(OH)₂।",
    ["Limestone - Calcium carbonate", "Washing soda - Sodium carbonate", "Sal ammoniac - Ammonium chloride", "Slaked lime - Calcium carbonate"]);

  b("Paper-I", "General Science", "Biology basics", "Photosynthesis", "Easy",
    "प्रकाश संश्लेषण में पौधे किस गैस को ग्रहण करते हैं?",
    "During photosynthesis, plants absorb which gas?",
    ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    0,
    "प्रकाश संश्लेषण में पौधे CO₂ लेते हैं और O₂ छोड़ते हैं।",
    "पौधे CO₂ लें, O₂ छोड़ें।",
    ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"]);

  b("Paper-I", "General Science", "Biology basics", "Hardest substance body", "Medium",
    "मानव शरीर का सबसे कठोर पदार्थ कौन सा है?",
    "Which is the hardest substance in the human body?",
    ["दन्तवल्क (इनेमल)", "हड्डी", "नाखून", "उपास्थि"],
    0,
    "दाँतों का इनेमल (दन्तवल्क) मानव शरीर का सबसे कठोर पदार्थ है।",
    "इनेमल = सबसे कठोर।",
    ["Enamel", "Bone", "Nail", "Cartilage"]);

  b("Paper-I", "General Science", "Biology basics", "Involuntary control", "Hard",
    "श्वसन व हृदय गति जैसी अनैच्छिक क्रियाओं को मस्तिष्क का कौन सा भाग नियंत्रित करता है?",
    "Which part of the brain controls involuntary actions like breathing and heartbeat?",
    ["मेडुला ऑब्लांगेटा", "प्रमस्तिष्क (सेरेब्रम)", "अनुमस्तिष्क (सेरेबेलम)", "थैलेमस"],
    0,
    "मेडुला ऑब्लांगेटा (मज्जा) श्वसन, हृदय गति जैसी अनैच्छिक क्रियाओं को नियंत्रित करती है।",
    "मेडुला = अनैच्छिक क्रियाएँ।",
    ["Medulla oblongata", "Cerebrum", "Cerebellum", "Thalamus"]);

  b("Paper-I", "General Science", "Biology basics", "Insulin", "Medium",
    "रक्त में शर्करा (ग्लूकोज) का स्तर नियंत्रित करने वाला हार्मोन कौन सा है?",
    "Which hormone regulates the blood sugar (glucose) level?",
    ["इंसुलिन", "एड्रीनलीन", "थायरॉक्सिन", "टेस्टोस्टेरोन"],
    0,
    "अग्न्याशय से स्रावित इंसुलिन रक्त शर्करा को नियंत्रित करता है।",
    "इंसुलिन = शर्करा नियंत्रण।",
    ["Insulin", "Adrenaline", "Thyroxine", "Testosterone"]);

  b("Paper-I", "General Science", "Biology basics", "Adrenaline", "Medium",
    "'आपातकालीन हार्मोन' (एमरजेंसी हार्मोन) किसे कहा जाता है?",
    "Which hormone is called the 'emergency hormone'?",
    ["एड्रीनलीन", "इंसुलिन", "इंस्ट्रोजन", "थायरॉक्सिन"],
    0,
    "एड्रीनलीन (एपिनेफ्रीन) को आपातकालीन/फाइट-ऑर-फ्लाइट हार्मोन कहते हैं।",
    "एड्रीनलीन = आपातकालीन।",
    ["Adrenaline", "Insulin", "Estrogen", "Thyroxine"]);

  b("Paper-I", "General Science", "Biology basics", "Cloning Dolly", "Medium",
    "क्लोनिंग द्वारा उत्पन्न पहला स्तनधारी प्राणी 'डॉली' कौन सा जीव था?",
    "Dolly, the first mammal produced by cloning, was which animal?",
    ["भेड़", "गाय", "बकरी", "चूहा"],
    0,
    "डॉली नामक भेड़ 1996 में क्लोनिंग से बनने वाला पहला स्तनधारी थी।",
    "डॉली = भेड़।",
    ["Sheep", "Cow", "Goat", "Rat"]);

  b("Paper-I", "General Science", "Health and nutrition", "Malaria pathogen", "Medium",
    "मलेरिया रोग किस परजीवी के कारण होता है?",
    "Malaria is caused by which parasite?",
    ["प्लाज्मोडियम", "लीशमैनिया", "जीवाणु", "विषाणु"],
    0,
    "मलेरिया प्लाज्मोडियम नामक प्रोटोजोआ से होता है, जो मादा एनोफिलीज मच्छर से फैलता है।",
    "मलेरिया = प्लाज्मोडियम।",
    ["Plasmodium", "Leishmania", "Bacteria", "Virus"]);

  b("Paper-I", "General Science", "Health and nutrition", "Kala-azar", "Hard",
    "कालाजार (काला-अजार) रोग किस परजीवी के कारण होता है?",
    "Kala-azar disease is caused by which parasite?",
    ["लीशमैनिया", "प्लाज्मोडियम", "एंटअमीबा", "विषाणु"],
    0,
    "कालाजार लीशमैनिया परजीवी से होता है, जो सैंडफ्लाई (बालू मक्खी) द्वारा फैलता है।",
    "कालाजार = लीशमैनिया।",
    ["Leishmania", "Plasmodium", "Entamoeba", "Virus"]);

  b("Paper-I", "General Science", "Health and nutrition", "Vitamin C", "Easy",
    "स्कर्वी रोग किस विटामिन की कमी से होता है?",
    "Scurvy is caused by the deficiency of which vitamin?",
    ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन K"],
    0,
    "विटामिन C (एस्कॉर्बिक अम्ल) की कमी से स्कर्वी होता है।",
    "स्कर्वी = विटामिन C की कमी।",
    ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"]);

  b("Paper-I", "General Science", "Health and nutrition", "Vitamin D", "Medium",
    "सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    "Which vitamin is synthesized in the skin from sunlight?",
    ["विटामिन D", "विटामिन C", "विटामिन B12", "विटामिन K"],
    0,
    "सूर्य की पराबैंगनी किरणों से त्वचा में विटामिन D बनता है।",
    "धूप = विटामिन D।",
    ["Vitamin D", "Vitamin C", "Vitamin B12", "Vitamin K"]);

  b("Paper-I", "General Science", "Health and nutrition", "Night blindness", "Medium",
    "रतौंधी (नाइट ब्लाइंडनेस) किस विटामिन की कमी से होती है?",
    "Night blindness is caused by the deficiency of which vitamin?",
    ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    0,
    "विटामिन A की कमी से रतौंधी होती है।",
    "रतौंधी = विटामिन A।",
    ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"]);

  b("Paper-I", "General Science", "Health and nutrition", "Enzyme", "Medium",
    "जैव-रासायनिक अभिक्रियाओं की गति बढ़ाने वाले जैविक उत्प्रेरक क्या कहलाते हैं?",
    "Biological catalysts that speed up biochemical reactions are called?",
    ["एंजाइम", "हार्मोन", "विटामिन", "एंटीबॉडी"],
    0,
    "एंजाइम जैविक उत्प्रेरक होते हैं जो अभिक्रियाओं की दर बढ़ाते हैं।",
    "जैविक उत्प्रेरक = एंजाइम।",
    ["Enzyme", "Hormone", "Vitamin", "Antibody"]);

  b("Paper-I", "General Science", "Environment", "Ozone layer", "Medium",
    "ओज़ोन परत वायुमंडल की किस परत में पाई जाती है?",
    "The ozone layer is found in which layer of the atmosphere?",
    ["समतापमंडल (स्ट्रैटोस्फीयर)", "क्षोभमंडल (ट्रोपोस्फीयर)", "मध्यमंडल", "बाह्यमंडल"],
    0,
    "ओज़ोन परत समतापमंडल में स्थित होती है और सूर्य की पराबैंगनी किरणों से रक्षा करती है।",
    "ओज़ोन = समतापमंडल।",
    ["Stratosphere", "Troposphere", "Mesosphere", "Exosphere"]);

  b("Paper-I", "General Science", "Environment", "Greenhouse gas", "Medium",
    "निम्न में से कौन सी प्रमुख ग्रीनहाउस गैस है?",
    "Which of the following is a major greenhouse gas?",
    ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "आर्गन"],
    0,
    "कार्बन डाइऑक्साइड (CO₂) प्रमुख ग्रीनहाउस गैस है जो वैश्विक तापन में योगदान देती है।",
    "CO₂ = ग्रीनहाउस गैस।",
    ["Carbon dioxide", "Oxygen", "Nitrogen", "Argon"]);

  b("Paper-I", "General Science", "Environment", "Antioxidant", "Hard",
    "शरीर में मुक्त मूलकों (फ्री रेडिकल्स) को निष्क्रिय करने वाले पदार्थ क्या कहलाते हैं?",
    "Substances that neutralize free radicals in the body are called?",
    ["प्रतिऑक्सीकारक (एंटीऑक्सीडेंट)", "एंजाइम", "उत्प्रेरक", "हार्मोन"],
    0,
    "एंटीऑक्सीडेंट (जैसे विटामिन C, E) मुक्त मूलकों को निष्क्रिय करते हैं।",
    "फ्री रेडिकल्स रोके = एंटीऑक्सीडेंट।",
    ["Antioxidant", "Enzyme", "Catalyst", "Hormone"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
