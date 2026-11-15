import { useEffect, useRef, useState } from 'react';
import {
  Activity,
  Droplets,
  Eye,
  EyeOff,
  Flame,
  Heart,
  Pause,
  Play,
  Wind,
} from 'lucide-react';

type HeartPartId = 'ra' | 'rv' | 'la' | 'lv' | 'valves' | 'pulmonary';

interface HeartPartInfo {
  id: HeartPartId;
  title: string;
  bloodType: string;
  detail: string;
  cbseTip: string;
}

const HEART_PARTS: Record<HeartPartId, HeartPartInfo> = {
  ra: {
    id: 'ra',
    title: 'Right Atrium (RA)',
    bloodType: 'Deoxygenated (Blue)',
    detail:
      'Receives deoxygenated blood from the entire body via the Superior & Inferior Vena Cava as it relaxes, then contracts to push blood through the Tricuspid Valve into the Right Ventricle.',
    cbseTip: 'Atria have thinner walls than ventricles because they only pump blood down into the adjacent ventricles.',
  },
  rv: {
    id: 'rv',
    title: 'Right Ventricle (RV)',
    bloodType: 'Deoxygenated (Blue)',
    detail:
      'Pumps deoxygenated blood through the Pulmonary Artery to the nearby Lungs for oxygenation.',
    cbseTip: 'Wall is thinner than Left Ventricle because lungs lie close to the heart (low pressure needed).',
  },
  la: {
    id: 'la',
    title: 'Left Atrium (LA)',
    bloodType: 'Oxygenated (Red)',
    detail:
      'Receives freshly oxygenated blood from the lungs via the Pulmonary Vein while relaxed, then contracts to send it through the Bicuspid (Mitral) Valve into the Left Ventricle.',
    cbseTip: 'Mnemonic: Pulmonary Vein = ONLY vein carrying oxygenated blood!',
  },
  lv: {
    id: 'lv',
    title: 'Left Ventricle (LV)',
    bloodType: 'Oxygenated (Red)',
    detail:
      'Pumps oxygen-rich blood under high pressure into the Aorta to supply the brain, muscles, kidneys, and every organ in the body.',
    cbseTip: 'CBSE Favourite: Left Ventricle has the THICKEST muscular wall (~3× thicker than RV) to pump blood across the whole body!',
  },
  valves: {
    id: 'valves',
    title: 'Heart Valves & Septum',
    bloodType: 'One-Way Mechanical Gatekeepers',
    detail:
      'Tricuspid (RA→RV), Bicuspid/Mitral (LA→LV), and Semilunar valves ensure blood NEVER flows backward during ventricular contraction. The muscular Septum prevents oxygenated and deoxygenated blood from mixing.',
    cbseTip: 'Complete separation gives high O₂ supply to warm-blooded birds & mammals to keep body temperature steady.',
  },
  pulmonary: {
    id: 'pulmonary',
    title: 'Double Circulation (Pulmonary + Systemic)',
    bloodType: '2 Passes per Full Cycle',
    detail:
      'Blood passes through the heart TWICE in one complete body circuit: (1) Pulmonary Circulation: Heart → Lungs → Heart; (2) Systemic Circulation: Heart → Body → Heart.',
    cbseTip: 'Contrast with Fishes (2-chambered heart): blood passes through heart only ONCE (Single Circulation).',
  },
};

function pointOnPath(pts: [number, number][], t: number): [number, number] {
  const clamped = ((t % 1) + 1) % 1;
  const totalSegs = pts.length - 1;
  const raw = clamped * totalSegs;
  const idx = Math.min(totalSegs - 1, Math.floor(raw));
  const frac = raw - idx;
  const [x1, y1] = pts[idx];
  const [x2, y2] = pts[idx + 1];
  return [x1 + (x2 - x1) * frac, y1 + (y2 - y1) * frac];
}

const DEOXY_PATH: [number, number][] = [
  [55, 255],
  [55, 195],
  [92, 130],
  [124, 128],
  [128, 178],
  [158, 178],
  [158, 86],
  [158, 42],
  [210, 42],
];

const OXY_PATH: [number, number][] = [
  [210, 42],
  [262, 42],
  [262, 126],
  [254, 134],
  [254, 184],
  [222, 184],
  [220, 80],
  [355, 132],
  [355, 255],
];

