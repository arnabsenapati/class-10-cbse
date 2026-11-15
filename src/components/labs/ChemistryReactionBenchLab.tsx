import { useEffect, useMemo, useRef, useState } from 'react';
import {
  CheckCircle2,
  Droplets,
  Flame,
  FlaskConical,
  Play,
  RotateCcw,
  Scale,
  Sparkles,
  Sun,
  Zap,
} from 'lucide-react';

type LabTab = 'wet-lab' | 'balancer-ph';

interface WetReaction {
  id: string;
  title: string;
  shortLabel: string;
  actionLabel: string;
  equation: string;
  type: string;
  observation: string;
  gasOrPpt: string;
  redoxNote: string;
  examTip: string;
}

const WET_REACTIONS: WetReaction[] = [
  {
    id: 'mg-ribbon',
    title: '1. Burning Magnesium Ribbon in Air',
    shortLabel: 'Burning Mg',
    actionLabel: 'Ignite Ribbon',
    equation: '2Mg(s) + O₂(g) —Δ→ 2MgO(s)',
    type: 'Combination + Oxidation (Exothermic)',
    observation: 'Burns with a dazzling blinding white flame and leaves behind a white ash powder of MgO.',
    gasOrPpt: 'White ash: MgO(s) (basic oxide)',
    redoxNote: 'Mg is oxidised (0 → +2, gains O); O₂ is reduced (0 → −2). Mg = Reducing Agent; O₂ = Oxidising Agent.',
    examTip: 'Always rub Mg ribbon with sandpaper first to remove the basic magnesium carbonate/oxide protective layer.',
  },
  {
    id: 'pbi2-ppt',
    title: '2. Lead Nitrate + Potassium Iodide',
    shortLabel: 'Pb(NO₃)₂ + KI',
    actionLabel: 'Mix Solutions',
    equation: 'Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s)↓ + 2KNO₃(aq)',
    type: 'Double Displacement (Precipitation)',
    observation: 'Two clear colourless solutions react instantaneously to form a dense golden-yellow precipitate settling at the bottom.',
    gasOrPpt: 'Golden-yellow precipitate: PbI₂(s)',
    redoxNote: 'Non-redox ion exchange: Pb²⁺ swaps with K⁺ to form insoluble Lead(II) iodide.',
    examTip: 'Often paired with Na₂SO₄ + BaCl₂ → BaSO₄↓ (white precipitate) as the 2 classic NCERT precipitation reactions.',
  },
  {
    id: 'fe-cuso4',
    title: '3. Iron Nail in Copper Sulphate Solution',
    shortLabel: 'Fe + CuSO₄',
    actionLabel: 'Dip Iron Nail',
    equation: 'Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)',
    type: 'Single Displacement + Redox',
    observation: 'Deep blue CuSO₄ gradually fades into pale green FeSO₄ while a reddish-brown copper coating forms on the dipped iron nail.',
    gasOrPpt: 'Reddish-brown Cu deposit on nail; Pale green FeSO₄(aq)',
    redoxNote: 'Fe is oxidised to Fe²⁺ (Reducing Agent); Cu²⁺ is reduced to Cu(s) (Oxidising Agent).',
    examTip: 'A second clean iron nail kept outside acts as control so colour fading and Cu coating are easily compared.',
  },
  {
    id: 'feso4-heat',
    title: '4. Thermal Decomposition of Ferrous Sulphate',
    shortLabel: 'Heat FeSO₄·7H₂O',
    actionLabel: 'Heat Crystals',
    equation: 'FeSO₄·7H₂O —Δ→ FeSO₄ + 7H₂O;  2FeSO₄(s) —Δ→ Fe₂O₃(s) + SO₂(g) + SO₃(g)',
    type: 'Thermal Decomposition (Endothermic)',
    observation: 'Pale green crystals first lose water to become dirty white anhydrous FeSO₄, then decompose into reddish-brown Fe₂O₃ + choking burning-sulphur gases.',
    gasOrPpt: 'Reddish-brown solid Fe₂O₃; Burning-sulphur smell (SO₂ + SO₃)',
    redoxNote: 'Fe²⁺ is oxidised to Fe³⁺ (Fe₂O₃) while part of S(+6) reduces to S(+4) in SO₂.',
    examTip: 'Do NOT point the boiling tube mouth towards yourself or classmates; waft fumes gently.',
  },
  {
    id: 'pbno3-heat',
    title: '5. Thermal Decomposition of Lead Nitrate',
    shortLabel: 'Heat Pb(NO₃)₂',
    actionLabel: 'Heat Strongly',
    equation: '2Pb(NO₃)₂(s) —Δ→ 2PbO(s) + 4NO₂(g)↑ + O₂(g)↑',
    type: 'Thermal Decomposition (Endothermic)',
    observation: 'White powder crackles (decrepitation), leaving a yellow residue of PbO and releasing swirling reddish-brown NO₂ fumes.',
    gasOrPpt: 'Yellow residue: PbO(s); Reddish-brown gas: NO₂(g) + O₂(g)',
    redoxNote: 'Nitrogen (+5 in NO₃⁻) is reduced to +4 (NO₂); Oxygen (−2) is oxidised to O₂(0).',
    examTip: 'Reddish-brown fumes on heating a white nitrate salt is the #1 CBSE clue identifying Lead(II) nitrate!',
  },
  {
    id: 'electrolysis-water',
    title: '6. Electrolysis of Acidified Water (2 : 1 Ratio)',
    shortLabel: 'H₂O Electrolysis',
    actionLabel: 'Switch On 6V',
    equation: '2H₂O(l) —Electricity→ 2H₂(g) + O₂(g)',
    type: 'Electrolytic Decomposition',
    observation: 'Bubbles rise rapidly at both carbon electrodes; gas volume collected at Cathode (−) is exactly TWICE that at Anode (+).',
    gasOrPpt: 'Cathode: 2 vol H₂ (pop sound); Anode: 1 vol O₂ (relights glowing splint)',
    redoxNote: 'Cathode reduction: 2H⁺ + 2e⁻ → H₂; Anode oxidation: 2O²⁻ → O₂ + 4e⁻.',
    examTip: 'A few drops of dil. H₂SO₄ are added because pure distilled water is a poor conductor of electricity.',
  },
  {
    id: 'agcl-sunlight',
    title: '7. Photolytic Decomposition of Silver Chloride',
    shortLabel: 'AgCl + Sunlight',
    actionLabel: 'Expose to Sun',
    equation: '2AgCl(s) —Sunlight→ 2Ag(s) + Cl₂(g)↑',
    type: 'Photolytic Decomposition (Endothermic)',
    observation: 'Pure white AgCl powder in a watch glass turns metallic grey as finely divided Silver forms and pungent Cl₂ escapes.',
    gasOrPpt: 'Grey metallic residue: Ag(s); Greenish-yellow gas: Cl₂(g)',
    redoxNote: 'Ag⁺ is reduced to Ag(0); Cl⁻ is oxidised to Cl₂(0).',
    examTip: '2AgBr(s) → 2Ag + Br₂ behaves identically (pale yellow → grey) and is used in Black & White photography!',
  },
  {
    id: 'cao-water',
    title: '8. Slaking of Quicklime (Calcium Oxide + Water)',
    shortLabel: 'CaO + H₂O',
    actionLabel: 'Add Water',
    equation: 'CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat',
    type: 'Combination + Strongly Exothermic',
    observation: 'Quicklime reacts vigorously with a hissing sound, releasing steam and making the beaker very hot (temperature shoots up!).',
    gasOrPpt: 'Slaked lime Ca(OH)₂(aq) suspension; Large heat evolved',
    redoxNote: 'Non-redox acid-base hydration: basic oxide CaO hydrates to Calcium hydroxide.',
    examTip: 'Whitewashing uses Ca(OH)₂, which slowly absorbs atmospheric CO₂ over 2–3 days to form a shiny CaCO₃ layer!',
  },
  {
    id: 'co2-limewater',
    title: '9. Passing CO₂ Through Limewater (Then Excess)',
    shortLabel: 'CO₂ + Limewater',
    actionLabel: 'Bubble CO₂',
    equation: 'Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s)↓ + H₂O(l)   |   Excess: CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂(aq)',
    type: 'Precipitation → Dissolution on Excess CO₂',
    observation: 'Clear limewater turns milky white due to insoluble CaCO₃; passing excess CO₂ turns it crystal clear again as soluble Ca(HCO₃)₂ forms.',
    gasOrPpt: 'Milky white CaCO₃(s) → Soluble colourless Ca(HCO₃)₂(aq)',
    redoxNote: 'Non-redox acid-base reaction (acidic non-metal oxide CO₂ + basic Ca(OH)₂).',
    examTip: 'Classic board trap: Always write BOTH equations when asked what happens on passing CO₂ first and then in excess!',
  },
  {
    id: 'esterification',
    title: '10. Esterification (Ethanoic Acid + Ethanol)',
    shortLabel: 'Esterification',
    actionLabel: 'Warm in Water Bath',
    equation: 'CH₃COOH(l) + C₂H₅OH(l) ⇌(conc. H₂SO₄, Δ) CH₃COOC₂H₅(l) + H₂O(l)',
    type: 'Condensation / Esterification (Reversible)',
    observation: 'Warmed gently in a water bath with conc. H₂SO₄ catalyst; a distinct sweet fruity-smelling ester layer (Ethyl ethanoate) forms.',
    gasOrPpt: 'Sweet fruity aroma: Ethyl ethanoate (CH₃COOC₂H₅)',
    redoxNote: 'Non-redox ester condensation; conc. H₂SO₄ acts as catalyst & dehydrating agent shifting equilibrium forward.',
    examTip: 'Reverse alkaline hydrolysis with NaOH (Saponification) is used in making soaps!',
  },
];

