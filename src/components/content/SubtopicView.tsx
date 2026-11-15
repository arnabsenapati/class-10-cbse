import { type SyntheticEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowUpToLine,
  BookMarked,
  BookOpenText,
  Bookmark,
  Calculator,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  FlaskConical,
  GraduationCap,
  Languages,
  Layers,
  Maximize2,
  Minimize2,
  PanelRightClose,
  PanelRightOpen,
  PenLine,
  Printer,
  Quote,
  Sparkles,
  SpellCheck,
  Tags,
  Target,
  Trophy,
  X,
} from 'lucide-react';
import { getAdjacentSubtopics, getSubtopicBySlugs } from '../../data/registry';
import { LessonSection, WordAnnotation } from '../../types/curriculum';
import { BlockRenderer, renderInlineText } from './BlockRenderer';

interface SubtopicViewProps {
  subjectSlug: string;
  topicSlug: string;
  subtopicSlug: string;
  completedSubtopics: string[];
  bookmarkedSubtopics: string[];
  bestQuizScore?: { correct: number; total: number } | null;
  bestQuizScoresBySubject?: Record<string, { correct: number; total: number }>;
  rightRailCollapsed: boolean;
  isWideMode: boolean;
  onToggleComplete: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onVisitPath: (path: string) => void;
  onSaveQuizScore: (correct: number, total: number, subjectSlug?: string) => void;
  onToggleRightRail: () => void;
  onToggleWideMode: () => void;
}

function stripInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1');
}

function getSectionIcon(section: LessonSection, index: number) {
  const title = section.title;
  const labBlock = section.blocks.find((b) => b.type === 'lab');
  if (labBlock && labBlock.type === 'lab') {
    return labBlock.labId.includes('quiz') || /quiz/i.test(title)
      ? Trophy
      : FlaskConical;
  }
  if (
    section.blocks.some((b) => b.type === 'english-transcript') ||
    /transcript|अनुवाद|translation/i.test(title)
  ) {
    return Languages;
  }
  if (
    section.blocks.some((b) => b.type === 'chapter-word-bank') ||
    /word bank|शब्दार्थ|vocabulary|vocab/i.test(title)
  ) {
    return BookMarked;
  }
  if (
    section.blocks.some((b) => b.type === 'muhavre-list') ||
    /muhav|मुहावरे|idiom/i.test(title)
  ) {
    return Quote;
  }
  if (
    section.blocks.some((b) => b.type === 'samas-list') ||
    /samas|समास|grammar|व्याकरण|भाषा अध्ययन|poetic device/i.test(title)
  ) {
    return SpellCheck;
  }
  if (
    section.blocks.some((b) => b.type === 'hand-practice') ||
    /numerical|hand-practice|workout/i.test(title)
  ) {
    return Calculator;
  }
  if (
    section.blocks.some((b) => b.type === 'writing-sample') ||
    /writing|रचनात्मक|letter|paragraph/i.test(title)
  ) {
    return PenLine;
  }
  if (
    section.blocks.some((b) => b.type === 'notebook-mistake') ||
    /mistake|slip|trap|clinic|warning/i.test(title)
  ) {
    return AlertTriangle;
  }
  if (
    section.blocks.some((b) => b.type === 'poetic-stanza') ||
    /ncert पाठ|stanza|extract|word lens/i.test(title)
  ) {
    return BookOpenText;
  }
  if (
    section.blocks.some((b) => b.type === 'qa') ||
    /q&a|question|प्रश्न|board exam/i.test(title)
  ) {
    return GraduationCap;
  }
  if (
    section.blocks.some((b) => b.type === 'visual-diagram') ||
    /diagram|atlas|blueprint/i.test(title)
  ) {
    return Layers;
  }
  if (
    index === 0 ||
    section.blocks.some((b) => b.type === 'ncert-reference')
  ) {
    return Sparkles;
  }
  return FileText;
}

