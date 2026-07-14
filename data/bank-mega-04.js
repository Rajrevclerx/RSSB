/* RSSB BCI 2026 - Mega bank part 04: Pedagogy + Data Processing (MS Office) */
(function (w) {
  "use strict";
  const A = (w.RSSB_MEGA = w.RSSB_MEGA || []);
  let n = 0;
  const PFX = "MG04";
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

  b("Paper-II", "Pedagogy", "Teaching Methods", "Project Method", "Medium",
    "Project vidhi (Project Method) ke pratipadak (proponent) kaun hain?",
    "Who is the proponent of the Project Method of teaching?",
    ["W. H. Kilpatrick", "John Dewey", "Herbart", "Froebel"], 0,
    "Project method W. H. Kilpatrick ne di, jo 'learning by doing' par aadharit hai; ye John Dewey ke darshan se prabhavit hai.",
    "Project = Kilpatrick.",
    ["W. H. Kilpatrick", "John Dewey", "Herbart", "Froebel"]);

  b("Paper-II", "Pedagogy", "Teaching Methods", "Heuristic Method", "Medium",
    "Heuristic (anveshan/khoj) vidhi mein vidyarthi ki bhumika kya hoti hai?",
    "In the Heuristic method, what is the role of the student?",
    ["Khoji / anvesak (discoverer)", "Nishkriya shrota (passive listener)", "Keval notes lena", "Sirf yaad karna"], 0,
    "Heuristic vidhi (Armstrong) mein vidyarthi swayं khoj kar ke tathya aur niyam nikalta hai, shikshak margdarshak hota hai.",
    "Heuristic = 'I discover' = chhatra khoji.",
    ["Discoverer / investigator", "Passive listener", "Only note taking", "Only memorizing"]);

  b("Paper-II", "Pedagogy", "Teaching Methods", "Inductive-Deductive", "Medium",
    "Aagman (Inductive) vidhi kis disha mein chalti hai?",
    "In which direction does the Inductive method proceed?",
    ["Vishesh se samanya (particular to general)", "Samanya se vishesh (general to particular)", "Niyam se udaharan", "Abstract se abstract"], 0,
    "Aagman (inductive) vidhi mein udaharanon (vishesh) se niyam (samanya) tak jaate hain; Nigaman (deductive) iska ulta hai.",
    "Inductive = examples to rule (vishesh -> samanya).",
    ["Particular to general", "General to particular", "Rule to example", "Abstract to abstract"]);

  b("Paper-II", "Pedagogy", "Teaching Methods", "Demonstration", "Easy",
    "Pradarshan (Demonstration) vidhi mein mukhya bhumika kiski hoti hai?",
    "In the Demonstration method, whose role is primary?",
    ["Shikshak dikhaata hai, chhatra dekhte hain", "Chhatra swayं prayog karte hain", "Keval charcha hoti hai", "Keval likhaayi hoti hai"], 0,
    "Demonstration vidhi mein shikshak kriya/prayog kar ke dikhaata hai aur vidyarthi observe kar ke seekhte hain.",
    "Demonstration = teacher shows, students watch.",
    ["Teacher demonstrates, students observe", "Students perform experiments themselves", "Only discussion", "Only writing"]);

  b("Paper-II", "Pedagogy", "Teaching Methods", "Lecture Method", "Easy",
    "Vyakhyan (Lecture) vidhi ka mukhya dosh (limitation) kya hai?",
    "What is the main limitation of the Lecture method?",
    ["Vidyarthi nishkriya (passive) rehte hain", "Bahut samay lagta hai", "Adhik shikshak chahiye", "Mehnga hota hai"], 0,
    "Lecture vidhi shikshak-kendrit hai jismein vidyarthi mukhyatah nishkriya shrota bane rehte hain, isliye yah iska badaa dosh hai.",
    "Lecture = teacher-centred, students passive.",
    ["Students remain passive", "Takes too much time", "Needs many teachers", "It is expensive"]);

  b("Paper-II", "Pedagogy", "Learning Theories", "Piaget", "Medium",
    "Jean Piaget ke sangyanaatmak vikas (cognitive development) ka pehla charan kaunsa hai?",
    "Which is the first stage of Jean Piaget's cognitive development?",
    ["Sensorimotor (0-2 varsh)", "Preoperational (2-7 varsh)", "Concrete operational (7-11 varsh)", "Formal operational (11+ varsh)"], 0,
    "Piaget ke 4 charan: Sensorimotor (0-2), Preoperational (2-7), Concrete operational (7-11), Formal operational (11+). Pehla Sensorimotor hai.",
    "Order: Sensori -> Pre -> Concrete -> Formal.",
    ["Sensorimotor (0-2 yrs)", "Preoperational (2-7 yrs)", "Concrete operational (7-11 yrs)", "Formal operational (11+ yrs)"]);

  b("Paper-II", "Pedagogy", "Learning Theories", "Vygotsky", "Medium",
    "Vygotsky ke anusaar 'ZPD' (Zone of Proximal Development) kya darshata hai?",
    "According to Vygotsky, what does 'ZPD' (Zone of Proximal Development) represent?",
    ["Jo bachcha sahayta se kar sakta hai aur akela jo kar sakta hai, uske beech ka antar", "Bachche ki umar", "Buddhilabdhi (IQ)", "Smriti ki simaa"], 0,
    "ZPD wah kshetra hai jo bachche ke swatantra star aur margdarshan/sahayता (scaffolding) se prapt star ke beech hota hai.",
    "ZPD = gap between 'alone' and 'with help'.",
    ["Gap between what a child can do with help and alone", "Age of the child", "IQ", "Limit of memory"]);

  b("Paper-II", "Pedagogy", "Learning Theories", "Constructivism", "Medium",
    "Nirmaanvad (Constructivism) ke anusaar gyan kaise banta hai?",
    "According to Constructivism, how is knowledge formed?",
    ["Sikhne wala swayं anubhav se gyan ka nirmaan karta hai", "Shikshak gyan sthanantarit karta hai", "Gyan janm-jaat hota hai", "Gyan keval yaad se aata hai"], 0,
    "Constructivism (Piaget, Vygotsky) maanta hai ki sikhne wala apne purv-anubhav aur nayi jaankari ko jodkar swayं gyan ka nirmaan (construct) karta hai.",
    "Constructivism = learner builds own knowledge.",
    ["Learner constructs knowledge through experience", "Teacher transfers knowledge", "Knowledge is innate", "Knowledge comes only from memory"]);

  b("Paper-II", "Pedagogy", "Learning Theories", "Behaviorism", "Medium",
    "Operant conditioning (kriya-prasut anukoolan) ka siddhant kisne diya?",
    "Who gave the theory of Operant Conditioning?",
    ["B. F. Skinner", "Ivan Pavlov", "J. B. Watson", "Kohler"], 0,
    "B. F. Skinner ne operant conditioning diya jismein pratikriya (reinforcement) se vyavhaar badalta hai; Pavlov ne classical conditioning di.",
    "Operant = Skinner; Classical = Pavlov.",
    ["B. F. Skinner", "Ivan Pavlov", "J. B. Watson", "Kohler"]);

  b("Paper-II", "Pedagogy", "Learning Theories", "Classical Conditioning", "Easy",
    "Classical conditioning (kutte-ghanti wala prayog) kisse sambandhit hai?",
    "Classical conditioning (the dog-bell experiment) is associated with whom?",
    ["Ivan Pavlov", "Skinner", "Thorndike", "Bandura"], 0,
    "Ivan Pavlov ne kutte par ghanti-bhojan wala prayog kiya, jo classical conditioning ka aadhaar hai.",
    "Dog + bell = Pavlov.",
    ["Ivan Pavlov", "Skinner", "Thorndike", "Bandura"]);

  b("Paper-II", "Pedagogy", "Learning Theories", "Bloom's Taxonomy", "Medium",
    "Bloom ki taxonomy ke sangyanaatmak (cognitive) domain ka sabse nichla star kaunsa hai?",
    "Which is the lowest level of the cognitive domain in Bloom's Taxonomy?",
    ["Gyan/Smriti (Knowledge/Remember)", "Vishleshan (Analysis)", "Mulyankan (Evaluation)", "Sanshleshan (Synthesis/Create)"], 0,
    "Bloom ke cognitive domain ka kram: Knowledge/Remember -> Comprehend -> Apply -> Analyse -> Evaluate/Synthesize. Sabse nichla Knowledge/Remember hai.",
    "Lowest = Remember/Knowledge; Highest = Create.",
    ["Knowledge / Remember", "Analysis", "Evaluation", "Synthesis / Create"]);

  b("Paper-II", "Pedagogy", "Learning Theories", "Learning by Doing", "Easy",
    "'Learning by doing' (kar ke seekhna) ka siddhant kisne diya?",
    "Who propounded 'Learning by doing'?",
    ["John Dewey", "Skinner", "Pavlov", "Watson"], 0,
    "John Dewey ne 'learning by doing' par bal diya, jo project method ka aadhaar bana.",
    "Learning by doing = John Dewey.",
    ["John Dewey", "Skinner", "Pavlov", "Watson"]);

  b("Paper-II", "Pedagogy", "Evaluation", "Formative Evaluation", "Medium",
    "Nirantar sikhne ke dauran, sudhaar ke liye kiya jaane wala mulyankan kya kehlata hai?",
    "Evaluation done during the learning process, for improvement, is called?",
    ["Formative (rachnatmak) evaluation", "Summative (yogatmak) evaluation", "Diagnostic (nidानatmak) evaluation", "Placement evaluation"], 0,
    "Formative (rachnatmak) mulyankan sikhne ke dauran chalta rehta hai taaki feedback se sudhaar ho; Summative ant mein hota hai.",
    "Formative = during (for improvement); Summative = end (for grading).",
    ["Formative evaluation", "Summative evaluation", "Diagnostic evaluation", "Placement evaluation"]);

  b("Paper-II", "Pedagogy", "Evaluation", "Summative Evaluation", "Easy",
    "Satra/course ke ant mein grade dene ke liye kiya jaane wala mulyankan kya hai?",
    "Evaluation done at the end of a course to assign grades is called?",
    ["Summative (yogatmak)", "Formative (rachnatmak)", "Diagnostic (nidानatmak)", "Continuous"], 0,
    "Summative (yogatmak) mulyankan course/satra ke ant mein uplabdhi maapne aur grade dene ke liye hota hai.",
    "End-of-course exam = Summative.",
    ["Summative", "Formative", "Diagnostic", "Continuous"]);

  b("Paper-II", "Pedagogy", "Evaluation", "Diagnostic Evaluation", "Medium",
    "Vidyarthi ki sikhne sambandhi kamziyon/dosh ko pehchanne wala mulyankan kya kehlata hai?",
    "Evaluation that identifies a student's learning weaknesses/difficulties is called?",
    ["Diagnostic (nidानatmak) evaluation", "Summative evaluation", "Norm-referenced test", "Aptitude test"], 0,
    "Diagnostic (nidानatmak) mulyankan sikhne ki kathinaiyon aur unke kaaranon ko pehchan kar upचaratmak shikshan mein madad karta hai.",
    "Diagnostic = find the weakness/cause.",
    ["Diagnostic evaluation", "Summative evaluation", "Norm-referenced test", "Aptitude test"]);

  b("Paper-II", "Pedagogy", "Evaluation", "Objective vs Essay", "Medium",
    "Nibandhaatmak (essay) prashno ki tulna mein vastunishth (objective) prashno ka mukhya laabh kya hai?",
    "Compared to essay questions, what is the main advantage of objective questions?",
    ["Adhik vishwasniya aur nishpaksh (objective) scoring", "Uच्च star ki soch aankna", "Lekhan kaushal aankna", "Banana aasaan hai"], 0,
    "Objective prashno mein ek hi sahi uttar hota hai, isliye scoring vishwasniya aur nishpaksh hoti hai; essay mein scoring vyaktinishth ho sakti hai.",
    "Objective = reliable/uniform scoring.",
    ["More reliable, unbiased scoring", "Tests higher-order thinking", "Tests writing skill", "Easy to construct"]);

  b("Paper-II", "Pedagogy", "Teaching Learning Process", "Action Research", "Medium",
    "Kriyatmak anusandhaan (Action Research) mukhyatah kis uddeshya se hota hai?",
    "Action research is mainly conducted for what purpose?",
    ["Shikshak apni classroom samasya ka turant samadhaan karna", "Naye siddhant banana", "Sarvvyapi niyam banana", "Sirf publication ke liye"], 0,
    "Action research shikshak dwara apni hi kaksha/vidyalaya ki vyavaharik samasya ko suljhaane aur abhyaas sudhaarne ke liye kiya jaata hai.",
    "Action research = solve own classroom problem.",
    ["Teacher solving own classroom problem", "Building new theories", "Making universal laws", "Only for publication"]);

  b("Paper-II", "Pedagogy", "Educational Technology", "Teaching Aids", "Easy",
    "Shikshan sahayak samagri (teaching aids) ka mukhya uddeshya kya hai?",
    "What is the main purpose of teaching aids?",
    ["Vishay ko rochak evं spasht banana", "Samay barbaad karna", "Shikshak ki jagah lena", "Anushasan todna"], 0,
    "Teaching aids (charts, models, projector aadi) vishay-vastu ko thos, rochak aur samajhne mein aasaan banaate hain.",
    "Aids = make concept clear & interesting.",
    ["Make content interesting & clear", "Waste time", "Replace the teacher", "Break discipline"]);

  b("Paper-II", "Pedagogy", "Educational Technology", "Edgar Dale", "Medium",
    "Edgar Dale ke 'Cone of Experience' ke anusaar sabse thos (concrete) anubhav kaunsa hai?",
    "According to Edgar Dale's 'Cone of Experience', which is the most concrete experience?",
    ["Pratyaksh, uddeshyapurn anubhav (direct purposeful experience)", "Shabdik prateek (verbal symbols)", "Chitra/tasveer", "Radio/audio"], 0,
    "Dale ke cone ke nichle sire par pratyaksh, uddeshyapurn anubhav (sabse thos) aur upari sire par shabdik prateek (sabse abstract) hote hain.",
    "Cone base = direct experience (concrete); top = words (abstract).",
    ["Direct purposeful experience", "Verbal symbols", "Pictures", "Radio / audio"]);

  b("Paper-II", "Pedagogy", "Motivation", "Intrinsic Motivation", "Medium",
    "Aantarik prerna (intrinsic motivation) ka udaharan kaunsa hai?",
    "Which is an example of intrinsic motivation?",
    ["Seekhne ke aanand ke liye padhna", "Inaam paane ke liye padhna", "Saza se bachne ke liye padhna", "Marks ke liye padhna"], 0,
    "Aantarik prerna vyakti ke andar se aati hai (jaise ruchi/aanand), jabki bahari prerna (inaam, saza, marks) bahar se aati hai.",
    "Intrinsic = joy/interest from within; extrinsic = reward/marks.",
    ["Studying for the joy of learning", "Studying to get a reward", "Studying to avoid punishment", "Studying only for marks"]);

  b("Paper-II", "Pedagogy", "Motivation", "Maslow", "Medium",
    "Maslow ki avashyakta padanukram (hierarchy of needs) mein sabse upar kaunsi avashyakta hai?",
    "In Maslow's hierarchy of needs, which need is at the top?",
    ["Aatm-siddhi (Self-actualization)", "Sharirik (Physiological)", "Suraksha (Safety)", "Samman (Esteem)"], 0,
    "Maslow ka kram: Physiological -> Safety -> Belonging -> Esteem -> Self-actualization (sabse upar).",
    "Top of pyramid = Self-actualization.",
    ["Self-actualization", "Physiological", "Safety", "Esteem"]);

  b("Paper-II", "Pedagogy", "Classroom Management", "Discipline", "Medium",
    "Aadhunik shiksha ke anusaar sabse achha anushasan (discipline) kaunsa maana jaata hai?",
    "According to modern education, which type of discipline is considered best?",
    ["Aatm-anushasan (self-discipline)", "Bhay/dand par aadharit", "Baahri niyantran", "Kathor sazaa"], 0,
    "Aadhunik shiksha aatm-anushasan (self-discipline) ko shreshth maanti hai, jismein vidyarthi swayं samajhkar niyam paalan karta hai.",
    "Best discipline = self-discipline.",
    ["Self-discipline", "Based on fear/punishment", "External control", "Harsh punishment"]);

  b("Paper-II", "Pedagogy", "Child Psychology", "Individual Differences", "Medium",
    "Kaksha mein 'vaiyaktik bhinnata' (individual differences) ka shikshan mein kya arth hai?",
    "What does catering to 'individual differences' mean in teaching?",
    ["Har vidyarthi ki avashyakta/star ke anusaar padhaana", "Sabko ek jaisa padhaana", "Sirf tez chhatron par dhyan", "Sabko ek hi gati se padhaana"], 0,
    "Vaiyaktik bhinnata maanti hai ki har vidyarthi alag hai; isliye shikshak ko unki alag-alag avashyakta aur star ke anusaar padhाना chahiye.",
    "Individual differences = teach as per each learner's level.",
    ["Teach per each student's need/level", "Teach everyone the same way", "Focus only on bright students", "Teach all at one pace"]);

  b("Paper-II", "Pedagogy", "Communication Skills", "Feedback", "Easy",
    "Sanchar (communication) prakriya mein 'feedback' ka kya mahatva hai?",
    "What is the importance of 'feedback' in the communication process?",
    ["Sandesh sahi samjha gaya ya nahi, yah confirm karta hai", "Sandesh ko lamba karta hai", "Shor (noise) badhata hai", "Bhasha badalta hai"], 0,
    "Feedback grahakarta se bhejne wale tak wapas jaane wali pratikriya hai, jo dwidishayi (two-way) sanchar poora kar ke samajh ki pushti karti hai.",
    "Feedback = confirms message was understood (two-way).",
    ["Confirms if message was understood", "Lengthens the message", "Increases noise", "Changes the language"]);

  b("Paper-II", "Pedagogy", "Teaching Aptitude", "Micro Teaching", "Medium",
    "Sukshm shikshan (Micro Teaching) ki mukhya visheshta kya hai?",
    "What is the main feature of Micro Teaching?",
    ["Chhote group ko kam samay mein ek kaushal ka abhyaas", "Poori class ko poora vishay padhाना", "Ghar par padhाना", "Bina taiyari padhाना"], 0,
    "Micro teaching mein chhote vidyarthi-samuh (5-10) ko kam samay (5-10 min) mein ek-ek shikshan kaushal ka abhyaas kar ke feedback liya jaata hai.",
    "Micro teaching = one skill, small group, short time.",
    ["Practice of one skill with small group in short time", "Teaching full syllabus to whole class", "Teaching at home", "Teaching without preparation"]);

  /* ================= DATA PROCESSING / MS OFFICE (~25) ================= */

  b("Paper-II", "Data Processing", "MS Word", "Mail Merge", "Medium",
    "MS Word mein Mail Merge ka mukhya upyog kya hai?",
    "What is the main use of Mail Merge in MS Word?",
    ["Ek hi letter ko kai pate/naamon ke saath banana", "Do documents ko jodna", "Spelling theek karna", "Image insert karna"], 0,
    "Mail Merge ek main document (letter) ko ek data source (naam/pate ki list) se jodkar har vyakti ke liye personalized letter banata hai.",
    "Mail Merge = one letter -> many recipients.",
    ["Create one letter for many addresses/names", "Merge two documents", "Fix spelling", "Insert image"]);

  b("Paper-II", "Data Processing", "MS Word", "Shortcut", "Easy",
    "MS Word mein selected text ko bold karne ke liye shortcut key kaunsi hai?",
    "In MS Word, which shortcut key makes selected text bold?",
    ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + D"], 0,
    "Ctrl+B = Bold, Ctrl+I = Italic, Ctrl+U = Underline.",
    "B = Bold.",
    ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + D"]);

  b("Paper-II", "Data Processing", "MS Word", "Find & Replace", "Easy",
    "MS Word mein 'Find and Replace' dialog box kholne ki shortcut key kaunsi hai?",
    "In MS Word, which shortcut opens the 'Find and Replace' (Replace) dialog box?",
    ["Ctrl + H", "Ctrl + F", "Ctrl + R", "Ctrl + P"], 0,
    "Ctrl+H = Replace, Ctrl+F = Find, Ctrl+P = Print, Ctrl+R = right align.",
    "H = replace (Ctrl+H).",
    ["Ctrl + H", "Ctrl + F", "Ctrl + R", "Ctrl + P"]);

  b("Paper-II", "Data Processing", "MS Word", "Gutter Margin", "Medium",
    "MS Word mein 'Gutter margin' kis liye jodi jaati hai?",
    "In MS Word, why is a 'Gutter margin' added?",
    ["Binding/jild ke liye atirikt jagah dene ke liye", "Header ke liye", "Footer ke liye", "Page number ke liye"], 0,
    "Gutter margin document ko bind (jild) karte samay khoyi jagah ki bharpayi ke liye normal margin ke atirikt jagah chhodta hai.",
    "Gutter = extra space for binding.",
    ["To give extra space for binding", "For header", "For footer", "For page number"]);

  b("Paper-II", "Data Processing", "MS Word", "WordArt", "Easy",
    "MS Word mein 'WordArt' ka upyog kya hai?",
    "What is 'WordArt' used for in MS Word?",
    ["Sajavati/decorative text banana", "Table banana", "Formula lagana", "Macro record karna"], 0,
    "WordArt text ko rangeen, ghumavdaar aur sajावати (decorative/stylized) roop mein dikhata hai.",
    "WordArt = decorative/stylized text.",
    ["Create decorative text", "Create a table", "Apply a formula", "Record a macro"]);

  b("Paper-II", "Data Processing", "MS Word", "Bookmark", "Medium",
    "MS Word mein 'Bookmark' ka kya kaam hai?",
    "What is the function of a 'Bookmark' in MS Word?",
    ["Document mein kisi vishesh sthan ko naam dekar chihnit karna", "Text ko bold karna", "Page delete karna", "File save karna"], 0,
    "Bookmark document ke kisi sthan/text ko ek naam se chihnit karta hai taaki us par turant jaya (navigate) ja sake.",
    "Bookmark = named location to jump to.",
    ["Mark a specific location by name to jump to", "Make text bold", "Delete a page", "Save the file"]);

  b("Paper-II", "Data Processing", "MS Excel", "Absolute Reference", "Medium",
    "MS Excel mein $A$1 kis prakaar ka cell reference hai?",
    "In MS Excel, what type of cell reference is $A$1?",
    ["Absolute (nirpeksh) reference", "Relative (sापeksh) reference", "Mixed reference", "Circular reference"], 0,
    "$A$1 mein column aur row dono par $ hai, isliye copy karne par yah nahi badalta - yah absolute reference hai. A1 relative aur $A1/A$1 mixed hote hain.",
    "$ locks it -> $A$1 = absolute.",
    ["Absolute reference", "Relative reference", "Mixed reference", "Circular reference"]);

  b("Paper-II", "Data Processing", "MS Excel", "SUM Function", "Easy",
    "MS Excel mein A1 se A10 tak ke yog (sum) ke liye sahi formula kaunsa hai?",
    "In MS Excel, which formula correctly sums A1 to A10?",
    ["=SUM(A1:A10)", "=SUM(A1-A10)", "=TOTAL(A1:A10)", "=ADD(A1:A10)"], 0,
    "SUM function range colon (:) ke saath likha jaata hai: =SUM(A1:A10). TOTAL aur ADD valid Excel functions nahi hain.",
    "Range = colon; =SUM(A1:A10).",
    ["=SUM(A1:A10)", "=SUM(A1-A10)", "=TOTAL(A1:A10)", "=ADD(A1:A10)"]);

  b("Paper-II", "Data Processing", "MS Excel", "AVERAGE", "Easy",
    "MS Excel mein kisi range ka ausat (average) nikalne wala function kaunsa hai?",
    "In MS Excel, which function calculates the average of a range?",
    ["AVERAGE", "MEAN", "SUM", "COUNT"], 0,
    "AVERAGE() function diye gaye numbers ka ausat deta hai; MEAN naam ka koi function Excel mein nahi hai.",
    "Average function name = AVERAGE (not MEAN).",
    ["AVERAGE", "MEAN", "SUM", "COUNT"]);

  b("Paper-II", "Data Processing", "MS Excel", "COUNT", "Medium",
    "MS Excel mein COUNT function kya ginta (count) hai?",
    "In MS Excel, what does the COUNT function count?",
    ["Sirf sankhya (numeric) wali cells", "Sabhi cells", "Sirf khaali cells", "Sirf text wali cells"], 0,
    "COUNT keval un cells ko ginta hai jinmein numbers hain. Sabhi non-empty cells COUNTA se, aur text/condition COUNTIF se gine jaate hain.",
    "COUNT = numbers only; COUNTA = all non-empty.",
    ["Only cells containing numbers", "All cells", "Only empty cells", "Only cells with text"]);

  b("Paper-II", "Data Processing", "MS Excel", "VLOOKUP", "Medium",
    "MS Excel mein VLOOKUP function kis disha mein khoj (lookup) karta hai?",
    "In MS Excel, in which direction does VLOOKUP search?",
    ["Table ke sabse baayen column mein oordhvadhar (vertical)", "Sabse upari row mein kshaitij (horizontal)", "Diagonal roop mein", "Keval single cell mein"], 0,
    "VLOOKUP (V = Vertical) table ke sabse baayen column mein value dhoondhta hai aur usi row se dusre column ka maan lautaata hai. Row-wise khoj HLOOKUP karta hai.",
    "V=Vertical (left column); H=Horizontal (top row).",
    ["Vertically in the leftmost column", "Horizontally in the top row", "Diagonally", "Only in a single cell"]);

  b("Paper-II", "Data Processing", "MS Excel", "IF Function", "Medium",
    "MS Excel mein IF function ka sahi syntax kaunsa hai?",
    "In MS Excel, which is the correct syntax of the IF function?",
    ["=IF(condition, value_if_true, value_if_false)", "=IF(value_if_true, condition, value_if_false)", "=IF(condition; true)", "=IF(true, false)"], 0,
    "IF ka syntax: =IF(logical_test, value_if_true, value_if_false) - pehle shart, phir sahi hone par maan, phir galat hone par maan.",
    "IF(condition, true, false).",
    ["=IF(condition, value_if_true, value_if_false)", "=IF(value_if_true, condition, value_if_false)", "=IF(condition; true)", "=IF(true, false)"]);

  b("Paper-II", "Data Processing", "MS Excel", "What-If Analysis", "Hard",
    "MS Excel mein ek target result paane ke liye ek input value ka ulta pata lagane wala tool kaunsa hai?",
    "In MS Excel, which tool finds the required input value to achieve a target result?",
    ["Goal Seek", "Scenario Manager", "Data Table", "Pivot Table"], 0,
    "Goal Seek (What-If Analysis) ek known result se peeche ki or ek input cell ka aavashyak maan nikalta hai. Scenario Manager kai input-set tulna karta hai.",
    "Goal Seek = reverse-solve one input for a target.",
    ["Goal Seek", "Scenario Manager", "Data Table", "Pivot Table"]);

  b("Paper-II", "Data Processing", "MS Excel", "What-If Analysis", "Hard",
    "MS Excel ke What-If Analysis mein alag-alag input-samuh (input sets) sahej kar tulna karne wala tool kaunsa hai?",
    "In Excel's What-If Analysis, which tool saves and compares different sets of input values?",
    ["Scenario Manager", "Goal Seek", "Solver", "AutoSum"], 0,
    "Scenario Manager kai alag-alag input mano ke samuh (scenarios) sahejta hai aur unke parinaam ki tulna karta hai. Goal Seek ek hi input solve karta hai.",
    "Scenario Manager = compare multiple input sets.",
    ["Scenario Manager", "Goal Seek", "Solver", "AutoSum"]);

  b("Paper-II", "Data Processing", "MS Excel", "Charts", "Medium",
    "MS Excel mein samay ke saath aankdon ka lagataar rujhaan (trend) dikhane ke liye sabse upyukt chart kaunsa hai?",
    "In MS Excel, which chart is most suitable to show a continuous trend over time?",
    ["Line chart", "Pie chart", "Column chart", "Doughnut chart"], 0,
    "Line chart samay ke saath nirantar parivartan/trend dikhaane ke liye sabse upyukt hai; Pie chart hisso (percentage) ke liye upyog hota hai.",
    "Trend over time = Line chart.",
    ["Line chart", "Pie chart", "Column chart", "Doughnut chart"]);

  b("Paper-II", "Data Processing", "MS Excel", "Insert Row", "Easy",
    "MS Excel mein jab aap ek nayi row insert karte hain to woh chuni gayi row ke kahan aati hai?",
    "In MS Excel, when you insert a new row, where does it appear relative to the selected row?",
    ["Chuni gayi row ke upar", "Chuni gayi row ke neeche", "Sheet ke ant mein", "Sheet ke shuru mein"], 0,
    "Excel nayi row ko hamesha chuni gayi (selected) row ke upar (above) insert karta hai; naya column chune gaye column ke baayen (left) aata hai.",
    "New row = above; new column = left.",
    ["Above the selected row", "Below the selected row", "At the end of the sheet", "At the start of the sheet"]);

  b("Paper-II", "Data Processing", "MS PowerPoint", "Slide Show", "Easy",
    "MS PowerPoint mein pehli slide se slide show shuru karne ki shortcut key kaunsi hai?",
    "In MS PowerPoint, which shortcut starts the slide show from the first slide?",
    ["F5", "Shift + F5", "F2", "Esc"], 0,
    "F5 slide show ko pehli slide se shuru karta hai; Shift+F5 current (vartaman) slide se shuru karta hai.",
    "F5 = from first; Shift+F5 = from current.",
    ["F5", "Shift + F5", "F2", "Esc"]);

  b("Paper-II", "Data Processing", "MS PowerPoint", "Slide Show", "Medium",
    "MS PowerPoint mein vartaman (current) slide se slide show shuru karne ki shortcut key kaunsi hai?",
    "In MS PowerPoint, which shortcut starts the slide show from the current slide?",
    ["Shift + F5", "F5", "Ctrl + F5", "Alt + F5"], 0,
    "Shift+F5 slide show ko vartaman (current) slide se shuru karta hai; keval F5 pehli slide se shuru karta hai.",
    "Shift+F5 = from current slide.",
    ["Shift + F5", "F5", "Ctrl + F5", "Alt + F5"]);

  b("Paper-II", "Data Processing", "MS PowerPoint", "Slide Sorter", "Medium",
    "MS PowerPoint mein saari slides ko ek saath thumbnail roop mein dekhne aur unhe punarvyavasthit (reorder) karne wala view kaunsa hai?",
    "In MS PowerPoint, which view shows all slides as thumbnails together and lets you reorder them?",
    ["Slide Sorter view", "Normal view", "Reading view", "Notes Page view"], 0,
    "Slide Sorter view saari slides ko chhoti thumbnail ke roop mein dikhata hai jisse unhe aasaani se reorder/delete kiya ja sakta hai.",
    "Reorder slides = Slide Sorter view.",
    ["Slide Sorter view", "Normal view", "Reading view", "Notes Page view"]);

  b("Paper-II", "Data Processing", "MS PowerPoint", "Slide Master", "Medium",
    "MS PowerPoint mein sabhi slides par ek saath ek jaisa design/format lagane ke liye kya upyog karte hain?",
    "In MS PowerPoint, what is used to apply a uniform design/format to all slides at once?",
    ["Slide Master", "Slide Sorter", "Transition", "Animation"], 0,
    "Slide Master ek master slide hoti hai jismein kiya gaya badlaav (font, color, logo) sabhi slides par apne aap laागू ho jaata hai.",
    "Slide Master = one change -> all slides.",
    ["Slide Master", "Slide Sorter", "Transition", "Animation"]);

  b("Paper-II", "Data Processing", "MS PowerPoint", "Transition vs Animation", "Hard",
    "MS PowerPoint mein ek slide se doosri slide par jaate samay dikhne wala prabhav (effect) kya kehlata hai?",
    "In MS PowerPoint, the effect seen while moving from one slide to the next slide is called?",
    ["Transition", "Animation", "Design", "Layout"], 0,
    "Transition do slides ke beech ka effect hai; Animation ek hi slide ke andar objects (text/image) par lagaya jaata hai.",
    "Between slides = Transition; within a slide = Animation.",
    ["Transition", "Animation", "Design", "Layout"]);

  b("Paper-II", "Data Processing", "MS Access", "Primary Key", "Medium",
    "MS Access mein table ke har record ko viशishट (unique) roop se pehchanne wala field kya kehlata hai?",
    "In MS Access, the field that uniquely identifies each record in a table is called?",
    ["Primary key", "Foreign key", "Query", "Form"], 0,
    "Primary key har record ko viशishट roop se pehchanta hai; iska maan repeat ya khaali (null) nahi ho sakta.",
    "Primary key = unique, no duplicate/null.",
    ["Primary key", "Foreign key", "Query", "Form"]);

  b("Paper-II", "Data Processing", "MS Access", "Query", "Medium",
    "MS Access mein diye gaye maapdand (criteria) ke aadhaar par data nikalne/dhoondhne ke liye kya upyog karte hain?",
    "In MS Access, what is used to retrieve/find data based on given criteria?",
    ["Query", "Form", "Report", "Macro"], 0,
    "Query ek ya adhik tables se shart (criteria) ke aadhaar par data khoज kar dikhata hai; Form data entry ke liye aur Report chhapाई ke liye hai.",
    "Query = ask/retrieve data by criteria.",
    ["Query", "Form", "Report", "Macro"]);

  b("Paper-II", "Data Processing", "MS Access", "Table", "Easy",
    "MS Access database mein data vaastav mein (actually) kahan store hota hai?",
    "In an MS Access database, where is the data actually stored?",
    ["Tables", "Forms", "Reports", "Macros"], 0,
    "Tables database ki nींv hain jahan vaastavik data rows (records) aur columns (fields) mein store hota hai; Forms/Reports usi data ko dikhaane ke tarike hain.",
    "Data lives in Tables.",
    ["Tables", "Forms", "Reports", "Macros"]);

  b("Paper-II", "Data Processing", "Presentation Software", "Odd One Out", "Medium",
    "Nimn mein se kaunsa presentation software NAHI hai (odd one out)?",
    "Which of the following is NOT a presentation software (odd one out)?",
    ["MS Excel", "MS PowerPoint", "Google Slides", "Apple Keynote"], 0,
    "PowerPoint, Google Slides aur Keynote presentation software hain; MS Excel ek spreadsheet software hai, isliye yah odd one out hai.",
    "Excel = spreadsheet, not presentation.",
    ["MS Excel", "MS PowerPoint", "Google Slides", "Apple Keynote"]);

  // === QUESTIONS END ===
})(typeof window !== "undefined" ? window : globalThis);