/* ============================================================================
 * TAB 2 DATA: STOICHIOMETRIC EQUATION BALANCER & INDICATOR TESTER
 * ========================================================================== */
interface BalanceTerm {
  formula: string;
  atoms: Record<string, number>;
}

interface BalanceProblem {
  id: string;
  label: string;
  ncertNote: string;
  lhs: BalanceTerm[];
  rhs: BalanceTerm[];
  solution: number[]; // [...lhs, ...rhs]
}

const BALANCE_PROBLEMS: BalanceProblem[] = [
  {
    id: 'fe-steam',
    label: 'Fe + H₂O → Fe₃O₄ + H₂',
    ncertNote: 'NCERT Ch 1 Box Method Classic (Iron + Steam)',
    lhs: [
      { formula: 'Fe', atoms: { Fe: 1 } },
      { formula: 'H₂O', atoms: { H: 2, O: 1 } },
    ],
    rhs: [
      { formula: 'Fe₃O₄', atoms: { Fe: 3, O: 4 } },
      { formula: 'H₂', atoms: { H: 2 } },
    ],
    solution: [3, 4, 1, 4],
  },
  {
    id: 'pbno3',
    label: 'Pb(NO₃)₂ → PbO + NO₂ + O₂',
    ncertNote: 'Thermal Decomposition yielding brown NO₂ fumes',
    lhs: [{ formula: 'Pb(NO₃)₂', atoms: { Pb: 1, N: 2, O: 6 } }],
    rhs: [
      { formula: 'PbO', atoms: { Pb: 1, O: 1 } },
      { formula: 'NO₂', atoms: { N: 1, O: 2 } },
      { formula: 'O₂', atoms: { O: 2 } },
    ],
    solution: [2, 2, 4, 1],
  },
  {
    id: 'al-hcl',
    label: 'Al + HCl → AlCl₃ + H₂',
    ncertNote: 'Metal + Dilute Acid Displacement',
    lhs: [
      { formula: 'Al', atoms: { Al: 1 } },
      { formula: 'HCl', atoms: { H: 1, Cl: 1 } },
    ],
    rhs: [
      { formula: 'AlCl₃', atoms: { Al: 1, Cl: 3 } },
      { formula: 'H₂', atoms: { H: 2 } },
    ],
    solution: [2, 6, 2, 3],
  },
  {
    id: 'thermit',
    label: 'Fe₂O₃ + Al → Fe + Al₂O₃',
    ncertNote: 'Ch 3 Thermit Welding Reaction',
    lhs: [
      { formula: 'Fe₂O₃', atoms: { Fe: 2, O: 3 } },
      { formula: 'Al', atoms: { Al: 1 } },
    ],
    rhs: [
      { formula: 'Fe', atoms: { Fe: 1 } },
      { formula: 'Al₂O₃', atoms: { Al: 2, O: 3 } },
    ],
    solution: [1, 2, 2, 1],
  },
  {
    id: 'ch4-o2',
    label: 'CH₄ + O₂ → CO₂ + H₂O',
    ncertNote: 'Combustion of Natural Gas (Exothermic)',
    lhs: [
      { formula: 'CH₄', atoms: { C: 1, H: 4 } },
      { formula: 'O₂', atoms: { O: 2 } },
    ],
    rhs: [
      { formula: 'CO₂', atoms: { C: 1, O: 2 } },
      { formula: 'H₂O', atoms: { H: 2, O: 1 } },
    ],
    solution: [1, 2, 1, 2],
  },
  {
    id: 'naoh-h2so4',
    label: 'NaOH + H₂SO₄ → Na₂SO₄ + H₂O',
    ncertNote: 'Acid-Base Neutralisation',
    lhs: [
      { formula: 'NaOH', atoms: { Na: 1, O: 1, H: 1 } },
      { formula: 'H₂SO₄', atoms: { H: 2, S: 1, O: 4 } },
    ],
    rhs: [
      { formula: 'Na₂SO₄', atoms: { Na: 2, S: 1, O: 4 } },
      { formula: 'H₂O', atoms: { H: 2, O: 1 } },
    ],
    solution: [2, 1, 1, 2],
  },
  {
    id: 'bacl2-al2so43',
    label: 'BaCl₂ + Al₂(SO₄)₃ → BaSO₄ + AlCl₃',
    ncertNote: 'CBSE Favourite Double Displacement',
    lhs: [
      { formula: 'BaCl₂', atoms: { Ba: 1, Cl: 2 } },
      { formula: 'Al₂(SO₄)₃', atoms: { Al: 2, S: 3, O: 12 } },
    ],
    rhs: [
      { formula: 'BaSO₄', atoms: { Ba: 1, S: 1, O: 4 } },
      { formula: 'AlCl₃', atoms: { Al: 1, Cl: 3 } },
    ],
    solution: [3, 1, 3, 2],
  },
  {
    id: 'mno2-hcl',
    label: 'MnO₂ + HCl → MnCl₂ + H₂O + Cl₂',
    ncertNote: 'Ch 1 Classic Redox Equation',
    lhs: [
      { formula: 'MnO₂', atoms: { Mn: 1, O: 2 } },
      { formula: 'HCl', atoms: { H: 1, Cl: 1 } },
    ],
    rhs: [
      { formula: 'MnCl₂', atoms: { Mn: 1, Cl: 2 } },
      { formula: 'H₂O', atoms: { H: 2, O: 1 } },
      { formula: 'Cl₂', atoms: { Cl: 2 } },
    ],
    solution: [1, 4, 1, 2, 1],
  },
];

