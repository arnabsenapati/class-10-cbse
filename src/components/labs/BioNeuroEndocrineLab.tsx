import { useEffect, useRef, useState } from 'react';
import {
  Activity,
  Brain,
  Flame,
  RotateCcw,
  Sparkles,
  Sun,
  Zap,
} from 'lucide-react';

type BrainRegionId =
  | 'cerebrum'
  | 'hypothalamus'
  | 'midbrain'
  | 'cerebellum'
  | 'pons'
  | 'medulla';

interface BrainRegionInfo {
  id: BrainRegionId;
  name: string;
  division: string;
  role: string;
  casePrompt: string;
  caseAnswer: string;
}

const BRAIN_REGIONS: Record<BrainRegionId, BrainRegionInfo> = {
  cerebrum: {
    id: 'cerebrum',
    name: 'Cerebrum',
    division: 'Forebrain (Main Thinking Part)',
    role: 'Thinking, memory, reasoning, intelligence, interpreting sensory inputs (sight, hearing, smell), and initiating voluntary actions (writing, speaking).',
    casePrompt: 'CBSE Prompt: A student recalls formulas in the exam hall and decides to write an answer. Which brain region leads?',
    caseAnswer: 'Cerebrum (Forebrain) — centre for memory, reasoning & voluntary motor action.',
  },
  hypothalamus: {
    id: 'hypothalamus',
    name: 'Hypothalamus',
    division: 'Forebrain (Base)',
    role: 'Controls hunger, feeling of fullness (satiety), thirst, body temperature regulation, and links nervous system to Pituitary gland.',
    casePrompt: 'CBSE Prompt: After eating a full meal, you feel satisfied and stop eating. Which centre signals fullness?',
    caseAnswer: 'Satiety centre in the Forebrain (Hypothalamus).',
  },
  midbrain: {
    id: 'midbrain',
    name: 'Midbrain',
    division: 'Midbrain',
    role: 'Relays impulses between Forebrain and Hindbrain and coordinates involuntary visual & auditory reflexes (turning head toward a loud sound, pupil constriction in bright light).',
    casePrompt: 'CBSE Prompt: A bright torch shines into your eyes and both pupils shrink immediately. Which part mediates this?',
    caseAnswer: 'Midbrain (visual/auditory reflex centre).',
  },
  cerebellum: {
    id: 'cerebellum',
    name: 'Cerebellum',
    division: 'Hindbrain',
    role: 'Precision of voluntary actions, maintaining posture and body balance (walking in a straight line, riding a bicycle, picking up a pencil).',
    casePrompt: 'CBSE Prompt: A person under alcohol influence sways and cannot walk straight or ride a cycle. Which brain part is impaired?',
    caseAnswer: 'Cerebellum (Hindbrain) — controls posture & balance, NOT Medulla!',
  },
  pons: {
    id: 'pons',
    name: 'Pons',
    division: 'Hindbrain (Brainstem)',
    role: 'Acts as a bridge connecting brain regions and helps regulate the rhythm and rate of respiration.',
    casePrompt: 'CBSE Prompt: Name the hindbrain bridge situated directly above the Medulla that regulates breathing rhythm.',
    caseAnswer: 'Pons.',
  },
  medulla: {
    id: 'medulla',
    name: 'Medulla Oblongata',
    division: 'Hindbrain (Brainstem)',
    role: 'Controls vital involuntary actions such as blood pressure, salivation, vomiting, heartbeat, and swallowing.',
    casePrompt: 'CBSE Prompt: Mouth watering at the smell of tamarind, blood pressure, and vomiting are regulated by which structure?',
    caseAnswer: 'Medulla (Hindbrain) — NEVER confuse with Cerebellum!',
  },
};

type GlandId = 'pituitary' | 'thyroid' | 'adrenal' | 'pancreas' | 'testis' | 'ovary';

interface GlandInfo {
  id: GlandId;
  name: string;
  hormone: string;
  functionText: string;
  disorder: string;
}

