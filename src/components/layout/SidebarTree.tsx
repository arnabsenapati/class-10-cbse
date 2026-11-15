import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookMarked,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Circle,
  Dna,
  Feather,
  FlaskConical,
  Globe,
  Home,
  PanelLeftClose,
  Search,
  Zap,
} from 'lucide-react';
import { SUBJECTS, buildSubtopicPath } from '../../data/registry';

interface SidebarTreeProps {
  completedSubtopics: string[];
  onNavigate?: () => void;
  onCollapseDesktop?: () => void;
}

export function SidebarTree({
  completedSubtopics,
  onNavigate,
  onCollapseDesktop,
}: SidebarTreeProps) {
  const location = useLocation();
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({});
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});

  const toggleSubject = (slug: string) => {
    setExpandedSubjects((prev) => ({ ...prev, [slug]: !(prev[slug] ?? false) }));
  };

  const toggleTopic = (slug: string) => {
    setExpandedTopics((prev) => ({ ...prev, [slug]: !(prev[slug] ?? false) }));
  };

  return (
    <div className="flex flex-col h-full py-4 px-3 space-y-5 overflow-y-auto">
      {onCollapseDesktop && (
        <div className="flex items-center justify-between px-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
            Navigation
          </span>
          <button
            type="button"
            onClick={onCollapseDesktop}
            title="Collapse left sidebar"
            aria-label="Collapse left sidebar"
            className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition cursor-pointer dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <PanelLeftClose className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Core Navigation */}
      <div className="space-y-1">
        <Link
          to="/"
          onClick={onNavigate}
          className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold transition ${
            location.pathname === '/'
              ? 'bg-teal-700 text-white shadow-xs'
              : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
          }`}
        >
          <Home className="h-4 w-4" />
          Study Dashboard
        </Link>
        <Link
          to="/search"
          onClick={onNavigate}
          className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold transition ${
            location.pathname === '/search'
              ? 'bg-teal-700 text-white shadow-xs'
              : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
          }`}
        >
          <Search className="h-4 w-4" />
          Search Curriculum
        </Link>
        <Link
          to="/glossary"
          onClick={onNavigate}
          className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold transition ${
            location.pathname === '/glossary'
              ? 'bg-teal-700 text-white shadow-xs'
              : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
          }`}
        >
          <BookMarked className="h-4 w-4" />
          Glossary &amp; Cheat Sheet
        </Link>
      </div>

      {/* Subject > Topic > Subtopic Tree */}
      <div className="space-y-3">
        <div className="px-2 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
          Subject › Topic › Subtopic
        </div>

        {SUBJECTS.map((subject) => {
          const isSubjectOpen = expandedSubjects[subject.slug] ?? false;
          const totalSubs = subject.topics.reduce(
            (acc, t) => acc + t.subtopics.length,
            0
          );
          const doneSubs = subject.topics.reduce(
            (acc, t) =>
              acc +
              t.subtopics.filter((st) => completedSubtopics.includes(st.id)).length,
            0
          );

          return (
            <div key={subject.id} className="space-y-1.5">
              {/* Subject Header */}
              <div className="flex items-center justify-between rounded-xl bg-slate-100/80 px-2.5 py-2 dark:bg-slate-800/70">
                <Link
                  to={`/subject/${subject.slug}`}
                  onClick={onNavigate}
                  className="flex items-center gap-2 text-xs font-extrabold text-slate-900 hover:text-teal-700 dark:text-white dark:hover:text-teal-400"
                >
                  {subject.slug === 'physics' ? (
                    <Zap className="h-4 w-4 text-cyan-600 shrink-0" />
                  ) : subject.slug === 'chemistry' ? (
                    <FlaskConical className="h-4 w-4 text-violet-600 shrink-0" />
                  ) : subject.slug === 'mathematics' ? (
                    <Calculator className="h-4 w-4 text-blue-600 shrink-0" />
                  ) : subject.slug === 'social-science' ? (
                    <Globe className="h-4 w-4 text-rose-600 shrink-0" />
                  ) : subject.slug === 'english' ? (
                    <BookOpen className="h-4 w-4 text-indigo-600 shrink-0" />
                  ) : subject.slug === 'hindi' ? (
                    <Feather className="h-4 w-4 text-amber-600 shrink-0" />
                  ) : (
                    <Dna className="h-4 w-4 text-teal-600 shrink-0" />
                  )}
                  <span>{subject.name}</span>
                  <span className="rounded bg-white px-1.5 py-0.5 text-[10px] font-bold text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                    {doneSubs}/{totalSubs}
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => toggleSubject(subject.slug)}
                  aria-label={`Toggle ${subject.name}`}
                  className="p-0.5 text-slate-500 hover:text-slate-900 cursor-pointer dark:hover:text-white"
                >
                  {isSubjectOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Topics */}
              {isSubjectOpen && (
                <div className="pl-2 space-y-2 border-l-2 border-slate-200 ml-3 dark:border-slate-800">
                  {subject.topics.map((topic) => {
                    const isTopicOpen = expandedTopics[topic.slug] ?? false;
                    const topicPath = `/subject/${subject.slug}/${topic.slug}`;
                    const topicActive = location.pathname === topicPath;

                    return (
                      <div key={topic.id} className="space-y-1">
                        <div className="flex items-start justify-between gap-1">
                          <Link
                            to={topicPath}
                            onClick={onNavigate}
                            className={`flex-1 rounded-lg px-2 py-1.5 text-xs font-bold leading-snug transition ${
                              topicActive
                                ? 'bg-teal-50 text-teal-900 dark:bg-teal-950/60 dark:text-teal-300'
                                : 'text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/60'
                            }`}
                          >
                            <span className="text-teal-700 dark:text-teal-400 mr-1">
                              {topic.order}.
                            </span>
                            {topic.title}
                          </Link>
                          <button
                            type="button"
                            onClick={() => toggleTopic(topic.slug)}
                            aria-label={`Toggle topic ${topic.title}`}
                            className="mt-1 p-1 text-slate-400 hover:text-slate-700 cursor-pointer dark:hover:text-slate-200"
                          >
                            {isTopicOpen ? (
                              <ChevronDown className="h-3.5 w-3.5" />
                            ) : (
                              <ChevronRight className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>

                        {/* Subtopics */}
                        {isTopicOpen && (
                          <div className="pl-2.5 space-y-0.5">
                            {topic.subtopics.map((sub) => {
                              const subPath = buildSubtopicPath(
                                subject.slug,
                                topic.slug,
                                sub.slug
                              );
                              const active = location.pathname === subPath;
                              const done = completedSubtopics.includes(sub.id);

                              return (
                                <Link
                                  key={sub.id}
                                  to={subPath}
                                  onClick={onNavigate}
                                  className={`flex items-start gap-2 rounded-lg px-2 py-1.5 text-xs leading-snug transition ${
                                    active
                                      ? 'bg-teal-700 text-white font-semibold shadow-xs'
                                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-200'
                                  }`}
                                >
                                  {done ? (
                                    <CheckCircle2
                                      className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${
                                        active
                                          ? 'text-emerald-200'
                                          : 'text-emerald-600 dark:text-emerald-400'
                                      }`}
                                    />
                                  ) : (
                                    <Circle
                                      className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${
                                        active ? 'text-teal-200' : 'text-slate-300 dark:text-slate-600'
                                      }`}
                                    />
                                  )}
                                  <span>{sub.title}</span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
