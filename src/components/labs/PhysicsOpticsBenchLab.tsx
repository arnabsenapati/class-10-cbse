import { useEffect, useState } from 'react';
import {
  CheckCircle2,
  Eye,
  Focus,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

type OpticsTab = 'ray-bench' | 'refraction-eye';
type BenchDevice = 'concave-mirror' | 'convex-mirror' | 'convex-lens' | 'concave-lens';
type SubModeTab2 = 'snell-slab' | 'eye-fixer';
type EyeDefectType = 'myopia' | 'hypermetropia';

interface MediumOption {
  id: string;
  name: string;
  n: number;
  fill: string;
  stroke: string;
}

const MEDIA: MediumOption[] = [
  { id: 'water', name: 'Water', n: 1.33, fill: 'rgba(56, 189, 248, 0.22)', stroke: '#0284c7' },
  { id: 'crown', name: 'Crown Glass', n: 1.52, fill: 'rgba(14, 165, 233, 0.26)', stroke: '#0369a1' },
  { id: 'flint', name: 'Flint Glass', n: 1.65, fill: 'rgba(99, 102, 241, 0.24)', stroke: '#4338ca' },
  { id: 'diamond', name: 'Diamond', n: 2.42, fill: 'rgba(168, 85, 247, 0.22)', stroke: '#7e22ce' },
];

function lerpPoint(x1: number, y1: number, x2: number, y2: number, t: number) {
  return { x: x1 + (x2 - x1) * t, y: y1 + (y2 - y1) * t };
}

export function PhysicsOpticsBenchLab() {
  const [tab, setTab] = useState<OpticsTab>('ray-bench');
  const [animRunning, setAnimRunning] = useState(true);
  const [pulsePhase, setPulsePhase] = useState(0);

  // Tab 1 State: Spherical Mirror & Lens Bench
  const [device, setDevice] = useState<BenchDevice>('concave-mirror');
  const [uCm, setUCm] = useState(-140); // -280 to -20
  const [fMagCm, setFMagCm] = useState(60); // 40 to 90
  const [hObjPx, setHObjPx] = useState(28); // 10 to 40

  // Tab 2 State: Snell's Law & Eye Defect Fixer
  const [subMode, setSubMode] = useState<SubModeTab2>('snell-slab');
  const [incDeg, setIncDeg] = useState(40); // 5 to 75
  const [mediumId, setMediumId] = useState('crown');
  const [eyeDefect, setEyeDefect] = useState<EyeDefectType>('myopia');
  const [targetDefectD, setTargetDefectD] = useState(2.0); // magnitude in D (1.0, 2.0, 3.0)
  const [lensPowerD, setLensPowerD] = useState(0.0); // -4.0 to +4.0

  useEffect(() => {
    if (!animRunning) return;
    let rafId = 0;
    let lastTime = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      setPulsePhase((prev) => (prev + dt * 0.42) % 1);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [animRunning]);

  // --- Tab 1 Physics Calculation (New Cartesian Sign Convention) ---
  const isMirror = device === 'concave-mirror' || device === 'convex-mirror';
  const fCm =
    device === 'concave-mirror' || device === 'concave-lens' ? -fMagCm : fMagCm;

  const atFocus = Math.abs(uCm - (isMirror ? fCm : -fCm)) < 0.6;
  // Mirror: 1/v + 1/u = 1/f => v = (f * u) / (u - f)
  // Lens:   1/v - 1/u = 1/f => v = (f * u) / (f + u)
  const vCm = atFocus
    ? Infinity
    : isMirror
    ? (fCm * uCm) / (uCm - fCm)
    : (fCm * uCm) / (fCm + uCm);

  const magnification = !Number.isFinite(vCm)
    ? Infinity
    : isMirror
    ? -vCm / uCm
    : vCm / uCm;

  const hImgPx = Number.isFinite(magnification) ? magnification * hObjPx : Infinity;
  const powerD = 100 / fCm;

  const isVirtual = !Number.isFinite(vCm)
    ? false
    : isMirror
    ? vCm > 0
    : vCm < 0;

  const isErect = Number.isFinite(magnification) && magnification > 0;

  // Quick presets dynamically anchored to fMagCm
  const applyPreset = (preset: 'beyond2f' | 'at2f' | 'between' | 'inside') => {
    if (preset === 'beyond2f') setUCm(Math.max(-280, -Math.round(2.6 * fMagCm)));
    if (preset === 'at2f') setUCm(Math.max(-280, -2 * fMagCm));
    if (preset === 'between') setUCm(-Math.round(1.45 * fMagCm));
    if (preset === 'inside') setUCm(Math.min(-20, -Math.round(0.6 * fMagCm)));
  };

  // --- Tab 2 Snell's Law Calculations ---
  const medium = MEDIA.find((m) => m.id === mediumId) ?? MEDIA[1];
  const iRad = (incDeg * Math.PI) / 180;
  const sinR = Math.sin(iRad) / medium.n;
  const rRad = Math.asin(Math.min(1, Math.max(-1, sinR)));
  const rDeg = (rRad * 180) / Math.PI;
  const speedInMedium = 3.0 / medium.n; // in 10^8 m/s
  const slabThicknessCm = 6.0;
  const lateralShiftCm =
    (slabThicknessCm * Math.sin(iRad - rRad)) / Math.max(0.05, Math.cos(rRad));

  // --- Tab 2 Eye Defect Calculations ---
  // For myopia: eye has +targetDefectD excess -> needs -targetDefectD glasses
  // For hypermetropia: eye has -targetDefectD deficit -> needs +targetDefectD glasses
  const requiredPowerD = eyeDefect === 'myopia' ? -targetDefectD : targetDefectD;
  const netVergenceError = lensPowerD - requiredPowerD; // 0 => exactly on retina
  const isEyeFocused = Math.abs(netVergenceError) < 0.16;

  // Render Tab 1 SVG
  const renderRayBenchSvg = () => {
    const originX = 320;
    const axisY = 152;
    const objX = originX + uCm;
    const objTipY = axisY - hObjPx;

    // For mirror, focal point F is at originX + fCm, C is at originX + 2*fCm
    // For lens, F1 = originX - fMagCm, F2 = originX + fMagCm, 2F1, 2F2
    const fFocusX = isMirror ? originX + fCm : originX + fCm;

    // Clamped draw targets for rays
    const imgXRaw = Number.isFinite(vCm) ? originX + vCm : 9999;
    const imgTipYRaw = Number.isFinite(hImgPx) ? axisY - hImgPx : 9999;

    // Ray 1 leaves (objX, objTipY) -> hits optical element at (originX, objTipY)
    // Outgoing Ray 1 line equation: passes through (originX, objTipY) and (fFocusX, axisY)
    const r1Dx = fFocusX - originX; // equals fCm
    const r1Dy = axisY - objTipY; // equals hObjPx

    // Real outgoing side: for mirrors, left (x < originX); for lenses, right (x > originX)
    const outDir = isMirror ? -1 : 1;
    const outSpan = 295;
    const r1RealEndX = originX + outDir * outSpan;
    const r1RealEndY = objTipY + (r1Dy / r1Dx) * (r1RealEndX - originX);

    // Ray 2 leaves (objX, objTipY) -> hits (originX, axisY) (Pole P or Optical Centre O)
    // For mirror: reflects into left side with opposite slope -> y(x) = axisY + ((x - originX) / uCm) * hObjPx
    // Wait check: for mirror, incident comes from (originX + uCm, axisY - hObjPx) to (originX, axisY).
    // At x = originX + uCm (uCm < 0), reflected goes DOWN-LEFT: y = axisY + hObjPx!
    // Check formula: axisY + ((originX + uCm - originX) / uCm) * hObjPx = axisY + hObjPx! Correct!
    // For lens: continues straight into right side -> y(x) = axisY + ((x - originX) / (-uCm)) * hObjPx.
    // Check at x = originX - uCm (right side, dx = -uCm > 0): y = axisY + hObjPx (down-right)! Correct!
    const r2RealEndX = originX + outDir * outSpan;
    const r2RealEndY = isMirror
      ? axisY + ((r2RealEndX - originX) / uCm) * hObjPx
      : axisY + ((r2RealEndX - originX) / -uCm) * hObjPx;

    // Photon pulse coordinates along Ray 1 & Ray 2
    const p1 =
      pulsePhase < 0.45
        ? lerpPoint(objX, objTipY, originX, objTipY, pulsePhase / 0.45)
        : lerpPoint(originX, objTipY, r1RealEndX, r1RealEndY, (pulsePhase - 0.45) / 0.55);

    const p2 =
      pulsePhase < 0.45
        ? lerpPoint(objX, objTipY, originX, axisY, pulsePhase / 0.45)
        : lerpPoint(originX, axisY, r2RealEndX, r2RealEndY, (pulsePhase - 0.45) / 0.55);

    const mirrorOrLensShape = () => {
      if (device === 'concave-mirror') {
        return (
          <g>
            <path
              d={`M ${originX - 18} 38 Q ${originX + 16} ${axisY} ${originX - 18} 266`}
              fill="none"
              stroke="#0891b2"
              strokeWidth="4"
            />
            {Array.from({ length: 14 }, (_, i) => {
              const y = 48 + i * 16;
              const dy = y - axisY;
              const sx = originX - (dy * dy) / 760;
              return (
                <line key={i} x1={sx + 2} y1={y} x2={sx + 10} y2={y - 7} stroke="#64748b" strokeWidth="1.3" />
              );
            })}
          </g>
        );
      }
      if (device === 'convex-mirror') {
        return (
          <g>
            <path
              d={`M ${originX + 18} 38 Q ${originX - 16} ${axisY} ${originX + 18} 266`}
              fill="none"
              stroke="#059669"
              strokeWidth="4"
            />
            {Array.from({ length: 14 }, (_, i) => {
              const y = 48 + i * 16;
              const dy = y - axisY;
              const sx = originX + (dy * dy) / 760;
              return (
                <line key={i} x1={sx + 1} y1={y} x2={sx + 9} y2={y - 7} stroke="#64748b" strokeWidth="1.3" />
              );
            })}
          </g>
        );
      }
      if (device === 'convex-lens') {
        return (
          <path
            d={`M ${originX} 34 Q ${originX + 20} ${axisY} ${originX} 270 Q ${originX - 20} ${axisY} ${originX} 34 Z`}
            fill="rgba(14, 165, 233, 0.16)"
            stroke="#0284c7"
            strokeWidth="2.5"
          />
        );
      }
      return (
        <path
          d={`M ${originX - 15} 34 Q ${originX - 2} ${axisY} ${originX - 15} 270 L ${originX + 15} 270 Q ${originX + 2} ${axisY} ${originX + 15} 34 Z`}
          fill="rgba(99, 102, 241, 0.14)"
          stroke="#4f46e5"
          strokeWidth="2.5"
        />
      );
    };

    const imageVisibleOnStage =
      Number.isFinite(vCm) && imgXRaw >= 15 && imgXRaw <= 625 && Math.abs(hImgPx) <= 135;

    return (
      <svg
        viewBox="0 0 640 300"
        className="w-full h-auto max-h-80 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
        aria-label="Live optics ray bench"
      >
        {/* Subtle Grid */}
        <defs>
          <pattern id="opticsGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(148,163,184,0.14)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="640" height="300" fill="url(#opticsGrid)" />

        {/* Principal Axis & Vertical Plane */}
        <line x1="12" y1={axisY} x2="628" y2={axisY} stroke="#94a3b8" strokeWidth="1.5" />
        <line x1={originX} y1="22" x2={originX} y2="282" stroke="#cbd5e1" strokeWidth="1.1" strokeDasharray="4 4" />

        {mirrorOrLensShape()}

        {/* Principal Points */}
        {isMirror ? (
          <>
            <circle cx={originX + fCm} cy={axisY} r="3.5" fill="#475569" />
            <text x={originX + fCm} y={axisY + 16} textAnchor="middle" fontSize="11" fontWeight="800" fill="#475569">
              F
            </text>
            <circle cx={originX + 2 * fCm} cy={axisY} r="3.5" fill="#475569" />
            <text x={originX + 2 * fCm} y={axisY + 16} textAnchor="middle" fontSize="11" fontWeight="800" fill="#475569">
              C
            </text>
            <text x={originX + 10} y={axisY + 16} fontSize="11" fontWeight="800" fill="#0891b2">
              P
            </text>
          </>
        ) : (
          <>
            {[
              { x: originX - 2 * fMagCm, l: '2F₁' },
              { x: originX - fMagCm, l: 'F₁' },
              { x: originX + fMagCm, l: 'F₂' },
              { x: originX + 2 * fMagCm, l: '2F₂' },
            ].map((pt) => (
              <g key={pt.l}>
                <circle cx={pt.x} cy={axisY} r="3.5" fill="#475569" />
                <text x={pt.x} y={axisY + 16} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#475569">
                  {pt.l}
                </text>
              </g>
            ))}
            <text x={originX + 9} y={axisY + 16} fontSize="11" fontWeight="800" fill="#0284c7">
              O
            </text>
          </>
        )}

        {/* Ray 1 & Ray 2 */}
        <line x1={objX} y1={objTipY} x2={originX} y2={objTipY} stroke="#0284c7" strokeWidth="2" />
        <line x1={originX} y1={objTipY} x2={r1RealEndX} y2={r1RealEndY} stroke="#ea580c" strokeWidth="2" />
        <line x1={objX} y1={objTipY} x2={originX} y2={axisY} stroke="#7c3aed" strokeWidth="2" />
        <line x1={originX} y1={axisY} x2={r2RealEndX} y2={r2RealEndY} stroke="#d97706" strokeWidth="2" />

        {/* Virtual Extensions when virtual */}
        {isVirtual && Number.isFinite(vCm) && (
          <g>
            <line
              x1={originX}
              y1={objTipY}
              x2={imgXRaw}
              y2={imgTipYRaw}
              stroke="#ea580c"
              strokeWidth="1.7"
              strokeDasharray="5 4"
            />
            <line
              x1={isMirror ? originX : objX}
              y1={isMirror ? axisY : objTipY}
              x2={imgXRaw}
              y2={imgTipYRaw}
              stroke="#d97706"
              strokeWidth="1.7"
              strokeDasharray="5 4"
            />
          </g>
        )}

        {/* Animated Photon Pulses */}
        <circle cx={p1.x} cy={p1.y} r="4.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx={p2.x} cy={p2.y} r="4.5" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />

        {/* Object Arrow AB */}
        <line x1={objX} y1={axisY} x2={objX} y2={objTipY} stroke="#2563eb" strokeWidth="3.2" />
        <polygon points={`${objX},${objTipY} ${objX - 5},${objTipY + 7} ${objX + 5},${objTipY + 7}`} fill="#2563eb" />
        <text x={objX} y={objTipY - 7} textAnchor="middle" fontSize="11" fontWeight="800" fill="#2563eb">A</text>
        <text x={objX} y={axisY + 14} textAnchor="middle" fontSize="11" fontWeight="800" fill="#2563eb">B</text>

        {/* Computed Image Arrow A'B' */}
        {imageVisibleOnStage && (
          <g>
            <line
              x1={imgXRaw}
              y1={axisY}
              x2={imgXRaw}
              y2={imgTipYRaw}
              stroke={isVirtual ? '#059669' : '#dc2626'}
              strokeWidth="3.2"
              strokeDasharray={isVirtual ? '4 3' : undefined}
            />
            <polygon
              points={
                imgTipYRaw < axisY
                  ? `${imgXRaw},${imgTipYRaw} ${imgXRaw - 5},${imgTipYRaw + 7} ${imgXRaw + 5},${imgTipYRaw + 7}`
                  : `${imgXRaw},${imgTipYRaw} ${imgXRaw - 5},${imgTipYRaw - 7} ${imgXRaw + 5},${imgTipYRaw - 7}`
              }
              fill={isVirtual ? '#059669' : '#dc2626'}
            />
            <text
              x={imgXRaw}
              y={imgTipYRaw < axisY ? imgTipYRaw - 7 : imgTipYRaw + 14}
              textAnchor="middle"
              fontSize="11"
              fontWeight="800"
              fill={isVirtual ? '#059669' : '#dc2626'}
            >
              A'
            </text>
            <text
              x={imgXRaw}
              y={imgTipYRaw < axisY ? axisY + 14 : axisY - 7}
              textAnchor="middle"
              fontSize="11"
              fontWeight="800"
              fill={isVirtual ? '#059669' : '#dc2626'}
            >
              B'
            </text>
          </g>
        )}

        {/* Off-stage indicator */}
        {!imageVisibleOnStage && (
          <g>
            <rect x="200" y="12" width="240" height="22" rx="6" fill="#fef3c7" stroke="#f59e0b" />
            <text x="320" y="26.5" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#92400e">
              {Number.isFinite(vCm)
                ? `Image formed off-stage at v = ${vCm.toFixed(1)} cm`
                : 'Object at Focus → Parallel rays (Image at ∞)'}
            </text>
          </g>
        )}
      </svg>
    );
  };

  // Render Tab 2A: Snell's Law & Glass Slab SVG
  const renderSnellSlabSvg = () => {
    const cx = 290;
    const slabTop = 85;
    const slabBot = 205;
    const slabH = slabBot - slabTop;

    const entryX = 215;
    const entryY = slabTop;
    const incLen = 95;
    const startX = entryX - incLen * Math.sin(iRad);
    const startY = entryY - incLen * Math.cos(iRad);

    // Inside slab
    const dxInside = slabH * Math.tan(rRad);
    const exitX = entryX + dxInside;
    const exitY = slabBot;

    // Emergent ray (angle e = angle i, parallel to incident!)
    const emLen = 95;
    const endX = exitX + emLen * Math.sin(iRad);
    const endY = exitY + emLen * Math.cos(iRad);

    // Undeviated dashed line from entry
    const undevX = entryX + (slabH + emLen) * Math.tan(iRad);
    const undevY = slabBot + emLen;

    // Animated pulse: slower inside medium proportional to 1/n!
    const speedFactor = 1 / medium.n;
    const t1 = 0.34;
    const t2 = 0.34 + 0.32 / speedFactor;
    const normPhase = pulsePhase * (t2 + 0.34);
    const photonPos =
      normPhase < t1
        ? lerpPoint(startX, startY, entryX, entryY, normPhase / t1)
        : normPhase < t2
        ? lerpPoint(entryX, entryY, exitX, exitY, (normPhase - t1) / (t2 - t1))
        : lerpPoint(exitX, exitY, endX, endY, Math.min(1, (normPhase - t2) / 0.34));

    return (
      <svg
        viewBox="0 0 600 295"
        className="w-full h-auto max-h-76 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
        aria-label="Snell's law and glass slab lateral shift"
      >
        <text x="16" y="24" fontSize="11" fontWeight="800" fill="#64748b">
          AIR (n₁ = 1.00, v = 3.00 × 10⁸ m/s)
        </text>
        <text x="16" y="280" fontSize="11" fontWeight="800" fill="#64748b">
          AIR (Emergent ray parallel: ∠e = ∠i = {incDeg}°)
        </text>

        {/* Rectangular Medium Slab */}
        <rect
          x="75"
          y={slabTop}
          width="450"
          height={slabH}
          rx="4"
          fill={medium.fill}
          stroke={medium.stroke}
          strokeWidth="2.2"
        />
        <text x="415" y="148" fontSize="12" fontWeight="800" fill={medium.stroke}>
          {medium.name} (n = {medium.n.toFixed(2)})
        </text>

        {/* Normals */}
        <line x1={entryX} y1={slabTop - 62} x2={entryX} y2={slabTop + 62} stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />
        <line x1={exitX} y1={slabBot - 62} x2={exitX} y2={slabBot + 62} stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />

        {/* Undeviated path */}
        <line x1={entryX} y1={entryY} x2={undevX} y2={undevY} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 4" />

        {/* Incident, Refracted, Emergent Rays */}
        <line x1={startX} y1={startY} x2={entryX} y2={entryY} stroke="#0284c7" strokeWidth="2.6" />
        <line x1={entryX} y1={entryY} x2={exitX} y2={exitY} stroke="#ea580c" strokeWidth="2.6" />
        <line x1={exitX} y1={exitY} x2={endX} y2={endY} stroke="#059669" strokeWidth="2.6" />

        {/* Angle labels */}
        <text x={entryX - 24} y={slabTop - 22} fontSize="11" fontWeight="800" fill="#0284c7">
          ∠i = {incDeg}°
        </text>
        <text x={entryX + 8} y={slabTop + 34} fontSize="11" fontWeight="800" fill="#ea580c">
          ∠r = {rDeg.toFixed(1)}°
        </text>
        <text x={exitX + 12} y={slabBot + 34} fontSize="11" fontWeight="800" fill="#059669">
          ∠e = {incDeg}°
        </text>

        {/* Lateral Shift Indicator */}
        {incDeg > 8 && (
          <g>
            <line x1={endX - 18} y1={endY - 10} x2={undevX - 24} y2={undevY - 12} stroke="#dc2626" strokeWidth="1.8" />
            <text x={Math.max(endX, undevX) + 8} y={slabBot + 58} fontSize="10.5" fontWeight="800" fill="#dc2626">
              Lateral Shift d ≈ {lateralShiftCm.toFixed(2)} cm
            </text>
          </g>
        )}

        {/* Animated Photon */}
        <circle cx={photonPos.x} cy={photonPos.y} r="5.5" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.8" />
        <text x={cx + 150} y="24" fontSize="10.5" fontWeight="700" fill="#0284c7">
          Wavefront slows inside slab!
        </text>
      </svg>
    );
  };

  // Render Tab 2B: Eye Defect Fixer SVG
  const renderEyeFixerSvg = () => {
    const retinaX = 485;
    const eyeLensX = 335;
    const specLensX = 240;
    const axisY = 128;

    // Focal x shifts proportionally with netVergenceError (positive error => converges too early, in front)
    const focalX = Math.min(570, Math.max(365, retinaX - netVergenceError * 24));
    const spreadY = 38;
    const eyeLensInYTop =
      eyeDefect === 'myopia'
        ? axisY - spreadY - lensPowerD * 2.2
        : axisY - spreadY - lensPowerD * 2.0 + 6;
    const eyeLensInYBot = axisY + (axisY - eyeLensInYTop);

    const objX = eyeDefect === 'myopia' ? 35 : 95;
    const specStartYTop = eyeDefect === 'myopia' ? axisY - spreadY : axisY;
    const specStartYBot = eyeDefect === 'myopia' ? axisY + spreadY : axisY;

    const pTop =
      pulsePhase < 0.35
        ? lerpPoint(objX, specStartYTop, specLensX, axisY - spreadY, pulsePhase / 0.35)
        : pulsePhase < 0.65
        ? lerpPoint(specLensX, axisY - spreadY, eyeLensX, eyeLensInYTop, (pulsePhase - 0.35) / 0.3)
        : lerpPoint(eyeLensX, eyeLensInYTop, focalX, axisY, (pulsePhase - 0.65) / 0.35);

    return (
      <svg
        viewBox="0 0 590 256"
        className="w-full h-auto max-h-72 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
        aria-label="Eye defect lens fixer simulation"
      >
        {/* Eyeball */}
        <circle cx="408" cy={axisY} r="78" fill="rgba(14, 165, 233, 0.08)" stroke="#475569" strokeWidth="2.5" />
        {/* Retina arc highlight */}
        <path d="M 465 73 A 78 78 0 0 1 465 183" fill="none" stroke="#f59e0b" strokeWidth="4" />
        <text x="515" y="128" fontSize="11" fontWeight="800" fill="#d97706">Retina</text>

        {/* Eye Crystalline Lens */}
        <ellipse cx={eyeLensX} cy={axisY} rx="11" ry="44" fill="rgba(56,189,248,0.28)" stroke="#0284c7" strokeWidth="2" />
        <text x={eyeLensX} y="66" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0284c7">Eye Lens</text>

        {/* Corrective Spectacle Lens */}
        {Math.abs(lensPowerD) > 0.05 ? (
          lensPowerD < 0 ? (
            <path
              d={`M ${specLensX - 10} 68 Q ${specLensX - 2} ${axisY} ${specLensX - 10} 188 L ${specLensX + 10} 188 Q ${specLensX + 2} ${axisY} ${specLensX + 10} 68 Z`}
              fill="rgba(13,148,136,0.28)"
              stroke="#0d9488"
              strokeWidth="2"
            />
          ) : (
            <path
              d={`M ${specLensX} 68 Q ${specLensX + 14} ${axisY} ${specLensX} 188 Q ${specLensX - 14} ${axisY} ${specLensX} 68 Z`}
              fill="rgba(79,70,229,0.28)"
              stroke="#4f46e5"
              strokeWidth="2"
            />
          )
        ) : (
          <line x1={specLensX} y1="74" x2={specLensX} y2="182" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
        )}
        <text x={specLensX} y="56" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f172a">
          Spectacle ({lensPowerD >= 0 ? `+${lensPowerD.toFixed(2)}` : lensPowerD.toFixed(2)} D)
        </text>

        {/* Light Rays */}
        <line x1={objX} y1={specStartYTop} x2={specLensX} y2={axisY - spreadY} stroke="#0284c7" strokeWidth="2.2" />
        <line x1={objX} y1={specStartYBot} x2={specLensX} y2={axisY + spreadY} stroke="#0284c7" strokeWidth="2.2" />
        <line x1={specLensX} y1={axisY - spreadY} x2={eyeLensX} y2={eyeLensInYTop} stroke="#0d9488" strokeWidth="2.2" />
        <line x1={specLensX} y1={axisY + spreadY} x2={eyeLensX} y2={eyeLensInYBot} stroke="#0d9488" strokeWidth="2.2" />
        <line
          x1={eyeLensX}
          y1={eyeLensInYTop}
          x2={focalX}
          y2={axisY}
          stroke={isEyeFocused ? '#059669' : '#dc2626'}
          strokeWidth="2.4"
        />
        <line
          x1={eyeLensX}
          y1={eyeLensInYBot}
          x2={focalX}
          y2={axisY}
          stroke={isEyeFocused ? '#059669' : '#dc2626'}
          strokeWidth="2.4"
        />

        {eyeDefect === 'hypermetropia' && (
          <g>
            <circle cx={objX} cy={axisY} r="4.5" fill="#2563eb" />
            <text x={objX} y={axisY - 12} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#2563eb">
              Near Object (25 cm)
            </text>
          </g>
        )}
        {eyeDefect === 'myopia' && (
          <text x="65" y="76" fontSize="10.5" fontWeight="800" fill="#2563eb">
            Parallel Rays (∞)
          </text>
        )}

        {/* Focal Point Marker */}
        <circle cx={focalX} cy={axisY} r="5" fill={isEyeFocused ? '#059669' : '#dc2626'} />
        <text
          x={focalX}
          y={axisY - 14}
          textAnchor="middle"
          fontSize="10"
          fontWeight="800"
          fill={isEyeFocused ? '#059669' : '#dc2626'}
        >
          {isEyeFocused
            ? 'ON RETINA!'
            : focalX < retinaX
            ? 'In front of retina'
            : 'Behind retina'}
        </text>

        <circle cx={pTop.x} cy={pTop.y} r="4.5" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
      </svg>
    );
  };

  return (
    <div className="rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50/60 via-white to-slate-50 p-4 sm:p-5 space-y-4 dark:border-cyan-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      {/* Lab Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cyan-100 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              Interactive Optics Bench Lab (Ch 9 &amp; Ch 10)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Live ray tracing with New-Cartesian sign convention, Snell’s Law slab &amp; eye defect lens calibration
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setAnimRunning((r) => !r)}
          className="no-word-lookup select-none inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          {animRunning ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {animRunning ? 'Pause Rays' : 'Animate Rays'}
        </button>
      </div>

      {/* Main 2-Tab Bar */}
      <div className="no-word-lookup select-none flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTab('ray-bench')}
          className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold cursor-pointer transition border ${
            tab === 'ray-bench'
              ? 'bg-cyan-600 border-cyan-600 text-white shadow-xs'
              : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-400 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300'
          }`}
        >
          <Focus className="h-3.5 w-3.5" /> Tab 1: Spherical Mirror &amp; Lens Ray Bench
        </button>
        <button
          type="button"
          onClick={() => setTab('refraction-eye')}
          className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold cursor-pointer transition border ${
            tab === 'refraction-eye'
              ? 'bg-cyan-600 border-cyan-600 text-white shadow-xs'
              : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-400 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300'
          }`}
        >
          <Eye className="h-3.5 w-3.5" /> Tab 2: Snell’s Law Slab &amp; Eye Defect Fixer
        </button>
      </div>

      {tab === 'ray-bench' ? (
        <div className="space-y-4">
          {/* Device Switcher */}
          <div className="no-word-lookup select-none flex flex-wrap gap-1.5">
            {(
              [
                { id: 'concave-mirror', label: 'Concave Mirror' },
                { id: 'convex-mirror', label: 'Convex Mirror' },
                { id: 'convex-lens', label: 'Convex Lens' },
                { id: 'concave-lens', label: 'Concave Lens' },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setDevice(opt.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold cursor-pointer transition border ${
                  device === opt.id
                    ? 'bg-slate-900 border-slate-900 text-white dark:bg-cyan-500 dark:border-cyan-500 dark:text-slate-950'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-400 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Sliders & Presets */}
          <div className="no-word-lookup select-none rounded-xl border border-slate-200 bg-white p-3.5 space-y-3 dark:border-slate-800 dark:bg-slate-950">
            <div className="grid gap-3 sm:grid-cols-3 text-xs">
              <label className="space-y-1">
                <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                  <span>Object Distance u</span>
                  <span className="font-mono text-cyan-700 dark:text-cyan-400">{uCm} cm</span>
                </div>
                <input
                  type="range"
                  min={-280}
                  max={-20}
                  step={1}
                  value={uCm}
                  onChange={(e) => setUCm(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer"
                />
              </label>

              <label className="space-y-1">
                <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                  <span>Focal Magnitude |f|</span>
                  <span className="font-mono text-cyan-700 dark:text-cyan-400">{fMagCm} cm</span>
                </div>
                <input
                  type="range"
                  min={40}
                  max={90}
                  step={1}
                  value={fMagCm}
                  onChange={(e) => setFMagCm(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer"
                />
              </label>

              <label className="space-y-1">
                <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                  <span>Object Height h₀</span>
                  <span className="font-mono text-cyan-700 dark:text-cyan-400">{hObjPx} px</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={40}
                  step={1}
                  value={hObjPx}
                  onChange={(e) => setHObjPx(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer"
                />
              </label>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-bold text-slate-500 mr-1">Quick Presets:</span>
              <button
                type="button"
                onClick={() => applyPreset('beyond2f')}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:bg-cyan-100 cursor-pointer dark:bg-slate-800 dark:text-slate-200"
              >
                Beyond 2F/C
              </button>
              <button
                type="button"
                onClick={() => applyPreset('at2f')}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:bg-cyan-100 cursor-pointer dark:bg-slate-800 dark:text-slate-200"
              >
                At 2F/C
              </button>
              <button
                type="button"
                onClick={() => applyPreset('between')}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:bg-cyan-100 cursor-pointer dark:bg-slate-800 dark:text-slate-200"
              >
                Between F &amp; 2F/C
              </button>
              <button
                type="button"
                onClick={() => applyPreset('inside')}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:bg-cyan-100 cursor-pointer dark:bg-slate-800 dark:text-slate-200"
              >
                Inside F
              </button>
            </div>
          </div>

          {/* Animated SVG Stage */}
          <div className="no-word-lookup select-none">{renderRayBenchSvg()}</div>

          {/* Live New-Cartesian Readout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
            <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[10px] font-extrabold uppercase text-slate-500">u (Object)</div>
              <div className="font-mono text-sm font-extrabold text-blue-700 dark:text-blue-400">
                {uCm} cm
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[10px] font-extrabold uppercase text-slate-500">f (Focus)</div>
              <div className="font-mono text-sm font-extrabold text-cyan-700 dark:text-cyan-400">
                {fCm > 0 ? `+${fCm}` : fCm} cm
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[10px] font-extrabold uppercase text-slate-500">v (Image)</div>
              <div className="font-mono text-sm font-extrabold text-slate-900 dark:text-white">
                {Number.isFinite(vCm) ? `${vCm > 0 ? '+' : ''}${vCm.toFixed(1)} cm` : '∞'}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[10px] font-extrabold uppercase text-slate-500">m = h'/h</div>
              <div className="font-mono text-sm font-extrabold text-slate-900 dark:text-white">
                {Number.isFinite(magnification)
                  ? `${magnification > 0 ? '+' : ''}${magnification.toFixed(2)}`
                  : '∞'}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[10px] font-extrabold uppercase text-slate-500">P = 100/f(cm)</div>
              <div className="font-mono text-sm font-extrabold text-indigo-700 dark:text-indigo-400">
                {powerD > 0 ? `+${powerD.toFixed(2)}` : powerD.toFixed(2)} D
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[10px] font-extrabold uppercase text-slate-500">Nature &amp; Orientation</div>
              <div
                className={`text-xs font-extrabold mt-0.5 ${
                  !Number.isFinite(vCm)
                    ? 'text-amber-700 dark:text-amber-400'
                    : isVirtual
                    ? 'text-emerald-700 dark:text-emerald-400'
                    : 'text-rose-700 dark:text-rose-400'
                }`}
              >
                {!Number.isFinite(vCm)
                  ? 'Real • At ∞'
                  : `${isVirtual ? 'Virtual' : 'Real'} • ${isErect ? 'Erect' : 'Inverted'}`}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Sub-mode Toggle */}
          <div className="no-word-lookup select-none flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSubMode('snell-slab')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold cursor-pointer border ${
                subMode === 'snell-slab'
                  ? 'bg-slate-900 border-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950'
                  : 'bg-white border-slate-200 text-slate-700 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300'
              }`}
            >
              Snell’s Law &amp; Glass Slab
            </button>
            <button
              type="button"
              onClick={() => setSubMode('eye-fixer')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold cursor-pointer border ${
                subMode === 'eye-fixer'
                  ? 'bg-slate-900 border-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950'
                  : 'bg-white border-slate-200 text-slate-700 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300'
              }`}
            >
              Eye Defect Lens Fixer (Myopia / Hypermetropia)
            </button>
          </div>

          {subMode === 'snell-slab' ? (
            <div className="space-y-3">
              <div className="no-word-lookup select-none rounded-xl border border-slate-200 bg-white p-3.5 space-y-3 dark:border-slate-800 dark:bg-slate-950">
                <div className="flex flex-wrap gap-1.5">
                  {MEDIA.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMediumId(m.id)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-bold cursor-pointer border ${
                        mediumId === m.id
                          ? 'bg-cyan-600 border-cyan-600 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {m.name} (n = {m.n.toFixed(2)})
                    </button>
                  ))}
                </div>
                <label className="block space-y-1 text-xs">
                  <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                    <span>Angle of Incidence (∠i)</span>
                    <span className="font-mono text-cyan-700 dark:text-cyan-400">{incDeg}°</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={75}
                    step={1}
                    value={incDeg}
                    onChange={(e) => setIncDeg(Number(e.target.value))}
                    className="w-full accent-cyan-600 cursor-pointer"
                  />
                </label>
              </div>

              <div className="no-word-lookup select-none">{renderSnellSlabSvg()}</div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
                  <div className="text-[10px] font-extrabold uppercase text-slate-500">Refracted ∠r</div>
                  <div className="font-mono text-sm font-extrabold text-orange-600 dark:text-orange-400">
                    {rDeg.toFixed(1)}°
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
                  <div className="text-[10px] font-extrabold uppercase text-slate-500">Speed v = c/n</div>
                  <div className="font-mono text-sm font-extrabold text-cyan-700 dark:text-cyan-400">
                    {speedInMedium.toFixed(2)} × 10⁸ m/s
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
                  <div className="text-[10px] font-extrabold uppercase text-slate-500">Snell Ratio sin i / sin r</div>
                  <div className="font-mono text-sm font-extrabold text-slate-900 dark:text-white">
                    {medium.n.toFixed(2)}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-950">
                  <div className="text-[10px] font-extrabold uppercase text-slate-500">Emergent Angle ∠e</div>
                  <div className="font-mono text-sm font-extrabold text-emerald-700 dark:text-emerald-400">
                    {incDeg}° (= ∠i)
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="no-word-lookup select-none rounded-xl border border-slate-200 bg-white p-3.5 space-y-3 dark:border-slate-800 dark:bg-slate-950">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setEyeDefect('myopia');
                        setLensPowerD(0);
                      }}
                      className={`rounded-lg px-3 py-1.5 text-xs font-bold cursor-pointer border ${
                        eyeDefect === 'myopia'
                          ? 'bg-cyan-600 border-cyan-600 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300'
                      }`}
                    >
                      Myopia (Near-sighted)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEyeDefect('hypermetropia');
                        setLensPowerD(0);
                      }}
                      className={`rounded-lg px-3 py-1.5 text-xs font-bold cursor-pointer border ${
                        eyeDefect === 'hypermetropia'
                          ? 'bg-indigo-600 border-indigo-600 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300'
                      }`}
                    >
                      Hypermetropia (Far-sighted)
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="font-bold text-slate-500">Patient Severity:</span>
                    {[1.0, 2.0, 3.0].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => {
                          setTargetDefectD(d);
                          setLensPowerD(0);
                        }}
                        className={`rounded-md px-2 py-1 text-[11px] font-bold cursor-pointer border ${
                          targetDefectD === d
                            ? 'bg-slate-800 border-slate-800 text-white dark:bg-slate-200 dark:text-slate-950'
                            : 'bg-white border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {d.toFixed(1)} D
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setLensPowerD(0)}
                      className="rounded-md border border-slate-200 p-1 text-slate-500 hover:bg-slate-100 cursor-pointer dark:border-slate-700"
                      title="Reset spectacles to 0.0 D"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <label className="block space-y-1 text-xs">
                  <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                    <span>Corrective Spectacle Power (P)</span>
                    <span className="font-mono text-cyan-700 dark:text-cyan-400">
                      {lensPowerD > 0 ? `+${lensPowerD.toFixed(2)}` : lensPowerD.toFixed(2)} D
                    </span>
                  </div>
                  <input
                    type="range"
                    min={-4}
                    max={4}
                    step={0.25}
                    value={lensPowerD}
                    onChange={(e) => setLensPowerD(Number(e.target.value))}
                    className="w-full accent-cyan-600 cursor-pointer"
                  />
                </label>
              </div>

              <div className="no-word-lookup select-none">{renderEyeFixerSvg()}</div>

              <div
                className={`rounded-xl border p-3 text-xs flex flex-wrap items-center justify-between gap-2 ${
                  isEyeFocused
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-200'
                    : 'border-amber-200 bg-amber-50/70 text-amber-950 dark:border-amber-900 dark:bg-amber-950/25 dark:text-amber-200'
                }`}
              >
                <div className="flex items-center gap-2 font-bold">
                  {isEyeFocused && <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />}
                  <span>
                    {isEyeFocused
                      ? `Focused on Retina! Sharp Vision ✓ (${
                          eyeDefect === 'myopia' ? 'Concave diverging' : 'Convex converging'
                        } lens P = ${requiredPowerD > 0 ? '+' : ''}${requiredPowerD.toFixed(2)} D, f = ${(
                          100 / requiredPowerD
                        ).toFixed(1)} cm)`
                      : `Adjust slider toward ${requiredPowerD > 0 ? '+' : ''}${requiredPowerD.toFixed(
                          2
                        )} D (${eyeDefect === 'myopia' ? 'Negative / Concave' : 'Positive / Convex'}) to land rays cleanly on the retina!`}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
