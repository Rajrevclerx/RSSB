/* RSSB BCI 2026 - Mega bank part 07: Communication & Network Concepts + Network Security */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG07";
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

  /* ===================== COMMUNICATION AND NETWORK CONCEPTS (~25) ===================== */

  b("Paper-II", "Communication and Network Concepts", "OSI Model", "Layers", "easy",
    "OSI मॉडल में कितनी परतें (layers) होती हैं?",
    "How many layers are there in the OSI model?",
    ["5", "6", "7", "4"], 2,
    "OSI (Open Systems Interconnection) मॉडल में 7 परतें होती हैं: Physical, Data Link, Network, Transport, Session, Presentation और Application.",
    "OSI = 7 layers; TCP/IP = 4 layers.",
    ["5", "6", "7", "4"]);

  b("Paper-II", "Communication and Network Concepts", "OSI Model", "Layer Order", "medium",
    "OSI मॉडल की सबसे निचली (पहली) परत कौन सी है?",
    "Which is the lowest (first) layer of the OSI model?",
    ["Application", "Physical", "Network", "Transport"], 1,
    "OSI मॉडल की सबसे निचली परत Physical layer है, जो बिट्स को भौतिक माध्यम पर संचारित करती है.",
    "याद रखें: Please Do Not Throw Sausage Pizza Away (Physical से Application).",
    ["Application", "Physical", "Network", "Transport"]);

  b("Paper-II", "Communication and Network Concepts", "OSI Model", "Transport Layer", "medium",
    "OSI मॉडल में एंड-टू-एंड (end-to-end) डिलीवरी और विश्वसनीय डेटा ट्रांसफर के लिए कौन सी परत उत्तरदायी है?",
    "Which OSI layer is responsible for end-to-end delivery and reliable data transfer?",
    ["Network layer", "Transport layer", "Session layer", "Data Link layer"], 1,
    "Transport layer एंड-टू-एंड डिलीवरी, एरर रिकवरी और फ्लो कंट्रोल प्रदान करती है (TCP/UDP इसी परत पर कार्य करते हैं).",
    "End-to-end = Transport (Layer 4).",
    ["Network layer", "Transport layer", "Session layer", "Data Link layer"]);

  b("Paper-II", "Communication and Network Concepts", "OSI Model", "Network Layer", "medium",
    "राउटिंग और लॉजिकल एड्रेसिंग (IP address) किस OSI परत का कार्य है?",
    "Routing and logical addressing (IP address) is the function of which OSI layer?",
    ["Data Link layer", "Network layer", "Transport layer", "Physical layer"], 1,
    "Network layer (Layer 3) लॉजिकल एड्रेसिंग (IP) और पैकेट राउटिंग का कार्य करती है.",
    "Router व IP → Network layer.",
    ["Data Link layer", "Network layer", "Transport layer", "Physical layer"]);

  b("Paper-II", "Communication and Network Concepts", "OSI Model", "Data Link Layer", "medium",
    "MAC एड्रेस (physical address) और फ्रेमिंग किस OSI परत से संबंधित है?",
    "MAC address (physical address) and framing belong to which OSI layer?",
    ["Network layer", "Data Link layer", "Session layer", "Application layer"], 1,
    "Data Link layer (Layer 2) फ्रेमिंग, MAC एड्रेसिंग और एरर डिटेक्शन का कार्य करती है. इसके दो उपस्तर हैं: LLC और MAC.",
    "MAC address → Data Link layer.",
    ["Network layer", "Data Link layer", "Session layer", "Application layer"]);

  b("Paper-II", "Communication and Network Concepts", "OSI Model", "PDU", "hard",
    "Transport layer पर डेटा की इकाई (PDU) को क्या कहते हैं?",
    "What is the data unit (PDU) at the Transport layer called?",
    ["Frame", "Packet", "Segment", "Bit"], 2,
    "PDU: Application/Presentation/Session = Data, Transport = Segment (TCP) / Datagram (UDP), Network = Packet, Data Link = Frame, Physical = Bit.",
    "Segment = Transport; Packet = Network; Frame = Data Link.",
    ["Frame", "Packet", "Segment", "Bit"]);

  b("Paper-II", "Communication and Network Concepts", "OSI Model", "Presentation Layer", "hard",
    "डेटा एन्क्रिप्शन, कम्प्रेशन और फॉर्मेट रूपांतरण किस OSI परत का कार्य है?",
    "Data encryption, compression and format translation is the function of which OSI layer?",
    ["Session layer", "Presentation layer", "Application layer", "Transport layer"], 1,
    "Presentation layer (Layer 6) डेटा एन्क्रिप्शन/डिक्रिप्शन, कम्प्रेशन और सिंटैक्स रूपांतरण का कार्य करती है; इसे 'translator' भी कहते हैं.",
    "Encryption/compression → Presentation layer.",
    ["Session layer", "Presentation layer", "Application layer", "Transport layer"]);

  b("Paper-II", "Communication and Network Concepts", "TCP/IP", "Model", "medium",
    "TCP/IP संदर्भ मॉडल में कितनी परतें होती हैं?",
    "How many layers are there in the TCP/IP reference model?",
    ["7", "5", "4", "3"], 2,
    "TCP/IP मॉडल में 4 परतें होती हैं: Application, Transport, Internet और Network Access (Link).",
    "TCP/IP = 4 layers (OSI का सरलीकृत रूप).",
    ["7", "5", "4", "3"]);

  b("Paper-II", "Communication and Network Concepts", "TCP/IP", "TCP vs UDP", "medium",
    "TCP और UDP के बीच मुख्य अंतर क्या है?",
    "What is the main difference between TCP and UDP?",
    ["TCP connectionless है, UDP connection-oriented है", "TCP connection-oriented व विश्वसनीय है, UDP connectionless है", "दोनों connectionless हैं", "दोनों connection-oriented हैं"], 1,
    "TCP connection-oriented, विश्वसनीय (acknowledgement सहित) है जबकि UDP connectionless, तेज़ पर अविश्वसनीय है.",
    "TCP = भरोसेमंद (reliable); UDP = तेज़ (fast, no handshake).",
    ["TCP is connectionless, UDP is connection-oriented", "TCP is connection-oriented and reliable, UDP is connectionless", "Both are connectionless", "Both are connection-oriented"]);

  b("Paper-II", "Communication and Network Concepts", "TCP/IP", "IPv4", "easy",
    "IPv4 एड्रेस कितने बिट का होता है?",
    "How many bits are there in an IPv4 address?",
    ["16 bits", "32 bits", "64 bits", "128 bits"], 1,
    "IPv4 एड्रेस 32 बिट का होता है (चार 8-बिट octets), जबकि IPv6 एड्रेस 128 बिट का होता है.",
    "IPv4 = 32-bit; IPv6 = 128-bit.",
    ["16 bits", "32 bits", "64 bits", "128 bits"]);

  b("Paper-II", "Communication and Network Concepts", "TCP/IP", "IPv6", "medium",
    "IPv6 एड्रेस कितने बिट का होता है?",
    "How many bits are there in an IPv6 address?",
    ["32 bits", "64 bits", "128 bits", "256 bits"], 2,
    "IPv6 एड्रेस 128 बिट का होता है और इसे हेक्साडेसिमल में आठ समूहों में लिखा जाता है.",
    "IPv6 = 128-bit (hexadecimal).",
    ["32 bits", "64 bits", "128 bits", "256 bits"]);

  b("Paper-II", "Communication and Network Concepts", "TCP/IP", "IP Classes", "hard",
    "Class C IPv4 एड्रेस की डिफ़ॉल्ट सबनेट मास्क क्या है?",
    "What is the default subnet mask of a Class C IPv4 address?",
    ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"], 2,
    "Class A: 255.0.0.0, Class B: 255.255.0.0, Class C: 255.255.255.0. Class C में पहले 24 बिट नेटवर्क भाग होते हैं.",
    "Class A=/8, B=/16, C=/24.",
    ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"]);

  b("Paper-II", "Communication and Network Concepts", "Networking Devices", "Router", "medium",
    "राउटर (router) OSI मॉडल की किस परत पर कार्य करता है?",
    "At which OSI layer does a router operate?",
    ["Physical layer", "Data Link layer", "Network layer", "Transport layer"], 2,
    "राउटर Network layer (Layer 3) पर कार्य करता है और IP एड्रेस के आधार पर पैकेट राउटिंग करता है.",
    "Router → Layer 3 (Network).",
    ["Physical layer", "Data Link layer", "Network layer", "Transport layer"]);

  b("Paper-II", "Communication and Network Concepts", "Networking Devices", "Switch", "medium",
    "स्विच (switch) मुख्यतः OSI मॉडल की किस परत पर कार्य करता है?",
    "A switch mainly operates at which OSI layer?",
    ["Physical layer", "Data Link layer", "Network layer", "Application layer"], 1,
    "स्विच Data Link layer (Layer 2) पर MAC एड्रेस के आधार पर कार्य करता है (Layer 3 स्विच भी होते हैं).",
    "Switch → Layer 2 (MAC based).",
    ["Physical layer", "Data Link layer", "Network layer", "Application layer"]);

  b("Paper-II", "Communication and Network Concepts", "Networking Devices", "Hub/Repeater", "medium",
    "हब (hub) और रिपीटर (repeater) OSI मॉडल की किस परत पर कार्य करते हैं?",
    "At which OSI layer do a hub and a repeater operate?",
    ["Physical layer", "Data Link layer", "Network layer", "Transport layer"], 0,
    "हब और रिपीटर Physical layer (Layer 1) पर कार्य करते हैं; ये केवल सिग्नल को पुनर्जनित/प्रसारित करते हैं.",
    "Hub व Repeater → Layer 1 (Physical).",
    ["Physical layer", "Data Link layer", "Network layer", "Transport layer"]);

  b("Paper-II", "Communication and Network Concepts", "Networking Devices", "Gateway", "hard",
    "अलग-अलग प्रोटोकॉल वाले दो नेटवर्कों को जोड़ने वाला उपकरण कौन सा है?",
    "Which device connects two networks using different protocols?",
    ["Hub", "Repeater", "Gateway", "Bridge"], 2,
    "Gateway दो भिन्न प्रोटोकॉल वाले नेटवर्कों को जोड़ता है और सभी सात परतों पर कार्य कर सकता है (protocol converter).",
    "Gateway = protocol converter (सभी layers).",
    ["Hub", "Repeater", "Gateway", "Bridge"]);

  b("Paper-II", "Communication and Network Concepts", "Networking Devices", "Modem", "easy",
    "मॉडेम (modem) का मुख्य कार्य क्या है?",
    "What is the main function of a modem?",
    ["केवल डेटा स्टोर करना", "डिजिटल और एनालॉग सिग्नल के बीच रूपांतरण (modulation/demodulation)", "केवल डेटा एन्क्रिप्ट करना", "फाइलों को प्रिंट करना"], 1,
    "Modem = Modulator + Demodulator; यह डिजिटल सिग्नल को एनालॉग में (और इसके विपरीत) बदलता है.",
    "Modem = MOdulator + DEModulator.",
    ["Only store data", "Convert between digital and analog signals (modulation/demodulation)", "Only encrypt data", "Print files"]);

  b("Paper-II", "Communication and Network Concepts", "Introduction to Networks", "Topology", "easy",
    "किस टोपोलॉजी में सभी नोड एक केंद्रीय हब/स्विच से जुड़े होते हैं?",
    "In which topology are all nodes connected to a central hub/switch?",
    ["Bus topology", "Ring topology", "Star topology", "Mesh topology"], 2,
    "Star topology में सभी डिवाइस एक केंद्रीय हब/स्विच से जुड़े रहते हैं; एक केबल फेल होने पर केवल वही नोड प्रभावित होता है.",
    "Star = केंद्रीय hub.",
    ["Bus topology", "Ring topology", "Star topology", "Mesh topology"]);

  b("Paper-II", "Communication and Network Concepts", "Introduction to Networks", "Topology", "medium",
    "किस टोपोलॉजी में प्रत्येक डिवाइस हर दूसरे डिवाइस से सीधे जुड़ा होता है (अधिकतम विश्वसनीयता)?",
    "In which topology is every device directly connected to every other device (maximum reliability)?",
    ["Bus", "Star", "Ring", "Mesh"], 3,
    "Mesh topology में प्रत्येक नोड अन्य सभी नोड से सीधे जुड़ा होता है; यह सर्वाधिक विश्वसनीय पर सबसे महँगी होती है. n नोड के लिए n(n-1)/2 केबल.",
    "Mesh = सब सबसे जुड़े; सबसे reliable.",
    ["Bus", "Star", "Ring", "Mesh"]);

  b("Paper-II", "Communication and Network Concepts", "LAN", "Scope", "easy",
    "LAN का पूर्ण रूप क्या है?",
    "What is the full form of LAN?",
    ["Long Area Network", "Local Area Network", "Large Access Network", "Logical Area Node"], 1,
    "LAN = Local Area Network; यह एक सीमित भौगोलिक क्षेत्र (जैसे भवन/कार्यालय) को कवर करता है.",
    "LAN = Local (छोटा क्षेत्र); WAN = Wide (बड़ा).",
    ["Long Area Network", "Local Area Network", "Large Access Network", "Logical Area Node"]);

  b("Paper-II", "Communication and Network Concepts", "WAN", "Scope", "medium",
    "इंटरनेट किस प्रकार के नेटवर्क का उदाहरण है?",
    "The Internet is an example of which type of network?",
    ["LAN", "MAN", "WAN", "PAN"], 2,
    "इंटरनेट WAN (Wide Area Network) का सबसे बड़ा उदाहरण है, जो बहुत बड़े भौगोलिक क्षेत्र को कवर करता है.",
    "WAN → देश/विश्व स्तर; Internet सबसे बड़ा WAN.",
    ["LAN", "MAN", "WAN", "PAN"]);

  b("Paper-II", "Communication and Network Concepts", "Introduction to Networks", "Transmission Media", "medium",
    "सबसे अधिक बैंडविड्थ और सबसे तेज़ गति कौन सा ट्रांसमिशन माध्यम प्रदान करता है?",
    "Which transmission medium provides the highest bandwidth and fastest speed?",
    ["Twisted pair cable", "Coaxial cable", "Fibre optic cable", "Telephone wire"], 2,
    "Fibre optic cable प्रकाश (light) के रूप में डेटा भेजता है, सर्वाधिक बैंडविड्थ, अधिक गति और EMI से मुक्त होता है.",
    "Fibre optic = light, सबसे तेज़, no EMI.",
    ["Twisted pair cable", "Coaxial cable", "Fibre optic cable", "Telephone wire"]);

  b("Paper-II", "Communication and Network Concepts", "Introduction to Networks", "Unguided Media", "medium",
    "निम्न में से कौन-सा अनगाइडेड (unguided/wireless) माध्यम है?",
    "Which of the following is an unguided (wireless) medium?",
    ["Twisted pair", "Coaxial cable", "Optical fibre", "Radio waves"], 3,
    "Guided media: twisted pair, coaxial, fibre optic. Unguided (wireless) media: radio waves, microwave, infrared.",
    "Guided = तार वाला; Unguided = wireless (radio/microwave/infrared).",
    ["Twisted pair", "Coaxial cable", "Optical fibre", "Radio waves"]);

  b("Paper-II", "Communication and Network Concepts", "Network Layers", "Protocols", "medium",
    "वेब पेज ब्राउज़ करने के लिए किस प्रोटोकॉल का उपयोग होता है?",
    "Which protocol is used for browsing web pages?",
    ["FTP", "SMTP", "HTTP", "DHCP"], 2,
    "HTTP (HyperText Transfer Protocol) वेब पेज ट्रांसफर के लिए, FTP फाइल ट्रांसफर, SMTP ई-मेल भेजने, DHCP IP एड्रेस असाइन करने हेतु उपयोग होता है.",
    "HTTP=web, FTP=file, SMTP=mail भेजना, DHCP=IP देना.",
    ["FTP", "SMTP", "HTTP", "DHCP"]);

  b("Paper-II", "Communication and Network Concepts", "Network Layers", "DNS", "medium",
    "डोमेन नाम (जैसे www.google.com) को IP एड्रेस में बदलने वाला प्रोटोकॉल कौन सा है?",
    "Which protocol translates a domain name (e.g. www.google.com) into an IP address?",
    ["DHCP", "DNS", "ARP", "FTP"], 1,
    "DNS (Domain Name System) डोमेन नाम को IP एड्रेस में हल (resolve) करता है. ARP IP को MAC एड्रेस में बदलता है.",
    "DNS = नाम → IP; ARP = IP → MAC.",
    ["DHCP", "DNS", "ARP", "FTP"]);

  b("Paper-II", "Communication and Network Concepts", "Mobile Communication", "WiFi/WiMax", "hard",
    "WiFi किस IEEE मानक पर आधारित है?",
    "WiFi is based on which IEEE standard?",
    ["IEEE 802.3", "IEEE 802.11", "IEEE 802.16", "IEEE 802.15"], 1,
    "WiFi = IEEE 802.11, WiMax = IEEE 802.16, Ethernet = IEEE 802.3, Bluetooth = IEEE 802.15.",
    "WiFi=802.11, WiMax=802.16, Ethernet=802.3.",
    ["IEEE 802.3", "IEEE 802.11", "IEEE 802.16", "IEEE 802.15"]);

  b("Paper-II", "Communication and Network Concepts", "Mobile Communication", "Generations", "medium",
    "किस मोबाइल पीढ़ी (generation) में सबसे पहले हाई-स्पीड मोबाइल इंटरनेट/ब्रॉडबैंड (LTE) की शुरुआत मानी जाती है?",
    "Which mobile generation is associated with the first high-speed mobile broadband (LTE)?",
    ["2G", "3G", "4G", "1G"], 2,
    "4G (LTE) उच्च गति मोबाइल ब्रॉडबैंड प्रदान करता है. 1G एनालॉग वॉइस, 2G डिजिटल वॉइस/SMS, 3G मोबाइल इंटरनेट, 5G अति-तीव्र व कम विलंब.",
    "1G=analog, 2G=digital/SMS, 3G=net, 4G=LTE, 5G=अल्ट्रा फास्ट.",
    ["2G", "3G", "4G", "1G"]);

  b("Paper-II", "Communication and Network Concepts", "Mobile Communication", "GSM/CDMA", "hard",
    "GSM और CDMA में क्या अंतर है?",
    "What is the difference between GSM and CDMA?",
    ["GSM में SIM कार्ड होता है, CDMA में सामान्यतः हैंडसेट में नंबर एम्बेडेड होता है", "दोनों में SIM आवश्यक है", "CDMA केवल SMS हेतु है", "GSM केवल एनालॉग है"], 0,
    "GSM (Global System for Mobile) में SIM कार्ड आधारित पहचान होती है; CDMA (Code Division Multiple Access) में सामान्यतः फोन नंबर हैंडसेट से जुड़ा होता है.",
    "GSM = SIM आधारित; CDMA = handset आधारित.",
    ["GSM uses a SIM card, CDMA typically embeds the number in the handset", "Both require a SIM", "CDMA is only for SMS", "GSM is only analog"]);

  /* ===================== NETWORK SECURITY (~25) ===================== */

  b("Paper-II", "Network Security", "Virus", "Definition", "easy",
    "कंप्यूटर वायरस क्या है?",
    "What is a computer virus?",
    ["एक हार्डवेयर उपकरण", "एक दुर्भावनापूर्ण प्रोग्राम जो स्वयं की प्रतिलिपि बनाकर अन्य फाइलों को संक्रमित करता है", "एक इनपुट डिवाइस", "एक वैध ऑपरेटिंग सिस्टम"], 1,
    "वायरस एक दुर्भावनापूर्ण (malicious) प्रोग्राम है जो किसी होस्ट फाइल से जुड़कर स्वयं की प्रतिलिपि बनाता है और फैलने के लिए यूज़र क्रिया पर निर्भर करता है.",
    "Virus को फैलने हेतु host file व user action चाहिए.",
    ["A hardware device", "A malicious program that replicates itself and infects other files", "An input device", "A legitimate operating system"]);

  b("Paper-II", "Network Security", "Virus", "Worm", "medium",
    "वायरस और वर्म (worm) में मुख्य अंतर क्या है?",
    "What is the main difference between a virus and a worm?",
    ["वर्म को फैलने के लिए होस्ट प्रोग्राम की आवश्यकता नहीं होती, यह स्वतः फैलता है", "वायरस स्वतः फैलता है, वर्म नहीं", "दोनों हार्डवेयर हैं", "वर्म वैध सॉफ्टवेयर है"], 0,
    "Worm स्वतंत्र रूप से नेटवर्क के माध्यम से स्वयं फैलता है और इसे होस्ट फाइल/यूज़र क्रिया की आवश्यकता नहीं होती, जबकि वायरस को होस्ट चाहिए.",
    "Worm = स्वतंत्र, self-replicating; Virus = host पर निर्भर.",
    ["A worm needs no host program and spreads on its own", "A virus spreads on its own, a worm does not", "Both are hardware", "A worm is legitimate software"]);

  b("Paper-II", "Network Security", "Malware", "Trojan", "medium",
    "ट्रोजन हॉर्स (Trojan horse) की विशेषता क्या है?",
    "What is the characteristic of a Trojan horse?",
    ["यह स्वयं की प्रतिलिपि बनाकर तेजी से फैलता है", "यह वैध/उपयोगी सॉफ्टवेयर के रूप में छिपकर हानि पहुँचाता है", "यह एक एंटीवायरस है", "यह एक नेटवर्क केबल है"], 1,
    "Trojan वैध या उपयोगी प्रोग्राम के रूप में प्रकट होता है पर पीछे से हानिकारक कार्य करता है; यह स्वयं की प्रतिलिपि नहीं बनाता.",
    "Trojan = भेष बदलकर आने वाला (disguise); self-replicate नहीं करता.",
    ["It replicates itself and spreads rapidly", "It disguises as legitimate/useful software but causes harm", "It is an antivirus", "It is a network cable"]);

  b("Paper-II", "Network Security", "Malware", "Ransomware", "medium",
    "कौन सा मैलवेयर यूज़र की फाइलों को एन्क्रिप्ट कर उन्हें अनलॉक करने हेतु फिरौती (ransom) माँगता है?",
    "Which malware encrypts a user's files and demands ransom to unlock them?",
    ["Adware", "Ransomware", "Spyware", "Rootkit"], 1,
    "Ransomware फाइलों को एन्क्रिप्ट कर देता है और डिक्रिप्शन कुंजी के बदले फिरौती माँगता है (जैसे WannaCry).",
    "Ransomware = फिरौती (ransom) माँगने वाला.",
    ["Adware", "Ransomware", "Spyware", "Rootkit"]);

  b("Paper-II", "Network Security", "Malware", "Spyware", "medium",
    "कौन सा मैलवेयर यूज़र की जानकारी उसकी जानकारी के बिना गुप्त रूप से एकत्र करता है?",
    "Which malware secretly collects a user's information without their knowledge?",
    ["Spyware", "Firewall", "Antivirus", "Compiler"], 0,
    "Spyware गुप्त रूप से यूज़र की गतिविधि, कीस्ट्रोक व व्यक्तिगत जानकारी एकत्र कर तीसरे पक्ष को भेजता है.",
    "Spyware = जासूसी (spy) करने वाला.",
    ["Spyware", "Firewall", "Antivirus", "Compiler"]);

  b("Paper-II", "Network Security", "Malware", "Rootkit", "hard",
    "कौन सा दुर्भावनापूर्ण सॉफ्टवेयर एडमिनिस्ट्रेटर (root) स्तर की अनधिकृत पहुँच प्राप्त कर स्वयं को छिपाए रखता है?",
    "Which malicious software gains unauthorized administrator (root) level access while hiding itself?",
    ["Adware", "Rootkit", "Worm", "Keylogger"], 1,
    "Rootkit एडमिन/root स्तर की गुप्त पहुँच प्रदान करता है और सिस्टम से अपनी उपस्थिति छिपाए रखता है, जिससे इसे पहचानना कठिन होता है.",
    "Rootkit = admin/root एक्सेस + छिपा रहता है.",
    ["Adware", "Rootkit", "Worm", "Keylogger"]);

  b("Paper-II", "Network Security", "Security", "Phishing", "easy",
    "फ़िशिंग (phishing) क्या है?",
    "What is phishing?",
    ["नेटवर्क केबल का एक प्रकार", "नकली ई-मेल/वेबसाइट द्वारा संवेदनशील जानकारी चुराने का प्रयास", "एक एंटीवायरस स्कैन", "डेटा बैकअप की एक विधि"], 1,
    "Phishing में हमलावर वैध संस्था का रूप धारण कर नकली ई-मेल/वेबसाइट से यूज़रनेम, पासवर्ड, बैंक विवरण आदि चुराने का प्रयास करता है.",
    "Phishing = झाँसा देकर जानकारी चुराना (fake mail/site).",
    ["A type of network cable", "Attempt to steal sensitive info via fake emails/websites", "An antivirus scan", "A data backup method"]);

  b("Paper-II", "Network Security", "Firewall", "Function", "easy",
    "फ़ायरवॉल (firewall) का मुख्य कार्य क्या है?",
    "What is the main function of a firewall?",
    ["डेटा प्रिंट करना", "नियमों के आधार पर आने-जाने वाले नेटवर्क ट्रैफ़िक की निगरानी व नियंत्रण करना", "फाइलों को कम्प्रेस करना", "स्क्रीन ब्राइटनेस बढ़ाना"], 1,
    "फ़ायरवॉल पूर्वनिर्धारित सुरक्षा नियमों के आधार पर incoming व outgoing नेटवर्क ट्रैफ़िक की निगरानी और फ़िल्टरिंग करता है; यह विश्वसनीय व अविश्वसनीय नेटवर्क के बीच अवरोध बनाता है.",
    "Firewall = ट्रैफ़िक का द्वारपाल (barrier).",
    ["Print data", "Monitor and control incoming/outgoing network traffic based on rules", "Compress files", "Increase screen brightness"]);

  b("Paper-II", "Network Security", "Firewall", "Packet Filter", "hard",
    "पैकेट-फ़िल्टरिंग फ़ायरवॉल मुख्यतः OSI मॉडल की किस परत पर कार्य करता है?",
    "A packet-filtering firewall mainly operates at which OSI layer?",
    ["Physical layer", "Network layer", "Session layer", "Presentation layer"], 1,
    "पैकेट-फ़िल्टरिंग फ़ायरवॉल Network layer (और Transport layer) पर IP एड्रेस/पोर्ट के आधार पर पैकेट अनुमति/अस्वीकृत करता है.",
    "Packet filter firewall → Network layer.",
    ["Physical layer", "Network layer", "Session layer", "Presentation layer"]);

  b("Paper-II", "Network Security", "Security", "Symmetric Encryption", "medium",
    "सिमेट्रिक (symmetric) एन्क्रिप्शन की विशेषता क्या है?",
    "What is the characteristic of symmetric encryption?",
    ["एन्क्रिप्शन व डिक्रिप्शन के लिए एक ही कुंजी (key) का उपयोग", "एन्क्रिप्शन व डिक्रिप्शन के लिए अलग-अलग कुंजियाँ", "कोई कुंजी नहीं होती", "केवल पब्लिक कुंजी होती है"], 0,
    "सिमेट्रिक एन्क्रिप्शन में एक ही गुप्त कुंजी से एन्क्रिप्ट व डिक्रिप्ट किया जाता है (जैसे DES, AES); यह तेज़ होता है.",
    "Symmetric = एक ही key (DES/AES).",
    ["Same single key is used for encryption and decryption", "Different keys for encryption and decryption", "No key is used", "Only a public key exists"]);

  b("Paper-II", "Network Security", "Security", "Asymmetric Encryption", "hard",
    "निम्न में से कौन सा असिमेट्रिक (public key) एन्क्रिप्शन एल्गोरिदम है?",
    "Which of the following is an asymmetric (public key) encryption algorithm?",
    ["DES", "AES", "RSA", "3DES"], 2,
    "RSA असिमेट्रिक एल्गोरिदम है जो पब्लिक व प्राइवेट कुंजी जोड़ी का उपयोग करता है. DES, AES, 3DES सिमेट्रिक हैं.",
    "RSA = asymmetric (2 keys); DES/AES = symmetric.",
    ["DES", "AES", "RSA", "3DES"]);

  b("Paper-II", "Network Security", "Security", "Digital Signature", "medium",
    "डिजिटल हस्ताक्षर (digital signature) मुख्यतः क्या सुनिश्चित करता है?",
    "What does a digital signature mainly ensure?",
    ["केवल गति बढ़ाना", "प्रामाणिकता (authentication), अखंडता (integrity) व अ-अस्वीकृति (non-repudiation)", "स्क्रीन रिज़ॉल्यूशन", "डेटा कम्प्रेशन"], 1,
    "डिजिटल हस्ताक्षर प्रेषक की प्रामाणिकता, संदेश की अखंडता और non-repudiation सुनिश्चित करता है; इसे प्रेषक की प्राइवेट कुंजी से बनाया जाता है.",
    "Digital signature = authenticity + integrity + non-repudiation.",
    ["Only increase speed", "Authentication, integrity and non-repudiation", "Screen resolution", "Data compression"]);

  b("Paper-II", "Network Security", "Security", "Hashing", "hard",
    "हैशिंग (hashing) के बारे में कौन सा कथन सही है?",
    "Which statement about hashing is correct?",
    ["यह एक प्रतिवर्ती (reversible) एन्क्रिप्शन है", "यह एक-तरफ़ा (one-way) फ़ंक्शन है जिससे मूल डेटा वापस नहीं पाया जा सकता", "इसमें डिक्रिप्शन कुंजी होती है", "यह डेटा को कम्प्रेस करती है"], 1,
    "Hashing एक one-way फ़ंक्शन है (जैसे MD5, SHA); इससे निश्चित लंबाई का हैश बनता है और मूल डेटा वापस प्राप्त नहीं किया जा सकता. इसका उपयोग integrity व पासवर्ड स्टोरेज में होता है.",
    "Hash = one-way, अपरिवर्तनीय (SHA/MD5).",
    ["It is reversible encryption", "It is a one-way function; original data cannot be recovered", "It has a decryption key", "It compresses data"]);

  b("Paper-II", "Network Security", "Backup", "Full Backup", "easy",
    "फुल बैकअप (full backup) क्या है?",
    "What is a full backup?",
    ["केवल बदले हुए डेटा का बैकअप", "सभी चयनित डेटा की पूर्ण प्रतिलिपि", "कोई बैकअप नहीं", "केवल सिस्टम फाइलों का"], 1,
    "Full backup में सभी चयनित डेटा की पूर्ण प्रतिलिपि बनाई जाती है; यह सबसे अधिक समय व स्थान लेती है पर पुनर्स्थापना (restore) सबसे सरल होती है.",
    "Full = पूरा डेटा हर बार.",
    ["Backup of only changed data", "Complete copy of all selected data", "No backup", "Only system files"]);

  b("Paper-II", "Network Security", "Backup", "Incremental Backup", "hard",
    "इन्क्रीमेंटल बैकअप (incremental backup) में क्या शामिल होता है?",
    "What does an incremental backup include?",
    ["सभी डेटा हर बार", "पिछले किसी भी (full या incremental) बैकअप के बाद बदले हुए डेटा", "केवल हटाई गई फाइलें", "केवल इमेज फाइलें"], 1,
    "Incremental backup पिछले किसी भी बैकअप (full या incremental) के बाद बदले/नए डेटा का ही बैकअप लेता है; यह तेज़ व कम स्थान लेता है पर restore जटिल होता है. Differential में पिछले full के बाद के सभी परिवर्तन शामिल होते हैं.",
    "Incremental = अंतिम बैकअप के बाद के बदलाव; Differential = अंतिम FULL के बाद के बदलाव.",
    ["All data every time", "Data changed since the last backup (full or incremental)", "Only deleted files", "Only image files"]);

  b("Paper-II", "Network Security", "Restore", "Purpose", "easy",
    "रिस्टोर (restore) प्रक्रिया का उद्देश्य क्या है?",
    "What is the purpose of the restore process?",
    ["नया सॉफ्टवेयर इंस्टॉल करना", "बैकअप से डेटा को उसके मूल/कार्यशील स्थान पर पुनः प्राप्त करना", "डेटा को स्थायी रूप से हटाना", "स्क्रीन साफ़ करना"], 1,
    "Restore प्रक्रिया बैकअप में सुरक्षित डेटा को हानि/खराबी के बाद पुनः उसके मूल स्थान पर लाने की क्रिया है.",
    "Backup = सहेजना; Restore = वापस लाना.",
    ["Install new software", "Recover data from backup to its original/working location", "Permanently delete data", "Clear the screen"]);

  b("Paper-II", "Network Security", "Ethical Hacking", "Definition", "easy",
    "एथिकल हैकिंग (ethical hacking) क्या है?",
    "What is ethical hacking?",
    ["बिना अनुमति डेटा चुराना", "अनुमति के साथ सुरक्षा कमजोरियाँ खोजने हेतु किया गया वैध परीक्षण", "वायरस बनाना", "पासवर्ड बेचना"], 1,
    "Ethical hacking (white-hat) में सिस्टम मालिक की अनुमति से सुरक्षा दुर्बलताओं की पहचान की जाती है ताकि उन्हें ठीक किया जा सके.",
    "Ethical/White-hat = अनुमति सहित, रक्षात्मक.",
    ["Stealing data without permission", "Authorized testing to find security weaknesses with permission", "Creating viruses", "Selling passwords"]);

  b("Paper-II", "Network Security", "Ethical Hacking", "Phases", "hard",
    "एथिकल हैकिंग का पहला चरण (phase) कौन सा है?",
    "Which is the first phase of ethical hacking?",
    ["Scanning", "Gaining access", "Reconnaissance (footprinting)", "Covering tracks"], 2,
    "एथिकल हैकिंग के चरण: 1) Reconnaissance (footprinting), 2) Scanning, 3) Gaining Access, 4) Maintaining Access, 5) Covering Tracks/Clearing.",
    "पहला चरण = Reconnaissance (जानकारी जुटाना).",
    ["Scanning", "Gaining access", "Reconnaissance (footprinting)", "Covering tracks"]);

  b("Paper-II", "Network Security", "Ethical Hacking", "Hacker Types", "medium",
    "जो हैकर दुर्भावनापूर्ण इरादे से अवैध रूप से सिस्टम में सेंध लगाता है, उसे क्या कहते हैं?",
    "A hacker who illegally breaks into systems with malicious intent is called?",
    ["White-hat hacker", "Black-hat hacker", "Ethical hacker", "System admin"], 1,
    "Black-hat hacker दुर्भावनापूर्ण इरादे से अवैध रूप से हमला करता है; White-hat वैध/रक्षात्मक; Grey-hat बीच का होता है.",
    "Black-hat = बुरा (illegal); White-hat = अच्छा (ethical).",
    ["White-hat hacker", "Black-hat hacker", "Ethical hacker", "System admin"]);

  b("Paper-II", "Network Security", "Security", "Password Attack", "medium",
    "वह पासवर्ड अटैक जिसमें सभी संभव अक्षर-संयोजनों को क्रमवार आज़माया जाता है, क्या कहलाता है?",
    "The password attack that tries every possible combination of characters is called?",
    ["Dictionary attack", "Brute force attack", "Phishing", "Sniffing"], 1,
    "Brute force attack में हर संभव संयोजन क्रमवार आज़माया जाता है. Dictionary attack में शब्दकोश के शब्द/सामान्य पासवर्ड आज़माए जाते हैं; Hybrid दोनों को मिलाता है.",
    "Brute force = सब संयोजन; Dictionary = शब्दसूची से.",
    ["Dictionary attack", "Brute force attack", "Phishing", "Sniffing"]);

  b("Paper-II", "Network Security", "LAN and WAN Security", "DoS/DDoS", "medium",
    "DoS (Denial of Service) हमले का मुख्य उद्देश्य क्या है?",
    "What is the main objective of a DoS (Denial of Service) attack?",
    ["डेटा एन्क्रिप्ट करना", "सेवा/सर्वर को अत्यधिक ट्रैफ़िक से भरकर वैध उपयोगकर्ताओं हेतु अनुपलब्ध बनाना", "पासवर्ड मजबूत करना", "बैकअप लेना"], 1,
    "DoS हमला सर्वर/नेटवर्क को अत्यधिक अनुरोधों से भरकर वैध उपयोगकर्ताओं के लिए सेवा अनुपलब्ध कर देता है. DDoS में कई सिस्टम से एक साथ हमला होता है.",
    "DoS/DDoS = सेवा को ठप करना (overload).",
    ["Encrypt data", "Overload a service/server so it is unavailable to legitimate users", "Strengthen passwords", "Take backup"]);

  b("Paper-II", "Network Security", "Security", "Authentication", "medium",
    "यूज़रनेम व पासवर्ड द्वारा उपयोगकर्ता की पहचान सत्यापित करने की प्रक्रिया क्या कहलाती है?",
    "The process of verifying a user's identity using username and password is called?",
    ["Authorization", "Authentication", "Encryption", "Compression"], 1,
    "Authentication उपयोगकर्ता की पहचान सत्यापित करने की प्रक्रिया है (आप कौन हैं); Authorization यह तय करता है कि आपको किन संसाधनों की अनुमति है (आपको क्या करने की अनुमति है).",
    "Authentication = कौन हो?; Authorization = क्या अनुमति है?",
    ["Authorization", "Authentication", "Encryption", "Compression"]);

  b("Paper-II", "Network Security", "Virus", "Antivirus", "easy",
    "एंटीवायरस सॉफ्टवेयर का मुख्य कार्य क्या है?",
    "What is the main function of antivirus software?",
    ["इंटरनेट स्पीड बढ़ाना", "वायरस/मैलवेयर का पता लगाना, रोकना व हटाना", "फाइलें प्रिंट करना", "नेटवर्क केबल बनाना"], 1,
    "एंटीवायरस सॉफ्टवेयर वायरस व अन्य मैलवेयर का पता लगाकर उन्हें रोकता और हटाता है; इसे नियमित अपडेट रखना आवश्यक है.",
    "Antivirus = मैलवेयर detect + remove.",
    ["Increase internet speed", "Detect, prevent and remove viruses/malware", "Print files", "Make network cables"]);

  b("Paper-II", "Network Security", "Malware", "Not Matched", "hard",
    "निम्न में से कौन-सा युग्म सही ढंग से सुमेलित नहीं है?",
    "Which of the following pairs is NOT correctly matched?",
    ["Ransomware – फाइलें एन्क्रिप्ट कर फिरौती माँगना", "Spyware – गुप्त रूप से जानकारी एकत्र करना", "Trojan – स्वयं की प्रतिलिपि बनाकर तेजी से फैलना", "Worm – बिना होस्ट के स्वतः फैलना"], 2,
    "Trojan स्वयं की प्रतिलिपि नहीं बनाता; यह वैध सॉफ्टवेयर के भेष में हानि पहुँचाता है. स्व-प्रतिलिपि/तेज़ प्रसार वायरस व वर्म की विशेषता है — इसलिए यह युग्म गलत है.",
    "Trojan self-replicate नहीं करता — यही गलत मिलान है.",
    ["Ransomware – encrypts files and demands ransom", "Spyware – secretly collects information", "Trojan – replicates itself and spreads rapidly", "Worm – spreads on its own without a host"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
