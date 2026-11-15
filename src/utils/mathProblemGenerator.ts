export type ChapterNumber =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14;

export type ChapterTopicKey =
  | 'ch01'
  | 'ch02'
  | 'ch03'
  | 'ch04'
  | 'ch05'
  | 'ch06'
  | 'ch07'
  | 'ch08'
  | 'ch09'
  | 'ch10'
  | 'ch11'
  | 'ch12'
  | 'ch13'
  | 'ch14';

export type DrillTopicKey = 'mixed' | ChapterTopicKey;

export interface GeneratedMathProblem {
  signature: string;
  chapterKey: ChapterTopicKey;
  subPatternIndex: number;
  subPatternLabel: string;
  topicLabel: string;
  marks: 1 | 2 | 3 | 4 | 5;
  targetMinutes: number;
  prompt: string;
  table?: { headers: string[]; rows: string[][] };
  copyCheck: string;
  setupNudge: string;
  midwayCheck: string;
  finalAnswer: string;
  fullSteps: string;
  sillyTrap: string;
}

export const CHAPTER_SUBPATTERNS: Record<ChapterTopicKey, readonly [string, string, string]> = {
  ch01: [
    'HCF & LCM Verification',
    'Remainder Divisor (HCF)',
    'Circular Track / Bells (LCM)',
  ],
  ch02: [
    'Zeroes α, β & Expression',
    'Form New Poly (2α+1, 2β+1)',
    'Find k from (α − β) Condition',
  ],
  ch03: [
    'Elimination Method',
    'Swapped Coeffs (Add & Sub)',
    'Infinite Solutions (k Trap)',
  ],
  ch04: [
    'Discriminant & Roots',
    'Equal Roots (a ≠ 0 Trap)',
    'Speed–Time Word Problem',
  ],
  ch05: [
    'First Negative Term',
    'kth Term from the End',
    'Find a, d & Sₙ from Two Terms',
  ],
  ch06: [
    'BPT Segment Algebra',
    'Shadow / Pole Similarity',
    'Trapezium Diagonals (BPT)',
  ],
  ch07: [
    'Equidistant Point on X-Axis',
    'X-Axis Section Ratio (k : 1)',
    '4th Vertex of Parallelogram',
  ],
  ch08: [
    'Trig Evaluation (cos²60°, sec²30°)',
    'Trig Squares (cosec², tan²)',
    'Homogeneous Ratio from tan θ',
  ],
  ch09: [
    'Building & Cable Tower (45°, 60°)',
    'Two Ships on Same Side (30°, 60°)',
    'Walk d m Closer (30° → 60°)',
  ],
  ch10: [
    'Right △OPT Tangent Length',
    'Concentric Circles Chord',
    'Tangents Inclined at 60°',
  ],
  ch11: [
    'Sector Area & Arc Length',
    'Clock Minute-Hand Swept Area',
    'Tethered Horse Increase',
  ],
  ch12: [
    'Capsule Surface Area',
    'Cone-on-Hemisphere Toy TSA',
    'Recasting (Cylinder → Cones)',
  ],
  ch13: [
    'Step-Deviation Mean',
    'Grouped Mode',
    'Grouped Median',
  ],
  ch14: [
    'Modified 52-Card Deck',
    'Numbered Discs (1 to N)',
    'Two Dice Thrown Together',
  ],
};

export const TOPIC_OPTIONS: {
  key: DrillTopicKey;
  label: string;
  shortLabel: string;
}[] = [
  { key: 'mixed', label: 'Mixed All 14 Chapters (Standard 041)', shortLabel: 'Mixed All 14 Ch' },
  { key: 'ch01', label: 'Ch 1: Real Numbers', shortLabel: 'Ch 1: Real Nos.' },
  { key: 'ch02', label: 'Ch 2: Polynomials', shortLabel: 'Ch 2: Polynomials' },
  { key: 'ch03', label: 'Ch 3: Linear Equations', shortLabel: 'Ch 3: Linear Pair' },
  { key: 'ch04', label: 'Ch 4: Quadratic Equations', shortLabel: 'Ch 4: Quadratics' },
  { key: 'ch05', label: 'Ch 5: Arithmetic Progressions', shortLabel: 'Ch 5: AP' },
  { key: 'ch06', label: 'Ch 6: Triangles', shortLabel: 'Ch 6: Triangles' },
  { key: 'ch07', label: 'Ch 7: Coordinate Geometry', shortLabel: 'Ch 7: Coordinate' },
  { key: 'ch08', label: 'Ch 8: Intro to Trigonometry', shortLabel: 'Ch 8: Trig' },
  { key: 'ch09', label: 'Ch 9: Heights & Distances', shortLabel: 'Ch 9: Heights' },
  { key: 'ch10', label: 'Ch 10: Circles', shortLabel: 'Ch 10: Circles' },
  { key: 'ch11', label: 'Ch 11: Areas Related to Circles', shortLabel: 'Ch 11: Sector Area' },
  { key: 'ch12', label: 'Ch 12: Surface Areas & Volumes', shortLabel: 'Ch 12: Mensuration' },
  { key: 'ch13', label: 'Ch 13: Statistics', shortLabel: 'Ch 13: Statistics' },
  { key: 'ch14', label: 'Ch 14: Probability', shortLabel: 'Ch 14: Probability' },
];

const CHAPTER_KEYS: readonly ChapterTopicKey[] = [
  'ch01',
  'ch02',
  'ch03',
  'ch04',
  'ch05',
  'ch06',
  'ch07',
  'ch08',
  'ch09',
  'ch10',
  'ch11',
  'ch12',
  'ch13',
  'ch14',
];

