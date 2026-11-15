# Class 10 CBSE Study Hub — Modular Offline-First PWA

An interactive, offline-ready Progressive Web App (PWA) for Class 10 CBSE students, organized cleanly by **Subject › Topic › Subtopic**.

## Features

- **Subject › Topic › Subtopic Hierarchy:** Breadcrumb navigation, collapsible curriculum tree, and completion tracking saved offline in `localStorage`.
- **Physics (CBSE Science Code 086 — Ch 9–12, 25 Marks) — Sign-Shield & 2D/3D Ray/Circuit/Field Suite (5 Topics, 9 Subtopics):**
  - **Laws & Sign-Shield Matrix + Sign-Slip Clinic:** Strict rationalized 2026–27 NCERT coverage across **Ch 9 Light – Reflection & Refraction**, **Ch 10 The Human Eye & Colourful World**, **Ch 11 Electricity**, and **Ch 12 Magnetic Effects of Electric Current** (excluding deleted Motor/EMI/Generator & deep sunrise/sunset scattering derivations).
  - **2D Ray Optics & Eye Defects Bench (`PhysicsOpticsBenchLab`):** Drag object distance `u` live along concave/convex mirrors & lenses, trace focal rays in real time, and simulate myopia (`concave`) / hypermetropia (`convex`) spectacle correction.
  - **2D Live Ohm's Law, Series/Parallel & Joule Heating Simulator (`PhysicsCircuitSimulatorLab`):** Adjust battery voltage `V`, resistor sliders, Series vs. Parallel topology, `V–I` slopes, fuse safety limits & `H = I²Rt`.
  - **3D Magnetism, Solenoid & Domestic Wiring (`PhysicsMagnetism3dLab`):** Offline drag-to-orbit HTML5 Canvas 3D simulator covering bar magnet field poles, current-carrying solenoid polarity, Right-Hand Thumb Rule, `F = BIL` Fleming's Left-Hand Rule & Live/Neutral/Earth domestic fuse box.
  - **Screen-to-Notebook Numericals + 40-Term Glossary + 48-Q Quiz Arena.**
- **Chemistry (CBSE Science Code 086 — Ch 1–4, 25 Marks) — Wet-Lab Observation & 3D Molecular Suite (5 Topics, 9 Subtopics):**
  - **Macroscopic Wet-Lab Observation Matrix & X–Y–Z Detective Puzzles:** Complete rationalized 2026–27 coverage across **Ch 1 Chemical Reactions & Equations**, **Ch 2 Acids, Bases & Salts**, **Ch 3 Metals & Non-Metals**, and **Ch 4 Carbon & Its Compounds** (excluding deleted Periodic Classification).
  - **2D Wet-Lab Simulator & Equation Balancer (`ChemistryReactionBenchLab`):** Trigger exothermic/endothermic, thermal/photolytic/electrolytic decomposition, double-displacement precipitate tubes, universal indicator/phenolphthalein pH slider, Chlor-Alkali membrane cell & PoP hydration, plus step-by-step equation balancer.
  - **2D Metallurgy, Reactivity & Electrolysis (`ChemistryMetallurgyIonicLab`):** Live `K → Au` displacement tube rack, roasting vs. calcination furnace, anode-mud electrolytic refining of Cu, and electron-dot ionic transfer animation (`NaCl`, `MgCl₂`).
  - **3D Carbon Molecules, Allotropes & Micelle Explorer (`Chemistry3dMoleculesLab`):** Drag-to-orbit 3D HTML5 Canvas viewer for tetrahedral `CH₄`, double/triple-bonded `C₂H₄`/`C₂H₂`, ethanol/ethanoic acid, Diamond vs. Graphite lattices & rotating soap micelle oil emulsification.
  - **Formula/Colour Vault + 40-Term Glossary + 48-Q Quiz Arena.**
