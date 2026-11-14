import { useState } from 'react';
import { Dices, Users } from 'lucide-react';

export function SexDeterminationLab() {
  const [girls, setGirls] = useState(0);
  const [boys, setBoys] = useState(0);
  const [lastRoll, setLastRoll] = useState<'XX' | 'XY' | null>(null);

  const simulateBirths = (count: number) => {
    let g = 0;
    let b = 0;
    let latest: 'XX' | 'XY' = 'XX';
    for (let i = 0; i < count; i++) {
      const spermIsY = Math.random() < 0.5;
      if (spermIsY) {
        b++;
        latest = 'XY';
      } else {
        g++;
        latest = 'XX';
      }
    }
    setGirls((prev) => prev + g);
    setBoys((prev) => prev + b);
    setLastRoll(latest);
  };

  const total = girls + boys;
  const girlPct = total > 0 ? Math.round((girls / total) * 100) : 50;
  const boyPct = total > 0 ? 100 - girlPct : 50;

  return (
    <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50/60 to-white p-4 sm:p-6 dark:border-sky-900/60 dark:from-slate-900 dark:to-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-sky-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-700 text-white">
            <Users className="h-4 w-4" />
          </span>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Human Sex Determination (XX × XY)
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Mother always contributes X; Father contributes X or Y with equal 50% probability
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-5 md:grid-cols-2 items-center">
        {/* 2x2 XX x XY Punnett Grid */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr>
                <th className="p-2 text-[11px] font-semibold text-slate-500 border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
                  Mother (XX) \ Father (XY)
                </th>
                <th className="p-2 font-mono text-base font-extrabold text-sky-800 border border-slate-200 bg-sky-50 dark:border-slate-700 dark:bg-sky-950/40 dark:text-sky-300">
                  X (Sperm)
                </th>
                <th className="p-2 font-mono text-base font-extrabold text-amber-800 border border-slate-200 bg-amber-50 dark:border-slate-700 dark:bg-amber-950/40 dark:text-amber-300">
                  Y (Sperm)
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2].map((rowNum) => (
                <tr key={rowNum}>
                  <th className="p-2 font-mono text-base font-extrabold text-pink-800 border border-slate-200 bg-pink-50 dark:border-slate-700 dark:bg-pink-950/40 dark:text-pink-300">
                    X (Egg)
                  </th>
                  <td className="p-3 border border-slate-200 bg-pink-50/40 dark:border-slate-700 dark:bg-pink-950/20">
                    <div className="font-mono text-lg font-extrabold text-slate-900 dark:text-white">
                      XX
                    </div>
                    <div className="text-xs font-semibold text-pink-700 dark:text-pink-300">
                      Girl (50%)
                    </div>
                  </td>
                  <td className="p-3 border border-slate-200 bg-sky-50/40 dark:border-slate-700 dark:bg-sky-950/20">
                    <div className="font-mono text-lg font-extrabold text-slate-900 dark:text-white">
                      XY
                    </div>
                    <div className="text-xs font-semibold text-sky-700 dark:text-sky-300">
                      Boy (50%)
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Simulation Controls */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 dark:border-slate-800 dark:bg-slate-950">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            50:50 Probability Simulator
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Simulate random sperm-egg fusion to see why large sample sizes converge to 1 : 1.
          </p>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => simulateBirths(1)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-sky-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-sky-800 cursor-pointer"
            >
              <Dices className="h-3.5 w-3.5" /> Simulate 1 Birth
            </button>
            <button
              type="button"
              onClick={() => simulateBirths(20)}
              className="rounded-lg border border-sky-300 bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-900 hover:bg-sky-100 cursor-pointer dark:bg-sky-950/40 dark:border-sky-800 dark:text-sky-200"
            >
              +20 Births
            </button>
            {total > 0 && (
              <button
                type="button"
                onClick={() => {
                  setGirls(0);
                  setBoys(0);
                  setLastRoll(null);
                }}
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:text-slate-300"
              >
                Reset
              </button>
            )}
          </div>

          {lastRoll && (
            <div className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-300">
              Latest fertilization: Egg (<code className="font-mono font-bold">X</code>) + Sperm (
              <code className="font-mono font-bold">{lastRoll[1]}</code>) ={' '}
              <strong className="font-mono">{lastRoll}</strong> (
              {lastRoll === 'XX' ? 'Girl' : 'Boy'})
            </div>
          )}

          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-pink-700 dark:text-pink-300">
                Girls (XX): {girls} ({total > 0 ? `${girlPct}%` : '—'})
              </span>
              <span className="text-sky-700 dark:text-sky-300">
                Boys (XY): {boys} ({total > 0 ? `${boyPct}%` : '—'})
              </span>
            </div>
            <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden flex dark:bg-slate-800">
              <div
                className="bg-pink-500 transition-all duration-300"
                style={{ width: `${girlPct}%` }}
              />
              <div
                className="bg-sky-600 transition-all duration-300"
                style={{ width: `${boyPct}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
