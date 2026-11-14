import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Search, X } from 'lucide-react';
import { SearchResultKind } from '../../types/curriculum';
import {
  POPULAR_SEARCH_SUGGESTIONS,
  searchCurriculum,
} from '../../utils/search';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const FILTER_TABS: { key: SearchResultKind | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'subtopic', label: 'Subtopics' },
  { key: 'glossary', label: 'Key Terms' },
  { key: 'section', label: 'Sections' },
  { key: 'quiz', label: 'Quiz Questions' },
];

export function SearchModal({ open, onClose }: SearchModalProps) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [kind, setKind] = useState<SearchResultKind | 'all'>('all');
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (open) {
      setActiveIdx(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  const results = useMemo(() => {
    return searchCurriculum(query, { kind, limit: 20 });
  }, [query, kind]);

  useEffect(() => {
    setActiveIdx(0);
  }, [query, kind]);

  if (!open) return null;

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => (results.length > 0 ? (i + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) =>
        results.length > 0 ? (i - 1 + results.length) % results.length : 0
      );
    } else if (e.key === 'Enter' && results[activeIdx]) {
      e.preventDefault();
      handleSelect(results[activeIdx].path);
    }
  };

  return (
    <div
      className="no-print fixed inset-0 z-50 flex items-start justify-center bg-slate-950/60 backdrop-blur-xs p-3 sm:pt-16"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search curriculum"
    >
      <div
        className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden dark:border-slate-800 dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Input Bar */}
        <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
          <Search className="h-5 w-5 text-teal-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search any topic, allele, Punnett square, 9:3:3:1, or NCERT term..."
            className="flex-1 bg-transparent text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none dark:text-white"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="rounded-lg p-1 text-slate-400 hover:text-slate-700 cursor-pointer dark:hover:text-slate-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-2 py-1 text-[11px] font-bold text-slate-500 hover:bg-slate-100 cursor-pointer dark:border-slate-700 dark:text-slate-400"
          >
            ESC
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-100 bg-slate-50/70 px-4 py-2 dark:border-slate-800 dark:bg-slate-950/60">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setKind(tab.key)}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                kind === tab.key
                  ? 'bg-teal-700 text-white'
                  : 'text-slate-600 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results or Popular Suggestions */}
        <div className="max-h-[60vh] overflow-y-auto p-3">
          {!query.trim() ? (
            <div className="p-3 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Popular Searches (100% Offline)
              </div>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCH_SUGGESTIONS.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-900 transition cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-500">
              No matches found for <strong>"{query}"</strong>. Try searching{' '}
              <button
                type="button"
                onClick={() => setQuery('allele')}
                className="text-teal-700 underline cursor-pointer dark:text-teal-400"
              >
                allele
              </button>
              ,{' '}
              <button
                type="button"
                onClick={() => setQuery('monohybrid')}
                className="text-teal-700 underline cursor-pointer dark:text-teal-400"
              >
                monohybrid
              </button>
              , or{' '}
              <button
                type="button"
                onClick={() => setQuery('dihybrid')}
                className="text-teal-700 underline cursor-pointer dark:text-teal-400"
              >
                dihybrid
              </button>
              .
            </div>
          ) : (
            <div className="space-y-1.5">
              {results.map((hit, idx) => {
                const active = idx === activeIdx;
                return (
                  <button
                    key={hit.id}
                    type="button"
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => handleSelect(hit.path)}
                    className={`w-full text-left rounded-xl p-3 transition flex items-start justify-between gap-3 cursor-pointer ${
                      active
                        ? 'bg-teal-50 border border-teal-300 dark:bg-teal-950/60 dark:border-teal-700'
                        : 'border border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="min-w-0 space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded bg-teal-100 px-1.5 py-0.5 text-[10px] font-extrabold uppercase text-teal-800 dark:bg-teal-900 dark:text-teal-300">
                          {hit.badge}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 truncate dark:text-slate-400">
                          {hit.breadcrumb}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {hit.title}
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2 dark:text-slate-400">
                        {hit.snippet}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-400 shrink-0 mt-1" />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-4 py-2 text-[11px] text-slate-500 dark:border-slate-800 dark:bg-slate-950">
          <span>Use ↑ ↓ to navigate, Enter to open</span>
          <button
            type="button"
            onClick={() => {
              onClose();
              navigate(`/search${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ''}`);
            }}
            className="font-bold text-teal-700 hover:underline cursor-pointer dark:text-teal-400"
          >
            Open Full Search Page →
          </button>
        </div>
      </div>
    </div>
  );
}
