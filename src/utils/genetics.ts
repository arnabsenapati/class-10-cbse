export interface TraitConfig {
  id: string;
  character: string;
  dominantLetter: string;
  recessiveLetter: string;
  dominantLabel: string;
  recessiveLabel: string;
  dominantColor: string;
  recessiveColor: string;
}

export const MONOHYBRID_TRAITS: TraitConfig[] = [
  {
    id: 'height',
    character: 'Stem Height (NCERT Standard)',
    dominantLetter: 'T',
    recessiveLetter: 't',
    dominantLabel: 'Tall',
    recessiveLabel: 'Dwarf',
    dominantColor: '#0f766e',
    recessiveColor: '#d97706',
  },
  {
    id: 'flower-color',
    character: 'Flower Colour',
    dominantLetter: 'V',
    recessiveLetter: 'v',
    dominantLabel: 'Violet',
    recessiveLabel: 'White',
    dominantColor: '#7c3aed',
    recessiveColor: '#64748b',
  },
  {
    id: 'seed-shape',
    character: 'Seed Shape',
    dominantLetter: 'R',
    recessiveLetter: 'r',
    dominantLabel: 'Round',
    recessiveLabel: 'Wrinkled',
    dominantColor: '#0284c7',
    recessiveColor: '#b45309',
  },
  {
    id: 'pod-color',
    character: 'Pod Colour',
    dominantLetter: 'G',
    recessiveLetter: 'g',
    dominantLabel: 'Green',
    recessiveLabel: 'Yellow',
    dominantColor: '#15803d',
    recessiveColor: '#ca8a04',
  },
];

export interface DihybridTraitPair {
  id: string;
  title: string;
  gene1: TraitConfig;
  gene2: TraitConfig;
}

export const DIHYBRID_TRAIT_PAIRS: DihybridTraitPair[] = [
  {
    id: 'seed-shape-color',
    title: 'Seed Shape & Seed Colour (NCERT Standard)',
    gene1: {
      id: 'seed-shape',
      character: 'Seed Shape',
      dominantLetter: 'R',
      recessiveLetter: 'r',
      dominantLabel: 'Round',
      recessiveLabel: 'Wrinkled',
      dominantColor: '#0f766e',
      recessiveColor: '#b45309',
    },
    gene2: {
      id: 'seed-color',
      character: 'Seed Colour',
      dominantLetter: 'Y',
      recessiveLetter: 'y',
      dominantLabel: 'Yellow',
      recessiveLabel: 'Green',
      dominantColor: '#ca8a04',
      recessiveColor: '#15803d',
    },
  },
  {
    id: 'height-flower',
    title: 'Stem Height & Flower Colour',
    gene1: {
      id: 'height',
      character: 'Stem Height',
      dominantLetter: 'T',
      recessiveLetter: 't',
      dominantLabel: 'Tall',
      recessiveLabel: 'Dwarf',
      dominantColor: '#0f766e',
      recessiveColor: '#d97706',
    },
    gene2: {
      id: 'flower-color',
      character: 'Flower Colour',
      dominantLetter: 'V',
      recessiveLetter: 'v',
      dominantLabel: 'Violet',
      recessiveLabel: 'White',
      dominantColor: '#7c3aed',
      recessiveColor: '#64748b',
    },
  },
];

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

export function simplifyCounts(counts: number[]): number[] {
  const nonZero = counts.filter((c) => c > 0);
  if (nonZero.length === 0) return counts;
  const divisor = nonZero.reduce((acc, val) => gcd(acc, val));
  return counts.map((c) => (c > 0 ? c / divisor : 0));
}

export function formatPair(a: string, b: string, domLetter: string): string {
  if (a === b) return a + b;
  return a === domLetter ? a + b : b + a;
}

export function isHomozygousDominant(pair: string, domLetter: string): boolean {
  return pair === domLetter + domLetter;
}

export function isRecessive(pair: string, recLetter: string): boolean {
  return pair === recLetter + recLetter;
}

export function getMonoPhenotype(genotype: string, trait: TraitConfig): string {
  return genotype.includes(trait.dominantLetter)
    ? trait.dominantLabel
    : trait.recessiveLabel;
}

export function getMonoGenotypeClass(genotype: string, trait: TraitConfig): string {
  if (genotype === trait.dominantLetter + trait.dominantLetter) {
    return 'Homozygous Dominant';
  }
  if (genotype === trait.recessiveLetter + trait.recessiveLetter) {
    return 'Homozygous Recessive';
  }
  return 'Heterozygous (Hybrid)';
}

