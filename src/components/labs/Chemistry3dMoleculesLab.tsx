import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Atom,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  Waves,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import {
  Primitive3D,
  Vec3,
  addVec3,
  crossVec3,
  normVec3,
  renderPrimitives3D,
  scaleVec3,
  setupHiDpiCanvas,
  useDarkModeFlag,
  useOrbitCamera,
  vec3,
} from '../../utils/canvas3d';

type MoleculeId =
  | 'methane'
  | 'ethane'
  | 'ethene'
  | 'ethyne'
  | 'n-butane'
  | 'isobutane'
  | 'cyclohexane'
  | 'benzene'
  | 'ethanol'
  | 'ethanoic-acid'
  | 'diamond'
  | 'graphite'
  | 'micelle';

interface MoleculeMeta {
  id: MoleculeId;
  group: 'hydrocarbons' | 'functional' | 'allotropes';
  label: string;
  formula: string;
  geometry: string;
  boardNote: string;
}

const MOLECULE_LIST: MoleculeMeta[] = [
  // Group 1: Hydrocarbons & Isomers
  {
    id: 'methane',
    group: 'hydrocarbons',
    label: 'Methane',
    formula: 'CH₄',
    geometry: 'Tetrahedral (109.5°) • 4 C–H single bonds',
    boardNote: 'Simplest alkane & primary component of CNG / biogas. Poor electrical conductor; covalent.',
  },
  {
    id: 'ethane',
    group: 'hydrocarbons',
    label: 'Ethane',
    formula: 'C₂H₆',
    geometry: 'Staggered Tetrahedral (109.5°) • 1 C–C + 6 C–H',
    boardNote: 'Saturated hydrocarbon (7 covalent bonds total). Burns with a clean blue flame.',
  },
  {
    id: 'ethene',
    group: 'hydrocarbons',
    label: 'Ethene',
    formula: 'C₂H₄',
    geometry: 'Trigonal Planar (120°) • C=C double bond',
    boardNote: 'Unsaturated alkene: undergoes catalytic addition of H₂ (Ni/Pd) to give ethane.',
  },
  {
    id: 'ethyne',
    group: 'hydrocarbons',
    label: 'Ethyne',
    formula: 'C₂H₂',
    geometry: 'Linear (180°) • C≡C triple bond',
    boardNote: 'Unsaturated alkyne (acetylene): 6 shared electrons between carbons; used in oxy-acetylene welding.',
  },
  {
    id: 'n-butane',
    group: 'hydrocarbons',
    label: 'n-Butane',
    formula: 'C₄H₁₀',
    geometry: 'Unbranched 4-Carbon Zig-Zag Chain',
    boardNote: 'Structural isomer #1 of C₄H₁₀ (straight chain; higher boiling point than isobutane).',
  },
  {
    id: 'isobutane',
    group: 'hydrocarbons',
    label: 'Isobutane',
    formula: 'C₄H₁₀',
    geometry: 'Branched 2-Methylpropane Skeleton',
    boardNote: 'Structural isomer #2 of C₄H₁₀: same molecular formula, different branched carbon skeleton.',
  },
  {
    id: 'cyclohexane',
    group: 'hydrocarbons',
    label: 'Cyclohexane',
    formula: 'C₆H₁₂',
    geometry: 'Chair-Puckered 6-C Saturated Ring',
    boardNote: 'Cyclic saturated hydrocarbon: 6 C–C single bonds + 12 C–H single bonds (18 covalent bonds).',
  },
  {
    id: 'benzene',
    group: 'hydrocarbons',
    label: 'Benzene',
    formula: 'C₆H₆',
    geometry: 'Planar Hexagonal Ring (Alternating C=C / C–C)',
    boardNote: 'Cyclic unsaturated hydrocarbon: 3 alternating C=C double bonds + 3 C–C single bonds + 6 C–H bonds.',
  },
  // Group 2: Functional Groups
  {
    id: 'ethanol',
    group: 'functional',
    label: 'Ethanol',
    formula: 'C₂H₅OH',
    geometry: 'Tetrahedral Ethyl + Hydroxyl (–OH) Group',
    boardNote: 'Active ingredient in alcoholic drinks & tincture of iodine; reacts with Na to evolve H₂; dehydrated by conc. H₂SO₄ at 443 K.',
  },
  {
    id: 'ethanoic-acid',
    group: 'functional',
    label: 'Ethanoic Acid',
    formula: 'CH₃COOH',
    geometry: 'Methyl + Planar Carboxyl (–C(=O)OH)',
    boardNote: '5–8% aqueous solution is vinegar; freezes at 290 K (glacial acetic acid); forms sweet esters with ethanol.',
  },
  // Group 3: Allotropes & Micelle
  {
    id: 'diamond',
    group: 'allotropes',
    label: 'Diamond',
    formula: 'C (3D Lattice)',
    geometry: 'Rigid 3D Tetrahedral Network (Each C bonded to 4 C)',
    boardNote: 'Hardest natural substance; ALL 4 valence electrons locked in strong covalent bonds → electrical insulator!',
  },
  {
    id: 'graphite',
    group: 'allotropes',
    label: 'Graphite',
    formula: 'C (2D Layers)',
    geometry: 'Stacked Hexagonal Graphene Sheets + Delocalized π-e⁻',
    boardNote: 'Each C bonds to 3 others in flat hexagons; 4th electron is free/delocalized (conducts electricity!) & weak interlayer forces slide (lubricant).',
  },
  {
    id: 'micelle',
    group: 'allotropes',
    label: '3D Soap Micelle',
    formula: 'R–COO⁻Na⁺ + Oil',
    geometry: 'Radial Spherical Cluster (18 Amphiphilic Soap Chains)',
    boardNote: 'Hydrophobic hydrocarbon tails dissolve inside the central amber oil droplet; hydrophilic ionic –COO⁻Na⁺ heads face outward into water so agitation rinses dirt away!',
  },
];