interface PhSample {
  id: string;
  name: string;
  ph: number;
  category: 'Strong Acid' | 'Weak Acid' | 'Neutral' | 'Weak Base' | 'Strong Base';
  blueLitmus: { text: string; bg: string };
  redLitmus: { text: string; bg: string };
  phenolphthalein: { text: string; bg: string };
  methylOrange: { text: string; bg: string };
  turmeric: { text: string; bg: string };
  universalHex: string;
  universalLabel: string;
}

const PH_SAMPLES: PhSample[] = [
  {
    id: 'hcl',
    name: 'Dil. HCl (aq)',
    ph: 1.0,
    category: 'Strong Acid',
    blueLitmus: { text: 'Turns Red', bg: '#ef4444' },
    redLitmus: { text: 'Stays Red', bg: '#dc2626' },
    phenolphthalein: { text: 'Colourless', bg: '#e2e8f0' },
    methylOrange: { text: 'Red / Pink', bg: '#e11d48' },
    turmeric: { text: 'Stays Yellow', bg: '#facc15' },
    universalHex: '#dc2626',
    universalLabel: 'Dark Red (pH ~1.0)',
  },
  {
    id: 'vinegar',
    name: 'Vinegar (CH₃COOH)',
    ph: 2.9,
    category: 'Weak Acid',
    blueLitmus: { text: 'Turns Red', bg: '#ef4444' },
    redLitmus: { text: 'Stays Red', bg: '#dc2626' },
    phenolphthalein: { text: 'Colourless', bg: '#e2e8f0' },
    methylOrange: { text: 'Red-Orange', bg: '#f97316' },
    turmeric: { text: 'Stays Yellow', bg: '#facc15' },
    universalHex: '#f97316',
    universalLabel: 'Orange-Red (pH ~2.9)',
  },
  {
    id: 'water',
    name: 'Distilled Water',
    ph: 7.0,
    category: 'Neutral',
    blueLitmus: { text: 'Stays Blue', bg: '#3b82f6' },
    redLitmus: { text: 'Stays Red', bg: '#dc2626' },
    phenolphthalein: { text: 'Colourless', bg: '#e2e8f0' },
    methylOrange: { text: 'Orange (Unchanged)', bg: '#fb923c' },
    turmeric: { text: 'Stays Yellow', bg: '#facc15' },
    universalHex: '#16a34a',
    universalLabel: 'Green (pH 7.0)',
  },
  {
    id: 'baking-soda',
    name: 'Baking Soda (NaHCO₃)',
    ph: 8.4,
    category: 'Weak Base',
    blueLitmus: { text: 'Stays Blue', bg: '#3b82f6' },
    redLitmus: { text: 'Turns Blue', bg: '#2563eb' },
    phenolphthalein: { text: 'Light Pink', bg: '#f472b6' },
    methylOrange: { text: 'Yellow', bg: '#eab308' },
    turmeric: { text: 'Reddish-Brown', bg: '#b45309' },
    universalHex: '#0d9488',
    universalLabel: 'Teal-Blue (pH ~8.4)',
  },
  {
    id: 'soap',
    name: 'Soap Solution',
    ph: 9.8,
    category: 'Weak Base',
    blueLitmus: { text: 'Stays Blue', bg: '#3b82f6' },
    redLitmus: { text: 'Turns Blue', bg: '#2563eb' },
    phenolphthalein: { text: 'Bright Pink', bg: '#ec4899' },
    methylOrange: { text: 'Yellow', bg: '#eab308' },
    turmeric: { text: 'Reddish-Brown', bg: '#9a3412' },
    universalHex: '#2563eb',
    universalLabel: 'Blue (pH ~9.8)',
  },
  {
    id: 'naoh',
    name: 'NaOH Solution',
    ph: 14.0,
    category: 'Strong Base',
    blueLitmus: { text: 'Stays Blue', bg: '#3b82f6' },
    redLitmus: { text: 'Turns Blue', bg: '#1d4ed8' },
    phenolphthalein: { text: 'Deep Magenta-Pink', bg: '#db2777' },
    methylOrange: { text: 'Yellow', bg: '#facc15' },
    turmeric: { text: 'Deep Reddish-Brown', bg: '#7c2d12' },
    universalHex: '#6d28d9',
    universalLabel: 'Deep Violet (pH 14.0)',
  },
];

function lerpHex(hexA: string, hexB: string, t: number): string {
  const a = hexA.replace('#', '');
  const b = hexB.replace('#', '');
  const ar = parseInt(a.slice(0, 2), 16);
  const ag = parseInt(a.slice(2, 4), 16);
  const ab = parseInt(a.slice(4, 6), 16);
  const br = parseInt(b.slice(0, 2), 16);
  const bg = parseInt(b.slice(2, 4), 16);
  const bb = parseInt(b.slice(4, 6), 16);
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}

/* ============================================================================
 * WET-LAB SVG SCENE RENDERER (Uses progress 0..1)
 * ========================================================================== */
