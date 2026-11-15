import { useEffect, useState } from 'react';
import {
  AlertTriangle,
  Flame,
  Gauge,
  Pause,
  Play,
  RotateCcw,
  ShieldAlert,
  Zap,
} from 'lucide-react';

type CircuitTab = 'ohms-drift' | 'network-fuse';

interface WireMaterial {
  id: string;
  name: string;
  rhoDisplay: string;
  baseOhm: number;
  wireColor: string;
  useNote: string;
}

const MATERIALS: WireMaterial[] = [
  {
    id: 'silver',
    name: 'Silver',
    rhoDisplay: '1.60 × 10⁻⁸ Ω·m',
    baseOhm: 1.6,
    wireColor: '#94a3b8',
    useNote: 'Best metallic conductor',
  },
  {
    id: 'copper',
    name: 'Copper',
    rhoDisplay: '1.62 × 10⁻⁸ Ω·m',
    baseOhm: 1.62,
    wireColor: '#ea580c',
    useNote: 'Household & transmission wiring',
  },
  {
    id: 'aluminium',
    name: 'Aluminium',
    rhoDisplay: '2.63 × 10⁻⁸ Ω·m',
    baseOhm: 2.63,
    wireColor: '#64748b',
    useNote: 'Lightweight overhead cables',
  },
  {
    id: 'tungsten',
    name: 'Tungsten',
    rhoDisplay: '5.20 × 10⁻⁸ Ω·m',
    baseOhm: 5.2,
    wireColor: '#475569',
    useNote: 'Bulb filament (m.p. 3380 °C)',
  },
  {
    id: 'nichrome',
    name: 'Nichrome (Alloy)',
    rhoDisplay: '1.10 × 10⁻⁶ Ω·m',
    baseOhm: 15.0,
    wireColor: '#b45309',
    useNote: 'Heater/iron coil (high ρ, no oxidation)',
  },
];

/** Returns (x, y) along a rectangular loop: (left,top)->(right,top)->(right,bot)->(left,bot)->back. */
function rectLoopPoint(
  t: number,
  left: number,
  top: number,
  right: number,
  bot: number
): { x: number; y: number } {
  const w = right - left;
  const h = bot - top;
  const perim = 2 * (w + h);
  let d = (((t % 1) + 1) % 1) * perim;
  if (d <= w) return { x: left + d, y: top };
  d -= w;
  if (d <= h) return { x: right, y: top + d };
  d -= h;
  if (d <= w) return { x: right - d, y: bot };
  d -= w;
  return { x: left, y: bot - d };
}

