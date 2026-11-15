import { useState } from 'react';
import { AlertTriangle, CheckCircle2, Eye, Layers, Ruler } from 'lucide-react';
import { DiagramId } from '../../types/curriculum';

export type MathDiagramId =
  | 'linear-pair-graphical-cases'
  | 'quadratic-parabola-discriminant'
  | 'bpt-and-similarity-criteria'
  | 'coordinate-section-and-midpoint'
  | 'trig-right-triangle-and-table'
  | 'elevation-vs-depression-sightlines'
  | 'circle-tangent-theorems'
  | 'sector-and-segment-anatomy'
  | 'combined-solids-visible-surface'
  | 'statistics-mean-median-mode-map';

const MATH_DIAGRAM_IDS = new Set<string>([
  'linear-pair-graphical-cases',
  'quadratic-parabola-discriminant',
  'bpt-and-similarity-criteria',
  'coordinate-section-and-midpoint',
  'trig-right-triangle-and-table',
  'elevation-vs-depression-sightlines',
  'circle-tangent-theorems',
  'sector-and-segment-anatomy',
  'combined-solids-visible-surface',
  'statistics-mean-median-mode-map',
]);

export function isMathDiagramId(id: DiagramId): id is MathDiagramId {
  return MATH_DIAGRAM_IDS.has(id);
}

function LinearPairCasesVisual() {
  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-3">
        {/* Case 1: Intersecting */}
        <div className="rounded-xl border border-emerald-200 bg-white p-3 dark:border-emerald-900/60 dark:bg-slate-950">
          <div className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400">
            1. Intersecting Lines
          </div>
          <svg viewBox="0 0 180 120" className="w-full h-28 my-1.5" aria-label="Intersecting lines">
            <line x1="20" y1="60" x2="165" y2="60" stroke="#94a3b8" strokeWidth="1" />
            <line x1="90" y1="10" x2="90" y2="112" stroke="#94a3b8" strokeWidth="1" />
            <line x1="28" y1="98" x2="152" y2="20" stroke="#059669" strokeWidth="2.8" />
            <line x1="35" y1="22" x2="145" y2="96" stroke="#2563eb" strokeWidth="2.8" />
            <circle cx="91" cy="59" r="4.5" fill="#dc2626" />
          </svg>
          <div className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
            a₁/a₂ ≠ b₁/b₂
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
            Exactly <strong>1 Unique Solution</strong> • <strong>Consistent</strong>
          </p>
        </div>

        {/* Case 2: Parallel */}
        <div className="rounded-xl border border-rose-200 bg-white p-3 dark:border-rose-900/60 dark:bg-slate-950">
          <div className="text-xs font-extrabold text-rose-700 dark:text-rose-400">
            2. Parallel Lines
          </div>
          <svg viewBox="0 0 180 120" className="w-full h-28 my-1.5" aria-label="Parallel lines">
            <line x1="20" y1="60" x2="165" y2="60" stroke="#94a3b8" strokeWidth="1" />
            <line x1="90" y1="10" x2="90" y2="112" stroke="#94a3b8" strokeWidth="1" />
            <line x1="30" y1="88" x2="145" y2="16" stroke="#e11d48" strokeWidth="2.8" />
            <line x1="42" y1="104" x2="157" y2="32" stroke="#f59e0b" strokeWidth="2.8" />
          </svg>
          <div className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
            a₁/a₂ = b₁/b₂ ≠ c₁/c₂
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
            <strong>No Solution (0)</strong> • <strong>Inconsistent</strong>
          </p>
        </div>

        {/* Case 3: Coincident */}
        <div className="rounded-xl border border-indigo-200 bg-white p-3 dark:border-indigo-900/60 dark:bg-slate-950">
          <div className="text-xs font-extrabold text-indigo-700 dark:text-indigo-400">
            3. Coincident Lines
          </div>
          <svg viewBox="0 0 180 120" className="w-full h-28 my-1.5" aria-label="Coincident lines">
            <line x1="20" y1="60" x2="165" y2="60" stroke="#94a3b8" strokeWidth="1" />
            <line x1="90" y1="10" x2="90" y2="112" stroke="#94a3b8" strokeWidth="1" />
            <line x1="30" y1="95" x2="150" y2="22" stroke="#4f46e5" strokeWidth="5.5" opacity="0.45" />
            <line x1="30" y1="95" x2="150" y2="22" stroke="#0f766e" strokeWidth="2" strokeDasharray="5 4" />
          </svg>
          <div className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
            a₁/a₂ = b₁/b₂ = c₁/c₂
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
            <strong>Infinitely Many Solutions</strong> • <strong>Dependent Consistent</strong>
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-amber-300 bg-amber-50/80 px-3 py-2 text-xs text-amber-950 flex items-start gap-2 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
        <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
        <span>
          <strong>Sign-Slip Shield:</strong> Always bring both equations into standard form{' '}
          <code className="font-mono font-bold">ax + by + c = 0</code> (both constants on the <strong>same side</strong>) BEFORE reading <code className="font-mono font-bold">c₁, c₂</code>! Comparing LHS constant in Eq 1 with RHS constant in Eq 2 flips the sign of <code className="font-mono font-bold">c₁/c₂</code>.
        </span>
      </div>
    </div>
  );
}

