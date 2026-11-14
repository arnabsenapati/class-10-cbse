import { useState } from 'react';
import { ChevronLeft, ChevronRight, Dna, Sparkles } from 'lucide-react';

interface ZoomStep {
  level: string;
  title: string;
  scaleLabel: string;
  summary: string;
  ncertNote: string;
  visualType: 'cell' | 'nucleus' | 'chromosome' | 'dna' | 'protein';
}

const ZOOM_STEPS: ZoomStep[] = [
  {
    level: 'Step 1',
    title: 'Plant or Animal Cell',
    scaleLabel: '~10–50 µm',
    summary:
      'Every living organism is built from microscopic cells. Inside almost every cell lies a control center called the nucleus.',
    ncertNote:
      'Before cell division, the cell prepares an exact copy of its genetic blueprint so daughter cells inherit the instructions.',
    visualType: 'cell',
  },
  {
    level: 'Step 2',
    title: 'Nucleus & Chromosome Pairs (2n)',
    scaleLabel: '~5–10 µm',
    summary:
      'Inside the nucleus, thread-like structures called **chromosomes** carry hereditary data. Body cells keep them in matching pairs (e.g., 23 pairs = 46 in humans; 7 pairs = 14 in garden peas).',
    ncertNote:
      'One chromosome in every pair comes from the mother, and the matching partner comes from the father.',
    visualType: 'nucleus',
  },
  {
    level: 'Step 3',
    title: 'Homologous Chromosomes & Gene Locus',
    scaleLabel: 'Gene Band',
    summary:
      'Along each chromosome sit hundreds of specific positions (loci). One specific position holds the **gene for Stem Height** — on both the maternal and paternal chromosome!',
    ncertNote:
      'Because chromosomes come in pairs, every body cell holds **2 copies** of each gene (one pair of alleles, e.g., T and t).',
    visualType: 'chromosome',
  },
  {
    level: 'Step 4',
    title: 'DNA Segment = A Gene',
    scaleLabel: '~2 nm helix',
    summary:
      'Each chromosome is tightly coiled **DNA** (Deoxyribonucleic Acid). A **gene** is a specific functional section of DNA that carries the chemical code for making one protein.',
    ncertNote:
      'NCERT Definition: "A section of DNA that provides information for one protein is called the gene for that protein."',
    visualType: 'dna',
  },
  {
    level: 'Step 5',
    title: 'Protein / Enzyme → Hormone → Visible Trait!',
    scaleLabel: 'Macroscopic Trait',
    summary:
      'The gene builds an **enzyme** that produces plant growth hormone. An **efficient enzyme** (`T`) makes plenty of hormone → **Tall plant**; a **less-efficient enzyme** (`t`) makes little hormone → **Dwarf plant**.',
    ncertNote:
      'That is why genes do not directly "build height" — they control proteins/enzymes, which control hormones and body traits!',
    visualType: 'protein',
  },
];