- **Biology (CBSE Science Code 086 — Ch 5, 6, 7, 8 & 13, 30 Marks) — Label-Toggle Atlases & 2D/3D Physiological Suite (10 Topics, 20 Subtopics):**
  - **Ch 5 Life Processes (2 Topics), Ch 6 Control & Coordination, Ch 7 How Do Organisms Reproduce?, Ch 8 Heredity (5 Topics preserved), & Ch 13 Our Environment + 80M Science Blueprint:** Strictly rationalized 2026–27 syllabus (excluding Evolution/Speciation/Fossils and Natural Resources management).
  - **Interactive Hide/Reveal Labelled SVG Diagrams (`BiologyVisuals`):** Alimentary canal & alveoli, heart double circulation & nephron, neuron & reflex arc, angiosperm flower & seed germination, and food web / ozone depletion with Exam Self-Test label toggle.
  - **2D Life Processes & Neuro-Endocrine Simulators (`BioLifeProcessesAnimatorLab`, `BioNeuroEndocrineLab`):** Animated enzyme digestion, 3 glucose pathways (`2 ATP` vs. `38 ATP`), rhythmic heart/nephron pipeline, synapse/reflex arc firing, auxin phototropism bending & hormone feedback loops.
  - **3D Pollination, Asexual Modes, DNA Helix & 10% Food Pyramid (`BioReproductionLab`, `Bio3dDnaAndEcoPyramidLab`):** Interactive 3D angiosperm fertilization, budding/regeneration stages, base-paired DNA double helix (`A–T`, `G–C`) & 10% law / pesticide biomagnification pyramid, plus all original Heredity/Punnett labs, **57-Term Glossary & 62-Q Full-Syllabus Quiz Arena**.
- **Mathematics Standard (Code 041) — Complete 80-Mark Screen-to-Notebook Hand-Practice Suite (All 14 Chapters, 16 Subtopics):**
  - **All 7 CBSE Standard Units (`Ch 1–14`):** Strictly rationalized 2026–27 NCERT coverage across Number Systems, Algebra (`Ch 2–5`), Coordinate Geometry (`Ch 7`), Geometry (`Ch 6` BPT & `Ch 10` Circles), Trigonometry (`Ch 8` & `Ch 9`), Mensuration (`Ch 11` Sectors/Segments & `Ch 12` Combined Solids), and Statistics & Probability (`Ch 13–14`), excluding all deleted CBSE topics.
  - **Screen-to-Notebook Progressive Reveal Decks (`113+` Curated Graded Sums):** Every sum enforces a Copy-Safe check (`Given`, `d/2`, bracket check), live stopwatch, and **4 collapsed-by-default progressive buttons** (`1. Nudge Setup` → `2. Mid-Way Checkpoint` → `3. Final Answer` → `4. Full CBSE Marking Steps`), plus persistent Clean / Silly-Mistake logging in `localStorage`.
  - **Silly-Mistake Surgery Clinic (`24` Step-by-Step Cases + `12` Golden Notebook Rules):** Inspect authentic mid-way student errors across sign/brackets, fraction/LCM, table rows (`cf`, `2f₁`), and geometry/copying, spot the broken line, and drill the paired Twin Problem by hand.
  - **Endless Standard (041) Notebook Drill Engine & 78-Q Quiz Arena:** Unlimited parameterized question generator across 12 topic engines + Mixed Board Sprint (`20/day` through 23 Nov → `50/day` from 24 Nov) with 5-bar Silly-Mistake Radar + 78-question MCQ/Assertion–Reason/Case-Based CBSE Quiz Arena.
