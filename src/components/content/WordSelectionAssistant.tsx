import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import {
  BookmarkCheck,
  BookmarkPlus,
  BookOpen,
  Loader2,
  RotateCcw,
  Sparkles,
  WifiOff,
  X,
} from 'lucide-react';
import {
  AiWordExplanation,
  LocalCuratedMatch,
  findLocalHindiMatches,
  getCachedAiExplanation,
  isWordSaved,
  normalizeLookupText,
  setCachedAiExplanation,
  toggleSavedWord,
} from '../../utils/hindiWordLookup';

interface WordSelectionAssistantProps {
  containerRef: RefObject<HTMLElement | null>;
  isOnline: boolean;
  enabled: boolean;
}

interface SelectionDraft {
  word: string;
  contextSentence: string;
  surroundingPassage: string;
  sectionHeading: string;
  chapterTitle: string;
  subjectSlug: string;
  rect: { top: number; bottom: number; left: number; width: number };
  localMatches: LocalCuratedMatch[];
  cachedAi: AiWordExplanation | null;
}

function getElementFromNode(node: Node | null): Element | null {
  if (!node) return null;
  return node.nodeType === Node.ELEMENT_NODE
    ? (node as Element)
    : node.parentElement;
}

function isInsideIgnoredElement(node: Node | null): boolean {
  const el = getElementFromNode(node);
  if (!el) return true;
  return Boolean(
    el.closest(
      'input, textarea, select, option, button, [contenteditable="true"], .no-word-lookup'
    )
  );
}

function extractSurroundingSentence(
  range: Range,
  selectedWord: string,
  boundaryRoot: HTMLElement
): string {
  const startEl = getElementFromNode(range.commonAncestorContainer);
  if (!startEl) return '';

  const blockEl = startEl.closest(
    'p, li, td, th, blockquote, h1, h2, h3, h4, div, section, article'
  );
  const sourceEl =
    blockEl && boundaryRoot.contains(blockEl) ? blockEl : startEl;
  const fullText = (sourceEl.textContent ?? '').replace(/\s+/g, ' ').trim();
  if (!fullText) return '';

  if (fullText.length <= 320) {
    return fullText;
  }

  const idx = fullText.indexOf(selectedWord);
  if (idx === -1) {
    return fullText.slice(0, 300);
  }

  const delimiters = new Set(['।', '॥', '.', '?', '!', '\n']);
  let start = idx;
  while (start > 0 && idx - start < 180) {
    if (delimiters.has(fullText[start - 1])) break;
    start--;
  }

  let end = idx + selectedWord.length;
  while (end < fullText.length && end - (idx + selectedWord.length) < 180) {
    if (delimiters.has(fullText[end])) {
      end++;
      break;
    }
    end++;
  }

  return fullText.slice(start, end).trim().slice(0, 360);
}

