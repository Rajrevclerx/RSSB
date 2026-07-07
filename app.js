const STORAGE_KEY = "rssb_bci_2026_state";
const IMPORT_KEY = "rssb_bci_2026_imported_questions";

const syllabus = [
  {
    paper: "Paper-I",
    subjects: [
      ["Rajasthan Art & Culture", ["Folk dances", "Folk music", "Festivals", "Paintings", "Architecture", "Saints and Lok Devta", "Handicrafts"]],
      ["Rajasthan History", ["Ancient history", "Medieval history", "Modern history", "Freedom movement", "Major dynasties", "Important battles"]],
      ["Rajasthan Geography", ["Physical features", "Climate", "Rivers and lakes", "Soil", "Minerals", "Agriculture", "Wildlife"]],
      ["General Science", ["Physics basics", "Chemistry basics", "Biology basics", "Environment", "Health and nutrition"]],
      ["Current Affairs", ["Rajasthan schemes", "National current affairs", "Awards", "Sports", "Science and technology"]],
      ["General Ability", ["Logical Reasoning", "Analytical Ability", "Decision Making", "Problem Solving", "General Mental Ability", "Basic Numeracy", "Data Interpretation", "Data Sufficiency"]]
    ]
  },
  {
    paper: "Paper-II",
    subjects: [
      ["Pedagogy", ["Teaching Learning Process", "Teaching Methods", "Classroom Management", "Learning Theories", "Evaluation", "Educational Technology", "Communication Skills", "Child Psychology", "Motivation", "Teaching Ethics", "Teaching Aptitude", "ICT in Education"]],
      ["Mental Ability", ["Decision Making", "Problem Solving", "Data Interpretation", "Data Sufficiency", "Logical Reasoning", "Analytical Ability", "Major Developments in IT"]],
      ["Fundamentals of Computer", ["Computer Basics", "Input Devices", "Output Devices", "Scanner", "Digital versus Analog", "Number System", "Decimal", "Binary", "Hexadecimal", "Data Processing", "File Concepts", "File Types"]],
      ["Programming Fundamentals", ["C", "C++", "Java", "Python", "DotNet", "Artificial Intelligence", "Machine Learning", "Blockchain", "Variables", "Data Types", "Operators", "Control Statements", "Loops", "Arrays", "Functions", "OOP Basics", "IDE", "Programming Techniques"]],
      ["Data Processing", ["MS Word", "MS Excel", "MS PowerPoint", "MS Access", "Presentation Software"]],
      ["Data Structures and Algorithms", ["Algorithms", "Abstract Data Types", "Arrays", "Linked List", "Stack", "Queue", "Binary Tree", "Binary Search Tree", "Graph", "Searching", "Sorting", "Symbol Table", "Data Structure using C", "Data Structure using C++"]],
      ["Computer Organization and Operating System", ["Basic Structure of Computers", "Computer Arithmetic", "CPU and Instructions", "Memory Organization", "I/O Organization", "Operating System Overview", "Process Management", "File Management"]],
      ["Communication and Network Concepts", ["Introduction to Networks", "Network Layers", "OSI Model", "TCP/IP", "Networking Devices", "Mobile Communication", "LAN", "WAN"]],
      ["Network Security", ["Virus", "Malware", "Firewall", "Backup", "Restore", "Security", "Ethical Hacking", "LAN and WAN Security"]],
      ["Database Management System", ["Database Overview", "Database Architecture", "RDBMS", "Database Design", "SQL", "Data Manipulation", "NoSQL", "Selecting Right Database"]],
      ["System Analysis and Design", ["Introduction", "Requirement Gathering", "Feasibility Analysis", "Structured Analysis", "Structured Design", "UML", "Testing", "Implementation", "Maintenance", "Other SDLC Approaches"]],
      ["Internet of Things and Applications", ["Internet Technology", "Internet Protocol", "IoT", "LAN", "MAN", "WAN", "Search Engines", "Online and Offline Messaging", "Browsers", "Web Publishing", "HTML", "XML", "Scripts", "Website Creation", "Website Maintenance", "HTML Interactivity", "Multimedia and Graphics", "Voice Mail", "Video Conferencing", "E-Commerce"]]
    ]
  }
];

const curatedQuestions = [
  q("P2-COMP-001", "Paper-II", "Fundamentals of Computer", "Number System", "Binary", "Easy", "Binary number system ka base kya hota hai?", ["2", "8", "10", "16"], 0, "Binary system sirf 0 aur 1 digits use karta hai, isliye base 2 hota hai.", "Bi ka matlab two yaad rakho.", 25),
  q("P2-DSA-001", "Paper-II", "Data Structures and Algorithms", "Stack", "Stack", "Easy", "Stack kis principle par kaam karta hai?", ["FIFO", "LIFO", "Random", "Priority only"], 1, "Stack mein last inserted element sabse pehle remove hota hai. Isse LIFO kehte hain.", "Plate stack example: last plate first out.", 25),
  q("P1-GA-001", "Paper-I", "General Ability", "Data Interpretation", "Charts", "Medium", "Bar chart ka use sabse adhik kisliye hota hai?", ["Text formatting", "Categories ki comparison", "Virus scan", "Code compile"], 1, "Bar chart alag-alag categories ke values compare karne ke liye suitable hota hai.", "Bars side-by-side comparison dikhate hain.", 35),
  q("P1-RAJ-001", "Paper-I", "Rajasthan Geography", "Climate", "Climate", "Easy", "Rajasthan ka adhikansh bhaag kis prakriti ki jalvayu se prabhavit hai?", ["Arid aur semi-arid", "Tundra", "Equatorial", "Polar"], 0, "Rajasthan ka bada hissa arid aur semi-arid climatic conditions mein aata hai.", "Thar desert ko yaad rakho.", 30)
];