export function chapterKeyFromProblemId(id?: string): ChapterTopicKey | null {
  if (!id) return null;
  const m = /^m(0[1-9]|1[0-4])(?:-|$)/.exec(id.trim());
  if (!m) return null;
  return `ch${m[1]}` as ChapterTopicKey;
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

function lcmTwo(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs((a * b) / gcd(a, b));
}

function simplifyFrac(num: number, den: number): [number, number] {
  if (den === 0) return [num, 1];
  const sign = den < 0 ? -1 : 1;
  const n = num * sign;
  const d = Math.abs(den);
  const g = gcd(n, d);
  return [n / g, d / g];
}

function formatFrac(num: number, den: number): string {
  const [n, d] = simplifyFrac(num, den);
  if (n < 0) {
    return d === 1 ? `−${Math.abs(n)}` : `−${Math.abs(n)}/${d}`;
  }
  return d === 1 ? `${n}` : `${n}/${d}`;
}

function signedVal(n: number): string {
  return n < 0 ? `−${Math.abs(n)}` : `${n}`;
}

function parenVal(n: number): string {
  return n < 0 ? `(−${Math.abs(n)})` : `${n}`;
}

function toSuperscript(exp: number): string {
  const map: Record<string, string> = {
    '0': '⁰',
    '1': '¹',
    '2': '²',
    '3': '³',
    '4': '⁴',
    '5': '⁵',
    '6': '⁶',
    '7': '⁷',
    '8': '⁸',
    '9': '⁹',
  };
  return String(exp)
    .split('')
    .map((ch) => map[ch] ?? ch)
    .join('');
}

function primeFactorisationString(num: number): string {
  let n = Math.abs(Math.floor(num));
  if (n < 2) return String(n);
  const parts: string[] = [];
  let p = 2;
  while (p * p <= n) {
    if (n % p === 0) {
      let exp = 0;
      while (n % p === 0) {
        n = n / p;
        exp++;
      }
      parts.push(exp > 1 ? `${p}${toSuperscript(exp)}` : `${p}`);
    }
    p = p === 2 ? 3 : p + 2;
  }
  if (n > 1) parts.push(`${n}`);
  return parts.join(' × ');
}

function formatTerm(coeff: number, variable: string, isFirst = false): string {
  if (coeff === 0) return '';
  const abs = Math.abs(coeff);
  const numStr = variable ? (abs === 1 ? '' : String(abs)) : String(abs);
  if (isFirst) {
    return `${coeff < 0 ? '−' : ''}${numStr}${variable}`;
  }
  return ` ${coeff < 0 ? '−' : '+'} ${numStr}${variable}`;
}

function formatQuad(a: number, b: number, c: number, variable = 'x'): string {
  let s = formatTerm(a, `${variable}²`, true);
  if (!s) {
    s = formatTerm(b, variable, true);
    s += formatTerm(c, '', !s);
    return s || '0';
  }
  s += formatTerm(b, variable, false);
  s += formatTerm(c, '', false);
  return s;
}

function formatLinear(a: number, b: number, c: number): string {
  const xPart = formatTerm(a, 'x', true);
  const yPart = formatTerm(b, 'y', xPart === '');
  return `${xPart}${yPart} = ${signedVal(c)}`;
}

function genCh01(sub: number): GeneratedMathProblem {
  const labels = CHAPTER_SUBPATTERNS.ch01;
  if (sub === 0) {
    const g = pick([6, 8, 9, 12, 15, 18, 24, 30]);
    const [m, n] = pick([
      [2, 3],
      [3, 4],
      [3, 5],
      [4, 5],
      [5, 7],
      [4, 9],
      [5, 6],
      [7, 9],
    ]);
    const a = g * m;
    const b = g * n;
    const lcm = g * m * n;
    const prod = a * b;
    const pfA = primeFactorisationString(a);
    const pfB = primeFactorisationString(b);
    return {
      signature: `ch01-s0-${a}-${b}`,
      chapterKey: 'ch01',
      subPatternIndex: 0,
      subPatternLabel: labels[0],
      topicLabel: 'Ch 1: Real Numbers (HCF & LCM)',
      marks: 2,
      targetMinutes: 3,
      prompt: `Using prime factorisation, find the HCF and LCM of ${a} and ${b}, and verify that HCF × LCM = ${a} × ${b}.`,
      copyCheck: `Given pair: ${a} and ${b}. Write every exponent clearly before comparing min/max powers.`,
      setupNudge: `Factorise ${a} and ${b} on rough margin. Rule: HCF = smallest powers of COMMON primes; LCM = greatest powers of ALL primes present.`,
      midwayCheck: `Prime forms: ${a} = ${pfA}; ${b} = ${pfB}. That gives HCF = ${g}, LCM = ${lcm}.`,
      finalAnswer: `HCF = ${g}, LCM = ${lcm}; Check: ${g} × ${lcm} = ${prod} = ${a} × ${b}.`,
      fullSteps: `1. ${a} = ${pfA}.\n2. ${b} = ${pfB}.\n3. HCF(${a}, ${b}) = product of smallest powers of common prime factors = ${g}.\n4. LCM(${a}, ${b}) = product of greatest powers of each prime factor = ${lcm}.\n5. Verification: HCF × LCM = ${g} × ${lcm} = ${prod}, and ${a} × ${b} = ${prod}. Hence verified.`,
      sillyTrap: `Dropping an unshared prime factor while forming LCM, or swapping min and max exponents between HCF and LCM.`,
    };
  }

  if (sub === 1) {
    const g = pick([12, 14, 15, 16, 18, 21, 24, 28]);
    const [m, n] = pick([
      [3, 5],
      [4, 7],
      [5, 8],
      [4, 9],
      [7, 9],
      [5, 9],
    ]);
    const r1 = pick([2, 3, 5, 7]);
    const r2 = pick([4, 6, 8, 9]);
    const cleanX = g * m;
    const cleanY = g * n;
    const x = cleanX + r1;
    const y = cleanY + r2;
    return {
      signature: `ch01-s1-${x}-${y}-${r1}-${r2}`,
      chapterKey: 'ch01',
      subPatternIndex: 1,
      subPatternLabel: labels[1],
      topicLabel: 'Ch 1: Real Numbers (Remainder Divisor)',
      marks: 3,
      targetMinutes: 4,
      prompt: `Determine the largest positive integer that divides ${x} and ${y}, leaving remainders ${r1} and ${r2} respectively.`,
      copyCheck: `Match each remainder to its dividend FIRST: subtract ${r1} from ${x}, and ${r2} from ${y}.`,
      setupNudge: `Required number = HCF(${x} − ${r1}, ${y} − ${r2}) = HCF(${cleanX}, ${cleanY}).`,
      midwayCheck: `${cleanX} = ${primeFactorisationString(cleanX)} and ${cleanY} = ${primeFactorisationString(cleanY)}.`,
      finalAnswer: `Largest required integer = ${g}.`,
      fullSteps: `1. Since ${x} leaves remainder ${r1}, exact multiple = ${x} − ${r1} = ${cleanX}.\n2. Since ${y} leaves remainder ${r2}, exact multiple = ${y} − ${r2} = ${cleanY}.\n3. Prime factorise: ${cleanX} = ${primeFactorisationString(cleanX)}, ${cleanY} = ${primeFactorisationString(cleanY)}.\n4. HCF(${cleanX}, ${cleanY}) = ${g} (and ${g} > max(${r1}, ${r2}) ✓).\n5. Hence the required largest integer is ${g}.`,
      sillyTrap: `Computing LCM instead of HCF ("largest integer" dividing given numbers means HCF), or subtracting the wrong remainder from each number.`,
    };
  }

  const [t1, t2, t3] = pick([
    [12, 15, 20],
    [10, 12, 15],
    [8, 12, 18],
    [15, 20, 25],
    [12, 18, 24],
    [9, 12, 15],
    [14, 21, 28],
    [10, 15, 25],
    [16, 24, 36],
  ]);
  const startHr = pick([6, 7, 8]);
  const lcmVal = lcmTwo(lcmTwo(t1, t2), t3);
  const totalMin = startHr * 60 + lcmVal;
  const endHr = Math.floor(totalMin / 60);
  const endMin = totalMin % 60;
  const hrLabel = endHr > 12 ? `${endHr - 12}` : `${endHr}`;
  const ampm = endHr >= 12 ? 'p.m.' : 'a.m.';
  const endClock = `${hrLabel}:${String(endMin).padStart(2, '0')} ${ampm}`;
  const hrsDur = Math.floor(lcmVal / 60);
  const minsDur = lcmVal % 60;
  const durStr =
    hrsDur > 0 && minsDur > 0
      ? `${hrsDur} hr ${minsDur} min`
      : hrsDur > 0
      ? `${hrsDur} hr`
      : `${minsDur} min`;

  return {
    signature: `ch01-s2-${t1}-${t2}-${t3}-${startHr}`,
    chapterKey: 'ch01',
    subPatternIndex: 2,
    subPatternLabel: labels[2],
    topicLabel: 'Ch 1: Real Numbers (LCM Word Problem)',
    marks: 3,
    targetMinutes: 4,
    prompt: `Three athletes start jogging together at ${startHr}:00 a.m. around a circular track. They complete one full lap in ${t1} min, ${t2} min, and ${t3} min respectively. After how many minutes will they all meet again at the starting point, and at what time?`,
    copyCheck: `Meeting again at a future simultaneous point requires a MULTIPLE ≥ max(${t1}, ${t2}, ${t3}) → take LCM, NOT HCF!`,
    setupNudge: `Find LCM(${t1}, ${t2}, ${t3}) by prime factorisation, then add those minutes to ${startHr}:00 a.m.`,
    midwayCheck: `${t1} = ${primeFactorisationString(t1)}, ${t2} = ${primeFactorisationString(t2)}, ${t3} = ${primeFactorisationString(t3)} → LCM = ${lcmVal} min.`,
    finalAnswer: `They meet again after ${lcmVal} minutes (${durStr}), i.e., at ${endClock}.`,
    fullSteps: `1. Time to meet together at the start = LCM(${t1}, ${t2}, ${t3}).\n2. Prime factorise: ${t1} = ${primeFactorisationString(t1)}, ${t2} = ${primeFactorisationString(t2)}, ${t3} = ${primeFactorisationString(t3)}.\n3. Take greatest exponent of each prime factor: LCM = ${lcmVal} minutes (${durStr}).\n4. Adding ${lcmVal} min to ${startHr}:00 a.m. gives ${endClock}.`,
    sillyTrap: `Taking HCF instead of LCM, or misconverting minutes above 60 when adding to the clock time (1 hr = 60 min, not 100!).`,
  };
}

function genCh02(sub: number): GeneratedMathProblem {
  const labels = CHAPTER_SUBPATTERNS.ch02;
  if (sub === 0) {
    const [p, r] = pick([
      [1, 1],
      [2, 1],
      [3, 1],
      [2, 3],
    ]);
    const qChoices = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5].filter((v) => gcd(p, v) === 1);
    const sChoices = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5].filter((v) => gcd(r, v) === 1);
    const q = pick(qChoices);
    let s = pick(sChoices);
    if (p * s + q * r === 0) {
      const alt = sChoices.filter((v) => p * v + q * r !== 0);
      s = alt[0] ?? 1;
    }
    const a = p * r;
    const b = p * s + q * r;
    const c = q * s;
    const poly = formatQuad(a, b, c);
    const alphaStr = formatFrac(-q, p);
    const betaStr = formatFrac(-s, r);
    const sumStr = formatFrac(-b, a);
    const prodStr = formatFrac(c, a);
    const askType = pick(['recip', 'sq', 'ratio'] as const);
    const exprLabel =
      askType === 'recip' ? '1/α + 1/β' : askType === 'sq' ? 'α² + β²' : 'α/β + β/α';
    const exprValue =
      askType === 'recip'
        ? formatFrac(-b, c)
        : askType === 'sq'
        ? formatFrac(b * b - 2 * a * c, a * a)
        : formatFrac(b * b - 2 * a * c, a * c);

    return {
      signature: `ch02-s0-${a}-${b}-${c}-${askType}`,
      chapterKey: 'ch02',
      subPatternIndex: 0,
      subPatternLabel: labels[0],
      topicLabel: 'Ch 2: Polynomials (α, β & Verification)',
      marks: 3,
      targetMinutes: 4,
      prompt: `Find the zeroes α and β of p(x) = ${poly}, verify the relationship between zeroes and coefficients, and hence compute ${exprLabel}.`,
      copyCheck: `Standard form coefficients: a = ${a}, b = ${signedVal(b)}, c = ${signedVal(c)}. Watch the minus in −b/a!`,
      setupNudge: `Factorise ${poly} = (${formatTerm(p, 'x', true)}${formatTerm(q, '', false)})(${formatTerm(r, 'x', true)}${formatTerm(s, '', false)}). Recall α + β = −b/a and αβ = c/a.`,
      midwayCheck: `Zeroes: α = ${alphaStr}, β = ${betaStr}; Sum = ${sumStr}, Product = ${prodStr}.`,
      finalAnswer: `Zeroes: ${alphaStr}, ${betaStr}; ${exprLabel} = ${exprValue}.`,
      fullSteps: `1. Set ${poly} = 0 → (${formatTerm(p, 'x', true)}${formatTerm(q, '', false)})(${formatTerm(r, 'x', true)}${formatTerm(s, '', false)}) = 0 → α = ${alphaStr}, β = ${betaStr}.\n2. Verify sum: α + β = ${alphaStr} + (${betaStr}) = ${sumStr} = −${parenVal(b)}/${a} = −b/a ✓.\n3. Verify product: αβ = (${alphaStr})(${betaStr}) = ${prodStr} = ${signedVal(c)}/${a} = c/a ✓.\n4. ${
        askType === 'recip'
          ? `1/α + 1/β = (α + β)/(αβ) = (${sumStr})/(${prodStr}) = ${exprValue}.`
          : askType === 'sq'
          ? `α² + β² = (α + β)² − 2αβ = (${sumStr})² − 2(${prodStr}) = ${exprValue}.`
          : `α/β + β/α = (α² + β²)/(αβ) = [(α + β)² − 2αβ]/(αβ) = ${exprValue}.`
      }`,
      sillyTrap: `Dropping the minus sign inside −b/a when b is negative, or forgetting −2αβ in α² + β² = (α + β)² − 2αβ.`,
    };
  }

  if (sub === 1) {
    const pairs: [number, number][] = [
      [-5, 4],
      [-5, 6],
      [-4, 3],
      [-3, -4],
      [3, -4],
      [4, -5],
      [5, 6],
      [-6, 5],
      [7, 6],
      [-7, 10],
    ];
    const [b, c] = pick(pairs);
    const origPoly = formatQuad(1, b, c);
    const S1 = 2 - 2 * b;
    const P1 = 4 * c - 2 * b + 1;
    const newPoly = formatQuad(1, -S1, P1);

    return {
      signature: `ch02-s1-${b}-${c}`,
      chapterKey: 'ch02',
      subPatternIndex: 1,
      subPatternLabel: labels[1],
      topicLabel: 'Ch 2: Polynomials (Transform Roots)',
      marks: 3,
      targetMinutes: 4,
      prompt: `If α and β are the zeroes of p(x) = ${origPoly}, WITHOUT finding α and β separately, form a quadratic polynomial whose zeroes are (2α + 1) and (2β + 1).`,
      copyCheck: `Original coefficients: a = 1, b = ${signedVal(b)}, c = ${signedVal(c)}, so α + β = ${signedVal(-b)} and αβ = ${signedVal(c)}.`,
      setupNudge: `Compute new Sum S' = (2α + 1) + (2β + 1) = 2(α + β) + 2 and new Product P' = (2α + 1)(2β + 1) = 4αβ + 2(α + β) + 1. Then write k(x² − S'x + P').`,
      midwayCheck: `New Sum S' = ${signedVal(S1)} and New Product P' = ${signedVal(P1)}.`,
      finalAnswer: `Required polynomial: k(${newPoly}) (for k = 1: ${newPoly}).`,
      fullSteps: `1. From ${origPoly}: α + β = −${parenVal(b)} = ${signedVal(-b)}, αβ = ${signedVal(c)}.\n2. S' = (2α + 1) + (2β + 1) = 2(α + β) + 2 = 2(${signedVal(-b)}) + 2 = ${signedVal(S1)}.\n3. P' = (2α + 1)(2β + 1) = 4αβ + 2(α + β) + 1 = 4(${signedVal(c)}) + 2(${signedVal(-b)}) + 1 = ${signedVal(P1)}.\n4. Quadratic polynomial: x² − S'x + P' = ${newPoly} (or k(${newPoly}), k ≠ 0).`,
      sillyTrap: `Expanding (2α + 1)(2β + 1) as 4αβ + 1 (missing the middle term 2(α + β)!), or using +S'x instead of −S'x.`,
    };
  }

  const r1 = pick([4, 5, 6, 7, 8]);
  const r2 = pick([-3, -2, -1, 1, 2, 3]);
  const S = r1 + r2;
  const d = r1 - r2;
  const kVal = r1 * r2;
  const polyLead = formatQuad(1, -S, 0);

  return {
    signature: `ch02-s2-${r1}-${r2}`,
    chapterKey: 'ch02',
    subPatternIndex: 2,
    subPatternLabel: labels[2],
    topicLabel: 'Ch 2: Polynomials (Condition on Zeroes)',
    marks: 3,
    targetMinutes: 4,
    prompt: `If α and β are the zeroes of the quadratic polynomial f(x) = ${polyLead} + k such that α − β = ${d}, find the value of k.`,
    copyCheck: `Check coefficient b = ${signedVal(-S)}, so α + β = −(${signedVal(-S)}) = ${S} (positive/negative sign careful!).`,
    setupNudge: `Write α + β = ${S} and αβ = k. Solve simultaneous equations α + β = ${S} and α − β = ${d} (OR use (α + β)² − (α − β)² = 4αβ).`,
    midwayCheck: `Adding α + β = ${S} and α − β = ${d} gives 2α = ${S + d} → α = ${r1}, β = ${signedVal(r2)}.`,
    finalAnswer: `k = ${signedVal(kVal)}.`,
    fullSteps: `1. Here a = 1, b = ${signedVal(-S)}, c = k → α + β = ${S} and αβ = k.\n2. Identity method: (α − β)² = (α + β)² − 4αβ → ${d}² = (${S})² − 4k.\n3. ${d * d} = ${S * S} − 4k → 4k = ${S * S - d * d} → k = ${signedVal(kVal)}.\n4. Check by direct zeroes: α = ${r1}, β = ${signedVal(r2)} → α − β = ${d} ✓ and αβ = ${signedVal(kVal)} ✓.`,
    sillyTrap: `Taking α + β = ${signedVal(-S)} instead of −b/a = ${S}, or forgetting the factor 4 in (α + β)² − (α − β)² = 4αβ.`,
  };
}

