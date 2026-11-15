import { PointerEvent as ReactPointerEvent, useCallback, useEffect, useRef, useState } from 'react';

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface ProjectedPoint {
  x: number;
  y: number;
  depth: number;
  scale: number;
  visible: boolean;
}

export function vec3(x: number, y: number, z: number): Vec3 {
  return { x, y, z };
}

export function addVec3(a: Vec3, b: Vec3): Vec3 {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
}

export function subVec3(a: Vec3, b: Vec3): Vec3 {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

export function scaleVec3(v: Vec3, s: number): Vec3 {
  return { x: v.x * s, y: v.y * s, z: v.z * s };
}

export function lenVec3(v: Vec3): number {
  return Math.hypot(v.x, v.y, v.z);
}

export function normVec3(v: Vec3): Vec3 {
  const len = lenVec3(v) || 1;
  return { x: v.x / len, y: v.y / len, z: v.z / len };
}

export function crossVec3(a: Vec3, b: Vec3): Vec3 {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  };
}

export function rotatePoint3D(p: Vec3, pitch: number, yaw: number): Vec3 {
  const cy = Math.cos(yaw);
  const sy = Math.sin(yaw);
  const x1 = p.x * cy + p.z * sy;
  const z1 = -p.x * sy + p.z * cy;

  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  const y2 = p.y * cp - z1 * sp;
  const z2 = p.y * sp + z1 * cp;

  return { x: x1, y: y2, z: z2 };
}

export function projectPoint3D(
  p: Vec3,
  width: number,
  height: number,
  fov = 440,
  camDist = 6.2
): ProjectedPoint {
  const denom = camDist - p.z;
  if (denom <= 0.35) {
    return { x: width / 2, y: height / 2, depth: denom, scale: 0, visible: false };
  }
  const scale = fov / denom;
  return {
    x: width / 2 + p.x * scale,
    y: height / 2 - p.y * scale,
    depth: denom,
    scale,
    visible: true,
  };
}

export type Primitive3D =
  | {
      kind: 'sphere';
      pos: Vec3;
      radius: number;
      color: string;
      highlight?: string;
      stroke?: string;
      label?: string;
      labelColor?: string;
      alpha?: number;
      glow?: boolean;
    }
  | {
      kind: 'bond';
      a: Vec3;
      b: Vec3;
      width: number;
      color: string;
      order?: 1 | 2 | 3;
      dashed?: boolean;
      alpha?: number;
    }
  | {
      kind: 'arrow';
      a: Vec3;
      b: Vec3;
      color: string;
      width?: number;
      headPx?: number;
      label?: string;
      alpha?: number;
    }
  | {
      kind: 'quad';
      corners: [Vec3, Vec3, Vec3, Vec3];
      fill: string;
      stroke?: string;
      strokeWidth?: number;
      label?: string;
      labelColor?: string;
      alpha?: number;
    }
  | {
      kind: 'label';
      pos: Vec3;
      text: string;
      color: string;
      bg?: string;
      fontSize?: number;
    };

export interface Camera3DState {
  pitch: number;
  yaw: number;
  zoom: number;
}