export function CellToTraitExplorer() {
  const [stepIdx, setStepIdx] = useState(0);
  const current = ZOOM_STEPS[stepIdx];

  return (
    <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50/70 to-white p-4 sm:p-6 dark:border-teal-900/60 dark:from-slate-900 dark:to-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-teal-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white">
            <Dna className="h-4 w-4" />
          </span>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
              Zoom Ladder: Cell → Trait
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Click a stage or use Next to trace where genes live
            </p>
          </div>
        </div>
        <span className="rounded-full bg-teal-100 px-2.5 py-1 text-xs font-semibold text-teal-800 dark:bg-teal-950 dark:text-teal-300">
          {current.scaleLabel}
        </span>
      </div>

      {/* Step selector pills */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {ZOOM_STEPS.map((step, i) => (
          <button
            key={step.level}
            type="button"
            onClick={() => setStepIdx(i)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition cursor-pointer ${
              i === stepIdx
                ? 'bg-teal-700 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-teal-400 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
            }`}
          >
            {i + 1}. {step.visualType.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Main visual + explanation grid */}
      <div
        key={current.level}
        className="mt-5 grid gap-5 md:grid-cols-5 items-center animate-pop-in"
      >
        <div className="md:col-span-2 flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 min-h-[190px] dark:border-slate-700 dark:bg-slate-950">
          {current.visualType === 'cell' && (
            <svg viewBox="0 0 200 160" className="w-48 h-36" aria-label="Cell diagram">
              <rect x="20" y="18" width="160" height="124" rx="28" fill="#ccfbf1" stroke="#0f766e" strokeWidth="4" />
              <rect x="28" y="26" width="144" height="108" rx="22" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4 3" />
              <circle cx="100" cy="80" r="34" fill="#99f6e4" stroke="#0f766e" strokeWidth="3" />
              <circle cx="100" cy="80" r="10" fill="#0f766e" />
              <text x="100" y="130" textAnchor="middle" fontSize="11" fill="#0f766e" fontWeight="bold">
                Nucleus inside Cell
              </text>
            </svg>
          )}
          {current.visualType === 'nucleus' && (
            <svg viewBox="0 0 200 160" className="w-48 h-36" aria-label="Nucleus with chromosome pairs">
              <circle cx="100" cy="80" r="64" fill="#f0fdfa" stroke="#0f766e" strokeWidth="4" />
              <path d="M72 48 L80 112 M84 48 L76 112" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" />
              <path d="M116 48 L124 112 M128 48 L120 112" stroke="#d97706" strokeWidth="5" strokeLinecap="round" />
              <text x="78" y="130" textAnchor="middle" fontSize="9.5" fill="#0284c7" fontWeight="bold">Mom</text>
              <text x="122" y="130" textAnchor="middle" fontSize="9.5" fill="#d97706" fontWeight="bold">Dad</text>
            </svg>
          )}
          {current.visualType === 'chromosome' && (
            <svg viewBox="0 0 200 160" className="w-48 h-36" aria-label="Homologous chromosome pair with gene band">
              <rect x="64" y="20" width="22" height="112" rx="11" fill="#bae6fd" stroke="#0284c7" strokeWidth="2.5" />
              <rect x="114" y="20" width="22" height="112" rx="11" fill="#fde68a" stroke="#d97706" strokeWidth="2.5" />
              <rect x="64" y="64" width="22" height="16" fill="#0f766e" />
              <rect x="114" y="64" width="22" height="16" fill="#d97706" />
              <text x="75" y="76" textAnchor="middle" fontSize="11" fill="#ffffff" fontWeight="bold">T</text>
              <text x="125" y="76" textAnchor="middle" fontSize="11" fill="#ffffff" fontWeight="bold">t</text>
              <line x1="88" y1="72" x2="112" y2="72" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="100" y="148" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="bold">
                Same Locus = Allele Pair (Tt)
              </text>
            </svg>
          )}
          {current.visualType === 'dna' && (
            <svg viewBox="0 0 200 160" className="w-48 h-36" aria-label="DNA double helix gene section">
              <path d="M55 20 C55 55, 145 55, 145 80 C145 105, 55 105, 55 140" fill="none" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
              <path d="M145 20 C145 55, 55 55, 55 80 C55 105, 145 105, 145 140" fill="none" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" />
              <line x1="68" y1="36" x2="132" y2="36" stroke="#14b8a6" strokeWidth="4" />
              <line x1="72" y1="60" x2="128" y2="60" stroke="#f59e0b" strokeWidth="4" />
              <line x1="72" y1="100" x2="128" y2="100" stroke="#f59e0b" strokeWidth="4" />
              <line x1="68" y1="124" x2="132" y2="124" stroke="#14b8a6" strokeWidth="4" />
              <rect x="40" y="50" width="120" height="60" rx="8" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" />
              <text x="100" y="154" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="bold">
                1 Segment of DNA = 1 Gene
              </text>
            </svg>
          )}
          {current.visualType === 'protein' && (
            <div className="flex items-center justify-around w-full gap-2 text-center">
              <div className="flex flex-col items-center">
                <div className="w-6 h-20 rounded-t-full bg-teal-600 relative">
                  <div className="w-5 h-3 rounded-full bg-emerald-400 absolute -left-3 top-4 -rotate-12" />
                  <div className="w-5 h-3 rounded-full bg-emerald-400 absolute -right-3 top-8 rotate-12" />
                </div>
                <span className="mt-1.5 text-[11px] font-bold text-teal-800 dark:text-teal-300">
                  TT / Tt → Tall
                </span>
                <span className="text-[10px] text-slate-500">High Hormone</span>
              </div>
              <div className="text-xs font-bold text-slate-400">vs</div>
              <div className="flex flex-col items-center">
                <div className="w-5 h-9 mt-11 rounded-t-full bg-amber-600 relative">
                  <div className="w-4 h-2.5 rounded-full bg-amber-400 absolute -left-2.5 top-2" />
                </div>
                <span className="mt-1.5 text-[11px] font-bold text-amber-800 dark:text-amber-300">
                  tt → Dwarf
                </span>
                <span className="text-[10px] text-slate-500">Low Hormone</span>
              </div>
            </div>
          )}
        </div>

        <div className="md:col-span-3 space-y-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              {current.level} of {ZOOM_STEPS.length}
            </span>
            <h5 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
              {current.title}
            </h5>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {current.summary.replace(/\*\*(.*?)\*\*/g, '$1').replace(/`([^`]*)`/g, '$1')}
          </p>
          <div className="rounded-xl bg-teal-50 border border-teal-200 p-3 text-xs text-teal-900 dark:bg-teal-950/60 dark:border-teal-800 dark:text-teal-200 flex gap-2">
            <Sparkles className="h-4 w-4 shrink-0 mt-0.5 text-teal-600 dark:text-teal-400" />
            <span>{current.ncertNote}</span>
          </div>
        </div>
      </div>

      {/* Footer Prev / Next controls */}
      <div className="mt-5 flex items-center justify-between pt-3 border-t border-teal-100 dark:border-slate-800">
        <button
          type="button"
          onClick={() => setStepIdx((i) => Math.max(0, i - 1))}
          disabled={stepIdx === 0}
          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 disabled:opacity-40 hover:bg-slate-50 cursor-pointer disabled:cursor-not-allowed dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
        >
          <ChevronLeft className="h-3.5 w-3.5" /> Zoom Out
        </button>
        <div className="flex gap-1.5">
          {ZOOM_STEPS.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 w-2 rounded-full ${
                idx === stepIdx ? 'bg-teal-600' : 'bg-slate-300 dark:bg-slate-700'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setStepIdx((i) => Math.min(ZOOM_STEPS.length - 1, i + 1))}
          disabled={stepIdx === ZOOM_STEPS.length - 1}
          className="inline-flex items-center gap-1 rounded-lg bg-teal-700 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-40 hover:bg-teal-800 cursor-pointer disabled:cursor-not-allowed"
        >
          Zoom In <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
