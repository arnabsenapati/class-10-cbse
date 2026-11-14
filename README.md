# Class 10 CBSE Study Hub — Modular Offline-First PWA

An interactive, offline-ready Progressive Web App (PWA) for Class 10 CBSE students, organized cleanly by **Subject › Topic › Subtopic**.

## Features

- **Subject › Topic › Subtopic Hierarchy:** Breadcrumb navigation, collapsible curriculum tree, and completion tracking saved offline in `localStorage`.
- **English Language & Literature (Code 184) — Milestones 1–3 (Complete 40-Mark Literature: *First Flight* & *Footprints without Feet*, 31 Subtopics):**
  - **First Flight Prose (Ch 1–9 + Board Mastery):** Optional collapsed Original NCERT Reference drawer (`First Flight` & `Footprints` verbatim reader + offline `CacheFirst` PDF viewer), 60-Second Glance + Title/Irony/Facts + Plot Arc, 5-Mark RTC Extracts with **Inline Hover/Tap Word Lens**, Character Sketches & Power Adjectives + Examiner Mistake Alerts, NCERT Vocabulary & *Thinking about Language* exercises, 3-Mark Solved NCERT Q&As + Trap Checkpoints, and 6-Mark Cross-Chapter Competency Answers (Diary, Speech, Dialogue).
  - **First Flight Poetry (Poems 1–10 + Poetry Board Mastery):** Complete coverage of all 10 rationalized CBSE poems (*Dust of Snow* through *For Anne Gregory*) with stanza-by-stanza **Per-Line Word Lens** RTC extracts, Rhyme Scheme & Poetic Devices breakdowns, Board Examiner Traps, *Thinking about the Poem* Q&As, 6-mark comparative/thematic essays, and the interactive **Poetic Devices Explorer & 20-Q Spot-the-Device Lab** (48 searchable literary device entries across 14 categories + 10-poem rhyme matrix + interactive drill).
  - **Footprints without Feet (Ch 1–9 + Character Evolution Lab):** Complete coverage of all 9 supplementary reader chapters (*A Triumph of Surgery* through *The Book That Saved the Earth*) with Word Lens RTC extracts, NCERT *Read and Find Out* / *Think about it* solutions, cross-book 6-mark essays, and the **18-Character Evolution, 9-Chapter Twist Matrix & 20-Q Trainer Lab**.
  - **Glossary & Quiz Arena:** 93-term Literary Device, Tone & Vocabulary Glossary with direct section deep links + 84-Question Filterable CBSE Quiz Arena (`First Flight: Prose`, `First Flight: Poetry` & `Footprints without Feet` — MCQ, Assertion–Reason & Case-Based RTC).
- **Hindi Course B (Code 085) — Complete 80-Mark Syllabus (All 5 Units, 31 Subtopics):**
  - **Unit 1 & 2 (`स्पर्श भाग-2`: 7 काव्यखंड + 7 गद्यखंड + Mastery) & Unit 3 (`संचयन भाग-2`: हरिहर काका, सपनों के-से दिन, टोपी शुक्ला + Mastery) — 5-Pillar Architecture:**
    1. **Interactive Inline Word Lens & शब्दार्थ संकलन:** Hover or tap highlighted dialect/तत्सम/उर्दू-फ़ारसी words inside NCERT poems & prose passages for exam-safe मानक हिंदी अर्थ, English meaning, grammar note, and usage sentence + searchable self-test word bank.
    2. **Full English Transcript (`संपूर्ण अंग्रेज़ी अनुवाद`):** Line-by-line / scene-by-scene Side-by-Side (`मूल + English`) or `English Only` reading mode for every chapter.
    3. **Muhavre Corner (`पाठ के मुहावरे व वाक्य-प्रयोग`):** Chapter-wise idioms with CBSE `वाक्य-प्रयोग` model sentences and `Self-Test` mode.
    4. **Samas Breakdown (`समास-विग्रह कोना`):** Compound words (`समस्तपद`), exact `समास-विग्रह`, type badges, and exam trap alerts.
    5. **NCERT व CBSE Board Q&A + 3-in-1 Lab + 68-Question Offline Quiz Arena:** Solved NCERT/Board answers, 3-in-1 Flashcards & Speed Drill (`शब्दार्थ • मुहावरे • समास`), and filterable offline Self-Test Arena across all 5 Hindi units.
  - **Unit 4 (`अपठित गद्यांश एवं व्यावहारिक व्याकरण` — 30 Marks):** 2×7 Unseen Passage strategy + 3 Word-Lens model passages, rules & traps for **पदबंध**, **वाक्य रूपांतरण**, **समास** (all 6 भेद), **मुहावरे**, plus the **42-Question Interactive Vyakaran Speed Lab**.
  - **Unit 5 (`रचनात्मक लेखन` — 22 Marks):** Styled model samples & box rules for all 6 formats (**अनुच्छेद**, **औपचारिक पत्र**, **सूचना**, **विज्ञापन**, **औपचारिक ई-मेल**, **लघुकथा**) + 80-mark 180-minute Board strategy.
