import { Fragment, ReactNode, useState } from 'react';
import {
  AlertTriangle,
  ArrowDown,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Eye,
  Lightbulb,
  PenLine,
  Scale,
  Sparkles,
  XCircle,
  Zap,
} from 'lucide-react';
import { CalloutVariant, ContentBlock } from '../../types/curriculum';
import { LabResolver } from '../labs/LabResolver';
import { ConceptDiagram } from '../visuals/GeneticsSvg';

export function renderInlineText(text: string): ReactNode[] {
  // Supports **bold**, *italic*, and `code` cleanly without unsafe HTML injection
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return tokens.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="font-bold text-slate-900 dark:text-white">
          {renderInlineText(part.slice(2, -2))}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={idx} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={idx}
          className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.88em] font-bold text-teal-800 dark:bg-slate-800 dark:text-teal-300"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <Fragment key={idx}>{part}</Fragment>;
  });
}

const CALLOUT_STYLES: Record<
  CalloutVariant,
  {
    wrapper: string;
    badge: string;
    icon: ReactNode;
    label: string;
  }
> = {
  ncert: {
    wrapper:
      'border-teal-300 bg-teal-50/70 dark:border-teal-800 dark:bg-teal-950/40',
    badge: 'text-teal-900 dark:text-teal-300',
    icon: <BookOpen className="h-4 w-4 text-teal-700 dark:text-teal-400" />,
    label: 'NCERT Core',
  },
  analogy: {
    wrapper:
      'border-indigo-300 bg-indigo-50/70 dark:border-indigo-800 dark:bg-indigo-950/40',
    badge: 'text-indigo-900 dark:text-indigo-300',
    icon: <Sparkles className="h-4 w-4 text-indigo-700 dark:text-indigo-400" />,
    label: 'Simple Analogy',
  },
  tip: {
    wrapper:
      'border-sky-300 bg-sky-50/70 dark:border-sky-800 dark:bg-sky-950/40',
    badge: 'text-sky-900 dark:text-sky-300',
    icon: <Lightbulb className="h-4 w-4 text-sky-700 dark:text-sky-400" />,
    label: 'Exam Shortcut',
  },
  trap: {
    wrapper:
      'border-rose-300 bg-rose-50/80 dark:border-rose-900 dark:bg-rose-950/40',
    badge: 'text-rose-900 dark:text-rose-300',
    icon: <AlertTriangle className="h-4 w-4 text-rose-700 dark:text-rose-400" />,
    label: 'Common Mistake Alert',
  },
  law: {
    wrapper:
      'border-amber-300 bg-amber-50/80 dark:border-amber-800 dark:bg-amber-950/40',
    badge: 'text-amber-900 dark:text-amber-300',
    icon: <Scale className="h-4 w-4 text-amber-700 dark:text-amber-400" />,
    label: 'Mendel’s Law',
  },
};

