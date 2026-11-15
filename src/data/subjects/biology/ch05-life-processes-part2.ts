import { Topic } from '../../../types/curriculum';

export const topicLifeProcessesPart2: Topic = {
  id: 'bio-topic-life-2',
  slug: 'bio-life-processes-transport-excretion',
  order: 2,
  title: 'Life Processes (Part 2): Transportation & Excretion',
  description:
    'Master Blood, Arteries/Veins/Capillaries, Lymph, 4-Chambered Heart Double Circulation, Vertebrate 2/3/4-chamber comparison, Xylem vs Phloem, Nephron Ultrafiltration, Dialysis & Plant Excretion.',
  ncertChapter: 'Chapter 5: Life Processes (Part 2 — Transportation & Excretion)',
  subtopics: [
    {
      id: 'bio-sub-life-2-1',
      slug: 'bio05-circulation-heart-plants',
      title: 'Blood, Human Heart Double Circulation & Plant Vascular Transport',
      subtitle:
        'Why Left Ventricle is thickest, how valves prevent backflow, why fishes have 2-chambered hearts vs mammals 4-chambered, and Xylem Transpiration Pull vs Phloem ATP Translocation.',
      estimatedMinutes: 20,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT 5.4 (Transportation in Human Beings & Plants)',
      learningObjectives: [
        'Compare Blood components (Plasma, RBCs, WBCs, Platelets) and Lymph (Tissue Fluid).',
        'Differentiate Arteries, Veins, and Capillaries structurally and functionally.',
        'Trace complete Double Circulation through all 4 heart chambers and compare 2-, 3-, and 4-chambered vertebrate hearts.',
        'Contrast physical Xylem water transport with ATP-driven Phloem sucrose translocation.',
      ],
      keywords: [
        'double circulation',
        'left ventricle',
        'platelets',
        'lymph',
        'arteries vs veins',
        'sphygmomanometer',
        'xylem',
        'transpiration pull',
        'phloem',
        'translocation',
      ],
      sections: [
        {
          id: 'blood-vessels-lymph-and-heart',
          title: '1. Blood, Vessels, Lymph & 4-Chambered Double Circulation',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Circulation Essentials in 4 Bullets',
              bullets: [
                '**Blood = Plasma** (fluid carrying food, `CO₂`, salts, urea) + **RBCs** (`Haemoglobin` carries `O₂`) + **WBCs** (fight infection) + **Platelets** (clot blood at leaks to preserve blood pressure!).',
                '**Double Circulation:** `Body → Vena Cava → RA → RV → Pulmonary Artery → Lungs → Pulmonary Vein → LA → LV → Aorta → Body`.',
                '**Left Ventricle (`LV`)** has the **thickest muscular wall** because it pumps blood to the whole body (vs `RV` pumping only to nearby lungs).',
                '**Lymph (Tissue Fluid):** Colourless fluid escaping through capillary pores into intercellular spaces — contains less protein, drains excess fluid back to veins, and **transports digested & absorbed fat from the intestine**!',
              ],
            },
            {
              type: 'table',
              caption: 'Arteries vs. Veins vs. Capillaries (And the Pulmonary Exception!)',
              headers: ['Feature', 'Arteries', 'Veins', 'Capillaries'],
              rows: [
                ['**Direction**', 'Carry blood **AWAY** from Heart to organs', 'Bring blood **BACK** from organs to Heart', 'Connect smallest arterioles to venules inside tissues'],
                ['**Wall Thickness**', '**Thick, elastic muscular walls** (high pressure!)', '**Thin walls** (low pressure)', '**1-cell-thick** wall for rapid diffusion/exchange'],
                ['**Valves**', '**Absent** (high forward pressure prevents backflow)', '**Present** (prevent backward flow under low pressure)', 'Absent'],
                ['**Oxygen Exception!**', '**Pulmonary Artery** carries **deoxygenated** blood to lungs!', '**Pulmonary Vein** carries **oxygenated** blood from lungs to `LA`!', 'O₂ leaves & CO₂ enters across tissue capillaries'],
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'Blood Pressure Facts (Sphygmomanometer)',
              body: 'Normal human blood pressure measured in arteries by a **sphygmomanometer** is **`120 / 80 mmHg`**:\n• **Systolic Pressure (`~120 mmHg`):** Pressure inside arteries during ventricular contraction (systole).\n• **Diastolic Pressure (`~80 mmHg`):** Pressure inside arteries during ventricular relaxation (diastole). High BP (**hypertension**) results from constriction of arterioles.',
            },
            {
              type: 'lab',
              labId: 'bio-life-processes-animator',
              title: 'Interactive Animator: Live Beating Heart & Double Circulation',
              caption: 'Use Tab 1 to watch blue/red corpuscles pump through RA, RV, LA, LV, click chambers, and toggle Self-Test Hide Labels!',
            },
            {
              type: 'checkpoint',
              prompt: 'Why do birds and mammals require a **4-chambered heart** with a complete septum separating oxygenated and deoxygenated blood?',
              options: [
                { id: 'cold', label: 'Because they are cold-blooded and match environmental temperature' },
                { id: 'energy', label: 'Because they are warm-blooded and need high continuous O₂ supply to maintain constant body temperature' },
                { id: 'single', label: 'So blood passes through the heart only once per body cycle' },
              ],
              correctIds: ['energy'],
              successMsg: 'Correct! Warm-blooded (endothermic) birds and mammals burn huge energy to keep body temperature constant, requiring zero mixing of O₂-rich and O₂-poor blood.',
              hintMsg: 'Think about energy demand: warm-blooded animals maintain a steady internal temperature!',
            },
          ],
        },
        {
          id: 'plant-xylem-vs-phloem',
          title: '2. Plant Vascular Transport: Xylem vs. Phloem + Vertebrate Hearts',
          blocks: [
            {
              type: 'visual-diagram',
              diagramId: 'xylem-transpiration-vs-phloem-translocation',
              title: 'Xylem vs. Phloem & 2/3/4-Chambered Vertebrate Heart Evolution',
              caption: 'Compare dead physical transpiration pull against living ATP-powered translocation, plus heart chamber evolution.',
            },
            {
              type: 'table',
              caption: 'Xylem vs. Phloem — Full NCERT Contrast Matrix',
              headers: ['Feature', 'Xylem', 'Phloem'],
              rows: [
                ['**What it transports**', 'Water and dissolved mineral ions (`N, P, Mg, Fe`)', 'Products of photosynthesis (**Sucrose**) + **Amino acids**'],
                ['**Direction of flow**', '**Unidirectional** (strictly upward: Soil → Roots → Stem → Leaves)', '**Bidirectional** (Upward to growing buds & Downward to roots/fruits)'],
                ['**Living or Dead?**', 'Mostly **dead hollow cells** (Vessels & Tracheids)', '**Living cells** (**Sieve tubes** + **Companion cells**)'],
                ['**Energy / Driving Force**', '**Physical forces (0 `ATP`):** **Root pressure** (at night) + **Transpiration Pull** suction (daytime evaporation from stomata)', '**Active `ATP` energy:** Sucrose loaded using `ATP` → water enters by osmosis → high pressure pushes food from source to low-pressure sink!'],
              ],
            },
            {
              type: 'notebook-mistake',
              studentName: 'Meera',
              title: 'Day vs. Night Water Ascent',
              wrongWork: 'Root pressure alone pushes water to the top of 100-metre-tall eucalyptus trees.',
              teacherFix: 'Root pressure only helps at night or in short plants; during the day, TRANSPIRATION PULL is the main driving force lifting water to tall tree tops!',
              whyWrong: 'Root pressure is too weak to lift water 50–100 m high. Evaporative suction created by transpiration at leaf stomata pulls the unbroken water column upward.',
            },
          ],
        },
        {
          id: 'bio05-part2-sub1-qa',
          title: '3. CBSE Board Questions — Circulation & Plant Transport',
          blocks: [
            {
              type: 'qa',
              marks: 3,
              tag: 'NCERT',
              question: 'Explain the importance of **double circulation** in human beings. Why does the left ventricle have thicker muscular walls than the right ventricle?',
              answer:
                '1. **Double circulation** ensures blood passes through the heart **twice** during each complete cycle (Pulmonary circulation to lungs + Systemic circulation to body), keeping **oxygenated and deoxygenated blood completely separated**.\n2. This guarantees highly efficient `O₂` delivery needed by warm-blooded mammals to generate energy and maintain a constant body temperature.\n3. **Thicker Left Ventricle:** The left ventricle must pump blood under high pressure to **every distant organ of the entire body** (head to toe), whereas the right ventricle pumps blood only a short distance to the **nearby lungs**.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question: 'How is food (sucrose) transported in plants? How does this differ from water transport in xylem?',
              answer:
                '• **Translocation in Phloem:** Food (sucrose) and amino acids are transported via living **sieve tubes** aided by **companion cells**.\n• Energy from **`ATP`** actively loads sucrose into phloem tissue, increasing its osmotic pressure. Water enters from nearby xylem by osmosis, and the resulting high pressure pushes sucrose **bidirectionally** (both upward to buds and downward to roots/storage organs) according to plant need.\n• In contrast, **xylem** moves water **unidirectionally upward** through dead vessels via passive physical **transpiration pull** and root pressure without spending `ATP`.',
            },
          ],
        },
      ],
    },
    {
      id: 'bio-sub-life-2-2',
      slug: 'bio05-excretion-nephron-plants',
      title: 'Excretion in Humans (Nephron & Dialysis) & Plants',
      subtitle:
        'Trace urine formation inside 1 million nephrons per kidney, spot the critical Haemodialysis trap (NO reabsorption!), and learn all 5 plant excretion tricks.',
      estimatedMinutes: 16,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT 5.5 (Excretion in Human Beings & Plants)',
      learningObjectives: [
        'List the 4 organs of the Human Excretory System and explain nervous control over the muscular urinary bladder.',
        'Trace Ultrafiltration in Glomerulus/Bowman’s Capsule and Selective Reabsorption along the renal tubule.',
        'Explain Artificial Kidney (Haemodialysis) and why it differs critically from a living nephron.',
        'Describe how plants excrete wastes without specialized kidneys.',
      ],
      keywords: [
        'excretion',
        'nephron',
        'bowmans capsule',
        'glomerulus',
        'ultrafiltration',
        'selective reabsorption',
        'urea',
        'haemodialysis',
        'artificial kidney',
        'resins and gums',
      ],
      sections: [
        {
          id: 'human-excretory-and-nephron',
          title: '1. Human Excretory System & Nephron Urine Formation',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Nephron Numbers You Must Know',
              bullets: [
                '**Excretory Path:** Pair of **Kidneys** (filter nitrogenous waste **Urea** from blood) → Pair of **Ureters** → **Urinary Bladder** (muscular bag under **nervous control**) → **Urethra**.',
                'Each kidney holds **~1 million Nephrons** (structural & functional filtration units).',
                '**`180 L/day` initial filtrate** forms in Bowman’s capsule, yet only **`1–2 L/day` urine** is excreted because **`~99%` is selectively reabsorbed**!',
              ],
            },
            {
              type: 'steps',
              title: 'Three Steps Inside a Nephron',
              items: [
                {
                  label: '1. Glomerular Ultrafiltration',
                  detail: 'Blood enters the **Glomerulus** (capillary tuft) via a **wider afferent arteriole** and exits via a **narrower efferent arteriole**. High pressure filters water, **glucose, amino acids, salts, and urea** into **Bowman’s capsule** — large **RBCs & plasma proteins** stay in blood.',
                },
                {
                  label: '2. Selective Reabsorption (Tubular Region)',
                  detail: 'As filtrate flows through the coiled tubule, surrounding blood capillaries reabsorb **100% of glucose**, **all amino acids**, needed salts, and a **regulated amount of water** (controlled by body hydration level and kidney signals!).',
                },
                {
                  label: '3. Collecting Duct → Ureter → Bladder',
                  detail: 'Remaining **urea, excess water, and unwanted salts** form urine, pass into the collecting duct, flow down ureters, and stay in the muscular **urinary bladder** until voluntary urge to urinate.',
                },
              ],
            },
            {
              type: 'lab',
              labId: 'bio-life-processes-animator',
              title: 'Interactive Animator: Nephron Ultrafiltration & Hydration Slider',
              caption: 'Open Tab 2 and slide between Dehydrated & Well Hydrated to watch glucose reabsorption and urine concentration change live!',
            },
          ],
        },
        {
          id: 'dialysis-and-plant-excretion',
          title: '2. Artificial Kidney (Haemodialysis) & Plant Excretion',
          blocks: [
            {
              type: 'callout',
              variant: 'trap',
              title: 'CRITICAL CBSE TRAP: Artificial Kidney (Haemodialysis) Has NO Reabsorption!',
              body: 'In kidney failure, blood is passed through **semi-permeable cellophane tubes** suspended in a **dialysing fluid** having the **same osmotic pressure as blood** (containing glucose & salts) **EXCEPT NO nitrogenous wastes (urea)**.\n• Waste diffuses from blood → dialysing fluid.\n• **Difference from natural kidney:** An artificial kidney removes urea by diffusion across a membrane, whereas **NO selective reabsorption** occurs!',
            },
            {
              type: 'table',
              caption: '5 Excretion Strategies Used by Plants (Zero Kidneys Needed!)',
              headers: ['Waste Type', 'Plant Excretion Strategy'],
              rows: [
                ['**`O₂` (day) & `CO₂` (night)**', 'Diffuses out directly through **stomata** and stem lenticels.'],
                ['**Excess Water**', 'Eliminated continuously via **Transpiration** through stomata.'],
                ['**Cellular Organic Wastes**', 'Stored inside **cellular vacuoles** or in **dead tissues** (like heartwood/bark).'],
                ['**Foliar Wastes**', 'Stored in **old leaves that turn yellow and fall off**.'],
                ['**Special Solid/Root Wastes**', 'Stored as **resins and gums** (especially in old xylem), or excreted directly into the **surrounding soil** via roots.'],
              ],
            },
            {
              type: 'checkpoint',
              prompt: 'In a healthy adult, kidneys produce `180 L` of initial filtrate per day, yet only `1–2 L` is excreted as urine. What accounts for the remaining `~178 L`?',
              options: [
                { id: 'sweat', label: 'It evaporates directly from the skin as sweat' },
                { id: 'reabsorb', label: 'Selective reabsorption of water, glucose, amino acids & needed salts along the nephron tubule' },
                { id: 'dialysis', label: 'Diffusion into dialysing fluid inside the bladder' },
              ],
              correctIds: ['reabsorb'],
              successMsg: 'Exactly right! Over 99% of initial filtrate (100% glucose + amino acids + needed water) is selectively reabsorbed into peritubular capillaries.',
              hintMsg: 'Think about Step 2 inside the nephron tubule!',
            },
          ],
        },
        {
          id: 'bio05-part2-sub2-qa',
          title: '3. CBSE Board Questions — Excretion',
          blocks: [
            {
              type: 'qa',
              marks: 3,
              tag: 'NCERT',
              question: 'Describe the structure and functioning of a **nephron**. On what two factors does the amount of water reabsorbed in the nephron depend?',
              answer:
                'A **nephron** consists of a cup-shaped **Bowman’s capsule** enclosing a cluster of blood capillaries called the **glomerulus**, followed by a coiled tubular region ending in a **collecting duct**.\n• **Functioning:** (1) **Ultrafiltration** filters urea, glucose, amino acids, salts & water from glomerulus into Bowman’s capsule; (2) **Selective reabsorption** returns all glucose, amino acids, and regulated water back into blood capillaries; (3) Urine containing urea flows into the collecting duct.\n• **Two factors regulating water reabsorption:** (i) How much **excess water** is present in the body, and (ii) How much **dissolved nitrogenous waste (urea)** needs to be excreted.',
              markingTip: 'Always list BOTH NCERT factors for water reabsorption: (1) excess water in body and (2) amount of dissolved waste to be excreted!',
            },
            {
              type: 'qa',
              marks: 2,
              tag: 'CBSE Board Pattern',
              question: 'List four ways in which plants get rid of their waste products.',
              answer:
                '1. Excess water is removed by **transpiration**.\n2. Gaseous wastes (`O₂` from photosynthesis, `CO₂` from respiration) diffuse through **stomata**.\n3. Many waste products are stored in **cellular vacuoles** or in **old leaves that fall off**.\n4. Wastes like **resins and gums** are stored in old xylem, and some wastes are excreted directly into the **soil around roots**.',
            },
          ],
        },
      ],
    },
  ],
};