- **Biology — Chapter 8: Heredity (From Absolute Basics):**
  1. **Foundations: DNA, Genes & Alleles** (Cell → Nucleus → Chromosome → DNA → Gene → Protein/Hormone; Gene vs. Allele; Dominant vs. Recessive; Homozygous vs. Heterozygous; Genotype vs. Phenotype).
  2. **Mendel & Punnett Square Mastery** (Why *Pisum sativum*; 7 Contrasting Traits; 4-Step Punnett Method; FOIL Gamete Splitter & Blank Grid Practice Trainer).
  3. **Monohybrid Cross** (`TT × tt` → `F₁` `Tt` → `F₂` `3:1` & `1:2:1`; Law of Dominance & Segregation; Test Cross `1:1`; Live 2×2 Simulator).
  4. **Dihybrid Cross** (`RRYY × rryy` → `F₁` `RrYy` → `F₂` `9:3:3:1`; 16-box Interactive Explorer; Parental vs. New Recombinant combinations; Law of Independent Assortment; Seed-Count Numerical Predictor).
  5. **CBSE Board Exam Mastery** (Human `XX`/`XY` Sex Determination Lab; Rationalized CBSE Syllabus Scope; Top 8 Examiner Traps; Solved 1–5 Mark Q&As; Interactive Offline CBSE Quiz Arena).
- **Instant Offline Search (`Ctrl+K` / `/` or `/search`):** Searches across subjects, topics, subtopics, sections, glossary terms, and CBSE quiz questions.
- **PWA & Offline Support:** Precached via Workbox Service Worker (`vite-plugin-pwa`), installable on desktop & mobile, with live Online/Offline status indicator and clean Print-to-PDF stylesheets.

## Running Locally

```bash
npm install
npm run dev        # Development server
npm run build      # Production build + Service Worker (dist/)
npm run preview    # Preview production PWA locally (http://localhost:4174)
```

## Running as a Background Startup Service (Windows)

A single-process Node server launcher ([`scripts/service-runner.mjs`](scripts/service-runner.mjs)) and Windows setup scripts are included:

- **Boot Service Mode (recommended, Administrator PowerShell):** Starts automatically at system boot (even before login) and opens Windows Firewall TCP port `4174`:
  ```powershell
  powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\install-startup.ps1
  ```
- **User Logon Mode (no Administrator required):** Starts automatically when you sign into Windows:
  ```powershell
  powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\install-startup.ps1 -Mode UserLogon
  ```
- **Uninstall:**
  ```powershell
  powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\uninstall-startup.ps1 -RemoveFirewall
  ```

Logs are written to `logs/pwa-service.log` (automatically rotated at 1 MiB).

## Adding More Subjects or Topics

Add new subject modules under `src/data/subjects/<subject>/` following `src/types/curriculum.ts` and register them in `src/data/registry.ts`.
