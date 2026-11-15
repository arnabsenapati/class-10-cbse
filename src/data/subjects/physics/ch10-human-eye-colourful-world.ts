import { Topic } from '../../../types/curriculum';

export const topicHumanEye: Topic = {
  id: 'phy-topic-2',
  slug: 'phy-human-eye-colourful-world',
  order: 2,
  title: 'Ch 10: The Human Eye and the Colourful World',
  description:
    'Structure of the human eye, power of accommodation, myopia/hypermetropia/presbyopia correction numericals, glass prism dispersion, 3-step rainbow, atmospheric refraction & Tyndall scattering.',
  ncertChapter: 'Chapter 10: The Human Eye and the Colourful World',
  subtopics: [
    {
      id: 'phy10-eye-and-defects',
      slug: 'phy10-eye-and-defects',
      title: 'Human Eye, Accommodation & Myopia / Hypermetropia / Presbyopia',
      subtitle:
        'Eye Anatomy Self-Test, Ciliary Muscle Accommodation, 25 cm – ∞ Vision Range, 3-Panel Defect Ray Diagrams & Corrective Power Numericals',
      estimatedMinutes: 40,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT Class 10 Science — Chapter 10 (Sections 10.1 – 10.2)',
      learningObjectives: [
        'Label all 8 parts of the human eye cross-section and explain how the iris, pupil, cornea, retina, and ciliary muscles operate.',
        'Explain power of accommodation (near point 25 cm, far point ∞) and contrast ciliary muscle relaxation vs contraction.',
        'Distinguish causes and draw 3-panel ray diagrams for Myopia, Hypermetropia, and Presbyopia.',
        'Compute exact corrective lens power P = 100/f(cm) using the u vs v defect sign rule.',
      ],
      keywords: [
        'Power of accommodation',
        'Near point 25 cm',
        'Myopia',
        'Hypermetropia',
        'Presbyopia',
        'Ciliary muscles',
        'Retina',
      ],
      sections: [
        {
          id: 'phy10-eye-structure',
          title: '1. Eye Anatomy, Power of Accommodation & 25 cm – ∞ Range',
          blocks: [
            {
              type: 'quick-summary',
              title: '60-Second Human Eye & Defects Cheat Sheet',
              bullets: [
                '**Cornea vs Eye Lens:** Most refraction of entering light happens at the outer **cornea**; the **crystalline lens** provides fine adjustment to focus real & inverted images on the **retina**.',
                '**Iris & Pupil:** The coloured **iris** controls the size of the **pupil**, regulating the amount of light entering the eye (dilates in dim light, contracts in bright light).',
                '**Accommodation (Ciliary Muscles):** Looking at **distant objects** → ciliary muscles **relax** → eye lens becomes **thin** → focal length **increases**. Looking at **nearby objects** → ciliary muscles **contract** → lens becomes **thicker/more curved** → focal length **decreases** (limit = `25 cm`, least distance of distinct vision!).',
                '**Myopia (Near-sightedness):** Sees near clearly, NOT distant. Image forms **in front of retina**. Causes: (1) excessive curvature of eye lens, (2) elongation of eyeball. Fix: **Concave lens (`−D`)** with `u = −∞`, `v = −(Far Point)`.',
                '**Hypermetropia (Far-sightedness):** Sees far clearly, NOT near (`25 cm`). Image forms **behind retina**. Causes: (1) focal length too long, (2) eyeball too small. Fix: **Convex lens (`+D`)** with `u = −25 cm`, `v = −(Near Point)`.',
                '**Presbyopia:** Age-related weakening of ciliary muscles & diminishing lens flexibility (both near and far affected → **Bifocal lens**: upper concave for far, lower convex for reading!).',
              ],
            },
            {
              type: 'table',
              caption: 'Defects of Vision & New-Cartesian Lens Formula Mapping',
              headers: ['Defect', 'Where Image Forms', 'Causes (Any 2)', 'Lens Used & Sign Setup'],
              rows: [
                [
                  '**Myopia**',
                  'In front of retina',
                  '1. Excessive lens curvature\n2. Elongation of eyeball',
                  '**Concave (`−D`)** | `u = −∞`, `v = −d_far` ⇒ `f = −d_far`',
                ],
                [
                  '**Hypermetropia**',
                  'Behind retina',
                  '1. Focal length of eye lens too long\n2. Eyeball too small',
                  '**Convex (`+D`)** | `u = −25 cm`, `v = −d_near` (`1/f = 1/v − 1/u`)',
                ],
                [
                  '**Presbyopia**',
                  'Near point recedes (often + myopia)',
                  '1. Weakening ciliary muscles\n2. Reduced lens flexibility with age',
                  '**Bifocal lens** (Upper concave, lower convex)',
                ],
              ],
            },
          ],
        },
        {
          id: 'phy10-defects-visual-lab',
          title: '2. Eye Self-Test Diagram, 3-Panel Defects & Optics Fixer Lab',
          blocks: [
            {
              type: 'visual-diagram',
              diagramId: 'human-eye-and-defects-diagrams',
              title: 'Human Eye Anatomy (Self-Test Toggle) + 3-Panel Myopia & Hypermetropia Comparison',
              caption: 'Click "Exam Self-Test: Hide Labels" to quiz yourself on every eye part, then review the 3-panel defect diagrams below.',
            },
            {
              type: 'lab',
              labId: 'physics-optics-bench',
              title: 'Interactive Eye Defect Lens Fixer (Open Tab 2 → Eye Defect Lens Fixer)',
              caption: 'Switch to Tab 2 → Eye Defect Lens Fixer to slide spectacle power (−4 D to +4 D) and pull the focal point cleanly onto the retina.',
            },
          ],
        },
        {
          id: 'phy10-defects-notebook-clinic',
          title: '3. Far-Point vs Near-Point Sign Clinic',
          blocks: [
            {
              type: 'notebook-mistake',
              studentName: 'Ananya',
              title: 'Swapping u and v in Hypermetropia Numericals',
              wrongWork: 'Near point = 1 m, object at 25 cm -> u = -100 cm, v = -25 cm -> f = -33.3 cm (Concave!)',
              teacherFix: 'Corrective lens creates virtual image AT eye near point: u = -25 cm, v = -100 cm -> 1/f = -1/100 + 1/25 = +3/100 -> P = +3.0 D (Convex!)',
              whyWrong:
                'Always ask: *"Where is the book (`u`), and where does the spectacle lens project its virtual image so the defective eye can see it (`v`)?"* The book is at `u = −25 cm`, and the lens forms a virtual image at the eye’s defective near point `v = −100 cm`!',
            },
            {
              type: 'notebook-mistake',
              studentName: 'Rohan',
              title: 'Saying "Eye Lens Power Increases" When Looking Far Away',
              wrongWork: 'To see distant stars, ciliary muscles contract to give strong focal power.',
              teacherFix: 'To see distant objects, ciliary muscles RELAX -> lens becomes THIN -> focal length INCREASES (power decreases).',
              whyWrong:
                'Distant parallel rays need **weak** bending (longer `f` ≈ eyeball diameter ~2.3 cm), so ciliary muscles **relax** cleanly! Near diverging rays need **strong** bending (shorter `f`), so ciliary muscles **contract**.',
            },
          ],
        },
        {
          id: 'phy10-defects-hand-practice',
          title: '4. Screen-to-Notebook Defect Power Numericals',
          blocks: [
            {
              type: 'hand-practice',
              title: 'Ch 10 Eye Defects — Graded Numericals (Solve in Notebook First)',
              subtitle: 'State both `u` and `v` with negative signs in cm before converting `f` to metres for Dioptres (`D`).',
              problems: [
                {
                  id: 'phy10-p1',
                  numberLabel: 'Eye 10.1',
                  marks: 3,
                  timeMinutes: 3,
                  tag: 'NCERT Myopia',
                  question:
                    'The far point of a myopic person is `80 cm` in front of the eye. What is the nature and power of the lens required to correct the problem?',
                  copyCheck: 'Myopia ⇒ wants to see distant objects (`u = −∞`) imaged at far point (`v = −80 cm`).',
                  step1Setup: '`1/f = 1/v − 1/u = 1/(−80) − 1/(−∞) = −1/80`.',
                  midwayCheckpoint: '`f = −80 cm = −0.80 m`.',
                  finalAnswer: '**Concave lens** of power `P = −1.25 D` (`f = −80 cm`).',
                  fullSolution:
                    '1. Object at infinity: `u = −∞`, virtual image at far point: `v = −80 cm` [1M]\n2. `1/f = 1/(−80) − 0 = −1/80 ⇒ f = −80 cm = −0.8 m` [1M]\n3. `P = 1/f(m) = 1/(−0.8) = −1.25 D` (negative sign ⇒ **concave lens**) [1M].',
                  sillyTrapNote: 'Writing `P = 1/(−80) = −0.0125 D` forgets converting `80 cm` into `0.8 m`!',
                },
                {
                  id: 'phy10-p2',
                  numberLabel: 'Eye 10.2',
                  marks: 3,
                  timeMinutes: 4,
                  tag: 'NCERT Hypermetropia',
                  question:
                    'The near point of a hypermetropic eye is `1 m`. What is the power of the lens required to correct this defect? Assume that the near point of the normal eye is `25 cm`.',
                  copyCheck: 'Convert `1 m = 100 cm`. Book at `u = −25 cm`, virtual image at defective near point `v = −100 cm`.',
                  step1Setup: '`1/f = 1/v − 1/u = 1/(−100) − 1/(−25)`.',
                  midwayCheckpoint: '`1/f = (−1 + 4)/100 = +3/100 cm⁻¹ ⇒ f = +100/3 cm = +1/3 m`.',
                  finalAnswer: '**Convex lens** of power `P = +3.0 D` (`f = +33.3 cm`).',
                  fullSolution:
                    '1. Given: `u = −25 cm`, `v = −1 m = −100 cm` [1M]\n2. `1/f = 1/(−100) − 1/(−25) = −1/100 + 4/100 = +3/100 ⇒ f = +33.3 cm = +1/3 m` [1M]\n3. `P = 1/f(m) = 1/(+1/3) = +3.0 D` (positive sign ⇒ **convex lens**) [1M].',
                  sillyTrapNote: 'Mixing metres (`−1`) and centimetres (`−25`) in the same equation gives `−1 − (−1/25)` — keep BOTH in `cm` first!',
                },
                {
                  id: 'phy10-p3',
                  numberLabel: 'Eye 10.3',
                  marks: 2,
                  timeMinutes: 3,
                  tag: 'Reverse Power Lookup',
                  question:
                    'A student sitting on the last bench cannot read the blackboard clearly and is prescribed spectacles of power `−2.5 D`. Name the eye defect and calculate the far point of her defective eye.',
                  copyCheck: 'Negative power `P = −2.5 D` ⇒ Concave lens ⇒ **Myopia**.',
                  step1Setup: '`f = 1/P = 1/(−2.5) = −0.4 m = −40 cm`.',
                  midwayCheckpoint: 'For `u = −∞`, `1/v = 1/f ⇒ v = −40 cm`.',
                  finalAnswer: 'Defect: **Myopia**; Far point = `40 cm` in front of the eye.',
                  fullSolution:
                    '1. Negative power (`−2.5 D`) indicates a **concave lens**, so the defect is **Myopia** [1M]\n2. `f = 1/P = 1/(−2.5) = −0.40 m = −40 cm`. Since distant objects (`u = −∞`) form images at `v = f`, her far point is `40 cm` [1M].',
                  sillyTrapNote: 'Saying "Hypermetropia" for `−2.5 D` confuses concave (`−`) with convex (`+`)!',
                },
                {
                  id: 'phy10-p4',
                  numberLabel: 'Eye 10.4',
                  marks: 3,
                  timeMinutes: 3,
                  tag: 'NCERT Presbyopia Bifocal',
                  question:
                    'A person needs a lens of power `−5.5 dioptres` for correcting his distant vision. For correcting his near vision he needs a lens of power `+1.5 dioptre`. What is the focal length of the lens required for correcting (i) distant vision, and (ii) near vision?',
                  copyCheck: 'Use `f(cm) = 100 / P` (or `f(m) = 1 / P`) separately for both parts.',
                  step1Setup: '(i) `f₁ = 1 / (−5.5) m`; (ii) `f₂ = 1 / (+1.5) m`.',
                  midwayCheckpoint: '`f₁ = −0.182 m`; `f₂ = +0.667 m`.',
                  finalAnswer: '(i) `f₁ = −18.2 cm` (`−0.182 m`, Concave); (ii) `f₂ = +66.7 cm` (`+0.667 m`, Convex).',
                  fullSolution:
                    '1. Distant vision: `P₁ = −5.5 D ⇒ f₁ = 1/(−5.5) = −0.182 m = −18.2 cm` (concave lens) [1.5M]\n2. Near vision: `P₂ = +1.5 D ⇒ f₂ = 1/(+1.5) = +0.667 m = +66.7 cm` (convex lens) [1.5M].',
                  sillyTrapNote: 'Adding `−5.5 + 1.5` together — bifocal sections operate independently (upper vs lower), NOT in contact!',
                },
              ],
            },
          ],
        },
        {
          id: 'phy10-defects-qa',
          title: '5. CBSE Board Exam Q&As (Eye & Defects)',
          blocks: [
            {
              type: 'qa',
              marks: 2,
              tag: 'NCERT',
              question: 'Why is a normal eye not able to see clearly the objects placed closer than `25 cm`?',
              answer:
                'To focus objects closer than `25 cm` on the retina, the crystalline eye lens needs an even shorter focal length, which requires the **ciliary muscles** to contract further. However, ciliary muscles cannot contract beyond a certain elastic limit, so the focal length cannot be decreased below that minimum value.',
              markingTip: 'Key phrase required by CBSE marking scheme: **"ciliary muscles cannot be contracted beyond a certain limit"**.',
            },
            {
              type: 'qa',
              marks: 2,
              tag: 'NCERT',
              question: 'What happens to the image distance in the eye when we increase the distance of an object from the eye?',
              answer:
                'The **image distance remains unchanged (constant)** — it stays fixed equal to the distance between the eye lens and the **retina** (~`2.3 cm`). Only the **focal length** of the eye lens adjusts (increases) via relaxation of the ciliary muscles.',
              markingTip: 'Classic 1M/2M trap! Students wrongly answer "image distance increases" — the retina doesn’t move!',
            },
          ],
        },
      ],
    },
    {
      id: 'phy10-prism-rainbow-scattering',
      slug: 'phy10-prism-rainbow-scattering',
      title: 'Prism Dispersion, Rainbow, Atmospheric Refraction & Tyndall Scattering',
      subtitle:
        'Prism Deviation ∠D, VIBGYOR Dispersion & Recombination, 3-Step Raindrop Rainbow, Star Twinkling vs Planets, 4-Min Extra Daylight & Blue Sky / Red Signals',
      estimatedMinutes: 35,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT Class 10 Science — Chapter 10 (Sections 10.3 – 10.6)',
      learningObjectives: [
        'Trace refraction through a triangular glass prism labelling ∠i, ∠r, ∠e, ∠A, and angle of deviation ∠D.',
        'Explain why violet bends most and red bends least, and how Newton’s inverted second prism recombines the spectrum into white light.',
        'Describe rainbow formation in 3 exact NCERT steps (refraction + dispersion → internal reflection → refraction).',
        'Explain twinkling of stars vs steady planets, 2-min advance sunrise & delayed sunset, Tyndall effect, blue sky, and red danger signals.',
      ],
      keywords: [
        'Angle of deviation',
        'Dispersion of light',
        'VIBGYOR',
        'Rainbow formation',
        'Atmospheric refraction',
        'Tyndall effect',
        'Scattering of light',
      ],
      sections: [
        {
          id: 'phy10-prism-dispersion',
          title: '1. Glass Prism, VIBGYOR Dispersion, Newton’s Recombination & Rainbow',
          blocks: [
            {
              type: 'quick-summary',
              title: '60-Second Ch 10 Optical Phenomena Snapshot',
              bullets: [
                '**Prism vs Slab:** Unlike a rectangular glass slab (parallel faces → emergent ray parallel), a triangular glass prism has **two non-parallel inclined faces** making angle `∠A`, so the emergent ray bends toward the **base** by an **angle of deviation `∠D`** (`∠i + ∠e = ∠A + ∠D`).',
                '**Dispersion (VIBGYOR):** White light splits into 7 colours because different wavelengths travel at **different speeds in glass**. **Violet** (shortest `λ`) slows down most → **bends MOST**; **Red** (longest `λ`) slows down least → **bends LEAST**.',
                '**Newton’s Recombination:** Placing an identical **inverted prism `P₂`** behind upright prism `P₁` recombines the 7 colours back into white light (proving sunlight contains 7 colours, prisms don’t "create" colours).',
                '**Rainbow (Always Opposite the Sun):** Tiny raindrops act as prisms in **3 steps**: (1) **Refraction + Dispersion** on entry → (2) **Internal Reflection** at rear inner wall → (3) **Refraction** on exit toward observer.',
              ],
            },
          ],
        },
        {
          id: 'phy10-prism-visual-atlas',
          title: '2. Interactive Prism, Rainbow & Atmospheric Refraction Atlas',
          blocks: [
            {
              type: 'visual-diagram',
              diagramId: 'prism-rainbow-scattering-diagrams',
              title: 'Prism Deviation, Newton Twin Prisms, 3-Step Rainbow & Atmospheric Refraction',
              caption: 'Study all four high-weightage CBSE ray diagrams side-by-side.',
            },
          ],
        },
        {
          id: 'phy10-atmosphere-scattering',
          title: '3. Atmospheric Refraction, Tyndall Scattering & Deleted Syllabus Flag',
          blocks: [
            {
              type: 'callout',
              variant: 'trap',
              title: 'Rationalized CBSE 2026–27 Alert — DELETED Topic Flag!',
              body: 'The **detailed derivation / section on "Colour of the Sun at Sunrise and Sunset"** via scattering has been **DELETED** from rationalized NCERT Ch 10! Focus instead on:\n• **Atmospheric Refraction** → Twinkling of stars, why planets don’t twinkle, and **Advance Sunrise (2 min) + Delayed Sunset (2 min) = 4 min extra daylight**.\n• **Tyndall Effect & Scattering** → Clear sky appears blue, astronauts see black sky, and danger signals are red.',
            },
            {
              type: 'table',
              caption: 'High-Frequency CBSE Reasoning Matrix (Atmospheric Refraction & Scattering)',
              headers: ['Phenomenon', 'Physical Principle', 'Full-Marks CBSE Keyword Chain'],
              rows: [
                [
                  '**Twinkling of Stars**',
                  'Atmospheric Refraction',
                  'Star = distant **point-sized source** → continuous refraction through turbulent air layers of fluctuating refractive index → apparent star position & light intensity flicker.',
                ],
                [
                  '**Planets Do Not Twinkle**',
                  'Atmospheric Refraction',
                  'Planets are much closer → **extended source** (collection of a large number of point-sized sources) → total variation in light from all points **averages out to zero**.',
                ],
                [
                  '**Advance Sunrise & Delayed Sunset**',
                  'Atmospheric Refraction',
                  'Sunrays bend **towards normal** entering denser layers → apparent position appears slightly **above horizon** (`+2 min` early sunrise, `+2 min` late sunset → **4 min extra**).',
                ],
                [
                  '**Blue Sky (Black in Space)**',
                  'Scattering (Tyndall)',
                  'Fine air particles (`< λ`) scatter **shorter blue wavelengths** much more strongly than red. In space, there is **no atmosphere**, so zero scattering → sky looks **black/dark**.',
                ],
                [
                  '**Red Danger Signals**',
                  'Scattering of Light',
                  'Red has the **longest wavelength**, so it is **least scattered** by fog, smoke, or dust — stays sharp & visible from a great distance.',
                ],
              ],
            },
          ],
        },
        {
          id: 'phy10-prism-qa',
          title: '4. CBSE Board Exam Q&As (Ch 10 Optical Phenomena)',
          blocks: [
            {
              type: 'qa',
              marks: 3,
              tag: 'NCERT',
              question: 'Explain why the planets do not twinkle, whereas stars twinkle on a clear night.',
              answer:
                '• **Stars** are so far away that they behave as **point-sized sources** of light. As starlight passes through continuously changing refractive index layers of Earth’s atmosphere, the path and amount of light entering our eye fluctuate randomly, making the star appear to twinkle.\n• **Planets** are much closer to Earth and appear as **extended sources** (equivalent to a collection of a large number of point-sized sources). The fluctuations in light from all individual point-sized sources **average out to zero**, so planets shine steadily without twinkling.',
              markingTip: '1.5M for star ("point-sized source" + fluctuating atmospheric refraction) + 1.5M for planet ("extended source / collection of point sources" + "averages out to zero").',
            },
            {
              type: 'qa',
              marks: 2,
              tag: 'CBSE Board Pattern',
              question: 'Why does the sky appear dark instead of blue to an astronaut in outer space?',
              answer:
                'In outer space, there is **no atmosphere** (no air molecules or colloidal dust particles) to scatter sunlight. Since no scattered light reaches the astronaut’s eyes from the surrounding sky, the sky appears dark/black.',
              markingTip: 'Direct 2-word trigger: **"absence of atmosphere"** → **"no scattering of sunlight"**.',
            },
          ],
        },
      ],
    },
  ],
};
