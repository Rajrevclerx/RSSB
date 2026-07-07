/*
 * RSSB BCI 2026 - Deterministic question generator.
 *
 * Har question ka correct answer yahin JavaScript mein compute hota hai,
 * isliye ye 100% factually correct hote hain (number system, arithmetic,
 * reasoning). Templates nahi hain - asli solvable questions hain.
 *
 * Browser mein: window.RSSB_GENERATED array set hota hai.
 * Node mein: module.exports = generate function (testing ke liye).
 */
(function (root) {
  "use strict";

  // ---- helpers ---------------------------------------------------------

  // 4 distinct options banata hai: correct + 3 wrong. Correct ko seed ke
  // hisaab se rotate karke place karta hai taaki answer hamesha ek position
  // par na ho. Return: { options, answer }.
  function pickOptions(correct, candidates, seed) {
    const correctStr = String(correct);
    const wrong = [];
    const seen = new Set([correctStr]);
    for (const c of candidates) {
      const s = String(c);
      if (seen.has(s)) continue;
      seen.add(s);
      wrong.push(s);
      if (wrong.length === 3) break;
    }
    // Agar candidates kam pade to safe padding.
    let pad = 1;
    while (wrong.length < 3) {
      const s = correctStr + "*".repeat(pad);
      if (!seen.has(s)) {
        seen.add(s);
        wrong.push(s);
      }
      pad++;
    }
    const answer = seed % 4;
    const options = [];
    let wi = 0;
    for (let i = 0; i < 4; i++) {
      if (i === answer) options.push(correctStr);
      else options.push(wrong[wi++]);
    }
    return { options, answer };
  }

  function build(o) {
    return {
      id: o.id,
      paper: o.paper,
      subject: o.subject,
      topic: o.topic,
      subtopic: o.subtopic,
      difficulty: o.difficulty,
      question: `${o.qHi}\n${o.qEn}`,
      questionHi: o.qHi,
      questionEn: o.qEn,
      options: o.options.map((op, i) => `${op} / ${(o.optionsEn || o.options)[i]}`),
      optionsHi: o.options,
      optionsEn: o.optionsEn || o.options,
      answer: o.answer,
      explanation: o.explanation,
      trick: o.trick,
      time: o.time || 40,
      sourceType: "Computed practice (auto-verified)"
    };
  }

  function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
  function lcm(a, b) { return (a * b) / gcd(a, b); }

  const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // ---- generators ------------------------------------------------------

  const out = [];
  let counter = 0;
  const seen = new Set();

  function push(item) {
    const key = item.questionHi;
    if (seen.has(key)) return;
    seen.add(key);
    counter++;
    item.id = `GEN-${String(counter).padStart(5, "0")}`;
    out.push(item);
  }

  // Decimal numbers pool for conversions (5..50 sabhi + selected bade).
  const decPool = [];
  for (let d = 5; d <= 50; d++) decPool.push(d);
  [55, 60, 63, 64, 68, 72, 80, 85, 90, 96, 100, 120, 125, 127, 128, 150, 170,
    192, 200, 255, 256].forEach(d => decPool.push(d));

  // 1) Decimal -> Binary
  decPool.forEach((n, i) => {
    const correct = n.toString(2);
    const cands = [(n + 1).toString(2), (n - 1).toString(2), (n * 2).toString(2), "1" + correct];
    const { options, answer } = pickOptions(correct, cands, i);
    push(build({
      paper: "Paper-II", subject: "Fundamentals of Computer", topic: "Number System",
      subtopic: "Decimal to Binary", difficulty: "Medium",
      qHi: `Decimal number ${n} ka binary equivalent kya hai?`,
      qEn: `What is the binary equivalent of decimal number ${n}?`,
      options, answer,
      explanation: `${n} ko 2 se baar-baar divide karke remainders ulte order mein likho: ${n} = (${correct})₂.`,
      trick: "Bar-bar 2 se divide, remainder neeche se upar padho.", time: 45
    }));
  });

  // 2) Binary -> Decimal
  decPool.forEach((n, i) => {
    const bin = n.toString(2);
    const correct = n;
    const cands = [n + 1, n - 1, parseInt(bin, 10) || n + 2, n * 2];
    const { options, answer } = pickOptions(correct, cands, i + 1);
    push(build({
      paper: "Paper-II", subject: "Fundamentals of Computer", topic: "Number System",
      subtopic: "Binary to Decimal", difficulty: "Medium",
      qHi: `Binary number (${bin})₂ ka decimal value kya hai?`,
      qEn: `What is the decimal value of binary number (${bin})₂?`,
      options, answer,
      explanation: `Har bit ko uski 2 ki power se multiply karke jodo: (${bin})₂ = ${n}.`,
      trick: "Right se powers: 1,2,4,8,16... jaha 1 wahi power jodo.", time: 45
    }));
  });

  // 3) Decimal -> Hexadecimal
  decPool.forEach((n, i) => {
    const correct = n.toString(16).toUpperCase();
    const cands = [(n + 1).toString(16).toUpperCase(), (n - 1).toString(16).toUpperCase(),
      n.toString(8), (n * 2).toString(16).toUpperCase()];
    const { options, answer } = pickOptions(correct, cands, i + 2);
    push(build({
      paper: "Paper-II", subject: "Fundamentals of Computer", topic: "Number System",
      subtopic: "Decimal to Hexadecimal", difficulty: "Medium",
      qHi: `Decimal number ${n} ka hexadecimal equivalent kya hai?`,
      qEn: `What is the hexadecimal equivalent of decimal number ${n}?`,
      options, answer,
      explanation: `${n} ko 16 se divide karke remainders (10=A...15=F) ulte order mein: ${n} = (${correct})₁₆.`,
      trick: "16 se divide, remainder 10-15 ko A-F likho.", time: 45
    }));
  });

  // 4) Hexadecimal -> Decimal
  decPool.forEach((n, i) => {
    const hex = n.toString(16).toUpperCase();
    const correct = n;
    const cands = [n + 1, n - 1, n + 16, parseInt(hex, 10) || n + 2];
    const { options, answer } = pickOptions(correct, cands, i + 3);
    push(build({
      paper: "Paper-II", subject: "Fundamentals of Computer", topic: "Number System",
      subtopic: "Hexadecimal to Decimal", difficulty: "Medium",
      qHi: `Hexadecimal number (${hex})₁₆ ka decimal value kya hai?`,
      qEn: `What is the decimal value of hexadecimal number (${hex})₁₆?`,
      options, answer,
      explanation: `Har hex digit ko 16 ki power se multiply karo (A=10...F=15): (${hex})₁₆ = ${n}.`,
      trick: "A-F ko 10-15 maano, phir 16 ki powers.", time: 45
    }));
  });

  // 5) Decimal -> Octal
  decPool.forEach((n, i) => {
    const correct = n.toString(8);
    const cands = [(n + 1).toString(8), (n - 1).toString(8), n.toString(2), (n * 2).toString(8)];
    const { options, answer } = pickOptions(correct, cands, i);
    push(build({
      paper: "Paper-II", subject: "Fundamentals of Computer", topic: "Number System",
      subtopic: "Decimal to Octal", difficulty: "Medium",
      qHi: `Decimal number ${n} ka octal equivalent kya hai?`,
      qEn: `What is the octal equivalent of decimal number ${n}?`,
      options, answer,
      explanation: `${n} ko 8 se divide karke remainders ulte order mein: ${n} = (${correct})₈.`,
      trick: "8 se divide karke remainder neeche se upar.", time: 45
    }));
  });

  // 6) Powers of two (memory / addressing)
  for (let k = 3; k <= 16; k++) {
    const val = Math.pow(2, k);
    const cands = [Math.pow(2, k + 1), Math.pow(2, k - 1), val + k, val - 2];
    const { options, answer } = pickOptions(val, cands, k);
    push(build({
      paper: "Paper-II", subject: "Fundamentals of Computer", topic: "Number System",
      subtopic: "Powers of Two", difficulty: "Easy",
      qHi: `2 ki power ${k} (2^${k}) ka value kya hai?`,
      qEn: `What is the value of 2 raised to power ${k} (2^${k})?`,
      options, answer,
      explanation: `2^${k} = ${val}. n bits se ${val} alag-alag combinations bante hain.`,
      trick: "2^10 = 1024 yaad rakho, aage/piche double/half.", time: 30
    }));
    // Addressing: n bits -> combinations
    const { options: o2, answer: a2 } = pickOptions(val, [val * 2, val / 2, k * 2, val + 1], k + 1);
    push(build({
      paper: "Paper-II", subject: "Fundamentals of Computer", topic: "Number System",
      subtopic: "Bit Combinations", difficulty: "Medium",
      qHi: `${k} bits se kitne alag-alag values (combinations) represent ho sakti hain?`,
      qEn: `How many distinct values (combinations) can be represented using ${k} bits?`,
      options: o2, answer: a2,
      explanation: `n bits se 2^n combinations bante hain, isliye ${k} bits = 2^${k} = ${val}.`,
      trick: "n bits => 2^n combinations.", time: 35
    }));
  }

  // 7) Storage unit conversions (binary, 1 unit = 1024 lower)
  const units = [
    ["KB", "bytes", 1024], ["MB", "KB", 1024], ["GB", "MB", 1024], ["TB", "GB", 1024]
  ];
  units.forEach((u, i) => {
    const correct = u[2];
    const cands = [1000, 512, 2048, 100];
    const { options, answer } = pickOptions(correct, cands, i);
    push(build({
      paper: "Paper-II", subject: "Fundamentals of Computer", topic: "Data Processing",
      subtopic: "Storage Units", difficulty: "Easy",
      qHi: `1 ${u[0]} mein kitne ${u[1]} hote hain (binary standard)?`,
      qEn: `How many ${u[1]} are there in 1 ${u[0]} (binary standard)?`,
      options, answer,
      explanation: `Binary standard mein 1 ${u[0]} = 1024 ${u[1]} = 2^10 ${u[1]}.`,
      trick: "Har badi unit = 1024 (2^10) choti unit.", time: 25
    }));
  });

  // 8) 1's and 2's complement of small binaries
  const compPool = ["1010", "1100", "0110", "1001", "0101", "1110", "0011", "1000"];
  compPool.forEach((bin, i) => {
    const ones = bin.split("").map(b => (b === "0" ? "1" : "0")).join("");
    const twos = (parseInt(ones, 2) + 1).toString(2).padStart(bin.length, "0").slice(-bin.length);
    const { options, answer } = pickOptions(ones, [bin, twos, ones.split("").reverse().join("")], i);
    push(build({
      paper: "Paper-II", subject: "Fundamentals of Computer", topic: "Number System",
      subtopic: "1's Complement", difficulty: "Medium",
      qHi: `Binary number ${bin} ka 1's complement kya hoga?`,
      qEn: `What is the 1's complement of binary number ${bin}?`,
      options, answer,
      explanation: `1's complement mein har bit ko invert karte hain (0->1, 1->0): ${bin} => ${ones}.`,
      trick: "1's complement = saare bits ulta do.", time: 35
    }));
    const { options: o2, answer: a2 } = pickOptions(twos, [ones, bin, (parseInt(twos, 2) + 1).toString(2)], i + 1);
    push(build({
      paper: "Paper-II", subject: "Fundamentals of Computer", topic: "Number System",
      subtopic: "2's Complement", difficulty: "Hard",
      qHi: `Binary number ${bin} ka 2's complement kya hoga?`,
      qEn: `What is the 2's complement of binary number ${bin}?`,
      options: o2, answer: a2,
      explanation: `2's complement = 1's complement + 1: ${bin} -> 1's = ${ones}, +1 = ${twos}.`,
      trick: "2's complement = 1's complement + 1.", time: 45
    }));
  });

  // ---- Reasoning (Paper-I, General Ability) ----------------------------

  // 9) Arithmetic number series - find next term
  const apSeeds = [[2, 3], [5, 5], [7, 4], [3, 7], [10, 6], [1, 9], [4, 8], [6, 11], [12, 5], [8, 13],
    [2, 4], [3, 6], [9, 3], [11, 7], [15, 5], [20, 10], [1, 11], [7, 9], [13, 4], [25, 6],
    [4, 12], [6, 14], [17, 8], [21, 3], [5, 15], [2, 2], [8, 6], [14, 7], [3, 9], [16, 4],
    [5, 12], [9, 11], [22, 5], [1, 13], [7, 6], [10, 15], [18, 4], [4, 16], [6, 7], [12, 9],
    [3, 11], [8, 8], [15, 6], [20, 7], [1, 14]];
  apSeeds.forEach(([a, d], i) => {
    const terms = [a, a + d, a + 2 * d, a + 3 * d];
    const next = a + 4 * d;
    const { options, answer } = pickOptions(next, [next + d, next - d, next + 1, next - 2], i);
    push(build({
      paper: "Paper-I", subject: "General Ability", topic: "Logical Reasoning",
      subtopic: "Number Series", difficulty: "Easy",
      qHi: `Series ka agla number batao: ${terms.join(", ")}, ?`,
      qEn: `Find the next number in the series: ${terms.join(", ")}, ?`,
      options, answer,
      explanation: `Har term mein ${d} add ho raha hai (common difference ${d}), isliye agla = ${a + 3 * d} + ${d} = ${next}.`,
      trick: "Consecutive terms ka antar dekho.", time: 30
    }));
  });

  // 10) Geometric series - find next term
  const gpSeeds = [[2, 2], [3, 2], [1, 3], [2, 3], [5, 2], [4, 2], [1, 2], [3, 3],
    [1, 4], [2, 4], [6, 2], [10, 2], [1, 5], [2, 5], [7, 2], [3, 4],
    [8, 2], [9, 2], [4, 3], [5, 3], [1, 6], [2, 6], [11, 2], [3, 5], [6, 3], [1, 10]];
  gpSeeds.forEach(([a, r], i) => {
    const terms = [a, a * r, a * r * r, a * r * r * r];
    const next = a * Math.pow(r, 4);
    const { options, answer } = pickOptions(next, [next * r, next / r, next + a, next - r], i);
    push(build({
      paper: "Paper-I", subject: "General Ability", topic: "Logical Reasoning",
      subtopic: "Number Series", difficulty: "Medium",
      qHi: `Series ka agla number batao: ${terms.join(", ")}, ?`,
      qEn: `Find the next number in the series: ${terms.join(", ")}, ?`,
      options, answer,
      explanation: `Har term ${r} se multiply ho raha hai (common ratio ${r}), isliye agla = ${terms[3]} × ${r} = ${next}.`,
      trick: "Term ko pichle term se divide karke ratio nikalo.", time: 35
    }));
  });

  // 11) Coding-decoding (letter shift)
  const codeWords = ["CAT", "DOG", "SUN", "BOOK", "FISH", "TREE", "LAMP", "RING", "GOLD", "MIND",
    "STAR", "MOON", "RAIN", "WIND", "ROSE", "KING", "BIRD", "FIRE", "SNOW", "LEAF",
    "HAND", "DOOR", "MILK", "SALT", "COIN", "LOCK", "SHIP", "ROAD", "GATE", "FARM",
    "DESK", "PARK", "BELL", "CARD", "WOOD", "IRON", "PALM", "NEST", "DUST", "LION"];
  codeWords.forEach((word, i) => {
    const shift = (i % 3) + 1;
    const encode = w => w.split("").map(ch => ALPHA[(ALPHA.indexOf(ch) + shift) % 26]).join("");
    const sample = codeWords[(i + 1) % codeWords.length];
    const correct = encode(word);
    const wrongShift = shift + 1;
    const encWrong = w => w.split("").map(ch => ALPHA[(ALPHA.indexOf(ch) + wrongShift) % 26]).join("");
    const { options, answer } = pickOptions(correct, [encWrong(word), word, word.split("").reverse().join("")], i);
    push(build({
      paper: "Paper-I", subject: "General Ability", topic: "Logical Reasoning",
      subtopic: "Coding-Decoding", difficulty: "Medium",
      qHi: `Agar '${sample}' ko '${encode(sample)}' likha jaata hai, to '${word}' ko kaise likhenge?`,
      qEn: `If '${sample}' is coded as '${encode(sample)}', then how is '${word}' coded?`,
      options, answer,
      explanation: `Har letter ko +${shift} shift kiya gaya hai, isliye ${word} => ${correct}.`,
      trick: "Ek letter ka shift nikaalo, sab par lagao.", time: 35
    }));
  });

  // 12) Letter position in alphabet (all 1..26)
  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].forEach((pos, i) => {
    const letter = ALPHA[pos - 1];
    const { options, answer } = pickOptions(letter, [ALPHA[pos] || "A", ALPHA[pos - 2], ALPHA[26 - pos]], i);
    push(build({
      paper: "Paper-I", subject: "General Ability", topic: "Logical Reasoning",
      subtopic: "Alphabet Series", difficulty: "Easy",
      qHi: `English alphabet mein baayen se ${pos}va letter kaunsa hai?`,
      qEn: `Which is the ${pos}th letter from the left in the English alphabet?`,
      options, answer,
      explanation: `A=1, B=2 ... is order mein ${pos}va letter '${letter}' hota hai.`,
      trick: "A=1 se ginti karo, ya EJOTY trick.", time: 25
    }));
  });

  // 13) Percentage of a number
  const pctSeeds = [[10, 200], [25, 80], [50, 120], [20, 150], [40, 90], [75, 40], [15, 300], [5, 260],
    [10, 450], [30, 200], [60, 150], [80, 50], [12, 500], [45, 80], [90, 30], [8, 250],
    [35, 200], [70, 90], [55, 40], [18, 150], [10, 350], [25, 160], [50, 240], [20, 300],
    [40, 250], [15, 200], [5, 480], [60, 90], [75, 80], [12, 300], [30, 150], [80, 90],
    [45, 200], [90, 50], [35, 80], [70, 50], [22, 150], [16, 250], [65, 40], [28, 200]];
  pctSeeds.forEach(([p, n], i) => {
    const correct = (p * n) / 100;
    const { options, answer } = pickOptions(correct, [correct + n / 10, correct - 5, correct * 2, correct + p], i);
    push(build({
      paper: "Paper-I", subject: "General Ability", topic: "Basic Numeracy",
      subtopic: "Percentage", difficulty: "Easy",
      qHi: `${n} ka ${p}% kitna hoga?`,
      qEn: `What is ${p}% of ${n}?`,
      options, answer,
      explanation: `${p}% of ${n} = (${p}/100) × ${n} = ${correct}.`,
      trick: "% ko /100 karke multiply karo.", time: 30
    }));
  });

  // 14) Average of numbers
  const avgSeeds = [[10, 20, 30], [5, 15, 25, 35], [12, 18, 24], [8, 16, 24, 32], [40, 50, 60], [2, 4, 6, 8, 10],
    [10, 30, 50], [20, 40, 60], [15, 25, 35, 45], [5, 10, 15, 20, 25], [100, 200, 300], [6, 12, 18, 24],
    [11, 22, 33], [14, 28, 42], [50, 60, 70, 80], [3, 6, 9, 12, 15], [25, 50, 75], [8, 12, 16, 20]];
  avgSeeds.forEach((arr, i) => {
    const sum = arr.reduce((s, x) => s + x, 0);
    const correct = sum / arr.length;
    const { options, answer } = pickOptions(correct, [correct + 2, correct - 2, sum, correct + 5], i);
    push(build({
      paper: "Paper-I", subject: "General Ability", topic: "Basic Numeracy",
      subtopic: "Average", difficulty: "Easy",
      qHi: `In numbers ka average kya hai: ${arr.join(", ")}?`,
      qEn: `What is the average of these numbers: ${arr.join(", ")}?`,
      options, answer,
      explanation: `Average = sum / count = ${sum} / ${arr.length} = ${correct}.`,
      trick: "Sabka jod karo, phir count se divide.", time: 30
    }));
  });

  // 15) Squares and cubes
  for (let n = 11; n <= 30; n++) {
    const sq = n * n;
    const { options, answer } = pickOptions(sq, [sq + n, sq - n, (n + 1) * (n + 1), sq + 10], n);
    push(build({
      paper: "Paper-I", subject: "General Ability", topic: "Basic Numeracy",
      subtopic: "Squares", difficulty: "Easy",
      qHi: `${n} ka varg (square) kya hai?`,
      qEn: `What is the square of ${n}?`,
      options, answer,
      explanation: `${n}² = ${n} × ${n} = ${sq}.`,
      trick: "11-20 ke squares yaad rakho.", time: 25
    }));
  }
  for (let n = 2; n <= 15; n++) {
    const cube = n * n * n;
    const { options, answer } = pickOptions(cube, [cube + n, cube - n, n * n, (n + 1) ** 3], n);
    push(build({
      paper: "Paper-I", subject: "General Ability", topic: "Basic Numeracy",
      subtopic: "Cubes", difficulty: "Easy",
      qHi: `${n} ka ghan (cube) kya hai?`,
      qEn: `What is the cube of ${n}?`,
      options, answer,
      explanation: `${n}³ = ${n} × ${n} × ${n} = ${cube}.`,
      trick: "1-10 ke cubes yaad rakho.", time: 25
    }));
  }

  // 16) LCM and HCF of two numbers
  const pairs = [[4, 6], [8, 12], [9, 15], [10, 25], [14, 21], [6, 8], [12, 18], [5, 20],
    [15, 20], [16, 24], [18, 27], [21, 28], [10, 15], [12, 20], [8, 20], [9, 12],
    [14, 35], [6, 15], [20, 30], [16, 40], [4, 10], [6, 9], [8, 10], [12, 15],
    [10, 12], [9, 18], [14, 28], [15, 25], [18, 24], [20, 24], [6, 21], [8, 28],
    [12, 16], [10, 35], [9, 24]];
  pairs.forEach(([a, b], i) => {
    const h = gcd(a, b);
    const l = lcm(a, b);
    const { options, answer } = pickOptions(l, [l + a, l - b, a * b, h], i);
    push(build({
      paper: "Paper-I", subject: "General Ability", topic: "Basic Numeracy",
      subtopic: "LCM", difficulty: "Medium",
      qHi: `${a} aur ${b} ka LCM (लघुत्तम समापवर्त्य) kya hai?`,
      qEn: `What is the LCM of ${a} and ${b}?`,
      options, answer,
      explanation: `LCM(${a}, ${b}) = ${l}. (HCF = ${h}, aur LCM × HCF = ${a} × ${b}.)`,
      trick: "LCM × HCF = product of numbers.", time: 35
    }));
    const { options: o2, answer: a2 } = pickOptions(h, [h + 1, a, b, l], i + 1);
    push(build({
      paper: "Paper-I", subject: "General Ability", topic: "Basic Numeracy",
      subtopic: "HCF", difficulty: "Medium",
      qHi: `${a} aur ${b} ka HCF (महत्तम समापवर्तक) kya hai?`,
      qEn: `What is the HCF of ${a} and ${b}?`,
      options: o2, answer: a2,
      explanation: `HCF(${a}, ${b}) = ${h} (dono ko divide karne wala sabse bada number).`,
      trick: "Dono ko divide karne wala sabse bada number.", time: 35
    }));
  });

  // 17) Simple Interest
  const siSeeds = [[1000, 5, 2], [2000, 10, 3], [5000, 4, 5], [1500, 8, 2], [4000, 6, 4],
    [800, 10, 5], [2500, 12, 2], [10000, 5, 3], [1200, 15, 2], [3000, 7, 4],
    [1000, 8, 3], [2000, 5, 4], [6000, 10, 2], [1500, 12, 3], [800, 15, 4],
    [5000, 6, 2], [2400, 10, 5], [3600, 5, 2], [1800, 8, 4], [7000, 4, 3]];
  siSeeds.forEach(([p, r, t], i) => {
    const si = (p * r * t) / 100;
    const { options, answer } = pickOptions(si, [si + p / 10, si - r * t, p + si, si * 2], i);
    push(build({
      paper: "Paper-I", subject: "General Ability", topic: "Basic Numeracy",
      subtopic: "Simple Interest", difficulty: "Medium",
      qHi: `₹${p} par ${r}% saalana dar se ${t} saal ka simple interest kitna hoga?`,
      qEn: `What is the simple interest on ₹${p} at ${r}% per annum for ${t} years?`,
      options, answer,
      explanation: `SI = (P × R × T) / 100 = (${p} × ${r} × ${t}) / 100 = ₹${si}.`,
      trick: "SI = PRT/100 yaad rakho.", time: 40
    }));
  });

  // 18) Ratio - divide amount in given ratio (find larger share)
  const ratioSeeds = [[3, 2, 500], [4, 1, 1000], [5, 3, 800], [2, 3, 600], [7, 3, 1000],
    [3, 5, 1600], [1, 4, 500], [5, 2, 700], [4, 5, 900], [6, 3, 1800],
    [2, 5, 700], [3, 4, 1400], [5, 4, 900], [7, 2, 900], [1, 3, 800],
    [4, 3, 1400], [6, 1, 700], [3, 7, 1000], [2, 7, 900], [5, 1, 1200]];
  ratioSeeds.forEach(([a, b, total], i) => {
    const part = total / (a + b);
    const shareA = part * a;
    const { options, answer } = pickOptions(shareA, [part * b, total / 2, shareA + part, shareA - part], i);
    push(build({
      paper: "Paper-I", subject: "General Ability", topic: "Basic Numeracy",
      subtopic: "Ratio and Proportion", difficulty: "Medium",
      qHi: `₹${total} ko ${a}:${b} ke ratio mein baanto. Pehle vyakti (${a} wale) ka hissa kitna hai?`,
      qEn: `Divide ₹${total} in the ratio ${a}:${b}. What is the share of the first person (${a} parts)?`,
      options, answer,
      explanation: `Total parts = ${a}+${b} = ${a + b}. Ek part = ${total}/${a + b} = ${part}. Pehla hissa = ${a} × ${part} = ${shareA}.`,
      trick: "Total ko (a+b) parts mein baanto.", time: 40
    }));
  });

  // 19) Speed / Distance / Time
  const spdSeeds = [[60, 2], [40, 3], [50, 4], [80, 2], [45, 2], [30, 5], [70, 3], [100, 2], [25, 4], [90, 3],
    [55, 2], [65, 3], [35, 4], [75, 2], [20, 6], [48, 3], [52, 2], [88, 2], [42, 5], [110, 2]];
  spdSeeds.forEach(([speed, time], i) => {
    const dist = speed * time;
    const { options, answer } = pickOptions(dist, [dist + speed, dist - time, speed + time, dist * 2], i);
    push(build({
      paper: "Paper-I", subject: "General Ability", topic: "Basic Numeracy",
      subtopic: "Speed Distance Time", difficulty: "Easy",
      qHi: `Ek gaadi ${speed} km/h ki speed se ${time} ghante chalti hai. Kitni doori tay karegi?`,
      qEn: `A vehicle travels at ${speed} km/h for ${time} hours. What distance does it cover?`,
      options, answer,
      explanation: `Distance = Speed × Time = ${speed} × ${time} = ${dist} km.`,
      trick: "Distance = Speed × Time.", time: 30
    }));
  });

  // 20) ASCII codes (factual constants)
  const asciiSeeds = [["A", 65], ["Z", 90], ["a", 97], ["z", 122], ["0", 48], ["9", 57], ["space", 32]];
  asciiSeeds.forEach(([ch, code], i) => {
    const { options, answer } = pickOptions(code, [code + 1, code - 1, code + 5, code - 32], i);
    push(build({
      paper: "Paper-II", subject: "Fundamentals of Computer", topic: "Data Processing",
      subtopic: "ASCII", difficulty: "Medium",
      qHi: `Character '${ch}' ka ASCII (decimal) code kya hai?`,
      qEn: `What is the ASCII (decimal) code of character '${ch}'?`,
      options, answer,
      explanation: `ASCII mein '${ch}' ka decimal value ${code} hota hai (A=65, a=97, '0'=48, space=32).`,
      trick: "A=65, a=97, '0'=48 base yaad rakho.", time: 35
    }));
  });

  // 21) Logic gate outputs (digital electronics, factual truth tables)
  const gates = [
    ["AND", (a, b) => a & b], ["OR", (a, b) => a | b], ["NAND", (a, b) => (a & b) ? 0 : 1],
    ["NOR", (a, b) => (a | b) ? 0 : 1], ["XOR", (a, b) => a ^ b], ["XNOR", (a, b) => (a ^ b) ? 0 : 1]
  ];
  const inputPairs = [[0, 0], [0, 1], [1, 0], [1, 1]];
  gates.forEach((g, gi) => {
    inputPairs.forEach(([a, b], ii) => {
      const correct = g[1](a, b);
      const { options, answer } = pickOptions(correct, [correct ? 0 : 1, "2", "10"], gi + ii);
      push(build({
        paper: "Paper-II", subject: "Fundamentals of Computer", topic: "Number System",
        subtopic: "Logic Gates", difficulty: "Medium",
        qHi: `${g[0]} gate ka output kya hoga jab inputs A=${a}, B=${b} hon?`,
        qEn: `What is the output of a ${g[0]} gate when inputs are A=${a}, B=${b}?`,
        options, answer,
        explanation: `${g[0]} gate ka truth table follow karke A=${a}, B=${b} par output = ${correct}.`,
        trick: "AND=dono 1, OR=koi 1, XOR=alag ho to 1; N-version ulta.", time: 30
      }));
    });
  });

  // export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = out;
  } else {
    root.RSSB_GENERATED = out;
  }
})(typeof window !== "undefined" ? window : this);
