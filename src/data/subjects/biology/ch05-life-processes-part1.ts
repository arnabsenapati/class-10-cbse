import { Topic } from '../../../types/curriculum';

export const topicLifeProcessesPart1: Topic = {
  id: 'bio-topic-life-1',
  slug: 'bio-life-processes-nutrition-respiration',
  order: 1,
  title: 'Life Processes (Part 1): Nutrition & Respiration',
  description:
    'Master NCERT Chapter 5 Nutrition (Photosynthesis, Desert plants, Amoeba, Human Alimentary Canal enzymes & Villi) and Respiration (3 Glucose pathways, ATP, Aquatic vs Terrestrial & Alveoli).',
  ncertChapter: 'Chapter 5: Life Processes (Part 1 — Nutrition & Respiration)',
  subtopics: [
    {
      id: 'bio-sub-life-1-1',
      slug: 'bio05-nutrition-and-digestion',
      title: 'Autotrophic, Holozoic & Human Digestive System',
      subtitle:
        'Photosynthesis 3-step mechanism, desert CAM guard cells, Amoeba engulfment, and every enzyme from Mouth Salivary Amylase to Small Intestine Villi.',
      estimatedMinutes: 20,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT 5.1 & 5.2 (What are Life Processes? & Nutrition)',
      learningObjectives: [
        'Explain why invisible molecular movement is the true criterion of life.',
        'State the balanced equation & 3 NCERT events of photosynthesis, plus how desert plants split night CO₂ uptake from daytime sunlight.',
        'Compare Autotrophic, Saprophytic, Parasitic, and Holozoic nutrition (Amoeba vs Paramoecium).',
        'Trace digestion through every organ of the Human Alimentary Canal with exact enzymes, pH media, and Villi function.',
      ],
      keywords: [
        'life processes',
        'photosynthesis',
        'stomata',
        'guard cells',
        'amoeba pseudopodia',
        'salivary amylase',
        'pepsin',
        'bile juice',
        'emulsification',
        'trypsin',
        'lipase',
        'villi',
      ],
      sections: [
        {
          id: 'life-criteria-and-autotrophic',
          title: '1. Criteria of Life & Autotrophic Nutrition (Photosynthesis)',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Life Criteria & Photosynthesis in 4 Lines',
              bullets: [
                'Living structures constantly break down and need **molecular movements** (invisible even when asleep!) to repair and maintain order.',
                'The 4 essential maintenance processes are **Nutrition, Respiration, Transportation, and Excretion**.',
                '**Photosynthesis Equation:** `6CO₂ + 12H₂O —(Chlorophyll, Sunlight)→ C₆H₁₂O₆ + 6O₂ + 6H₂O`.',
                '**Desert plants** take in `CO₂` at **night** to prevent water loss, store it as an intermediate acid, and convert it using sunlight during the **day**!',
              ],
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'Three Exact NCERT Steps of Photosynthesis (Memorize Order)',
              body: 'These three events need NOT occur immediately one after the other — desert plants pause between Steps 2 & 3:',
              bullets: [
                '**1. Absorption** of light energy by **chlorophyll**.',
                '**2. Conversion** of light energy to chemical energy AND **splitting of water (`H₂O`)** into hydrogen and oxygen.',
                '**3. Reduction** of carbon dioxide (`CO₂`) to carbohydrates (`C₆H₁₂O₆`, stored in plants as **starch**; in animals as **glycogen**).',
              ],
            },
            {
              type: 'table',
              caption: 'NCERT Activities 5.1 & 5.2 — Classic CBSE Experimental Traps',
              headers: ['NCERT Activity', 'Key Reagent / Setup', 'Observation & Inference'],
              rows: [
                ['**Variegated Leaf Test (Activity 5.1)**', 'Boil leaf in **alcohol** over a water bath → dip in **Iodine** solution', 'Alcohol removes chlorophyll so starch-iodine blue-black colour is clearly visible ONLY in green patches → **Chlorophyll is essential**!'],
                ['**Bell-Jar `KOH` Test (Activity 5.2)**', 'Watch-glass with **Potassium Hydroxide (`KOH`)** inside Plant A jar; Plant B without `KOH`', '**`KOH` absorbs all `CO₂`**. Leaf A stays brown (no starch) while Leaf B turns blue-black → **`CO₂` is essential**!'],
                ['**Stomata & Guard Cells**', 'Lower leaf epidermis peel under microscope', 'Guard cells swell (**turgid**) when water enters → pore **opens**; shrink (**flaccid**) when water leaves → pore **closes** to cut transpiration.'],
              ],
            },
            {
              type: 'checkpoint',
              prompt: 'In NCERT Activity 5.2 (two potted plants under bell jars), why is a watch-glass containing **`KOH`** placed next to Plant A?',
              options: [
                { id: 'supply', label: 'To supply extra oxygen for respiration' },
                { id: 'absorb', label: 'To absorb all carbon dioxide (CO₂) inside the bell jar' },
                { id: 'stain', label: 'To stain starch blue-black' },
              ],
              correctIds: ['absorb'],
              successMsg: 'Correct! KOH absorbs CO₂ so Plant A cannot make starch, proving CO₂ is essential for photosynthesis.',
              hintMsg: 'Think about what chemical Potassium Hydroxide (KOH) traps inside a closed jar!',
            },
          ],
        },
        {
          id: 'heterotrophic-amoeba-and-human-canal',
          title: '2. Heterotrophic Modes, Amoeba & Human Alimentary Canal',
          blocks: [
            {
              type: 'table',
              caption: 'Four Modes of Nutrition — Organisms & Mechanisms',
              headers: ['Mode', 'How Food is Obtained', 'NCERT Examples'],
              rows: [
                ['**Autotrophic**', 'Synthesize own organic food from simple `CO₂` & `H₂O` using sunlight/chlorophyll', 'Green plants, cyanobacteria, algae'],
                ['**Saprophytic**', 'Break down food **OUTSIDE** the body using secreted enzymes and absorb it', 'Fungi: bread moulds (*Rhizopus*), yeast, mushrooms'],
                ['**Parasitic**', 'Derive nutrition directly from a living host **without killing** it immediately', '*Cuscuta* (*Amar-bel*), ticks, lice, leeches, tapeworms'],
                ['**Holozoic**', 'Take in **whole solid food** and digest it inside the body', '*Amoeba* (temporary **pseudopodia** → food vacuole), *Paramoecium* (cilia sweep food to **fixed spot**), Humans'],
              ],
            },
            {
              type: 'visual-diagram',
              diagramId: 'human-digestive-and-respiratory-atlas',
              title: 'Interactive Atlas: Human Alimentary Canal & Respiratory Tract',
              caption: 'Toggle "Exam Self-Test: Hide Labels" to drill CBSE Identify A, B, C, D questions!',
            },
            {
              type: 'table',
              caption: 'Complete Human Digestive Gland & Enzyme Matrix (High-Yield 5-Marker!)',
              headers: ['Organ / Gland', 'Secretion & pH Medium', 'Enzyme / Substance', 'Substrate → Final Product'],
              rows: [
                ['**Mouth (Salivary Glands)**', 'Saliva (Slightly Alkaline / Neutral)', '**Salivary Amylase**', '**Starch** → **Maltose** (simple sugar)'],
                ['**Oesophagus**', 'No digestive enzymes', 'Muscular **Peristalsis**', 'Rhythmic wave pushes food to stomach'],
                ['**Stomach (Gastric Glands)**', 'Gastric Juice (**Acidic** via `HCl`)', '**HCl**, **Pepsin**, **Mucus**', '`HCl` kills germs & activates Pepsin; **Pepsin** breaks **Proteins** → Peptones; **Mucus** shields stomach wall'],
                ['**Liver (stored in Gall Bladder)**', '**Bile Juice** (**Alkaline**)', '**Bile salts** (**NO enzymes!**)', 'Neutralizes acidic chyme + **Emulsifies large fat globules** into tiny droplets'],
                ['**Pancreas**', 'Pancreatic Juice (**Alkaline**)', '**Trypsin**, **Lipase**, **Amylase**', '**Trypsin**: Proteins → Peptides; **Lipase**: Emulsified fats → Fatty acids + Glycerol'],
                ['**Small Intestine (Longest coil)**', 'Intestinal Juice (Succus entericus)', 'Carbohydrases, Peptidases, Lipase', 'Complete digestion: **Glucose**, **Amino acids**, **Fatty acids + Glycerol**; **Villi** absorb into blood!'],
                ['**Large Intestine**', 'No enzymes', 'Villi-like folds', 'Absorbs **excess water** from undigested waste; egested via Anus (anal sphincter)'],
              ],
            },
            {
              type: 'notebook-mistake',
              studentName: 'Kabir',
              title: 'Bile Juice Function',
              wrongWork: 'Bile juice contains bile enzymes that digest fats directly into fatty acids.',
              teacherFix: 'Bile juice contains NO enzymes — it emulsifies large fat globules & makes chyme alkaline so Pancreatic Lipase can digest them!',
              whyWrong: 'CBSE examiners deduct marks instantly if you call bile an enzyme. Only Lipase chemically digests fats; Bile physically breaks big fat drops into fine droplets (emulsification).',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'Why Herbivores Have a Longer Small Intestine Than Carnivores',
              body: 'Herbivores (cow, deer) eat grass rich in **cellulose**, which is tough and takes far longer to digest. Carnivores (tiger, lion) eat meat which digests easily, so their small intestine is **shorter**!',
            },
            {
              type: 'lab',
              labId: 'bio-life-processes-animator',
              title: 'Interactive Animator: Stomata Guard Cells, Heart, Nephron & Glucose Pathways',
              caption: 'Open Tab 3 → Mode B to watch H₂O move into guard cells so stomata swell open during daytime!',
            },
          ],
        },
        {
          id: 'bio05-part1-sub1-qa',
          title: '3. CBSE Board Questions — Nutrition & Digestion',
          blocks: [
            {
              type: 'qa',
              marks: 3,
              tag: 'NCERT',
              question: 'Explain the role of the following in human digestion: (a) Hydrochloric acid (`HCl`), (b) Mucus, (c) Villi.',
              answer:
                '**(a) Hydrochloric acid (`HCl`):** Creates an acidic medium in the stomach required to activate the enzyme **pepsin** for protein digestion, and kills harmful bacteria entering with food.\n**(b) Mucus:** Protects the inner lining of the stomach from corrosive action of `HCl` and pepsin under normal conditions.\n**(c) Villi:** Finger-like projections on the inner wall of the small intestine that vastly increase the **surface area for absorption** of digested food; they are richly supplied with blood vessels to transport absorbed nutrients to every cell.',
            },
            {
              type: 'qa',
              marks: 2,
              tag: 'CBSE Board Pattern',
              question: 'How do desert plants carry out photosynthesis even though their stomata remain closed during the day?',
              answer:
                'To minimize water loss through transpiration in hot deserts, desert plants open their stomata at **night** to take in carbon dioxide (`CO₂`) and store it as an **intermediate organic acid**. During the **daytime** (with stomata closed), chlorophyll absorbs sunlight and converts that stored intermediate into glucose.',
            },
          ],
        },
      ],
    },
    {
      id: 'bio-sub-life-1-2',
      slug: 'bio05-respiration-and-breathing',
      title: 'Cellular Respiration (3 Pathways) & Human Breathing',
      subtitle:
        'Trace Glucose (6C) → Pyruvate (3C) across Mitochondria, Muscle cramps, and Yeast; understand ATP, Fish gill rates, Trachea rings, Residual volume & Haemoglobin.',
      estimatedMinutes: 18,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT 5.3 (Respiration)',
      learningObjectives: [
        'Draw and distinguish all 3 NCERT pathways of Pyruvate breakdown with exact carbon counts and ATP yields.',
        'Explain why aquatic organisms breathe much faster than terrestrial organisms.',
        'Describe the protective role of C-shaped cartilage rings, alveolar surface area, residual air volume, and Haemoglobin.',
      ],
      keywords: [
        'pyruvate',
        'aerobic respiration',
        'anaerobic respiration',
        'lactic acid',
        'ethanol',
        'atp',
        'trachea cartilage rings',
        'alveoli',
        'residual volume',
        'haemoglobin',
      ],
      sections: [
        {
          id: 'glucose-three-pathways-and-atp',
          title: '1. Breakdown of Glucose by Various Pathways & ATP',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Three Fates of Pyruvate (3C)',
              bullets: [
                '**Common Step (Cytoplasm, no `O₂`):** `Glucose (6-C)` → `2 × Pyruvate (3-C) + Energy`.',
                '**Path 1 — Presence of `O₂` (Mitochondria):** `6CO₂ + 6H₂O + 38 ATP` (complete breakdown).',
                '**Path 2 — Lack of `O₂` (Human Muscle cells):** `Lactic Acid (3-C) + 2 ATP` → sudden build-up causes **muscle cramps**!',
                '**Path 3 — Absence of `O₂` (Yeast fermentation):** `Ethanol (2-C) + CO₂ + 2 ATP`.',
              ],
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'ATP — The Energy Currency & Limewater Proof',
              body: 'Energy released during cellular respiration immediately synthesizes **`ATP`** from **`ADP + Inorganic Phosphate (Pᵢ)`** (`30.5 kJ/mol` released when terminal phosphate bond breaks in water). Meanwhile, exhaling through a straw into **freshly prepared limewater (`Ca(OH)₂`)** turns it **milky (`CaCO₃`)** far faster than pumping room air — proving exhaled air contains far more `CO₂`!',
            },
            {
              type: 'lab',
              labId: 'bio-life-processes-animator',
              title: 'Interactive Animator: Switch Between All 3 Glucose Pathways',
              caption: 'Open Tab 3 → Mode A to watch 6-Carbon Glucose split into 3-Carbon Pyruvate and choose Mitochondria, Muscle, or Yeast!',
            },
            {
              type: 'checkpoint',
              prompt: 'During a 400 m sprint, an athlete suddenly gets severe leg cramps. Which 3-carbon molecule accumulated in their muscle cells?',
              options: [
                { id: 'ethanol', label: 'Ethanol (2-Carbon)' },
                { id: 'lactic', label: 'Lactic acid (3-Carbon)' },
                { id: 'pyruvate', label: 'Carbon dioxide and water' },
              ],
              correctIds: ['lactic'],
              successMsg: 'Spot on! Lack of O₂ in muscle cells converts Pyruvate into 3-carbon Lactic Acid, triggering cramps.',
              hintMsg: 'Ethanol (2C) is only formed in Yeast! What 3-carbon acid builds up in oxygen-starved muscle?',
            },
          ],
        },
        {
          id: 'human-respiration-alveoli-haemoglobin',
          title: '2. Aquatic vs. Terrestrial Breathing, Alveoli & Haemoglobin',
          blocks: [
            {
              type: 'table',
              caption: 'CBSE High-Frequency Reasoning Points — Respiratory Adaptations',
              headers: ['Feature / Question', 'Exact NCERT Biological Reason'],
              rows: [
                ['**Why do fishes breathe much faster than humans?**', 'The amount of **dissolved `O₂` in water is very low** compared to the `~21% O₂` in air; hence fishes pump water across **gills** rapidly.'],
                ['**Why does the Trachea NOT collapse between breaths?**', 'Supported by **C-shaped rings of cartilage** that keep the windpipe open even when air pressure drops.'],
                ['**How are Alveoli adapted for gas exchange?**', 'Millions of balloon-like sacs create **`~80 m²`** surface area; **1-cell-thick** moist walls wrapped tightly in **blood capillaries**.'],
                ['**What is Residual Volume of air & why is it vital?**', 'Even after forceful exhalation, lungs ALWAYS retain a **residual volume of air** so there is **sufficient time for `O₂` to be absorbed and `CO₂` to be released**!'],
                ['**Why is Haemoglobin needed in large animals?**', 'Simple diffusion alone would take **~3 years** for `O₂` to travel from lungs to toes! **Haemoglobin** (in RBCs) has high affinity for `O₂` and delivers it rapidly, whereas `CO₂` is **more soluble in water** so it mostly travels dissolved in plasma.'],
              ],
            },
            {
              type: 'steps',
              title: 'Mechanism of Breathing: Inhalation vs. Exhalation',
              items: [
                {
                  label: 'Inhalation (Breathing In)',
                  detail: '**Ribs lift upward & outward** while the **Diaphragm flattens (moves down)** → chest cavity volume **increases** → air pressure inside lungs drops → fresh air rushes in.',
                },
                {
                  label: 'Exhalation (Breathing Out)',
                  detail: 'Ribs move **downward & inward** and **Diaphragm relaxes into a dome** → chest cavity volume **decreases** → air containing `CO₂` is pushed out (leaving behind the **residual volume**).',
                },
              ],
            },
          ],
        },
        {
          id: 'bio05-part1-sub2-qa',
          title: '3. CBSE Board Questions — Respiration',
          blocks: [
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question: 'Why is the rate of breathing in aquatic organisms much faster than in terrestrial organisms? Name the respiratory pigment in humans and state how `CO₂` is mainly transported.',
              answer:
                '1. **Faster breathing in aquatic animals:** Dissolved oxygen (`O₂`) concentration in water is very low compared to free `O₂` in air. Therefore, aquatic organisms like fishes must breathe rapidly to draw enough `O₂` across their gills.\n2. **Human respiratory pigment:** **Haemoglobin** (inside RBCs), which binds `O₂` strongly.\n3. **`CO₂` transport:** Because carbon dioxide is more soluble in water than `O₂`, it is transported predominantly in the **dissolved form in blood plasma**.',
            },
            {
              type: 'qa',
              marks: 2,
              tag: 'Assertion-Reason',
              question: '**Assertion (A):** Rings of cartilage are present in the human trachea.\n**Reason (R):** They ensure that the air-passage does not collapse when there is less air in it.',
              answer:
                '**(a) Both A and R are true, and R is the correct explanation of A.** C-shaped incomplete cartilaginous rings maintain an open airway throughout inhalation and exhalation.',
            },
          ],
        },
      ],
    },
  ],
};
