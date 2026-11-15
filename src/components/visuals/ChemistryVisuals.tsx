import { useState } from 'react';
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Flame,
  Sun,
  Zap,
} from 'lucide-react';
import { DiagramId } from '../../types/curriculum';

export type ChemistryDiagramId =
  | 'decomposition-trio-visual'
  | 'ph-scale-and-chlor-alkali-map'
  | 'metallurgy-flowchart-and-rusting'
  | 'electron-dot-and-isomers-gallery';

const CHEMISTRY_DIAGRAM_IDS = new Set<string>([
  'decomposition-trio-visual',
  'ph-scale-and-chlor-alkali-map',
  'metallurgy-flowchart-and-rusting',
  'electron-dot-and-isomers-gallery',
]);

export function isChemistryDiagramId(id: DiagramId): id is ChemistryDiagramId {
  return CHEMISTRY_DIAGRAM_IDS.has(id);
}

/* ============================================================================
 * 1. DECOMPOSITION TRIO VISUAL (Thermal, Electrolytic 2:1, Photolytic)
 * ========================================================================== */
function DecompositionTrioVisual() {
  const [thermalMode, setThermalMode] = useState<'feso4' | 'pbno3'>('feso4');
  const [electroSwitchOn, setElectroSwitchOn] = useState(true);
  const [sunExposed, setSunExposed] = useState(true);
  const [halideSalt, setHalideSalt] = useState<'agcl' | 'agbr'>('agcl');

  return (
    <div className="space-y-4 no-word-lookup select-none">
      <div className="grid gap-3.5 lg:grid-cols-3">
        {/* Panel 1: Thermal Decomposition */}
        <div className="rounded-xl border border-orange-200 bg-white p-3.5 flex flex-col justify-between dark:border-orange-900/60 dark:bg-slate-950">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-orange-700 dark:text-orange-400">
                <Flame className="h-3.5 w-3.5" /> 1. Thermal (Heat Δ)
              </span>
              <div className="flex rounded-lg border border-orange-200 overflow-hidden text-[10px] font-bold dark:border-orange-800">
                <button
                  type="button"
                  onClick={() => setThermalMode('feso4')}
                  className={`px-2 py-0.5 cursor-pointer transition ${
                    thermalMode === 'feso4'
                      ? 'bg-orange-600 text-white'
                      : 'bg-orange-50 text-orange-800 dark:bg-slate-900 dark:text-orange-300'
                  }`}
                >
                  FeSO₄
                </button>
                <button
                  type="button"
                  onClick={() => setThermalMode('pbno3')}
                  className={`px-2 py-0.5 cursor-pointer transition ${
                    thermalMode === 'pbno3'
                      ? 'bg-orange-600 text-white'
                      : 'bg-orange-50 text-orange-800 dark:bg-slate-900 dark:text-orange-300'
                  }`}
                >
                  Pb(NO₃)₂
                </button>
              </div>
            </div>

            <svg
              viewBox="0 0 230 165"
              className="w-full h-40 rounded-lg bg-slate-50/80 dark:bg-slate-900/90"
              aria-label="Thermal decomposition boiling tube"
            >
              {/* Flame */}
              <path
                d="M 54 148 Q 44 128 56 116 Q 63 128 60 112 Q 72 126 64 148 Z"
                fill="#f97316"
                opacity="0.9"
              />
              <path
                d="M 56 148 Q 52 135 58 126 Q 65 135 61 148 Z"
                fill="#fde047"
              />
              {/* Burner base */}
              <rect x="46" y="148" width="24" height="10" rx="2" fill="#475569" />

              {/* Tilted boiling tube */}
              <g transform="translate(105, 86) rotate(-36)">
                <rect
                  x="-54"
                  y="-16"
                  width="112"
                  height="32"
                  rx="16"
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="2.5"
                />
                {/* Residue inside bottom */}
                <path
                  d="M -52 0 A 14 14 0 0 0 -38 14 L -12 14 L -16 -2 L -52 0 Z"
                  fill={thermalMode === 'feso4' ? '#9a3412' : '#eab308'}
                />
                {/* Fumes inside mouth */}
                <path
                  d="M 10 -4 Q 25 -10 42 -2 Q 55 4 70 -6"
                  fill="none"
                  stroke={thermalMode === 'feso4' ? '#94a3b8' : '#b45309'}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                  opacity="0.8"
                />
                {/* Tongs */}
                <rect x="22" y="-22" width="10" height="44" rx="2" fill="#334155" opacity="0.85" />
              </g>

              {/* Gas cloud outside tube mouth */}
              {thermalMode === 'feso4' ? (
                <g>
                  <circle cx="176" cy="36" r="14" fill="#cbd5e1" opacity="0.55" />
                  <circle cx="192" cy="24" r="11" fill="#94a3b8" opacity="0.45" />
                  <text
                    x="182"
                    y="38"
                    textAnchor="middle"
                    className="fill-slate-800 dark:fill-slate-100 text-[10px] font-bold"
                  >
                    SO₂ + SO₃
                  </text>
                </g>
              ) : (
                <g>
                  <circle cx="176" cy="36" r="15" fill="#d97706" opacity="0.55" />
                  <circle cx="194" cy="24" r="12" fill="#9a3412" opacity="0.55" />
                  <text
                    x="182"
                    y="38"
                    textAnchor="middle"
                    className="fill-amber-950 dark:fill-amber-100 text-[10px] font-bold"
                  >
                    NO₂ (brown)
                  </text>
                </g>
              )}

              <text
                x="116"
                y="148"
                textAnchor="middle"
                className="fill-slate-700 dark:fill-slate-300 text-[10px] font-semibold"
              >
                {thermalMode === 'feso4'
                  ? 'Green → White → Brown Fe₂O₃'
                  : 'White → Yellow PbO residue'}
              </text>
            </svg>
          </div>

          <div className="mt-2 rounded-lg bg-orange-50/80 border border-orange-200 px-2.5 py-2 text-[11px] space-y-1 dark:bg-orange-950/30 dark:border-orange-900/60">
            <div className="font-mono font-bold text-orange-950 dark:text-orange-200">
              {thermalMode === 'feso4'
                ? '2FeSO₄(s) —Δ→ Fe₂O₃(s) + SO₂(g) + SO₃(g)'
                : '2Pb(NO₃)₂(s) —Δ→ 2PbO(s) + 4NO₂(g) + O₂(g)'}
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              {thermalMode === 'feso4'
                ? 'Choking burning-sulphur odour. Also note: CaCO₃(s) —Δ→ CaO(s) + CO₂(g).'
                : 'Cracking sound (decrepitation) + swirling reddish-brown NO₂ fumes.'}
            </p>
          </div>
        </div>

        {/* Panel 2: Electrolytic Decomposition (2:1 Ratio) */}
        <div className="rounded-xl border border-sky-200 bg-white p-3.5 flex flex-col justify-between dark:border-sky-900/60 dark:bg-slate-950">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-sky-700 dark:text-sky-400">
                <Zap className="h-3.5 w-3.5" /> 2. Electrolytic (2:1 Ratio)
              </span>
              <button
                type="button"
                onClick={() => setElectroSwitchOn((v) => !v)}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-bold cursor-pointer border transition ${
                  electroSwitchOn
                    ? 'bg-sky-600 text-white border-sky-600'
                    : 'bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                }`}
              >
                {electroSwitchOn ? '6V Switch: ON' : '6V Switch: OFF'}
              </button>
            </div>

            <svg
              viewBox="0 0 230 165"
              className="w-full h-40 rounded-lg bg-slate-50/80 dark:bg-slate-900/90"
              aria-label="Electrolysis of water mug setup"
            >
              {/* Plastic mug */}
              <path
                d="M 55 30 L 55 126 Q 55 132 62 132 L 168 132 Q 175 132 175 126 L 175 30"
                fill="none"
                stroke="#475569"
                strokeWidth="2.5"
              />
              {/* Acidified water */}
              <rect x="57" y="48" width="116" height="82" rx="4" fill="#38bdf8" opacity="0.22" />

              {/* Inverted test tube Cathode (H2 - double gas height) */}
              <path
                d="M 76 108 L 76 22 A 12 12 0 0 1 100 22 L 100 108"
                fill="none"
                stroke="#334155"
                strokeWidth="2"
              />
              {/* Gas pocket H2 (2x taller when ON) */}
              <path
                d={
                  electroSwitchOn
                    ? 'M 77 62 L 77 22 A 11 11 0 0 1 99 22 L 99 62 Z'
                    : 'M 77 32 L 77 22 A 11 11 0 0 1 99 22 L 99 32 Z'
                }
                fill="#0284c7"
                opacity="0.28"
              />

              {/* Inverted test tube Anode (O2 - single gas height) */}
              <path
                d="M 130 108 L 130 22 A 12 12 0 0 1 154 22 L 154 108"
                fill="none"
                stroke="#334155"
                strokeWidth="2"
              />
              {/* Gas pocket O2 (1x taller when ON) */}
              <path
                d={
                  electroSwitchOn
                    ? 'M 131 42 L 131 22 A 11 11 0 0 1 153 22 L 153 42 Z'
                    : 'M 131 32 L 131 22 A 11 11 0 0 1 153 22 L 153 32 Z'
                }
                fill="#e11d48"
                opacity="0.24"
              />

              {/* Carbon electrodes */}
              <rect x="85" y="75" width="6" height="58" rx="2" fill="#1e293b" />
              <rect x="139" y="75" width="6" height="58" rx="2" fill="#1e293b" />

              {/* Bubbles if ON */}
              {electroSwitchOn && (
                <g fill="#0284c7" opacity="0.75">
                  <circle cx="88" cy="70" r="2" />
                  <circle cx="91" cy="64" r="1.8" />
                  <circle cx="86" cy="58" r="1.5" />
                  <circle cx="142" cy="70" r="1.8" fill="#e11d48" />
                  <circle cx="144" cy="55" r="1.6" fill="#e11d48" />
                </g>
              )}

              {/* Battery wires */}
              <polyline points="88,133 88,148 102,148" fill="none" stroke="#334155" strokeWidth="1.8" />
              <polyline points="142,133 142,148 128,148" fill="none" stroke="#334155" strokeWidth="1.8" />
              {/* Battery symbol */}
              <line x1="106" y1="142" x2="106" y2="154" stroke="#0f172a" strokeWidth="2.5" />
              <line x1="112" y1="145" x2="112" y2="151" stroke="#0f172a" strokeWidth="1.8" />
              <line x1="118" y1="142" x2="118" y2="154" stroke="#0f172a" strokeWidth="2.5" />
              <line x1="124" y1="145" x2="124" y2="151" stroke="#0f172a" strokeWidth="1.8" />

              {/* Labels */}
              <text
                x="88"
                y="12"
                textAnchor="middle"
                className="fill-sky-700 dark:fill-sky-300 text-[9.5px] font-extrabold"
              >
                Cathode (−): 2V H₂
              </text>
              <text
                x="145"
                y="12"
                textAnchor="middle"
                className="fill-rose-700 dark:fill-rose-300 text-[9.5px] font-extrabold"
              >
                Anode (+): 1V O₂
              </text>
              <text
                x="115"
                y="162"
                textAnchor="middle"
                className="fill-slate-600 dark:fill-slate-300 text-[9px] font-bold"
              >
                6V Battery • H₂O + few drops dil. H₂SO₄
              </text>
            </svg>
          </div>

          <div className="mt-2 rounded-lg bg-sky-50/80 border border-sky-200 px-2.5 py-2 text-[11px] space-y-1 dark:bg-sky-950/30 dark:border-sky-900/60">
            <div className="font-mono font-bold text-sky-950 dark:text-sky-200">
              2H₂O(l) —Electricity→ 2H₂(g) + O₂(g)
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              <strong>2:1 Volume Ratio:</strong> Double <strong>H₂</strong> at Cathode (pop test) vs{' '}
              <strong>O₂</strong> at Anode (relights glowing splinter).
            </p>
          </div>
        </div>

        {/* Panel 3: Photolytic Decomposition */}
        <div className="rounded-xl border border-amber-200 bg-white p-3.5 flex flex-col justify-between dark:border-amber-900/60 dark:bg-slate-950">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-700 dark:text-amber-400">
                <Sun className="h-3.5 w-3.5" /> 3. Photolytic (Sunlight)
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setHalideSalt((s) => (s === 'agcl' ? 'agbr' : 'agcl'))}
                  className="px-2 py-0.5 rounded-lg text-[10px] font-bold cursor-pointer border border-amber-300 bg-amber-50 text-amber-900 dark:bg-slate-900 dark:border-amber-800 dark:text-amber-300"
                >
                  {halideSalt === 'agcl' ? 'AgCl' : 'AgBr'}
                </button>
                <button
                  type="button"
                  onClick={() => setSunExposed((v) => !v)}
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-bold cursor-pointer border transition ${
                    sunExposed
                      ? 'bg-amber-500 text-white border-amber-500'
                      : 'bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  {sunExposed ? 'Sunlight: ON' : 'Dark Bottle'}
                </button>
              </div>
            </div>

            <svg
              viewBox="0 0 230 165"
              className="w-full h-40 rounded-lg bg-slate-50/80 dark:bg-slate-900/90"
              aria-label="Photolytic decomposition of silver halides"
            >
              {/* Sun & rays */}
              {sunExposed ? (
                <g>
                  <circle cx="46" cy="34" r="15" fill="#fbbf24" />
                  <line x1="64" y1="44" x2="102" y2="86" stroke="#f59e0b" strokeWidth="2.2" strokeDasharray="4 3" />
                  <line x1="56" y1="52" x2="88" y2="96" stroke="#f59e0b" strokeWidth="2.2" strokeDasharray="4 3" />
                  <line x1="70" y1="36" x2="120" y2="82" stroke="#f59e0b" strokeWidth="2.2" strokeDasharray="4 3" />
                  <text x="108" y="28" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-bold">
                    Sunlight (hν)
                  </text>
                </g>
              ) : (
                <text x="115" y="34" textAnchor="middle" className="fill-slate-500 text-[10px] font-bold">
                  Stored in Dark Bottle (No UV/Sunlight)
                </text>
              )}

              {/* China dish */}
              <path
                d="M 52 110 Q 115 142 178 110 Z"
                fill="#e2e8f0"
                stroke="#64748b"
                strokeWidth="2"
              />
              {/* Silver halide powder */}
              <path
                d="M 76 112 Q 115 92 154 112 Z"
                fill={
                  sunExposed
                    ? '#64748b'
                    : halideSalt === 'agcl'
                    ? '#f8fafc'
                    : '#fef08a'
                }
                stroke="#475569"
                strokeWidth="1.2"
              />
              {sunExposed && (
                <text
                  x="176"
                  y="76"
                  textAnchor="middle"
                  className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-bold"
                >
                  {halideSalt === 'agcl' ? 'Cl₂(g) ↑' : 'Br₂(g) ↑'}
                </text>
              )}
              <text
                x="115"
                y="148"
                textAnchor="middle"
                className="fill-slate-700 dark:fill-slate-300 text-[10px] font-semibold"
              >
                {sunExposed
                  ? 'Metallic Grey Ag(s) formed!'
                  : halideSalt === 'agcl'
                  ? 'White AgCl(s) unchanged'
                  : 'Pale Yellow AgBr(s) unchanged'}
              </text>
            </svg>
          </div>

          <div className="mt-2 rounded-lg bg-amber-50/80 border border-amber-200 px-2.5 py-2 text-[11px] space-y-1 dark:bg-amber-950/30 dark:border-amber-900/60">
            <div className="font-mono font-bold text-amber-950 dark:text-amber-200">
              {halideSalt === 'agcl'
                ? '2AgCl(s) —Sunlight→ 2Ag(s) + Cl₂(g)'
                : '2AgBr(s) —Sunlight→ 2Ag(s) + Br₂(g)'}
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Used in <strong>Black &amp; White photography</strong> (stored in dark amber bottles to prevent decomposition).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 2. pH SCALE (0-14) & CHLOR-ALKALI + 5-SALT HUB FLOWCHART
 * ========================================================================== */
interface PhMarker {
  id: string;
  label: string;
  ph: number;
  phLabel: string;
  color: string;
  note: string;
}

const PH_MARKERS: PhMarker[] = [
  {
    id: 'gastric',
    label: 'Gastric Juice',
    ph: 1.2,
    phLabel: '1.2',
    color: '#dc2626',
    note: 'Stomach HCl aids digestion. Acidity is neutralized using mild bases (antacids like Milk of Magnesia).',
  },
  {
    id: 'lemon',
    label: 'Lemon Juice',
    ph: 2.2,
    phLabel: '2.2',
    color: '#ea580c',
    note: 'Contains citric acid; strongly acidic with high H⁺(aq) ion concentration.',
  },
  {
    id: 'tooth',
    label: 'Tooth Decay Threshold',
    ph: 5.5,
    phLabel: '< 5.5',
    color: '#ca8a04',
    note: 'Calcium hydroxyapatite enamel (hardest body substance) starts corroding when mouth pH falls below 5.5.',
  },
  {
    id: 'acid-rain',
    label: 'Acid Rain',
    ph: 5.6,
    phLabel: '< 5.6',
    color: '#d97706',
    note: 'When rainwater pH drops below 5.6, river pH falls and harms aquatic life (survives in narrow 7.0–7.8 range).',
  },
  {
    id: 'water',
    label: 'Distilled Water',
    ph: 7.0,
    phLabel: '7.0',
    color: '#16a34a',
    note: 'Neutral: [H⁺(aq)] = [OH⁻(aq)]. Pure water has pH 7 at 298 K.',
  },
  {
    id: 'blood',
    label: 'Human Blood',
    ph: 7.4,
    phLabel: '7.4',
    color: '#0d9488',
    note: 'Body works within a tight pH range of 7.0 to 7.8. Slightly basic.',
  },
  {
    id: 'mom',
    label: 'Milk of Magnesia',
    ph: 10.0,
    phLabel: '10.0',
    color: '#2563eb',
    note: 'Mg(OH)₂ — mild base antacid that neutralizes excess stomach HCl without harming tissues.',
  },
  {
    id: 'naoh',
    label: 'NaOH Solution',
    ph: 14.0,
    phLabel: '14.0',
    color: '#6d28d9',
    note: 'Strong alkali: maximum OH⁻(aq) concentration and minimum H⁺(aq).',
  },
];

interface SaltNode {
  id: string;
  name: string;
  formula: string;
  source: string;
  equation: string;
  uses: string;
}

const CHLOR_SALTS: SaltNode[] = [
  {
    id: 'naoh',
    name: '1. Sodium Hydroxide',
    formula: 'NaOH',
    source: 'Formed near Cathode (−)',
    equation: '2NaCl(aq) + 2H₂O(l) —Electricity→ 2NaOH(aq) + Cl₂(g)↑ + H₂(g)↑',
    uses: 'Degreasing metals, soaps & detergents, paper making, artificial fibres.',
  },
  {
    id: 'bleach',
    name: '2. Bleaching Powder',
    formula: 'CaOCl₂',
    source: 'Cl₂ (Anode) + Dry Slaked Lime',
    equation: 'Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O',
    uses: 'Bleaching cotton/linen & wood pulp, oxidising agent, disinfecting drinking water.',
  },
  {
    id: 'baking-soda',
    name: '3. Baking Soda / Powder',
    formula: 'NaHCO₃',
    source: 'Cold Conc. NaCl + NH₃ + CO₂ + H₂O',
    equation: 'NaCl + H₂O + CO₂ + NH₃ → NH₄Cl + NaHCO₃',
    uses: 'Antacid, soda-acid fire extinguisher; + tartaric acid = Baking Powder (fluffy cake without bitter Na₂CO₃ taste!).',
  },
  {
    id: 'washing-soda',
    name: '4. Washing Soda',
    formula: 'Na₂CO₃·10H₂O',
    source: 'Heat NaHCO₃ → Na₂CO₃ → Recrystallise',
    equation: '2NaHCO₃ —Δ→ Na₂CO₃ + H₂O + CO₂; Na₂CO₃ + 10H₂O → Na₂CO₃·10H₂O',
    uses: 'Glass, soap & paper industry; borax manufacture; removing permanent hardness of water.',
  },
  {
    id: 'pop',
    name: '5. Plaster of Paris (POP)',
    formula: 'CaSO₄·½H₂O',
    source: 'Gypsum heated at 373 K (100 °C)',
    equation: 'CaSO₄·2H₂O —373 K→ CaSO₄·½H₂O + 1½H₂O',
    uses: 'Setting fractured bones, toys, smooth walls. Trap: > 373 K yields dead-burnt CaSO₄!',
  },
];

function PhAndChlorAlkaliVisual() {
  const [selectedPhId, setSelectedPhId] = useState<string>('tooth');
  const [selectedSaltId, setSelectedSaltId] = useState<string>('bleach');

  const activeMarker = PH_MARKERS.find((m) => m.id === selectedPhId) ?? PH_MARKERS[0];
  const activeSalt = CHLOR_SALTS.find((s) => s.id === selectedSaltId) ?? CHLOR_SALTS[0];

  const hPct = Math.max(5, Math.min(95, ((14 - activeMarker.ph) / 14) * 100));
  const ohPct = 100 - hPct;

  return (
    <div className="space-y-4 no-word-lookup select-none">
      {/* Part A: 0-14 pH Spectrum */}
      <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-200">
            Interactive NCERT pH Spectrum (0 – 14)
          </span>
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            Click any everyday marker below
          </span>
        </div>

        {/* Spectrum SVG */}
        <svg
          viewBox="0 0 600 96"
          className="w-full h-24"
          aria-label="pH scale from 0 to 14"
        >
          <defs>
            <linearGradient id="ncertPhGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#b91c1c" />
              <stop offset="18%" stopColor="#ea580c" />
              <stop offset="35%" stopColor="#eab308" />
              <stop offset="50%" stopColor="#16a34a" />
              <stop offset="68%" stopColor="#0d9488" />
              <stop offset="84%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#5b21b6" />
            </linearGradient>
          </defs>

          <rect x="20" y="34" width="560" height="24" rx="7" fill="url(#ncertPhGrad)" />

          {Array.from({ length: 15 }, (_, n) => {
            const cx = 20 + (n / 14) * 560;
            return (
              <g key={n}>
                <line x1={cx} y1="34" x2={cx} y2="62" stroke="#ffffff" strokeWidth="1" opacity="0.55" />
                <text
                  x={cx}
                  y="74"
                  textAnchor="middle"
                  className="fill-slate-700 dark:fill-slate-300 text-[10px] font-bold"
                >
                  {n}
                </text>
              </g>
            );
          })}

          {/* Marker pin */}
          {(() => {
            const px = 20 + (activeMarker.ph / 14) * 560;
            return (
              <g>
                <line x1={px} y1="14" x2={px} y2="60" stroke="#0f172a" strokeWidth="2.4" className="dark:stroke-white" />
                <circle cx={px} cy="16" r="6" fill={activeMarker.color} stroke="#ffffff" strokeWidth="2" />
                <text
                  x={Math.min(545, Math.max(55, px))}
                  y="90"
                  textAnchor="middle"
                  className="fill-slate-900 dark:fill-white text-[10.5px] font-extrabold"
                >
                  {activeMarker.label} (pH {activeMarker.phLabel})
                </text>
              </g>
            );
          })()}
        </svg>

        {/* Marker selector buttons */}
        <div className="flex flex-wrap gap-1.5">
          {PH_MARKERS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setSelectedPhId(m.id)}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-bold border transition cursor-pointer ${
                selectedPhId === m.id
                  ? 'border-violet-600 bg-violet-600 text-white shadow-xs'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
              }`}
            >
              {m.label} ({m.phLabel})
            </button>
          ))}
        </div>

        {/* Relative H+ vs OH- bar + Note */}
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 space-y-2 dark:bg-slate-900 dark:border-slate-800">
          <div className="flex items-center justify-between text-[11px] font-bold">
            <span className="text-rose-700 dark:text-rose-400">H⁺(aq) Strength ({Math.round(hPct)}%)</span>
            <span className="text-indigo-700 dark:text-indigo-400">OH⁻(aq) Strength ({Math.round(ohPct)}%)</span>
          </div>
          <div className="h-2.5 w-full rounded-full overflow-hidden flex bg-slate-200 dark:bg-slate-800">
            <div className="bg-rose-500 transition-all duration-300" style={{ width: `${hPct}%` }} />
            <div className="bg-indigo-600 transition-all duration-300" style={{ width: `${ohPct}%` }} />
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>{activeMarker.label} (pH {activeMarker.phLabel}):</strong> {activeMarker.note}
          </p>
        </div>
      </div>

      {/* Part B: Chlor-Alkali & 5-Salt Hub Flowchart */}
      <div className="rounded-xl border border-violet-200 bg-white p-3.5 space-y-3 dark:border-violet-900/60 dark:bg-slate-950">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-violet-700 dark:text-violet-400">
            Chlor-Alkali Process &amp; 5-Salt Hub Flowchart
          </span>
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            Tap any salt card to inspect formula &amp; uses
          </span>
        </div>

        {/* Flow Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="rounded-xl border border-sky-300 bg-sky-50 px-4 py-2 text-xs font-extrabold text-sky-950 dark:border-sky-800 dark:bg-sky-950/40 dark:text-sky-200">
            Brine: <span className="font-mono">2NaCl(aq) + 2H₂O(l)</span> —Electrolysis→
          </div>
          <div className="grid grid-cols-3 gap-2 w-full">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-2 text-[11px] dark:border-emerald-900 dark:bg-emerald-950/30">
              <div className="font-extrabold text-emerald-800 dark:text-emerald-300">Cathode (−)</div>
              <div className="font-mono font-bold text-slate-800 dark:text-slate-200">H₂(g)</div>
              <div className="text-[10px] text-slate-600 dark:text-slate-400">Fuel, Margarine, NH₃</div>
            </div>
            <div className="rounded-lg border border-violet-200 bg-violet-50/70 p-2 text-[11px] dark:border-violet-900 dark:bg-violet-950/30">
              <div className="font-extrabold text-violet-800 dark:text-violet-300">Near Cathode</div>
              <div className="font-mono font-bold text-slate-800 dark:text-slate-200">NaOH(aq)</div>
              <div className="text-[10px] text-slate-600 dark:text-slate-400">Soaps, Paper, Fibres</div>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50/70 p-2 text-[11px] dark:border-amber-900 dark:bg-amber-950/30">
              <div className="font-extrabold text-amber-800 dark:text-amber-300">Anode (+)</div>
              <div className="font-mono font-bold text-slate-800 dark:text-slate-200">Cl₂(g)</div>
              <div className="text-[10px] text-slate-600 dark:text-slate-400">Water treatment, PVC</div>
            </div>
          </div>
          <ArrowDown className="h-4 w-4 text-violet-600" />
        </div>

        {/* 5 Salt Selector */}
        <div className="grid gap-1.5 sm:grid-cols-5">
          {CHLOR_SALTS.map((salt) => (
            <button
              key={salt.id}
              type="button"
              onClick={() => setSelectedSaltId(salt.id)}
              className={`rounded-xl border p-2 text-left transition cursor-pointer ${
                selectedSaltId === salt.id
                  ? 'border-violet-600 bg-violet-600 text-white shadow-xs'
                  : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'
              }`}
            >
              <div className="text-[10.5px] font-extrabold leading-tight">{salt.name}</div>
              <div
                className={`font-mono text-xs font-bold mt-1 ${
                  selectedSaltId === salt.id ? 'text-violet-100' : 'text-violet-700 dark:text-violet-400'
                }`}
              >
                {salt.formula}
              </div>
            </button>
          ))}
        </div>

        <div className="rounded-lg border border-violet-200 bg-violet-50/60 p-3 text-xs space-y-1.5 dark:border-violet-900/60 dark:bg-violet-950/30">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-extrabold text-violet-900 dark:text-violet-200">
              {activeSalt.name} ({activeSalt.formula})
            </span>
            <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">
              Route: {activeSalt.source}
            </span>
          </div>
          <div className="font-mono text-[11.5px] font-bold text-slate-900 bg-white/80 rounded px-2.5 py-1.5 border border-violet-100 dark:bg-slate-900 dark:border-violet-900/50 dark:text-slate-100">
            {activeSalt.equation}
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Key Board Uses:</strong> {activeSalt.uses}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 3. METALLURGY EXTRACTION TREE & 3-TUBE RUSTING PROOF
 * ========================================================================== */
type MetalTier = 'high' | 'medium' | 'low';

function MetallurgyAndRustingVisual() {
  const [tier, setTier] = useState<MetalTier>('medium');
  const [medRoute, setMedRoute] = useState<'carbonate' | 'sulphide'>('sulphide');
  const [selectedTube, setSelectedTube] = useState<'A' | 'B' | 'C'>('A');

  return (
    <div className="space-y-4 no-word-lookup select-none">
      {/* Extraction Tree */}
      <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-200">
            NCERT Metal Extraction Flowchart (Ore → Pure Metal)
          </span>
          <div className="flex gap-1">
            {(
              [
                ['high', 'High (K–Al)'],
                ['medium', 'Medium (Zn–Cu)'],
                ['low', 'Low (Hg, Cu)'],
              ] as const
            ).map(([k, lbl]) => (
              <button
                key={k}
                type="button"
                onClick={() => setTier(k)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold border transition cursor-pointer ${
                  tier === k
                    ? 'bg-violet-600 text-white border-violet-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
                }`}
              >
                {lbl}
              </button>
            ))}
          </div>
        </div>

        {/* Tier Details */}
        {tier === 'high' && (
          <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-3.5 space-y-2 text-xs dark:border-rose-900/60 dark:bg-rose-950/30">
            <div className="font-extrabold text-rose-900 dark:text-rose-200">
              High Reactivity Metals: K, Na, Ca, Mg, Al
            </div>
            <p className="text-slate-700 dark:text-slate-300">
              Have higher affinity for oxygen than Carbon — so <strong>C cannot reduce their oxides!</strong>{' '}
              Extracted by <strong>Electrolytic Reduction of Molten Chlorides / Oxides</strong> (NOT aqueous!).
            </p>
            <div className="grid sm:grid-cols-2 gap-2 font-mono text-[11px]">
              <div className="rounded-lg bg-white p-2 border border-rose-200 dark:bg-slate-900 dark:border-rose-900">
                <strong className="text-sky-700 dark:text-sky-400">Cathode (−):</strong> Na⁺ + e⁻ → Na(l)
              </div>
              <div className="rounded-lg bg-white p-2 border border-rose-200 dark:bg-slate-900 dark:border-rose-900">
                <strong className="text-amber-700 dark:text-amber-400">Anode (+):</strong> 2Cl⁻ → Cl₂(g) + 2e⁻
              </div>
            </div>
          </div>
        )}

        {tier === 'medium' && (
          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-3.5 space-y-2.5 text-xs dark:border-amber-900/60 dark:bg-amber-950/30">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-extrabold text-amber-900 dark:text-amber-200">
                Medium Reactivity Metals: Zn, Fe, Pb, Cu
              </span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setMedRoute('sulphide')}
                  className={`px-2 py-0.5 rounded-md text-[10.5px] font-bold cursor-pointer border ${
                    medRoute === 'sulphide'
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-white text-amber-900 border-amber-300 dark:bg-slate-900 dark:text-amber-300 dark:border-amber-800'
                  }`}
                >
                  Sulphide Ore (Roasting)
                </button>
                <button
                  type="button"
                  onClick={() => setMedRoute('carbonate')}
                  className={`px-2 py-0.5 rounded-md text-[10.5px] font-bold cursor-pointer border ${
                    medRoute === 'carbonate'
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-white text-amber-900 border-amber-300 dark:bg-slate-900 dark:text-amber-300 dark:border-amber-800'
                  }`}
                >
                  Carbonate Ore (Calcination)
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 text-[11px]">
              <div className="flex-1 rounded-lg bg-white border border-amber-200 p-2.5 dark:bg-slate-900 dark:border-amber-900">
                <div className="font-extrabold text-amber-800 dark:text-amber-300">
                  {medRoute === 'sulphide'
                    ? 'Step 1: Roasting (Excess Air)'
                    : 'Step 1: Calcination (Limited Air)'}
                </div>
                <div className="font-mono font-bold mt-1 text-slate-900 dark:text-slate-100">
                  {medRoute === 'sulphide'
                    ? '2ZnS + 3O₂ —Δ→ 2ZnO + 2SO₂↑'
                    : 'ZnCO₃ —Δ→ ZnO + CO₂↑'}
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-amber-600 shrink-0 self-center hidden sm:block" />
              <div className="flex-1 rounded-lg bg-white border border-amber-200 p-2.5 dark:bg-slate-900 dark:border-amber-900">
                <div className="font-extrabold text-emerald-800 dark:text-emerald-300">
                  Step 2: Reduction of Oxide
                </div>
                <div className="font-mono font-bold mt-1 text-slate-900 dark:text-slate-100">
                  ZnO + C —Δ→ Zn + CO↑
                </div>
                <div className="text-[10.5px] text-rose-700 dark:text-rose-300 mt-1">
                  <strong>Thermit Welding:</strong> Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃ + Heat
                </div>
              </div>
            </div>
          </div>
        )}

        {tier === 'low' && (
          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-3.5 space-y-2 text-xs dark:border-teal-900/60 dark:bg-teal-950/30">
            <div className="font-extrabold text-teal-900 dark:text-teal-200">
              Low Reactivity Metals: Hg (Cinnabar HgS) &amp; Cu (Cu₂S)
            </div>
            <p className="text-slate-700 dark:text-slate-300">
              Oxides are unstable and reduced simply by heating!
            </p>
            <div className="grid sm:grid-cols-2 gap-2 font-mono text-[11px]">
              <div className="rounded-lg bg-white p-2 border border-teal-200 dark:bg-slate-900 dark:border-teal-900">
                2HgS + 3O₂ —Δ→ 2HgO + 2SO₂
                <br />
                2HgO —Δ→ 2Hg(l) + O₂
              </div>
              <div className="rounded-lg bg-white p-2 border border-teal-200 dark:bg-slate-900 dark:border-teal-900">
                2Cu₂S + 3O₂ —Δ→ 2Cu₂O + 2SO₂
                <br />
                2Cu₂O + Cu₂S —Δ→ 6Cu + SO₂
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3-Test-Tube Rusting Proof */}
      <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-200">
            NCERT 3-Test-Tube Rusting Proof (Activity 3.14)
          </span>
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            Click any tube to inspect condition
          </span>
        </div>

        <svg
          viewBox="0 0 540 165"
          className="w-full h-44 rounded-lg bg-slate-50/70 dark:bg-slate-900/90"
          aria-label="Three test tube rusting experiment"
        >
          {/* Tube A */}
          <g
            onClick={() => setSelectedTube('A')}
            className="cursor-pointer"
          >
            <rect
              x="35"
              y="10"
              width="130"
              height="146"
              rx="10"
              fill={selectedTube === 'A' ? '#fef2f2' : 'transparent'}
              stroke={selectedTube === 'A' ? '#dc2626' : '#cbd5e1'}
              strokeWidth={selectedTube === 'A' ? 2 : 1}
              className="dark:fill-slate-900/60"
            />
            <path d="M 80 28 L 80 112 A 20 20 0 0 0 120 112 L 120 28" fill="none" stroke="#475569" strokeWidth="2.4" />
            <path d="M 82 78 L 82 112 A 18 18 0 0 0 118 112 L 118 78 Z" fill="#38bdf8" opacity="0.35" />
            {/* Rusty Nail */}
            <line x1="93" y1="54" x2="105" y2="122" stroke="#b45309" strokeWidth="5.5" strokeLinecap="round" />
            <circle cx="96" cy="74" r="3.2" fill="#dc2626" />
            <circle cx="101" cy="92" r="3" fill="#b45309" />
            <text x="100" y="146" textAnchor="middle" className="fill-rose-700 dark:fill-rose-400 text-[10.5px] font-extrabold">
              Tube A: RUSTS!
            </text>
            <text x="100" y="22" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[9.5px] font-bold">
              Air + Water
            </text>
          </g>

          {/* Tube B */}
          <g
            onClick={() => setSelectedTube('B')}
            className="cursor-pointer"
          >
            <rect
              x="205"
              y="10"
              width="130"
              height="146"
              rx="10"
              fill={selectedTube === 'B' ? '#f0fdf4' : 'transparent'}
              stroke={selectedTube === 'B' ? '#16a34a' : '#cbd5e1'}
              strokeWidth={selectedTube === 'B' ? 2 : 1}
              className="dark:fill-slate-900/60"
            />
            <rect x="248" y="22" width="44" height="10" rx="2" fill="#64748b" />
            <path d="M 250 32 L 250 112 A 20 20 0 0 0 290 112 L 290 32" fill="none" stroke="#475569" strokeWidth="2.4" />
            <path d="M 252 68 L 252 112 A 18 18 0 0 0 288 112 L 288 68 Z" fill="#38bdf8" opacity="0.3" />
            {/* Oil layer */}
            <rect x="252" y="58" width="36" height="10" fill="#facc15" opacity="0.85" />
            {/* Shiny Nail */}
            <line x1="265" y1="74" x2="275" y2="122" stroke="#94a3b8" strokeWidth="5.5" strokeLinecap="round" />
            <text x="270" y="146" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 text-[10.5px] font-extrabold">
              Tube B: NO RUST
            </text>
            <text x="270" y="18" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[9.5px] font-bold">
              Boiled H₂O + Oil
            </text>
          </g>

          {/* Tube C */}
          <g
            onClick={() => setSelectedTube('C')}
            className="cursor-pointer"
          >
            <rect
              x="375"
              y="10"
              width="130"
              height="146"
              rx="10"
              fill={selectedTube === 'C' ? '#f0fdf4' : 'transparent'}
              stroke={selectedTube === 'C' ? '#16a34a' : '#cbd5e1'}
              strokeWidth={selectedTube === 'C' ? 2 : 1}
              className="dark:fill-slate-900/60"
            />
            <rect x="418" y="22" width="44" height="10" rx="2" fill="#64748b" />
            <path d="M 420 32 L 420 112 A 20 20 0 0 0 460 112 L 460 32" fill="none" stroke="#475569" strokeWidth="2.4" />
            {/* Anhydrous CaCl2 granules */}
            <path d="M 422 104 L 458 104 A 18 18 0 0 1 422 104 Z" fill="#e2e8f0" />
            <circle cx="430" cy="116" r="3" fill="#cbd5e1" />
            <circle cx="440" cy="119" r="3" fill="#cbd5e1" />
            <circle cx="450" cy="115" r="3" fill="#cbd5e1" />
            {/* Shiny Nail */}
            <line x1="433" y1="48" x2="444" y2="100" stroke="#94a3b8" strokeWidth="5.5" strokeLinecap="round" />
            <text x="440" y="146" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 text-[10.5px] font-extrabold">
              Tube C: NO RUST
            </text>
            <text x="440" y="18" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[9.5px] font-bold">
              Dry Air + CaCl₂
            </text>
          </g>
        </svg>

        <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300">
          {selectedTube === 'A' && (
            <span>
              <strong>Tube A (Air + Water):</strong> Iron nail is exposed to BOTH atmospheric <strong>O₂</strong> and{' '}
              <strong>moisture (H₂O)</strong> → reddish-brown flaky rust (<code>Fe₂O₃·xH₂O</code>) forms!
            </span>
          )}
          {selectedTube === 'B' && (
            <span>
              <strong>Tube B (Boiled Distilled Water + Oil Layer):</strong> Boiling drives out dissolved O₂; floating oil blocks air from re-entering → <strong>NO rust</strong> (proves O₂ is essential!).
            </span>
          )}
          {selectedTube === 'C' && (
            <span>
              <strong>Tube C (Dry Air + Anhydrous CaCl₂):</strong> Anhydrous <code>CaCl₂</code> drying agent absorbs all water vapour → <strong>NO rust</strong> (proves moisture/water is essential!).
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 4. ELECTRON-DOT GALLERY + BUTANE/PENTANE ISOMERS + CYCLOHEXANE VS BENZENE
 * ========================================================================== */
type DotSpecKey =
  | 'CH4'
  | 'C2H6'
  | 'C2H4'
  | 'C2H2'
  | 'CO2'
  | 'N2'
  | 'O2'
  | 'S8'
  | 'NaCl'
  | 'MgCl2';

const DOT_SPECS: Record<
  DotSpecKey,
  { label: string; kind: string; shared: string; structural: string; note: string }
> = {
  CH4: {
    label: 'CH₄ (Methane)',
    kind: 'Covalent — 4 Single Bonds',
    shared: '4 shared pairs (1 between C and each H)',
    structural: 'H–C(H)₂–H (Tetrahedral, 109.5°)',
    note: 'Carbon (2,4) shares 4 valence electrons with 4 Hydrogen atoms (each achieves He duet).',
  },
  C2H6: {
    label: 'C₂H₆ (Ethane)',
    kind: 'Saturated Alkane (C–C Single)',
    shared: '1 C–C pair + 6 C–H pairs',
    structural: 'H₃C–CH₃',
    note: 'Saturated hydrocarbon: burns with a clean blue flame in sufficient O₂.',
  },
  C2H4: {
    label: 'C₂H₄ (Ethene)',
    kind: 'Unsaturated Alkene (C=C Double)',
    shared: '2 shared pairs (4 e⁻) between C=C + 4 C–H pairs',
    structural: 'H₂C=CH₂ (Planar)',
    note: 'Decolourises bromine water; undergoes addition with H₂ (Ni catalyst) to form ethane.',
  },
  C2H2: {
    label: 'C₂H₂ (Ethyne)',
    kind: 'Unsaturated Alkyne (C≡C Triple)',
    shared: '3 shared pairs (6 e⁻) between C≡C + 2 C–H pairs',
    structural: 'H–C≡C–H (Linear, 180°)',
    note: 'Acetylene: burns with pure O₂ for high-temperature oxy-acetylene welding.',
  },
  CO2: {
    label: 'CO₂ (Carbon Dioxide)',
    kind: 'Covalent — Two Double Bonds',
    shared: '2 shared pairs on each C=O + 2 lone pairs on each O',
    structural: 'O=C=O (Linear)',
    note: 'Turns limewater milky (CaCO₃); excess CO₂ turns it clear again.',
  },
  N2: {
    label: 'N₂ (Nitrogen)',
    kind: 'Covalent — Triple Bond',
    shared: '3 shared pairs (6 e⁻) + 1 lone pair on each N',
    structural: 'N≡N',
    note: 'Atomic number 7 (2,5): needs 3 electrons per N atom to complete octet. Inert gas used to flush chips.',
  },
  O2: {
    label: 'O₂ (Oxygen)',
    kind: 'Covalent — Double Bond',
    shared: '2 shared pairs (4 e⁻) + 2 lone pairs on each O',
    structural: 'O=O',
    note: 'Atomic number 8 (2,6): each O atom shares 2 electrons to complete its octet.',
  },
  S8: {
    label: 'S₈ (Sulphur Ring)',
    kind: '8-Membered Crown Ring',
    shared: 'Each S shares 2 electrons with 2 neighbouring S atoms',
    structural: 'Puckered 8-atom ring (crown)',
    note: 'Classic NCERT Fig. 4.4: 8 sulphur atoms arranged in a closed ring, each completing an octet.',
  },
  NaCl: {
    label: 'NaCl (Ionic)',
    kind: 'Ionic Bond (Electron Transfer)',
    shared: 'Na (2,8,1) transfers 1 e⁻ → Cl (2,8,7)',
    structural: '[Na]⁺ [Cl]⁻ crystal lattice',
    note: 'Strong electrostatic attraction → high m.p. (1074 K), conducts only when molten or aqueous.',
  },
  MgCl2: {
    label: 'MgCl₂ (Ionic)',
    kind: 'Ionic Bond (1 Mg → 2 Cl)',
    shared: 'Mg (2,8,2) transfers 1 e⁻ to each of 2 Cl (2,8,7)',
    structural: '[Mg]²⁺ 2[Cl]⁻',
    note: 'Why formula is MgCl₂: Mg loses 2 electrons to reach (2,8); each Cl accepts 1 to reach (2,8,8).',
  },
};

function DotSvg({ spec }: { spec: DotSpecKey }) {
  return (
    <svg
      viewBox="0 0 360 175"
      className="w-full h-44 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
      aria-label={`Electron dot structure of ${spec}`}
    >
      {spec === 'CH4' && (
        <g>
          <circle cx="180" cy="88" r="46" fill="none" stroke="#7c3aed" strokeWidth="1.6" strokeDasharray="4 3" />
          <circle cx="180" cy="30" r="22" fill="none" stroke="#0284c7" strokeWidth="1.4" />
          <circle cx="180" cy="146" r="22" fill="none" stroke="#0284c7" strokeWidth="1.4" />
          <circle cx="122" cy="88" r="22" fill="none" stroke="#0284c7" strokeWidth="1.4" />
          <circle cx="238" cy="88" r="22" fill="none" stroke="#0284c7" strokeWidth="1.4" />
          <text x="180" y="92" textAnchor="middle" className="fill-slate-900 dark:fill-white text-sm font-extrabold">C</text>
          <text x="180" y="25" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-extrabold">H</text>
          <text x="180" y="156" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-extrabold">H</text>
          <text x="115" y="92" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-extrabold">H</text>
          <text x="245" y="92" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-extrabold">H</text>
          {/* 4 shared pairs */}
          <text x="180" y="50" textAnchor="middle" className="fill-rose-600 text-xs font-extrabold">•×</text>
          <text x="180" y="132" textAnchor="middle" className="fill-rose-600 text-xs font-extrabold">•×</text>
          <text x="142" y="92" textAnchor="middle" className="fill-rose-600 text-xs font-extrabold">•×</text>
          <text x="218" y="92" textAnchor="middle" className="fill-rose-600 text-xs font-extrabold">•×</text>
        </g>
      )}

      {spec === 'C2H6' && (
        <g>
          <circle cx="145" cy="88" r="42" fill="none" stroke="#7c3aed" strokeWidth="1.5" />
          <circle cx="215" cy="88" r="42" fill="none" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="140" y="92" textAnchor="middle" className="fill-slate-900 dark:fill-white text-sm font-extrabold">C</text>
          <text x="220" y="92" textAnchor="middle" className="fill-slate-900 dark:fill-white text-sm font-extrabold">C</text>
          <text x="180" y="92" textAnchor="middle" className="fill-rose-600 text-xs font-extrabold">×•</text>
          <text x="145" y="34" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-bold">H (×•)</text>
          <text x="145" y="148" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-bold">H (×•)</text>
          <text x="88" y="92" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-bold">H (×•)</text>
          <text x="215" y="34" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-bold">H (×•)</text>
          <text x="215" y="148" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-bold">H (×•)</text>
          <text x="274" y="92" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-bold">(×•) H</text>
        </g>
      )}

      {spec === 'C2H4' && (
        <g>
          <circle cx="145" cy="88" r="44" fill="none" stroke="#7c3aed" strokeWidth="1.6" />
          <circle cx="215" cy="88" r="44" fill="none" stroke="#7c3aed" strokeWidth="1.6" />
          <text x="135" y="92" textAnchor="middle" className="fill-slate-900 dark:fill-white text-sm font-extrabold">C</text>
          <text x="225" y="92" textAnchor="middle" className="fill-slate-900 dark:fill-white text-sm font-extrabold">C</text>
          {/* 2 shared pairs between C=C */}
          <text x="180" y="82" textAnchor="middle" className="fill-rose-600 text-xs font-extrabold">•×</text>
          <text x="180" y="100" textAnchor="middle" className="fill-rose-600 text-xs font-extrabold">•×</text>
          <text x="108" y="42" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-extrabold">H •×</text>
          <text x="108" y="138" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-extrabold">H •×</text>
          <text x="252" y="42" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-extrabold">×• H</text>
          <text x="252" y="138" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-extrabold">×• H</text>
          <text x="180" y="160" textAnchor="middle" className="fill-violet-700 dark:fill-violet-300 text-[11px] font-bold">
            H₂C=CH₂ (4 electrons shared in C=C)
          </text>
        </g>
      )}

      {spec === 'C2H2' && (
        <g>
          <circle cx="148" cy="85" r="44" fill="none" stroke="#7c3aed" strokeWidth="1.6" />
          <circle cx="212" cy="85" r="44" fill="none" stroke="#7c3aed" strokeWidth="1.6" />
          <text x="134" y="89" textAnchor="middle" className="fill-slate-900 dark:fill-white text-sm font-extrabold">C</text>
          <text x="226" y="89" textAnchor="middle" className="fill-slate-900 dark:fill-white text-sm font-extrabold">C</text>
          <text x="180" y="72" textAnchor="middle" className="fill-rose-600 text-xs font-extrabold">•×</text>
          <text x="180" y="88" textAnchor="middle" className="fill-rose-600 text-xs font-extrabold">•×</text>
          <text x="180" y="104" textAnchor="middle" className="fill-rose-600 text-xs font-extrabold">•×</text>
          <text x="82" y="89" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-extrabold">H  •×</text>
          <text x="278" y="89" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-extrabold">×•  H</text>
          <text x="180" y="156" textAnchor="middle" className="fill-violet-700 dark:fill-violet-300 text-[11px] font-bold">
            H–C≡C–H (6 electrons shared in C≡C)
          </text>
        </g>
      )}

      {spec === 'CO2' && (
        <g>
          <circle cx="105" cy="86" r="42" fill="none" stroke="#dc2626" strokeWidth="1.6" />
          <circle cx="180" cy="86" r="44" fill="none" stroke="#7c3aed" strokeWidth="1.6" />
          <circle cx="255" cy="86" r="42" fill="none" stroke="#dc2626" strokeWidth="1.6" />
          <text x="95" y="90" textAnchor="middle" className="fill-rose-600 text-sm font-extrabold">O</text>
          <text x="180" y="90" textAnchor="middle" className="fill-slate-900 dark:fill-white text-sm font-extrabold">C</text>
          <text x="265" y="90" textAnchor="middle" className="fill-rose-600 text-sm font-extrabold">O</text>
          <text x="142" y="81" textAnchor="middle" className="fill-amber-600 text-xs font-extrabold">×•</text>
          <text x="142" y="99" textAnchor="middle" className="fill-amber-600 text-xs font-extrabold">×•</text>
          <text x="218" y="81" textAnchor="middle" className="fill-amber-600 text-xs font-extrabold">•×</text>
          <text x="218" y="99" textAnchor="middle" className="fill-amber-600 text-xs font-extrabold">•×</text>
          <text x="86" y="64" textAnchor="middle" className="fill-rose-500 text-xs font-bold">••</text>
          <text x="86" y="114" textAnchor="middle" className="fill-rose-500 text-xs font-bold">••</text>
          <text x="274" y="64" textAnchor="middle" className="fill-rose-500 text-xs font-bold">••</text>
          <text x="274" y="114" textAnchor="middle" className="fill-rose-500 text-xs font-bold">••</text>
          <text x="180" y="156" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-bold">
            O=C=O (All 3 atoms reach full 8-electron octet)
          </text>
        </g>
      )}

      {spec === 'N2' && (
        <g>
          <circle cx="145" cy="86" r="46" fill="none" stroke="#2563eb" strokeWidth="1.6" />
          <circle cx="215" cy="86" r="46" fill="none" stroke="#2563eb" strokeWidth="1.6" />
          <text x="132" y="90" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-sm font-extrabold">N</text>
          <text x="228" y="90" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-sm font-extrabold">N</text>
          <text x="180" y="72" textAnchor="middle" className="fill-rose-600 text-xs font-extrabold">×•</text>
          <text x="180" y="88" textAnchor="middle" className="fill-rose-600 text-xs font-extrabold">×•</text>
          <text x="180" y="104" textAnchor="middle" className="fill-rose-600 text-xs font-extrabold">×•</text>
          <text x="108" y="90" textAnchor="middle" className="fill-blue-600 text-xs font-bold">••</text>
          <text x="252" y="90" textAnchor="middle" className="fill-blue-600 text-xs font-bold">••</text>
          <text x="180" y="156" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-bold">
            N≡N (3 shared pairs = 6 e⁻ + 1 lone pair each)
          </text>
        </g>
      )}

      {spec === 'O2' && (
        <g>
          <circle cx="145" cy="86" r="46" fill="none" stroke="#dc2626" strokeWidth="1.6" />
          <circle cx="215" cy="86" r="46" fill="none" stroke="#dc2626" strokeWidth="1.6" />
          <text x="132" y="90" textAnchor="middle" className="fill-rose-600 text-sm font-extrabold">O</text>
          <text x="228" y="90" textAnchor="middle" className="fill-rose-600 text-sm font-extrabold">O</text>
          <text x="180" y="80" textAnchor="middle" className="fill-amber-600 text-xs font-extrabold">×•</text>
          <text x="180" y="98" textAnchor="middle" className="fill-amber-600 text-xs font-extrabold">×•</text>
          <text x="115" y="62" textAnchor="middle" className="fill-rose-500 text-xs font-bold">••</text>
          <text x="115" y="114" textAnchor="middle" className="fill-rose-500 text-xs font-bold">••</text>
          <text x="245" y="62" textAnchor="middle" className="fill-rose-500 text-xs font-bold">••</text>
          <text x="245" y="114" textAnchor="middle" className="fill-rose-500 text-xs font-bold">••</text>
          <text x="180" y="156" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-bold">
            O=O (2 shared pairs = 4 e⁻ + 2 lone pairs each)
          </text>
        </g>
      )}

      {spec === 'S8' && (
        <g>
          {/* Crown ring of 8 S atoms */}
          {[
            [180, 32],
            [228, 48],
            [248, 86],
            [228, 124],
            [180, 140],
            [132, 124],
            [112, 86],
            [132, 48],
          ].map(([x, y], idx, arr) => {
            const next = arr[(idx + 1) % arr.length];
            return (
              <g key={idx}>
                <line x1={x} y1={y} x2={next[0]} y2={next[1]} stroke="#eab308" strokeWidth="2.5" />
                <circle cx={x} cy={y} r="13" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.6" />
                <text x={x} y={y + 4} textAnchor="middle" className="fill-amber-950 text-[11px] font-extrabold">
                  S
                </text>
              </g>
            );
          })}
          <text x="180" y="90" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-extrabold">
            S₈ Crown Ring
          </text>
        </g>
      )}

      {spec === 'NaCl' && (
        <g>
          <text x="72" y="88" textAnchor="middle" className="fill-slate-800 dark:fill-white text-base font-extrabold">
            Na• (2,8,1)
          </text>
          <path d="M 118 76 Q 152 46 184 74" fill="none" stroke="#7c3aed" strokeWidth="2.2" />
          <polygon points="184,74 176,68 181,62" fill="#7c3aed" />
          <text x="150" y="48" textAnchor="middle" className="fill-violet-700 dark:fill-violet-300 text-[10.5px] font-bold">
            1 e⁻ transferred
          </text>
          <text x="242" y="88" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-base font-extrabold">
            → [Na]⁺ [•Cl•••]⁻
          </text>
          <text x="180" y="148" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[11px] font-bold">
            Electrostatic attraction between Na⁺ (2,8) &amp; Cl⁻ (2,8,8)
          </text>
        </g>
      )}

      {spec === 'MgCl2' && (
        <g>
          <text x="72" y="88" textAnchor="middle" className="fill-slate-800 dark:fill-white text-sm font-extrabold">
            •Mg• (2,8,2)
          </text>
          <path d="M 118 76 Q 145 48 175 64" fill="none" stroke="#7c3aed" strokeWidth="2" />
          <path d="M 118 98 Q 145 124 175 110" fill="none" stroke="#7c3aed" strokeWidth="2" />
          <text x="248" y="68" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-extrabold">
            [•Cl•••]⁻ (2,8,8)
          </text>
          <text x="248" y="114" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-extrabold">
            [•Cl•••]⁻ (2,8,8)
          </text>
          <text x="180" y="150" textAnchor="middle" className="fill-violet-700 dark:fill-violet-300 text-[11px] font-bold">
            [Mg]²⁺ 2[Cl]⁻ (2 valence e⁻ donated to 2 Cl atoms)
          </text>
        </g>
      )}
    </svg>
  );
}

function ElectronDotAndIsomersVisual() {
  const [tab, setTab] = useState<'dot' | 'isomers'>('dot');
  const [spec, setSpec] = useState<DotSpecKey>('CH4');
  const [isomerFamily, setIsomerFamily] = useState<'butane' | 'pentane' | 'rings'>('butane');

  const active = DOT_SPECS[spec];

  return (
    <div className="space-y-3 no-word-lookup select-none">
      {/* Mode Switch */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTab('dot')}
          className={`rounded-xl px-3 py-1.5 text-xs font-extrabold border transition cursor-pointer ${
            tab === 'dot'
              ? 'bg-violet-600 text-white border-violet-600'
              : 'bg-white text-slate-700 border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
          }`}
        >
          Electron-Dot Gallery (10 Molecules)
        </button>
        <button
          type="button"
          onClick={() => setTab('isomers')}
          className={`rounded-xl px-3 py-1.5 text-xs font-extrabold border transition cursor-pointer ${
            tab === 'isomers'
              ? 'bg-violet-600 text-white border-violet-600'
              : 'bg-white text-slate-700 border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
          }`}
        >
          Structural Isomers &amp; Rings (Butane, Pentane, C₆H₁₂ vs C₆H₆)
        </button>
      </div>

      {tab === 'dot' ? (
        <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-3 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-wrap gap-1.5">
            {(Object.keys(DOT_SPECS) as DotSpecKey[]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setSpec(k)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold border transition cursor-pointer ${
                  spec === k
                    ? 'bg-violet-600 text-white border-violet-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
                }`}
              >
                {k}
              </button>
            ))}
          </div>

          <DotSvg spec={spec} />

          <div className="grid sm:grid-cols-3 gap-2 text-xs">
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 dark:bg-slate-900 dark:border-slate-800">
              <div className="text-[10.5px] font-bold uppercase text-slate-500">Bond Class</div>
              <div className="font-bold text-slate-900 dark:text-white mt-0.5">{active.kind}</div>
            </div>
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 dark:bg-slate-900 dark:border-slate-800">
              <div className="text-[10.5px] font-bold uppercase text-slate-500">Structural Formula</div>
              <div className="font-mono font-bold text-violet-700 dark:text-violet-300 mt-0.5">{active.structural}</div>
            </div>
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 dark:bg-slate-900 dark:border-slate-800">
              <div className="text-[10.5px] font-bold uppercase text-slate-500">Shared / Transferred</div>
              <div className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{active.shared}</div>
            </div>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300">{active.note}</p>
        </div>
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-3 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-wrap gap-1.5">
            {(
              [
                ['butane', 'Butane C₄H₁₀ (2 Isomers)'],
                ['pentane', 'Pentane C₅H₁₂ (3 Isomers)'],
                ['rings', 'Cyclohexane C₆H₁₂ vs Benzene C₆H₆'],
              ] as const
            ).map(([k, lbl]) => (
              <button
                key={k}
                type="button"
                onClick={() => setIsomerFamily(k)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold border transition cursor-pointer ${
                  isomerFamily === k
                    ? 'bg-violet-600 text-white border-violet-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
                }`}
              >
                {lbl}
              </button>
            ))}
          </div>

          {isomerFamily === 'butane' && (
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-3 dark:border-emerald-900 dark:bg-emerald-950/20">
                <div className="font-extrabold text-emerald-800 dark:text-emerald-300">
                  1. n-Butane (Straight Chain)
                </div>
                <div className="font-mono font-bold text-sm my-2 text-slate-900 dark:text-white">
                  CH₃–CH₂–CH₂–CH₃
                </div>
                <p className="text-slate-600 dark:text-slate-400">Formula: C₄H₁₀ • 4-carbon continuous skeleton.</p>
              </div>
              <div className="rounded-xl border border-violet-200 bg-violet-50/40 p-3 dark:border-violet-900 dark:bg-violet-950/20">
                <div className="font-extrabold text-violet-800 dark:text-violet-300">
                  2. Isobutane (2-methylpropane)
                </div>
                <div className="font-mono font-bold text-sm my-2 text-slate-900 dark:text-white">
                  CH₃–CH(CH₃)–CH₃
                </div>
                <p className="text-slate-600 dark:text-slate-400">Formula: C₄H₁₀ • Branched skeleton (lower boiling point).</p>
              </div>
            </div>
          )}

          {isomerFamily === 'pentane' && (
            <div className="grid sm:grid-cols-3 gap-2.5 text-xs">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-3 dark:border-emerald-900 dark:bg-emerald-950/20">
                <div className="font-extrabold text-emerald-800 dark:text-emerald-300">1. n-Pentane</div>
                <div className="font-mono font-bold text-xs my-2 text-slate-900 dark:text-white">
                  CH₃–CH₂–CH₂–CH₂–CH₃
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Straight 5-carbon chain (C₅H₁₂).</p>
              </div>
              <div className="rounded-xl border border-sky-200 bg-sky-50/40 p-3 dark:border-sky-900 dark:bg-sky-950/20">
                <div className="font-extrabold text-sky-800 dark:text-sky-300">2. Isopentane</div>
                <div className="font-mono font-bold text-xs my-2 text-slate-900 dark:text-white">
                  CH₃–CH(CH₃)–CH₂–CH₃
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">2-methylbutane (1 branch, C₅H₁₂).</p>
              </div>
              <div className="rounded-xl border border-violet-200 bg-violet-50/40 p-3 dark:border-violet-900 dark:bg-violet-950/20">
                <div className="font-extrabold text-violet-800 dark:text-violet-300">3. Neopentane</div>
                <div className="font-mono font-bold text-xs my-2 text-slate-900 dark:text-white">
                  C(CH₃)₄
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">2,2-dimethylpropane (cross-shaped, C₅H₁₂).</p>
              </div>
            </div>
          )}

          {isomerFamily === 'rings' && (
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-3 dark:border-emerald-900 dark:bg-emerald-950/20">
                <div className="text-xs font-extrabold text-emerald-800 dark:text-emerald-300">
                  Cyclohexane (C₆H₁₂) — Saturated Ring
                </div>
                <svg viewBox="0 0 200 120" className="w-full h-28 my-1" aria-label="Cyclohexane ring">
                  <polygon
                    points="100,18 148,44 148,86 100,110 52,86 52,44"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="2.6"
                  />
                  {[
                    [100, 18, 'CH₂'],
                    [148, 44, 'CH₂'],
                    [148, 86, 'CH₂'],
                    [100, 110, 'CH₂'],
                    [52, 86, 'CH₂'],
                    [52, 44, 'CH₂'],
                  ].map(([x, y, lbl], i) => (
                    <g key={i}>
                      <circle cx={Number(x)} cy={Number(y)} r="11" fill="#ecfdf5" stroke="#059669" strokeWidth="1.2" />
                      <text x={Number(x)} y={Number(y) + 3} textAnchor="middle" className="fill-emerald-900 text-[8.5px] font-extrabold">
                        {lbl}
                      </text>
                    </g>
                  ))}
                </svg>
                <p className="text-[11px] text-slate-600 dark:text-slate-300">
                  6 C–C single bonds + 12 C–H bonds (<strong>18 single covalent bonds total</strong>).
                </p>
              </div>

              <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-3 dark:border-rose-900 dark:bg-rose-950/20">
                <div className="text-xs font-extrabold text-rose-800 dark:text-rose-300">
                  Benzene (C₆H₆) — Unsaturated Ring
                </div>
                <svg viewBox="0 0 200 120" className="w-full h-28 my-1" aria-label="Benzene ring">
                  <polygon
                    points="100,18 148,44 148,86 100,110 52,86 52,44"
                    fill="none"
                    stroke="#e11d48"
                    strokeWidth="2.6"
                  />
                  {/* Alternating 3 double bonds */}
                  <line x1="103" y1="25" x2="142" y2="47" stroke="#e11d48" strokeWidth="2.2" />
                  <line x1="142" y1="82" x2="103" y2="103" stroke="#e11d48" strokeWidth="2.2" />
                  <line x1="58" y1="82" x2="58" y2="48" stroke="#e11d48" strokeWidth="2.2" />
                  {[
                    [100, 18, 'CH'],
                    [148, 44, 'CH'],
                    [148, 86, 'CH'],
                    [100, 110, 'CH'],
                    [52, 86, 'CH'],
                    [52, 44, 'CH'],
                  ].map(([x, y, lbl], i) => (
                    <g key={i}>
                      <circle cx={Number(x)} cy={Number(y)} r="11" fill="#fff1f2" stroke="#e11d48" strokeWidth="1.2" />
                      <text x={Number(x)} y={Number(y) + 3} textAnchor="middle" className="fill-rose-900 text-[9px] font-extrabold">
                        {lbl}
                      </text>
                    </g>
                  ))}
                </svg>
                <p className="text-[11px] text-slate-600 dark:text-slate-300">
                  Alternating <strong>3 C=C double bonds</strong> + <strong>3 C–C single bonds</strong> + 6 C–H bonds.
                </p>
              </div>
            </div>
          )}

          <div className="rounded-lg border border-amber-300 bg-amber-50/70 px-3 py-2 text-[11px] text-amber-950 flex items-start gap-2 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Board Trap:</strong> Structural isomers start only from <strong>C₄H₁₀ (Butane, 2 isomers)</strong>. Methane, Ethane, and Propane have <strong>only 1 structure (NO isomers)</strong>!
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================================
 * PUBLIC EXPORT
 * ========================================================================== */
export function ChemistryConceptDiagram({ diagramId }: { diagramId: ChemistryDiagramId }) {
  switch (diagramId) {
    case 'decomposition-trio-visual':
      return <DecompositionTrioVisual />;
    case 'ph-scale-and-chlor-alkali-map':
      return <PhAndChlorAlkaliVisual />;
    case 'metallurgy-flowchart-and-rusting':
      return <MetallurgyAndRustingVisual />;
    case 'electron-dot-and-isomers-gallery':
      return <ElectronDotAndIsomersVisual />;
  }
}