function genCh03(sub: number): GeneratedMathProblem {
  const labels = CHAPTER_SUBPATTERNS.ch03;
  if (sub === 0) {
    const x0 = pick([-4, -3, -2, -1, 2, 3, 4, 5]);
    const y0 = pick([-4, -3, -2, 1, 2, 3, 4, 5]);
    const a1 = pick([2, 3, 4, 5]);
    const b1 = pick([-5, -3, -2, 2, 3]);
    const a2 = pick([1, 2, 3, 4]);
    let b2 = pick([-4, -3, -2, 3, 5]);
    if (a1 * b2 - a2 * b1 === 0) b2 = b2 + 1;
    const c1 = a1 * x0 + b1 * y0;
    const c2 = a2 * x0 + b2 * y0;
    const eq1Scaled = formatLinear(a1 * a2, b1 * a2, c1 * a2);
    const eq2Scaled = formatLinear(a2 * a1, b2 * a1, c2 * a1);
    const yCoeff = b1 * a2 - b2 * a1;
    const rhsDiff = c1 * a2 - c2 * a1;

    return {
      signature: `ch03-s0-${a1}-${b1}-${c1}-${a2}-${b2}-${c2}`,
      chapterKey: 'ch03',
      subPatternIndex: 0,
      subPatternLabel: labels[0],
      topicLabel: 'Ch 3: Linear Pair (Elimination)',
      marks: 3,
      targetMinutes: 4,
      prompt: `Solve the following pair of linear equations in two variables by the elimination method:\n(i) ${formatLinear(a1, b1, c1)}\n(ii) ${formatLinear(a2, b2, c2)}`,
      copyCheck: `Check signs of both y-terms (${signedVal(b1)}y, ${signedVal(b2)}y) and RHS (${signedVal(c1)}, ${signedVal(c2)}) before multiplying!`,
      setupNudge: `Multiply Eq (i) by ${a2} and Eq (ii) by ${a1} to make the x-coefficients equal (${a1 * a2}x), then subtract carefully with brackets.`,
      midwayCheck: `Eliminating x gives ${yCoeff}y = ${signedVal(rhsDiff)} → y = ${signedVal(y0)}.`,
      finalAnswer: `x = ${signedVal(x0)}, y = ${signedVal(y0)}.`,
      fullSteps: `1. ${a2} × Eq (i): ${eq1Scaled}.\n2. ${a1} × Eq (ii): ${eq2Scaled}.\n3. Subtract to eliminate x: ${yCoeff}y = ${signedVal(rhsDiff)} → y = ${signedVal(y0)}.\n4. Substitute y = ${signedVal(y0)} into Eq (i): ${a1}x + ${parenVal(b1)}·${parenVal(y0)} = ${signedVal(c1)} → x = ${signedVal(x0)}.\n5. Plug-back check in Eq (ii): ${a2}${parenVal(x0)} + ${parenVal(b2)}${parenVal(y0)} = ${signedVal(c2)} ✓.`,
      sillyTrap: `Flipping the sign of ONLY the x-term during subtraction while leaving the y-term or RHS constant unflipped!`,
    };
  }

  if (sub === 1) {
    const [a, b] = pick([
      [17, 23],
      [21, 29],
      [31, 47],
      [37, 43],
      [41, 53],
      [29, 41],
    ]);
    const x0 = pick([-3, -2, 1, 2, 3, 4, 5]);
    const yOpts = [-2, 1, 2, 3, 4, 5].filter((v) => v !== x0 && v + x0 !== 0);
    const y0 = pick(yOpts);
    const c1 = a * x0 + b * y0;
    const c2 = b * x0 + a * y0;
    const sumAB = a + b;
    const diffAB = a - b;
    const sumRHS = c1 + c2;
    const diffRHS = c1 - c2;

    return {
      signature: `ch03-s1-${a}-${b}-${x0}-${y0}`,
      chapterKey: 'ch03',
      subPatternIndex: 1,
      subPatternLabel: labels[1],
      topicLabel: 'Ch 3: Symmetric Linear Pair',
      marks: 3,
      targetMinutes: 4,
      prompt: `Solve for x and y using the Add-Once & Subtract-Once shortcut (avoid multiplying large numbers!):\n(i) ${a}x + ${b}y = ${signedVal(c1)}\n(ii) ${b}x + ${a}y = ${signedVal(c2)}`,
      copyCheck: `Notice coefficients ${a} and ${b} are SWAPPED! Never multiply by ${b} and ${a} — add (i)+(ii) and subtract (i)−(ii) first.`,
      setupNudge: `Step 1: Add (i) + (ii) and divide by ${sumAB} to get (x + y). Step 2: Subtract (i) − (ii) and divide by ${diffAB} to get (x − y).`,
      midwayCheck: `x + y = ${signedVal(x0 + y0)} and x − y = ${signedVal(x0 - y0)}.`,
      finalAnswer: `x = ${signedVal(x0)}, y = ${signedVal(y0)}.`,
      fullSteps: `1. Add (i) + (ii): ${sumAB}x + ${sumAB}y = ${signedVal(sumRHS)} → divide by ${sumAB}: x + y = ${signedVal(x0 + y0)} ... (iii).\n2. Subtract (i) − (ii): ${diffAB}x + ${-diffAB}y = ${signedVal(diffRHS)} → divide by (${diffAB}): x − y = ${signedVal(x0 - y0)} ... (iv).\n3. Add (iii) + (iv): 2x = ${signedVal(2 * x0)} → x = ${signedVal(x0)}.\n4. Substitute into (iii): y = ${signedVal(x0 + y0)} − ${parenVal(x0)} = ${signedVal(y0)}.`,
      sillyTrap: `Dividing (i) − (ii) by (${Math.abs(diffAB)}) instead of (${signedVal(diffAB)}), reversing the sign of (x − y)!`,
    };
  }

  const m = pick([2, 3, 4, 5, 6]);
  const ansK = 2 * m;
  return {
    signature: `ch03-s2-${m}`,
    chapterKey: 'ch03',
    subPatternIndex: 2,
    subPatternLabel: labels[2],
    topicLabel: 'Ch 3: Infinite Solutions (k Trap)',
    marks: 3,
    targetMinutes: 4,
    prompt: `Find the value(s) of k for which the pair of linear equations has INFINITELY MANY solutions:\n(i) kx + ${m}y = k − ${m}\n(ii) ${4 * m}x + ky = k`,
    copyCheck: `Infinite solutions require ALL THREE ratios equal: a₁/a₂ = b₁/b₂ = c₁/c₂. NEVER stop after checking only a₁/a₂ = b₁/b₂!`,
    setupNudge: `Set k/${4 * m} = ${m}/k AND ${m}/k = (k − ${m})/k, OR find k = ±${ansK} from the first equality and TEST both values in c₁/c₂.`,
    midwayCheck: `k² = ${4 * m * m} gives two candidates k = +${ansK} and k = −${ansK}. Only ONE satisfies b₁/b₂ = c₁/c₂!`,
    finalAnswer: `k = ${ansK} (k = −${ansK} is rejected because b₁/b₂ = −1/2 while c₁/c₂ = 3/2).`,
    fullSteps: `1. For infinitely many solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ → k/${4 * m} = ${m}/k = (k − ${m})/k.\n2. From first pair: k² = ${4 * m * m} → k = +${ansK} or k = −${ansK}.\n3. Test k = +${ansK}: ratios are ${ansK}/${4 * m} = 1/2, ${m}/${ansK} = 1/2, (${ansK} − ${m})/${ansK} = 1/2 ✓.\n4. Test k = −${ansK}: b₁/b₂ = ${m}/(−${ansK}) = −1/2, but c₁/c₂ = (−${3 * m})/(−${ansK}) = 3/2 ≠ −1/2 (parallel lines!).\n5. Therefore unique answer: k = ${ansK}.`,
    sillyTrap: `Writing k = ±${ansK} from k² = ${4 * m * m} without testing against c₁/c₂ — loses 1 full CBSE mark!`,
  };
}

function genCh04(sub: number): GeneratedMathProblem {
  const labels = CHAPTER_SUBPATTERNS.ch04;
  if (sub === 0) {
    const p = pick([1, 2, 3]);
    const r = pick([1, 2]);
    const q = pick([-7, -5, -4, -3, -2, 1, 2, 3]);
    const sChoices = [-6, -5, -3, -2, 2, 3, 4, 5].filter(
      (v) => p * v + q * r !== 0 && p * v !== q * r
    );
    const s = pick(sChoices);
    const a = p * r;
    const b = p * s + q * r;
    const c = q * s;
    const D = b * b - 4 * a * c;
    const sqrtD = Math.round(Math.sqrt(D));
    const r1 = formatFrac(-q, p);
    const r2 = formatFrac(-s, r);
    return {
      signature: `ch04-s0-${a}-${b}-${c}`,
      chapterKey: 'ch04',
      subPatternIndex: 0,
      subPatternLabel: labels[0],
      topicLabel: 'Ch 4: Quadratic Equations (Roots)',
      marks: 3,
      targetMinutes: 4,
      prompt: `Find the roots of the quadratic equation ${formatQuad(a, b, c)} = 0 using the quadratic formula, and verify both roots by substitution.`,
      copyCheck: `Identify a = ${a}, b = ${signedVal(b)}, c = ${signedVal(c)}. Put brackets around (${signedVal(b)})² and (−4)(${a})(${signedVal(c)})!`,
      setupNudge: `Evaluate Discriminant D = b² − 4ac = (${signedVal(b)})² − 4(${a})(${signedVal(c)}), then use x = (−b ± √D)/(2a).`,
      midwayCheck: `D = ${D}, so √D = ${sqrtD}.`,
      finalAnswer: `Roots: x = ${r1} and x = ${r2}.`,
      fullSteps: `1. Here a = ${a}, b = ${signedVal(b)}, c = ${signedVal(c)}.\n2. D = (${signedVal(b)})² − 4(${a})(${signedVal(c)}) = ${b * b} − ${parenVal(4 * a * c)} = ${D}.\n3. x = [−${parenVal(b)} ± ${sqrtD}] / ${2 * a} = [${signedVal(-b)} ± ${sqrtD}] / ${2 * a}.\n4. Taking + gives x = ${r1}; taking − gives x = ${r2}.`,
      sillyTrap: `Writing −7² = −49 instead of (−7)² = +49, or forgetting that subtracting negative 4ac flips to +!`,
    };
  }

  if (sub === 1) {
    const offset = pick([1, 2, 3, 4, 5, 6]);
    const m = pick([2, 3, 4, 5, 6, 7]);
    const ansK = offset + m;
    return {
      signature: `ch04-s1-${offset}-${m}`,
      chapterKey: 'ch04',
      subPatternIndex: 1,
      subPatternLabel: labels[1],
      topicLabel: 'Ch 4: Equal Real Roots (a ≠ 0 Trap)',
      marks: 3,
      targetMinutes: 4,
      prompt: `Find the value of k for which the quadratic equation (k − ${offset})x² + 2(k − ${offset})x + ${m} = 0 has two equal real roots.`,
      copyCheck: `Leading coefficient is a = (k − ${offset}), b = 2(k − ${offset}), c = ${m}. Keep a ≠ 0 strictly in mind!`,
      setupNudge: `For equal real roots: D = b² − 4ac = 0 AND a = k − ${offset} ≠ 0. Factor D instead of dividing blindly!`,
      midwayCheck: `D = 4(k − ${offset})[(k − ${offset}) − ${m}] = 0 → k = ${offset} or k = ${ansK}.`,
      finalAnswer: `k = ${ansK} (k = ${offset} is rejected because a = 0).`,
      fullSteps: `1. a = k − ${offset}, b = 2(k − ${offset}), c = ${m}.\n2. Put D = b² − 4ac = 0 → 4(k − ${offset})² − 4(${m})(k − ${offset}) = 0.\n3. Factor out 4(k − ${offset}): 4(k − ${offset})(k − ${ansK}) = 0 → k = ${offset} or k = ${ansK}.\n4. Reject k = ${offset} because the x² term becomes 0 (not quadratic). Hence k = ${ansK}.`,
      sillyTrap: `Accepting k = ${offset} without checking that a ≠ 0 for a quadratic equation ax² + bx + c = 0!`,
    };
  }

  const [dist, speed, inc, dt] = pick([
    [360, 40, 5, 1],
    [480, 40, 8, 2],
    [300, 50, 10, 1],
    [240, 40, 20, 2],
    [400, 40, 10, 2],
    [180, 36, 9, 1],
    [600, 50, 10, 2],
  ]);
  const prodConst = (dist * inc) / dt;
  const negRoot = -(speed + inc);
  return {
    signature: `ch04-s2-${dist}-${speed}-${inc}`,
    chapterKey: 'ch04',
    subPatternIndex: 2,
    subPatternLabel: labels[2],
    topicLabel: 'Ch 4: Speed–Time Word Problem',
    marks: 5,
    targetMinutes: 6,
    prompt: `A passenger train covers a journey of ${dist} km at a uniform speed. Had the average speed been ${inc} km/h higher, the trip would have finished ${dt} ${dt === 1 ? 'hour' : 'hours'} sooner. Determine the original speed of the train.`,
    copyCheck: `SLOWER time − FASTER time = ${dt} hr → ${dist}/x − ${dist}/(x + ${inc}) = ${dt} (NOT the other way around!).`,
    setupNudge: `Let original speed = x km/h (x > 0). Write ${dist}/x − ${dist}/(x + ${inc}) = ${dt}, take LCM x(x + ${inc}), and form the quadratic.`,
    midwayCheck: `Cross-multiplying gives x² + ${inc}x − ${prodConst} = 0.`,
    finalAnswer: `Original speed of train = ${speed} km/h.`,
    fullSteps: `1. Let usual speed = x km/h. Time₁ = ${dist}/x, Time₂ = ${dist}/(x + ${inc}).\n2. ${dist}/x − ${dist}/(x + ${inc}) = ${dt} → ${dist}(x + ${inc} − x) / [x(x + ${inc})] = ${dt}.\n3. ${dist * inc} = ${dt}x(x + ${inc}) → x² + ${inc}x − ${prodConst} = 0.\n4. Factorise: (x − ${speed})(x + ${Math.abs(negRoot)}) = 0 → x = ${speed} or x = ${signedVal(negRoot)}.\n5. Speed cannot be negative, so usual speed = ${speed} km/h. Check: ${dist}/${speed} − ${dist}/${speed + inc} = ${dist / speed} − ${dist / (speed + inc)} = ${dt} hr ✓.`,
    sillyTrap: `Reversing the subtraction to ${dist}/(x + ${inc}) − ${dist}/x = ${dt}, which gives a negative LHS and invalid equation!`,
  };
}

