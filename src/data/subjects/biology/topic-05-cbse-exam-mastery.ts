import { Topic } from '../../../types/curriculum';

export const topicCbseExamMastery: Topic = {
  id: 'bio-topic-5',
  slug: 'cbse-exam-mastery',
  order: 9,
  title: 'CBSE Board Exam Mastery & Chapter Wrap-Up',
  description:
    'Complete the rest of NCERT Chapter 8 (Sex Determination), verify CBSE syllabus boundaries, avoid top examiner traps, and test yourself offline.',
  ncertChapter: 'Chapter 8: Heredity (Section 8.2.4 & Board Exam Prep)',
  subtopics: [
    {
      id: 'bio-sub-5-1',
      slug: 'sex-determination-and-syllabus-scope',
      title: 'Sex Determination (XX / XY) & CBSE Syllabus Scope',
      subtitle:
        'Finish NCERT Chapter 8 completely: learn how human sex is determined by a 50:50 Punnett cross and see which topics are deleted from the CBSE syllabus.',
      estimatedMinutes: 10,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT 8.2.4 (Sex Determination) & Rationalized CBSE Syllabus',
      learningObjectives: [
        'Compare environmental vs. genetic sex determination with NCERT examples.',
        'Draw the human XX × XY sex determination cross and explain why probability is always 50% boy : 50% girl.',
        'Verify which Evolution topics are deleted from CBSE Class 10 so you do not waste study time.',
      ],
      keywords: [
        'sex determination',
        'XX XY chromosomes',
        '23 pairs',
        'autosomes',
        'sex chromosomes',
        'rationalized syllabus',
        'deleted topics',
        'cbse chapter 8',
      ],
      sections: [
        {
          id: 'sex-determination-mechanisms',
          title: '1. Environmental vs. Genetic Sex Determination',
          blocks: [
            {
              type: 'paragraph',
              text: 'Different species use completely different strategies to determine whether a fertilized egg becomes male or female:',
            },
            {
              type: 'table',
              caption: 'NCERT Examples of Sex Determination Across Species',
              headers: ['Strategy', 'Organism Example', 'How It Works'],
              rows: [
                ['Environmental Cue (Temperature)', 'Certain reptiles (turtles, crocodiles)', 'The **temperature** at which fertilized eggs are incubated determines whether offspring develop as male or female.'],
                ['Non-Genetic Switching', 'Snails', 'Individuals can **change sex** during their lifetime, proving sex is not always fixed genetically.'],
                ['Genetic Control (Sex Chromosomes)', 'Human beings', 'Sex is strictly determined by the **sex chromosomes (`X` and `Y`)** inherited from parents at fertilization.'],
              ],
            },
          ],
        },
        {
          id: 'human-xx-xy-cross',
          title: '2. Sex Determination in Human Beings (`XX` Female × `XY` Male)',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Human Sex Determination in 3 Lines',
              bullets: [
                'Mother (`XX`) always gives an **`X` chromosome** in every egg.',
                'Father (`XY`) gives either **`X` (50% → Girl `XX`)** or **`Y` (50% → Boy `XY`)**.',
                'Probability of a boy or girl is **always 50% : 50% (1:1)** on every pregnancy.',
              ],
            },
            {
              type: 'key-points',
              title: 'Must-Know Facts About Human Chromosomes',
              items: [
                'Human body cells have **23 pairs (46) chromosomes**.',
                '**22 pairs** are **autosomes** (identical in shape and size in both males and females).',
                'The **23rd pair** is the **sex chromosomes**: females have a perfect pair **`XX`**, while males have a mismatched pair **`XY`** (`Y` is smaller).',
                'Therefore, **every mother’s egg always carries an `X`** chromosome, while **a father’s sperm carries either `X` (50%) or `Y` (50%)**.',
                'It is purely the **father’s sperm (`X` or `Y`)** that genetically determines the sex of the baby — there is always a **50% : 50% (1 : 1)** probability on every pregnancy.',
              ],
            },
            {
              type: 'lab',
              labId: 'sex-determination-lab',
              title: 'Interactive Visualizer: Human XX × XY Inheritance',
              caption: 'Simulate fertilization between maternal egg (`X`) and paternal sperm (`X` or `Y`) to see why sex ratio stays 50:50.',
            },
          ],
        },
        {
          id: 'cbse-rationalized-scope',
          title: '3. CBSE Class 10 Rationalized Syllabus Checklist (Chapter 8)',
          blocks: [
            {
              type: 'callout',
              variant: 'ncert',
              title: 'Don’t Study Deleted Sections From Old Textbooks!',
              body: 'In older NCERT editions, this chapter was Chapter 9 (*Heredity and Evolution*). Under the current CBSE rationalized syllabus, it is **Chapter 8: Heredity** and all Evolution sections are **excluded from board exams**.',
            },
            {
              type: 'table',
              caption: 'CBSE Class 10 Syllabus Verification',
              headers: ['IN Syllabus (Will Be Tested in Board Exams)', 'DELETED (Not Tested in Board Exams)'],
              rows: [
                ['Accumulation of variation during reproduction', 'Evolution & Origin of life'],
                ['Heredity, Inherited vs. Acquired traits (basic idea)', 'Speciation & Natural Selection / Genetic Drift'],
                ['Mendel’s contribution: Monohybrid (`3:1`, `1:2:1`) & Dihybrid (`9:3:3:1`) crosses', 'Tracing evolutionary relationships (Homologous & Analogous organs, Fossils)'],
                ['How traits get expressed (DNA → protein/enzyme → hormone)', 'Human evolution & Molecular phylogeny'],
                ['Sex determination in humans (`XX`/`XY`)', 'Evolution should not be equated with progress'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bio-sub-5-2',
      slug: 'cbse-traps-question-bank-and-quiz',
      title: 'Common Traps, Board Q&A Bank & Interactive Self-Quiz',
      subtitle:
        'Check the top 8 mistakes that cost Class 10 students marks, review solved 1–5 mark questions, and test yourself in the offline quiz arena.',
      estimatedMinutes: 18,
      difficulty: 'Board Mastery',
      ncertSection: 'Full Chapter Board Exam Practice',
      learningObjectives: [
        'Spot and avoid the 8 most frequent student mistakes in CBSE Heredity answers.',
        'Structure 2-mark, 3-mark, 4-mark Case-Based, and 5-mark answers cleanly to get full step marking.',
        'Score 80%+ on the interactive MCQ, Assertion-Reason, and Case-Study self-test.',
      ],
      keywords: [
        'cbse sample questions',
        'assertion reason',
        'case based questions',
        'common mistakes',
        'examiner traps',
        'mock test',
        'quiz',
      ],
      sections: [
        {
          id: 'top-8-examiner-traps',
          title: '1. Top 8 Mistakes Class 10 Students Make (And How to Avoid Them)',
          blocks: [
            {
              type: 'notebook-mistake',
              studentName: 'Riya',
              title: 'Phenotypic vs. Genotypic Ratio',
              wrongWork: 'Tt × Tt  →  Genotypic ratio = 3 : 1',
              teacherFix: 'Tt × Tt  →  Phenotypic = 3:1  |  Genotypic = 1:2:1',
              whyWrong: '3 Tall : 1 Dwarf is the **Phenotypic** ratio (appearance). For **Genotypic** ratio, `TT` and `Tt` are different (`1 TT : 2 Tt : 1 tt`).',
            },
            {
              type: 'steps',
              title: 'Examiner Checklist — Read Before Every Test',
              items: [
                {
                  label: 'Trap 1: Writing `Rr` and `Yy` as dihybrid gametes',
                  detail: 'Each gamete must carry ONE allele from EACH gene → write `RY, Ry, rY, ry`.',
                },
                {
                  label: 'Trap 2: Confusing `3:1` (Phenotypic) with `1:2:1` (Genotypic)',
                  detail: 'Always label BOTH ratios clearly in a monohybrid cross (`Phenotypic ratio = 3 Tall : 1 Dwarf`; `Genotypic ratio = 1 TT : 2 Tt : 1 tt`).',
                },
                {
                  label: 'Trap 3: Writing `tT` or `RYry` inside Punnett boxes',
                  detail: 'Always write capital letter first (`Tt`) and keep matching gene letters paired (`RrYy`).',
                },
                {
                  label: 'Trap 4: Using two different alphabets (`T` for Tall, `D` for Dwarf)',
                  detail: 'Use `T` and `t` — never `TD`!',
                },
                {
                  label: 'Trap 5: Thinking "Dominant" means "More Common in the World"',
                  detail: 'Dominant means **expressed in heterozygous `Tt`**, NOT necessarily the majority trait in a wild population (e.g., six fingers is dominant in humans yet rare!).',
                },
                {
                  label: 'Trap 6: Assuming `Tt × tt` gives `3:1`',
                  detail: 'Read the parents carefully! `Tt × tt` is a **Test Cross** giving **`1:1`** (50% Tall, 50% Dwarf).',
                },
                {
                  label: 'Trap 7: Mixing up Seed Colour (`Yellow` dominant) vs. Pod Colour (`Green` dominant)',
                  detail: 'In peas: **Yellow seed** (`Y`) > Green seed (`y`); **Green pod** (`G`) > Yellow pod (`g`).',
                },
                {
                  label: 'Trap 8: Forgetting to label `P`, `Gametes`, `F₁`, and `F₂` in board diagrams',
                  detail: 'CBSE marking schemes award step marks for neat cross labels (`P`, `Gametes`, `F₁`, `Selfing`, `F₂`).',
                },
              ],
            },
          ],
        },
        {
          id: 'cbse-solved-case-study',
          title: '2. CBSE Case-Based & Competency Questions (With Marking Scheme)',
          blocks: [
            {
              type: 'qa',
              marks: 4,
              tag: 'Case-Based',
              question:
                'A student crossed a pure-breeding pea plant with **Round, Yellow seeds (`RRYY`)** with one having **Wrinkled, Green seeds (`rryy`)**. All `F₁` plants had Round, Yellow seeds. When `F₁` plants were self-pollinated, **800 seeds** were harvested in `F₂`.\n(a) State the genotype and phenotype of `F₁`.\n(b) Write the 4 types of gametes produced by an `F₁` plant.\n(c) Out of 800 `F₂` seeds, how many are expected to be **Wrinkled & Yellow**?\n(d) Which Mendelian law explains the appearance of Round-Green and Wrinkled-Yellow seeds?',
              answer:
                '**(a) `F₁` Generation:** Genotype = **`RrYy`**; Phenotype = **Round, Yellow seeds**.\n**(b) Gametes of `F₁` (`RrYy`):** **`RY`, `Ry`, `rY`, `ry`**.\n**(c) Expected Wrinkled & Yellow seeds:** In `9:3:3:1`, Wrinkled & Yellow = `3/16`.\n   Count = `(3 / 16) × 800 = 3 × 50` = **150 seeds**.\n**(d) Law:** **Law of Independent Assortment**.',
              markingTip: 'Case-based questions carry 4 marks (1+1+2 or 1+1+1+1). Show `(3/16) × 800 = 150` clearly for full credit!',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                'Two pea plants with **round seeds** were crossed. Out of 120 offspring produced, **90 had round seeds** and **30 had wrinkled seeds**. Deduce the genotypes of both parent plants and justify your answer.',
              answer:
                '• Ratio of offspring = `90 Round : 30 Wrinkled` = **`3 : 1`**.\n• A `3 : 1` phenotypic ratio occurs only when **both parents are heterozygous (`Rr × Rr`)**.\n• Even though both parents looked Round, each carried one hidden recessive allele (`r`), allowing `rr` (wrinkled) offspring to form in 1/4 (`30/120`) of progeny.',
            },
          ],
        },
        {
          id: 'interactive-cbse-quiz-section',
          title: '3. Interactive Offline CBSE Self-Test Arena',
          blocks: [
            {
              type: 'paragraph',
              text: 'Test everything you learned across Alleles, Punnett Squares, Monohybrid, Dihybrid, and Sex Determination! Filter by question type or take the full practice test — your score and best attempt are saved locally offline.',
            },
            {
              type: 'lab',
              labId: 'cbse-quiz-arena',
              title: 'Interactive Quiz: CBSE Class 10 Heredity Test Arena',
              caption: 'Includes MCQs, CBSE Assertion–Reason questions, and Case-Based problems with step-by-step explanations.',
            },
          ],
        },
      ],
    },
  ],
};
