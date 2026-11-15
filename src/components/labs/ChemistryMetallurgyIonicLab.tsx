import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  Atom,
  CheckCircle2,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  XCircle,
  Zap,
} from 'lucide-react';

type MetalKey = 'K' | 'Na' | 'Ca' | 'Mg' | 'Al' | 'Zn' | 'Fe' | 'Cu' | 'Ag';
type ReagentKey =
  | 'cold-water'
  | 'hot-water'
  | 'steam'
  | 'dil-hcl'
  | 'dil-hno3'
  | 'cuso4'
  | 'znso4'
  | 'feso4'
  | 'agno3';

const METALS: { key: MetalKey; name: string; rank: number; metalColor: string }[] = [
  { key: 'K', name: 'Potassium (K)', rank: 10, metalColor: '#cbd5e1' },
  { key: 'Na', name: 'Sodium (Na)', rank: 9, metalColor: '#e2e8f0' },
  { key: 'Ca', name: 'Calcium (Ca)', rank: 8, metalColor: '#94a3b8' },
  { key: 'Mg', name: 'Magnesium (Mg)', rank: 7, metalColor: '#cbd5e1' },
  { key: 'Al', name: 'Aluminium (Al)', rank: 6, metalColor: '#cbd5e1' },
  { key: 'Zn', name: 'Zinc (Zn)', rank: 5, metalColor: '#94a3b8' },
  { key: 'Fe', name: 'Iron (Fe)', rank: 4, metalColor: '#64748b' },
  { key: 'Cu', name: 'Copper (Cu)', rank: 2, metalColor: '#c2410c' },
  { key: 'Ag', name: 'Silver (Ag)', rank: 1, metalColor: '#e2e8f0' },
];

const REAGENTS: { key: ReagentKey; label: string; initialLiquid: string }[] = [
  { key: 'cold-water', label: 'Cold H₂O', initialLiquid: '#bae6fd' },
  { key: 'hot-water', label: 'Hot H₂O', initialLiquid: '#7dd3fc' },
  { key: 'steam', label: 'Steam H₂O(g)', initialLiquid: '#e0f2fe' },
  { key: 'dil-hcl', label: 'Dil. HCl', initialLiquid: '#e0f2fe' },
  { key: 'dil-hno3', label: 'Dil. HNO₃', initialLiquid: '#fef9c3' },
  { key: 'cuso4', label: 'CuSO₄(aq)', initialLiquid: '#2563eb' },
  { key: 'znso4', label: 'ZnSO₄(aq)', initialLiquid: '#e0f2fe' },
  { key: 'feso4', label: 'FeSO₄(aq)', initialLiquid: '#86efac' },
  { key: 'agno3', label: 'AgNO₃(aq)', initialLiquid: '#f1f5f9' },
];

interface MatrixOutcome {
  reacts: boolean;
  badge: string;
  equation: string;
  observation: string;
  liquidStart: string;
  liquidEnd: string;
  effect: 'fire' | 'float-bubbles' | 'bubbles' | 'brown-gas' | 'coating' | 'steam-oxide' | 'none';
  flameColor?: string;
  coatingColor?: string;
  trapNote: string;
}