function genCh05(sub: number): GeneratedMathProblem {
  const labels = CHAPTER_SUBPATTERNS.ch05;
  if (sub === 0) {
    const d = pick([-3, -4, -5, -6, -7]);
    const a = randInt(35, 118);
    const nAns = Math.floor(a / -d) + 2;
    const termAns = a + (nAns - 1) * d;
    const prevTerm = a + (nAns - 2) * d;
    return {
      signature: `ch05-s0-${a}-${d}`,
      chapterKey: 'ch05',
      subPatternIndex: 0,
      subPatternLabel: labels[0],
      topicLabel: 'Ch 5: AP (First Negative Term)',
      marks: 3,
      targetMinutes: 4,
      prompt: `Which term of the AP: ${a}, ${a + d}, ${a + 2 * d}, ... is its first negative term? Also state that negative term.`,
      copyCheck: `Check common difference d = a₂ − a₁ = ${a + d} − ${a} = ${signedVal(d)} (NEGATIVE!).`,
      setupNudge: `Set aₙ < 0 → ${a} + (n − 1)(${signedVal(d)}) < 0. Move the negative term to RHS carefully before dividing.`,
      midwayCheck: `(n − 1)(${-d}) > ${a} → n > 1 + ${(a / -d).toFixed(2).replace(/\.00$/, '')}.`,
      finalAnswer: `${nAns}th term is the first negative term (a_${nAns} = ${signedVal(termAns)}).`,
      fullSteps: `1. Here a = ${a}, d = ${signedVal(d)}.\n2. For negative term: aₙ < 0 → ${a} + (n − 1)(${signedVal(d)}) < 0.\n3. ${a} < ${-d}(n − 1) → n − 1 > ${a}/${-d} → n > ${(1 + a / -d).toFixed(2).replace(/\.00$/, '')}.\n4. Smallest integer n = ${nAns}.\n5. Check: a_${nAns - 1} = ${prevTerm} ≥ 0, a_${nAns} = ${signedVal(termAns)} < 0 ✓.`,
      sillyTrap: `Taking d = +${-d} instead of ${signedVal(d)}, or picking n where aₙ = 0 (zero is NOT negative!).`,
    };
  }

  if (sub === 1) {
    const a = randInt(3, 18);
    const d = pick([3, 4, 5, 6, 7]);
    const N = randInt(20, 34);
    const last = a + (N - 1) * d;
    const k = randInt(4, 12);
    const ans = last - (k - 1) * d;
    return {
      signature: `ch05-s1-${a}-${d}-${last}-${k}`,
      chapterKey: 'ch05',
      subPatternIndex: 1,
      subPatternLabel: labels[1],
      topicLabel: 'Ch 5: AP (Term from the End)',
      marks: 2,
      targetMinutes: 3,
      prompt: `Find the ${k}th term FROM THE END of the finite AP: ${a}, ${a + d}, ${a + 2 * d}, ..., ${last}.`,
      copyCheck: `Notice "FROM THE END"! Reverse AP has first term l = ${last} and common difference −d = −${d}.`,
      setupNudge: `Direct formula: kth term from the end = l − (k − 1)d = ${last} − (${k} − 1) × ${d}.`,
      midwayCheck: `(${k} − 1) × ${d} = ${(k - 1) * d}.`,
      finalAnswer: `${k}th term from the end = ${ans}.`,
      fullSteps: `1. Given AP has d = ${d}, last term l = ${last}.\n2. In reverse order: first term = ${last}, common difference = −${d}.\n3. ${k}th term from the end = ${last} + (${k} − 1)(−${d}) = ${last} − ${(k - 1) * d} = ${ans}.`,
      sillyTrap: `Finding the ${k}th term from the BEGINNING (${a + (k - 1) * d}) by misreading the question!`,
    };
  }

  const a0 = randInt(2, 9);
  const d = pick([2, 3, 4, 5, 6]);
  const p = pick([3, 4, 5, 6]);
  const q = pick([9, 10, 11, 12, 13]);
  const N = pick([15, 16, 18, 20, 22, 24]);
  const ap = a0 + (p - 1) * d;
  const aq = a0 + (q - 1) * d;
  const sumN = (N * (2 * a0 + (N - 1) * d)) / 2;

  return {
    signature: `ch05-s2-${a0}-${d}-${p}-${q}-${N}`,
    chapterKey: 'ch05',
    subPatternIndex: 2,
    subPatternLabel: labels[2],
    topicLabel: 'Ch 5: AP (a, d & Sum of N Terms)',
    marks: 5,
    targetMinutes: 5,
    prompt: `In an AP, the ${p}th term is ${ap} and the ${q}th term is ${aq}. Find the first term a, common difference d, and the sum of its first ${N} terms (S_${N}).`,
    copyCheck: `Write a_${p} = a + ${p - 1}d (NOT ${p}d!) and a_${q} = a + ${q - 1}d (NOT ${q}d!).`,
    setupNudge: `Set up Eq (1): a + ${p - 1}d = ${ap} and Eq (2): a + ${q - 1}d = ${aq}. Subtract (1) from (2) to get d, then compute S_${N} = (${N}/2)[2a + (${N} − 1)d].`,
    midwayCheck: `${q - p}d = ${aq - ap} → d = ${d}, a = ${a0}.`,
    finalAnswer: `a = ${a0}, d = ${d}, S_${N} = ${sumN}.`,
    fullSteps: `1. a + ${p - 1}d = ${ap} ... (1) and a + ${q - 1}d = ${aq} ... (2).\n2. Subtract (1) from (2): ${q - p}d = ${aq - ap} → d = ${d}.\n3. Substitute into (1): a + ${(p - 1) * d} = ${ap} → a = ${a0}.\n4. S_${N} = (${N}/2)[2(${a0}) + (${N} − 1)(${d})] = (${N}/2)[${2 * a0} + ${(N - 1) * d}] = ${sumN}.`,
    sillyTrap: `Using (n)d instead of (n − 1)d inside both aₙ and Sₙ, or forgetting 2a inside Sₙ = (n/2)[2a + (n − 1)d].`,
  };
}

function genCh06(sub: number): GeneratedMathProblem {
  const labels = CHAPTER_SUBPATTERNS.ch06;
  if (sub === 0) {
    const s = pick([1, 2, 3, 4, 5]);
    const ans = 4 * s;
    return {
      signature: `ch06-s0-${s}`,
      chapterKey: 'ch06',
      subPatternIndex: 0,
      subPatternLabel: labels[0],
      topicLabel: 'Ch 6: Triangles (BPT Algebra)',
      marks: 3,
      targetMinutes: 4,
      prompt: `In △ABC, D and E are points on sides AB and AC respectively such that DE ∥ BC. If AD = x cm, DB = (x − ${2 * s}) cm, AE = (x + ${2 * s}) cm, and EC = (x − ${s}) cm, find x.`,
      copyCheck: `Pair matching segments cleanly: AD/DB = AE/EC. Watch signs before cross-multiplying!`,
      setupNudge: `Since DE ∥ BC, by BPT (Thales Theorem): x / (x − ${2 * s}) = (x + ${2 * s}) / (x − ${s}).`,
      midwayCheck: `x² − ${s}x = x² − ${4 * s * s} (x² cancels on both sides!).`,
      finalAnswer: `x = ${ans} cm.`,
      fullSteps: `1. In △ABC, DE ∥ BC ⇒ AD/DB = AE/EC (by BPT).\n2. x / (x − ${2 * s}) = (x + ${2 * s}) / (x − ${s}).\n3. Cross-multiply: x(x − ${s}) = (x − ${2 * s})(x + ${2 * s}).\n4. x² − ${s}x = x² − ${4 * s * s} ⇒ −${s}x = −${4 * s * s} ⇒ x = ${ans} cm.\n5. Check lengths > 0: AD = ${ans}, DB = ${2 * s}, AE = ${6 * s}, EC = ${3 * s} ✓.`,
      sillyTrap: `Mixing up (x − ${2 * s})(x + ${2 * s}) = x² − ${4 * s * s} or forming wrong ratio AD/AB = AE/EC.`,
    };
  }

  if (sub === 1) {
    const h1 = pick([4, 5, 6, 7, 8, 9]);
    const s1 = pick([3, 4, 5, 6]);
    const mult = pick([3, 4, 5, 6, 7]);
    const s2 = s1 * mult;
    const h2 = h1 * mult;
    return {
      signature: `ch06-s1-${h1}-${s1}-${mult}`,
      chapterKey: 'ch06',
      subPatternIndex: 1,
      subPatternLabel: labels[1],
      topicLabel: 'Ch 6: Triangles (AA Similarity)',
      marks: 2,
      targetMinutes: 3,
      prompt: `At a certain time of day, a vertical pole of height ${h1} m casts a shadow ${s1} m long on level ground. At the exact same time, a nearby vertical tower casts a shadow ${s2} m long. Find the height of the tower using triangle similarity.`,
      copyCheck: `Put Pole height & Pole shadow in the numerator, and Tower height & Tower shadow in the denominator consistently!`,
      setupNudge: `Both right triangles share 90° and identical solar elevation angle ⇒ similar by AA criterion ⇒ (Tower Height)/${h1} = ${s2}/${s1}.`,
      midwayCheck: `Shadow scale ratio = ${s2}/${s1} = ${mult}.`,
      finalAnswer: `Height of the tower = ${h2} m.`,
      fullSteps: `1. Let pole AB = ${h1} m (shadow BC = ${s1} m) and tower PQ = h m (shadow QR = ${s2} m).\n2. In △ABC and △PQR: ∠B = ∠Q = 90° and ∠C = ∠R (same Sun elevation).\n3. By AA similarity, △ABC ~ △PQR ⇒ PQ/AB = QR/BC.\n4. h/${h1} = ${s2}/${s1} = ${mult} ⇒ h = ${h1} × ${mult} = ${h2} m.`,
      sillyTrap: `Inverting one side of the proportion (${h1}/h = ${s2}/${s1}) or skipping the AA similarity justification!`,
    };
  }

  const t = pick([1, 2, 3, 4]);
  const ans = 5 * t;
  return {
    signature: `ch06-s2-${t}`,
    chapterKey: 'ch06',
    subPatternIndex: 2,
    subPatternLabel: labels[2],
    topicLabel: 'Ch 6: Triangles (Trapezium Diagonals)',
    marks: 3,
    targetMinutes: 4,
    prompt: `In trapezium ABCD with AB ∥ DC, diagonals AC and BD intersect at O. If OA = (x + ${t}) cm, OC = (x − ${t}) cm, OB = (x − ${2 * t}) cm, and OD = (x − ${3 * t}) cm, find x.`,
    copyCheck: `Since AB ∥ DC, △AOB ~ △COD (alternate interior angles!) ⇒ OA/OC = OB/OD. Check every sign in all four binomials!`,
    setupNudge: `Write (x + ${t}) / (x − ${t}) = (x − ${2 * t}) / (x − ${3 * t}) and cross-multiply carefully.`,
    midwayCheck: `LHS = x² − ${2 * t}x − ${3 * t * t}; RHS = x² − ${3 * t}x + ${2 * t * t}.`,
    finalAnswer: `x = ${ans} cm.`,
    fullSteps: `1. Since AB ∥ DC, in △AOB and △COD: ∠OAB = ∠OCD, ∠OBA = ∠ODC (alt. interior) ⇒ △AOB ~ △COD (AA).\n2. Therefore OA/OC = OB/OD ⇒ (x + ${t})/(x − ${t}) = (x − ${2 * t})/(x − ${3 * t}).\n3. Cross-multiply: (x + ${t})(x − ${3 * t}) = (x − ${t})(x − ${2 * t}).\n4. x² − ${2 * t}x − ${3 * t * t} = x² − ${3 * t}x + ${2 * t * t} ⇒ ${t}x = ${5 * t * t} ⇒ x = ${ans} cm.\n5. Check lengths > 0: OA = ${6 * t}, OC = ${4 * t}, OB = ${3 * t}, OD = ${2 * t} ✓.`,
    sillyTrap: `Mismatching diagonal order (writing OA/OD instead of OA/OC) or sign errors while multiplying (x − ${t})(x − ${2 * t}).`,
  };
}

