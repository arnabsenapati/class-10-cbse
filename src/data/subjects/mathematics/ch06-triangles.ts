import { Subtopic } from '../../../types/curriculum';

export const ch06Triangles: Subtopic = {
  id: 'math-ch06-triangles',
  slug: 'ch06-triangles',
  title: 'Ch 6: Triangles',
  subtitle:
    'Basic Proportionality Theorem (Thales / Theorem 6.1 Proof), Converse of BPT, AA/SAS/SSS Similarity Criteria & Standard 041 Riders',
  estimatedMinutes: 55,
  difficulty: 'Board Mastery',
  ncertSection: 'NCERT Class 10 Mathematics — Chapter 6',
  learningObjectives: [
    'Write the complete 5-mark Basic Proportionality Theorem (Theorem 6.1) proof with Given, To Prove, Construction, and Area ratios.',
    'Match vertex order strictly when writing △ABC ~ △PQR (corresponding angles & sides must align).',
    'Avoid mixing up BPT (AD/DB = AE/EC) with AA Similarity parallel-base ratio (DE/BC = AD/AB).',
    'Solve Standard (041) riders: trapezium diagonals, lamp-post shadows, median-proportionality, and ∠ADC = ∠BAC.',
  ],
  keywords: [
    'Basic Proportionality Theorem',
    'Thales Theorem',
    'Similarity of triangles',
    'AA similarity',
    'SAS similarity',
  ],
  sections: [
    {
      id: 'ch06-formulas-scope',
      title: '1. Theorem Vault, Rationalized Scope & Proof Format',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Ch 6 Exam Glance',
          bullets: [
            '**Theorem 6.1 (BPT / Thales):** If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the **same ratio** (`AD/DB = AE/EC`).',
            '**Theorem 6.2 (Converse of BPT):** If `AD/DB = AE/EC`, then `DE ∥ BC`.',
            '**Similarity Criteria:** **AAA / AA** (2 angles equal), **SSS** (all 3 side pairs proportional), **SAS** (2 sides proportional + **included** angle between them equal).',
            '**Vertex Order Rule:** `△ABC ~ △DEF` means `∠A = ∠D, ∠B = ∠E, ∠C = ∠F` AND `AB/DE = BC/EF = AC/DF`. Never scramble letters!',
          ],
        },
        {
          type: 'visual-diagram',
          diagramId: 'bpt-and-similarity-criteria',
          title: 'BPT Segment Ratios vs. AA Similarity Base-to-Base Ratio',
          caption: 'The #1 Triangles mistake is dividing DE/BC by AD/DB instead of AD/AB.',
        },
        {
          type: 'callout',
          variant: 'trap',
          title: 'Rationalized Syllabus Check — Area Ratio & Pythagoras Proofs Deleted',
          body: 'CBSE **deleted** **Area of Similar Triangles** (`ar(ABC)/ar(PQR) = (AB/PQ)²` — Exercise 6.4) and **Pythagoras Theorem & its Converse** (Exercise 6.5)! Focus 100% on **BPT (Theorem 6.1)**, **Converse of BPT**, and **Similarity Criteria (AA, SSS, SAS — Ex 6.1–6.3)**.',
        },
      ],
    },
    {
      id: 'ch06-notebook-mistakes',
      title: '2. Silly-Mistake Notebook Warnings (Ch 6)',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Ishaan',
          title: 'Writing DE/BC = AD/DB Instead of AD/AB',
          wrongWork: 'DE ∥ BC, AD = 3, DB = 6, DE = 4 → 4/BC = 3/6 → BC = 8 cm',
          teacherFix: 'Use △ADE ~ △ABC (AA): DE/BC = AD/AB = 3/(3 + 6) = 3/9 → BC = 12 cm',
          whyWrong:
            'BPT only links the cut pieces along the two sides (`AD/DB = AE/EC`). To involve the parallel bases `DE` and `BC`, you MUST use full side `AB = AD + DB`!',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Diya',
          title: 'SAS Criterion With Non-Included Angle',
          wrongWork: 'AB/PQ = BC/QR and ∠A = ∠P → △ABC ~ △PQR by SAS',
          teacherFix: 'For AB/PQ and BC/QR, the INCLUDED angle between AB & BC is ∠B (= ∠Q), NOT ∠A!',
          whyWrong:
            'The **A** in **SAS** sits **between** the two **S**’s — the equal angle MUST be formed by the two proportional sides!',
        },
      ],
    },
    {
      id: 'ch06-hand-practice',
      title: '3. Screen-to-Notebook Hand-Practice Workout (Ch 6)',
      blocks: [
        {
          type: 'hand-practice',
          title: 'Ch 6 Graded Notebook Drill (Write Figure + Reason in Brackets for Every Step)',
          subtitle: 'Every geometry line needs a square-bracket reason (`[BPT]`, `[AA similarity]`, `[Vert. Opp. ∠s]`).',
          problems: [
            {
              id: 'm06-p1',
              numberLabel: 'Drill 6.1',
              marks: 2,
              timeMinutes: 3,
              tag: 'NCERT BPT',
              question:
                'In `△ABC`, `DE ∥ BC`. Find:\n(i) `EC` if `AD = 1.5 cm, DB = 3 cm, AE = 1 cm`.\n(ii) `x` if `AD = x, DB = x − 2, AE = x + 2, EC = x − 1`.',
              copyCheck: 'Check `DE ∥ BC` → both parts compare cut segments `AD/DB = AE/EC`.',
              step1Setup: '(i) `1.5 / 3 = 1 / EC`. (ii) `x / (x − 2) = (x + 2) / (x − 1)`.',
              midwayCheckpoint: '(ii) Cross-multiplying gives `x² − x = x² − 4`.',
              finalAnswer: '(i) `EC = 2 cm`; (ii) `x = 4`.',
              fullSolution:
                '(i) By BPT: `1.5/3 = 1/EC` → `1/2 = 1/EC` → `EC = 2 cm`. [1M]\n(ii) By BPT: `x(x − 1) = (x − 2)(x + 2)` → `x² − x = x² − 4` → `−x = −4` → `x = 4`. [1M]',
              sillyTrapNote: 'Mixing `AD/AB` with `AE/EC` when one side gives `DB` and the other gives `EC`.',
            },
            {
              id: 'm06-p2',
              numberLabel: 'Drill 6.2',
              marks: 2,
              timeMinutes: 3,
              tag: 'Parallel Base Trap',
              question:
                'In `△ABC`, `D` and `E` are points on `AB` and `AC` such that `DE ∥ BC`. If `AD = 3 cm`, `DB = 5 cm`, and `DE = 6 cm`, find `BC`.',
              copyCheck: '`AB = AD + DB = 3 + 5 = 8 cm`! Do NOT use `DB = 5` directly under `AD`!',
              step1Setup: 'Prove `△ADE ~ △ABC` by AA (`∠A` common, `∠ADE = ∠B` corresponding), then `AD/AB = DE/BC`.',
              midwayCheckpoint: '`3 / 8 = 6 / BC`.',
              finalAnswer: '`BC = 16 cm`.',
              fullSolution:
                '1. In `△ADE` and `△ABC`: `∠A = ∠A` (common), `∠ADE = ∠ABC` (corresponding angles, `DE ∥ BC`) → `△ADE ~ △ABC` [AA]. [1M]\n2. `AD / AB = DE / BC` → `3 / (3 + 5) = 6 / BC` → `3/8 = 6/BC` → `BC = 16 cm`. [1M]',
              sillyTrapNote: 'Getting `BC = 10 cm` from the false ratio `3/5 = 6/BC`!',
            },
            {
              id: 'm06-p3',
              numberLabel: 'Drill 6.3',
              marks: 2,
              timeMinutes: 3,
              tag: 'Converse of BPT',
              question:
                '`E` and `F` are points on sides `PQ` and `PR` of `△PQR`. State whether `EF ∥ QR` when:\n(i) `PE = 4 cm, QE = 4.5 cm, PF = 8 cm, RF = 9 cm`\n(ii) `PQ = 1.28 cm, PR = 2.56 cm, PE = 0.18 cm, PF = 0.36 cm`',
              copyCheck: 'In (ii), FULL sides `PQ` and `PR` are given — check `PE/PQ` vs `PF/PR` (or subtract to get `EQ, FR`)!',
              step1Setup: 'Compute `PE/EQ` vs `PF/FR` in (i), and `PE/PQ` vs `PF/PR` in (ii).',
              midwayCheckpoint: '(i) `4/4.5 = 8/9`; (ii) `0.18/1.28 = 9/64` and `0.36/2.56 = 9/64`.',
              finalAnswer: 'Both (i) and (ii) give **YES, `EF ∥ QR`** by Converse of BPT.',
              fullSolution:
                '(i) `PE/EQ = 4/4.5 = 8/9 = PF/FR` → by Converse of BPT, `EF ∥ QR`. [1M]\n(ii) `PE/PQ = 0.18/1.28 = 18/128 = 9/64`; `PF/PR = 0.36/2.56 = 36/256 = 9/64`. Ratios equal → `EF ∥ QR`. [1M]',
              sillyTrapNote: 'Decimal simplification slip on `0.18/1.28` — multiply top & bottom by `100` first!',
            },
            {
              id: 'm06-p4',
              numberLabel: 'Drill 6.4',
              marks: 3,
              timeMinutes: 4,
              tag: 'NCERT Ex 6.2/6.3 Trapezium',
              question:
                'Diagonals `AC` and `BD` of a trapezium `ABCD` with `AB ∥ DC` intersect each other at point `O`. Using a similarity criterion for two triangles, show that `OA / OC = OB / OD`.',
              copyCheck: 'Draw `ABCD` with `AB ∥ DC` (top parallel to bottom) and diagonals crossing at `O`.',
              step1Setup: 'Compare `△OAB` and `△OCD` using alternate interior angles and vertically opposite angles.',
              midwayCheckpoint: '`△OAB ~ △OCD` by AA similarity criterion.',
              finalAnswer: 'Proved via corresponding sides of `△OAB ~ △OCD`: `OA/OC = OB/OD`.',
              fullSolution:
                '1. Draw trapezium `ABCD` (`AB ∥ DC`) with diagonals intersecting at `O`. [½M]\n2. In `△OAB` and `△OCD`:\n   • `∠OAB = ∠OCD` (alternate interior angles, `AB ∥ DC`)\n   • `∠OBA = ∠ODC` (alternate interior angles)\n   • `∠AOB = ∠COD` (vertically opposite angles) [1.5M]\n3. Thus `△OAB ~ △OCD` [AA similarity] → `OA/OC = OB/OD` [CSST]. [1M]',
              sillyTrapNote: 'Writing `OA/OD = OB/OC` because of scrambling vertex order (`OAB` corresponds to `OCD`, NOT `ODC`)!',
            },
            {
              id: 'm06-p5',
              numberLabel: 'Drill 6.5',
              marks: 3,
              timeMinutes: 5,
              tag: 'Lamp-Post Shadow (Ex 6.3 Q15)',
              question:
                'A girl of height **90 cm** is walking away from the base of a lamp-post at a speed of **1.2 m/s**. If the lamp is **3.6 m** above the ground, find the length of her shadow after **4 seconds**.',
              copyCheck: 'Convert `90 cm = 0.9 m` IMMEDIATELY on Line 1 — do NOT mix `cm` and `m`!',
              step1Setup: 'Distance walked `BD = 1.2 × 4 = 4.8 m`. Let shadow length `DE = x m`. Prove `△ABE ~ △CDE`.',
              midwayCheckpoint: '`BE / DE = AB / CD` → `(4.8 + x) / x = 3.6 / 0.9 = 4`.',
              finalAnswer: 'Length of shadow = **1.6 m**.',
              fullSolution:
                '1. Girl height `CD = 90 cm = 0.9 m`; Lamp `AB = 3.6 m`. Distance walked `BD = 1.2 × 4 = 4.8 m`. [1M]\n2. In `△ABE` and `△CDE`: `∠B = ∠D = 90°`, `∠E = ∠E` (common) → `△ABE ~ △CDE` [AA]. [1M]\n3. `(4.8 + x)/x = 3.6/0.9 = 4` → `4.8 + x = 4x` → `3x = 4.8` → `x = 1.6 m`. [1M]',
              sillyTrapNote: 'Setting `4.8/x = 3.6/0.9` instead of `(4.8 + x)/x` (shadow base `BE` is total distance from lamp-post to shadow tip!).',
            },
            {
              id: 'm06-p6',
              numberLabel: 'Drill 6.6',
              marks: 3,
              timeMinutes: 4,
              tag: 'Standard 041 Rider (Ex 6.3 Q13)',
              question:
                '`D` is a point on the side `BC` of a triangle `ABC` such that `∠ADC = ∠BAC`. Show that `CA² = CB · CD`.',
              copyCheck: 'Notice `CA² = CB · CD` means `CA / CB = CD / CA` → compare `△BAC` and `△ADC`!',
              step1Setup: 'Write vertices matching equal angles: `∠BAC = ∠ADC` and `∠C = ∠C` (common).',
              midwayCheckpoint: '`△BAC ~ △ADC` [AA similarity].',
              finalAnswer: '`CA / CD = CB / CA → CA² = CB · CD` (Proved).',
              fullSolution:
                '1. Draw `△ABC` with point `D` on `BC`. [½M]\n2. In `△BAC` and `△ADC`: `∠BAC = ∠ADC` (given) and `∠ACB = ∠DCA` (common angle `C`). [1M]\n3. Hence `△BAC ~ △ADC` [AA similarity]. [½M]\n4. Corresponding sides proportional: `CB / CA = CA / CD` → `CA² = CB · CD`. Hence proved. [1M]',
              sillyTrapNote: 'Misaligning vertices as `△ABC ~ △ADC` (then `A` maps to `A` wrongly instead of `A` mapping to `D`!).',
            },
            {
              id: 'm06-p7',
              numberLabel: 'Drill 6.7',
              marks: 5,
              timeMinutes: 6,
              tag: 'Boss 5M: Medians (Ex 6.3 Q12/Q14)',
              question:
                'Sides `AB` and `BC` and median `AD` of a triangle `ABC` are respectively proportional to sides `PQ` and `QR` and median `PM` of `△PQR`. Show that `△ABC ~ △PQR`.',
              copyCheck: 'Median halves the opposite side: `BD = (1/2)BC` and `QM = (1/2)QR`!',
              step1Setup: 'First prove small left triangles `△ABD ~ △PQM` using **SSS** similarity (`AB/PQ = BD/QM = AD/PM`).',
              midwayCheckpoint: 'From `△ABD ~ △PQM`, extract `∠B = ∠Q`.',
              finalAnswer: 'Then `△ABC ~ △PQR` by **SAS** (`AB/PQ = BC/QR` and included `∠B = ∠Q`).',
              fullSolution:
                '1. Given `AB/PQ = BC/QR = AD/PM`. Since `AD, PM` are medians, `BC = 2BD` and `QR = 2QM`. [1M]\n2. Substitute: `AB/PQ = (2BD)/(2QM) = BD/QM = AD/PM` → `△ABD ~ △PQM` [SSS similarity]. [2M]\n3. Thus `∠B = ∠Q` [corresponding angles of similar triangles]. [1M]\n4. Now in `△ABC` and `△PQR`: `AB/PQ = BC/QR` (given) and `∠B = ∠Q` → `△ABC ~ △PQR` [SAS similarity]. [1M]',
              sillyTrapNote: 'Careful! For Ex 6.3 Q14 (`AB, AC` and median `AD`), you must extend the median by equal length (`DE = AD`) to form a parallelogram; for Q12 (`AB, BC` and median `AD`), half-base `SSS → SAS` solves it cleanly in 4 steps!',
            },
            {
              id: 'm06-p8',
              numberLabel: 'Drill 6.8',
              marks: 4,
              timeMinutes: 5,
              tag: 'Section E Case-Based (4M)',
              question:
                'A vertical pole of length **6 m** casts a shadow **4 m** long on the ground, and at the same time a nearby tower casts a shadow **28 m** long.\n(i) Which similarity criterion makes the pole-shadow triangle and tower-shadow triangle similar?\n(ii) Find the height of the tower.\n(iii) If another pole casts a **7 m** shadow at the same instant, find its height.',
              copyCheck: 'Pole `= 6 m` → shadow `= 4 m`. Tower shadow `= 28 m` (same ratio `6/4 = 3/2`).',
              step1Setup: 'Sun’s altitude is equal at the same time, and poles stand `90°` to ground → **AA similarity**.',
              midwayCheckpoint: '`6 / 4 = H / 28`.',
              finalAnswer: '(i) **AA** similarity; (ii) Tower height = **42 m**; (iii) Second pole height = **10.5 m**.',
              fullSolution:
                '(i) Both poles are vertical (`90°`) and sun rays make equal elevation angles → `AA` similarity. [1M]\n(ii) `H / 28 = 6 / 4` → `H = 28 × (3/2) = 42 m`. [1.5M]\n(iii) `h₂ / 7 = 6 / 4` → `h₂ = 21 / 2 = 10.5 m`. [1.5M]',
              sillyTrapNote: 'Setting `6 / 28 = H / 4` upside-down!',
            },
          ],
        },
      ],
    },
    {
      id: 'ch06-proofs-checkpoint',
      title: '4. Verbatim 5-Mark BPT Proof & Self-Check (Ch 6)',
      blocks: [
        {
          type: 'qa',
          marks: 5,
          tag: 'Standard 041 Proof (3M/5M)',
          question:
            'State and prove the **Basic Proportionality Theorem (Thales Theorem — Theorem 6.1)**.',
          answer:
            '**Statement:** If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio. [1M]\n**Given:** `△ABC` in which line `DE ∥ BC` intersects `AB` at `D` and `AC` at `E`.\n**To Prove:** `AD / DB = AE / EC`.\n**Construction:** Join `BE` and `CD`. Draw `DM ⊥ AC` and `EN ⊥ AB`. [1M]\n**Proof:**\n1. `ar(△ADE) / ar(△BDE) = [(1/2) × AD × EN] / [(1/2) × DB × EN] = AD / DB` ... (i) [1M]\n2. `ar(△ADE) / ar(△CDE) = [(1/2) × AE × DM] / [(1/2) × EC × DM] = AE / EC` ... (ii) [1M]\n3. Now `△BDE` and `△CDE` lie on the **same base `DE`** and between the **same parallels `DE` and `BC`**, so `ar(△BDE) = ar(△CDE)` ... (iii).\n4. From (i), (ii), and (iii): `AD / DB = AE / EC`. Hence proved. [1M]',
          markingTip: 'Write this exact 4-part layout (Statement, Given/To Prove/Construction, Area Ratio Steps, Same-Base-Same-Parallels Link) 3 times by hand!',
        },
        {
          type: 'checkpoint',
          prompt:
            'If `△ABC ~ △EDF` and `△ABC` is not similar to `△DEF`, which of the following is NOT true?',
          options: [
            { id: 'a', label: 'BC · EF = AC · FD' },
            { id: 'b', label: 'AB · EF = AC · DE' },
            { id: 'c', label: 'BC · DE = AB · EF' },
            { id: 'd', label: 'BC · DE = AB · FD' },
          ],
          correctIds: ['c'],
          successMsg:
            'Correct! From `△ABC ~ △EDF`: `AB/ED = BC/DF = AC/EF`. Cross-multiplying first & third gives `AB·EF = AC·ED` ✓; second & third gives `BC·EF = AC·DF` ✓; first & second gives `AB·DF = BC·ED` ✓. Only `BC·DE = AB·EF` (option c) fails!',
          hintMsg: 'Write the 3 equal ratios directly from the letter order `A↔E, B↔D, C↔F`: `AB/ED = BC/DF = AC/EF`.',
        },
      ],
    },
  ],
};
