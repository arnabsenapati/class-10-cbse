import { GlossaryTerm, QuizQuestion } from '../../../types/curriculum';

export const sstGlossary: GlossaryTerm[] = [
  // ==========================================
  // ECONOMICS — INDICATORS & FORMULAS (12)
  // ==========================================
  {
    id: 'sst-gl-pci',
    term: 'Per Capita Income (Average Income)',
    symbol: 'PCI = Total Income ÷ Total Population',
    category: 'Economics — Indicators & Formulas',
    simpleMeaning: 'Average income earned per person in a country during a year.',
    ncertDefinition:
      'Total income of the country divided by its total population; used by the World Bank in its World Development Reports to classify nations.',
    example: 'If 4 families earn ₹20,000 total, PCI = ₹20,000 ÷ 4 = ₹5,000 (hides inequality).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'development',
      sectionId: 'eco-01-formulas',
    },
  },
  {
    id: 'sst-gl-hdi',
    term: 'Human Development Index (HDI)',
    symbol: 'UNDP (Health + Education + Income)',
    category: 'Economics — Indicators & Formulas',
    simpleMeaning: 'A composite score ranking countries by longevity, schooling, and standard of living.',
    ncertDefinition:
      'Published by UNDP in the Human Development Report; compares countries based on educational levels, health status (Life Expectancy), and per capita income.',
    example: 'Sri Lanka ranks ahead of India on HDI despite facing similar economic challenges.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'development',
      sectionId: 'eco-01-formulas',
    },
  },
  {
    id: 'sst-gl-imr',
    term: 'Infant Mortality Rate (IMR)',
    symbol: 'Deaths < Age 1 per 1,000 Live Births',
    category: 'Economics — Indicators & Formulas',
    simpleMeaning: 'How many babies out of 1,000 born alive die before turning 1 year old.',
    ncertDefinition:
      'Indicates the number of children that die before the age of one year as a proportion of 1,000 live children born in that particular year.',
    example: 'Kerala’s low IMR compared to Haryana proves better public healthcare outperforms income alone.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'development',
      sectionId: 'eco-01-formulas',
    },
  },
  {
    id: 'sst-gl-literacy',
    term: 'Literacy Rate',
    symbol: 'Age 7 and Above',
    category: 'Economics — Indicators & Formulas',
    simpleMeaning: 'Percentage of people aged 7+ who can read and write with understanding.',
    ncertDefinition:
      'Measures the proportion of literate population in the 7-and-above age group.',
    example: 'Kerala has over 94% literacy compared to ~62% in Bihar in the NCERT benchmark table.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'development',
      sectionId: 'eco-01-formulas',
    },
  },
  {
    id: 'sst-gl-nar',
    term: 'Net Attendance Ratio (NAR)',
    symbol: 'Age Group 14 & 15 Years (%)',
    category: 'Economics — Indicators & Formulas',
    simpleMeaning: 'Share of 14–15 year olds actually attending secondary school.',
    ncertDefinition:
      'The total number of children of age group 14 and 15 years attending school as a percentage of total number of children in the same age group.',
    example: 'Trap alert: Literacy checks 7+ years, whereas NAR checks strictly 14–15 years.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'development',
      sectionId: 'eco-01-formulas',
    },
  },
  {
    id: 'sst-gl-bmi',
    term: 'Body Mass Index (BMI)',
    symbol: 'Weight (kg) ÷ [Height (m)]²',
    category: 'Economics — Indicators & Formulas',
    simpleMeaning: 'Standard adult nutrition check using weight and squared height in metres.',
    ncertDefinition:
      'Weight of a person in kg divided by the square of height in metres; < 18.5 indicates undernourishment and > 25 indicates overweight.',
    example: '45 kg ÷ (1.5 m)² = 45 ÷ 2.25 = 20.0 kg/m² (normal healthy nutrition).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'development',
      sectionId: 'eco-01-numericals',
    },
  },
  {
    id: 'sst-gl-sustainability',
    term: 'Sustainable Development',
    category: 'Economics — Indicators & Formulas',
    simpleMeaning: 'Growing today without exhausting resources or harming nature for future generations.',
    ncertDefinition:
      'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.',
    example: 'Overusing groundwater faster than rainfall replenishment violates sustainability.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'development',
      sectionId: 'eco-01-contrast',
    },
  },
  {
    id: 'sst-gl-gdp',
    term: 'Gross Domestic Product (GDP)',
    symbol: 'Sum of Final Goods & Services (1 Year)',
    category: 'Economics — Indicators & Formulas',
    simpleMeaning: 'Total market value of all finished goods and services made inside a country in one year.',
    ncertDefinition:
      'The value of all final goods and services produced within a country during a particular year; shows how big the economy is.',
    example: 'Only biscuits (₹80) are counted — not the intermediate wheat (₹20) and flour (₹25) — to avoid double counting.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'sectors-of-indian-economy',
      sectionId: 'eco-02-numericals',
    },
  },
  {
    id: 'sst-gl-disguised',
    term: 'Disguised Unemployment (Underemployment)',
    category: 'Economics — Indicators & Formulas',
    simpleMeaning: 'More people working on a job than needed; removing extras keeps output the same.',
    ncertDefinition:
      'A situation where people are apparently working, but all of them are made to work less than their potential; labour effort gets divided.',
    example: '5 members of Laxmi’s family work on 2 hectares; removing 2 does not reduce harvest output.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'sectors-of-indian-economy',
      sectionId: 'eco-02-visual',
    },
  },
  {
    id: 'sst-gl-mgnrega',
    term: 'MGNREGA 2005 (Right to Work)',
    symbol: '100 Days Assured Wage Work',
    category: 'Economics — Indicators & Formulas',
    simpleMeaning: 'Law guaranteeing 100 days of rural manual work per household annually or unemployment pay.',
    ncertDefinition:
      'Mahatma Gandhi National Rural Employment Guarantee Act 2005 guarantees 100 days of employment in a year to rural households; if govt fails, it gives unemployment allowances.',
    example: '1/3rd of MGNREGA jobs are reserved for women, building ponds, canals & rural roads.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'sectors-of-indian-economy',
      sectionId: 'eco-02-formulas',
    },
  },
  {
    id: 'sst-gl-organised',
    term: 'Organised vs. Unorganised Sector',
    category: 'Economics — Indicators & Formulas',
    simpleMeaning: 'Govt-registered regular jobs with legal benefits vs. unprotected irregular work.',
    ncertDefinition:
      'Organised sector covers enterprises registered by government following labour laws (Factories Act, Minimum Wages Act); Unorganised covers small scattered units outside govt control.',
    example: 'Kanta gets paid leave, overtime & PF (Organised); Kamal gets none & can be fired anytime (Unorganised).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'sectors-of-indian-economy',
      sectionId: 'eco-02-contrast',
    },
  },
  {
    id: 'sst-gl-public-private',
    term: 'Public vs. Private Sector',
    category: 'Economics — Indicators & Formulas',
    simpleMeaning: 'Government-owned welfare enterprises vs. private profit-seeking companies.',
    ncertDefinition:
      'In the Public sector, the government owns most assets and provides services for public welfare; in the Private sector, asset ownership and service delivery lie with private individuals/companies.',
    example: 'Indian Railways & Post Office (Public) vs. TISCO & Reliance Industries (Private).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'sectors-of-indian-economy',
      sectionId: 'eco-02-contrast',
    },
  },

  // ==========================================
  // ECONOMICS — MONEY, CREDIT & G20 (12)
  // ==========================================
  {
    id: 'sst-gl-double-coincidence',
    term: 'Double Coincidence of Wants',
    category: 'Economics — Money, Credit & G20',
    simpleMeaning: 'Barter requirement where both sides must happen to want what the other is selling.',
    ncertDefinition:
      'What a person desires to sell is exactly what the other wishes to buy; eliminated when money serves as a medium of exchange.',
    example: 'A shoe seller need not hunt for a wheat farmer who simultaneously needs shoes.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'money-and-credit',
      sectionId: 'eco-03-formulas',
    },
  },
  {
    id: 'sst-gl-demand-deposits',
    term: 'Demand Deposits & Cheque',
    category: 'Economics — Money, Credit & G20',
    simpleMeaning: 'Bank savings you can withdraw anytime or spend directly via a written cheque.',
    ncertDefinition:
      'Deposits in bank accounts that can be withdrawn on demand; cheques instruct the bank to pay a specific amount from the account to the named person without cash.',
    example: 'Together with currency notes/coins, demand deposits form modern money.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'money-and-credit',
      sectionId: 'eco-03-formulas',
    },
  },
  {
    id: 'sst-gl-rbi',
    term: 'Reserve Bank of India (RBI)',
    symbol: '~15% Cash Reserve Monitor',
    category: 'Economics — Money, Credit & G20',
    simpleMeaning: 'India’s central bank: sole issuer of currency notes & supervisor of all formal banks.',
    ncertDefinition:
      'Issues currency notes on behalf of the Central Govt, monitors banks’ ~15% cash balance, ensures loans reach small borrowers/farmers, and checks interest rates via periodic reports.',
    example: 'No individual or commercial bank may legally issue rupee currency notes in India.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'money-and-credit',
      sectionId: 'eco-03-formulas',
    },
  },
  {
    id: 'sst-gl-collateral',
    term: 'Collateral',
    category: 'Economics — Money, Credit & G20',
    simpleMeaning: 'Borrower’s pledged asset (land, house, gold, deposits) backing a loan against default.',
    ncertDefinition:
      'An asset that the borrower owns (land, building, vehicle, livestocks, bank deposits) and uses as a guarantee to a lender until the loan is repaid.',
    example: 'Absence of collateral is the main reason 85% of poor urban loans come from informal sources.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'money-and-credit',
      sectionId: 'eco-03-formulas',
    },
  },
  {
    id: 'sst-gl-terms-credit',
    term: 'Terms of Credit',
    symbol: 'Interest + Collateral + Docs + Mode',
    category: 'Economics — Money, Credit & G20',
    simpleMeaning: 'The four rules attached to any loan agreement.',
    ncertDefinition:
      'Comprise four elements: interest rate, collateral and documentation requirement, and the mode of repayment.',
    example: 'Arun’s bank crop loan carries 8.5% annual interest vs. Rama’s landlord loan at 5% per month.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'money-and-credit',
      sectionId: 'eco-03-contrast',
    },
  },
  {
    id: 'sst-gl-debt-trap',
    term: 'Debt Trap',
    category: 'Economics — Money, Credit & G20',
    simpleMeaning: 'When credit pushes the borrower into deeper debt from which recovery is nearly impossible.',
    ncertDefinition:
      'A situation where credit leaves the borrower worse off than before — often forcing sale of assets like land to repay high-interest informal loans.',
    example: 'Swapna’s groundnut crop failed due to pests, trapping her into selling part of her land.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'money-and-credit',
      sectionId: 'eco-03-contrast',
    },
  },
  {
    id: 'sst-gl-shg',
    term: 'Self-Help Groups (SHGs)',
    symbol: '15–20 Women • No Collateral',
    category: 'Economics — Money, Credit & G20',
    simpleMeaning: 'Small rural women’s savings collectives that unlock collateral-free bank loans.',
    ncertDefinition:
      'Organisations of 15–20 rural poor neighbours who pool regular savings (₹25–₹100+), issue affordable internal loans, and after 1–2 years obtain collateral-free bank loans in the group’s name.',
    example: 'Also serve as social platforms to discuss health, nutrition, and domestic violence.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'money-and-credit',
      sectionId: 'eco-03-numericals',
    },
  },
  {
    id: 'sst-gl-globalization',
    term: 'Globalization',
    category: 'Economics — Money, Credit & G20',
    simpleMeaning: 'Fast interconnection of countries via trade, MNC investments, and technology.',
    ncertDefinition:
      'The process of rapid integration or interconnection between countries, with growing movement of goods, services, investments, and technology across borders.',
    example: 'Enabled primarily by transport/ICT technology and 1991 trade/investment liberalisation.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'globalization-and-g20',
      sectionId: 'eco-04-formulas',
    },
  },
  {
    id: 'sst-gl-mnc',
    term: 'Multinational Corporation (MNC) & Foreign Investment',
    category: 'Economics — Money, Credit & G20',
    simpleMeaning: 'Company operating production across multiple nations to cut costs and maximise profit.',
    ncertDefinition:
      'A company that owns or controls production in more than one nation; money spent by MNCs to buy land, buildings, machines & equipment abroad is called Foreign Investment.',
    example: 'Cargill Foods (USA) acquired India’s Parakh Foods; Ford Motors invested ₹1,700 crore in Chennai.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'globalization-and-g20',
      sectionId: 'eco-04-contrast',
    },
  },
  {
    id: 'sst-gl-liberalisation',
    term: 'Trade Barriers & Liberalisation (1991)',
    category: 'Economics — Money, Credit & G20',
    simpleMeaning: 'Govt restrictions on imports (like import tax) vs. removing them to open trade.',
    ncertDefinition:
      'Tax on imports is an example of a Trade Barrier; removing barriers or restrictions set by the government on foreign trade and foreign investment is known as Liberalisation.',
    example: 'India used barriers post-1947 to protect infant industries, then liberalised in 1991.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'globalization-and-g20',
      sectionId: 'eco-04-contrast',
    },
  },
  {
    id: 'sst-gl-wto',
    term: 'World Trade Organisation (WTO)',
    category: 'Economics — Money, Credit & G20',
    simpleMeaning: 'International body whose stated aim is to liberalise global trade rules.',
    ncertDefinition:
      'An international organisation started at the initiative of developed countries to establish rules regarding international trade and push member nations to remove trade barriers.',
    example: 'Nearly 160+ nations are WTO members; supports liberalisation alongside technology.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'globalization-and-g20',
      sectionId: 'eco-04-qa',
    },
  },
  {
    id: 'sst-gl-g20',
    term: 'G20 & Vasudhaiva Kutumbakam (2023)',
    symbol: '19 Countries + EU + African Union',
    category: 'Economics — Money, Credit & G20',
    simpleMeaning: 'Premier global economic cooperation forum (~85% GDP); hosted by India in 2023.',
    ncertDefinition:
      'Intergovernmental forum comprising 19 nations + European Union + African Union (admitted at New Delhi 2023), accounting for ~85% global GDP, >75% trade & ~2/3rd population; operates via Sherpa & Finance Tracks and rotating Troika.',
    example: 'India’s theme: "One Earth, One Family, One Future" (DPI, Global Biofuels Alliance, Voice of Global South).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-economics',
      subtopicSlug: 'globalization-and-g20',
      sectionId: 'eco-04-g20-deep',
    },
  },

  // ==========================================
  // CIVICS — CONSTITUTION & FEDERALISM (11)
  // ==========================================
  {
    id: 'sst-gl-majoritarianism',
    term: 'Majoritarianism',
    category: 'Civics — Constitution & Federalism',
    simpleMeaning: 'Belief that the majority community can impose its will while ignoring minorities.',
    ncertDefinition:
      'A belief that the majority community should be able to rule a country in whichever way it wants, by disregarding the wishes and needs of the minority.',
    example: 'Sri Lanka’s 1956 Sinhala Only Act triggered Tamil alienation and decades of Civil War.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'power-sharing',
      sectionId: 'civ-01-architecture',
    },
  },
  {
    id: 'sst-gl-community-govt',
    term: 'Community Government (Belgium)',
    category: 'Civics — Constitution & Federalism',
    simpleMeaning: 'Belgium’s 3rd government elected by Dutch, French, or German speakers regardless of residence.',
    ncertDefinition:
      'A third kind of government in Belgium elected by people belonging to one language community; exercises power over cultural, educational, and language-related issues.',
    example: 'Along with equal Central & Brussels ministers, prevented linguistic split and won EU HQ.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'power-sharing',
      sectionId: 'civ-01-matrix',
    },
  },
  {
    id: 'sst-gl-checks-balances',
    term: 'Horizontal Power-Sharing (Checks & Balances)',
    category: 'Civics — Constitution & Federalism',
    simpleMeaning: 'Legislature, Executive & Judiciary at the same level keeping watch on each other.',
    ncertDefinition:
      'Power shared among different organs of government placed at the same level so none can exercise unlimited power; each organ checks the others.',
    example: 'Executive appoints judges, yet judges can check executive actions and laws made by legislature.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'power-sharing',
      sectionId: 'civ-01-visual',
    },
  },
  {
    id: 'sst-gl-prudential-moral',
    term: 'Prudential vs. Moral Reasons',
    category: 'Civics — Constitution & Federalism',
    simpleMeaning: 'Practical conflict-avoidance outcomes vs. democratic fairness as an ethical duty.',
    ncertDefinition:
      'Prudential reasons stress that power-sharing brings better outcomes (reduces violence & instability); Moral reasons emphasise the very act of power-sharing is valuable as the spirit of democracy.',
    example: 'Reserved constituencies (prudential stability) vs. Gram Sabha consultation (moral democratic right).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'power-sharing',
      sectionId: 'civ-01-matrix',
    },
  },
  {
    id: 'sst-gl-federalism',
    term: 'Federalism vs. Unitary System',
    category: 'Civics — Constitution & Federalism',
    simpleMeaning: 'Two+ constitutionally independent tiers vs. one dominant centre commanding subordinates.',
    ncertDefinition:
      'Federalism divides power between a central authority and constituent units via constitutional guarantee; in a Unitary system sub-units are subordinate and can take orders from the central govt.',
    example: 'India & USA (Federal) vs. UK & Sri Lanka (Unitary).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'federalism',
      sectionId: 'civ-02-architecture',
    },
  },
  {
    id: 'sst-gl-coming-holding',
    term: 'Coming Together vs. Holding Together',
    category: 'Civics — Constitution & Federalism',
    simpleMeaning: 'Independent states pooling sovereignty equally vs. a large nation dividing power.',
    ncertDefinition:
      'Coming Together: independent states unite for security with equal state power (USA, Switzerland, Australia). Holding Together: large country divides power between Centre & states, with Centre stronger (India, Spain, Belgium).',
    example: 'Indian states don’t all have identical powers (e.g., Art. 371 special status in NE states).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'federalism',
      sectionId: 'civ-02-matrix',
    },
  },
  {
    id: 'sst-gl-lists',
    term: 'Union, State, Concurrent & Residuary Lists',
    category: 'Civics — Constitution & Federalism',
    simpleMeaning: 'Constitutional rulebook splitting who makes laws over what subjects.',
    ncertDefinition:
      'Union (Defence, Banking, Foreign Affairs, Currency — Centre); State (Police, Agriculture, Trade, Irrigation — States); Concurrent (Education, Forest, Marriage, Adoption — Both, Union prevails); Residuary (Computer Software — Union).',
    example: 'Shifting subjects requires 2/3rd Parliamentary majority + ratification by ≥50% of States.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'federalism',
      sectionId: 'civ-02-visual',
    },
  },
  {
    id: 'sst-gl-scheduled-lang',
    term: 'Scheduled Languages (22)',
    symbol: 'Hindi + 21 Others (8th Schedule)',
    category: 'Civics — Constitution & Federalism',
    simpleMeaning: '22 officially recognised Indian languages; Hindi is an Official (NOT National) language.',
    ncertDefinition:
      'Apart from Hindi (~44% mother tongue), 21 other languages are recognised as Scheduled Languages by the Constitution; Central govt exam candidates may opt for any of them.',
    example: 'India avoided Sri Lanka’s mistake by continuing English alongside Hindi rather than imposing Hindi.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'federalism',
      sectionId: 'civ-02-matrix',
    },
  },
  {
    id: 'sst-gl-decentralisation',
    term: 'Decentralisation (1992 Amendments)',
    symbol: '≥1/3rd Women • State EC • Gram Sabha',
    category: 'Civics — Constitution & Federalism',
    simpleMeaning: 'Giving constitutional power & funds from Centre/States down to Panchayats & Municipalities.',
    ncertDefinition:
      'Taking power from Central & State govts and giving it to local government; the 1992 Amendments mandated 5-yearly polls, SC/ST/OBC & ≥1/3rd women seats, State EC, and revenue sharing.',
    example: 'Rural: Gram Panchayat → Panchayat Samiti → Zilla Parishad; Urban: Municipality (Chairperson) & Corporation (Mayor).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'federalism',
      sectionId: 'civ-02-qa',
    },
  },
  {
    id: 'sst-gl-secular-state',
    term: 'Secular State (5 Indian Provisions)',
    category: 'Civics — Constitution & Federalism',
    simpleMeaning: 'State with NO official religion, guaranteeing equal religious freedom and equality.',
    ncertDefinition:
      'No official state religion; freedom to profess, practise, propagate or not follow any religion; ban on religious discrimination; and state right to intervene to ensure equality within religions (e.g., banning untouchability).',
    example: 'Distinct from Sri Lanka (Buddhism) or Pakistan (Islam) which give special state status.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'gender-religion-and-caste',
      sectionId: 'civ-03-architecture',
    },
  },
  {
    id: 'sst-gl-sexual-division',
    term: 'Sexual Division of Labour & Feminist',
    category: 'Civics — Constitution & Federalism',
    simpleMeaning: 'Unpaid housework assigned to women vs. belief in equal rights for women & men.',
    ncertDefinition:
      'Sexual division of labour assigns all work inside the home to women and outside work to men; a Feminist is a woman or a man who believes in equal rights and opportunities for women and men.',
    example: 'Led to Equal Remuneration Act (1976) and Nari Shakti Vandan Adhiniyam (2023 — 33% seats).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'gender-religion-and-caste',
      sectionId: 'civ-03-qa',
    },
  },

  // ==========================================
  // CIVICS — PARTIES & DEMOCRACY (11)
  // ==========================================
  {
    id: 'sst-gl-communalism',
    term: 'Communalism',
    category: 'Civics — Parties & Democracy',
    simpleMeaning: 'Treating one’s religion as superior and politics as an arena of rival religious camps.',
    ncertDefinition:
      'Idea that religion is the principal basis of social community, claiming followers of different religions cannot belong to the same social community — spanning everyday stereotypes, majoritarianism, sacred mobilization & riots.',
    example: 'Must be countered by secular democracy and everyday constitutional equality.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'gender-religion-and-caste',
      sectionId: 'civ-03-visual',
    },
  },
  {
    id: 'sst-gl-caste-politics',
    term: 'Caste in Politics vs. Politics in Caste',
    category: 'Civics — Parties & Democracy',
    simpleMeaning: 'How caste shapes candidate tickets vs. how politics reshapes caste alliances.',
    ncertDefinition:
      'Caste in politics focuses on parties picking candidates & cabinet ministers by caste (yet elections are NOT only about caste); Politics in caste occurs when castes absorb sub-castes and form Backward/Forward coalitions.',
    example: 'No parliamentary constituency has a single-caste majority, and sitting MPs still lose elections.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'gender-religion-and-caste',
      sectionId: 'civ-03-matrix',
    },
  },
  {
    id: 'sst-gl-political-party',
    term: 'Political Party & Partisan',
    symbol: 'Leaders + Active Members + Followers',
    category: 'Civics — Parties & Democracy',
    simpleMeaning: 'Organised group contesting elections to win power & pursue collective policies.',
    ncertDefinition:
      'A group of people who come together to contest elections and hold power in the government; a Partisan is someone strongly committed to a party/faction, unable to take a balanced view.',
    example: 'Performs 7 functions: contest polls, policies, laws, run govt, opposition, public opinion, welfare access.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'political-parties',
      sectionId: 'civ-04-architecture',
    },
  },
  {
    id: 'sst-gl-national-party',
    term: 'ECI National vs. State Party Criteria',
    symbol: '6% + 4 LS Seats  |  6% + 2 State Seats',
    category: 'Civics — Parties & Democracy',
    simpleMeaning: 'Official Election Commission vote/seat thresholds granting a permanent reserved symbol.',
    ncertDefinition:
      'State Party: ≥6% votes in State Assembly election + ≥2 seats. National Party: ≥6% votes in Lok Sabha or Assembly elections in 4 states + ≥4 Lok Sabha seats.',
    example: '6 National Parties in NCERT: INC (1885), CPI-M (1964), BJP (1980), BSP (1984), AAP (2012), NPP (2013).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'political-parties',
      sectionId: 'civ-04-visual',
    },
  },
  {
    id: 'sst-gl-defection',
    term: 'Defection & Anti-Defection Law',
    category: 'Civics — Parties & Democracy',
    simpleMeaning: 'Winning MP/MLA switching parties after elections — now punished with loss of seat.',
    ncertDefinition:
      'Changing party allegiance from the party on which a person got elected to a different party; Constitutional Amendment makes defectors lose their legislative seat.',
    example: 'One of 3 enacted reforms alongside SC mandatory Affidavit & EC ITR/internal-poll order.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'political-parties',
      sectionId: 'civ-04-matrix',
    },
  },
  {
    id: 'sst-gl-affidavit',
    term: 'Mandatory Affidavit (Supreme Court Reform)',
    category: 'Civics — Parties & Democracy',
    simpleMeaning: 'Signed legal declaration by election candidates stating wealth & pending criminal cases.',
    ncertDefinition:
      'A signed document submitted to an officer where a candidate makes a sworn statement regarding personal property and pending criminal cases to curb money & muscle power.',
    example: 'Empowers voters with transparent background information before casting their ballot.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'political-parties',
      sectionId: 'civ-04-matrix',
    },
  },
  {
    id: 'sst-gl-transparency',
    term: 'Transparency (Outcomes of Democracy)',
    category: 'Civics — Parties & Democracy',
    simpleMeaning: 'Citizens’ right and practical means to inspect how government decisions were taken.',
    ncertDefinition:
      'Ensuring decisions follow norms and procedures so a citizen who wants to know if a decision was taken through correct procedures has the right and means to examine the process.',
    example: 'Supported in India by instruments like the Right to Information (RTI).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'outcomes-of-democracy',
      sectionId: 'civ-05-architecture',
    },
  },
  {
    id: 'sst-gl-legitimate',
    term: 'Accountable, Responsive & Legitimate Govt',
    category: 'Civics — Parties & Democracy',
    simpleMeaning: 'Answerable to voters, attentive to public needs, and accepted as people’s own rule.',
    ncertDefinition:
      'Democracy produces a government accountable via free/fair elections, expected to be responsive to citizen needs, and undeniably legitimate as the people’s own chosen government.',
    example: 'Even where efficiency or corruption record is mixed, South Asian voters overwhelmingly back democracy.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'outcomes-of-democracy',
      sectionId: 'civ-05-visual',
    },
  },
  {
    id: 'sst-gl-diversity-conditions',
    term: '2 Conditions for Accommodating Social Diversity',
    category: 'Civics — Parties & Democracy',
    simpleMeaning: 'Majority works with minority, and majority never means permanent birth-community rule.',
    ncertDefinition:
      '(1) Majority always needs to work with the minority so government represents the general view; (2) Rule by majority must NOT become rule by a majority community by religion, race or language.',
    example: 'Every citizen must have a real chance of being in the majority at some point.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'outcomes-of-democracy',
      sectionId: 'civ-05-architecture',
    },
  },
  {
    id: 'sst-gl-dignity',
    term: 'Dignity & Freedom of Citizens',
    category: 'Civics — Parties & Democracy',
    simpleMeaning: 'Democracy’s strongest triumph: equal legal/moral standing for women & oppressed castes.',
    ncertDefinition:
      'Passion for respect and freedom is the basis of democracy; legal and moral recognition empowers women and disadvantaged castes to demand equal status and equal opportunity.',
    example: 'Public complaints prove people have grown from passive "subjects" into active "citizens".',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'outcomes-of-democracy',
      sectionId: 'civ-05-qa',
    },
  },
  {
    id: 'sst-gl-nari-shakti',
    term: 'Nari Shakti Vandan Adhiniyam (2023)',
    symbol: '33% Reservation in Lok Sabha & Assemblies',
    category: 'Civics — Parties & Democracy',
    simpleMeaning: '2023 law reserving 1/3rd seats for women in Parliament and State Assemblies.',
    ncertDefinition:
      'Women’s Reservation Act, 2023 giving 33% reservation of seats for women in Lok Sabha, State Legislative Assemblies, and Delhi Assembly — extending the 1992 local-body quota.',
    example: 'Addresses the gap where women formed <5% of State Assemblies and 14.36% of 2019 Lok Sabha.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-civics',
      subtopicSlug: 'gender-religion-and-caste',
      sectionId: 'civ-03-case-traps',
    },
  },
  // ==========================================
  // HISTORY — NATIONALISM, GLOBAL WORLD (1-1.3) & PRINT CULTURE (26)
  // ==========================================
  {
    id: 'sst-gl-hist-01',
    term: 'Absolutist',
    symbol: 'Unrestrained Centralised Monarchy',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'A repressive, centralised, and militarised monarchy with no limits on royal power.',
    ncertDefinition:
      'Literally, a government or system of rule that has no restraints on the power exercised; in history, the term refers to a form of monarchical government that was centralised, militarised and repressive.',
    example: 'Shattered remains of absolutist institutions lie in the foreground of Frédéric Sorrieu’s 1848 utopian print.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'rise-of-nationalism-in-europe',
      sectionId: 'hist-01-french-rev-napoleon',
    },
  },
  {
    id: 'sst-gl-hist-02',
    term: 'Utopian',
    symbol: 'Ideal Unlikely Society',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'A vision of society so ideal that it is unlikely to ever exist in reality.',
    ncertDefinition:
      'A vision of a society that is so ideal that it is unlikely to actually exist (Frédéric Sorrieu’s 1848 dream of democratic and social Republics marching harmoniously).',
    example: 'In Sorrieu’s 1848 utopian print, Germans already carried a black-red-gold flag even before national unification.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'rise-of-nationalism-in-europe',
      sectionId: 'hist-01-french-rev-napoleon',
    },
  },
  {
    id: 'sst-gl-hist-03',
    term: 'Plebiscite',
    symbol: 'Direct Citizen Vote',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'A direct vote asking all people of a region to accept or reject a proposal.',
    ncertDefinition:
      'A direct vote by which all the people of a region are asked to accept or reject a proposal (quoted by Ernst Renan: "A nation’s existence is a daily plebiscite").',
    example: 'Renan argued a nation’s existence depends on ongoing consent ("daily plebiscite"), not mere race or language.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'rise-of-nationalism-in-europe',
      sectionId: 'hist-01-french-rev-napoleon',
    },
  },
  {
    id: 'sst-gl-hist-04',
    term: 'Civil Code of 1804 (Napoleonic Code)',
    symbol: 'Uniform Law & Abolition of Birth Privileges',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Napoleon’s 1804 legal reforms ending feudal birth privileges and securing property rights.',
    ncertDefinition:
      'Did away with all privileges based on birth, established equality before the law, secured the right to property, abolished the feudal system, freed peasants from serfdom/manorial dues, and removed town guild restrictions.',
    example: 'Exported to Dutch Republic, Switzerland, Italy, and Germany — though later resented due to taxes, censorship & conscription.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'rise-of-nationalism-in-europe',
      sectionId: 'hist-01-french-rev-napoleon',
    },
  },
  {
    id: 'sst-gl-hist-05',
    term: 'Conservatism (1815 Vienna)',
    symbol: 'Monarchy + Church + Hierarchy',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Political philosophy stressing preservation of monarchy, Church, property & social hierarchy.',
    ncertDefinition:
      'A political philosophy that stressed the importance of tradition, established institutions and customs, and preferred gradual development to quick change (Duke Metternich hosted the 1815 Congress of Vienna).',
    example: 'Post-1815 regimes imposed strict censorship laws while retaining Napoleon’s efficient bureaucracy and army.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'rise-of-nationalism-in-europe',
      sectionId: 'hist-01-liberalism-conservatism',
    },
  },
  {
    id: 'sst-gl-hist-06',
    term: 'Zollverein (1834)',
    symbol: 'Prussian Customs Union • 30+ → 2 Currencies',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: '1834 German customs union initiated by Prussia ending internal tariffs and cutting currencies to two.',
    ncertDefinition:
      'A customs union formed in 1834 at the initiative of Prussia and joined by most of the German states; it abolished tariff barriers and reduced the number of currencies from over thirty to two.',
    example: 'Economist Friedrich List declared Zollverein aimed to bind the Germans economically into a nation.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'rise-of-nationalism-in-europe',
      sectionId: 'hist-01-liberalism-conservatism',
    },
  },
  {
    id: 'sst-gl-hist-07',
    term: 'Allegory (Marianne & Germania)',
    symbol: 'Abstract Nation Personified as Woman',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Representing an abstract idea like liberty or a nation through a concrete female figure.',
    ncertDefinition:
      'When an abstract idea (for instance, greed, envy, freedom, liberty) is expressed through a person or a thing — e.g., Marianne (red cap, tricolour, cockade) in France and Germania (oak crown = heroism, olive branch = peace) in Germany.',
    example: 'Careful CBSE pair: Sword = readiness to fight, whereas Olive branch around sword = willingness to make peace.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'rise-of-nationalism-in-europe',
      sectionId: 'hist-01-unifications-allegories-balkans',
    },
  },
  {
    id: 'sst-gl-hist-08',
    term: 'Balkan Powder Keg (Post-1871)',
    symbol: 'Slavs + Ottoman Collapse + Big Power Rivalry',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Ethnic conflict zone under Ottoman disintegration that sparked the 1914 First World War.',
    ncertDefinition:
      'A region of geographical and ethnic variation (Romania, Bulgaria, Albania, Greece, Serbia, etc.) inhabited broadly by Slavs under Ottoman control, where Romantic nationalism and rivalry among Russia, Germany, England & Austro-Hungary triggered WWI (1914).',
    example: 'Shows how late-19th-century nationalism aligned with imperialism turned explosive.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'rise-of-nationalism-in-europe',
      sectionId: 'hist-01-unifications-allegories-balkans',
    },
  },
  {
    id: 'sst-gl-hist-09',
    term: 'Satyagraha',
    symbol: 'Soul-Force & Non-Violent Truth',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Gandhian method of non-violent struggle appealing directly to the oppressor’s conscience.',
    ncertDefinition:
      'Emphasised the power of truth and the need to search for truth; suggested that if the struggle was against injustice, physical force was not necessary to fight the oppressor — without vengeance, truth wins through non-violence.',
    example: 'Tested first in Champaran (1917 indigo), Kheda (1917 peasants), and Ahmedabad (1918 cotton mill workers).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'nationalism-in-india',
      sectionId: 'hist-02-ww1-satyagraha-rowlatt',
    },
  },
  {
    id: 'sst-gl-hist-10',
    term: 'Rowlatt Act (1919)',
    symbol: '2-Year Detention Without Trial',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: '1919 British repressive law permitting two-year political detention without trial.',
    ncertDefinition:
      'Hurriedly passed through the Imperial Legislative Council despite united Indian opposition; gave government enormous powers to repress political activities and allowed detention of political prisoners without trial for two years.',
    example: 'Protests against the Rowlatt Act culminated in Martial Law in Amritsar and the 13 April 1919 Jallianwala Bagh Massacre.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'nationalism-in-india',
      sectionId: 'hist-02-ww1-satyagraha-rowlatt',
    },
  },
  {
    id: 'sst-gl-hist-11',
    term: 'Boycott & Picketing',
    symbol: 'Refusal to Associate / Blocking Entrance',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Boycott rejects dealing with colonial institutions/goods; picketing blocks shop/office entrances.',
    ncertDefinition:
      'Boycott: refusal to deal and associate with people, or participate in activities, or buy and use foreign things. Picket: a form of demonstration or protest by which people block the entrance to a shop, factory or office.',
    example: 'Boycott halved Indian imports of foreign cloth from Rs 102 crore to Rs 57 crore between 1921 and 1922.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'nationalism-in-india',
      sectionId: 'hist-02-ncm-streams',
    },
  },
  {
    id: 'sst-gl-hist-12',
    term: 'Begar',
    symbol: 'Unpaid Forced Labour',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Labour that villagers were forced to contribute without any payment.',
    ncertDefinition:
      'Labour that villagers were forced to contribute without any payment — demanded by Awadh talukdars and landlords as well as colonial officials for road construction in Gudem Hills.',
    example: 'Baba Ramchandra’s Awadh peasant movement (1920–21) demanded abolition of begar and social boycott (nai-dhobi bandhs).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'nationalism-in-india',
      sectionId: 'hist-02-ncm-streams',
    },
  },
  {
    id: 'sst-gl-hist-13',
    term: 'Inland Emigration Act of 1859',
    symbol: 'Assam Tea Garden Travel Ban',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Colonial law barring Assam plantation workers from leaving tea gardens without permission.',
    ncertDefinition:
      'Act under which plantation workers in Assam were not permitted to leave the tea gardens without permission, and in fact they were rarely given such permission.',
    example: 'Hearing of Non-Cooperation, thousands defied authorities and left plantations hoping "Gandhi Raj" would restore village land.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'nationalism-in-india',
      sectionId: 'hist-02-ncm-streams',
    },
  },
  {
    id: 'sst-gl-hist-14',
    term: 'Dandi Salt March (1930)',
    symbol: '12 Mar–6 Apr 1930 • 240 Miles • 78 Volunteers',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: '240-mile march from Sabarmati to Dandi launching Civil Disobedience by breaking the Salt Law.',
    ncertDefinition:
      'Mahatma Gandhi’s 24-day march with 78 trusted volunteers from Sabarmati Ashram to coastal town Dandi (Gujarat), where he manufactured salt on 6 April 1930, actively violating colonial law.',
    example: 'Salt was chosen because it was essential for rich and poor alike, uniting everyone against the British salt monopoly.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'nationalism-in-india',
      sectionId: 'hist-02-salt-march-and-cdm',
    },
  },
  {
    id: 'sst-gl-hist-15',
    term: 'Poona Pact (September 1932)',
    symbol: 'Gandhi–Ambedkar SC Reserved Seats',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: '1932 compromise granting Depressed Classes reserved seats voted by the general electorate.',
    ncertDefinition:
      'Agreement signed in September 1932 between Mahatma Gandhi and Dr. B.R. Ambedkar giving Depressed Classes (later Scheduled Castes) reserved seats in provincial and central legislative councils, voted in by the general electorate.',
    example: 'Replaced British offer of separate Dalit electorates after Gandhiji’s fast unto death.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'nationalism-in-india',
      sectionId: 'hist-02-social-groups-and-limits',
    },
  },
  {
    id: 'sst-gl-hist-16',
    term: 'Cowries (Cowdi)',
    symbol: 'Maldives Seashell Currency',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Seashells from the Maldives used as long-distance currency across Asia and East Africa.',
    ncertDefinition:
      'Seashells (the Hindi cowdi) from the Maldives used as a form of currency that found their way to China and East Africa for over a millennium in the pre-modern world.',
    example: 'Proves ancient Indian Ocean monetary links centuries before European dominance.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'making-of-a-global-world',
      sectionId: 'hist-03-scope-and-premodern',
    },
  },
  {
    id: 'sst-gl-hist-17',
    term: 'Silk Routes (Land & Sea)',
    symbol: 'Asia ↔ Europe ↔ North Africa Network',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Overland and maritime trade corridors linking Asia with Europe and North Africa before the 15th c.',
    ncertDefinition:
      'Pre-modern land and sea trade networks named after west-bound Chinese silk cargoes; carried Chinese silk/pottery and Indian/SE Asian spices westwards in exchange for European gold & silver, plus Buddhism, Christianity, and Islam.',
    example: 'Existed since before the Christian Era and thrived almost until the 15th century.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'making-of-a-global-world',
      sectionId: 'hist-03-silk-routes',
    },
  },
  {
    id: 'sst-gl-hist-18',
    term: 'Irish Potato Famine (Mid-1840s)',
    symbol: 'Crop Blight & Starvation Deaths',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Mid-1840s potato crop failure in Ireland killing hundreds of thousands of poor peasants.',
    ncertDefinition:
      'Ireland’s poorest peasants had become so dependent on American-origin potatoes that when disease destroyed the crop in the mid-1840s, hundreds of thousands died of starvation.',
    example: 'Illustrates Section 1.2 ("Food Travels"): new global crops could mean life or death for Europe’s poor.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'making-of-a-global-world',
      sectionId: 'hist-03-food-travels',
    },
  },
  {
    id: 'sst-gl-hist-19',
    term: 'El Dorado & Smallpox Biological Conquest',
    symbol: '16th-c. Americas Immunity Gap',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Fabled city of gold myths plus European smallpox germs decimating unimmunised Native Americans.',
    ncertDefinition:
      'El Dorado: 17th-century legend of South America’s fabled city of gold (alongside actual Peru/Mexico silver mines). Smallpox: invisible biological weapon carried by Europeans against isolated American inhabitants lacking immunity.',
    example: 'Governor John Winthrop (1634) claimed smallpox cleared colonists’ land title.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'making-of-a-global-world',
      sectionId: 'hist-03-conquest-disease-trade',
    },
  },
  {
    id: 'sst-gl-hist-20',
    term: 'Accordion Book & Diamond Sutra',
    symbol: 'AD 594 China • AD 868 Japan',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Folded Chinese woodblock book format & Japan’s oldest printed Buddhist book (AD 868).',
    ncertDefinition:
      'Accordion book: traditional Chinese book folded and stitched at the side because thin porous paper could not be printed on both sides. Diamond Sutra (AD 868): oldest Japanese book containing six sheets of text and woodcut illustrations.',
    example: 'Brought to Japan by Buddhist missionaries from China around AD 768–770.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'print-culture-and-the-modern-world',
      sectionId: 'hist-04-east-asia-and-gutenberg',
    },
  },
  {
    id: 'sst-gl-hist-21',
    term: 'Vellum',
    symbol: 'Animal-Skin Parchment',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Fine luxury parchment made from the skin of animals used by European elites.',
    ncertDefinition:
      'A parchment made from the skin of animals — preferred for luxury handwritten aristocratic editions even after woodblock printing reached Europe via Marco Polo (1295).',
    example: 'Rich monastic libraries dismissed cheap printed books as vulgar compared to vellum manuscripts.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'print-culture-and-the-modern-world',
      sectionId: 'hist-04-east-asia-and-gutenberg',
    },
  },
  {
    id: 'sst-gl-hist-22',
    term: 'Platen, Compositor & Galley',
    symbol: 'Letterpress Mechanical Terms',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Letterpress printing parts: compositor sets type on a galley frame; platen presses paper onto type.',
    ncertDefinition:
      'Compositor: person who composes the text for printing. Galley: metal frame in which types are laid and text composed. Platen: board pressed onto the back of paper to get the impression from the type (later steel).',
    example: 'Developed alongside Gutenberg’s 1448 olive-press adaptation and lead moulds.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'print-culture-and-the-modern-world',
      sectionId: 'hist-04-east-asia-and-gutenberg',
    },
  },
  {
    id: 'sst-gl-hist-23',
    term: 'Protestant Reformation & 1558 Index',
    symbol: 'Martin Luther (1517) vs. Roman Inquisition',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: '16th-c. religious split sparked by Luther’s printed Ninety Five Theses and Catholic Church censorship.',
    ncertDefinition:
      'Protestant Reformation: 16th-century movement to reform the Catholic Church led by Martin Luther (1517). Inquisition: former Roman Catholic court identifying & punishing heretics (executed Italian miller Menocchio), reinforced by the 1558 Index of Prohibited Books.',
    example: 'Martin Luther called printing "the ultimate gift of God and the greatest one."',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'print-culture-and-the-modern-world',
      sectionId: 'hist-04-print-revolution-reformation-french-rev',
    },
  },
  {
    id: 'sst-gl-hist-24',
    term: 'Chapbooks & Bibliothèque Bleue',
    symbol: 'Penny England Books • Blue-Cover France Books',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Cheap pocket books sold by pedlars in 18th-c. England and blue-paper booklets in France.',
    ncertDefinition:
      'Chapbooks: pocket-size books sold for a penny by travelling pedlars called chapmen in England. Bibliothèque Bleue: low-priced small books in France printed on poor-quality paper and bound in cheap blue covers.',
    example: 'Both fed Europe’s 17th–18th century "Reading Mania" as literacy rose to 60–80%.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'print-culture-and-the-modern-world',
      sectionId: 'hist-04-print-revolution-reformation-french-rev',
    },
  },
  {
    id: 'sst-gl-hist-25',
    term: 'Ulama & Fatwa (Deoband 1867)',
    symbol: 'Islamic Legal Scholars & Decrees',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Muslim scholars who used cheap lithographic presses to publish Urdu scripture translations & religious guidance.',
    ncertDefinition:
      'Ulama: legal scholars of Islam and the sharia. Fatwa: a legal pronouncement on Islamic law usually given by a mufti. The Deoband Seminary (founded 1867) published thousands of fatwas guiding everyday Muslim life.',
    example: 'Used cheap lithographic presses alongside Persian papers Jam-i-Jahan Nama & Shamsul Akhbar (1822).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'print-culture-and-the-modern-world',
      sectionId: 'hist-04-india-and-world-of-print',
    },
  },
  {
    id: 'sst-gl-hist-26',
    term: 'Vernacular Press Act (1878)',
    symbol: 'Modelled on Irish Press Laws',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: '1878 colonial censorship law allowing warning and seizure of Indian-language nationalist presses.',
    ncertDefinition:
      'Passed in 1878 and modelled on the Irish Press Laws; gave colonial government extensive powers to censor reports/editorials in the vernacular press and confiscate printing machinery if warnings against "seditious" reports were ignored.',
    example: 'Passed after the 1857 Revolt turned vernacular newspapers assertively nationalist.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-history',
      subtopicSlug: 'print-culture-and-the-modern-world',
      sectionId: 'hist-04-women-poor-and-censorship',
    },
  },

  // ==========================================
  // GEOGRAPHY — RESOURCES, CROPS & MAPS (28)
  // ==========================================
  {
    id: 'sst-gl-geo-01',
    term: 'Sustainable Development & Agenda 21',
    symbol: 'Rio Summit June 1992',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Development without harming nature or compromising future generations’ needs.',
    ncertDefinition:
      'Sustainable economic development means development should take place without damaging the environment and present development should not compromise with needs of future generations. Agenda 21 (Rio 1992) seeks to combat environmental damage, poverty & disease through global co-operation.',
    example: 'A major objective of Agenda 21 is that every local government should draw its own local Agenda 21.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'resources-and-development',
      sectionId: 'geo-01-resources-and-planning',
    },
  },
  {
    id: 'sst-gl-geo-02',
    term: 'Bangar vs. Khadar',
    symbol: 'Old Coarse Alluvial vs. New Fine Alluvial',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Two age subtypes of alluvial soil differing in kankar nodules and fertility.',
    ncertDefinition:
      'Bangar is old alluvial soil containing a higher concentration of kankar nodules and lower fertility; Khadar is new alluvial soil containing finer particles and noticeably higher fertility.',
    example: 'Floodplains are renewed annually with fertile Khadar deposits.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'resources-and-development',
      sectionId: 'geo-01-soils-and-erosion',
    },
  },
  {
    id: 'sst-gl-geo-03',
    term: 'Regur (Black Cotton Soil)',
    symbol: 'Deccan Basalt • Moisture-Retentive',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Clayey Deccan basalt lava soil ideal for growing cotton.',
    ncertDefinition:
      'Black soil (regur) consists of extremely fine clayey material made of lava flows; retains moisture, develops deep aeration cracks in hot weather, is rich in calcium carbonate/magnesium/potash/lime, and poor in phosphoric content.',
    example: 'Covers Deccan trap plateau across Maharashtra, Saurashtra, Malwa, MP & Chhattisgarh.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'resources-and-development',
      sectionId: 'geo-01-soils-and-erosion',
    },
  },
  {
    id: 'sst-gl-geo-04',
    term: 'Laterite Soil',
    symbol: 'Latin "later" (Brick) • Intense Leaching',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Acidic tropical soil formed by intense leaching under high heat and heavy rain.',
    ncertDefinition:
      'Develops under tropical and subtropical climate with alternate wet and dry seasons; deep to very deep, acidic (pH < 6.0), formed by intense heavy-rain leaching.',
    example: 'After adopting soil-conservation, hilly Karnataka/Kerala/TN grow tea & coffee, while red laterite in TN/AP/KL grows cashew nut.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'resources-and-development',
      sectionId: 'geo-01-soils-and-erosion',
    },
  },
  {
    id: 'sst-gl-geo-05',
    term: 'Gullies, Bad Land & Ravines',
    symbol: 'Chambal Basin Gully Erosion',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Deep channels cut into clayey soil by running water making land unfit for farming.',
    ncertDefinition:
      'Running water cuts through clayey soils and makes deep channels as gullies; the land becomes unfit for cultivation and is known as bad land — in the Chambal basin such lands are called ravines.',
    example: 'Contrasted with Sheet Erosion (topsoil washed down a slope as a sheet) and Wind Erosion.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'resources-and-development',
      sectionId: 'geo-01-soils-and-erosion',
    },
  },
  {
    id: 'sst-gl-geo-06',
    term: 'Indian Wildlife (Protection) Act, 1972 & Project Tiger',
    symbol: '1972 Act • 1973 Project Tiger',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'India’s foundational wildlife law banning hunting & trade, followed by Project Tiger in 1973.',
    ncertDefinition:
      'Wildlife Protection Act (1972) banned hunting, gave legal protection to habitats, and restricted wildlife trade (expanded 1980/86 to insects & 1991 to 6 plants). Project Tiger (1973) countered tiger decline from ~55,000 to 1,827.',
    example: 'Major reserves: Corbett (UK), Sunderbans (WB), Bandhavgarh (MP), Sariska (RJ), Manas (AS), Periyar (KL).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'forest-and-wildlife-resources',
      sectionId: 'geo-02-wildlife-act-and-project-tiger',
    },
  },
  {
    id: 'sst-gl-geo-07',
    term: 'Reserved, Protected & Unclassed Forests',
    symbol: '>50% Reserved • ~1/3rd Protected',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Three administrative forest classes managed by the Forest Department & communities.',
    ncertDefinition:
      'Reserved (>50%, most valuable) and Protected (~1/3rd, saved from depletion) together form Permanent Forest Estates (MP leads with 75%). Unclassed forests belong to both govt & private individuals/communities (NE states & Gujarat).',
    example: 'Jammu & Kashmir, Uttarakhand & Kerala have high Reserved shares; Bihar, Punjab & Haryana have mostly Protected.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'forest-and-wildlife-resources',
      sectionId: 'geo-02-forest-categories',
    },
  },
  {
    id: 'sst-gl-geo-08',
    term: 'Joint Forest Management (JFM) & Sacred Groves',
    symbol: 'Odisha First Resolution (1988)',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'State–community forest restoration partnership and untouched tribal sacred forest patches.',
    ncertDefinition:
      'JFM (formalised 1988 in Odisha) involves village institutions protecting degraded govt forests for non-timber produce & timber shares. Sacred Groves are pristine virgin forests preserved untouched via tribal nature worship.',
    example: 'Mundas & Santhals worship mahua and kadamba trees; Alwar villages declared Bhairodev Dakav "Sonchuri".',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'forest-and-wildlife-resources',
      sectionId: 'geo-02-community-and-sacred-grooves',
    },
  },
  {
    id: 'sst-gl-geo-09',
    term: 'Multi-Purpose River Valley Projects',
    symbol: '"Temples of Modern India" (Nehru)',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Large dams combining irrigation, hydroelectricity, flood control & water supply.',
    ncertDefinition:
      'Barriers across flowing water impounding reservoirs for integrated uses; praised by Jawaharlal Nehru for blending agriculture and industrialisation, yet criticised for sediment trap, blocked spawning migration, submergence & displacement (Narmada Bachao Andolan).',
    example: '8 CBSE Map Dams: Salal, Bhakra Nangal, Tehri, Rana Pratap Sagar, Sardar Sarovar, Hirakud, Nagarjuna Sagar, Tungabhadra.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'water-resources',
      sectionId: 'geo-03-dams-pros-and-objections',
    },
  },
  {
    id: 'sst-gl-geo-10',
    term: 'Tankas & Palar Pani',
    symbol: 'Bikaner • Phalodi • Barmer (RJ)',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Underground rainwater cisterns storing Rajasthan’s purest natural water ("palar pani").',
    ncertDefinition:
      'Room-sized underground tanks connected to sloping rooftops via PVC pipes (first shower discarded to clean surfaces); stored rainwater ("palar pani") sustains drinking needs through summer and cools adjoining underground rooms.',
    example: 'Tamil Nadu became the first state to make rooftop rainwater harvesting compulsory for all houses.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'water-resources',
      sectionId: 'geo-03-rainwater-and-map-dams',
    },
  },
  {
    id: 'sst-gl-geo-11',
    term: 'Bamboo Drip Irrigation System',
    symbol: 'Meghalaya • 200-Year-Old • 20–80 Drops/Min',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Traditional Meghalaya hill technique channelling stream water drop-by-drop via split bamboos.',
    ncertDefinition:
      'A 200-year-old system in Meghalaya tapping stream/spring water (18–20 L/min) using bamboo pipes over hundreds of metres and reducing flow to 20–80 drops per minute at the root site of black pepper/betel leaf plants.',
    example: 'Avoids evaporation/runoff losses on steep rocky hill slopes.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'water-resources',
      sectionId: 'geo-03-rainwater-and-map-dams',
    },
  },
  {
    id: 'sst-gl-geo-12',
    term: 'Jhumming (Slash-and-Burn Agriculture)',
    symbol: 'NE India • Milpa • Roca • Ladang',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Primitive shifting cultivation where cleared forest patches are farmed until natural fertility drops.',
    ncertDefinition:
      'Farmers clear a land patch, grow cereals for family sustenance, and shift to a fresh patch once soil fertility drops so nature replenishes it; low productivity without modern fertilisers.',
    example: 'Called Jhumming in Assam/Meghalaya, Pamlou in Manipur, Dipa in Bastar, Bewar in MP & Milpa in Mexico.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'agriculture',
      sectionId: 'geo-04-farming-types',
    },
  },
  {
    id: 'sst-gl-geo-13',
    term: 'Rabi, Kharif & Zaid Cropping Seasons',
    symbol: 'Winter • Monsoon • Short Summer',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'India’s three annual agricultural cropping cycles.',
    ncertDefinition:
      'Rabi: Sown Oct–Dec, harvested Apr–Jun (wheat, barley, peas, gram, mustard). Kharif: Sown with monsoon onset, harvested Sep–Oct (paddy [Aus, Aman, Boro], maize, jowar, bajra, tur, cotton, jute, groundnut). Zaid: Short summer gap (watermelon, muskmelon, cucumber, fodder).',
    example: 'Western temperate cyclones help North-West Indian Rabi wheat yields.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'agriculture',
      sectionId: 'geo-04-seasons-and-major-crops',
    },
  },
  {
    id: 'sst-gl-geo-14',
    term: 'Golden Fibre (Jute) & Sericulture',
    symbol: 'WB Hugli Belt • Silkworm Cocoons',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Jute is India’s "Golden Fibre"; Sericulture is rearing silkworms for natural silk.',
    ncertDefinition:
      'Jute ("golden fibre") thrives on well-drained fertile floodplain soils renewed every year at high temperature (WB, Bihar, Assam, Odisha, Meghalaya). Sericulture: rearing silkworms fed on green leaves (especially mulberry) to produce silk fibre.',
    example: 'Jute makes gunny bags, mats, ropes, yarn & carpets — facing market competition from cheaper synthetic nylon.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'agriculture',
      sectionId: 'geo-04-seasons-and-major-crops',
    },
  },
  {
    id: 'sst-gl-geo-15',
    term: 'Bhoodan–Gramdan (Blood-less Revolution)',
    symbol: 'Vinoba Bhave • Pochampalli (80 Acres)',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Voluntary land/village donation movement initiated by Vinoba Bhave for landless peasants.',
    ncertDefinition:
      'Movement initiated by Acharya Vinoba Bhave; at Pochampalli (Andhra Pradesh / now Telangana), Shri Ram Chandra Reddy donated 80 acres to 80 landless villagers (Bhoodan), followed by zamindars gifting whole villages (Gramdan). Known as the "Blood-less Revolution".',
    example: 'Showed moral persuasion as an agrarian equity experiment alongside state land reforms, KCC & MSP.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'agriculture',
      sectionId: 'geo-04-reforms-and-map',
    },
  },
  {
    id: 'sst-gl-geo-16',
    term: 'Veins & Lodes vs. Placer Deposits',
    symbol: 'Igneous/Metamorphic vs. Alluvial Valley Sands',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Two contrasting rock/alluvial modes of mineral occurrence.',
    ncertDefinition:
      'Veins (smaller) and Lodes (larger) form when molten/gaseous minerals cool inside igneous/metamorphic rock cracks (tin, copper, zinc, lead). Placer (alluvial) deposits carry non-corrosive minerals in valley sands (gold, silver, tin, platinum).',
    example: 'Bauxite forms differently — via decomposition of surface rocks leaving a residual weathered mass.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'minerals-and-energy-resources',
      sectionId: 'geo-05-modes-and-ferrous',
    },
  },
  {
    id: 'sst-gl-geo-17',
    term: 'Rat-Hole Mining',
    symbol: 'Jowai & Cherapunjee (Meghalaya) • NGT Banned',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Dangerous narrow-tunnel family coal extraction in Meghalaya declared illegal by NGT.',
    ncertDefinition:
      'In tribal Meghalaya (where minerals belong to communities/individuals), coal mining in Jowai and Cherapunjee is carried out by family members via long narrow tunnels ("Rat-hole mining") — declared illegal by the National Green Tribunal (NGT).',
    example: 'Illustrates hazard and constitutional ownership exception in NE India.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'minerals-and-energy-resources',
      sectionId: 'geo-05-modes-and-ferrous',
    },
  },
  {
    id: 'sst-gl-geo-18',
    term: 'Magnetite vs. Hematite Iron Ore',
    symbol: '70% Iron Magnetic vs. 50–60% Industrial',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'India’s two highest-value iron ore grades.',
    ncertDefinition:
      'Magnetite is the finest iron ore with very high iron content (up to 70%) and excellent magnetic qualities vital in the electrical industry. Hematite is the most important industrial iron ore in quantity used (50–60% iron).',
    example: 'Bailadila’s 14 super high-grade hematite deposits export to Japan & South Korea via Vishakhapatnam port.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'minerals-and-energy-resources',
      sectionId: 'geo-05-modes-and-ferrous',
    },
  },
  {
    id: 'sst-gl-geo-19',
    term: 'Gondwana vs. Tertiary Coal Deposits',
    symbol: '>200M Yrs (Damodar) vs. ~55M Yrs (NE India)',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'India’s two geological coal ages differing by age, quality, and region.',
    ncertDefinition:
      'Gondwana coal (>200 million years old; metallurgical coal) occurs mainly in Damodar valley (Jharia, Raniganj, Bokaro) & Godavari/Mahanadi/Son/Wardha valleys. Tertiary coal (~55 million years old) occurs in NE states (Meghalaya, Assam, Arunachal, Nagaland).',
    example: 'Neyveli (Tamil Nadu) holds important Lignite (soft brown coal) reserves rather than Gondwana bituminous coal.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'minerals-and-energy-resources',
      sectionId: 'geo-05-energy-and-map-pins',
    },
  },
  {
    id: 'sst-gl-geo-20',
    term: 'HVJ Gas Pipeline & Monazite Sands (Thorium)',
    symbol: '1,700 km Hazira–Vijaipur–Jagdishpur • Kerala',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'India’s flagship cross-country gas artery & Kerala’s nuclear Thorium coastal sand source.',
    ncertDefinition:
      '1,700 km HVJ arterial pipeline built by GAIL linked Mumbai High & Bassein gas fields to western & northern fertiliser, power & industrial complexes. Monazite sands of Kerala are rich in Thorium for atomic energy.',
    example: 'Nuclear map plants using atomic fuel: Narora (UP), Kakrapara (GJ), Tarapur (MH), Kalpakkam (TN).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'minerals-and-energy-resources',
      sectionId: 'geo-05-energy-and-map-pins',
    },
  },
  {
    id: 'sst-gl-geo-21',
    term: 'Geothermal Energy',
    symbol: 'Parvati Valley (Manikaran) & Puga Valley (Ladakh)',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Electricity and heat generated from subterranean Earth’s internal thermal steam.',
    ncertDefinition:
      'Refers to heat and electricity produced using heat from the interior of the Earth (groundwater absorbs heat from hot rocks, rises as steam to drive turbines).',
    example: 'India’s two experimental geothermal projects operate at Parvati valley near Manikaran (HP) & Puga Valley (Ladakh).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'minerals-and-energy-resources',
      sectionId: 'geo-05-energy-and-map-pins',
    },
  },
  {
    id: 'sst-gl-geo-22',
    term: 'Basic (Key) vs. Consumer Industries',
    symbol: 'Raw Material Feeder vs. Direct Retail Output',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Classification of industry by main role in the economy.',
    ncertDefinition:
      'Basic or key industries supply their products as raw materials to manufacture other goods (e.g., iron and steel, copper smelting, aluminium smelting). Consumer industries produce goods for direct use by consumers (e.g., sugar, toothpaste, paper, fans).',
    example: 'Iron and steel is the premier basic industry — every light, medium & heavy sector relies on steel machinery.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'manufacturing-industries',
      sectionId: 'geo-06-importance-and-classification',
    },
  },
  {
    id: 'sst-gl-geo-23',
    term: 'Joint Sector & Cooperative Sector Industries',
    symbol: 'Oil India Ltd (Joint) • MH Sugar & KL Coir (Co-op)',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Two hybrid industrial ownership models contrasted with pure Public or Private firms.',
    ncertDefinition:
      'Joint sector industries are jointly run by the state and individuals/groups (e.g., Oil India Ltd. [OIL]). Cooperative sector industries are owned and operated by producers/suppliers of raw materials, workers or both (e.g., sugar industry in Maharashtra, coir industry in Kerala).',
    example: 'Cooperatives pool resources and share profits or losses proportionately — ideal for seasonal sugarcane crushing.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'manufacturing-industries',
      sectionId: 'geo-06-importance-and-classification',
    },
  },
  {
    id: 'sst-gl-geo-24',
    term: 'Iron & Steel Raw Material Ratio (4 : 2 : 1)',
    symbol: '4 Iron Ore : 2 Coking Coal : 1 Limestone',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Proportional heavy inputs explaining Chhotanagpur plateau industrial clustering.',
    ncertDefinition:
      'Iron ore, coking coal, and limestone are required roughly in the ratio of 4 : 2 : 1, along with small quantities of manganese to harden steel.',
    example: 'Six CBSE Map steel plants: Durgapur (WB), Bokaro & Jamshedpur (JH), Bhilai (CG), Vijayanagar (KA), Salem (TN).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'manufacturing-industries',
      sectionId: 'geo-06-agro-and-mineral-industries',
    },
  },
  {
    id: 'sst-gl-geo-25',
    term: 'Three-Phase Effluent Treatment & NTPC ISO 14001',
    symbol: 'Primary • Secondary • Tertiary + Ash Recycling',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Stepwise industrial wastewater purification and NTPC’s green power-station framework.',
    ncertDefinition:
      'Wastewater treatment requires: (1) Primary (mechanical screening, grinding, flocculation, sedimentation), (2) Secondary (biological process), and (3) Tertiary (biological/chemical/physical recycling). NTPC holds ISO 14001 EMS certification for green belts, ash-pond/water recycling & ecological monitoring.',
    example: 'Cooling hot effluents before river release also prevents thermal water pollution killing aquatic organisms.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'manufacturing-industries',
      sectionId: 'geo-06-pollution-ntpc-and-map',
    },
  },
  {
    id: 'sst-gl-geo-26',
    term: 'Kandla (Deendayal) Tidal Port',
    symbol: 'Gulf of Kuchchh, Gujarat',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'India’s first tidal port developed in Kuchchh right after Independence.',
    ncertDefinition:
      'First port developed soon after Independence in Kachchh (Gujarat) to ease trade volume on Mumbai port in the wake of loss of Karachi port to Pakistan after Partition.',
    example: 'Handles imports/exports across the fertile & industrial belt of Jammu & Kashmir, HP, Punjab, Haryana, Rajasthan & Gujarat.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'lifelines-of-national-economy-map',
      sectionId: 'geo-07-ports-and-airports-tables',
    },
  },
  {
    id: 'sst-gl-geo-27',
    term: 'Vishakhapatnam & Chennai Ports',
    symbol: 'Deepest Landlocked (AP) vs. Oldest Artificial (TN)',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Two marquee East Coast CBSE Q37b port clues frequently contrasted.',
    ncertDefinition:
      'Vishakhapatnam (Andhra Pradesh) is the deepest landlocked and well-protected port originally built for Bailadila iron-ore exports. Chennai (Tamil Nadu) is one of the oldest artificial ports in India.',
    example: 'East Coast South-to-North port order: Tuticorin → Chennai → Vishakhapatnam → Paradwip → Haldia.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'lifelines-of-national-economy-map',
      sectionId: 'geo-07-ports-and-airports-tables',
    },
  },
  {
    id: 'sst-gl-geo-28',
    term: 'Marmagao & New Mangalore Ports',
    symbol: 'Goa (50% Iron Ore) vs. Karnataka (Kudremukh)',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Adjacent West Coast iron-ore export ports tested in India Map Pointing.',
    ncertDefinition:
      'Marmagao port (Goa) is India’s premier iron ore exporting port accounting for ~50% of national iron-ore export; New Mangalore port (Karnataka) caters to export of iron ore concentrates from Kudremukh mines.',
    example: 'Followed further south by Kochi at the extreme south-western lagoon entrance.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-geography',
      subtopicSlug: 'lifelines-of-national-economy-map',
      sectionId: 'geo-07-ports-and-airports-tables',
    },
  },
  // ==========================================
  // SECTION F MAP & BOARD MASTERY — 10 TERMS
  // ==========================================
  {
    id: 'sst-gl-map-01',
    term: 'Section F Map Structure (Q37a + Q37b)',
    symbol: '2M + 3M = 5M',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Two pre-marked History items (A & B) plus any three of four Geography map items.',
    ncertDefinition:
      'Question 37 carries 5 marks in CBSE Code 087: Q37a (2 marks) tests Identification of 2 pre-marked places from History Chapter 2 (Nationalism in India), and Q37b (3 marks) tests Locating & Labelling or Identification of any 3 out of 4 Geography features.',
    example: 'History pre-marked A = Sep 1920 INC (Calcutta); B = 1918 Cotton Mill Satyagraha (Ahmedabad).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-map-mastery',
      subtopicSlug: 'india-map-work-mastery-lab',
      sectionId: 'sst-india-map-lab-section',
    },
  },
  {
    id: 'sst-gl-map-02',
    term: 'Identification Only vs. Locating & Labelling',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'CBSE distinguishes items already drawn/shaded for you from blank-map items you plot yourself.',
    ncertDefinition:
      'For Identification Only items (Ch 1 Soils, Ch 4 Rice/Wheat & crop belts, Ch 5 Iron/Coal/Oil mines, History A/B points), CBSE prints the shaded region or pin letter on the map and asks its name; for Locating & Labelling items (Ch 3 Dams, Ch 5 Thermal/Nuclear plants, Ch 6 Cotton/Steel/STP, Ch 7 Ports/Airports), students mark and name the exact location themselves.',
    example: 'Mayurbhanj iron mine is Identification Only; Hirakud Dam & Paradwip Port are Locating & Labelling.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-map-mastery',
      subtopicSlug: 'india-map-work-mastery-lab',
      sectionId: 'map-01-master-checklist-and-traps',
    },
  },
  {
    id: 'sst-gl-map-03',
    term: 'Gujarat Trio: Ahmedabad, Kheda & Dandi',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Three adjacent Gujarat History Ch 2 pins aligned strictly north-to-south.',
    ncertDefinition:
      'Ahmedabad (1918 cotton mill workers satyagraha) sits below the Tropic of Cancer; Kheda (1917 peasant satyagraha) lies immediately south-east of Ahmedabad; Dandi (April 1930 Salt March finale) lies far south on the Navsari coast below Surat.',
    example: 'Mnemonic: Ahmedabad North → Kheda SE → Surat → Dandi South Coast.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-map-mastery',
      subtopicSlug: 'india-map-work-mastery-lab',
      sectionId: 'sst-india-map-lab-section',
    },
  },
  {
    id: 'sst-gl-map-04',
    term: 'CN-Sep-Dec Session Rule (1920–1927)',
    category: 'History — Nationalism & Treaties',
    simpleMeaning: 'Never swap Calcutta (Sep 1920) with Nagpur (Dec 1920) on Q37a.',
    ncertDefinition:
      'Calcutta (West Bengal) hosted the September 1920 Special Congress Session proposing Non-Cooperation; Nagpur (Vidarbha, Maharashtra) hosted the December 1920 annual session adopting it; Madras (Tamil Nadu coast) hosted the 1927 session.',
    example: 'C before N alphabetically mirrors September before December chronologically.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-map-mastery',
      subtopicSlug: 'india-map-work-mastery-lab',
      sectionId: 'map-01-master-checklist-and-traps',
    },
  },
  {
    id: 'sst-gl-map-05',
    term: 'Offshore Arabian Sea Pair (Mumbai High & Bassien)',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Offshore petroleum basins plotted inside sea water west of Mumbai, NOT on land.',
    ncertDefinition:
      'Mumbai High lies roughly 160 km west-north-west of Mumbai inside the Arabian Sea, while Bassien lies slightly east/closer to the Vasai-Tarapur coastline and feeds the HVJ gas pipeline.',
    example: 'Plot both symbols in the blue sea west of Konkan rather than on Maharashtra landmass.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-map-mastery',
      subtopicSlug: 'india-map-work-mastery-lab',
      sectionId: 'map-01-master-checklist-and-traps',
    },
  },
  {
    id: 'sst-gl-map-06',
    term: 'Ka-Nuclear Twin Trap (Kakrapara vs. Kalpakkam)',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Kakrapara stands in West India (Gujarat), whereas Kalpakkam stands on the South-East coast (Tamil Nadu).',
    ncertDefinition:
      'All 4 CBSE Nuclear Power Stations: Narora (UP), Kakrapara (Gujarat — inland east of Surat on Tapi), Tarapur (Maharashtra coast north of Mumbai), and Kalpakkam (Tamil Nadu coast south of Chennai).',
    example: 'Hint "Kakra-Gujra" (both West) vs. "Kalpak-Chennai" (both Tamil Nadu).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-map-mastery',
      subtopicSlug: 'india-map-work-mastery-lab',
      sectionId: 'sst-india-map-lab-section',
    },
  },
  {
    id: 'sst-gl-map-07',
    term: 'Odisha Coastal Port vs. Inland Dam',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Paradwip sits on the Odisha coast; Hirakud sits in inland NW Odisha on the Mahanadi.',
    ncertDefinition:
      'Hirakud Dam (longest earthen dam) is located near Sambalpur in north-western Odisha across River Mahanadi, whereas Talcher coalfield is central Odisha and Paradwip iron-ore sea port sits at the Mahanadi delta coast.',
    example: 'Q37b often asks students to separate NW inland Hirakud from coastal Paradwip.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-map-mastery',
      subtopicSlug: 'india-map-work-mastery-lab',
      sectionId: 'map-01-master-checklist-and-traps',
    },
  },
  {
    id: 'sst-gl-map-08',
    term: 'Five-Coast + Five-Coast Major Sea Ports Ladder',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Ordered coastal sweep preventing West/East port swaps.',
    ncertDefinition:
      'West Coast (N → S): Kandla (Gujarat tidal), Mumbai (biggest natural), Marmagao (Goa iron ore), New Mangalore (Karnataka Kudremukh ore), Kochi (SW Kerala lagoon). East Coast (S → N): Tuticorin (SE natural), Chennai (oldest artificial), Vishakhapatnam (AP deepest landlocked), Paradwip (Odisha), Haldia (WB Kolkata subsidiary).',
    example: 'Do NOT put Vishakhapatnam above Paradwip or Marmagao south of New Mangalore.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-map-mastery',
      subtopicSlug: 'india-map-work-mastery-lab',
      sectionId: 'sst-india-map-lab-section',
    },
  },
  {
    id: 'sst-gl-map-09',
    term: '6 International Airports Official Names',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'Board Q37b prints the airport’s honorific name without naming the city.',
    ncertDefinition:
      'Raja Sansi = Amritsar (PB); Indira Gandhi = Delhi; Chhatrapati Shivaji = Mumbai (MH); Meenam Bakkam = Chennai (TN); Netaji Subhash Chandra Bose = Kolkata (WB); Rajiv Gandhi = Hyderabad (TS).',
    example: '"Meenam Bakkam International Airport" maps directly to Chennai (TN coast).',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-map-mastery',
      subtopicSlug: 'india-map-work-mastery-lab',
      sectionId: 'sst-india-map-lab-section',
    },
  },
  {
    id: 'sst-gl-map-10',
    term: 'CBSE Code 087 Equal 20M × 4 Weightage & 5-Bullet Rule',
    symbol: '20×4 = 80M',
    category: 'Geography — Resources, Crops & Maps',
    simpleMeaning: 'All 4 SST books hold equal 20-mark weight; write numbered bold headings for 3M/5M answers.',
    ncertDefinition:
      'CBSE Class 10 Social Science divides 80 theory marks equally across History (18M+2M map), Geography (17M+3M map), Democratic Politics II (20M), and Economics (20M) across Sections A–F (37 questions in 180 minutes).',
    example: 'Write 5 distinct bold-headed bullets (~25 words each) for Q30–Q33 long answers.',
    subtopicPath: {
      subjectSlug: 'social-science',
      topicSlug: 'sst-map-mastery',
      subtopicSlug: 'sst-80m-board-blueprint-and-mock',
      sectionId: 'map-02-section-blueprint-and-timing',
    },
  },
];