function genCh07(sub: number): GeneratedMathProblem {
  const labels = CHAPTER_SUBPATTERNS.ch07;
  if (sub === 0) {
    const x0 = pick([-4, -3, -2, 2, 3, 4, 5]);
    const m = pick([2, 3, 4, 5]);
    const n = pick([3, 4, 6, 7].filter((v) => v !== m));
    const s1 = pick([-1, 1]);
    const s2 = pick([-1, 1]);
    const a1 = x0 + s1 * m;
    const b1 = pick([-1, 1]) * n;
    let a2 = x0 + s2 * n;
    if (a2 === a1) a2 = x0 - s2 * n;
    const b2 = pick([-1, 1]) * m;
    const c1 = a1 * a1 + b1 * b1;
    const c2 = a2 * a2 + b2 * b2;
    const lhsPoly = formatQuad(1, -2 * a1, c1);
    const rhsPoly = formatQuad(1, -2 * a2, c2);

    return {
      signature: `ch07-s0-${x0}-${a1}-${b1}-${a2}-${b2}`,
      chapterKey: 'ch07',
      subPatternIndex: 0,
      subPatternLabel: labels[0],
      topicLabel: 'Ch 7: Equidistant Point on X-Axis',
      marks: 3,
      targetMinutes: 4,
      prompt: `Find the point on the x-axis which is equidistant from A(${signedVal(a1)}, ${signedVal(b1)}) and B(${signedVal(a2)}, ${signedVal(b2)}).`,
      copyCheck: `Any point on the x-axis is P(x, 0) — y-coordinate is ALWAYS 0! Watch double negatives in (x − (${signedVal(a1)}))²!`,
      setupNudge: `Set PA² = PB² directly to eliminate square roots: (x − ${parenVal(a1)})² + (0 − ${parenVal(b1)})² = (x − ${parenVal(a2)})² + (0 − ${parenVal(b2)})².`,
      midwayCheck: `${lhsPoly} = ${rhsPoly}.`,
      finalAnswer: `Required point P is (${signedVal(x0)}, 0).`,
      fullSteps: `1. Let P(x, 0) lie on the x-axis. Since PA = PB, PA² = PB².\n2. (x − ${parenVal(a1)})² + (${signedVal(-b1)})² = (x − ${parenVal(a2)})² + (${signedVal(-b2)})².\n3. Expand: ${lhsPoly} = ${rhsPoly}.\n4. Cancel x²: ${2 * (a2 - a1)}x = ${signedVal(c2 - c1)} ⇒ x = ${signedVal(x0)}.\n5. Point P = (${signedVal(x0)}, 0).`,
      sillyTrap: `Taking point on x-axis as (0, y) instead of (x, 0), or expanding (x + k)² as x² + k² (forgetting 2kx!).`,
    };
  }

  if (sub === 1) {
    const p = pick([1, 2, 3]);
    const q = pick([2, 3, 4, 5].filter((v) => gcd(v, p) === 1));
    const m = pick([1, 2]);
    const y1 = -p * m;
    const y2 = q * m;
    const x0 = pick([-3, -2, 1, 2, 4, 5]);
    const t = pick([1, 2]);
    const x1 = x0 - p * t;
    const x2 = x0 + q * t;

    return {
      signature: `ch07-s1-${x1}-${y1}-${x2}-${y2}`,
      chapterKey: 'ch07',
      subPatternIndex: 1,
      subPatternLabel: labels[1],
      topicLabel: 'Ch 7: X-Axis Section Ratio (k : 1)',
      marks: 3,
      targetMinutes: 4,
      prompt: `Find the ratio in which the x-axis divides the line segment joining A(${signedVal(x1)}, ${signedVal(y1)}) and B(${signedVal(x2)}, ${signedVal(y2)}). Also find the coordinates of the point of division.`,
      copyCheck: `Point on x-axis is P(x, 0). Remember: k multiplies B(${signedVal(x2)}, ${signedVal(y2)}) and 1 multiplies A(${signedVal(x1)}, ${signedVal(y1)})!`,
      setupNudge: `Let ratio be k : 1 and division point be P(x, 0). Use y-coordinate first: 0 = (k·${parenVal(y2)} + 1·${parenVal(y1)}) / (k + 1).`,
      midwayCheck: `${y2}k + ${parenVal(y1)} = 0 ⇒ k = ${p}/${q}, so ratio = ${p} : ${q}.`,
      finalAnswer: `Ratio = ${p} : ${q}, Point of division = (${signedVal(x0)}, 0).`,
      fullSteps: `1. Let P(x, 0) divide AB in ratio k : 1.\n2. y = (k(${y2}) + 1(${signedVal(y1)})) / (k + 1) = 0 ⇒ ${y2}k = ${-y1} ⇒ k = ${p}/${q} (ratio ${p} : ${q}).\n3. Find x: x = (${p}·${parenVal(x2)} + ${q}·${parenVal(x1)}) / (${p} + ${q}) = ${signedVal(p * x2 + q * x1)} / ${p + q} = ${signedVal(x0)}.\n4. Intersection point P = (${signedVal(x0)}, 0).`,
      sillyTrap: `Cross-multiplying k with x₁ instead of x₂, or writing the simplified ratio backwards (${q} : ${p}).`,
    };
  }

  const xA = randInt(-3, 4);
  const yA = randInt(-2, 4);
  const [dx1, dy1, dx2, dy2] = pick([
    [3, 1, 1, 4],
    [-2, 3, 4, 1],
    [4, -1, 2, 5],
    [5, 2, -1, 3],
    [2, 4, 3, -1],
  ]);
  const xB = xA + dx1;
  const yB = yA + dy1;
  const xC = xA + dx1 + dx2;
  const yC = yA + dy1 + dy2;
  const xD = xA + dx2;
  const yD = yA + dy2;

  return {
    signature: `ch07-s2-${xA}-${yA}-${dx1}-${dy1}-${dx2}-${dy2}`,
    chapterKey: 'ch07',
    subPatternIndex: 2,
    subPatternLabel: labels[2],
    topicLabel: 'Ch 7: Parallelogram 4th Vertex',
    marks: 3,
    targetMinutes: 3,
    prompt: `If A(${signedVal(xA)}, ${signedVal(yA)}), B(${signedVal(xB)}, ${signedVal(yB)}), C(${signedVal(xC)}, ${signedVal(yC)}), and D(p, q) are the vertices of a parallelogram ABCD taken in order, find the values of p and q.`,
    copyCheck: `Vertices are in cyclic order A → B → C → D, so the diagonals are AC and BD!`,
    setupNudge: `Diagonals of a parallelogram bisect each other ⇒ Midpoint(AC) = Midpoint(BD). So (${xA} + ${xC})/2 = (${xB} + p)/2 and (${yA} + ${yC})/2 = (${yB} + q)/2.`,
    midwayCheck: `x_A + x_C = ${signedVal(xA + xC)} and y_A + y_C = ${signedVal(yA + yC)}.`,
    finalAnswer: `p = ${signedVal(xD)}, q = ${signedVal(yD)} → D(${signedVal(xD)}, ${signedVal(yD)}).`,
    fullSteps: `1. Since diagonals AC and BD bisect each other, Midpoint(AC) = Midpoint(BD).\n2. For x-coordinates: (${signedVal(xA)} + ${parenVal(xC)})/2 = (${signedVal(xB)} + p)/2 ⇒ ${signedVal(xA + xC)} = ${signedVal(xB)} + p ⇒ p = ${signedVal(xD)}.\n3. For y-coordinates: (${signedVal(yA)} + ${parenVal(yC)})/2 = (${signedVal(yB)} + q)/2 ⇒ ${signedVal(yA + yC)} = ${signedVal(yB)} + q ⇒ q = ${signedVal(yD)}.\n4. Fourth vertex D = (${signedVal(xD)}, ${signedVal(yD)}).`,
    sillyTrap: `Taking distance formula instead of diagonal midpoint (wastes 6 minutes!), OR pairing A with B as a diagonal instead of A with C.`,
  };
}

function genCh08(sub: number): GeneratedMathProblem {
  const labels = CHAPTER_SUBPATTERNS.ch08;
  if (sub === 0) {
    const c1 = pick([2, 3, 4, 5, 6]);
    const c2 = pick([2, 3, 4, 5]);
    const c3 = pick([1, 2, 3]);
    const [num, den] = simplifyFrac(3 * c1 + 16 * c2 - 12 * c3, 12);
    return {
      signature: `ch08-s0-${c1}-${c2}-${c3}`,
      chapterKey: 'ch08',
      subPatternIndex: 0,
      subPatternLabel: labels[0],
      topicLabel: 'Ch 8: Trig Exact Evaluation',
      marks: 3,
      targetMinutes: 4,
      prompt: `Evaluate accurately in your notebook:\n(${c1} cos² 60° + ${c2} sec² 30° − ${c3} tan² 45°) / (sin² 30° + cos² 30°)`,
      copyCheck: `cos 60° = 1/2, sec 30° = 2/√3 (so sec²30° = 4/3!), tan 45° = 1. Square BEFORE multiplying!`,
      setupNudge: `Substitute exact table values: cos²60° = 1/4, sec²30° = 4/3, tan²45° = 1, and sin²30° + cos²30° = 1/4 + 3/4 = 1.`,
      midwayCheck: `Numerator = ${c1}/4 + ${4 * c2}/3 − ${c3} with LCM 12; Denominator = 1.`,
      finalAnswer: `${formatFrac(num, den)}.`,
      fullSteps: `1. Numerator = ${c1}(1/2)² + ${c2}(2/√3)² − ${c3}(1)² = ${c1}/4 + ${4 * c2}/3 − ${c3}.\n2. LCM(4, 3) = 12 ⇒ (${3 * c1} + ${16 * c2} − ${12 * c3})/12 = ${formatFrac(num, den)}.\n3. Denominator = (1/2)² + (√3/2)² = 1/4 + 3/4 = 1.\n4. Value = ${formatFrac(num, den)}.`,
      sillyTrap: `Substituting sec 30° = √3/2 (that is cos 30°!) or forgetting to square 2 in (2/√3)² = 4/3.`,
    };
  }

  if (sub === 1) {
    const c1 = pick([2, 3, 4, 5, 6]);
    const c2 = pick([1, 2, 3, 4]);
    const c3 = pick([3, 6, 9, 12]);
    const [num, den] = simplifyFrac(6 * c1 - 12 * c2 + c3, 12);
    return {
      signature: `ch08-s1-${c1}-${c2}-${c3}`,
      chapterKey: 'ch08',
      subPatternIndex: 1,
      subPatternLabel: labels[1],
      topicLabel: 'Ch 8: Trig Squared Fractions',
      marks: 3,
      targetMinutes: 4,
      prompt: `Evaluate accurately in your notebook:\n(${c1} cosec² 45° − ${c2} sec² 60° + ${c3} tan² 30°) / cosec² 30°`,
      copyCheck: `cosec 45° = √2, sec 60° = 2, tan 30° = 1/√3, cosec 30° = 2. Check reciprocal pairs carefully!`,
      setupNudge: `Square each ratio first: cosec²45° = 2, sec²60° = 4, tan²30° = 1/3, denominator cosec²30° = 4.`,
      midwayCheck: `Numerator = ${2 * c1} − ${4 * c2} + ${c3}/3 = ${formatFrac(6 * c1 - 12 * c2 + c3, 3)}.`,
      finalAnswer: `${formatFrac(num, den)}.`,
      fullSteps: `1. Numerator = ${c1}(√2)² − ${c2}(2)² + ${c3}(1/√3)² = ${2 * c1} − ${4 * c2} + ${formatFrac(c3, 3)}.\n2. Combine numerator = ${formatFrac(6 * c1 - 12 * c2 + c3, 3)}.\n3. Divide by cosec²30° = 2² = 4 ⇒ ${formatFrac(num, den)}.`,
      sillyTrap: `Confusing tan 30° (1/√3) with tan 60° (√3), or dividing by cosec 30° = 2 instead of cosec²30° = 4.`,
    };
  }

  const [opp, adj, hyp] = pick([
    [3, 4, 5],
    [4, 3, 5],
    [5, 12, 13],
    [12, 5, 13],
    [8, 15, 17],
    [7, 24, 25],
  ]);
  const m = pick([2, 3, 4, 5]);
  const n = pick([1, 2, 3]);
  const numVal = m * opp - n * adj;
  const denVal = m * opp + n * adj;
  const ans = formatFrac(numVal, denVal);

  return {
    signature: `ch08-s2-${adj}-${opp}-${m}-${n}`,
    chapterKey: 'ch08',
    subPatternIndex: 2,
    subPatternLabel: labels[2],
    topicLabel: 'Ch 8: Trig Ratio Evaluation',
    marks: 3,
    targetMinutes: 4,
    prompt: `If ${adj} tan θ = ${opp} (for acute angle θ), find the value of:\n(${m} sin θ − ${n} cos θ) / (${m} sin θ + ${n} cos θ)`,
    copyCheck: `tan θ = P/B = ${opp}/${adj} (so Opp = ${opp}k, Adj = ${adj}k, Hyp = ${hyp}k — OR divide Num & Den by cos θ!).`,
    setupNudge: `Fast Shortcut: Divide numerator and denominator by cos θ to rewrite as (${m} tan θ − ${n}) / (${m} tan θ + ${n}), then substitute tan θ = ${opp}/${adj}.`,
    midwayCheck: `sin θ = ${opp}/${hyp}, cos θ = ${adj}/${hyp} (and tan θ = ${opp}/${adj}).`,
    finalAnswer: `${ans}.`,
    fullSteps: `1. Divide top & bottom by cos θ: (${m} tan θ − ${n}) / (${m} tan θ + ${n}).\n2. Plug tan θ = ${opp}/${adj}: [${m}(${opp}/${adj}) − ${n}] / [${m}(${opp}/${adj}) + ${n}].\n3. Multiply Num & Den by ${adj}: (${m * opp} − ${n * adj}) / (${m * opp} + ${n * adj}) = ${signedVal(numVal)} / ${denVal} = ${ans}.\n4. (Triangle check: Hyp = √(${opp}² + ${adj}²) = ${hyp}, yielding identical ratio ${ans} ✓.)`,
    sillyTrap: `Inverting tan θ = B/P (${adj}/${opp}) instead of P/B (${opp}/${adj}), or mixing up signs between numerator and denominator.`,
  };
}

