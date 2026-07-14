/* RSSB BCI 2026 - Mega bank part 15: Communication & Network + Network Security (set 2) */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG15";
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

  /* ===================== COMMUNICATION AND NETWORK CONCEPTS (25) ===================== */

  b("Paper-II", "Communication and Network Concepts", "TCP/IP", "Port Numbers", "medium",
    "HTTP (वेब ब्राउज़िंग) सामान्यतः किस डिफ़ॉल्ट पोर्ट नंबर का उपयोग करता है?",
    "Which default port number does HTTP (web browsing) normally use?",
    ["21", "80", "25", "443"], 1,
    "HTTP डिफ़ॉल्ट रूप से पोर्ट 80 का उपयोग करता है, जबकि सुरक्षित HTTPS पोर्ट 443 का.",
    "HTTP=80, HTTPS=443.",
    ["21", "80", "25", "443"]);

  b("Paper-II", "Communication and Network Concepts", "TCP/IP", "Port Numbers", "medium",
    "सुरक्षित वेब संचार (HTTPS) के लिए कौन सा पोर्ट नंबर प्रयुक्त होता है?",
    "Which port number is used for secure web communication (HTTPS)?",
    ["80", "110", "443", "23"], 2,
    "HTTPS (SSL/TLS पर HTTP) पोर्ट 443 का उपयोग करता है.",
    "HTTPS = 443 (S जैसे secure).",
    ["80", "110", "443", "23"]);

  b("Paper-II", "Communication and Network Concepts", "TCP/IP", "Port Numbers", "medium",
    "SMTP (ईमेल भेजने के लिए) कौन से पोर्ट नंबर का उपयोग करता है?",
    "Which port number does SMTP (for sending email) use?",
    ["25", "53", "21", "143"], 0,
    "SMTP (Simple Mail Transfer Protocol) ईमेल भेजने के लिए पोर्ट 25 का उपयोग करता है.",
    "SMTP=25, POP3=110, IMAP=143, DNS=53.",
    ["25", "53", "21", "143"]);

  b("Paper-II", "Communication and Network Concepts", "TCP/IP", "Port Numbers", "hard",
    "निम्न में से कौन सा जोड़ा (protocol - port) सही सुमेलित नहीं है?",
    "Which of the following (protocol - port) pairs is NOT correctly matched?",
    ["FTP - 21", "Telnet - 23", "DNS - 53", "HTTPS - 80"], 3,
    "HTTPS पोर्ट 443 का उपयोग करता है, न कि 80. शेष सभी जोड़े सही हैं: FTP-21, Telnet-23, DNS-53.",
    "80 HTTP का है, HTTPS का नहीं.",
    ["FTP - 21", "Telnet - 23", "DNS - 53", "HTTPS - 80"]);

  b("Paper-II", "Communication and Network Concepts", "TCP/IP", "IP Address Classes", "medium",
    "Class A IPv4 पते के पहले ऑक्टेट की मानक रेंज (सामान्य होस्ट) क्या है?",
    "What is the standard first-octet range (usable hosts) of a Class A IPv4 address?",
    ["1 – 126", "128 – 191", "192 – 223", "224 – 239"], 0,
    "Class A का पहला ऑक्टेट 1–126 होता है (127 loopback के लिए आरक्षित). Class B: 128–191, Class C: 192–223.",
    "A:1-126, B:128-191, C:192-223, D(multicast):224-239.",
    ["1 – 126", "128 – 191", "192 – 223", "224 – 239"]);

  b("Paper-II", "Communication and Network Concepts", "TCP/IP", "Subnet Mask", "medium",
    "Class A नेटवर्क का डिफ़ॉल्ट सबनेट मास्क क्या है?",
    "What is the default subnet mask of a Class A network?",
    ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.255"], 2,
    "Class A का डिफ़ॉल्ट मास्क 255.0.0.0 (/8) है. Class B: 255.255.0.0, Class C: 255.255.255.0.",
    "A=/8, B=/16, C=/24.",
    ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.255"]);

  b("Paper-II", "Communication and Network Concepts", "TCP/IP", "Private IP", "hard",
    "निम्न में से कौन सा निजी (private) IP पता है?",
    "Which of the following is a private IP address?",
    ["8.8.8.8", "192.168.1.10", "172.32.0.1", "126.0.0.1"], 1,
    "192.168.0.0–192.168.255.255 निजी रेंज है. अन्य निजी रेंज: 10.0.0.0/8 और 172.16.0.0–172.31.255.255.",
    "Private: 10.x, 172.16-31.x, 192.168.x.",
    ["8.8.8.8", "192.168.1.10", "172.32.0.1", "126.0.0.1"]);

  b("Paper-II", "Communication and Network Concepts", "Network Layers", "Protocol Mapping", "hard",
    "OSI मॉडल में Ethernet प्रोटोकॉल मुख्यतः किस परत पर कार्य करता है?",
    "In the OSI model, the Ethernet protocol mainly operates at which layer?",
    ["Physical layer", "Data Link layer", "Network layer", "Transport layer"], 1,
    "Ethernet Data Link layer (Layer 2) का प्रोटोकॉल है और MAC एड्रेसिंग व फ्रेमिंग करता है.",
    "Ethernet/MAC → Data Link (L2).",
    ["Physical layer", "Data Link layer", "Network layer", "Transport layer"]);

  b("Paper-II", "Communication and Network Concepts", "Network Layers", "Protocol Mapping", "medium",
    "SMTP, FTP और HTTP प्रोटोकॉल OSI मॉडल की किस परत पर कार्य करते हैं?",
    "SMTP, FTP and HTTP protocols operate at which layer of the OSI model?",
    ["Transport layer", "Network layer", "Application layer", "Session layer"], 2,
    "SMTP, FTP, HTTP जैसे उपयोगकर्ता-सेवा प्रोटोकॉल Application layer (Layer 7) पर कार्य करते हैं.",
    "उपयोगकर्ता सेवाएँ → Application layer.",
    ["Transport layer", "Network layer", "Application layer", "Session layer"]);

  b("Paper-II", "Communication and Network Concepts", "Networking Devices", "MAC Address", "medium",
    "MAC (physical) पता कितने बिट का होता है?",
    "How many bits long is a MAC (physical) address?",
    ["32 बिट / bits", "48 बिट / bits", "64 बिट / bits", "128 बिट / bits"], 1,
    "MAC पता 48 बिट (6 बाइट) का होता है, जिसे प्रायः 12 हेक्साडेसिमल अंकों में लिखा जाता है.",
    "MAC=48 बिट, IPv4=32 बिट, IPv6=128 बिट.",
    ["32 bit", "48 bit", "64 bit", "128 bit"]);

  b("Paper-II", "Communication and Network Concepts", "Networking Devices", "Repeater", "medium",
    "कमजोर सिग्नल को पुनः उत्पन्न (regenerate) व प्रवर्धित (amplify) करने वाला उपकरण, जो Physical layer पर कार्य करता है, कौन सा है?",
    "Which device, working at the Physical layer, regenerates and amplifies a weak signal?",
    ["Router", "Repeater", "Gateway", "Bridge"], 1,
    "Repeater Physical layer (Layer 1) पर कमजोर सिग्नल को पुनर्जीवित कर दूरी बढ़ाता है.",
    "Repeater → Physical layer, सिग्नल regenerate.",
    ["Router", "Repeater", "Gateway", "Bridge"]);

  b("Paper-II", "Communication and Network Concepts", "Networking Devices", "Switch", "medium",
    "एक स्विच (switch) डेटा फ़ॉरवर्ड करने के लिए मुख्यतः किस पते का उपयोग करता है?",
    "A switch mainly uses which address to forward data?",
    ["IP पता / IP address", "MAC पता / MAC address", "पोर्ट नंबर / Port number", "URL"], 1,
    "स्विच Data Link layer पर MAC पते के आधार पर फ्रेम को सही पोर्ट पर फ़ॉरवर्ड करता है; राउटर IP पते का उपयोग करता है.",
    "Switch=MAC (L2), Router=IP (L3).",
    ["IP address", "MAC address", "Port number", "URL"]);

  b("Paper-II", "Communication and Network Concepts", "WAN", "Switching", "hard",
    "टेलीफोन कॉल के लिए एक समर्पित (dedicated) पथ पूरे संचार काल तक आरक्षित रखने वाली तकनीक कौन सी है?",
    "Which technique reserves a dedicated path for the entire duration of communication, as in a telephone call?",
    ["Packet switching / पैकेट स्विचिंग", "Circuit switching / सर्किट स्विचिंग", "Message switching / मैसेज स्विचिंग", "Cell switching / सेल स्विचिंग"], 1,
    "Circuit switching में पूरे संचार के लिए एक समर्पित पथ आरक्षित रहता है (पारंपरिक टेलीफोन). Packet switching में डेटा छोटे पैकेट में स्वतंत्र रूप से भेजा जाता है (इंटरनेट).",
    "Telephone=circuit, Internet=packet.",
    ["Packet switching", "Circuit switching", "Message switching", "Cell switching"]);

  b("Paper-II", "Communication and Network Concepts", "WAN", "Multiplexing", "hard",
    "प्रत्येक सिग्नल को एक भिन्न आवृत्ति (frequency) बैंड आवंटित करने वाली मल्टीप्लेक्सिंग तकनीक कौन सी है?",
    "Which multiplexing technique allots a different frequency band to each signal?",
    ["TDM", "FDM", "Simplex", "PCM"], 1,
    "FDM (Frequency Division Multiplexing) में प्रत्येक सिग्नल को अलग आवृत्ति बैंड मिलता है; TDM में अलग समय-स्लॉट. WDM प्रकाश के लिए FDM का रूप है.",
    "FDM=frequency, TDM=time, WDM=wavelength.",
    ["TDM", "FDM", "Simplex", "PCM"]);

  b("Paper-II", "Communication and Network Concepts", "Network Layers", "Error Detection", "hard",
    "डेटा लिंक परत में एक शक्तिशाली त्रुटि-पहचान (error detection) विधि, जो बहुपद विभाजन (polynomial division) पर आधारित है, कौन सी है?",
    "Which powerful error-detection method at the data link layer is based on polynomial division?",
    ["Parity check / पैरिटी जाँच", "Checksum / चेकसम", "CRC (Cyclic Redundancy Check)", "Hamming code / हैमिंग कोड"], 2,
    "CRC बहुपद विभाजन के आधार पर त्रुटि-पहचान करती है और बर्स्ट त्रुटियों में बहुत प्रभावी है. Parity व checksum सरल हैं; Hamming code त्रुटि सुधार भी करता है.",
    "CRC → polynomial, burst error में प्रभावी.",
    ["Parity check", "Checksum", "CRC (Cyclic Redundancy Check)", "Hamming code"]);

  b("Paper-II", "Communication and Network Concepts", "Introduction to Networks", "Transmission Modes", "medium",
    "वॉकी-टॉकी (walkie-talkie) किस संचरण मोड (transmission mode) का उदाहरण है?",
    "A walkie-talkie is an example of which transmission mode?",
    ["Simplex / सिम्प्लेक्स", "Half duplex / हाफ डुप्लेक्स", "Full duplex / फुल डुप्लेक्स", "Multiplex / मल्टीप्लेक्स"], 1,
    "वॉकी-टॉकी में एक समय पर केवल एक ही पक्ष बोल सकता है (दोनों दिशाओं में पर बारी-बारी), अतः यह Half duplex है. Simplex एकदिशीय (TV/keyboard), Full duplex एक साथ दोनों दिशा (टेलीफोन).",
    "Simplex=1 दिशा, Half=बारी-बारी, Full=एक साथ दोनों.",
    ["Simplex", "Half duplex", "Full duplex", "Multiplex"]);

  b("Paper-II", "Communication and Network Concepts", "Introduction to Networks", "Baud vs Bit Rate", "hard",
    "प्रति सेकंड संकेत (signal) परिवर्तनों या प्रतीकों (symbols) की संख्या को क्या कहते हैं?",
    "The number of signal changes or symbols per second is called what?",
    ["बिट रेट / Bit rate", "बॉड रेट / Baud rate", "बैंडविड्थ / Bandwidth", "थ्रूपुट / Throughput"], 1,
    "Baud rate = प्रति सेकंड सिग्नल/प्रतीक परिवर्तन. Bit rate = प्रति सेकंड बिट. यदि प्रत्येक प्रतीक 1 से अधिक बिट रखता है तो bit rate > baud rate.",
    "Baud=symbols/sec, Bit rate=bits/sec.",
    ["Bit rate", "Baud rate", "Bandwidth", "Throughput"]);

  b("Paper-II", "Communication and Network Concepts", "LAN", "Topology", "medium",
    "किस टोपोलॉजी में सभी नोड एक केंद्रीय हब/स्विच से जुड़े होते हैं और एक नोड की विफलता शेष नेटवर्क को प्रभावित नहीं करती?",
    "In which topology are all nodes connected to a central hub/switch, and failure of one node does not affect the rest?",
    ["Bus / बस", "Ring / रिंग", "Star / स्टार", "Mesh / मेश"], 2,
    "Star topology में सभी नोड केंद्रीय हब से जुड़ते हैं; एक नोड/लिंक विफल हो तो बाकी चलता रहता है, पर हब विफल हो तो पूरा नेटवर्क ठप हो जाता है.",
    "Star=केंद्रीय हब; एक नोड फेल पर बाकी ठीक.",
    ["Bus", "Ring", "Star", "Mesh"]);

  b("Paper-II", "Communication and Network Concepts", "LAN", "Topology", "hard",
    "5 नोड वाली पूर्ण mesh टोपोलॉजी में कुल कितने केबल (लिंक) आवश्यक होंगे?",
    "How many cables (links) are needed in a fully connected mesh topology with 5 nodes?",
    ["5", "10", "20", "25"], 1,
    "Mesh में लिंक = n(n-1)/2 = 5×4/2 = 10.",
    "Mesh links = n(n-1)/2.",
    ["5", "10", "20", "25"]);

  b("Paper-II", "Communication and Network Concepts", "Introduction to Networks", "Guided Media", "medium",
    "लंबी दूरी की अत्यधिक तेज़ बैकबोन के लिए कौन सा फाइबर (fibre) प्रकार, जिसमें एक ही प्रकाश किरण-पथ होता है, उपयुक्त है?",
    "Which fibre type, having a single light path, is suitable for long-distance high-speed backbones?",
    ["Multi-mode fibre / मल्टी-मोड", "Single-mode fibre / सिंगल-मोड", "Coaxial cable / को-एक्सियल", "Twisted pair / ट्विस्टेड पेयर"], 1,
    "Single-mode fibre में एकल किरण-पथ होने से dispersion कम और दूरी अधिक; multi-mode कम दूरी हेतु.",
    "Single-mode=लंबी दूरी, multi-mode=कम दूरी.",
    ["Multi-mode fibre", "Single-mode fibre", "Coaxial cable", "Twisted pair"]);

  b("Paper-II", "Communication and Network Concepts", "Introduction to Networks", "Network Types", "medium",
    "पूरे शहर (city) में फैले नेटवर्क को क्या कहते हैं?",
    "A network spread across an entire city is called what?",
    ["PAN", "LAN", "MAN", "WAN"], 2,
    "MAN (Metropolitan Area Network) एक शहर के आकार का नेटवर्क है (जैसे केबल TV नेटवर्क). PAN बहुत छोटा, LAN भवन/परिसर, WAN देश/विश्व स्तर पर.",
    "PAN<LAN<MAN(शहर)<WAN.",
    ["PAN", "LAN", "MAN", "WAN"]);

  b("Paper-II", "Communication and Network Concepts", "Mobile Communication", "Wireless Range", "medium",
    "ब्लूटूथ (Bluetooth) किस IEEE मानक और अनुमानित रेंज से संबंधित है?",
    "Bluetooth is associated with which IEEE standard and approximate range?",
    ["IEEE 802.11, ~100 मीटर", "IEEE 802.15, ~10 मीटर", "IEEE 802.3, ~1 किमी", "IEEE 802.16, ~50 किमी"], 1,
    "Bluetooth IEEE 802.15.1 पर आधारित है और सामान्य रेंज लगभग 10 मीटर है. Wi-Fi=802.11, Ethernet=802.3.",
    "Bluetooth=802.15 (~10m), Wi-Fi=802.11.",
    ["IEEE 802.11, ~100 m", "IEEE 802.15, ~10 m", "IEEE 802.3, ~1 km", "IEEE 802.16, ~50 km"]);

  b("Paper-II", "Communication and Network Concepts", "Mobile Communication", "Generations", "medium",
    "मोबाइल संचार की पहली पीढ़ी (1G) की मुख्य विशेषता क्या थी?",
    "What was the main characteristic of the first generation (1G) of mobile communication?",
    ["एनालॉग वॉइस / Analog voice only", "डिजिटल वॉइस व SMS / Digital voice & SMS", "मोबाइल ब्रॉडबैंड / Mobile broadband", "अल्ट्रा-लो लेटेंसी / Ultra-low latency"], 0,
    "1G केवल एनालॉग वॉइस था; 2G डिजिटल वॉइस व SMS (GSM); 3G/4G डेटा-ब्रॉडबैंड; 5G अल्ट्रा-लो लेटेंसी.",
    "1G=analog, 2G=digital+SMS, 4G=broadband, 5G=low latency.",
    ["Analog voice only", "Digital voice & SMS", "Mobile broadband", "Ultra-low latency"]);

  b("Paper-II", "Communication and Network Concepts", "TCP/IP", "URL", "medium",
    "URL 'https://www.example.com/index.html' में 'https' भाग क्या दर्शाता है?",
    "In the URL 'https://www.example.com/index.html', what does the 'https' part represent?",
    ["डोमेन नाम / Domain name", "प्रोटोकॉल / Protocol", "फ़ाइल पथ / File path", "पोर्ट / Port"], 1,
    "URL में पहला भाग protocol (scheme) होता है (https), उसके बाद domain name (www.example.com) और फिर path (/index.html).",
    "URL = protocol :// domain / path.",
    ["Domain name", "Protocol", "File path", "Port"]);

  /* ===================== NETWORK SECURITY (25) ===================== */

  b("Paper-II", "Network Security", "Security", "CIA Triad", "medium",
    "सूचना सुरक्षा के CIA त्रिकोण (triad) में 'C' किसे दर्शाता है?",
    "In the CIA triad of information security, what does 'C' stand for?",
    ["Control", "Confidentiality / गोपनीयता", "Compression", "Compliance"], 1,
    "CIA = Confidentiality (गोपनीयता), Integrity (अखंडता), Availability (उपलब्धता). ये सूचना सुरक्षा के तीन मूल स्तंभ हैं.",
    "CIA = Confidentiality, Integrity, Availability.",
    ["Control", "Confidentiality", "Compression", "Compliance"]);

  b("Paper-II", "Network Security", "Security", "CIA Triad", "hard",
    "यह सुनिश्चित करना कि डेटा में अनधिकृत रूप से परिवर्तन (alteration) न हो, CIA त्रिकोण का कौन सा घटक है?",
    "Ensuring that data is not altered in an unauthorized way is which component of the CIA triad?",
    ["Confidentiality / गोपनीयता", "Integrity / अखंडता", "Availability / उपलब्धता", "Authentication / प्रमाणीकरण"], 1,
    "Integrity (अखंडता) यह सुनिश्चित करती है कि डेटा सही और अपरिवर्तित रहे. Hashing का उपयोग integrity जाँचने में होता है.",
    "Integrity = डेटा में छेड़छाड़ न हो.",
    ["Confidentiality", "Integrity", "Availability", "Authentication"]);

  b("Paper-II", "Network Security", "Security", "Cryptography", "medium",
    "क्रिप्टोग्राफी में एन्क्रिप्ट किए गए (अपठनीय) संदेश को क्या कहते हैं?",
    "In cryptography, what is an encrypted (unreadable) message called?",
    ["Plaintext / प्लेनटेक्स्ट", "Ciphertext / साइफरटेक्स्ट", "Key / कुंजी", "Hash / हैश"], 1,
    "मूल पठनीय संदेश Plaintext है; एन्क्रिप्शन के बाद बना अपठनीय रूप Ciphertext कहलाता है.",
    "Plaintext →(encrypt)→ Ciphertext.",
    ["Plaintext", "Ciphertext", "Key", "Hash"]);

  b("Paper-II", "Network Security", "Security", "Symmetric Key", "hard",
    "DES (Data Encryption Standard) एल्गोरिथम की प्रभावी कुंजी लंबाई (key length) कितनी है?",
    "What is the effective key length of the DES (Data Encryption Standard) algorithm?",
    ["40 बिट / bit", "56 बिट / bit", "128 बिट / bit", "256 बिट / bit"], 1,
    "DES की प्रभावी कुंजी 56 बिट है (64-बिट में 8 पैरिटी बिट). कम लंबाई के कारण इसे AES (128/192/256 बिट) से बदला गया.",
    "DES=56-बिट, AES=128/192/256-बिट.",
    ["40 bit", "56 bit", "128 bit", "256 bit"]);

  b("Paper-II", "Network Security", "Security", "Key Exchange", "hard",
    "असुरक्षित चैनल पर दो पक्षों के बीच सुरक्षित रूप से साझा गुप्त कुंजी स्थापित करने की विधि कौन सी है?",
    "Which method securely establishes a shared secret key between two parties over an insecure channel?",
    ["RSA हस्ताक्षर / RSA signature", "Diffie-Hellman", "MD5", "Steganography"], 1,
    "Diffie-Hellman की-एक्सचेंज एल्गोरिथम असुरक्षित चैनल पर साझा गुप्त कुंजी स्थापित करने देती है, बिना कुंजी को सीधे भेजे.",
    "Diffie-Hellman = secure key exchange.",
    ["RSA signature", "Diffie-Hellman", "MD5", "Steganography"]);

  b("Paper-II", "Network Security", "Security", "Asymmetric Key", "hard",
    "पब्लिक-की क्रिप्टोग्राफी में संदेश की गोपनीयता के लिए संदेश किसकी कुंजी से एन्क्रिप्ट किया जाता है?",
    "In public-key cryptography, to keep a message confidential, it is encrypted with whose key?",
    ["प्रेषक की प्राइवेट की / Sender's private key", "प्राप्तकर्ता की पब्लिक की / Receiver's public key", "प्राप्तकर्ता की प्राइवेट की / Receiver's private key", "एक साझा गुप्त की / A shared secret key"], 1,
    "गोपनीयता हेतु प्रेषक प्राप्तकर्ता की पब्लिक की से एन्क्रिप्ट करता है; केवल प्राप्तकर्ता अपनी प्राइवेट की से डिक्रिप्ट कर सकता है. (डिजिटल हस्ताक्षर में इसके विपरीत प्रेषक की प्राइवेट की प्रयुक्त होती है.)",
    "Encrypt = receiver की public key; Sign = sender की private key.",
    ["Sender's private key", "Receiver's public key", "Receiver's private key", "A shared secret key"]);

  b("Paper-II", "Network Security", "Security", "Hashing", "medium",
    "निम्न में से कौन सा एक हैशिंग (hashing) एल्गोरिथम है?",
    "Which of the following is a hashing algorithm?",
    ["AES", "RSA", "SHA-256", "DES"], 2,
    "SHA-256 एक हैश फ़ंक्शन है (integrity हेतु). AES व DES symmetric एन्क्रिप्शन, RSA asymmetric एन्क्रिप्शन हैं.",
    "MD5/SHA = hashing; AES/DES/RSA = encryption.",
    ["AES", "RSA", "SHA-256", "DES"]);

  b("Paper-II", "Network Security", "Security", "Digital Certificate", "hard",
    "डिजिटल प्रमाणपत्र (digital certificate) जारी करने और किसी की पब्लिक की को सत्यापित करने वाली विश्वसनीय संस्था कौन है?",
    "Which trusted entity issues digital certificates and validates a public key's ownership?",
    ["ISP", "Certificate Authority (CA)", "DNS सर्वर / DNS server", "Firewall"], 1,
    "Certificate Authority (CA) डिजिटल प्रमाणपत्र जारी करती है और PKI में पब्लिक की के स्वामित्व की पुष्टि करती है.",
    "CA = certificates जारी करती है (PKI).",
    ["ISP", "Certificate Authority (CA)", "DNS server", "Firewall"]);

  b("Paper-II", "Network Security", "Security", "SSL/TLS", "medium",
    "वेब ब्राउज़र और सर्वर के बीच डेटा को एन्क्रिप्ट करने वाला, HTTPS का आधार बनने वाला प्रोटोकॉल कौन सा है?",
    "Which protocol encrypts data between a web browser and server, forming the basis of HTTPS?",
    ["FTP", "SSL/TLS", "SNMP", "ARP"], 1,
    "SSL/TLS ब्राउज़र और सर्वर के बीच संचार एन्क्रिप्ट करता है; HTTP + TLS = HTTPS.",
    "HTTPS = HTTP over TLS.",
    ["FTP", "SSL/TLS", "SNMP", "ARP"]);

  b("Paper-II", "Network Security", "Security", "Steganography", "hard",
    "किसी गुप्त संदेश को एक सामान्य चित्र (image) या फ़ाइल के भीतर इस प्रकार छिपाना कि उसके अस्तित्व का ही पता न चले, क्या कहलाता है?",
    "Hiding a secret message inside an ordinary image or file so that its very existence is concealed is called what?",
    ["Cryptography / क्रिप्टोग्राफी", "Steganography / स्टेग्नोग्राफी", "Hashing / हैशिंग", "Compression / संपीड़न"], 1,
    "Steganography संदेश के अस्तित्व को ही छिपाती है (जैसे चित्र में छिपाना), जबकि cryptography संदेश को अपठनीय बनाती है पर उसका अस्तित्व दिखता है.",
    "Steganography = अस्तित्व छिपाना; cryptography = अर्थ छिपाना.",
    ["Cryptography", "Steganography", "Hashing", "Compression"]);

  b("Paper-II", "Network Security", "Malware", "Logic Bomb", "hard",
    "वह दुर्भावनापूर्ण कोड जो किसी विशिष्ट शर्त या तिथि पूरी होने पर सक्रिय होता है, क्या कहलाता है?",
    "Malicious code that activates when a specific condition or date is met is called what?",
    ["Logic bomb / लॉजिक बम", "Adware / एडवेयर", "Keylogger / कीलॉगर", "Botnet / बॉटनेट"], 0,
    "Logic bomb तब तक निष्क्रिय रहता है जब तक कोई पूर्वनिर्धारित शर्त/तिथि पूरी न हो, फिर हानिकारक क्रिया करता है.",
    "Logic bomb = शर्त/तिथि पर 'फटता' है.",
    ["Logic bomb", "Adware", "Keylogger", "Botnet"]);

  b("Paper-II", "Network Security", "Malware", "Keylogger", "medium",
    "उपयोगकर्ता द्वारा दबाई गई कुंजियों (keystrokes) को गुप्त रूप से रिकॉर्ड कर पासवर्ड चुराने वाला मैलवेयर कौन सा है?",
    "Which malware secretly records a user's keystrokes to steal passwords?",
    ["Adware / एडवेयर", "Keylogger / कीलॉगर", "Ransomware / रैंसमवेयर", "Rootkit / रूटकिट"], 1,
    "Keylogger प्रत्येक की-प्रेस को रिकॉर्ड करता है जिससे पासवर्ड व संवेदनशील डेटा चुराया जा सकता है.",
    "Keylogger = keystrokes रिकॉर्ड.",
    ["Adware", "Keylogger", "Ransomware", "Rootkit"]);

  b("Paper-II", "Network Security", "Malware", "Botnet", "hard",
    "हमलावर द्वारा दूर से नियंत्रित, संक्रमित कंप्यूटरों (bots/zombies) के नेटवर्क को क्या कहते हैं?",
    "A network of infected computers (bots/zombies) remotely controlled by an attacker is called what?",
    ["Botnet / बॉटनेट", "Firewall / फ़ायरवॉल", "Honeypot / हनीपॉट", "Sandbox / सैंडबॉक्स"], 0,
    "Botnet संक्रमित मशीनों का समूह है जिसे हमलावर (bot-master) नियंत्रित करता है, प्रायः DDoS व स्पैम के लिए.",
    "Botnet = bots/zombies का नेटवर्क.",
    ["Botnet", "Firewall", "Honeypot", "Sandbox"]);

  b("Paper-II", "Network Security", "Security", "MITM Attack", "hard",
    "वह हमला जिसमें हमलावर दो पक्षों के बीच संचार को चुपके से अवरोधित (intercept) कर बीच में बैठ जाता है, क्या कहलाता है?",
    "An attack in which the attacker secretly intercepts and sits between the communication of two parties is called what?",
    ["Man-in-the-Middle (MITM)", "SQL injection", "Brute force", "Phishing"], 0,
    "Man-in-the-Middle (MITM) हमले में हमलावर दो पक्षों के बीच बैठकर संदेश पढ़/बदल सकता है, प्रायः बिना उनकी जानकारी के.",
    "MITM = बीच में बैठकर सुनना/बदलना.",
    ["Man-in-the-Middle (MITM)", "SQL injection", "Brute force", "Phishing"]);

  b("Paper-II", "Network Security", "Security", "SQL Injection", "hard",
    "वेब फॉर्म के इनपुट फ़ील्ड में दुर्भावनापूर्ण डेटाबेस क्वेरी डालकर डेटाबेस से छेड़छाड़ करने वाला हमला कौन सा है?",
    "Which attack manipulates a database by inserting malicious database queries into a web form's input field?",
    ["Cross-site scripting (XSS)", "SQL injection", "DoS", "Sniffing"], 1,
    "SQL injection में हमलावर इनपुट फ़ील्ड के माध्यम से दुर्भावनापूर्ण SQL क्वेरी डालकर डेटाबेस पढ़/बदल सकता है.",
    "SQLi = इनपुट में SQL कोड डालना.",
    ["Cross-site scripting (XSS)", "SQL injection", "DoS", "Sniffing"]);

  b("Paper-II", "Network Security", "Security", "Vishing", "medium",
    "फ़ोन कॉल (voice) के माध्यम से गोपनीय जानकारी ठगने वाले हमले को क्या कहते हैं?",
    "An attack that tricks victims into revealing confidential information via a phone call (voice) is called what?",
    ["Phishing / फ़िशिंग", "Vishing / विशिंग", "Smishing / स्मिशिंग", "Spoofing / स्पूफिंग"], 1,
    "Vishing = Voice + phishing (फ़ोन कॉल द्वारा). Smishing = SMS द्वारा; Phishing सामान्यतः ईमेल/नकली वेबसाइट द्वारा.",
    "Vishing=voice call, Smishing=SMS, Phishing=email.",
    ["Phishing", "Vishing", "Smishing", "Spoofing"]);

  b("Paper-II", "Network Security", "Security", "Social Engineering", "medium",
    "तकनीकी हैकिंग के बजाय लोगों को धोखा/हेरफेर कर गोपनीय जानकारी उगलवाने की तकनीक क्या कहलाती है?",
    "The technique of manipulating or deceiving people (rather than technical hacking) to reveal confidential information is called what?",
    ["Social engineering / सोशल इंजीनियरिंग", "Encryption / एन्क्रिप्शन", "Firewalling / फ़ायरवॉलिंग", "Patching / पैचिंग"], 0,
    "Social engineering मानव मनोविज्ञान का शोषण करती है (जैसे फ़िशिंग, बहाना बनाना), न कि तकनीकी कमजोरी का.",
    "Social engineering = मानव को हैक करना.",
    ["Social engineering", "Encryption", "Firewalling", "Patching"]);

  b("Paper-II", "Network Security", "Security", "Zero-day", "hard",
    "'ज़ीरो-डे (zero-day)' भेद्यता (vulnerability) का क्या अर्थ है?",
    "What does a 'zero-day' vulnerability mean?",
    ["एक ऐसी खामी जिसका पैच अभी उपलब्ध नहीं है / A flaw with no available patch yet", "पुरानी, पैच की जा चुकी खामी / An old, already-patched flaw", "केवल शून्य दिन चलने वाला वायरस / A virus that runs for zero days", "एक हार्डवेयर विफलता / A hardware failure"], 0,
    "Zero-day वह भेद्यता है जो विक्रेता को अज्ञात/नई है और जिसके लिए अभी कोई पैच नहीं है, अतः हमलावर उसका शोषण कर सकते हैं.",
    "Zero-day = पैच बनाने के लिए 0 दिन मिले, अज्ञात खामी.",
    ["A flaw with no available patch yet", "An old, already-patched flaw", "A virus that runs for zero days", "A hardware failure"]);

  b("Paper-II", "Network Security", "Firewall", "Firewall Types", "hard",
    "वह फ़ायरवॉल जो कनेक्शन की स्थिति (state) का ट्रैक रखकर पैकेट को किसी सक्रिय कनेक्शन के संदर्भ में जाँचता है, कौन सा है?",
    "Which firewall keeps track of the state of connections and inspects packets in the context of an active connection?",
    ["Packet-filter firewall / पैकेट-फ़िल्टर", "Stateful inspection firewall / स्टेटफुल", "Proxy (application) firewall / प्रॉक्सी", "Hardware bridge / हार्डवेयर ब्रिज"], 1,
    "Stateful inspection firewall कनेक्शन की स्थिति (state table) बनाए रखकर पैकेट को संदर्भ में जाँचता है; साधारण packet-filter प्रत्येक पैकेट को स्वतंत्र रूप से देखता है; proxy firewall एप्लिकेशन-स्तर पर मध्यस्थ होता है.",
    "Stateful = connection state याद रखता है.",
    ["Packet-filter firewall", "Stateful inspection firewall", "Proxy (application) firewall", "Hardware bridge"]);

  b("Paper-II", "Network Security", "Security", "IDS vs IPS", "hard",
    "IDS (Intrusion Detection System) और IPS (Intrusion Prevention System) में मूल अंतर क्या है?",
    "What is the basic difference between an IDS and an IPS?",
    ["IDS केवल पहचान/चेतावनी देता है, IPS हमले को रोकता भी है / IDS only detects & alerts, IPS also blocks the attack", "IDS हमले रोकता है, IPS केवल लॉग करता है / IDS blocks, IPS only logs", "दोनों समान हैं / Both are identical", "IDS एक एंटीवायरस है / IDS is an antivirus"], 0,
    "IDS संदिग्ध गतिविधि की पहचान कर चेतावनी देता है (passive); IPS पहचान के साथ-साथ ट्रैफ़िक को सक्रिय रूप से रोक भी सकता है.",
    "IDS = detect/alert, IPS = detect + prevent/block.",
    ["IDS only detects & alerts, IPS also blocks the attack", "IDS blocks, IPS only logs", "Both are identical", "IDS is an antivirus"]);

  b("Paper-II", "Network Security", "Security", "VPN", "medium",
    "सार्वजनिक इंटरनेट पर एक सुरक्षित, एन्क्रिप्टेड 'सुरंग' (tunnel) बनाकर निजी नेटवर्क तक पहुँच देने वाली तकनीक कौन सी है?",
    "Which technology creates a secure, encrypted 'tunnel' over the public Internet to access a private network?",
    ["VPN (Virtual Private Network)", "DNS", "FTP", "SMTP"], 0,
    "VPN सार्वजनिक इंटरनेट पर एन्क्रिप्टेड सुरंग बनाकर सुरक्षित रूप से निजी नेटवर्क से जोड़ता है.",
    "VPN = encrypted tunnel over Internet.",
    ["VPN (Virtual Private Network)", "DNS", "FTP", "SMTP"]);

  b("Paper-II", "Network Security", "Security", "Authentication Factors", "hard",
    "बायोमेट्रिक (फ़िंगरप्रिंट/चेहरा) प्रमाणीकरण किस श्रेणी (authentication factor) में आता है?",
    "Biometric (fingerprint/face) authentication belongs to which category of authentication factor?",
    ["Something you know / जो आप जानते हैं", "Something you have / जो आपके पास है", "Something you are / जो आप हैं", "Somewhere you are / जहाँ आप हैं"], 2,
    "बायोमेट्रिक 'something you are' है (शारीरिक विशेषता). पासवर्ड 'something you know', टोकन/OTP डिवाइस 'something you have'.",
    "Password=know, Token=have, Biometric=are.",
    ["Something you know", "Something you have", "Something you are", "Somewhere you are"]);

  b("Paper-II", "Network Security", "Backup", "RAID", "hard",
    "कौन सा RAID स्तर डेटा को दो डिस्क पर पूर्णतः प्रतिलिपि (mirroring) करके redundancy देता है?",
    "Which RAID level provides redundancy by fully mirroring data across two disks?",
    ["RAID 0", "RAID 1", "RAID 5", "RAID 6"], 1,
    "RAID 1 (mirroring) डेटा की पूर्ण प्रतिलिपि रखता है. RAID 0 केवल striping (कोई redundancy नहीं). RAID 5 parity के साथ striping.",
    "RAID 0=striping, RAID 1=mirroring, RAID 5=striping+parity.",
    ["RAID 0", "RAID 1", "RAID 5", "RAID 6"]);

  b("Paper-II", "Network Security", "Ethical Hacking", "Phases", "hard",
    "एथिकल हैकिंग के पाँच चरणों में अंतिम चरण कौन सा है?",
    "Which is the last of the five phases of ethical hacking?",
    ["Reconnaissance / टोह", "Scanning / स्कैनिंग", "Gaining access / पहुँच प्राप्त करना", "Covering tracks / निशान मिटाना"], 3,
    "चरण क्रम: Reconnaissance → Scanning → Gaining Access → Maintaining Access → Covering Tracks. अंतिम चरण अपने निशान मिटाना (covering tracks) है.",
    "अंतिम चरण = Covering tracks (निशान मिटाना).",
    ["Reconnaissance", "Scanning", "Gaining access", "Covering tracks"]);

  b("Paper-II", "Network Security", "Ethical Hacking", "Hat Types", "medium",
    "अनुमति (permission) लेकर सुरक्षा जाँच हेतु सिस्टम में सेंध लगाने वाला हैकर किस श्रेणी का है?",
    "A hacker who breaks into systems with permission, for security testing, belongs to which category?",
    ["White hat / व्हाइट हैट", "Black hat / ब्लैक हैट", "Grey hat / ग्रे हैट", "Script kiddie / स्क्रिप्ट किडी"], 0,
    "White hat हैकर वैध अनुमति से सुरक्षा परीक्षण करता है. Black hat दुर्भावनापूर्ण/अवैध, Grey hat बीच का (बिना अनुमति पर बिना बुरे इरादे).",
    "White=अनुमति सहित (नैतिक), Black=अवैध.",
    ["White hat", "Black hat", "Grey hat", "Script kiddie"]);

  b("Paper-II", "Network Security", "Security", "Cyber Law", "medium",
    "भारत में इलेक्ट्रॉनिक लेन-देन और साइबर अपराध से संबंधित प्रमुख कानून कौन सा है?",
    "Which is the principal law in India dealing with electronic transactions and cybercrime?",
    ["सूचना प्रौद्योगिकी अधिनियम 2000 / IT Act 2000", "उपभोक्ता संरक्षण अधिनियम 1986 / Consumer Protection Act 1986", "कॉपीराइट अधिनियम 1957 / Copyright Act 1957", "RTI अधिनियम 2005 / RTI Act 2005"], 0,
    "सूचना प्रौद्योगिकी अधिनियम, 2000 (IT Act 2000) भारत में साइबर अपराध व इलेक्ट्रॉनिक लेन-देन को नियंत्रित करने वाला मुख्य कानून है.",
    "साइबर कानून भारत = IT Act 2000.",
    ["IT Act 2000", "Consumer Protection Act 1986", "Copyright Act 1957", "RTI Act 2005"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
