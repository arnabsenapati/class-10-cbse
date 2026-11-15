import { Subtopic } from '../../../types/curriculum';

export const ch01RealNumbers: Subtopic = {
  id: 'math-ch01-real-numbers',
  slug: 'ch01-real-numbers',
  title: 'Ch 1: Real Numbers',
  subtitle:
    'Fundamental Theorem of Arithmetic, Prime Factorisation HCF & LCM, Remainder Word Problems & Contradiction Proofs for √p',
  estimatedMinutes: 40,
  difficulty: 'Core CBSE',
  ncertSection: 'NCERT Class 10 Mathematics — Chapter 1',
  learningObjectives: [
    'Apply the Fundamental Theorem of Arithmetic to find HCF and LCM using prime factorisation without exponent slips.',
    'Use HCF(a, b) × LCM(a, b) = a × b for two integers (and avoid the 3-number false trap).',
    'Prove irrationality of √2, √3, √5 and mixed forms like 3 + 2√5 with full CBSE contradiction steps.',
    'Solve Standard (041) remainder, circular-track, and trailing-zero (4ⁿ / 6ⁿ) problems cleanly by hand.',
  ],
  keywords: [
    'Fundamental Theorem of Arithmetic',
    'HCF and LCM',
    'Irrationality proof',
    'Prime factorisation',
    'Composite number',
    'Remainder word problem',
  ],
  sections: [
    {
      id: 'ch01-formulas-scope',
      title: '1. Formula Vault, Rationalized Scope & Paper Layout',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Ch 1 Exam Glance',
          bullets: [
            '**Fundamental Theorem of Arithmetic:** Every composite number can be factorised as a product of primes, and this factorisation is unique apart from the order of prime factors.',
            '**HCF Rule:** Product of the **smallest power** of each **common** prime factor.',
            '**LCM Rule:** Product of the **greatest power** of **each (all)** prime factor involved in the numbers.',
            '**2-Number Identity:** For any two positive integers `a` and `b`, `HCF(a, b) × LCM(a, b) = a × b`. (**Warning:** Does NOT hold for 3 numbers `a, b, c`!)',
            '**Trailing Zero Check:** A number `kⁿ` ends with digit `0` ONLY if its prime factorisation contains BOTH `2` and `5`.',
          ],
        },
        {
          type: 'table',
          caption: 'Ch 1 Reference Formulas & Quick Recognition Cues',
          headers: ['Concept / Question Clue', 'Exact Formula / Rule', 'Typical CBSE Weight'],
          rows: [
            [
              '"Largest number dividing A, B leaving remainders r₁, r₂"',
              '`HCF(A − r₁, B − r₂)`',
              '2–3 Marks',
            ],
            [
              '"Minimum distance / bells ring together again / circular track meet"',
              '`LCM(t₁, t₂, t₃)`',
              '3–4 Marks (Case Study)',
            ],
            [
              '"Find LCM given HCF(a, b)"',
              '`LCM = (a × b) / HCF` (divide BEFORE multiplying!)',
              '1–2 Marks',
            ],
            [
              '"Prove √p is irrational" (p prime)',
              'Assume `√p = a/b` with `HCF(a, b) = 1` → show `p | a` and `p | b` → Contradiction!',
              '3 or 5 Marks Guaranteed',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'trap',
          title: 'Rationalized Syllabus Check — DO NOT Waste Time on Deleted Topics',
          body: 'CBSE has **deleted** Euclid’s Division Lemma (`a = bq + r` proofs) and Decimal Expansions (terminating vs non-terminating repeating `2ᵐ × 5ⁿ` exercises) from the rationalized NCERT textbook. Focus 100% on Prime Factorisation, HCF/LCM applications, and Irrationality proofs.',
        },
      ],
    },
    {
      id: 'ch01-notebook-mistakes',
      title: '2. Silly-Mistake Notebook Warnings (Ch 1)',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Aarav',
          title: 'Swapping HCF and LCM Exponents (and 3-Number Trap)',
          wrongWork: '12 = 2²×3, 18 = 2×3² → HCF = 2²×3² = 36, LCM = 2×3 = 6',
          teacherFix: 'HCF = min powers of common primes = 2¹×3¹ = 6; LCM = max powers = 2²×3² = 36',
          whyWrong:
            'Think **H**CF = **H**umble (lowest power common to all); **L**CM = **L**arge (highest power of every prime). Also NEVER use `HCF × LCM = a × b × c` for 3 numbers!',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Riya',
          title: 'Arithmetic Slip When Computing (306 × 657) / 9',
          wrongWork: '306 × 657 = 200,942 (carry slip!) → 200,942 ÷ 9 = wrong decimal',
          teacherFix: 'Divide FIRST: (306 ÷ 9) × 657 = 34 × 657 = 22,338',
          whyWrong:
            'Always cancel the denominator (`HCF`) against one of the numbers **before** multiplying large 3-digit numbers! Smaller numbers drastically cut carry/addition slips.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Kabir',
          title: 'Missing "Coprime" Line in √5 Proof',
          wrongWork: 'Let √5 = p/q. Squaring: 5q² = p² → 5 divides p and 5 divides q. Contradiction!',
          teacherFix: 'Line 1 MUST state: "Let √5 = a/b where a, b are coprime integers (HCF = 1), b ≠ 0."',
          whyWrong:
            'Without declaring `a` and `b` are **coprime** on Line 1, finding a common factor `5` is NOT a contradiction! CBSE examiners cut 1 full mark immediately if "coprime" is missing.',
        },
      ],
    },
    {
      id: 'ch01-hand-practice',
      title: '3. Screen-to-Notebook Hand-Practice Workout (Ch 1)',
      blocks: [
        {
          type: 'hand-practice',
          title: 'Ch 1 Graded Notebook Drill (Solve on Paper Before Revealing)',
          subtitle: 'Start the timer, write clean factor trees & complete contradiction sentences in your notebook.',
          problems: [
            {
              id: 'm01-p1',
              numberLabel: 'Drill 1.1',
              marks: 2,
              timeMinutes: 2,
              tag: 'NCERT Warm-Up',
              question:
                'Express **3825** as a product of its prime factors by drawing a neat factor tree / ladder in your notebook.',
              copyCheck: 'Digits are 3-8-2-5 (sum of digits = 18 → divisible by 9 and 5!).',
              step1Setup: 'Divide 3825 by smallest prime 3 first: `3825 ÷ 3 = 1275`.',
              midwayCheckpoint: '`3825 = 3 × 3 × 425`, then `425 = 5 × 85`.',
              finalAnswer: '`3825 = 3² × 5² × 17`',
              fullSolution:
                '1. `3825 ÷ 3 = 1275` [½M]\n2. `1275 ÷ 3 = 425`\n3. `425 ÷ 5 = 85`\n4. `85 ÷ 5 = 17` (prime) [1M]\n5. Write in exponent form: `3825 = 3² × 5² × 17` [½M]',
              sillyTrapNote: 'Leaving `425 ÷ 5 = 75` (subtraction carry mistake: 42 − 40 = 2, not 3!). Double check `5 × 85 = 425`.',
            },
            {
              id: 'm01-p2',
              numberLabel: 'Drill 1.2',
              marks: 2,
              timeMinutes: 3,
              tag: 'NCERT Core',
              question:
                'Find the HCF and LCM of **96** and **404** by prime factorisation, and verify `HCF × LCM = 96 × 404`.',
              copyCheck: 'Check `404 ÷ 2 = 202`, `202 ÷ 2 = 101` (101 is prime!).',
              step1Setup: 'Factorise: `96 = 2⁵ × 3¹` and `404 = 2² × 101¹`.',
              midwayCheckpoint: '`HCF = 2² = 4`.',
              finalAnswer: '`HCF = 4`, `LCM = 9696`; both products equal `38,784`.',
              fullSolution:
                '1. `96 = 2⁵ × 3` and `404 = 2² × 101` [1M]\n2. `HCF(96, 404) = 2² = 4` [½M]\n3. `LCM(96, 404) = 2⁵ × 3 × 101 = 96 × 101 = 9696` [½M]\n4. Check: `4 × 9696 = 38,784` and `96 × 404 = 38,784` ✓.',
              sillyTrapNote: 'Writing `LCM = (96 × 404)/4 = 24 × 404` is fast, EXCEPT you MUST write the prime-factorisation method because the question specifies it!',
            },
            {
              id: 'm01-p3',
              numberLabel: 'Drill 1.3',
              marks: 2,
              timeMinutes: 3,
              tag: '3-Number HCF/LCM',
              question:
                'Find the HCF and LCM of **12**, **15**, and **21** using prime factorisation, and verify whether `HCF × LCM = 12 × 15 × 21`.',
              copyCheck: 'Write all 3 numbers side-by-side in exponent form first.',
              step1Setup: '`12 = 2² × 3`, `15 = 3 × 5`, `21 = 3 × 7`.',
              midwayCheckpoint: '`HCF = 3` and `LCM = 2² × 3 × 5 × 7 = 420`.',
              finalAnswer: '`HCF = 3`, `LCM = 420`; `HCF × LCM = 1260 ≠ 3780` (formula does NOT hold for 3 numbers!).',
              fullSolution:
                '1. `12 = 2² × 3`, `15 = 3 × 5`, `21 = 3 × 7` [1M]\n2. Common prime is only `3¹` → `HCF = 3` [½M]\n3. `LCM = 2² × 3 × 5 × 7 = 420` [½M]\n4. Check: `3 × 420 = 1260`, whereas `12 × 15 × 21 = 3780`. Not equal!',
              sillyTrapNote: 'Never compute `LCM(12, 15, 21) = (12×15×21)/HCF`! That shortcut fails whenever pairs share primes.',
            },
            {
              id: 'm01-p4',
              numberLabel: 'Drill 1.4',
              marks: 2,
              timeMinutes: 2,
              tag: 'NCERT PYQ',
              question:
                'Given that `HCF(306, 657) = 9`, find `LCM(306, 657)`.',
              copyCheck: 'Numbers are `306`, `657`, `HCF = 9`. Cancel `9` BEFORE multiplying!',
              step1Setup: '`LCM(306, 657) = (306 × 657) / 9`.',
              midwayCheckpoint: '`306 ÷ 9 = 34`, so multiply `34 × 657`.',
              finalAnswer: '`LCM(306, 657) = 22,338`',
              fullSolution:
                '1. `HCF × LCM = a × b` [½M]\n2. `LCM = (306 × 657) / 9 = 34 × 657` [1M]\n3. `34 × 657 = 34 × (600 + 50 + 7) = 20400 + 1700 + 238 = 22,338` [½M]',
              sillyTrapNote: 'Multiplying `306 × 657` first invites digit-shift errors. Cancel `306/9 = 34` immediately!',
            },
            {
              id: 'm01-p5',
              numberLabel: 'Drill 1.5',
              marks: 2,
              timeMinutes: 3,
              tag: 'Standard 041 Reasoning',
              question:
                'Check whether `6ⁿ` can end with the digit `0` for any natural number `n`. Write the full CBSE justification in 4 clean lines.',
              copyCheck: 'Question asks about `6ⁿ`, where `n ∈ ℕ`.',
              step1Setup: 'State: If `6ⁿ` ends with `0`, it must be divisible by `10`, i.e., by both `2` and `5`.',
              midwayCheckpoint: 'Prime factorisation: `6ⁿ = (2 × 3)ⁿ = 2ⁿ × 3ⁿ`.',
              finalAnswer: 'No; `6ⁿ` can never end with digit `0` for any natural number `n`.',
              fullSolution:
                '1. For any number to end with `0`, it must be divisible by `10 = 2 × 5`, so `5` must be a prime factor. [1M]\n2. `6ⁿ = (2 × 3)ⁿ = 2ⁿ × 3ⁿ` contains only primes `2` and `3`. [½M]\n3. By uniqueness of the Fundamental Theorem of Arithmetic, `5` does not occur in the prime factorisation of `6ⁿ`. Hence `6ⁿ` cannot end with `0`. [½M]',
              sillyTrapNote: 'Skipping the mention of "uniqueness of Fundamental Theorem of Arithmetic" loses ½ mark.',
            },
            {
              id: 'm01-p6',
              numberLabel: 'Drill 1.6',
              marks: 2,
              timeMinutes: 3,
              tag: 'Standard 041 Reasoning',
              question:
                'Explain why `7 × 11 × 13 + 13` and `7 × 6 × 5 × 4 × 3 × 2 × 1 + 5` are composite numbers WITHOUT multiplying the entire expression out.',
              copyCheck: 'Factor out the repeated addend (`13` in first, `5` in second).',
              step1Setup: 'First: `13 × (7 × 11 + 1)`. Second: `5 × (7 × 6 × 4 × 3 × 2 × 1 + 1)`.',
              midwayCheckpoint: 'Inside brackets: `7 × 11 + 1 = 78`, and `7 × 6 × 4 × 3 × 2 × 1 + 1 = 1009`.',
              finalAnswer: 'Both express as products of more than two factors (`13 × 78` and `5 × 1009`), hence composite.',
              fullSolution:
                '1. `7 × 11 × 13 + 13 = 13(7 × 11 + 1) = 13 × 78 = 13 × 13 × 2 × 3`. Has factors other than 1 and itself → composite. [1M]\n2. `7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 = 5(1008 + 1) = 5 × 1009`. Product of two integers > 1 → composite. [1M]',
              sillyTrapNote: 'Forgetting the `+ 1` after factoring out `13` or `5` (writing `13(7 × 11)` instead of `13(7 × 11 + 1)`).',
            },
            {
              id: 'm01-p7',
              numberLabel: 'Drill 1.7',
              marks: 3,
              timeMinutes: 4,
              tag: 'Standard 041 Remainder Twist',
              question:
                'Find the largest number which divides **70** and **125**, leaving remainders **5** and **8** respectively.',
              copyCheck: 'Match order: `70 − 5` and `125 − 8`!',
              step1Setup: 'Subtract remainders first: `70 − 5 = 65` and `125 − 8 = 117`. Now find `HCF(65, 117)`.',
              midwayCheckpoint: '`65 = 5 × 13` and `117 = 3² × 13`.',
              finalAnswer: '`13`',
              fullSolution:
                '1. The required largest divisor completely divides `70 − 5 = 65` and `125 − 8 = 117`. [1M]\n2. Prime factorise: `65 = 5 × 13`; `117 = 3² × 13`. [1M]\n3. `HCF(65, 117) = 13`. Quick Check: `70 = 13×5 + 5` ✓, `125 = 13×9 + 8` ✓. [1M]',
              sillyTrapNote: 'Reversing remainders (`70 − 8` and `125 − 5`) or taking LCM instead of HCF.',
            },
            {
              id: 'm01-p8',
              numberLabel: 'Drill 1.8',
              marks: 4,
              timeMinutes: 5,
              tag: 'Section E Case-Based (4M)',
              question:
                'Three alarm clocks at a school ring at regular intervals of **12 min**, **15 min**, and **18 min**. They all ring together at **8:00 AM**.\n(i) After how many minutes will they ring together again, and at what time?\n(ii) Two morning walkers step off together with step measures **85 cm** and **102 cm**. What is the minimum distance each should walk so all can cover the distance in complete steps?',
              copyCheck: 'Part (i): `12, 15, 18` min from `8:00 AM`. Part (ii): `85 cm` and `102 cm`.',
              step1Setup: 'Both "together again" and "minimum distance in complete steps" require **LCM**.',
              midwayCheckpoint: '`LCM(12, 15, 18) = 180 min`; `85 = 5 × 17` and `102 = 2 × 3 × 17`.',
              finalAnswer: '(i) After `180 min` (3 hours), i.e., at **11:00 AM**; (ii) Minimum distance = **510 cm** (`5.1 m`).',
              fullSolution:
                '(i) `12 = 2²×3`, `15 = 3×5`, `18 = 2×3²` → `LCM = 2²×3²×5 = 180 min = 3 hours`. Next ring together at `8:00 AM + 3h = 11:00 AM`. [2M]\n(ii) `85 = 5×17`, `102 = 2×3×17` → `LCM = 2×3×5×17 = 510 cm`. (Walker 1 takes `6` steps, Walker 2 takes `5` steps). [2M]',
              sillyTrapNote: 'Leaving Part (i) at `180` without converting to `11:00 AM`, or taking `HCF(85, 102) = 17` instead of `LCM`.',
            },
          ],
        },
      ],
    },
    {
      id: 'ch01-proofs-checkpoint',
      title: '4. Guaranteed 3M/5M Irrationality Proofs & Self-Check',
      blocks: [
        {
          type: 'qa',
          marks: 5,
          tag: 'Standard 041 Proof (3M/5M)',
          question: 'Prove by hand that `√5` is an irrational number.',
          answer:
            '1. Let us assume, to the contrary, that `√5` is rational. [½M]\n2. Then we can find coprime integers `a` and `b` (`b ≠ 0`, `HCF(a, b) = 1`) such that `√5 = a / b` → `a = √5 b`. [1M]\n3. Squaring both sides: `a² = 5b²` ... (i). This implies `5` divides `a²`, so by theorem, `5` also divides `a`. [1M]\n4. Therefore, write `a = 5c` for some integer `c`. Substituting into (i): `(5c)² = 5b²` → `25c² = 5b²` → `b² = 5c²`. [1M]\n5. Thus `5` divides `b²`, so `5` also divides `b`. [½M]\n6. Therefore `a` and `b` have at least `5` as a common factor. This contradicts our assumption that `a` and `b` are coprime. This contradiction arose due to our wrong assumption that `√5` is rational. Hence `√5` is irrational. [1M]',
          markingTip: 'Replace 5 with 2 or 3 for √2 or √3 proofs — word-for-word identical!',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Standard 041 Proof (3M/5M)',
          question: 'Given that `√5` is irrational, prove that `3 + 2√5` is irrational.',
          answer:
            '1. Assume, to the contrary, that `3 + 2√5` is rational. [½M]\n2. Then there exist integers `a` and `b` (`b ≠ 0`, coprime) such that `3 + 2√5 = a / b`. [½M]\n3. Rearranging to isolate `√5`: `2√5 = (a / b) − 3 = (a − 3b) / b` → `√5 = (a − 3b) / (2b)`. [1M]\n4. Since `a, b, 3, 2` are integers and `b ≠ 0`, `(a − 3b)/(2b)` is a rational number, which implies `√5` is rational. [½M]\n5. This contradicts the given fact that `√5` is irrational. Hence our assumption is false and `3 + 2√5` is irrational. [½M]',
          markingTip: 'Do NOT square `3 + 2√5 = a/b`! Always isolate the single radical (`√5`) on LHS and move everything else to RHS in 2 lines.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Two numbers have `HCF = 16` and `LCM = 144`. Can this pair of numbers actually exist?',
          options: [
            { id: 'a', label: 'Yes — their product is 16 × 144 = 2304' },
            { id: 'b', label: 'Yes — because 16 divides 144 evenly (144 ÷ 16 = 9)' },
            { id: 'c', label: 'No — LCM must be smaller than HCF' },
            { id: 'd', label: 'No — 16 does not divide 144' },
          ],
          correctIds: ['b'],
          successMsg:
            'Spot on! HCF ALWAYS divides LCM cleanly (`144 = 16 × 9`). Example valid pair: 16 and 144 (or 48 and 48? No, 16×3 and 16×3 give LCM 48 — valid coprime split `9 = 1 × 9` gives `(16, 144)`).',
          hintMsg: 'Check whether `HCF` divides `LCM` cleanly (`144 ÷ 16 = ?`).',
        },
      ],
    },
  ],
};