export function PhysicsCircuitSimulatorLab() {
  const [tab, setTab] = useState<CircuitTab>('ohms-drift');
  const [animRunning, setAnimRunning] = useState(true);
  const [flowClock, setFlowClock] = useState(0);

  // Tab 1 state
  const [voltage, setVoltage] = useState(6.0); // 1.5 to 12.0
  const [materialId, setMaterialId] = useState('copper');
  const [lengthMult, setLengthMult] = useState(1.0); // 1.0 to 3.0
  const [areaMult, setAreaMult] = useState(1.0); // 0.5 to 2.0
  const [stretchDouble, setStretchDouble] = useState(false);

  // Tab 2 state
  const [mode, setMode] = useState<'series' | 'parallel'>('parallel');
  const [r1, setR1] = useState(10);
  const [r2, setR2] = useState(15);
  const [r3, setR3] = useState(30);
  const [supplyV, setSupplyV] = useState(30); // 6 to 220
  const [fuseRating, setFuseRating] = useState<5 | 15>(5);
  const [fuseBlown, setFuseBlown] = useState(false);

  // Tab 1 computations
  const mat = MATERIALS.find((m) => m.id === materialId) ?? MATERIALS[1];
  const effL = stretchDouble ? lengthMult * 2 : lengthMult;
  const effA = stretchDouble ? areaMult * 0.5 : areaMult;
  const rUnstretched = (mat.baseOhm * lengthMult) / areaMult;
  const rTotal1 = (mat.baseOhm * effL) / effA;
  const current1 = voltage / rTotal1;

  // Tab 2 computations
  const rEq2 =
    mode === 'series'
      ? r1 + r2 + r3
      : 1 / (1 / r1 + 1 / r2 + 1 / r3);
  const theoreticalI = supplyV / rEq2;

  useEffect(() => {
    if (theoreticalI > fuseRating) {
      setFuseBlown(true);
    }
  }, [theoreticalI, fuseRating]);

  const activeI2 = fuseBlown ? 0 : theoreticalI;
  const branchCurrents =
    mode === 'series'
      ? [activeI2, activeI2, activeI2]
      : [
          fuseBlown ? 0 : supplyV / r1,
          fuseBlown ? 0 : supplyV / r2,
          fuseBlown ? 0 : supplyV / r3,
        ];
  const branchVoltages =
    mode === 'series'
      ? [activeI2 * r1, activeI2 * r2, activeI2 * r3]
      : [fuseBlown ? 0 : supplyV, fuseBlown ? 0 : supplyV, fuseBlown ? 0 : supplyV];

  const powerTotal2 = fuseBlown ? 0 : supplyV * activeI2;
  const jouleHeat10s = powerTotal2 * 10; // H = I^2 R t = V I t for t = 10s

  // Animation loop
  useEffect(() => {
    if (!animRunning) return;
    let rafId = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      setFlowClock((c) => c + dt);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [animRunning]);

  const handleResetFuse = () => {
    if (theoreticalI <= fuseRating) {
      setFuseBlown(false);
    } else {
      // Safe reset by dropping voltage so circuit runs cleanly, or let user see why it blew
      const safeV = Math.max(6, Math.floor(fuseRating * rEq2 * 0.85));
      setSupplyV(safeV);
      setFuseBlown(false);
    }
  };

  // --- Tab 1 SVG ---
  const renderTab1Svg = () => {
    const left = 70;
    const right = 345;
    const top = 66;
    const bot = 205;

    // Speed scales smoothly with current (clamped visually)
    const speed = Math.min(1.8, Math.max(0.08, current1 * 0.14));
    const convPhase = (flowClock * speed) % 1;
    const elecPhase = (1 - ((flowClock * speed) % 1)) % 1;

    // Wire specimen dimensions on top branch
    const wireW = Math.min(140, 56 + effL * 20);
    const wireH = Math.min(24, Math.max(6, effA * 10));
    const wireStartX = (left + right) / 2 - wireW / 2;
    const wireStartY = top - wireH / 2;

    // V-I Graph coordinates (right panel x = 395..590, y = 40..210)
    const gx0 = 415;
    const gy0 = 200;
    const gw = 165;
    const gh = 148;
    const maxV = 12;
    const maxI = 8; // 8 A full scale on graph
    const dotX = gx0 + Math.min(1, current1 / maxI) * gw;
    const dotY = gy0 - (voltage / maxV) * gh;
    // Slope line from (0,0) up to edge of graph box
    const maxGraphI = Math.min(maxI, maxV / rTotal1);
    const maxGraphV = maxGraphI * rTotal1;
    const lineEndX = gx0 + (maxGraphI / maxI) * gw;
    const lineEndY = gy0 - (maxGraphV / maxV) * gh;

    return (
      <svg
        viewBox="0 0 610 250"
        className="w-full h-auto max-h-72 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
        aria-label="Animated electron drift and V-I Ohm's law graph"
      >
        {/* Circuit Loop Wires */}
        <rect
          x={left}
          y={top}
          width={right - left}
          height={bot - top}
          rx="12"
          fill="none"
          stroke="#475569"
          strokeWidth="3.2"
        />

        {/* Test Wire Specimen on Top Branch */}
        <rect
          x={wireStartX}
          y={wireStartY}
          width={wireW}
          height={wireH}
          rx="4"
          fill={mat.wireColor}
          stroke="#0f172a"
          strokeWidth="1.4"
        />
        <text
          x={(left + right) / 2}
          y={top - wireH / 2 - 10}
          textAnchor="middle"
          fontSize="10.5"
          fontWeight="800"
          fill="#0891b2"
        >
          {mat.name} Wire: R = {rTotal1.toFixed(2)} Ω
        </text>

        {/* Voltmeter in Parallel across test wire */}
        <polyline
          points={`${wireStartX - 10},${top} ${wireStartX - 10},${top + 48} ${wireStartX + wireW + 10},${top + 48} ${wireStartX + wireW + 10},${top}`}
          fill="none"
          stroke="#4f46e5"
          strokeWidth="1.8"
          strokeDasharray="3 2"
        />
        <circle cx={(left + right) / 2} cy={top + 48} r="16" fill="#eef2ff" stroke="#4f46e5" strokeWidth="2.2" />
        <text x={(left + right) / 2} y={top + 46} textAnchor="middle" fontSize="10" fontWeight="900" fill="#3730a3">
          V
        </text>
        <text x={(left + right) / 2} y={top + 57} textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#4338ca">
          {voltage.toFixed(1)}V
        </text>

        {/* Ammeter in Series on Right Branch */}
        <circle cx={right} cy={(top + bot) / 2} r="18" fill="#ecfeff" stroke="#0891b2" strokeWidth="2.4" />
        <text x={right} y={(top + bot) / 2 - 2} textAnchor="middle" fontSize="10.5" fontWeight="900" fill="#0e7490">
          A
        </text>
        <text x={right} y={(top + bot) / 2 + 10} textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#0891b2">
          {current1.toFixed(2)}A
        </text>

        {/* Battery on Bottom Branch (+ on left, - on right so conventional I goes clockwise!) */}
        <rect x="172" y={bot - 14} width="68" height="28" fill="#ffffff" />
        {/* Long thin + on left */}
        <line x1="192" y1={bot - 13} x2="192" y2={bot + 13} stroke="#dc2626" strokeWidth="2.4" />
        {/* Short thick - on right */}
        <line x1="204" y1={bot - 8} x2="204" y2={bot + 8} stroke="#2563eb" strokeWidth="4.4" />
        <line x1="214" y1={bot - 13} x2="214" y2={bot + 13} stroke="#dc2626" strokeWidth="2.4" />
        <line x1="224" y1={bot - 8} x2="224" y2={bot + 8} stroke="#2563eb" strokeWidth="4.4" />
        <text x="180" y={bot - 14} fontSize="11" fontWeight="900" fill="#dc2626">+</text>
        <text x="232" y={bot - 14} fontSize="11" fontWeight="900" fill="#2563eb">−</text>
        <text x="208" y={bot + 26} textAnchor="middle" fontSize="10" fontWeight="800" fill="#334155">
          DC Supply ({voltage.toFixed(1)} V)
        </text>

        {/* Animated Electrons (Blue, - to + = counter-clockwise!) */}
        {Array.from({ length: 10 }, (_, idx) => {
          const p = rectLoopPoint(elecPhase + idx / 10, left, top, right, bot);
          return (
            <g key={`e-${idx}`}>
              <circle cx={p.x} cy={p.y} r="4.5" fill="#2563eb" opacity="0.9" />
              <text x={p.x} y={p.y + 3} textAnchor="middle" fontSize="7" fontWeight="900" fill="#ffffff">
                e⁻
              </text>
            </g>
          );
        })}

        {/* Animated Conventional Current Pulses (Red, + to - = clockwise!) */}
        {Array.from({ length: 5 }, (_, idx) => {
          const p = rectLoopPoint(convPhase + idx / 5, left, top, right, bot);
          return (
            <circle
              key={`c-${idx}`}
              cx={p.x}
              cy={p.y}
              r="3.6"
              fill="#ef4444"
              stroke="#ffffff"
              strokeWidth="1"
            />
          );
        })}

        {/* Legend bottom-left */}
        <circle cx="24" cy="232" r="4" fill="#2563eb" />
        <text x="32" y="236" fontSize="9.5" fontWeight="700" fill="#1d4ed8">e⁻ flow (− → +)</text>
        <circle cx="122" cy="232" r="3.8" fill="#ef4444" />
        <text x="130" y="236" fontSize="9.5" fontWeight="700" fill="#dc2626">Conventional I (+ → −)</text>

        {/* Right Panel: Live V-I Line Graph */}
        <rect x="378" y="18" width="218" height="214" rx="10" fill="rgba(241,245,249,0.5)" stroke="#cbd5e1" />
        <text x="487" y="35" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#0f172a">
          Live V–I Graph (Slope = R)
        </text>
        <line x1={gx0} y1={gy0} x2={gx0 + gw} y2={gy0} stroke="#475569" strokeWidth="1.6" />
        <line x1={gx0} y1={gy0 - gh} x2={gx0} y2={gy0} stroke="#475569" strokeWidth="1.6" />
        <text x={gx0 - 15} y={gy0 - gh + 10} fontSize="10" fontWeight="800" fill="#0891b2">V(V)</text>
        <text x={gx0 + gw - 16} y={gy0 + 15} fontSize="10" fontWeight="800" fill="#0891b2">I(A)</text>

        {/* Ohm's law line */}
        <line x1={gx0} y1={gy0} x2={lineEndX} y2={lineEndY} stroke="#0891b2" strokeWidth="2.4" />
        {/* Dashed guide lines */}
        <line x1={gx0} y1={dotY} x2={dotX} y2={dotY} stroke="#94a3b8" strokeDasharray="3 3" strokeWidth="1.2" />
        <line x1={dotX} y1={dotY} x2={dotX} y2={gy0} stroke="#94a3b8" strokeDasharray="3 3" strokeWidth="1.2" />
        <circle cx={dotX} cy={dotY} r="5.5" fill="#dc2626" stroke="#ffffff" strokeWidth="1.8" />
        <text x="487" y="224" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#0e7490">
          Slope ΔV/ΔI = {rTotal1.toFixed(2)} Ω
        </text>
      </svg>
    );
  };

  // --- Tab 2 SVG ---
  const renderTab2Svg = () => {
    const heatFactor = (p: number) => Math.min(1, p / 800);

    const pulsePositions = (speedVal: number, count: number) => {
      if (fuseBlown || speedVal <= 0) return [];
      const sp = Math.min(1.6, Math.max(0.08, speedVal * 0.08));
      return Array.from({ length: count }, (_, i) => ((flowClock * sp + i / count) % 1));
    };

    const branchList = [
      { label: 'R₁', r: r1, i: branchCurrents[0], v: branchVoltages[0], y: 46 },
      { label: 'R₂', r: r2, i: branchCurrents[1], v: branchVoltages[1], y: 100 },
      { label: 'R₃', r: r3, i: branchCurrents[2], v: branchVoltages[2], y: 154 },
    ];

    return (
      <svg
        viewBox="0 0 600 245"
        className="w-full h-auto max-h-72 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
        aria-label="Series and parallel network with fuse simulator"
      >
        {/* Supply & Main Loop Frame */}
        <line x1="70" y1="206" x2="530" y2="206" stroke="#475569" strokeWidth="2.8" />
        <line x1="70" y1="100" x2="70" y2="206" stroke="#475569" strokeWidth="2.8" />
        <line x1="530" y1="100" x2="530" y2="206" stroke="#475569" strokeWidth="2.8" />

        {/* Supply Badge on bottom */}
        <rect x="235" y="191" width="130" height="30" rx="6" fill="#0f172a" />
        <text x="300" y="210" textAnchor="middle" fontSize="11" fontWeight="800" fill="#ffffff">
          Supply: {supplyV} V {fuseBlown ? '(OPEN!)' : `| I = ${activeI2.toFixed(2)} A`}
        </text>

        {/* Fuse Box on Left Vertical Feeder */}
        <rect
          x="45"
          y="134"
          width="50"
          height="36"
          rx="6"
          fill={fuseBlown ? '#fef2f2' : '#ecfdf5'}
          stroke={fuseBlown ? '#dc2626' : '#059669'}
          strokeWidth="2.2"
        />
        {fuseBlown ? (
          <g>
            {/* Melted broken fuse wire */}
            <line x1="70" y1="134" x2="70" y2="145" stroke="#dc2626" strokeWidth="2.6" />
            <line x1="70" y1="159" x2="70" y2="170" stroke="#dc2626" strokeWidth="2.6" />
            <circle cx="70" cy="152" r="7" fill="#f97316" opacity="0.45" />
            <text x="104" y="150" fontSize="10" fontWeight="900" fill="#dc2626">FUSE BLOWN!</text>
            <text x="104" y="162" fontSize="9" fontWeight="700" fill="#991b1b">
              ({theoreticalI.toFixed(1)}A {'>'} {fuseRating}A)
            </text>
          </g>
        ) : (
          <g>
            <path d="M 70 134 Q 76 152 70 170" fill="none" stroke="#059669" strokeWidth="2.6" />
            <text x="102" y="156" fontSize="10" fontWeight="800" fill="#059669">
              Fuse {fuseRating}A OK
            </text>
          </g>
        )}

        {mode === 'series' ? (
          <g>
            {/* Single series top rail */}
            <line x1="70" y1="74" x2="530" y2="74" stroke="#475569" strokeWidth="2.8" />
            <line x1="70" y1="74" x2="70" y2="100" stroke="#475569" strokeWidth="2.8" />
            <line x1="530" y1="74" x2="530" y2="100" stroke="#475569" strokeWidth="2.8" />

            {branchList.map((b, idx) => {
              const bx = 135 + idx * 140;
              const pwr = b.i * b.v;
              const glow = heatFactor(pwr);
              return (
                <g key={b.label}>
                  <rect
                    x={bx - 36}
                    y="54"
                    width="72"
                    height="40"
                    rx="7"
                    fill={`rgba(239, 68, 68, ${0.08 + glow * 0.55})`}
                    stroke={glow > 0.35 ? '#ea580c' : '#0891b2'}
                    strokeWidth="2.2"
                  />
                  <text x={bx} y="71" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0f172a">
                    {b.label} = {b.r} Ω
                  </text>
                  <text x={bx} y="85" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#0e7490">
                    V={b.v.toFixed(1)}V • {pwr.toFixed(0)}W
                  </text>
                </g>
              );
            })}

            {/* Current pulses along series rail */}
            {pulsePositions(activeI2, 7).map((t, i) => (
              <circle key={i} cx={70 + t * 460} cy="74" r="4" fill="#ef4444" stroke="#fff" strokeWidth="1" />
            ))}
          </g>
        ) : (
          <g>
            {/* Parallel vertical buses */}
            <line x1="150" y1="46" x2="150" y2="154" stroke="#475569" strokeWidth="2.6" />
            <line x1="450" y1="46" x2="450" y2="154" stroke="#475569" strokeWidth="2.6" />
            <line x1="70" y1="100" x2="150" y2="100" stroke="#475569" strokeWidth="2.8" />
            <line x1="450" y1="100" x2="530" y2="100" stroke="#475569" strokeWidth="2.8" />

            {branchList.map((b) => {
              const pwr = b.i * b.v;
              const glow = heatFactor(pwr);
              return (
                <g key={b.label}>
                  <line x1="150" y1={b.y} x2="450" y2={b.y} stroke="#475569" strokeWidth="2.4" />
                  <rect
                    x="220"
                    y={b.y - 18}
                    width="160"
                    height="36"
                    rx="7"
                    fill={`rgba(249, 115, 22, ${0.08 + glow * 0.55})`}
                    stroke={glow > 0.35 ? '#ea580c' : '#059669'}
                    strokeWidth="2.2"
                  />
                  <text x="300" y={b.y - 2} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#0f172a">
                    {b.label} = {b.r} Ω | I = {b.i.toFixed(2)} A
                  </text>
                  <text x="300" y={b.y + 11} textAnchor="middle" fontSize="9.2" fontWeight="700" fill="#065f46">
                    V = {b.v.toFixed(0)}V • P = {pwr.toFixed(0)} W
                  </text>
                  {pulsePositions(b.i, 4).map((t, pi) => (
                    <circle
                      key={pi}
                      cx={150 + t * 300}
                      cy={b.y}
                      r="3.8"
                      fill="#ef4444"
                      stroke="#ffffff"
                      strokeWidth="1"
                    />
                  ))}
                </g>
              );
            })}
          </g>
        )}
      </svg>
    );
  };

  return (
    <div className="rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50/60 via-white to-slate-50 p-4 sm:p-5 space-y-4 dark:border-cyan-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cyan-100 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              Interactive Electricity &amp; Circuit Simulator Lab (Ch 11)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Electron drift vs conventional current, R = ρL/A wire stretching, Series/Parallel &amp; Fuse safety
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setAnimRunning((r) => !r)}
          className="no-word-lookup select-none inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          {animRunning ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {animRunning ? 'Pause Flow' : 'Resume Flow'}
        </button>
      </div>

      {/* Tab Bar */}
      <div className="no-word-lookup select-none flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTab('ohms-drift')}
          className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold cursor-pointer border transition ${
            tab === 'ohms-drift'
              ? 'bg-cyan-600 border-cyan-600 text-white shadow-xs'
              : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-400 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300'
          }`}
        >
          <Gauge className="h-3.5 w-3.5" /> Tab 1: Electron Drift, Ohm’s Law &amp; R = ρL/A
        </button>
        <button
          type="button"
          onClick={() => setTab('network-fuse')}
          className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold cursor-pointer border transition ${
            tab === 'network-fuse'
              ? 'bg-cyan-600 border-cyan-600 text-white shadow-xs'
              : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-400 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300'
          }`}
        >
          <Flame className="h-3.5 w-3.5" /> Tab 2: Series vs Parallel, Joule Heat &amp; Fuse Blowout
        </button>
      </div>

      {tab === 'ohms-drift' ? (
        <div className="space-y-4">
          {/* Controls */}
          <div className="no-word-lookup select-none rounded-xl border border-slate-200 bg-white p-3.5 space-y-3 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-wrap gap-1.5">
              {MATERIALS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMaterialId(m.id)}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-bold cursor-pointer border ${
                    materialId === m.id
                      ? 'bg-slate-900 border-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950'
                      : 'bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300'
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3 text-xs">
              <label className="space-y-1">
                <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                  <span>Voltage (V)</span>
                  <span className="font-mono text-cyan-700 dark:text-cyan-400">{voltage.toFixed(1)} V</span>
                </div>
                <input
                  type="range"
                  min={1.5}
                  max={12}
                  step={0.5}
                  value={voltage}
                  onChange={(e) => setVoltage(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer"
                />
              </label>

              <label className="space-y-1">
                <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                  <span>Base Length (L)</span>
                  <span className="font-mono text-cyan-700 dark:text-cyan-400">{lengthMult.toFixed(1)}×</span>
                </div>
                <input
                  type="range"
                  min={1.0}
                  max={3.0}
                  step={0.2}
                  value={lengthMult}
                  onChange={(e) => setLengthMult(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer"
                />
              </label>

              <label className="space-y-1">
                <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                  <span>Base Area (A)</span>
                  <span className="font-mono text-cyan-700 dark:text-cyan-400">{areaMult.toFixed(2)}×</span>
                </div>
                <input
                  type="range"
                  min={0.5}
                  max={2.0}
                  step={0.25}
                  value={areaMult}
                  onChange={(e) => setAreaMult(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer"
                />
              </label>
            </div>

            {/* Stretch Wire 2L -> 4R Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-amber-200 bg-amber-50/70 px-3 py-2 dark:border-amber-900/60 dark:bg-amber-950/25">
              <div className="text-xs text-amber-950 dark:text-amber-200">
                <strong>CBSE Trap Toggle:</strong> Stretching a wire to <code>2L</code> keeps Volume <code>V = A·L</code> constant, so Area automatically becomes <code>A/2</code> ⇒ Resistance becomes <strong><code>4R</code></strong>!
              </div>
              <button
                type="button"
                onClick={() => setStretchDouble((s) => !s)}
                className={`rounded-lg px-3 py-1.5 text-xs font-extrabold cursor-pointer border transition ${
                  stretchDouble
                    ? 'bg-rose-600 border-rose-600 text-white'
                    : 'bg-white border-amber-300 text-amber-900 hover:bg-amber-100 dark:bg-slate-900 dark:border-amber-800 dark:text-amber-300'
                }`}
              >
                {stretchDouble ? 'Stretched to 2L (Active → 4R!)' : 'Stretch Wire to 2L (Vol Const → 4R)'}
              </button>
            </div>
          </div>

          <div className="no-word-lookup select-none">{renderTab1Svg()}</div>

          {/* Readouts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[10px] font-extrabold uppercase text-slate-500">Resistivity (ρ)</div>
              <div className="font-mono text-xs font-extrabold text-slate-900 dark:text-white mt-0.5">
                {mat.rhoDisplay}
              </div>
              <div className="text-[10.5px] text-slate-500">{mat.useNote}</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[10px] font-extrabold uppercase text-slate-500">Total Resistance R</div>
              <div className="font-mono text-sm font-extrabold text-cyan-700 dark:text-cyan-400">
                {rTotal1.toFixed(2)} Ω
              </div>
              {stretchDouble && (
                <div className="text-[10.5px] font-bold text-rose-600 dark:text-rose-400">
                  4 × {rUnstretched.toFixed(2)} Ω!
                </div>
              )}
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[10px] font-extrabold uppercase text-slate-500">Current I = V/R</div>
              <div className="font-mono text-sm font-extrabold text-emerald-700 dark:text-emerald-400">
                {current1.toFixed(2)} A
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[10px] font-extrabold uppercase text-slate-500">Power P = VI</div>
              <div className="font-mono text-sm font-extrabold text-orange-600 dark:text-orange-400">
                {(voltage * current1).toFixed(2)} W
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Network Controls */}
          <div className="no-word-lookup select-none rounded-xl border border-slate-200 bg-white p-3.5 space-y-3 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setMode('series')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold cursor-pointer border ${
                    mode === 'series'
                      ? 'bg-slate-900 border-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950'
                      : 'bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300'
                  }`}
                >
                  Series Network
                </button>
                <button
                  type="button"
                  onClick={() => setMode('parallel')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold cursor-pointer border ${
                    mode === 'parallel'
                      ? 'bg-slate-900 border-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950'
                      : 'bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300'
                  }`}
                >
                  Parallel Network
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-slate-600 dark:text-slate-300">Fuse Rating:</span>
                {([5, 15] as const).map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setFuseRating(rating)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-extrabold cursor-pointer border ${
                      fuseRating === rating
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'bg-white border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {rating} A Fuse
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-xs">
              <label className="space-y-1">
                <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                  <span>Supply V</span>
                  <span className="font-mono text-cyan-700 dark:text-cyan-400">{supplyV} V</span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={220}
                  step={2}
                  value={supplyV}
                  onChange={(e) => setSupplyV(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer"
                />
              </label>

              <label className="space-y-1">
                <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                  <span>Resistor R₁</span>
                  <span className="font-mono text-cyan-700 dark:text-cyan-400">{r1} Ω</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={30}
                  step={1}
                  value={r1}
                  onChange={(e) => setR1(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer"
                />
              </label>

              <label className="space-y-1">
                <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                  <span>Resistor R₂</span>
                  <span className="font-mono text-cyan-700 dark:text-cyan-400">{r2} Ω</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={30}
                  step={1}
                  value={r2}
                  onChange={(e) => setR2(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer"
                />
              </label>

              <label className="space-y-1">
                <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                  <span>Resistor R₃</span>
                  <span className="font-mono text-cyan-700 dark:text-cyan-400">{r3} Ω</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={30}
                  step={1}
                  value={r3}
                  onChange={(e) => setR3(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer"
                />
              </label>
            </div>
          </div>

          {/* Fuse Blown Alert */}
          {fuseBlown && (
            <div className="rounded-xl border-2 border-rose-400 bg-rose-50 p-3 flex flex-wrap items-center justify-between gap-2 dark:border-rose-800 dark:bg-rose-950/40">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-900 dark:text-rose-200">
                <ShieldAlert className="h-5 w-5 text-rose-600 shrink-0" />
                <span>
                  <strong>FUSE BLOWN!</strong> Overcurrent ({theoreticalI.toFixed(2)} A {'>'} {fuseRating} A rating) melted the Sn-Pb fuse wire via Joule heating (<code>H = I²Rt</code>) and opened the Live circuit!
                </span>
              </div>
              <button
                type="button"
                onClick={handleResetFuse}
                className="no-word-lookup select-none inline-flex items-center gap-1.5 rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-extrabold text-white hover:bg-rose-700 cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Reset Fuse
              </button>
            </div>
          )}

          <div className="no-word-lookup select-none">{renderTab2Svg()}</div>

          {/* Summary Telemetry */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[10px] font-extrabold uppercase text-slate-500">Equivalent R_eq</div>
              <div className="font-mono text-sm font-extrabold text-cyan-700 dark:text-cyan-400">
                {rEq2.toFixed(2)} Ω
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[10px] font-extrabold uppercase text-slate-500">Circuit Current</div>
              <div
                className={`font-mono text-sm font-extrabold ${
                  fuseBlown ? 'text-rose-600' : 'text-emerald-700 dark:text-emerald-400'
                }`}
              >
                {activeI2.toFixed(2)} A
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[10px] font-extrabold uppercase text-slate-500">Total Power P = VI</div>
              <div className="font-mono text-sm font-extrabold text-orange-600 dark:text-orange-400">
                {powerTotal2.toFixed(1)} W
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[10px] font-extrabold uppercase text-slate-500">Heat H = I²Rt (10 s)</div>
              <div className="font-mono text-sm font-extrabold text-rose-700 dark:text-rose-400">
                {jouleHeat10s.toFixed(0)} J
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 flex items-center gap-2">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-600 shrink-0" />
            <span>
              Tip: Raise Supply <strong>V</strong> toward <code>220 V</code> in Parallel mode (small <code>R_eq</code>) to watch the <code>5 A</code> or <code>15 A</code> fuse blow live!
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