const GLANDS: Record<GlandId, GlandInfo> = {
  pituitary: {
    id: 'pituitary',
    name: 'Pituitary Gland (Base of Brain)',
    hormone: 'Growth Hormone (GH)',
    functionText: 'Regulates growth and development of bones & muscles; coordinates other glands.',
    disorder: 'Deficiency in childhood → Dwarfism | Excess → Gigantism.',
  },
  thyroid: {
    id: 'thyroid',
    name: 'Thyroid Gland (Neck)',
    hormone: 'Thyroxine',
    functionText: 'Regulates carbohydrate, protein & fat metabolism for balanced body growth. Requires Iodine!',
    disorder: 'Iodine deficiency → Goitre (swollen neck). Use iodized salt!',
  },
  adrenal: {
    id: 'adrenal',
    name: 'Adrenal Glands (Above Kidneys)',
    hormone: 'Adrenaline ("Fight or Flight")',
    functionText: 'Secreted directly into blood during fear/stress: heartbeat rises, blood diverts from gut/skin to skeletal muscles, breathing rate increases.',
    disorder: 'Prepares body rapidly to run or confront emergencies.',
  },
  pancreas: {
    id: 'pancreas',
    name: 'Pancreas (Below Stomach)',
    hormone: 'Insulin',
    functionText: 'Lowers high blood glucose by helping cells absorb glucose; controlled by a negative Feedback Mechanism.',
    disorder: 'Insufficient Insulin → Diabetes (high blood sugar; treated with insulin injections).',
  },
  testis: {
    id: 'testis',
    name: 'Testis (Male — Scrotum)',
    hormone: 'Testosterone',
    functionText: 'Controls male secondary sexual characters at puberty (facial hair, deeper voice, muscle growth) & sperm production.',
    disorder: 'Maintains male reproductive development.',
  },
  ovary: {
    id: 'ovary',
    name: 'Ovary (Female — Pelvic Cavity)',
    hormone: 'Oestrogen & Progesterone',
    functionText: 'Controls female puberty changes (breast development, menstrual cycle regulation) & egg maturation.',
    disorder: 'Maintains uterine lining & female reproductive health.',
  },
};

function lerpPts(pts: [number, number][], t: number): [number, number] {
  const c = Math.max(0, Math.min(1, t));
  const n = pts.length - 1;
  const idx = Math.min(n - 1, Math.floor(c * n));
  const f = c * n - idx;
  return [pts[idx][0] + (pts[idx + 1][0] - pts[idx][0]) * f, pts[idx][1] + (pts[idx + 1][1] - pts[idx][1]) * f];
}

const SENSORY_PTS: [number, number][] = [
  [54, 138],
  [120, 86],
  [196, 68],
  [272, 96],
];

const MOTOR_PTS: [number, number][] = [
  [276, 128],
  [198, 152],
  [134, 156],
  [102, 152],
];

