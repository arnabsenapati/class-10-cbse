import { Subtopic } from '../../../types/curriculum';

export const sstGeo04: Subtopic = {
  id: 'sst-geo-04',
  slug: 'agriculture',
  title: 'Ch 4: Agriculture (+ Rice/Wheat & Crop Map)',
  subtitle:
    'Geography | Farming Types (Jhumming & Plantation), Rabi–Kharif–Zaid Wheel, Master 12-Crop Climate/State Table, Tech/Institutional Reforms (KCC/PAIS), Bhoodan–Gramdan & Crop Map',
  estimatedMinutes: 46,
  difficulty: 'Core CBSE',
  ncertSection: 'Geography Chapter 4 — Agriculture (+ Crop Map Identification)',
  learningObjectives: [
    'Contrast Primitive Subsistence (regional Indian & global Slash-and-Burn names), Intensive Subsistence, and Commercial/Plantation agriculture.',
    'Classify major crops across Rabi, Kharif, and Zaid seasons (including 3 paddy crops Aus, Aman, Boro).',
    'Memorise temperature, rainfall, soil, and producer states for Rice, Wheat, Millets, Maize, Pulses, Sugarcane, Tea, Coffee (Arabica), Rubber, Cotton & Jute.',
    'Explain India’s technological & institutional reforms (KCC, PAIS, MSP, Crop Insurance) and Vinoba Bhave’s Bhoodan–Gramdan ("Blood-less Revolution").',
  ],
  keywords: [
    'Jhumming Pamlou Milpa',
    'Rabi Kharif Zaid',
    'Aus Aman Boro',
    'Jowar Bajra Ragi',
    'Arhar leguminous trap',
    'Arabica Baba Budan Hills',
    'Golden Fibre Jute',
    'KCC PAIS MSP',
    'Bhoodan Gramdan Vinoba Bhave',
    'Agriculture Crop Map',
  ],
  sections: [
    {
      id: 'geo-04-farming-types',
      title: 'Pillar 1: Three Farming Systems & Regional "Slash-and-Burn" Names',
      blocks: [
        {
          type: 'table',
          caption: 'Types of Farming in India (Comparative 3M/5M Framework)',
          headers: ['Farming System', 'Tools, Inputs & Scale', 'Regional Features & Examples'],
          rows: [
            [
              'Primitive Subsistence ("Slash and Burn")',
              'Small land patches; primitive tools (hoe, dao, digging sticks); family/community labour; depends on monsoon & natural soil fertility.',
              'India names: Jhumming (Assam, Meghalaya, Mizoram, Nagaland), Pamlou (Manipur), Dipa (Bastar in Chhattisgarh & A&N), Bewar/Dahiya (MP), Podu/Penda (AP), Pama Dabi/Koman/Bringa (Odisha), Kumari (Western Ghats), Valre/Waltre (SE Rajasthan), Khil (Himalayan belt), Kuruwa (Jharkhand).\nGlobal names: Milpa (Mexico/Central America), Conuco (Venezuela), Roca (Brazil), Masole (Central Africa), Ladang (Indonesia), Ray (Vietnam).',
            ],
            [
              'Intensive Subsistence Farming',
              'Practised in areas of high population pressure on land; labour-intensive; uses high doses of biochemical inputs & irrigation.',
              'Right of inheritance successively divides landholdings rendering plots uneconomical, pushing farmers for maximum output from limited land.',
            ],
            [
              'Commercial Farming & Plantation',
              'Higher doses of HYV seeds, chemical fertilisers, insecticides & pesticides for market sale (degree varies by region: Rice = commercial in Punjab/Haryana, subsistence in Odisha).',
              'Plantation = interface of agriculture & industry: a single crop grown over a large area using capital-intensive inputs & migrant labour; produce feeds industry (Tea in Assam/N. Bengal, Coffee in Karnataka, Rubber, Sugarcane, Banana). Requires well-developed transport & communication network.',
            ],
          ],
        },
      ],
    },
    {
      id: 'geo-04-seasons-and-major-crops',
      title: 'Pillar 2 & 3: Interactive Cropping Wheel & Master Crop Attribute Matrix',
      blocks: [
        {
          type: 'visual-diagram',
          diagramId: 'cropping-seasons-wheel',
          title: 'Rabi • Kharif • Zaid Seasonal Cycle & 10 Major Crop Requirement Cards',
          caption:
            'Check sowing/harvest months on Tab 1 and filter climate/soil specs by season on Tab 2.',
        },
        {
          type: 'table',
          caption: 'Complete NCERT Major Crops & Producer States Matrix (Map + Theory Ready)',
          headers: ['Crop (Category)', 'Climate, Rainfall & Soil Requirements', 'CBSE Map Producer States & Key Facts'],
          rows: [
            [
              'Rice (Kharif Cereal #1)',
              'High temp >25°C, high humidity, >100 cm rainfall (canal/tubewell irrigation in drier belts).',
              'Plains of North & NE India, Coastal areas, Deltaic regions (WB, UP, Punjab, Haryana, Odisha, Bihar). Note: 3 annual crops — Aus, Aman & Boro in Assam, WB & Odisha.',
            ],
            [
              'Wheat (Rabi Cereal #2)',
              'Cool growing season + bright sunshine at ripening; 50–75 cm evenly distributed rain.',
              'Two key zones: Ganga–Satluj plains (NW) & Black soil Deccan region. States: Punjab, Haryana, UP, MP, Bihar, Rajasthan.',
            ],
            [
              'Millets (Coarse Grains — High Nutrition)',
              'Jowar: Rain-fed moist areas (needs little irrigation).\nBajra: Sandy & shallow black soil.\nRagi: Dry regions on red, black, sandy, loamy & shallow black soils.',
              'Jowar: MH, KA, AP, MP.\nBajra: Rajasthan, UP, MH, Gujarat, Haryana.\nRagi (very rich in iron, calcium, micro-nutrients & roughage): Karnataka, TN, HP, Uttarakhand, Sikkim, Jharkhand, Arunachal.',
            ],
            [
              'Maize & Pulses',
              'Maize: Kharif (Rabi in Bihar), 21–27°C, old alluvial soil.\nPulses: Dry tolerant; leguminous — restore soil fertility by fixing atmospheric nitrogen EXCEPT ARHAR (TUR).',
              'Maize: KA, MP, UP, Bihar, AP, Telangana.\nPulses (India largest producer & consumer; tur/arhar, urad, moong, masur, peas, gram): MP, Rajasthan, MH, UP, Karnataka.',
            ],
            [
              'Sugarcane & Oilseeds',
              'Sugarcane: Tropical/subtropical; 21–27°C, 75–100 cm rain; manual sowing to harvest; takes almost a year.\nOilseeds: Cover ~12% total cropped area.',
              'Sugarcane (2nd largest globally after Brazil): UP, MH, KA, TN, AP, Telangana, Bihar, Punjab, Haryana.\nOilseeds: Groundnut (Kharif ~50% oilseeds — Gujarat #1, Rajasthan, TN); Mustard/Linseed (Rabi); Sesamum (Kharif in North, Rabi in South!); Castor (both Rabi & Kharif).',
            ],
            [
              'Tea & Coffee (Beverage Plantations)',
              'Tea: Tropical/subtropical deep fertile well-drained soil rich in humus & organic matter; warm moist frost-free climate + frequent evenly distributed showers; labour-intensive.\nCoffee: Cool hilly tropical tracts.',
              'Tea Map States: Assam, Darjeeling & Jalpaiguri (West Bengal), Tamil Nadu, Kerala.\nCoffee: India’s Arabica variety (originally from Yemen) started at Baba Budan Hills; today confined to Nilgiris in Karnataka, Kerala & Tamil Nadu.',
            ],
            [
              'Rubber, Cotton & Jute (Non-Food & Fibres)',
              'Rubber: Equatorial; moist & humid, >200 cm rain, >25°C.\nCotton: Black Deccan soil, high temp, light rain/irrigation, 210 frost-free days & bright sunshine (6–8 months to mature).\nJute ("Golden Fibre"): Well-drained fertile floodplain soil renewed yearly; high temperature.',
              'Rubber: Kerala, TN, KA, A&N Islands, Garo Hills (Meghalaya).\nCotton: Maharashtra, Gujarat, MP, Karnataka, AP, Telangana, TN, Punjab, Haryana, UP.\nJute: West Bengal, Bihar, Assam, Odisha, Meghalaya. (Sericulture = rearing of silkworms on mulberry leaves for natural silk).',
            ],
          ],
        },
      ],
    },
    {
      id: 'geo-04-reforms-and-map',
      title: 'Pillar 4: Tech & Institutional Reforms (KCC, PAIS, MSP) + Bhoodan–Gramdan & CBSE Crop Map',
      blocks: [
        {
          type: 'steps',
          title: 'Two Waves of Agricultural Reforms & Vinoba Bhave’s Blood-less Revolution',
          items: [
            {
              label: '1st Five Year Plan Institutional Reforms',
              detail:
                'Collectivisation, consolidation of holdings, cooperation, and abolition of zamindari were given top priority ("land reform" was the focus of the First Five Year Plan).',
            },
            {
              label: '1960s–1970s: Technological Revolutions',
              detail:
                'Green Revolution (package technology for wheat/rice yields in selective areas like Punjab, Haryana, W. UP) and White Revolution (Operation Flood for dairy).',
            },
            {
              label: '1980s–1990s Comprehensive Land Development Programme',
              detail:
                'Combined institutional + technical reforms: Provision for crop insurance against drought, flood, cyclone, fire and disease; establishment of Grameen banks, cooperative societies & low-interest bank loans; Kisan Credit Card (KCC) and Personal Accident Insurance Scheme (PAIS); special weather bulletins & agricultural programmes on radio/TV; announcing Minimum Support Price (MSP) and remunerative/procurement prices to curb middleman exploitation.',
            },
            {
              label: 'Bhoodan–Gramdan ("Blood-less Revolution") — Vinoba Bhave',
              detail:
                'Declared Mahatma Gandhi’s spiritual heir; walked across India for Gram Swarajya. At Pochampalli (Andhra Pradesh / now Telangana), landless poor villagers asked for 80 acres; Shri Ram Chandra Reddy stood up and voluntarily offered 80 acres among 80 villagers (Bhoodan). Later zamindars offered entire villages (Gramdan) — widely known as the Blood-less Revolution.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'CBSE Chapter 4 Map Identification Checklist (Identification ONLY in Board Paper)',
          body: 'Look at the shaded/outlined state or belt on the India outline map:',
          bullets: [
            'Major Rice Areas: East & Coastal belt (West Bengal, Odisha, AP coastal delta, Tamil Nadu, Assam, Bihar, Eastern UP) + irrigated Punjab/Haryana.',
            'Major Wheat Areas: North-Western plains (Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, Bihar, Rajasthan).',
            'Largest / Major Producer States for Map Identification: Sugarcane → Uttar Pradesh (plus MH/KA); Tea → Assam (plus WB Darjeeling); Coffee → Karnataka (Nilgiris/Baba Budan); Rubber → Kerala; Cotton → Gujarat & Maharashtra; Jute → West Bengal (Hooghly delta).',
          ],
        },
      ],
    },
    {
      id: 'geo-04-board-qa',
      title: 'Pillar 5 & 6: 4M Case Box, Student Mistake Trap, Checkpoint & 2M/3M/5M Answers',
      blocks: [
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the extract on Jhumming and answer (1 + 1 + 2 = 4 Marks):\n"In this type of farming, farmers clear a patch of land and produce cereals and other food crops to sustain their family. When the soil fertility decreases, the farmers shift and clear a fresh patch of land for cultivation. This type of shifting allows Nature to replenish the fertility of the soil through natural processes; land productivity in this type of agriculture is low as the farmer does not use fertilisers or other modern inputs."\n\nQuestions:\n(i) Identify this farming type and state its regional name in North-Eastern states (Assam, Meghalaya, Mizoram, Nagaland) and in Central America/Mexico. (1M)\n(ii) Why does productivity remain low under this system? (1M)\n(iii) Contrast this farming with Commercial Farming using two clear differences. (2M)',
          answer:
            '(i) Primitive Subsistence Farming ("slash and burn" agriculture) — known as "Jhumming" in North-Eastern India and "Milpa" in Mexico & Central America.\n(ii) Productivity remains low because farmers rely on primitive tools and natural monsoon/fertility without fertilisers or modern biochemical inputs.\n(iii) Two differences: (1) Scale & Purpose: Primitive subsistence feeds only the farmer’s family on small patches, whereas Commercial farming targets market profit across larger holdings; (2) Inputs: Primitive avoids chemical fertilisers/HYV seeds, whereas Commercial uses high doses of HYV seeds, chemical fertilisers, pesticides & modern machines.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Sneha',
          title: 'Three Frequent Tricky Exceptions in Agriculture Chapter 4',
          wrongWork:
            '1) "Every pulse crop, including Arhar (Tur), fixes nitrogen equally well."\n2) "Sesamum is always a Kharif crop across the entire country."\n3) "Ragi is poor in minerals compared to polished rice."',
          teacherFix:
            '1) Exception alert! Being leguminous, most pulses (urad, moong, masur, peas, gram) restore soil fertility by fixing nitrogen from air, EXCEPT ARHAR (TUR).\n2) Sesamum (Til) is a KHARIF crop in North India and a RABI crop in South India!\n3) Ragi is a nutritional powerhouse — VERY RICH in iron, calcium, other micro-nutrients, and roughage.',
          whyWrong:
            'NCERT italicises or specifies these exact exceptions on pages 34–38, making them prime Section A Assertion–Reason questions.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Select the TWO correct geographical statements from Agriculture Ch 4:',
          options: [
            {
              id: 'cotton-210',
              label: 'Cotton requires black plateau soil, high temperature, 210 frost-free days, and bright sunshine for growth.',
            },
            {
              id: 'arabica',
              label: 'India’s Arabica coffee variety was originally brought from Yemen and first cultivated on the Baba Budan Hills.',
            },
            {
              id: 'sugarcane-3m',
              label: 'Sugarcane is a short 3-month Zaid crop grown strictly in sandy desert soil.',
            },
            {
              id: 'tea-jute',
              label: 'Assam is the largest producer of Jute ("Golden Fibre"), while Kerala is the largest producer of Wheat.',
            },
          ],
          correctIds: ['cotton-210', 'arabica'],
          multiSelect: true,
          successMsg:
            'Exact! Cotton’s 210 frost-free days and Arabica’s Yemen → Baba Budan origin are key NCERT checkpoints. Sugarcane takes almost a year, West Bengal leads Jute, and Punjab/UP/MP lead Wheat.',
          hintMsg:
            'Eliminate the statements claiming sugarcane takes only 3 months or Kerala grows Wheat.',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'Why is the Rice grown in Haryana and Punjab classified differently from Rice grown in Odisha?',
          answer:
            '1. Commercial in Punjab–Haryana: Dense canal/tubewell irrigation, HYV seeds, fertilisers, and procurement infrastructure allow farmers to grow rice mainly for market sale as a commercial crop.\n2. Subsistence in Odisha: Grown predominantly by small/marginal rain-fed farming families for household consumption rather than large-scale surplus marketing.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'Compare the geographical conditions required for cultivation of Tea and Rubber in India.',
          answer:
            '1. Tea: Tropical/subtropical crop needing deep, fertile, well-drained soil rich in humus and organic matter, warm moist frost-free climate year-round, frequent evenly distributed showers, and abundant skilled labour (Assam, Darjeeling WB, TN, Kerala).\n2. Rubber: Equatorial crop (also grown in special tropical areas) requiring moist and humid climate, rainfall ABOVE 200 cm, and temperature ABOVE 25°C (Kerala, TN, KA, A&N, Garo hills).',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Suggest five institutional and technological reforms introduced by the Government of India to improve agriculture in the interest of farmers.',
          answer:
            '1. First Plan Land Reforms: Abolition of zamindari, collectivisation, cooperation, and consolidation of fragmented landholdings.\n2. Green & White Revolutions (1960s–70s): Introduction of HYV seeds, chemical fertilisers, irrigation packages, and dairy Operation Flood.\n3. Crop Insurance & Rural Institutional Credit (1980s–90s): Provision for crop insurance against drought, flood, cyclone, fire & disease; establishment of Grameen banks and cooperative societies offering low-interest loans.\n4. Farmer Welfare Schemes: Launch of Kisan Credit Card (KCC) and Personal Accident Insurance Scheme (PAIS) along with weather bulletins & agricultural broadcasts on radio and television.\n5. Minimum Support Price (MSP): Announcement of MSP and remunerative/procurement prices for major crops to check exploitation of farmers by speculators and middlemen.',
        },
      ],
    },
  ],
};
