import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookMarked, Printer, Search } from 'lucide-react';
import { ALL_GLOSSARY_TERMS, buildSubtopicPath } from '../../data/registry';
import { GlossaryTerm } from '../../types/curriculum';

const CATEGORIES: ('All' | GlossaryTerm['category'])[] = [
  'All',
  'Basics',
  'Alleles & Genes',
  'Punnett & Crosses',
  'Mendel Laws',
  'CBSE Exam',
];

export function GlossaryPage() {
  const [filterText, setFilterText] = useState('');
  const [category, setCategory] = useState<'All' | GlossaryTerm['category']>('All');

  const terms = useMemo(() => {
    const q = filterText.trim().toLowerCase();
    return ALL_GLOSSARY_TERMS.filter((t) => {
      if (category !== 'All' && t.category !== category) return false;
      if (!q) return true;
      return (
        t.term.toLowerCase().includes(q) ||
        t.simpleMeaning.toLowerCase().includes(q) ||
        t.ncertDefinition.toLowerCase().includes(q) ||
        (t.symbol ?? '').toLowerCase().includes(q)
      );
    });
  }, [filterText, category]);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
            <BookMarked className="h-4 w-4" /> Rapid Revision Sheet
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
            Class 10 Genetics Glossary &amp; Ratio Cheat Sheet
          </h1>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="no-print inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
        >
          <Printer className="h-4 w-4" /> Print Revision Sheet
        </button>
      </header>

      {/* Quick Ratios Summary Box */}
      <section className="print-avoid-break rounded-2xl border border-teal-200 bg-teal-50/70 p-5 dark:border-teal-900 dark:bg-teal-950/30">
        <h2 className="text-sm font-extrabold uppercase tracking-wider text-teal-900 dark:text-teal-300 mb-3">
          Must-Memorize CBSE Board Ratios at a Glance
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Monohybrid F₂ Phenotypic', val: '3 : 1', sub: '3 Tall : 1 Dwarf' },
            { label: 'Monohybrid F₂ Genotypic', val: '1 : 2 : 1', sub: '1 TT : 2 Tt : 1 tt' },
            { label: 'Dihybrid F₂ Phenotypic', val: '9 : 3 : 3 : 1', sub: '2 parental + 2 recombinant' },
            { label: 'Test Cross / Human Sex', val: '1 : 1 (50:50)', sub: 'Tt × tt  |  XX × XY' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-white border border-teal-200 p-3 dark:bg-slate-900 dark:border-slate-800"
            >
              <div className="text-[11px] font-bold text-slate-500">{item.label}</div>
              <div className="mt-1 font-mono text-xl font-extrabold text-teal-700 dark:text-teal-400">
                {item.val}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Search & Category Filter */}
      <div className="no-print space-y-3">
        <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 flex items-center gap-2 dark:border-slate-800 dark:bg-slate-900">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Filter terms (e.g., allele, homozygous, independent assortment)..."
            className="flex-1 bg-transparent text-sm outline-none dark:text-white"
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                category === cat
                  ? 'bg-teal-700 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-teal-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {terms.map((t) => {
          const link = `${buildSubtopicPath(
            t.subtopicPath.subjectSlug,
            t.subtopicPath.topicSlug,
            t.subtopicPath.subtopicSlug
          )}${t.subtopicPath.sectionId ? `#${t.subtopicPath.sectionId}` : ''}`;

          return (
            <div
              key={t.id}
              className="print-avoid-break rounded-2xl border border-slate-200 bg-white p-4 space-y-2.5 flex flex-col justify-between dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {t.category}
                  </span>
                  {t.symbol && (
                    <span className="font-mono text-xs font-bold text-teal-700 dark:text-teal-400">
                      {t.symbol}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                  {t.term}
                </h3>
                <p className="text-xs font-semibold text-indigo-800 bg-indigo-50/70 rounded-lg px-2.5 py-1.5 dark:bg-indigo-950/40 dark:text-indigo-300">
                  In plain words: {t.simpleMeaning}
                </p>
                <p className="text-xs text-slate-700 leading-relaxed dark:text-slate-300">
                  <strong>NCERT Definition:</strong> {t.ncertDefinition}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  <strong>Example:</strong> {t.example}
                </p>
              </div>

              <div className="no-print pt-1">
                <Link
                  to={link}
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:underline dark:text-teal-400"
                >
                  Study full lesson <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