const importantQuestions = [
  bq("IMP-2022-P2-001", "Paper-II", "Fundamentals of Computer", "Number System", "Binary to Decimal", "Medium", "Binary number 10110 ka decimal equivalent kya hai?", "What is the decimal equivalent of binary number 10110?", ["22", "20", "24", "18"], ["22", "20", "24", "18"], 0, "10110 = 16 + 0 + 4 + 2 + 0 = 22.", "Right se powers 1, 2, 4, 8, 16 lagao.", 45),
  bq("IMP-2022-P2-002", "Paper-II", "Fundamentals of Computer", "Number System", "Hexadecimal", "Medium", "Hexadecimal digit F ka decimal value kya hota hai?", "What is the decimal value of hexadecimal digit F?", ["10", "12", "15", "16"], ["10", "12", "15", "16"], 2, "Hexadecimal mein A=10, B=11, C=12, D=13, E=14, F=15.", "A se F tak 10 se 15.", 30),
  bq("IMP-2022-P2-003", "Paper-II", "Fundamentals of Computer", "Input Devices", "Scanner", "Easy", "Scanner kis type ka device hai?", "Scanner is which type of device?", ["Input device", "Output device", "Storage device", "Processing device"], ["Input device", "Output device", "Storage device", "Processing device"], 0, "Scanner hard copy/image ko computer-readable digital form mein input karta hai.", "Scanner data andar bhejta hai, isliye input.", 25),
  bq("IMP-2022-P2-004", "Paper-II", "Data Processing", "MS Excel", "Cell Reference", "Hard", "Excel formula mein A1 ko absolute banane ke liye kya use hota hai?", "What is used to make A1 an absolute reference in Excel formula?", ["$A$1", "A1", "A$1 only", "$A1 only"], ["$A$1", "A1", "A$1 only", "$A1 only"], 0, "Dollar sign row aur column dono ko lock karta hai, isliye $A$1 absolute reference hai.", "Dono taraf dollar = absolute.", 40),
  bq("IMP-2022-P2-005", "Paper-II", "Data Processing", "MS Word", "Mail Merge", "Medium", "MS Word mein Mail Merge ka main use kya hai?", "What is the main use of Mail Merge in MS Word?", ["Multiple personalized documents banana", "Image compress karna", "Virus remove karna", "Formula calculate karna"], ["Creating multiple personalized documents", "Compressing images", "Removing virus", "Calculating formulas"], 0, "Mail Merge ek template aur data source se letters, labels ya emails personalize karta hai.", "Same letter, different names = Mail Merge.", 35),
  bq("IMP-2022-P2-006", "Paper-II", "Programming Fundamentals", "C", "Pointers", "Hard", "C language mein pointer variable kya store karta hai?", "What does a pointer variable store in C language?", ["Value", "Address", "Keyword", "Operator"], ["Value", "Address", "Keyword", "Operator"], 1, "Pointer kisi doosre variable ka memory address store karta hai.", "Pointer points to address.", 35),
  bq("IMP-2022-P2-007", "Paper-II", "Programming Fundamentals", "OOP Basics", "Inheritance", "Medium", "OOP mein inheritance ka correct meaning kya hai?", "What is the correct meaning of inheritance in OOP?", ["Existing class se properties acquire karna", "Data hide karna only", "Object destroy karna", "Loop repeat karna"], ["Acquiring properties from an existing class", "Only hiding data", "Destroying object", "Repeating a loop"], 0, "Inheritance mein child/derived class parent/base class ke members use kar sakti hai.", "Parent-child relation yaad rakho.", 40),
  bq("IMP-2022-P2-008", "Paper-II", "Programming Fundamentals", "Python", "Data Types", "Medium", "Python mein list aur tuple ka key difference kya hai?", "What is the key difference between list and tuple in Python?", ["List mutable, tuple immutable", "List immutable, tuple mutable", "Dono same hain", "Tuple mein data store nahi hota"], ["List is mutable, tuple is immutable", "List is immutable, tuple is mutable", "Both are same", "Tuple cannot store data"], 0, "List ko change kiya ja sakta hai, tuple creation ke baad immutable hota hai.", "List flexible, tuple fixed.", 40),
  bq("IMP-2022-P2-009", "Paper-II", "Data Structures and Algorithms", "Queue", "Queue", "Easy", "Queue kis principle par kaam karta hai?", "Queue works on which principle?", ["LIFO", "FIFO", "FILO", "Random"], ["LIFO", "FIFO", "FILO", "Random"], 1, "Queue mein jo element pehle insert hota hai woh pehle delete hota hai.", "Line mein pehle aao, pehle jao.", 25),
  bq("IMP-2022-P2-010", "Paper-II", "Data Structures and Algorithms", "Sorting", "Bubble Sort", "Hard", "Bubble sort ka worst-case time complexity kya hota hai?", "What is the worst-case time complexity of bubble sort?", ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"], ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"], 3, "Bubble sort nested comparisons karta hai, worst case mein n(n-1)/2 comparisons hote hain.", "Nested loop dikhe to often O(n^2).", 40),
  bq("IMP-2022-P2-011", "Paper-II", "Computer Organization and Operating System", "CPU and Instructions", "Register", "Medium", "CPU ke andar sabse fast storage generally kya hota hai?", "What is generally the fastest storage inside CPU?", ["Hard disk", "RAM", "Register", "DVD"], ["Hard disk", "RAM", "Register", "DVD"], 2, "Registers CPU ke andar hote hain aur immediate processing ke liye fastest storage provide karte hain.", "CPU ke andar = register first.", 30),
  bq("IMP-2022-P2-012", "Paper-II", "Computer Organization and Operating System", "Process Management", "Deadlock", "Hard", "Deadlock ke liye kaunsi condition necessary conditions mein se ek hai?", "Which one is a necessary condition for deadlock?", ["Mutual exclusion", "HTML parsing", "Normalization", "Multiplexing"], ["Mutual exclusion", "HTML parsing", "Normalization", "Multiplexing"], 0, "Deadlock ki Coffman conditions mein mutual exclusion, hold and wait, no preemption, circular wait aate hain.", "Deadlock = Coffman conditions.", 45),
  bq("IMP-2022-P2-013", "Paper-II", "Communication and Network Concepts", "OSI Model", "Transport Layer", "Medium", "OSI model ki kaunsi layer end-to-end delivery se related hoti hai?", "Which OSI layer is related to end-to-end delivery?", ["Physical", "Data Link", "Transport", "Presentation"], ["Physical", "Data Link", "Transport", "Presentation"], 2, "Transport layer end-to-end process communication, segmentation aur reliability handle karti hai.", "End-to-end = Transport.", 35),
  bq("IMP-2022-P2-014", "Paper-II", "Communication and Network Concepts", "TCP/IP", "Protocols", "Medium", "TCP aur UDP mein main difference kya hai?", "What is the main difference between TCP and UDP?", ["TCP connection-oriented, UDP connectionless", "TCP connectionless, UDP connection-oriented", "Dono same", "UDP reliable hota hai, TCP nahi"], ["TCP is connection-oriented, UDP is connectionless", "TCP is connectionless, UDP is connection-oriented", "Both are same", "UDP is reliable, TCP is not"], 0, "TCP reliable connection-oriented protocol hai, UDP faster but connectionless hota hai.", "TCP call jaisa, UDP broadcast jaisa.", 40),
  bq("IMP-2022-P2-015", "Paper-II", "Network Security", "Malware", "Trojan Horse", "Medium", "Trojan horse malware ki khasiyat kya hoti hai?", "What is the characteristic of Trojan horse malware?", ["Useful software jaisa dikhkar harm karna", "Only email send karna", "Hardware heat karna", "Screen brightness badhana"], ["Appears useful but performs harmful actions", "Only sends email", "Heats hardware", "Increases screen brightness"], 0, "Trojan legitimate program jaisa appear karta hai par hidden malicious action karta hai.", "Trojan = disguised attack.", 35),
  bq("IMP-2022-P2-016", "Paper-II", "Database Management System", "Normalization", "Normal Forms", "Hard", "Database normalization ka primary objective kya hai?", "What is the primary objective of database normalization?", ["Redundancy aur anomalies kam karna", "Font size badhana", "Network speed badhana", "Virus scan karna"], ["Reducing redundancy and anomalies", "Increasing font size", "Increasing network speed", "Scanning virus"], 0, "Normalization data redundancy, insertion/update/delete anomalies ko reduce karta hai.", "Normalize = duplicate aur anomaly control.", 40),
  bq("IMP-2022-P2-017", "Paper-II", "Database Management System", "SQL", "DDL", "Medium", "SQL command CREATE kis category mein aata hai?", "SQL command CREATE belongs to which category?", ["DML", "DDL", "DCL", "TCL"], ["DML", "DDL", "DCL", "TCL"], 1, "CREATE, ALTER, DROP DDL commands hain jo database schema define/modify karte hain.", "Define structure = DDL.", 30),
  bq("IMP-2022-P2-018", "Paper-II", "System Analysis and Design", "SDLC", "Feasibility", "Medium", "Feasibility study ka main purpose kya hai?", "What is the main purpose of feasibility study?", ["System practical hai ya nahi check karna", "Coding complete karna", "Final exam lena", "Backup restore karna"], ["Checking whether the system is practical or not", "Completing coding", "Taking final exam", "Restoring backup"], 0, "Feasibility technical, economic, operational aspects se project viability check karti hai.", "Feasible = possible and practical.", 35),
  bq("IMP-2022-P2-019", "Paper-II", "Internet of Things and Applications", "IoT", "Sensors", "Medium", "IoT system mein sensor ka role kya hota hai?", "What is the role of a sensor in an IoT system?", ["Physical data collect karna", "Only webpage design karna", "SQL query run karna", "Password encrypt karna"], ["Collecting physical data", "Only designing webpage", "Running SQL query", "Encrypting password"], 0, "Sensors temperature, motion, humidity jaise real-world data collect karke IoT device ko input dete hain.", "Sensor senses environment.", 35),
  bq("IMP-2022-P2-020", "Paper-II", "Pedagogy", "Learning Theories", "Constructivism", "Hard", "Constructivism ke according teacher ka best role kya hota hai?", "According to constructivism, what is the best role of a teacher?", ["Facilitator", "Only dictator", "Only examiner", "Silent observer always"], ["Facilitator", "Only dictator", "Only examiner", "Always silent observer"], 0, "Constructivism mein learner apna knowledge actively construct karta hai; teacher facilitator hota hai.", "Constructivism = learner constructs, teacher facilitates.", 40)
];
function q(id, paper, subject, topic, subtopic, difficulty, question, options, answer, explanation, trick, time) {
  return { id, paper, subject, topic, subtopic, difficulty, question, options, answer, explanation, trick, time };
}
function bq(id, paper, subject, topic, subtopic, difficulty, questionHi, questionEn, optionsHi, optionsEn, answer, explanation, trick, time) {
  return {
    id,
    paper,
    subject,
    topic,
    subtopic,
    difficulty,
    question: `${questionHi}\n${questionEn}`,
    questionHi,
    questionEn,
    options: optionsHi.map((option, index) => `${option} / ${optionsEn[index]}`),
    optionsHi,
    optionsEn,
    answer,
    explanation,
    trick,
    time,
    sourceType: "2022 pattern inspired important"
  };
}