export function BioNeuroEndocrineLab() {
  const [activeTab, setActiveTab] = useState<'reflex' | 'brain-endocrine' | 'tropism'>('reflex');

  // Tab 1: Reflex Arc animation (0 = idle, >0..1.5 running)
  const [reflexProgress, setReflexProgress] = useState(0);
  const [reflexRunning, setReflexRunning] = useState(false);
  const [synapsePhase, setSynapsePhase] = useState(0);

  // Tab 2: Brain vs Endocrine sub-mode
  const [subMode2, setSubMode2] = useState<'brain' | 'endocrine'>('brain');
  const [selectedRegion, setSelectedRegion] = useState<BrainRegionId>('cerebellum');
  const [selectedGland, setSelectedGland] = useState<GlandId>('pancreas');
  const [bloodGlucose, setBloodGlucose] = useState(90);
  const [feedbackActive, setFeedbackActive] = useState(false);

  // Tab 3: Auxin Phototropism
  const [sunPos, setSunPos] = useState<'left' | 'overhead' | 'right'>('right');
  const [bendProgress, setBendProgress] = useState(1);

  const rafRef = useRef<number | null>(null);

  // Continuous loop for synapse + reflex + insulin feedback + tropism ease
  useEffect(() => {
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      setSynapsePhase((p) => (p + dt * 0.48) % 1);

      setReflexProgress((prev) => {
        if (!reflexRunning) return prev;
        const next = prev + dt * 0.55;
        if (next >= 1.35) {
          setReflexRunning(false);
          return 1.35;
        }
        return next;
      });

      if (feedbackActive) {
        setBloodGlucose((g) => {
          if (g <= 91) {
            setFeedbackActive(false);
            return 90;
          }
          return Math.max(90, g - dt * 28);
        });
      }

      setBendProgress((b) => Math.min(1, b + dt * 1.4));

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [reflexRunning, feedbackActive]);

  const triggerHotPan = () => {
    setReflexProgress(0.02);
    setReflexRunning(true);
  };

  const resetReflex = () => {
    setReflexRunning(false);
    setReflexProgress(0);
  };

  const triggerMealSpike = () => {
    setBloodGlucose(185);
    setSelectedGland('pancreas');
    setFeedbackActive(true);
  };

  const handleSunChange = (pos: 'left' | 'overhead' | 'right') => {
    setSunPos(pos);
    setBendProgress(0.05);
  };

  // Reflex stage markers
  const armPull = reflexProgress >= 0.65 ? Math.min(1, (reflexProgress - 0.65) / 0.25) : 0;
  const brainNotified = reflexProgress >= 0.72;
  const sensoryDot =
    reflexProgress > 0 && reflexProgress <= 0.35
      ? lerpPts(SENSORY_PTS, reflexProgress / 0.35)
      : null;
  const motorDot =
    reflexProgress > 0.42 && reflexProgress <= 0.78
      ? lerpPts(MOTOR_PTS, (reflexProgress - 0.42) / 0.36)
      : null;

  const reflexStageLabel =
    reflexProgress === 0
      ? 'Ready — Tap "Touch Hot Pan" to fire reflex arc!'
      : reflexProgress < 0.35
      ? '1. Receptor → Sensory Neuron carrying impulse to Spinal Cord'
      : reflexProgress < 0.45
      ? '2. Spinal Cord Relay Neuron connects directly (NO thinking delay!)'
      : reflexProgress < 0.75
      ? '3. Motor Neuron fires → Biceps Muscle contracts & pulls hand away!'
      : '4. Hand Safe! Delayed signal reaches Brain ("Ouch, hot!")';

  // Brain region detail
  const regionInfo = BRAIN_REGIONS[selectedRegion];
  const glandInfo = GLANDS[selectedGland];
  const insulinLevel = bloodGlucose > 110 ? Math.min(100, Math.round(((bloodGlucose - 90) / 110) * 100)) : 12;

  // Auxin tropism curve offset
  const targetBend = sunPos === 'left' ? -44 : sunPos === 'right' ? 44 : 0;
  const shootTipDx = targetBend * bendProgress;

  return (
    <div className="no-word-lookup select-none rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/60 via-white to-teal-50/40 p-4 sm:p-5 space-y-4 dark:border-indigo-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 pb-3.5 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs">
            <Brain className="h-5 w-5" />
          </span>
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
              Neuro-Endocrine &amp; Plant Tropism Simulator Lab (Ch 6)
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Reflex arc &amp; synapse neurotransmitters, 3D-shaded brain explorer, insulin feedback &amp; auxin bending
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1.5">
        {[
          { id: 'reflex' as const, icon: Zap, label: '1. Reflex Arc & Synapse Chemical Zoom' },
          { id: 'brain-endocrine' as const, icon: Brain, label: '2. 3D Brain Explorer & Insulin Feedback' },
          { id: 'tropism' as const, icon: Sun, label: '3. Auxin Phototropism & Geotropism' },
        ].map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-extrabold transition cursor-pointer ${
                activeTab === t.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-indigo-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {t.label}
            </button>
          );
        })}
      </div>

      {/* TAB 1: REFLEX ARC & SYNAPSE ZOOM */}
      {activeTab === 'reflex' && (
        <div className="grid gap-4 lg:grid-cols-12 items-start">
          {/* Reflex Arc Panel */}
          <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-white p-3.5 space-y-2.5 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-xs font-extrabold text-rose-700 dark:text-rose-400">
                Spinal Cord Reflex Arc Simulator
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={triggerHotPan}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-extrabold text-white hover:bg-rose-700 cursor-pointer shadow-xs"
                >
                  <Flame className="h-3.5 w-3.5" /> Touch Hot Pan
                </button>
                <button
                  type="button"
                  onClick={resetReflex}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <RotateCcw className="h-3 w-3" /> Reset
                </button>
              </div>
            </div>

            <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200">
              {reflexStageLabel}
            </div>

            <svg viewBox="0 0 380 210" className="w-full h-auto" aria-label="Animated Reflex Arc">
              {/* Hot Pan */}
              <rect x="16" y="148" width="54" height="22" rx="5" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
              <text x="43" y="162" textAnchor="middle" fontSize="9" fontWeight="900" fill="#ffffff">HOT PAN</text>

              {/* Hand/Arm pulling back */}
              <g transform={`translate(${armPull * 18}, ${-armPull * 34})`}>
                <path d="M48 134 C58 118, 72 130, 88 144" fill="none" stroke="#f59e0b" strokeWidth="11" strokeLinecap="round" />
                <circle cx="52" cy="134" r="7" fill="#fbbf24" stroke="#b45309" strokeWidth="1.6" />
              </g>

              {/* Spinal cord */}
              <ellipse cx="294" cy="116" rx="54" ry="44" fill="#fef3c7" stroke="#b45309" strokeWidth="2.2" />
              <path d="M278 88 Q294 104 310 88 Q318 116 310 144 Q294 128 278 144 Q270 116 278 88 Z" fill="#d97706" opacity="0.4" />
              <text x="294" y="176" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-amber-900 dark:fill-amber-300">
                Spinal Cord (Relay Neuron)
              </text>

              {/* Brain notification path */}
              <path d="M294 72 L294 28" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="4 3" />
              <rect x="220" y="6" width="148" height="24" rx="8" fill={brainNotified ? '#4f46e5' : '#eef2ff'} stroke="#4f46e5" strokeWidth="1.5" />
              <text x="294" y="21" textAnchor="middle" fontSize="8.8" fontWeight="800" fill={brainNotified ? '#ffffff' : '#312e81'}>
                {brainNotified ? 'Brain: "Ouch!" (After pull!)' : 'Message to Brain (Delayed)'}
              </text>

              {/* Sensory Path */}
              <path d="M54 138 Q130 64 272 96" fill="none" stroke="#0284c7" strokeWidth="3.5" />
              <text x="155" y="64" textAnchor="middle" fontSize="8.8" fontWeight="800" className="fill-sky-700 dark:fill-sky-300">
                Sensory Neuron →
              </text>

              {/* Relay neuron */}
              <path
                d="M272 96 Q296 112 276 128"
                fill="none"
                stroke={reflexProgress >= 0.35 && reflexProgress <= 0.48 ? '#eab308' : '#7c3aed'}
                strokeWidth="4"
              />

              {/* Motor Path */}
              <path d="M276 128 Q182 158 102 152" fill="none" stroke="#059669" strokeWidth="3.5" />
              <text x="180" y="174" textAnchor="middle" fontSize="8.8" fontWeight="800" className="fill-emerald-700 dark:fill-emerald-300">
                ← Motor Neuron (to Effector Muscle)
              </text>

              {/* Biceps Effector */}
              <ellipse cx="96" cy="148" rx="18" ry="10" fill={armPull > 0.2 ? '#e11d48' : '#fda4af'} stroke="#be123c" strokeWidth="2" />

              {/* Animated Impulse Sparks */}
              {sensoryDot && (
                <circle cx={sensoryDot[0]} cy={sensoryDot[1]} r="6.5" fill="#facc15" stroke="#0284c7" strokeWidth="2" />
              )}
              {motorDot && (
                <circle cx={motorDot[0]} cy={motorDot[1]} r="6.5" fill="#facc15" stroke="#059669" strokeWidth="2" />
              )}
            </svg>
          </div>

          {/* Zoomed Microscopic Synapse Window */}
          <div className="lg:col-span-5 rounded-xl border border-indigo-200 bg-white p-3.5 space-y-2.5 dark:border-indigo-900/60 dark:bg-slate-950">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-indigo-700 dark:text-indigo-400">
                Microscopic Synapse Chemical Zoom
              </span>
              <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-bold text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                One-Way Signal
              </span>
            </div>

            <svg viewBox="0 0 300 175" className="w-full h-auto" aria-label="Synapse Chemical Transmission">
              {/* Pre-synaptic Axon Terminal */}
              <path d="M10 66 L76 66 C108 54, 126 62, 126 88 C126 114, 108 122, 76 110 L10 110 Z" fill="#c7d2fe" stroke="#4f46e5" strokeWidth="2.2" />
              {/* Vesicles inside terminal */}
              <circle cx="88" cy="76" r="8" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
              <circle cx="94" cy="99" r="8" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />

              {/* Incoming electrical flash */}
              {synapsePhase < 0.3 && (
                <circle cx={18 + (synapsePhase / 0.3) * 65} cy="88" r="6" fill="#facc15" stroke="#4f46e5" strokeWidth="2" />
              )}

              {/* Synaptic Cleft (Gap) */}
              <rect x="132" y="42" width="44" height="92" rx="6" fill="#fdf2f8" stroke="#f472b6" strokeWidth="1" strokeDasharray="3 2" />
              <text x="154" y="34" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-pink-700 dark:fill-pink-300">
                Synapse Gap
              </text>

              {/* Neurotransmitter dots crossing gap */}
              {synapsePhase >= 0.25 &&
                synapsePhase <= 0.78 &&
                [72, 84, 96, 106].map((y, idx) => {
                  const prog = (synapsePhase - 0.25) / 0.53;
                  return (
                    <circle
                      key={idx}
                      cx={126 + prog * 54}
                      cy={y + Math.sin(idx + prog * 6) * 3}
                      r="3.5"
                      fill="#db2777"
                    />
                  );
                })}

              {/* Post-synaptic Dendrite with Receptors */}
              <path d="M180 54 C180 78, 180 98, 180 122 L290 105 L290 71 Z" fill="#ccfbf1" stroke="#0f766e" strokeWidth="2.2" />
              {[68, 82, 96, 110].map((y) => (
                <rect key={y} x="176" y={y - 3} width="8" height="6" rx="2" fill="#0d9488" />
              ))}

              {/* Outgoing electrical impulse in next neuron */}
              {synapsePhase > 0.68 && (
                <circle cx={196 + ((synapsePhase - 0.68) / 0.32) * 86} cy="88" r="6" fill="#facc15" stroke="#0f766e" strokeWidth="2" />
              )}

              <text x="58" y="142" textAnchor="middle" fontSize="8.2" fontWeight="800" className="fill-indigo-900 dark:fill-indigo-300">
                1. Electrical Impulse
              </text>
              <text x="154" y="152" textAnchor="middle" fontSize="8.2" fontWeight="800" className="fill-pink-700 dark:fill-pink-300">
                2. Chemical Neurotransmitters
              </text>
              <text x="242" y="142" textAnchor="middle" fontSize="8.2" fontWeight="800" className="fill-teal-900 dark:fill-teal-300">
                3. New Electrical Impulse
              </text>
            </svg>

            <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300 bg-slate-50 rounded-lg p-2.5 border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
              <strong>Why one-way only?</strong> Neurotransmitter vesicles exist ONLY at the{' '}
              <strong>axon ending</strong>, while receptors exist ONLY on the next neuron&apos;s{' '}
              <strong>dendrite</strong>!
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: 3D-SHADED BRAIN EXPLORER & ENDOCRINE FEEDBACK */}
      {activeTab === 'brain-endocrine' && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSubMode2('brain')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-extrabold cursor-pointer ${
                subMode2 === 'brain'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
              }`}
            >
              <Brain className="h-3.5 w-3.5" /> Sub-mode 1: 3D-Shaded Brain Explorer
            </button>
            <button
              type="button"
              onClick={() => setSubMode2('endocrine')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-extrabold cursor-pointer ${
                subMode2 === 'endocrine'
                  ? 'bg-teal-700 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
              }`}
            >
              <Activity className="h-3.5 w-3.5" /> Sub-mode 2: Endocrine Map &amp; Glucose–Insulin Feedback
            </button>
          </div>

          {subMode2 === 'brain' ? (
            <div className="grid gap-4 lg:grid-cols-12 items-start">
              <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-950">
                <svg viewBox="0 0 340 250" className="w-full h-auto" aria-label="Interactive 3D Shaded Human Brain">
                  <defs>
                    <radialGradient id="cerebrumGrad" cx="42%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#fbcfe8" />
                      <stop offset="65%" stopColor="#f472b6" />
                      <stop offset="100%" stopColor="#be185d" />
                    </radialGradient>
                    <radialGradient id="cerebellumGrad" cx="40%" cy="40%" r="65%">
                      <stop offset="0%" stopColor="#fde68a" />
                      <stop offset="100%" stopColor="#d97706" />
                    </radialGradient>
                    <linearGradient id="stemGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#a5f3fc" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                  </defs>

                  {/* Skull / Cranium & CSF protective halo */}
                  <path
                    d="M52 152 C42 62, 118 18, 198 20 C272 22, 308 82, 294 148 C286 184, 245 204, 210 202"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <text x="172" y="14" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-slate-500">
                    Bony Cranium (Skull) + Cerebrospinal Fluid (Shock Absorber)
                  </text>

                  {/* Cerebrum */}
                  <path
                    d="M66 138 C58 72, 120 30, 196 32 C258 34, 288 80, 274 134 C264 150, 224 152, 190 142 C152 130, 108 158, 66 138 Z"
                    fill="url(#cerebrumGrad)"
                    stroke={selectedRegion === 'cerebrum' ? '#0f172a' : '#9d174d'}
                    strokeWidth={selectedRegion === 'cerebrum' ? 3.5 : 2}
                    className="cursor-pointer"
                    onClick={() => setSelectedRegion('cerebrum')}
                  />
                  {/* Gyri folds */}
                  <path d="M98 78 Q128 62 154 78 M168 60 Q206 46 238 66 M112 108 Q144 92 174 106 M206 94 Q242 84 256 108" fill="none" stroke="#9d174d" strokeWidth="1.6" opacity="0.45" className="pointer-events-none" />

                  {/* Hypothalamus */}
                  <ellipse
                    cx="154"
                    cy="132"
                    rx="22"
                    ry="13"
                    fill="#c084fc"
                    stroke={selectedRegion === 'hypothalamus' ? '#0f172a' : '#6b21a8'}
                    strokeWidth={selectedRegion === 'hypothalamus' ? 3.2 : 1.8}
                    className="cursor-pointer"
                    onClick={() => setSelectedRegion('hypothalamus')}
                  />

                  {/* Midbrain */}
                  <rect
                    x="166"
                    y="142"
                    width="28"
                    height="22"
                    rx="8"
                    fill="#34d399"
                    stroke={selectedRegion === 'midbrain' ? '#0f172a' : '#047857'}
                    strokeWidth={selectedRegion === 'midbrain' ? 3.2 : 1.8}
                    className="cursor-pointer"
                    onClick={() => setSelectedRegion('midbrain')}
                  />

                  {/* Pons */}
                  <ellipse
                    cx="176"
                    cy="174"
                    rx="18"
                    ry="13"
                    fill="#7dd3fc"
                    stroke={selectedRegion === 'pons' ? '#0f172a' : '#0369a1'}
                    strokeWidth={selectedRegion === 'pons' ? 3.2 : 1.8}
                    className="cursor-pointer"
                    onClick={() => setSelectedRegion('pons')}
                  />

                  {/* Medulla */}
                  <path
                    d="M168 186 L192 186 L196 232 L172 232 Z"
                    fill="url(#stemGrad)"
                    stroke={selectedRegion === 'medulla' ? '#0f172a' : '#0369a1'}
                    strokeWidth={selectedRegion === 'medulla' ? 3.2 : 1.8}
                    className="cursor-pointer"
                    onClick={() => setSelectedRegion('medulla')}
                  />

                  {/* Cerebellum */}
                  <ellipse
                    cx="236"
                    cy="170"
                    rx="34"
                    ry="25"
                    fill="url(#cerebellumGrad)"
                    stroke={selectedRegion === 'cerebellum' ? '#0f172a' : '#b45309'}
                    strokeWidth={selectedRegion === 'cerebellum' ? 3.5 : 2}
                    className="cursor-pointer"
                    onClick={() => setSelectedRegion('cerebellum')}
                  />
                  <path d="M214 166 Q236 156 258 166 M216 176 Q236 168 256 176" fill="none" stroke="#92400e" strokeWidth="1.4" opacity="0.6" className="pointer-events-none" />

                  <text x="165" y="88" textAnchor="middle" fontSize="10" fontWeight="900" fill="#ffffff" className="pointer-events-none">Cerebrum</text>
                  <text x="236" y="173" textAnchor="middle" fontSize="9" fontWeight="900" fill="#451a03" className="pointer-events-none">Cerebellum</text>
                  <text x="116" y="216" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-sky-800 dark:fill-sky-300">Medulla → Spinal Cord</text>
                </svg>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {(Object.keys(BRAIN_REGIONS) as BrainRegionId[]).map((id) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setSelectedRegion(id)}
                      className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition cursor-pointer ${
                        selectedRegion === id
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white border border-slate-200 text-slate-700 hover:border-indigo-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {BRAIN_REGIONS[id].name.split(' ')[0]}
                    </button>
                  ))}
                </div>

                <div className="rounded-xl border border-indigo-200 bg-white p-4 space-y-2.5 dark:border-indigo-900 dark:bg-slate-950">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="text-base font-extrabold text-slate-900 dark:text-white">
                      {regionInfo.name}
                    </h5>
                    <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-[11px] font-bold text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                      {regionInfo.division}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {regionInfo.role}
                  </p>
                  <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3 space-y-1 text-xs dark:border-amber-900 dark:bg-amber-950/30">
                    <div className="font-extrabold text-amber-900 dark:text-amber-300">
                      {regionInfo.casePrompt}
                    </div>
                    <div className="font-semibold text-emerald-800 dark:text-emerald-300">
                      Answer: {regionInfo.caseAnswer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 lg:grid-cols-12 items-start">
              {/* Endocrine Map */}
              <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-white p-3.5 space-y-2.5 dark:border-slate-800 dark:bg-slate-950">
                <div className="text-xs font-extrabold text-teal-800 dark:text-teal-300">
                  Human Endocrine Glands (Tap any gland or button)
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {(Object.keys(GLANDS) as GlandId[]).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setSelectedGland(g)}
                      className={`rounded-lg px-2 py-1.5 text-[11px] font-bold capitalize transition cursor-pointer ${
                        selectedGland === g
                          ? 'bg-teal-700 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
                <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-3 space-y-1.5 dark:border-teal-900 dark:bg-teal-950/30">
                  <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                    {glandInfo.name}
                  </div>
                  <div className="text-xs font-bold text-teal-800 dark:text-teal-300">
                    Hormone: {glandInfo.hormone}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                    {glandInfo.functionText}
                  </p>
                  <p className="text-[11px] font-bold text-rose-700 dark:text-rose-300">
                    Disorder / Exam Fact: {glandInfo.disorder}
                  </p>
                </div>
              </div>

              {/* Blood Glucose-Insulin Feedback Simulator */}
              <div className="lg:col-span-6 rounded-xl border border-emerald-200 bg-white p-4 space-y-3 dark:border-emerald-900/60 dark:bg-slate-950">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-extrabold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" /> Blood Glucose–Insulin Feedback Simulator
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Drag slider or spike glucose after a sweet meal to watch Feedback Mechanism!
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={triggerMealSpike}
                    className="rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-extrabold text-white hover:bg-rose-700 cursor-pointer"
                  >
                    Simulate Meal Spike (185 mg/dL)
                  </button>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span>Blood Sugar: <span className="font-mono text-base">{Math.round(bloodGlucose)} mg/dL</span></span>
                    <span className={bloodGlucose > 125 ? 'text-rose-600' : 'text-emerald-600'}>
                      {bloodGlucose > 125 ? 'High → Pancreas secretes INSULIN!' : 'Normal (Homeostasis)'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={70}
                    max={220}
                    value={Math.round(bloodGlucose)}
                    onChange={(e) => {
                      setFeedbackActive(false);
                      setBloodGlucose(Number(e.target.value));
                    }}
                    className="w-full accent-emerald-600 cursor-pointer"
                    aria-label="Blood glucose level"
                  />
                </div>

                {/* Live Insulin Response Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-bold text-indigo-800 dark:text-indigo-300">
                    <span>Pancreatic Insulin Secretion Rate</span>
                    <span className="font-mono">{insulinLevel}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-100 overflow-hidden dark:bg-slate-800">
                    <div
                      className="h-full bg-indigo-600 transition-all duration-150"
                      style={{ width: `${insulinLevel}%` }}
                    />
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 text-[11px] text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300">
                  <strong>NCERT Feedback Rule:</strong> High blood sugar stimulates Pancreas cells to release <strong>Insulin</strong> → body cells absorb glucose → blood sugar drops back to ~90 mg/dL → pancreas reduces insulin secretion!
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: AUXIN PHOTOTROPISM & GEOTROPISM */}
      {activeTab === 'tropism' && (
        <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400">
                Auxin Hormone Redistribution Lab (+ Phototropism in Shoot &amp; + Geotropism in Root)
              </div>
              <div className="text-[11px] text-slate-500">
                Move the Sun and observe Auxin migrating to the shaded side to elongate shaded shoot cells!
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'left' as const, label: '☀️ Sun Left' },
                { id: 'overhead' as const, label: '☀️ Overhead' },
                { id: 'right' as const, label: '☀️ Sun Right' },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleSunChange(s.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-extrabold transition cursor-pointer ${
                    sunPos === s.id
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 460 230" className="w-full max-w-xl mx-auto h-auto" aria-label="Auxin Phototropism and Geotropism">
            {/* Sun */}
            <circle
              cx={sunPos === 'left' ? 56 : sunPos === 'overhead' ? 230 : 404}
              cy={sunPos === 'overhead' ? 26 : 44}
              r="18"
              fill="#facc15"
              stroke="#ea580c"
              strokeWidth="2.5"
            />
            {sunPos !== 'overhead' && (
              <path
                d={sunPos === 'left' ? 'M82 54 L182 96' : 'M378 54 L278 96'}
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeDasharray="5 3"
              />
            )}

            {/* Soil Pot */}
            <rect x="0" y="160" width="460" height="70" fill="#fef3c7" opacity="0.4" />
            <line x1="0" y1="160" x2="460" y2="160" stroke="#92400e" strokeWidth="2.5" />

            {/* Shoot Bending */}
            <path
              d={`M222 160 Q222 104 ${222 + shootTipDx} 54 L${238 + shootTipDx} 54 Q238 104 238 160 Z`}
              fill="#22c55e"
              stroke="#15803d"
              strokeWidth="2.2"
            />
            {/* Shoot leaves */}
            <ellipse cx={216 + shootTipDx} cy="62" rx="14" ry="7" fill="#4ade80" stroke="#15803d" strokeWidth="1.6" />
            <ellipse cx={244 + shootTipDx} cy="62" rx="14" ry="7" fill="#4ade80" stroke="#15803d" strokeWidth="1.6" />

            {/* Auxin dots accumulating on SHADED side */}
            {[0, 1, 2, 3, 4].map((i) => {
              const shadedShift =
                sunPos === 'right' ? -8 : sunPos === 'left' ? 8 : (i % 2 === 0 ? -4 : 4);
              const cy = 64 + i * 16;
              const progressFactor = 1 - i / 5;
              const cx = 230 + shootTipDx * progressFactor + shadedShift;
              return (
                <circle key={i} cx={cx} cy={cy} r="3.8" fill="#dc2626" stroke="#ffffff" strokeWidth="1" />
              );
            })}

            {/* Positive Geotropism Root */}
            <path d="M230 160 Q228 190 230 222" fill="none" stroke="#b45309" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M230 182 L208 202 M230 194 L252 212" fill="none" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />

            <text x="230" y="216" textAnchor="end" dx="-34" fontSize="8.8" fontWeight="800" fill="#78350f">
              Root: + Geotropism ↓
            </text>
            <text x="12" y="148" fontSize="8.8" fontWeight="800" className="fill-emerald-800 dark:fill-emerald-300">
              Shoot: + Phototropism (Bends toward light)
            </text>
            <text x="12" y="132" fontSize="8.2" fontWeight="800" fill="#dc2626">
              ● Red Dots = Auxin on SHADED side (elongates cells faster!)
            </text>
          </svg>
        </div>
      )}
    </div>
  );
}