function genCh09(sub: number): GeneratedMathProblem {
  const labels = CHAPTER_SUBPATTERNS.ch09;
  if (sub === 0) {
    const h = pick([7, 8, 9, 10, 12, 14, 15, 20]);
    return {
      signature: `ch09-s0-${h}`,
      chapterKey: 'ch09',
      subPatternIndex: 0,
      subPatternLabel: labels[0],
      topicLabel: 'Ch 9: Building & Tower (45°, 60°)',
      marks: 5,
      targetMinutes: 6,
      prompt: `From the roof of a ${h} m tall building, the angle of elevation of the top of a taller communication tower is 60° and the angle of depression of its base is 45°. Find the height of the tower.`,
      copyCheck: `DRAW FIRST: Building (${h} m), taller Tower, horizontal dashed eye-level line! Angle of depression 45° equals alternate interior angle at tower foot.`,
      setupNudge: `Let horizontal gap = x m and upper tower section above roof eye-level = y m. Use tan 45° = ${h}/x and tan 60° = y/x.`,
      midwayCheck: `x = ${h} m (from tan 45° = 1) and y = ${h}√3 m.`,
      finalAnswer: `Height of tower = ${h}(√3 + 1) m (≈ ${(h * 2.732).toFixed(2)} m).`,
      fullSteps: `1. Let building AB = ${h} m, tower CD, horizontal AE ∥ BD so ED = ${h} m.\n2. In right △ABD: tan 45° = ${h}/x ⇒ 1 = ${h}/x ⇒ x = ${h} m (so AE = ${h} m).\n3. In right △AEC: tan 60° = CE/AE ⇒ √3 = y/${h} ⇒ y = ${h}√3 m.\n4. Total height CD = CE + ED = ${h}√3 + ${h} = ${h}(√3 + 1) m.`,
      sillyTrap: `Stopping after finding y = ${h}√3 m and forgetting to ADD the ${h} m building height!`,
    };
  }

  if (sub === 1) {
    const H = pick([45, 60, 75, 90, 105, 120]);
    const distCoeff = (2 * H) / 3;
    return {
      signature: `ch09-s1-${H}`,
      chapterKey: 'ch09',
      subPatternIndex: 1,
      subPatternLabel: labels[1],
      topicLabel: 'Ch 9: Two Ships on Same Side',
      marks: 5,
      targetMinutes: 6,
      prompt: `From the top of a ${H} m high lighthouse above sea level, the angles of depression of two boats on the same side — one directly behind the other — are 30° and 60°. Calculate the distance between the two boats.`,
      copyCheck: `Closer boat has LARGER angle (60°); farther boat has SMALLER angle (30°)! Always draw the horizontal ray at top.`,
      setupNudge: `Let closer boat distance = x, farther boat distance = y. Distance between boats = y − x. Set tan 60° = ${H}/x and tan 30° = ${H}/y.`,
      midwayCheck: `x = ${H}/√3 = ${H / 3}√3 m and y = ${H}√3 m.`,
      finalAnswer: `Distance between boats = ${distCoeff}√3 m (≈ ${(distCoeff * 1.732).toFixed(2)} m).`,
      fullSteps: `1. Lighthouse AB = ${H} m, closer boat C (∠ACB = 60°), farther boat D (∠ADB = 30°).\n2. In right △ABC: tan 60° = ${H}/BC ⇒ BC = ${H}/√3 = ${H / 3}√3 m.\n3. In right △ABD: tan 30° = ${H}/BD ⇒ BD = ${H}√3 m.\n4. Distance CD = BD − BC = ${H}√3 − ${H / 3}√3 = ${distCoeff}√3 m.`,
      sillyTrap: `Labeling the closer boat with 30° and farther with 60°, OR adding distances (valid only on opposite sides!).`,
    };
  }

  const d = pick([20, 24, 28, 30, 36, 40, 48, 50, 60]);
  const remDist = d / 2;
  return {
    signature: `ch09-s2-${d}`,
    chapterKey: 'ch09',
    subPatternIndex: 2,
    subPatternLabel: labels[2],
    topicLabel: 'Ch 9: Moving Observer (30° → 60°)',
    marks: 5,
    targetMinutes: 6,
    prompt: `A person standing on level ground observes the angle of elevation of the top of a tower to be 30°. After walking ${d} m towards the base of the tower, the angle of elevation becomes 60°. Find the height of the tower and the remaining distance to its foot.`,
    copyCheck: `After walking ${d} m CLOSER, remaining base is x m and initial base is (x + ${d}) m — total height h is shared by BOTH right triangles!`,
    setupNudge: `From 60° triangle: tan 60° = h/x ⇒ h = x√3. From 30° triangle: tan 30° = h/(x + ${d}) ⇒ x + ${d} = h√3.`,
    midwayCheck: `Substitute h = x√3: x + ${d} = 3x ⇒ 2x = ${d} ⇒ x = ${remDist} m.`,
    finalAnswer: `Height of tower = ${remDist}√3 m (≈ ${(remDist * 1.732).toFixed(2)} m); remaining distance = ${remDist} m.`,
    fullSteps: `1. Let tower height = h m and closer horizontal distance = x m (farther = x + ${d} m).\n2. From inner triangle (60°): √3 = h/x ⇒ h = x√3.\n3. From outer triangle (30°): 1/√3 = h/(x + ${d}) ⇒ x + ${d} = h√3 = 3x.\n4. 2x = ${d} ⇒ x = ${remDist} m, and height h = ${remDist}√3 m.`,
    sillyTrap: `Using ${d} as the total distance from the foot instead of the distance walked BETWEEN the two observation spots!`,
  };
}

function genCh10(sub: number): GeneratedMathProblem {
  const labels = CHAPTER_SUBPATTERNS.ch10;
  if (sub === 0) {
    const [rb, tb, ob] = pick([
      [3, 4, 5],
      [5, 12, 13],
      [8, 15, 17],
      [7, 24, 25],
    ]);
    const scale = pick([1, 2, 3]);
    const r = rb * scale;
    const pt = tb * scale;
    const op = ob * scale;
    return {
      signature: `ch10-s0-${r}-${op}`,
      chapterKey: 'ch10',
      subPatternIndex: 0,
      subPatternLabel: labels[0],
      topicLabel: 'Ch 10: Circles (Right △OPT)',
      marks: 2,
      targetMinutes: 3,
      prompt: `A tangent PT from an external point P to a circle with centre O and radius ${r} cm satisfies OP = ${op} cm. Determine the tangent length PT.`,
      copyCheck: `90° angle sits at T (point of contact), NOT at O! Thus OP = ${op} cm is the HYPOTENUSE.`,
      setupNudge: `Since OT ⊥ PT (Theorem 10.1), apply Pythagoras Theorem in right △OTP: OP² = OT² + PT².`,
      midwayCheck: `PT² = ${op}² − ${r}² = ${op * op} − ${r * r} = ${pt * pt}.`,
      finalAnswer: `PT = ${pt} cm.`,
      fullSteps: `1. Draw circle (centre O, OT = ${r} cm) and tangent PT from P.\n2. ∠OTP = 90° (radius ⊥ tangent at contact point).\n3. By Pythagoras Theorem: PT² = OP² − OT² = ${op}² − ${r}² = ${pt * pt}.\n4. Taking positive square root: PT = ${pt} cm.`,
      sillyTrap: `Treating PT as the hypotenuse and adding ${op}² + ${r}² instead of subtracting!`,
    };
  }

  if (sub === 1) {
    const [r1b, halfB, r2b] = pick([
      [3, 4, 5],
      [5, 12, 13],
      [8, 15, 17],
      [7, 24, 25],
    ]);
    const scale = pick([1, 2]);
    const r1 = r1b * scale;
    const ap = halfB * scale;
    const r2 = r2b * scale;
    const chord = 2 * ap;
    return {
      signature: `ch10-s1-${r1}-${r2}`,
      chapterKey: 'ch10',
      subPatternIndex: 1,
      subPatternLabel: labels[1],
      topicLabel: 'Ch 10: Concentric Circles Chord',
      marks: 3,
      targetMinutes: 4,
      prompt: `Two concentric circles have radii ${r2} cm and ${r1} cm. Find the length of the chord of the larger circle which touches the smaller circle.`,
      copyCheck: `Radius OP = ${r1} cm is perpendicular to chord AB AND bisects chord AB into AP + PB (remember to DOUBLE AP!).`,
      setupNudge: `Let P be the point where chord AB touches the inner circle. By Theorem 10.1, OP ⊥ AB ⇒ OA² = OP² + AP². Then total chord AB = 2·AP.`,
      midwayCheck: `AP² = ${r2}² − ${r1}² = ${ap * ap} ⇒ half-chord AP = ${ap} cm.`,
      finalAnswer: `Length of chord AB = ${chord} cm.`,
      fullSteps: `1. Let common centre be O, inner radius OP = ${r1} cm, outer radius OA = ${r2} cm.\n2. AB is tangent to inner circle at P ⇒ OP ⊥ AB (∠OPA = 90°).\n3. In right △OPA: AP² = OA² − OP² = ${r2}² − ${r1}² = ${r2 * r2} − ${r1 * r1} = ${ap * ap} ⇒ AP = ${ap} cm.\n4. Perpendicular from centre to chord bisects the chord ⇒ AB = 2 × AP = 2 × ${ap} = ${chord} cm.`,
      sillyTrap: `Stopping at AP = ${ap} cm and forgetting to multiply by 2 for full chord AB = ${chord} cm!`,
    };
  }

  const r = randInt(3, 12);
  return {
    signature: `ch10-s2-${r}`,
    chapterKey: 'ch10',
    subPatternIndex: 2,
    subPatternLabel: labels[2],
    topicLabel: 'Ch 10: Pair of Tangents (60°)',
    marks: 3,
    targetMinutes: 4,
    prompt: `Two tangents PA and PB drawn from an external point P to a circle with centre O and radius ${r} cm are inclined to each other at an angle of 60°. Find the length of each tangent (and ∠AOB).`,
    copyCheck: `Join OP! OP bisects ∠APB so ∠OPA = 60°/2 = 30°, and right angle is at A (radius OA ⊥ PA).`,
    setupNudge: `In right △OAP (right-angled at A): ∠OPA = 30° and OA = ${r} cm (opposite to 30°!). Use tan 30° = OA / PA.`,
    midwayCheck: `tan 30° = 1/√3 = ${r}/PA; ∠AOB = 180° − 60° = 120°.`,
    finalAnswer: `PA = PB = ${r}√3 cm (≈ ${(r * 1.732).toFixed(2)} cm), ∠AOB = 120°.`,
    fullSteps: `1. By RHS congruence, △OAP ≅ △OBP ⇒ ∠OPA = ∠OPB = 60°/2 = 30°.\n2. Radius OA ⊥ PA ⇒ ∠OAP = 90°.\n3. In right △OAP: tan 30° = OA/PA ⇒ 1/√3 = ${r}/PA ⇒ PA = ${r}√3 cm.\n4. Since tangents from external point are equal, PA = PB = ${r}√3 cm. Also ∠AOB = 180° − 60° = 120°.`,
    sillyTrap: `Using cos 30° = OA/OP instead of tan 30° = OA/PA, OR failing to halve 60° along the angle bisector OP.`,
  };
}

function genCh11(sub: number): GeneratedMathProblem {
  const labels = CHAPTER_SUBPATTERNS.ch11;
  if (sub === 0) {
    const r = pick([7, 14, 21, 28]);
    const theta = pick([30, 45, 60, 90, 120, 150]);
    const [areaN, areaD] = simplifyFrac(theta * 22 * r * r, 360 * 7);
    const [arcN, arcD] = simplifyFrac(theta * 2 * 22 * r, 360 * 7);
    return {
      signature: `ch11-s0-${r}-${theta}`,
      chapterKey: 'ch11',
      subPatternIndex: 0,
      subPatternLabel: labels[0],
      topicLabel: 'Ch 11: Sector Area & Arc Length',
      marks: 3,
      targetMinutes: 4,
      prompt: `In a circle of radius ${r} cm, an arc subtends angle ${theta}° at the centre. Find (i) length of the arc, and (ii) area of the minor sector formed. (Use π = 22/7)`,
      copyCheck: `r = ${r} cm (NOT diameter!), θ = ${theta}°. Cancel ${r} with 7 BEFORE multiplying by 22!`,
      setupNudge: `Arc = (θ/360) × 2πr; Sector Area = (θ/360) × πr². Square r ONLY in area!`,
      midwayCheck: `Fraction θ/360 = ${formatFrac(theta, 360)}.`,
      finalAnswer: `(i) Arc = ${formatFrac(arcN, arcD)} cm; (ii) Sector Area = ${formatFrac(areaN, areaD)} cm².`,
      fullSteps: `1. θ/360 = ${theta}/360 = ${formatFrac(theta, 360)}.\n2. Arc length = (${formatFrac(theta, 360)}) × 2 × (22/7) × ${r} = ${formatFrac(arcN, arcD)} cm.\n3. Sector Area = (${formatFrac(theta, 360)}) × (22/7) × ${r} × ${r} = ${formatFrac(areaN, areaD)} cm².`,
      sillyTrap: `Squaring r in arc length or forgetting the second r in πr², or multiplying 22 × ${r} × ${r} before cancelling 7.`,
    };
  }

  if (sub === 1) {
    const r = pick([7, 14, 21]);
    const mins = pick([5, 10, 15, 20, 25, 35, 40]);
    const theta = mins * 6;
    const [areaN, areaD] = simplifyFrac(theta * 22 * r * r, 360 * 7);
    return {
      signature: `ch11-s1-${r}-${mins}`,
      chapterKey: 'ch11',
      subPatternIndex: 1,
      subPatternLabel: labels[1],
      topicLabel: 'Ch 11: Clock Minute-Hand Area',
      marks: 3,
      targetMinutes: 4,
      prompt: `The length of the minute hand of a wall clock is ${r} cm. Find the area swept by this minute hand in ${mins} minutes. (Use π = 22/7)`,
      copyCheck: `Minute hand sweeps 360° in 60 minutes ⇒ 6° PER MINUTE (NOT 5°!). Here radius r = ${r} cm.`,
      setupNudge: `Angle θ = ${mins} × 6° = ${theta}°. Use Sector Area = (θ/360) × πr² = (${mins}/60) × (22/7) × ${r}².`,
      midwayCheck: `Central angle θ = ${theta}° (sector fraction = ${formatFrac(theta, 360)}).`,
      finalAnswer: `Area swept = ${formatFrac(areaN, areaD)} cm².`,
      fullSteps: `1. Angle swept in 60 min = 360° ⇒ in 1 min = 360°/60 = 6°.\n2. In ${mins} min, θ = ${mins} × 6° = ${theta}°.\n3. Area = (${theta}/360) × (22/7) × ${r} × ${r} = (${formatFrac(theta, 360)}) × ${22 * (r / 7) * r} = ${formatFrac(areaN, areaD)} cm².`,
      sillyTrap: `Using 5° per minute instead of 6° per minute (remember: minute markings are 1 minute apart = 6°; hour numbers are 5 minutes apart = 30°!).`,
    };
  }

  const [r1, r2] = pick([
    [7, 14],
    [14, 21],
    [7, 21],
    [14, 28],
    [21, 28],
  ]);
  const [a1N, a1D] = simplifyFrac(22 * r1 * r1, 4 * 7);
  const [incN, incD] = simplifyFrac(22 * (r2 * r2 - r1 * r1), 4 * 7);
  return {
    signature: `ch11-s2-${r1}-${r2}`,
    chapterKey: 'ch11',
    subPatternIndex: 2,
    subPatternLabel: labels[2],
    topicLabel: 'Ch 11: Corner Quadrant Grazing Area',
    marks: 4,
    targetMinutes: 5,
    prompt: `A pony is tied to a peg at one corner of a large square-shaped grass lawn using a ${r1} m long rope. Find (i) the grazing area reachable with the ${r1} m rope, and (ii) the INCREASE in grazing area if the rope is lengthened to ${r2} m. (Use π = 22/7)`,
    copyCheck: `Square corner ⇒ θ = 90° (1/4 of a circle!). Notice part (ii) asks for the INCREASE (new area − old area), NOT just total area!`,
    setupNudge: `Area = (1/4)πr². Use a² − b² shortcut in part (ii): Increase = (1/4) × (22/7) × (${r2}² − ${r1}²) = (11/14)(${r2} − ${r1})(${r2} + ${r1}).`,
    midwayCheck: `(i) (11/14) × ${r1} × ${r1} = ${formatFrac(a1N, a1D)} m²; factor (${r2} − ${r1})(${r2} + ${r1}) = ${r2 - r1} × ${r2 + r1}.`,
    finalAnswer: `(i) ${formatFrac(a1N, a1D)} m²; (ii) Increase = ${formatFrac(incN, incD)} m².`,
    fullSteps: `1. Square corner gives quadrant angle θ = 90°, so sector fraction = 90°/360° = 1/4.\n2. Initial grazing area = (1/4) × (22/7) × ${r1} × ${r1} = ${formatFrac(a1N, a1D)} m².\n3. Increase in grazing area = (1/4) × (22/7) × (${r2}² − ${r1}²) = (11/14) × (${r2} − ${r1})(${r2} + ${r1}) = (11/14) × ${r2 - r1} × ${r2 + r1} = ${formatFrac(incN, incD)} m².`,
    sillyTrap: `Using θ = 60° (equilateral triangle) instead of 90° (square), OR reporting total new area in part (ii) instead of the INCREASE!`,
  };
}

