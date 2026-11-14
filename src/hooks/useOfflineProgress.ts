import { useCallback, useEffect, useState } from 'react';

export interface StudyProgressState {
  completedSubtopics: string[];
  bookmarkedSubtopics: string[];
  lastVisitedPath: string | null;
  bestQuizScore: { correct: number; total: number } | null;
  bestQuizScoresBySubject: Record<string, { correct: number; total: number }>;
  theme: 'light' | 'dark';
}

const STORAGE_KEY = 'cbse_class10_study_hub_v1';

const DEFAULT_STATE: StudyProgressState = {
  completedSubtopics: [],
  bookmarkedSubtopics: [],
  lastVisitedPath: null,
  bestQuizScore: null,
  bestQuizScoresBySubject: {},
  theme: 'light',
};

function loadInitialState(): StudyProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw) as Partial<StudyProgressState>;
    const bySubject: Record<string, { correct: number; total: number }> =
      parsed.bestQuizScoresBySubject &&
      typeof parsed.bestQuizScoresBySubject === 'object'
        ? { ...parsed.bestQuizScoresBySubject }
        : {};
    if (parsed.bestQuizScore && !bySubject.biology) {
      bySubject.biology = parsed.bestQuizScore;
    }
    return {
      completedSubtopics: Array.isArray(parsed.completedSubtopics)
        ? parsed.completedSubtopics
        : [],
      bookmarkedSubtopics: Array.isArray(parsed.bookmarkedSubtopics)
        ? parsed.bookmarkedSubtopics
        : [],
      lastVisitedPath:
        typeof parsed.lastVisitedPath === 'string' ? parsed.lastVisitedPath : null,
      bestQuizScore: parsed.bestQuizScore ?? null,
      bestQuizScoresBySubject: bySubject,
      theme: parsed.theme === 'dark' ? 'dark' : 'light',
    };
  } catch {
    return DEFAULT_STATE;
  }
}

export function useOfflineProgress() {
  const [state, setState] = useState<StudyProgressState>(loadInitialState);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore quota / private mode storage restrictions gracefully
    }
  }, [state]);

  useEffect(() => {
    const root = document.documentElement;
    if (state.theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [state.theme]);

  const toggleCompleted = useCallback((subtopicId: string) => {
    setState((prev) => {
      const exists = prev.completedSubtopics.includes(subtopicId);
      return {
        ...prev,
        completedSubtopics: exists
          ? prev.completedSubtopics.filter((id) => id !== subtopicId)
          : [...prev.completedSubtopics, subtopicId],
      };
    });
  }, []);

  const toggleBookmark = useCallback((subtopicId: string) => {
    setState((prev) => {
      const exists = prev.bookmarkedSubtopics.includes(subtopicId);
      return {
        ...prev,
        bookmarkedSubtopics: exists
          ? prev.bookmarkedSubtopics.filter((id) => id !== subtopicId)
          : [...prev.bookmarkedSubtopics, subtopicId],
      };
    });
  }, []);

  const recordVisitedPath = useCallback((path: string) => {
    setState((prev) =>
      prev.lastVisitedPath === path ? prev : { ...prev, lastVisitedPath: path }
    );
  }, []);

  const recordQuizScore = useCallback(
    (correct: number, total: number, subjectSlug = 'biology') => {
      setState((prev) => {
        const nextScore = { correct, total };
        const nextPct = correct / Math.max(1, total);

        const prevOverallPct = prev.bestQuizScore
          ? prev.bestQuizScore.correct / Math.max(1, prev.bestQuizScore.total)
          : -1;
        const bestQuizScore =
          nextPct >= prevOverallPct ? nextScore : prev.bestQuizScore;

        const prevSub = prev.bestQuizScoresBySubject?.[subjectSlug];
        const prevSubPct = prevSub
          ? prevSub.correct / Math.max(1, prevSub.total)
          : -1;
        const bestQuizScoresBySubject = {
          ...(prev.bestQuizScoresBySubject ?? {}),
          [subjectSlug]: nextPct >= prevSubPct ? nextScore : prevSub!,
        };

        return {
          ...prev,
          bestQuizScore,
          bestQuizScoresBySubject,
        };
      });
    },
    []
  );

  const toggleTheme = useCallback(() => {
    setState((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setState((prev) => ({ ...DEFAULT_STATE, theme: prev.theme }));
  }, []);

  return {
    state,
    toggleCompleted,
    toggleBookmark,
    recordVisitedPath,
    recordQuizScore,
    toggleTheme,
    resetProgress,
  };
}
