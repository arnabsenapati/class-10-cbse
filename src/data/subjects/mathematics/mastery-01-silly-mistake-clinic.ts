import { Subtopic } from '../../../types/curriculum';

export const mathMastery01SillyMistakeClinic: Subtopic = {
  id: 'math-mastery-01-clinic',
  slug: 'silly-mistake-surgery-clinic',
  title: 'Silly-Mistake Surgery Clinic (12 Golden Rules + Spot-the-Slip Lab)',
  subtitle:
    'Turn Mid-Way Calculation Blunders Into Zero-Slip Habits: Screen-to-Notebook Line Rules + 24 Interactive Step-by-Step Error Cases',
  estimatedMinutes: 45,
  difficulty: 'Board Mastery',
  ncertSection: 'CBSE Class 10 Mathematics Standard (041) — Anti-Slip Mastery',
  learningObjectives: [
    'Catch mid-way sign flips, missing protective brackets, and fraction/LCM drops BEFORE they ruin an entire 5-mark proof.',
    'Follow the 5-Second Copy-Safe Habit every time you transfer a problem from screen (or question paper) into your physical notebook.',
    'Diagnose wrong intermediate notebook steps across Algebra, Geometry, Trigonometry, Mensuration, and Statistics using interactive surgery drills.',
  ],
  keywords: [
    'Silly mistake',
    'Sign flip',
    'Bracket rule',
    'Diameter vs radius',
    'Notebook discipline',
    'CBSE Maths Standard 041',
  ],
  sections: [
    {
      id: 'clinic-12-golden-rules',
      title: '1. The 12 Golden Anti-Silly-Mistake Notebook Rules',
      blocks: [
        {
          type: 'callout',
          variant: 'tip',
          title: 'Why Smart Students Lose 10–15 Marks in Maths Standard (041)',
          body: 'Almost 70% of lost board marks do NOT come from "not knowing the chapter." They happen in **Lines 3 to 5 on paper**: copying `+3` as `−3`, forgetting `d/2`, dropping brackets around `−(5 + x)`, cancelling across `+` signs, or plugging `cf` from the wrong row. Fixing **how you write** raises your score fastest!',
        },
        {
          type: 'steps',
          title: '12 Non-Negotiable Notebook Rules (Check Every Sum!)',
          items: [
            {
              label: 'Rule 1 — Line-1 Given Box & d → r Conversion',
              detail:
                'Copy `Given:` cleanly into your notebook BEFORE starting step 1. Circle any diameter `d` and immediately write **`r = d/2`** (Ch 10, 11, 12).',
            },
            {
              label: 'Rule 2 — Mandatory Brackets Around Negatives & Binomials',
              detail:
                'NEVER write `−b ± √(b² − 4ac)` unbracketed when `b` or `c` is negative, and NEVER subtract `(x − 3)` or `5 + x` without parentheses: always write `−(x − 3)` and `−(5 + x)`.',
            },
            {
              label: 'Rule 3 — Square Both Sides & Both Factors Cleanly',
              detail:
                '`(2√3)² = 4 × 3 = 12` (NOT `6` and NOT `2×3 = 6`). And `(a + b)² = a² + 2ab + b²` — NEVER `a² + b²`! Protect trig fractions too: `(sin A + cos A)² ≠ sin²A + cos²A`.',
            },
            {
              label: 'Rule 4 — NEVER Cancel Across Plus or Minus Signs',
              detail:
                'You can cancel `(x − 2)` in `3(x − 2) / (x − 2)`, NEVER inside `(3x − 2) / (x − 2)` or `(2 + 4√3) / 2` without factoring EVERY numerator term: `(2(1 + 2√3)) / 2 = 1 + 2√3`.',
            },
            {
              label: 'Rule 5 — Put Denominator 1 Under Every Whole Term Before LCM',
              detail:
                'In rational equations (`1/x − 1/(x − 2) = 3`), write `3/1` explicitly before cross-multiplying, and **never drop `x` roots without checking `x = 0` vs `x ≠ 0`**.',
            },
            {
              label: 'Rule 6 — Divide by HCF/Common Factor BEFORE Multiplying',
              detail:
                'For `(306 × 657)/9` or `(22/7) × 3.5 × 19.5`, simplify fractions FIRST (`34 × 657`, `11 × 19.5`). Keep `π` symbolic until the last step in Volume/Area comparisons!',
            },
            {
              label: 'Rule 7 — Write the Blank Formula on Line 2 First',
              detail:
                'Always write `aₙ = a + (n − 1)d`, `x = [m₁x₂ + m₂x₁] / (m₁ + m₂)`, or `Mode = l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h` empty FIRST, then substitute below it.',
            },
            {
              label: 'Rule 8 — Lock Table Arrows Before Substituting Statistics Numbers',
              detail:
                'In Ch 13, draw an arrow from the modal row (`f₁`) up to `f₀` and down to `f₂`, and circle the **preceding row’s `cf`** separately from the **median row’s `f`**.',
            },
            {
              label: 'Rule 9 — Adjust Inclusive Classes by ±0.5 BEFORE Finding l and h',
              detail:
                'If classes jump `20–29, 30–39`, make them `19.5–29.5, 29.5–39.5` first — this changes BOTH `l` (`−0.5`) AND class width `h` (`9 → 10`)!',
            },
            {
              label: 'Rule 10 — Mark Angles & Right Angles Directly on a Quick Sketch',
              detail:
                'In Ch 6, 7, 9, 10: draw a 5-second rough triangle/circle. Notice vertex order in `△ABC ~ △DEF`, put `90°` at point of contact `P` (not `O`), and keep `angle of depression = alternate interior angle at ground`.',
            },
            {
              label: 'Rule 11 — Sanity Check Domain, Positivity & Quadratic Roots',
              detail:
                'Lengths, speeds, ages, times, number of terms `n` (`n ∈ ℕ`), and frequencies MUST be **positive** (and `n` a positive integer!). Probability ALWAYS satisfies `0 ≤ P(E) ≤ 1`.',
            },
            {
              label: 'Rule 12 — Re-Read "What Was Asked" at the Last Step!',
              detail:
                'Did it ask for **`x`** or **`AB`** (`x + 8`)? **Radius** or **diameter** (`2r`)? **Tower height** (`h`) or **distance** (`x`)? **Minor sector** or **major sector**? Box your final answer WITH **units**!',
            },
          ],
        },
      ],
    },
    {
      id: 'interactive-silly-mistake-clinic',
      title: '2. Interactive Silly-Mistake Surgery Lab (24 Real Student Traps + Twin Drills)',
      blocks: [
        {
          type: 'paragraph',
          text: 'Inspect each worked solution line-by-line just like a CBSE board examiner. Click the **exact line where the silly mistake happens**, uncover why it broke the rest of the sum, and solve the **Twin Notebook Drill** beside it by hand!',
        },
        {
          type: 'lab',
          labId: 'math-silly-mistake-clinic',
          title: 'Interactive Lab: Silly-Mistake Surgery Clinic (All 14 Chapters)',
          caption: 'Filter by mistake type (Sign/Bracket, Fraction/Root, Table/Formula, Geometry/Copy) and cure each habit.',
        },
      ],
    },
  ],
};
