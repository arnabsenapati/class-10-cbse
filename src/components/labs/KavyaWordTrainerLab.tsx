import { useEffect, useMemo, useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Feather,
  Languages,
  RotateCcw,
  Scale,
  Shuffle,
  Sparkles,
  Trash2,
  Trophy,
  XCircle,
} from 'lucide-react';
import { hindiSubject } from '../../data/subjects/hindi';
import { hindiGlossary } from '../../data/subjects/hindi/glossary';
import {
  GlossaryTerm,
  MuhavraItem,
  SamasItem,
} from '../../types/curriculum';
import {
  SAVED_WORDS_EVENT,
  SavedVocabularyItem,
  getSavedWords,
  removeSavedWord,
} from '../../utils/hindiWordLookup';

type TrainerTab = 'words' | 'muhavre' | 'samas';
type TrainerMode = 'flashcard' | 'drill';

const SAVED_WORDS_CATEGORY = '★ मेरे सहेजे शब्द' as const;
type WordCategoryFilter =
  | 'All'
  | typeof SAVED_WORDS_CATEGORY
  | GlossaryTerm['category'];

interface TrainerWordTerm extends Omit<GlossaryTerm, 'category'> {
  category: GlossaryTerm['category'] | typeof SAVED_WORDS_CATEGORY;
  isUserSaved?: boolean;
}

interface TaggedMuhavra extends MuhavraItem {
  chapterSlug: string;
  chapterTitle: string;
}

interface TaggedSamas extends SamasItem {
  chapterSlug: string;
  chapterTitle: string;
}

const BASE_WORD_CATEGORIES: GlossaryTerm['category'][] = [
  'सधुक्कड़ी व ब्रज शब्द',
  'तत्सम व साहित्यिक शब्द',
  'उर्दू-फ़ारसी काव्य शब्द',
  'काव्य-प्रतीक व अलंकार',
  'गद्य व कथा शब्दावली',
  'व्याकरण व लेखन शब्दावली',
];

