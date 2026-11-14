import { Topic } from '../../../types/curriculum';

export const topicMonohybridCross: Topic = {
  id: 'bio-topic-3',
  slug: 'monohybrid-cross',
  order: 3,
  title: 'Monohybrid Cross (Single-Trait Inheritance)',
  description:
    'Trace Mendel’s famous Tall × Dwarf experiment across P, F₁, and F₂ generations, verify 3:1 and 1:2:1 ratios, and practice CBSE twist crosses.',
  ncertChapter: 'Chapter 8: Heredity (Section 8.2.2)',
  subtopics: [
    {
      id: 'bio-sub-3-1',
      slug: 'mendel-monohybrid-experiment',
      title: 'Mendel’s Monohybrid Experiment (P → F₁ → F₂)',
      subtitle:
        'What happens when you cross a pure Tall pea plant with a pure Dwarf pea plant? Follow every generation and see why dwarfness hides in F₁ and returns in F₂.',
      estimatedMinutes: 14,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT 8.2.2 (Tall & Short Pea Plant Cross)',
      learningObjectives: [
        'Define a Monohybrid Cross clearly with the standard NCERT example.',
        'Draw the complete P → F₁ → F₂ cross diagram and 2×2 Punnett square in CBSE board format.',
        'State and distinguish the F₂ Phenotypic Ratio (3:1) and Genotypic Ratio (1:2:1).',
        'Explain why no medium-height plants appeared in F₁ and why dwarf plants reappeared in F₂.',
      ],
      keywords: [
        'monohybrid cross',
        'tall and dwarf',
        'TT x tt',
        '3:1 ratio',
        '1:2:1 ratio',
        'f1 generation',
        'f2 generation',
        'blending inheritance',
      ],
      sections: [
        {
          id: 'what-is-monohybrid-cross',
          title: '1. What Is a Monohybrid Cross?',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Monohybrid Cross at a Glance',
              bullets: [
                'Studies **1 trait at a time** (e.g., Stem Height: Tall `TT` × Dwarf `tt`).',
                '**`F₁` Generation:** All `Tt` — 100% Tall (recessive `t` hides without blending!).',
                '**`F₂` Generation (`Tt × Tt`):** **3 Tall : 1 Dwarf** (Phenotypic `3:1`) and **1 `TT` : 2 `Tt` : 1 `tt`** (Genotypic `1:2:1`).',
              ],
            },
            {
              type: 'visual-diagram',
              diagramId: 'blend-vs-lego',
              title: 'Why Traits Don’t Blend Like Paint (The Allele Brick Model)',
              caption: 'If traits melted like paint, Dwarfness would vanish forever. Discrete alleles stay intact!',
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'Definition: Monohybrid Cross',
              body: 'A **monohybrid cross** (*mono* = one) is a genetic cross between two parents that studies the inheritance of **only ONE pair of contrasting characters** at a time — for example, **stem height** (Tall `TT` vs. Dwarf `tt`).',
            },
            {
              type: 'paragraph',
              text: 'Before Mendel, most scientists believed in **"blending inheritance"** — thinking that crossing a tall plant with a short plant would produce medium-height plants (like mixing black and white paint to get grey). Mendel’s monohybrid cross proved that traits do **not** mix like paint; instead, they pass down as discrete units (alleles)!',
            },
          ],
        },
        {
          id: 'step-by-step-p-to-f1',
          title: '2. Stage 1: Crossing Pure Parents (P → F₁ Generation)',
          blocks: [
            {
              type: 'steps',
              title: 'How Mendel Obtained the F₁ Generation',
              items: [
                {
                  label: 'Choose Pure-Breeding Parents (`P`)',
                  detail: 'Mendel crossed a pure-breeding **Tall pea plant (`TT`)** with a pure-breeding **Dwarf pea plant (`tt`)**.',
                },
                {
                  label: 'Gamete Formation',
                  detail: 'Parent `TT` produces gametes carrying **`T`** only. Parent `tt` produces gametes carrying **`t`** only.',
                },
                {
                  label: 'Fertilization → `F₁` Offspring',
                  detail: 'Every `F₁` seed receives `T` from one parent and `t` from the other, so **100% of `F₁` plants have genotype `Tt`**.',
                },
                {
                  label: 'Shocking Observation in `F₁`',
                  detail: '**ALL `F₁` plants were Tall!** Not a single plant was medium-height or dwarf. Because `T` masks `t`, Tallness is **dominant** and Dwarfness is **recessive**.',
                },
              ],
            },
            {
              type: 'cross-flow',
              title: 'Board-Exam Flowchart: P → F₁ Generation',
              parents: 'Pure Tall (`TT`)  ×  Pure Dwarf (`tt`)',
              gametes: '`T`, `T`   ×   `t`, `t`',
              f1: 'All `Tt` — 100% Phenotypically Tall (Heterozygous)',
            },
          ],
        },
        {
          id: 'step-by-step-f1-to-f2',
          title: '3. Stage 2: Self-Pollination of F₁ (F₁ → F₂ Generation)',
          blocks: [
            {
              type: 'paragraph',
              text: 'Next, Mendel asked: *"Did the dwarf trait disappear forever inside the `F₁` tall plants, or is it just hiding quietly?"* To find out, he allowed the `F₁` (`Tt`) plants to **self-pollinate** (`Tt × Tt`).',
            },
            {
              type: 'cross-flow',
              title: 'Board-Exam Flowchart: F₁ Selfing → F₂ Generation',
              parents: 'F₁ Hybrid Tall (`Tt`)  ×  F₁ Hybrid Tall (`Tt`)',
              gametes: '`(T)`, `(t)`   ×   `(T)`, `(t)`',
              f1: 'Combine in a 2×2 Punnett Square → 4 possible combinations: `TT`, `Tt`, `Tt`, `tt`',
              f2Summary: '3 Tall (`TT`, `Tt`, `Tt`) : 1 Dwarf (`tt`)',
              ratios: [
                { label: 'F₂ Phenotypic Ratio', value: '3 : 1  (75% Tall : 25% Dwarf)' },
                { label: 'F₂ Genotypic Ratio', value: '1 : 2 : 1  (1 TT : 2 Tt : 1 tt)' },
              ],
            },
            {
              type: 'table',
              caption: 'Reading Every Box of the F₂ Monohybrid Punnett Square (`Tt × Tt`)',
              headers: ['F₂ Offspring Genotype', 'Frequency out of 4', 'Percentage', 'Condition', 'Phenotype'],
              rows: [
                ['`TT`', '1 / 4', '25%', 'Homozygous Dominant', 'Tall'],
                ['`Tt`', '2 / 4', '50%', 'Heterozygous', 'Tall'],
                ['`tt`', '1 / 4', '25%', 'Homozygous Recessive', 'Dwarf'],
              ],
            },
            {
              type: 'visual-diagram',
              diagramId: 'monohybrid-visual',
              title: 'Visualizing P → F₁ → F₂ in Pea Plants',
              caption: 'Notice how 3 plants look Tall (TT, Tt, Tt) and 1 plant reappears Dwarf (tt) in F₂!',
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'Key NCERT Conclusion from F₂',
              body: 'Out of the 3 tall plants in F₂, **only 1 is pure tall (`TT`)** and **2 are hybrid tall (`Tt`)**. Notice how the recessive trait (**dwarfness, `tt`**) reappeared completely unchanged in 25% of F₂ — proving both copies are inherited intact without blending!',
            },
            {
              type: 'notebook-mistake',
              studentName: 'Kabir',
              title: 'Punnett Box Ordering',
              wrongWork: 'Gamete (t) + Gamete (T)  →  tT',
              teacherFix: 'Gamete (t) + Gamete (T)  →  Tt',
              whyWrong: 'Always write the **capital (dominant) allele first** inside every Punnett square box (`Tt`, never `tT`) so you don’t miscount `1 TT : 2 Tt : 1 tt`!',
            },
            {
              type: 'checkpoint',
              prompt: 'Two tall pea plants are crossed, and out of 100 offspring, **25 are dwarf (`tt`)**. What MUST the genotypes of the two tall parents be?',
              options: [
                { id: 'TT-TT', label: 'TT × TT' },
                { id: 'TT-Tt', label: 'TT × Tt' },
                { id: 'Tt-Tt', label: 'Tt × Tt' },
              ],
              correctIds: ['Tt-Tt'],
              successMsg: 'Correct! Both tall parents must carry a hidden `t` (`Tt × Tt`) to give 25% `tt` dwarf babies (3:1 ratio)!',
              hintMsg: 'To make a `tt` child, BOTH parents must have a `t` allele to donate!',
            },
          ],
        },
      ],
    },
    {
      id: 'bio-sub-3-2',
      slug: 'mendel-laws-and-monohybrid-simulator',
      title: 'Mendel’s Laws, Cross Variations & 2×2 Simulator',
      subtitle:
        'Connect the 3:1 cross to Mendel’s Law of Dominance & Segregation, solve Test Crosses (1:1), and test any parent pair in the interactive 2×2 lab.',
      estimatedMinutes: 15,
      difficulty: 'Board Mastery',
      ncertSection: 'NCERT 8.2.2 + Board Exam Application Crosses',
      learningObjectives: [
        'State Mendel’s Law of Dominance and Law of Segregation in accurate exam language.',
        'Predict offspring ratios for non-standard crosses such as Tt × tt (Test Cross) and TT × Tt.',
        'Solve "deduce the parent genotype" word problems common in 3-mark and 5-mark CBSE papers.',
      ],
      keywords: [
        'law of dominance',
        'law of segregation',
        'purity of gametes',
        'test cross',
        '1:1 ratio',
        'monohybrid simulator',
        'violet white flower cross',
      ],
      sections: [
        {
          id: 'laws-from-monohybrid',
          title: '1. Two Laws Derived From the Monohybrid Cross',
          blocks: [
            {
              type: 'callout',
              variant: 'law',
              title: '1st Law: Law of Dominance',
              body: 'In a cross between two pure organisms contrasting for a pair of traits, **only one trait expresses itself in the F₁ generation** (the **dominant** trait), while the other remains masked (the **recessive** trait). Factors (alleles) occur in pairs, and in a dissimilar pair (`Tt`), one dominates the other.',
            },
            {
              type: 'callout',
              variant: 'law',
              title: '2nd Law: Law of Segregation (Law of Purity of Gametes)',
              body: 'The two alleles of a gene **never blend** inside the heterozygote (`Tt`); instead, during gamete formation, the pair **segregates (separates)** cleanly so that **each gamete receives only ONE allele** (either `T` or `t`, never both). Thus, every gamete is pure for that trait.',
            },
          ],
        },
        {
          id: 'cbse-twist-crosses',
          title: '2. CBSE Twist Crosses (Don’t Blindly Write 3:1 Every Time!)',
          blocks: [
            {
              type: 'paragraph',
              text: 'A major trap in CBSE Class 10 board exams is assuming every monohybrid question gives `3:1`! The ratio depends completely on **which two parents are crossed**. Memorizing this table will save you from losing easy marks:',
            },
            {
              type: 'table',
              caption: 'All 6 Possible Monohybrid Parent Combinations',
              headers: ['Parents Crossed', 'Offspring Genotypes', 'Genotypic Ratio', 'Phenotypic Ratio', 'Exam Name / Use'],
              rows: [
                ['`TT × TT`', 'All `TT`', '100% `TT`', '100% Tall', 'Pure line selfing'],
                ['`tt × tt`', 'All `tt`', '100% `tt`', '100% Dwarf', 'Recessive pure line'],
                ['`TT × tt`', 'All `Tt`', '100% `Tt`', '100% Tall', 'Mendel’s P → F₁ cross'],
                ['`Tt × Tt`', '`1 TT : 2 Tt : 1 tt`', '`1 : 2 : 1`', '`3 : 1` (Tall : Dwarf)', 'Mendel’s F₁ → F₂ selfing'],
                ['`Tt × tt`', '`2 Tt : 2 tt`', '`1 : 1`', '`1 : 1` (50% Tall : 50% Dwarf)', '**Test Cross** (proves parent is heterozygous!)'],
                ['`TT × Tt`', '`2 TT : 2 Tt`', '`1 : 1`', '100% Tall', 'Dominant back-cross'],
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'How to Solve "Unknown Parent" Word Problems Instantly',
              body: 'Whenever a CBSE problem says: *"Two tall plants are crossed, and SOME dwarf offspring appear"* — both tall parents **MUST** be heterozygous **`Tt`**! Why? Because to produce a `tt` child, **both** parents must donate at least one `t` gamete!',
            },
            {
              type: 'dig-deeper',
              title: 'Why Farmers Use the Test Cross (`Tt × tt`)',
              summary: 'If you hold a Tall pea plant in your hand, its outside appearance (phenotype) cannot tell you whether it is `TT` or `Tt`. Crossing it with a Dwarf `tt` tester reveals the truth immediately: if ALL babies are Tall, the parent was `TT`; if HALF are Dwarf (`1:1`), the parent was `Tt`!',
            },
          ],
        },
        {
          id: 'interactive-monohybrid-lab',
          title: '3. Interactive Lab: Live 2×2 Monohybrid Cross Simulator',
          blocks: [
            {
              type: 'paragraph',
              text: 'Experiment below! Pick a trait (Stem Height, Violet/White Flowers, Seed Shape, or Pod Colour), choose preset crosses (`P → F₁`, `F₁ → F₂`, or `Test Cross`), or set custom parent genotypes to inspect the Punnett square, live ratio bars, and CBSE written answer format.',
            },
            {
              type: 'lab',
              labId: 'monohybrid-simulator',
              title: 'Interactive Lab: 2×2 Monohybrid Cross Simulator',
              caption: 'Test any combination of homozygous/heterozygous parents and verify the exact Punnett grid, phenotypic ratio, and genotypic ratio.',
            },
          ],
        },
        {
          id: 'sub-3-2-cbse-qa',
          title: '4. CBSE Board Questions for Monohybrid Cross',
          blocks: [
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question: 'A violet-flowered pea plant (`VV`) is crossed with a white-flowered pea plant (`vv`). Show the F₁ and F₂ generations and state the phenotypic and genotypic ratios of F₂.',
              answer:
                '• **P Generation:** Violet (`VV`) × White (`vv`)\n• **Gametes:** `V` and `v`\n• **F₁ Generation:** All `Vv` → **100% Violet flowers** (Violet is dominant over White).\n• **Selfing F₁ (`Vv × Vv`):** Gametes are `V`, `v` from each parent.\n• **F₂ Punnett Square:** `VV`, `Vv`, `Vv`, `vv`\n• **F₂ Phenotypic Ratio:** **3 Violet : 1 White** (`3:1`)\n• **F₂ Genotypic Ratio:** **1 `VV` : 2 `Vv` : 1 `vv`** (`1:2:1`)',
              markingTip: 'Always explicitly write "Self-pollination of F₁" before drawing the F₂ square.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'Numerical',
              question: 'A pure black-furred mouse (`BB`) is crossed with a brown-furred mouse (`bb`). If an F₁ black mouse is later crossed with a brown mouse, what percentage of babies will be brown? Show with a cross.',
              answer:
                '1. **First Cross:** `BB` (Black) × `bb` (Brown) → **F₁ = all `Bb` (Black)**.\n2. **Second Cross (Test Cross):** F₁ `Bb` × Brown `bb`\n   • Gametes from `Bb`: `B`, `b`\n   • Gametes from `bb`: `b`, `b`\n   • Offspring: `Bb`, `Bb`, `bb`, `bb` → **2 Black (`Bb`) : 2 Brown (`bb`)** = **1 : 1**.\n\n**Answer:** **50%** of the offspring will have brown fur.',
              markingTip: 'Notice how this is a `Tt × tt` Test Cross pattern dressed up with mice instead of peas!',
            },
          ],
        },
      ],
    },
  ],
};
