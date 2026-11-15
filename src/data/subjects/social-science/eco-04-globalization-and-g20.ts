import { Subtopic } from '../../../types/curriculum';

export const sstEco04: Subtopic = {
  id: 'sst-eco-04',
  slug: 'globalization-and-g20',
  title: 'Ch 4: Globalization (Factors) & G20 Special Module',
  subtitle:
    'Economics (Restricted Scope + G20) | What is Globalization?, MNCs, Foreign Trade, Technology & Liberalisation Factors + Complete G20 Presidency Study Guide',
  estimatedMinutes: 35,
  difficulty: 'Board Mastery',
  ncertSection: 'Understanding Economic Development — Chapter 4 (What & Factors) + G20',
  learningObjectives: [
    'Define Globalization accurately and explain how MNCs and Foreign Trade integrate markets across countries.',
    'Explain how MNCs control and spread production globally (buying local companies, joint production, orders to small producers).',
    'Analyse the two core factors that enabled Globalization: rapid improvement in Technology (transport & IT) and Liberalisation of foreign trade & investment policies (1991).',
    'Define Trade Barriers and WTO, explaining why India first used barriers post-1947 and then removed them in 1991.',
    'Master the special G20 syllabus topic: G20 composition (19 countries + EU + African Union), global weight, Troika & tracks, and India’s 2023 Presidency ("Vasudhaiva Kutumbakam").',
  ],
  keywords: [
    'Globalization',
    'MNC',
    'Foreign Investment',
    'Cargill Foods Parakh',
    'Chinese toys',
    'Containerisation',
    'IT and Telecommunications',
    'Trade Barriers',
    'Liberalisation 1991',
    'WTO',
    'G20',
    'Vasudhaiva Kutumbakam',
    'African Union',
    'Digital Public Infrastructure',
  ],
  sections: [
    {
      id: 'eco-04-formulas',
      title: 'Pillar 1: Scope Guardrail, Core Definitions & G20 Exam Mandate',
      blocks: [
        {
          type: 'callout',
          variant: 'trap',
          title: 'Strict Syllabus Scope Guardrail (From Your 23-11-2026 Exam Sheet)',
          body: 'Your syllabus specifies Economics Chapter 4 STRICTLY as: "(What is Globalization?, Factors that have enabled Globalization), G20".',
          bullets: [
            'DO Study Deeply: Meaning of Globalization, role of MNCs & Foreign Trade in integrating markets, Technology factor (Container transport + IT/Telecom), Liberalisation of foreign trade/investment (1991 + trade barriers + WTO context), AND the complete G20 module below.',
            'OUTSIDE Board Theory Scope (Skip): Later Ch 4 sections ("Impact of Globalization in India" & "Struggle for a Fair Globalization") are excluded per rationalised CBSE guidelines and your exam sheet.',
          ],
        },
        {
          type: 'quick-summary',
          title: '60-Second Exam Glance',
          bullets: [
            'What is Globalization?: Globalization is the process of rapid integration or interconnection between countries. More and more goods and services, investments, and technology are moving between countries — driven chiefly by Multinational Corporations (MNCs) and Foreign Trade.',
            'Multinational Corporation (MNC): A company that owns or controls production in more than one nation (setting up offices/factories where labour and resources are cheap to keep production costs low and earn greater profits).',
            'Foreign Investment: Investment made by MNCs to buy assets such as land, buildings, machines, and other equipment in another country (e.g., Ford Motors investing ₹1,700 crore in Chennai, or Cargill Foods buying India’s Parakh Foods).',
            'Factor 1 — Technology: Rapid improvement in transportation (containers allowing goods to be loaded intact onto ships, railways, planes & trucks, lowering port handling & air transport costs) AND Information & Communication Technology (telecommunication, internet, computers, mobile, satellite — e.g., London magazine designed & printed in Delhi via internet + e-banking).',
            'Factor 2 — Liberalisation (1991): Removing government-set barriers or restrictions (such as tax on imports) on foreign trade and investment. India introduced barriers after Independence to protect domestic infant industries, then liberalised in 1991 so Indian producers could compete globally and improve quality.',
            'G20 Special Focus: Premier forum for international economic cooperation comprising 19 countries + European Union + African Union (joined permanently at India’s New Delhi Summit, Sept 2023), representing ~85% of global GDP, >75% of global trade, and ~2/3rd of world population.',
          ],
        },
      ],
    },
    {
      id: 'eco-04-visual',
      title: 'Pillar 2: Inline Visual — MNC Global Production Chain & G20 India Presidency Card',
      blocks: [
        {
          type: 'visual-diagram',
          diagramId: 'mnc-global-production-and-g20',
          title: 'How MNCs Interlink Production Across 4 Continents + India’s G20 Presidency Blueprint',
          caption:
            'Notice how MNCs split R&D (USA), manufacturing (China), assembly near markets (Mexico/E. Europe), and IT/engineering (India) — AND review the G20 metrics.',
        },
      ],
    },
    {
      id: 'eco-04-contrast',
      title: 'Pillar 3: How MNCs & Foreign Trade Integrate Markets + Liberalisation Contrast',
      blocks: [
        {
          type: 'table',
          caption: '3 Ways MNCs Interlink Production + Role of Foreign Trade',
          headers: ['Mechanism', 'How It Works', 'Classic NCERT Example'],
          rows: [
            [
              '1. Buying Up Local Companies (Most Common)',
              'MNCs with immense wealth (often exceeding developing-nation budgets) buy established local companies and expand production rapidly',
              'Cargill Foods (large American MNC) bought smaller Indian company Parakh Foods, gaining 4 oil refineries and the largest edible-oil marketing network.',
            ],
            [
              '2. Joint Production With Local Companies',
              'MNC brings huge capital for expansion plus the latest production technology to local firms',
              'Ford Motors collaborated with Mahindra and Mahindra in Chennai (exporting cars & components globally).',
            ],
            [
              '3. Placing Orders With Small Producers',
              'Large MNCs in developed countries place production orders with tiny dispersed producers (garments, footwear, sports items) and sell them under their own global brand names',
              'Garment/footwear/sports-goods workshops supplying global brands, giving MNCs total power over price, quality, delivery & labour conditions.',
            ],
            [
              '4. Foreign Trade Connecting Markets',
              'Producers reach beyond domestic markets and buyers get wider choice; prices of similar goods across countries tend to become equal as producers compete globally',
              'Chinese toys in India: cheaper & newer designs gave Indian buyers greater choice, forced price competition, and captured 70–80% of shops while hurting local toy makers.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'India’s Trade Policy Shift: Post-1947 Protectionism vs. 1991 Liberalisation',
          headers: ['Feature', 'Post-Independence (1950s–1980s)', 'Post-1991 Liberalisation Era'],
          rows: [
            [
              'Policy Stance',
              'Imposed **Trade Barriers** (tax on imports, quotas); allowed imports only of essential items (machinery, fertilisers, petroleum)',
              'Removed barriers to foreign trade & foreign investment (**Liberalisation**) — goods imported/exported easily and foreign firms allowed to set up factories/offices in India',
            ],
            [
              'Rationale',
              'To protect domestic producers from foreign competition while Indian industries were just coming up in the 1950s–60s',
              'Indian producers were judged ready to compete with global producers, forcing them to improve quality; backed by international bodies like **WTO (World Trade Organisation)**',
            ],
          ],
        },
      ],
    },
    {
      id: 'eco-04-g20-deep',
      title: 'Pillar 4: Complete G20 Special Exam Module (Interdisciplinary + CBSE Focus)',
      blocks: [
        {
          type: 'steps',
          title: 'Everything CBSE Can Ask About G20 (2M, 3M, 4M Case & 5M)',
          items: [
            {
              label: '1. Origin & Evolution (1999 → 2008 → 2023)',
              detail:
                'Founded in 1999 after the Asian financial crisis as a forum for Finance Ministers and Central Bank Governors; upgraded to Heads of State/Government Summit level in 2008 during the global financial crisis.',
            },
            {
              label: '2. Members & Troika Governance',
              detail:
                'Originally 19 countries (including India, USA, China, Japan, Germany, UK, France, Brazil, South Africa, Saudi Arabia, etc.) + European Union. At the Sept 2023 New Delhi Summit, the 55-member **African Union (AU)** was inducted as a permanent member! G20 has NO permanent secretariat; it rotates yearly via a **Troika** (past, current & incoming Presidencies — e.g., Indonesia, India, Brazil).',
            },
            {
              label: '3. Two Working Tracks',
              detail:
                '**Finance Track** (led by Finance Ministers & Central Bank Governors — fiscal/monetary policy, IMF/World Bank MDB reforms, debt distress, crypto regulation) and **Sherpa Track** (led by personal emissaries of leaders — agriculture, digital economy, energy transition, education, health, anti-corruption, tourism).',
            },
            {
              label: '4. India’s 2023 G20 Presidency Theme, Logo & Inclusivity',
              detail:
                'Theme: ***Vasudhaiva Kutumbakam* ("One Earth, One Family, One Future")**, drawn from the Maha Upanishad — reflecting interconnectedness of human, animal, plant, and planetary life plus **LiFE (Lifestyle for Environment)**. Logo: Earth atop a 7-petalled Lotus in national flag colours (saffron, white, green, blue). India hosted 200+ meetings across 60 cities, turning G20 into a "People’s G20".',
            },
            {
              label: '5. Major New Delhi Leaders’ Declaration Achievements (5M Gold)',
              detail:
                '(i) Unanimous New Delhi Declaration consensus; (ii) Historic permanent entry of the **African Union (Voice of Global South)**; (iii) **Global Biofuels Alliance** & Green Development Pact (tripling renewable capacity); (iv) Global endorsement of **Digital Public Infrastructure (DPI)** (Aadhaar, UPI, CoWIN model) for financial inclusion; (v) **India–Middle East–Europe Economic Corridor (IMEC)** & push for Women-led Development.',
            },
          ],
        },
      ],
    },
    {
      id: 'eco-04-traps',
      title: 'Pillar 5: 4-Mark G20/Globalization Case Extract & Trap Checkpoints',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Arjun',
          title: 'Trap: Calling Tax on Imports a "Liberalisation Tool" or Missing African Union in G20',
          wrongWork:
            '1) Tax on imports is a tool of liberalisation. 2) G20 consists only of 20 individual countries and is a branch of the UN.',
          teacherFix:
            '1) Tax on imports is an example of a **TRADE BARRIER** (used to restrict/regulate foreign trade); REMOVING such barriers is **Liberalisation**. 2) G20 is an informal intergovernmental forum (NOT a UN body and has no permanent secretariat) comprising 19 individual countries + the European Union + the African Union (added in 2023).',
          whyWrong:
            'Both conceptual confusions are high-frequency Section A MCQ and Assertion–Reason traps.',
        },
        {
          type: 'qa',
          marks: 4,
          tag: 'G20 Special Focus',
          question:
            'Read the G20 & Globalization case and answer the questions:\n"India assumed the G20 Presidency from 1 December 2022 to 30 November 2023 under the theme ‘Vasudhaiva Kutumbakam’ or ‘One Earth, One Family, One Future’. Representing about 85% of global GDP, over 75% of global trade, and nearly two-thirds of the world population, the G20 summit in New Delhi achieved a unanimous Leaders’ Declaration despite deep geopolitical tensions. India strongly championed the Voice of the Global South, spearheaded the permanent admission of the 55-nation African Union into the G20, promoted Digital Public Infrastructure (DPI) for financial inclusion, and launched the Global Biofuels Alliance."\n\n(a) Explain the core meaning and source of India’s G20 Presidency theme "Vasudhaiva Kutumbakam". [1M]\n(b) What historic institutional expansion occurred at the 2023 New Delhi G20 Summit? [1M]\n(c) How do G20 initiatives like Digital Public Infrastructure (DPI) and the Global Biofuels Alliance connect to Globalization and sustainable development? [2M]',
          answer:
            '(a) Drawn from the ancient Indian text Maha Upanishad, it translates to "One Earth, One Family, One Future", affirming the interconnectedness and value of all life on the planet.\n(b) The African Union (representing 55 African nations) was admitted as a permanent full member of the G20, amplifying the Voice of the Global South.\n(c) (1) DPI shares open-source digital payment and identity systems (like UPI/India Stack) across borders so developing economies integrate safely into global digital finance; (2) The Global Biofuels Alliance advances cleaner energy cooperation and green transitions without blocking growth in emerging economies.',
          markingTip: 'Tie G20 back to international economic cooperation, inclusive globalization, and green/digital connectivity.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Why did the Indian government put barriers to foreign trade and foreign investment soon after Independence?',
          options: [
            { id: 'a', label: 'To prevent all imports of machinery, fertilisers, and petroleum' },
            {
              id: 'b',
              label:
                'To protect domestic Indian producers from foreign competition while local industries were just emerging in the 1950s–60s',
            },
            { id: 'c', label: 'Because the World Trade Organisation forced India to restrict trade' },
            { id: 'd', label: 'Because India lacked container ports in the 1950s' },
          ],
          correctIds: ['b'],
          successMsg: 'Correct! Infant domestic industries needed protection in the 1950s–60s; essential inputs like machinery, fertilisers & petroleum were still imported.',
          hintMsg: 'Check why protectionism was judged necessary right after Independence until 1991.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Which statement about the G20 is TRUE?',
          options: [
            { id: 'a', label: 'G20 has a permanent headquarters in Geneva, Switzerland' },
            { id: 'b', label: 'G20 comprises 19 countries, the European Union, and (since 2023) the African Union' },
            { id: 'c', label: 'G20 deals strictly with military alliances and NATO defence' },
            { id: 'd', label: 'India has never held the G20 Presidency' },
          ],
          correctIds: ['b'],
          successMsg: 'Spot on! 19 countries + EU + African Union (added at New Delhi 2023), operating through rotating Troika presidencies with no permanent secretariat.',
          hintMsg: 'Recall the 2023 New Delhi Summit expansion and the absence of a permanent secretariat.',
        },
      ],
    },
    {
      id: 'eco-04-qa',
      title: 'Pillar 6: CBSE Sub-Headed Q&As (2M, 3M & 5M — Globalization & G20)',
      blocks: [
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Explain the major factors that have enabled and stimulated the process of Globalization.',
          answer:
            'Two primary pillars — **Technology** and **Trade/Investment Liberalisation** — propelled rapid global economic integration:\n• **1. Rapid Improvement in Transportation Technology:** Innovations such as **containerisation** (packing goods intact in large containers easily shifted across ships, railways, trucks & planes) drastically reduced port handling costs and sped up deliveries; cheaper air transport increased high-value cross-border freight.\n• **2. Revolution in Information & Communication Technology (ICT):** Computers, internet, telecommunications (telegraph, mobile, fax, satellite), and instant e-banking enable global firms to design in London, transmit files instantaneously, print/edit in Delhi, and coordinate factories worldwide at negligible communication cost.\n• **3. Liberalisation of Foreign Trade & Foreign Investment:** Removing government trade barriers (such as import taxes and quotas — begun in India in 1991) lets businesses decide freely what to import/export and enables MNCs to invest in local factories.\n• **4. Expansion of Multinational Corporations (MNCs):** MNCs link production across continents via foreign investment, local acquisitions, joint ventures, and global supply orders.\n• **5. Role of World Trade Organisation (WTO):** Established to liberalise international trade and set rules urging member countries to drop trade barriers.',
          markingTip: 'Make sure **Containerisation**, **ICT (London–Delhi magazine example)**, **1991 Liberalisation**, and **WTO** all appear clearly.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'G20 Special Focus',
          question:
            'What is G20? Highlight the significance and major outcomes of India’s 2023 G20 Presidency.',
          answer:
            'The **G20 (Group of Twenty)** is the premier intergovernmental forum for international economic cooperation, founded in 1999 and comprising **19 countries, the European Union, and the African Union** — representing ~85% of global GDP, >75% of global trade, and ~2/3rd of the world’s population.\n• **1. Theme & Vision (*Vasudhaiva Kutumbakam*):** India’s presidency ("One Earth, One Family, One Future") focused on inclusive, human-centric sustainable growth and LiFE (Lifestyle for Environment).\n• **2. Voice of the Global South & African Union Entry:** India championed developing nations’ debt/climate priorities and secured permanent G20 membership for the **55-nation African Union**.\n• **3. Digital Public Infrastructure (DPI):** G20 endorsed open-source digital identity and payment frameworks (inspired by India’s Aadhaar & UPI) to accelerate financial inclusion globally.\n• **4. Green Development & Global Biofuels Alliance:** Leaders committed to tripling global renewable energy capacity by 2030 and launched the Global Biofuels Alliance.\n• **5. Unanimous Leaders’ Declaration & People’s G20:** India bridged sharp geopolitical divides to achieve 100% consensus in New Delhi while hosting 200+ meetings across 60 Indian cities.',
          markingTip: 'High-value 5-marker directly targeting the G20 addition in your exam schedule.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'How does foreign trade lead to the integration of markets across countries? Explain with an example.',
          answer:
            '• **1. Opportunity Beyond Domestic Boundaries:** Foreign trade lets producers sell beyond their home country into global markets, and expands buyers’ choices well beyond domestically made goods.\n• **2. Price Equalisation Across Countries:** With goods travelling between markets, prices of similar commodities in two countries tend to become equal as producers in both nations compete closely.\n• **3. Example (Chinese Toys in India):** Cheap, novel Chinese toys entered Indian shops, expanding consumer choice and lowering prices while forcing Indian toy makers to face stiff foreign competition — tightly linking Chinese and Indian markets.',
          markingTip: 'All three points come straight from NCERT’s *Foreign Trade and Integration of Markets* sub-section.',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'What are "Trade Barriers"? Give one example and state what "Liberalisation" means.',
          answer:
            '• **Trade Barrier:** Any government-imposed restriction on foreign trade used to regulate what and how much goods enter a country — for example, a **tax on imports**.\n• **Liberalisation:** Removing barriers or restrictions set by the government on foreign trade and foreign investment (implemented widely by India in 1991).',
          markingTip: 'Never forget the exact textbook example: **tax on imports**.',
        },
      ],
    },
  ],
};
