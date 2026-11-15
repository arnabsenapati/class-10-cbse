import { useEffect, useState } from 'react';
import { Flower2, Pause, Play, RotateCcw, Sprout } from 'lucide-react';

type AsexualMode =
  | 'amoeba'
  | 'leishmania'
  | 'plasmodium'
  | 'hydra'
  | 'planaria'
  | 'rhizopus';

const ASEXUAL_INFO: Record<
  AsexualMode,
  {
    label: string;
    short: string;
    stages: [string, string, string, string];
    cbsePoint: string;
  }
> = {
  amoeba: {
    label: '1. Amoeba Binary Fission (Any Plane)',
    short: 'Amoeba Fission',
    stages: [
      'Stage 1: Mature parent Amoeba prepares by copying its DNA.',
      'Stage 2: Nucleus elongates and divides (Karyokinesis).',
      'Stage 3: Cytoplasm pinches inward along ANY plane.',
      'Stage 4: Splits into 2 identical daughter Amoebae!',
    ],
    cbsePoint: 'Amoeba is irregular in shape, so binary fission can happen in ANY plane.',
  },
  leishmania: {
    label: '2. Leishmania Longitudinal Fission (Fixed Whip Axis)',
    short: 'Leishmania Fission',
    stages: [
      'Stage 1: Leishmania (causes Kala-azar) has a whip-like flagellum at one end.',
      'Stage 2: Nucleus divides & a second flagellum forms at the anterior end.',
      'Stage 3: Body splits strictly along the LONGITUDINAL (lengthwise) whip axis!',
      'Stage 4: Two daughter Leishmania separate symmetrically.',
    ],
    cbsePoint: 'CBSE Contrast: Amoeba splits in ANY plane; Leishmania splits ONLY longitudinally along its whip-like body axis!',
  },
  plasmodium: {
    label: '3. Plasmodium Multiple Fission (Cyst Burst)',
    short: 'Plasmodium Multiple',
    stages: [
      'Stage 1: Malarial parasite Plasmodium forms a thick protective Cyst wall.',
      'Stage 2: Inside the cyst, the single nucleus divides repeatedly into dozens.',
      'Stage 3: Cytoplasm wraps around each nucleus forming numerous daughter cells.',
      'Stage 4: Cyst wall ruptures, releasing MANY daughter cells simultaneously!',
    ],
    cbsePoint: 'Multiple fission ensures rapid survival & spread of the malarial parasite.',
  },
  hydra: {
    label: '4. Hydra Budding',
    short: 'Hydra Budding',
    stages: [
      'Stage 1: Repeated cell division occurs at one specific site on Hydra’s body.',
      'Stage 2: Outgrowth bulges outward into a small multicellular Bud.',
      'Stage 3: Bud develops mouth & tentacles while attached to parent.',
      'Stage 4: Fully formed miniature Hydra detaches as an independent individual!',
    ],
    cbsePoint: 'Hydra uses regenerative cells at a specific site for budding (whereas Yeast forms unicellular uneven buds).',
  },
  planaria: {
    label: '5. Planaria Regeneration (3 Pieces → 3 Worms)',
    short: 'Planaria Regen',
    stages: [
      'Stage 1: Intact flatworm Planaria.',
      'Stage 2: Cut accidentally into 3 pieces (Head, Middle, Tail).',
      'Stage 3: Specialized stem cells proliferate rapidly into a cell mass & differentiate.',
      'Stage 4: All 3 pieces regrow missing organs → 3 complete Planaria worms!',
    ],
    cbsePoint: 'Regeneration is NOT normal reproduction because organisms do not wait to be cut to reproduce.',
  },
  rhizopus: {
    label: '6. Rhizopus Spore Formation (Sporangium Burst)',
    short: 'Rhizopus Spores',
    stages: [
      'Stage 1: Thread-like non-reproductive Hyphae spread over moist bread.',
      'Stage 2: Vertical stalk grows a round blob-on-a-stick called a Sporangium.',
      'Stage 3: Hundreds of thick-walled Spores mature safely inside Sporangium.',
      'Stage 4: Sporangium bursts! Spores scatter & germinate on fresh moist bread.',
    ],
    cbsePoint: 'Thick spore walls protect spores against heat/drought until they land on a moist surface.',
  },
};

