import { useEffect, useRef, useState } from 'react';
import {
  Dna,
  Layers,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import {
  Primitive3D,
  Vec3,
  renderPrimitives3D,
  setupHiDpiCanvas,
  useDarkModeFlag,
  useOrbitCamera,
  vec3,
} from '../../utils/canvas3d';

type BasePairType = 'AT' | 'GC';

const BASE_SEQUENCE: BasePairType[] = [
  'AT',
  'GC',
  'AT',
  'GC',
  'GC',
  'AT',
  'GC', // index 6 - Gene locus start
  'AT',
  'AT', // index 8 - Copying variation site!
  'GC',
  'AT',
  'GC', // index 11 - Gene locus end
  'AT',
  'GC',
  'AT',
  'GC',
  'AT',
  'GC',
];

function addTierPrism(
  primitives: Primitive3D[],
  y0: number,
  y1: number,
  r0: number,
  r1: number,
  fill: string,
  topFill: string,
  stroke: string,
  alpha = 0.92
) {
  const b0 = vec3(-r0, y0, -r0);
  const b1 = vec3(r0, y0, -r0);
  const b2 = vec3(r0, y0, r0);
  const b3 = vec3(-r0, y0, r0);

  const t0 = vec3(-r1, y1, -r1);
  const t1 = vec3(r1, y1, -r1);
  const t2 = vec3(r1, y1, r1);
  const t3 = vec3(-r1, y1, r1);

  const sides: [Vec3, Vec3, Vec3, Vec3][] = [
    [b0, b1, t1, t0],
    [b1, b2, t2, t1],
    [b2, b3, t3, t2],
    [b3, b0, t0, t3],
  ];

  primitives.push({ kind: 'quad', corners: [b0, b1, b2, b3], fill, stroke, alpha });
  for (const corners of sides) {
    primitives.push({ kind: 'quad', corners, fill, stroke, alpha });
  }
  primitives.push({ kind: 'quad', corners: [t0, t1, t2, t3], fill: topFill, stroke, alpha });
}

function formatJoules(j: number): string {
  if (j >= 1_000_000) return `${(j / 1_000_000).toFixed(2).replace(/\.00$/, '')} MJ`;
  if (j >= 1000) return `${j.toLocaleString('en-IN')} J`;
  return `${j.toFixed(j < 10 ? 1 : 0)} J`;
}

export function Bio3dDnaAndEcoPyramidLab() {
  const [scene, setScene] = useState<'dna' | 'eco'>('dna');
  const [simulateVariation, setSimulateVariation] = useState(false);
  const [ecoMode, setEcoMode] = useState<'energy' | 'ddt'>('energy');
  const [sunlightPower, setSunlightPower] = useState(1000000); // 1,000,000 J

  const isDark = useDarkModeFlag();
  const camera = useOrbitCamera({
    initialPitch: 0.28,
    initialYaw: 0.55,
    initialZoom: 1,
    autoSpin: true,
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [canvasSize, setCanvasSize] = useState<{ w: number; h: number }>({ w: 620, h: 360 });
  const [animTime, setAnimTime] = useState(0);

  // Measure wrapper width responsively
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => {
      const w = Math.max(280, Math.floor(el.clientWidth));
      const h = w < 460 ? 310 : 370;
      setCanvasSize({ w, h });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Particle animation clock
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      setAnimTime((t) => (t + dt) % 100);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Draw 3D primitives on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = setupHiDpiCanvas(canvas, canvasSize.w, canvasSize.h);
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasSize.w, canvasSize.h);

    const primitives: Primitive3D[] = [];

    if (scene === 'dna') {
      const count = BASE_SEQUENCE.length;
      const radius = 0.92;
      const totalH = 3.5;
      const twistPerStep = 0.44;
      const prevA: Vec3[] = [];
      const prevB: Vec3[] = [];

      for (let i = 0; i < count; i++) {
        const y = -totalH / 2 + (i / (count - 1)) * totalH;
        const theta = i * twistPerStep;
        const pA = vec3(Math.cos(theta) * radius, y, Math.sin(theta) * radius);
        const pB = vec3(Math.cos(theta + Math.PI) * radius, y, Math.sin(theta + Math.PI) * radius);
        const mid = vec3(0, y, 0);

        const inGeneLocus = i >= 6 && i <= 11;
        const isVariantRung = simulateVariation && i === 8;

        const baseType: BasePairType = isVariantRung ? 'GC' : BASE_SEQUENCE[i];

        // Sugar-phosphate backbone spheres
        primitives.push({
          kind: 'sphere',
          pos: pA,
          radius: inGeneLocus ? 0.115 : 0.092,
          color: inGeneLocus ? '#f59e0b' : '#0f766e',
          highlight: inGeneLocus ? '#fef08a' : '#99f6e4',
          glow: inGeneLocus,
        });
        primitives.push({
          kind: 'sphere',
          pos: pB,
          radius: inGeneLocus ? 0.115 : 0.092,
          color: inGeneLocus ? '#f59e0b' : '#0284c7',
          highlight: inGeneLocus ? '#fef08a' : '#bae6fd',
          glow: inGeneLocus,
        });

        // Backbone connections
        if (i > 0) {
          primitives.push({
            kind: 'bond',
            a: prevA[i - 1],
            b: pA,
            width: 0.06,
            color: inGeneLocus ? '#fbbf24' : '#14b8a6',
          });
          primitives.push({
            kind: 'bond',
            a: prevB[i - 1],
            b: pB,
            width: 0.06,
            color: inGeneLocus ? '#fbbf24' : '#38bdf8',
          });
        }
        prevA.push(pA);
        prevB.push(pB);

        // Base-pair rung halves (two coloured bases meeting in the middle)
        const leftColor = isVariantRung
          ? '#e11d48'
          : baseType === 'AT'
          ? '#10b981'
          : '#6366f1';
        const rightColor = isVariantRung
          ? '#ec4899'
          : baseType === 'AT'
          ? '#f97316'
          : '#06b6d4';

        primitives.push({
          kind: 'bond',
          a: pA,
          b: mid,
          width: isVariantRung ? 0.085 : 0.055,
          color: leftColor,
          order: baseType === 'GC' ? 3 : 2,
        });
        primitives.push({
          kind: 'bond',
          a: mid,
          b: pB,
          width: isVariantRung ? 0.085 : 0.055,
          color: rightColor,
          order: baseType === 'GC' ? 3 : 2,
        });

        if (i === 9) {
          primitives.push({
            kind: 'label',
            pos: vec3(1.42, y, 0),
            text: 'GENE LOCUS (1 Protein)',
            color: '#fbbf24',
            bg: isDark ? 'rgba(15,23,42,0.88)' : 'rgba(15,23,42,0.85)',
            fontSize: 11,
          });
        }
        if (isVariantRung) {
          primitives.push({
            kind: 'sphere',
            pos: mid,
            radius: 0.14 + Math.sin(animTime * 6) * 0.02,
            color: '#f43f5e',
            glow: true,
            label: '!',
          });
          primitives.push({
            kind: 'label',
            pos: vec3(-1.5, y, 0),
            text: 'DNA Copying Variation (A=T → G≡C)',
            color: '#ffffff',
            bg: '#be123c',
            fontSize: 10.5,
          });
        }
      }
    } else if (ecoMode === 'energy') {
      // 3D 10% Energy Pyramid (4 Tiers: T1 Producers -> T4 Top Carnivores)
      const t1 = sunlightPower * 0.01;
      const t2 = t1 * 0.1;
      const t3 = t2 * 0.1;
      const t4 = t3 * 0.1;

      const tiers = [
        {
          name: `T₁ Producers (${formatJoules(t1)})`,
          y0: -1.45,
          y1: -0.82,
          r0: 1.55,
          r1: 1.22,
          fill: '#16a34a',
          topFill: '#22c55e',
          stroke: '#14532d',
        },
        {
          name: `T₂ Herbivores (${formatJoules(t2)})`,
          y0: -0.74,
          y1: -0.14,
          r0: 1.15,
          r1: 0.85,
          fill: '#ca8a04',
          topFill: '#eab308',
          stroke: '#713f12',
        },
        {
          name: `T₃ Small Carnivores (${formatJoules(t3)})`,
          y0: -0.06,
          y1: 0.52,
          r0: 0.78,
          r1: 0.5,
          fill: '#ea580c',
          topFill: '#f97316',
          stroke: '#7c2d12',
        },
        {
          name: `T₄ Top Carnivores (${formatJoules(t4)})`,
          y0: 0.6,
          y1: 1.18,
          r0: 0.44,
          r1: 0.18,
          fill: '#dc2626',
          topFill: '#ef4444',
          stroke: '#7f1d1d',
        },
      ];

      tiers.forEach((tier, idx) => {
        addTierPrism(
          primitives,
          tier.y0,
          tier.y1,
          tier.r0,
          tier.r1,
          tier.fill,
          tier.topFill,
          tier.stroke
        );
        primitives.push({
          kind: 'label',
          pos: vec3(tier.r0 + 0.68, (tier.y0 + tier.y1) * 0.5, 0),
          text: tier.name,
          color: isDark ? '#f8fafc' : '#0f172a',
          bg: isDark ? 'rgba(15,23,42,0.85)' : 'rgba(255,255,255,0.9)',
          fontSize: 10.5,
        });

        // Rising 90% heat-loss particles escaping out of each tier
        if (idx < 3) {
          for (let h = 0; h < 3; h++) {
            const frac = ((animTime * 0.65 + h * 0.33 + idx * 0.19) % 1);
            const ang = h * 2.1 + idx;
            const rad = tier.r0 + 0.18 + frac * 0.35;
            const py = tier.y1 + frac * 0.65;
            primitives.push({
              kind: 'sphere',
              pos: vec3(Math.cos(ang) * rad, py, Math.sin(ang) * rad),
              radius: 0.055 * (1 - frac * 0.4),
              color: '#fb923c',
              highlight: '#fef08a',
              alpha: 1 - frac * 0.75,
              glow: true,
            });
          }
        }
      });

      primitives.push({
        kind: 'label',
        pos: vec3(-1.45, 0.25, 0),
        text: '90% Lost as Heat ↑',
        color: '#ffffff',
        bg: '#ea580c',
        fontSize: 10.5,
      });
    } else {
      // Inverted DDT Biomagnification Tower (5 Tiers: Water -> Bird/Human)
      const ddtTiers = [
        {
          name: 'Water: 0.003 ppb',
          y0: -1.55,
          y1: -1.02,
          r0: 0.34,
          r1: 0.44,
          fill: '#0284c7',
          topFill: '#38bdf8',
          stroke: '#0c4a6e',
        },
        {
          name: 'Zooplankton: 0.04 ppm',
          y0: -0.95,
          y1: -0.44,
          r0: 0.48,
          r1: 0.64,
          fill: '#0d9488',
          topFill: '#2dd4bf',
          stroke: '#134e4a',
        },
        {
          name: 'Small Fish: 0.5 ppm',
          y0: -0.37,
          y1: 0.14,
          r0: 0.68,
          r1: 0.88,
          fill: '#d97706',
          topFill: '#fbbf24',
          stroke: '#78350f',
        },
        {
          name: 'Large Fish: 2 ppm',
          y0: 0.21,
          y1: 0.72,
          r0: 0.92,
          r1: 1.15,
          fill: '#ea580c',
          topFill: '#fb923c',
          stroke: '#7c2d12',
        },
        {
          name: 'Fish-Eating Bird / Human: 25 ppm!',
          y0: 0.79,
          y1: 1.32,
          r0: 1.2,
          r1: 1.48,
          fill: '#b91c1c',
          topFill: '#ef4444',
          stroke: '#450a0a',
        },
      ];

      ddtTiers.forEach((tier, idx) => {
        addTierPrism(
          primitives,
          tier.y0,
          tier.y1,
          tier.r0,
          tier.r1,
          tier.fill,
          tier.topFill,
          tier.stroke
        );
        primitives.push({
          kind: 'label',
          pos: vec3(tier.r1 + 0.55, (tier.y0 + tier.y1) * 0.5, 0),
          text: tier.name,
          color: idx === 4 ? '#ffffff' : isDark ? '#f8fafc' : '#0f172a',
          bg: idx === 4 ? '#b91c1c' : isDark ? 'rgba(15,23,42,0.86)' : 'rgba(255,255,255,0.9)',
          fontSize: 10.5,
        });

        // Concentrated DDT toxin spheres orbiting upper tiers
        const toxinCount = idx + 1;
        for (let d = 0; d < toxinCount * 2; d++) {
          const ang = animTime * 0.9 + (d * Math.PI * 2) / (toxinCount * 2);
          const rad = tier.r1 + 0.12;
          primitives.push({
            kind: 'sphere',
            pos: vec3(Math.cos(ang) * rad, (tier.y0 + tier.y1) * 0.5, Math.sin(ang) * rad),
            radius: 0.048,
            color: '#dc2626',
            highlight: '#fecaca',
            glow: idx >= 3,
          });
        }
      });
    }

    renderPrimitives3D(
      ctx,
      primitives,
      canvasSize.w,
      canvasSize.h,
      { pitch: camera.pitch, yaw: camera.yaw, zoom: camera.zoom },
      isDark
    );
  }, [
    scene,
    simulateVariation,
    ecoMode,
    sunlightPower,
    canvasSize,
    camera.pitch,
    camera.yaw,
    camera.zoom,
    isDark,
    animTime,
  ]);

  const plantEnergy = sunlightPower * 0.01;
  const herbEnergy = plantEnergy * 0.1;
  const carn1Energy = herbEnergy * 0.1;
  const topEnergy = carn1Energy * 0.1;

  return (
    <div className="no-word-lookup select-none rounded-2xl border border-teal-200 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 p-4 sm:p-5 text-white space-y-4">
      {/* Header + Scene Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/80 pb-3.5">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-white">
            {scene === 'dna' ? <Dna className="h-5 w-5" /> : <Layers className="h-5 w-5" />}
          </span>
          <div>
            <h4 className="text-sm font-extrabold text-white">
              Interactive 3D Biology Studio (Drag to Orbit 360°)
            </h4>
            <p className="text-xs text-slate-300">
              Switch between 3D DNA Double Helix (Ch 7/8) &amp; 3D Ecological Pyramids (Ch 13)
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setScene('dna')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-extrabold transition cursor-pointer ${
              scene === 'dna'
                ? 'bg-amber-500 text-slate-950'
                : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
            }`}
          >
            <Dna className="h-3.5 w-3.5" /> Scene 1: 3D DNA Double Helix
          </button>
          <button
            type="button"
            onClick={() => setScene('eco')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-extrabold transition cursor-pointer ${
              scene === 'eco'
                ? 'bg-emerald-500 text-slate-950'
                : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
            }`}
          >
            <Layers className="h-3.5 w-3.5" /> Scene 2: 3D 10% Energy / DDT Pyramid
          </button>
        </div>
      </div>

      {/* Scene Controls */}
      {scene === 'dna' ? (
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-800/80 border border-slate-700 px-3.5 py-2.5">
          <div className="text-xs text-slate-200">
            <span className="font-extrabold text-amber-400">Gold Glowing Region:</span> 1 Functional{' '}
            <strong>Gene Locus</strong> coding for 1 protein/enzyme.
          </div>
          <button
            type="button"
            onClick={() => setSimulateVariation((v) => !v)}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-extrabold transition cursor-pointer ${
              simulateVariation
                ? 'bg-rose-600 text-white ring-2 ring-rose-300'
                : 'bg-teal-600 text-white hover:bg-teal-500'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            {simulateVariation ? 'Reset DNA Copy' : 'Simulate Minor DNA Copying Variation'}
          </button>
        </div>
      ) : (
        <div className="space-y-2.5 rounded-xl bg-slate-800/80 border border-slate-700 px-3.5 py-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setEcoMode('energy')}
                className={`rounded-lg px-3 py-1.5 text-xs font-extrabold cursor-pointer ${
                  ecoMode === 'energy'
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-slate-700 text-slate-200'
                }`}
              >
                10% Energy Pyramid (Upright)
              </button>
              <button
                type="button"
                onClick={() => setEcoMode('ddt')}
                className={`rounded-lg px-3 py-1.5 text-xs font-extrabold cursor-pointer ${
                  ecoMode === 'ddt'
                    ? 'bg-rose-600 text-white'
                    : 'bg-slate-700 text-slate-200'
                }`}
              >
                Switch to DDT Biomagnification Mode (Inverted)
              </button>
            </div>
          </div>

          {ecoMode === 'energy' ? (
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-amber-300">
                  Incident Sunlight Energy: <span className="font-mono text-white">{formatJoules(sunlightPower)}</span>
                </span>
                <input
                  type="range"
                  min={100000}
                  max={10000000}
                  step={100000}
                  value={sunlightPower}
                  onChange={(e) => setSunlightPower(Number(e.target.value))}
                  className="w-48 sm:w-64 accent-amber-400 cursor-pointer"
                  aria-label="Sunlight input energy"
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
                <div className="rounded-lg bg-emerald-950/70 border border-emerald-700 px-2.5 py-1.5">
                  <div className="text-emerald-300 font-bold">T₁ (1% Solar)</div>
                  <div className="text-white font-extrabold">{formatJoules(plantEnergy)}</div>
                </div>
                <div className="rounded-lg bg-yellow-950/70 border border-yellow-700 px-2.5 py-1.5">
                  <div className="text-yellow-300 font-bold">T₂ (10% of T₁)</div>
                  <div className="text-white font-extrabold">{formatJoules(herbEnergy)}</div>
                </div>
                <div className="rounded-lg bg-orange-950/70 border border-orange-700 px-2.5 py-1.5">
                  <div className="text-orange-300 font-bold">T₃ (10% of T₂)</div>
                  <div className="text-white font-extrabold">{formatJoules(carn1Energy)}</div>
                </div>
                <div className="rounded-lg bg-rose-950/70 border border-rose-700 px-2.5 py-1.5">
                  <div className="text-rose-300 font-bold">T₄ (10% of T₃)</div>
                  <div className="text-white font-extrabold">{formatJoules(topEnergy)}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-xs text-rose-200 leading-relaxed">
              <strong>Biological Magnification (Inverted Tower):</strong> Non-biodegradable pesticides like <strong>DDT</strong> cannot be broken down or excreted — their concentration multiplies at every step (<code className="font-mono text-white">0.003 ppb → 0.04 → 0.5 → 2 → 25 ppm</code>)!
            </div>
          )}
        </div>
      )}

      {/* 3D Canvas Stage */}
      <div
        ref={wrapRef}
        className="relative rounded-xl border border-slate-700 bg-slate-950/90 overflow-hidden"
      >
        <canvas
          ref={canvasRef}
          style={{ width: canvasSize.w, height: canvasSize.h }}
          className="no-word-lookup select-none touch-none block w-full cursor-grab active:cursor-grabbing"
          {...camera.pointerHandlers}
        />

        {/* Camera Toolbar */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-xl bg-slate-900/90 border border-slate-700 px-2 py-1.5 backdrop-blur-xs">
          <button
            type="button"
            onClick={() => camera.setAutoSpin((s) => !s)}
            title={camera.autoSpin ? 'Pause spin' : 'Spin'}
            className="rounded-lg p-1.5 text-slate-200 hover:bg-slate-800 cursor-pointer"
          >
            {camera.autoSpin ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>
          <button
            type="button"
            onClick={camera.zoomIn}
            title="Zoom in"
            className="rounded-lg p-1.5 text-slate-200 hover:bg-slate-800 cursor-pointer"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={camera.zoomOut}
            title="Zoom out"
            className="rounded-lg p-1.5 text-slate-200 hover:bg-slate-800 cursor-pointer"
          >
            <ZoomOut className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={camera.reset}
            title="Reset camera"
            className="rounded-lg p-1.5 text-slate-200 hover:bg-slate-800 cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="absolute top-2.5 left-3 rounded-md bg-slate-900/80 px-2 py-1 text-[10px] font-bold text-slate-300 pointer-events-none">
          Drag anywhere to orbit 360°
        </div>
      </div>

      {scene === 'dna' && simulateVariation && (
        <div className="rounded-xl border border-rose-500/60 bg-rose-950/50 px-3.5 py-2.5 text-xs text-rose-100 leading-relaxed">
          <strong>Copying Variation Activated!</strong> A minor biochemical copying error swapped one base pair inside the Gene Locus (<code className="font-mono font-bold">A=T → G≡C</code>). If this altered DNA occurs inside germ cells, it passes as an inherited variation to the next generation!
        </div>
      )}
    </div>
  );
}