function WetLabSvg({
  reactionId,
  progress,
  excessCo2,
}: {
  reactionId: string;
  progress: number;
  excessCo2: boolean;
}) {
  const p = Math.max(0, Math.min(1, progress));

  return (
    <svg
      viewBox="0 0 460 220"
      className="w-full h-56 rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200 dark:from-slate-900 dark:to-slate-950 dark:border-slate-800"
      aria-label={`Simulation of ${reactionId}`}
    >
      {/* Bench top */}
      <rect x="0" y="192" width="460" height="28" fill="#cbd5e1" className="dark:fill-slate-800" />

      {reactionId === 'mg-ribbon' && (
        <g>
          {/* Spirit lamp / Burner */}
          <rect x="78" y="160" width="46" height="32" rx="6" fill="#475569" />
          <path d="M 95 160 Q 101 132 108 160 Z" fill="#f97316" />
          {/* Tongs holding Mg ribbon */}
          <line x1="255" y1="62" x2="152" y2="115" stroke="#64748b" strokeWidth="5" strokeLinecap="round" />
          {/* Mg ribbon shortening slightly as it burns */}
          <line
            x1="152"
            y1="115"
            x2={125 + p * 22}
            y2={128 - p * 11}
            stroke="#94a3b8"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Dazzling white flame */}
          {p > 0.05 && p < 0.96 && (
            <g>
              <circle
                cx={126 + p * 22}
                cy={127 - p * 11}
                r={14 + Math.sin(p * 30) * 4}
                fill="#fef08a"
                opacity="0.6"
              />
              <circle
                cx={126 + p * 22}
                cy={127 - p * 11}
                r={8 + Math.sin(p * 30) * 2}
                fill="#ffffff"
              />
            </g>
          )}
          {/* Watch glass + white MgO ash */}
          <path d="M 85 182 Q 140 202 195 182 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.8" />
          {p > 0.15 && (
            <ellipse
              cx="140"
              cy="184"
              rx={6 + p * 24}
              ry={3 + p * 5}
              fill="#f8fafc"
              stroke="#cbd5e1"
              strokeWidth="1"
            />
          )}
          <text x="330" y="95" className="fill-slate-700 dark:fill-slate-200 text-xs font-extrabold">
            {p < 0.1 ? 'Ready to ignite Mg' : p < 0.95 ? 'Dazzling White Flame!' : 'White MgO Ash Collected'}
          </text>
          <text x="330" y="114" className="fill-slate-500 dark:fill-slate-400 text-[11px] font-semibold">
            Clean Mg with sandpaper first
          </text>
        </g>
      )}

      {reactionId === 'pbi2-ppt' && (
        <g>
          {/* Beaker */}
          <path
            d="M 140 55 L 140 176 Q 140 186 152 186 L 248 186 Q 260 186 260 176 L 260 55"
            fill="none"
            stroke="#475569"
            strokeWidth="3"
          />
          {/* Solution turning golden yellow */}
          <rect
            x="142"
            y="88"
            width="116"
            height="96"
            rx="6"
            fill={lerpHex('#e0f2fe', '#fef08a', Math.min(1, p * 1.4))}
            opacity="0.72"
          />
          {/* Pouring tube of KI */}
          <g transform={`translate(226, 36) rotate(${p > 0.02 && p < 0.4 ? -32 : 0})`}>
            <rect x="-10" y="-22" width="20" height="44" rx="8" fill="#e0f2fe" stroke="#475569" strokeWidth="2" />
          </g>
          {/* Settling golden-yellow PbI2 particles */}
          {p > 0.08 && (
            <g>
              <rect
                x="144"
                y={184 - p * 28}
                width="112"
                height={p * 28}
                rx="4"
                fill="#eab308"
                opacity="0.95"
              />
              {[158, 178, 200, 222, 240].map((cx, idx) => (
                <circle
                  key={idx}
                  cx={cx}
                  cy={96 + ((p * 90 + idx * 14) % 72)}
                  r="3.2"
                  fill="#ca8a04"
                  opacity={1 - p * 0.45}
                />
              ))}
            </g>
          )}
          <text x="355" y="102" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-xs font-extrabold">
            {p < 0.08 ? 'Clear Pb(NO₃)₂ + KI' : 'Golden-Yellow PbI₂↓'}
          </text>
          <text x="355" y="120" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[11px]">
            Double Displacement Precipitate
          </text>
        </g>
      )}

      {reactionId === 'fe-cuso4' && (
        <g>
          {/* Beaker */}
          <path
            d="M 140 52 L 140 176 Q 140 186 152 186 L 248 186 Q 260 186 260 176 L 260 52"
            fill="none"
            stroke="#475569"
            strokeWidth="3"
          />
          {/* Blue CuSO4 -> Pale Green FeSO4 */}
          <rect
            x="142"
            y="84"
            width="116"
            height="100"
            rx="6"
            fill={lerpHex('#2563eb', '#86efac', p)}
            opacity="0.72"
          />
          {/* Iron Nail dipped inside */}
          <line x1="215" y1="36" x2="188" y2="168" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
          {/* Reddish-brown Cu coating on submerged part */}
          {p > 0.05 && (
            <line
              x1="205"
              y1="84"
              x2="188"
              y2="168"
              stroke="#b45309"
              strokeWidth="8.5"
              strokeLinecap="round"
              opacity={Math.min(1, p * 1.15)}
            />
          )}
          <text x="358" y="96" textAnchor="middle" className="fill-slate-800 dark:fill-slate-100 text-xs font-extrabold">
            {p < 0.1 ? 'Blue CuSO₄(aq)' : p < 0.85 ? 'Fading Blue → Pale Green' : 'Pale Green FeSO₄(aq)'}
          </text>
          <text x="358" y="114" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-bold">
            Reddish-brown Cu coats Fe nail ({Math.round(p * 100)}%)
          </text>
        </g>
      )}

      {(reactionId === 'feso4-heat' || reactionId === 'pbno3-heat') && (
        <g>
          {/* Burner flame */}
          <path d="M 110 188 Q 98 158 114 142 Q 124 156 122 138 Q 134 156 126 188 Z" fill="#f97316" />
          <rect x="102" y="180" width="32" height="12" rx="2" fill="#475569" />
          {/* Tilted boiling tube */}
          <g transform="translate(175, 112) rotate(-35)">
            <rect x="-72" y="-20" width="146" height="40" rx="20" fill="none" stroke="#475569" strokeWidth="2.8" />
            {/* Salt colour */}
            <path
              d="M -69 2 A 18 18 0 0 0 -52 18 L -18 18 L -22 -2 L -69 2 Z"
              fill={
                reactionId === 'feso4-heat'
                  ? p < 0.45
                    ? lerpHex('#4ade80', '#e2e8f0', p / 0.45)
                    : lerpHex('#e2e8f0', '#9a3412', (p - 0.45) / 0.55)
                  : lerpHex('#f8fafc', '#eab308', p)
              }
            />
          </g>
          {/* Fumes */}
          {p > 0.25 && (
            <g opacity={Math.min(0.9, (p - 0.2) * 1.2)}>
              <circle cx="268" cy={64 - p * 18} r="18" fill={reactionId === 'feso4-heat' ? '#cbd5e1' : '#b45309'} opacity="0.65" />
              <circle cx="292" cy={46 - p * 22} r="14" fill={reactionId === 'feso4-heat' ? '#94a3b8' : '#9a3412'} opacity="0.55" />
            </g>
          )}
          <text x="358" y="96" textAnchor="middle" className="fill-slate-800 dark:fill-slate-100 text-xs font-extrabold">
            {reactionId === 'feso4-heat'
              ? p < 0.45
                ? 'Green → White Anhydrous'
                : 'Brown Fe₂O₃ + SO₂/SO₃'
              : p < 0.2
              ? 'White Pb(NO₃)₂'
              : 'Yellow PbO + Brown NO₂'}
          </text>
          <text x="358" y="116" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[11px]">
            {reactionId === 'feso4-heat' ? 'Choking burning-sulphur smell' : 'Swirling reddish-brown NO₂ fumes'}
          </text>
        </g>
      )}

      {reactionId === 'electrolysis-water' && (
        <g>
          {/* Mug */}
          <path d="M 110 42 L 110 176 Q 110 184 120 184 L 280 184 Q 290 184 290 176 L 290 42" fill="none" stroke="#475569" strokeWidth="2.8" />
          <rect x="112" y="64" width="176" height="118" rx="4" fill="#38bdf8" opacity="0.24" />
          {/* Cathode H2 tube (2x gas column) */}
          <path d="M 142 152 L 142 36 A 16 16 0 0 1 174 36 L 174 152" fill="none" stroke="#334155" strokeWidth="2.2" />
          <path
            d={`M 144 ${38 + p * 58} L 144 36 A 14 14 0 0 1 172 36 L 172 ${38 + p * 58} Z`}
            fill="#0284c7"
            opacity="0.35"
          />
          {/* Anode O2 tube (1x gas column) */}
          <path d="M 226 152 L 226 36 A 16 16 0 0 1 258 36 L 258 152" fill="none" stroke="#334155" strokeWidth="2.2" />
          <path
            d={`M 228 ${38 + p * 29} L 228 36 A 14 14 0 0 1 256 36 L 256 ${38 + p * 29} Z`}
            fill="#e11d48"
            opacity="0.3"
          />
          {/* Electrodes */}
          <rect x="155" y="114" width="7" height="72" rx="2" fill="#1e293b" />
          <rect x="239" y="114" width="7" height="72" rx="2" fill="#1e293b" />
          {/* Rising bubbles */}
          {p > 0.05 && (
            <g>
              {[0, 1, 2, 3].map((i) => (
                <circle key={`h-${i}`} cx={154 + (i % 2) * 8} cy={112 - ((p * 65 + i * 16) % 52)} r="2.6" fill="#0284c7" />
              ))}
              {[0, 1].map((i) => (
                <circle key={`o-${i}`} cx={240 + i * 6} cy={112 - ((p * 42 + i * 20) % 45)} r="2.2" fill="#e11d48" />
              ))}
            </g>
          )}
          <text x="158" y="20" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-[10.5px] font-extrabold">
            Cathode (−): 2V H₂
          </text>
          <text x="242" y="20" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-extrabold">
            Anode (+): 1V O₂
          </text>
          <text x="372" y="95" textAnchor="middle" className="fill-slate-800 dark:fill-white text-xs font-extrabold">
            Ratio H₂ : O₂ = 2 : 1
          </text>
          <text x="372" y="114" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-[10.5px] font-bold">
            H₂: Pop sound with flame
          </text>
          <text x="372" y="130" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-bold">
            O₂: Relights glowing splint
          </text>
        </g>
      )}

      {reactionId === 'agcl-sunlight' && (
        <g>
          <circle cx="82" cy="48" r="22" fill="#fbbf24" opacity={0.4 + p * 0.6} />
          {p > 0.05 && (
            <g stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5 4">
              <line x1="104" y1="62" x2="178" y2="146" />
              <line x1="94" y1="74" x2="152" y2="150" />
              <line x1="112" y1="52" x2="205" y2="144" />
            </g>
          )}
          {/* China dish */}
          <path d="M 118 152 Q 190 192 262 152 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
          <path
            d="M 142 154 Q 190 124 238 154 Z"
            fill={lerpHex('#ffffff', '#64748b', p)}
            stroke="#475569"
            strokeWidth="1.4"
          />
          {p > 0.2 && (
            <text x="275" y={118 - p * 30} className="fill-emerald-700 dark:fill-emerald-300 text-xs font-extrabold">
              Cl₂(g) ↑
            </text>
          )}
          <text x="360" y="106" textAnchor="middle" className="fill-slate-800 dark:fill-white text-xs font-extrabold">
            {p < 0.15 ? 'White AgCl(s)' : 'Grey Metallic Ag(s)'}
          </text>
          <text x="360" y="124" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[11px]">
            Used in B&amp;W Photography
          </text>
        </g>
      )}

      {reactionId === 'cao-water' && (
        <g>
          {/* Beaker */}
          <path d="M 120 62 L 120 176 Q 120 186 132 186 L 238 186 Q 250 186 250 176 L 250 62" fill="none" stroke="#475569" strokeWidth="3" />
          {/* Suspension */}
          <rect x="122" y="98" width="126" height="86" rx="5" fill="#e0f2fe" opacity="0.65" />
          <ellipse cx="185" cy="176" rx="46" ry="8" fill="#f8fafc" stroke="#cbd5e1" />
          {/* Steam & hissing bubbles */}
          {p > 0.1 && (
            <g>
              <circle cx="155" cy={145 - p * 35} r="4" fill="#ffffff" opacity="0.8" />
              <circle cx="195" cy={150 - p * 42} r="5" fill="#ffffff" opacity="0.8" />
              <path d="M 155 58 Q 148 40 162 24" fill="none" stroke="#94a3b8" strokeWidth="3" opacity={p} />
              <path d="M 195 58 Q 204 38 190 20" fill="none" stroke="#94a3b8" strokeWidth="3" opacity={p} />
            </g>
          )}
          {/* Thermometer */}
          <rect x="292" y="34" width="14" height="134" rx="7" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
          <circle cx="299" cy="168" r="12" fill="#dc2626" />
          <rect
            x="295.5"
            y={142 - p * 86}
            width="7"
            height={28 + p * 86}
            rx="3"
            fill="#dc2626"
          />
          <text x="380" y="96" textAnchor="middle" className="fill-rose-700 dark:fill-rose-400 text-xs font-extrabold">
            Temp: {Math.round(25 + p * 60)} °C
          </text>
          <text x="380" y="114" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[11px]">
            Exothermic Slaking!
          </text>
        </g>
      )}

      {reactionId === 'co2-limewater' && (
        <g>
          {/* Test tube */}
          <path d="M 160 44 L 160 156 A 26 26 0 0 0 212 156 L 212 44" fill="none" stroke="#475569" strokeWidth="2.8" />
          {/* Limewater colour */}
          <path
            d="M 162 92 L 162 156 A 24 24 0 0 0 210 156 L 210 92 Z"
            fill={
              excessCo2
                ? lerpHex('#ffffff', '#e0f2fe', p)
                : lerpHex('#e0f2fe', '#ffffff', p)
            }
            stroke="#cbd5e1"
            strokeWidth="1"
          />
          {/* Delivery tube */}
          <polyline points="82,42 186,42 186,144" fill="none" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
          {/* CO2 bubbles */}
          {p > 0.05 && (
            <g fill="#38bdf8" opacity="0.85">
              <circle cx="186" cy={140 - ((p * 80) % 42)} r="3" />
              <circle cx="181" cy={130 - ((p * 60) % 34)} r="2.5" />
              <circle cx="192" cy={135 - ((p * 70) % 38)} r="2.5" />
            </g>
          )}
          <text x="338" y="96" textAnchor="middle" className="fill-slate-800 dark:fill-white text-xs font-extrabold">
            {excessCo2
              ? p > 0.4
                ? 'Clear Again! Ca(HCO₃)₂(aq)'
                : 'Dissolving Milky CaCO₃...'
              : p > 0.3
              ? 'Milky White! CaCO₃(s)↓'
              : 'Clear Limewater Ca(OH)₂'}
          </text>
          <text x="338" y="116" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[11px]">
            {excessCo2 ? 'Excess CO₂ forms soluble bicarbonate' : 'Insoluble calcium carbonate precipitate'}
          </text>
        </g>
      )}

      {reactionId === 'esterification' && (
        <g>
          {/* Water bath beaker */}
          <path d="M 122 68 L 122 178 Q 122 186 134 186 L 238 186 Q 250 186 250 178 L 250 68" fill="none" stroke="#475569" strokeWidth="2.8" />
          <rect x="124" y="94" width="124" height="90" rx="5" fill="#bae6fd" opacity="0.45" />
          {/* Inner test tube */}
          <path d="M 168 38 L 168 148 A 18 18 0 0 0 204 148 L 204 38" fill="none" stroke="#334155" strokeWidth="2.4" />
          {/* Lower aqueous layer */}
          <path d="M 170 112 L 170 148 A 16 16 0 0 0 202 148 L 202 112 Z" fill="#e0f2fe" />
          {/* Top fruity ester layer appearing */}
          {p > 0.1 && (
            <rect
              x="170"
              y={112 - p * 18}
              width="32"
              height={p * 18}
              fill="#fde047"
              opacity="0.9"
            />
          )}
          <text x="352" y="96" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-xs font-extrabold">
            {p < 0.2 ? 'CH₃COOH + C₂H₅OH + conc. H₂SO₄' : 'Sweet Fruity Ester Layer!'}
          </text>
          <text x="352" y="114" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[11px]">
            Warm water bath (conc. H₂SO₄ catalyst)
          </text>
        </g>
      )}
    </svg>
  );
}

