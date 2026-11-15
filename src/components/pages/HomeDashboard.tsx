import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bookmark,
  BookMarked,
  BookOpen,
  Calculator,
  CheckCircle2,
  Clock,
  Dna,
  Download,
  Feather,
  FlaskConical,
  Globe,
  Grid2X2,
  Grid3X3,
  Languages,
  Layers,
  MapPin,
  PenLine,
  Play,
  Search,
  ShieldAlert,
  Sparkles,
  Trophy,
  WifiOff,
  Zap,
} from 'lucide-react';
import {
  SUBJECTS,
  buildSubtopicPath,
  getFlattenedSubtopics,
} from '../../data/registry';
import { StudyProgressState } from '../../hooks/useOfflineProgress';
import {
  MATH_SLIP_LABELS,
  MathSlipCategory,
  useMathNotebookProgress,
} from '../../utils/mathNotebookProgress';

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

  const physicsScore = progress.bestQuizScoresBySubject?.physics ?? null;
  const chemistryScore = progress.bestQuizScoresBySubject?.chemistry ?? null;
  const bioScore = progress.bestQuizScoresBySubject?.biology ?? progress.bestQuizScore;
  const mathScore = progress.bestQuizScoresBySubject?.mathematics ?? null;
  const sstScore = progress.bestQuizScoresBySubject?.['social-science'] ?? null;
  const englishScore = progress.bestQuizScoresBySubject?.english ?? null;
  const hindiScore = progress.bestQuizScoresBySubject?.hindi ?? null;

  const mathNotebook = useMathNotebookProgress();
  const slipEntries = (
    Object.entries(mathNotebook.state.slipRadar) as [MathSlipCategory, number][]
  )
    .filter(([, count]) => count > 0)
    .sort((a, b) => b[1] - a[1]);
  const topSlip = slipEntries[0] ?? null;
  const notebookTargetPct = Math.min(
    100,
    Math.round((mathNotebook.todayCount / Math.max(1, mathNotebook.dailyTarget)) * 100)
  );

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Hero Banner */}
      <section className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-700 via-teal-800 to-emerald-900 p-6 sm:p-8 text-white shadow-lg">
        <div className="grid gap-6 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur">
                CBSE Class 10 • Science (086 — 05 Dec), Maths (041), SST (087), English (184) &amp; Hindi (085)
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
              CBSE Class 10 Interactive Study Hub — Complete Science (086) 2D/3D Labs, Maths, SST, English &amp; Hindi
            </h1>
            <p className="text-sm sm:text-base text-teal-100 leading-relaxed max-w-2xl">
              Master <strong>Saturday, 05 Dec Science (Code 086)</strong> with interactive <strong>2D &amp; drag-to-orbit 3D simulations</strong> across Physics (Ch 9–12 Ray Optics, V–I Circuits, 3D Solenoid), Chemistry (Ch 1–4 Wet-Lab, Electrolysis, 3D Methane/Diamond/Micelle), and Biology (Ch 5–8 &amp; 13 Heart/Nephron, Reflex Arc, 3D Flower/DNA &amp; Heredity) — alongside complete 80-mark Maths (041), SST (087), English (184) &amp; Hindi (085) 100% offline.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to={
                  resumeEntry
                    ? resumeEntry.path
                    : '/subject/physics/phy-light-reflection-refraction/phy09-mirrors-and-reflection'
                }
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-extrabold text-teal-900 shadow-sm hover:bg-teal-50 transition"
              >
                <Play className="h-4 w-4 fill-current" />
                {resumeEntry
                  ? `Resume: ${resumeEntry.subtopic.title}`
                  : 'Start Science 086 (05 Dec)'}
              </Link>

              <Link
                to="/subject/physics/phy-light-reflection-refraction/phy09-mirrors-and-reflection"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-cyan-500 transition"
              >
                <Zap className="h-4 w-4" />
                05 Dec Physics (Ch 9–12, 2D/3D)
              </Link>

              <Link
                to="/subject/chemistry/chem-reactions-and-equations/chem01-balancing-combination-decomposition"
                className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-purple-500 transition"
              >
                <FlaskConical className="h-4 w-4" />
                05 Dec Chemistry (Ch 1–4, 3D)
              </Link>

              <Link
                to="/subject/biology/bio-life-processes-nutrition-respiration/bio05-nutrition-and-digestion"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-500 transition"
              >
                <Dna className="h-4 w-4" />
                05 Dec Biology (Ch 5–8, 13)
              </Link>

              <Link
                to="/subject/mathematics/math-number-systems/ch01-real-numbers"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-500 transition"
              >
                <Calculator className="h-4 w-4" />
                Maths: Ch 1–14 Hand-Practice
              </Link>

              <Link
                to="/subject/mathematics/math-board-mastery/endless-drill-and-80m-blueprint#math-endless-drill-section"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-sky-500 transition"
              >
                <PenLine className="h-4 w-4" />
                Endless Notebook Drill
              </Link>

              <Link
                to="/subject/mathematics/math-board-mastery/silly-mistake-surgery-clinic#interactive-silly-mistake-clinic"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-sm hover:bg-amber-400 transition"
              >
                <ShieldAlert className="h-4 w-4" />
                Silly-Mistake Clinic
              </Link>

              <Link
                to="/subject/social-science/sst-history/rise-of-nationalism-in-europe"
                className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-rose-500 transition"
              >
                <Globe className="h-4 w-4" />
                23 Nov SST: All 4 Units (80M) + G20
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
                Heredity &amp; Punnett Labs
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
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-xl bg-black/20 p-3 col-span-2 flex items-center justify-between">
                <span className="text-teal-200">Subtopics Completed</span>
                <span className="text-lg font-extrabold">
                  {completedCount} / {totalCount}
                </span>
              </div>
              <div className="rounded-xl bg-cyan-950/50 border border-cyan-300/25 p-2.5">
                <div className="text-cyan-200 flex items-center gap-1 text-[11px] font-bold">
                  <Trophy className="h-3 w-3 text-cyan-300 shrink-0" /> Physics Quiz
                </div>
                <div className="mt-0.5 text-sm font-extrabold">
                  {physicsScore ? `${physicsScore.correct}/${physicsScore.total}` : 'Not taken'}
                </div>
              </div>
              <div className="rounded-xl bg-purple-950/50 border border-purple-300/25 p-2.5">
                <div className="text-purple-200 flex items-center gap-1 text-[11px] font-bold">
                  <Trophy className="h-3 w-3 text-purple-300 shrink-0" /> Chemistry Quiz
                </div>
                <div className="mt-0.5 text-sm font-extrabold">
                  {chemistryScore ? `${chemistryScore.correct}/${chemistryScore.total}` : 'Not taken'}
                </div>
              </div>
              <div className="rounded-xl bg-emerald-950/50 border border-emerald-300/25 p-2.5">
                <div className="text-emerald-200 flex items-center gap-1 text-[11px] font-bold">
                  <Trophy className="h-3 w-3 text-emerald-300 shrink-0" /> Biology Quiz
                </div>
                <div className="mt-0.5 text-sm font-extrabold">
                  {bioScore ? `${bioScore.correct}/${bioScore.total}` : 'Not taken'}
                </div>
              </div>
              <div className="rounded-xl bg-blue-950/50 border border-blue-300/25 p-2.5">
                <div className="text-blue-200 flex items-center gap-1 text-[11px] font-bold">
                  <Trophy className="h-3 w-3 text-sky-300 shrink-0" /> Maths Quiz
                </div>
                <div className="mt-0.5 text-sm font-extrabold text-white">
                  {mathScore ? `${mathScore.correct}/${mathScore.total}` : 'Not taken'}
                </div>
              </div>
              <div className="rounded-xl bg-black/20 p-2.5">
                <div className="text-teal-200 flex items-center gap-1 text-[11px]">
                  <Trophy className="h-3 w-3 text-rose-300 shrink-0" /> SST Quiz
                </div>
                <div className="mt-0.5 text-sm font-extrabold">
                  {sstScore ? `${sstScore.correct}/${sstScore.total}` : 'Not taken'}
                </div>
              </div>
              <div className="rounded-xl bg-black/20 p-2.5">
                <div className="text-teal-200 flex items-center gap-1 text-[11px]">
                  <Trophy className="h-3 w-3 text-indigo-300 shrink-0" /> English Quiz
                </div>
                <div className="mt-0.5 text-sm font-extrabold">
                  {englishScore ? `${englishScore.correct}/${englishScore.total}` : 'Not taken'}
                </div>
              </div>
              <div className="rounded-xl bg-black/20 p-2.5 col-span-2 flex items-center justify-between">
                <div className="text-teal-200 flex items-center gap-1.5 text-[11px]">
                  <Trophy className="h-3 w-3 text-amber-300 shrink-0" /> Hindi Course B Quiz
                </div>
                <div className="text-sm font-extrabold">
                  {hindiScore ? `${hindiScore.correct}/${hindiScore.total}` : 'Not taken'}
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

      {/* Live Physical Notebook & Silly-Mistake Radar Strip */}
      <section className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-amber-50/70 p-4 sm:p-5 shadow-xs dark:border-blue-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1 min-w-[240px]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-2.5 py-0.5 text-[11px] font-extrabold text-white">
                <PenLine className="h-3 w-3" /> Screen-to-Notebook Tracker (30 Nov Maths)
              </span>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                Today: <span className="text-blue-700 dark:text-blue-300">{mathNotebook.todayCount} / {mathNotebook.dailyTarget} written sums</span>
              </span>
            </div>

            <div className="h-2.5 w-full max-w-md rounded-full bg-slate-200 overflow-hidden dark:bg-slate-800">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  notebookTargetPct >= 100 ? 'bg-emerald-500' : 'bg-blue-600'
                }`}
                style={{ width: `${notebookTargetPct}%` }}
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                Solved Clean: {mathNotebook.totalCleanCount}
              </span>
              <span>•</span>
              <span className="font-semibold text-amber-700 dark:text-amber-400">
                Slips Caught &amp; Logged: {mathNotebook.totalSlipsLogged}
              </span>
              {topSlip ? (
                <span className="inline-flex items-center gap-1 rounded-md bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-900 dark:bg-amber-950/60 dark:text-amber-300">
                  <ShieldAlert className="h-3 w-3 shrink-0" />
                  Top Slip: {MATH_SLIP_LABELS[topSlip[0]].full} ({topSlip[1]}×) — {MATH_SLIP_LABELS[topSlip[0]].shield}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  Keep your physical notebook beside you and log every clean solve or slip!
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              to="/subject/mathematics/math-board-mastery/endless-drill-and-80m-blueprint#math-endless-drill-section"
              className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-extrabold text-white hover:bg-blue-700 transition"
            >
              <Calculator className="h-3.5 w-3.5" /> Open Endless Drill →
            </Link>
            <Link
              to="/subject/mathematics/math-board-mastery/silly-mistake-surgery-clinic#interactive-silly-mistake-clinic"
              className="inline-flex items-center gap-1.5 rounded-xl border border-amber-300 bg-amber-50 px-3.5 py-2 text-xs font-extrabold text-amber-900 hover:bg-amber-100 transition dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200 dark:hover:bg-amber-900/50 dark:hover:text-amber-100"
            >
              <ShieldAlert className="h-3.5 w-3.5" /> Spot-the-Slip Clinic →
            </Link>
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
              title: '2D Ray Optics & Eye Defects Bench',
              desc: 'Drag u along concave/convex mirrors & lenses, trace focal rays live, and test myopia/hypermetropia spectacle lens fixes.',
              icon: <Zap className="h-5 w-5 text-cyan-600" />,
              path: '/subject/physics/phy-light-reflection-refraction/phy09-mirrors-and-reflection#phy09-mirror-diagrams-lab',
            },
            {
              title: "2D Live Ohm's Law & Circuit Lab",
              desc: 'Toggle Series/Parallel networks, live ammeter/voltmeter readings, V–I slopes, Joule heating (I²Rt) & fuse safety ratings.',
              icon: <Zap className="h-5 w-5 text-sky-600" />,
              path: '/subject/physics/phy-electricity/phy11-current-ohms-resistivity#phy11-symbols-vi-lab',
            },
            {
              title: '3D Magnetism, Solenoid & Domestic Wiring',
              desc: 'Drag-to-orbit 3D bar magnet field lines, current-carrying solenoid, Right-Hand Thumb Rule, F=BIL & Live/Neutral/Earth box.',
              icon: <Layers className="h-5 w-5 text-cyan-700" />,
              path: '/subject/physics/phy-magnetic-effects/phy12-field-lines-solenoid#phy12-magnet-3d-lab',
            },
            {
              title: 'Physics 48-Q Quiz & Sign-Slip Mastery',
              desc: 'Drill Ch 9–12 (25M Science Blueprint) with u/v/f New Cartesian sign traps, MCQs, Assertion–Reason & Case-Based questions.',
              icon: <Trophy className="h-5 w-5 text-cyan-600" />,
              path: '/subject/physics/phy-board-mastery/phy-formulas-traps-and-quiz#physics-quiz-section',
            },
            {
              title: '2D Chemistry Wet-Lab & Equation Balancer',
              desc: 'Trigger exothermic/decomposition/displacement gas & precipitate animations, mix acid–base indicators on the pH scale & balance equations.',
              icon: <FlaskConical className="h-5 w-5 text-purple-600" />,
              path: '/subject/chemistry/chem-reactions-and-equations/chem01-balancing-combination-decomposition#chem01-decomposition-trio',
            },
            {
              title: '2D Metallurgy, Reactivity & Electrolysis',
              desc: 'Test K–Au displacement tubes live, drag roasting/calcination smelters, watch anode-mud copper refining & ionic dot transfer.',
              icon: <FlaskConical className="h-5 w-5 text-violet-600" />,
              path: '/subject/chemistry/chem-metals-and-non-metals/chem03-properties-reactivity-series#chem03-reactivity-matrix-lab',
            },
            {
              title: '3D Carbon Molecules, Diamond & Micelle Lab',
              desc: 'Orbit 3D tetrahedral CH₄, ethene/ethyne π-bonds, ethanol/ethanoic acid, diamond/graphite lattices & grease-trapping soap micelles.',
              icon: <Sparkles className="h-5 w-5 text-purple-700" />,
              path: '/subject/chemistry/chem-carbon-and-compounds/chem04-reactions-ethanol-soap#chem04-soap-micelles-3d',
            },
            {
              title: 'Chemistry 48-Q Quiz & Detective Matrix',
              desc: 'Crack Ch 1–4 X–Y–Z colour/precipitate mysteries, Chlor-Alkali & Plaster of Paris traps, and 48 offline CBSE exam questions.',
              icon: <Trophy className="h-5 w-5 text-purple-600" />,
              path: '/subject/chemistry/chem-board-mastery/chem-observation-vault-detective-quiz#chemistry-quiz-section',
            },
            {
              title: '2D Life Processes Pipeline Animator',
              desc: 'Step through peristalsis/villi enzyme absorption, 3 glucose pathways, double circulation in the 4-chamber heart & nephron filtration.',
              icon: <Dna className="h-5 w-5 text-emerald-600" />,
              path: '/subject/biology/bio-life-processes-transport-excretion/bio05-circulation-heart-plants#blood-vessels-lymph-and-heart',
            },
            {
              title: '2D Neuro-Endocrine & Reflex Arc Lab',
              desc: 'Fire synapse impulses across sensory→relay→motor reflex arcs, simulate plant auxin phototropism & feedback-loop hormones.',
              icon: <Sparkles className="h-5 w-5 text-teal-600" />,
              path: '/subject/biology/bio-control-and-coordination/bio06-neuron-reflex-brain#neuron-synapse-and-reflex-arc',
            },
            {
              title: '3D Pollination, Reproduction & Budding Lab',
              desc: 'Orbit 3D flower whorls & pollen-tube double fertilization, watch Hydra budding & Planaria regeneration step-by-step.',
              icon: <Dna className="h-5 w-5 text-teal-700" />,
              path: '/subject/biology/bio-reproduction/bio07-dna-copying-asexual#six-asexual-reproduction-modes',
            },
            {
              title: '3D DNA Double Helix & 10% Food Pyramid',
              desc: 'Rotate a 3D base-paired DNA double helix, trace trophic 10% energy transfer & biomagnification pesticides up food chains.',
              icon: <Layers className="h-5 w-5 text-emerald-700" />,
              path: '/subject/biology/bio-our-environment/bio13-ecosystem-energy-biomagnification#ten-percent-law-and-biomagnification',
            },
            {
              title: 'Biology 62-Q Full-Syllabus Quiz Arena',
              desc: 'Master Ch 5, 6, 7, 8 & 13 (30M Biology Blueprint) across Life Processes, Control, Reproduction, Heredity & Environment.',
              icon: <Trophy className="h-5 w-5 text-emerald-600" />,
              path: '/subject/biology/bio-our-environment/bio13-ozone-waste-science-blueprint#biology-full-quiz-section',
            },
            {
              title: 'Endless Standard (041) Notebook Drill',
              desc: 'Generate unlimited fresh Quadratics, APs, BPT, Trigonometry, Mensuration & Statistics problems with live timer, daily 20/50 quota & Silly-Mistake Radar.',
              icon: <Calculator className="h-5 w-5 text-blue-600" />,
              path: '/subject/mathematics/math-board-mastery/endless-drill-and-80m-blueprint#math-endless-drill-section',
            },
            {
              title: 'Silly-Mistake Surgery Clinic (24 Traps)',
              desc: 'Spot the broken mid-way line across 24 authentic student mistakes (signs, fractions, d/2, cf/2f₁ rows) and drill the paired Twin Sum in your notebook.',
              icon: <ShieldAlert className="h-5 w-5 text-amber-600" />,
              path: '/subject/mathematics/math-board-mastery/silly-mistake-surgery-clinic#interactive-silly-mistake-clinic',
            },
            {
              title: 'Mathematics Standard 78-Q Quiz Arena',
              desc: 'Test Section A (MCQ + Assertion–Reason) & Section E Case-Based readiness across all 8 rationalized Class 10 Maths Standard units offline.',
              icon: <Trophy className="h-5 w-5 text-sky-600" />,
              path: '/subject/mathematics/math-board-mastery/endless-drill-and-80m-blueprint#math-quiz-section',
            },
            {
              title: 'Section F: India 88-Pin SVG Map Lab (5M)',
              desc: 'Explore all 74 CBSE pins & 14 Soil/Crop zones offline, drill 15 Q37 prompts right on the India SVG outline, and clear crowded Gujarat/TN/Steel clusters.',
              icon: <MapPin className="h-5 w-5 text-emerald-600" />,
              path: '/subject/social-science/sst-map-mastery/india-map-work-mastery-lab#sst-india-map-lab-section',
            },
            {
              title: 'History Chronology Sorter & Book/Author Lab',
              desc: 'Sort 10 CBSE Section-A timelines, match 20 History leaders/works & drill 12 key Acts/Treaties across Ch 1, 2, 3(1–1.3) & 5.',
              icon: <Clock className="h-5 w-5 text-amber-600" />,
              path: '/subject/social-science/sst-history/history-board-mastery#sst-timeline-lab-section',
            },
            {
              title: 'Social Science 125-Q Full-Syllabus Quiz Arena',
              desc: 'Drill History chronology/sources, Civics cartoons, Economics GDP/Credit/G20, Geography Soils/Crops/Dams/Ports & India Map Mastery (125 Qs) offline.',
              icon: <Globe className="h-5 w-5 text-rose-600" />,
              path: '/subject/social-science/sst-map-mastery/sst-80m-board-blueprint-and-mock#sst-full-syllabus-quiz-section',
            },
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
            Active CBSE Class 10 Subjects: Mathematics Standard (Code 041 — All 14 Chapters + Screen-to-Notebook Drill &amp; Silly-Mistake Clinic), Social Science (Code 087 — History, Civics, Economics + G20, Geography &amp; 5M India Map Lab), English Language &amp; Literature (Code 184), Hindi Course B (Code 085), &amp; Biology (Chapter 8: Heredity)
          </p>
        </div>

        <div className="space-y-8">
          {SUBJECTS.map((subject) => {
            const isPhysics = subject.slug === 'physics';
            const isChemistry = subject.slug === 'chemistry';
            const isMath = subject.slug === 'mathematics';
            const isSst = subject.slug === 'social-science';
            const isEnglish = subject.slug === 'english';
            const isHindi = subject.slug === 'hindi';
            return (
              <div key={subject.id} className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-white ${
                        isPhysics
                          ? 'bg-cyan-600'
                          : isChemistry
                          ? 'bg-violet-600'
                          : isMath
                          ? 'bg-blue-600'
                          : isSst
                          ? 'bg-rose-600'
                          : isEnglish
                          ? 'bg-indigo-600'
                          : isHindi
                          ? 'bg-amber-600'
                          : 'bg-teal-700'
                      }`}
                    >
                      {isPhysics ? (
                        <Zap className="h-5 w-5" />
                      ) : isChemistry ? (
                        <FlaskConical className="h-5 w-5" />
                      ) : isMath ? (
                        <Calculator className="h-5 w-5" />
                      ) : isSst ? (
                        <Globe className="h-5 w-5" />
                      ) : isEnglish ? (
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
                                  {isPhysics
                                    ? topic.slug === 'phy-board-mastery'
                                      ? 'Open Formula Sheet, Sign-Slips & 48-Q Quiz'
                                      : 'Open Sign-Shield, 2D/3D Labs & Numericals'
                                    : isChemistry
                                    ? topic.slug === 'chem-board-mastery'
                                      ? 'Open Colour Vault, X–Y–Z Detective & 48-Q Quiz'
                                      : 'Open Wet-Lab Visuals, 2D/3D Simulators & Q&A'
                                    : isMath
                                    ? topic.slug === 'math-board-mastery'
                                      ? 'Open Silly-Mistake Clinic, Endless Drill & 80M Blueprint'
                                      : 'Open Formula Vault, Silly-Mistake Traps & Hand-Practice'
                                    : isSst
                                    ? topic.slug === 'sst-history'
                                      ? 'Open Chronology, Allegories, Sources & 5M Q&A'
                                      : topic.slug === 'sst-economics'
                                      ? 'Open Data Charts, Formulas, Cases & G20'
                                      : topic.slug === 'sst-geography'
                                      ? 'Open Soil/Crop Visuals, Matrices, Map Pins & 5M Q&A'
                                      : topic.slug === 'sst-map-mastery'
                                      ? 'Open 88-Item India SVG Map Lab & 80M Blueprint'
                                      : 'Open Constitutional Pillars, Cartoons & 5M Q&A'
                                    : isEnglish
                                    ? topic.slug === 'english-reading-grammar'
                                      ? 'Open Rules, Error–Correction, Word Lens & Lab'
                                      : topic.slug === 'english-writing-skills'
                                      ? 'Open CBSE Formats, Solved Samples & 80M Plan'
                                      : 'Open 7-Pillar Guide, Word Lens, RTC & NCERT Text'
                                    : isHindi
                                    ? 'Open Word Lens, Transcript, मुहावरे, समास & Q&A'
                                    : 'Open Label-Toggle Diagrams, 2D/3D Labs & Q&A'}
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
              Install this PWA on Android, Windows, macOS, or iOS to study without internet. Covers complete 80-mark Science (Code 086 — Physics Ch 9–12, Chemistry Ch 1–4, Biology Ch 5–8 &amp; 13 with 2D &amp; 3D interactive animations), complete 80-mark Mathematics Standard (Code 041 — Screen-to-Notebook Hand Practice, Endless Drill &amp; Silly-Mistake Clinic), Social Science (History, Civics, Economics + G20, Geography &amp; 5M India Map Lab), complete 80-mark English (Code 184), and full 80-mark Hindi Course B.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/subject/physics/phy-board-mastery/phy-formulas-traps-and-quiz#physics-quiz-section"
            className="rounded-xl bg-cyan-600 px-4 py-2 text-xs font-bold text-white hover:bg-cyan-700 transition"
          >
            Physics 48-Q Quiz →
          </Link>
          <Link
            to="/subject/chemistry/chem-board-mastery/chem-observation-vault-detective-quiz#chemistry-quiz-section"
            className="rounded-xl bg-purple-600 px-4 py-2 text-xs font-bold text-white hover:bg-purple-700 transition"
          >
            Chemistry 48-Q Quiz →
          </Link>
          <Link
            to="/subject/biology/bio-our-environment/bio13-ozone-waste-science-blueprint#biology-full-quiz-section"
            className="rounded-xl bg-teal-700 px-4 py-2 text-xs font-bold text-white hover:bg-teal-800 transition"
          >
            Biology 62-Q Quiz →
          </Link>
          <Link
            to="/subject/mathematics/math-board-mastery/endless-drill-and-80m-blueprint#math-quiz-section"
            className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 transition"
          >
            Maths 80M Quiz →
          </Link>
          <Link
            to="/subject/social-science/sst-map-mastery/sst-80m-board-blueprint-and-mock#sst-full-syllabus-quiz-section"
            className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-700 transition"
          >
            Social Science Quiz →
          </Link>
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
        </div>
      </section>
    </div>
  );
}
