import { useState } from 'react';
import { CheckCircle2, Grid2X2, RotateCcw, Sparkles, XCircle } from 'lucide-react';

interface GameteChallenge {
  id: string;
  parentGenotype: string;
  description: string;
  candidates: string[];
  correctSet: string[];
  trapFeedback: Record<string, string>;
}

const GAMETE_CHALLENGES: GameteChallenge[] = [
  {
    id: 'rryy-het',
    parentGenotype: 'RrYy',
    description: 'F₁ Dihybrid Round-Yellow Pea Plant (Select ALL valid unique gametes)',
    candidates: ['Rr', 'Yy', 'RY', 'Ry', 'rY', 'ry', 'RR', 'yy'],
    correctSet: ['RY', 'Ry', 'rY', 'ry'],
    trapFeedback: {
      Rr: '`Rr` has two shape alleles and NO colour allele — a gamete needs one of each gene!',
      Yy: '`Yy` has two colour alleles and NO shape allele — impossible in normal gametes!',
      RR: 'A gamete never receives two copies of the same gene.',
      yy: 'A gamete never receives two copies of the same gene.',
    },
  },
  {
    id: 'rrYy-mixed',
    parentGenotype: 'rrYy',
    description: 'Wrinkled-Yellow Plant (Homozygous for shape, heterozygous for colour)',
    candidates: ['rr', 'Yy', 'rY', 'ry', 'RY', 'Ry'],
    correctSet: ['rY', 'ry'],
    trapFeedback: {
      rr: 'You must pick one shape allele (`r`) AND one colour allele (`Y` or `y`).',
      Yy: 'Missing the shape allele `r`!',
      RY: 'This parent has no dominant `R` allele (`rr`), so it cannot make `RY`.',
      Ry: 'This parent has no dominant `R` allele (`rr`), so it cannot make `Ry`.',
    },
  },
  {
    id: 'Tt-mono',
    parentGenotype: 'Tt',
    description: 'Monohybrid Tall Pea Plant (Select ALL unique gametes)',
    candidates: ['T', 't', 'Tt', 'TT', 'tt'],
    correctSet: ['T', 't'],
    trapFeedback: {
      Tt: 'Gametes are haploid (n): alleles separate during meiosis so a gamete only holds ONE letter (`T` or `t`).',
      TT: 'Body cells have 2 alleles (`TT`), gametes only carry 1 allele!',
      tt: 'Body cells have 2 alleles (`tt`), gametes only carry 1 allele!',
    },
  },
];

interface GridProblem {
  id: string;
  title: string;
  parent1Label: string;
  parent2Label: string;
  rowGametes: [string, string];
  colGametes: [string, string];
  expected: [[string, string], [string, string]];
}

const GRID_PROBLEMS: GridProblem[] = [
  {
    id: 'tt-tt',
    title: 'F₁ Selfing Monohybrid: Tt × Tt',
    parent1Label: 'Parent 1 (Tt)',
    parent2Label: 'Parent 2 (Tt)',
    rowGametes: ['T', 't'],
    colGametes: ['T', 't'],
    expected: [
      ['TT', 'Tt'],
      ['Tt', 'tt'],
    ],
  },
  {
    id: 'test-cross',
    title: 'Test Cross: Tt × tt',
    parent1Label: 'Parent 1 (Tt)',
    parent2Label: 'Parent 2 (tt)',
    rowGametes: ['T', 't'],
    colGametes: ['t', 't'],
    expected: [
      ['Tt', 'Tt'],
      ['tt', 'tt'],
    ],
  },
  {
    id: 'p-f1',
    title: 'P → F₁ Cross: VV × vv (Violet × White)',
    parent1Label: 'Violet (VV)',
    parent2Label: 'White (vv)',
    rowGametes: ['V', 'V'],
    colGametes: ['v', 'v'],
    expected: [
      ['Vv', 'Vv'],
      ['Vv', 'Vv'],
    ],
  },
];

