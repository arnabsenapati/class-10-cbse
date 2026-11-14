import { GlossaryTerm, QuizQuestion } from '../../../types/curriculum';

export const biologyGlossary: GlossaryTerm[] = [
  {
    id: 'term-heredity',
    term: 'Heredity',
    category: 'Basics',
    simpleMeaning: 'Passing of traits from parents to children.',
    ncertDefinition:
      'The transmission of characters/traits from one generation (parents) to the next generation (offspring) through genes.',
    example: 'Eye colour, hair texture, or stem height in pea plants passing to offspring.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'basics-and-alleles',
      subtopicSlug: 'heredity-variation-dna-basics',
      sectionId: 'what-are-heredity-and-variation',
    },
  },
  {
    id: 'term-variation',
    term: 'Variation',
    category: 'Basics',
    simpleMeaning: 'Differences among individuals of the same species.',
    ncertDefinition:
      'The degree of difference in characters/traits shown by individuals belonging to the same species.',
    example: 'Siblings having different heights or earlobe shapes despite having the same parents.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'basics-and-alleles',
      subtopicSlug: 'heredity-variation-dna-basics',
      sectionId: 'what-are-heredity-and-variation',
    },
  },
  {
    id: 'term-gene',
    term: 'Gene',
    category: 'Basics',
    simpleMeaning: 'One specific DNA instruction (recipe) for a single protein/trait.',
    ncertDefinition:
      'A functional segment of DNA located on a chromosome that provides information for synthesizing one specific protein.',
    example: 'The gene that codes for the enzyme controlling plant growth hormone (stem height).',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'basics-and-alleles',
      subtopicSlug: 'heredity-variation-dna-basics',
      sectionId: 'biological-ladder-dna-gene',
    },
  },
  {
    id: 'term-allele',
    term: 'Allele',
    symbol: 'T / t, R / r',
    category: 'Alleles & Genes',
    simpleMeaning: 'Different versions (flavours) of the exact same gene.',
    ncertDefinition:
      'Alternative forms of a gene occupying the same locus (position) on homologous chromosomes and controlling contrasting expressions of the same trait.',
    example: 'T (tallness) and t (dwarfness) are two alleles of the pea stem-height gene.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'basics-and-alleles',
      subtopicSlug: 'what-is-an-allele',
      sectionId: 'gene-vs-allele-explained',
    },
  },
  {
    id: 'term-dominant',
    term: 'Dominant Allele / Trait',
    symbol: 'Capital Letter (T, R, Y)',
    category: 'Alleles & Genes',
    simpleMeaning: 'The stronger version that shows up even if only ONE copy is present.',
    ncertDefinition:
      'An allele that expresses itself phenotypically in both homozygous (TT) and heterozygous (Tt) conditions, masking the recessive allele.',
    example: 'Tallness (T) in pea plants: both TT and Tt plants are tall.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'basics-and-alleles',
      subtopicSlug: 'what-is-an-allele',
      sectionId: 'dominant-vs-recessive',
    },
  },
  {
    id: 'term-recessive',
    term: 'Recessive Allele / Trait',
    symbol: 'Lowercase Letter (t, r, y)',
    category: 'Alleles & Genes',
    simpleMeaning: 'The hidden version that shows up ONLY when both copies are recessive.',
    ncertDefinition:
      'An allele whose phenotypic effect is masked in the presence of a dominant allele and expresses itself only in the homozygous state (tt).',
    example: 'Dwarfness (t) appears only in genotype tt; green seed colour (y) appears only in yy.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'basics-and-alleles',
      subtopicSlug: 'what-is-an-allele',
      sectionId: 'dominant-vs-recessive',
    },
  },
  {
    id: 'term-homozygous',
    term: 'Homozygous (Pure-Breeding)',
    symbol: 'TT or tt',
    category: 'Alleles & Genes',
    simpleMeaning: 'Both alleles for a gene are identical.',
    ncertDefinition:
      'Condition in which a diploid organism carries two identical alleles at the same locus on homologous chromosomes.',
    example: 'TT (homozygous dominant / pure tall) and tt (homozygous recessive / pure dwarf).',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'basics-and-alleles',
      subtopicSlug: 'what-is-an-allele',
      sectionId: 'homozygous-heterozygous-genotype-phenotype',
    },
  },
  {
    id: 'term-heterozygous',
    term: 'Heterozygous (Hybrid)',
    symbol: 'Tt or RrYy',
    category: 'Alleles & Genes',
    simpleMeaning: 'The two alleles for a gene are different (one dominant, one recessive).',
    ncertDefinition:
      'Condition in which an organism possesses two different alleles of a gene on a homologous pair of chromosomes.',
    example: 'Tt (hybrid tall pea plant) or RrYy (dihybrid F₁ round-yellow pea plant).',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'basics-and-alleles',
      subtopicSlug: 'what-is-an-allele',
      sectionId: 'homozygous-heterozygous-genotype-phenotype',
    },
  },
  {
    id: 'term-genotype',
    term: 'Genotype',
    symbol: 'TT, Tt, tt',
    category: 'Alleles & Genes',
    simpleMeaning: 'The actual letter code (genetic makeup) inside the organism’s DNA.',
    ncertDefinition:
      'The complete genetic constitution (allele combination) of an organism for one or more traits.',
    example: 'Genotypic ratio of F₂ monohybrid cross is 1 TT : 2 Tt : 1 tt (1:2:1).',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'basics-and-alleles',
      subtopicSlug: 'what-is-an-allele',
      sectionId: 'homozygous-heterozygous-genotype-phenotype',
    },
  },
  {
    id: 'term-phenotype',
    term: 'Phenotype',
    symbol: 'Tall / Dwarf',
    category: 'Alleles & Genes',
    simpleMeaning: 'The visible physical appearance you see from the outside.',
    ncertDefinition:
      'The observable physical or morphological expression of a trait resulting from the genotype.',
    example: 'Both TT and Tt share the Tall phenotype; F₂ monohybrid phenotypic ratio is 3:1.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'basics-and-alleles',
      subtopicSlug: 'what-is-an-allele',
      sectionId: 'homozygous-heterozygous-genotype-phenotype',
    },
  },
  {
    id: 'term-punnett-square',
    term: 'Punnett Square',
    category: 'Punnett & Crosses',
    simpleMeaning: 'A grid used to combine parent gametes and predict offspring ratios.',
    ncertDefinition:
      'A graphical checker-board diagram devised by Reginald C. Punnett to determine all possible genotypes and their probabilities in a genetic cross.',
    example: 'A 2×2 Punnett square for Tt × Tt gives 4 boxes: TT, Tt, Tt, tt.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'mendel-and-punnett-square',
      subtopicSlug: 'punnett-square-mastery',
      sectionId: 'what-is-a-punnett-square',
    },
  },
  {
    id: 'term-gamete',
    term: 'Gamete (Reproductive Cell)',
    symbol: 'n (haploid)',
    category: 'Punnett & Crosses',
    simpleMeaning: 'Sperm/pollen or egg/ovule carrying HALF the chromosomes (one allele per gene).',
    ncertDefinition:
      'A haploid germ cell produced by meiosis that carries a single allele for each gene and fuses during fertilization.',
    example: 'Parent Tt forms gametes T and t; parent RrYy forms gametes RY, Ry, rY, and ry.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'basics-and-alleles',
      subtopicSlug: 'heredity-variation-dna-basics',
      sectionId: 'body-cells-vs-gametes',
    },
  },
  {
    id: 'term-monohybrid',
    term: 'Monohybrid Cross',
    symbol: '3:1 | 1:2:1',
    category: 'Punnett & Crosses',
    simpleMeaning: 'A cross studying ONE trait at a time (like Tall vs. Dwarf).',
    ncertDefinition:
      'A genetic cross between two parents differing in a single pair of contrasting characters.',
    example: 'TT (Tall) × tt (Dwarf) → F₁ all Tt → F₂ ratio 3:1 phenotypic, 1:2:1 genotypic.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'monohybrid-cross',
      subtopicSlug: 'mendel-monohybrid-experiment',
      sectionId: 'what-is-monohybrid-cross',
    },
  },
  {
    id: 'term-dihybrid',
    term: 'Dihybrid Cross',
    symbol: '9:3:3:1',
    category: 'Punnett & Crosses',
    simpleMeaning: 'A cross studying TWO traits together (like Seed Shape + Seed Colour).',
    ncertDefinition:
      'A genetic cross involving two pairs of contrasting traits studied simultaneously.',
    example: 'RRYY (Round Yellow) × rryy (Wrinkled Green) → F₁ RrYy → F₂ phenotypic ratio 9:3:3:1.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'dihybrid-cross',
      subtopicSlug: 'mendel-dihybrid-experiment',
      sectionId: 'what-is-dihybrid-cross',
    },
  },
  {
    id: 'term-test-cross',
    term: 'Test Cross',
    symbol: 'Tt × tt → 1:1',
    category: 'Punnett & Crosses',
    simpleMeaning: 'Crossing a dominant-looking individual with a homozygous recessive (`tt`) to find out its hidden genotype.',
    ncertDefinition:
      'A cross between an organism showing a dominant phenotype and a homozygous recessive individual to determine whether the dominant parent is homozygous (TT) or heterozygous (Tt).',
    example: 'Tt × tt yields 50% Tall : 50% Dwarf (1:1), whereas TT × tt yields 100% Tall.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'monohybrid-cross',
      subtopicSlug: 'mendel-laws-and-monohybrid-simulator',
      sectionId: 'cbse-twist-crosses',
    },
  },
  {
    id: 'term-law-segregation',
    term: 'Law of Segregation',
    category: 'Mendel Laws',
    simpleMeaning: 'The two alleles separate cleanly during gamete formation so each gamete gets only one.',
    ncertDefinition:
      'Mendel’s principle stating that alleles of a gene pair separate (segregate) from each other during gamete formation without blending, so each gamete carries only one allele.',
    example: 'A Tt plant produces equal numbers of pure T gametes and pure t gametes.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'monohybrid-cross',
      subtopicSlug: 'mendel-laws-and-monohybrid-simulator',
      sectionId: 'laws-from-monohybrid',
    },
  },
  {
    id: 'term-law-independent-assortment',
    term: 'Law of Independent Assortment',
    category: 'Mendel Laws',
    simpleMeaning: 'Different genes (like seed shape and seed colour) are inherited independently of each other.',
    ncertDefinition:
      'Mendel’s principle stating that when two pairs of traits are combined in a hybrid, segregation of one pair of characters is independent of the other pair.',
    example: 'F₂ of RRYY × rryy produces new recombinant combinations: Round Green (3/16) and Wrinkled Yellow (3/16).',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'dihybrid-cross',
      subtopicSlug: '9-3-3-1-ratio-and-independent-assortment',
      sectionId: 'law-of-independent-assortment',
    },
  },
  {
    id: 'term-sex-chromosomes',
    term: 'Sex Chromosomes (XX / XY)',
    symbol: 'XX (Female) | XY (Male)',
    category: 'CBSE Exam',
    simpleMeaning: 'The 23rd chromosome pair in humans that determines biological sex.',
    ncertDefinition:
      'The specialized pair of chromosomes determining sex in humans: females carry XX (homogametic) and males carry XY (heterogametic).',
    example: 'Sperm carrying X + egg X = XX (girl); sperm carrying Y + egg X = XY (boy).',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'cbse-exam-mastery',
      subtopicSlug: 'sex-determination-and-syllabus-scope',
      sectionId: 'human-xx-xy-cross',
    },
  },
];

