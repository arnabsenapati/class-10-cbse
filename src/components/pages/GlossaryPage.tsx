import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  Calculator,
  Dna,
  Feather,
  FlaskConical,
  Globe,
  Printer,
  Search,
  Zap,
} from 'lucide-react';
import { ALL_GLOSSARY_TERMS, buildSubtopicPath } from '../../data/registry';
import { GlossaryTerm } from '../../types/curriculum';

const PHYSICS_CATEGORIES: GlossaryTerm['category'][] = [
  'Physics — Light: Reflection & Mirrors',
  'Physics — Refraction, Lenses & Human Eye',
  'Physics — Electricity & Circuits',
  'Physics — Magnetism & Domestic Circuits',
];

const CHEMISTRY_CATEGORIES: GlossaryTerm['category'][] = [
  'Chemistry — Reactions, Redox & Corrosion',
  'Chemistry — Acids, Bases, pH & Salts',
  'Chemistry — Metals, Ionic Bonds & Metallurgy',
  'Chemistry — Carbon, Isomers & Functional Groups',
];

const MATH_CATEGORIES: GlossaryTerm['category'][] = [
  'Maths — Number Systems & Algebra',
  'Maths — Coordinate Geometry',
  'Maths — Geometry Theorems (Triangles & Circles)',
  'Maths — Trigonometry & Identities',
  'Maths — Mensuration (Circles & Solids)',
  'Maths — Statistics, Probability & Anti-Slip Rules',
];

const SST_CATEGORIES: GlossaryTerm['category'][] = [
  'Economics — Indicators & Formulas',
  'Economics — Money, Credit & G20',
  'Civics — Constitution & Federalism',
  'Civics — Parties & Democracy',
  'History — Nationalism & Treaties',
  'Geography — Resources, Crops & Maps',
];

const ENGLISH_CATEGORIES: GlossaryTerm['category'][] = [
  'Poetic & Literary Devices',
  'First Flight — Prose Vocab',
  'First Flight — Poetry Vocab',
  'Footprints — Supplementary Vocab',
  'Tone & Mood Descriptors',
  'Grammar & Writing Rules',
];

const BIOLOGY_CATEGORIES: GlossaryTerm['category'][] = [
  'Biology — Life Processes (Ch 5)',
  'Biology — Control & Coordination (Ch 6)',
  'Biology — Reproduction (Ch 7)',
  'Basics',
  'Alleles & Genes',
  'Punnett & Crosses',
  'Mendel Laws',
  'CBSE Exam',
  'Biology — Our Environment (Ch 13)',
];

const HINDI_CATEGORIES: GlossaryTerm['category'][] = [
  'सधुक्कड़ी व ब्रज शब्द',
  'तत्सम व साहित्यिक शब्द',
  'उर्दू-फ़ारसी काव्य शब्द',
  'काव्य-प्रतीक व अलंकार',
  'गद्य व कथा शब्दावली',
  'व्याकरण व लेखन शब्दावली',
];

type SubjectFilter =
  | 'all'
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'mathematics'
  | 'social-science'
  | 'english'
  | 'hindi';

