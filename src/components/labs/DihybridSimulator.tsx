import { useEffect, useState } from 'react';
import { Calculator, Grid3X3, Play, RotateCcw, SkipForward } from 'lucide-react';
import {
  DIHYBRID_TRAIT_PAIRS,
  DihybridCategoryKey,
  solveDihybridCross,
} from '../../utils/genetics';
import { DihybridSeedSvg, TraitIllustration } from '../visuals/GeneticsSvg';

const CATEGORY_BADGES: Record<DihybridCategoryKey, string> = {
  'dom-dom':
    'bg-emerald-50 border-emerald-300 text-emerald-950 dark:bg-emerald-950/50 dark:border-emerald-800 dark:text-emerald-200',
  'dom-rec':
    'bg-sky-50 border-sky-300 text-sky-950 dark:bg-sky-950/50 dark:border-sky-800 dark:text-sky-200',
  'rec-dom':
    'bg-amber-50 border-amber-300 text-amber-950 dark:bg-amber-950/50 dark:border-amber-800 dark:text-amber-200',
  'rec-rec':
    'bg-rose-50 border-rose-300 text-rose-950 dark:bg-rose-950/50 dark:border-rose-800 dark:text-rose-200',
};

const CATEGORY_RING: Record<DihybridCategoryKey, string> = {
  'dom-dom': 'ring-emerald-600 bg-emerald-100 dark:bg-emerald-900/70',
  'dom-rec': 'ring-sky-600 bg-sky-100 dark:bg-sky-900/70',
  'rec-dom': 'ring-amber-600 bg-amber-100 dark:bg-amber-900/70',
  'rec-rec': 'ring-rose-600 bg-rose-100 dark:bg-rose-900/70',
};