export const biologyQuizBank: QuizQuestion[] = [
  {
    id: 'q-1',
    topicSlug: 'basics-and-alleles',
    subtopicTitle: 'DNA, Genes & Alleles',
    type: 'mcq',
    marks: 1,
    question:
      'In a pea plant, a gene controls stem height by producing an enzyme that helps synthesize growth hormone. Why is a heterozygous plant (`Tt`) just as tall as a homozygous (`TT`) plant?',
    options: [
      'The `t` allele destroys the `T` allele inside the nucleus',
      'Even a single copy of the `T` allele produces enough functional enzyme for full tallness',
      'Heterozygous plants get extra nutrients from the soil',
      '`Tt` plants grow to medium height, halfway between `TT` and `tt`',
    ],
    correctIndex: 1,
    explanation:
      'In NCERT Section 8.2.3, the dominant allele `T` produces an efficient enzyme. One copy of `T` in `Tt` generates sufficient growth hormone to make the plant tall.',
    commonMistake: 'Students sometimes wrongly assume traits blend to medium height in `Tt`.',
  },
  {
    id: 'q-2',
    topicSlug: 'basics-and-alleles',
    subtopicTitle: 'What is an Allele?',
    type: 'mcq',
    marks: 1,
    question:
      'Which statement best describes the relationship between a **gene** and an **allele**?',
    options: [
      'Alleles are found only in plants, whereas genes are found in animals',
      'A gene is made of protein, whereas an allele is made of carbohydrate',
      'Alleles are alternative forms of the same gene at the same chromosome position (locus)',
      'A single gamete normally contains four alleles of the same gene',
    ],
    correctIndex: 2,
    explanation:
      'An allele is an alternative variant of a gene (such as `T` and `t` for the height gene) located at the same locus on homologous chromosomes.',
  },
  {
    id: 'q-3',
    topicSlug: 'mendel-and-punnett-square',
    subtopicTitle: 'Punnett Square & Gametes',
    type: 'mcq',
    marks: 1,
    question:
      'What are ALL the valid types of gametes produced by a pea plant with genotype **`RrYy`**?',
    options: [
      '`Rr`, `Yy`',
      '`RR`, `rr`, `YY`, `yy`',
      '`RY`, `Ry`, `rY`, `ry`',
      '`R`, `r`, `Y`, `y`',
    ],
    correctIndex: 2,
    explanation:
      'Using the FOIL rule and Mendel’s laws, each gamete gets ONE allele from `R/r` and ONE allele from `Y/y`, giving four combinations: `RY`, `Ry`, `rY`, and `ry`.',
    commonMistake: '`Rr` and `Yy` are invalid gametes because they carry two alleles of one gene and none of the other.',
  },
  {
    id: 'q-4',
    topicSlug: 'mendel-and-punnett-square',
    subtopicTitle: 'Mendel’s Pea Traits',
    type: 'mcq',
    marks: 1,
    question:
      'Which of the following is a **recessive** trait in Mendel’s garden pea experiments?',
    options: [
      'Round seed shape',
      'Yellow seed colour',
      'Violet flower colour',
      'Dwarf stem height',
    ],
    correctIndex: 3,
    explanation:
      'Round seed (`R`), Yellow seed (`Y`), and Violet flower (`V`) are dominant; Dwarf stem (`t`) is recessive.',
  },
  {
    id: 'q-5',
    topicSlug: 'monohybrid-cross',
    subtopicTitle: 'Monohybrid Cross',
    type: 'mcq',
    marks: 1,
    question:
      'In Mendel’s monohybrid cross (`TT × tt`), what is the **genotypic ratio** in the `F₂` generation?',
    options: [
      '3 : 1',
      '1 : 2 : 1',
      '1 : 1',
      '9 : 3 : 3 : 1',
    ],
    correctIndex: 1,
    explanation:
      '`F₁` selfing (`Tt × Tt`) yields `TT`, `Tt`, `Tt`, `tt` → Genotypic ratio is `1 TT : 2 Tt : 1 tt` (**1 : 2 : 1**), while Phenotypic ratio is **3 : 1**.',
    commonMistake: 'Watch out for the word *genotypic* vs. *phenotypic*! `3:1` is phenotypic; `1:2:1` is genotypic.',
  },
  {
    id: 'q-6',
    topicSlug: 'monohybrid-cross',
    subtopicTitle: 'Monohybrid Cross Variations',
    type: 'mcq',
    marks: 1,
    question:
      'A tall pea plant is crossed with a dwarf pea plant (`tt`). Out of 200 offspring, 102 are tall and 98 are dwarf. What is the genotype of the tall parent?',
    options: [
      '`TT`',
      '`Tt`',
      '`tt`',
      'Cannot be determined',
    ],
    correctIndex: 1,
    explanation:
      '102 : 98 is roughly a **1 : 1** ratio (50% Tall : 50% Dwarf). This happens only in a Test Cross (`Tt × tt`). If the tall parent were `TT`, 100% of offspring would be tall (`Tt`).',
  },
  {
    id: 'q-7',
    topicSlug: 'dihybrid-cross',
    subtopicTitle: 'Dihybrid Cross',
    type: 'mcq',
    marks: 1,
    question:
      'When `RRYY` (Round Yellow) is crossed with `rryy` (Wrinkled Green) and `F₁` is self-pollinated, which **new recombinant combinations** appear in `F₂`?',
    options: [
      'Round Yellow and Wrinkled Green',
      'Round Green and Wrinkled Yellow',
      'Only Round Yellow',
      'Only Wrinkled Green',
    ],
    correctIndex: 1,
    explanation:
      'Parental phenotypes were Round Yellow (9/16) and Wrinkled Green (1/16). The two new combinations that prove independent assortment are **Round Green (3/16)** and **Wrinkled Yellow (3/16)**.',
  },
  {
    id: 'q-8',
    topicSlug: 'dihybrid-cross',
    subtopicTitle: 'Dihybrid Ratios & Numericals',
    type: 'case-based',
    marks: 2,
    casePassage:
      'In a CBSE lab activity, a dihybrid cross between Round Yellow (`RRYY`) and Wrinkled Green (`rryy`) pea plants produced 1,600 seeds in the `F₂` generation.',
    question:
      'How many out of those 1,600 `F₂` seeds are expected to be **Round & Green**?',
    options: [
      '900',
      '300',
      '100',
      '400',
    ],
    correctIndex: 1,
    explanation:
      'In the `9 : 3 : 3 : 1` ratio, Round & Green makes up `3/16` of the `F₂` seeds. `(3 / 16) × 1600 = 300` seeds.',
  },
  {
    id: 'q-9',
    topicSlug: 'cbse-exam-mastery',
    subtopicTitle: 'Assertion–Reason (Monohybrid)',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** In humans, the biological sex of a newborn child is determined by the father.\n**Reason (R):** Males produce two kinds of gametes (`X` and `Y`), whereas females produce only one kind (`X`).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Mother (`XX`) always donates `X`. Father (`XY`) donates `X` (forming `XX` girl) or `Y` (forming `XY` boy) with equal 50% probability. Thus both statements are true and R explains A.',
  },
  {
    id: 'q-10',
    topicSlug: 'cbse-exam-mastery',
    subtopicTitle: 'Assertion–Reason (Dihybrid)',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** Two tall pea plants when crossed can sometimes produce a dwarf pea plant.\n**Reason (R):** Both tall parents can be heterozygous (`Tt`), each passing a recessive `t` allele to the offspring.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Crossing `Tt × Tt` produces `tt` (dwarf) in 25% of offspring even though both parents appear tall phenotypically.',
  },
  {
    id: 'q-11',
    topicSlug: 'monohybrid-cross',
    subtopicTitle: 'Gamete Formation',
    type: 'mcq',
    marks: 1,
    question:
      'Which Mendel law states that alleles do not blend and separate cleanly during gamete formation so each gamete receives only one allele?',
    options: [
      'Law of Independent Assortment',
      'Law of Segregation (Purity of Gametes)',
      'Law of Natural Selection',
      'Law of Incomplete Dominance',
    ],
    correctIndex: 1,
    explanation:
      'Mendel’s 2nd Law — the Law of Segregation — explains why `Tt` produces pure `T` and pure `t` gametes.',
  },
  {
    id: 'q-12',
    topicSlug: 'dihybrid-cross',
    subtopicTitle: 'Dihybrid Genotypes',
    type: 'mcq',
    marks: 1,
    question:
      'How many boxes in the 16-box `F₂` Punnett square of `RrYy × RrYy` have the exact heterozygous dihybrid genotype **`RrYy`**?',
    options: [
      '1 out of 16',
      '2 out of 16',
      '4 out of 16',
      '9 out of 16',
    ],
    correctIndex: 2,
    explanation:
      'Along the anti-diagonal of the standard `4×4` grid (`RY/ry`, `Ry/rY`, `rY/Ry`, `ry/RY`), exactly **4 out of 16** boxes have genotype `RrYy`!',
  },
];
