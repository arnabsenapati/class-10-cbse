import { Subtopic } from '../../../types/curriculum';

export const sstGeo01: Subtopic = {
  id: 'sst-geo-01',
  slug: 'resources-and-development',
  title: 'Ch 1: Resources and Development (+ Soil Map)',
  subtitle:
    'Geography | Resource Planning, Rio 1992 & Agenda 21, Land Use & Degradation States, 6 Indian Soil Zones Profile & Soil Conservation Methods',
  estimatedMinutes: 40,
  difficulty: 'Core CBSE',
  ncertSection: 'Geography Chapter 1 — Resources and Development (+ Soil Map)',
  learningObjectives: [
    'Define resources (technologically accessible, economically feasible, culturally acceptable) and trace the 3 stages of Resource Planning in India.',
    'Connect Sustainable Development, the June 1992 Rio Earth Summit, Agenda 21, and Gandhiji’s resource philosophy.',
    'Map India’s land relief (43% plains, 30% mountains, 27% plateaus), Net Sown Area extremes, and state-wise causes of land degradation.',
    'Distinguish all 6 Indian soil types (especially Khadar vs. Bangar, Black/Regur, Laterite leaching, Arid kankar) for Map Identification and explain soil conservation.',
  ],
  keywords: [
    'Resource Planning India',
    'Agenda 21 Rio 1992',
    'Brundtland 1987',
    'Net Sown Area',
    'Land Degradation States',
    'Khadar vs Bangar',
    'Black Regur Soil',
    'Laterite Soil',
    'Chambal Ravines',
    'Contour Terrace Strip Shelter Belt',
  ],
  sections: [
    {
      id: 'geo-01-resources-and-planning',
      title: 'Pillar 1: Resources, Sustainable Development (Rio 1992 / Agenda 21) & Planning in India',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Concept Anchor: What Makes Anything a "Resource"?',
          bullets: [
            'Three Criteria of a Resource: Everything available in our environment satisfying needs provided it is (1) technologically accessible, (2) economically feasible, and (3) culturally acceptable. Resources are a function of human activities interacting with nature, technology, and institutions.',
            'Three Problems of Indiscriminate Use: (1) Depletion of resources for satisfying greed of a few individuals; (2) Accumulation in few hands creating "haves" and "have-nots"; (3) Global ecological crises — global warming, ozone layer depletion, environmental pollution, and land degradation.',
            'Rio de Janeiro Earth Summit (June 1992, Brazil): >100 heads of state met for the 1st International Earth Summit; signed Declaration on Global Climatic Change and Biological Diversity, endorsed Global Forest Principles, and adopted Agenda 21 for 21st-century sustainable development.',
            'Agenda 21 Core Aim: Achieve global sustainable development by combating environmental damage, poverty, and disease through global co-operation; major objective is every local government should draw its own local Agenda 21.',
          ],
        },
        {
          type: 'steps',
          title: 'Three Stages of Resource Planning in India + Conservation Milestones',
          items: [
            {
              label: 'Stage 1 — Identification & Inventory Across Regions',
              detail:
                'Involves surveying, mapping, and qualitative and quantitative estimation and measurement of resources across India’s diverse regions (e.g., Jharkhand/Chhattisgarh/MP rich in minerals vs. Arunachal abundant in water vs. Rajasthan rich in solar/wind vs. cold desert Ladakh rich in culture but poor in water/infra).',
            },
            {
              label: 'Stage 2 — Planning Structure',
              detail:
                'Evolving a planning structure endowed with appropriate technology, skill, and institutional set up for implementing resource development plans.',
            },
            {
              label: 'Stage 3 — Integration with National Plans',
              detail:
                'Matching the resource development plans with overall national development plans (followed since India’s First Five Year Plan).',
            },
            {
              label: 'Conservation Pioneers (Frequent 1M/3M Citation)',
              detail:
                'Mahatma Gandhi: "There is enough for everybody’s need and not for any body’s greed." Milestones: Club of Rome advocated conservation systematically (1968); E.F. Schumacher presented Gandhian philosophy in Small is Beautiful (1974); Brundtland Commission Report (1987) introduced "Sustainable Development" in Our Common Future.',
            },
          ],
        },
      ],
    },
    {
      id: 'geo-01-land-use-and-degradation',
      title: 'Pillar 2: Land Utilisation & State-to-Cause Land Degradation Matrix',
      blocks: [
        {
          type: 'callout',
          variant: 'ncert',
          title: 'India’s Land Relief Split & Extreme State Contrasts',
          body: 'Memorise these benchmark Indian land figures from NCERT Figure 1.3 & Text:',
          bullets: [
            'Relief Split: Plains 43% (agriculture & industry), Mountains 30% (perennial rivers, tourism, ecological aspects), Plateaus 27% (minerals, fossil fuels & forests).',
            'Forest Target Gap: National Forest Policy (1952) desired 33% geographical area under forests for ecological balance, far higher than current cover.',
            'Net Sown Area (NSA) Extremes: Over 80% of total area in Punjab and Haryana, compared to less than 10% in Arunachal Pradesh, Mizoram, Manipur, and Andaman & Nicobar Islands.',
          ],
        },
        {
          type: 'table',
          caption: 'Land Degradation in India: Human Cause → Affected States → Conservation Remedy',
          headers: ['Primary Human Cause', 'Worst-Affected Indian States', 'Conservation / Control Measures'],
          rows: [
            [
              'Deforestation due to Mining (deep scars & over-burdening)',
              'Jharkhand, Chhattisgarh, Madhya Pradesh, and Odisha',
              'Strict control of mining activities & afforestation of mined wastelands.',
            ],
            [
              'Overgrazing by livestock',
              'Gujarat, Rajasthan, Madhya Pradesh, and Maharashtra',
              'Proper management of grazing lands, thorny-bush planting & sand-dune stabilisation.',
            ],
            [
              'Over-irrigation causing waterlogging → higher soil salinity & alkalinity',
              'Punjab, Haryana, and Western Uttar Pradesh',
              'Controlled irrigation, drainage & crop-diversification.',
            ],
            [
              'Mineral processing dust (limestone grinding in cement; calcite/soapstone in ceramics) + industrial effluents',
              'Industrial belts across states (blocks water infiltration into soil)',
              'Proper discharge and treatment of industrial effluents & wastes after treatment.',
            ],
          ],
        },
      ],
    },
    {
      id: 'geo-01-soils-and-erosion',
      title: 'Pillar 3 & 4: Interactive Soil Profile & 6 Indian Soil Zones + Soil Erosion Controls',
      blocks: [
        {
          type: 'visual-diagram',
          diagramId: 'soil-profile-and-india-zones',
          title: 'Interactive Soil Horizons (NCERT Fig 1.5) & 6 Indian Soil Zones Decoder (Ch 1 Map)',
          caption:
            'Inspect the 4 vertical horizons on Tab 1, then click all 6 soil types on Tab 2 for composition, crops, and CBSE Map regions.',
        },
        {
          type: 'table',
          caption: 'Khadar vs. Bangar + Erosion Types & Conservation Methods (Guaranteed 3M/5M)',
          headers: ['Concept / Method', 'Key Geographical Mechanism & Indian Example'],
          rows: [
            [
              'Bangar vs. Khadar (Alluvial Age Subtypes)',
              'Bangar (Old Alluvial): Higher concentration of kankar nodules, coarser, less fertile.\nKhadar (New Alluvial): More fine particles and significantly more fertile than bangar (deposited near active floodplains; upper piedmont zones known as Duars, Chos & Terai).',
            ],
            [
              'Gully Erosion (Bad Land / Ravines)',
              'Running water cuts through clayey soils making deep channels called gullies, rendering land unfit for cultivation ("bad land"); in the Chambal basin such eroded lands are called ravines.',
            ],
            [
              'Sheet Erosion & Wind Erosion',
              'Sheet erosion: Water flows as a sheet over large areas down a slope washing away topsoil.\nWind erosion: Wind blows loose soil off flat or sloping land.',
            ],
            [
              'Four Mechanical & Biological Soil Conservation Methods',
              '1. Contour Ploughing: Ploughing along contour lines decelerates water flow down slopes.\n2. Terrace Cultivation: Cutting steps on slopes (Western & Central Himalayas) restricts erosion.\n3. Strip Cropping: Large fields divided into strips; strips of grass left between crops break wind force.\n4. Shelter Belts: Planting rows of trees to shelter wind; effectively stabilised western Indian sand dunes.',
            ],
          ],
        },
      ],
    },
    {
      id: 'geo-01-board-qa',
      title: 'Pillar 5 & 6: 4M Case Extract, Student Mistake Trap, Checkpoint & 2M/3M/5M Answers',
      blocks: [
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the case passage and answer (1 + 1 + 2 = 4 Marks):\n"In June 1992, more than 100 heads of states met in Rio de Janeiro in Brazil, for the first International Earth Summit. The Summit was convened for addressing urgent problems of environmental protection and socio-economic development at the global level. The assembled leaders signed the Declaration on Global Climatic Change and Biological Diversity, endorsed global Forest Principles and adopted Agenda 21 for achieving Sustainable Development in the 21st century."\n\nQuestions:\n(i) Where and when was the first International Earth Summit held? (1M)\n(ii) What does "Sustainable Economic Development" mean according to NCERT? (1M)\n(iii) Mention any two objectives of Agenda 21 adopted at the summit. (2M)',
          answer:
            '(i) Rio de Janeiro (Brazil) in June 1992.\n(ii) Sustainable economic development means development should take place without damaging the environment, and development in the present should not compromise with the needs of future generations.\n(iii) Two objectives of Agenda 21: (1) To combat environmental damage, poverty, and disease through global co-operation on common interests, mutual needs, and shared responsibilities; (2) Every local government should draw up its own local Agenda 21.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Arjun',
          title: 'Three Frequent Geography Ch 1 Mix-Ups',
          wrongWork:
            '1) "Land degradation in Punjab and Haryana is caused by mining."\n2) "Bangar is more fertile than Khadar because it has kankar nodules."\n3) "Black soil is rich in phosphoric content."',
          teacherFix:
            '1) Punjab, Haryana & Western UP suffer land degradation due to OVER-IRRIGATION (waterlogging → salinity/alkalinity). Mining causes degradation in Jharkhand, Chhattisgarh, MP & Odisha.\n2) Khadar (new alluvial, finer particles) is MORE fertile; Bangar (old alluvial) has higher kankar nodules.\n3) Black (Regur) soil is rich in calcium carbonate, magnesium, potash & lime, but generally POOR in phosphoric content.',
          whyWrong:
            'CBSE Section A MCQs and Assertion–Reason items directly test exact state–cause pairs and soil nutrient exceptions.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Which TWO statements accurately match Geography Chapter 1 facts?',
          options: [
            {
              id: 'laterite',
              label: 'Laterite soil develops under tropical/subtropical climate with heavy-rain leaching and supports cashew nuts in Tamil Nadu, AP & Kerala.',
            },
            {
              id: 'ravines',
              label: 'Deep gullies cut through clayey soil in the Chambal basin create bad land locally called "ravines".',
            },
            {
              id: 'nsa-arunachal',
              label: 'Arunachal Pradesh and Mizoram have over 80% Net Sown Area.',
            },
            {
              id: 'black-phosphate',
              label: 'Regur (Black) soil gets its aeration solely from wind erosion.',
            },
          ],
          correctIds: ['laterite', 'ravines'],
          multiSelect: true,
          successMsg:
            'Correct! Laterite leaching/cashew nut regions and Chambal ravines are verbatim NCERT points. Arunachal/Mizoram have <10% NSA, and Black soil gets deep cracks during hot weather for self-aeration.',
          hintMsg:
            'Check which states have >80% NSA (Punjab & Haryana) vs. <10% NSA (Arunachal, Mizoram, Manipur, A&N).',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'Distinguish between Khadar and Bangar soils on any two bases.',
          answer:
            '1. Age & Location: Bangar is old alluvial found away from active floodplains, whereas Khadar is new alluvial deposited on floodplains.\n2. Texture & Fertility: Bangar has a higher concentration of kankar nodules and is less fertile; Khadar has finer particles and is much more fertile.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'Why is resource planning essential in a country like India? Explain with three regional examples.',
          answer:
            'India has enormous diversity in resource availability across regions:\n1. Mineral Rich vs. Basic Lack: Jharkhand, Chhattisgarh, and Madhya Pradesh are rich in minerals and coal deposits, while lacking matching industrial infrastructure.\n2. Water vs. Infrastructure: Arunachal Pradesh has abundant water resources, yet lacks infrastructural development.\n3. Solar/Wind vs. Water Scarcity: Rajasthan is richly endowed with solar and wind energy, but lacks water resources (similarly, cold desert Ladakh has rich cultural heritage yet lacks water, infrastructure, and vital minerals).',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Describe any five characteristics of Black (Regur) Soil and name three steps to control soil erosion in hilly and arid areas.',
          answer:
            'Characteristics of Black (Regur) Soil:\n1. Ideal for Cotton: Also called Black Cotton Soil; covers Deccan trap (basalt) plateaus of Maharashtra, Saurashtra, Malwa, MP, and Chhattisgarh.\n2. Extremely Clayey & Moisture-Retentive: Made of fine clayey material well-known for its high capacity to hold moisture.\n3. Rich & Deficient Nutrients: Rich in calcium carbonate, magnesium, potash, and lime, though generally poor in phosphoric contents.\n4. Self-Aeration Cracks & Sticky Texture: Develops deep cracks during hot weather helping proper soil aeration, and turns sticky when wet (requiring pre-monsoon/first-shower tilling).\nSoil Erosion Controls (5th Point):\n5. Terrace cultivation and contour ploughing curb sheet/gully erosion in hills (Himalayas), while strip cropping and rows of shelter-belt trees stabilise sand dunes against wind erosion in western India.',
        },
      ],
    },
  ],
};