function QuadraticParabolaVisual() {
  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-emerald-200 bg-white p-3 dark:border-emerald-900/60 dark:bg-slate-950">
          <div className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400">
            D = b² − 4ac &gt; 0
          </div>
          <svg viewBox="0 0 180 115" className="w-full h-24 my-1" aria-label="Two real roots">
            <line x1="15" y1="68" x2="165" y2="68" stroke="#64748b" strokeWidth="1.2" />
            <path d="M 38 14 Q 90 120 142 14" fill="none" stroke="#059669" strokeWidth="2.8" />
            <circle cx="57" cy="68" r="4" fill="#dc2626" />
            <circle cx="123" cy="68" r="4" fill="#dc2626" />
          </svg>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            <strong>2 Distinct Real Roots</strong> (cuts x-axis twice).
          </p>
        </div>

        <div className="rounded-xl border border-amber-200 bg-white p-3 dark:border-amber-900/60 dark:bg-slate-950">
          <div className="text-xs font-extrabold text-amber-700 dark:text-amber-400">
            D = b² − 4ac = 0
          </div>
          <svg viewBox="0 0 180 115" className="w-full h-24 my-1" aria-label="Equal roots">
            <line x1="15" y1="78" x2="165" y2="78" stroke="#64748b" strokeWidth="1.2" />
            <path d="M 35 16 Q 90 140 145 16" fill="none" stroke="#d97706" strokeWidth="2.8" />
            <circle cx="90" cy="78" r="4.5" fill="#dc2626" />
          </svg>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            <strong>2 Equal Real Roots</strong> (vertex touches x-axis once: <code className="font-mono">x = −b/2a</code>).
          </p>
        </div>

        <div className="rounded-xl border border-rose-200 bg-white p-3 dark:border-rose-900/60 dark:bg-slate-950">
          <div className="text-xs font-extrabold text-rose-700 dark:text-rose-400">
            D = b² − 4ac &lt; 0
          </div>
          <svg viewBox="0 0 180 115" className="w-full h-24 my-1" aria-label="No real roots">
            <line x1="15" y1="88" x2="165" y2="88" stroke="#64748b" strokeWidth="1.2" />
            <path d="M 38 14 Q 90 100 142 14" fill="none" stroke="#e11d48" strokeWidth="2.8" />
          </svg>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            <strong>No Real Roots</strong> (never meets x-axis).
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-rose-200 bg-rose-50/70 px-3 py-2 text-xs text-rose-950 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-200">
        <strong>Double-Negative Reflex:</strong> In <code className="font-mono font-bold">x = (−b ± √D) / 2a</code> and{' '}
        <code className="font-mono font-bold">D = b² − 4ac</code>, ALWAYS bracket <code className="font-mono font-bold">b</code> and <code className="font-mono font-bold">c</code>: e.g. if <code className="font-mono">b = −7</code>, write <code className="font-mono font-bold">−(−7) = +7</code> and <code className="font-mono font-bold">(−7)² = +49</code> (never <code className="font-mono line-through">−49</code>).
      </div>
    </div>
  );
}

