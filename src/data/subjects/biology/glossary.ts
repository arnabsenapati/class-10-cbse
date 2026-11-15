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
  // Biology — Life Processes (Ch 5) — 12 Terms
  {
    id: 'term-photosynthesis',
    term: 'Photosynthesis',
    symbol: '6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O',
    category: 'Biology — Life Processes (Ch 5)',
    simpleMeaning: 'Process by which green plants make glucose food from CO₂ and water using sunlight and chlorophyll.',
    ncertDefinition:
      'Autotrophic process involving absorption of light by chlorophyll, splitting of water into hydrogen and oxygen, and reduction of carbon dioxide to carbohydrates.',
    example: 'Desert plants absorb CO₂ at night into an intermediate acid and convert it to starch in daytime.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-life-processes-nutrition-respiration',
      subtopicSlug: 'bio05-nutrition-and-digestion',
      sectionId: 'life-criteria-and-autotrophic',
    },
  },
  {
    id: 'term-stomata-guard-cells',
    term: 'Stomata & Guard Cells',
    category: 'Biology — Life Processes (Ch 5)',
    simpleMeaning: 'Microscopic leaf pores flanked by two bean-shaped guard cells that open and close for gas exchange & transpiration.',
    ncertDefinition:
      'Tiny epidermal pores whose opening and closing are controlled by turgor changes: water entry makes guard cells swell (pore opens), water exit makes them flaccid (pore closes).',
    example: 'Closed stomata during desert afternoons save water from evaporating.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-life-processes-nutrition-respiration',
      subtopicSlug: 'bio05-nutrition-and-digestion',
      sectionId: 'life-criteria-and-autotrophic',
    },
  },
  {
    id: 'term-peristalsis',
    term: 'Peristalsis',
    category: 'Biology — Life Processes (Ch 5)',
    simpleMeaning: 'Rhythmic wave-like contraction of digestive tube muscles pushing food forward.',
    ncertDefinition:
      'Rhythmic contraction and relaxation of muscles lining the alimentary canal wall that propels food forward in a regulated manner.',
    example: 'Food moves down the oesophagus to the stomach even if you lie upside down.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-life-processes-nutrition-respiration',
      subtopicSlug: 'bio05-nutrition-and-digestion',
      sectionId: 'heterotrophic-amoeba-and-human-canal',
    },
  },
  {
    id: 'term-emulsification-bile',
    term: 'Emulsification of Fats (Bile)',
    category: 'Biology — Life Processes (Ch 5)',
    simpleMeaning: 'Breaking large fat globules into tiny droplets by bile salts (NO enzyme!).',
    ncertDefinition:
      'Physical breakdown of large fat globules into small micelles by bile salts secreted from the liver, increasing surface area for pancreatic lipase action.',
    example: 'Just like soap breaking grease droplets, bile emulsifies fats in the small intestine.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-life-processes-nutrition-respiration',
      subtopicSlug: 'bio05-nutrition-and-digestion',
      sectionId: 'heterotrophic-amoeba-and-human-canal',
    },
  },
  {
    id: 'term-villi',
    term: 'Villi',
    category: 'Biology — Life Processes (Ch 5)',
    simpleMeaning: 'Finger-like folds inside the small intestine that maximize absorption of digested food.',
    ncertDefinition:
      'Numerous finger-like projections on the inner lining of the small intestine, richly supplied with blood vessels to increase surface area for absorption.',
    example: 'Absorbed glucose and amino acids pass rapidly from villi into the bloodstream.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-life-processes-nutrition-respiration',
      subtopicSlug: 'bio05-nutrition-and-digestion',
      sectionId: 'heterotrophic-amoeba-and-human-canal',
    },
  },
  {
    id: 'term-atp-pyruvate',
    term: 'ATP & Pyruvate (3-Carbon)',
    symbol: 'ADP + Pᵢ → ATP (30.5 kJ/mol)',
    category: 'Biology — Life Processes (Ch 5)',
    simpleMeaning: 'Pyruvate is the 3-carbon sugar fragment from glucose; ATP is the cell’s rechargeable energy battery.',
    ncertDefinition:
      'In cytoplasm, 6-carbon glucose splits into two 3-carbon pyruvate molecules; energy released in cellular respiration synthesizes ATP from ADP and inorganic phosphate.',
    example: 'Aerobic respiration in mitochondria yields 38 ATP, whereas anaerobic pathways yield only 2 ATP.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-life-processes-nutrition-respiration',
      subtopicSlug: 'bio05-respiration-and-breathing',
      sectionId: 'glucose-three-pathways-and-atp',
    },
  },
  {
    id: 'term-alveoli-residual-volume',
    term: 'Alveoli & Residual Volume',
    symbol: '~80 m² surface',
    category: 'Biology — Life Processes (Ch 5)',
    simpleMeaning: 'Balloon-like lung air sacs for gas exchange, plus the air left inside lungs after exhaling.',
    ncertDefinition:
      'Alveoli provide an extensive capillary-rich surface for O₂/CO₂ diffusion, while residual volume ensures sufficient time for oxygen absorption and carbon dioxide release.',
    example: 'Tracheal C-shaped cartilage rings prevent the windpipe from collapsing while breathing.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-life-processes-nutrition-respiration',
      subtopicSlug: 'bio05-respiration-and-breathing',
      sectionId: 'human-respiration-alveoli-haemoglobin',
    },
  },
  {
    id: 'term-double-circulation',
    term: 'Double Circulation',
    category: 'Biology — Life Processes (Ch 5)',
    simpleMeaning: 'Blood passes through the human heart TWICE in every complete round around the body.',
    ncertDefinition:
      'Circulatory pathway in birds and mammals comprising Pulmonary circulation (Heart → Lungs → Heart) and Systemic circulation (Heart → Body → Heart), keeping oxygenated and deoxygenated blood completely separate.',
    example: 'Left Ventricle pumps oxygenated blood out through the Aorta with the thickest muscular wall.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-life-processes-transport-excretion',
      subtopicSlug: 'bio05-circulation-heart-plants',
      sectionId: 'blood-vessels-lymph-and-heart',
    },
  },
  {
    id: 'term-lymph',
    term: 'Lymph (Tissue Fluid)',
    category: 'Biology — Life Processes (Ch 5)',
    simpleMeaning: 'Colourless fluid escaping blood capillaries into tissues that drains excess fluid and carries digested fats.',
    ncertDefinition:
      'Colourless extracellular fluid similar to plasma with less protein, formed when fluid leaks through capillary pores; carries digested fat from the intestine and drains excess fluid back to blood.',
    example: 'Lacteals inside intestinal villi absorb fatty acids into lymph.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-life-processes-transport-excretion',
      subtopicSlug: 'bio05-circulation-heart-plants',
      sectionId: 'blood-vessels-lymph-and-heart',
    },
  },
  {
    id: 'term-transpiration-translocation',
    term: 'Transpiration Pull vs. Translocation',
    symbol: 'Xylem ↑ (0 ATP) | Phloem ↑↓ (ATP)',
    category: 'Biology — Life Processes (Ch 5)',
    simpleMeaning: 'Xylem pulls water upward by evaporation; Phloem pushes food both ways using ATP energy.',
    ncertDefinition:
      'Transpiration is water vapour loss from aerial plant parts creating suction pull in xylem; Translocation is ATP-driven bidirectional transport of sucrose and amino acids through phloem.',
    example: 'Spring buds receive sugars pumped upward from root storage organs via phloem.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-life-processes-transport-excretion',
      subtopicSlug: 'bio05-circulation-heart-plants',
      sectionId: 'plant-xylem-vs-phloem',
    },
  },
  {
    id: 'term-nephron',
    term: 'Nephron (Ultrafiltration & Reabsorption)',
    symbol: '180 L filtrate → 1–2 L urine',
    category: 'Biology — Life Processes (Ch 5)',
    simpleMeaning: 'Microscopic kidney filtration unit that filters urea and saves back 100% glucose and needed water.',
    ncertDefinition:
      'Basic filtration unit of the kidney consisting of Bowman’s capsule enclosing the glomerulus, coiled renal tubule for selective reabsorption, and collecting duct.',
    example: 'About 180 L/day of initial filtrate reduces to ~1.5 L/day urine after selective reabsorption.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-life-processes-transport-excretion',
      subtopicSlug: 'bio05-excretion-nephron-plants',
      sectionId: 'human-excretory-and-nephron',
    },
  },
  {
    id: 'term-haemodialysis',
    term: 'Haemodialysis (Artificial Kidney)',
    category: 'Biology — Life Processes (Ch 5)',
    simpleMeaning: 'Medical machine filtering nitrogenous wastes from blood through cellophane tubes — has NO reabsorption.',
    ncertDefinition:
      'Procedure removing urea from blood across semi-permeable tubes bathed in dialysing fluid of blood-matching osmotic pressure lacking nitrogenous wastes; unlike nephrons, no reabsorption occurs.',
    example: 'Used when both kidneys fail due to infection or injury.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-life-processes-transport-excretion',
      subtopicSlug: 'bio05-excretion-nephron-plants',
      sectionId: 'dialysis-and-plant-excretion',
    },
  },
  // Biology — Control & Coordination (Ch 6) — 9 Terms
  {
    id: 'term-synapse',
    term: 'Synapse',
    symbol: 'Electrical → Chemical → Electrical',
    category: 'Biology — Control & Coordination (Ch 6)',
    simpleMeaning: 'Microscopic gap between two neurons where chemical neurotransmitters carry the message one way.',
    ncertDefinition:
      'Functional junction between the axonal nerve ending of one neuron and the dendrite of the next, converting an electrical impulse into a chemical signal that triggers a new impulse.',
    example: 'Neurotransmitters ensure nerve impulses flow strictly from axon to next dendrite.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-control-and-coordination',
      subtopicSlug: 'bio06-neuron-reflex-brain',
      sectionId: 'neuron-synapse-and-reflex-arc',
    },
  },
  {
    id: 'term-reflex-arc',
    term: 'Reflex Arc',
    category: 'Biology — Control & Coordination (Ch 6)',
    simpleMeaning: 'High-speed spinal cord wiring loop pulling your hand away before your brain finishes thinking.',
    ncertDefinition:
      'Neural pathway mediating a sudden involuntary reflex action: Receptor → Sensory neuron → Spinal Relay neuron → Motor neuron → Effector muscle, plus an alert sent to the brain.',
    example: 'Withdrawing a finger instantly from a hot pan.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-control-and-coordination',
      subtopicSlug: 'bio06-neuron-reflex-brain',
      sectionId: 'neuron-synapse-and-reflex-arc',
    },
  },
  {
    id: 'term-cerebrum',
    term: 'Cerebrum (Forebrain)',
    category: 'Biology — Control & Coordination (Ch 6)',
    simpleMeaning: 'Main thinking, memory, sensory interpretation, and voluntary decision part of the brain.',
    ncertDefinition:
      'Largest region of the forebrain responsible for intelligence, memory, reasoning, receiving sensory inputs, and initiating voluntary actions.',
    example: 'Solving a math problem or recognizing a friend’s voice.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-control-and-coordination',
      subtopicSlug: 'bio06-neuron-reflex-brain',
      sectionId: 'human-brain-and-protection',
    },
  },
  {
    id: 'term-cerebellum',
    term: 'Cerebellum (Hindbrain)',
    category: 'Biology — Control & Coordination (Ch 6)',
    simpleMeaning: 'Brain region controlling precision of voluntary acts, posture, and balance.',
    ncertDefinition:
      'Part of the hindbrain responsible for precision of voluntary actions and maintaining posture and equilibrium of the body.',
    example: 'Riding a bicycle, walking along a straight line, or picking up a pencil smoothly.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-control-and-coordination',
      subtopicSlug: 'bio06-neuron-reflex-brain',
      sectionId: 'human-brain-and-protection',
    },
  },
  {
    id: 'term-medulla',
    term: 'Medulla Oblongata',
    category: 'Biology — Control & Coordination (Ch 6)',
    simpleMeaning: 'Hindbrain brainstem centre controlling vital involuntary actions like BP, salivation, and vomiting.',
    ncertDefinition:
      'Posterior part of the hindbrain regulating involuntary life processes including blood pressure, salivation, swallowing, and vomiting.',
    example: 'Mouth watering when smelling sour food or blood pressure regulation during sleep.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-control-and-coordination',
      subtopicSlug: 'bio06-neuron-reflex-brain',
      sectionId: 'human-brain-and-protection',
    },
  },
  {
    id: 'term-phototropism-auxin',
    term: 'Phototropism & Auxin',
    category: 'Biology — Control & Coordination (Ch 6)',
    simpleMeaning: 'Directional bending of a shoot toward light because Auxin hormone accumulates on the shaded side.',
    ncertDefinition:
      'Growth movement of plant parts in response to light; shoot tips produce auxin that diffuses to the shady side, elongating shaded cells faster so the stem bends toward light.',
    example: 'A potted window plant visibly curves toward sunlight (+ phototropism).',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-control-and-coordination',
      subtopicSlug: 'bio06-plant-tropisms-endocrine',
      sectionId: 'plant-nastic-tropic-and-phytohormones',
    },
  },
  {
    id: 'term-abscisic-acid',
    term: 'Abscisic Acid (ABA)',
    category: 'Biology — Control & Coordination (Ch 6)',
    simpleMeaning: 'The main plant growth-inhibiting hormone that triggers leaf wilting and dormancy.',
    ncertDefinition:
      'Growth-inhibiting phytohormone whose effects include inhibition of growth, stomatal closure under drought stress, and wilting of leaves.',
    example: 'Unlike Auxin, Gibberellin, and Cytokinin (promoters), ABA acts as a brake on plant growth.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-control-and-coordination',
      subtopicSlug: 'bio06-plant-tropisms-endocrine',
      sectionId: 'plant-nastic-tropic-and-phytohormones',
    },
  },
  {
    id: 'term-thyroxine-adrenaline',
    term: 'Thyroxine & Adrenaline',
    category: 'Biology — Control & Coordination (Ch 6)',
    simpleMeaning: 'Thyroxine (needs Iodine!) regulates metabolism; Adrenaline triggers emergency Fight-or-Flight.',
    ncertDefinition:
      'Thyroxine from the thyroid regulates carbohydrate, protein & fat metabolism (iodine deficiency causes goitre); adrenaline from adrenal glands prepares the body for emergencies.',
    example: 'Adrenaline boosts heart rate and diverts blood from the gut/skin toward skeletal muscles.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-control-and-coordination',
      subtopicSlug: 'bio06-plant-tropisms-endocrine',
      sectionId: 'animal-endocrine-glands-and-feedback',
    },
  },
  {
    id: 'term-feedback-insulin',
    term: 'Feedback Mechanism (Insulin)',
    category: 'Biology — Control & Coordination (Ch 6)',
    simpleMeaning: 'Automatic control loop regulating when and how much hormone (like Insulin) is released.',
    ncertDefinition:
      'Self-regulating physiological control where rising blood glucose triggers pancreatic insulin secretion, and falling glucose signals the pancreas to reduce insulin release.',
    example: 'Deficiency of insulin leaves blood sugar dangerously high, causing Diabetes.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-control-and-coordination',
      subtopicSlug: 'bio06-plant-tropisms-endocrine',
      sectionId: 'animal-endocrine-glands-and-feedback',
    },
  },
  // Biology — Reproduction (Ch 7) — 10 Terms
  {
    id: 'term-binary-multiple-fission',
    term: 'Binary vs. Multiple Fission',
    category: 'Biology — Reproduction (Ch 7)',
    simpleMeaning: 'Splitting into 2 daughters (Amoeba any plane / Leishmania whip axis) vs many daughters at once inside a cyst (Plasmodium).',
    ncertDefinition:
      'Asexual reproduction in unicellular organisms: binary fission splits one parent into two (longitudinal in Leishmania; any plane in Amoeba), whereas multiple fission forms many daughters inside a cyst (Plasmodium).',
    example: 'Leishmania causes Kala-azar; Plasmodium causes Malaria.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-reproduction',
      subtopicSlug: 'bio07-dna-copying-asexual',
      sectionId: 'six-asexual-reproduction-modes',
    },
  },
  {
    id: 'term-fragmentation-regeneration',
    term: 'Fragmentation vs. Regeneration',
    category: 'Biology — Reproduction (Ch 7)',
    simpleMeaning: 'Simple filaments breaking naturally (Spirogyra) vs specialized stem cells rebuilding cut organisms (Planaria).',
    ncertDefinition:
      'In fragmentation, simple multicellular organisms like Spirogyra break into pieces that grow; in regeneration, specialized cells in Planaria/Hydra proliferate and differentiate to regrow missing body parts.',
    example: 'Three cut pieces of a Planaria flatworm regenerate into three complete worms.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-reproduction',
      subtopicSlug: 'bio07-dna-copying-asexual',
      sectionId: 'six-asexual-reproduction-modes',
    },
  },
  {
    id: 'term-vegetative-propagation',
    term: 'Vegetative Propagation & Tissue Culture',
    category: 'Biology — Reproduction (Ch 7)',
    simpleMeaning: 'Growing identical plants from roots, stems, or leaf buds (Bryophyllum) or sterile callus in labs.',
    ncertDefinition:
      'Asexual reproduction in plants from vegetative parts (buds on Bryophyllum leaf margins, potato tubers) or micropropagation via callus in nutrient media, yielding early-fruiting and seedless clones.',
    example: 'Banana, seedless grapes, rose, and jasmine are propagated vegetatively.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-reproduction',
      subtopicSlug: 'bio07-dna-copying-asexual',
      sectionId: 'six-asexual-reproduction-modes',
    },
  },
  {
    id: 'term-sporangia-spores',
    term: 'Sporangia & Spores (Rhizopus)',
    category: 'Biology — Reproduction (Ch 7)',
    simpleMeaning: 'Blob-on-a-stick reproductive sacs on bread mould releasing tough-walled spores.',
    ncertDefinition:
      'Round reproductive structures (sporangia) borne on vertical hyphae of Rhizopus that produce microscopic spores encased in thick protective walls for survival until moist conditions return.',
    example: 'Thread-like hyphae are non-reproductive, while blob-like sporangia are reproductive.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-reproduction',
      subtopicSlug: 'bio07-dna-copying-asexual',
      sectionId: 'six-asexual-reproduction-modes',
    },
  },
  {
    id: 'term-pollination',
    term: 'Self vs. Cross-Pollination',
    category: 'Biology — Reproduction (Ch 7)',
    simpleMeaning: 'Transfer of pollen from Anther to Stigma within the same flower/plant vs between two plants.',
    ncertDefinition:
      'Transfer of pollen grains from stamen anther to pistil stigma; self-pollination occurs on the same flower/plant, whereas cross-pollination moves pollen to another plant via wind, water, or animals.',
    example: 'Cross-pollination brings greater genetic variation than self-pollination.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-reproduction',
      subtopicSlug: 'bio07-sexual-plants-humans',
      sectionId: 'flower-pollination-and-seed-germination',
    },
  },
  {
    id: 'term-plumule-radicle',
    term: 'Plumule & Radicle',
    category: 'Biology — Reproduction (Ch 7)',
    simpleMeaning: 'Plumule grows into the future shoot; Radicle grows into the future root.',
    ncertDefinition:
      'Embryonic parts inside a seed: plumule develops into the ascending shoot system, radicle develops into the root system, and cotyledons store reserve food.',
    example: 'Post-fertilization, the Ovule turns into a Seed and the Ovary ripens into a Fruit.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-reproduction',
      subtopicSlug: 'bio07-sexual-plants-humans',
      sectionId: 'flower-pollination-and-seed-germination',
    },
  },
  {
    id: 'term-scrotum-oviduct',
    term: 'Scrotum & Oviduct (Fallopian Tube)',
    category: 'Biology — Reproduction (Ch 7)',
    simpleMeaning: 'Scrotum keeps testes 2–2.5°C cooler for sperm formation; Oviduct is the exact site of fertilization.',
    ncertDefinition:
      'Scrotum is the external pouch housing testes at 2–2.5°C below body temperature required for spermatogenesis; oviduct carries the egg from ovary to uterus and serves as the site of fertilization.',
    example: 'After fertilization in the oviduct, the dividing embryo implants in the uterus.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-reproduction',
      subtopicSlug: 'bio07-sexual-plants-humans',
      sectionId: 'human-reproductive-placenta-and-contraception',
    },
  },
  {
    id: 'term-placenta',
    term: 'Placenta',
    category: 'Biology — Reproduction (Ch 7)',
    simpleMeaning: 'Disc-like lifeline connecting embryo to mother’s uterus for O₂/glucose supply and waste removal.',
    ncertDefinition:
      'Special disc-shaped tissue embedded in the uterine wall with villi on the embryo side and maternal blood spaces on the mother side, transferring glucose/O₂ to the embryo and removing wastes.',
    example: 'Supports fetal nourishment throughout the ~9-month gestation period.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-reproduction',
      subtopicSlug: 'bio07-sexual-plants-humans',
      sectionId: 'human-reproductive-placenta-and-contraception',
    },
  },
  {
    id: 'term-menstruation',
    term: 'Menstruation',
    category: 'Biology — Reproduction (Ch 7)',
    simpleMeaning: 'Monthly shedding of the thick blood-rich uterine lining when an egg is NOT fertilized.',
    ncertDefinition:
      'Cyclic breakdown and discharge of the thickened spongy uterine lining along with blood and mucus through the vagina over 2–8 days roughly every 28 days when fertilization fails.',
    example: 'Does not occur during pregnancy because the uterine lining nurtures the implanted embryo.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-reproduction',
      subtopicSlug: 'bio07-sexual-plants-humans',
      sectionId: 'human-reproductive-placenta-and-contraception',
    },
  },
  {
    id: 'term-contraception-stds',
    term: 'Contraception (Copper-T, Condom, Vasectomy/Tubectomy)',
    category: 'Biology — Reproduction (Ch 7)',
    simpleMeaning: 'Barrier, hormonal, intrauterine, and surgical methods to prevent pregnancy (only Condoms block STDs).',
    ncertDefinition:
      'Family planning methods preventing fertilization or implantation: mechanical condoms (also prevent bacterial Gonorrhoea/Syphilis and viral HIV/Warts), oral pills (stop ovulation), IUCD Copper-T (blocks implantation), and surgical Vasectomy/Tubectomy.',
    example: 'Prenatal sex determination is banned by law to safeguard a balanced female–male sex ratio.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-reproduction',
      subtopicSlug: 'bio07-sexual-plants-humans',
      sectionId: 'human-reproductive-placenta-and-contraception',
    },
  },
  // Biology — Our Environment (Ch 13) — 8 Terms
  {
    id: 'term-ecosystem-components',
    term: 'Ecosystem (Natural vs. Artificial)',
    category: 'Biology — Our Environment (Ch 13)',
    simpleMeaning: 'Interacting community of Biotic organisms and Abiotic environment (e.g., Forest vs Aquarium).',
    ncertDefinition:
      'Functional unit of nature comprising biotic (plants, animals, decomposers) and abiotic (temperature, rainfall, soil) components; artificial ecosystems like aquariums lack full decomposer cycles and require regular cleaning.',
    example: 'Forests and lakes are self-cleaning natural ecosystems; crop fields and aquariums are man-made.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-our-environment',
      subtopicSlug: 'bio13-ecosystem-energy-biomagnification',
      sectionId: 'ecosystems-and-food-webs',
    },
  },
  {
    id: 'term-decomposers',
    term: 'Decomposers (Saprotrophs)',
    category: 'Biology — Our Environment (Ch 13)',
    simpleMeaning: 'Bacteria & Fungi that clean nature by turning dead waste back into simple soil nutrients.',
    ncertDefinition:
      'Microorganisms (bacteria and fungi) that break down dead remains and waste products of organisms into simple inorganic substances absorbed back by plants.',
    example: 'Without decomposers, dead bodies would pile up and soil nutrients would never replenish.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-our-environment',
      subtopicSlug: 'bio13-ecosystem-energy-biomagnification',
      sectionId: 'ecosystems-and-food-webs',
    },
  },
  {
    id: 'term-food-web',
    term: 'Food Web & Trophic Levels',
    symbol: 'T₁ → T₂ → T₃ → T₄',
    category: 'Biology — Our Environment (Ch 13)',
    simpleMeaning: 'Network of cross-linked food chains with strictly one-way energy flow from Sun upward.',
    ncertDefinition:
      'Interconnected network of food chains across trophic levels (Producers T₁, Herbivores T₂, Secondary Carnivores T₃, Top Carnivores T₄) exhibiting unidirectional energy transfer.',
    example: 'A mouse eaten by both snakes and hawks stabilizes the ecosystem compared to a single chain.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-our-environment',
      subtopicSlug: 'bio13-ecosystem-energy-biomagnification',
      sectionId: 'ecosystems-and-food-webs',
    },
  },
  {
    id: 'term-ten-percent-law',
    term: '1% Solar Capture & 10% Energy Law',
    symbol: 'Sun —(1%)→ T₁ —(10%)→ T₂ —(10%)→ T₃',
    category: 'Biology — Our Environment (Ch 13)',
    simpleMeaning: 'Plants capture 1% of sunlight; only 10% of energy moves up each organism step (90% lost as heat).',
    ncertDefinition:
      'Green plants capture ~1% of incident solar energy; at each successive trophic transfer only ~10% becomes available as biomass while ~90% is lost to environment/metabolism, limiting chains to 3–4 steps.',
    example: '20,000 J sunlight → 200 J plants → 20 J deer → 2 J lion.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-our-environment',
      subtopicSlug: 'bio13-ecosystem-energy-biomagnification',
      sectionId: 'ten-percent-law-and-biomagnification',
    },
  },
  {
    id: 'term-biomagnification',
    term: 'Biological Magnification (Biomagnification)',
    symbol: '0.003 ppb → 25 ppm',
    category: 'Biology — Our Environment (Ch 13)',
    simpleMeaning: 'Multiplication of non-biodegradable toxins like DDT moving up a food chain, peaking in humans.',
    ncertDefinition:
      'Progressive accumulation and concentration of non-degradable, non-excretable chemicals (such as DDT) at higher trophic levels of a food chain, reaching maximum levels in top carnivores and humans.',
    example: 'Water (0.003 ppb) → Zooplankton → Small Fish → Big Fish → Fish-eating Bird (25 ppm).',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-our-environment',
      subtopicSlug: 'bio13-ecosystem-energy-biomagnification',
      sectionId: 'ten-percent-law-and-biomagnification',
    },
  },
  {
    id: 'term-ozone-shield',
    term: 'Stratospheric Ozone (O₃) Shield',
    symbol: 'O₂ —UV→ O + O  |  O + O₂ → O₃',
    category: 'Biology — Our Environment (Ch 13)',
    simpleMeaning: 'Toxic at ground level, yet shields Earth from cancer-causing UV rays high in the stratosphere.',
    ncertDefinition:
      'Triatomic oxygen molecule formed when high-energy UV splits O₂ into free O atoms that combine with O₂; absorbs lethal UV radiation that causes skin cancer and cataracts.',
    example: 'Ground-level O₃ is a deadly poison, whereas stratospheric O₃ protects all surface life.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-our-environment',
      subtopicSlug: 'bio13-ozone-waste-science-blueprint',
      sectionId: 'ozone-shield-and-waste-management',
    },
  },
  {
    id: 'term-cfc-montreal-protocol',
    term: 'CFCs & 1987 UNEP Montreal Protocol',
    category: 'Biology — Our Environment (Ch 13)',
    simpleMeaning: 'Refrigerant chemicals that thinned the ozone shield, frozen globally by the 1987 UNEP pact.',
    ncertDefinition:
      'Chlorofluorocarbons used in old refrigerators and fire extinguishers caused sharp ozone depletion in the 1980s; UNEP forged a 1987 agreement freezing CFC production at 1986 levels.',
    example: 'Modern refrigerators must be CFC-free worldwide under UNEP rules.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-our-environment',
      subtopicSlug: 'bio13-ozone-waste-science-blueprint',
      sectionId: 'ozone-shield-and-waste-management',
    },
  },
  {
    id: 'term-biodegradable-enzyme-specificity',
    term: 'Biodegradable vs. Non-Biodegradable (Enzyme Specificity)',
    category: 'Biology — Our Environment (Ch 13)',
    simpleMeaning: 'Microbial enzymes are specific — they break down peels/paper easily but cannot digest plastics.',
    ncertDefinition:
      'Materials broken down by biological processes via substrate-specific microbial enzymes (biodegradable) versus inert synthetic polymers like plastics and DDT that persist in soil/water for centuries (non-biodegradable).',
    example: 'Replacing plastic cups with disposable paper cups beats clay kulhads, which depleted fertile topsoil.',
    subtopicPath: {
      subjectSlug: 'biology',
      topicSlug: 'bio-our-environment',
      subtopicSlug: 'bio13-ozone-waste-science-blueprint',
      sectionId: 'ozone-shield-and-waste-management',
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
  // =========================================================================
  // Ch 5 Part 1: Nutrition & Respiration (q-13 .. q-22)
  // =========================================================================
  {
    id: 'q-13',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-nutrition-respiration',
    subtopicTitle: 'Photosynthesis & Desert Plants',
    type: 'mcq',
    marks: 1,
    question:
      'How do **desert plants** minimize water loss while still carrying out photosynthesis?',
    options: [
      'They perform photosynthesis exclusively using moonlight at night',
      'They open stomata at night to take in `CO₂` as an intermediate and process it with sunlight during the day',
      'They absorb solid starch directly through their roots instead of making glucose',
      'They store oxygen instead of carbon dioxide inside guard cells',
    ],
    correctIndex: 1,
    explanation:
      'Desert plants take up `CO₂` at night when cooler temperatures reduce transpiration, form an intermediate acid, and reduce it to carbohydrates during daytime when chlorophyll absorbs sunlight.',
  },
  {
    id: 'q-14',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-nutrition-respiration',
    subtopicTitle: 'NCERT Bell-Jar KOH Activity',
    type: 'mcq',
    marks: 1,
    question:
      'In NCERT Activity 5.2, two healthy potted plants are placed under bell jars, with a watch-glass of **Potassium Hydroxide (`KOH`)** beside Plant A. When tested with iodine after sunlight exposure, Leaf A stays brown while Leaf B turns blue-black. Why?',
    options: [
      '`KOH` absorbed all `CO₂` inside Jar A, preventing starch synthesis',
      '`KOH` released excess oxygen that bleached the chlorophyll',
      '`KOH` destroyed the guard cells of Plant A',
      'Plant A carried out lactic acid fermentation instead of photosynthesis',
    ],
    correctIndex: 0,
    explanation:
      'Potassium hydroxide (`KOH`) absorbs carbon dioxide (`CO₂`), proving that `CO₂` is strictly essential for photosynthesis.',
  },
  {
    id: 'q-15',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-nutrition-respiration',
    subtopicTitle: 'Human Digestive Enzymes',
    type: 'mcq',
    marks: 1,
    question:
      'Which secretion in the human alimentary canal **contains NO digestive enzymes**, yet is crucial for fat digestion?',
    options: [
      'Saliva',
      'Gastric juice',
      'Bile juice from the liver',
      'Pancreatic juice',
    ],
    correctIndex: 2,
    explanation:
      'Bile juice contains bile salts that **emulsify** large fat globules into fine droplets and neutralize stomach acid to an alkaline medium — it has **zero digestive enzymes**.',
    commonMistake: 'Lipase (not bile!) chemically splits emulsified fats into fatty acids and glycerol.',
  },
  {
    id: 'q-16',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-nutrition-respiration',
    subtopicTitle: 'Stomach Enzymes & Mucus',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** Herbivores such as cows have a much longer small intestine than carnivores such as tigers.\n**Reason (R):** Cellulose present in grass takes longer to digest than meat.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Plant cell walls contain tough **cellulose** that requires extended digestion time, hence herbivores have longer small intestines than meat-eating carnivores.',
  },
  {
    id: 'q-17',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-nutrition-respiration',
    subtopicTitle: 'Amoeba vs Paramoecium Nutrition',
    type: 'mcq',
    marks: 1,
    question:
      'How does holozoic feeding in ***Paramoecium*** differ from ***Amoeba***?',
    options: [
      '*Paramoecium* is autotrophic whereas *Amoeba* is parasitic',
      '*Paramoecium* has a definite shape and sweeps food to a specific spot via cilia, whereas *Amoeba* uses temporary pseudopodia anywhere on its surface',
      '*Paramoecium* digests food outside its body using saprophytic enzymes',
      '*Amoeba* uses lungs whereas *Paramoecium* uses alveoli',
    ],
    correctIndex: 1,
    explanation:
      'Unlike *Amoeba* (irregular cell engulfing food via temporary finger-like pseudopodia), *Paramoecium* uses rhythmic **cilia** covering its body to sweep food to a **fixed oral spot**.',
  },
  {
    id: 'q-18',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-nutrition-respiration',
    subtopicTitle: 'Glucose 3 Pathways',
    type: 'mcq',
    marks: 1,
    question:
      'In which site does the common breakdown of **6-carbon Glucose** into **3-carbon Pyruvate** take place across all organisms?',
    options: [
      'Mitochondria',
      'Cytoplasm',
      'Chloroplast',
      'Nucleus',
    ],
    correctIndex: 1,
    explanation:
      'Step 1 (Glycolysis: Glucose `6C` → 2 Pyruvate `3C`) occurs in the **cytoplasm** of every cell without requiring oxygen. Mitochondria are used only later for aerobic breakdown.',
  },
  {
    id: 'q-19',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-nutrition-respiration',
    subtopicTitle: 'Anaerobic Respiration',
    type: 'mcq',
    marks: 1,
    question:
      'During yeast fermentation (`absence of O₂`), pyruvate (`3C`) breaks down into:',
    options: [
      'Lactic acid (`3C`) + Energy',
      'Ethanol (`2C`) + `CO₂` + Energy',
      '`6CO₂` + `6H₂O` + `38 ATP`',
      'Starch + Oxygen',
    ],
    correctIndex: 1,
    explanation:
      'Yeast performs alcoholic fermentation in the absence of oxygen, forming 2-carbon **Ethanol + `CO₂` + `2 ATP`**. Lactic acid (`3C`) forms only in oxygen-starved animal muscles.',
  },
  {
    id: 'q-20',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-nutrition-respiration',
    subtopicTitle: 'Aquatic vs Terrestrial Breathing',
    type: 'mcq',
    marks: 1,
    question:
      'Why is the breathing rate of a fish inside an aquarium noticeably faster than that of a human resting beside it?',
    options: [
      'Fishes have larger lungs that need rapid refilling',
      'Concentration of dissolved `O₂` in water is very low compared to `O₂` in air',
      'Water has zero `CO₂` capacity',
      'Fishes lack blood capillaries in their gills',
    ],
    correctIndex: 1,
    explanation:
      'Because dissolved oxygen levels in water are fairly low compared to atmospheric air (~21%), aquatic organisms breathe much faster to meet cellular `O₂` needs.',
  },
  {
    id: 'q-21',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-nutrition-respiration',
    subtopicTitle: 'Residual Volume & Alveoli',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** Even after forceful exhalation, human lungs always contain a residual volume of air.\n**Reason (R):** Residual volume ensures sufficient time for oxygen to be absorbed and carbon dioxide to be released continuously.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'NCERT explicitly highlights that residual air keeps the alveoli open and gives steady time for `O₂` absorption and `CO₂` release across the breathing cycle.',
  },
  {
    id: 'q-22',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-nutrition-respiration',
    subtopicTitle: 'Digestive Enzyme Case Study',
    type: 'case-based',
    marks: 2,
    casePassage:
      'A student placed boiled rice chewed well into Test Tube A and unchewed boiled rice into Test Tube B, then added a few drops of iodine solution to both tubes.',
    question:
      'What colour change will be observed in Test Tube A vs. Test Tube B, and why?',
    options: [
      'Tube A turns deep blue-black; Tube B stays colourless because saliva makes starch insoluble',
      'Tube B turns blue-black (starch intact), whereas Tube A shows little/no blue-black because salivary amylase broke starch into maltose sugar',
      'Both tubes turn blue-black because salivary amylase works only at stomach pH 2',
      'Both tubes turn orange because chewing releases pepsin',
    ],
    correctIndex: 1,
    explanation:
      'Salivary amylase in saliva digests **starch** into **maltose** (sugar), which does NOT turn blue-black with iodine!',
  },
  // =========================================================================
  // Ch 5 Part 2: Transportation & Excretion (q-23 .. q-32)
  // =========================================================================
  {
    id: 'q-23',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-transport-excretion',
    subtopicTitle: 'Human Heart Chambers',
    type: 'mcq',
    marks: 1,
    question:
      'Which chamber of the human heart possesses the **thickest muscular wall**, and why?',
    options: [
      'Right Atrium — receives blood from the whole body',
      'Right Ventricle — pumps blood to nearby lungs',
      'Left Atrium — receives oxygenated blood from pulmonary vein',
      'Left Ventricle — pumps blood under high pressure to every distant organ of the body',
    ],
    correctIndex: 3,
    explanation:
      'The **Left Ventricle** pumps oxygenated blood through the aorta to the entire body (head to toe), requiring ~3× thicker muscle than the Right Ventricle.',
  },
  {
    id: 'q-24',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-transport-excretion',
    subtopicTitle: 'Arteries, Veins & Pulmonary Exception',
    type: 'mcq',
    marks: 1,
    question:
      'Which blood vessel carries **oxygenated blood** from the lungs back into the Left Atrium of the heart?',
    options: [
      'Pulmonary artery',
      'Pulmonary vein',
      'Superior vena cava',
      'Aorta',
    ],
    correctIndex: 1,
    explanation:
      '**Pulmonary vein** brings freshly oxygenated blood from lungs → Left Atrium. Conversely, Pulmonary artery is the only artery carrying deoxygenated blood.',
  },
  {
    id: 'q-25',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-transport-excretion',
    subtopicTitle: 'Vertebrate Heart Comparison',
    type: 'mcq',
    marks: 1,
    question:
      'In which group of vertebrates does blood pass through the heart **only ONCE** during each complete cycle through the body?',
    options: [
      'Fishes (2-chambered heart)',
      'Amphibians (3-chambered heart)',
      'Birds (4-chambered heart)',
      'Mammals (4-chambered heart)',
    ],
    correctIndex: 0,
    explanation:
      'Fishes have a 2-chambered heart (1 atrium + 1 ventricle): blood goes Heart → Gills → Body → Heart (**single circulation**).',
  },
  {
    id: 'q-26',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-transport-excretion',
    subtopicTitle: 'Lymph & Platelets',
    type: 'mcq',
    marks: 1,
    question:
      'Apart from draining excess tissue fluid back into blood, what major digestive nutrient is transported by **Lymph** from the small intestine?',
    options: [
      'Glucose',
      'Digested and absorbed fat',
      'Urea',
      'Haemoglobin',
    ],
    correctIndex: 1,
    explanation:
      'In NCERT Section 5.4.1, **lymph** carries digested and absorbed **fat** from the intestine and drains excess fluid from extracellular spaces back into the blood.',
  },
  {
    id: 'q-27',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-transport-excretion',
    subtopicTitle: 'Xylem vs Phloem',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** Translocation of sucrose in phloem requires cellular energy (`ATP`), whereas water ascent in xylem during daytime relies on physical transpiration pull.\n**Reason (R):** Phloem consists of living sieve tubes and companion cells, whereas xylem vessels are dead hollow tubes.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Living phloem tissue actively spends `ATP` to load sucrose and build osmotic pressure for bidirectional transport, while dead hollow xylem vessels carry water upward passively by transpiration suction.',
  },
  {
    id: 'q-28',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-transport-excretion',
    subtopicTitle: 'Xylem Direction vs Phloem Direction',
    type: 'mcq',
    marks: 1,
    question:
      'Why does **Transpiration Pull** become the dominant force lifting water to tall tree tops during daytime?',
    options: [
      'Leaves synthesize ATP to pump water down the stem',
      'Evaporation of water molecules from leaf cells creates a suction that pulls water up through xylem vessels from roots',
      'Phloem sieve plates push water downward at night',
      'Root hairs push air bubbles upward through the stem',
    ],
    correctIndex: 1,
    explanation:
      'As long as stomata are open during the day, transpirational water loss creates negative suction pressure (**transpiration pull**) drawing water steadily up the xylem.',
  },
  {
    id: 'q-29',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-transport-excretion',
    subtopicTitle: 'Nephron Ultrafiltration & Reabsorption',
    type: 'mcq',
    marks: 1,
    question:
      'In a healthy person, roughly **`180 L`** of initial filtrate enters nephrons daily, yet only **`1–2 L`** is excreted as urine. Which substances are **100% selectively reabsorbed** along the healthy nephron tubule?',
    options: [
      'Urea and Uric acid',
      'Glucose and Amino acids',
      'Red Blood Cells and Plasma Albumin (they filter out first)',
      'Excess carbon dioxide',
    ],
    correctIndex: 1,
    explanation:
      'RBCs and plasma proteins never enter Bowman’s capsule at all; from the filtrate, **100% of glucose and amino acids** plus needed salts and regulated water are selectively reabsorbed.',
  },
  {
    id: 'q-30',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-transport-excretion',
    subtopicTitle: 'Haemodialysis Trap',
    type: 'mcq',
    marks: 1,
    question:
      'How does an **Artificial Kidney (Haemodialysis machine)** differ critically from a natural living kidney?',
    options: [
      'It uses high hydrostatic pressure inside Bowman’s capsule',
      'There is NO selective reabsorption in an artificial kidney',
      'Dialysing fluid contains higher urea concentration than the patient’s blood',
      'It filters Red Blood Cells out into the dialysing fluid',
    ],
    correctIndex: 1,
    explanation:
      'An artificial kidney relies purely on diffusion of urea across semi-permeable tubes into urea-free dialysing fluid; unlike natural nephrons, **no reabsorption** takes place.',
  },
  {
    id: 'q-31',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-transport-excretion',
    subtopicTitle: 'Plant Excretion',
    type: 'mcq',
    marks: 1,
    question:
      'Which of the following is NOT a way plants get rid of waste products?',
    options: [
      'Storing wastes as resins and gums in old xylem',
      'Shedding old leaves carrying accumulated wastes',
      'Excreting nitrogenous urea through nephron tubules in roots',
      'Eliminating excess water via transpiration and some wastes directly into soil',
    ],
    correctIndex: 2,
    explanation:
      'Plants lack kidneys or nephrons; they remove wastes via transpiration, stomata, vacuole/dead-cell storage, resins/gums, leaf fall, and root excretion into soil.',
  },
  {
    id: 'q-32',
    subjectSlug: 'biology',
    topicSlug: 'bio-life-processes-transport-excretion',
    subtopicTitle: 'Nephron Hydration Case Study',
    type: 'case-based',
    marks: 2,
    casePassage:
      'A runner finishes a marathon in hot summer weather without drinking enough water. Blood tests show normal glucose levels, while urine output drops sharply and looks dark concentrated yellow.',
    question:
      'Based on nephron physiology, explain why urine volume dropped and why zero glucose appeared in the runner’s urine.',
    options: [
      'Ultrafiltration stopped completely so neither water nor urea entered Bowman’s capsule',
      'Higher water reabsorption occurred along the renal tubule to conserve body water, while 100% of filtered glucose was selectively reabsorbed back into capillaries',
      'Glucose converted directly into urea inside the bladder',
      'Dialysing fluid absorbed excess water from the urethra',
    ],
    correctIndex: 1,
    explanation:
      'Water reabsorption depends on excess water in the body — during dehydration, the nephron reabsorbs maximum water (producing concentrated urine) while always reclaiming 100% of glucose.',
  },
  // =========================================================================
  // Ch 6: Control & Coordination (q-33 .. q-42)
  // =========================================================================
  {
    id: 'q-33',
    subjectSlug: 'biology',
    topicSlug: 'bio-control-and-coordination',
    subtopicTitle: 'Synapse Signal Direction',
    type: 'mcq',
    marks: 1,
    question:
      'At a **synapse**, an electrical impulse arriving at the axon terminal converts into what form to cross the microscopic gap to the next dendrite?',
    options: [
      'Magnetic pulse',
      'Chemical signal (neurotransmitters)',
      'Thermal vibration',
      'Osmotic water jet',
    ],
    correctIndex: 1,
    explanation:
      'The electrical impulse triggers neurotransmitter chemicals across the synaptic cleft, which trigger a fresh electrical impulse on the next neuron’s dendrite.',
  },
  {
    id: 'q-34',
    subjectSlug: 'biology',
    topicSlug: 'bio-control-and-coordination',
    subtopicTitle: 'Reflex Arc Sequence',
    type: 'mcq',
    marks: 1,
    question:
      'Identify the correct sequence of components in a **spinal reflex arc** upon touching a hot kettle:',
    options: [
      'Effector → Motor neuron → Brain → Sensory neuron → Receptor',
      'Receptor → Sensory neuron → Relay neuron (Spinal cord) → Motor neuron → Effector',
      'Receptor → Motor neuron → Spinal cord → Sensory neuron → Effector',
      'Brain → Sensory neuron → Receptor → Effector',
    ],
    correctIndex: 1,
    explanation:
      'Stimulus hits **Receptor** → **Sensory neuron** → **Relay neuron in Spinal Cord** → **Motor neuron** → **Effector muscle** (with a secondary signal rising to the brain).',
  },
  {
    id: 'q-35',
    subjectSlug: 'biology',
    topicSlug: 'bio-control-and-coordination',
    subtopicTitle: 'Sensory Receptors',
    type: 'mcq',
    marks: 1,
    question:
      'When your nose is blocked during a heavy cold, food suddenly tastes bland. Which two specialized receptors normally team up to detect taste and smell?',
    options: [
      'Photoreceptors and Phonoreceptors',
      'Gustatory receptors (tongue) and Olfactory receptors (nose)',
      'Thermoreceptors and Baroreceptors',
      'Chemoreceptors only in the stomach',
    ],
    correctIndex: 1,
    explanation:
      '**Gustatory** receptors detect taste on the tongue and **Olfactory** receptors detect smell in the nose.',
  },
  {
    id: 'q-36',
    subjectSlug: 'biology',
    topicSlug: 'bio-control-and-coordination',
    subtopicTitle: 'Brain Regions Trap',
    type: 'mcq',
    marks: 1,
    question:
      'Which region of the **hindbrain** ensures you can ride a bicycle in a straight line and pick up a pencil smoothly without stumbling?',
    options: [
      'Medulla oblongata',
      'Cerebellum',
      'Hypothalamus',
      'Midbrain',
    ],
    correctIndex: 1,
    explanation:
      '**Cerebellum** coordinates precision of voluntary movements, posture, and balance; Medulla handles involuntary BP, salivation, and vomiting.',
    commonMistake: 'Students frequently swap Cerebellum (balance/posture) and Medulla (involuntary BP/vomiting)!',
  },
  {
    id: 'q-37',
    subjectSlug: 'biology',
    topicSlug: 'bio-control-and-coordination',
    subtopicTitle: 'Brain Protection',
    type: 'mcq',
    marks: 1,
    question:
      'Which combination protects the delicate human **brain** against mechanical shocks?',
    options: [
      'Cartilage rings + Pleural fluid',
      'Bony Cranium (Skull) + Cerebrospinal Fluid (CSF) cushion',
      'Vertebral column + Pericardial sac',
      'Bowman’s capsule + Melanin',
    ],
    correctIndex: 1,
    explanation:
      'The brain sits inside a bony **Cranium** and is bathed in a fluid-filled balloon (**CSF**) inside meninges; the spinal cord is protected inside the **Vertebral Column**.',
  },
  {
    id: 'q-38',
    subjectSlug: 'biology',
    topicSlug: 'bio-control-and-coordination',
    subtopicTitle: 'Mimosa pudica vs Phototropism',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** Touch-me-not (*Mimosa pudica*) leaves fold almost instantly when touched, without any plant growth occurring.\n**Reason (R):** Plant cells change shape rapidly by altering the amount of water inside them (turgor change) rather than using animal muscle proteins.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Nastic folding in *Mimosa pudica* relies on rapid electrical-chemical signals causing water loss (turgor drop) in leaf-base cells — completely independent of growth.',
  },
  {
    id: 'q-39',
    subjectSlug: 'biology',
    topicSlug: 'bio-control-and-coordination',
    subtopicTitle: 'Auxin & Phytohormones',
    type: 'mcq',
    marks: 1,
    question:
      'Which plant hormone acts as a **growth inhibitor** responsible for wilting of leaves, unlike Auxin, Gibberellin, and Cytokinin?',
    options: [
      'Cytokinin',
      'Gibberellin',
      'Abscisic Acid (ABA)',
      'Auxin',
    ],
    correctIndex: 2,
    explanation:
      'Auxin (cell elongation), Gibberellin (stem growth), and Cytokinin (cell division in fruits/seeds) promote growth; **Abscisic Acid (`ABA`)** inhibits growth and causes wilting.',
  },
  {
    id: 'q-40',
    subjectSlug: 'biology',
    topicSlug: 'bio-control-and-coordination',
    subtopicTitle: 'Auxin Mechanism',
    type: 'mcq',
    marks: 1,
    question:
      'When sunlight falls from the **right side** on a potted plant shoot, why does the stem bend toward the right?',
    options: [
      'Auxin breaks down completely in darkness',
      'Auxin diffuses toward the shaded left side, making shaded cells elongate faster than illuminated right-side cells',
      'Right-side cells absorb extra auxin and stretch longer',
      'Roots pull the stem sideways via hydrotropism',
    ],
    correctIndex: 1,
    explanation:
      'Auxin accumulates on the **shaded side**, stimulating faster cell elongation there and curving the shoot toward the light source.',
  },
  {
    id: 'q-41',
    subjectSlug: 'biology',
    topicSlug: 'bio-control-and-coordination',
    subtopicTitle: 'Endocrine Glands & Goitre',
    type: 'mcq',
    marks: 1,
    question:
      'Deficiency of **iodine** in the diet reduces secretion of which hormone, resulting in a swollen neck (**Goitre**)?',
    options: [
      'Insulin from Pancreas',
      'Thyroxine from Thyroid gland',
      'Growth Hormone from Pituitary',
      'Adrenaline from Adrenal gland',
    ],
    correctIndex: 1,
    explanation:
      'Iodine is essential for the **Thyroid gland** to synthesize **Thyroxine**, which regulates carbohydrate, protein, and fat metabolism.',
  },
  {
    id: 'q-42',
    subjectSlug: 'biology',
    topicSlug: 'bio-control-and-coordination',
    subtopicTitle: 'Insulin Feedback Case Study',
    type: 'case-based',
    marks: 2,
    casePassage:
      'Two hours after eating a heavy dessert, Rakesh’s blood sugar climbs from 90 mg/dL to 175 mg/dL. Soon after, his blood glucose returns safely to 92 mg/dL, and his pancreas drops hormone secretion back down.',
    question:
      'Name the hormone secreted during the spike AND the regulatory mechanism that automatically stopped over-secretion once glucose returned to normal.',
    options: [
      'Adrenaline; Positive Reflex Arc',
      'Insulin; Negative Feedback Mechanism',
      'Thyroxine; Transpiration Pull',
      'Growth Hormone; Osmoregulation',
    ],
    correctIndex: 1,
    explanation:
      'Pancreatic beta cells detect elevated sugar and release **Insulin** to drive cellular glucose uptake; as glucose normalizes, the **Feedback Mechanism** switches insulin secretion down.',
  },
  // =========================================================================
  // Ch 7: How do Organisms Reproduce? (q-43 .. q-52)
  // =========================================================================
  {
    id: 'q-43',
    subjectSlug: 'biology',
    topicSlug: 'bio-reproduction',
    subtopicTitle: 'Asexual Fission Axis',
    type: 'mcq',
    marks: 1,
    question:
      'Which unicellular pathogen causes **Kala-azar** and undergoes binary fission strictly along a **fixed longitudinal orientation**?',
    options: [
      'Amoeba',
      'Leishmania',
      'Plasmodium',
      'Yeast',
    ],
    correctIndex: 1,
    explanation:
      '*Leishmania* possesses a whip-like flagellum at one end, so binary fission occurs strictly longitudinally; *Amoeba* splits in any plane and *Plasmodium* undergoes multiple fission.',
  },
  {
    id: 'q-44',
    subjectSlug: 'biology',
    topicSlug: 'bio-reproduction',
    subtopicTitle: 'Spirogyra vs Complex Animals',
    type: 'mcq',
    marks: 1,
    question:
      'Why can simple filamentous ***Spirogyra*** reproduce by **fragmentation**, whereas complex multicellular animals cannot?',
    options: [
      'Complex animals lack DNA in body cells',
      'Complex organisms have specialized cells organized into tissues and organs at fixed locations, so simple cell-by-cell division cannot rebuild a whole body',
      'Complex animals only carry out binary fission',
      '*Spirogyra* is a unicellular prokaryote',
    ],
    correctIndex: 1,
    explanation:
      'Because complex organisms have highly differentiated tissues and organs arranged in specific anatomical positions, random broken pieces cannot simply divide into full organisms.',
  },
  {
    id: 'q-45',
    subjectSlug: 'biology',
    topicSlug: 'bio-reproduction',
    subtopicTitle: 'Rhizopus & Bryophyllum',
    type: 'mcq',
    marks: 1,
    question:
      'In bread mould (***Rhizopus***), the thread-like structures spreading over bread are called ______, whereas the blob-on-a-stick reproductive structures holding thick-walled spores are called ______.',
    options: [
      'Cotyledons; Plumules',
      'Hyphae; Sporangia',
      'Pseudopodia; Cysts',
      'Anthers; Ovules',
    ],
    correctIndex: 1,
    explanation:
      'Non-reproductive threads are **Hyphae**; erect reproductive stalks bear round **Sporangia** packed with thick-walled **Spores**.',
  },
  {
    id: 'q-46',
    subjectSlug: 'biology',
    topicSlug: 'bio-reproduction',
    subtopicTitle: 'Unisexual vs Bisexual Flowers',
    type: 'mcq',
    marks: 1,
    question:
      'Which pair consists **exclusively of unisexual flowers** (bearing either stamen OR pistil, never both)?',
    options: [
      'Hibiscus and Mustard',
      'Papaya and Watermelon',
      'Pea and Hibiscus',
      'Mustard and Rose',
    ],
    correctIndex: 1,
    explanation:
      'NCERT examples of **unisexual** flowers are **Papaya** and **Watermelon**, while **Hibiscus** and **Mustard** are **bisexual**.',
  },
  {
    id: 'q-47',
    subjectSlug: 'biology',
    topicSlug: 'bio-reproduction',
    subtopicTitle: 'Post-Fertilization & Germination',
    type: 'mcq',
    marks: 1,
    question:
      'After fertilization in a flowering plant, which parts develop respectively into **Fruit**, **Seed**, and **Future Shoot**?',
    options: [
      'Ovule → Fruit; Ovary → Seed; Radicle → Future Shoot',
      'Ovary → Fruit; Ovule → Seed; Plumule → Future Shoot',
      'Petal → Fruit; Stigma → Seed; Cotyledon → Future Shoot',
      'Ovary → Seed; Ovule → Fruit; Radicle → Future Shoot',
    ],
    correctIndex: 1,
    explanation:
      '**Ovary** ripens into **Fruit**, **Ovule** forms the tough-coated **Seed**, and inside the seed embryo, **Plumule** grows into the shoot while **Radicle** grows into the root.',
  },
  {
    id: 'q-48',
    subjectSlug: 'biology',
    topicSlug: 'bio-reproduction',
    subtopicTitle: 'Male Reproductive System',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** In human males, testes are located outside the abdominal cavity inside the scrotum.\n**Reason (R):** Sperm formation requires a temperature `2–2.5°C` lower than normal internal body temperature.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Normal body temperature (`37°C`) inhibits healthy sperm formation; the external scrotum provides the cooler environment needed.',
  },
  {
    id: 'q-49',
    subjectSlug: 'biology',
    topicSlug: 'bio-reproduction',
    subtopicTitle: 'Fertilization & Implantation Sites',
    type: 'mcq',
    marks: 1,
    question:
      'Where does fertilization of the egg by sperm occur in human females, and where does the **placenta** embed?',
    options: [
      'Fertilization in Uterus; Placenta in Ovary',
      'Fertilization in Oviduct (Fallopian tube); Placenta in Uterus wall',
      'Fertilization in Vagina; Placenta in Cervix',
      'Fertilization in Ovary; Placenta in Oviduct',
    ],
    correctIndex: 1,
    explanation:
      'Fusion occurs inside the **Oviduct (Fallopian tube)**; the embryo implants in the thick spongy wall of the **Uterus**, where the disc-shaped **Placenta** forms.',
  },
  {
    id: 'q-50',
    subjectSlug: 'biology',
    topicSlug: 'bio-reproduction',
    subtopicTitle: 'Placenta Function',
    type: 'mcq',
    marks: 1,
    question:
      'Which substances pass **from Mother’s blood → Embryo** and **from Embryo → Mother’s blood** across the **placenta**?',
    options: [
      'Urea & `CO₂` to embryo; Glucose & `O₂` to mother',
      'Glucose & `O₂` to embryo; Metabolic wastes (`CO₂` / urea) to mother',
      'Red Blood Cells mix directly between mother and embryo',
      'Bile juice to embryo; Salivary amylase to mother',
    ],
    correctIndex: 1,
    explanation:
      'Placental villi supply **glucose and oxygen** from mother to embryo and carry away **waste substances** generated by the embryo into mother’s blood.',
  },
  {
    id: 'q-51',
    subjectSlug: 'biology',
    topicSlug: 'bio-reproduction',
    subtopicTitle: 'Contraception & STD Shield',
    type: 'mcq',
    marks: 1,
    question:
      'Which contraceptive device is placed inside the uterus to prevent implantation of a fertilized egg (and does NOT prevent STDs)?',
    options: [
      'Condom',
      'Copper-T (IUCD)',
      'Oral contraceptive pill',
      'Vasectomy',
    ],
    correctIndex: 1,
    explanation:
      '**Copper-T** is an Intrauterine Contraceptive Device (`IUCD`) placed in the uterus to prevent implantation; **Condoms** are the only method blocking STDs like HIV, Gonorrhoea, and Syphilis.',
  },
  {
    id: 'q-52',
    subjectSlug: 'biology',
    topicSlug: 'bio-reproduction',
    subtopicTitle: 'Surgical Contraception Case Study',
    type: 'case-based',
    marks: 2,
    casePassage:
      'A married couple with two children opts for a permanent surgical method of contraception where the doctor blocks the male’s sperm-carrying tubes without touching hormone production.',
    question:
      'Name this procedure, the exact tube blocked, and state whether **Testosterone** production stops afterward.',
    options: [
      'Tubectomy; Oviduct blocked; Testosterone stops immediately',
      'Vasectomy; Vas deferens blocked; Testosterone continues normally from Testes into blood',
      'Copper-T; Urethra blocked; Sperm production stops completely',
      'Vasectomy; Ureter blocked; Urine stops flowing',
    ],
    correctIndex: 1,
    explanation:
      'In **Vasectomy**, the **vas deferens** is cut and tied so sperms cannot travel out; **Testes** continue secreting **Testosterone** directly into the bloodstream!',
  },
  // =========================================================================
  // Ch 13: Our Environment & Science 80M Mastery (q-53 .. q-62)
  // =========================================================================
  {
    id: 'q-53',
    subjectSlug: 'biology',
    topicSlug: 'bio-our-environment',
    subtopicTitle: 'Natural vs Artificial Ecosystem',
    type: 'mcq',
    marks: 1,
    question:
      'Why does a home **aquarium** need to be cleaned regularly, whereas a natural **pond or lake** does not?',
    options: [
      'Aquariums contain too many decomposers that eat all the fish',
      'An aquarium is an incomplete artificial ecosystem lacking a self-sustaining web of decomposers and nutrient recycling',
      'Sunlight cannot enter glass aquariums',
      'Ponds have zero biotic components',
    ],
    correctIndex: 1,
    explanation:
      'Natural ponds possess full decomposer communities (bacteria/fungi) and circulation to recycle organic wastes; aquariums lack these complete natural cycles.',
  },
  {
    id: 'q-54',
    subjectSlug: 'biology',
    topicSlug: 'bio-our-environment',
    subtopicTitle: '1% Solar + 10% Law Numerical',
    type: 'mcq',
    marks: 1,
    question:
      'In the food chain **Sun → Grass (`T₁`) → Deer (`T₂`) → Tiger (`T₃`)**, **`50,000 J`** of solar energy falls on the grass. How much energy will be available to the **Tiger**?',
    options: [
      '`500 J`',
      '`50 J`',
      '`5 J`',
      '`0.5 J`',
    ],
    correctIndex: 2,
    explanation:
      'Grass captures **only `1%`** of sunlight = `(1/100) × 50,000 = 500 J`. Deer receives `10%` of `500 J = 50 J`. Tiger receives `10%` of `50 J` = **`5 J`**!',
    commonMistake: 'Do NOT apply 10% directly to sunlight (50,000 J)! Green plants capture only 1% of incident solar radiation.',
  },
  {
    id: 'q-55',
    subjectSlug: 'biology',
    topicSlug: 'bio-our-environment',
    subtopicTitle: 'Reverse 10% Energy Law',
    type: 'mcq',
    marks: 1,
    question:
      'In the food chain **Plants → Grasshopper → Frog → Snake → Eagle**, if **`10 J`** of energy is available to the **Snake**, how much energy was stored at the **Plants (Producer)** level?',
    options: [
      '`100 J`',
      '`1,000 J`',
      '`10,000 J`',
      '`100,000 J`',
    ],
    correctIndex: 2,
    explanation:
      'Going backward by `×10` per trophic step: Snake = `10 J` → Frog = `100 J` → Grasshopper = `1,000 J` → **Plants = `10,000 J`**!',
  },
  {
    id: 'q-56',
    subjectSlug: 'biology',
    topicSlug: 'bio-our-environment',
    subtopicTitle: 'Short Food Chains',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** Food chains in nature generally consist of only three or four trophic steps.\n**Reason (R):** Only about `10%` of the energy at any trophic level transfers to the next level, leaving negligible usable energy after the 4th step.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Because `90%` of energy dissipates as heat/metabolism at each step, very little usable energy remains after 3–4 steps.',
  },
  {
    id: 'q-57',
    subjectSlug: 'biology',
    topicSlug: 'bio-our-environment',
    subtopicTitle: 'DDT Biological Magnification',
    type: 'mcq',
    marks: 1,
    question:
      'In an aquatic food chain polluted with **`DDT`**: `Water → Phytoplankton → Zooplankton → Small Fish → Fish-Eating Bird`, which organism shows the **HIGHEST concentration of `DDT`**?',
    options: [
      'Phytoplankton',
      'Zooplankton',
      'Small Fish',
      'Fish-Eating Bird (Top Carnivore)',
    ],
    correctIndex: 3,
    explanation:
      'By **Biological Magnification**, non-biodegradable `DDT` accumulates without breakdown or excretion, peaking in the top trophic level (`~25 ppm` vs `0.003 ppb` in water).',
  },
  {
    id: 'q-58',
    subjectSlug: 'biology',
    topicSlug: 'bio-our-environment',
    subtopicTitle: 'Unidirectional Energy Flow',
    type: 'mcq',
    marks: 1,
    question:
      'Which statement accurately describes the flow of **energy** versus **nutrients** in an ecosystem?',
    options: [
      'Energy flows cyclically while nutrients flow unidirectionally',
      'Energy flow is strictly unidirectional (`Sun → T₁ → T₂ → T₃`), whereas nutrients are recycled by decomposers',
      'Both energy and nutrients flow backward from carnivores to plants',
      'Energy is recycled back to the Sun by decomposers',
    ],
    correctIndex: 1,
    explanation:
      'Energy captured by autotrophs never returns to the Sun (unidirectional), whereas decomposers recycle mineral nutrients back into soil for plants.',
  },
  {
    id: 'q-59',
    subjectSlug: 'biology',
    topicSlug: 'bio-our-environment',
    subtopicTitle: 'Stratospheric Ozone Formation',
    type: 'mcq',
    marks: 1,
    question:
      'How is **Ozone (`O₃`)** formed naturally in the upper atmosphere (stratosphere)?',
    options: [
      'High-energy UV splits `O₂` into free `O` atoms, which combine with intact `O₂` to form `O₃`',
      'CFCs combine with nitrogen gas in sunlight',
      'Plants exhale `O₃` directly through stomata at night',
      'Lightning converts `CO₂` into `O₃`',
    ],
    correctIndex: 0,
    explanation:
      'NCERT equations: `O₂ —(UV)→ O + O`, then `O + O₂ → O₃`. Stratospheric ozone shields Earth from UV radiation causing skin cancer.',
  },
  {
    id: 'q-60',
    subjectSlug: 'biology',
    topicSlug: 'bio-our-environment',
    subtopicTitle: 'CFC & 1987 UNEP Agreement',
    type: 'mcq',
    marks: 1,
    question:
      'In **1987**, which international body forged an agreement (**Montreal Protocol**) to freeze **CFC** production at 1986 levels and mandate CFC-free refrigerators?',
    options: [
      'WHO (World Health Organization)',
      'UNEP (United Nations Environment Programme)',
      'UNESCO',
      'IMF',
    ],
    correctIndex: 1,
    explanation:
      'The **United Nations Environment Programme (`UNEP`)** succeeded in forging the **1987** agreement freezing `CFC` production to protect the ozone layer.',
  },
  {
    id: 'q-61',
    subjectSlug: 'biology',
    topicSlug: 'bio-our-environment',
    subtopicTitle: 'Enzyme Specificity & Plastics',
    type: 'mcq',
    marks: 1,
    question:
      'Why do bacteria and fungi easily decompose vegetable peels and paper, yet **fail to break down plastic bags** even after decades?',
    options: [
      'Plastics repel rainwater',
      'Microbial enzymes are specific in their action and lack enzymes capable of breaking down synthetic plastic polymers',
      'Plastics kill all bacteria instantly on touch',
      'Vegetable peels contain CFCs that speed up decay',
    ],
    correctIndex: 1,
    explanation:
      'NCERT highlights **enzyme specificity**: enzymes target specific natural bonds (like starch/cellulose), so inert synthetic plastics remain non-biodegradable.',
  },
  {
    id: 'q-62',
    subjectSlug: 'biology',
    topicSlug: 'bio-our-environment',
    subtopicTitle: 'Kulhads vs Paper Cups Case Study',
    type: 'case-based',
    marks: 2,
    casePassage:
      'Years ago, disposable clay cups (kulhads) were introduced on Indian trains to replace plastic cups, but were later discontinued in favour of disposable paper cups.',
    question:
      'Why were clay **kulhads** discontinued on a national scale, and why are **disposable paper cups** preferred over plastic cups?',
    options: [
      'Kulhads melted in hot tea; plastic cups decompose faster than paper',
      'Making millions of kulhads daily stripped massive amounts of fertile topsoil; paper cups are biodegradable and do not persist or magnify toxins like plastics',
      'Kulhads released CFCs into the stratosphere',
      'Paper cups cannot be recycled whereas plastic cups vanish in 2 weeks',
    ],
    correctIndex: 1,
    explanation:
      'Clay kulhads depleted precious **fertile topsoil** at a huge scale, whereas **disposable paper cups** are **biodegradable** and avoid persistent plastic pollution.',
  },
];