export interface MonoCell {
  row: number;
  col: number;
  gameteRow: string;
  gameteCol: string;
  genotype: string;
  phenotype: string;
  isDominant: boolean;
}

export interface MonoCrossResult {
  parent1: string;
  parent2: string;
  gametes1: string[];
  gametes2: string[];
  cells: MonoCell[][];
  genotypeCounts: { genotype: string; count: number; percentage: number; classification: string }[];
  phenotypeCounts: { phenotype: string; count: number; percentage: number; isDominant: boolean }[];
  phenotypicRatioText: string;
  genotypicRatioText: string;
}

export function solveMonohybridCross(
  parent1Raw: string,
  parent2Raw: string,
  trait: TraitConfig
): MonoCrossResult {
  const p1 = formatPair(parent1Raw[0], parent1Raw[1], trait.dominantLetter);
  const p2 = formatPair(parent2Raw[0], parent2Raw[1], trait.dominantLetter);

  const gametes1 = [p1[0], p1[1]];
  const gametes2 = [p2[0], p2[1]];

  const cells: MonoCell[][] = gametes1.map((g1, r) =>
    gametes2.map((g2, c) => {
      const genotype = formatPair(g1, g2, trait.dominantLetter);
      const isDominant = genotype.includes(trait.dominantLetter);
      const phenotype = isDominant ? trait.dominantLabel : trait.recessiveLabel;
      return {
        row: r,
        col: c,
        gameteRow: g1,
        gameteCol: g2,
        genotype,
        phenotype,
        isDominant,
      };
    })
  );

  const flat = cells.flat();
  const total = flat.length;

  const domGeno = trait.dominantLetter + trait.dominantLetter;
  const hetGeno = trait.dominantLetter + trait.recessiveLetter;
  const recGeno = trait.recessiveLetter + trait.recessiveLetter;

  const orderedGenotypes = [domGeno, hetGeno, recGeno];
  const genotypeCounts = orderedGenotypes
    .map((g) => {
      const count = flat.filter((cell) => cell.genotype === g).length;
      return {
        genotype: g,
        count,
        percentage: Math.round((count / total) * 100),
        classification: getMonoGenotypeClass(g, trait),
      };
    })
    .filter((entry) => entry.count > 0);

  const domCount = flat.filter((c) => c.isDominant).length;
  const recCount = total - domCount;

  const phenotypeCounts = [
    {
      phenotype: trait.dominantLabel,
      count: domCount,
      percentage: Math.round((domCount / total) * 100),
      isDominant: true,
    },
    {
      phenotype: trait.recessiveLabel,
      count: recCount,
      percentage: Math.round((recCount / total) * 100),
      isDominant: false,
    },
  ].filter((entry) => entry.count > 0);

  const phenoSimplified = simplifyCounts(phenotypeCounts.map((p) => p.count));
  const genoSimplified = simplifyCounts(genotypeCounts.map((g) => g.count));

  return {
    parent1: p1,
    parent2: p2,
    gametes1,
    gametes2,
    cells,
    genotypeCounts,
    phenotypeCounts,
    phenotypicRatioText:
      phenotypeCounts.length === 1
        ? `100% ${phenotypeCounts[0].phenotype}`
        : `${phenoSimplified.join(' : ')} (${phenotypeCounts.map((p, i) => `${phenoSimplified[i]} ${p.phenotype}`).join(' : ')})`,
    genotypicRatioText:
      genotypeCounts.length === 1
        ? `100% ${genotypeCounts[0].genotype}`
        : `${genoSimplified.join(' : ')} (${genotypeCounts.map((g, i) => `${genoSimplified[i]} ${g.genotype}`).join(' : ')})`,
  };
}

export function getDihybridGametes(genotype: string): string[] {
  // Expects 4-letter genotype like RrYy
  const g1a = genotype[0];
  const g1b = genotype[1];
  const g2a = genotype[2];
  const g2b = genotype[3];
  return [g1a + g2a, g1a + g2b, g1b + g2a, g1b + g2b];
}

export function combineDihybridGametes(
  gam1: string,
  gam2: string,
  pair: DihybridTraitPair
): string {
  const part1 = formatPair(gam1[0], gam2[0], pair.gene1.dominantLetter);
  const part2 = formatPair(gam1[1], gam2[1], pair.gene2.dominantLetter);
  return part1 + part2;
}

export type DihybridCategoryKey = 'dom-dom' | 'dom-rec' | 'rec-dom' | 'rec-rec';

