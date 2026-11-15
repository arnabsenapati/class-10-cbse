import { Subtopic } from '../../../types/curriculum';

export const sstEco02: Subtopic = {
  id: 'sst-eco-02',
  slug: 'sectors-of-indian-economy',
  title: 'Ch 2: Sectors of the Indian Economy',
  subtitle:
    'Economics | Primary–Secondary–Tertiary & GDP Final-Goods Rule, Disguised Unemployment, MGNREGA 2005, Organised vs. Unorganised & Public vs. Private',
  estimatedMinutes: 35,
  difficulty: 'Core CBSE',
  ncertSection: 'Understanding Economic Development — Chapter 2',
  learningObjectives: [
    'Classify economic activities into Primary, Secondary, and Tertiary sectors and explain their interdependence.',
    'Explain why only Final Goods and Services are counted in GDP to avoid the problem of double counting.',
    'Interpret the NCERT GDP vs. Employment charts to explain Disguised Unemployment (Underemployment) and the 4 reasons behind Tertiary Sector growth.',
    'Propose rural and semi-rural employment creation strategies including MGNREGA 2005 ("Right to Work").',
    'Contrast Organised vs. Unorganised sectors (Kanta vs. Kamal) and Public vs. Private sectors, explaining why government support is indispensable.',
  ],
  keywords: [
    'Primary Secondary Tertiary',
    'Final Goods',
    'Intermediate Goods',
    'GDP',
    'Double Counting',
    'Disguised Unemployment',
    'Underemployment',
    'MGNREGA 2005',
    'Right to Work',
    'Organised vs Unorganised',
    'Kanta and Kamal',
    'Public vs Private',
  ],
  sections: [
    {
      id: 'eco-02-formulas',
      title: 'Pillar 1: Three Sector Classifications, GDP Rule & MGNREGA 2005',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Exam Glance',
          bullets: [
            'By Nature of Activity: Primary (extracts/produces using natural resources — agriculture, dairy, fishing, forestry, mining); Secondary (transforms natural products into manufactured goods — sugar, cotton textiles, bricks); Tertiary (provides services that aid Primary & Secondary — transport, storage, banking, trade, communication + essential teachers, doctors, IT/ATM booths).',
            'GDP & Double Counting Rule: Gross Domestic Product (GDP) is the sum of the value of ALL FINAL goods and services produced within a country during a particular year. Intermediate goods (wheat, flour) are EXCLUDED because their value is already embedded inside the final good (biscuits).',
            'The Employment Paradox: Tertiary sector generates >55% of India’s GDP, yet Primary agriculture still employs ~44% of India’s workforce — creating massive Disguised Unemployment (more people working than required; removing extras does not lower output).',
            'MGNREGA 2005 ("Right to Work"): Passed for rural areas (starting in 625 districts) — guarantees 100 days of wage employment per year to all who are able and in need of work; if govt fails to provide work, it pays an unemployment allowance; 1/3rd jobs reserved for women.',
            'By Employment Conditions: Organised (registered by govt, follows Factories Act/Minimum Wages Act, fixed hours, paid leave, PF, job security) vs. Unorganised (small scattered units outside govt control, low/irregular wages, no overtime/paid leave).',
            'By Ownership: Public Sector (govt owns most assets & provides services for public welfare — Railways, Post Office) vs. Private Sector (private individuals/companies own assets, driven by profit — TISCO, Reliance).',
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: '4 Reasons Why the Tertiary Sector Has Become So Important in India (Guaranteed 5M)',
          body: 'Even though services range from small shopkeepers/repair persons to elite IT professionals, overall Tertiary output surged due to four factors:',
          bullets: [
            '1. Basic Services Responsibility: Any developing country requires essential services — hospitals, educational institutions, post & telegraph, police stations, courts, village offices, defence, transport, banks & insurance — which government provides.',
            '2. Development of Primary & Secondary Sectors: Growth in agriculture and industry directly drives higher demand for transport, trade, storage, and credit.',
            '3. Rising Income Levels: As household incomes rise, certain sections start demanding more eating out, tourism, shopping, private hospitals, private schools, and professional training.',
            '4. Rise of New ICT Services: Over the past decade, Information & Communication Technology (ICT) services (internet cafes, ATM booths, call centres, software companies) grew rapidly and became essential.',
          ],
        },
      ],
    },
    {
      id: 'eco-02-visual',
      title: 'Pillar 2: NCERT Graph Lens — GDP Share vs. Employment Share',
      blocks: [
        {
          type: 'visual-diagram',
          diagramId: 'gdp-vs-employment-bars',
          title: 'Sectoral Shift in India: Share in GDP (%) vs. Share in Employment (%)',
          caption:
            'Memorise this visual contrast: output shifted heavily from Primary → Tertiary, but employment did NOT shift proportionally out of Primary!',
        },
      ],
    },
    {
      id: 'eco-02-contrast',
      title: 'Pillar 3: Paired Case Contrasts (Kanta vs. Kamal & Public vs. Private)',
      blocks: [
        {
          type: 'table',
          caption: 'Contrast 1 — Organised vs. Unorganised Sector (NCERT Case: Kanta vs. Kamal)',
          headers: ['Feature', 'Organised Sector (e.g., Kanta in Office)', 'Unorganised Sector (e.g., Kamal in Grocery Shop)'],
          rows: [
            [
              'Govt Registration & Laws',
              'Registered by government; must follow Factories Act, Minimum Wages Act, Payment of Gratuity Act, Shops & Establishments Act',
              'Small, scattered units largely outside government control; rules exist on paper but are rarely followed',
            ],
            [
              'Working Hours & Pay',
              'Fixed hours (9:30 AM – 5:30 PM); paid overtime if made to work extra; regular monthly salary',
              'Long irregular hours (7:30 AM – 8 PM); low, often irregular daily wages; no overtime pay',
            ],
            [
              'Job Security & Benefits',
              'Formal appointment letter; paid leave, Sunday off, medical benefits, Provident Fund (PF), gratuity & pension',
              'No appointment letter; no paid leave, sick leave or PF; can be asked to leave anytime without reason',
            ],
            [
              'Who Works in Unorganised?',
              'Formal factory, bank, government & IT employees',
              'Rural: landless agricultural labourers, small/marginal farmers (~80% rural households), artisans.\nUrban: small-scale industry workers, casual construction workers, street vendors, ragpickers, garment makers.\nNote: Majority of SC/ST/OBC workers are concentrated here and also face social discrimination.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Contrast 2 — Public Sector vs. Private Sector (Why Govt Must Spend)',
          headers: ['Basis', 'Public Sector', 'Private Sector'],
          rows: [
            [
              'Ownership & Motive',
              'Government owns most assets and provides services; guided by PUBLIC WELFARE, not profit alone',
              'Ownership & delivery in private hands (e.g., TISCO, Reliance); guided by PROFIT MOTIVE',
            ],
            [
              'Why Private Sector Won’t Do Certain Jobs',
              'Builds roads, bridges, railways, harbours, electricity, dams & irrigation — recovering costs slowly via reasonable taxes',
              'Needs huge capital beyond private capacity, takes years to recover, or would charge unaffordable user fees',
            ],
            [
              'Social Support & Basic Needs',
              '• Sells electricity below generation cost to protect small industries.\n• Buys wheat/rice at MSP and sells cheaply via Fair Price (Ration) Shops.\n• Funds primary health, safe drinking water, nutrition & elementary education (especially poorest states).',
              'Cannot be relied on to subsidise poor farmers, ration consumers, or remote rural schools/clinics',
            ],
          ],
        },
      ],
    },
    {
      id: 'eco-02-numericals',
      title: 'Pillar 4: Double Counting Numerical & Rural Job Creation Blueprint',
      blocks: [
        {
          type: 'steps',
          title: 'Avoiding Double Counting in GDP — Classic NCERT Worked Example',
          items: [
            {
              label: 'Stage 1: Farmer sells Wheat to Flour Mill',
              detail: 'Value = ₹20 per kg (Intermediate good for the mill).',
            },
            {
              label: 'Stage 2: Flour Mill grinds wheat & sells Flour to Biscuit Company',
              detail: 'Value = ₹25 per kg (Includes ₹20 wheat + ₹5 milling value added — still Intermediate good).',
            },
            {
              label: 'Stage 3: Biscuit Company mixes sugar/oil & sells 4 packets to Consumer',
              detail: 'Final price = ₹80 total (₹20 per packet). This ₹80 is the FINAL GOOD value counted in GDP!',
              example:
                'WRONG (Double Counting): 20 + 25 + 80 = ₹125 ✗. RIGHT (Final Goods Only): ₹80 ✓ (already includes wheat ₹20 & flour ₹25 inside!).',
            },
          ],
        },
        {
          type: 'key-points',
          title: '6 Ways to Create More Rural Employment (Laxmi’s 2-Hectare Plot Case)',
          items: [
            '1. Cheap Agricultural Credit & Canal/Well Irrigation: Enables growing a second crop (wheat in rabi alongside kharif paddy), doubling employment on the same land.',
            '2. Rural Roads, Transport & Cold Storage: Generates jobs for farmers and rural truckers/traders while letting farmers sell produce at better prices.',
            '3. Semi-Rural Agro-Industries: Setting up dal mills, cold storages, honey collection centres (near forests), and vegetable/potato processing units.',
            '4. Social Infrastructure (Schools & Clinics): Planning Commission (now NITI Aayog) estimated nearly 20 lakh jobs can be created in the education sector alone, plus rural doctors/nurses/health workers.',
            '5. Regional Tourism & Handicrafts: Planning Commission estimated tourism improvement can give extra employment to over 35 lakh people annually.',
            '6. Short-Term Guarantee — MGNREGA 2005: Guarantees 100 days of rural wage employment per year on productive local assets (water conservation, land improvement) or pays unemployment allowance.',
          ],
        },
      ],
    },
    {
      id: 'eco-02-traps',
      title: 'Pillar 5: 4-Mark Case Extract & Assertion–Reason Trap Checkpoints',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Tanvi',
          title: 'Trap: Calling Disguised Unemployment "Zero Output" or Confusing Service Sector Jobs',
          wrongWork:
            '1) Disguisedly unemployed people sit completely idle at home. 2) All Tertiary sector workers enjoy high IT salaries and job security.',
          teacherFix:
            '1) Disguisedly unemployed workers APPEAR to be working on the farm, yet are working below full potential (marginal contribution = zero; removing them keeps output unchanged). 2) Tertiary sector is split — a tiny high-skill slice (IT/banking) thrives, while millions of street vendors, repair workers & shop helpers earn barely enough in the unorganised sector.',
          whyWrong:
            'NCERT explicitly warns against both misconceptions in Ch 2 under "Where are most of the people employed?".',
        },
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the extract and answer the questions:\n"Take the case of Laxmi, owning about two hectares of unirrigated land dependent only on rain and growing crops like jowar and arhar. All five members of her family work in the plot throughout the year because they have nowhere else to go for work. Each one is doing some work, but no one is fully employed. Their labour effort gets divided. Now suppose a landlord comes and hires two members of her family to work on his land. Laxmi’s family is now able to earn extra income through wages. Since you do not need five people to look after that small plot, two people moving out does not affect production on her farm."\n\n(a) Identify the type of unemployment depicted in Laxmi’s family. [1M]\n(b) Why did total crop output on Laxmi’s farm NOT fall when two family members moved out? [1M]\n(c) Suggest two concrete government interventions (other than hiring by a landlord) that could generate productive work for Laxmi’s family. [2M]',
          answer:
            '(a) Disguised unemployment (also called underemployment).\n(b) Because those two members were surplus to the small 2-hectare plot’s requirement; everyone was dividing the same limited work rather than working at full capacity.\n(c) (1) Providing cheap bank credit and constructing irrigation canals/wells so Laxmi can cultivate a second rabi crop; (2) Building rural roads/cold storage or setting up agro-processing units (dal mill, honey collection) and implementing MGNREGA 2005 employment.',
          markingTip: 'Always pair *"appears to be working / labour effort divided"* with *"output does not decline if surplus workers move out"*.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Which group of activities includes ONLY Tertiary Sector services?',
          options: [
            { id: 'a', label: 'Dairy farming, Cotton weaving, Banking' },
            { id: 'b', label: 'Transport, Storage, Banking, Call centres, Teaching' },
            { id: 'c', label: 'Mining, Sugar milling, Fishing' },
            { id: 'd', label: 'Bee-keeping, Brick-making, Atmospheric research' },
          ],
          correctIds: ['b'],
          successMsg: 'Correct! Transport, storage, banking, ICT/call centres, and essential services like teaching are all Tertiary activities.',
          hintMsg: 'Check each option for Primary (farming/fishing/mining) or Secondary (weaving/sugar/bricks) intrusions.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Under MGNREGA 2005, if the government fails in its duty to provide employment within the stipulated period, the applicant is entitled to:',
          options: [
            { id: 'a', label: 'A free piece of irrigated agricultural land' },
            { id: 'b', label: 'An unemployment allowance from the government' },
            { id: 'c', label: 'Automatic permanent absorption into the organised public sector' },
            { id: 'd', label: 'An interest-free ₹1 lakh bank loan' },
          ],
          correctIds: ['b'],
          successMsg: 'Spot on! That legal guarantee of work OR daily unemployment allowance is why MGNREGA 2005 is called the "Right to Work".',
          hintMsg: 'Remember the phrase "Right to Work" — 100 days guaranteed wage employment OR cash compensation.',
        },
      ],
    },
    {
      id: 'eco-02-qa',
      title: 'Pillar 5: CBSE Sub-Headed Q&As (2M, 3M & 5M)',
      blocks: [
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'How can workers in the unorganised sector be protected? Suggest five practical measures for rural and urban areas.',
          answer:
            'Workers in the unorganised sector suffer low irregular wages, zero social security, and often social discrimination (SC/ST/OBC). Protection requires targeted state intervention:\n• **1. Support Small & Marginal Farmers (Rural):** Nearly 80% of rural households are small/marginal farmers who need timely delivery of seeds, agricultural inputs, cheap bank credit, storage facilities, and marketing outlets.\n• **2. Support Small-Scale Industries (Urban):** Casual workers in small-scale industry need government protection in procuring raw materials and marketing finished output.\n• **3. Strict Labour Law Enforcement:** Enforce minimum wages, safe working conditions, fixed hours, and fair compensation for construction, transport, and domestic workers.\n• **4. Social Security & Welfare Nets:** Extend provident fund, medical insurance, paid leave, and pension coverage to street vendors, ragpickers, and garment workers.\n• **5. Anti-Discrimination Safeguards:** Protect SC, ST, and backward community workers from social discrimination alongside economic exploitation.',
          markingTip: 'Cover BOTH **rural** (80% small farmers) and **urban** (casual/small-industry workers) plus **SC/ST social protection**.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Explain how the Public Sector contributes to the economic development of a nation with five key arguments.',
          answer:
            'The Public Sector builds the essential economic and social foundation that private profit-driven firms cannot provide alone:\n• **1. Mega Infrastructure Development:** Government funds roads, bridges, railways, harbours, dams, and electricity using public taxes — impossible for private firms due to massive capital and slow recovery.\n• **2. Supporting Industries via Subsidised Power:** Government produces and supplies electricity at rates small industries can afford, bearing part of the cost to keep factories running.\n• **3. Farmer & Consumer Food Security:** Government buys wheat and rice from farmers at fair Minimum Support Price (MSP), stores them in godowns, and sells at subsidised rates via ration shops (PDS).\n• **4. Health, Nutrition & Elementary Education:** Running quality government schools, primary health centres, safe drinking water, and housing is a core constitutional duty.\n• **5. Balanced Regional Development:** Govt prioritises investments in the poorest regions so lagging states catch up instead of being ignored by private investors.',
          markingTip: 'Five NCERT examples (Infrastructure, Power Subsidy, FCI/PDS, Health/Education, Poorest Regions) make an unbeatable 5-mark answer.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'Explain the objective of implementing MGNREGA 2005. Why is it called the "Right to Work"?',
          answer:
            '• **1. "Right to Work" Guarantee:** Passed by the Central Government to implement the Right to Work in rural areas (initially ~625 districts of India).\n• **2. 100 Days Assured Wage Employment:** Every rural household whose adult members volunteer for unskilled manual work is guaranteed **100 days of employment in a year** (with 1/3rd priority to women).\n• **3. Unemployment Allowance & Asset Creation:** If government fails to provide employment, it must give **unemployment allowances**; projects chosen help raise future land productivity (water harvesting, ponds, roads).',
          markingTip: 'Always state **2005**, **100 days**, and **unemployment allowance**.',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'Why are only "final goods and services" counted while calculating GDP?',
          answer:
            '• **Reason:** The value of final goods already includes the value of all intermediate goods (raw materials/inputs) used in making them.\n• **Avoids Double Counting:** Counting wheat, flour, and biscuits separately would count the same wheat multiple times and inflate GDP.',
          markingTip: 'Use the exact NCERT phrase *"problem of double counting"*.',
        },
      ],
    },
  ],
};
