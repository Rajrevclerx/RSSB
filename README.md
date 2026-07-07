# RSSB Basic Computer Instructor 2026 Offline Quiz App

Poori tarah offline browser-based quiz aur preparation app for RSSB Basic Computer Instructor 2026.

## Run

`index.html` ko kisi bhi modern browser mein kholo (double-click). Koi backend, database, internet ya installation zaroori nahi.

## Question Bank (sab REAL, verified)

Is app mein **~1139 asli, verified questions** hain — koi fake/template junk nahi.

> **Exam date:** RSSB Basic Computer Instructor 2026 ka exam proposed **23 August 2026** hai (Advt. 07/2026, 3951 posts). Do paper × 100 marks = 200 marks.

Chaar tarah ke hain:

1. **Computed practice (auto-verified)** — `data/gen-questions.js`
   In questions ke answers JavaScript mein compute hote hain, isliye 100% sahi guarantee:
   number system (decimal/binary/hex/octal conversion, 1's/2's complement, powers of 2,
   logic gates, ASCII, storage units) aur math/reasoning (number series, coding-decoding,
   alphabet, percentage, average, square/cube, LCM/HCF, simple interest, ratio, speed-distance-time).

2. **Curated important (verified)** — `data/bank-paper1.js` (Paper-I) aur `data/bank-paper2.js` (Paper-II)
   Hand-picked factual MCQs: Rajasthan art/culture/history/geography, general science, GK, reasoning
   (Paper-I); computer fundamentals, MS Office, programming, DSA, OS, networking, security, DBMS,
   system analysis, IoT/web, pedagogy (Paper-II). Sab bilingual (Hindi roman + English).

3. **Most important 2026 (verified)** — `data/bank-extra.js`
   High-yield "99% expected" type factual MCQs poore syllabus se (Rajasthan forts/festivals/minerals/crops,
   science units/diseases/planets, computer full-forms/networking/OS/DBMS/programming, pedagogy theorists).
   "Most Important 2026 Quiz" mode se inhe alag practice kar sakte ho.

4. **Naye 2026 SHUDDH HINDI questions (verified)** — `data/bank-2026-hindi.js`
   82 high-yield MCQs poore syllabus se, prashn **proper Devanagari Hindi + English** dono mein:
   Rajasthan history/art-culture/geography, general science (Paper-I); computer fundamentals,
   MS Office, programming/DSA, networking/IoT, OS, DBMS, cyber security, pedagogy (Paper-II).
   Sab answers verify kiye gaye (0 mismatch). Ye bhi "Most Important 2026 Quiz" mode mein aate hain.

Iske alawa `app.js` mein 24 curated/2022-pattern questions bhi hain.

## Result review (galat questions highlight)

Quiz khatam hone par:
- **Galat questions red highlight** hote hain, chhode gaye amber, sahi green.
- Har galat par **"Aapka jawab" (laal) aur "Sahi jawab" (hara)** dono dikhte hain, saath mein explanation + trick.
- Upar filter buttons: **Galat + Chhode / Sirf Galat / Saare** — apni galtiyan turant dekh sakte ho.

## Features

- Paper-I aur Paper-II dono ka syllabus coverage (roughly equal balance)
- Quiz modes: All, Number System & Math, Curated Important, 2022-Type, Chapter/Topic/Subject wise,
  Paper-I/II, Pedagogy, Mental Ability, Programming, Speed, Revision, Wrong Answer, Bookmarked
- Mock tests: Paper-I (100Q), Paper-II (100Q), Complete (200Q), Expected 2026
- Timer, negative marking (-1/3), score, accuracy, review, explanation aur exam trick har question par
- Dashboard: attempted, correct, accuracy, streak, weak topics
- Analytics: subject accuracy bars aur progress graph
- Search/filter by paper, subject, topic, difficulty, keyword
- Dark/light theme, font size, sound toggle, timer toggle, reset progress
- Sab progress browser ke local storage mein save (offline)

## Bank ko aage kaise badhaye (2000+ tak)

Do tareeke:

### A) Data files mein aur questions add karo (recommended)
- `data/bank-paper1.js` ya `data/bank-paper2.js` kholo aur `b(...)` calls copy karke naye add karo.
- `b(subject, topic, subtopic, difficulty, questionHi, questionEn, [options], answerIndex, explanation, trick, time, [optionsEn])`
  - `answerIndex` 0-based hai (0 = pehla option).
  - `optionsEn` optional hai — agar options same hon (jaise naam/number) to chhod do.
- Computed questions ko aur badhane ke liye `data/gen-questions.js` ke seed arrays (decPool, apSeeds, codeWords, pctSeeds, pairs, etc.) mein aur values add karo. Answers apne aap sahi rahenge.

### B) App ke andar Import button se
Question Bank view mein "Import JSON" se JSON file import kar sakte ho. Ye local storage mein save hoti hai.

JSON question format:

```json
{
  "id": "MY-0001",
  "paper": "Paper-II",
  "subject": "Fundamentals of Computer",
  "topic": "Number System",
  "subtopic": "Binary",
  "difficulty": "Easy",
  "questionHi": "Binary number system ka base kya hota hai?",
  "questionEn": "What is the base of the binary number system?",
  "optionsHi": ["2", "8", "10", "16"],
  "optionsEn": ["2", "8", "10", "16"],
  "options": ["2", "8", "10", "16"],
  "answer": 0,
  "explanation": "Binary sirf 0 aur 1 use karta hai, base 2.",
  "trick": "Bi = two.",
  "time": 30
}
```

## Quality note

Sabhi computed questions ke answers script se recompute karke verify kiye gaye hain (0 mismatch).
Curated questions factually checked hain. Naye questions add karte waqt correctness khud confirm karein.