function extractSurroundingPassageAndSection(
  range: Range,
  selectedWord: string,
  boundaryRoot: HTMLElement
): { surroundingPassage: string; sectionHeading: string } {
  const startEl = getElementFromNode(range.commonAncestorContainer);
  if (!startEl) {
    return { surroundingPassage: '', sectionHeading: '' };
  }

  let sectionHeading = '';
  const parentSection = startEl.closest('section');
  if (parentSection && boundaryRoot.contains(parentSection)) {
    const h = parentSection.querySelector('h2, h3');
    if (h) {
      sectionHeading = (h.textContent ?? '').replace(/\s+/g, ' ').trim().slice(0, 160);
    }
  }
  if (!sectionHeading) {
    let cursorEl: Element | null = startEl;
    while (cursorEl && cursorEl !== boundaryRoot && !sectionHeading) {
      let sib = cursorEl.previousElementSibling;
      while (sib) {
        const headingEl = /^H[2-4]$/.test(sib.tagName)
          ? sib
          : sib.querySelector('h2, h3');
        if (headingEl) {
          sectionHeading = (headingEl.textContent ?? '').replace(/\s+/g, ' ').trim().slice(0, 160);
          break;
        }
        sib = sib.previousElementSibling;
      }
      cursorEl = cursorEl.parentElement;
    }
  }

  let passageEl: HTMLElement | null = startEl as HTMLElement;
  let bestText = (startEl.textContent ?? '').replace(/\s+/g, ' ').trim();
  let cur: HTMLElement | null = startEl.parentElement;

  while (cur && cur !== boundaryRoot) {
    const candidateText = (cur.textContent ?? '').replace(/\s+/g, ' ').trim();
    if (candidateText.length > 1600 && bestText.length >= 120) {
      break;
    }
    passageEl = cur;
    bestText = candidateText;
    if (bestText.length >= 180) {
      if (cur.tagName === 'SECTION' || cur.tagName === 'ARTICLE' || bestText.length >= 420) {
        break;
      }
    }
    cur = cur.parentElement;
  }

  let surroundingPassage = bestText;
  if (surroundingPassage.length > 1100 && passageEl) {
    const idx = surroundingPassage.indexOf(selectedWord);
    if (idx === -1) {
      surroundingPassage = surroundingPassage.slice(0, 1100);
    } else {
      const start = Math.max(0, idx - 500);
      const end = Math.min(surroundingPassage.length, idx + selectedWord.length + 550);
      surroundingPassage = surroundingPassage.slice(start, end).trim();
    }
  }

  return { surroundingPassage, sectionHeading };
}

function renderHighlightedSentence(sentence: string, word: string) {
  if (!word) return sentence;
  const idx = sentence.indexOf(word);
  if (idx === -1) return sentence;

  return (
    <>
      {sentence.slice(0, idx)}
      <mark className="rounded bg-indigo-100 px-1.5 py-0.5 font-extrabold text-indigo-950 dark:bg-indigo-900/80 dark:text-indigo-100">
        {sentence.slice(idx, idx + word.length)}
      </mark>
      {sentence.slice(idx + word.length)}
    </>
  );
}

function readPageMetadata(): { chapterTitle: string; subjectSlug: string } {
  const heading = document
    .querySelector('main h1')
    ?.textContent?.replace(/\s+/g, ' ')
    .trim();
  const match = window.location.pathname.match(/^\/subject\/([^/]+)/);
  return {
    chapterTitle: heading || document.title || '',
    subjectSlug: match ? match[1] : 'hindi',
  };
}

