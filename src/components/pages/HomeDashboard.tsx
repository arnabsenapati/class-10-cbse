import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bookmark,
  BookMarked,
  BookOpen,
  CheckCircle2,
  Clock,
  Dna,
  Download,
  Feather,
  FlaskConical,
  Grid2X2,
  Grid3X3,
  Languages,
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

  const resumeEntry = flatSubtopics.find((f) => f.path === progress.lastVisitedPath);
  const bookmarkedEntries = flatSubtopics.filter((f) =>
    progress.bookmarkedSubtopics.includes(f.subtopic.id)
  );

  const englishScore = progress.bestQuizScoresBySubject?.english ?? null;
  const bioScore = progress.bestQuizScoresBySubject?.biology ?? progress.bestQuizScore;
  const hindiScore = progress.bestQuizScoresBySubject?.hindi ?? null;

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Hero Banner */}
      <section className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-700 via-teal-800 to-emerald-900 p-6 sm:p-8 text-white shadow-lg">
        <div className="grid gap-6 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur">
                CBSE Class 10 • English (Code 184), Hindi Course B (Code 085) &amp; Science (Heredity)
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
              CBSE Class 10 Interactive Study Hub — English, Hindi Course B &amp; Biology
            </h1>
            <p className="text-sm sm:text-base text-teal-100 leading-relaxed max-w-2xl">
              Prepare for your <strong>2 Dec English Board Exam</strong> with the{' '}
              <strong>complete 80-mark Code 184 curriculum</strong> — 7-pillar{' '}
              <strong>First Flight Prose &amp; Poetry</strong> + <strong>Footprints without Feet</strong> guides, <strong>20M Unseen Passages</strong>, a <strong>50-Q Interactive Grammar Lab</strong>, <strong>Formal Letters &amp; Analytical Paragraphs</strong> &amp; a <strong>114-Q Quiz Arena</strong>, plus complete <strong>80-mark Hindi Course B</strong> and interactive <strong>Biology Genetics</strong> labs — 100% offline.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to={
                  resumeEntry
                    ? resumeEntry.path
                    : '/subject/english/first-flight-prose/a-letter-to-god'
                }
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-extrabold text-teal-900 shadow-sm hover:bg-teal-50 transition"
              >
                <Play className="h-4 w-4 fill-current" />
                {resumeEntry
                  ? `Resume: ${resumeEntry.subtopic.title}`
                  : 'Start English (First Flight)'}
              </Link>

              <Link
                to="/subject/english/first-flight-prose/a-letter-to-god"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-indigo-500 transition"
              >
                <BookOpen className="h-4 w-4" />
                First Flight Prose (Ch 1–9)
              </Link>
              <Link
                to="/subject/english/first-flight-poetry/dust-of-snow"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-violet-500 transition"
              >
                <Feather className="h-4 w-4" />
                First Flight Poetry (10 Poems)
              </Link>
              <Link
                to="/subject/english/footprints-without-feet/a-triumph-of-surgery"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-teal-500 transition"
              >
                <BookMarked className="h-4 w-4" />
                Footprints (Ch 1–9)
              </Link>
              <Link
                to="/subject/english/english-reading-grammar/reading-grammar-board-mastery"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-sky-500 transition"
              >
                <Layers className="h-4 w-4" />
                Reading &amp; 50-Q Grammar Lab
              </Link>
              <Link
                to="/subject/english/english-writing-skills/writing-and-80-mark-board-strategy"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-cyan-500 transition"
              >
                <BookOpen className="h-4 w-4" />
                Writing &amp; 80M Strategy
              </Link>

              <Link
                to="/subject/hindi/sparsh-kavyakhand/kabir-ki-sakhi"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-bold text-white hover:bg-white/20 transition"
              >
                <Feather className="h-4 w-4" />
                Start Hindi Course B
              </Link>

              <Link
                to="/subject/biology/basics-and-alleles/heredity-variation-dna-basics"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-bold text-white hover:bg-white/20 transition"
              >
                <Dna className="h-4 w-4" />
                Biology Heredity
              </Link>

              <Link
                to="/search"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-bold text-white hover:bg-white/20 transition"
              >
                <Search className="h-4 w-4" />
                Offline Search
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
                Overall Study Progress
              </span>
              <span className="font-mono text-lg font-extrabold">{pct}%</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-300 transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="rounded-xl bg-black/20 p-3 col-span-3 flex items-center justify-between">
                <span className="text-teal-200">Subtopics Completed</span>
                <span className="text-lg font-extrabold">
                  {completedCount} / {totalCount}
                </span>
              </div>
              <div className="rounded-xl bg-black/20 p-2.5">
                <div className="text-teal-200 flex items-center gap-1 text-[11px]">
                  <Trophy className="h-3 w-3 text-indigo-300 shrink-0" /> English Quiz
                </div>
                <div className="mt-0.5 text-sm font-extrabold">
                  {englishScore ? `${englishScore.correct}/${englishScore.total}` : 'Not taken'}
                </div>
              </div>
              <div className="rounded-xl bg-black/20 p-2.5">
                <div className="text-teal-200 flex items-center gap-1 text-[11px]">
                  <Trophy className="h-3 w-3 text-amber-300 shrink-0" /> Hindi Quiz
                </div>
                <div className="mt-0.5 text-sm font-extrabold">
                  {hindiScore ? `${hindiScore.correct}/${hindiScore.total}` : 'Not taken'}
                </div>
              </div>
              <div className="rounded-xl bg-black/20 p-2.5">
                <div className="text-teal-200 flex items-center gap-1 text-[11px]">
                  <Trophy className="h-3 w-3 text-emerald-300 shrink-0" /> Biology Quiz
                </div>
                <div className="mt-0.5 text-sm font-extrabold">
                  {bioScore ? `${bioScore.correct}/${bioScore.total}` : 'Not taken'}
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
            Jump Straight to Interactive Study Labs
          </h2>
          <Link
            to="/glossary"
            className="text-xs font-bold text-teal-700 hover:underline dark:text-teal-400"
          >
            Multi-Subject Glossary &amp; Cheat Sheet →
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'English 80M Blueprint & 114-Q Quiz Arena',
              desc: 'Practice all 5 CBSE Code 184 units (First Flight Prose, Poetry, Footprints, Reading & Grammar, Writing Skills) offline.',
              icon: <BookOpen className="h-5 w-5 text-indigo-600" />,
              path: '/subject/english/english-writing-skills/writing-and-80-mark-board-strategy#wr-04-full-syllabus-quiz-arena',
            },
            {
              title: '10-Mark English Grammar 50-Q Speed Lab',
              desc: 'Drill 50 board-pattern questions across Determiners, Tenses, Subject–Verb Concord, Modals & Reported Speech with instant shortcut rules.',
              icon: <Layers className="h-5 w-5 text-sky-600" />,
              path: '/subject/english/english-reading-grammar/reading-grammar-board-mastery#rg-07-interactive-grammar-lab',
            },
            {
              title: 'Poetic Devices Matrix & 20-Q Drill Lab',
              desc: 'Search 48 CBSE literary devices across 14 categories, compare all 10 rhyme schemes & take the 20-Q Spot-the-Device drill.',
              icon: <Sparkles className="h-5 w-5 text-violet-600" />,
              path: '/subject/english/first-flight-poetry/first-flight-poetry-board-mastery#poetry-devices-interactive-lab',
            },
            {
              title: 'Character Evolution & Twist Trainer Lab',
              desc: 'Explore 18 Footprints Before→After character arcs, 5-adjective packs, 9-chapter twist matrix & 20-Q speed drill.',
              icon: <BookMarked className="h-5 w-5 text-teal-600" />,
              path: '/subject/english/footprints-without-feet/footprints-board-mastery#english-literature-trainer-section',
            },
            {
              title: '16-Mark व्यावहारिक व्याकरण Interactive Lab',
              desc: 'Practice 42 board-pattern MCQs on पदबंध, वाक्य रूपांतरण, समास & मुहावरे with instant explanations.',
              icon: <Sparkles className="h-5 w-5 text-emerald-600" />,
              path: '/subject/hindi/apathit-aur-vyakaran/vyakaran-board-mastery#hindi-vyakaran-interactive-lab',
            },
            {
              title: '3-in-1 हिंदी (ब) Trainer: शब्दार्थ • मुहावरे • समास',
              desc: 'Flip flashcards & run speed drills across स्पर्श, संचयन & व्याकरण offline.',
              icon: <Languages className="h-5 w-5 text-amber-600" />,
              path: '/subject/hindi/sanchayan-bhag-2/sanchayan-board-mastery#sanchayan-word-flashcard-lab',
            },
            {
              title: 'Hindi (ब) 68-Q Full Syllabus Quiz Arena',
              desc: 'Practice पठित व अपठित गद्यांश/काव्यांश, व्याकरण, संचयन व लेखन MCQs filtered by any unit.',
              icon: <Feather className="h-5 w-5 text-rose-600" />,
              path: '/subject/hindi/rachanatmak-lekhan/lekhan-board-mastery#hindi-full-syllabus-quiz-section',
            },
            {
              title: 'Allele Pair Builder (Biology)',
              desc: 'Flip maternal & paternal alleles and see dominance & enzyme levels.',
              icon: <FlaskConical className="h-5 w-5 text-indigo-600" />,
              path: '/subject/biology/basics-and-alleles/what-is-an-allele#homozygous-heterozygous-genotype-phenotype',
            },
            {
              title: 'FOIL & Punnett Trainer (Biology)',
              desc: 'Practice splitting RrYy gametes and filling blank 2×2 grids.',
              icon: <Grid2X2 className="h-5 w-5 text-cyan-600" />,
              path: '/subject/biology/mendel-and-punnett-square/punnett-square-mastery#foil-method-dihybrid-gametes',
            },
            {
              title: 'Monohybrid Simulator (Biology)',
              desc: 'Interactive 2×2 crosses (3:1, 1:2:1, Test Cross) + CBSE format.',
              icon: <Dna className="h-5 w-5 text-teal-600" />,
              path: '/subject/biology/monohybrid-cross/mendel-laws-and-monohybrid-simulator#interactive-monohybrid-lab',
            },
            {
              title: '16-Box Dihybrid Lab (Biology)',
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

      {/* Subject > Topic > Subtopic Complete Hierarchy (All Registered Subjects) */}
      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="h-5 w-5 text-teal-600" />
            Curriculum Map: Subject › Topic › Subtopic
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Active CBSE Class 10 Subjects: English Language &amp; Literature (Code 184 — Complete 80-Mark Syllabus), Hindi Course B (Code 085 — संपूर्ण 80-अंक पाठ्यक्रम), &amp; Biology (Chapter 8: Heredity)
          </p>
        </div>

        <div className="space-y-8">
          {SUBJECTS.map((subject) => {
            const isEnglish = subject.slug === 'english';
            const isHindi = subject.slug === 'hindi';
            return (
              <div key={subject.id} className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-white ${
                        isEnglish
                          ? 'bg-indigo-600'
                          : isHindi
                          ? 'bg-amber-600'
                          : 'bg-teal-700'
                      }`}
                    >
                      {isEnglish ? (
                        <BookOpen className="h-5 w-5" />
                      ) : isHindi ? (
                        <Feather className="h-5 w-5" />
                      ) : (
                        <Dna className="h-5 w-5" />
                      )}
                    </span>
                    <div>
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {subject.board}
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                        {subject.name}
                      </h3>
                    </div>
                  </div>
                  <Link
                    to={`/subject/${subject.slug}`}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 hover:border-teal-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    Open Subject Overview <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="space-y-4">
                  {subject.topics.map((topic) => (
                    <div
                      key={topic.id}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                            {subject.name} › Topic {topic.order} • {topic.ncertChapter}
                          </div>
                          <Link
                            to={`/subject/${subject.slug}/${topic.slug}`}
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
                          const path = buildSubtopicPath(
                            subject.slug,
                            topic.slug,
                            sub.slug
                          );
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
                                      <Clock className="h-3.5 w-3.5" />{' '}
                                      {sub.estimatedMinutes}m
                                    </span>
                                  )}
                                </div>
                                <h4 className="mt-2 text-sm font-extrabold text-slate-900 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-400">
                                  {sub.title}
                                </h4>
                                <p className="mt-1 text-xs text-slate-600 line-clamp-2 dark:text-slate-400">
                                  {sub.subtitle}
                                </p>
                              </div>
                              <div className="flex items-center justify-between text-xs font-bold text-teal-700 dark:text-teal-400">
                                <span>
                                  {isEnglish
                                    ? topic.slug === 'english-reading-grammar'
                                      ? 'Open Rules, Error–Correction, Word Lens & Lab'
                                      : topic.slug === 'english-writing-skills'
                                      ? 'Open CBSE Formats, Solved Samples & 80M Plan'
                                      : 'Open 7-Pillar Guide, Word Lens, RTC & NCERT Text'
                                    : isHindi
                                    ? 'Open Word Lens, Transcript, मुहावरे, समास & Q&A'
                                    : 'Open Lesson & Lab'}
                                </span>
                                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition shrink-0" />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
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
              Install this PWA on Android, Windows, macOS, or iOS to study without internet. Covers complete 80-mark CBSE Class 10 English (Code 184), full 80-mark Hindi Course B, and Biology (Chapter 8: Heredity).
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/subject/english/english-writing-skills/writing-and-80-mark-board-strategy#wr-04-full-syllabus-quiz-arena"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-700 transition"
          >
            English 80M Quiz →
          </Link>
          <Link
            to="/subject/hindi/rachanatmak-lekhan/lekhan-board-mastery#hindi-full-syllabus-quiz-section"
            className="rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white hover:bg-amber-700 transition"
          >
            Hindi Full-Syllabus Quiz →
          </Link>
          <Link
            to="/subject/biology/cbse-exam-mastery/cbse-traps-question-bank-and-quiz#interactive-cbse-quiz-section"
            className="rounded-xl bg-teal-700 px-4 py-2 text-xs font-bold text-white hover:bg-teal-800 transition"
          >
            Biology Heredity Quiz →
          </Link>
        </div>
      </section>
    </div>
  );
}
