import { Subtopic } from '../../../types/curriculum';

export const ch02Polynomials: Subtopic = {
  id: 'math-ch02-polynomials',
  slug: 'ch02-polynomials',
  title: 'Ch 2: Polynomials',
  subtitle:
    'Graphical Zeroes, Quadratic Relationship α + β = −b/a & αβ = c/a, Forming Polynomials & Symmetric Expressions',
  estimatedMinutes: 35,
  difficulty: 'Core CBSE',
  ncertSection: 'NCERT Class 10 Mathematics — Chapter 2',
  learningObjectives: [
    'Read the number of real zeroes of y = p(x) from x-axis intersections (ignoring y-axis cuts).',
    'Factorise quadratic polynomials cleanly — including missing linear (t² − 15) and missing constant (4u² + 8u) forms.',
    'Compute α² + β², 1/α + 1/β, α/β + β/α and form new polynomials without sign errors on −b/a.',
  ],
  keywords: [
    'Zeroes of polynomial',
    'Sum and product of zeroes',
    'α + β = -b/a',
    'Quadratic polynomial formation',
    'Symmetric identities',
  ],
  sections: [
    {
      id: 'ch02-formulas-scope',
      title: '1. Formula Vault, Rationalized Scope & Sign Rules',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Ch 2 Exam Glance',
          bullets: [
            '**Graphical Rule:** The number of real zeroes of `y = p(x)` equals the number of times the graph **cuts or touches the x-axis** (at most `n` for degree `n`).',
            '**Coefficient Identities (`ax² + bx + c`, `a ≠ 0`):** Sum `α + β = −b / a`; Product `αβ = c / a`.',
            '**Forming a Quadratic Polynomial:** `p(x) = k[x² − (α + β)x + αβ]` where `k ≠ 0` is any non-zero real constant (choose `k` = denominator to clear fractions!).',
            '**Key Symmetric Identities:** `α² + β² = (α + β)² − 2αβ` | `1/α + 1/β = (α + β)/(αβ) = −b/c` | `(α − β)² = (α + β)² − 4αβ`.',
          ],
        },
        {
          type: 'table',
          caption: 'Missing-Term Quadratic Templates & Coefficient Trap Check',
          headers: ['Polynomial Type', 'Identify a, b, c Carefully', 'Fastest Factorisation Method'],
          rows: [
            ['`t² − 15` (no `t` term)', '`a = 1, b = 0, c = −15`', '`t² − (√15)² = (t − √15)(t + √15)` → `±√15`'],
            ['`4u² + 8u` (no constant)', '`a = 4, b = 8, c = 0`', '`4u(u + 2) = 0` → `u = 0` and `u = −2`'],
            ['`6x² − 3 − 7x` (shuffled!)', 'Rearrange FIRST: `6x² − 7x − 3` → `b = −7, c = −3`', '`(3x + 1)(2x − 3)` → `−1/3, 3/2`'],
          ],
        },
        {
          type: 'callout',
          variant: 'trap',
          title: 'Rationalized Syllabus Check — Division Algorithm Deleted',
          body: 'CBSE **deleted** the Division Algorithm for polynomials (cubic polynomial long division `p(x) = g(x)q(x) + r(x)` and finding remaining zeroes of degree-4 polynomials). Do NOT drill cubic long division!',
        },
      ],
    },
    {
      id: 'ch02-notebook-mistakes',
      title: '2. Silly-Mistake Notebook Warnings (Ch 2)',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Meera',
          title: 'Double-Minus Error in α + β = −b / a',
          wrongWork: 'For p(x) = 3x² − 5x − 2:  α + β = −5/3',
          teacherFix: 'a = 3, b = −5, c = −2 → α + β = −(−5)/3 = +5/3',
          whyWrong:
            'Write the minus of the formula AND keep the minus of `b` inside brackets: `−(−5) = +5`!',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Rohan',
          title: 'Reading Coefficients From Unsorted Terms (6x² − 3 − 7x)',
          wrongWork: '6x² − 3 − 7x → a = 6, b = −3, c = −7',
          teacherFix: 'Reorder descending powers first: 6x² − 7x − 3 → a = 6, b = −7, c = −3',
          whyWrong:
            '`b` is ALWAYS the coefficient of `x`, and `c` is ALWAYS the constant term — regardless of print order! CBSE loves writing `6x² − 3 − 7x` to catch rushed readers.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Tanya',
          title: 'Using (α + β)² Directly for α² + β²',
          wrongWork: 'α² + β² = (α + β)²',
          teacherFix: 'α² + β² = (α + β)² − 2αβ',
          whyWrong:
            'Since `(α + β)² = α² + 2αβ + β²`, you MUST subtract `2αβ`! Also remember `α³ + β³ = (α + β)³ − 3αβ(α + β)`.',
        },
      ],
    },
    {
      id: 'ch02-hand-practice',
      title: '3. Screen-to-Notebook Hand-Practice Workout (Ch 2)',
      blocks: [
        {
          type: 'hand-practice',
          title: 'Ch 2 Graded Notebook Drill (Standard 041)',
          subtitle: 'Write every coefficient `a, b, c` on Line 1 before substituting into `−b/a` and `c/a`.',
          problems: [
            {
              id: 'm02-p1',
              numberLabel: 'Drill 2.1',
              marks: 2,
              timeMinutes: 3,
              tag: 'NCERT Core',
              question:
                'Find the zeroes of `p(x) = x² − 2x − 8` and verify the relationship between zeroes and coefficients.',
              copyCheck: '`a = 1, b = −2, c = −8`. Split `−2` into two numbers multiplying to `−8`.',
              step1Setup: '`x² − 4x + 2x − 8 = 0 → (x − 4)(x + 2) = 0`.',
              midwayCheckpoint: 'Zeroes are `α = 4, β = −2`.',
              finalAnswer: 'Zeroes: `4, −2`; `α + β = 2 = −(−2)/1`, `αβ = −8 = −8/1`.',
              fullSolution:
                '1. `x² − 2x − 8 = (x − 4)(x + 2)` → zeroes `4` and `−2`. [1M]\n2. Sum `= 4 + (−2) = 2`; `−b/a = −(−2)/1 = 2` ✓. [½M]\n3. Product `= 4 × (−2) = −8`; `c/a = −8/1 = −8` ✓. [½M]',
              sillyTrapNote: 'Flipping signs when moving from `(x − 4)(x + 2) = 0` to roots (`−4, +2` instead of `+4, −2`).',
            },
            {
              id: 'm02-p2',
              numberLabel: 'Drill 2.2',
              marks: 2,
              timeMinutes: 3,
              tag: 'NCERT Core',
              question:
                'Find the zeroes of `4s² − 4s + 1` and verify the relationship between zeroes and coefficients.',
              copyCheck: 'Notice `4s² − 4s + 1 = (2s − 1)²` — repeated zeroes MUST be listed twice!',
              step1Setup: 'Factorise: `(2s − 1)(2s − 1) = 0`.',
              midwayCheckpoint: '`s = 1/2, 1/2`.',
              finalAnswer: 'Zeroes: `1/2, 1/2`; Sum `= 1 = −(−4)/4`, Product `= 1/4 = 1/4`.',
              fullSolution:
                '1. `4s² − 2s − 2s + 1 = (2s − 1)(2s − 1) = 0` → `s = 1/2, 1/2`. [1M]\n2. Sum `= 1/2 + 1/2 = 1`; `−b/a = −(−4)/4 = 1` ✓. [½M]\n3. Product `= (1/2)(1/2) = 1/4`; `c/a = 1/4` ✓. [½M]',
              sillyTrapNote: 'Writing only ONE zero `1/2` and verifying `Sum = 1/2 ≠ 1`!',
            },
            {
              id: 'm02-p3',
              numberLabel: 'Drill 2.3',
              marks: 2,
              timeMinutes: 3,
              tag: 'Missing-Term Trap',
              question:
                'Find the zeroes of `t² − 15` and `4u² + 8u`, and verify the coefficient relationships for both.',
              copyCheck: 'For `t² − 15`: `b = 0`. For `4u² + 8u`: `c = 0`. Do NOT invent missing terms!',
              step1Setup: '`t² − (√15)² = (t − √15)(t + √15)` and `4u(u + 2) = 0`.',
              midwayCheckpoint: 'First: `t = ±√15`. Second: `u = 0, −2`.',
              finalAnswer: '(i) `√15, −√15` (`Sum=0, Prod=−15`); (ii) `0, −2` (`Sum=−2, Prod=0`).',
              fullSolution:
                '(i) `t = ±√15` → Sum `= √15 − √15 = 0 = −0/1`; Product `= (√15)(−√15) = −15 = −15/1`. [1M]\n(ii) `4u(u + 2) = 0` → `u = 0, −2` → Sum `= 0 − 2 = −2 = −8/4`; Product `= 0(−2) = 0 = 0/4`. [1M]',
              sillyTrapNote: 'Dropping `u = 0` by dividing `4u² + 8u = 0` by `u`, or writing `√15` only with `+` sign.',
            },
            {
              id: 'm02-p4',
              numberLabel: 'Drill 2.4',
              marks: 2,
              timeMinutes: 2,
              tag: 'Polynomial Formation',
              question:
                'Find a quadratic polynomial whose sum and product of zeroes are `1/4` and `−1` respectively.',
              copyCheck: 'Given `S = 1/4` (NOT a zero!), `P = −1` (NOT a zero!).',
              step1Setup: '`p(x) = k[x² − Sx + P] = k[x² − (1/4)x + (−1)]`.',
              midwayCheckpoint: 'Choose `k = 4` to clear the denominator `4`.',
              finalAnswer: '`4x² − x − 4` (or `k(4x² − x − 4)`).',
              fullSolution:
                '1. Standard formula: `p(x) = k[x² − (α + β)x + αβ]`. [1M]\n2. Substitute `α + β = 1/4`, `αβ = −1`: `k[x² − (1/4)x − 1]`. Take `k = 4` → `4x² − x − 4`. [1M]',
              sillyTrapNote: 'Using `+ (α + β)x` instead of `− (α + β)x` in the polynomial template!',
            },
            {
              id: 'm02-p5',
              numberLabel: 'Drill 2.5',
              marks: 3,
              timeMinutes: 4,
              tag: 'Standard 041 Symmetric',
              question:
                'If `α` and `β` are zeroes of the quadratic polynomial `6x² − 7x − 3`, find without solving for `α, β` the values of:\n(i) `α² + β²`   (ii) `1/α + 1/β`',
              copyCheck: '`a = 6, b = −7, c = −3`. Note `α + β = +7/6` and `αβ = −3/6 = −1/2`.',
              step1Setup: 'Write `α² + β² = (α + β)² − 2αβ` and `1/α + 1/β = (α + β)/(αβ)`.',
              midwayCheckpoint: '`(7/6)² − 2(−1/2) = 49/36 + 1`.',
              finalAnswer: '(i) `85/36`   (ii) `−7/3`.',
              fullSolution:
                '1. `α + β = −(−7)/6 = 7/6`, `αβ = −3/6 = −1/2`. [1M]\n2. `α² + β² = (7/6)² − 2(−1/2) = 49/36 + 1 = (49 + 36)/36 = 85/36`. [1M]\n3. `1/α + 1/β = (7/6) ÷ (−1/2) = (7/6) × (−2/1) = −7/3`. [1M]',
              sillyTrapNote: 'Flipping `(7/6) ÷ (−1/2)` wrong as `−7/12` instead of multiplying by `−2/1` to get `−7/3`!',
            },
            {
              id: 'm02-p6',
              numberLabel: 'Drill 2.6',
              marks: 3,
              timeMinutes: 4,
              tag: 'Standard 041 PYQ',
              question:
                'If one zero of the polynomial `(k² + 4)x² + 13x + 4k` is the reciprocal of the other, find the value of `k`.',
              copyCheck: '`a = k² + 4`, `b = 13`, `c = 4k`. Reciprocal zeroes mean `α` and `1/α`!',
              step1Setup: 'Product of zeroes = `α · (1/α) = 1`, so `c / a = 1`.',
              midwayCheckpoint: '`4k / (k² + 4) = 1 → k² − 4k + 4 = 0`.',
              finalAnswer: '`k = 2`.',
              fullSolution:
                '1. Let zeroes be `α` and `1/α`. Product `= α × (1/α) = 1`. [1M]\n2. `c/a = 4k/(k² + 4) = 1` → `k² − 4k + 4 = 0`. [1M]\n3. `(k − 2)² = 0` → `k = 2`. [1M]',
              sillyTrapNote: 'Setting `Sum = 1` instead of `Product = 1` when told zeroes are reciprocals!',
            },
            {
              id: 'm02-p7',
              numberLabel: 'Drill 2.7',
              marks: 3,
              timeMinutes: 4,
              tag: 'Standard 041 Twist',
              question:
                'If `α` and `β` are zeroes of `x² − 5x + 6`, find a quadratic polynomial whose zeroes are `α²` and `β²`.',
              copyCheck: '`α + β = 5`, `αβ = 6`. New zeroes are `α²` and `β²`.',
              step1Setup: 'Find `S′ = α² + β² = (α + β)² − 2αβ` and `P′ = α²β² = (αβ)²`.',
              midwayCheckpoint: '`S′ = 5² − 2(6) = 13` and `P′ = 6² = 36`.',
              finalAnswer: '`k(x² − 13x + 36)` (i.e. `x² − 13x + 36`).',
              fullSolution:
                '1. `α + β = 5`, `αβ = 6`. [1M]\n2. New sum `S′ = α² + β² = 25 − 12 = 13`. New product `P′ = (αβ)² = 36`. [1M]\n3. Required polynomial `= x² − 13x + 36` (verify roots `9` and `4` = `3², 2²` ✓). [1M]',
              sillyTrapNote: 'Writing `P′ = αβ = 6` instead of `α²β² = 36`!',
            },
            {
              id: 'm02-p8',
              numberLabel: 'Drill 2.8',
              marks: 4,
              timeMinutes: 5,
              tag: 'Section E Case-Based (4M)',
              question:
                'The path of a kicked football is modelled by `h(x) = −x² + 5x − 4`, where `h(x)` is height (in metres) and `x` is horizontal distance.\n(i) How many times does the ball cross/touch `h = 0`?\n(ii) Find the zeroes of `h(x)` and check `α + β`.\n(iii) Find the value of `(α − β)²` using `α + β` and `αβ`.',
              copyCheck: 'Be careful: `a = −1` (negative!), `b = 5`, `c = −4`!',
              step1Setup: 'Factorise `−(x² − 5x + 4) = −(x − 1)(x − 4)`. Also recall `(α − β)² = (α + β)² − 4αβ`.',
              midwayCheckpoint: '`α + β = −5/(−1) = 5`, `αβ = (−4)/(−1) = 4`.',
              finalAnswer: '(i) `2` times; (ii) Zeroes `1, 4` (`α + β = 5`); (iii) `(α − β)² = 9`.',
              fullSolution:
                '(i) Discriminant `D = 25 − 16 = 9 > 0` → `2` zeroes. [1M]\n(ii) `−(x − 1)(x − 4) = 0` → `x = 1 m` and `x = 4 m`; `α + β = 5 = −5/(−1)` ✓. [1.5M]\n(iii) `(α − β)² = 5² − 4(4) = 25 − 16 = 9` (check `(4 − 1)² = 9` ✓). [1.5M]',
              sillyTrapNote: 'Missing the negative sign in `a = −1`, writing `α + β = −5` instead of `+5`!',
            },
          ],
        },
      ],
    },
    {
      id: 'ch02-proofs-checkpoint',
      title: '4. Board Model & Self-Check (Ch 2)',
      blocks: [
        {
          type: 'qa',
          marks: 3,
          tag: 'Examiner Step-Marking Model',
          question:
            'If `α` and `β` are zeroes of `2x² + 5x + k` satisfying the relation `α² + β² + αβ = 21/4`, find the value of `k`.',
          answer:
            '1. From `2x² + 5x + k`: `α + β = −5/2` and `αβ = k/2`. [1M]\n2. Rewrite LHS: `α² + β² + αβ = (α² + 2αβ + β²) − αβ = (α + β)² − αβ`. [1M]\n3. Substitute: `(−5/2)² − (k/2) = 21/4` → `25/4 − k/2 = 21/4` → `k/2 = 25/4 − 21/4 = 4/4 = 1` → `k = 2`. [1M]',
          markingTip: 'Notice how rewriting `α² + β² + αβ = (α + β)² − αβ` avoids subtracting `2αβ` and adding `αβ` separately!',
        },
        {
          type: 'checkpoint',
          prompt:
            'If the sum of the zeroes of `p(x) = (k − 1)x² + kx + 1` is `−3`, what is the value of `k`?',
          options: [
            { id: 'a', label: 'k = 3/2' },
            { id: 'b', label: 'k = 3/4' },
            { id: 'c', label: 'k = −3/4' },
            { id: 'd', label: 'k = −3/2' },
          ],
          correctIds: ['a'],
          successMsg:
            'Spot on! `−k / (k − 1) = −3` → multiply both sides by `−1` to get `k / (k − 1) = 3` → `k = 3k − 3` → `2k = 3` → `k = 3/2`.',
          hintMsg: 'Check signs carefully: `−b/a = −k/(k − 1) = −3`. Multiply both sides by `−1` FIRST!',
        },
      ],
    },
  ],
};