function BptSimilarityVisual() {
  return (
    <div className="grid gap-4 md:grid-cols-2 items-center">
      <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
        <svg viewBox="0 0 260 190" className="w-full max-w-[260px] mx-auto" aria-label="BPT triangle">
          <polygon points="130,18 32,168 228,168" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="2.4" />
          <line x1="81" y1="93" x2="179" y2="93" stroke="#dc2626" strokeWidth="2.8" />
          <text x="125" y="13" fontSize="13" fontWeight="800" fill="#1e293b">A</text>
          <text x="18" y="176" fontSize="13" fontWeight="800" fill="#1e293b">B</text>
          <text x="233" y="176" fontSize="13" fontWeight="800" fill="#1e293b">C</text>
          <text x="64" y="92" fontSize="13" fontWeight="800" fill="#dc2626">D</text>
          <text x="185" y="92" fontSize="13" fontWeight="800" fill="#dc2626">E</text>
          <text x="108" y="86" fontSize="10" fontWeight="700" fill="#dc2626">DE ∥ BC</text>
          <line x1="126" y1="93" x2="132" y2="88" stroke="#dc2626" strokeWidth="1.5" />
          <line x1="126" y1="93" x2="132" y2="98" stroke="#dc2626" strokeWidth="1.5" />
          <line x1="126" y1="168" x2="132" y2="163" stroke="#1d4ed8" strokeWidth="1.5" />
          <line x1="126" y1="168" x2="132" y2="173" stroke="#1d4ed8" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="space-y-2.5 text-xs">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3 dark:border-emerald-900 dark:bg-emerald-950/30">
          <div className="font-extrabold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" /> Side-Segments (BPT — Theorem 6.1)
          </div>
          <div className="font-mono font-bold text-slate-900 dark:text-white mt-1">
            AD / DB = AE / EC  (and  AD / AB = AE / AC)
          </div>
        </div>

        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3 dark:border-blue-900 dark:bg-blue-950/30">
          <div className="font-extrabold text-blue-800 dark:text-blue-300">
            Parallel Base Ratio (AA Similarity: △ADE ~ △ABC)
          </div>
          <div className="font-mono font-bold text-slate-900 dark:text-white mt-1">
            DE / BC = AD / AB = AE / AC
          </div>
        </div>

        <div className="rounded-xl border border-rose-300 bg-rose-50/80 p-3 text-rose-900 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-200">
          <strong>#1 Triangles Trap:</strong> NEVER write{' '}
          <span className="font-mono font-bold line-through">DE / BC = AD / DB</span>! The base <code className="font-mono">BC</code> belongs to the <strong>FULL</strong> triangle <code className="font-mono">ABC</code>, so you MUST divide by the <strong>FULL side <code className="font-mono">AB</code></strong> (<code className="font-mono">AD + DB</code>), not the bottom piece <code className="font-mono">DB</code>!
        </div>
      </div>
    </div>
  );
}

function CoordinateSectionVisual() {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
        <svg viewBox="0 0 380 120" className="w-full max-w-md mx-auto" aria-label="Section formula cross multiplication">
          <line x1="40" y1="68" x2="340" y2="68" stroke="#2563eb" strokeWidth="3" />
          <circle cx="40" cy="68" r="6" fill="#0f766e" />
          <circle cx="155" cy="68" r="6" fill="#dc2626" />
          <circle cx="340" cy="68" r="6" fill="#4f46e5" />
          <text x="16" y="92" fontSize="11" fontWeight="800" fill="#0f766e">A(x₁, y₁)</text>
          <text x="132" y="92" fontSize="11" fontWeight="800" fill="#dc2626">P(x, y)</text>
          <text x="310" y="92" fontSize="11" fontWeight="800" fill="#4f46e5">B(x₂, y₂)</text>
          <rect x="85" y="42" width="24" height="18" rx="4" fill="#dbeafe" />
          <text x="97" y="55" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">m₁</text>
          <rect x="235" y="42" width="24" height="18" rx="4" fill="#fef3c7" />
          <text x="247" y="55" textAnchor="middle" fontSize="11" fontWeight="800" fill="#b45309">m₂</text>
          <path d="M 105 40 Q 220 6 334 56" fill="none" stroke="#1d4ed8" strokeWidth="1.6" strokeDasharray="4 3" />
          <path d="M 235 40 Q 140 10 46 56" fill="none" stroke="#b45309" strokeWidth="1.6" strokeDasharray="4 3" />
        </svg>
        <div className="grid gap-2 sm:grid-cols-2 mt-2 text-xs">
          <div className="rounded-lg bg-blue-50 px-3 py-2 font-mono font-bold text-blue-900 dark:bg-blue-950/40 dark:text-blue-200">
            P(x, y) = ( (m₁x₂ + m₂x₁)/(m₁+m₂), (m₁y₂ + m₂y₁)/(m₁+m₂) )
          </div>
          <div className="rounded-lg bg-amber-50 px-3 py-2 text-amber-950 dark:bg-amber-950/40 dark:text-amber-200">
            <strong>Cross Rule:</strong> Left ratio <code className="font-mono font-bold">m₁</code> multiplies far point <code className="font-mono font-bold">B(x₂,y₂)</code>; right ratio <code className="font-mono font-bold">m₂</code> multiplies <code className="font-mono font-bold">A(x₁,y₁)</code>!
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-teal-200 bg-teal-50/70 px-3 py-2 text-xs text-teal-950 dark:border-teal-900 dark:bg-teal-950/30 dark:text-teal-200">
        <strong>Parallelogram 4th Vertex Shortcut:</strong> Diagonal <code className="font-mono font-bold">AC</code> midpoint = Diagonal <code className="font-mono font-bold">BD</code> midpoint →{' '}
        <code className="font-mono font-bold">(x₁ + x₃)/2 = (x₂ + x₄)/2</code>. Cancels <code className="font-mono">/2</code> immediately without squaring 4 distances!
      </div>
    </div>
  );
}

