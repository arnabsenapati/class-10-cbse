import { useMemo, useState } from 'react';
import { Award, CheckCircle2, RotateCcw, Trophy, XCircle } from 'lucide-react';
import { ALL_QUIZ_QUESTIONS } from '../../data/registry';

interface CbseQuizArenaProps {
  subjectSlug?: 'physics' | 'chemistry' | 'biology' | 'hindi' | 'english' | 'social-science' | 'mathematics';
  bestScore?: { correct: number; total: number } | null;
  onSaveScore?: (correct: number, total: number, subjectSlug?: string) => void;
}

const TOPIC_ORDERS: Record<string, readonly string[]> = {
  physics: [
    'phy-light-reflection-refraction',
    'phy-human-eye-colourful-world',
    'phy-electricity',
    'phy-magnetic-effects',
    'phy-board-mastery',
  ],
  chemistry: [
    'chem-reactions-and-equations',
    'chem-acids-bases-salts',
    'chem-metals-and-non-metals',
    'chem-carbon-and-compounds',
    'chem-board-mastery',
  ],
  biology: [
    'bio-life-processes-nutrition-respiration',
    'bio-life-processes-transport-excretion',
    'bio-control-and-coordination',
    'bio-reproduction',
    'basics-and-alleles',
    'mendel-and-punnett-square',
    'monohybrid-cross',
    'dihybrid-cross',
    'cbse-exam-mastery',
    'bio-our-environment',
  ],
  mathematics: [
    'math-number-systems',
    'math-algebra',
    'math-coordinate-geometry',
    'math-geometry',
    'math-trigonometry',
    'math-mensuration',
    'math-statistics-probability',
    'math-board-mastery',
  ],
  english: [
    'first-flight-prose',
    'first-flight-poetry',
    'footprints-without-feet',
    'english-reading-grammar',
    'english-writing-skills',
  ],
  'social-science': [
    'sst-history',
    'sst-civics',
    'sst-economics',
    'sst-geography',
    'sst-map-mastery',
  ],
};

const TOPIC_LABELS: Record<string, string> = {
  'phy-light-reflection-refraction': 'Ch 9: Light',
  'phy-human-eye-colourful-world': 'Ch 10: Human Eye',
  'phy-electricity': 'Ch 11: Electricity',
  'phy-magnetic-effects': 'Ch 12: Magnetism',
  'phy-board-mastery': '25M Mastery',
  'chem-reactions-and-equations': 'Ch 1: Reactions',
  'chem-acids-bases-salts': 'Ch 2: Acids & Salts',
  'chem-metals-and-non-metals': 'Ch 3: Metals',
  'chem-carbon-and-compounds': 'Ch 4: Carbon',
  'chem-board-mastery': '25M Mastery',
  'bio-life-processes-nutrition-respiration': 'Ch 5A: Nutrition & Resp.',
  'bio-life-processes-transport-excretion': 'Ch 5B: Transport & Excr.',
  'bio-control-and-coordination': 'Ch 6: Control & Coord.',
  'bio-reproduction': 'Ch 7: Reproduction',
  'basics-and-alleles': 'Ch 8: DNA & Alleles',
  'mendel-and-punnett-square': 'Ch 8: Punnett Square',
  'monohybrid-cross': 'Ch 8: Monohybrid',
  'dihybrid-cross': 'Ch 8: Dihybrid',
  'cbse-exam-mastery': 'Ch 8: Sex Det. & Traps',
  'bio-our-environment': 'Ch 13: Environment',
  'math-number-systems': 'Ch 1: Real Numbers',
  'math-algebra': 'Ch 2–5: Algebra',
  'math-coordinate-geometry': 'Ch 7: Coordinate Geo',
  'math-geometry': 'Ch 6 & 10: Triangles & Circles',
  'math-trigonometry': 'Ch 8–9: Trigonometry',
  'math-mensuration': 'Ch 11–12: Mensuration',
  'math-statistics-probability': 'Ch 13–14: Stats & Prob',
  'math-board-mastery': '80M Mastery',
  'first-flight-prose': 'First Flight: Prose',
  'first-flight-poetry': 'First Flight: Poetry',
  'footprints-without-feet': 'Footprints without Feet',
  'english-reading-grammar': 'Reading & Grammar',
  'english-writing-skills': 'Writing Skills',
  'sst-civics': 'Democratic Politics II (Civics)',
  'sst-economics': 'Economics + G20',
  'sst-history': 'History',
  'sst-geography': 'Geography',
  'sst-map-mastery': 'India Map & Mastery',
};

