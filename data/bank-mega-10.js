/* RSSB BCI 2026 - Mega bank part 10: Rajasthan Geography + General Science (set 2) */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG10";
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

  /* ---------------- RAJASTHAN GEOGRAPHY (~26) ---------------- */

  b("Paper-I", "Rajasthan Geography", "Physical features", "Second highest peak", "Medium",
    "गुरु शिखर के बाद राजस्थान की दूसरी सबसे ऊँची चोटी कौन सी है?",
    "After Guru Shikhar, which is the second highest peak of Rajasthan?",
    ["सेर", "दिलवाड़ा", "तारागढ़", "जरगा"],
    0,
    "सेर चोटी (सिरोही) लगभग 1597 मीटर ऊँची है और गुरु शिखर के बाद राज्य की दूसरी सबसे ऊँची चोटी है।",
    "सेर = दूसरी सबसे ऊँची (~1597 मी)।",
    ["Ser", "Delwara", "Taragarh", "Jarga"]);

  b("Paper-I", "Rajasthan Geography", "Physical features", "Peak-district match", "Hard",
    "निम्न में से कौन सा युग्म (चोटी - जिला) सही सुमेलित नहीं है?",
    "Which of the following pairs (peak - district) is NOT correctly matched?",
    ["गुरु शिखर - सिरोही", "सेर - सिरोही", "तारागढ़ - अजमेर", "जरगा - जयपुर"],
    3,
    "जरगा चोटी (लगभग 1431 मीटर) उदयपुर जिले में स्थित है, जयपुर में नहीं। अतः यह युग्म गलत है।",
    "जरगा = उदयपुर, जयपुर नहीं।",
    ["Guru Shikhar - Sirohi", "Ser - Sirohi", "Taragarh - Ajmer", "Jarga - Jaipur"]);

  b("Paper-I", "Rajasthan Geography", "Physical features", "Taragarh", "Medium",
    "तारागढ़ (गढ़ बीठली) पहाड़ी किस नगर में स्थित है?",
    "In which city is the Taragarh (Garh Bitli) hill located?",
    ["अजमेर", "बूंदी", "जयपुर", "अलवर"],
    0,
    "अजमेर की तारागढ़ पहाड़ी लगभग 873 मीटर ऊँची है, इस पर तारागढ़ दुर्ग स्थित है।",
    "तारागढ़ (गढ़ बीठली) = अजमेर।",
    ["Ajmer", "Bundi", "Jaipur", "Alwar"]);

  b("Paper-I", "Rajasthan Geography", "Physical features", "Achalgarh", "Medium",
    "अचलगढ़ चोटी राजस्थान के किस पर्वतीय क्षेत्र में स्थित है?",
    "In which mountainous area of Rajasthan is the Achalgarh peak located?",
    ["माउंट आबू (सिरोही)", "मेवाड़ पहाड़ियाँ (उदयपुर)", "हाड़ौती पठार (कोटा)", "मुकुन्दरा (झालावाड़)"],
    0,
    "अचलगढ़ चोटी (लगभग 1380 मीटर) सिरोही जिले में माउंट आबू के निकट स्थित है।",
    "अचलगढ़ = आबू के पास, सिरोही।",
    ["Mount Abu (Sirohi)", "Mewar hills (Udaipur)", "Hadoti plateau (Kota)", "Mukundra (Jhalawar)"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Chambal tributaries", "Medium",
    "काली सिंध और पार्वती नदियाँ किस मुख्य नदी की सहायक हैं?",
    "Kali Sindh and Parvati rivers are tributaries of which main river?",
    ["चंबल", "लूनी", "माही", "बनास"],
    0,
    "काली सिंध व पार्वती चंबल की सहायक नदियाँ हैं; चंबल यमुना में मिलकर अंततः बंगाल की खाड़ी में गिरती है।",
    "काली सिंध, पार्वती → चंबल तंत्र।",
    ["Chambal", "Luni", "Mahi", "Banas"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Kothari", "Hard",
    "कोठारी नदी किस नदी की सहायक है?",
    "Kothari river is a tributary of which river?",
    ["बनास", "लूनी", "माही", "साबरमती"],
    0,
    "कोठारी नदी बनास की सहायक है; बनास चंबल में मिलती है, अतः यह बंगाल की खाड़ी अपवाह तंत्र का भाग है।",
    "कोठारी → बनास → चंबल।",
    ["Banas", "Luni", "Mahi", "Sabarmati"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Inland drainage", "Hard",
    "निम्न में से कौन सी नदी आंतरिक (अंतःस्थलीय) प्रवाह की नदी है?",
    "Which of the following is an inland (internal) drainage river?",
    ["घग्घर", "काली सिंध", "कोठारी", "बनास"],
    0,
    "घग्घर नदी हनुमानगढ़ की ओर बहकर लुप्त हो जाती है, यह आंतरिक प्रवाह की नदी है (समुद्र तक नहीं पहुँचती)।",
    "घग्घर = आंतरिक प्रवाह (लुप्त नदी)।",
    ["Ghaggar", "Kali Sindh", "Kothari", "Banas"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Drainage match", "Hard",
    "निम्न में से कौन सा युग्म (नदी - अपवाह) सही सुमेलित नहीं है?",
    "Which of the following pairs (river - drainage) is NOT correctly matched?",
    ["काली सिंध - बंगाल की खाड़ी", "लूनी - अरब सागर", "घग्घर - आंतरिक प्रवाह", "साबरमती - बंगाल की खाड़ी"],
    3,
    "साबरमती अरब सागर (खंभात की खाड़ी) में गिरती है, बंगाल की खाड़ी में नहीं। अतः यह युग्म गलत है।",
    "साबरमती = अरब सागर।",
    ["Kali Sindh - Bay of Bengal", "Luni - Arabian Sea", "Ghaggar - Inland", "Sabarmati - Bay of Bengal"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Bisalpur dam", "Medium",
    "बीसलपुर बाँध किस नदी पर बना है?",
    "On which river is the Bisalpur dam built?",
    ["बनास", "चंबल", "माही", "जवाई"],
    0,
    "बीसलपुर बाँध टोंक जिले में बनास नदी पर बना है, जो जयपुर-अजमेर को पेयजल आपूर्ति करता है।",
    "बीसलपुर = बनास नदी (टोंक)।",
    ["Banas", "Chambal", "Mahi", "Jawai"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Jawai dam", "Medium",
    "जवाई बाँध, जिसे 'मारवाड़ का अमृत सरोवर' कहते हैं, किस जिले में है?",
    "The Jawai dam, called the 'Amrit Sarovar of Marwar', is in which district?",
    ["पाली", "जालोर", "सिरोही", "बाड़मेर"],
    0,
    "जवाई बाँध पाली जिले में जवाई नदी (लूनी की सहायक) पर बना है, पश्चिमी राजस्थान का सबसे बड़ा बाँध।",
    "जवाई = पाली, पश्चिमी राजस्थान का सबसे बड़ा।",
    ["Pali", "Jalore", "Sirohi", "Barmer"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Mahi Bajaj Sagar", "Medium",
    "माही बजाज सागर बाँध किस नदी पर स्थित है?",
    "On which river is the Mahi Bajaj Sagar dam situated?",
    ["माही", "सोम", "जाखम", "चंबल"],
    0,
    "माही बजाज सागर बाँध बांसवाड़ा जिले में माही नदी पर बना है, राजस्थान का दूसरा सबसे बड़ा बाँध।",
    "माही बजाज सागर = माही नदी (बांसवाड़ा)।",
    ["Mahi", "Som", "Jakham", "Chambal"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Rana Pratap Sagar", "Medium",
    "राणा प्रताप सागर बाँध किस नदी पर बना है?",
    "On which river is the Rana Pratap Sagar dam built?",
    ["चंबल", "बनास", "कालीसिंध", "माही"],
    0,
    "राणा प्रताप सागर बाँध चंबल नदी पर रावतभाटा (चित्तौड़गढ़) में स्थित है, चंबल घाटी परियोजना का भाग।",
    "राणा प्रताप सागर = चंबल (रावतभाटा)।",
    ["Chambal", "Banas", "Kali Sindh", "Mahi"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Jakham dam", "Hard",
    "जाखम बाँध राजस्थान के किस जिले में स्थित है?",
    "The Jakham dam is located in which district of Rajasthan?",
    ["प्रतापगढ़", "डूंगरपुर", "बांसवाड़ा", "उदयपुर"],
    0,
    "जाखम बाँध जाखम नदी पर प्रतापगढ़ जिले (अनूपपुरा) में बना है।",
    "जाखम = प्रतापगढ़।",
    ["Pratapgarh", "Dungarpur", "Banswara", "Udaipur"]);

  b("Paper-I", "Rajasthan Geography", "Agriculture", "IGNP source", "Medium",
    "इंदिरा गांधी नहर परियोजना का जल किस बैराज से प्राप्त होता है?",
    "The Indira Gandhi Canal Project draws its water from which barrage?",
    ["हरिके बैराज", "कोटा बैराज", "गांधी सागर", "रावतभाटा"],
    0,
    "इंदिरा गांधी नहर हरिके बैराज (पंजाब) से जल लेती है, जहाँ सतलुज व व्यास नदियों का संगम होता है।",
    "IGNP = हरिके बैराज (सतलुज+व्यास)।",
    ["Harike Barrage", "Kota Barrage", "Gandhi Sagar", "Rawatbhata"]);

  b("Paper-I", "Rajasthan Geography", "Agriculture", "Gang canal", "Medium",
    "राजस्थान की सबसे पुरानी नहर 'गंग नहर' किस नदी से जल लेती है?",
    "Rajasthan's oldest canal, the 'Gang Canal', draws water from which river?",
    ["सतलुज", "व्यास", "चंबल", "यमुना"],
    0,
    "गंग नहर (1927) फिरोजपुर (पंजाब) के पास सतलुज नदी से जल लेकर श्रीगंगानगर तक पहुँचती है।",
    "गंग नहर = सतलुज (सबसे पुरानी, 1927)।",
    ["Sutlej", "Beas", "Chambal", "Yamuna"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Saline lake NaCl", "Hard",
    "किस खारे झील/स्रोत में सर्वाधिक सोडियम क्लोराइड (नमक) की मात्रा पाई जाती है?",
    "Which saline lake/source has the highest content of sodium chloride (salt)?",
    ["पचपदरा", "डीडवाना", "सांभर", "लूणकरणसर"],
    0,
    "पचपदरा (बाड़मेर) झील का नमक सर्वाधिक शुद्ध (लगभग 98% सोडियम क्लोराइड) होता है।",
    "पचपदरा = सबसे शुद्ध नमक।",
    ["Pachpadra", "Didwana", "Sambhar", "Lunkaransar"]);

  b("Paper-I", "Rajasthan Geography", "Rivers and lakes", "Didwana lake", "Medium",
    "डीडवाना खारी झील राजस्थान के किस जिले में स्थित है?",
    "In which district is the Didwana saline lake located?",
    ["नागौर", "बीकानेर", "चूरू", "जोधपुर"],
    0,
    "डीडवाना खारी झील नागौर जिले में स्थित है, यहाँ सोडियम सल्फेट व नमक का उत्पादन होता है।",
    "डीडवाना = नागौर।",
    ["Nagaur", "Bikaner", "Churu", "Jodhpur"]);

  b("Paper-I", "Rajasthan Geography", "Minerals", "Rampura Agucha", "Medium",
    "रामपुरा-आगूचा खान किस खनिज के लिए प्रसिद्ध है?",
    "The Rampura-Agucha mine is famous for which mineral?",
    ["जस्ता-सीसा", "तांबा", "रॉक फॉस्फेट", "मैंगनीज"],
    0,
    "भीलवाड़ा जिले की रामपुरा-आगूचा खान देश की सबसे बड़ी जस्ता-सीसा (जिंक-लेड) खान है।",
    "रामपुरा-आगूचा = जस्ता-सीसा (भीलवाड़ा)।",
    ["Zinc-Lead", "Copper", "Rock phosphate", "Manganese"]);

  b("Paper-I", "Rajasthan Geography", "Minerals", "Jhamar Kotra", "Medium",
    "झामर कोटड़ा (उदयपुर) किस खनिज के लिए प्रसिद्ध है?",
    "Jhamar Kotra (Udaipur) is famous for which mineral?",
    ["रॉक फॉस्फेट", "जिप्सम", "लिग्नाइट", "वोलेस्टोनाइट"],
    0,
    "उदयपुर का झामर कोटड़ा भारत का सबसे बड़ा रॉक फॉस्फेट भंडार है।",
    "झामर कोटड़ा = रॉक फॉस्फेट।",
    ["Rock phosphate", "Gypsum", "Lignite", "Wollastonite"]);

  b("Paper-I", "Rajasthan Geography", "Minerals", "Mineral-district match", "Hard",
    "निम्न में से कौन सा युग्म (स्थान - खनिज) सही सुमेलित नहीं है?",
    "Which of the following pairs (place - mineral) is NOT correctly matched?",
    ["रामपुरा-आगूचा - जस्ता", "नागौर - जिप्सम", "कोलायत - तांबा", "मकराना - संगमरमर"],
    2,
    "कोलायत (बीकानेर) लिग्नाइट के लिए जाना जाता है, तांबे के लिए नहीं (तांबा - खेतड़ी, झुंझुनूं)। अतः यह गलत है।",
    "कोलायत = लिग्नाइट, तांबा नहीं।",
    ["Rampura-Agucha - Zinc", "Nagaur - Gypsum", "Kolayat - Copper", "Makrana - Marble"]);

  b("Paper-I", "Rajasthan Geography", "Minerals", "Wollastonite", "Hard",
    "वोलेस्टोनाइट के उत्पादन में राजस्थान का कौन सा जिला अग्रणी है?",
    "Which district of Rajasthan is the leading producer of wollastonite?",
    ["सिरोही", "भीलवाड़ा", "अलवर", "कोटा"],
    0,
    "वोलेस्टोनाइट के उत्पादन में सिरोही अग्रणी है; राजस्थान देश का लगभग एकमात्र उत्पादक राज्य है।",
    "वोलेस्टोनाइट = सिरोही।",
    ["Sirohi", "Bhilwara", "Alwar", "Kota"]);

  b("Paper-I", "Rajasthan Geography", "Minerals", "Lignite", "Medium",
    "कोलायत, पलाना व बरसिंगसर किस खनिज के प्रमुख क्षेत्र हैं?",
    "Kolayat, Palana and Barsingsar are major areas for which mineral?",
    ["लिग्नाइट कोयला", "जिप्सम", "रॉक फॉस्फेट", "मैंगनीज"],
    0,
    "बीकानेर जिले के ये क्षेत्र लिग्नाइट (भूरा कोयला) के लिए प्रसिद्ध हैं, जिससे विद्युत उत्पादन होता है।",
    "पलाना/कोलायत/बरसिंगसर = लिग्नाइट।",
    ["Lignite coal", "Gypsum", "Rock phosphate", "Manganese"]);

  b("Paper-I", "Rajasthan Geography", "Minerals", "Power plant type", "Hard",
    "रामगढ़ (जैसलमेर) विद्युत परियोजना किस ईंधन पर आधारित है?",
    "The Ramgarh (Jaisalmer) power project is based on which fuel?",
    ["प्राकृतिक गैस", "कोयला", "परमाणु", "डीजल"],
    0,
    "रामगढ़ (जैसलमेर) गैस आधारित तापीय विद्युत परियोजना है, जो स्थानीय प्राकृतिक गैस का उपयोग करती है।",
    "रामगढ़ = गैस आधारित (जैसलमेर)।",
    ["Natural gas", "Coal", "Nuclear", "Diesel"]);

  b("Paper-I", "Rajasthan Geography", "Wildlife", "Tal Chhapar", "Medium",
    "ताल छापर अभयारण्य (चूरू) मुख्यतः किस वन्यजीव के लिए प्रसिद्ध है?",
    "The Tal Chhapar sanctuary (Churu) is mainly famous for which wildlife?",
    ["कृष्णमृग (ब्लैकबक)", "बाघ", "भेड़िया", "घड़ियाल"],
    0,
    "ताल छापर अभयारण्य कृष्णमृग (ब्लैकबक) के लिए प्रसिद्ध है, यह समतल घास के मैदान वाला क्षेत्र है।",
    "ताल छापर = कृष्णमृग (ब्लैकबक)।",
    ["Blackbuck", "Tiger", "Wolf", "Gharial"]);

  b("Paper-I", "Rajasthan Geography", "Wildlife", "Kumbhalgarh wolf", "Hard",
    "भेड़िया (वुल्फ) के लिए राजस्थान का कौन सा अभयारण्य प्रसिद्ध है?",
    "Which sanctuary of Rajasthan is known for wolves?",
    ["कुंभलगढ़", "ताल छापर", "सरिस्का", "केवलादेव"],
    0,
    "कुंभलगढ़ वन्यजीव अभयारण्य भेड़िया के लिए प्रसिद्ध है, यह राजसमंद-पाली-उदयपुर में फैला है।",
    "कुंभलगढ़ = भेड़िया।",
    ["Kumbhalgarh", "Tal Chhapar", "Sariska", "Keoladeo"]);

  b("Paper-I", "Rajasthan Geography", "Wildlife", "Ramgarh Vishdhari", "Hard",
    "रामगढ़ विषधारी टाइगर रिजर्व राजस्थान का कौन सा (क्रमवार) बाघ अभयारण्य है?",
    "Ramgarh Vishdhari is which (in order) tiger reserve of Rajasthan?",
    ["चौथा", "पहला", "दूसरा", "तीसरा"],
    0,
    "बूंदी जिले का रामगढ़ विषधारी (2021) राजस्थान का चौथा बाघ अभयारण्य है (रणथंभौर, सरिस्का, मुकुन्दरा के बाद)।",
    "रामगढ़ विषधारी = चौथा टाइगर रिजर्व (बूंदी)।",
    ["Fourth", "First", "Second", "Third"]);

  b("Paper-I", "Rajasthan Geography", "Soil", "Black soil", "Medium",
    "राजस्थान के हाड़ौती क्षेत्र (कोटा, बूंदी, झालावाड़) में मुख्यतः कौन सी मिट्टी पाई जाती है?",
    "Which soil is mainly found in the Hadoti region (Kota, Bundi, Jhalawar) of Rajasthan?",
    ["काली मिट्टी", "मरुस्थलीय बालू", "लाल-पीली मिट्टी", "जलोढ़ मिट्टी"],
    0,
    "हाड़ौती के मालवा पठार क्षेत्र में काली (मध्यम काली) मिट्टी पाई जाती है, जो कपास व सोयाबीन के लिए उपयुक्त है।",
    "हाड़ौती = काली मिट्टी।",
    ["Black soil", "Desert sand", "Red-yellow soil", "Alluvial soil"]);

  /* ---------------- GENERAL SCIENCE (~25) ---------------- */

  b("Paper-I", "General Science", "Physics basics", "SI unit force", "Easy",
    "बल का SI मात्रक क्या है?",
    "What is the SI unit of force?",
    ["न्यूटन", "जूल", "वाट", "पास्कल"],
    0,
    "बल का SI मात्रक न्यूटन (N) है; 1 N = 1 kg·m/s²।",
    "बल = न्यूटन।",
    ["Newton", "Joule", "Watt", "Pascal"]);

  b("Paper-I", "General Science", "Physics basics", "SI unit power", "Easy",
    "शक्ति (पावर) का SI मात्रक क्या है?",
    "What is the SI unit of power?",
    ["वाट", "जूल", "न्यूटन", "एम्पियर"],
    0,
    "शक्ति का SI मात्रक वाट (W) है; 1 W = 1 जूल/सेकंड।",
    "शक्ति = वाट (जूल/सेकंड)।",
    ["Watt", "Joule", "Newton", "Ampere"]);

  b("Paper-I", "General Science", "Physics basics", "Newton first law", "Medium",
    "न्यूटन का प्रथम गति नियम किस नाम से जाना जाता है?",
    "Newton's first law of motion is also known as the law of?",
    ["जड़त्व का नियम", "संवेग का नियम", "गुरुत्वाकर्षण का नियम", "ऊर्जा संरक्षण का नियम"],
    0,
    "न्यूटन का प्रथम नियम जड़त्व (इनर्शिया) का नियम कहलाता है; वस्तु अपनी स्थिति बनाए रखती है जब तक बाह्य बल न लगे।",
    "प्रथम नियम = जड़त्व।",
    ["Law of inertia", "Law of momentum", "Law of gravitation", "Law of energy conservation"]);

  b("Paper-I", "General Science", "Physics basics", "Work energy unit", "Easy",
    "कार्य तथा ऊर्जा का SI मात्रक क्या है?",
    "What is the SI unit of work and energy?",
    ["जूल", "वाट", "न्यूटन", "कैलोरी"],
    0,
    "कार्य व ऊर्जा दोनों का SI मात्रक जूल (J) है; 1 J = 1 N·m।",
    "कार्य/ऊर्जा = जूल।",
    ["Joule", "Watt", "Newton", "Calorie"]);

  b("Paper-I", "General Science", "Physics basics", "Ohm's law", "Medium",
    "ओम के नियम के अनुसार V, I और R के बीच सही संबंध क्या है?",
    "According to Ohm's law, which is the correct relation between V, I and R?",
    ["V = I × R", "V = I / R", "V = R / I", "V = I² × R"],
    0,
    "ओम के नियम के अनुसार विभवांतर V = धारा I × प्रतिरोध R (स्थिर ताप पर)।",
    "ओम: V = IR।",
    ["V = I x R", "V = I / R", "V = R / I", "V = I2 x R"]);

  b("Paper-I", "General Science", "Physics basics", "Current unit", "Easy",
    "विद्युत धारा का SI मात्रक क्या है?",
    "What is the SI unit of electric current?",
    ["एम्पियर", "वोल्ट", "ओम", "कूलॉम"],
    0,
    "विद्युत धारा का SI मात्रक एम्पियर (A) है।",
    "धारा = एम्पियर।",
    ["Ampere", "Volt", "Ohm", "Coulomb"]);

  b("Paper-I", "General Science", "Physics basics", "Series circuit", "Medium",
    "श्रेणी क्रम (सीरीज) परिपथ में क्या समान रहता है?",
    "In a series circuit, what remains the same?",
    ["विद्युत धारा", "विभवांतर", "प्रतिरोध", "शक्ति"],
    0,
    "श्रेणी क्रम में प्रत्येक घटक से समान विद्युत धारा प्रवाहित होती है; समांतर क्रम में विभवांतर समान रहता है।",
    "श्रेणी = धारा समान; समांतर = वोल्टेज समान।",
    ["Electric current", "Potential difference", "Resistance", "Power"]);

  b("Paper-I", "General Science", "Physics basics", "Concave mirror use", "Medium",
    "वाहनों की हेडलाइट में परावर्तक के रूप में किस दर्पण का उपयोग होता है?",
    "Which mirror is used as a reflector in vehicle headlights?",
    ["अवतल दर्पण", "उत्तल दर्पण", "समतल दर्पण", "बेलनाकार दर्पण"],
    0,
    "अवतल (कॉन्केव) दर्पण प्रकाश को समांतर किरण पुंज में परावर्तित करता है, इसलिए हेडलाइट व टॉर्च में प्रयुक्त होता है।",
    "हेडलाइट = अवतल दर्पण।",
    ["Concave mirror", "Convex mirror", "Plane mirror", "Cylindrical mirror"]);

  b("Paper-I", "General Science", "Physics basics", "Convex mirror use", "Medium",
    "वाहनों के पश्च-दृश्य (रियर व्यू) दर्पण के रूप में किसका उपयोग किया जाता है?",
    "Which mirror is used as a rear-view mirror in vehicles?",
    ["उत्तल दर्पण", "अवतल दर्पण", "समतल दर्पण", "अवतल लेंस"],
    0,
    "उत्तल (कॉन्वेक्स) दर्पण सीधा व छोटा प्रतिबिंब बनाता है और अधिक विस्तृत क्षेत्र दिखाता है, इसलिए रियर व्यू में प्रयुक्त होता है।",
    "रियर व्यू = उत्तल दर्पण।",
    ["Convex mirror", "Concave mirror", "Plane mirror", "Concave lens"]);

  b("Paper-I", "General Science", "Physics basics", "Concave lens defect", "Hard",
    "निकट दृष्टि दोष (मायोपिया) को ठीक करने के लिए किस लेंस का उपयोग किया जाता है?",
    "Which lens is used to correct short-sightedness (myopia)?",
    ["अवतल लेंस", "उत्तल लेंस", "बेलनाकार लेंस", "समतल दर्पण"],
    0,
    "निकट दृष्टि दोष में अवतल (अपसारी) लेंस का उपयोग होता है; दूर दृष्टि दोष में उत्तल लेंस।",
    "मायोपिया = अवतल लेंस।",
    ["Concave lens", "Convex lens", "Cylindrical lens", "Plane mirror"]);

  b("Paper-I", "General Science", "Physics basics", "Sound vacuum", "Easy",
    "ध्वनि किस माध्यम में संचरित नहीं हो सकती?",
    "Sound cannot travel through which medium?",
    ["निर्वात", "ठोस", "द्रव", "गैस"],
    0,
    "ध्वनि यांत्रिक तरंग है, इसे संचरण के लिए माध्यम चाहिए; निर्वात (वैक्यूम) में यह नहीं चल सकती।",
    "ध्वनि निर्वात में नहीं चलती।",
    ["Vacuum", "Solid", "Liquid", "Gas"]);

  b("Paper-I", "General Science", "Chemistry basics", "Neutral pH", "Easy",
    "उदासीन (न्यूट्रल) विलयन का pH मान कितना होता है?",
    "What is the pH value of a neutral solution?",
    ["7", "0", "10", "14"],
    0,
    "शुद्ध जल जैसे उदासीन विलयन का pH मान 7 होता है; 7 से कम अम्लीय व 7 से अधिक क्षारीय।",
    "उदासीन pH = 7।",
    ["7", "0", "10", "14"]);

  b("Paper-I", "General Science", "Chemistry basics", "Litmus acid", "Easy",
    "अम्ल नीले लिटमस पत्र को किस रंग में बदल देता है?",
    "An acid changes blue litmus paper to which colour?",
    ["लाल", "नीला", "हरा", "पीला"],
    0,
    "अम्ल नीले लिटमस को लाल कर देता है; क्षार लाल लिटमस को नीला कर देता है।",
    "अम्ल: नीला → लाल।",
    ["Red", "Blue", "Green", "Yellow"]);

  b("Paper-I", "General Science", "Chemistry basics", "Baking soda", "Medium",
    "खाने का सोडा (बेकिंग सोडा) का रासायनिक सूत्र क्या है?",
    "What is the chemical formula of baking soda?",
    ["NaHCO₃", "NaCl", "Na₂CO₃", "CaCO₃"],
    0,
    "बेकिंग सोडा सोडियम बाइकार्बोनेट (NaHCO₃) है; Na₂CO₃ धावन सोडा (वाशिंग सोडा) है।",
    "बेकिंग सोडा = NaHCO₃।",
    ["NaHCO3", "NaCl", "Na2CO3", "CaCO3"]);

  b("Paper-I", "General Science", "Chemistry basics", "Alkali metals", "Hard",
    "आवर्त सारणी के किस समूह के तत्व 'क्षार धातु' (अल्कली मेटल) कहलाते हैं?",
    "Elements of which group of the periodic table are called 'alkali metals'?",
    ["समूह 1", "समूह 2", "समूह 17", "समूह 18"],
    0,
    "आवर्त सारणी के समूह 1 (Li, Na, K आदि) के तत्व क्षार धातु कहलाते हैं, जो अत्यधिक क्रियाशील होते हैं।",
    "समूह 1 = क्षार धातु।",
    ["Group 1", "Group 2", "Group 17", "Group 18"]);

  b("Paper-I", "General Science", "Chemistry basics", "Noble gases", "Medium",
    "आवर्त सारणी के किस समूह में उत्कृष्ट (नोबल) गैसें आती हैं?",
    "In which group of the periodic table do noble gases belong?",
    ["समूह 18", "समूह 1", "समूह 14", "समूह 16"],
    0,
    "उत्कृष्ट गैसें (He, Ne, Ar आदि) समूह 18 में आती हैं, जो रासायनिक रूप से अक्रिय होती हैं।",
    "नोबल गैस = समूह 18।",
    ["Group 18", "Group 1", "Group 14", "Group 16"]);

  b("Paper-I", "General Science", "Chemistry basics", "Rusting", "Medium",
    "लोहे में जंग लगने के लिए मुख्यतः किन दो चीज़ों की आवश्यकता होती है?",
    "Rusting of iron mainly requires which two things?",
    ["ऑक्सीजन और जल", "नाइट्रोजन और जल", "कार्बन और ऑक्सीजन", "हाइड्रोजन और जल"],
    0,
    "लोहे में जंग (आयरन ऑक्साइड) लगने के लिए ऑक्सीजन (वायु) व नमी (जल) दोनों आवश्यक हैं।",
    "जंग = ऑक्सीजन + जल।",
    ["Oxygen and water", "Nitrogen and water", "Carbon and oxygen", "Hydrogen and water"]);

  b("Paper-I", "General Science", "Biology basics", "Largest gland", "Medium",
    "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
    "Which is the largest gland in the human body?",
    ["यकृत (लीवर)", "अग्न्याशय", "थायरॉइड", "प्लीहा"],
    0,
    "यकृत (लीवर) मानव शरीर की सबसे बड़ी ग्रंथि है, जो पित्त रस स्रावित करती है।",
    "सबसे बड़ी ग्रंथि = यकृत।",
    ["Liver", "Pancreas", "Thyroid", "Spleen"]);

  b("Paper-I", "General Science", "Biology basics", "Heart chambers", "Easy",
    "मानव हृदय में कितने कक्ष (चैंबर) होते हैं?",
    "How many chambers does the human heart have?",
    ["4", "2", "3", "5"],
    0,
    "मानव हृदय में चार कक्ष होते हैं - दो अलिंद (एट्रिया) व दो निलय (वेंट्रिकल)।",
    "हृदय = 4 कक्ष।",
    ["4", "2", "3", "5"]);

  b("Paper-I", "General Science", "Biology basics", "Universal donor", "Medium",
    "किस रक्त समूह वाले व्यक्ति को 'सर्वदाता' (यूनिवर्सल डोनर) कहा जाता है?",
    "A person of which blood group is called the 'universal donor'?",
    ["O ऋणात्मक", "AB धनात्मक", "A धनात्मक", "B ऋणात्मक"],
    0,
    "O ऋणात्मक (O negative) रक्त समूह को सर्वदाता कहते हैं; AB धनात्मक सर्वग्राही (यूनिवर्सल रेसिपिएंट) होता है।",
    "सर्वदाता = O ऋणात्मक; सर्वग्राही = AB धनात्मक।",
    ["O negative", "AB positive", "A positive", "B negative"]);

  b("Paper-I", "General Science", "Biology basics", "Neuron", "Medium",
    "तंत्रिका तंत्र की संरचनात्मक व क्रियात्मक इकाई क्या है?",
    "What is the structural and functional unit of the nervous system?",
    ["न्यूरॉन", "नेफ्रॉन", "एल्विओलाई", "यकृत कोशिका"],
    0,
    "न्यूरॉन (तंत्रिका कोशिका) तंत्रिका तंत्र की मूल संरचनात्मक व क्रियात्मक इकाई है।",
    "तंत्रिका इकाई = न्यूरॉन।",
    ["Neuron", "Nephron", "Alveoli", "Hepatocyte"]);

  b("Paper-I", "General Science", "Biology basics", "Gas exchange", "Medium",
    "फेफड़ों में गैसों का आदान-प्रदान किस संरचना में होता है?",
    "In which structure of the lungs does gas exchange take place?",
    ["कूपिका (एल्विओलाई)", "श्वासनली", "स्वरयंत्र", "ग्रसनी"],
    0,
    "फेफड़ों में गैसों (O₂ व CO₂) का आदान-प्रदान कूपिकाओं (एल्विओलाई) में होता है।",
    "गैस विनिमय = कूपिका (एल्विओलाई)।",
    ["Alveoli", "Trachea", "Larynx", "Pharynx"]);

  b("Paper-I", "General Science", "Health and nutrition", "Scurvy", "Medium",
    "विटामिन C की कमी से कौन सा रोग होता है?",
    "Deficiency of vitamin C causes which disease?",
    ["स्कर्वी", "रिकेट्स", "रतौंधी", "बेरी-बेरी"],
    0,
    "विटामिन C (एस्कॉर्बिक अम्ल) की कमी से स्कर्वी रोग होता है, जिसमें मसूड़ों से रक्त आता है।",
    "विटामिन C की कमी = स्कर्वी।",
    ["Scurvy", "Rickets", "Night blindness", "Beri-beri"]);

  b("Paper-I", "General Science", "Health and nutrition", "Rickets", "Medium",
    "विटामिन D की कमी से बच्चों में कौन सा रोग होता है?",
    "Deficiency of vitamin D causes which disease in children?",
    ["रिकेट्स", "स्कर्वी", "बेरी-बेरी", "पेलाग्रा"],
    0,
    "विटामिन D की कमी से बच्चों में रिकेट्स (हड्डियाँ मुलायम व टेढ़ी) रोग होता है।",
    "विटामिन D की कमी = रिकेट्स।",
    ["Rickets", "Scurvy", "Beri-beri", "Pellagra"]);

  b("Paper-I", "General Science", "Biology basics", "Photosynthesis", "Medium",
    "प्रकाश संश्लेषण की क्रिया पादप कोशिका के किस अंग में होती है?",
    "In which organelle of the plant cell does photosynthesis occur?",
    ["हरितलवक (क्लोरोप्लास्ट)", "माइटोकॉन्ड्रिया", "रिक्तिका", "केंद्रक"],
    0,
    "प्रकाश संश्लेषण हरितलवक (क्लोरोप्लास्ट) में होता है, जिसमें क्लोरोफिल वर्णक सूर्य प्रकाश को अवशोषित करता है।",
    "प्रकाश संश्लेषण = हरितलवक।",
    ["Chloroplast", "Mitochondria", "Vacuole", "Nucleus"]);

  b("Paper-I", "General Science", "Biology basics", "Transpiration", "Hard",
    "पादपों में जल का वाष्प के रूप में ह्रास मुख्यतः किन छिद्रों से होता है?",
    "In plants, loss of water as vapour mainly occurs through which pores?",
    ["रंध्र (स्टोमेटा)", "मूलरोम", "लेंटिसेल", "जाइलम"],
    0,
    "वाष्पोत्सर्जन (ट्रांसपिरेशन) में पत्तियों के रंध्रों (स्टोमेटा) से जल वाष्प रूप में बाहर निकलता है।",
    "वाष्पोत्सर्जन = रंध्र (स्टोमेटा)।",
    ["Stomata", "Root hairs", "Lenticels", "Xylem"]);

  b("Paper-I", "General Science", "Health and nutrition", "Communicable disease", "Medium",
    "निम्न में से कौन सा एक संक्रामक (संचारी) रोग है?",
    "Which of the following is a communicable (infectious) disease?",
    ["क्षय रोग (टीबी)", "मधुमेह", "उच्च रक्तचाप", "कैंसर"],
    0,
    "क्षय रोग (ट्यूबरकुलोसिस) जीवाणु से फैलने वाला संक्रामक रोग है; मधुमेह व कैंसर असंचारी रोग हैं।",
    "टीबी = संक्रामक; मधुमेह = असंचारी।",
    ["Tuberculosis", "Diabetes", "Hypertension", "Cancer"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
