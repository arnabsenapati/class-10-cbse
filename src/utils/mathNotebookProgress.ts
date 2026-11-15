import { useCallback, useEffect, useState } from 'react';

export type MathSlipCategory =
  | 'sign'
  | 'fraction'
  | 'copy'
  | 'arithmetic'
  | 'formula';

export const MATH_SLIP_LABELS: Record<
  MathSlipCategory,
  { short: string; full: string; shield: string }
> = {
  sign: {
    short: 'Sign (+/-)',
    full: 'Sign / Bracket Flip',
    shield: 'Put brackets around every negative or multi-term expression before multiplying or subtracting.',
  },
  fraction: {
    short: 'Fraction/LCM',
    full: 'Fraction / Root / LCM Error',
    shield: 'Write denominator 1 under whole terms before taking LCM, and square the entire fraction (num & den).',
  },
  copy: {
    short: 'd vs r / Copy',
    full: 'Copied Wrong / Diameter vs Radius',
    shield: 'Write Given values with units on Line 1 and immediately convert Diameter → Radius (r = d/2) before touching any formula.',
  },
  arithmetic: {
    short: 'Arithmetic',
    full: 'Calculation / Table Row Shift',
    shield: 'Factor out π and common terms BEFORE decimal multiplication; circle f₀, f₁, f₂ or preceding cf right inside the table.',
  },
  formula: {
    short: 'Formula/Trig',
    full: 'Formula / Trig Table Swap',
    shield: 'Write the blank formula first on Line 2 (e.g. aₙ = a + (n−1)d or Median = l + ...), then substitute values below it.',
  },
};

export interface MathNotebookState {
  problemStatus: Record<string, 'clean' | 'slip'>;
  problemSlipCategory: Record<string, MathSlipCategory>;
  endlessSolvedClean: number;
  endlessSlipsLogged: number;
  slipRadar: Record<MathSlipCategory, number>;
  dailyWrittenSums: Record<string, number>;
}

const STORAGE_KEY = 'cbse_class10_math_notebook_v1';
const UPDATE_EVENT = 'math-notebook-updated';

const EMPTY_RADAR: Record<MathSlipCategory, number> = {
  sign: 0,
  fraction: 0,
  copy: 0,
  arithmetic: 0,
  formula: 0,
};

const DEFAULT_STATE: MathNotebookState = {
  problemStatus: {},
  problemSlipCategory: {},
  endlessSolvedClean: 0,
  endlessSlipsLogged: 0,
  slipRadar: { ...EMPTY_RADAR },
  dailyWrittenSums: {},
};

export function getLocalDateKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function getDailyTargetForDate(dateKey = getLocalDateKey()): number {
  return dateKey <= '2026-11-23' ? 20 : 50;
}

function loadMathNotebookState(): MathNotebookState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw) as Partial<MathNotebookState>;
    const radar: Record<MathSlipCategory, number> = {
      sign: Number(parsed.slipRadar?.sign) || 0,
      fraction: Number(parsed.slipRadar?.fraction) || 0,
      copy: Number(parsed.slipRadar?.copy) || 0,
      arithmetic: Number(parsed.slipRadar?.arithmetic) || 0,
      formula: Number(parsed.slipRadar?.formula) || 0,
    };
    return {
      problemStatus:
        parsed.problemStatus && typeof parsed.problemStatus === 'object'
          ? { ...parsed.problemStatus }
          : {},
      problemSlipCategory:
        parsed.problemSlipCategory && typeof parsed.problemSlipCategory === 'object'
          ? { ...parsed.problemSlipCategory }
          : {},
      endlessSolvedClean: Number(parsed.endlessSolvedClean) || 0,
      endlessSlipsLogged: Number(parsed.endlessSlipsLogged) || 0,
      slipRadar: radar,
      dailyWrittenSums:
        parsed.dailyWrittenSums && typeof parsed.dailyWrittenSums === 'object'
          ? { ...parsed.dailyWrittenSums }
          : {},
    };
  } catch {
    return DEFAULT_STATE;
  }
}

function persistAndBroadcast(next: MathNotebookState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Ignore storage quota errors gracefully
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(UPDATE_EVENT));
  }
}

