/*
 * RSSB BCI 2026 - Paper-II (Computer + Pedagogy) curated question bank.
 * Sabhi factual, verified MCQs. Bilingual (Hindi roman + English).
 * Browser: window.RSSB_BANK_P2 ; Node: module.exports.
 */
(function (root) {
  "use strict";
  const arr = [];
  let n = 0;
  // b(subject, topic, sub, diff, qHi, qEn, opts, ans, expl, trick, time, optsEn)
  function b(subject, topic, sub, diff, qHi, qEn, opts, ans, expl, trick, time, optsEn) {
    n++;
    const oEn = optsEn || opts;
    arr.push({
      id: `P2-${String(n).padStart(4, "0")}`,
      paper: "Paper-II", subject, topic, subtopic: sub, difficulty: diff,
      question: `${qHi}\n${qEn}`, questionHi: qHi, questionEn: qEn,
      options: opts.map((o, i) => `${o} / ${oEn[i]}`), optionsHi: opts, optionsEn: oEn,
      answer: ans, explanation: expl, trick: trick || "", time: time || 40,
      sourceType: "Curated important (verified)"
    });
  }

  /* ---------- Fundamentals of Computer ---------- */
  b("Fundamentals of Computer", "Computer Basics", "Generations", "Easy",
    "First generation ke computers mein kaunsa component use hota tha?",
    "Which component was used in first generation computers?",
    ["Vacuum tube", "Transistor", "IC", "Microprocessor"], 0,
    "Pehli generation (1940-56) mein vacuum tubes use hote the.", "1st=tube, 2nd=transistor, 3rd=IC, 4th=microprocessor.");
  b("Fundamentals of Computer", "Computer Basics", "Generations", "Medium",
    "Microprocessor kis generation ke computers ki pehchaan hai?",
    "Microprocessor is the identity of which generation of computers?",
    ["Second", "Third", "Fourth", "First"], 2,
    "Fourth generation (1971 se) mein microprocessor (VLSI) aaya.", "4th generation = microprocessor.");
  b("Fundamentals of Computer", "Computer Basics", "Father", "Easy",
    "Computer ka janak (father of computer) kise kaha jaata hai?",
    "Who is known as the father of the computer?",
    ["Charles Babbage", "Alan Turing", "John von Neumann", "Bill Gates"], 0,
    "Charles Babbage ne Analytical Engine design kiya, isliye unhe father of computer kehte hain.", "Babbage = father of computer.");
  b("Fundamentals of Computer", "Computer Basics", "Full Form", "Easy",
    "CPU ka full form kya hai?",
    "What is the full form of CPU?",
    ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Control Processing Unit"], 0,
    "CPU = Central Processing Unit, jise computer ka brain kehte hain.", "CPU = brain of computer.");
  b("Fundamentals of Computer", "Computer Basics", "Brain", "Easy",
    "Computer ka 'brain' kise kaha jaata hai?",
    "What is called the 'brain' of the computer?",
    ["CPU", "RAM", "Hard disk", "Monitor"], 0,
    "CPU saare instructions process aur control karta hai, isliye ise brain kehte hain.", "Processing = CPU = brain.");
  b("Fundamentals of Computer", "Computer Basics", "ALU", "Medium",
    "CPU ka kaunsa part arithmetic aur logical operations karta hai?",
    "Which part of the CPU performs arithmetic and logical operations?",
    ["ALU", "Control Unit", "Register", "Cache"], 0,
    "ALU (Arithmetic Logic Unit) sab ganitiya aur tarksangat operations karti hai.", "ALU = Arithmetic Logic Unit.");
  b("Fundamentals of Computer", "Input Devices", "Input", "Easy",
    "Nimn mein se kaunsa input device hai?",
    "Which of the following is an input device?",
    ["Keyboard", "Monitor", "Printer", "Speaker"], 0,
    "Keyboard data computer ke andar bhejta hai, isliye input device hai.", "Andar bheje = input.");
  b("Fundamentals of Computer", "Output Devices", "Output", "Easy",
    "Nimn mein se kaunsa output device hai?",
    "Which of the following is an output device?",
    ["Printer", "Mouse", "Scanner", "Joystick"], 0,
    "Printer computer se information hard copy ke roop mein bahar deta hai.", "Bahar de = output.");
  b("Fundamentals of Computer", "Input Devices", "OMR", "Medium",
    "OMR ka use kis kaam ke liye hota hai?",
    "OMR is used for which purpose?",
    ["Pencil se bhare marks padhna", "Barcode print karna", "Sound record karna", "Video edit karna"], 0,
    "OMR (Optical Mark Reader) objective sheets par pencil/pen se bhare marks detect karta hai.", "OMR = mark reader (exam sheets).",
    40, ["Reading pencil-filled marks", "Printing barcode", "Recording sound", "Editing video"]);
  b("Fundamentals of Computer", "Memory", "RAM", "Easy",
    "RAM kis type ki memory hai?",
    "RAM is which type of memory?",
    ["Volatile (temporary)", "Non-volatile (permanent)", "Read only", "Secondary"], 0,
    "RAM volatile hoti hai - power band hone par data mit jaata hai.", "RAM = temporary, power gaya to data gaya.");
  b("Fundamentals of Computer", "Memory", "ROM", "Easy",
    "ROM ke baare mein kaunsa statement sahi hai?",
    "Which statement about ROM is correct?",
    ["Non-volatile, mostly read only", "Volatile aur temporary", "CPU ka register", "Sabse fast cache"], 0,
    "ROM (Read Only Memory) non-volatile hoti hai aur power off par bhi data rakhti hai.", "ROM = permanent, read only.",
    40, ["Non-volatile, mostly read only", "Volatile and temporary", "A CPU register", "The fastest cache"]);
  b("Fundamentals of Computer", "Memory", "Cache", "Medium",
    "Nimn mein se sabse fast memory kaunsi hai?",
    "Which of the following is the fastest memory?",
    ["Register", "Cache", "RAM", "Hard disk"], 0,
    "Speed order: Register > Cache > RAM > Secondary storage. Register sabse fast hai.", "CPU ke jitna paas, utni fast.");
  b("Fundamentals of Computer", "Memory", "Secondary", "Easy",
    "Nimn mein se kaunsa secondary storage device hai?",
    "Which of the following is a secondary storage device?",
    ["Hard disk", "RAM", "Cache", "Register"], 0,
    "Hard disk permanent secondary storage hai; RAM/cache/register primary hain.", "Permanent bada storage = secondary.");
  b("Fundamentals of Computer", "Digital versus Analog", "Bit", "Easy",
    "Computer memory ki sabse choti unit kya hai?",
    "What is the smallest unit of computer memory?",
    ["Bit", "Byte", "Nibble", "Word"], 0,
    "Bit (0 ya 1) sabse choti unit hai. 4 bit = nibble, 8 bit = byte.", "Bit = binary digit = sabse chota.");
  b("Fundamentals of Computer", "Data Processing", "Byte", "Easy",
    "Ek byte mein kitne bits hote hain?",
    "How many bits are there in one byte?",
    ["8", "4", "16", "2"], 0,
    "1 byte = 8 bits. 4 bits ka nibble hota hai.", "Byte = 8 bits.");

  /* ---------- Data Processing (MS Office) ---------- */
  b("Data Processing", "MS Word", "Extension", "Easy",
    "MS Word 2007+ ki default file extension kya hai?",
    "What is the default file extension of MS Word 2007 and later?",
    [".docx", ".xlsx", ".pptx", ".txt"], 0,
    "Word documents .docx extension use karte hain (purana .doc tha).", "Word=docx, Excel=xlsx, PPT=pptx.");
  b("Data Processing", "MS Excel", "Extension", "Easy",
    "MS Excel 2007+ ki default file extension kya hai?",
    "What is the default file extension of MS Excel 2007 and later?",
    [".xlsx", ".docx", ".pptx", ".accdb"], 0,
    "Excel workbooks .xlsx extension use karte hain.", "Excel = xlsx.");
  b("Data Processing", "MS Excel", "Formula", "Easy",
    "MS Excel mein formula kis symbol se shuru hota hai?",
    "In MS Excel, a formula starts with which symbol?",
    ["=", "+", "@", "#"], 0,
    "Excel mein har formula equal sign (=) se start hota hai, jaise =SUM(A1:A5).", "Formula = se shuru.");
  b("Data Processing", "MS Excel", "Function", "Medium",
    "MS Excel mein kisi range ka jod nikaalne wala function kaunsa hai?",
    "Which function is used to add up a range in MS Excel?",
    ["SUM", "COUNT", "AVERAGE", "MAX"], 0,
    "SUM function values ka total nikaalta hai, jaise =SUM(A1:A10).", "SUM = jodna.");
  b("Data Processing", "MS Excel", "Cell Reference", "Hard",
    "Excel mein $A$1 kis type ka cell reference hai?",
    "In Excel, $A$1 is which type of cell reference?",
    ["Absolute", "Relative", "Mixed", "Circular"], 0,
    "Dono dollar sign row aur column ko lock karte hain, isliye ye absolute reference hai.", "Dono $ = absolute.");
  b("Data Processing", "MS Excel", "Rows", "Medium",
    "MS Excel worksheet mein columns ko kaise label kiya jaata hai?",
    "How are columns labelled in an MS Excel worksheet?",
    ["Letters (A, B, C...)", "Numbers (1, 2, 3...)", "Roman numerals", "Symbols"], 0,
    "Excel mein columns letters se (A, B, C...) aur rows numbers se (1, 2, 3...) label hote hain.", "Column=letter, Row=number.",
    40, ["Letters (A, B, C...)", "Numbers (1, 2, 3...)", "Roman numerals", "Symbols"]);
  b("Data Processing", "MS PowerPoint", "Use", "Easy",
    "MS PowerPoint ka mukhya use kya hai?",
    "What is the main use of MS PowerPoint?",
    ["Presentation banana", "Spreadsheet banana", "Database banana", "Video editing"], 0,
    "PowerPoint slides/presentation banane ke liye use hota hai.", "PPT = presentation.",
    35, ["Creating presentations", "Creating spreadsheets", "Creating databases", "Video editing"]);
  b("Data Processing", "MS PowerPoint", "Shortcut", "Medium",
    "PowerPoint mein slideshow start karne ki shortcut key kaunsi hai?",
    "Which shortcut key starts the slideshow in PowerPoint?",
    ["F5", "F2", "F7", "F12"], 0,
    "F5 dabane par presentation pehli slide se shuru hoti hai.", "F5 = full slideshow.");
  b("Data Processing", "MS Access", "Type", "Medium",
    "MS Access kis type ka software hai?",
    "MS Access is which type of software?",
    ["Database management", "Word processing", "Spreadsheet", "Presentation"], 0,
    "MS Access ek DBMS (Database Management System) software hai.", "Access = database.",
    40, ["Database management", "Word processing", "Spreadsheet", "Presentation"]);
  b("Data Processing", "MS Word", "Shortcut", "Easy",
    "MS Word mein text copy karne ki shortcut key kya hai?",
    "What is the shortcut key to copy text in MS Word?",
    ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"], 0,
    "Ctrl+C copy, Ctrl+V paste, Ctrl+X cut, Ctrl+Z undo karta hai.", "C=copy, V=paste, X=cut, Z=undo.");
  b("Data Processing", "MS Word", "Shortcut", "Easy",
    "MS Word mein document save karne ki shortcut key kya hai?",
    "What is the shortcut key to save a document in MS Word?",
    ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"], 0,
    "Ctrl+S se document save hota hai.", "S = Save.");

  /* ---------- Programming Fundamentals ---------- */
  b("Programming Fundamentals", "C", "History", "Medium",
    "C language ke developer kaun hain?",
    "Who developed the C language?",
    ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"], 0,
    "Dennis Ritchie ne 1972 mein Bell Labs mein C banayi.", "C=Ritchie, C++=Stroustrup, Java=Gosling, Python=Guido.");
  b("Programming Fundamentals", "Java", "History", "Medium",
    "Java language ke developer kaun hain?",
    "Who developed the Java language?",
    ["James Gosling", "Dennis Ritchie", "Guido van Rossum", "Anders Hejlsberg"], 0,
    "James Gosling ne Sun Microsystems mein Java develop ki.", "Java = James Gosling.");
  b("Programming Fundamentals", "Python", "History", "Medium",
    "Python language ke creator kaun hain?",
    "Who is the creator of the Python language?",
    ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Bjarne Stroustrup"], 0,
    "Guido van Rossum ne Python banayi.", "Python = Guido van Rossum.");
  b("Programming Fundamentals", "C++", "History", "Medium",
    "C++ language kisne develop ki?",
    "Who developed the C++ language?",
    ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Ken Thompson"], 0,
    "Bjarne Stroustrup ne C++ banayi (C ka OOP extension).", "C++ = Stroustrup.");
  b("Programming Fundamentals", "Programming Techniques", "Compiler", "Medium",
    "Compiler ka kaam kya hota hai?",
    "What is the function of a compiler?",
    ["Poora source code ek saath machine code mein convert karna", "Line by line execute karna", "Virus scan karna", "File compress karna"], 0,
    "Compiler puri source code ko ek baar mein machine code mein translate karta hai; interpreter line-by-line karta hai.", "Compiler=poora ek saath, Interpreter=line by line.",
    45, ["Converts whole source code to machine code at once", "Executes line by line", "Scans for virus", "Compresses files"]);
  b("Programming Fundamentals", "Programming Techniques", "Interpreter", "Medium",
    "Nimn mein se kaunsi language mukhyata interpreted hai?",
    "Which of the following is mainly an interpreted language?",
    ["Python", "C", "C++", "Assembly"], 0,
    "Python interpreter line-by-line execute hoti hai; C/C++ compiled hain.", "Python = interpreted.");
  b("Programming Fundamentals", "Data Types", "Language", "Easy",
    "Computer sirf kaunsi language directly samajhta hai?",
    "Which language does a computer directly understand?",
    ["Machine language (binary)", "English", "C language", "Java"], 0,
    "Computer sirf machine language (0 aur 1) directly samajhta hai.", "Machine = 0 aur 1.",
    35, ["Machine language (binary)", "English", "C language", "Java"]);
  b("Programming Fundamentals", "OOP Basics", "Concepts", "Medium",
    "Nimn mein se kaunsa OOP ka concept nahi hai?",
    "Which of the following is NOT an OOP concept?",
    ["Compilation", "Inheritance", "Encapsulation", "Polymorphism"], 0,
    "OOP ke 4 pillars: Encapsulation, Inheritance, Polymorphism, Abstraction. Compilation OOP concept nahi hai.", "OOP pillars: E-I-P-A.",
    45, ["Compilation", "Inheritance", "Encapsulation", "Polymorphism"]);
  b("Programming Fundamentals", "OOP Basics", "Encapsulation", "Medium",
    "Data aur methods ko ek unit mein bind karna kya kehlata hai?",
    "Binding data and methods together into one unit is called?",
    ["Encapsulation", "Inheritance", "Polymorphism", "Recursion"], 0,
    "Encapsulation data aur functions ko ek class mein bind karta hai aur data hiding deta hai.", "Encapsulate = capsule mein band.",
    40, ["Encapsulation", "Inheritance", "Polymorphism", "Recursion"]);
  b("Programming Fundamentals", "Loops", "Loop", "Easy",
    "Loop ka mukhya kaam kya hai?",
    "What is the main purpose of a loop?",
    ["Statements ko baar-baar repeat karna", "Program band karna", "Variable delete karna", "File print karna"], 0,
    "Loop ek block of code ko condition ke aadhaar par repeat karta hai.", "Loop = repeat.",
    35, ["Repeating statements multiple times", "Closing the program", "Deleting a variable", "Printing a file"]);
  b("Programming Fundamentals", "Artificial Intelligence", "AI", "Medium",
    "Artificial Intelligence ka mukhya uddeshya kya hai?",
    "What is the main objective of Artificial Intelligence?",
    ["Machines ko insaan jaisi soch/nirnay dena", "Sirf font badalna", "Cable jodna", "Sirf printing"], 0,
    "AI ka lakshya machines ko human-like learning, reasoning aur decision-making dena hai.", "AI = machine ko sochna sikhana.",
    40, ["Giving machines human-like thinking/decisions", "Only changing fonts", "Connecting cables", "Only printing"]);
  b("Programming Fundamentals", "Machine Learning", "ML", "Medium",
    "Machine Learning kya hai?",
    "What is Machine Learning?",
    ["Data se seekhkar khud improve hone wale systems", "Sirf ek printer driver", "Ek prakar ka virus", "Ek keyboard layout"], 0,
    "ML AI ki branch hai jisme systems data se seekhkar apni performance improve karte hain, without explicit programming.", "ML = data se seekhna.",
    40, ["Systems that improve by learning from data", "Just a printer driver", "A type of virus", "A keyboard layout"]);

  /* ---------- Data Structures and Algorithms ---------- */
  b("Data Structures and Algorithms", "Stack", "LIFO", "Easy",
    "Stack kis principle par kaam karta hai?",
    "Stack works on which principle?",
    ["LIFO", "FIFO", "Random", "Priority"], 0,
    "Stack mein last inserted element pehle nikalta hai (Last In First Out).", "Plates ka dher: last plate first out.");
  b("Data Structures and Algorithms", "Queue", "FIFO", "Easy",
    "Queue kis principle par kaam karta hai?",
    "Queue works on which principle?",
    ["FIFO", "LIFO", "Random", "Priority only"], 0,
    "Queue mein first inserted element pehle nikalta hai (First In First Out).", "Line: pehle aao pehle jao.");
  b("Data Structures and Algorithms", "Stack", "Operations", "Medium",
    "Stack mein element add karne wale operation ko kya kehte hain?",
    "What is the operation of adding an element to a stack called?",
    ["Push", "Pop", "Enqueue", "Insert"], 0,
    "Stack mein push se element add aur pop se remove hota hai.", "Push in, Pop out.");
  b("Data Structures and Algorithms", "Searching", "Binary Search", "Hard",
    "Binary search ka average time complexity kya hai?",
    "What is the average time complexity of binary search?",
    ["O(log n)", "O(n)", "O(n^2)", "O(1)"], 0,
    "Binary search har step mein search space aadha karta hai, isliye O(log n).", "Aadha-aadha = log n.");
  b("Data Structures and Algorithms", "Searching", "Binary Search", "Medium",
    "Binary search lagaane ke liye array kaisa hona chahiye?",
    "For binary search to work, the array must be?",
    ["Sorted", "Unsorted", "Empty", "Circular"], 0,
    "Binary search sirf sorted array par kaam karta hai.", "Binary search = sorted array.");
  b("Data Structures and Algorithms", "Sorting", "Bubble Sort", "Hard",
    "Bubble sort ka worst-case time complexity kya hai?",
    "What is the worst-case time complexity of bubble sort?",
    ["O(n^2)", "O(n)", "O(log n)", "O(n log n)"], 0,
    "Bubble sort nested comparisons karta hai, worst case O(n^2).", "Nested loop = O(n^2).");
  b("Data Structures and Algorithms", "Linked List", "Concept", "Medium",
    "Linked list mein har node mein kya hota hai?",
    "In a linked list, each node contains?",
    ["Data aur next node ka address", "Sirf data", "Sirf address", "Sirf index"], 0,
    "Linked list ke node mein data aur agle node ka pointer/address hota hai.", "Node = data + pointer.",
    40, ["Data and address of next node", "Only data", "Only address", "Only index"]);
  b("Data Structures and Algorithms", "Binary Tree", "Concept", "Medium",
    "Binary tree mein ek node ke maximum kitne children ho sakte hain?",
    "In a binary tree, a node can have at most how many children?",
    ["2", "1", "3", "Unlimited"], 0,
    "Binary tree mein har node ke maximum 2 children (left aur right) hote hain.", "Binary = do (2 children).");
  b("Data Structures and Algorithms", "Algorithms", "Definition", "Easy",
    "Algorithm kya hai?",
    "What is an algorithm?",
    ["Kisi problem ko solve karne ke step-by-step nirdesh", "Ek programming language", "Ek hardware", "Ek virus"], 0,
    "Algorithm kisi samasya ko hal karne ke liye finite, step-by-step instructions ka set hai.", "Algorithm = step-by-step recipe.",
    35, ["Step-by-step instructions to solve a problem", "A programming language", "A hardware", "A virus"]);

  /* ---------- Computer Organization and Operating System ---------- */
  b("Computer Organization and Operating System", "Operating System Overview", "OS", "Easy",
    "Nimn mein se kaunsa operating system hai?",
    "Which of the following is an operating system?",
    ["Linux", "MS Word", "Oracle", "Photoshop"], 0,
    "Linux ek OS hai; baaki application software hain.", "OS: Windows, Linux, macOS, Android.");
  b("Computer Organization and Operating System", "Operating System Overview", "Function", "Medium",
    "Operating system ka mukhya kaam kya hai?",
    "What is the main function of an operating system?",
    ["Hardware aur software ke beech ka intermediary", "Sirf games chalana", "Sirf typing", "Sirf printing"], 0,
    "OS resources manage karta hai aur user, hardware, software ke beech interface deta hai.", "OS = resource manager/interface.",
    40, ["Intermediary between hardware and software", "Only running games", "Only typing", "Only printing"]);
  b("Computer Organization and Operating System", "Process Management", "Deadlock", "Hard",
    "Nimn mein se kaunsi deadlock ki necessary condition hai?",
    "Which of the following is a necessary condition for deadlock?",
    ["Mutual exclusion", "Normalization", "Compilation", "Indexing"], 0,
    "Coffman conditions: Mutual exclusion, Hold and wait, No preemption, Circular wait.", "Deadlock = Coffman 4 conditions.");
  b("Computer Organization and Operating System", "Memory Organization", "Virtual Memory", "Hard",
    "Virtual memory ka mukhya faayda kya hai?",
    "What is the main advantage of virtual memory?",
    ["RAM se badi programs chalana", "Screen brightness badhana", "Virus rokna", "Printing tez karna"], 0,
    "Virtual memory disk ko RAM ki tarah use karke physical RAM se badi programs run karne deti hai.", "Virtual memory = disk ko RAM jaisa use.",
    45, ["Running programs larger than RAM", "Increasing brightness", "Blocking virus", "Faster printing"]);
  b("Computer Organization and Operating System", "CPU and Instructions", "Register", "Medium",
    "CPU ke andar sabse fast storage kya hoti hai?",
    "What is the fastest storage inside the CPU?",
    ["Register", "RAM", "Hard disk", "SSD"], 0,
    "Register CPU ke andar hote hain aur sabse fast storage provide karte hain.", "CPU ke andar = register.");
  b("Computer Organization and Operating System", "Process Management", "Booting", "Medium",
    "Computer on hone par OS load hone ki process ko kya kehte hain?",
    "The process of loading the OS when the computer starts is called?",
    ["Booting", "Formatting", "Compiling", "Debugging"], 0,
    "Booting mein computer on hote hi OS memory mein load hota hai.", "Boot = start-up loading.");

  /* ---------- Communication and Network Concepts ---------- */
  b("Communication and Network Concepts", "OSI Model", "Layers", "Medium",
    "OSI model mein kitni layers hoti hain?",
    "How many layers are there in the OSI model?",
    ["7", "5", "4", "6"], 0,
    "OSI model mein 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.", "OSI = 7 layers.");
  b("Communication and Network Concepts", "OSI Model", "Transport", "Hard",
    "OSI model ki kaunsi layer end-to-end delivery karti hai?",
    "Which OSI layer handles end-to-end delivery?",
    ["Transport", "Physical", "Data Link", "Session"], 0,
    "Transport layer segmentation, reliability aur end-to-end delivery handle karti hai.", "End-to-end = Transport.");
  b("Communication and Network Concepts", "TCP/IP", "TCP", "Medium",
    "TCP aur UDP mein mukhya antar kya hai?",
    "What is the main difference between TCP and UDP?",
    ["TCP connection-oriented, UDP connectionless", "TCP connectionless, UDP connection-oriented", "Dono same", "UDP reliable, TCP nahi"], 0,
    "TCP reliable connection-oriented hai, UDP fast lekin connectionless.", "TCP=phone call, UDP=broadcast.",
    45, ["TCP is connection-oriented, UDP is connectionless", "TCP is connectionless, UDP is connection-oriented", "Both are same", "UDP is reliable, TCP is not"]);
  b("Communication and Network Concepts", "Networking Devices", "Router", "Medium",
    "Do alag networks ko jodne wala device kaunsa hai?",
    "Which device connects two different networks?",
    ["Router", "Hub", "Repeater", "Modem"], 0,
    "Router alag-alag networks ke beech data route karta hai (Network layer device).", "Router = networks ko jode.");
  b("Communication and Network Concepts", "LAN", "LAN", "Easy",
    "LAN ka full form kya hai?",
    "What is the full form of LAN?",
    ["Local Area Network", "Large Area Network", "Long Access Network", "Linked Area Node"], 0,
    "LAN = Local Area Network, ek chote area (office/school) mein computers ko jodta hai.", "LAN = Local.");
  b("Communication and Network Concepts", "WAN", "WAN", "Easy",
    "Internet kis type ka network hai?",
    "Internet is which type of network?",
    ["WAN", "LAN", "PAN", "MAN"], 0,
    "Internet duniya bhar mein faila hua sabse bada WAN (Wide Area Network) hai.", "Bada area = WAN.");
  b("Communication and Network Concepts", "Introduction to Networks", "Topology", "Medium",
    "Kis topology mein saare computers ek central device se jude hote hain?",
    "In which topology are all computers connected to a central device?",
    ["Star", "Bus", "Ring", "Mesh"], 0,
    "Star topology mein saare nodes ek central hub/switch se jude hote hain.", "Star = central hub.");

  /* ---------- Network Security ---------- */
  b("Network Security", "Firewall", "Firewall", "Medium",
    "Firewall ka mukhya kaam kya hai?",
    "What is the main function of a firewall?",
    ["Network traffic ko filter/monitor karke unauthorized access rokna", "Font badalna", "Backup lena", "Printing"], 0,
    "Firewall incoming/outgoing traffic ko rules ke aadhaar par filter karke network ki suraksha karta hai.", "Firewall = suraksha deewar.",
    45, ["Filtering traffic to block unauthorized access", "Changing fonts", "Taking backup", "Printing"]);
  b("Network Security", "Virus", "Virus", "Easy",
    "Computer virus kya hai?",
    "What is a computer virus?",
    ["Ek malicious program jo khud ko replicate karta hai", "Ek hardware device", "Ek input device", "Ek printer"], 0,
    "Virus ek malicious program hai jo files ko infect karke khud ko phailata hai.", "Virus = harmful, self-copying program.",
    35, ["A malicious self-replicating program", "A hardware device", "An input device", "A printer"]);
  b("Network Security", "Malware", "Trojan", "Medium",
    "Trojan horse ki khasiyat kya hai?",
    "What is the characteristic of a Trojan horse?",
    ["Useful software jaisa dikhkar nuksaan karta hai", "Sirf email bhejta hai", "Hardware garam karta hai", "Brightness badhata hai"], 0,
    "Trojan legitimate software jaisa dikhta hai par hidden malicious kaam karta hai.", "Trojan = chhupa hua dushman.",
    40, ["Appears useful but does harm", "Only sends email", "Heats hardware", "Increases brightness"]);
  b("Network Security", "Security", "Authentication", "Medium",
    "Password aur OTP dono maangna kis suraksha technique ka udaharan hai?",
    "Asking for both password and OTP is an example of which security technique?",
    ["Two-factor authentication", "Encryption", "Compression", "Formatting"], 0,
    "Do alag proofs (password + OTP) maangna two-factor authentication kehlata hai.", "Do proof = 2FA.",
    40, ["Two-factor authentication", "Encryption", "Compression", "Formatting"]);
  b("Network Security", "Backup", "Backup", "Easy",
    "Backup lene ka mukhya uddeshya kya hai?",
    "What is the main purpose of taking a backup?",
    ["Data loss hone par data recover karna", "Speed badhana", "Font badalna", "Virus banana"], 0,
    "Backup se data kho jaane par usse restore kiya ja sakta hai.", "Backup = data ki extra copy.",
    35, ["Recovering data if lost", "Increasing speed", "Changing fonts", "Creating virus"]);

  /* ---------- DBMS ---------- */
  b("Database Management System", "SQL", "DDL", "Medium",
    "SQL command CREATE kis category mein aata hai?",
    "SQL command CREATE belongs to which category?",
    ["DDL", "DML", "DCL", "TCL"], 0,
    "CREATE, ALTER, DROP DDL commands hain (structure define/modify).", "Structure define = DDL.");
  b("Database Management System", "SQL", "DML", "Medium",
    "Nimn mein se kaunsa DML command hai?",
    "Which of the following is a DML command?",
    ["SELECT", "CREATE", "DROP", "GRANT"], 0,
    "SELECT, INSERT, UPDATE, DELETE DML commands hain (data manipulate karte hain).", "Data ka kaam = DML.");
  b("Database Management System", "RDBMS", "Primary Key", "Hard",
    "Primary key ke baare mein kaunsa statement sahi hai?",
    "Which statement about a primary key is correct?",
    ["Har row ko uniquely identify karti hai aur NULL nahi ho sakti", "Duplicate values allow karti hai", "Hamesha NULL hoti hai", "Sirf text store karti hai"], 0,
    "Primary key har record ko unique pehchaan deti hai; ye unique aur NOT NULL hoti hai.", "Primary key = unique + not null.",
    45, ["Uniquely identifies each row and cannot be NULL", "Allows duplicate values", "Is always NULL", "Stores only text"]);
  b("Database Management System", "Database Overview", "DBMS", "Easy",
    "DBMS ka full form kya hai?",
    "What is the full form of DBMS?",
    ["Database Management System", "Data Backup Management Service", "Digital Base Memory System", "Data Binary Management Set"], 0,
    "DBMS = Database Management System, jo data ko store aur manage karta hai.", "DBMS = database ka manager.");
  b("Database Management System", "Database Design", "Normalization", "Hard",
    "Database normalization ka mukhya uddeshya kya hai?",
    "What is the main objective of database normalization?",
    ["Redundancy aur anomalies kam karna", "Font badhana", "Speed badhana only", "Virus scan"], 0,
    "Normalization data redundancy aur insertion/update/delete anomalies kam karta hai.", "Normalize = duplicate/anomaly hatao.",
    45, ["Reducing redundancy and anomalies", "Increasing font", "Only increasing speed", "Scanning virus"]);
  b("Database Management System", "NoSQL", "NoSQL", "Medium",
    "NoSQL database ka ek pramukh laabh kya hai?",
    "What is a key advantage of a NoSQL database?",
    ["Large unstructured data aur scalability handle karna", "Sirf 1 row store karna", "Sirf image edit", "Sirf typing"], 0,
    "NoSQL databases flexible schema ke saath badi unstructured data aur horizontal scaling handle karte hain.", "NoSQL = flexible + scalable big data.",
    40, ["Handling large unstructured data and scalability", "Storing only 1 row", "Only image editing", "Only typing"]);

  /* ---------- System Analysis and Design ---------- */
  b("System Analysis and Design", "Introduction", "SDLC", "Medium",
    "SDLC ka full form kya hai?",
    "What is the full form of SDLC?",
    ["Software Development Life Cycle", "System Data Logic Cycle", "Software Design Level Code", "System Design Life Class"], 0,
    "SDLC = Software Development Life Cycle, software banane ke phases ka framework.", "SDLC = software banane ka life cycle.");
  b("System Analysis and Design", "Feasibility Analysis", "Feasibility", "Medium",
    "Feasibility study ka mukhya uddeshya kya hai?",
    "What is the main purpose of a feasibility study?",
    ["Project practical/viable hai ya nahi check karna", "Coding poori karna", "Exam lena", "Backup restore"], 0,
    "Feasibility study technical, economic, operational drishti se project ki viability check karti hai.", "Feasible = mumkin aur practical.",
    40, ["Checking whether the project is practical/viable", "Completing coding", "Taking exam", "Restoring backup"]);
  b("System Analysis and Design", "Testing", "Testing", "Medium",
    "Software testing ka mukhya uddeshya kya hai?",
    "What is the main objective of software testing?",
    ["Errors/defects dhundhna aur quality ensure karna", "Naye features design karna", "Marketing karna", "Hardware banana"], 0,
    "Testing software mein bugs/defects identify karke quality sunishchit karti hai.", "Testing = bug dhundho.",
    40, ["Finding defects and ensuring quality", "Designing new features", "Marketing", "Building hardware"]);
  b("System Analysis and Design", "UML", "UML", "Medium",
    "UML ka use kis liye hota hai?",
    "UML is used for what purpose?",
    ["Software system ko visually model/design karna", "Virus banane", "Typing tez karne", "Printing"], 0,
    "UML (Unified Modeling Language) diagrams se software design visually represent hota hai.", "UML = design ke diagrams.",
    40, ["Visually modelling/designing software systems", "Creating virus", "Faster typing", "Printing"]);

  /* ---------- IoT and Applications / Web ---------- */
  b("Internet of Things and Applications", "HTML", "HTML", "Easy",
    "HTML ka full form kya hai?",
    "What is the full form of HTML?",
    ["HyperText Markup Language", "High Text Machine Language", "HyperText Machine Link", "Home Tool Markup Language"], 0,
    "HTML = HyperText Markup Language, web pages banane ki bhasha.", "HTML = web page ki bhasha.");
  b("Internet of Things and Applications", "HTML", "Tag", "Medium",
    "HTML mein sabse bade heading ke liye kaunsa tag use hota hai?",
    "Which HTML tag is used for the largest heading?",
    ["<h1>", "<h6>", "<head>", "<p>"], 0,
    "<h1> sabse bada heading hai, <h6> sabse chota.", "h1 = sabse bada heading.");
  b("Internet of Things and Applications", "IoT", "IoT", "Medium",
    "IoT (Internet of Things) ka arth kya hai?",
    "What does IoT (Internet of Things) mean?",
    ["Physical devices ka internet se juda hokar data share karna", "Sirf ek website", "Ek programming language", "Ek printer"], 0,
    "IoT mein sensors wale physical devices internet se judkar data collect/exchange karte hain.", "IoT = cheezein internet se juden.",
    40, ["Physical devices connected to internet sharing data", "Just a website", "A programming language", "A printer"]);
  b("Internet of Things and Applications", "Browsers", "Browser", "Easy",
    "Nimn mein se kaunsa web browser hai?",
    "Which of the following is a web browser?",
    ["Google Chrome", "MS Word", "Photoshop", "Windows"], 0,
    "Google Chrome web browser hai; baaki nahi.", "Browser: Chrome, Firefox, Edge, Safari.");
  b("Internet of Things and Applications", "Internet Protocol", "HTTP", "Medium",
    "HTTP ka use kis liye hota hai?",
    "HTTP is used for what?",
    ["Web par data transfer karna", "File compress karna", "Virus banana", "Sound record karna"], 0,
    "HTTP (HyperText Transfer Protocol) web browser aur server ke beech data transfer karta hai.", "HTTP = web data transfer.",
    40, ["Transferring data on the web", "Compressing files", "Creating virus", "Recording sound"]);
  b("Internet of Things and Applications", "E-Commerce", "E-Commerce", "Easy",
    "E-Commerce ka arth kya hai?",
    "What does E-Commerce mean?",
    ["Internet par kharid-bikri (online business)", "Sirf email", "Sirf gaming", "Sirf typing"], 0,
    "E-Commerce internet ke through goods/services ki online kharid aur bikri hai (jaise Amazon, Flipkart).", "E-Commerce = online business.",
    35, ["Buying and selling online over the internet", "Only email", "Only gaming", "Only typing"]);

  /* ---------- Pedagogy ---------- */
  b("Pedagogy", "Learning Theories", "Constructivism", "Hard",
    "Constructivism ke anusaar teacher ka best role kya hai?",
    "According to constructivism, what is the best role of a teacher?",
    ["Facilitator", "Dictator", "Only examiner", "Silent observer always"], 0,
    "Constructivism mein learner apna gyaan actively construct karta hai; teacher facilitator hota hai.", "Constructivism = teacher facilitator.");
  b("Pedagogy", "Child Psychology", "Development", "Medium",
    "Cognitive development ka siddhant kisne diya?",
    "Who proposed the theory of cognitive development?",
    ["Jean Piaget", "Pavlov", "Skinner", "Freud"], 0,
    "Jean Piaget ne cognitive development ke 4 stages diye.", "Piaget = cognitive development.");
  b("Pedagogy", "Teaching Methods", "Method", "Medium",
    "Chote bachchon ko sikhaane ke liye sabse effective method kaunsa maana jaata hai?",
    "Which method is considered most effective for teaching young children?",
    ["Play-way / activity based", "Sirf lecture", "Sirf rote learning", "Sirf punishment"], 0,
    "Chote bachchon ke liye play-way aur activity-based learning sabse prabhaavshaali hai.", "Bachche khel-khel mein seekhte hain.",
    40, ["Play-way / activity based", "Only lecture", "Only rote learning", "Only punishment"]);
  b("Pedagogy", "Evaluation", "Formative", "Medium",
    "Padhaai ke dauraan continuous evaluation ko kya kehte hain?",
    "Continuous evaluation done during learning is called?",
    ["Formative evaluation", "Summative evaluation", "Final exam", "Diagnostic only"], 0,
    "Formative evaluation seekhne ke dauraan continuous hoti hai; summative ant mein hoti hai.", "Formative = beech mein, Summative = ant mein.",
    40, ["Formative evaluation", "Summative evaluation", "Final exam", "Only diagnostic"]);
  b("Pedagogy", "Motivation", "Motivation", "Medium",
    "Andar se aane wali (internal) motivation ko kya kehte hain?",
    "Motivation coming from within is called?",
    ["Intrinsic motivation", "Extrinsic motivation", "Negative motivation", "No motivation"], 0,
    "Intrinsic motivation andar ki ruchi/santushti se aati hai; extrinsic bahari inaam se.", "Intrinsic = andar, Extrinsic = bahar.",
    40, ["Intrinsic motivation", "Extrinsic motivation", "Negative motivation", "No motivation"]);
  b("Pedagogy", "ICT in Education", "ICT", "Easy",
    "ICT ka full form kya hai?",
    "What is the full form of ICT?",
    ["Information and Communication Technology", "Indian Computer Training", "Internet Control Technology", "Integrated Circuit Test"], 0,
    "ICT = Information and Communication Technology, shiksha mein technology ka upyog.", "ICT = shiksha mein technology.");

  if (typeof module !== "undefined" && module.exports) module.exports = arr;
  else root.RSSB_BANK_P2 = arr;
})(typeof window !== "undefined" ? window : this);
