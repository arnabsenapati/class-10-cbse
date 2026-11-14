import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { DiagramId } from '../../types/curriculum';

export function DihybridSeedSvg({
  isRound,
  isYellow,
  size = 34,
}: {
  isRound: boolean;
  isYellow: boolean;
  size?: number;
}) {
  const fill = isYellow ? '#facc15' : '#22c55e';
  const stroke = isYellow ? '#a16207' : '#15803d';
  const shade = isYellow ? '#eab308' : '#16a34a';

  if (isRound) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        aria-label={`${isRound ? 'Round' : 'Wrinkled'} ${isYellow ? 'Yellow' : 'Green'} seed`}
      >
        <circle cx="20" cy="20" r="15" fill={fill} stroke={stroke} strokeWidth="2.5" />
        <ellipse cx="14.5" cy="14" rx="4.5" ry="3" fill="rgba(255,255,255,0.55)" transform="rotate(-25 14.5 14)" />
        <path d="M12 29 A13 13 0 0 0 30 27" fill="none" stroke={shade} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      aria-label={`Wrinkled ${isYellow ? 'Yellow' : 'Green'} seed`}
    >
      <path
        d="M20 5 C25 4, 29 8, 33 11 C36 15, 34 21, 35 25 C34 31, 28 34, 23 35 C18 36, 13 33, 9 30 C5 26, 6 20, 6 15 C7 10, 14 6, 20 5 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M14 14 Q20 18 15 26 M25 13 Q21 20 27 27 M17 20 L24 19"
        fill="none"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export function TraitIllustration({
  traitId,
  isDominant,
  size = 42,
}: {
  traitId: string;
  isDominant: boolean;
  size?: number;
}) {
  if (traitId === 'seed-shape') {
    return <DihybridSeedSvg isRound={isDominant} isYellow={true} size={size} />;
  }

  if (traitId === 'flower-color') {
    const petalFill = isDominant ? '#8b5cf6' : '#f8fafc';
    const petalStroke = isDominant ? '#5b21b6' : '#94a3b8';
    const centerFill = isDominant ? '#fde047' : '#fbbf24';
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 44 44"
        aria-label={isDominant ? 'Violet flower' : 'White flower'}
      >
        <path d="M22 28 L22 41" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="22" cy="13" rx="9" ry="7" fill={petalFill} stroke={petalStroke} strokeWidth="2" />
        <ellipse cx="14" cy="21" rx="7" ry="6" fill={petalFill} stroke={petalStroke} strokeWidth="2" />
        <ellipse cx="30" cy="21" rx="7" ry="6" fill={petalFill} stroke={petalStroke} strokeWidth="2" />
        <circle cx="22" cy="19" r="4" fill={centerFill} stroke="#ca8a04" strokeWidth="1.3" />
      </svg>
    );
  }

  if (traitId === 'pod-color') {
    const fill = isDominant ? '#22c55e' : '#facc15';
    const stroke = isDominant ? '#15803d' : '#a16207';
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 44 44"
        aria-label={isDominant ? 'Green pod' : 'Yellow pod'}
      >
        <path
          d="M9 28 C12 14, 24 9, 36 13 C34 25, 22 33, 9 28 Z"
          fill={fill}
          stroke={stroke}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <circle cx="17" cy="23" r="3" fill="rgba(255,255,255,0.45)" />
        <circle cx="23" cy="20" r="3" fill="rgba(255,255,255,0.45)" />
        <circle cx="29" cy="17" r="2.7" fill="rgba(255,255,255,0.45)" />
      </svg>
    );
  }

  // Default: Stem height (Tall vs Dwarf pea plant)
  if (isDominant) {
    return (
      <svg width={size} height={size} viewBox="0 0 44 48" aria-label="Tall pea plant">
        <line x1="8" y1="44" x2="36" y2="44" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M22 44 L22 8" stroke="#0f766e" strokeWidth="3.5" strokeLinecap="round" />
        <ellipse cx="14" cy="31" rx="7" ry="4" fill="#10b981" stroke="#047857" strokeWidth="1.5" transform="rotate(-22 14 31)" />
        <ellipse cx="30" cy="24" rx="7" ry="4" fill="#10b981" stroke="#047857" strokeWidth="1.5" transform="rotate(22 30 24)" />
        <ellipse cx="14" cy="16" rx="6.5" ry="3.8" fill="#34d399" stroke="#047857" strokeWidth="1.5" transform="rotate(-20 14 16)" />
        <circle cx="22" cy="7" r="3.5" fill="#a855f7" stroke="#6b21a8" strokeWidth="1.4" />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 44 48" aria-label="Dwarf pea plant">
      <line x1="8" y1="44" x2="36" y2="44" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 44 L22 28" stroke="#d97706" strokeWidth="3.2" strokeLinecap="round" />
      <ellipse cx="15" cy="36" rx="6" ry="3.5" fill="#fbbf24" stroke="#b45309" strokeWidth="1.4" transform="rotate(-18 15 36)" />
      <ellipse cx="29" cy="35" rx="6" ry="3.5" fill="#fbbf24" stroke="#b45309" strokeWidth="1.4" transform="rotate(18 29 35)" />
      <circle cx="22" cy="27" r="3.2" fill="#a855f7" stroke="#6b21a8" strokeWidth="1.3" />
    </svg>
  );
}