function genCh12(sub: number): GeneratedMathProblem {
  const labels = CHAPTER_SUBPATTERNS.ch12;
  if (sub === 0) {
    const r = pick([7, 14]);
    const h = pick([6, 8, 10, 12, 16]);
    const actualTotal = h + 2 * r;
    const tsa = 2 * (22 / 7) * r * actualTotal;
    return {
      signature: `ch12-s0-${r}-${actualTotal}`,
      chapterKey: 'ch12',
      subPatternIndex: 0,
      subPatternLabel: labels[0],
      topicLabel: 'Ch 12: Capsule Surface Area',
      marks: 5,
      targetMinutes: 5,
      prompt: `A medicine capsule is formed as a right circular cylinder with two hemispheres attached cleanly to both ends. The total capsule length is ${actualTotal} cm and its diameter is ${2 * r} cm. Find its total surface area. (Use π = 22/7)`,
      copyCheck: `Diameter = ${2 * r} cm ⇒ r = ${r} cm! Cylinder height h = ${actualTotal} − 2(${r}) = ${h} cm (subtract radius at BOTH ends!).`,
      setupNudge: `TSA = CSA(Cylinder) + 2 × CSA(Hemisphere) = 2πrh + 2(2πr²) = 2πr(h + 2r). Factor 2πr BEFORE plugging π = 22/7!`,
      midwayCheck: `Cylinder height h = ${h} cm; notice (h + 2r) = ${actualTotal} cm.`,
      finalAnswer: `Surface Area = ${tsa} cm².`,
      fullSteps: `1. Radius r = (${2 * r})/2 = ${r} cm.\n2. Cylindrical height h = ${actualTotal} − 2 × ${r} = ${h} cm.\n3. Total Surface Area = 2πrh + 4πr² = 2πr(h + 2r).\n4. Substitute: 2 × (22/7) × ${r} × (${h} + ${2 * r}) = 2 × 22 × ${r / 7} × ${actualTotal} = ${tsa} cm².`,
      sillyTrap: `Using diameter ${2 * r} as radius r, OR subtracting r only once (${actualTotal} − ${r}) instead of 2r!`,
    };
  }

  if (sub === 1) {
    const [r, h, l] = pick([
      [7, 24, 25],
      [14, 48, 50],
      [21, 28, 35],
      [28, 21, 35],
      [21, 20, 29],
    ]);
    const H = h + r;
    const tsa = 22 * (r / 7) * (l + 2 * r);
    return {
      signature: `ch12-s1-${r}-${h}`,
      chapterKey: 'ch12',
      subPatternIndex: 1,
      subPatternLabel: labels[1],
      topicLabel: 'Ch 12: Cone + Hemisphere Toy TSA',
      marks: 5,
      targetMinutes: 5,
      prompt: `A solid toy consists of a cone of radius ${r} cm mounted on top of a hemisphere of the same radius. If the total height of the toy is ${H} cm, find its total surface area. (Use π = 22/7)`,
      copyCheck: `Total height ${H} cm includes the hemisphere's depth r = ${r} cm! Subtract r FIRST to get cone vertical height h = ${H} − ${r} = ${h} cm.`,
      setupNudge: `Find cone height h = ${H} − ${r}, then slant height l = √(r² + h²). Factor πr from TSA = πrl + 2πr² = πr(l + 2r).`,
      midwayCheck: `Cone vertical height h = ${h} cm; slant height l = √(${r}² + ${h}²) = ${l} cm.`,
      finalAnswer: `Total Surface Area = ${tsa} cm².`,
      fullSteps: `1. Radius r = ${r} cm. Cone height h = total height − r = ${H} − ${r} = ${h} cm.\n2. Slant height l = √(r² + h²) = √(${r * r} + ${h * h}) = √${l * l} = ${l} cm.\n3. Exposed TSA = CSA(cone) + CSA(hemisphere) = πrl + 2πr² = πr(l + 2r).\n4. TSA = (22/7) × ${r} × (${l} + ${2 * r}) = ${22 * (r / 7)} × ${l + 2 * r} = ${tsa} cm².`,
      sillyTrap: `Using total height ${H} cm as cone height h, using h instead of slant height l in πrl, or adding circular base πr² (it is hidden inside!).`,
    };
  }

  const r = pick([1, 2, 3]);
  const h = pick([3, 4, 5, 6]);
  const k = pick([2, 3, 4]);
  const m = pick([2, 3, 4, 5]);
  const R = r * k;
  const H = h * m;
  const countN = 3 * k * k * m;

  return {
    signature: `ch12-s2-${R}-${H}-${r}-${h}`,
    chapterKey: 'ch12',
    subPatternIndex: 2,
    subPatternLabel: labels[2],
    topicLabel: 'Ch 12: Volume Recasting (Cancel π)',
    marks: 3,
    targetMinutes: 4,
    prompt: `A solid metallic cylinder of radius ${R} cm and height ${H} cm is melted and recast into small identical solid cones, each of radius ${r} cm and height ${h} cm. How many complete cones are formed?`,
    copyCheck: `NEVER multiply π = 22/7 here! π cancels directly on Line 1 when dividing V(cylinder) by V(cone).`,
    setupNudge: `Number of cones N = V(cylinder) / V(cone) = (π·${R}²·${H}) / ((1/3)π·${r}²·${h}) = 3 × (${R}/${r})² × (${H}/${h}).`,
    midwayCheck: `Factor 3 flips to numerator: N = 3 × (${R} × ${R} × ${H}) / (${r} × ${r} × ${h}).`,
    finalAnswer: `Number of cones formed = ${countN}.`,
    fullSteps: `1. Total volume conserved: V(cylinder) = N × V(cone).\n2. πR²H = N × (1/3)πr²h ⇒ cancel π on both sides.\n3. N = 3 × (${R}/${r})² × (${H}/${h}) = 3 × (${k})² × (${m}) = 3 × ${k * k} × ${m} = ${countN} cones.`,
    sillyTrap: `Plugging π = 3.14 or 22/7 unnecessarily (introducing rounding errors!), or forgetting the 1/3 factor in cone volume!`,
  };
}

function genCh13(sub: number): GeneratedMathProblem {
  const labels = CHAPTER_SUBPATTERNS.ch13;
  const presets = [
    [6, 12, 20, 8, 4],
    [5, 10, 20, 10, 5],
    [4, 14, 16, 10, 6],
    [7, 8, 20, 12, 3],
    [5, 9, 22, 11, 3],
    [8, 10, 20, 7, 5],
  ];
  const f = pick(presets);
  const classOffset = pick([0, 10, 20]);
  const h = 10;
  const classes = [0, 1, 2, 3, 4].map(
    (idx) => `${classOffset + idx * h} – ${classOffset + (idx + 1) * h}`
  );
  const N = f.reduce((acc, v) => acc + v, 0);
  const xi = [0, 1, 2, 3, 4].map((idx) => classOffset + idx * h + 5);
  const aMean = xi[2];
  const ui = [-2, -1, 0, 1, 2];
  const fiui = f.map((freq, idx) => freq * ui[idx]);
  const sumFu = fiui.reduce((acc, v) => acc + v, 0);
  const meanVal = Number((aMean + (sumFu / N) * h).toFixed(4));

  const lModal = classOffset + 20;
  const f0 = f[1];
  const f1 = f[2];
  const f2 = f[3];
  const modeDen = 2 * f1 - f0 - f2;
  const modeVal = Number((lModal + ((f1 - f0) / modeDen) * h).toFixed(4));

  const cfArr = [
    f[0],
    f[0] + f[1],
    f[0] + f[1] + f[2],
    f[0] + f[1] + f[2] + f[3],
    N,
  ];
  const lMedian = classOffset + 20;
  const cfPrev = cfArr[1];
  const fMedian = f[2];
  const medianVal = Number((lMedian + ((N / 2 - cfPrev) / fMedian) * h).toFixed(4));

  const table = {
    headers: ['Class Interval', ...classes],
    rows: [['Frequency (fᵢ)', ...f.map(String)]],
  };

  if (sub === 0) {
    return {
      signature: `ch13-s0-${classOffset}-${f.join('-')}`,
      chapterKey: 'ch13',
      subPatternIndex: 0,
      subPatternLabel: labels[0],
      topicLabel: 'Ch 13: Statistics (Mean)',
      marks: 5,
      targetMinutes: 6,
      prompt: `Copy the frequency table neatly into your notebook and compute the **Mean** using the Step-Deviation Method:`,
      table,
      copyCheck: `Verify Σfᵢ = ${f.join(' + ')} = ${N} BEFORE making columns xᵢ, uᵢ, and fᵢuᵢ!`,
      setupNudge: `Take class marks xᵢ = ${xi.join(', ')}, assumed mean a = ${aMean} (width h = ${h}), so uᵢ = −2, −1, 0, +1, +2.`,
      midwayCheck: `Σ(fᵢuᵢ) = ${signedVal(sumFu)} and Σfᵢ = ${N}.`,
      finalAnswer: `Mean = ${meanVal}.`,
      fullSteps: `1. Class marks xᵢ = [${xi.join(', ')}]; choose a = ${aMean}, h = ${h} ⇒ uᵢ = [−2, −1, 0, 1, 2].\n2. Products fᵢuᵢ = [${fiui.map(signedVal).join(', ')}] ⇒ Σfᵢuᵢ = ${signedVal(sumFu)}.\n3. Mean = a + (Σfᵢuᵢ / Σfᵢ) × h = ${aMean} + (${signedVal(sumFu)}/${N}) × ${h} = ${meanVal}.`,
      sillyTrap: `Dropping minus signs in Σfᵢuᵢ or forgetting to multiply (Σfᵢuᵢ / Σfᵢ) by class width h = ${h}!`,
    };
  }

  if (sub === 1) {
    return {
      signature: `ch13-s1-${classOffset}-${f.join('-')}`,
      chapterKey: 'ch13',
      subPatternIndex: 1,
      subPatternLabel: labels[1],
      topicLabel: 'Ch 13: Statistics (Mode)',
      marks: 5,
      targetMinutes: 5,
      prompt: `Copy the frequency table neatly into your notebook and calculate the **Mode** of the distribution:`,
      table,
      copyCheck: `Verify total Σfᵢ = ${N}, then box the class with highest frequency (${f1}) → ${classes[2]}.`,
      setupNudge: `Modal class = ${classes[2]} (l = ${lModal}, h = ${h}). Here f₁ = ${f1}, preceding f₀ = ${f0}, succeeding f₂ = ${f2}.`,
      midwayCheck: `f₁ − f₀ = ${f1 - f0} and denominator 2f₁ − f₀ − f₂ = ${modeDen}.`,
      finalAnswer: `Mode = ${modeVal}.`,
      fullSteps: `1. Maximum frequency is f₁ = ${f1} ⇒ Modal Class = ${classes[2]} (l = ${lModal}, h = ${h}).\n2. f₀ = ${f0}, f₂ = ${f2}.\n3. Mode = l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h = ${lModal} + [(${f1} − ${f0})/(${2 * f1} − ${f0} − ${f2})] × ${h} = ${lModal} + (${f1 - f0}/${modeDen}) × ${h} = ${modeVal}.`,
      sillyTrap: `Writing f₁ instead of 2f₁ in the denominator, or copying the wrong row for l!`,
    };
  }

  return {
    signature: `ch13-s2-${classOffset}-${f.join('-')}`,
    chapterKey: 'ch13',
    subPatternIndex: 2,
    subPatternLabel: labels[2],
    topicLabel: 'Ch 13: Statistics (Median)',
    marks: 5,
    targetMinutes: 6,
    prompt: `Copy the frequency table, add the cumulative frequency (cf) column in your notebook, and compute the **Median**:`,
    table,
    copyCheck: `Last cumulative frequency MUST equal Σfᵢ = ${N}. Pick cf from ONE ROW ABOVE the median class!`,
    setupNudge: `Build cf column: [${cfArr.join(', ')}]. N/2 = ${N / 2} falls inside ${classes[2]} (l = ${lMedian}, f = ${fMedian}, h = ${h}).`,
    midwayCheck: `N/2 = ${N / 2}, preceding cf = ${cfPrev} (from ${classes[1]} row!), f = ${fMedian}.`,
    finalAnswer: `Median = ${medianVal}.`,
    fullSteps: `1. Cumulative frequencies cf = [${cfArr.join(', ')}].\n2. N/2 = ${N}/2 = ${N / 2} ⇒ Median Class = ${classes[2]} (since cf = ${cfArr[2]} ≥ ${N / 2}).\n3. l = ${lMedian}, f = ${fMedian}, cf (preceding) = ${cfPrev}, h = ${h}.\n4. Median = l + [(N/2 − cf)/f] × h = ${lMedian} + [(${N / 2} − ${cfPrev})/${fMedian}] × ${h} = ${medianVal}.`,
    sillyTrap: `Using cf = ${cfArr[2]} (same median-class row) instead of preceding cf = ${cfPrev} ONE ROW ABOVE!`,
  };
}

