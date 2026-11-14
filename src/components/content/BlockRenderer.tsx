import { Fragment, ReactNode, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowDown,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Eye,
  Feather,
  FileText,
  Languages,
  Lightbulb,
  Mail,
  Megaphone,
  PenLine,
  Pin,
  Scale,
  Search,
  Sparkles,
  X,
  XCircle,
  Zap,
} from 'lucide-react';
import { CalloutVariant, ContentBlock, WordAnnotation } from '../../types/curriculum';
import type { NcertReferenceEntry } from '../../data/subjects/english/ncert-texts/types';
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
          className="no-print mt-3 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
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
            className="inline-flex items-center gap-1 rounded-lg bg-teal-50 px-2.5 py-1 text-[11px] font-bold text-teal-800 hover:bg-teal-100 cursor-pointer dark:bg-teal-950 dark:text-teal-300 dark:hover:bg-teal-900"
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

const WORD_CHAR = '[\\u0900-\\u0963\\u0966-\\u096F\\u0971-\\u097FA-Za-z0-9]';

type LineSegment =
  | { kind: 'text'; text: string }
  | { kind: 'word'; text: string; wordIndex: number };

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function tokenizeStanzaLine(
  line: string,
  words: WordAnnotation[],
  matcher: RegExp | null,
  wordIndexMap: Map<string, number>
): LineSegment[] {
  if (!matcher || words.length === 0 || !line) {
    return [{ kind: 'text', text: line }];
  }

  matcher.lastIndex = 0;
  const segments: LineSegment[] = [];
  let cursor = 0;

  for (const match of line.matchAll(matcher)) {
    const start = match.index ?? 0;
    const matchedText = match[0];
    if (start > cursor) {
      segments.push({ kind: 'text', text: line.slice(cursor, start) });
    }
    const wordIdx =
      wordIndexMap.get(matchedText) ?? wordIndexMap.get(matchedText.toLowerCase());
    if (wordIdx !== undefined) {
      segments.push({ kind: 'word', text: matchedText, wordIndex: wordIdx });
    } else {
      segments.push({ kind: 'text', text: matchedText });
    }
    cursor = start + matchedText.length;
  }

  if (cursor < line.length) {
    segments.push({ kind: 'text', text: line.slice(cursor) });
  }

  return segments.length > 0 ? segments : [{ kind: 'text', text: line }];
}