function evaluateMatrix(metal: MetalKey, reagent: ReagentKey): MatrixOutcome {
  const rankMap: Record<MetalKey, number> = {
    K: 10,
    Na: 9,
    Ca: 8,
    Mg: 7,
    Al: 6,
    Zn: 5,
    Fe: 4,
    Cu: 2,
    Ag: 1,
  };
  const r = rankMap[metal];

  if (reagent === 'cold-water') {
    if (metal === 'K' || metal === 'Na') {
      return {
        reacts: true,
        badge: 'Violent Exothermic Fire!',
        equation:
          metal === 'K'
            ? '2K(s) + 2H₂O(l) → 2KOH(aq) + H₂(g)↑ + Heat'
            : '2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)↑ + Heat',
        observation:
          metal === 'K'
            ? 'Darts rapidly on cold water; evolved H₂ immediately ignites with a lilac/violet flame!'
            : 'Melts into a silvery globule, darts on water, and evolved H₂ catches a golden-yellow flame!',
        liquidStart: '#bae6fd',
        liquidEnd: '#dbeafe',
        effect: 'fire',
        flameColor: metal === 'K' ? '#c084fc' : '#facc15',
        trapNote: 'Both K and Na are stored under kerosene to prevent explosive reaction with air & moisture.',
      };
    }
    if (metal === 'Ca') {
      return {
        reacts: true,
        badge: 'Reacts & Floats on Water',
        equation: 'Ca(s) + 2H₂O(l) → Ca(OH)₂(aq) + H₂(g)↑',
        observation:
          'Less violent than Na/K; heat is NOT enough for H₂ to catch fire. H₂ bubbles stick to Ca surface, making it float!',
        liquidStart: '#bae6fd',
        liquidEnd: '#e0f2fe',
        effect: 'float-bubbles',
        trapNote: 'Classic 2-mark board question: "Why does Calcium start floating when dropped in cold water?"',
      };
    }
    return {
      reacts: false,
      badge: 'No Reaction in Cold Water',
      equation: `${metal}(s) + Cold H₂O(l) → No Reaction`,
      observation:
        metal === 'Mg'
          ? 'Magnesium sinks and does NOT react with cold water; it requires HOT water to liberate H₂.'
          : `${metal} is not reactive enough to decompose cold water.`,
      liquidStart: '#bae6fd',
      liquidEnd: '#bae6fd',
      effect: 'none',
      trapNote: metal === 'Mg' ? 'Switch reagent to Hot H₂O to see Mg react and float!' : 'Try Steam or Dil. HCl.',
    };
  }

  if (reagent === 'hot-water') {
    if (metal === 'K' || metal === 'Na' || metal === 'Ca') {
      return {
        reacts: true,
        badge: metal === 'Ca' ? 'Vigorous Bubbles & Floats' : 'Explosive Exothermic Reaction!',
        equation: `2${metal} + 2H₂O → hydroxide + H₂(g)↑`,
        observation:
          metal === 'Ca'
            ? 'Reacts briskly with hot water; H₂ bubbles lift the metal piece to the surface.'
            : 'Even more violent than cold water — immediate ignition of H₂!',
        liquidStart: '#7dd3fc',
        liquidEnd: '#bae6fd',
        effect: metal === 'Ca' ? 'float-bubbles' : 'fire',
        flameColor: metal === 'K' ? '#c084fc' : '#facc15',
        trapNote: 'High-reactivity alkali metals react dangerously with hot water.',
      };
    }
    if (metal === 'Mg') {
      return {
        reacts: true,
        badge: 'Reacts with Hot Water & Floats!',
        equation: 'Mg(s) + 2H₂O(hot) → Mg(OH)₂(aq) + H₂(g)↑',
        observation:
          'Magnesium reacts with hot water forming Mg(OH)₂ + H₂ gas. Bubbles of H₂ stick to its surface, causing it to float!',
        liquidStart: '#7dd3fc',
        liquidEnd: '#e0f2fe',
        effect: 'float-bubbles',
        trapNote: 'NCERT Key Fact: Mg reacts with HOT water (not cold), forming hydroxide + floating bubbles.',
      };
    }
    return {
      reacts: false,
      badge: 'No Reaction in Hot Water',
      equation: `${metal}(s) + Hot H₂O(l) → No Reaction`,
      observation: `${metal} does not react with either cold or hot water.`,
      liquidStart: '#7dd3fc',
      liquidEnd: '#7dd3fc',
      effect: 'none',
      trapNote: ['Al', 'Zn', 'Fe'].includes(metal)
        ? `${metal} requires STEAM (H₂O gas) to react and form its metal oxide + H₂.`
        : 'Cu and Ag do not react with water at any temperature (even steam!).',
    };
  }

  if (reagent === 'steam') {
    if (r >= 7) {
      return {
        reacts: true,
        badge: 'Vigorous Steam Reaction',
        equation: `${metal}(s) + H₂O(g) → ${metal === 'Mg' ? 'MgO' : `${metal}₂O`} + H₂(g)↑`,
        observation: `${metal} burns vigorously in steam, releasing H₂ gas rapidly.`,
        liquidStart: '#e0f2fe',
        liquidEnd: '#f1f5f9',
        effect: 'steam-oxide',
        trapNote: 'Even Mg burns brightly in steam to form white MgO + H₂.',
      };
    }
    if (metal === 'Al' || metal === 'Zn' || metal === 'Fe') {
      const eqMap: Record<'Al' | 'Zn' | 'Fe', string> = {
        Al: '2Al(s) + 3H₂O(g) → Al₂O₃(s) + 3H₂(g)↑',
        Zn: 'Zn(s) + H₂O(g) → ZnO(s) + H₂(g)↑',
        Fe: '3Fe(s) + 4H₂O(g) ⇌ Fe₃O₄(s) + 4H₂(g)↑',
      };
      return {
        reacts: true,
        badge: 'Reacts with Steam → Oxide + H₂',
        equation: eqMap[metal],
        observation: `${metal} reacts with steam (H₂O gas) forming solid metal oxide and hydrogen gas (pop sound).`,
        liquidStart: '#e0f2fe',
        liquidEnd: '#e2e8f0',
        effect: 'steam-oxide',
        trapNote:
          metal === 'Fe'
            ? 'Remember the NCERT product is magnetic oxide Fe₃O₄ (NOT Fe₂O₃) and the reaction is reversible!'
            : 'Notice: Cold/hot water gave Hydroxides, whereas Steam gives Metal Oxides!',
      };
    }
    return {
      reacts: false,
      badge: 'No Reaction Even With Steam',
      equation: `${metal}(s) + H₂O(g) → No Reaction`,
      observation: `${metal} lies below Hydrogen in the reactivity series and never displaces H₂ from water or steam.`,
      liquidStart: '#e0f2fe',
      liquidEnd: '#e0f2fe',
      effect: 'none',
      trapNote: 'Board MCQ favourite: "Metals like Pb, Cu, Ag, and Au do not react with water at all."',
    };
  }

  if (reagent === 'dil-hcl') {
    if (metal === 'K' || metal === 'Na') {
      return {
        reacts: true,
        badge: 'Dangerously Explosive!',
        equation: `2${metal}(s) + 2HCl(aq) → 2${metal}Cl(aq) + H₂(g)↑ + Heat`,
        observation: 'Violent, unsafe reaction producing intense heat and rapid H₂ ignition.',
        liquidStart: '#e0f2fe',
        liquidEnd: '#e0f2fe',
        effect: 'fire',
        flameColor: metal === 'K' ? '#c084fc' : '#facc15',
        trapNote: 'Never react K or Na with acid in a school lab!',
      };
    }
    if (r >= 4) {
      const rateNote =
        metal === 'Mg'
          ? 'Fastest controlled bubbling + warmest test tube (Mg > Al > Zn > Fe)!'
          : metal === 'Al'
          ? 'Slow briefly until oxide layer dissolves, then brisk H₂ bubbles!'
          : metal === 'Zn'
          ? 'Steady brisk H₂ effervescence — ideal lab preparation of H₂.'
          : 'Moderate steady bubbles forming pale green FeCl₂(aq) + H₂.';
      return {
        reacts: true,
        badge: 'H₂ Bubbles Evolved (Exothermic)',
        equation:
          metal === 'Al'
            ? '2Al(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂(g)↑'
            : `${metal}(s) + 2HCl(aq) → ${metal}Cl₂(aq) + H₂(g)↑`,
        observation: `${rateNote} Gas burns with a pop sound near a flame.`,
        liquidStart: '#e0f2fe',
        liquidEnd: metal === 'Fe' ? '#bbf7d0' : '#e0f2fe',
        effect: 'bubbles',
        trapNote: 'Rate & Heat order in NCERT Activity 3.11: Mg > Al > Zn > Fe.',
      };
    }
    return {
      reacts: false,
      badge: 'No Reaction (Below H in Series)',
      equation: `${metal}(s) + dil. HCl(aq) → No Reaction`,
      observation: `No bubbles formed and temperature remains unchanged. ${metal} cannot displace H⁺ from dilute acids.`,
      liquidStart: '#e0f2fe',
      liquidEnd: '#e0f2fe',
      effect: 'none',
      trapNote: 'Cu and Ag lie below Hydrogen in the reactivity series — zero bubbles in dil. HCl!',
    };
  }

  if (reagent === 'dil-hno3') {
    if (metal === 'Mg') {
      return {
        reacts: true,
        badge: 'NCERT EXCEPTION: H₂ Gas Evolved!',
        equation: 'Mg(s) + 2HNO₃(very dil.) → Mg(NO₃)₂(aq) + H₂(g)↑',
        observation:
          'Mg (along with Manganese, Mn) is the ONLY pair of metals that evolves H₂ gas with very dilute HNO₃!',
        liquidStart: '#fef9c3',
        liquidEnd: '#e0f2fe',
        effect: 'bubbles',
        trapNote: 'Guaranteed 1–2 Mark Board Question: Name two metals that liberate H₂ with very dilute HNO₃ → Mg and Mn.',
      };
    }
    if (metal === 'Ag') {
      return {
        reacts: false,
        badge: 'No H₂ Evolved (Low Reactivity)',
        equation: 'Ag(s) + dil. HNO₃ → No H₂ gas evolved',
        observation: 'Silver does not react with dilute HNO₃ to produce hydrogen gas.',
        liquidStart: '#fef9c3',
        liquidEnd: '#fef9c3',
        effect: 'none',
        trapNote: 'Remember: Even reactive metals do NOT give H₂ with HNO₃ because HNO₃ oxidises H₂ → H₂O.',
      };
    }
    return {
      reacts: true,
      badge: 'Oxidising Acid Trap: NO H₂ Evolved!',
      equation: `${metal} + dil. HNO₃ → Metal Nitrate + H₂O + NO / NO₂(brown) / N₂O`,
      observation:
        'NO H₂ gas is produced! HNO₃ is a strong oxidising agent that oxidises nascent H₂ into water (H₂O) and reduces itself to nitrogen oxides.',
      liquidStart: '#fef9c3',
      liquidEnd: metal === 'Cu' ? '#93c5fd' : '#fde68a',
      effect: 'brown-gas',
      trapNote: 'Only Mg and Mn evolve H₂ with very dilute HNO₃; all other metals produce H₂O + nitrogen oxides!',
    };
  }

  // Salt Solutions
  const saltTargets: Record<'cuso4' | 'znso4' | 'feso4' | 'agno3', { metal: MetalKey; rank: number; startHex: string; depositHex: string; eqProd: string }> = {
    cuso4: { metal: 'Cu', rank: 2, startHex: '#2563eb', depositHex: '#b45309', eqProd: 'Cu(s)' },
    znso4: { metal: 'Zn', rank: 5, startHex: '#e0f2fe', depositHex: '#64748b', eqProd: 'Zn(s)' },
    feso4: { metal: 'Fe', rank: 4, startHex: '#86efac', depositHex: '#475569', eqProd: 'Fe(s)' },
    agno3: { metal: 'Ag', rank: 1, startHex: '#f1f5f9', depositHex: '#cbd5e1', eqProd: '2Ag(s)' },
  };
  const target = saltTargets[reagent];

  if (metal === 'K' || metal === 'Na') {
    return {
      reacts: true,
      badge: 'Reacts With Water in Solution First!',
      equation: `2${metal}(s) + 2H₂O(l) → 2${metal}OH(aq) + H₂(g)↑ (followed by hydroxide ppt)`,
      observation: `${metal} reacts violently with the water of the aqueous salt solution before simple metal displacement can occur.`,
      liquidStart: target.startHex,
      liquidEnd: '#bae6fd',
      effect: 'fire',
      flameColor: metal === 'K' ? '#c084fc' : '#facc15',
      trapNote: 'Practical CBSE nuance: K and Na are too reactive for aqueous salt displacement — use molten salts instead!',
    };
  }

  if (r > target.rank) {
    const endHex =
      reagent === 'agno3' && metal === 'Cu'
        ? '#3b82f6'
        : reagent === 'cuso4' && metal === 'Fe'
        ? '#86efac'
        : metal === 'Fe'
        ? '#bbf7d0'
        : '#e0f2fe';

    const saltFormula =
      reagent === 'cuso4'
        ? 'CuSO₄'
        : reagent === 'znso4'
        ? 'ZnSO₄'
        : reagent === 'feso4'
        ? 'FeSO₄'
        : 'AgNO₃';

    const dispProduct =
      reagent === 'agno3'
        ? metal === 'Cu'
          ? 'Cu(NO₃)₂(aq) + 2Ag(s)'
          : metal === 'Al'
          ? 'Al(NO₃)₃(aq) + 3Ag(s)'
          : `${metal}(NO₃)₂(aq) + 2Ag(s)`
        : metal === 'Al'
        ? `Al₂(SO₄)₃(aq) + 3${target.metal}(s)`
        : `${metal}SO₄(aq) + ${target.metal}(s)`;

    return {
      reacts: true,
      badge: `Displacement! ${target.metal} Coated on ${metal}`,
      equation: `${metal}(s) + ${saltFormula}(aq) → ${dispProduct}`,
      observation:
        reagent === 'cuso4' && metal === 'Fe'
          ? 'Blue CuSO₄ fades to pale green FeSO₄; reddish-brown Copper coats the Iron!'
          : reagent === 'agno3' && metal === 'Cu'
          ? 'Colourless AgNO₃ turns sky-blue Cu(NO₃)₂ while shiny silvery-grey Silver crystals grow on Copper!'
          : `${metal} is higher than ${target.metal} in the reactivity series, so it displaces ${target.metal} onto the strip.`,
      liquidStart: target.startHex,
      liquidEnd: endHex,
      effect: 'coating',
      coatingColor: target.depositHex,
      trapNote: 'More reactive metal always displaces less reactive metal from its aqueous salt solution.',
    };
  }

  return {
    reacts: false,
    badge: 'No Reaction (Lower in Reactivity Series)',
    equation: `${metal}(s) + ${reagent.toUpperCase()}(aq) → No Reaction`,
    observation:
      metal === target.metal
        ? `${metal} cannot displace itself from its own salt solution.`
        : `${metal} is less reactive than ${target.metal}, so no displacement occurs and solution colour stays unchanged.`,
    liquidStart: target.startHex,
    liquidEnd: target.startHex,
    effect: 'none',
    trapNote: `Reactivity check: ${metal} (rank ${r}) ≤ ${target.metal} (rank ${target.rank}).`,
  };
}

