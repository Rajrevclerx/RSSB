/* RSSB BCI 2026 - Mega bank part 05: Programming Fundamentals + Fundamentals of Computer */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG05";
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

  /* ---------- C : Data Types & Format Specifiers ---------- */
  b("Paper-II", "Programming Fundamentals", "Data Types", "C data types", "easy",
    "C भाषा में निम्न में से कौन-सा एक मान्य (valid) डेटा टाइप नहीं है?",
    "Which of the following is NOT a valid data type in C language?",
    ["int", "float", "char", "real"], 3,
    "C में मूल डेटा टाइप int, float, double, char व void हैं। 'real' नाम का कोई डेटा टाइप C में नहीं होता।",
    "याद रखें: C के 4 मूल टाइप - int, float, double, char.",
    ["int", "float", "char", "real"]);

  b("Paper-II", "Programming Fundamentals", "Data Types", "float specifier", "easy",
    "C में float मान को printf से प्रिंट करने के लिए कौन-सा format specifier प्रयोग होता है?",
    "Which format specifier is used in C to print a float value with printf?",
    ["%d", "%c", "%f", "%s"], 2,
    "%f का प्रयोग float/double मान प्रिंट करने के लिए होता है; %d पूर्णांक, %c कैरेक्टर, %s स्ट्रिंग के लिए।",
    "f = float → %f.",
    ["%d", "%c", "%f", "%s"]);

  b("Paper-II", "Programming Fundamentals", "Data Types", "char size", "medium",
    "C में सामान्यतः char डेटा टाइप कितने बाइट का होता है?",
    "In C, how many bytes does a char data type usually occupy?",
    ["1 बाइट", "2 बाइट", "4 बाइट", "8 बाइट"], 0,
    "char हमेशा 1 बाइट का होता है (sizeof(char) == 1 गारंटीड)।",
    "char = 1 byte (हमेशा).",
    ["1 byte", "2 bytes", "4 bytes", "8 bytes"]);

  /* ---------- C : Pointers ---------- */
  b("Paper-II", "Programming Fundamentals", "C", "pointer concept", "easy",
    "C में pointer एक ऐसा वेरिएबल है जो संग्रहित करता है:",
    "In C, a pointer is a variable that stores:",
    ["एक मान (value)", "किसी अन्य वेरिएबल का पता (address)", "एक स्ट्रिंग", "एक फंक्शन का नाम"], 1,
    "Pointer किसी अन्य वेरिएबल का मेमोरी एड्रेस संग्रहित करता है, स्वयं मान नहीं।",
    "Pointer = address रखता है.",
    ["a value", "the address of another variable", "a string", "a function name"]);

  b("Paper-II", "Programming Fundamentals", "C", "address operator", "medium",
    "C में किसी वेरिएबल का मेमोरी एड्रेस प्राप्त करने के लिए कौन-सा ऑपरेटर प्रयोग होता है?",
    "Which operator is used in C to obtain the memory address of a variable?",
    ["*", "&", "#", "%"], 1,
    "& (address-of operator) किसी वेरिएबल का एड्रेस देता है; * (dereference) एड्रेस पर संग्रहित मान देता है।",
    "& = address, * = value at address.",
    ["*", "&", "#", "%"]);

  /* ---------- C : Operators & precedence ---------- */
  b("Paper-II", "Programming Fundamentals", "Operators", "modulus", "easy",
    "C में निम्न कोड का आउटपुट क्या होगा? int a=10,b=3; printf(\"%d\", a%b);",
    "What is the output? int a=10,b=3; printf(\"%d\", a%b);",
    ["3", "1", "0", "10"], 1,
    "% (modulus) भाग का शेषफल देता है। 10 को 3 से भाग देने पर शेष = 1।",
    "% = शेषफल (remainder).",
    ["3", "1", "0", "10"]);

  b("Paper-II", "Programming Fundamentals", "Operators", "precedence", "medium",
    "C में एक्सप्रेशन 2 + 3 * 4 का मान क्या होगा?",
    "What is the value of the expression 2 + 3 * 4 in C?",
    ["20", "14", "24", "9"], 1,
    "गुणन (*) की प्राथमिकता जोड़ (+) से अधिक है, अतः पहले 3*4=12, फिर 2+12=14।",
    "* पहले, + बाद में.",
    ["20", "14", "24", "9"]);

  b("Paper-II", "Programming Fundamentals", "Operators", "ternary output", "medium",
    "C कोड का आउटपुट: int a=5; printf(\"%d\", a>3 ? 100 : 200);",
    "Output of C code: int a=5; printf(\"%d\", a>3 ? 100 : 200);",
    ["200", "100", "5", "3"], 1,
    "टर्नरी ?: में शर्त a>3 सत्य है (5>3), अतः पहला मान 100 प्रिंट होगा।",
    "शर्त सत्य → ? के बाद वाला.",
    ["200", "100", "5", "3"]);

  /* ---------- C : Control statements & loops ---------- */
  b("Paper-II", "Programming Fundamentals", "Loops", "for loop end value", "medium",
    "C कोड का आउटपुट: int i; for(i=0;i<3;i++); printf(\"%d\", i);",
    "Output of C code: int i; for(i=0;i<3;i++); printf(\"%d\", i);",
    ["2", "3", "0", "4"], 1,
    "लूप i=0,1,2 पर चलता है; i=3 पर शर्त झूठी होकर रुकता है, अतः i का अंतिम मान 3 प्रिंट होता है।",
    "लूप शर्त झूठी होने पर i एक अधिक होता है.",
    ["2", "3", "0", "4"]);

  b("Paper-II", "Programming Fundamentals", "Control Statements", "break", "easy",
    "C में break स्टेटमेंट का प्रमुख कार्य क्या है?",
    "What is the main function of the break statement in C?",
    ["अगले iteration पर जाना", "लूप/switch को तुरंत समाप्त करना", "फंक्शन कॉल करना", "मान लौटाना"], 1,
    "break लूप या switch को तुरंत समाप्त कर नियंत्रण उसके बाद वाले कथन पर भेजता है।",
    "break = बाहर निकलो, continue = अगला चक्र.",
    ["move to next iteration", "immediately terminate the loop/switch", "call a function", "return a value"]);

  b("Paper-II", "Programming Fundamentals", "Loops", "entry vs exit", "medium",
    "निम्न में से कौन-सा exit-controlled (post-tested) लूप है?",
    "Which of the following is an exit-controlled (post-tested) loop?",
    ["for", "while", "do-while", "if-else"], 2,
    "do-while में शर्त शरीर (body) के बाद जाँची जाती है, अतः यह कम-से-कम एक बार अवश्य चलता है।",
    "do-while कम से कम 1 बार चलता है.",
    ["for", "while", "do-while", "if-else"]);

  /* ---------- C : Arrays ---------- */
  b("Paper-II", "Programming Fundamentals", "Arrays", "index base", "easy",
    "C में n तत्वों वाले array का पहला (प्रथम) इंडेक्स क्या होता है?",
    "In C, what is the first index of an array with n elements?",
    ["1", "0", "-1", "n"], 1,
    "C में array इंडेक्सिंग 0 से आरंभ होती है; अंतिम इंडेक्स n-1 होता है।",
    "पहला index = 0, अंतिम = n-1.",
    ["1", "0", "-1", "n"]);

  /* ---------- C : Functions ---------- */
  b("Paper-II", "Programming Fundamentals", "Functions", "return", "easy",
    "C में किसी फंक्शन से मान वापस भेजने के लिए कौन-सा कीवर्ड प्रयोग होता है?",
    "Which keyword is used to send a value back from a function in C?",
    ["void", "return", "break", "static"], 1,
    "return कीवर्ड फंक्शन से मान (value) वापस भेजता है तथा फंक्शन को समाप्त करता है।",
    "return = मान लौटाना.",
    ["void", "return", "break", "static"]);

  b("Paper-II", "Programming Fundamentals", "C", "command line args", "hard",
    "C में main(int argc, char *argv[]) में argc किसे दर्शाता है?",
    "In C, main(int argc, char *argv[]) — what does argc represent?",
    ["आर्गुमेंट्स के मानों की सूची", "कमांड-लाइन आर्गुमेंट्स की संख्या (गिनती)", "प्रोग्राम का नाम", "एक पॉइंटर एरे"], 1,
    "argc (argument count) कमांड-लाइन आर्गुमेंट्स की संख्या है (प्रोग्राम नाम सहित); argv उनके मानों का एरे है।",
    "argc = count, argv = values.",
    ["list of argument values", "count/number of command-line arguments", "the program name", "a pointer array"]);

  /* ---------- C : Structures / Unions / Storage classes ---------- */
  b("Paper-II", "Programming Fundamentals", "C", "structure keyword", "easy",
    "C में विभिन्न प्रकार के डेटा को एक इकाई में समूहित करने के लिए कौन-सा कीवर्ड प्रयोग होता है?",
    "Which keyword is used in C to group different data types into a single unit?",
    ["array", "struct", "int", "define"], 1,
    "struct (structure) भिन्न-भिन्न प्रकार के members को एक इकाई में समूहित करता है।",
    "struct = भिन्न टाइप एक साथ.",
    ["array", "struct", "int", "define"]);

  b("Paper-II", "Programming Fundamentals", "C", "union memory", "hard",
    "C में union की मुख्य विशेषता क्या है?",
    "What is the main characteristic of a union in C?",
    ["सभी members अलग-अलग मेमोरी लेते हैं", "सभी members एक ही (साझा) मेमोरी स्थान साझा करते हैं", "इसमें केवल एक ही member हो सकता है", "यह केवल पॉइंटर रखता है"], 1,
    "union में सभी members एक ही मेमोरी स्थान साझा करते हैं; एक समय पर केवल एक ही member का मान वैध होता है। union का आकार उसके सबसे बड़े member के बराबर होता है।",
    "union = साझा मेमोरी, struct = अलग मेमोरी.",
    ["all members take separate memory", "all members share the same memory location", "it can have only one member", "it stores only pointers"]);

  b("Paper-II", "Programming Fundamentals", "C", "default storage class", "hard",
    "C में किसी local (auto) वेरिएबल की डिफ़ॉल्ट storage class कौन-सी होती है?",
    "What is the default storage class of a local variable in C?",
    ["static", "register", "auto", "extern"], 2,
    "फंक्शन के अंदर घोषित local वेरिएबल की डिफ़ॉल्ट storage class auto होती है।",
    "Local का default = auto.",
    ["static", "register", "auto", "extern"]);

  /* ---------- OOP concepts (C++ / Java general) ---------- */
  b("Paper-II", "Programming Fundamentals", "OOP Basics", "pillars", "easy",
    "निम्न में से कौन-सा OOP (Object Oriented Programming) का मूल सिद्धांत (pillar) नहीं है?",
    "Which of the following is NOT a pillar of OOP?",
    ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"], 3,
    "OOP के चार स्तंभ हैं: Encapsulation, Inheritance, Polymorphism, Abstraction। Compilation इसमें नहीं है।",
    "4 pillars: A-P-I-E.",
    ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"]);

  b("Paper-II", "Programming Fundamentals", "OOP Basics", "class vs object", "easy",
    "OOP में class और object के बारे में सही कथन कौन-सा है?",
    "In OOP, which statement about class and object is correct?",
    ["object एक blueprint है और class उसका instance", "class एक blueprint है और object उसका instance", "दोनों समान हैं", "class केवल फंक्शन का समूह है"], 1,
    "Class एक टेम्पलेट/ब्लूप्रिंट है; object उस class का वास्तविक instance (उदाहरण) होता है।",
    "Class = नक्शा, Object = बना हुआ घर.",
    ["object is a blueprint and class its instance", "class is a blueprint and object its instance", "both are the same", "class is only a group of functions"]);

  b("Paper-II", "Programming Fundamentals", "OOP Basics", "encapsulation", "medium",
    "डेटा और उस पर कार्य करने वाले methods को एक इकाई में बाँधना तथा डेटा को छिपाना कहलाता है:",
    "Binding data and the methods operating on it into one unit while hiding the data is called:",
    ["Inheritance", "Encapsulation", "Polymorphism", "Recursion"], 1,
    "Encapsulation में डेटा व methods को एक इकाई (class) में बाँधा जाता है और data hiding की जाती है।",
    "Encapsulation = कैप्सूल में बाँधना + छिपाना.",
    ["Inheritance", "Encapsulation", "Polymorphism", "Recursion"]);

  b("Paper-II", "Programming Fundamentals", "OOP Basics", "inheritance", "easy",
    "एक class द्वारा दूसरी class के गुण (properties) व methods प्राप्त करना कहलाता है:",
    "One class acquiring the properties and methods of another class is called:",
    ["Polymorphism", "Inheritance", "Abstraction", "Encapsulation"], 1,
    "Inheritance में child (derived) class, parent (base) class के गुण व methods प्राप्त करती है — कोड पुनः प्रयोग (reusability)।",
    "Inheritance = विरासत/उत्तराधिकार.",
    ["Polymorphism", "Inheritance", "Abstraction", "Encapsulation"]);

  b("Paper-II", "Programming Fundamentals", "OOP Basics", "polymorphism", "medium",
    "OOP में 'एक ही नाम, अनेक रूप' (एक ही इंटरफ़ेस, भिन्न व्यवहार) की अवधारणा कहलाती है:",
    "In OOP, the concept of 'one name, many forms' (one interface, different behaviours) is called:",
    ["Abstraction", "Polymorphism", "Encapsulation", "Inheritance"], 1,
    "Polymorphism (बहुरूपता) एक ही method नाम/इंटरफ़ेस को भिन्न रूपों में व्यवहार करने देता है (overloading/overriding)।",
    "Poly = अनेक, morph = रूप.",
    ["Abstraction", "Polymorphism", "Encapsulation", "Inheritance"]);

  b("Paper-II", "Programming Fundamentals", "OOP Basics", "abstraction", "medium",
    "अनावश्यक विवरण छिपाकर केवल आवश्यक (essential) विशेषताएँ दिखाना कहलाता है:",
    "Hiding unnecessary details and showing only essential features is called:",
    ["Encapsulation", "Abstraction", "Inheritance", "Compilation"], 1,
    "Abstraction में implementation विवरण छिपाकर केवल आवश्यक कार्यक्षमता उपयोगकर्ता को दिखाई जाती है।",
    "Abstraction = विवरण छिपाओ, आवश्यक दिखाओ.",
    ["Encapsulation", "Abstraction", "Inheritance", "Compilation"]);

  b("Paper-II", "Programming Fundamentals", "OOP Basics", "constructor", "medium",
    "OOP में constructor का मुख्य कार्य क्या है?",
    "In OOP, what is the main purpose of a constructor?",
    ["object को नष्ट करना", "object बनते समय उसे initialize करना", "मान लौटाना", "मेमोरी मुक्त करना"], 1,
    "Constructor एक विशेष method है जो object बनते समय स्वतः कॉल होकर उसे initialize करता है। इसका नाम class के समान होता है और यह कोई मान नहीं लौटाता।",
    "Constructor = object जन्म पर initialization.",
    ["destroy the object", "initialize the object at creation time", "return a value", "free memory"]);

  /* ---------- Java specific ---------- */
  b("Paper-II", "Programming Fundamentals", "Java", "String immutability", "hard",
    "Java के बारे में कौन-सा कथन सत्य है?",
    "Which statement about Java is TRUE?",
    ["String वस्तुएँ mutable (परिवर्तनीय) होती हैं", "String वस्तुएँ immutable (अपरिवर्तनीय) होती हैं", "Java pointers का पूर्ण समर्थन करता है", "Java multiple inheritance को class द्वारा समर्थन करता है"], 1,
    "Java में String immutable है — एक बार बनने के बाद बदली नहीं जा सकती (concat आदि नई String बनाते हैं)। Java pointers नहीं देता और class द्वारा multiple inheritance नहीं होती (interface द्वारा होती है)।",
    "Java String = immutable.",
    ["String objects are mutable", "String objects are immutable", "Java fully supports pointers", "Java supports multiple inheritance via classes"]);

  b("Paper-II", "Programming Fundamentals", "Java", "try catch finally", "medium",
    "Java में exception handling में finally block के बारे में सही कथन कौन-सा है?",
    "In Java exception handling, which statement about the finally block is correct?",
    ["यह केवल exception आने पर चलता है", "exception आए या न आए, यह लगभग हमेशा चलता है", "यह कभी नहीं चलता", "यह catch से पहले चलता है"], 1,
    "finally block try/catch के बाद प्राय: हमेशा execute होता है (चाहे exception आए या न आए) — इसका प्रयोग resource cleanup के लिए होता है।",
    "finally = हमेशा (cleanup).",
    ["it runs only when an exception occurs", "it runs almost always, whether or not an exception occurs", "it never runs", "it runs before catch"]);

  b("Paper-II", "Programming Fundamentals", "Java", "access modifier", "medium",
    "Java में सबसे अधिक प्रतिबंधात्मक (most restrictive) access modifier कौन-सा है?",
    "Which is the most restrictive access modifier in Java?",
    ["public", "protected", "default", "private"], 3,
    "private सबसे प्रतिबंधात्मक है — केवल उसी class के अंदर पहुँच योग्य। public सबसे कम प्रतिबंधात्मक।",
    "private = सबसे तंग, public = सबसे खुला.",
    ["public", "protected", "default", "private"]);

  b("Paper-II", "Programming Fundamentals", "Java", "interface vs abstract", "hard",
    "Java में abstract class और interface के बीच एक प्रमुख अंतर क्या है?",
    "What is a key difference between an abstract class and an interface in Java?",
    ["interface में constructor हो सकता है", "एक class कई interface implement कर सकती है पर केवल एक class extend कर सकती है", "abstract class में कोई method नहीं हो सकता", "interface objects बना सकता है"], 1,
    "Java में एक class केवल एक class extend कर सकती है (single inheritance) पर अनेक interfaces implement कर सकती है — इसी से multiple inheritance की सुविधा मिलती है।",
    "एक class = 1 extends, अनेक implements.",
    ["an interface can have a constructor", "a class can implement many interfaces but extend only one class", "an abstract class can have no methods", "an interface can create objects"]);

  b("Paper-II", "Programming Fundamentals", "Java", "final keyword", "medium",
    "Java में किसी वेरिएबल के आगे final कीवर्ड लगाने का अर्थ है:",
    "In Java, applying the final keyword to a variable means:",
    ["उसका मान बदला जा सकता है", "उसका मान एक बार सेट होने पर बदला नहीं जा सकता (constant)", "वह स्वतः शून्य हो जाता है", "वह private बन जाता है"], 1,
    "final वेरिएबल एक बार आरंभ होने के बाद स्थिरांक (constant) बन जाता है — उसका मान बदला नहीं जा सकता।",
    "final = अंतिम/स्थिर (constant).",
    ["its value can be changed", "its value cannot be changed once set (constant)", "it becomes zero automatically", "it becomes private"]);

  /* ---------- Python ---------- */
  b("Paper-II", "Programming Fundamentals", "Python", "list vs tuple", "medium",
    "Python में list और tuple के बीच मुख्य अंतर क्या है?",
    "What is the main difference between a list and a tuple in Python?",
    ["list immutable है, tuple mutable", "list mutable है, tuple immutable", "दोनों immutable हैं", "दोनों mutable हैं"], 1,
    "Python में list mutable (परिवर्तनीय, [] से) है जबकि tuple immutable (अपरिवर्तनीय, () से) है।",
    "List [] बदल सकते हैं, Tuple () नहीं.",
    ["list is immutable, tuple is mutable", "list is mutable, tuple is immutable", "both are immutable", "both are mutable"]);

  b("Paper-II", "Programming Fundamentals", "Python", "tuple immutability", "hard",
    "Python कोड का परिणाम: t = (1,2,3); t[0] = 5",
    "Result of Python code: t = (1,2,3); t[0] = 5",
    ["t बदलकर (5,2,3) हो जाएगा", "TypeError (tuple अपरिवर्तनीय है)", "5 प्रिंट होगा", "None लौटेगा"], 1,
    "tuple immutable है, अतः किसी element को पुनः असाइन करने पर TypeError उत्पन्न होता है।",
    "Tuple में असाइनमेंट = TypeError.",
    ["t changes to (5,2,3)", "TypeError (tuple is immutable)", "prints 5", "returns None"]);

  b("Paper-II", "Programming Fundamentals", "Python", "len output", "easy",
    "Python कोड का आउटपुट: print(len(\"hello\"))",
    "Output of Python code: print(len(\"hello\"))",
    ["4", "5", "6", "hello"], 1,
    "len() स्ट्रिंग/लिस्ट की लंबाई देता है; \"hello\" में 5 कैरेक्टर हैं।",
    "len = तत्वों/अक्षरों की गिनती.",
    ["4", "5", "6", "hello"]);

  b("Paper-II", "Programming Fundamentals", "Python", "def keyword", "easy",
    "Python में फंक्शन परिभाषित (define) करने के लिए कौन-सा कीवर्ड प्रयोग होता है?",
    "Which keyword is used to define a function in Python?",
    ["function", "def", "func", "define"], 1,
    "Python में फंक्शन 'def' कीवर्ड से परिभाषित किए जाते हैं।",
    "def = define function.",
    ["function", "def", "func", "define"]);

  b("Paper-II", "Programming Fundamentals", "Python", "block/indentation", "medium",
    "Python में कोड ब्लॉक (block) कैसे परिभाषित किया जाता है?",
    "How is a code block defined in Python?",
    ["{ } कोष्ठकों द्वारा", "इंडेंटेशन (space/tab) द्वारा", "begin-end द्वारा", "; द्वारा"], 1,
    "Python कोड ब्लॉक की सीमा इंडेंटेशन (whitespace) से तय करता है, न कि {} कोष्ठकों से।",
    "Python = indentation आधारित.",
    ["by { } braces", "by indentation (space/tab)", "by begin-end", "by ;"]);

  b("Paper-II", "Programming Fundamentals", "Python", "dict type", "medium",
    "Python में dictionary किस रूप में डेटा संग्रहित करती है?",
    "In what form does a Python dictionary store data?",
    ["केवल मानों की सूची", "key-value युग्म (pairs)", "केवल संख्याएँ", "इंडेक्स आधारित क्रम"], 1,
    "Python dictionary डेटा को key-value युग्मों के रूप में संग्रहित करती है (जैसे {\"a\":1})।",
    "dict = key : value.",
    ["only a list of values", "key-value pairs", "only numbers", "index-based sequence"]);

  /* ---------- Artificial Intelligence ---------- */
  b("Paper-II", "Programming Fundamentals", "Artificial Intelligence", "Turing test", "medium",
    "किसी मशीन की बुद्धिमत्ता (intelligence) को मानव के समान परखने के लिए कौन-सा परीक्षण प्रस्तावित किया गया?",
    "Which test was proposed to judge whether a machine's intelligence is human-like?",
    ["Turing Test", "IQ Test", "Boot Test", "Litmus Test"], 0,
    "Alan Turing द्वारा प्रस्तावित Turing Test जाँचता है कि क्या मशीन का व्यवहार मानव से अप्रभेद्य (indistinguishable) है।",
    "AI बुद्धि परीक्षण = Turing Test (Alan Turing).",
    ["Turing Test", "IQ Test", "Boot Test", "Litmus Test"]);

  b("Paper-II", "Programming Fundamentals", "Artificial Intelligence", "agent types", "hard",
    "AI में जो agent केवल वर्तमान अनुभूति (percept) के आधार पर condition-action नियम से कार्य करता है, वह कहलाता है:",
    "In AI, an agent that acts using condition-action rules based only on the current percept is called a:",
    ["Simple reflex agent", "Utility-based agent", "Learning agent", "Goal-based agent"], 0,
    "Simple reflex agent केवल वर्तमान percept व condition-action (if-then) नियमों के आधार पर कार्य करता है; उसे इतिहास याद नहीं रहता।",
    "Simple reflex = if-then, केवल अभी.",
    ["Simple reflex agent", "Utility-based agent", "Learning agent", "Goal-based agent"]);

  /* ---------- Machine Learning ---------- */
  b("Paper-II", "Programming Fundamentals", "Machine Learning", "supervised", "medium",
    "Machine Learning में labelled (लेबल युक्त) डेटा से प्रशिक्षण किस प्रकार के अधिगम (learning) में होता है?",
    "In Machine Learning, training with labelled data belongs to which type of learning?",
    ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Reflex Learning"], 1,
    "Supervised learning में मॉडल को input के साथ सही output (label) दिया जाता है ताकि वह mapping सीख सके।",
    "Supervised = labelled डेटा (गुरु सहित).",
    ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Reflex Learning"]);

  b("Paper-II", "Programming Fundamentals", "Machine Learning", "unsupervised", "medium",
    "बिना लेबल वाले डेटा में समूह/pattern खोजने (जैसे clustering) वाला अधिगम कहलाता है:",
    "Learning that finds groups/patterns in unlabelled data (e.g., clustering) is called:",
    ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Deep Search"], 1,
    "Unsupervised learning में डेटा पर कोई label नहीं होता; मॉडल स्वयं छिपे pattern/cluster खोजता है।",
    "Unsupervised = बिना label, clustering.",
    ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Deep Search"]);

  b("Paper-II", "Programming Fundamentals", "Machine Learning", "classification vs regression", "hard",
    "Machine Learning में सतत (continuous) संख्यात्मक मान (जैसे कीमत) का पूर्वानुमान करने वाला कार्य कहलाता है:",
    "In ML, the task of predicting a continuous numeric value (e.g., price) is called:",
    ["Classification", "Regression", "Clustering", "Sorting"], 1,
    "Regression सतत संख्यात्मक मान का पूर्वानुमान करता है; Classification वर्ग/श्रेणी (discrete label) का पूर्वानुमान करता है।",
    "Regression = संख्या, Classification = श्रेणी.",
    ["Classification", "Regression", "Clustering", "Sorting"]);

  b("Paper-II", "Programming Fundamentals", "Machine Learning", "reinforcement", "medium",
    "किस अधिगम में agent पुरस्कार (reward) व दंड (penalty) के आधार पर प्रयास-त्रुटि द्वारा सीखता है?",
    "In which learning does an agent learn by trial-and-error using rewards and penalties?",
    ["Supervised Learning", "Reinforcement Learning", "Unsupervised Learning", "Batch Learning"], 1,
    "Reinforcement learning में agent पर्यावरण से क्रिया करके reward/penalty प्राप्त करता है और अधिकतम reward हेतु नीति (policy) सीखता है।",
    "Reinforcement = reward/penalty से सीखना.",
    ["Supervised Learning", "Reinforcement Learning", "Unsupervised Learning", "Batch Learning"]);

  /* ---------- Blockchain ---------- */
  b("Paper-II", "Programming Fundamentals", "Blockchain", "distributed ledger", "medium",
    "Blockchain मूलतः किस प्रकार की तकनीक है?",
    "Blockchain is fundamentally which type of technology?",
    ["केंद्रीकृत (centralized) डेटाबेस", "वितरित बहीखाता (distributed ledger)", "एकल फ़ाइल संग्रहण", "एक प्रकार का एंटीवायरस"], 1,
    "Blockchain एक वितरित (distributed) व विकेंद्रीकृत बहीखाता है जिसकी प्रतिलिपि नेटवर्क के अनेक nodes पर रहती है।",
    "Blockchain = distributed ledger (विकेंद्रीकृत).",
    ["a centralized database", "a distributed ledger", "single-file storage", "a type of antivirus"]);

  b("Paper-II", "Programming Fundamentals", "Blockchain", "immutability", "medium",
    "Blockchain की कौन-सी विशेषता किसी block में दर्ज डेटा को बाद में बदलना अत्यंत कठिन बनाती है?",
    "Which property of blockchain makes recorded data in a block extremely hard to alter later?",
    ["Volatility", "Immutability (अपरिवर्तनीयता)", "Compression", "Fragmentation"], 1,
    "प्रत्येक block में पिछले block का hash होता है; किसी block को बदलने पर सभी आगे के hash बदल जाते हैं, अतः डेटा immutable रहता है।",
    "Blockchain = immutable (छेड़छाड़-प्रतिरोधी).",
    ["Volatility", "Immutability", "Compression", "Fragmentation"]);

  b("Paper-II", "Programming Fundamentals", "Blockchain", "hash linking", "hard",
    "Blockchain में प्रत्येक block में सामान्यतः क्या संग्रहित होता है जो उसे पिछले block से जोड़ता है?",
    "In a blockchain, each block generally stores what, linking it to the previous block?",
    ["पिछले block का hash", "उपयोगकर्ता का पासवर्ड", "IP पता", "प्रिंटर ड्राइवर"], 0,
    "प्रत्येक block में पिछले block का cryptographic hash होता है, जिससे blocks एक शृंखला (chain) में जुड़ते हैं और छेड़छाड़ पकड़ में आती है।",
    "हर block में पिछले का hash → chain.",
    ["hash of the previous block", "user's password", "IP address", "printer driver"]);

  /* ---------- IDE / Programming Techniques ---------- */
  b("Paper-II", "Programming Fundamentals", "IDE", "full form", "easy",
    "प्रोग्रामिंग में IDE का पूर्ण रूप क्या है?",
    "In programming, what is the full form of IDE?",
    ["Internal Development Engine", "Integrated Development Environment", "Interactive Data Editor", "Internet Development Engine"], 1,
    "IDE = Integrated Development Environment — इसमें editor, compiler/interpreter, debugger आदि एक साथ होते हैं (जैसे Eclipse, VS Code, Turbo C++)।",
    "IDE = Integrated Development Environment.",
    ["Internal Development Engine", "Integrated Development Environment", "Interactive Data Editor", "Internet Development Engine"]);

  b("Paper-II", "Programming Fundamentals", "Programming Techniques", "algorithm vs flowchart", "medium",
    "किसी समस्या हल के चरण-दर-चरण क्रम को आरेख (diagram) रूप में दर्शाने वाला उपकरण क्या कहलाता है?",
    "The tool that represents the step-by-step solution of a problem in diagram form is called:",
    ["Algorithm", "Flowchart", "Pseudocode", "Compiler"], 1,
    "Flowchart समस्या-समाधान के चरणों को चित्रात्मक प्रतीकों द्वारा दर्शाता है; Algorithm पाठ्य (text) रूप में चरण होते हैं।",
    "Flowchart = चित्र, Algorithm = शब्दों में चरण.",
    ["Algorithm", "Flowchart", "Pseudocode", "Compiler"]);

  b("Paper-II", "Programming Fundamentals", "Programming Techniques", "compiler vs interpreter", "medium",
    "Compiler और Interpreter में एक प्रमुख अंतर क्या है?",
    "What is a key difference between a compiler and an interpreter?",
    ["Compiler एक-एक line चलाता है, Interpreter पूरा प्रोग्राम एक साथ", "Compiler पूरे प्रोग्राम को एक साथ अनुवादित करता है, Interpreter line-by-line", "दोनों समान हैं", "Interpreter object code फ़ाइल बनाता है"], 1,
    "Compiler पूरे स्रोत कोड को एक साथ मशीन कोड में अनुवादित करता है; Interpreter एक-एक line को क्रमशः अनुवाद व निष्पादित करता है।",
    "Compiler = पूरा एक साथ, Interpreter = line-by-line.",
    ["Compiler runs line-by-line, interpreter runs whole program at once", "Compiler translates the whole program at once, interpreter line-by-line", "both are the same", "Interpreter creates an object code file"]);

  /* ==================================================================== */
  /* ================ FUNDAMENTALS OF COMPUTER (concept) ================ */
  /* ==================================================================== */

  b("Paper-II", "Fundamentals of Computer", "Input Devices", "MICR", "medium",
    "बैंकों में चेक (cheque) पर छपे विशेष अक्षरों को पढ़ने के लिए मुख्यतः किस उपकरण का प्रयोग होता है?",
    "Which device is mainly used in banks to read the special characters printed on cheques?",
    ["OMR", "MICR", "Joystick", "Plotter"], 1,
    "MICR (Magnetic Ink Character Recognition) चेक पर चुम्बकीय स्याही से छपे अक्षरों को पढ़ता है — बैंकिंग में प्रयुक्त।",
    "Cheque = MICR (magnetic ink).",
    ["OMR", "MICR", "Joystick", "Plotter"]);

  b("Paper-II", "Fundamentals of Computer", "Input Devices", "OMR", "medium",
    "OMR (Optical Mark Reader) का सर्वाधिक सामान्य उपयोग किसमें होता है?",
    "OMR (Optical Mark Reader) is most commonly used in:",
    ["चेक पढ़ने में", "बहुविकल्पीय परीक्षा की उत्तर-पत्रिका (pencil marks) पढ़ने में", "ध्वनि रिकॉर्ड करने में", "चित्र प्रिंट करने में"], 1,
    "OMR पेंसिल/पेन से लगाए गए चिह्नों (bubbles) को पढ़ता है — जैसे MCQ परीक्षा की OMR शीट।",
    "OMR = bubble/mark शीट (परीक्षा).",
    ["reading cheques", "reading multiple-choice exam answer sheets (pencil marks)", "recording sound", "printing pictures"]);

  b("Paper-II", "Fundamentals of Computer", "Input Devices", "not input", "easy",
    "निम्न में से कौन-सा इनपुट डिवाइस नहीं है?",
    "Which of the following is NOT an input device?",
    ["Keyboard", "Scanner", "Monitor", "Mouse"], 2,
    "Monitor एक आउटपुट डिवाइस है (परिणाम दिखाता है); keyboard, scanner, mouse इनपुट डिवाइस हैं।",
    "Monitor = output, बाकी input.",
    ["Keyboard", "Scanner", "Monitor", "Mouse"]);

  b("Paper-II", "Fundamentals of Computer", "Output Devices", "impact printer", "medium",
    "निम्न में से कौन-सा एक impact (आघात) प्रिंटर है?",
    "Which of the following is an impact printer?",
    ["Laser printer", "Inkjet printer", "Dot-matrix printer", "Thermal printer"], 2,
    "Dot-matrix printer एक impact printer है जो पिनों को रिबन पर मारकर छपाई करता है; laser व inkjet non-impact हैं।",
    "Dot-matrix = impact (पिन मारता है).",
    ["Laser printer", "Inkjet printer", "Dot-matrix printer", "Thermal printer"]);

  b("Paper-II", "Fundamentals of Computer", "Output Devices", "not output", "easy",
    "निम्न में से कौन-सा आउटपुट डिवाइस नहीं है?",
    "Which of the following is NOT an output device?",
    ["Printer", "Monitor", "Speaker", "Joystick"], 3,
    "Joystick एक इनपुट डिवाइस है (गेम नियंत्रण हेतु); printer, monitor, speaker आउटपुट डिवाइस हैं।",
    "Joystick = input.",
    ["Printer", "Monitor", "Speaker", "Joystick"]);

  b("Paper-II", "Fundamentals of Computer", "Computer Basics", "first generation", "medium",
    "प्रथम पीढ़ी (First Generation) के कंप्यूटरों में मुख्य इलेक्ट्रॉनिक घटक क्या था?",
    "What was the main electronic component of First Generation computers?",
    ["ट्रांजिस्टर (Transistor)", "वैक्यूम ट्यूब (Vacuum Tube)", "IC (Integrated Circuit)", "माइक्रोप्रोसेसर"], 1,
    "प्रथम पीढ़ी (1940-56) में वैक्यूम ट्यूब प्रयुक्त होती थीं; द्वितीय-transistor, तृतीय-IC, चतुर्थ-microprocessor।",
    "1st=Vacuum tube, 2nd=Transistor, 3rd=IC, 4th=Microprocessor.",
    ["Transistor", "Vacuum Tube", "IC (Integrated Circuit)", "Microprocessor"]);

  b("Paper-II", "Fundamentals of Computer", "Computer Basics", "microprocessor generation", "medium",
    "माइक्रोप्रोसेसर का प्रयोग सर्वप्रथम किस पीढ़ी के कंप्यूटरों में हुआ?",
    "Microprocessors were first used in computers of which generation?",
    ["प्रथम पीढ़ी", "द्वितीय पीढ़ी", "तृतीय पीढ़ी", "चतुर्थ पीढ़ी"], 3,
    "चतुर्थ पीढ़ी (1971 से) में VLSI आधारित माइक्रोप्रोसेसर का प्रयोग आरंभ हुआ।",
    "Microprocessor = 4th generation.",
    ["First generation", "Second generation", "Third generation", "Fourth generation"]);

  b("Paper-II", "Fundamentals of Computer", "Data Processing", "RAM volatile", "easy",
    "कंप्यूटर की कौन-सी मेमोरी volatile (अस्थायी — बिजली जाते ही डेटा मिट जाता है) होती है?",
    "Which computer memory is volatile (data is lost when power goes off)?",
    ["ROM", "RAM", "Hard Disk", "CD-ROM"], 1,
    "RAM volatile है — बिजली बंद होते ही उसका डेटा नष्ट हो जाता है; ROM व secondary storage non-volatile हैं।",
    "RAM = volatile (उड़ जाता है), ROM = non-volatile.",
    ["ROM", "RAM", "Hard Disk", "CD-ROM"]);

  b("Paper-II", "Fundamentals of Computer", "Data Processing", "RAM vs ROM", "medium",
    "RAM और ROM के बारे में सही कथन कौन-सा है?",
    "Which statement about RAM and ROM is correct?",
    ["RAM स्थायी है, ROM अस्थायी", "ROM स्थायी (non-volatile) है, RAM अस्थायी (volatile)", "दोनों volatile हैं", "दोनों केवल पढ़ने योग्य हैं"], 1,
    "ROM non-volatile व मुख्यतः read-only होती है (बूट निर्देश रखती है); RAM volatile व read/write कार्यशील मेमोरी है।",
    "ROM = permanent, RAM = working (temporary).",
    ["RAM is permanent, ROM is temporary", "ROM is permanent (non-volatile), RAM is temporary (volatile)", "both are volatile", "both are read-only"]);

  b("Paper-II", "Fundamentals of Computer", "Data Processing", "cache memory", "medium",
    "CPU और मुख्य मेमोरी (RAM) के बीच स्थित सबसे तेज़ मेमोरी कौन-सी होती है?",
    "Which is the fastest memory located between the CPU and main memory (RAM)?",
    ["Hard Disk", "Cache memory", "ROM", "Pen drive"], 1,
    "Cache memory CPU व RAM के बीच अत्यंत तेज़ मेमोरी है जो बार-बार प्रयुक्त डेटा रखकर गति बढ़ाती है।",
    "सबसे तेज़ = Registers > Cache > RAM.",
    ["Hard Disk", "Cache memory", "ROM", "Pen drive"]);

  b("Paper-II", "Fundamentals of Computer", "Data Processing", "storage unit order", "medium",
    "निम्न में से कौन-सा भंडारण मात्रकों (storage units) का आरोही (बढ़ता) सही क्रम है?",
    "Which is the correct ascending order of storage units?",
    ["KB < MB < GB < TB", "MB < KB < GB < TB", "GB < MB < KB < TB", "TB < GB < MB < KB"], 0,
    "सही क्रम: bit < byte < KB < MB < GB < TB < PB। अतः KB < MB < GB < TB सही है।",
    "KB < MB < GB < TB < PB (हर बार ~1024 गुना).",
    ["KB < MB < GB < TB", "MB < KB < GB < TB", "GB < MB < KB < TB", "TB < GB < MB < KB"]);

  b("Paper-II", "Fundamentals of Computer", "Data Processing", "smallest unit", "easy",
    "कंप्यूटर में डेटा की सबसे छोटी इकाई क्या है?",
    "What is the smallest unit of data in a computer?",
    ["Byte", "Bit", "Nibble", "Kilobyte"], 1,
    "Bit (binary digit — 0 या 1) डेटा की सबसे छोटी इकाई है; 8 bit = 1 byte, 4 bit = 1 nibble।",
    "सबसे छोटी = Bit (0/1).",
    ["Byte", "Bit", "Nibble", "Kilobyte"]);

  b("Paper-II", "Fundamentals of Computer", "Data Processing", "primary vs secondary", "medium",
    "निम्न में से कौन-सी secondary (द्वितीयक) storage है?",
    "Which of the following is secondary storage?",
    ["RAM", "Cache", "Hard Disk", "Register"], 2,
    "Hard Disk द्वितीयक (स्थायी) storage है; RAM, cache व register प्राथमिक/आंतरिक मेमोरी हैं।",
    "Secondary = HDD/SSD/CD/pen drive (स्थायी).",
    ["RAM", "Cache", "Hard Disk", "Register"]);

  b("Paper-II", "Fundamentals of Computer", "File Types", "executable extension", "medium",
    "Windows में निष्पादन योग्य (executable) प्रोग्राम फ़ाइल का सामान्य एक्सटेंशन क्या है?",
    "In Windows, what is the common extension of an executable program file?",
    [".txt", ".exe", ".jpg", ".mp3"], 1,
    ".exe निष्पादन योग्य प्रोग्राम फ़ाइल है; .txt=टेक्स्ट, .jpg=चित्र, .mp3=ऑडियो।",
    ".exe = executable.",
    [".txt", ".exe", ".jpg", ".mp3"]);

  b("Paper-II", "Fundamentals of Computer", "Computer Basics", "digital signal", "medium",
    "डिजिटल कंप्यूटर मूलतः किन दो अवस्थाओं (states) पर कार्य करते हैं?",
    "Digital computers basically operate on which two states?",
    ["उच्च व मध्यम", "0 और 1 (द्विआधारी)", "लाल व हरा", "धनात्मक व दशमलव"], 1,
    "डिजिटल कंप्यूटर द्विआधारी (binary) 0 व 1 (off/on) अवस्थाओं पर आधारित होते हैं; analog सतत संकेतों पर।",
    "Digital = 0/1 (discrete), Analog = सतत.",
    ["high and medium", "0 and 1 (binary)", "red and green", "positive and decimal"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
