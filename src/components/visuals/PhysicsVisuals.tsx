import { useState } from 'react';
import {
  AlertTriangle,
  Eye,
  EyeOff,
  ShieldAlert,
} from 'lucide-react';
import { DiagramId } from '../../types/curriculum';

export type PhysicsDiagramId =
  | 'mirror-6-cases-atlas'
  | 'lens-6-cases-atlas'
  | 'human-eye-and-defects-diagrams'
  | 'prism-rainbow-scattering-diagrams'
  | 'circuit-symbols-and-vi-graphs'
  | 'domestic-circuit-and-bar-magnet';

const PHYSICS_DIAGRAM_IDS = new Set<string>([
  'mirror-6-cases-atlas',
  'lens-6-cases-atlas',
  'human-eye-and-defects-diagrams',
  'prism-rainbow-scattering-diagrams',
  'circuit-symbols-and-vi-graphs',
  'domestic-circuit-and-bar-magnet',
]);

export function isPhysicsDiagramId(id: DiagramId): id is PhysicsDiagramId {
  return PHYSICS_DIAGRAM_IDS.has(id);
}

/** Draws a ray segment with a mandatory CBSE directional arrowhead at position t (default 0.52). */
function RaySegment({
  x1,
  y1,
  x2,
  y2,
  color,
  dashed = false,
  arrowT = 0.52,
  showArrow = true,
  strokeWidth = 2.1,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  dashed?: boolean;
  arrowT?: number;
  showArrow?: boolean;
  strokeWidth?: number;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len < 1) return null;
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  const ax = x1 + dx * arrowT;
  const ay = y1 + dy * arrowT;

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? '5 4' : undefined}
        strokeLinecap="round"
      />
      {showArrow && len > 16 && (
        <polygon
          points="-5,-3.6 5,0 -5,3.6"
          fill={color}
          transform={`translate(${ax}, ${ay}) rotate(${angle})`}
        />
      )}
    </g>
  );
}

/** Draws a vertical object or image arrow from (x, axisY) to (x, tipY). */
function UprightArrow({
  x,
  axisY,
  tipY,
  color,
  dashed = false,
  topLabel,
  baseLabel,
}: {
  x: number;
  axisY: number;
  tipY: number;
  color: string;
  dashed?: boolean;
  topLabel: string;
  baseLabel: string;
}) {
  const goingUp = tipY < axisY;
  const headY = goingUp ? tipY + 6 : tipY - 6;
  const topLabelY = goingUp ? tipY - 6 : tipY + 13;
  const baseLabelY = goingUp ? axisY + 13 : axisY - 6;

  return (
    <g>
      <line
        x1={x}
        y1={axisY}
        x2={x}
        y2={tipY}
        stroke={color}
        strokeWidth="2.8"
        strokeDasharray={dashed ? '4 3' : undefined}
      />
      <polygon
        points={`${x},${tipY} ${x - 4.5},${headY} ${x + 4.5},${headY}`}
        fill={color}
      />
      <text
        x={x}
        y={topLabelY}
        textAnchor="middle"
        fontSize="11"
        fontWeight="800"
        fill={color}
      >
        {topLabel}
      </text>
      <text
        x={x}
        y={baseLabelY}
        textAnchor="middle"
        fontSize="11"
        fontWeight="800"
        fill={color}
      >
        {baseLabel}
      </text>
    </g>
  );
}

/* =========================================================================
   1. MIRROR 6 CASES + CONVEX 2 CASES ATLAS
   ========================================================================= */

interface RayCaseInfo {
  id: string;
  group: 'concave' | 'convex';
  tabLabel: string;
  objectPos: string;
  imagePos: string;
  nature: string;
  size: string;
  realUse: string;
  uVal: number | 'inf'; // relative to fMag = 65 px; Pole P at x=310 (concave) or x=230 (convex)
}

const MIRROR_CASES: RayCaseInfo[] = [
  {
    id: 'mc-1',
    group: 'concave',
    tabLabel: '1. At ∞',
    objectPos: 'At Infinity (∞)',
    imagePos: 'At Focus F (in front of mirror)',
    nature: 'Real and Inverted',
    size: 'Highly diminished (point-sized)',
    realUse: 'Solar furnaces, astronomical reflecting telescopes',
    uVal: 'inf',
  },
  {
    id: 'mc-2',
    group: 'concave',
    tabLabel: '2. Beyond C',
    objectPos: 'Beyond Centre of Curvature C',
    imagePos: 'Between F and C',
    nature: 'Real and Inverted',
    size: 'Diminished (|m| < 1)',
    realUse: 'Capturing reduced inverted scenes in optical labs',
    uVal: -175,
  },
  {
    id: 'mc-3',
    group: 'concave',
    tabLabel: '3. At C',
    objectPos: 'At Centre of Curvature C (u = 2f)',
    imagePos: 'At C (v = u = −2f)',
    nature: 'Real and Inverted',
    size: 'Same size (m = −1)',
    realUse: 'Lab optical-bench verification of focal length',
    uVal: -130,
  },
  {
    id: 'mc-4',
    group: 'concave',
    tabLabel: '4. Between C & F',
    objectPos: 'Between C and F',
    imagePos: 'Beyond C',
    nature: 'Real and Inverted',
    size: 'Enlarged / Magnified (|m| > 1)',
    realUse: 'Projector reflectors, concentrated beam lamps',
    uVal: -92,
  },
  {
    id: 'mc-5',
    group: 'concave',
    tabLabel: '5. At F',
    objectPos: 'At Principal Focus F (u = f)',
    imagePos: 'At Infinity (∞)',
    nature: 'Real and Inverted',
    size: 'Highly enlarged (parallel reflected beam)',
    realUse: 'Vehicle headlights, torches, searchlights',
    uVal: -65,
  },
  {
    id: 'mc-6',
    group: 'concave',
    tabLabel: '6. Between P & F',
    objectPos: 'Between Pole P and Focus F',
    imagePos: 'Behind the mirror (v > 0)',
    nature: 'Virtual and Erect',
    size: 'Enlarged / Magnified (m > +1)',
    realUse: 'Shaving mirrors, Dentist’s inspection mirrors, makeup mirrors',
    uVal: -36,
  },
  {
    id: 'mx-1',
    group: 'convex',
    tabLabel: 'Convex 1. At ∞',
    objectPos: 'At Infinity (∞)',
    imagePos: 'At Focus F (behind mirror)',
    nature: 'Virtual and Erect',
    size: 'Highly diminished (point-sized)',
    realUse: 'Wide-angle street-light reflectors',
    uVal: 'inf',
  },
  {
    id: 'mx-2',
    group: 'convex',
    tabLabel: 'Convex 2. Finite',
    objectPos: 'Between Infinity and Pole P',
    imagePos: 'Between P and F (behind mirror)',
    nature: 'Virtual and Erect',
    size: 'Diminished (0 < m < +1)',
    realUse: 'Vehicle rear-view side mirrors, blind-turn road mirrors, shop security mirrors',
    uVal: -105,
  },
];