export function GlossaryPage() {
  const [subjectFilter, setSubjectFilter] = useState<SubjectFilter>('all');
  const [filterText, setFilterText] = useState('');
  const [category, setCategory] = useState<'All' | GlossaryTerm['category']>('All');

  const categories = useMemo<('All' | GlossaryTerm['category'])[]>(() => {
    if (subjectFilter === 'physics') return ['All', ...PHYSICS_CATEGORIES];
    if (subjectFilter === 'chemistry') return ['All', ...CHEMISTRY_CATEGORIES];
    if (subjectFilter === 'mathematics') return ['All', ...MATH_CATEGORIES];
    if (subjectFilter === 'social-science') return ['All', ...SST_CATEGORIES];
    if (subjectFilter === 'english') return ['All', ...ENGLISH_CATEGORIES];
    if (subjectFilter === 'biology') return ['All', ...BIOLOGY_CATEGORIES];
    if (subjectFilter === 'hindi') return ['All', ...HINDI_CATEGORIES];
    return [
      'All',
      ...PHYSICS_CATEGORIES,
      ...CHEMISTRY_CATEGORIES,
      ...BIOLOGY_CATEGORIES,
      ...MATH_CATEGORIES,
      ...SST_CATEGORIES,
      ...ENGLISH_CATEGORIES,
      ...HINDI_CATEGORIES,
    ];
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
            Science Code 086 (Physics + Chemistry + Biology) + Mathematics Standard (041) + Social Science (087) + English (184) + Hindi Course B (085)
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
            key: 'physics' as const,
            label: `Physics — Ch 9–12 (${
              ALL_GLOSSARY_TERMS.filter((t) => t.subtopicPath.subjectSlug === 'physics').length
            })`,
          },
          {
            key: 'chemistry' as const,
            label: `Chemistry — Ch 1–4 (${
              ALL_GLOSSARY_TERMS.filter((t) => t.subtopicPath.subjectSlug === 'chemistry').length
            })`,
          },
          {
            key: 'biology' as const,
            label: `Biology — Ch 5–8, 13 (${
              ALL_GLOSSARY_TERMS.filter((t) => t.subtopicPath.subjectSlug === 'biology').length
            })`,
          },
          {
            key: 'mathematics' as const,
            label: `Mathematics — Code 041 (${
              ALL_GLOSSARY_TERMS.filter((t) => t.subtopicPath.subjectSlug === 'mathematics').length
            })`,
          },
          {
            key: 'social-science' as const,
            label: `Social Science — Code 087 (${
              ALL_GLOSSARY_TERMS.filter((t) => t.subtopicPath.subjectSlug === 'social-science').length
            })`,
          },
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
                ? tab.key === 'physics'
                  ? 'bg-cyan-600 text-white'
                  : tab.key === 'chemistry'
                  ? 'bg-violet-600 text-white'
                  : tab.key === 'mathematics'
                  ? 'bg-blue-600 text-white'
                  : tab.key === 'social-science'
                  ? 'bg-rose-600 text-white'
                  : tab.key === 'english'
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

      {/* Physics (Code 086 — 25M) Cheat Box */}
      {(subjectFilter === 'all' || subjectFilter === 'physics') && (
        <section className="print-avoid-break rounded-2xl border border-cyan-200 bg-cyan-50/70 p-5 dark:border-cyan-900/60 dark:bg-cyan-950/20">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-cyan-900 dark:text-cyan-300 mb-3 flex items-center gap-1.5">
            <Zap className="h-4 w-4" /> Physics (Ch 9–12 — 25 Marks) — 4 Exam Scoring Rules
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: '1. Sign-Shield Rule',
                val: 'u < 0 Always',
                sub: 'Concave f < 0; Convex f > 0. Mirror: 1/v + 1/u, m = −v/u. Lens: 1/v − 1/u, m = +v/u.',
              },
              {
                label: '2. Power & Eye Defects',
                val: 'P = 100 / f(cm)',
                sub: 'Always convert f to metres for Dioptre! Myopia = Concave (−D); Hypermetropia = Convex (+D).',
              },
              {
                label: '3. Graphs & Resistivity',
                val: 'R = ρL/A • 4R',
                sub: 'Check axes: V–I slope = R; I–V slope = 1/R. Stretching wire to 2L (vol. const) makes R = 4R.',
              },
              {
                label: '4. Fleming & Scope',
                val: 'e⁻ Opp. to I',
                sub: 'Electron beam flips conventional current I! Deleted: Motor, EMI, Fleming Right-Hand, Generator.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white border border-cyan-200 p-3 dark:bg-slate-900 dark:border-slate-800"
              >
                <div className="text-[11px] font-bold text-slate-500">{item.label}</div>
                <div className="mt-1 text-base font-extrabold text-cyan-700 dark:text-cyan-300">
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

      {/* Chemistry (Code 086 — 25M) Cheat Box */}
      {(subjectFilter === 'all' || subjectFilter === 'chemistry') && (
        <section className="print-avoid-break rounded-2xl border border-violet-200 bg-violet-50/70 p-5 dark:border-violet-900/60 dark:bg-violet-950/20">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-violet-900 dark:text-violet-300 mb-3 flex items-center gap-1.5">
            <FlaskConical className="h-4 w-4" /> Chemistry (Ch 1–4 — 25 Marks) — 4 Exam Scoring Rules
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: '1. Gases & Precipitates',
                val: 'H₂:O₂ = 2:1',
                sub: 'Brown NO₂ fumes, Golden PbI₂ ppt, White BaSO₄, Limewater milky CaCO₃ → excess soluble Ca(HCO₃)₂.',
              },
              {
                label: '2. Acid & Salt Rules',
                val: 'Acid → Water',
                sub: 'Always add Acid slowly to Water. Chlor-Alkali (NaCl+H₂O) yields NaOH, Cl₂(anode) & H₂(cathode).',
              },
              {
                label: '3. Metal Exceptions',
                val: 'Al₂O₃, ZnO, HNO₃',
                sub: 'Amphoteric oxides react with both acid & base. Only Mg/Mn give H₂ with very dil. HNO₃.',
              },
              {
                label: '4. Carbon & Scope',
                val: 'C₄H₁₀ → 2 Isomers',
                sub: 'Isomers start at Butane (2) & Pentane (3). Old Ch 5 Periodic Classification is DELETED!',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white border border-violet-200 p-3 dark:bg-slate-900 dark:border-slate-800"
              >
                <div className="text-[11px] font-bold text-slate-500">{item.label}</div>
                <div className="mt-1 text-base font-extrabold text-violet-700 dark:text-violet-300">
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

      {/* Mathematics Standard (Code 041) Cheat Box */}
      {(subjectFilter === 'all' || subjectFilter === 'mathematics') && (
        <section className="print-avoid-break rounded-2xl border border-blue-200 bg-blue-50/70 p-5 dark:border-blue-900/60 dark:bg-blue-950/20">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-3 flex items-center gap-1.5">
            <Calculator className="h-4 w-4" /> Mathematics Standard (Code 041) — 4 Anti-Silly-Mistake Scoring Rules
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: '1. Line-1 Given & d/2 Shield',
                val: 'Convert r = d/2 First',
                sub: 'Copy Given data cleanly before writing a formula; convert diameter d → radius r immediately.',
              },
              {
                label: '2. Bracket Everything Negative',
                val: '−(b), −(5 + x), (−b)²',
                sub: 'Never drop brackets around negative b, negative c, or subtracted binomials in Ch 2, 4, 7 & 13.',
              },
              {
                label: '3. Factor π & Cancel First',
                val: 'Keep π Symbolic',
                sub: 'Factor πr / πr² and divide by HCF or common factors BEFORE doing multi-digit multiplication.',
              },
              {
                label: '4. Lock Table Arrows (Ch 13)',
                val: 'f₁ vs 2f₁ • cf Above',
                sub: 'Circle preceding cf one row above median f; never drop "2" in Mode denominator 2f₁ − f₀ − f₂.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white border border-blue-200 p-3 dark:bg-slate-900 dark:border-slate-800"
              >
                <div className="text-[11px] font-bold text-slate-500">{item.label}</div>
                <div className="mt-1 text-base font-extrabold text-blue-700 dark:text-blue-300">
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

      {/* Social Science (Code 087) Cheat Box */}
      {(subjectFilter === 'all' || subjectFilter === 'social-science') && (
        <section className="print-avoid-break rounded-2xl border border-rose-200 bg-rose-50/70 p-5 dark:border-rose-900/60 dark:bg-rose-950/20">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-rose-900 dark:text-rose-300 mb-3 flex items-center gap-1.5">
            <Globe className="h-4 w-4" /> Social Science (Code 087) — 4 CBSE Board Scoring Rules
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: '1. Bullet Point Rule',
                val: '2 / 3 / 5 Points',
                sub: '2M = 2 points (~40w) • 3M = 3 points (~60w) • 5M = 5 bold-headed points (~120w)',
              },
              {
                label: '2. Scope Guardrails',
                val: 'Strict Syllabus',
                sub: 'History Ch 3 (1–1.3 only) • Eco Ch 4 (What+Factors+G20) • Geo Ch 7 (Map Only)',
              },
              {
                label: '3. Data & Cartoon Lens',
                val: 'Graphs + Cartoons',
                sub: 'GDP vs. Employment, 85%/10% Credit chart, G20 African Union & Civics cartoons',
              },
              {
                label: '4. Guaranteed 5 Marks',
                val: 'Q37 Map (2M+3M)',
                sub: 'Ch 2 History (9 pins) + Geo Ch 1, 3, 4, 5, 6 & 7 (Ports & Airports)',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white border border-rose-200 p-3 dark:bg-slate-900 dark:border-slate-800"
              >
                <div className="text-[11px] font-bold text-slate-500">{item.label}</div>
                <div className="mt-1 text-base font-extrabold text-rose-700 dark:text-rose-300">
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

      {/* Quick Ratios & Rules Summary Box (Biology) */}
      {(subjectFilter === 'all' || subjectFilter === 'biology') && (
        <section className="print-avoid-break rounded-2xl border border-teal-200 bg-teal-50/70 p-5 dark:border-teal-900 dark:bg-teal-950/30">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-teal-900 dark:text-teal-300 mb-3 flex items-center gap-1.5">
            <Dna className="h-4 w-4" /> Biology (Ch 5, 6, 7, 8 &amp; 13 — 30 Marks) — Key Ratios &amp; Board Numbers
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Ch 5 Heart & Nephron', val: 'LV Thickest • 100% Glucose', sub: 'Double circulation + Selective reabsorption of glucose/water' },
              { label: 'Ch 6 & 7 Pathways', val: 'Synapse & Oviduct', sub: 'Chemical gap in neurons; Fertilization in Fallopian tube' },
              { label: 'Ch 8 Genetics Ratios', val: '3:1 | 1:2:1 | 9:3:3:1', sub: 'Test cross 1:1 | Human sex XX × XY = 50:50' },
              { label: 'Ch 13 Energy & Ozone', val: '1% Sun → 10% Trophic', sub: '90% lost as heat; DDT biomagnifies; 1987 Montreal Protocol' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white border border-teal-200 p-3 dark:bg-slate-900 dark:border-slate-800"
              >
                <div className="text-[11px] font-bold text-slate-500">{item.label}</div>
                <div className="mt-1 font-mono text-base font-extrabold text-teal-700 dark:text-teal-400">
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
            placeholder="Filter terms (e.g., Snell, Ohm, Fleming, Chlor-Alkali, Micelle, Nephron, Auxin, allele)..."
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
