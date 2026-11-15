import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeftRight,
  Compass,
  Magnet,
  Pause,
  Play,
  RotateCcw,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import {
  Primitive3D,
  renderPrimitives3D,
  setupHiDpiCanvas,
  useDarkModeFlag,
  useOrbitCamera,
  vec3,
} from '../../utils/canvas3d';

type MagnetScene = 'wire' | 'solenoid' | 'fleming';
type BeamParticleKind = 'current' | 'proton' | 'electron';

export function PhysicsMagnetism3dLab() {
  const [scene, setScene] = useState<MagnetScene>('wire');

  // Scene 1: Straight Wire
  const [wireUp, setWireUp] = useState(true);
  const [wireAmps, setWireAmps] = useState(5);

  // Scene 2: Solenoid
  const [solenoidForward, setSolenoidForward] = useState(true);
  const [ironCore, setIronCore] = useState(true);

  // Scene 3: Fleming Left-Hand Rule
  const [beamKind, setBeamKind] = useState<BeamParticleKind>('current');
  const [beamForward, setBeamForward] = useState(true); // +z toward viewer when true

  const cam = useOrbitCamera({
    initialPitch: 0.34,
    initialYaw: 0.48,
    initialZoom: 1,
    autoSpin: true,
  });
  const isDark = useDarkModeFlag();

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvasSize, setCanvasSize] = useState({ w: 620, h: 360 });
  const simTimeRef = useRef(0);

  // Observe responsive container width
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const obs = new ResizeObserver((entries) => {
      const w = Math.max(280, Math.floor(entries[0]?.contentRect.width ?? 620));
      setCanvasSize({ w, h: w < 440 ? 310 : 370 });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Build primitives and render at 60fps for smooth particle & field animations
  useEffect(() => {
    let rafId = 0;
    let lastNow = performance.now();

    const drawFrame = (now: number) => {
      const dt = Math.min(0.05, (now - lastNow) / 1000);
      lastNow = now;
      simTimeRef.current += dt;
      const t = simTimeRef.current;

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = setupHiDpiCanvas(canvas, canvasSize.w, canvasSize.h);
        if (ctx) {
          ctx.clearRect(0, 0, canvasSize.w, canvasSize.h);

          const prims: Primitive3D[] = [];

          if (scene === 'wire') {
            // Cardboard plane at y = 0
            prims.push({
              kind: 'quad',
              corners: [
                vec3(-1.9, -0.02, -1.9),
                vec3(1.9, -0.02, -1.9),
                vec3(1.9, -0.02, 1.9),
                vec3(-1.9, -0.02, 1.9),
              ],
              fill: isDark ? 'rgba(30, 41, 59, 0.55)' : 'rgba(226, 232, 240, 0.55)',
              stroke: isDark ? '#475569' : '#94a3b8',
              strokeWidth: 1.2,
              alpha: 0.72,
            });

            // Vertical Copper Conductor along y-axis
            prims.push({
              kind: 'bond',
              a: vec3(0, -1.75, 0),
              b: vec3(0, 1.75, 0),
              width: 0.095,
              color: '#ea580c',
            });

            // Current direction arrow along wire
            const iDir = wireUp ? 1 : -1;
            prims.push({
              kind: 'arrow',
              a: vec3(0.24, -0.55 * iDir, 0),
              b: vec3(0.24, 0.65 * iDir, 0),
              color: '#dc2626',
              width: 3.2,
              headPx: 11,
              label: `I (${wireAmps}A)`,
            });

            // Flowing Current Spheres along wire
            const flowSpeed = 0.45 + wireAmps * 0.14;
            for (let k = 0; k < 6; k++) {
              const frac = ((t * flowSpeed * iDir + k / 6) % 1 + 1) % 1;
              const py = -1.6 + frac * 3.2;
              prims.push({
                kind: 'sphere',
                pos: vec3(0, py, 0),
                radius: 0.085,
                color: '#f97316',
                highlight: '#fef08a',
                glow: true,
              });
            }

            // 3 Concentric 3D magnetic field loops (B proportional to I/r)
            // Biot-Savart: I along +y => (r cos theta, 0, -r sin theta) increasing theta is CCW from above
            const radii = [0.62, 1.08, 1.56];
            const segs = 28;
            radii.forEach((r, rIdx) => {
              const loopColor = rIdx === 0 ? '#0284c7' : rIdx === 1 ? '#0891b2' : '#0ea5e9';
              for (let s = 0; s < segs; s++) {
                const a1 = (s / segs) * Math.PI * 2;
                const a2 = ((s + 1) / segs) * Math.PI * 2;
                prims.push({
                  kind: 'bond',
                  a: vec3(r * Math.cos(a1), 0.03, -r * Math.sin(a1)),
                  b: vec3(r * Math.cos(a2), 0.03, -r * Math.sin(a2)),
                  width: 0.028 - rIdx * 0.005,
                  color: loopColor,
                  alpha: 0.88 - rIdx * 0.14,
                });
              }

              // Orbiting tangent arrows (faster on inner loop where B is stronger!)
              const omega = ((0.5 + wireAmps * 0.12) / r) * iDir;
              const numArrows = 3;
              for (let a = 0; a < numArrows; a++) {
                const theta = t * omega + (a * Math.PI * 2) / numArrows;
                const px = r * Math.cos(theta);
                const pz = -r * Math.sin(theta);
                // Unit tangent in direction of B = iDir * (-sin theta, 0, -cos theta)
                const tx = -Math.sin(theta) * iDir;
                const tz = -Math.cos(theta) * iDir;
                const len = 0.34;
                prims.push({
                  kind: 'arrow',
                  a: vec3(px - tx * len * 0.4, 0.06, pz - tz * len * 0.4),
                  b: vec3(px + tx * len * 0.7, 0.06, pz + tz * len * 0.7),
                  color: '#0284c7',
                  width: 2.8,
                  headPx: 10,
                  label: rIdx === 0 && a === 0 ? 'B' : undefined,
                });
              }
            });
          } else if (scene === 'solenoid') {
            // Soft-Iron Core inside solenoid (along x: -1.35 to +1.35)
            if (ironCore) {
              const coreSegs = 12;
              const coreR = 0.34;
              for (let i = 0; i < coreSegs; i++) {
                const ang = (i / coreSegs) * Math.PI * 2;
                const y1 = coreR * Math.cos(ang);
                const z1 = coreR * Math.sin(ang);
                const y2 = coreR * Math.cos(ang + (Math.PI * 2) / coreSegs);
                const z2 = coreR * Math.sin(ang + (Math.PI * 2) / coreSegs);
                prims.push({
                  kind: 'quad',
                  corners: [
                    vec3(-1.38, y1, z1),
                    vec3(1.38, y1, z1),
                    vec3(1.38, y2, z2),
                    vec3(-1.38, y2, z2),
                  ],
                  fill: isDark ? 'rgba(100, 116, 139, 0.55)' : 'rgba(148, 163, 184, 0.5)',
                  stroke: '#64748b',
                  strokeWidth: 0.7,
                });
              }
            }

            // 8-turn 3D Helical Solenoid
            const turns = 8;
            const totalSteps = 120;
            const coilR = 0.62;
            const xStart = -1.28;
            const xSpan = 2.56;
            for (let s = 0; s < totalSteps; s++) {
              const f1 = s / totalSteps;
              const f2 = (s + 1) / totalSteps;
              const p1x = xStart + f1 * xSpan;
              const p2x = xStart + f2 * xSpan;
              const phi1 = f1 * turns * Math.PI * 2;
              const phi2 = f2 * turns * Math.PI * 2;
              prims.push({
                kind: 'bond',
                a: vec3(p1x, coilR * Math.cos(phi1), coilR * Math.sin(phi1)),
                b: vec3(p2x, coilR * Math.cos(phi2), coilR * Math.sin(phi2)),
                width: 0.055,
                color: '#d97706',
              });
            }

            // Current pulses moving along the coil helix
            const dir = solenoidForward ? 1 : -1;
            for (let k = 0; k < 8; k++) {
              const f = ((t * 0.25 * dir + k / 8) % 1 + 1) % 1;
              const px = xStart + f * xSpan;
              const phi = f * turns * Math.PI * 2;
              prims.push({
                kind: 'sphere',
                pos: vec3(px, coilR * Math.cos(phi), coilR * Math.sin(phi)),
                radius: 0.072,
                color: '#ef4444',
                highlight: '#fef08a',
                glow: true,
              });
            }

            // Magnetic Poles & Internal Uniform S -> N Field Arrows
            // For our helix (y=R cos phi, z=R sin phi): +x traversal gives B along +x (Right = N, Left = S)
            const bDir = dir;
            const leftIsNorth = bDir < 0;

            prims.push({
              kind: 'label',
              pos: vec3(-1.68, 0, 0),
              text: leftIsNorth ? 'N POLE' : 'S POLE',
              color: '#ffffff',
              bg: leftIsNorth ? '#dc2626' : '#2563eb',
              fontSize: 12,
            });
            prims.push({
              kind: 'label',
              pos: vec3(1.68, 0, 0),
              text: leftIsNorth ? 'S POLE' : 'N POLE',
              color: '#ffffff',
              bg: leftIsNorth ? '#2563eb' : '#dc2626',
              fontSize: 12,
            });

            // Internal Uniform Parallel B lines (S -> N)
            const internalOffsets = ironCore
              ? [vec3(0, 0.14, 0), vec3(0, -0.14, 0), vec3(0, 0, 0.14), vec3(0, 0, -0.14)]
              : [vec3(0, 0.1, 0), vec3(0, -0.1, 0)];
            internalOffsets.forEach((off, idx) => {
              prims.push({
                kind: 'arrow',
                a: vec3(-1.15 * bDir, off.y, off.z),
                b: vec3(1.15 * bDir, off.y, off.z),
                color: ironCore ? '#06b6d4' : '#0284c7',
                width: ironCore ? 3.2 : 2.3,
                headPx: 9,
                label: idx === 0 ? 'B' : undefined,
              });
            });

            // External N -> S return loops (top & bottom arcs)
            const loopSigns = [1, -1];
            loopSigns.forEach((sy) => {
              const steps = 18;
              for (let s = 0; s < steps; s++) {
                const a1 = (s / steps) * Math.PI;
                const a2 = ((s + 1) / steps) * Math.PI;
                const rx = 1.48;
                const ry = 1.18;
                // From +x*bDir (N pole) to -x*bDir (S pole)
                const x1 = bDir * rx * Math.cos(a1);
                const y1 = sy * (0.25 + ry * Math.sin(a1));
                const x2 = bDir * rx * Math.cos(a2);
                const y2 = sy * (0.25 + ry * Math.sin(a2));
                prims.push({
                  kind: 'bond',
                  a: vec3(x1, y1, 0),
                  b: vec3(x2, y2, 0),
                  width: ironCore ? 0.032 : 0.022,
                  color: '#0ea5e9',
                  alpha: 0.78,
                });
              }
              // Top/bottom N -> S arrow at apex
              prims.push({
                kind: 'arrow',
                a: vec3(0.32 * bDir, sy * 1.43, 0),
                b: vec3(-0.32 * bDir, sy * 1.43, 0),
                color: '#0284c7',
                width: 2.6,
                headPx: 9,
              });
            });
          } else {
            // Scene 3: Fleming's Left-Hand Rule
            // Horseshoe Magnet: Upper Red N pole quad (+y), Lower Blue S pole quad (-y), Yoke on left (-x)
            prims.push({
              kind: 'quad',
              corners: [
                vec3(-0.75, 0.92, -0.7),
                vec3(0.75, 0.92, -0.7),
                vec3(0.75, 0.92, 0.7),
                vec3(-0.75, 0.92, 0.7),
              ],
              fill: '#dc2626',
              stroke: '#991b1b',
              label: 'N POLE',
              labelColor: '#ffffff',
              alpha: 0.9,
            });
            prims.push({
              kind: 'quad',
              corners: [
                vec3(-0.75, -0.92, -0.7),
                vec3(0.75, -0.92, -0.7),
                vec3(0.75, -0.92, 0.7),
                vec3(-0.75, -0.92, 0.7),
              ],
              fill: '#2563eb',
              stroke: '#1e40af',
              label: 'S POLE',
              labelColor: '#ffffff',
              alpha: 0.9,
            });
            // Horseshoe C-yoke spine on back-left (-x = -1.35)
            prims.push({
              kind: 'bond',
              a: vec3(-0.75, 0.92, 0),
              b: vec3(-1.38, 0.92, 0),
              width: 0.14,
              color: '#dc2626',
            });
            prims.push({
              kind: 'bond',
              a: vec3(-1.38, 0.92, 0),
              b: vec3(-1.38, -0.92, 0),
              width: 0.14,
              color: '#64748b',
            });
            prims.push({
              kind: 'bond',
              a: vec3(-1.38, -0.92, 0),
              b: vec3(-0.75, -0.92, 0),
              width: 0.14,
              color: '#2563eb',
            });

            // Green B field vectors downward (-y) from N to S
            [vec3(-0.35, 0, -0.3), vec3(0.35, 0, -0.3), vec3(-0.35, 0, 0.35), vec3(0.35, 0, 0.35)].forEach(
              (pt, idx) => {
                prims.push({
                  kind: 'arrow',
                  a: vec3(pt.x, 0.78, pt.z),
                  b: vec3(pt.x, -0.78, pt.z),
                  color: '#16a34a',
                  width: 2.5,
                  headPx: 9,
                  label: idx === 3 ? 'B' : undefined,
                });
              }
            );

            // Compute Conventional Current I direction & Fleming Left-Hand Force F = I x B
            // B = (0, -1, 0)
            // Motion direction along z: vDir = +1 (forward +z) or -1 (backward -z)
            const vDir = beamForward ? 1 : -1;
            // Electron moves opposite to Conventional Current I!
            const iDirZ = beamKind === 'electron' ? -vDir : vDir;
            // I x B = (0, 0, iDirZ) x (0, -1, 0) = (iDirZ, 0, 0) => force along +x or -x!
            const forceDirX = iDirZ;

            // Animated rod deflection along forceDirX
            const sway = 0.24 + 0.12 * Math.sin(t * 3.2);
            const rodX = forceDirX * sway;

            // Suspension wires from ceiling frame
            prims.push({
              kind: 'bond',
              a: vec3(0, 1.55, -0.95),
              b: vec3(rodX, 0.04, -0.95),
              width: 0.022,
              color: '#94a3b8',
              dashed: true,
            });
            prims.push({
              kind: 'bond',
              a: vec3(0, 1.55, 0.95),
              b: vec3(rodX, 0.04, 0.95),
              width: 0.022,
              color: '#94a3b8',
              dashed: true,
            });

            // Aluminium Conductor Rod
            prims.push({
              kind: 'bond',
              a: vec3(rodX, 0, -1.18),
              b: vec3(rodX, 0, 1.18),
              width: 0.11,
              color: '#94a3b8',
            });

            // Moving beam particles (moving in vDir)
            for (let k = 0; k < 5; k++) {
              const frac = ((t * 0.65 * vDir + k / 5) % 1 + 1) % 1;
              const pz = -1.1 + frac * 2.2;
              prims.push({
                kind: 'sphere',
                pos: vec3(rodX, 0, pz),
                radius: 0.075,
                color: beamKind === 'electron' ? '#2563eb' : '#ef4444',
                highlight: '#ffffff',
                label: beamKind === 'electron' ? 'e⁻' : beamKind === 'proton' ? 'α' : '+',
                glow: true,
              });
            }

            // Conventional Current I arrow along rod
            prims.push({
              kind: 'arrow',
              a: vec3(rodX, 0.24, -0.65 * iDirZ),
              b: vec3(rodX, 0.24, 0.75 * iDirZ),
              color: '#dc2626',
              width: 3.4,
              headPx: 11,
              label: 'I',
            });

            // Force F arrow (Fleming Left-Hand Thumb)
            prims.push({
              kind: 'arrow',
              a: vec3(rodX, 0, 0),
              b: vec3(rodX + forceDirX * 1.05, 0, 0),
              color: '#f59e0b',
              width: 4.2,
              headPx: 13,
              label: 'F',
            });
          }

          renderPrimitives3D(ctx, prims, canvasSize.w, canvasSize.h, cam, isDark);
        }
      }

      rafId = requestAnimationFrame(drawFrame);
    };

    rafId = requestAnimationFrame(drawFrame);
    return () => cancelAnimationFrame(rafId);
  }, [
    scene,
    wireUp,
    wireAmps,
    solenoidForward,
    ironCore,
    beamKind,
    beamForward,
    canvasSize.w,
    canvasSize.h,
    cam,
    isDark,
  ]);

  const vDir = beamForward ? 1 : -1;
  const effectiveI = beamKind === 'electron' ? -vDir : vDir;
  const forceLabel = effectiveI > 0 ? 'Right (+X, out of magnet)' : 'Left (−X, into magnet)';

  return (
    <div className="rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50/60 via-white to-slate-50 p-4 sm:p-5 space-y-4 dark:border-cyan-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      {/* Header & Camera Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cyan-100 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Magnet className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              Interactive 3D Electromagnetism Lab (Ch 12)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Drag directly on the 3D viewport to orbit 360° • Right-Hand Thumb, Solenoid &amp; Fleming’s Left-Hand Rule
            </p>
          </div>
        </div>

        <div className="no-word-lookup select-none flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => cam.setAutoSpin(!cam.autoSpin)}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {cam.autoSpin ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {cam.autoSpin ? 'Pause Spin' : 'Auto-Spin'}
          </button>
          <button
            type="button"
            onClick={cam.zoomIn}
            aria-label="Zoom in 3D view"
            className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={cam.zoomOut}
            aria-label="Zoom out 3D view"
            className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            <ZoomOut className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={cam.reset}
            aria-label="Reset 3D camera"
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
        </div>
      </div>

      {/* Scene Switcher */}
      <div className="no-word-lookup select-none flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setScene('wire')}
          className={`rounded-xl px-3 py-2 text-xs font-extrabold cursor-pointer border transition ${
            scene === 'wire'
              ? 'bg-cyan-600 border-cyan-600 text-white shadow-xs'
              : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-400 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300'
          }`}
        >
          1. 3D Straight Wire &amp; Right-Hand Thumb Rule
        </button>
        <button
          type="button"
          onClick={() => setScene('solenoid')}
          className={`rounded-xl px-3 py-2 text-xs font-extrabold cursor-pointer border transition ${
            scene === 'solenoid'
              ? 'bg-cyan-600 border-cyan-600 text-white shadow-xs'
              : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-400 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300'
          }`}
        >
          2. 3D Solenoid &amp; Iron Core
        </button>
        <button
          type="button"
          onClick={() => setScene('fleming')}
          className={`rounded-xl px-3 py-2 text-xs font-extrabold cursor-pointer border transition ${
            scene === 'fleming'
              ? 'bg-cyan-600 border-cyan-600 text-white shadow-xs'
              : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-400 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300'
          }`}
        >
          3. 3D Fleming’s Left-Hand Rule
        </button>
      </div>

      {/* Scene-Specific Controls */}
      <div className="no-word-lookup select-none rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
        {scene === 'wire' && (
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setWireUp((u) => !u)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-extrabold text-white cursor-pointer dark:bg-cyan-500 dark:text-slate-950"
              >
                <ArrowLeftRight className="h-3.5 w-3.5" />
                Current: {wireUp ? 'Upwards (↑)' : 'Downwards (↓)'}
              </button>
              <span className="font-bold text-slate-600 dark:text-slate-300">
                Curl (from above):{' '}
                <strong className="text-cyan-700 dark:text-cyan-400">
                  {wireUp ? 'Anticlockwise' : 'Clockwise'}
                </strong>
              </span>
            </div>

            <label className="flex items-center gap-2.5 min-w-[200px] flex-1 max-w-xs">
              <span className="font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap">
                Current I: <span className="font-mono text-cyan-700 dark:text-cyan-400">{wireAmps} A</span>
              </span>
              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={wireAmps}
                onChange={(e) => setWireAmps(Number(e.target.value))}
                className="w-full accent-cyan-600 cursor-pointer"
              />
            </label>
          </div>
        )}

        {scene === 'solenoid' && (
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSolenoidForward((f) => !f)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-extrabold text-white cursor-pointer dark:bg-cyan-500 dark:text-slate-950"
              >
                <ArrowLeftRight className="h-3.5 w-3.5" />
                Reverse Battery Polarity ({solenoidForward ? 'Right = N' : 'Left = N'})
              </button>
              <button
                type="button"
                onClick={() => setIronCore((c) => !c)}
                className={`rounded-lg px-3 py-1.5 text-xs font-extrabold cursor-pointer border ${
                  ironCore
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300'
                }`}
              >
                {ironCore ? 'Soft-Iron Core: ON (Electromagnet!)' : 'Insert Soft-Iron Core (Air Core)'}
              </button>
            </div>
            <span className="font-semibold text-slate-600 dark:text-slate-400">
              Inside field lines are <strong>parallel &amp; uniform</strong> (S → N).
            </span>
          </div>
        )}

        {scene === 'fleming' && (
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap gap-1.5">
              {(
                [
                  { id: 'current', label: 'Conventional Current I' },
                  { id: 'proton', label: 'Proton (α²⁺) Beam' },
                  { id: 'electron', label: 'Electron (e⁻) Beam' },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setBeamKind(opt.id)}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-bold cursor-pointer border ${
                    beamKind === opt.id
                      ? opt.id === 'electron'
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'bg-rose-600 border-rose-600 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setBeamForward((f) => !f)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-800 cursor-pointer dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <ArrowLeftRight className="h-3.5 w-3.5" />
              Beam Motion: {beamForward ? 'Out of Screen (+Z)' : 'Into Screen (−Z)'}
            </button>
          </div>
        )}
      </div>

      {/* 3D Canvas Viewport */}
      <div
        ref={wrapRef}
        className="no-word-lookup select-none relative rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white overflow-hidden dark:border-slate-800 dark:from-slate-950 dark:to-slate-900"
      >
        <canvas
          ref={canvasRef}
          style={{ width: `${canvasSize.w}px`, height: `${canvasSize.h}px` }}
          className="no-word-lookup select-none touch-none block mx-auto cursor-grab active:cursor-grabbing"
          {...cam.pointerHandlers}
        />
        <div className="pointer-events-none absolute top-2.5 left-3 rounded-md bg-slate-900/75 px-2.5 py-1 text-[10.5px] font-bold text-white backdrop-blur-xs">
          Drag to orbit 360°
        </div>
      </div>

      {/* Live Physics Interpretation Strip */}
      <div className="rounded-xl border border-cyan-200 bg-cyan-50/70 p-3 text-xs text-cyan-950 dark:border-cyan-900/60 dark:bg-cyan-950/30 dark:text-cyan-100 flex items-start gap-2">
        <Compass className="h-4 w-4 text-cyan-700 dark:text-cyan-400 shrink-0 mt-0.5" />
        <div>
          {scene === 'wire' && (
            <span>
              <strong>Right-Hand Thumb Rule:</strong> Thumb points along current <code>I</code> (
              {wireUp ? 'Up' : 'Down'}); curled fingers give concentric magnetic field circles (
              {wireUp ? 'Anticlockwise' : 'Clockwise'} from above). Field strength{' '}
              <code>B ∝ I / r</code> — inner ring arrows orbit faster!
            </span>
          )}
          {scene === 'solenoid' && (
            <span>
              <strong>Clock-Face Rule &amp; Electromagnet:</strong> Looking at an end face,{' '}
              <strong>Clockwise = S Pole</strong>, <strong>Anticlockwise = N Pole</strong>.{' '}
              {ironCore
                ? 'Soft-iron core magnetizes strongly, multiplying B drastically while staying temporary!'
                : 'Toggle the Soft-Iron Core ON to turn this air-core coil into a strong electromagnet!'}
            </span>
          )}
          {scene === 'fleming' && (
            <span>
              <strong>Fleming’s Left-Hand Rule (FBI):</strong> Forefinger <code>B</code> points{' '}
              <strong>Down (N→S)</strong>.{' '}
              {beamKind === 'electron' ? (
                <>
                  Because <strong>electrons (e⁻)</strong> are negative, Conventional Current{' '}
                  <code>I</code> is <strong>OPPOSITE</strong> to electron motion! Hence Force{' '}
                  <code>F</code> pushes <strong>{forceLabel}</strong>.
                </>
              ) : (
                <>
                  Central finger <code>I</code> aligns with the positive beam (
                  {beamForward ? '+Z' : '−Z'}). Thumb <code>F</code> pushes{' '}
                  <strong>{forceLabel}</strong>!
                </>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