function atomSphere(
  pos: Vec3,
  element: 'C' | 'H' | 'O' | 'Na' | 'COO' | 'Oil' | 'e',
  isDark: boolean,
  customRadius?: number
): Primitive3D {
  switch (element) {
    case 'C':
      return {
        kind: 'sphere',
        pos,
        radius: customRadius ?? 0.24,
        color: '#334155',
        highlight: '#94a3b8',
        stroke: isDark ? '#64748b' : '#1e293b',
        label: 'C',
        labelColor: '#ffffff',
      };
    case 'H':
      return {
        kind: 'sphere',
        pos,
        radius: customRadius ?? 0.15,
        color: '#bae6fd',
        highlight: '#ffffff',
        stroke: '#0284c7',
        label: 'H',
        labelColor: '#0f172a',
      };
    case 'O':
      return {
        kind: 'sphere',
        pos,
        radius: customRadius ?? 0.23,
        color: '#ef4444',
        highlight: '#fca5a5',
        stroke: '#991b1b',
        label: 'O',
        labelColor: '#ffffff',
      };
    case 'Na':
      return {
        kind: 'sphere',
        pos,
        radius: customRadius ?? 0.14,
        color: '#a855f7',
        highlight: '#f3e8ff',
        stroke: '#6b21a8',
        label: 'Na⁺',
        labelColor: '#ffffff',
        glow: true,
      };
    case 'COO':
      return {
        kind: 'sphere',
        pos,
        radius: customRadius ?? 0.14,
        color: '#2563eb',
        highlight: '#93c5fd',
        stroke: '#1d4ed8',
        glow: true,
      };
    case 'Oil':
      return {
        kind: 'sphere',
        pos,
        radius: customRadius ?? 0.56,
        color: '#f59e0b',
        highlight: '#fef08a',
        stroke: '#b45309',
        label: 'Oil / Dirt',
        labelColor: '#451a03',
        alpha: 0.94,
      };
    case 'e':
      return {
        kind: 'sphere',
        pos,
        radius: customRadius ?? 0.08,
        color: '#38bdf8',
        highlight: '#ffffff',
        glow: true,
        alpha: 0.9,
      };
  }
}

