import { Subtopic } from '../../../types/curriculum';

export const ch04QuadraticEquations: Subtopic = {
  id: 'math-ch04-quadratic-equations',
  slug: 'ch04-quadratic-equations',
  title: 'Ch 4: Quadratic Equations',
  subtitle:
    'Factorisation, Quadratic Formula & Discriminant Nature of Roots, k-Value Equal-Root Traps, Upstream-Downstream Boats, Trains & Water Taps',
  estimatedMinutes: 55,
  difficulty: 'Board Mastery',
  ncertSection: 'NCERT Class 10 Mathematics — Chapter 4',
  learningObjectives: [
    'Use brackets around negative b and negative c in D = b² − 4ac and x = (−b ± √D)/(2a) every single time.',
    'Determine k for equal real roots (D = 0) while checking leading coefficient a ≠ 0.',
    'Set up and solve Standard (041) 5-mark word problems: boat & stream, train speed, water taps, and right triangles.',
    'Verify which root is physically valid (rejecting negative speeds/times or impossible x − 10 < 0 tap times).',
  ],
  keywords: [
    'Discriminant D = b^2 - 4ac',
    'Quadratic formula',
    'Nature of roots',
    'Upstream downstream speed',
    'Two water taps',
  ],
  sections: [
    {
      id: 'ch04-formulas-scope',
      title: '1. Formula Vault, Rationalized Scope & Sign Rules',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Ch 4 Exam Glance',
          bullets: [
            '**Standard Form:** `ax² + bx + c = 0`, where `a ≠ 0` (`a, b, c ∈ ℝ`).',
            '**Discriminant:** `D = b² − 4ac`. **Roots:** `x = (−b ± √D) / (2a)` (when `D ≥ 0`).',
            '**Nature of Roots:** `D > 0` → 2 distinct real roots | `D = 0` → 2 equal real roots (`x = −b/2a`) | `D < 0` → no real roots.',
            '**Speed–Time Golden Equation:** `Time = Distance / Speed`. Slower journey (`Distance / lower speed`) comes FIRST when writing `Time_slow − Time_fast = Δt`!',
          ],
        },
        {
          type: 'visual-diagram',
          diagramId: 'quadratic-parabola-discriminant',
          title: 'Discriminant Cases & The Double-Negative Bracket Rule',
          caption: 'Bracket `b` and `c` inside `D = (b)² − 4(a)(c)` so signs never flip.',
        },
        {
          type: 'callout',
          variant: 'trap',
          title: 'Rationalized Syllabus Check — Completing the Square Deleted',
          body: 'CBSE **deleted** the **Method of Completing the Square**! Solve quadratic equations ONLY by **Factorisation (Middle-Term Splitting)** or the **Quadratic Formula** (`−b ± √D` / `2a`).',
        },
      ],
    },
    {
      id: 'ch04-notebook-mistakes',
      title: '2. Silly-Mistake Notebook Warnings (Ch 4)',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Dev',
          title: 'Writing Slower Time Second in Speed Word Problems',
          wrongWork: '360/(x + 5) − 360/x = 1',
          teacherFix: 'Slower speed = smaller denominator = LARGER time → 360/x − 360/(x + 5) = 1',
          whyWrong:
            'Faster speed takes LESS time! Putting `360/(x + 5)` first produces `x² + 5x + 1800 = 0` which has `D < 0` (no real roots)!',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Sneha',
          title: 'Accepting k = 0 in kx(x − 2) + 6 = 0',
          wrongWork: '4k(k − 6) = 0 → k = 0 or k = 6 (both kept)',
          teacherFix: 'Reject k = 0 because a = k must be ≠ 0 for a quadratic equation → k = 6 only',
          whyWrong:
            'If `k = 0`, `kx²` vanishes and `0 + 6 = 0` is impossible! Always test whether your `k` value makes `a = 0`.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Karan',
          title: 'Dividing by Variable x Instead of Factoring',
          wrongWork: '2x² = 10x → divide by x → 2x = 10 → x = 5 (only 1 root)',
          teacherFix: '2x² − 10x = 0 → 2x(x − 5) = 0 → x = 0 or x = 5',
          whyWrong:
            'Dividing an equation by `x` throws away the root `x = 0` and loses half marks automatically!',
        },
      ],
    },
    {
      id: 'ch04-hand-practice',
      title: '3. Screen-to-Notebook Hand-Practice Workout (Ch 4)',
      blocks: [
        {
          type: 'hand-practice',
          title: 'Ch 4 Graded Notebook Drill (Standard 041 — Heavy Word-Problem Focus)',
          subtitle: 'Write Given + Let statement first, check slow-minus-fast order, and verify both roots!',
          problems: [
            {
              id: 'm04-p1',
              numberLabel: 'Drill 4.1',
              marks: 2,
              timeMinutes: 3,
              tag: 'Root Coefficient Trap',
              question: 'Find the roots of `√2 x² + 7x + 5√2 = 0` by factorisation.',
              copyCheck: '`a = √2, c = 5√2` → product `ac = √2 × 5√2 = 10` (an integer!).',
              step1Setup: 'Split `7x` into `5x + 2x`: `√2x² + 2x + 5x + 5√2 = 0`. Notice `2 = √2 × √2`!',
              midwayCheckpoint: '`√2x(x + √2) + 5(x + √2) = 0`.',
              finalAnswer: '`x = −√2` and `x = −5/√2` (or `−5√2/2`).',
              fullSolution:
                '1. `ac = √2 × 5√2 = 10`; factors summing to `7` are `2` and `5`. [½M]\n2. `√2x² + 2x + 5x + 5√2 = 0` → `√2x(x + √2) + 5(x + √2) = 0`. [1M]\n3. `(x + √2)(√2x + 5) = 0` → `x = −√2` or `x = −5/√2`. [½M]',
              sillyTrapNote: 'Getting stuck factoring `√2x² + 2x`: write `2` as `√2 · √2` so `√2x` pulls out cleanly!',
            },
            {
              id: 'm04-p2',
              numberLabel: 'Drill 4.2',
              marks: 2,
              timeMinutes: 3,
              tag: 'Sign Bracket Drill',
              question: 'Solve `3x² − 5x + 2 = 0` using the quadratic formula, showing `D` clearly.',
              copyCheck: '`a = 3, b = −5, c = 2`. Bracket `−(−5)` and `(−5)²`!',
              step1Setup: '`D = (−5)² − 4(3)(2)`.',
              midwayCheckpoint: '`D = 25 − 24 = 1`.',
              finalAnswer: '`x = 1` and `x = 2/3`.',
              fullSolution:
                '1. `D = (−5)² − 4(3)(2) = 25 − 24 = 1 > 0`. [1M]\n2. `x = [−(−5) ± √1] / (2×3) = (5 ± 1)/6`. [½M]\n3. `x = 6/6 = 1` or `x = 4/6 = 2/3`. [½M]',
              sillyTrapNote: 'Writing `x = (−5 ± 1)/6` by forgetting the formula minus in `−b`!',
            },
            {
              id: 'm04-p3',
              numberLabel: 'Drill 4.3',
              marks: 3,
              timeMinutes: 4,
              tag: 'NCERT Fractional Trap',
              question:
                'Find the roots of `1/(x + 4) − 1/(x − 7) = 11/30`, where `x ≠ −4, 7`.',
              copyCheck: 'Put brackets around `(x − 7) − (x + 4)` in the numerator!',
              step1Setup: 'LCM on LHS is `(x + 4)(x − 7)`: `[(x − 7) − (x + 4)] / [(x + 4)(x − 7)] = 11/30`.',
              midwayCheckpoint: '`−11 / (x² − 3x − 28) = 11/30` → divide both sides by `11` → `x² − 3x − 28 = −30`.',
              finalAnswer: '`x = 1` and `x = 2`.',
              fullSolution:
                '1. `[(x − 7) − (x + 4)] / (x² − 3x − 28) = 11/30` → `−11 / (x² − 3x − 28) = 11/30`. [1M]\n2. Cancel `11`: `−1 / (x² − 3x − 28) = 1/30` → `x² − 3x − 28 = −30`. [1M]\n3. `x² − 3x + 2 = 0` → `(x − 1)(x − 2) = 0` → `x = 1, 2`. Check `1/5 − (−1/6) = 11/30` ✓. [1M]',
              sillyTrapNote: 'Dropping the minus sign in `−11` or writing `−(x + 4) = −x + 4`!',
            },
            {
              id: 'm04-p4',
              numberLabel: 'Drill 4.4',
              marks: 3,
              timeMinutes: 3,
              tag: 'Equal Roots Trap',
              question:
                'Find the value of `k` so that `kx(x − 2) + 6 = 0` has two equal real roots.',
              copyCheck: 'Expand first to `ax² + bx + c = 0` and confirm `a ≠ 0`!',
              step1Setup: '`kx² − 2kx + 6 = 0` → `a = k, b = −2k, c = 6`. Set `D = 0`.',
              midwayCheckpoint: '`4k² − 24k = 0 → 4k(k − 6) = 0`.',
              finalAnswer: '`k = 6` (`k = 0` rejected since `a` must be non-zero).',
              fullSolution:
                '1. Expand: `kx² − 2kx + 6 = 0`. [½M]\n2. For equal roots, `D = (−2k)² − 4(k)(6) = 4k² − 24k = 0`. [1M]\n3. `4k(k − 6) = 0` → `k = 0` or `k = 6`. [1M]\n4. Reject `k = 0` (makes `x²` term vanish); hence `k = 6`. [½M]',
              sillyTrapNote: 'Keeping `k = 0` as a second answer loses ½ mark.',
            },
            {
              id: 'm04-p5',
              numberLabel: 'Drill 4.5',
              marks: 5,
              timeMinutes: 6,
              tag: 'Boss 5M: Motor Boat',
              question:
                'A motor boat whose speed is **18 km/h** in still water takes **1 hour more** to go **24 km upstream** than to return **downstream** to the same spot. Find the speed of the stream.',
              copyCheck: 'Upstream = `18 − x` (slower → BIGGER time first!); Downstream = `18 + x` (faster).',
              step1Setup: 'Let stream speed `= x km/h`. Equation: `24/(18 − x) − 24/(18 + x) = 1`.',
              midwayCheckpoint: '`48x = 324 − x² → x² + 48x − 324 = 0`.',
              finalAnswer: 'Speed of stream = **6 km/h** (`x = −54` rejected).',
              fullSolution:
                '1. Let stream speed `= x km/h` (`0 < x < 18`). Upstream `= 18 − x`, Downstream `= 18 + x`. [1M]\n2. `24/(18 − x) − 24/(18 + x) = 1` [1M]\n3. `24[(18 + x) − (18 − x)] = (18 − x)(18 + x)` → `48x = 324 − x²` → `x² + 48x − 324 = 0`. [1.5M]\n4. `(x + 54)(x − 6) = 0` → `x = 6` (speed cannot be negative). Check: `24/12 − 24/24 = 2 − 1 = 1 h` ✓. [1.5M]',
              sillyTrapNote: 'Writing `x − 18` for upstream speed instead of `18 − x` (boat must beat stream to go upstream!).',
            },
            {
              id: 'm04-p6',
              numberLabel: 'Drill 4.6',
              marks: 5,
              timeMinutes: 6,
              tag: 'Boss 5M: Train Speed',
              question:
                'A train travels **360 km** at a uniform speed. If the speed had been **5 km/h more**, it would have taken **1 hour less** for the same journey. Find the speed of the train.',
              copyCheck: 'Original speed `x` is SLOWER than `x + 5`, so `360/x` comes FIRST!',
              step1Setup: '`360/x − 360/(x + 5) = 1`.',
              midwayCheckpoint: '`x² + 5x − 1800 = 0` (split `+5` into `+45` and `−40`).',
              finalAnswer: 'Original train speed = **40 km/h** (`x = −45` rejected).',
              fullSolution:
                '1. Let original speed `= x km/h`. Original time `= 360/x`, new time `= 360/(x + 5)`. [1M]\n2. `360/x − 360/(x + 5) = 1` → `360(x + 5 − x) / [x(x + 5)] = 1`. [1.5M]\n3. `x² + 5x − 1800 = 0` → `(x + 45)(x − 40) = 0` → `x = 40 km/h`. [2M]\n4. Check: `360/40 − 360/45 = 9 − 8 = 1 h` ✓. [½M]',
              sillyTrapNote: 'Multiplying `360 × 5` wrong (`1500` instead of `1800`) or flipping signs in `(x − 45)(x + 40)`.',
            },
            {
              id: 'm04-p7',
              numberLabel: 'Drill 4.7',
              marks: 5,
              timeMinutes: 7,
              tag: 'Boss 5M: Two Water Taps',
              question:
                'Two water taps together can fill a tank in **9⅜ hours**. The tap of larger diameter takes **10 hours less** than the smaller one to fill the tank separately. Find the time in which each tap can separately fill the tank.',
              copyCheck: 'Convert mixed fraction FIRST: `9 3/8 = (9×8 + 3)/8 = 75/8` hours → reciprocal rate is `8/75`!',
              step1Setup: 'Let smaller tap take `x` hours, larger take `(x − 10)` hours (`x > 10`). Equation: `1/x + 1/(x − 10) = 8/75`.',
              midwayCheckpoint: '`4x² − 115x + 375 = 0` (divide `8x² − 230x + 750 = 0` by `2`!).',
              finalAnswer: 'Smaller tap = **25 hours**, Larger tap = **15 hours** (`x = 15/4` rejected!).',
              fullSolution:
                '1. Combined time `= 75/8 h` → combined 1-hr work `= 8/75`. [½M]\n2. `1/x + 1/(x − 10) = 8/75` → `(2x − 10)/(x² − 10x) = 8/75`. [1.5M]\n3. Cross-multiply & simplify by 2: `4x² − 115x + 375 = 0` → `4x² − 100x − 15x + 375 = 0` → `(4x − 15)(x − 25) = 0`. [2M]\n4. Reject `x = 3.75` since larger tap time `3.75 − 10 = −6.25 < 0`! Thus smaller = `25 h`, larger = `15 h`. Check: `1/25 + 1/15 = 8/75` ✓. [1M]',
              sillyTrapNote: 'Setting `1/x + 1/(x − 10) = 75/8` instead of its reciprocal `8/75`!',
            },
            {
              id: 'm04-p8',
              numberLabel: 'Drill 4.8',
              marks: 3,
              timeMinutes: 4,
              tag: 'Right Triangle Geometry',
              question:
                'The altitude of a right triangle is **7 cm less** than its base. If the hypotenuse is **13 cm**, find the other two sides.',
              copyCheck: 'Base `= x`, Altitude `= x − 7`, Hypotenuse `= 13`. Expand `(x − 7)² = x² − 14x + 49`!',
              step1Setup: '`x² + (x − 7)² = 13²`.',
              midwayCheckpoint: '`2x² − 14x − 120 = 0 → x² − 7x − 60 = 0`.',
              finalAnswer: 'Base = **12 cm**, Altitude = **5 cm**.',
              fullSolution:
                '1. `x² + (x² − 14x + 49) = 169` → `2x² − 14x − 120 = 0`. [1M]\n2. Divide by 2: `x² − 7x − 60 = 0` → `(x − 12)(x + 5) = 0`. [1M]\n3. Reject `x = −5` → Base `= 12 cm`, Altitude `= 12 − 7 = 5 cm` (5–12–13 triple ✓). [1M]',
              sillyTrapNote: 'Writing `(x − 7)² = x² − 49` (missing the middle term `−14x`!).',
            },
            {
              id: 'm04-p9',
              numberLabel: 'Drill 4.9',
              marks: 4,
              timeMinutes: 5,
              tag: 'Section E Case-Based (4M)',
              question:
                'A rectangular garden is to be designed with perimeter **80 m** and area **400 m²**.\n(i) Express breadth `b` in terms of length `l` and form a quadratic equation.\n(ii) Using discriminant `D`, determine whether such a park is possible, and if so, find its length and breadth.',
              copyCheck: 'Perimeter `2(l + b) = 80` → `l + b = 40` (divide by 2 first!).',
              step1Setup: '`b = 40 − l` → `l(40 − l) = 400`.',
              midwayCheckpoint: '`l² − 40l + 400 = 0`; `D = (−40)² − 4(1)(400) = 0`.',
              finalAnswer: 'Yes, `D = 0` (equal real roots); **l = 20 m, b = 20 m** (a square).',
              fullSolution:
                '(i) `2(l + b) = 80 → b = 40 − l`. Area `l(40 − l) = 400 → l² − 40l + 400 = 0`. [2M]\n(ii) `D = 1600 − 1600 = 0 ≥ 0` → possible! `(l − 20)² = 0 → l = 20 m`, `b = 20 m`. [2M]',
              sillyTrapNote: 'Using `l + b = 80` instead of `40` (forgetting the `2` in `2(l + b)`)!',
            },
          ],
        },
      ],
    },
    {
      id: 'ch04-proofs-checkpoint',
      title: '4. Discriminant Proof & Self-Check (Ch 4)',
      blocks: [
        {
          type: 'qa',
          marks: 3,
          tag: 'Standard 041 Proof (3M/5M)',
          question:
            'If the equation `(1 + m²)x² + 2mc x + (c² − a²) = 0` has equal roots, prove that `c² = a²(1 + m²)`.',
          answer:
            '1. Identify `A = 1 + m²`, `B = 2mc`, `C = c² − a²`. [½M]\n2. For equal roots, `D = B² − 4AC = 0` → `(2mc)² − 4(1 + m²)(c² − a²) = 0`. [1M]\n3. Divide by 4: `m²c² − (c² − a² + m²c² − m²a²) = 0`. [1M]\n4. Cancel `m²c²`: `−c² + a² + m²a² = 0` → `c² = a²(1 + m²)`. Hence proved. [½M]',
          markingTip: 'Divide by 4 right after setting `D = 0`, and wrap the entire `(1 + m²)(c² − a²)` expansion inside brackets after the minus sign!',
        },
        {
          type: 'checkpoint',
          prompt:
            'For what value(s) of `k` does `2x² + kx + 3 = 0` have equal real roots?',
          options: [
            { id: 'a', label: '±√6' },
            { id: 'b', label: '±2√6' },
            { id: 'c', label: '2√6 only' },
            { id: 'd', label: '6' },
          ],
          correctIds: ['b'],
          successMsg:
            'Correct! `D = k² − 4(2)(3) = k² − 24 = 0 → k = ±√24 = ±2√6`. Taking BOTH `±` signs is crucial!',
          hintMsg: 'Solve `k² = 24`, and don’t drop the negative root!',
        },
      ],
    },
  ],
};
