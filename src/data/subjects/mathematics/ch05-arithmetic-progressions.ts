import { Subtopic } from '../../../types/curriculum';

export const ch05ArithmeticProgressions: Subtopic = {
  id: 'math-ch05-arithmetic-progressions',
  slug: 'ch05-arithmetic-progressions',
  title: 'Ch 5: Arithmetic Progressions (AP)',
  subtitle:
    'nth Term aₙ, Sum Sₙ, Term from the End, First Negative Term, Quadratic Sₙ Solving & Sₙ − Sₙ₋₁ Trick',
  estimatedMinutes: 50,
  difficulty: 'Core CBSE',
  ncertSection: 'NCERT Class 10 Mathematics — Chapter 5',
  learningObjectives: [
    'Compute common difference strictly as d = a₂ − a₁ (right minus left) so decreasing APs stay negative.',
    'Use both sum formulas Sₙ = (n/2)[2a + (n − 1)d] and Sₙ = (n/2)(a + l) cleanly without dropping the (n − 1) + 1.',
    'Find kth term from the end, first negative term, and recover aₙ = Sₙ − Sₙ₋₁ when Sₙ is given algebraically.',
  ],
  keywords: [
    'Arithmetic Progression',
    'nth term of AP',
    'Sum of n terms',
    'Term from the end',
    'First negative term',
  ],
  sections: [
    {
      id: 'ch05-formulas-scope',
      title: '1. Formula Vault & Core Tricks (Ch 5)',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Ch 5 Exam Glance',
          bullets: [
            '**Common Difference:** `d = a₂ − a₁` (ALWAYS Right − Left!). Three terms in AP can be chosen symmetrically as `a − d, a, a + d`.',
            '**nth Term from Beginning:** `aₙ = a + (n − 1)d`.',
            '**kth Term from the END:** Reverse the AP (`l` as first term, `−d` as difference) → `l − (k − 1)d`.',
            '**Sum of First n Terms:** `Sₙ = (n/2)[2a + (n − 1)d]` OR when first & last terms are known: `Sₙ = (n/2)(a + l)`.',
            '**Golden Link (`Sₙ → aₙ`):** `a₁ = S₁` and for `n ≥ 2`, `aₙ = Sₙ − Sₙ₋₁`.',
          ],
        },
        {
          type: 'table',
          caption: 'Ch 5 Quick Formula & Condition Checklist',
          headers: ['Situation', 'Best Formula to Write on Line 2', 'Watch-Out Trap'],
          rows: [
            [
              'How many terms `n` from `a` to `l`?',
              '`l = a + (n − 1)d`',
              '`(l − a)/d` equals `(n − 1)` — MUST add `+1` to get `n`!',
            ],
            [
              'Find first negative term (`d < 0`)',
              'Solve `a + (n − 1)d < 0` for smallest integer `n`',
              'If `aₙ = 0` for some `n`, `0` is NOT negative — take the NEXT integer `n + 1`!',
            ],
            [
              'Two valid `n` from quadratic `Sₙ` (with `d < 0`)',
              'Verify `aₙ` physically exists (e.g. logs in top row ≥ 1)',
              'Often one `n` yields negative items in the last row → reject it!',
            ],
            [
              'Check if `K` is a term of AP',
              'Solve `a + (n − 1)d = K` → `n` must be a **positive integer**',
              'Fractional or negative `n` means `K` is NOT in the AP!',
            ],
          ],
        },
      ],
    },
    {
      id: 'ch05-notebook-mistakes',
      title: '2. Silly-Mistake Notebook Warnings (Ch 5)',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Arjun',
          title: 'Forgetting "+ 1" After Dividing (l − a)/d',
          wrongWork: '7, 13, 19, ..., 205:  205 = 7 + (n − 1)6 → 198 / 6 = 33 → n = 33 terms',
          teacherFix: 'n − 1 = 198 / 6 = 33 → n = 33 + 1 = 34 terms',
          whyWrong:
            'Always circle `(n − 1)` until the very last line where you explicitly write `+ 1`!',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Nisha',
          title: 'Flipping Subtraction Order in d = a₁ − a₂',
          wrongWork: 'AP: 21, 18, 15, ... → d = 21 − 18 = +3 → a₂₀ = 21 + 19(3) = 78',
          teacherFix: 'd = a₂ − a₁ = 18 − 21 = −3 → a₂₀ = 21 + 19(−3) = 21 − 57 = −36',
          whyWrong:
            'When numbers decrease, `d` MUST be negative! Quick sanity check: if the AP is going down, a later term cannot be larger than the first term.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Saurav',
          title: 'Writing aₙ = Sₙ − Sₙ₋₁ Incorrectly as Sₙ − S₁',
          wrongWork: 'Given Sₙ = 4n − n², student writes a₂ = S₂ = 4(2) − 4 = 4',
          teacherFix: 'S₂ is a₁ + a₂ = 4, whereas a₁ = S₁ = 3, so a₂ = S₂ − S₁ = 4 − 3 = 1',
          whyWrong:
            '`Sₙ` is the **cumulative sum** of the first `n` terms, NOT the `n`th term!',
        },
      ],
    },
    {
      id: 'ch05-hand-practice',
      title: '3. Screen-to-Notebook Hand-Practice Workout (Ch 5)',
      blocks: [
        {
          type: 'hand-practice',
          title: 'Ch 5 Graded Notebook Drill (Standard 041)',
          subtitle: 'Write `a = ...`, `d = a₂ − a₁ = ...` explicitly on Line 1 for every question.',
          problems: [
            {
              id: 'm05-p1',
              numberLabel: 'Drill 5.1',
              marks: 2,
              timeMinutes: 3,
              tag: 'NCERT Core',
              question:
                'Find the **31st term** of an AP whose **11th term is 38** and **16th term is 73**.',
              copyCheck: '`a₁₁ = a + 10d = 38`, `a₁₆ = a + 15d = 73` (notice coefficients `10` and `15`, NOT `11` and `16`!).',
              step1Setup: 'Subtract `(a + 10d = 38)` from `(a + 15d = 73)` to find `d`.',
              midwayCheckpoint: '`5d = 35 → d = 7`; `a = 38 − 70 = −32`.',
              finalAnswer: '`a₃₁ = 178`.',
              fullSolution:
                '1. `a + 10d = 38` (i); `a + 15d = 73` (ii). [½M]\n2. (ii) − (i): `5d = 35 → d = 7`. [½M]\n3. `a = 38 − 10(7) = −32`. [½M]\n4. `a₃₁ = −32 + 30(7) = −32 + 210 = 178`. [½M]',
              sillyTrapNote: 'Solving `a + 11d = 38` instead of `a + 10d = 38`!',
            },
            {
              id: 'm05-p2',
              numberLabel: 'Drill 5.2',
              marks: 3,
              timeMinutes: 3,
              tag: 'Multiples Count',
              question: 'How many **three-digit numbers** are divisible by **7**?',
              copyCheck: 'Smallest 3-digit multiple of 7 is `105`; largest is `994` (`999 ÷ 7` remainder `5` → `999 − 5 = 994`).',
              step1Setup: 'AP: `105, 112, 119, ..., 994` (`a = 105, d = 7, aₙ = 994`).',
              midwayCheckpoint: '`889 = (n − 1) × 7 → n − 1 = 127`.',
              finalAnswer: '**128** three-digit numbers.',
              fullSolution:
                '1. AP is `105, 112, ..., 994` (`a = 105, d = 7, l = 994`). [1M]\n2. `994 = 105 + (n − 1)7` → `889 = 7(n − 1)`. [1M]\n3. `n − 1 = 127` → `n = 128`. [1M]',
              sillyTrapNote: 'Forgetting the `+1` after `889 ÷ 7 = 127`, or starting from `100` instead of `105`!',
            },
            {
              id: 'm05-p3',
              numberLabel: 'Drill 5.3',
              marks: 2,
              timeMinutes: 3,
              tag: 'From the End',
              question: 'Find the **20th term from the last term** of the AP: `3, 8, 13, ..., 253`.',
              copyCheck: 'Read carefully: "from the LAST term"! Use `l − (k − 1)d` with `l = 253, d = 5, k = 20`.',
              step1Setup: 'Reverse AP has `a′ = 253` and `d′ = −5`. Find `a′₂₀`.',
              midwayCheckpoint: '`253 − 19(5) = 253 − 95`.',
              finalAnswer: '`158`.',
              fullSolution:
                '1. Here `d = 8 − 3 = 5`, last term `l = 253`. [½M]\n2. Reversing the AP: `253, 248, ..., 3` has `a′ = 253, d′ = −5`. [½M]\n3. 20th term from end `= 253 + 19(−5) = 253 − 95 = 158`. [1M]',
              sillyTrapNote: 'Computing 20th term from the front (`3 + 19×5 = 98`)!',
            },
            {
              id: 'm05-p4',
              numberLabel: 'Drill 5.4',
              marks: 3,
              timeMinutes: 4,
              tag: 'Standard 041 Classic',
              question: 'Which term of the AP: `121, 117, 113, ...` is its **first negative term**?',
              copyCheck: '`a = 121`, `d = 117 − 121 = −4` (negative!).',
              step1Setup: 'Solve `aₙ < 0` → `121 + (n − 1)(−4) < 0`.',
              midwayCheckpoint: '`4(n − 1) > 121 → n > 31.25`.',
              finalAnswer: '**32nd term** (`a₃₂ = −3`).',
              fullSolution:
                '1. `a = 121, d = −4`. Let `aₙ < 0`. [1M]\n2. `121 − 4n + 4 < 0` → `125 < 4n` → `n > 125/4 = 31.25`. [1M]\n3. Smallest integer `n = 32`. Quick Check: `a₃₁ = 121 + 30(−4) = 1 > 0`, `a₃₂ = −3 < 0` ✓. [1M]',
              sillyTrapNote: 'Flipping `<` inequality wrong or forgetting that when `−4n < −125`, dividing by `−4` reverses the inequality sign to `n > 31.25`!',
            },
            {
              id: 'm05-p5',
              numberLabel: 'Drill 5.5',
              marks: 2,
              timeMinutes: 2,
              tag: 'Sum Warm-Up',
              question: 'Find the sum of the first **15 multiples of 8**.',
              copyCheck: 'AP is `8, 16, 24, ..., 120` (`a = 8, d = 8, n = 15, l = 15 × 8 = 120`).',
              step1Setup: 'Use `Sₙ = (n/2)(a + l) = (15/2)(8 + 120)`.',
              midwayCheckpoint: '`(15/2) × 128 = 15 × 64`.',
              finalAnswer: '`960`.',
              fullSolution:
                '1. First 15 multiples of 8: `8, 16, 24, ..., 120`. `a = 8, l = 120, n = 15`. [1M]\n2. `S₁₅ = (15/2)(8 + 120) = (15/2) × 128 = 15 × 64 = 960`. [1M]',
              sillyTrapNote: 'Adding `2a + (n − 1)d` wrongly instead of using the faster `(n/2)(a + l)`.',
            },
            {
              id: 'm05-p6',
              numberLabel: 'Drill 5.6',
              marks: 3,
              timeMinutes: 5,
              tag: 'NCERT Quadratic Sₙ',
              question: 'How many terms of the AP `9, 17, 25, ...` must be taken to give a sum of **636**?',
              copyCheck: '`a = 9, d = 8, Sₙ = 636`. Remember `n` MUST be a positive integer!',
              step1Setup: '`636 = (n/2)[2(9) + (n − 1)8]`. Cancel `/2` inside bracket first (`9 + 4(n − 1)`)!',
              midwayCheckpoint: '`4n² + 5n − 636 = 0`.',
              finalAnswer: '**12 terms** (`n = −53/4` rejected).',
              fullSolution:
                '1. `(n/2)[18 + 8n − 8] = 636` → `n(4n + 5) = 636` → `4n² + 5n − 636 = 0`. [1.5M]\n2. Factorise (`4 × −636 = −2544 = 53 × −48`): `(4n + 53)(n − 12) = 0`. [1M]\n3. Reject `n = −53/4` (not a natural number). Thus `n = 12`. Check: `(12/2)(18 + 88) = 6 × 106 = 636` ✓. [½M]',
              sillyTrapNote: 'Multiplying `636 × 2 = 1272` and factoring `8n² + 10n − 1272 = 0` without dividing by 2 first!',
            },
            {
              id: 'm05-p7',
              numberLabel: 'Drill 5.7',
              marks: 5,
              timeMinutes: 6,
              tag: 'Standard 041 Must-Know: Sₙ → aₙ',
              question:
                'If the sum of the first `n` terms of an AP is `Sₙ = 4n − n²`, what is the first term (`S₁`)? What is the sum of first two terms? What is the **second term**? Similarly, find the **3rd**, **10th**, and **nth** terms.',
              copyCheck: 'Do NOT assume `aₙ = 4n − n²`! Use `a₁ = S₁` and `aₙ = Sₙ − Sₙ₋₁`!',
              step1Setup: 'Compute `S₁ = 4(1) − 1`, `S₂ = 4(2) − 4`, `S₃ = 4(3) − 9`, and `Sₙ₋₁ = 4(n − 1) − (n − 1)²`.',
              midwayCheckpoint: '`S₁ = 3, S₂ = 4, S₃ = 3`; therefore `a₁ = 3, a₂ = 4 − 3 = 1, a₃ = 3 − 4 = −1`.',
              finalAnswer: '`a₁ = 3`, `S₂ = 4`, `a₂ = 1`, `a₃ = −1`, `a₁₀ = −15`, `aₙ = 5 − 2n`.',
              fullSolution:
                '1. `a₁ = S₁ = 4(1) − 1² = 3`. `S₂ = 4(2) − 2² = 4` → `a₂ = S₂ − S₁ = 4 − 3 = 1`. [2M]\n2. `d = a₂ − a₁ = 1 − 3 = −2` → `a₃ = 1 − 2 = −1`, `a₁₀ = 3 + 9(−2) = −15`. [1.5M]\n3. `aₙ = Sₙ − Sₙ₋₁ = (4n − n²) − [4(n − 1) − (n² − 2n + 1)] = (4n − n²) − (−n² + 6n − 5) = 5 − 2n`. Check `a₁₀ = 5 − 20 = −15` ✓. [1.5M]',
              sillyTrapNote: 'Dropping brackets when subtracting `Sₙ₋₁`, or forgetting `(n − 1)² = n² − 2n + 1`!',
            },
            {
              id: 'm05-p8',
              numberLabel: 'Drill 5.8',
              marks: 4,
              timeMinutes: 6,
              tag: 'Section E Case-Based: Stacking Logs',
              question:
                '**200 logs** are stacked such that **20 logs** are in the bottom row, **19** in the next, **18** in the row next to it, and so on.\n(i) Form the AP and quadratic equation for the number of rows `n`.\n(ii) Solve for `n`, check which value is physically valid, and state how many logs are in the top row.',
              copyCheck: '`a = 20`, `d = 19 − 20 = −1`, `Sₙ = 200`.',
              step1Setup: '`200 = (n/2)[2(20) + (n − 1)(−1)]`.',
              midwayCheckpoint: '`n² − 41n + 400 = 0 → (n − 25)(n − 16) = 0`.',
              finalAnswer: '**16 rows** (`n = 25` rejected since `a₂₅ = −4 < 0`); top (16th) row has **5 logs**.',
              fullSolution:
                '(i) `a = 20, d = −1, Sₙ = 200` → `400 = n(41 − n)` → `n² − 41n + 400 = 0`. [1.5M]\n(ii) `(n − 25)(n − 16) = 0` → `n = 25` or `16`. Check `a₂₅ = 20 + 24(−1) = −4` (impossible number of logs!), so reject `n = 25`. Thus `16` rows, top row `a₁₆ = 20 + 15(−1) = 5` logs. [2.5M]',
              sillyTrapNote: 'Accepting `n = 25` without checking `a₂₅ = −4` (never have negative objects in the top row!).',
            },
          ],
        },
      ],
    },
    {
      id: 'ch05-proofs-checkpoint',
      title: '4. Standard 041 Proof & Self-Check (Ch 5)',
      blocks: [
        {
          type: 'qa',
          marks: 5,
          tag: 'Standard 041 Proof (3M/5M)',
          question:
            'If the `p`th term of an AP is `1/q` and the `q`th term is `1/p` (`p ≠ q`), prove that the sum of the first `pq` terms is `(1/2)(pq + 1)`.',
          answer:
            '1. Let first term `= a`, common difference `= d`. Given `a + (p − 1)d = 1/q` (i) and `a + (q − 1)d = 1/p` (ii). [1M]\n2. Subtract (ii) from (i): `(p − q)d = (1/q) − (1/p) = (p − q)/(pq)`. Since `p ≠ q`, divide by `(p − q)` → `d = 1/(pq)`. [1.5M]\n3. Plug `d = 1/(pq)` into (i): `a + (p − 1)/(pq) = 1/q` → `a = 1/q − 1/q + 1/(pq) = 1/(pq)`. [1M]\n4. Compute `S_{pq} = (pq/2)[2a + (pq − 1)d] = (pq/2)[2/(pq) + (pq − 1)/(pq)] = (pq/2) × [(pq + 1)/(pq)] = (1/2)(pq + 1)`. Hence proved. [1.5M]',
          markingTip: 'Notice how `(p − 1)/(pq)` splits cleanly into `1/q − 1/(pq)` so `1/q` cancels immediately!',
        },
        {
          type: 'checkpoint',
          prompt:
            'In an AP, if `d = −4`, `n = 7`, and `aₙ = 4`, what is the first term `a`?',
          options: [
            { id: 'a', label: '6' },
            { id: 'b', label: '7' },
            { id: 'c', label: '20' },
            { id: 'd', label: '28' },
          ],
          correctIds: ['d'],
          successMsg: 'Correct! `4 = a + (7 − 1)(−4) = a − 24` → `a = 4 + 24 = 28`!',
          hintMsg: 'Substitute into `aₙ = a + (n − 1)d` carefully: watch the minus sign in `6 × (−4)`!',
        },
      ],
    },
  ],
};