export const sstQuizBank: QuizQuestion[] = [
  // ==========================================
  // CIVICS — 26 QUESTIONS (MCQ, A-R, CASE)
  // ==========================================
  {
    id: 'sst-q-civ-01',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 1: Power-sharing',
    type: 'mcq',
    marks: 1,
    question:
      'Which statement ACCURATELY describes the ethnic composition of Belgium’s capital Brussels?',
    options: [
      '59% Dutch-speaking and 40% French-speaking, matching the national ratio',
      '80% French-speaking and 20% Dutch-speaking, reversing the national majority',
      '74% Dutch-speaking and 18% German-speaking',
      '80% Dutch-speaking and 20% German-speaking',
    ],
    correctIndex: 1,
    explanation:
      'Nationally 59% speak Dutch and 40% French, whereas in Brussels 80% speak French and 20% speak Dutch — making equal representation essential.',
    commonMistake: 'Students often apply the national 59:40 split directly to Brussels.',
  },
  {
    id: 'sst-q-civ-02',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 1: Power-sharing',
    type: 'mcq',
    marks: 1,
    question:
      'In which year did Sri Lanka pass an Act recognising Sinhala as the only official language, disregarding Tamil?',
    options: ['1948', '1956', '1970', '1993'],
    correctIndex: 1,
    explanation:
      'Sri Lanka became independent in 1948 and enacted the majoritarian Sinhala Only Act in 1956.',
    commonMistake: 'Confusing independence year (1948) with the Official Language Act (1956).',
  },
  {
    id: 'sst-q-civ-03',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 1: Power-sharing',
    type: 'mcq',
    marks: 1,
    question:
      'Which body in Belgium is uniquely elected by people belonging to a single language community (Dutch, French, or German) regardless of where they live?',
    options: [
      'Federal Senate',
      'Brussels Equal Council',
      'Community Government',
      'European Union Parliament',
    ],
    correctIndex: 2,
    explanation:
      'Belgium’s third tier, the Community Government, is elected by each linguistic group and handles cultural, educational, and language issues.',
  },
  {
    id: 'sst-q-civ-04',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 1: Power-sharing',
    type: 'mcq',
    marks: 1,
    question:
      'Match the form of power-sharing to its correct example:\nI. Horizontal distribution — (A) Reservation of constituencies in India\nII. Vertical division — (B) Checks and balances among Legislature, Executive, Judiciary\nIII. Social groups — (C) Union, State, and Panchayat governments',
    options: [
      'I-B, II-C, III-A',
      'I-C, II-B, III-A',
      'I-A, II-C, III-B',
      'I-B, II-A, III-C',
    ],
    correctIndex: 0,
    explanation:
      'Horizontal = Checks & Balances (same level); Vertical = Federal tiers (Union/State/Local); Social groups = Reserved Constituencies / Belgian Community Govt.',
  },
  {
    id: 'sst-q-civ-05',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 1: Power-sharing',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Prudential reasons stress that power-sharing brings better practical outcomes.\nReason (R): Imposing the will of the majority community over others looks attractive in the short run, but in the long run it undermines the unity of the nation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Prudential logic rests on careful calculation of gains and losses — avoiding social conflict, violence, and long-run national disintegration.',
  },
  {
    id: 'sst-q-civ-06',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 2: Federalism',
    type: 'mcq',
    marks: 1,
    question:
      'Which group of countries represents "Coming Together" federations where all constituent states usually enjoy equal power?',
    options: [
      'India, Spain, Belgium',
      'USA, Switzerland, Australia',
      'India, USA, Sri Lanka',
      'Belgium, Australia, China',
    ],
    correctIndex: 1,
    explanation:
      'USA, Switzerland, and Australia are Coming Together federations; India, Spain, and Belgium are Holding Together federations.',
    commonMistake: 'Mixing Belgium or Spain into Coming Together.',
  },
  {
    id: 'sst-q-civ-07',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 2: Federalism',
    type: 'mcq',
    marks: 1,
    question:
      'Suppose both the Union Parliament and a State Legislature pass conflicting laws on "Forests" or "Education". Whose law prevails?',
    options: [
      'The State law prevails because Education is a local concern',
      'Both laws become void until the Supreme Court writes a new law',
      'The Union Government’s law prevails, as both subjects lie in the Concurrent List',
      'The Gram Sabha decides by majority vote',
    ],
    correctIndex: 2,
    explanation:
      'Education and Forests are in the Concurrent List; when Union and State laws conflict on a Concurrent subject, the law made by the Union Government prevails.',
  },
  {
    id: 'sst-q-civ-08',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 2: Federalism',
    type: 'mcq',
    marks: 1,
    question:
      'How many languages are recognised as Scheduled Languages in the Eighth Schedule of the Indian Constitution (including Hindi)?',
    options: ['14 languages', '18 languages', '22 languages', '28 languages'],
    correctIndex: 2,
    explanation:
      'Hindi plus 21 other languages = 22 Scheduled Languages in total; India has no "National Language".',
  },
  {
    id: 'sst-q-civ-09',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 2: Federalism',
    type: 'mcq',
    marks: 1,
    question:
      'Under the 1992 Constitutional Amendments on Decentralisation, which of the following is NOT true?',
    options: [
      'It is constitutionally mandatory to hold regular elections to local government bodies',
      'At least one-third of all positions are reserved for women',
      'The Central Election Commission directly conducts all Gram Panchayat elections',
      'State governments are required to share some powers and revenue with local bodies',
    ],
    correctIndex: 2,
    explanation:
      'An independent STATE Election Commission (not the Central ECI) was created in each state to conduct panchayat and municipal elections.',
    commonMistake: 'Missing the distinction between Central Election Commission and State Election Commission.',
  },
  {
    id: 'sst-q-civ-10',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 2: Federalism',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Creation of linguistic states in India ultimately made the country more united.\nReason (R): Linguistic reorganisation made administration easier and respected regional identities instead of suppressing them.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Though leaders initially feared disintegration, experience showed linguistic states strengthened national unity and eased governance.',
  },
  {
    id: 'sst-q-civ-11',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 3: Gender, Religion, and Caste',
    type: 'mcq',
    marks: 1,
    question:
      'The Equal Remuneration Act, 1976 provides that:',
    options: [
      'Only women working in government offices get maternity leave',
      'Equal wages should be paid for equal work regardless of gender',
      '33% of Lok Sabha seats are reserved for women',
      'Girls receive free secondary schooling across India',
    ],
    correctIndex: 1,
    explanation:
      'The Equal Remuneration Act of 1976 mandates equal wages for equal work, though in practice women are still paid less in several sectors.',
  },
  {
    id: 'sst-q-civ-12',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 3: Gender, Religion, and Caste',
    type: 'mcq',
    marks: 1,
    question:
      'Which statement best explains what Gandhiji meant when he said "religion can never be separated from politics"?',
    options: [
      'India should adopt one official majority religion',
      'Religious leaders should directly draft Parliamentary laws',
      'Politics must be guided by moral values and ethics drawn from all religions, not sectarian communalism',
      'Voting rights should depend on religious membership',
    ],
    correctIndex: 2,
    explanation:
      'By religion, Gandhiji meant ethical/moral values common to all religions — the exact opposite of communal politics.',
  },
  {
    id: 'sst-q-civ-13',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 3: Gender, Religion, and Caste',
    type: 'mcq',
    marks: 1,
    question:
      'Which of the following is NOT one of the reasons proving that Indian elections are about more than just caste?',
    options: [
      'No parliamentary constituency in the country has a clear majority of one single caste',
      'No party wins the votes of all the voters of a caste or community',
      'Every voter strictly votes only for a candidate belonging to their exact sub-caste',
      'Ruling parties and sitting MPs/MLAs frequently lose elections in India',
    ],
    correctIndex: 2,
    explanation:
      'Voters evaluate party attachment, leader appeal, economic condition, and government performance — sitting MPs lose frequently even where caste composition stays unchanged.',
  },
  {
    id: 'sst-q-civ-14',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 3: Gender, Religion, and Caste',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): The Indian Constitution allows the State to intervene in religious matters.\nReason (R): State intervention is permitted strictly to ensure equality within religious communities, such as banning untouchability.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'One of the 4 key constitutional provisions of Indian secularism is allowing State reform to guarantee equality within religious communities.',
  },
  {
    id: 'sst-q-civ-15',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 4: Political Parties',
    type: 'mcq',
    marks: 1,
    question:
      'Which of the following correctly lists the three components of a political party?',
    options: [
      'Judges, Bureaucrats, and Voters',
      'The Leaders, the Active Members, and the Followers',
      'Union Ministers, Governors, and Mayors',
      'Candidates, Returning Officers, and Pressure Groups',
    ],
    correctIndex: 1,
    explanation:
      'NCERT explicitly defines the three components of any political party as: (1) The Leaders, (2) The Active Members, and (3) The Followers.',
  },
  {
    id: 'sst-q-civ-16',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 4: Political Parties',
    type: 'mcq',
    marks: 1,
    question:
      'Match the National Party with its founding year:\nI. Indian National Congress (INC) — (A) 1984\nII. Bharatiya Janata Party (BJP) — (B) 1885\nIII. Bahujan Samaj Party (BSP) — (C) 2012\nIV. Aam Aadmi Party (AAP) — (D) 1980',
    options: [
      'I-B, II-D, III-A, IV-C',
      'I-D, II-B, III-A, IV-C',
      'I-B, II-A, III-D, IV-C',
      'I-B, II-D, III-C, IV-A',
    ],
    correctIndex: 0,
    explanation:
      'INC = 1885; BJP = 1980; BSP = 1984 (Kanshi Ram); AAP = 2012; plus CPI(M) = 1964 and NPP = 2013.',
  },
  {
    id: 'sst-q-civ-17',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 4: Political Parties',
    type: 'mcq',
    marks: 1,
    question:
      'Which pair of political reforms has ALREADY been enacted in India (as opposed to merely suggested)?',
    options: [
      'State funding of elections AND mandatory 1/3rd party-ticket reservation for women',
      'Anti-Defection Law AND Supreme Court mandatory candidate affidavit on property/criminal cases',
      'Ban on family members contesting polls AND compulsory internal party primary votes',
      'Proportional representation AND lowering voting age to 16',
    ],
    correctIndex: 1,
    explanation:
      'Enacted reforms are Anti-Defection Law, SC Affidavit, and ECI order on organisational elections + ITR. State funding and party ticket quotas remain suggestions.',
  },
  {
    id: 'sst-q-civ-18',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 4: Political Parties',
    type: 'mcq',
    marks: 1,
    question:
      'A newly formed party secures 7% of total votes in an Assembly election of Maharashtra and wins 3 MLA seats. Under ECI rules, it qualifies as a:',
    options: [
      'Recognised National Party',
      'Recognised State Party',
      'Unregistered Pressure Group',
      'Coalition Front only',
    ],
    correctIndex: 1,
    explanation:
      'Winning at least 6% votes in a State Assembly election AND at least 2 seats earns recognition as a State Party.',
  },
  {
    id: 'sst-q-civ-19',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 5: Outcomes of Democracy',
    type: 'mcq',
    marks: 1,
    question:
      'Why do democratic decisions often appear slower than decisions made by non-democratic rulers?',
    options: [
      'Democracies lack educated administrators',
      'Democracies follow proper norms, deliberation, and negotiation, making decisions more acceptable and effective',
      'Judges rewrite every administrative bill twice',
      'Constitutions forbid passing any law within one year',
    ],
    correctIndex: 1,
    explanation:
      'Deliberation and negotiation take time, but produce decisions far more acceptable to citizens and effective long-term.',
  },
  {
    id: 'sst-q-civ-20',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 5: Outcomes of Democracy',
    type: 'mcq',
    marks: 1,
    question:
      'In which domain have real-world democracies MOST CONSISTENTLY fallen short of expectations despite political equality?',
    options: [
      'Holding regular elections',
      'Reducing economic inequalities and extreme wealth concentration',
      'Recognising citizens’ right to vote',
      'Winning popular legitimacy over military rule',
    ],
    correctIndex: 1,
    explanation:
      'Democracies guarantee "one person, one vote", yet a small ultra-rich top holds a disproportionate share of income while the bottom 20% struggle.',
  },
  {
    id: 'sst-q-civ-21',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 5: Outcomes of Democracy',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): The fact that people complain about democracy is itself a testimony to its success.\nReason (R): Complaints show that citizens have developed political awareness and the ability to look critically at power-holders.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'As democracy passes one test it produces another; critical citizens show democracy transformed passive subjects into aware right-bearers.',
  },
  {
    id: 'sst-q-civ-22',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Civics Board Mastery (Cartoons)',
    type: 'mcq',
    marks: 1,
    question:
      'The NCERT cartoon depicting a German Volkswagen car fitted with TWO steering wheels held by rival drivers illustrates which concept?',
    options: [
      'Single-party authoritarian efficiency',
      'Difficulty and compromise in Coalition Power-Sharing (CDU + SPD)',
      'Failure of Belgian Community Government',
      'Misuse of Article 356 against State Governments',
    ],
    correctIndex: 1,
    explanation:
      'Germany’s 2005 Grand Coalition between historic rivals CDU and SPD showed coalition partners pulling in divergent policy directions yet governing together.',
  },
  {
    id: 'sst-q-civ-23',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Civics Board Mastery (Cartoons)',
    type: 'mcq',
    marks: 1,
    question:
      'In the NCERT Chapter 2 cartoon showing Chief Ministers standing in line with bowls labeled "More Powers" before the Prime Minister, what historical shift is contrasted?',
    options: [
      'Pre-1990 central dominance and misuse of Art. 356 vs. Post-1990 Coalition Federalism',
      'Coming Together federalism in Australia vs. Switzerland',
      'Creation of the Nari Shakti Vandan Adhiniyam',
      'Adoption of 22 Scheduled Languages in 1950',
    ],
    correctIndex: 0,
    explanation:
      'Post-1990 rise of regional parties forced central coalition partners to share genuine power with states, backed by Supreme Court safeguards.',
  },
  {
    id: 'sst-q-civ-24',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 2: Federalism (Case)',
    type: 'case-based',
    marks: 1,
    casePassage:
      'In 1947, India’s boundaries were redrawn to create linguistic states so that people who spoke the same language lived in the same state. Later, some states like Nagaland, Uttarakhand, and Jharkhand were created not on language, but to recognise differences based on culture, ethnicity, or geography.',
    question:
      'Based on the passage, why were states like Jharkhand, Uttarakhand, and Nagaland created later in India’s federal journey?',
    options: [
      'To convert India into a Unitary state',
      'To recognise differences based on culture, ethnicity, or geography',
      'To enforce Hindi as the sole official language',
      'To grant them permanent seats in the Brussels Community Government',
    ],
    correctIndex: 1,
    explanation:
      'While early states like Andhra and Maharashtra were linguistic, Nagaland, Uttarakhand, and Jharkhand were formed to respect cultural, ethnic, and geographical distinctiveness.',
  },
  {
    id: 'sst-q-civ-25',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 4: Political Parties (Case)',
    type: 'case-based',
    marks: 1,
    casePassage:
      'Over the last decades, internal democracy within many political parties weakened as top leaders held disproportionate control. Ordinary party members rarely received sufficient information or opportunities to influence nominations, while family ties frequently gave unfair advantages to relatives.',
    question:
      'Which two challenges of political parties are directly highlighted in the passage above?',
    options: [
      'Defection and State funding',
      'Lack of internal democracy and Dynastic succession',
      'Two-party dominance and Majoritarianism',
      'Communalism and Linguistic division',
    ],
    correctIndex: 1,
    explanation:
      'Top-leader concentration without open internal polls/registers = Lack of internal democracy; unfair advantage to relatives = Dynastic succession.',
  },
  {
    id: 'sst-q-civ-26',
    subjectSlug: 'social-science',
    topicSlug: 'sst-civics',
    subtopicTitle: 'Ch 5: Outcomes of Democracy (Case)',
    type: 'case-based',
    marks: 1,
    casePassage:
      'In a diverse country where Community X makes up 75% of the population and Community Y 25%, Parliament passes a constitution declaring that only members of Community X may ever hold Cabinet posts and Community Y’s language is banned in schools.',
    question:
      'Which essential condition for democratic accommodation of social diversity is VIOLATED here?',
    options: [
      'Democracy must guarantee higher GDP than dictatorship',
      'Rule by majority must NOT become rule by a majority community in terms of religion, race, or language',
      'Legislature must hold elections every two years',
      'All subjects must be shifted to the Union List',
    ],
    correctIndex: 1,
    explanation:
      'If birth-community permanently bars minorities from ever being in the governing majority, democratic accommodation fails completely.',
  },

  // ==========================================
  // ECONOMICS — 26 QUESTIONS (MCQ, A-R, CASE, G20)
  // ==========================================
  {
    id: 'sst-q-eco-01',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 1: Development',
    type: 'mcq',
    marks: 1,
    question:
      'If the average monthly income of 4 families in a village is ₹6,000, and three families earn ₹5,000, ₹8,000, and ₹4,000 respectively, what is the monthly income of the fourth family?',
    options: ['₹5,000', '₹6,000', '₹7,000', '₹8,000'],
    correctIndex: 2,
    explanation:
      'Total income of 4 families = 4 × ₹6,000 = ₹24,000. Sum of 3 families = 5,000 + 8,000 + 4,000 = ₹17,000. Fourth family = 24,000 − 17,000 = ₹7,000.',
  },
  {
    id: 'sst-q-eco-02',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 1: Development',
    type: 'mcq',
    marks: 1,
    question:
      'An adult weighs 54 kg and is 1.80 metres tall. What is their BMI (Body Mass Index) and nutritional category?',
    options: [
      '16.67 kg/m² — Undernourished',
      '20.00 kg/m² — Normal',
      '27.50 kg/m² — Overweight',
      '30.00 kg/m² — Overweight',
    ],
    correctIndex: 0,
    explanation:
      'BMI = 54 ÷ (1.80)² = 54 ÷ 3.24 = 16.67 kg/m². Since 16.67 < 18.5, the adult is classified as undernourished.',
    commonMistake: 'Dividing by height (1.8) instead of height squared (3.24).',
  },
  {
    id: 'sst-q-eco-03',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 1: Development',
    type: 'mcq',
    marks: 1,
    question:
      'Which organisation publishes the Human Development Report (HDR) comparing nations on Health, Education, and Per Capita Income?',
    options: ['World Bank', 'International Monetary Fund (IMF)', 'UNDP', 'World Trade Organisation'],
    correctIndex: 2,
    explanation:
      'UNDP publishes the Human Development Report (HDI); World Bank publishes World Development Reports using Per Capita Income alone.',
  },
  {
    id: 'sst-q-eco-04',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 1: Development',
    type: 'mcq',
    marks: 1,
    question:
      'Look at the income of 5 citizens in Country X: [₹9,500, ₹10,500, ₹9,800, ₹10,000, ₹10,200] vs Country Y: [₹500, ₹500, ₹500, ₹500, ₹48,000]. What key limitation of Per Capita Income does this illustrate?',
    options: [
      'Per Capita Income cannot be calculated in rupees',
      'Averages are useful for comparison, yet they hide disparities in how income is distributed among people',
      'Country Y always has higher literacy than Country X',
      'Per Capita Income includes only agricultural income',
    ],
    correctIndex: 1,
    explanation:
      'Both Country X and Country Y have an identical PCI of ₹10,000, yet Country X is equitable whereas Country Y has extreme poverty alongside 1 rich citizen.',
  },
  {
    id: 'sst-q-eco-05',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 1: Development',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Crude oil reserves are classified as a non-renewable resource.\nReason (R): Crude oil has a fixed stock on Earth that gets exhausted after years of extraction and cannot be replenished on human timescales.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Unlike groundwater (replenished by rain), crude oil has a finite fixed stock (~50 years left globally at current rates).',
  },
  {
    id: 'sst-q-eco-06',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 2: Sectors of the Indian Economy',
    type: 'mcq',
    marks: 1,
    question:
      'A farmer sells cotton for ₹400 to a spinning mill, the mill sells yarn for ₹700 to a textile factory, and the factory sells a finished shirt to a consumer for ₹1,200. How much value is added to India’s GDP?',
    options: ['₹2,300', '₹1,200', '₹1,100', '₹400'],
    correctIndex: 1,
    explanation:
      'Only the FINAL good’s value (₹1,200 shirt) is counted in GDP because the intermediate cotton (₹400) and yarn (₹700) are already included inside ₹1,200.',
    commonMistake: 'Adding 400 + 700 + 1,200 = ₹2,300 (double counting error).',
  },
  {
    id: 'sst-q-eco-07',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 2: Sectors of the Indian Economy',
    type: 'mcq',
    marks: 1,
    question:
      'Which sector has emerged as the LARGEST producing sector (share in GDP) in India, yet continues to employ a smaller share of the workforce than the Primary sector?',
    options: [
      'Primary Sector',
      'Secondary Sector',
      'Tertiary (Service) Sector',
      'Unorganised Agricultural Sector',
    ],
    correctIndex: 2,
    explanation:
      'Tertiary sector contributes over 55% of GDP while Primary agriculture still employs ~44% of India’s workforce (showing disguised unemployment).',
  },
  {
    id: 'sst-q-eco-08',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 2: Sectors of the Indian Economy',
    type: 'mcq',
    marks: 1,
    question:
      'Kanta works 9:30 AM–5:30 PM, receives an appointment letter, paid leave, medical allowance, and Provident Fund. Kamal works 7:30 AM–8:00 PM at a grocery shop with no paid leave or job security. Kanta and Kamal belong respectively to:',
    options: [
      'Public Sector and Secondary Sector',
      'Organised Sector and Unorganised Sector',
      'Private Sector and Primary Sector',
      'Informal Sector and Formal Sector',
    ],
    correctIndex: 1,
    explanation:
      'Kanta enjoys statutory protections of the Organised Sector; Kamal works in the unprotected Unorganised Sector.',
  },
  {
    id: 'sst-q-eco-09',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 2: Sectors of the Indian Economy',
    type: 'mcq',
    marks: 1,
    question:
      'Under MGNREGA 2005, what share of jobs is reserved for women alongside the 100-day rural wage employment guarantee?',
    options: ['One-tenth (10%)', 'One-fourth (25%)', 'One-third (33%)', 'One-half (50%)'],
    correctIndex: 2,
    explanation:
      'One-third of the proposed MGNREGA jobs are reserved for women, and applicants receive an unemployment allowance if work is not provided.',
  },
  {
    id: 'sst-q-eco-10',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 2: Sectors of the Indian Economy',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): The government spends heavily on building roads, bridges, railways, and selling subsidised electricity and PDS foodgrains.\nReason (R): Private sector companies either lack the massive capital or would charge prices far too high for ordinary citizens to afford essential public services.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Both public infrastructure and social-welfare pricing require Public Sector intervention guided by public welfare rather than profit alone.',
  },
  {
    id: 'sst-q-eco-11',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 3: Money and Credit',
    type: 'mcq',
    marks: 1,
    question:
      'Roughly what percentage of total deposits do commercial banks in India hold as cash reserves to pay depositors who withdraw money on any given day?',
    options: ['5%', '15%', '50%', '85%'],
    correctIndex: 1,
    explanation:
      'Banks keep about 15% of deposits as cash reserves (supervised by RBI) and extend the remaining ~85% as loans.',
    commonMistake: 'Swapping 15% (cash reserve) with 85% (lent out).',
  },
  {
    id: 'sst-q-eco-12',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 3: Money and Credit',
    type: 'mcq',
    marks: 1,
    question:
      'What is the MAIN source of income for commercial banks?',
    options: [
      'Fees charged for printing currency notes',
      'The difference between interest charged from borrowers and interest paid to depositors',
      'Donations from Self-Help Groups',
      'Taxes collected on behalf of the RBI',
    ],
    correctIndex: 1,
    explanation:
      'Banks charge a higher interest rate on loans than what they offer on deposits — this interest spread is their primary income.',
  },
  {
    id: 'sst-q-eco-13',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 3: Money and Credit',
    type: 'mcq',
    marks: 1,
    question:
      'According to the NCERT urban households credit chart, approximately what share of loans taken by POOR urban households comes from INFORMAL sources?',
    options: ['10%', '28%', '53%', '85%'],
    correctIndex: 3,
    explanation:
      'Poor urban households take ~85% informal / 15% formal; Few assets = 53% informal; Well-off = 28% informal; Rich = 10% informal / 90% formal.',
  },
  {
    id: 'sst-q-eco-14',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 3: Money and Credit',
    type: 'mcq',
    marks: 1,
    question:
      'Which group of four items together constitutes the "Terms of Credit"?',
    options: [
      'Income, Literacy, BMI, Collateral',
      'Interest rate, Collateral, Documentation requirement, and Mode of repayment',
      'Demand deposits, Cheques, RBI reserve, and Currency',
      'Imports, Exports, Foreign Investment, and Tariffs',
    ],
    correctIndex: 1,
    explanation:
      'Interest rate, collateral, documentation requirement, and mode of repayment comprise the Terms of Credit.',
  },
  {
    id: 'sst-q-eco-15',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 3: Money and Credit',
    type: 'mcq',
    marks: 1,
    question:
      'How do rural Self-Help Groups (SHGs) enable poor women without land titles to receive bank loans?',
    options: [
      'The RBI directly gifts ₹50,000 to every villager',
      'After 1–2 years of regular savings, the bank sanctions a collateral-free loan in the name of the group',
      'Moneylenders guarantee the bank loan for free',
      'SHG members are exempt from ever repaying principal',
    ],
    correctIndex: 1,
    explanation:
      'Collective savings track record + peer accountability allow banks to lend to the SHG without physical collateral.',
  },
  {
    id: 'sst-q-eco-16',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 3: Money and Credit',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): No individual in India can legally refuse a payment made in rupees.\nReason (R): Modern Indian currency notes and coins are made of precious gold and silver with high intrinsic value.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 2,
    explanation:
      'A is true (rupee is legal tender authorised by the Govt of India & issued by RBI). R is FALSE because modern paper notes/coins have no intrinsic use of their own!',
  },
  {
    id: 'sst-q-eco-17',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 4: Globalization (Factors)',
    type: 'mcq',
    marks: 1,
    question:
      'Which American Multinational Corporation (MNC) bought over the smaller Indian company Parakh Foods to acquire four oil refineries and a huge marketing network?',
    options: ['Ford Motors', 'Cargill Foods', 'Coca-Cola', 'Walmart'],
    correctIndex: 1,
    explanation:
      'Cargill Foods (USA) acquired Parakh Foods — NCERT’s flagship example of MNCs buying local companies as the most common route of MNC investment.',
  },
  {
    id: 'sst-q-eco-18',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 4: Globalization (Factors)',
    type: 'mcq',
    marks: 1,
    question:
      'Which transport innovation enabled goods to be loaded intact onto ships, railways, planes, and trucks, drastically lowering port handling costs and delivery time?',
    options: [
      'Animal-drawn carts',
      'Containerisation (use of large containers)',
      'Import quota licensing',
      'Barter exchange depots',
    ],
    correctIndex: 1,
    explanation:
      'Packing goods in standardised containers cut port handling costs and accelerated global ocean/rail/road shipping.',
  },
  {
    id: 'sst-q-eco-19',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 4: Globalization (Factors)',
    type: 'mcq',
    marks: 1,
    question:
      'Which of the following is an example of a "Trade Barrier", and in which year did India begin removing barriers extensively?',
    options: [
      'Container shipping; 1947',
      'Tax on imports; 1991',
      'Cheque clearing; 2005',
      'Internet banking; 2023',
    ],
    correctIndex: 1,
    explanation:
      'Tax on imports is the classic NCERT example of a trade barrier; India adopted far-reaching trade and investment liberalisation in 1991.',
  },
  {
    id: 'sst-q-eco-20',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 4: Globalization (Factors)',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Removing barriers or restrictions set by the government on foreign trade and foreign investment is known as Liberalisation.\nReason (R): Beginning around 1991, the Indian government felt Indian producers were ready to compete globally, which would improve the performance and quality of domestic producers.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Both statements match NCERT Ch 4 verbatim: global competition after 1991 was expected to push Indian producers to upgrade quality and efficiency.',
  },
  {
    id: 'sst-q-eco-21',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 4: G20 Special Module',
    type: 'mcq',
    marks: 1,
    question:
      'Which regional bloc was admitted as a permanent full member of the G20 during India’s 2023 New Delhi Summit?',
    options: [
      'Association of Southeast Asian Nations (ASEAN)',
      'African Union (AU)',
      'Organisation of American States (OAS)',
      'Arab League',
    ],
    correctIndex: 1,
    explanation:
      'Under India’s Presidency in Sept 2023, the 55-nation African Union became a permanent member alongside the 19 countries and European Union.',
  },
  {
    id: 'sst-q-eco-22',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 4: G20 Special Module',
    type: 'mcq',
    marks: 1,
    question:
      'What was the official theme of India’s 2023 G20 Presidency, and from which ancient Indian text is it drawn?',
    options: [
      '"Satyameva Jayate" — Mundaka Upanishad',
      '"Vasudhaiva Kutumbakam" (One Earth, One Family, One Future) — Maha Upanishad',
      '"Atithi Devo Bhava" — Rigveda',
      '"Sarve Bhavantu Sukhinah" — Arthashastra',
    ],
    correctIndex: 1,
    explanation:
      'Vasudhaiva Kutumbakam ("One Earth, One Family, One Future") comes from the Maha Upanishad and inspired India’s inclusive People’s G20 vision.',
  },
  {
    id: 'sst-q-eco-23',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 4: G20 Special Module',
    type: 'mcq',
    marks: 1,
    question:
      'Consider the following statements about G20:\nI. G20 members represent ~85% of global GDP, >75% of global trade, and ~2/3rd of world population.\nII. G20 operates via a permanent secretariat headquartered in New York.\nWhich statement(s) is/are CORRECT?',
    options: ['Only I is correct', 'Only II is correct', 'Both I and II are correct', 'Neither I nor II is correct'],
    correctIndex: 0,
    explanation:
      'Statement I is true; Statement II is false because G20 has NO permanent secretariat — it works through a rotating annual Presidency supported by the Troika (past, current, incoming hosts).',
  },
  {
    id: 'sst-q-eco-24',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 1: Development (Case)',
    type: 'case-based',
    marks: 1,
    casePassage:
      'Between 2000 and 2020, Punjab and Western Uttar Pradesh experienced steep declines in underground water tables because high-yielding green revolution crops and electric tubewells extracted groundwater much faster than monsoon rains could replenish it.',
    question:
      'What fundamental development lesson does this groundwater overuse scenario prove?',
    options: [
      'Non-renewable minerals can be replenished by irrigation',
      'Even renewable resources get overused when extraction exceeds natural replenishment rate',
      'Per Capita Income is unrelated to agriculture',
      'Only industrial cities suffer water shortages',
    ],
    correctIndex: 1,
    explanation:
      'Groundwater is renewable (replenished by rain), yet ~300 Indian districts show serious water-table drops due to over-extraction.',
  },
  {
    id: 'sst-q-eco-25',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 3: Money and Credit (Case)',
    type: 'case-based',
    marks: 1,
    casePassage:
      'Swapna, a small farmer, grows groundnut on her three acres of land. She takes a loan from a village moneylender to meet cultivation expenses, hoping her harvest will repay it. Midway through the season, the crop is hit by pests and fails despite expensive spraying. Next year she borrows again, fails to repay both, and ends up selling a part of her land to pay off the debt.',
    question:
      'What does Swapna’s experience demonstrate about credit in rural India?',
    options: [
      'Credit always guarantees higher farmer profits',
      'RBI strictly monitors all village moneylender interest rates',
      'High-risk farming combined with high-interest informal credit can push a borrower into a debt trap',
      'Collateral-free SHGs force farmers to sell land',
    ],
    correctIndex: 2,
    explanation:
      'Whereas Salim’s festive credit increased his income, Swapna’s crop failure + informal loan left her worse off, trapped in debt.',
  },
  {
    id: 'sst-q-eco-26',
    subjectSlug: 'social-science',
    topicSlug: 'sst-economics',
    subtopicTitle: 'Ch 4: Globalization & G20 (Case)',
    type: 'case-based',
    marks: 1,
    casePassage:
      'A news magazine published for London readers is designed and printed in Delhi. The text of the magazine is sent through the Internet to the Delhi office. Designers in Delhi get orders on how to design the magazine from London via telecommunication facilities. After printing, magazines are sent by air to London and payment is instantly transferred via e-banking.',
    question:
      'Which two factors enabling Globalization are working together in this London–Delhi case?',
    options: [
      'Trade barriers and Barter system',
      'Information & Communication Technology (Internet/Telecom/E-banking) and cheaper Air Transportation',
      'Import quotas and Primary sector subsidies',
      'Double coincidence of wants and MGNREGA',
    ],
    correctIndex: 1,
    explanation:
      'NCERT uses this exact London–Delhi magazine case to show how ICT/Internet + faster air transport enable global service coordination.',
  },

  // ==========================================
  // HISTORY — 28 QUESTIONS (CH 1, 2, 3[1-1.3], 5)
  // ==========================================
  {
    id: 'sst-q-hist-01',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 1: Nationalism in Europe',
    type: 'mcq',
    marks: 1,
    question:
      'Which of the following statements ACCURATELY describes Ernst Renan’s 1882 Sorbonne definition of a nation?',
    options: [
      'A nation is formed solely by common language, race, and religion',
      'A nation is a large-scale solidarity whose existence is a "daily plebiscite"',
      'A nation is an absolutist centralised monarchy with military force',
      'A nation can only exist through violent annexation of territories',
    ],
    correctIndex: 1,
    explanation:
      'In "What is a Nation?" (1882), Ernst Renan argued nations arise from shared glories, common present will, and daily plebiscite — never race, religion, or annexation against a people’s will.',
  },
  {
    id: 'sst-q-hist-02',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 1: Nationalism in Europe',
    type: 'mcq',
    marks: 1,
    question:
      'Which provision was NOT part of the Conservative Treaty of Vienna (1815) hosted by Duke Metternich?',
    options: [
      'The Bourbon dynasty was restored to power in France',
      'Kingdom of the Netherlands (including Belgium) was set up in the north of France',
      'The German Confederation of 39 states set up by Napoleon was dissolved',
      'Austria was given control of Northern Italy and Prussia gained western territories',
    ],
    correctIndex: 2,
    explanation:
      'The 1815 Treaty of Vienna intentionally left Napoleon’s German Confederation of 39 states UNTOUCHED while drawing buffer containment boundaries around France.',
    commonMistake: 'Thinking the Congress of Vienna abolished Napoleon’s 39-state German Confederation.',
  },
  {
    id: 'sst-q-hist-03',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 1: Nationalism in Europe',
    type: 'mcq',
    marks: 1,
    question:
      'Which economic milestone in 1834 abolished tariff barriers across Prussia-led German states and reduced over 30 currencies to two?',
    options: ['Young Italy', 'Zollverein', 'Treaty of Constantinople', 'Frankfurt Parliament'],
    correctIndex: 1,
    explanation:
      'Zollverein (1834), formed at Prussia’s initiative, abolished tariff barriers and reduced German currencies from 30+ to 2, cheered by Friedrich List for economic nationalism.',
  },
  {
    id: 'sst-q-hist-04',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 1: Nationalism in Europe',
    type: 'mcq',
    marks: 1,
    question:
      'What does the "Olive branch around the sword" in the allegory of Germania signify?',
    options: [
      'Readiness to fight',
      'Heroism',
      'Willingness to make peace',
      'Beginning of a new era',
    ],
    correctIndex: 2,
    explanation:
      'Sword alone = readiness to fight; Crown of oak leaves = heroism; Rays of rising sun = beginning of a new era; Olive branch around the sword = willingness to make peace.',
    commonMistake: 'Confusing "Sword" (readiness to fight) with "Olive branch around the sword" (peace).',
  },
  {
    id: 'sst-q-hist-05',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 1: Nationalism in Europe',
    type: 'mcq',
    marks: 1,
    question:
      'Match the European leaders/thinkers to their roles:\nI. Otto von Bismarck — (A) French "people’s nation" allegory\nII. Count Cavour — (B) Prussian architect of German unification\nIII. Giuseppe Garibaldi — (C) Led armed "Red Shirts" into South Italy (1860)\nIV. Marianne — (D) Sardinia-Piedmont diplomat who allied with France (1859)',
    options: [
      'I-B, II-D, III-C, IV-A',
      'I-D, II-B, III-C, IV-A',
      'I-B, II-C, III-D, IV-A',
      'I-A, II-D, III-C, IV-B',
    ],
    correctIndex: 0,
    explanation:
      'Bismarck led Prussian army/bureaucracy (Germany); Cavour allied with France to beat Austria (1859); Garibaldi led Red Shirts in South Italy (1860); Marianne was France’s female allegory.',
  },
  {
    id: 'sst-q-hist-06',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 1: Nationalism in Europe',
    type: 'mcq',
    marks: 1,
    question:
      'Arrange the following events in the correct chronological order (Earliest → Latest):\nI. Treaty of Constantinople recognising Greece\nII. Act of Union between England and Scotland\nIII. Proclamation of Kaiser William I at Versailles\nIV. Convening of Frankfurt Parliament at St Paul’s Church',
    options: [
      'II, I, IV, III',
      'I, II, IV, III',
      'II, IV, I, III',
      'IV, II, I, III',
    ],
    correctIndex: 0,
    explanation:
      'Act of Union (1707) → Treaty of Constantinople (1832) → Frankfurt Parliament (May 1848) → William I proclaimed German Emperor at Versailles (Jan 1871).',
  },
  {
    id: 'sst-q-hist-07',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 1: Nationalism in Europe',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): In Britain, the formation of the nation-state was not the result of a sudden upheaval or revolution.\nReason (R): The English Parliament seized power from the monarchy in 1688 and forged a British nation-state gradually through Acts like the 1707 Act of Union and 1801 incorporation of Ireland.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Unlike continental revolutions, British unification was a long-drawn parliamentary process extending English dominance over Scotland (1707) and Ireland (1801).',
  },
  {
    id: 'sst-q-hist-08',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 1: Nationalism in Europe (Case)',
    type: 'case-based',
    marks: 1,
    casePassage:
      'Following the 1831 armed rebellion against Russian rule, Polish was forced out of schools and the Russian language was imposed everywhere. Many members of the Polish clergy began to use the Polish language as a weapon of national resistance during Church gatherings and religious instruction, prompting Russian authorities to jail or banish numerous priests and bishops to Siberia.',
    question:
      'Which broader 19th-century European movement does this Polish clerical resistance illustrate?',
    options: [
      'Prussian economic mercantilism',
      'Romanticism — using vernacular language and folk culture to preserve national identity',
      'Vienna Congress conservatism',
      'Napoleonic administrative centralisation',
    ],
    correctIndex: 1,
    explanation:
      'NCERT highlights Poland (music of Karol Kurpinski & Polish language resistance) as proof of how culture and language under Romanticism sustained national feeling even after political partition.',
  },
  {
    id: 'sst-q-hist-09',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 2: Nationalism in India',
    type: 'mcq',
    marks: 1,
    question:
      'At which Congress Session was a compromise worked out and the Non-Cooperation programme formally adopted?',
    options: [
      'Calcutta Session — September 1920',
      'Nagpur Session — December 1920',
      'Madras Session — 1927',
      'Lahore Session — December 1929',
    ],
    correctIndex: 1,
    explanation:
      'At the Calcutta Special Session (Sep 1920) Gandhiji convinced leaders to begin NCM in support of Khilafat & Swaraj; at the Nagpur Session (Dec 1920), compromise was worked out and the Non-Cooperation programme was formally adopted.',
    commonMistake: 'Swapping Calcutta (Sep 1920) and Nagpur (Dec 1920) on both theory and map questions.',
  },
  {
    id: 'sst-q-hist-10',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 2: Nationalism in India',
    type: 'mcq',
    marks: 1,
    question:
      'Who among the following did NOT boycott the 1921 council elections under Non-Cooperation because council entry offered non-Brahmans a path to institutional power?',
    options: [
      'Swaraj Party of Motilal Nehru',
      'Justice Party in Madras',
      'Oudh Kisan Sabha in Awadh',
      'Depressed Classes Association',
    ],
    correctIndex: 1,
    explanation:
      'Council elections were boycotted in most provinces EXCEPT Madras, where the Justice Party (party of non-Brahmans) felt entering the council was one way of gaining power usually reserved for Brahmans.',
  },
  {
    id: 'sst-q-hist-11',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 2: Nationalism in India',
    type: 'mcq',
    marks: 1,
    question:
      'During the Non-Cooperation Movement, plantation workers in Assam broke out of tea gardens in defiance of which colonial law?',
    options: [
      'Rowlatt Act of 1919',
      'Vernacular Press Act of 1878',
      'Inland Emigration Act of 1859',
      'Government of India Act of 1935',
    ],
    correctIndex: 2,
    explanation:
      'Under the Inland Emigration Act of 1859, Assam plantation workers could not leave tea gardens without permission (which was rarely granted).',
  },
  {
    id: 'sst-q-hist-12',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 2: Nationalism in India',
    type: 'mcq',
    marks: 1,
    question:
      'Identify the correct details of the 1930 Dandi Salt March led by Mahatma Gandhi:',
    options: [
      '240 miles from Sabarmati Ashram to Dandi over 24 days with 78 trusted volunteers',
      '120 miles from Dandi to Sabarmati over 12 days with 100 volunteers',
      '300 miles from Wardha to Madras over 30 days with 78 volunteers',
      '240 miles from Champaran to Chauri Chaura over 24 days',
    ],
    correctIndex: 0,
    explanation:
      'From 12 March to 6 April 1930, Gandhiji and 78 trusted volunteers walked ~10 miles a day for 24 days (240 miles) from Sabarmati Ashram to coastal Dandi, breaking the salt law on 6 April.',
  },
  {
    id: 'sst-q-hist-13',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 2: Nationalism in India',
    type: 'mcq',
    marks: 1,
    question:
      'Arrange these milestones of India’s freedom struggle in chronological order (Earliest → Latest):\nI. Simon Commission boycott\nII. Jallianwala Bagh Massacre\nIII. Poona Pact\nIV. Lahore Congress Purna Swaraj Resolution',
    options: [
      'II, I, IV, III',
      'I, II, IV, III',
      'II, IV, I, III',
      'II, I, III, IV',
    ],
    correctIndex: 0,
    explanation:
      'Jallianwala Bagh (13 Apr 1919) → Simon Commission arrives (1928) → Lahore Purna Swaraj (Dec 1929) → Poona Pact (Sep 1932).',
  },
  {
    id: 'sst-q-hist-14',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 2: Nationalism in India',
    type: 'mcq',
    marks: 1,
    question:
      'Who painted the famous 1905 Swadeshi image of Bharat Mata as an ascetic figure — calm, composed, divine, and spiritual — dispensing learning, food, and clothing?',
    options: [
      'Bankim Chandra Chattopadhyay',
      'Raja Ravi Varma',
      'Abanindranath Tagore',
      'Rabindranath Tagore',
    ],
    correctIndex: 2,
    explanation:
      'Bankim Chandra Chattopadhyay first created the image and wrote Vande Mataram (Anandamath) in the 1870s, while Abanindranath Tagore painted the iconic 1905 Swadeshi ascetic Bharat Mata.',
  },
  {
    id: 'sst-q-hist-15',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 2: Nationalism in India',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Congress was unwilling to support "no rent" campaigns of poorer tenants in most places during Civil Disobedience.\nReason (R): Supporting "no rent" demands threatened to upset rich peasants and landlords whose backing Congress depended upon.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Because the Congress feared alienating rich peasants and landlords, its relationship with poor small tenants remained uncertain, pushing many poor tenants toward radical socialist/communist groups.',
  },
  {
    id: 'sst-q-hist-16',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 2: Nationalism in India (Case)',
    type: 'case-based',
    marks: 1,
    casePassage:
      'In September 1932, following Gandhiji’s fast unto death against separate electorates, a historic compromise was signed at Yerwada Jail granting Depressed Classes (later known as Scheduled Castes) reserved seats in provincial and central legislative councils, while keeping voting open to the general electorate.',
    question:
      'Which two leaders signed this September 1932 agreement, and what is it called?',
    options: [
      'Mahatma Gandhi & Lord Irwin — Delhi Pact',
      'Mahatma Gandhi & Dr. B.R. Ambedkar — Poona Pact',
      'Jawaharlal Nehru & Subhas Chandra Bose — Lahore Pact',
      'Muhammad Ali Jinnah & Motilal Nehru — Lucknow Pact',
    ],
    correctIndex: 1,
    explanation:
      'The Poona Pact (September 1932) between Mahatma Gandhi and Dr. B.R. Ambedkar resolved the clash over separate Dalit electorates through reserved seats voted by the general electorate.',
  },
  {
    id: 'sst-q-hist-17',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 3 (1–1.3): Global World',
    type: 'mcq',
    marks: 1,
    question:
      'Seashells ("cowries" / cowdi) used as a form of pre-modern currency travelling all the way to China and East Africa originated from:',
    options: ['Indus Valley', 'Sicily', 'Maldives', 'Peru'],
    correctIndex: 2,
    explanation:
      'For more than a millennium, cowries (cowdi seashells) from the Maldives served as currency across the Indian Ocean to China and East Africa.',
  },
  {
    id: 'sst-q-hist-18',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 3 (1–1.3): Global World',
    type: 'mcq',
    marks: 1,
    question:
      'Which combination accurately describes what moved along the pre-modern Silk Routes (1.1)?',
    options: [
      'ONLY Chinese silk along a single land road from Beijing to Venice',
      'Chinese silk & pottery + Indian/SE Asian spices westwards; European gold & silver eastwards; plus Buddhism, Christianity & Islam',
      'American potatoes and tomatoes moving west to Peru via overland tracks',
      'European industrial steam engines sent to China before the Christian Era',
    ],
    correctIndex: 1,
    explanation:
      'Several land and sea Silk Routes carried Chinese silk/pottery and Indian/SE Asian textiles & spices westwards, paid for by European gold & silver, alongside Buddhism, Christian missionaries & Muslim preachers.',
  },
  {
    id: 'sst-q-hist-19',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 3 (1–1.3): Global World',
    type: 'mcq',
    marks: 1,
    question:
      'Many everyday foods — potatoes, soya, groundnuts, maize, tomatoes, chillies, and sweet potatoes — entered European and Asian diets only about 500 years ago from:',
    options: [
      'India’s Malabar spice coast',
      'America’s original inhabitants (American Indians) after Christopher Columbus’s voyages',
      'Maldives and East African coral ports',
      'Fifth-century Sicily and Ireland',
    ],
    correctIndex: 1,
    explanation:
      'NCERT Section 1.2 highlights that all these crops were first known and cultivated by American Indians and reached Europe and Asia after Columbus accidentally reached the Americas.',
    commonMistake: 'Assuming chillies, potatoes, or tomatoes were ancient crops native to India or Europe.',
  },
  {
    id: 'sst-q-hist-20',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 3 (1–1.3): Global World',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Smallpox proved to be far deadlier than conventional firearms during Spanish and Portuguese conquest of the Americas.\nReason (R): Due to millions of years of isolation, Native Americans lacked biological immunity to European germs, and unlike guns, diseases could not be captured or turned against immune conquerors.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Section 1.3 explicitly contrasts guns (which could be captured and turned back against invaders) with smallpox germs (to which isolated indigenous Americans had zero immunity).',
  },
  {
    id: 'sst-q-hist-21',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 3 (1–1.3): Global World (Case)',
    type: 'case-based',
    marks: 1,
    casePassage:
      'Until well into the eighteenth century, China and India were among the world’s richest countries and were also pre-eminent in Asian trade. However, from the fifteenth century, China is said to have restricted overseas contacts and retreated into isolation, while silver from Peru and Mexico financed Europe’s expanding commerce and plantations in the Americas multiplied Atlantic wealth.',
    question:
      'What major structural shift in global trade occurred as a direct outcome of this 15th–18th century transition?',
    options: [
      'China replaced Europe as the financial hub of South America',
      'The centre of world trade gradually moved westwards, and Europe now emerged as the centre of world trade',
      'Silk Routes completely ended Asian spice farming inside India',
      'India stopped trading across the Indian Ocean in 3000 BCE',
    ],
    correctIndex: 1,
    explanation:
      'China’s reduced overseas role together with the rising importance of the Americas moved the centre of world trade westwards so Europe emerged as the centre of world trade.',
  },
  {
    id: 'sst-q-hist-22',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 5: Print Culture',
    type: 'mcq',
    marks: 1,
    question:
      'Which is the oldest surviving Japanese printed book (AD 868), containing six sheets of text and woodcut illustrations?',
    options: [
      'Accordion Book of Edo',
      'Tripitaka Koreana',
      'Buddhist Diamond Sutra',
      'Gutenberg’s Illuminated Bible',
    ],
    correctIndex: 2,
    explanation:
      'Hand-printing reached Japan from China around AD 768–770, and the oldest Japanese book is the Buddhist Diamond Sutra printed in AD 868.',
  },
  {
    id: 'sst-q-hist-23',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 5: Print Culture',
    type: 'mcq',
    marks: 1,
    question:
      'How did Johann Gutenberg adapt everyday Renaissance crafts to invent the European printing press around 1448?',
    options: [
      'He borrowed steam pistons from Richard M. Hoe and Chinese clay blocks',
      'He modelled the press on wine/olive presses and used goldsmith lead moulds to cast Roman alphabet metal types',
      'He trained 50 scribes to copy Latin manuscripts on animal vellum',
      'He used six-colour offset cylinders invented in Strasbourg',
    ],
    correctIndex: 1,
    explanation:
      'Son of a merchant familiar with wine/olive presses and master goldsmith skilled in lead moulds, Gutenberg adapted the olive press for pressure and cast metal types for the 26 Roman letters (~180 copies of his Bible by 1448).',
  },
  {
    id: 'sst-q-hist-24',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 5: Print Culture',
    type: 'mcq',
    marks: 1,
    question:
      'Match each European print milestone correctly:\nI. Martin Luther — (A) French cheap blue-covered booklets\nII. Menocchio — (B) Executed by Catholic Inquisition for reinterpreting the Bible\nIII. Bibliothèque Bleue — (C) Posted Ninety Five Theses (1517) triggering Protestant Reformation\nIV. Chapbooks — (D) Penny pocket-books sold in England by chapmen',
    options: [
      'I-C, II-B, III-A, IV-D',
      'I-B, II-C, III-A, IV-D',
      'I-C, II-A, III-B, IV-D',
      'I-D, II-B, III-A, IV-C',
    ],
    correctIndex: 0,
    explanation:
      'Luther = 1517 Ninety Five Theses; Menocchio = Italian miller executed by Inquisition (leading to 1558 Index); Bibliothèque Bleue = France blue-cover booklets; Chapbooks = penny England booklets.',
  },
  {
    id: 'sst-q-hist-25',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 5: Print Culture',
    type: 'mcq',
    marks: 1,
    question:
      'Who wrote "Amar Jiban" (published in 1876), the first full-length autobiography published in the Bengali language, after learning to read secretly in her orthodox kitchen?',
    options: [
      'Kailashbashini Debi',
      'Rashsundari Debi',
      'Pandita Ramabai',
      'Tarabai Shinde',
    ],
    correctIndex: 1,
    explanation:
      'Rashsundari Debi learnt to read in the secrecy of her kitchen in an orthodox East Bengal household and published Amar Jiban in 1876.',
  },
  {
    id: 'sst-q-hist-26',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 5: Print Culture',
    type: 'mcq',
    marks: 1,
    question:
      'Arrange these milestones of Indian print history in chronological order (Earliest → Latest):\nI. Jyotiba Phule writes Gulamgiri\nII. First printing press arrives in Goa with Portuguese Jesuits\nIII. James Augustus Hickey launches Bengal Gazette\nIV. Raja Rammohun Roy starts Sambad Kaumudi',
    options: [
      'II, III, IV, I',
      'III, II, IV, I',
      'II, IV, III, I',
      'I, II, III, IV',
    ],
    correctIndex: 0,
    explanation:
      'Goa press (1556) → Hickey’s Bengal Gazette (1780) → Rammohun Roy’s Sambad Kaumudi (1821) → Phule’s Gulamgiri (1871).',
  },
  {
    id: 'sst-q-hist-27',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 5: Print Culture',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Even when nineteenth-century European philosophers like Voltaire and Rousseau attacked the Church and monarchy in print, historians note that print did not unilaterally determine every reader’s mind.\nReason (R): Readers simultaneously consumed monarchical and Church propaganda, accepted some ideas and rejected others, so print mainly opened up the possibility of thinking differently.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'This is NCERT’s exact critical balance concluding the French Revolution debate section in Ch 5: print did not directly shape minds, it opened up the possibility of thinking differently.',
  },
  {
    id: 'sst-q-hist-28',
    subjectSlug: 'social-science',
    topicSlug: 'sst-history',
    subtopicTitle: 'Ch 5: Print Culture (Case)',
    type: 'case-based',
    marks: 1,
    casePassage:
      'After the Revolt of 1857, British attitudes towards Indian press freedom hardened sharply. As Indian-language newspapers became assertively nationalist across provinces, the colonial government enacted a strict 1878 law empowering magistrates to monitor vernacular editorials, issue warnings for reports deemed "seditious", and confiscate presses and printing machinery if warnings were ignored.',
    question:
      'Which 1878 colonial legislation is described here, and which foreign legal framework served as its model?',
    options: [
      'Rowlatt Act — modelled on Martial Law Rules',
      'Vernacular Press Act — modelled on the Irish Press Laws',
      'Macaulay Press Code — modelled on the French Index of 1558',
      'Calcutta Supreme Court Charter — modelled on English Licensing Act',
    ],
    correctIndex: 1,
    explanation:
      'The Vernacular Press Act of 1878 was explicitly modelled on the Irish Press Laws to muzzle Indian-language nationalist newspapers after 1857.',
  },

  // ==========================================
  // GEOGRAPHY — 30 QUESTIONS (CH 1–6 + CH 7 MAP CLUES)
  // ==========================================
  {
    id: 'sst-q-geo-01',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 1: Resources & Development',
    type: 'mcq',
    marks: 1,
    question:
      'Which group of Indian states suffers severe land degradation primarily due to OVER-IRRIGATION causing waterlogging and increased soil salinity/alkalinity?',
    options: [
      'Jharkhand, Chhattisgarh, Madhya Pradesh',
      'Gujarat, Rajasthan, Maharashtra',
      'Punjab, Haryana, Western Uttar Pradesh',
      'Arunachal Pradesh, Mizoram, Manipur',
    ],
    correctIndex: 2,
    explanation:
      'Over-irrigation in Punjab, Haryana, and Western UP causes waterlogging leading to higher salinity and alkalinity. Mining harms JH/CG/MP/Odisha, while overgrazing harms GJ/RJ/MP/MH.',
    commonMistake: 'Confusing mining states (Jharkhand/Chhattisgarh) with over-irrigation states (Punjab/Haryana).',
  },
  {
    id: 'sst-q-geo-02',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 1: Resources & Development',
    type: 'mcq',
    marks: 1,
    question:
      'Identify the correct soil type from these clues: "Develops under tropical/subtropical climate with alternate wet & dry seasons; result of intense leaching due to heavy rain; acidic (pH < 6.0); supports cashew nut in Tamil Nadu, AP & Kerala."',
    options: ['Alluvial Soil', 'Regur (Black) Soil', 'Laterite Soil', 'Arid Soil'],
    correctIndex: 2,
    explanation:
      'Laterite soil (from Latin "later" = brick) forms via intense heavy-rain leaching, is acidic (pH < 6.0), and grows tea, coffee & cashew nuts in hilly southern states.',
  },
  {
    id: 'sst-q-geo-03',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 1: Resources & Development',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Black (Regur) soil helps crop growth during dry hot seasons even without heavy manual tilling.\nReason (R): Black soil develops deep cracks during hot weather, which allows proper aeration of the soil.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Black clayey soil retains high moisture and self-aerates through deep summer cracks (note it turns sticky when wet, so tilling is ideally done immediately after the first shower/pre-monsoon).',
  },
  {
    id: 'sst-q-geo-04',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 1: Resources & Development',
    type: 'mcq',
    marks: 1,
    question:
      'In which river basin are eroded clayey bad-land gullies locally known as "ravines"?',
    options: ['Brahmaputra Basin', 'Chambal Basin', 'Kaveri Delta', 'Damodar Valley'],
    correctIndex: 1,
    explanation:
      'Running water cuts deep gully channels into clayey soil making bad land, called "ravines" in the Chambal basin.',
  },
  {
    id: 'sst-q-geo-05',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 2: Forest & Wildlife',
    type: 'mcq',
    marks: 1,
    question:
      'Which Indian state holds the largest area under "Permanent Forests" (Reserved + Protected forests combined), constituting 75% of its total forest area?',
    options: ['Arunachal Pradesh', 'Odisha', 'Madhya Pradesh', 'Uttarakhand'],
    correctIndex: 2,
    explanation:
      'Madhya Pradesh holds the largest area under permanent forests (75% of its total forest area), whereas NE states & Gujarat hold high shares of unclassed forests.',
  },
  {
    id: 'sst-q-geo-06',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 2: Forest & Wildlife',
    type: 'mcq',
    marks: 1,
    question:
      'In which year and in which Indian state was the first formal resolution for Joint Forest Management (JFM) passed?',
    options: [
      '1972 — Uttarakhand',
      '1973 — Rajasthan',
      '1988 — Odisha',
      '1991 — Madhya Pradesh',
    ],
    correctIndex: 2,
    explanation:
      'Odisha passed the FIRST formal JFM resolution in 1988 (1972 = Wildlife Protection Act; 1973 = Project Tiger; 1991 = 6 plant species added to Wildlife Act).',
  },
  {
    id: 'sst-q-geo-07',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 2: Forest & Wildlife',
    type: 'mcq',
    marks: 1,
    question:
      'In which district of Rajasthan did five villages declare 1,200 hectares of forest as Bhairodev Dakav "Sonchuri", banning hunting and protecting wildlife with community rules?',
    options: ['Jaisalmer', 'Bikaner', 'Alwar', 'Kota'],
    correctIndex: 2,
    explanation:
      'Inhabitants of five villages in Alwar district (Rajasthan) created Bhairodev Dakav "Sonchuri" across 1,200 hectares.',
  },
  {
    id: 'sst-q-geo-08',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 2: Forest & Wildlife',
    type: 'mcq',
    marks: 1,
    question:
      'Which pair of trees is specifically worshipped by the Munda and Santhal tribes of the Chota Nagpur region as part of Sacred Groves?',
    options: [
      'Teak and Deodar',
      'Mahua and Kadamba',
      'Neem and Eucalyptus',
      'Sal and Bamboo',
    ],
    correctIndex: 1,
    explanation:
      'Mundas and Santhals of Chota Nagpur worship mahua (Bassia latifolia) and kadamba (Anthocaphalus cadamba); Odisha/Bihar tribals worship tamarind and mango at weddings.',
  },
  {
    id: 'sst-q-geo-09',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 3: Water Resources',
    type: 'mcq',
    marks: 1,
    question:
      'Which Indian state is the FIRST in the country to make rooftop rainwater harvesting structures legally compulsory for all houses across the state?',
    options: ['Rajasthan', 'Karnataka', 'Meghalaya', 'Tamil Nadu'],
    correctIndex: 3,
    explanation:
      'Tamil Nadu is the first state in India that made rooftop rainwater harvesting structures compulsory across all houses with legal provisions to punish defaulters.',
    commonMistake: 'Choosing Rajasthan because it has Tankas — legal statewide compulsion belongs to Tamil Nadu.',
  },
  {
    id: 'sst-q-geo-10',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 3: Water Resources',
    type: 'mcq',
    marks: 1,
    question:
      'Match each compulsory CBSE Map Dam to its correct River:\nI. Salal — (A) Chambal\nII. Tehri — (B) Mahanadi\nIII. Rana Pratap Sagar — (C) Chenab\nIV. Hirakud — (D) Bhagirathi',
    options: [
      'I-C, II-D, III-A, IV-B',
      'I-D, II-C, III-A, IV-B',
      'I-C, II-A, III-D, IV-B',
      'I-B, II-D, III-A, IV-C',
    ],
    correctIndex: 0,
    explanation:
      'Salal = Chenab (J&K); Tehri = Bhagirathi (Uttarakhand); Rana Pratap Sagar = Chambal (Rajasthan); Hirakud = Mahanadi (Odisha).',
  },
  {
    id: 'sst-q-geo-11',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 3: Water Resources',
    type: 'mcq',
    marks: 1,
    question:
      'Which 14th-century Delhi water tank was constructed by Sultan Iltutmish specifically for supplying water to the Siri Fort area?',
    options: ['Bhopal Lake', 'Hauz Khas Tank', 'Sringaverapura Channel', 'Phalodi Tanka'],
    correctIndex: 1,
    explanation:
      'Hauz Khas (14th c.) by Iltutmish served Siri Fort; Bhopal Lake dates to 11th c.; Sringaverapura dates to 1st c. BCE.',
  },
  {
    id: 'sst-q-geo-12',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 3: Water Resources (Case)',
    type: 'case-based',
    marks: 1,
    casePassage:
      'In Meghalaya, farmers tap perennial hill streams and springs (flowing at 18–20 litres per minute) over hundreds of metres using split bamboo pipes, carefully reducing the flow by gravity so that only 20–80 drops per minute reach the exact base of black pepper or betel plants.',
    question:
      'Why is this 200-year-old Meghalaya Bamboo Drip Irrigation technique ecologically ideal for the hill terrain?',
    options: [
      'It requires heavy diesel groundwater pumps and dams',
      'It delivers scarce spring water drop-by-drop directly to roots with minimal evaporation or slope runoff loss',
      'It stores monsoon rain exclusively in urban concrete bunkers',
      'It relies on chemical fertilisers dissolved inside flooded paddy fields',
    ],
    correctIndex: 1,
    explanation:
      'Meghalaya’s bamboo drip system uses zero fossil-fuel pumping and prevents water wastage on steep porous/rocky slopes.',
  },
  {
    id: 'sst-q-geo-13',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 4: Agriculture',
    type: 'mcq',
    marks: 1,
    question:
      'Which pair correctly identifies the "Slash and Burn" farming name in Manipur vs. Mexico/Central America?',
    options: [
      'Pamlou (Manipur) & Milpa (Mexico)',
      'Dipa (Manipur) & Ladang (Mexico)',
      'Jhumming (Manipur) & Roca (Mexico)',
      'Podu (Manipur) & Conuco (Mexico)',
    ],
    correctIndex: 0,
    explanation:
      'Manipur = Pamlou; Bastar & A&N = Dipa; Assam/Meghalaya/Mizoram/Nagaland = Jhumming; AP = Podu/Penda; Mexico & Central America = Milpa.',
  },
  {
    id: 'sst-q-geo-14',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 4: Agriculture',
    type: 'mcq',
    marks: 1,
    question:
      'Most leguminous pulse crops restore soil fertility by fixing nitrogen from the air — which pulse crop is the NCERT-stated EXCEPTION?',
    options: ['Moong', 'Urad', 'Gram', 'Arhar (Tur)'],
    correctIndex: 3,
    explanation:
      'NCERT Ch 4 explicitly specifies: "Being leguminous crops, all these crops EXCEPT ARHAR help in restoring soil fertility by fixing nitrogen from the air."',
    commonMistake: 'Assuming all pulses fix atmospheric nitrogen equally.',
  },
  {
    id: 'sst-q-geo-15',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 4: Agriculture',
    type: 'mcq',
    marks: 1,
    question:
      'Which oilseed crop is grown as a Kharif crop in North India, yet as a Rabi crop in South India?',
    options: ['Groundnut', 'Mustard', 'Sesamum (Til)', 'Linseed'],
    correctIndex: 2,
    explanation:
      'Groundnut = Kharif (~half of India’s oilseeds); Mustard & Linseed = Rabi; Sesamum = Kharif in North & Rabi in South; Castor = both.',
  },
  {
    id: 'sst-q-geo-16',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 4: Agriculture',
    type: 'mcq',
    marks: 1,
    question:
      'Read these crop conditions: "Requires black Deccan plateau soil, high temperature, light rainfall/irrigation, 210 frost-free days, and bright sunshine for growth." Identify the crop and its leading producer belt.',
    options: [
      'Jute — West Bengal & Assam',
      'Cotton — Maharashtra & Gujarat',
      'Rubber — Kerala & Tamil Nadu',
      'Tea — Assam & Darjeeling',
    ],
    correctIndex: 1,
    explanation:
      'Cotton takes 6–8 months to mature and requires 210 frost-free days and bright sunshine on black soil (Maharashtra & Gujarat lead).',
  },
  {
    id: 'sst-q-geo-17',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 4: Agriculture (Case)',
    type: 'case-based',
    marks: 1,
    casePassage:
      'Following Mahatma Gandhi’s martyrdom, Vinoba Bhave undertook a nationwide padayatra spreading Gram Swarajya. At Pochampalli in present-day Telangana (then Andhra Pradesh), some poor landless villagers demanded 80 acres of land for economic well-being. Suddenly, Shri Ram Chandra Reddy stood up and offered 80 acres of his land to be distributed among 80 landless villagers.',
    question:
      'What did this voluntary land-gift act inaugurate, and by what popular name is the wider movement known?',
    options: [
      'Operation Flood — White Revolution',
      'Bhoodan & Gramdan — Blood-less Revolution',
      'Green Revolution — Package Technology',
      'Zamindari Act — Tenancy Consolidation',
    ],
    correctIndex: 1,
    explanation:
      'Offering land (Bhoodan) and later whole villages (Gramdan) started by Vinoba Bhave at Pochampalli became famous as the "Blood-less Revolution".',
  },
  {
    id: 'sst-q-geo-18',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 5: Minerals & Energy',
    type: 'mcq',
    marks: 1,
    question:
      'Approximately how much Manganese is required to manufacture one tonne of steel in India?',
    options: ['1 kg', '10 kg', '50 kg', '100 kg'],
    correctIndex: 1,
    explanation:
      'Nearly 10 kg of manganese is required to manufacture 1 tonne of steel (also used in bleaching powder, insecticides, and paints).',
  },
  {
    id: 'sst-q-geo-19',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 5: Minerals & Energy',
    type: 'mcq',
    marks: 1,
    question:
      'Which statement accurately distinguishes Magnetite from Hematite iron ore?',
    options: [
      'Hematite has higher iron content (70%) than Magnetite',
      'Magnetite is the finest ore (~70% iron) with magnetic qualities; Hematite (50–60% iron) is the largest industrial ore by volume used',
      'Both occur exclusively inside Kerala’s monazite sands',
      'Magnetite is mined only through Rat-Hole mining in Meghalaya',
    ],
    correctIndex: 1,
    explanation:
      'Magnetite = up to 70% iron + magnetic qualities (electrical industry); Hematite = 50–60% iron, most important industrial iron ore by quantity.',
  },
  {
    id: 'sst-q-geo-20',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 5: Minerals & Energy',
    type: 'mcq',
    marks: 1,
    question:
      'Which state leads Bauxite production in India, led by the Panchpatmali deposits in Koraput district?',
    options: ['Jharkhand', 'Madhya Pradesh', 'Odisha', 'Gujarat'],
    correctIndex: 2,
    explanation:
      'Odisha is India’s largest bauxite-producing state, with Panchpatmali deposits in Koraput district being the most important.',
  },
  {
    id: 'sst-q-geo-21',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 5: Minerals & Energy',
    type: 'mcq',
    marks: 1,
    question:
      'Match these CBSE Map Nuclear & Thermal Power Plants to their correct States:\nI. Narora — (A) Gujarat\nII. Kakrapara — (B) Tamil Nadu\nIII. Kalpakkam — (C) Uttar Pradesh\nIV. Ramagundam — (D) Telangana',
    options: [
      'I-C, II-A, III-B, IV-D',
      'I-A, II-C, III-B, IV-D',
      'I-C, II-B, III-A, IV-D',
      'I-D, II-A, III-B, IV-C',
    ],
    correctIndex: 0,
    explanation:
      'Nuclear: Narora (UP), Kakrapara (Gujarat), Kalpakkam (Tamil Nadu), Tarapur (Maharashtra). Thermal: Ramagundam (Telangana), Singrauli (MP), Namrup (Assam).',
  },
  {
    id: 'sst-q-geo-22',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 5: Minerals & Energy',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Coal mining in Jowai and Cherapunjee (Meghalaya) by digging narrow family tunnels ("Rat-hole mining") has been declared illegal by the National Green Tribunal.\nReason (R): Unregulated rat-hole tunnels endanger miners’ lives and degrade fragile hill ecosystems even where minerals are privately/community owned in North-East tribal areas.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'NCERT highlights this exact NGT prohibition on Meghalaya rat-hole coal mining.',
  },
  {
    id: 'sst-q-geo-23',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 6: Manufacturing',
    type: 'mcq',
    marks: 1,
    question:
      'Oil India Ltd. (OIL) belongs to which ownership sector of industry?',
    options: ['Public Sector', 'Private Sector', 'Joint Sector', 'Cooperative Sector'],
    correctIndex: 2,
    explanation:
      'Oil India Ltd. (OIL) is jointly run by the state and private individuals/groups (Joint Sector). Compare: BHEL/SAIL = Public; TISCO/Dabur = Private; MH Sugar/KL Coir = Cooperative.',
  },
  {
    id: 'sst-q-geo-24',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 6: Manufacturing',
    type: 'mcq',
    marks: 1,
    question:
      'Why have sugar mills increasingly shifted towards Southern and Western states, especially Maharashtra, in recent decades?',
    options: [
      'Cane grown there has higher sucrose content and the cooler climate ensures a longer crushing season (plus stronger cooperatives)',
      'Water supply from Himalayan glaciers makes UP mills stop crushing in winter',
      'Maharashtra grows sugarcane in arid sandy soils needing no irrigation',
      'The chemical industry bans sugar production north of the Vindhyas',
    ],
    correctIndex: 0,
    explanation:
      'Three NCERT reasons for the Southern/Western shift: higher sucrose content, cooler climate extending the crushing season, and more successful cooperatives.',
  },
  {
    id: 'sst-q-geo-25',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 6: Manufacturing',
    type: 'mcq',
    marks: 1,
    question:
      'In what approximate raw-material proportion are Iron ore, Coking coal, and Limestone required to manufacture steel?',
    options: ['1 : 2 : 4', '4 : 2 : 1', '2 : 4 : 1', '3 : 3 : 1'],
    correctIndex: 1,
    explanation:
      'Iron ore, coking coal, and limestone are required roughly in the 4 : 2 : 1 ratio (with manganese added to harden steel).',
  },
  {
    id: 'sst-q-geo-26',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 6: Manufacturing',
    type: 'mcq',
    marks: 1,
    question:
      'Which fertiliser nutrient must India IMPORT ENTIRELY because the country has no commercially usable reserves of potash or potassium compounds?',
    options: ['Nitrogen (Urea)', 'Phosphate (DAP)', 'Potash (K)', 'Ammonia'],
    correctIndex: 2,
    explanation:
      'India has zero reserves of commercially usable potash or potassium compounds in any form, so Potash is 100% imported.',
  },
  {
    id: 'sst-q-geo-27',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 6: Manufacturing',
    type: 'mcq',
    marks: 1,
    question:
      'Identify the correct State match for CBSE’s 6 Iron & Steel Map Plants:',
    options: [
      'Bokaro & Jamshedpur (Jharkhand) | Bhilai (Chhattisgarh) | Vijayanagar (Karnataka) | Salem (Tamil Nadu)',
      'Durgapur (Odisha) | Bokaro (West Bengal) | Vijayanagar (Andhra Pradesh)',
      'Bhilai (Madhya Pradesh) | Jamshedpur (West Bengal) | Salem (Kerala)',
      'Durgapur (Jharkhand) | Salem (Karnataka) | Bhilai (Odisha)',
    ],
    correctIndex: 0,
    explanation:
      'All 6 CBSE Steel Plants: Durgapur (West Bengal), Bokaro & Jamshedpur (Jharkhand), Bhilai (Chhattisgarh), Vijayanagar (Karnataka), and Salem (Tamil Nadu).',
  },
  {
    id: 'sst-q-geo-28',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 7 (Map Only): Sea Ports',
    type: 'mcq',
    marks: 1,
    question:
      'Map Clue Check (Q37b): Which sea port was the FIRST developed after Independence in Kuchchh (Gujarat) as a tidal port to relieve pressure on Mumbai after Karachi went to Pakistan?',
    options: ['Marmagao', 'Kandla (Deendayal)', 'Haldia', 'Tuticorin'],
    correctIndex: 1,
    explanation:
      'Kandla (Deendayal Port) in Gulf of Kuchchh, Gujarat is the tidal port developed right after Partition.',
  },
  {
    id: 'sst-q-geo-29',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 7 (Map Only): Sea Ports',
    type: 'mcq',
    marks: 1,
    question:
      'Map Clue Check (Q37b): Which pair correctly matches "deepest landlocked well-protected port" and "oldest artificial port" on India’s East Coast?',
    options: [
      'Haldia (landlocked) & Paradwip (artificial)',
      'Vishakhapatnam (deepest landlocked) & Chennai (oldest artificial)',
      'Tuticorin (deepest landlocked) & Kochi (oldest artificial)',
      'New Mangalore (landlocked) & Mumbai (artificial)',
    ],
    correctIndex: 1,
    explanation:
      'Vishakhapatnam (Andhra Pradesh) = deepest landlocked well-protected port; Chennai (Tamil Nadu) = one of the oldest artificial ports.',
  },
  {
    id: 'sst-q-geo-30',
    subjectSlug: 'social-science',
    topicSlug: 'sst-geography',
    subtopicTitle: 'Ch 7 (Map Only): Airports',
    type: 'mcq',
    marks: 1,
    question:
      'Map Clue Check (Q37b): Identify the correct City–International Airport pairs:\nI. Raja Sansi — (A) Hyderabad\nII. Meenam Bakkam — (B) Amritsar\nIII. Rajiv Gandhi — (C) Kolkata\nIV. Netaji Subhash Chandra Bose — (D) Chennai',
    options: [
      'I-B, II-D, III-A, IV-C',
      'I-D, II-B, III-A, IV-C',
      'I-B, II-A, III-D, IV-C',
      'I-C, II-D, III-A, IV-B',
    ],
    correctIndex: 0,
    explanation:
      'Amritsar = Raja Sansi; Chennai = Meenam Bakkam; Hyderabad = Rajiv Gandhi; Kolkata = Netaji Subhash Chandra Bose; Mumbai = Chhatrapati Shivaji; Delhi = Indira Gandhi.',
  },
  // ==========================================
  // SECTION F MAP & 80M MASTERY — 15 QUESTIONS
  // ==========================================
  {
    id: 'sst-q-map-01',
    subjectSlug: 'social-science',
    topicSlug: 'sst-map-mastery',
    subtopicTitle: 'Q37a History Map (INC Sessions)',
    type: 'mcq',
    marks: 1,
    question:
      'In Question 37a (India political map), point "A" is marked in eastern Maharashtra (Vidarbha) with the clue "December 1920 INC Session". Identify point A.',
    options: ['Calcutta', 'Nagpur', 'Madras', 'Champaran'],
    correctIndex: 1,
    explanation:
      'December 1920 INC Session where Non-Cooperation was formally adopted took place at Nagpur (eastern Maharashtra). Special Session in September 1920 was Calcutta.',
  },
  {
    id: 'sst-q-map-02',
    subjectSlug: 'social-science',
    topicSlug: 'sst-map-mastery',
    subtopicTitle: 'Q37a History Map (Gujarat Trio)',
    type: 'mcq',
    marks: 1,
    question:
      'On an outline map of India, three History Ch 2 pins lie in Gujarat: North-central inland city (1918), immediate south-east rural district (1917), and southern coast village (1930). What is their correct North-to-South order?',
    options: [
      'Kheda → Ahmedabad → Dandi',
      'Ahmedabad → Kheda → Dandi',
      'Dandi → Kheda → Ahmedabad',
      'Ahmedabad → Dandi → Kheda',
    ],
    correctIndex: 1,
    explanation:
      'North to South in Gujarat: Ahmedabad (1918 Cotton Mill Workers) → Kheda immediately SE (1917 Peasant Satyagraha) → Dandi on south Navsari coast (1930 Salt Law).',
  },
  {
    id: 'sst-q-map-03',
    subjectSlug: 'social-science',
    topicSlug: 'sst-map-mastery',
    subtopicTitle: 'Q37a History Map (Movement Centres)',
    type: 'mcq',
    marks: 1,
    question:
      'Match Q37a map pin clues with exact places:\nI. Calling off Non-Cooperation due to violence (1922) — (A) Amritsar\nII. Indigo Planters Satyagraha (1917) — (B) Chauri Chaura\nIII. Jallianwala Bagh Incident (Apr 1919) — (C) Madras\nIV. 1927 INC Session — (D) Champaran',
    options: [
      'I-B, II-D, III-A, IV-C',
      'I-D, II-B, III-A, IV-C',
      'I-B, II-A, III-D, IV-C',
      'I-C, II-D, III-A, IV-B',
    ],
    correctIndex: 0,
    explanation:
      'Chauri Chaura (UP) = Feb 1922 calling off NCM; Champaran (Bihar) = 1917 Indigo Planters; Amritsar (PB) = 13 Apr 1919 Jallianwala Bagh; Madras = 1927 INC Session.',
  },
  {
    id: 'sst-q-map-04',
    subjectSlug: 'social-science',
    topicSlug: 'sst-map-mastery',
    subtopicTitle: 'Q37b Geography Map Scope Rule',
    type: 'mcq',
    marks: 1,
    question:
      'Which CBSE Geography chapter pair is tested EXCLUSIVELY through "Identification Only" (shaded regions/pins given on map) rather than blank-map Locating & Labelling?',
    options: [
      'Ch 3 Dams & Ch 7 Sea Ports',
      'Ch 1 Major Soil Types & Ch 4 Major Rice/Wheat/Producer Belts',
      'Ch 5 Nuclear Power Plants & Ch 6 Steel Plants',
      'Ch 6 Software Technology Parks & Ch 7 International Airports',
    ],
    correctIndex: 1,
    explanation:
      'Per CBSE official syllabus, Ch 1 Soils and Ch 4 Major Crop areas (plus Ch 5A Iron/Coal/Oil mines) are Identification Only; Dams, Power Plants, Industries & Ports/Airports are Locating & Labelling.',
  },
  {
    id: 'sst-q-map-05',
    subjectSlug: 'social-science',
    topicSlug: 'sst-map-mastery',
    subtopicTitle: 'Q37b Water Resources (8 Dams)',
    type: 'mcq',
    marks: 1,
    question:
      'Identify the correct Dam ↔ River ↔ State combination for Question 37b:',
    options: [
      'Tehri — Sutlej — Punjab',
      'Sardar Sarovar — Narmada — Gujarat',
      'Hirakud — Chambal — Rajasthan',
      'Salal — Bhagirathi — Uttarakhand',
    ],
    correctIndex: 1,
    explanation:
      'Sardar Sarovar is on River Narmada in Gujarat. Tehri = Bhagirathi (UK); Hirakud = Mahanadi (Odisha); Salal = Chenab (J&K); Rana Pratap Sagar = Chambal (RJ).',
  },
  {
    id: 'sst-q-map-06',
    subjectSlug: 'social-science',
    topicSlug: 'sst-map-mastery',
    subtopicTitle: 'Q37b Minerals & Energy',
    type: 'mcq',
    marks: 1,
    question:
      'A map clue marks a dot in south Chhattisgarh near Bastar stating: "Super-high-grade Hematite iron ore mine exported via Vishakhapatnam port." Identify it.',
    options: ['Mayurbhanj', 'Durg', 'Bailadila', 'Kudremukh'],
    correctIndex: 2,
    explanation:
      'Bailadila hills in Bastar (southern Chhattisgarh) produce high-grade hematite exported to Japan/S. Korea via Vishakhapatnam. Kudremukh (Karnataka) exports via New Mangalore.',
  },
  {
    id: 'sst-q-map-07',
    subjectSlug: 'social-science',
    topicSlug: 'sst-map-mastery',
    subtopicTitle: 'Q37b Nuclear & Thermal Power',
    type: 'mcq',
    marks: 1,
    question:
      'Which pair lists ALL FOUR CBSE-prescribed Nuclear Power Plants in South-to-North order of latitude?',
    options: [
      'Kalpakkam (TN) → Tarapur (MH) → Kakrapara (GJ) → Narora (UP)',
      'Kakrapara (GJ) → Kalpakkam (TN) → Narora (UP) → Tarapur (MH)',
      'Tarapur (MH) → Kalpakkam (TN) → Kakrapara (GJ) → Narora (UP)',
      'Kalpakkam (TN) → Kakrapara (GJ) → Tarapur (MH) → Singrauli (MP)',
    ],
    correctIndex: 0,
    explanation:
      'Latitude S → N: Kalpakkam (~12.6°N, TN) → Tarapur (~19.8°N, MH) → Kakrapara (~21.2°N, GJ) → Narora (~28.2°N, UP). Singrauli is a Thermal plant.',
  },
  {
    id: 'sst-q-map-08',
    subjectSlug: 'social-science',
    topicSlug: 'sst-map-mastery',
    subtopicTitle: 'Q37b Offshore Oil vs Land',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): On a blank outline map of India, Mumbai High and Bassien must be plotted inside the Arabian Sea west of the Konkan coast.\nReason (R): Mumbai High and Bassien are offshore petroleum and natural-gas fields, not onshore Gujarat/Assam wells.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Mumbai High (~160 km WNW of Mumbai) and Bassien lie offshore inside the Arabian Sea.',
  },
  {
    id: 'sst-q-map-09',
    subjectSlug: 'social-science',
    topicSlug: 'sst-map-mastery',
    subtopicTitle: 'Q37b Manufacturing (Cotton/Steel/STP)',
    type: 'mcq',
    marks: 1,
    question:
      'Which Software Technology Park lies at the extreme northern end (UP–Delhi NCR boundary) vs. extreme southern end (Kerala coast) of CBSE’s 8-STP map list?',
    options: [
      'Noida (North) & Thiruvananthapuram (South)',
      'Gandhinagar (North) & Bengaluru (South)',
      'Kanpur (North) & Chennai (South)',
      'Noida (North) & Coimbatore (South)',
    ],
    correctIndex: 0,
    explanation:
      'Noida (UP NCR) is the northernmost and Thiruvananthapuram (Kerala) is the southernmost among the 8 Software Technology Parks.',
  },
  {
    id: 'sst-q-map-10',
    subjectSlug: 'social-science',
    topicSlug: 'sst-map-mastery',
    subtopicTitle: 'Q37b West vs East Coast Ports',
    type: 'mcq',
    marks: 1,
    question:
      'Arrange these FIVE West Coast Major Sea Ports from NORTH to SOUTH:',
    options: [
      'Kandla → Mumbai → New Mangalore → Marmagao → Kochi',
      'Kandla → Mumbai → Marmagao → New Mangalore → Kochi',
      'Mumbai → Kandla → Marmagao → Kochi → New Mangalore',
      'Kandla → Surat → Marmagao → New Mangalore → Kochi',
    ],
    correctIndex: 1,
    explanation:
      'West Coast Ports (N→S): Kandla (Gujarat) → Mumbai (Maharashtra) → Marmagao (Goa) → New Mangalore (Karnataka) → Kochi (Kerala).',
  },
  {
    id: 'sst-q-map-11',
    subjectSlug: 'social-science',
    topicSlug: 'sst-map-mastery',
    subtopicTitle: 'Q37b Ch 7 Airports & Odisha Clues',
    type: 'case-based',
    marks: 1,
    casePassage:
      'In a CBSE Section F practice sheet, a student marks Odisha coast with "Hirakud Dam", plots a circle in Punjab labelled "Raja Sansi International Airport", and labels "Haldiya Sea Port" in West Bengal on the Hooghly.',
    question:
      'Evaluate the student’s three plotted labels accurately:',
    options: [
      'All three plots are completely accurate',
      'Raja Sansi (Amritsar, Punjab) & Haldia (West Bengal) are correct, while Hirakud must move inland to NW Odisha (coastal port is Paradwip)',
      'Only Hirakud on Odisha coast is correct; both Raja Sansi and Haldia are in wrong states',
      'Raja Sansi should move to Delhi NCR',
    ],
    correctIndex: 1,
    explanation:
      'Paradwip is on the Odisha coast whereas Hirakud Dam is inland NW Odisha across River Mahanadi. Amritsar = Raja Sansi Airport; West Bengal = Haldia subsidiary port.',
  },
  {
    id: 'sst-q-map-12',
    subjectSlug: 'social-science',
    topicSlug: 'sst-map-mastery',
    subtopicTitle: '80M Blueprint (Sections A–F)',
    type: 'mcq',
    marks: 1,
    question:
      'How many marks and questions constitute Section D (Long Answer) and Section F (Map Skill Based) respectively in CBSE Class 10 Social Science (Code 087)?',
    options: [
      'Section D: 4 Qs × 5M = 20 Marks (1 from each unit) | Section F: 2M History + 3M Geography = 5 Marks',
      'Section D: 5 Qs × 4M = 20 Marks | Section F: 5M Geography only',
      'Section D: 3 Qs × 5M = 15 Marks | Section F: 3M History + 2M Geography = 5 Marks',
      'Section D: 4 Qs × 5M = 20 Marks | Section F: 10 Marks total',
    ],
    correctIndex: 0,
    explanation:
      'Sections A–F total 37 questions = 80 marks: A (20×1=20M), B (4×2=8M), C (5×3=15M), D (4×5=20M — one per book), E (3×4=12M Case), F (2M History + 3M Geography = 5M).',
  },
  {
    id: 'sst-q-map-13',
    subjectSlug: 'social-science',
    topicSlug: 'sst-map-mastery',
    subtopicTitle: 'Strict 23-Nov Syllabus Scope',
    type: 'mcq',
    marks: 1,
    question:
      'Which option CORRECTLY states the 23 Nov 2026 exam scope across History Ch 3 and Geography Ch 7?',
    options: [
      'History Ch 3 includes Bretton Woods & 1929 Depression; Geography Ch 7 tests railway gauges in 5M LA',
      'History Ch 3 covers ONLY Sections 1 to 1.3 (Pre-modern World to Conquest, Disease & Trade); Geography Ch 7 tests ONLY Map Pointing',
      'History Ch 4 (Age of Industrialisation) carries 10 compulsory marks',
      'Geography Ch 2 tests National Parks on Q37b map',
    ],
    correctIndex: 1,
    explanation:
      'Your official syllabus covers History Ch 3 Sections 1–1.3 only (no Ch 4), Economics Ch 4 + G20, and Geography Ch 7 ONLY for Map Pointing (zero Ch 2 map items).',
  },
  {
    id: 'sst-q-map-14',
    subjectSlug: 'social-science',
    topicSlug: 'sst-map-mastery',
    subtopicTitle: 'Cross-Unit Synthesis (Dates & Ratios)',
    type: 'mcq',
    marks: 1,
    question:
      'Spot the ONLY statement containing an error across all 4 SST disciplines:',
    options: [
      'Belgium amended its constitution 4 times between 1970 and 1993 to enable community coexistence',
      'Manufacturing 1 tonne of steel requires Iron ore, Coking coal & Limestone in roughly a 4 : 2 : 1 ratio',
      'Formal credit in India includes Commercial Banks & Cooperatives supervised by the RBI',
      'Potash fertilisers are exported worldwide from surplus Indian Potash mines in Rajasthan',
    ],
    correctIndex: 3,
    explanation:
      'India has NO commercially usable potash reserves — 100% of Potash fertiliser is imported!',
  },
  {
    id: 'sst-q-map-15',
    subjectSlug: 'social-science',
    topicSlug: 'sst-map-mastery',
    subtopicTitle: 'Cross-Unit Dates & Treaties',
    type: 'mcq',
    marks: 1,
    question:
      'Which chronological sequence is 100% accurate from EARLIEST to LATEST?',
    options: [
      '1815 Treaty of Vienna → 1834 Zollverein → 1919 Jallianwala Bagh → 1972 Wildlife Protection Act → 2023 New Delhi G20 AU Admission',
      '1834 Zollverein → 1815 Treaty of Vienna → 1919 Jallianwala Bagh → 2023 G20 → 1972 Wildlife Act',
      '1815 Treaty of Vienna → 1919 Jallianwala Bagh → 1834 Zollverein → 1972 Wildlife Act → 2023 G20',
      '1789 French Revolution → 1871 German Unification → 1834 Zollverein → 1932 Poona Pact',
    ],
    correctIndex: 0,
    explanation:
      '1815 (Vienna) → 1834 (Zollverein) → 1919 (Jallianwala Bagh) → 1972 (Indian Wildlife Protection Act) → Sep 2023 (African Union joins G20 at New Delhi).',
  },
];
