import { Topic } from '../../../types/curriculum';

export const topicControlAndCoordination: Topic = {
  id: 'bio-topic-ctrl',
  slug: 'bio-control-and-coordination',
  order: 3,
  title: 'Control & Coordination (Nervous, Tropic & Endocrine)',
  description:
    'Master Neuron & Synapse transmission, Spinal Reflex Arcs, Human Brain lobes (Forebrain/Midbrain/Hindbrain), Plant Tropisms & Phytohormones, and all 6 Animal Endocrine Glands + Feedback Mechanism.',
  ncertChapter: 'Chapter 6: Control and Coordination',
  subtopics: [
    {
      id: 'bio-sub-ctrl-1',
      slug: 'bio06-neuron-reflex-brain',
      title: 'Neurons, Synapse, Reflex Arc & Human Brain',
      subtitle:
        'How electrical impulses cross chemical synapses in one direction, why reflex arcs bypass thinking in the spinal cord, and Cerebrum vs Cerebellum vs Medulla.',
      estimatedMinutes: 18,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT 6.1 (Animals — Nervous System)',
      learningObjectives: [
        'Identify sensory receptors (Gustatory, Olfactory, Photoreceptors, Phonoreceptors, Thermoreceptors).',
        'Trace signal transmission across a Neuron and explain electrical → chemical → electrical conversion at a Synapse.',
        'Trace the Spinal Cord Reflex Arc and distinguish Reflex, Voluntary, and Involuntary actions.',
        'Map all regions of Forebrain, Midbrain, and Hindbrain plus Cranium/CSF & Vertebral protection.',
      ],
      keywords: [
        'neuron',
        'dendrite',
        'axon',
        'synapse',
        'neurotransmitter',
        'reflex arc',
        'spinal cord',
        'cerebrum',
        'cerebellum',
        'medulla',
        'hypothalamus',
        'gustatory olfactory receptors',
      ],
      sections: [
        {
          id: 'neuron-synapse-and-reflex-arc',
          title: '1. Receptors, Neuron Structure, Synapse & Reflex Arc',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Nervous System in 4 Lines',
              bullets: [
                '**Receptors:** `Gustatory` = Taste (tongue); `Olfactory` = Smell (nose); `Photoreceptors` = Light (eye); `Phonoreceptors` = Sound (ear); `Thermoreceptors` = Heat/Cold (skin).',
                '**Neuron Flow:** `Dendrite` (chemical signal → electrical impulse) → `Cell Body (Cyton)` → `Axon` → `Nerve Ending`.',
                '**Synapse:** Microscopic gap between two neurons where **electrical impulse triggers release of chemical neurotransmitters**, crossing the gap to start a **new electrical impulse** on the next dendrite (strictly **one-way**!).',
                '**Reflex Arc:** `Stimulus → Receptor → Sensory Neuron → Relay Neuron (Spinal Cord) → Motor Neuron → Effector (Muscle)`. Message reaches Brain AFTER withdrawal!',
              ],
            },
            {
              type: 'visual-diagram',
              diagramId: 'neuron-and-reflex-arc-diagram',
              title: 'Interactive Diagram: Neuron Structure & Spinal Cord Reflex Arc',
              caption: 'Click "Exam Self-Test: Hide Labels" to practice CBSE Identify A–J diagram questions!',
            },
            {
              type: 'table',
              caption: 'Voluntary vs. Involuntary vs. Reflex Actions — Never Confuse!',
              headers: ['Type of Action', 'Control Centre', 'Speed & Consciousness', 'NCERT Examples'],
              rows: [
                ['**Voluntary Action**', '**Forebrain (Cerebrum)** + Cerebellum precision', 'Conscious, willful decision', 'Writing with a pen, clapping at the end of a song, talking'],
                ['**Involuntary Action**', '**Hindbrain (Medulla / Pons)** & Midbrain', 'Automatic, continuous, NO conscious will', 'Heartbeat, blood pressure, salivation, vomiting, pupil size'],
                ['**Reflex Action**', '**Spinal Cord** (also sends alert up to Brain)', 'Ultra-fast sudden protective reaction', 'Pulling hand away from hot flame, knee jerk, coughing'],
              ],
            },
            {
              type: 'lab',
              labId: 'bio-neuro-endocrine-lab',
              title: 'Interactive Lab: Fire Hot-Pan Reflex Arc & Watch Synapse Neurotransmitters',
              caption: 'Use Tab 1 to trigger a live reflex withdrawal AND zoom inside the microscopic synapse cleft!',
            },
          ],
        },
        {
          id: 'human-brain-and-protection',
          title: '2. Human Brain Regions & Bony/Fluid Protection',
          blocks: [
            {
              type: 'table',
              caption: 'All Brain Regions & Their Exact CBSE Board Functions',
              headers: ['Major Division', 'Sub-Part', 'Exact NCERT Function & Exam Cue'],
              rows: [
                ['**Forebrain**', '**Cerebrum**', 'Main **thinking** part: receives sensory info (sight, hearing, smell), stores **memory**, reasoning, initiates **voluntary movements**.'],
                ['**Forebrain**', '**Hypothalamus**', 'Satiety centre (**hunger & feeling of fullness**), thirst, body temperature, pituitary link.'],
                ['**Midbrain**', '**Midbrain**', 'Coordinates **visual & auditory reflexes** (e.g., pupil size in light, head turn to sound).'],
                ['**Hindbrain**', '**Cerebellum**', '**Precision of voluntary actions**, maintaining **posture & balance** (walking in a straight line, **riding a bicycle**, picking up a pencil).'],
                ['**Hindbrain**', '**Pons**', 'Relays signals and helps regulate **respiration rhythm**.'],
                ['**Hindbrain**', '**Medulla Oblongata**', 'Controls life-sustaining **involuntary actions**: **blood pressure, salivation, vomiting**, heartbeat.'],
              ],
            },
            {
              type: 'notebook-mistake',
              studentName: 'Vikram',
              title: 'Cerebellum vs. Medulla',
              wrongWork: 'A drunk person cannot walk in a straight line because the Medulla is affected.',
              teacherFix: 'Walking straight / riding a bicycle / posture & balance are controlled by the CEREBELLUM (not Medulla)!',
              whyWrong: 'Medulla controls involuntary acts (BP, salivation, vomiting). Precision, posture & balance belong to the Cerebellum!',
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'How Are Delicate Brain & Spinal Cord Protected?',
              body: '• **Brain:** Enclosed inside a hard bony box (**Cranium / Skull**) and surrounded by **three protective membranes (meninges)** filled with **Cerebrospinal Fluid (CSF)** acting as a **fluid balloon shock absorber**.\n• **Spinal Cord:** Protected inside the hollow bony **Vertebral Column (Backbone)**.',
            },
            {
              type: 'checkpoint',
              prompt: 'What happens at the **synapse** between the axon terminal of Neuron 1 and the dendrite of Neuron 2?',
              options: [
                { id: 'elec', label: 'Direct electrical spark jumps across empty air' },
                { id: 'chem', label: 'Electrical signal triggers release of chemicals (neurotransmitters) that cross the gap and start an electrical impulse in Neuron 2' },
                { id: 'reverse', label: 'Dendrite sends chemicals backward to the axon of Neuron 1' },
              ],
              correctIds: ['chem'],
              successMsg: 'Correct! Electrical → Chemical (Neurotransmitter) → Electrical ensures strictly one-way signal flow.',
              hintMsg: 'Think about why impulses never travel backward across a synapse!',
            },
          ],
        },
        {
          id: 'bio06-sub1-qa',
          title: '3. CBSE Board Questions — Nervous System & Brain',
          blocks: [
            {
              type: 'qa',
              marks: 3,
              tag: 'NCERT',
              question: 'Why does the flow of signals in a synapse occur ONLY from the axonal end of one neuron to the dendritic end of another neuron, and NOT in reverse?',
              answer:
                'When an electrical impulse reaches the **axonal end (nerve ending)**, it stimulates the release of specific **chemical neurotransmitters** into the synaptic gap. These chemicals diffuse across and bind to receptors present **exclusively on the dendritic end** of the next neuron to generate a new electrical impulse.\nBecause the dendritic end has **no vesicles to release neurotransmitters** and the axonal end lacks post-synaptic chemical receptors, impulses can travel **only in one direction**.',
            },
            {
              type: 'qa',
              marks: 2,
              tag: 'CBSE Board Pattern',
              question: 'Name the part of human brain which controls: (a) Blood pressure & vomiting, (b) Riding a bicycle, (c) Feeling of fullness after eating, (d) Thinking & memory.',
              answer:
                '**(a) BP & vomiting:** Medulla (Hindbrain)\n**(b) Riding a bicycle:** Cerebellum (Hindbrain)\n**(c) Feeling of fullness (satiety):** Forebrain (Hypothalamus)\n**(d) Thinking & memory:** Forebrain (Cerebrum)',
            },
          ],
        },
      ],
    },
    {
      id: 'bio-sub-ctrl-2',
      slug: 'bio06-plant-tropisms-endocrine',
      title: 'Plant Movements (Turgor & Tropisms) & Animal Endocrine Glands',
      subtitle:
        'Touch-me-not rapid turgor folding vs Auxin phototropism, all 4 Phytohormones (Auxin to Abscisic Acid), and all 6 Animal Endocrine Glands + Glucose-Insulin Feedback!',
      estimatedMinutes: 18,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT 6.2 & 6.3 (Coordination in Plants & Hormones in Animals)',
      learningObjectives: [
        'Contrast growth-independent rapid Nastic movement (Mimosa pudica) with growth-dependent Directional Tropisms.',
        'Explain the exact Auxin redistribution mechanism behind positive Phototropism.',
        'Memorize all 4 plant hormones and their opposing roles (growth promoters vs inhibitor Abscisic acid).',
        'Explain why animals need chemical hormones alongside nerves, and master all 6 endocrine glands + negative feedback mechanism.',
      ],
      keywords: [
        'mimosa pudica',
        'nastic movement',
        'phototropism',
        'geotropism',
        'hydrotropism',
        'chemotropism',
        'auxin',
        'gibberellin',
        'cytokinin',
        'abscisic acid',
        'adrenaline',
        'thyroxine goitre',
        'insulin feedback',
      ],
      sections: [
        {
          id: 'plant-nastic-tropic-and-phytohormones',
          title: '1. Rapid Plant Movement (Mimosa) vs. Tropisms & 4 Phytohormones',
          blocks: [
            {
              type: 'table',
              caption: 'Nastic Movement (Touch-Me-Not) vs. Tropic Movements (Directional Growth)',
              headers: ['Feature', 'Nastic Movement (*Mimosa pudica*)', 'Tropic Movements (Tropisms)'],
              rows: [
                ['**Relation to Growth**', '**Independent of growth** (leaves simply fold & reopen)', '**Dependent on growth** (permanent directional cell elongation)'],
                ['**Directionality**', '**Non-directional** (always folds same way regardless of touch side)', '**Directional** (toward `+` or away from `−` stimulus)'],
                ['**Mechanism**', 'Electrical-chemical signal triggers **rapid change in water content (turgor)** inside pulvinus cells → cells shrink & droop!', 'Hormone **Auxin** redistributes asymmetrically → one side grows faster than the other!'],
                ['**Speed**', 'Very **fast / immediate**', '**Slow** (hours or days)'],
              ],
            },
            {
              type: 'steps',
              title: '5 NCERT Tropisms & How Auxin Bends a Shoot Toward Light',
              items: [
                {
                  label: '1. Phototropism (Light)',
                  detail: '**Shoot = Positive (`+`)**, **Root = Negative (`−`)**. When sunlight hits from one side, **Auxin** synthesized at the shoot tip diffuses toward the **shaded side**. Higher auxin stimulates shaded cells to **elongate faster**, bending the stem toward light!',
                },
                {
                  label: '2. Geotropism / Gravitropism (Gravity)',
                  detail: '**Root = Positive (`+`)** (grows downward), **Shoot = Negative (`−`)** (grows upward).',
                },
                {
                  label: '3. Hydrotropism (Water)',
                  detail: 'Roots bend toward moisture/water (`+ Hydrotropism`) — can even overpower gravity if water lies sideways!',
                },
                {
                  label: '4. Chemotropism (Chemicals)',
                  detail: 'Growth of **pollen tube down the style toward the ovule** guided by sugary chemical cues.',
                },
                {
                  label: '5. Thigmotropism (Touch support)',
                  detail: 'Pea plant **tendrils** coil around a bamboo support because cells **away from the support** contain more auxin and grow longer!',
                },
              ],
            },
            {
              type: 'table',
              caption: 'The 4 Plant Hormones (Phytohormones) — Promoter Trio vs. 1 Inhibitor',
              headers: ['Phytohormone', 'Growth Type', 'Primary NCERT Function'],
              rows: [
                ['**Auxin**', 'Promoter', 'Synthesized at shoot tip; promotes **cell elongation**, phototropism & tendril coiling'],
                ['**Gibberellins**', 'Promoter', 'Helps in **stem elongation** (bolting) and seed germination'],
                ['**Cytokinins**', 'Promoter', 'Promotes **rapid cell division** — highest in areas of fast division like **fruits and seeds**'],
                ['**Abscisic Acid (`ABA`)**', '**Inhibitor!**', '**Inhibits growth**; causes **wilting of leaves** and stomatal closure during drought'],
              ],
            },
            {
              type: 'lab',
              labId: 'bio-neuro-endocrine-lab',
              title: 'Interactive Lab: Move the Sun & Watch Auxin Bend the Shoot!',
              caption: 'Switch to Tab 3 to observe red Auxin particles migrating to the shaded side and curving the stem toward sunlight.',
            },
          ],
        },
        {
          id: 'animal-endocrine-glands-and-feedback',
          title: '2. Animal Endocrine Glands, Adrenaline & Feedback Mechanism',
          blocks: [
            {
              type: 'callout',
              variant: 'ncert',
              title: 'Why Do Animals Need Hormones Alongside Electrical Impulses?',
              body: '1. **Electrical impulses reach ONLY cells connected by nervous tissue**, NOT every single cell in the body.\n2. Once an electrical impulse fires, a cell needs time to reset before generating a new impulse (**cannot transmit continuously**).\n3. **Chemical Hormones** travel via **bloodstream** to reach **every target cell** steadily and persistently!',
            },
            {
              type: 'table',
              caption: 'All 6 NCERT Human Endocrine Glands — Hormone, Function & Disorder',
              headers: ['Endocrine Gland', 'Hormone Secreted', 'Primary Target & Action', 'Deficiency / Excess Condition'],
              rows: [
                ['**Pituitary** (brain base)', '**Growth Hormone**', 'Regulates overall growth & development of bones/muscles', 'Childhood deficiency → **Dwarfism**; excess → **Gigantism**'],
                ['**Thyroid** (neck)', '**Thyroxine**', 'Regulates **carbohydrate, protein & fat metabolism** for balanced growth (**needs Iodine!**)', 'Iodine deficiency → **Goitre** (swollen neck) — **use iodized salt!**'],
                ['**Adrenal** (atop kidneys)', '**Adrenaline**', 'Emergency **"Fight or Flight"**: heartbeat ↑, breathing ↑, **blood diverted from digestive tract/skin → skeletal muscles**!', 'Prepares body rapidly for action/running'],
                ['**Pancreas**', '**Insulin**', 'Reduces high blood glucose by helping cells absorb glucose (**Feedback Mechanism**)', 'Insufficient insulin → **Diabetes** (treated with insulin injections)'],
                ['**Testis** (males)', '**Testosterone**', 'Male puberty changes (facial hair, deep voice) + sperm maturation', '—'],
                ['**Ovary** (females)', '**Oestrogen** (+ Progesterone)', 'Female puberty changes + menstrual cycle & egg maturation', '—'],
              ],
            },
            {
              type: 'steps',
              title: 'NCERT Feedback Mechanism (How Blood Sugar Self-Regulates)',
              items: [
                {
                  label: '1. Sugar Rises After a Meal',
                  detail: 'Cells of the **Pancreas** detect elevated blood glucose and secrete **more Insulin** into blood.',
                },
                {
                  label: '2. Glucose Drops Back to Normal',
                  detail: 'Insulin signals liver & muscle cells to absorb glucose → blood sugar drops back to normal (`~90 mg/dL`).',
                },
                {
                  label: '3. Secretion Switches Down (Negative Feedback)',
                  detail: 'As blood glucose falls, pancreas cells detect the drop and **reduce Insulin secretion** so sugar never falls dangerously low!',
                },
              ],
            },
            {
              type: 'lab',
              labId: 'bio-neuro-endocrine-lab',
              title: 'Interactive Lab: 3D Brain Explorer & Blood Glucose–Insulin Feedback Simulator',
              caption: 'Open Tab 2 → Sub-mode 2 to explore every endocrine gland and simulate a post-meal glucose spike!',
            },
            {
              type: 'checkpoint',
              prompt: 'Why is the use of **iodized salt** strongly recommended by doctors across India?',
              options: [
                { id: 'insulin', label: 'Iodine is needed by the Pancreas to make Insulin' },
                { id: 'thyroxine', label: 'Iodine is essential for the Thyroid gland to synthesize Thyroxine hormone and prevent Goitre' },
                { id: 'adrenaline', label: 'Iodine boosts Adrenaline during exercise' },
              ],
              correctIds: ['thyroxine'],
              successMsg: 'Correct! Without dietary iodine, the Thyroid cannot make Thyroxine, causing the neck to swell (Goitre).',
              hintMsg: 'Which neck gland depends on iodine to regulate carbs, protein & fat metabolism?',
            },
          ],
        },
        {
          id: 'bio06-sub2-qa',
          title: '3. CBSE Board Questions — Tropisms & Hormones',
          blocks: [
            {
              type: 'qa',
              marks: 3,
              tag: 'NCERT',
              question: 'How does **phototropism** occur in a plant shoot? Name the hormone responsible.',
              answer:
                'The plant hormone **Auxin** causes phototropism.\n1. When growing plants detect light coming from one side, auxin (synthesized at the shoot tip) diffuses toward the **shaded side** of the shoot.\n2. Higher concentration of auxin stimulates cells on the shaded side to **grow longer (elongate faster)** than cells on the illuminated side.\n3. As a result, the stem visibly **bends toward the source of light** (+ phototropism).',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question: 'How does our body respond when **adrenaline** is secreted into the blood during a scary emergency?',
              answer:
                'Adrenaline reaches the heart and multiple target organs via blood:\n1. **Heart beats faster**, supplying more oxygen to muscles.\n2. **Blood supply to digestive system and skin is reduced** by contraction of muscles around their small arteries, **diverting blood to skeletal muscles**.\n3. **Breathing rate increases** due to faster contractions of diaphragm and rib muscles — preparing the body to fight or run away.',
              markingTip: 'Include BOTH (1) faster heartbeat/breathing AND (2) diversion of blood away from gut/skin to skeletal muscles!',
            },
          ],
        },
      ],
    },
  ],
};
