/* RSSB BCI 2026 - Mega bank part 14: Data Structures + Computer Organization & OS (set 2) */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG14";
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

  b("Paper-II", "Data Structures and Algorithms", "Arrays", "Address Calculation", "Hard",
    "एक ऐरे का आधार पता (base address) 2000 है और प्रत्येक तत्व 4 बाइट का है। तो A[6] का पता क्या होगा (0 से इंडेक्सिंग)?",
    "An array has base address 2000 and each element is 4 bytes. What is the address of A[6] (0-based indexing)?",
    ["2018", "2024", "2020", "2028"],
    1,
    "सूत्र: पता = आधार पता + (इंडेक्स × तत्व का आकार) = 2000 + (6 × 4) = 2000 + 24 = 2024।",
    "Address = Base + i × size = 2000 + 6×4 = 2024।",
    ["2018", "2024", "2020", "2028"]);

  b("Paper-II", "Data Structures and Algorithms", "Linked List", "Circular Linked List", "Medium",
    "वह लिंक्ड लिस्ट जिसमें अंतिम नोड का पॉइंटर पुनः पहली नोड को इंगित करता है, कहलाती है?",
    "The linked list in which the last node's pointer points back to the first node is called?",
    ["एकल लिंक्ड लिस्ट", "द्विदिश (doubly) लिंक्ड लिस्ट", "सर्कुलर लिंक्ड लिस्ट", "रैखिक लिस्ट"],
    2,
    "सर्कुलर लिंक्ड लिस्ट में अंतिम नोड का next पॉइंटर NULL न होकर पहली नोड की ओर इंगित करता है, जिससे एक चक्र बनता है और किसी भी नोड से पूरी लिस्ट में घूमा जा सकता है।",
    "Circular = अंतिम नोड फिर पहली से जुड़ी।",
    ["Singly linked list", "Doubly linked list", "Circular linked list", "Linear list"]);

  b("Paper-II", "Data Structures and Algorithms", "Linked List", "Doubly Linked List", "Medium",
    "द्विदिश (doubly) लिंक्ड लिस्ट की प्रत्येक नोड में कितने पॉइंटर होते हैं?",
    "How many pointers does each node of a doubly linked list contain?",
    ["एक (केवल next)", "दो (prev और next)", "तीन", "कोई पॉइंटर नहीं"],
    1,
    "द्विदिश लिंक्ड लिस्ट की प्रत्येक नोड में दो पॉइंटर होते हैं: एक पिछली नोड (prev) के लिए और एक अगली नोड (next) के लिए, जिससे दोनों दिशाओं में ट्रैवर्सल संभव होता है।",
    "Doubly = prev + next = 2 pointers।",
    ["One (only next)", "Two (prev and next)", "Three", "No pointer"]);

  b("Paper-II", "Data Structures and Algorithms", "Stack", "Linked List Implementation", "Medium",
    "जब स्टैक को लिंक्ड लिस्ट से क्रियान्वित किया जाता है, तो push संक्रिया में नई नोड कहाँ जोड़ी जाती है?",
    "When a stack is implemented using a linked list, where is a new node added during the push operation?",
    ["लिस्ट के अंत में", "लिस्ट के प्रारंभ (head/top) पर", "बीच में", "किसी भी यादृच्छिक स्थान पर"],
    1,
    "लिंक्ड-लिस्ट आधारित स्टैक में push और pop दोनों head (top) पर होते हैं क्योंकि यह O(1) समय देता है — अंत में जोड़ने पर पूरी लिस्ट ट्रैवर्स करनी पड़ती।",
    "Stack top = list का head; push/pop यहीं O(1)।",
    ["At the end of the list", "At the beginning (head/top) of the list", "In the middle", "At any random position"]);

  b("Paper-II", "Data Structures and Algorithms", "Queue", "Circular Queue Full Condition", "Hard",
    "आकार SIZE के सर्कुलर क्यू में 'क्यू भरी है' (full) की शर्त क्या है?",
    "In a circular queue of size SIZE, what is the condition for 'queue is full'?",
    ["front == rear", "(rear + 1) % SIZE == front", "rear == SIZE", "front == 0"],
    1,
    "सर्कुलर क्यू में (rear + 1) % SIZE == front होने पर क्यू भरी मानी जाती है। खाली की शर्त front == rear (या front == -1) होती है।",
    "Full: (rear+1)%SIZE == front।",
    ["front == rear", "(rear + 1) % SIZE == front", "rear == SIZE", "front == 0"]);

  b("Paper-II", "Data Structures and Algorithms", "Queue", "Priority Queue Implementation", "Medium",
    "प्रायोरिटी क्यू का सबसे कुशल क्रियान्वयन सामान्यतः किससे किया जाता है?",
    "A priority queue is most efficiently implemented usually using which structure?",
    ["साधारण ऐरे", "हीप (binary heap)", "स्टैक", "सर्कुलर लिंक्ड लिस्ट"],
    1,
    "प्रायोरिटी क्यू को बाइनरी हीप से कुशलतापूर्वक क्रियान्वित किया जाता है, जिसमें insert और सर्वोच्च-प्राथमिकता तत्व निकालना दोनों O(log n) में होते हैं।",
    "Priority Queue = Heap (insert/delete O(log n))।",
    ["Simple array", "Heap (binary heap)", "Stack", "Circular linked list"]);

  b("Paper-II", "Data Structures and Algorithms", "Binary Tree", "Degree of Node", "Medium",
    "किसी ट्री में एक नोड का 'डिग्री' (degree) किसे कहते हैं?",
    "What is the 'degree' of a node in a tree?",
    ["नोड का स्तर", "नोड के बच्चों (children) की संख्या", "रूट से दूरी", "नोड में डेटा का मान"],
    1,
    "किसी नोड का डिग्री उसके बच्चों (उपवृक्षों) की संख्या है। पत्ती (leaf) नोड का डिग्री 0 होता है। बाइनरी ट्री में किसी नोड का अधिकतम डिग्री 2 होता है।",
    "Degree = बच्चों की संख्या।",
    ["Level of the node", "Number of children of the node", "Distance from root", "Data value in node"]);

  b("Paper-II", "Data Structures and Algorithms", "Binary Tree", "Max Nodes at Level", "Hard",
    "बाइनरी ट्री में स्तर (level) 3 पर अधिकतम कितने नोड हो सकते हैं (रूट स्तर 0 पर मानते हुए)?",
    "In a binary tree, what is the maximum number of nodes possible at level 3 (assuming root at level 0)?",
    ["6", "8", "4", "16"],
    1,
    "स्तर L पर अधिकतम नोड = 2^L (रूट स्तर 0)। अतः स्तर 3 पर अधिकतम = 2^3 = 8 नोड।",
    "Level L पर max = 2^L; 2^3 = 8।",
    ["6", "8", "4", "16"]);

  b("Paper-II", "Data Structures and Algorithms", "Binary Tree", "Max Nodes in Tree", "Hard",
    "4 स्तरों (levels) वाले पूर्ण बाइनरी ट्री में अधिकतम कितने नोड हो सकते हैं?",
    "What is the maximum number of nodes in a full binary tree with 4 levels?",
    ["8", "15", "16", "14"],
    1,
    "k स्तरों वाले बाइनरी ट्री में अधिकतम नोड = 2^k − 1 (रूट को स्तर 1 गिनने पर)। अतः 4 स्तरों के लिए = 2^4 − 1 = 16 − 1 = 15 नोड।",
    "k levels → 2^k − 1 = 2^4 − 1 = 15।",
    ["8", "15", "16", "14"]);

  b("Paper-II", "Data Structures and Algorithms", "Binary Tree", "AVL Tree", "Hard",
    "AVL (संतुलित) ट्री में किसी नोड का संतुलन गुणांक (balance factor) किन मानों तक सीमित होता है?",
    "In an AVL (balanced) tree, the balance factor of any node is limited to which values?",
    ["0 से 2", "−1, 0, या +1", "केवल 0", "−2 से +2"],
    1,
    "AVL ट्री एक स्वयं-संतुलित BST है जहाँ प्रत्येक नोड का संतुलन गुणांक (बायीं ऊँचाई − दायीं ऊँचाई) केवल −1, 0 या +1 हो सकता है; इससे बाहर होने पर रोटेशन द्वारा संतुलन किया जाता है।",
    "AVL balance factor ∈ {−1, 0, +1}।",
    ["0 to 2", "−1, 0, or +1", "Only 0", "−2 to +2"]);

  b("Paper-II", "Data Structures and Algorithms", "Binary Tree", "Construct from Traversals", "Hard",
    "यदि प्रीऑर्डर = 1 2 4 5 3 और इनऑर्डर = 4 2 5 1 3 है, तो पोस्टऑर्डर ट्रैवर्सल क्या होगा?",
    "If preorder = 1 2 4 5 3 and inorder = 4 2 5 1 3, what is the postorder traversal?",
    ["4 5 2 3 1", "1 2 3 4 5", "4 2 5 3 1", "4 5 3 2 1"],
    0,
    "प्रीऑर्डर का पहला तत्व रूट = 1। इनऑर्डर में 1 के बायें (4 2 5) व दायें (3)। बायाँ उपवृक्ष: रूट 2, बायाँ 4, दायाँ 5; दायाँ उपवृक्ष: 3। पोस्टऑर्डर (बायाँ-दायाँ-रूट) = 4 5 2 3 1।",
    "रूट=1; बायाँ(4,5,2), दायाँ(3), फिर 1 → 4 5 2 3 1।",
    ["4 5 2 3 1", "1 2 3 4 5", "4 2 5 3 1", "4 5 3 2 1"]);

  b("Paper-II", "Data Structures and Algorithms", "Binary Tree", "Expression Tree", "Medium",
    "एक्सप्रेशन ट्री (expression tree) के बारे में कौन सा कथन सत्य है?",
    "Which statement is true about an expression tree?",
    ["सभी नोड ऑपरेटर होते हैं", "पत्तियाँ (leaves) ऑपरेंड और आंतरिक नोड ऑपरेटर होते हैं", "पत्तियाँ ऑपरेटर होती हैं", "इसमें केवल एक नोड होता है"],
    1,
    "एक्सप्रेशन ट्री में पत्ती (leaf) नोड ऑपरेंड (चर/स्थिरांक) होते हैं और आंतरिक नोड ऑपरेटर। इसका इनऑर्डर ट्रैवर्सल इनफिक्स, पोस्टऑर्डर पोस्टफिक्स एक्सप्रेशन देता है।",
    "Leaves = operands, internal = operators।",
    ["All nodes are operators", "Leaves are operands and internal nodes are operators", "Leaves are operators", "It has only one node"]);

  b("Paper-II", "Data Structures and Algorithms", "Graph", "Complete Graph Edges", "Hard",
    "5 शीर्षों (vertices) वाले पूर्ण (complete) अदिशिक ग्राफ में कितने किनारे (edges) होंगे?",
    "How many edges are there in a complete undirected graph with 5 vertices?",
    ["5", "10", "20", "25"],
    1,
    "पूर्ण ग्राफ में प्रत्येक जोड़ी शीर्ष जुड़े होते हैं; किनारों की संख्या = n(n−1)/2 = 5×4/2 = 10।",
    "Complete graph edges = n(n−1)/2 = 5×4/2 = 10।",
    ["5", "10", "20", "25"]);

  b("Paper-II", "Data Structures and Algorithms", "Graph", "DFS", "Medium",
    "ग्राफ के डेप्थ-फर्स्ट सर्च (DFS) में सामान्यतः कौन सी सहायक डेटा संरचना प्रयुक्त होती है?",
    "Which auxiliary data structure is typically used in Depth-First Search (DFS) of a graph?",
    ["क्यू", "स्टैक", "प्रायोरिटी क्यू", "हैश टेबल"],
    1,
    "DFS स्टैक (या रिकर्सन, जो आंतरिक रूप से स्टैक ही है) का उपयोग करता है — यह जहाँ तक संभव हो गहराई में जाकर फिर backtrack करता है।",
    "DFS = Stack (गहराई पहले)।",
    ["Queue", "Stack", "Priority queue", "Hash table"]);

  b("Paper-II", "Data Structures and Algorithms", "Graph", "BFS", "Medium",
    "ग्राफ के ब्रेड्थ-फर्स्ट सर्च (BFS) में कौन सी डेटा संरचना प्रयुक्त होती है?",
    "Which data structure is used in Breadth-First Search (BFS) of a graph?",
    ["स्टैक", "क्यू", "ट्री", "हीप"],
    1,
    "BFS क्यू (FIFO) का उपयोग करता है — यह वर्तमान शीर्ष के सभी पड़ोसियों को पहले, फिर अगले स्तर के शीर्षों को स्तर-दर-स्तर देखता है।",
    "BFS = Queue (स्तर-दर-स्तर)।",
    ["Stack", "Queue", "Tree", "Heap"]);

  b("Paper-II", "Data Structures and Algorithms", "Graph", "Spanning Tree", "Hard",
    "n शीर्षों वाले संयुक्त (connected) ग्राफ के स्पैनिंग ट्री में कितने किनारे होते हैं?",
    "How many edges are in the spanning tree of a connected graph with n vertices?",
    ["n", "n − 1", "n + 1", "n(n−1)/2"],
    1,
    "किसी संयुक्त ग्राफ के स्पैनिंग ट्री में n शीर्षों के लिए ठीक n − 1 किनारे होते हैं और इसमें कोई चक्र (cycle) नहीं होता।",
    "Spanning tree edges = n − 1।",
    ["n", "n − 1", "n + 1", "n(n−1)/2"]);

  b("Paper-II", "Data Structures and Algorithms", "Graph", "Minimum Spanning Tree", "Medium",
    "निम्न में से कौन सा एल्गोरिथ्म न्यूनतम स्पैनिंग ट्री (MST) ज्ञात करने के लिए है?",
    "Which of the following algorithms is used to find the Minimum Spanning Tree (MST)?",
    ["डिज्क्स्ट्रा एल्गोरिथ्म", "क्रुस्कल एल्गोरिथ्म", "रैखिक खोज", "बबल सॉर्ट"],
    1,
    "क्रुस्कल (और प्रिम) एल्गोरिथ्म न्यूनतम स्पैनिंग ट्री ज्ञात करते हैं। डिज्क्स्ट्रा एकल-स्रोत सबसे छोटा पथ (shortest path) ज्ञात करता है, MST नहीं।",
    "Kruskal/Prim = MST; Dijkstra = shortest path।",
    ["Dijkstra's algorithm", "Kruskal's algorithm", "Linear search", "Bubble sort"]);

  b("Paper-II", "Data Structures and Algorithms", "Symbol Table", "Hashing Collision", "Medium",
    "हैशिंग में 'टकराव' (collision) कब होता है?",
    "When does a 'collision' occur in hashing?",
    ["जब हैश टेबल खाली हो", "जब दो अलग-अलग कुंजियाँ एक ही इंडेक्स पर मैप हों", "जब कुंजी न मिले", "जब टेबल का आकार बढ़े"],
    1,
    "टकराव तब होता है जब हैश फ़ंक्शन दो या अधिक भिन्न कुंजियों (keys) को एक ही टेबल इंडेक्स/स्लॉट पर मैप कर देता है।",
    "Collision = दो keys, एक ही slot।",
    ["When hash table is empty", "When two different keys map to the same index", "When key is not found", "When table size increases"]);

  b("Paper-II", "Data Structures and Algorithms", "Symbol Table", "Collision Resolution", "Medium",
    "हैशिंग में टकराव (collision) हल करने की एक विधि 'चेनिंग' (chaining) में क्या किया जाता है?",
    "In hashing, the collision resolution method 'chaining' does what?",
    ["टेबल हटा दी जाती है", "प्रत्येक स्लॉट पर एक लिंक्ड लिस्ट में तत्व जोड़े जाते हैं", "कुंजी बदल दी जाती है", "टेबल का आकार आधा कर दिया जाता है"],
    1,
    "सेपरेट चेनिंग में प्रत्येक हैश स्लॉट एक लिंक्ड लिस्ट रखता है; टकराने वाली सभी कुंजियाँ उसी स्लॉट की लिस्ट में जोड़ दी जाती हैं। ओपन एड्रेसिंग (probing) दूसरी विधि है।",
    "Chaining = हर slot पर linked list।",
    ["Table is deleted", "Elements are added into a linked list at each slot", "Key is changed", "Table size is halved"]);

  b("Paper-II", "Data Structures and Algorithms", "Searching", "Interpolation Search", "Hard",
    "इंटरपोलेशन सर्च सबसे अच्छा प्रदर्शन कब देती है?",
    "When does interpolation search give its best performance?",
    ["अव्यवस्थित डेटा पर", "समान रूप से वितरित (uniformly distributed) क्रमबद्ध डेटा पर", "लिंक्ड लिस्ट पर", "बहुत छोटे ऐरे पर"],
    1,
    "इंटरपोलेशन सर्च समान रूप से वितरित क्रमबद्ध डेटा पर लक्ष्य के संभावित स्थान का अनुमान लगाती है, जिससे औसत जटिलता O(log log n) तक हो सकती है। असमान वितरण पर यह O(n) तक गिर सकती है।",
    "Interpolation = uniform sorted data पर सर्वोत्तम।",
    ["On unsorted data", "On uniformly distributed sorted data", "On linked list", "On very small arrays"]);

  b("Paper-II", "Data Structures and Algorithms", "Searching", "Binary Search Steps", "Hard",
    "1000 तत्वों की क्रमबद्ध सूची पर बाइनरी सर्च की सबसे खराब स्थिति में लगभग कितनी तुलनाएँ होंगी?",
    "On a sorted list of 1000 elements, approximately how many comparisons does binary search make in the worst case?",
    ["लगभग 500", "लगभग 10", "लगभग 100", "लगभग 1000"],
    1,
    "बाइनरी सर्च प्रत्येक चरण में खोज-क्षेत्र आधा करती है, अतः तुलनाएँ ≈ log₂(1000) ≈ 10। यही O(log n) जटिलता है।",
    "log₂(1000) ≈ 10 तुलनाएँ।",
    ["About 500", "About 10", "About 100", "About 1000"]);

  b("Paper-II", "Data Structures and Algorithms", "Sorting", "Stable Sort", "Hard",
    "निम्न में से कौन सा सॉर्टिंग एल्गोरिथ्म सामान्यतः स्थिर (stable) नहीं होता?",
    "Which of the following sorting algorithms is generally NOT stable?",
    ["मर्ज सॉर्ट", "इंसर्शन सॉर्ट", "क्विक सॉर्ट", "बबल सॉर्ट"],
    2,
    "क्विक सॉर्ट (मानक रूप में) समान मानों का सापेक्ष क्रम बदल सकती है, अतः अस्थिर है। मर्ज, इंसर्शन और बबल सॉर्ट स्थिर (stable) होती हैं।",
    "Quick sort = unstable; Merge/Insertion/Bubble = stable।",
    ["Merge sort", "Insertion sort", "Quick sort", "Bubble sort"]);

  b("Paper-II", "Data Structures and Algorithms", "Sorting", "In-place Sort", "Hard",
    "निम्न में से कौन सा सॉर्टिंग एल्गोरिथ्म इन-प्लेस (in-place) नहीं है (अतिरिक्त O(n) मेमोरी लेता है)?",
    "Which of the following sorting algorithms is NOT in-place (needs extra O(n) memory)?",
    ["बबल सॉर्ट", "सिलेक्शन सॉर्ट", "मर्ज सॉर्ट", "इंसर्शन सॉर्ट"],
    2,
    "मर्ज सॉर्ट को विलय (merge) के लिए अतिरिक्त O(n) सहायक ऐरे चाहिए, अतः यह इन-प्लेस नहीं है। बबल, सिलेक्शन व इंसर्शन सॉर्ट इन-प्लेस हैं।",
    "Merge sort = extra array; बाकी in-place।",
    ["Bubble sort", "Selection sort", "Merge sort", "Insertion sort"]);

  b("Paper-II", "Data Structures and Algorithms", "Sorting", "Selection Sort Pass", "Hard",
    "ऐरे [64, 25, 12, 22, 11] पर आरोही सिलेक्शन सॉर्ट के पहले पास (pass) के बाद ऐरे क्या होगा?",
    "After the first pass of ascending selection sort on the array [64, 25, 12, 22, 11], what is the array?",
    ["[11, 25, 12, 22, 64]", "[25, 64, 12, 22, 11]", "[11, 12, 22, 25, 64]", "[12, 25, 64, 22, 11]"],
    0,
    "सिलेक्शन सॉर्ट पहले पास में पूरे ऐरे का न्यूनतम (11) ढूँढकर उसे पहले स्थान (64) से बदल देती है → [11, 25, 12, 22, 64]।",
    "न्यूनतम 11 को आगे लाओ: [11, 25, 12, 22, 64]।",
    ["[11, 25, 12, 22, 64]", "[25, 64, 12, 22, 11]", "[11, 12, 22, 25, 64]", "[12, 25, 64, 22, 11]"]);

  b("Paper-II", "Data Structures and Algorithms", "Sorting", "Bubble Sort Pass", "Hard",
    "ऐरे [5, 1, 4, 2, 8] पर आरोही बबल सॉर्ट के पहले पास के बाद ऐरे क्या होगा?",
    "After the first pass of ascending bubble sort on the array [5, 1, 4, 2, 8], what is the array?",
    ["[1, 4, 2, 5, 8]", "[1, 2, 4, 5, 8]", "[1, 5, 4, 2, 8]", "[5, 1, 4, 2, 8]"],
    0,
    "पहले पास में आसन्न (adjacent) तुलनाएँ: (5,1)→स्वैप, (5,4)→स्वैप, (5,2)→स्वैप, (5,8)→नहीं। सबसे बड़ा 8 अंत में पहुँचता है → [1, 4, 2, 5, 8]।",
    "पहला पास: सबसे बड़ा (8) अंत में → [1, 4, 2, 5, 8]।",
    ["[1, 4, 2, 5, 8]", "[1, 2, 4, 5, 8]", "[1, 5, 4, 2, 8]", "[5, 1, 4, 2, 8]"]);

  // ---------- Computer Organization and Operating System (~25) ----------

  b("Paper-II", "Computer Organization and Operating System", "Computer Arithmetic", "2's Complement", "Hard",
    "4-बिट बाइनरी संख्या 0101 का 2's कॉम्प्लीमेंट क्या होगा?",
    "What is the 2's complement of the 4-bit binary number 0101?",
    ["1010", "1011", "0110", "1101"],
    1,
    "2's कॉम्प्लीमेंट = 1's कॉम्प्लीमेंट + 1। 0101 का 1's कॉम्प्लीमेंट = 1010; इसमें 1 जोड़ने पर = 1011।",
    "बिट पलटो (1010) + 1 = 1011।",
    ["1010", "1011", "0110", "1101"]);

  b("Paper-II", "Computer Organization and Operating System", "Computer Arithmetic", "1's Complement", "Medium",
    "बाइनरी संख्या 0110 का 1's कॉम्प्लीमेंट क्या होगा?",
    "What is the 1's complement of the binary number 0110?",
    ["1001", "1010", "0111", "1000"],
    0,
    "1's कॉम्प्लीमेंट में प्रत्येक बिट को उलट दिया जाता है (0→1, 1→0)। 0110 → 1001।",
    "हर बिट पलटो: 0110 → 1001।",
    ["1001", "1010", "0111", "1000"]);

  b("Paper-II", "Computer Organization and Operating System", "Computer Arithmetic", "Floating Point", "Medium",
    "फ्लोटिंग-पॉइंट संख्या निरूपण (IEEE 754) में कौन से तीन भाग होते हैं?",
    "Which three parts make up a floating-point number representation (IEEE 754)?",
    ["साइन, एक्सपोनेंट, मैंटिसा", "साइन, इंडेक्स, ऑफसेट", "बेस, रजिस्टर, पॉइंटर", "ओपकोड, ऑपरेंड, एड्रेस"],
    0,
    "फ्लोटिंग-पॉइंट संख्या तीन भागों में निरूपित होती है: साइन बिट (चिह्न), एक्सपोनेंट (biased घातांक) और मैंटिसा/सिग्निफिकैंड (आंशिक भाग)।",
    "Sign + Exponent + Mantissa।",
    ["Sign, exponent, mantissa", "Sign, index, offset", "Base, register, pointer", "Opcode, operand, address"]);

  b("Paper-II", "Computer Organization and Operating System", "Computer Arithmetic", "Booth's Algorithm", "Medium",
    "बूथ का एल्गोरिथ्म (Booth's algorithm) किस संक्रिया के लिए प्रयुक्त होता है?",
    "Booth's algorithm is used for which operation?",
    ["चिह्नित (signed) बाइनरी संख्याओं का गुणन", "बाइनरी जोड़", "बाइनरी विभाजन का शेष", "फ्लोटिंग-पॉइंट सामान्यीकरण"],
    0,
    "बूथ का एल्गोरिथ्म 2's कॉम्प्लीमेंट में चिह्नित बाइनरी संख्याओं के कुशल गुणन (multiplication) के लिए प्रयुक्त होता है।",
    "Booth = signed multiplication।",
    ["Multiplication of signed binary numbers", "Binary addition", "Remainder of binary division", "Floating-point normalization"]);

  b("Paper-II", "Computer Organization and Operating System", "CPU and Instructions", "Zero-Address Instruction", "Hard",
    "शून्य-पता (zero-address) निर्देश किस प्रकार की मशीन में प्रयुक्त होते हैं?",
    "Zero-address instructions are used in which type of machine?",
    ["स्टैक आधारित मशीन", "रजिस्टर आधारित मशीन", "एक्युमुलेटर आधारित मशीन", "पाइपलाइन मशीन"],
    0,
    "शून्य-पता निर्देशों में ऑपरेंड निहित रूप से स्टैक के शीर्ष से लिए जाते हैं (जैसे PUSH/POP/ADD), अतः ये स्टैक आधारित मशीनों में प्रयुक्त होते हैं।",
    "Zero-address = Stack machine (operand स्टैक से)।",
    ["Stack-based machine", "Register-based machine", "Accumulator-based machine", "Pipeline machine"]);

  b("Paper-II", "Computer Organization and Operating System", "CPU and Instructions", "Indirect Addressing", "Hard",
    "अप्रत्यक्ष (indirect) एड्रेसिंग मोड में निर्देश का पता-क्षेत्र (address field) क्या इंगित करता है?",
    "In indirect addressing mode, what does the address field of the instruction point to?",
    ["सीधे ऑपरेंड का मान", "उस मेमोरी स्थान का पता जिसमें ऑपरेंड का प्रभावी पता रखा है", "एक रजिस्टर", "अगला निर्देश"],
    1,
    "अप्रत्यक्ष एड्रेसिंग में पता-क्षेत्र उस मेमोरी स्थान को इंगित करता है जिसमें ऑपरेंड का प्रभावी पता (effective address) संग्रहीत है — अर्थात एक अतिरिक्त मेमोरी संदर्भ लगता है।",
    "Indirect = पते का पता।",
    ["The operand value directly", "The address of a memory location that holds the operand's effective address", "A register", "The next instruction"]);

  b("Paper-II", "Computer Organization and Operating System", "CPU and Instructions", "Microprogramming", "Medium",
    "माइक्रो-प्रोग्रामिंग में नियंत्रण इकाई (control unit) कैसे क्रियान्वित की जाती है?",
    "In microprogramming, how is the control unit implemented?",
    ["केवल हार्डवायर्ड गेट्स से", "कंट्रोल मेमोरी में संग्रहीत माइक्रोइंस्ट्रक्शन द्वारा", "केवल कैश द्वारा", "DMA द्वारा"],
    1,
    "माइक्रो-प्रोग्राम्ड नियंत्रण इकाई में नियंत्रण संकेत कंट्रोल मेमोरी (control store) में संग्रहीत माइक्रोइंस्ट्रक्शनों के अनुक्रम द्वारा उत्पन्न होते हैं — यह लचीला परंतु हार्डवायर्ड से धीमा होता है।",
    "Microprogrammed = control memory में microinstructions।",
    ["Only from hardwired gates", "By microinstructions stored in control memory", "Only by cache", "By DMA"]);

  b("Paper-II", "Computer Organization and Operating System", "CPU and Instructions", "Pipelining", "Medium",
    "पाइपलाइनिंग (pipelining) का मुख्य लाभ क्या है?",
    "What is the main benefit of pipelining?",
    ["घड़ी की गति घटाना", "निर्देश थ्रूपुट (throughput) बढ़ाना", "मेमोरी कम करना", "निर्देश आकार घटाना"],
    1,
    "पाइपलाइनिंग एक साथ कई निर्देशों के विभिन्न चरण (fetch, decode, execute...) ओवरलैप कर निष्पादित करती है, जिससे प्रति इकाई समय पूर्ण होने वाले निर्देशों की संख्या (throughput) बढ़ती है।",
    "Pipelining = overlap = अधिक throughput।",
    ["To reduce clock speed", "To increase instruction throughput", "To reduce memory", "To reduce instruction size"]);

  b("Paper-II", "Computer Organization and Operating System", "CPU and Instructions", "RISC", "Medium",
    "RISC आर्किटेक्चर की एक मुख्य विशेषता क्या है?",
    "What is a main characteristic of RISC architecture?",
    ["बहुत बड़ा और जटिल निर्देश सेट", "कम, सरल एवं समान लंबाई के निर्देश", "प्रत्येक निर्देश में कई मेमोरी संदर्भ", "माइक्रोप्रोग्राम अनिवार्य"],
    1,
    "RISC (Reduced Instruction Set Computer) में कम संख्या के सरल, समान-लंबाई (fixed length) निर्देश होते हैं जो प्रायः एक चक्र में निष्पादित होते हैं और अधिकांश संक्रियाएँ रजिस्टर-से-रजिस्टर होती हैं।",
    "RISC = कम, सरल, fixed-length निर्देश।",
    ["Very large and complex instruction set", "Few, simple, fixed-length instructions", "Many memory references per instruction", "Microprogram mandatory"]);

  b("Paper-II", "Computer Organization and Operating System", "Memory Organization", "SRAM vs DRAM", "Medium",
    "SRAM और DRAM के बीच मुख्य अंतर क्या है?",
    "What is the main difference between SRAM and DRAM?",
    ["SRAM को समय-समय पर रिफ्रेश चाहिए, DRAM को नहीं", "DRAM को समय-समय पर रिफ्रेश चाहिए, SRAM को नहीं", "दोनों समान गति के हैं", "SRAM नॉन-वोलेटाइल है"],
    1,
    "DRAM संधारित्र (capacitor) पर आधारित है जिसका चार्ज रिसता है, अतः इसे समय-समय पर रिफ्रेश करना पड़ता है और यह धीमा/सस्ता है। SRAM फ्लिप-फ्लॉप पर आधारित है, रिफ्रेश नहीं चाहिए, तेज है और कैश में प्रयुक्त होता है।",
    "DRAM = refresh चाहिए (capacitor); SRAM = नहीं।",
    ["SRAM needs periodic refresh, DRAM does not", "DRAM needs periodic refresh, SRAM does not", "Both are equal in speed", "SRAM is non-volatile"]);

  b("Paper-II", "Computer Organization and Operating System", "Memory Organization", "EEPROM", "Medium",
    "EEPROM की विशेषता क्या है?",
    "What is the characteristic of EEPROM?",
    ["इसे विद्युत् द्वारा मिटाकर पुनः लिखा जा सकता है", "इसे केवल UV प्रकाश से मिटाया जाता है", "इसे कभी मिटाया नहीं जा सकता", "यह वोलेटाइल मेमोरी है"],
    0,
    "EEPROM (Electrically Erasable Programmable ROM) को विद्युत् संकेतों द्वारा मिटाकर पुनः प्रोग्राम किया जा सकता है (बाइट-स्तर पर भी)। EPROM को UV प्रकाश से मिटाया जाता है।",
    "EEPROM = Electrically Erasable (बिजली से मिटे)।",
    ["It can be electrically erased and rewritten", "It can only be erased by UV light", "It can never be erased", "It is volatile memory"]);

  b("Paper-II", "Computer Organization and Operating System", "Memory Organization", "Cache Mapping", "Hard",
    "डायरेक्ट-मैप्ड कैश (direct-mapped cache) में मुख्य मेमोरी का प्रत्येक ब्लॉक कितनी कैश लाइनों में जा सकता है?",
    "In a direct-mapped cache, into how many cache lines can each main memory block go?",
    ["किसी भी लाइन में", "ठीक एक निश्चित लाइन में", "दो लाइनों में", "सभी लाइनों में"],
    1,
    "डायरेक्ट मैपिंग में प्रत्येक मेमोरी ब्लॉक ठीक एक ही पूर्वनिर्धारित कैश लाइन में जा सकता है (block number mod लाइनों की संख्या)। फुली-एसोसिएटिव में यह किसी भी लाइन में जा सकता है।",
    "Direct-mapped = हर block की एक ही fixed line।",
    ["Into any line", "Into exactly one fixed line", "Into two lines", "Into all lines"]);

  b("Paper-II", "Computer Organization and Operating System", "Memory Organization", "Locality of Reference", "Medium",
    "संदर्भ की स्थानीयता (locality of reference) के दो प्रकार कौन से हैं?",
    "What are the two types of locality of reference?",
    ["आंतरिक व बाह्य", "कालिक (temporal) व स्थानिक (spatial)", "प्रत्यक्ष व अप्रत्यक्ष", "तेज व धीमी"],
    1,
    "कालिक स्थानीयता (temporal): हाल में एक्सेस किया गया डेटा फिर एक्सेस होने की संभावना; स्थानिक स्थानीयता (spatial): निकटवर्ती पतों के एक्सेस होने की संभावना। यही कैश की प्रभावशीलता का आधार है।",
    "Temporal (समय) + Spatial (स्थान)।",
    ["Internal and external", "Temporal and spatial", "Direct and indirect", "Fast and slow"]);

  b("Paper-II", "Computer Organization and Operating System", "Memory Organization", "Effective Access Time", "Hard",
    "यदि कैश हिट अनुपात 0.9, कैश एक्सेस समय 10ns और मुख्य मेमोरी एक्सेस समय 100ns है, तो प्रभावी एक्सेस समय क्या होगा?",
    "If cache hit ratio is 0.9, cache access time is 10ns, and main memory access time is 100ns, what is the effective access time?",
    ["19 ns", "10 ns", "55 ns", "90 ns"],
    0,
    "प्रभावी एक्सेस समय = h×Tc + (1−h)×(Tm) = 0.9×10 + 0.1×100 = 9 + 10 = 19ns। (मुख्य मेमोरी संदर्भ में miss की स्थिति मानी गई है।)",
    "0.9×10 + 0.1×100 = 9 + 10 = 19ns।",
    ["19 ns", "10 ns", "55 ns", "90 ns"]);

  b("Paper-II", "Computer Organization and Operating System", "I/O Organization", "Vectored Interrupt", "Hard",
    "वेक्टर्ड इंटरप्ट (vectored interrupt) की मुख्य विशेषता क्या है?",
    "What is the main feature of a vectored interrupt?",
    ["CPU को हर डिवाइस को पोल करना पड़ता है", "इंटरप्ट करने वाला डिवाइस अपने ISR का पता स्वयं प्रदान करता है", "इसमें कोई ISR नहीं होता", "यह केवल सॉफ्टवेयर से आता है"],
    1,
    "वेक्टर्ड इंटरप्ट में इंटरप्ट करने वाला डिवाइस अपने संगत इंटरप्ट सर्विस रूटीन (ISR) का पता (vector) सीधे CPU को दे देता है, जिससे पोलिंग की आवश्यकता समाप्त होकर प्रतिक्रिया तेज हो जाती है।",
    "Vectored = डिवाइस खुद ISR का पता देता है।",
    ["CPU must poll every device", "The interrupting device itself supplies the address of its ISR", "There is no ISR", "It comes only from software"]);

  b("Paper-II", "Computer Organization and Operating System", "I/O Organization", "DMA Cycle Stealing", "Hard",
    "DMA के 'साइकिल स्टीलिंग' (cycle stealing) मोड में डेटा स्थानांतरण कैसे होता है?",
    "In the 'cycle stealing' mode of DMA, how is data transferred?",
    ["एक बार में पूरा ब्लॉक, CPU रुका रहता है", "एक-एक शब्द करके, बीच-बीच में CPU को बस लौटाते हुए", "बिना बस के", "केवल इंटरप्ट द्वारा"],
    1,
    "साइकिल स्टीलिंग में DMA नियंत्रक एक समय में एक शब्द (word) स्थानांतरित करता है और बीच-बीच में सिस्टम बस CPU को लौटा देता है (एक बस-चक्र 'चुराकर')। बर्स्ट मोड में पूरा ब्लॉक एक साथ स्थानांतरित होता है।",
    "Cycle stealing = एक शब्द, फिर बस CPU को।",
    ["Whole block at once while CPU is stalled", "One word at a time, returning the bus to CPU in between", "Without using the bus", "Only via interrupts"]);

  b("Paper-II", "Computer Organization and Operating System", "I/O Organization", "Programmed I/O", "Medium",
    "प्रोग्राम्ड I/O (programmed I/O) की मुख्य कमी क्या है?",
    "What is the main drawback of programmed I/O?",
    ["इसमें DMA नियंत्रक चाहिए", "CPU लगातार डिवाइस की स्थिति जाँचता (busy-wait) रहता है, समय बर्बाद होता है", "यह बहुत तेज है", "इसमें इंटरप्ट अनिवार्य है"],
    1,
    "प्रोग्राम्ड I/O में CPU बार-बार डिवाइस की स्थिति (status) जाँचता रहता है (polling/busy-waiting) जब तक डिवाइस तैयार न हो, जिससे CPU का बहुमूल्य समय व्यर्थ होता है।",
    "Programmed I/O = CPU busy-waiting में समय बर्बाद।",
    ["It requires a DMA controller", "CPU continuously checks device status (busy-wait), wasting time", "It is very fast", "It mandates interrupts"]);

  b("Paper-II", "Computer Organization and Operating System", "Operating System Overview", "Kernel", "Easy",
    "ऑपरेटिंग सिस्टम का 'कर्नेल' (kernel) क्या है?",
    "What is the 'kernel' of an operating system?",
    ["एक अनुप्रयोग सॉफ्टवेयर", "OS का मूल भाग जो हार्डवेयर व संसाधनों को नियंत्रित करता है", "एक इनपुट डिवाइस", "केवल यूज़र इंटरफ़ेस"],
    1,
    "कर्नेल ऑपरेटिंग सिस्टम का केंद्रीय/मूल भाग है जो सदैव मेमोरी में रहता है और प्रोसेस, मेमोरी, डिवाइस व सिस्टम कॉल जैसी मूलभूत सेवाओं तथा हार्डवेयर को नियंत्रित करता है।",
    "Kernel = OS का दिल (core), हार्डवेयर नियंत्रक।",
    ["An application software", "The core part of OS that controls hardware and resources", "An input device", "Only the user interface"]);

  b("Paper-II", "Computer Organization and Operating System", "Operating System Overview", "System Call", "Medium",
    "सिस्टम कॉल (system call) क्या प्रदान करती है?",
    "What does a system call provide?",
    ["दो प्रोसेस के बीच सीधा संबंध", "यूज़र प्रोग्राम और OS/कर्नेल सेवाओं के बीच अंतरापृष्ठ (interface)", "हार्डवेयर की गति", "केवल फाइल का नाम"],
    1,
    "सिस्टम कॉल यूज़र-मोड प्रोग्राम को कर्नेल की सेवाएँ (जैसे फाइल खोलना, प्रोसेस बनाना, I/O) माँगने का नियंत्रित अंतरापृष्ठ देती है; इससे नियंत्रण कर्नेल-मोड में जाता है।",
    "System call = program ↔ OS सेवाओं का द्वार।",
    ["A direct link between two processes", "An interface between user program and OS/kernel services", "Speed of hardware", "Only the file name"]);

  b("Paper-II", "Computer Organization and Operating System", "Process Management", "FCFS Waiting Time", "Hard",
    "तीन प्रोसेस P1, P2, P3 (बर्स्ट समय क्रमशः 3, 6, 4) समय 0 पर इसी क्रम में आती हैं। FCFS शेड्यूलिंग में औसत प्रतीक्षा समय क्या होगा?",
    "Three processes P1, P2, P3 (burst times 3, 6, 4) arrive at time 0 in this order. What is the average waiting time under FCFS scheduling?",
    ["4 ms", "6 ms", "3 ms", "5 ms"],
    0,
    "FCFS में क्रम P1→P2→P3। प्रतीक्षा समय: P1=0, P2=3 (P1 समाप्त होने तक), P3=3+6=9। औसत = (0+3+9)/3 = 12/3 = 4 ms।",
    "Waiting: 0, 3, 9 → (0+3+9)/3 = 4 ms।",
    ["4 ms", "6 ms", "3 ms", "5 ms"]);

  b("Paper-II", "Computer Organization and Operating System", "Process Management", "Context Switch", "Medium",
    "संदर्भ परिवर्तन (context switch) के दौरान OS क्या करता है?",
    "What does the OS do during a context switch?",
    ["एक प्रोसेस को स्थायी रूप से हटाता है", "वर्तमान प्रोसेस की अवस्था सहेजता है और अगली प्रोसेस की अवस्था लोड करता है", "मेमोरी बढ़ाता है", "फाइल हटाता है"],
    1,
    "संदर्भ परिवर्तन में OS वर्तमान प्रोसेस का संदर्भ (रजिस्टर, PC आदि) उसके PCB में सहेजता है और अगली शेड्यूल की गई प्रोसेस का संदर्भ PCB से लोड करता है। यह एक overhead (व्यय) है।",
    "Context switch = एक की state सेव, दूसरी की लोड।",
    ["Permanently removes a process", "Saves current process state and loads the next process's state", "Increases memory", "Deletes a file"]);

  b("Paper-II", "Computer Organization and Operating System", "Process Management", "Banker's Algorithm", "Hard",
    "बैंकर्स एल्गोरिथ्म (Banker's algorithm) डेडलॉक की किस रणनीति से संबंधित है?",
    "Banker's algorithm relates to which deadlock strategy?",
    ["डेडलॉक निवारण (prevention)", "डेडलॉक परिहार (avoidance)", "डेडलॉक पहचान (detection)", "डेडलॉक अनदेखी"],
    1,
    "बैंकर्स एल्गोरिथ्म डेडलॉक परिहार (avoidance) की तकनीक है; यह किसी संसाधन आवंटन को केवल तभी स्वीकृत करता है जब सिस्टम 'सुरक्षित अवस्था' (safe state) में बना रहे।",
    "Banker's = deadlock avoidance (safe state)।",
    ["Deadlock prevention", "Deadlock avoidance", "Deadlock detection", "Deadlock ignorance"]);

  b("Paper-II", "Computer Organization and Operating System", "Memory Organization", "FIFO Page Replacement", "Hard",
    "संदर्भ स्ट्रिंग 1, 2, 3, 1, 4, 2, 5 और 3 फ्रेम के साथ FIFO पेज प्रतिस्थापन में कितने पेज फॉल्ट होंगे?",
    "With reference string 1, 2, 3, 1, 4, 2, 5 and 3 frames, how many page faults occur under FIFO page replacement?",
    ["5", "7", "4", "6"],
    0,
    "FIFO ट्रेस: 1(F)[1], 2(F)[1,2], 3(F)[1,2,3], 1(हिट), 4(F: 1 हटा)[2,3,4], 2(हिट), 5(F: 2 हटा)[3,4,5]। कुल फॉल्ट = 5।",
    "फॉल्ट: 1,2,3,4,5 (1 और 2 हिट) = 5।",
    ["5", "7", "4", "6"]);

  b("Paper-II", "Computer Organization and Operating System", "Memory Organization", "Internal Fragmentation", "Hard",
    "आंतरिक विखंडन (internal fragmentation) क्या है?",
    "What is internal fragmentation?",
    ["आवंटित ब्लॉक के भीतर प्रयुक्त न हुई (बर्बाद) मेमोरी", "आवंटित ब्लॉकों के बीच बिखरा खाली स्थान", "डिस्क का पूर्ण भर जाना", "कैश का ओवरफ्लो"],
    0,
    "आंतरिक विखंडन तब होता है जब प्रोसेस को उसकी आवश्यकता से बड़ा (निश्चित आकार का) ब्लॉक आवंटित होता है और ब्लॉक के भीतर बचा स्थान अप्रयुक्त रह जाता है। बाह्य विखंडन में खाली स्थान ब्लॉकों के बीच बिखरा होता है।",
    "Internal = ब्लॉक के अंदर बर्बाद जगह।",
    ["Unused (wasted) memory within an allocated block", "Scattered free space between allocated blocks", "Disk becoming completely full", "Cache overflow"]);

  b("Paper-II", "Computer Organization and Operating System", "Memory Organization", "Disk Scheduling SSTF", "Medium",
    "SSTF (शॉर्टेस्ट सीक टाइम फर्स्ट) डिस्क शेड्यूलिंग किस अनुरोध को पहले सेवा देती है?",
    "Which request does SSTF (Shortest Seek Time First) disk scheduling service first?",
    ["सबसे पहले आया अनुरोध", "वर्तमान हेड स्थिति के सबसे निकट वाला अनुरोध", "सबसे दूर वाला अनुरोध", "सबसे बड़ी संख्या वाला ट्रैक"],
    1,
    "SSTF वर्तमान डिस्क-हेड स्थिति से न्यूनतम सीक दूरी (सबसे निकट ट्रैक) वाले अनुरोध को पहले सेवा देती है। इससे औसत सीक समय घटता है परंतु दूर के अनुरोधों में starvation संभव है।",
    "SSTF = सबसे निकट ट्रैक पहले।",
    ["The first arrived request", "The request nearest to the current head position", "The farthest request", "The highest track number"]);

  b("Paper-II", "Computer Organization and Operating System", "File Management", "File Allocation", "Medium",
    "फाइल आवंटन की किस विधि में एक इंडेक्स ब्लॉक फाइल के सभी ब्लॉकों के पते रखता है?",
    "In which file allocation method does an index block hold the addresses of all blocks of the file?",
    ["सन्निहित (contiguous) आवंटन", "लिंक्ड आवंटन", "इंडेक्स्ड (indexed) आवंटन", "बिट-मैप आवंटन"],
    2,
    "इंडेक्स्ड आवंटन में प्रत्येक फाइल के लिए एक इंडेक्स ब्लॉक होता है जिसमें फाइल के सभी डेटा ब्लॉकों के पते संग्रहीत रहते हैं, जिससे प्रत्यक्ष (random) एक्सेस संभव होता है और बाह्य विखंडन नहीं होता।",
    "Indexed = इंडेक्स ब्लॉक में सभी पते।",
    ["Contiguous allocation", "Linked allocation", "Indexed allocation", "Bit-map allocation"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