export function DihybridSimulator() {
  const [pairIdx, setPairIdx] = useState(0);
  const pair = DIHYBRID_TRAIT_PAIRS[pairIdx];

  const [presetKey, setPresetKey] = useState<'f1-self' | 'p-f1' | 'test-cross' | 'mixed'>('f1-self');
  const [activeCategory, setActiveCategory] = useState<DihybridCategoryKey | null>(null);
  const [selectedCell, setSelectedCell] = useState<{ r: number; c: number } | null>(null);
  const [totalSeeds, setTotalSeeds] = useState<number>(1600);
  const [animStep, setAnimStep] = useState<number>(4);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!isPlaying) return;
    if (animStep >= 4) {
      setIsPlaying(false);
      return;
    }
    const delay = animStep === 3 ? 1300 : 950;
    const timer = window.setTimeout(() => {
      setAnimStep((s) => Math.min(4, s + 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [isPlaying, animStep]);

  const startAnimation = () => {
    setSelectedCell(null);
    setActiveCategory(null);
    setAnimStep(1);
    setIsPlaying(true);
  };

  const d1 = pair.gene1.dominantLetter;
  const r1 = pair.gene1.recessiveLetter;
  const d2 = pair.gene2.dominantLetter;
  const r2 = pair.gene2.recessiveLetter;

  const getParentsForPreset = (): [string, string] => {
    switch (presetKey) {
      case 'f1-self':
        return [`${d1}${r1}${d2}${r2}`, `${d1}${r1}${d2}${r2}`];
      case 'p-f1':
        return [`${d1}${d1}${d2}${d2}`, `${r1}${r1}${r2}${r2}`];
      case 'test-cross':
        return [`${d1}${r1}${d2}${r2}`, `${r1}${r1}${r2}${r2}`];
      case 'mixed':
        return [`${d1}${d1}${d2}${r2}`, `${r1}${r1}${d2}${r2}`];
    }
  };

  const [p1, p2] = getParentsForPreset();
  const result = solveDihybridCross(p1, p2, pair);

  const selectedCellObj = selectedCell
    ? result.cells[selectedCell.r][selectedCell.c]
    : null;
  const effectiveHighlightCategory = activeCategory ?? selectedCellObj?.category ?? null;

  return (
    <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50/60 to-white p-4 sm:p-6 dark:border-violet-900/60 dark:from-slate-900 dark:to-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-violet-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-700 text-white">
            <Grid3X3 className="h-4 w-4" />
          </span>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Interactive 16-Box Dihybrid Punnett Explorer
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Click any seed box or phenotype group to highlight matching offspring across all 16 combinations
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={startAnimation}
          className="inline-flex items-center gap-1.5 rounded-lg bg-violet-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-violet-800 cursor-pointer"
        >
          <Play className="h-3.5 w-3.5 fill-current" /> Animate 16-Box Cross
        </button>
      </div>

      {/* Step-by-Step Progress Strip */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white/80 border border-violet-100 px-3 py-2 dark:bg-slate-950/60 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold">
          {[
            { s: 1, label: '1. Parents' },
            { s: 2, label: '2. FOIL Gametes' },
            { s: 3, label: '3. Fill 16 Boxes' },
            { s: 4, label: '4. 9:3:3:1 Count' },
          ].map((item) => (
            <button
              key={item.s}
              type="button"
              onClick={() => {
                setIsPlaying(false);
                setAnimStep(item.s);
              }}
              className={`rounded-md px-2 py-1 transition cursor-pointer ${
                animStep >= item.s
                  ? 'bg-violet-700 text-white'
                  : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        {animStep < 4 && (
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => {
                setIsPlaying(false);
                setAnimStep((s) => Math.min(4, s + 1));
              }}
              className="inline-flex items-center gap-1 rounded-md border border-violet-300 px-2 py-1 text-[11px] font-bold text-violet-800 hover:bg-violet-50 cursor-pointer dark:border-violet-700 dark:text-violet-300"
            >
              <SkipForward className="h-3 w-3" /> Next
            </button>
            <button
              type="button"
              onClick={() => {
                setIsPlaying(false);
                setAnimStep(4);
              }}
              className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-600 cursor-pointer dark:border-slate-700 dark:text-slate-300"
            >
              <RotateCcw className="h-3 w-3" /> Show All
            </button>
          </div>
        )}
      </div>

      {/* Trait Pair & Cross Presets */}
      <div className="mt-4 flex flex-wrap gap-2">
        {DIHYBRID_TRAIT_PAIRS.map((tp, idx) => (
          <button
            key={tp.id}
            type="button"
            onClick={() => {
              setPairIdx(idx);
              setSelectedCell(null);
              setActiveCategory(null);
            }}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition cursor-pointer ${
              idx === pairIdx
                ? 'bg-violet-700 text-white'
                : 'bg-white border border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
            }`}
          >
            {tp.title}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1">
          Cross:
        </span>
        {[
          { key: 'f1-self' as const, label: `F₁ Selfing (${d1}${r1}${d2}${r2} × ${d1}${r1}${d2}${r2})` },
          { key: 'p-f1' as const, label: `P → F₁ (${d1}${d1}${d2}${d2} × ${r1}${r1}${r2}${r2})` },
          { key: 'test-cross' as const, label: `Dihybrid Test Cross (${d1}${r1}${d2}${r2} × ${r1}${r1}${r2}${r2})` },
          { key: 'mixed' as const, label: `Mixed (${d1}${d1}${d2}${r2} × ${r1}${r1}${d2}${r2})` },
        ].map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => {
              setPresetKey(item.key);
              setSelectedCell(null);
              setActiveCategory(null);
            }}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition cursor-pointer ${
              presetKey === item.key
                ? 'bg-slate-900 text-white dark:bg-violet-500 dark:text-slate-950'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 4x4 Grid */}
      <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
        <table className="w-full min-w-[460px] border-collapse text-center">
          <thead>
            <tr>
              <th className="p-2 text-[11px] font-semibold text-slate-500 border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
                P1 ({result.parent1}) \ P2 ({result.parent2})
              </th>
              {result.gametes2.map((g, ci) => (
                <th
                  key={ci}
                  className={`p-2 font-mono text-sm font-extrabold border border-slate-200 dark:border-slate-700 ${
                    selectedCell?.c === ci
                      ? 'bg-amber-200 text-amber-950 dark:bg-amber-800 dark:text-white'
                      : 'bg-amber-50/70 text-amber-800 dark:bg-amber-950/30 dark:text-amber-300'
                  }`}
                >
                  {animStep >= 2 ? (
                    <span
                      key={`dc-${animStep}-${ci}-${g}`}
                      className="inline-block animate-slide-down"
                      style={{ animationDelay: `${ci * 100}ms` }}
                    >
                      {g}
                    </span>
                  ) : (
                    '?'
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {result.cells.map((row, r) => (
              <tr key={r}>
                <th
                  className={`p-2 font-mono text-sm font-extrabold border border-slate-200 dark:border-slate-700 ${
                    selectedCell?.r === r
                      ? 'bg-sky-200 text-sky-950 dark:bg-sky-800 dark:text-white'
                      : 'bg-sky-50/70 text-sky-800 dark:bg-sky-950/30 dark:text-sky-300'
                  }`}
                >
                  {animStep >= 2 ? (
                    <span
                      key={`dr-${animStep}-${r}-${result.gametes1[r]}`}
                      className="inline-block animate-slide-right"
                      style={{ animationDelay: `${r * 100}ms` }}
                    >
                      {result.gametes1[r]}
                    </span>
                  ) : (
                    '?'
                  )}
                </th>
                {row.map((cell, c) => {
                  const isExact = selectedCell?.r === r && selectedCell?.c === c;
                  const isCategoryHighlighted =
                    effectiveHighlightCategory === cell.category;
                  const dimmed =
                    effectiveHighlightCategory !== null && !isCategoryHighlighted;
                  const dom1 = cell.category === 'dom-dom' || cell.category === 'dom-rec';
                  const dom2 = cell.category === 'dom-dom' || cell.category === 'rec-dom';
                  const boxOrder = r * 4 + c;

                  return (
                    <td
                      key={c}
                      onClick={() => {
                        if (animStep < 3) return;
                        setActiveCategory(null);
                        setSelectedCell(isExact ? null : { r, c });
                      }}
                      className={`p-2 border border-slate-200 cursor-pointer transition dark:border-slate-700 ${
                        animStep < 3
                          ? 'bg-slate-50/60 dark:bg-slate-900'
                          : isExact
                          ? `ring-2 ring-inset ${CATEGORY_RING[cell.category]}`
                          : isCategoryHighlighted
                          ? CATEGORY_RING[cell.category]
                          : CATEGORY_BADGES[cell.category]
                      } ${dimmed ? 'opacity-30' : 'opacity-100'}`}
                    >
                      {animStep >= 3 ? (
                        <div
                          key={`dcell-${animStep}-${r}-${c}-${cell.genotype}`}
                          className="flex flex-col items-center animate-pop-in"
                          style={{ animationDelay: `${boxOrder * 45}ms` }}
                        >
                          {pair.id === 'seed-shape-color' ? (
                            <DihybridSeedSvg isRound={dom1} isYellow={dom2} size={26} />
                          ) : (
                            <div className="flex items-center gap-0.5">
                              <TraitIllustration traitId={pair.gene1.id} isDominant={dom1} size={22} />
                              <TraitIllustration traitId={pair.gene2.id} isDominant={dom2} size={22} />
                            </div>
                          )}
                          <div className="font-mono text-xs sm:text-sm font-extrabold mt-0.5">
                            {cell.genotype}
                          </div>
                          <div className="text-[10px] font-medium leading-tight">
                            {cell.phenotype}
                          </div>
                        </div>
                      ) : (
                        <div className="py-4 font-mono text-sm font-bold text-slate-300 dark:text-slate-700">
                          ?
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedCellObj && (
        <div className="mt-3 rounded-xl border border-violet-200 bg-violet-50/70 px-3.5 py-2.5 text-xs text-violet-950 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-200">
          Selected box: Gamete <code className="font-mono font-bold">{selectedCellObj.gameteRow}</code> +{' '}
          <code className="font-mono font-bold">{selectedCellObj.gameteCol}</code> ={' '}
          <strong className="font-mono">{selectedCellObj.genotype}</strong> →{' '}
          <strong>{selectedCellObj.phenotype}</strong>{' '}
          {selectedCellObj.isRecombinant ? '(New Recombinant Combination!)' : '(Parental Combination)'}
        </div>
      )}

      {/* Phenotype Breakdown + Interactive Filter + Seed Count Numerical Tool */}
      <div
        className={`mt-5 grid gap-4 lg:grid-cols-12 transition-opacity duration-300 ${
          animStep < 4 ? 'opacity-35 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Phenotypic Ratio (Click a group to highlight)
              </div>
              <div className="text-lg font-extrabold text-violet-800 dark:text-violet-300">
                {result.phenotypicRatioText}
              </div>
            </div>
            {effectiveHighlightCategory && (
              <button
                type="button"
                onClick={() => {
                  setActiveCategory(null);
                  setSelectedCell(null);
                }}
                className="text-xs font-semibold text-violet-700 underline cursor-pointer dark:text-violet-400"
              >
                Show All 16
              </button>
            )}
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {result.phenotypeGroups.map((grp) => {
              const selected = activeCategory === grp.category;
              return (
                <button
                  key={grp.category}
                  type="button"
                  onClick={() => {
                    setSelectedCell(null);
                    setActiveCategory(selected ? null : grp.category);
                  }}
                  className={`text-left rounded-xl border p-3 transition cursor-pointer ${
                    CATEGORY_BADGES[grp.category]
                  } ${selected ? 'ring-2 ring-violet-600' : 'hover:shadow-sm'}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-xs">{grp.label}</span>
                    <span className="font-mono font-extrabold text-sm">
                      {grp.count}/16
                    </span>
                  </div>
                  <div className="mt-1 text-[11px] opacity-85">
                    {grp.isRecombinant ? 'New Recombinant' : 'Parental Type'} • {grp.percentage}%
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {grp.genotypes.map((g) => (
                      <span
                        key={g.genotype}
                        className="rounded bg-white/80 px-1.5 py-0.5 font-mono text-[10px] font-bold text-slate-800 dark:bg-slate-900/70 dark:text-slate-200"
                      >
                        {g.count} {g.genotype}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Seed Count Numerical Calculator */}
        <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <Calculator className="h-4 w-4 text-violet-600" />
            CBSE Seed-Count Numerical Predictor
          </div>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            Enter total <span className="font-mono">F₂</span> seeds harvested to compute expected counts:
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <input
              type="number"
              min={16}
              max={100000}
              step={16}
              value={totalSeeds}
              onChange={(e) => setTotalSeeds(Math.max(1, Number(e.target.value) || 16))}
              aria-label="Total F2 seeds"
              className="w-28 rounded-lg border border-slate-300 px-3 py-1.5 font-mono text-sm font-bold text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
            {[160, 320, 800, 1600].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setTotalSeeds(val)}
                className={`rounded-md px-2 py-1 text-xs font-mono font-semibold cursor-pointer ${
                  totalSeeds === val
                    ? 'bg-violet-700 text-white'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {val}
              </button>
            ))}
          </div>

          <div className="mt-3 space-y-2">
            {result.phenotypeGroups.map((grp) => {
              const expected = Math.round(((grp.count / 16) * totalSeeds) * 10) / 10;
              return (
                <div
                  key={grp.category}
                  className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-xs dark:bg-slate-900"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {grp.label} ({grp.count}/16)
                  </span>
                  <span className="font-mono font-extrabold text-violet-700 dark:text-violet-400">
                    ≈ {expected} seeds
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