export interface DihybridCell {
  row: number;
  col: number;
  gameteRow: string;
  gameteCol: string;
  genotype: string;
  phenotype: string;
  category: DihybridCategoryKey;
  isRecombinant: boolean;
}

export interface DihybridPhenotypeGroup {
  category: DihybridCategoryKey;
  label: string;
  count: number;
  percentage: number;
  isRecombinant: boolean;
  genotypes: { genotype: string; count: number }[];
}

export interface DihybridCrossResult {
  parent1: string;
  parent2: string;
  gametes1: string[];
  gametes2: string[];
  cells: DihybridCell[][];
  phenotypeGroups: DihybridPhenotypeGroup[];
  phenotypicRatioText: string;
  uniqueGenotypesCount: number;
}

export function solveDihybridCross(
  parent1: string,
  parent2: string,
  pair: DihybridTraitPair
): DihybridCrossResult {
  const p1 =
    formatPair(parent1[0], parent1[1], pair.gene1.dominantLetter) +
    formatPair(parent1[2], parent1[3], pair.gene2.dominantLetter);
  const p2 =
    formatPair(parent2[0], parent2[1], pair.gene1.dominantLetter) +
    formatPair(parent2[2], parent2[3], pair.gene2.dominantLetter);

  const gametes1 = getDihybridGametes(p1);
  const gametes2 = getDihybridGametes(p2);

  const cells: DihybridCell[][] = gametes1.map((g1, r) =>
    gametes2.map((g2, c) => {
      const genotype = combineDihybridGametes(g1, g2, pair);
      const hasDom1 = genotype.slice(0, 2).includes(pair.gene1.dominantLetter);
      const hasDom2 = genotype.slice(2, 4).includes(pair.gene2.dominantLetter);

      let category: DihybridCategoryKey;
      if (hasDom1 && hasDom2) category = 'dom-dom';
      else if (hasDom1 && !hasDom2) category = 'dom-rec';
      else if (!hasDom1 && hasDom2) category = 'rec-dom';
      else category = 'rec-rec';

      const t1 = hasDom1 ? pair.gene1.dominantLabel : pair.gene1.recessiveLabel;
      const t2 = hasDom2 ? pair.gene2.dominantLabel : pair.gene2.recessiveLabel;

      return {
        row: r,
        col: c,
        gameteRow: g1,
        gameteCol: g2,
        genotype,
        phenotype: `${t1} & ${t2}`,
        category,
        isRecombinant: category === 'dom-rec' || category === 'rec-dom',
      };
    })
  );

  const flat = cells.flat();
  const total = flat.length;

  const order: { key: DihybridCategoryKey; label: string; isRecombinant: boolean }[] = [
    {
      key: 'dom-dom',
      label: `${pair.gene1.dominantLabel} & ${pair.gene2.dominantLabel}`,
      isRecombinant: false,
    },
    {
      key: 'dom-rec',
      label: `${pair.gene1.dominantLabel} & ${pair.gene2.recessiveLabel}`,
      isRecombinant: true,
    },
    {
      key: 'rec-dom',
      label: `${pair.gene1.recessiveLabel} & ${pair.gene2.dominantLabel}`,
      isRecombinant: true,
    },
    {
      key: 'rec-rec',
      label: `${pair.gene1.recessiveLabel} & ${pair.gene2.recessiveLabel}`,
      isRecombinant: false,
    },
  ];

  const phenotypeGroups: DihybridPhenotypeGroup[] = order
    .map((item) => {
      const matches = flat.filter((c) => c.category === item.key);
      const genoMap = new Map<string, number>();
      for (const m of matches) {
        genoMap.set(m.genotype, (genoMap.get(m.genotype) ?? 0) + 1);
      }
      return {
        category: item.key,
        label: item.label,
        count: matches.length,
        percentage: Math.round((matches.length / total) * 1000) / 10,
        isRecombinant: item.isRecombinant,
        genotypes: Array.from(genoMap.entries()).map(([genotype, count]) => ({
          genotype,
          count,
        })),
      };
    })
    .filter((g) => g.count > 0);

  const simplified = simplifyCounts(phenotypeGroups.map((g) => g.count));
  const phenotypicRatioText =
    phenotypeGroups.length === 1
      ? `100% ${phenotypeGroups[0].label}`
      : simplified.join(' : ');

  const uniqueGenotypesCount = new Set(flat.map((c) => c.genotype)).size;

  return {
    parent1: p1,
    parent2: p2,
    gametes1,
    gametes2,
    cells,
    phenotypeGroups,
    phenotypicRatioText,
    uniqueGenotypesCount,
  };
}