export function BioLifeProcessesAnimatorLab() {
  const [activeTab, setActiveTab] = useState<'heart' | 'nephron' | 'respiration'>('heart');

  // Shared animation tick via requestAnimationFrame
  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState<0.6 | 1 | 1.8>(1);
  const [phase, setPhase] = useState(0);
  const rafRef = useRef<number | null>(null);

  // Heart state
  const [hideHeartLabels, setHideHeartLabels] = useState(false);
  const [selectedHeartPart, setSelectedHeartPart] = useState<HeartPartId>('lv');

  // Nephron state
  const [hydration, setHydration] = useState(55); // 0 = Dehydrated, 100 = Well Hydrated

  // Tab 3 state
  const [respSubMode, setRespSubMode] = useState<'glucose' | 'stomata'>('glucose');
  const [glucosePath, setGlucosePath] = useState<'aerobic' | 'muscle' | 'yeast'>('aerobic');
  const [stomataDay, setStomataDay] = useState(true);

  useEffect(() => {
    if (!playing) return;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      setPhase((p) => p + dt * speed * 1.45);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [playing, speed]);

  // Heart rhythmic pulse factors
  const atrialPulse = 1 + 0.045 * Math.max(0, Math.sin(phase * 3.2));
  const ventPulse = 1 + 0.065 * Math.max(0, Math.sin(phase * 3.2 - 1.15));
  const avValveOpen = Math.sin(phase * 3.2) > 0;
  const semiValveOpen = Math.sin(phase * 3.2 - 1.15) > 0;

  // Hydration calculations for Nephron
  const waterReabsorbPct = (99.4 - (hydration / 100) * 4.6).toFixed(1);
  const urineVolumeL = (0.6 + (hydration / 100) * 1.8).toFixed(1);
  const urineColor =
    hydration < 30 ? '#b45309' : hydration < 70 ? '#eab308' : '#fef08a';

  const heartInfo = HEART_PARTS[selectedHeartPart];

  return (
    <div className="no-word-lookup select-none rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50/60 via-white to-sky-50/40 p-4 sm:p-5 space-y-4 dark:border-teal-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      {/* Lab Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-teal-100 pb-3.5 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-white shadow-xs">
            <Activity className="h-5 w-5" />
          </span>
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
              Life Processes Interactive Animator Lab (Ch 5)
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Live beating heart &amp; double circulation, nephron filtration, glucose pathways &amp; stomata turgor
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-teal-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-teal-800 cursor-pointer"
          >
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {playing ? 'Pause' : 'Play'}
          </button>
          {([0.6, 1, 1.8] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSpeed(s)}
              className={`rounded-lg px-2 py-1.5 font-mono text-[11px] font-bold transition cursor-pointer ${
                speed === s
                  ? 'bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950'
                  : 'bg-white border border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
              }`}
            >
              {s}×
            </button>
          ))}
        </div>
      </div>

      {/* Main Lab Tabs */}
      <div className="flex flex-wrap gap-1.5">
        {[
          { id: 'heart' as const, icon: Heart, label: '1. Beating Heart & Double Circulation' },
          { id: 'nephron' as const, icon: Droplets, label: '2. Nephron Ultrafiltration & Reabsorption' },
          { id: 'respiration' as const, icon: Wind, label: '3. Glucose 3-Pathways & Stomatal Turgor' },
        ].map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-extrabold transition cursor-pointer ${
                active
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-teal-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* TAB 1: HEART */}
      {activeTab === 'heart' && (
        <div className="grid gap-4 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-3 text-[11px] font-bold">
                <span className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-600 inline-block" /> Deoxygenated (CO₂-rich)
                </span>
                <span className="inline-flex items-center gap-1 text-rose-700 dark:text-rose-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-600 inline-block" /> Oxygenated (O₂-rich)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setHideHeartLabels((h) => !h)}
                className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-extrabold cursor-pointer ${
                  hideHeartLabels
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200'
                }`}
              >
                {hideHeartLabels ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                {hideHeartLabels ? 'Reveal Labels' : 'Self-Test: Hide Labels'}
              </button>
            </div>

            <svg viewBox="0 0 420 295" className="w-full h-auto" aria-label="Animated Double Circulation Heart">
              {/* Lungs Capillaries (Top) */}
              <rect x="148" y="12" width="124" height="52" rx="16" fill="#fce7f3" stroke="#db2777" strokeWidth="2.2" />
              <text x="210" y="31" textAnchor="middle" fontSize="10" fontWeight="800" fill="#9d174d">
                {hideHeartLabels ? '[ A ] Capillaries' : 'LUNGS (O₂ Picked Up)'}
              </text>
              <text x="210" y="45" textAnchor="middle" fontSize="8.2" fontWeight="700" fill="#be185d">
                CO₂ out • O₂ binds Haemoglobin
              </text>

              {/* Body Capillaries (Bottom) */}
              <rect x="42" y="246" width="336" height="40" rx="12" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
              <text x="210" y="264" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f172a">
                {hideHeartLabels ? '[ B ] Tissues' : 'BODY ORGANS & CELLS (O₂ Delivered, CO₂ Collected)'}
              </text>
              <text x="210" y="278" textAnchor="middle" fontSize="8" fontWeight="700" fill="#475569">
                Double Circulation: Blood passes through Heart TWICE per cycle
              </text>

              {/* Vessels */}
              {/* Vena Cava (Body -> RA) */}
              <path d="M55 246 L55 128 L108 128" fill="none" stroke="#2563eb" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
              {/* Pulmonary Artery (RV -> Lungs) */}
              <path d="M158 164 L158 42 L148 42" fill="none" stroke="#3b82f6" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
              {/* Pulmonary Vein (Lungs -> LA) */}
              <path d="M272 42 L262 42 L262 128" fill="none" stroke="#ef4444" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
              {/* Aorta (LV -> Body) */}
              <path d="M220 162 L220 80 L355 80 L355 246" fill="none" stroke="#dc2626" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />

              {/* Heart Chambers Group */}
              <g transform={`translate(190, 162) scale(${ventPulse}) translate(-190, -162)`}>
                {/* Muscular Outer Wall (notice thick Left Ventricle wall on right side of screen) */}
                <path
                  d="M106 108 L274 108 L268 208 C258 225, 224 232, 190 232 C152 232, 114 218, 108 198 Z"
                  fill="#ffe4e6"
                  stroke="#9f1239"
                  strokeWidth="3"
                />
                {/* Thick Muscular LV Outer Cushion */}
                <path
                  d="M254 150 L269 150 L264 206 C256 222, 224 229, 194 229 L194 212 C226 212, 246 204, 252 192 Z"
                  fill="#be1239"
                  opacity="0.32"
                />
              </g>

              {/* Atria (top half) */}
              <g transform={`translate(190, 128) scale(${atrialPulse}) translate(-190, -128)`}>
                <rect
                  x="110"
                  y="110"
                  width="76"
                  height="38"
                  rx="8"
                  fill="#93c5fd"
                  stroke="#1d4ed8"
                  strokeWidth="2.2"
                  className="cursor-pointer"
                  onClick={() => setSelectedHeartPart('ra')}
                />
                <rect
                  x="194"
                  y="110"
                  width="76"
                  height="38"
                  rx="8"
                  fill="#fca5a5"
                  stroke="#b91c1c"
                  strokeWidth="2.2"
                  className="cursor-pointer"
                  onClick={() => setSelectedHeartPart('la')}
                />
              </g>

              {/* Ventricles (bottom half) */}
              <g transform={`translate(190, 180) scale(${ventPulse}) translate(-190, -180)`}>
                <rect
                  x="112"
                  y="156"
                  width="74"
                  height="52"
                  rx="10"
                  fill="#60a5fa"
                  stroke="#1e40af"
                  strokeWidth="2.2"
                  className="cursor-pointer"
                  onClick={() => setSelectedHeartPart('rv')}
                />
                <rect
                  x="194"
                  y="156"
                  width="70"
                  height="52"
                  rx="10"
                  fill="#f87171"
                  stroke="#991b1b"
                  strokeWidth="4.2"
                  className="cursor-pointer"
                  onClick={() => setSelectedHeartPart('lv')}
                />
              </g>

              {/* Muscular Septum */}
              <rect
                x="186"
                y="110"
                width="8"
                height="110"
                rx="3"
                fill="#881337"
                className="cursor-pointer"
                onClick={() => setSelectedHeartPart('valves')}
              />

              {/* Valve Indicators */}
              <line
                x1="126"
                y1="152"
                x2={avValveOpen ? '138' : '152'}
                y2={avValveOpen ? '160' : '152'}
                stroke="#facc15"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <line
                x1="242"
                y1="152"
                x2={avValveOpen ? '230' : '216'}
                y2={avValveOpen ? '160' : '152'}
                stroke="#facc15"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle
                cx="158"
                cy="102"
                r={semiValveOpen ? 4.5 : 2.5}
                fill="#fde047"
                stroke="#854d0e"
                strokeWidth="1.5"
              />
              <circle
                cx="220"
                cy="102"
                r={semiValveOpen ? 4.5 : 2.5}
                fill="#fde047"
                stroke="#854d0e"
                strokeWidth="1.5"
              />

              {/* Animated Blue Deoxygenated Corpuscles */}
              {[0, 0.17, 0.34, 0.51, 0.68, 0.85].map((off) => {
                const [cx, cy] = pointOnPath(DEOXY_PATH, phase * 0.18 + off);
                return (
                  <circle
                    key={`d-${off}`}
                    cx={cx}
                    cy={cy}
                    r="4.2"
                    fill="#1d4ed8"
                    stroke="#ffffff"
                    strokeWidth="1.3"
                  />
                );
              })}

              {/* Animated Red Oxygenated Corpuscles */}
              {[0, 0.17, 0.34, 0.51, 0.68, 0.85].map((off) => {
                const [cx, cy] = pointOnPath(OXY_PATH, phase * 0.18 + off);
                return (
                  <circle
                    key={`o-${off}`}
                    cx={cx}
                    cy={cy}
                    r="4.2"
                    fill="#dc2626"
                    stroke="#ffffff"
                    strokeWidth="1.3"
                  />
                );
              })}

              {/* Chamber Texts */}
              <text x="148" y="133" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f172a" className="pointer-events-none">
                {hideHeartLabels ? '1' : 'RA'}
              </text>
              <text x="232" y="133" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f172a" className="pointer-events-none">
                {hideHeartLabels ? '2' : 'LA'}
              </text>
              <text x="149" y="186" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f172a" className="pointer-events-none">
                {hideHeartLabels ? '3' : 'RV'}
              </text>
              <text x="229" y="182" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff" className="pointer-events-none">
                {hideHeartLabels ? '4' : 'LV'}
              </text>
              <text x="229" y="195" textAnchor="middle" fontSize="7.4" fontWeight="800" fill="#fef08a" className="pointer-events-none">
                {hideHeartLabels ? 'Thick?' : 'Thick Wall'}
              </text>

              {/* Vessel Labels */}
              <text x="54" y="114" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-blue-800 dark:fill-blue-300">
                {hideHeartLabels ? '[ V1 ]' : 'Vena Cava'}
              </text>
              <text x="108" y="72" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-blue-800 dark:fill-blue-300">
                {hideHeartLabels ? '[ V2 ]' : 'Pulmonary Artery'}
              </text>
              <text x="312" y="34" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-rose-700 dark:fill-rose-300">
                {hideHeartLabels ? '[ V3 ]' : 'Pulmonary Vein'}
              </text>
              <text x="378" y="154" textAnchor="middle" fontSize="8.8" fontWeight="800" className="fill-rose-700 dark:fill-rose-300">
                {hideHeartLabels ? '[ V4 ]' : 'Aorta'}
              </text>
            </svg>
          </div>

          {/* Clickable Inspector */}
          <div className="lg:col-span-5 space-y-3">
            <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-2.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                Tap Any Chamber or Concept to Inspect
              </div>
              <div className="flex flex-wrap gap-1.5">
                {(Object.keys(HEART_PARTS) as HeartPartId[]).map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setSelectedHeartPart(id)}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
                      selectedHeartPart === id
                        ? 'bg-teal-700 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                    }`}
                  >
                    {HEART_PARTS[id].title.split(' (')[0]}
                  </button>
                ))}
              </div>

              <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-3 space-y-1.5 dark:border-teal-900 dark:bg-teal-950/30">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                    {heartInfo.title}
                  </span>
                  <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-extrabold text-teal-800 border border-teal-200 dark:bg-slate-900 dark:border-teal-800 dark:text-teal-300">
                    {heartInfo.bloodType}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-200">
                  {heartInfo.detail}
                </p>
                <div className="rounded-lg bg-white/90 px-2.5 py-1.5 text-[11px] font-semibold text-amber-900 border border-amber-200 dark:bg-slate-900 dark:border-amber-900/60 dark:text-amber-300">
                  <strong>Board Trap:</strong> {heartInfo.cbseTip}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: NEPHRON */}
      {activeTab === 'nephron' && (
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-3 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xs font-extrabold text-teal-800 dark:text-teal-300">
                  Hydration Level Slider (Watch Selective Water Reabsorption Respond!)
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Initial filtrate = <strong>180 L/day</strong> • Final urine excreted ={' '}
                  <strong className="text-amber-700 dark:text-amber-300">{urineVolumeL} L/day</strong> (
                  <strong>{waterReabsorbPct}% water reabsorbed</strong>)
                </div>
              </div>

              <div className="flex items-center gap-2 min-w-[230px]">
                <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400">Dehydrated</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={hydration}
                  onChange={(e) => setHydration(Number(e.target.value))}
                  className="flex-1 accent-teal-600 cursor-pointer"
                  aria-label="Hydration level"
                />
                <span className="text-[11px] font-bold text-sky-700 dark:text-sky-400">Well Hydrated</span>
              </div>
            </div>

            <svg viewBox="0 0 540 230" className="w-full h-auto" aria-label="Animated Nephron Ultrafiltration and Reabsorption">
              {/* Afferent (wider) -> Glomerulus -> Efferent (narrower) */}
              <path d="M24 58 L98 58" stroke="#dc2626" strokeWidth="12" strokeLinecap="round" />
              <path d="M98 58 Q116 40 132 58 Q116 76 98 58 Z" fill="#ef4444" opacity="0.85" />
              <path d="M132 58 L200 58 Q232 58 232 104 L232 184 L388 184" fill="none" stroke="#e11d48" strokeWidth="5.5" />

              {/* Bowman's Capsule + Coiled Tubule + Collecting Duct */}
              <path
                d="M116 26 C80 26, 76 90, 118 92 L182 92 Q204 92 204 114 L204 142 Q204 162 248 162 L322 162 Q352 162 352 130 L352 94 L424 94 L424 198"
                fill="none"
                stroke="#facc15"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.45"
              />
              <path
                d="M116 26 C80 26, 76 90, 118 92 L182 92 Q204 92 204 114 L204 142 Q204 162 248 162 L322 162 Q352 162 352 130 L352 94 L424 94 L424 198"
                fill="none"
                stroke="#ca8a04"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Collecting duct urine fill */}
              <rect x="415" y="110" width="18" height="86" rx="5" fill={urineColor} opacity="0.8" />

              {/* Large RBCs bouncing back at Glomerulus */}
              {[0, 0.35, 0.7].map((off) => {
                const t = (phase * 0.25 + off) % 1;
                const x = 32 + t * 320;
                const y = x < 135 ? 58 + Math.sin(t * 18) * 3 : x < 232 ? 58 : 184;
                const adjX = x < 232 ? x : 232 + (x - 232);
                return (
                  <g key={`rbc-${off}`}>
                    <circle cx={adjX} cy={y} r="5.5" fill="#991b1b" stroke="#fecaca" strokeWidth="1.2" />
                  </g>
                );
              })}

              {/* Small Filtrate particles entering tubule: Glucose (green), Water (blue), Urea (brown) */}
              {[0, 0.28, 0.56, 0.82].map((off) => {
                const t = (phase * 0.22 + off) % 1;
                // Glucose gets reabsorbed back to blood at x=215..245
                const gx = 122 + t * 130;
                const gy = gx < 204 ? 92 : 92 + (gx - 204) * 1.4;
                return (
                  <circle key={`glu-${off}`} cx={gx} cy={Math.min(182, gy)} r="3.6" fill="#16a34a" stroke="#ffffff" strokeWidth="1" />
                );
              })}

              {/* Urea continuing all the way to Collecting Duct */}
              {[0, 0.22, 0.44, 0.66, 0.88].map((off) => {
                const ureaPts: [number, number][] = [
                  [118, 74],
                  [184, 92],
                  [204, 142],
                  [260, 162],
                  [352, 130],
                  [352, 94],
                  [424, 94],
                  [424, 196],
                ];
                const [ux, uy] = pointOnPath(ureaPts, phase * 0.16 + off);
                return <circle key={`ur-${off}`} cx={ux} cy={uy} r="3.8" fill="#78350f" stroke="#fef3c7" strokeWidth="1" />;
              })}

              {/* Reabsorption arrows (Glucose + Water returning to capillary) */}
              <path d="M224 148 L224 176" stroke="#16a34a" strokeWidth="2.4" />
              <polygon points="224,180 220,173 228,173" fill="#16a34a" />
              <path d="M292 162 L292 180" stroke="#0284c7" strokeWidth={hydration < 35 ? 3.8 : 2} />
              <polygon points="292,184 287,176 297,176" fill="#0284c7" />

              {/* Annotations */}
              <text x="58" y="38" textAnchor="middle" fontSize="8.8" fontWeight="800" className="fill-rose-700 dark:fill-rose-300">
                Afferent (Wider)
              </text>
              <text x="115" y="16" textAnchor="middle" fontSize="9.2" fontWeight="800" className="fill-amber-900 dark:fill-amber-300">
                Glomerulus + Bowman&apos;s Capsule
              </text>
              <text x="115" y="114" textAnchor="middle" fontSize="8.2" fontWeight="700" className="fill-slate-700 dark:fill-slate-300">
                RBCs &amp; Proteins bounce back!
              </text>
              <text x="275" y="136" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emerald-800 dark:fill-emerald-300">
                Selective Reabsorption →
              </text>
              <text x="275" y="148" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-slate-600 dark:fill-slate-400">
                100% Glucose + Amino Acids + {waterReabsorbPct}% Water
              </text>
              <text x="480" y="128" textAnchor="middle" fontSize="9.2" fontWeight="800" className="fill-amber-900 dark:fill-amber-300">
                Collecting Duct
              </text>
              <text x="480" y="142" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-slate-600 dark:fill-slate-400">
                Urea + Excess Water
              </text>
              <text x="480" y="155" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-slate-600 dark:fill-slate-400">
                → Ureter → Bladder
              </text>
            </svg>

            <div className="grid gap-2 sm:grid-cols-3 text-xs">
              <div className="rounded-lg bg-rose-50 border border-rose-200 px-3 py-2 dark:bg-rose-950/30 dark:border-rose-900">
                <strong className="text-rose-800 dark:text-rose-300">1. Ultrafiltration:</strong> High pressure in glomerulus filters water, glucose, amino acids, salts &amp; urea — NOT RBCs/proteins.
              </div>
              <div className="rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-2 dark:bg-emerald-950/30 dark:border-emerald-900">
                <strong className="text-emerald-800 dark:text-emerald-300">2. Selective Reabsorption:</strong> All glucose &amp; amino acids + needed water return to capillary. (Note: Artificial dialysis skips this!)
              </div>
              <div className="rounded-lg bg-amber-50 border border-amber-200 px-3 py-2 dark:bg-amber-950/30 dark:border-amber-900">
                <strong className="text-amber-800 dark:text-amber-300">3. Urine Output:</strong> {hydration < 30 ? 'Concentrated dark urine — conserving water!' : hydration > 70 ? 'Dilute pale urine — excess water excreted.' : 'Balanced normal urine output (~1.5 L/day).'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: GLUCOSE 3 PATHWAYS + STOMATA */}
      {activeTab === 'respiration' && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setRespSubMode('glucose')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-extrabold cursor-pointer ${
                respSubMode === 'glucose'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
              }`}
            >
              <Flame className="h-3.5 w-3.5" /> Mode A: Glucose 3-Pathway Switcher
            </button>
            <button
              type="button"
              onClick={() => setRespSubMode('stomata')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-extrabold cursor-pointer ${
                respSubMode === 'stomata'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
              }`}
            >
              <Wind className="h-3.5 w-3.5" /> Mode B: Stomatal Guard-Cell Turgor Animator
            </button>
          </div>

          {respSubMode === 'glucose' ? (
            <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-4 dark:border-slate-800 dark:bg-slate-950">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'aerobic' as const, label: '1. Aerobic (Mitochondria — 38 ATP)' },
                  { id: 'muscle' as const, label: '2. Muscle Lack of O₂ (Lactic Acid 3C — Cramps)' },
                  { id: 'yeast' as const, label: '3. Yeast Anaerobic (Ethanol 2C + CO₂)' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setGlucosePath(opt.id)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                      glucosePath === opt.id
                        ? 'bg-teal-700 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <svg viewBox="0 0 520 175" className="w-full h-auto" aria-label="Glucose 3-Pathway Breakdown">
                {/* Step 1: Glucose (6C) */}
                <rect x="12" y="50" width="112" height="70" rx="12" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.2" />
                <text x="68" y="75" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0c4a6e">Glucose (6C)</text>
                <text x="68" y="92" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#0369a1">C₆H₁₂O₆</text>
                <text x="68" y="108" textAnchor="middle" fontSize="8" fill="#075985">6-Carbon Molecule</text>

                {/* Arrow 1: Cytoplasm */}
                <line x1="126" y1="85" x2="184" y2="85" stroke="#0f766e" strokeWidth="3" />
                <polygon points="190,85 180,79 180,91" fill="#0f766e" />
                <text x="157" y="72" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-teal-700 dark:fill-teal-300">
                  In Cytoplasm
                </text>
                <text x="157" y="102" textAnchor="middle" fontSize="7.8" className="fill-slate-500">
                  (Common Step!)
                </text>

                {/* Step 2: Pyruvate (3C) */}
                <rect x="192" y="50" width="118" height="70" rx="12" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2.2" />
                <text x="251" y="74" textAnchor="middle" fontSize="11" fontWeight="800" fill="#713f12">2 × Pyruvate (3C)</text>
                <text x="251" y="91" textAnchor="middle" fontSize="9" fontWeight="700" fill="#854d0e">+ Small Energy</text>
                <text x="251" y="107" textAnchor="middle" fontSize="8" fill="#a16207">3-Carbon Molecule</text>

                {/* Animated travelling dot */}
                <circle
                  cx={128 + ((phase * 0.45) % 1) * 235}
                  cy="85"
                  r="4.5"
                  fill={glucosePath === 'aerobic' ? '#059669' : glucosePath === 'muscle' ? '#ea580c' : '#7c3aed'}
                />

                {/* Arrow 2 */}
                <line x1="312" y1="85" x2="368" y2="85" stroke="#0f766e" strokeWidth="3" />
                <polygon points="374,85 364,79 364,91" fill="#0f766e" />
                <text x="342" y="64" textAnchor="middle" fontSize="8.2" fontWeight="800" className="fill-slate-800 dark:fill-slate-200">
                  {glucosePath === 'aerobic' ? 'Presence of O₂' : glucosePath === 'muscle' ? 'Lack of O₂' : 'Absence of O₂'}
                </text>
                <text x="342" y="104" textAnchor="middle" fontSize="7.8" className="fill-slate-500">
                  {glucosePath === 'aerobic' ? '(Mitochondria)' : glucosePath === 'muscle' ? '(Muscle cells)' : '(Yeast)'}
                </text>

                {/* Step 3: End Products */}
                <rect
                  x="376"
                  y="40"
                  width="134"
                  height="90"
                  rx="14"
                  fill={glucosePath === 'aerobic' ? '#dcfce7' : glucosePath === 'muscle' ? '#ffedd5' : '#f3e8ff'}
                  stroke={glucosePath === 'aerobic' ? '#16a34a' : glucosePath === 'muscle' ? '#ea580c' : '#7c3aed'}
                  strokeWidth="2.4"
                />
                <text x="443" y="66" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#0f172a">
                  {glucosePath === 'aerobic'
                    ? '6CO₂ + 6H₂O'
                    : glucosePath === 'muscle'
                    ? 'Lactic Acid (3C)'
                    : 'Ethanol (2C) + CO₂'}
                </text>
                <text x="443" y="88" textAnchor="middle" fontSize="12" fontWeight="900" fill={glucosePath === 'aerobic' ? '#15803d' : '#b45309'}>
                  {glucosePath === 'aerobic' ? '⚡ 38 ATP (High!)' : '⚡ 2 ATP (Low)'}
                </text>
                <text x="443" y="110" textAnchor="middle" fontSize="8.2" fontWeight="700" fill="#334155">
                  {glucosePath === 'aerobic'
                    ? 'Complete breakdown'
                    : glucosePath === 'muscle'
                    ? 'Builds up → Muscle Cramps!'
                    : 'Fermentation (Bread/Wine)'}
                </text>
              </svg>
            </div>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 dark:border-slate-800 dark:bg-slate-950">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStomataDay(true)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-extrabold cursor-pointer ${
                      stomataDay
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }`}
                  >
                    Daytime (H₂O Enters → Turgid → OPEN)
                  </button>
                  <button
                    type="button"
                    onClick={() => setStomataDay(false)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-extrabold cursor-pointer ${
                      !stomataDay
                        ? 'bg-slate-800 text-white'
                        : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }`}
                  >
                    Night / Drought (H₂O Exits → Flaccid → CLOSED)
                  </button>
                </div>
              </div>

              <svg viewBox="0 0 420 190" className="w-full max-w-lg mx-auto h-auto" aria-label="Stomatal Guard Cell Animator">
                {/* Epidermal cells */}
                <rect x="20" y="14" width="380" height="162" rx="18" fill="#ecfdf5" stroke="#86efac" strokeWidth="2" />

                {/* Left & Right Guard Cells */}
                <path
                  d={
                    stomataDay
                      ? 'M208 42 C152 46, 146 144, 208 148 C184 128, 184 62, 208 42 Z'
                      : 'M208 44 C178 52, 178 138, 208 146 C206 122, 206 68, 208 44 Z'
                  }
                  fill="#4ade80"
                  stroke="#15803d"
                  strokeWidth="2.5"
                />
                <path
                  d={
                    stomataDay
                      ? 'M212 42 C268 46, 274 144, 212 148 C236 128, 236 62, 212 42 Z'
                      : 'M212 44 C242 52, 242 138, 212 146 C214 122, 214 68, 212 44 Z'
                  }
                  fill="#4ade80"
                  stroke="#15803d"
                  strokeWidth="2.5"
                />

                {/* Chloroplasts inside guard cells */}
                {[68, 95, 120].map((y) => (
                  <g key={y}>
                    <circle cx={stomataDay ? 174 : 190} cy={y} r="4" fill="#166534" />
                    <circle cx={stomataDay ? 246 : 230} cy={y} r="4" fill="#166534" />
                  </g>
                ))}

                {/* Animated H2O movement dots */}
                {[0, 0.35, 0.7].map((off) => {
                  const t = (phase * 0.4 + off) % 1;
                  const dir = stomataDay ? t : 1 - t;
                  const lx = 112 + dir * 56;
                  const rx = 308 - dir * 56;
                  return (
                    <g key={`h2o-${off}`}>
                      <circle cx={lx} cy={95} r="4.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
                      <circle cx={rx} cy={95} r="4.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
                    </g>
                  );
                })}

                {stomataDay ? (
                  <g>
                    <text x="210" y="94" textAnchor="middle" fontSize="9.5" fontWeight="900" fill="#065f46">OPEN</text>
                    <text x="210" y="106" textAnchor="middle" fontSize="8" fontWeight="800" fill="#047857">CO₂ in • O₂ out</text>
                  </g>
                ) : (
                  <text x="210" y="28" textAnchor="middle" fontSize="9.5" fontWeight="900" fill="#991b1b">
                    STOMATAL PORE SEALED (Stops Water Loss)
                  </text>
                )}

                <text x="72" y="98" textAnchor="middle" fontSize="8.8" fontWeight="800" fill="#0369a1">
                  {stomataDay ? 'H₂O → Enters' : '← H₂O Exits'}
                </text>
                <text x="348" y="98" textAnchor="middle" fontSize="8.8" fontWeight="800" fill="#0369a1">
                  {stomataDay ? 'Enters ← H₂O' : 'H₂O Exits →'}
                </text>
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