function bondPrim(
  a: Vec3,
  b: Vec3,
  order: 1 | 2 | 3 = 1,
  isDark: boolean,
  dashed = false,
  customColor?: string
): Primitive3D {
  return {
    kind: 'bond',
    a,
    b,
    width: 0.055,
    color: customColor ?? (isDark ? '#cbd5e1' : '#475569'),
    order,
    dashed,
  };
}

function buildMoleculePrimitives(
  id: MoleculeId,
  isDark: boolean,
  timeSec: number,
  agitating: boolean
): Primitive3D[] {
  const prims: Primitive3D[] = [];

  if (id === 'methane') {
    const c = vec3(0, 0, 0);
    const d = 0.68; // tetrahedral vertex distance factor (1/sqrt(3) scaled)
    const hs = [
      vec3(d, d, d),
      vec3(d, -d, -d),
      vec3(-d, d, -d),
      vec3(-d, -d, d),
    ];
    prims.push(atomSphere(c, 'C', isDark));
    for (const h of hs) {
      prims.push(bondPrim(c, h, 1, isDark));
      prims.push(atomSphere(h, 'H', isDark));
    }
    return prims;
  }

  if (id === 'ethane') {
    const c1 = vec3(-0.62, 0, 0);
    const c2 = vec3(0.62, 0, 0);
    const hSet1 = [
      vec3(-1.05, 0.72, 0),
      vec3(-1.05, -0.36, 0.62),
      vec3(-1.05, -0.36, -0.62),
    ];
    const hSet2 = [
      vec3(1.05, -0.72, 0),
      vec3(1.05, 0.36, 0.62),
      vec3(1.05, 0.36, -0.62),
    ];
    prims.push(bondPrim(c1, c2, 1, isDark));
    prims.push(atomSphere(c1, 'C', isDark));
    prims.push(atomSphere(c2, 'C', isDark));
    for (const h of hSet1) {
      prims.push(bondPrim(c1, h, 1, isDark));
      prims.push(atomSphere(h, 'H', isDark));
    }
    for (const h of hSet2) {
      prims.push(bondPrim(c2, h, 1, isDark));
      prims.push(atomSphere(h, 'H', isDark));
    }
    return prims;
  }

  if (id === 'ethene') {
    const c1 = vec3(-0.56, 0, 0);
    const c2 = vec3(0.56, 0, 0);
    const hs: [Vec3, Vec3][] = [
      [c1, vec3(-1.14, 0.68, 0)],
      [c1, vec3(-1.14, -0.68, 0)],
      [c2, vec3(1.14, 0.68, 0)],
      [c2, vec3(1.14, -0.68, 0)],
    ];
    prims.push(bondPrim(c1, c2, 2, isDark));
    prims.push(atomSphere(c1, 'C', isDark));
    prims.push(atomSphere(c2, 'C', isDark));
    for (const [c, h] of hs) {
      prims.push(bondPrim(c, h, 1, isDark));
      prims.push(atomSphere(h, 'H', isDark));
    }
    return prims;
  }

  if (id === 'ethyne') {
    const c1 = vec3(-0.52, 0, 0);
    const c2 = vec3(0.52, 0, 0);
    const h1 = vec3(-1.32, 0, 0);
    const h2 = vec3(1.32, 0, 0);
    prims.push(bondPrim(c1, c2, 3, isDark));
    prims.push(bondPrim(c1, h1, 1, isDark));
    prims.push(bondPrim(c2, h2, 1, isDark));
    prims.push(atomSphere(c1, 'C', isDark));
    prims.push(atomSphere(c2, 'C', isDark));
    prims.push(atomSphere(h1, 'H', isDark));
    prims.push(atomSphere(h2, 'H', isDark));
    return prims;
  }

  if (id === 'n-butane') {
    const cs = [
      vec3(-1.5, -0.35, 0),
      vec3(-0.5, 0.35, 0),
      vec3(0.5, -0.35, 0),
      vec3(1.5, 0.35, 0),
    ];
    for (let i = 0; i < 3; i++) prims.push(bondPrim(cs[i], cs[i + 1], 1, isDark));
    for (const c of cs) prims.push(atomSphere(c, 'C', isDark, 0.21));
    const hs: [number, Vec3][] = [
      [0, vec3(-2.1, -0.1, 0.4)],
      [0, vec3(-2.0, -0.95, -0.25)],
      [0, vec3(-1.5, -0.2, -0.7)],
      [1, vec3(-0.5, 0.95, 0.45)],
      [1, vec3(-0.5, 0.95, -0.45)],
      [2, vec3(0.5, -0.95, 0.45)],
      [2, vec3(0.5, -0.95, -0.45)],
      [3, vec3(2.1, 0.1, -0.4)],
      [3, vec3(2.0, 0.95, 0.25)],
      [3, vec3(1.5, 0.2, 0.7)],
    ];
    for (const [ci, hp] of hs) {
      prims.push(bondPrim(cs[ci], hp, 1, isDark));
      prims.push(atomSphere(hp, 'H', isDark, 0.13));
    }
    return prims;
  }

  if (id === 'isobutane') {
    const cCenter = vec3(0, 0.2, 0);
    const branches = [
      vec3(-0.95, -0.35, 0.45),
      vec3(0.95, -0.35, 0.45),
      vec3(0, -0.35, -1.0),
    ];
    const hTop = vec3(0, 0.98, 0);
    prims.push(bondPrim(cCenter, hTop, 1, isDark));
    prims.push(atomSphere(hTop, 'H', isDark, 0.13));
    prims.push(atomSphere(cCenter, 'C', isDark, 0.22));
    for (const b of branches) {
      prims.push(bondPrim(cCenter, b, 1, isDark));
      prims.push(atomSphere(b, 'C', isDark, 0.21));
      const outDir = normVec3(subBranchVec(b, cCenter));
      const perp1 = normVec3(crossVec3(outDir, vec3(0, 1, 0.2)));
      const perp2 = normVec3(crossVec3(outDir, perp1));
      const hOffsets = [
        addVec3(b, addVec3(scaleVec3(outDir, 0.58), scaleVec3(perp1, 0.35))),
        addVec3(b, addVec3(scaleVec3(outDir, 0.58), scaleVec3(perp1, -0.35))),
        addVec3(b, addVec3(scaleVec3(outDir, 0.48), scaleVec3(perp2, 0.42))),
      ];
      for (const hp of hOffsets) {
        prims.push(bondPrim(b, hp, 1, isDark));
        prims.push(atomSphere(hp, 'H', isDark, 0.12));
      }
    }
    return prims;
  }

  if (id === 'cyclohexane') {
    const r = 1.08;
    const ring: Vec3[] = Array.from({ length: 6 }, (_, i) => {
      const a = (i * Math.PI) / 3;
      const y = i % 2 === 0 ? 0.2 : -0.2;
      return vec3(Math.cos(a) * r, y, Math.sin(a) * r);
    });
    for (let i = 0; i < 6; i++) {
      prims.push(bondPrim(ring[i], ring[(i + 1) % 6], 1, isDark));
    }
    ring.forEach((c, i) => {
      prims.push(atomSphere(c, 'C', isDark, 0.2));
      const radial = normVec3(vec3(c.x, 0, c.z));
      const hAxial = addVec3(c, vec3(0, i % 2 === 0 ? 0.65 : -0.65, 0));
      const hEq = addVec3(c, addVec3(scaleVec3(radial, 0.62), vec3(0, i % 2 === 0 ? -0.15 : 0.15, 0)));
      prims.push(bondPrim(c, hAxial, 1, isDark));
      prims.push(atomSphere(hAxial, 'H', isDark, 0.12));
      prims.push(bondPrim(c, hEq, 1, isDark));
      prims.push(atomSphere(hEq, 'H', isDark, 0.12));
    });
    return prims;
  }

  if (id === 'benzene') {
    const r = 1.05;
    const ring: Vec3[] = Array.from({ length: 6 }, (_, i) => {
      const a = (i * Math.PI) / 3;
      return vec3(Math.cos(a) * r, 0, Math.sin(a) * r);
    });
    for (let i = 0; i < 6; i++) {
      const order: 1 | 2 = i % 2 === 0 ? 2 : 1;
      prims.push(bondPrim(ring[i], ring[(i + 1) % 6], order, isDark));
    }
    ring.forEach((c) => {
      prims.push(atomSphere(c, 'C', isDark, 0.21));
      const h = scaleVec3(c, 1.62);
      prims.push(bondPrim(c, h, 1, isDark));
      prims.push(atomSphere(h, 'H', isDark, 0.13));
    });
    return prims;
  }

  if (id === 'ethanol') {
    const c1 = vec3(-0.95, 0, 0);
    const c2 = vec3(0.15, 0.35, 0);
    const o = vec3(1.12, -0.25, 0);
    const hOh = vec3(1.75, 0.25, 0);
    prims.push(bondPrim(c1, c2, 1, isDark));
    prims.push(bondPrim(c2, o, 1, isDark));
    prims.push(bondPrim(o, hOh, 1, isDark));
    prims.push(atomSphere(c1, 'C', isDark, 0.22));
    prims.push(atomSphere(c2, 'C', isDark, 0.22));
    prims.push(atomSphere(o, 'O', isDark, 0.22));
    prims.push(atomSphere(hOh, 'H', isDark, 0.14));
    const hs: [Vec3, Vec3][] = [
      [c1, vec3(-1.4, 0.65, 0.3)],
      [c1, vec3(-1.4, -0.62, 0.3)],
      [c1, vec3(-1.35, 0, -0.68)],
      [c2, vec3(0.15, 1.0, 0.45)],
      [c2, vec3(0.15, 1.0, -0.45)],
    ];
    for (const [c, h] of hs) {
      prims.push(bondPrim(c, h, 1, isDark));
      prims.push(atomSphere(h, 'H', isDark, 0.13));
    }
    return prims;
  }

  if (id === 'ethanoic-acid') {
    const c1 = vec3(-1.05, 0, 0);
    const c2 = vec3(0.18, 0, 0);
    const oDouble = vec3(0.65, 0.92, 0);
    const oSingle = vec3(0.95, -0.78, 0);
    const hAcid = vec3(1.68, -0.52, 0);
    prims.push(bondPrim(c1, c2, 1, isDark));
    prims.push(bondPrim(c2, oDouble, 2, isDark));
    prims.push(bondPrim(c2, oSingle, 1, isDark));
    prims.push(bondPrim(oSingle, hAcid, 1, isDark));
    prims.push(atomSphere(c1, 'C', isDark, 0.22));
    prims.push(atomSphere(c2, 'C', isDark, 0.22));
    prims.push(atomSphere(oDouble, 'O', isDark, 0.21));
    prims.push(atomSphere(oSingle, 'O', isDark, 0.21));
    prims.push(atomSphere(hAcid, 'H', isDark, 0.14));
    const hs = [
      vec3(-1.5, 0.68, 0.25),
      vec3(-1.5, -0.5, 0.55),
      vec3(-1.45, -0.2, -0.68),
    ];
    for (const h of hs) {
      prims.push(bondPrim(c1, h, 1, isDark));
      prims.push(atomSphere(h, 'H', isDark, 0.13));
    }
    return prims;
  }

  if (id === 'diamond') {
    // Adamantane-style 3D tetrahedral carbon network (10 core C + 4 extended C)
    const nodes: Vec3[] = [
      vec3(0, 0, 0), // 0 center
      vec3(0.75, 0.75, 0.75), // 1
      vec3(0.75, -0.75, -0.75), // 2
      vec3(-0.75, 0.75, -0.75), // 3
      vec3(-0.75, -0.75, 0.75), // 4
      // Second shell bridges forming 6-membered puckered diamond chairs
      vec3(1.5, 0, 0), // 5 bridges 1-2
      vec3(0, 1.5, 0), // 6 bridges 1-3
      vec3(0, 0, 1.5), // 7 bridges 1-4
      vec3(0, 0, -1.5), // 8 bridges 2-3
      vec3(0, -1.5, 0), // 9 bridges 2-4
      vec3(-1.5, 0, 0), // 10 bridges 3-4
      // Outer tetrahedral tips
      vec3(1.35, 1.35, 1.35), // 11 off 1
      vec3(1.35, -1.35, -1.35), // 12 off 2
      vec3(-1.35, 1.35, -1.35), // 13 off 3
      vec3(-1.35, -1.35, 1.35), // 14 off 4
    ];
    const edges: [number, number][] = [
      [0, 1], [0, 2], [0, 3], [0, 4],
      [1, 5], [2, 5],
      [1, 6], [3, 6],
      [1, 7], [4, 7],
      [2, 8], [3, 8],
      [2, 9], [4, 9],
      [3, 10], [4, 10],
      [1, 11], [2, 12], [3, 13], [4, 14],
    ];
    for (const [a, b] of edges) {
      prims.push(bondPrim(nodes[a], nodes[b], 1, isDark, false, '#0ea5e9'));
    }
    for (const n of nodes) {
      prims.push(atomSphere(n, 'C', isDark, 0.17));
    }
    return prims;
  }

  if (id === 'graphite') {
    // 2 stacked hexagonal graphene sheets with dashed weak interlayer forces + delocalized pi-electrons
    const buildLayer = (yOffset: number): Vec3[] => {
      // 13-atom 3-fused-hexagon graphene motif
      const r = 0.72;
      const centers = [
        vec3(0, yOffset, 0),
        vec3(r * 1.5, yOffset, r * 0.866),
        vec3(-r * 1.5, yOffset, r * 0.866),
      ];
      const pts: Vec3[] = [];
      const addUnique = (v: Vec3) => {
        if (!pts.some((p) => Math.hypot(p.x - v.x, p.z - v.z) < 0.15)) {
          pts.push(v);
        }
      };
      for (const c of centers) {
        for (let k = 0; k < 6; k++) {
          const ang = (k * Math.PI) / 3;
          addUnique(vec3(c.x + Math.cos(ang) * r, yOffset, c.z + Math.sin(ang) * r));
        }
      }
      return pts;
    };

    const topLayer = buildLayer(0.68);
    const botLayer = buildLayer(-0.68);

    const addSheetBonds = (pts: Vec3[]) => {
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].z - pts[j].z);
          if (d > 0.5 && d < 0.85) {
            prims.push(bondPrim(pts[i], pts[j], (i + j) % 3 === 0 ? 2 : 1, isDark));
          }
        }
      }
      for (const p of pts) {
        prims.push(atomSphere(p, 'C', isDark, 0.14));
      }
    };

    addSheetBonds(topLayer);
    addSheetBonds(botLayer);

    // Weak interlayer van der Waals dashed lines
    for (let i = 0; i < Math.min(topLayer.length, botLayer.length); i += 2) {
      prims.push(bondPrim(topLayer[i], botLayer[i], 1, isDark, true, '#94a3b8'));
    }

    // Delocalized mobile pi-electrons orbiting between layers
    for (let i = 0; i < 6; i++) {
      const ang = timeSec * 1.4 + (i * Math.PI) / 3;
      const ePos = vec3(Math.cos(ang) * 1.15, i % 2 === 0 ? 0.88 : -0.48, Math.sin(ang) * 1.15);
      prims.push(atomSphere(ePos, 'e', isDark, 0.08));
    }

    prims.push({
      kind: 'label',
      pos: vec3(0, 0, 0),
      text: 'Weak van der Waals + Free π-e⁻',
      color: isDark ? '#38bdf8' : '#0284c7',
      bg: isDark ? 'rgba(15,23,42,0.85)' : 'rgba(255,255,255,0.88)',
      fontSize: 10,
    });

    return prims;
  }

  // 3D Soap Micelle (Oil droplet + 18 radial amphiphilic soap chains)
  const jitter = agitating ? vec3(Math.sin(timeSec * 14) * 0.1, Math.cos(timeSec * 11) * 0.08, 0) : vec3(0, 0, 0);
  const pulse = agitating ? 1 + 0.08 * Math.sin(timeSec * 8) : 1;

  prims.push(atomSphere(jitter, 'Oil', isDark, 0.56 * pulse));

  const N = 18;
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const radY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;
    const dir = normVec3(vec3(Math.cos(theta) * radY, y, Math.sin(theta) * radY));
    const ref = Math.abs(dir.y) < 0.88 ? vec3(0, 1, 0) : vec3(1, 0, 0);
    const tangent = normVec3(crossVec3(dir, ref));

    // Zig-zag hydrophobic hydrocarbon tail (4 segments from inside oil outward)
    const radii = [0.46, 0.72, 0.98, 1.24, 1.52];
    const pts = radii.map((r, k) => {
      const zig = k === 0 || k === 4 ? 0 : (k % 2 === 1 ? 1 : -1) * 0.09;
      return addVec3(jitter, addVec3(scaleVec3(dir, r * pulse), scaleVec3(tangent, zig)));
    });

    for (let k = 0; k < pts.length - 1; k++) {
      prims.push(bondPrim(pts[k], pts[k + 1], 1, isDark, false, '#f59e0b'));
    }
    const headPos = pts[pts.length - 1];
    prims.push(atomSphere(headPos, 'COO', isDark, 0.13));

    const naPos = addVec3(jitter, scaleVec3(dir, 1.84 * pulse));
    prims.push(atomSphere(naPos, 'Na', isDark, 0.1));
  }

  return prims;
}

