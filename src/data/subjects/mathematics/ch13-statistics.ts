import { Subtopic } from '../../../types/curriculum';

export const ch13Statistics: Subtopic = {
  id: 'math-ch13-statistics',
  slug: 'ch13-statistics',
  title: 'Ch 13: Statistics',
  subtitle:
    'Mean (Direct, Assumed Mean & Step-Deviation), Mode, Median, Inclusive-Class 0.5 Adjustment, Missing (x, y) Brackets & Empirical Rule',
  estimatedMinutes: 55,
  difficulty: 'Board Mastery',
  ncertSection: 'CBSE Class 10 Mathematics — Chapter 13 (Rationalized)',
  learningObjectives: [
    'Choose Direct, Assumed Mean (`a + Σfᵢdᵢ/Σfᵢ`), or Step-Deviation (`a + h Σfᵢuᵢ/Σfᵢ`) smartly to keep numbers tiny and prevent carry errors.',
    'Keep `[n/2 − (cf)]` inside protective brackets so subtraction distributes accurately when solving missing frequency `(x, y)` problems.',
    'Convert discontinuous classes (`20–29, 30–39`) by `±0.5` BEFORE identifying `l` and class width `h`, and convert "Less Than" tables cleanly into class intervals.',
  ],
  keywords: [
    'Mean of grouped data',
    'Assumed mean method',
    'Step deviation method',
    'Mode formula',
    'Median missing frequency',
    'Empirical relationship',
  ],
  sections: [
    {
      id: 'ch13-formulas-scope',
      title: '1. Formula Vault & Rationalized Syllabus Scope (Ch 13)',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Ch 13 Exam Glance',
          bullets: [
            '**Direct Mean:** `x̄ = (Σfᵢxᵢ) / (Σfᵢ)`, where class mark **`xᵢ = (Lower Limit + Upper Limit) / 2`**.',
            '**Assumed Mean:** `x̄ = a + (Σfᵢdᵢ) / (Σfᵢ)` (`dᵢ = xᵢ − a`). **Step-Deviation:** `x̄ = a + h × (Σfᵢuᵢ) / (Σfᵢ)` (`uᵢ = (xᵢ − a)/h`, equal `h`).',
            '**Mode:** `Mode = l + [(f₁ − f₀) / (2f₁ − f₀ − f₂)] × h`, where `f₁` = max frequency, `f₀` = preceding, `f₂` = succeeding.',
            '**Median:** `Median = l + [(n/2 − cf) / f] × h`, where **`cf`** is the cumulative frequency of the class **PRECEDING** the median class!',
            '**Empirical Formula:** **`3 Median = Mode + 2 Mean`** ("Median leads with **3**, Mode keeps **1**, Mean gets **2**").',
          ],
        },
        {
          type: 'table',
          caption: 'Ch 13 Row-Lock Check Before Plugging Any Value Into a Formula',
          headers: ['Measure', 'How to Lock the Target Row', 'Deadliest Trap to Shield'],
          rows: [
            ['**Mean**', 'Build `xᵢ = mid-point` first; verify `a` aligns with `dᵢ = 0`', 'Writing upper limit or class size instead of class mark `xᵢ`'],
            ['**Mode**', 'Box highest `fᵢ` row → label `f₀` (above), `f₁` (box), `f₂` (below)', 'Writing `f₁ − f₀ − f₂` instead of **`2f₁ − f₀ − f₂`** in denominator!'],
            ['**Median**', 'Find smallest `cf ≥ n/2` → circle **`f`** IN that row and **`cf`** ONE ROW ABOVE', 'Using the median class’s own `cf` instead of preceding row `cf`!'],
          ],
        },
        {
          type: 'callout',
          variant: 'trap',
          title: 'Rationalized Syllabus Check — Ogives Deleted (Tables Stay!)',
          body: 'CBSE **deleted** **Cumulative Frequency Curves (Less-than & More-than Ogive graphs)** from rationalized **Ch 13**. However, **"Less than / Below X"** frequency tables converted to regular `fᵢ` tables for algebraic Median calculation are STILL high-weight 5-mark questions!',
        },
        {
          type: 'visual-diagram',
          diagramId: 'statistics-mean-median-mode-map',
          title: 'Table Row-Locking Guide: Mode (f₀, f₁, f₂) vs Median (cf vs f)',
          caption: 'Always circle `f₀, f₁, f₂` for Mode and underline preceding `cf` vs current `f` inside your table.',
        },
      ],
    },
    {
      id: 'ch13-notebook-mistakes',
      title: '2. Silly-Mistake Notebook Warnings (Ch 13)',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Sneha',
          title: 'Dropping Brackets Around (5 + x) in Missing-Frequency Median',
          wrongWork: 'n/2 = 30, cf = 5 + x → 30 − 5 + x = 25 + x → 8.5 = (25 + x)/2 → x = −8?!',
          teacherFix: 'PROTECT WITH BRACKETS: 30 − (5 + x) = 30 − 5 − x = 25 − x → 17 = 25 − x → x = 8!',
          whyWrong:
            'When `cf = 5 + x`, forgetting brackets flips `+x` instead of `−x`! If a frequency ever comes out negative, you dropped a minus bracket!',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Vivek',
          title: 'Taking Median Class’s Own cf Instead of PRECEDING Class cf',
          wrongWork: 'n/2 = 30, row 40–50 has f = 18, cf = 44 → used cf = 44 → 30 − 44 = negative!',
          teacherFix: 'f = 18 comes FROM the 40–50 median class, whereas cf = 26 comes from ONE ROW ABOVE (30–40)!',
          whyWrong:
            'Look at `(n/2 − cf)`: `n/2` must ALWAYS be `≥ cf` (so numerator is `≥ 0`)! If `n/2 − cf` is negative, you accidentally picked the median row’s own `cf`.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Tara',
          title: 'Forgetting h Changes from 9 to 10 in Discontinuous Classes',
          wrongWork: 'Classes 20–29, 30–39, 40–49 → took l = 40 and h = 49 − 40 = 9',
          teacherFix: 'Adjust by ±0.5 FIRST: 39.5–49.5 ⇒ l = 39.5 and true class width h = 49.5 − 39.5 = 10!',
          whyWrong:
            'Inclusive gaps (`29` to `30`) mean each boundary shifts `0.5` outward, adding `0.5 + 0.5 = +1` to `h` and lowering `l` by `0.5`.',
        },
      ],
    },
    {
      id: 'ch13-hand-practice',
      title: '3. Screen-to-Notebook Hand-Practice Workout (Ch 13)',
      blocks: [
        {
          type: 'hand-practice',
          title: 'Ch 13 Graded Notebook Drill (Standard 041)',
          subtitle: 'Write the blank formula FIRST, draw arrows inside the table, and check `n = Σfᵢ`.',
          problems: [
            {
              id: 'm13-p1',
              numberLabel: 'Drill 13.1',
              marks: 2,
              timeMinutes: 2,
              tag: 'Empirical Relationship',
              question:
                '(a) Find the **Median** of a distribution whose Mode is **45** and Mean is **30**.\n(b) Find the **Mode** of another dataset whose Mean is **27** and Median is **33**.',
              copyCheck: 'Formula: **`3 Median = Mode + 2 Mean`** — never `3 Mean`!',
              step1Setup: '(a) Plug Mode and Mean; (b) Compute `3(33) − 2(27)`.',
              midwayCheckpoint: '(a) `3 Median = 45 + 60 = 105`; (b) `99 = Mode + 54`.',
              finalAnswer: '(a) `Median = 35`; (b) `Mode = 45`.',
              fullSolution:
                '(a) `3 Median = 45 + 2(30) = 105 ⇒ Median = 105/3 = 35`. [1M]\n(b) `3(33) = Mode + 2(27) ⇒ 99 = Mode + 54 ⇒ Mode = 45`. [1M]',
              sillyTrapNote: 'Double check: `3×35 = 105` vs `45 + 60 = 105`, and `3×33 = 99` vs `45 + 54 = 99`!',
            },
            {
              id: 'm13-p2',
              numberLabel: 'Drill 13.2',
              marks: 3,
              timeMinutes: 5,
              tag: 'Missing Frequency in Mean',
              question:
                'The **mean** of the following distribution is **20**. Find the missing frequency **`p`**:\n`10–14`: `4` | `14–18`: `7` | `18–22`: `10` | `22–26`: `p` | `26–30`: `5`.',
              copyCheck: 'Do NOT assume `a = 24` (`xᵢ` of `p`) unless you want extra algebra; choose **`a = 20`** (`xᵢ` of `18–22`) or use Direct Method carefully!',
              step1Setup: 'Compute `xᵢ = 12, 16, 20, 24, 28`. With `a = 20`: `dᵢ = −8, −4, 0, +4, +8`.',
              midwayCheckpoint: '`Σfᵢ = 26 + p`; `Σfᵢdᵢ = −32 − 28 + 0 + 4p + 40 = 4p − 20`.',
              finalAnswer: '`20 + (4p − 20)/(26 + p) = 20 ⇒ 4p − 20 = 0 ⇒ p = 5`.',
              fullSolution:
                '1. `xᵢ = 12, 16, 20, 24, 28`; `Σfᵢ = 4 + 7 + 10 + p + 5 = 26 + p`. [1M]\n2. Choosing `a = 20`, `fᵢdᵢ` values are `−32, −28, 0, 4p, +40` ⇒ `Σfᵢdᵢ = 4p − 20`. [1M]\n3. `Mean = 20 + (4p − 20)/(26 + p) = 20 ⇒ 4p − 20 = 0 ⇒ p = 5`. [1M]',
              sillyTrapNote: 'Adding signed numbers cleanly: `−32 − 28 = −60`, then `−60 + 40 = −20`!',
            },
            {
              id: 'm13-p3',
              numberLabel: 'Drill 13.3',
              marks: 3,
              timeMinutes: 4,
              tag: 'Mode of Grouped Data',
              question:
                'Find the **Mode** of the waiting times (in minutes) recorded at a clinic:\n`0–10`: `5` | `10–20`: `9` | `20–30`: `17` | `30–40`: `20` | `40–50`: `11` | `50–60`: `6`.',
              copyCheck: 'Circle highest frequency `20` (`30–40`) → `f₀ = 17`, `f₁ = 20`, `f₂ = 11`, `l = 30`, `h = 10`.',
              step1Setup: 'Write `Mode = l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h` BEFORE substituting.',
              midwayCheckpoint: '`Mode = 30 + [(20 − 17) / (40 − 17 − 11)] × 10 = 30 + (3/12) × 10`.',
              finalAnswer: '`Mode = 30 + 2.5 = 32.5 minutes`.',
              fullSolution:
                '1. Highest frequency is `20`, so modal class is `30–40`: `l = 30`, `h = 10`, `f₁ = 20`, `f₀ = 17`, `f₂ = 11`. [1M]\n2. `Mode = 30 + [(20 − 17)/(2×20 − 17 − 11)] × 10`. [1M]\n3. `= 30 + (3/12) × 10 = 30 + 2.5 = 32.5 minutes`. [1M]',
              sillyTrapNote: 'Denominator `f₁ − f₀ − f₂ = 20 − 17 − 11 = −8` happens if you drop the **`2`** in `2f₁`!',
            },
            {
              id: 'm13-p4',
              numberLabel: 'Drill 13.4',
              marks: 3,
              timeMinutes: 5,
              tag: 'Missing Frequency From Known Mode',
              question:
                'If the **Mode** of the following distribution is **55**, determine the missing frequency **`p`**:\n`0–15`: `10` | `15–30`: `7` | `30–45`: `p` | `45–60`: `15` | `60–75`: `10` | `75–90`: `12`.',
              copyCheck: '`Mode = 55` lies in `45–60` ⇒ Modal class is `45–60` (`l = 45, h = 15, f₁ = 15, f₀ = p, f₂ = 10`).',
              step1Setup: 'Plug into `55 = 45 + [(15 − p)/(2×15 − p − 10)] × 15`.',
              midwayCheckpoint: '`10 = 15(15 − p) / (20 − p)` → divide by `5`: `2(20 − p) = 3(15 − p)`.',
              finalAnswer: '`40 − 2p = 45 − 3p ⇒ p = 5`.',
              fullSolution:
                '1. Since Mode `= 55 ∈ [45, 60)`, modal class is `45–60` (`l = 45`, `f₁ = 15`, `f₀ = p`, `f₂ = 10`, `h = 15`). [1M]\n2. `55 = 45 + [(15 − p)/(30 − p − 10)] × 15 ⇒ 10 = 15(15 − p)/(20 − p)`. [1M]\n3. `2(20 − p) = 3(15 − p) ⇒ 40 − 2p = 45 − 3p ⇒ p = 5`. [1M]',
              sillyTrapNote: 'Check validity: `p = 5 < 15`, confirming `45–60` truly has the maximum frequency!',
            },
            {
              id: 'm13-p5',
              numberLabel: 'Drill 13.5',
              marks: 3,
              timeMinutes: 5,
              tag: 'Discontinuous Classes (±0.5 Median)',
              question:
                'Compute the **Median** of the following inclusive (discontinuous) grouped data:\n`20–29`: `4` | `30–39`: `7` | `40–49`: `15` | `50–59`: `9` | `60–69`: `5`.',
              copyCheck: 'Make classes continuous FIRST (`−0.5` lower, `+0.5` upper): `19.5–29.5`, `29.5–39.5`, **`39.5–49.5`**... Now **`h = 10`**!',
              step1Setup: 'Total `n = 40 ⇒ n/2 = 20`. Build continuous `cf`: `4, 11, 26, 35, 40`.',
              midwayCheckpoint: 'Median class `= 39.5–49.5` (`l = 39.5`, `cf = 11`, `f = 15`, `h = 10`).',
              finalAnswer: '`Median = 39.5 + [(20 − 11)/15] × 10 = 39.5 + 6 = 45.5`.',
              fullSolution:
                '1. Continuous classes & `cf`: `19.5–29.5 (4, 4)`, `29.5–39.5 (7, 11)`, `39.5–49.5 (15, 26)`, `49.5–59.5 (9, 35)`, `59.5–69.5 (5, 40)`. [1M]\n2. `n/2 = 20 ⇒` median class is `39.5–49.5`: `l = 39.5, cf = 11, f = 15, h = 10`. [1M]\n3. `Median = 39.5 + (9/15) × 10 = 39.5 + 6 = 45.5`. [1M]',
              sillyTrapNote: 'Using unadjusted `l = 40` and `h = 9` gives `45.4` — lose 1M to 1.5M instantly!',
            },
            {
              id: 'm13-p6',
              numberLabel: 'Drill 13.6',
              marks: 5,
              timeMinutes: 7,
              tag: 'Boss 5M: Two Missing Frequencies (x, y)',
              question:
                'If the **median** of the distribution given below (`n = 60`) is **28.5**, find **`x`** and **`y`**:\n`0–10`: `5` | `10–20`: `x` | `20–30`: `20` | `30–40`: `15` | `40–50`: `y` | `50–60`: `5`.',
              copyCheck: '**BRACKET SHIELD:** Preceding `cf` is **`(5 + x)`**. Write `30 − (5 + x)`, NOT `30 − 5 + x`!',
              step1Setup: '(1) Equate sum to `60` (`45 + x + y = 60`). (2) Median `28.5` sits in `20–30` (`l = 20, f = 20, h = 10`).',
              midwayCheckpoint: '`x + y = 15`; `28.5 = 20 + [(30 − (5 + x))/20] × 10 → 8.5 = (25 − x)/2`.',
              finalAnswer: '`x = 8`, `y = 7`.',
              fullSolution:
                '1. `Σfᵢ = 45 + x + y = 60 ⇒ x + y = 15` ...(i). [1M]\n2. Build `cf`: `5`, **`5 + x`**, `25 + x`, `40 + x`, `40 + x + y`, `45 + x + y`. [1M]\n3. Median `= 28.5` lies in `20–30`, so `l = 20`, `f = 20`, **`cf = 5 + x`**, `h = 10`, `n/2 = 30`. [1M]\n4. `28.5 = 20 + [(30 − (5 + x)) / 20] × 10 ⇒ 8.5 = (25 − x)/2 ⇒ 17 = 25 − x ⇒ x = 8`. [1.5M]\n5. From (i): `y = 15 − 8 = 7`. [½M]',
              sillyTrapNote: 'Dropping brackets turns `30 − (5 + x)` into `25 + x = 17 ⇒ x = −8`!',
            },
            {
              id: 'm13-p7',
              numberLabel: 'Drill 13.7',
              marks: 5,
              timeMinutes: 7,
              tag: '"Less Than" Table → Median',
              question:
                'Find the **Median** from the following cumulative distribution:\n`Less than 20`: `3` | `Less than 30`: `11` | `Less than 40`: `26` | `Less than 50`: `44` | `Less than 60`: `56` | `Less than 70`: `60`.',
              copyCheck: 'The numbers `3, 11, 26, 44, 56, 60` are ALREADY `cf`, NOT individual frequencies `fᵢ`! Subtract successive rows to get `fᵢ`.',
              step1Setup: 'Convert to intervals `10–20` up to `60–70` with `fᵢ = cfᵢ − cfᵢ₋₁`. `n = 60 ⇒ n/2 = 30`.',
              midwayCheckpoint: '`fᵢ = 3, 8, 15, 18, 12, 4`. Row `40–50` has `cf = 44 ≥ 30` (`l = 40`, `f = 18`, preceding `cf = 26`, `h = 10`).',
              finalAnswer: '`Median = 40 + [(30 − 26)/18] × 10 = 40 + 20/9 = 42.22`.',
              fullSolution:
                '1. Class intervals & individual frequencies: `10–20 (3)`, `20–30 (8)`, `30–40 (15)`, `40–50 (18)`, `50–60 (12)`, `60–70 (4)`. Total `n = 60`, `n/2 = 30`. [2M]\n2. `cf ≥ 30` first occurs at `40–50` (`cf = 44`), so `l = 40, f = 18, cf = 26, h = 10`. [1.5M]\n3. `Median = 40 + (4/18) × 10 = 40 + 20/9 ≈ 42.22`. [1.5M]',
              sillyTrapNote: 'Treating `3, 11, 26...` directly as `fᵢ` and taking cumulative sums AGAIN!',
            },
            {
              id: 'm13-p8',
              numberLabel: 'Drill 13.8',
              marks: 4,
              timeMinutes: 8,
              tag: 'Section E Case-Based: Mode, Median & Step-Deviation Mean',
              question:
                'Daily revision time (in min) of **40 students** is recorded:\n`20–40`: `6` | `40–60`: `10` | `60–80`: `14` | `80–100`: `6` | `100–120`: `4`.\n(i) Find the **Modal** revision time.\n(ii) Find the **Median** revision time.\n(iii) Find the **Mean** using the Step-Deviation Method (`a = 70`).',
              copyCheck: 'Check `6 + 10 + 14 + 6 + 4 = 40` first (`n/2 = 20`). Class width `h = 20`.',
              step1Setup: '(i) `60–80` max `f = 14`; (ii) `cf = 6, 16, 30, 36, 40` (`cf = 16`); (iii) `uᵢ = −2, −1, 0, +1, +2`.',
              midwayCheckpoint: '(i) `60 + (4/12)×20`; (ii) `60 + (4/14)×20`; (iii) `Σfᵢuᵢ = −12 − 10 + 6 + 8 = −8`.',
              finalAnswer: '(i) Mode `= 66.67 min`; (ii) Median `= 65.71 min`; (iii) Mean `= 66 min`.',
              fullSolution:
                '(i) Modal class `60–80`: `Mode = 60 + [(14 − 10)/(28 − 10 − 6)] × 20 = 60 + 20/3 = 66.67 min`. [1.5M]\n(ii) `n/2 = 20` ⇒ Median class `60–80` (`cf = 16, f = 14`): `Median = 60 + [(20 − 16)/14] × 20 = 60 + 40/7 ≈ 65.71 min`. [1.5M]\n(iii) Class marks `30, 50, 70, 90, 110`; with `a = 70, h = 20`: `uᵢ = −2, −1, 0, 1, 2` ⇒ `Σfᵢuᵢ = −12 − 10 + 0 + 6 + 8 = −8`. `Mean = 70 + 20(−8/40) = 70 − 4 = 66 min`. [1M]',
              sillyTrapNote: 'Notice the empirical cross-check: `3(65.71) = 197.13` stays right near `66.67 + 2(66) = 198.67`!',
            },
          ],
        },
      ],
    },
    {
      id: 'ch13-proofs-checkpoint',
      title: '4. Step-Deviation Precision Drill & Ch 13 Self-Check',
      blocks: [
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE Board Pattern',
          question:
            'State when the **Step-Deviation Method** fails or cannot be applied blindly, and list the exact 3 columns added to a frequency table when finding the **Mean** by Step-Deviation (`uᵢ = (xᵢ − a) / h`).',
          answer:
            '1. **Condition:** Step-Deviation with a single constant `h` requires **equal class widths** across intervals (or `h` chosen as a common factor of every `(xᵢ − a)`). [1M]\n2. **Three columns after `C.I.` and `fᵢ`:**\n  • **Column 3 (`xᵢ`):** Class mark `= (Lower + Upper) / 2`.\n  • **Column 4 (`uᵢ`):** Step deviation `= (xᵢ − a) / h` (note `uᵢ = 0` MUST sit on the row of assumed mean `a`). [1M]\n  • **Column 5 (`fᵢuᵢ`):** Signed product keeping negative signs cleanly aligned before computing `x̄ = a + h × (Σfᵢuᵢ / Σfᵢ)`. [1M]',
          markingTip: 'NEVER forget to multiply `(Σfᵢuᵢ / Σfᵢ)` by **`h`** before adding `a` — omitting `× h` is the top Step-Deviation blunder!',
        },
        {
          type: 'checkpoint',
          prompt:
            'In the Median formula `Median = l + [(n/2 − cf) / f] × h`, which cumulative frequency does **`cf`** stand for?',
          options: [
            { id: 'a', label: 'The cumulative frequency of the median class itself' },
            { id: 'b', label: 'The cumulative frequency of the class immediately PRECEDING the median class' },
            { id: 'c', label: 'The cumulative frequency of the class immediately FOLLOWING the median class' },
            { id: 'd', label: 'The largest frequency `f` in the table' },
          ],
          correctIds: ['b'],
          successMsg:
            'Spot on! **`f`** comes from the median row itself, while **`cf`** comes from the row **immediately ABOVE (preceding)** the median class!',
          hintMsg: 'Check the numerator `(n/2 − cf)`: since `n/2` must be `≥ cf` so the bracket stays non-negative, which `cf` row is strictly smaller than `n/2`?',
        },
      ],
    },
  ],
};