function stripMarkdown(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, '$1').replace(/`([^`]*)`/g, '$1');
}

function buildFourOptions<T>(
  allItems: T[],
  targetItem: T,
  keyFn: (item: T) => string,
  seed: number
): { options: T[]; correctIdx: number } {
  const targetKey = keyFn(targetItem);
  const distractors: T[] = [];
  const seen = new Set<string>([targetKey]);

  const len = allItems.length;
  for (let offset = 1; offset < len && distractors.length < 3; offset++) {
    const candidate = allItems[(seed * 5 + offset * 3) % len];
    const k = keyFn(candidate);
    if (!seen.has(k)) {
      seen.add(k);
      distractors.push(candidate);
    }
  }

  const combined = [...distractors];
  const insertAt = seed % (combined.length + 1);
  combined.splice(insertAt, 0, targetItem);
  return { options: combined, correctIdx: insertAt };
}

export function KavyaWordTrainerLab() {
  const [tab, setTab] = useState<TrainerTab>('words');
  const [mode, setMode] = useState<TrainerMode>('flashcard');
  const [wordCategory, setWordCategory] = useState<WordCategoryFilter>('All');
  const [chapterFilter, setChapterFilter] = useState<string>('all');
  const [savedWords, setSavedWords] = useState<SavedVocabularyItem[]>(() =>
    getSavedWords()
  );

  useEffect(() => {
    const refresh = () => setSavedWords(getSavedWords());
    window.addEventListener(SAVED_WORDS_EVENT, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(SAVED_WORDS_EVENT, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Speed drill state
  const [drillSeed, setDrillSeed] = useState(1);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [drillStats, setDrillStats] = useState({ attempted: 0, correct: 0 });

  const allMuhavre = useMemo<TaggedMuhavra[]>(() => {
    const list: TaggedMuhavra[] = [];
    for (const topic of hindiSubject.topics) {
      for (const sub of topic.subtopics) {
        const shortTitle = sub.title.replace(/\s*\(.*?\)\s*/g, '');
        for (const sec of sub.sections) {
          for (const blk of sec.blocks) {
            if (blk.type === 'muhavre-list') {
              for (const item of blk.items) {
                list.push({
                  ...item,
                  chapterSlug: sub.slug,
                  chapterTitle: shortTitle,
                });
              }
            }
          }
        }
      }
    }
    return list;
  }, []);

  const allSamas = useMemo<TaggedSamas[]>(() => {
    const list: TaggedSamas[] = [];
    for (const topic of hindiSubject.topics) {
      for (const sub of topic.subtopics) {
        const shortTitle = sub.title.replace(/\s*\(.*?\)\s*/g, '');
        for (const sec of sub.sections) {
          for (const blk of sec.blocks) {
            if (blk.type === 'samas-list') {
              for (const item of blk.items) {
                list.push({
                  ...item,
                  chapterSlug: sub.slug,
                  chapterTitle: shortTitle,
                });
              }
            }
          }
        }
      }
    }
    return list;
  }, []);

  const muhavreChapters = useMemo(() => {
    const seen = new Map<string, string>();
    for (const m of allMuhavre) {
      if (!seen.has(m.chapterSlug)) seen.set(m.chapterSlug, m.chapterTitle);
    }
    return Array.from(seen, ([slug, shortTitle]) => ({ slug, shortTitle }));
  }, [allMuhavre]);

  const samasChapters = useMemo(() => {
    const seen = new Map<string, string>();
    for (const s of allSamas) {
      if (!seen.has(s.chapterSlug)) seen.set(s.chapterSlug, s.chapterTitle);
    }
    return Array.from(seen, ([slug, shortTitle]) => ({ slug, shortTitle }));
  }, [allSamas]);

  const activeChapters = tab === 'muhavre' ? muhavreChapters : samasChapters;

  const savedGlossaryTerms = useMemo<TrainerWordTerm[]>(
    () =>
      savedWords.map((item) => ({
        id: `saved-${item.word}`,
        term: item.word,
        symbol: item.chapterTitle
          ? `मेरे शब्द • ${item.chapterTitle}`
          : 'मेरे सहेजे शब्द',
        category: SAVED_WORDS_CATEGORY,
        simpleMeaning: item.hindiMeaning,
        englishMeaning: item.englishMeaning,
        grammarNote: item.grammarNote || undefined,
        ncertDefinition: item.contextMeaning || item.hindiMeaning,
        example: item.exampleSentence || item.contextMeaning || '—',
        subtopicPath: {
          subjectSlug: 'hindi',
          topicSlug: 'sparsh-kavyakhand',
          subtopicSlug: 'kabir-ki-sakhi',
        },
        isUserSaved: true,
      })),
    [savedWords]
  );

  const allWordsPool = useMemo<TrainerWordTerm[]>(() => {
    const merged: TrainerWordTerm[] = [...savedGlossaryTerms];
    const seen = new Set(
      savedGlossaryTerms.map((t) => t.term.trim().toLowerCase())
    );
    for (const term of hindiGlossary) {
      if (!seen.has(term.term.trim().toLowerCase())) {
        merged.push(term);
      }
    }
    return merged;
  }, [savedGlossaryTerms]);

  const wordCategories = useMemo<WordCategoryFilter[]>(
    () => [
      'All',
      ...(savedGlossaryTerms.length > 0 ? [SAVED_WORDS_CATEGORY] : []),
      ...BASE_WORD_CATEGORIES,
    ],
    [savedGlossaryTerms.length]
  );

  const filteredWords = useMemo<TrainerWordTerm[]>(() => {
    if (wordCategory === SAVED_WORDS_CATEGORY) return savedGlossaryTerms;
    if (wordCategory === 'All') return allWordsPool;
    return hindiGlossary.filter((t) => t.category === wordCategory);
  }, [wordCategory, savedGlossaryTerms, allWordsPool]);

  const filteredMuhavre = useMemo(() => {
    if (chapterFilter === 'all') return allMuhavre;
    return allMuhavre.filter((m) => m.chapterSlug === chapterFilter);
  }, [allMuhavre, chapterFilter]);

  const filteredSamas = useMemo(() => {
    if (chapterFilter === 'all') return allSamas;
    return allSamas.filter((s) => s.chapterSlug === chapterFilter);
  }, [allSamas, chapterFilter]);

  const activeDeckLength =
    tab === 'words'
      ? filteredWords.length
      : tab === 'muhavre'
      ? filteredMuhavre.length
      : filteredSamas.length;

  const safeIndex =
    activeDeckLength > 0 ? cardIndex % activeDeckLength : 0;

  const switchTab = (next: TrainerTab) => {
    setTab(next);
    setChapterFilter('all');
    setCardIndex(0);
    setFlipped(false);
    setSelectedOpt(null);
  };

  const nextCard = () => {
    if (activeDeckLength === 0) return;
    setCardIndex((prev) => (prev + 1) % activeDeckLength);
    setFlipped(false);
  };

  const prevCard = () => {
    if (activeDeckLength === 0) return;
    setCardIndex((prev) => (prev - 1 + activeDeckLength) % activeDeckLength);
    setFlipped(false);
  };

  const randomCard = () => {
    if (activeDeckLength <= 1) return;
    const rand = Math.floor(Math.random() * activeDeckLength);
    setCardIndex(rand === safeIndex ? (rand + 1) % activeDeckLength : rand);
    setFlipped(false);
  };

  const drillQuestion = useMemo(() => {
    if (tab === 'words' && filteredWords.length > 0) {
      const target =
        filteredWords[(drillSeed * 3 + 1) % filteredWords.length];
      const { options, correctIdx } = buildFourOptions<TrainerWordTerm>(
        allWordsPool,
        target,
        (x) => x.simpleMeaning,
        drillSeed
      );
      return {
        promptLabel: `${target.term}`,
        subHint: `${target.symbol ?? target.category} • सही मानक हिंदी अर्थ चुनें:`,
        options: options.map((o) => ({
          label: o.simpleMeaning,
          sublabel: o.englishMeaning,
        })),
        correctIdx,
        detail: `${target.ncertDefinition}${
          target.grammarNote ? ` (${target.grammarNote})` : ''
        }`,
      };
    }

    if (tab === 'muhavre' && filteredMuhavre.length > 0) {
      const target =
        filteredMuhavre[(drillSeed * 3 + 1) % filteredMuhavre.length];
      const { options, correctIdx } = buildFourOptions(
        allMuhavre,
        target,
        (x) => x.hindiMeaning,
        drillSeed
      );
      return {
        promptLabel: target.idiom,
        subHint: `${target.chapterTitle} • इस मुहावरे का सटीक अर्थ चुनें:`,
        options: options.map((o) => ({
          label: o.hindiMeaning,
          sublabel: o.englishMeaning,
        })),
        correctIdx,
        detail: `वाक्य प्रयोग: ${stripMarkdown(target.examSentence)}`,
      };
    }

    if (tab === 'samas' && filteredSamas.length > 0) {
      const target = filteredSamas[(drillSeed * 3 + 1) % filteredSamas.length];
      const { options, correctIdx } = buildFourOptions(
        allSamas,
        target,
        (x) => `${x.vigrah} | ${x.samasType}`,
        drillSeed
      );
      return {
        promptLabel: target.samastPad,
        subHint: `${target.chapterTitle} (${target.englishMeaning}) • सही समास-विग्रह व भेद चुनें:`,
        options: options.map((o) => ({
          label: `${o.vigrah}`,
          sublabel: o.samasType,
        })),
        correctIdx,
        detail: target.examTrap
          ? stripMarkdown(target.examTrap)
          : `${target.samastPad} = ${target.vigrah} (${target.samasType})`,
      };
    }

    return null;
  }, [
    tab,
    drillSeed,
    filteredWords,
    allWordsPool,
    filteredMuhavre,
    filteredSamas,
    allMuhavre,
    allSamas,
  ]);

  const handleSelectOption = (idx: number) => {
    if (selectedOpt !== null || !drillQuestion) return;
    setSelectedOpt(idx);
    setDrillStats((prev) => ({
      attempted: prev.attempted + 1,
      correct: prev.correct + (idx === drillQuestion.correctIdx ? 1 : 0),
    }));
  };

  const handleNextDrill = () => {
    setDrillSeed((s) => s + 1);
    setSelectedOpt(null);
  };

  const currentWord = filteredWords[safeIndex];
  const currentMuhavra = filteredMuhavre[safeIndex];
  const currentSamas = filteredSamas[safeIndex];

  return (
    <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40 p-4 sm:p-6 shadow-xs dark:border-amber-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-amber-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-600 text-white">
            <Languages className="h-5 w-5" />
          </span>
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              3-in-1 हिंदी (ब) Trainer Lab — शब्दार्थ • मुहावरे • समास
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {allWordsPool.length} शब्दार्थ • {allMuhavre.length} मुहावरे •{' '}
              {allSamas.length} समास — स्पर्श, संचयन व व्याकरण Flashcards व Speed Drill (100% Offline)
            </p>
          </div>
        </div>

        {/* Mode Toggle */}
        <div className="inline-flex rounded-xl border border-amber-200 bg-white p-0.5 dark:border-slate-700 dark:bg-slate-950">
          <button
            type="button"
            onClick={() => {
              setMode('flashcard');
              setSelectedOpt(null);
            }}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              mode === 'flashcard'
                ? 'bg-amber-600 text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            Flashcards
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('drill');
              setSelectedOpt(null);
            }}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              mode === 'drill'
                ? 'bg-amber-600 text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            MCQ Speed Drill
          </button>
        </div>
      </div>

      {/* 3 Trainer Pillars Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => switchTab('words')}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold transition cursor-pointer ${
              tab === 'words'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:border-teal-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            1. शब्दार्थ ({allWordsPool.length})
          </button>
          <button
            type="button"
            onClick={() => switchTab('muhavre')}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold transition cursor-pointer ${
              tab === 'muhavre'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:border-rose-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200'
            }`}
          >
            <Feather className="h-3.5 w-3.5" />
            2. मुहावरे ({allMuhavre.length})
          </button>
          <button
            type="button"
            onClick={() => switchTab('samas')}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold transition cursor-pointer ${
              tab === 'samas'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:border-indigo-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200'
            }`}
          >
            <Scale className="h-3.5 w-3.5" />
            3. समास ({allSamas.length})
          </button>
        </div>

        {mode === 'drill' && drillStats.attempted > 0 && (
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300">
            <Trophy className="h-3.5 w-3.5" />
            Drill Score: {drillStats.correct}/{drillStats.attempted} (
            {Math.round((drillStats.correct / drillStats.attempted) * 100)}%)
          </div>
        )}
      </div>

      {/* Category / Chapter Filter Pills */}
      {tab === 'words' ? (
        <div className="flex flex-wrap gap-1.5">
          {wordCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setWordCategory(cat);
                setCardIndex(0);
                setFlipped(false);
                setSelectedOpt(null);
              }}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
                wordCategory === cat
                  ? 'bg-teal-700 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-teal-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
              }`}
            >
              {cat === SAVED_WORDS_CATEGORY
                ? `${cat} (${savedGlossaryTerms.length})`
                : cat}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => {
              setChapterFilter('all');
              setCardIndex(0);
              setFlipped(false);
              setSelectedOpt(null);
            }}
            className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
              chapterFilter === 'all'
                ? 'bg-slate-800 text-white dark:bg-white dark:text-slate-900'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
            }`}
          >
            सभी उपलब्ध पाठ ({activeChapters.length})
          </button>
          {activeChapters.map((ch) => (
            <button
              key={ch.slug}
              type="button"
              onClick={() => {
                setChapterFilter(ch.slug);
                setCardIndex(0);
                setFlipped(false);
                setSelectedOpt(null);
              }}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
                chapterFilter === ch.slug
                  ? 'bg-amber-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-amber-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
              }`}
            >
              {ch.shortTitle}
            </button>
          ))}
        </div>
      )}

      {/* FLASHCARD MODE */}
      {mode === 'flashcard' && activeDeckLength > 0 && (
        <div className="space-y-3">
          <div
            onClick={() => setFlipped((f) => !f)}
            className="rounded-2xl border-2 border-amber-300 bg-white p-5 sm:p-7 min-h-[210px] flex flex-col justify-between cursor-pointer hover:border-amber-500 transition shadow-xs dark:border-amber-800 dark:bg-slate-950"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Card {safeIndex + 1} / {activeDeckLength} •{' '}
                {tab === 'words' && currentWord
                  ? currentWord.symbol ?? currentWord.category
                  : tab === 'muhavre' && currentMuhavra
                  ? currentMuhavra.chapterTitle
                  : currentSamas?.chapterTitle}
              </span>
              <div className="flex items-center gap-2">
                {tab === 'words' && currentWord?.isUserSaved && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const nextList = removeSavedWord(currentWord.term);
                      if (
                        nextList.length === 0 &&
                        wordCategory === SAVED_WORDS_CATEGORY
                      ) {
                        setWordCategory('All');
                      }
                      setFlipped(false);
                    }}
                    title="Remove from My Saved Words"
                    className="inline-flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 px-2 py-0.5 text-[10px] font-bold text-rose-700 hover:bg-rose-100 cursor-pointer dark:border-rose-800 dark:bg-rose-950/60 dark:text-rose-300 dark:hover:bg-rose-900/70"
                  >
                    <Trash2 className="h-3 w-3" /> Remove
                  </button>
                )}
                <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                  {flipped ? 'Answer Side (Tap to flip)' : 'Prompt Side (Tap to flip)'}
                </span>
              </div>
            </div>

            {!flipped ? (
              <div className="py-6 text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {tab === 'words' && currentWord
                    ? currentWord.term
                    : tab === 'muhavre' && currentMuhavra
                    ? currentMuhavra.idiom
                    : currentSamas?.samastPad}
                </div>
                {tab === 'muhavre' && currentMuhavra?.sourceLine && (
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {currentMuhavra.sourceLine}
                  </div>
                )}
                {tab === 'samas' && currentSamas && (
                  <div className="text-xs font-medium text-indigo-700 dark:text-indigo-400">
                    English: {currentSamas.englishMeaning} — मानक विग्रह व भेद सोचें!
                  </div>
                )}
                {tab === 'words' && currentWord && (
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Category: {currentWord.category} — मानक हिंदी व English अर्थ सोचें!
                  </div>
                )}
              </div>
            ) : (
              <div className="py-3 space-y-2.5 text-sm">
                {tab === 'words' && currentWord && (
                  <>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 dark:bg-emerald-950/30 dark:border-emerald-900">
                        <div className="text-[10px] font-extrabold uppercase text-emerald-800 dark:text-emerald-400">
                          मानक हिंदी अर्थ
                        </div>
                        <div className="font-bold text-slate-900 dark:text-white mt-0.5">
                          {currentWord.simpleMeaning}
                        </div>
                      </div>
                      <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-3 dark:bg-indigo-950/30 dark:border-indigo-900">
                        <div className="text-[10px] font-extrabold uppercase text-indigo-800 dark:text-indigo-400">
                          English Meaning
                        </div>
                        <div className="font-semibold text-slate-900 dark:text-white mt-0.5">
                          {currentWord.englishMeaning ?? '—'}
                        </div>
                      </div>
                    </div>
                    {currentWord.grammarNote && (
                      <div className="text-xs font-bold text-indigo-700 dark:text-indigo-400">
                        व्याकरण: {currentWord.grammarNote}
                      </div>
                    )}
                    <div className="text-xs text-slate-700 dark:text-slate-300">
                      <strong>उदाहरण:</strong> {currentWord.example}
                    </div>
                  </>
                )}

                {tab === 'muhavre' && currentMuhavra && (
                  <>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 dark:bg-emerald-950/30 dark:border-emerald-900">
                        <div className="text-[10px] font-extrabold uppercase text-emerald-800 dark:text-emerald-400">
                          मानक हिंदी अर्थ
                        </div>
                        <div className="font-bold text-slate-900 dark:text-white mt-0.5">
                          {currentMuhavra.hindiMeaning}
                        </div>
                      </div>
                      <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-3 dark:bg-indigo-950/30 dark:border-indigo-900">
                        <div className="text-[10px] font-extrabold uppercase text-indigo-800 dark:text-indigo-400">
                          English Meaning
                        </div>
                        <div className="font-semibold text-slate-900 dark:text-white mt-0.5">
                          {currentMuhavra.englishMeaning}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300">
                      <strong>वाक्य प्रयोग:</strong>{' '}
                      {stripMarkdown(currentMuhavra.examSentence)}
                    </div>
                  </>
                )}

                {tab === 'samas' && currentSamas && (
                  <>
                    <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-teal-50 border border-teal-200 p-3 dark:bg-teal-950/30 dark:border-teal-900">
                      <div>
                        <div className="text-[10px] font-extrabold uppercase text-teal-800 dark:text-teal-400">
                          समास-विग्रह
                        </div>
                        <div className="font-bold text-base text-slate-900 dark:text-white mt-0.5">
                          {currentSamas.vigrah}
                        </div>
                      </div>
                      <span className="rounded-full bg-teal-700 px-3 py-1 text-xs font-extrabold text-white">
                        {currentSamas.samasType}
                      </span>
                    </div>
                    {currentSamas.examTrap && (
                      <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-950 dark:bg-amber-950/30 dark:border-amber-900 dark:text-amber-200">
                        <strong>परीक्षा संकेत:</strong>{' '}
                        {stripMarkdown(currentSamas.examTrap)}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            <div className="text-center text-[11px] font-semibold text-slate-400 pt-2">
              Click anywhere on card to flip
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prevCard}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={nextCard}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
              >
                Next →
              </button>
            </div>
            <button
              type="button"
              onClick={randomCard}
              className="inline-flex items-center gap-1 rounded-lg bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-900 hover:bg-amber-200 cursor-pointer dark:bg-amber-950 dark:text-amber-300 dark:hover:bg-amber-900"
            >
              <Shuffle className="h-3.5 w-3.5" /> Random Card
            </button>
          </div>
        </div>
      )}

      {/* SPEED DRILL MODE */}
      {mode === 'drill' && drillQuestion && (
        <div className="rounded-2xl border border-amber-200 bg-white p-4 sm:p-5 space-y-4 dark:border-slate-800 dark:bg-slate-950">
          <div className="space-y-1">
            <div className="text-xs font-bold text-amber-700 dark:text-amber-400">
              {drillQuestion.subHint}
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              “{drillQuestion.promptLabel}”
            </div>
          </div>

          <div className="grid gap-2">
            {drillQuestion.options.map((opt, idx) => {
              const isSelected = selectedOpt === idx;
              const isRight = idx === drillQuestion.correctIdx;

              let style =
                'border-slate-200 bg-slate-50/70 text-slate-800 hover:border-amber-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200';
              if (selectedOpt !== null) {
                if (isRight) {
                  style =
                    'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold dark:bg-emerald-950/60 dark:text-emerald-200';
                } else if (isSelected && !isRight) {
                  style =
                    'border-rose-500 bg-rose-50 text-rose-950 dark:bg-rose-950/60 dark:text-rose-200';
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={selectedOpt !== null}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm transition flex items-start justify-between gap-2 cursor-pointer disabled:cursor-default ${style}`}
                >
                  <div>
                    <div className="font-bold">{opt.label}</div>
                    {opt.sublabel && (
                      <div className="text-[11px] opacity-80 mt-0.5">
                        {opt.sublabel}
                      </div>
                    )}
                  </div>
                  {selectedOpt !== null && isRight && (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  {selectedOpt !== null && isSelected && !isRight && (
                    <XCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {selectedOpt !== null && (
            <div className="rounded-xl border border-teal-200 bg-teal-50/70 p-3 text-xs text-teal-950 space-y-1 dark:border-teal-900 dark:bg-teal-950/30 dark:text-teal-200">
              <div className="flex items-center gap-1.5 font-extrabold">
                <Sparkles className="h-3.5 w-3.5 text-teal-700" />
                {selectedOpt === drillQuestion.correctIdx
                  ? 'बिल्कुल सही उत्तर!'
                  : 'सही व्याख्या देखें:'}
              </div>
              <div>{drillQuestion.detail}</div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => {
                setDrillStats({ attempted: 0, correct: 0 });
                setSelectedOpt(null);
              }}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset Score
            </button>
            <button
              type="button"
              onClick={handleNextDrill}
              className="rounded-lg bg-amber-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-amber-700 cursor-pointer"
            >
              Next Question →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
