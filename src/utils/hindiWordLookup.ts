import { hindiSubject } from '../data/subjects/hindi';
import { hindiGlossary } from '../data/subjects/hindi/glossary';

export interface AiWordExplanation {
  word: string;
  transliteration?: string;
  rootForm: string;
  detailedMeaning?: string;
  hindiMeaning: string;
  englishMeaning: string;
  contextMeaning: string;
  grammarNote: string;
  exampleSentence: string;
  model?: string;
  chapterTitle?: string;
  savedAt?: number;
}

export interface LocalCuratedMatch {
  kind: 'word' | 'muhavra' | 'glossary';
  matchedTerm: string;
  hindiMeaning: string;
  englishMeaning: string;
  grammarNote?: string;
  exampleSentence?: string;
  sourceChapter?: string;
  exactMatch: boolean;
}

export interface SavedVocabularyItem extends AiWordExplanation {
  savedAt: number;
}

export const SAVED_WORDS_EVENT = 'saved-words-updated';

const AI_CACHE_STORAGE_KEY = 'cbse_class10_ai_word_cache_v2';
const SAVED_WORDS_STORAGE_KEY = 'cbse_class10_saved_words_v1';
const MAX_BROWSER_CACHE_ENTRIES = 200;

let curatedIndexCache: Map<string, Omit<LocalCuratedMatch, 'exactMatch'>[]> | null =
  null;

