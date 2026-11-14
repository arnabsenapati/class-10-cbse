import { useState } from 'react';
import { CheckCircle2, HelpCircle, Sprout, XCircle } from 'lucide-react';

interface PeaTraitItem {
  character: string;
  dominant: string;
  recessive: string;
  symbol: string;
  note: string;
}

const SEVEN_TRAITS: PeaTraitItem[] = [
  {
    character: 'Stem Height',
    dominant: 'Tall',
    recessive: 'Dwarf',
    symbol: 'T / t',
    note: 'Used in NCERT’s main Monohybrid Cross (TT × tt).',
  },
  {
    character: 'Seed Shape',
    dominant: 'Round',
    recessive: 'Wrinkled',
    symbol: 'R / r',
    note: 'Used in NCERT’s Dihybrid Cross (RRYY × rryy).',
  },
  {
    character: 'Seed Colour',
    dominant: 'Yellow',
    recessive: 'Green',
    symbol: 'Y / y',
    note: 'Note: Yellow is dominant in SEEDS (unlike pods!).',
  },
  {
    character: 'Flower Colour',
    dominant: 'Violet (Purple)',
    recessive: 'White',
    symbol: 'V / v',
    note: 'Frequently tested in CBSE 3-mark monohybrid word problems.',
  },
  {
    character: 'Pod Shape',
    dominant: 'Inflated (Full)',
    recessive: 'Constricted',
    symbol: 'I / i',
    note: 'Full smooth pod dominates over pinched constricted pod.',
  },
  {
    character: 'Pod Colour',
    dominant: 'Green',
    recessive: 'Yellow',
    symbol: 'G / g',
    note: 'Trap alert: Green is dominant for PODS; Yellow is dominant for SEEDS!',
  },
  {
    character: 'Flower Position',
    dominant: 'Axial',
    recessive: 'Terminal',
    symbol: 'A / a',
    note: 'Flowers along the side of stem (Axial) dominate top-only (Terminal).',
  },
];

export function PeaTraitsExplorer() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [quizMode, setQuizMode] = useState(false);
  const [quizIdx, setQuizIdx] = useState(0);
  const [picked, setPicked] = useState<'dominant' | 'recessive' | null>(null);

  const trait = SEVEN_TRAITS[selectedIdx];
  const quizTrait = SEVEN_TRAITS[quizIdx];
  // Ask whether the first or second displayed option is dominant
  const targetIsDominant = quizIdx % 2 === 0;
  const shownLabel = targetIsDominant ? quizTrait.dominant : quizTrait.recessive;
  const isCorrect =
    picked !== null &&
    ((targetIsDominant && picked === 'dominant') ||
      (!targetIsDominant && picked === 'recessive'));

  return (
    <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/60 to-white p-4 sm:p-6 dark:border-emerald-900/60 dark:from-slate-900 dark:to-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-emerald-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <Sprout className="h-4 w-4" />
          </span>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Pisum sativum — 7 Contrasting Traits Explorer
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Explore all 7 pairs or switch to Memory Check mode
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setQuizMode((m) => !m);
            setPicked(null);
          }}
          className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-300 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-50 cursor-pointer dark:bg-slate-800 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-slate-700"
        >
          <HelpCircle className="h-3.5 w-3.5" />
          {quizMode ? 'Back to Explorer' : 'Quick Memory Check'}
        </button>
      </div>

      {!quizMode ? (
        <div className="mt-4 space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {SEVEN_TRAITS.map((t, i) => (
              <button
                key={t.character}
                type="button"
                onClick={() => setSelectedIdx(i)}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                  i === selectedIdx
                    ? 'bg-emerald-700 text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
                }`}
              >
                {i + 1}. {t.character}
              </button>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-white p-4 dark:border-emerald-900 dark:bg-slate-950">
              <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                Dominant ({trait.symbol.split('/')[0].trim()})
              </span>
              <div className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                {trait.dominant}
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Appears in 100% of F₁ generation and 3/4 of F₂.
              </p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-white p-4 dark:border-amber-900 dark:bg-slate-950">
              <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                Recessive ({trait.symbol.split('/')[1].trim()})
              </span>
              <div className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                {trait.recessive}
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Hidden in F₁; reappears in 1/4 of F₂ (homozygous only).
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 bg-emerald-50/80 dark:bg-slate-800/70 rounded-lg px-3 py-2">
            <strong>CBSE Note:</strong> {trait.note}
          </p>
        </div>
      ) : (
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 space-y-4 dark:border-slate-800 dark:bg-slate-950">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Trait {quizIdx + 1} of {SEVEN_TRAITS.length}
          </div>
          <div className="text-base font-bold text-slate-900 dark:text-white">
            In garden pea <span className="text-emerald-700 dark:text-emerald-400">{quizTrait.character}</span>, is{' '}
            <span className="underline decoration-emerald-500">{shownLabel}</span> dominant or recessive?
          </div>

          <div className="flex gap-3">
            {(['dominant', 'recessive'] as const).map((choice) => (
              <button
                key={choice}
                type="button"
                onClick={() => setPicked(choice)}
                className={`flex-1 rounded-xl border py-2.5 text-sm font-bold capitalize transition cursor-pointer ${
                  picked === choice
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {choice}
              </button>
            ))}
          </div>

          {picked && (
            <div
              className={`rounded-lg p-3 text-xs flex items-start gap-2 ${
                isCorrect
                  ? 'bg-emerald-50 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200'
                  : 'bg-rose-50 text-rose-900 dark:bg-rose-950/60 dark:text-rose-200'
              }`}
            >
              {isCorrect ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
              ) : (
                <XCircle className="h-4 w-4 shrink-0 mt-0.5 text-rose-600" />
              )}
              <div>
                <strong>{isCorrect ? 'Correct!' : 'Watch out!'}</strong> For {quizTrait.character},{' '}
                <strong>{quizTrait.dominant}</strong> is Dominant and{' '}
                <strong>{quizTrait.recessive}</strong> is Recessive. ({quizTrait.note})
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => {
                setQuizIdx((i) => (i + 1) % SEVEN_TRAITS.length);
                setPicked(null);
              }}
              className="rounded-lg bg-emerald-700 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-emerald-800 cursor-pointer"
            >
              Next Trait →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