export function SubtopicView({
  subjectSlug,
  topicSlug,
  subtopicSlug,
  completedSubtopics,
  bookmarkedSubtopics,
  bestQuizScore,
  bestQuizScoresBySubject,
  rightRailCollapsed,
  isWideMode,
  onToggleComplete,
  onToggleBookmark,
  onVisitPath,
  onSaveQuizScore,
  onToggleRightRail,
  onToggleWideMode,
}: SubtopicViewProps) {
  const location = useLocation();
  const data = getSubtopicBySlugs(subjectSlug, topicSlug, subtopicSlug);
  const adjacent = getAdjacentSubtopics(subjectSlug, topicSlug, subtopicSlug);

  const [activeSectionId, setActiveSectionId] = useState<string | null>(
    () => data?.subtopic.sections[0]?.id ?? null
  );
  const [keyTermsOpen, setKeyTermsOpen] = useState(false);
  const [railTooltip, setRailTooltip] = useState<{
    text: string;
    centerY: number;
    rightOffset: number;
  } | null>(null);
  const keyTermsContainerRef = useRef<HTMLDivElement | null>(null);

  const subtopicWords = useMemo<WordAnnotation[]>(() => {
    if (!data) return [];
    const seen = new Set<string>();
    const list: WordAnnotation[] = [];
    for (const sec of data.subtopic.sections) {
      for (const blk of sec.blocks) {
        if (blk.type === 'poetic-stanza') {
          for (const w of blk.words) {
            const key = w.word.trim();
            if (!seen.has(key)) {
              seen.add(key);
              list.push(w);
            }
          }
        }
      }
    }
    return list;
  }, [data]);

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

  useEffect(() => {
    setKeyTermsOpen(false);
    setRailTooltip(null);
    const firstId = data?.subtopic.sections[0]?.id ?? null;
    const hashId = location.hash ? location.hash.slice(1) : null;
    const hasHash =
      hashId !== null && data?.subtopic.sections.some((s) => s.id === hashId);
    setActiveSectionId(hasHash ? hashId : firstId);
  }, [data, location.hash]);

  useEffect(() => {
    setRailTooltip(null);
    if (!rightRailCollapsed) {
      setKeyTermsOpen(false);
    }
  }, [rightRailCollapsed]);

  useEffect(() => {
    const sections = data?.subtopic.sections;
    if (!sections || sections.length === 0) return;

    let rafId = 0;
    const updateActive = () => {
      rafId = 0;
      let currentId = sections[0].id;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && el.getBoundingClientRect().top <= 140) {
          currentId = sec.id;
        }
      }
      setActiveSectionId((prev) => (prev === currentId ? prev : currentId));
    };

    const handleScrollOrResize = () => {
      setRailTooltip(null);
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateActive);
      }
    };

    updateActive();
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [data]);

  useEffect(() => {
    if (!keyTermsOpen) return;
    const handlePointerDown = (e: MouseEvent) => {
      if (
        keyTermsContainerRef.current &&
        !keyTermsContainerRef.current.contains(e.target as Node)
      ) {
        setKeyTermsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setKeyTermsOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyTermsOpen]);

  const scrollToSection = useCallback((secId: string) => {
    const el = document.getElementById(secId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.history.replaceState(null, '', `#${secId}`);
    setActiveSectionId(secId);
  }, []);

  const showRailTooltip = useCallback(
    (e: SyntheticEvent<HTMLElement>, text: string) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setRailTooltip({
        text,
        centerY: rect.top + rect.height / 2,
        rightOffset: window.innerWidth - rect.left + 10,
      });
    },
    []
  );

  const hideRailTooltip = useCallback(() => {
    setRailTooltip(null);
  }, []);

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
    <div className={`flex items-start ${rightRailCollapsed ? 'gap-3 sm:gap-5' : 'gap-8'}`}>
      <article className="flex-1 min-w-0 space-y-6">
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
                onClick={onToggleWideMode}
                aria-pressed={isWideMode}
                title={
                  isWideMode
                    ? 'Exit Wide View — restore left curriculum & full right outline'
                    : 'Wide View — hide left sidebar & collapse right outline to icons'
                }
                className={`hidden lg:inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                  isWideMode
                    ? 'border-teal-400 bg-teal-50 text-teal-800 hover:bg-teal-100 dark:border-teal-700 dark:bg-teal-950/60 dark:text-teal-200 dark:hover:bg-teal-900/70'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
                }`}
              >
                {isWideMode ? (
                  <>
                    <Minimize2 className="h-3.5 w-3.5" />
                    Exit Wide
                  </>
                ) : (
                  <>
                    <Maximize2 className="h-3.5 w-3.5" />
                    Wide View
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => onToggleBookmark(subtopic.id)}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark subtopic'}
                className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                  isBookmarked
                    ? 'border-amber-400 bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
                }`}
              >
                <Bookmark className={`h-3.5 w-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                {isBookmarked ? 'Saved' : 'Save'}
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
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
                    subtopicWords={subtopicWords}
                    bestQuizScore={bestQuizScore}
                    bestQuizScoresBySubject={bestQuizScoresBySubject}
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

      {/* Desktop Right "On This Page" Sticky Outline OR Collapsed Icon Rail */}
      {!rightRailCollapsed ? (
        <aside className="no-print hidden xl:block w-72 2xl:w-80 shrink-0 sticky top-20 space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                On This Page
              </div>
              <button
                type="button"
                onClick={onToggleRightRail}
                title="Collapse to icon rail"
                aria-label="Collapse On This Page to icon rail"
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-200"
              >
                <PanelRightClose className="h-4 w-4" />
              </button>
            </div>
            <nav className="space-y-1.5">
              {subtopic.sections.map((sec) => {
                const isActive = activeSectionId === sec.id;
                return (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(sec.id);
                    }}
                    className={`block rounded-lg px-2.5 py-1.5 text-xs transition ${
                      isActive
                        ? 'bg-teal-50 text-teal-800 font-semibold dark:bg-teal-950/60 dark:text-teal-300'
                        : 'font-medium text-slate-600 hover:bg-teal-50 hover:text-teal-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-teal-300'
                    }`}
                  >
                    {renderInlineText(sec.title)}
                  </a>
                );
              })}
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
                  className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 hover:bg-teal-100 hover:text-teal-900 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-teal-950/70 dark:hover:text-teal-200"
                >
                  {kw}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      ) : (
        <aside className="no-print hidden lg:flex w-12 shrink-0 sticky top-20 flex-col items-center">
          <div className="w-12 rounded-2xl border border-slate-200 bg-white/95 py-2 px-1.5 shadow-xs flex flex-col items-center gap-1.5 dark:border-slate-800 dark:bg-slate-900/95">
            <button
              type="button"
              onClick={onToggleRightRail}
              aria-label="Expand On This Page outline"
              onMouseEnter={(e) => showRailTooltip(e, "Expand 'On This Page' outline")}
              onFocus={(e) => showRailTooltip(e, "Expand 'On This Page' outline")}
              onMouseLeave={hideRailTooltip}
              onBlur={hideRailTooltip}
              className="hidden xl:inline-flex h-9 w-9 items-center justify-center rounded-xl text-slate-600 hover:bg-teal-50 hover:text-teal-800 transition cursor-pointer dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-teal-300"
            >
              <PanelRightOpen className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top of chapter"
              onMouseEnter={(e) => showRailTooltip(e, 'Scroll to top of chapter')}
              onFocus={(e) => showRailTooltip(e, 'Scroll to top of chapter')}
              onMouseLeave={hideRailTooltip}
              onBlur={hideRailTooltip}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition cursor-pointer dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <ArrowUpToLine className="h-4 w-4" />
            </button>

            <div className="h-px w-6 bg-slate-200 dark:bg-slate-800" />

            <nav
              aria-label="On this page sections"
              className="no-scrollbar flex flex-col items-center gap-1.5 max-h-[calc(100vh-14rem)] overflow-y-auto py-0.5"
            >
              {subtopic.sections.map((sec, idx) => {
                const SectionIcon = getSectionIcon(sec, idx);
                const cleanTitle = stripInlineMarkdown(sec.title);
                const isActive = activeSectionId === sec.id;

                return (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    aria-label={cleanTitle}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(sec.id);
                    }}
                    onMouseEnter={(e) => showRailTooltip(e, cleanTitle)}
                    onFocus={(e) => showRailTooltip(e, cleanTitle)}
                    onMouseLeave={hideRailTooltip}
                    onBlur={hideRailTooltip}
                    className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition cursor-pointer ${
                      isActive
                        ? 'bg-teal-700 text-white shadow-xs dark:bg-teal-600'
                        : 'text-slate-600 hover:bg-teal-50 hover:text-teal-800 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-teal-300'
                    }`}
                  >
                    <SectionIcon className="h-4 w-4" />
                    <span
                      className={`absolute -bottom-0.5 -right-0.5 min-w-[14px] h-3.5 rounded-full px-1 text-[9px] font-extrabold flex items-center justify-center leading-none ${
                        isActive
                          ? 'bg-white text-teal-800 dark:bg-slate-950 dark:text-teal-300'
                          : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {idx + 1}
                    </span>
                  </a>
                );
              })}
            </nav>

            {subtopic.keywords.length > 0 && (
              <>
                <div className="h-px w-6 bg-slate-200 dark:bg-slate-800" />
                <div ref={keyTermsContainerRef} className="relative">
                  <button
                    type="button"
                    aria-label="Key Terms Covered"
                    aria-expanded={keyTermsOpen}
                    onClick={() => {
                      setRailTooltip(null);
                      setKeyTermsOpen((open) => !open);
                    }}
                    onMouseEnter={(e) => {
                      if (!keyTermsOpen) showRailTooltip(e, 'Key Terms Covered');
                    }}
                    onFocus={(e) => {
                      if (!keyTermsOpen) showRailTooltip(e, 'Key Terms Covered');
                    }}
                    onMouseLeave={hideRailTooltip}
                    onBlur={hideRailTooltip}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-xl transition cursor-pointer ${
                      keyTermsOpen
                        ? 'bg-teal-700 text-white shadow-xs dark:bg-teal-600'
                        : 'text-slate-600 hover:bg-teal-50 hover:text-teal-800 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-teal-300'
                    }`}
                  >
                    <Tags className="h-4 w-4" />
                  </button>

                  {keyTermsOpen && (
                    <div className="absolute right-full bottom-0 mr-2.5 w-64 z-40 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xl dark:border-slate-700 dark:bg-slate-900">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                          Key Terms Covered
                        </span>
                        <button
                          type="button"
                          onClick={() => setKeyTermsOpen(false)}
                          aria-label="Close key terms"
                          className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer dark:hover:bg-slate-800 dark:hover:text-slate-200"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {subtopic.keywords.slice(0, 8).map((kw) => (
                          <Link
                            key={kw}
                            to={`/search?q=${encodeURIComponent(kw)}`}
                            onClick={() => setKeyTermsOpen(false)}
                            className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 hover:bg-teal-100 hover:text-teal-900 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-teal-950/70 dark:hover:text-teal-200"
                          >
                            {kw}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </aside>
      )}

      {rightRailCollapsed && railTooltip && (
        <div
          role="tooltip"
          style={{ top: railTooltip.centerY, right: railTooltip.rightOffset }}
          className="no-print fixed z-50 -translate-y-1/2 pointer-events-none max-w-xs sm:max-w-sm rounded-xl border border-slate-700 bg-slate-900/95 px-3 py-1.5 text-xs font-semibold text-white shadow-lg dark:border-slate-700 dark:bg-slate-800"
        >
          {railTooltip.text}
        </div>
      )}
    </div>
  );
}
