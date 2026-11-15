import { useMemo, useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Eye,
  PenLine,
  ShieldCheck,
  XCircle,
} from 'lucide-react';

type SlipGroup = 'all' | 'sign' | 'fraction' | 'table-formula' | 'geometry-copy';

interface SurgeryCase {
  id: string;
  chapter: string;
  group: Exclude<SlipGroup, 'all'>;
  prompt: string;
  steps: string[];
  wrongStepIndex: number; // 0-based
  whyWrong: string;
  correctedLine: string;
  correctAnswer: string;
  shieldRule: string;
  twinDrill: string;
  twinAnswer: string;
}

const SURGERY_CASES: SurgeryCase[] = [
  {
    id: 'sur-1',
    chapter: 'Ch 4: Quadratics',
    group: 'sign',
    prompt: 'Find the discriminant and roots of 2x² − 7x + 3 = 0.',
    steps: [
      'Line 1: Standard form coefficients: a = 2, b = −7, c = 3',
      'Line 2: D = b² − 4ac = −7² − 4(2)(3)',
      'Line 3: D = −49 − 24 = −73',
      'Line 4: Since D < 0, no real roots exist.',
    ],
    wrongStepIndex: 1,
    whyWrong:
      'Student wrote −7² without brackets and evaluated it as −49 instead of (−7)² = +49!',
    correctedLine: 'Line 2: D = (−7)² − 4(2)(3) = 49 − 24 = 25',
    correctAnswer: 'D = 25 > 0; roots are x = (7 ± 5)/4 → x = 3 and x = 1/2.',
    shieldRule: 'ALWAYS wrap negative b in brackets: (−b)² is ALWAYS positive!',
    twinDrill: 'Compute D for 3x² − 5x + 2 = 0 in your notebook.',
    twinAnswer: 'D = (−5)² − 4(3)(2) = 25 − 24 = 1 (roots 1 and 2/3).',
  },
  {
    id: 'sur-2',
    chapter: 'Ch 4: Quadratics',
    group: 'sign',
    prompt: 'Solve x² + 5x − 6 = 0 by Quadratic Formula.',
    steps: [
      'Line 1: a = 1, b = 5, c = −6',
      'Line 2: D = (5)² − 4(1)(−6) = 25 − 24 = 1',
      'Line 3: x = (−5 ± √1) / 2',
      'Line 4: Roots are x = −2 and x = −3',
    ],
    wrongStepIndex: 1,
    whyWrong:
      'Because c = −6 is negative, −4(1)(−6) is +24, NOT −24! Subtracting instead of adding flipped D from 49 down to 1.',
    correctedLine: 'Line 2: D = (5)² − 4(1)(−6) = 25 + 24 = 49',
    correctAnswer: 'x = (−5 ± 7)/2 → x = 1 and x = −6.',
    shieldRule: 'Count minus signs in −4ac BEFORE multiplying: two minuses = PLUS!',
    twinDrill: 'Find D for 2x² − 3x − 2 = 0 by hand.',
    twinAnswer: 'D = (−3)² − 4(2)(−2) = 9 + 16 = 25 (roots 2 and −1/2).',
  },
  {
    id: 'sur-3',
    chapter: 'Ch 3: Linear Equations',
    group: 'sign',
    prompt: 'Eliminate x from: (1) 3x + 2y = 11  and  (2) 3x − 5y = 4.',
    steps: [
      'Line 1: Subtract Eq (2) from Eq (1)',
      'Line 2: (3x − 3x) + (2y − 5y) = 11 − 4',
      'Line 3: −3y = 7 → y = −7/3',
      'Line 4: Substitute y back into Eq (1) to find x.',
    ],
    wrongStepIndex: 1,
    whyWrong:
      'Subtracting −5y is 2y − (−5y) = +7y, NOT 2y − 5y! Forgetting the bracket around (−5y) broke the sign.',
    correctedLine: 'Line 2: (3x − 3x) + [2y − (−5y)] = 11 − 4 → 7y = 7',
    correctAnswer: 'y = 1, x = 3.',
    shieldRule: 'Write (−), (+), (−) neatly underneath the second equation BEFORE adding vertically!',
    twinDrill: 'Subtract 2x − 3y = 1 from 2x + 4y = 15 in your notebook.',
    twinAnswer: '4y − (−3y) = 7y = 14 → y = 2, x = 3.5.',
  },
  {
    id: 'sur-4',
    chapter: 'Ch 7: Coordinate Geometry',
    group: 'sign',
    prompt: 'Find the distance between A(−4, 3) and B(2, −5).',
    steps: [
      'Line 1: Use Distance Formula d = √[(x₂ − x₁)² + (y₂ − y₁)²]',
      'Line 2: x₂ − x₁ = 2 − 4 = −2;   y₂ − y₁ = −5 − 3 = −8',
      'Line 3: d = √[(−2)² + (−8)²] = √(4 + 64)',
      'Line 4: d = √68 = 2√17 units.',
    ],
    wrongStepIndex: 1,
    whyWrong:
      'Since x₁ = −4, x₂ − x₁ is 2 − (−4) = 2 + 4 = 6, NOT 2 − 4!',
    correctedLine: 'Line 2: x₂ − x₁ = 2 − (−4) = 6;   y₂ − y₁ = −5 − 3 = −8',
    correctAnswer: 'd = √(6² + (−8)²) = √(36 + 64) = √100 = 10 units.',
    shieldRule: 'Always write the minus from the formula AND keep the coordinate’s minus inside brackets: 2 − (−4).',
    twinDrill: 'Compute distance between P(−3, −2) and Q(1, 1).',
    twinAnswer: 'd = √[(1 − (−3))² + (1 − (−2))²] = √(4² + 3²) = 5 units.',
  },
  {
    id: 'sur-5',
    chapter: 'Ch 5: Arithmetic Progressions',
    group: 'sign',
    prompt: 'Find the 12th term of the AP: 10, 7, 4, ...',
    steps: [
      'Line 1: First term a = 10',
      'Line 2: Common difference d = 10 − 7 = 3',
      'Line 3: a₁₂ = a + 11d = 10 + 11(3)',
      'Line 4: a₁₂ = 10 + 33 = 43.',
    ],
    wrongStepIndex: 1,
    whyWrong:
      'Student calculated a₁ − a₂ instead of a₂ − a₁! For a decreasing AP, d is NEGATIVE: d = 7 − 10 = −3.',
    correctedLine: 'Line 2: Common difference d = a₂ − a₁ = 7 − 10 = −3',
    correctAnswer: 'a₁₂ = 10 + 11(−3) = 10 − 33 = −23.',
    shieldRule: 'ALWAYS compute d = RIGHT − LEFT (a₂ − a₁), never Left − Right!',
    twinDrill: 'Find the 10th term of the AP: 21, 18, 15, ...',
    twinAnswer: 'd = 18 − 21 = −3; a₁₀ = 21 + 9(−3) = −6.',
  },
  {
    id: 'sur-6',
    chapter: 'Ch 3: Consistency Ratios',
    group: 'sign',
    prompt: 'Find k if 2x + 3y = 7 and 4x + ky − 14 = 0 have infinitely many solutions.',
    steps: [
      'Line 1: Read coefficients: a₁ = 2, b₁ = 3, c₁ = 7',
      'Line 2: Read second eq: a₂ = 4, b₂ = k, c₂ = −14',
      'Line 3: Compare c₁/c₂ = 7/(−14) = −1/2, while a₁/a₂ = 2/4 = +1/2',
      'Line 4: Since a₁/a₂ ≠ c₁/c₂, no value of k gives infinite solutions!',
    ],
    wrongStepIndex: 0,
    whyWrong:
      '7 in Eq 1 is on the RHS (= 7), whereas −14 in Eq 2 is on the LHS (= 0)! Both equations MUST be written as ax + by + c = 0 before taking c₁.',
    correctedLine: 'Line 1: Rewrite Eq 1 as 2x + 3y − 7 = 0 → c₁ = −7',
    correctAnswer: 'a₁/a₂ = c₁/c₂ = 1/2 holds; 3/k = 1/2 → k = 6.',
    shieldRule: 'Rewrite BOTH equations in "= 0" form on Line 1 before touching a₁, b₁, c₁!',
    twinDrill: 'Check consistency of 3x − y = 5 and 6x − 2y − 10 = 0.',
    twinAnswer: 'c₁ = −5, c₂ = −10 → ratios 3/6 = −1/−2 = −5/−10 = 1/2 (Coincident, infinite solutions).',
  },
  {
    id: 'sur-7',
    chapter: 'Ch 8: Trigonometry Values',
    group: 'fraction',
    prompt: 'Evaluate 4 cot² 45° − sec² 60° + sin² 60° + cos² 90°.',
    steps: [
      'Line 1: Substitute values: cot 45° = 1, sec 60° = 2, sin 60° = √3/2, cos 90° = 0',
      'Line 2: 4(1)² − (2)² + (√3/2)² + 0²',
      'Line 3: 4 − 4 + 3/2 + 0',
      'Line 4: Final Answer = 3/2.',
    ],
    wrongStepIndex: 2,
    whyWrong:
      'Student squared √3 to get 3, but FORGOT to square the denominator 2 in (√3/2)²! (√3/2)² = 3/4, NOT 3/2.',
    correctedLine: 'Line 3: 4 − 4 + 3/4 + 0',
    correctAnswer: '3/4.',
    shieldRule: 'When squaring a fraction (√3/2)², draw two arrows: square TOP AND square BOTTOM!',
    twinDrill: 'Evaluate 4 sin² 60° + 3 tan² 30°.',
    twinAnswer: '4(3/4) + 3(1/3) = 3 + 1 = 4.',
  },
  {
    id: 'sur-8',
    chapter: 'Ch 8: Trigonometric Identities',
    group: 'fraction',
    prompt: 'Simplify (sin θ / cos θ) + (1 / sin θ) as a single fraction.',
    steps: [
      'Line 1: LCM of denominators cos θ and sin θ is sin θ cos θ',
      'Line 2: Multiply numerators to match common denominator',
      'Line 3: (sin²θ + 1) / (sin θ cos θ)',
      'Line 4: Answer = (sin²θ + 1) / (sin θ cos θ).',
    ],
    wrongStepIndex: 2,
    whyWrong:
      'In the second fraction (1 / sin θ), multiplying denominator by cos θ requires multiplying its numerator 1 by cos θ too! Student left it as 1 instead of cos θ.',
    correctedLine: 'Line 3: (sin²θ + cos θ) / (sin θ cos θ)',
    correctAnswer: '(sin²θ + cos θ) / (sin θ cos θ).',
    shieldRule: 'Cross-multiply both wings cleanly: (A/B) + (C/D) = (AD + BC)/(BD).',
    twinDrill: 'Combine (1 / (1 − cos θ)) + (1 / (1 + cos θ)).',
    twinAnswer: '((1 + cos θ) + (1 − cos θ)) / (1 − cos²θ) = 2 / sin²θ = 2 cosec²θ.',
  },
  {
    id: 'sur-9',
    chapter: 'Ch 4: Cancelling Variables',
    group: 'fraction',
    prompt: 'Solve x² = 5x for all real values of x.',
    steps: [
      'Line 1: Given equation: x² = 5x',
      'Line 2: Divide both sides by x',
      'Line 3: x = 5',
      'Line 4: Therefore the only solution is x = 5.',
    ],
    wrongStepIndex: 1,
    whyWrong:
      'NEVER divide an equation by a variable x that could equal 0! Dividing by x silently deletes the root x = 0.',
    correctedLine: 'Line 2: Move all terms to LHS and factor: x² − 5x = 0 → x(x − 5) = 0',
    correctAnswer: 'x = 0 and x = 5.',
    shieldRule: 'Bring everything to ONE side (= 0) and FACTOR — never divide by x!',
    twinDrill: 'Solve 3x² = 12x in your register.',
    twinAnswer: '3x(x − 4) = 0 → x = 0 or x = 4.',
  },
  {
    id: 'sur-10',
    chapter: 'Ch 11: Radical & Fractional Algebra',
    group: 'fraction',
    prompt: 'Evaluate √(9 + 16) + 1/(1 + 1/2).',
    steps: [
      'Line 1: Split √(9 + 16) into √9 + √16',
      'Line 2: = 3 + 4 = 7',
      'Line 3: Second term 1/(3/2) = 2/3',
      'Line 4: Total = 7 + 2/3 = 23/3.',
    ],
    wrongStepIndex: 0,
    whyWrong:
      '√(a + b) ≠ √a + √b! You CANNOT break a square root across + or −! Add inside the root first: 9 + 16 = 25.',
    correctedLine: 'Line 1: Add under the root first: √(9 + 16) = √25 = 5',
    correctAnswer: '5 + 2/3 = 17/3.',
    shieldRule: 'Square root distributes ONLY over × and ÷, NEVER over + or −!',
    twinDrill: 'Evaluate √(6² + 8²) − √(5² − 3²).',
    twinAnswer: '√100 − √16 = 10 − 4 = 6 (NOT 14 − 2 = 12!).',
  },
  {
    id: 'sur-11',
    chapter: 'Ch 2: Quadratic Zeroes Sum/Product',
    group: 'fraction',
    prompt: 'If α, β are zeroes of 2x² − 5x + 7, find 1/α + 1/β.',
    steps: [
      'Line 1: a = 2, b = −5, c = 7',
      'Line 2: α + β = −b/a = 5/2 and αβ = c/a = 7/2',
      'Line 3: 1/α + 1/β = (α + β) / (αβ)',
      'Line 4: = (5/2) ÷ (7/2) = 35/4.',
    ],
    wrongStepIndex: 3,
    whyWrong:
      '(5/2) ÷ (7/2) = (5/2) × (2/7) = 5/7, NOT (5/2) × (7/2)! Student forgot to flip the divisor fraction when turning ÷ into ×.',
    correctedLine: 'Line 4: = (5/2) × (2/7) = 5/7',
    correctAnswer: '5/7 (note also the shortcut 1/α + 1/β = −b/c!).',
    shieldRule: 'Flip the BOTTOM fraction completely when dividing two fractions: (A/B)/(C/B) = A/C.',
    twinDrill: 'For 3x² + 4x − 5, find 1/α + 1/β.',
    twinAnswer: '(−4/3) / (−5/3) = 4/5.',
  },
  {
    id: 'sur-12',
    chapter: 'Ch 4: Speed / Fraction LCM',
    group: 'fraction',
    prompt: 'Solve 1/x − 1/(x − 2) = 3 (x ≠ 0, 2).',
    steps: [
      'Line 1: Take LCM x(x − 2) on LHS',
      'Line 2: [(x − 2) − x] / [x(x − 2)] = 3',
      'Line 3: −2 = 3x(x − 2)',
      'Line 4: 3x² − 6x − 2 = 0.',
    ],
    wrongStepIndex: 3,
    whyWrong:
      'When moving −2 from LHS to RHS: 0 = 3x² − 6x + 2! Student forgot to flip −2 to +2 when transposing across "=".',
    correctedLine: 'Line 4: 3x² − 6x + 2 = 0',
    correctAnswer: 'x = (6 ± √12)/6 = (3 ± √3)/3.',
    shieldRule: 'Do transposition in a separate written line: write "−2 = 3x² − 6x", then move −2 → +2!',
    twinDrill: 'Clear fractions in 1/(x + 1) − 1/(x + 4) = 1/6.',
    twinAnswer: '3 / ((x + 1)(x + 4)) = 1/6 → x² + 5x + 4 = 18 → x² + 5x − 14 = 0 → x = 2, −7.',
  },
  {
    id: 'sur-13',
    chapter: 'Ch 13: Statistics (Median)',
    group: 'table-formula',
    prompt: 'For classes [10–20: f=6], [20–30: f=11], [30–40: f=21], [40–50: f=9], [50–60: f=3], N=50, find Median.',
    steps: [
      'Line 1: Cumulative frequencies cf = 6, 17, 38, 47, 50',
      'Line 2: N/2 = 25 → Median Class is 30–40 (since 38 ≥ 25)',
      'Line 3: l = 30, f = 21, cf = 38, h = 10',
      'Line 4: Median = 30 + [(25 − 38)/21] × 10 = 23.81.',
    ],
    wrongStepIndex: 2,
    whyWrong:
      'In the Median formula, cf MUST come from the class PRECEDING (ONE ROW ABOVE) the median class (cf = 17), NOT the median class row itself (38)! Notice 25 − 38 went negative — instant red flag!',
    correctedLine: 'Line 3: l = 30, f = 21, cf = 17 (preceding class 20–30!), h = 10',
    correctAnswer: 'Median = 30 + [(25 − 17)/21] × 10 = 30 + 80/21 = 33.81.',
    shieldRule: 'If (N/2 − cf) ever turns NEGATIVE, stop immediately — you picked the median class cf instead of the row above!',
    twinDrill: 'Spot-check: if N = 40, median class cf = 24, preceding row cf = 14, f = 10, l = 20, h = 10, find Median.',
    twinAnswer: '20 + [(20 − 14)/10] × 10 = 26.',
  },
  {
    id: 'sur-14',
    chapter: 'Ch 13: Statistics (Mode)',
    group: 'table-formula',
    prompt: 'Find Mode when Modal class is 40–50 (h=10) with f₀ = 12, f₁ = 20, f₂ = 11.',
    steps: [
      'Line 1: Modal class = 40–50 → l = 40, h = 10',
      'Line 2: Mode = l + [(f₁ − f₀) / (f₁ − f₀ − f₂)] × h',
      'Line 3: Mode = 40 + [(20 − 12) / (20 − 12 − 11)] × 10',
      'Line 4: Mode = 40 + (8 / −3) × 10.',
    ],
    wrongStepIndex: 1,
    whyWrong:
      'Denominator of Mode is (2f₁ − f₀ − f₂), NOT (f₁ − f₀ − f₂)! Forgetting the factor of 2 before f₁ caused a negative denominator!',
    correctedLine: 'Line 2: Mode = l + [(f₁ − f₀) / (2f₁ − f₀ − f₂)] × h',
    correctAnswer: '40 + [8 / (40 − 12 − 11)] × 10 = 40 + 80/17 ≈ 44.71.',
    shieldRule: 'Mode denominator always starts with 2f₁ (DOUBLE the peak frequency!).',
    twinDrill: 'Calculate Mode if l = 30, h = 10, f₀ = 8, f₁ = 16, f₂ = 4.',
    twinAnswer: '30 + [(16 − 8)/(32 − 8 − 4)] × 10 = 30 + (8/20)×10 = 34.',
  },
  {
    id: 'sur-15',
    chapter: 'Ch 13: Statistics (Step-Deviation Mean)',
    group: 'table-formula',
    prompt: 'With class width h = 20, assumed mean a = 50, Σfᵢ = 40, Σfᵢuᵢ = −12, find Mean.',
    steps: [
      'Line 1: Formula: x̄ = a + (Σfᵢuᵢ / Σfᵢ)',
      'Line 2: Substitute a = 50, Σfᵢuᵢ = −12, Σfᵢ = 40',
      'Line 3: x̄ = 50 + (−12 / 40) = 50 − 0.3',
      'Line 4: Mean = 49.7.',
    ],
    wrongStepIndex: 0,
    whyWrong:
      'In Step-Deviation, uᵢ = (xᵢ − a)/h was divided by h = 20, so you MUST multiply (Σfᵢuᵢ / Σfᵢ) by h at the end!',
    correctedLine: 'Line 1: Formula: x̄ = a + (Σfᵢuᵢ / Σfᵢ) × h',
    correctAnswer: '50 + (−12/40) × 20 = 50 − 6 = 44.',
    shieldRule: 'Did you make a uᵢ column by dividing by h? Then the final formula MUST multiply by h!',
    twinDrill: 'Find Mean if a = 150, h = 20, Σfᵢ = 50, Σfᵢuᵢ = −15.',
    twinAnswer: '150 + (−15/50) × 20 = 150 − 6 = 144.',
  },
  {
    id: 'sur-16',
    chapter: 'Ch 7: Section Formula Swap',
    group: 'table-formula',
    prompt: 'Find coordinates of P dividing A(2, −3) and B(7, 7) in ratio 2 : 3.',
    steps: [
      'Line 1: Here m₁ = 2, m₂ = 3; A(2, −3) and B(7, 7)',
      'Line 2: x = (2 × 2 + 3 × 7) / (2 + 3)',
      'Line 3: x = (4 + 21) / 5 = 25 / 5 = 5',
      'Line 4: Similarly find y.',
    ],
    wrongStepIndex: 1,
    whyWrong:
      'Cross-multiplication rule violated! m₁ = 2 MUST multiply x₂ = 7 (from B), and m₂ = 3 MUST multiply x₁ = 2 (from A)!',
    correctedLine: 'Line 2: x = (m₁x₂ + m₂x₁)/(m₁ + m₂) = (2 × 7 + 3 × 2) / 5',
    correctAnswer: 'x = (14 + 6)/5 = 4; y = (2×7 + 3×(−3))/5 = 5/5 = 1 → P(4, 1).',
    shieldRule: 'Draw an X-cross in your rough margin: Left Ratio × Right Point + Right Ratio × Left Point!',
    twinDrill: 'Find x-coordinate dividing A(1, 0) and B(9, 8) in ratio 3 : 1.',
    twinAnswer: 'x = (3×9 + 1×1)/(3 + 1) = 28/4 = 7.',
  },
  {
    id: 'sur-17',
    chapter: 'Ch 14: Probability (Modified Deck)',
    group: 'table-formula',
    prompt: 'All 6 black face cards are removed from a 52-card deck. Find P(drawing a King) from the remaining cards.',
    steps: [
      'Line 1: Remaining total cards = 52 − 6 = 46',
      'Line 2: Originally there are 4 Kings in a deck',
      'Line 3: Two black Kings (spades & clubs) were removed, leaving 2 red Kings',
      'Line 4: P(King) = 2 / 52 = 1 / 26.',
    ],
    wrongStepIndex: 3,
    whyWrong:
      'Line 1 correctly computed 46 remaining cards, yet Line 4 went back on autopilot and divided by 52 instead of 46!',
    correctedLine: 'Line 4: P(King) = 2 / 46 = 1 / 23',
    correctAnswer: '1 / 23.',
    shieldRule: 'Box your NEW denominator (e.g. 46) on Line 1 so your pen never defaults to 52!',
    twinDrill: 'If all 4 Aces are removed from 52 cards, find P(drawing a heart).',
    twinAnswer: '12 hearts left / 48 total cards = 1/4 (Ace of hearts was also removed!).',
  },
  {
    id: 'sur-18',
    chapter: 'Ch 5: Sum of First n Odd/AP Terms',
    group: 'table-formula',
    prompt: 'Find the sum of the AP: 7, 11, 15, ..., 43.',
    steps: [
      'Line 1: a = 7, d = 4, l = 43',
      'Line 2: Find number of terms: 43 = 7 + (n − 1)4 → 36 = 4(n − 1) → n = 9',
      'Line 3: Use Sₙ = (n/2)(a + l)',
      'Line 4: S = (9/2)(7 + 43) = 225.',
    ],
    wrongStepIndex: 1,
    whyWrong:
      '36 / 4 = 9 equals (n − 1), NOT n! Forgetting the final "+ 1" dropped n from 10 to 9!',
    correctedLine: 'Line 2: 36/4 = 9 = n − 1 → n = 9 + 1 = 10',
    correctAnswer: 'S₁₀ = (10/2)(7 + 43) = 5 × 50 = 250.',
    shieldRule: 'When solving a + (n − 1)d = l, circle "(n − 1)" until you explicitly add +1!',
    twinDrill: 'How many terms are in the AP: 5, 8, 11, ..., 65?',
    twinAnswer: '60/3 = 20 = n − 1 → n = 21 terms.',
  },
  {
    id: 'sur-19',
    chapter: 'Ch 12: Diameter vs Radius',
    group: 'geometry-copy',
    prompt: 'Find the volume of a hemisphere of diameter 14 cm (use π = 22/7).',
    steps: [
      'Line 1: Given diameter = 14 cm',
      'Line 2: Volume = (2/3)πr³',
      'Line 3: = (2/3) × (22/7) × 14 × 14 × 14',
      'Line 4: = 17248/3 ≈ 5749.33 cm³.',
    ],
    wrongStepIndex: 2,
    whyWrong:
      'Plugged diameter d = 14 directly in place of radius r! Always write r = d/2 = 7 cm on Line 1!',
    correctedLine: 'Line 3: With r = 14/2 = 7 cm, Vol = (2/3) × (22/7) × 7 × 7 × 7',
    correctAnswer: '2156 / 3 ≈ 718.67 cm³.',
    shieldRule: 'Underline the word DIAMETER in the question and write "r = d/2 = ___" before writing any formula!',
    twinDrill: 'Find CSA of a cone of base diameter 10 cm and slant height 14 cm.',
    twinAnswer: 'r = 5 cm; CSA = πrl = (22/7) × 5 × 14 = 220 cm².',
  },
  {
    id: 'sur-20',
    chapter: 'Ch 12: Scooped Solid Surface Area',
    group: 'geometry-copy',
    prompt: 'From a solid cylinder of height h and radius r, a conical cavity of same height and radius is hollowed out. Find remaining TSA.',
    steps: [
      'Line 1: Remaining solid = Cylinder minus Cone',
      'Line 2: Base circle (πr²) + Outer curved wall (2πrh) remain',
      'Line 3: TSA = 2πrh + πr² − πrl',
      'Line 4: Factor out πr(2h + r − l).',
    ],
    wrongStepIndex: 2,
    whyWrong:
      'Material removed reduces VOLUME, NOT exposed SURFACE AREA! Hollowing a cone exposes a new inner conical surface you can paint, so πrl MUST BE ADDED (+ πrl)!',
    correctedLine: 'Line 3: TSA = 2πrh + πr² + πrl',
    correctAnswer: 'πr(2h + r + l).',
    shieldRule: 'Paintbrush Rule: Every new pit, scoop, or dome adds paintable surface (+ CSA)!',
    twinDrill: 'A hemispherical depression is cut from one face of a cube (edge a, diameter a). Write TSA expression.',
    twinAnswer: '6a² − π(a/2)² + 2π(a/2)² = 6a² + πa²/4.',
  },
  {
    id: 'sur-21',
    chapter: 'Ch 6: Triangles (BPT Parallel Base)',
    group: 'geometry-copy',
    prompt: 'In △ABC, DE ∥ BC with AD = 2 cm, DB = 4 cm, and BC = 9 cm. Find DE.',
    steps: [
      'Line 1: Since DE ∥ BC, by BPT we relate the segments on AB',
      'Line 2: DE / BC = AD / DB',
      'Line 3: DE / 9 = 2 / 4',
      'Line 4: DE = 4.5 cm.',
    ],
    wrongStepIndex: 1,
    whyWrong:
      'BPT gives AD/DB = AE/EC, NOT DE/BC! For parallel bases DE/BC, you MUST use AA Similarity △ADE ~ △ABC, which divides AD by the FULL side AB = AD + DB = 6!',
    correctedLine: 'Line 2: By △ADE ~ △ABC, DE / BC = AD / AB = 2 / (2 + 4) = 2 / 6',
    correctAnswer: 'DE / 9 = 2 / 6 → DE = 3 cm.',
    shieldRule: 'Base-to-Base (DE/BC) ALWAYS uses Small Side / FULL Side (AD / AB), NEVER piece/piece (AD/DB)!',
    twinDrill: 'If DE ∥ BC, AD = 3 cm, DB = 6 cm, BC = 12 cm, find DE.',
    twinAnswer: 'AB = 9 cm → DE / 12 = 3 / 9 → DE = 4 cm.',
  },
  {
    id: 'sur-22',
    chapter: 'Ch 9: Angle of Depression Diagram',
    group: 'geometry-copy',
    prompt: 'From a 20 m tall cliff, the angle of depression of a boat is 30°. Find the boat’s distance from the cliff foot.',
    steps: [
      'Line 1: Draw cliff AB = 20 m (vertical) and boat C on sea level',
      'Line 2: Mark angle at top ∠BAC = 30° between cliff AB and line of sight AC',
      'Line 3: tan 30° = BC / AB = BC / 20',
      'Line 4: BC = 20 / √3 m.',
    ],
    wrongStepIndex: 1,
    whyWrong:
      'Angle of depression is ALWAYS measured from the HORIZONTAL eye-level line, NOT the vertical cliff AB! That makes ∠ACB = 30° (alternate interior), while ∠BAC = 60°!',
    correctedLine: 'Line 2: Draw horizontal sightline at A → alternate interior angle ∠ACB = 30°',
    correctAnswer: 'tan 30° = 20 / BC → BC = 20√3 m.',
    shieldRule: 'Draw the dashed horizontal eye-level line FIRST before marking ANY elevation/depression angle!',
    twinDrill: 'If depression from a 15 m tower is 60°, find horizontal distance to car.',
    twinAnswer: 'tan 60° = 15 / x → x = 15/√3 = 5√3 m.',
  },
  {
    id: 'sur-23',
    chapter: 'Ch 10: Circles (Hypotenuse Selection)',
    group: 'geometry-copy',
    prompt: 'A tangent PQ at point P of a circle of radius 5 cm meets a line through centre O at Q so that OQ = 13 cm. Find PQ.',
    steps: [
      'Line 1: By Theorem 10.1, radius OP ⊥ tangent PQ, so △OPQ is right-angled',
      'Line 2: Apply Pythagoras: PQ² = OQ² + OP²',
      'Line 3: PQ² = 13² + 5² = 169 + 25 = 194',
      'Line 4: PQ = √194 cm.',
    ],
    wrongStepIndex: 1,
    whyWrong:
      'The 90° angle is at contact point P, making OQ (centre-to-external point) the HYPOTENUSE! Therefore OQ² = OP² + PQ², so PQ² = OQ² − OP²!',
    correctedLine: 'Line 2: Since ∠OPQ = 90°, hypotenuse is OQ → PQ² = OQ² − OP²',
    correctAnswer: 'PQ = √(13² − 5²) = √(169 − 25) = √144 = 12 cm.',
    shieldRule: 'Centre-to-external distance (OQ) is ALWAYS the longest side (Hypotenuse) — subtract the radius squared!',
    twinDrill: 'Radius = 8 cm, centre-to-external point = 17 cm. Find tangent length.',
    twinAnswer: '√(17² − 8²) = √(289 − 64) = √225 = 15 cm.',
  },
  {
    id: 'sur-24',
    chapter: 'Ch 12: Capsule Cylinder Height',
    group: 'geometry-copy',
    prompt: 'A solid is a cylinder with hemispherical ends. Total length = 19 cm, radius = 3.5 cm. Find cylinder height h.',
    steps: [
      'Line 1: Radius of each hemisphere = 3.5 cm',
      'Line 2: Height of cylindrical portion h = Total length − r',
      'Line 3: h = 19 − 3.5 = 15.5 cm',
      'Line 4: Now use h = 15.5 cm in CSA = 2πrh.',
    ],
    wrongStepIndex: 1,
    whyWrong:
      'There are TWO hemispherical ends (left AND right, or top AND bottom)! Subtract r from BOTH ends: h = 19 − 2(3.5) = 12 cm!',
    correctedLine: 'Line 2: Since hemispheres sit on BOTH ends, h = Total length − 2r',
    correctAnswer: 'h = 19 − 2(3.5) = 19 − 7 = 12 cm.',
    shieldRule: 'Count how many hemispherical caps stick out: 1 cap (toy) → subtract r once; 2 caps (capsule) → subtract 2r!',
    twinDrill: 'Total capsule length = 22 mm, diameter = 6 mm. Find cylinder length h.',
    twinAnswer: 'r = 3 mm → h = 22 − 2(3) = 16 mm.',
  },
];

