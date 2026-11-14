import { Topic } from '../../../types/curriculum';

export const topicDihybridCross: Topic = {
  id: 'bio-topic-4',
  slug: 'dihybrid-cross',
  order: 4,
  title: 'Dihybrid Cross (Two-Trait Inheritance)',
  description:
    'Master Mendel’s 16-box Round-Yellow × Wrinkled-Green cross, discover how new trait combinations appear, and prove the 9:3:3:1 ratio.',
  ncertChapter: 'Chapter 8: Heredity (Section 8.2.2 — Two Contrasting Traits)',
  subtopics: [
    {
      id: 'bio-sub-4-1',
      slug: 'mendel-dihybrid-experiment',
      title: 'Mendel’s Dihybrid Experiment & 16-Box Punnett Square',
      subtitle:
        'What happens when TWO traits are inherited together? Follow Round Yellow (RRYY) × Wrinkled Green (rryy) all the way through the 4×4 Punnett grid.',
      estimatedMinutes: 16,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT 8.2.2 (Round-Yellow & Wrinkled-Green Seeds)',
      learningObjectives: [
        'Define a Dihybrid Cross clearly with the NCERT seed-shape + seed-colour example.',
        'Trace P → F₁ cleanly: why RRYY × rryy produces only RrYy (Round Yellow) seeds in F₁.',
        'Use the FOIL rule to derive the 4 gametes (RY, Ry, rY, ry) from RrYy and populate all 16 boxes of the F₂ grid.',
      ],
      keywords: [
        'dihybrid cross',
        'RRYY x rryy',
        'RrYy',
        'round yellow',
        'wrinkled green',
        '16 box punnett square',
        'two traits',
      ],
      sections: [
        {
          id: 'what-is-dihybrid-cross',
          title: '1. What Is a Dihybrid Cross?',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Dihybrid Cross at a Glance',
              bullets: [
                'Tracks **2 traits together**: Seed Shape (`R/r`) + Seed Colour (`Y/y`).',
                '**`P` → `F₁`:** `RRYY × rryy` → 100% `RrYy` (Round Yellow).',
                '**`F₁` Selfing (`RrYy × RrYy`):** 4 gametes each (`RY, Ry, rY, ry`) → 16-box grid → **`9 : 3 : 3 : 1`** phenotypic ratio.',
              ],
            },
            {
              type: 'visual-diagram',
              diagramId: 'dihybrid-visual',
              title: 'Visual Roadmap: Round-Yellow × Wrinkled-Green → 9 : 3 : 3 : 1',
              caption: 'Look at the middle two groups (3 Round-Green & 3 Wrinkled-Yellow) — brand-new combinations that prove traits inherit independently!',
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'Definition: Dihybrid Cross',
              body: 'A **dihybrid cross** (*di* = two) is a genetic cross between two parents that tracks the simultaneous inheritance of **TWO pairs of contrasting characters** — in NCERT, **Seed Shape** (Round `R` vs. Wrinkled `r`) and **Seed Colour** (Yellow `Y` vs. Green `y`).',
            },
            {
              type: 'paragraph',
              text: 'After proving how one trait behaves (`3:1`), Mendel asked a deeper question: **Are two different traits chained together forever, or can they shuffle independently?** For example, must Round seeds *always* stay Yellow, and Wrinkled seeds *always* stay Green?',
            },
          ],
        },
        {
          id: 'dihybrid-p-to-f1',
          title: '2. Stage 1: Crossing Pure Parents (`RRYY × rryy` → `F₁`)',
          blocks: [
            {
              type: 'steps',
              title: 'From Pure Lines to Hybrid F₁',
              items: [
                {
                  label: 'Parental Generation (`P`)',
                  detail: 'Pure **Round, Yellow** seeded plant (`RRYY`) × Pure **Wrinkled, Green** seeded plant (`rryy`).',
                },
                {
                  label: 'Gamete Formation (One allele of EACH gene!)',
                  detail: '`RRYY` can only put one `R` and one `Y` into every gamete → **`RY`**. Similarly, `rryy` produces only **`ry`** gametes.',
                  example: 'Check: Each gamete has 2 letters (one for shape `R/r`, one for colour `Y/y`) — never `RR` or `YY`!',
                },
                {
                  label: '`F₁` Generation (`RrYy`)',
                  detail: 'When `RY` fuses with `ry`, **100% of `F₁` seeds have genotype `RrYy`**.',
                },
                {
                  label: '`F₁` Phenotype',
                  detail: 'Since Round (`R`) dominates Wrinkled (`r`) and Yellow (`Y`) dominates Green (`y`), **ALL `F₁` plants produce Round & Yellow seeds**.',
                },
              ],
            },
            {
              type: 'cross-flow',
              title: 'Board-Exam Flowchart: P → F₁ Dihybrid Cross',
              parents: 'Round Yellow (`RRYY`)  ×  Wrinkled Green (`rryy`)',
              gametes: '`RY`   ×   `ry`',
              f1: 'All `RrYy` — 100% Round & Yellow Seeds (Dihybrid)',
            },
          ],
        },
        {
          id: 'dihybrid-f1-to-f2-grid',
          title: '3. Stage 2: Selfing `F₁` (`RrYy × RrYy`) → The 4×4 Punnett Grid',
          blocks: [
            {
              type: 'paragraph',
              text: 'When Mendel self-pollinated the `F₁` plants (`RrYy × RrYy`), each parent produced **4 types of gametes** in equal numbers (`RY`, `Ry`, `rY`, `ry`) via the FOIL rule. Combining 4 male gametes × 4 female gametes creates a **4 × 4 = 16-box Punnett square**.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'How to Combine Any Two Dihybrid Gametes Error-Free',
              body: 'Suppose row gamete is **`rY`** and column gamete is **`Ry`**. Group the `R`s together (capital first → **`Rr`**), then group the `Y`s together (capital first → **`Yy`**), giving **`RrYy`**. NEVER write `rYRy`!',
            },
            {
              type: 'notebook-mistake',
              studentName: 'Ananya',
              title: 'Dihybrid Box Format',
              wrongWork: 'rY  +  Ry   →   rYRy',
              teacherFix: 'rY  +  Ry   →   RrYy',
              whyWrong: 'Always keep alleles of the same gene paired together (`R/r` together, `Y/y` together), with the capital letter first in each pair!',
            },
            {
              type: 'lab',
              labId: 'dihybrid-simulator',
              title: 'Interactive Lab: 16-Box Dihybrid Punnett Explorer',
              caption: 'Click any box inside the 4×4 grid to trace its parent gametes and highlight every box in the same phenotype family (`9:3:3:1`). You can also switch parent presets or test custom 2-trait crosses!',
            },
          ],
        },
      ],
    },
    {
      id: 'bio-sub-4-2',
      slug: '9-3-3-1-ratio-and-independent-assortment',
      title: 'The 9:3:3:1 Ratio, Recombinants & Independent Assortment',
      subtitle:
        'Decode all 16 boxes effortlessly, spot the 2 brand-new trait combinations, master CBSE seed-count numericals, and understand Mendel’s 3rd Law.',
      estimatedMinutes: 15,
      difficulty: 'Board Mastery',
      ncertSection: 'NCERT 8.2.2 (Independent Inheritance of Two Traits)',
      learningObjectives: [
        'Break down the 9:3:3:1 F₂ phenotypic ratio into parental and new recombinant phenotypes.',
        'State Mendel’s Law of Independent Assortment and explain why new combinations prove it.',
        'Use the (3:1) × (3:1) and (1:2:1) × (1:2:1) shortcuts to check answers in seconds.',
        'Solve CBSE numerical questions calculating expected counts out of total F₂ seeds (e.g., out of 1600 or 800 seeds).',
      ],
      keywords: [
        '9:3:3:1 ratio',
        'independent assortment',
        'recombinant traits',
        'round green',
        'wrinkled yellow',
        'dihybrid genotypic ratio',
        'seed count numerical',
      ],
      sections: [
        {
          id: 'decoding-9-3-3-1',
          title: '1. Decoding the 9 : 3 : 3 : 1 Ratio & Spotting New Combinations',
          blocks: [
            {
              type: 'paragraph',
              text: 'When you count the phenotypes of all 16 boxes in `RrYy × RrYy`, four distinct visual combinations emerge. Notice carefully which two looked like the original grandparents (`P`), and which two are **brand-new combinations** never seen in `P` or `F₁`!',
            },
            {
              type: 'table',
              caption: 'Complete Breakdown of the 16 F₂ Offspring in Mendel’s Dihybrid Cross',
              headers: ['Phenotype Group', 'Count (out of 16)', 'Genotypes Included', 'Origin Type'],
              rows: [
                ['**Round & Yellow** (Both dominant)', '**9 / 16** (56.25%)', '`RRYY` (1), `RRYy` (2), `RrYY` (2), `RrYy` (4)', 'Parental combination (same as P₁)'],
                ['**Round & Green** (Dom 1 + Rec 2)', '**3 / 16** (18.75%)', '`RRyy` (1), `Rryy` (2)', '**NEW Recombinant combination!**'],
                ['**Wrinkled & Yellow** (Rec 1 + Dom 2)', '**3 / 16** (18.75%)', '`rrYY` (1), `rrYy` (2)', '**NEW Recombinant combination!**'],
                ['**Wrinkled & Green** (Both recessive)', '**1 / 16** (6.25%)', '`rryy` (1)', 'Parental combination (same as P₂)'],
              ],
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'Why Are Round-Green and Wrinkled-Yellow So Important in CBSE?',
              body: 'In the original `P` generation, Round always appeared with Yellow, and Wrinkled always appeared with Green. If shape and colour were glued together, `F₂` would only have Round-Yellow and Wrinkled-Green in a `3:1` ratio. Instead, **new combinations (`Round-Green` and `Wrinkled-Yellow`) appeared!** This proved that seed shape and seed colour are inherited **independently** of each other.',
            },
            {
              type: 'checkpoint',
              prompt: 'In Mendel’s dihybrid `F₂` (`9:3:3:1`), tap the **TWO brand-new recombinant phenotypes** that did NOT exist in the original `P` parents (`RRYY` & `rryy`):',
              options: [
                { id: 'ry', label: 'Round & Yellow (9/16)' },
                { id: 'rg', label: 'Round & Green (3/16)' },
                { id: 'wy', label: 'Wrinkled & Yellow (3/16)' },
                { id: 'wg', label: 'Wrinkled & Green (1/16)' },
              ],
              correctIds: ['rg', 'wy'],
              multiSelect: true,
              successMsg: 'Nailed it! Round & Green (3/16) and Wrinkled & Yellow (3/16) prove the Law of Independent Assortment!',
              hintMsg: 'The P parents were Round-Yellow and Wrinkled-Green — pick the two mixed combinations!',
            },
          ],
        },
        {
          id: 'law-of-independent-assortment',
          title: '2. Mendel’s 3rd Law: Law of Independent Assortment',
          blocks: [
            {
              type: 'callout',
              variant: 'law',
              title: '3rd Law: Law of Independent Assortment',
              body: 'When two pairs of traits are combined in a hybrid (`RrYy`), **the segregation of one pair of characters (`R/r`) is completely independent of the other pair (`Y/y`)** during gamete formation. Each allele of one gene can combine freely with either allele of the other gene (`RY`, `Ry`, `rY`, `ry` in equal 25% proportions).',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: '10-Second Math Verification Trick (For Checking Exams!)',
              body: 'A dihybrid cross is literally **two independent monohybrid crosses multiplied together**:\n• Seed Shape alone (`Rr × Rr`) = `3 Round : 1 Wrinkled`\n• Seed Colour alone (`Yy × Yy`) = `3 Yellow : 1 Green`\n• Multiply `(3 + 1) × (3 + 1)` = **`9 : 3 : 3 : 1`**!',
            },
            {
              type: 'dig-deeper',
              title: 'Optional Genotypic Ratio Shortcut: `(1:2:1) × (1:2:1)`',
              summary: 'For Olympiad or extra-credit checks, multiplying the two monohybrid genotypic ratios `(1 TT : 2 Tt : 1 tt)` gives all 9 unique genotypes of `RrYy × RrYy` in exact proportions: `1 : 2 : 2 : 4 : 1 : 2 : 1 : 2 : 1` (with `4/16` being double-heterozygous `RrYy` along the main anti-diagonal!).',
            },
          ],
        },
        {
          id: 'monohybrid-vs-dihybrid-comparison',
          title: '3. Monohybrid vs. Dihybrid Cross — Quick Comparison',
          blocks: [
            {
              type: 'table',
              caption: 'Master Exam Revision Table: Monohybrid vs. Dihybrid Cross',
              headers: ['Feature', 'Monohybrid Cross', 'Dihybrid Cross'],
              rows: [
                ['Number of traits studied', '1 pair of contrasting traits', '2 pairs of contrasting traits'],
                ['Standard NCERT Parents (`P`)', '`TT` (Tall) × `tt` (Dwarf)', '`RRYY` (Round Yellow) × `rryy` (Wrinkled Green)'],
                ['`F₁` Genotype & Phenotype', '`Tt` (100% Tall)', '`RrYy` (100% Round Yellow)'],
                ['Unique gametes per `F₁` parent', '2 (`T`, `t`)', '4 (`RY`, `Ry`, `rY`, `ry`)'],
                ['Punnett Square Size', '2 × 2 = **4 boxes**', '4 × 4 = **16 boxes**'],
                ['`F₂` Phenotypic Ratio', '**`3 : 1`**', '**`9 : 3 : 3 : 1`**'],
                ['`F₂` Genotypic Ratio', '**`1 : 2 : 1`**', '**`1 : 2 : 2 : 4 : 1 : 2 : 1 : 2 : 1`**'],
                ['Laws Illustrated', 'Law of Dominance & Law of Segregation', 'Law of Independent Assortment'],
              ],
            },
          ],
        },
        {
          id: 'sub-4-2-cbse-qa',
          title: '4. High-Frequency CBSE Board Questions & Numericals',
          blocks: [
            {
              type: 'qa',
              marks: 3,
              tag: 'Numerical',
              question: 'In a dihybrid cross between `RRYY` and `rryy` pea plants, **1600 seeds** were obtained in the `F₂` generation. Calculate the expected number of seeds that are: (a) Round & Yellow, (b) Round & Green, (c) Wrinkled & Yellow, and (d) Wrinkled & Green.',
              answer:
                'The `F₂` phenotypic ratio of a dihybrid cross is **9 : 3 : 3 : 1** (Total parts = 9 + 3 + 3 + 1 = **16**).\n\n• **(a) Round & Yellow:** (9 / 16) × 1600 = **900 seeds**\n• **(b) Round & Green:** (3 / 16) × 1600 = **300 seeds**\n• **(c) Wrinkled & Yellow:** (3 / 16) × 1600 = **300 seeds**\n• **(d) Wrinkled & Green:** (1 / 16) × 1600 = **100 seeds**\n\nCheck: 900 + 300 + 300 + 100 = 1600 seeds.',
              markingTip: 'Always write the fraction out of 16 first (`9/16`, `3/16`, `1/16`) before multiplying by the given total seeds (e.g. 800, 1600, or 320)!',
            },
            {
              type: 'qa',
              marks: 5,
              tag: 'CBSE Board Pattern',
              question: 'Explain with the help of a cross how Mendel showed that traits are inherited independently of each other. Name the new combinations obtained in `F₂`.',
              answer:
                'Mendel crossed pure **Round Yellow (`RRYY`)** pea plants with pure **Wrinkled Green (`rryy`)** pea plants.\n1. **F₁ Generation:** All progeny were `RrYy` (Round and Yellow).\n2. **F₂ Generation (Selfing `RrYy × RrYy`):** Each `F₁` plant produced 4 types of gametes (`RY`, `Ry`, `rY`, `ry`), yielding 16 offspring in the ratio **9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green**.\n3. **Conclusion & New Combinations:** Along with the original parental combinations, **two new recombinant phenotypes appeared: Round Green (3/16) and Wrinkled Yellow (3/16)**.\n\nThis proved that seed shape (`R/r`) and seed colour (`Y/y`) are inherited independently (Law of Independent Assortment).',
            },
          ],
        },
      ],
    },
  ],
};
