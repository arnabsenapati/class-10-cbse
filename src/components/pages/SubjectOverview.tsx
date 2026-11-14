import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Dna,
  Feather,
} from 'lucide-react';
import { buildSubtopicPath, getSubjectBySlug } from '../../data/registry';

interface SubjectOverviewProps {
  completedSubtopics: string[];
}

export function SubjectOverview({ completedSubtopics }: SubjectOverviewProps) {
  const { subjectSlug = '' } = useParams();
  const subject = getSubjectBySlug(subjectSlug);

  if (!subject) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-lg font-bold">Subject Not Found</h2>
        <Link to="/" className="mt-3 inline-block text-sm font-bold text-teal-700 underline">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  const totalSubs = subject.topics.reduce((s, t) => s + t.subtopics.length, 0);
  const doneSubs = subject.topics.reduce(
    (s, t) => s + t.subtopics.filter((st) => completedSubtopics.includes(st.id)).length,
    0
  );

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <nav className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
        <Link to="/" className="hover:text-teal-700 dark:hover:text-teal-400">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-800 dark:text-slate-200">{subject.name}</span>
      </nav>

      <header className="rounded-2xl border border-teal-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white ${
                subject.slug === 'hindi' ? 'bg-amber-600' : 'bg-teal-700'
              }`}
            >
              {subject.slug === 'hindi' ? (
                <Feather className="h-6 w-6" />
              ) : (
                <Dna className="h-6 w-6" />
              )}
            </span>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                {subject.board} • Subject Overview
              </div>
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {subject.name}
              </h1>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 px-4 py-2 text-xs font-bold text-teal-900 dark:bg-teal-950 dark:text-teal-300">
            Completed: {doneSubs} / {totalSubs} Subtopics
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          {subject.description}
        </p>
      </header>

      <div className="space-y-4">
        {subject.topics.map((topic) => (
          <div
            key={topic.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-bold text-teal-700 dark:text-teal-400">
                  Topic {topic.order} • {topic.ncertChapter}
                </span>
                <Link
                  to={`/subject/${subject.slug}/${topic.slug}`}
                  className="block text-lg font-extrabold text-slate-900 hover:text-teal-700 dark:text-white"
                >
                  {topic.title}
                </Link>
              </div>
              <Link
                to={`/subject/${subject.slug}/${topic.slug}`}
                className="text-xs font-bold text-teal-700 hover:underline dark:text-teal-400"
              >
                Open Topic →
              </Link>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
              {topic.description}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {topic.subtopics.map((sub) => {
                const done = completedSubtopics.includes(sub.id);
                return (
                  <Link
                    key={sub.id}
                    to={buildSubtopicPath(subject.slug, topic.slug, sub.slug)}
                    className="group rounded-xl border border-slate-200 p-3.5 hover:border-teal-400 transition flex items-center justify-between gap-3 dark:border-slate-800"
                  >
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-400">
                        {sub.title}
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-500">
                        <span>{sub.difficulty}</span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {sub.estimatedMinutes} min
                        </span>
                      </div>
                    </div>
                    {done ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    ) : (
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-teal-600 shrink-0" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
