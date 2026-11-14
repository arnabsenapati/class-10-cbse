import { useEffect, useState } from 'react';
import { FileText, GitCompare, Play, RotateCcw, SkipForward } from 'lucide-react';
import {
  MONOHYBRID_TRAITS,
  getMonoPhenotype,
  solveMonohybridCross,
} from '../../utils/genetics';
import { TraitIllustration } from '../visuals/GeneticsSvg';

export function MonohybridSimulator() {
  const [traitIdx, setTraitIdx] = useState(0);
  const trait = MONOHYBRID_TRAITS[traitIdx];

  const domHomo = trait.dominantLetter + trait.dominantLetter;
  const het = trait.dominantLetter + trait.recessiveLetter;
  const recHomo = trait.recessiveLetter + trait.recessiveLetter;

  const [p1Mode, setP1Mode] = useState<'DD' | 'Dd' | 'dd'>('Dd');
  const [p2Mode, setP2Mode] = useState<'DD' | 'Dd' | 'dd'>('Dd');
  const [activeCell, setActiveCell] = useState<{ r: number; c: number } | null>(null);
  const [showWrittenFormat, setShowWrittenFormat] = useState(false);
  const [animStep, setAnimStep] = useState<number>(4); // 1: Parents, 2: Gametes, 3: Grid, 4: Ratios
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!isPlaying) return;
    if (animStep >= 4) {
      setIsPlaying(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setAnimStep((s) => Math.min(4, s + 1));
    }, 950);
    return () => window.clearTimeout(timer);
  }, [isPlaying, animStep]);

  const startAnimation = () => {
    setActiveCell(null);
    setAnimStep(1);
    setIsPlaying(true);
  };

  const modeToGenotype = (m: 'DD' | 'Dd' | 'dd') =>
    m === 'DD' ? domHomo : m === 'Dd' ? het : recHomo;

  const p1 = modeToGenotype(p1Mode);
  const p2 = modeToGenotype(p2Mode);
  const result = solveMonohybridCross(p1, p2, trait);

  const presets: { label: string; a: 'DD' | 'Dd' | 'dd'; b: 'DD' | 'Dd' | 'dd' }[] = [
    { label: `F₁ → F₂ (${het} × ${het})`, a: 'Dd', b: 'Dd' },
    { label: `P → F₁ (${domHomo} × ${recHomo})`, a: 'DD', b: 'dd' },
    { label: `Test Cross (${het} × ${recHomo})`, a: 'Dd', b: 'dd' },
    { label: `Backcross (${domHomo} × ${het})`, a: 'DD', b: 'Dd' },
  ];

  return (
    <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50/60 to-white p-4 sm:p-6 dark:border-teal-900/60 dark:from-slate-900 dark:to-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-teal-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700 text-white">
            <GitCompare className="h-4 w-4" />
          </span>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Interactive 2×2 Monohybrid Cross Simulator
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Select a trait &amp; parents, then click any grid cell to trace gametes
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={startAnimation}
            className="inline-flex items-center gap-1.5 rounded-lg bg-teal-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-teal-800 cursor-pointer"
          >
            <Play className="h-3.5 w-3.5 fill-current" /> Animate Cross
          </button>
          <button
            type="button"
            onClick={() => setShowWrittenFormat((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-teal-300 bg-white px-3 py-1.5 text-xs font-semibold text-teal-800 hover:bg-teal-50 cursor-pointer dark:bg-slate-800 dark:border-teal-700 dark:text-teal-300 dark:hover:bg-slate-700"
          >
            <FileText className="h-3.5 w-3.5" />
            {showWrittenFormat ? 'Hide CBSE Answer Format' : 'CBSE Answer Format'}
          </button>
        </div>
      </div>

      {/* Step-by-Step Progress Strip */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white/80 border border-teal-100 px-3 py-2 dark:bg-slate-950/60 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold">
          {[
            { s: 1, label: '1. Parents' },
            { s: 2, label: '2. Split Gametes' },
            { s: 3, label: '3. Fertilize Grid' },
            { s: 4, label: '4. Ratios' },
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
                  ? 'bg-teal-700 text-white'
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
              className="inline-flex items-center gap-1 rounded-md border border-teal-300 px-2 py-1 text-[11px] font-bold text-teal-800 hover:bg-teal-50 cursor-pointer dark:border-teal-700 dark:text-teal-300 dark:hover:bg-teal-950/60"
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

      {/* Trait Selector */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {MONOHYBRID_TRAITS.map((t, idx) => (
          <button
            key={t.id}
            type="button"
            onClick={() => {
              setTraitIdx(idx);
              setActiveCell(null);
            }}
            className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
              idx === traitIdx
                ? 'bg-teal-700 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:border-teal-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
            }`}
          >
            {t.character.replace(' (NCERT Standard)', '')}
          </button>
        ))}
      </div>

      {/* Quick Presets */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1">
          Presets:
        </span>
        {presets.map((pr) => {
          const active = p1Mode === pr.a && p2Mode === pr.b;
          return (
            <button
              key={pr.label}
              type="button"
              onClick={() => {
                setP1Mode(pr.a);
                setP2Mode(pr.b);
                setActiveCell(null);
              }}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition cursor-pointer ${
                active
                  ? 'bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {pr.label}
            </button>
          );
        })}
      </div>

      {/* Parent Selectors + Grid + Results */}
      <div className="mt-5 grid gap-6 lg:grid-cols-12 items-start">
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: 'Parent 1 (Rows)', mode: p1Mode, setMode: setP1Mode },
              { title: 'Parent 2 (Columns)', mode: p2Mode, setMode: setP2Mode },
            ].map((parent) => {
              const pGeno = modeToGenotype(parent.mode);
              const pDom = pGeno.includes(trait.dominantLetter);
              return (
                <div
                  key={parent.title}
                  className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
                      {parent.title}
                    </div>
                    <TraitIllustration traitId={trait.id} isDominant={pDom} size={28} />
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['DD', 'Dd', 'dd'] as const).map((m) => {
                      const g = modeToGenotype(m);
                      return (
                        <button
                          key={m}
                          type="button"
                          onClick={() => {
                            parent.setMode(m);
                            setActiveCell(null);
                          }}
                          className={`rounded-lg py-1.5 font-mono text-xs font-bold transition cursor-pointer ${
                            parent.mode === m
                              ? 'bg-teal-700 text-white'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                          }`}
                        >
                          {g}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-1.5 text-xs font-medium text-slate-600 dark:text-slate-400">
                    Phenotype: <strong>{getMonoPhenotype(pGeno, trait)}</strong>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 2x2 Punnett Grid */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
            <table className="w-full border-collapse text-center">
              <thead>
                <tr>
                  <th className="p-2 text-[11px] font-semibold text-slate-500 border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
                    P1 \ P2
                  </th>
                  {result.gametes2.map((g, ci) => {
                    const highlighted = activeCell?.c === ci;
                    return (
                      <th
                        key={ci}
                        className={`p-2 font-mono text-base font-extrabold border border-slate-200 transition dark:border-slate-700 ${
                          highlighted
                            ? 'bg-amber-200 text-amber-950 dark:bg-amber-800 dark:text-white'
                            : 'bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
                        }`}
                      >
                        {animStep >= 2 ? (
                          <span
                            key={`c-${animStep}-${ci}-${g}`}
                            className="inline-block animate-slide-down"
                            style={{ animationDelay: `${ci * 140}ms` }}
                          >
                            ({g})
                          </span>
                        ) : (
                          '?'
                        )}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {result.cells.map((row, r) => (
                  <tr key={r}>
                    <th
                      className={`p-2 font-mono text-base font-extrabold border border-slate-200 transition dark:border-slate-700 ${
                        activeCell?.r === r
                          ? 'bg-sky-200 text-sky-950 dark:bg-sky-800 dark:text-white'
                          : 'bg-sky-50 text-sky-800 dark:bg-sky-950/40 dark:text-sky-300'
                      }`}
                    >
                      {animStep >= 2 ? (
                        <span
                          key={`r-${animStep}-${r}-${result.gametes1[r]}`}
                          className="inline-block animate-slide-right"
                          style={{ animationDelay: `${r * 140}ms` }}
                        >
                          ({result.gametes1[r]})
                        </span>
                      ) : (
                        '?'
                      )}
                    </th>
                    {row.map((cell, c) => {
                      const isSelected = activeCell?.r === r && activeCell?.c === c;
                      const cellOrder = r * 2 + c;
                      return (
                        <td
                          key={c}
                          onClick={() => animStep >= 3 && setActiveCell(isSelected ? null : { r, c })}
                          className={`p-3 border border-slate-200 cursor-pointer transition dark:border-slate-700 ${
                            animStep < 3
                              ? 'bg-slate-50/70 dark:bg-slate-900'
                              : isSelected
                              ? 'ring-2 ring-inset ring-teal-600 bg-teal-50 dark:bg-teal-950/70'
                              : cell.isDominant
                              ? 'bg-emerald-50/50 hover:bg-emerald-50 dark:bg-emerald-950/20 dark:hover:bg-emerald-950/40'
                              : 'bg-amber-50/50 hover:bg-amber-50 dark:bg-amber-950/20 dark:hover:bg-amber-950/40'
                          }`}
                        >
                          {animStep >= 3 ? (
                            <div
                              key={`cell-${animStep}-${r}-${c}-${cell.genotype}`}
                              className="flex flex-col items-center animate-pop-in"
                              style={{ animationDelay: `${cellOrder * 160}ms` }}
                            >
                              <TraitIllustration
                                traitId={trait.id}
                                isDominant={cell.isDominant}
                                size={36}
                              />
                              <div className="font-mono text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
                                {cell.genotype}
                              </div>
                              <div
                                className={`text-xs font-semibold ${
                                  cell.isDominant
                                    ? 'text-teal-700 dark:text-teal-400'
                                    : 'text-amber-700 dark:text-amber-400'
                                }`}
                              >
                                {cell.phenotype}
                              </div>
                            </div>
                          ) : (
                            <div className="py-5 font-mono text-base font-bold text-slate-300 dark:text-slate-700">
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

            {activeCell && (
              <p className="mt-2.5 text-center text-xs text-slate-600 dark:text-slate-400">
                Gamete <code className="font-mono font-bold">({result.gametes1[activeCell.r]})</code> from Parent 1 +{' '}
                <code className="font-mono font-bold">({result.gametes2[activeCell.c]})</code> from Parent 2 →{' '}
                <strong className="font-mono">{result.cells[activeCell.r][activeCell.c].genotype}</strong> (
                {result.cells[activeCell.r][activeCell.c].phenotype})
              </p>
            )}
          </div>
        </div>

        {/* Ratio Summary */}
        <div
          className={`lg:col-span-6 space-y-4 transition-opacity duration-300 ${
            animStep < 4 ? 'opacity-35 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Phenotypic Ratio (Visible Traits)
            </div>
            <div className="mt-1 text-base font-extrabold text-teal-800 dark:text-teal-300">
              {result.phenotypicRatioText}
            </div>
            <div className="mt-3 space-y-2.5">
              {result.phenotypeCounts.map((p) => (
                <div key={p.phenotype}>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    <span>{p.phenotype}</span>
                    <span>
                      {p.count}/4 ({p.percentage}%)
                    </span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-100 overflow-hidden dark:bg-slate-800">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        p.isDominant ? 'bg-teal-600' : 'bg-amber-500'
                      }`}
                      style={{ width: `${p.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Genotypic Ratio (DNA Letter Codes)
            </div>
            <div className="mt-1 font-mono text-sm font-extrabold text-indigo-700 dark:text-indigo-400">
              {result.genotypicRatioText}
            </div>
            <div className="mt-3 space-y-2">
              {result.genotypeCounts.map((g) => (
                <div
                  key={g.genotype}
                  className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-xs dark:bg-slate-900"
                >
                  <div>
                    <span className="font-mono font-bold text-sm text-slate-900 dark:text-white mr-2">
                      {g.genotype}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {g.classification}
                    </span>
                  </div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {g.count}/4 ({g.percentage}%)
                  </span>
                </div>
              ))}
            </div>
          </div>

          {showWrittenFormat && (
            <div className="rounded-xl border border-teal-300 bg-teal-50/70 p-4 text-xs text-slate-800 space-y-1.5 dark:border-teal-800 dark:bg-teal-950/40 dark:text-slate-200">
              <div className="font-bold text-teal-900 dark:text-teal-300 uppercase tracking-wide">
                CBSE Board Paper Layout
              </div>
              <div>
                <strong>Parents (P):</strong> {getMonoPhenotype(p1, trait)} (<code className="font-mono">{p1}</code>) ×{' '}
                {getMonoPhenotype(p2, trait)} (<code className="font-mono">{p2}</code>)
              </div>
              <div>
                <strong>Gametes:</strong> ({result.gametes1.join(', ')}) × ({result.gametes2.join(', ')})
              </div>
              <div>
                <strong>Offspring:</strong> {result.cells.flat().map((c) => c.genotype).join(', ')}
              </div>
              <div>
                <strong>Phenotypic Ratio:</strong> {result.phenotypicRatioText}
              </div>
              <div>
                <strong>Genotypic Ratio:</strong> {result.genotypicRatioText}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
