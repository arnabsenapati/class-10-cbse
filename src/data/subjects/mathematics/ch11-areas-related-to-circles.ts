import { Subtopic } from '../../../types/curriculum';

export const ch11AreasRelatedToCircles: Subtopic = {
  id: 'math-ch11-areas-circles',
  slug: 'ch11-areas-related-to-circles',
  title: 'Ch 11: Areas Related to Circles',
  subtitle:
    'Arc Length, Sector Area & Perimeter, Minor/Major Segments (60°, 90°, 120° Triangle Splits) & Factoring π to Stop Decimal Slips',
  estimatedMinutes: 50,
  difficulty: 'Board Mastery',
  ncertSection: 'CBSE Class 10 Mathematics — Chapter 11 (Rationalized)',
  learningObjectives: [
    'Compute arc length, sector area, and FULL sector perimeter (`l + 2r`, never forgetting the two straight radii).',
    'Calculate minor and major segment areas accurately for central angles `60°` (equilateral `√3/4 r²`), `90°` (right triangle `½r²`), and `120°` (`OM ⊥ AB` split into `30°-60°-90°`).',
    'Check the given `π` (`22/7` vs `3.14`) BEFORE substituting, and combine symmetrical sectors before computing.',
  ],
  keywords: [
    'Area of sector',
    'Area of segment',
    'Length of arc',
    'Perimeter of sector',
    'Central angle 120 degree',
    'Clock hand sector',
  ],
  sections: [
    {
      id: 'ch11-formulas-scope',
      title: '1. Formula Vault & Rationalized Syllabus Scope (Ch 11)',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Ch 11 Exam Glance',
          bullets: [
            '**Length of Arc (`l`):** `(θ / 360°) × 2πr`.',
            '**Area of Sector:** `(θ / 360°) × πr² = (1/2) × l × r`.',
            '**Perimeter of Sector:** **`l + 2r = (θ / 360°) × 2πr + 2r`** (MUST include the two straight radii!).',
            '**Area of Minor Segment:** `Area(Minor Sector) − Area(△OAB)` — remember `Area(Major Segment) = πr² − Area(Minor Segment)`.',
            '**Clock Angle Speed:** Minute hand sweeps `360° / 60 =` **`6° per minute`**; hour hand sweeps **`0.5° per minute`**.',
          ],
        },
        {
          type: 'table',
          caption: 'Ch 11 Triangle-Area Splits (Always derive via `OM ⊥ AB` for `120°` in board exams!)',
          headers: ['Central Angle `θ`', 'Geometry of `△OAB`', 'Area of `△OAB`'],
          rows: [
            ['`60°`', 'Equilateral triangle (`OA = OB = r`)', '`(√3 / 4) r²`'],
            ['`90°`', 'Isosceles right-angled triangle at `O`', '`(1 / 2) r²`'],
            [
              '`120°`',
              'Draw `OM ⊥ AB`: `OM = r cos 60° = r/2`, `AB = 2 r sin 60° = r√3`',
              '`(1/2) × r√3 × (r/2) = (√3 / 4) r²`',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'trap',
          title: 'Rationalized Syllabus Check — Shaded-Combination Puzzles Removed',
          body: 'CBSE **removed** the older composite plane-figure shaded area puzzles from rationalized **Ch 11**. Focus 100% of your written practice on **Sectors, Arcs, Sector Perimeters, and Segments (`60°`, `90°`, `120°`)**.',
        },
        {
          type: 'visual-diagram',
          diagramId: 'sector-and-segment-anatomy',
          title: 'Sector vs Segment vs Sector Perimeter Shield',
          caption: 'A sector boundary includes TWO radii (`2r`) plus curved arc `l`; a segment removes `△OAB` from the sector.',
        },
      ],
    },
    {
      id: 'ch11-notebook-mistakes',
      title: '2. Silly-Mistake Notebook Warnings (Ch 11)',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Aarav',
          title: 'Giving Only Arc Length as Sector Perimeter (Dropping + 2r)',
          wrongWork: 'r = 10.5 cm, θ = 60° → Perimeter = (60/360) × 2 × (22/7) × 10.5 = 11 cm',
          teacherFix: 'Perimeter of Sector = Arc Length + 2r = 11 + 2(10.5) = 11 + 21 = 32 cm',
          whyWrong:
            'A closed pizza-slice sector has **one curved arc** AND **two straight radius edges**! Reporting `11 cm` loses half the credit.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Meera',
          title: 'Rounding One Sector Decimal Early Before Multiplying by 6',
          wrongWork: '6 equal border designs → divide 616 ÷ 6 = 102.67 first, then multiply rounded segment × 6',
          teacherFix: 'Combine algebraically FIRST: 6 × Sector = 6 × (60/360)πr² = πr² = (22/7) × 14² = 616 cm² exact!',
          whyWrong:
            'Combining symmetric sectors (`6 × 60° = 360°`) cancels fractions immediately and eliminates decimal rounding drift.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Dev',
          title: 'Plugging Diameter d Straight Into r Inside πr²',
          wrongWork: 'Pendant diameter = 28 mm → Sector Area = (1/8) × (22/7) × 28 × 28 = 308 mm²',
          teacherFix: 'Line 1: d = 28 mm ⇒ r = 14 mm! Sector Area = (1/8) × (22/7) × 14 × 14 = 77 mm²',
          whyWrong:
            'Because `28` cancels `7` nicely, students often plug `d = 28` directly into `πr²` — producing `4×` the real area!',
        },
      ],
    },
    {
      id: 'ch11-hand-practice',
      title: '3. Screen-to-Notebook Hand-Practice Workout (Ch 11)',
      blocks: [
        {
          type: 'hand-practice',
          title: 'Ch 11 Graded Notebook Drill (Standard 041)',
          subtitle: 'Write `Given: r = ..., θ = ..., π = ...` before writing your formula.',
          problems: [
            {
              id: 'm11-p1',
              numberLabel: 'Drill 11.1',
              marks: 2,
              timeMinutes: 3,
              tag: 'Sector Area & Arc Length',
              question:
                'Find the **area of a sector** and the **length of its arc** in a circle of radius **14 cm** when the central angle is **45°**. (Use `π = 22/7`).',
              copyCheck: '`r = 14 cm`, `θ = 45°`, `π = 22/7`. Reduce `45/360` first!',
              step1Setup: 'Write `θ/360° = 45/360 = 1/8`, then evaluate `(1/8) × πr²` and `(1/8) × 2πr`.',
              midwayCheckpoint: '`Area = (1/8) × (22/7) × 14 × 14`; `l = (1/8) × 2 × (22/7) × 14`.',
              finalAnswer: 'Sector area `= 77 cm²`; Arc length `= 11 cm`.',
              fullSolution:
                '1. `θ/360° = 45°/360° = 1/8`. [½M]\n2. `Area = (1/8) × (22/7) × 14 × 14 = (1/8) × 44 × 14 = 616 / 8 = 77 cm²`. [1M]\n3. `Arc length l = (1/8) × 2 × (22/7) × 14 = 88 / 8 = 11 cm`. [½M]',
              sillyTrapNote: 'Quick self-check: `(1/2) × l × r = (1/2) × 11 × 14 = 77 cm²` matches!',
            },
            {
              id: 'm11-p2',
              numberLabel: 'Drill 11.2',
              marks: 2,
              timeMinutes: 3,
              tag: 'Sector Perimeter Trap',
              question:
                'Compute the **perimeter** of a circular sector having radius **10.5 cm** and central angle **60°**. (Use `π = 22/7`).',
              copyCheck: 'Sector perimeter `= Arc length + 2r`. Rewrite `10.5 = 21/2` to cancel cleanly!',
              step1Setup: 'Compute `l = (60/360) × 2 × (22/7) × (21/2)`, then add `2 × 10.5`.',
              midwayCheckpoint: '`l = (1/6) × 66 = 11 cm`; `2r = 21 cm`.',
              finalAnswer: 'Perimeter `= 11 + 21 = 32 cm`.',
              fullSolution:
                '1. Arc length `l = (60/360) × 2 × (22/7) × (21/2) = (1/6) × 66 = 11 cm`. [1M]\n2. Perimeter of sector `= l + 2r = 11 + 2(10.5) = 11 + 21 = 32 cm`. [1M]',
              sillyTrapNote: 'Writing `11 cm` alone is the #1 Sector Perimeter silly mistake!',
            },
            {
              id: 'm11-p3',
              numberLabel: 'Drill 11.3',
              marks: 3,
              timeMinutes: 4,
              tag: 'Corner Grazing Increase',
              question:
                'A goat is tethered to a corner post of a rectangular grass lawn (`20 m × 16 m`). Initially the rope is **7 m** long, and later it is extended to **14 m**. Find:\n(i) the initial grazing area,\n(ii) the **additional** grazing area gained after extending the rope. (`π = 22/7`)',
              copyCheck: 'Corner of rectangle `⇒ θ = 90°` (quadrant). Question asks for the **increase**, not total new area!',
              step1Setup: '(i) `Area₁ = (1/4) × π × 7²`; (ii) `Increase = (1/4) × π × (14² − 7²)`.',
              midwayCheckpoint: '`Area₁ = 77/2 = 38.5 m²`; `14² − 7² = (14 − 7)(14 + 7) = 7 × 21 = 147`.',
              finalAnswer: '(i) `38.5 m²`; (ii) Additional area `= 115.5 m²`.',
              fullSolution:
                '(i) Corner angle `= 90°`, so `Area₁ = (90/360) × (22/7) × 7 × 7 = (1/4) × 154 = 38.5 m²`. [1.5M]\n(ii) `Area₂ = (1/4) × (22/7) × 14 × 14 = 154 m²`. Additional grazing area `= 154 − 38.5 = 115.5 m²`. [1.5M]',
              sillyTrapNote: 'Factoring `π/4 (14² − 7²) = (11/14) × 147 = 11 × 10.5 = 115.5 m²` confirms the subtraction!',
            },
            {
              id: 'm11-p4',
              numberLabel: 'Drill 11.4',
              marks: 3,
              timeMinutes: 4,
              tag: '90° Minor Segment & Major Sector',
              question:
                'A chord in a circle of radius **10 cm** forms a **90°** angle at the centre. Calculate:\n(i) the area of the **minor segment**,\n(ii) the area of the **major sector**. (Use `π = 3.14`).',
              copyCheck: '`r = 10 cm`, `θ = 90°`, `π = 3.14`. Notice part (ii) asks for **major sector**, NOT major segment!',
              step1Setup: '(i) `Minor Segment = Sector(90°) − Area(△OAB)`; (ii) `Major Sector = (270/360) × πr²`.',
              midwayCheckpoint: '`Minor sector = 78.5 cm²`; `Area(△OAB) = (1/2) × 10 × 10 = 50 cm²`.',
              finalAnswer: '(i) Minor segment `= 28.5 cm²`; (ii) Major sector `= 235.5 cm²`.',
              fullSolution:
                '(i) `Minor sector = (90/360) × 3.14 × 10² = 314 / 4 = 78.5 cm²`. Since `∠AOB = 90°`, `Area(△OAB) = (1/2) × 10 × 10 = 50 cm²`. Thus `Minor segment = 78.5 − 50 = 28.5 cm²`. [2M]\n(ii) Major angle `= 360° − 90° = 270°` → `Major sector = (3/4) × 3.14 × 100 = 235.5 cm²`. [1M]',
              sillyTrapNote: 'Read carefully: `Major sector = 235.5`, whereas `Major segment = 314 − 28.5 = 285.5`!',
            },
            {
              id: 'm11-p5',
              numberLabel: 'Drill 11.5',
              marks: 3,
              timeMinutes: 5,
              tag: '60° Sector & Exact Radical Segment',
              question:
                'An arc of a circle of radius **21 cm** subtends **60°** at the centre `O`. Find:\n(i) the arc length,\n(ii) the sector area,\n(iii) the area of the minor segment in exact form (`π = 22/7`).',
              copyCheck: '`OA = OB = 21 cm` with `∠AOB = 60°` makes `△OAB` **equilateral** (`side = 21 cm`)!',
              step1Setup: 'Compute arc `(60/360)2πr`, sector `(60/360)πr²`, then subtract equilateral `(√3/4) × 21²`.',
              midwayCheckpoint: '`l = 22 cm`; `Sector = 231 cm²`; `Area(△OAB) = 441√3 / 4 cm²`.',
              finalAnswer: '(i) `22 cm`; (ii) `231 cm²`; (iii) `(231 − 441√3 / 4) cm²`.',
              fullSolution:
                '(i) `l = (60/360) × 2 × (22/7) × 21 = 22 cm`. [1M]\n(ii) `Sector = (60/360) × (22/7) × 21 × 21 = 11 × 21 = 231 cm²`. [1M]\n(iii) In `△OAB`, `OA = OB = 21` and `∠AOB = 60° ⇒ ∠OAB = ∠OBA = 60°` (`△OAB` equilateral). `Area(△OAB) = (√3/4) × 21² = 441√3/4 cm²`. Hence `Segment = (231 − 441√3/4) cm²`. [1M]',
              sillyTrapNote: 'Never use `(1/2) r²` for `60°` — `(1/2) r²` ONLY works when `sin θ = 1` (`θ = 90°`)!',
            },
            {
              id: 'm11-p6',
              numberLabel: 'Drill 11.6',
              marks: 5,
              timeMinutes: 7,
              tag: 'Boss 5M: 120° Segment Derivation',
              question:
                'A decorative glass pane arc of radius **12 cm** has a chord subtending **120°** at the centre `O`. Find the area of the **minor segment**. (Use `π = 3.14` and `√3 = 1.73`).',
              copyCheck: 'Sketch `OM ⊥ AB` bisecting `∠AOB = 120°` into two `60°` angles; `OA = 12 cm`.',
              step1Setup: 'Compute `Sector = (120/360) × 3.14 × 12²`, then find `OM` and `AB = 2 AM` from right `△OMA`.',
              midwayCheckpoint: '`Sector = 150.72 cm²`; `OM = 12 cos 60° = 6 cm`, `AM = 12 sin 60° = 6√3 cm` → `AB = 12√3 cm`.',
              finalAnswer: 'Minor segment `= 150.72 − 62.28 = 88.44 cm²`.',
              fullSolution:
                '1. `Area(sector) = (120/360) × 3.14 × 12 × 12 = 3.14 × 48 = 150.72 cm²`. [1.5M]\n2. Draw `OM ⊥ AB`. Since `OA = OB`, `OM` bisects both `AB` and `∠AOB`, giving `∠AOM = 60°`. [1M]\n3. In right `△OMA`: `OM = 12 cos 60° = 6 cm`, `AM = 12 sin 60° = 6√3 cm ⇒ AB = 2 AM = 12√3 cm`. [1M]\n4. `Area(△OAB) = (1/2) × 12√3 × 6 = 36√3 = 36 × 1.73 = 62.28 cm²`. [1M]\n5. `Segment = 150.72 − 62.28 = 88.44 cm²`. [½M]',
              sillyTrapNote: 'Forgetting to double `AM = 6√3` to get full base `AB = 12√3` cuts the triangle area in half!',
            },
            {
              id: 'm11-p7',
              numberLabel: 'Drill 11.7',
              marks: 5,
              timeMinutes: 7,
              tag: '6 Equal Border Designs (Tray Problem)',
              question:
                'A circular copper tray of radius **14 cm** contains an inscribed regular hexagon, leaving **6 identical minor-segment border motifs** along the rim. Find the cost of gilding all 6 motifs at **₹0.50 per cm²**. (Use `π = 22/7`, `√3 = 1.73`).',
              copyCheck: 'Regular hexagon `⇒ 6` equal central angles of `60°`! Multiply BEFORE dividing by `6`.',
              step1Setup: '`Total motif area = πr² − 6 × (√3/4)r²`. Compute circle minus hexagon cleanly.',
              midwayCheckpoint: '`πr² = (22/7) × 14 × 14 = 616 cm²`; `Hexagon = 6 × (1.73/4) × 196 = 294 × 1.73 = 508.62 cm²`.',
              finalAnswer: 'Motif area `= 107.38 cm²` → Gilding cost `= ₹53.69`.',
              fullSolution:
                '1. Each central angle is `360°/6 = 60°`. Together, the `6` sectors equal the full circle: `πr² = (22/7) × 14 × 14 = 616 cm²`. [1.5M]\n2. Area of `6` equilateral triangles (`side = 14 cm`) `= 6 × (√3/4) × 14² = 6 × 1.73 × 49 = 294 × 1.73 = 508.62 cm²`. [1.5M]\n3. `Border design area = 616 − 508.62 = 107.38 cm²`. [1M]\n4. `Cost = 107.38 × 0.50 = ₹53.69`. [1M]',
              sillyTrapNote: 'Computing 1 segment separately forces dividing by `6` and `3`, creating rounding errors.',
            },
            {
              id: 'm11-p8',
              numberLabel: 'Drill 11.8',
              marks: 4,
              timeMinutes: 5,
              tag: 'Section E Case-Based: Brass Pendant Wheel',
              question:
                'A jeweller bends brass wire into a circular pendant of **diameter 28 mm**, then adds **4 straight wire diameters** dividing the wheel into **8 equal sectors**.\n(i) Find the **total length of brass wire** required.\n(ii) Find the **area of each sector** formed. (`π = 22/7`)',
              copyCheck: '**`d = 28 mm` ⇒ `r = 14 mm`**! Do NOT plug `28` as `r` into `πr²`.',
              step1Setup: '(i) `Wire = πd + 4d`; (ii) `Area of 1 sector = (1/8) × πr²` (since `45°/360° = 1/8`).',
              midwayCheckpoint: '(i) `Circumference = (22/7) × 28 = 88 mm`, plus `4 × 28 = 112 mm`; (ii) `(1/8) × (22/7) × 14 × 14`.',
              finalAnswer: '(i) `200 mm`; (ii) `77 mm²`.',
              fullSolution:
                '(i) `Circumference = πd = (22/7) × 28 = 88 mm`. Length of `4` diameters `= 4 × 28 = 112 mm`. Total wire `= 88 + 112 = 200 mm`. [2M]\n(ii) `r = 28/2 = 14 mm`. Area of each of the `8` equal sectors `= (1/8) × (22/7) × 14 × 14 = 616 / 8 = 77 mm²`. [2M]',
              sillyTrapNote: 'Using `r = 28` instead of `14` gives `308 mm²` (4× too big), and forgetting the ring circumference leaves only `112 mm`!',
            },
          ],
        },
      ],
    },
    {
      id: 'ch11-proofs-checkpoint',
      title: '4. Twin-Wiper Standard Problem & Ch 11 Self-Check',
      blocks: [
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE Board Pattern',
          question:
            'A bus windshield has **two non-overlapping wiper blades**, each **21 cm** long sweeping through an angle of **120°**. Find the total windshield area cleaned in one sweep. (`π = 22/7`)',
          answer:
            '1. Given: `r = 21 cm`, `θ = 120°`, number of blades `= 2` (non-overlapping). [½M]\n2. `Total Cleaned Area = 2 × (120° / 360°) × (22 / 7) × 21 × 21`. [1M]\n3. Simplify BEFORE multiplying: `120 / 360 = 1 / 3` and `21 / 7 = 3` (which cancels `/3` completely!). [½M]\n4. `Total Area = 2 × 22 × 21 = 44 × 21 = 924 cm²`. [1M]',
          markingTip: 'Cancel `(1/3)` with `(21/7 = 3)` cleanly instead of multiplying `22 × 441 = 9702` first, and remember the factor of **`2`** for both wipers!',
        },
        {
          type: 'checkpoint',
          prompt:
            'What is the **perimeter** of a circular quadrant of radius **7 cm** (`π = 22/7`)?',
          options: [
            { id: 'a', label: '11 cm' },
            { id: 'b', label: '22 cm' },
            { id: 'c', label: '25 cm' },
            { id: 'd', label: '38.5 cm' },
          ],
          correctIds: ['c'],
          successMsg:
            'Spot on! Quadrant arc `= (1/4) × 2 × (22/7) × 7 = 11 cm`, PLUS two straight radii `2 × 7 = 14 cm` → Perimeter `= 11 + 14 = 25 cm`!',
          hintMsg: '`11 cm` is only the curved quarter-circle arc — a closed quadrant perimeter also includes `2r`!',
        },
      ],
    },
  ],
};