function genCh14(sub: number): GeneratedMathProblem {
  const labels = CHAPTER_SUBPATTERNS.ch14;
  if (sub === 0) {
    const suit = pick(['clubs', 'spades', 'hearts', 'diamonds']);
    const removeAceToo = randInt(0, 1) === 1;
    const isBlackRemoved = suit === 'clubs' || suit === 'spades';
    const remTotal = removeAceToo ? 48 : 49;
    const blackRemaining = isBlackRemoved ? 26 - (removeAceToo ? 4 : 3) : 26;
    const redFaceRemaining = isBlackRemoved ? 6 : 3;
    const queensRemaining = 3;
    const removedText = removeAceToo
      ? `The King, Queen, Jack and Ace of ${suit} are removed`
      : `The King, Queen and Jack of ${suit} are removed`;

    return {
      signature: `ch14-s0-${suit}-${removeAceToo ? '4' : '3'}`,
      chapterKey: 'ch14',
      subPatternIndex: 0,
      subPatternLabel: labels[0],
      topicLabel: 'Ch 14: Modified 52-Card Deck',
      marks: 3,
      targetMinutes: 3,
      prompt: `${removedText} from a well-shuffled pack of 52 playing cards, and the remaining cards are reshuffled. One card is drawn at random. Find the probability of drawing:\n(i) a black card\n(ii) a red face card\n(iii) a Queen`,
      copyCheck: `New denominator = 52 − ${removeAceToo ? 4 : 3} = ${remTotal} (NOT 52!). Remember: face cards are ONLY K, Q, J (NOT Aces!).`,
      setupNudge: `Total remaining outcomes = ${remTotal}. Check whether ${suit} is black (clubs/spades) or red (hearts/diamonds) before subtracting!`,
      midwayCheck: `Counts left: black = ${blackRemaining}, red face cards = ${redFaceRemaining}, Queens = ${queensRemaining} (out of ${remTotal}).`,
      finalAnswer: `(i) ${formatFrac(blackRemaining, remTotal)}   (ii) ${formatFrac(redFaceRemaining, remTotal)}   (iii) ${formatFrac(queensRemaining, remTotal)}.`,
      fullSteps: `1. Total remaining cards = 52 − ${removeAceToo ? 4 : 3} = ${remTotal}.\n2. ${suit} is a ${isBlackRemoved ? 'black' : 'red'} suit ⇒ black cards left = ${blackRemaining} ⇒ P(black) = ${formatFrac(blackRemaining, remTotal)}.\n3. Originally 6 red face cards (K, Q, J of hearts & diamonds). ${
        isBlackRemoved ? 'All 6 remain' : '3 were removed, leaving 3'
      } ⇒ P(red face) = ${formatFrac(redFaceRemaining, remTotal)}.\n4. Out of 4 Queens, Queen of ${suit} was removed ⇒ 3 remain ⇒ P(Queen) = ${formatFrac(queensRemaining, remTotal)}.`,
      sillyTrap: `Dividing by 52 instead of ${remTotal}, OR counting Aces as face cards!`,
    };
  }

  if (sub === 1) {
    const N = pick([40, 45, 50, 60, 72, 75, 80, 90, 100]);
    const divBy = pick([5, 6, 7, 8]);
    let twoDigit = 0;
    let perfSq = 0;
    let divCount = 0;
    for (let i = 1; i <= N; i++) {
      if (i >= 10 && i <= 99) twoDigit++;
      const rt = Math.round(Math.sqrt(i));
      if (rt * rt === i) perfSq++;
      if (i % divBy === 0) divCount++;
    }
    return {
      signature: `ch14-s1-${N}-${divBy}`,
      chapterKey: 'ch14',
      subPatternIndex: 1,
      subPatternLabel: labels[1],
      topicLabel: 'Ch 14: Numbered Discs',
      marks: 3,
      targetMinutes: 3,
      prompt: `A box holds ${N} numbered discs labelled 1 to ${N}. One disc is drawn at random. Find the probability that its number is:\n(i) a two-digit number\n(ii) a perfect square\n(iii) divisible by ${divBy}`,
      copyCheck: `1 to ${N} contains ${N} discs. Single-digit numbers (1 to 9) are ONLY 9 discs (10 IS two-digit!).`,
      setupNudge: `List or count each set on paper explicitly: don't forget 1 = 1² as a perfect square${N === 100 ? ', and remember 100 is 3-digit (two-digit stops at 99!)' : ''}!`,
      midwayCheck: `Favourable counts out of ${N}: (i) ${twoDigit}, (ii) ${perfSq}, (iii) ${divCount}.`,
      finalAnswer: `(i) ${formatFrac(twoDigit, N)}   (ii) ${formatFrac(perfSq, N)}   (iii) ${formatFrac(divCount, N)}.`,
      fullSteps: `1. Total outcomes = ${N}.\n2. Two-digit numbers (10 to ${Math.min(N, 99)}): ${twoDigit} ⇒ P = ${formatFrac(twoDigit, N)}.\n3. Perfect squares ≤ ${N} (1², 2², ..., ${Math.floor(Math.sqrt(N))}²): ${perfSq} ⇒ P = ${formatFrac(perfSq, N)}.\n4. Multiples of ${divBy} up to ${N}: ${divBy}, ${2 * divBy}, ..., ${divCount * divBy} (${divCount} numbers) ⇒ P = ${formatFrac(divCount, N)}.`,
      sillyTrap: `Subtracting 10 instead of 9 when counting two-digit numbers, skipping 1 as a perfect square${N === 100 ? ', or including 100 as two-digit' : ''}!`,
    };
  }

  const targetSum = pick([5, 6, 7, 8, 9]);
  const event2 = pick(['doublet', 'both-even', 'sum-ge-10'] as const);
  const event3 = pick(['no-five', 'prime-sum', 'prod-12'] as const);

  const isPrime = (n: number) => [2, 3, 5, 7, 11].includes(n);
  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  for (let d1 = 1; d1 <= 6; d1++) {
    for (let d2 = 1; d2 <= 6; d2++) {
      if (d1 + d2 === targetSum) c1++;
      if (
        (event2 === 'doublet' && d1 === d2) ||
        (event2 === 'both-even' && d1 % 2 === 0 && d2 % 2 === 0) ||
        (event2 === 'sum-ge-10' && d1 + d2 >= 10)
      ) {
        c2++;
      }
      if (
        (event3 === 'no-five' && d1 !== 5 && d2 !== 5) ||
        (event3 === 'prime-sum' && isPrime(d1 + d2)) ||
        (event3 === 'prod-12' && d1 * d2 === 12)
      ) {
        c3++;
      }
    }
  }

  const e2Label =
    event2 === 'doublet'
      ? 'a doublet (same number on both dice)'
      : event2 === 'both-even'
      ? 'an even number on both dice'
      : 'a sum of at least 10';

  const e3Label =
    event3 === 'no-five'
      ? '5 will not appear on either die'
      : event3 === 'prime-sum'
      ? 'the sum of both numbers is prime'
      : 'the product of the two numbers is 12';

  return {
    signature: `ch14-s2-${targetSum}-${event2}-${event3}`,
    chapterKey: 'ch14',
    subPatternIndex: 2,
    subPatternLabel: labels[2],
    topicLabel: 'Ch 14: Two Dice (36 Outcomes)',
    marks: 3,
    targetMinutes: 4,
    prompt: `Two unbiased dice are rolled together once. Find the probability of getting:\n(i) a sum equal to ${targetSum}\n(ii) ${e2Label}\n(iii) ${e3Label}`,
    copyCheck: `Total equally likely outcomes = 6 × 6 = 36 (treat (2, 5) and (5, 2) as TWO DISTINCT outcomes!).`,
    setupNudge: `Sketch the 6 × 6 sample space mentally or in margin. Write each favourable ordered pair (d₁, d₂) clearly before dividing by 36.`,
    midwayCheck: `Favourable pair counts out of 36: (i) ${c1}, (ii) ${c2}, (iii) ${c3}.`,
    finalAnswer: `(i) ${formatFrac(c1, 36)}   (ii) ${formatFrac(c2, 36)}   (iii) ${formatFrac(c3, 36)}.`,
    fullSteps: `1. Total ordered outcomes = 6 × 6 = 36.\n2. (i) Pairs with sum ${targetSum}: ${c1} pairs ⇒ P = ${c1}/36 = ${formatFrac(c1, 36)}.\n3. (ii) Pairs for "${e2Label}": ${c2} pairs ⇒ P = ${c2}/36 = ${formatFrac(c2, 36)}.\n4. (iii) Pairs for "${e3Label}": ${c3} pairs ⇒ P = ${c3}/36 = ${formatFrac(c3, 36)}.`,
    sillyTrap: `Counting unordered pairs (like (3,4) and (4,3) once instead of twice), OR counting total outcomes of two dice as 12 instead of 36!`,
  };
}

function generateSingleChapter(chapter: ChapterTopicKey, sub: number): GeneratedMathProblem {
  switch (chapter) {
    case 'ch01':
      return genCh01(sub);
    case 'ch02':
      return genCh02(sub);
    case 'ch03':
      return genCh03(sub);
    case 'ch04':
      return genCh04(sub);
    case 'ch05':
      return genCh05(sub);
    case 'ch06':
      return genCh06(sub);
    case 'ch07':
      return genCh07(sub);
    case 'ch08':
      return genCh08(sub);
    case 'ch09':
      return genCh09(sub);
    case 'ch10':
      return genCh10(sub);
    case 'ch11':
      return genCh11(sub);
    case 'ch12':
      return genCh12(sub);
    case 'ch13':
      return genCh13(sub);
    case 'ch14':
      return genCh14(sub);
  }
}

export function generateMathProblem(
  topic: DrillTopicKey,
  opts?: {
    subPatternIndex?: number;
    recentSignatures?: string[];
    lastSubPattern?: number;
    lastChapter?: ChapterTopicKey;
  }
): GeneratedMathProblem {
  const recent = opts?.recentSignatures ?? [];

  for (let attempt = 0; attempt < 18; attempt++) {
    let activeChapter: ChapterTopicKey;
    if (topic === 'mixed') {
      const candidates =
        opts?.lastChapter && CHAPTER_KEYS.length > 1 && attempt < 12
          ? CHAPTER_KEYS.filter((c) => c !== opts.lastChapter)
          : CHAPTER_KEYS;
      activeChapter = pick(candidates);
    } else {
      activeChapter = topic;
    }

    let sub: number;
    if (typeof opts?.subPatternIndex === 'number' && opts.subPatternIndex >= 0 && opts.subPatternIndex <= 2) {
      sub = opts.subPatternIndex;
    } else {
      const subOpts =
        typeof opts?.lastSubPattern === 'number' && attempt < 12
          ? [0, 1, 2].filter((s) => s !== opts.lastSubPattern)
          : [0, 1, 2];
      sub = pick(subOpts);
    }

    const problem = generateSingleChapter(activeChapter, sub);
    if (!recent.includes(problem.signature)) {
      return problem;
    }
  }

  const fallbackChapter = topic === 'mixed' ? pick(CHAPTER_KEYS) : topic;
  const fallbackSub =
    typeof opts?.subPatternIndex === 'number' && opts.subPatternIndex >= 0 && opts.subPatternIndex <= 2
      ? opts.subPatternIndex
      : randInt(0, 2);
  return generateSingleChapter(fallbackChapter, fallbackSub);
}
