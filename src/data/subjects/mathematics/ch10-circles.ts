import { Subtopic } from '../../../types/curriculum';

export const ch10Circles: Subtopic = {
  id: 'math-ch10-circles',
  slug: 'ch10-circles',
  title: 'Ch 10: Circles',
  subtitle:
    'Theorem 10.1 (Radius ⊥ Tangent), Theorem 10.2 (Equal Tangents PA = PB), ∠PTQ = 2∠OPQ, Circumscribed Quads & Boss 5M Heron Triangle Rider',
  estimatedMinutes: 55,
  difficulty: 'Board Mastery',
  ncertSection: 'NCERT Class 10 Mathematics — Chapter 10',
  learningObjectives: [
    'Prove Theorem 10.1 and Theorem 10.2 verbatim with complete RHS congruence reasons.',
    'Keep ∠OAP = 90° (right angle at contact point, making OP the hypotenuse) in all length calculations.',
    'Use PA = PB from each vertex cleanly to prove AB + CD = AD + BC, ∠AOB = 90°, and solve the 4 cm inradius triangle problem.',
  ],
  keywords: [
    'Tangent to a circle',
    'Theorem 10.1',
    'Theorem 10.2',
    'Circumscribed quadrilateral',
    'Concentric circles chord',
  ],
  sections: [
    {
      id: 'ch10-formulas-scope',
      title: '1. Theorem Vault & Angle Goldmines (Ch 10)',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Ch 10 Exam Glance',
          bullets: [
            '**Theorem 10.1:** Tangent at any point of a circle is **perpendicular to the radius** through the point of contact (`OP ⊥ XY`).',
            '**Theorem 10.2:** Lengths of tangents drawn from an external point to a circle are **equal** (`PA = PB`). Also `∠OPA = ∠OPB` (`OP` bisects `∠APB` & `∠AOB`).',
            '**Quad Angle Identity:** Tangents `PA, PB` and radii `OA, OB` form cyclic kite `OAPB` → **`∠APB + ∠AOB = 180°`**.',
            '**NCERT Power Identity:** **`∠PTQ = 2 ∠OPQ`** (angle between two tangents equals twice the angle between chord of contact and radius!).',
            '**Circumscribed Quadrilateral:** `AB + CD = AD + BC` (opposite side sums are equal!).',
          ],
        },
        {
          type: 'visual-diagram',
          diagramId: 'circle-tangent-theorems',
          title: 'Theorem 10.1 & Theorem 10.2 Geometry Shield',
          caption: 'The 90° angle ALWAYS sits at the point of contact on the circle — never at the centre O!',
        },
      ],
    },
    {
      id: 'ch10-notebook-mistakes',
      title: '2. Silly-Mistake Notebook Warnings (Ch 10)',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Raghav',
          title: 'Choosing Tangent Length as Hypotenuse Instead of OP',
          wrongWork: 'Radius OA = 5 cm, centre distance OP = 13 cm → PA² = 13² + 5² = 194',
          teacherFix: '∠OAP = 90° → OP is Hypotenuse! PA² = OP² − OA² = 13² − 5² = 144 → PA = 12 cm',
          whyWrong:
            'The side opposite the `90°` angle (`∠OAP`) is ALWAYS `OP` (centre to external point). Tangent `PA` is a leg, so subtract!',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Shreya',
          title: 'Forgetting to Double Half-Chord in Concentric Circles',
          wrongWork: 'Radii 5 cm and 3 cm → AM = √(5² − 3²) = 4 cm → Chord AB = 4 cm',
          teacherFix: 'AM = 4 cm is HALF the chord (perpendicular from centre bisects chord!) → AB = 2 × 4 = 8 cm',
          whyWrong:
            'Remember Class 9 theorem: perpendicular from centre `O` to chord `AB` bisects `AB` at contact point `M`! Always state that reason and multiply by `2`.',
        },
      ],
    },
    {
      id: 'ch10-hand-practice',
      title: '3. Screen-to-Notebook Hand-Practice Workout (Ch 10)',
      blocks: [
        {
          type: 'hand-practice',
          title: 'Ch 10 Graded Notebook Drill (Standard 041)',
          subtitle: 'Sketch the circle + tangent + right-angle square symbol BEFORE calculating.',
          problems: [
            {
              id: 'm10-p1',
              numberLabel: 'Drill 10.1',
              marks: 2,
              timeMinutes: 3,
              tag: 'NCERT Length Basics',
              question:
                '(i) From a point `Q`, the length of the tangent to a circle is **24 cm** and the distance of `Q` from the centre is **25 cm**. Find the radius of the circle.\n(ii) A tangent `PQ` at `P` of a circle of radius **5 cm** meets a line through centre `O` at `Q` so that `OQ = 12 cm`. Find `PQ`.',
              copyCheck: 'In BOTH parts, `OQ` (centre-to-external point) is the **hypotenuse**!',
              step1Setup: 'Use `OP ⊥ PQ` (`∠OPQ = 90°`) → `r² + PQ² = OQ²`.',
              midwayCheckpoint: '(i) `r² = 25² − 24² = 49`; (ii) `PQ² = 12² − 5² = 119`.',
              finalAnswer: '(i) `r = 7 cm`; (ii) `PQ = √119 cm`.',
              fullSolution:
                '(i) `r = √(25² − 24²) = √(625 − 576) = √49 = 7 cm`. [1M]\n(ii) `PQ = √(12² − 5²) = √(144 − 25) = √119 cm` (NOT `13` — `13` only happens if `OQ = 13`!). [1M]',
              sillyTrapNote: 'Guessing `PQ = 13 cm` in (ii) without reading carefully whether `12` is `OQ` or `PQ`!',
            },
            {
              id: 'm10-p2',
              numberLabel: 'Drill 10.2',
              marks: 2,
              timeMinutes: 3,
              tag: 'Tangent Angle Symmetry',
              question:
                'If tangents `PA` and `PB` from a point `P` to a circle with centre `O` are inclined to each other at angle of **80°**, find `∠POA`.',
              copyCheck: '`∠APB = 80°` is the FULL angle between both tangents; `∠POA` is ONLY HALF of `∠AOB`!',
              step1Setup: 'First find `∠AOB = 180° − 80°` (from quad `OAPB`), then halve it (`△OAP ≅ △OBP`), OR in right `△OAP` use `∠OPA = 40°`.',
              midwayCheckpoint: '`∠AOB = 100°` (or `∠OPA = 40°` and `∠OAP = 90°`).',
              finalAnswer: '`∠POA = 50°`.',
              fullSolution:
                '1. Since `OA ⊥ PA` and `OB ⊥ PB`, `∠OAP = ∠OBP = 90°`. [½M]\n2. In quad `OAPB`: `∠AOB = 360° − (90° + 90° + 80°) = 100°`. [1M]\n3. Since `△OAP ≅ △OBP` [RHS], `∠POA = (1/2)∠AOB = 50°`. [½M]',
              sillyTrapNote: 'Stopping at `100°` (`∠AOB`) without dividing by `2` for `∠POA`!',
            },
            {
              id: 'm10-p3',
              numberLabel: 'Drill 10.3',
              marks: 3,
              timeMinutes: 4,
              tag: 'NCERT Ex 10.2 Q7',
              question:
                'Two concentric circles are of radii **5 cm** and **3 cm**. Find the length of the chord of the larger circle which touches the smaller circle.',
              copyCheck: 'Draw two circles with common centre `O`, chord `AB` of larger touching smaller at `M`.',
              step1Setup: '`OM ⊥ AB` (radius ⊥ tangent) and perpendicular from centre bisects chord `AB` (`AM = MB`).',
              midwayCheckpoint: '`AM = √(5² − 3²) = √16 = 4 cm`.',
              finalAnswer: 'Chord length `AB = 2 × 4 = 8 cm`.',
              fullSolution:
                '1. Let common centre `O`; chord `AB` touches smaller circle at `M` (`OM = 3 cm`, `OA = 5 cm`). [1M]\n2. `OM ⊥ AB` [Theorem 10.1]. By Pythagoras in `△OMA`: `AM = √(5² − 3²) = 4 cm`. [1M]\n3. Since perpendicular from centre bisects the chord, `AB = 2 AM = 8 cm`. [1M]',
              sillyTrapNote: 'Forgetting to multiply `4` by `2`!',
            },
            {
              id: 'm10-p4',
              numberLabel: 'Drill 10.4',
              marks: 3,
              timeMinutes: 4,
              tag: 'Circumscribed Quad (Q8 & Q11)',
              question:
                'A quadrilateral `ABCD` is drawn to circumscribe a circle. Prove that `AB + CD = AD + BC`. Hence prove that a **parallelogram** circumscribing a circle is a **rhombus**.',
              copyCheck: 'Label touchpoints `P` on `AB`, `Q` on `BC`, `R` on `CD`, `S` on `DA`. Keep `AP, PB` on LHS of equations!',
              step1Setup: 'Write 4 equal-tangent pairs from `A, B, C, D` (`AP = AS`, `BP = BQ`, `CR = CQ`, `DR = DS`) and ADD all 4.',
              midwayCheckpoint: '`(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ) → AB + CD = AD + BC`.',
              finalAnswer: 'For parallelogram (`AB = CD`, `AD = BC`): `2AB = 2AD → AB = AD` → all 4 sides equal → Rhombus!',
              fullSolution:
                '1. By Theorem 10.2: `AP = AS`, `BP = BQ`, `CR = CQ`, `DR = DS`. [1M]\n2. Add LHS & RHS: `(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ)` → `AB + CD = AD + BC`. [1M]\n3. If `ABCD` is a parallelogram, `AB = CD` and `BC = AD` → `2AB = 2BC → AB = BC`. Thus all four sides are equal → `ABCD` is a rhombus. [1M]',
              sillyTrapNote: 'Writing `AS = AP` on the wrong side of the equals sign breaks the clean pairing `(AP + BP)`!',
            },
            {
              id: 'm10-p5',
              numberLabel: 'Drill 10.5',
              marks: 3,
              timeMinutes: 4,
              tag: 'NCERT Example 2 (Super PYQ!)',
              question:
                'Two tangents `TP` and `TQ` are drawn to a circle with centre `O` from an external point `T`. Prove that `∠PTQ = 2 ∠OPQ`.',
              copyCheck: 'Notice `△TPQ` is isosceles (`TP = TQ`), and `∠OPT = 90°` (`OP ⊥ PT`)!',
              step1Setup: 'Let `∠PTQ = θ`. Express `∠TPQ = (180° − θ)/2 = 90° − θ/2`, then use `∠OPQ = 90° − ∠TPQ`.',
              midwayCheckpoint: '`∠OPQ = 90° − (90° − θ/2) = θ/2`.',
              finalAnswer: '`∠PTQ = θ = 2 ∠OPQ` (Proved).',
              fullSolution:
                '1. Let `∠PTQ = θ`. Since `TP = TQ` [Theorem 10.2], `∠TPQ = ∠TQP`. [1M]\n2. In `△TPQ`: `2∠TPQ + θ = 180°` → `∠TPQ = 90° − θ/2`. [1M]\n3. By Theorem 10.1, `∠OPT = 90°`, so `∠OPQ = ∠OPT − ∠TPQ = 90° − (90° − θ/2) = θ/2` → `∠PTQ = 2 ∠OPQ`. [1M]',
              sillyTrapNote: 'Dropping brackets in `90° − (90° − θ/2)` gives `−θ/2` instead of `+θ/2`!',
            },
            {
              id: 'm10-p6',
              numberLabel: 'Drill 10.6',
              marks: 5,
              timeMinutes: 6,
              tag: 'Parallel Tangents (Ex 10.2 Q9)',
              question:
                '`XY` and `X′Y′` are two parallel tangents to a circle with centre `O` and another tangent `AB` with point of contact `C` intersecting `XY` at `A` and `X′Y′` at `B`. Prove that `∠AOB = 90°`.',
              copyCheck: 'Join `OP` (`P` on `XY`), `OQ` (`Q` on `X′Y′`), and `OC` (`C` on `AB`). Note `POQ` is a straight diameter (`180°`)!',
              step1Setup: 'Prove `△OAP ≅ △OAC` [SSS or RHS] and `△OBQ ≅ △OBC` to halve angles around `O`.',
              midwayCheckpoint: '`∠POA = ∠AOC = x` and `∠QOB = ∠BOC = y`. Since `POQ` is a diameter, `2x + 2y = 180°`.',
              finalAnswer: '`x + y = 90°`, i.e., `∠AOB = ∠AOC + ∠BOC = 90°` (Proved).',
              fullSolution:
                '1. Join `OP, OQ, OC`. Since `XY ∥ X′Y′` and `OP ⊥ XY, OQ ⊥ X′Y′`, `POQ` is a straight line (`∠POQ = 180°`). [1M]\n2. In `△OPA` and `△OCA`: `OP = OC` (radii), `OA = OA`, `AP = AC` [Theorem 10.2] → `△OPA ≅ △OCA` [SSS] → `∠POA = ∠COA`. [1.5M]\n3. Similarly `∠QOB = ∠COB`. [1M]\n4. Sum along line `POQ`: `2∠COA + 2∠COB = 180°` → `∠COA + ∠COB = ∠AOB = 90°`. [1.5M]',
              sillyTrapNote: 'Forgetting to establish that `POQ` is a straight line (180°) or skipping the congruence of `△OPA` and `△OCA`!',
            },
            {
              id: 'm10-p7',
              numberLabel: 'Drill 10.7',
              marks: 5,
              timeMinutes: 8,
              tag: 'Boss 5M: Ex 10.2 Q12 (Inradius 4 cm)',
              question:
                'A triangle `ABC` is drawn to circumscribe a circle of radius **4 cm** such that the segments `BD` and `DC` into which `BC` is divided by the point of contact `D` are of lengths **8 cm** and **6 cm** respectively. Find the sides **AB** and **AC**.',
              copyCheck: 'Let `AF = AE = x cm`, while `BF = BD = 8 cm`, `CE = CD = 6 cm`. Notice `BC = 14 cm`, `AB = x + 8`, `AC = x + 6`!',
              step1Setup: 'Compute `ar(△ABC)` TWO ways: (1) Heron’s Formula `√[s(s−a)(s−b)(s−c)]`, (2) Sum of 3 triangles `(1/2)(AB + BC + CA) × r = 4s`.',
              midwayCheckpoint: '`s = x + 14`; Heron gives `√[48x(x + 14)]`; 3-triangle sum gives `4(x + 14)`. Square both & cancel `16(x + 14)`.',
              finalAnswer: '`x = 7 cm` → **`AB = 15 cm`**, **`AC = 13 cm`**.',
              fullSolution:
                '1. Let touchpoints on `AB, AC` be `F, E`. By Theorem 10.2: `BF = BD = 8`, `CE = CD = 6`, `AF = AE = x`. So `a = 14, b = x + 6, c = x + 8`, `s = x + 14`. [1.5M]\n2. Heron: `ar(△ABC) = √[(x + 14) · x · 8 · 6] = √[48x(x + 14)]`. [1M]\n3. Split into `△OBC + △OCA + △OAB`: `ar = (1/2)×4×14 + (1/2)×4×(x+6) + (1/2)×4×(x+8) = 4(x + 14)`. [1M]\n4. Equate & square: `48x(x + 14) = 16(x + 14)²` → divide by `16(x + 14)` (`x > 0`): `3x = x + 14 → 2x = 14 → x = 7`. [1M]\n5. `AB = 7 + 8 = 15 cm` and `AC = 7 + 6 = 13 cm`. [½M]',
              sillyTrapNote: 'Forgetting `x = 7` is ONLY segment `AF`, NOT side `AB`! You must add `7 + 8 = 15` and `7 + 6 = 13`.',
            },
            {
              id: 'm10-p8',
              numberLabel: 'Drill 10.8',
              marks: 4,
              timeMinutes: 5,
              tag: 'Section E Case-Based (4M)',
              question:
                'A circular garden (`O`, radius `6 cm`) is enclosed by tangent fences `PA` and `PB` from watchtower `P`, with `OP = 10 cm` and `C` on arc `AB` having tangent `DE` cutting `PA, PB` at `D, E`.\n(i) Find length of tangent `PA`.\n(ii) Express perimeter of `△PDE` in terms of `PA`.\n(iii) Hence compute the exact perimeter of `△PDE`.',
              copyCheck: '`r = 6 cm`, `OP = 10 cm`. `DA = DC` and `EB = EC` (Theorem 10.2)!',
              step1Setup: '(i) `PA = √(10² − 6²)`; (ii) Perimeter `PD + (DC + CE) + EP = (PD + DA) + (EB + EP)`.',
              midwayCheckpoint: '`PA = 8 cm`; `Perimeter(△PDE) = PA + PB = 2 × PA`.',
              finalAnswer: '(i) `PA = 8 cm`; (ii) `2 PA`; (iii) `16 cm`.',
              fullSolution:
                '(i) By Theorem 10.1, `PA = √(10² − 6²) = √64 = 8 cm`. [1.5M]\n(ii) `Perimeter(△PDE) = PD + DE + PE = PD + DC + CE + PE = (PD + DA) + (EB + PE) = PA + PB = 2 PA` [Theorem 10.2]. [1.5M]\n(iii) `2 × 8 = 16 cm`. [1M]',
              sillyTrapNote: 'Saying `DE = 6 cm` blindly — `DE` changes with point `C`, yet the PERIMETER `PD + DE + PE` stays constant at `2 PA`!',
            },
          ],
        },
      ],
    },
    {
      id: 'ch10-proofs-checkpoint',
      title: '4. Verbatim Theorems 10.1 & 10.2 Proofs + Self-Check',
      blocks: [
        {
          type: 'qa',
          marks: 3,
          tag: 'Standard 041 Proof (3M/5M)',
          question:
            'Prove **Theorem 10.1**: The tangent at any point of a circle is perpendicular to the radius through the point of contact.',
          answer:
            '**Given:** Circle with centre `O` and tangent `XY` at point `P`.\n**To Prove:** `OP ⊥ XY`.\n**Construction:** Take any point `Q` on `XY` other than `P` and join `OQ`.\n**Proof:**\n1. Since `Q` lies outside the circle (if `Q` were inside, `XY` would be a secant, not a tangent), `OQ` intersects the circle at some point `R` between `O` and `Q`. [1M]\n2. Thus `OQ = OR + RQ > OR`. Since `OP = OR` (radii of same circle), `OQ > OP`. [1M]\n3. This holds for every point `Q` on `XY` other than `P`, so `OP` is the shortest distance from `O` to line `XY`. Since the shortest distance from a point to a line is perpendicular, `OP ⊥ XY`. Hence proved. [1M]',
          markingTip: 'Short, crisp 4-line proof — write "shortest distance from O to XY = perpendicular" clearly!',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Standard 041 Proof (3M/5M)',
          question:
            'Prove **Theorem 10.2**: The lengths of tangents drawn from an external point to a circle are equal.',
          answer:
            '**Given:** Circle with centre `O`; `PQ` and `PR` are tangents from external point `P` touching circle at `Q` and `R`.\n**To Prove:** `PQ = PR`.\n**Construction:** Join `OQ, OR`, and `OP`. [½M]\n**Proof:**\nIn right triangles `△OQP` and `△ORP`:\n1. `∠OQP = ∠ORP = 90°` [Radius ⊥ tangent at contact point, Theorem 10.1] [1M]\n2. `OQ = OR` [Radii of the same circle]\n3. `OP = OP` [Common hypotenuse]\n4. Therefore `△OQP ≅ △ORP` [RHS congruence criterion]. [1M]\n5. Hence `PQ = PR` [CPCT]. Proved. [½M]',
          markingTip: 'Do NOT write SAS here — you only have two sides + the 90° angle (not included between `OQ` and `OP`), so the criterion MUST be **RHS**!',
        },
        {
          type: 'checkpoint',
          prompt:
            'In `△ABC` circumscribing a circle, if `AB = 12 cm`, `BC = 10 cm`, and `CD = 4 cm` (touchpoint `D` on `BC`, `E` on `AC`, `F` on `AB`), what is `AF`?',
          options: [
            { id: 'a', label: '4 cm' },
            { id: 'b', label: '6 cm' },
            { id: 'c', label: '8 cm' },
            { id: 'd', label: '10 cm' },
          ],
          correctIds: ['b'],
          successMsg: 'Correct! `BD = BC − CD = 10 − 4 = 6 cm`. Since `BF = BD = 6 cm`, `AF = AB − BF = 12 − 6 = 6 cm`!',
          hintMsg: 'Find `BD = BC − CD` first, then transfer `BF = BD` along vertex `B`!',
        },
      ],
    },
  ],
};
