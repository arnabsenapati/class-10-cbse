import { Subtopic } from '../../../types/curriculum';

export const ch08IntroTrigonometry: Subtopic = {
  id: 'math-ch08-intro-trigonometry',
  slug: 'ch08-intro-trigonometry',
  title: 'Ch 8: Introduction to Trigonometry',
  subtitle:
    'Right-Triangle Ratios (P/B/H Swap), Standard Angles (0°–90°), Fundamental Identities & All 10 Classic NCERT Ex 8.3 Proofs',
  estimatedMinutes: 60,
  difficulty: 'Board Mastery',
  ncertSection: 'NCERT Class 10 Mathematics — Chapter 8',
  learningObjectives: [
    'Identify Opposite (P) and Adjacent (B) dynamically depending on whether the angle is A or C.',
    'Evaluate exact expressions with sin, cos, tan, cosec, sec, cot at 0°, 30°, 45°, 60°, 90° without fraction-squaring slips.',
    'Prove all Standard (041) identities using sin/cos conversion, algebraic factorisation, and the 1 = sec²θ − tan²θ trick.',
  ],
  keywords: [
    'Trigonometric ratios',
    'Standard trig values',
    'Trigonometric identities',
    'sin^2 + cos^2 = 1',
    'NCERT Ex 8.3 identities',
  ],
  sections: [
    {
      id: 'ch08-formulas-scope',
      title: '1. Identities Vault, Table & Rationalized Scope',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Ch 8 Exam Glance',
          bullets: [
            '**SOH–CAH–TOA:** `sin θ = P/H`, `cos θ = B/H`, `tan θ = P/B = sin θ / cos θ`. Reciprocals: `cosec θ = 1/sin θ`, `sec θ = 1/cos θ`, `cot θ = 1/tan θ = cos θ / sin θ`.',
            '**3 Pythagorean Identities:** (1) `sin²θ + cos²θ = 1` → `1 − cos²θ = sin²θ`, `1 − sin²θ = cos²θ`; (2) `1 + tan²θ = sec²θ` → `sec²θ − tan²θ = 1`; (3) `1 + cot²θ = cosec²θ` → `cosec²θ − cot²θ = 1`.',
            '**Difference-of-Squares Gold:** `sec²θ − tan²θ = (sec θ − tan θ)(sec θ + tan θ) = 1` → `sec θ + tan θ = 1/(sec θ − tan θ)`. Same for `cosec θ ± cot θ`!',
            '**Universal Identity Rescue:** When stuck on a proof, convert EVERYTHING (`tan, cot, sec, cosec`) into `sin θ` and `cos θ` and take a clean LCM!',
          ],
        },
        {
          type: 'visual-diagram',
          diagramId: 'trig-right-triangle-and-table',
          title: 'Interactive P/B Swap by Active Angle & Standard Value Grid',
          caption: 'Toggle between Angle A and Angle C so you never invert sin C and cos C!',
        },
        {
          type: 'callout',
          variant: 'trap',
          title: 'Rationalized Syllabus Check — Complementary Angles Deleted',
          body: 'CBSE **deleted** **Trigonometric Ratios of Complementary Angles** (`sin(90° − A) = cos A`, `tan(90° − A) = cot A` — old Ex 8.3)! As a result, old **Ex 8.4** is now **Ex 8.3** in NCERT. Do NOT waste study time on `90° − θ` proofs.',
        },
      ],
    },
    {
      id: 'ch08-notebook-mistakes',
      title: '2. Silly-Mistake Notebook Warnings (Ch 8)',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Kabir',
          title: 'Assuming 3–4–5 Triple When Hypotenuse = 4',
          wrongWork: 'sin A = 3/4 → opposite P = 3, hypotenuse H = 4 → adjacent B = 5',
          teacherFix: 'B = √(H² − P²) = √(4² − 3²) = √(16 − 9) = √7 → cos A = √7 / 4',
          whyWrong:
            '`3–4–5` works ONLY when `3` and `4` are the two legs (`tan A = 3/4`, so `H = 5`)! When `sin A = 3/4`, `4` is already the Hypotenuse!',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Aanya',
          title: 'Forgetting to Square the Denominator in (√3/2)² or (2/√3)²',
          wrongWork: 'cos²30° = (√3/2)² = 3/2',
          teacherFix: 'cos²30° = (√3)² / 2² = 3 / 4',
          whyWrong:
            'Squaring a fraction squares BOTH numerator AND denominator!',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Nikhil',
          title: 'Writing a/b + c/d Fraction Wrongly While Proving Trig Identities',
          wrongWork: 'cos A/(1 + sin A) + (1 + sin A)/cos A = (cos²A + 1 + sin²A) / [cos A(1 + sin A)]',
          teacherFix: 'Expand (1 + sin A)² = 1 + 2 sin A + sin²A carefully! Never drop 2ab!',
          whyWrong:
            '`(1 + sin A)²` is `1 + 2sin A + sin²A`, NOT `1 + sin²A`! Dropping the middle term `2 sin A` destroys the `(1 + sin A)` factor needed to cancel!',
        },
      ],
    },
    {
      id: 'ch08-hand-practice',
      title: '3. Screen-to-Notebook Hand-Practice Workout (Ch 8)',
      blocks: [
        {
          type: 'hand-practice',
          title: 'Ch 8 Graded Notebook Drill (Standard 041 — Values + Proofs)',
          subtitle: 'Write LHS clearly, do NOT touch RHS simultaneously when proving identities!',
          problems: [
            {
              id: 'm08-p1',
              numberLabel: 'Drill 8.1',
              marks: 2,
              timeMinutes: 3,
              tag: 'Ratio + Angle Swap',
              question:
                'In `△ABC`, right-angled at `B`, `sin A = 3/4`. Find `cos A`, `tan A`, and `sin C`.',
              copyCheck: '`4` is Hypotenuse `AC`, NOT adjacent side! Draw `△ABC` right-angled at `B`.',
              step1Setup: 'Let `BC = 3k`, `AC = 4k`. Use Pythagoras to find `AB`.',
              midwayCheckpoint: '`AB = √(16k² − 9k²) = √7 k`.',
              finalAnswer: '`cos A = √7/4`, `tan A = 3/√7`, `sin C = AB/AC = √7/4`.',
              fullSolution:
                '1. Draw right `△ABC` (`∠B = 90°`), `BC = 3k, AC = 4k`. [½M]\n2. `AB = √(AC² − BC²) = √(16k² − 9k²) = √7 k`. [½M]\n3. `cos A = AB/AC = √7/4`, `tan A = BC/AB = 3/√7`, `sin C = AB/AC = √7/4`. [1M]',
              sillyTrapNote: 'Saying `AB = 5` by blindly chanting `3–4–5`!',
            },
            {
              id: 'm08-p2',
              numberLabel: 'Drill 8.2',
              marks: 3,
              timeMinutes: 4,
              tag: 'NCERT Exact Evaluation',
              question:
                'Evaluate by hand:\n`(5 cos² 60° + 4 sec² 30° − tan² 45°) / (sin² 30° + cos² 30°)`',
              copyCheck: '`cos 60° = 1/2`, `sec 30° = 2/√3` (`sec²30° = 4/3`!), `tan 45° = 1`.',
              step1Setup: 'Numerator `= 5(1/2)² + 4(2/√3)² − 1²`; Denominator `= (1/2)² + (√3/2)²`.',
              midwayCheckpoint: 'Numerator `= 5/4 + 16/3 − 1`, Denominator `= 1/4 + 3/4 = 1`.',
              finalAnswer: '`67 / 12`.',
              fullSolution:
                '1. Substitute values: `[5(1/4) + 4(4/3) − 1] / [1/4 + 3/4]`. [1M]\n2. Denominator `= 4/4 = 1`. [½M]\n3. Numerator with LCM 12: `(15 + 64 − 12) / 12 = 67 / 12`. [1.5M]',
              sillyTrapNote: 'Writing `4(2/√3)² = 8/3` instead of `4 × (4/3) = 16/3` (forgetting to square `2`!).',
            },
            {
              id: 'm08-p3',
              numberLabel: 'Drill 8.3',
              marks: 3,
              timeMinutes: 3,
              tag: 'Inverse Angle Pair',
              question:
                'If `tan(A + B) = √3` and `tan(A − B) = 1/√3`, `0° < A + B ≤ 90°`, `A > B`, find `A` and `B`.',
              copyCheck: 'Check `tan 60° = √3` and `tan 30° = 1/√3` (do NOT confuse with `cot`!).',
              step1Setup: 'Set `A + B = 60°` and `A − B = 30°`, then solve linear pair.',
              midwayCheckpoint: 'Adding gives `2A = 90°`.',
              finalAnswer: '`A = 45°`, `B = 15°`.',
              fullSolution:
                '1. `tan(A + B) = √3 = tan 60°` → `A + B = 60°` (i). [1M]\n2. `tan(A − B) = 1/√3 = tan 30°` → `A − B = 30°` (ii). [1M]\n3. Add (i) & (ii): `2A = 90° → A = 45°`, then `B = 60° − 45° = 15°`. [1M]',
              sillyTrapNote: 'Confusing `1/√3` with `60°` instead of `30°` (`tan` grows with angle: `30° → 1/√3 < 1`, `45° → 1`, `60° → √3 > 1`).',
            },
            {
              id: 'm08-p4',
              numberLabel: 'Drill 8.4',
              marks: 3,
              timeMinutes: 4,
              tag: 'Identity #1 (NCERT Ex 8.3 Q4 i)',
              question:
                'Prove that `(cosec θ − cot θ)² = (1 − cos θ) / (1 + cos θ)`.',
              copyCheck: 'Convert LHS into `sin θ` and `cos θ` first!',
              step1Setup: 'LHS `= (1/sin θ − cos θ/sin θ)² = (1 − cos θ)² / sin²θ`.',
              midwayCheckpoint: 'Replace `sin²θ = 1 − cos²θ = (1 − cos θ)(1 + cos θ)`.',
              finalAnswer: 'Cancel `(1 − cos θ)` once → `(1 − cos θ)/(1 + cos θ) = RHS`.',
              fullSolution:
                '1. LHS `= (1/sin θ − cos θ/sin θ)² = (1 − cos θ)² / sin²θ`. [1M]\n2. Use `sin²θ = 1 − cos²θ = (1 − cos θ)(1 + cos θ)`. [1M]\n3. Cancel one `(1 − cos θ)` factor → `(1 − cos θ)/(1 + cos θ) = RHS`. Proved. [1M]',
              sillyTrapNote: 'Expanding `(1 − cos θ)²` too early instead of keeping it factored to cancel with `1 − cos²θ`!',
            },
            {
              id: 'm08-p5',
              numberLabel: 'Drill 8.5',
              marks: 3,
              timeMinutes: 4,
              tag: 'Identity #2 (NCERT Ex 8.3 Q4 ii)',
              question:
                'Prove that `cos A / (1 + sin A) + (1 + sin A) / cos A = 2 sec A`.',
              copyCheck: 'Cross-multiply denominators carefully and expand `(1 + sin A)²` completely!',
              step1Setup: 'LHS `= [cos²A + (1 + sin A)²] / [cos A (1 + sin A)]`.',
              midwayCheckpoint: 'Numerator `= cos²A + 1 + 2 sin A + sin²A = 2 + 2 sin A = 2(1 + sin A)`.',
              finalAnswer: 'Cancel `(1 + sin A)` → `2 / cos A = 2 sec A = RHS`.',
              fullSolution:
                '1. Take LCM `cos A(1 + sin A)`: Num `= cos²A + (1 + sin A)²`. [1M]\n2. Expand & group `sin²A + cos²A = 1`: Num `= 1 + 1 + 2 sin A = 2(1 + sin A)`. [1M]\n3. Cancel `(1 + sin A)` → `2/cos A = 2 sec A = RHS`. Proved. [1M]',
              sillyTrapNote: 'Opening the denominator `cos A(1 + sin A)` into `cos A + cos A sin A` makes cancelling invisible — keep denominator factored!',
            },
            {
              id: 'm08-p6',
              numberLabel: 'Drill 8.6',
              marks: 3,
              timeMinutes: 4,
              tag: 'Identity #3 (Square-Root Rationalisation)',
              question:
                'Prove that `√[(1 + sin A) / (1 − sin A)] = sec A + tan A`.',
              copyCheck: 'Multiply numerator & denominator INSIDE the root by conjugate `(1 + sin A)`!',
              step1Setup: 'LHS `= √[((1 + sin A)(1 + sin A)) / ((1 − sin A)(1 + sin A))]`.',
              midwayCheckpoint: 'Inside root `= (1 + sin A)² / (1 − sin²A) = (1 + sin A)² / cos²A`.',
              finalAnswer: 'Take square root → `(1 + sin A)/cos A = sec A + tan A = RHS`.',
              fullSolution:
                '1. Rationalise inside root by multiplying top & bottom by `(1 + sin A)`. [1M]\n2. Denominator becomes `1 − sin²A = cos²A`. [1M]\n3. Remove root: `(1 + sin A)/cos A = 1/cos A + sin A/cos A = sec A + tan A = RHS`. [1M]',
              sillyTrapNote: 'Forgetting to split `(1 + sin A)/cos A` into two separate fractions (`1/cos A + sin A/cos A`)!',
            },
            {
              id: 'm08-p7',
              numberLabel: 'Drill 8.7',
              marks: 5,
              timeMinutes: 6,
              tag: 'Boss 5M: NCERT Ex 8.3 Q4 (v)',
              question:
                'Prove that `(cos A − sin A + 1) / (cos A + sin A − 1) = cosec A + cot A`, using the identity `cosec²A = 1 + cot²A`.',
              copyCheck: 'Target has `cosec A` and `cot A` (`1/sin` and `cos/sin`), so divide EVERY term of num & den by `sin A`!',
              step1Setup: 'Divide numerator & denominator by `sin A` → `(cot A − 1 + cosec A) / (cot A + 1 − cosec A)`.',
              midwayCheckpoint: 'Replace `1` in the **numerator ONLY** with `(cosec²A − cot²A) = (cosec A − cot A)(cosec A + cot A)`.',
              finalAnswer: 'Factor out `(cosec A + cot A)` in numerator → remaining bracket cancels denominator → `cosec A + cot A = RHS`.',
              fullSolution:
                '1. Divide top & bottom by `sin A`: `(cot A + cosec A − 1) / (cot A − cosec A + 1)`. [1M]\n2. In numerator ONLY, replace `1` by `cosec²A − cot²A`: `[(cot A + cosec A) − (cosec A − cot A)(cosec A + cot A)] / (cot A − cosec A + 1)`. [2M]\n3. Factor out `(cosec A + cot A)`: `(cosec A + cot A)[1 − cosec A + cot A] / (cot A − cosec A + 1)`. [1M]\n4. Cancel matching bracket `(1 − cosec A + cot A)` → `cosec A + cot A = RHS`. Proved. [1M]',
              sillyTrapNote: 'Replacing `1` in BOTH numerator and denominator! Replace ONLY in numerator, AND keep brackets around `−(cosec A − cot A)` so signs flip to `−cosec A + cot A`!',
            },
            {
              id: 'm08-p8',
              numberLabel: 'Drill 8.8',
              marks: 3,
              timeMinutes: 4,
              tag: 'Standard 041 PYQ',
              question:
                'If `sin θ + cos θ = √3`, prove that `tan θ + cot θ = 1`.',
              copyCheck: 'Square BOTH sides of `sin θ + cos θ = √3` first to unlock `sin θ cos θ`!',
              step1Setup: '`(sin θ + cos θ)² = (√3)² → sin²θ + cos²θ + 2 sin θ cos θ = 3`.',
              midwayCheckpoint: '`1 + 2 sin θ cos θ = 3 → sin θ cos θ = 1`.',
              finalAnswer: '`tan θ + cot θ = (sin²θ + cos²θ)/(sin θ cos θ) = 1 / 1 = 1` (Proved).',
              fullSolution:
                '1. Squaring given equation: `sin²θ + cos²θ + 2 sin θ cos θ = 3`. [1M]\n2. `1 + 2 sin θ cos θ = 3 → 2 sin θ cos θ = 2 → sin θ cos θ = 1`. [1M]\n3. Now `tan θ + cot θ = sin θ/cos θ + cos θ/sin θ = (sin²θ + cos²θ)/(sin θ cos θ) = 1/1 = 1`. [1M]',
              sillyTrapNote: 'Thinking `(sin θ + cos θ)² = sin²θ + cos²θ` without the `2 sin θ cos θ` term!',
            },
          ],
        },
      ],
    },
    {
      id: 'ch08-proofs-checkpoint',
      title: '4. Two More Classic 5M Identities (Ex 8.3) & Self-Check',
      blocks: [
        {
          type: 'qa',
          marks: 5,
          tag: 'Standard 041 Proof (3M/5M)',
          question:
            'Prove: `tan θ / (1 − cot θ) + cot θ / (1 − tan θ) = 1 + sec θ cosec θ`.',
          answer:
            '1. Convert to `sin θ, cos θ`: `(sin θ/cos θ)/(1 − cos θ/sin θ) + (cos θ/sin θ)/(1 − sin θ/cos θ)` [1M]\n2. Simplify each compound fraction: `sin²θ / [cos θ(sin θ − cos θ)] + cos²θ / [sin θ(cos θ − sin θ)]`. [1M]\n3. Flip sign on second denominator `(cos θ − sin θ) = −(sin θ − cos θ)`: `sin²θ / [cos θ(sin θ − cos θ)] − cos²θ / [sin θ(sin θ − cos θ)]`. [1M]\n4. Common denominator `sin θ cos θ(sin θ − cos θ)`: Num `= sin³θ − cos³θ = (sin θ − cos θ)(sin²θ + sin θ cos θ + cos²θ)`. [1M]\n5. Cancel `(sin θ − cos θ)`: `(1 + sin θ cos θ)/(sin θ cos θ) = 1/(sin θ cos θ) + 1 = sec θ cosec θ + 1`. Hence proved. [1M]',
          markingTip: 'Step 3 (`cos θ − sin θ = −(sin θ − cos θ)`) and Step 4 (`a³ − b³ = (a − b)(a² + ab + b²)`) are the two exact hinges examiners check!',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Standard 041 Proof (3M/5M)',
          question:
            'Prove: `(sin A + cosec A)² + (cos A + sec A)² = 7 + tan²A + cot²A`.',
          answer:
            '1. Expand both squares carefully:\n`LHS = (sin²A + cosec²A + 2 sin A cosec A) + (cos²A + sec²A + 2 cos A sec A)`. [1M]\n2. Since `sin A · cosec A = 1` and `cos A · sec A = 1`, the middle terms give `2(1) + 2(1) = 4`, and `(sin²A + cos²A) = 1`. [1M]\n3. So `LHS = 1 + 4 + cosec²A + sec²A = 5 + (1 + cot²A) + (1 + tan²A) = 7 + tan²A + cot²A = RHS`. Proved. [1M]',
          markingTip: 'Write `sin A · cosec A = 1` and `cosec²A = 1 + cot²A`, `sec²A = 1 + tan²A` explicitly — turns 5 into 7 cleanly!',
        },
        {
          type: 'checkpoint',
          prompt:
            'What is the value of `9 sec² A − 9 tan² A`?',
          options: [
            { id: 'a', label: '1' },
            { id: 'b', label: '9' },
            { id: 'c', label: '8' },
            { id: 'd', label: '0' },
          ],
          correctIds: ['b'],
          successMsg: 'Correct! Factor out `9`: `9(sec² A − tan² A) = 9(1) = 9`!',
          hintMsg: 'Factor out `9` first, then apply `1 + tan² A = sec² A`!',
        },
      ],
    },
  ],
};
