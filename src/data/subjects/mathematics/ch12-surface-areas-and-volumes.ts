import { Subtopic } from '../../../types/curriculum';

export const ch12SurfaceAreasAndVolumes: Subtopic = {
  id: 'math-ch12-surface-areas-volumes',
  slug: 'ch12-surface-areas-and-volumes',
  title: 'Ch 12: Surface Areas and Volumes',
  subtitle:
    'Combined Solids (Visible Paintable CSA vs Joined Internal Faces), Hollowed Cavities, Diameter-to-Radius Shield & Symbolic π Shortcuts',
  estimatedMinutes: 55,
  difficulty: 'Board Mastery',
  ncertSection: 'CBSE Class 10 Mathematics — Chapter 12 (Rationalized)',
  learningObjectives: [
    'Compute the Total Surface Area of combined solids strictly by adding ONLY exposed/paintable curved surfaces (never blind `TSA₁ + TSA₂`).',
    'Compute net volumes of composite solids by adding mounted shapes and subtracting scooped-out conical or hemispherical cavities.',
    'Convert `d → r = d/2` on Line 1, extract cone slant height `l = √(r² + h²)` using clean triples, and factor out `π` until the final line.',
  ],
  keywords: [
    'Combination of solids',
    'Curved surface area',
    'Hemisphere mounted on cylinder',
    'Conical cavity',
    'Slant height l',
    'Solid iron pole mass',
  ],
  sections: [
    {
      id: 'ch12-formulas-scope',
      title: '1. Solid Formula Grid & Rationalized Syllabus Scope (Ch 12)',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Ch 12 Exam Glance',
          bullets: [
            '**Exposed Surface Principle:** Think "if I dip this glued toy in paint, which surfaces actually get wet?" Internal glued discs vanish completely!',
            '**Cube Surmounted by Hemisphere (`a = d`):** `SA = 6a² − πr² + 2πr² = 6a² + πr²`.',
            '**Cylinder with Scooped Cone at Top (`r, h`):** Remaining solid has **bottom base `πr²` + outer wall `2πrh` + inner conical slant wall `πrl`**!',
            '**Volume of Joined Solids:** Always additive (`V₁ + V₂`). **Volume with Drilled/Scooped Cavity:** `V(outer) − V(cavity)`.',
            '**Slant Height Link:** Never confuse vertical `h` (used inside Volume `(1/3)πr²h`) with slant height `l = √(r² + h²)` (used inside CSA `πrl`)!',
          ],
        },
        {
          type: 'table',
          caption: 'Ch 12 Master Formula Reference — Copy the Right Column First!',
          headers: ['3D Shape', 'CSA / LSA', 'TSA (Alone)', 'Volume'],
          rows: [
            ['Cuboid (`l, b, h`)', '`2h(l + b)`', '`2(lb + bh + hl)`', '`l × b × h`'],
            ['Cube (side `a`)', '`4a²`', '`6a²`', '`a³`'],
            ['Right Cylinder (`r, h`)', '`2πrh`', '`2πr(h + r)`', '`πr²h`'],
            ['Right Cone (`r, h, l`)', '`πrl` (`l = √(r² + h²)`)', '`πr(l + r)`', '`(1/3) πr²h`'],
            ['Sphere (`r`)', '`4πr²`', '`4πr²`', '`(4/3) πr³`'],
            ['Hemisphere (`r`)', '`2πr²`', '`3πr²` (solid base)', '`(2/3) πr³`'],
          ],
        },
        {
          type: 'callout',
          variant: 'trap',
          title: 'Rationalized Syllabus Check — Frustum & Recasting Excluded!',
          body: 'CBSE **deleted** **Frustum of a Cone** and **Conversion of Solid from One Shape to Another (melting/recasting, canal flow, embankment wells)** from the rationalized **Ch 12** syllabus. Master **Combinations of Two Solids (Surface Area & Volume)** inside out.',
        },
        {
          type: 'visual-diagram',
          diagramId: 'combined-solids-visible-surface',
          title: 'Visible Paintable Surface vs Hidden Glued Interfaces',
          caption: 'Add ONLY outer paintable faces for Surface Area; subtract cavities ONLY for Volume (not SA!).',
        },
      ],
    },
    {
      id: 'ch12-notebook-mistakes',
      title: '2. Silly-Mistake Notebook Warnings (Ch 12)',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Kabir',
          title: 'Blindly Adding TSA(Cylinder) + TSA(Cone) on a Tent',
          wrongWork: 'Tent Canvas = 2πr(h + r) + πr(l + r)',
          teacherFix: 'Glued junction circle is internal, and floor has no canvas → Canvas = 2πrh + πrl = πr(2h + l)',
          whyWrong:
            'Adding full TSAs counts the hidden base circle between the cylinder and cone **twice**! Always build composite SA piece by piece from visible faces.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Ananya',
          title: 'Subtracting Inner Conical Cavity Inside Surface Area',
          wrongWork: 'Solid cylinder with scooped cone: SA = TSA(cylinder) − πrl',
          teacherFix: 'Scooping out a cone exposes NEW inner wall `+ πrl`! SA = πr² + 2πrh + πrl',
          whyWrong:
            'Carving out a hole **decreases Volume** (`V₁ − V₂`), NOT Surface Area! Your hand can touch the inside wall of the conical pit, so `+ πrl` ADDS to total surface area.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Rohan',
          title: 'Subtracting Total Height Twice or Missing r = d/2',
          wrongWork: 'Hemisphere d = 14 cm mounted by cylinder (total H = 15 cm) → h = 15 cm, r = 14 cm',
          teacherFix: 'Line 1: d = 14 ⇒ r = 7 cm. Dome takes up height r = 7 cm ⇒ cylinder h = 15 − 7 = 8 cm!',
          whyWrong:
            'Both the vertical height AND radius of a hemisphere equal `r = d/2`! Always subtract `r` (once for 1 hemisphere, `2r` for capsule ends) to get cylinder/cone height.',
        },
      ],
    },
    {
      id: 'ch12-hand-practice',
      title: '3. Screen-to-Notebook Hand-Practice Workout (Ch 12)',
      blocks: [
        {
          type: 'hand-practice',
          title: 'Ch 12 Graded Notebook Drill (Standard 041)',
          subtitle: 'Box `d → r = d/2` and split total height BEFORE picking any formula.',
          problems: [
            {
              id: 'm12-p1',
              numberLabel: 'Drill 12.1',
              marks: 2,
              timeMinutes: 3,
              tag: 'Joined Cubes Basics',
              question:
                'Two identical cubes, each having a volume of **125 cm³**, are joined end-to-end along one square face. Find the **total surface area** of the resulting cuboid.',
              copyCheck: 'Find side `a` from `a³ = 125` first. Two joined cubes double ONLY length `l`, NOT breadth `b` or height `h`!',
              step1Setup: 'Cube edge `a = 5 cm`. Resulting cuboid dimensions: `l = 10 cm`, `b = 5 cm`, `h = 5 cm`.',
              midwayCheckpoint: '`TSA = 2(lb + bh + hl) = 2(10×5 + 5×5 + 5×10)`.',
              finalAnswer: 'Resulting cuboid TSA `= 250 cm²`.',
              fullSolution:
                '1. `a³ = 125 ⇒ a = 5 cm`. [½M]\n2. Joining end-to-end gives `l = 5 + 5 = 10 cm`, `b = 5 cm`, `h = 5 cm`. [½M]\n3. `TSA = 2(50 + 25 + 50) = 2 × 125 = 250 cm²`. [1M]',
              sillyTrapNote: 'Computing `2 × 6a² = 300 cm²` forgets that the `2` glued internal square faces (`2 × 25 = 50 cm²`) disappear!',
            },
            {
              id: 'm12-p2',
              numberLabel: 'Drill 12.2',
              marks: 3,
              timeMinutes: 4,
              tag: 'Hollow Vessel Inner SA',
              question:
                'A decorative metal vessel consists of a hollow **hemisphere** surmounted by a hollow **cylinder**. The diameter of the hemisphere is **14 cm** and the total height of the vessel is **15 cm**. Find its **inner surface area**. (`π = 22/7`)',
              copyCheck: '**`d = 14 cm` ⇒ `r = 7 cm`**, and cylinder height `h = 15 − 7 = 8 cm`!',
              step1Setup: 'Inner visible surfaces `= CSA(cylinder) + CSA(hemisphere) = 2πr(h + r)`.',
              midwayCheckpoint: '`2 × (22/7) × 7 × (8 + 7) = 44 × 15`.',
              finalAnswer: 'Inner surface area `= 660 cm²`.',
              fullSolution:
                '1. `r = 14/2 = 7 cm`; height of cylindrical portion `h = 15 − 7 = 8 cm`. [1M]\n2. `Inner SA = 2πrh + 2πr² = 2πr(h + r)`. [1M]\n3. Substitute: `2 × (22/7) × 7 × (8 + 7) = 44 × 15 = 660 cm²`. [1M]',
              sillyTrapNote: 'Notice factoring `2πr(h + r)` immediately reveals `h + r = total height = 15`, eliminating two separate `22/7` steps!',
            },
            {
              id: 'm12-p3',
              numberLabel: 'Drill 12.3',
              marks: 3,
              timeMinutes: 5,
              tag: 'Cone + Hemisphere Top (Slant Height)',
              question:
                'A spinning wooden toy is shaped as a **cone** mounted on a **hemisphere** of the same radius **3.5 cm**. The **total height** of the toy is **15.5 cm**. Find the **total surface area** of the toy. (`π = 22/7`)',
              copyCheck: 'Write `r = 3.5 = 7/2 cm`! Conical vertical height `h = 15.5 − 3.5 = 12 cm` (NOT `15.5`)!',
              step1Setup: 'Find slant height `l = √(r² + h²)` using `7/2` and `24/2`, then factor `TSA = πr(l + 2r)`.',
              midwayCheckpoint: '`l = √((7/2)² + (24/2)²) = 25/2 = 12.5 cm`; `l + 2r = 12.5 + 7 = 19.5 cm`.',
              finalAnswer: 'Total surface area `= 11 × 19.5 = 214.5 cm²`.',
              fullSolution:
                '1. `r = 3.5 = 7/2 cm`; height of cone `h = 15.5 − 3.5 = 12 cm`. [½M]\n2. `l = √(3.5² + 12²) = √(49/4 + 576/4) = √(625/4) = 25/2 = 12.5 cm`. [1M]\n3. `TSA = πrl + 2πr² = πr(l + 2r) = (22/7) × (7/2) × (12.5 + 7) = 11 × 19.5 = 214.5 cm²`. [1.5M]',
              sillyTrapNote: 'Halving the `(7, 24, 25)` Pythagorean triple avoids messy decimal square roots!',
            },
            {
              id: 'm12-p4',
              numberLabel: 'Drill 12.4',
              marks: 3,
              timeMinutes: 4,
              tag: 'Cube + Mounted Hemisphere',
              question:
                'A solid cubical stone block of side **7 cm** is surmounted by a **hemisphere**. State the **greatest diameter** the hemisphere can have, and calculate the **total surface area** of the resulting solid. (`π = 22/7`)',
              copyCheck: 'Max diameter `= 7 cm` ⇒ **`r = 7/2 cm`**. Bottom circle of the dome covers part of the cube’s top face!',
              step1Setup: 'Exposed `SA = TSA(cube) − Base circle(πr²) + Dome CSA(2πr²) = 6a² + πr²`.',
              midwayCheckpoint: '`6(7²) = 294 cm²`; `πr² = (22/7) × (7/2) × (7/2) = 77/2 = 38.5 cm²`.',
              finalAnswer: 'Greatest diameter `= 7 cm`; Solid SA `= 294 + 38.5 = 332.5 cm²`.',
              fullSolution:
                '1. Maximum diameter of hemisphere equals cube edge `= 7 cm ⇒ r = 7/2 cm`. [½M]\n2. Since the circular base (`πr²`) sits hidden flush on top of the cube: `SA = 6a² − πr² + 2πr² = 6a² + πr²`. [1.5M]\n3. `SA = 6(49) + (22/7) × (7/2) × (7/2) = 294 + 38.5 = 332.5 cm²`. [1M]',
              sillyTrapNote: 'Writing `6a² + 2πr²` fails to subtract the covered circular footprint `−πr²`!',
            },
            {
              id: 'm12-p5',
              numberLabel: 'Drill 12.5',
              marks: 5,
              timeMinutes: 6,
              tag: 'Circus Tent Canvas + Cost',
              question:
                'A circus exhibition tent has a cylindrical wall of height **3 m** and base **diameter 14 m**, topped by a conical roof of **slant height 12 m**. Find the total canvas area used (excluding the ground) and its cost at **₹400 per m²**. (`π = 22/7`)',
              copyCheck: '**`d = 14 m` ⇒ `r = 7 m`**! Notice `12 m` is ALREADY **slant height `l`** (no Pythagoras needed!).',
              step1Setup: 'Factor `Canvas = 2πrh + πrl = πr(2h + l)` BEFORE plugging `π = 22/7`.',
              midwayCheckpoint: '`2h + l = 2(3) + 12 = 18 m`; `Canvas = (22/7) × 7 × 18`.',
              finalAnswer: 'Canvas area `= 396 m²`; Total cost `= ₹1,58,400`.',
              fullSolution:
                '1. Given: `r = 14/2 = 7 m`, `h = 3 m`, `l = 12 m`. [1M]\n2. `Canvas = CSA(cylinder) + CSA(cone) = πr(2h + l)`. [1.5M]\n3. `Canvas = (22/7) × 7 × (6 + 12) = 22 × 18 = 396 m²`. [1.5M]\n4. `Cost = 396 × 400 = ₹1,58,400`. [1M]',
              sillyTrapNote: 'Using `l = √(7² + 12²)` by mistake wastes 4 minutes — read carefully whether **vertical height** or **slant height** is given!',
            },
            {
              id: 'm12-p6',
              numberLabel: 'Drill 12.6',
              marks: 3,
              timeMinutes: 5,
              tag: 'Wood Stand − 4 Conical Depressions',
              question:
                'A wooden desk holder is a cuboid (`20 cm × 10 cm × 4 cm`) with **four conical pen slots** carved into it, each of radius **0.7 cm** and depth **1.5 cm**. Find the **volume of wood** remaining in the stand. (`π = 22/7`)',
              copyCheck: 'Write `0.7 = 7/10` and `1.5 = 3/2` as clean fractions — almost everything cancels!',
              step1Setup: 'Compute `V(cuboid) − 4 × (1/3)πr²h`.',
              midwayCheckpoint: '`V(cuboid) = 800 cm³`; `4 cones = 4 × (1/3) × (22/7) × (7/10) × (7/10) × (3/2) = 308/100`.',
              finalAnswer: 'Remaining volume `= 800 − 3.08 = 796.92 cm³`.',
              fullSolution:
                '1. `Volume of cuboid = 20 × 10 × 4 = 800 cm³`. [1M]\n2. `Volume of 4 conical slots = 4 × (1/3) × (22/7) × (7/10) × (7/10) × (3/2) = (2 × 22 × 7)/100 = 3.08 cm³`. [1.5M]\n3. `Remaining wood = 800 − 3.08 = 796.92 cm³`. [½M]',
              sillyTrapNote: 'Forgetting to multiply by `4` slots (`0.77` instead of `3.08`) or dividing by `3` improperly!',
            },
            {
              id: 'm12-p7',
              numberLabel: 'Drill 12.7',
              marks: 5,
              timeMinutes: 8,
              tag: 'Boss 5M: Solid Two-Tier Pillar Mass',
              question:
                'A solid brass lamp pillar consists of a lower cylinder of height **200 cm** and base **diameter 24 cm**, surmounted by an upper cylinder of height **50 cm** and **radius 6 cm**. Find the total **mass in kg** if `1 cm³` of brass has mass **8 g**. (Use `π = 3.14`).',
              copyCheck: '**TRAP ALERT:** Lower cylinder gives **diameter `24 cm` (`r₁ = 12 cm`)**, while upper gives **radius `6 cm` (`r₂ = 6 cm`, DO NOT halve!)**!',
              step1Setup: 'Factor `π` FIRST: `V = π(r₁² h₁ + r₂² h₂)`. Then multiply mass `= V × 8 g ÷ 1000` for `kg`.',
              midwayCheckpoint: '`r₁² h₁ + r₂² h₂ = 144×200 + 36×50 = 28800 + 1800 = 30600`; `V = 3.14 × 30600 = 96084 cm³`.',
              finalAnswer: '`Mass = 768,672 g = 768.672 kg` (`≈ 768.67 kg`).',
              fullSolution:
                '1. Lower cylinder: `r₁ = 24/2 = 12 cm`, `h₁ = 200 cm`. Upper: `r₂ = 6 cm`, `h₂ = 50 cm`. [1M]\n2. `Volume = π(r₁² h₁ + r₂² h₂) = 3.14 × (144 × 200 + 36 × 50) = 3.14 × (28800 + 1800) = 3.14 × 30600`. [1.5M]\n3. `V = 314 × 306 = 96,084 cm³`. [1M]\n4. `Mass = 96,084 × 8 = 768,672 g = 768.672 kg ≈ 768.67 kg`. [1.5M]',
              sillyTrapNote: 'Halving `r₂ = 6` to `3` by momentum, OR forgetting to convert grams to **kilograms** (`÷ 1000`)!',
            },
            {
              id: 'm12-p8',
              numberLabel: 'Drill 12.8',
              marks: 4,
              timeMinutes: 6,
              tag: 'Section E Case-Based: Hollowed Cone Cavity',
              question:
                'From a solid wooden cylinder of height **2.4 cm** and **diameter 1.4 cm**, a conical cavity of the same height and base radius is hollowed out (`π = 22/7`).\n(i) Find the **slant height `l`** of the conical cavity.\n(ii) Find the **total surface area** of the remaining solid (to nearest `cm²`).\n(iii) Find the **volume** of wood remaining.',
              copyCheck: '**`d = 1.4 cm` ⇒ `r = 0.7 cm`**, `h = 2.4 cm`. Cavity removes top disc but EXPOSES inner slant surface `+ πrl`!',
              step1Setup: '(i) `l = √(0.7² + 2.4²)`; (ii) `TSA = πr² + 2πrh + πrl = πr(r + 2h + l)`; (iii) `V = (2/3)πr²h`.',
              midwayCheckpoint: '`l = 2.5 cm`; `r + 2h + l = 0.7 + 4.8 + 2.5 = 8.0 cm`; `TSA = 2.2 × 8.0`.',
              finalAnswer: '(i) `2.5 cm`; (ii) `17.6 cm²` (`≈ 18 cm²`); (iii) `2.464 cm³`.',
              fullSolution:
                '(i) `r = 0.7 cm`, `h = 2.4 cm ⇒ l = √(0.49 + 5.76) = √6.25 = 2.5 cm`. [1M]\n(ii) `Remaining TSA = Base(πr²) + Outer wall(2πrh) + Inner cone(πrl) = (22/7) × 0.7 × (0.7 + 4.8 + 2.5) = 2.2 × 8 = 17.6 cm² ≈ 18 cm²`. [2M]\n(iii) `Remaining Volume = πr²h − (1/3)πr²h = (2/3) × (22/7) × 0.7 × 0.7 × 2.4 = 2 × 22 × 0.1 × 0.7 × 0.8 = 2.464 cm³`. [1M]',
              sillyTrapNote: 'Adding top disc `2πr²` (top face was carved open!) or subtracting `−πrl` inside Surface Area!',
            },
          ],
        },
      ],
    },
    {
      id: 'ch12-proofs-checkpoint',
      title: '4. Double-Cone Tank Sum & Ch 12 Self-Check',
      blocks: [
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE Board Pattern',
          question:
            'An industrial steam boiler has a central cylinder of radius **2.1 m** and length **8 m**, capped identically on **both ends** by two cones each of height **3 m**. Compute the internal air capacity of the boiler. (`π = 22/7`)',
          answer:
            '1. Cylinder: `r = 2.1 m`, `h₂ = 8 m`. Two identical cones: `r = 2.1 m`, `h₁ = 3 m` each. [½M]\n2. Factor `πr²`: `Volume = πr²h₂ + 2 × (1/3)πr²h₁ = πr²(h₂ + 2h₁/3)`. [1M]\n3. Substitute `2h₁/3 = 2(3)/3 = 2`: `V = (22/7) × 2.1 × 2.1 × (8 + 2)`. [½M]\n4. Cancel `2.1/7 = 0.3`: `V = 22 × 0.3 × 2.1 × 10 = 6.6 × 21 = 138.6 m³`. [1M]',
          markingTip: 'Remember there are **TWO** conical caps (`2 × 1/3 πr²h₁`), and factoring `πr²` shrinks three big multiplications down to ONE clean `6.6 × 21`!',
        },
        {
          type: 'checkpoint',
          prompt:
            'A solid cylinder of radius `r` and height `h` has a cone of the same radius and height scooped out from its top face. How many flat/curved faces contribute to its new Total Surface Area?',
          options: [
            { id: 'a', label: 'Outer curved wall + Bottom base − Inner cone (`2πrh + πr² − πrl`)' },
            { id: 'b', label: 'Outer curved wall + Bottom base + Inner cone (`2πrh + πr² + πrl`)' },
            { id: 'c', label: 'Outer curved wall + Both circular bases + Inner cone (`2πrh + 2πr² + πrl`)' },
            { id: 'd', label: 'Only outer curved wall (`2πrh`)' },
          ],
          correctIds: ['b'],
          successMsg:
            'Spot on! Volume subtracts `−(1/3)πr²h`, but Surface Area **adds** the newly exposed inner hollow slant surface `+ πrl` (while the open top disc disappears)!',
          hintMsg: 'Think "paint dip": water/paint reaches the outside cylinder, the bottom base, AND the inside of the carved cone!',
        },
      ],
    },
  ],
};
