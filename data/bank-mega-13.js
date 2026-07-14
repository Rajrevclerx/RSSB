/* RSSB BCI 2026 - Mega bank part 13: Programming Fundamentals + Fundamentals of Computer (set 2) */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG13";
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

  /* ---------- C : sizeof / data types ---------- */
  b("Paper-II", "Programming Fundamentals", "C", "sizeof int", "medium",
    "32/64-बिट सिस्टम पर सामान्यतः C में sizeof(int) का मान क्या होता है?",
    "On a typical 32/64-bit system, what is the value of sizeof(int) in C?",
    ["1", "2", "4", "8"], 2,
    "अधिकांश आधुनिक सिस्टम पर int 4 बाइट का होता है, अतः sizeof(int) = 4 (यह sizeof(long) या sizeof(double)=8 से भिन्न है)।",
    "आधुनिक int = 4 bytes.",
    ["1", "2", "4", "8"]);

  b("Paper-II", "Programming Fundamentals", "C", "sizeof returns", "hard",
    "C में sizeof ऑपरेटर का परिणाम किस टाइप का होता है?",
    "In C, the result of the sizeof operator is of which type?",
    ["int", "size_t (unsigned)", "float", "char"], 1,
    "sizeof का परिणाम size_t प्रकार का होता है, जो एक unsigned integer type है।",
    "sizeof → size_t (unsigned).",
    ["int", "size_t (unsigned)", "float", "char"]);

  /* ---------- C : bitwise operators ---------- */
  b("Paper-II", "Programming Fundamentals", "Operators", "bitwise AND", "hard",
    "C कोड का आउटपुट: printf(\"%d\", 6 & 3);",
    "Output of C code: printf(\"%d\", 6 & 3);",
    ["2", "7", "6", "9"], 0,
    "6 = 110, 3 = 011. बिटवाइज़ AND: 110 & 011 = 010 = 2।",
    "AND = दोनों बिट 1 हों तभी 1.",
    ["2", "7", "6", "9"]);

  b("Paper-II", "Programming Fundamentals", "Operators", "bitwise OR", "hard",
    "C कोड का आउटपुट: printf(\"%d\", 5 | 2);",
    "Output of C code: printf(\"%d\", 5 | 2);",
    ["5", "7", "2", "3"], 1,
    "5 = 101, 2 = 010. बिटवाइज़ OR: 101 | 010 = 111 = 7।",
    "OR = कोई एक बिट 1 हो तो 1.",
    ["5", "7", "2", "3"]);

  b("Paper-II", "Programming Fundamentals", "Operators", "bitwise XOR", "hard",
    "C कोड का आउटपुट: printf(\"%d\", 7 ^ 4);",
    "Output of C code: printf(\"%d\", 7 ^ 4);",
    ["3", "7", "11", "4"], 0,
    "7 = 111, 4 = 100. बिटवाइज़ XOR: 111 ^ 100 = 011 = 3 (समान बिट → 0, भिन्न बिट → 1)।",
    "XOR = बिट भिन्न हों तो 1.",
    ["3", "7", "11", "4"]);

  b("Paper-II", "Programming Fundamentals", "Operators", "left shift", "hard",
    "C कोड का आउटपुट: printf(\"%d\", 3 << 2);",
    "Output of C code: printf(\"%d\", 3 << 2);",
    ["6", "12", "9", "5"], 1,
    "left shift n<<k मान को 2^k से गुणा करता है। 3 << 2 = 3 × 2² = 3 × 4 = 12।",
    "x << k = x × 2^k.",
    ["6", "12", "9", "5"]);

  b("Paper-II", "Programming Fundamentals", "Operators", "right shift", "hard",
    "C कोड का आउटपुट: printf(\"%d\", 20 >> 2);",
    "Output of C code: printf(\"%d\", 20 >> 2);",
    ["5", "10", "4", "80"], 0,
    "right shift n>>k मान को 2^k से पूर्णांक भाग देता है। 20 >> 2 = 20 / 4 = 5।",
    "x >> k = x / 2^k (पूर्णांक).",
    ["5", "10", "4", "80"]);

  /* ---------- C : pre/post increment ---------- */
  b("Paper-II", "Programming Fundamentals", "Operators", "post increment expr", "hard",
    "C कोड का आउटपुट: int a=5; int b=a++; printf(\"%d %d\", a, b);",
    "Output of C code: int a=5; int b=a++; printf(\"%d %d\", a, b);",
    ["6 6", "6 5", "5 6", "5 5"], 1,
    "a++ (post-increment) पहले पुराना मान (5) b को देता है, फिर a बढ़कर 6 होता है। अतः a=6, b=5।",
    "post: पहले उपयोग, फिर बढ़त.",
    ["6 6", "6 5", "5 6", "5 5"]);

  b("Paper-II", "Programming Fundamentals", "Operators", "pre increment expr", "hard",
    "C कोड का आउटपुट: int a=5; int b=++a; printf(\"%d %d\", a, b);",
    "Output of C code: int a=5; int b=++a; printf(\"%d %d\", a, b);",
    ["6 6", "6 5", "5 6", "5 5"], 0,
    "++a (pre-increment) पहले a को 6 करता है, फिर वह नया मान 6 b को देता है। अतः a=6, b=6।",
    "pre: पहले बढ़त, फिर उपयोग.",
    ["6 6", "6 5", "5 6", "5 5"]);

  /* ---------- C : switch fallthrough ---------- */
  b("Paper-II", "Programming Fundamentals", "Control Statements", "switch fallthrough", "hard",
    "C कोड का आउटपुट: int x=1; switch(x){case 1: printf(\"A\"); case 2: printf(\"B\"); break; default: printf(\"C\");}",
    "Output of C code: int x=1; switch(x){case 1: printf(\"A\"); case 2: printf(\"B\"); break; default: printf(\"C\");}",
    ["A", "AB", "ABC", "B"], 1,
    "case 1 में break नहीं है, अतः fall-through होकर case 2 भी चलता है: A फिर B प्रिंट होता है, break पर रुक जाता है।",
    "break न हो तो अगला case भी चलता है (fall-through).",
    ["A", "AB", "ABC", "B"]);

  /* ---------- C : string functions ---------- */
  b("Paper-II", "Programming Fundamentals", "C", "strlen", "medium",
    "C कोड का आउटपुट: printf(\"%d\", strlen(\"COMPUTER\"));",
    "Output of C code: printf(\"%d\", strlen(\"COMPUTER\"));",
    ["7", "8", "9", "0"], 1,
    "strlen कैरेक्टरों की संख्या देता है, समापन '\\0' को छोड़कर। \"COMPUTER\" में 8 अक्षर हैं।",
    "strlen = अक्षर गिनती (\\0 नहीं).",
    ["7", "8", "9", "0"]);

  b("Paper-II", "Programming Fundamentals", "C", "strcmp equal", "hard",
    "C में strcmp(\"abc\", \"abc\") का रिटर्न मान क्या होगा?",
    "In C, what does strcmp(\"abc\", \"abc\") return?",
    ["1", "0", "-1", "3"], 1,
    "strcmp समान स्ट्रिंग्स के लिए 0 लौटाता है; पहली बड़ी हो तो धनात्मक, छोटी हो तो ऋणात्मक।",
    "strcmp बराबर = 0.",
    ["1", "0", "-1", "3"]);

  b("Paper-II", "Programming Fundamentals", "C", "string null terminator", "medium",
    "C में स्ट्रिंग के अंत को दर्शाने वाला null कैरेक्टर कौन-सा है?",
    "In C, which null character marks the end of a string?",
    ["\\n", "\\0", "\\t", "\\e"], 1,
    "C में प्रत्येक स्ट्रिंग '\\0' (null character) पर समाप्त होती है, जिससे स्ट्रिंग की सीमा तय होती है।",
    "String समाप्ति = \\0.",
    ["\\n", "\\0", "\\t", "\\e"]);

  /* ---------- C : arrays / 2D ---------- */
  b("Paper-II", "Programming Fundamentals", "Arrays", "2D array elements", "medium",
    "C में int a[3][4] घोषित करने पर कुल कितने तत्व (elements) होंगे?",
    "In C, declaring int a[3][4] gives how many total elements?",
    ["7", "12", "34", "16"], 1,
    "2D array में कुल तत्व = पंक्तियाँ × स्तंभ = 3 × 4 = 12।",
    "2D कुल = rows × cols.",
    ["7", "12", "34", "16"]);

  b("Paper-II", "Programming Fundamentals", "Arrays", "array output", "hard",
    "C कोड का आउटपुट: int a[]={10,20,30,40}; printf(\"%d\", a[2]);",
    "Output of C code: int a[]={10,20,30,40}; printf(\"%d\", a[2]);",
    ["20", "30", "40", "10"], 1,
    "इंडेक्सिंग 0 से आरंभ: a[0]=10, a[1]=20, a[2]=30। अतः 30 प्रिंट होगा।",
    "index 0 से शुरू → a[2] = तीसरा तत्व.",
    ["20", "30", "40", "10"]);

  /* ---------- C : recursion ---------- */
  b("Paper-II", "Programming Fundamentals", "Functions", "recursion factorial", "hard",
    "एक recursive फंक्शन fact(n) = n*fact(n-1) व fact(0)=1 हो, तो fact(4) का मान क्या होगा?",
    "For a recursive function fact(n)=n*fact(n-1) with fact(0)=1, what is fact(4)?",
    ["12", "24", "16", "64"], 1,
    "4! = 4×3×2×1 = 24। recursion base condition fact(0)=1 पर रुकता है।",
    "4! = 24.",
    ["12", "24", "16", "64"]);

  b("Paper-II", "Programming Fundamentals", "Functions", "recursion definition", "easy",
    "जब कोई फंक्शन अपने-आप को ही कॉल करता है, तो उसे क्या कहते हैं?",
    "When a function calls itself, it is called:",
    ["Iteration", "Recursion", "Overloading", "Inlining"], 1,
    "किसी फंक्शन द्वारा स्वयं को कॉल करना recursion कहलाता है; इसके लिए एक base (समाप्ति) condition आवश्यक है।",
    "स्वयं को कॉल = recursion.",
    ["Iteration", "Recursion", "Overloading", "Inlining"]);

  /* ---------- C : storage classes / typedef / enum ---------- */
  b("Paper-II", "Programming Fundamentals", "C", "static lifetime", "hard",
    "C में किसी local वेरिएबल को static घोषित करने का मुख्य प्रभाव क्या होता है?",
    "In C, what is the main effect of declaring a local variable as static?",
    ["वह हर कॉल पर पुनः आरंभ होता है", "वह अपना मान फंक्शन कॉल्स के बीच बनाए रखता है", "वह global बन जाता है", "वह register में रखा जाता है"], 1,
    "static local वेरिएबल का जीवनकाल पूरे प्रोग्राम तक रहता है और वह अपना मान बार-बार कॉल के बीच बनाए रखता है, पर scope local ही रहता है।",
    "static local = मान बना रहता है.",
    ["it re-initializes every call", "it retains its value between function calls", "it becomes global", "it is placed in a register"]);

  b("Paper-II", "Programming Fundamentals", "C", "typedef", "medium",
    "C में typedef कीवर्ड का प्रयोग किसलिए होता है?",
    "In C, what is the typedef keyword used for?",
    ["नया वेरिएबल बनाने", "किसी मौजूदा डेटा टाइप को नया नाम (उपनाम) देने", "मेमोरी मुक्त करने", "लूप बनाने"], 1,
    "typedef किसी मौजूदा डेटा टाइप को एक नया नाम (alias) देता है, जिससे कोड पठनीय होता है; यह नया टाइप नहीं बनाता।",
    "typedef = टाइप का उपनाम.",
    ["to create a new variable", "to give an existing data type a new name (alias)", "to free memory", "to make a loop"]);

  b("Paper-II", "Programming Fundamentals", "C", "enum default value", "hard",
    "C में enum {RED, GREEN, BLUE}; में डिफ़ॉल्ट रूप से GREEN का मान क्या होगा?",
    "In C, in enum {RED, GREEN, BLUE};, what is the default value of GREEN?",
    ["0", "1", "2", "3"], 1,
    "enum के constants डिफ़ॉल्ट रूप से 0 से आरंभ होते हैं: RED=0, GREEN=1, BLUE=2।",
    "enum 0 से शुरू → GREEN=1.",
    ["0", "1", "2", "3"]);

  /* ---------- C : dynamic memory / headers ---------- */
  b("Paper-II", "Programming Fundamentals", "C", "malloc header", "hard",
    "C में malloc() व free() फंक्शन किस header फ़ाइल में परिभाषित हैं?",
    "In C, malloc() and free() are declared in which header file?",
    ["stdio.h", "stdlib.h", "string.h", "math.h"], 1,
    "malloc(), calloc(), realloc(), free() जैसे मेमोरी फंक्शन <stdlib.h> में घोषित हैं।",
    "malloc/free = stdlib.h.",
    ["stdio.h", "stdlib.h", "string.h", "math.h"]);

  b("Paper-II", "Programming Fundamentals", "C", "printf header", "easy",
    "C में printf() व scanf() किस header फ़ाइल में घोषित हैं?",
    "In C, printf() and scanf() are declared in which header file?",
    ["conio.h", "stdio.h", "stdlib.h", "ctype.h"], 1,
    "मानक इनपुट/आउटपुट फंक्शन printf() व scanf() <stdio.h> (standard input-output) में घोषित हैं।",
    "printf/scanf = stdio.h.",
    ["conio.h", "stdio.h", "stdlib.h", "ctype.h"]);

  /* ---------- C++ : constructor/destructor, overloading, virtual ---------- */
  b("Paper-II", "Programming Fundamentals", "C++", "destructor symbol", "medium",
    "C++ में destructor के नाम से पहले कौन-सा चिह्न लगता है?",
    "In C++, which symbol precedes a destructor's name?",
    ["#", "~ (tilde)", "@", "&"], 1,
    "destructor का नाम class के नाम के समान होता है और उससे पहले ~ (tilde) लगता है, जैसे ~ClassName()।",
    "Destructor = ~ClassName().",
    ["#", "~ (tilde)", "@", "&"]);

  b("Paper-II", "Programming Fundamentals", "C++", "constructor destructor order", "hard",
    "C++ में एक ही scope में जो object सबसे पहले बनता (constructor) है, उसका destructor कब चलता है?",
    "In C++, for objects in the same scope, when does the destructor of the first-created object run?",
    ["सबसे पहले", "सबसे बाद में (उल्टा क्रम)", "बीच में", "constructor के साथ ही"], 1,
    "Objects का विनाश निर्माण के उल्टे (reverse) क्रम में होता है — जो पहले बना उसका destructor सबसे अंत में चलता है (LIFO)।",
    "Destruction = निर्माण का उल्टा क्रम.",
    ["first", "last (reverse order)", "in the middle", "along with the constructor"]);

  b("Paper-II", "Programming Fundamentals", "C++", "function overloading", "medium",
    "C++ में एक ही नाम के अनेक फंक्शन भिन्न parameter (संख्या/प्रकार) के साथ बनाना कहलाता है:",
    "In C++, having multiple functions with the same name but different parameters is called:",
    ["Function overriding", "Function overloading", "Recursion", "Inheritance"], 1,
    "Function overloading में एक ही नाम के फंक्शन parameters की संख्या/प्रकार में भिन्न होते हैं — यह compile-time (static) polymorphism है।",
    "Overloading = same नाम, भिन्न parameters.",
    ["Function overriding", "Function overloading", "Recursion", "Inheritance"]);

  b("Paper-II", "Programming Fundamentals", "C++", "virtual runtime", "hard",
    "C++ में virtual function किस प्रकार के polymorphism को संभव बनाता है?",
    "In C++, a virtual function enables which type of polymorphism?",
    ["Compile-time (static)", "Run-time (dynamic)", "कोई नहीं", "Overloading"], 1,
    "virtual function run-time (dynamic) polymorphism देता है — कौन-सा function चलेगा यह object के वास्तविक प्रकार से रन-टाइम पर तय होता है।",
    "virtual = run-time polymorphism.",
    ["Compile-time (static)", "Run-time (dynamic)", "None", "Overloading"]);

  b("Paper-II", "Programming Fundamentals", "C++", "cout operator", "easy",
    "C++ में cout के साथ आउटपुट देने के लिए कौन-सा insertion ऑपरेटर प्रयोग होता है?",
    "In C++, which insertion operator is used with cout for output?",
    [">>", "<<", "::", "->"], 1,
    "cout के साथ << (insertion) ऑपरेटर आउटपुट के लिए और cin के साथ >> (extraction) इनपुट के लिए प्रयोग होता है।",
    "cout << (बाहर), cin >> (अंदर).",
    [">>", "<<", "::", "->"]);

  b("Paper-II", "Programming Fundamentals", "C++", "this pointer", "hard",
    "C++ में 'this' pointer किसे इंगित करता है?",
    "In C++, what does the 'this' pointer point to?",
    ["base class को", "वर्तमान (calling) object को", "किसी static member को", "एक global वेरिएबल को"], 1,
    "प्रत्येक non-static member function में 'this' pointer उस वर्तमान object का पता रखता है जिसने function को कॉल किया।",
    "this = वर्तमान object.",
    ["the base class", "the current (calling) object", "a static member", "a global variable"]);

  /* ---------- Java ---------- */
  b("Paper-II", "Programming Fundamentals", "Java", "bytecode JVM", "medium",
    "Java compiler (javac) स्रोत कोड को किसमें बदलता है, जिसे JVM चलाती है?",
    "The Java compiler (javac) converts source code into what, which the JVM runs?",
    ["मशीन कोड (native)", "Bytecode", "Assembly", "HTML"], 1,
    "javac .java को platform-स्वतंत्र bytecode (.class) में बदलता है, जिसे JVM व्याख्या/निष्पादित करती है — इसी से 'write once, run anywhere' संभव होता है।",
    "javac → bytecode → JVM.",
    ["native machine code", "Bytecode", "Assembly", "HTML"]);

  b("Paper-II", "Programming Fundamentals", "Java", "JDK JRE JVM", "hard",
    "Java में JDK, JRE व JVM के बारे में सही कथन कौन-सा है?",
    "Which statement about JDK, JRE and JVM in Java is correct?",
    ["JVM सबसे बड़ा है जिसमें JDK आता है", "JDK में JRE और JRE में JVM समाहित है", "तीनों समान हैं", "JRE में JDK समाहित है"], 1,
    "आकार क्रम: JDK ⊃ JRE ⊃ JVM। JDK (विकास उपकरण + JRE), JRE (लाइब्रेरी + JVM), JVM (निष्पादन इंजन)।",
    "JDK > JRE > JVM.",
    ["JVM is largest containing JDK", "JDK contains JRE, and JRE contains JVM", "all three are the same", "JRE contains JDK"]);

  b("Paper-II", "Programming Fundamentals", "Java", "garbage collection", "medium",
    "Java में अप्रयुक्त (unused) objects की मेमोरी स्वतः मुक्त करने की प्रक्रिया क्या कहलाती है?",
    "In Java, the automatic freeing of memory of unused objects is called:",
    ["Compilation", "Garbage collection", "Serialization", "Overloading"], 1,
    "Java की JVM स्वतः garbage collection द्वारा उन objects की मेमोरी मुक्त करती है जिनका कोई संदर्भ (reference) नहीं बचता — प्रोग्रामर को free/delete नहीं करना पड़ता।",
    "Java स्वतः मेमोरी मुक्त = garbage collection.",
    ["Compilation", "Garbage collection", "Serialization", "Overloading"]);

  b("Paper-II", "Programming Fundamentals", "Java", "== vs equals", "hard",
    "Java में दो String objects की सामग्री (content) की तुलना के लिए सही तरीका क्या है?",
    "In Java, what is the correct way to compare the content of two String objects?",
    ["== ऑपरेटर", ".equals() मेथड", "> ऑपरेटर", "= ऑपरेटर"], 1,
    ".equals() सामग्री (content) की तुलना करता है, जबकि == संदर्भ (reference/address) की तुलना करता है। अतः content के लिए .equals() सही है।",
    "content = .equals(), reference = ==.",
    ["== operator", ".equals() method", "> operator", "= operator"]);

  b("Paper-II", "Programming Fundamentals", "Java", "main signature", "medium",
    "Java में मानक main मेथड का सही signature कौन-सा है?",
    "Which is the correct signature of the standard main method in Java?",
    ["public void main(String args)", "public static void main(String[] args)", "static int main()", "void Main(String[] args)"], 1,
    "JVM public static void main(String[] args) को प्रवेश-बिंदु (entry point) के रूप में खोजती है — यह static है ताकि object बनाए बिना कॉल हो सके।",
    "public static void main(String[] args).",
    ["public void main(String args)", "public static void main(String[] args)", "static int main()", "void Main(String[] args)"]);

  b("Paper-II", "Programming Fundamentals", "Java", "checked exception", "hard",
    "Java में निम्न में से कौन-सा checked exception का उदाहरण है (compile समय पर जाँचा जाता है)?",
    "In Java, which is an example of a checked exception (checked at compile time)?",
    ["NullPointerException", "IOException", "ArithmeticException", "ArrayIndexOutOfBoundsException"], 1,
    "IOException checked exception है (compile-time पर handle आवश्यक)। शेष तीनों RuntimeException से व्युत्पन्न unchecked exceptions हैं।",
    "IOException = checked; Runtime वाले = unchecked.",
    ["NullPointerException", "IOException", "ArithmeticException", "ArrayIndexOutOfBoundsException"]);

  b("Paper-II", "Programming Fundamentals", "Java", "overloading vs overriding", "hard",
    "Java में method overriding के बारे में सही कथन कौन-सा है?",
    "Which statement about method overriding in Java is correct?",
    ["एक ही class में same नाम भिन्न parameters", "subclass द्वारा superclass की method को उसी signature से पुनः परिभाषित करना", "constructor बनाना", "final method बनाना"], 1,
    "Overriding में subclass, superclass की method को समान signature (नाम+parameters) के साथ पुनः परिभाषित करती है — यह run-time polymorphism देता है। Overloading same class में भिन्न parameters है।",
    "Overriding = same signature (parent-child), Overloading = भिन्न parameters.",
    ["same name different parameters in one class", "subclass redefining a superclass method with the same signature", "creating a constructor", "creating a final method"]);

  b("Paper-II", "Programming Fundamentals", "Java", "wrapper class", "medium",
    "Java में primitive टाइप int के लिए संगत wrapper class कौन-सी है?",
    "In Java, which is the wrapper class for the primitive type int?",
    ["Int", "Integer", "Number", "IntVal"], 1,
    "int का wrapper class Integer है (char→Character, boolean→Boolean आदि)। Wrapper class primitive को object रूप देती है।",
    "int → Integer (wrapper).",
    ["Int", "Integer", "Number", "IntVal"]);

  /* ---------- Python ---------- */
  b("Paper-II", "Programming Fundamentals", "Python", "slicing output", "hard",
    "Python कोड का आउटपुट: s = \"PYTHON\"; print(s[1:4])",
    "Output of Python code: s = \"PYTHON\"; print(s[1:4])",
    ["PYT", "YTH", "YTHO", "THO"], 1,
    "s[1:4] इंडेक्स 1,2,3 (4 शामिल नहीं) देता है: s[1]='Y', s[2]='T', s[3]='H' → \"YTH\"।",
    "slice [a:b] → a से b-1 तक.",
    ["PYT", "YTH", "YTHO", "THO"]);

  b("Paper-II", "Programming Fundamentals", "Python", "negative index", "hard",
    "Python कोड का आउटपुट: s = \"HELLO\"; print(s[-1])",
    "Output of Python code: s = \"HELLO\"; print(s[-1])",
    ["H", "O", "L", "Error"], 1,
    "ऋणात्मक इंडेक्स अंत से गिनता है: s[-1] अंतिम कैरेक्टर 'O' है।",
    "index -1 = अंतिम अक्षर.",
    ["H", "O", "L", "Error"]);

  b("Paper-II", "Programming Fundamentals", "Python", "range list", "hard",
    "Python कोड का आउटपुट: print(list(range(1,6,2)))",
    "Output of Python code: print(list(range(1,6,2)))",
    ["[1, 2, 3, 4, 5]", "[1, 3, 5]", "[2, 4, 6]", "[1, 3, 5, 7]"], 1,
    "range(1,6,2) 1 से आरंभ, 6 से पहले तक, step 2: 1,3,5 → [1, 3, 5]।",
    "range(start,stop,step); stop शामिल नहीं.",
    ["[1, 2, 3, 4, 5]", "[1, 3, 5]", "[2, 4, 6]", "[1, 3, 5, 7]"]);

  b("Paper-II", "Programming Fundamentals", "Python", "floor division", "hard",
    "Python कोड का आउटपुट: print(17 // 5)",
    "Output of Python code: print(17 // 5)",
    ["3.4", "3", "2", "4"], 1,
    "// floor division (पूर्णांक भागफल) देता है: 17 / 5 = 3.4 का floor = 3।",
    "// = पूर्णांक भागफल (floor).",
    ["3.4", "3", "2", "4"]);

  b("Paper-II", "Programming Fundamentals", "Python", "exponent operator", "medium",
    "Python कोड का आउटपुट: print(2 ** 4)",
    "Output of Python code: print(2 ** 4)",
    ["8", "16", "6", "24"], 1,
    "** घातांक (exponent) ऑपरेटर है: 2⁴ = 16।",
    "** = घात (power).",
    ["8", "16", "6", "24"]);

  b("Paper-II", "Programming Fundamentals", "Python", "list comprehension", "hard",
    "Python कोड का आउटपुट: print([x*x for x in range(1,4)])",
    "Output of Python code: print([x*x for x in range(1,4)])",
    ["[1, 2, 3]", "[1, 4, 9]", "[1, 4, 9, 16]", "[2, 4, 6]"], 1,
    "range(1,4) → 1,2,3; प्रत्येक का वर्ग: 1,4,9 → [1, 4, 9]।",
    "list comprehension: प्रत्येक x का x*x.",
    ["[1, 2, 3]", "[1, 4, 9]", "[1, 4, 9, 16]", "[2, 4, 6]"]);

  b("Paper-II", "Programming Fundamentals", "Python", "is vs ==", "hard",
    "Python में 'is' ऑपरेटर किसकी तुलना करता है?",
    "In Python, what does the 'is' operator compare?",
    ["मानों (values) की समानता", "पहचान (identity) — क्या दोनों एक ही object हैं", "स्ट्रिंग की लंबाई", "टाइप बदलना"], 1,
    "'is' पहचान (identity) की जाँच करता है — क्या दोनों नाम मेमोरी में एक ही object को इंगित करते हैं; '==' मानों की समानता जाँचता है।",
    "is = same object, == = same value.",
    ["equality of values", "identity — whether both are the same object", "string length", "type conversion"]);

  b("Paper-II", "Programming Fundamentals", "Python", "set uniqueness", "medium",
    "Python कोड का आउटपुट: print(len({1, 2, 2, 3, 3, 3}))",
    "Output of Python code: print(len({1, 2, 2, 3, 3, 3}))",
    ["6", "3", "2", "1"], 1,
    "set केवल अद्वितीय (unique) तत्व रखता है, अतः {1,2,3} बनता है जिसकी लंबाई 3 है।",
    "set = duplicates हट जाते हैं.",
    ["6", "3", "2", "1"]);

  b("Paper-II", "Programming Fundamentals", "Python", "dict get", "hard",
    "Python कोड का आउटपुट: d = {'a':1, 'b':2}; print(d.get('c', 0))",
    "Output of Python code: d = {'a':1, 'b':2}; print(d.get('c', 0))",
    ["None", "0", "KeyError", "c"], 1,
    "get() key न मिलने पर दिया गया default (यहाँ 0) लौटाता है, KeyError नहीं देता। 'c' अनुपस्थित है अतः 0 प्रिंट होगा।",
    "dict.get(key, default) → key नहीं तो default.",
    ["None", "0", "KeyError", "c"]);

  b("Paper-II", "Programming Fundamentals", "Python", "for-else", "hard",
    "Python में for लूप के साथ जुड़ा else block कब चलता है?",
    "In Python, when does an else block attached to a for loop run?",
    ["कभी नहीं", "जब लूप break के बिना सामान्य रूप से समाप्त हो", "केवल break होने पर", "प्रत्येक iteration पर"], 1,
    "for-else में else तब चलता है जब लूप बिना break के पूरा हो जाए; यदि break होता है तो else छोड़ दिया जाता है।",
    "for-else: break नहीं तो else चलता है.",
    ["never", "when the loop completes normally without break", "only when break occurs", "on every iteration"]);

  /* ---------- Artificial Intelligence ---------- */
  b("Paper-II", "Programming Fundamentals", "Artificial Intelligence", "heuristic", "hard",
    "AI में heuristic (अनुमानी) function का मुख्य उद्देश्य क्या है?",
    "In AI, what is the main purpose of a heuristic function?",
    ["पूर्ण गारंटीयुक्त हल देना", "खोज (search) को लक्ष्य की ओर मार्गदर्शन कर तेज़ बनाना", "मेमोरी मुक्त करना", "कोड कंपाइल करना"], 1,
    "Heuristic function एक अनुमानित मार्गदर्शक (जैसे A* में) है जो खोज को आशाजनक दिशा में ले जाकर तेज़ बनाता है; यह इष्टतम की गारंटी आवश्यक नहीं देता।",
    "Heuristic = अनुमान से खोज मार्गदर्शन.",
    ["give a fully guaranteed solution", "guide the search toward the goal to make it faster", "free memory", "compile code"]);

  b("Paper-II", "Programming Fundamentals", "Artificial Intelligence", "expert system", "medium",
    "AI में expert system का ज्ञान (rules व facts) मुख्यतः किसमें संग्रहित रहता है?",
    "In AI, an expert system's knowledge (rules and facts) is mainly stored in the:",
    ["Inference engine", "Knowledge base", "User interface", "Compiler"], 1,
    "Expert system के दो मुख्य भाग हैं: knowledge base (नियम व तथ्य) तथा inference engine (नियम लगाकर निष्कर्ष निकालने वाला)। ज्ञान knowledge base में रहता है।",
    "Expert system: ज्ञान = knowledge base, तर्क = inference engine.",
    ["inference engine", "knowledge base", "user interface", "compiler"]);

  b("Paper-II", "Programming Fundamentals", "Artificial Intelligence", "NLP", "medium",
    "AI में NLP (Natural Language Processing) का संबंध किससे है?",
    "In AI, NLP (Natural Language Processing) deals with:",
    ["मशीन द्वारा मानव भाषा को समझना व उत्पन्न करना", "हार्ड डिस्क को फ़ॉर्मेट करना", "नेटवर्क केबल जोड़ना", "प्रिंटर की गति बढ़ाना"], 0,
    "NLP कंप्यूटर को मानव (प्राकृतिक) भाषा समझने, व्याख्या करने व उत्पन्न करने में सक्षम बनाता है — जैसे chatbots, अनुवाद, वाक्-पहचान।",
    "NLP = मानव भाषा की समझ.",
    ["machines understanding and generating human language", "formatting a hard disk", "connecting network cables", "increasing printer speed"]);

  /* ---------- Machine Learning ---------- */
  b("Paper-II", "Programming Fundamentals", "Machine Learning", "overfitting", "hard",
    "ML में overfitting का क्या अर्थ है?",
    "In ML, what does overfitting mean?",
    ["मॉडल training डेटा पर अच्छा पर नए (test) डेटा पर खराब प्रदर्शन करे", "मॉडल हर डेटा पर खराब हो", "डेटा बहुत कम हो", "मॉडल बहुत सरल हो"], 0,
    "Overfitting में मॉडल training डेटा (व शोर) को रट लेता है, अतः वह training पर उत्कृष्ट पर अनदेखे test डेटा पर खराब सामान्यीकरण (generalization) करता है।",
    "Overfitting = training अच्छा, test खराब.",
    ["model performs well on training data but poorly on new (test) data", "model performs poorly on all data", "data is too little", "model is too simple"]);

  b("Paper-II", "Programming Fundamentals", "Machine Learning", "KNN vs Kmeans", "hard",
    "ML में K-Means algorithm मुख्यतः किस कार्य के लिए प्रयोग होता है?",
    "In ML, the K-Means algorithm is mainly used for:",
    ["Classification (supervised)", "Clustering (unsupervised)", "Regression", "Sorting"], 1,
    "K-Means एक unsupervised clustering algorithm है जो डेटा को K समूहों में बाँटता है; जबकि KNN एक supervised classification algorithm है।",
    "K-Means = clustering (unsupervised), KNN = classification.",
    ["Classification (supervised)", "Clustering (unsupervised)", "Regression", "Sorting"]);

  b("Paper-II", "Programming Fundamentals", "Machine Learning", "training testing", "medium",
    "ML में मॉडल के प्रदर्शन का मूल्यांकन (evaluate) किस डेटा पर किया जाता है?",
    "In ML, a model's performance is evaluated on which data?",
    ["Training data", "Test (unseen) data", "Backup data", "Deleted data"], 1,
    "मॉडल का वास्तविक मूल्यांकन test/unseen डेटा पर होता है ताकि उसकी सामान्यीकरण क्षमता जाँची जा सके; training डेटा पर वह पहले ही सीख चुका होता है।",
    "मूल्यांकन = test (नया) डेटा.",
    ["Training data", "Test (unseen) data", "Backup data", "Deleted data"]);

  /* ---------- Blockchain ---------- */
  b("Paper-II", "Programming Fundamentals", "Blockchain", "mining PoW", "hard",
    "Blockchain (जैसे Bitcoin) में mining के दौरान miners मुख्यतः क्या खोजते हैं?",
    "During mining in a blockchain (e.g., Bitcoin), what do miners mainly search for?",
    ["एक सही nonce जो वैध hash उत्पन्न करे", "उपयोगकर्ता का पासवर्ड", "खोई हुई फ़ाइलें", "नेटवर्क का IP"], 0,
    "Proof-of-Work mining में miners वह nonce (एक संख्या) खोजते हैं जिससे block का hash निर्धारित लक्ष्य (कठिनाई) शर्त पूरी करे — यह गणनात्मक रूप से कठिन कार्य है।",
    "Mining = सही nonce खोजना (PoW).",
    ["a correct nonce that produces a valid hash", "the user's password", "lost files", "the network IP"]);

  b("Paper-II", "Programming Fundamentals", "Blockchain", "genesis block", "medium",
    "Blockchain का सबसे पहला (first) block क्या कहलाता है?",
    "What is the very first block of a blockchain called?",
    ["Root block", "Genesis block", "Master block", "Alpha block"], 1,
    "Blockchain के सर्वप्रथम block को Genesis block कहते हैं; इसका कोई पूर्ववर्ती (previous) block नहीं होता।",
    "पहला block = Genesis block.",
    ["Root block", "Genesis block", "Master block", "Alpha block"]);

  b("Paper-II", "Programming Fundamentals", "Blockchain", "smart contract", "medium",
    "Blockchain पर स्वतः निष्पादित होने वाला (शर्त पूरी होने पर) प्रोग्राम क्या कहलाता है?",
    "A self-executing program on a blockchain (running when conditions are met) is called a:",
    ["Macro", "Smart contract", "Cookie", "Applet"], 1,
    "Smart contract एक स्व-निष्पादित कोड है जो पूर्वनिर्धारित शर्तें पूरी होने पर स्वतः लागू होता है (जैसे Ethereum पर)।",
    "स्व-निष्पादित कोड = smart contract.",
    ["Macro", "Smart contract", "Cookie", "Applet"]);

  /* ---------- IDE / Techniques ---------- */
  b("Paper-II", "Programming Fundamentals", "IDE", "breakpoint", "medium",
    "IDE के debugger में breakpoint का मुख्य कार्य क्या है?",
    "In an IDE's debugger, what is the main function of a breakpoint?",
    ["प्रोग्राम को स्थायी रूप से हटाना", "प्रोग्राम को किसी निश्चित पंक्ति पर रोककर जाँच करना", "कोड को रंगना", "फ़ाइल सहेजना"], 1,
    "Breakpoint निष्पादन को किसी निर्दिष्ट पंक्ति पर रोक देता है ताकि प्रोग्रामर वेरिएबल के मान आदि की जाँच (debug) कर सके।",
    "Breakpoint = कोड निष्पादन रोककर जाँच.",
    ["permanently delete the program", "pause the program at a specific line to inspect it", "color the code", "save the file"]);

  b("Paper-II", "Programming Fundamentals", "Programming Techniques", "assembler", "hard",
    "Assembler का मुख्य कार्य क्या है?",
    "What is the main function of an assembler?",
    ["उच्च-स्तरीय भाषा को मशीन कोड में", "असेंबली भाषा को मशीन कोड में बदलना", "मशीन कोड को उच्च-स्तरीय में", "कोड को रोकना"], 1,
    "Assembler निम्न-स्तरीय assembly language को मशीन कोड (binary) में अनुवादित करता है; compiler/interpreter उच्च-स्तरीय भाषा से अनुवाद करते हैं।",
    "Assembler = assembly → machine code.",
    ["high-level language to machine code", "assembly language to machine code", "machine code to high-level", "stop the code"]);

  b("Paper-II", "Programming Fundamentals", "Programming Techniques", "flowchart decision", "medium",
    "Flowchart में निर्णय (decision) को दर्शाने के लिए कौन-सा प्रतीक (symbol) प्रयोग होता है?",
    "In a flowchart, which symbol represents a decision?",
    ["आयत (rectangle)", "समचतुर्भुज/हीरा (diamond)", "अंडाकार (oval)", "समांतर चतुर्भुज (parallelogram)"], 1,
    "Flowchart में decision (शर्त/निर्णय) हीरे (diamond) से, प्रक्रिया आयत से, आरंभ/अंत अंडाकार से तथा input/output समांतर चतुर्भुज से दर्शाए जाते हैं।",
    "Decision = diamond (हीरा).",
    ["rectangle", "diamond", "oval", "parallelogram"]);

  b("Paper-II", "Programming Fundamentals", "Programming Techniques", "algorithm property", "medium",
    "किसी अच्छे algorithm का आवश्यक गुण कौन-सा है?",
    "Which is an essential property of a good algorithm?",
    ["इसमें अनंत चरण हों", "इसका एक निश्चित अंत (finiteness/terminate) हो", "यह कभी न रुके", "इसका कोई output न हो"], 1,
    "Algorithm के आवश्यक गुण हैं: finiteness (सीमित चरणों में समाप्त), definiteness (स्पष्ट चरण), input, output व effectiveness। अनंत लूप वाला algorithm नहीं होता।",
    "Algorithm = सीमित चरणों में समाप्त (finiteness).",
    ["it has infinite steps", "it terminates in a finite number of steps (finiteness)", "it never stops", "it produces no output"]);

  /* ==================================================================== */
  /* ================ FUNDAMENTALS OF COMPUTER (concept) ================ */
  /* ==================================================================== */

  b("Paper-II", "Fundamentals of Computer", "Input Devices", "light pen", "medium",
    "स्क्रीन पर सीधे इंगित करके चयन/चित्रांकन करने वाला कलम जैसा इनपुट उपकरण क्या है?",
    "Which pen-like input device is used to point directly on the screen to select or draw?",
    ["Plotter", "Light pen", "Speaker", "Trackball"], 1,
    "Light pen एक प्रकाश-संवेदी इनपुट उपकरण है जिससे स्क्रीन पर सीधे इंगित कर चयन या चित्रांकन किया जाता है।",
    "Light pen = स्क्रीन पर सीधे इंगित (input).",
    ["Plotter", "Light pen", "Speaker", "Trackball"]);

  b("Paper-II", "Fundamentals of Computer", "Input Devices", "barcode reader", "medium",
    "दुकानों में उत्पादों पर छपी काली-सफेद धारियों (bars) को पढ़ने वाला उपकरण क्या कहलाता है?",
    "Which device reads the black-and-white striped codes printed on products in shops?",
    ["OMR", "Barcode reader", "Plotter", "Projector"], 1,
    "Barcode reader (स्कैनर) उत्पादों पर छपी barcode की धारियों को पढ़कर कंप्यूटर में डेटा भेजता है — दुकानों/बिलिंग में प्रयुक्त इनपुट उपकरण।",
    "Barcode reader = धारियाँ पढ़ना (input).",
    ["OMR", "Barcode reader", "Plotter", "Projector"]);

  b("Paper-II", "Fundamentals of Computer", "Output Devices", "plotter", "medium",
    "बड़े व सटीक इंजीनियरिंग नक्शे/डिज़ाइन (graphics) छापने के लिए कौन-सा आउटपुट उपकरण उपयुक्त है?",
    "Which output device is suitable for printing large, precise engineering maps/designs (graphics)?",
    ["Plotter", "Keyboard", "Scanner", "Microphone"], 0,
    "Plotter एक आउटपुट उपकरण है जो बड़े व उच्च-परिशुद्धता वाले रेखाचित्र, नक्शे व वास्तु-डिज़ाइन छापता है (CAD में प्रयुक्त)।",
    "Plotter = बड़े नक्शे/डिज़ाइन (output).",
    ["Plotter", "Keyboard", "Scanner", "Microphone"]);

  b("Paper-II", "Fundamentals of Computer", "Output Devices", "softcopy hardcopy", "medium",
    "मॉनिटर पर दिखने वाला आउटपुट किस श्रेणी में आता है?",
    "Output shown on a monitor belongs to which category?",
    ["Hard copy", "Soft copy", "Printout", "Backup"], 1,
    "मॉनिटर पर दिखने वाला अस्थायी, स्क्रीन-आधारित आउटपुट soft copy कहलाता है; कागज़ पर छपा स्थायी आउटपुट (printer से) hard copy होता है।",
    "स्क्रीन = soft copy, कागज़ = hard copy.",
    ["Hard copy", "Soft copy", "Printout", "Backup"]);

  b("Paper-II", "Fundamentals of Computer", "Computer Basics", "ALU role", "medium",
    "CPU के किस भाग में समस्त अंकगणितीय (arithmetic) व तार्किक (logical) संक्रियाएँ होती हैं?",
    "In which part of the CPU are all arithmetic and logical operations performed?",
    ["Control Unit (CU)", "ALU", "Register", "Cache"], 1,
    "ALU (Arithmetic Logic Unit) जोड़/घटाव आदि अंकगणितीय व तुलना/AND-OR जैसी तार्किक संक्रियाएँ करता है; CU नियंत्रण/समन्वय करता है।",
    "ALU = गणना+तर्क, CU = नियंत्रण.",
    ["Control Unit (CU)", "ALU", "Register", "Cache"]);

  b("Paper-II", "Fundamentals of Computer", "Computer Basics", "CU role", "medium",
    "CPU का कौन-सा भाग अन्य सभी इकाइयों को निर्देश देकर उनके कार्यों में समन्वय (control) करता है?",
    "Which part of the CPU directs and coordinates the operations of all other units?",
    ["ALU", "Control Unit (CU)", "RAM", "Hard Disk"], 1,
    "Control Unit (CU) निर्देशों को decode कर अन्य इकाइयों (ALU, memory, I/O) को संकेत भेजकर समन्वय करता है, पर स्वयं गणना नहीं करता।",
    "CU = निर्देशक/समन्वयक.",
    ["ALU", "Control Unit (CU)", "RAM", "Hard Disk"]);

  b("Paper-II", "Fundamentals of Computer", "Computer Basics", "motherboard", "easy",
    "कंप्यूटर का वह मुख्य परिपथ बोर्ड (circuit board) जिस पर CPU, RAM आदि जुड़ते हैं, क्या कहलाता है?",
    "The main circuit board of a computer, to which the CPU, RAM etc. connect, is called the:",
    ["Motherboard", "Hard disk", "Monitor", "Keyboard"], 0,
    "Motherboard मुख्य परिपथ बोर्ड है जिस पर CPU, RAM, विस्तार slots व पोर्ट लगते हैं और सभी घटक इसी से जुड़ते हैं।",
    "Motherboard = मुख्य circuit board.",
    ["Motherboard", "Hard disk", "Monitor", "Keyboard"]);

  b("Paper-II", "Fundamentals of Computer", "Computer Basics", "port HDMI", "medium",
    "कंप्यूटर से मॉनिटर/टीवी को डिजिटल ऑडियो व वीडियो एक साथ भेजने वाला पोर्ट कौन-सा है?",
    "Which port sends both digital audio and video together from a computer to a monitor/TV?",
    ["USB", "HDMI", "PS/2", "LAN"], 1,
    "HDMI (High-Definition Multimedia Interface) एक ही केबल में उच्च-गुणवत्ता का डिजिटल ऑडियो व वीडियो भेजता है।",
    "HDMI = digital audio + video.",
    ["USB", "HDMI", "PS/2", "LAN"]);

  b("Paper-II", "Fundamentals of Computer", "Computer Basics", "supercomputer", "medium",
    "मौसम पूर्वानुमान व जटिल वैज्ञानिक गणनाओं जैसे कार्यों के लिए सबसे तीव्र व शक्तिशाली कंप्यूटर कौन-सा है?",
    "Which is the fastest and most powerful computer, used for weather forecasting and complex scientific computations?",
    ["Microcomputer", "Minicomputer", "Supercomputer", "Laptop"], 2,
    "Supercomputer सर्वाधिक तीव्र व शक्तिशाली होते हैं (जैसे PARAM) — मौसम, अनुसंधान, अनुकरण जैसी भारी गणनाओं में प्रयुक्त।",
    "सबसे शक्तिशाली = Supercomputer.",
    ["Microcomputer", "Minicomputer", "Supercomputer", "Laptop"]);

  b("Paper-II", "Fundamentals of Computer", "Computer Basics", "system software", "medium",
    "निम्न में से कौन-सा system software का उदाहरण है?",
    "Which of the following is an example of system software?",
    ["MS Word", "Operating System", "Photoshop", "VLC Player"], 1,
    "Operating System (जैसे Windows, Linux) system software है जो हार्डवेयर का प्रबंधन करता है; MS Word, Photoshop, VLC application software हैं।",
    "OS = system software; बाकी = application.",
    ["MS Word", "Operating System", "Photoshop", "VLC Player"]);

  b("Paper-II", "Fundamentals of Computer", "Computer Basics", "utility software", "medium",
    "एंटीवायरस व डिस्क क्लीनअप जैसे प्रोग्राम किस श्रेणी के software हैं?",
    "Programs like antivirus and disk cleanup belong to which category of software?",
    ["Application software", "Utility software", "Compiler", "Firmware"], 1,
    "Antivirus, disk cleanup, backup आदि Utility software हैं जो सिस्टम के रखरखाव व निष्पादन में सहायता करते हैं (system software का उपवर्ग)।",
    "Utility = रखरखाव उपकरण (antivirus आदि).",
    ["Application software", "Utility software", "Compiler", "Firmware"]);

  b("Paper-II", "Fundamentals of Computer", "Computer Basics", "cold booting", "medium",
    "बंद कंप्यूटर को पावर बटन से पूर्णतः नए सिरे से चालू करना क्या कहलाता है?",
    "Starting a switched-off computer fresh using the power button is called:",
    ["Warm booting", "Cold booting", "Rebooting loop", "Hibernation"], 1,
    "बंद कंप्यूटर को शुरू से (power on कर) चालू करना cold booting है; पहले से चालू सिस्टम को restart करना warm booting कहलाता है।",
    "Cold = बंद से चालू, Warm = restart.",
    ["Warm booting", "Cold booting", "Rebooting loop", "Hibernation"]);

  b("Paper-II", "Fundamentals of Computer", "File Types", "image extension", "medium",
    "निम्न में से कौन-सा एक्सटेंशन एक चित्र (image) फ़ाइल का है?",
    "Which of the following extensions belongs to an image file?",
    [".mp3", ".docx", ".jpg", ".exe"], 2,
    ".jpg चित्र (image) फ़ाइल है; .mp3 ऑडियो, .docx दस्तावेज़, .exe निष्पादन योग्य फ़ाइल है।",
    ".jpg = image.",
    [".mp3", ".docx", ".jpg", ".exe"]);

  b("Paper-II", "Fundamentals of Computer", "File Types", "audio extension", "medium",
    "निम्न में से कौन-सा एक्सटेंशन एक ऑडियो (audio) फ़ाइल का है?",
    "Which of the following extensions belongs to an audio file?",
    [".html", ".mp3", ".jpg", ".xlsx"], 1,
    ".mp3 ऑडियो फ़ाइल है; .html वेब पेज, .jpg चित्र, .xlsx स्प्रेडशीट फ़ाइल है।",
    ".mp3 = audio.",
    [".html", ".mp3", ".jpg", ".xlsx"]);

  b("Paper-II", "Fundamentals of Computer", "File Concepts", "folder", "easy",
    "कंप्यूटर में अनेक फ़ाइलों को व्यवस्थित रूप से समूहित करने वाली इकाई क्या कहलाती है?",
    "In a computer, the unit that organizes and groups many files together is called a:",
    ["Byte", "Folder (directory)", "Pixel", "Cursor"], 1,
    "Folder (directory) एक संग्रहण इकाई है जिसमें अनेक फ़ाइलें व उप-फ़ोल्डर व्यवस्थित रूप से रखे जाते हैं।",
    "Folder = फ़ाइलों का समूह/डिब्बा.",
    ["Byte", "Folder (directory)", "Pixel", "Cursor"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
