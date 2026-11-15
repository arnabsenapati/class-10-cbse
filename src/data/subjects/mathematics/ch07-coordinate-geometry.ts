import { Subtopic } from '../../../types/curriculum';

export const ch07CoordinateGeometry: Subtopic = {
  id: 'math-ch07-coordinate-geometry',
  slug: 'ch07-coordinate-geometry',
  title: 'Ch 7: Coordinate Geometry',
  subtitle:
    'Distance Formula, Collinearity & Quadrilateral Classification, Equidistant Axis Points, Section Ratio k : 1, Trisection & Midpoint Parallelogram Shortcut',
  estimatedMinutes: 40,
  difficulty: 'Core CBSE',
  ncertSection: 'NCERT Class 10 Mathematics — Chapter 7',
  learningObjectives: [
    'Square PA² = PB² first in equidistant problems to remove square roots cleanly without sign slips.',
    'Cross-multiply m₁ with (x₂, y₂) and m₂ with (x₁, y₁) in the Section Formula.',
    'Find k : 1 ratios where the x-axis or y-axis cuts a line segment, plus trisection points.',
    'Use the Midpoint-of-Diagonals shortcut to find the 4th vertex of a parallelogram or diameter endpoint.',
  ],
  keywords: [
    'Distance formula',
    'Section formula',
    'Midpoint formula',
    'Equidistant on x-axis',
    'Ratio k:1',
  ],
  sections: [
    {
      id: 'ch07-formulas-scope',
      title: '1. Formula Vault, Rationalized Scope & Sign Rules',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Ch 7 Exam Glance',
          bullets: [
            '**Distance Formula:** `PQ = √[(x₂ − x₁)² + (y₂ − y₁)²]`. Distance from Origin `O(0, 0)` to `P(x, y)` is `√(x² + y²)`.',
            '**Axis Points:** Point on **x-axis** is `(x, 0)`; point on **y-axis** is `(0, y)`.',
            '**Section Formula (`m₁ : m₂`):** `P(x, y) = ( (m₁x₂ + m₂x₁)/(m₁ + m₂), (m₁y₂ + m₂y₁)/(m₁ + m₂) )`.',
            '**Midpoint (`1 : 1`):** `M = ( (x₁ + x₂)/2, (y₁ + y₂)/2 )`.',
            '**Quadrilateral Test:** Compute all 4 sides + 2 diagonals! Rhombus: `4 equal sides, diagonals ≠`. Square: `4 equal sides, diagonals =`. Rectangle: `opp. sides =, diagonals =`.',
          ],
        },
        {
          type: 'visual-diagram',
          diagramId: 'coordinate-section-and-midpoint',
          title: 'Section Formula Cross-Multiplication & Parallelogram Midpoint Shortcut',
          caption: 'Always connect m₁ to the FAR point B(x₂, y₂) and m₂ to A(x₁, y₁)!',
        },
        {
          type: 'callout',
          variant: 'trap',
          title: 'Rationalized Syllabus Check — Area of a Triangle Formula Deleted',
          body: 'CBSE has **deleted** the **Area of a Triangle** formula `(1/2)[x₁(y₂ − y₃) + ...]` (Exercise 7.3)! To check **collinearity** of 3 points `A, B, C`, use Distance Formula (`AB + BC = AC`); to find **area of a rhombus**, use `(1/2) × d₁ × d₂` via Distance Formula.',
        },
      ],
    },
    {
      id: 'ch07-notebook-mistakes',
      title: '2. Silly-Mistake Notebook Warnings (Ch 7)',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Aditya',
          title: 'Double-Negative Inside Distance Formula',
          wrongWork: 'Distance from (2, −5) to (−2, 9): (x₂ − x₁) = −2 − 2? Good, but (−2 − (−5)) written as −2 − 5 = −7',
          teacherFix: 'Put brackets around negative coordinates: y₂ − y₁ = 9 − (−5) = 9 + 5 = 14',
          whyWrong:
            'Whenever a coordinate is negative, the minus in `(y₂ − y₁)` and the minus on `y₁` multiply to make `+`!',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Priya',
          title: 'Dropping the Negative Root in Distance = 10 Problems',
          wrongWork: '(y + 3)² = 36 → y + 3 = 6 → y = 3 only',
          teacherFix: 'y + 3 = ±6 → y = +6 − 3 = 3  OR  y = −6 − 3 = −9 (TWO answers!)',
          whyWrong:
            'A point at vertical distance 6 could be either above OR below! Always take `±` when taking square roots of `(y + 3)² = 36`.',
        },
      ],
    },
    {
      id: 'ch07-hand-practice',
      title: '3. Screen-to-Notebook Hand-Practice Workout (Ch 7)',
      blocks: [
        {
          type: 'hand-practice',
          title: 'Ch 7 Graded Notebook Drill (Standard 041)',
          subtitle: 'Write coordinates cleanly with signs bracketed before squaring or cross-multiplying.',
          problems: [
            {
              id: 'm07-p1',
              numberLabel: 'Drill 7.1',
              marks: 2,
              timeMinutes: 3,
              tag: 'NCERT Algebraic + Collinear',
              question:
                '(i) Find the distance between `(a, b)` and `(−a, −b)`.\n(ii) Check whether `A(1, 5)`, `B(2, 3)` and `C(−2, −11)` are collinear using the Distance Formula.',
              copyCheck: 'In (i): `−a − a = −2a`, NOT `0`!',
              step1Setup: '(i) `√[(−a − a)² + (−b − b)²]`. (ii) Compute `AB`, `BC`, and `AC` separately.',
              midwayCheckpoint: '(ii) `AB = √5`, `BC = √212`, `AC = √265`.',
              finalAnswer: '(i) `2√(a² + b²)`; (ii) `AB + BC ≠ AC`, so NOT collinear.',
              fullSolution:
                '(i) `d = √[(−2a)² + (−2b)²] = √[4(a² + b²)] = 2√(a² + b²)`. [1M]\n(ii) `AB = √(1² + (−2)²) = √5`; `BC = √((−4)² + (−14)²) = √212`; `AC = √((−3)² + (−16)²) = √265`. Since `√5 + √212 ≠ √265`, points are not collinear. [1M]',
              sillyTrapNote: 'Pulling `4` out of `√[4(a² + b²)]` as `4` instead of `√4 = 2`!',
            },
            {
              id: 'm07-p2',
              numberLabel: 'Drill 7.2',
              marks: 3,
              timeMinutes: 4,
              tag: 'NCERT Equidistant',
              question:
                'Find the point on the **x-axis** which is equidistant from `(2, −5)` and `(−2, 9)`.',
              copyCheck: 'Point on x-axis is `P(x, 0)`. Square `PA² = PB²` immediately so there is no `√`!',
              step1Setup: '`(x − 2)² + (0 − (−5))² = (x − (−2))² + (0 − 9)²`.',
              midwayCheckpoint: '`x² − 4x + 4 + 25 = x² + 4x + 4 + 81`.',
              finalAnswer: 'Point on x-axis is `(−7, 0)`.',
              fullSolution:
                '1. Let `P(x, 0)` on x-axis. Since `PA = PB`, `PA² = PB²`. [1M]\n2. `(x − 2)² + 5² = (x + 2)² + (−9)²` → `x² − 4x + 29 = x² + 4x + 85`. [1M]\n3. `−8x = 56 → x = −7`. Required point `= (−7, 0)`. Check: `9² + 5² = 106` and `(−5)² + 9² = 106` ✓. [1M]',
              sillyTrapNote: 'Expanding `(x − 2)²` as `x² − 4` without the `-4x` middle term!',
            },
            {
              id: 'm07-p3',
              numberLabel: 'Drill 7.3',
              marks: 2,
              timeMinutes: 3,
              tag: 'Two-Root Distance Trap',
              question:
                'Find the values of `y` for which the distance between the points `P(2, −3)` and `Q(10, y)` is **10 units**.',
              copyCheck: '`y − (−3) = y + 3`! Square `10` to get `100` on RHS.',
              step1Setup: '`(10 − 2)² + (y + 3)² = 10²`.',
              midwayCheckpoint: '`64 + (y + 3)² = 100 → (y + 3)² = 36`.',
              finalAnswer: '`y = 3` or `y = −9`.',
              fullSolution:
                '1. `PQ² = (10 − 2)² + (y − (−3))² = 10²` → `64 + (y + 3)² = 100`. [1M]\n2. `(y + 3)² = 36` → `y + 3 = ±6`. [½M]\n3. `y = 6 − 3 = 3` or `y = −6 − 3 = −9`. [½M]',
              sillyTrapNote: 'Reporting only `y = 3` and missing `y = −9`!',
            },
            {
              id: 'm07-p4',
              numberLabel: 'Drill 7.4',
              marks: 3,
              timeMinutes: 4,
              tag: 'Trisection Points',
              question:
                'Find the coordinates of the **points of trisection** of the line segment joining `A(4, −1)` and `B(−2, −3)`.',
              copyCheck: 'Trisection divides `AB` into **3 equal parts**, so there are **2 points**: `P` (`1 : 2`) and `Q` (`2 : 1`)!',
              step1Setup: 'For `P`: ratio `1 : 2` (`m₁=1, m₂=2`). For `Q`: ratio `2 : 1` (or midpoint of `P` and `B`).',
              midwayCheckpoint: '`P = ((1(−2) + 2(4))/3, (1(−3) + 2(−1))/3)`.',
              finalAnswer: '`P(2, −5/3)` and `Q(0, −7/3)`.',
              fullSolution:
                '1. `P` divides `AB` in `1 : 2`: `x = (1(−2) + 2(4))/3 = 6/3 = 2`, `y = (1(−3) + 2(−1))/3 = −5/3` → `P(2, −5/3)`. [1.5M]\n2. `Q` is the midpoint of `PB` (or `2 : 1` on `AB`): `x = (2 + (−2))/2 = 0`, `y = (−5/3 − 3)/2 = (−14/3)/2 = −7/3` → `Q(0, −7/3)`. [1.5M]',
              sillyTrapNote: 'Thinking trisection uses ratio `1:3` instead of `1:2` and `2:1`!',
            },
            {
              id: 'm07-p5',
              numberLabel: 'Drill 7.5',
              marks: 3,
              timeMinutes: 4,
              tag: 'Ratio Cut by Y-Axis',
              question:
                'Find the ratio in which the **y-axis** divides the line segment joining `A(5, −6)` and `B(−1, −4)`. Also find the point of intersection.',
              copyCheck: 'Every point on the **y-axis** has `x = 0`, i.e., `P(0, y)`!',
              step1Setup: 'Let ratio be `k : 1`. Set `x`-coordinate `(k(−1) + 1(5))/(k + 1) = 0`.',
              midwayCheckpoint: '`−k + 5 = 0 → k = 5` (ratio `5 : 1`).',
              finalAnswer: 'Ratio = **5 : 1**; Intersection point = `(0, −13/3)`.',
              fullSolution:
                '1. Let `P(0, y)` divide `AB` in ratio `k : 1`. [½M]\n2. `0 = (k(−1) + 5)/(k + 1)` → `−k + 5 = 0` → `k = 5` → Ratio `5 : 1`. [1.5M]\n3. `y = (5(−4) + 1(−6))/(5 + 1) = −26/6 = −13/3` → `P(0, −13/3)`. [1M]',
              sillyTrapNote: 'Setting `y = 0` instead of `x = 0` for the y-axis!',
            },
            {
              id: 'm07-p6',
              numberLabel: 'Drill 7.6',
              marks: 2,
              timeMinutes: 3,
              tag: 'Parallelogram Vertex Shortcut',
              question:
                'If `(1, 2)`, `(4, y)`, `(x, 6)` and `(3, 5)` are the vertices of a parallelogram taken in order, find `x` and `y`.',
              copyCheck: 'Order matters: `A(1,2), B(4,y), C(x,6), D(3,5)` → diagonals are `AC` and `BD`!',
              step1Setup: 'Diagonals of a parallelogram bisect each other: `Midpoint(AC) = Midpoint(BD)`.',
              midwayCheckpoint: '`(1 + x)/2 = (4 + 3)/2` and `(2 + 6)/2 = (y + 5)/2`.',
              finalAnswer: '`x = 6, y = 3`.',
              fullSolution:
                '1. Since diagonals `AC` and `BD` bisect each other, their midpoints coincide. [½M]\n2. Equate x-coords: `(1 + x)/2 = (4 + 3)/2 → 1 + x = 7 → x = 6`. [¾M]\n3. Equate y-coords: `(2 + 6)/2 = (y + 5)/2 → 8 = y + 5 → y = 3`. [¾M]',
              sillyTrapNote: 'Matching `AB` with `CD` instead of diagonal `AC` with diagonal `BD`!',
            },
            {
              id: 'm07-p7',
              numberLabel: 'Drill 7.7',
              marks: 2,
              timeMinutes: 3,
              tag: 'Diameter Endpoint',
              question:
                'Find the coordinates of a point `A`, where `AB` is the diameter of a circle whose centre is `(2, −3)` and `B` is `(1, 4)`.',
              copyCheck: 'Centre `(2, −3)` is the MIDPOINT of `A(x, y)` and `B(1, 4)` — do NOT find midpoint of `(2, −3)` and `(1, 4)`!',
              step1Setup: '`(x + 1)/2 = 2` and `(y + 4)/2 = −3`.',
              midwayCheckpoint: '`x + 1 = 4` and `y + 4 = −6`.',
              finalAnswer: '`A(3, −10)`.',
              fullSolution:
                '1. Let `A(x, y)`. Centre `O(2, −3)` is the midpoint of `AB`. [½M]\n2. `(x + 1)/2 = 2 → x = 3`; `(y + 4)/2 = −3 → y + 4 = −6 → y = −10`. [1.5M]',
              sillyTrapNote: 'Computing `((2+1)/2, (−3+4)/2)` blindly instead of setting `Midpoint(AB) = Centre`!',
            },
            {
              id: 'm07-p8',
              numberLabel: 'Drill 7.8',
              marks: 4,
              timeMinutes: 5,
              tag: 'Section E Case-Based: Rhombus Area',
              question:
                'Four corner pegs of a kite-shaped stage are located at `A(3, 0)`, `B(4, 5)`, `C(−1, 4)`, and `D(−2, −1)` taken in order.\n(i) Verify all four sides are equal and find their length.\n(ii) Find diagonals `AC` and `BD`.\n(iii) Hence find the area of rhombus `ABCD`.',
              copyCheck: 'Area of rhombus `= (1/2) × d₁ × d₂`. Simplify `√32 = 4√2` and `√72 = 6√2`!',
              step1Setup: 'Compute `AB, BC, CD, DA`, then `AC` and `BD` using Distance Formula.',
              midwayCheckpoint: 'Each side `= √26`; `AC = 4√2`, `BD = 6√2`.',
              finalAnswer: '(i) Each side `= √26`; (ii) `AC = 4√2, BD = 6√2`; (iii) Area = **24 sq units**.',
              fullSolution:
                '(i) `AB = √(1² + 5²) = √26`, `BC = √((−5)² + (−1)²) = √26`, `CD = √((−1)² + (−5)²) = √26`, `DA = √(5² + 1²) = √26`. All sides equal! [1.5M]\n(ii) `AC = √((−4)² + 4²) = √32 = 4√2`; `BD = √((−6)² + (−6)²) = √72 = 6√2` (not equal → rhombus, not square). [1.5M]\n(iii) Area `= (1/2) × 4√2 × 6√2 = (1/2) × 24 × 2 = 24 sq units`. [1M]',
              sillyTrapNote: 'Forgetting `√2 × √2 = 2` when multiplying `4√2 × 6√2`!',
            },
          ],
        },
      ],
    },
    {
      id: 'ch07-proofs-checkpoint',
      title: '4. Equidistant Relation & Self-Check (Ch 7)',
      blocks: [
        {
          type: 'qa',
          marks: 3,
          tag: 'Examiner Step-Marking Model',
          question:
            'Find a relation between `x` and `y` such that point `(x, y)` is equidistant from `(3, 6)` and `(−3, 4)`.',
          answer:
            '1. Let `P(x, y)` be equidistant from `A(3, 6)` and `B(−3, 4)`, so `PA² = PB²`. [1M]\n2. `(x − 3)² + (y − 6)² = (x + 3)² + (y − 4)²`. [½M]\n3. Expand: `(x² − 6x + 9) + (y² − 12y + 36) = (x² + 6x + 9) + (y² − 8y + 16)`. [1M]\n4. Cancel `x² + y²`: `−6x − 12y + 45 = 6x − 8y + 25` → `−12x − 4y + 20 = 0` → divide by `−4` → `3x + y − 5 = 0`. [½M]',
          markingTip: 'Divide final linear equation by the common factor (`-4`) so it sits cleanly in lowest integers (`3x + y − 5 = 0`).',
        },
        {
          type: 'checkpoint',
          prompt:
            'What is the distance of point `P(−6, 8)` from the x-axis?',
          options: [
            { id: 'a', label: '6 units' },
            { id: 'b', label: '−6 units' },
            { id: 'c', label: '8 units' },
            { id: 'd', label: '10 units' },
          ],
          correctIds: ['c'],
          successMsg:
            'Spot on! Distance from the **x-axis** is ALWAYS `|y|` = `8` units (and distance from the y-axis is `|x|` = `6` units; `10` is distance from the ORIGIN!).',
          hintMsg: 'Plot `(−6, 8)`: how many units UP from the horizontal x-axis is it? Distance is always non-negative!',
        },
      ],
    },
  ],
};
