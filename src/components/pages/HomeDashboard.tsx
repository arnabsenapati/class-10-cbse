import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bookmark,
  BookMarked,
  CheckCircle2,
  Clock,
  Dna,
  Download,
  FlaskConical,
  Grid2X2,
  Grid3X3,
  Layers,
  Play,
  Search,
  Sparkles,
  Trophy,
  WifiOff,
} from 'lucide-react';
import {
  SUBJECTS,
  buildSubtopicPath,
  getFlattenedSubtopics,
} from '../../data/registry';
import { StudyProgressState } from '../../hooks/useOfflineProgress';

interface HomeDashboardProps {
  progress: StudyProgressState;
  isOnline: boolean;
  offlineReady: boolean;
  canInstall: boolean;
  onPromptInstall: () => void;
  onResetProgress: () => void;
}

export function HomeDashboard({
  progress,
  isOnline,
  offlineReady,
  canInstall,
  onPromptInstall,
  onResetProgress,
}: HomeDashboardProps) {
  const flatSubtopics = getFlattenedSubtopics();
  const totalCount = flatSubtopics.length;
  const completedCount = flatSubtopics.filter((f) =>
    progress.completedSubtopics.includes(f.subtopic.id)
  ).length;
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const firstSubtopicPath = flatSubtopicFirstPath(flatSubtopics);
  const resumeEntry = flatSubtopics.find((f) => f.path === progress.lastVisitedPath);
  const bookmarkedEntries = flatSubtopics.filter((f) =>
    progress.bookmarkedSubtopics.includes(f.subtopic.id)
  );

  const biology = SUBJECTS[0];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Hero Banner */}
      <section className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-700 via-teal-800 to-emerald-900 p-6 sm:p-8 text-white shadow-lg">
        <div className="grid gap-6 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur">
                CBSE Class 10 Science • Chapter 8: Heredity
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/20 border border-emerald-300/30 px-3 py-1 text-xs font-bold text-emerald-100">
                <WifiOff className="h-3.5 w-3.5" />
                {offlineReady
                  ? 'Offline PWA Active'
                  : isOnline
                  ? 'PWA Caching Ready'
                  : 'Running Offline'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Master Genetics from Scratch: Alleles, Punnett Squares &amp; Mendel’s Crosses
            </h1>
            <p className="text-sm sm:text-base text-teal-100 leading-relaxed max-w-2xl">
              Step-by-step explanations designed for Class 10 students — build real intuition with interactive chromosome builders, 2×2 &amp; 4×4 Punnett simulators, offline search, and CBSE board-exam practice.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to={resumeEntry ? resumeEntry.path : firstSubtopicPath}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-extrabold text-teal-900 shadow-sm hover:bg-teal-50 transition"
              >
                <Play className="h-4 w-4 fill-current" />
                {resumeEntry
                  ? `Resume: ${resumeEntry.subtopic.title}`
                  : 'Start From Basics (Lesson 1)'}
              </Link>

              <Link
                to="/search"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-bold text-white hover:bg-white/20 transition"
              >
                <Search className="h-4 w-4" />
                Search Topics &amp; Terms
              </Link>

              {canInstall && (
                <button
                  type="button"
                  onClick={onPromptInstall}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-extrabold text-slate-950 hover:bg-amber-300 transition cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  Install for Offline Use
                </button>
              )}
            </div>
          </div>

          {/* Progress Ring / Stats Card */}
          <div className="lg:col-span-4 rounded-2xl bg-white/10 border border-white/15 p-5 backdrop-blur space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-200">
                Your Progress
              </span>
              <span className="font-mono text-lg font-extrabold">{pct}%</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-300 transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl bg-black/20 p-3">
                <div className="text-teal-200">Subtopics Done</div>
                <div className="mt-0.5 text-lg font-extrabold">
                  {completedCount} / {totalCount}
                </div>
              </div>
              <div className="rounded-xl bg-black/20 p-3">
                <div className="text-teal-200 flex items-center gap-1">
                  <Trophy className="h-3.5 w-3.5 text-amber-300" /> Best Quiz
                </div>
                <div className="mt-0.5 text-lg font-extrabold">
                  {progress.bestQuizScore
                    ? `${progress.bestQuizScore.correct}/${progress.bestQuizScore.total}`
                    : 'Not taken'}
                </div>
              </div>
            </div>
            {completedCount > 0 && (
              <button
                type="button"
                onClick={onResetProgress}
                className="text-[11px] font-semibold text-teal-200 hover:text-white underline cursor-pointer"
              >
                Reset local progress
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Quick Jump Interactive Labs */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-teal-600" />
            Jump Straight to Interactive Genetics Labs
          </h2>
          <Link
            to="/glossary"
            className="text-xs font-bold text-teal-700 hover:underline dark:text-teal-400"
          >
            Glossary &amp; Ratio Cheat Sheet →
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Allele Pair Builder',
              desc: 'Flip maternal & paternal alleles and see dominance & enzyme levels.',
              icon: <FlaskConical className="h-5 w-5 text-indigo-600" />,
              path: '/subject/biology/basics-and-alleles/what-is-an-allele#homozygous-heterozygous-genotype-phenotype',
            },
            {
              title: 'FOIL & Punnett Trainer',
              desc: 'Practice splitting RrYy gametes and filling blank 2×2 grids.',
              icon: <Grid2X2 className="h-5 w-5 text-cyan-600" />,
              path: '/subject/biology/mendel-and-punnett-square/punnett-square-mastery#foil-method-dihybrid-gametes',
            },
            {
              title: 'Monohybrid Simulator',
              desc: 'Interactive 2×2 crosses (3:1, 1:2:1, Test Cross) + CBSE format.',
              icon: <Dna className="h-5 w-5 text-teal-600" />,
              path: '/subject/biology/monohybrid-cross/mendel-laws-and-monohybrid-simulator#interactive-monohybrid-lab',
            },
            {
              title: '16-Box Dihybrid Lab',
              desc: 'Explore 9:3:3:1 recombinants & predict seed counts out of 1600.',
              icon: <Grid3X3 className="h-5 w-5 text-violet-600" />,
              path: '/subject/biology/dihybrid-cross/mendel-dihybrid-experiment#dihybrid-f1-to-f2-grid',
            },
          ].map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className="group rounded-2xl border border-slate-200 bg-white p-4 hover:border-teal-400 hover:shadow-md transition dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                  {card.icon}
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 group-hover:text-teal-600 transition" />
              </div>
              <h3 className="mt-3 text-sm font-bold text-slate-900 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-400">
                {card.title}
              </h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed dark:text-slate-400">
                {card.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Bookmarks if any */}
      {bookmarkedEntries.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Bookmark className="h-4 w-4 text-amber-500 fill-amber-500" />
            Saved Subtopics
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {bookmarkedEntries.map((entry) => (
              <Link
                key={entry.subtopic.id}
                to={entry.path}
                className="rounded-xl border border-amber-200 bg-amber-50/50 p-3.5 hover:border-amber-400 transition dark:border-amber-900/60 dark:bg-amber-950/20"
              >
                <div className="text-[11px] font-bold text-amber-800 dark:text-amber-400">
                  {entry.subject.name} › Topic {entry.topic.order}
                </div>
                <div className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
                  {entry.subtopic.title}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Subject > Topic > Subtopic Complete Hierarchy */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="h-5 w-5 text-teal-600" />
              Curriculum Map: Subject › Topic › Subtopic
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Modular structure — currently populated with CBSE Class 10 Biology (Chapter 8: Heredity)
            </p>
          </div>
          <Link
            to={`/subject/${biology.slug}`}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:border-teal-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            View Subject Page <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="space-y-4">
          {biology.topics.map((topic) => (
            <div
              key={topic.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                    Biology › Topic {topic.order} • {topic.ncertChapter}
                  </div>
                  <Link
                    to={`/subject/${biology.slug}/${topic.slug}`}
                    className="mt-0.5 block text-base sm:text-lg font-extrabold text-slate-900 hover:text-teal-700 dark:text-white dark:hover:text-teal-400"
                  >
                    {topic.title}
                  </Link>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {topic.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {topic.subtopics.map((sub) => {
                  const path = buildSubtopicPath(biology.slug, topic.slug, sub.slug);
                  const done = progress.completedSubtopics.includes(sub.id);
                  return (
                    <Link
                      key={sub.id}
                      to={path}
                      className="group rounded-xl border border-slate-200 bg-slate-50/60 p-4 hover:border-teal-400 hover:bg-white transition flex flex-col justify-between gap-3 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:bg-slate-900"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded bg-white px-2 py-0.5 text-[11px] font-bold text-slate-600 border border-slate-200 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300">
                            {sub.difficulty}
                          </span>
                          {done ? (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                              <CheckCircle2 className="h-4 w-4" /> Completed
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                              <Clock className="h-3.5 w-3.5" /> {sub.estimatedMinutes}m
                            </span>
                          )}
                        </div>
                        <h3 className="mt-2 text-sm font-extrabold text-slate-900 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-400">
                          {sub.title}
                        </h3>
                        <p className="mt-1 text-xs text-slate-600 line-clamp-2 dark:text-slate-400">
                          {sub.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-xs font-bold text-teal-700 dark:text-teal-400">
                        <span>Open Lesson &amp; Lab</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modular Extensibility & Offline PWA Info Footer */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-wrap items-center justify-between gap-4 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-start gap-3">
          <BookMarked className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Works Online &amp; Offline + Modular Multi-Subject Ready
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Install this PWA on Android, Windows, macOS, or iOS to study without internet. Additional Class 10 subjects (Physics, Chemistry, Mathematics) can plug directly into the same Subject › Topic › Subtopic registry.
            </p>
          </div>
        </div>
        <Link
          to="/subject/biology/cbse-exam-mastery/cbse-traps-question-bank-and-quiz#interactive-cbse-quiz-section"
          className="rounded-xl bg-teal-700 px-4 py-2 text-xs font-bold text-white hover:bg-teal-800 transition"
        >
          Take CBSE Self-Test →
        </Link>
      </section>
    </div>
  );
}

function flatSubtopicFirstPath(
  entries: ReturnType<typeof getFlattenedSubtopics>
): string {
  return entries[0]?.path ?? '/';
}
