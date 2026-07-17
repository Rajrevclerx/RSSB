/* RSSB BCI 2026 - Mega bank part 17: MOST IMPORTANT high-yield questions
   (curated from 2022 official paper pattern 118A/118B + 2026 high-probability topics) */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG17";
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

  // ---------------- Paper-I: Rajasthan History (most important) ----------------

  b("Paper-I", "Rajasthan History", "Modern History", "Political Agreements", "medium",
    "'गेटलमैन एग्रीमेंट' (Gentlemen's Agreement) कब हुआ था?",
    "When was the 'Gentlemen's Agreement' signed?",
    ["1940 ई.", "1942 ई.", "1944 ई.", "1947 ई."],
    1,
    "गेटलमैन एग्रीमेंट 1942 ई. में हुआ था (2022 पेपर की उत्तर कुंजी के अनुसार)।",
    "Gentlemen's Agreement = 1942.",
    ["1940 AD", "1942 AD", "1944 AD", "1947 AD"]);

  b("Paper-I", "Rajasthan History", "Forts", "Mehrangarh", "medium",
    "सर्वोत्तम विलास, गज विलास व जवाहर विलास किस दुर्ग में स्थित हैं?",
    "Sarvottam Vilas, Gaj Vilas and Jawahar Vilas are located in which fort?",
    ["बाला किला", "जालौर दुर्ग", "मेहरानगढ़ दुर्ग (जोधपुर)", "सोनारगढ़ दुर्ग"],
    2,
    "ये तीनों महल जोधपुर के मेहरानगढ़ दुर्ग में स्थित हैं।",
    "Vilas palaces → Mehrangarh (Jodhpur).",
    ["Bala Fort", "Jalore Fort", "Mehrangarh Fort (Jodhpur)", "Sonargarh Fort"]);

  b("Paper-I", "Rajasthan Art & Culture", "Painting", "Rajput Paintings", "medium",
    "'राजपूत पेंटिंग्स' पुस्तक में राजस्थानी चित्रकला का वैज्ञानिक विभाजन किसने किया?",
    "Who gave the scientific classification of Rajasthani painting in the book 'Rajput Paintings'?",
    ["आनंद कुमारस्वामी", "डॉ. श्रीधर अंधारे", "डॉ. फैयाज अली", "एरिक डिकिन्सन"],
    0,
    "आनंद कुमारस्वामी ने अपनी पुस्तक 'Rajput Paintings' में राजस्थानी चित्रकला का वैज्ञानिक वर्गीकरण किया।",
    "'Rajput Paintings' book → Ananda Coomaraswamy.",
    ["Ananda Coomaraswamy", "Dr. Shridhar Andhare", "Dr. Faiyaz Ali", "Eric Dickinson"]);

  b("Paper-I", "Rajasthan Art & Culture", "Sects", "Ram Snehi", "medium",
    "राम स्नेही सम्प्रदाय की शाहपुरा (भीलवाड़ा) शाखा के प्रवर्तक कौन थे?",
    "Who was the founder of the Shahpura (Bhilwara) branch of the Ram Snehi sect?",
    ["संत रामचरण जी", "संत दरियाव जी", "संत हरिराम दास जी", "संत हरिदास जी"],
    0,
    "शाहपुरा शाखा के प्रवर्तक संत रामचरण जी थे; रैण (नागौर) शाखा के प्रवर्तक संत दरियाव जी थे।",
    "Shahpura branch → Sant Ramcharan ji.",
    ["Sant Ramcharan ji", "Sant Dariyav ji", "Sant Hariram Das ji", "Sant Haridas ji"]);

  b("Paper-I", "Rajasthan Art & Culture", "Literature", "Kuvalayamala", "medium",
    "'कुवलयमाला' में राजस्थान की कितनी भाषाओं का उल्लेख है?",
    "How many languages of Rajasthan are mentioned in 'Kuvalayamala'?",
    ["08", "18", "06", "28"],
    1,
    "उद्योतनसूरि रचित कुवलयमाला में 18 प्रकार की देशी भाषाओं का उल्लेख है।",
    "Kuvalayamala → 18 languages.",
    ["08", "18", "06", "28"]);

  b("Paper-I", "Rajasthan Art & Culture", "Painting", "Phad", "easy",
    "मारवाड़ का प्रसिद्ध लोक चित्र 'फड़' किस माध्यम पर बनाया जाता है?",
    "The famous folk painting of Marwar, 'Phad', is made on which medium?",
    ["खादी के कपड़े पर", "कागज पर", "दीवार पर", "लकड़ी पर"],
    0,
    "फड़ चित्रकला खादी/मोटे कपड़े पर बनाई जाती है; पाबूजी व देवनारायण की फड़ प्रसिद्ध हैं।",
    "Phad → painted on khadi cloth.",
    ["On khadi cloth", "On paper", "On wall", "On wood"]);

  // ---------------- Paper-I: Rajasthan Geography ----------------

  b("Paper-I", "Rajasthan Geography", "Energy", "Thermal Power", "easy",
    "राजस्थान का सबसे बड़ा तापीय विद्युत गृह कौन-सा है?",
    "Which is the largest thermal power station of Rajasthan?",
    ["सूरतगढ़ थर्मल", "कोटा थर्मल", "गिराल थर्मल", "बरसिंगसर थर्मल"],
    0,
    "सूरतगढ़ सुपर थर्मल पावर स्टेशन राजस्थान का सबसे बड़ा तापीय विद्युत गृह है ('अभयारण्य' उपनाम)।",
    "Largest thermal → Suratgarh.",
    ["Suratgarh Thermal", "Kota Thermal", "Giral Thermal", "Barsingsar Thermal"]);

  b("Paper-I", "Rajasthan Geography", "Lakes", "Saltwater Lakes", "easy",
    "राजस्थान की सबसे बड़ी खारे पानी की झील कौन-सी है?",
    "Which is the largest saltwater lake of Rajasthan?",
    ["सांभर झील", "पचपदरा", "डीडवाना", "लूणकरणसर"],
    0,
    "सांभर झील राजस्थान की सबसे बड़ी खारे पानी की झील है, जो नमक उत्पादन के लिए प्रसिद्ध है।",
    "Largest saltwater lake → Sambhar.",
    ["Sambhar Lake", "Pachpadra", "Didwana", "Lunkaransar"]);

  b("Paper-I", "Rajasthan Geography", "Minerals", "Tungsten", "medium",
    "डेगाना खान किस खनिज के लिए प्रसिद्ध है?",
    "Degana mine is famous for which mineral?",
    ["टंगस्टन", "फ्लोरस्पार", "रॉक फॉस्फेट", "जिप्सम"],
    0,
    "नागौर की डेगाना (रेवत पहाड़ी) खान टंगस्टन के लिए प्रसिद्ध है।",
    "Degana → Tungsten.",
    ["Tungsten", "Fluorspar", "Rock Phosphate", "Gypsum"]);

  b("Paper-I", "Rajasthan Geography", "Census", "Sex Ratio", "medium",
    "2011 की जनगणना अनुसार राजस्थान में 0-6 आयु वर्ग में न्यूनतम लिंगानुपात किस जिले में था?",
    "As per Census 2011, which district had the lowest child (0-6) sex ratio in Rajasthan?",
    ["झुंझुनूं", "धौलपुर", "गंगानगर", "दौसा"],
    0,
    "2011 की जनगणना में 0-6 आयु वर्ग का न्यूनतम लिंगानुपात झुंझुनूं जिले में था।",
    "Lowest child sex ratio 2011 → Jhunjhunu.",
    ["Jhunjhunu", "Dholpur", "Ganganagar", "Dausa"]);

  // ---------------- Paper-I: General Science ----------------

  b("Paper-I", "General Science", "Biology", "Enzymes", "medium",
    "अग्नाशयी रस (Pancreatic juice) में कौन-सा एंजाइम वसा को तोड़ता है?",
    "Which enzyme in pancreatic juice breaks down fat?",
    ["लाइपेज (Lipase)", "पेप्सिन", "ट्रिप्सिन", "एमाइलेस"],
    0,
    "लाइपेज एंजाइम वसा (fat) को वसीय अम्ल व ग्लिसरॉल में तोड़ता है।",
    "Fat digestion → Lipase.",
    ["Lipase", "Pepsin", "Trypsin", "Amylase"]);

  b("Paper-I", "General Science", "Physics", "Escape Velocity", "medium",
    "पृथ्वी का पलायन वेग (Escape velocity) लगभग कितना है?",
    "What is the approximate escape velocity of Earth?",
    ["13.6 किमी/से", "11.2 किमी/से", "11.9 किमी/से", "19.2 किमी/से"],
    1,
    "पृथ्वी का पलायन वेग लगभग 11.2 किमी/सेकंड है।",
    "Earth escape velocity ≈ 11.2 km/s.",
    ["13.6 km/s", "11.2 km/s", "11.9 km/s", "19.2 km/s"]);

  b("Paper-I", "General Science", "Biology", "Hormones", "easy",
    "आपातकालीन हार्मोन (Emergency hormone) किसे कहते हैं?",
    "Which hormone is called the 'emergency hormone'?",
    ["थायरॉक्सिन", "इंसुलिन", "एड्रिनेलिन (Adrenaline)", "प्रोजेस्ट्रोन"],
    2,
    "एड्रिनेलिन (एपिनेफ्रिन) को आपातकालीन/लड़ो-या-भागो हार्मोन कहा जाता है, यह अधिवृक्क ग्रंथि से स्रावित होता है।",
    "Emergency / fight-or-flight → Adrenaline.",
    ["Thyroxine", "Insulin", "Adrenaline", "Progesterone"]);

  b("Paper-I", "General Science", "Biology", "Biotechnology", "easy",
    "क्लोन किया जाने वाला पहला स्तनपायी कौन था?",
    "Which was the first cloned mammal?",
    ["भेड़ (डॉली)", "बकरी", "चूहा", "मेंढक"],
    0,
    "डॉली भेड़ (1996) पहली क्लोन की गई स्तनपायी थी।",
    "First cloned mammal → Dolly the sheep.",
    ["Sheep (Dolly)", "Goat", "Rat", "Frog"]);

  b("Paper-I", "General Science", "Biology", "Diseases", "medium",
    "कालाजार (Kala-azar) रोग किस जीव से होता है?",
    "Kala-azar disease is caused by which organism?",
    ["अमीबा", "प्लाज्मोडियम", "लीशमैनिया (Leishmania)", "प्लेनेरिया"],
    2,
    "कालाजार लीशमैनिया प्रोटोजोआ के कारण होता है, जो सैंडफ्लाई से फैलता है।",
    "Kala-azar → Leishmania.",
    ["Amoeba", "Plasmodium", "Leishmania", "Planaria"]);

  b("Paper-I", "General Science", "Biology", "Human Body", "easy",
    "मानव शरीर का सबसे कठोरतम भाग कौन-सा है?",
    "Which is the hardest part of the human body?",
    ["घुटने की हड्डी", "उंगलियों के नाखून", "दांतों का इनैमल (Enamel)", "खोपड़ी"],
    2,
    "दांतों का इनैमल मानव शरीर का सबसे कठोर पदार्थ है।",
    "Hardest part → tooth enamel.",
    ["Knee bone", "Finger nails", "Tooth enamel", "Skull"]);

  b("Paper-I", "General Science", "Biology", "Nervous System", "medium",
    "रक्तचाप व उल्टी जैसी अनैच्छिक क्रियाओं को मस्तिष्क का कौन-सा भाग नियंत्रित करता है?",
    "Which part of the brain controls involuntary actions like blood pressure and vomiting?",
    ["मेड्यूला ऑब्लोंगेटा", "पोन्स", "सेरेबेलम", "सेरेब्रम"],
    0,
    "मेड्यूला ऑब्लोंगेटा हृदय गति, रक्तचाप, श्वसन व उल्टी जैसी अनैच्छिक क्रियाओं को नियंत्रित करता है।",
    "Involuntary vital actions → Medulla oblongata.",
    ["Medulla oblongata", "Pons", "Cerebellum", "Cerebrum"]);

  // ---------------- Paper-I: Reasoning ----------------

  b("Paper-I", "General Ability", "Clock", "Angle", "medium",
    "एक घड़ी में 3:25 बजे घंटे व मिनट की सुई के बीच का कोण कितना है?",
    "What is the angle between the hour and minute hands of a clock at 3:25?",
    ["47½°", "45½°", "45°", "40°"],
    0,
    "सूत्र |30H − 5.5M| = |30×3 − 5.5×25| = |90 − 137.5| = 47.5°।",
    "|30H − 5.5M| = 47.5°.",
    ["47.5°", "45.5°", "45°", "40°"]);

  b("Paper-I", "General Ability", "Clock", "Straight Line", "medium",
    "एक दिन (24 घंटे) में घड़ी की दोनों सुइयाँ कितनी बार सीधी रेखा में होती हैं?",
    "In a day (24 hours), how many times are the two hands of a clock in a straight line?",
    ["22 बार", "44 बार", "24 बार", "48 बार"],
    1,
    "सीधी रेखा = संपाती (22 बार) + विपरीत दिशा (22 बार) = 44 बार।",
    "Coincide 22 + opposite 22 = 44.",
    ["22 times", "44 times", "24 times", "48 times"]);

  b("Paper-I", "General Ability", "Word Formation", "Rearrangement", "easy",
    "'LASBEBLA' के अक्षरों को व्यवस्थित करने पर एक खेल का नाम बनता है — उसका पहला व अंतिम अक्षर क्या होगा?",
    "Rearranging the letters of 'LASBEBLA' forms the name of a game — what are its first and last letters?",
    ["B, L", "L, S", "L, E", "S, L"],
    0,
    "LASBEBLA → BASEBALL; पहला अक्षर B, अंतिम अक्षर L।",
    "→ BASEBALL → B … L.",
    ["B, L", "L, S", "L, E", "S, L"]);

  // ---------------- Paper-II: Fundamentals of Computer ----------------

  b("Paper-II", "Fundamentals of Computer", "Generations", "First Generation", "medium",
    "निम्न में से कौन-सा प्रथम पीढ़ी (First Generation) का कम्प्यूटर नहीं है?",
    "Which of the following is NOT a first generation computer?",
    ["ENIAC", "PDP-11", "UNIVAC-I", "IBM-701"],
    1,
    "PDP-11 द्वितीय/तृतीय पीढ़ी का है; ENIAC, UNIVAC-I व IBM-701 प्रथम पीढ़ी के हैं।",
    "PDP-11 is NOT first generation.",
    ["ENIAC", "PDP-11", "UNIVAC-I", "IBM-701"]);

  b("Paper-II", "Fundamentals of Computer", "Memory Units", "Storage Order", "easy",
    "दी गई इकाइयों में भंडारण की सबसे बड़ी इकाई कौन-सी है?",
    "Among the given units, which is the largest unit of storage?",
    ["Kilobyte", "Megabyte", "Gigabyte", "Terabyte"],
    3,
    "क्रम: Bit < Byte < KB < MB < GB < TB; अतः इनमें Terabyte सबसे बड़ी है।",
    "KB < MB < GB < TB.",
    ["Kilobyte", "Megabyte", "Gigabyte", "Terabyte"]);

  b("Paper-II", "Fundamentals of Computer", "Memory", "Cache", "medium",
    "CPU और मुख्य मेमोरी (RAM) के बीच गति असंतुलन को कम करने के लिए कौन-सी मेमोरी प्रयुक्त होती है?",
    "Which memory is used to reduce the speed gap between CPU and main memory (RAM)?",
    ["UVEPROM", "फ्लैश मेमोरी", "कैश मेमोरी (Cache)", "DVD"],
    2,
    "कैश मेमोरी CPU व RAM के बीच स्थित तीव्र मेमोरी है जो गति असंतुलन को कम करती है।",
    "Between CPU & RAM → Cache.",
    ["UVEPROM", "Flash memory", "Cache memory", "DVD"]);

  b("Paper-II", "Fundamentals of Computer", "Storage", "Memory Cards", "easy",
    "SD/MMC कार्ड के संदर्भ में 'MMC' का पूर्ण रूप क्या है?",
    "In the context of SD/MMC cards, what is the full form of 'MMC'?",
    ["MultiMedia Card", "Memory Micro Card", "Mobile Memory Chip", "Multi Micro Card"],
    0,
    "MMC = MultiMedia Card; SD = Secure Digital।",
    "MMC = MultiMedia Card.",
    ["MultiMedia Card", "Memory Micro Card", "Mobile Memory Chip", "Multi Micro Card"]);

  // ---------------- Paper-II: MS Office / Data Processing ----------------

  b("Paper-II", "Data Processing", "PowerPoint", "Views", "easy",
    "MS-PowerPoint में स्लाइड्स को पुनर्व्यवस्थित (rearrange) करने हेतु सबसे उपयुक्त view कौन-सा है?",
    "Which view is most suitable for rearranging slides in MS-PowerPoint?",
    ["Slide Sorter", "Notes Page", "Normal", "Slide Show"],
    0,
    "Slide Sorter view में सभी स्लाइड्स थंबनेल रूप में दिखती हैं, जिससे उन्हें आसानी से पुनर्व्यवस्थित किया जा सकता है।",
    "Rearrange slides → Slide Sorter.",
    ["Slide Sorter", "Notes Page", "Normal", "Slide Show"]);

  b("Paper-II", "Data Processing", "PowerPoint", "Shortcut Keys", "medium",
    "MS-PowerPoint में slide show शुरुआत से चलाने हेतु कौन-सी key तथा वर्तमान स्लाइड से चलाने हेतु कौन-सी key है?",
    "In MS-PowerPoint, which key starts the slide show from the beginning and which from the current slide?",
    ["F5 और Shift+F5", "F6 और F8", "F7 और Shift+F7", "F2 और F9"],
    0,
    "F5 = शुरुआत से slide show; Shift+F5 = वर्तमान स्लाइड से।",
    "F5 = start, Shift+F5 = current.",
    ["F5 and Shift+F5", "F6 and F8", "F7 and Shift+F7", "F2 and F9"]);

  b("Paper-II", "Data Processing", "Word", "WordArt", "easy",
    "MS-Word में सजावटी टेक्स्ट (decorative text) क्या कहलाता है?",
    "In MS-Word, decorative text is called?",
    ["Bookmark", "WordArt", "SmartArt", "ClipArt"],
    1,
    "WordArt सजावटी/स्टाइलिश टेक्स्ट के लिए प्रयुक्त होता है।",
    "Decorative text → WordArt.",
    ["Bookmark", "WordArt", "SmartArt", "ClipArt"]);

  b("Paper-II", "Data Processing", "Word", "Gutter", "medium",
    "MS-Word में 'Gutter' मार्जिन किससे संबंधित है?",
    "In MS-Word, the 'Gutter' margin is related to?",
    ["पेज ओरिएंटेशन", "बाइंडिंग के लिए अतिरिक्त मार्जिन", "समीकरण", "फ़ॉन्ट रंग"],
    1,
    "Gutter मार्जिन दस्तावेज़ की बाइंडिंग/जिल्दसाजी हेतु अतिरिक्त स्थान जोड़ता है।",
    "Gutter → extra binding margin.",
    ["Page orientation", "Extra margin for binding", "Equation", "Font colour"]);

  b("Paper-II", "Data Processing", "Windows Tools", "Snipping", "easy",
    "स्क्रीन के केवल एक हिस्से का स्क्रीनशॉट लेने हेतु कौन-सा shortcut है?",
    "Which shortcut is used to take a screenshot of only a part of the screen?",
    ["Windows + Shift + S", "Ctrl + P", "Alt + PrtSc", "Ctrl + Shift + S"],
    0,
    "Windows + Shift + S स्निपिंग/स्क्रीन-स्निप खोलता है जिससे चयनित क्षेत्र का स्क्रीनशॉट लिया जा सकता है।",
    "Partial screenshot → Win+Shift+S.",
    ["Windows + Shift + S", "Ctrl + P", "Alt + PrtSc", "Ctrl + Shift + S"]);

  // ---------------- Paper-II: Programming Fundamentals ----------------

  b("Paper-II", "Programming Fundamentals", "C Language", "Data Types", "easy",
    "C भाषा में real (floating point) data types कौन-से हैं?",
    "Which are the real (floating point) data types in C language?",
    ["int, char, short", "float, double, long double", "int, float, char", "long, short, int"],
    1,
    "C में float, double व long double वास्तविक (floating-point) डेटा टाइप हैं।",
    "Real types → float, double, long double.",
    ["int, char, short", "float, double, long double", "int, float, char", "long, short, int"]);

  b("Paper-II", "Programming Fundamentals", "SQL", "Aggregate Functions", "easy",
    "निम्न में से कौन-सा SQL का aggregate (समुच्चयन) फंक्शन है?",
    "Which of the following is an SQL aggregate function?",
    ["SELECT", "AVG", "CREATE", "MODIFY"],
    1,
    "AVG एक aggregate फंक्शन है; SELECT/CREATE/MODIFY एग्रीगेट नहीं हैं (SUM, COUNT, MIN, MAX भी एग्रीगेट हैं)।",
    "Aggregate → AVG (SUM/COUNT/MIN/MAX).",
    ["SELECT", "AVG", "CREATE", "MODIFY"]);

  b("Paper-II", "Programming Fundamentals", "Artificial Intelligence", "Agents", "medium",
    "AI में 'happy' और 'unhappy' state (संतुष्टि स्तर) से संबंधित agent कौन-सा है?",
    "In AI, which agent is associated with 'happy' and 'unhappy' states (level of satisfaction)?",
    ["Simple reflex agent", "Model based agent", "Learning agent", "Utility based agent"],
    3,
    "Utility-based agent उपयोगिता (utility) फ़ंक्शन के आधार पर 'कितना अच्छा/संतुष्ट' state है यह मापता है।",
    "Happy/utility level → Utility-based agent.",
    ["Simple reflex agent", "Model based agent", "Learning agent", "Utility based agent"]);

  b("Paper-II", "Programming Fundamentals", "Malware", "Virus Life Cycle", "medium",
    "वायरस जीवन-चक्र (Virus Life Cycle) में निम्न में से कौन-सी phase सम्मिलित नहीं है?",
    "Which of the following phases is NOT part of the virus life cycle?",
    ["Dormant", "Execution", "Start", "Triggering"],
    2,
    "वायरस के चरण: Dormant → Propagation → Triggering → Execution; 'Start' कोई मान्य phase नहीं है।",
    "Phases: Dormant/Propagation/Triggering/Execution.",
    ["Dormant", "Execution", "Start", "Triggering"]);

  // ---------------- Paper-II: Data Structures ----------------

  b("Paper-II", "Data Structures and Algorithms", "Searching", "Binary Search", "medium",
    "Binary search के बारे में कौन-सा कथन सत्य है?",
    "Which statement about binary search is TRUE?",
    ["यह केवल क्रमबद्ध (sorted) सूची पर लागू होता है", "यह अक्रमित सूची पर भी चलता है", "यह linear search से धीमा है", "यह केवल linked list पर चलता है"],
    0,
    "Binary search केवल sorted (क्रमबद्ध) सूची पर लागू होता है और linear search से तेज़ है (O(log n))।",
    "Binary search needs sorted input.",
    ["It works only on a sorted list", "It works on unsorted lists too", "It is slower than linear search", "It works only on linked lists"]);

  b("Paper-II", "Data Structures and Algorithms", "Arrays", "Traversal", "easy",
    "Linear array LA पर 'Repeat for K=LB to UB: apply PROCESS to LA[K]' एल्गोरिथ्म क्या करता है?",
    "For a linear array LA, the algorithm 'Repeat for K=LB to UB: apply PROCESS to LA[K]' does what?",
    ["Insertion", "Deletion", "Traversal (LA को traverse करता है)", "Sorting"],
    2,
    "प्रत्येक तत्व पर PROCESS लगाना = array का traversal।",
    "Apply process to each element → Traversal.",
    ["Insertion", "Deletion", "Traversal", "Sorting"]);

  // ---------------- Paper-II: Computer Organization & OS ----------------

  b("Paper-II", "Computer Organization and Operating System", "Boot Process", "Bootstrap Loader", "medium",
    "छोटा bootstrap loader प्रोग्राम कहाँ संग्रहीत होता है?",
    "Where is the small bootstrap loader program stored?",
    ["ROM / BIOS में", "हार्ड डिस्क में", "RAM में", "कैश में"],
    0,
    "बूटस्ट्रैप लोडर ROM/BIOS (firmware) में संग्रहीत होता है जो सिस्टम स्टार्ट होने पर OS लोड करता है।",
    "Bootstrap loader → ROM/BIOS.",
    ["In ROM / BIOS", "In hard disk", "In RAM", "In cache"]);

  b("Paper-II", "Computer Organization and Operating System", "Concurrency", "Race Condition", "medium",
    "जब तीन thread एक ही object को एक साथ share/access करें तो कौन-सी condition उत्पन्न होती है?",
    "When three threads share/access the same object simultaneously, which condition arises?",
    ["Time-lapse", "Critical situation", "Race condition", "Recursion"],
    2,
    "साझा संसाधन पर बिना समकालन के एक साथ पहुँच race condition उत्पन्न करती है।",
    "Unsynchronised shared access → Race condition.",
    ["Time-lapse", "Critical situation", "Race condition", "Recursion"]);

  b("Paper-II", "Computer Organization and Operating System", "Digital Logic", "Multiplexer", "medium",
    "वह combinational logic circuit जिसमें 2ⁿ input lines व एक single output line होती है, क्या कहलाता है?",
    "A combinational logic circuit with 2ⁿ input lines and a single output line is called?",
    ["Multiplexer", "Demultiplexer", "Encoder", "Decoder"],
    0,
    "Multiplexer (MUX) कई इनपुट में से एक को चुनकर एकल आउटपुट पर भेजता है।",
    "Many in, one out → Multiplexer.",
    ["Multiplexer", "Demultiplexer", "Encoder", "Decoder"]);

  b("Paper-II", "Computer Organization and Operating System", "Process Management", "Process States", "easy",
    "एक प्रक्रिया (Process) की सामान्यतः कितनी अवस्थाएँ (states) होती हैं?",
    "How many states does a process generally have?",
    ["3", "4", "5", "6"],
    2,
    "New, Ready, Running, Waiting व Terminated — कुल 5 अवस्थाएँ।",
    "New/Ready/Running/Waiting/Terminated = 5.",
    ["3", "4", "5", "6"]);

  // ---------------- Paper-II: Networking & Security ----------------

  b("Paper-II", "Communication and Network Concepts", "Protocols", "HTTP", "easy",
    "वेब पेज ट्रांसफर के लिए सामान्यतः प्रयुक्त प्रोटोकॉल कौन-सा है?",
    "Which protocol is commonly used for transferring web pages?",
    ["HTML", "HTTP", "WML", "SMTP"],
    1,
    "HTTP (HyperText Transfer Protocol) वेब पेज स्थानांतरण के लिए प्रयुक्त होता है; HTML एक markup भाषा है, प्रोटोकॉल नहीं।",
    "Web pages → HTTP.",
    ["HTML", "HTTP", "WML", "SMTP"]);

  b("Paper-II", "Communication and Network Concepts", "Network Security", "Rootkit", "medium",
    "वह malicious software जो OS की सामान्य कार्यप्रणाली बदलकर पूर्ण नियंत्रण ले लेता है व admin की तरह कार्य करता है, क्या कहलाता है?",
    "The malicious software that alters normal OS functionality, takes full control and acts like an administrator is called?",
    ["Spyware", "Virus", "Rootkit", "Trojan horse"],
    2,
    "Rootkit गहराई से सिस्टम में छिपकर प्रशासनिक (root) स्तर का नियंत्रण प्राप्त कर लेता है।",
    "Admin-level stealth control → Rootkit.",
    ["Spyware", "Virus", "Rootkit", "Trojan horse"]);

  b("Paper-II", "Communication and Network Concepts", "Network Security", "Hacktivism", "medium",
    "'Hacktivism' का क्या अर्थ है?",
    "What does 'Hacktivism' mean?",
    ["पैसे के लिए हैकिंग", "राजनीतिक/सामाजिक उद्देश्य से सिस्टम हैक करना", "सिस्टम की सुरक्षा जाँच", "गलती से हुई हैकिंग"],
    1,
    "Hacktivism = हैकिंग + activism; राजनीतिक या सामाजिक उद्देश्य से कंप्यूटर सिस्टम हैक करना।",
    "Hacking for political/social cause → Hacktivism.",
    ["Hacking for money", "Hacking systems for a political/social cause", "Checking system security", "Accidental hacking"]);

  b("Paper-II", "Communication and Network Concepts", "Network Security", "Phreaking", "medium",
    "मुफ्त कॉल करने हेतु सबसे पुरानी phone hacking तकनीक क्या कहलाती है?",
    "What is the oldest phone hacking technique used to make free calls called?",
    ["Spamming", "Phreaking", "Cracking", "Phishing"],
    1,
    "Phreaking टेलीफोन नेटवर्क को हैक कर मुफ्त कॉल करने की पुरानी तकनीक है।",
    "Phone hacking for free calls → Phreaking.",
    ["Spamming", "Phreaking", "Cracking", "Phishing"]);

  // ---------------- Paper-II: DBMS & XML ----------------

  b("Paper-II", "Database Management System", "XML", "Concept", "medium",
    "XML के बारे में सबसे सटीक कथन कौन-सा है?",
    "Which is the most accurate statement about XML?",
    ["यह एक प्रोग्रामिंग भाषा है", "यह सूचना को पदानुक्रमित (hierarchically) रूप में वर्णित करता है", "यह केवल styling के लिए है", "यह एक database engine है"],
    1,
    "XML (eXtensible Markup Language) डेटा/सूचना को पदानुक्रमित, tag-आधारित रूप में संग्रहीत व वर्णित करती है।",
    "XML → hierarchical data description.",
    ["It is a programming language", "It describes information hierarchically", "It is only for styling", "It is a database engine"]);

  b("Paper-II", "Database Management System", "Keys", "Primary Key", "medium",
    "किसी रिलेशन में प्रत्येक tuple को विशिष्ट रूप से पहचानने वाला attribute (या समूह) क्या कहलाता है?",
    "The attribute (or set) that uniquely identifies each tuple in a relation is called?",
    ["Foreign key", "Primary key", "Candidate index", "Composite view"],
    1,
    "Primary key प्रत्येक tuple को विशिष्ट रूप से पहचानती है और NULL नहीं हो सकती।",
    "Uniquely identifies a tuple → Primary key.",
    ["Foreign key", "Primary key", "Candidate index", "Composite view"]);

  b("Paper-II", "Database Management System", "Views", "Materialized View", "medium",
    "RDBMS में materialized view को अद्यतन/बनाए रखने के लिए सामान्यतः क्या प्रयुक्त होता है?",
    "In RDBMS, what is generally used to maintain/update a materialized view?",
    ["Trigger", "Pointer", "Clone object", "Cursor"],
    0,
    "बेस टेबल बदलने पर materialized view को अद्यतन रखने के लिए trigger का उपयोग किया जाता है।",
    "Maintain materialized view → Trigger.",
    ["Trigger", "Pointer", "Clone object", "Cursor"]);

  b("Paper-II", "Database Management System", "Relational Model", "Relational Algebra", "medium",
    "रिलेशनल डेटा को manipulate करने हेतु मूल संक्रियाओं का समुच्चय क्या कहलाता है?",
    "The basic set of operations to manipulate relational data is called?",
    ["Relational calculus", "Relational algebra", "SQL DDL", "Tuple mapping"],
    1,
    "Relational algebra (Select, Project, Union, Cartesian product, Set difference) मूल संक्रियाओं का समुच्चय है।",
    "Basic ops → Relational algebra.",
    ["Relational calculus", "Relational algebra", "SQL DDL", "Tuple mapping"]);

  b("Paper-II", "Database Management System", "SQL", "DELETE", "medium",
    "SQL में 'DELETE FROM EMPLOYEE;' कमांड का क्या प्रभाव होगा?",
    "In SQL, what does the command 'DELETE FROM EMPLOYEE;' do?",
    ["केवल पहली tuple delete होगी", "पूरी table (structure) delete होगी", "EMPLOYEE की सभी tuples delete होंगी", "कुछ नहीं होगा"],
    2,
    "WHERE clause के बिना DELETE FROM टेबल की सभी tuples (rows) हटा देता है, पर टेबल की संरचना बनी रहती है।",
    "DELETE without WHERE → all rows removed.",
    ["Only first tuple is deleted", "The whole table structure is deleted", "All tuples of EMPLOYEE are deleted", "Nothing happens"]);

  b("Paper-II", "Database Management System", "SQL", "DQL Category", "medium",
    "डेटा प्राप्त (retrieve) करने वाली SELECT कमांड SQL की किस श्रेणी में आती है?",
    "The SELECT command used to retrieve data belongs to which SQL category?",
    ["DDL", "DML", "DQL (Data Query Language)", "TCL"],
    2,
    "SELECT डेटा को query/retrieve करती है, इसलिए इसे DQL (Data Query Language) माना जाता है। DDL=CREATE/ALTER/DROP/TRUNCATE, DML=INSERT/UPDATE/DELETE/MERGE, DCL=GRANT/REVOKE, TCL=COMMIT/ROLLBACK/SAVEPOINT।",
    "SELECT = DQL (not DML).",
    ["DDL", "DML", "DQL (Data Query Language)", "TCL"]);

  b("Paper-II", "Database Management System", "Relational Model", "Unary Operators", "medium",
    "Relational Algebra में unary (एकल) operators कौन-से हैं?",
    "Which are the unary operators in Relational Algebra?",
    ["Union व Cartesian product", "Select व Project", "Join व Union", "Set difference व Join"],
    1,
    "Select (σ) व Project (π) unary हैं (एक ही रिलेशन पर लगते हैं); Union, Cartesian product व Set difference binary हैं।",
    "Unary → Select & Project.",
    ["Union & Cartesian product", "Select & Project", "Join & Union", "Set difference & Join"]);

  // ---------------- Paper-II: System Analysis & IoT ----------------

  b("Paper-II", "System Analysis and Design", "Modelling", "UML", "medium",
    "UML (Unified Modeling Language) का प्रयोग मुख्यतः किसमें होता है?",
    "UML (Unified Modeling Language) is mainly used for?",
    ["Object-Oriented modelling", "Web styling", "Database indexing", "Network routing"],
    0,
    "UML का उपयोग ऑब्जेक्ट-ओरिएंटेड सिस्टम के विश्लेषण व डिज़ाइन (modelling) के लिए होता है।",
    "UML → OO modelling.",
    ["Object-Oriented modelling", "Web styling", "Database indexing", "Network routing"]);

  b("Paper-II", "Internet of Things and Applications", "Web Technology", "HTML", "easy",
    "वेब पेज ऑथरिंग (web page authoring) की बेसिक भाषा कौन-सी है?",
    "Which is the basic language for web page authoring?",
    ["HTML", "SQL", "C++", "Python"],
    0,
    "HTML (HyperText Markup Language) वेब पेज बनाने की मूल भाषा है; CSS styling व XML डेटा हेतु प्रयुक्त होते हैं।",
    "Web authoring → HTML.",
    ["HTML", "SQL", "C++", "Python"]);

  // ---------------- 2026 High-Probability New Topics ----------------

  b("Paper-II", "Programming Fundamentals", "Artificial Intelligence", "Turing Test", "easy",
    "किसी मशीन की मानव जैसी बुद्धिमत्ता प्रदर्शित करने की क्षमता जाँचने वाला परीक्षण कौन-सा है?",
    "Which test checks a machine's ability to exhibit human-like intelligence?",
    ["Turing Test", "Litmus Test", "Boolean Test", "Ping Test"],
    0,
    "एलन ट्यूरिंग द्वारा प्रस्तावित Turing Test यह जाँचता है कि मशीन मानव जैसी बुद्धिमत्ता प्रदर्शित कर सकती है या नहीं।",
    "Machine intelligence check → Turing Test.",
    ["Turing Test", "Litmus Test", "Boolean Test", "Ping Test"]);

  b("Paper-II", "Programming Fundamentals", "Machine Learning", "Learning Types", "medium",
    "लेबल किए गए (labelled) डेटा से सीखने वाला मशीन लर्निंग प्रकार कौन-सा है?",
    "Which type of machine learning learns from labelled data?",
    ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Clustering"],
    0,
    "Supervised learning में मॉडल labelled (इनपुट-आउटपुट युग्म) डेटा से प्रशिक्षित होता है।",
    "Labelled data → Supervised learning.",
    ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Clustering"]);

  b("Paper-II", "Internet of Things and Applications", "Cloud Computing", "Service Models", "medium",
    "क्लाउड कंप्यूटिंग में इंटरनेट पर वर्चुअल मशीन/स्टोरेज जैसी बुनियादी संसाधन उपलब्ध कराने वाला मॉडल कौन-सा है?",
    "In cloud computing, which model provides basic resources like virtual machines/storage over the internet?",
    ["SaaS", "PaaS", "IaaS", "DaaS"],
    2,
    "IaaS (Infrastructure as a Service) वर्चुअल मशीन, स्टोरेज व नेटवर्क जैसी बुनियादी अवसंरचना किराए पर देता है; SaaS सॉफ्टवेयर, PaaS प्लेटफ़ॉर्म देता है।",
    "Infrastructure (VM/storage) → IaaS.",
    ["SaaS", "PaaS", "IaaS", "DaaS"]);

  b("Paper-II", "Internet of Things and Applications", "IoT Protocols", "MQTT", "medium",
    "IoT उपकरणों में हल्के (lightweight) संदेश आदान-प्रदान हेतु सामान्यतः प्रयुक्त प्रोटोकॉल कौन-सा है?",
    "Which protocol is commonly used for lightweight messaging among IoT devices?",
    ["MQTT", "SMTP", "FTP", "Telnet"],
    0,
    "MQTT (Message Queuing Telemetry Transport) कम बैंडविड्थ वाले IoT उपकरणों हेतु हल्का publish/subscribe प्रोटोकॉल है (CoAP भी IoT हेतु प्रयुक्त)।",
    "Lightweight IoT messaging → MQTT.",
    ["MQTT", "SMTP", "FTP", "Telnet"]);

  b("Paper-II", "Programming Fundamentals", "Python", "Data Structures", "easy",
    "Python में अपरिवर्तनीय (immutable) क्रमबद्ध संग्रह कौन-सा है?",
    "Which is an immutable ordered collection in Python?",
    ["List", "Tuple", "Dictionary", "Set"],
    1,
    "Tuple अपरिवर्तनीय (immutable) होता है; List परिवर्तनीय (mutable) है।",
    "Immutable ordered → Tuple.",
    ["List", "Tuple", "Dictionary", "Set"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