export function PunnettTrainerLab() {
  const [mode, setMode] = useState<'gametes' | 'grid'>('gametes');

  // Gamete mode state
  const [challengeIdx, setChallengeIdx] = useState(0);
  const [selectedGametes, setSelectedGametes] = useState<string[]>([]);
  const [gameteChecked, setGameteChecked] = useState(false);

  // Grid mode state
  const [gridIdx, setGridIdx] = useState(0);
  const [inputs, setInputs] = useState<string[][]>([
    ['', ''],
    ['', ''],
  ]);
  const [gridChecked, setGridChecked] = useState(false);

  const challenge = GAMETE_CHALLENGES[challengeIdx];
  const gridProb = GRID_PROBLEMS[gridIdx];

  const toggleGameteChoice = (g: string) => {
    setGameteChecked(false);
    setSelectedGametes((prev) =>
      prev.includes(g) ? prev.filter((item) => item !== g) : [...prev, g]
    );
  };

  const wrongPicks = selectedGametes.filter((g) => !challenge.correctSet.includes(g));
  const missingPicks = challenge.correctSet.filter((g) => !selectedGametes.includes(g));
  const gameteSuccess =
    gameteChecked && wrongPicks.length === 0 && missingPicks.length === 0;

  const updateCell = (r: number, c: number, val: string) => {
    setGridChecked(false);
    setInputs((prev) =>
      prev.map((row, ri) => row.map((cell, ci) => (ri === r && ci === c ? val.trim() : cell)))
    );
  };

  const resetGrid = (nextIdx?: number) => {
    if (typeof nextIdx === 'number') setGridIdx(nextIdx);
    setInputs([
      ['', ''],
      ['', ''],
    ]);
    setGridChecked(false);
  };

  const allGridCorrect =
    gridChecked &&
    inputs.every((row, r) => row.every((val, c) => val === gridProb.expected[r][c]));

  return (
    <div className="rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50/60 to-white p-4 sm:p-6 dark:border-cyan-900/60 dark:from-slate-900 dark:to-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-cyan-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-700 text-white">
            <Grid2X2 className="h-4 w-4" />
          </span>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Interactive Punnett &amp; FOIL Practice Lab
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Practice splitting gametes accurately and filling out 2×2 crosses yourself
            </p>
          </div>
        </div>

        <div className="inline-flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
          <button
            type="button"
            onClick={() => setMode('gametes')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              mode === 'gametes'
                ? 'bg-white text-cyan-800 shadow-sm dark:bg-slate-950 dark:text-cyan-300'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            1. Gamete Splitter (FOIL)
          </button>
          <button
            type="button"
            onClick={() => setMode('grid')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              mode === 'grid'
                ? 'bg-white text-cyan-800 shadow-sm dark:bg-slate-950 dark:text-cyan-300'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            2. Fill Blank Punnett Grid
          </button>
        </div>
      </div>

      {mode === 'gametes' ? (
        <div className="mt-4 space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {GAMETE_CHALLENGES.map((ch, idx) => (
              <button
                key={ch.id}
                type="button"
                onClick={() => {
                  setChallengeIdx(idx);
                  setSelectedGametes([]);
                  setGameteChecked(false);
                }}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition cursor-pointer ${
                  idx === challengeIdx
                    ? 'bg-cyan-700 text-white'
                    : 'bg-white border border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
                }`}
              >
                Parent: <span className="font-mono">{ch.parentGenotype}</span>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
            <div className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-400">
              Parent Genotype
            </div>
            <div className="mt-1 flex flex-wrap items-baseline gap-3">
              <span className="font-mono text-2xl font-extrabold text-slate-900 dark:text-white">
                {challenge.parentGenotype}
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400">
                {challenge.description}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {challenge.candidates.map((cand) => {
                const active = selectedGametes.includes(cand);
                const isRight = challenge.correctSet.includes(cand);
                let borderStyle = active
                  ? 'border-cyan-600 bg-cyan-50 text-cyan-900 dark:bg-cyan-950 dark:text-cyan-200'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200';
                if (gameteChecked && active) {
                  borderStyle = isRight
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200'
                    : 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950 dark:text-rose-200';
                }

                return (
                  <button
                    key={cand}
                    type="button"
                    onClick={() => toggleGameteChoice(cand)}
                    className={`rounded-xl border-2 py-2.5 font-mono text-base font-bold transition cursor-pointer ${borderStyle}`}
                  >
                    {cand}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setGameteChecked(true)}
                className="rounded-lg bg-cyan-700 px-4 py-2 text-xs font-bold text-white hover:bg-cyan-800 cursor-pointer"
              >
                Check Gametes
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedGametes([]);
                  setGameteChecked(false);
                }}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Reset
              </button>
            </div>

            {gameteChecked && (
              <div className="mt-4 space-y-2">
                {gameteSuccess ? (
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-900 flex items-center gap-2 dark:bg-emerald-950/60 dark:border-emerald-800 dark:text-emerald-200">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>
                      <strong>Spot on!</strong> <code className="font-mono">{challenge.parentGenotype}</code> produces exactly{' '}
                      <code className="font-mono font-bold">{challenge.correctSet.join(', ')}</code>.
                    </span>
                  </div>
                ) : (
                  <div className="rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs text-rose-900 space-y-1.5 dark:bg-rose-950/60 dark:border-rose-800 dark:text-rose-200">
                    {wrongPicks.map((w) => (
                      <div key={w} className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 shrink-0 mt-0.5 text-rose-600" />
                        <span>
                          <strong className="font-mono">{w}:</strong>{' '}
                          {challenge.trapFeedback[w] ?? 'Not a valid gamete for this parent.'}
                        </span>
                      </div>
                    ))}
                    {missingPicks.length > 0 && (
                      <div className="flex items-start gap-2">
                        <Sparkles className="h-4 w-4 shrink-0 mt-0.5 text-amber-600" />
                        <span>
                          You missed <strong>{missingPicks.length}</strong> valid gamete(s). Remember: pick one allele from each gene pair!
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {GRID_PROBLEMS.map((gp, idx) => (
              <button
                key={gp.id}
                type="button"
                onClick={() => resetGrid(idx)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition cursor-pointer ${
                  idx === gridIdx
                    ? 'bg-cyan-700 text-white'
                    : 'bg-white border border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
                }`}
              >
                {gp.title}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 overflow-x-auto dark:border-slate-800 dark:bg-slate-950">
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
              Type the resulting offspring genotype inside each empty box (remember: <strong>capital letter first</strong>, e.g., <code className="font-mono font-bold">Tt</code>, not <code className="font-mono">tT</code>):
            </p>

            <div className="max-w-sm mx-auto">
              <table className="w-full border-collapse text-center">
                <thead>
                  <tr>
                    <th className="p-2 text-[11px] font-semibold text-slate-500 border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
                      Gametes
                    </th>
                    {gridProb.colGametes.map((cg, ci) => (
                      <th
                        key={ci}
                        className="p-2 font-mono text-base font-extrabold text-amber-700 border border-slate-200 bg-amber-50/70 dark:border-slate-700 dark:bg-amber-950/40 dark:text-amber-300"
                      >
                        {cg}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {gridProb.rowGametes.map((rg, r) => (
                    <tr key={r}>
                      <th className="p-2 font-mono text-base font-extrabold text-sky-700 border border-slate-200 bg-sky-50/70 dark:border-slate-700 dark:bg-sky-950/40 dark:text-sky-300">
                        {rg}
                      </th>
                      {gridProb.colGametes.map((_cg, c) => {
                        const val = inputs[r][c];
                        const expected = gridProb.expected[r][c];
                        const isMatch = val === expected;
                        const reversedCase =
                          !isMatch &&
                          val.length === 2 &&
                          val.toLowerCase() === expected.toLowerCase() &&
                          val.split('').sort().join('') === expected.split('').sort().join('');

                        let inputRing =
                          'border-slate-300 focus:border-cyan-600 dark:border-slate-700';
                        if (gridChecked) {
                          inputRing = isMatch
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200'
                            : 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950/60 dark:text-rose-200';
                        }

                        return (
                          <td
                            key={c}
                            className="p-2 border border-slate-200 dark:border-slate-700"
                          >
                            <input
                              type="text"
                              maxLength={2}
                              value={val}
                              onChange={(e) => updateCell(r, c, e.target.value)}
                              placeholder="?"
                              aria-label={`Row ${rg} Column ${gridProb.colGametes[c]}`}
                              className={`w-16 rounded-lg border-2 py-1.5 text-center font-mono text-base font-bold outline-none transition dark:bg-slate-900 dark:text-white ${inputRing}`}
                            />
                            {gridChecked && reversedCase && (
                              <div className="mt-1 text-[10px] font-semibold text-amber-700 dark:text-amber-400">
                                Capital first! ({expected})
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

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setGridChecked(true)}
                className="rounded-lg bg-cyan-700 px-4 py-2 text-xs font-bold text-white hover:bg-cyan-800 cursor-pointer"
              >
                Check My Grid
              </button>
              <button
                type="button"
                onClick={() => resetGrid()}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Clear
              </button>
            </div>

            {gridChecked && (
              <div
                className={`mt-4 rounded-xl p-3 text-xs flex items-center justify-center gap-2 ${
                  allGridCorrect
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-200 dark:bg-emerald-950/60 dark:border-emerald-800 dark:text-emerald-200'
                    : 'bg-amber-50 text-amber-900 border border-amber-200 dark:bg-amber-950/60 dark:border-amber-800 dark:text-amber-200'
                }`}
              >
                {allGridCorrect ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>
                      <strong>100% Perfect Punnett Square!</strong> Every gamete combined cleanly with capital letters first.
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-4 w-4 text-amber-600 shrink-0" />
                    <span>
                      Check the highlighted boxes — combine the row gamete + column gamete, putting the <strong>capital letter first</strong>!
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