export function WordSelectionAssistant({
  containerRef,
  isOnline,
  enabled,
}: WordSelectionAssistantProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const requestIdRef = useRef(0);
  const cardOpenRef = useRef(false);
  const loadingAiRef = useRef(false);

  const [draft, setDraft] = useState<SelectionDraft | null>(null);
  const [cardOpen, setCardOpen] = useState(false);
  const [loadingAi, setLoadingAi] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [aiResult, setAiResult] = useState<AiWordExplanation | null>(null);
  const [savedTick, setSavedTick] = useState(0);

  const updateCardOpen = useCallback((next: boolean) => {
    cardOpenRef.current = next;
    setCardOpen(next);
  }, []);

  const updateLoadingAi = useCallback((next: boolean) => {
    loadingAiRef.current = next;
    setLoadingAi(next);
  }, []);

  const dismissAll = useCallback(() => {
    requestIdRef.current += 1;
    cardOpenRef.current = false;
    loadingAiRef.current = false;
    setDraft(null);
    setCardOpen(false);
    setLoadingAi(false);
    setAiError(null);
    setAiResult(null);
  }, []);

  useEffect(() => {
    if (!enabled) {
      dismissAll();
    }
  }, [enabled, dismissAll]);

  useEffect(() => {
    if (!cardOpen || typeof document === 'undefined') return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [cardOpen]);

  const captureCurrentSelection = useCallback(() => {
    if (!enabled || cardOpenRef.current || loadingAiRef.current) return;
    const root = containerRef.current;
    if (!root) return;

    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) {
      return;
    }

    const range = sel.getRangeAt(0);
    if (
      !root.contains(range.commonAncestorContainer) ||
      isInsideIgnoredElement(range.startContainer) ||
      isInsideIgnoredElement(range.endContainer)
    ) {
      return;
    }

    const cleaned = normalizeLookupText(sel.toString());
    if (!cleaned || cleaned.length < 2 || cleaned.length > 80) {
      return;
    }

    const wordCount = cleaned.split(/\s+/).length;
    if (wordCount > 8 || !/[A-Za-z\u0900-\u097F]/.test(cleaned)) {
      return;
    }

    const rect = range.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      return;
    }

    const contextSentence = extractSurroundingSentence(range, cleaned, root);
    const { surroundingPassage, sectionHeading } =
      extractSurroundingPassageAndSection(range, cleaned, root);
    const { chapterTitle, subjectSlug } = readPageMetadata();
    const localMatches = findLocalHindiMatches(cleaned);
    const cachedAi = getCachedAiExplanation(cleaned, contextSentence);

    setDraft({
      word: cleaned,
      contextSentence,
      surroundingPassage,
      sectionHeading,
      chapterTitle,
      subjectSlug,
      rect: {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
      },
      localMatches,
      cachedAi,
    });
    updateCardOpen(false);
    updateLoadingAi(false);
    setAiError(null);
    setAiResult(cachedAi);
  }, [containerRef, enabled, updateCardOpen, updateLoadingAi]);

  useEffect(() => {
    if (!enabled) return;
    let timer: number | undefined;

    const scheduleCapture = (e?: Event) => {
      if (e?.target && panelRef.current?.contains(e.target as Node)) {
        return;
      }
      if (cardOpenRef.current || loadingAiRef.current) {
        return;
      }
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (cardOpenRef.current || loadingAiRef.current) {
          return;
        }
        captureCurrentSelection();
      }, 25);
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (
        panelRef.current?.contains(e.target as Node) ||
        cardOpenRef.current ||
        loadingAiRef.current
      ) {
        return;
      }
      // Clear previous floating pill if user starts a fresh click outside the panel
      setDraft((prev) => (prev ? null : prev));
      updateCardOpen(false);
      updateLoadingAi(false);
      setAiError(null);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dismissAll();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.shiftKey && !cardOpenRef.current && !loadingAiRef.current) {
        scheduleCapture(e);
      }
    };

    document.addEventListener('mouseup', scheduleCapture);
    document.addEventListener('touchend', scheduleCapture, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('mouseup', scheduleCapture);
      document.removeEventListener('touchend', scheduleCapture);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [captureCurrentSelection, dismissAll, enabled, updateCardOpen, updateLoadingAi]);

  const askTeacher = useCallback(
    async (targetDraft: SelectionDraft, forceRefresh = false) => {
      updateCardOpen(true);
      setAiError(null);

      if (!forceRefresh && targetDraft.cachedAi) {
        setAiResult(targetDraft.cachedAi);
        updateLoadingAi(false);
        return;
      }

      if (!isOnline || (typeof navigator !== 'undefined' && !navigator.onLine)) {
        updateLoadingAi(false);
        setAiError(
          'अभी इंटरनेट उपलब्ध नहीं है। आप ऑफ़लाइन शब्दार्थ या पाठ के English Transcript का उपयोग कर सकते हैं।'
        );
        return;
      }

      const myRequestId = ++requestIdRef.current;
      updateLoadingAi(true);
      setAiResult(null);

      try {
        const requestBody = JSON.stringify({
          word: targetDraft.word,
          contextSentence: targetDraft.contextSentence,
          surroundingPassage: targetDraft.surroundingPassage,
          sectionHeading: targetDraft.sectionHeading,
          chapterTitle: targetDraft.chapterTitle,
          subjectSlug: targetDraft.subjectSlug,
        });

        const res = await fetch('/api/ask-teacher', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: requestBody,
        });

        const data = (await res.json().catch(() => null)) as {
          ok?: boolean;
          model?: string;
          explanation?: AiWordExplanation;
          code?: string;
        } | null;

        if (myRequestId !== requestIdRef.current) return;

        if (!res.ok || !data?.ok || !data.explanation) {
          if (res.status === 503 || data?.code === 'SERVER_KEY_MISSING') {
            setAiError(
              'AI Teacher सेवा अभी सक्रिय नहीं है। सहायता के लिए पाठ के "शब्दार्थ संकलन" और "English Transcript" कार्ड देखें।'
            );
          } else {
            setAiError(
              'अभी AI Teacher से उत्तर प्राप्त नहीं हो सका। कृपया थोड़ी देर बाद पुनः प्रयास करें।'
            );
          }
          updateLoadingAi(false);
          return;
        }

        const enriched: AiWordExplanation = {
          ...data.explanation,
          model: data.model,
          chapterTitle: targetDraft.chapterTitle,
        };
        setCachedAiExplanation(
          targetDraft.word,
          targetDraft.contextSentence,
          enriched
        );
        setAiResult(enriched);
        setDraft((prev) =>
          prev && prev.word === targetDraft.word
            ? { ...prev, cachedAi: enriched }
            : prev
        );
        updateLoadingAi(false);
      } catch {
        if (myRequestId !== requestIdRef.current) return;
        setAiError(
          'नेटवर्क त्रुटि के कारण AI Teacher से संपर्क नहीं हो सका। कृपया इंटरनेट जाँचें।'
        );
        updateLoadingAi(false);
      }
    },
    [isOnline, updateCardOpen, updateLoadingAi]
  );

  if (!enabled || !draft) return null;

  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
  const viewportHeight =
    typeof window !== 'undefined' ? window.innerHeight : 768;

  const anchorCenterX = draft.rect.left + draft.rect.width / 2;
  const showAbove = draft.rect.top > 92;

  const primaryPillBaseWidth = loadingAi ? 170 : draft.cachedAi ? 230 : 210;
  const pillWidth = primaryPillBaseWidth + (draft.localMatches.length > 0 ? 115 : 0);
  const pillLeft = Math.max(
    12,
    Math.min(anchorCenterX - pillWidth / 2, viewportWidth - pillWidth - 12)
  );
  const pillTop = showAbove
    ? Math.max(64, draft.rect.top - 48)
    : Math.min(viewportHeight - 56, draft.rect.bottom + 10);

  const primaryLocalMatch = draft.localMatches[0];
  const saveCandidate: AiWordExplanation | null =
    aiResult ??
    (primaryLocalMatch
      ? {
          word: primaryLocalMatch.matchedTerm,
          rootForm: primaryLocalMatch.matchedTerm,
          hindiMeaning: primaryLocalMatch.hindiMeaning,
          englishMeaning: primaryLocalMatch.englishMeaning,
          contextMeaning: draft.contextSentence,
          grammarNote: primaryLocalMatch.grammarNote ?? '',
          exampleSentence: primaryLocalMatch.exampleSentence ?? '',
          chapterTitle:
            primaryLocalMatch.sourceChapter || draft.chapterTitle,
        }
      : null);

  // Use savedTick to trigger re-read after toggling localStorage
  const currentlySaved =
    savedTick >= 0 && saveCandidate ? isWordSaved(saveCandidate.word) : false;

  const handleToggleSave = () => {
    if (!saveCandidate) return;
    toggleSavedWord(saveCandidate);
    setSavedTick((t) => t + 1);
  };

  return (
    <div ref={panelRef} className="no-print no-word-lookup">
      {/* Compact Selection Action Pill */}
      {!cardOpen && (
        <div
          style={{ top: `${pillTop}px`, left: `${pillLeft}px` }}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onMouseUp={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
          className="fixed z-50 flex flex-wrap items-center gap-1.5 rounded-full border border-indigo-200 bg-white/95 p-1 shadow-xl backdrop-blur-sm animate-pop-in dark:border-indigo-800 dark:bg-slate-900/95"
        >
          <button
            type="button"
            onClick={() => void askTeacher(draft)}
            className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-extrabold text-white hover:bg-indigo-700 dark:hover:bg-indigo-500 transition cursor-pointer"
          >
            {loadingAi ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                Thinking...
              </>
            ) : (
              <>
                <Sparkles className="h-3.5 w-3.5" />
                {draft.cachedAi ? 'View AI Explanation' : 'Ask AI Teacher'}
              </>
            )}
          </button>

          {draft.localMatches.length > 0 && (
            <button
              type="button"
              onClick={() => {
                updateCardOpen(true);
                updateLoadingAi(false);
                setAiError(null);
              }}
              className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1.5 text-xs font-bold text-amber-950 hover:bg-amber-200 hover:text-amber-950 transition cursor-pointer dark:bg-amber-950/70 dark:text-amber-200 dark:hover:bg-amber-900 dark:hover:text-amber-100"
            >
              <BookOpen className="h-3.5 w-3.5" />
              NCERT अर्थ
            </button>
          )}

          <button
            type="button"
            onClick={dismissAll}
            aria-label="Close word helper"
            className="rounded-full p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Centered Contextual AI Teacher Modal Dialog */}
      {cardOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 backdrop-blur-xs p-3 sm:p-6"
          onClick={dismissAll}
          role="dialog"
          aria-modal="true"
          aria-label={`AI Teacher explanation for ${draft.word}`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[88vh] flex flex-col rounded-2xl border border-indigo-200/90 bg-white shadow-2xl overflow-hidden animate-pop-in dark:border-indigo-800/80 dark:bg-slate-900"
          >
            {/* Modal Header */}
            <div className="shrink-0 flex items-start justify-between gap-3 border-b border-indigo-100 bg-indigo-50/90 px-5 py-4 dark:border-slate-800 dark:bg-slate-950/95">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    <Sparkles className="h-3 w-3" /> AI Teacher
                  </span>
                  {aiResult?.rootForm &&
                    aiResult.rootForm !== draft.word && (
                      <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold text-amber-900 dark:bg-amber-950/70 dark:text-amber-300">
                        मूल शब्द: {aiResult.rootForm}
                      </span>
                    )}
                  {draft.chapterTitle && (
                    <span className="truncate max-w-[260px] rounded-full border border-slate-200 bg-white/80 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                      {draft.chapterTitle}
                    </span>
                  )}
                </div>

                <h3 className="mt-2 break-words text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  <span aria-hidden="true" className="mr-1.5">📌</span>
                  {aiResult?.word || draft.word}
                  {aiResult?.transliteration ? (
                    <span className="ml-1.5 font-semibold text-base sm:text-lg text-slate-500 dark:text-slate-400">
                      ({aiResult.transliteration})
                    </span>
                  ) : null}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {saveCandidate && (
                  <button
                    type="button"
                    onClick={handleToggleSave}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                      currentlySaved
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700 dark:hover:bg-emerald-500'
                        : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white'
                    }`}
                  >
                    {currentlySaved ? (
                      <>
                        <BookmarkCheck className="h-3.5 w-3.5" /> Saved
                      </>
                    ) : (
                      <>
                        <BookmarkPlus className="h-3.5 w-3.5" /> + Save
                      </>
                    )}
                  </button>
                )}

                <kbd className="hidden sm:inline-block rounded border border-slate-200 bg-white px-2 py-1 text-[10px] font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
                  ESC
                </kbd>

                <button
                  type="button"
                  onClick={dismissAll}
                  aria-label="Close AI Teacher modal"
                  className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-200/70 hover:text-slate-900 transition cursor-pointer dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Modal Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
              {/* Selected Line Context Strip */}
              {draft.contextSentence && (
                <div className="rounded-xl border border-slate-200 bg-slate-50/90 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/70">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      चयनित पंक्ति (Selected Context)
                    </span>
                    {draft.sectionHeading && (
                      <span className="truncate max-w-[260px] text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                        {draft.sectionHeading}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    “{renderHighlightedSentence(draft.contextSentence, draft.word)}”
                  </p>
                </div>
              )}

              {/* Thinking Animation State */}
              {loadingAi && (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-2xl border border-indigo-200 bg-indigo-50/70 p-5 space-y-4 dark:border-indigo-800/80 dark:bg-indigo-950/40"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <Sparkles className="absolute -top-1 -right-1 h-3.5 w-3.5 text-amber-300 animate-pulse" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm sm:text-base font-extrabold text-indigo-950 dark:text-indigo-100">
                          AI Teacher सोच रहा है (Thinking)
                        </p>
                        <span className="inline-flex items-center gap-1 pt-0.5" aria-hidden="true">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-bounce" />
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-bounce [animation-delay:150ms]" />
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-bounce [animation-delay:300ms]" />
                        </span>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-indigo-800/90 dark:text-indigo-200/90">
                        “{draft.word}” का सटीक अर्थ, पाठ-संदर्भ और व्याकरण तैयार किया जा रहा है...
                      </p>
                    </div>
                  </div>

                  {/* Animated Skeleton Preview Blocks */}
                  <div className="space-y-3 pt-1">
                    <div className="rounded-xl border border-indigo-200/70 bg-white/80 p-3.5 space-y-2 dark:border-indigo-900/60 dark:bg-slate-900/60">
                      <div className="h-3 w-28 rounded bg-indigo-200/80 dark:bg-indigo-800/70 animate-pulse" />
                      <div className="h-3 w-full rounded bg-slate-200/90 dark:bg-slate-800 animate-pulse" />
                      <div className="h-3 w-5/6 rounded bg-slate-200/90 dark:bg-slate-800 animate-pulse" />
                    </div>
                    <div className="rounded-xl border border-indigo-200/70 bg-white/80 p-3.5 space-y-2 dark:border-indigo-900/60 dark:bg-slate-900/60">
                      <div className="h-3 w-36 rounded bg-indigo-200/80 dark:bg-indigo-800/70 animate-pulse" />
                      <div className="h-3 w-11/12 rounded bg-slate-200/90 dark:bg-slate-800 animate-pulse" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="rounded-xl border border-indigo-200/70 bg-white/80 p-3 space-y-2 dark:border-indigo-900/60 dark:bg-slate-900/60">
                        <div className="h-3 w-24 rounded bg-indigo-200/80 dark:bg-indigo-800/70 animate-pulse" />
                        <div className="h-3 w-4/5 rounded bg-slate-200/90 dark:bg-slate-800 animate-pulse" />
                      </div>
                      <div className="rounded-xl border border-indigo-200/70 bg-white/80 p-3 space-y-2 dark:border-indigo-900/60 dark:bg-slate-900/60">
                        <div className="h-3 w-28 rounded bg-indigo-200/80 dark:bg-indigo-800/70 animate-pulse" />
                        <div className="h-3 w-3/4 rounded bg-slate-200/90 dark:bg-slate-800 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Friendly Non-Technical Error / Offline Message */}
              {aiError && (
                <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-4 space-y-3 dark:border-rose-900/60 dark:bg-rose-950/30">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-rose-900 dark:text-rose-200">
                    <WifiOff className="h-4 w-4 shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
                    <span>{aiError}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => void askTeacher(draft, true)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 dark:hover:bg-indigo-500 transition cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    पुनः प्रयास करें (Retry)
                  </button>
                </div>
              )}

              {/* Full Gemini-App Style AI Teacher Explanation */}
              {aiResult && (
                <div className="space-y-4">
                  {/* Primary Gemini-Style Explanation Card */}
                  <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-4 sm:p-5 space-y-3.5 dark:border-indigo-900/60 dark:bg-indigo-950/25">
                    <div>
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                        अर्थ (Meaning)
                      </div>
                      <p className="mt-1 text-sm sm:text-[15px] leading-relaxed text-slate-900 dark:text-slate-100">
                        {aiResult.detailedMeaning || aiResult.hindiMeaning}
                      </p>
                    </div>

                    <div className="border-t border-indigo-100 pt-3.5 dark:border-indigo-900/50">
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                        संदर्भ (In This Chapter)
                      </div>
                      <p className="mt-1 text-sm sm:text-[15px] leading-relaxed text-slate-800 dark:text-slate-200">
                        {aiResult.contextMeaning}
                      </p>
                    </div>
                  </div>

                  {/* Quick Exam Meaning Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/60 p-3.5 dark:border-emerald-900/60 dark:bg-emerald-950/25">
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        मानक हिंदी अर्थ (Exam Safe)
                      </div>
                      <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-900 dark:text-slate-100">
                        {aiResult.hindiMeaning}
                      </p>
                    </div>

                    <div className="rounded-xl border border-indigo-200/80 bg-indigo-50/50 p-3.5 dark:border-indigo-900/60 dark:bg-indigo-950/25">
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                        English Meaning
                      </div>
                      <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-900 dark:text-slate-100">
                        {aiResult.englishMeaning}
                      </p>
                    </div>
                  </div>

                  {/* CBSE Grammar & Example Usage Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-violet-200/80 bg-violet-50/60 p-3.5 dark:border-violet-900/60 dark:bg-violet-950/25">
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-violet-700 dark:text-violet-400">
                        व्याकरण टिप्पणी (Grammar)
                      </div>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                        {aiResult.grammarNote}
                      </p>
                      {aiResult.rootForm && (
                        <p className="mt-1.5 text-[11px] font-bold text-violet-800 dark:text-violet-300">
                          मूल शब्द: {aiResult.rootForm}
                        </p>
                      )}
                    </div>

                    <div className="rounded-xl border border-amber-200/80 bg-amber-50/60 p-3.5 dark:border-amber-900/60 dark:bg-amber-950/25">
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                        वाक्य प्रयोग (Example Usage)
                      </div>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                        {aiResult.exampleSentence}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Local NCERT / Curated Matches */}
              {draft.localMatches.length > 0 && (
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                      पाठ्यक्रम शब्दकोश ({draft.localMatches[0].exactMatch ? 'Exact Match' : 'Stemmed Match'})
                    </span>
                    {draft.localMatches[0].sourceChapter && (
                      <span className="truncate max-w-[240px] text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        {draft.localMatches[0].sourceChapter}
                      </span>
                    )}
                  </div>

                  {draft.localMatches.slice(0, 2).map((m, idx) => (
                    <div
                      key={`${m.matchedTerm}-${idx}`}
                      className="rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 space-y-1.5 dark:border-amber-900/60 dark:bg-amber-950/25"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-sm font-extrabold text-amber-950 dark:text-amber-200">
                          {m.matchedTerm}
                        </span>
                        <span className="rounded bg-white/80 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-800 dark:bg-slate-900 dark:text-amber-300">
                          {m.kind === 'muhavra'
                            ? 'मुहावरा'
                            : m.kind === 'glossary'
                            ? 'Glossary'
                            : 'पाठ शब्दार्थ'}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-900 font-semibold dark:text-slate-100">
                        <span className="text-emerald-700 dark:text-emerald-400">
                          हिंदी अर्थ:
                        </span>{' '}
                        {m.hindiMeaning}
                      </div>
                      {m.englishMeaning && (
                        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <span className="font-bold text-indigo-700 dark:text-indigo-400">
                            English:
                          </span>{' '}
                          {m.englishMeaning}
                        </div>
                      )}
                      {m.grammarNote && (
                        <div className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                          व्याकरण: {m.grammarNote}
                        </div>
                      )}
                      {m.exampleSentence && (
                        <div className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>प्रयोग:</strong> {m.exampleSentence}
                        </div>
                      )}
                    </div>
                  ))}

                  {!aiResult && !loadingAi && !aiError && (
                    <button
                      type="button"
                      onClick={() => void askTeacher(draft)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-indigo-700 dark:hover:bg-indigo-500 transition cursor-pointer"
                    >
                      <Sparkles className="h-4 w-4" />
                      इस वाक्य के संदर्भ में AI Teacher से विस्तार से समझें
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="shrink-0 flex items-center justify-between gap-2 border-t border-slate-100 bg-slate-50/90 px-5 py-3 dark:border-slate-800 dark:bg-slate-950/90">
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                AI Teacher • CBSE Class 10 Study Hub
              </span>
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-[11px] text-slate-400 dark:text-slate-500">
                  Esc to close
                </span>
                <button
                  type="button"
                  onClick={dismissAll}
                  className="rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
                >
                  बंद करें (Close)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
