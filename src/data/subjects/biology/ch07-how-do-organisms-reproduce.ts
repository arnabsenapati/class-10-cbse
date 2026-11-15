import { Topic } from '../../../types/curriculum';

export const topicReproduction: Topic = {
  id: 'bio-topic-repro',
  slug: 'bio-reproduction',
  order: 4,
  title: 'How do Organisms Reproduce?',
  description:
    'Master DNA copying & variation, all 6 Asexual Modes (Amoeba vs Leishmania, Plasmodium, Spirogyra, Planaria, Hydra, Bryophyllum/Tissue Culture, Rhizopus), Flowering Plant Fertilization, Human Systems, Placenta, Menstruation & Contraception.',
  ncertChapter: 'Chapter 7: How do Organisms Reproduce?',
  subtopics: [
    {
      id: 'bio-sub-repro-1',
      slug: 'bio07-dna-copying-asexual',
      title: 'DNA Copying, Variation & All 6 Asexual Reproduction Modes',
      subtitle:
        'Why imperfect DNA copying saves species during climate shifts, Amoeba vs Leishmania axis, Spirogyra vs Planaria trap, Bryophyllum leaf buds, Tissue Culture & Rhizopus spores.',
      estimatedMinutes: 18,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT 7.1 & 7.2 (Importance of Variation & Modes of Asexual Reproduction)',
      learningObjectives: [
        'Explain why DNA copying + cellular apparatus separation is central to reproduction, and why minor errors benefit species survival.',
        'Contrast Amoeba (any-plane binary fission), Leishmania (longitudinal whip axis), and Plasmodium (multiple fission).',
        'Distinguish Fragmentation (Spirogyra) from Regeneration (Planaria) and explain why complex animals cannot fragment.',
        'Explain Vegetative Propagation (Bryophyllum, Tissue Culture) and Spore Formation (Rhizopus hyphae vs sporangia).',
      ],
      keywords: [
        'dna copying',
        'variation survival',
        'binary fission',
        'leishmania',
        'plasmodium multiple fission',
        'spirogyra fragmentation',
        'planaria regeneration',
        'hydra budding',
        'bryophyllum',
        'tissue culture',
        'rhizopus sporangia',
      ],
      sections: [
        {
          id: 'importance-of-dna-copying',
          title: '1. Why DNA Copying & Variation Matter for Species Survival',
          blocks: [
            {
              type: 'quick-summary',
              title: 'DNA Copying & Niche Survival',
              bullets: [
                'Reproduction is NOT essential for one individual to stay alive, yet it creates **body-design blueprints** to keep a **species** alive.',
                '**DNA copying** uses biochemical reactions that are reliable yet **never 100% identical** → slight built-in **variations**!',
                '**Drastic errors** kill the new cell; **mild variations** let some individuals survive sudden **niche shifts** (e.g., heat-resistant bacteria surviving warming waters!).',
              ],
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'Why Must DNA Copying Be Accompanied by Additional Cellular Apparatus?',
              body: 'A bare copy of DNA cannot run metabolism on its own! Before dividing, the parent cell builds **two complete sets of cytoplasmic organelles & cellular apparatus** so each daughter cell receives both **DNA instructions AND machinery** to read them.',
            },
          ],
        },
        {
          id: 'six-asexual-reproduction-modes',
          title: '2. All 6 Asexual Reproduction Modes (Complete NCERT Contrast Table)',
          blocks: [
            {
              type: 'table',
              caption: '6 NCERT Modes of Asexual Reproduction — Mechanism & Classic Board Contrasts',
              headers: ['Mode', 'Organism Examples', 'Exact Mechanism & Key CBSE Distinction'],
              rows: [
                ['**1. Binary & Multiple Fission**', '*Amoeba* (any plane), ***Leishmania*** (Kala-azar), *Plasmodium* (Malaria)', '**Binary:** Splits into 2. *Amoeba* divides in **any plane**; ***Leishmania*** divides **strictly longitudinally** along its whip-like flagellum! **Multiple:** *Plasmodium* forms a **cyst** & divides into dozens at once.'],
                ['**2. Fragmentation**', '*Spirogyra* (simple filamentous alga)', 'Mature filament simply **breaks into smaller pieces**; each grows into a new individual. **Why NOT complex animals?** Complex bodies have specialized tissues/organs organized at fixed sites — cell-by-cell division cannot rebuild an entire body!'],
                ['**3. Regeneration**', '*Planaria*, *Hydra*', 'If accidentally cut into pieces, **specialized regenerative stem cells** proliferate into a cell mass and **differentiate** into new tissues/complete individuals. *(Not true reproduction since organisms don’t wait to be cut!)*'],
                ['**4. Budding**', '*Hydra* (multicellular), *Yeast* (unicellular)', 'Repeated cell division at one specific site grows an outward **bud** that develops & detaches as a new independent individual.'],
                ['**5. Vegetative Propagation & Tissue Culture**', 'Potato (eye), Ginger, ***Bryophyllum*** (leaf margin buds); Rose, Banana, Grapes, Jasmine', 'New plants grow from root/stem/leaf! **3 Advantages:** (1) Earlier flowering/fruiting than seeds, (2) Propagate **seedless plants** (banana, seedless grapes, rose), (3) Offspring are **genetically identical** clones. **Tissue Culture:** Callus grown from plant tip cells in sterile nutrient medium → **disease-free** thousands of plantlets!'],
                ['**6. Spore Formation**', '*Rhizopus* (Bread mould)', 'Thread-like **Hyphae** (non-reproductive) grow erect **blob-on-a-stick Sporangia** (reproductive) holding tiny **spores** wrapped in **thick protective walls** to survive drought/heat until landing on moist bread!'],
              ],
            },
            {
              type: 'notebook-mistake',
              studentName: 'Tanvi',
              title: 'Fragmentation vs. Regeneration',
              wrongWork: 'Human skin healing a cut or Planaria regrowing from pieces is Fragmentation.',
              teacherFix: 'Spirogyra simple filaments undergo FRAGMENTATION; Planaria & Hydra use specialized stem cells for REGENERATION!',
              whyWrong: 'In Fragmentation, simple uniform organisms break naturally and every cell divides directly. Regeneration requires specialized proliferating cells that differentiate into tissues.',
            },
            {
              type: 'lab',
              labId: 'bio-reproduction-3d-lab',
              title: 'Interactive Stage Player: Animate All 6 Asexual Modes (Steps 1 → 4)',
              caption: 'Open Tab 1 to scrub or play Amoeba, Leishmania longitudinal split, Plasmodium cyst burst, Hydra budding, 3-piece Planaria & Rhizopus sporangium!',
            },
            {
              type: 'checkpoint',
              prompt: 'Which organism causes **Kala-azar** and divides by **binary fission strictly in a longitudinal plane** due to its whip-like structure?',
              options: [
                { id: 'amoeba', label: 'Amoeba' },
                { id: 'leishmania', label: 'Leishmania' },
                { id: 'plasmodium', label: 'Plasmodium' },
              ],
              correctIds: ['leishmania'],
              successMsg: 'Spot on! Leishmania has a whip-like flagellum at one end, restricting binary fission to a fixed longitudinal orientation.',
              hintMsg: 'Amoeba splits in ANY plane; Plasmodium uses MULTIPLE fission inside a cyst!',
            },
          ],
        },
        {
          id: 'bio07-sub1-qa',
          title: '3. CBSE Board Questions — Variation & Asexual Modes',
          blocks: [
            {
              type: 'qa',
              marks: 3,
              tag: 'NCERT',
              question: 'Why is **variation** beneficial to a species over time, even though it may not help an individual immediately?',
              answer:
                'Populations occupy well-defined **ecological niches**. If a niche suddenly shifts drastically (for example, water temperature rises due to climate change), most individuals fitted only for the old temperature would perish.\nHowever, if a few individuals in that population carry **variations** (such as heat tolerance), they **survive and reproduce** to carry the species forward.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question: 'Give three advantages of **vegetative propagation**. How is *Bryophyllum* propagated vegetatively?',
              answer:
                '**Three advantages:**\n1. Plants bear flowers and fruits **much earlier** than those grown from seeds.\n2. Enables propagation of plants that have **lost the capacity to produce viable seeds** (e.g., banana, orange, rose, jasmine).\n3. All offspring are **genetically identical** to the parent, preserving desirable fruit/flower traits.\n• ***Bryophyllum*:** Buds formed in the **notches along the leaf margins** fall onto moist soil and develop into new plants.',
            },
          ],
        },
      ],
    },
    {
      id: 'bio-sub-repro-2',
      slug: 'bio07-sexual-plants-humans',
      title: 'Sexual Reproduction in Plants & Humans + Reproductive Health',
      subtitle:
        'Bisexual vs Unisexual flowers, Chemotropic pollen tube, Post-fertilization Seed/Fruit morph, Plumule vs Radicle, Human Male & Female Systems, Placenta, Menstruation & Contraception.',
      estimatedMinutes: 22,
      difficulty: 'Board Mastery',
      ncertSection: 'NCERT 7.3 (Sexual Reproduction in Flowering Plants & Human Beings)',
      learningObjectives: [
        'Classify Unisexual vs Bisexual flowers and Self vs Cross-pollination.',
        'Trace Pollination → Pollen tube growth → Zygote → Embryo → Seed (Ovule) & Fruit (Ovary) + Plumule/Radicle.',
        'Identify every Human Male & Female reproductive organ and state the exact function of Scrotum, Oviduct, Uterus & Placenta.',
        'Compare all 4 Contraception methods (Mechanical, Oral Hormonal, IUCD Copper-T, Surgical) and bacterial vs viral STDs.',
      ],
      keywords: [
        'unisexual bisexual flower',
        'self cross pollination',
        'pollen tube',
        'plumule radicle',
        'scrotum temperature',
        'oviduct fertilization',
        'uterus implantation',
        'placenta',
        'menstruation',
        'copper-t',
        'vasectomy tubectomy',
        'stds hiv gonorrhoea',
      ],
      sections: [
        {
          id: 'flower-pollination-and-seed-germination',
          title: '1. Flowering Plants: Pollination, Fertilization & Seed Germination',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Plant Sexual Reproduction at a Glance',
              bullets: [
                '**Unisexual flowers** (either Stamen OR Pistil): **Papaya, Watermelon**. **Bisexual flowers** (both): **Hibiscus, Mustard**.',
                '**Stamen (Male)** = `Anther` (pollen) + `Filament`. **Pistil / Carpel (Female)** = `Stigma` + `Style` + `Ovary` (holds `Ovules` with egg cell).',
                '**Self-pollination** = same flower (or another on same plant); **Cross-pollination** = one plant to another via wind/water/insects (creates more variation!).',
                '**Post-Fertilization:** `Zygote → Embryo`; **`Ovule → Seed`**; **`Ovary → Fruit`**; Sepals, Petals & Stamens dry & fall off!',
              ],
            },
            {
              type: 'visual-diagram',
              diagramId: 'human-reproductive-and-seed-atlas',
              title: '3-Panel Interactive Atlas: Bisexual Flower, Dicot Seed & Human Systems',
              caption: 'Switch between all 3 panels and toggle "Exam Self-Test: Hide Labels" for diagram practice!',
            },
            {
              type: 'lab',
              labId: 'bio-reproduction-3d-lab',
              title: 'Interactive Stage Player: Pollination → Pollen Tube → Seed & Fruit Morph',
              caption: 'Open Tab 2 to step through chemotropic pollen tube growth and post-fertilization morphing!',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'Seed Germination Trap: Plumule vs. Radicle',
              body: 'Inside the germinating dicot seed:\n• **Cotyledons** store food for the baby embryo.\n• **Plumule** grows upward into the **future Shoot** (`P` → *Plant top*!).\n• **Radicle** grows downward into the **future Root** (`R` → *Root*!).',
            },
          ],
        },
        {
          id: 'human-reproductive-placenta-and-contraception',
          title: '2. Human Systems, Placenta, Menstruation & Contraception',
          blocks: [
            {
              type: 'table',
              caption: 'Human Male & Female Organs — Exact Sites & NCERT Functions',
              headers: ['System', 'Structure / Organ', 'Exact NCERT Function'],
              rows: [
                ['**Male**', '**Testes (in Scrotum)**', 'Located **outside abdominal cavity** in scrotum because **sperm formation requires `2–2.5°C` LOWER temperature** than normal body temperature (`37°C`). Also secretes **Testosterone**!'],
                ['**Male**', '**Vas deferens + Prostate & Seminal vesicles**', 'Vas deferens carries sperms; **Prostate & Seminal vesicles** add **fluid** that provides **nutrition** and makes sperm **transport easy** through Urethra.'],
                ['**Female**', '**Ovary**', 'Produces female **egg (ovum)** every month + secretes **Oestrogen & Progesterone**.'],
                ['**Female**', '**Oviduct (Fallopian tube)**', '**EXACT SITE OF FERTILIZATION** where sperm fuses with egg to form Zygote!'],
                ['**Female**', '**Uterus & Placenta**', '**Uterus = Site of Implantation** & development. **Placenta** (disc tissue embedded in uterine wall with villi on embryo side & blood spaces on mother side) supplies **`O₂` & Glucose TO embryo** and removes **wastes FROM embryo**!'],
              ],
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'What Happens When the Egg Is NOT Fertilized? (Menstruation)',
              body: 'Every month, the ovary releases one egg and the **uterus prepares a thick, spongy, blood-rich lining** to nourish a possible embryo. If fertilization does **not** occur, the egg lives ~1 day, the lining is no longer needed, and **breaks down as blood and mucus through the vagina (~2–8 days)** — called **Menstruation** (repeats roughly every **28 days**).',
            },
            {
              type: 'table',
              caption: '4 Methods of Contraception + STD Protection Comparison',
              headers: ['Method Category', 'Examples', 'How It Works & Key Caution'],
              rows: [
                ['**1. Mechanical Barrier**', '**Condoms** (on penis) or vaginal covering', 'Physically blocks sperm from meeting egg. **ONLY method that ALSO prevents STDs (HIV, Syphilis, Gonorrhoea)!**'],
                ['**2. Hormonal / Chemical**', '**Oral Contraceptive Pills**', 'Alter **hormonal balance** so **eggs are NOT released (no ovulation)**. Can cause side effects.'],
                ['**3. Intrauterine Device (IUCD)**', '**Copper-T / Loop**', 'Placed inside **uterus** by a doctor to **prevent implantation** of fertilized egg; can cause uterine irritation.'],
                ['**4. Surgical (Permanent)**', '**Vasectomy** (Male) & **Tubectomy** (Female)', 'Blocks **Vas deferens** (males) or **Oviduct / Fallopian tube** (females) so gametes cannot meet. Permanent & safe if done properly!'],
              ],
            },
            {
              type: 'callout',
              variant: 'trap',
              title: 'Sexually Transmitted Diseases (STDs) & Sex Ratio Law',
              body: '• **Bacterial STDs (curable with antibiotics):** **Gonorrhoea, Syphilis**.\n• **Viral STDs (incurable / hard to manage):** **HIV-AIDS, Warts**.\n• **Social & Legal Note:** Prenatal **sex determination (ultrasound misuse)** is **strictly banned by law in India** because reckless female foeticide ruins a healthy **female–male sex ratio** in society.',
            },
            {
              type: 'checkpoint',
              prompt: 'In human beings, where does **fertilization** occur, and where does **implantation** of the developing embryo happen?',
              options: [
                { id: 'both-ut', label: 'Both fertilization and implantation occur in the Uterus' },
                { id: 'ovi-ut', label: 'Fertilization in Oviduct (Fallopian tube); Implantation in Uterus' },
                { id: 'ov-cer', label: 'Fertilization in Ovary; Implantation in Cervix' },
              ],
              correctIds: ['ovi-ut'],
              successMsg: 'Correct! Sperm meets egg inside the Oviduct (Fallopian tube), and the dividing zygote implants in the thick spongy lining of the Uterus.',
              hintMsg: 'Remember: egg travels down the Fallopian tube first before reaching the womb!',
            },
          ],
        },
        {
          id: 'bio07-sub2-qa',
          title: '3. CBSE Board Questions — Sexual Reproduction & Health',
          blocks: [
            {
              type: 'qa',
              marks: 3,
              tag: 'NCERT',
              question: 'What is the **placenta**? Describe its structure and list two essential functions during pregnancy.',
              answer:
                'The **placenta** is a special **disc-like tissue** embedded in the uterine wall connecting the developing embryo to the mother.\n• **Structure:** Contains finger-like **villi** on the embryo’s side surrounded by maternal **blood spaces**, creating a massive surface area for exchange.\n• **Functions:**\n1. Transfers **glucose and oxygen** from mother’s blood to the embryo.\n2. Removes **metabolic wastes** generated by the embryo into the mother’s blood for excretion.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question: 'Explain why testes are located outside the abdominal cavity in the **scrotum**, and state the functions of **seminal vesicles & prostate gland**.',
              answer:
                '1. **Scrotum temperature:** Sperm formation requires a temperature **`2–2.5°C` lower** than normal internal body temperature (`37°C`), which the external scrotum provides.\n2. **Seminal vesicles & Prostate gland:** Their secretions mix with sperms to add fluid that makes **transport of sperms easier** and provides **nutrition** to them.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question: 'How do **oral pills**, **Copper-T**, and **Condoms** prevent pregnancy? Which one protects against STDs like HIV-AIDS?',
              answer:
                '• **Oral pills:** Alter the hormonal balance so **eggs are not released** from the ovary.\n• **Copper-T (IUCD):** Placed in the uterus to prevent **implantation** of a fertilized egg.\n• **Condoms (Mechanical barrier):** Prevent sperm from entering the female reproductive tract and meeting the egg.\n• **STD protection:** Only **condoms** (mechanical barrier) protect against Sexually Transmitted Diseases such as Gonorrhoea, Syphilis, Warts, and HIV-AIDS.',
            },
          ],
        },
      ],
    },
  ],
};