export function useMathNotebookProgress() {
  const [state, setState] = useState<MathNotebookState>(loadMathNotebookState);

  useEffect(() => {
    const sync = () => setState(loadMathNotebookState());
    window.addEventListener(UPDATE_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(UPDATE_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const updateState = useCallback(
    (updater: (prev: MathNotebookState) => MathNotebookState) => {
      const current = loadMathNotebookState();
      const next = updater(current);
      setState(next);
      persistAndBroadcast(next);
    },
    []
  );

  const markProblemClean = useCallback(
    (problemId: string) => {
      updateState((prev) => {
        const hadMark = prev.problemStatus[problemId] !== undefined;
        const today = getLocalDateKey();
        const nextDaily = { ...prev.dailyWrittenSums };
        if (!hadMark) {
          nextDaily[today] = (nextDaily[today] || 0) + 1;
        }
        const nextCats = { ...prev.problemSlipCategory };
        delete nextCats[problemId];
        return {
          ...prev,
          problemStatus: { ...prev.problemStatus, [problemId]: 'clean' },
          problemSlipCategory: nextCats,
          dailyWrittenSums: nextDaily,
        };
      });
    },
    [updateState]
  );

  const markProblemSlip = useCallback(
    (problemId: string, category: MathSlipCategory) => {
      updateState((prev) => {
        const prevStatus = prev.problemStatus[problemId];
        const prevCat = prev.problemSlipCategory[problemId];
        const today = getLocalDateKey();
        const nextDaily = { ...prev.dailyWrittenSums };
        if (prevStatus === undefined) {
          nextDaily[today] = (nextDaily[today] || 0) + 1;
        }
        const nextRadar = { ...prev.slipRadar };
        if (prevStatus !== 'slip') {
          nextRadar[category] = (nextRadar[category] || 0) + 1;
        } else if (prevCat && prevCat !== category) {
          nextRadar[prevCat] = Math.max(0, (nextRadar[prevCat] || 0) - 1);
          nextRadar[category] = (nextRadar[category] || 0) + 1;
        }
        return {
          ...prev,
          problemStatus: { ...prev.problemStatus, [problemId]: 'slip' },
          problemSlipCategory: { ...prev.problemSlipCategory, [problemId]: category },
          slipRadar: nextRadar,
          dailyWrittenSums: nextDaily,
        };
      });
    },
    [updateState]
  );

  const clearProblemMark = useCallback(
    (problemId: string) => {
      updateState((prev) => {
        const nextStatus = { ...prev.problemStatus };
        const nextCats = { ...prev.problemSlipCategory };
        delete nextStatus[problemId];
        delete nextCats[problemId];
        return {
          ...prev,
          problemStatus: nextStatus,
          problemSlipCategory: nextCats,
        };
      });
    },
    [updateState]
  );

  const recordEndlessResult = useCallback(
    (outcome: 'clean' | 'slip', category?: MathSlipCategory) => {
      updateState((prev) => {
        const today = getLocalDateKey();
        const nextDaily = {
          ...prev.dailyWrittenSums,
          [today]: (prev.dailyWrittenSums[today] || 0) + 1,
        };
        const nextRadar = { ...prev.slipRadar };
        if (outcome === 'slip' && category) {
          nextRadar[category] = (nextRadar[category] || 0) + 1;
        }
        return {
          ...prev,
          endlessSolvedClean:
            outcome === 'clean' ? prev.endlessSolvedClean + 1 : prev.endlessSolvedClean,
          endlessSlipsLogged:
            outcome === 'slip' ? prev.endlessSlipsLogged + 1 : prev.endlessSlipsLogged,
          slipRadar: nextRadar,
          dailyWrittenSums: nextDaily,
        };
      });
    },
    [updateState]
  );

  const todayKey = getLocalDateKey();
  const todayCount = state.dailyWrittenSums[todayKey] || 0;
  const dailyTarget = getDailyTargetForDate(todayKey);

  const curatedCleanCount = Object.values(state.problemStatus).filter(
    (v) => v === 'clean'
  ).length;
  const curatedSlipCount = Object.values(state.problemStatus).filter(
    (v) => v === 'slip'
  ).length;
  const totalCleanCount = curatedCleanCount + state.endlessSolvedClean;
  const totalSlipsLogged = curatedSlipCount + state.endlessSlipsLogged;
  const totalWrittenCount = totalCleanCount + totalSlipsLogged;

  return {
    state,
    todayKey,
    todayCount,
    dailyTarget,
    curatedCleanCount,
    curatedSlipCount,
    totalCleanCount,
    totalSlipsLogged,
    totalWrittenCount,
    markProblemClean,
    markProblemSlip,
    clearProblemMark,
    recordEndlessResult,
  };
}
