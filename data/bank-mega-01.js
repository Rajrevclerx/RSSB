/* RSSB BCI 2026 - Mega bank part 01: Rajasthan Art & Culture + Rajasthan History */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG01";
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

  /* ================= Rajasthan Art & Culture ================= */

  b("Paper-I", "Rajasthan Art & Culture", "Folk dances", "Ghoomar", "Easy",
    "घूमर नृत्य मुख्यतः किस समुदाय/क्षेत्र से संबंधित है?",
    "Ghoomar dance is mainly associated with which community/region?",
    ["राजपूत महिलाएँ", "भील पुरुष", "कालबेलिया", "गरासिया"],
    0,
    "घूमर राजपूत महिलाओं का प्रसिद्ध लोकनृत्य है, जो गणगौर व तीज पर किया जाता है।",
    "घूमर = घूमना (गोल घेरे में)",
    ["Rajput women", "Bhil men", "Kalbelia", "Garasia"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk dances", "Kalbelia", "Medium",
    "कालबेलिया नृत्य किस समुदाय से संबंधित है, जिसे यूनेस्को की अमूर्त सांस्कृतिक विरासत सूची में शामिल किया गया है?",
    "Kalbelia dance, inscribed on UNESCO's Intangible Cultural Heritage list, belongs to which community?",
    ["कालबेलिया (सपेरा)", "भील", "मीणा", "गरासिया"],
    0,
    "कालबेलिया सपेरा समुदाय का नृत्य है; इसे 2010 में यूनेस्को सूची में शामिल किया गया।",
    "कालबेलिया = साँप जैसी लचक",
    ["Kalbelia (snake charmers)", "Bhil", "Meena", "Garasia"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk dances", "Terah Taali", "Medium",
    "तेरह ताली नृत्य में महिलाएँ शरीर पर बंधे कितने मंजीरों (ताल) का प्रयोग करती हैं?",
    "In the Terah Taali dance, the women use how many manjiras (cymbals) tied to the body?",
    ["तेरह", "नौ", "सात", "पाँच"],
    0,
    "तेरह ताली में शरीर पर तेरह मंजीरे बाँधकर नृत्य किया जाता है; यह कामड़ जाति करती है।",
    "तेरह ताली = तेरह मंजीरे",
    ["Thirteen", "Nine", "Seven", "Five"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk dances", "Chari", "Medium",
    "सिर पर जलती चरी (बर्तन) रखकर किया जाने वाला 'चरी नृत्य' मुख्यतः किस क्षेत्र में प्रसिद्ध है?",
    "The 'Chari dance', performed with a lit pot on the head, is mainly famous in which region?",
    ["किशनगढ़/अजमेर (गुर्जर)", "जैसलमेर", "बीकानेर", "बाँसवाड़ा"],
    0,
    "चरी नृत्य अजमेर-किशनगढ़ क्षेत्र की गुर्जर महिलाओं का प्रसिद्ध नृत्य है।",
    "",
    ["Kishangarh/Ajmer (Gurjar)", "Jaisalmer", "Bikaner", "Banswara"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk dances", "Gair", "Medium",
    "'गैर नृत्य' मुख्यतः किस समुदाय द्वारा किया जाने वाला पुरुष लोकनृत्य है?",
    "The 'Gair dance' is a male folk dance mainly performed by which community?",
    ["भील", "कालबेलिया", "कामड़", "मीणा"],
    0,
    "गैर नृत्य भील पुरुषों द्वारा होली के अवसर पर किया जाता है; मेवाड़-बाड़मेर में प्रसिद्ध।",
    "",
    ["Bhil", "Kalbelia", "Kamad", "Meena"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk dances", "Not matched", "Hard",
    "निम्न में से कौन-सा नृत्य–समुदाय युग्म सुमेलित नहीं है?",
    "Which of the following dance–community pairs is NOT correctly matched?",
    ["तेरह ताली – कामड़", "गैर – भील", "घूमर – राजपूत", "कठपुतली – कालबेलिया"],
    3,
    "कठपुतली भाट/नट जाति से संबंधित है, कालबेलिया से नहीं; अतः यह युग्म गलत है।",
    "",
    ["Terah Taali – Kamad", "Gair – Bhil", "Ghoomar – Rajput", "Kathputli – Kalbelia"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk music", "Maand", "Medium",
    "'मांड' राजस्थान की किस विधा का प्रसिद्ध शास्त्रीय गायन रूप है?",
    "'Maand' is a famous classical singing style of which genre of Rajasthan?",
    ["शास्त्रीय लोकगायन शैली", "लोकनृत्य", "वाद्य यंत्र", "चित्रशैली"],
    0,
    "मांड राजस्थान की प्रसिद्ध शास्त्रीय गायन शैली है; 'केसरिया बालम' इसका प्रसिद्ध गीत है।",
    "मांड = केसरिया बालम",
    ["A classical folk-singing style", "A folk dance", "A musical instrument", "A painting style"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk music", "Panihari", "Easy",
    "'पणिहारी' गीत किस विषय से संबंधित हैं?",
    "'Panihari' songs are related to which theme?",
    ["पानी भरने जाती स्त्रियाँ", "युद्ध", "विवाह विदाई", "फसल कटाई"],
    0,
    "पणिहारी गीत कुएँ-बावड़ी पर पानी भरने जाती स्त्रियों से संबंधित लोकगीत हैं।",
    "पणिहारी = पानी",
    ["Women going to fetch water", "War", "Wedding farewell", "Harvesting"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk music", "Ravanhatha", "Medium",
    "पाबूजी की फड़ बाँचते समय मुख्यतः कौन-सा वाद्य यंत्र बजाया जाता है?",
    "Which instrument is mainly played while reciting the Pabuji ki Phad?",
    ["रावणहत्था", "अलगोजा", "मोरचंग", "सारंगी"],
    0,
    "पाबूजी की फड़ के साथ भोपा रावणहत्था वाद्य बजाते हैं।",
    "पाबूजी + रावणहत्था",
    ["Ravanhatha", "Algoza", "Morchang", "Sarangi"]);

  b("Paper-I", "Rajasthan Art & Culture", "Festivals", "Pushkar", "Easy",
    "प्रसिद्ध पुष्कर पशु मेला किस माह (हिंदू पंचांग) में आयोजित होता है?",
    "In which month (Hindu calendar) is the famous Pushkar cattle fair held?",
    ["कार्तिक", "श्रावण", "चैत्र", "फाल्गुन"],
    0,
    "पुष्कर मेला कार्तिक पूर्णिमा के आसपास अजमेर के पुष्कर में लगता है।",
    "पुष्कर = कार्तिक पूर्णिमा",
    ["Kartik", "Shravan", "Chaitra", "Phalgun"]);

  b("Paper-I", "Rajasthan Art & Culture", "Festivals", "Gangaur", "Medium",
    "गणगौर त्योहार में किन देवताओं की पूजा की जाती है?",
    "Which deities are worshipped in the Gangaur festival?",
    ["ईसर व गौरी (शिव-पार्वती)", "राम व सीता", "कृष्ण व राधा", "विष्णु व लक्ष्मी"],
    0,
    "गणगौर में ईसर (शिव) और गौरी (पार्वती) की पूजा होती है; चैत्र में मनाया जाता है।",
    "गण = ईसर, गौर = गौरी",
    ["Isar & Gauri (Shiv-Parvati)", "Ram & Sita", "Krishna & Radha", "Vishnu & Lakshmi"]);

  b("Paper-I", "Rajasthan Art & Culture", "Festivals", "Teej", "Easy",
    "'तीज' का त्योहार मुख्यतः किस माह में मनाया जाता है, जिसमें झूला झूलने की परंपरा है?",
    "The festival of 'Teej', known for the tradition of swings, is mainly celebrated in which month?",
    ["श्रावण (सावन)", "कार्तिक", "माघ", "आषाढ़"],
    0,
    "तीज श्रावण मास में मनाई जाती है; जयपुर की तीज सवारी प्रसिद्ध है।",
    "सावन की तीज",
    ["Shravan (Sawan)", "Kartik", "Magh", "Ashadh"]);

  b("Paper-I", "Rajasthan Art & Culture", "Festivals", "Fairs region", "Hard",
    "निम्न में से कौन-सा मेला–स्थान युग्म सुमेलित नहीं है?",
    "Which of the following fair–place pairs is NOT correctly matched?",
    ["कैलादेवी मेला – करौली", "रामदेवरा मेला – जैसलमेर", "बेणेश्वर मेला – डूंगरपुर", "गोगामेड़ी मेला – अजमेर"],
    3,
    "गोगामेड़ी मेला हनुमानगढ़ जिले में लगता है, अजमेर में नहीं।",
    "",
    ["Kaila Devi fair – Karauli", "Ramdevra fair – Jaisalmer", "Beneshwar fair – Dungarpur", "Gogamedi fair – Ajmer"]);

  b("Paper-I", "Rajasthan Art & Culture", "Paintings", "Phad", "Medium",
    "'फड़' चित्रकला मुख्यतः किन लोकदेवताओं की गाथा से संबंधित है और किस स्थान की प्रसिद्ध है?",
    "'Phad' painting is mainly associated with folk-deity epics and is famous from which place?",
    ["भीलवाड़ा (शाहपुरा)", "नाथद्वारा", "किशनगढ़", "बूंदी"],
    0,
    "फड़ चित्रकला भीलवाड़ा के शाहपुरा की प्रसिद्ध है; इसमें पाबूजी-देवनारायण की गाथा चित्रित होती है।",
    "फड़ = शाहपुरा",
    ["Bhilwara (Shahpura)", "Nathdwara", "Kishangarh", "Bundi"]);

  b("Paper-I", "Rajasthan Art & Culture", "Paintings", "Pichwai", "Medium",
    "'पिछवाई' चित्रकला मुख्यतः किस स्थान से संबंधित है, जिसमें श्रीनाथजी के चित्र बनते हैं?",
    "'Pichwai' painting, depicting Shrinathji, is mainly associated with which place?",
    ["नाथद्वारा", "किशनगढ़", "बूंदी", "जयपुर"],
    0,
    "पिछवाई कला नाथद्वारा (राजसमंद) की प्रसिद्ध है, जिसमें श्रीनाथजी के पीछे टाँगे जाने वाले चित्र बनते हैं।",
    "पिछवाई = पीछे टँगने वाली (नाथद्वारा)",
    ["Nathdwara", "Kishangarh", "Bundi", "Jaipur"]);

  b("Paper-I", "Rajasthan Art & Culture", "Paintings", "Kishangarh", "Hard",
    "'बणी-ठणी' चित्र किस चित्रशैली की सर्वाधिक प्रसिद्ध कृति है?",
    "The famous painting 'Bani-Thani' belongs to which painting style?",
    ["किशनगढ़ शैली", "मेवाड़ शैली", "बूंदी शैली", "जयपुर शैली"],
    0,
    "बणी-ठणी किशनगढ़ शैली की प्रसिद्ध कृति है, जिसे 'भारत की मोनालिसा' कहा जाता है।",
    "बणी-ठणी = किशनगढ़",
    ["Kishangarh style", "Mewar style", "Bundi style", "Jaipur style"]);

  b("Paper-I", "Rajasthan Art & Culture", "Paintings", "Bundi style", "Hard",
    "निम्न में से कौन-सी चित्रशैली अपने चित्रों में हरे-भरे बाग-बगीचों व वर्षा (बादलों) के चित्रण के लिए प्रसिद्ध है?",
    "Which painting style is famous for depicting lush gardens and rain/clouds in its works?",
    ["बूंदी शैली", "किशनगढ़ शैली", "मारवाड़ शैली", "अलवर शैली"],
    0,
    "बूंदी शैली प्राकृतिक दृश्यों, बागों और वर्षा-ऋतु के चित्रण के लिए प्रसिद्ध है।",
    "",
    ["Bundi style", "Kishangarh style", "Marwar style", "Alwar style"]);

  b("Paper-I", "Rajasthan Art & Culture", "Architecture", "Dilwara", "Easy",
    "प्रसिद्ध दिलवाड़ा जैन मंदिर किस स्थान पर स्थित हैं?",
    "The famous Dilwara Jain temples are located at which place?",
    ["माउंट आबू", "रणकपुर", "ओसियां", "चित्तौड़गढ़"],
    0,
    "दिलवाड़ा के संगमरमर के जैन मंदिर माउंट आबू (सिरोही) में स्थित हैं।",
    "दिलवाड़ा = आबू",
    ["Mount Abu", "Ranakpur", "Osian", "Chittorgarh"]);

  b("Paper-I", "Rajasthan Art & Culture", "Architecture", "Ranakpur", "Medium",
    "रणकपुर का प्रसिद्ध जैन मंदिर किस तीर्थंकर को समर्पित है और अपने कितने स्तंभों के लिए जाना जाता है?",
    "The famous Ranakpur Jain temple is dedicated to which Tirthankara and known for its many pillars?",
    ["आदिनाथ (ऋषभदेव) – 1444 स्तंभ", "महावीर – 84 स्तंभ", "पार्श्वनाथ – 500 स्तंभ", "नेमिनाथ – 108 स्तंभ"],
    0,
    "रणकपुर मंदिर आदिनाथ को समर्पित है और अपने असंख्य (लगभग 1444) खंभों के लिए प्रसिद्ध है।",
    "रणकपुर = आदिनाथ, हजारों खंभे",
    ["Adinath (Rishabhdev) – 1444 pillars", "Mahavir – 84 pillars", "Parshvanath – 500 pillars", "Neminath – 108 pillars"]);

  b("Paper-I", "Rajasthan Art & Culture", "Architecture", "Kumbhalgarh", "Medium",
    "कुम्भलगढ़ दुर्ग, जो अपनी विशाल परकोटा दीवार के लिए प्रसिद्ध है, किसने बनवाया था?",
    "Kumbhalgarh fort, famous for its massive wall, was built by whom?",
    ["महाराणा कुम्भा", "राणा सांगा", "महाराणा प्रताप", "राव जोधा"],
    0,
    "कुम्भलगढ़ दुर्ग महाराणा कुम्भा ने बनवाया; इसकी दीवार को 'भारत की महान दीवार' कहते हैं।",
    "कुम्भलगढ़ = कुम्भा",
    ["Maharana Kumbha", "Rana Sanga", "Maharana Pratap", "Rao Jodha"]);

  b("Paper-I", "Rajasthan Art & Culture", "Architecture", "Jaisalmer fort", "Medium",
    "जैसलमेर का 'सोनार किला' (सोनगढ़) मुख्यतः किस पत्थर से बना है, जिससे इसका स्वर्णिम रूप है?",
    "Jaisalmer's 'Sonar Quila' gets its golden hue from being built mainly of which stone?",
    ["पीले बलुआ पत्थर", "संगमरमर", "लाल बलुआ पत्थर", "ग्रेनाइट"],
    0,
    "जैसलमेर दुर्ग पीले बलुआ पत्थर (सोनार) से बना है, इसलिए 'सोनार किला' कहलाता है।",
    "सोनार = पीला पत्थर",
    ["Yellow sandstone", "Marble", "Red sandstone", "Granite"]);

  b("Paper-I", "Rajasthan Art & Culture", "Architecture", "Mehrangarh", "Easy",
    "मेहरानगढ़ दुर्ग किस शहर में स्थित है?",
    "Mehrangarh fort is located in which city?",
    ["जोधपुर", "बीकानेर", "उदयपुर", "जयपुर"],
    0,
    "मेहरानगढ़ दुर्ग जोधपुर में स्थित है, जिसे राव जोधा ने बनवाया।",
    "मेहरानगढ़ = जोधपुर",
    ["Jodhpur", "Bikaner", "Udaipur", "Jaipur"]);

  b("Paper-I", "Rajasthan Art & Culture", "Architecture", "Fort-city not matched", "Hard",
    "निम्न में से कौन-सा दुर्ग–शहर युग्म सुमेलित नहीं है?",
    "Which of the following fort–city pairs is NOT correctly matched?",
    ["तारागढ़ – अजमेर", "जूनागढ़ – बीकानेर", "सोनार दुर्ग – जैसलमेर", "मेहरानगढ़ – उदयपुर"],
    3,
    "मेहरानगढ़ दुर्ग जोधपुर में है, उदयपुर में नहीं; अतः यह युग्म गलत है।",
    "",
    ["Taragarh – Ajmer", "Junagarh – Bikaner", "Sonar fort – Jaisalmer", "Mehrangarh – Udaipur"]);

  b("Paper-I", "Rajasthan Art & Culture", "Saints and Lok Devta", "Ramdevji", "Medium",
    "लोकदेवता बाबा रामदेवजी का प्रमुख मेला (रामदेवरा) किस जिले में लगता है?",
    "The main fair of folk deity Baba Ramdevji (Ramdevra) is held in which district?",
    ["जैसलमेर", "बीकानेर", "नागौर", "बाड़मेर"],
    0,
    "रामदेवरा (रुणीचा) जैसलमेर जिले में है; रामदेवजी को 'रामसा पीर' भी कहते हैं।",
    "रामदेवरा = जैसलमेर",
    ["Jaisalmer", "Bikaner", "Nagaur", "Barmer"]);

  b("Paper-I", "Rajasthan Art & Culture", "Saints and Lok Devta", "Tejaji", "Medium",
    "लोकदेवता तेजाजी को मुख्यतः किस रूप में पूजा जाता है?",
    "Folk deity Tejaji is mainly worshipped in which capacity?",
    ["साँप के देवता (गोपालक)", "वर्षा के देवता", "पशु-चोरी रोकने वाले देवता", "युद्ध के देवता"],
    0,
    "तेजाजी को साँप के जहर से रक्षा करने वाले लोकदेवता माना जाता है; सर्पदंश पर पूजे जाते हैं।",
    "तेजाजी = साँप",
    ["Deity of snakes (cattle-herder)", "Rain deity", "Deity against cattle-theft", "War deity"]);

  b("Paper-I", "Rajasthan Art & Culture", "Saints and Lok Devta", "Gogaji", "Medium",
    "लोकदेवता गोगाजी को किस देवता के रूप में पूजा जाता है?",
    "Folk deity Gogaji is worshipped as the deity of what?",
    ["साँपों के देवता", "वर्षा के देवता", "गायों के देवता", "अग्नि के देवता"],
    0,
    "गोगाजी को साँपों के देवता के रूप में पूजा जाता है; गोगामेड़ी (हनुमानगढ़) प्रमुख स्थल है।",
    "गोगाजी = साँप के देवता",
    ["Deity of snakes", "Rain deity", "Deity of cows", "Fire deity"]);

  b("Paper-I", "Rajasthan Art & Culture", "Saints and Lok Devta", "Pabuji", "Medium",
    "लोकदेवता पाबूजी को मुख्यतः किन पशुओं का रक्षक माना जाता है?",
    "Folk deity Pabuji is mainly regarded as the protector of which animals?",
    ["ऊँट", "घोड़े", "गाय", "बकरी"],
    0,
    "पाबूजी को ऊँटों के रक्षक लोकदेवता माना जाता है; उनकी फड़ राजस्थान में प्रसिद्ध है।",
    "पाबूजी = ऊँट",
    ["Camels", "Horses", "Cows", "Goats"]);

  b("Paper-I", "Rajasthan Art & Culture", "Saints and Lok Devta", "Mirabai", "Easy",
    "कृष्णभक्ति के लिए प्रसिद्ध संत मीराबाई किस राजघराने से संबंधित थीं?",
    "The saint Mirabai, famous for Krishna devotion, belonged to which royal family?",
    ["मेवाड़ (चित्तौड़)", "मारवाड़", "आमेर", "बीकानेर"],
    0,
    "मीराबाई मेड़ता की राठौड़ राजकुमारी थीं और मेवाड़ के राणा (चित्तौड़) से विवाहित थीं।",
    "मीरा = मेवाड़",
    ["Mewar (Chittor)", "Marwar", "Amber", "Bikaner"]);

  b("Paper-I", "Rajasthan Art & Culture", "Saints and Lok Devta", "Jasnath", "Hard",
    "अग्नि नृत्य (आग पर नृत्य) की परंपरा किस संप्रदाय से जुड़ी है?",
    "The tradition of the fire dance (dancing on fire) is associated with which sect?",
    ["जसनाथी संप्रदाय", "दादू पंथ", "विश्नोई संप्रदाय", "नाथ संप्रदाय"],
    0,
    "अग्नि नृत्य जसनाथी संप्रदाय (बीकानेर-नागौर) से जुड़ा है, जो जसनाथजी के अनुयायी हैं।",
    "अग्नि नृत्य = जसनाथी",
    ["Jasnathi sect", "Dadu Panth", "Bishnoi sect", "Nath sect"]);

  b("Paper-I", "Rajasthan Art & Culture", "Handicrafts", "Blue pottery", "Easy",
    "'ब्लू पॉटरी' (नीली मिट्टी के बर्तन) राजस्थान के किस शहर की प्रसिद्ध हस्तकला है?",
    "'Blue Pottery' is the famous handicraft of which city of Rajasthan?",
    ["जयपुर", "जोधपुर", "उदयपुर", "बीकानेर"],
    0,
    "ब्लू पॉटरी जयपुर की प्रसिद्ध हस्तकला है, जो फारसी शैली से प्रभावित है।",
    "ब्लू पॉटरी = जयपुर",
    ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"]);

  b("Paper-I", "Rajasthan Art & Culture", "Handicrafts", "Thewa", "Hard",
    "काँच पर सोने की महीन कारीगरी वाली 'थेवा कला' राजस्थान के किस स्थान की प्रसिद्ध है?",
    "'Thewa art', gold work on glass, is famous from which place in Rajasthan?",
    ["प्रतापगढ़", "नाथद्वारा", "जयपुर", "बीकानेर"],
    0,
    "थेवा कला प्रतापगढ़ की प्रसिद्ध है, जिसमें काँच पर सोने का बारीक काम किया जाता है।",
    "थेवा = प्रतापगढ़",
    ["Pratapgarh", "Nathdwara", "Jaipur", "Bikaner"]);

  b("Paper-I", "Rajasthan Art & Culture", "Handicrafts", "Molela", "Hard",
    "मिट्टी की टेराकोटा मूर्तियों (देवताओं की पट्टिकाओं) के लिए प्रसिद्ध 'मोलेला' गाँव किस जिले में है?",
    "'Molela' village, famous for terracotta clay plaques of deities, is in which district?",
    ["राजसमंद", "उदयपुर", "चित्तौड़गढ़", "भीलवाड़ा"],
    0,
    "मोलेला गाँव राजसमंद जिले में है, जो टेराकोटा मूर्तिकला के लिए प्रसिद्ध है।",
    "",
    ["Rajsamand", "Udaipur", "Chittorgarh", "Bhilwara"]);

  b("Paper-I", "Rajasthan Art & Culture", "Handicrafts", "Bandhej", "Medium",
    "'बंधेज' (टाई-एंड-डाई) कला में मुख्यतः किस पर रंगाई की जाती है?",
    "The 'Bandhej' (tie-and-dye) art mainly involves dyeing of what?",
    ["कपड़े (वस्त्र)", "काँच", "धातु", "मिट्टी"],
    0,
    "बंधेज वस्त्रों पर गाँठ बाँधकर रंगाई की टाई-एंड-डाई कला है; जयपुर-जोधपुर में प्रसिद्ध।",
    "बंधेज = बाँधना (कपड़ा)",
    ["Cloth (textile)", "Glass", "Metal", "Clay"]);

  /* ================= Rajasthan History ================= */

  b("Paper-I", "Rajasthan History", "Ancient history", "Kalibangan", "Medium",
    "सिंधु घाटी सभ्यता का स्थल 'कालीबंगा' राजस्थान के किस जिले में स्थित है?",
    "The Indus Valley site 'Kalibangan' is located in which district of Rajasthan?",
    ["हनुमानगढ़", "गंगानगर", "बीकानेर", "चूरू"],
    0,
    "कालीबंगा हनुमानगढ़ जिले में घग्घर नदी के किनारे स्थित सिंधु सभ्यता का स्थल है।",
    "कालीबंगा = हनुमानगढ़",
    ["Hanumangarh", "Ganganagar", "Bikaner", "Churu"]);

  b("Paper-I", "Rajasthan History", "Ancient history", "Ahar Banas", "Hard",
    "'आहड़ सभ्यता' (ताम्रवती नगरी) राजस्थान के किस शहर के निकट विकसित हुई?",
    "The 'Ahar civilization' (Tamravati nagari) developed near which city of Rajasthan?",
    ["उदयपुर", "जयपुर", "अजमेर", "कोटा"],
    0,
    "आहड़ (ताम्रवती) सभ्यता उदयपुर के निकट आहड़ नदी के किनारे विकसित हुई; ताम्र संस्कृति।",
    "आहड़ = उदयपुर",
    ["Udaipur", "Jaipur", "Ajmer", "Kota"]);

  b("Paper-I", "Rajasthan History", "Major dynasties", "Guhil founder", "Medium",
    "मेवाड़ के गुहिल वंश का संस्थापक किसे माना जाता है?",
    "Who is considered the founder of the Guhila dynasty of Mewar?",
    ["गुहादित्य (गुहिल)", "बप्पा रावल", "राणा हम्मीर", "राणा कुम्भा"],
    0,
    "मेवाड़ के गुहिल वंश का संस्थापक गुहादित्य (गुहिल) को माना जाता है।",
    "",
    ["Guhaditya (Guhil)", "Bappa Rawal", "Rana Hammir", "Rana Kumbha"]);

  b("Paper-I", "Rajasthan History", "Major dynasties", "Chauhan Ajmer", "Medium",
    "अजमेर नगर की स्थापना तथा 'तारागढ़' दुर्ग किस चौहान शासक से संबंधित है?",
    "The founding of Ajmer and the Taragarh fort is associated with which Chauhan ruler?",
    ["अजयराज (अजयपाल)", "पृथ्वीराज तृतीय", "विग्रहराज चतुर्थ", "अर्णोराज"],
    0,
    "अजमेर की स्थापना चौहान शासक अजयराज ने की; तारागढ़ दुर्ग इसी काल से जुड़ा है।",
    "अजयराज = अजमेर",
    ["Ajayraj (Ajaypal)", "Prithviraj III", "Vigraharaj IV", "Arnoraj"]);

  b("Paper-I", "Rajasthan History", "Important battles", "Tarain", "Medium",
    "पृथ्वीराज चौहान तृतीय ने मुहम्मद गौरी को किस प्रथम युद्ध (1191) में पराजित किया था?",
    "In which first battle (1191) did Prithviraj Chauhan III defeat Muhammad Ghori?",
    ["तराइन का प्रथम युद्ध", "तराइन का द्वितीय युद्ध", "चंदावर का युद्ध", "खानवा का युद्ध"],
    0,
    "तराइन के प्रथम युद्ध (1191) में पृथ्वीराज ने गौरी को हराया; 1192 में द्वितीय युद्ध में हार गए।",
    "1191 प्रथम = जीत, 1192 द्वितीय = हार",
    ["First Battle of Tarain", "Second Battle of Tarain", "Battle of Chandawar", "Battle of Khanwa"]);

  b("Paper-I", "Rajasthan History", "Important battles", "Tarain II", "Easy",
    "तराइन के द्वितीय युद्ध (1192) का परिणाम क्या था?",
    "What was the outcome of the Second Battle of Tarain (1192)?",
    ["पृथ्वीराज चौहान की पराजय", "पृथ्वीराज चौहान की विजय", "युद्ध अनिर्णीत रहा", "गौरी की पराजय"],
    0,
    "तराइन के द्वितीय युद्ध (1192) में मुहम्मद गौरी ने पृथ्वीराज चौहान को पराजित किया।",
    "",
    ["Prithviraj Chauhan was defeated", "Prithviraj Chauhan won", "It was indecisive", "Ghori was defeated"]);

  b("Paper-I", "Rajasthan History", "Major dynasties", "Rana Kumbha", "Medium",
    "चित्तौड़ का 'विजय स्तंभ' (कीर्ति स्तंभ) किस शासक ने बनवाया था?",
    "The 'Vijay Stambh' (Tower of Victory) at Chittor was built by which ruler?",
    ["महाराणा कुम्भा", "राणा सांगा", "राणा हम्मीर", "महाराणा प्रताप"],
    0,
    "महाराणा कुम्भा ने मालवा के महमूद खिलजी पर विजय के उपलक्ष्य में विजय स्तंभ बनवाया।",
    "विजय स्तंभ = कुम्भा",
    ["Maharana Kumbha", "Rana Sanga", "Rana Hammir", "Maharana Pratap"]);

  b("Paper-I", "Rajasthan History", "Important battles", "Khanwa", "Medium",
    "1527 ई. में खानवा का युद्ध किन दो शासकों के बीच हुआ?",
    "The Battle of Khanwa (1527) was fought between which two rulers?",
    ["राणा सांगा व बाबर", "राणा सांगा व इब्राहिम लोदी", "महाराणा प्रताप व अकबर", "राणा कुम्भा व महमूद खिलजी"],
    0,
    "खानवा का युद्ध (1527) मेवाड़ के राणा सांगा और बाबर के बीच हुआ, जिसमें बाबर विजयी रहा।",
    "खानवा = सांगा vs बाबर",
    ["Rana Sanga & Babur", "Rana Sanga & Ibrahim Lodi", "Maharana Pratap & Akbar", "Rana Kumbha & Mahmud Khilji"]);

  b("Paper-I", "Rajasthan History", "Important battles", "Haldighati year", "Easy",
    "हल्दीघाटी का प्रसिद्ध युद्ध किस वर्ष हुआ था?",
    "In which year was the famous Battle of Haldighati fought?",
    ["1576 ई.", "1526 ई.", "1600 ई.", "1556 ई."],
    0,
    "हल्दीघाटी का युद्ध 1576 ई. में महाराणा प्रताप और अकबर की सेना (मानसिंह) के बीच हुआ।",
    "हल्दीघाटी = 1576",
    ["1576 AD", "1526 AD", "1600 AD", "1556 AD"]);

  b("Paper-I", "Rajasthan History", "Important battles", "Haldighati commander", "Medium",
    "हल्दीघाटी युद्ध (1576) में अकबर की मुगल सेना का प्रमुख सेनापति कौन था?",
    "Who was the chief commander of Akbar's Mughal army in the Battle of Haldighati (1576)?",
    ["मानसिंह प्रथम (आमेर)", "मिर्जा राजा जयसिंह", "अब्दुर रहीम खानखाना", "टोडरमल"],
    0,
    "हल्दीघाटी में मुगल सेना का नेतृत्व आमेर के राजा मानसिंह प्रथम ने किया था।",
    "",
    ["Man Singh I (Amber)", "Mirza Raja Jai Singh", "Abdur Rahim Khan-i-Khanan", "Todar Mal"]);

  b("Paper-I", "Rajasthan History", "Medieval history", "Chetak", "Easy",
    "हल्दीघाटी युद्ध में महाराणा प्रताप के प्रसिद्ध घोड़े का नाम क्या था?",
    "What was the name of Maharana Pratap's famous horse in the Battle of Haldighati?",
    ["चेतक", "बादल", "नटवर", "हंसराज"],
    0,
    "महाराणा प्रताप के प्रसिद्ध घोड़े का नाम चेतक था, जिसने युद्ध में उन्हें बचाया।",
    "प्रताप = चेतक",
    ["Chetak", "Badal", "Natwar", "Hansraj"]);

  b("Paper-I", "Rajasthan History", "Medieval history", "Amar Singh treaty", "Hard",
    "मेवाड़ और मुगलों के बीच 1615 ई. की प्रसिद्ध संधि किस राणा और किस मुगल बादशाह के बीच हुई?",
    "The famous 1615 AD treaty between Mewar and the Mughals was signed by which Rana and which Mughal emperor?",
    ["अमर सिंह प्रथम व जहाँगीर", "महाराणा प्रताप व अकबर", "राणा सांगा व बाबर", "राजसिंह व औरंगजेब"],
    0,
    "1615 में मेवाड़ के अमर सिंह प्रथम और मुगल बादशाह जहाँगीर के बीच संधि हुई।",
    "1615 = अमर सिंह + जहाँगीर",
    ["Amar Singh I & Jahangir", "Maharana Pratap & Akbar", "Rana Sanga & Babur", "Raj Singh & Aurangzeb"]);

  b("Paper-I", "Rajasthan History", "Major dynasties", "Jaipur founder", "Easy",
    "जयपुर नगर की स्थापना (1727 ई.) किस शासक ने की थी?",
    "Who founded the city of Jaipur (1727 AD)?",
    ["सवाई जयसिंह द्वितीय", "मिर्जा राजा जयसिंह", "मानसिंह प्रथम", "राव बीका"],
    0,
    "जयपुर की स्थापना 1727 में आमेर के शासक सवाई जयसिंह द्वितीय ने की।",
    "जयपुर = सवाई जयसिंह",
    ["Sawai Jai Singh II", "Mirza Raja Jai Singh", "Man Singh I", "Rao Bika"]);

  b("Paper-I", "Rajasthan History", "Major dynasties", "Jantar Mantar", "Medium",
    "जयपुर, दिल्ली आदि स्थानों पर 'जंतर-मंतर' वेधशालाएँ किस शासक ने बनवाईं?",
    "Who built the 'Jantar Mantar' observatories at Jaipur, Delhi, etc.?",
    ["सवाई जयसिंह द्वितीय", "महाराजा मानसिंह", "महाराणा प्रताप", "राव जोधा"],
    0,
    "सवाई जयसिंह द्वितीय ने जयपुर, दिल्ली, उज्जैन आदि में जंतर-मंतर वेधशालाएँ बनवाईं।",
    "",
    ["Sawai Jai Singh II", "Maharaja Man Singh", "Maharana Pratap", "Rao Jodha"]);

  b("Paper-I", "Rajasthan History", "Major dynasties", "Bikaner founder", "Medium",
    "बीकानेर नगर की स्थापना किस राठौड़ शासक ने की थी?",
    "Which Rathore ruler founded the city of Bikaner?",
    ["राव बीका", "राव जोधा", "राव मालदेव", "राव चंद्रसेन"],
    0,
    "बीकानेर की स्थापना 1488 ई. में राव बीका (राव जोधा के पुत्र) ने की।",
    "बीकानेर = बीका",
    ["Rao Bika", "Rao Jodha", "Rao Maldeo", "Rao Chandrasen"]);

  b("Paper-I", "Rajasthan History", "Major dynasties", "Founder-city not matched", "Hard",
    "निम्न में से कौन-सा संस्थापक–नगर युग्म सुमेलित नहीं है?",
    "Which of the following founder–city pairs is NOT correctly matched?",
    ["राव जोधा – जोधपुर", "राव बीका – बीकानेर", "सवाई जयसिंह – जयपुर", "राव मालदेव – उदयपुर"],
    3,
    "उदयपुर की स्थापना महाराणा उदयसिंह ने की, राव मालदेव ने नहीं; अतः यह युग्म गलत है।",
    "",
    ["Rao Jodha – Jodhpur", "Rao Bika – Bikaner", "Sawai Jai Singh – Jaipur", "Rao Maldeo – Udaipur"]);

  b("Paper-I", "Rajasthan History", "Medieval history", "Udaipur founder", "Medium",
    "उदयपुर नगर की स्थापना किस शासक ने की थी?",
    "Who founded the city of Udaipur?",
    ["महाराणा उदयसिंह द्वितीय", "महाराणा प्रताप", "राणा सांगा", "महाराणा कुम्भा"],
    0,
    "उदयपुर की स्थापना महाराणा उदयसिंह द्वितीय ने की, जिन्होंने चित्तौड़ से राजधानी स्थानांतरित की।",
    "उदयपुर = उदयसिंह",
    ["Maharana Udai Singh II", "Maharana Pratap", "Rana Sanga", "Maharana Kumbha"]);

  b("Paper-I", "Rajasthan History", "Freedom movement", "1857 Auwa", "Hard",
    "1857 के विद्रोह में मारवाड़ का प्रमुख विद्रोही केंद्र 'आउवा' किस ठाकुर के नेतृत्व में सक्रिय था?",
    "In the 1857 revolt, the Marwar centre 'Auwa' was active under which Thakur's leadership?",
    ["ठाकुर कुशाल सिंह", "तांत्या टोपे", "राव गोपाल सिंह", "जोधा जी"],
    0,
    "आउवा (पाली) का विद्रोह ठाकुर कुशाल सिंह के नेतृत्व में हुआ था।",
    "आउवा = कुशाल सिंह",
    ["Thakur Kushal Singh", "Tantya Tope", "Rao Gopal Singh", "Jodha Ji"]);

  b("Paper-I", "Rajasthan History", "Freedom movement", "1857 start Rajasthan", "Medium",
    "राजस्थान में 1857 के विद्रोह की शुरुआत सर्वप्रथम किस छावनी से हुई मानी जाती है?",
    "In Rajasthan, the 1857 revolt is considered to have first begun at which cantonment?",
    ["नसीराबाद (अजमेर)", "नीमच", "एरिनपुरा", "देवली"],
    0,
    "राजस्थान में 1857 विद्रोह की शुरुआत 28 मई 1857 को नसीराबाद छावनी (अजमेर) से मानी जाती है।",
    "शुरुआत = नसीराबाद",
    ["Nasirabad (Ajmer)", "Neemuch", "Erinpura", "Deoli"]);

  b("Paper-I", "Rajasthan History", "Freedom movement", "AGG 1857", "Hard",
    "1857 के विद्रोह के समय राजपूताना का ए.जी.जी. (गवर्नर जनरल का एजेंट) कौन था?",
    "Who was the A.G.G. (Agent to the Governor-General) of Rajputana during the 1857 revolt?",
    ["जॉर्ज पैट्रिक लॉरेंस", "टॉड", "मैटकाफ", "कर्नल मॉक मेसन"],
    0,
    "1857 के विद्रोह के समय राजपूताना के ए.जी.जी. जॉर्ज पैट्रिक लॉरेंस थे।",
    "",
    ["George Patrick Lawrence", "James Tod", "Metcalfe", "Col. Monck Mason"]);

  b("Paper-I", "Rajasthan History", "Freedom movement", "Bijolia", "Hard",
    "राजस्थान का प्रसिद्ध किसान आंदोलन 'बिजोलिया आंदोलन' किस रियासत में हुआ?",
    "The famous peasant movement 'Bijolia Andolan' of Rajasthan took place in which princely state?",
    ["मेवाड़ (उदयपुर)", "मारवाड़", "बीकानेर", "कोटा"],
    0,
    "बिजोलिया किसान आंदोलन मेवाड़ रियासत में हुआ; विजयसिंह पथिक इसके प्रमुख नेता थे।",
    "बिजोलिया = मेवाड़ (पथिक)",
    ["Mewar (Udaipur)", "Marwar", "Bikaner", "Kota"]);

  b("Paper-I", "Rajasthan History", "Freedom movement", "Praja Mandal", "Medium",
    "राजस्थान में रियासतकालीन 'प्रजामंडल आंदोलन' का मुख्य उद्देश्य क्या था?",
    "What was the main aim of the princely-era 'Praja Mandal movement' in Rajasthan?",
    ["रियासतों में उत्तरदायी शासन की माँग", "जमींदारी प्रथा को बढ़ावा", "विदेशी व्यापार बढ़ाना", "सैन्य विस्तार"],
    0,
    "प्रजामंडल आंदोलनों का उद्देश्य रियासतों में उत्तरदायी (लोकतांत्रिक) शासन स्थापित करना था।",
    "",
    ["Demand for responsible government in states", "Promoting zamindari", "Increasing foreign trade", "Military expansion"]);

  b("Paper-I", "Rajasthan History", "Modern history", "Integration first stage", "Hard",
    "राजस्थान के एकीकरण की प्रक्रिया का शुभारंभ (प्रथम चरण) किस मत्स्य संघ के गठन (18 मार्च 1948) से माना जाता है?",
    "The integration of Rajasthan is considered to have begun (first stage) with the formation of which union on 18 March 1948?",
    ["मत्स्य संघ", "संयुक्त राजस्थान", "वृहत्तर राजस्थान", "राजस्थान संघ"],
    0,
    "एकीकरण का प्रथम चरण 18 मार्च 1948 को मत्स्य संघ के गठन से आरंभ हुआ (अलवर, भरतपुर, धौलपुर, करौली)।",
    "प्रथम = मत्स्य संघ",
    ["Matsya Union", "United Rajasthan", "Greater Rajasthan", "Rajasthan Union"]);

  b("Paper-I", "Rajasthan History", "Modern history", "Integration completion", "Hard",
    "राजस्थान का एकीकरण अंतिम रूप से किस वर्ष पूर्ण हुआ (वृहत्तर राजस्थान के बाद के अंतिम चरण सहित)?",
    "In which year was the integration of Rajasthan finally completed (including the final stage after Greater Rajasthan)?",
    ["1956 ई.", "1948 ई.", "1950 ई.", "1949 ई."],
    0,
    "राज्य पुनर्गठन के बाद 1 नवंबर 1956 को अजमेर आदि के विलय से राजस्थान का एकीकरण पूर्ण हुआ।",
    "एकीकरण पूर्ण = 1956",
    ["1956 AD", "1948 AD", "1950 AD", "1949 AD"]);

  b("Paper-I", "Rajasthan History", "Modern history", "First CM", "Medium",
    "एकीकृत राजस्थान (वृहत्तर राजस्थान, 1949) के प्रथम मुख्यमंत्री कौन थे?",
    "Who was the first Chief Minister of united (Greater) Rajasthan formed in 1949?",
    ["हीरालाल शास्त्री", "जयनारायण व्यास", "टीकाराम पालीवाल", "मोहनलाल सुखाड़िया"],
    0,
    "वृहत्तर राजस्थान (30 मार्च 1949) के प्रथम मुख्यमंत्री हीरालाल शास्त्री थे।",
    "प्रथम CM = हीरालाल शास्त्री",
    ["Hiralal Shastri", "Jai Narayan Vyas", "Tikaram Paliwal", "Mohanlal Sukhadia"]);

  b("Paper-I", "Rajasthan History", "Medieval history", "Panna Dhai", "Medium",
    "मेवाड़ की स्वामिभक्त धाय 'पन्नाधाय' ने किस राजकुमार की रक्षा हेतु अपने पुत्र का बलिदान दिया?",
    "The loyal nurse 'Panna Dhai' of Mewar sacrificed her son to protect which prince?",
    ["उदयसिंह", "राणा सांगा", "महाराणा प्रताप", "राणा हम्मीर"],
    0,
    "पन्नाधाय ने बनवीर से उदयसिंह की रक्षा हेतु अपने पुत्र चंदन का बलिदान दिया।",
    "पन्नाधाय = उदयसिंह",
    ["Udai Singh", "Rana Sanga", "Maharana Pratap", "Rana Hammir"]);

  b("Paper-I", "Rajasthan History", "Freedom movement", "Vijay Singh Pathik", "Medium",
    "बिजोलिया किसान आंदोलन के प्रमुख नेता कौन थे?",
    "Who was the principal leader of the Bijolia peasant movement?",
    ["विजयसिंह पथिक", "जयनारायण व्यास", "अर्जुनलाल सेठी", "माणिक्यलाल वर्मा"],
    0,
    "बिजोलिया किसान आंदोलन के प्रमुख नेता विजयसिंह पथिक थे।",
    "",
    ["Vijay Singh Pathik", "Jai Narayan Vyas", "Arjun Lal Sethi", "Manikya Lal Verma"]);

  b("Paper-I", "Rajasthan History", "Freedom movement", "1857 Kota", "Hard",
    "1857 के विद्रोह में कोटा में विद्रोहियों का नेतृत्व मुख्यतः किसने किया?",
    "In the 1857 revolt, who mainly led the rebels at Kota?",
    ["जयदयाल व मेहराब खाँ", "ठाकुर कुशाल सिंह", "तांत्या टोपे", "राव गोपाल सिंह"],
    0,
    "कोटा के विद्रोह में जयदयाल और मेहराब खाँ ने प्रमुख नेतृत्व किया।",
    "",
    ["Jaidayal & Mehrab Khan", "Thakur Kushal Singh", "Tantya Tope", "Rao Gopal Singh"]);

  b("Paper-I", "Rajasthan History", "Major dynasties", "Rana Sanga battles", "Medium",
    "मेवाड़ के किस शासक को उसके शरीर पर लगे अनेक घावों के कारण 'सैनिकों का भग्नावशेष' कहा जाता है?",
    "Which Mewar ruler is called a 'fragment of a soldier' due to numerous wounds on his body?",
    ["राणा सांगा (संग्राम सिंह)", "महाराणा प्रताप", "महाराणा कुम्भा", "राणा हम्मीर"],
    0,
    "राणा सांगा के शरीर पर अनेक युद्धों के घाव थे, इसलिए उन्हें 'सैनिकों का भग्नावशेष' कहा जाता है।",
    "सांगा = अनेक घाव",
    ["Rana Sanga (Sangram Singh)", "Maharana Pratap", "Maharana Kumbha", "Rana Hammir"]);

  b("Paper-I", "Rajasthan History", "Ancient history", "Bairath", "Hard",
    "मौर्यकालीन बौद्ध अवशेष तथा अशोक के शिलालेख किस स्थान (विराटनगर) से प्राप्त हुए हैं?",
    "Mauryan Buddhist remains and Ashoka's inscription have been found at which site (Viratnagar)?",
    ["बैराठ (जयपुर)", "कालीबंगा", "आहड़", "गणेश्वर"],
    0,
    "बैराठ (विराटनगर, जयपुर) से मौर्यकालीन बौद्ध स्तूप व अशोक के शिलालेख प्राप्त हुए हैं।",
    "बैराठ = अशोक शिलालेख",
    ["Bairath (Jaipur)", "Kalibangan", "Ahar", "Ganeshwar"]);

  b("Paper-I", "Rajasthan History", "Medieval history", "Rani Padmini", "Easy",
    "अलाउद्दीन खिलजी द्वारा 1303 ई. में चित्तौड़ पर आक्रमण किस रानी की कथा से जुड़ा है?",
    "Alauddin Khilji's 1303 AD attack on Chittor is associated with the story of which queen?",
    ["रानी पद्मिनी", "रानी कर्णावती", "रानी दुर्गावती", "रानी पन्ना"],
    0,
    "1303 में अलाउद्दीन खिलजी के चित्तौड़ आक्रमण की कथा रानी पद्मिनी और जौहर से जुड़ी है।",
    "1303 = पद्मिनी",
    ["Rani Padmini", "Rani Karnavati", "Rani Durgavati", "Rani Panna"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
