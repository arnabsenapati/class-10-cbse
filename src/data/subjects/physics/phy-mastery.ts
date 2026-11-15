import { Topic } from '../../../types/curriculum';

export const topicPhysicsMastery: Topic = {
  id: 'phy-topic-5',
  slug: 'phy-board-mastery',
  order: 5,
  title: 'Physics Board Mastery (25 Marks)',
  description:
    'Complete 25-Mark SI Unit & Formula Vault, Mirror vs Lens vs Defect Sign Master Matrix, Top 10 Physics Silly Slips, Deleted-Topic Safety Checklist & 48-Q Board Exam Quiz Arena.',
  ncertChapter: 'Physics Board Mastery (Ch 9–12 — 25 Marks)',
  subtopics: [
    {
      id: 'phy-formulas-traps-and-quiz',
      slug: 'phy-formulas-traps-and-quiz',
      title: '25-Mark Formula Vault, Sign Master Matrix & 48-Q Quiz Arena',
      subtitle:
        'Every Formula, SI Unit & Sign Convention Across NCERT Ch 9–12, Top 10 Exam-Hall Slip Prevention & Full 48-Question Offline Quiz Arena',
      estimatedMinutes: 50,
      difficulty: 'Board Mastery',
      ncertSection: 'CBSE Class 10 Science (Code 086) — Unit III & Unit IV Physics (25 Marks)',
      learningObjectives: [
        'Recall every formula and SI unit across Ch 9 (Light), Ch 10 (Human Eye), Ch 11 (Electricity), and Ch 12 (Magnetism) under exam time pressure.',
        'Cross-check every numerical sign using the Mirror vs Lens vs Defect Sign Master Matrix.',
        'Avoid all 10 highest-frequency CBSE Physics silly slips (V–I vs I–V slope, 4R wire stretch, 1/R_p invert, electron vs I, Dioptre cm→m).',
        'Score 90%+ in the 48-question CBSE Physics Quiz Arena covering MCQs, Assertion–Reason, and Case-Based questions.',
      ],
      keywords: [
        'CBSE Science Code 086',
        '25 marks physics',
        'SI units vault',
        'Sign convention matrix',
        'Physics silly mistakes',
        'Physics quiz arena',
      ],
      sections: [
        {
          id: 'phy-si-unit-formula-vault',
          title: '1. Complete 25-Mark SI Unit & Formula Vault (Ch 9–12)',
          blocks: [
            {
              type: 'quick-summary',
              title: 'CBSE Class 10 Science (086) Physics Weightage — 25 / 80 Marks',
              bullets: [
                '**Unit III — Natural Phenomena (`12 Marks`):** Ch 9 Light (Reflection & Refraction) + Ch 10 Human Eye & Colourful World.',
                '**Unit IV — Effects of Current (`13 Marks`):** Ch 11 Electricity + Ch 12 Magnetic Effects of Electric Current.',
                '**Exam-Hall Golden Rule:** Always write **Given (with signs & SI conversions) → Formula → Substitution → Final Answer with SI Unit**! CBSE cuts `½` to `1` full mark if the SI unit (`m, cm, D, C, A, V, Ω, Ω·m, W, J, kWh`) is missing!',
              ],
            },
            {
              type: 'table',
              caption: 'Master Physics Formula & SI Unit Sheet (Ch 9–12)',
              headers: ['Chapter & Quantity', 'Exact Formula', 'SI Unit & Value Key'],
              rows: [
                ['**Ch 9:** Radius & Focal Length', '`R = 2f` (`f = R/2`)', '`m` or `cm` (same sign as mirror/lens `f`)'],
                ['**Ch 9:** Mirror Formula & Magnification', '`1/v + 1/u = 1/f` | `m = h\'/h = −v/u`', '`m` is unitless (dimensionless ratio)'],
                ['**Ch 9:** Snell’s Law & Refractive Index', '`sin i / sin r = n₂₁ = n₂/n₁ = v₁/v₂` | `n = c / v`', '`n` is unitless (`n ≥ 1` for vacuum/air reference; `c = 3×10⁸ m/s`)'],
                ['**Ch 9:** Lens Formula & Magnification', '`1/v − 1/u = 1/f` | `m = h\'/h = +v/u`', '`m < 0` ⇒ Real & Inverted; `m > 0` ⇒ Virtual & Erect'],
                ['**Ch 9–10:** Power of Lens & Combination', '`P = 1 / f(m) = 100 / f(cm)` | `P = P₁ + P₂`', '**Dioptre (`D`)** (`1 D = 1 m⁻¹`). MUST convert `f` to metres!'],
                ['**Ch 11:** Charge & Electric Current', '`Q = n·e` (`e = 1.6×10⁻¹⁹ C`) | `I = Q / t`', 'Charge: **Coulomb (`C`)**; Current: **Ampere (`A`)** (`1 C/s`)'],
                ['**Ch 11:** Potential Difference & Ohm’s Law', '`V = W / Q` | `V = I·R`', 'Potential: **Volt (`V`)** (`1 J/C`); Resistance: **Ohm (`Ω`)** (`1 V/A`)'],
                ['**Ch 11:** Resistance & Resistivity', '`R = ρ · L / A` | `ρ = R·A / L`', '`ρ`: **Ohm-metre (`Ω·m`)** (depends ONLY on material & temp!)'],
                ['**Ch 11:** Series & Parallel Combinations', '`R_s = R₁+R₂+R₃` | `1/R_p = 1/R₁+1/R₂+1/R₃`', 'Series: `I` same; Parallel: `V` same'],
                ['**Ch 11:** Joule Heat, Power & Commercial Energy', '`H = I²Rt = VIt = V²t/R` | `P = VI = I²R = V²/R`', 'Heat: **Joule (`J`)**; Power: **Watt (`W`)**; `1 kWh = 3.6×10⁶ J`'],
                ['**Ch 12:** Wire Field & India Domestic AC', '`B ∝ I / r` (straight wire) | `220 V, 50 Hz`', 'AC reverses direction `100` times/sec (`5A` & `15A` parallel circuits)'],
              ],
            },
          ],
        },
        {
          id: 'phy-sign-master-matrix',
          title: '2. Mirror vs Lens vs Eye-Defect Sign Master Matrix',
          blocks: [
            {
              type: 'table',
              caption: 'Zero-Confusion New-Cartesian Sign Master Matrix',
              headers: ['Optical Device / Defect', 'Formula Used', 'Sign of `f` / `P`', 'Sign of `u`, `v`, `m`'],
              rows: [
                [
                  '**Concave Mirror**',
                  '`1/v + 1/u = 1/f` | `m = −v/u`',
                  '`f < 0` (**`−`**)',
                  '`u < 0` always | `v < 0` (Real, `m < 0`) EXCEPT inside `F` (`v > 0`, Virtual, `m > +1`)',
                ],
                [
                  '**Convex Mirror**',
                  '`1/v + 1/u = 1/f` | `m = −v/u`',
                  '`f > 0` (**`+`**)',
                  '`u < 0` always | `v > 0` ALWAYS (Virtual, `0 < m < +1`)',
                ],
                [
                  '**Convex Lens**',
                  '`1/v − 1/u = 1/f` | `m = +v/u`',
                  '`f > 0` (**`+`**), `P > 0`',
                  '`u < 0` always | `v > 0` (Real, `m < 0`) EXCEPT inside `F₁` (`v < 0`, Virtual, `m > +1`)',
                ],
                [
                  '**Concave Lens**',
                  '`1/v − 1/u = 1/f` | `m = +v/u`',
                  '`f < 0` (**`−`**), `P < 0`',
                  '`u < 0` always | `v < 0` ALWAYS (Virtual, `0 < m < +1`)',
                ],
                [
                  '**Myopia Fix (Concave)**',
                  '`1/f = 1/v − 1/u`',
                  '`f < 0` (**`−`**), `P < 0`',
                  '`u = −∞`, `v = −(Far Point)` ⇒ `f = −(Far Point)`',
                ],
                [
                  '**Hypermetropia Fix (Convex)**',
                  '`1/f = 1/v − 1/u`',
                  '`f > 0` (**`+`**), `P > 0`',
                  '`u = −25 cm`, `v = −(Near Point)` (`1/f` turns positive `+`)',
                ],
              ],
            },
          ],
        },
        {
          id: 'phy-top-10-silly-slips',
          title: '3. Top 10 Class 10 Physics Silly Slips & Rationalized Syllabus Check',
          blocks: [
            {
              type: 'callout',
              variant: 'trap',
              title: 'Strict Rationalized CBSE 2026–27 Exclusions (Do NOT Study These)',
              body: 'Deleted from Class 10 Physics Board Syllabus:\n1. **Ch 10:** Detailed "Colour of the Sun at Sunrise and Sunset" scattering derivation (note: 2-min Advance Sunrise & Delayed Sunset via *Atmospheric Refraction* IS still in syllabus!).\n2. **Ch 12:** **Electric Motor**, **Electromagnetic Induction (Faraday’s experiments)**, **Fleming’s Right-Hand Rule**, and **Electric Generator (AC/DC)**.',
            },
            {
              type: 'key-points',
              title: 'Top 10 Physics Silly Slips to Audit Before Turning In Your Paper',
              items: [
                '**1. Mirror vs Lens `+`/`−` swap:** Mirror has `+` in `1/v + 1/u = 1/f` and `−` in `m = −v/u`; Lens has `−` in `1/v − 1/u = 1/f` and `+` in `m = +v/u`.',
                '**2. "Real & 3× Magnified":** Real images are inverted, so **`m = −3`**, NOT `+3`!',
                '**3. Missing arrows in Ray Diagrams:** CBSE examiners deduct `½M` to `1M` immediately if incident, reflected, or refracted rays lack directional arrowheads.',
                '**4. Dioptre cm trap:** Never plug `f` in cm directly into `P = 1/f`; ALWAYS use `P = 100 / f(cm)`!',
                '**5. Hypermetropia `u` vs `v`:** Book sits at `u = −25 cm`; virtual image goes at eye’s near point `v = −d_near`.',
                '**6. `V–I` vs `I–V` Graph Slope Trap:** Check the vertical axis! If `I` is on the y-axis, slope `= 1/R` (flatter line = higher resistance)!',
                '**7. Stretching vs Folding a Wire:** Stretching to `2L` (volume constant) halves `A` ⇒ **`4R`**; folding in half (`L/2`, `2A`) ⇒ **`R/4`**; Resistivity `ρ` NEVER changes!',
                '**8. Forgetting to flip `1/R_p`:** Always take the reciprocal at the end (`1/R_p = 3/6 ⇒ R_p = 2 Ω`, never `0.5 Ω`!).',
                '**9. Bulb Rating at Half Voltage:** `220 V, 100 W` bulb on `110 V` uses `P ∝ V²` ⇒ `100 / 4 = 25 W`, NOT `50 W`!',
                '**10. Electron Beam in Fleming’s Left-Hand Rule:** Conventional current `I` is **OPPOSITE** to electron (`e⁻`) motion, whereas `I` is in the **SAME** direction as proton/alpha (`α²⁺`) motion! Also Fuse & Switch ALWAYS sit on the **Live (Red)** wire.',
              ],
            },
          ],
        },
        {
          id: 'physics-quiz-section',
          title: '4. Physics 48-Q Board Exam Quiz Arena (Ch 9–12)',
          blocks: [
            {
              type: 'paragraph',
              text: 'Test your 25-Mark CBSE readiness offline across all 4 rationalized Physics chapters (`12` questions per chapter + mastery audits): MCQs, Assertion–Reason traps, and Case-Based competency drills.',
            },
            {
              type: 'lab',
              labId: 'physics-quiz-arena',
              title: 'Physics 48-Q Board Exam Quiz Arena',
              caption: 'Filter by chapter or attempt full 48-question Mixed Physics Board Sprint offline.',
            },
          ],
        },
      ],
    },
  ],
};
