import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Search, X } from 'lucide-react';
import { SearchResultKind } from '../../types/curriculum';
import {
  POPULAR_SEARCH_SUGGESTIONS,
  searchCurriculum,
} from '../../utils/search';

const KIND_FILTERS: { key: SearchResultKind | 'all'; label: string }[] = [
  { key: 'all', label: 'All Results' },
  { key: 'subtopic', label: 'Subtopics' },
  { key: 'glossary', label: 'Key Terms' },
  { key: 'section', label: 'Lesson Sections' },
  { key: 'topic', label: 'Topics' },
  { key: 'quiz', label: 'Quiz Bank' },
];

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initialQuery);
  const [kind, setKind] = useState<SearchResultKind | 'all'>('all');

  useEffect(() => {
    setQuery(searchParams.get('q') ?? '');
  }, [searchParams]);

  const handleQueryChange = (val: string) => {
    setQuery(val);
    if (val.trim()) {
      setSearchParams({ q: val }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  const results = useMemo(
    () => searchCurriculum(query, { kind, limit: 40 }),
    [query, kind]
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          Offline Curriculum Search
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Search across every Subject, Topic, Subtopic, Glossary Term, Ratio, and CBSE Board Question — works 100% offline.
        </p>
      </header>

      {/* Search Box */}
      <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xs flex items-center gap-3 dark:border-slate-800 dark:bg-slate-900">
        <Search className="h-5 w-5 text-teal-600 ml-2 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Try: allele, punnett square, monohybrid, 9:3:3:1, FOIL, test cross..."
          autoFocus
          className="flex-1 bg-transparent py-2 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
        />
        {query && (
          <button
            type="button"
            onClick={() => handleQueryChange('')}
            aria-label="Clear search"
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 cursor-pointer dark:hover:bg-slate-800"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-1.5">
        {KIND_FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setKind(f.key)}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              kind === f.key
                ? 'bg-teal-700 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:border-teal-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Quick Suggestions when empty */}
      {!query.trim() ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 dark:border-slate-800 dark:bg-slate-900">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Suggested Topics &amp; Terms to Search
          </div>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCH_SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => handleQueryChange(s)}
                className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-900 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="text-xs font-semibold text-slate-500">
            Found <strong>{results.length}</strong> match{results.length === 1 ? '' : 'es'} for "{query}"
          </div>

          {results.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900">
              No matches found. Try searching with fewer keywords or switching the filter tab to <strong>All Results</strong>.
            </div>
          ) : (
            results.map((hit) => (
              <Link
                key={hit.id}
                to={hit.path}
                className="block rounded-2xl border border-slate-200 bg-white p-4 hover:border-teal-400 hover:shadow-xs transition dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-extrabold uppercase text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                        {hit.badge}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {hit.breadcrumb}
                      </span>
                    </div>
                    <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
                      {hit.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      {hit.snippet}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 shrink-0 mt-1" />
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
