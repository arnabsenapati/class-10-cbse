import { Subtopic } from '../../../types/curriculum';

export const sstCiv02: Subtopic = {
  id: 'sst-civ-02',
  slug: 'federalism',
  title: 'Ch 2: Federalism',
  subtitle:
    'Democratic Politics II | 7 Features of Federalism, Coming vs. Holding Together, 3 Legislative Lists, Language Policy & 1992 Decentralisation',
  estimatedMinutes: 35,
  difficulty: 'Core CBSE',
  ncertSection: 'Democratic Politics II — Chapter 2',
  learningObjectives: [
    'Contrast a Federal system with a Unitary system and state all seven key features of federalism.',
    'Differentiate "Coming Together" federations (USA, Switzerland, Australia) from "Holding Together" federations (India, Spain, Belgium).',
    'Classify subjects accurately across the Union List, State List, Concurrent List, and Residuary Subjects.',
    'Explain how Linguistic States, Language Policy (22 Scheduled Languages), and post-1990 Coalition Politics strengthened Indian federalism.',
    'List the five major constitutional steps enacted in 1992 to empower India’s third-tier Panchayati Raj and Municipalities.',
  ],
  keywords: [
    'Federalism',
    'Unitary system',
    'Coming Together',
    'Holding Together',
    'Union List',
    'State List',
    'Concurrent List',
    'Residuary Subjects',
    'Linguistic States',
    'Scheduled Languages',
    '22 languages',
    'Decentralisation 1992',
    'Gram Sabha',
    'Zilla Parishad',
    'Mayor',
  ],
  sections: [
    {
      id: 'civ-02-architecture',
      title: 'Pillar 1: Constitutional Architecture — 7 Features & Routes to Federalism',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Exam Glance',
          bullets: [
            'Federalism: A system of government in which power is divided between a central authority and various constituent units (states/provinces) of the country — typically two or more tiers.',
            'Unitary vs. Federal: Under a unitary system, either there is only one level of govt or sub-units are subordinate to the central govt (which can pass orders to them). In a federal system, the central govt CANNOT order the state govt to do something; each tier is separately answerable to the people.',
            'India’s Constitutional Wording: The Constitution did NOT originally use the word "Federation"; Article 1 declares India a "Union of States", yet it is based on federal principles.',
            'Language Policy Benchmark: Hindi is an Official Language (mother tongue of ~44% Indians), NOT a National Language; 21 other languages are recognised as Scheduled Languages (total 22 in the 8th Schedule). English continues alongside Hindi for official purposes.',
            '1992 Constitutional Amendments: Made local self-government (Rural Panchayati Raj + Urban Municipalities/Corporations) constitutionally mandatory, regular, inclusive (SC/ST/OBC + ≥1/3rd women), and financially backed.',
          ],
        },
        {
          type: 'steps',
          title: 'The 7 Key Features of Federalism (Must-Memorise 5-Mark List)',
          items: [
            {
              label: '1. Two or More Levels (Tiers)',
              detail: 'There are two or more tiers of government (Union, State, and in India, Local).',
            },
            {
              label: '2. Separate Jurisdictions Over Same Citizens',
              detail:
                'Different tiers govern the same citizens, but each tier has its own jurisdiction in specific matters of legislation, taxation, and administration.',
            },
            {
              label: '3. Constitutionally Guaranteed Authority',
              detail:
                'The jurisdictions, existence, and authority of each tier are constitutionally guaranteed and clearly specified in the Constitution.',
            },
            {
              label: '4. Mutual Consent for Fundamental Changes',
              detail:
                'Fundamental provisions of the Constitution cannot be unilaterally changed by one level; any change requires the consent of both levels of government.',
            },
            {
              label: '5. Courts as Umpire',
              detail:
                'Courts (Supreme Court in India) have the power to interpret the Constitution and settle disputes arising between different levels of government.',
            },
            {
              label: '6. Specified Revenue Sources',
              detail:
                'Sources of revenue for each level of government are clearly specified to ensure its financial autonomy.',
            },
            {
              label: '7. Dual Objectives',
              detail:
                'To safeguard and promote unity of the country, while at the same time accommodating regional diversity.',
            },
          ],
        },
      ],
    },
    {
      id: 'civ-02-visual',
      title: 'Pillar 2: Visual Institutional Structure — 4 Lists & 1992 3-Tier Pyramid',
      blocks: [
        {
          type: 'visual-diagram',
          diagramId: 'india-federal-lists-and-tiers',
          title: 'India’s Legislative Distribution (Union, State, Concurrent, Residuary) & 1992 Decentralisation Tiers',
          caption:
            'Section A MCQs love testing individual subjects (e.g., Computer Software → Residuary; Education/Forest → Concurrent; Police/Agriculture → State; Banking/Communications → Union).',
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'Special Status & Union Territories (Updated NCERT Scope)',
          body: 'Not all constituent units in a "Holding Together" federation hold identical powers:',
          bullets: [
            'Special Provisions (Art. 371): Some states such as Assam, Nagaland, Arunachal Pradesh, and Mizoram enjoy special powers under Article 371 due to peculiar social and historical circumstances (protecting indigenous land rights, culture, and preferential govt employment; non-residents cannot buy land/houses there).',
            'Union Territories (UTs): Units too small to become independent states or unsuitable for merger (e.g., Chandigarh, Lakshadweep, Delhi) do not have the full powers of a State; the Central Government has special powers in running these areas.',
            'Amendment Rule in India: Parliament alone CANNOT alter the sharing of power between Union and States — it requires a 2/3rd majority in both Houses of Parliament PLUS ratification by legislatures of at least HALF of the total States.',
          ],
        },
      ],
    },
    {
      id: 'civ-02-matrix',
      title: 'Pillar 3: Comparative Matrices & Practice of Indian Federalism',
      blocks: [
        {
          type: 'table',
          caption: 'Two Routes to Federalism: "Coming Together" vs. "Holding Together"',
          headers: ['Criterion', 'Coming Together Federation', 'Holding Together Federation'],
          rows: [
            [
              'How Formed',
              'Independent states come together on their own to form a bigger unit',
              'A large country decides to divide its power between constituent states and the national govt',
            ],
            [
              'Core Aim',
              'Pool sovereignty and retain identity to increase collective security',
              'Accommodate internal social/regional diversity and preserve unity',
            ],
            [
              'Power Balance',
              'All constituent states usually have EQUAL power and are strong vis-à-vis the federal govt',
              'Central government tends to be MORE powerful vis-à-vis the states; units often have unequal powers (some get special status)',
            ],
            [
              'Classic NCERT Examples',
              'USA, Switzerland, Australia',
              'India, Spain, Belgium',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Three Tests That Made Indian Federalism Succeed (Practice Over Paper)',
          headers: ['Test of Federalism', 'Initial Fear (1947–1960s)', 'What Actually Happened & Why It Worked'],
          rows: [
            [
              '1. Linguistic States',
              'Leaders feared creating states on language lines would lead to disintegration of India',
              'Creation of linguistic states (e.g., Andhra, Maharashtra, Gujarat) actually made India more united and made administration easier. Later, some states were also carved for culture, ethnicity, or geography (Nagaland, Uttarakhand, Jharkhand).',
            ],
            [
              '2. Language Policy',
              'Non-Hindi southern states (especially Tamil Nadu) opposed making Hindi compulsory after 1965',
              'India gave NO language the status of "National Language". Hindi + 21 others = 22 Scheduled Languages; candidates in Central govt exams can opt for any of them. Use of English continued alongside Hindi — flexible approach avoided Sri Lanka-style conflict.',
            ],
            [
              '3. Centre–State Relations',
              'Pre-1990: Single-party rule at Centre & States led Centre to misuse Article 356 to dismiss rival state govts',
              'Post-1990: Rise of regional political parties began the era of Coalition Governments at the Centre, supported by a landmark Supreme Court judgement making arbitrary dismissal of state govts difficult.',
            ],
          ],
        },
      ],
    },
    {
      id: 'civ-02-case-traps',
      title: 'Pillar 4: 4-Mark Case Extract & Examiner Trap Checkpoints',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Meera',
          title: 'Trap: Calling Hindi India’s "National Language" or Confusing Concurrent vs. Residuary',
          wrongWork:
            '1) Hindi is India’s national language under the 8th Schedule. 2) Education is in the State List.',
          teacherFix:
            '1) The Constitution did NOT declare any "National Language"; Hindi is an Official Language, alongside 21 other Scheduled Languages (22 total). 2) Education & Forests are in the CONCURRENT LIST (shifted from State List); Computer Software is a RESIDUARY subject.',
          whyWrong:
            'These are the two highest-frequency Section A MCQ & Assertion–Reason traps in Civics Ch 2.',
        },
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the extract and answer the questions:\n"When power is taken away from Central and State governments and given to local government, it is called decentralisation. The basic idea behind decentralisation is that there are a large number of problems and issues which are best settled at the local level. People have better knowledge of problems in their localities and also have better ideas on where to spend money and how to manage things more efficiently. Besides, at the local level it is possible for the people to directly participate in decision making. This helps to inculcate a habit of democratic participation. A major step towards decentralisation was taken in 1992 when the Constitution was amended to make the third-tier of democracy more powerful and effective."\n\n(a) Define decentralisation as stated in the passage. [1M]\n(b) Why are local issues best settled at the local level? Give one reason. [1M]\n(c) State any two constitutional mandates introduced by the 1992 Amendments to make local bodies effective. [2M]',
          answer:
            '(a) Decentralisation means taking power away from Central and State governments and giving it to local government (third tier).\n(b) Local people possess better knowledge of local problems and better ideas on where to spend money and manage local affairs efficiently (plus it enables direct democratic participation).\n(c) Any two of the 1992 mandates: (i) It became constitutionally mandatory to hold regular elections to local government bodies; (ii) At least one-third of all positions are reserved for women (alongside SC/ST/OBC seat reservations); (iii) An independent State Election Commission was created in each state; (iv) State governments must share some powers and revenue with local bodies.',
          markingTip: 'In part (c), mention specific constitutional features (1/3rd women reservation, regular elections, State EC) rather than vague statements.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Which set of subjects belongs ENTIRELY to the Concurrent List of the Indian Constitution?',
          options: [
            { id: 'a', label: 'Defence, Banking, Currency, Foreign Affairs' },
            { id: 'b', label: 'Police, Agriculture, Irrigation, Trade' },
            { id: 'c', label: 'Education, Forest, Trade Unions, Marriage, Adoption and Succession' },
            { id: 'd', label: 'Computer Software, E-commerce, Cyber Security' },
          ],
          correctIds: ['c'],
          successMsg:
            'Exact NCERT match! Remember: Education, Forest, Trade Unions, Marriage, Adoption & Succession sit in the Concurrent List (both Union & States legislate; Union law prevails on conflict).',
          hintMsg: 'Choice A = Union List; Choice B = State List; Choice D = Residuary Subjects.',
        },
        {
          type: 'checkpoint',
          prompt:
            'A constitutional amendment redistributing power between the Union and State governments in India requires:',
          options: [
            { id: 'a', label: 'A simple majority of Lok Sabha alone' },
            { id: 'b', label: 'An executive order from the Prime Minister and Cabinet' },
            { id: 'c', label: 'At least two-thirds majority in both Houses of Parliament PLUS ratification by at least half the State legislatures' },
            { id: 'd', label: 'Approval of all 22 Scheduled Language commissions' },
          ],
          correctIds: ['c'],
          successMsg: 'Correct! Mutual consent of Centre and at least 50% of States protects India’s federal compact.',
          hintMsg: 'Recall Feature #4 of Federalism: fundamental provisions cannot be unilaterally altered by one tier.',
        },
      ],
    },
    {
      id: 'civ-02-qa',
      title: 'Pillar 5: CBSE Sub-Headed Q&As (2M, 3M & 5M)',
      blocks: [
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'Distinguish between a Unitary system of government and a Federal system of government with three clear points.',
          answer:
            '• **1. Levels of Government:** In a unitary system, there is either only one level of government or sub-units are subordinate to the central government. In a federal system, there are two or more tiers, none subordinate to the other.\n• **2. Power to Issue Orders:** In a unitary system, the central government can pass binding orders to provincial or local governments. In a federal system, the central government cannot order the state government to do something.\n• **3. Constitutional Autonomy & Accountability:** In a federal system, state governments enjoy powers of their own guaranteed by the Constitution and are separately answerable to the people (e.g., India, USA), unlike unitary states (e.g., UK, Sri Lanka).',
          markingTip: 'Present in clean bullet points or a 2-column table; emphasise *"central govt cannot order state govt"*.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Why did India need decentralisation? Explain the five major constitutional steps taken in 1992 to strengthen the third tier of democracy.',
          answer:
            'India is a vast country with states as large as European nations and intense internal diversity, so local problems are best settled locally through direct citizen participation. To empower local self-governments, the **1992 Constitutional Amendment** mandated five steps:\n• **1. Mandatory Regular Elections:** It became constitutionally mandatory to hold regular elections to local government bodies every five years.\n• **2. Reservation for Marginalised Sections:** Seats are reserved in elected bodies and executive heads for Scheduled Castes (SCs), Scheduled Tribes (STs), and Other Backward Classes (OBCs).\n• **3. One-Third Women’s Reservation:** At least **one-third (33%)** of all positions are reserved for women — leading to over 10 lakh elected women representatives.\n• **4. Independent State Election Commission (SEC):** An independent institution called the State Election Commission was created in each state to conduct panchayat and municipal elections.\n• **5. Mandatory Revenue & Power Sharing:** State governments are required to share some powers and revenue with local government bodies (nature of sharing varies across states).',
          markingTip: 'All five 1992 steps are standard CBSE marking-scheme rubrics for 5 marks.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            '"India’s success in federalism owes more to democratic politics than just constitutional text." Justify this statement with reference to Linguistic States, Language Policy, and Centre–State Relations.',
          answer:
            'While the Constitution laid down the three-fold legislative lists, the real success of Indian federalism came from flexible democratic practices:\n• **1. Creation of Linguistic States:** Despite early fears of disintegration, reorganising states so people speaking the same language lived together (and later states for culture/ethnicity/geography like Nagaland, Uttarakhand, Jharkhand) strengthened national unity and simplified administration.\n• **2. Accommodationist Language Policy:** Our Constitution did not declare any National Language. Hindi was identified as an Official Language alongside **21 other Scheduled Languages (22 total)**; central exam candidates may choose any Scheduled Language, and English was flexibly retained after 1965 — avoiding Sri Lanka-like alienation.\n• **3. Pre-1990 vs. Post-1990 Centre–State Relations:** Earlier, one-party rule allowed the Centre to frequently dismiss state governments run by rival parties. After 1990, the rise of regional parties inaugurated **Coalition Governments** at the Centre, supported by a Supreme Court judgement making arbitrary dismissal of state governments difficult, ushering in a true culture of power-sharing.',
          markingTip: 'Mention **22 Scheduled Languages**, **non-imposition of Hindi**, and **post-1990 Coalition Era** explicitly.',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'State the composition and role of the Gram Sabha in rural local government.',
          answer:
            '• **Composition:** Every Gram Panchayat works under the overall supervision of the **Gram Sabha**, whose members are **all the voters in the village**.\n• **Role:** It meets at least **twice or thrice a year** to approve the annual budget of the Gram Panchayat and to review the performance of the Gram Panchayat.',
          markingTip: 'Clearly distinguish Gram Sabha (all village voters) from Gram Panchayat (elected Ward Panchs + Sarpanch).',
        },
      ],
    },
  ],
};