const POLLINATION_STAGES = [
  {
    title: 'Stage 1: Pollination (Pollen Lands on Stigma)',
    desc: 'Pollen grain (male gamete carrier) transfers from Anther to sticky Stigma via wind, water, or insects.',
  },
  {
    title: 'Stage 2: Chemotropic Pollen Tube Grows Down Style',
    desc: 'Stimulated by sugary chemicals from the pistil (Chemotropism!), a pollen tube grows down the Style toward the Ovule inside Ovary.',
  },
  {
    title: 'Stage 3: Fertilization (Male + Female Germ Cells Fuse)',
    desc: 'Pollen tube enters the Ovule; male germ cell fuses with female egg cell to form a diploid Zygote (n + n = 2n).',
  },
  {
    title: 'Stage 4: Post-Fertilization Morph (Seed & Fruit!)',
    desc: 'Zygote → Embryo; Ovule develops tough coat → Seed; Ovary swells & ripens → Fruit; Petals, Sepals & Stamens dry up and fall off!',
  },
];

export function BioReproductionLab() {
  const [activeTab, setActiveTab] = useState<'asexual' | 'pollination'>('asexual');
  const [mode, setMode] = useState<AsexualMode>('amoeba');
  const [stage, setStage] = useState(1); // 1..4 (smooth continuous or discrete)
  const [playing, setPlaying] = useState(false);

  // Tab 2 state
  const [pollStage, setPollStage] = useState(1);
  const [pollPlaying, setPollPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const t = window.setInterval(() => {
      setStage((s) => (s >= 4 ? 1 : s + 1));
    }, 1150);
    return () => window.clearInterval(t);
  }, [playing]);

  useEffect(() => {
    if (!pollPlaying) return;
    const t = window.setInterval(() => {
      setPollStage((s) => (s >= 4 ? 1 : s + 1));
    }, 1300);
    return () => window.clearInterval(t);
  }, [pollPlaying]);

  const info = ASEXUAL_INFO[mode];

  return (
    <div className="no-word-lookup select-none rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-50/50 via-white to-emerald-50/40 p-4 sm:p-5 space-y-4 dark:border-pink-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-pink-100 pb-3.5 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-pink-600 text-white shadow-xs">
            <Flower2 className="h-5 w-5" />
          </span>
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
              Reproduction Stage Animator Lab (Ch 7)
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Scrub &amp; animate all 6 asexual reproduction modes + flower fertilization → fruit morph
            </p>
          </div>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => setActiveTab('asexual')}
          className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-extrabold transition cursor-pointer ${
            activeTab === 'asexual'
              ? 'bg-pink-600 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:border-pink-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
          }`}
        >
          <Sprout className="h-3.5 w-3.5" /> 1. 6-Mode Asexual Stage Player
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('pollination')}
          className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-extrabold transition cursor-pointer ${
            activeTab === 'pollination'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
          }`}
        >
          <Flower2 className="h-3.5 w-3.5" /> 2. Pollination → Pollen Tube → Seed &amp; Fruit Morph
        </button>
      </div>

      {/* TAB 1: 6 ASEXUAL MODES */}
      {activeTab === 'asexual' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {(Object.keys(ASEXUAL_INFO) as AsexualMode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => {
                  setMode(m);
                  setStage(1);
                }}
                className={`rounded-lg px-2.5 py-1.5 text-[11px] font-bold transition cursor-pointer ${
                  mode === m
                    ? 'bg-pink-600 text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-pink-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
                }`}
              >
                {ASEXUAL_INFO[m].short}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-xs font-extrabold text-pink-700 dark:text-pink-400">
                {info.label}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPlaying((p) => !p)}
                  className="inline-flex items-center gap-1 rounded-lg bg-pink-600 px-3 py-1 text-xs font-extrabold text-white hover:bg-pink-700 cursor-pointer"
                >
                  {playing ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                  {playing ? 'Pause' : 'Play'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPlaying(false);
                    setStage(1);
                  }}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-bold text-slate-600 cursor-pointer dark:border-slate-700 dark:text-slate-300"
                >
                  <RotateCcw className="h-3 w-3" /> Reset
                </button>
              </div>
            </div>

            {/* Stage scrubber */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setPlaying(false);
                      setStage(s);
                    }}
                    className={`rounded-md px-2.5 py-1 font-mono text-xs font-extrabold cursor-pointer ${
                      stage === s
                        ? 'bg-slate-900 text-white dark:bg-pink-500'
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                    }`}
                  >
                    Step {s}
                  </button>
                ))}
              </div>
              <input
                type="range"
                min={1}
                max={4}
                step={1}
                value={stage}
                onChange={(e) => {
                  setPlaying(false);
                  setStage(Number(e.target.value));
                }}
                className="flex-1 min-w-[120px] accent-pink-600 cursor-pointer"
                aria-label="Asexual reproduction stage scrubber"
              />
            </div>

            {/* Animated SVG Stage */}
            <svg viewBox="0 0 440 165" className="w-full max-w-xl mx-auto h-auto" aria-label={info.label}>
              {mode === 'amoeba' && (
                <g>
                  {stage === 1 && (
                    <g>
                      <path d="M180 44 C215 32, 260 54, 256 84 C252 114, 212 126, 178 112 C152 100, 154 56, 180 44 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="2.5" />
                      <circle cx="208" cy="80" r="14" fill="#1d4ed8" />
                    </g>
                  )}
                  {stage === 2 && (
                    <g>
                      <path d="M168 44 C215 34, 272 54, 268 84 C264 114, 212 124, 168 112 C142 98, 146 56, 168 44 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="2.5" />
                      <ellipse cx="208" cy="80" rx="28" ry="11" fill="#1d4ed8" />
                    </g>
                  )}
                  {stage === 3 && (
                    <g>
                      <path d="M150 48 C184 44, 198 66, 208 68 C218 66, 232 44, 268 48 C286 72, 282 104, 260 112 C230 118, 216 94, 208 92 C200 94, 186 118, 156 112 C136 102, 134 68, 150 48 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="2.5" />
                      <circle cx="174" cy="80" r="11" fill="#1d4ed8" />
                      <circle cx="244" cy="80" r="11" fill="#1d4ed8" />
                    </g>
                  )}
                  {stage === 4 && (
                    <g>
                      <path d="M110 50 C142 40, 174 58, 170 84 C166 110, 136 118, 108 106 C90 94, 92 62, 110 50 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="2.5" />
                      <circle cx="136" cy="80" r="11" fill="#1d4ed8" />
                      <path d="M270 50 C302 40, 334 58, 330 84 C326 110, 296 118, 268 106 C250 94, 252 62, 270 50 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="2.5" />
                      <circle cx="296" cy="80" r="11" fill="#1d4ed8" />
                    </g>
                  )}
                </g>
              )}

              {mode === 'leishmania' && (
                <g>
                  {stage <= 2 && (
                    <g>
                      <ellipse cx="220" cy="84" rx={stage === 1 ? 22 : 30} ry="42" fill="#fde68a" stroke="#b45309" strokeWidth="2.5" />
                      <path d="M220 42 Q232 18 214 6" fill="none" stroke="#92400e" strokeWidth="2.8" strokeLinecap="round" />
                      {stage === 2 && <path d="M226 42 Q242 20 232 6" fill="none" stroke="#92400e" strokeWidth="2.6" strokeLinecap="round" />}
                      <circle cx={stage === 1 ? 220 : 208} cy="84" r="9" fill="#92400e" />
                      {stage === 2 && <circle cx="232" cy="84" r="9" fill="#92400e" />}
                    </g>
                  )}
                  {stage === 3 && (
                    <g>
                      <line x1="220" y1="20" x2="220" y2="145" stroke="#dc2626" strokeWidth="1.8" strokeDasharray="4 3" />
                      <ellipse cx="204" cy="86" rx="16" ry="38" fill="#fde68a" stroke="#b45309" strokeWidth="2.2" />
                      <ellipse cx="236" cy="86" rx="16" ry="38" fill="#fde68a" stroke="#b45309" strokeWidth="2.2" />
                      <path d="M204 48 Q192 22 204 8" fill="none" stroke="#92400e" strokeWidth="2.5" />
                      <path d="M236 48 Q248 22 236 8" fill="none" stroke="#92400e" strokeWidth="2.5" />
                      <circle cx="204" cy="86" r="7.5" fill="#92400e" />
                      <circle cx="236" cy="86" r="7.5" fill="#92400e" />
                    </g>
                  )}
                  {stage === 4 && (
                    <g>
                      <ellipse cx="145" cy="88" rx="18" ry="38" fill="#fde68a" stroke="#b45309" strokeWidth="2.2" />
                      <path d="M145 50 Q135 24 148 10" fill="none" stroke="#92400e" strokeWidth="2.5" />
                      <circle cx="145" cy="88" r="8" fill="#92400e" />
                      <ellipse cx="295" cy="88" rx="18" ry="38" fill="#fde68a" stroke="#b45309" strokeWidth="2.2" />
                      <path d="M295 50 Q305 24 292 10" fill="none" stroke="#92400e" strokeWidth="2.5" />
                      <circle cx="295" cy="88" r="8" fill="#92400e" />
                    </g>
                  )}
                </g>
              )}

              {mode === 'plasmodium' && (
                <g>
                  {stage < 4 ? (
                    <circle
                      cx="220"
                      cy="84"
                      r="52"
                      fill="#fbcfe8"
                      stroke="#9d174d"
                      strokeWidth={stage === 1 ? 3 : 5}
                      strokeDasharray={stage === 3 ? '8 3' : undefined}
                    />
                  ) : (
                    <path
                      d="M174 52 A52 52 0 1 0 264 52"
                      fill="none"
                      stroke="#9d174d"
                      strokeWidth="4"
                      strokeDasharray="10 6"
                    />
                  )}
                  {stage === 1 && <circle cx="220" cy="84" r="14" fill="#be185d" />}
                  {stage >= 2 &&
                    [
                      [200, 66],
                      [238, 66],
                      [194, 92],
                      [220, 86],
                      [246, 92],
                      [206, 112],
                      [234, 112],
                      [220, 56],
                    ].map(([x, y], idx) => (
                      <circle
                        key={idx}
                        cx={stage === 4 ? x + (x - 220) * 1.65 : x}
                        cy={stage === 4 ? y + (y - 84) * 1.15 : y}
                        r={stage >= 3 ? 7.5 : 6}
                        fill="#be185d"
                        stroke={stage >= 3 ? '#fce7f3' : 'none'}
                        strokeWidth="1.5"
                      />
                    ))}
                </g>
              )}

              {mode === 'hydra' && (
                <g>
                  {/* Parent Hydra */}
                  <rect x="195" y="64" width="24" height="76" rx="8" fill="#86efac" stroke="#15803d" strokeWidth="2.2" />
                  <path d="M198 64 L182 40 M204 64 L198 34 M210 64 L216 34 M216 64 L232 40" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
                  {stage === 1 && <circle cx="219" cy="112" r="5" fill="#16a34a" />}
                  {stage === 2 && (
                    <path d="M219 114 Q242 104 246 92 Q232 94 219 102 Z" fill="#86efac" stroke="#15803d" strokeWidth="2" />
                  )}
                  {stage === 3 && (
                    <g>
                      <path d="M219 114 L252 90 L242 80 L219 100 Z" fill="#86efac" stroke="#15803d" strokeWidth="2" />
                      <path d="M244 82 L252 66 M249 87 L266 78" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
                    </g>
                  )}
                  {stage === 4 && (
                    <g transform="translate(88, 22)">
                      <rect x="195" y="64" width="16" height="52" rx="6" fill="#86efac" stroke="#15803d" strokeWidth="2" />
                      <path d="M197 64 L188 46 M203 64 L203 44 M209 64 L218 46" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
                    </g>
                  )}
                </g>
              )}

              {mode === 'planaria' && (
                <g>
                  {stage === 1 && (
                    <path d="M204 34 Q220 18 236 34 L240 124 Q220 144 200 124 Z" fill="#fdba74" stroke="#c2410c" strokeWidth="2.4" />
                  )}
                  {stage === 2 && (
                    <g>
                      <path d="M204 28 Q220 14 236 28 L236 56 L204 56 Z" fill="#fdba74" stroke="#c2410c" strokeWidth="2" />
                      <rect x="204" y="68" width="32" height="28" fill="#fdba74" stroke="#c2410c" strokeWidth="2" />
                      <path d="M204 108 L236 108 L234 132 Q220 148 206 132 Z" fill="#fdba74" stroke="#c2410c" strokeWidth="2" />
                    </g>
                  )}
                  {stage >= 3 &&
                    [110, 220, 330].map((cx) => (
                      <g key={cx}>
                        <path
                          d={`M${cx - 14} ${stage === 4 ? 36 : 56} Q${cx} ${stage === 4 ? 20 : 44} ${cx + 14} ${stage === 4 ? 36 : 56} L${cx + 16} ${stage === 4 ? 122 : 108} Q${cx} ${stage === 4 ? 140 : 122} ${cx - 16} ${stage === 4 ? 122 : 108} Z`}
                          fill={stage === 4 ? '#fb923c' : '#fed7aa'}
                          stroke="#c2410c"
                          strokeWidth="2.2"
                        />
                        {stage === 4 && (
                          <>
                            <circle cx={cx - 5} cy="40" r="2" fill="#0f172a" />
                            <circle cx={cx + 5} cy="40" r="2" fill="#0f172a" />
                          </>
                        )}
                      </g>
                    ))}
                </g>
              )}

              {mode === 'rhizopus' && (
                <g>
                  {/* Hyphae base */}
                  <path d="M90 142 Q160 132 220 142 Q280 150 350 140" fill="none" stroke="#64748b" strokeWidth="3.5" />
                  {/* Sporangiophore stalk */}
                  <line x1="220" y1="142" x2="220" y2={stage === 1 ? 112 : 58} stroke="#475569" strokeWidth="4" />
                  {stage >= 2 && (
                    <circle
                      cx="220"
                      cy="54"
                      r={stage === 2 ? 18 : 22}
                      fill={stage === 4 ? 'none' : '#334155'}
                      stroke="#0f172a"
                      strokeWidth="2.2"
                      strokeDasharray={stage === 4 ? '6 4' : undefined}
                    />
                  )}
                  {stage >= 3 &&
                    [
                      [212, 46],
                      [228, 46],
                      [220, 56],
                      [210, 60],
                      [230, 60],
                      [220, 40],
                    ].map(([x, y], i) => (
                      <circle
                        key={i}
                        cx={stage === 4 ? x + (i - 2.5) * 26 : x}
                        cy={stage === 4 ? y + 48 + (i % 2) * 18 : y}
                        r="3.8"
                        fill="#0f172a"
                        stroke="#cbd5e1"
                        strokeWidth="1"
                      />
                    ))}
                </g>
              )}
            </svg>

            <div className="rounded-xl bg-pink-50/70 border border-pink-200 p-3 space-y-1 text-xs dark:bg-pink-950/30 dark:border-pink-900">
              <div className="font-extrabold text-pink-900 dark:text-pink-300">
                {info.stages[stage - 1]}
              </div>
              <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                <strong>CBSE Key Point:</strong> {info.cbsePoint}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: POLLINATION -> POLLEN TUBE -> SEED & FRUIT MORPH */}
      {activeTab === 'pollination' && (
        <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400">
              {POLLINATION_STAGES[pollStage - 1].title}
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setPollPlaying((p) => !p)}
                className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1 text-xs font-extrabold text-white hover:bg-emerald-700 cursor-pointer"
              >
                {pollPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                {pollPlaying ? 'Pause' : 'Play'}
              </button>
              {[1, 2, 3, 4].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setPollPlaying(false);
                    setPollStage(s);
                  }}
                  className={`rounded-md px-2.5 py-1 font-mono text-xs font-extrabold cursor-pointer ${
                    pollStage === s
                      ? 'bg-slate-900 text-white dark:bg-emerald-500'
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 420 220" className="w-full max-w-lg mx-auto h-auto" aria-label="Pollination to Fruit Morph">
            {/* Petals & Stamens (present Stages 1-3, fallen off in Stage 4!) */}
            {pollStage < 4 && (
              <g>
                <path d="M192 174 C140 144, 130 74, 166 56 C184 70, 194 134, 196 172 Z" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.8" />
                <path d="M228 174 C280 144, 290 74, 254 56 C236 70, 226 134, 224 172 Z" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.8" />
                <path d="M190 166 Q168 120 170 84" fill="none" stroke="#ca8a04" strokeWidth="2.5" />
                <ellipse cx="170" cy="80" rx="8" ry="5" fill="#facc15" stroke="#a16207" strokeWidth="1.5" />
                <path d="M230 166 Q252 120 250 84" fill="none" stroke="#ca8a04" strokeWidth="2.5" />
                <ellipse cx="250" cy="80" rx="8" ry="5" fill="#facc15" stroke="#a16207" strokeWidth="1.5" />
              </g>
            )}

            {/* Ovary (swells into Fruit in Stage 4!) */}
            <ellipse
              cx="210"
              cy="152"
              rx={pollStage === 4 ? 54 : 24}
              ry={pollStage === 4 ? 44 : 26}
              fill={pollStage === 4 ? '#f97316' : '#bbf7d0'}
              stroke={pollStage === 4 ? '#c2410c' : '#15803d'}
              strokeWidth="2.5"
            />
            {/* Style & Stigma (wither in Stage 4) */}
            {pollStage < 4 && (
              <g>
                <rect x="204" y="64" width="12" height="64" fill="#86efac" stroke="#15803d" strokeWidth="1.8" />
                <ellipse cx="210" cy="58" rx="16" ry="7" fill="#4ade80" stroke="#15803d" strokeWidth="1.8" />
              </g>
            )}

            {/* Ovule / Seed inside */}
            <ellipse
              cx="210"
              cy="154"
              rx={pollStage === 4 ? 18 : 11}
              ry={pollStage === 4 ? 22 : 14}
              fill={pollStage === 4 ? '#78350f' : '#fef08a'}
              stroke={pollStage === 4 ? '#451a03' : '#ca8a04'}
              strokeWidth="2"
            />

            {/* Egg / Zygote */}
            {pollStage < 4 && (
              <circle
                cx="210"
                cy="158"
                r={pollStage === 3 ? 6 : 4}
                fill={pollStage === 3 ? '#dc2626' : '#ef4444'}
              />
            )}

            {/* Pollen grain & Pollen tube */}
            {pollStage < 4 && (
              <circle cx="210" cy="49" r="5.5" fill="#eab308" stroke="#854d0e" strokeWidth="1.5" />
            )}
            {pollStage >= 2 && pollStage < 4 && (
              <path
                d={pollStage === 2 ? 'M210 54 L210 116' : 'M210 54 L210 153'}
                fill="none"
                stroke="#d97706"
                strokeWidth="3"
                strokeLinecap="round"
              />
            )}
            {pollStage === 2 && <circle cx="210" cy="116" r="3.5" fill="#dc2626" />}

            {/* Labels */}
            <text x="210" y="212" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-slate-700 dark:fill-slate-300">
              {pollStage === 4
                ? 'Ovary → Ripened FRUIT  |  Ovule → Tough SEED  |  Petals fallen off!'
                : 'Stigma → Style → Ovary → Ovule (Female Egg)'}
            </text>
          </svg>

          <p className="rounded-xl bg-emerald-50/70 border border-emerald-200 px-3.5 py-2.5 text-xs leading-relaxed text-emerald-950 dark:bg-emerald-950/30 dark:border-emerald-900 dark:text-emerald-200">
            {POLLINATION_STAGES[pollStage - 1].desc}
          </p>
        </div>
      )}
    </div>
  );
}
