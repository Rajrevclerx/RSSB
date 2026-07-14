/* RSSB BCI 2026 - Mega bank part 16: DBMS + System Analysis & Design + IoT (set 2) */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG16";
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

  // ---------------- Database Management System (~22) ----------------

  b("Paper-II", "Database Management System", "Database Architecture", "Data Independence", "medium",
    "जब आंतरिक (physical) स्तर में परिवर्तन होने पर वैचारिक स्तर अप्रभावित रहता है, तो इसे क्या कहते हैं?",
    "When a change at the internal (physical) level does not affect the conceptual level, it is called?",
    ["तार्किक डेटा स्वतंत्रता", "भौतिक डेटा स्वतंत्रता", "डेटा अतिरेक", "डेटा एब्स्ट्रैक्शन"],
    1,
    "भौतिक डेटा स्वतंत्रता (physical data independence) का अर्थ है भौतिक/भंडारण स्तर बदलने पर वैचारिक स्कीमा को बदलने की आवश्यकता नहीं होती।",
    "Physical independence = change storage, conceptual unaffected.",
    ["Logical data independence", "Physical data independence", "Data redundancy", "Data abstraction"]);

  b("Paper-II", "Database Management System", "Database Architecture", "Data Independence", "medium",
    "वैचारिक स्कीमा बदलने पर बाह्य स्कीमा/एप्लिकेशन प्रोग्राम अप्रभावित रहने की क्षमता क्या कहलाती है?",
    "The ability of external schema/application programs to remain unaffected when the conceptual schema changes is called?",
    ["भौतिक डेटा स्वतंत्रता", "तार्किक डेटा स्वतंत्रता", "डेटा माइग्रेशन", "स्कीमा मैपिंग"],
    1,
    "तार्किक डेटा स्वतंत्रता (logical data independence) में वैचारिक स्कीमा बदलने पर बाह्य दृश्य/प्रोग्राम प्रभावित नहीं होते; यह प्राप्त करना अधिक कठिन है।",
    "Logical = conceptual change, views unaffected (harder to achieve).",
    ["Physical data independence", "Logical data independence", "Data migration", "Schema mapping"]);

  b("Paper-II", "Database Management System", "Database Overview", "Data Models", "medium",
    "किस डेटा मॉडल में डेटा को वृक्ष (tree) संरचना में parent-child संबंध के रूप में संग्रहीत किया जाता है?",
    "In which data model is data stored in a tree structure with parent-child relationships?",
    ["नेटवर्क मॉडल", "पदानुक्रमिक (Hierarchical) मॉडल", "रिलेशनल मॉडल", "ऑब्जेक्ट मॉडल"],
    1,
    "पदानुक्रमिक (hierarchical) मॉडल डेटा को वृक्ष जैसी संरचना में रखता है जहाँ प्रत्येक चाइल्ड का केवल एक पैरेंट होता है (1:N)।",
    "Hierarchical = tree, one parent per child.",
    ["Network model", "Hierarchical model", "Relational model", "Object model"]);

  b("Paper-II", "Database Management System", "Database Overview", "Data Models", "medium",
    "किस डेटा मॉडल में एक चाइल्ड रिकॉर्ड के कई पैरेंट हो सकते हैं और डेटा को ग्राफ़ के रूप में दर्शाया जाता है?",
    "In which data model can a child record have multiple parents and data is represented as a graph?",
    ["पदानुक्रमिक मॉडल", "नेटवर्क मॉडल", "रिलेशनल मॉडल", "फ़्लैट फ़ाइल मॉडल"],
    1,
    "नेटवर्क मॉडल में डेटा को ग्राफ़ संरचना में रखा जाता है और एक चाइल्ड के कई पैरेंट हो सकते हैं (M:N संबंध समर्थित)।",
    "Network model = graph, many parents allowed.",
    ["Hierarchical model", "Network model", "Relational model", "Flat file model"]);

  b("Paper-II", "Database Management System", "RDBMS", "Relation Terminology", "medium",
    "किसी रिलेशन (table) में विशेषताओं (attributes/columns) की संख्या को क्या कहते हैं?",
    "The number of attributes (columns) in a relation (table) is called?",
    ["कार्डिनैलिटी (Cardinality)", "डिग्री (Degree)", "डोमेन", "ट्यूपल"],
    1,
    "रिलेशन की डिग्री (degree) उसमें उपस्थित विशेषताओं (columns) की संख्या होती है; पंक्तियों (rows) की संख्या कार्डिनैलिटी कहलाती है।",
    "Degree = columns; Cardinality = rows.",
    ["Cardinality", "Degree", "Domain", "Tuple"]);

  b("Paper-II", "Database Management System", "RDBMS", "Relation Terminology", "easy",
    "रिलेशनल मॉडल में किसी attribute के लिए अनुमत मानों के समुच्चय को क्या कहते हैं?",
    "In the relational model, the set of permitted values for an attribute is called?",
    ["ट्यूपल", "डोमेन", "डिग्री", "कुंजी"],
    1,
    "डोमेन (domain) किसी विशेषता के लिए मान्य/अनुमत मानों का समुच्चय होता है, जैसे Age के लिए 0-150 पूर्णांक।",
    "Domain = allowed value set for an attribute.",
    ["Tuple", "Domain", "Degree", "Key"]);

  b("Paper-II", "Database Management System", "RDBMS", "Keys", "medium",
    "एक से अधिक विशेषताओं (attributes) को मिलाकर बनाई गई प्राथमिक कुंजी को क्या कहते हैं?",
    "A primary key formed by combining more than one attribute is called?",
    ["सरोगेट कुंजी", "समग्र (Composite) कुंजी", "विदेशी कुंजी", "उम्मीदवार कुंजी"],
    1,
    "समग्र (composite) कुंजी दो या अधिक विशेषताओं के संयोजन से बनती है जो मिलकर विशिष्ट रूप से एक ट्यूपल की पहचान करती है।",
    "Composite key = two or more attributes together.",
    ["Surrogate key", "Composite key", "Foreign key", "Candidate key"]);

  b("Paper-II", "Database Management System", "RDBMS", "Keys", "medium",
    "एक कृत्रिम रूप से जनित (auto-generated) अद्वितीय कुंजी जिसका कोई व्यावसायिक अर्थ नहीं होता, क्या कहलाती है?",
    "An artificially generated unique key having no business meaning is called?",
    ["प्राकृतिक कुंजी", "सरोगेट (Surrogate) कुंजी", "सुपर कुंजी", "आंशिक कुंजी"],
    1,
    "सरोगेट कुंजी सिस्टम द्वारा जनित (जैसे auto-increment ID) एक कृत्रिम कुंजी है जिसका डेटा से कोई अर्थपूर्ण संबंध नहीं होता।",
    "Surrogate = system-generated meaningless ID.",
    ["Natural key", "Surrogate key", "Super key", "Partial key"]);

  b("Paper-II", "Database Management System", "Data Manipulation", "Join Types", "medium",
    "वह जॉइन जो केवल उन पंक्तियों को लौटाता है जिनमें दोनों टेबल में मिलान (match) होता है, क्या कहलाता है?",
    "The join that returns only rows having a match in both tables is called?",
    ["Left Outer Join", "Inner Join", "Full Outer Join", "Cross Join"],
    1,
    "Inner join केवल उन ट्यूपल्स को लौटाता है जिनमें जॉइन शर्त दोनों टेबलों में संतुष्ट होती है (matching rows only)।",
    "Inner join = only matching rows.",
    ["Left Outer Join", "Inner Join", "Full Outer Join", "Cross Join"]);

  b("Paper-II", "Database Management System", "Data Manipulation", "Join Types", "medium",
    "समान नाम वाले सभी सामान्य कॉलमों पर स्वतः जॉइन करके डुप्लिकेट कॉलम हटाने वाला जॉइन कौन-सा है?",
    "Which join automatically joins on all commonly named columns and removes the duplicate column?",
    ["Theta join", "Natural join", "Cross join", "Self join"],
    1,
    "Natural join समान नाम की विशेषताओं पर समानता (equality) के आधार पर जॉइन करता है और परिणाम में सामान्य कॉलम केवल एक बार रखता है।",
    "Natural join = auto on same-name columns, no duplicate.",
    ["Theta join", "Natural join", "Cross join", "Self join"]);

  b("Paper-II", "Database Management System", "Data Manipulation", "Relational Algebra", "hard",
    "रिलेशनल बीजगणित का कौन-सा ऑपरेशन 'सभी के लिए (for all)' प्रकार की क्वेरी हल करने में प्रयुक्त होता है?",
    "Which relational algebra operation is used to solve 'for all' type queries?",
    ["Selection (σ)", "Projection (π)", "Division (÷)", "Union (∪)"],
    2,
    "विभाजन (division ÷) ऑपरेशन 'for all' प्रकार की क्वेरी के लिए प्रयुक्त होता है, जैसे 'वे छात्र जिन्होंने सभी विषय लिए'।",
    "Division = 'for all' queries.",
    ["Selection (σ)", "Projection (π)", "Division (÷)", "Union (∪)"]);

  b("Paper-II", "Database Management System", "Data Manipulation", "Relational Algebra", "medium",
    "रिलेशनल बीजगणित में किसी रिलेशन या विशेषता का नाम बदलने के लिए कौन-सा ऑपरेटर प्रयुक्त होता है?",
    "Which operator is used to rename a relation or attribute in relational algebra?",
    ["σ (sigma)", "π (pi)", "ρ (rho)", "⋈ (bowtie)"],
    2,
    "rho (ρ) ऑपरेटर रिलेशन या उसकी विशेषताओं का नाम बदलने (rename) के लिए प्रयुक्त होता है।",
    "ρ (rho) = rename operator.",
    ["σ (sigma)", "π (pi)", "ρ (rho)", "⋈ (bowtie)"]);

  b("Paper-II", "Database Management System", "Data Manipulation", "Relational Calculus", "hard",
    "टपल रिलेशनल कैलकुलस (TRC) और डोमेन रिलेशनल कैलकुलस (DRC) के बीच मुख्य अंतर क्या है?",
    "What is the main difference between Tuple Relational Calculus (TRC) and Domain Relational Calculus (DRC)?",
    ["TRC प्रक्रियात्मक है, DRC नहीं", "TRC में चर ट्यूपल्स पर, DRC में चर विशेषता/डोमेन मानों पर होते हैं", "दोनों समान हैं", "DRC केवल SQL में प्रयुक्त होता है"],
    1,
    "TRC में चर पूरे ट्यूपल्स को दर्शाते हैं, जबकि DRC में चर विशेषताओं के डोमेन मानों को दर्शाते हैं; दोनों अप्रक्रियात्मक (declarative) हैं।",
    "TRC var = tuples; DRC var = domain (attribute) values.",
    ["TRC is procedural, DRC is not", "TRC variables range over tuples, DRC over attribute/domain values", "Both are identical", "DRC is used only in SQL"]);

  b("Paper-II", "Database Management System", "SQL", "WHERE vs HAVING", "medium",
    "SQL में समूहीकृत (grouped) डेटा पर शर्त लगाने के लिए किस क्लॉज़ का उपयोग किया जाता है?",
    "Which clause is used to apply a condition on grouped data in SQL?",
    ["WHERE", "HAVING", "ORDER BY", "DISTINCT"],
    1,
    "HAVING क्लॉज़ GROUP BY द्वारा बनाए गए समूहों पर शर्त लगाता है (aggregate के साथ), जबकि WHERE समूहीकरण से पहले व्यक्तिगत पंक्तियों पर लागू होता है।",
    "HAVING = filter groups; WHERE = filter rows.",
    ["WHERE", "HAVING", "ORDER BY", "DISTINCT"]);

  b("Paper-II", "Database Management System", "SQL", "Wildcards", "medium",
    "SQL LIKE में '%' वाइल्डकार्ड किसका प्रतिनिधित्व करता है?",
    "In SQL LIKE, what does the '%' wildcard represent?",
    ["ठीक एक वर्ण", "शून्य या अधिक वर्ण", "केवल अंक", "केवल एक शब्द"],
    1,
    "LIKE में '%' शून्य या अधिक वर्णों का प्रतिनिधित्व करता है, जबकि '_' ठीक एक वर्ण का प्रतिनिधित्व करता है।",
    "% = zero or more chars; _ = exactly one char.",
    ["Exactly one character", "Zero or more characters", "Only digits", "Only one word"]);

  b("Paper-II", "Database Management System", "SQL", "Constraints", "medium",
    "कौन-सा constraint किसी कॉलम में डाले गए मानों को एक निर्दिष्ट शर्त तक सीमित करता है (जैसे Age > 18)?",
    "Which constraint restricts the values entered in a column to a specified condition (e.g., Age > 18)?",
    ["UNIQUE", "CHECK", "DEFAULT", "NOT NULL"],
    1,
    "CHECK constraint यह सुनिश्चित करता है कि कॉलम में केवल शर्त को संतुष्ट करने वाले मान ही स्वीकार किए जाएँ।",
    "CHECK = enforces a condition on values.",
    ["UNIQUE", "CHECK", "DEFAULT", "NOT NULL"]);

  b("Paper-II", "Database Management System", "SQL", "DISTINCT", "easy",
    "SELECT परिणाम में डुप्लिकेट पंक्तियाँ हटाने के लिए कौन-सा कीवर्ड प्रयुक्त होता है?",
    "Which keyword is used to remove duplicate rows from a SELECT result?",
    ["UNIQUE", "DISTINCT", "REMOVE", "GROUP"],
    1,
    "DISTINCT कीवर्ड SELECT के परिणाम-सेट से डुप्लिकेट पंक्तियों को समाप्त कर केवल अद्वितीय मान लौटाता है।",
    "DISTINCT = eliminate duplicate rows.",
    ["UNIQUE", "DISTINCT", "REMOVE", "GROUP"]);

  b("Paper-II", "Database Management System", "SQL", "VIEW", "medium",
    "SQL में VIEW के बारे में कौन-सा कथन सही है?",
    "Which statement about a VIEW in SQL is correct?",
    ["यह डेटा भौतिक रूप से संग्रहीत करने वाली एक तालिका है", "यह एक क्वेरी पर आधारित वर्चुअल टेबल है", "यह एक स्थायी इंडेक्स है", "यह एक ट्रिगर है"],
    1,
    "VIEW एक वर्चुअल टेबल है जो एक संग्रहीत SELECT क्वेरी पर आधारित होती है; यह स्वयं डेटा भौतिक रूप से संग्रहीत नहीं करती।",
    "VIEW = virtual table from a stored query.",
    ["A table that physically stores data", "A virtual table based on a query", "A permanent index", "A trigger"]);

  b("Paper-II", "Database Management System", "SQL", "Index", "medium",
    "डेटाबेस में INDEX बनाने का मुख्य उद्देश्य क्या है?",
    "What is the main purpose of creating an INDEX in a database?",
    ["डेटा संग्रहण घटाना", "डेटा पुनर्प्राप्ति (retrieval) की गति बढ़ाना", "डेटा एन्क्रिप्ट करना", "डुप्लिकेट रोकना"],
    1,
    "INDEX एक डेटा संरचना है जो कॉलम पर खोज/पुनर्प्राप्ति की गति तेज़ करती है, हालांकि यह अतिरिक्त संग्रहण लेती है और लेखन को थोड़ा धीमा कर सकती है।",
    "Index = speeds up search/retrieval.",
    ["Reduce data storage", "Speed up data retrieval", "Encrypt data", "Prevent duplicates"]);

  b("Paper-II", "Database Management System", "Database Design", "Normalization", "hard",
    "किसी रिलेशन को 2NF में लाने के लिए किस प्रकार की निर्भरता (dependency) को हटाया जाता है?",
    "To bring a relation into 2NF, which type of dependency is removed?",
    ["ट्रांज़िटिव निर्भरता", "आंशिक (Partial) निर्भरता", "बहुमूल्यित निर्भरता", "पूर्ण निर्भरता"],
    1,
    "2NF प्राप्त करने के लिए आंशिक निर्भरता (composite key के भाग पर non-prime attribute की निर्भरता) को हटाया जाता है; रिलेशन पहले 1NF में होना चाहिए।",
    "2NF removes PARTIAL dependency.",
    ["Transitive dependency", "Partial dependency", "Multivalued dependency", "Full dependency"]);

  b("Paper-II", "Database Management System", "Database Design", "Normalization", "hard",
    "3NF प्राप्त करने के लिए किस निर्भरता को समाप्त किया जाता है?",
    "Which dependency is eliminated to achieve 3NF?",
    ["आंशिक निर्भरता", "ट्रांज़िटिव (Transitive) निर्भरता", "बहुमूल्यित निर्भरता", "जॉइन निर्भरता"],
    1,
    "3NF में ट्रांज़िटिव निर्भरता (non-prime attribute की दूसरे non-prime attribute पर निर्भरता) को हटाया जाता है।",
    "3NF removes TRANSITIVE dependency.",
    ["Partial dependency", "Transitive dependency", "Multivalued dependency", "Join dependency"]);

  b("Paper-II", "Database Management System", "Database Design", "Normalization", "hard",
    "बहुमूल्यित निर्भरता (multivalued dependency) को किस सामान्य रूप (normal form) में हटाया जाता है?",
    "Multivalued dependency is removed in which normal form?",
    ["2NF", "3NF", "BCNF", "4NF"],
    3,
    "4NF (चौथा सामान्य रूप) में बहुमूल्यित निर्भरता (multivalued dependency) को हटाया जाता है; इससे पहले रिलेशन BCNF में होना चाहिए।",
    "4NF removes multivalued dependency.",
    ["2NF", "3NF", "BCNF", "4NF"]);

  b("Paper-II", "Database Management System", "Data Manipulation", "Transaction ACID", "medium",
    "ACID गुणों में 'D' किसका द्योतक है?",
    "In ACID properties, what does 'D' stand for?",
    ["Distribution", "Durability", "Deadlock", "Dependency"],
    1,
    "ACID में D का अर्थ Durability है, अर्थात एक बार ट्रांज़ैक्शन commit हो जाने पर उसके परिवर्तन सिस्टम फेल होने पर भी स्थायी रहते हैं।",
    "D = Durability (committed changes persist).",
    ["Distribution", "Durability", "Deadlock", "Dependency"]);

  b("Paper-II", "Database Management System", "Data Manipulation", "Concurrency", "hard",
    "दो या अधिक ट्रांज़ैक्शनों के एक-दूसरे द्वारा धारित लॉक की अनिश्चितकालीन प्रतीक्षा करने की स्थिति क्या कहलाती है?",
    "The situation where two or more transactions wait indefinitely for locks held by each other is called?",
    ["Serializability", "Deadlock", "Checkpoint", "Rollback"],
    1,
    "Deadlock वह स्थिति है जब ट्रांज़ैक्शन एक-दूसरे द्वारा धारित संसाधनों की प्रतीक्षा में अनिश्चितकाल तक फँस जाते हैं।",
    "Deadlock = circular indefinite wait for locks.",
    ["Serializability", "Deadlock", "Checkpoint", "Rollback"]);

  b("Paper-II", "Database Management System", "Data Manipulation", "Concurrency Control", "hard",
    "Two-Phase Locking (2PL) प्रोटोकॉल किसकी गारंटी देता है?",
    "The Two-Phase Locking (2PL) protocol guarantees what?",
    ["डेडलॉक की अनुपस्थिति", "शेड्यूल की सीरियलाइज़ेबिलिटी (serializability)", "तेज़ निष्पादन", "शून्य लॉगिंग"],
    1,
    "2PL (बढ़ता और घटता चरण) शेड्यूल की conflict-serializability सुनिश्चित करता है, यद्यपि यह डेडलॉक की गारंटी नहीं हटाता।",
    "2PL ensures serializability (not deadlock-free).",
    ["Absence of deadlock", "Serializability of schedule", "Faster execution", "Zero logging"]);

  b("Paper-II", "Database Management System", "Database Architecture", "Recovery", "medium",
    "डेटाबेस रिकवरी में वह बिंदु जहाँ सभी बफ़र्स को डिस्क पर लिखा जाता है ताकि रिकवरी तेज़ हो, क्या कहलाता है?",
    "In database recovery, the point at which all buffers are written to disk to speed up recovery is called?",
    ["Log record", "Checkpoint", "Rollback", "Commit point"],
    1,
    "Checkpoint वह बिंदु है जहाँ DBMS सभी संशोधित बफ़र्स को डिस्क पर लिखता है, जिससे रिकवरी के दौरान लॉग का केवल हाल का भाग पढ़ना पड़ता है।",
    "Checkpoint = flush buffers, faster recovery.",
    ["Log record", "Checkpoint", "Rollback", "Commit point"]);

  b("Paper-II", "Database Management System", "NoSQL", "NoSQL Types", "medium",
    "Neo4j किस प्रकार का NoSQL डेटाबेस है?",
    "Neo4j is which type of NoSQL database?",
    ["डॉक्यूमेंट स्टोर", "की-वैल्यू स्टोर", "ग्राफ़ डेटाबेस", "कॉलम-फैमिली स्टोर"],
    2,
    "Neo4j एक ग्राफ़ डेटाबेस है जो नोड्स और एजेस के रूप में डेटा और उनके संबंध संग्रहीत करता है (सोशल नेटवर्क आदि के लिए आदर्श)।",
    "Neo4j = graph database.",
    ["Document store", "Key-value store", "Graph database", "Column-family store"]);

  b("Paper-II", "Database Management System", "NoSQL", "NoSQL Types", "medium",
    "Redis मुख्यतः किस प्रकार का NoSQL डेटा स्टोर है?",
    "Redis is primarily which type of NoSQL data store?",
    ["ग्राफ़ डेटाबेस", "की-वैल्यू (Key-Value) स्टोर", "डॉक्यूमेंट स्टोर", "रिलेशनल डेटाबेस"],
    1,
    "Redis एक इन-मेमोरी की-वैल्यू स्टोर है जो अत्यंत तेज़ कैशिंग और सेशन स्टोरेज के लिए प्रयुक्त होता है।",
    "Redis = in-memory key-value store.",
    ["Graph database", "Key-Value store", "Document store", "Relational database"]);

  b("Paper-II", "Database Management System", "Selecting Right Database", "CAP Theorem", "hard",
    "CAP प्रमेय के अनुसार एक वितरित (distributed) सिस्टम एक साथ अधिकतम कितने गुणों की गारंटी दे सकता है?",
    "According to the CAP theorem, a distributed system can simultaneously guarantee at most how many of the properties?",
    ["तीनों (सभी)", "केवल दो", "केवल एक", "कोई नहीं"],
    1,
    "CAP प्रमेय कहता है कि Consistency, Availability और Partition tolerance में से कोई वितरित सिस्टम एक साथ अधिकतम दो की ही गारंटी दे सकता है।",
    "CAP = pick at most 2 of 3.",
    ["All three", "Only two", "Only one", "None"]);

  b("Paper-II", "Database Management System", "NoSQL", "Column Family", "medium",
    "निम्न में से कौन-सा एक कॉलम-फैमिली (wide-column) NoSQL डेटाबेस है?",
    "Which of the following is a column-family (wide-column) NoSQL database?",
    ["MySQL", "Cassandra", "Redis", "Neo4j"],
    1,
    "Cassandra एक कॉलम-फैमिली/वाइड-कॉलम NoSQL डेटाबेस है जो बड़े पैमाने पर वितरित लेखन-भारी कार्यभार के लिए उपयुक्त है।",
    "Cassandra = column-family (wide-column) store.",
    ["MySQL", "Cassandra", "Redis", "Neo4j"]);

  // ---------------- System Analysis and Design (~18) ----------------

  b("Paper-II", "System Analysis and Design", "Other SDLC Approaches", "V-Model", "medium",
    "V-मॉडल में विकास के प्रत्येक चरण के समानांतर क्या जुड़ा होता है?",
    "In the V-model, what is associated in parallel with each development phase?",
    ["एक डिज़ाइन चरण", "एक परीक्षण (testing) चरण", "एक रखरखाव चरण", "एक परिनियोजन चरण"],
    1,
    "V-मॉडल में प्रत्येक विकास चरण के समानांतर एक संगत परीक्षण चरण होता है, इसीलिए इसे verification and validation मॉडल भी कहते हैं।",
    "V-model: each dev phase paired with a test phase.",
    ["A design phase", "A testing phase", "A maintenance phase", "A deployment phase"]);

  b("Paper-II", "System Analysis and Design", "Other SDLC Approaches", "Agile Scrum", "medium",
    "Scrum में एक निश्चित समय-सीमा वाली पुनरावृत्ति (iteration) जिसमें कार्यशील वृद्धि तैयार होती है, क्या कहलाती है?",
    "In Scrum, a fixed time-boxed iteration that produces a working increment is called?",
    ["Milestone", "Sprint", "Backlog", "Standup"],
    1,
    "Sprint एक निश्चित समय-सीमा (आमतौर पर 2-4 सप्ताह) की पुनरावृत्ति है जिसके अंत में एक संभावित रूप से शिप-योग्य उत्पाद वृद्धि तैयार होती है।",
    "Sprint = time-boxed iteration producing an increment.",
    ["Milestone", "Sprint", "Backlog", "Standup"]);

  b("Paper-II", "System Analysis and Design", "Other SDLC Approaches", "Waterfall", "medium",
    "Waterfall मॉडल की मुख्य सीमा (limitation) क्या है?",
    "What is the main limitation of the Waterfall model?",
    ["यह बहुत तेज़ है", "बाद के चरणों में आवश्यकता परिवर्तन को संभालना कठिन है", "इसमें कोई दस्तावेज़ नहीं होता", "यह केवल छोटे प्रोजेक्ट में असंभव है"],
    1,
    "Waterfall मॉडल अनुक्रमिक होने के कारण बाद के चरणों में आवश्यकता परिवर्तन को संभालना कठिन बनाता है और पीछे जाना महँगा होता है।",
    "Waterfall = rigid, hard to accommodate late changes.",
    ["It is too fast", "Difficult to handle requirement changes in later phases", "It has no documentation", "It is impossible only in small projects"]);

  b("Paper-II", "System Analysis and Design", "Other SDLC Approaches", "RAD", "medium",
    "RAD (Rapid Application Development) मॉडल किस पर सबसे अधिक बल देता है?",
    "The RAD (Rapid Application Development) model emphasizes most on what?",
    ["व्यापक प्रारंभिक दस्तावेज़ीकरण", "प्रोटोटाइप और तीव्र पुनरावृत्तीय विकास", "अनुक्रमिक चरण", "हार्डवेयर डिज़ाइन"],
    1,
    "RAD मॉडल प्रोटोटाइपिंग और घटक पुनःप्रयोग के माध्यम से तीव्र, पुनरावृत्तीय विकास और उपयोगकर्ता प्रतिक्रिया पर बल देता है।",
    "RAD = prototypes + rapid iterative development.",
    ["Extensive upfront documentation", "Prototypes and rapid iterative development", "Sequential phases", "Hardware design"]);

  b("Paper-II", "System Analysis and Design", "Feasibility Analysis", "Feasibility Types", "medium",
    "यह जाँचना कि प्रस्तावित सिस्टम मौजूदा कानूनों व नियमों का उल्लंघन तो नहीं करता, किस व्यवहार्यता के अंतर्गत आता है?",
    "Checking whether the proposed system violates existing laws and regulations falls under which feasibility?",
    ["तकनीकी व्यवहार्यता", "आर्थिक व्यवहार्यता", "कानूनी (Legal) व्यवहार्यता", "परिचालन व्यवहार्यता"],
    2,
    "कानूनी (legal) व्यवहार्यता यह सुनिश्चित करती है कि प्रस्तावित सिस्टम कानूनों, अनुबंधों और डेटा-सुरक्षा नियमों का उल्लंघन न करे।",
    "Legal feasibility = compliance with laws/regulations.",
    ["Technical feasibility", "Economic feasibility", "Legal feasibility", "Operational feasibility"]);

  b("Paper-II", "System Analysis and Design", "Feasibility Analysis", "Economic Feasibility", "medium",
    "लागत-लाभ विश्लेषण (cost-benefit analysis) मुख्यतः किस व्यवहार्यता का भाग है?",
    "Cost-benefit analysis is primarily part of which feasibility?",
    ["तकनीकी", "आर्थिक (Economic)", "परिचालन", "अनुसूची (Schedule)"],
    1,
    "आर्थिक व्यवहार्यता में लागत-लाभ विश्लेषण द्वारा यह आँका जाता है कि परियोजना के लाभ उसकी लागत से अधिक हैं या नहीं।",
    "Cost-benefit analysis = economic feasibility.",
    ["Technical", "Economic", "Operational", "Schedule"]);

  b("Paper-II", "System Analysis and Design", "Requirement Gathering", "Fact-Finding", "medium",
    "बड़ी संख्या में भौगोलिक रूप से बिखरे उपयोगकर्ताओं से डेटा एकत्र करने के लिए कौन-सी तथ्य-खोज तकनीक सर्वाधिक उपयुक्त है?",
    "Which fact-finding technique is most suitable for gathering data from a large number of geographically dispersed users?",
    ["साक्षात्कार (Interview)", "प्रश्नावली (Questionnaire)", "अवलोकन (Observation)", "रिकॉर्ड समीक्षा"],
    1,
    "प्रश्नावली (questionnaire) बड़ी संख्या में बिखरे हुए उपयोगकर्ताओं से किफायती रूप से डेटा एकत्र करने की सर्वोत्तम तकनीक है।",
    "Questionnaire = best for many dispersed users.",
    ["Interview", "Questionnaire", "Observation", "Record review"]);

  b("Paper-II", "System Analysis and Design", "Structured Analysis", "DFD Levels", "medium",
    "DFD में सम्पूर्ण सिस्टम को एकल प्रक्रिया के रूप में दर्शाने वाला आरेख कौन-सा है?",
    "Which diagram in DFD represents the entire system as a single process?",
    ["Level-1 DFD", "Context diagram (Level-0)", "Level-2 DFD", "ER diagram"],
    1,
    "Context diagram (Level-0) पूरे सिस्टम को एक ही प्रक्रिया के रूप में दिखाता है और उसके बाहरी संस्थाओं के साथ डेटा प्रवाह प्रदर्शित करता है।",
    "Context = Level-0, whole system as one process.",
    ["Level-1 DFD", "Context diagram (Level-0)", "Level-2 DFD", "ER diagram"]);

  b("Paper-II", "System Analysis and Design", "Structured Analysis", "DFD Symbols", "medium",
    "DFD में डेटा के स्थायी भंडारण (जैसे फ़ाइल या डेटाबेस) को किस प्रतीक से दर्शाया जाता है?",
    "In a DFD, permanent storage of data (like a file or database) is represented by which symbol?",
    ["वृत्त/गोल कोना आयत (process)", "खुला आयत/दो समानांतर रेखाएँ (data store)", "वर्ग (external entity)", "तीर (data flow)"],
    1,
    "DFD में data store को खुले आयत या दो समानांतर रेखाओं से दर्शाया जाता है, जो डेटा के भंडारण स्थान को इंगित करता है।",
    "Data store = open rectangle / two parallel lines.",
    ["Circle/rounded rectangle (process)", "Open rectangle/two parallel lines (data store)", "Square (external entity)", "Arrow (data flow)"]);

  b("Paper-II", "System Analysis and Design", "Structured Design", "Coupling", "hard",
    "मॉड्यूलों के बीच किस प्रकार का युग्मन (coupling) सर्वोत्तम (सबसे कम) माना जाता है?",
    "Which type of coupling between modules is considered the best (lowest)?",
    ["Content coupling", "Common coupling", "Data coupling", "Control coupling"],
    2,
    "Data coupling सर्वोत्तम (सबसे ढीला) युग्मन है जिसमें मॉड्यूल केवल आवश्यक डेटा पैरामीटर साझा करते हैं; content coupling सबसे खराब है।",
    "Data coupling = best; content coupling = worst.",
    ["Content coupling", "Common coupling", "Data coupling", "Control coupling"]);

  b("Paper-II", "System Analysis and Design", "Structured Design", "Cohesion", "hard",
    "किसी मॉड्यूल के लिए किस प्रकार का सामंजस्य (cohesion) सर्वोत्तम माना जाता है?",
    "Which type of cohesion is considered the best for a module?",
    ["Coincidental cohesion", "Logical cohesion", "Temporal cohesion", "Functional cohesion"],
    3,
    "Functional cohesion सर्वोत्तम है जिसमें मॉड्यूल के सभी तत्व एक ही सुपरिभाषित कार्य को पूरा करने में योगदान देते हैं।",
    "Functional cohesion = best (single well-defined task).",
    ["Coincidental cohesion", "Logical cohesion", "Temporal cohesion", "Functional cohesion"]);

  b("Paper-II", "System Analysis and Design", "UML", "Diagram Classification", "medium",
    "निम्न में से कौन-सा एक व्यवहारात्मक (behavioral) UML आरेख है?",
    "Which of the following is a behavioral UML diagram?",
    ["Class diagram", "Sequence diagram", "Component diagram", "Deployment diagram"],
    1,
    "Sequence diagram एक व्यवहारात्मक (interaction) UML आरेख है; class, component और deployment आरेख संरचनात्मक (structural) होते हैं।",
    "Sequence = behavioral; class/component/deployment = structural.",
    ["Class diagram", "Sequence diagram", "Component diagram", "Deployment diagram"]);

  b("Paper-II", "System Analysis and Design", "UML", "Use Case", "medium",
    "उपयोगकर्ता (actor) और सिस्टम की कार्यक्षमता के बीच परस्पर क्रिया दर्शाने के लिए कौन-सा UML आरेख प्रयुक्त होता है?",
    "Which UML diagram is used to show the interaction between an actor and the system's functionality?",
    ["Use case diagram", "Class diagram", "Deployment diagram", "Object diagram"],
    0,
    "Use case diagram अभिनेताओं (actors) और सिस्टम द्वारा प्रदान की गई कार्यक्षमताओं (use cases) के बीच संबंध दर्शाता है।",
    "Use case diagram = actors vs system functions.",
    ["Use case diagram", "Class diagram", "Deployment diagram", "Object diagram"]);

  b("Paper-II", "System Analysis and Design", "Testing", "White-Box", "hard",
    "स्रोत कोड की आंतरिक तार्किक संरचना और पथों (paths) की जाँच करने वाला परीक्षण किस श्रेणी में आता है?",
    "Testing that examines the internal logical structure and paths of the source code falls under which category?",
    ["Black-box testing", "White-box testing", "Acceptance testing", "Beta testing"],
    1,
    "White-box (संरचनात्मक) परीक्षण कोड की आंतरिक तर्क, शाखाओं और पथों की जाँच करता है; इसमें statement, branch और path coverage शामिल हैं।",
    "White-box = internal code paths (path/branch coverage).",
    ["Black-box testing", "White-box testing", "Acceptance testing", "Beta testing"]);

  b("Paper-II", "System Analysis and Design", "Testing", "Black-Box", "medium",
    "इनपुट डोमेन को समूहों में बाँटकर प्रत्येक समूह से एक प्रतिनिधि मान का परीक्षण करने की black-box तकनीक क्या कहलाती है?",
    "The black-box technique of partitioning the input domain into groups and testing one representative value from each is called?",
    ["Boundary value analysis", "Equivalence partitioning", "Path testing", "Statement coverage"],
    1,
    "Equivalence partitioning इनपुट डोमेन को समतुल्य वर्गों में विभाजित करती है और प्रत्येक वर्ग से एक प्रतिनिधि मान का परीक्षण करती है।",
    "Equivalence partitioning = one representative per class.",
    ["Boundary value analysis", "Equivalence partitioning", "Path testing", "Statement coverage"]);

  b("Paper-II", "System Analysis and Design", "Testing", "Alpha vs Beta", "medium",
    "अंतिम उपयोगकर्ताओं द्वारा वास्तविक परिवेश में सॉफ़्टवेयर रिलीज़ से पहले किया गया परीक्षण क्या कहलाता है?",
    "Testing done by end users in a real environment before the software release is called?",
    ["Alpha testing", "Beta testing", "Unit testing", "Integration testing"],
    1,
    "Beta testing वास्तविक उपयोगकर्ताओं द्वारा वास्तविक परिवेश में किया जाता है; alpha testing डेवलपर स्थल पर आंतरिक रूप से होता है।",
    "Beta = real users, real environment; Alpha = in-house.",
    ["Alpha testing", "Beta testing", "Unit testing", "Integration testing"]);

  b("Paper-II", "System Analysis and Design", "Maintenance", "Maintenance Types", "medium",
    "सॉफ़्टवेयर को नए ऑपरेटिंग सिस्टम या हार्डवेयर के अनुकूल बनाने के लिए किया गया रखरखाव किस प्रकार का है?",
    "Maintenance done to adapt software to a new operating system or hardware is which type?",
    ["Corrective", "Adaptive", "Perfective", "Preventive"],
    1,
    "Adaptive maintenance सॉफ़्टवेयर को बदलते परिवेश (नए OS, हार्डवेयर, नियम) के अनुकूल बनाने के लिए किया जाता है।",
    "Adaptive = adapt to changed environment.",
    ["Corrective", "Adaptive", "Perfective", "Preventive"]);

  b("Paper-II", "System Analysis and Design", "Testing", "Verification vs Validation", "hard",
    "'क्या हम उत्पाद को सही तरीके से बना रहे हैं?' यह प्रश्न किससे संबंधित है?",
    "'Are we building the product right?' — this question relates to what?",
    ["Validation", "Verification", "Deployment", "Maintenance"],
    1,
    "Verification यह जाँचता है कि उत्पाद विनिर्देशों के अनुसार सही ढंग से बनाया जा रहा है ('building the product right'); validation यह जाँचता है कि सही उत्पाद बनाया जा रहा है।",
    "Verification = building product right; Validation = right product.",
    ["Validation", "Verification", "Deployment", "Maintenance"]);

  // ---------------- Internet of Things and Applications (~20) ----------------

  b("Paper-II", "Internet of Things and Applications", "IoT", "Architecture Layers", "medium",
    "IoT आर्किटेक्चर में सेंसर द्वारा भौतिक परिवेश से डेटा एकत्र करने वाला स्तर कौन-सा है?",
    "In IoT architecture, which layer collects data from the physical environment using sensors?",
    ["नेटवर्क स्तर", "अनुप्रयोग (Application) स्तर", "प्रत्यक्षण (Perception) स्तर", "मध्यवर्ती स्तर"],
    2,
    "प्रत्यक्षण (perception/sensing) स्तर सेंसरों और एक्ट्यूएटरों के माध्यम से भौतिक परिवेश से डेटा एकत्र करता है।",
    "Perception layer = sensors collect physical data.",
    ["Network layer", "Application layer", "Perception layer", "Middleware layer"]);

  b("Paper-II", "Internet of Things and Applications", "IoT", "Sensors vs Actuators", "medium",
    "निम्न में से कौन-सा एक एक्ट्यूएटर (actuator) है, सेंसर नहीं?",
    "Which of the following is an actuator, not a sensor?",
    ["तापमान सेंसर", "मोटर/सर्वो", "आर्द्रता सेंसर", "लाइट सेंसर"],
    1,
    "एक्ट्यूएटर (जैसे मोटर, सर्वो, रिले) विद्युत संकेत को भौतिक क्रिया में बदलता है; सेंसर भौतिक राशि को संकेत में बदलते हैं।",
    "Actuator = motor/servo (acts); sensor = measures.",
    ["Temperature sensor", "Motor/Servo", "Humidity sensor", "Light sensor"]);

  b("Paper-II", "Internet of Things and Applications", "IoT", "Edge Computing", "medium",
    "IoT में डेटा को केंद्रीय क्लाउड भेजने के बजाय उपकरण के निकट ही संसाधित करने की अवधारणा क्या कहलाती है?",
    "In IoT, processing data near the device instead of sending it to a central cloud is called?",
    ["Edge computing", "Grid computing", "Quantum computing", "Batch processing"],
    0,
    "Edge computing में डेटा को स्रोत (उपकरण) के निकट संसाधित किया जाता है, जिससे विलंबता (latency) और बैंडविड्थ खपत घटती है।",
    "Edge computing = process near the device.",
    ["Edge computing", "Grid computing", "Quantum computing", "Batch processing"]);

  b("Paper-II", "Internet of Things and Applications", "Internet Protocol", "MQTT", "medium",
    "IoT में हल्के (lightweight) प्रकाशन-सदस्यता (publish-subscribe) संदेश परिवहन के लिए कौन-सा प्रोटोकॉल व्यापक रूप से प्रयुक्त होता है?",
    "Which protocol is widely used for lightweight publish-subscribe messaging in IoT?",
    ["HTTP", "MQTT", "FTP", "SMTP"],
    1,
    "MQTT एक हल्का publish-subscribe प्रोटोकॉल है जो कम बैंडविड्थ वाले IoT उपकरणों के लिए एक broker के माध्यम से कार्य करता है।",
    "MQTT = lightweight publish-subscribe (broker-based).",
    ["HTTP", "MQTT", "FTP", "SMTP"]);

  b("Paper-II", "Internet of Things and Applications", "Internet Protocol", "IP Address", "medium",
    "IPv6 पते की लंबाई कितनी होती है?",
    "What is the length of an IPv6 address?",
    ["32 बिट", "64 बिट", "128 बिट", "256 बिट"],
    2,
    "IPv6 पता 128 बिट का होता है, जबकि IPv4 पता 32 बिट का होता है; IoT के विशाल उपकरण-संख्या के लिए IPv6 उपयुक्त है।",
    "IPv6 = 128-bit; IPv4 = 32-bit.",
    ["32 bits", "64 bits", "128 bits", "256 bits"]);

  b("Paper-II", "Internet of Things and Applications", "IoT", "Applications", "easy",
    "मिट्टी की नमी सेंसर से सिंचाई को स्वचालित करना IoT के किस अनुप्रयोग क्षेत्र का उदाहरण है?",
    "Automating irrigation using soil-moisture sensors is an example of which IoT application area?",
    ["स्मार्ट कृषि (Smart agriculture)", "स्मार्ट रिटेल", "पहनने योग्य (wearables)", "औद्योगिक रोबोटिक्स"],
    0,
    "मिट्टी की नमी के आधार पर सिंचाई स्वचालन स्मार्ट कृषि (precision farming) का उदाहरण है।",
    "Soil-moisture based irrigation = smart agriculture.",
    ["Smart agriculture", "Smart retail", "Wearables", "Industrial robotics"]);

  b("Paper-II", "Internet of Things and Applications", "HTML", "Void Tags", "medium",
    "निम्न में से कौन-सा एक खाली/void (बिना समापन टैग वाला) HTML तत्व है?",
    "Which of the following is an empty/void HTML element (no closing tag)?",
    ["<p>", "<br>", "<div>", "<table>"],
    1,
    "<br> एक void तत्व है जिसका कोई समापन टैग नहीं होता; <p>, <div>, <table> को समापन टैग की आवश्यकता होती है।",
    "<br> = void/empty tag, no closing.",
    ["<p>", "<br>", "<div>", "<table>"]);

  b("Paper-II", "Internet of Things and Applications", "HTML", "Block vs Inline", "medium",
    "निम्न में से कौन-सा एक inline HTML तत्व है?",
    "Which of the following is an inline HTML element?",
    ["<div>", "<p>", "<span>", "<section>"],
    2,
    "<span> एक inline तत्व है जो केवल आवश्यक चौड़ाई लेता है; <div>, <p>, <section> block-level तत्व हैं जो नई पंक्ति में शुरू होते हैं।",
    "<span> = inline; <div>/<p>/<section> = block.",
    ["<div>", "<p>", "<span>", "<section>"]);

  b("Paper-II", "Internet of Things and Applications", "HTML", "Anchor Tag", "easy",
    "HTML में हाइपरलिंक बनाने के लिए किस टैग की href विशेषता (attribute) प्रयुक्त होती है?",
    "Which tag's href attribute is used to create a hyperlink in HTML?",
    ["<img>", "<a>", "<link>", "<href>"],
    1,
    "<a href=\"...\"> anchor टैग हाइपरलिंक बनाता है; href विशेषता लक्ष्य URL निर्दिष्ट करती है।",
    "<a href> = hyperlink anchor.",
    ["<img>", "<a>", "<link>", "<href>"]);

  b("Paper-II", "Internet of Things and Applications", "HTML", "HTML5 Semantic", "medium",
    "निम्न में से कौन-सा एक HTML5 सिमेंटिक (semantic) टैग है?",
    "Which of the following is an HTML5 semantic tag?",
    ["<article>", "<b>", "<font>", "<center>"],
    0,
    "<article> एक HTML5 सिमेंटिक टैग है जो सामग्री का अर्थ बताता है; <b>, <font>, <center> प्रस्तुति/शैली संबंधी (non-semantic) हैं।",
    "<article> = HTML5 semantic tag.",
    ["<article>", "<b>", "<font>", "<center>"]);

  b("Paper-II", "Internet of Things and Applications", "HTML", "Ordered List", "easy",
    "HTML में क्रमांकित (numbered) सूची बनाने के लिए किस टैग का उपयोग किया जाता है?",
    "Which tag is used to create a numbered (ordered) list in HTML?",
    ["<ul>", "<ol>", "<li>", "<dl>"],
    1,
    "<ol> (ordered list) क्रमांकित सूची बनाता है; <ul> बुलेटेड (unordered) सूची बनाता है और <li> सूची आइटम को दर्शाता है।",
    "<ol> = ordered (numbered) list.",
    ["<ul>", "<ol>", "<li>", "<dl>"]);

  b("Paper-II", "Internet of Things and Applications", "XML", "DTD/XSD", "medium",
    "XML दस्तावेज़ की संरचना और डेटा प्रकारों को परिभाषित करने वाली स्कीमा भाषा कौन-सी है?",
    "Which schema language defines the structure and data types of an XML document?",
    ["DTD", "XSD (XML Schema)", "CSS", "HTML"],
    1,
    "XSD (XML Schema Definition) XML की संरचना के साथ-साथ डेटा प्रकार भी परिभाषित करती है; DTD डेटा प्रकार समर्थन नहीं देती।",
    "XSD = structure + data types (DTD lacks data types).",
    ["DTD", "XSD (XML Schema)", "CSS", "HTML"]);

  b("Paper-II", "Internet of Things and Applications", "XML", "Well-Formed", "medium",
    "एक XML दस्तावेज़ को 'well-formed' कहलाने के लिए क्या आवश्यक है?",
    "What is required for an XML document to be called 'well-formed'?",
    ["इसे एक DTD से मान्य होना चाहिए", "इसे XML सिंटैक्स नियमों का पालन करना चाहिए (जैसे प्रत्येक टैग बंद हो)", "इसमें CSS होना चाहिए", "इसमें केवल एक टैग हो"],
    1,
    "Well-formed XML केवल XML सिंटैक्स नियमों (उचित नेस्टिंग, प्रत्येक टैग बंद, एक रूट तत्व) का पालन करता है; DTD/XSD से मान्य होना 'valid' कहलाता है।",
    "Well-formed = syntax rules; valid = matches DTD/XSD.",
    ["It must be validated against a DTD", "It must follow XML syntax rules (e.g., every tag closed)", "It must contain CSS", "It must have only one tag"]);

  b("Paper-II", "Internet of Things and Applications", "Scripts", "CSS Box Model", "medium",
    "CSS box model में किसी तत्व की सामग्री (content) और बॉर्डर के बीच के स्थान को क्या कहते हैं?",
    "In the CSS box model, the space between an element's content and its border is called?",
    ["Margin", "Padding", "Border", "Outline"],
    1,
    "Padding सामग्री और बॉर्डर के बीच का आंतरिक स्थान है, जबकि margin बॉर्डर के बाहर का बाहरी स्थान है।",
    "Padding = inside (content to border); margin = outside.",
    ["Margin", "Padding", "Border", "Outline"]);

  b("Paper-II", "Internet of Things and Applications", "Scripts", "External CSS", "medium",
    "एकाधिक वेब पृष्ठों पर एक समान शैली लागू करने के लिए CSS का कौन-सा प्रकार सर्वोत्तम है?",
    "Which type of CSS is best for applying a consistent style across multiple web pages?",
    ["Inline CSS", "Internal (embedded) CSS", "External CSS", "कोई नहीं"],
    2,
    "External CSS एक अलग .css फ़ाइल में लिखी जाती है और अनेक पृष्ठों से जोड़ी जा सकती है, जिससे एकरूपता और रखरखाव आसान होता है।",
    "External CSS = one file, many pages.",
    ["Inline CSS", "Internal (embedded) CSS", "External CSS", "None"]);

  b("Paper-II", "Internet of Things and Applications", "Scripts", "JavaScript let", "medium",
    "JavaScript में ब्लॉक-स्कोप्ड चर घोषित करने के लिए कौन-सा कीवर्ड प्रयुक्त होता है?",
    "Which keyword is used to declare a block-scoped variable in JavaScript?",
    ["var", "let", "int", "define"],
    1,
    "let (और const) ब्लॉक-स्कोप्ड चर घोषित करते हैं, जबकि var फ़ंक्शन-स्कोप्ड होता है।",
    "let = block-scoped; var = function-scoped.",
    ["var", "let", "int", "define"]);

  b("Paper-II", "Internet of Things and Applications", "Internet Protocol", "HTTP Methods", "medium",
    "HTTP में सर्वर को डेटा जमा (submit) करने के लिए, जो URL में दिखाई नहीं देता, कौन-सी विधि प्रयुक्त होती है?",
    "In HTTP, which method is used to submit data to the server such that it does not appear in the URL?",
    ["GET", "POST", "HEAD", "DELETE"],
    1,
    "POST विधि डेटा को अनुरोध के body में भेजती है (URL में नहीं), जिससे यह बड़े/संवेदनशील डेटा के लिए उपयुक्त है; GET डेटा URL में जोड़ता है।",
    "POST = data in body; GET = data in URL.",
    ["GET", "POST", "HEAD", "DELETE"]);

  b("Paper-II", "Internet of Things and Applications", "Internet Protocol", "Status Codes", "medium",
    "HTTP स्थिति कोड 404 का क्या अर्थ है?",
    "What does HTTP status code 404 mean?",
    ["सफलता (OK)", "संसाधन नहीं मिला (Not Found)", "आंतरिक सर्वर त्रुटि", "अनधिकृत"],
    1,
    "404 का अर्थ है 'Not Found' — अनुरोधित संसाधन सर्वर पर नहीं मिला; 200 = OK, 500 = आंतरिक सर्वर त्रुटि।",
    "404 = Not Found; 200 = OK; 500 = server error.",
    ["Success (OK)", "Resource Not Found", "Internal Server Error", "Unauthorized"]);

  b("Paper-II", "Internet of Things and Applications", "E-Commerce", "Business Models", "medium",
    "एक उपभोक्ता द्वारा दूसरे उपभोक्ता को ऑनलाइन नीलामी साइट पर वस्तु बेचना किस ई-कॉमर्स मॉडल का उदाहरण है?",
    "A consumer selling goods to another consumer on an online auction site is an example of which e-commerce model?",
    ["B2B", "B2C", "C2C", "C2B"],
    2,
    "C2C (Consumer-to-Consumer) मॉडल में उपभोक्ता आपस में लेन-देन करते हैं, जैसे OLX या eBay जैसी नीलामी/पुनर्विक्रय साइटों पर।",
    "C2C = consumer sells to consumer (e.g., OLX/eBay).",
    ["B2B", "B2C", "C2C", "C2B"]);

  b("Paper-II", "Internet of Things and Applications", "Multimedia and Graphics", "Image Formats", "medium",
    "निम्न में से कौन-सा छवि प्रारूप पारदर्शिता (transparency) के साथ हानिरहित (lossless) संपीड़न का समर्थन करता है?",
    "Which of the following image formats supports lossless compression with transparency?",
    ["JPEG", "PNG", "BMP", "GIF (केवल 256 रंग)"],
    1,
    "PNG हानिरहित संपीड़न और पारदर्शिता (alpha channel) का समर्थन करता है; JPEG हानिपूर्ण है और पारदर्शिता समर्थित नहीं है।",
    "PNG = lossless + transparency; JPEG = lossy, no transparency.",
    ["JPEG", "PNG", "BMP", "GIF (only 256 colors)"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
