/* RSSB BCI 2026 - Mega bank part 08: DBMS + System Analysis & Design + IoT */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG08";
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

  b("Paper-II", "Database Management System", "Database Overview", "DBMS Definition", "easy",
    "DBMS का पूर्ण रूप क्या है?",
    "What is the full form of DBMS?",
    ["Database Management System", "Data Backup Management System", "Digital Base Management System", "Database Mapping System"],
    0,
    "DBMS का अर्थ Database Management System है, जो डेटाबेस बनाने, संग्रहीत करने और प्रबंधित करने वाला सॉफ़्टवेयर है।",
    "DBMS = Database Management System.",
    ["Database Management System", "Data Backup Management System", "Digital Base Management System", "Database Mapping System"]);

  b("Paper-II", "Database Management System", "Database Overview", "DBMS vs File System", "medium",
    "पारंपरिक फ़ाइल सिस्टम की तुलना में DBMS का मुख्य लाभ क्या है?",
    "What is the main advantage of DBMS over a traditional file system?",
    ["डेटा अतिरेक (redundancy) में कमी", "अधिक डिस्क स्थान की खपत", "धीमी पहुँच", "डेटा असंगति में वृद्धि"],
    0,
    "DBMS केंद्रीकृत नियंत्रण द्वारा डेटा अतिरेक (redundancy) कम करता है और डेटा संगति बनाए रखता है, जबकि फ़ाइल सिस्टम में अतिरेक अधिक होता है।",
    "DBMS reduces redundancy; file system increases it.",
    ["Reduced data redundancy", "More disk space consumption", "Slower access", "Increased data inconsistency"]);

  b("Paper-II", "Database Management System", "Database Architecture", "Schema Levels", "medium",
    "ANSI/SPARC तीन-स्तरीय आर्किटेक्चर में उपयोगकर्ता को दिखने वाला स्तर कौन-सा है?",
    "In the ANSI/SPARC three-level architecture, which level is seen by the user?",
    ["आंतरिक (Internal) स्तर", "वैचारिक (Conceptual) स्तर", "बाह्य (External) स्तर", "भौतिक (Physical) स्तर"],
    2,
    "बाह्य (External/View) स्तर वह स्तर है जो अलग-अलग उपयोगकर्ताओं को डेटाबेस का दृश्य दिखाता है।",
    "External = user view; Internal = physical storage.",
    ["Internal level", "Conceptual level", "External level", "Physical level"]);

  b("Paper-II", "Database Management System", "Database Architecture", "DBA", "easy",
    "डेटाबेस का समग्र प्रबंधन और नियंत्रण करने वाला व्यक्ति कौन होता है?",
    "Who is responsible for the overall management and control of a database?",
    ["प्रोग्रामर", "DBA (Database Administrator)", "एंड यूज़र", "ऑपरेटर"],
    1,
    "DBA (Database Administrator) डेटाबेस के डिज़ाइन, सुरक्षा, बैकअप और प्रदर्शन का समग्र प्रबंधन करता है।",
    "DBA = Database Administrator, the controller.",
    ["Programmer", "DBA (Database Administrator)", "End user", "Operator"]);

  b("Paper-II", "Database Management System", "Database Design", "ER Model Entity", "easy",
    "ER मॉडल में आयत (rectangle) किसे दर्शाता है?",
    "In the ER model, what does a rectangle represent?",
    ["एट्रिब्यूट (Attribute)", "एंटिटी (Entity)", "रिलेशनशिप (Relationship)", "की (Key)"],
    1,
    "ER डायग्राम में आयत एंटिटी (Entity) को, दीर्घवृत्त एट्रिब्यूट को और डायमंड रिलेशनशिप को दर्शाता है।",
    "Rectangle = Entity, Ellipse = Attribute, Diamond = Relationship.",
    ["Attribute", "Entity", "Relationship", "Key"]);

  b("Paper-II", "Database Management System", "Database Design", "ER Model Attribute", "easy",
    "ER डायग्राम में दीर्घवृत्त (ellipse/oval) किसे दर्शाता है?",
    "In an ER diagram, what does an ellipse (oval) represent?",
    ["एंटिटी", "एट्रिब्यूट (Attribute)", "रिलेशनशिप", "कार्डिनैलिटी"],
    1,
    "दीर्घवृत्त (ellipse) एट्रिब्यूट को दर्शाता है, जो किसी एंटिटी की विशेषता होती है।",
    "Ellipse = Attribute.",
    ["Entity", "Attribute", "Relationship", "Cardinality"]);

  b("Paper-II", "Database Management System", "Database Design", "ER Model Relationship", "medium",
    "ER डायग्राम में रिलेशनशिप को दर्शाने के लिए किस आकृति का उपयोग किया जाता है?",
    "Which shape is used to represent a relationship in an ER diagram?",
    ["आयत (Rectangle)", "दीर्घवृत्त (Ellipse)", "डायमंड (Diamond)", "वृत्त (Circle)"],
    2,
    "डायमंड (rhombus) आकृति ER डायग्राम में एंटिटीज़ के बीच रिलेशनशिप को दर्शाती है।",
    "Diamond = Relationship.",
    ["Rectangle", "Ellipse", "Diamond", "Circle"]);

  b("Paper-II", "Database Management System", "Database Design", "Cardinality", "medium",
    "किसी एंटिटी के एक इंस्टेंस का दूसरी एंटिटी के इंस्टेंसेस से संबंध की संख्या क्या कहलाती है?",
    "What is the number of instances of one entity related to instances of another entity called?",
    ["कार्डिनैलिटी (Cardinality)", "नॉर्मलाइज़ेशन", "इंडेक्सिंग", "एग्रीगेशन"],
    0,
    "कार्डिनैलिटी रिलेशनशिप की मैपिंग (जैसे one-to-one, one-to-many, many-to-many) को दर्शाती है।",
    "Cardinality = mapping ratio of relationships.",
    ["Cardinality", "Normalization", "Indexing", "Aggregation"]);

  b("Paper-II", "Database Management System", "RDBMS", "Keys - Primary", "easy",
    "किसी टेबल में प्रत्येक रिकॉर्ड की विशिष्ट पहचान करने वाली की क्या कहलाती है?",
    "Which key uniquely identifies each record in a table?",
    ["फ़ॉरेन की (Foreign key)", "प्राइमरी की (Primary key)", "अल्टरनेट की", "सुपर की"],
    1,
    "प्राइमरी की प्रत्येक रिकॉर्ड की विशिष्ट पहचान करती है और इसमें NULL मान नहीं हो सकता।",
    "Primary key = unique + not NULL.",
    ["Foreign key", "Primary key", "Alternate key", "Super key"]);

  b("Paper-II", "Database Management System", "RDBMS", "Keys - Foreign", "medium",
    "एक टेबल का वह एट्रिब्यूट जो दूसरी टेबल की प्राइमरी की को संदर्भित करता है, क्या कहलाता है?",
    "An attribute in one table that refers to the primary key of another table is called?",
    ["कैंडिडेट की", "फ़ॉरेन की (Foreign key)", "सुपर की", "प्राइमरी की"],
    1,
    "फ़ॉरेन की दो टेबलों के बीच संबंध स्थापित करती है और referential integrity बनाए रखती है।",
    "Foreign key links two tables.",
    ["Candidate key", "Foreign key", "Super key", "Primary key"]);

  b("Paper-II", "Database Management System", "RDBMS", "Keys - Candidate", "medium",
    "प्राइमरी की बनने के योग्य सभी विशिष्ट की-संयोजनों को सामूहिक रूप से क्या कहते हैं?",
    "The set of all keys eligible to become the primary key are collectively called?",
    ["सुपर की", "कैंडिडेट की (Candidate keys)", "फ़ॉरेन की", "कम्पोज़िट की"],
    1,
    "कैंडिडेट की वे न्यूनतम सुपर की होती हैं जो रिकॉर्ड को विशिष्ट रूप से पहचान सकती हैं; इनमें से एक को प्राइमरी की चुना जाता है।",
    "Candidate keys → one chosen as primary.",
    ["Super key", "Candidate keys", "Foreign key", "Composite key"]);

  b("Paper-II", "Database Management System", "RDBMS", "Keys - Alternate", "hard",
    "कैंडिडेट की में से जिन्हें प्राइमरी की नहीं चुना गया, वे क्या कहलाती हैं?",
    "The candidate keys that are not selected as the primary key are called?",
    ["सुपर की", "अल्टरनेट की (Alternate keys)", "फ़ॉरेन की", "प्राइमरी की"],
    1,
    "प्राइमरी की के अतिरिक्त बची हुई कैंडिडेट की अल्टरनेट की (secondary keys) कहलाती हैं।",
    "Alternate key = candidate key not chosen as primary.",
    ["Super key", "Alternate keys", "Foreign key", "Primary key"]);

  b("Paper-II", "Database Management System", "Database Design", "Normalization 1NF", "medium",
    "1NF (First Normal Form) की मुख्य आवश्यकता क्या है?",
    "What is the main requirement of 1NF (First Normal Form)?",
    ["प्रत्येक सेल में एकल (atomic) मान हो", "आंशिक निर्भरता हटाना", "ट्रांज़िटिव निर्भरता हटाना", "एकाधिक प्राइमरी की"],
    0,
    "1NF में प्रत्येक एट्रिब्यूट का मान परमाण्विक (atomic/single-valued) होना चाहिए, अर्थात दोहराव समूह (repeating groups) नहीं।",
    "1NF = atomic values, no repeating groups.",
    ["Each cell holds an atomic (single) value", "Remove partial dependency", "Remove transitive dependency", "Multiple primary keys"]);

  b("Paper-II", "Database Management System", "Database Design", "Normalization 2NF", "hard",
    "2NF किस प्रकार की निर्भरता को हटाता है?",
    "Which type of dependency does 2NF remove?",
    ["ट्रांज़िटिव निर्भरता", "आंशिक निर्भरता (Partial dependency)", "फंक्शनल निर्भरता", "मल्टीवैल्यूड निर्भरता"],
    1,
    "2NF, 1NF में होते हुए, non-key एट्रिब्यूट की प्राइमरी की पर आंशिक (partial) निर्भरता को हटाता है।",
    "2NF removes partial dependency.",
    ["Transitive dependency", "Partial dependency", "Functional dependency", "Multivalued dependency"]);

  b("Paper-II", "Database Management System", "Database Design", "Normalization 3NF", "hard",
    "3NF किस प्रकार की निर्भरता को हटाता है?",
    "Which type of dependency does 3NF remove?",
    ["आंशिक निर्भरता", "ट्रांज़िटिव निर्भरता (Transitive dependency)", "परमाण्विकता", "कार्डिनैलिटी"],
    1,
    "3NF, 2NF में होते हुए, non-key एट्रिब्यूट की ट्रांज़िटिव (transitive) निर्भरता को हटाता है।",
    "3NF removes transitive dependency.",
    ["Partial dependency", "Transitive dependency", "Atomicity", "Cardinality"]);

  b("Paper-II", "Database Management System", "SQL", "DDL Category", "medium",
    "SQL में CREATE, ALTER और DROP कमांड किस श्रेणी में आते हैं?",
    "In SQL, CREATE, ALTER and DROP commands belong to which category?",
    ["DML", "DDL", "DCL", "TCL"],
    1,
    "CREATE, ALTER, DROP, TRUNCATE डेटा परिभाषा भाषा (DDL - Data Definition Language) के अंतर्गत आते हैं।",
    "CREATE/ALTER/DROP/TRUNCATE = DDL.",
    ["DML", "DDL", "DCL", "TCL"]);

  b("Paper-II", "Database Management System", "Data Manipulation", "DML Category", "medium",
    "INSERT, UPDATE और DELETE कमांड किस श्रेणी में आते हैं?",
    "INSERT, UPDATE and DELETE commands belong to which category?",
    ["DDL", "DML", "DCL", "TCL"],
    1,
    "INSERT, UPDATE, DELETE (व MERGE) डेटा हेरफेर भाषा (DML - Data Manipulation Language) के अंतर्गत आते हैं। ध्यान दें: SELECT को DQL (Data Query Language) माना जाता है।",
    "INSERT/UPDATE/DELETE = DML; SELECT = DQL.",
    ["DDL", "DML", "DCL", "TCL"]);

  b("Paper-II", "Database Management System", "SQL", "DCL Category", "medium",
    "GRANT और REVOKE कमांड SQL की किस श्रेणी से संबंधित हैं?",
    "GRANT and REVOKE commands belong to which SQL category?",
    ["DDL", "DML", "DCL (Data Control Language)", "TCL"],
    2,
    "GRANT और REVOKE अनुमतियाँ (privileges) देने/वापस लेने के लिए DCL के अंतर्गत आते हैं।",
    "GRANT/REVOKE = DCL.",
    ["DDL", "DML", "DCL (Data Control Language)", "TCL"]);

  b("Paper-II", "Database Management System", "SQL", "TCL Category", "medium",
    "COMMIT और ROLLBACK कमांड किस श्रेणी में आते हैं?",
    "COMMIT and ROLLBACK commands belong to which category?",
    ["DDL", "DML", "DCL", "TCL (Transaction Control Language)"],
    3,
    "COMMIT, ROLLBACK, SAVEPOINT ट्रांज़ैक्शन नियंत्रण भाषा (TCL) के अंतर्गत आते हैं।",
    "COMMIT/ROLLBACK/SAVEPOINT = TCL.",
    ["DDL", "DML", "DCL", "TCL (Transaction Control Language)"]);

  b("Paper-II", "Database Management System", "SQL", "Aggregate Functions", "easy",
    "निम्न में से कौन-सा SQL एग्रीगेट फ़ंक्शन नहीं है?",
    "Which of the following is NOT an SQL aggregate function?",
    ["SUM", "AVG", "COUNT", "UPDATE"],
    3,
    "SUM, AVG, COUNT, MAX, MIN एग्रीगेट फ़ंक्शन हैं; UPDATE एक DML कमांड है।",
    "UPDATE is DML, not an aggregate function.",
    ["SUM", "AVG", "COUNT", "UPDATE"]);

  b("Paper-II", "Database Management System", "SQL", "Aggregate MAX", "easy",
    "किसी कॉलम में सबसे बड़ा मान प्राप्त करने के लिए कौन-सा फ़ंक्शन प्रयोग होता है?",
    "Which function is used to get the largest value in a column?",
    ["MIN()", "MAX()", "SUM()", "COUNT()"],
    1,
    "MAX() फ़ंक्शन किसी कॉलम का अधिकतम मान लौटाता है; MIN() न्यूनतम मान।",
    "MAX = highest, MIN = lowest.",
    ["MIN()", "MAX()", "SUM()", "COUNT()"]);

  b("Paper-II", "Database Management System", "Data Manipulation", "Relational Algebra Unary", "hard",
    "रिलेशनल अलजेब्रा में निम्न में से कौन-सा एकल (unary) ऑपरेटर है?",
    "Which of the following is a unary operator in relational algebra?",
    ["Union (∪)", "Cartesian product (×)", "Select (σ)", "Intersection (∩)"],
    2,
    "Select (σ) और Project (π) एकल (unary) ऑपरेटर हैं क्योंकि वे एक ही रिलेशन पर कार्य करते हैं; Union, Cartesian आदि binary हैं।",
    "Select(σ) & Project(π) = unary; Union/Cartesian = binary.",
    ["Union (∪)", "Cartesian product (×)", "Select (σ)", "Intersection (∩)"]);

  b("Paper-II", "Database Management System", "Data Manipulation", "Relational Algebra Project", "hard",
    "रिलेशनल अलजेब्रा में विशिष्ट कॉलम (एट्रिब्यूट) चुनने वाला ऑपरेटर कौन-सा है?",
    "Which relational algebra operator selects specific columns (attributes)?",
    ["Select (σ)", "Project (π)", "Join (⋈)", "Union (∪)"],
    1,
    "Project (π) ऑपरेटर निर्दिष्ट कॉलम चुनता है, जबकि Select (σ) पंक्तियाँ (rows) चुनता है।",
    "Project(π) = columns; Select(σ) = rows.",
    ["Select (σ)", "Project (π)", "Join (⋈)", "Union (∪)"]);

  b("Paper-II", "Database Management System", "Database Overview", "ACID Properties", "medium",
    "ट्रांज़ैक्शन के ACID गुणों में 'A' का क्या अर्थ है?",
    "In the ACID properties of a transaction, what does 'A' stand for?",
    ["Availability", "Atomicity", "Accuracy", "Authentication"],
    1,
    "ACID = Atomicity, Consistency, Isolation, Durability. Atomicity का अर्थ है ट्रांज़ैक्शन पूर्ण रूप से हो या बिल्कुल न हो।",
    "ACID → Atomicity, Consistency, Isolation, Durability.",
    ["Availability", "Atomicity", "Accuracy", "Authentication"]);

  b("Paper-II", "Database Management System", "Database Overview", "Indexing", "medium",
    "डेटाबेस में डेटा पुनःप्राप्ति (retrieval) की गति बढ़ाने के लिए किसका उपयोग होता है?",
    "What is used to speed up data retrieval in a database?",
    ["Normalization", "Index", "Trigger", "View"],
    1,
    "इंडेक्स एक डेटा संरचना है जो टेबल में डेटा खोजने की गति बढ़ाती है, जैसे पुस्तक की अनुक्रमणिका।",
    "Index = faster search, like a book index.",
    ["Normalization", "Index", "Trigger", "View"]);

  b("Paper-II", "Database Management System", "NoSQL", "NoSQL Example", "medium",
    "निम्न में से कौन-सा एक NoSQL डेटाबेस है?",
    "Which of the following is a NoSQL database?",
    ["MySQL", "Oracle", "MongoDB", "SQL Server"],
    2,
    "MongoDB एक डॉक्यूमेंट-आधारित NoSQL डेटाबेस है; MySQL, Oracle और SQL Server रिलेशनल (SQL) डेटाबेस हैं।",
    "MongoDB = NoSQL; MySQL/Oracle/SQL Server = RDBMS.",
    ["MySQL", "Oracle", "MongoDB", "SQL Server"]);

  b("Paper-II", "Database Management System", "NoSQL", "Not NoSQL", "medium",
    "निम्न में से कौन-सा NoSQL डेटाबेस नहीं है?",
    "Which of the following is NOT a NoSQL database?",
    ["MongoDB", "CouchDB", "HBase", "Oracle"],
    3,
    "MongoDB, CouchDB और HBase NoSQL डेटाबेस हैं, जबकि Oracle एक रिलेशनल (RDBMS) डेटाबेस है।",
    "Oracle is RDBMS, not NoSQL.",
    ["MongoDB", "CouchDB", "HBase", "Oracle"]);

  b("Paper-II", "Database Management System", "NoSQL", "MongoDB Type", "hard",
    "MongoDB किस प्रकार का NoSQL डेटाबेस है?",
    "MongoDB is which type of NoSQL database?",
    ["की-वैल्यू (Key-value)", "डॉक्यूमेंट (Document)", "कॉलम (Column)", "ग्राफ़ (Graph)"],
    1,
    "MongoDB एक डॉक्यूमेंट-ओरिएंटेड NoSQL डेटाबेस है जो JSON/BSON डॉक्यूमेंट में डेटा संग्रहीत करता है।",
    "MongoDB = document store (JSON/BSON).",
    ["Key-value", "Document", "Column", "Graph"]);

  b("Paper-II", "Database Management System", "RDBMS", "RDBMS Example", "easy",
    "निम्न में से कौन-सा एक RDBMS है?",
    "Which of the following is an RDBMS?",
    ["MongoDB", "MySQL", "Redis", "Neo4j"],
    1,
    "MySQL एक रिलेशनल डेटाबेस प्रबंधन प्रणाली (RDBMS) है; MongoDB, Redis, Neo4j NoSQL डेटाबेस हैं।",
    "MySQL = RDBMS.",
    ["MongoDB", "MySQL", "Redis", "Neo4j"]);

  b("Paper-II", "Database Management System", "Selecting Right Database", "Row vs Column", "medium",
    "रिलेशनल टेबल में क्षैतिज (horizontal) पंक्ति को क्या कहते हैं?",
    "In a relational table, what is a horizontal row called?",
    ["एट्रिब्यूट (Attribute)", "ट्यूपल (Tuple/Record)", "डोमेन", "डिग्री"],
    1,
    "टेबल की प्रत्येक पंक्ति को ट्यूपल या रिकॉर्ड कहते हैं; कॉलम को एट्रिब्यूट कहते हैं।",
    "Row = Tuple/Record; Column = Attribute.",
    ["Attribute", "Tuple/Record", "Domain", "Degree"]);

  // ---------------- System Analysis and Design (~18) ----------------

  b("Paper-II", "System Analysis and Design", "Introduction", "SDLC Full Form", "easy",
    "SDLC का पूर्ण रूप क्या है?",
    "What is the full form of SDLC?",
    ["System Development Life Cycle", "Software Design Life Cycle", "System Design Logic Cycle", "Software Data Life Cycle"],
    0,
    "SDLC = Software/System Development Life Cycle, जो सॉफ़्टवेयर विकास के चरणों का ढाँचा है।",
    "SDLC = System/Software Development Life Cycle.",
    ["System Development Life Cycle", "Software Design Life Cycle", "System Design Logic Cycle", "Software Data Life Cycle"]);

  b("Paper-II", "System Analysis and Design", "Introduction", "SDLC First Phase", "medium",
    "SDLC का पहला चरण सामान्यतः कौन-सा होता है?",
    "Which is generally the first phase of SDLC?",
    ["Coding", "Testing", "Requirement gathering/analysis", "Maintenance"],
    2,
    "SDLC आवश्यकता एकत्रीकरण एवं विश्लेषण (requirement gathering/analysis) से आरंभ होता है।",
    "SDLC starts with requirement gathering.",
    ["Coding", "Testing", "Requirement gathering/analysis", "Maintenance"]);

  b("Paper-II", "System Analysis and Design", "Maintenance", "Last Phase", "medium",
    "SDLC का अंतिम चरण कौन-सा होता है?",
    "Which is the last phase of the SDLC?",
    ["Design", "Maintenance", "Coding", "Testing"],
    1,
    "SDLC का अंतिम चरण रखरखाव (Maintenance) है, जिसमें सिस्टम को अद्यतन एवं ठीक किया जाता है।",
    "Maintenance = last SDLC phase.",
    ["Design", "Maintenance", "Coding", "Testing"]);

  b("Paper-II", "System Analysis and Design", "Feasibility Analysis", "Feasibility Types", "medium",
    "निम्न में से कौन-सा व्यवहार्यता (feasibility) अध्ययन का प्रकार नहीं है?",
    "Which of the following is NOT a type of feasibility study?",
    ["तकनीकी (Technical)", "आर्थिक (Economic)", "परिचालन (Operational)", "भौगोलिक (Geographical)"],
    3,
    "व्यवहार्यता अध्ययन के मुख्य प्रकार तकनीकी, आर्थिक, परिचालन और शेड्यूल हैं; भौगोलिक इनमें शामिल नहीं है।",
    "Feasibility: Technical, Economic, Operational, Schedule.",
    ["Technical", "Economic", "Operational", "Geographical"]);

  b("Paper-II", "System Analysis and Design", "Feasibility Analysis", "Economic Feasibility", "medium",
    "लागत-लाभ विश्लेषण (cost-benefit analysis) किस व्यवहार्यता से संबंधित है?",
    "Cost-benefit analysis is related to which feasibility?",
    ["तकनीकी व्यवहार्यता", "आर्थिक व्यवहार्यता (Economic)", "परिचालन व्यवहार्यता", "कानूनी व्यवहार्यता"],
    1,
    "आर्थिक व्यवहार्यता में परियोजना की लागत और लाभ की तुलना (cost-benefit analysis) की जाती है।",
    "Cost-benefit = Economic feasibility.",
    ["Technical feasibility", "Economic feasibility", "Operational feasibility", "Legal feasibility"]);

  b("Paper-II", "System Analysis and Design", "Structured Analysis", "DFD Full Form", "easy",
    "DFD का पूर्ण रूप क्या है?",
    "What is the full form of DFD?",
    ["Data Flow Diagram", "Data Format Description", "Digital Flow Design", "Dynamic Flow Diagram"],
    0,
    "DFD = Data Flow Diagram, जो सिस्टम में डेटा के प्रवाह को दर्शाता है।",
    "DFD = Data Flow Diagram.",
    ["Data Flow Diagram", "Data Format Description", "Digital Flow Design", "Dynamic Flow Diagram"]);

  b("Paper-II", "System Analysis and Design", "Structured Analysis", "DFD Level 0", "hard",
    "पूरे सिस्टम को एकल प्रक्रिया के रूप में दर्शाने वाला DFD कौन-सा है?",
    "Which DFD represents the entire system as a single process?",
    ["Level 1 DFD", "Level 2 DFD", "Context diagram (Level 0)", "Level 3 DFD"],
    2,
    "Context diagram (Level 0 DFD) पूरे सिस्टम को एक ही प्रक्रिया और बाहरी एंटिटीज़ के रूप में दर्शाता है।",
    "Level 0 = Context diagram = whole system as one process.",
    ["Level 1 DFD", "Level 2 DFD", "Context diagram (Level 0)", "Level 3 DFD"]);

  b("Paper-II", "System Analysis and Design", "Structured Analysis", "Data Dictionary", "medium",
    "सिस्टम में प्रयुक्त डेटा तत्वों की परिभाषा और विवरण कहाँ संग्रहीत होता है?",
    "Where are the definitions and details of data elements used in a system stored?",
    ["Data dictionary", "Source code", "Flowchart", "Test plan"],
    0,
    "डेटा डिक्शनरी में सिस्टम के सभी डेटा तत्वों का नाम, प्रकार, विवरण आदि संग्रहीत रहता है।",
    "Data dictionary = metadata about data elements.",
    ["Data dictionary", "Source code", "Flowchart", "Test plan"]);

  b("Paper-II", "System Analysis and Design", "Other SDLC Approaches", "Waterfall Model", "medium",
    "कौन-सा सॉफ़्टवेयर मॉडल चरणों को अनुक्रमिक (sequential) रूप से पूरा करता है?",
    "Which software model completes phases in a sequential manner?",
    ["Spiral model", "Waterfall model", "Agile model", "Prototype model"],
    1,
    "वाटरफ़ॉल मॉडल में प्रत्येक चरण क्रमबद्ध रूप से पूरा होने के बाद अगला चरण शुरू होता है।",
    "Waterfall = sequential, phase-by-phase.",
    ["Spiral model", "Waterfall model", "Agile model", "Prototype model"]);

  b("Paper-II", "System Analysis and Design", "Other SDLC Approaches", "Spiral Model", "hard",
    "जोखिम विश्लेषण (risk analysis) पर आधारित सॉफ़्टवेयर विकास मॉडल कौन-सा है?",
    "Which software development model is based on risk analysis?",
    ["Waterfall model", "Spiral model", "Agile model", "V-model"],
    1,
    "स्पाइरल मॉडल जोखिम-चालित (risk-driven) होता है, जिसमें प्रत्येक चक्र में जोखिम विश्लेषण किया जाता है।",
    "Spiral = risk-driven model.",
    ["Waterfall model", "Spiral model", "Agile model", "V-model"]);

  b("Paper-II", "System Analysis and Design", "Other SDLC Approaches", "Agile", "medium",
    "किस मॉडल में सॉफ़्टवेयर को छोटे-छोटे इंक्रीमेंट (iteration) में विकसित किया जाता है?",
    "In which model is software developed in small increments (iterations)?",
    ["Waterfall model", "Agile model", "Big-bang model", "Linear model"],
    1,
    "एजाइल मॉडल में सॉफ़्टवेयर को छोटे इटरेशन/स्प्रिंट्स में विकसित किया जाता है, जिससे लचीलापन बना रहता है।",
    "Agile = iterative, incremental, flexible.",
    ["Waterfall model", "Agile model", "Big-bang model", "Linear model"]);

  b("Paper-II", "System Analysis and Design", "UML", "UML Full Form", "easy",
    "UML का पूर्ण रूप क्या है?",
    "What is the full form of UML?",
    ["Unified Modeling Language", "Universal Machine Language", "Unified Method Logic", "User Modeling Language"],
    0,
    "UML = Unified Modeling Language, जो सॉफ़्टवेयर सिस्टम को मॉडल करने की मानक भाषा है।",
    "UML = Unified Modeling Language.",
    ["Unified Modeling Language", "Universal Machine Language", "Unified Method Logic", "User Modeling Language"]);

  b("Paper-II", "System Analysis and Design", "UML", "Use Case Diagram", "medium",
    "उपयोगकर्ता और सिस्टम के बीच अंतःक्रिया (interaction) को दर्शाने वाला UML डायग्राम कौन-सा है?",
    "Which UML diagram shows the interaction between the user and the system?",
    ["Class diagram", "Use case diagram", "Sequence diagram", "Activity diagram"],
    1,
    "Use case diagram अभिनेताओं (actors) और सिस्टम के फंक्शनल इंटरैक्शन को दर्शाता है।",
    "Use case diagram = actor–system interaction.",
    ["Class diagram", "Use case diagram", "Sequence diagram", "Activity diagram"]);

  b("Paper-II", "System Analysis and Design", "UML", "Class Diagram", "medium",
    "सिस्टम की क्लासेस, एट्रिब्यूट्स और उनके संबंधों को कौन-सा UML डायग्राम दर्शाता है?",
    "Which UML diagram shows the classes, attributes and their relationships?",
    ["Use case diagram", "Class diagram", "Activity diagram", "State diagram"],
    1,
    "Class diagram सिस्टम की संरचना — क्लासेस, एट्रिब्यूट्स, मेथड्स और उनके संबंध — दर्शाता है।",
    "Class diagram = structure (classes & relationships).",
    ["Use case diagram", "Class diagram", "Activity diagram", "State diagram"]);

  b("Paper-II", "System Analysis and Design", "Testing", "Unit Testing", "medium",
    "किसी प्रोग्राम के व्यक्तिगत मॉड्यूल/इकाई का परीक्षण क्या कहलाता है?",
    "Testing of an individual module/unit of a program is called?",
    ["Integration testing", "Unit testing", "System testing", "Acceptance testing"],
    1,
    "यूनिट टेस्टिंग में प्रोग्राम की सबसे छोटी इकाई (module) का अलग-अलग परीक्षण किया जाता है।",
    "Unit testing = single module tested alone.",
    ["Integration testing", "Unit testing", "System testing", "Acceptance testing"]);

  b("Paper-II", "System Analysis and Design", "Testing", "Black Box Testing", "hard",
    "जिस परीक्षण में आंतरिक कोड संरचना जाने बिना केवल इनपुट-आउटपुट जाँचा जाता है, वह क्या कहलाता है?",
    "The testing that checks only input-output without knowing internal code structure is called?",
    ["White-box testing", "Black-box testing", "Unit testing", "Gray-box testing"],
    1,
    "ब्लैक-बॉक्स टेस्टिंग में आंतरिक कोड को अनदेखा कर केवल कार्यक्षमता (input/output) परखी जाती है।",
    "Black-box = functionality only; White-box = internal code.",
    ["White-box testing", "Black-box testing", "Unit testing", "Gray-box testing"]);

  b("Paper-II", "System Analysis and Design", "Testing", "Acceptance Testing", "medium",
    "ग्राहक/उपयोगकर्ता द्वारा सिस्टम स्वीकार करने से पहले किया जाने वाला परीक्षण कौन-सा है?",
    "Which testing is done by the customer/user before accepting the system?",
    ["Unit testing", "Integration testing", "Acceptance testing", "Regression testing"],
    2,
    "एक्सेप्टेंस टेस्टिंग में ग्राहक यह सत्यापित करता है कि सिस्टम आवश्यकताओं को पूरा करता है या नहीं।",
    "Acceptance testing = user validates requirements.",
    ["Unit testing", "Integration testing", "Acceptance testing", "Regression testing"]);

  b("Paper-II", "System Analysis and Design", "Structured Design", "Coupling and Cohesion", "hard",
    "अच्छे सॉफ़्टवेयर डिज़ाइन में क्या वांछनीय है?",
    "What is desirable in a good software design?",
    ["उच्च कपलिंग, निम्न कोहेज़न", "निम्न कपलिंग, उच्च कोहेज़न", "उच्च कपलिंग, उच्च कोहेज़न", "निम्न कपलिंग, निम्न कोहेज़न"],
    1,
    "अच्छे डिज़ाइन में मॉड्यूल के बीच निम्न कपलिंग (low coupling) और मॉड्यूल के भीतर उच्च कोहेज़न (high cohesion) होना चाहिए।",
    "Good design = Low coupling + High cohesion.",
    ["High coupling, low cohesion", "Low coupling, high cohesion", "High coupling, high cohesion", "Low coupling, low cohesion"]);

  // ---------------- Internet of Things and Applications (~20) ----------------

  b("Paper-II", "Internet of Things and Applications", "IoT", "IoT Full Form", "easy",
    "IoT का पूर्ण रूप क्या है?",
    "What is the full form of IoT?",
    ["Internet of Things", "Internet of Technology", "Internal Object Transfer", "Internet of Tools"],
    0,
    "IoT = Internet of Things, अर्थात इंटरनेट से जुड़े भौतिक उपकरणों का नेटवर्क।",
    "IoT = Internet of Things.",
    ["Internet of Things", "Internet of Technology", "Internal Object Transfer", "Internet of Tools"]);

  b("Paper-II", "Internet of Things and Applications", "IoT", "IoT Sensor", "medium",
    "IoT उपकरणों में भौतिक राशियों (जैसे तापमान) को मापने के लिए किसका उपयोग होता है?",
    "In IoT devices, what is used to measure physical quantities (like temperature)?",
    ["Actuator", "Sensor", "Router", "Modem"],
    1,
    "सेंसर भौतिक राशियों (तापमान, प्रकाश, गति आदि) को मापकर डेटा में बदलते हैं; actuator क्रिया करता है।",
    "Sensor senses; Actuator acts.",
    ["Actuator", "Sensor", "Router", "Modem"]);

  b("Paper-II", "Internet of Things and Applications", "IoT", "IoT Actuator", "medium",
    "IoT सिस्टम में भौतिक क्रिया (जैसे मोटर चालू करना) करने वाला घटक कौन-सा है?",
    "Which component performs physical action (like turning a motor) in an IoT system?",
    ["Sensor", "Actuator", "Gateway", "Server"],
    1,
    "एक्चुएटर नियंत्रक से प्राप्त संकेत के आधार पर भौतिक क्रिया करता है, जैसे मोटर या वाल्व चलाना।",
    "Actuator = performs the physical action.",
    ["Sensor", "Actuator", "Gateway", "Server"]);

  b("Paper-II", "Internet of Things and Applications", "Internet Technology", "WWW Full Form", "easy",
    "WWW का पूर्ण रूप क्या है?",
    "What is the full form of WWW?",
    ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"],
    0,
    "WWW = World Wide Web, इंटरनेट पर परस्पर जुड़े हाइपरटेक्स्ट दस्तावेज़ों की प्रणाली।",
    "WWW = World Wide Web.",
    ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"]);

  b("Paper-II", "Internet of Things and Applications", "Internet Protocol", "HTTP Full Form", "easy",
    "HTTP का पूर्ण रूप क्या है?",
    "What is the full form of HTTP?",
    ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transmission Program", "Host Transfer Text Protocol"],
    0,
    "HTTP = HyperText Transfer Protocol, वेब पर डेटा स्थानांतरण का प्रोटोकॉल।",
    "HTTP = HyperText Transfer Protocol.",
    ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transmission Program", "Host Transfer Text Protocol"]);

  b("Paper-II", "Internet of Things and Applications", "Internet Protocol", "HTTPS Security", "medium",
    "HTTPS, HTTP से किस प्रकार भिन्न है?",
    "How does HTTPS differ from HTTP?",
    ["यह तेज़ होता है", "यह एन्क्रिप्शन (SSL/TLS) द्वारा सुरक्षित होता है", "इसमें कोई पोर्ट नहीं होता", "यह केवल ईमेल के लिए है"],
    1,
    "HTTPS में 'S' का अर्थ Secure है; यह SSL/TLS एन्क्रिप्शन द्वारा डेटा को सुरक्षित करता है।",
    "HTTPS = HTTP + SSL/TLS encryption (secure).",
    ["It is faster", "It is secured with encryption (SSL/TLS)", "It has no port", "It is only for email"]);

  b("Paper-II", "Internet of Things and Applications", "Internet Technology", "URL Full Form", "easy",
    "URL का पूर्ण रूप क्या है?",
    "What is the full form of URL?",
    ["Uniform Resource Locator", "Universal Resource Link", "Uniform Reference Locator", "United Resource Locator"],
    0,
    "URL = Uniform Resource Locator, जो वेब पर किसी संसाधन का पता (address) होता है।",
    "URL = Uniform Resource Locator.",
    ["Uniform Resource Locator", "Universal Resource Link", "Uniform Reference Locator", "United Resource Locator"]);

  b("Paper-II", "Internet of Things and Applications", "Browsers", "Web Browser Example", "easy",
    "निम्न में से कौन-सा एक वेब ब्राउज़र है?",
    "Which of the following is a web browser?",
    ["Google Chrome", "Google", "Bing", "Yahoo"],
    0,
    "Google Chrome एक वेब ब्राउज़र है; Google, Bing और Yahoo सर्च इंजन हैं।",
    "Chrome = browser; Google/Bing/Yahoo = search engines.",
    ["Google Chrome", "Google", "Bing", "Yahoo"]);

  b("Paper-II", "Internet of Things and Applications", "Search Engines", "Search Engine Example", "easy",
    "निम्न में से कौन-सा एक सर्च इंजन है?",
    "Which of the following is a search engine?",
    ["Firefox", "Google", "Edge", "Safari"],
    1,
    "Google एक सर्च इंजन है; Firefox, Edge और Safari वेब ब्राउज़र हैं।",
    "Google = search engine; others = browsers.",
    ["Firefox", "Google", "Edge", "Safari"]);

  b("Paper-II", "Internet of Things and Applications", "HTML", "HTML Full Form", "easy",
    "HTML का पूर्ण रूप क्या है?",
    "What is the full form of HTML?",
    ["HyperText Markup Language", "High Text Markup Language", "HyperText Machine Language", "Home Tool Markup Language"],
    0,
    "HTML = HyperText Markup Language, वेब पेज बनाने की मानक मार्कअप भाषा।",
    "HTML = HyperText Markup Language.",
    ["HyperText Markup Language", "High Text Markup Language", "HyperText Machine Language", "Home Tool Markup Language"]);

  b("Paper-II", "Internet of Things and Applications", "HTML", "HTML Root Tag", "medium",
    "किसी HTML दस्तावेज़ का मूल (root) टैग कौन-सा है?",
    "Which is the root tag of an HTML document?",
    ["<body>", "<head>", "<html>", "<title>"],
    2,
    "<html> टैग HTML दस्तावेज़ का मूल टैग है, जिसके भीतर <head> और <body> आते हैं।",
    "<html> = root; contains <head> and <body>.",
    ["<body>", "<head>", "<html>", "<title>"]);

  b("Paper-II", "Internet of Things and Applications", "HTML", "HTML Case Sensitivity", "medium",
    "HTML टैग्स के संदर्भ में कौन-सा कथन सही है?",
    "Which statement is correct regarding HTML tags?",
    ["HTML केस-सेंसिटिव है", "HTML केस-सेंसिटिव नहीं है", "HTML में टैग्स आवश्यक नहीं हैं", "HTML केवल बड़े अक्षरों में लिखा जाता है"],
    1,
    "HTML केस-सेंसिटिव नहीं है, अर्थात <BODY> और <body> समान माने जाते हैं; जबकि XML केस-सेंसिटिव होता है।",
    "HTML = NOT case-sensitive; XML = case-sensitive.",
    ["HTML is case-sensitive", "HTML is not case-sensitive", "HTML does not need tags", "HTML is written only in uppercase"]);

  b("Paper-II", "Internet of Things and Applications", "HTML", "Body Tag", "easy",
    "वेब पेज पर दिखाई देने वाली सामग्री किस टैग के भीतर लिखी जाती है?",
    "The visible content of a web page is written inside which tag?",
    ["<head>", "<body>", "<title>", "<meta>"],
    1,
    "<body> टैग के भीतर वह सारी सामग्री होती है जो ब्राउज़र में उपयोगकर्ता को दिखती है।",
    "<body> = visible page content.",
    ["<head>", "<body>", "<title>", "<meta>"]);

  b("Paper-II", "Internet of Things and Applications", "XML", "XML Purpose", "medium",
    "XML का मुख्य उद्देश्य क्या है?",
    "What is the main purpose of XML?",
    ["डेटा प्रदर्शित करना (formatting)", "डेटा का वर्णन एवं संग्रहण/परिवहन", "प्रोग्राम कंपाइल करना", "इमेज संपादन"],
    1,
    "XML (eXtensible Markup Language) का उद्देश्य डेटा का वर्णन, संग्रहण और परिवहन (transport) करना है, न कि प्रदर्शन।",
    "XML describes/transports data; HTML displays it.",
    ["To display/format data", "To describe and store/transport data", "To compile programs", "To edit images"]);

  b("Paper-II", "Internet of Things and Applications", "XML", "XML vs HTML Tags", "hard",
    "XML और HTML के बीच मुख्य अंतर क्या है?",
    "What is the main difference between XML and HTML?",
    ["XML में टैग्स पूर्वनिर्धारित हैं", "XML में टैग्स उपयोगकर्ता-परिभाषित होते हैं", "HTML केस-सेंसिटिव है", "XML केवल इमेज के लिए है"],
    1,
    "XML में टैग्स उपयोगकर्ता-परिभाषित (user-defined) होते हैं, जबकि HTML में टैग्स पूर्वनिर्धारित (predefined) होते हैं।",
    "XML = user-defined tags; HTML = predefined tags.",
    ["XML has predefined tags", "XML has user-defined tags", "HTML is case-sensitive", "XML is only for images"]);

  b("Paper-II", "Internet of Things and Applications", "Scripts", "CSS Full Form", "easy",
    "CSS का पूर्ण रूप क्या है?",
    "What is the full form of CSS?",
    ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
    0,
    "CSS = Cascading Style Sheets, जो वेब पेज के प्रस्तुतिकरण (रंग, फ़ॉन्ट, लेआउट) को नियंत्रित करता है।",
    "CSS = Cascading Style Sheets (styling).",
    ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"]);

  b("Paper-II", "Internet of Things and Applications", "Scripts", "JavaScript Purpose", "medium",
    "वेब पेज में इंटरैक्टिविटी जोड़ने के लिए सामान्यतः किसका उपयोग होता है?",
    "What is commonly used to add interactivity to a web page?",
    ["HTML", "CSS", "JavaScript", "SQL"],
    2,
    "JavaScript एक क्लाइंट-साइड स्क्रिप्टिंग भाषा है जो वेब पेज को गतिशील (interactive) बनाती है।",
    "JavaScript = interactivity/behavior of web pages.",
    ["HTML", "CSS", "JavaScript", "SQL"]);

  b("Paper-II", "Internet of Things and Applications", "E-Commerce", "B2C", "medium",
    "जब कोई कंपनी सीधे उपभोक्ता को ऑनलाइन उत्पाद बेचती है, तो यह किस प्रकार का ई-कॉमर्स है?",
    "When a company sells products online directly to consumers, it is which type of e-commerce?",
    ["B2B", "B2C", "C2C", "C2B"],
    1,
    "B2C (Business-to-Consumer) में व्यवसाय सीधे उपभोक्ता को बेचता है, जैसे Amazon, Flipkart।",
    "B2C = Business to Consumer.",
    ["B2B", "B2C", "C2C", "C2B"]);

  b("Paper-II", "Internet of Things and Applications", "E-Commerce", "C2C", "hard",
    "OLX जैसी वेबसाइट जहाँ एक उपभोक्ता दूसरे उपभोक्ता को बेचता है, किस प्रकार का ई-कॉमर्स है?",
    "A website like OLX where one consumer sells to another consumer is which type of e-commerce?",
    ["B2B", "B2C", "C2C", "B2G"],
    2,
    "C2C (Consumer-to-Consumer) में एक उपभोक्ता दूसरे उपभोक्ता को उत्पाद बेचता है, जैसे OLX, eBay।",
    "C2C = Consumer to Consumer (OLX, eBay).",
    ["B2B", "B2C", "C2C", "B2G"]);

  b("Paper-II", "Internet of Things and Applications", "Internet Technology", "LAN Full Form", "easy",
    "LAN का पूर्ण रूप क्या है?",
    "What is the full form of LAN?",
    ["Local Area Network", "Large Area Network", "Long Access Node", "Local Access Network"],
    0,
    "LAN = Local Area Network, जो सीमित भौगोलिक क्षेत्र (जैसे भवन) में उपकरणों को जोड़ता है।",
    "LAN = Local Area Network (small area).",
    ["Local Area Network", "Large Area Network", "Long Access Node", "Local Access Network"]);

  b("Paper-II", "Internet of Things and Applications", "Internet Technology", "WAN Coverage", "medium",
    "बहुत बड़े भौगोलिक क्षेत्र (जैसे देश/विश्व) को कवर करने वाला नेटवर्क कौन-सा है?",
    "Which network covers a very large geographical area (like a country/world)?",
    ["LAN", "MAN", "WAN", "PAN"],
    2,
    "WAN (Wide Area Network) बहुत बड़े क्षेत्र को कवर करता है; इंटरनेट सबसे बड़ा WAN का उदाहरण है।",
    "WAN = largest coverage (e.g., Internet).",
    ["LAN", "MAN", "WAN", "PAN"]);

  b("Paper-II", "Internet of Things and Applications", "Video Conferencing", "Video Conf App", "medium",
    "निम्न में से कौन-सा मुख्यतः वीडियो कॉन्फ़्रेंसिंग के लिए उपयोग होता है?",
    "Which of the following is mainly used for video conferencing?",
    ["Zoom", "MySQL", "Photoshop", "Notepad"],
    0,
    "Zoom एक वीडियो कॉन्फ़्रेंसिंग एप्लिकेशन है जो ऑनलाइन ऑडियो-वीडियो मीटिंग की सुविधा देता है।",
    "Zoom = video conferencing tool.",
    ["Zoom", "MySQL", "Photoshop", "Notepad"]);

  b("Paper-II", "Internet of Things and Applications", "Multimedia and Graphics", "Multimedia Elements", "medium",
    "निम्न में से कौन-सा मल्टीमीडिया का तत्व नहीं है?",
    "Which of the following is NOT an element of multimedia?",
    ["टेक्स्ट (Text)", "ऑडियो (Audio)", "वीडियो (Video)", "कंपाइलर (Compiler)"],
    3,
    "मल्टीमीडिया के तत्व टेक्स्ट, ग्राफ़िक्स, ऑडियो, वीडियो और एनिमेशन हैं; कंपाइलर इनमें शामिल नहीं है।",
    "Multimedia = text, graphics, audio, video, animation.",
    ["Text", "Audio", "Video", "Compiler"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