export function ConceptDiagram({ diagramId }: { diagramId: DiagramId }) {
  switch (diagramId) {
    case 'meiosis-halving':
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-4 text-center dark:border-rose-900 dark:bg-rose-950/30">
            <div className="text-xs font-extrabold uppercase text-rose-700 dark:text-rose-400">
              Without Halving (Disaster!)
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 font-mono text-sm font-extrabold">
              <span className="rounded-lg bg-white border border-rose-300 px-2.5 py-1.5 text-rose-800 dark:bg-slate-900 dark:text-rose-300">
                46 (Egg)
              </span>
              <span className="text-rose-600">+</span>
              <span className="rounded-lg bg-white border border-rose-300 px-2.5 py-1.5 text-rose-800 dark:bg-slate-900 dark:text-rose-300">
                46 (Sperm)
              </span>
              <span className="text-rose-600">=</span>
              <span className="rounded-lg bg-rose-600 px-2.5 py-1.5 text-white">
                92 ✗
              </span>
            </div>
            <p className="mt-2 text-xs text-rose-900 dark:text-rose-200">
              Chromosome count would double every generation!
            </p>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-center dark:border-emerald-900 dark:bg-emerald-950/30">
            <div className="text-xs font-extrabold uppercase text-emerald-700 dark:text-emerald-400">
              Nature’s Solution: Meiosis (2n → n)
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 font-mono text-sm font-extrabold">
              <span className="rounded-lg bg-white border border-emerald-300 px-2.5 py-1.5 text-emerald-800 dark:bg-slate-900 dark:text-emerald-300">
                23 (n)
              </span>
              <span className="text-emerald-600">+</span>
              <span className="rounded-lg bg-white border border-emerald-300 px-2.5 py-1.5 text-emerald-800 dark:bg-slate-900 dark:text-emerald-300">
                23 (n)
              </span>
              <span className="text-emerald-600">=</span>
              <span className="rounded-lg bg-emerald-600 px-2.5 py-1.5 text-white">
                46 (2n) ✓
              </span>
            </div>
            <p className="mt-2 text-xs text-emerald-900 dark:text-emerald-200">
              Each gamete carries <strong>1 allele per gene</strong>, keeping 2n constant!
            </p>
          </div>
        </div>
      );

    case 'dominant-masking':
      return (
        <div className="grid gap-3 sm:grid-cols-3 text-center">
          {[
            {
              geno: 'TT',
              label: '2 Active Enzymes',
              barPct: '100%',
              barColor: 'bg-teal-600',
              trait: 'Tall',
              dom: true,
            },
            {
              geno: 'Tt',
              label: '1 Active + 1 Quiet',
              barPct: '65%',
              barColor: 'bg-teal-600',
              trait: 'Still Tall!',
              dom: true,
            },
            {
              geno: 'tt',
              label: '0 Active Enzymes',
              barPct: '14%',
              barColor: 'bg-amber-500',
              trait: 'Dwarf',
              dom: false,
            },
          ].map((item) => (
            <div
              key={item.geno}
              className="rounded-xl border border-slate-200 bg-white p-3.5 flex flex-col items-center justify-between dark:border-slate-700 dark:bg-slate-950"
            >
              <div className="font-mono text-lg font-extrabold text-slate-900 dark:text-white">
                {item.geno}
              </div>
              <div className="my-2">
                <TraitIllustration traitId="height" isDominant={item.dom} size={50} />
              </div>
              <div className="w-full space-y-1">
                <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden dark:bg-slate-800">
                  <div className={`h-full rounded-full ${item.barColor}`} style={{ width: item.barPct }} />
                </div>
                <div className="text-[11px] text-slate-500">{item.label}</div>
                <div
                  className={`text-xs font-extrabold ${
                    item.dom ? 'text-teal-700 dark:text-teal-400' : 'text-amber-700 dark:text-amber-400'
                  }`}
                >
                  {item.trait}
                </div>
              </div>
            </div>
          ))}
        </div>
      );

    case 'blend-vs-lego':
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4 space-y-2.5 dark:border-rose-900 dark:bg-rose-950/30">
            <div className="text-xs font-extrabold uppercase text-rose-700 dark:text-rose-400">
              Myth: Paint-Bucket Mixing ✗
            </div>
            <div className="flex items-center justify-center gap-2 py-2">
              <span className="h-9 w-9 rounded-full bg-rose-600 inline-block shadow-xs" title="Red" />
              <span className="font-bold text-slate-500">+</span>
              <span className="h-9 w-9 rounded-full bg-white border-2 border-slate-300 inline-block" title="White" />
              <span className="font-bold text-slate-500">→</span>
              <span className="h-9 w-9 rounded-full bg-pink-300 inline-block shadow-xs" title="Pink" />
            </div>
            <p className="text-xs text-rose-950 dark:text-rose-200 leading-relaxed">
              Once paint mixes into pink, you can <strong>never</strong> get pure white back! (If genes worked like paint, Dwarfness would vanish forever.)
            </p>
          </div>

          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-4 space-y-2.5 dark:border-teal-900 dark:bg-teal-950/30">
            <div className="text-xs font-extrabold uppercase text-teal-700 dark:text-teal-400">
              Reality: Mendel’s Discrete Allele Bricks ✓
            </div>
            <div className="flex items-center justify-center gap-1.5 py-2 font-mono text-xs font-extrabold">
              <span className="rounded-md bg-teal-600 px-2.5 py-2 text-white shadow-xs">T</span>
              <span className="rounded-md bg-amber-500 px-2.5 py-2 text-white shadow-xs">t</span>
              <span className="text-slate-500 px-1">→</span>
              <span className="rounded-md bg-teal-700 px-2 py-1.5 text-white">TT</span>
              <span className="rounded-md bg-teal-600 px-2 py-1.5 text-white">Tt</span>
              <span className="rounded-md bg-amber-500 px-2 py-1.5 text-white">tt</span>
            </div>
            <p className="text-xs text-teal-950 dark:text-teal-200 leading-relaxed">
              Alleles snap side-by-side without melting! In <span className="font-mono font-bold">F₁</span> (<span className="font-mono font-bold">Tt</span>), <span className="font-mono font-bold">t</span> waits quietly — and pops back out intact in <span className="font-mono font-bold">F₂</span> (<span className="font-mono font-bold">tt</span>)!
            </p>
          </div>
        </div>
      );

    case 'foil-arcs':
      return <FoilArcsDiagram />;

    case 'monohybrid-visual':
      return (
        <div className="rounded-xl border border-teal-200 bg-white p-4 space-y-4 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <div className="rounded-xl bg-teal-50/70 px-4 py-2.5 dark:bg-teal-950/40">
              <TraitIllustration traitId="height" isDominant={true} size={52} />
              <div className="font-mono text-sm font-extrabold text-teal-800 dark:text-teal-300">TT (Pure Tall)</div>
            </div>
            <span className="text-xl font-extrabold text-slate-400">×</span>
            <div className="rounded-xl bg-amber-50/70 px-4 py-2.5 dark:bg-amber-950/40">
              <TraitIllustration traitId="height" isDominant={false} size={52} />
              <div className="font-mono text-sm font-extrabold text-amber-800 dark:text-amber-300">tt (Pure Dwarf)</div>
            </div>
            <span className="text-xl font-extrabold text-teal-600">→</span>
            <div className="rounded-xl border-2 border-teal-400 bg-teal-50 px-4 py-2.5 dark:bg-teal-950/60">
              <TraitIllustration traitId="height" isDominant={true} size={52} />
              <div className="font-mono text-sm font-extrabold text-teal-900 dark:text-teal-200">F₁: 100% Tt (Tall)</div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3 dark:border-slate-800">
            <div className="text-center text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              F₂ Generation After Selfing (Tt × Tt) → 3 Tall : 1 Dwarf
            </div>
            <div className="grid grid-cols-4 gap-2 max-w-md mx-auto text-center">
              {[
                { geno: 'TT', dom: true, label: 'Pure Tall' },
                { geno: 'Tt', dom: true, label: 'Hybrid Tall' },
                { geno: 'Tt', dom: true, label: 'Hybrid Tall' },
                { geno: 'tt', dom: false, label: 'Pure Dwarf' },
              ].map((off, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-2 flex flex-col items-center ${
                    off.dom
                      ? 'border-teal-200 bg-teal-50/60 dark:border-teal-900 dark:bg-teal-950/30'
                      : 'border-amber-300 bg-amber-50/70 dark:border-amber-800 dark:bg-amber-950/30'
                  }`}
                >
                  <TraitIllustration traitId="height" isDominant={off.dom} size={42} />
                  <div className="font-mono text-xs font-extrabold mt-1 text-slate-900 dark:text-white">
                    {off.geno}
                  </div>
                  <div className="text-[10px] text-slate-600 dark:text-slate-400">{off.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'dihybrid-visual':
      return (
        <div className="rounded-xl border border-violet-200 bg-white p-4 space-y-4 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <div className="flex flex-col items-center rounded-xl bg-amber-50/70 px-3 py-2 dark:bg-amber-950/30">
              <DihybridSeedSvg isRound={true} isYellow={true} size={44} />
              <span className="font-mono text-xs font-extrabold mt-1">RRYY (Round Yellow)</span>
            </div>
            <span className="text-lg font-extrabold text-slate-400">×</span>
            <div className="flex flex-col items-center rounded-xl bg-emerald-50/70 px-3 py-2 dark:bg-emerald-950/30">
              <DihybridSeedSvg isRound={false} isYellow={false} size={44} />
              <span className="font-mono text-xs font-extrabold mt-1">rryy (Wrinkled Green)</span>
            </div>
            <span className="text-lg font-extrabold text-violet-600">→</span>
            <div className="flex flex-col items-center rounded-xl border-2 border-violet-300 bg-violet-50 px-3 py-2 dark:bg-violet-950/40">
              <DihybridSeedSvg isRound={true} isYellow={true} size={44} />
              <span className="font-mono text-xs font-extrabold mt-1">F₁: RrYy (Round Yellow)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
            {[
              { count: '9 / 16', name: 'Round & Yellow', round: true, yellow: true, isNew: false },
              { count: '3 / 16', name: 'Round & Green', round: true, yellow: false, isNew: true },
              { count: '3 / 16', name: 'Wrinkled & Yellow', round: false, yellow: true, isNew: true },
              { count: '1 / 16', name: 'Wrinkled & Green', round: false, yellow: false, isNew: false },
            ].map((grp) => (
              <div
                key={grp.name}
                className={`rounded-xl border p-3 flex flex-col items-center ${
                  grp.isNew
                    ? 'border-sky-300 bg-sky-50/70 dark:border-sky-800 dark:bg-sky-950/40'
                    : 'border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900'
                }`}
              >
                <DihybridSeedSvg isRound={grp.round} isYellow={grp.yellow} size={40} />
                <div className="font-mono text-base font-extrabold text-slate-900 dark:text-white mt-1.5">
                  {grp.count}
                </div>
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {grp.name}
                </div>
                {grp.isNew && (
                  <span className="mt-1 rounded-full bg-sky-600 px-2 py-0.5 text-[10px] font-extrabold text-white">
                    NEW RECOMBINANT!
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      );
  }
}

function FoilArcsDiagram() {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex justify-end mb-1">
        <button
          type="button"
          onClick={() => setReplayKey((k) => k + 1)}
          className="no-print inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1 text-[11px] font-bold text-slate-600 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <RotateCcw className="h-3 w-3" /> Replay FOIL Arcs
        </button>
      </div>
      <svg
        key={replayKey}
        viewBox="0 0 420 175"
        className="w-full max-w-md mx-auto"
        aria-label="FOIL method arcs for RrYy gametes"
      >
        <rect x="95" y="62" width="44" height="44" rx="10" fill="#ccfbf1" stroke="#0f766e" strokeWidth="2.5" />
        <text x="117" y="92" textAnchor="middle" fontSize="24" fontWeight="800" fill="#0f766e" fontFamily="monospace">R</text>

        <rect x="148" y="62" width="44" height="44" rx="10" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
        <text x="170" y="92" textAnchor="middle" fontSize="24" fontWeight="800" fill="#b45309" fontFamily="monospace">r</text>

        <rect x="228" y="62" width="44" height="44" rx="10" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.5" />
        <text x="250" y="92" textAnchor="middle" fontSize="24" fontWeight="800" fill="#0369a1" fontFamily="monospace">Y</text>

        <rect x="281" y="62" width="44" height="44" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.5" />
        <text x="303" y="92" textAnchor="middle" fontSize="24" fontWeight="800" fill="#15803d" fontFamily="monospace">y</text>

        {/* Animated Top Arcs */}
        <path
          d="M117 60 Q183 18 250 60"
          fill="none"
          stroke="#0f766e"
          strokeWidth="3"
          className="animate-draw-arc"
          style={{ animationDelay: '0ms' }}
        />
        <g className="animate-pop-in" style={{ animationDelay: '220ms' }}>
          <rect x="163" y="10" width="40" height="22" rx="6" fill="#0f766e" />
          <text x="183" y="25" textAnchor="middle" fontSize="13" fontWeight="800" fill="#ffffff" fontFamily="monospace">RY</text>
        </g>

        <path
          d="M117 60 Q210 2 303 60"
          fill="none"
          stroke="#0284c7"
          strokeWidth="2.8"
          className="animate-draw-arc"
          style={{ animationDelay: '300ms' }}
        />
        <g className="animate-pop-in" style={{ animationDelay: '520ms' }}>
          <rect x="242" y="10" width="40" height="22" rx="6" fill="#0284c7" />
          <text x="262" y="25" textAnchor="middle" fontSize="13" fontWeight="800" fill="#ffffff" fontFamily="monospace">Ry</text>
        </g>

        {/* Animated Bottom Arcs */}
        <path
          d="M170 108 Q210 144 250 108"
          fill="none"
          stroke="#d97706"
          strokeWidth="3"
          className="animate-draw-arc"
          style={{ animationDelay: '600ms' }}
        />
        <g className="animate-pop-in" style={{ animationDelay: '820ms' }}>
          <rect x="163" y="139" width="40" height="22" rx="6" fill="#d97706" />
          <text x="183" y="154" textAnchor="middle" fontSize="13" fontWeight="800" fill="#ffffff" fontFamily="monospace">rY</text>
        </g>

        <path
          d="M170 108 Q236 160 303 108"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2.8"
          className="animate-draw-arc"
          style={{ animationDelay: '900ms' }}
        />
        <g className="animate-pop-in" style={{ animationDelay: '1120ms' }}>
          <rect x="242" y="139" width="40" height="22" rx="6" fill="#16a34a" />
          <text x="262" y="154" textAnchor="middle" fontSize="13" fontWeight="800" fill="#ffffff" fontFamily="monospace">ry</text>
        </g>
      </svg>
      <p className="mt-2 text-center text-xs text-slate-600 dark:text-slate-400">
        Every valid gamete connects <strong>1 Shape allele (R or r)</strong> with <strong>1 Colour allele (Y or y)</strong> — never <span className="line-through text-rose-600 font-mono font-bold">Rr</span> or <span className="line-through text-rose-600 font-mono font-bold">Yy</span>!
      </p>
    </div>
  );
}
