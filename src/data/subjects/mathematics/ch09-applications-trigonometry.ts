import { Subtopic } from '../../../types/curriculum';

export const ch09ApplicationsTrigonometry: Subtopic = {
  id: 'math-ch09-applications-trigonometry',
  slug: 'ch09-applications-trigonometry',
  title: 'Ch 9: Some Applications of Trigonometry',
  subtitle:
    'Horizontal Sightlines, Angle of Elevation vs. Depression, Two-Triangle Problems (Ships, Pedestal, Balloon, Moving Car & Aeroplane Speed)',
  estimatedMinutes: 50,
  difficulty: 'Board Mastery',
  ncertSection: 'NCERT Class 10 Mathematics — Chapter 9',
  learningObjectives: [
    'Draw a clean, labelled right-triangle diagram with a dashed horizontal eye-level line BEFORE writing any equation.',
    'Keep closer object = LARGER angle (60°) and farther object = SMALLER angle (30°) automatically.',
    'Eliminate common distance x cleanly between two right triangles and rationalise denominators (divide by √3 cleanly).',
  ],
  keywords: [
    'Angle of elevation',
    'Angle of depression',
    'Line of sight',
    'Two-triangle height problems',
    'Rationalising √3',
  ],
  sections: [
    {
      id: 'ch09-formulas-scope',
      title: '1. Diagram Rules & Speed Trig Values (Ch 9)',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Ch 9 Exam Glance',
          bullets: [
            '**Diagram Carries 1 Full Mark:** A correct labelled figure with dashed horizontal eye-level line & arrows on angles is mandatory.',
            '**Closer = Steeper (Larger Angle):** As you walk TOWARDS a building, elevation jumps (`30° → 45° → 60°`). So the `60°` point is ALWAYS closer to the base than the `30°` point!',
            '**Three Numbers You Use 95% of the Time:** `tan 30° = 1/√3`, `tan 45° = 1` (gives `Height = Base` instantly!), `tan 60° = √3`.',
            '**Rationalise Only at the End:** `k / √3 = (k√3) / 3`. Use `√3 ≈ 1.732` ONLY if the question explicitly provides or asks for decimal!',
          ],
        },
        {
          type: 'visual-diagram',
          diagramId: 'elevation-vs-depression-sightlines',
          title: 'Horizontal Eye-Level Line: Angle of Elevation vs. Depression',
          caption: 'Depression β sits between the horizontal eye-level line and line of sight, then transfers to ground via Alternate Interior Angles.',
        },
      ],
    },
    {
      id: 'ch09-notebook-mistakes',
      title: '2. Silly-Mistake Notebook Warnings (Ch 9)',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Tanvi',
          title: 'Marking Angle of Depression Against the Vertical Building Wall',
          wrongWork: 'Marked 30° at the top corner between the vertical tower wall and the line of sight',
          teacherFix: 'Draw a dashed horizontal ray from the observer’s eye → mark 30° from the HORIZONTAL → alternate interior angle at ground = 30°',
          whyWrong:
            'Placing `30°` against the vertical wall actually puts `60°` at the ground (`90° − 30°`), flipping your `tan 30°` into `tan 60°` and destroying the answer!',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Manav',
          title: 'Forgetting Observer / Building Height in Final Answer',
          wrongWork: 'Boy 1.5 m tall measures upper building height y = 28.5/√3... or Building 7 m + Tower upper y = 7√3 → Final Answer = 7√3 m',
          teacherFix: 'Always trace the FULL height segment from ground up: H = 7√3 + 7 = 7(√3 + 1) m',
          whyWrong:
            'In 2-building or boy-viewing-building sums, the right triangle stops at eye-level! Check the ground baseline on your drawing before boxing your final number.',
        },
      ],
    },
    {
      id: 'ch09-hand-practice',
      title: '3. Screen-to-Notebook Hand-Practice Workout (Ch 9)',
      blocks: [
        {
          type: 'hand-practice',
          title: 'Ch 9 Graded Notebook Drill (Draw Diagram First for Every Question!)',
          subtitle: 'No calculation before sketching and labelling `AB, CD, 90°, θ` in your register.',
          problems: [
            {
              id: 'm09-p1',
              numberLabel: 'Drill 9.1',
              marks: 3,
              timeMinutes: 4,
              tag: 'NCERT Storm Tree (Ex 9.1 Q2)',
              question:
                'A tree breaks due to storm and the broken part bends so that the top of the tree touches the ground making an angle **30°** with it. The distance between the foot of the tree to the point where the top touches the ground is **8 m**. Find the **height of the tree**.',
              copyCheck: 'Original Tree Height `= Standing Part (AB) + Broken Slant Part (AC)`!',
              step1Setup: 'In right `△ABC` (`∠B = 90°`, `BC = 8 m`, `∠C = 30°`): find BOTH `AB` (`tan 30°`) AND `AC` (`cos 30°`).',
              midwayCheckpoint: '`AB = 8/√3 m` and `AC = 16/√3 m`.',
              finalAnswer: 'Total height of tree = `8√3 m`.',
              fullSolution:
                '1. Draw right `△ABC`: `AB` = standing trunk, `AC` = bent top touching `C` (`BC = 8 m`, `∠C = 30°`). [1M]\n2. `tan 30° = AB/8 → 1/√3 = AB/8 → AB = 8/√3 m`. [½M]\n3. `cos 30° = 8/AC → √3/2 = 8/AC → AC = 16/√3 m`. [½M]\n4. Original height `= AB + AC = 8/√3 + 16/√3 = 24/√3 = (24√3)/3 = 8√3 m`. [1M]',
              sillyTrapNote: 'Stopping after finding `AB = 8/√3` and forgetting the bent hypotenuse `AC`!',
            },
            {
              id: 'm09-p2',
              numberLabel: 'Drill 9.2',
              marks: 4,
              timeMinutes: 5,
              tag: 'Building + Tower',
              question:
                'From the top of a **7 m** high building, the angle of elevation of the top of a cable tower is **60°** and the angle of depression of its foot is **45°**. Determine the height of the tower.',
              copyCheck: 'Tower is TALLER than building. Draw dashed horizontal from building top `A` to `E` on tower.',
              step1Setup: 'In lower right `△ABD`, use `tan 45° = 7 / x`; in upper `△AEC`, use `tan 60° = CE / x`.',
              midwayCheckpoint: '`x = 7 m`, `CE = 7√3 m`.',
              finalAnswer: 'Height of tower = `7(√3 + 1) m`.',
              fullSolution:
                '1. Let building `AB = 7 m`, tower `CD`, horizontal `AE ∥ BD` (`ED = 7 m`). [1M]\n2. Depression `45°` → `∠ADB = 45°`. In `△ABD`: `tan 45° = 7/BD → BD = 7 m = AE`. [1M]\n3. In `△AEC`: `tan 60° = CE/7 → CE = 7√3 m`. [1M]\n4. Tower height `CD = CE + ED = 7√3 + 7 = 7(√3 + 1) m`. [1M]',
              sillyTrapNote: 'Subtracting `7` instead of adding `7`, or forgetting `ED = 7 m` completely.',
            },
            {
              id: 'm09-p3',
              numberLabel: 'Drill 9.3',
              marks: 3,
              timeMinutes: 5,
              tag: 'Statue on Pedestal (Ex 9.1 Q8)',
              question:
                'A statue, **1.6 m** tall, stands on the top of a pedestal. From a point on the ground, the angle of elevation of the top of the statue is **60°** and from the same point the angle of elevation of the top of the pedestal is **45°**. Find the height of the pedestal.',
              copyCheck: 'Let pedestal height `= h m` and ground distance `= x m`. Do NOT mix `1.6` into the lower `45°` triangle!',
              step1Setup: '`tan 45° = h / x → x = h`. Then `tan 60° = (h + 1.6) / x`.',
              midwayCheckpoint: '`√3 = (h + 1.6) / h → h(√3 − 1) = 1.6`.',
              finalAnswer: 'Height of pedestal = `0.8(√3 + 1) m`.',
              fullSolution:
                '1. Draw pedestal `BC = h`, statue `AB = 1.6 m`, ground point `D` (`CD = x`). [1M]\n2. In `△BCD`: `tan 45° = h/x → x = h`. [½M]\n3. In `△ACD`: `tan 60° = (h + 1.6)/h → h√3 = h + 1.6 → h(√3 − 1) = 1.6`. [1M]\n4. Rationalise: `h = 1.6/(√3 − 1) × (√3 + 1)/(√3 + 1) = 1.6(√3 + 1)/2 = 0.8(√3 + 1) m`. [½M]',
              sillyTrapNote: 'Leaving denominator un-rationalised or dropping the `2` from `(√3 − 1)(√3 + 1) = 3 − 1 = 2`!',
            },
            {
              id: 'm09-p4',
              numberLabel: 'Drill 9.4',
              marks: 5,
              timeMinutes: 6,
              tag: 'Two Equal Poles (Ex 9.1 Q10)',
              question:
                'Two poles of **equal heights** are standing opposite each other on either side of the road, which is **80 m** wide. From a point between them on the road, the angles of elevation of the top of the poles are **60°** and **30°** respectively. Find the **height of the poles** and the **distances of the point from the poles**.',
              copyCheck: 'Let point `P` be `x` m from the `60°` pole (closer!) and `(80 − x)` m from the `30°` pole!',
              step1Setup: 'In `60°` triangle: `h = x√3`. In `30°` triangle: `h = (80 − x)/√3`. Equate `h = h`.',
              midwayCheckpoint: '`x√3 = (80 − x)/√3 → 3x = 80 − x → x = 20 m`.',
              finalAnswer: 'Pole height = `20√3 m`; Distances from poles = **20 m** and **60 m**.',
              fullSolution:
                '1. Draw poles `AB = CD = h`, road `BD = 80 m`, point `P` with `BP = x`, `PD = 80 − x`. [1M]\n2. `tan 60° = h/x → h = x√3` (i). `tan 30° = h/(80 − x) → h = (80 − x)/√3` (ii). [1.5M]\n3. Equate: `x√3 = (80 − x)/√3 → 3x = 80 − x → 4x = 80 → x = 20 m`. [1.5M]\n4. `PD = 80 − 20 = 60 m`; Height `h = 20√3 m`. [1M]',
              sillyTrapNote: 'Assuming the point `P` is at the midpoint (`40 m`) — angles `60°` & `30°` are unequal so `P` is NOT the midpoint!',
            },
            {
              id: 'm09-p5',
              numberLabel: 'Drill 9.5',
              marks: 4,
              timeMinutes: 5,
              tag: 'Two Ships Behind Each Other',
              question:
                'As observed from the top of a **75 m** high lighthouse from sea-level, the angles of depression of two ships are **30°** and **45°**. If one ship is exactly behind the other on the **same side** of the lighthouse, find the distance between the two ships.',
              copyCheck: '`45°` ship is CLOSER (`x = 75 m`); `30°` ship is FARTHER (`y = 75√3 m`).',
              step1Setup: 'In `△ABC` (`45°`): `75/x = tan 45°`. In `△ABD` (`30°`): `75/y = tan 30°`. Distance `= y − x`.',
              midwayCheckpoint: '`x = 75 m` and `y = 75√3 m`.',
              finalAnswer: 'Distance between ships = `75(√3 − 1) m`.',
              fullSolution:
                '1. Draw lighthouse `AB = 75 m`, closer ship `C` (`∠ACB = 45°`), farther ship `D` (`∠ADB = 30°`). [1M]\n2. `tan 45° = 75/BC → BC = 75 m`. [1M]\n3. `tan 30° = 75/BD → 1/√3 = 75/BD → BD = 75√3 m`. [1M]\n4. Distance `CD = BD − BC = 75√3 − 75 = 75(√3 − 1) m`. [1M]',
              sillyTrapNote: 'Subtracting `75 − 75√3` backwards (negative distance) because of assigning `30°` to `C` and `45°` to `D`!',
            },
            {
              id: 'm09-p6',
              numberLabel: 'Drill 9.6',
              marks: 5,
              timeMinutes: 6,
              tag: 'Girl + Moving Balloon (Ex 9.1 Q14)',
              question:
                'A **1.2 m** tall girl spots a balloon moving with the wind in a horizontal line at a height of **88.2 m** from the ground. The angle of elevation of the balloon from the eyes of the girl at any instant is **60°**. After some time, the angle of elevation reduces to **30°**. Find the distance travelled by the balloon during the interval.',
              copyCheck: 'Subtract girl’s eye height FIRST: `Vertical height = 88.2 − 1.2 = 87 m`!',
              step1Setup: 'With vertical leg `= 87 m`: `x₁ = 87 / tan 60°`, `x₂ = 87 / tan 30°`. Travelled `= x₂ − x₁`.',
              midwayCheckpoint: '`x₁ = 87/√3 = 29√3 m`, `x₂ = 87√3 m`.',
              finalAnswer: 'Distance travelled = `58√3 m`.',
              fullSolution:
                '1. Height of balloon above girl’s eyes `= 88.2 − 1.2 = 87 m`. [1M]\n2. At `60°`: `tan 60° = 87/x₁ → x₁ = 87/√3 = 29√3 m`. [1.5M]\n3. At `30°`: `tan 30° = 87/x₂ → x₂ = 87√3 m`. [1.5M]\n4. Distance travelled `= x₂ − x₁ = 87√3 − 29√3 = 58√3 m`. [1M]',
              sillyTrapNote: 'Using `88.2 m` directly instead of `88.2 − 1.2 = 87 m`!',
            },
            {
              id: 'm09-p7',
              numberLabel: 'Drill 9.7',
              marks: 5,
              timeMinutes: 6,
              tag: 'Boss 5M: Moving Car Time (Ex 9.1 Q15)',
              question:
                'A straight highway leads to the foot of a tower. A man standing at the top of the tower observes a car at an angle of depression of **30°**, which is approaching the foot of the tower with a uniform speed. **Six seconds** later, the angle of depression of the car is found to be **60°**. Find the time taken by the car to reach the foot of the tower from this point.',
              copyCheck: 'No tower height `h` is given — let tower height be `h` and uniform speed be `v` m/s (both cancel!).',
              step1Setup: 'Let `C` (`30°`) and `D` (`60°`), tower base `B`. Find `BC = h√3` and `BD = h/√3` → `CD = BC − BD`.',
              midwayCheckpoint: '`CD = h√3 − h/√3 = 2h/√3`, while remaining `BD = h/√3 = (1/2) CD`.',
              finalAnswer: 'Time to reach foot from `D` = **3 seconds**.',
              fullSolution:
                '1. Draw tower `AB = h`; car moves `C → D → B` (`∠C = 30°, ∠D = 60°`). [1M]\n2. `BD = h / tan 60° = h/√3`; `BC = h / tan 30° = h√3`. [1.5M]\n3. Distance `CD = BC − BD = h√3 − h/√3 = 2h/√3`. [1M]\n4. Time for `2h/√3` is `6 s` → speed `v = h/(3√3)` → time for `BD = h/√3` is `(h/√3) ÷ [h/(3√3)] = 3 seconds`. [1.5M]',
              sillyTrapNote: 'Answering `9 seconds` (which is TOTAL time from `C` to `B`), instead of "from this point (`D`)" = `3 seconds`!',
            },
            {
              id: 'm09-p8',
              numberLabel: 'Drill 9.8',
              marks: 4,
              timeMinutes: 6,
              tag: 'Section E Case-Based: Aeroplane Speed (PYQ)',
              question:
                'The angle of elevation of an aeroplane from a point `A` on the ground is **60°**. After a flight of **30 seconds**, the angle of elevation changes to **30°**. If the plane is flying at a constant height of **3000√3 m**:\n(i) Draw the two-triangle geometry and find the horizontal distances `x₁` (at `60°`) and `x₂` (at `30°`).\n(ii) Find the speed of the aeroplane in **km/h**.',
              copyCheck: 'Height `= 3000√3 m` (notice `√3` is ALREADY in height — watch how cleanly it simplifies!).',
              step1Setup: '`x₁ = (3000√3)/tan 60°`, `x₂ = (3000√3)/tan 30°`. Distance `= x₂ − x₁`, `Speed = Dist / 30 s`.',
              midwayCheckpoint: '`x₁ = 3000 m`, `x₂ = 9000 m` → horizontal distance in `30 s` is `6000 m`.',
              finalAnswer: '(i) `3000 m` and `9000 m`; (ii) Speed = `200 m/s` = **720 km/h**.',
              fullSolution:
                '(i) At `60°`: `tan 60° = 3000√3 / x₁ → x₁ = 3000 m`. At `30°`: `1/√3 = 3000√3 / x₂ → x₂ = 9000 m`. [2M]\n(ii) Distance `= 9000 − 3000 = 6000 m` in `30 s` → Speed `= 6000/30 = 200 m/s = 200 × (18/5) = 720 km/h`. [2M]',
              sillyTrapNote: 'Converting `m/s` to `km/h` using `× 5/18` instead of `× 18/5`!',
            },
          ],
        },
      ],
    },
    {
      id: 'ch09-proofs-checkpoint',
      title: '4. Quick Calculation Model & Self-Check (Ch 9)',
      blocks: [
        {
          type: 'qa',
          marks: 3,
          tag: 'Standard 041 Word Problem',
          question:
            'If the height of a vertical pole is `√3` times the length of its shadow on the ground, find the angle of elevation of the Sun.',
          answer:
            '1. Let shadow length `= x`, so pole height `= x√3`. [1M]\n2. In the right triangle formed, `tan θ = Height / Shadow = (x√3) / x = √3`. [1M]\n3. Since `tan 60° = √3`, the angle of elevation of the Sun is `θ = 60°`. [1M]',
          markingTip: 'If shadow = `√3 × height` instead, `tan θ = 1/√3 → θ = 30°` — read which one is multiplied by `√3`!',
        },
        {
          type: 'checkpoint',
          prompt:
            'Observer `A` views a tower top at `45°` elevation; Observer `B` walks closer and sees it at `60°`. Who is closer to the tower?',
          options: [
            { id: 'a', label: 'Observer A (45°)' },
            { id: 'b', label: 'Observer B (60°)' },
            { id: 'c', label: 'Both are equidistant' },
            { id: 'd', label: 'Depends on tower height' },
          ],
          correctIds: ['b'],
          successMsg: 'Correct! Greater elevation angle (`60° > 45°`) always means CLOSER to the vertical tower.',
          hintMsg: 'Check `x = h / tan θ`: larger `θ` gives larger `tan θ`, which makes denominator bigger and `x` SMALLER!',
        },
      ],
    },
  ],
};