function TrigTriangleAndTableVisual() {
  const [refAngle, setRefAngle] = useState<'A' | 'C'>('A');

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-extrabold text-slate-700 dark:text-slate-300">
          Switch Active Acute Angle to See P (Opp) &amp; B (Adj) Swap:
        </span>
        <div className="flex gap-1.5">
          {(['A', 'C'] as const).map((ang) => (
            <button
              key={ang}
              type="button"
              onClick={() => setRefAngle(ang)}
              className={`rounded-lg px-3 py-1 text-xs font-extrabold cursor-pointer transition ${
                refAngle === ang
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200'
              }`}
            >
              Reference Angle {ang}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 items-center">
        <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
          <svg viewBox="0 0 250 165" className="w-full max-w-[250px] mx-auto" aria-label="Right triangle trig">
            <polygon points="55,25 55,135 205,135" fill="#f8fafc" stroke="#1e293b" strokeWidth="2.4" />
            <rect x="55" y="121" width="14" height="14" fill="none" stroke="#1e293b" strokeWidth="1.6" />
            <text x="48" y="20" fontSize="13" fontWeight="800" fill={refAngle === 'A' ? '#dc2626' : '#0f172a'}>A</text>
            <text x="40" y="145" fontSize="13" fontWeight="800" fill="#0f172a">B (90°)</text>
            <text x="210" y="145" fontSize="13" fontWeight="800" fill={refAngle === 'C' ? '#dc2626' : '#0f172a'}>C</text>

            {/* Hypotenuse */}
            <text x="140" y="72" fontSize="11" fontWeight="800" fill="#4f46e5" transform="rotate(36 140 72)">
              Hypotenuse (H)
            </text>

            {/* Vertical side AB */}
            <text
              x="16"
              y="84"
              fontSize="11"
              fontWeight="800"
              fill={refAngle === 'C' ? '#dc2626' : '#059669'}
            >
              {refAngle === 'C' ? 'Opp (P)' : 'Adj (B)'}
            </text>

            {/* Horizontal side BC */}
            <text
              x="105"
              y="154"
              fontSize="11"
              fontWeight="800"
              fill={refAngle === 'A' ? '#dc2626' : '#059669'}
            >
              {refAngle === 'A' ? 'Opposite (P) = BC' : 'Adjacent (B) = BC'}
            </text>

            {refAngle === 'A' ? (
              <path d="M 55 48 A 22 22 0 0 0 74 39" fill="none" stroke="#dc2626" strokeWidth="2.5" />
            ) : (
              <path d="M 178 135 A 25 25 0 0 1 183 119" fill="none" stroke="#dc2626" strokeWidth="2.5" />
            )}
          </svg>
        </div>

        <div className="space-y-2 text-xs">
          <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3 dark:border-blue-900 dark:bg-blue-950/30">
            <div className="font-extrabold text-blue-900 dark:text-blue-200">
              Active Angle: ∠{refAngle}
            </div>
            <div className="mt-1 space-y-1 font-mono font-bold text-slate-800 dark:text-slate-200">
              <div>sin {refAngle} = {refAngle === 'A' ? 'BC / AC' : 'AB / AC'}</div>
              <div>cos {refAngle} = {refAngle === 'A' ? 'AB / AC' : 'BC / AC'}</div>
              <div>tan {refAngle} = {refAngle === 'A' ? 'BC / AB' : 'AB / BC'}</div>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3 dark:border-emerald-900 dark:bg-emerald-950/30">
            <div className="font-extrabold text-emerald-800 dark:text-emerald-300">
              sin θ Finger/Root Pattern (√0/4 → √4/4)
            </div>
            <div className="mt-1 grid grid-cols-5 gap-1 text-center font-mono text-[11px] font-bold">
              {[
                ['0°', '0'],
                ['30°', '1/2'],
                ['45°', '1/√2'],
                ['60°', '√3/2'],
                ['90°', '1'],
              ].map(([deg, val]) => (
                <div key={deg} className="rounded bg-white py-1 border border-emerald-200 dark:bg-slate-900 dark:border-emerald-900">
                  <div className="text-[10px] text-slate-500">{deg}</div>
                  <div className="text-emerald-700 dark:text-emerald-300">{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ElevationDepressionVisual() {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
        <svg viewBox="0 0 380 185" className="w-full max-w-md mx-auto" aria-label="Angle of elevation vs depression">
          {/* Ground */}
          <line x1="20" y1="162" x2="360" y2="162" stroke="#334155" strokeWidth="2.4" />
          {/* Building */}
          <rect x="48" y="88" width="28" height="74" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="2" />
          {/* Tower */}
          <rect x="290" y="26" width="26" height="136" fill="#e0e7ff" stroke="#4338ca" strokeWidth="2" />
          {/* Horizontal eye-level */}
          <line x1="76" y1="88" x2="290" y2="88" stroke="#059669" strokeWidth="2" strokeDasharray="5 4" />
          <text x="155" y="82" fontSize="10" fontWeight="800" fill="#059669">Horizontal Eye-Level</text>
          {/* Line of sight UP */}
          <line x1="76" y1="88" x2="290" y2="26" stroke="#2563eb" strokeWidth="2" />
          <text x="128" y="64" fontSize="10" fontWeight="800" fill="#2563eb">α (Elevation)</text>
          {/* Line of sight DOWN */}
          <line x1="76" y1="88" x2="290" y2="162" stroke="#dc2626" strokeWidth="2" />
          <text x="125" y="102" fontSize="10" fontWeight="800" fill="#dc2626">β (Depression)</text>
          <text x="235" y="156" fontSize="10" fontWeight="800" fill="#dc2626">β (Alt. Int. ∠)</text>
          <text x="35" y="80" fontSize="10" fontWeight="800" fill="#1e293b">Eye</text>
        </svg>
      </div>
      <div className="rounded-xl border border-rose-200 bg-rose-50/70 px-3 py-2 text-xs text-rose-950 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-200">
        <strong>#1 Ch 9 Trap:</strong> Angle of depression <code className="font-mono font-bold">β</code> is ALWAYS measured from the <strong>horizontal eye-level line</strong> — NEVER between the vertical wall and the line of sight! Draw the dashed horizontal first, then transfer <code className="font-mono font-bold">β</code> down by <em>Alternate Interior Angles</em>.
      </div>
    </div>
  );
}

function CircleTangentTheoremsVisual() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="text-xs font-extrabold text-blue-700 dark:text-blue-400 mb-1">
          Theorem 10.1: Radius ⊥ Tangent at Contact Point
        </div>
        <svg viewBox="0 0 220 155" className="w-full max-w-[220px] mx-auto" aria-label="Radius perpendicular to tangent">
          <circle cx="110" cy="68" r="46" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="2.2" />
          <line x1="20" y1="114" x2="200" y2="114" stroke="#dc2626" strokeWidth="2.5" />
          <line x1="110" y1="68" x2="110" y2="114" stroke="#059669" strokeWidth="2.4" />
          <line x1="110" y1="68" x2="178" y2="114" stroke="#64748b" strokeWidth="1.6" strokeDasharray="4 3" />
          <rect x="110" y="102" width="12" height="12" fill="none" stroke="#059669" strokeWidth="1.5" />
          <circle cx="110" cy="68" r="3" fill="#1e293b" />
          <circle cx="110" cy="114" r="3.5" fill="#dc2626" />
          <text x="104" y="60" fontSize="11" fontWeight="800" fill="#1e293b">O</text>
          <text x="105" y="130" fontSize="11" fontWeight="800" fill="#dc2626">P</text>
          <text x="22" y="108" fontSize="10" fontWeight="700" fill="#dc2626">X</text>
          <text x="190" y="108" fontSize="10" fontWeight="700" fill="#dc2626">Y</text>
          <text x="176" y="128" fontSize="11" fontWeight="800" fill="#475569">Q</text>
        </svg>
        <p className="text-[11px] text-slate-600 dark:text-slate-400">
          Right angle is ALWAYS at <code className="font-mono font-bold">P</code> (contact point), so{' '}
          <code className="font-mono font-bold">OQ</code> (centre-to-external point) is the <strong>Hypotenuse</strong>: <code className="font-mono">PQ = √(OQ² − r²)</code>.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="text-xs font-extrabold text-indigo-700 dark:text-indigo-400 mb-1">
          Theorem 10.2: Two Tangents from External P
        </div>
        <svg viewBox="0 0 240 155" className="w-full max-w-[240px] mx-auto" aria-label="Two tangents equal">
          <circle cx="78" cy="78" r="46" fill="#eef2ff" stroke="#4f46e5" strokeWidth="2.2" />
          <line x1="210" y1="78" x2="96" y2="35" stroke="#dc2626" strokeWidth="2.3" />
          <line x1="210" y1="78" x2="96" y2="121" stroke="#dc2626" strokeWidth="2.3" />
          <line x1="78" y1="78" x2="96" y2="35" stroke="#059669" strokeWidth="1.8" />
          <line x1="78" y1="78" x2="96" y2="121" stroke="#059669" strokeWidth="1.8" />
          <line x1="78" y1="78" x2="210" y2="78" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
          <circle cx="78" cy="78" r="3" fill="#1e293b" />
          <circle cx="210" cy="78" r="3.5" fill="#dc2626" />
          <text x="64" y="82" fontSize="11" fontWeight="800" fill="#1e293b">O</text>
          <text x="95" y="28" fontSize="11" fontWeight="800" fill="#dc2626">A</text>
          <text x="95" y="135" fontSize="11" fontWeight="800" fill="#dc2626">B</text>
          <text x="215" y="82" fontSize="11" fontWeight="800" fill="#dc2626">P</text>
        </svg>
        <p className="text-[11px] text-slate-600 dark:text-slate-400">
          <code className="font-mono font-bold">PA = PB</code> • <code className="font-mono font-bold">∠APB + ∠AOB = 180°</code> •{' '}
          <code className="font-mono font-bold">∠APB = 2∠OAB</code> (goldmine 2M/3M identity!).
        </p>
      </div>
    </div>
  );
}

function SectorSegmentVisual() {
  return (
    <div className="grid gap-4 md:grid-cols-2 items-center">
      <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
        <svg viewBox="0 0 210 185" className="w-full max-w-[210px] mx-auto" aria-label="Sector vs segment">
          <circle cx="105" cy="92" r="72" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          {/* Sector OAB */}
          <path d="M 105 92 L 50 139 A 72 72 0 0 0 160 139 Z" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="2" />
          {/* Minor Segment */}
          <path d="M 50 139 A 72 72 0 0 0 160 139 Z" fill="#fde68a" stroke="#d97706" strokeWidth="2" />
          <line x1="50" y1="139" x2="160" y2="139" stroke="#dc2626" strokeWidth="2" />
          <circle cx="105" cy="92" r="3.5" fill="#1e293b" />
          <text x="101" y="83" fontSize="11" fontWeight="800" fill="#1e293b">O</text>
          <text x="37" y="148" fontSize="11" fontWeight="800" fill="#1e293b">A</text>
          <text x="164" y="148" fontSize="11" fontWeight="800" fill="#1e293b">B</text>
          <text x="98" y="118" fontSize="11" fontWeight="800" fill="#1d4ed8">θ</text>
          <text x="72" y="156" fontSize="9.5" fontWeight="800" fill="#92400e">Minor Segment</text>
        </svg>
      </div>

      <div className="space-y-2 text-xs">
        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-2.5 dark:border-blue-900 dark:bg-blue-950/30">
          <strong>Minor Sector:</strong> <code className="font-mono font-bold">(θ/360) × πr²</code> | <strong>Arc:</strong>{' '}
          <code className="font-mono font-bold">(θ/360) × 2πr</code>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-2.5 dark:border-amber-900 dark:bg-amber-950/30">
          <strong>Minor Segment:</strong> <code className="font-mono font-bold">Area(Sector OAB) − Area(△OAB)</code>
          <div className="mt-1 font-mono text-[11px] text-amber-900 dark:text-amber-200">
            • θ=60° → (√3/4)r²   • θ=90° → (1/2)r²   • θ=120° → (√3/4)r²
          </div>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-2.5 dark:border-emerald-900 dark:bg-emerald-950/30">
          <strong>Major Sector / Segment:</strong> <code className="font-mono font-bold">πr² − Minor Area</code> (fastest check!).
        </div>
      </div>
    </div>
  );
}

function CombinedSolidsVisual() {
  const [solidTab, setSolidTab] = useState<'capsule' | 'toy' | 'hollow'>('hollow');

  const specs = {
    hollow: {
      title: 'Cylinder with Conical Cavity Scooped Out',
      rule: 'Paintbrush Rule: Can your paintbrush touch the inside conical pit? YES! So ADD its CSA — NEVER subtract!',
      tsa: 'TSA = CSA(Cylinder) + Base Circle + CSA(Cone) = 2πrh + πr² + πrl = πr(2h + r + l)',
      vol: 'Volume = Vol(Cylinder) − Vol(Cone) = πr²h − (1/3)πr²h = (2/3)πr²h',
      trap: 'Students subtract πrl because material was removed. Material removed affects VOLUME (−), NOT exposed SURFACE AREA (+)!',
    },
    capsule: {
      title: 'Medicine Capsule (Cylinder + 2 Hemispheres)',
      rule: 'Two hemisphere ends merge on outside; circular flat bases are hidden INSIDE.',
      tsa: 'TSA = CSA(Cylinder) + 2×CSA(Hemisphere) = 2πrh + 4πr² = 2πr(h + 2r)',
      vol: 'Volume = πr²h + (4/3)πr³ = πr²(h + 4r/3)',
      trap: 'Cylinder height h = Total Capsule Length − 2r (subtract radius from BOTH ends, not just one!).',
    },
    toy: {
      title: 'Cone Mounted on Hemisphere (Toy / Top)',
      rule: 'The circular base between cone and hemisphere is glued shut inside — do NOT add 2πr²!',
      tsa: 'TSA = CSA(Cone) + CSA(Hemisphere) = πrl + 2πr² = πr(l + 2r)',
      vol: 'Volume = (1/3)πr²h + (2/3)πr³ = (1/3)πr²(h + 2r)',
      trap: 'Total Toy Height = h_cone + r_hemisphere. Subtract r first to get cone height h, then l = √(r² + h²).',
    },
  }[solidTab];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {[
          { key: 'hollow' as const, label: 'Scooped Cylinder (#1 Trap)' },
          { key: 'capsule' as const, label: 'Medicine Capsule' },
          { key: 'toy' as const, label: 'Cone + Hemisphere Toy' },
        ].map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setSolidTab(t.key)}
            className={`rounded-lg px-3 py-1.5 text-xs font-extrabold cursor-pointer transition ${
              solidTab === t.key
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5 dark:border-slate-800 dark:bg-slate-950">
        <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900 dark:text-white">
          <Layers className="h-4 w-4 text-blue-600" />
          {specs.title}
        </div>
        <div className="rounded-lg bg-sky-50 border border-sky-200 px-3 py-2 text-xs text-sky-950 dark:bg-sky-950/30 dark:border-sky-900 dark:text-sky-200">
          <Eye className="inline h-3.5 w-3.5 mr-1 text-sky-600" />
          {specs.rule}
        </div>
        <div className="grid gap-2 sm:grid-cols-2 text-xs">
          <div className="rounded-lg bg-emerald-50/70 border border-emerald-200 p-2.5 dark:bg-emerald-950/30 dark:border-emerald-900">
            <div className="font-extrabold text-emerald-800 dark:text-emerald-300">Exposed Surface Area (Factor πr first!)</div>
            <div className="font-mono font-bold mt-1 text-slate-900 dark:text-white">{specs.tsa}</div>
          </div>
          <div className="rounded-lg bg-indigo-50/70 border border-indigo-200 p-2.5 dark:bg-indigo-950/30 dark:border-indigo-900">
            <div className="font-extrabold text-indigo-800 dark:text-indigo-300">Net Volume</div>
            <div className="font-mono font-bold mt-1 text-slate-900 dark:text-white">{specs.vol}</div>
          </div>
        </div>
        <div className="rounded-lg bg-rose-50 border border-rose-200 px-3 py-2 text-xs text-rose-900 dark:bg-rose-950/30 dark:border-rose-900 dark:text-rose-200">
          <strong>Silly Mistake Alert:</strong> {specs.trap}
        </div>
      </div>
    </div>
  );
}

function StatisticsTableMapVisual() {
  const rows = [
    { ci: '10 – 20', f: 6, cf: 6, note: '' },
    { ci: '20 – 30', f: 11, cf: 17, note: 'f₀ (Mode) & cf (Median)!' },
    { ci: '30 – 40', f: 21, cf: 38, note: 'Modal & Median Class (N/2 = 25 → cf ≥ 25)' },
    { ci: '40 – 50', f: 9, cf: 47, note: 'f₂ (below Modal Class)' },
    { ci: '50 – 60', f: 3, cf: 50, note: 'Total N = 50' },
  ];

  return (
    <div className="space-y-3">
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
              <th className="px-3 py-2 font-extrabold">Class Interval (h = 10)</th>
              <th className="px-3 py-2 font-extrabold">Frequency (fᵢ)</th>
              <th className="px-3 py-2 font-extrabold">Cumulative Freq (cf)</th>
              <th className="px-3 py-2 font-extrabold">Cell Pointer</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {rows.map((r, i) => (
              <tr
                key={r.ci}
                className={
                  i === 2
                    ? 'bg-blue-50/80 dark:bg-blue-950/30'
                    : i === 1
                    ? 'bg-emerald-50/70 dark:bg-emerald-950/20'
                    : ''
                }
              >
                <td className="px-3 py-2 font-mono font-bold">
                  {r.ci} {i === 2 && <span className="text-blue-700 dark:text-blue-300">(l = 30)</span>}
                </td>
                <td className="px-3 py-2 font-mono font-bold">
                  {r.f}{' '}
                  {i === 1 && <span className="text-amber-700">[f₀]</span>}
                  {i === 2 && <span className="text-blue-700">[f₁ & f]</span>}
                  {i === 3 && <span className="text-indigo-700">[f₂]</span>}
                </td>
                <td className="px-3 py-2 font-mono font-bold">
                  {r.cf} {i === 1 && <span className="text-emerald-700 dark:text-emerald-300">← USE THIS cf!</span>}
                  {i === 2 && <span className="line-through text-rose-500 text-[10px] ml-1">(not 38!)</span>}
                </td>
                <td className="px-3 py-2 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                  {r.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 text-xs">
        <div className="rounded-lg bg-blue-50 border border-blue-200 px-3 py-2 dark:bg-blue-950/30 dark:border-blue-900">
          <strong>Mode = l + [(f₁ − f₀) / (2f₁ − f₀ − f₂)] × h</strong>
          <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
            Trap: Denominator is <code className="font-mono font-bold">2f₁ − f₀ − f₂</code> (multiply f₁ by 2, subtract BOTH neighbours!).
          </div>
        </div>
        <div className="rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-2 dark:bg-emerald-950/30 dark:border-emerald-900">
          <strong>Median = l + [((N/2) − cf) / f] × h</strong>
          <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
            <Ruler className="inline h-3 w-3 mr-1" />
            Trap: <code className="font-mono font-bold">cf</code> is from the row <strong>ABOVE</strong> the median class; <code className="font-mono font-bold">f</code> is from the median class row itself!
          </div>
        </div>
      </div>
    </div>
  );
}

export function MathConceptDiagram({ diagramId }: { diagramId: MathDiagramId }) {
  switch (diagramId) {
    case 'linear-pair-graphical-cases':
      return <LinearPairCasesVisual />;
    case 'quadratic-parabola-discriminant':
      return <QuadraticParabolaVisual />;
    case 'bpt-and-similarity-criteria':
      return <BptSimilarityVisual />;
    case 'coordinate-section-and-midpoint':
      return <CoordinateSectionVisual />;
    case 'trig-right-triangle-and-table':
      return <TrigTriangleAndTableVisual />;
    case 'elevation-vs-depression-sightlines':
      return <ElevationDepressionVisual />;
    case 'circle-tangent-theorems':
      return <CircleTangentTheoremsVisual />;
    case 'sector-and-segment-anatomy':
      return <SectorSegmentVisual />;
    case 'combined-solids-visible-surface':
      return <CombinedSolidsVisual />;
    case 'statistics-mean-median-mode-map':
      return <StatisticsTableMapVisual />;
  }
}
