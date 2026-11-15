import { Topic } from '../../../types/curriculum';

export const topicBasicsAndAlleles: Topic = {
  id: 'bio-topic-1',
  slug: 'basics-and-alleles',
  order: 5,
  title: 'Foundations: DNA, Genes & Alleles',
  description:
    'Start from zero: understand how traits pass from parents to children through DNA, chromosomes, genes, and alleles before drawing any Punnett square.',
  ncertChapter: 'Chapter 8: Heredity (Sections 8.1 & 8.2)',
  subtopics: [
    {
      id: 'bio-sub-1-1',
      slug: 'heredity-variation-dna-basics',
      title: 'Heredity, Variation & How DNA Controls Traits',
      subtitle:
        'From cell to chromosome to gene to protein — how a silent strand of DNA actually makes a pea plant tall or dwarf.',
      estimatedMinutes: 10,
      difficulty: 'Beginner',
      ncertSection: 'NCERT 8.1 & 8.2.3 (How do these traits get expressed?)',
      learningObjectives: [
        'Distinguish clearly between Heredity and Variation with daily-life examples.',
        'Trace the biological ladder: Cell → Nucleus → Chromosome → DNA → Gene → Protein → Trait.',
        'Explain the NCERT mechanism of how a gene controls plant height via hormones and enzymes.',
        'Separate Inherited Traits (in DNA/germ cells) from Acquired Traits (not passed to offspring).',
      ],
      keywords: [
        'heredity',
        'variation',
        'dna',
        'gene',
        'chromosome',
        'diploid',
        'haploid',
        'gamete',
        'protein',
        'enzyme',
        'hormone',
        'inherited traits',
        'acquired traits',
      ],
      sections: [
        {
          id: 'what-are-heredity-and-variation',
          title: '1. What are Heredity and Variation?',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Heredity vs. Variation',
              bullets: [
                '**Heredity** = Traits copied from parents to children (why pea seeds always grow into pea plants).',
                '**Variation** = Small differences between individuals (why siblings do not look 100% identical).',
                '**Sexual reproduction** creates far more variation than asexual reproduction because it combines DNA from two parents.',
              ],
            },
            {
              type: 'paragraph',
              text: 'Look around your classroom or family: human babies always grow into humans (never cats or mango trees), and children often share their mother’s eye colour or father’s dimples. Yet, unless you are an identical twin, you do not look 100% identical to your parents or siblings. Genetics starts with two simple ideas that explain both similarity and difference.',
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'NCERT Core Definitions',
              body: 'Memorize these two crisp definitions for 1-mark and 2-mark CBSE questions:',
              bullets: [
                '**Heredity:** The transmission of characters (traits) from parents to their offspring (next generation) through reproductive cells.',
                '**Variation:** The differences in traits shown by individuals of the same species (and even among offspring of the same parents).',
              ],
            },
            {
              type: 'table',
              caption: 'Why do variations happen? (Asexual vs. Sexual Reproduction)',
              headers: ['Feature', 'Asexual Reproduction (e.g., Bacteria, Amoeba)', 'Sexual Reproduction (e.g., Humans, Pea Plants)'],
              rows: [
                ['Parents involved', 'Single parent', 'Two parents (male and female)'],
                ['Source of variation', 'Only minor DNA copying errors (inaccuracies)', 'DNA copying + mixing DNA from two different parents'],
                ['Amount of variation', 'Very small — offspring are almost identical clones', 'Very large — unique combinations in every child'],
                ['Survival benefit', 'Good if environment stays constant', 'High chance some individuals survive sudden environmental changes'],
              ],
            },
          ],
        },
        {
          id: 'biological-ladder-dna-gene',
          title: '2. Inside the Cell: Chromosome → DNA → Gene',
          blocks: [
            {
              type: 'paragraph',
              text: 'Before learning words like "allele" or drawing crosses like TT × tt, you need to know where those letters actually live inside a living organism. Every living body is made of cells, and almost every cell carries an instruction manual inside its nucleus.',
            },
            {
              type: 'callout',
              variant: 'analogy',
              title: 'The Cookbook Library Analogy',
              body: 'Think of heredity like a giant recipe collection passed down in a family:',
              bullets: [
                '**Nucleus** = The locked library room inside every cell.',
                '**Chromosomes** = Bound volumes (books) sitting on shelves inside the library. Humans have 46 volumes arranged in **23 matching pairs** (one book of each pair from Mom, one from Dad).',
                '**DNA** = The long paper ribbon inside each book, written in a chemical alphabet.',
                '**Gene** = **One single recipe** printed on a small section of that DNA ribbon (for example, the recipe for eye pigment or plant height).',
                '**Protein / Enzyme** = The finished dish cooked by following that recipe — and that protein creates the visible **trait**.',
              ],
            },
            {
              type: 'steps',
              title: 'Step-by-Step: From Microscopic DNA to Visible Height (NCERT Mechanism)',
              items: [
                {
                  label: 'Cellular DNA stores the blueprint',
                  detail: 'A **gene** is a specific section of DNA that provides information for making **one specific protein**.',
                  example: 'In a pea plant, a specific gene on a chromosome carries instructions for a growth-regulating enzyme.',
                },
                {
                  label: 'Enzyme controls hormone production',
                  detail: 'In NCERT’s classic example, plant height depends on the amount of a **plant growth hormone** produced.',
                  example: 'If the enzyme works efficiently, lots of growth hormone is made → the stem grows **Tall**.',
                },
                {
                  label: 'Altered gene = altered protein = different trait',
                  detail: 'If the gene has an alteration (mutation/variant), the enzyme becomes **less efficient** (or inactive). Less hormone is made → the plant remains **Dwarf**.',
                  example: 'Thus, genes control traits by controlling the **efficiency of proteins/enzymes**!',
                },
              ],
            },
            {
              type: 'lab',
              labId: 'cell-to-trait',
              title: 'Interactive Explorer: Zoom From Cell to Trait',
              caption: 'Click through each zoom level (Cell → Nucleus → Chromosomes → DNA → Gene → Protein → Trait) to see how microscopic molecules become visible traits.',
            },
            {
              type: 'lab',
              labId: 'bio-3d-dna-eco-pyramid',
              title: '3D Interactive Lab: DNA Double Helix, Gene Locus & Variation',
              caption: 'Drag to rotate the 3D DNA molecule and simulate how DNA copying creates variation.',
            },
          ],
        },
        {
          id: 'body-cells-vs-gametes',
          title: '3. Why Body Cells Have 2 Copies, While Gametes Have 1',
          blocks: [
            {
              type: 'visual-diagram',
              diagramId: 'meiosis-halving',
              title: 'Why Gametes Must Halve Chromosomes (2n → n)',
              caption: 'If gametes did not halve chromosomes, chromosome counts would double every generation!',
            },
            {
              type: 'paragraph',
              text: 'This single rule explains 90% of Punnett squares: **normal body cells are diploid (2n)**, meaning chromosomes come in pairs. You received one chromosome of each pair from your mother (via the egg) and one from your father (via the sperm).',
            },
            {
              type: 'key-points',
              title: 'The Golden Chromosome Rule for Class 10',
              items: [
                '**Body (Somatic) cells = 2 copies of every gene (2n):** For example, a pea plant cell has two copies of the height gene (written with two letters like `TT`, `Tt`, or `tt`).',
                '**Reproductive cells / Gametes (Sperm & Egg / Pollen & Ovule) = 1 copy of every gene (n):** During gamete formation (meiosis), chromosome pairs split so each gamete receives **only one** copy of each gene (written with one letter like `T` or `t`).',
                '**Why must gametes halve their chromosomes?** If both sperm and egg carried `2n` copies, the baby would have `4n`, then `8n`, doubling every generation! Halving (`2n → n`) keeps the chromosome count constant when fertilization (`n + n = 2n`) happens.',
              ],
            },
            {
              type: 'callout',
              variant: 'trap',
              title: 'Inherited vs. Acquired Traits (Quick CBSE Check)',
              body: 'Only changes in the **DNA of germ cells (gametes)** are inherited by children. Skills you practice, muscles built at the gym, or scars on your skin affect only somatic (body) tissues — they **cannot** be passed to the next generation.',
            },
            {
              type: 'dig-deeper',
              title: 'Why Tail-Cutting in Mice Does Not Create Tailless Babies',
              summary: 'In NCERT’s classic reasoning question, cutting the tails of mice for several generations never produces tailless offspring because surgery alters only somatic (body) cells — the DNA inside reproductive germ cells remains completely unchanged.',
            },
            {
              type: 'checkpoint',
              prompt: 'A garden pea body cell has **14 chromosomes** (2n = 14). How many chromosomes does a single pea **pollen grain (gamete)** carry?',
              options: [
                { id: '28', label: '28' },
                { id: '14', label: '14' },
                { id: '7', label: '7' },
              ],
              correctIds: ['7'],
              successMsg: 'Correct! Gametes are haploid (n = 7), carrying exactly half the chromosome set (one allele per gene).',
              hintMsg: 'Remember the Meiosis Halving rule: body cell = 2n (14), gamete = n (half)!',
            },
          ],
        },
        {
          id: 'sub-1-1-cbse-qa',
          title: '4. CBSE Board Questions for This Subtopic',
          blocks: [
            {
              type: 'qa',
              marks: 3,
              tag: 'NCERT',
              question: 'How do genes control the characteristics (traits) of an organism? Explain using the example of plant height in pea plants.',
              answer:
                'Cellular DNA is the information source for making proteins in a cell. A section of DNA that provides information for one protein is called the **gene** for that protein.\n\n1. For tallness in pea plants, a specific gene directs the synthesis of an enzyme needed to make a plant growth hormone.\n2. If the gene produces an **efficient enzyme**, ample growth hormone is produced and the plant grows **tall**.\n3. If the gene has an alteration that makes the enzyme **less efficient**, less hormone is produced and the plant stays **short (dwarf)**.\n\nTherefore, genes control traits by regulating protein/enzyme production.',
              markingTip: 'Keywords examiners look for: "section of DNA", "protein/enzyme", "growth hormone", "efficient vs less efficient".',
            },
            {
              type: 'qa',
              marks: 2,
              tag: 'CBSE Board Pattern',
              question: 'Why does sexual reproduction create more variations than asexual reproduction, and how does this help a species?',
              answer:
                'In asexual reproduction, a single parent copies its DNA, so variations arise only from minor DNA-copying inaccuracies. In sexual reproduction, DNA from two different individuals combines in the offspring, generating many new combinations.\n\n**Advantage:** Variations give some individuals traits suited to sudden environmental changes (like heatwaves or new diseases), helping the species survive over time.',
              markingTip: 'Always state both: (1) mixing of DNA from two parents and (2) survival advantage during environmental change.',
            },
          ],
        },
      ],
    },
    {
      id: 'bio-sub-1-2',
      slug: 'what-is-an-allele',
      title: 'What is an Allele? Genes, Dominance & Genotypes',
      subtitle:
        'Master the core vocabulary of genetics: allele, locus, dominant, recessive, homozygous, heterozygous, genotype, and phenotype.',
      estimatedMinutes: 14,
      difficulty: 'Beginner',
      ncertSection: 'NCERT 8.2.1 & 8.2.2 (Mendel’s Rules for Inheritance)',
      learningObjectives: [
        'Define an allele precisely and explain how alleles differ from genes.',
        'Explain why a heterozygous plant (Tt) is tall instead of medium-height.',
        'Identify Homozygous Dominant, Heterozygous, and Homozygous Recessive genotypes instantly.',
        'Differentiate between Genotype and Phenotype with examples.',
      ],
      keywords: [
        'allele',
        'gene vs allele',
        'locus',
        'dominant',
        'recessive',
        'homozygous',
        'heterozygous',
        'hybrid',
        'pure-breeding',
        'genotype',
        'phenotype',
      ],
      sections: [
        {
          id: 'gene-vs-allele-explained',
          title: '1. Gene vs. Allele: The Simplest Explanation',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Gene vs. Allele',
              bullets: [
                '**Gene** = The character/category (e.g., *Stem Height*).',
                '**Allele** = Different versions of that same gene (`T` for Tall vs. `t` for Dwarf).',
                'You inherit **2 alleles** for each gene (one on Mom’s chromosome, one on Dad’s).',
              ],
            },
            {
              type: 'paragraph',
              text: 'Students often confuse **gene** and **allele** because both are about inherited traits. Here is the clearest way to separate them forever:',
            },
            {
              type: 'callout',
              variant: 'analogy',
              title: 'The Ice-Cream Flavour Analogy',
              body: 'Imagine a trait is **"Plant Height"**.',
              bullets: [
                '**Gene** = The **category** or instruction slot (e.g., "The Height Gene" — it decides how tall the pea plant grows).',
                '**Alleles** = The **different versions (flavours)** of that exact same gene! One version (`T`) says *"Make lots of height hormone → Tall"*, and another version (`t`) says *"Make little height hormone → Dwarf"*.',
                'So **Tall (`T`)** and **Dwarf (`t`)** are **two alleles of the same Height gene** — they are NOT two different genes!',
              ],
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'Formal Definition of an Allele',
              body: '**Alleles** are alternative forms (variants) of the same gene that occupy the **exact same position (locus)** on a pair of homologous chromosomes and control contrasting expressions of the same character (e.g., `T` and `t` for stem height; `R` and `r` for seed shape).',
            },
            {
              type: 'table',
              caption: 'Gene vs. Allele — Side-by-Side Comparison',
              headers: ['Basis', 'Gene', 'Allele'],
              rows: [
                ['Meaning', 'A specific segment of DNA coding for a protein/trait', 'Alternative variants of that same gene'],
                ['What it determines', 'The character itself (e.g., stem height, seed colour)', 'The contrasting expression of that character (Tall vs. Dwarf; Yellow vs. Green)'],
                ['Example', 'Gene for pea seed shape', 'Allele `R` (Round) and allele `r` (Wrinkled)'],
                ['Count in a diploid cell', 'Two copies of the gene (on a homologous chromosome pair)', 'Can be two identical alleles (`RR`, `rr`) or two different alleles (`Rr`)'],
              ],
            },
          ],
        },
        {
          id: 'dominant-vs-recessive',
          title: '2. Dominant vs. Recessive Alleles (And WHY One Wins)',
          blocks: [
            {
              type: 'visual-diagram',
              diagramId: 'dominant-masking',
              title: 'How Dominant Alleles Mask Recessive Alleles (Enzyme View)',
              caption: 'Notice how both TT and Tt cross the growth-hormone threshold to grow Tall — only tt stays Dwarf.',
            },
            {
              type: 'paragraph',
              text: 'Remember that every diploid pea plant has **two alleles** for each gene — one from the pollen (male) and one from the ovule (female). What happens if a plant inherits one Tall allele (`T`) and one Dwarf allele (`t`), giving it the pair **`Tt`**? Does it grow medium-tall? **No!** It grows completely **Tall**.',
            },
            {
              type: 'key-points',
              title: 'Why Does `Tt` Look Just as Tall as `TT`?',
              items: [
                'The **`T` allele** carries the working DNA recipe for an **efficient growth enzyme**.',
                'The **`t` allele** carries an altered recipe that makes a **less efficient (or non-working) enzyme**.',
                'In **`Tt`**, the single working **`T` copy alone** produces enough enzyme and growth hormone for the plant to reach full tall height!',
                'Therefore, `T` masks the effect of `t`. We call `T` the **Dominant allele** (written with a **CAPITAL letter**) and `t` the **Recessive allele** (written with a **lowercase letter** of the SAME alphabet).',
              ],
            },
            {
              type: 'callout',
              variant: 'trap',
              title: 'Rule for Choosing Letters in Exams!',
              body: 'NEVER use two different letters for two alleles of the same trait! For example, do **NOT** write `T` for Tall and `D` for Dwarf (`TD` is WRONG!). Always use the **capital letter** of the dominant trait (`T`) and the **lowercase version of that same letter** (`t`) for the recessive trait.',
            },
            {
              type: 'notebook-mistake',
              studentName: 'Aarav',
              title: 'Allele Symbols',
              wrongWork: 'Tall × Dwarf  →  T D',
              teacherFix: 'Tall × Dwarf  →  T t',
              whyWrong: 'Use ONE letter of the alphabet per gene (capital `T` for dominant Tall, lowercase `t` for recessive Dwarf) — never two different letters like `T` and `D`!',
            },
          ],
        },
        {
          id: 'homozygous-heterozygous-genotype-phenotype',
          title: '3. Four Essential Words: Homozygous, Heterozygous, Genotype, Phenotype',
          blocks: [
            {
              type: 'paragraph',
              text: 'Once you have two alleles in a pair, biologists use four exact terms to describe **what letters are inside the DNA** versus **what the organism looks like on the outside**.',
            },
            {
              type: 'table',
              caption: 'Decoding Every Possible Allele Pair for Stem Height',
              headers: ['Allele Pair (Genotype)', 'Condition Name', 'Meaning of Prefix', 'Visible Height (Phenotype)'],
              rows: [
                ['`TT`', '**Homozygous Dominant** (Pure Tall)', '*Homo* = same (`T` and `T`)', '**Tall** (both alleles make working enzyme)'],
                ['`Tt`', '**Heterozygous** (Hybrid Tall)', '*Hetero* = different (`T` and `t`)', '**Tall** (`T` dominates and masks `t`)'],
                ['`tt`', '**Homozygous Recessive** (Pure Dwarf)', '*Homo* = same (`t` and `t`)', '**Dwarf** (no working `T` allele is present)'],
              ],
            },
            {
              type: 'key-points',
              title: 'Genotype vs. Phenotype (Never Mix These Up!)',
              items: [
                '**Genotype = Genetic makeup (the letter code):** Look inside the DNA — `TT`, `Tt`, and `tt` are **three distinct genotypes**.',
                '**Phenotype = Physical appearance (what you observe with your eyes):** `Tall` and `Dwarf` are **two phenotypes**. Notice that **`TT` and `Tt` look identical on the outside (same phenotype: Tall), even though their genotypes are different!**',
                '**Memory Trick:** **Ph**enotype starts with **Ph** = **Ph**ysical appearance; **Gen**otype starts with **Gen** = **Gen**etic letters.',
              ],
            },
            {
              type: 'checkpoint',
              prompt: 'Tap **ALL** genotypes below that make a pea plant look **Tall** (Phenotype = Tall):',
              options: [
                { id: 'TT', label: 'TT', sublabel: 'Homozygous Dominant' },
                { id: 'Tt', label: 'Tt', sublabel: 'Heterozygous' },
                { id: 'tt', label: 'tt', sublabel: 'Homozygous Recessive' },
              ],
              correctIds: ['TT', 'Tt'],
              multiSelect: true,
              successMsg: 'Spot on! Both TT and Tt carry at least one dominant T allele, so both look Tall!',
              hintMsg: 'Check every genotype that contains at least one capital T allele!',
            },
            {
              type: 'lab',
              labId: 'allele-pair-builder',
              title: 'Interactive Lab: Chromosome & Allele Pair Builder',
              caption: 'Choose a gene (Height, Seed Shape, or Seed Colour) and toggle the Mother’s and Father’s alleles to watch how enzyme activity, genotype name, and visible phenotype respond instantly.',
            },
          ],
        },
        {
          id: 'sub-1-2-cbse-qa',
          title: '4. CBSE Board Questions for This Subtopic',
          blocks: [
            {
              type: 'qa',
              marks: 2,
              tag: 'CBSE Board Pattern',
              question: 'Differentiate between dominant trait and recessive trait. Why are both traits NOT blended in a hybrid (`Tt`)?',
              answer:
                '**Dominant trait:** A trait that expresses itself in both homozygous (`TT`) and heterozygous (`Tt`) conditions (e.g., Tallness in pea plants).\n**Recessive trait:** A trait that can express itself **only** in the homozygous condition (`tt`) when the dominant allele is absent (e.g., Dwarfness).\n\nThey do not blend because alleles remain discrete units; in `Tt`, a single dominant allele `T` produces enough functional enzyme/hormone for full tallness.',
            },
            {
              type: 'qa',
              marks: 1,
              tag: 'Assertion-Reason',
              question: 'A tall pea plant can have the genotype `TT` or `Tt`, whereas a dwarf pea plant always has `tt`. Give reason.',
              answer:
                'Tallness (`T`) is dominant over dwarfness (`t`), so even a single copy of `T` makes the plant tall (`TT` or `Tt`). Dwarfness is recessive, meaning it is expressed only when both alleles are recessive (`tt`).',
            },
          ],
        },
      ],
    },
  ],
};