export function MathSillyMistakeClinicLab() {
  const [group, setGroup] = useState<SlipGroup>('all');
  const [selectedLines, setSelectedLines] = useState<Record<string, number>>({});
  const [twinOpen, setTwinOpen] = useState<Record<string, boolean>>({});

  const visibleCases = useMemo(() => {
    if (group === 'all') return SURGERY_CASES;
    return SURGERY_CASES.filter((c) => c.group === group);
  }, [group]);

  const curedCount = SURGERY_CASES.filter(
    (c) => selectedLines[c.id] === c.wrongStepIndex
  ).length;

  return (
    <div className="rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50/60 to-white p-4 sm:p-6 space-y-5 dark:border-rose-900/60 dark:from-slate-900 dark:to-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rose-100 pb-4 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-600 text-white shadow-xs">
            <PenLine className="h-5 w-5" />
          </span>
          <div>
            <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
              24-Case Silly-Mistake Surgery Clinic (Tap the Faulty Line!)
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Each Standard (041) notebook solution has <strong>1 hidden mid-way slip</strong>. Tap the broken line, then write the Twin Drill in your notebook!
            </p>
          </div>
        </div>

        <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-extrabold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          {curedCount} / {SURGERY_CASES.length} Slips Spotted
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-1.5">
        {[
          { key: 'all' as const, label: `All (${SURGERY_CASES.length})` },
          { key: 'sign' as const, label: 'Sign & Brackets (6)' },
          { key: 'fraction' as const, label: 'Fractions & Roots (6)' },
          { key: 'table-formula' as const, label: 'Formula & Stats Cell (6)' },
          { key: 'geometry-copy' as const, label: 'Geometry & d vs r (6)' },
        ].map((pill) => (
          <button
            key={pill.key}
            type="button"
            onClick={() => setGroup(pill.key)}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              group === pill.key
                ? 'bg-rose-600 text-white hover:bg-rose-700'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-rose-400 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
            }`}
          >
            {pill.label}
          </button>
        ))}
      </div>

      {/* Cases */}
      <div className="space-y-4">
        {visibleCases.map((item, idx) => {
          const picked = selectedLines[item.id];
          const isSolved = picked === item.wrongStepIndex;
          const isWrongPick = picked !== undefined && !isSolved;

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3 shadow-xs dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-extrabold text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                  Case #{idx + 1} • {item.chapter}
                </span>
                {isSolved && (
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-700 dark:text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Slip Diagnosed ✓
                  </span>
                )}
              </div>

              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {item.prompt}
              </div>

              <div className="space-y-1.5">
                {item.steps.map((line, lineIdx) => {
                  const isThisPicked = picked === lineIdx;
                  const isFault = lineIdx === item.wrongStepIndex;

                  return (
                    <button
                      key={lineIdx}
                      type="button"
                      onClick={() =>
                        setSelectedLines((prev) => ({ ...prev, [item.id]: lineIdx }))
                      }
                      className={`w-full text-left rounded-xl border px-3 py-2 font-mono text-xs sm:text-[13px] transition cursor-pointer flex items-center justify-between gap-2 ${
                        isThisPicked && isFault
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold dark:bg-emerald-950/40 dark:text-emerald-200'
                          : isThisPicked && !isFault
                          ? 'border-rose-400 bg-rose-50 text-rose-900 dark:bg-rose-950/40 dark:text-rose-200'
                          : 'border-slate-200 bg-slate-50/70 text-slate-800 hover:bg-slate-100 hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white'
                      }`}
                    >
                      <span>{line}</span>
                      {isThisPicked && isFault && (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      )}
                      {isThisPicked && !isFault && (
                        <XCircle className="h-4 w-4 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {isWrongPick && (
                <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900 flex items-center gap-2 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-200">
                  <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>
                    That line is mathematically fine — re-check signs, brackets, fractions, formula constants, or radius/units on the other lines!
                  </span>
                </div>
              )}

              {isSolved && (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3.5 space-y-2.5 text-xs dark:border-emerald-900 dark:bg-emerald-950/20">
                  <div className="text-rose-800 dark:text-rose-300">
                    <strong>Why It Slipped:</strong> {item.whyWrong}
                  </div>
                  <div className="font-mono font-bold text-emerald-800 dark:text-emerald-300">
                    ✓ Fix: {item.correctedLine}
                  </div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">
                    <strong>Correct Final Answer:</strong> {item.correctAnswer}
                  </div>
                  <div className="rounded-lg bg-white border border-emerald-200 px-3 py-2 text-emerald-900 flex items-start gap-2 dark:bg-slate-900 dark:border-emerald-900 dark:text-emerald-200">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Notebook Shield Rule:</strong> {item.shieldRule}
                    </span>
                  </div>

                  {/* Twin Hand Drill */}
                  <div className="rounded-lg bg-blue-50/80 border border-blue-200 p-2.5 space-y-1.5 dark:bg-blue-950/30 dark:border-blue-900">
                    <div className="font-bold text-blue-900 dark:text-blue-200">
                      Write This Twin Practice Sum Cleanly in Your Notebook: {item.twinDrill}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setTwinOpen((prev) => ({
                          ...prev,
                          [item.id]: !prev[item.id],
                        }))
                      }
                      className="inline-flex items-center gap-1 rounded-md bg-white border border-blue-300 px-2.5 py-1 text-[11px] font-bold text-blue-800 hover:bg-blue-100 cursor-pointer dark:bg-slate-900 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-950/70 dark:hover:text-blue-200"
                    >
                      <Eye className="h-3 w-3" />
                      {twinOpen[item.id] ? 'Hide Twin Answer' : 'Check Twin Answer'}
                    </button>
                    {twinOpen[item.id] && (
                      <div className="font-mono font-bold text-emerald-800 dark:text-emerald-300 pt-1">
                        {item.twinAnswer}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
