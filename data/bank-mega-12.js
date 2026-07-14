/* RSSB BCI 2026 - Mega bank part 12: Pedagogy + Data Processing (set 2) */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG12";
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

  /* ================= PEDAGOGY (~25) ================= */

  b("Paper-II", "Pedagogy", "Learning Theories", "Bloom Revised Taxonomy", "Medium",
    "Bloom ki sanshodhit (revised) taxonomy (Anderson & Krathwohl) mein sabse ucch (highest) star kaunsa hai?",
    "In Bloom's revised taxonomy (Anderson & Krathwohl), which is the highest level?",
    ["Create (srijan)", "Evaluate (mulyankan)", "Analyze (vishleshan)", "Remember (smaran)"], 0,
    "Sanshodhit taxonomy ka kram: Remember -> Understand -> Apply -> Analyze -> Evaluate -> Create. Sabse ucch star 'Create' hai (mool taxonomy mein sabse upar 'Evaluate' tha).",
    "Revised top = Create; original top = Evaluate.",
    ["Create", "Evaluate", "Analyze", "Remember"]);

  b("Paper-II", "Pedagogy", "Learning Theories", "Bloom Revised Taxonomy", "Medium",
    "Bloom ki revised taxonomy mein 'Understand' star ke theek baad (upar) kaunsa star aata hai?",
    "In Bloom's revised taxonomy, which level comes immediately after (above) 'Understand'?",
    ["Apply (prayog)", "Remember (smaran)", "Evaluate (mulyankan)", "Create (srijan)"], 0,
    "Kram: Remember -> Understand -> Apply -> Analyze -> Evaluate -> Create. 'Understand' ke baad 'Apply' aata hai.",
    "Understand -> Apply.",
    ["Apply", "Remember", "Evaluate", "Create"]);

  b("Paper-II", "Pedagogy", "Child Psychology", "Kohlberg", "Hard",
    "Kohlberg ke naitik vikas (moral development) ke siddhant mein kul kitne star (levels) hote hain?",
    "In Kohlberg's theory of moral development, how many levels are there?",
    ["3 star (6 charan)", "2 star (4 charan)", "4 star (8 charan)", "5 star (10 charan)"], 0,
    "Kohlberg ke 3 star hain - Pre-conventional, Conventional, Post-conventional - aur har star mein 2 charan, kul 6 charan.",
    "Kohlberg = 3 levels, 6 stages.",
    ["3 levels (6 stages)", "2 levels (4 stages)", "4 levels (8 stages)", "5 levels (10 stages)"]);

  b("Paper-II", "Pedagogy", "Child Psychology", "Erikson", "Hard",
    "Erikson ke manolैngik/manosamajik (psychosocial) vikas mein kishoravastha (adolescence) ka mukhya sankat kya hai?",
    "In Erikson's psychosocial development, what is the main crisis of adolescence?",
    ["Identity vs Role Confusion (pehchan vs bhumika bhram)", "Trust vs Mistrust (vishwas vs avishwas)", "Autonomy vs Shame (swayattata vs laज्जा)", "Integrity vs Despair (akhandता vs nirasha)"], 0,
    "Erikson ki 8 avasthaon mein kishoravastha ka sankat 'Identity vs Role Confusion' hai, jismein vyakti apni pehchan khojta hai.",
    "Adolescence = Identity vs Role Confusion.",
    ["Identity vs Role Confusion", "Trust vs Mistrust", "Autonomy vs Shame", "Integrity vs Despair"]);

  b("Paper-II", "Pedagogy", "Learning Theories", "Gagne", "Hard",
    "Robert Gagne kis liye jaane jaate hain?",
    "Robert Gagne is best known for which concept?",
    ["Learning Hierarchy / Conditions of Learning", "Multiple Intelligences", "Classical Conditioning", "Moral Development"], 0,
    "Gagne ne 'learning hierarchy' aur '9 events of instruction' diye, jinke anusaar seekhna sarल se jatil kram mein hota hai.",
    "Gagne = learning hierarchy & 9 events.",
    ["Learning Hierarchy / Conditions of Learning", "Multiple Intelligences", "Classical Conditioning", "Moral Development"]);

  b("Paper-II", "Pedagogy", "Teaching Methods", "Bruner Discovery", "Medium",
    "'Discovery learning' (khoj dwara adhigam) ka siddhant kisne diya?",
    "Who propounded the theory of 'Discovery Learning'?",
    ["Jerome Bruner", "David Ausubel", "B. F. Skinner", "Edward Thorndike"], 0,
    "Jerome Bruner ne discovery learning di jismein vidyarthi swayं khoj kar concepts samajhta hai; Ausubel ne iske viparit meaningful reception learning di.",
    "Discovery learning = Bruner.",
    ["Jerome Bruner", "David Ausubel", "B. F. Skinner", "Edward Thorndike"]);

  b("Paper-II", "Pedagogy", "Learning Theories", "Ausubel", "Medium",
    "David Ausubel ke 'meaningful learning' mein naye gyan ko jodne ke liye kaunse purv-sanrachana (advance organizer) ka upyog hota hai?",
    "In Ausubel's 'meaningful learning', new knowledge is linked using which tool?",
    ["Advance Organizer (purv-sanchaayak)", "Reinforcement (punarbalan)", "Trial and Error (prayatna-truti)", "Insight (soojh)"], 0,
    "Ausubel maanta hai ki naya gyan tab arthapurn hota hai jab use purv-gyan se joda jaye; iske liye 'advance organizer' prastut kiya jaata hai.",
    "Ausubel = advance organizer links new to old.",
    ["Advance Organizer", "Reinforcement", "Trial and Error", "Insight"]);

  b("Paper-II", "Pedagogy", "Teaching Methods", "Teaching Maxims", "Medium",
    "Shikshan sootra (teaching maxim) 'gyat se agyat ki or' (known to unknown) ka kya arth hai?",
    "What does the teaching maxim 'from known to unknown' mean?",
    ["Purv-gyan se shuru kar ke naye gyan tak jaana", "Kathin se aasaan ki or jaana", "Abstract se thos ki or jaana", "Door se paas ki or jaana"], 0,
    "Is sootra ke anusaar shikshak vidyarthi ke pehle se gyat (known) tathyon se shuruaat kar ke naye/agyat (unknown) tak le jaata hai.",
    "Start from what learner already knows.",
    ["Start from prior knowledge, move to new", "From difficult to easy", "From abstract to concrete", "From far to near"]);

  b("Paper-II", "Pedagogy", "Teaching Methods", "Teaching Maxims", "Easy",
    "Shikshan sootra 'thos se abhaूत ki or' (concrete to abstract) ke anusaar shikshan kaise shuru hona chahiye?",
    "According to the maxim 'concrete to abstract', how should teaching begin?",
    ["Vastavik/thos vastuon se, phir vichaaron/pratayaon ki or", "Sootron se, phir udaharan", "Paribhasha se, phir vastu", "Abstract soch se, phir vastu"], 0,
    "Yah sootra kehta hai ki pehle thos/mool vastuon (jaise gineن ke liye kankad) se shuru karo, phir dheere-dheere abstract concepts (sankhya) tak jao.",
    "Concrete objects first, ideas later.",
    ["Begin with real/concrete objects, then ideas", "Begin with formulas, then examples", "Begin with definition, then object", "Begin with abstract thought, then object"]);

  b("Paper-II", "Pedagogy", "Teaching Aptitude", "Micro Teaching Skills", "Medium",
    "Sukshm shikshan (micro teaching) mein 'prashna-poochhne ka kaushal' (skill of questioning) mukhyatah kya viksit karta hai?",
    "In micro teaching, the 'skill of questioning' mainly develops what?",
    ["Vidyarthiyon ki soch aur bhagidari (thinking & participation)", "Sundar lekhan (handwriting)", "Blackboard safai", "Attendance lena"], 0,
    "Prashna-poochhne ka kaushal vidyarthiyon ko sochne, dhyan dene aur charcha mein bhaag lene ke liye prerit karta hai; yah micro teaching ke mukhya kaushalon mein se ek hai.",
    "Questioning skill = boost thinking & participation.",
    ["Students' thinking & participation", "Handwriting", "Cleaning the blackboard", "Taking attendance"]);

  b("Paper-II", "Pedagogy", "ICT in Education", "Flipped Classroom", "Hard",
    "'Flipped classroom' (palat kaksha) model mein kya hota hai?",
    "In the 'flipped classroom' model, what happens?",
    ["Vidyarthi ghar par video/samagri se seekhte hain, kaksha mein abhyaas/charcha karte hain", "Shikshak ghar par padhाता hai", "Pariksha pehle hoti hai", "Kaksha mein sirf lecture hota hai"], 0,
    "Flipped classroom mein paramparik kram palat jaata hai - naya content ghar par (video aadi se) seekha jaata hai aur kaksha ka samay abhyaas, charcha aur samasya-samadhaan mein lagta hai.",
    "Flipped = learn at home, practice in class.",
    ["Learn content at home, practice/discuss in class", "Teacher teaches at home", "Exam comes first", "Class has only lectures"]);

  b("Paper-II", "Pedagogy", "ICT in Education", "MOOC", "Medium",
    "Shiksha mein 'MOOC' ka poora roop kya hai?",
    "In education, what is the full form of 'MOOC'?",
    ["Massive Open Online Course", "Multiple Option Online Class", "Managed Offline Open Course", "Modern Online Oral Course"], 0,
    "MOOC ka arth hai Massive Open Online Course - ek aisa online course jismein bina seemit sankhya ke kai log door se bhaag le sakte hain (jaise SWAYAM).",
    "MOOC = Massive Open Online Course.",
    ["Massive Open Online Course", "Multiple Option Online Class", "Managed Offline Open Course", "Modern Online Oral Course"]);

  b("Paper-II", "Pedagogy", "ICT in Education", "LMS", "Medium",
    "Shaikshik sandarbh mein 'LMS' (jaise Moodle) ka mukhya kaam kya hai?",
    "In an educational context, what is the main role of an 'LMS' (e.g., Moodle)?",
    ["Online course samagri, assignment aur assessment ko prabandhit karna", "Sirf video call karna", "Sirf email bhejna", "Photo edit karna"], 0,
    "LMS (Learning Management System) online paathya-samagri, assignment, quiz, grade aur vidyarthi progress ko ek jagah prabandhit karta hai (jaise Moodle, Google Classroom).",
    "LMS = manage online courses/assessment.",
    ["Manage online course content, assignments & assessment", "Only video calling", "Only sending email", "Editing photos"]);

  b("Paper-II", "Pedagogy", "Teaching Ethics", "RTE Act", "Hard",
    "Shiksha ka adhikaar (RTE) Act 2009 kis aayu-varg ke bachchon ko nishulk evं anivarya shiksha ki guarantee deta hai?",
    "The Right to Education (RTE) Act 2009 guarantees free & compulsory education to children of which age group?",
    ["6 se 14 varsh", "3 se 10 varsh", "5 se 16 varsh", "6 se 18 varsh"], 0,
    "RTE Act 2009 (Article 21A) 6 se 14 varsh ke sabhi bachchon ko nishulk aur anivarya shiksha ka adhikaar deta hai.",
    "RTE = 6 to 14 years.",
    ["6 to 14 years", "3 to 10 years", "5 to 16 years", "6 to 18 years"]);

  b("Paper-II", "Pedagogy", "Evaluation", "CCE", "Medium",
    "'CCE' (Continuous and Comprehensive Evaluation) ka mukhya uddeshya kya hai?",
    "What is the main purpose of 'CCE' (Continuous and Comprehensive Evaluation)?",
    ["Vidyarthi ke sabhi pehluon ka nirantar mulyankan karna", "Sirf saal ke ant mein pariksha lena", "Sirf ratta yaad aankna", "Sirf khel aankna"], 0,
    "CCE vidyarthi ke shaikshik aur sah-shaikshik (co-scholastic) dono pehluon ka poore varsh nirantar aur sarvangeen mulyankan karta hai.",
    "CCE = continuous + all-round assessment.",
    ["Continuous all-round assessment of the student", "Only year-end exam", "Only testing rote memory", "Only assessing sports"]);

  b("Paper-II", "Pedagogy", "Evaluation", "Rubrics", "Medium",
    "Mulyankan mein 'rubric' kya hoti hai?",
    "In assessment, what is a 'rubric'?",
    ["Ank dene ke lispasht maapdand/star wali soochi (scoring criteria)", "Ek prakaar ka projector", "Attendance register", "Ek games software"], 0,
    "Rubric ek scoring guide hai jo pratyek star (jaise Excellent, Good, Average) ke liye spasht maapdand deti hai, jisse mulyankan objective aur paardarshi banta hai.",
    "Rubric = clear scoring criteria/levels.",
    ["A scoring guide with clear criteria/levels", "A type of projector", "Attendance register", "A games software"]);

  b("Paper-II", "Pedagogy", "Evaluation", "Reliability vs Validity", "Hard",
    "Kisi test ki 'validity' (vaidhता) ka kya arth hai?",
    "What does the 'validity' of a test mean?",
    ["Test wahi maapta hai jise maapna chahiye", "Test baar-baar wahi parinaam deta hai", "Test aasaan hai", "Test chhota hai"], 0,
    "Validity ka arth hai test us cheez ko maapta hai jiske liye banaya gaya hai. Reliability ka arth hai test dohraane par bhi eksamaan (consistent) parinaam dena.",
    "Validity = measures the right thing; Reliability = consistent results.",
    ["The test measures what it is meant to measure", "The test repeatedly gives the same result", "The test is easy", "The test is short"]);

  b("Paper-II", "Pedagogy", "Evaluation", "Norm vs Criterion", "Hard",
    "'Criterion-referenced test' mein vidyarthi ke pradarshan ki tulna kisse ki jaati hai?",
    "In a 'criterion-referenced test', a student's performance is compared with what?",
    ["Ek nishchit maapdand/mahaarat star (fixed standard)", "Anya vidyarthiyon se", "Pichhle varsh ke topper se", "Shikshak ke ank se"], 0,
    "Criterion-referenced test mein vidyarthi ki tulna ek nishchit maanak/lakshya se hoti hai (jaise 'kam se kam 80% aana chahiye'). Norm-referenced test mein tulna doosre vidyarthiyon se hoti hai.",
    "Criterion = vs fixed standard; Norm = vs other students.",
    ["A fixed standard / mastery level", "Other students", "Last year's topper", "The teacher's marks"]);

  b("Paper-II", "Pedagogy", "Child Psychology", "Gardner MI", "Medium",
    "Howard Gardner kis siddhant ke liye prasiddh hain?",
    "Howard Gardner is famous for which theory?",
    ["Multiple Intelligences (bahu-buddhi)", "Two-factor theory", "Operant conditioning", "Cognitive stages"], 0,
    "Gardner ne 'Theory of Multiple Intelligences' di, jismein linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic aadi kai prakaar ki buddhi maani gayi hai.",
    "Gardner = Multiple Intelligences.",
    ["Multiple Intelligences", "Two-factor theory", "Operant conditioning", "Cognitive stages"]);

  b("Paper-II", "Pedagogy", "Child Psychology", "Spearman", "Hard",
    "Buddhi ka 'Two-factor theory' (do-karak siddhant) kisne diya?",
    "Who gave the 'Two-factor theory' of intelligence?",
    ["Charles Spearman", "Howard Gardner", "Alfred Binet", "L. L. Thurstone"], 0,
    "Charles Spearman ne buddhi ke do karak diye - 'g' (general/samanya) factor aur 's' (specific/vishisht) factor. Gardner ne multiple intelligences di.",
    "Spearman = g-factor + s-factor.",
    ["Charles Spearman", "Howard Gardner", "Alfred Binet", "L. L. Thurstone"]);

  b("Paper-II", "Pedagogy", "Learning Theories", "Transfer of Learning", "Medium",
    "Jab ek vishay mein seekhi cheez doosre vishay mein madad karti hai, to ise kya kehte hain?",
    "When learning in one subject helps in another subject, it is called?",
    ["Positive transfer of learning", "Negative transfer", "Zero transfer", "Extinction"], 0,
    "Positive transfer tab hota hai jab purv-adhigam naye adhigam mein sahayak ho (jaise cycle chalana seekhna bike seekhne mein madad kare). Negative transfer isse baadha daalta hai.",
    "Old learning helps new = positive transfer.",
    ["Positive transfer of learning", "Negative transfer", "Zero transfer", "Extinction"]);

  b("Paper-II", "Pedagogy", "Teaching Learning Process", "Attention & Interest", "Medium",
    "Kaksha mein vidyarthiyon ka dhyan (attention) banaye rakhne ka sabse achha tarika kya hai?",
    "What is the best way to sustain students' attention in class?",
    ["Rochak, vividhtapurn aur sahbhagi shikshan", "Ek hi swar mein lambe vyakhyan", "Keval textbook padhाना", "Bina rukават bolte rehna"], 0,
    "Dhyan banaye rakhne ke liye shikshan ko rochak, vividh (aids, activity, prashna) aur vidyarthi-sahbhagi banana chahiye; ekras (monotonous) lecture dhyan bhang karta hai.",
    "Variety + participation = sustained attention.",
    ["Interesting, varied & participative teaching", "Long monotone lectures", "Only reading the textbook", "Speaking non-stop"]);

  b("Paper-II", "Pedagogy", "Classroom Management", "Leadership Styles", "Hard",
    "Kaksha mein kaunsi neta-shaili (leadership style) sabse loktantrik (democratic) maani jaati hai?",
    "Which leadership style in the classroom is considered the most democratic?",
    ["Vidyarthiyon ko nirnay mein bhagidar banana (participative)", "Sabhi nirnay sirf shikshak lena (autocratic)", "Koi maargdarshan na dena (laissez-faire)", "Sirf saza dena"], 0,
    "Loktantrik (democratic/participative) shaili mein shikshak vidyarthiyon ko charcha aur nirnay mein shaamil karta hai; autocratic mein sab kuch shikshak taय karta hai aur laissez-faire mein margdarshan nahi hota.",
    "Democratic = students share in decisions.",
    ["Involving students in decisions", "Teacher takes all decisions", "No guidance given", "Only punishment"]);

  b("Paper-II", "Pedagogy", "Child Psychology", "Guidance & Counselling", "Medium",
    "Shiksha mein 'guidance' aur 'counselling' mein mukhya antar kya hai?",
    "In education, what is the main difference between 'guidance' and 'counselling'?",
    ["Counselling do-tarफा, gopniya aur samasya-kendrit vyaktigat prakriya hai", "Dono bilkul ek hi hain", "Guidance keval saza deti hai", "Counselling keval samuh mein hoti hai"], 0,
    "Guidance ek vyaapak, saamanya disha-nirdesh hai (jaise career jaankari), jabki counselling ek gehri, gopniya aur vyaktigat do-tarफा baat-cheet hai jo kisi vishisht samasya ke samadhaan par kendrit hoti hai.",
    "Counselling = deeper, personal, confidential problem-solving.",
    ["Counselling is a two-way, confidential, problem-focused personal process", "Both are exactly the same", "Guidance only punishes", "Counselling is only in groups"]);

  b("Paper-II", "Pedagogy", "Learning Theories", "Memory & Forgetting", "Medium",
    "Seekhi hui cheez ko samay ke saath bhoolne ki dar ke baare mein 'forgetting curve' kisne di?",
    "Who gave the 'forgetting curve' about how we forget learned material over time?",
    ["Hermann Ebbinghaus", "Jean Piaget", "B. F. Skinner", "Jerome Bruner"], 0,
    "Hermann Ebbinghaus ne 'forgetting curve' di jo dikhati hai ki dohraaye (revision) bina seekha gaya gyan samay ke saath tezi se bhula diya jaata hai.",
    "Forgetting curve = Ebbinghaus.",
    ["Hermann Ebbinghaus", "Jean Piaget", "B. F. Skinner", "Jerome Bruner"]);

  b("Paper-II", "Pedagogy", "Teaching Methods", "Blended Learning", "Medium",
    "'Blended learning' ka arth kya hai?",
    "What does 'blended learning' mean?",
    ["Aamne-saamne (face-to-face) aur online shikshan ka mishran", "Sirf online shikshan", "Sirf classroom shikshan", "Sirf ghar par swa-adhyayan"], 0,
    "Blended learning paramparik aamne-saamne kaksha shikshan ko online/digital shikshan ke saath jodkar santulit anubhav deta hai.",
    "Blended = face-to-face + online mix.",
    ["A mix of face-to-face and online teaching", "Only online teaching", "Only classroom teaching", "Only self-study at home"]);

  /* ================= DATA PROCESSING / MS OFFICE (~25) ================= */

  b("Paper-II", "Data Processing", "MS Word", "Ctrl+K Hyperlink", "Medium",
    "MS Word mein chune gaye text par hyperlink jodne ki shortcut key kaunsi hai?",
    "In MS Word, which shortcut inserts a hyperlink on selected text?",
    ["Ctrl + K", "Ctrl + H", "Ctrl + L", "Ctrl + J"], 0,
    "Ctrl+K 'Insert Hyperlink' dialog kholta hai; Ctrl+H Replace hai, Ctrl+L left align aur Ctrl+J justify hai.",
    "K = linK (Ctrl+K).",
    ["Ctrl + K", "Ctrl + H", "Ctrl + L", "Ctrl + J"]);

  b("Paper-II", "Data Processing", "MS Word", "Ctrl+Enter Page Break", "Medium",
    "MS Word mein cursor ki jagah par manual (haath se) page break daalne ki shortcut kaunsi hai?",
    "In MS Word, which shortcut inserts a manual page break at the cursor?",
    ["Ctrl + Enter", "Shift + Enter", "Alt + Enter", "Ctrl + Shift + Enter"], 0,
    "Ctrl+Enter manual page break daalta hai (agli page par chala jaata hai); Shift+Enter line break aur Ctrl+Shift+Enter column break deta hai.",
    "Ctrl+Enter = page break.",
    ["Ctrl + Enter", "Shift + Enter", "Alt + Enter", "Ctrl + Shift + Enter"]);

  b("Paper-II", "Data Processing", "MS Word", "Section vs Page Break", "Hard",
    "MS Word mein document ke ek bhaag ka page orientation/margin alag rakhne ke liye kaunsa break upyog hota hai?",
    "In MS Word, which break lets one part of a document have different orientation/margins?",
    ["Section break", "Simple page break", "Line break", "Column break"], 0,
    "Section break document ko alag vibhaागon mein baantta hai jisse har section ka apna orientation, margin, header/footer ho sakta hai; simple page break sirf agli page par le jaata hai.",
    "Different formatting per part = Section break.",
    ["Section break", "Simple page break", "Line break", "Column break"]);

  b("Paper-II", "Data Processing", "MS Word", "Track Changes", "Medium",
    "MS Word mein 'Track Changes' feature kya karta hai?",
    "In MS Word, what does the 'Track Changes' feature do?",
    ["Document mein kiye gaye har badlaav ko record aur highlight karta hai", "File ko lock karta hai", "Spelling theek karta hai", "Automatic save karta hai"], 0,
    "Track Changes har insertion, deletion aur formatting badlaav ko rikaॉर्ड kar ke dikhata hai, jinhe baad mein accept ya reject kiya ja sakta hai - review ke liye upyogi.",
    "Track Changes = record edits for review.",
    ["Records and highlights every edit made", "Locks the file", "Fixes spelling", "Auto-saves"]);

  b("Paper-II", "Data Processing", "MS Word", "Format Painter", "Medium",
    "MS Word mein ek jagah ki formatting doosri jagah lagane wala tool kaunsa hai?",
    "In MS Word, which tool copies formatting from one place and applies it elsewhere?",
    ["Format Painter", "Thesaurus", "WordArt", "Clipboard"], 0,
    "Format Painter (brush icon) chune gaye text ki formatting (font, size, color) copy kar ke doosre text par lagata hai; double-click karne par kai jagah lagaya ja sakta hai.",
    "Copy formatting = Format Painter (brush).",
    ["Format Painter", "Thesaurus", "WordArt", "Clipboard"]);

  b("Paper-II", "Data Processing", "MS Word", "Thesaurus", "Easy",
    "MS Word mein kisi shabd ke samanaarthi (synonyms) dhoondhne wala tool kaunsa hai?",
    "In MS Word, which tool finds synonyms of a word?",
    ["Thesaurus", "Spell Check", "Word Count", "Format Painter"], 0,
    "Thesaurus (Shift+F7) kisi shabd ke paryaayvaachi (synonyms) aur vilom (antonyms) sujhata hai.",
    "Synonyms = Thesaurus (Shift+F7).",
    ["Thesaurus", "Spell Check", "Word Count", "Format Painter"]);

  b("Paper-II", "Data Processing", "MS Word", "Orientation", "Easy",
    "MS Word mein page ko chaudाई mein (width zyada) chhaapने ke liye kaunsa orientation chuna jaata hai?",
    "In MS Word, which orientation is chosen to print a page wider than it is tall?",
    ["Landscape", "Portrait", "Mirror", "Booklet"], 0,
    "Landscape orientation mein page ki chaudai (width) uski unchai (height) se zyada hoti hai; Portrait mein unchai zyada hoti hai.",
    "Wide page = Landscape.",
    ["Landscape", "Portrait", "Mirror", "Booklet"]);

  b("Paper-II", "Data Processing", "MS Excel", "Mixed Reference", "Hard",
    "MS Excel mein A$1 kis prakaar ka cell reference hai?",
    "In MS Excel, what type of cell reference is A$1?",
    ["Mixed reference (row locked)", "Absolute reference", "Relative reference", "Circular reference"], 0,
    "A$1 mein sirf row (1) par $ hai, isliye copy karne par column badalega par row nahi - yah mixed reference hai (row locked). $A$1 absolute aur A1 relative hota hai.",
    "One $ = mixed; $ before number locks the row.",
    ["Mixed reference (row locked)", "Absolute reference", "Relative reference", "Circular reference"]);

  b("Paper-II", "Data Processing", "MS Excel", "CONCATENATE", "Medium",
    "MS Excel mein do ya adhik cell ke text ko jodkar ek karne wala function kaunsa hai?",
    "In MS Excel, which function joins text from two or more cells into one?",
    ["CONCATENATE", "SPLIT", "TRIM", "LEN"], 0,
    "CONCATENATE (ya & operator, ya naya CONCAT) kai cell/text ko jodkar ek string banata hai. TRIM extra space hatata hai aur LEN lambaai deta hai.",
    "Join text = CONCATENATE (or &).",
    ["CONCATENATE", "SPLIT", "TRIM", "LEN"]);

  b("Paper-II", "Data Processing", "MS Excel", "LEN", "Medium",
    "MS Excel mein =LEN(\"COMPUTER\") ka parinaam kya hoga?",
    "In MS Excel, what will =LEN(\"COMPUTER\") return?",
    ["8", "7", "9", "COMPUTER"], 0,
    "LEN kisi text ke akshar (characters) ginता hai. 'COMPUTER' mein 8 akshar hain, isliye parinaam 8 hai.",
    "LEN = number of characters; COMPUTER = 8.",
    ["8", "7", "9", "COMPUTER"]);

  b("Paper-II", "Data Processing", "MS Excel", "LEFT", "Medium",
    "MS Excel mein =LEFT(\"INDIA\",3) ka parinaam kya hoga?",
    "In MS Excel, what will =LEFT(\"INDIA\",3) return?",
    ["IND", "DIA", "INDIA", "INR"], 0,
    "LEFT text ke baayen (left) se diye gaye ank jitne akshar deta hai. 'INDIA' ke baayen se 3 akshar 'IND' hain.",
    "LEFT(text,3) = first 3 chars from left.",
    ["IND", "DIA", "INDIA", "INR"]);

  b("Paper-II", "Data Processing", "MS Excel", "TODAY vs NOW", "Medium",
    "MS Excel mein vartaman tithi (date) ke saath vartaman samay (time) bhi dene wala function kaunsa hai?",
    "In MS Excel, which function returns the current date along with the current time?",
    ["=NOW()", "=TODAY()", "=DATE()", "=TIME()"], 0,
    "NOW() vartaman date aur time dono deta hai, jabki TODAY() keval vartaman date deta hai (samay nahi).",
    "NOW = date+time; TODAY = date only.",
    ["=NOW()", "=TODAY()", "=DATE()", "=TIME()"]);

  b("Paper-II", "Data Processing", "MS Excel", "ROUND", "Medium",
    "MS Excel mein =ROUND(7.678, 1) ka parinaam kya hoga?",
    "In MS Excel, what will =ROUND(7.678, 1) return?",
    ["7.7", "7.6", "8", "7.68"], 0,
    "ROUND(number, 1) sankhya ko dashamlav ke ek sthaan tak poornांkit (round) karta hai. 7.678 -> 7.7 (kyunki dusra ank 7 hai, isliye upar).",
    "ROUND to 1 decimal: 7.678 -> 7.7.",
    ["7.7", "7.6", "8", "7.68"]);

  b("Paper-II", "Data Processing", "MS Excel", "COUNTIF", "Hard",
    "MS Excel mein ek range mein sirf un cells ko ginne ke liye jo koi shart poori karti hain, kaunsa function hai?",
    "In MS Excel, which function counts only the cells in a range that meet a given condition?",
    ["COUNTIF", "COUNT", "COUNTA", "COUNTBLANK"], 0,
    "COUNTIF(range, criteria) sirf un cells ko ginता hai jo di gayi shart poori karti hain (jaise =COUNTIF(A1:A10,\">50\")). COUNT sirf numbers aur COUNTA sabhi non-empty cells ginता hai.",
    "COUNT + condition = COUNTIF.",
    ["COUNTIF", "COUNT", "COUNTA", "COUNTBLANK"]);

  b("Paper-II", "Data Processing", "MS Excel", "SUMIF", "Hard",
    "MS Excel mein sirf shart poori karne wali cells ka yog (sum) karne wala function kaunsa hai?",
    "In MS Excel, which function adds only the cells that meet a given condition?",
    ["SUMIF", "SUM", "ADDIF", "TOTALIF"], 0,
    "SUMIF(range, criteria, [sum_range]) sirf un cells ka yog karta hai jo shart poori karti hain (jaise =SUMIF(B1:B10,\">100\")). ADDIF/TOTALIF valid function nahi hain.",
    "SUM + condition = SUMIF.",
    ["SUMIF", "SUM", "ADDIF", "TOTALIF"]);

  b("Paper-II", "Data Processing", "MS Excel", "DIV/0 Error", "Medium",
    "MS Excel mein kisi sankhya ko shunya (zero) se bhaag dene par kaunsi error dikhti hai?",
    "In MS Excel, which error appears when a number is divided by zero?",
    ["#DIV/0!", "#NAME?", "#VALUE!", "#REF!"], 0,
    "#DIV/0! error tab aati hai jab kisi maan ko 0 (ya khaali cell) se bhaag diya jaye. #NAME? galat naam par, #REF! galat reference par aur #VALUE! galat data-type par aati hai.",
    "Divide by zero = #DIV/0!.",
    ["#DIV/0!", "#NAME?", "#VALUE!", "#REF!"]);

  b("Paper-II", "Data Processing", "MS Excel", "Freeze Panes", "Medium",
    "MS Excel mein scroll karte samay upari heading row ko sthir (visible) rakhne ke liye kya upyog karte hain?",
    "In MS Excel, what is used to keep the top heading row visible while scrolling?",
    ["Freeze Panes", "Merge Cells", "Wrap Text", "Split Text"], 0,
    "Freeze Panes chuni gayi row/column ko sthir kar deta hai taaki neeche/right scroll karne par bhi heading dikhती rahe.",
    "Keep headings visible = Freeze Panes.",
    ["Freeze Panes", "Merge Cells", "Wrap Text", "Split Text"]);

  b("Paper-II", "Data Processing", "MS Excel", "Name Box", "Medium",
    "MS Excel mein active cell ka pata (cell address) kahan dikhता hai?",
    "In MS Excel, where is the address of the active cell displayed?",
    ["Name Box (naam box)", "Formula Bar", "Status Bar", "Title Bar"], 0,
    "Name Box, formula bar ke baayen taraf hota hai aur active cell ka pata (jaise B5) dikhता hai; ismein type kar ke kisi cell/range par jaya bhi ja sakta hai.",
    "Cell address shows in Name Box.",
    ["Name Box", "Formula Bar", "Status Bar", "Title Bar"]);

  b("Paper-II", "Data Processing", "MS Excel", "Conditional Formatting", "Medium",
    "MS Excel mein shart ke aadhaar par cells ka rang/format apne aap badalne wala feature kaunsa hai?",
    "In MS Excel, which feature automatically changes cell color/format based on a condition?",
    ["Conditional Formatting", "Data Validation", "Freeze Panes", "Sorting"], 0,
    "Conditional Formatting shart poori karne par cells ko apne aap highlight/color karta hai (jaise 40 se kam maan laal). Data Validation input ko rok/niyantrit karta hai.",
    "Auto color by condition = Conditional Formatting.",
    ["Conditional Formatting", "Data Validation", "Freeze Panes", "Sorting"]);

  b("Paper-II", "Data Processing", "MS PowerPoint", "Ctrl+M New Slide", "Medium",
    "MS PowerPoint mein nayi slide jodne ki shortcut key kaunsi hai?",
    "In MS PowerPoint, which shortcut inserts a new slide?",
    ["Ctrl + M", "Ctrl + N", "Ctrl + S", "Ctrl + D"], 0,
    "Ctrl+M nayi slide jodta hai; Ctrl+N naya presentation, Ctrl+S save aur Ctrl+D slide duplicate karta hai.",
    "M = new slide (Ctrl+M).",
    ["Ctrl + M", "Ctrl + N", "Ctrl + S", "Ctrl + D"]);

  b("Paper-II", "Data Processing", "MS PowerPoint", "Animation", "Medium",
    "MS PowerPoint mein ek hi slide ke andar text ya object par lagaye jaane wale prabhav ko kya kehte hain?",
    "In MS PowerPoint, what is the effect applied to text or an object within a single slide called?",
    ["Animation", "Transition", "Theme", "Layout"], 0,
    "Animation ek slide ke andar objects (text/image) ke aane-jaane par lagta hai; Transition do slides ke beech badalne par lagta hai.",
    "Within slide = Animation; between slides = Transition.",
    ["Animation", "Transition", "Theme", "Layout"]);

  b("Paper-II", "Data Processing", "MS PowerPoint", "Rehearse Timings", "Hard",
    "MS PowerPoint mein har slide par kitna samay lagega yah abhyaas kar ke record karne wala feature kaunsa hai?",
    "In MS PowerPoint, which feature records how much time is spent on each slide during practice?",
    ["Rehearse Timings", "Slide Master", "Format Painter", "Action Button"], 0,
    "Rehearse Timings presentation ke abhyaas ke dauran har slide par lage samay ko record karta hai, jise baad mein automatic slide show ke liye upyog kiya ja sakta hai.",
    "Record per-slide time = Rehearse Timings.",
    ["Rehearse Timings", "Slide Master", "Format Painter", "Action Button"]);

  b("Paper-II", "Data Processing", "MS PowerPoint", "Notes Page", "Medium",
    "MS PowerPoint mein presenter ke liye har slide ke saath sanket/notes rakhne wala view kaunsa hai?",
    "In MS PowerPoint, which view lets the presenter keep speaker notes with each slide?",
    ["Notes Page view", "Slide Sorter view", "Reading view", "Outline view"], 0,
    "Notes Page view mein har slide ke neeche presenter apne bolne ke sanket (speaker notes) likh sakta hai, jo audience ko slide show mein nahi dikhте.",
    "Speaker notes = Notes Page view.",
    ["Notes Page view", "Slide Sorter view", "Reading view", "Outline view"]);

  b("Paper-II", "Data Processing", "MS PowerPoint", "Action Button", "Hard",
    "MS PowerPoint mein slide show ke dauran click par kisi doosri slide/file par jaane ke liye kya insert karte hain?",
    "In MS PowerPoint, what is inserted to jump to another slide/file on click during a slide show?",
    ["Action Button / Hyperlink", "Text Box", "SmartArt", "Header"], 0,
    "Action Button (ya Hyperlink) par click karne se slide show mein kisi vishesh slide, file ya website par jaya ja sakta hai - navigation ke liye upyogi.",
    "Click to navigate = Action Button/Hyperlink.",
    ["Action Button / Hyperlink", "Text Box", "SmartArt", "Header"]);

  b("Paper-II", "Data Processing", "MS Access", "Foreign Key", "Hard",
    "MS Access mein wah field jo doosri table ke primary key ko refer kar ke do tables jodता hai, kya kehlata hai?",
    "In MS Access, the field that links two tables by referring to another table's primary key is called?",
    ["Foreign key", "Primary key", "Composite key", "Candidate key"], 0,
    "Foreign key ek table ka field hai jo doosri table ke primary key se milता hai aur is tarah dono tables ke beech sambandh (relationship) banata hai.",
    "Foreign key = link to another table's primary key.",
    ["Foreign key", "Primary key", "Composite key", "Candidate key"]);

  b("Paper-II", "Data Processing", "MS Access", "Report", "Medium",
    "MS Access mein data ko vyavasthit, chhapने-yogya (printable) roop mein prastut karne ke liye kya upyog karte hain?",
    "In MS Access, what is used to present data in an organized, printable format?",
    ["Report", "Query", "Table", "Macro"], 0,
    "Report data ko sundar, vyavasthit aur chhapने-layak (print) format mein prastut karta hai; Query data khojता hai aur Table data store karti hai.",
    "Printable output = Report.",
    ["Report", "Query", "Table", "Macro"]);

  b("Paper-II", "Data Processing", "MS Access", "Macro", "Hard",
    "MS Access mein baar-baar kiye jaane wale kaamon ko automatic karne ke liye kya banaya jaata hai?",
    "In MS Access, what is created to automate repetitive tasks?",
    ["Macro", "Report", "Table", "Field"], 0,
    "Macro ek ya adhik actions ka samuh hai jo baar-baar kiye jaane wale kaamon (jaise form kholna, data filter karna) ko ek click par automatic kar deta hai.",
    "Automate tasks = Macro.",
    ["Macro", "Report", "Table", "Field"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
