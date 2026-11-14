import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Clock, Target } from 'lucide-react';
import { buildSubtopicPath, getTopicBySlugs } from '../../data/registry';

interface TopicOverviewProps {
  completedSubtopics: string[];
}

export function TopicOverview({ completedSubtopics }: TopicOverviewProps) {
  const { subjectSlug = '', topicSlug = '' } = useParams();
  const data = getTopicBySlugs(subjectSlug, topicSlug);

  if (!data) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-lg font-bold">Topic Not Found</h2>
        <Link to="/" className="mt-3 inline-block text-sm font-bold text-teal-700 underline">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  const { subject, topic } = data;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <nav className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
        <Link to="/" className="hover:text-teal-700 dark:hover:text-teal-400">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link to={`/subject/${subject.slug}`} className="hover:text-teal-700 dark:hover:text-teal-400">
          {subject.name}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          Topic {topic.order}: {topic.title}
        </span>
      </nav>

      <header className="rounded-2xl border border-teal-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
          {subject.name} › Topic {topic.order} • {topic.ncertChapter}
        </div>
        <h1 className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white">
          {topic.title}
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {topic.description}
        </p>
      </header>

      <div className="space-y-4">
        {topic.subtopics.map((sub, idx) => {
          const path = buildSubtopicPath(subject.slug, topic.slug, sub.slug);
          const done = completedSubtopics.includes(sub.id);

          return (
            <div
              key={sub.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-700 dark:text-teal-400">
                    <span>Subtopic {topic.order}.{idx + 1}</span>
                    <span>•</span>
                    <span>{sub.difficulty}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 text-slate-500 font-medium">
                      <Clock className="h-3.5 w-3.5" /> {sub.estimatedMinutes} min
                    </span>
                  </div>
                  <h2 className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">
                    {sub.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {sub.subtitle}
                  </p>
                </div>

                {done && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" /> Completed
                  </span>
                )}
              </div>

              <div className="rounded-xl bg-slate-50 p-3.5 dark:bg-slate-950/70">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  <Target className="h-3.5 w-3.5 text-teal-600" /> Learning Objectives
                </div>
                <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 list-disc pl-4">
                  {sub.learningObjectives.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end">
                <Link
                  to={path}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-teal-700 px-4 py-2 text-xs font-bold text-white hover:bg-teal-800 transition"
                >
                  {done ? 'Review Subtopic' : 'Start Subtopic'}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