export function CbseQuizArena({
  subjectSlug = 'biology',
  bestScore,
  onSaveScore,
}: CbseQuizArenaProps) {
  const [filterType, setFilterType] = useState<'all' | 'mcq' | 'assertion-reason' | 'case-based'>(
    'all'
  );
  const [topicFilter, setTopicFilter] = useState<string>('all');
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const subjectQuestions = useMemo(
    () => ALL_QUIZ_QUESTIONS.filter((q) => (q.subjectSlug ?? 'biology') === subjectSlug),
    [subjectSlug]
  );

  const availableUnitTopics = useMemo(() => {
    const order = TOPIC_ORDERS[subjectSlug];
    if (!order) return [];
    const present = new Set(subjectQuestions.map((q) => q.topicSlug));
    return order.filter((slug) => present.has(slug));
  }, [subjectSlug, subjectQuestions]);

  const questions = useMemo(() => {
    return subjectQuestions.filter((q) => {
      if (filterType !== 'all' && q.type !== filterType) return false;
      if (
        (subjectSlug === 'physics' ||
          subjectSlug === 'chemistry' ||
          subjectSlug === 'biology' ||
          subjectSlug === 'hindi' ||
          subjectSlug === 'english' ||
          subjectSlug === 'social-science' ||
          subjectSlug === 'mathematics') &&
        topicFilter !== 'all' &&
        q.topicSlug !== topicFilter
      ) {
        return false;
      }
      return true;
    });
  }, [filterType, topicFilter, subjectSlug, subjectQuestions]);

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
    if (filterType === 'all' && topicFilter === 'all' && onSaveScore) {
      onSaveScore(correctCount, questions.length, subjectSlug);
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
              {subjectSlug === 'physics'
                ? 'CBSE Class 10 Physics (Code 086 — Ch 9–12) Self-Test Arena'
                : subjectSlug === 'chemistry'
                ? 'CBSE Class 10 Chemistry (Code 086 — Ch 1–4) Self-Test Arena'
                : subjectSlug === 'mathematics'
                ? 'CBSE Class 10 Mathematics Standard (Code 041) Section A & Case-Study Arena'
                : subjectSlug === 'social-science'
                ? 'CBSE Class 10 Social Science (Code 087) Self-Test & Source Arena'
                : subjectSlug === 'english'
                ? 'CBSE Class 10 English (Code 184) Self-Test & RTC Arena'
                : subjectSlug === 'hindi'
                ? 'CBSE Class 10 Hindi Course B (80-Mark Full Syllabus) Self-Test Arena'
                : 'CBSE Class 10 Biology (Code 086 — Ch 5, 6, 7, 8 & 13) Self-Test Arena'}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {subjectSlug === 'physics'
                ? '100% offline • Light ray signs, Eye defects, Ohm/Joule numericals, Fleming’s Left-Hand Rule & Domestic Circuits'
                : subjectSlug === 'chemistry'
                ? '100% offline • Reaction colours/gases/precipitates, pH & 5 Salts, Metallurgy/HNO₃ traps & Carbon Isomers/Micelles'
                : subjectSlug === 'mathematics'
                ? '100% offline • Keep a rough page beside you! Standard (041) MCQs, Assertion–Reason & 4M Case Studies targeting silly traps'
                : subjectSlug === 'social-science'
                ? '100% offline • Board MCQs, Assertion–Reason, Case Extracts, Cartoon/Chart Checks & G20'
                : subjectSlug === 'english'
                ? '100% offline • Reference-to-Context (RTC) Extracts, Competency MCQs & Assertion–Reason with examiner trap alerts'
                : subjectSlug === 'hindi'
                ? '100% ऑफ़लाइन • स्पर्श, संचयन, अपठित गद्यांश, व्याकरण (पदबंध-वाक्य-समास-मुहावरे) व लेखन अभ्यास'
                : '100% offline • Life Processes, Control & Coordination, Reproduction, Heredity & 10% Law / Ozone with trap alerts'}
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
      <div className="mt-4 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {[
              { key: 'all' as const, label: `All (${subjectQuestions.length})` },
              { key: 'mcq' as const, label: 'MCQs' },
              { key: 'assertion-reason' as const, label: 'Assertion–Reason' },
              {
                key: 'case-based' as const,
                label:
                  subjectSlug === 'social-science'
                    ? 'Source / Case-Based'
                    : subjectSlug === 'english'
                    ? 'RTC Extracts (Case-Based)'
                    : subjectSlug === 'hindi'
                    ? 'पठित / अपठित गद्यांश व काव्यांश'
                    : 'Case-Based',
              },
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

        {subjectSlug === 'hindi' && (
          <div className="flex flex-wrap gap-1.5">
            {[
              { key: 'all', label: 'सभी 5 इकाइयाँ (Full Syllabus)' },
              { key: 'sparsh-kavyakhand', label: 'स्पर्श काव्यखंड' },
              { key: 'sparsh-gadyakhand', label: 'स्पर्श गद्यखंड' },
              { key: 'sanchayan-bhag-2', label: 'संचयन भाग-2' },
              { key: 'apathit-aur-vyakaran', label: 'अपठित व व्याकरण' },
              { key: 'rachanatmak-lekhan', label: 'रचनात्मक लेखन' },
            ].map((u) => (
              <button
                key={u.key}
                type="button"
                onClick={() => {
                  setTopicFilter(u.key);
                  setSubmitted(false);
                }}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
                  topicFilter === u.key
                    ? 'bg-slate-800 text-white dark:bg-white dark:text-slate-900'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-amber-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
                }`}
              >
                {u.label}
              </button>
            ))}
          </div>
        )}

        {(subjectSlug === 'physics' ||
          subjectSlug === 'chemistry' ||
          subjectSlug === 'biology' ||
          subjectSlug === 'english' ||
          subjectSlug === 'social-science' ||
          subjectSlug === 'mathematics') &&
          availableUnitTopics.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {[
              { key: 'all', label: 'All Units' },
              ...availableUnitTopics.map((slug) => ({
                key: slug,
                label: TOPIC_LABELS[slug] ?? slug,
              })),
            ].map((u) => (
              <button
                key={u.key}
                type="button"
                onClick={() => {
                  setTopicFilter(u.key);
                  setSubmitted(false);
                }}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
                  topicFilter === u.key
                    ? 'bg-slate-800 text-white dark:bg-white dark:text-slate-900'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-amber-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
                }`}
              >
                {u.label}
              </button>
            ))}
          </div>
        )}
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
                <div className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 p-3 text-xs text-slate-700 whitespace-pre-line leading-relaxed dark:bg-amber-950/30 dark:text-slate-300">
                  <strong>
                    {subjectSlug === 'social-science'
                      ? 'NCERT Source / Case Extract:'
                      : subjectSlug === 'english'
                      ? 'NCERT Reference Extract:'
                      : subjectSlug === 'hindi'
                      ? 'पठित काव्यांश / गद्यांश:'
                      : 'Case Passage:'}
                  </strong>{' '}
                  {q.casePassage}
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
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
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
