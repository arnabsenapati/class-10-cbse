import { useMemo, useState } from 'react';
import { Award, CheckCircle2, RotateCcw, Trophy, XCircle } from 'lucide-react';
import { ALL_QUIZ_QUESTIONS } from '../../data/registry';

interface CbseQuizArenaProps {
  bestScore?: { correct: number; total: number } | null;
  onSaveScore?: (correct: number, total: number) => void;
}

export function CbseQuizArena({ bestScore, onSaveScore }: CbseQuizArenaProps) {
  const [filterType, setFilterType] = useState<'all' | 'mcq' | 'assertion-reason' | 'case-based'>(
    'all'
  );
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = useMemo(() => {
    if (filterType === 'all') return ALL_QUIZ_QUESTIONS;
    return ALL_QUIZ_QUESTIONS.filter((q) => q.type === filterType);
  }, [filterType]);

  const answeredCount = questions.filter((q) => answers[q.id] !== undefined).length;
  const correctCount = questions.filter(
    (q) => answers[q.id] === q.correctIndex
  ).length;

  const handleSelect = (qId: string, optionIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if (filterType === 'all' && onSaveScore) {
      onSaveScore(correctCount, questions.length);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/60 to-white p-4 sm:p-6 dark:border-amber-900/60 dark:from-slate-900 dark:to-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-amber-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-600 text-white">
            <Award className="h-4 w-4" />
          </span>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              CBSE Class 10 Heredity Self-Test Arena
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              100% offline quiz with instant NCERT explanations &amp; common trap alerts
            </p>
          </div>
        </div>

        {bestScore && (
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 dark:bg-amber-950 dark:text-amber-300">
            <Trophy className="h-3.5 w-3.5" />
            Best Full-Test Score: {bestScore.correct}/{bestScore.total}
          </div>
        )}
      </div>

      {/* Filter Pills */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {[
            { key: 'all' as const, label: `All (${ALL_QUIZ_QUESTIONS.length})` },
            { key: 'mcq' as const, label: 'MCQs' },
            { key: 'assertion-reason' as const, label: 'Assertion–Reason' },
            { key: 'case-based' as const, label: 'Case-Based' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setFilterType(tab.key);
                setSubmitted(false);
              }}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition cursor-pointer ${
                filterType === tab.key
                  ? 'bg-amber-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-amber-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <span className="text-xs font-semibold text-slate-500">
          Answered: {answeredCount}/{questions.length}
        </span>
      </div>

      {/* Question Cards */}
      <div className="mt-4 space-y-4">
        {questions.map((q, idx) => {
          const picked = answers[q.id];
          const isCorrect = picked === q.correctIndex;

          return (
            <div
              key={q.id}
              className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-amber-700 dark:text-amber-400">
                  Question {idx + 1} • {q.subtopicTitle}
                </span>
                <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold uppercase text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {q.type} • {q.marks}M
                </span>
              </div>

              {q.casePassage && (
                <div className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 p-3 text-xs text-slate-700 dark:bg-amber-950/30 dark:text-slate-300">
                  <strong>Case Passage:</strong> {q.casePassage}
                </div>
              )}

              <p className="text-sm font-semibold text-slate-900 whitespace-pre-line dark:text-slate-100">
                {q.question.replace(/\*\*(.*?)\*\*/g, '$1').replace(/`([^`]*)`/g, '$1')}
              </p>

              <div className="grid gap-2">
                {q.options.map((opt, oi) => {
                  const selected = picked === oi;
                  const rightOption = oi === q.correctIndex;

                  let style =
                    'border-slate-200 bg-slate-50/70 text-slate-800 hover:border-amber-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200';
                  if (!submitted && selected) {
                    style =
                      'border-amber-600 bg-amber-50 text-amber-950 font-semibold dark:bg-amber-950/50 dark:text-amber-200';
                  } else if (submitted) {
                    if (rightOption) {
                      style =
                        'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold dark:bg-emerald-950/60 dark:text-emerald-200';
                    } else if (selected && !rightOption) {
                      style =
                        'border-rose-500 bg-rose-50 text-rose-950 dark:bg-rose-950/60 dark:text-rose-200';
                    }
                  }

                  return (
                    <button
                      key={oi}
                      type="button"
                      disabled={submitted}
                      onClick={() => handleSelect(q.id, oi)}
                      className={`w-full text-left rounded-lg border px-3 py-2 text-xs sm:text-sm transition flex items-start gap-2.5 cursor-pointer disabled:cursor-default ${style}`}
                    >
                      <span className="font-mono font-bold text-xs mt-0.5 opacity-70">
                        {String.fromCharCode(65 + oi)}.
                      </span>
                      <span>{opt.replace(/`([^`]*)`/g, '$1')}</span>
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div
                  className={`rounded-lg p-3 text-xs space-y-1 ${
                    isCorrect
                      ? 'bg-emerald-50 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200'
                      : 'bg-rose-50 text-rose-900 dark:bg-rose-950/50 dark:text-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-bold">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Correct!
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 text-rose-600" /> Correct Answer:{' '}
                        {String.fromCharCode(65 + q.correctIndex)}
                      </>
                    )}
                  </div>
                  <p>{q.explanation.replace(/`([^`]*)`/g, '$1')}</p>
                  {q.commonMistake && (
                    <p className="font-medium opacity-90">
                      <strong>Watch out:</strong> {q.commonMistake.replace(/`([^`]*)`/g, '$1')}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit / Score Bar */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-amber-100 dark:border-slate-800">
        {submitted ? (
          <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900 dark:text-white">
            <Trophy className="h-5 w-5 text-amber-600" />
            Score: {correctCount} / {questions.length} (
            {Math.round((correctCount / Math.max(1, questions.length)) * 100)}%)
          </div>
        ) : (
          <div className="text-xs text-slate-500">
            Select your answers above and click Check Score.
          </div>
        )}

        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset Quiz
          </button>
          {!submitted && (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-lg bg-amber-600 px-4 py-2 text-xs font-bold text-white hover:bg-amber-700 cursor-pointer"
            >
              Check Score &amp; Explanations
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