// Bahari question banks (data/*.js script tags se global set hote hain).
// Sabhi verified real questions hain - koi template junk nahi.
function externalBank() {
  const w = typeof window !== "undefined" ? window : {};
  return [
    ...(w.RSSB_GENERATED || []),
    ...(w.RSSB_BANK_P1 || []),
    ...(w.RSSB_BANK_P2 || []),
    ...(w.RSSB_BANK_EXTRA || []),
    ...(w.RSSB_BANK_2026H || [])
  ];
}

function buildQuestions() {
  return dedupe([...curatedQuestions, ...importantQuestions, ...externalBank(), ...loadImported()]);
}

let state = loadState();
let questions = buildQuestions();
let session = null;
let timerHandle = null;
let selectedOption = null;

const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));

document.addEventListener("DOMContentLoaded", init);

function init() {
  document.body.classList.toggle("dark", state.settings.theme === "dark");
  document.documentElement.style.fontSize = `${state.settings.fontSize}px`;
  bindNav();
  populateControls();
  renderDashboard();
  renderSyllabus();
  renderBank();
  renderAnalytics();
  bindEvents();
}

function bindNav() {
  $$(".nav-btn").forEach(btn => btn.addEventListener("click", () => showView(btn.dataset.view)));
}

function bindEvents() {
  $("#themeToggle").addEventListener("click", () => {
    state.settings.theme = state.settings.theme === "dark" ? "light" : "dark";
    saveState();
    document.body.classList.toggle("dark", state.settings.theme === "dark");
  });
  $("#quickMockBtn").addEventListener("click", () => startMock("Complete"));
  $("#startQuizBtn").addEventListener("click", startConfiguredQuiz);
  $("#finishQuizBtn").addEventListener("click", finishQuiz);
  $("#nextBtn").addEventListener("click", nextQuestion);
  $("#skipBtn").addEventListener("click", () => recordAnswer(null));
  $("#bookmarkBtn").addEventListener("click", toggleBookmark);
  $("#syllabusSearch").addEventListener("input", renderSyllabus);
  $("#bankSearch").addEventListener("input", renderBank);
  $("#bankPaper").addEventListener("change", renderBank);
  $("#bankDifficulty").addEventListener("change", renderBank);
  $("#importJson").addEventListener("change", importJson);
  $("#fontSize").addEventListener("input", e => {
    state.settings.fontSize = Number(e.target.value);
    document.documentElement.style.fontSize = `${state.settings.fontSize}px`;
    saveState();
  });
  $("#timerSetting").addEventListener("change", e => {
    state.settings.timer = e.target.checked;
    saveState();
  });
  $("#soundSetting").addEventListener("change", e => {
    state.settings.sound = e.target.checked;
    saveState();
  });
  $("#resetProgress").addEventListener("click", () => {
    if (!confirm("Progress reset karna hai?")) return;
    state = defaultState();
    saveState();
    init();
  });
  $$(".mode-card[data-mock]").forEach(btn => btn.addEventListener("click", () => startMock(btn.dataset.mock)));
}

