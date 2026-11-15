import { Topic } from '../../../types/curriculum';

export const topicOurEnvironmentAndMastery: Topic = {
  id: 'bio-topic-env',
  slug: 'bio-our-environment',
  order: 10,
  title: 'Our Environment (Ch 13) & Science 80M Blueprint',
  description:
    'Master Ecosystems (aquarium vs pond), Food Webs, 1% Solar Capture + 10% Energy Law numericals, DDT Biomagnification, Ozone UV equations & 1987 Montreal Protocol, Biodegradable vs Non-biodegradable waste, and the Unified Saturday 05-Dec-2026 80M Science Blueprint + 60-Q Quiz Arena.',
  ncertChapter: 'Chapter 13: Our Environment & Science 80M Mastery',
  subtopics: [
    {
      id: 'bio-sub-env-1',
      slug: 'bio13-ecosystem-energy-biomagnification',
      title: 'Ecosystems, Food Webs, 10% Energy Law & DDT Biomagnification',
      subtitle:
        'Why an aquarium needs regular cleaning while a natural pond does not, Lindeman’s 1% solar + 10% trophic transfer rule with hand-practice numericals, and inverted DDT magnification.',
      estimatedMinutes: 20,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT 13.1 (Eco-System — What are its Components?)',
      learningObjectives: [
        'Classify Biotic vs Abiotic components and Natural vs Artificial ecosystems (explaining why aquariums need cleaning).',
        'Explain the critical nutrient-recycling role of Decomposers (Bacteria & Fungi).',
        'Apply BOTH the 1% Solar Capture rule (Sun → Plants) AND the 10% Law (T₁ → T₂ → T₃ → T₄) accurately in numericals.',
        'Contrast upright 10% Energy Pyramid with inverted DDT Biological Magnification.',
      ],
      keywords: [
        'ecosystem',
        'biotic abiotic',
        'aquarium artificial ecosystem',
        'decomposers',
        'food chain food web',
        '10 percent law',
        '1 percent solar capture',
        'unidirectional energy',
        'biological magnification',
        'ddt',
      ],
      sections: [
        {
          id: 'ecosystems-and-food-webs',
          title: '1. Ecosystems, Decomposers & Interconnected Food Webs',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Ecosystem Basics in 4 Lines',
              bullets: [
                '**Ecosystem** = **Biotic** living organisms (plants, animals, microbes) + **Abiotic** physical factors (temperature, rainfall, wind, soil, minerals).',
                '**Natural Ecosystems:** Forest, pond, lake. **Artificial (Man-made):** Garden, crop field, **aquarium**.',
                '**Why must an aquarium be cleaned regularly while a pond/lake does not?** An aquarium lacks a complete self-sustaining web of **decomposers** and natural water circulation, so fish excreta & uneaten food rot and poison the water!',
                '**Decomposers (Saprotrophs — Bacteria & Fungi):** Break complex dead organic matter into **simple inorganic substances** that replenish soil fertility for plants.',
              ],
            },
            {
              type: 'visual-diagram',
              diagramId: 'food-web-and-ozone-depletion-visual',
              title: 'Terrestrial & Aquatic Food Webs + Stratospheric Ozone UV Shield',
              caption: 'Notice unidirectional energy arrows (Sun → T₁ → T₂ → T₃ → T₄) and why food webs give far greater stability than single isolated chains!',
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'Food Chain vs. Food Web — Three CBSE Essentials',
              body: '1. **Trophic Levels:** `T₁` = Autotrophs (**Producers**); `T₂` = Herbivores (**Primary Consumers**); `T₃` = Small Carnivores (**Secondary Consumers**); `T₄` = Large Carnivores (**Tertiary Consumers**).\n2. **Unidirectional Energy Flow:** Energy captured by autotrophs NEVER reverts back to the Sun, and energy passed to herbivores NEVER flows back to plants!\n3. **Why Food Chains Stay Short (3–4 Steps):** Because `90%` of energy is lost at every step as heat, digestion, growth, and work — almost zero usable energy remains beyond the 4th trophic level!',
            },
          ],
        },
        {
          id: 'ten-percent-law-and-biomagnification',
          title: '2. The 1% Solar Rule, 10% Energy Law & DDT Biomagnification',
          blocks: [
            {
              type: 'callout',
              variant: 'trap',
              title: 'HUGE CBSE NUMERICAL TRAP: `1%` From Sun to Plants, THEN `10%` Between Organisms!',
              body: 'Students lose 2 marks every board exam by taking `10%` of sunlight directly! Follow the strict two-step rule:\n• **Step A (Sun → Producers `T₁`):** Green plants in a terrestrial ecosystem capture **ONLY `1%`** of solar energy falling on their leaves!\n• **Step B (`T₁ → T₂ → T₃ → T₄`):** Only **`10%`** of energy stored in one trophic level transfers to the next level (`90%` lost to heat/metabolism).',
            },
            {
              type: 'lab',
              labId: 'bio-3d-dna-eco-pyramid',
              title: '3D Interactive Lab: 10% Energy Pyramid vs. Inverted DDT Biomagnification Tower',
              caption: 'Switch to Scene 2, slide Sunlight energy from 100,000 J to 10,000,000 J, then toggle "DDT Biomagnification Mode" to watch the pyramid invert!',
            },
            {
              type: 'table',
              caption: 'Energy Flow (Shrinks Upward) vs. Biological Magnification (Grows Upward!)',
              headers: ['Property', '10% Energy Flow (Pyramid Upright)', 'Biological Magnification (Tower Inverted!)'],
              rows: [
                ['**What moves up?**', 'Chemical food energy (`Joules` / `kJ`)', 'Non-biodegradable toxic chemicals (`DDT`, pesticides, heavy metals)'],
                ['**Trend from `T₁` → `T₄`**', '**Decreases sharply by `10×` at each step**', '**Increases / multiplies at each trophic level!**'],
                ['**Why does it happen?**', '`90%` lost as heat, movement & life processes', 'Toxins are **neither degraded nor excreted**, so predators eat many contaminated prey and accumulate all toxins!'],
                ['**Who suffers most?**', '`T₄` gets tiniest energy & smallest population', '**Top Carnivores & Human beings** (occupying top trophic level) hold the **maximum concentration** (`~25 ppm` vs `0.003 ppb` water)!'],
              ],
            },
            {
              type: 'hand-practice',
              title: '10% Energy Law & Biomagnification Numericals (Solve by Hand First!)',
              subtitle: 'Watch the 1% Solar Trap vs 10% Trophic Transfer carefully on each problem.',
              problems: [
                {
                  id: 'bio13-p1',
                  numberLabel: 'Bio-Num 1',
                  marks: 2,
                  timeMinutes: 3,
                  tag: '1% Solar + 10% Law Trap',
                  question:
                    'In the food chain **Sun → Green Plants → Deer → Lion**, **`20,000 J`** of solar energy falls on the green plants. How much energy will be available to the **Lion**?',
                  copyCheck: 'Solar incident = 20,000 J | Steps: Sun → Plants (1%) → Deer (10%) → Lion (10%)',
                  step1Setup: 'First calculate Plants (T₁) using 1% of solar energy (NOT 10%!): T₁ = (1/100) × 20,000 J.',
                  midwayCheckpoint: 'Plants (T₁) capture = 200 J; Deer (T₂) gets 10% of 200 J = 20 J.',
                  finalAnswer: '2 J (available to the Lion)',
                  fullSolution:
                    '1. Energy captured by Green Plants (`T₁`) = `1%` of `20,000 J` = `(1/100) × 20,000 = 200 J`.\n2. Energy transferred to Deer (`T₂`) = `10%` of `200 J` = `(10/100) × 200 = 20 J`.\n3. Energy transferred to Lion (`T₃`) = `10%` of `20 J` = `(10/100) × 20 = 2 J`.',
                  sillyTrapNote: 'If you wrongly took 10% of solar energy (2,000 J), you would get 20 J for Lion and lose full marks!',
                },
                {
                  id: 'bio13-p2',
                  numberLabel: 'Bio-Num 2',
                  marks: 3,
                  timeMinutes: 4,
                  tag: 'Reverse & Forward 10% Law',
                  question:
                    'Consider the food chain: **Grass → Grasshopper → Frog → Snake → Peacock**. If **`40 J`** of energy is available to the **Snake**, calculate:\n(a) Energy available to the **Peacock**.\n(b) Energy available at the **Producer (Grass)** level.\n(c) Solar energy that originally fell on the Grass.',
                  copyCheck: 'Snake (T₄) = 40 J | Peacock (T₅) = ? | Grass (T₁) = ? | Sun = ?',
                  step1Setup: 'To go UP one level (Snake → Peacock), multiply by 10% (× 0.1). To go DOWN one level, multiply by 10.',
                  midwayCheckpoint: 'Peacock = 4 J; Frog = 400 J; Grasshopper = 4,000 J.',
                  finalAnswer: '(a) 4 J  |  (b) 40,000 J (Grass)  |  (c) 4,000,000 J (4 MJ) Solar',
                  fullSolution:
                    '**(a) Peacock (`T₅`):** `10%` of Snake (`40 J`) = `4 J`.\n**(b) Going backward to Grass (`T₁`):**\n• Frog (`T₃`) = `40 × 10 = 400 J`\n• Grasshopper (`T₂`) = `400 × 10 = 4,000 J`\n• Grass (`T₁`) = `4,000 × 10 = 40,000 J`.\n**(c) Incident Solar Energy:** Since Grass captured only `1%` of sunlight, Solar energy = `40,000 × 100 = 4,000,000 J` (`4 MJ`).',
                  sillyTrapNote: 'Count the trophic steps backward carefully (Snake → Frog → Grasshopper → Grass = 3 jumps of ×10 = ×1,000)!',
                },
                {
                  id: 'bio13-p3',
                  numberLabel: 'Bio-Num 3',
                  marks: 2,
                  timeMinutes: 3,
                  tag: 'Short vs Long Chain Efficiency',
                  question:
                    'Suppose **`1,000,000 J`** (`10⁶ J`) of sunlight falls on a crop field. Calculate how much MORE energy a human gets by eating **crops directly** (`Plants → Human`) compared to eating meat (`Plants → Goat → Human`).',
                  copyCheck: 'Solar = 1,000,000 J | Plants = 1% = 10,000 J',
                  step1Setup: 'Plants = 1% × 1,000,000 = 10,000 J. Now apply 10% across 1 step vs 2 steps.',
                  midwayCheckpoint: 'Direct plant diet: Human gets 1,000 J; Goat-meat chain: Goat gets 1,000 J.',
                  finalAnswer: '1,000 J vs 100 J (10× more energy from shorter food chain!)',
                  fullSolution:
                    '• Energy captured by Crop Plants (`T₁`) = `1%` of `1,000,000 J = 10,000 J`.\n• **Case (a) `Plants → Human`:** Human receives `10%` of `10,000 J` = **`1,000 J`**.\n• **Case (b) `Plants → Goat → Human`:** Goat gets `1,000 J`, so Human receives `10%` of `1,000 J` = **`100 J`**.\n• Shorter food chains save **10× more energy** (`900 J` extra here)!',
                  sillyTrapNote: 'Always start BOTH chains from the same 1% Plant capture (10,000 J)!',
                },
              ],
            },
          ],
        },
        {
          id: 'bio13-sub1-qa',
          title: '3. CBSE Board Questions — Ecosystem & Energy Flow',
          blocks: [
            {
              type: 'qa',
              marks: 2,
              tag: 'NCERT',
              question: 'Why does an **aquarium** have to be cleaned periodically, whereas **ponds or lakes** do not need cleaning?',
              answer:
                'A **pond or lake** is a complete **natural ecosystem** containing abundant **decomposers** (bacteria & fungi) and natural water recycling that continuously decompose dead matter and fish wastes into harmless inorganic nutrients.\nAn **aquarium** is an **incomplete artificial ecosystem** lacking sufficient decomposers and self-cleansing cycles, so waste and uneaten food accumulate and turn the water toxic unless cleaned manually.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question: 'What is **biological magnification**? Will the levels of this magnification be different at different levels of the ecosystem?',
              answer:
                '**Biological magnification (Biomagnification)** is the progressive **increase in concentration of harmful non-biodegradable chemicals** (such as pesticides like `DDT`) at each successive trophic level of a food chain.\n• **Yes, levels differ sharply:** Concentration is lowest in producers (`T₁`) and **highest at the top trophic level** (top carnivores and **humans**) because these chemicals are neither broken down by enzymes nor excreted.',
            },
          ],
        },
      ],
    },
    {
      id: 'bio-sub-env-2',
      slug: 'bio13-ozone-waste-science-blueprint',
      title: 'Ozone Shield, Waste Management & Science (086) 80M Blueprint',
      subtitle:
        'UV Ozone formation equations & 1987 UNEP Montreal Protocol, Biodegradable vs Non-biodegradable enzymes, Deleted Ch 16 Alert, and Complete 80M Science Blueprint + 60-Q Quiz Arena.',
      estimatedMinutes: 25,
      difficulty: 'Board Mastery',
      ncertSection: 'NCERT 13.2 (How Do Our Activities Affect the Environment?) + CBSE Code 086 Exam Prep',
      learningObjectives: [
        'Write both UV equations for stratospheric Ozone (O₃) formation and contrast good upper ozone vs surface poison.',
        'State the cause (CFCs) and global solution (1987 UNEP Montreal Protocol) for ozone depletion.',
        'Explain why bacterial/fungal enzymes cannot break down plastics (enzyme specificity) and evaluate waste disposal methods.',
        'Plan the Saturday 05-Dec-2026 CBSE Class 10 Science (086) 80-Mark Paper (Chem 25M + Bio 30M + Phy 25M) across Sections A–E and drill the 60-Q Quiz Arena.',
      ],
      keywords: [
        'ozone layer',
        'uv radiation',
        'cfc',
        '1987 unep montreal protocol',
        'biodegradable',
        'non-biodegradable',
        'enzyme specificity',
        'science 086 blueprint',
        '80 marks science',
        'biology 30 marks',
      ],
      sections: [
        {
          id: 'ozone-shield-and-waste-management',
          title: '1. Stratospheric Ozone (`O₃`) Shield & Biodegradable vs. Non-Biodegradable Waste',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Ozone & Waste Management Key Facts',
              bullets: [
                '**Good vs Bad `O₃`:** At ground level, ozone is a **deadly poison**; in the upper **stratosphere**, `O₃` shields Earth from harmful **UV radiation** (preventing **skin cancer** & cataracts)!',
                '**Formation Equations:** `O₂ —(UV)→ O + O` followed by `O + O₂ → O₃`.',
                '**`CFCs` & `1987` UNEP Pact:** Synthetic **Chlorofluorocarbons (`CFCs`)** used in refrigerants/aerosols caused ozone thinning; in **1987**, **UNEP** froze CFC production at 1986 levels (**Montreal Protocol**).',
                '**Why Plastics Don’t Rot:** Decomposer **enzymes are specific in action** — microbes have enzymes to digest starch/cellulose, NOT man-made polymers like plastic!',
              ],
            },
            {
              type: 'table',
              caption: 'Biodegradable vs. Non-Biodegradable Waste + Kulhad vs. Paper Cup Board Reasoning',
              headers: ['Waste Category', 'Examples', 'Environmental Impact & Enzyme Action'],
              rows: [
                ['**Biodegradable**', 'Fruit peels, paper, cotton, wood, cow dung', 'Broken down rapidly by **specific microbial enzymes** into harmless compost/minerals (**Green Bin**).'],
                ['**Non-Biodegradable**', 'Plastics, glass, aluminium cans, **`DDT`**, synthetic nylon', '**Inert to biological enzymes** → persist for centuries, clog drains/soil, cause **biomagnification** (**Blue Bin** — Recycle!).'],
                ['**CBSE Case: Kulhads vs Paper Cups**', 'Disposable tea cups on Indian trains', 'Clay **kulhads** seemed eco-friendly but stripped vast amounts of **fertile topsoil**! **Disposable paper cups** (biodegradable, replaceable) proved far more sustainable than plastic OR kulhads.'],
              ],
            },
            {
              type: 'callout',
              variant: 'trap',
              title: 'Rationalized CBSE 2026–27 Alert: Old Chapter 16 Is DELETED!',
              body: '**Management of Natural Resources** (old NCERT Chapter 16 — Chipko Andolan, Tehri/Sardar Sarovar dams, Ganga Action Plan, Coal/Petroleum, 5R slogan) is **EXCLUDED from CBSE Board Theory Examinations** (kept only for optional internal portfolio). Focus 100% of your environmental study here on **Chapter 13: Our Environment**!',
            },
          ],
        },
        {
          id: 'science-80m-board-blueprint',
          title: '2. Unified CBSE Class 10 Science (Code 086) — Saturday, 05 Dec 2026 Blueprint',
          blocks: [
            {
              type: 'callout',
              variant: 'tip',
              title: 'Total Science Score Architecture: 80 Marks Theory + 20 Marks Internal = 100 Marks',
              body: 'On **Saturday, 05 Dec 2026**, your Class 10 Science (Code 086) board paper integrates **Chemistry (`25M`) + Biology (`30M`) + Physics (`25M`) = `80 Marks` (`3 Hours / 180 Min`)**.',
            },
            {
              type: 'table',
              caption: 'Official CBSE Class 10 Science (086) Sections A–E Architecture (39 Questions = 80 Marks)',
              headers: ['Section', 'Question Types', 'Count × Marks', 'Target Exam-Hall Time'],
              rows: [
                ['**Section A**', '`16` MCQs + `4` Assertion–Reason (`1M` each)', '`20 × 1M = 20M`', '`28 min`'],
                ['**Section B**', 'Very Short Answer (2-3 crisp bullets / diagrams)', '`6 × 2M = 12M`', '`22 min`'],
                ['**Section C**', 'Short Answer (3 labelled points / Punnett / pathway / 10% sum)', '`7 × 3M = 21M`', '`42 min`'],
                ['**Section D**', 'Long Answer (Alimentary/Heart/Nephron/Reproduction/Crosses with OR choices)', '`3 × 5M = 15M`', '`40 min`'],
                ['**Section E**', 'Case / Source-Based Integrated Units (`1 + 1 + 2M` sub-parts)', '`3 × 4M = 12M`', '`30 min`'],
                ['**Final Audit**', 'Check A/R logic, arrows on diagrams, `1%` vs `10%`, `F₁/F₂` labels', '**Reserve Buffer**', '**`18 min` review!**'],
              ],
            },
            {
              type: 'table',
              caption: 'Biology 30-Mark Chapter Weightage Map (NCERT Rationalized 2026–27)',
              headers: ['Chapter', 'Approx. Marks', 'Highest-Yield CBSE Questions'],
              rows: [
                ['**Ch 5: Life Processes**', '`~9M`', 'Alimentary enzymes, Glucose 3 pathways, Double Circulation & Thick LV, Nephron Ultrafiltration/Reabsorption, Xylem vs Phloem'],
                ['**Ch 6: Control & Coordination**', '`~6M`', 'Synapse one-way chemical flow, Reflex Arc diagram, Cerebellum vs Medulla, Auxin Phototropism, Thyroxine (Goitre) & Insulin Feedback'],
                ['**Ch 7: How do Organisms Reproduce?**', '`~6M`', 'Amoeba vs Leishmania vs Plasmodium, Planaria vs Spirogyra, Bisexual flower & Post-fertilization Seed/Fruit, Placenta & 4 Contraceptives'],
                ['**Ch 8: Heredity**', '`~4M`', 'Monohybrid `3:1` vs `1:2:1`, Dihybrid `9:3:3:1`, Gene→Enzyme→Hormone, Human `XX × XY` *(Evolution DELETED!)*'],
                ['**Ch 13: Our Environment**', '`~5M`', '`1%` Solar + `10%` Energy numericals, DDT Biomagnification, Ozone UV equations + 1987 UNEP, Aquarium vs Pond *(Old Ch 16 DELETED!)*'],
              ],
            },
          ],
        },
        {
          id: 'biology-full-quiz-section',
          title: '3. Biology Full-Syllabus 60-Q CBSE Quiz Arena (Ch 5, 6, 7, 8 & 13)',
          blocks: [
            {
              type: 'paragraph',
              text: 'Test your complete 30-Mark Biology preparation across all five rationalized NCERT chapters! Practice MCQs, Assertion–Reason traps, and Case-Based problems offline with instant NCERT explanations.',
            },
            {
              type: 'lab',
              labId: 'cbse-quiz-arena',
              title: 'Biology Full-Syllabus 60-Q CBSE Quiz Arena (Ch 5, 6, 7, 8 & 13)',
              caption: 'Covers Life Processes, Control & Coordination, Reproduction, Heredity, and Our Environment — your best percentage saves offline!',
            },
          ],
        },
      ],
    },
  ],
};