function QaAccordion({
  block,
}: {
  block: Extract<ContentBlock, { type: 'qa' }>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="print-avoid-break rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs dark:border-slate-800 dark:bg-slate-900">
      <div className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="inline-flex items-center rounded-md bg-teal-50 px-2 py-0.5 text-[11px] font-bold text-teal-800 dark:bg-teal-950 dark:text-teal-300">
            {block.tag}
          </span>
          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {block.marks} {block.marks === 1 ? 'Mark' : 'Marks'}
          </span>
        </div>

        <div className="text-sm font-semibold text-slate-900 whitespace-pre-line leading-relaxed dark:text-slate-100">
          {renderInlineText(block.question)}
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="no-print mt-3 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          {open ? (
            <>
              <ChevronUp className="h-3.5 w-3.5" /> Hide Board Answer
            </>
          ) : (
            <>
              <ChevronDown className="h-3.5 w-3.5" /> Show Model Answer &amp; Marking Scheme
            </>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-emerald-50/50 p-4 text-sm text-slate-800 space-y-2.5 dark:border-slate-800 dark:bg-emerald-950/20 dark:text-slate-200">
          <div className="text-xs font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-400">
            Model Answer
          </div>
          <div className="whitespace-pre-line leading-relaxed">
            {renderInlineText(block.answer)}
          </div>
          {block.markingTip && (
            <div className="rounded-lg bg-white/80 border border-emerald-200 px-3 py-2 text-xs text-emerald-900 dark:bg-slate-900 dark:border-emerald-900 dark:text-emerald-300">
              <strong>CBSE Examiner Tip:</strong> {renderInlineText(block.markingTip)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function DigDeeperAccordion({
  block,
}: {
  block: Extract<ContentBlock, { type: 'dig-deeper' }>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="print-avoid-break rounded-xl border border-slate-200 bg-slate-50/60 overflow-hidden dark:border-slate-800 dark:bg-slate-950/50">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-slate-100/80 transition cursor-pointer dark:hover:bg-slate-800/60"
      >
        <span className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
          <BookOpen className="h-4 w-4 text-teal-600 shrink-0" />
          <span>Dig Deeper (Board Detail): {renderInlineText(block.title)}</span>
        </span>
        {open ? (
          <ChevronUp className="h-4 w-4 text-slate-500 shrink-0" />
        ) : (
          <ChevronDown className="h-4 w-4 text-slate-500 shrink-0" />
        )}
      </button>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 space-y-2 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          <p className="leading-relaxed whitespace-pre-line">
            {renderInlineText(block.summary)}
          </p>
          {block.bullets && (
            <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm">
              {block.bullets.map((b, i) => (
                <li key={i} className="leading-relaxed">
                  {renderInlineText(b)}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function NotebookMistakeCard({
  block,
}: {
  block: Extract<ContentBlock, { type: 'notebook-mistake' }>;
}) {
  return (
    <div className="print-avoid-break rounded-2xl border border-rose-200 bg-amber-50/30 overflow-hidden shadow-xs dark:border-rose-900/60 dark:bg-slate-950">
      <div className="flex items-center justify-between border-b border-rose-100 bg-rose-50/70 px-4 py-2.5 dark:border-rose-900/50 dark:bg-rose-950/30">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-rose-800 dark:text-rose-300">
          <PenLine className="h-3.5 w-3.5" />
          Spot the Mistake — {block.studentName}’s Notebook
        </span>
        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
          {block.title}
        </span>
      </div>
      <div className="p-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-rose-300 bg-white p-3 dark:border-rose-900 dark:bg-slate-900">
          <div className="text-[11px] font-extrabold uppercase text-rose-600 mb-1">
            ✗ Student Wrote (Wrong)
          </div>
          <div className="font-mono text-sm font-bold text-rose-700 line-through decoration-2 dark:text-rose-400">
            {block.wrongWork}
          </div>
        </div>
        <div className="rounded-xl border border-emerald-300 bg-emerald-50/50 p-3 dark:border-emerald-900 dark:bg-emerald-950/30">
          <div className="text-[11px] font-extrabold uppercase text-emerald-700 dark:text-emerald-400 mb-1">
            ✓ Teacher’s Fix (Full Marks)
          </div>
          <div className="font-mono text-sm font-bold text-emerald-800 dark:text-emerald-300">
            {block.teacherFix}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 bg-white/70 px-4 py-2.5 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
        <strong>Why?</strong> {renderInlineText(block.whyWrong)}
      </div>
    </div>
  );
}

function CheckpointCard({
  block,
}: {
  block: Extract<ContentBlock, { type: 'checkpoint' }>;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  const toggleOption = (id: string) => {
    setChecked(false);
    if (block.multiSelect) {
      setSelected((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      );
    } else {
      setSelected([id]);
    }
  };

  const isCorrect =
    checked &&
    selected.length === block.correctIds.length &&
    block.correctIds.every((id) => selected.includes(id));

  return (
    <div className="no-print print-avoid-break rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50/70 to-white p-4 space-y-3 dark:border-teal-900/60 dark:from-slate-900 dark:to-slate-950">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-teal-800 dark:text-teal-400">
          <Zap className="h-3.5 w-3.5" /> 10-Second Checkpoint
        </span>
        {block.multiSelect && (
          <span className="text-[11px] font-semibold text-slate-500">
            Select all that apply
          </span>
        )}
      </div>

      <p className="text-sm font-bold text-slate-900 dark:text-white">
        {renderInlineText(block.prompt)}
      </p>

      <div className="flex flex-wrap gap-2">
        {block.options.map((opt) => {
          const picked = selected.includes(opt.id);
          const shouldBePicked = block.correctIds.includes(opt.id);
          let style = picked
            ? 'border-teal-600 bg-teal-600 text-white shadow-xs'
            : 'border-slate-200 bg-white text-slate-800 hover:border-teal-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200';
          if (checked) {
            if (picked && shouldBePicked) {
              style = 'border-emerald-600 bg-emerald-600 text-white';
            } else if (picked && !shouldBePicked) {
              style = 'border-rose-500 bg-rose-600 text-white';
            }
          }

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => toggleOption(opt.id)}
              className={`rounded-xl border-2 px-3.5 py-2 text-left transition cursor-pointer ${style}`}
            >
              <div className="font-mono text-sm font-extrabold">
                {opt.label}
              </div>
              {opt.sublabel && (
                <div className="text-[11px] opacity-85">{opt.sublabel}</div>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled={selected.length === 0}
          onClick={() => setChecked(true)}
          className="rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-white disabled:opacity-40 hover:bg-slate-800 cursor-pointer disabled:cursor-not-allowed dark:bg-teal-600 dark:hover:bg-teal-500"
        >
          Check Answer
        </button>

        {checked && (
          <div
            className={`flex items-center gap-1.5 text-xs font-semibold ${
              isCorrect
                ? 'text-emerald-700 dark:text-emerald-400'
                : 'text-rose-700 dark:text-rose-400'
            }`}
          >
            {isCorrect ? (
              <>
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>{renderInlineText(block.successMsg)}</span>
              </>
            ) : (
              <>
                <XCircle className="h-4 w-4 shrink-0" />
                <span>{renderInlineText(block.hintMsg)}</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function CrossFlowCard({
  block,
}: {
  block: Extract<ContentBlock, { type: 'cross-flow' }>;
}) {
  const maxStep = block.f2Summary ? 4 : 3;
  const [visibleStep, setVisibleStep] = useState(maxStep);

  return (
    <div className="print-avoid-break rounded-xl border border-teal-200 bg-white p-4 sm:p-5 space-y-3 dark:border-teal-900 dark:bg-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-xs font-extrabold uppercase tracking-wider text-teal-800 dark:text-teal-400">
          {renderInlineText(block.title)}
        </div>
        <div className="no-print flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setVisibleStep((s) => (s < maxStep ? s + 1 : 1))}
            className="inline-flex items-center gap-1 rounded-lg bg-teal-50 px-2.5 py-1 text-[11px] font-bold text-teal-800 hover:bg-teal-100 cursor-pointer dark:bg-teal-950 dark:text-teal-300"
          >
            <Eye className="h-3 w-3" />
            {visibleStep < maxStep
              ? `Next Step (${visibleStep}/${maxStep})`
              : 'Step-by-Step Replay'}
          </button>
          {visibleStep < maxStep && (
            <button
              type="button"
              onClick={() => setVisibleStep(maxStep)}
              className="rounded-lg border border-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-600 cursor-pointer dark:border-slate-700 dark:text-slate-300"
            >
              Show All
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center text-center space-y-2">
        <div className="w-full max-w-md rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-white">
          <span className="text-xs font-bold uppercase text-slate-500 block">
            Parents (P)
          </span>
          {renderInlineText(block.parents)}
        </div>

        {visibleStep >= 2 && (
          <div className="w-full max-w-md flex flex-col items-center space-y-2 animate-slide-down">
            <ArrowDown className="h-4 w-4 text-teal-600" />
            <div className="w-full rounded-lg bg-sky-50 border border-sky-200 px-3 py-2 text-sm font-semibold text-sky-950 dark:bg-sky-950/40 dark:border-sky-800 dark:text-sky-200">
              <span className="text-xs font-bold uppercase text-sky-700 dark:text-sky-400 block">
                Gametes
              </span>
              {renderInlineText(block.gametes)}
            </div>
          </div>
        )}

        {visibleStep >= 3 && (
          <div className="w-full max-w-md flex flex-col items-center space-y-2 animate-slide-down">
            <ArrowDown className="h-4 w-4 text-teal-600" />
            <div className="w-full rounded-lg bg-teal-50 border border-teal-200 px-3 py-2 text-sm font-semibold text-teal-950 dark:bg-teal-950/40 dark:border-teal-800 dark:text-teal-200">
              {renderInlineText(block.f1)}
            </div>
          </div>
        )}

        {block.f2Summary && visibleStep >= 4 && (
          <div className="w-full max-w-md flex flex-col items-center space-y-2 animate-slide-down">
            <ArrowDown className="h-4 w-4 text-teal-600" />
            <div className="w-full rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-2 text-sm font-bold text-emerald-950 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-200">
              F₂ Offspring: {renderInlineText(block.f2Summary)}
            </div>
          </div>
        )}
      </div>

      {block.ratios && visibleStep >= maxStep && (
        <div className="grid gap-2 sm:grid-cols-2 pt-2">
          {block.ratios.map((r) => (
            <div
              key={r.label}
              className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-center dark:bg-slate-950 dark:border-slate-800"
            >
              <div className="text-[11px] font-bold uppercase text-slate-500">
                {r.label}
              </div>
              <div className="font-mono text-sm font-extrabold text-teal-700 dark:text-teal-400">
                {r.value}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface BlockRendererProps {
  block: ContentBlock;
  bestQuizScore?: { correct: number; total: number } | null;
  onSaveQuizScore?: (correct: number, total: number) => void;
}

export function BlockRenderer({
  block,
  bestQuizScore,
  onSaveQuizScore,
}: BlockRendererProps) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="text-[15px] leading-7 text-slate-700 whitespace-pre-line dark:text-slate-300">
          {renderInlineText(block.text)}
        </p>
      );

    case 'quick-summary':
      return (
        <div className="print-avoid-break rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 space-y-2 dark:border-emerald-900/60 dark:bg-emerald-950/30">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
            <Zap className="h-4 w-4" />
            15-Second Visual Summary — {renderInlineText(block.title)}
          </div>
          <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-emerald-950 dark:text-emerald-200">
            {block.bullets.map((b, i) => (
              <li key={i} className="leading-relaxed">
                {renderInlineText(b)}
              </li>
            ))}
          </ul>
        </div>
      );

    case 'dig-deeper':
      return <DigDeeperAccordion block={block} />;

    case 'visual-diagram':
      return (
        <div className="print-avoid-break rounded-2xl border border-slate-200 bg-slate-50/70 p-4 space-y-3 dark:border-slate-800 dark:bg-slate-900/80">
          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            Visual Diagram — {renderInlineText(block.title)}
          </div>
          <ConceptDiagram diagramId={block.diagramId} />
          {block.caption && (
            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              {renderInlineText(block.caption)}
            </p>
          )}
        </div>
      );

    case 'notebook-mistake':
      return <NotebookMistakeCard block={block} />;

    case 'checkpoint':
      return <CheckpointCard block={block} />;

    case 'callout': {
      const style = CALLOUT_STYLES[block.variant];
      return (
        <div
          className={`print-avoid-break rounded-xl border-l-4 border p-4 space-y-2 ${style.wrapper}`}
        >
          <div className="flex items-center gap-2">
            {style.icon}
            <span className={`text-xs font-extrabold uppercase tracking-wider ${style.badge}`}>
              {style.label} — {renderInlineText(block.title)}
            </span>
          </div>
          <div className="text-sm leading-relaxed text-slate-800 whitespace-pre-line dark:text-slate-200">
            {renderInlineText(block.body)}
          </div>
          {block.bullets && (
            <ul className="space-y-1.5 pl-4 text-sm text-slate-800 dark:text-slate-200 list-disc">
              {block.bullets.map((b, i) => (
                <li key={i} className="leading-relaxed">
                  {renderInlineText(b)}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    case 'steps':
      return (
        <div className="space-y-3">
          {block.title && (
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              {renderInlineText(block.title)}
            </h4>
          )}
          <div className="space-y-2.5">
            {block.items.map((item, idx) => (
              <div
                key={idx}
                className="print-avoid-break rounded-xl border border-slate-200 bg-white p-3.5 flex gap-3 dark:border-slate-800 dark:bg-slate-900"
              >
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white mt-0.5">
                  {idx + 1}
                </span>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {renderInlineText(item.label)}
                  </div>
                  <div className="text-sm text-slate-700 whitespace-pre-line leading-relaxed dark:text-slate-300">
                    {renderInlineText(item.detail)}
                  </div>
                  {item.example && (
                    <div className="text-xs text-teal-800 bg-teal-50/70 rounded-lg px-2.5 py-1.5 mt-1 dark:bg-teal-950/40 dark:text-teal-300">
                      <strong>Example:</strong> {renderInlineText(item.example)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'table':
      return (
        <div className="print-avoid-break overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          {block.caption && (
            <div className="border-b border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
              {block.caption}
            </div>
          )}
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-950/60">
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-2.5 font-bold text-slate-800 dark:text-slate-200"
                  >
                    {renderInlineText(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {block.rows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40"
                >
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className="px-4 py-2.5 text-slate-700 align-top leading-relaxed dark:text-slate-300"
                    >
                      {renderInlineText(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'key-points':
      return (
        <div className="print-avoid-break rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2 dark:border-slate-800 dark:bg-slate-900">
          {block.title && (
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              {renderInlineText(block.title)}
            </h4>
          )}
          <ul className="space-y-2 pl-4 list-disc text-sm text-slate-700 dark:text-slate-300">
            {block.items.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {renderInlineText(item)}
              </li>
            ))}
          </ul>
        </div>
      );

    case 'cross-flow':
      return <CrossFlowCard block={block} />;

    case 'qa':
      return <QaAccordion block={block} />;

    case 'lab':
      return (
        <div className="space-y-2 no-print-interactive">
          <LabResolver
            labId={block.labId}
            bestQuizScore={bestQuizScore}
            onSaveQuizScore={onSaveQuizScore}
          />
          {block.caption && (
            <p className="text-xs text-slate-500 dark:text-slate-400 italic px-1">
              {block.caption}
            </p>
          )}
        </div>
      );
  }
}
