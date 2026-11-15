import { Subtopic } from '../../../types/curriculum';

export const sstCiv03: Subtopic = {
  id: 'sst-civ-03',
  slug: 'gender-religion-and-caste',
  title: 'Ch 3: Gender, Religion, and Caste',
  subtitle:
    'Democratic Politics II | Sexual Division of Labour, 5 Pillars of Indian Secularism, 4 Forms of Communalism & Caste–Politics Two-Way Street',
  estimatedMinutes: 35,
  difficulty: 'Core CBSE',
  ncertSection: 'Democratic Politics II — Chapter 3',
  learningObjectives: [
    'Define the sexual division of labour and cite key indicators of gender inequality in India (literacy, unpaid work, wage gap, child sex ratio, parliamentary representation).',
    'Explain the Nari Shakti Vandan Adhiniyam (Women’s Reservation Act, 2023) and the 1/3rd local-body reservation.',
    'Identify the four forms communalism can take in politics and explain the five constitutional provisions that make India a Secular State.',
    'Compare "Caste in Politics" with "Politics in Caste" and prove with four reasons why Indian elections are never merely about caste.',
  ],
  keywords: [
    'Sexual division of labour',
    'Feminist movements',
    'Equal Remuneration Act 1976',
    'Nari Shakti Vandan Adhiniyam',
    'Child sex ratio',
    'Communalism',
    'Secular state',
    'Caste in politics',
    'Politics in caste',
    'Urbanisation',
    'Occupational mobility',
  ],
  sections: [
    {
      id: 'civ-03-architecture',
      title: 'Pillar 1: Constitutional & Social Architecture — Gender, Religion & Caste',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Exam Glance',
          bullets: [
            'Gender (Social, Not Biological): "Sexual division of labour" assigns all housework to women and outside paid work to men, making women’s domestic work unpaid and invisible.',
            'Gender Gap Facts (NCERT): Literacy — 54% women vs. 76% men; Equal Remuneration Act (1976) mandates equal wages for equal work, yet women are paid less in sports, cinema, factories & farms; Child Sex Ratio fell to 919 girls per 1,000 boys (below 850/800 in some states) due to sex-selective abortion.',
            'Political Representation: Local bodies (Panchayats/Municipalities) reserve 1/3rd seats for women; in 2023 Parliament passed the Nari Shakti Vandan Adhiniyam (Women’s Reservation Act) reserving 33% seats for women in Lok Sabha, State Assemblies & Delhi Assembly.',
            'Religion & Secularism: Gandhiji said "religion can never be separated from politics" meaning moral values from all religions should guide politics (NOT sectarian communalism). India has NO official religion and guarantees freedom to profess, practise, propagate—or not follow—any religion.',
            'Caste Decline & Persistence: Economic development, large-scale urbanisation, literacy/education, occupational mobility, and weakening landlord power are eroding old caste hierarchies — yet endogamy (marrying within caste) and historical resource disparities persist.',
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: '5 Constitutional Provisions Making India a Secular State (Guaranteed 5-Marker)',
          body: 'Secularism in India is not merely a party ideology — it is one of the foundations of our country enshrined in the Constitution:',
          bullets: [
            '1. No Official Religion: Unlike Buddhism in Sri Lanka, Islam in Pakistan, or Christianity in England, our Constitution gives NO special status to any religion.',
            '2. Freedom of Religion (Art. 25–28): Every individual and community has the freedom to profess, practise, and propagate any religion, or not to follow any.',
            '3. Prohibition of Religious Discrimination: The Constitution prohibits discrimination on grounds of religion.',
            '4. State Intervention for Equality: The Constitution allows the State to intervene in religious matters in order to ensure equality within religious communities (e.g., banning untouchability).',
            '5. Equal Rights Across Communities: Communalism is treated as a threat to the very idea of India and must be countered at everyday, ideological, and institutional levels.',
          ],
        },
      ],
    },
    {
      id: 'civ-03-visual',
      title: 'Pillar 2: Institutional & Cartoon Lens — Representation, Communalism & Caste',
      blocks: [
        {
          type: 'steps',
          title: 'The 4 Forms of Communalism in Politics (Ladder from Mild to Extreme)',
          items: [
            {
              label: '1. Everyday Beliefs & Stereotypes (Most Common)',
              detail:
                'Routine religious prejudices, stereotypes of religious communities, and belief in the superiority of one’s own religion over others — often unnoticed because they seem ordinary.',
            },
            {
              label: '2. Quest for Political Dominance',
              detail:
                'For a majority community, this takes the form of majoritarian dominance; for a minority community, it can take the form of a desire to form a separate political unit.',
            },
            {
              label: '3. Political Mobilisation on Religious Lines',
              detail:
                'Use of sacred symbols, religious leaders, emotional appeals, and plain fear in order to bring followers of one religion together in the political arena during elections.',
            },
            {
              label: '4. Communal Violence, Riots & Massacre (Ugliest Form)',
              detail:
                'Communalism culminates in violent clashes and riots — seen historically during the 1947 Partition and post-Independence communal riots.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'NCERT Cartoon Cue: Women’s Reservation & Caste Vote-Bank Cartoons',
          body: '1) The cartoon of male politicians blocking Parliament’s Women’s Reservation doorway highlights why voluntary party promises failed for decades until the 2023 Nari Shakti Vandan Adhiniyam. 2) The cartoon showing a politician offering caste-labelled buckets to voters illustrates how parties appeal to caste — while voters still compare performance, leaders, and parties.',
        },
      ],
    },
    {
      id: 'civ-03-matrix',
      title: 'Pillar 3: Comparative Matrix — "Caste in Politics" vs. "Politics in Caste"',
      blocks: [
        {
          type: 'table',
          caption: 'The Two-Way Relationship Between Caste and Politics (High-Frequency 5-Mark Distinction)',
          headers: ['Dimension', 'Caste in Politics (How Caste Shapes Elections)', 'Politics in Caste (How Politics Reshapes Caste)'],
          rows: [
            [
              'Core Idea',
              'Casteism believes caste is the sole basis of social community and parties try to harness caste loyalties',
              'Not only does caste influence politics; politics also politicises caste by bringing caste identities into the political arena',
            ],
            [
              'How It Works (3–4 Key Forms)',
              '1. Parties choose candidates matching a constituency’s caste composition.\n2. Governments ensure representatives of various castes/tribes find berths in cabinets.\n3. Parties & candidates appeal to caste sentiment to muster support.\n4. Universal Adult Franchise forced leaders to mobilise castes once treated as "inferior".',
              '1. Each caste group tries to become bigger by absorbing neighbouring sub-castes earlier excluded.\n2. Various caste groups enter coalitions & dialogue with other castes/communities.\n3. New kinds of caste groups have emerged: "Backward" and "Forward" caste groups.',
            ],
            [
              'Positive vs. Negative Effect',
              'Elections are NOT only about caste (no single-caste majority constituency; voters evaluate leader & govt performance)',
              'Positive: Gives disadvantaged Dalits & OBCs space to demand power, dignity & land/education access.\nNegative: Can divert attention from poverty/development/corruption and trigger tension or violence.',
            ],
          ],
        },
        {
          type: 'key-points',
          title: '4 Proof Points: Why Indian Elections Are NOT Only About Caste',
          items: [
            '1. No Single-Caste Majority: No parliamentary constituency in India has a clear majority of one single caste — every candidate must win support from multiple castes and communities.',
            '2. No Party Wins All Votes of One Caste: When people call a caste a "vote bank", it usually means a large proportion — never 100% — votes for one party.',
            '3. Multiple Candidates from Same Caste: Many parties field candidates from the same caste if it dominates a constituency, splitting votes — while some voters find no candidate of their caste.',
            '4. Incumbents Lose Frequently: Ruling parties and sitting MPs/MLAs regularly lose elections even in seats with stable caste demographics, proving performance, party attachment, and economic status matter more.',
          ],
        },
      ],
    },
    {
      id: 'civ-03-case-traps',
      title: 'Pillar 4: 4-Mark Case Extract & Examiner Trap Checkpoints',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Kabir',
          title: 'Trap: Misreading Gandhiji’s Quote & Confusing "Caste in Politics" with "Politics in Caste"',
          wrongWork:
            'Gandhiji wanted India to be a communal religious state because he said religion can never be separated from politics.',
          teacherFix:
            'By "religion", Gandhiji did NOT mean any particular sect like Hinduism or Islam, but MORAL VALUES that inform all religions — believing politics must be guided by ethics drawn from religion.',
          whyWrong:
            'NCERT explicitly cites Gandhiji alongside Human Rights Groups and the Women’s Movement to contrast ethical moral politics against communalism.',
        },
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the extract and answer the questions:\n"In India, the proportion of women in legislature has been very low. For example, the percentage of elected women members in Lok Sabha touched 14.36 per cent of its total strength for the first time in 2019. Their share in the state assemblies is less than 5 per cent. In this respect, India is among the bottom group of nations in the world. One way to solve this problem is to make it legally binding to have a fair proportion of women in the elected bodies. This is what the Panchayati Raj has done in India. One-third of seats in local government bodies — in panchayats and municipalities — are now reserved for women. In 2023, Nari Shakti Vandan Adhiniyam (Womens’ Reservation Act, 2023) has been passed which will give 33 percent reservation of seats for women in Lok Sabha, State Legislative Assemblies and also Delhi Assembly."\n\n(a) What was the share of women in India’s State Legislative Assemblies mentioned in the extract? [1M]\n(b) How did Panchayati Raj address women’s under-representation earlier? [1M]\n(c) Explain the significance of the Nari Shakti Vandan Adhiniyam (2023) for Indian democracy. [2M]',
          answer:
            '(a) Less than 5 per cent in State Assemblies (compared to reaching 14.36% in the 2019 Lok Sabha).\n(b) One-third of all seats in rural panchayats and urban municipalities were legally reserved for women, resulting in over 10 lakh elected women representatives.\n(c) The 2023 Act extends a legally binding 33% seat reservation for women to the Lok Sabha, State Legislative Assemblies, and the Delhi Assembly, ensuring women’s issues receive sustained parliamentary attention and moving India closer to fair gender representation.',
          markingTip: 'Notice how the latest NCERT edition includes the **2023 Women’s Reservation Act** — always cite it alongside the 1992 local-body quota.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Which statement best illustrates "Politics in Caste" (politics influencing caste) rather than "Caste in Politics"?',
          options: [
            { id: 'a', label: 'A party gives election tickets matching the dominant caste of a constituency' },
            { id: 'b', label: 'A caste group expands by incorporating neighbouring sub-castes and forms coalitions to gain political bargaining power' },
            { id: 'c', label: 'Sitting MPs lose elections due to anti-incumbency despite stable caste demographics' },
            { id: 'd', label: 'The Equal Remuneration Act mandates equal wages for men and women' },
          ],
          correctIds: ['b'],
          successMsg:
            'Correct! When sub-castes merge into wider blocs or form "Backward/Forward" labels for political leverage, politics is reshaping caste itself.',
          hintMsg: 'Ask: is caste shaping candidate choice (Caste → Politics), or is political competition reorganising caste identities (Politics → Caste)?',
        },
        {
          type: 'checkpoint',
          prompt:
            'Which of the following statements about India’s Secular Constitution is INCORRECT?',
          options: [
            { id: 'a', label: 'India has no official state religion' },
            { id: 'b', label: 'The Constitution gives citizens freedom to follow any religion or no religion' },
            { id: 'c', label: 'The State is completely barred from intervening in religious practices even to abolish untouchability' },
            { id: 'd', label: 'Discrimination on grounds of religion is constitutionally prohibited' },
          ],
          correctIds: ['c'],
          successMsg:
            'Right! Indian secularism explicitly allows the State to intervene in religious matters to ensure equality within communities (e.g., banning untouchability).',
          hintMsg: 'Check the 4th provision of Indian secularism: Indian secularism is positive/reformist, not passive isolation.',
        },
      ],
    },
    {
      id: 'civ-03-qa',
      title: 'Pillar 5: CBSE Sub-Headed Q&As (2M, 3M & 5M)',
      blocks: [
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Mention different aspects of life in which women are discriminated against or disadvantaged in India.',
          answer:
            'Despite constitutional equality, India remains largely a patriarchal (male-dominated) society where women face disadvantage in five key spheres:\n• **1. Literacy & Education:** Literacy rate among women is ~54% compared to ~76% among men; fewer girls pursue higher studies because families prioritise sons’ education.\n• **2. Unpaid Work & Under-Valuation:** Women work an hour more per day than men on average, yet most household work is unpaid and undervalued; their presence in high-paid prestigious jobs remains small.\n• **3. Wage Disparity:** Even though the **Equal Remuneration Act, 1976** mandates equal wages for equal work, women are paid less than men across agriculture, factories, sports, and cinema.\n• **4. Skewed Child Sex Ratio:** Preference for sons has caused sex-selective abortions, pulling India’s child sex ratio down to 919 girls per 1,000 boys (below 850/800 in some states).\n• **5. Safety & Political Representation:** Women face domestic violence, harassment, and low legislative representation (below 5% in state assemblies), prompting the 1/3rd local quota and the 2023 Women’s Reservation Act.',
          markingTip: 'Organise under 5 crisp sub-headings with NCERT data (**54% vs 76%**, **1976 Act**, **919/1000**).',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'What are the constitutional provisions that make India a secular state? Explain any five.',
          answer:
            'The makers of the Indian Constitution chose the model of a secular state through clear constitutional safeguards:\n• **1. No Official Religion:** India has no official state religion — unlike Buddhism in Sri Lanka, Islam in Pakistan, or Christianity in England.\n• **2. Freedom of Conscience & Religion:** The Constitution provides all individuals and communities the freedom to profess, practise, and propagate any religion, or not to follow any.\n• **3. Prohibition of Discrimination:** The Constitution strictly prohibits discrimination on the grounds of religion.\n• **4. State Intervention for Social Equality:** The Constitution allows the State to intervene in religious matters to ensure equality within religious communities — for example, banning untouchability.\n• **5. Equal Citizenship:** Every citizen enjoys equal rights regardless of religious affiliation, ensuring communalism threatens not just minorities but the very idea of India.',
          markingTip: 'All 4 core constitutional points + equal citizenship make an ironclad 5-mark answer.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'Why have caste barriers and hierarchies been breaking down in modern India? Give any three factors.',
          answer:
            '• **1. Socio-Economic Changes & Urbanisation:** Large-scale urbanisation shifts people into anonymous city neighbourhoods and workplaces where old caste taboos on dining or interaction fade.\n• **2. Literacy, Education & Occupational Mobility:** Growth of education enables people to shift from hereditary occupations to diverse modern professions.\n• **3. Constitutional Ban & Social Reformers:** Reformers (Jotiba Phule, Gandhiji, Dr. B.R. Ambedkar, Periyar) fought caste inequalities, and the Constitution banned untouchability and guaranteed equal rights.',
          markingTip: 'Highlight **occupational mobility**, **urbanisation**, and **weakening of landlords’ position in villages**.',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'Distinguish between "Feminist" and "Patriarchal" as used in Democratic Politics.',
          answer:
            '• **Feminist:** A woman or a man who believes in equal rights and opportunities for women and men.\n• **Patriarchy:** Literally "rule by father"; a system that values men more and gives them power over women.',
          markingTip: 'Notice that a feminist can be **a woman OR a man** — a favourite 1-mark MCQ point.',
        },
      ],
    },
  ],
};