function MirrorAtlasVisual() {
  const [selectedId, setSelectedId] = useState<string>('mc-2');
  const active = MIRROR_CASES.find((c) => c.id === selectedId) ?? MIRROR_CASES[1];

  const axisY = 128;
  const fMag = 65;
  const poleX = active.group === 'concave' ? 320 : 215;
  const fSigned = active.group === 'concave' ? -fMag : fMag;
  const fX = poleX + fSigned;
  const cX = poleX + 2 * fSigned;
  const hObj = 42;

  // Render hatching marks on the back (right side) of mirror curve
  const hatchLines = Array.from({ length: 13 }, (_, idx) => {
    const y = 44 + idx * 14;
    const dy = y - axisY;
    const curveShift = active.group === 'concave' ? -(dy * dy) / 380 : (dy * dy) / 380;
    const mx = poleX + curveShift;
    return { x1: mx, y1: y, x2: mx + 8, y2: y - 7 };
  });

  const mirrorPath =
    active.group === 'concave'
      ? `M ${poleX - 24} 38 Q ${poleX + 20} ${axisY} ${poleX - 24} 218`
      : `M ${poleX + 24} 38 Q ${poleX - 20} ${axisY} ${poleX + 24} 218`;

  const renderRays = () => {
    if (active.uVal === 'inf') {
      if (active.group === 'concave') {
        return (
          <g>
            <RaySegment x1={25} y1={axisY - 46} x2={poleX - 4} y2={axisY - 46} color="#0284c7" />
            <RaySegment x1={25} y1={axisY + 46} x2={poleX - 4} y2={axisY + 46} color="#0284c7" />
            <RaySegment x1={poleX - 4} y1={axisY - 46} x2={fX - 45} y2={axisY + 32} color="#ea580c" arrowT={0.42} />
            <RaySegment x1={poleX - 4} y1={axisY + 46} x2={fX - 45} y2={axisY - 32} color="#ea580c" arrowT={0.42} />
            <circle cx={fX} cy={axisY} r="4.5" fill="#dc2626" />
            <text x={fX} y={axisY - 12} textAnchor="middle" fontSize="11" fontWeight="800" fill="#dc2626">
              Real Focus (A'B')
            </text>
          </g>
        );
      }
      // Convex at infinity
      return (
        <g>
          <RaySegment x1={25} y1={axisY - 46} x2={poleX + 5} y2={axisY - 46} color="#0284c7" />
          <RaySegment x1={25} y1={axisY + 46} x2={poleX + 5} y2={axisY + 46} color="#0284c7" />
          {/* Reflected diverging rays away from F */}
          <RaySegment x1={poleX + 5} y1={axisY - 46} x2={90} y2={axisY - 108} color="#ea580c" arrowT={0.45} />
          <RaySegment x1={poleX + 5} y1={axisY + 46} x2={90} y2={axisY + 108} color="#ea580c" arrowT={0.45} />
          {/* Virtual extensions behind mirror to F */}
          <RaySegment x1={poleX + 5} y1={axisY - 46} x2={fX} y2={axisY} color="#ea580c" dashed showArrow={false} />
          <RaySegment x1={poleX + 5} y1={axisY + 46} x2={fX} y2={axisY} color="#ea580c" dashed showArrow={false} />
          <circle cx={fX} cy={axisY} r="4.5" fill="#059669" />
          <text x={fX + 6} y={axisY - 12} textAnchor="middle" fontSize="11" fontWeight="800" fill="#059669">
            Virtual Image at F
          </text>
        </g>
      );
    }

    const u = active.uVal;
    const objX = poleX + u;
    const objTopY = axisY - hObj;

    // Parallel ray hits mirror near poleX at y = objTopY
    const hitY = objTopY;
    const hitDx = -(hitY - axisY) * (hitY - axisY) / 760;
    const hitX = active.group === 'concave' ? poleX + hitDx : poleX - hitDx;

    if (Math.abs(u - fSigned) < 0.5) {
      // At F: parallel reflected beams going down-left
      const slope = (axisY - objTopY) / (poleX - objX); // positive down-left
      return (
        <g>
          <UprightArrow x={objX} axisY={axisY} tipY={objTopY} color="#2563eb" topLabel="A" baseLabel="B" />
          {/* Ray 1: Parallel to axis, reflects through F */}
          <RaySegment x1={objX} y1={objTopY} x2={hitX} y2={hitY} color="#0284c7" />
          <RaySegment x1={hitX} y1={hitY} x2={hitX - 180} y2={hitY + (180 * hObj) / fMag} color="#ea580c" arrowT={0.48} />
          {/* Ray 2: To Pole P, reflects parallel */}
          <RaySegment x1={objX} y1={objTopY} x2={poleX} y2={axisY} color="#7c3aed" />
          <RaySegment x1={poleX} y1={axisY} x2={poleX - 180} y2={axisY + 180 * slope} color="#ea580c" arrowT={0.48} />
          <text x={72} y={axisY + 94} fontSize="11" fontWeight="800" fill="#ea580c">
            Parallel beams → Image at ∞
          </text>
        </g>
      );
    }

    // Exact paraxial mirror formula: 1/v = 1/f - 1/u => v = (f * u) / (u - f)
    const v = (fSigned * u) / (u - fSigned);
    const m = -v / u;
    const imgX = poleX + v;
    const imgTipY = axisY - m * hObj;

    // Reflected Ray 1 passes through F (fX, axisY) and (poleX, objTopY)
    // Extend reflected Ray 1 slightly past intersection on left if real
    const r1EndX = v < 0 ? Math.min(imgX - 30, 30) : poleX - 135;
    const r1EndY = objTopY + ((r1EndX - poleX) / (-fSigned)) * hObj;

    // Ray 2 to Pole P reflects symmetrically into left half
    const r2EndX = v < 0 ? Math.min(imgX - 30, 30) : poleX - 135;
    const r2EndY = axisY + ((r2EndX - poleX) / u) * hObj;

    return (
      <g>
        <UprightArrow x={objX} axisY={axisY} tipY={objTopY} color="#2563eb" topLabel="A" baseLabel="B" />

        {/* Ray 1 Incident: parallel to principal axis */}
        <RaySegment x1={objX} y1={objTopY} x2={hitX} y2={hitY} color="#0284c7" />
        {/* Ray 1 Reflected: real light goes left (x <= hitX) */}
        <RaySegment x1={hitX} y1={hitY} x2={r1EndX} y2={r1EndY} color="#ea580c" arrowT={0.42} />
        {/* Virtual extension if virtual image (v > 0) */}
        {v > 0 && (
          <RaySegment
            x1={hitX}
            y1={hitY}
            x2={imgX}
            y2={imgTipY}
            color="#ea580c"
            dashed
            showArrow={false}
          />
        )}
        {/* For convex mirror, also dash to F if imgX != fX */}
        {active.group === 'convex' && (
          <RaySegment
            x1={imgX}
            y1={imgTipY}
            x2={fX}
            y2={axisY}
            color="#ea580c"
            dashed
            showArrow={false}
            strokeWidth={1.6}
          />
        )}

        {/* Ray 2 Incident: to Pole P */}
        <RaySegment x1={objX} y1={objTopY} x2={poleX} y2={axisY} color="#7c3aed" />
        {/* Ray 2 Reflected: symmetric angle */}
        <RaySegment x1={poleX} y1={axisY} x2={r2EndX} y2={r2EndY} color="#d97706" arrowT={0.42} />
        {/* Virtual extension of Ray 2 */}
        {v > 0 && (
          <RaySegment
            x1={poleX}
            y1={axisY}
            x2={imgX}
            y2={imgTipY}
            color="#d97706"
            dashed
            showArrow={false}
          />
        )}

        <UprightArrow
          x={imgX}
          axisY={axisY}
          tipY={imgTipY}
          color={v > 0 ? '#059669' : '#dc2626'}
          dashed={v > 0}
          topLabel="A'"
          baseLabel="B'"
        />
      </g>
    );
  };

  return (
    <div className="no-word-lookup select-none space-y-3">
      {/* Group & Case Buttons */}
      <div className="flex flex-wrap gap-1.5">
        {MIRROR_CASES.map((c) => {
          const isSelected = c.id === active.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedId(c.id)}
              className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition cursor-pointer border ${
                isSelected
                  ? c.group === 'concave'
                    ? 'bg-cyan-600 border-cyan-600 text-white shadow-xs'
                    : 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-400 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300'
              }`}
            >
              {c.group === 'concave' ? `Concave ${c.tabLabel}` : c.tabLabel}
            </button>
          );
        })}
      </div>

      {/* SVG Stage */}
      <div className="rounded-xl border border-slate-200 bg-white p-2 sm:p-3 dark:border-slate-800 dark:bg-slate-950">
        <svg viewBox="0 0 430 256" className="w-full h-auto max-h-72" aria-label="Spherical mirror ray diagram">
          {/* Principal Axis */}
          <line x1="16" y1={axisY} x2="414" y2={axisY} stroke="#94a3b8" strokeWidth="1.4" />
          {/* Mirror Curve */}
          <path d={mirrorPath} fill="none" stroke="#0891b2" strokeWidth="3.5" strokeLinecap="round" />
          {/* Mirror Back Hatching */}
          {hatchLines.map((h, i) => (
            <line key={i} x1={h.x1} y1={h.y1} x2={h.x2} y2={h.y2} stroke="#64748b" strokeWidth="1.3" />
          ))}

          {/* Points C, F, P */}
          <circle cx={cX} cy={axisY} r="3.5" fill="#475569" />
          <text x={cX} y={axisY + 16} textAnchor="middle" fontSize="11" fontWeight="800" fill="#475569">
            C
          </text>
          <circle cx={fX} cy={axisY} r="3.5" fill="#475569" />
          <text x={fX} y={axisY + 16} textAnchor="middle" fontSize="11" fontWeight="800" fill="#475569">
            F
          </text>
          <circle cx={poleX} cy={axisY} r="3.5" fill="#0891b2" />
          <text x={poleX + 10} y={axisY + 16} textAnchor="middle" fontSize="11" fontWeight="800" fill="#0891b2">
            P
          </text>

          {renderRays()}

          {/* Legend */}
          <text x="20" y="20" fontSize="10.5" fontWeight="700" fill="#64748b">
            {active.group === 'concave' ? 'CONCAVE MIRROR (f < 0)' : 'CONVEX MIRROR (f > 0)'} • Light from Left (u {'<'} 0)
          </text>
        </svg>
      </div>

      {/* Summary Strip */}
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 text-xs">
        <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
          <div className="text-[10px] font-extrabold uppercase text-slate-500">Object &amp; Image Position</div>
          <div className="font-bold text-slate-900 dark:text-white mt-0.5">{active.imagePos}</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">Object: {active.objectPos}</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
          <div className="text-[10px] font-extrabold uppercase text-slate-500">Nature of Image</div>
          <div
            className={`font-bold mt-0.5 ${
              active.nature.includes('Virtual')
                ? 'text-emerald-700 dark:text-emerald-400'
                : 'text-rose-700 dark:text-rose-400'
            }`}
          >
            {active.nature}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">
            {active.nature.includes('Virtual') ? 'Virtual = +m, Erect' : 'Real = −m, Inverted'}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
          <div className="text-[10px] font-extrabold uppercase text-slate-500">Relative Size</div>
          <div className="font-bold text-slate-900 dark:text-white mt-0.5">{active.size}</div>
        </div>
        <div className="rounded-xl border border-cyan-200 bg-cyan-50/70 p-2.5 dark:border-cyan-900/60 dark:bg-cyan-950/30">
          <div className="text-[10px] font-extrabold uppercase text-cyan-800 dark:text-cyan-300">CBSE Real-Life Use</div>
          <div className="font-semibold text-cyan-950 dark:text-cyan-100 mt-0.5">{active.realUse}</div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2. LENS 6+2 CASES ATLAS + MIRROR VS LENS SIGN FLIP SHIELD
   ========================================================================= */

interface LensCaseInfo {
  id: string;
  group: 'convex' | 'concave';
  tabLabel: string;
  objectPos: string;
  imagePos: string;
  nature: string;
  size: string;
  realUse: string;
  uVal: number | 'inf';
}

const LENS_CASES: LensCaseInfo[] = [
  {
    id: 'lx-1',
    group: 'convex',
    tabLabel: 'Convex 1. At ∞',
    objectPos: 'At Infinity (∞)',
    imagePos: 'At Focus F₂ (other side)',
    nature: 'Real and Inverted',
    size: 'Highly diminished (point-sized)',
    realUse: 'Burning glass, refracting telescope objective',
    uVal: 'inf',
  },
  {
    id: 'lx-2',
    group: 'convex',
    tabLabel: 'Convex 2. Beyond 2F₁',
    objectPos: 'Beyond 2F₁',
    imagePos: 'Between F₂ and 2F₂',
    nature: 'Real and Inverted',
    size: 'Diminished (|m| < 1)',
    realUse: 'Camera lens, human crystalline eye lens',
    uVal: -155,
  },
  {
    id: 'lx-3',
    group: 'convex',
    tabLabel: 'Convex 3. At 2F₁',
    objectPos: 'At 2F₁ (u = −2f)',
    imagePos: 'At 2F₂ (v = +2f)',
    nature: 'Real and Inverted',
    size: 'Same size (m = −1)',
    realUse: '1:1 document copier, optical bench f-measurement',
    uVal: -116,
  },
  {
    id: 'lx-4',
    group: 'convex',
    tabLabel: 'Convex 4. F₁–2F₁',
    objectPos: 'Between F₁ and 2F₁',
    imagePos: 'Beyond 2F₂',
    nature: 'Real and Inverted',
    size: 'Enlarged / Magnified (|m| > 1)',
    realUse: 'Slide & film projectors, microscope objective',
    uVal: -82,
  },
  {
    id: 'lx-5',
    group: 'convex',
    tabLabel: 'Convex 5. At F₁',
    objectPos: 'At Focus F₁ (u = −f)',
    imagePos: 'At Infinity (∞)',
    nature: 'Real and Inverted',
    size: 'Infinitely enlarged (parallel beam)',
    realUse: 'Optical collimator, lighthouse beam lens',
    uVal: -58,
  },
  {
    id: 'lx-6',
    group: 'convex',
    tabLabel: 'Convex 6. F₁–O',
    objectPos: 'Between Focus F₁ and Optical Centre O',
    imagePos: 'On the SAME side as object (v < 0)',
    nature: 'Virtual and Erect',
    size: 'Enlarged / Magnified (m > +1)',
    realUse: 'Simple microscope / magnifying glass, watchmaker’s loupe',
    uVal: -34,
  },
  {
    id: 'lc-1',
    group: 'concave',
    tabLabel: 'Concave 1. At ∞',
    objectPos: 'At Infinity (∞)',
    imagePos: 'At Focus F₁ (same side as object)',
    nature: 'Virtual and Erect',
    size: 'Highly diminished (point-sized)',
    realUse: 'Wide-angle beam diverging optics',
    uVal: 'inf',
  },
  {
    id: 'lc-2',
    group: 'concave',
    tabLabel: 'Concave 2. Finite',
    objectPos: 'Between Infinity and O',
    imagePos: 'Between F₁ and O (same side)',
    nature: 'Virtual and Erect',
    size: 'Diminished (0 < m < +1)',
    realUse: 'Myopia correction spectacles, door peepholes',
    uVal: -102,
  },
];

function LensAtlasVisual() {
  const [selectedId, setSelectedId] = useState<string>('lx-2');
  const active = LENS_CASES.find((c) => c.id === selectedId) ?? LENS_CASES[1];

  const axisY = 128;
  const fMag = 58;
  const oX = 225;
  const f1X = oX - fMag;
  const twoF1X = oX - 2 * fMag;
  const f2X = oX + fMag;
  const twoF2X = oX + 2 * fMag;
  const fSigned = active.group === 'convex' ? fMag : -fMag;
  const hObj = 38;

  const lensShape =
    active.group === 'convex'
      ? `M ${oX} 36 Q ${oX + 18} ${axisY} ${oX} 220 Q ${oX - 18} ${axisY} ${oX} 36 Z`
      : `M ${oX - 14} 36 Q ${oX - 2} ${axisY} ${oX - 14} 220 L ${oX + 14} 220 Q ${oX + 2} ${axisY} ${oX + 14} 36 Z`;

  const renderLensRays = () => {
    if (active.uVal === 'inf') {
      if (active.group === 'convex') {
        return (
          <g>
            <RaySegment x1={25} y1={axisY - 40} x2={oX} y2={axisY - 40} color="#0284c7" />
            <RaySegment x1={25} y1={axisY + 40} x2={oX} y2={axisY + 40} color="#0284c7" />
            <RaySegment x1={oX} y1={axisY - 40} x2={f2X + 42} y2={axisY + 29} color="#ea580c" arrowT={0.45} />
            <RaySegment x1={oX} y1={axisY + 40} x2={f2X + 42} y2={axisY - 29} color="#ea580c" arrowT={0.45} />
            <circle cx={f2X} cy={axisY} r="4.5" fill="#dc2626" />
            <text x={f2X} y={axisY - 12} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#dc2626">
              Real Focus at F₂
            </text>
          </g>
        );
      }
      // Concave lens at infinity
      return (
        <g>
          <RaySegment x1={25} y1={axisY - 40} x2={oX} y2={axisY - 40} color="#0284c7" />
          <RaySegment x1={25} y1={axisY + 40} x2={oX} y2={axisY + 40} color="#0284c7" />
          <RaySegment x1={oX} y1={axisY - 40} x2={380} y2={axisY - 107} color="#ea580c" arrowT={0.45} />
          <RaySegment x1={oX} y1={axisY + 40} x2={380} y2={axisY + 107} color="#ea580c" arrowT={0.45} />
          <RaySegment x1={oX} y1={axisY - 40} x2={f1X} y2={axisY} color="#ea580c" dashed showArrow={false} />
          <RaySegment x1={oX} y1={axisY + 40} x2={f1X} y2={axisY} color="#ea580c" dashed showArrow={false} />
          <circle cx={f1X} cy={axisY} r="4.5" fill="#059669" />
          <text x={f1X} y={axisY - 12} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#059669">
            Virtual Focus at F₁
          </text>
        </g>
      );
    }

    const u = active.uVal;
    const objX = oX + u;
    const objTopY = axisY - hObj;

    if (Math.abs(u + fSigned) < 0.5 && active.group === 'convex') {
      // Object at F1 -> parallel emergent rays
      const slope = hObj / fMag;
      return (
        <g>
          <UprightArrow x={objX} axisY={axisY} tipY={objTopY} color="#2563eb" topLabel="A" baseLabel="B" />
          <RaySegment x1={objX} y1={objTopY} x2={oX} y2={objTopY} color="#0284c7" />
          <RaySegment x1={oX} y1={objTopY} x2={oX + 165} y2={objTopY + 165 * slope} color="#ea580c" arrowT={0.45} />
          <RaySegment x1={objX} y1={objTopY} x2={oX} y2={axisY} color="#7c3aed" />
          <RaySegment x1={oX} y1={axisY} x2={oX + 165} y2={axisY + 165 * slope} color="#d97706" arrowT={0.45} />
          <text x={oX + 95} y={axisY + 86} fontSize="11" fontWeight="800" fill="#ea580c">
            Parallel rays → Image at ∞
          </text>
        </g>
      );
    }

    // Thin lens formula: 1/v = 1/f + 1/u => v = (f * u) / (f + u)
    const v = (fSigned * u) / (fSigned + u);
    const m = v / u;
    const imgX = oX + v;
    const imgTipY = axisY - m * hObj;

    // Refracted rays always go right (x >= oX)
    const rightEndX = v > 0 ? Math.max(imgX + 26, oX + 130) : oX + 145;
    const r1RightY = objTopY + ((rightEndX - oX) / fSigned) * hObj;
    // Ray through optical centre O(oX, axisY) from object top (oX + u, axisY - hObj)
    const r2RightExactY = axisY + (rightEndX - oX) * (hObj / -u);

    return (
      <g>
        <UprightArrow x={objX} axisY={axisY} tipY={objTopY} color="#2563eb" topLabel="A" baseLabel="B" />

        {/* Ray 1: Parallel to O plane, refracts toward/from focus */}
        <RaySegment x1={objX} y1={objTopY} x2={oX} y2={objTopY} color="#0284c7" />
        <RaySegment x1={oX} y1={objTopY} x2={rightEndX} y2={r1RightY} color="#ea580c" arrowT={0.42} />

        {/* Ray 2: Straight through optical centre O */}
        <RaySegment x1={objX} y1={objTopY} x2={oX} y2={axisY} color="#7c3aed" />
        <RaySegment x1={oX} y1={axisY} x2={rightEndX} y2={r2RightExactY} color="#d97706" arrowT={0.45} />

        {/* Virtual backward dashed rays when v < 0 */}
        {v < 0 && (
          <g>
            <RaySegment
              x1={oX}
              y1={objTopY}
              x2={active.group === 'concave' ? f1X : imgX}
              y2={active.group === 'concave' ? axisY : imgTipY}
              color="#ea580c"
              dashed
              showArrow={false}
            />
            {imgX < objX && (
              <RaySegment
                x1={objX}
                y1={objTopY}
                x2={imgX}
                y2={imgTipY}
                color="#d97706"
                dashed
                showArrow={false}
              />
            )}
          </g>
        )}

        <UprightArrow
          x={imgX}
          axisY={axisY}
          tipY={imgTipY}
          color={v < 0 ? '#059669' : '#dc2626'}
          dashed={v < 0}
          topLabel="A'"
          baseLabel="B'"
        />
      </g>
    );
  };

  return (
    <div className="no-word-lookup select-none space-y-3">
      {/* Case Buttons */}
      <div className="flex flex-wrap gap-1.5">
        {LENS_CASES.map((c) => {
          const isSelected = c.id === active.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedId(c.id)}
              className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition cursor-pointer border ${
                isSelected
                  ? c.group === 'convex'
                    ? 'bg-teal-600 border-teal-600 text-white shadow-xs'
                    : 'bg-indigo-600 border-indigo-600 text-white shadow-xs'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-teal-400 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300'
              }`}
            >
              {c.tabLabel}
            </button>
          );
        })}
      </div>

      {/* SVG Stage */}
      <div className="rounded-xl border border-slate-200 bg-white p-2 sm:p-3 dark:border-slate-800 dark:bg-slate-950">
        <svg viewBox="0 0 450 256" className="w-full h-auto max-h-72" aria-label="Spherical lens ray diagram">
          <line x1="16" y1={axisY} x2="434" y2={axisY} stroke="#94a3b8" strokeWidth="1.4" />
          <line x1={oX} y1="24" x2={oX} y2="232" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 4" />
          <path d={lensShape} fill="rgba(14, 165, 233, 0.14)" stroke="#0284c7" strokeWidth="2.4" />

          {[
            { x: twoF1X, lbl: '2F₁' },
            { x: f1X, lbl: 'F₁' },
            { x: oX, lbl: 'O' },
            { x: f2X, lbl: 'F₂' },
            { x: twoF2X, lbl: '2F₂' },
          ].map((pt) => (
            <g key={pt.lbl}>
              <circle cx={pt.x} cy={axisY} r="3.3" fill={pt.lbl === 'O' ? '#0284c7' : '#475569'} />
              <text
                x={pt.lbl === 'O' ? pt.x + 10 : pt.x}
                y={axisY + 16}
                textAnchor="middle"
                fontSize="10.5"
                fontWeight="800"
                fill={pt.lbl === 'O' ? '#0284c7' : '#475569'}
              >
                {pt.lbl}
              </text>
            </g>
          ))}

          {renderLensRays()}

          <text x="18" y="20" fontSize="10.5" fontWeight="700" fill="#64748b">
            {active.group === 'convex' ? 'CONVEX LENS (f > 0, P > 0)' : 'CONCAVE LENS (f < 0, P < 0)'}
          </text>
        </svg>
      </div>

      {/* Case Summary */}
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 text-xs">
        <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
          <div className="text-[10px] font-extrabold uppercase text-slate-500">Image Position</div>
          <div className="font-bold text-slate-900 dark:text-white mt-0.5">{active.imagePos}</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">Object: {active.objectPos}</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
          <div className="text-[10px] font-extrabold uppercase text-slate-500">Nature</div>
          <div
            className={`font-bold mt-0.5 ${
              active.nature.includes('Virtual')
                ? 'text-emerald-700 dark:text-emerald-400'
                : 'text-rose-700 dark:text-rose-400'
            }`}
          >
            {active.nature}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
          <div className="text-[10px] font-extrabold uppercase text-slate-500">Relative Size</div>
          <div className="font-bold text-slate-900 dark:text-white mt-0.5">{active.size}</div>
        </div>
        <div className="rounded-xl border border-teal-200 bg-teal-50/70 p-2.5 dark:border-teal-900/60 dark:bg-teal-950/30">
          <div className="text-[10px] font-extrabold uppercase text-teal-800 dark:text-teal-300">Application</div>
          <div className="font-semibold text-teal-950 dark:text-teal-100 mt-0.5">{active.realUse}</div>
        </div>
      </div>

      {/* Mirror vs Lens Sign Flip Shield Card */}
      <div className="rounded-xl border-2 border-amber-300 bg-amber-50/70 p-3 dark:border-amber-800 dark:bg-amber-950/25">
        <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-900 dark:text-amber-300 mb-2">
          <ShieldAlert className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          Mirror vs Lens Sign-Flip Shield (Never Swap the + / −!)
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2 text-xs">
          <div className="rounded-lg border border-cyan-200 bg-white p-2.5 dark:border-cyan-900 dark:bg-slate-900">
            <div className="font-extrabold text-cyan-800 dark:text-cyan-300">SPHERICAL MIRRORS</div>
            <div className="font-mono font-bold text-sm text-slate-900 dark:text-white mt-1">
              1/v <span className="text-cyan-600">+</span> 1/u = 1/f &nbsp;|&nbsp; m ={' '}
              <span className="text-rose-600">−</span>v/u
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
              <code>f</code>: Concave = <strong>−</strong>, Convex = <strong>+</strong> &nbsp;|&nbsp;{' '}
              <code>u</code> is ALWAYS <strong>−</strong>
            </div>
          </div>
          <div className="rounded-lg border border-teal-200 bg-white p-2.5 dark:border-teal-900 dark:bg-slate-900">
            <div className="font-extrabold text-teal-800 dark:text-teal-300">SPHERICAL LENSES</div>
            <div className="font-mono font-bold text-sm text-slate-900 dark:text-white mt-1">
              1/v <span className="text-rose-600">−</span> 1/u = 1/f &nbsp;|&nbsp; m ={' '}
              <span className="text-emerald-600">+</span>v/u
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
              <code>f</code>: Convex = <strong>+</strong>, Concave = <strong>−</strong> &nbsp;|&nbsp;{' '}
              <code>P = 1/f(m) = 100/f(cm)</code> in <strong>D</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. HUMAN EYE CROSS-SECTION (SELF-TEST) & 3-PANEL MYOPIA / HYPERMETROPIA
   ========================================================================= */

