import { Topic } from '../../../types/curriculum';

export const topicLight: Topic = {
  id: 'phy-topic-1',
  slug: 'phy-light-reflection-refraction',
  order: 1,
  title: 'Ch 9: Light – Reflection and Refraction',
  description:
    'Spherical mirror & lens ray diagrams (6+2 cases), New-Cartesian sign convention, mirror/lens formulas, magnification, Snell’s law, refractive index & lens power.',
  ncertChapter: 'Chapter 9: Light – Reflection and Refraction',
  subtopics: [
    {
      id: 'phy09-mirrors-and-reflection',
      slug: 'phy09-mirrors-and-reflection',
      title: 'Spherical Mirrors, Ray Diagrams & Mirror Formula',
      subtitle:
        'Laws of Reflection, Concave (6 Cases) & Convex (2 Cases) Ray Diagrams, New-Cartesian Sign-Shield, Mirror Formula & Magnification',
      estimatedMinutes: 45,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT Class 10 Science — Chapter 9 (Sections 9.1 – 9.2)',
      learningObjectives: [
        'State both laws of reflection and draw accurate ray diagrams with mandatory incident/reflected arrows for all 6 concave and 2 convex mirror cases.',
        'Apply New-Cartesian sign convention flawlessly: u is ALWAYS negative, f is negative for concave and positive for convex.',
        'Solve CBSE mirror numericals (1/v + 1/u = 1/f and m = −v/u) including real vs virtual magnification sign traps.',
        'Connect each mirror case to real-life uses (headlights, solar furnaces, shaving/dentist mirror, vehicle rear-view mirror).',
      ],
      keywords: [
        'Concave mirror',
        'Convex mirror',
        'Mirror formula',
        'New-Cartesian sign convention',
        'Magnification',
        'Radius of curvature',
      ],
      sections: [
        {
          id: 'phy09-mirror-laws-signs',
          title: '1. Laws of Reflection, Mirror Terms & New-Cartesian Sign-Shield',
          blocks: [
            {
              type: 'quick-summary',
              title: '60-Second Spherical Mirror Exam Glance',
              bullets: [
                '**Laws of Reflection:** (1) `∠i = ∠r`, (2) Incident ray, reflected ray, and normal at the point of incidence all lie in the **same plane** (holds for ALL surfaces — plane AND spherical!).',
                '**Aperture Link:** For small-aperture spherical mirrors, `R = 2f` (or `f = R/2`). Centre of curvature `C` lies in front of a concave mirror and behind a convex mirror.',
                '**Mirror Formula:** `1/v + 1/u = 1/f` (Notice the **PLUS** sign!).',
                '**Mirror Magnification:** `m = h′/h = −v/u` (Notice the **MINUS** sign!).',
                '**Nature & Orientation Key:** Negative `m` (`m < 0`) = **Real & Inverted**; Positive `m` (`m > 0`) = **Virtual & Erect**.',
              ],
            },
            {
              type: 'table',
              caption: 'New-Cartesian Sign-Shield Matrix for Spherical Mirrors (Pole P at Origin)',
              headers: ['Quantity / Mirror Type', 'Sign Rule', 'Why & CBSE Trap Alert'],
              rows: [
                ['Object distance `u`', '**ALWAYS Negative (`−`)**', 'Object is always placed to the **left** of Pole `P` (against incident light direction).'],
                ['Object height `h`', '**ALWAYS Positive (`+`)**', 'Object stands **erect above** the principal axis (`+y` direction).'],
                ['Focal length `f` (Concave)', '**Negative (`−`)**', 'Focus `F` lies on the reflecting (left) side. `R` is also `−`.'],
                ['Focal length `f` (Convex)', '**Positive (`+`)**', 'Focus `F` lies behind (right of) the mirror. `R` is also `+`.'],
                ['Image distance `v`', '**`−` Real** (front) | **`+` Virtual** (behind)', 'Convex mirror ALWAYS gives `+v` (`0 < v < +f`).'],
                ['Magnification `m`', '**`−` Real/Inverted** | **`+` Virtual/Erect**', '`m = −1` → Concave at `C`; `0 < m < +1` → Convex; `m > +1` → Concave between `P & F`.'],
              ],
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'Why Convex Mirrors Are Preferred as Vehicle Rear-View Mirrors',
              body: 'A convex mirror ALWAYS forms an **erect** (though diminished) image regardless of vehicle distance, and its outward curve provides a much **wider field of view** than a plane mirror of equal size.',
            },
          ],
        },
        {
          id: 'phy09-mirror-diagrams-lab',
          title: '2. Interactive 6+2 Ray Diagrams & Live Optics Bench',
          blocks: [
            {
              type: 'visual-diagram',
              diagramId: 'mirror-6-cases-atlas',
              title: 'Concave (6 Cases) & Convex (2 Cases) Mirror Ray Diagram Atlas',
              caption: 'Click through every CBSE case to see incident/reflected arrows, P/F/C geometry, nature, and real-world applications.',
            },
            {
              type: 'lab',
              labId: 'physics-optics-bench',
              title: 'Live Spherical Mirror & Lens Ray Bench (Tab 1)',
              caption: 'Drag u, |f|, and h₀ sliders or click presets (Beyond C, At C, Between C & F, Inside F) to trace live photons and verify 1/v + 1/u = 1/f.',
            },
          ],
        },
        {
          id: 'phy09-mirror-notebook-clinic',
          title: '3. Sign-Slip Notebook Clinic (Mirrors)',
          blocks: [
            {
              type: 'notebook-mistake',
              studentName: 'Aarav',
              title: 'Dropping Minus Sign on Concave Focal Length & Real Magnification',
              wrongWork: 'Concave mirror f = 15 cm, m = 3 (real) -> 1/v + 1/u = 1/15 and v = -3u',
              teacherFix: 'Concave f = -15 cm; Real image => m = -3 = -v/u => v = +3u (same negative sign as u!)',
              whyWrong:
                'Two deadly slips at once! First, a **concave mirror** always has `f < 0` (`−15 cm`). Second, when a question states *"3 times magnified **real** image"*, real images are **inverted**, so `m = −3`, giving `−v/u = −3 ⇒ v = +3u` (so if `u = −10 cm`, `v = −30 cm`!).',
            },
            {
              type: 'notebook-mistake',
              studentName: 'Meera',
              title: 'Using Lens Formula (−) for a Mirror Question',
              wrongWork: 'Mirror: 1/v - 1/u = 1/f and m = +v/u',
              teacherFix: 'Mirror: 1/v + 1/u = 1/f and m = -v/u',
              whyWrong:
                'Remember the **Plus-Minus Swap**: Mirror formula has `+` (`1/v + 1/u = 1/f`) and `m = −v/u`; Lens formula has `−` (`1/v − 1/u = 1/f`) and `m = +v/u`.',
            },
            {
              type: 'checkpoint',
              prompt: 'Which mirror always forms a virtual, erect, and magnified (`m > +1`) image when the object is held close to it (say as a dentist’s mirror)?',
              options: [
                { id: 'a', label: 'Concave mirror', sublabel: 'Object between Pole P and Focus F' },
                { id: 'b', label: 'Convex mirror', sublabel: 'Object anywhere in front' },
                { id: 'c', label: 'Plane mirror', sublabel: 'm = +1 always' },
                { id: 'd', label: 'Concave mirror', sublabel: 'Object at Centre of Curvature C' },
              ],
              correctIds: ['a'],
              successMsg: 'Spot on! Concave mirror with object inside F (between P & F) gives virtual, erect, and magnified (m > +1). Convex mirror gives virtual & erect, but ALWAYS diminished (0 < m < +1).',
              hintMsg: 'Check Case 6 in the Concave Mirror atlas above — dentists need an enlarged upright tooth view!',
            },
          ],
        },
        {
          id: 'phy09-mirror-hand-practice',
          title: '4. Screen-to-Notebook Numericals (Mirrors)',
          blocks: [
            {
              type: 'hand-practice',
              title: 'Ch 9 Mirrors — Graded Board Numericals (Solve in Notebook First)',
              subtitle: 'Write "Given (with New-Cartesian signs)" on Line 1 before substituting into 1/v + 1/u = 1/f.',
              problems: [
                {
                  id: 'phy09-p1',
                  numberLabel: 'Mirror 9.1',
                  marks: 3,
                  timeMinutes: 4,
                  tag: 'NCERT Core',
                  question:
                    'An object `4.0 cm` in size is placed at `25.0 cm` in front of a concave mirror of focal length `15.0 cm`. At what distance from the mirror should a screen be placed to obtain a sharp image? Find the nature and size of the image.',
                  copyCheck: 'Concave mirror ⇒ `f = −15 cm`; Object left ⇒ `u = −25 cm`; `h = +4 cm`.',
                  step1Setup: '`1/v = 1/f − 1/u = 1/(−15) − 1/(−25) = −1/15 + 1/25`.',
                  midwayCheckpoint: '`1/v = (−5 + 3)/75 = −2/75 ⇒ v = −37.5 cm`.',
                  finalAnswer: 'Screen at `37.5 cm` in front of mirror (`v = −37.5 cm`); **Real, Inverted**, height `h\' = −6.0 cm`.',
                  fullSolution:
                    '1. Given: `h = +4.0 cm`, `u = −25.0 cm`, `f = −15.0 cm` [½M]\n2. Mirror formula: `1/v + 1/u = 1/f ⇒ 1/v = −1/15 + 1/25 = −2/75` [1M]\n3. `v = −37.5 cm` (screen placed `37.5 cm` in front of mirror) [½M]\n4. `m = h\'/h = −v/u ⇒ h\' = −(−37.5)/(−25) × 4.0 = −1.5 × 4.0 = −6.0 cm` [1M]. Nature: Real and inverted.',
                  sillyTrapNote: 'Writing `1/v = −1/15 − 1/25` forgets that subtracting negative `u` (`−1/(−25)`) becomes `+1/25`!',
                },
                {
                  id: 'phy09-p2',
                  numberLabel: 'Mirror 9.2',
                  marks: 3,
                  timeMinutes: 4,
                  tag: 'NCERT Rear-View',
                  question:
                    'A convex mirror used for rear-view on an automobile has a radius of curvature of `3.00 m`. If a bus is located at `5.00 m` from this mirror, find the position, nature, and size (magnification) of the image.',
                  copyCheck: 'Convex mirror ⇒ `R = +3.00 m ⇒ f = +1.50 m`; `u = −5.00 m`.',
                  step1Setup: '`1/v = 1/(+1.50) − 1/(−5.00) = 2/3 + 1/5`.',
                  midwayCheckpoint: '`1/v = 13/15 ⇒ v = +15/13 ≈ +1.15 m`.',
                  finalAnswer: '`v = +1.15 m` behind the mirror; **Virtual & Erect**, `m = +0.23` (factor of `0.23`).',
                  fullSolution:
                    '1. Given: `R = +3.00 m ⇒ f = R/2 = +1.50 m`, `u = −5.00 m` [½M]\n2. `1/v = 1/1.5 − 1/(−5) = 2/3 + 1/5 = 13/15` [1M]\n3. `v = +15/13 = +1.15 m` (behind the mirror) [½M]\n4. `m = −v/u = −(1.15)/(−5.00) = +0.23` [1M]. Image is virtual, erect, and smaller in size by factor `0.23`.',
                  sillyTrapNote: 'Forgetting to halve `R` (`f = R/2`) or putting `f = −1.50 m` (convex mirror ALWAYS has `+f`!).',
                },
                {
                  id: 'phy09-p3',
                  numberLabel: 'Mirror 9.3',
                  marks: 3,
                  timeMinutes: 4,
                  tag: 'Magnification Sign Trap',
                  question:
                    'A concave mirror produces a **three times magnified (enlarged) real image** of an object placed at `10 cm` in front of it. Where is the image located, and what is the focal length of the mirror?',
                  copyCheck: 'Real image ⇒ `m = −3` (negative!); `u = −10 cm`.',
                  step1Setup: '`m = −v/u ⇒ −3 = −v/(−10)`.',
                  midwayCheckpoint: '`v = −30 cm` (`30 cm` in front of mirror).',
                  finalAnswer: 'Image at `30 cm` in front (`v = −30 cm`), focal length `f = −7.5 cm`.',
                  fullSolution:
                    '1. Given: `u = −10 cm`; image is real & 3× magnified ⇒ `m = −3` [1M]\n2. `m = −v/u ⇒ −3 = −v/(−10) ⇒ v = −30 cm` [1M]\n3. `1/f = 1/v + 1/u = 1/(−30) + 1/(−10) = −4/30 ⇒ f = −7.5 cm` [1M].',
                  sillyTrapNote: 'Taking `m = +3` instead of `m = −3` gives `v = +30 cm` (behind mirror — impossible for a real image!).',
                },
                {
                  id: 'phy09-p4',
                  numberLabel: 'Mirror 9.4',
                  marks: 3,
                  timeMinutes: 4,
                  tag: 'CBSE Board Pattern',
                  question:
                    'A concave mirror of focal length `12 cm` forms a **virtual image** of size **double** that of the object. Calculate the object distance `u` and image distance `v`.',
                  copyCheck: 'Concave `f = −12 cm`; Virtual & double ⇒ `m = +2`.',
                  step1Setup: '`m = −v/u = +2 ⇒ v = −2u`. Substitute into `1/v + 1/u = 1/f`.',
                  midwayCheckpoint: '`1/(−2u) + 1/u = 1/(−12) ⇒ +1/(2u) = −1/12`.',
                  finalAnswer: '`u = −6 cm` (`6 cm` in front), `v = +12 cm` (`12 cm` behind the mirror).',
                  fullSolution:
                    '1. Given: `f = −12 cm`, virtual double image ⇒ `m = +2` [½M]\n2. `−v/u = +2 ⇒ v = −2u` [½M]\n3. `1/(−2u) + 1/u = 1/(−12) ⇒ (−1 + 2)/(2u) = −1/12 ⇒ 1/(2u) = −1/12` [1M]\n4. `2u = −12 ⇒ u = −6 cm`, and `v = −2(−6) = +12 cm` [1M]. (Check: `6 cm` is inside `F = 12 cm`, matching Case 6!).',
                  sillyTrapNote: 'Setting `v = +2u` forgets the minus in `m = −v/u`!',
                },
              ],
            },
          ],
        },
        {
          id: 'phy09-mirror-qa',
          title: '5. CBSE Board Exam Q&As (Mirrors)',
          blocks: [
            {
              type: 'qa',
              marks: 2,
              tag: 'NCERT',
              question: 'Name the type of mirror used in the following situations and support your answer with reason:\n(a) Headlights of a car\n(b) Side/rear-view mirror of a vehicle',
              answer:
                '(a) **Concave mirror:** When the bulb is placed at the principal focus `F` of a concave reflector, it produces a powerful **parallel beam of light** going far ahead on the road.\n(b) **Convex mirror:** It ALWAYS forms an **erect** (upright) image of traffic behind and provides a much **wider field of view** because it curves outward.',
              markingTip: '1 mark each: ½M for naming mirror + ½M for optical reason (at F → parallel beam / always erect + wider field of view).',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question: 'The magnification produced by a mirror is `+1`, `−1`, and `+0.4` in three cases. Identify the type of mirror in each case and state the nature of the image.',
              answer:
                '1. **`m = +1` → Plane Mirror:** Virtual, erect, and same size as the object.\n2. **`m = −1` → Concave Mirror (object at `C`):** Real, inverted, and same size as the object.\n3. **`m = +0.4` → Convex Mirror:** Virtual, erect, and diminished (`0 < m < +1`).',
              markingTip: 'Remember: `m = +1` is ONLY plane mirror; `0 < m < +1` is ALWAYS convex mirror; `m > +1` is ONLY concave mirror (object inside F)!',
            },
          ],
        },
      ],
    },
    {
      id: 'phy09-refraction-lenses-power',
      slug: 'phy09-refraction-lenses-power',
      title: 'Refraction, Snell’s Law, Lenses & Power',
      subtitle:
        'Snell’s Law, Absolute & Relative Refractive Index, Rectangular Glass Slab Lateral Shift, Convex/Concave Lens Ray Cases & Dioptre Power',
      estimatedMinutes: 45,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT Class 10 Science — Chapter 9 (Section 9.3)',
      learningObjectives: [
        'State Snell’s law and compute absolute (`n = c/v`) and relative (`n₂₁ = v₁/v₂ = n₂/n₁`) refractive indices without inverting the ratio.',
        'Trace all 6 convex lens and 2 concave lens ray diagrams using `O, F₁, 2F₁, F₂, 2F₂` and distinguish mirror vs lens formula signs.',
        'Compute lens power `P = 1/f(m) = 100/f(cm)` in Dioptres (`D`) and net power `P = P₁ + P₂` for lenses in contact.',
      ],
      keywords: [
        'Snell’s law',
        'Refractive index',
        'Lateral displacement',
        'Convex lens',
        'Concave lens',
        'Power of a lens',
        'Dioptre',
      ],
      sections: [
        {
          id: 'phy09-snell-refractive-index',
          title: '1. Laws of Refraction, Snell’s Law & Optical Density Traps',
          blocks: [
            {
              type: 'quick-summary',
              title: '60-Second Refraction & Lens Formula Vault',
              bullets: [
                '**Snell’s Law:** `sin i / sin r = constant = n₂₁` (holds for a given colour of light and a given pair of media).',
                '**Absolute Refractive Index (`nₘ`):** `nₘ = c / v` where `c = 3 × 10⁸ m/s`. Higher `n` ⇒ **optically denser** ⇒ **slower speed `v`** ⇒ bends **towards normal**!',
                '**Diamond Trap:** Diamond has highest `n = 2.42`, meaning light travels at `c / 2.42 ≈ 1.24 × 10⁸ m/s` — speed reduces by `(1 − 1/2.42) ≈ 58.7%`! Note: **Optical density ≠ Mass density** (Kerosene floats on water because mass density is lower, yet kerosene `n = 1.44 >` water `n = 1.33` is optically denser!).',
                '**Lens Formula:** `1/v − 1/u = 1/f` (MINUS!) and **Magnification:** `m = h′/h = +v/u` (PLUS!).',
                '**Lens Power (`P`):** `P = 1 / f(in metres) = 100 / f(in cm)`. SI unit = **Dioptre (`D`)** (`1 D = 1 m⁻¹`). Convex `P > 0 (+)`, Concave `P < 0 (−)`. Combined lenses: `P = P₁ + P₂`.',
              ],
            },
            {
              type: 'callout',
              variant: 'trap',
              title: 'Rectangular Glass Slab: Why Emergent Ray Is Parallel to Incident Ray',
              body: 'At the air→glass top boundary, light bends **towards** the normal (`n_air < n_glass`). At the opposite parallel glass→air face, light bends **away** from the normal by the exact reverse angle (`∠e = ∠i`). Thus the emergent ray stays **parallel** to the original direction, shifted sideways by a **lateral displacement**.',
            },
          ],
        },
        {
          id: 'phy09-lens-diagrams-lab',
          title: '2. Lens 6+2 Ray Atlas, Sign-Flip Shield & Optics Bench',
          blocks: [
            {
              type: 'visual-diagram',
              diagramId: 'lens-6-cases-atlas',
              title: 'Convex (6 Cases) & Concave (2 Cases) Lens Atlas + Mirror vs Lens Sign-Flip Shield',
              caption: 'Notice how Lens Formula flips the sign to 1/v − 1/u = 1/f and magnification flips to m = +v/u.',
            },
            {
              type: 'lab',
              labId: 'physics-optics-bench',
              title: 'Optics Bench: Convex/Concave Lenses (Tab 1) & Snell’s Law Slab (Tab 2)',
              caption: 'Switch to Convex Lens / Concave Lens in Tab 1, or open Tab 2 to bend rays through Water, Crown Glass, Flint Glass, and Diamond!',
            },
          ],
        },
        {
          id: 'phy09-lens-notebook-clinic',
          title: '3. Sign-Slip Notebook Clinic (Lenses, Power & Refractive Index)',
          blocks: [
            {
              type: 'notebook-mistake',
              studentName: 'Kabir',
              title: 'Using f in Centimetres Inside P = 1/f',
              wrongWork: 'f = +25 cm -> P = 1/25 = +0.04 D',
              teacherFix: 'Convert to metres first: f = +0.25 m -> P = 1/0.25 = +4.0 D (or P = 100/25 = +4.0 D)',
              whyWrong:
                '**1 Dioptre** is defined per **metre** (`1 D = 1 m⁻¹`), NOT per centimetre! Always use `P = 100 / f(cm)` if `f` is given in `cm`.',
            },
            {
              type: 'notebook-mistake',
              studentName: 'Riya',
              title: 'Inverting Relative Refractive Index n₂₁',
              wrongWork: 'n_glass = 1.5, n_water = 1.33 -> n_glass_wrt_water = 1.33 / 1.5',
              teacherFix: 'n_21 (medium 2 w.r.t. medium 1) = n2 / n1 = v1 / v2 = 1.5 / 1.33 = 1.13',
              whyWrong:
                '*"Refractive index of **A** with respect to **B**"* means **`n_AB = n_A / n_B = v_B / v_A`**. Put the "target" medium `n` on top and the "reference" medium `n` on the bottom!',
            },
          ],
        },
        {
          id: 'phy09-lens-hand-practice',
          title: '4. Screen-to-Notebook Numericals (Refraction, Lenses & Power)',
          blocks: [
            {
              type: 'hand-practice',
              title: 'Ch 9 Lenses & Refraction — Graded Board Numericals',
              subtitle: 'Keep `1/v − 1/u = 1/f` and `m = +v/u` visible in your margin so mirror signs never leak in!',
              problems: [
                {
                  id: 'phy09-p5',
                  numberLabel: 'Lens 9.5',
                  marks: 3,
                  timeMinutes: 4,
                  tag: 'NCERT Core',
                  question:
                    'A `2.0 cm` tall object is placed perpendicular to the principal axis of a convex lens of focal length `10 cm`. The distance of the object from the lens is `15 cm`. Find the nature, position, and size of the image. Also find its magnification.',
                  copyCheck: 'Convex lens ⇒ `f = +10 cm`; `u = −15 cm`; `h = +2.0 cm`.',
                  step1Setup: 'Lens formula: `1/v − 1/u = 1/f ⇒ 1/v = 1/10 + 1/(−15)`.',
                  midwayCheckpoint: '`1/v = (3 − 2)/30 = +1/30 ⇒ v = +30 cm`.',
                  finalAnswer: '`v = +30 cm` (other side); **Real & Inverted**, `m = −2`, height `h\' = −4.0 cm`.',
                  fullSolution:
                    '1. Given: `h = +2.0 cm`, `f = +10 cm`, `u = −15 cm` [½M]\n2. `1/v = 1/f + 1/u = 1/10 − 1/15 = +1/30 ⇒ v = +30 cm` [1M]\n3. `m = v/u = (+30)/(−15) = −2` [½M]\n4. `h\' = m × h = −2 × 2.0 = −4.0 cm` [1M]. Real, inverted, and twice enlarged.',
                  sillyTrapNote: 'Computing `m = −v/u = +2` uses the mirror magnification formula instead of lens `m = +v/u`!',
                },
                {
                  id: 'phy09-p6',
                  numberLabel: 'Lens 9.6',
                  marks: 3,
                  timeMinutes: 4,
                  tag: 'NCERT Diverging Lens',
                  question:
                    'A concave lens has focal length of `15 cm`. At what distance should the object from the lens be placed so that it forms an image at `10 cm` from the lens? Also, find the magnification produced by the lens.',
                  copyCheck: 'Concave lens ALWAYS forms virtual image on SAME side ⇒ `f = −15 cm`, `v = −10 cm`!',
                  step1Setup: '`1/u = 1/v − 1/f = 1/(−10) − 1/(−15)`.',
                  midwayCheckpoint: '`1/u = −1/10 + 1/15 = −1/30 ⇒ u = −30 cm`.',
                  finalAnswer: 'Object at `30 cm` in front (`u = −30 cm`); `m = +1/3 ≈ +0.33` (Virtual, Erect, Diminished).',
                  fullSolution:
                    '1. Given: `f = −15 cm`, `v = −10 cm` (concave lens forms virtual image on left) [1M]\n2. `1/u = 1/v − 1/f = −1/10 + 1/15 = (−3 + 2)/30 = −1/30 ⇒ u = −30 cm` [1M]\n3. `m = v/u = (−10)/(−30) = +1/3 = +0.33` [1M].',
                  sillyTrapNote: 'Putting `v = +10 cm` gives `u = +6 cm` (positive `u` is physically impossible!).',
                },
                {
                  id: 'phy09-p7',
                  numberLabel: 'Refraction 9.7',
                  marks: 3,
                  timeMinutes: 3,
                  tag: 'Refractive Index & Speed',
                  question:
                    'Light enters from air to glass having refractive index `1.50`. What is the speed of light in glass (`c = 3 × 10⁸ m/s`)? If diamond has refractive index `2.42`, calculate the speed of light in diamond and the ratio `v_glass / v_diamond`.',
                  copyCheck: '`n = c / v ⇒ v = c / n`.',
                  step1Setup: '`v_glass = (3 × 10⁸) / 1.50` and `v_diamond = (3 × 10⁸) / 2.42`.',
                  midwayCheckpoint: '`v_glass = 2.0 × 10⁸ m/s`; `v_diamond ≈ 1.24 × 10⁸ m/s`.',
                  finalAnswer: '`v_glass = 2.0 × 10⁸ m/s`, `v_diamond ≈ 1.24 × 10⁸ m/s`, ratio `2.42 / 1.50 ≈ 1.61`.',
                  fullSolution:
                    '1. `v_glass = c / n_g = (3 × 10⁸) / 1.50 = 2.0 × 10⁸ m/s` [1M]\n2. `v_diamond = c / n_d = (3 × 10⁸) / 2.42 = 1.24 × 10⁸ m/s` [1M]\n3. Ratio `v_glass / v_diamond = n_d / n_g = 2.42 / 1.50 ≈ 1.61` [1M].',
                  sillyTrapNote: 'Multiplying `c × n` gives speed faster than light (`4.5 × 10⁸ m/s`), which is physically impossible!',
                },
                {
                  id: 'phy09-p8',
                  numberLabel: 'Power 9.8',
                  marks: 2,
                  timeMinutes: 3,
                  tag: 'Lens Power Combination',
                  question:
                    'Two thin lenses of powers `+3.5 D` and `−1.5 D` are placed in contact coaxially. Find the net power, focal length (in `cm`), and nature of the lens combination.',
                  copyCheck: 'Net Power `P = P₁ + P₂` (keep algebraic signs!).',
                  step1Setup: '`P = +3.5 + (−1.5) = +2.0 D`.',
                  midwayCheckpoint: '`f = 100 / P = 100 / (+2.0)`.',
                  finalAnswer: '`P = +2.0 D`, `f = +50 cm` (`+0.5 m`), **Converging (Convex)** combination.',
                  fullSolution:
                    '1. `P = P₁ + P₂ = +3.5 D + (−1.5 D) = +2.0 D` [1M]\n2. `f = 1/P = 1/2.0 = +0.5 m = +50 cm` [½M]\n3. Positive `P` and `f` show the combination behaves like a **converging (convex) lens** [½M].',
                  sillyTrapNote: 'Adding `1/f₁ + 1/f₂` works too, whereas adding `f₁ + f₂` directly is completely WRONG!',
                },
              ],
            },
          ],
        },
        {
          id: 'phy09-lens-qa',
          title: '5. CBSE Board Exam Q&As (Refraction & Lenses)',
          blocks: [
            {
              type: 'qa',
              marks: 2,
              tag: 'NCERT',
              question: 'The refractive index of diamond is `2.42`. What is the meaning of this statement?',
              answer:
                'It means the ratio of the **speed of light in air (or vacuum)** to the **speed of light in diamond** is equal to `2.42` (`v_diamond = c / 2.42`), i.e., light travels `2.42` times slower in diamond than in vacuum.',
              markingTip: 'Must explicitly mention the ratio of speeds (`c / v = 2.42`), not just "high optical density".',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question: 'One-half of a convex lens is covered with black paper. Will this lens produce a complete image of the object? Verify your answer experimentally/logically and state what changes in the image.',
              answer:
                '**Yes**, the convex lens will still produce a **complete image** of the full object, because light rays from every point of the object still pass through the uncovered half of the lens and converge at the same image position (`1/v − 1/u = 1/f` is unchanged). However, the **brightness (intensity) of the image decreases** (nearly halved) since fewer rays pass through.',
              markingTip: 'Common MCQ/3M favourite: Size & position stay IDENTICAL; only **brightness/intensity drops**!',
            },
          ],
        },
      ],
    },
  ],
};
