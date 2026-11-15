import { Subtopic } from '../../../types/curriculum';

export const sstCiv04: Subtopic = {
  id: 'sst-civ-04',
  slug: 'political-parties',
  title: 'Ch 4: Political Parties',
  subtitle:
    'Democratic Politics II | 7 Functions, Party Systems, ECI National/State Recognition Formula, 6 National Parties, 4 Challenges & Reforms',
  estimatedMinutes: 35,
  difficulty: 'Core CBSE',
  ncertSection: 'Democratic Politics II — Chapter 4',
  learningObjectives: [
    'Define a political party, list its three components, and explain the seven functions political parties perform in a democracy.',
    'Compare One-party, Two-party, and Multi-party systems and justify why India adopted a Multi-party coalition system.',
    'Apply the Election Commission of India (ECI) criteria to distinguish a Recognised State Party from a Recognised National Party.',
    'Identify the six current Recognised National Parties in NCERT (AAP, BSP, BJP, CPI-M, INC, NPP) along with their founding years and core ideologies.',
    'Analyse the four major challenges faced by political parties and distinguish enacted legal reforms from suggested future reforms.',
  ],
  keywords: [
    'Political Party',
    'Partisan',
    'Multi-party system',
    'Coalition',
    'National Party 6% 4 seats',
    'State Party 6% 2 seats',
    'AAP',
    'BSP',
    'BJP',
    'CPI(M)',
    'INC',
    'NPP',
    'Anti-Defection Law',
    'Affidavit',
  ],
  sections: [
    {
      id: 'civ-04-architecture',
      title: 'Pillar 1: Constitutional & Institutional Architecture — Functions, Systems & ECI Criteria',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Exam Glance',
          bullets: [
            'Definition & 3 Components: A political party is a group of people who come together to contest elections and hold power in the government. Its 3 components are: (1) The Leaders, (2) The Active Members, and (3) The Followers.',
            'Why Parties Are Necessary: Without parties, every candidate is independent → nobody can make promises about major national policy changes, the government remains fragile, and MLAs/MPs are accountable only to their locality, not the country.',
            'ECI State Party Criteria: Secures at least 6% of total votes in an election to the State Legislative Assembly AND wins at least 2 seats.',
            'ECI National Party Criteria: Secures at least 6% of total votes in Lok Sabha elections OR Assembly elections in 4 States AND wins at least 4 seats in the Lok Sabha.',
            'Updated NCERT 6 National Parties (2023): AAP (2012), BSP (1984), BJP (1980), CPI(M) (1964), INC (1885), and NPP (2013 — first from North-East India). (Note: AITC, CPI, and NCP lost national status in the rationalised update; do not list old parties unless asked historically.)',
          ],
        },
        {
          type: 'steps',
          title: 'The 7 Essential Functions of Political Parties (Guaranteed 5-Mark Checklist)',
          items: [
            {
              label: '1. Contest Elections',
              detail:
                'Parties put up candidates (chosen by top leaders as in India, or by members/supporters as in USA) to fight elections.',
            },
            {
              label: '2. Put Forward Policies & Programmes',
              detail:
                'Voters choose among bundled policies; a party reduces a vast multitude of opinions into a few basic positions the government can adopt.',
            },
            {
              label: '3. Play a Decisive Role in Making Laws',
              detail:
                'Though laws are formally debated and passed in the legislature, most members belong to a party and vote along party leadership direction.',
            },
            {
              label: '4. Form and Run Governments',
              detail:
                'Big policy decisions are taken by political executives recruited, trained, and appointed by the ruling party.',
            },
            {
              label: '5. Role of Opposition',
              detail:
                'Losing parties act as Opposition — voicing different views, criticising government failures or wrong policies, and mobilising public protest.',
            },
            {
              label: '6. Shape Public Opinion',
              detail:
                'Parties raise and highlight public issues via lakh of members/activists and allied pressure groups, launching movements to solve problems.',
            },
            {
              label: '7. Provide Access to Govt Machinery & Welfare Schemes',
              detail:
                'For an ordinary citizen, it is far easier to approach a local party leader than a distant government officer — hence parties must remain responsive or face defeat.',
            },
          ],
        },
      ],
    },
    {
      id: 'civ-04-visual',
      title: 'Pillar 2: Recognised National Parties & ECI Classification Table',
      blocks: [
        {
          type: 'table',
          caption: 'The 6 Recognised National Parties in India (Updated Rationalised NCERT Scope)',
          headers: ['Party & Symbol', 'Founded / Founder', 'Core Ideology & Key Strongholds'],
          rows: [
            [
              'Indian National Congress (INC) — Hand',
              '1885 (One of oldest globally)',
              'Centrist party; espouses secularism and welfare of weaker sections & minorities; led UPA (2004–2014).',
            ],
            [
              'Bharatiya Janata Party (BJP) — Lotus',
              '1980 (Revived Bharatiya Jana Sangh, 1951)',
              'Strong & modern India drawing from ancient culture, Cultural Nationalism (Hindutva), Integral Humanism & Antyodaya; uniform civil code, J&K integration; leads NDA.',
            ],
            [
              'Bahujan Samaj Party (BSP) — Elephant',
              '1984 (Kanshi Ram)',
              'Represents Bahujan Samaj (Dalits, Adivasis, OBCs & religious minorities); inspired by Sahu Maharaj, Phule, Periyar & Ambedkar; strong base in UP.',
            ],
            [
              'Communist Party of India – Marxist (CPI-M) — Hammer, Sickle & Star',
              '1964 (Split from CPI)',
              'Believes in Marxism-Leninism; supports socialism, secularism & democracy; opposes imperialism; critical of unchecked foreign capital/goods; strong in Kerala, West Bengal, Tripura.',
            ],
            [
              'Aam Aadmi Party (AAP) — Broom',
              '2012 (After 2011 anti-corruption movement)',
              'Accountability, clean governance, transparency & good governance; formed governments in Delhi & Punjab.',
            ],
            [
              'National People’s Party (NPP) — Book',
              '2013 (P.A. Sangma)',
              'First political party from North-East India to attain National Party status; core focus on education, empowerment & regional aspirations; major presence in Meghalaya.',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Memory Trick for ECI Recognition Percentages',
          body: 'Both formulas start with 6% votes! Just remember "6 + 2 for State" vs. "6 (in 4 states) + 4 LS seats for National". Recognised parties enjoy a unique, reserved election symbol nationwide/statewide.',
        },
      ],
    },
    {
      id: 'civ-04-matrix',
      title: 'Pillar 3: Party Systems, 4 Challenges & Enacted vs. Suggested Reforms',
      blocks: [
        {
          type: 'table',
          caption: 'Comparison of Party Systems Around the World',
          headers: ['Party System', 'Examples', 'Key Verdict (Democratic Quality)'],
          rows: [
            [
              'One-Party System',
              'China (Communist Party)',
              'NOT a democratic option — voters have no fair chance for at least two parties to compete for power.',
            ],
            [
              'Two-Party System',
              'USA, UK',
              'Power usually changes between two main parties; other parties exist and win a few seats, but only two have a serious chance of forming government.',
            ],
            [
              'Multi-Party System & Alliance / Front',
              'India (NDA, UPA / I.N.D.I.A.)',
              'Several parties compete and join hands as an Alliance/Front to govern. Appears messy and unstable at times, yet allows diverse interests and opinions to enjoy political representation.',
            ],
          ],
        },
        {
          type: 'table',
          caption: '4 Challenges to Political Parties vs. Reforms (Enacted vs. Suggested)',
          headers: ['4 Major Challenges', '3 Enacted Legal Reforms (Already Done)', 'Suggested Reforms (Not Yet Enacted)'],
          rows: [
            [
              '1. Lack of Internal Democracy: Power concentrated in 1 or few top leaders; no membership registers, organisational meetings, or internal polls.\n2. Dynastic Succession: Unfair advantage to family members; bad for democracy.\n3. Growing Role of Money & Muscle Power: Rich candidates/companies & criminals nominated to win.\n4. No Meaningful Choice: Ideological differences across parties have narrowed.',
              '1. Anti-Defection Law (Constitutional Amendment): Any MLA/MP who changes party loses their seat in the legislature.\n2. Supreme Court Mandatory Affidavit: Every candidate must file an affidavit detailing property & pending criminal cases.\n3. Election Commission Order: Parties must hold organisational elections and file Income Tax Returns.',
              '• Law to regulate internal affairs of parties (registers, constitution, open internal polls).\n• Mandatory 1/3rd party tickets for women & women quota in decision bodies.\n• State Funding of Elections (money/petrol/paper based on last votes).\n• Citizen pressure (petitions, media, joining parties!).',
            ],
          ],
        },
      ],
    },
    {
      id: 'civ-04-case-traps',
      title: 'Pillar 4: 4-Mark Case Extract & Examiner Trap Checkpoints',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Sanya',
          title: 'Trap: Confusing "Enacted Reforms" with "Suggested Reforms" & Outdated National Parties',
          wrongWork:
            'State funding of elections and mandatory 1/3rd party-ticket quotas for women have already been enacted by the Election Commission.',
          teacherFix:
            'State funding and party-ticket quotas are SUGGESTED reforms (not yet enacted into law). Already ENACTED reforms are ONLY: (1) Anti-Defection Law, (2) SC Affidavit on property/criminal cases, and (3) EC Order on internal polls & Income Tax Returns.',
          whyWrong:
            'CBSE Board papers explicitly ask to separate "efforts made so far" from "suggestions to reform political parties".',
        },
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the extract and answer the questions:\n"No system is ideal for all countries and all situations. Party system is not something any country can choose. It evolves over a long time, depending on the nature of society, its social and regional divisions, its history of politics and its system of elections. These cannot be changed very quickly. Each country develops a party system that is conditioned by its special circumstances. For example, if India has evolved a multi-party system, it is because the social and geographical diversity in such a large country is not easily absorbed by two or even three parties."\n\n(a) Can a country arbitrarily pick its party system? Why or why not? [1M]\n(b) Name any three factors on which a country’s party system depends. [1M]\n(c) Why has India evolved a multi-party system instead of a two-party system? [2M]',
          answer:
            '(a) No, a country cannot freely choose its party system because it evolves gradually over time and cannot be changed abruptly.\n(b) Nature of society, its social and regional divisions, its history of politics, and its system of elections (any three).\n(c) India’s vast social, linguistic, cultural, and geographical diversity across 140+ crore citizens cannot be absorbed or fairly represented by just two or three parties; a multi-party system (with coalition alliances) enables varied regional and social interests to find political representation.',
          markingTip: 'Underline *"social and geographical diversity"* and *"not easily absorbed by two or three parties"* for full marks.',
        },
        {
          type: 'checkpoint',
          prompt:
            'To be recognised as a NATIONAL PARTY by the Election Commission of India, a party must satisfy which rule?',
          options: [
            { id: 'a', label: 'At least 6% votes in one State Assembly election AND 2 seats' },
            {
              id: 'b',
              label:
                'At least 6% of total votes in Lok Sabha elections OR Assembly elections in 4 States AND wins at least 4 seats in the Lok Sabha',
            },
            { id: 'c', label: 'At least 10% votes across any 2 States AND 1 Rajya Sabha seat' },
            { id: 'd', label: 'At least 2% seats in every State Legislative Assembly' },
          ],
          correctIds: ['b'],
          successMsg: 'Correct! 6% votes (Lok Sabha or 4 State Assemblies) + 4 Lok Sabha seats = National Party.',
          hintMsg: '6% + 2 = State Party; 6% (across 4 States) + 4 LS seats = National Party.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Which is the FIRST political party from North-East India to earn National Party status?',
          options: [
            { id: 'a', label: 'Aam Aadmi Party (AAP)' },
            { id: 'b', label: 'Bahujan Samaj Party (BSP)' },
            { id: 'c', label: 'National People’s Party (NPP)' },
            { id: 'd', label: 'Communist Party of India – Marxist (CPI-M)' },
          ],
          correctIds: ['c'],
          successMsg: 'Correct! NPP, founded in 2013 by P.A. Sangma with symbol "Book", is the first National Party from North-East India.',
          hintMsg: 'Its election symbol is a Book and it has a strong base in Meghalaya.',
        },
      ],
    },
    {
      id: 'civ-04-qa',
      title: 'Pillar 5: CBSE Sub-Headed Q&As (2M, 3M & 5M)',
      blocks: [
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Why do modern democracies cannot exist without political parties? Explain by describing the situation without political parties.',
          answer:
            'We can understand the necessity of political parties by imagining a democracy without them:\n• **1. No Major Policy Promises:** Every candidate in elections will be independent, so no one will be able to make credible promises to people about major national policy changes.\n• **2. Uncertain Government Utility:** A government may be formed, but its utility and stability will remain ever uncertain.\n• **3. Zero National Accountability:** Elected representatives will be accountable only to their individual constituency for local work, and **no one will be responsible for how the entire country will be run**.\n• **4. Evidence from Non-Party Panchayat Polls:** Even in non-party panchayat elections, villages split into factions putting up "panels" of candidates — exactly what parties do.\n• **5. Representative Democracy Needs Aggregation:** Large societies need agencies to gather scattered views, present them to government, and form a responsible government or opposition.',
          markingTip: 'All 5 NCERT points flow directly from the "Necessity" section — a textbook 5-mark board question.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Explain the four major challenges faced by political parties in India and across the world.',
          answer:
            'To remain effective instruments of democracy, political parties must overcome four core challenges:\n• **1. Lack of Internal Democracy:** Power tends to concentrate in one or a few leaders at the top. Parties do not keep membership registers, do not hold organisational meetings, and do not conduct regular internal elections — so personal loyalty to the leader matters more than loyalty to party principles.\n• **2. Dynastic Succession:** Because procedures are opaque, ordinary workers find it hard to rise to the top; top positions are frequently controlled by members of one family, which is unfair to other members and bad for democracy.\n• **3. Growing Role of Money & Muscle Power:** Focused solely on winning, parties use shortcuts — nominating rich candidates who can raise funds, accepting influence from wealthy donors/companies, and sometimes supporting criminals who can win polls.\n• **4. Absence of Meaningful Choice:** Ideological differences among parties have declined globally (e.g., Labour vs. Conservative in Britain, or Indian parties on economic policies), leaving voters with few truly distinct policy alternatives and the same rotating leaders.',
          markingTip: 'Always pair each challenge heading with 1–2 lines of concrete NCERT explanation.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'Describe the three recent legal/institutional efforts made in India to reform political parties and their leaders.',
          answer:
            '• **1. Anti-Defection Law (Constitutional Amendment):** Prevents elected MLAs and MPs from changing parties after winning; if anyone defects, they lose their seat in the legislature (reducing defections while sometimes curbing internal dissent).\n• **2. Supreme Court Mandatory Affidavit:** Every candidate contesting elections must file an affidavit disclosing details of their **property and criminal cases pending** against them, increasing voter transparency.\n• **3. Election Commission Order:** The ECI passed an order making it mandatory for political parties to hold their **organisational elections** and file their **Income Tax Returns**.',
          markingTip: 'Be precise about who introduced each reform: Parliament (Anti-Defection), Supreme Court (Affidavit), Election Commission (Internal polls & ITR).',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'Define "Partisan" and "Defection" in the context of political parties.',
          answer:
            '• **Partisan:** A person who is strongly committed to a party, group, or faction; partisanship is marked by a tendency to take a side and inability to take a balanced view on an issue.\n• **Defection:** Changing party allegiance from the party on which a person got elected (to a legislative body) to a different party.',
          markingTip: 'Quote NCERT glossary wording cleanly.',
        },
      ],
    },
  ],
};
