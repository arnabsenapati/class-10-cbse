import { Subtopic } from '../../../types/curriculum';

export const ch14Probability: Subtopic = {
  id: 'math-ch14-probability',
  slug: 'ch14-probability',
  title: 'Ch 14: Probability',
  subtitle:
    'Coins (8 Outcomes), Two Dice (36 Pairs & Non-Double-Counted Tables), 52-Card Deck Anatomy, Leap-Year 53 Sundays & Bag Algebra',
  estimatedMinutes: 45,
  difficulty: 'Board Mastery',
  ncertSection: 'CBSE Class 10 Mathematics — Chapter 14 (Rationalized)',
  learningObjectives: [
    'List complete sample spaces for 3 coins (`8`), 2 dice (`36`), and restricted card/token decks (`b − a + 1` inclusive count) before counting favourable events.',
    'Keep card rules crystal clear (`12` face cards total — Aces are NOT face cards; `26` red, `26` black; `13` per suit) and update BOTH numerator and denominator when a card is set aside or balls are added.',
    'Differentiate "at least (`≥`)" vs "at most (`≤`)", "neither A nor B (`1 − P(A or B)`)" without double-counting overlaps, and leap (`2/7`) vs non-leap (`1/7`) extra days.',
  ],
  keywords: [
    'Classical probability',
    'Complementary event',
    '52 playing cards',
    'Two dice sample space',
    'Leap year 53 Sundays',
    'At least at most coins',
  ],
  sections: [
    {
      id: 'ch14-formulas-scope',
      title: '1. Sample-Space Reference & Card/Dice Anatomy (Ch 14)',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Ch 14 Exam Glance',
          bullets: [
            '**Classical Formula:** `P(E) = (Number of outcomes favourable to E) / (Total number of possible outcomes)`. Always write the **reduced fraction**!',
            '**Probability Bounds:** **`0 ≤ P(E) ≤ 1`**. Never negative (`< 0`), never improper (`> 1` or `> 100%`)!',
            '**Complementary Shield:** **`P(E) + P(not E) = 1`**, so `P(not E) = 1 − P(E)`. Use `1 − P(...)` for **"neither/nor"** and **"at least one"**!',
            '**Inclusive Token Count (`a` to `b`):** **`n(S) = b − a + 1`** (e.g., cards `11` to `60` have `60 − 11 + 1 = 50` cards, NOT `49`!).',
            '**Prime Check:** **`1` is NOT a prime number**, and **`2` IS the only even prime**. On perfect squares, **`1 = 1²` IS a perfect square** if `1` is in the set!',
          ],
        },
        {
          type: 'table',
          caption: 'Ch 14 Standard 52-Card Deck & Multi-Outcome Cheat Sheet (Zero Guessing!)',
          headers: ['Experiment', 'Total `n(S)`', 'Most Miscounted Category'],
          rows: [
            ['**1 Die / 2 Dice**', '`6` / `36`', 'Rows + Cols with at least one `5`: `6 + 6 − 1 = 11` outcomes (NOT `12` — `(5, 5)` sits once!)'],
            ['**2 Coins / 3 Coins**', '`4` / `8`', '`{HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}` — `{TTT}` counts for "at most 1 head"!'],
            ['**52 Playing Cards**', '`52` (`4 × 13`)', '**Face cards = `12`** (`4K + 4Q + 4J`; **Ace is NOT a face card!**). Red Queens = `2`.'],
            ['**Year 53 Sundays**', '`7` days / `7` pairs', 'Non-leap (`365 = 52w+1d`) → **`1/7`**; Leap (`366 = 52w+2d`) → **`2/7`** (`(Sun,Mon), (Sat,Sun)`)'],
          ],
        },
      ],
    },
    {
      id: 'ch14-notebook-mistakes',
      title: '2. Silly-Mistake Notebook Warnings (Ch 14)',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Aarav',
          title: 'Counting Both "5 on Die 1" and "5 on Die 2" as 6 + 6 = 12',
          wrongWork: 'Outcomes without a 5 on either die = 36 − (6 + 6) = 24 → P = 24/36',
          teacherFix: 'Outcome (5, 5) appears ONCE in the 6×6 grid ⇒ Outcomes WITH a 5 = 6 + 6 − 1 = 11 ⇒ Without 5 = 25/36!',
          whyWrong:
            'Counting row 5 (`6` outcomes) plus column 5 (`6` outcomes) counts **`(5, 5)` twice**! Always subtract overlap `1` when counting unions.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Meera',
          title: 'Forgetting New Denominator When Balls Are Added or Card Kept Aside',
          wrongWork: 'Bag has 15 balls (x red). Add 5 red balls → new P(red) = (x + 5)/15',
          teacherFix: 'Adding 5 red balls raises BOTH red count (x + 5) AND total balls (15 + 5 = 20) → P₂ = (x + 5)/20!',
          whyWrong:
            'Adding balls to a bag or setting a drawn card aside changes **total `n(S)`** in the denominator just as much as the numerator!',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Kabir',
          title: 'Treating Aces as Face Cards OR Double-Counting Ace of Spades',
          wrongWork: 'Neither spade nor ace: subtract 13 spades + 4 aces = 17 → 52 − 17 = 35/52',
          teacherFix: 'Face cards = K, Q, J only (12 total). Neither spade nor ace = 52 − (13 spades + 3 remaining aces) = 36/52 = 9/13!',
          whyWrong:
            'The **Ace of Spades** is already inside the `13` spades! Only `3` other Aces remain outside Spades (`52 − 16 = 36`).',
        },
      ],
    },
    {
      id: 'ch14-hand-practice',
      title: '3. Screen-to-Notebook Hand-Practice Workout (Ch 14)',
      blocks: [
        {
          type: 'hand-practice',
          title: 'Ch 14 Graded Notebook Drill (Standard 041)',
          subtitle: 'Write out `n(S)` explicitly and list small outcomes inside `{ ... }` before dividing.',
          problems: [
            {
              id: 'm14-p1',
              numberLabel: 'Drill 14.1',
              marks: 2,
              timeMinutes: 2,
              tag: 'Complement & Valid Bounds',
              question:
                '(i) If the probability of Anya winning a badminton set is **0.62**, find the probability of her losing it.\n(ii) Which of the following CANNOT be the probability of an event, and why: `2/3`, `−0.4`, `15%`, `15/14`, `1.0`?',
              copyCheck: '`P(E) + P(not E) = 1`, and probabilities NEVER go below `0` or above `1` (`Num ≤ Den`).',
              step1Setup: '(i) Compute `1 − 0.62`; (ii) Test each candidate against `0 ≤ P(E) ≤ 1`.',
              midwayCheckpoint: '(i) `1.00 − 0.62 = 0.38`; (ii) Check negative and improper fraction.',
              finalAnswer: '(i) `0.38`; (ii) `−0.4` (`< 0`) and `15/14` (`> 1`) CANNOT be probabilities.',
              fullSolution:
                '(i) `P(lose) = 1 − P(win) = 1 − 0.62 = 0.38`. [1M]\n(ii) For any event `E`, `0 ≤ P(E) ≤ 1`. Thus **`−0.4`** (negative) and **`15/14`** (`> 1`) cannot represent probabilities (`15% = 0.15` and `1.0` are valid!). [1M]',
              sillyTrapNote: 'Saying `15%` or `1.0` is invalid — `1.0` is a **sure event**, completely valid!',
            },
            {
              id: 'm14-p2',
              numberLabel: 'Drill 14.2',
              marks: 3,
              timeMinutes: 4,
              tag: 'Three Coins Sample Space',
              question:
                'Three fair coins are tossed simultaneously. List all **8** outcomes and find the probability of getting:\n(i) **exactly two heads**,\n(ii) **at least two heads**,\n(iii) **at most one head**.',
              copyCheck: 'Write all 8 systematically: `HHH` | `HHT, HTH, THH` | `HTT, THT, TTH` | `TTT`. Check **"at most 1" includes ZERO heads (`TTT`)**!',
              step1Setup: 'Count favourable cases directly from the 8-element sample space.',
              midwayCheckpoint: '(i) `3` outcomes; (ii) `1 + 3 = 4` outcomes; (iii) `3 + 1 = 4` outcomes.',
              finalAnswer: '(i) `3/8`; (ii) `4/8 = 1/2`; (iii) `4/8 = 1/2`.',
              fullSolution:
                '`S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}`, `n(S) = 8`.\n(i) Exactly 2 heads `= {HHT, HTH, THH}` → `3/8`. [1M]\n(ii) At least 2 heads (`2` or `3`) `= {HHH, HHT, HTH, THH}` → `4/8 = 1/2`. [1M]\n(iii) At most 1 head (`0` or `1`) `= {HTT, THT, TTH, TTT}` → `4/8 = 1/2`. [1M]',
              sillyTrapNote: 'Notice "at least 2 heads" and "at most 1 head" are exact complements (`1/2 + 1/2 = 1`)!',
            },
            {
              id: 'm14-p3',
              numberLabel: 'Drill 14.3',
              marks: 3,
              timeMinutes: 5,
              tag: 'Two Dice Pair & Union Trap',
              question:
                'Two different dice are rolled together. Find the probability of getting:\n(i) a **doublet**,\n(ii) a **sum of at least 10**,\n(iii) **`5` does NOT appear on either die**.',
              copyCheck: '`n(S) = 6 × 6 = 36`. Sum `≥ 10` means sums `10, 11, 12`!',
              step1Setup: 'List outcomes for (i) and (ii); for (iii) list row-5 + col-5 carefully without double-counting `(5, 5)`.',
              midwayCheckpoint: '(i) `6` doublets; (ii) `(4,6),(5,5),(5,6),(6,4),(6,5),(6,6)` → `6`; (iii) pairs WITH `5` `= 11`.',
              finalAnswer: '(i) `6/36 = 1/6`; (ii) `6/36 = 1/6`; (iii) `(36 − 11)/36 = 25/36`.',
              fullSolution:
                '`n(S) = 36`.\n(i) Doublets `{(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)}`: `n(E) = 6 ⇒ P = 6/36 = 1/6`. [1M]\n(ii) Sum `≥ 10`: `{(4,6),(5,5),(6,4),(5,6),(6,5),(6,6)}`: `n(E) = 6 ⇒ P = 6/36 = 1/6`. [1M]\n(iii) Pairs containing at least one `5`: `(1,5)..(6,5)` [`6`] and `(5,1)..(5,6)` [`5` new] `= 11`. Thus no `5` appears on either die in `36 − 11 = 25` cases ⇒ `25/36`. [1M]',
              sillyTrapNote: 'Thinking outcomes without `5` is `36 − 12 = 24` ignores `(5, 5)` overlap (`5 × 5 = 25` is an instant cross-check!).',
            },
            {
              id: 'm14-p4',
              numberLabel: 'Drill 14.4',
              marks: 3,
              timeMinutes: 5,
              tag: '52-Card Deck + Removed Card',
              question:
                '**Part A:** One card is drawn from a well-shuffled **52-card** deck. Find probability of getting: (i) a **red king**, (ii) a **face card**, (iii) **neither a spade nor an ace**.\n**Part B:** From 5 spade cards `{10, J, Q, K, A}`, one card is drawn and **kept aside**. If it is the **Queen**, find probability the next card is: (a) an **Ace**, (b) a **Queen**.',
              copyCheck: 'Part A uses `n(S) = 52`; Part B uses **`n(S) = 4`** because Queen was NOT replaced!',
              step1Setup: '(A)(iii) Subtract `13 spades + 3 non-spade aces` from `52`. (B) List remaining 4 cards `{10, J, K, A}`.',
              midwayCheckpoint: '(A) Red kings = `2`, Face = `12`, Neither = `52 − 16 = 36`; (B) `n(S) = 4`.',
              finalAnswer: '(A)(i) `1/26`, (ii) `3/13`, (iii) `9/13`; (B)(a) `1/4`, (b) `0`.',
              fullSolution:
                '**Part A (`n(S) = 52`):** (i) Red kings (Hearts & Diamonds) `= 2/52 = 1/26`. [½M]\n(ii) Face cards (`4K + 4Q + 4J`) `= 12/52 = 3/13`. [½M]\n(iii) Cards that are spade OR ace `= 13 + 3 = 16 ⇒` neither `= 52 − 16 = 36 ⇒ 36/52 = 9/13`. [1M]\n**Part B (`n(S) = 4` remaining: `{10, J, K, A}`):** (a) `P(Ace) = 1/4`; (b) `P(Queen) = 0/4 = 0` (impossible). [1M]',
              sillyTrapNote: 'Counting `16` face cards by including Aces, or forgetting Ace of Spades overlaps in (iii)!',
            },
            {
              id: 'm14-p5',
              numberLabel: 'Drill 14.5',
              marks: 3,
              timeMinutes: 4,
              tag: 'Leap Year vs Non-Leap Year 53 Sundays',
              question:
                'Find the probability that:\n(i) a **leap year** chosen at random has **53 Sundays**,\n(ii) a **non-leap year** chosen at random has **53 Mondays**.',
              copyCheck: 'Every year has at least `52` complete weeks (`52 × 7 = 364` days). Only the **remainder days** decide the 53rd Sunday/Monday!',
              step1Setup: 'Split `366 = 52w + 2d` (`7` consecutive pairs) and `365 = 52w + 1d` (`7` single days).',
              midwayCheckpoint: 'Leap pairs `{(Sun,Mon),(Mon,Tue),(Tue,Wed),(Wed,Thu),(Thu,Fri),(Fri,Sat),(Sat,Sun)}` → `2` contain Sun.',
              finalAnswer: '(i) Leap year `= 2/7`; (ii) Non-leap year `= 1/7`.',
              fullSolution:
                '(i) Leap year has `366 = 52×7 + 2` days. The `2` remaining consecutive days can be `{(Sun,Mon), (Mon,Tue), (Tue,Wed), (Wed,Thu), (Thu,Fri), (Fri,Sat), (Sat,Sun)}`. Out of `7`, `2` contain Sunday (`(Sun,Mon)`, `(Sat,Sun)`) ⇒ `P = 2/7`. [1.5M]\n(ii) Non-leap year has `365 = 52×7 + 1` day. Only `1` of `7` possibilities (`Mon..Sun`) is Monday ⇒ `P = 1/7`. [1.5M]',
              sillyTrapNote: 'NEVER write `53/366` or `2/366` — the sample space is the `7` day-cycles, NOT `366`!',
            },
            {
              id: 'm14-p6',
              numberLabel: 'Drill 14.6',
              marks: 3,
              timeMinutes: 4,
              tag: 'Bag Algebra (Updated Denominator)',
              question:
                'A bag contains **15 balls**, of which `x` are red. If **5 more red balls** are put into the bag, the probability of drawing a red ball becomes **double** what it was earlier. Find **`x`**.',
              copyCheck: 'Adding `5` red balls changes total balls from `15` to **`15 + 5 = 20`**!',
              step1Setup: 'Equate `P₂ = 2 P₁`, i.e., `(x + 5) / 20 = 2 × (x / 15)`.',
              midwayCheckpoint: '`15(x + 5) = 40x` (or divide both sides by `5`: `3(x + 5) = 8x`? Wait carefully: `(x+5)/20 = 2x/15` → `15(x+5) = 40x`!).',
              finalAnswer: '`15x + 75 = 40x ⇒ 25x = 75 ⇒ x = 3`.',
              fullSolution:
                '1. Initial `P₁(red) = x/15`. [½M]\n2. After adding `5` red balls: red `= x + 5`, total `= 15 + 5 = 20`, so `P₂(red) = (x + 5)/20`. [1M]\n3. Condition: `(x + 5)/20 = 2(x/15) ⇒ 15(x + 5) = 40x ⇒ 15x + 75 = 40x ⇒ 25x = 75 ⇒ x = 3`. [1.5M]',
              sillyTrapNote: 'Quick check: `P₁ = 3/15 = 1/5`; `P₂ = (3 + 5)/20 = 8/20 = 2/5 = 2 × (1/5)`. Exact match!',
            },
            {
              id: 'm14-p7',
              numberLabel: 'Drill 14.7',
              marks: 3,
              timeMinutes: 4,
              tag: 'Negative Squares & Marble Count',
              question:
                '(i) A jar contains **30 marbles**, some blue and the rest green. If `P(blue) = 2/5`, find the number of **green** marbles.\n(ii) A number `x` is selected at random from **`{−3, −2, −1, 0, 1, 2, 3}`**. Find the probability that **`x² < 4`**.',
              copyCheck: 'Check BOTH negative and positive squares (`(−2)² = +4`, NOT `< 4` — strict `<` vs `≤`!). Part (i) asks for **green**, not blue!',
              step1Setup: '(i) Find `blue = (2/5) × 30`, then subtract from `30`. (ii) Square all `7` numbers.',
              midwayCheckpoint: '(i) `blue = 12`; (ii) Squares are `{9, 4, 1, 0, 1, 4, 9}` — values `< 4` belong to `{−1, 0, 1}`.',
              finalAnswer: '(i) `18` green marbles; (ii) `P(x² < 4) = 3/7`.',
              fullSolution:
                '(i) Number of blue marbles `= (2/5) × 30 = 12`. Green marbles `= 30 − 12 = 18`. [1.5M]\n(ii) Total elements `= 7`. Only `x ∈ {−1, 0, 1}` satisfy `x² < 4` (`(±2)² = 4` is excluded by `< 4`). Thus `P(x² < 4) = 3/7`. [1.5M]',
              sillyTrapNote: 'Forgetting negative roots `−1` OR wrongly including `−2, +2` under strict `< 4`!',
            },
            {
              id: 'm14-p8',
              numberLabel: 'Drill 14.8',
              marks: 4,
              timeMinutes: 5,
              tag: 'Section E Case-Based: Numbered Tokens 11 to 60',
              question:
                'Tokens numbered **`11` through `60`** are placed in a draw box and mixed thoroughly. One token is drawn at random. Find the probability that the token bears:\n(i) a **perfect square** number,\n(ii) a **prime number less than 30**,\n(iii) a **multiple of 5**.',
              copyCheck: '**INCLUSIVE COUNT ALERT:** Tokens `11` to `60` have **`60 − 11 + 1 = 50`** tokens, NOT `49` and NOT `60`!',
              step1Setup: 'List every qualifying number inside `[11, 60]` explicitly — never subtract endpoints blindly.',
              midwayCheckpoint: '(i) `{16, 25, 36, 49}` → `4`; (ii) `{11, 13, 17, 19, 23, 29}` → `6`; (iii) `{15, 20, ..., 60}` → `10`.',
              finalAnswer: '(i) `4/50 = 2/25`; (ii) `6/50 = 3/25`; (iii) `10/50 = 1/5`.',
              fullSolution:
                'Total tokens `n(S) = 60 − 11 + 1 = 50`. [1M]\n(i) Perfect squares in `11..60`: `{16, 25, 36, 49}` (`4` tokens) ⇒ `4/50 = 2/25`. [1M]\n(ii) Primes `< 30` in `11..60`: `{11, 13, 17, 19, 23, 29}` (`6` tokens) ⇒ `6/50 = 3/25`. [1M]\n(iii) Multiples of `5`: `{15, 20, 25, 30, 35, 40, 45, 50, 55, 60}` (`10` tokens) ⇒ `10/50 = 1/5`. [1M]',
              sillyTrapNote: 'Writing denominator `49` (`60 − 11`), forgetting `16` or `29`, or omitting endpoint `60` from multiples of `5`!',
            },
          ],
        },
      ],
    },
    {
      id: 'ch14-proofs-checkpoint',
      title: '4. Shifted-Card Range Sum & Ch 14 Self-Check',
      blocks: [
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE Board Pattern',
          question:
            'Cards marked with numbers **`2` to `101`** are shuffled in a bag. One card is drawn at random. Find the probability of drawing: (i) an **even number**, (ii) a number which is a **perfect square**, (iii) a **prime number less than 20**.',
          answer:
            '1. Total cards **`n(S) = 101 − 2 + 1 = 100`** (Do NOT write `99` — both `2` and `101` are included!). [½M]\n2. (i) Even numbers `2, 4, ..., 100`: `50` numbers ⇒ `50/100 = 1/2`. [1M]\n3. (ii) Perfect squares in `2..101`: `{4, 9, 16, 25, 36, 49, 64, 81, 100}` — NOTE **`1` IS MISSING** (`9` numbers, NOT `10`!) ⇒ **`9/100`**. [1M]\n4. (iii) Primes `< 20`: `{2, 3, 5, 7, 11, 13, 17, 19}` (`8` numbers; `1` is not prime and `2` IS prime) ⇒ `8/100 = 2/25`. [½M]',
          markingTip: 'Two back-to-back traps defeated: `n(S) = 101 − 2 + 1 = 100`, AND excluding `1 = 1²` because the deck starts at **`2`**!',
        },
        {
          type: 'checkpoint',
          prompt:
            'Two fair dice are rolled simultaneously. What is the probability that the **sum** of the numbers appearing on both dice is **1** (or `13`), and what if we ask for **"at least one `5`"**?',
          options: [
            { id: 'a', label: 'Sum = 1 is `1/36`; at least one `5` is `12/36 = 1/3`' },
            { id: 'b', label: 'Sum = 1 is `0`; at least one `5` is `11/36`' },
            { id: 'c', label: 'Sum = 1 is `0`; at least one `5` is `25/36`' },
            { id: 'd', label: 'Sum = 1 is `1/6`; at least one `5` is `11/36`' },
          ],
          correctIds: ['b'],
          successMsg:
            'Spot on! Minimum possible sum on 2 dice is `1 + 1 = 2` (so sum `1` is impossible: `0`), and outcomes with at least one `5` = `6 + 6 − 1 = 11` → `11/36`!',
          hintMsg: 'Smallest face on a die is `1`, so `1 + 1 = 2` is the minimum sum; and don’t count `(5, 5)` twice!',
        },
      ],
    },
  ],
};