function PoeticStanzaCard({
  block,
}: {
  block: Extract<ContentBlock, { type: 'poetic-stanza' }>;
}) {
  const [hoveredWordIdx, setHoveredWordIdx] = useState<number | null>(null);
  const [pinnedWordIdx, setPinnedWordIdx] = useState<number | null>(null);
  const [showAllWords, setShowAllWords] = useState(false);

  const isEn = block.lang === 'en';
  const isProse = block.passageMode === 'prose';

  const { matcher, wordIndexMap } = useMemo(() => {
    const idxMap = new Map<string, number>();
    const rawMap = new Map<string, string>();
    block.words.forEach((w, idx) => {
      const lookupKey = isEn ? w.word.toLowerCase() : w.word;
      if (!idxMap.has(lookupKey)) {
        idxMap.set(lookupKey, idx);
        rawMap.set(lookupKey, w.word);
      }
    });
    const uniqueSorted = [...rawMap.values()].sort((a, b) => b.length - a.length);
    if (uniqueSorted.length === 0) {
      return { matcher: null, wordIndexMap: idxMap };
    }
    const pattern = uniqueSorted.map(escapeRegExp).join('|');
    const regex = new RegExp(
      `(?<!${WORD_CHAR})(${pattern})(?!${WORD_CHAR})`,
      isEn ? 'gi' : 'g'
    );
    return { matcher: regex, wordIndexMap: idxMap };
  }, [block.words, isEn]);

  const lines = useMemo(() => block.stanzaText.split('\n'), [block.stanzaText]);
  const activeIdx = hoveredWordIdx ?? pinnedWordIdx;
  const activeWord = activeIdx !== null ? block.words[activeIdx] : null;
  const isPinned = pinnedWordIdx !== null && hoveredWordIdx === null;

  return (
    <div
      className={`print-avoid-break rounded-2xl border overflow-visible shadow-xs ${
        isEn
          ? 'border-indigo-200 bg-gradient-to-br from-indigo-50/50 via-white to-slate-50/40 dark:border-indigo-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950'
          : 'border-amber-200 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/40 dark:border-amber-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950'
      }`}
    >
      {/* Header Bar */}
      <div
        className={`flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2.5 rounded-t-2xl ${
          isEn
            ? 'border-indigo-200/70 bg-indigo-50/80 dark:border-indigo-900/50 dark:bg-indigo-950/30'
            : 'border-amber-200/70 bg-amber-50/80 dark:border-amber-900/50 dark:bg-amber-950/30'
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider ${
              isEn
                ? 'text-indigo-900 dark:text-indigo-300'
                : 'text-amber-900 dark:text-amber-300'
            }`}
          >
            {isProse ? (
              <BookOpen className="h-3.5 w-3.5" />
            ) : (
              <Feather className="h-3.5 w-3.5" />
            )}
            {block.stanzaLabel}
          </span>
          {block.dialectBadge && (
            <span
              className={`rounded-full bg-white border px-2.5 py-0.5 text-[11px] font-bold dark:bg-slate-900 ${
                isEn
                  ? 'border-indigo-200 text-indigo-800 dark:border-indigo-800 dark:text-indigo-300'
                  : 'border-amber-200 text-amber-800 dark:border-amber-800 dark:text-amber-300'
              }`}
            >
              {block.dialectBadge}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => setShowAllWords((s) => !s)}
          className={`no-print inline-flex items-center gap-1.5 rounded-lg border bg-white px-2.5 py-1 text-[11px] font-bold transition cursor-pointer dark:bg-slate-900 ${
            isEn
              ? 'border-indigo-300 text-indigo-900 hover:bg-indigo-100/70 dark:border-indigo-800 dark:text-indigo-300 dark:hover:bg-indigo-950/60'
              : 'border-amber-300 text-amber-900 hover:bg-amber-100/70 dark:border-amber-800 dark:text-amber-300 dark:hover:bg-amber-950/60'
          }`}
        >
          <Languages className="h-3.5 w-3.5" />
          {isEn
            ? showAllWords
              ? 'Hide Vocabulary'
              : `Vocabulary & Phrases (${block.words.length})`
            : showAllWords
            ? 'तालिका छिपाएँ (Hide Table)'
            : `शब्दार्थ तालिका (${block.words.length})`}
        </button>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* Passage Box with Interactive Inline Word Tokens */}
        <div
          className={`rounded-xl border bg-white/95 px-4 py-4 sm:px-6 sm:py-5 shadow-2xs dark:border-slate-800 dark:bg-slate-950/90 ${
            isEn ? 'border-indigo-200/80' : 'border-amber-200/80'
          } ${isProse ? 'text-left' : 'text-center'}`}
        >
          <div
            className={
              isProse
                ? 'space-y-2 text-[16px] sm:text-[17px] leading-8 sm:leading-9 font-medium text-slate-900 dark:text-slate-100'
                : 'space-y-1.5 text-lg sm:text-[19px] leading-9 sm:leading-10 font-semibold text-slate-900 dark:text-slate-100'
            }
          >
            {lines.map((line, lIdx) => {
              const segments = tokenizeStanzaLine(
                line,
                block.words,
                matcher,
                wordIndexMap
              );
              return (
                <div key={lIdx} className="min-h-[1.75rem]">
                  {segments.map((seg, sIdx) => {
                    if (seg.kind === 'text') {
                      return <Fragment key={sIdx}>{seg.text}</Fragment>;
                    }
                    const wordObj = block.words[seg.wordIndex];
                    const isActive = activeIdx === seg.wordIndex;
                    const isHovered = hoveredWordIdx === seg.wordIndex;
                    const isPin = pinnedWordIdx === seg.wordIndex;

                    return (
                      <span key={sIdx} className="relative inline-block mx-[1px]">
                        <button
                          type="button"
                          onMouseEnter={() => setHoveredWordIdx(seg.wordIndex)}
                          onMouseLeave={() =>
                            setHoveredWordIdx((curr) =>
                              curr === seg.wordIndex ? null : curr
                            )
                          }
                          onFocus={() => setHoveredWordIdx(seg.wordIndex)}
                          onBlur={() =>
                            setHoveredWordIdx((curr) =>
                              curr === seg.wordIndex ? null : curr
                            )
                          }
                          onClick={() =>
                            setPinnedWordIdx((curr) =>
                              curr === seg.wordIndex ? null : seg.wordIndex
                            )
                          }
                          aria-label={
                            isEn
                              ? `${seg.text}: ${wordObj.englishMeaning}`
                              : `${seg.text}: ${wordObj.hindiMeaning ?? ''} (${wordObj.englishMeaning})`
                          }
                          className={`inline rounded px-1 py-0.5 border-b-2 border-dotted transition cursor-pointer ${
                            isEn
                              ? isActive
                                ? 'bg-indigo-300/90 border-indigo-800 text-slate-950 ring-2 ring-indigo-400/70 dark:bg-indigo-500/40 dark:border-indigo-300 dark:text-indigo-100'
                                : 'bg-indigo-100/80 border-indigo-600 text-indigo-950 hover:bg-indigo-200/80 dark:bg-indigo-950/70 dark:border-indigo-400 dark:text-indigo-200 dark:hover:bg-indigo-900/80 dark:hover:text-indigo-100'
                              : isActive
                              ? 'bg-amber-300/90 border-amber-800 text-slate-950 ring-2 ring-amber-400/70 dark:bg-amber-500/35 dark:border-amber-300 dark:text-amber-100'
                              : 'bg-amber-100/80 border-amber-600 text-amber-950 hover:bg-amber-200/80 dark:bg-amber-950/70 dark:border-amber-400 dark:text-amber-200 dark:hover:bg-amber-900/80 dark:hover:text-amber-100'
                          }`}
                        >
                          {seg.text}
                          {isPin && (
                            <span
                              className={`ml-0.5 inline-block text-[10px] align-top ${
                                isEn
                                  ? 'text-indigo-800 dark:text-indigo-300'
                                  : 'text-amber-800 dark:text-amber-300'
                              }`}
                            >
                              •
                            </span>
                          )}
                        </button>

                        {/* Desktop Floating Hover Tooltip */}
                        {isHovered && wordObj && (
                          <div
                            role="tooltip"
                            className="no-print hidden sm:block pointer-events-none absolute left-1/2 bottom-full z-30 mb-2 w-72 -translate-x-1/2 rounded-xl border border-slate-200 bg-slate-900 px-3.5 py-2.5 text-left text-xs text-white shadow-xl dark:border-slate-700 dark:bg-slate-800"
                          >
                            <div className="flex items-center justify-between gap-2 border-b border-white/15 pb-1 mb-1.5">
                              <span
                                className={`font-extrabold text-sm ${
                                  isEn ? 'text-indigo-300' : 'text-amber-300'
                                }`}
                              >
                                {wordObj.word}
                              </span>
                              {wordObj.grammarNote && (
                                <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold text-sky-200">
                                  {wordObj.grammarNote}
                                </span>
                              )}
                            </div>
                            {isEn ? (
                              <>
                                <div className="text-white font-semibold leading-snug">
                                  <span className="text-emerald-300">Meaning:</span>{' '}
                                  {wordObj.englishMeaning}
                                </div>
                                {(wordObj.synonym || wordObj.hindiMeaning) && (
                                  <div className="text-slate-200 mt-0.5 leading-snug">
                                    <span className="text-indigo-300">Synonyms / Tone:</span>{' '}
                                    {wordObj.synonym || wordObj.hindiMeaning}
                                  </div>
                                )}
                                {wordObj.exampleSentence && (
                                  <div className="mt-1.5 pt-1 border-t border-white/10 text-[11px] text-amber-100/95 leading-snug">
                                    <span className="font-bold text-amber-300">
                                      Board Usage:
                                    </span>{' '}
                                    {wordObj.exampleSentence}
                                  </div>
                                )}
                              </>
                            ) : (
                              <>
                                <div className="text-white font-semibold leading-snug">
                                  <span className="text-emerald-300">हिंदी:</span>{' '}
                                  {wordObj.hindiMeaning}
                                </div>
                                <div className="text-slate-200 mt-0.5 leading-snug">
                                  <span className="text-indigo-300">English:</span>{' '}
                                  {wordObj.englishMeaning}
                                </div>
                                {wordObj.exampleSentence && (
                                  <div className="mt-1.5 pt-1 border-t border-white/10 text-[11px] text-amber-100/95 leading-snug">
                                    <span className="font-bold text-amber-300">
                                      प्रयोग:
                                    </span>{' '}
                                    {wordObj.exampleSentence}
                                  </div>
                                )}
                              </>
                            )}
                            <div className="mt-1 text-[10px] text-slate-400">
                              Click/Tap word to pin below
                            </div>
                          </div>
                        )}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <p className="no-print mt-3 text-[11px] font-medium text-slate-500 dark:text-slate-400">
            {isEn ? (
              <>
                Tip: Hover or tap any{' '}
                <span className="rounded bg-indigo-100/90 border-b border-dotted border-indigo-600 px-1 text-indigo-950 dark:bg-indigo-950/70 dark:text-indigo-200">
                  highlighted word or phrase
                </span>{' '}
                for its contextual meaning, board-level synonyms, and model sentence.
              </>
            ) : (
              <>
                Tip: Hover or tap any{' '}
                <span className="rounded bg-amber-100/90 border-b border-dotted border-amber-600 px-1 text-amber-950 dark:bg-amber-950/70 dark:text-amber-200">
                  highlighted word
                </span>{' '}
                for its exam-safe मानक हिंदी अर्थ, English helper, grammar note, and usage sentence.
              </>
            )}
          </p>
        </div>

        {/* Live Word Lens Inspector (Responsive for Mobile Tap + Desktop Pin) */}
        {activeWord && (
          <div
            className={`no-print animate-slide-down rounded-xl border-2 bg-white p-3.5 shadow-sm dark:bg-slate-900 ${
              isEn
                ? 'border-indigo-400 dark:border-indigo-700'
                : 'border-amber-400 dark:border-amber-700'
            }`}
          >
            <div
              className={`flex flex-wrap items-center justify-between gap-2 pb-2 border-b dark:border-slate-800 ${
                isEn ? 'border-indigo-100' : 'border-amber-100'
              }`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-extrabold ${
                    isEn
                      ? 'bg-indigo-100 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-300'
                      : 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300'
                  }`}
                >
                  <Languages className="h-3 w-3" /> Word Lens
                </span>
                <span className="text-base font-extrabold text-slate-900 dark:text-white">
                  {activeWord.word}
                </span>
                {activeWord.grammarNote && (
                  <span className="rounded-full bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 text-[11px] font-bold text-indigo-800 dark:bg-indigo-950/60 dark:border-indigo-800 dark:text-indigo-300">
                    {activeWord.grammarNote}
                  </span>
                )}
                {isPinned && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase text-amber-700 dark:text-amber-400">
                    <Pin className="h-3 w-3" /> Pinned
                  </span>
                )}
              </div>

              {pinnedWordIdx !== null && (
                <button
                  type="button"
                  onClick={() => setPinnedWordIdx(null)}
                  className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-bold text-slate-500 hover:bg-slate-100 hover:text-slate-800 cursor-pointer dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                >
                  <X className="h-3.5 w-3.5" /> Close
                </button>
              )}
            </div>

            {isEn ? (
              <div className="mt-2.5 grid gap-2 sm:grid-cols-2 text-xs sm:text-sm">
                <div className="rounded-lg bg-emerald-50/70 border border-emerald-200 px-3 py-2 dark:bg-emerald-950/30 dark:border-emerald-900">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                    Contextual Meaning
                  </div>
                  <div className="mt-0.5 font-bold text-slate-900 dark:text-slate-100">
                    {activeWord.englishMeaning}
                  </div>
                </div>

                <div className="rounded-lg bg-indigo-50/70 border border-indigo-200 px-3 py-2 dark:bg-indigo-950/30 dark:border-indigo-900">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-800 dark:text-indigo-400">
                    Board Synonyms &amp; Tone Cue
                  </div>
                  <div className="mt-0.5 font-semibold text-slate-900 dark:text-slate-100">
                    {activeWord.synonym || activeWord.hindiMeaning || '—'}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-2.5 grid gap-2 sm:grid-cols-2 text-xs sm:text-sm">
                <div className="rounded-lg bg-emerald-50/70 border border-emerald-200 px-3 py-2 dark:bg-emerald-950/30 dark:border-emerald-900">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                    मानक हिंदी अर्थ (Exam-Safe Hindi)
                  </div>
                  <div className="mt-0.5 font-bold text-slate-900 dark:text-slate-100">
                    {activeWord.hindiMeaning}
                  </div>
                </div>

                <div className="rounded-lg bg-indigo-50/70 border border-indigo-200 px-3 py-2 dark:bg-indigo-950/30 dark:border-indigo-900">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-800 dark:text-indigo-400">
                    English Helper Meaning
                  </div>
                  <div className="mt-0.5 font-semibold text-slate-900 dark:text-slate-100">
                    {activeWord.englishMeaning}
                  </div>
                </div>
              </div>
            )}

            {activeWord.exampleSentence && (
              <div className="mt-2 rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-700 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">
                  {isEn ? 'Board Usage (Model Sentence):' : 'वाक्य प्रयोग (Exam Usage):'}
                </strong>{' '}
                {activeWord.exampleSentence}
              </div>
            )}
          </div>
        )}

        {/* Full Word Meanings Table (Togglable + Always Visible in Print) */}
        {block.words.length > 0 && (
          <div className={showAllWords ? 'block' : 'hidden print:block'}>
            <div
              className={`overflow-x-auto rounded-xl border bg-white dark:border-slate-800 dark:bg-slate-900 ${
                isEn ? 'border-indigo-200' : 'border-amber-200'
              }`}
            >
              <div
                className={`border-b px-3.5 py-2 text-xs font-extrabold dark:border-slate-800 dark:bg-slate-950 ${
                  isEn
                    ? 'border-indigo-100 bg-indigo-50/70 text-indigo-900 dark:text-indigo-300'
                    : 'border-amber-100 bg-amber-50/70 text-amber-900 dark:text-amber-300'
                }`}
              >
                {isEn
                  ? 'Contextual Vocabulary & Synonyms Table'
                  : 'कठिन शब्दार्थ व व्याकरण तालिका (Word Meanings & Usage)'}
              </div>
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/60">
                    <th className="px-3 py-2 font-bold text-slate-800 dark:text-slate-200">
                      {isEn ? 'Word / Phrase' : 'शब्द'}
                    </th>
                    <th className="px-3 py-2 font-bold text-slate-800 dark:text-slate-200">
                      {isEn ? 'Contextual Meaning' : 'मानक हिंदी अर्थ'}
                    </th>
                    <th className="px-3 py-2 font-bold text-slate-800 dark:text-slate-200">
                      {isEn ? 'Synonyms & Tone' : 'English Helper'}
                    </th>
                    <th className="px-3 py-2 font-bold text-slate-800 dark:text-slate-200">
                      {isEn ? 'Grammar & Board Sentence' : 'व्याकरण व वाक्य प्रयोग'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {block.words.map((w, idx) => (
                    <tr
                      key={`${w.word}-${idx}`}
                      className={
                        isEn
                          ? 'hover:bg-indigo-50/40 dark:hover:bg-slate-800/40'
                          : 'hover:bg-amber-50/40 dark:hover:bg-slate-800/40'
                      }
                    >
                      <td
                        className={`px-3 py-2 font-bold whitespace-nowrap ${
                          isEn
                            ? 'text-indigo-900 dark:text-indigo-300'
                            : 'text-amber-900 dark:text-amber-300'
                        }`}
                      >
                        {w.word}
                      </td>
                      <td className="px-3 py-2 font-semibold text-slate-800 dark:text-slate-200">
                        {isEn ? w.englishMeaning : w.hindiMeaning}
                      </td>
                      <td className="px-3 py-2 text-slate-700 dark:text-slate-300">
                        {isEn
                          ? w.synonym ?? w.hindiMeaning ?? '—'
                          : w.englishMeaning}
                      </td>
                      <td className="px-3 py-2 text-slate-600 dark:text-slate-400 space-y-0.5">
                        {w.grammarNote && (
                          <div className="font-semibold text-indigo-700 dark:text-indigo-400">
                            {w.grammarNote}
                          </div>
                        )}
                        {w.exampleSentence && <div>{w.exampleSentence}</div>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Passage Explanations */}
        <div className="space-y-3">
          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-3.5 space-y-1.5 dark:border-teal-900/60 dark:bg-teal-950/30">
            <div className="text-xs font-extrabold uppercase tracking-wider text-teal-900 dark:text-teal-300">
              {isEn
                ? isProse
                  ? 'Context, Speaker & Tone (5-Mark RTC Focus)'
                  : 'Context, Rhyme Scheme & Tone'
                : isProse
                ? 'प्रसंग व संदर्भ (Context)'
                : 'प्रसंग (Context)'}
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200">
              {renderInlineText(block.prasang)}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3.5 sm:p-4 space-y-1.5 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
              {isEn
                ? isProse
                  ? 'Detailed Explanation, Subtext & Inference'
                  : 'Stanza-by-Stanza Explanation & Subtext'
                : isProse
                ? 'सरल हिंदी व्याख्या व आशय (Exam-Standard Hindi Explanation)'
                : 'सरल हिंदी भावार्थ (Exam-Standard Hindi Explanation)'}
            </div>
            <p className="text-sm leading-7 text-slate-800 whitespace-pre-line dark:text-slate-200">
              {renderInlineText(block.bhavarthHindi)}
            </p>
          </div>

          {block.englishHelper.trim().length > 0 && (
            <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-3.5 space-y-1.5 dark:border-indigo-900/60 dark:bg-indigo-950/30">
              <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-indigo-900 dark:text-indigo-300">
                <Sparkles className="h-3.5 w-3.5" />{' '}
                {isEn
                  ? 'CBSE Marking-Scheme Value Points (Keywords to Include)'
                  : 'English Helper Explanation (Concept Bridge)'}
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-800 whitespace-pre-line dark:text-slate-200">
                {renderInlineText(block.englishHelper)}
              </p>
            </div>
          )}

          {block.poeticDevices && block.poeticDevices.length > 0 && (
            <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-3.5 space-y-1.5 dark:border-sky-900/60 dark:bg-sky-950/30">
              <div className="text-xs font-extrabold uppercase tracking-wider text-sky-900 dark:text-sky-300">
                {isEn
                  ? isProse
                    ? 'Literary Devices, Irony & RTC Exam Traps'
                    : 'Poetic Devices & Line-by-Line Analysis'
                  : isProse
                  ? 'भाषा-शैली व परीक्षा संकेत (Language Style & Board Focus)'
                  : 'काव्य-सौंदर्य व परीक्षा संकेत (Poetic Devices & Board Focus)'}
              </div>
              <ul className="space-y-1 pl-4 list-disc text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                {block.poeticDevices.map((dev, dIdx) => (
                  <li key={dIdx} className="leading-relaxed">
                    {renderInlineText(dev)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getSamasBadgeClass(samasType: string): string {
  if (samasType.includes('अव्ययीभाव')) {
    return 'bg-sky-100 text-sky-900 border-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800';
  }
  if (samasType.includes('तत्पुरुष')) {
    return 'bg-teal-100 text-teal-900 border-teal-200 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800';
  }
  if (samasType.includes('कर्मधारय')) {
    return 'bg-amber-100 text-amber-900 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800';
  }
  if (samasType.includes('द्विगु')) {
    return 'bg-violet-100 text-violet-900 border-violet-200 dark:bg-violet-950/60 dark:text-violet-300 dark:border-violet-800';
  }
  if (samasType.includes('द्वंद्व')) {
    return 'bg-rose-100 text-rose-900 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800';
  }
  return 'bg-emerald-100 text-emerald-900 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800';
}

function EnglishTranscriptCard({
  block,
}: {
  block: Extract<ContentBlock, { type: 'english-transcript' }>;
}) {
  const [viewMode, setViewMode] = useState<'side-by-side' | 'english-only'>('side-by-side');

  return (
    <div className="rounded-2xl border border-indigo-200 bg-indigo-50/35 overflow-hidden shadow-xs dark:border-indigo-900/60 dark:bg-slate-950/60">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 bg-indigo-50/90 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-indigo-100 px-2 py-0.5 text-[11px] font-extrabold text-indigo-900 dark:bg-indigo-950 dark:text-indigo-300">
            <Languages className="h-3.5 w-3.5" /> Full English Transcript
          </span>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            {block.title}
          </h3>
        </div>

        <div className="no-print inline-flex rounded-lg border border-indigo-200 bg-white p-0.5 dark:border-slate-700 dark:bg-slate-950">
          <button
            type="button"
            onClick={() => setViewMode('side-by-side')}
            className={`rounded-md px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
              viewMode === 'side-by-side'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            Side-by-Side (मूल + English)
          </button>
          <button
            type="button"
            onClick={() => setViewMode('english-only')}
            className={`rounded-md px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
              viewMode === 'english-only'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            English Only
          </button>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {block.intro && (
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {renderInlineText(block.intro)}
          </p>
        )}

        <div className="space-y-3">
          {block.segments.map((seg, idx) => (
            <div
              key={`${seg.label}-${idx}`}
              className="print-avoid-break rounded-xl border border-indigo-100 bg-white p-3.5 space-y-2.5 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="text-xs font-extrabold text-indigo-800 dark:text-indigo-300">
                {seg.label}
              </div>
              <div
                className={`grid gap-3 ${
                  viewMode === 'side-by-side' ? 'md:grid-cols-2' : 'grid-cols-1'
                }`}
              >
                {viewMode === 'side-by-side' && (
                  <div className="rounded-lg border border-amber-200/80 bg-amber-50/40 p-3 dark:border-slate-800 dark:bg-slate-950/70">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-1">
                      Original Hindi Text
                    </div>
                    <div className="whitespace-pre-line text-sm font-medium leading-7 text-slate-900 dark:text-slate-100">
                      {seg.hindiOriginal}
                    </div>
                  </div>
                )}
                <div className="rounded-lg border border-indigo-200/80 bg-indigo-50/40 p-3 dark:border-slate-800 dark:bg-indigo-950/20">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-800 dark:text-indigo-400 mb-1">
                    Line-by-Line English Transcript
                  </div>
                  <div className="whitespace-pre-line text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                    {renderInlineText(seg.englishText)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChapterWordBankCard({
  block,
  subtopicWords,
}: {
  block: Extract<ContentBlock, { type: 'chapter-word-bank' }>;
  subtopicWords?: WordAnnotation[];
}) {
  const [query, setQuery] = useState('');
  const [hideMeanings, setHideMeanings] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const isEn = block.lang === 'en';

  const mergedWords = useMemo(() => {
    const seen = new Set<string>();
    const combined: WordAnnotation[] = [];
    for (const w of [...(subtopicWords ?? []), ...(block.extraWords ?? [])]) {
      const key = isEn ? w.word.trim().toLowerCase() : w.word.trim();
      if (!seen.has(key)) {
        seen.add(key);
        combined.push(w);
      }
    }
    return combined;
  }, [subtopicWords, block.extraWords, isEn]);

  const filteredWords = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return mergedWords;
    return mergedWords.filter(
      (w) =>
        w.word.toLowerCase().includes(q) ||
        (w.hindiMeaning ?? '').toLowerCase().includes(q) ||
        (w.synonym ?? '').toLowerCase().includes(q) ||
        w.englishMeaning.toLowerCase().includes(q) ||
        (w.grammarNote ?? '').toLowerCase().includes(q)
    );
  }, [mergedWords, query]);

  return (
    <div
      className={`rounded-2xl border overflow-hidden shadow-xs dark:bg-slate-950/60 ${
        isEn
          ? 'border-indigo-200 bg-indigo-50/35 dark:border-indigo-900/60'
          : 'border-amber-200 bg-amber-50/35 dark:border-amber-900/60'
      }`}
    >
      <div
        className={`flex flex-wrap items-center justify-between gap-2 border-b px-4 py-3 dark:border-slate-800 dark:bg-slate-900 ${
          isEn
            ? 'border-indigo-100 bg-indigo-50/90'
            : 'border-amber-100 bg-amber-50/90'
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-extrabold ${
              isEn
                ? 'bg-indigo-100 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-300'
                : 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />{' '}
            {isEn
              ? `NCERT Vocabulary & Language (${mergedWords.length} items)`
              : `शब्दार्थ संकलन (${mergedWords.length} शब्द)`}
          </span>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            {block.title}
          </h3>
        </div>

        <button
          type="button"
          onClick={() => {
            setHideMeanings((prev) => !prev);
            setRevealed({});
          }}
          className={`no-print inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
            hideMeanings
              ? isEn
                ? 'border-indigo-600 bg-indigo-600 text-white'
                : 'border-amber-600 bg-amber-600 text-white'
              : isEn
              ? 'border-indigo-300 bg-white text-indigo-900 hover:bg-indigo-50 dark:border-slate-700 dark:bg-slate-800 dark:text-indigo-300 dark:hover:bg-slate-700'
              : 'border-amber-300 bg-white text-amber-900 hover:bg-amber-50 dark:border-slate-700 dark:bg-slate-800 dark:text-amber-300 dark:hover:bg-slate-700'
          }`}
        >
          <Eye className="h-3.5 w-3.5" />
          {isEn
            ? hideMeanings
              ? 'Show All Meanings'
              : 'Self-Test: Hide Meanings'
            : hideMeanings
            ? 'सभी अर्थ दिखाएँ'
            : 'Self-Test: अर्थ छिपाएँ'}
        </button>
      </div>

      <div className="p-4 space-y-3">
        {block.intro && (
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {renderInlineText(block.intro)}
          </p>
        )}

        <div
          className={`no-print flex items-center gap-2 rounded-xl border bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900 ${
            isEn ? 'border-indigo-200' : 'border-amber-200'
          }`}
        >
          <Search className="h-4 w-4 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              isEn
                ? 'Filter words, idioms, phrasal verbs, or meanings...'
                : 'शब्द, मानक हिंदी अर्थ या English खोजें...'
            }
            className="flex-1 bg-transparent text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none dark:text-white"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-xs font-bold text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        <div
          className={`overflow-x-auto rounded-xl border bg-white dark:border-slate-800 dark:bg-slate-900 ${
            isEn ? 'border-indigo-200' : 'border-amber-200'
          }`}
        >
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/60">
                <th className="px-3 py-2 font-bold text-slate-800 dark:text-slate-200">
                  {isEn ? 'Word / Phrase' : 'शब्द (Word)'}
                </th>
                <th className="px-3 py-2 font-bold text-slate-800 dark:text-slate-200">
                  {isEn ? 'Contextual Meaning' : 'मानक हिंदी अर्थ'}
                </th>
                <th className="px-3 py-2 font-bold text-slate-800 dark:text-slate-200">
                  {isEn ? 'Synonyms & Nuance' : 'English Helper'}
                </th>
                <th className="px-3 py-2 font-bold text-slate-800 dark:text-slate-200">
                  {isEn ? 'Grammar & Exam Sentence' : 'व्याकरण व वाक्य प्रयोग'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {filteredWords.map((w, idx) => {
                const key = w.word.trim();
                const masked = hideMeanings && !revealed[key];
                return (
                  <tr
                    key={`${key}-${idx}`}
                    className={
                      isEn
                        ? 'hover:bg-indigo-50/40 dark:hover:bg-slate-800/40'
                        : 'hover:bg-amber-50/40 dark:hover:bg-slate-800/40'
                    }
                  >
                    <td
                      className={`px-3 py-2.5 font-extrabold whitespace-nowrap align-top ${
                        isEn
                          ? 'text-indigo-900 dark:text-indigo-300'
                          : 'text-amber-900 dark:text-amber-300'
                      }`}
                    >
                      {w.word}
                    </td>
                    <td className="px-3 py-2.5 font-semibold text-slate-800 dark:text-slate-200 align-top">
                      {masked && (
                        <button
                          type="button"
                          onClick={() => setRevealed((r) => ({ ...r, [key]: true }))}
                          className={`no-print rounded-md border border-dashed px-2 py-1 text-[11px] font-bold cursor-pointer ${
                            isEn
                              ? 'border-indigo-400 bg-indigo-50 text-indigo-900 hover:bg-indigo-100 dark:border-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300 dark:hover:bg-indigo-900/60'
                              : 'border-amber-400 bg-amber-50 text-amber-900 hover:bg-amber-100 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-300 dark:hover:bg-amber-900/60'
                          }`}
                        >
                          Click to reveal meaning
                        </button>
                      )}
                      <span className={masked ? 'hidden print:inline' : 'inline'}>
                        {isEn ? w.englishMeaning : w.hindiMeaning}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-slate-700 dark:text-slate-300 align-top">
                      <span className={masked ? 'hidden print:inline' : 'inline'}>
                        {isEn
                          ? w.synonym ?? w.hindiMeaning ?? '—'
                          : w.englishMeaning}
                      </span>
                      {masked && (
                        <span className="no-print text-[11px] italic text-slate-400">
                          (Hidden in Self-Test)
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400 space-y-0.5 align-top">
                      {w.grammarNote && (
                        <div className="font-semibold text-indigo-700 dark:text-indigo-400">
                          {w.grammarNote}
                        </div>
                      )}
                      {w.exampleSentence && <div>{w.exampleSentence}</div>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filteredWords.length === 0 && (
            <div className="p-4 text-center text-xs text-slate-500">
              {isEn
                ? 'No matching vocabulary item found.'
                : 'कोई मेल खाने वाला शब्द नहीं मिला।'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function NcertReferenceCard({
  block,
}: {
  block: Extract<ContentBlock, { type: 'ncert-reference' }>;
}) {
  const [mode, setMode] = useState<'closed' | 'text' | 'pdf'>('closed');
  const [loadedEntry, setLoadedEntry] = useState<NcertReferenceEntry | null>(null);
  const [loadingText, setLoadingText] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [textSearch, setTextSearch] = useState('');

  const handleToggleText = async () => {
    if (mode === 'text') {
      setMode('closed');
      return;
    }
    setMode('text');
    if (loadedEntry || loadingText) return;
    setLoadingText(true);
    setLoadError(null);
    try {
      const mod = await import('../../data/subjects/english/ncert-texts');
      const entry = mod.NCERT_ENGLISH_TEXTS[block.chapterKey];
      if (!entry) {
        setLoadError('Reference text for this chapter is not indexed yet.');
      } else {
        setLoadedEntry(entry);
      }
    } catch {
      setLoadError('Unable to load offline NCERT text bundle.');
    } finally {
      setLoadingText(false);
    }
  };

  const pageLabel = `Pages ${block.pdfStartPage}${
    block.pdfEndPage && block.pdfEndPage !== block.pdfStartPage
      ? `–${block.pdfEndPage}`
      : ''
  }`;
  const pdfUrl = `${block.pdfPath}#page=${block.pdfStartPage}`;

  const filteredSections = useMemo(() => {
    if (!loadedEntry) return [];
    const q = textSearch.trim().toLowerCase();
    if (!q) return loadedEntry.sections;
    return loadedEntry.sections
      .map((sec) => ({
        ...sec,
        paragraphs: sec.paragraphs.filter(
          (p) =>
            p.toLowerCase().includes(q) ||
            (sec.heading ?? '').toLowerCase().includes(q)
        ),
      }))
      .filter((sec) => sec.paragraphs.length > 0);
  }, [loadedEntry, textSearch]);

  return (
    <div className="no-print rounded-2xl border border-indigo-200 bg-slate-50/80 overflow-hidden shadow-xs dark:border-indigo-900/60 dark:bg-slate-950/70">
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-indigo-50/70 border-b border-indigo-100 dark:bg-slate-900 dark:border-slate-800">
        <div className="space-y-0.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-md bg-indigo-100 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-indigo-900 dark:bg-indigo-950 dark:text-indigo-300">
              <BookOpen className="h-3 w-3" /> Optional Reference Material • Verbatim NCERT Textbook
            </span>
            <span className="rounded-md bg-white border border-indigo-200 px-2 py-0.5 text-[10px] font-bold text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300">
              {block.bookName} • {pageLabel}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
            {block.title}
          </div>
          {block.note && (
            <p className="text-[11px] text-slate-600 dark:text-slate-400">
              {block.note}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleToggleText}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              mode === 'text'
                ? 'border-indigo-600 bg-indigo-600 text-white'
                : 'border-indigo-300 bg-white text-indigo-900 hover:bg-indigo-50 dark:border-indigo-800 dark:bg-slate-800 dark:text-indigo-200 dark:hover:bg-slate-700'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            {mode === 'text' ? 'Hide NCERT Text' : '📖 Read Full NCERT Text (In-App)'}
          </button>

          <button
            type="button"
            onClick={() => setMode((m) => (m === 'pdf' ? 'closed' : 'pdf'))}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              mode === 'pdf'
                ? 'border-slate-800 bg-slate-800 text-white dark:border-slate-200 dark:bg-slate-200 dark:text-slate-900'
                : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <FileText className="h-3.5 w-3.5" />
            {mode === 'pdf' ? 'Hide PDF Viewer' : '📄 Preview Official NCERT PDF'}
          </button>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:border-indigo-400 hover:text-indigo-700 transition dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            Open NCERT PDF <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {mode === 'text' && (
        <div className="p-4 sm:p-5 space-y-4 bg-white dark:bg-slate-900/90">
          {loadingText ? (
            <div className="py-6 text-center text-xs font-semibold text-slate-500">
              Loading offline NCERT verbatim chapter text...
            </div>
          ) : loadError ? (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs font-semibold text-rose-800 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-300">
              {loadError}
            </div>
          ) : loadedEntry ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  <strong>{loadedEntry.title}</strong> — {loadedEntry.author} ({loadedEntry.bookName}, PDF {pageLabel})
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 dark:border-slate-700 dark:bg-slate-950">
                  <Search className="h-3.5 w-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={textSearch}
                    onChange={(e) => setTextSearch(e.target.value)}
                    placeholder="Find a line in textbook..."
                    className="bg-transparent text-xs text-slate-900 outline-none placeholder:text-slate-400 w-44 sm:w-56 dark:text-white"
                  />
                  {textSearch && (
                    <button
                      type="button"
                      onClick={() => setTextSearch('')}
                      className="text-[11px] font-bold text-slate-400 hover:text-slate-700 cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              <div className="max-h-[540px] overflow-y-auto pr-2 space-y-5">
                {(() => {
                  let paraCounter = 0;
                  return filteredSections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-2.5">
                      {sec.heading && (
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 border-b border-indigo-100 pb-1 dark:border-slate-800">
                          {sec.heading}
                        </h4>
                      )}
                      {sec.paragraphs.map((p, pIdx) => {
                        paraCounter += 1;
                        return (
                          <div key={pIdx} className="flex items-start gap-2.5">
                            <span className="mt-1 shrink-0 rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                              ¶{paraCounter}
                            </span>
                            <p className="text-sm leading-7 text-slate-800 dark:text-slate-200 whitespace-pre-line">
                              {p}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ));
                })()}
                {filteredSections.length === 0 && (
                  <p className="text-xs text-slate-500 text-center py-4">
                    No textbook paragraph matched "{textSearch}".
                  </p>
                )}
              </div>
            </>
          ) : null}
        </div>
      )}

      {mode === 'pdf' && (
        <div className="p-4 bg-white dark:bg-slate-900">
          <iframe
            title={block.title}
            src={pdfUrl}
            className="w-full h-[640px] rounded-xl border border-slate-300 bg-white dark:border-slate-700"
          />
        </div>
      )}
    </div>
  );
}

function MuhavreListCard({
  block,
}: {
  block: Extract<ContentBlock, { type: 'muhavre-list' }>;
}) {
  const [hideMeanings, setHideMeanings] = useState(false);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  return (
    <div className="rounded-2xl border border-rose-200 bg-rose-50/30 overflow-hidden shadow-xs dark:border-rose-900/60 dark:bg-slate-950/60">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rose-100 bg-rose-50/90 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-rose-100 px-2 py-0.5 text-[11px] font-extrabold text-rose-900 dark:bg-rose-950 dark:text-rose-300">
            <Feather className="h-3.5 w-3.5" /> CBSE व्याकरण • मुहावरे (4 अंक)
          </span>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            {block.title}
          </h3>
        </div>

        <button
          type="button"
          onClick={() => {
            setHideMeanings((prev) => !prev);
            setRevealed({});
          }}
          className={`no-print inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
            hideMeanings
              ? 'border-rose-600 bg-rose-600 text-white'
              : 'border-rose-300 bg-white text-rose-900 hover:bg-rose-50 dark:border-slate-700 dark:bg-slate-800 dark:text-rose-300 dark:hover:bg-slate-700'
          }`}
        >
          <Eye className="h-3.5 w-3.5" />
          {hideMeanings ? 'सभी अर्थ दिखाएँ' : 'Self-Test: अर्थ छिपाएँ'}
        </button>
      </div>

      <div className="p-4 space-y-3">
        {block.note && (
          <div className="rounded-xl border border-rose-200 bg-white/90 px-3.5 py-2.5 text-xs text-slate-700 leading-relaxed dark:border-rose-900/50 dark:bg-slate-900 dark:text-slate-300">
            <strong className="text-rose-800 dark:text-rose-300">CBSE परीक्षा नियम:</strong>{' '}
            {renderInlineText(block.note)}
          </div>
        )}

        <div className="grid gap-3 md:grid-cols-2">
          {block.items.map((item, idx) => {
            const masked = hideMeanings && !revealed[idx];
            return (
              <div
                key={`${item.idiom}-${idx}`}
                className="print-avoid-break rounded-xl border border-rose-200/80 bg-white p-4 space-y-2.5 shadow-2xs dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-600 text-[11px] font-bold text-white">
                      {idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-rose-900 dark:text-rose-300">
                      {item.idiom}
                    </span>
                  </div>
                  {item.sourceLine && (
                    <span className="rounded-md bg-amber-50 border border-amber-200 px-2 py-0.5 text-[10px] font-bold text-amber-900 dark:bg-amber-950/40 dark:border-amber-900 dark:text-amber-300">
                      {item.sourceLine}
                    </span>
                  )}
                </div>

                {masked && (
                  <button
                    type="button"
                    onClick={() => setRevealed((r) => ({ ...r, [idx]: true }))}
                    className="no-print w-full rounded-lg border border-dashed border-rose-300 bg-rose-50/70 px-3 py-2 text-xs font-bold text-rose-900 hover:bg-rose-100 cursor-pointer dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-300 dark:hover:bg-rose-900/60"
                  >
                    अर्थ व वाक्य प्रयोग देखें (Click to Reveal)
                  </button>
                )}

                <div className={masked ? 'hidden print:block space-y-2' : 'space-y-2'}>
                  <div className="grid gap-2 sm:grid-cols-2 text-xs">
                    <div className="rounded-lg bg-emerald-50/70 border border-emerald-200 px-2.5 py-1.5 dark:bg-emerald-950/30 dark:border-emerald-900">
                      <span className="text-[10px] font-extrabold uppercase text-emerald-800 dark:text-emerald-400 block">
                        मानक हिंदी अर्थ
                      </span>
                      <span className="font-bold text-slate-900 dark:text-slate-100">
                        {item.hindiMeaning}
                      </span>
                    </div>
                    <div className="rounded-lg bg-indigo-50/70 border border-indigo-200 px-2.5 py-1.5 dark:bg-indigo-950/30 dark:border-indigo-900">
                      <span className="text-[10px] font-extrabold uppercase text-indigo-800 dark:text-indigo-400 block">
                        English Meaning
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {item.englishMeaning}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-700 leading-relaxed dark:bg-slate-950 dark:border-slate-800 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">
                      वाक्य प्रयोग (Exam Model):
                    </strong>{' '}
                    {renderInlineText(item.examSentence)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SamasListCard({
  block,
}: {
  block: Extract<ContentBlock, { type: 'samas-list' }>;
}) {
  const [hideAnswers, setHideAnswers] = useState(false);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  return (
    <div className="rounded-2xl border border-teal-200 bg-teal-50/30 overflow-hidden shadow-xs dark:border-teal-900/60 dark:bg-slate-950/60">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-teal-100 bg-teal-50/90 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-teal-100 px-2 py-0.5 text-[11px] font-extrabold text-teal-900 dark:bg-teal-950 dark:text-teal-300">
            <Scale className="h-3.5 w-3.5" /> CBSE व्याकरण • समास-विग्रह (4 अंक)
          </span>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            {block.title}
          </h3>
        </div>

        <button
          type="button"
          onClick={() => {
            setHideAnswers((prev) => !prev);
            setRevealed({});
          }}
          className={`no-print inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
            hideAnswers
              ? 'border-teal-700 bg-teal-700 text-white'
              : 'border-teal-300 bg-white text-teal-900 hover:bg-teal-50 dark:border-slate-700 dark:bg-slate-800 dark:text-teal-300 dark:hover:bg-slate-700'
          }`}
        >
          <Eye className="h-3.5 w-3.5" />
          {hideAnswers ? 'विग्रह व भेद दिखाएँ' : 'Self-Test: विग्रह व भेद छिपाएँ'}
        </button>
      </div>

      <div className="p-4 space-y-3">
        {block.note && (
          <div className="rounded-xl border border-teal-200 bg-white/90 px-3.5 py-2.5 text-xs text-slate-700 leading-relaxed dark:border-teal-900/50 dark:bg-slate-900 dark:text-slate-300">
            <strong className="text-teal-800 dark:text-teal-300">समास सूत्र (Board Tip):</strong>{' '}
            {renderInlineText(block.note)}
          </div>
        )}

        <div className="overflow-x-auto rounded-xl border border-teal-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/60">
                <th className="px-3 py-2.5 font-bold text-slate-800 dark:text-slate-200">
                  समस्तपद (Compound)
                </th>
                <th className="px-3 py-2.5 font-bold text-slate-800 dark:text-slate-200">
                  समास-विग्रह (Expansion)
                </th>
                <th className="px-3 py-2.5 font-bold text-slate-800 dark:text-slate-200">
                  समास का भेद
                </th>
                <th className="px-3 py-2.5 font-bold text-slate-800 dark:text-slate-200">
                  परीक्षा संकेत / भ्रम से बचें
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {block.items.map((item, idx) => {
                const masked = hideAnswers && !revealed[idx];
                return (
                  <tr
                    key={`${item.samastPad}-${idx}`}
                    className="hover:bg-teal-50/40 dark:hover:bg-slate-800/40"
                  >
                    <td className="px-3 py-2.5 align-top">
                      <div className="font-extrabold text-sm text-slate-900 dark:text-white whitespace-nowrap">
                        {item.samastPad}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {item.englishMeaning}
                      </div>
                    </td>
                    <td className="px-3 py-2.5 font-semibold text-slate-800 dark:text-slate-200 align-top">
                      {masked && (
                        <button
                          type="button"
                          onClick={() => setRevealed((r) => ({ ...r, [idx]: true }))}
                          className="no-print rounded-md border border-dashed border-teal-400 bg-teal-50 px-2 py-1 text-[11px] font-bold text-teal-900 hover:bg-teal-100 cursor-pointer dark:border-teal-700 dark:bg-teal-950/40 dark:text-teal-300 dark:hover:bg-teal-900/60"
                        >
                          Click to reveal
                        </button>
                      )}
                      <span className={masked ? 'hidden print:inline' : 'inline'}>
                        {item.vigrah}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 align-top whitespace-nowrap">
                      <span
                        className={`${
                          masked ? 'hidden print:inline-flex' : 'inline-flex'
                        } rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${getSamasBadgeClass(
                          item.samasType
                        )}`}
                      >
                        {item.samasType}
                      </span>
                      {masked && (
                        <span className="no-print text-[11px] italic text-slate-400">
                          (Hidden)
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400 align-top leading-relaxed">
                      {item.examTrap ? renderInlineText(item.examTrap) : '—'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function WritingSampleCard({
  block,
}: {
  block: Extract<ContentBlock, { type: 'writing-sample' }>;
}) {
  const isEnglish =
    block.lang === 'en' ||
    block.formatType === 'formal-letter' ||
    block.formatType === 'analytical-paragraph';
  const isBoxed =
    block.formatType === 'suchna' || block.formatType === 'vigyapan';
  const isEmail = block.formatType === 'email';
  const isVigyapan = block.formatType === 'vigyapan';
  const isSuchna = block.formatType === 'suchna';

  const FormatIcon =
    isEmail || block.formatType === 'formal-letter'
      ? Mail
      : isVigyapan
      ? Megaphone
      : FileText;

  return (
    <div className="print-avoid-break rounded-2xl border border-sky-200 bg-sky-50/30 overflow-hidden shadow-xs dark:border-sky-900/60 dark:bg-slate-950/70">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sky-200/80 bg-sky-50/90 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-sky-100 px-2 py-0.5 text-[11px] font-extrabold text-sky-900 dark:bg-sky-950 dark:text-sky-300">
            <FormatIcon className="h-3.5 w-3.5" /> {block.badge}
          </span>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            {block.title}
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold">
          <span className="rounded-md bg-white border border-sky-200 px-2 py-0.5 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200">
            {isEnglish ? 'Word Limit' : 'शब्द-सीमा'}: {block.wordTarget}
          </span>
          <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300">
            {isEnglish ? 'Marks Split' : 'अंक-विभाजन'}: {block.marksSplit}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* CBSE Board Question Prompt */}
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm text-slate-800 leading-relaxed dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
          <span className="font-extrabold text-sky-800 dark:text-sky-400">
            {isEnglish ? 'CBSE Board Prompt:' : 'प्रश्न (CBSE Prompt):'}{' '}
          </span>
          {renderInlineText(block.prompt)}
        </div>

        {/* Authentic Format Answer Sheet */}
        {isBoxed ? (
          <div
            className={`mx-auto max-w-2xl border-2 border-slate-900 bg-white p-5 sm:p-6 shadow-sm dark:border-slate-300 dark:bg-slate-950 ${
              isVigyapan
                ? 'bg-gradient-to-br from-amber-50/60 via-white to-rose-50/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900'
                : ''
            }`}
          >
            {block.centerHeading && (
              <div className="text-center text-sm sm:text-base font-extrabold tracking-wide text-slate-900 dark:text-white">
                {block.centerHeading}
              </div>
            )}

            {isSuchna && (
              <div className="mt-1.5 text-center">
                <span className="inline-block border-y border-slate-800 px-4 py-0.5 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-900 dark:border-slate-300 dark:text-white">
                  सूचना
                </span>
              </div>
            )}

            {block.sloganOrHighlight && (
              <div className="mt-2.5 text-center">
                <span className="inline-block rounded-full border border-rose-300 bg-rose-50 px-3.5 py-1 text-xs sm:text-sm font-extrabold text-rose-900 dark:border-rose-700 dark:bg-rose-950/60 dark:text-rose-200">
                  ★ {block.sloganOrHighlight} ★
                </span>
              </div>
            )}

            {block.metadataLines && block.metadataLines.length > 0 && (
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                {block.metadataLines.map((m, idx) => (
                  <div key={idx}>
                    <span className="text-slate-500 dark:text-slate-400">
                      {m.label}:{' '}
                    </span>
                    <span className="text-slate-900 dark:text-white">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {block.subHeading && (
              <div className="mt-3 text-center text-sm sm:text-base font-extrabold underline underline-offset-4 text-slate-900 dark:text-white">
                {block.subHeading}
              </div>
            )}

            <div className="mt-3 text-sm leading-7 text-slate-800 whitespace-pre-line dark:text-slate-200">
              {renderInlineText(block.body)}
            </div>

            {block.footerLines && block.footerLines.length > 0 && (
              <div
                className={`mt-4 pt-3 border-t border-dashed border-slate-300 text-xs sm:text-sm font-bold text-slate-900 dark:border-slate-700 dark:text-slate-100 ${
                  isVigyapan ? 'text-center bg-amber-50/70 rounded-lg p-2.5 dark:bg-slate-900' : 'text-left'
                }`}
              >
                {block.footerLines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            )}
          </div>
        ) : isEmail ? (
          <div className="mx-auto max-w-2xl rounded-xl border-2 border-slate-700 bg-white overflow-hidden shadow-sm dark:border-slate-400 dark:bg-slate-950">
            <div className="bg-slate-800 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white flex items-center gap-2 dark:bg-slate-800">
              <Mail className="h-3.5 w-3.5 text-sky-300" />
              {block.centerHeading ?? 'औपचारिक ई-मेल प्रारूप (Compose E-Mail)'}
            </div>
            {block.metadataLines && block.metadataLines.length > 0 && (
              <div className="divide-y divide-slate-200 border-b border-slate-300 text-xs sm:text-sm dark:divide-slate-800 dark:border-slate-700">
                {block.metadataLines.map((m, idx) => (
                  <div key={idx} className="grid grid-cols-12 px-4 py-2 gap-2">
                    <span className="col-span-4 sm:col-span-3 font-extrabold text-slate-600 dark:text-slate-400">
                      {m.label}:
                    </span>
                    <span className="col-span-8 sm:col-span-9 font-semibold text-slate-900 break-all dark:text-slate-100">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <div className="p-4 sm:p-5 space-y-3">
              {block.subHeading && (
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {block.subHeading}
                </div>
              )}
              <div className="text-sm leading-7 text-slate-800 whitespace-pre-line dark:text-slate-200">
                {renderInlineText(block.body)}
              </div>
              {block.footerLines && block.footerLines.length > 0 && (
                <div className="pt-2 text-sm font-bold text-slate-900 dark:text-slate-100 space-y-0.5">
                  {block.footerLines.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-slate-300 bg-white p-5 sm:p-6 shadow-xs dark:border-slate-700 dark:bg-slate-950 space-y-3">
            {block.centerHeading && (
              <div className="text-center text-base font-extrabold text-slate-900 underline underline-offset-4 dark:text-white">
                {block.centerHeading}
              </div>
            )}
            {block.sloganOrHighlight && (
              <div className="text-center text-xs sm:text-sm font-bold italic text-amber-800 dark:text-amber-300">
                “{block.sloganOrHighlight}”
              </div>
            )}
            {block.metadataLines && block.metadataLines.length > 0 && (
              <div className="text-xs sm:text-sm space-y-1 border-b border-slate-100 pb-3 dark:border-slate-800">
                {block.metadataLines.map((m, idx) => (
                  <div key={idx} className="text-slate-800 dark:text-slate-200">
                    {m.label ? (
                      <>
                        <strong className="text-slate-900 dark:text-white">
                          {m.label}:{' '}
                        </strong>
                        {m.value}
                      </>
                    ) : (
                      <span>{m.value}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
            {block.subHeading && (
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {block.subHeading}
              </div>
            )}
            <div className="text-sm leading-7 text-slate-800 whitespace-pre-line dark:text-slate-200">
              {renderInlineText(block.body)}
            </div>
            {block.footerLines && block.footerLines.length > 0 && (
              <div className="pt-2 text-sm font-bold text-slate-900 dark:text-slate-100 space-y-0.5">
                {block.footerLines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            )}
          </div>
        )}

        {block.examinerNote && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 px-3.5 py-2.5 text-xs text-emerald-950 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-200">
            <strong>CBSE Examiner Full-Marks Secret:</strong>{' '}
            {renderInlineText(block.examinerNote)}
          </div>
        )}
      </div>
    </div>
  );
}

interface BlockRendererProps {
  block: ContentBlock;
  subtopicWords?: WordAnnotation[];
  bestQuizScore?: { correct: number; total: number } | null;
  bestQuizScoresBySubject?: Record<string, { correct: number; total: number }>;
  onSaveQuizScore?: (correct: number, total: number, subjectSlug?: string) => void;
}

export function BlockRenderer({
  block,
  subtopicWords,
  bestQuizScore,
  bestQuizScoresBySubject,
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

    case 'poetic-stanza':
      return <PoeticStanzaCard block={block} />;

    case 'writing-sample':
      return <WritingSampleCard block={block} />;

    case 'english-transcript':
      return <EnglishTranscriptCard block={block} />;

    case 'chapter-word-bank':
      return (
        <ChapterWordBankCard block={block} subtopicWords={subtopicWords} />
      );

    case 'ncert-reference':
      return <NcertReferenceCard block={block} />;

    case 'muhavre-list':
      return <MuhavreListCard block={block} />;

    case 'samas-list':
      return <SamasListCard block={block} />;

    case 'lab':
      return (
        <div className="space-y-2 no-print-interactive">
          <LabResolver
            labId={block.labId}
            bestQuizScore={bestQuizScore}
            bestQuizScoresBySubject={bestQuizScoresBySubject}
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
