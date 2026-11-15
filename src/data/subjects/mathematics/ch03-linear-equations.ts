import { Subtopic } from '../../../types/curriculum';

export const ch03LinearEquations: Subtopic = {
  id: 'math-ch03-linear-equations',
  slug: 'ch03-linear-equations',
  title: 'Ch 3: Pair of Linear Equations in Two Variables',
  subtitle:
    'Graphical & Consistency Ratios, Substitution & Elimination Sign Discipline, Swapped Coefficients & Age/Fraction/Digit Word Problems',
  estimatedMinutes: 45,
  difficulty: 'Core CBSE',
  ncertSection: 'NCERT Class 10 Mathematics — Chapter 3',
  learningObjectives: [
    'Rewrite equations in ax + by + c = 0 before applying consistency conditions (a₁/a₂, b₁/b₂, c₁/c₂).',
    'Execute Substitution and Elimination in a notebook without dropping minus signs or forgetting RHS multiplications.',
    'Solve swapped-coefficient systems (152x − 378y = ...) via Add-and-Subtract shortcut.',
    'Translate 2-digit reversal, fraction, fixed-charge, and age word problems into exact linear pairs.',
  ],
  keywords: [
    'Consistent and inconsistent',
    'Substitution method',
    'Elimination method',
    'Two-digit number reversal',
    'Area bounded by lines',
  ],
  sections: [
    {
      id: 'ch03-formulas-scope',
      title: '1. Consistency Matrix, Rationalized Scope & Setup Rules',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Ch 3 Exam Glance',
          bullets: [
            '**Standard Form First:** Write BOTH equations as `a₁x + b₁y + c₁ = 0` and `a₂x + b₂y + c₂ = 0` before checking ratios.',
            '**Intersecting (Unique Solution):** `a₁/a₂ ≠ b₁/b₂` → Consistent.',
            '**Parallel (No Solution):** `a₁/a₂ = b₁/b₂ ≠ c₁/c₂` → Inconsistent.',
            '**Coincident (Infinite Solutions):** `a₁/a₂ = b₁/b₂ = c₁/c₂` → Dependent & Consistent.',
            '**Two-Digit Number Rule:** Tens digit `x`, Units digit `y` → Original `= 10x + y`, Reversed `= 10y + x`.',
          ],
        },
        {
          type: 'visual-diagram',
          diagramId: 'linear-pair-graphical-cases',
          title: 'Three Graphical Cases & The Standard-Form Sign Shield',
          caption: 'Never compare c₁ and c₂ when one is on LHS and the other is on RHS!',
        },
        {
          type: 'callout',
          variant: 'trap',
          title: 'Rationalized Syllabus Check — Skip Cross-Multiplication & Reducible Equations',
          body: 'CBSE has **deleted** the **Cross-Multiplication Method** and **Equations Reducible to a Pair of Linear Equations** (`1/x + 1/y` type substitutions like `u = 1/x`). Solve algebraically ONLY via **Substitution** or **Elimination**!',
        },
      ],
    },
    {
      id: 'ch03-notebook-mistakes',
      title: '2. Silly-Mistake Notebook Warnings (Ch 3)',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Vikram',
          title: 'Sign-Flip Failure During Vertical Elimination Subtraction',
          wrongWork: 'Subtract (6x − 4y = 8) from (6x + 9y = 21) → 5y = 13',
          teacherFix: 'Write signs underneath: (−) (+) (−) → (9y + 4y) = 21 − 8 → 13y = 13 → y = 1',
          whyWrong:
            'Subtracting `−4y` means `+4y` (`9y − (−4y) = 13y`), NOT `9y − 4y`! Physically write the flipped signs `(−) (+) (−)` in small circles below Eq 2 before adding vertically.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Ananya',
          title: 'Forgetting to Multiply the RHS Constant When Scaling an Equation',
          wrongWork: 'Multiply (2x + 3y = 7) by 4 → 8x + 12y = 7',
          teacherFix: 'Multiply ALL THREE terms by 4 → 8x + 12y = 28',
          whyWrong:
            'Leaving the RHS untouched (`7` instead of `28`) happens when rushing! Check all 3 terms immediately after scaling.',
        },
      ],
    },
    {
      id: 'ch03-hand-practice',
      title: '3. Screen-to-Notebook Hand-Practice Workout (Ch 3)',
      blocks: [
        {
          type: 'hand-practice',
          title: 'Ch 3 Graded Notebook Drill (Standard 041)',
          subtitle: 'Back-check EVERY `(x, y)` pair by plugging into BOTH original equations before moving on!',
          problems: [
            {
              id: 'm03-p1',
              numberLabel: 'Drill 3.1',
              marks: 2,
              timeMinutes: 2,
              tag: 'Consistency Trap',
              question:
                'Compare ratios `a₁/a₂`, `b₁/b₂`, `c₁/c₂` to find whether the pair is consistent (unique / infinite) or inconsistent:\n(i) `3x + 2y = 5`; `2x − 3y = 7`\n(ii) `2x − 3y = 8`; `4x − 6y − 9 = 0`',
              copyCheck: 'Notice in (ii), `8` is on RHS while `−9` is on LHS — bring `8` to LHS (`−8`) FIRST!',
              step1Setup: 'For (ii): rewrite as `2x − 3y − 8 = 0` and `4x − 6y − 9 = 0`.',
              midwayCheckpoint: '(i) `3/2 ≠ −2/3`; (ii) `2/4 = −3/−6 = 1/2`, while `−8/−9 = 8/9`.',
              finalAnswer: '(i) Intersecting / Unique Solution (Consistent); (ii) Parallel / No Solution (Inconsistent).',
              fullSolution:
                '(i) `a₁/a₂ = 3/2`, `b₁/b₂ = 2/(−3) = −2/3`. Since `a₁/a₂ ≠ b₁/b₂`, lines intersect → consistent, unique solution. [1M]\n(ii) Rewrite: `c₁ = −8`, `c₂ = −9`. `a₁/a₂ = 1/2 = b₁/b₂ ≠ c₁/c₂ = 8/9` → parallel lines, inconsistent. [1M]',
              sillyTrapNote: 'Writing `c₁/c₂ = 8/(−9)` in (ii) without moving `8` to LHS!',
            },
            {
              id: 'm03-p2',
              numberLabel: 'Drill 3.2',
              marks: 3,
              timeMinutes: 4,
              tag: 'Decimals + Substitution',
              question:
                'Solve by the substitution method:\n`0.2x + 0.3y = 1.3`\n`0.4x + 0.5y = 2.3`',
              copyCheck: 'Multiply BOTH equations by `10` on Line 1 to kill decimals forever!',
              step1Setup: 'Eq (1): `2x + 3y = 13` → `x = (13 − 3y)/2`. Plug into Eq (2): `4x + 5y = 23`.',
              midwayCheckpoint: '`2(13 − 3y) + 5y = 23 → 26 − 6y + 5y = 23 → y = 3`.',
              finalAnswer: '`x = 2, y = 3`.',
              fullSolution:
                '1. Multiply both equations by `10`: `2x + 3y = 13` (i) and `4x + 5y = 23` (ii). [1M]\n2. From (i): `x = (13 − 3y)/2`. Substitute into (ii): `4((13 − 3y)/2) + 5y = 23` → `26 − 6y + 5y = 23` → `−y = −3` → `y = 3`. [1M]\n3. `x = (13 − 9)/2 = 2`. Check: `0.2(2) + 0.3(3) = 1.3` ✓. [1M]',
              sillyTrapNote: 'Carrying decimals `0.2, 0.3` through fraction substitution causes decimal-place shifts.',
            },
            {
              id: 'm03-p3',
              numberLabel: 'Drill 3.3',
              marks: 3,
              timeMinutes: 4,
              tag: 'Standard 041 Swapped Coeffs',
              question:
                'Solve cleanly without large multiplication:\n`152x − 378y = −74`\n`−378x + 152y = −604`',
              copyCheck: 'Notice `152` and `−378` swap places! Use Add + Subtract trick!',
              step1Setup: 'Step 1: ADD Eq (1) + Eq (2). Step 2: SUBTRACT Eq (2) from Eq (1).',
              midwayCheckpoint: 'Adding gives `−226(x + y) = −678 → x + y = 3`; Subtracting gives `530(x − y) = 530 → x − y = 1`.',
              finalAnswer: '`x = 2, y = 1`.',
              fullSolution:
                '1. Add both equations: `(152 − 378)x + (−378 + 152)y = −678` → `−226(x + y) = −678` → `x + y = 3` (iii). [1M]\n2. Subtract (ii) from (i): `(152 + 378)x + (−378 − 152)y = −74 + 604` → `530x − 530y = 530` → `x − y = 1` (iv). [1M]\n3. Add (iii) and (iv): `2x = 4 → x = 2`, then `y = 1`. [1M]',
              sillyTrapNote: 'Trying to multiply 152 × 378 by hand! Whenever coefficients swap (`ax + by`, `bx + ay`), ALWAYS Add & Subtract.',
            },
            {
              id: 'm03-p4',
              numberLabel: 'Drill 3.4',
              marks: 3,
              timeMinutes: 4,
              tag: 'Standard 041 k-Value',
              question:
                'Find the value of `k` for which the system `(3k + 1)x + 3y − 2 = 0` and `(k² + 1)x + (k − 2)y − 5 = 0` has NO solution.',
              copyCheck: 'No solution means `a₁/a₂ = b₁/b₂ ≠ c₁/c₂`. Both equations are already `= 0`!',
              step1Setup: 'Set `(3k + 1)/(k² + 1) = 3/(k − 2)` and verify `≠ 2/5` afterwards!',
              midwayCheckpoint: '`3k² + 3 = 3k² − 5k − 2` (notice `3k²` cancels!).',
              finalAnswer: '`k = −1` (Check: `−2/2 = 3/−3 = −1 ≠ 2/5` ✓).',
              fullSolution:
                '1. For no solution: `(3k + 1)/(k² + 1) = 3/(k − 2) ≠ −2/(−5) = 2/5`. [1M]\n2. Cross-multiply first two: `(3k + 1)(k − 2) = 3(k² + 1)` → `3k² − 6k + k − 2 = 3k² + 3` → `−5k = 5` → `k = −1`. [1.5M]\n3. Verify `≠ c₁/c₂`: at `k = −1`, `3/(−1 − 2) = −1 ≠ 2/5` ✓. [½M]',
              sillyTrapNote: 'Expanding `(3k + 1)(k − 2)` wrong as `3k² − 6k + 1k + 2` (sign of `1 × −2` is `−2`!).',
            },
            {
              id: 'm03-p5',
              numberLabel: 'Drill 3.5',
              marks: 3,
              timeMinutes: 5,
              tag: '2-Digit Number PYQ',
              question:
                'The sum of the digits of a two-digit number is **9**. Also, **nine times** this number is **twice** the number obtained by reversing the order of the digits. Find the number.',
              copyCheck: 'Let tens digit `= x`, units digit `= y`. Original `= 10x + y`, Reversed `= 10y + x`.',
              step1Setup: 'Eq (1): `x + y = 9`. Eq (2): `9(10x + y) = 2(10y + x)`.',
              midwayCheckpoint: '`90x + 9y = 20y + 2x → 88x − 11y = 0 → y = 8x`.',
              finalAnswer: 'The two-digit number is **18** (`x = 1, y = 8`).',
              fullSolution:
                '1. Let tens = `x`, units = `y`; number = `10x + y`. Given `x + y = 9` (i). [1M]\n2. `9(10x + y) = 2(10y + x)` → `88x = 11y` → `y = 8x` (ii). [1M]\n3. Plug into (i): `9x = 9 → x = 1, y = 8`. Number `= 10(1) + 8 = 18`. Check: `9×18 = 162 = 2×81` ✓. [1M]',
              sillyTrapNote: 'Leaving final answer as `x = 1, y = 8` without writing the actual number `18`!',
            },
            {
              id: 'm03-p6',
              numberLabel: 'Drill 3.6',
              marks: 3,
              timeMinutes: 4,
              tag: 'Fraction Word Problem',
              question:
                'A fraction becomes `9/11` if `2` is added to both the numerator and the denominator. If `3` is added to both the numerator and the denominator it becomes `5/6`. Find the fraction.',
              copyCheck: 'Let fraction be `x/y`. Brackets around `(x + 2)` and `(y + 2)` before cross-multiplying!',
              step1Setup: 'Eq (1): `(x + 2)/(y + 2) = 9/11`. Eq (2): `(x + 3)/(y + 3) = 5/6`.',
              midwayCheckpoint: '`11x − 9y = −4` and `6x − 5y = −3`.',
              finalAnswer: 'Fraction is **7/9** (`x = 7, y = 9`).',
              fullSolution:
                '1. `11x + 22 = 9y + 18 → 11x − 9y = −4` (i). [1M]\n2. `6x + 18 = 5y + 15 → 6x − 5y = −3` (ii). [1M]\n3. Solve by elimination (`×5` and `×9`): `55x − 54x = −20 − (−27) → x = 7`, then `y = 9`. Fraction = `7/9`. Check: `9/11` ✓ and `10/12 = 5/6` ✓. [1M]',
              sillyTrapNote: 'Writing `−20 − 27 = −47` instead of `−20 − (−27) = +7`!',
            },
            {
              id: 'm03-p7',
              numberLabel: 'Drill 3.7',
              marks: 3,
              timeMinutes: 4,
              tag: 'Age Word Problem',
              question:
                'Five years hence, the age of Jacob will be **three times** that of his son. Five years ago, Jacob’s age was **seven times** that of his son. What are their present ages?',
              copyCheck: 'Let present ages be Jacob `= x`, Son `= y`. "Hence" = `+ 5`; "Ago" = `− 5` for BOTH!',
              step1Setup: '`(x + 5) = 3(y + 5)` and `(x − 5) = 7(y − 5)`.',
              midwayCheckpoint: '`x − 3y = 10` and `x − 7y = −30`.',
              finalAnswer: 'Present ages: Jacob = **40 years**, Son = **10 years**.',
              fullSolution:
                '1. Present ages `x, y`. In 5 yrs: `x + 5 = 3y + 15 → x − 3y = 10` (i). [1M]\n2. 5 yrs ago: `x − 5 = 7y − 35 → x − 7y = −30` (ii). [1M]\n3. Subtract (ii) from (i): `4y = 40 → y = 10`, so `x = 40`. Check: `45 = 3(15)` ✓, `35 = 7(5)` ✓. [1M]',
              sillyTrapNote: 'Forgetting to subtract `5` from the son’s age too (writing `x − 5 = 7y` instead of `7(y − 5)`)!',
            },
            {
              id: 'm03-p8',
              numberLabel: 'Drill 3.8',
              marks: 5,
              timeMinutes: 6,
              tag: 'Boss Graph + Triangle Area',
              question:
                'Sketch the graphs of `x − y + 1 = 0` and `3x + 2y − 12 = 0` on paper (using 2-point tables). Determine the coordinates of the vertices of the triangle formed by these lines and the **x-axis**, and calculate its **area**.',
              copyCheck: 'Triangle is bounded by the two lines and the **x-axis** (`y = 0`), NOT the y-axis!',
              step1Setup: 'Line 1 points: `(−1, 0), (0, 1), (2, 3)`. Line 2 points: `(4, 0), (0, 6), (2, 3)`.',
              midwayCheckpoint: 'Vertices on x-axis: `(−1, 0)` and `(4, 0)`; top vertex: `(2, 3)`.',
              finalAnswer: 'Vertices `(−1, 0), (4, 0), (2, 3)`; Base `= 5`, Height `= 3`; Area `= 7.5 sq units`.',
              fullSolution:
                '1. Plot both lines cleanly from solution tables; intersection vertex is `(2, 3)`. [2M]\n2. X-axis intercepts (`y = 0`): `A(−1, 0)` and `B(4, 0)`. [1M]\n3. Base `AB = 4 − (−1) = 5` units; perpendicular height from `(2, 3)` to x-axis `= 3` units. [1M]\n4. Area `= (1/2) × 5 × 3 = 7.5 sq units`. [1M]',
              sillyTrapNote: 'Taking base length as `4 − 1 = 3` instead of `4 − (−1) = 5` units!',
            },
          ],
        },
      ],
    },
    {
      id: 'ch03-proofs-checkpoint',
      title: '4. Board Word-Problem Model & Self-Check (Ch 3)',
      blocks: [
        {
          type: 'qa',
          marks: 4,
          tag: 'Case-Based',
          question:
            'The taxi charges in a city consist of a fixed charge together with the charge for the distance covered. For a distance of **10 km**, the charge paid is **₹105** and for a journey of **15 km**, the charge paid is **₹155**. What are the fixed charges and the charge per km? How much does a person have to pay for travelling **25 km**?',
          answer:
            '1. Let fixed charge `= ₹x` and charge per km `= ₹y`. [½M]\n2. `x + 10y = 105` (i) and `x + 15y = 155` (ii). [1M]\n3. Subtract (i) from (ii): `5y = 50 → y = ₹10/km`. [1M]\n4. Substitute into (i): `x + 100 = 105 → x = ₹5`. [½M]\n5. Total for `25 km`: `x + 25y = 5 + 25(10) = ₹255`. [1M]',
          markingTip: 'Many students stop after finding `x = 5, y = 10` and miss the last 1-mark follow-up question (`25 km → ₹255`)!',
        },
        {
          type: 'checkpoint',
          prompt:
            'If `x = a, y = b` is the solution of `x − y = 2` and `x + y = 4`, what are `(a, b)`?',
          options: [
            { id: 'a', label: '(3, 1)' },
            { id: 'b', label: '(3, 5)' },
            { id: 'c', label: '(1, 3)' },
            { id: 'd', label: '(−1, −3)' },
          ],
          correctIds: ['a'],
          successMsg: 'Correct! Adding the two equations gives `2x = 6 → x = 3`, so `y = 1`. Check: `3 − 1 = 2` and `3 + 1 = 4`!',
          hintMsg: 'Add both equations vertically so `-y` and `+y` cancel instantly!',
        },
      ],
    },
  ],
};