function showView(view) {
  $$(".view").forEach(v => v.classList.toggle("active", v.id === view));
  $$(".nav-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.view === view));
  $("#viewTitle").textContent = ({ dashboard: "Dashboard", quiz: "Quiz", mock: "Mock Test", syllabus: "Syllabus", analytics: "Analytics", bank: "Question Bank", settings: "Settings" })[view];
  if (view === "analytics") renderAnalytics();
  if (view === "dashboard") renderDashboard();
}

function populateControls() {
  const papers = ["All", ...unique(questions.map(x => x.paper))];
  const subjects = ["All", ...unique(questions.map(x => x.subject))];
  const topics = ["All", ...unique(questions.map(x => x.topic))];
  const difficulties = ["All", "Easy", "Medium", "Hard"];
  fillSelect("#quizMode", ["All Questions Quiz", "Most Important 2026 Quiz", "Number System & Math (Computed)", "Curated Important Quiz", "Important 2022-Type Quiz", "Chapter Wise Quiz", "Topic Wise Quiz", "Subject Wise Quiz", "Paper-I Quiz", "Paper-II Quiz", "Pedagogy Quiz", "Mental Ability Quiz", "Programming Quiz", "Random Quiz", "Speed Quiz", "Revision Mode", "Wrong Answer Practice", "Bookmarked Questions"]);
  fillSelect("#paperFilter", papers);
  fillSelect("#subjectFilter", subjects);
  fillSelect("#topicFilter", topics);
  fillSelect("#difficultyFilter", difficulties);
  fillSelect("#bankPaper", papers);
  fillSelect("#bankDifficulty", difficulties);
  $("#fontSize").value = state.settings.fontSize;
  $("#timerSetting").checked = state.settings.timer;
  $("#soundSetting").checked = state.settings.sound;
}

function fillSelect(selector, values) {
  $(selector).innerHTML = values.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("");
}

function renderDashboard() {
  const attempts = state.attempts;
  const correct = attempts.filter(a => a.correct).length;
  $("#totalQuestions").textContent = questions.length;
  $("#attemptedCount").textContent = attempts.length;
  $("#accuracy").textContent = attempts.length ? `${Math.round((correct / attempts.length) * 100)}%` : "0%";
  $("#streak").textContent = state.streak || 0;
  $("#coverageBadge").textContent = `${countTopics()} syllabus topics mapped`;
  $("#modeGrid").innerHTML = [
    ["Most Important 2026 Quiz", "High-yield expected questions"],
    ["All Questions Quiz", "Poora verified bank"],
    ["Number System & Math (Computed)", "Auto-verified practice"],
    ["Curated Important Quiz", "Hand-picked concepts"],
    ["Important 2022-Type Quiz", "Bilingual tricky questions"],
    ["Paper-I Quiz", "Rajasthan GK & ability"],
    ["Paper-II Quiz", "Computer & pedagogy"],
    ["Speed Quiz", "Quick timed practice"],
    ["Wrong Answer Practice", "Improve mistakes"],
    ["Bookmarked Questions", "Revise saved questions"]
  ].map(m => `<button class="mode-card" data-mode="${escapeHtml(m[0])}">${escapeHtml(m[0])}<br><small>${escapeHtml(m[1])}</small></button>`).join("");
  $$("#modeGrid .mode-card").forEach(btn => btn.addEventListener("click", () => {
    showView("quiz");
    $("#quizMode").value = btn.dataset.mode;
    startConfiguredQuiz();
  }));
  const weak = weakTopics().slice(0, 8);
  $("#weakTopics").innerHTML = weak.length ? weak.map(t => `<div class="topic-pill"><strong>${escapeHtml(t.topic)}</strong><br><small>${escapeHtml(t.subject)} - ${t.accuracy}% accuracy</small></div>`).join("") : `<div class="topic-pill">Abhi attempts kam hain. Quiz start karo, weak topics yahan dikhenge.</div>`;
}

function renderSyllabus() {
  const term = ($("#syllabusSearch")?.value || "").toLowerCase();
  const rows = [];
  syllabus.forEach(group => {
    group.subjects.forEach(([subject, topics]) => {
      const shown = topics.filter(topic => !term || `${group.paper} ${subject} ${topic}`.toLowerCase().includes(term));
      if (!shown.length) return;
      rows.push(`<div class="syllabus-item"><strong>${group.paper} - ${escapeHtml(subject)}</strong><p>${shown.map(escapeHtml).join(" • ")}</p></div>`);
    });
  });
  $("#syllabusTree").innerHTML = rows.join("") || `<div class="syllabus-item">No topic found.</div>`;
}

function renderBank() {
  const term = ($("#bankSearch")?.value || "").toLowerCase();
  const paper = $("#bankPaper")?.value || "All";
  const difficulty = $("#bankDifficulty")?.value || "All";
  const rows = questions.filter(item => {
    const hay = `${displayQuestion(item)} ${item.paper} ${item.subject} ${item.topic} ${item.subtopic}`.toLowerCase();
    return (!term || hay.includes(term)) && (paper === "All" || item.paper === paper) && (difficulty === "All" || item.difficulty === difficulty);
  }).slice(0, 120);
  $("#questionList").innerHTML = rows.map(item => `<div class="question-item"><strong>${escapeHtml(displayQuestion(item))}</strong><br><small>${escapeHtml(item.paper)} / ${escapeHtml(item.subject)} / ${escapeHtml(item.topic)} / ${escapeHtml(item.difficulty)}${item.sourceType ? " / " + escapeHtml(item.sourceType) : ""}</small></div>`).join("");
}

function renderAnalytics() {
  const bySubject = groupAttempts("subject");
  $("#subjectAccuracy").innerHTML = bySubject.length ? bySubject.map(row => `<div class="bar-row"><strong>${escapeHtml(row.name)}</strong><span>${row.accuracy}% (${row.total})</span><div class="bar-track"><div class="bar-fill" style="width:${row.accuracy}%"></div></div></div>`).join("") : `<div class="bar-row">Quiz attempts ke baad analytics ready hoga.</div>`;
  drawProgress();
}

function startConfiguredQuiz() {
  const mode = $("#quizMode").value;
  let pool = [...questions];
  if (mode.includes("Computed")) pool = pool.filter(q => q.sourceType === "Computed practice (auto-verified)");
  else if (mode.includes("Most Important 2026")) pool = pool.filter(q => q.sourceType === "Most important 2026 (verified)");
  else if (mode.includes("Important 2022-Type")) pool = pool.filter(q => q.sourceType === "2022 pattern inspired important");
  else if (mode.includes("Curated Important")) pool = pool.filter(q => q.sourceType === "Curated important (verified)");
  if (mode.includes("Paper-I")) pool = pool.filter(q => q.paper === "Paper-I");
  if (mode.includes("Paper-II")) pool = pool.filter(q => q.paper === "Paper-II");
  if (mode.includes("Pedagogy")) pool = pool.filter(q => q.subject === "Pedagogy");
  if (mode.includes("Mental Ability")) pool = pool.filter(q => q.subject === "Mental Ability" || q.subject === "General Ability");
  if (mode.includes("Programming")) pool = pool.filter(q => q.subject === "Programming Fundamentals");
  if (mode.includes("Wrong")) {
    const wrongIds = new Set(state.attempts.filter(a => !a.correct).map(a => a.id));
    pool = pool.filter(q => wrongIds.has(q.id));
  }
  if (mode.includes("Bookmarked")) pool = pool.filter(q => state.bookmarks.includes(q.id));
  pool = applyFilters(pool);
  const limit = Math.max(5, Math.min(200, Number($("#questionLimit").value || 20)));
  beginSession(shuffle(pool).slice(0, limit), mode, limit * (mode.includes("Speed") ? 30 : 45));
}

function startMock(type) {
  showView("quiz");
  let pool = [...questions];
  let duration = 7200;
  let limit = 100;
  if (type === "Paper-I") pool = pool.filter(q => q.paper === "Paper-I");
  if (type === "Paper-II") pool = pool.filter(q => q.paper === "Paper-II");
  if (type === "Complete") { limit = 200; duration = 14400; }
  if (type === "Expected") { limit = 100; pool = pool.filter(q => q.difficulty !== "Easy"); }
  beginSession(shuffle(pool).slice(0, limit), `${type} Mock`, duration);
}

function applyFilters(pool) {
  const paper = $("#paperFilter").value;
  const subject = $("#subjectFilter").value;
  const topic = $("#topicFilter").value;
  const difficulty = $("#difficultyFilter").value;
  return pool.filter(q => (paper === "All" || q.paper === paper) && (subject === "All" || q.subject === subject) && (topic === "All" || q.topic === topic) && (difficulty === "All" || q.difficulty === difficulty));
}

function beginSession(pool, mode, seconds) {
  if (!pool.length) {
    alert("Is selection mein questions nahi mile. Filters change karo ya JSON import karo.");
    return;
  }
  session = { mode, pool, index: 0, answers: [], remaining: seconds, started: Date.now() };
  selectedOption = null;
  tick(true);
  renderQuestion();
  showView("quiz");
}

function renderQuestion() {
  const item = currentQuestion();
  if (!item) return finishQuiz();
  selectedOption = null;
  $("#quizMeta").textContent = `${session.mode} | Q${session.index + 1}/${session.pool.length} | ${item.paper} | ${item.subject} | ${item.difficulty}`;
  $("#questionText").textContent = displayQuestion(item);
  $("#options").innerHTML = displayOptions(item).map((opt, idx) => `<button class="option" data-index="${idx}">${String.fromCharCode(65 + idx)}. ${escapeHtml(opt)}</button>`).join("");
  $$(".option").forEach(btn => btn.addEventListener("click", () => chooseOption(Number(btn.dataset.index))));
  $("#explanation").classList.add("hidden");
  $("#explanation").innerHTML = "";
  $("#bookmarkBtn").textContent = state.bookmarks.includes(item.id) ? "Bookmarked" : "Bookmark";
}

function chooseOption(index) {
  if (selectedOption !== null) return;
  selectedOption = index;
  const item = currentQuestion();
  $$(".option").forEach(btn => {
    const idx = Number(btn.dataset.index);
    btn.classList.toggle("correct", idx === item.answer);
    btn.classList.toggle("wrong", idx === index && idx !== item.answer);
  });
  $("#explanation").classList.remove("hidden");
  $("#explanation").innerHTML = `<strong>${index === item.answer ? "Correct" : "Incorrect"}</strong><p>${escapeHtml(item.explanation)}</p><p><b>Exam Trick:</b> ${escapeHtml(item.trick || "")}</p>`;
}

function nextQuestion() {
  if (!session) return;
  recordAnswer(selectedOption);
}

function recordAnswer(answer) {
  if (!session) return;
  const item = currentQuestion();
  const correct = answer === item.answer;
  const attempt = { id: item.id, paper: item.paper, subject: item.subject, topic: item.topic, difficulty: item.difficulty, answer, correct, at: new Date().toISOString(), time: item.time };
  session.answers.push(attempt);
  state.attempts.push(attempt);
  updateStreak();
  saveState();
  session.index += 1;
  if (session.index >= session.pool.length) finishQuiz();
  else renderQuestion();
}

function finishQuiz() {
  if (!session) {
    alert("Abhi koi quiz chal nahi raha. Pehle koi Quiz ya Mock start karo, phir 'Finish & Review' dabao.");
    return;
  }
  clearInterval(timerHandle);
  const answers = session.answers;
  const total = answers.length;
  if (!total) {
    alert("Abhi tak ek bhi question attempt nahi kiya. Kam se kam 1 question karo, phir Finish dabao.");
    return;
  }
  const correct = answers.filter(a => a.correct).length;
  const wrong = answers.filter(a => a.answer !== null && !a.correct).length;
  const skipped = answers.filter(a => a.answer === null).length;
  const score = correct - wrong / 3;
  const mode = session.mode;
  $("#questionText").textContent = `${mode} complete`;
  $("#quizMeta").innerHTML = `Score: <b>${score.toFixed(2)}</b> / ${total} &nbsp;|&nbsp; ` +
    `<span class="res-badge res-correct">Sahi ${correct}</span> ` +
    `<span class="res-badge res-wrong">Galat ${wrong}</span> ` +
    `<span class="res-badge res-skipped">Chhode ${skipped}</span> &nbsp;|&nbsp; ` +
    `Accuracy: <b>${total ? Math.round((correct / total) * 100) : 0}%</b>`;

  const renderList = filter => {
    const rows = answers.map((a, idx) => ({ a, idx }))
      .filter(({ a }) => filter === "wrong" ? (a.answer !== null && !a.correct) : filter === "all" ? true : (a.answer === null || !a.correct));
    if (!rows.length) return `<div class="question-item res-correct">Shabaash! Is filter mein koi question nahi. 🎉</div>`;
    return rows.map(({ a, idx }) => {
      const item = questions.find(q => q.id === a.id);
      const opts = item ? displayOptions(item) : [];
      const status = a.correct ? "Sahi" : a.answer === null ? "Chhoda" : "Galat";
      const cls = a.correct ? "res-correct" : a.answer === null ? "res-skipped" : "res-wrong";
      const chosen = a.answer !== null && opts[a.answer] !== undefined ? opts[a.answer] : "—";
      const right = item && opts[item.answer] !== undefined ? opts[item.answer] : "";
      const yourLine = a.correct ? "" : `<p class="res-your"><b>Aapka jawab:</b> ${escapeHtml(chosen)}</p>`;
      const rightLine = `<p class="res-right"><b>Sahi jawab:</b> ${escapeHtml(right)}</p>`;
      const trick = item && item.trick ? `<br><b>Trick:</b> ${escapeHtml(item.trick)}` : "";
      return `<div class="question-item ${cls}"><div class="res-head"><strong>${idx + 1}. ${escapeHtml(item ? displayQuestion(item) : a.id)}</strong><span class="res-badge ${cls}">${status}</span></div>` +
        `<small>${escapeHtml(a.subject || "")} • ${escapeHtml(a.topic || "")}</small>${yourLine}${rightLine}` +
        `<p class="res-exp">${escapeHtml(item ? item.explanation : "")}${trick}</p></div>`;
    }).join("");
  };

  // Agar koi galti/chhoda nahi to seedha "Saare" dikhao, warna "Galat + Chhode".
  const defaultFilter = (wrong + skipped) > 0 ? "review" : "all";
  const act = f => defaultFilter === f ? " active" : "";
  $("#options").innerHTML =
    `<div class="res-filters">` +
    `<button class="ghost-btn res-filter-btn${act("review")}" data-filter="review">Galat + Chhode (${wrong + skipped})</button>` +
    `<button class="ghost-btn res-filter-btn${act("wrong")}" data-filter="wrong">Sirf Galat (${wrong})</button>` +
    `<button class="ghost-btn res-filter-btn${act("all")}" data-filter="all">Saare (${total})</button>` +
    `</div><div id="resultList">${renderList(defaultFilter)}</div>`;
  $$("#options .res-filter-btn").forEach(btn => btn.addEventListener("click", () => {
    $$("#options .res-filter-btn").forEach(b => b.classList.toggle("active", b === btn));
    $("#resultList").innerHTML = renderList(btn.dataset.filter);
  }));

  $("#explanation").classList.add("hidden");
  session = null;
  renderDashboard();
  renderAnalytics();
}

function toggleBookmark() {
  const item = currentQuestion();
  if (!item) return;
  if (state.bookmarks.includes(item.id)) state.bookmarks = state.bookmarks.filter(id => id !== item.id);
  else state.bookmarks.push(item.id);
  saveState();
  $("#bookmarkBtn").textContent = state.bookmarks.includes(item.id) ? "Bookmarked" : "Bookmark";
}

function tick(reset = false) {
  if (reset) clearInterval(timerHandle);
  const render = () => {
    if (!session || !state.settings.timer) {
      $("#timer").textContent = "--:--";
      return;
    }
    const min = Math.floor(session.remaining / 60);
    const sec = session.remaining % 60;
    $("#timer").textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    if (session.remaining <= 0) finishQuiz();
    session.remaining -= 1;
  };
  render();
  timerHandle = setInterval(render, 1000);
}

async function importJson(event) {
  const files = Array.from(event.target.files || []);
  const imported = loadImported();
  for (const file of files) {
    const text = await file.text();
    const json = JSON.parse(text);
    const items = Array.isArray(json) ? json : json.questions;
    if (!Array.isArray(items)) continue;
    items.filter(isQuestionLike).forEach(item => imported.push(item));
  }
  localStorage.setItem(IMPORT_KEY, JSON.stringify(dedupe(imported)));
  questions = buildQuestions();
  populateControls();
  renderDashboard();
  renderBank();
  alert("Questions imported successfully.");
}

function isQuestionLike(item) {
  return item && item.id && item.paper && item.subject && item.topic && Array.isArray(item.options) && typeof item.answer === "number";
}


function displayQuestion(item) {
  if (!item) return "";
  if (item.questionHi && item.questionEn) return `${item.questionHi}\n${item.questionEn}`;
  return item.question || "";
}

function displayOptions(item) {
  if (item?.optionsHi && item?.optionsEn) {
    return item.optionsHi.map((option, index) => `${option} / ${item.optionsEn[index]}`);
  }
  return item?.options || [];
}
function currentQuestion() {
  return session?.pool[session.index];
}

function defaultState() {
  return { attempts: [], bookmarks: [], streak: 0, lastPracticeDate: "", settings: { theme: "light", fontSize: 16, timer: true, sound: false } };
}

function loadState() {
  try { return { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") }; }
  catch { return defaultState(); }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadImported() {
  try { return JSON.parse(localStorage.getItem(IMPORT_KEY) || "[]").filter(isQuestionLike); }
  catch { return []; }
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastPracticeDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak = state.lastPracticeDate === yesterday ? (state.streak || 0) + 1 : 1;
  state.lastPracticeDate = today;
}

function groupAttempts(key) {
  const map = new Map();
  state.attempts.forEach(a => {
    const name = a[key];
    const row = map.get(name) || { name, total: 0, correct: 0 };
    row.total += 1;
    row.correct += a.correct ? 1 : 0;
    map.set(name, row);
  });
  return Array.from(map.values()).map(r => ({ ...r, accuracy: Math.round((r.correct / r.total) * 100) })).sort((a, b) => b.total - a.total);
}

function weakTopics() {
  return groupAttempts("topic").filter(x => x.total >= 1).sort((a, b) => a.accuracy - b.accuracy).map(x => ({ ...x, subject: questions.find(q => q.topic === x.name)?.subject || "", topic: x.name }));
}

function drawProgress() {
  const canvas = $("#progressChart");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue("--primary").trim();
  ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("--muted").trim();
  ctx.lineWidth = 4;
  const recent = state.attempts.slice(-30);
  if (!recent.length) {
    ctx.font = "18px sans-serif";
    ctx.fillText("Attempt history yahan dikhegi.", 30, 160);
    return;
  }
  ctx.beginPath();
  recent.forEach((a, i) => {
    const x = 30 + i * ((canvas.width - 60) / Math.max(1, recent.length - 1));
    const y = a.correct ? 80 : 240;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
}

function countTopics() {
  return syllabus.reduce((sum, p) => sum + p.subjects.reduce((s, [, topics]) => s + topics.length, 0), 0);
}

function unique(values) {
  return Array.from(new Set(values)).filter(Boolean).sort();
}

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function dedupe(items) {
  const map = new Map();
  items.forEach(item => map.set(item.id, item));
  return Array.from(map.values());
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[ch]));
}






