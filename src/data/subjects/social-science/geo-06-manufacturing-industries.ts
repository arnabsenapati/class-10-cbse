import { Subtopic } from '../../../types/curriculum';

export const sstGeo06: Subtopic = {
  id: 'sst-geo-06',
  slug: 'manufacturing-industries',
  title: 'Ch 6: Manufacturing Industries (+ 19 Map Pins)',
  subtitle:
    'Geography | Economic Backbone, 5-Way Classification (OIL Joint, Coir/Sugar Cooperative), Textiles/Jute/Sugar Shift, Steel 4:2:1 & Chhotanagpur, NTPC ISO 14001 & 19 Map Pins',
  estimatedMinutes: 46,
  difficulty: 'Core CBSE',
  ncertSection: 'Geography Chapter 6 — Manufacturing Industries (+ 19 Map Pins)',
  learningObjectives: [
    'Justify why manufacturing sector is considered the backbone of economic development and how agriculture & industry move hand in hand.',
    'Classify industries across 5 criteria (Raw Material, Main Role, Capital Limit ₹1 Crore, Ownership [Joint OIL & Cooperatives], Bulk/Weight).',
    'Explain location factors & shifts in Textiles (Mumbai 1854; Hugli Jute 1855), Sugar (Southern/Western shift), Iron & Steel (4:2:1 Chhotanagpur), Aluminium, Chemicals, Cement (Chennai 1904) & IT (Bengaluru).',
    'Detail the 4 types of industrial pollution, 3-phase effluent treatment, NTPC’s ISO 14001 EMS measures, and master all 19 CBSE Ch 6 Map Pins.',
  ],
  keywords: [
    'Manufacturing Backbone',
    'Joint Cooperative Ownership',
    'Hugli Basin Jute',
    'Sugar Industry South Shift',
    'Iron and Steel 4:2:1 Chhotanagpur',
    'Chemical Industry Largest Consumer',
    'Potash Imported Fertilizers',
    'NTPC ISO 14001',
    '19 Map Pins Ch 6',
  ],
  sections: [
    {
      id: 'geo-06-importance-and-classification',
      title: 'Pillar 1: Manufacturing as Economic Backbone + 5-Way Industry Classification',
      blocks: [
        {
          type: 'quick-summary',
          title: 'Four Reasons Manufacturing Is the Backbone of Development (+ Agriculture Hand-in-Hand)',
          bullets: [
            '1. Modernises Agriculture & Cuts Heavy Farm Dependence: Helps modernise agriculture (backbone of economy) and reduces heavy dependence of people on agricultural income by providing secondary and tertiary jobs.',
            '2. Eradicates Unemployment & Poverty (Regional Balance): Precondition for eradicating poverty & unemployment — public-sector & joint-venture industries were specifically set up to reduce regional disparities across tribal and backward areas.',
            '3. Expands Trade & Foreign Exchange: Export of manufactured goods expands trade and brings in much-needed foreign exchange.',
            '4. Higher Value Prosperity + Hand-in-Hand Link: Countries transforming raw materials into higher-value finished goods prosper. Agriculture and industry are NOT exclusive — agro-industries give agriculture a boost via productivity, depending on farms for raw materials while selling irrigation pumps, fertilisers, insecticides, pesticides, plastic/PVC pipes, machines & tools back to farmers.',
          ],
        },
        {
          type: 'table',
          caption: 'Five-Way Classification of Manufacturing Industries (Guaranteed 3M/5M + Section A)',
          headers: ['Classification Basis', 'Sub-Types & NCERT Examples'],
          rows: [
            [
              '1. Source of Raw Material',
              'Agro-based (cotton, woollen, jute, silk textile, rubber, sugar, tea, coffee, edible oil) vs. Mineral-based (iron & steel, cement, aluminium, machine tools, petrochemicals).',
            ],
            [
              '2. Main Role',
              'Basic / Key industries: Supply products as raw materials to manufacture other goods (iron & steel, copper smelting, aluminium smelting).\nConsumer industries: Produce goods for direct use by consumers (sugar, toothpaste, paper, sewing machines, fans).',
            ],
            [
              '3. Capital Investment',
              'Small-scale industry defined with reference to maximum investment allowed on assets of a unit (limit in NCERT benchmark: Rupees One Crore).',
            ],
            [
              '4. Ownership',
              'Public Sector: Owned & operated by govt agencies (BHEL, SAIL).\nPrivate Sector: Owned & operated by individuals/groups (TISCO, Bajaj Auto Ltd., Dabur Industries).\nJoint Sector: Jointly run by state & individuals/groups — Oil India Ltd. (OIL)!\nCooperative Sector: Owned & operated by producers/suppliers of raw materials, workers or both; pool resources and share profits/losses proportionately — sugar industry in Maharashtra, coir industry in Kerala.',
            ],
            [
              '5. Bulk & Weight of Raw Materials & Finished Goods',
              'Heavy industries (iron and steel) vs. Light industries (use light raw materials and produce light goods such as electrical goods industries).',
            ],
          ],
        },
      ],
    },
    {
      id: 'geo-06-agro-and-mineral-industries',
      title: 'Pillar 2 & 3: Agro-Based (Cotton, Jute, Sugar) & Mineral-Based (Steel, Aluminium, Chemicals, IT)',
      blocks: [
        {
          type: 'table',
          caption: 'Core Industries: Exact First-Mill Dates, Ratios & Locational Factors (Ch 6)',
          headers: ['Industry & Milestone', 'Key Locational Factors & Exam Insights'],
          rows: [
            [
              'Textile Industry (Cotton — 1st Mill: Mumbai, 1854)',
              'ONLY Indian industry self-reliant and complete in the value chain (raw material → highest value-added products). Early Cotton Textiles concentrated in Maharashtra & Gujarat cotton belt due to availability of raw cotton, market, transport incl. accessible port facilities, labour, moist climate. Close links with farming, weaving, ginning, dyeing, designing & packaging.',
            ],
            [
              'Jute Textiles (1st Mill: Rishra near Kolkata, 1855)',
              'India = largest producer of raw jute & jute goods, 2nd largest exporter after Bangladesh. Concentrates along Hugli river (WB, 98 km × 3 km belt) due to: proximity to jute-producing areas, inexpensive water transport, good rail/road/water network, abundant water for raw jute processing, cheap labour from WB + Bihar/Odisha/UP & Kolkata port/banking/insurance.',
            ],
            [
              'Sugar Industry (Why Shifting South & West?)',
              'India = 2nd in sugar, 1st in gur & khandsari. Cane is bulky & loses sucrose on haulage; cooperative sector suits its seasonal nature. Recent shift toward Maharashtra & Southern states because: (1) cane produced here has HIGHER SUCROSE content, (2) COOLER climate ensures a LONGER CRUSHING SEASON, and (3) cooperatives are more successful in these states.',
            ],
            [
              'Iron & Steel (Basic Heavy Industry)',
              'Index of country’s development. Iron ore + Coking coal + Limestone needed in ratio ~ 4 : 2 : 1 (+ manganese to harden steel). Maximum concentration in CHHOTANAGPUR PLATEAU due to: low cost of iron ore, high-grade raw materials in proximity, cheap labour & vast home market growth potential.',
            ],
            [
              'Aluminium, Chemicals, Fertilizers, Cement, Auto & IT',
              'Aluminium Smelting: Light, corrosion-resistant, good heat conductor, malleable; needs regular electricity & low-cost Bauxite (18,600 kWh/t).\nChemicals: Organic (petrochemicals near refineries) vs. Inorganic (sulphuric acid, soda ash — widely spread); chemical industry is its OWN LARGEST CONSUMER!\nFertilizers: Potash is 100% IMPORTED (no commercial reserves in India).\nCement: First plant Chennai (1904); bulky limestone, silica, gypsum; Gujarat access to Gulf.\nIT & Electronics: Bengaluru = "electronic capital of India"; generates huge employment.',
            ],
          ],
        },
      ],
    },
    {
      id: 'geo-06-pollution-ntpc-and-map',
      title: 'Pillar 4: Industrial Pollution, 3-Phase Wastewater Treatment, NTPC EMS & 19 Map Pins',
      blocks: [
        {
          type: 'steps',
          title: 'Four Types of Pollution, 3-Phase Effluent Treatment & NTPC ISO 14001 Best Practices',
          items: [
            {
              label: 'Four Industrial Pollutions',
              detail:
                '(1) Air Pollution: undesirable gases (SO₂, CO) & airborne particulate dust/smoke/toxic leaks; (2) Water Pollution: organic/inorganic effluents from paper, pulp, chemical, textile, dyeing, refineries, tanneries, electroplating + solid wastes (fly ash, phospo-gypsum, iron/steel slags); (3) Thermal & Nuclear Pollution: hot water drained before cooling kills aquatic life, while nuclear wastes cause cancer, birth defects & miscarriages; (4) Noise Pollution: stress, irritation, hearing loss, high BP & heart rate.',
            },
            {
              label: 'Three-Phase Industrial Wastewater Treatment (+ Air/Noise Steps)',
              detail:
                'Minimise water via reuse/recycling in two or more stages + rainwater harvesting; treat effluents before river discharge via: (a) Primary treatment (mechanical: screening, grinding, flocculation, sedimentation), (b) Secondary treatment (biological process), and (c) Tertiary treatment (biological, chemical & physical processes including wastewater recycling). Fit smoke stacks with electrostatic precipitators, fabric filters, scrubbers; use oil/gas instead of coal; fit silencers.',
            },
            {
              label: 'NTPC Proactive Environmental Management System (ISO 14001)',
              detail:
                '(1) Optimum equipment utilisation & latest upgrades; (2) Minimising waste by maximising ash utilisation; (3) Green belts for ecological balance & special purpose vehicles for afforestation; (4) Ash pond management, ash water recycling & liquid waste management; (5) Ecological monitoring, reviews & online database management across power stations.',
            },
          ],
        },
        {
          type: 'table',
          caption: 'COMPULSORY CBSE MAP LIST — Chapter 6 Manufacturing Industries (All 19 Pins — Locating & Labelling)',
          headers: ['Industry Group', 'Exact Centres & State Coordinates to Locate & Label'],
          rows: [
            ['Cotton Textile Industries (5)', 'Mumbai (Maharashtra) | Indore (Madhya Pradesh) | Surat (Gujarat) | Kanpur (Uttar Pradesh) | Coimbatore (Tamil Nadu)'],
            ['Iron and Steel Plants (6)', 'Durgapur (West Bengal) | Bokaro (Jharkhand) | Jamshedpur (Jharkhand) | Bhilai (Chhattisgarh) | Vijayanagar (Karnataka) | Salem (Tamil Nadu)'],
            ['Software Technology Parks (8)', 'Noida (Uttar Pradesh — NCR border) | Gandhinagar (Gujarat) | Mumbai (Maharashtra) | Pune (Maharashtra) | Hyderabad (Telangana) | Bengaluru (Karnataka) | Chennai (Tamil Nadu) | Thiruvananthapuram (Kerala)'],
          ],
        },
      ],
    },
    {
      id: 'geo-06-board-qa',
      title: 'Pillar 5 & 6: 4M Case Box, Student Map Mistake, Checkpoint & 2M/3M/5M Answers',
      blocks: [
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the NTPC case study and answer (1 + 1 + 2 = 4 Marks):\n"NTPC is a major power providing corporation in India. It has ISO certification for EMS (Environment Management System) 14001. The corporation has a proactive approach for preserving the natural environment and resources like water, oil and gas and fuels in places where it is setting up power plants."\n\nQuestions:\n(i) What does ISO 14001 certification signify for NTPC? (1M)\n(ii) Mention the first two phases of treating industrial liquid effluents before releasing them into rivers and ponds. (1M)\n(iii) State any two specific steps taken by NTPC to reduce waste and preserve ecology around its thermal stations. (2M)',
          answer:
            '(i) It certifies that NTPC follows an internationally recognised Environment Management System (EMS) for preserving natural resources and checking pollution.\n(ii) Primary treatment (mechanical means: screening, grinding, flocculation & sedimentation) and Secondary treatment (biological process).\n(iii) Two NTPC steps: (1) Maximising ash utilisation alongside ash pond management, ash water recycling & liquid waste management; (2) Providing green belts to nurture ecological balance and appointing special purpose vehicles for afforestation (plus online ecological monitoring).',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Ishaan',
          title: 'Three Frequent Ch 6 Classification & Steel Plant Map Mistakes',
          wrongWork:
            '1) "Oil India Ltd. (OIL) is a fully Private Sector company."\n2) "Bhilai steel plant is in Jharkhand, and Bokaro is in West Bengal."\n3) "India exports huge reserves of Potash fertilisers mined in Rajasthan."',
          teacherFix:
            '1) Oil India Ltd. (OIL) is NCERT’s flagship example of a JOINT SECTOR industry (jointly run by state & private individuals).\n2) Jharkhand has BOTH Bokaro and Jamshedpur; Chhattisgarh has Bhilai; West Bengal has Durgapur; Karnataka has Vijayanagar; Tamil Nadu has Salem.\n3) Potash is ENTIRELY IMPORTED because India has NO reserves of commercially usable potash or potassium compounds!',
          whyWrong:
            'Joint vs. Cooperative ownership, Potash import reliance, and the 6 Iron & Steel plant states are high-yield Section A & Q37b traps.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Select the TWO correct statements about Manufacturing Industries (Ch 6):',
          options: [
            {
              id: 'sugar-shift',
              label: 'Sugar mills have shifted toward Maharashtra & Southern states partly because higher sucrose content and cooler climate extend the crushing season.',
            },
            {
              id: 'chemical-self',
              label: 'The chemical industry is its own largest consumer, processing basic chemicals further for industrial, agricultural & consumer uses.',
            },
            {
              id: 'first-jute-mumbai',
              label: 'India’s first jute mill was established in Mumbai in 1854.',
            },
            {
              id: 'salem-bihar',
              label: 'Salem Iron & Steel Plant is located in Bihar.',
            },
          ],
          correctIds: ['sugar-shift', 'chemical-self'],
          multiSelect: true,
          successMsg:
            'Spot on! Sugar’s south-westward shift and the chemical industry being its own largest consumer are classic NCERT board points. Mumbai (1854) was the first COTTON mill (Rishra 1855 was first Jute mill), and Salem is in Tamil Nadu.',
          hintMsg:
            'Check which mill opened in Mumbai in 1854 vs. Rishra (Kolkata) in 1855, and locate Salem!',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'Distinguish between Joint Sector and Cooperative Sector industries with one NCERT example each.',
          answer:
            '1. Joint Sector: Jointly owned and operated by the state and individuals or a group of individuals — e.g., Oil India Ltd. (OIL).\n2. Cooperative Sector: Owned and operated by producers/suppliers of raw materials, workers or both, pooling resources and sharing profit/loss proportionately — e.g., sugar industry in Maharashtra or coir industry in Kerala.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            '"Agriculture and industry are not exclusive of each other. They move hand in hand." Substantiate with three arguments.',
          answer:
            '1. Agro-Industrial Productivity Boost: Industries give agriculture a major boost by manufacturing modern inputs — irrigation pumps, fertilisers, insecticides, pesticides, PVC pipes, machines, and tools.\n2. Raw Material Supply: Agro-based industries (cotton, jute, sugar, edible oil, tea) depend directly on agricultural produce as raw materials.\n3. Income & Employment Relief: Industrial processing raises crop value and absorbs surplus rural labour, strengthening the entire rural–urban market.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Why is the Chhotanagpur plateau region home to the maximum concentration of Iron and Steel industries in India? Also state the raw material ratio required for steel.',
          answer:
            'Raw Material Ratio: Iron ore, coking coal, and limestone are required roughly in the ratio of 4 : 2 : 1 (along with small quantities of manganese to harden steel).\nReasons for Chhotanagpur Plateau Concentration:\n1. Low Cost of Iron Ore: Rich hematite reserves occur nearby in Odisha (Mayurbhanj/Kendujhar) and Jharkhand (Singhbhum), slashing heavy haulage costs.\n2. Proximity of High-Grade Raw Materials: Coking coal (Jharia, Raniganj, Bokaro) and limestone/dolomite lie in the immediate vicinity.\n3. Cheap & Abundant Labour: Adjoining densely populated belts of Jharkhand, Bihar, Odisha, and West Bengal supply affordable manpower.\n4. Vast Home Market Potential: Industrial belts and port access (Kolkata/Haldia/Paradwip) create steady domestic and export demand.\n5. Well-Developed Rail & River Infrastructure: Eastern/South-Eastern railways and Damodar valley power support heavy plant operations.',
        },
      ],
    },
  ],
};