export function normalizeLookupText(input: string): string {
  return input
    .trim()
    .replace(
      /^[।॥,.;:!?"'“”‘’()[\]{}—–\-…/`*_~|]+|[।॥,.;:!?"'“”‘’()[\]{}—–\-…/`*_~|]+$/g,
      ''
    )
    .replace(/\s+/g, ' ')
    .trim();
}

function isSingleDevanagariWord(token: string): boolean {
  return /^[\u0900-\u0963\u0966-\u096F\u0971-\u097F]+$/.test(token);
}

export function buildHindiStemCandidates(normalized: string): string[] {
  const candidates: string[] = [];
  const push = (val: string) => {
    const clean = val.trim();
    if (clean && clean.length >= 2 && !candidates.includes(clean)) {
      candidates.push(clean);
    }
  };

  push(normalized);
  if (!normalized || normalized.includes(' ') || !isSingleDevanagariWord(normalized)) {
    return candidates;
  }

  // Feminine / oblique plurals like परिस्थितियों -> परिस्थिति / स्थिति
  if (normalized.endsWith('ियों') && normalized.length > 4) {
    const stem = normalized.slice(0, -4);
    push(`${stem}ी`);
    push(`${stem}ि`);
    push(stem);
  }
  if (normalized.endsWith('ताओं') && normalized.length > 4) {
    push(`${normalized.slice(0, -4)}ता`);
  }
  if (normalized.endsWith('ताएँ') && normalized.length > 4) {
    push(`${normalized.slice(0, -4)}ता`);
  }
  if (normalized.endsWith('यों') && normalized.length > 3) {
    const stem = normalized.slice(0, -3);
    push(`${stem}ी`);
    push(`${stem}ि`);
    push(stem);
  }
  if (normalized.endsWith('ओं') && normalized.length > 3) {
    push(normalized.slice(0, -2));
    push(`${normalized.slice(0, -2)}ा`);
  }
  if (normalized.endsWith('एँ') && normalized.length > 3) {
    push(normalized.slice(0, -2));
    push(`${normalized.slice(0, -2)}ा`);
  }
  if (normalized.endsWith('आँ') && normalized.length > 3) {
    push(`${normalized.slice(0, -2)}ा`);
    push(normalized.slice(0, -2));
  }
  if (normalized.endsWith('याँ') && normalized.length > 3) {
    const stem = normalized.slice(0, -3);
    push(`${stem}ी`);
    push(`${stem}ि`);
    push(`${stem}या`);
  }
  if (normalized.endsWith('ईं') && normalized.length > 3) {
    push(`${normalized.slice(0, -2)}ी`);
    push(normalized.slice(0, -2));
  }

  // Common verbal / participle inflections
  const verbSuffixes = [
    'कर',
    'ना',
    'ने',
    'नी',
    'ता',
    'ते',
    'ती',
    'या',
    'ये',
    'यी',
    'ते',
    'ें',
  ];
  for (const suffix of verbSuffixes) {
    if (normalized.endsWith(suffix) && normalized.length - suffix.length >= 2) {
      const root = normalized.slice(0, -suffix.length);
      push(root);
      push(`${root}ना`);
    }
  }

  // Common matra/vowel normalization fallbacks (e.g. नुस्ख़ा vs नुस्खा)
  const withoutNukta = normalized.replace(/\u093C/g, '');
  if (withoutNukta !== normalized) {
    push(withoutNukta);
  }

  return candidates;
}

function addToIndex(
  map: Map<string, Omit<LocalCuratedMatch, 'exactMatch'>[]>,
  rawTerm: string,
  entry: Omit<LocalCuratedMatch, 'exactMatch'>
) {
  const clean = normalizeLookupText(rawTerm);
  if (!clean) return;

  const keys = new Set<string>([clean.toLowerCase()]);
  const nuktaFree = clean.replace(/\u093C/g, '').toLowerCase();
  keys.add(nuktaFree);

  // Also index slash-separated headwords (e.g. "बाँणी / वाणी")
  if (clean.includes('/')) {
    for (const part of clean.split('/')) {
      const sub = normalizeLookupText(part);
      if (sub.length >= 2) {
        keys.add(sub.toLowerCase());
      }
    }
  }

  for (const key of keys) {
    const existing = map.get(key) ?? [];
    const duplicate = existing.some(
      (item) =>
        item.matchedTerm === entry.matchedTerm &&
        item.hindiMeaning === entry.hindiMeaning
    );
    if (!duplicate) {
      existing.push(entry);
      map.set(key, existing);
    }
  }
}

function getCuratedIndex(): Map<string, Omit<LocalCuratedMatch, 'exactMatch'>[]> {
  if (curatedIndexCache) return curatedIndexCache;

  const map = new Map<string, Omit<LocalCuratedMatch, 'exactMatch'>[]>();

  for (const topic of hindiSubject.topics) {
    for (const subtopic of topic.subtopics) {
      const chapterLabel = subtopic.title;
      for (const section of subtopic.sections) {
        for (const block of section.blocks) {
          if (block.type === 'poetic-stanza') {
            for (const w of block.words) {
              addToIndex(map, w.word, {
                kind: 'word',
                matchedTerm: w.word,
                hindiMeaning: w.hindiMeaning || w.synonym || w.englishMeaning,
                englishMeaning: w.englishMeaning,
                grammarNote: w.grammarNote,
                exampleSentence: w.exampleSentence,
                sourceChapter: chapterLabel,
              });
            }
          } else if (block.type === 'chapter-word-bank' && block.extraWords) {
            for (const w of block.extraWords) {
              addToIndex(map, w.word, {
                kind: 'word',
                matchedTerm: w.word,
                hindiMeaning: w.hindiMeaning || w.synonym || w.englishMeaning,
                englishMeaning: w.englishMeaning,
                grammarNote: w.grammarNote,
                exampleSentence: w.exampleSentence,
                sourceChapter: chapterLabel,
              });
            }
          } else if (block.type === 'muhavre-list') {
            for (const item of block.items) {
              addToIndex(map, item.idiom, {
                kind: 'muhavra',
                matchedTerm: item.idiom,
                hindiMeaning: item.hindiMeaning,
                englishMeaning: item.englishMeaning,
                exampleSentence: item.examSentence,
                sourceChapter: chapterLabel,
              });
            }
          }
        }
      }
    }
  }

  for (const g of hindiGlossary) {
    addToIndex(map, g.term, {
      kind: 'glossary',
      matchedTerm: g.term,
      hindiMeaning: g.simpleMeaning,
      englishMeaning: g.englishMeaning ?? '',
      grammarNote: g.grammarNote,
      exampleSentence: g.example,
      sourceChapter: g.symbol ?? g.category,
    });
  }

  curatedIndexCache = map;
  return map;
}

export function findLocalHindiMatches(rawSelection: string): LocalCuratedMatch[] {
  const normalized = normalizeLookupText(rawSelection);
  if (!normalized || normalized.length < 2) return [];

  const index = getCuratedIndex();
  const candidates = buildHindiStemCandidates(normalized);
  const results: LocalCuratedMatch[] = [];
  const seenSignatures = new Set<string>();

  const pushEntry = (
    entry: Omit<LocalCuratedMatch, 'exactMatch'>,
    exactMatch: boolean
  ) => {
    const sig = `${entry.matchedTerm}|${entry.hindiMeaning}`;
    if (seenSignatures.has(sig)) return;
    seenSignatures.add(sig);
    results.push({ ...entry, exactMatch });
  };

  candidates.forEach((candidate, idx) => {
    const hits = index.get(candidate.toLowerCase());
    if (!hits) return;
    const isExact = idx === 0;
    for (const hit of hits) {
      pushEntry(hit, isExact);
    }
  });

  // Partial muhavra / phrase lookup when a multi-word idiom is selected
  if (normalized.includes(' ') && normalized.length >= 4 && results.length < 3) {
    const queryLower = normalized.toLowerCase();
    for (const topic of hindiSubject.topics) {
      for (const subtopic of topic.subtopics) {
        for (const section of subtopic.sections) {
          for (const block of section.blocks) {
            if (block.type !== 'muhavre-list') continue;
            for (const item of block.items) {
              const idiomLower = normalizeLookupText(item.idiom).toLowerCase();
              if (
                idiomLower.includes(queryLower) ||
                queryLower.includes(idiomLower)
              ) {
                pushEntry(
                  {
                    kind: 'muhavra',
                    matchedTerm: item.idiom,
                    hindiMeaning: item.hindiMeaning,
                    englishMeaning: item.englishMeaning,
                    exampleSentence: item.examSentence,
                    sourceChapter: subtopic.title,
                  },
                  idiomLower === queryLower
                );
              }
            }
          }
        }
      }
    }
  }

  // Prefer richer entries and exact matches
  return results
    .sort((a, b) => {
      if (a.exactMatch !== b.exactMatch) return a.exactMatch ? -1 : 1;
      const aRich = Number(Boolean(a.grammarNote)) + Number(Boolean(a.exampleSentence));
      const bRich = Number(Boolean(b.grammarNote)) + Number(Boolean(b.exampleSentence));
      return bRich - aRich;
    })
    .slice(0, 4);
}

function buildCacheKey(word: string, contextSentence: string): string {
  const cleanWord = normalizeLookupText(word).toLowerCase();
  const cleanCtx = contextSentence.replace(/\s+/g, ' ').trim().slice(0, 240).toLowerCase();
  return `${cleanWord}||${cleanCtx}`;
}

interface StoredCacheRecord {
  key: string;
  value: AiWordExplanation;
  updatedAt: number;
}

function loadAiCacheRecords(): StoredCacheRecord[] {
  try {
    const raw = localStorage.getItem(AI_CACHE_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredCacheRecord[]) : [];
  } catch {
    return [];
  }
}

export function getCachedAiExplanation(
  word: string,
  contextSentence: string
): AiWordExplanation | null {
  const targetKey = buildCacheKey(word, contextSentence);
  const records = loadAiCacheRecords();
  const hit = records.find((r) => r.key === targetKey);
  return hit ? hit.value : null;
}

export function setCachedAiExplanation(
  word: string,
  contextSentence: string,
  explanation: AiWordExplanation
): void {
  try {
    const targetKey = buildCacheKey(word, contextSentence);
    const filtered = loadAiCacheRecords().filter((r) => r.key !== targetKey);
    filtered.unshift({
      key: targetKey,
      value: explanation,
      updatedAt: Date.now(),
    });
    const trimmed = filtered.slice(0, MAX_BROWSER_CACHE_ENTRIES);
    localStorage.setItem(AI_CACHE_STORAGE_KEY, JSON.stringify(trimmed));
  } catch {
    // Ignore storage quota or private-browsing errors
  }
}

export function getSavedWords(): SavedVocabularyItem[] {
  try {
    const raw = localStorage.getItem(SAVED_WORDS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is SavedVocabularyItem =>
        Boolean(item) &&
        typeof item === 'object' &&
        typeof item.word === 'string' &&
        typeof item.hindiMeaning === 'string'
    );
  } catch {
    return [];
  }
}

function persistSavedWords(list: SavedVocabularyItem[]): void {
  try {
    localStorage.setItem(SAVED_WORDS_STORAGE_KEY, JSON.stringify(list));
  } catch {
    // Ignore storage quota restrictions
  }
  window.dispatchEvent(new CustomEvent(SAVED_WORDS_EVENT));
}

export function isWordSaved(word: string): boolean {
  const clean = normalizeLookupText(word).toLowerCase();
  if (!clean) return false;
  return getSavedWords().some(
    (item) => normalizeLookupText(item.word).toLowerCase() === clean
  );
}

export function removeSavedWord(word: string): SavedVocabularyItem[] {
  const clean = normalizeLookupText(word).toLowerCase();
  const next = getSavedWords().filter(
    (item) => normalizeLookupText(item.word).toLowerCase() !== clean
  );
  persistSavedWords(next);
  return next;
}

export function toggleSavedWord(
  entry: AiWordExplanation
): { saved: boolean; list: SavedVocabularyItem[] } {
  const clean = normalizeLookupText(entry.word).toLowerCase();
  const current = getSavedWords();
  const exists = current.some(
    (item) => normalizeLookupText(item.word).toLowerCase() === clean
  );
  if (exists) {
    const next = current.filter(
      (item) => normalizeLookupText(item.word).toLowerCase() !== clean
    );
    persistSavedWords(next);
    return { saved: false, list: next };
  }

  const normalizedEntry: SavedVocabularyItem = {
    word: normalizeLookupText(entry.word) || entry.word,
    transliteration: entry.transliteration,
    rootForm: entry.rootForm || entry.word,
    detailedMeaning: entry.detailedMeaning,
    hindiMeaning: entry.hindiMeaning,
    englishMeaning: entry.englishMeaning,
    contextMeaning: entry.contextMeaning,
    grammarNote: entry.grammarNote,
    exampleSentence: entry.exampleSentence,
    model: entry.model,
    chapterTitle: entry.chapterTitle,
    savedAt: Date.now(),
  };

  const next = [normalizedEntry, ...current].slice(0, 200);
  persistSavedWords(next);
  return { saved: true, list: next };
}