- **English Language & Literature (Code 184) — Complete 80-Mark CBSE Syllabus (All 5 Units, 42 Subtopics):**
  - **Unit 1: First Flight Prose (Ch 1–9 + Board Mastery):** Optional collapsed Original NCERT Reference drawer (`First Flight` & `Footprints` verbatim reader + offline `CacheFirst` PDF viewer), 60-Second Glance + Title/Irony/Facts + Plot Arc, 5-Mark RTC Extracts with **Inline Hover/Tap Word Lens**, Character Sketches & Power Adjectives + Examiner Mistake Alerts, NCERT Vocabulary & *Thinking about Language* exercises, 3-Mark Solved NCERT Q&As + Trap Checkpoints, and 6-Mark Cross-Chapter Competency Answers (Diary, Speech, Dialogue).
  - **Unit 2: First Flight Poetry (Poems 1–10 + Poetry Board Mastery):** Complete coverage of all 10 rationalized CBSE poems (*Dust of Snow* through *For Anne Gregory*) with stanza-by-stanza **Per-Line Word Lens** RTC extracts, Rhyme Scheme & Poetic Devices breakdowns, Board Examiner Traps, *Thinking about the Poem* Q&As, 6-mark comparative/thematic essays, and the interactive **Poetic Devices Explorer & 20-Q Spot-the-Device Lab** (48 searchable literary device entries across 14 categories + 10-poem rhyme matrix + interactive drill).
  - **Unit 3: Footprints without Feet (Ch 1–9 + Character Evolution Lab):** Complete coverage of all 9 supplementary reader chapters (*A Triumph of Surgery* through *The Book That Saved the Earth*) with Word Lens RTC extracts, NCERT *Read and Find Out* / *Think about it* solutions, cross-book 6-mark essays, and the **18-Character Evolution, 9-Chapter Twist Matrix & 20-Q Trainer Lab**.
  - **Unit 4: Reading Comprehension & Grammar (30 Marks — 7 Subtopics):** Section A **20-Mark Unseen Passage Strategy** (Discursive + Case-Based Factual with statistical tables & inline **Word Lens** academic vocabulary), complete rules & `Error → Correction` tables for **Determiners**, **Tenses**, **Subject–Verb Agreement**, **Modals**, and **Reported Speech** (Statements, Questions, Commands & Dialogue transformations), plus the **50-Question Interactive Grammar Speed Lab** & 12-question Section B mock paper.
  - **Unit 5: Creative Writing Skills & 80M Strategy (10 Marks — 4 Subtopics):** Styled model samples for **Formal Letters** (Letter to the Editor, Complaint, Placing an Order, Inquiry) and **Analytical Paragraphs** (Bar/Line Charts, Dual Pie Shares, SWOT Decision Cues, Spatial Campus Maps) + complete 80-mark / 180-minute CBSE Board paper blueprint & time-management plan.
  - **Glossary & Quiz Arena:** 115-term Literary Device, Grammar Rule, Tone & Vocabulary Glossary with direct section deep links + 114-Question Filterable CBSE Quiz Arena across all 5 units (`First Flight: Prose`, `First Flight: Poetry`, `Footprints without Feet`, `Reading & Grammar`, and `Writing Skills` — MCQ, Assertion–Reason & Case-Based).
- **Hindi Course B (Code 085) — Complete 80-Mark Syllabus (All 5 Units, 31 Subtopics):**
  - **Unit 1 & 2 (`स्पर्श भाग-2`: 7 काव्यखंड + 7 गद्यखंड + Mastery) & Unit 3 (`संचयन भाग-2`: हरिहर काका, सपनों के-से दिन, टोपी शुक्ला + Mastery) — Official NCERT PDFs + 5-Pillar Architecture:**
    1. **Official NCERT Chapter PDFs (`jhsp101–114`, `jhsy101–103`):** Optional collapsed Official NCERT Reference card at the top of all 17 textbook chapters with inline PDF preview and new-tab link (`CacheFirst` offline PWA caching).
    2. **Interactive Inline Word Lens & शब्दार्थ संकलन:** Hover or tap highlighted dialect/तत्सम/उर्दू-फ़ारसी words inside NCERT poems & prose passages for exam-safe मानक हिंदी अर्थ, English meaning, grammar note, and usage sentence + searchable self-test word bank.
    3. **Full English Transcript (`संपूर्ण अंग्रेज़ी अनुवाद`):** Line-by-line / scene-by-scene Side-by-Side (`मूल + English`) or `English Only` reading mode for every chapter.
    4. **Muhavre Corner (`पाठ के मुहावरे व वाक्य-प्रयोग`):** Chapter-wise idioms with CBSE `वाक्य-प्रयोग` model sentences and `Self-Test` mode.
    5. **Samas Breakdown (`समास-विग्रह कोना`):** Compound words (`समस्तपद`), exact `समास-विग्रह`, type badges, and exam trap alerts.
    6. **NCERT व CBSE Board Q&A + 3-in-1 Lab + 68-Question Offline Quiz Arena:** Solved NCERT/Board answers, 3-in-1 Flashcards & Speed Drill (`शब्दार्थ • मुहावरे • समास`), and filterable offline Self-Test Arena across all 5 Hindi units.
  - **Unit 4 (`अपठित गद्यांश एवं व्यावहारिक व्याकरण` — 30 Marks):** 2×7 Unseen Passage strategy + 3 Word-Lens model passages, rules & traps for **पदबंध**, **वाक्य रूपांतरण**, **समास** (all 6 भेद), **मुहावरे**, plus the **42-Question Interactive Vyakaran Speed Lab**.
  - **Unit 5 (`रचनात्मक लेखन` — 22 Marks):** Styled model samples & box rules for all 6 formats (**अनुच्छेद**, **औपचारिक पत्र**, **सूचना**, **विज्ञापन**, **औपचारिक ई-मेल**, **लघुकथा**) + 80-mark 180-minute Board strategy.
- **Biology Ch 8 Heredity Interactive Labs (Preserved Topics 5–9):**
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