export function setupHiDpiCanvas(
  canvas: HTMLCanvasElement,
  cssWidth: number,
  cssHeight: number
): CanvasRenderingContext2D | null {
  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;
  const targetW = Math.max(1, Math.round(cssWidth * dpr));
  const targetH = Math.max(1, Math.round(cssHeight * dpr));
  if (canvas.width !== targetW || canvas.height !== targetH) {
    canvas.width = targetW;
    canvas.height = targetH;
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return ctx;
}

interface DrawItem {
  depth: number;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

function shadeHex(hex: string, factor: number): string {
  const clean = hex.replace('#', '');
  if (clean.length !== 6) return hex;
  const r = Math.min(255, Math.max(0, Math.round(parseInt(clean.slice(0, 2), 16) * factor)));
  const g = Math.min(255, Math.max(0, Math.round(parseInt(clean.slice(2, 4), 16) * factor)));
  const b = Math.min(255, Math.max(0, Math.round(parseInt(clean.slice(4, 6), 16) * factor)));
  return `rgb(${r}, ${g}, ${b})`;
}

export function renderPrimitives3D(
  ctx: CanvasRenderingContext2D,
  primitives: Primitive3D[],
  width: number,
  height: number,
  cam: Camera3DState,
  isDark: boolean
) {
  const fov = 420 * cam.zoom;
  const camDist = 6.8;
  const items: DrawItem[] = [];

  const toScreen = (p: Vec3) => {
    const r = rotatePoint3D(p, cam.pitch, cam.yaw);
    return projectPoint3D(r, width, height, fov, camDist);
  };

  for (const prim of primitives) {
    if (prim.kind === 'sphere') {
      const p = toScreen(prim.pos);
      if (!p.visible) continue;
      const rPx = Math.max(2, prim.radius * p.scale);
      items.push({
        depth: p.depth,
        draw: (c) => {
          c.save();
          if (prim.alpha !== undefined) c.globalAlpha = prim.alpha;
          if (prim.glow) {
            c.shadowColor = prim.color;
            c.shadowBlur = Math.min(18, rPx * 0.85);
          }
          const grad = c.createRadialGradient(
            p.x - rPx * 0.32,
            p.y - rPx * 0.32,
            rPx * 0.1,
            p.x,
            p.y,
            rPx
          );
          grad.addColorStop(0, prim.highlight ?? '#ffffff');
          grad.addColorStop(0.32, prim.color);
          grad.addColorStop(1, prim.color.startsWith('#') ? shadeHex(prim.color, 0.55) : prim.color);

          c.beginPath();
          c.arc(p.x, p.y, rPx, 0, Math.PI * 2);
          c.fillStyle = grad;
          c.fill();
          if (prim.stroke) {
            c.shadowBlur = 0;
            c.strokeStyle = prim.stroke;
            c.lineWidth = 1.2;
            c.stroke();
          }
          if (prim.label) {
            c.shadowBlur = 0;
            c.font = `700 ${Math.max(10, Math.min(14, rPx * 0.82))}px system-ui, sans-serif`;
            c.textAlign = 'center';
            c.textBaseline = 'middle';
            c.fillStyle = prim.labelColor ?? '#ffffff';
            c.fillText(prim.label, p.x, p.y + 0.5);
          }
          c.restore();
        },
      });
    } else if (prim.kind === 'bond') {
      const pa = toScreen(prim.a);
      const pb = toScreen(prim.b);
      if (!pa.visible || !pb.visible) continue;
      const depth = (pa.depth + pb.depth) * 0.5;
      const order = prim.order ?? 1;
      const scaleAvg = (pa.scale + pb.scale) * 0.5;
      const wPx = Math.max(1.2, prim.width * scaleAvg);

      items.push({
        depth,
        draw: (c) => {
          c.save();
          if (prim.alpha !== undefined) c.globalAlpha = prim.alpha;
          c.strokeStyle = prim.color;
          c.lineCap = 'round';
          if (prim.dashed) c.setLineDash([5, 4]);

          const dx = pb.x - pa.x;
          const dy = pb.y - pa.y;
          const dist = Math.hypot(dx, dy) || 1;
          const nx = -dy / dist;
          const ny = dx / dist;

          const offsets =
            order === 1 ? [0] : order === 2 ? [-wPx * 0.72, wPx * 0.72] : [-wPx * 1.15, 0, wPx * 1.15];
          const lineW = order === 1 ? wPx : order === 2 ? wPx * 0.58 : wPx * 0.45;
          c.lineWidth = Math.max(1.2, lineW);

          for (const off of offsets) {
            c.beginPath();
            c.moveTo(pa.x + nx * off, pa.y + ny * off);
            c.lineTo(pb.x + nx * off, pb.y + ny * off);
            c.stroke();
          }
          c.restore();
        },
      });
    } else if (prim.kind === 'arrow') {
      const pa = toScreen(prim.a);
      const pb = toScreen(prim.b);
      if (!pa.visible || !pb.visible) continue;
      const depth = (pa.depth + pb.depth) * 0.5;
      const headSize = prim.headPx ?? 10;
      const lineW = prim.width ?? 3;

      items.push({
        depth,
        draw: (c) => {
          c.save();
          if (prim.alpha !== undefined) c.globalAlpha = prim.alpha;
          const dx = pb.x - pa.x;
          const dy = pb.y - pa.y;
          const angle = Math.atan2(dy, dx);
          const dist = Math.hypot(dx, dy);
          if (dist < 2) {
            c.restore();
            return;
          }

          c.strokeStyle = prim.color;
          c.fillStyle = prim.color;
          c.lineWidth = lineW;
          c.lineCap = 'round';

          c.beginPath();
          c.moveTo(pa.x, pa.y);
          c.lineTo(pb.x - Math.cos(angle) * (headSize * 0.65), pb.y - Math.sin(angle) * (headSize * 0.65));
          c.stroke();

          c.beginPath();
          c.moveTo(pb.x, pb.y);
          c.lineTo(
            pb.x - headSize * Math.cos(angle - Math.PI / 6),
            pb.y - headSize * Math.sin(angle - Math.PI / 6)
          );
          c.lineTo(
            pb.x - headSize * Math.cos(angle + Math.PI / 6),
            pb.y - headSize * Math.sin(angle + Math.PI / 6)
          );
          c.closePath();
          c.fill();

          if (prim.label) {
            c.font = '800 12px system-ui, sans-serif';
            c.textAlign = 'center';
            c.textBaseline = 'middle';
            const lx = pb.x + Math.cos(angle) * 14;
            const ly = pb.y + Math.sin(angle) * 14;
            c.fillStyle = isDark ? '#0f172a' : '#ffffff';
            c.fillRect(lx - 14, ly - 9, 28, 18);
            c.fillStyle = prim.color;
            c.fillText(prim.label, lx, ly);
          }
          c.restore();
        },
      });
    } else if (prim.kind === 'quad') {
      const pts = prim.corners.map(toScreen);
      if (pts.some((p) => !p.visible)) continue;
      const depth = (pts[0].depth + pts[1].depth + pts[2].depth + pts[3].depth) * 0.25;
      const cx = (pts[0].x + pts[1].x + pts[2].x + pts[3].x) * 0.25;
      const cy = (pts[0].y + pts[1].y + pts[2].y + pts[3].y) * 0.25;

      items.push({
        depth,
        draw: (c) => {
          c.save();
          if (prim.alpha !== undefined) c.globalAlpha = prim.alpha;
          c.beginPath();
          c.moveTo(pts[0].x, pts[0].y);
          c.lineTo(pts[1].x, pts[1].y);
          c.lineTo(pts[2].x, pts[2].y);
          c.lineTo(pts[3].x, pts[3].y);
          c.closePath();
          c.fillStyle = prim.fill;
          c.fill();
          if (prim.stroke) {
            c.strokeStyle = prim.stroke;
            c.lineWidth = prim.strokeWidth ?? 1.25;
            c.stroke();
          }
          if (prim.label) {
            c.font = '800 11px system-ui, sans-serif';
            c.textAlign = 'center';
            c.textBaseline = 'middle';
            c.fillStyle = prim.labelColor ?? (isDark ? '#f8fafc' : '#0f172a');
            c.fillText(prim.label, cx, cy);
          }
          c.restore();
        },
      });
    } else if (prim.kind === 'label') {
      const p = toScreen(prim.pos);
      if (!p.visible) continue;
      items.push({
        depth: p.depth - 0.05,
        draw: (c) => {
          c.save();
          const fs = prim.fontSize ?? 11;
          c.font = `700 ${fs}px system-ui, sans-serif`;
          c.textAlign = 'center';
          c.textBaseline = 'middle';
          if (prim.bg) {
            const metrics = c.measureText(prim.text);
            const padX = 6;
            const boxH = fs + 6;
            c.fillStyle = prim.bg;
            c.beginPath();
            c.roundRect(p.x - metrics.width / 2 - padX, p.y - boxH / 2, metrics.width + padX * 2, boxH, 5);
            c.fill();
          }
          c.fillStyle = prim.color;
          c.fillText(prim.text, p.x, p.y);
          c.restore();
        },
      });
    }
  }

  // Painter's algorithm: draw farthest primitives first
  items.sort((a, b) => b.depth - a.depth);
  for (const item of items) {
    item.draw(ctx);
  }
}

export function useDarkModeFlag(): boolean {
  const [isDark, setIsDark] = useState<boolean>(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const sync = () => setIsDark(root.classList.contains('dark'));
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  return isDark;
}

export function useOrbitCamera(options?: {
  initialPitch?: number;
  initialYaw?: number;
  initialZoom?: number;
  autoSpin?: boolean;
}) {
  const initPitch = options?.initialPitch ?? 0.32;
  const initYaw = options?.initialYaw ?? 0.45;
  const initZoom = options?.initialZoom ?? 1;

  const [pitch, setPitch] = useState(initPitch);
  const [yaw, setYaw] = useState(initYaw);
  const [zoom, setZoom] = useState(initZoom);
  const [autoSpin, setAutoSpin] = useState(options?.autoSpin ?? true);

  const draggingRef = useRef(false);
  const lastPtrRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!autoSpin) return;
    let rafId = 0;
    let lastTime = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      if (!draggingRef.current) {
        setYaw((y) => y + dt * 0.55);
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [autoSpin]);

  const onPointerDown = useCallback((e: ReactPointerEvent<HTMLElement>) => {
    draggingRef.current = true;
    lastPtrRef.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: ReactPointerEvent<HTMLElement>) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - lastPtrRef.current.x;
    const dy = e.clientY - lastPtrRef.current.y;
    lastPtrRef.current = { x: e.clientX, y: e.clientY };
    setYaw((y) => y + dx * 0.011);
    setPitch((p) => Math.max(-1.42, Math.min(1.42, p + dy * 0.011)));
  }, []);

  const onPointerUp = useCallback((e: ReactPointerEvent<HTMLElement>) => {
    draggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore if capture not active
    }
  }, []);

  const reset = useCallback(() => {
    setPitch(initPitch);
    setYaw(initYaw);
    setZoom(initZoom);
  }, [initPitch, initYaw, initZoom]);

  const zoomIn = useCallback(() => setZoom((z) => Math.min(1.65, Number((z + 0.15).toFixed(2)))), []);
  const zoomOut = useCallback(() => setZoom((z) => Math.max(0.65, Number((z - 0.15).toFixed(2)))), []);

  return {
    pitch,
    yaw,
    zoom,
    autoSpin,
    setAutoSpin,
    setPitch,
    setYaw,
    reset,
    zoomIn,
    zoomOut,
    pointerHandlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
    },
  };
}
