/* RSSB BCI 2026 - Mega bank part 09: Rajasthan Art & Culture + Rajasthan History (set 2) */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG09";
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

  // ---------- Rajasthan Art & Culture (~25) ----------

  b("Paper-I", "Rajasthan Art & Culture", "Folk dances", "Gair", "Easy",
    "गैर नृत्य मुख्य रूप से किस समुदाय/क्षेत्र से संबंधित है?",
    "The Gair dance is mainly associated with which community/region?",
    ["भील पुरुष (मेवाड़/मारवाड़)", "मीणा महिलाएँ", "कालबेलिया समुदाय", "गरासिया जनजाति"],
    0,
    "गैर होली के अवसर पर भील पुरुषों द्वारा किया जाने वाला वृत्ताकार नृत्य है।",
    "गैर = भील पुरुषों का डंडा नृत्य।",
    ["Bhil men (Mewar/Marwar)", "Meena women", "Kalbelia community", "Garasia tribe"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk dances", "Terah Taali", "Medium",
    "तेरह ताली नृत्य में नर्तकियाँ शरीर पर कितने मंजीरे बाँधकर नृत्य करती हैं?",
    "In the Terah Taali dance, how many manjeeras (cymbals) are tied on the body?",
    ["तेरह", "ग्यारह", "नौ", "सात"],
    0,
    "तेरह ताली में शरीर के विभिन्न अंगों पर तेरह मंजीरे बाँधे जाते हैं; यह कामड़ जाति से जुड़ा है।",
    "नाम में ही 'तेरह' = 13 मंजीरे।",
    ["Thirteen", "Eleven", "Nine", "Seven"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk dances", "Terah Taali - deity", "Medium",
    "तेरह ताली नृत्य किस लोक देवता की आराधना में किया जाता है?",
    "The Terah Taali dance is performed in devotion to which folk deity?",
    ["बाबा रामदेव", "गोगाजी", "पाबूजी", "तेजाजी"],
    0,
    "कामड़ जाति द्वारा बाबा रामदेव की आराधना में तेरह ताली नृत्य किया जाता है।",
    "कामड़ + बाबा रामदेव = तेरह ताली।",
    ["Baba Ramdev", "Gogaji", "Pabuji", "Tejaji"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk dances", "Bhavai", "Medium",
    "भवाई नृत्य की प्रमुख विशेषता क्या है?",
    "What is the main feature of the Bhavai dance?",
    ["सिर पर कई मटके/घड़े रखकर संतुलन", "अग्नि पर नृत्य", "तलवारों से युद्ध अभिनय", "मुखौटे पहनकर नृत्य"],
    0,
    "भवाई में नर्तकी सिर पर सात-आठ या अधिक मटके रखकर संतुलन बनाते हुए नृत्य करती है।",
    "भवाई = सिर पर मटकों की मीनार।",
    ["Balancing several pots on the head", "Dancing on fire", "Sword-fight mime", "Dancing wearing masks"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk dances", "Kachhi Ghodi", "Easy",
    "कच्छी घोड़ी नृत्य में नर्तक किसका प्रयोग करते हैं?",
    "In the Kachhi Ghodi dance, what do the dancers use?",
    ["बाँस से बनी नकली घोड़ी", "वास्तविक घोड़े", "मोर पंख", "मिट्टी के मटके"],
    0,
    "कच्छी घोड़ी में पुरुष बाँस-कागज़ की बनी नकली घोड़ी पहनकर तलवारबाज़ी करते हुए नृत्य करते हैं।",
    "कच्छी घोड़ी = डमी घोड़ी नृत्य।",
    ["A dummy horse made of bamboo", "Real horses", "Peacock feathers", "Clay pots"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk music", "Kamayacha", "Medium",
    "कमायचा वाद्य यंत्र मुख्य रूप से किस समुदाय द्वारा बजाया जाता है?",
    "The Kamayacha instrument is mainly played by which community?",
    ["मांगणियार", "लंगा", "भवाई", "कालबेलिया"],
    0,
    "कमायचा एक तंतु वाद्य है जिसे जैसलमेर-बाड़मेर के मांगणियार कलाकार बजाते हैं।",
    "मांगणियार = कमायचा।",
    ["Manganiyar", "Langa", "Bhavai", "Kalbelia"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk music", "Algoza", "Easy",
    "अलगोजा किस प्रकार का वाद्य यंत्र है?",
    "The Algoza is what type of musical instrument?",
    ["सुषिर (फूँक) वाद्य", "तंतु (तार) वाद्य", "अवनद्ध (चर्म) वाद्य", "घन (धातु) वाद्य"],
    0,
    "अलगोजा दो बाँसुरियों को साथ बजाया जाने वाला सुषिर (वायु) वाद्य है।",
    "अलगोजा = जोड़ी बाँसुरी।",
    ["Wind (blown) instrument", "String instrument", "Membrane/percussion instrument", "Metal idiophone"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk music", "Morchang", "Medium",
    "मोरचंग वाद्य के संदर्भ में सही कथन है —",
    "Regarding the Morchang instrument, the correct statement is —",
    ["यह मुँह में रखकर बजाया जाने वाला धातु का घन वाद्य है", "यह चमड़े से मढ़ा ताल वाद्य है", "यह तार वाला वाद्य है", "यह फूँक कर बजाई जाने वाली नली है"],
    0,
    "मोरचंग लोहे का छोटा घन वाद्य है जिसे दाँतों के बीच रखकर उँगली से कंपन देकर बजाते हैं।",
    "मोरचंग = मुँह से बजने वाला धातु वाद्य।",
    ["A metal idiophone played by holding in the mouth", "A leather-covered percussion drum", "A stringed instrument", "A blown pipe"]);

  b("Paper-I", "Rajasthan Art & Culture", "Paintings", "Kishangarh - Bani Thani", "Medium",
    "प्रसिद्ध 'बनी-ठनी' चित्रशैली किस चित्रकला विद्यालय की देन है?",
    "The famous 'Bani-Thani' painting belongs to which school of painting?",
    ["किशनगढ़ शैली", "बूंदी शैली", "मेवाड़ शैली", "नाथद्वारा शैली"],
    0,
    "बनी-ठनी किशनगढ़ शैली की विशिष्ट कृति है; इसे 'भारतीय मोनालिसा' कहा जाता है।",
    "बनी-ठनी = किशनगढ़ = भारतीय मोनालिसा।",
    ["Kishangarh school", "Bundi school", "Mewar school", "Nathdwara school"]);

  b("Paper-I", "Rajasthan Art & Culture", "Paintings", "Kishangarh painter", "Hard",
    "किशनगढ़ शैली के 'बनी-ठनी' चित्र का प्रमुख चित्रकार कौन माना जाता है?",
    "Who is regarded as the chief painter of the Kishangarh 'Bani-Thani' painting?",
    ["निहालचंद", "साहिबदीन", "मनोहर", "रामगोपाल विजयवर्गीय"],
    0,
    "राजा सावंत सिंह (नागरीदास) के काल में चित्रकार निहालचंद ने बनी-ठनी का सृजन किया।",
    "निहालचंद = बनी-ठनी का चित्रकार।",
    ["Nihal Chand", "Sahibdin", "Manohar", "Ramgopal Vijayvargiya"]);

  b("Paper-I", "Rajasthan Art & Culture", "Paintings", "Pichwai - Nathdwara", "Medium",
    "पिछवाई चित्रकला मुख्यतः किस स्थान से संबंधित है और किस देवता को समर्पित है?",
    "Pichwai painting is mainly associated with which place and dedicated to which deity?",
    ["नाथद्वारा — श्रीनाथजी", "बूंदी — कृष्ण रासलीला", "जयपुर — गणगौर", "उदयपुर — एकलिंगजी"],
    0,
    "नाथद्वारा शैली की पिछवाई चित्रकला श्रीनाथजी (कृष्ण) की पृष्ठभूमि में लगाए जाने वाले कपड़े पर बनती है।",
    "पिछवाई = नाथद्वारा = श्रीनाथजी।",
    ["Nathdwara — Shrinathji", "Bundi — Krishna Raaslila", "Jaipur — Gangaur", "Udaipur — Eklingji"]);

  b("Paper-I", "Rajasthan Art & Culture", "Paintings", "Bundi school theme", "Medium",
    "बूंदी चित्रशैली अपने किस विषय के चित्रण के लिए विशेष प्रसिद्ध है?",
    "The Bundi school of painting is especially famous for depicting which theme?",
    ["वर्षा-ऋतु, हरियाली एवं शिकार दृश्य", "युद्ध एवं दरबार", "समुद्री दृश्य", "मरुस्थल के दृश्य"],
    0,
    "बूंदी शैली प्रकृति, वर्षा-ऋतु, हरे-भरे वृक्ष तथा शिकार दृश्यों के सुंदर चित्रण के लिए जानी जाती है।",
    "बूंदी = प्रकृति व वर्षा।",
    ["Monsoon, greenery and hunting scenes", "War and court scenes", "Marine scenes", "Desert scenes"]);

  b("Paper-I", "Rajasthan Art & Culture", "Architecture", "Vijay Stambh", "Medium",
    "चित्तौड़गढ़ का विजय स्तंभ किसने और किस विजय के उपलक्ष्य में बनवाया?",
    "Who built the Vijay Stambh at Chittorgarh, and to mark which victory?",
    ["राणा कुम्भा — मालवा के महमूद खिलजी पर विजय", "राणा सांगा — खानवा विजय", "राणा प्रताप — हल्दीघाटी", "राणा रतन सिंह — अलाउद्दीन पर विजय"],
    0,
    "राणा कुम्भा ने 1440-48 के बीच मालवा के सुल्तान महमूद खिलजी पर विजय के उपलक्ष्य में विजय स्तंभ बनवाया।",
    "विजय स्तंभ = कुम्भा + महमूद खिलजी।",
    ["Rana Kumbha — victory over Mahmud Khilji of Malwa", "Rana Sanga — Khanwa victory", "Rana Pratap — Haldighati", "Rana Ratan Singh — victory over Alauddin"]);

  b("Paper-I", "Rajasthan Art & Culture", "Architecture", "Kirti Stambh", "Hard",
    "चित्तौड़गढ़ का कीर्ति स्तंभ किस धर्म से संबंधित है?",
    "The Kirti Stambh at Chittorgarh is associated with which religion?",
    ["जैन धर्म (आदिनाथ को समर्पित)", "बौद्ध धर्म", "शैव धर्म", "वैष्णव धर्म"],
    0,
    "कीर्ति स्तंभ 12वीं सदी का जैन स्तंभ है जो प्रथम तीर्थंकर आदिनाथ (ऋषभदेव) को समर्पित है।",
    "कीर्ति स्तंभ = जैन = आदिनाथ।",
    ["Jainism (dedicated to Adinath)", "Buddhism", "Shaivism", "Vaishnavism"]);

  b("Paper-I", "Rajasthan Art & Culture", "Architecture", "Gagron fort", "Medium",
    "गागरोन दुर्ग किस श्रेणी का दुर्ग है?",
    "Gagron fort belongs to which category of forts?",
    ["जल दुर्ग", "गिरि दुर्ग", "धान्वन (मरु) दुर्ग", "वन दुर्ग"],
    0,
    "झालावाड़ स्थित गागरोन तीन ओर नदियों से घिरा जल दुर्ग है; यह यूनेस्को विश्व धरोहर में शामिल है।",
    "गागरोन = जल दुर्ग (झालावाड़)।",
    ["Water fort (Jal durg)", "Hill fort", "Desert fort", "Forest fort"]);

  b("Paper-I", "Rajasthan Art & Culture", "Architecture", "Junagarh fort", "Medium",
    "बीकानेर का जूनागढ़ दुर्ग किसने बनवाया था?",
    "Who built the Junagarh fort of Bikaner?",
    ["राय सिंह", "राव बीका", "अनूप सिंह", "जोरावर सिंह"],
    0,
    "बीकानेर के राजा राय सिंह ने 1589-94 में जूनागढ़ दुर्ग का निर्माण करवाया; इसे पहले 'चिंतामणि दुर्ग' कहते थे।",
    "जूनागढ़ = राय सिंह (बीकानेर)।",
    ["Rai Singh", "Rao Bika", "Anup Singh", "Zorawar Singh"]);

  b("Paper-I", "Rajasthan Art & Culture", "Architecture", "Achalgarh", "Hard",
    "अचलगढ़ दुर्ग किस क्षेत्र में स्थित है और किसने इसका पुनर्निर्माण करवाया?",
    "In which region is Achalgarh fort located, and who reconstructed it?",
    ["माउंट आबू — राणा कुम्भा", "रणथंभौर — हम्मीर", "जालौर — कान्हड़देव", "मेहरानगढ़ — राव जोधा"],
    0,
    "सिरोही के माउंट आबू क्षेत्र में स्थित अचलगढ़ दुर्ग का पुनर्निर्माण राणा कुम्भा ने करवाया था।",
    "अचलगढ़ = आबू + कुम्भा।",
    ["Mount Abu — Rana Kumbha", "Ranthambhore — Hammir", "Jalore — Kanhadadev", "Mehrangarh — Rao Jodha"]);

  b("Paper-I", "Rajasthan Art & Culture", "Saints and Lok Devta", "Devnarayan", "Medium",
    "लोक देवता देवनारायण जी किस समुदाय के आराध्य देव माने जाते हैं?",
    "Folk deity Devnarayan ji is revered mainly by which community?",
    ["गुर्जर समुदाय", "जाट समुदाय", "मीणा समुदाय", "भील समुदाय"],
    0,
    "देवनारायण जी गुर्जर समुदाय के प्रमुख लोक देवता हैं; उनकी फड़ का वाचन जंतर वाद्य के साथ होता है।",
    "देवनारायण = गुर्जर + जंतर वाद्य।",
    ["Gurjar community", "Jat community", "Meena community", "Bhil community"]);

  b("Paper-I", "Rajasthan Art & Culture", "Saints and Lok Devta", "Karni Mata", "Easy",
    "करणी माता का प्रसिद्ध मंदिर 'चूहों के मंदिर' के रूप में कहाँ स्थित है?",
    "The famous temple of Karni Mata, known as the 'Temple of Rats', is located at?",
    ["देशनोक (बीकानेर)", "जीण माता (सीकर)", "कैला देवी (करौली)", "शिला देवी (आमेर)"],
    0,
    "बीकानेर के देशनोक स्थित करणी माता मंदिर में सफेद चूहों (काबा) की पूजा होती है।",
    "करणी माता = देशनोक = चूहों का मंदिर।",
    ["Deshnok (Bikaner)", "Jeen Mata (Sikar)", "Kaila Devi (Karauli)", "Shila Devi (Amer)"]);

  b("Paper-I", "Rajasthan Art & Culture", "Saints and Lok Devta", "Sant Peepa", "Hard",
    "संत पीपा जी मूलतः किस रियासत के शासक थे जिन्होंने राजपाट त्यागकर भक्ति का मार्ग अपनाया?",
    "Sant Peepa ji was originally the ruler of which princely state before renouncing the throne for devotion?",
    ["गागरोन", "मेड़ता", "टोंक", "किशनगढ़"],
    0,
    "संत पीपा गागरोन के राजा थे; वे रामानंद के शिष्य बने और वैष्णव संत के रूप में प्रसिद्ध हुए।",
    "पीपा = गागरोन का त्यागी राजा।",
    ["Gagron", "Merta", "Tonk", "Kishangarh"]);

  b("Paper-I", "Rajasthan Art & Culture", "Festivals", "Baneshwar fair", "Medium",
    "बाणेश्वर मेला, जिसे 'आदिवासियों का कुम्भ' कहा जाता है, किस जिले में लगता है?",
    "The Baneshwar fair, called the 'Kumbh of tribals', is held in which district?",
    ["डूंगरपुर", "बांसवाड़ा", "उदयपुर", "प्रतापगढ़"],
    0,
    "बाणेश्वर मेला डूंगरपुर में सोम-माही-जाखम नदियों के संगम पर माघ पूर्णिमा को लगता है।",
    "बाणेश्वर = डूंगरपुर = आदिवासी कुम्भ।",
    ["Dungarpur", "Banswara", "Udaipur", "Pratapgarh"]);

  b("Paper-I", "Rajasthan Art & Culture", "Festivals", "Ramdevra fair", "Easy",
    "बाबा रामदेव का प्रसिद्ध मेला रामदेवरा किस जिले में लगता है?",
    "Baba Ramdev's famous Ramdevra fair is held in which district?",
    ["जैसलमेर", "जोधपुर", "बीकानेर", "नागौर"],
    0,
    "बाबा रामदेव की समाधि जैसलमेर के रामदेवरा (रुणिचा) में है, जहाँ भाद्रपद में विशाल मेला लगता है।",
    "रामदेवरा = जैसलमेर (रुणिचा)।",
    ["Jaisalmer", "Jodhpur", "Bikaner", "Nagaur"]);

  b("Paper-I", "Rajasthan Art & Culture", "Handicrafts", "Usta kala", "Hard",
    "'उस्ता कला' (मुनव्वती/सुनहरी नक्काशी) किस शहर की विशिष्ट हस्तकला है?",
    "'Usta kala' (gold-embossed manoti work) is a special handicraft of which city?",
    ["बीकानेर", "जयपुर", "जोधपुर", "अलवर"],
    0,
    "बीकानेर की उस्ता कला ऊँट की खाल पर सोने की सुनहरी नक्काशी (मुनव्वती) के लिए प्रसिद्ध है।",
    "उस्ता कला = बीकानेर + ऊँट की खाल।",
    ["Bikaner", "Jaipur", "Jodhpur", "Alwar"]);

  b("Paper-I", "Rajasthan Art & Culture", "Handicrafts", "Molela terracotta", "Medium",
    "मोलेला (राजसमंद) किस हस्तकला के लिए प्रसिद्ध है?",
    "Molela (Rajsamand) is famous for which handicraft?",
    ["टेराकोटा (मिट्टी की पट्टिका मूर्तियाँ)", "ब्लू पॉटरी", "कुंदन-मीनाकारी", "बंधेज"],
    0,
    "मोलेला गाँव मिट्टी की टेराकोटा पट्टिकाओं (देवमूर्तियों) के निर्माण के लिए प्रसिद्ध है।",
    "मोलेला = टेराकोटा पट्टिका।",
    ["Terracotta (clay plaque idols)", "Blue pottery", "Kundan-Meenakari", "Bandhej"]);

  b("Paper-I", "Rajasthan Art & Culture", "Handicrafts", "Koftgari - matching", "Hard",
    "निम्न में से कौन-सा युग्म सही सुमेलित नहीं है?",
    "Which of the following pairs is NOT correctly matched?",
    ["कोफ्तगिरी — नीली मिट्टी के बर्तन", "उस्ता कला — बीकानेर", "थेवा कला — प्रतापगढ़", "ब्लू पॉटरी — जयपुर"],
    0,
    "कोफ्तगिरी लोहे/इस्पात पर सोने-चाँदी की तार जड़ाई की कला है (हथियार सजावट), न कि नीली मिट्टी के बर्तन।",
    "कोफ्तगिरी = धातु पर तार जड़ाई, ब्लू पॉटरी नहीं।",
    ["Koftgari — blue clay pottery", "Usta kala — Bikaner", "Thewa art — Pratapgarh", "Blue pottery — Jaipur"]);

  b("Paper-I", "Rajasthan Art & Culture", "Handicrafts", "Kavad", "Medium",
    "'कावड़' कला के संदर्भ में सही कथन है —",
    "Regarding the 'Kavad' art, the correct statement is —",
    ["यह चित्रित लकड़ी का पोर्टेबल मंदिर है जिसे बस्सी (चित्तौड़गढ़) में बनाया जाता है", "यह मिट्टी की मूर्ति कला है", "यह कपड़े पर छपाई की तकनीक है", "यह धातु की मीनाकारी है"],
    0,
    "कावड़ काठ का बहु-द्वार वाला चलता-फिरता मंदिर है जिसमें कथाएँ चित्रित होती हैं; बस्सी (चित्तौड़गढ़) इसका केंद्र है।",
    "कावड़ = लकड़ी का चलता मंदिर (बस्सी)।",
    ["A painted wooden portable temple made at Bassi (Chittorgarh)", "A clay-idol art", "A cloth block-printing technique", "A metal enamel work"]);

  b("Paper-I", "Rajasthan Art & Culture", "Folk dances", "Chakri", "Medium",
    "चकरी नृत्य किस क्षेत्र/जनजाति से संबंधित है?",
    "The Chakri dance is associated with which region/tribe?",
    ["हाड़ौती क्षेत्र की कंजर जनजाति", "मेवात की मेव जाति", "शेखावाटी की भोपा जाति", "मारवाड़ की ढोली जाति"],
    0,
    "चकरी हाड़ौती (बारां-कोटा) क्षेत्र की कंजर जनजाति की महिलाओं का घूमर-प्रधान नृत्य है।",
    "चकरी = कंजर + हाड़ौती।",
    ["Kanjar tribe of the Hadoti region", "Meo caste of Mewat", "Bhopa caste of Shekhawati", "Dholi caste of Marwar"]);

  // ---------- Rajasthan History (~25) ----------

  b("Paper-I", "Rajasthan History", "Major dynasties", "Guhil founder", "Medium",
    "मेवाड़ के गुहिल वंश का संस्थापक किसे माना जाता है?",
    "Who is regarded as the founder of the Guhil dynasty of Mewar?",
    ["गुहादित्य (गुहिल)", "बप्पा रावल", "हम्मीर", "रावल रतन सिंह"],
    0,
    "गुहिल वंश की स्थापना गुहादित्य ने की; बप्पा रावल इसी वंश के प्रतापी शासक थे।",
    "गुहिल वंश संस्थापक = गुहादित्य।",
    ["Guhaditya (Guhil)", "Bappa Rawal", "Hammir", "Rawal Ratan Singh"]);

  b("Paper-I", "Rajasthan History", "Major dynasties", "Sisodia branch", "Hard",
    "मेवाड़ में सिसोदिया शाखा की नींव किस शासक ने रखी, जिसने 1326 में चित्तौड़ पुनः प्राप्त किया?",
    "Which ruler founded the Sisodia branch in Mewar and recaptured Chittor in 1326?",
    ["राणा हम्मीर", "राणा कुम्भा", "राणा सांगा", "राणा लाखा"],
    0,
    "राणा हम्मीर सिंह ने 1326 में चित्तौड़ पुनः प्राप्त कर सिसोदिया शाखा की स्थापना की।",
    "सिसोदिया संस्थापक = राणा हम्मीर (1326)।",
    ["Rana Hammir", "Rana Kumbha", "Rana Sanga", "Rana Lakha"]);

  b("Paper-I", "Rajasthan History", "Major dynasties", "Rathore Marwar", "Medium",
    "मारवाड़ (जोधपुर) में राठौड़ वंश का संस्थापक किसे माना जाता है?",
    "Who is regarded as the founder of the Rathore dynasty in Marwar (Jodhpur)?",
    ["राव सीहा", "राव जोधा", "राव मालदेव", "राव चंद्रसेन"],
    0,
    "राठौड़ वंश का संस्थापक राव सीहा माने जाते हैं; राव जोधा ने बाद में जोधपुर बसाया।",
    "राठौड़ मूल संस्थापक = राव सीहा; जोधपुर = राव जोधा।",
    ["Rao Siha", "Rao Jodha", "Rao Maldeo", "Rao Chandrasen"]);

  b("Paper-I", "Rajasthan History", "Major dynasties", "Kachhwaha capital", "Medium",
    "जयपुर की स्थापना (1727) से पूर्व कछवाहा राजवंश की राजधानी कहाँ थी?",
    "Before Jaipur's founding (1727), what was the capital of the Kachhwaha dynasty?",
    ["आमेर (आम्बेर)", "दौसा-देवती", "बैराठ", "नरैना"],
    0,
    "कछवाहों की राजधानी आमेर थी; सवाई जयसिंह द्वितीय ने 1727 में जयपुर बसाकर राजधानी स्थानांतरित की।",
    "कछवाहा = आमेर → जयपुर (1727)।",
    ["Amer (Amber)", "Dausa-Devti", "Bairat", "Naraina"]);

  b("Paper-I", "Rajasthan History", "Medieval history", "Rana Kumbha works", "Hard",
    "राणा कुम्भा द्वारा रचित संगीत ग्रंथ कौन-सा है?",
    "Which musical treatise was authored by Rana Kumbha?",
    ["संगीतराज", "रसिकप्रिया", "ललित विग्रहराज", "पृथ्वीराज विजय"],
    0,
    "राणा कुम्भा विद्वान शासक थे; उन्होंने 'संगीतराज' सहित कई ग्रंथ रचे।",
    "कुम्भा = संगीतराज।",
    ["Sangeetraj", "Rasikpriya", "Lalit Vigraharaj", "Prithviraj Vijay"]);

  b("Paper-I", "Rajasthan History", "Important battles", "Battle of Khanwa 1527", "Medium",
    "खानवा का युद्ध (1527) किन दो पक्षों के बीच लड़ा गया?",
    "The Battle of Khanwa (1527) was fought between which two sides?",
    ["राणा सांगा बनाम बाबर", "राणा प्रताप बनाम अकबर", "राणा कुम्भा बनाम महमूद खिलजी", "पृथ्वीराज बनाम मोहम्मद गौरी"],
    0,
    "खानवा (भरतपुर) का युद्ध 1527 में राणा सांगा और मुगल बादशाह बाबर के बीच हुआ, जिसमें बाबर विजयी रहा।",
    "खानवा 1527 = सांगा × बाबर।",
    ["Rana Sanga vs Babur", "Rana Pratap vs Akbar", "Rana Kumbha vs Mahmud Khilji", "Prithviraj vs Muhammad Ghori"]);

  b("Paper-I", "Rajasthan History", "Important battles", "Khanwa cause - tulguma", "Hard",
    "खानवा के युद्ध में बाबर की विजय का एक प्रमुख कारण था —",
    "One major reason for Babur's victory in the Battle of Khanwa was —",
    ["तोपखाना एवं तुलुगमा युद्ध पद्धति", "हाथी सेना का प्रयोग", "समुद्री बेड़ा", "राणा सांगा की विशाल तोपें"],
    0,
    "बाबर ने तोपखाने (उस्ताद अली) एवं तुलुगमा (फ्लैंकिंग) पद्धति से राणा सांगा को पराजित किया।",
    "बाबर की जीत = तोप + तुलुगमा।",
    ["Artillery and the Tulughma battle tactic", "Use of elephant corps", "A naval fleet", "Rana Sanga's huge cannons"]);

  b("Paper-I", "Rajasthan History", "Medieval history", "Pratap successor", "Medium",
    "महाराणा प्रताप के उत्तराधिकारी कौन बने?",
    "Who succeeded Maharana Pratap as ruler of Mewar?",
    ["अमर सिंह प्रथम", "कर्ण सिंह", "जगत सिंह", "राज सिंह"],
    0,
    "1597 में महाराणा प्रताप के बाद उनके पुत्र अमर सिंह प्रथम मेवाड़ के शासक बने।",
    "प्रताप → अमर सिंह प्रथम।",
    ["Amar Singh I", "Karan Singh", "Jagat Singh", "Raj Singh"]);

  b("Paper-I", "Rajasthan History", "Medieval history", "Chittor 1615 treaty", "Hard",
    "मेवाड़-मुगल संधि (1615) किन दो पक्षों के बीच हुई?",
    "The Mewar-Mughal treaty (1615) was concluded between which two sides?",
    ["अमर सिंह प्रथम एवं जहाँगीर", "राणा प्रताप एवं अकबर", "राज सिंह एवं औरंगजेब", "जगत सिंह एवं शाहजहाँ"],
    0,
    "1615 में अमर सिंह प्रथम और जहाँगीर (खुर्रम के माध्यम से) के बीच मेवाड़-मुगल संधि हुई।",
    "1615 संधि = अमर सिंह प्रथम × जहाँगीर।",
    ["Amar Singh I and Jahangir", "Rana Pratap and Akbar", "Raj Singh and Aurangzeb", "Jagat Singh and Shah Jahan"]);

  b("Paper-I", "Rajasthan History", "Modern history", "Subsidiary alliance 1818", "Medium",
    "राजपूताना की अधिकांश रियासतों ने ईस्ट इंडिया कंपनी के साथ सहायक संधि (अधीनस्थ संधि) मुख्यतः किस वर्ष के आस-पास की?",
    "Most Rajputana states signed the subsidiary/subordinate alliance with the East India Company mainly around which year?",
    ["1818", "1757", "1857", "1905"],
    0,
    "1817-18 में करौली से शुरू होकर अधिकांश राजपूताना रियासतों ने अंग्रेज़ों के साथ अधीनस्थ संधियाँ कीं।",
    "राजपूताना संधियाँ = 1818।",
    ["1818", "1757", "1857", "1905"]);

  b("Paper-I", "Rajasthan History", "Modern history", "First treaty 1803", "Hard",
    "राजपूताना की किस रियासत ने सर्वप्रथम (1803) अंग्रेज़ों से संधि की थी?",
    "Which Rajputana state was the first (1803) to sign a treaty with the British?",
    ["भरतपुर", "करौली", "मेवाड़", "जयपुर"],
    0,
    "भरतपुर ने 1803 में सबसे पहले अंग्रेज़ों से संधि की; अधिकांश रियासतों की संधियाँ 1818 में हुईं।",
    "प्रथम संधि (1803) = भरतपुर।",
    ["Bharatpur", "Karauli", "Mewar", "Jaipur"]);

  b("Paper-I", "Rajasthan History", "Freedom movement", "1857 first centre", "Medium",
    "1857 की क्रांति में राजस्थान में सर्वप्रथम विद्रोह कहाँ भड़का?",
    "In the 1857 revolt, where did the uprising first break out in Rajasthan?",
    ["नसीराबाद", "नीमच", "एरिनपुरा", "आउवा"],
    0,
    "28 मई 1857 को नसीराबाद (अजमेर) की छावनी में राजस्थान का पहला विद्रोह हुआ।",
    "1857 राजस्थान प्रथम = नसीराबाद (28 मई)।",
    ["Nasirabad", "Neemuch", "Erinpura", "Auwa"]);

  b("Paper-I", "Rajasthan History", "Freedom movement", "1857 Tantia Tope", "Hard",
    "1857 के दौरान तांत्या टोपे ने राजस्थान की किस रियासत के क्षेत्रों में अंग्रेज़ों को टक्कर दी?",
    "During 1857, Tantia Tope challenged the British in the territories of which Rajasthan state?",
    ["कोटा-झालावाड़ (हाड़ौती) क्षेत्र", "बीकानेर", "जैसलमेर", "अलवर"],
    0,
    "तांत्या टोपे ने हाड़ौती (कोटा-झालावाड़, बांरा) क्षेत्र में सक्रिय होकर अंग्रेज़ी सेना को चुनौती दी।",
    "तांत्या टोपे = हाड़ौती क्षेत्र।",
    ["Kota-Jhalawar (Hadoti) region", "Bikaner", "Jaisalmer", "Alwar"]);

  b("Paper-I", "Rajasthan History", "Freedom movement", "Auwa Thakur", "Hard",
    "1857 में आउवा (मारवाड़) के विद्रोह का नेतृत्व किस ठाकुर ने किया?",
    "Who led the 1857 revolt at Auwa (Marwar)?",
    ["ठाकुर कुशाल सिंह", "ठाकुर देवी सिंह", "राव तुलाराम", "जोधसिंह"],
    0,
    "आउवा के ठाकुर कुशाल सिंह ने 1857 में मारवाड़ में अंग्रेज़ों-जोधपुर सेना के विरुद्ध विद्रोह किया।",
    "आउवा = ठाकुर कुशाल सिंह।",
    ["Thakur Kushal Singh", "Thakur Devi Singh", "Rao Tularam", "Jodh Singh"]);

  b("Paper-I", "Rajasthan History", "Freedom movement", "Bijolia movement", "Medium",
    "बिजोलिया किसान आंदोलन किस रियासत में हुआ और किससे संबंधित था?",
    "The Bijolia peasant movement took place in which state and concerned what?",
    ["मेवाड़ — भू-राजस्व/लाग-बाग के विरुद्ध किसान आंदोलन", "मारवाड़ — भील विद्रोह", "जयपुर — नगरीय आंदोलन", "कोटा — मजदूर आंदोलन"],
    0,
    "बिजोलिया (मेवाड़) आंदोलन 1897 से भारी लगान व बेगार के विरुद्ध चला; विजय सिंह पथिक इसके प्रमुख नेता थे।",
    "बिजोलिया = मेवाड़ + किसान (विजय सिंह पथिक)।",
    ["Mewar — peasant movement against land revenue/levies", "Marwar — Bhil revolt", "Jaipur — urban movement", "Kota — labour movement"]);

  b("Paper-I", "Rajasthan History", "Freedom movement", "Begu movement leader", "Hard",
    "बेगूं किसान आंदोलन का प्रमुख नेता कौन था?",
    "Who was the chief leader of the Begun peasant movement?",
    ["रामनारायण चौधरी", "विजय सिंह पथिक", "जयनारायण व्यास", "माणिक्यलाल वर्मा"],
    0,
    "बेगूं (मेवाड़) किसान आंदोलन का नेतृत्व रामनारायण चौधरी ने किया; इसमें 'बोल्शेविक' समझौता चर्चित रहा।",
    "बेगूं = रामनारायण चौधरी।",
    ["Ramnarayan Chaudhary", "Vijay Singh Pathik", "Jainarayan Vyas", "Manikyalal Verma"]);

  b("Paper-I", "Rajasthan History", "Freedom movement", "Mangarh 1913", "Medium",
    "मानगढ़ हत्याकांड (1913), जिसे 'आदिवासियों का जलियाँवाला बाग' कहा जाता है, किस नेता के भील आंदोलन से जुड़ा है?",
    "The Mangarh massacre (1913), called the 'Jallianwala Bagh of tribals', is linked to the Bhil movement of which leader?",
    ["गोविंद गिरि", "मोतीलाल तेजावत", "मावजी", "सुरजी भगत"],
    0,
    "गोविंद गिरि के नेतृत्व वाले भगत आंदोलन के दौरान 1913 में मानगढ़ (बांसवाड़ा) में अंग्रेज़ों ने गोलीबारी की।",
    "मानगढ़ 1913 = गोविंद गिरि (भील)।",
    ["Govind Giri", "Motilal Tejawat", "Mavji", "Surji Bhagat"]);

  b("Paper-I", "Rajasthan History", "Freedom movement", "Eki movement", "Hard",
    "'एकी आंदोलन' (भोमट भील आंदोलन) का नेतृत्व किसने किया?",
    "Who led the 'Eki movement' (Bhomat Bhil movement)?",
    ["मोतीलाल तेजावत", "गोविंद गिरि", "विजय सिंह पथिक", "बलवंत सिंह मेहता"],
    0,
    "मोतीलाल तेजावत ने मेवाड़-सिरोही के भोमट क्षेत्र में भीलों के 'एकी आंदोलन' का नेतृत्व किया।",
    "एकी आंदोलन = मोतीलाल तेजावत।",
    ["Motilal Tejawat", "Govind Giri", "Vijay Singh Pathik", "Balwant Singh Mehta"]);

  b("Paper-I", "Rajasthan History", "Freedom movement", "Praja Mandal matching", "Hard",
    "निम्न में से कौन-सा प्रजामंडल-रियासत युग्म सही सुमेलित नहीं है?",
    "Which of the following Praja Mandal–state pairs is NOT correctly matched?",
    ["बीकानेर प्रजामंडल — जयनारायण व्यास", "जयपुर प्रजामंडल — जमनालाल बजाज", "मारवाड़ प्रजामंडल — जयनारायण व्यास", "मेवाड़ प्रजामंडल — माणिक्यलाल वर्मा"],
    0,
    "बीकानेर प्रजामंडल की स्थापना मघाराम वैद्य/चौधरी से जुड़ी है (मास्टर मगाराम); जयनारायण व्यास मारवाड़ प्रजामंडल से संबंधित थे।",
    "जयनारायण व्यास = मारवाड़, बीकानेर नहीं।",
    ["Bikaner Praja Mandal — Jainarayan Vyas", "Jaipur Praja Mandal — Jamnalal Bajaj", "Marwar Praja Mandal — Jainarayan Vyas", "Mewar Praja Mandal — Manikyalal Verma"]);

  b("Paper-I", "Rajasthan History", "Modern history", "Integration stages", "Medium",
    "राजस्थान का एकीकरण कुल कितने चरणों में पूर्ण हुआ?",
    "In how many stages was the integration of Rajasthan completed?",
    ["सात", "पाँच", "चार", "नौ"],
    0,
    "राजस्थान का एकीकरण 1948 से 1956 के बीच सात चरणों में पूरा हुआ।",
    "एकीकरण = 7 चरण।",
    ["Seven", "Five", "Four", "Nine"]);

  b("Paper-I", "Rajasthan History", "Modern history", "Matsya Union", "Hard",
    "एकीकरण के दूसरे चरण में बनी 'मत्स्य संघ' में कौन-सी रियासतें शामिल थीं?",
    "Which states formed the 'Matsya Union' in the second stage of integration?",
    ["अलवर, भरतपुर, धौलपुर, करौली", "कोटा, बूंदी, झालावाड़, टोंक", "उदयपुर, बांसवाड़ा, डूंगरपुर, प्रतापगढ़", "जयपुर, जोधपुर, बीकानेर, जैसलमेर"],
    0,
    "18 मार्च 1948 को अलवर, भरतपुर, धौलपुर व करौली को मिलाकर मत्स्य संघ बना; इसकी राजधानी अलवर थी।",
    "मत्स्य संघ = अलवर+भरतपुर+धौलपुर+करौली।",
    ["Alwar, Bharatpur, Dholpur, Karauli", "Kota, Bundi, Jhalawar, Tonk", "Udaipur, Banswara, Dungarpur, Pratapgarh", "Jaipur, Jodhpur, Bikaner, Jaisalmer"]);

  b("Paper-I", "Rajasthan History", "Modern history", "Greater Rajasthan CM", "Medium",
    "30 मार्च 1949 को गठित 'वृहत् राजस्थान' का प्रथम मुख्यमंत्री कौन बना?",
    "Who became the first Chief Minister of 'Greater Rajasthan' formed on 30 March 1949?",
    ["हीरालाल शास्त्री", "जयनारायण व्यास", "टीकाराम पालीवाल", "मोहनलाल सुखाड़िया"],
    0,
    "30 मार्च 1949 (राजस्थान दिवस) को वृहत् राजस्थान बना और हीरालाल शास्त्री प्रथम मुख्यमंत्री बने।",
    "वृहत् राजस्थान प्रथम CM = हीरालाल शास्त्री।",
    ["Heeralal Shastri", "Jainarayan Vyas", "Tikaram Paliwal", "Mohanlal Sukhadia"]);

  b("Paper-I", "Rajasthan History", "Ancient history", "Kalibanga", "Medium",
    "सिंधु सभ्यता का स्थल कालीबंगा राजस्थान के किस जिले में स्थित है, जो जुते हुए खेत के प्रमाण के लिए प्रसिद्ध है?",
    "The Indus site Kalibangan, famous for evidence of a ploughed field, is in which district of Rajasthan?",
    ["हनुमानगढ़", "गंगानगर", "बीकानेर", "चूरू"],
    0,
    "कालीबंगा हनुमानगढ़ जिले में घग्घर नदी के किनारे स्थित है; यहाँ विश्व का प्राचीनतम जुता हुआ खेत मिला।",
    "कालीबंगा = हनुमानगढ़ + जुता खेत।",
    ["Hanumangarh", "Ganganagar", "Bikaner", "Churu"]);

  b("Paper-I", "Rajasthan History", "Ancient history", "Bairat", "Hard",
    "मौर्यकालीन (अशोक के शिलालेख एवं बौद्ध अवशेष) स्थल बैराठ राजस्थान के किस जिले में है?",
    "The Mauryan-era site Bairat (Ashokan inscriptions and Buddhist remains) is in which district of Rajasthan?",
    ["जयपुर (कोटपूतली-बहरोड़)", "अलवर", "टोंक", "भरतपुर"],
    0,
    "बैराठ (विराटनगर) जयपुर क्षेत्र में स्थित है; यहाँ अशोक के भाब्रू शिलालेख एवं बौद्ध स्तूप के अवशेष मिले।",
    "बैराठ = विराटनगर + अशोक शिलालेख।",
    ["Jaipur (Kotputli-Behror)", "Alwar", "Tonk", "Bharatpur"]);

  b("Paper-I", "Rajasthan History", "Major dynasties", "Chauhan capital Ajmer", "Medium",
    "चौहान (चाहमान) वंश की प्रारंभिक राजधानी कहाँ थी, जिसे अजयराज ने अजमेर स्थानांतरित किया?",
    "What was the early capital of the Chauhan (Chahamana) dynasty before Ajayaraja shifted it to Ajmer?",
    ["शाकम्भरी (सांभर)", "नागौर", "रणथंभौर", "जालौर"],
    0,
    "चौहानों की मूल राजधानी शाकम्भरी (सांभर) थी; अजयराज ने अजयमेरु (अजमेर) की स्थापना की।",
    "चौहान मूल राजधानी = शाकम्भरी (सांभर)।",
    ["Shakambhari (Sambhar)", "Nagaur", "Ranthambhore", "Jalore"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