export function ChemistryMetallurgyIonicLab() {
  const [tab, setTab] = useState<'matrix' | 'ionic-refining'>('matrix');

  // Tab 1 state
  const [metal, setMetal] = useState<MetalKey>('Fe');
  const [reagent, setReagent] = useState<ReagentKey>('cuso4');
  const [matrixProgress, setMatrixProgress] = useState<number>(1);
  const matrixRafRef = useRef<number | null>(null);

  // Tab 2 state
  const [subMode, setSubMode] = useState<'ionic' | 'refining'>('ionic');
  const [ionicCompound, setIonicCompound] = useState<'NaCl' | 'MgCl2'>('NaCl');
  const [transferDone, setTransferDone] = useState<boolean>(false);
  const [refiningPlaying, setRefiningPlaying] = useState<boolean>(true);
  const [refiningProgress, setRefiningProgress] = useState<number>(0.45);

  const outcome = useMemo(() => evaluateMatrix(metal, reagent), [metal, reagent]);

  const replayMatrix = () => {
    if (matrixRafRef.current !== null) cancelAnimationFrame(matrixRafRef.current);
    setMatrixProgress(0);
    let start: number | null = null;
    const step = (now: number) => {
      if (start === null) start = now;
      const p = Math.min(1, (now - start) / 1400);
      setMatrixProgress(p);
      if (p < 1) {
        matrixRafRef.current = requestAnimationFrame(step);
      }
    };
    matrixRafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => {
      if (matrixRafRef.current !== null) cancelAnimationFrame(matrixRafRef.current);
    };
  }, []);

  useEffect(() => {
    if (tab !== 'ionic-refining' || subMode !== 'refining' || !refiningPlaying) return;
    let rafId = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      setRefiningProgress((p) => (p + dt * 0.16) % 1);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [tab, subMode, refiningPlaying]);

  const metalMeta = METALS.find((m) => m.key === metal) ?? METALS[0];

  return (
    <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50/50 to-white p-4 sm:p-5 space-y-4 no-word-lookup select-none dark:border-violet-900/60 dark:from-slate-900 dark:to-slate-950">
      {/* Header & Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Atom className="h-5 w-5 text-violet-600 dark:text-violet-400" />
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              Reactivity Displacement Matrix, Ionic Electron-Transfer &amp; Copper Refining
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-400">
              Test 9 metals × 9 reagents, animate NaCl / MgCl₂ electron transfer, and refine impure Cu
            </p>
          </div>
        </div>

        <div className="flex rounded-xl border border-slate-200 bg-white p-1 gap-1 dark:border-slate-700 dark:bg-slate-900">
          <button
            type="button"
            onClick={() => setTab('matrix')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              tab === 'matrix'
                ? 'bg-violet-600 text-white'
                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
            }`}
          >
            1. Reactivity Matrix (9 × 9)
          </button>
          <button
            type="button"
            onClick={() => setTab('ionic-refining')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              tab === 'ionic-refining'
                ? 'bg-violet-600 text-white'
                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
            }`}
          >
            2. Ionic Bonds &amp; Cu Refining
          </button>
        </div>
      </div>

      {tab === 'matrix' ? (
        <div className="space-y-4">
          {/* Selectors */}
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-3 space-y-2 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                1. Pick Metal (Decreasing Reactivity →)
              </div>
              <div className="flex flex-wrap gap-1.5">
                {METALS.map((m) => (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => {
                      setMetal(m.key);
                      replayMatrix();
                    }}
                    className={`rounded-lg px-2.5 py-1 text-xs font-bold border transition cursor-pointer ${
                      metal === m.key
                        ? 'bg-violet-600 text-white border-violet-600 shadow-xs'
                        : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {m.key}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3 space-y-2 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                2. Pick Reagent / Salt Solution
              </div>
              <div className="flex flex-wrap gap-1.5">
                {REAGENTS.map((rg) => (
                  <button
                    key={rg.key}
                    type="button"
                    onClick={() => {
                      setReagent(rg.key);
                      replayMatrix();
                    }}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-bold border transition cursor-pointer ${
                      reagent === rg.key
                        ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                        : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {rg.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Animated Beaker + Result Card */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {outcome.reacts ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-extrabold text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300">
                    <CheckCircle2 className="h-3.5 w-3.5" /> {outcome.badge}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-xs font-extrabold text-rose-900 dark:bg-rose-950/60 dark:text-rose-300">
                    <XCircle className="h-3.5 w-3.5" /> {outcome.badge}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={replayMatrix}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Replay Drop
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-5 items-center">
              <svg
                viewBox="0 0 260 190"
                className="md:col-span-2 w-full h-48 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-900 dark:border-slate-800"
                aria-label={`Beaker showing ${metal} in ${reagent}`}
              >
                {/* Beaker outline */}
                <path
                  d="M 70 36 L 70 156 Q 70 166 82 166 L 178 166 Q 190 166 190 156 L 190 36"
                  fill="none"
                  stroke="#475569"
                  strokeWidth="2.8"
                />
                {/* Solution fill */}
                <rect
                  x="72"
                  y="74"
                  width="116"
                  height="90"
                  rx="6"
                  fill={matrixProgress > 0.55 ? outcome.liquidEnd : outcome.liquidStart}
                  opacity="0.7"
                />

                {/* Steam swirls if steam reagent */}
                {reagent === 'steam' && (
                  <g stroke="#94a3b8" strokeWidth="2.5" fill="none" opacity="0.75">
                    <path d="M 96 140 Q 86 115 102 92" />
                    <path d="M 156 140 Q 168 110 152 88" />
                  </g>
                )}

                {/* Metal piece position */}
                {outcome.effect === 'float-bubbles' ? (
                  <g transform={`translate(130, ${135 - matrixProgress * 60})`}>
                    <rect x="-14" y="-8" width="28" height="16" rx="4" fill={metalMeta.metalColor} stroke="#334155" strokeWidth="1.4" />
                    <text x="0" y="3" textAnchor="middle" className="fill-slate-900 text-[9.5px] font-extrabold">{metal}</text>
                    {/* Sticking H2 bubbles */}
                    <circle cx="-14" cy="-6" r="3" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
                    <circle cx="14" cy="-4" r="3.2" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
                    <circle cx="-8" cy="10" r="2.8" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
                    <circle cx="9" cy="10" r="3" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
                  </g>
                ) : outcome.effect === 'fire' ? (
                  <g transform="translate(130, 74)">
                    <circle cx="0" cy="0" r="9" fill={metalMeta.metalColor} stroke="#334155" />
                    <path d="M -14 0 Q 0 -36 14 0 Z" fill={outcome.flameColor ?? '#facc15'} opacity="0.9" />
                    <path d="M -7 0 Q 0 -20 7 0 Z" fill="#ffffff" opacity="0.85" />
                  </g>
                ) : (
                  <g>
                    {/* Dipped metal strip */}
                    <rect
                      x="118"
                      y="52"
                      width="24"
                      height="98"
                      rx="4"
                      fill={metalMeta.metalColor}
                      stroke="#334155"
                      strokeWidth="1.5"
                    />
                    {outcome.effect === 'coating' && matrixProgress > 0.15 && (
                      <rect
                        x="118"
                        y="74"
                        width="24"
                        height="76"
                        rx="4"
                        fill={outcome.coatingColor ?? '#b45309'}
                        opacity={Math.min(0.92, matrixProgress)}
                      />
                    )}
                    <text x="130" y="65" textAnchor="middle" className="fill-slate-900 text-[10px] font-extrabold">
                      {metal}
                    </text>
                  </g>
                )}

                {/* Evolving bubbles */}
                {(outcome.effect === 'bubbles' || outcome.effect === 'steam-oxide') && (
                  <g fill="#ffffff" stroke="#0284c7" strokeWidth="1">
                    <circle cx="110" cy={132 - matrixProgress * 52} r="3" />
                    <circle cx="148" cy={140 - matrixProgress * 60} r="2.6" />
                    <circle cx="128" cy={110 - matrixProgress * 44} r="3.2" />
                  </g>
                )}

                {/* Brown gas fumes for HNO3 */}
                {outcome.effect === 'brown-gas' && (
                  <g opacity="0.72">
                    <circle cx="116" cy={56 - matrixProgress * 18} r="12" fill="#b45309" />
                    <circle cx="142" cy={46 - matrixProgress * 22} r="14" fill="#9a3412" />
                    <text x="130" y="24" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 text-[9.5px] font-extrabold">
                      NO₂ / NO (No H₂!)
                    </text>
                  </g>
                )}
              </svg>

              <div className="md:col-span-3 space-y-2.5 text-xs">
                <div className="rounded-lg border border-violet-200 bg-violet-50/60 p-2.5 dark:border-violet-900 dark:bg-violet-950/30">
                  <div className="text-[10.5px] font-extrabold uppercase text-violet-700 dark:text-violet-400">
                    Chemical Equation ({metalMeta.name} + {REAGENTS.find((rg) => rg.key === reagent)?.label})
                  </div>
                  <div className="font-mono font-bold text-slate-900 dark:text-white mt-1">
                    {outcome.equation}
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 dark:border-slate-800 dark:bg-slate-900">
                  <div className="text-[10.5px] font-extrabold uppercase text-slate-600 dark:text-slate-400">
                    Experimental Observation
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 mt-1 leading-relaxed">{outcome.observation}</p>
                </div>

                <div className="rounded-lg border border-amber-200 bg-amber-50/70 p-2.5 flex items-start gap-2 dark:border-amber-900 dark:bg-amber-950/30">
                  <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-amber-950 dark:text-amber-200">
                    <strong>CBSE Examiner Note:</strong> {outcome.trapNote}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Sub-mode switcher */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSubMode('ionic')}
              className={`rounded-xl px-3 py-1.5 text-xs font-extrabold border transition cursor-pointer ${
                subMode === 'ionic'
                  ? 'bg-violet-600 text-white border-violet-600'
                  : 'bg-white text-slate-700 border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
              }`}
            >
              Sub-mode A: Ionic Dot Transfer (NaCl / MgCl₂)
            </button>
            <button
              type="button"
              onClick={() => setSubMode('refining')}
              className={`rounded-xl px-3 py-1.5 text-xs font-extrabold border transition cursor-pointer ${
                subMode === 'refining'
                  ? 'bg-violet-600 text-white border-violet-600'
                  : 'bg-white text-slate-700 border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
              }`}
            >
              Sub-mode B: Electrolytic Refining of Copper
            </button>
          </div>

          {subMode === 'ionic' ? (
            <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 dark:border-slate-800 dark:bg-slate-950">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex gap-1.5">
                  {(['NaCl', 'MgCl2'] as const).map((comp) => (
                    <button
                      key={comp}
                      type="button"
                      onClick={() => {
                        setIonicCompound(comp);
                        setTransferDone(false);
                      }}
                      className={`rounded-lg px-3 py-1 text-xs font-bold border cursor-pointer ${
                        ionicCompound === comp
                          ? 'bg-violet-600 text-white border-violet-600'
                          : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
                      }`}
                    >
                      {comp === 'NaCl' ? 'NaCl (1 e⁻ transfer)' : 'MgCl₂ (2 e⁻ transfer)'}
                    </button>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setTransferDone(true)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-700 cursor-pointer"
                  >
                    <Sparkles className="h-3.5 w-3.5" /> Transfer Valence Electrons
                  </button>
                  <button
                    type="button"
                    onClick={() => setTransferDone(false)}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-bold text-slate-700 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Reset
                  </button>
                </div>
              </div>

              <svg
                viewBox="0 0 520 190"
                className="w-full h-48 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-900 dark:border-slate-800"
                aria-label={`Ionic electron transfer in ${ionicCompound}`}
              >
                {ionicCompound === 'NaCl' ? (
                  <g>
                    {/* Na Atom / Na+ Ion */}
                    <circle cx="135" cy="95" r="24" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
                    <circle cx="135" cy="95" r="42" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeDasharray={transferDone ? '2 2' : 'none'} />
                    {!transferDone && (
                      <circle cx="135" cy="95" r="60" fill="none" stroke="#0284c7" strokeWidth="1.6" />
                    )}
                    <text x="135" y="99" textAnchor="middle" className="fill-slate-900 text-sm font-extrabold">
                      {transferDone ? 'Na⁺' : 'Na'}
                    </text>
                    <text x="135" y="174" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-xs font-bold">
                      {transferDone ? '[Na]⁺ (2, 8) Stable Octet' : 'Na (2, 8, 1) — 1 valence e⁻'}
                    </text>

                    {/* Flying electron */}
                    <circle
                      cx={transferDone ? 325 : 195}
                      cy="95"
                      r="6"
                      fill="#e11d48"
                      className="transition-all duration-700"
                    />
                    {!transferDone && (
                      <path d="M 205 84 Q 260 44 315 84" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeDasharray="4 3" />
                    )}

                    {/* Cl Atom / Cl- Ion */}
                    <circle cx="385" cy="95" r="24" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
                    <circle cx="385" cy="95" r="42" fill="none" stroke="#16a34a" strokeWidth="1.5" />
                    <circle cx="385" cy="95" r="60" fill="none" stroke="#16a34a" strokeWidth="1.8" />
                    <text x="385" y="99" textAnchor="middle" className="fill-slate-900 text-sm font-extrabold">
                      {transferDone ? 'Cl⁻' : 'Cl'}
                    </text>
                    <text x="385" y="174" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-bold">
                      {transferDone ? '[Cl]⁻ (2, 8, 8) Stable Octet' : 'Cl (2, 8, 7) — needs 1 e⁻'}
                    </text>
                  </g>
                ) : (
                  <g>
                    {/* Mg Atom / Mg2+ Ion */}
                    <circle cx="135" cy="95" r="24" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
                    <circle cx="135" cy="95" r="42" fill="none" stroke="#7c3aed" strokeWidth="1.5" />
                    {!transferDone && (
                      <circle cx="135" cy="95" r="58" fill="none" stroke="#7c3aed" strokeWidth="1.6" />
                    )}
                    <text x="135" y="99" textAnchor="middle" className="fill-slate-900 text-sm font-extrabold">
                      {transferDone ? 'Mg²⁺' : 'Mg'}
                    </text>
                    <text x="135" y="174" textAnchor="middle" className="fill-violet-700 dark:fill-violet-300 text-xs font-bold">
                      {transferDone ? '[Mg]²⁺ (2, 8) Octet' : 'Mg (2, 8, 2) — 2 valence e⁻'}
                    </text>

                    {/* 2 Flying electrons */}
                    <circle
                      cx={transferDone ? 350 : 185}
                      cy={transferDone ? 50 : 62}
                      r="5.5"
                      fill="#e11d48"
                      className="transition-all duration-700"
                    />
                    <circle
                      cx={transferDone ? 350 : 185}
                      cy={transferDone ? 132 : 128}
                      r="5.5"
                      fill="#e11d48"
                      className="transition-all duration-700"
                    />

                    {/* Two Cl Atoms */}
                    <circle cx="385" cy="50" r="28" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.8" />
                    <text x="385" y="54" textAnchor="middle" className="fill-slate-900 text-xs font-extrabold">
                      {transferDone ? 'Cl⁻ (2,8,8)' : 'Cl (2,8,7)'}
                    </text>

                    <circle cx="385" cy="132" r="28" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.8" />
                    <text x="385" y="136" textAnchor="middle" className="fill-slate-900 text-xs font-extrabold">
                      {transferDone ? 'Cl⁻ (2,8,8)' : 'Cl (2,8,7)'}
                    </text>

                    <text x="385" y="174" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-bold">
                      {transferDone ? 'Electrostatic Lattice: [Mg]²⁺ 2[Cl]⁻' : '2 Cl atoms accept 1 e⁻ each'}
                    </text>
                  </g>
                )}
              </svg>

              <div className="grid sm:grid-cols-3 gap-2 text-xs">
                <div className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 dark:bg-slate-900 dark:border-slate-800">
                  <strong>High Melting &amp; Boiling Point:</strong> Strong inter-ionic electrostatic attraction needs huge heat to break.
                </div>
                <div className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 dark:bg-slate-900 dark:border-slate-800">
                  <strong>Solubility:</strong> Generally soluble in polar water; insoluble in kerosene/petrol.
                </div>
                <div className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 dark:bg-slate-900 dark:border-slate-800">
                  <strong>Conduction Trap:</strong> Do NOT conduct in solid state (ions locked); conduct ONLY when molten or aqueous!
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 dark:border-slate-800 dark:bg-slate-950">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                  <Zap className="h-4 w-4 text-amber-500" />
                  Electrolytic Refining of Impure Copper (CuSO₄ + dil. H₂SO₄ Bath)
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setRefiningPlaying((p) => !p)}
                    className="inline-flex items-center gap-1 rounded-lg bg-violet-600 px-3 py-1.5 text-xs font-bold text-white cursor-pointer"
                  >
                    {refiningPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                    {refiningPlaying ? 'Pause Ions' : 'Play Ions'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setRefiningProgress(0)}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-bold text-slate-700 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Reset Slab
                  </button>
                </div>
              </div>

              <svg
                viewBox="0 0 520 210"
                className="w-full h-52 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-900 dark:border-slate-800"
                aria-label="Electrolytic refining of copper tank"
              >
                {/* Tank */}
                <rect x="95" y="55" width="330" height="130" rx="8" fill="#38bdf8" opacity="0.22" stroke="#475569" strokeWidth="2.5" />

                {/* DC Battery & wires */}
                <polyline points="160,52 160,22 238,22" fill="none" stroke="#334155" strokeWidth="2" />
                <polyline points="360,52 360,22 282,22" fill="none" stroke="#334155" strokeWidth="2" />
                <line x1="244" y1="14" x2="244" y2="30" stroke="#dc2626" strokeWidth="3" />
                <line x1="254" y1="18" x2="254" y2="26" stroke="#334155" strokeWidth="2" />
                <line x1="264" y1="14" x2="264" y2="30" stroke="#dc2626" strokeWidth="3" />
                <line x1="274" y1="18" x2="274" y2="26" stroke="#334155" strokeWidth="2" />
                <text x="150" y="17" className="fill-rose-700 dark:fill-rose-400 text-[10.5px] font-extrabold">+ Anode (Impure Cu)</text>
                <text x="368" y="17" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-[10.5px] font-extrabold">− Cathode (Pure Cu)</text>

                {/* Impure Anode (erodes over time) */}
                <rect
                  x="140"
                  y="52"
                  width={Math.max(18, 40 - refiningProgress * 16)}
                  height="102"
                  rx="3"
                  fill="#9a3412"
                  stroke="#7c2d12"
                  strokeWidth="1.6"
                />

                {/* Pure Cathode (grows thicker over time) */}
                <rect
                  x={354 - refiningProgress * 8}
                  y="52"
                  width={12 + refiningProgress * 16}
                  height="102"
                  rx="3"
                  fill="#ea580c"
                  stroke="#c2410c"
                  strokeWidth="1.6"
                />

                {/* Migrating Cu2+ ions */}
                {[0, 1, 2].map((i) => {
                  const t = (refiningProgress + i * 0.33) % 1;
                  const x = 185 + t * 158;
                  const y = 84 + i * 26;
                  return (
                    <g key={i}>
                      <circle cx={x} cy={y} r="10" fill="#2563eb" opacity="0.85" />
                      <text x={x} y={y + 3} textAnchor="middle" className="fill-white text-[8.5px] font-extrabold">
                        Cu²⁺
                      </text>
                    </g>
                  );
                })}

                {/* Anode Mud settling under Anode */}
                <ellipse cx="160" cy="178" rx={18 + refiningProgress * 14} ry="6" fill="#475569" />
                <circle cx="152" cy="176" r="2.2" fill="#facc15" />
                <circle cx="166" cy="178" r="2" fill="#e2e8f0" />
                <text x="160" y="198" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-extrabold">
                  Anode Mud (Insoluble Ag, Au)
                </text>
                <text x="360" y="198" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-extrabold">
                  Pure Cu Deposits Here
                </text>
              </svg>

              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg bg-rose-50/70 border border-rose-200 p-2.5 dark:bg-rose-950/30 dark:border-rose-900">
                  <strong className="text-rose-800 dark:text-rose-300">At Anode (+):</strong>{' '}
                  <code className="font-mono font-bold">Cu(s) → Cu²⁺(aq) + 2e⁻</code> (Impure copper dissolves; soluble Zn/Fe stay in solution, insoluble Ag/Au drop as <strong>Anode Mud</strong>).
                </div>
                <div className="rounded-lg bg-sky-50/70 border border-sky-200 p-2.5 dark:bg-sky-950/30 dark:border-sky-900">
                  <strong className="text-sky-800 dark:text-sky-300">At Cathode (−):</strong>{' '}
                  <code className="font-mono font-bold">Cu²⁺(aq) + 2e⁻ → Cu(s)</code> (Equivalent pure copper deposits on the thin pure Cu strip!).
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