/* ============================================================================
 * MAIN COMPONENT
 * ========================================================================== */
export function ChemistryReactionBenchLab() {
  const [activeTab, setActiveTab] = useState<LabTab>('wet-lab');

  // Tab 1 state
  const [selectedReactionId, setSelectedReactionId] = useState<string>(WET_REACTIONS[0].id);
  const [progress, setProgress] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [excessCo2, setExcessCo2] = useState<boolean>(false);
  const rafRef = useRef<number | null>(null);

  // Tab 2A Balancer state
  const [balIdx, setBalIdx] = useState<number>(0);
  const currentBal = BALANCE_PROBLEMS[balIdx];
  const [coeffs, setCoeffs] = useState<number[]>(() =>
    new Array(BALANCE_PROBLEMS[0].lhs.length + BALANCE_PROBLEMS[0].rhs.length).fill(1)
  );

  // Tab 2B Indicator state
  const [sampleId, setSampleId] = useState<string>('hcl');
  const [dipped, setDipped] = useState<boolean>(true);

  const selectedReaction = useMemo(
    () => WET_REACTIONS.find((r) => r.id === selectedReactionId) ?? WET_REACTIONS[0],
    [selectedReactionId]
  );

  useEffect(() => {
    if (!isAnimating) return;
    let start: number | null = null;
    const durationMs = 2400;
    const tick = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start;
      const nextP = Math.min(1, elapsed / durationMs);
      setProgress(nextP);
      if (nextP < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setIsAnimating(false);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isAnimating]);

  const handleSelectReaction = (id: string) => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    setIsAnimating(false);
    setSelectedReactionId(id);
    setProgress(0);
    setExcessCo2(false);
  };

  const handleRunReaction = () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    setProgress(0);
    setIsAnimating(true);
  };

  const handleToggleExcessCo2 = () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    setExcessCo2((prev) => !prev);
    setProgress(0);
    setIsAnimating(true);
  };

  // Balancer calculations
  const handleSelectBalancer = (idx: number) => {
    setBalIdx(idx);
    const p = BALANCE_PROBLEMS[idx];
    setCoeffs(new Array(p.lhs.length + p.rhs.length).fill(1));
  };

  const adjustCoeff = (pos: number, delta: number) => {
    setCoeffs((prev) =>
      prev.map((val, i) => (i === pos ? Math.max(1, Math.min(6, val + delta)) : val))
    );
  };

  const atomSummary = useMemo(() => {
    const elements = Array.from(
      new Set([
        ...currentBal.lhs.flatMap((t) => Object.keys(t.atoms)),
        ...currentBal.rhs.flatMap((t) => Object.keys(t.atoms)),
      ])
    );
    const lhsCounts: Record<string, number> = {};
    const rhsCounts: Record<string, number> = {};
    for (const el of elements) {
      lhsCounts[el] = 0;
      rhsCounts[el] = 0;
    }
    currentBal.lhs.forEach((term, i) => {
      for (const [el, cnt] of Object.entries(term.atoms)) {
        lhsCounts[el] += cnt * coeffs[i];
      }
    });
    currentBal.rhs.forEach((term, j) => {
      const c = coeffs[currentBal.lhs.length + j];
      for (const [el, cnt] of Object.entries(term.atoms)) {
        rhsCounts[el] += cnt * c;
      }
    });
    const allEqual = elements.every((el) => lhsCounts[el] === rhsCounts[el]);
    const isSimplest =
      allEqual && coeffs.every((c, i) => c === currentBal.solution[i]);
    return { elements, lhsCounts, rhsCounts, allEqual, isSimplest };
  }, [currentBal, coeffs]);

  const activeSample = PH_SAMPLES.find((s) => s.id === sampleId) ?? PH_SAMPLES[0];

  return (
    <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50/50 to-white p-4 sm:p-5 space-y-4 no-word-lookup select-none dark:border-violet-900/60 dark:from-slate-900 dark:to-slate-950">
      {/* Header & Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <FlaskConical className="h-5 w-5 text-violet-600 dark:text-violet-400" />
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              CBSE Wet-Lab Bench, Equation Balancer &amp; pH Strip Tester
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-400">
              10 iconic NCERT reactions + 8 CBSE balancing equations + 6-indicator pH bench
            </p>
          </div>
        </div>

        <div className="flex rounded-xl border border-slate-200 bg-white p-1 gap-1 dark:border-slate-700 dark:bg-slate-900">
          <button
            type="button"
            onClick={() => setActiveTab('wet-lab')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              activeTab === 'wet-lab'
                ? 'bg-violet-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
            }`}
          >
            1. 2D Wet-Lab (10 Reactions)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('balancer-ph')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              activeTab === 'balancer-ph'
                ? 'bg-violet-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
            }`}
          >
            2. Balancer &amp; pH Indicators
          </button>
        </div>
      </div>

      {activeTab === 'wet-lab' ? (
        <div className="space-y-4">
          {/* 10 Reaction Pills */}
          <div className="flex flex-wrap gap-1.5">
            {WET_REACTIONS.map((rxn) => (
              <button
                key={rxn.id}
                type="button"
                onClick={() => handleSelectReaction(rxn.id)}
                className={`rounded-lg px-2.5 py-1.5 text-[11px] font-bold border transition cursor-pointer ${
                  selectedReactionId === rxn.id
                    ? 'bg-violet-600 text-white border-violet-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
                }`}
              >
                {rxn.shortLabel}
              </button>
            ))}
          </div>

          {/* Stage + Controls */}
          <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-3 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                {selectedReaction.id === 'agcl-sunlight' ? (
                  <Sun className="h-4 w-4 text-amber-500" />
                ) : selectedReaction.id === 'electrolysis-water' ? (
                  <Zap className="h-4 w-4 text-sky-500" />
                ) : (
                  <Flame className="h-4 w-4 text-orange-500" />
                )}
                {selectedReaction.title}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {selectedReaction.id === 'co2-limewater' && (
                  <button
                    type="button"
                    onClick={handleToggleExcessCo2}
                    className={`rounded-lg px-2.5 py-1.5 text-xs font-bold border transition cursor-pointer ${
                      excessCo2
                        ? 'bg-sky-600 text-white border-sky-600'
                        : 'bg-sky-50 text-sky-900 border-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800'
                    }`}
                  >
                    {excessCo2 ? 'Mode: Excess CO₂ (Clear)' : 'Pass Excess CO₂'}
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleRunReaction}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-violet-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-violet-700 transition cursor-pointer"
                >
                  <Play className="h-3.5 w-3.5" />
                  {selectedReaction.actionLabel}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
                    setIsAnimating(false);
                    setProgress(0);
                    setExcessCo2(false);
                  }}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Reset
                </button>
              </div>
            </div>

            <WetLabSvg
              reactionId={selectedReaction.id}
              progress={progress}
              excessCo2={excessCo2}
            />

            {/* Progress Scrub Slider */}
            <div className="flex items-center gap-3 text-xs">
              <span className="font-bold text-slate-600 dark:text-slate-400 shrink-0">
                Reaction Progress: {Math.round(progress * 100)}%
              </span>
              <input
                type="range"
                min={0}
                max={100}
                value={Math.round(progress * 100)}
                onChange={(e) => {
                  setIsAnimating(false);
                  setProgress(Number(e.target.value) / 100);
                }}
                className="w-full accent-violet-600 cursor-pointer"
                aria-label="Scrub reaction progress"
              />
            </div>

            {/* Structured CBSE Readout */}
            <div className="grid gap-2.5 sm:grid-cols-2 text-xs">
              <div className="rounded-lg border border-violet-200 bg-violet-50/60 p-2.5 dark:border-violet-900 dark:bg-violet-950/30">
                <div className="text-[10.5px] font-extrabold uppercase text-violet-700 dark:text-violet-400">
                  Balanced Chemical Equation
                </div>
                <div className="font-mono font-bold text-slate-900 dark:text-white mt-1">
                  {selectedReaction.equation}
                </div>
              </div>
              <div className="rounded-lg border border-sky-200 bg-sky-50/60 p-2.5 dark:border-sky-900 dark:bg-sky-950/30">
                <div className="text-[10.5px] font-extrabold uppercase text-sky-700 dark:text-sky-400">
                  Reaction Type &amp; Key Product
                </div>
                <div className="font-bold text-slate-900 dark:text-white mt-1">
                  {selectedReaction.type}
                </div>
                <div className="text-[11px] text-slate-700 dark:text-slate-300 mt-0.5">
                  {selectedReaction.gasOrPpt}
                </div>
              </div>
              <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-2.5 dark:border-emerald-900 dark:bg-emerald-950/30">
                <div className="text-[10.5px] font-extrabold uppercase text-emerald-700 dark:text-emerald-400">
                  Wet-Lab Observation
                </div>
                <p className="text-slate-700 dark:text-slate-300 mt-1">{selectedReaction.observation}</p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-2.5 dark:border-amber-900 dark:bg-amber-950/30">
                <div className="text-[10.5px] font-extrabold uppercase text-amber-700 dark:text-amber-400">
                  Oxidation vs Reduction Breakdown
                </div>
                <p className="text-slate-700 dark:text-slate-300 mt-1">{selectedReaction.redoxNote}</p>
              </div>
            </div>

            <div className="rounded-lg bg-slate-100/80 px-3 py-2 text-[11px] text-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <strong>CBSE Board Tip:</strong> {selectedReaction.examTip}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          {/* Sub-panel A: Stoichiometric Equation Balancer */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3.5 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                <Scale className="h-4 w-4 text-violet-600" />
                Stoichiometric Equation Balancer (8 CBSE Classics)
              </div>
              {atomSummary.allEqual && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-extrabold text-white">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {atomSummary.isSimplest
                    ? 'Balanced! (Simplest Ratio)'
                    : 'Balanced! (Tip: Divide by common factor)'}
                </span>
              )}
            </div>

            {/* 8 Problem Selector */}
            <div className="flex flex-wrap gap-1.5">
              {BALANCE_PROBLEMS.map((prob, idx) => (
                <button
                  key={prob.id}
                  type="button"
                  onClick={() => handleSelectBalancer(idx)}
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-mono font-bold border transition cursor-pointer ${
                    balIdx === idx
                      ? 'bg-violet-600 text-white border-violet-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
                  }`}
                >
                  {prob.label}
                </button>
              ))}
            </div>

            {/* Interactive Coefficients Row */}
            <div className="rounded-xl border border-violet-200 bg-violet-50/40 p-3 flex flex-wrap items-center justify-center gap-2 dark:border-violet-900/60 dark:bg-violet-950/20">
              {currentBal.lhs.map((term, i) => (
                <div key={`l-${i}`} className="flex items-center gap-1.5">
                  {i > 0 && <span className="font-extrabold text-slate-500">+</span>}
                  <div className="flex items-center rounded-lg border border-slate-300 bg-white overflow-hidden dark:border-slate-700 dark:bg-slate-900">
                    <button
                      type="button"
                      onClick={() => adjustCoeff(i, -1)}
                      className="px-2 py-1 text-xs font-extrabold bg-slate-100 hover:bg-slate-200 cursor-pointer dark:bg-slate-800 dark:text-white"
                      aria-label={`Decrease coefficient for ${term.formula}`}
                    >
                      −
                    </button>
                    <span className="px-2.5 py-1 font-mono text-sm font-extrabold text-violet-700 dark:text-violet-300">
                      {coeffs[i]}
                    </span>
                    <button
                      type="button"
                      onClick={() => adjustCoeff(i, 1)}
                      className="px-2 py-1 text-xs font-extrabold bg-slate-100 hover:bg-slate-200 cursor-pointer dark:bg-slate-800 dark:text-white"
                      aria-label={`Increase coefficient for ${term.formula}`}
                    >
                      +
                    </button>
                  </div>
                  <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                    {term.formula}
                  </span>
                </div>
              ))}

              <span className="font-extrabold text-lg text-violet-600 px-1">→</span>

              {currentBal.rhs.map((term, j) => {
                const pos = currentBal.lhs.length + j;
                return (
                  <div key={`r-${j}`} className="flex items-center gap-1.5">
                    {j > 0 && <span className="font-extrabold text-slate-500">+</span>}
                    <div className="flex items-center rounded-lg border border-slate-300 bg-white overflow-hidden dark:border-slate-700 dark:bg-slate-900">
                      <button
                        type="button"
                        onClick={() => adjustCoeff(pos, -1)}
                        className="px-2 py-1 text-xs font-extrabold bg-slate-100 hover:bg-slate-200 cursor-pointer dark:bg-slate-800 dark:text-white"
                        aria-label={`Decrease coefficient for ${term.formula}`}
                      >
                        −
                      </button>
                      <span className="px-2.5 py-1 font-mono text-sm font-extrabold text-violet-700 dark:text-violet-300">
                        {coeffs[pos]}
                      </span>
                      <button
                        type="button"
                        onClick={() => adjustCoeff(pos, 1)}
                        className="px-2 py-1 text-xs font-extrabold bg-slate-100 hover:bg-slate-200 cursor-pointer dark:bg-slate-800 dark:text-white"
                        aria-label={`Increase coefficient for ${term.formula}`}
                      >
                        +
                      </button>
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                      {term.formula}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Live Atom Count Bars */}
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {atomSummary.elements.map((el) => {
                const l = atomSummary.lhsCounts[el];
                const r = atomSummary.rhsCounts[el];
                const maxVal = Math.max(1, l, r);
                const match = l === r;
                return (
                  <div
                    key={el}
                    className={`rounded-lg border p-2.5 text-xs ${
                      match
                        ? 'border-emerald-300 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/20'
                        : 'border-rose-200 bg-rose-50/50 dark:border-rose-900 dark:bg-rose-950/20'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold mb-1.5">
                      <span className="font-mono text-slate-900 dark:text-white">Element: {el}</span>
                      <span className={match ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}>
                        {l} {match ? '=' : '≠'} {r}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px]">
                        <span className="w-6 font-bold">LHS</span>
                        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden dark:bg-slate-800">
                          <div className="h-full bg-violet-600 transition-all" style={{ width: `${(l / maxVal) * 100}%` }} />
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px]">
                        <span className="w-6 font-bold">RHS</span>
                        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden dark:bg-slate-800">
                          <div className="h-full bg-sky-500 transition-all" style={{ width: `${(r / maxVal) * 100}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <span>{currentBal.ncertNote}</span>
              <button
                type="button"
                onClick={() => setCoeffs(new Array(currentBal.solution.length).fill(1))}
                className="font-bold text-violet-700 hover:underline cursor-pointer dark:text-violet-400"
              >
                Reset to 1s
              </button>
            </div>
          </div>

          {/* Sub-panel B: pH & Multi-Indicator Strip Tester */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3.5 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                <Droplets className="h-4 w-4 text-sky-600" />
                Multi-Indicator &amp; Universal pH Strip Tester
              </div>
              <button
                type="button"
                onClick={() => setDipped(true)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-sky-700 cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5" /> Dip All 6 Indicators
              </button>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {PH_SAMPLES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setSampleId(s.id);
                    setDipped(true);
                  }}
                  className={`rounded-lg px-2.5 py-1.5 text-[11px] font-bold border transition cursor-pointer ${
                    sampleId === s.id
                      ? 'bg-sky-600 text-white border-sky-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>

            {dipped && (
              <div className="grid gap-2.5 sm:grid-cols-3 lg:grid-cols-6 text-xs">
                {[
                  { name: 'Blue Litmus', res: activeSample.blueLitmus.text, hex: activeSample.blueLitmus.bg },
                  { name: 'Red Litmus', res: activeSample.redLitmus.text, hex: activeSample.redLitmus.bg },
                  { name: 'Phenolphthalein', res: activeSample.phenolphthalein.text, hex: activeSample.phenolphthalein.bg },
                  { name: 'Methyl Orange', res: activeSample.methylOrange.text, hex: activeSample.methylOrange.bg },
                  { name: 'Turmeric (Haldi)', res: activeSample.turmeric.text, hex: activeSample.turmeric.bg },
                  { name: 'Universal pH Strip', res: activeSample.universalLabel, hex: activeSample.universalHex },
                ].map((ind) => (
                  <div
                    key={ind.name}
                    className="rounded-xl border border-slate-200 bg-slate-50/70 p-2.5 space-y-2 dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="font-bold text-[11px] text-slate-700 dark:text-slate-200">{ind.name}</div>
                    <div
                      className="h-7 w-full rounded-md border border-black/10 transition-colors duration-300"
                      style={{ backgroundColor: ind.hex }}
                    />
                    <div className="font-extrabold text-[11px] text-slate-900 dark:text-white">{ind.res}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