function subBranchVec(a: Vec3, b: Vec3): Vec3 {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

export function Chemistry3dMoleculesLab() {
  const [selectedId, setSelectedId] = useState<MoleculeId>('methane');
  const [agitating, setAgitating] = useState<boolean>(false);
  const [animTime, setAnimTime] = useState<number>(0);

  const isDark = useDarkModeFlag();
  const cam = useOrbitCamera({ initialPitch: 0.34, initialYaw: 0.52, initialZoom: 1, autoSpin: true });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvasSize, setCanvasSize] = useState<{ w: number; h: number }>({ w: 560, h: 350 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const obs = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = Math.max(280, Math.round(entry.contentRect.width));
        const h = w < 420 ? 290 : 355;
        setCanvasSize({ w, h });
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const needsTime = selectedId === 'graphite' || (selectedId === 'micelle' && agitating);
    if (!needsTime) return;
    let rafId = 0;
    const start = performance.now();
    const tick = (now: number) => {
      setAnimTime((now - start) / 1000);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [selectedId, agitating]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = setupHiDpiCanvas(canvas, canvasSize.w, canvasSize.h);
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasSize.w, canvasSize.h);
    const prims = buildMoleculePrimitives(selectedId, isDark, animTime, agitating);
    renderPrimitives3D(
      ctx,
      prims,
      canvasSize.w,
      canvasSize.h,
      { pitch: cam.pitch, yaw: cam.yaw, zoom: cam.zoom },
      isDark
    );
  }, [selectedId, isDark, animTime, agitating, cam.pitch, cam.yaw, cam.zoom, canvasSize.w, canvasSize.h]);

  const activeMeta = useMemo(
    () => MOLECULE_LIST.find((m) => m.id === selectedId) ?? MOLECULE_LIST[0],
    [selectedId]
  );

  const hydrocarbons = MOLECULE_LIST.filter((m) => m.group === 'hydrocarbons');
  const functional = MOLECULE_LIST.filter((m) => m.group === 'functional');
  const allotropes = MOLECULE_LIST.filter((m) => m.group === 'allotropes');

  return (
    <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50/50 to-white p-4 sm:p-5 space-y-4 no-word-lookup select-none dark:border-violet-900/60 dark:from-slate-900 dark:to-slate-950">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Atom className="h-5 w-5 text-violet-600 dark:text-violet-400" />
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              3D Molecular Geometry, Carbon Allotropes &amp; Soap Micelle Explorer
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-400">
              Drag canvas to orbit 360° • Inspect tetrahedral, planar, linear, diamond/graphite lattices &amp; 3D emulsification
            </p>
          </div>
        </div>

        {/* Camera controls */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => cam.setAutoSpin((s) => !s)}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {cam.autoSpin ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {cam.autoSpin ? 'Pause' : 'Spin'}
          </button>
          <button
            type="button"
            onClick={cam.zoomIn}
            className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            aria-label="Zoom in"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={cam.zoomOut}
            className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            aria-label="Zoom out"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={cam.reset}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
        </div>
      </div>

      {/* 3 Grouped Selector */}
      <div className="grid gap-2.5 lg:grid-cols-3 text-xs">
        <div className="rounded-xl border border-slate-200 bg-white p-2.5 space-y-1.5 dark:border-slate-800 dark:bg-slate-950">
          <div className="text-[10.5px] font-extrabold uppercase tracking-wider text-violet-700 dark:text-violet-400">
            1. Hydrocarbons &amp; Isomers
          </div>
          <div className="flex flex-wrap gap-1">
            {hydrocarbons.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedId(m.id)}
                className={`rounded-lg px-2 py-1 text-[11px] font-bold border transition cursor-pointer ${
                  selectedId === m.id
                    ? 'bg-violet-600 text-white border-violet-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
                }`}
              >
                {m.label} ({m.formula})
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-2.5 space-y-1.5 dark:border-slate-800 dark:bg-slate-950">
          <div className="text-[10.5px] font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-400">
            2. Functional Groups
          </div>
          <div className="flex flex-wrap gap-1">
            {functional.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedId(m.id)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold border transition cursor-pointer ${
                  selectedId === m.id
                    ? 'bg-rose-600 text-white border-rose-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
                }`}
              >
                {m.label} ({m.formula})
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-2.5 space-y-1.5 dark:border-slate-800 dark:bg-slate-950">
          <div className="text-[10.5px] font-extrabold uppercase tracking-wider text-sky-700 dark:text-sky-400">
            3. Allotropes &amp; 3D Micelle
          </div>
          <div className="flex flex-wrap gap-1">
            {allotropes.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedId(m.id)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold border transition cursor-pointer ${
                  selectedId === m.id
                    ? 'bg-sky-600 text-white border-sky-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Canvas Stage */}
      <div
        ref={containerRef}
        className="relative rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-100 to-slate-200/70 overflow-hidden shadow-inner no-word-lookup select-none dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      >
        <canvas
          ref={canvasRef}
          style={{ width: `${canvasSize.w}px`, height: `${canvasSize.h}px` }}
          className="block mx-auto cursor-grab active:cursor-grabbing no-word-lookup select-none touch-none"
          {...cam.pointerHandlers}
        />

        {/* Element Color Key Overlay */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 bg-white/90 px-3.5 py-2 text-[11px] text-slate-800 dark:border-slate-800 dark:bg-slate-950/90 dark:text-slate-200">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-slate-600 border border-slate-400" /> C (Carbon)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-sky-200 border border-sky-500" /> H (Hydrogen)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500 border border-red-800" /> O (Oxygen)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-purple-500 border border-purple-300" /> Na⁺ / –COO⁻
            </span>
          </div>

          {selectedId === 'micelle' && (
            <button
              type="button"
              onClick={() => setAgitating((a) => !a)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-extrabold transition cursor-pointer ${
                agitating
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-sky-600 text-white hover:bg-sky-500'
              }`}
            >
              <Waves className="h-3.5 w-3.5" />
              {agitating ? 'Rinsing / Agitating Micelle!' : 'Agitate / Rinse Away'}
            </button>
          )}
        </div>
      </div>

      {/* Info Footer */}
      <div className="rounded-xl border border-slate-200 bg-white p-3.5 text-xs space-y-1.5 dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-violet-600" />
            {activeMeta.label} — <span className="font-mono text-violet-700 dark:text-violet-300">{activeMeta.formula}</span>
          </span>
          <span className="rounded-md bg-violet-50 border border-violet-200 px-2 py-0.5 font-bold text-violet-800 dark:bg-violet-950/40 dark:border-violet-800 dark:text-violet-300">
            {activeMeta.geometry}
          </span>
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{activeMeta.boardNote}</p>
      </div>
    </div>
  );
}