const EYE_LABELS = [
  { id: 1, name: 'Cornea', x: 58, y: 80, lx: 28, ly: 32, note: 'Most refraction occurs here' },
  { id: 2, name: 'Iris', x: 96, y: 72, lx: 84, ly: 24, note: 'Controls pupil size' },
  { id: 3, name: 'Pupil', x: 95, y: 105, lx: 22, ly: 112, note: 'Regulates light entering eye' },
  { id: 4, name: 'Crystalline Lens', x: 118, y: 105, lx: 146, ly: 24, note: 'Fine-tunes focal length' },
  { id: 5, name: 'Ciliary Muscles', x: 118, y: 60, lx: 215, ly: 26, note: 'Changes lens curvature (accommodation)' },
  { id: 6, name: 'Retina', x: 254, y: 74, lx: 284, ly: 42, note: 'Real & inverted image screen' },
  { id: 7, name: 'Optic Nerve', x: 278, y: 114, lx: 310, ly: 104, note: 'Sends electrical signals to brain' },
  { id: 8, name: 'Blind Spot', x: 257, y: 118, lx: 294, ly: 162, note: 'No light-sensitive cells here' },
];

function HumanEyeAndDefectsVisual() {
  const [hideLabels, setHideLabels] = useState(false);
  const [revealedIds, setRevealedIds] = useState<number[]>([]);

  const togglePin = (id: number) => {
    setRevealedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="no-word-lookup select-none space-y-4">
      {/* Part A: Human Eye Anatomy with Self-Test Toggle */}
      <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-800 dark:text-cyan-300">
            Part A: Human Eye Anatomy (NCERT Fig. 10.1)
          </div>
          <button
            type="button"
            onClick={() => {
              setHideLabels((h) => !h);
              setRevealedIds([]);
            }}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold cursor-pointer transition border ${
              hideLabels
                ? 'bg-amber-600 border-amber-600 text-white'
                : 'bg-cyan-50 border-cyan-300 text-cyan-900 hover:bg-cyan-100 dark:bg-cyan-950/60 dark:border-cyan-800 dark:text-cyan-200'
            }`}
          >
            {hideLabels ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
            {hideLabels ? 'Exam Self-Test ON (Click Pins or Reveal All)' : 'Exam Self-Test: Hide Labels'}
          </button>
        </div>

        <svg viewBox="0 0 380 205" className="w-full h-auto max-h-64" aria-label="Human eye anatomy cross section">
          {/* Eyeball outer sclera */}
          <circle cx="176" cy="105" r="80" fill="rgba(224,242,254,0.35)" stroke="#475569" strokeWidth="2.5" />
          {/* Retina inner lining */}
          <path
            d="M 155 31 A 74 74 0 1 1 155 179"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3.2"
          />
          {/* Optic nerve exit */}
          <path d="M 250 96 L 285 92 M 250 118 L 285 124" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="252" y="98" width="32" height="18" fill="rgba(251,191,36,0.22)" />

          {/* Cornea bulge */}
          <path
            d="M 105 63 Q 68 105 105 147"
            fill="rgba(186,230,253,0.48)"
            stroke="#0284c7"
            strokeWidth="2.8"
          />
          {/* Iris (upper & lower) */}
          <line x1="100" y1="66" x2="100" y2="90" stroke="#0d9488" strokeWidth="5.5" strokeLinecap="round" />
          <line x1="100" y1="120" x2="100" y2="144" stroke="#0d9488" strokeWidth="5.5" strokeLinecap="round" />
          {/* Ciliary muscles */}
          <path d="M 114 50 L 122 72 M 114 160 L 122 138" stroke="#dc2626" strokeWidth="4.2" strokeLinecap="round" />
          {/* Crystalline lens */}
          <ellipse cx="120" cy="105" rx="11" ry="30" fill="rgba(14,165,233,0.28)" stroke="#0369a1" strokeWidth="2" />
          {/* Blind spot marker */}
          <circle cx="255" cy="110" r="4" fill="#dc2626" />

          {/* Vitreous & Aqueous labels */}
          <text x="182" y="109" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#64748b">
            Vitreous Humour
          </text>

          {/* Interactive Pointers */}
          {EYE_LABELS.map((item) => {
            const isShown = !hideLabels || revealedIds.includes(item.id);
            return (
              <g
                key={item.id}
                onClick={() => hideLabels && togglePin(item.id)}
                className={hideLabels ? 'cursor-pointer' : ''}
              >
                <line
                  x1={item.x}
                  y1={item.y}
                  x2={item.lx}
                  y2={item.ly}
                  stroke="#64748b"
                  strokeWidth="1.1"
                  strokeDasharray="2 2"
                />
                <circle cx={item.x} cy={item.y} r="3" fill="#0891b2" />
                {isShown ? (
                  <g>
                    <rect
                      x={item.lx - 4}
                      y={item.ly - 10}
                      width={item.name.length * 6.2 + 12}
                      height="17"
                      rx="4"
                      fill="#0f172a"
                      opacity="0.86"
                    />
                    <text x={item.lx + 2} y={item.ly + 2} fontSize="9.5" fontWeight="700" fill="#f8fafc">
                      {item.name}
                    </text>
                  </g>
                ) : (
                  <g>
                    <circle cx={item.lx + 10} cy={item.ly - 1} r="9" fill="#d97706" />
                    <text
                      x={item.lx + 10}
                      y={item.ly + 2.5}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="800"
                      fill="#ffffff"
                    >
                      {item.id}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        <div className="mt-2 flex flex-wrap gap-1.5 text-[11px]">
          {EYE_LABELS.map((item) => (
            <span
              key={item.id}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              <strong>{!hideLabels || revealedIds.includes(item.id) ? item.name : `#${item.id}`}:</strong>{' '}
              {item.note}
            </span>
          ))}
        </div>
      </div>

      {/* Part B: 3-Panel Myopia & Hypermetropia */}
      <div className="space-y-3">
        {/* Myopia Row */}
        <div className="rounded-xl border border-cyan-200 bg-cyan-50/40 p-3 dark:border-cyan-900/60 dark:bg-cyan-950/20">
          <div className="text-xs font-extrabold text-cyan-900 dark:text-cyan-300 mb-2">
            Part B1: Myopia (Near-Sightedness) — Can see near clearly, NOT far! (Power P {'<'} 0, Concave Lens)
          </div>
          <div className="grid gap-2.5 md:grid-cols-3">
            {/* Panel 1: Far point O */}
            <div className="rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                1. Far Point O (Eye sees sharply)
              </div>
              <svg viewBox="0 0 210 92" className="w-full h-24" aria-label="Myopia far point">
                <circle cx="155" cy="46" r="34" fill="rgba(14,165,233,0.12)" stroke="#475569" strokeWidth="1.8" />
                <ellipse cx="127" cy="46" rx="4.5" ry="16" fill="#38bdf8" opacity="0.7" />
                <circle cx="24" cy="46" r="3" fill="#2563eb" />
                <text x="24" y="36" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#2563eb">O</text>
                <RaySegment x1={24} y1={46} x2={127} y2={33} color="#0284c7" strokeWidth={1.6} />
                <RaySegment x1={24} y1={46} x2={127} y2={59} color="#0284c7" strokeWidth={1.6} />
                <RaySegment x1={127} y1={33} x2={189} y2={46} color="#059669" strokeWidth={1.6} />
                <RaySegment x1={127} y1={59} x2={189} y2={46} color="#059669" strokeWidth={1.6} />
                <circle cx="189" cy="46" r="3" fill="#059669" />
              </svg>
              <div className="text-[10.5px] text-slate-600 dark:text-slate-400">Rays from finite O focus ON retina.</div>
            </div>

            {/* Panel 2: Defect */}
            <div className="rounded-lg border border-rose-200 bg-white p-2 dark:border-rose-900/60 dark:bg-slate-950">
              <div className="text-[11px] font-bold text-rose-700 dark:text-rose-400">
                2. Myopic Eye Defect (Rays from ∞)
              </div>
              <svg viewBox="0 0 210 92" className="w-full h-24" aria-label="Myopia defect in front of retina">
                <circle cx="155" cy="46" r="34" fill="rgba(244,63,94,0.08)" stroke="#475569" strokeWidth="1.8" />
                <ellipse cx="127" cy="46" rx="4.5" ry="16" fill="#38bdf8" opacity="0.7" />
                <RaySegment x1={14} y1={33} x2={127} y2={33} color="#0284c7" strokeWidth={1.6} />
                <RaySegment x1={14} y1={59} x2={127} y2={59} color="#0284c7" strokeWidth={1.6} />
                <RaySegment x1={127} y1={33} x2={169} y2={46} color="#dc2626" strokeWidth={1.6} />
                <RaySegment x1={127} y1={59} x2={169} y2={46} color="#dc2626" strokeWidth={1.6} />
                <circle cx="169" cy="46" r="3.5" fill="#dc2626" />
                <text x="169" y="34" textAnchor="middle" fontSize="9" fontWeight="800" fill="#dc2626">
                  In front!
                </text>
              </svg>
              <div className="text-[10.5px] text-rose-700 dark:text-rose-400">
                Cause: High lens curvature OR elongated eyeball.
              </div>
            </div>

            {/* Panel 3: Correction */}
            <div className="rounded-lg border border-emerald-200 bg-white p-2 dark:border-emerald-900/60 dark:bg-slate-950">
              <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                3. Correction: Concave Lens (−D)
              </div>
              <svg viewBox="0 0 210 92" className="w-full h-24" aria-label="Myopia correction with concave lens">
                <circle cx="158" cy="46" r="33" fill="rgba(16,185,129,0.1)" stroke="#475569" strokeWidth="1.8" />
                <ellipse cx="131" cy="46" rx="4.5" ry="16" fill="#38bdf8" opacity="0.7" />
                {/* Concave corrective lens */}
                <path d="M 88 26 Q 94 46 88 66 L 98 66 Q 92 46 98 26 Z" fill="#0d9488" opacity="0.55" />
                <RaySegment x1={14} y1={36} x2={93} y2={36} color="#0284c7" strokeWidth={1.6} />
                <RaySegment x1={14} y1={56} x2={93} y2={56} color="#0284c7" strokeWidth={1.6} />
                <RaySegment x1={93} y1={36} x2={131} y2={29} color="#0d9488" strokeWidth={1.6} showArrow={false} />
                <RaySegment x1={93} y1={56} x2={131} y2={63} color="#0d9488" strokeWidth={1.6} showArrow={false} />
                <RaySegment x1={93} y1={36} x2={34} y2={46} color="#0d9488" dashed strokeWidth={1.1} showArrow={false} />
                <RaySegment x1={93} y1={56} x2={34} y2={46} color="#0d9488" dashed strokeWidth={1.1} showArrow={false} />
                <circle cx="34" cy="46" r="2.6" fill="#2563eb" />
                <text x="34" y="38" textAnchor="middle" fontSize="9" fontWeight="800" fill="#2563eb">O</text>
                <RaySegment x1={131} y1={29} x2={191} y2={46} color="#059669" strokeWidth={1.6} />
                <RaySegment x1={131} y1={63} x2={191} y2={46} color="#059669" strokeWidth={1.6} />
                <circle cx="191" cy="46" r="3" fill="#059669" />
              </svg>
              <div className="text-[10.5px] text-emerald-700 dark:text-emerald-400">
                u = −∞, v = −(Far Point) ⇒ f {'<'} 0, P {'<'} 0.
              </div>
            </div>
          </div>
        </div>

        {/* Hypermetropia Row */}
        <div className="rounded-xl border border-indigo-200 bg-indigo-50/40 p-3 dark:border-indigo-900/60 dark:bg-indigo-950/20">
          <div className="text-xs font-extrabold text-indigo-900 dark:text-indigo-300 mb-2">
            Part B2: Hypermetropia (Far-Sightedness) — Can see far, NOT near (25 cm)! (Power P {'>'} 0, Convex Lens)
          </div>
          <div className="grid gap-2.5 md:grid-cols-3">
            {/* Panel 1 */}
            <div className="rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                1. Recessed Near Point N' ({'>'} 25 cm)
              </div>
              <svg viewBox="0 0 210 92" className="w-full h-24" aria-label="Hypermetropia recessed near point">
                <circle cx="155" cy="46" r="34" fill="rgba(99,102,241,0.1)" stroke="#475569" strokeWidth="1.8" />
                <ellipse cx="127" cy="46" rx="4.5" ry="16" fill="#38bdf8" opacity="0.7" />
                <circle cx="22" cy="46" r="3" fill="#2563eb" />
                <text x="22" y="36" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#2563eb">N'</text>
                <RaySegment x1={22} y1={46} x2={127} y2={33} color="#0284c7" strokeWidth={1.6} />
                <RaySegment x1={22} y1={46} x2={127} y2={59} color="#0284c7" strokeWidth={1.6} />
                <RaySegment x1={127} y1={33} x2={189} y2={46} color="#059669" strokeWidth={1.6} />
                <RaySegment x1={127} y1={59} x2={189} y2={46} color="#059669" strokeWidth={1.6} />
                <circle cx="189" cy="46" r="3" fill="#059669" />
              </svg>
              <div className="text-[10.5px] text-slate-600 dark:text-slate-400">Rays from N' focus ON retina.</div>
            </div>

            {/* Panel 2 */}
            <div className="rounded-lg border border-rose-200 bg-white p-2 dark:border-rose-900/60 dark:bg-slate-950">
              <div className="text-[11px] font-bold text-rose-700 dark:text-rose-400">
                2. Defect (Object at N = 25 cm)
              </div>
              <svg viewBox="0 0 210 92" className="w-full h-24" aria-label="Hypermetropia defect behind retina">
                <circle cx="148" cy="46" r="33" fill="rgba(244,63,94,0.08)" stroke="#475569" strokeWidth="1.8" />
                <ellipse cx="121" cy="46" rx="4.5" ry="16" fill="#38bdf8" opacity="0.7" />
                <circle cx="52" cy="46" r="3" fill="#2563eb" />
                <text x="52" y="36" textAnchor="middle" fontSize="9" fontWeight="800" fill="#2563eb">N(25cm)</text>
                <RaySegment x1={52} y1={46} x2={121} y2={32} color="#0284c7" strokeWidth={1.6} />
                <RaySegment x1={52} y1={46} x2={121} y2={60} color="#0284c7" strokeWidth={1.6} />
                <RaySegment x1={121} y1={32} x2={198} y2={46} color="#dc2626" strokeWidth={1.6} />
                <RaySegment x1={121} y1={60} x2={198} y2={46} color="#dc2626" strokeWidth={1.6} />
                <circle cx="198" cy="46" r="3.5" fill="#dc2626" />
                <text x="194" y="33" textAnchor="middle" fontSize="9" fontWeight="800" fill="#dc2626">Behind!</text>
              </svg>
              <div className="text-[10.5px] text-rose-700 dark:text-rose-400">
                Cause: Focal length too long OR eyeball too small.
              </div>
            </div>

            {/* Panel 3 */}
            <div className="rounded-lg border border-emerald-200 bg-white p-2 dark:border-emerald-900/60 dark:bg-slate-950">
              <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                3. Correction: Convex Lens (+D)
              </div>
              <svg viewBox="0 0 210 92" className="w-full h-24" aria-label="Hypermetropia correction with convex lens">
                <circle cx="160" cy="46" r="32" fill="rgba(16,185,129,0.1)" stroke="#475569" strokeWidth="1.8" />
                <ellipse cx="133" cy="46" rx="4.5" ry="16" fill="#38bdf8" opacity="0.7" />
                {/* Convex corrective lens */}
                <path d="M 94 25 Q 103 46 94 67 Q 85 46 94 25 Z" fill="#4f46e5" opacity="0.55" />
                <circle cx="56" cy="46" r="3" fill="#2563eb" />
                <text x="56" y="36" textAnchor="middle" fontSize="9" fontWeight="800" fill="#2563eb">N</text>
                <RaySegment x1={56} y1={46} x2={94} y2={31} color="#0284c7" strokeWidth={1.6} />
                <RaySegment x1={56} y1={46} x2={94} y2={61} color="#0284c7" strokeWidth={1.6} />
                <RaySegment x1={94} y1={31} x2={133} y2={35} color="#4f46e5" strokeWidth={1.6} showArrow={false} />
                <RaySegment x1={94} y1={61} x2={133} y2={57} color="#4f46e5" strokeWidth={1.6} showArrow={false} />
                <RaySegment x1={94} y1={31} x2={14} y2={46} color="#4f46e5" dashed strokeWidth={1.1} showArrow={false} />
                <RaySegment x1={94} y1={61} x2={14} y2={46} color="#4f46e5" dashed strokeWidth={1.1} showArrow={false} />
                <circle cx="14" cy="46" r="2.6" fill="#4f46e5" />
                <text x="14" y="37" textAnchor="middle" fontSize="9" fontWeight="800" fill="#4f46e5">N'</text>
                <RaySegment x1={133} y1={35} x2={192} y2={46} color="#059669" strokeWidth={1.6} />
                <RaySegment x1={133} y1={57} x2={192} y2={46} color="#059669" strokeWidth={1.6} />
                <circle cx="192" cy="46" r="3" fill="#059669" />
              </svg>
              <div className="text-[10.5px] text-emerald-700 dark:text-emerald-400">
                u = −25 cm, v = −(Near Point N') ⇒ f {'>'} 0, P {'>'} 0.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   4. PRISM, NEWTON RECOMBINATION, 3-STEP RAINBOW & ATMOSPHERIC REFRACTION
   ========================================================================= */

function PrismRainbowScatteringVisual() {
  return (
    <div className="no-word-lookup select-none grid gap-3 md:grid-cols-2">
      {/* Card 1: Glass Prism Deviation & Dispersion */}
      <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="text-xs font-extrabold text-cyan-800 dark:text-cyan-300 mb-1.5">
          1. Glass Prism: ∠i, ∠r, ∠e, ∠A &amp; Deviation ∠D + VIBGYOR
        </div>
        <svg viewBox="0 0 280 165" className="w-full h-40" aria-label="Glass prism refraction and dispersion">
          {/* Prism ABC */}
          <polygon
            points="135,20 70,138 200,138"
            fill="rgba(56,189,248,0.16)"
            stroke="#0284c7"
            strokeWidth="2.2"
          />
          <text x="135" y="14" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0284c7">A (∠A)</text>
          <text x="61" y="144" fontSize="11" fontWeight="800" fill="#475569">B</text>
          <text x="204" y="144" fontSize="11" fontWeight="800" fill="#475569">C</text>

          {/* Normal NN' at entry face */}
          <line x1="78" y1="74" x2="128" y2="100" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
          {/* Incident ray */}
          <RaySegment x1={20} y1={118} x2={103} y2={87} color="#0f172a" arrowT={0.5} />
          <text x="64" y="92" fontSize="10" fontWeight="800" fill="#0f172a">∠i</text>
          {/* Incident forward dashed extension */}
          <line x1="103" y1={87} x2="188" y2="55" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />

          {/* Dispersed spectrum inside & emerging */}
          <line x1="103" y1="87" x2="167" y2="80" stroke="#dc2626" strokeWidth="1.8" />
          <line x1="103" y1="87" x2="173" y2="91" stroke="#7c3aed" strokeWidth="1.8" />
          <RaySegment x1={167} y1={80} x2={252} y2={100} color="#dc2626" strokeWidth={2} arrowT={0.6} />
          <RaySegment x1={173} y1={91} x2={252} y2={128} color="#7c3aed" strokeWidth={2} arrowT={0.6} />
          <line x1="167" y1="80" x2="252" y2="109" stroke="#f59e0b" strokeWidth="1.4" />
          <line x1="170" y1="86" x2="252" y2="118" stroke="#16a34a" strokeWidth="1.4" />

          {/* Backward extension for ∠D */}
          <line x1="167" y1="80" x2="132" y2="72" stroke="#dc2626" strokeWidth="1.1" strokeDasharray="3 3" />
          <text x="150" y="64" fontSize="10" fontWeight="800" fill="#dc2626">∠D</text>
          <text x="128" y="96" fontSize="9.5" fontWeight="800" fill="#475569">∠r</text>
          <text x="188" y="81" fontSize="9.5" fontWeight="800" fill="#475569">∠e</text>

          <text x="256" y="103" fontSize="10" fontWeight="800" fill="#dc2626">R (Least bend)</text>
          <text x="256" y="132" fontSize="10" fontWeight="800" fill="#7c3aed">V (Most bend)</text>
        </svg>
        <p className="text-[11px] text-slate-600 dark:text-slate-400">
          Rule: <strong>∠i + ∠e = ∠A + ∠D</strong>. Emergent ray ALWAYS bends toward prism base BC.
        </p>
      </div>

      {/* Card 2: Newton Twin Prisms */}
      <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="text-xs font-extrabold text-indigo-800 dark:text-indigo-300 mb-1.5">
          2. Newton’s Recombination Twin Prisms (P₁ Upright + P₂ Inverted)
        </div>
        <svg viewBox="0 0 280 165" className="w-full h-40" aria-label="Newton twin prism recombination">
          {/* Prism P1 upright */}
          <polygon points="90,32 52,126 128,126" fill="rgba(56,189,248,0.15)" stroke="#0284c7" strokeWidth="2" />
          <text x="90" y="142" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#0284c7">P₁</text>
          {/* Prism P2 inverted */}
          <polygon points="154,32 230,32 192,126" fill="rgba(16,185,129,0.15)" stroke="#059669" strokeWidth="2" />
          <text x="192" y="25" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#059669">P₂ (Inverted)</text>

          {/* White ray in */}
          <RaySegment x1={12} y1={88} x2={69} y2={84} color="#475569" strokeWidth={2.5} arrowT={0.5} />
          <text x="38" y="75" textAnchor="middle" fontSize="10" fontWeight="800" fill="#475569">White Light</text>
          {/* Spectrum between prisms */}
          <line x1="69" y1="84" x2="112" y2="76" stroke="#dc2626" strokeWidth="1.6" />
          <line x1="69" y1="84" x2="117" y2="92" stroke="#7c3aed" strokeWidth="1.6" />
          <line x1="112" y1="76" x2="170" y2="76" stroke="#dc2626" strokeWidth="2" />
          <line x1="114" y1="84" x2="173" y2="84" stroke="#16a34a" strokeWidth="1.6" />
          <line x1="117" y1="92" x2="176" y2="92" stroke="#7c3aed" strokeWidth="2" />
          {/* Recombine inside P2 */}
          <line x1="170" y1="76" x2="213" y2="78" stroke="#dc2626" strokeWidth="1.6" />
          <line x1="176" y1="92" x2="213" y2="78" stroke="#7c3aed" strokeWidth="1.6" />
          {/* Emergent White ray */}
          <RaySegment x1={213} y1={78} x2={268} y2={74} color="#475569" strokeWidth={2.6} arrowT={0.55} />
          <text x="242" y="64" textAnchor="middle" fontSize="10" fontWeight="800" fill="#059669">White Light!</text>
        </svg>
        <p className="text-[11px] text-slate-600 dark:text-slate-400">
          Proves white sunlight consists of 7 colours; opposite dispersion of P₂ cancels P₁.
        </p>
      </div>

      {/* Card 3: 3-Step Raindrop Rainbow */}
      <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="text-xs font-extrabold text-emerald-800 dark:text-emerald-300 mb-1.5">
          3. Raindrop 3-Step Rainbow (Refraction+Dispersion → Internal Reflection → Refraction)
        </div>
        <svg viewBox="0 0 280 165" className="w-full h-40" aria-label="Water droplet 3-step rainbow formation">
          {/* Raindrop */}
          <circle cx="170" cy="82" r="52" fill="rgba(56,189,248,0.18)" stroke="#0284c7" strokeWidth="2.2" />
          <text x="170" y="23" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0284c7">Raindrop (Tiny Prism)</text>

          {/* Sunlight from left */}
          <RaySegment x1={18} y1={56} x2={125} y2={56} color="#f59e0b" strokeWidth={2.6} arrowT={0.55} />
          <text x="64" y="47" textAnchor="middle" fontSize="10" fontWeight="800" fill="#d97706">Sunlight</text>

          {/* Step 1: Refraction + Dispersion */}
          <line x1="125" y1="56" x2="218" y2="72" stroke="#dc2626" strokeWidth="1.9" />
          <line x1="125" y1="56" x2="221" y2="84" stroke="#7c3aed" strokeWidth="1.9" />
          <circle cx="125" cy="56" r="3" fill="#0284c7" />
          <text x="96" y="74" fontSize="8.8" fontWeight="800" fill="#0284c7">1. Refract+Disp</text>

          {/* Step 2: Internal reflection */}
          <line x1="218" y1="72" x2="144" y2="124" stroke="#dc2626" strokeWidth="1.9" />
          <line x1="221" y1="84" x2="138" y2="117" stroke="#7c3aed" strokeWidth="1.9" />
          <text x="235" y="79" fontSize="8.8" fontWeight="800" fill="#dc2626">2. Internal</text>
          <text x="235" y="90" fontSize="8.8" fontWeight="800" fill="#dc2626">Reflection</text>

          {/* Step 3: Refraction to eye */}
          <RaySegment x1={144} y1={124} x2={52} y2={152} color="#dc2626" strokeWidth={2} arrowT={0.5} />
          <RaySegment x1={138} y1={117} x2={52} y2={133} color="#7c3aed" strokeWidth={2} arrowT={0.5} />
          <text x="35" y="135" fontSize="9.5" fontWeight="800" fill="#7c3aed">V (40°)</text>
          <text x="35" y="155" fontSize="9.5" fontWeight="800" fill="#dc2626">R (42°)</text>
          <text x="115" y="154" fontSize="8.8" fontWeight="800" fill="#059669">3. Refraction to Eye</text>
        </svg>
        <p className="text-[11px] text-slate-600 dark:text-slate-400">
          Always formed <strong>opposite the Sun</strong>. Must write all 3 steps in CBSE 3M answers!
        </p>
      </div>

      {/* Card 4: Atmospheric Refraction */}
      <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="text-xs font-extrabold text-amber-800 dark:text-amber-300 mb-1.5">
          4. Atmospheric Refraction: Twinkling Star &amp; 4-Min Extra Daylight
        </div>
        <svg viewBox="0 0 280 165" className="w-full h-40" aria-label="Atmospheric refraction star and sunrise">
          {/* Earth curve */}
          <path d="M 10 142 Q 140 112 270 142" fill="rgba(16,185,129,0.22)" stroke="#059669" strokeWidth="2" />
          {/* Atmosphere layers */}
          <path d="M 10 115 Q 140 85 270 115" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 10 88 Q 140 58 270 88" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          {/* Horizon tangent */}
          <line x1="78" y1="126" x2="265" y2="126" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />
          <text x="235" y="122" fontSize="9" fontWeight="700" fill="#64748b">Horizon</text>

          {/* Actual Sun below horizon */}
          <circle cx="242" cy="144" r="9" fill="#fbbf24" opacity="0.55" stroke="#d97706" strokeWidth="1.2" />
          <text x="238" y="160" textAnchor="middle" fontSize="8.8" fontWeight="700" fill="#d97706">Actual Sun</text>
          {/* Apparent Sun above horizon */}
          <circle cx="238" cy="100" r="9" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
          <text x="225" y="86" textAnchor="middle" fontSize="8.8" fontWeight="800" fill="#b45309">Apparent (+2 min)</text>
          <path d="M 242 135 Q 170 105 90 124" fill="none" stroke="#f59e0b" strokeWidth="1.8" />
          <line x1="90" y1="124" x2="230" y2="101" stroke="#f59e0b" strokeWidth="1.3" strokeDasharray="3 3" />

          {/* Star (Left half) */}
          <circle cx="52" cy="36" r="4" fill="#0284c7" />
          <text x="52" y="25" textAnchor="middle" fontSize="9" fontWeight="800" fill="#0284c7">Actual Star</text>
          <circle cx="96" cy="22" r="4" fill="#7c3aed" stroke="#7c3aed" strokeDasharray="2 1" />
          <text x="128" y="24" fontSize="9" fontWeight="800" fill="#7c3aed">Apparent Star (Higher)</text>
          <path d="M 52 40 Q 65 82 88 124" fill="none" stroke="#0284c7" strokeWidth="1.8" />
          <line x1="88" y1="124" x2="96" y2="26" stroke="#7c3aed" strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="88" cy="124" r="3.5" fill="#0f172a" />
          <text x="64" y="138" fontSize="8.8" fontWeight="800" fill="#0f172a">Observer</text>
        </svg>
        <p className="text-[11px] text-slate-600 dark:text-slate-400">
          Density increases downward → continuous bending toward normal. <strong>+2 min</strong> sunrise + <strong>+2 min</strong> sunset = <strong>4 min</strong> extra day!
        </p>
      </div>
    </div>
  );
}

/* =========================================================================
   5. ALL 11 CIRCUIT SYMBOLS + V-I vs I-V SLOPE TRAP + SERIES/PARALLEL
   ========================================================================= */

const CIRCUIT_SYMBOLS = [
  { id: 1, name: 'Electric Cell', svg: <g><line x1="12" y1="22" x2="34" y2="22" stroke="currentColor" strokeWidth="2" /><line x1="34" y1="10" x2="34" y2="34" stroke="currentColor" strokeWidth="2" /><line x1="42" y1="15" x2="42" y2="29" stroke="currentColor" strokeWidth="4" /><line x1="42" y1="22" x2="68" y2="22" stroke="currentColor" strokeWidth="2" /><text x="26" y="13" fontSize="9" fontWeight="800" fill="currentColor">+</text><text x="46" y="14" fontSize="9" fontWeight="800" fill="currentColor">−</text></g> },
  { id: 2, name: 'Battery (Cells)', svg: <g><line x1="8" y1="22" x2="22" y2="22" stroke="currentColor" strokeWidth="2" /><line x1="22" y1="10" x2="22" y2="34" stroke="currentColor" strokeWidth="2" /><line x1="28" y1="15" x2="28" y2="29" stroke="currentColor" strokeWidth="3.5" /><line x1="28" y1="22" x2="36" y2="22" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" /><line x1="36" y1="10" x2="36" y2="34" stroke="currentColor" strokeWidth="2" /><line x1="42" y1="15" x2="42" y2="29" stroke="currentColor" strokeWidth="3.5" /><line x1="42" y1="22" x2="50" y2="22" stroke="currentColor" strokeWidth="2" /><line x1="50" y1="10" x2="50" y2="34" stroke="currentColor" strokeWidth="2" /><line x1="56" y1="15" x2="56" y2="29" stroke="currentColor" strokeWidth="3.5" /><line x1="56" y1="22" x2="72" y2="22" stroke="currentColor" strokeWidth="2" /></g> },
  { id: 3, name: 'Plug Key (Open)', svg: <g><line x1="10" y1="22" x2="31" y2="22" stroke="currentColor" strokeWidth="2" /><path d="M 31 14 A 8 8 0 0 0 31 30" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M 49 14 A 8 8 0 0 1 49 30" fill="none" stroke="currentColor" strokeWidth="2" /><line x1="49" y1="22" x2="70" y2="22" stroke="currentColor" strokeWidth="2" /></g> },
  { id: 4, name: 'Plug Key (Closed)', svg: <g><line x1="10" y1="22" x2="31" y2="22" stroke="currentColor" strokeWidth="2" /><path d="M 31 14 A 8 8 0 0 0 31 30" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="40" cy="22" r="3.5" fill="currentColor" /><path d="M 49 14 A 8 8 0 0 1 49 30" fill="none" stroke="currentColor" strokeWidth="2" /><line x1="49" y1="22" x2="70" y2="22" stroke="currentColor" strokeWidth="2" /></g> },
  { id: 5, name: 'Wire Joint', svg: <g><line x1="12" y1="18" x2="68" y2="18" stroke="currentColor" strokeWidth="2" /><line x1="40" y1="18" x2="40" y2="38" stroke="currentColor" strokeWidth="2" /><circle cx="40" cy="18" r="3.5" fill="currentColor" /></g> },
  { id: 6, name: 'Crossing (No Join)', svg: <g><line x1="12" y1="22" x2="68" y2="22" stroke="currentColor" strokeWidth="2" /><line x1="40" y1="6" x2="40" y2="16" stroke="currentColor" strokeWidth="2" /><path d="M 40 16 A 6 6 0 0 1 40 28" fill="none" stroke="currentColor" strokeWidth="2" /><line x1="40" y1="28" x2="40" y2="38" stroke="currentColor" strokeWidth="2" /></g> },
  { id: 7, name: 'Electric Bulb', svg: <g><line x1="10" y1="26" x2="28" y2="26" stroke="currentColor" strokeWidth="2" /><path d="M 28 26 L 34 15 Q 40 9 46 15 L 52 26" fill="none" stroke="currentColor" strokeWidth="2" /><line x1="52" y1="26" x2="70" y2="26" stroke="currentColor" strokeWidth="2" /></g> },
  { id: 8, name: 'Resistor (R)', svg: <g><line x1="8" y1="22" x2="20" y2="22" stroke="currentColor" strokeWidth="2" /><polyline points="20,22 24,14 30,30 36,14 42,30 48,14 54,30 58,22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><line x1="58" y1="22" x2="72" y2="22" stroke="currentColor" strokeWidth="2" /></g> },
  { id: 9, name: 'Rheostat / Variable R', svg: <g><line x1="8" y1="24" x2="20" y2="24" stroke="currentColor" strokeWidth="2" /><polyline points="20,24 24,16 30,32 36,16 42,32 48,16 54,32 58,24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><line x1="58" y1="24" x2="72" y2="24" stroke="currentColor" strokeWidth="2" /><line x1="24" y1="35" x2="54" y2="11" stroke="#0891b2" strokeWidth="2" /><polygon points="56,9 48,11 53,17" fill="#0891b2" /></g> },
  { id: 10, name: 'Ammeter (+ / −)', svg: <g><line x1="8" y1="22" x2="26" y2="22" stroke="currentColor" strokeWidth="2" /><circle cx="40" cy="22" r="14" fill="none" stroke="currentColor" strokeWidth="2" /><text x="40" y="26" textAnchor="middle" fontSize="13" fontWeight="800" fill="currentColor">A</text><line x1="54" y1="22" x2="72" y2="22" stroke="currentColor" strokeWidth="2" /><text x="16" y="15" fontSize="9.5" fontWeight="800" fill="#dc2626">+</text><text x="61" y="15" fontSize="9.5" fontWeight="800" fill="#2563eb">−</text></g> },
  { id: 11, name: 'Voltmeter (+ / −)', svg: <g><line x1="8" y1="22" x2="26" y2="22" stroke="currentColor" strokeWidth="2" /><circle cx="40" cy="22" r="14" fill="none" stroke="currentColor" strokeWidth="2" /><text x="40" y="26" textAnchor="middle" fontSize="13" fontWeight="800" fill="currentColor">V</text><line x1="54" y1="22" x2="72" y2="22" stroke="currentColor" strokeWidth="2" /><text x="16" y="15" fontSize="9.5" fontWeight="800" fill="#dc2626">+</text><text x="61" y="15" fontSize="9.5" fontWeight="800" fill="#2563eb">−</text></g> },
];

function CircuitSymbolsAndViVisual() {
  return (
    <div className="no-word-lookup select-none space-y-4">
      {/* Part A: 11 NCERT Table 11.1 Circuit Symbols */}
      <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-800 dark:text-cyan-300 mb-2">
          Part A: All 11 NCERT Table 11.1 Standard Circuit Symbols
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {CIRCUIT_SYMBOLS.map((sym) => (
            <div
              key={sym.id}
              className="rounded-lg border border-slate-200 bg-slate-50/70 p-2 flex flex-col items-center dark:border-slate-800 dark:bg-slate-900"
            >
              <svg
                viewBox="0 0 80 44"
                className="w-20 h-11 text-slate-800 dark:text-slate-100"
                aria-label={sym.name}
              >
                {sym.svg}
              </svg>
              <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 text-center">
                {sym.id}. {sym.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part B: V-I vs I-V Slope Trap */}
      <div className="rounded-xl border-2 border-rose-300 bg-rose-50/50 p-3 dark:border-rose-900 dark:bg-rose-950/20">
        <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-rose-800 dark:text-rose-300 mb-2">
          <AlertTriangle className="h-4 w-4" /> Part B: CBSE’s #1 Graph Trap — V–I vs I–V Slope!
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
            <div className="text-xs font-extrabold text-cyan-800 dark:text-cyan-300">
              Graph 1: V on Y-axis, I on X-axis ⇒ Slope = R
            </div>
            <svg viewBox="0 0 220 130" className="w-full h-32" aria-label="V-I graph slope equals R">
              <line x1="32" y1="108" x2="205" y2="108" stroke="#64748b" strokeWidth="1.8" />
              <line x1="32" y1="14" x2="32" y2="108" stroke="#64748b" strokeWidth="1.8" />
              <text x="18" y="24" fontSize="11" fontWeight="800" fill="#0891b2">V</text>
              <text x="195" y="122" fontSize="11" fontWeight="800" fill="#0891b2">I</text>
              <line x1="32" y1="108" x2="132" y2="20" stroke="#dc2626" strokeWidth="2.6" />
              <line x1="32" y1="108" x2="190" y2="62" stroke="#0284c7" strokeWidth="2.6" />
              <text x="136" y="24" fontSize="10" fontWeight="800" fill="#dc2626">Wire A (Steeper → Higher R)</text>
              <text x="136" y="57" fontSize="10" fontWeight="800" fill="#0284c7">Wire B (Lower R)</text>
            </svg>
            <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
              <code>R_A &gt; R_B</code> (Steeper line has MORE resistance)
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
            <div className="text-xs font-extrabold text-rose-700 dark:text-rose-400">
              Graph 2: I on Y-axis, V on X-axis ⇒ Slope = 1/R!
            </div>
            <svg viewBox="0 0 220 130" className="w-full h-32" aria-label="I-V graph slope equals 1 over R">
              <line x1="32" y1="108" x2="205" y2="108" stroke="#64748b" strokeWidth="1.8" />
              <line x1="32" y1="14" x2="32" y2="108" stroke="#64748b" strokeWidth="1.8" />
              <text x="18" y="24" fontSize="11" fontWeight="800" fill="#dc2626">I</text>
              <text x="195" y="122" fontSize="11" fontWeight="800" fill="#dc2626">V</text>
              <line x1="32" y1="108" x2="132" y2="20" stroke="#059669" strokeWidth="2.6" />
              <line x1="32" y1="108" x2="190" y2="62" stroke="#d97706" strokeWidth="2.6" />
              <text x="135" y="24" fontSize="10" fontWeight="800" fill="#059669">Wire A (Steeper → LOWER R!)</text>
              <text x="128" y="57" fontSize="10" fontWeight="800" fill="#d97706">Wire B (Flatter → HIGHER R!)</text>
            </svg>
            <div className="text-[11px] font-bold text-rose-700 dark:text-rose-400">
              <code>R_B &gt; R_A</code> — When I is on Y-axis, FLATTER line means HIGHER resistance!
            </div>
          </div>
        </div>
      </div>

      {/* Part C: Series vs Parallel Household Comparison */}
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
          <div className="text-xs font-extrabold text-amber-800 dark:text-amber-300 mb-1">
            Series Circuit (Used for Decorative Fairy Lights — NOT Houses)
          </div>
          <svg viewBox="0 0 240 100" className="w-full h-24" aria-label="Series circuit diagram">
            <rect x="26" y="18" width="188" height="62" fill="none" stroke="#64748b" strokeWidth="1.8" />
            <rect x="46" y="10" width="38" height="16" rx="3" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="65" y="22" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#92400e">R₁</text>
            <rect x="101" y="10" width="38" height="16" rx="3" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="120" y="22" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#92400e">R₂</text>
            <rect x="156" y="10" width="38" height="16" rx="3" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="175" y="22" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#92400e">R₃</text>
            <rect x="92" y="72" width="56" height="16" rx="4" fill="#e2e8f0" />
            <text x="120" y="83" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#0f172a">V = V₁+V₂+V₃</text>
          </svg>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            <strong>I is SAME</strong> everywhere; <code>R_s = R₁ + R₂ + R₃</code>. If 1 bulb fuses, ALL stop!
          </p>
        </div>

        <div className="rounded-xl border border-emerald-200 bg-white p-3 dark:border-emerald-900/60 dark:bg-slate-950">
          <div className="text-xs font-extrabold text-emerald-800 dark:text-emerald-300 mb-1">
            Parallel Circuit (Mandatory for Household Wiring!)
          </div>
          <svg viewBox="0 0 240 100" className="w-full h-24" aria-label="Parallel circuit diagram">
            <line x1="40" y1="18" x2="40" y2="82" stroke="#64748b" strokeWidth="1.8" />
            <line x1="200" y1="18" x2="200" y2="82" stroke="#64748b" strokeWidth="1.8" />
            <line x1="40" y1="18" x2="200" y2="18" stroke="#64748b" strokeWidth="1.8" />
            <line x1="40" y1="44" x2="200" y2="44" stroke="#64748b" strokeWidth="1.8" />
            <line x1="40" y1="70" x2="200" y2="70" stroke="#64748b" strokeWidth="1.8" />
            <line x1="40" y1="82" x2="200" y2="82" stroke="#64748b" strokeWidth="1.8" />
            <rect x="94" y="10" width="52" height="15" rx="3" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <text x="120" y="21" textAnchor="middle" fontSize="9" fontWeight="800" fill="#065f46">R₁ (I₁)</text>
            <rect x="94" y="36" width="52" height="15" rx="3" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <text x="120" y="47" textAnchor="middle" fontSize="9" fontWeight="800" fill="#065f46">R₂ (I₂)</text>
            <rect x="94" y="62" width="52" height="15" rx="3" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <text x="120" y="73" textAnchor="middle" fontSize="9" fontWeight="800" fill="#065f46">R₃ (I₃)</text>
            <text x="120" y="95" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#059669">V SAME (220 V) • I = I₁+I₂+I₃</text>
          </svg>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            <code>1/R_p = 1/R₁ + 1/R₂ + 1/R₃</code> (less than smallest R!). Independent switches!
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   6. BAR MAGNET CLOSED LOOPS + INDIA 220V 50Hz DOMESTIC ELECTRIC CIRCUIT
   ========================================================================= */

function DomesticCircuitAndMagnetVisual() {
  return (
    <div className="no-word-lookup select-none space-y-4">
      {/* Part A: Bar Magnet Closed Loops */}
      <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-800 dark:text-cyan-300 mb-2">
          Part A: Bar Magnet — Closed Field Loops (N→S Outside, S→N Inside, Never Intersect)
        </div>
        <svg viewBox="0 0 420 175" className="w-full h-auto max-h-52" aria-label="Bar magnet closed magnetic field lines">
          {/* Outer loops top & bottom */}
          <path d="M 140 74 C 100 18, 320 18, 280 74" fill="none" stroke="#0284c7" strokeWidth="1.8" />
          <path d="M 140 80 C 122 42, 298 42, 280 80" fill="none" stroke="#0284c7" strokeWidth="1.8" />
          <path d="M 140 100 C 122 138, 298 138, 280 100" fill="none" stroke="#0284c7" strokeWidth="1.8" />
          <path d="M 140 106 C 100 162, 320 162, 280 106" fill="none" stroke="#0284c7" strokeWidth="1.8" />

          {/* Axial lines */}
          <RaySegment x1={282} y1={90} x2={378} y2={90} color="#0284c7" strokeWidth={1.8} arrowT={0.55} />
          <RaySegment x1={42} y1={90} x2={138} y2={90} color="#0284c7" strokeWidth={1.8} arrowT={0.45} />

          {/* Direction arrows on loops (N->S outside) */}
          <polygon points="216,28 206,24 206,32" fill="#0284c7" />
          <polygon points="216,49 206,45 206,53" fill="#0284c7" />
          <polygon points="216,131 206,127 206,135" fill="#0284c7" />
          <polygon points="216,152 206,148 206,156" fill="#0284c7" />

          {/* Bar Magnet */}
          <rect x="140" y="72" width="70" height="36" rx="4" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.8" />
          <rect x="210" y="72" width="70" height="36" rx="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.8" />
          <text x="162" y="95" textAnchor="middle" fontSize="15" fontWeight="900" fill="#ffffff">N</text>
          <text x="258" y="95" textAnchor="middle" fontSize="15" fontWeight="900" fill="#ffffff">S</text>

          {/* Inside S -> N dashed lines */}
          <RaySegment x1={250} y1={84} x2={170} y2={84} color="#fef08a" dashed strokeWidth={1.8} arrowT={0.5} />
          <RaySegment x1={250} y1={96} x2={170} y2={96} color="#fef08a" dashed strokeWidth={1.8} arrowT={0.5} />

          <text x="210" y="169" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
            Inside magnet: S → N (Closed loops!) • Crowding near poles = Stronger B
          </text>
        </svg>
      </div>

      {/* Part B: India 220V 50Hz Domestic Electric Circuit */}
      <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="text-xs font-extrabold uppercase tracking-wider text-rose-800 dark:text-rose-300">
            Part B: India Domestic Circuit (220 V, 50 Hz) — Parallel 5 A &amp; 15 A Wiring + Safety
          </div>
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10.5px] font-extrabold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
            Live = Red (220V) • Neutral = Black (0V) • Earth = Green
          </span>
        </div>

        <svg viewBox="0 0 460 198" className="w-full h-auto max-h-64" aria-label="Domestic electric circuit schematic">
          {/* Earth wire (Green) along top */}
          <line x1="56" y1="22" x2="425" y2="22" stroke="#16a34a" strokeWidth="2.5" />
          <line x1="56" y1="22" x2="56" y2="52" stroke="#16a34a" strokeWidth="2.5" />
          {/* Earth symbol */}
          <line x1="44" y1="52" x2="68" y2="52" stroke="#16a34a" strokeWidth="2.2" />
          <line x1="48" y1="57" x2="64" y2="57" stroke="#16a34a" strokeWidth="2.2" />
          <line x1="52" y1="62" x2="60" y2="62" stroke="#16a34a" strokeWidth="2.2" />
          <text x="56" y="74" textAnchor="middle" fontSize="9" fontWeight="800" fill="#15803d">Earth Plate</text>
          <text x="260" y="15" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#15803d">
            Earth Wire (Green) → Connects to metallic body of appliances
          </text>

          {/* Live wire (Red) */}
          <line x1="12" y1="92" x2="425" y2="92" stroke="#dc2626" strokeWidth="2.8" />
          <text x="34" y="85" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#dc2626">Live (220V)</text>

          {/* Neutral wire (Black/Slate) */}
          <line x1="12" y1="138" x2="425" y2="138" stroke="#0f172a" strokeWidth="2.8" />
          <text x="36" y="152" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#334155">Neutral (0V)</text>

          {/* Board Fuse on Live wire ONLY */}
          <rect x="74" y="82" width="44" height="20" rx="4" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.6" />
          <path d="M 80 92 Q 96 86 112 92" fill="none" stroke="#dc2626" strokeWidth="1.8" />
          <text x="96" y="76" textAnchor="middle" fontSize="9" fontWeight="800" fill="#dc2626">Main Fuse</text>

          {/* Electricity Meter */}
          <rect x="132" y="76" width="52" height="74" rx="5" fill="#f8fafc" stroke="#475569" strokeWidth="1.8" />
          <text x="158" y="112" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#0f172a">kWh</text>
          <text x="158" y="124" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#475569">Meter</text>

          {/* Distribution Box */}
          <rect x="198" y="76" width="66" height="74" rx="5" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.8" />
          <text x="231" y="106" textAnchor="middle" fontSize="8.8" fontWeight="800" fill="#1e40af">Distribution</text>
          <text x="231" y="118" textAnchor="middle" fontSize="8.8" fontWeight="800" fill="#1e40af">Box (Main Sw)</text>

          {/* Parallel Socket 1: 5 A Lighting */}
          <line x1="308" y1="22" x2="308" y2="54" stroke="#16a34a" strokeWidth="1.8" />
          <line x1="296" y1="92" x2="296" y2="68" stroke="#dc2626" strokeWidth="1.8" />
          <line x1="320" y1="138" x2="320" y2="68" stroke="#0f172a" strokeWidth="1.8" />
          <rect x="284" y="48" width="48" height="26" rx="5" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
          <text x="308" y="64" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#166534">5 A Bulb/Fan</text>

          {/* Parallel Socket 2: 15 A Power */}
          <line x1="398" y1="22" x2="398" y2="54" stroke="#16a34a" strokeWidth="1.8" />
          <line x1="386" y1="92" x2="386" y2="68" stroke="#dc2626" strokeWidth="1.8" />
          <line x1="410" y1="138" x2="410" y2="68" stroke="#0f172a" strokeWidth="1.8" />
          <rect x="370" y="48" width="56" height="26" rx="5" fill="#fff7ed" stroke="#ea580c" strokeWidth="1.5" />
          <text x="398" y="64" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#9a3412">15 A Geyser</text>

          <text x="230" y="182" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
            All sockets wired in PARALLEL (220 V each) • Fuse &amp; Switch ALWAYS on LIVE wire!
          </text>
        </svg>
      </div>
    </div>
  );
}

export function PhysicsConceptDiagram({ diagramId }: { diagramId: PhysicsDiagramId }) {
  switch (diagramId) {
    case 'mirror-6-cases-atlas':
      return <MirrorAtlasVisual />;
    case 'lens-6-cases-atlas':
      return <LensAtlasVisual />;
    case 'human-eye-and-defects-diagrams':
      return <HumanEyeAndDefectsVisual />;
    case 'prism-rainbow-scattering-diagrams':
      return <PrismRainbowScatteringVisual />;
    case 'circuit-symbols-and-vi-graphs':
      return <CircuitSymbolsAndViVisual />;
    case 'domestic-circuit-and-bar-magnet':
      return <DomesticCircuitAndMagnetVisual />;
  }
}
