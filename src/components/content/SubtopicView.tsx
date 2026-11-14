import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bookmark,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Printer,
  Target,
} from 'lucide-react';
import { getAdjacentSubtopics, getSubtopicBySlugs } from '../../data/registry';
import { BlockRenderer, renderInlineText } from './BlockRenderer';

interface SubtopicViewProps {
  subjectSlug: string;
  topicSlug: string;
  subtopicSlug: string;
  completedSubtopics: string[];
  bookmarkedSubtopics: string[];
  bestQuizScore?: { correct: number; total: number } | null;
  onToggleComplete: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onVisitPath: (path: string) => void;
  onSaveQuizScore: (correct: number, total: number) => void;
}

export function SubtopicView({
  subjectSlug,
  topicSlug,
  subtopicSlug,
  completedSubtopics,
  bookmarkedSubtopics,
  bestQuizScore,
  onToggleComplete,
  onToggleBookmark,
  onVisitPath,
  onSaveQuizScore,
}: SubtopicViewProps) {
  const location = useLocation();
  const data = getSubtopicBySlugs(subjectSlug, topicSlug, subtopicSlug);
  const adjacent = getAdjacentSubtopics(subjectSlug, topicSlug, subtopicSlug);

  useEffect(() => {
    onVisitPath(location.pathname);
    if (location.hash) {
      const targetId = location.hash.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash, onVisitPath]);

  if (!data) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Subtopic Not Found
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          The requested lesson could not be found in this subject.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block rounded-lg bg-teal-700 px-4 py-2 text-xs font-bold text-white"
        >
          Go to Study Hub
        </Link>
      </div>
    );
  }

  const { subject, topic, subtopic } = data;
  const isCompleted = completedSubtopics.includes(subtopic.id);
  const isBookmarked = bookmarkedSubtopics.includes(subtopic.id);

  return (
    <div className="grid gap-8 xl:grid-cols-12 items-start">
      <article className="xl:col-span-9 space-y-6 min-w-0">
        {/* Breadcrumb: Subject > Topic > Subtopic */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400"
        >
          <Link to="/" className="hover:text-teal-700 dark:hover:text-teal-400">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link
            to={`/subject/${subject.slug}`}
            className="hover:text-teal-700 dark:hover:text-teal-400"
          >
            {subject.name}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link
            to={`/subject/${subject.slug}/${topic.slug}`}
            className="hover:text-teal-700 dark:hover:text-teal-400"
          >
            Topic {topic.order}: {topic.title}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {subtopic.title}
          </span>
        </nav>

        {/* Subtopic Hero Header */}
        <header className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-bold text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                {subtopic.ncertSection}
              </span>
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                {subtopic.difficulty}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="h-3.5 w-3.5" /> {subtopic.estimatedMinutes} min
              </span>
            </div>

            <div className="no-print flex items-center gap-2">
              <button
                type="button"
                onClick={() => onToggleBookmark(subtopic.id)}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark subtopic'}
                className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                  isBookmarked
                    ? 'border-amber-400 bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                <Bookmark className={`h-3.5 w-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                {isBookmarked ? 'Saved' : 'Save'}
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                <Printer className="h-3.5 w-3.5" /> Print / PDF
              </button>
            </div>
          </div>

          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {subtopic.title}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed dark:text-slate-400">
            {subtopic.subtitle}
          </p>

          {/* Learning Objectives */}
          <div className="mt-5 rounded-xl bg-slate-50 border border-slate-200 p-4 dark:bg-slate-950/70 dark:border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400 mb-2">
              <Target className="h-3.5 w-3.5" /> What You Will Master in This Subtopic
            </div>
            <ul className="grid gap-1.5 sm:grid-cols-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {subtopic.learningObjectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </header>

        {/* Lesson Sections */}
        <div className="space-y-8">
          {subtopic.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-20 space-y-4 rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-xs dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 pb-2 border-b border-slate-100 dark:text-white dark:border-slate-800">
                {renderInlineText(section.title)}
              </h2>
              <div className="space-y-4">
                {section.blocks.map((block, bIdx) => (
                  <BlockRenderer
                    key={bIdx}
                    block={block}
                    bestQuizScore={bestQuizScore}
                    onSaveQuizScore={onSaveQuizScore}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Mark Complete + Prev/Next Navigation */}
        <footer className="no-print space-y-4 pt-2">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-teal-200 bg-teal-50/70 p-4 dark:border-teal-900 dark:bg-teal-950/30">
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {isCompleted
                  ? 'Subtopic Completed!'
                  : 'Finished studying this subtopic?'}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Progress is saved locally on your device — works online and offline.
              </div>
            </div>
            <button
              type="button"
              onClick={() => onToggleComplete(subtopic.id)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-teal-700 text-white hover:bg-teal-800'
              }`}
            >
              <CheckCircle2 className="h-4 w-4" />
              {isCompleted ? 'Marked Complete ✓' : 'Mark as Understood'}
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {adjacent.prev ? (
              <Link
                to={adjacent.prev.path}
                className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-teal-400 transition dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                  <ChevronLeft className="h-3.5 w-3.5" /> Previous Subtopic
                </div>
                <div className="mt-1 text-sm font-bold text-slate-900 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-400">
                  {adjacent.prev.subtopic.title}
                </div>
              </Link>
            ) : (
              <div />
            )}

            {adjacent.next && (
              <Link
                to={adjacent.next.path}
                className="group rounded-xl border border-slate-200 bg-white p-4 text-right hover:border-teal-400 transition dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center justify-end gap-1 text-xs font-semibold text-slate-500">
                  Next Subtopic <ChevronRight className="h-3.5 w-3.5" />
                </div>
                <div className="mt-1 text-sm font-bold text-slate-900 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-400">
                  {adjacent.next.subtopic.title}
                </div>
              </Link>
            )}
          </div>
        </footer>
      </article>

      {/* Desktop Right "On This Page" Sticky Outline */}
      <aside className="no-print hidden xl:block xl:col-span-3 sticky top-20 space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            On This Page
          </div>
          <nav className="space-y-1.5">
            {subtopic.sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="block rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-teal-50 hover:text-teal-800 transition dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-teal-300"
              >
                {renderInlineText(sec.title)}
              </a>
            ))}
          </nav>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
            Key Terms Covered
          </div>
          <div className="flex flex-wrap gap-1.5">
            {subtopic.keywords.slice(0, 8).map((kw) => (
              <Link
                key={kw}
                to={`/search?q=${encodeURIComponent(kw)}`}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 hover:bg-teal-100 hover:text-teal-900 dark:bg-slate-800 dark:text-slate-300"
              >
                {kw}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
