import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookMarked, BookOpen, Feather, Printer, Search } from 'lucide-react';
import { ALL_GLOSSARY_TERMS, buildSubtopicPath } from '../../data/registry';
import { GlossaryTerm } from '../../types/curriculum';

const ENGLISH_CATEGORIES: GlossaryTerm['category'][] = [
  'Poetic & Literary Devices',
  'First Flight — Prose Vocab',
  'First Flight — Poetry Vocab',
  'Footprints — Supplementary Vocab',
  'Tone & Mood Descriptors',
  'Grammar & Writing Rules',
];

const BIOLOGY_CATEGORIES: GlossaryTerm['category'][] = [
  'Basics',
  'Alleles & Genes',
  'Punnett & Crosses',
  'Mendel Laws',
  'CBSE Exam',
];

const HINDI_CATEGORIES: GlossaryTerm['category'][] = [
  'सधुक्कड़ी व ब्रज शब्द',
  'तत्सम व साहित्यिक शब्द',
  'उर्दू-फ़ारसी काव्य शब्द',
  'काव्य-प्रतीक व अलंकार',
  'गद्य व कथा शब्दावली',
  'व्याकरण व लेखन शब्दावली',
];

type SubjectFilter = 'all' | 'english' | 'hindi' | 'biology';

export function GlossaryPage() {
  const [subjectFilter, setSubjectFilter] = useState<SubjectFilter>('all');
  const [filterText, setFilterText] = useState('');
  const [category, setCategory] = useState<'All' | GlossaryTerm['category']>('All');

  const categories = useMemo<('All' | GlossaryTerm['category'])[]>(() => {
    if (subjectFilter === 'english') return ['All', ...ENGLISH_CATEGORIES];
    if (subjectFilter === 'biology') return ['All', ...BIOLOGY_CATEGORIES];
    if (subjectFilter === 'hindi') return ['All', ...HINDI_CATEGORIES];
    return ['All', ...ENGLISH_CATEGORIES, ...HINDI_CATEGORIES, ...BIOLOGY_CATEGORIES];
  }, [subjectFilter]);

  const terms = useMemo(() => {
    const q = filterText.trim().toLowerCase();
    return ALL_GLOSSARY_TERMS.filter((t) => {
      if (subjectFilter !== 'all' && t.subtopicPath.subjectSlug !== subjectFilter) {
        return false;
      }
      if (category !== 'All' && t.category !== category) return false;
      if (!q) return true;
      return (
        t.term.toLowerCase().includes(q) ||
        t.simpleMeaning.toLowerCase().includes(q) ||
        (t.englishMeaning ?? '').toLowerCase().includes(q) ||
        (t.grammarNote ?? '').toLowerCase().includes(q) ||
        t.ncertDefinition.toLowerCase().includes(q) ||
        t.example.toLowerCase().includes(q) ||
        (t.symbol ?? '').toLowerCase().includes(q)
      );
    });
  }, [filterText, category, subjectFilter]);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
            <BookMarked className="h-4 w-4" /> Rapid Revision Sheet
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
            Class 10 Multi-Subject Glossary &amp; Cheat Sheet
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            English Language &amp; Literature (Code 184) + Hindi Course B (Code 085) + Biology (Heredity &amp; Ratios)
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="no-print inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <Printer className="h-4 w-4" /> Print Revision Sheet
        </button>
      </header>

      {/* Subject Switcher */}
      <div className="no-print flex flex-wrap gap-2">
        {[
          { key: 'all' as const, label: `All Subjects (${ALL_GLOSSARY_TERMS.length})` },
          {
            key: 'english' as const,
            label: `English — Code 184 (${
              ALL_GLOSSARY_TERMS.filter((t) => t.subtopicPath.subjectSlug === 'english').length
            })`,
          },
          {
            key: 'hindi' as const,
            label: `Hindi Course B — संपूर्ण 80-अंक (${
              ALL_GLOSSARY_TERMS.filter((t) => t.subtopicPath.subjectSlug === 'hindi').length
            })`,
          },
          {
            key: 'biology' as const,
            label: `Biology — Heredity (${
              ALL_GLOSSARY_TERMS.filter((t) => t.subtopicPath.subjectSlug === 'biology').length
            })`,
          },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => {
              setSubjectFilter(tab.key);
              setCategory('All');
            }}
            className={`rounded-xl px-3.5 py-2 text-xs font-extrabold transition cursor-pointer ${
              subjectFilter === tab.key
                ? tab.key === 'english'
                  ? 'bg-indigo-600 text-white'
                  : tab.key === 'hindi'
                  ? 'bg-amber-600 text-white'
                  : 'bg-teal-700 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:border-teal-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* English (Code 184) Cheat Box */}
      {(subjectFilter === 'all' || subjectFilter === 'english') && (
        <section className="print-avoid-break rounded-2xl border border-indigo-200 bg-indigo-50/70 p-5 dark:border-indigo-900/60 dark:bg-indigo-950/20">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-indigo-900 dark:text-indigo-300 mb-3 flex items-center gap-1.5">
            <BookOpen className="h-4 w-4" /> English (Code 184) — 4 CBSE Board Scoring Rules
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: '1. 5-Mark RTC Rule',
                val: 'Quote + Tone',
                sub: 'Anchor every extract MCQ in textual proof & speaker attitude',
              },
              {
                label: '2. 3-Mark Short Answer',
                val: '40–50 Words',
                sub: '2M Content (3 value points) + 1M Expression; avoid plot retelling',
              },
              {
                label: '3. 6-Mark Competency',
                val: '100–120 Words',
                sub: 'Follow Diary/Speech/Dialogue format with cross-chapter links',
              },
              {
                label: '4. 7-Pillar Chapter Map',
                val: 'Full Coverage',
                sub: 'Arc • Extracts • Traits • Lang Vocab • Oral/Text Q&A • Bridges',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white border border-indigo-200 p-3 dark:bg-slate-900 dark:border-slate-800"
              >
                <div className="text-[11px] font-bold text-slate-500">{item.label}</div>
                <div className="mt-1 text-base font-extrabold text-indigo-700 dark:text-indigo-300">
                  {item.val}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Hindi Course B Cheat Box */}
      {(subjectFilter === 'all' || subjectFilter === 'hindi') && (
        <section className="print-avoid-break rounded-2xl border border-amber-200 bg-amber-50/70 p-5 dark:border-amber-900/60 dark:bg-amber-950/20">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-amber-900 dark:text-amber-300 mb-3 flex items-center gap-1.5">
            <Feather className="h-4 w-4" /> Hindi Course B (संपूर्ण 80-अंक पाठ्यक्रम: स्पर्श, संचयन, व्याकरण व लेखन) — 4 Exam Cheat Rules
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: '1. मानक हिंदी नियम',
                val: 'बाँणी → वाणी',
                sub: 'बोली शब्दों को उत्तर में मानक हिंदी में लिखें',
              },
              {
                label: '2. मुहावरा वाक्य नियम',
                val: 'मूल मुहावरा लिखें',
                sub: 'वाक्य प्रयोग में अर्थ नहीं, मुहावरा स्वयं आना चाहिए',
              },
              {
                label: '3. समास विग्रह नियम',
                val: 'विग्रह → भेद',
                sub: '‘पीताम्बर’ का भेद आपके लिखे विग्रह पर निर्भर है',
              },
              {
                label: '4. हर पाठ के 5 भाग',
                val: '5 Study Pillars',
                sub: 'शब्दार्थ • English Transcript • मुहावरे • समास • Q&A',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white border border-amber-200 p-3 dark:bg-slate-900 dark:border-slate-800"
              >
                <div className="text-[11px] font-bold text-slate-500">{item.label}</div>
                <div className="mt-1 text-base font-extrabold text-amber-800 dark:text-amber-300">
                  {item.val}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Quick Ratios Summary Box (Biology) */}
      {(subjectFilter === 'all' || subjectFilter === 'biology') && (
        <section className="print-avoid-break rounded-2xl border border-teal-200 bg-teal-50/70 p-5 dark:border-teal-900 dark:bg-teal-950/30">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-teal-900 dark:text-teal-300 mb-3">
            Must-Memorize CBSE Genetics Ratios at a Glance
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
      )}

      {/* Search & Category Filter */}
      <div className="no-print space-y-3">
        <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 flex items-center gap-2 dark:border-slate-800 dark:bg-slate-900">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Filter terms (e.g., भीर, अनामय, मदांध, allele, homozygous, independent assortment)..."
            className="flex-1 bg-transparent text-sm outline-none dark:text-white"
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
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
                  {t.englishMeaning ? ` (${t.englishMeaning})` : ''}
                </p>
                {t.grammarNote && (
                  <p className="text-[11px] font-bold text-amber-800 dark:text-amber-300">
                    Grammar / Exam Note: {t.grammarNote}
                  </p>
                )}
                <p className="text-xs text-slate-700 leading-relaxed dark:text-slate-300">
                  <strong>NCERT Context:</strong> {t.ncertDefinition}
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
