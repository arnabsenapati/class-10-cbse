import { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  Calculator,
  CheckCircle2,
  Flame,
  Pause,
  Play,
  RefreshCw,
  RotateCcw,
  ShieldAlert,
  Timer,
} from 'lucide-react';
import {
  MATH_SLIP_LABELS,
  MathSlipCategory,
  useMathNotebookProgress,
} from '../../utils/mathNotebookProgress';
import {
  CHAPTER_SUBPATTERNS,
  DrillTopicKey,
  GeneratedMathProblem,
  TOPIC_OPTIONS,
  generateMathProblem,
} from '../../utils/mathProblemGenerator';

function formatTime(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function MathEndlessDrillLab() {
  const {
    state,
    todayCount,
    dailyTarget,
    totalCleanCount,
    totalWrittenCount,
    recordEndlessResult,
  } = useMathNotebookProgress();

  const [selectedTopic, setSelectedTopic] = useState<DrillTopicKey>('mixed');
  const [selectedSub, setSelectedSub] = useState<number | 'mix'>('mix');
  const [recentSigs, setRecentSigs] = useState<string[]>([]);
  const [drill, setDrill] = useState<GeneratedMathProblem>(() =>
    generateMathProblem('mixed')
  );
  const [showSetup, setShowSetup] = useState(false);
  const [showMidway, setShowMidway] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [slipMenuOpen, setSlipMenuOpen] = useState(false);
  const [feedbackBanner, setFeedbackBanner] = useState<string | null>(null);

  const [elapsedSec, setElapsedSec] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setElapsedSec((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const loadNewSum = (
    topicOverride?: DrillTopicKey,
    subOverride?: number | 'mix'
  ) => {
    const active = topicOverride ?? selectedTopic;
    const activeSub =
      topicOverride !== undefined
        ? subOverride ?? 'mix'
        : subOverride ?? selectedSub;

    const history = [drill.signature, ...recentSigs].slice(0, 10);
    const next = generateMathProblem(active, {
      subPatternIndex:
        active !== 'mixed' && typeof activeSub === 'number'
          ? activeSub
          : undefined,
      recentSignatures: history,
      lastSubPattern:
        active === 'mixed' || activeSub === 'mix'
          ? drill.subPatternIndex
          : undefined,
      lastChapter: active === 'mixed' ? drill.chapterKey : undefined,
    });

    setRecentSigs(history);
    setDrill(next);
    setShowSetup(false);
    setShowMidway(false);
    setShowAnswer(false);
    setShowSteps(false);
    setSlipMenuOpen(false);
    setFeedbackBanner(null);
    setRunning(false);
    setElapsedSec(0);
  };

  const accuracyPct = useMemo(() => {
    if (totalWrittenCount === 0) return 100;
    return Math.round((totalCleanCount / totalWrittenCount) * 100);
  }, [totalCleanCount, totalWrittenCount]);

  const topSlip = useMemo(() => {
    const entries = (Object.keys(MATH_SLIP_LABELS) as MathSlipCategory[]).map((k) => ({
      key: k,
      count: state.slipRadar[k] || 0,
    }));
    entries.sort((a, b) => b.count - a.count);
    return entries[0];
  }, [state.slipRadar]);

  const maxRadar = Math.max(1, ...Object.values(state.slipRadar));

  return (
    <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/60 to-white p-4 sm:p-6 space-y-5 dark:border-blue-900/60 dark:from-slate-900 dark:to-slate-900">
      {/* Lab Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-blue-100 pb-4 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs">
            <Calculator className="h-5 w-5" />
          </span>
          <div>
            <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
              Endless 14-Chapter Screen-to-Notebook Generator (Standard 041)
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              42 live templates across Ch 1–14 — solve on paper first, check Setup &amp; Mid-Way Checkpoint before revealing!
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => loadNewSum()}
          className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-extrabold text-white shadow-xs hover:bg-blue-700 cursor-pointer transition"
        >
          <RefreshCw className="h-3.5 w-3.5" /> Generate New Sum
        </button>
      </div>

      {/* Notebook Progress & Silly-Mistake Radar Strip */}
      <div className="grid gap-3 lg:grid-cols-12">
        <div className="lg:col-span-5 grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
            <div className="text-[10px] font-bold uppercase text-slate-500 flex items-center gap-1">
              <Flame className="h-3 w-3 text-amber-500" /> Today Written
            </div>
            <div className="mt-1 font-mono text-lg font-extrabold text-blue-700 dark:text-blue-400">
              {todayCount}/{dailyTarget}
            </div>
            <div className="text-[10px] text-slate-500">
              {dailyTarget === 20 ? 'Pre-SST Warm Target' : 'Full-Sprint Target'}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
            <div className="text-[10px] font-bold uppercase text-slate-500">
              Total Handwritten
            </div>
            <div className="mt-1 font-mono text-lg font-extrabold text-slate-900 dark:text-white">
              {totalWrittenCount}
            </div>
            <div className="text-[10px] text-emerald-700 dark:text-emerald-400">
              {totalCleanCount} Clean
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
            <div className="text-[10px] font-bold uppercase text-slate-500">
              Clean Accuracy
            </div>
            <div className="mt-1 font-mono text-lg font-extrabold text-emerald-700 dark:text-emerald-400">
              {accuracyPct}%
            </div>
            <div className="text-[10px] text-slate-500">First-Try Paper</div>
          </div>
        </div>

        {/* 5-Bar Silly Mistake Radar */}
        <div className="lg:col-span-7 rounded-xl border border-amber-200 bg-amber-50/50 p-3 space-y-2 dark:border-amber-900/50 dark:bg-amber-950/20">
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
            <span className="font-extrabold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1">
              <ShieldAlert className="h-3.5 w-3.5" /> Personal Silly-Mistake Radar
            </span>
            <span className="font-bold text-rose-700 dark:text-rose-300">
              {topSlip.count > 0
                ? `#1 Slip to Watch: ${MATH_SLIP_LABELS[topSlip.key].full} (${topSlip.count})`
                : 'No slips logged yet — keep writing cleanly!'}
            </span>
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {(Object.keys(MATH_SLIP_LABELS) as MathSlipCategory[]).map((cat) => {
              const count = state.slipRadar[cat] || 0;
              const pct = Math.round((count / maxRadar) * 100);
              return (
                <div
                  key={cat}
                  className="rounded-lg bg-white border border-amber-200/80 px-2 py-1.5 dark:bg-slate-900 dark:border-slate-800"
                >
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-600 dark:text-slate-300">
                    <span className="truncate">{MATH_SLIP_LABELS[cat].short}</span>
                    <span className="font-mono text-amber-700 dark:text-amber-400">{count}</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-amber-500 transition-all"
                      style={{ width: `${count === 0 ? 0 : Math.max(12, pct)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category Filter Pills (All 14 Chapters + Mixed) */}
      <div className="space-y-2">
        <div className="flex flex-wrap gap-1.5">
          {TOPIC_OPTIONS.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => {
                setSelectedTopic(t.key);
                setSelectedSub('mix');
                loadNewSum(t.key, 'mix');
              }}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
                selectedTopic === t.key
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-blue-400 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
            >
              {t.shortLabel}
            </button>
          ))}
        </div>

        {/* Per-chapter sub-pattern filter pills when a specific chapter is active */}
        {selectedTopic !== 'mixed' && (
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => {
                setSelectedSub('mix');
                loadNewSum(selectedTopic, 'mix');
              }}
              className={`rounded-md px-2 py-0.5 text-[11px] font-bold transition cursor-pointer ${
                selectedSub === 'mix'
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
            >
              All 3 Patterns
            </button>
            {CHAPTER_SUBPATTERNS[selectedTopic].map((subLabel, idx) => (
              <button
                key={subLabel}
                type="button"
                onClick={() => {
                  setSelectedSub(idx);
                  loadNewSum(selectedTopic, idx);
                }}
                className={`rounded-md px-2 py-0.5 text-[11px] font-bold transition cursor-pointer ${
                  selectedSub === idx
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                }`}
              >
                {subLabel}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Active Problem Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 space-y-4 shadow-xs dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-lg bg-blue-600 px-2.5 py-0.5 text-xs font-extrabold text-white">
              {drill.topicLabel}
            </span>
            <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-[11px] font-bold text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
              {drill.marks} Marks
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              <Timer className="h-3 w-3" /> Target: {drill.targetMinutes} min
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-2 py-1 dark:border-slate-700 dark:bg-slate-900">
            <span
              className={`font-mono text-xs font-extrabold px-1 ${
                elapsedSec > drill.targetMinutes * 60
                  ? 'text-amber-600 dark:text-amber-400'
                  : 'text-slate-700 dark:text-slate-200'
              }`}
            >
              {formatTime(elapsedSec)}
            </span>
            <button
              type="button"
              onClick={() => setRunning((r) => !r)}
              aria-label={running ? 'Pause timer' : 'Start timer'}
              className="rounded-md bg-white border border-slate-200 p-1 text-slate-700 hover:bg-slate-100 cursor-pointer dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
            >
              {running ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
            </button>
            <button
              type="button"
              onClick={() => {
                setRunning(false);
                setElapsedSec(0);
              }}
              aria-label="Reset timer"
              className="rounded-md bg-white border border-slate-200 p-1 text-slate-500 hover:bg-slate-100 cursor-pointer dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
            >
              <RotateCcw className="h-3 w-3" />
            </button>
          </div>
        </div>

        <div className="text-[15px] sm:text-base font-semibold leading-7 text-slate-900 whitespace-pre-line dark:text-slate-100">
          {drill.prompt}
        </div>

        {drill.table && (
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-center border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                  {drill.table.headers.map((h) => (
                    <th key={h} className="px-3 py-2 font-extrabold text-slate-800 dark:text-slate-200">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {drill.table.rows.map((row, idx) => (
                  <tr key={idx}>
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className="px-3 py-2 font-mono font-bold text-slate-700 dark:text-slate-300"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="rounded-xl border border-sky-200 bg-sky-50/70 px-3 py-2 text-xs text-sky-950 dark:border-sky-900 dark:bg-sky-950/30 dark:text-sky-200">
          <strong>Pre-Flight Copy Check:</strong> {drill.copyCheck}
        </div>

        {/* 4 Separate Progressive Anti-Spoiler Reveal Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setShowSetup((v) => !v)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-bold cursor-pointer transition ${
              showSetup
                ? 'border-blue-500 bg-blue-50 text-blue-900 hover:bg-blue-100 dark:bg-blue-950/60 dark:text-blue-200 dark:hover:bg-blue-950/80 dark:hover:text-white'
                : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white'
            }`}
          >
            {showSetup ? 'Hide Setup' : '1. Setup / Formula'}
          </button>

          <button
            type="button"
            onClick={() => setShowMidway((v) => !v)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-bold cursor-pointer transition ${
              showMidway
                ? 'border-amber-500 bg-amber-50 text-amber-900 hover:bg-amber-100 dark:bg-amber-950/60 dark:text-amber-200 dark:hover:bg-amber-900/70 dark:hover:text-amber-100'
                : 'border-amber-200 bg-amber-50/50 text-amber-900 hover:bg-amber-100 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300 dark:hover:bg-amber-900/50 dark:hover:text-amber-100'
            }`}
          >
            {showMidway ? 'Hide Mid-Way Check' : '2. Mid-Way Check'}
          </button>

          <button
            type="button"
            onClick={() => setShowAnswer((v) => !v)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-bold cursor-pointer transition ${
              showAnswer
                ? 'border-emerald-500 bg-emerald-50 text-emerald-900 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-200 dark:hover:bg-emerald-950/80 dark:hover:text-white'
                : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white'
            }`}
          >
            {showAnswer ? 'Hide Final Answer' : '3. Final Answer'}
          </button>

          <button
            type="button"
            onClick={() => setShowSteps((v) => !v)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-bold cursor-pointer transition ${
              showSteps
                ? 'border-teal-600 bg-teal-600 text-white hover:bg-teal-700'
                : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white'
            }`}
          >
            {showSteps ? 'Hide CBSE Steps' : '4. Full CBSE Steps'}
          </button>
        </div>

        {showSetup && (
          <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3 text-xs sm:text-sm text-blue-950 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-200">
            <strong>Stage 1 — Setup:</strong> {drill.setupNudge}
          </div>
        )}

        {showMidway && (
          <div className="rounded-xl border border-amber-300 bg-amber-50/80 p-3 text-xs sm:text-sm text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
            <strong>Stage 2 — Mid-Way Silly-Mistake Check:</strong> {drill.midwayCheck}
          </div>
        )}

        {showAnswer && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3 text-xs sm:text-sm font-semibold text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200">
            <strong className="block text-[11px] uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-0.5">
              Stage 3 — Final Answer Only:
            </strong>
            {drill.finalAnswer}
          </div>
        )}

        {showSteps && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3.5 text-xs sm:text-sm space-y-2.5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Stage 4 — Full CBSE Standard (041) Step-Marked Solution
            </div>
            <div className="whitespace-pre-line leading-relaxed text-slate-800 dark:text-slate-200">
              {drill.fullSteps}
            </div>
            <div className="rounded-lg border border-rose-200 bg-rose-50/80 px-3 py-2 text-xs text-rose-900 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-200">
              <strong>Silly Slip Alert:</strong> {drill.sillyTrap}
            </div>
          </div>
        )}

        {feedbackBanner && (
          <div className="rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-900 flex flex-wrap items-center justify-between gap-2 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200">
            <span>{feedbackBanner}</span>
            <button
              type="button"
              onClick={() => loadNewSum()}
              className="rounded-lg bg-emerald-700 px-2.5 py-1 text-white hover:bg-emerald-800 cursor-pointer"
            >
              Load Next Sum →
            </button>
          </div>
        )}

        {/* Log Outcome Footer */}
        <div className="border-t border-slate-100 pt-3 flex flex-wrap items-center gap-2 dark:border-slate-800">
          <button
            type="button"
            onClick={() => {
              recordEndlessResult('clean');
              setRunning(false);
              setSlipMenuOpen(false);
              setFeedbackBanner(
                'Logged +1 Clean Handwritten Sum to today’s count! Review steps or generate the next sum.'
              );
            }}
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-extrabold text-white hover:bg-emerald-700 cursor-pointer"
          >
            <CheckCircle2 className="h-3.5 w-3.5" /> Clean in Notebook (+1)
          </button>

          <button
            type="button"
            onClick={() => setSlipMenuOpen((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-extrabold text-amber-900 hover:bg-amber-100 cursor-pointer dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300 dark:hover:bg-amber-900/60 dark:hover:text-amber-100"
          >
            <AlertTriangle className="h-3.5 w-3.5" /> Logged a Silly Slip
          </button>
        </div>

        {slipMenuOpen && (
          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3 space-y-2 dark:border-amber-900 dark:bg-amber-950/30">
            <div className="text-[11px] font-extrabold text-amber-900 dark:text-amber-300">
              Select what slipped (added to your Silly-Mistake Radar):
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(Object.keys(MATH_SLIP_LABELS) as MathSlipCategory[]).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    recordEndlessResult('slip', cat);
                    setRunning(false);
                    setSlipMenuOpen(false);
                    setFeedbackBanner(
                      `Logged "${MATH_SLIP_LABELS[cat].short}" slip — Shield Rule: ${MATH_SLIP_LABELS[cat].shield}`
                    );
                  }}
                  className="rounded-lg bg-white border border-amber-300 px-2.5 py-1 text-xs font-bold text-amber-900 hover:bg-amber-100 cursor-pointer dark:bg-slate-900 dark:border-amber-800 dark:text-amber-200 dark:hover:bg-amber-900/50 dark:hover:text-amber-100"
                >
                  {MATH_SLIP_LABELS[cat].short}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
