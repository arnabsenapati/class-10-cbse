import { Topic } from '../../../types/curriculum';

export const topicMendelAndPunnett: Topic = {
  id: 'bio-topic-2',
  slug: 'mendel-and-punnett-square',
  order: 6,
  title: 'Mendel & Punnett Square Mastery',
  description:
    'Learn why Gregor Mendel chose garden pea plants, read genetic cross symbols, and master the 4-step Punnett square & FOIL gamete method.',
  ncertChapter: 'Chapter 8: Heredity (Section 8.2.1 & 8.2.2)',
  subtopics: [
    {
      id: 'bio-sub-2-1',
      slug: 'gregor-mendel-and-pea-plant',
      title: 'Gregor Mendel & Why Garden Pea (Pisum sativum)',
      subtitle:
        'How an Austrian monk uncovered the mathematical rules of inheritance using 7 clear contrasting traits of pea plants.',
      estimatedMinutes: 10,
      difficulty: 'Beginner',
      ncertSection: 'NCERT 8.2.2 (Mendel’s Contributions)',
      learningObjectives: [
        'Explain 4 reasons why Gregor Mendel chose the garden pea plant (Pisum sativum).',
        'Identify the dominant and recessive form of the 7 contrasting traits in pea plants.',
        'Read standard genetics notation cleanly: P, ×, F₁, F₂, and self-pollination vs. cross-pollination.',
      ],
      keywords: [
        'gregor mendel',
        'father of genetics',
        'pisum sativum',
        'garden pea',
        'contrasting traits',
        'f1 generation',
        'f2 generation',
        'parental generation',
        'self-pollination',
        'cross-pollination',
      ],
      sections: [
        {
          id: 'why-pea-plant',
          title: '1. Why Did Mendel Choose the Garden Pea (Pisum sativum)?',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Why Pea Plants Worked So Well',
              bullets: [
                'Clear either/or traits (**Tall vs. Dwarf**, **Round vs. Wrinkled**) — zero guesswork.',
                'Fast 3-month life cycle + lots of seeds per pod = reliable ratios like `3:1`.',
                'Can **self-pollinate** naturally OR be **cross-pollinated** by hand.',
              ],
            },
            {
              type: 'paragraph',
              text: '**Gregor Johann Mendel** (known as the **Father of Genetics**) bred nearly 28,000 pea plants between 1856 and 1863. Long before anyone knew what DNA looked like, Mendel discovered how traits pass from parents to offspring because he chose the smartest possible test organism: **garden pea (*Pisum sativum*)**.',
            },
            {
              type: 'key-points',
              title: '4 CBSE-Tested Reasons Mendel Chose Garden Pea',
              items: [
                '**Clear, distinct contrasting traits:** Pea plants have unmistakable either/or varieties (e.g., Tall vs. Dwarf stem, Round vs. Wrinkled seeds, Yellow vs. Green seeds) with no confusing intermediate sizes.',
                '**Short life cycle:** Peas grow from seed to mature seeds in a single season (~3 months), letting Mendel study multiple generations quickly.',
                '**Naturally self-pollinating, yet easy to cross-pollinate artificially:** Pea flowers are bisexual and normally self-pollinate, keeping pure lines pure; Mendel could also manually transfer pollen between two chosen plants.',
                '**Large number of seeds per cross:** One pollination produces many seeds, giving reliable numerical ratios like `3:1` and `9:3:3:1`.',
              ],
            },
          ],
        },
        {
          id: 'seven-contrasting-traits',
          title: '2. The 7 Contrasting Characters Studied by Mendel',
          blocks: [
            {
              type: 'paragraph',
              text: 'Every character Mendel picked had exactly two contrasting forms — one **dominant** and one **recessive**. In CBSE Class 10, **Stem Height**, **Seed Shape**, **Seed Colour**, and **Flower Colour** appear most frequently in board questions.',
            },
            {
              type: 'table',
              caption: 'Mendel’s 7 Contrasting Traits in Pisum sativum',
              headers: ['Character', 'Dominant Trait (Symbol)', 'Recessive Trait (Symbol)', 'CBSE Priority'],
              rows: [
                ['1. Stem Height', 'Tall (`T`)', 'Dwarf / Short (`t`)', 'Must Know (Monohybrid NCERT)'],
                ['2. Seed Shape', 'Round (`R`)', 'Wrinkled (`r`)', 'Must Know (Dihybrid NCERT)'],
                ['3. Seed Colour', 'Yellow (`Y`)', 'Green (`y`)', 'Must Know (Dihybrid NCERT)'],
                ['4. Flower Colour', 'Violet / Purple (`V` or `P`)', 'White (`v` or `p`)', 'Very Common in PYQs'],
                ['5. Pod Shape', 'Inflated / Full (`I`)', 'Constricted (`i`)', 'Good to Know'],
                ['6. Pod Colour', 'Green (`G`)', 'Yellow (`g`)', 'Trap alert! Green is dominant in PODS, Yellow in SEEDS'],
                ['7. Flower Position', 'Axial (`A`)', 'Terminal (`a`)', 'Good to Know'],
              ],
            },
            {
              type: 'callout',
              variant: 'trap',
              title: 'Classic Trap: Seed Colour vs. Pod Colour!',
              body: 'Be careful: for **Seeds**, **Yellow** (`Y`) is dominant over Green (`y`). For **Pods** (the outer shell), **Green** (`G`) is dominant over Yellow (`g`). Always check whether the question says *seed* or *pod*!',
            },
            {
              type: 'lab',
              labId: 'pea-traits-explorer',
              title: 'Interactive Explorer: 7 Pea Traits & Instant Check',
              caption: 'Inspect all 7 contrasting pea traits visually and test your memory of which form is dominant vs. recessive.',
            },
          ],
        },
        {
          id: 'cross-symbols-notation',
          title: '3. Decoding Genetic Cross Symbols (`P`, `×`, `F₁`, `F₂`)',
          blocks: [
            {
              type: 'steps',
              title: 'Every Symbol You Will See in Cross Diagrams',
              items: [
                {
                  label: '`P` (Parental Generation)',
                  detail: 'The original two pure-breeding parents you start the experiment with (e.g., `TT × tt`).',
                },
                {
                  label: '`×` (Cross Symbol)',
                  detail: 'Means "mated / crossed / pollinated with" — combining male gametes (pollen) from one parent with female gametes (ovules) from the other.',
                },
                {
                  label: '`F₁` (First Filial Generation)',
                  detail: 'The children produced directly from crossing the `P` generation (*filial* comes from the Latin word for son/daughter).',
                },
                {
                  label: 'Selfing (`F₁ × F₁`)',
                  detail: 'Allowing the `F₁` plants to self-pollinate (or crossing two identical `F₁` hybrids like `Tt × Tt`).',
                },
                {
                  label: '`F₂` (Second Filial Generation)',
                  detail: 'The grandchildren produced by selfing the `F₁` generation — where recessive traits reappear!',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bio-sub-2-2',
      slug: 'punnett-square-mastery',
      title: 'Punnett Square Mastery: Step-by-Step Method & FOIL Rule',
      subtitle:
        'Never lose marks drawing Punnett grids again. Learn what each box means and practice deriving gametes for both 2×2 and 4×4 crosses.',
      estimatedMinutes: 16,
      difficulty: 'Core CBSE',
      ncertSection: 'Skill Foundation for Monohybrid & Dihybrid Crosses',
      learningObjectives: [
        'Explain what a Punnett square represents biologically (gamete separation + random fertilization).',
        'Apply the 4-Step Golden Method to draw any Punnett square cleanly.',
        'Generate valid gametes from any genotype using the FOIL method — and avoid the classic "Rr/Yy" gamete blunder.',
        'Compute Phenotypic and Genotypic ratios accurately from the completed grid.',
      ],
      keywords: [
        'punnett square',
        'reginald punnett',
        'gamete formation',
        'foil method',
        'phenotypic ratio',
        'genotypic ratio',
        'fertilization grid',
      ],
      sections: [
        {
          id: 'what-is-a-punnett-square',
          title: '1. What Is a Punnett Square?',
          blocks: [
            {
              type: 'paragraph',
              text: 'Named after British geneticist **Reginald C. Punnett** (1905), a **Punnett square** is a visual probability grid used to predict **all possible genotypes and phenotypes of offspring** from a genetic cross.',
            },
            {
              type: 'callout',
              variant: 'analogy',
              title: 'Think of It Like a Multiplication Table for Fertilization',
              body: 'Instead of guessing in your head which sperm meets which egg, a Punnett square puts **Parent 1’s possible gametes along the left side (rows)** and **Parent 2’s possible gametes along the top (columns)**. Every inner box shows the exact **zygote (child)** formed if that row’s gamete meets that column’s gamete!',
            },
          ],
        },
        {
          id: 'four-step-golden-method',
          title: '2. The 4-Step Golden Method (Works for Every CBSE Cross)',
          blocks: [
            {
              type: 'steps',
              title: 'Follow These 4 Steps in Exact Order',
              items: [
                {
                  label: 'Step 1: Write Parent Genotypes (`P`)',
                  detail: 'Translate the word problem into two-letter (monohybrid) or four-letter (dihybrid) genotypes.',
                  example: 'Heterozygous tall crossed with dwarf → `Tt × tt`.',
                },
                {
                  label: 'Step 2: Separate Alleles into Gametes (Halve the Letters!)',
                  detail: 'Each gamete receives **exactly ONE allele per gene** (never two alleles of the same letter!). Circle gametes neatly in board exams.',
                  example: 'Parent `Tt` makes gametes `(T)` and `(t)`. Parent `tt` makes `(t)` and `(t)`.',
                },
                {
                  label: 'Step 3: Draw the Grid & Combine Row + Column Gametes',
                  detail: 'Write one parent’s gametes down the rows and the other’s across the columns. Inside each box, combine them following two formatting rules:\n• **Capital letter ALWAYS comes first** in each pair (`Tt`, NEVER `tT`).\n• **Keep alleles of the same gene together** (`RrYy`, NEVER `RYry`).',
                  example: 'Combining gamete `Ry` + gamete `rY` → write `RrYy` (pair the `R/r` together, pair the `Y/y` together, capital first in each pair!).',
                },
                {
                  label: 'Step 4: Count Phenotypic & Genotypic Ratios',
                  detail: 'Count how many boxes look alike (**Phenotypic Ratio**) and how many boxes have identical letter codes (**Genotypic Ratio**). Always simplify ratios to lowest whole numbers (e.g., `2:2` → `1:1`).',
                  example: 'Out of 4 boxes: `1 TT : 2 Tt : 1 tt` (Genotypic `1:2:1`), and `3 Tall : 1 Dwarf` (Phenotypic `3:1`).',
                },
              ],
            },
          ],
        },
        {
          id: 'foil-method-dihybrid-gametes',
          title: '3. Avoiding the #1 Mistake: Generating Dihybrid Gametes (FOIL Method)',
          blocks: [
            {
              type: 'quick-summary',
              title: 'The FOIL Rule for Gametes',
              bullets: [
                'Every gamete MUST hold **1 letter from EACH gene** (`R/r` AND `Y/y`).',
                '`RrYy` splits into **4 equal gametes:** `RY`, `Ry`, `rY`, `ry`.',
                'Inside every Punnett box, put the **capital letter first** (`Tt`, never `tT`) and keep same genes together (`RrYy`).',
              ],
            },
            {
              type: 'visual-diagram',
              diagramId: 'foil-arcs',
              title: 'Animated FOIL Rainbow Arcs (RrYy → 4 Gametes)',
              caption: 'Click "Replay FOIL Arcs" to watch how each gamete pairs one shape allele with one colour allele.',
            },
            {
              type: 'notebook-mistake',
              studentName: 'Meera',
              title: 'Dihybrid Gametes',
              wrongWork: 'RrYy  →  Gametes:  Rr ,  Yy',
              teacherFix: 'RrYy  →  Gametes:  RY ,  Ry ,  rY ,  ry',
              whyWrong: '`Rr` has two shape alleles and NO colour allele! Each gamete must get ONE allele of shape (`R`/`r`) AND ONE allele of colour (`Y`/`y`).',
            },
            {
              type: 'paragraph',
              text: 'In a dihybrid cross, a parent has **two different genes** — for example **`RrYy`** (Round & Yellow seeds). When students try to split `RrYy` into gametes, the single most common error in Class 10 exams is writing `Rr` and `Yy` as gametes.',
            },
            {
              type: 'callout',
              variant: 'trap',
              title: 'Why `Rr` and `Yy` are IMPOSSIBLE Gametes!',
              body: 'A gamete must carry **one copy of EVERY gene** (one shape letter AND one colour letter). A gamete called `Rr` has two shape letters and **zero colour letters** — that plant wouldn’t even have instructions for seed colour! Every dihybrid gamete MUST contain **one `R`/`r` AND one `Y`/`y`**.',
            },
            {
              type: 'steps',
              title: 'The FOIL Method for `RrYy` → 4 Gametes',
              items: [
                {
                  label: '**F** — First of gene 1 + First of gene 2',
                  detail: 'Take first `R` and first `Y`',
                  example: '`R` + `Y` = **`RY`**',
                },
                {
                  label: '**O** — Outer (`R` and `y`)',
                  detail: 'Take first `R` and second `y`',
                  example: '`R` + `y` = **`Ry`**',
                },
                {
                  label: '**I** — Inner (`r` and `Y`)',
                  detail: 'Take second `r` and first `Y`',
                  example: '`r` + `Y` = **`rY`**',
                },
                {
                  label: '**L** — Last of gene 1 + Last of gene 2',
                  detail: 'Take second `r` and second `y`',
                  example: '`r` + `y` = **`ry`**',
                },
              ],
            },
            {
              type: 'paragraph',
              text: 'Now try practice! In the interactive trainer below, practice splitting gametes and filling out Punnett squares yourself — the lab checks your answers and gives instant hints if you put a lowercase letter first or forget a gene.',
            },
            {
              type: 'lab',
              labId: 'punnett-trainer',
              title: 'Interactive Trainer: Gamete Splitter & Blank Punnett Practice',
              caption: 'Practice deriving gametes (Monohybrid & FOIL Dihybrid) and filling 2×2 Punnett grids cell-by-cell with instant mistake feedback.',
            },
            {
              type: 'checkpoint',
              prompt: 'Quick Check: A plant has genotype **`rrYy`**. Tap **ALL** unique valid gametes it can form:',
              options: [
                { id: 'rr', label: 'rr' },
                { id: 'rY', label: 'rY' },
                { id: 'ry', label: 'ry' },
                { id: 'RY', label: 'RY' },
              ],
              correctIds: ['rY', 'ry'],
              multiSelect: true,
              successMsg: 'Awesome! Since there is only r (no R), every gamete gets r plus either Y or y → rY and ry!',
              hintMsg: 'Check each gamete has 1 r (since parent is rr) and 1 Y/y!',
            },
          ],
        },
        {
          id: 'sub-2-2-cbse-qa',
          title: '4. CBSE Board Questions for This Subtopic',
          blocks: [
            {
              type: 'qa',
              marks: 2,
              tag: 'CBSE Board Pattern',
              question: 'What types of gametes will be produced by pea plants with genotypes: (a) `RRYY`, (b) `RrYy`, and (c) `rrYy`?',
              answer:
                'Using the rule that each gamete receives one allele of each gene:\n• **(a) `RRYY`:** Only 1 unique type of gamete → **`RY`**\n• **(b) `RrYy`:** 4 types of gametes (FOIL) → **`RY`, `Ry`, `rY`, `ry`**\n• **(c) `rrYy`:** 2 unique types of gametes → **`rY`** and **`ry`**',
              markingTip: 'Shortcut formula: Number of unique gametes = 2ⁿ, where n = number of heterozygous pairs. For `rrYy`, only `Yy` is heterozygous (n = 1), so 2¹ = 2 unique gametes!',
            },
          ],
        },
      ],
    },
  ],
};
