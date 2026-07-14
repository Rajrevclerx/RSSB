/* RSSB BCI 2026 - Mega bank part 06: Data Structures + Computer Organization & OS */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG06";
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

  // ---------- Data Structures and Algorithms (~25) ----------

  b("Paper-II", "Data Structures and Algorithms", "Stack", "LIFO", "Easy",
    "स्टैक किस सिद्धांत पर कार्य करता है?",
    "On which principle does a Stack work?",
    ["LIFO (लास्ट इन फर्स्ट आउट)", "FIFO (फर्स्ट इन फर्स्ट आउट)", "FILO के विपरीत", "रैंडम एक्सेस"],
    0,
    "स्टैक LIFO (Last In First Out) सिद्धांत पर कार्य करता है — जो तत्व अंत में डाला जाता है वह सबसे पहले निकाला जाता है। push और pop दोनों एक ही सिरे (top) पर होते हैं।",
    "Stack = LIFO; ढेर के ऊपर से ही सामान उठाते हैं।",
    ["LIFO (Last In First Out)", "FIFO (First In First Out)", "Opposite of FILO", "Random access"]);

  b("Paper-II", "Data Structures and Algorithms", "Queue", "FIFO", "Easy",
    "निम्न में से कौन सी डेटा संरचना FIFO सिद्धांत पर कार्य करती है?",
    "Which of the following data structures works on the FIFO principle?",
    ["स्टैक", "क्यू", "ट्री", "ग्राफ"],
    1,
    "क्यू (Queue) FIFO (First In First Out) सिद्धांत पर कार्य करती है — जो तत्व पहले जोड़ा जाता है वही पहले हटाया जाता है। insertion rear पर और deletion front पर होता है।",
    "Queue = लाइन/कतार = पहले आओ पहले पाओ = FIFO।",
    ["Stack", "Queue", "Tree", "Graph"]);

  b("Paper-II", "Data Structures and Algorithms", "Queue", "Circular Queue", "Medium",
    "वह क्यू जिसमें अंतिम स्थिति (rear) पुनः पहली स्थिति (front) से जुड़ी होती है, कहलाती है?",
    "A queue in which the last position (rear) is connected back to the first position (front) is called?",
    ["प्रायोरिटी क्यू", "सर्कुलर क्यू", "डीक्यू", "सिंपल क्यू"],
    1,
    "सर्कुलर क्यू (Circular Queue) में अंतिम नोड पुनः पहले नोड से जुड़ी होती है, जिससे रैखिक क्यू में खाली स्थान की बर्बादी की समस्या हल हो जाती है और मेमोरी का पुनः उपयोग होता है।",
    "Circular = गोलाकार, rear अगला front बन जाता है।",
    ["Priority Queue", "Circular Queue", "Dequeue", "Simple Queue"]);

  b("Paper-II", "Data Structures and Algorithms", "Queue", "Deque", "Medium",
    "वह डेटा संरचना जिसमें दोनों सिरों से इंसर्शन और डिलीशन संभव है, कहलाती है?",
    "The data structure in which insertion and deletion are possible from both ends is called?",
    ["स्टैक", "सर्कुलर क्यू", "डीक्यू (Deque)", "प्रायोरिटी क्यू"],
    2,
    "Deque (Double Ended Queue) में दोनों सिरों (front और rear) से तत्व जोड़े और हटाए जा सकते हैं। यह स्टैक और क्यू दोनों की तरह व्यवहार कर सकती है।",
    "Deque = Double Ended = दोनों तरफ से।",
    ["Stack", "Circular Queue", "Deque", "Priority Queue"]);

  b("Paper-II", "Data Structures and Algorithms", "Queue", "Priority Queue", "Medium",
    "प्रायोरिटी क्यू में तत्व किस आधार पर निकाले जाते हैं?",
    "In a priority queue, on what basis are elements removed?",
    ["प्रवेश क्रम के आधार पर", "प्राथमिकता (priority) के आधार पर", "यादृच्छिक रूप से", "अल्फाबेटिकल क्रम में"],
    1,
    "प्रायोरिटी क्यू में प्रत्येक तत्व की एक प्राथमिकता होती है; सर्वाधिक प्राथमिकता वाला तत्व पहले निकाला जाता है, चाहे वह कब जोड़ा गया हो।",
    "Priority = प्राथमिकता तय करती है क्रम।",
    ["Based on order of entry", "Based on priority", "Randomly", "In alphabetical order"]);

  b("Paper-II", "Data Structures and Algorithms", "Stack", "Applications", "Medium",
    "निम्न में से किसके लिए स्टैक का उपयोग नहीं किया जाता?",
    "Stack is NOT used for which of the following?",
    ["रिकर्सन का क्रियान्वयन", "इनफिक्स से पोस्टफिक्स रूपांतरण", "फंक्शन कॉल प्रबंधन", "CPU शेड्यूलिंग (FCFS)"],
    3,
    "स्टैक का उपयोग रिकर्सन, फंक्शन कॉल (call stack), एक्सप्रेशन रूपांतरण/मूल्यांकन आदि में होता है। FCFS CPU शेड्यूलिंग क्यू (FIFO) का उपयोग करती है, स्टैक का नहीं।",
    "FCFS = FIFO = Queue, बाकी सब Stack।",
    ["Recursion implementation", "Infix to postfix conversion", "Function call management", "CPU scheduling (FCFS)"]);

  b("Paper-II", "Data Structures and Algorithms", "Stack", "Postfix Evaluation", "Hard",
    "पोस्टफिक्स एक्सप्रेशन '5 3 + 8 2 - *' का मान क्या होगा?",
    "What is the value of the postfix expression '5 3 + 8 2 - *' ?",
    ["48", "40", "42", "48 से अधिक"],
    0,
    "स्टैक द्वारा मूल्यांकन: 5 3 + = 8; फिर 8 2 - = 6; फिर 8 * 6 = 48। अतः परिणाम 48 है।",
    "क्रम से: (5+3)=8, (8-2)=6, 8*6=48।",
    ["48", "40", "42", "More than 48"]);

  b("Paper-II", "Data Structures and Algorithms", "Stack", "Prefix Evaluation", "Hard",
    "प्रीफिक्स एक्सप्रेशन '+ * 2 3 4' का मान क्या होगा?",
    "What is the value of the prefix expression '+ * 2 3 4' ?",
    ["10", "14", "20", "24"],
    0,
    "प्रीफिक्स को दाएँ से बाएँ पढ़ें: पहले * 2 3 = 6, फिर + 6 4 = 10। अतः परिणाम 10 है।",
    "दाएँ से पढ़ें: (2*3)=6, (6+4)=10।",
    ["10", "14", "20", "24"]);

  b("Paper-II", "Data Structures and Algorithms", "Stack", "Infix to Postfix", "Medium",
    "इनफिक्स एक्सप्रेशन 'A + B * C' का सही पोस्टफिक्स रूप क्या है?",
    "What is the correct postfix form of the infix expression 'A + B * C' ?",
    ["A B C * +", "A B + C *", "A B C + *", "+ A * B C"],
    0,
    "गुणा (*) की प्राथमिकता जोड़ (+) से अधिक है, इसलिए पहले B*C = 'B C *' फिर A जोड़ें = 'A B C * +'।",
    "पहले उच्च प्राथमिकता (*) निपटाएँ।",
    ["A B C * +", "A B + C *", "A B C + *", "+ A * B C"]);

  b("Paper-II", "Data Structures and Algorithms", "Linked List", "vs Array", "Medium",
    "ऐरे की तुलना में लिंक्ड लिस्ट का मुख्य लाभ क्या है?",
    "What is the main advantage of a linked list over an array?",
    ["तेज रैंडम एक्सेस", "गतिशील आकार (dynamic size) व आसान इंसर्शन/डिलीशन", "कम मेमोरी उपयोग", "इंडेक्स द्वारा O(1) एक्सेस"],
    1,
    "लिंक्ड लिस्ट का आकार गतिशील होता है और मध्य में इंसर्शन/डिलीशन आसान (केवल पॉइंटर बदलना) है। रैंडम/इंडेक्स एक्सेस ऐरे में तेज (O(1)) होता है, लिंक्ड लिस्ट में O(n)।",
    "Array = fast access; Linked List = flexible size।",
    ["Faster random access", "Dynamic size and easy insertion/deletion", "Less memory usage", "O(1) access by index"]);

  b("Paper-II", "Data Structures and Algorithms", "Linked List", "Pointers", "Easy",
    "एकल-लिंक्ड लिस्ट (singly linked list) की प्रत्येक नोड में क्या होता है?",
    "What does each node of a singly linked list contain?",
    ["केवल डेटा", "डेटा और अगले नोड का पता (pointer)", "डेटा और पिछले नोड का पता", "दो डेटा फील्ड"],
    1,
    "एकल-लिंक्ड लिस्ट के प्रत्येक नोड में दो भाग होते हैं: डेटा और अगले (next) नोड का पता। अंतिम नोड का next NULL होता है।",
    "Data + Next pointer = एक नोड।",
    ["Only data", "Data and address (pointer) of next node", "Data and address of previous node", "Two data fields"]);

  b("Paper-II", "Data Structures and Algorithms", "Binary Tree", "Inorder Traversal", "Hard",
    "निम्न बाइनरी सर्च ट्री का इनऑर्डर ट्रैवर्सल क्या होगा? रूट 4, बायाँ बच्चा 2 (बच्चे 1 और 3), दायाँ बच्चा 6 (बच्चे 5 और 7)।",
    "What is the inorder traversal of this BST? Root 4, left child 2 (children 1 and 3), right child 6 (children 5 and 7).",
    ["1 2 3 4 5 6 7", "4 2 1 3 6 5 7", "1 3 2 5 7 6 4", "4 2 6 1 3 5 7"],
    0,
    "इनऑर्डर = बायाँ, रूट, दायाँ। BST का इनऑर्डर हमेशा आरोही (sorted) क्रम देता है: 1 2 3 4 5 6 7।",
    "Inorder = Left-Root-Right; BST में हमेशा sorted।",
    ["1 2 3 4 5 6 7", "4 2 1 3 6 5 7", "1 3 2 5 7 6 4", "4 2 6 1 3 5 7"]);

  b("Paper-II", "Data Structures and Algorithms", "Binary Tree", "Preorder Traversal", "Hard",
    "उपरोक्त ट्री (रूट 4, बायाँ 2[1,3], दायाँ 6[5,7]) का प्रीऑर्डर ट्रैवर्सल क्या होगा?",
    "What is the preorder traversal of the same tree (Root 4, left 2[1,3], right 6[5,7])?",
    ["1 2 3 4 5 6 7", "4 2 1 3 6 5 7", "1 3 2 5 7 6 4", "4 6 2 7 5 3 1"],
    1,
    "प्रीऑर्डर = रूट, बायाँ, दायाँ। 4, फिर बायाँ उपवृक्ष (2,1,3), फिर दायाँ उपवृक्ष (6,5,7) = 4 2 1 3 6 5 7।",
    "Preorder = Root पहले।",
    ["1 2 3 4 5 6 7", "4 2 1 3 6 5 7", "1 3 2 5 7 6 4", "4 6 2 7 5 3 1"]);

  b("Paper-II", "Data Structures and Algorithms", "Binary Tree", "Postorder Traversal", "Hard",
    "उपरोक्त ट्री (रूट 4, बायाँ 2[1,3], दायाँ 6[5,7]) का पोस्टऑर्डर ट्रैवर्सल क्या होगा?",
    "What is the postorder traversal of the same tree (Root 4, left 2[1,3], right 6[5,7])?",
    ["1 3 2 5 7 6 4", "4 2 1 3 6 5 7", "1 2 3 4 5 6 7", "1 2 3 6 5 7 4"],
    0,
    "पोस्टऑर्डर = बायाँ, दायाँ, रूट। बायाँ उपवृक्ष (1,3,2), दायाँ उपवृक्ष (5,7,6), फिर रूट 4 = 1 3 2 5 7 6 4।",
    "Postorder = Root अंत में।",
    ["1 3 2 5 7 6 4", "4 2 1 3 6 5 7", "1 2 3 4 5 6 7", "1 2 3 6 5 7 4"]);

  b("Paper-II", "Data Structures and Algorithms", "Binary Search Tree", "Property", "Medium",
    "बाइनरी सर्च ट्री (BST) की मुख्य विशेषता क्या है?",
    "What is the main property of a Binary Search Tree (BST)?",
    ["बायाँ उपवृक्ष > रूट, दायाँ उपवृक्ष < रूट", "बायाँ उपवृक्ष < रूट, दायाँ उपवृक्ष > रूट", "सभी नोड समान", "प्रत्येक नोड के ठीक 2 बच्चे"],
    1,
    "BST में किसी नोड के बाएँ उपवृक्ष के सभी मान उस नोड से छोटे और दाएँ उपवृक्ष के सभी मान बड़े होते हैं। इससे खोज O(log n) संभव होती है।",
    "Left छोटा, Right बड़ा।",
    ["Left subtree > root, right subtree < root", "Left subtree < root, right subtree > root", "All nodes equal", "Every node has exactly 2 children"]);

  b("Paper-II", "Data Structures and Algorithms", "Binary Tree", "Complete Binary Tree", "Medium",
    "पूर्ण (complete) बाइनरी ट्री का सही वर्णन कौन सा है?",
    "Which correctly describes a complete binary tree?",
    ["प्रत्येक नोड के 0 या 2 बच्चे", "अंतिम स्तर को छोड़ सभी स्तर पूर्ण भरे व अंतिम स्तर बाएँ से भरा", "केवल एक नोड", "सभी पत्तियाँ भिन्न स्तर पर"],
    1,
    "Complete binary tree में अंतिम स्तर को छोड़कर सभी स्तर पूरी तरह भरे होते हैं, और अंतिम स्तर के नोड बाएँ से दाएँ भरे जाते हैं। हीप इसी संरचना पर आधारित है।",
    "Complete = सब भरा, अंतिम स्तर बाएँ से।",
    ["Every node has 0 or 2 children", "All levels full except last, last filled left to right", "Only one node", "All leaves at different levels"]);

  b("Paper-II", "Data Structures and Algorithms", "Binary Tree", "Heap", "Medium",
    "मैक्स-हीप (max-heap) में रूट नोड में कौन सा तत्व होता है?",
    "In a max-heap, which element is at the root node?",
    ["सबसे छोटा तत्व", "सबसे बड़ा तत्व", "मध्य तत्व", "कोई भी तत्व"],
    1,
    "मैक्स-हीप एक पूर्ण बाइनरी ट्री है जिसमें प्रत्येक पैरेंट नोड अपने बच्चों से बड़ा या बराबर होता है; अतः सबसे बड़ा तत्व रूट पर होता है।",
    "Max-heap = सबसे बड़ा ऊपर (root)।",
    ["Smallest element", "Largest element", "Middle element", "Any element"]);

  b("Paper-II", "Data Structures and Algorithms", "Graph", "Representation", "Medium",
    "n शीर्षों (vertices) वाले ग्राफ के लिए एडजेसेंसी मैट्रिक्स का आकार क्या होगा?",
    "For a graph with n vertices, what is the size of the adjacency matrix?",
    ["n x 1", "n x n", "1 x n", "2n"],
    1,
    "एडजेसेंसी मैट्रिक्स n शीर्षों के लिए n x n आकार की द्वि-आयामी सारणी होती है, जहाँ प्रविष्टि [i][j]=1 यदि i और j के बीच किनारा हो।",
    "Matrix = n x n (हर जोड़ी के लिए)।",
    ["n x 1", "n x n", "1 x n", "2n"]);

  b("Paper-II", "Data Structures and Algorithms", "Graph", "Adjacency List", "Medium",
    "विरल (sparse) ग्राफ के लिए कौन सा प्रतिनिधित्व मेमोरी की दृष्टि से अधिक कुशल है?",
    "Which representation is more memory-efficient for a sparse graph?",
    ["एडजेसेंसी मैट्रिक्स", "एडजेसेंसी लिस्ट", "इंसीडेंस मैट्रिक्स", "दोनों समान"],
    1,
    "विरल ग्राफ (कम किनारों वाले) के लिए एडजेसेंसी लिस्ट अधिक कुशल है क्योंकि यह केवल मौजूद किनारों के लिए स्थान लेती है, जबकि मैट्रिक्स सदैव n² स्थान लेती है।",
    "Sparse = कम edges = List बेहतर।",
    ["Adjacency matrix", "Adjacency list", "Incidence matrix", "Both equal"]);

  b("Paper-II", "Data Structures and Algorithms", "Searching", "Binary Search", "Medium",
    "बाइनरी सर्च का उपयोग करने के लिए डेटा किस अवस्था में होना आवश्यक है?",
    "For using binary search, in what condition must the data be?",
    ["अव्यवस्थित (unsorted)", "क्रमबद्ध (sorted)", "लिंक्ड लिस्ट में", "डुप्लिकेट मुक्त"],
    1,
    "बाइनरी सर्च केवल क्रमबद्ध (sorted) डेटा पर कार्य करती है, क्योंकि यह प्रत्येक चरण में मध्य तत्व से तुलना कर आधे भाग को छोड़ती है। इसकी समय जटिलता O(log n) है।",
    "Binary Search = पहले sorted होना चाहिए।",
    ["Unsorted", "Sorted", "In linked list", "Duplicate-free"]);

  b("Paper-II", "Data Structures and Algorithms", "Searching", "Linear Search Complexity", "Easy",
    "n तत्वों पर रैखिक खोज (linear search) की सबसे खराब स्थिति में समय जटिलता क्या है?",
    "What is the worst-case time complexity of linear search on n elements?",
    ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    2,
    "रैखिक खोज में सबसे खराब स्थिति में सभी n तत्वों की जाँच करनी पड़ सकती है, अतः समय जटिलता O(n) है।",
    "Linear = एक-एक करके = O(n)।",
    ["O(1)", "O(log n)", "O(n)", "O(n²)"]);

  b("Paper-II", "Data Structures and Algorithms", "Sorting", "Complexity O(n^2)", "Medium",
    "निम्न में से किस सॉर्टिंग एल्गोरिथ्म की औसत समय जटिलता O(n²) नहीं है?",
    "Which of the following sorting algorithms does NOT have an average time complexity of O(n²)?",
    ["बबल सॉर्ट", "सिलेक्शन सॉर्ट", "इंसर्शन सॉर्ट", "मर्ज सॉर्ट"],
    3,
    "बबल, सिलेक्शन और इंसर्शन सॉर्ट की औसत जटिलता O(n²) है, जबकि मर्ज सॉर्ट की जटिलता O(n log n) है।",
    "Merge/Quick/Heap = O(n log n); बाकी O(n²)।",
    ["Bubble sort", "Selection sort", "Insertion sort", "Merge sort"]);

  b("Paper-II", "Data Structures and Algorithms", "Sorting", "Merge Sort Complexity", "Medium",
    "मर्ज सॉर्ट की सबसे खराब स्थिति में समय जटिलता क्या है?",
    "What is the worst-case time complexity of merge sort?",
    ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    1,
    "मर्ज सॉर्ट फूट डालो-राज करो (divide and conquer) पर आधारित है; इसकी सभी स्थितियों (best, average, worst) में समय जटिलता O(n log n) है।",
    "Merge Sort = हमेशा O(n log n)।",
    ["O(n)", "O(n log n)", "O(n²)", "O(log n)"]);

  b("Paper-II", "Data Structures and Algorithms", "Algorithms", "Big-O Notation", "Easy",
    "बिग-ओ (Big-O) नोटेशन किसे दर्शाता है?",
    "What does Big-O notation represent?",
    ["एल्गोरिथ्म की सर्वोत्तम स्थिति", "एल्गोरिथ्म की ऊपरी सीमा (worst case)", "औसत मेमोरी", "आउटपुट का आकार"],
    1,
    "बिग-ओ नोटेशन किसी एल्गोरिथ्म की समय/स्थान जटिलता की ऊपरी सीमा (upper bound / worst case वृद्धि दर) को दर्शाता है।",
    "Big-O = ऊपरी सीमा = worst case।",
    ["Best case of algorithm", "Upper bound (worst case) of algorithm", "Average memory", "Size of output"]);

  b("Paper-II", "Data Structures and Algorithms", "Abstract Data Types", "ADT", "Medium",
    "एब्स्ट्रैक्ट डेटा टाइप (ADT) क्या परिभाषित करता है?",
    "What does an Abstract Data Type (ADT) define?",
    ["केवल क्रियान्वयन विवरण", "डेटा व संक्रियाएँ (क्रियान्वयन छिपाकर)", "केवल हार्डवेयर", "मेमोरी पता"],
    1,
    "ADT डेटा और उस पर की जाने वाली संक्रियाओं को परिभाषित करता है, परंतु आंतरिक क्रियान्वयन (implementation) को छिपाकर रखता है — जैसे Stack, Queue, List।",
    "ADT = क्या करना है (what), कैसे नहीं (how)।",
    ["Only implementation details", "Data and operations (hiding implementation)", "Only hardware", "Memory address"]);

  // ---------- Computer Organization and Operating System (~25) ----------

  b("Paper-II", "Computer Organization and Operating System", "Basic Structure of Computers", "Von Neumann", "Medium",
    "वॉन न्यूमैन आर्किटेक्चर की मुख्य विशेषता क्या है?",
    "What is the main characteristic of the Von Neumann architecture?",
    ["प्रोग्राम व डेटा के लिए अलग मेमोरी", "प्रोग्राम व डेटा एक ही मेमोरी में संग्रहीत", "केवल हार्डवेयर आधारित", "मेमोरी नहीं होती"],
    1,
    "वॉन न्यूमैन आर्किटेक्चर में निर्देश (program) और डेटा दोनों एक ही मेमोरी में संग्रहीत होते हैं (stored program concept) और एक ही बस साझा करते हैं।",
    "Von Neumann = एक ही मेमोरी (stored program)।",
    ["Separate memory for program and data", "Program and data stored in same memory", "Only hardware based", "No memory"]);

  b("Paper-II", "Computer Organization and Operating System", "CPU and Instructions", "Registers", "Medium",
    "प्रोग्राम काउंटर (PC) रजिस्टर क्या रखता है?",
    "What does the Program Counter (PC) register hold?",
    ["वर्तमान निर्देश", "अगले निष्पादित होने वाले निर्देश का पता", "गणना का परिणाम", "डेटा का मान"],
    1,
    "प्रोग्राम काउंटर (PC) अगले निष्पादित होने वाले निर्देश का पता (address) रखता है। निर्देश fetch होते ही यह स्वतः अगले पते की ओर बढ़ जाता है।",
    "PC = अगले निर्देश का पता।",
    ["Current instruction", "Address of the next instruction to be executed", "Result of computation", "Value of data"]);

  b("Paper-II", "Computer Organization and Operating System", "CPU and Instructions", "MAR", "Medium",
    "MAR (मेमोरी एड्रेस रजिस्टर) में क्या संग्रहीत होता है?",
    "What is stored in the MAR (Memory Address Register)?",
    ["मेमोरी में पढ़े/लिखे जाने वाले स्थान का पता", "पढ़ा गया वास्तविक डेटा", "वर्तमान निर्देश", "स्टैक पॉइंटर"],
    0,
    "MAR उस मेमोरी स्थान का पता रखता है जहाँ से डेटा पढ़ा या लिखा जाना है, जबकि MDR (Memory Data Register) वास्तविक डेटा रखता है।",
    "MAR = Address, MDR = Data।",
    ["Address of the memory location to be read/written", "The actual data read", "Current instruction", "Stack pointer"]);

  b("Paper-II", "Computer Organization and Operating System", "CPU and Instructions", "IR", "Easy",
    "इंस्ट्रक्शन रजिस्टर (IR) क्या रखता है?",
    "What does the Instruction Register (IR) hold?",
    ["अगले निर्देश का पता", "वर्तमान में निष्पादित हो रहा निर्देश", "अंकगणितीय परिणाम", "मेमोरी का आकार"],
    1,
    "इंस्ट्रक्शन रजिस्टर (IR) मेमोरी से fetch किए गए, वर्तमान में निष्पादित हो रहे निर्देश को धारण करता है ताकि control unit उसे डीकोड कर सके।",
    "IR = अभी चल रहा निर्देश।",
    ["Address of next instruction", "The instruction currently being executed", "Arithmetic result", "Size of memory"]);

  b("Paper-II", "Computer Organization and Operating System", "Basic Structure of Computers", "ALU", "Easy",
    "CPU का कौन सा भाग अंकगणितीय एवं तार्किक संक्रियाएँ करता है?",
    "Which part of the CPU performs arithmetic and logical operations?",
    ["कंट्रोल यूनिट (CU)", "ALU (अरिथमेटिक लॉजिक यूनिट)", "रजिस्टर", "कैश"],
    1,
    "ALU (Arithmetic Logic Unit) जोड़, घटाव, तुलना, AND/OR जैसी अंकगणितीय व तार्किक संक्रियाएँ करता है। कंट्रोल यूनिट संचालन का समन्वय करती है।",
    "ALU = गणित + तर्क।",
    ["Control Unit (CU)", "ALU (Arithmetic Logic Unit)", "Register", "Cache"]);

  b("Paper-II", "Computer Organization and Operating System", "Basic Structure of Computers", "System Bus", "Medium",
    "मेमोरी का पता संचारित करने के लिए किस बस का उपयोग होता है?",
    "Which bus is used to transmit the address of a memory location?",
    ["डेटा बस", "एड्रेस बस", "कंट्रोल बस", "सीरियल बस"],
    1,
    "एड्रेस बस मेमोरी या I/O स्थान का पता संचारित करती है (एकदिशीय)। डेटा बस डेटा ले जाती है (द्विदिशीय) और कंट्रोल बस नियंत्रण संकेत भेजती है।",
    "Address bus = पता; Data bus = डेटा।",
    ["Data bus", "Address bus", "Control bus", "Serial bus"]);

  b("Paper-II", "Computer Organization and Operating System", "Memory Organization", "Memory Hierarchy", "Medium",
    "मेमोरी पदानुक्रम (hierarchy) में सबसे तेज परंतु सबसे महँगी मेमोरी कौन सी है?",
    "In the memory hierarchy, which is the fastest but most expensive memory?",
    ["हार्ड डिस्क", "मुख्य मेमोरी (RAM)", "कैश मेमोरी", "रजिस्टर"],
    3,
    "मेमोरी पदानुक्रम में रजिस्टर सबसे तेज और सबसे महँगे होते हैं (CPU के अंदर)। इसके बाद कैश, फिर मुख्य मेमोरी (RAM), फिर सेकेंडरी स्टोरेज आती है।",
    "सबसे ऊपर/तेज = Register।",
    ["Hard disk", "Main memory (RAM)", "Cache memory", "Register"]);

  b("Paper-II", "Computer Organization and Operating System", "Memory Organization", "Cache", "Medium",
    "कैश मेमोरी का मुख्य उद्देश्य क्या है?",
    "What is the main purpose of cache memory?",
    ["स्थायी भंडारण", "CPU व मुख्य मेमोरी के बीच गति अंतर कम करना", "बैकअप बनाना", "बिजली बचाना"],
    1,
    "कैश एक छोटी, तेज मेमोरी है जो CPU और अपेक्षाकृत धीमी मुख्य मेमोरी के बीच गति अंतराल को कम करती है और बार-बार उपयोग होने वाले डेटा/निर्देश रखती है।",
    "Cache = तेज बफर, गति बढ़ाता है।",
    ["Permanent storage", "To reduce speed gap between CPU and main memory", "To take backup", "To save power"]);

  b("Paper-II", "Computer Organization and Operating System", "Memory Organization", "RAM vs ROM", "Easy",
    "निम्न में से कौन सी मेमोरी वोलेटाइल (volatile) है?",
    "Which of the following memory is volatile?",
    ["ROM", "RAM", "हार्ड डिस्क", "फ्लैश मेमोरी"],
    1,
    "RAM वोलेटाइल है — बिजली जाते ही इसका डेटा नष्ट हो जाता है। ROM नॉन-वोलेटाइल है और स्थायी रूप से डेटा रखता है।",
    "RAM = बिजली गई डेटा गया।",
    ["ROM", "RAM", "Hard disk", "Flash memory"]);

  b("Paper-II", "Computer Organization and Operating System", "CPU and Instructions", "Addressing Modes", "Medium",
    "जिस एड्रेसिंग मोड में ऑपरेंड का मान सीधे निर्देश में ही दिया होता है, वह कहलाता है?",
    "The addressing mode in which the operand value is given directly in the instruction is called?",
    ["इमीडिएट एड्रेसिंग", "डायरेक्ट एड्रेसिंग", "इनडायरेक्ट एड्रेसिंग", "रजिस्टर एड्रेसिंग"],
    0,
    "इमीडिएट एड्रेसिंग मोड में ऑपरेंड का वास्तविक मान निर्देश के भीतर ही होता है (जैसे MOV A, #5)। डायरेक्ट में मेमोरी पता दिया होता है।",
    "Immediate = मान खुद निर्देश में (#)।",
    ["Immediate addressing", "Direct addressing", "Indirect addressing", "Register addressing"]);

  b("Paper-II", "Computer Organization and Operating System", "CPU and Instructions", "Instruction Cycle", "Medium",
    "निर्देश चक्र (instruction cycle) का सही क्रम क्या है?",
    "What is the correct sequence of the instruction cycle?",
    ["Decode - Fetch - Execute", "Fetch - Decode - Execute", "Execute - Fetch - Decode", "Fetch - Execute - Decode"],
    1,
    "निर्देश चक्र का क्रम है: Fetch (निर्देश लाना) → Decode (डीकोड करना) → Execute (निष्पादित करना)। इसे मूल मशीन चक्र कहते हैं।",
    "Fetch, Decode, Execute (F-D-E)।",
    ["Decode - Fetch - Execute", "Fetch - Decode - Execute", "Execute - Fetch - Decode", "Fetch - Execute - Decode"]);

  b("Paper-II", "Computer Organization and Operating System", "Computer Arithmetic", "Number System", "Medium",
    "ऋणात्मक बाइनरी संख्याओं को दर्शाने के लिए कंप्यूटर में सामान्यतः किसका उपयोग होता है?",
    "What is commonly used in computers to represent negative binary numbers?",
    ["साइन-मैग्निट्यूड", "1's कॉम्प्लीमेंट", "2's कॉम्प्लीमेंट", "BCD"],
    2,
    "आधुनिक कंप्यूटर ऋणात्मक संख्याओं को 2's कॉम्प्लीमेंट रूप में दर्शाते हैं, क्योंकि इसमें शून्य का एकल प्रतिनिधित्व होता है और घटाव को जोड़ द्वारा किया जा सकता है।",
    "Negative numbers = 2's complement।",
    ["Sign-magnitude", "1's complement", "2's complement", "BCD"]);

  b("Paper-II", "Computer Organization and Operating System", "I/O Organization", "Interrupt", "Medium",
    "इंटरप्ट (interrupt) का मुख्य उद्देश्य क्या है?",
    "What is the main purpose of an interrupt?",
    ["CPU को बंद करना", "किसी घटना पर CPU का ध्यान तत्काल आकर्षित करना", "मेमोरी बढ़ाना", "डेटा हटाना"],
    1,
    "इंटरप्ट एक संकेत है जो CPU को उसके वर्तमान कार्य में रुकावट डालकर किसी उच्च प्राथमिकता वाली घटना (जैसे I/O पूर्ण होना) को तुरंत संभालने के लिए सूचित करता है।",
    "Interrupt = 'रुको, यह पहले करो' संकेत।",
    ["To shut down the CPU", "To immediately draw CPU's attention to an event", "To increase memory", "To delete data"]);

  b("Paper-II", "Computer Organization and Operating System", "I/O Organization", "DMA", "Medium",
    "DMA (डायरेक्ट मेमोरी एक्सेस) का लाभ क्या है?",
    "What is the advantage of DMA (Direct Memory Access)?",
    ["CPU के हस्तक्षेप के बिना I/O व मेमोरी के बीच डेटा स्थानांतरण", "मेमोरी हटाना", "CPU की गति घटाना", "केवल कीबोर्ड के लिए"],
    0,
    "DMA में एक अलग नियंत्रक I/O डिवाइस और मेमोरी के बीच सीधे डेटा स्थानांतरित करता है, जिससे CPU मुक्त रहता है और दक्षता बढ़ती है।",
    "DMA = CPU को बीच में लाए बिना डेटा transfer।",
    ["Data transfer between I/O and memory without CPU intervention", "To delete memory", "To slow down the CPU", "Only for keyboard"]);

  b("Paper-II", "Computer Organization and Operating System", "Operating System Overview", "Functions", "Easy",
    "निम्न में से कौन सा ऑपरेटिंग सिस्टम का कार्य नहीं है?",
    "Which of the following is NOT a function of an operating system?",
    ["प्रोसेस प्रबंधन", "मेमोरी प्रबंधन", "फाइल प्रबंधन", "स्प्रेडशीट गणना करना"],
    3,
    "प्रोसेस, मेमोरी, फाइल और डिवाइस प्रबंधन OS के कार्य हैं। स्प्रेडशीट गणना एक अनुप्रयोग सॉफ्टवेयर (जैसे Excel) का कार्य है, OS का नहीं।",
    "OS = प्रबंधक; स्प्रेडशीट = application।",
    ["Process management", "Memory management", "File management", "Performing spreadsheet calculations"]);

  b("Paper-II", "Computer Organization and Operating System", "Operating System Overview", "Types of OS", "Medium",
    "वह ऑपरेटिंग सिस्टम जो निश्चित समय-सीमा में प्रतिक्रिया देना सुनिश्चित करता है, कहलाता है?",
    "The operating system that guarantees a response within a fixed time limit is called?",
    ["बैच OS", "टाइम-शेयरिंग OS", "रियल-टाइम OS", "डिस्ट्रिब्यूटेड OS"],
    2,
    "रियल-टाइम ऑपरेटिंग सिस्टम (RTOS) निश्चित समय-सीमा (deadline) के भीतर प्रतिक्रिया की गारंटी देता है, जैसे विमान नियंत्रण, चिकित्सा उपकरण आदि में।",
    "Real-time = समय-सीमा की गारंटी।",
    ["Batch OS", "Time-sharing OS", "Real-time OS", "Distributed OS"]);

  b("Paper-II", "Computer Organization and Operating System", "Process Management", "Process States", "Medium",
    "जब कोई प्रोसेस CPU के आवंटन की प्रतीक्षा में तैयार होती है, तो वह किस अवस्था में होती है?",
    "When a process is ready and waiting for CPU allocation, in which state is it?",
    ["रनिंग", "रेडी", "वेटिंग (blocked)", "टर्मिनेटेड"],
    1,
    "रेडी (Ready) अवस्था में प्रोसेस निष्पादन के लिए तैयार होती है और केवल CPU आवंटन की प्रतीक्षा में रहती है। रनिंग में वह CPU पर निष्पादित हो रही होती है।",
    "Ready = CPU मिलने का इंतज़ार।",
    ["Running", "Ready", "Waiting (blocked)", "Terminated"]);

  b("Paper-II", "Computer Organization and Operating System", "Process Management", "PCB", "Medium",
    "PCB (प्रोसेस कंट्रोल ब्लॉक) क्या संग्रहीत करता है?",
    "What does a PCB (Process Control Block) store?",
    ["केवल प्रोग्राम कोड", "प्रोसेस की सारी सूचना (state, PC, रजिस्टर आदि)", "केवल फाइल डेटा", "कैश डेटा"],
    1,
    "PCB प्रत्येक प्रोसेस के बारे में सारी सूचना रखता है — प्रोसेस अवस्था, प्रोग्राम काउंटर, रजिस्टर मान, प्राथमिकता, मेमोरी सीमाएँ आदि।",
    "PCB = प्रोसेस की पहचान-पत्री।",
    ["Only program code", "All process information (state, PC, registers, etc.)", "Only file data", "Cache data"]);

  b("Paper-II", "Computer Organization and Operating System", "Process Management", "CPU Scheduling", "Medium",
    "किस CPU शेड्यूलिंग एल्गोरिथ्म में प्रत्येक प्रोसेस को एक निश्चित समय-खंड (time quantum) दिया जाता है?",
    "In which CPU scheduling algorithm is each process given a fixed time slice (time quantum)?",
    ["FCFS", "SJF", "राउंड रॉबिन", "प्रायोरिटी"],
    2,
    "राउंड रॉबिन (Round Robin) शेड्यूलिंग में प्रत्येक प्रोसेस को एक निश्चित time quantum मिलता है; समय समाप्त होने पर वह ready queue के अंत में चली जाती है। यह preemptive है।",
    "Round Robin = time quantum, बारी-बारी।",
    ["FCFS", "SJF", "Round Robin", "Priority"]);

  b("Paper-II", "Computer Organization and Operating System", "Process Management", "SJF", "Medium",
    "SJF (शॉर्टेस्ट जॉब फर्स्ट) शेड्यूलिंग किस आधार पर प्रोसेस चुनती है?",
    "On what basis does SJF (Shortest Job First) scheduling select a process?",
    ["सबसे लंबे बर्स्ट समय वाली", "सबसे कम बर्स्ट समय वाली", "सबसे पहले आई हुई", "सर्वाधिक प्राथमिकता वाली"],
    1,
    "SJF सबसे कम CPU बर्स्ट समय वाली प्रोसेस को पहले निष्पादित करती है। यह औसत प्रतीक्षा समय को न्यूनतम करती है परंतु लंबी प्रोसेस में starvation संभव है।",
    "SJF = सबसे छोटा काम पहले।",
    ["Longest burst time", "Shortest burst time", "First arrived", "Highest priority"]);

  b("Paper-II", "Computer Organization and Operating System", "Process Management", "Deadlock", "Hard",
    "निम्न में से कौन सी डेडलॉक के लिए आवश्यक (Coffman) शर्त नहीं है?",
    "Which of the following is NOT a necessary (Coffman) condition for deadlock?",
    ["म्यूचुअल एक्सक्लूजन", "होल्ड एंड वेट", "प्रीएम्प्शन (preemption)", "सर्कुलर वेट"],
    2,
    "डेडलॉक की चार आवश्यक शर्तें हैं: mutual exclusion, hold & wait, NO preemption, और circular wait। 'preemption' नहीं बल्कि 'no preemption' शर्त है, अतः preemption आवश्यक शर्त नहीं।",
    "शर्त है 'No preemption', preemption नहीं।",
    ["Mutual exclusion", "Hold and wait", "Preemption", "Circular wait"]);

  b("Paper-II", "Computer Organization and Operating System", "Process Management", "Semaphore", "Medium",
    "सेमाफोर (semaphore) का मुख्य उपयोग क्या है?",
    "What is the main use of a semaphore?",
    ["मेमोरी बढ़ाना", "प्रोसेस समकालन (synchronization) व म्यूचुअल एक्सक्लूजन", "फाइल हटाना", "गति मापना"],
    1,
    "सेमाफोर एक पूर्णांक चर है जिसका उपयोग प्रोसेस समकालन और साझा संसाधनों तक पहुँच को नियंत्रित (mutual exclusion) करने के लिए wait(P) और signal(V) संक्रियाओं द्वारा किया जाता है।",
    "Semaphore = प्रोसेस को synchronize करने वाला काउंटर।",
    ["To increase memory", "Process synchronization and mutual exclusion", "To delete files", "To measure speed"]);

  b("Paper-II", "Computer Organization and Operating System", "Memory Organization", "Virtual Memory", "Medium",
    "वर्चुअल मेमोरी का मुख्य लाभ क्या है?",
    "What is the main advantage of virtual memory?",
    ["CPU की गति बढ़ाना", "उपलब्ध भौतिक मेमोरी से बड़े प्रोग्राम चलाना", "बिजली बचाना", "फाइल हटाना"],
    1,
    "वर्चुअल मेमोरी सेकेंडरी स्टोरेज के एक भाग को मुख्य मेमोरी की तरह उपयोग कर, उपलब्ध भौतिक RAM से बड़े प्रोग्राम चलाने की सुविधा देती है (paging/segmentation द्वारा)।",
    "Virtual memory = RAM से बड़ा भ्रम।",
    ["To increase CPU speed", "To run programs larger than available physical memory", "To save power", "To delete files"]);

  b("Paper-II", "Computer Organization and Operating System", "Memory Organization", "Thrashing", "Hard",
    "थ्रैशिंग (thrashing) की स्थिति कब उत्पन्न होती है?",
    "When does the condition of thrashing occur?",
    ["जब CPU निष्क्रिय हो", "जब सिस्टम निष्पादन से अधिक समय पेज स्वैपिंग में बिताए", "जब मेमोरी खाली हो", "जब डिस्क भरी हो"],
    1,
    "थ्रैशिंग तब होती है जब सिस्टम में बहुत अधिक page faults होते हैं और CPU वास्तविक निष्पादन की तुलना में अधिक समय पेजों को स्वैप (in/out) करने में लगाता है, जिससे प्रदर्शन गिर जाता है।",
    "Thrashing = काम कम, page swapping ज्यादा।",
    ["When CPU is idle", "When system spends more time swapping pages than executing", "When memory is empty", "When disk is full"]);

  b("Paper-II", "Computer Organization and Operating System", "Memory Organization", "Paging", "Medium",
    "पेजिंग में भौतिक मेमोरी के निश्चित आकार के खंडों को क्या कहते हैं?",
    "In paging, what are the fixed-size blocks of physical memory called?",
    ["पेज", "फ्रेम", "सेगमेंट", "ब्लॉक"],
    1,
    "पेजिंग में लॉजिकल मेमोरी को समान आकार के 'pages' और भौतिक मेमोरी को समान आकार के 'frames' में बाँटा जाता है; पेज को फ्रेम में मैप किया जाता है।",
    "Logical = Page, Physical = Frame।",
    ["Page", "Frame", "Segment", "Block"]);

  b("Paper-II", "Computer Organization and Operating System", "File Management", "File System", "Easy",
    "फाइल सिस्टम में फाइलों को व्यवस्थित करने के लिए किसका उपयोग होता है?",
    "What is used to organize files in a file system?",
    ["रजिस्टर", "डायरेक्टरी (फोल्डर)", "कैश", "बस"],
    1,
    "फाइल सिस्टम में फाइलों को डायरेक्टरी (फोल्डर) के अंतर्गत श्रेणीबद्ध (hierarchical) रूप में व्यवस्थित किया जाता है, जिससे उन्हें ढूँढना व प्रबंधित करना आसान होता है।",
    "Directory/Folder = फाइलों का संगठन।",
    ["Register", "Directory (folder)", "Cache", "Bus"]);

  b("Paper-II", "Computer Organization and Operating System", "Process Management", "Mutual Exclusion", "Medium",
    "क्रिटिकल सेक्शन समस्या में 'म्यूचुअल एक्सक्लूजन' का क्या अर्थ है?",
    "In the critical section problem, what does 'mutual exclusion' mean?",
    ["सभी प्रोसेस एक साथ प्रवेश करें", "एक समय में केवल एक प्रोसेस क्रिटिकल सेक्शन में प्रवेश करे", "कोई प्रोसेस प्रवेश न करे", "प्रोसेस समाप्त हो जाएँ"],
    1,
    "म्यूचुअल एक्सक्लूजन का अर्थ है कि साझा संसाधन (critical section) में एक समय में केवल एक ही प्रोसेस प्रवेश कर सकती है, जिससे race condition से बचा जा सके।",
    "Mutual exclusion = एक बार में एक ही अंदर।",
    ["All processes enter together", "Only one process enters the critical section at a time", "No process enters", "Processes terminate"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
