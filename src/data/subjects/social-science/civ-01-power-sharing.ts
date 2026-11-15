import { Subtopic } from '../../../types/curriculum';

export const sstCiv01: Subtopic = {
  id: 'sst-civ-01',
  slug: 'power-sharing',
  title: 'Ch 1: Power-sharing',
  subtitle:
    'Democratic Politics II | Belgium’s accommodation vs. Sri Lanka’s 1956 majoritarianism, Prudential vs. Moral reasons & 4 Forms of Power-sharing',
  estimatedMinutes: 30,
  difficulty: 'Core CBSE',
  ncertSection: 'Democratic Politics II — Chapter 1',
  learningObjectives: [
    'Compare the ethnic compositions of Belgium (Flemish, Wallonia, Brussels) and Sri Lanka (Sinhala, Sri Lankan Tamils, Indian Tamils).',
    'Explain how the 1956 Sinhala Only Act caused alienation and civil war in Sri Lanka, whereas Belgium’s four amendments (1970–1993) preserved unity.',
    'Distinguish between Prudential (outcome-based) and Moral (spirit-of-democracy) reasons for power-sharing.',
    'Illustrate all four modern forms of power-sharing: Horizontal, Vertical, Social Groups, and Political Parties/Pressure Groups.',
  ],
  keywords: [
    'Power-sharing',
    'Belgium',
    'Brussels',
    'Sri Lanka',
    'Majoritarianism',
    'Sinhala Only Act 1956',
    'Community Government',
    'Prudential vs Moral',
    'Checks and Balances',
    'Horizontal Power-sharing',
    'Khalil dilemma',
  ],
  sections: [
    {
      id: 'civ-01-architecture',
      title: 'Pillar 1: Constitutional Architecture & Ethnic Composition',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Exam Glance',
          bullets: [
            'Belgium (Population ~1 crore+): 59% live in Flemish region & speak Dutch; 40% live in Wallonia & speak French; 1% speak German. Capital Brussels reverses the national ratio: 80% French-speaking vs. 20% Dutch-speaking.',
            'Sri Lanka (Island nation): 74% Sinhala-speakers (mostly Buddhists); 18% Tamil-speakers (13% Sri Lankan Tamils concentrated in North & East + 5% Indian Tamils brought as plantation workers); ~7% Christians (both Tamil & Sinhala).',
            'Sri Lankan Majoritarianism (1956 Act): Declared Sinhala the sole official language, gave preferential govt jobs/university seats to Sinhalas, and fostered Buddhism — sparking Tamil alienation, demand for Tamil Eelam, and civil war (ended 2009).',
            'Belgian Accommodation (4 Amendments, 1970–1993): Equal Dutch & French ministers at Centre, non-subordinate State Govts, equal-representation Brussels Govt, plus a 3rd kind of "Community Government" elected by each language community.',
            'Result: Brussels was chosen as the headquarters of the European Union (EU) thanks to Belgium’s peaceful power-sharing model.',
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'Crucial NCERT Terms to Quote Verbatim',
          body: 'CBSE examiners reward exact NCERT terminology when contrasting Sri Lanka and Belgium:',
          bullets: [
            'Ethnic: A social division based on shared culture; people belonging to the same ethnic group believe in their common descent because of similarities of physical type or culture (need not have the same religion or nationality).',
            'Majoritarianism: A belief that the majority community should be able to rule a country in whichever way it wants, by disregarding the wishes and needs of the minority.',
            'Civil War: A violent conflict between opposing groups within a country that becomes so intense that it appears like a war.',
            'Community Government (Belgium): Elected by people belonging to one language community — Dutch, French, and German-speaking — no matter where they live; has power over cultural, educational, and language-related issues.',
          ],
        },
      ],
    },
    {
      id: 'civ-01-visual',
      title: 'Pillar 2: Visual Institutional Model — 4 Forms of Power-Sharing',
      blocks: [
        {
          type: 'visual-diagram',
          diagramId: 'power-sharing-horizontal-vertical',
          title: 'Horizontal (Checks & Balances), Vertical (Federal), Social Groups & Coalition Power-Sharing',
          caption:
            'Memorise all 4 boxes: CBSE regularly asks 5-mark questions on "Explain the four forms of power-sharing in modern democracies with examples."',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'NCERT Cartoon Cue (German Grand Coalition)',
          body: 'The NCERT cartoon of a Volkswagen car with TWO steering wheels held by rival drivers represents Germany’s 2005 Grand Coalition (CDU + SPD). It proves that power-sharing between ideologically different parties can slow quick turns, yet prevents political paralysis and upholds democratic mandate.',
        },
      ],
    },
    {
      id: 'civ-01-matrix',
      title: 'Pillar 3: Comparative Matrices (Belgium vs. Sri Lanka & Prudential vs. Moral)',
      blocks: [
        {
          type: 'table',
          caption: 'Belgium vs. Sri Lanka — Head-to-Head 5-Mark Comparison',
          headers: ['Feature', 'Belgium (Accommodation Model)', 'Sri Lanka (Majoritarian Model)'],
          rows: [
            [
              'Ethnic Split',
              '59% Dutch (Flemish), 40% French (Wallonia), 1% German; Brussels: 80% French, 20% Dutch',
              '74% Sinhala (mostly Buddhist), 18% Tamils (13% Sri Lankan, 5% Indian), 7% Christians',
            ],
            [
              'Key Policy / Law',
              'Constitutional amended 4 times (1970–1993) to craft power-sharing rules',
              '1956 Act made Sinhala only official language + state preference in universities & govt jobs',
            ],
            [
              'Regional / Capital Setup',
              'Autonomous State Govts (not subordinate to Centre); equal representation in Brussels Govt',
              'Refused autonomy for Northern & Eastern Tamil-majority provinces',
            ],
            [
              'Cultural Protection',
              'Unique 3rd-tier Community Government handles culture, education & language',
              'New constitution stipulated state shall protect and foster Buddhism',
            ],
            [
              'Long-Term Outcome',
              'Avoided civic strife & division; Brussels became European Union (EU) headquarters',
              'Alienation of Tamils → LTTE demand for independent Tamil Eelam → decades of Civil War',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Why Power-Sharing is Desirable: Prudential vs. Moral Reasons',
          headers: ['Basis', 'Prudential Reason', 'Moral Reason'],
          rows: [
            [
              'Core Focus',
              'Stresses better practical outcomes and stability',
              'Stresses that the very act of power-sharing is inherently valuable',
            ],
            [
              'Key Arguments',
              '• Reduces possibility of conflict between social groups.\n• Prevents violence & political instability.\n• Imposing majority will looks attractive short-term, but undermines national unity long-term.',
              '• Power-sharing is the very spirit of democracy.\n• Democratic rule involves sharing power with those affected by its exercise.\n• Citizens have a right to be consulted on how they are governed.',
            ],
            [
              'NCERT Textbook Example',
              'Belgium’s 1970–93 deal & India’s Reservation of Constituencies for SCs/STs',
              'Decentralisation / Gram Sabha direct participation & citizen consultation',
            ],
          ],
        },
      ],
    },
    {
      id: 'civ-01-case-traps',
      title: 'Pillar 4: 4-Mark Case Extract & Examiner Trap Checkpoints',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Aarav',
          title: 'Trap: Confusing "Horizontal" with "Vertical" Power-Sharing',
          wrongWork: 'Horizontal power-sharing means Central, State, and Local governments sharing power.',
          teacherFix:
            'HORIZONTAL = same level (Legislature ↔ Executive ↔ Judiciary → Checks & Balances). VERTICAL = different levels (Union ↓ State ↓ Local → Federalism).',
          whyWrong:
            'Examiners immediately deduct marks when "Checks and Balances" is attached to Federalism instead of Horizontal distribution.',
        },
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the case and answer the questions below:\n"Khalil’s Dilemma: In Lebanon’s capital Beirut, Khalil’s parents came from different communities — his father was an Orthodox Christian and his mother a Sunni Muslim. After a bitter civil war, Lebanon’s leaders agreed on basic power-sharing rules: the President must belong to the Maronite sect of Catholic Christians, the Prime Minister must be from the Sunni Muslim community, the Deputy Prime Minister from the Orthodox Christian sect, and the Speaker from the Shi’a Muslims. Christians agreed not to seek French protection and Muslims agreed not to seek unification with Syria. Khalil wonders why Lebanon cannot be a normal democracy where anyone can contest for the top post."\n\n(a) Why did Lebanese leaders adopt fixed community quotas for top posts? [1M]\n(b) What mutual compromise ended the external fears between Christians and Muslims? [1M]\n(c) Why does Khalil dislike this arrangement, and why might Lebanon’s elders still defend it? [2M]',
          answer:
            '(a) To prevent a recurrence of civil war and ensure every major religious sect holds guaranteed representation at the highest levels of government.\n(b) Christians agreed not to seek French protection, and Muslims agreed not to seek unification with neighbouring Syria.\n(c) Khalil dislikes it because merit/popular vote alone cannot let any citizen become President or PM, limiting full democratic competition. However, elders defend it on prudential grounds because without guaranteed power-sharing, mistrust among communities could reignite bloody conflict.',
          markingTip: 'Anchor part (c) with both Khalil’s democratic-equality argument and the elders’ prudential stability argument.',
        },
        {
          type: 'checkpoint',
          prompt:
            'In Belgium, the Dutch-speaking people constituted a majority in the country, but a minority in the capital Brussels. How did the 1970–1993 constitution resolve this asymmetry?',
          options: [
            { id: 'a', label: 'Gave Dutch-speakers 80% seats in Brussels because they are the national majority' },
            {
              id: 'b',
              label:
                'Equal Dutch & French ministers in the Central Govt AND equal representation in the separate Brussels Govt',
            },
            { id: 'c', label: 'Declared French the sole official language across Belgium' },
            { id: 'd', label: 'Subordinated State Governments directly under the Belgian Prime Minister' },
          ],
          correctIds: ['b'],
          successMsg:
            'Spot on! French-speakers accepted equal representation in the Central Govt precisely because Dutch-speakers had already accepted equal representation in Brussels.',
          hintMsg:
            'Look at the mutual compromise: neither community gave up parity in the capital or the Centre.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Which pair correctly links a form of power-sharing to its democratic principle?',
          options: [
            { id: 'a', label: 'Vertical Division — System of Checks and Balances' },
            { id: 'b', label: 'Horizontal Distribution — Community Government in Belgium' },
            {
              id: 'c',
              label: 'Horizontal Distribution — Organs at the same level checking each other so none holds unlimited power',
            },
            { id: 'd', label: 'Majoritarianism — Prudential power-sharing among social groups' },
          ],
          correctIds: ['c'],
          successMsg: 'Correct! Legislature, Executive, and Judiciary at the same level form Checks and Balances.',
          hintMsg: 'Match Horizontal → same level (3 organs); Vertical → Union/State/Local.',
        },
      ],
    },
    {
      id: 'civ-01-qa',
      title: 'Pillar 5: CBSE Sub-Headed Q&As (2M, 3M & 5M)',
      blocks: [
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'Describe any three majoritarian measures adopted by the Sri Lankan government after independence in 1948 that alienated Sri Lankan Tamils.',
          answer:
            '• **Official Language Act (1956):** An Act was passed in 1956 to recognise Sinhala as the only official language, completely disregarding Tamil.\n• **Preferential State Policies:** Governments followed preferential policies favouring Sinhala applicants for university positions and government jobs.\n• **State Patronage to Buddhism:** A new constitution stipulated that the state shall protect and foster Buddhism, making Tamils feel none of the major political parties were sensitive to their language and culture.',
          markingTip: 'Underline the year **1956** and three keywords: *official language, preferential policies, foster Buddhism*.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Explain the key elements of the Belgian model of power-sharing that accommodated regional and linguistic diversity.',
          answer:
            'Between 1970 and 1993, Belgian leaders amended their constitution four times to work out an innovative accommodation:\n• **1. Equal Ministers at the Centre:** The Constitution prescribes that the number of Dutch and French-speaking ministers shall be equal in the central government; special laws require majority support from each linguistic group.\n• **2. Autonomous State Governments:** Many powers of the central government were transferred to state governments of the two regions, and state governments are **not subordinate** to the Central Government.\n• **3. Separate Government for Brussels:** Brussels has a separate government in which both Dutch and French communities have equal representation.\n• **4. Community Government (Third Kind):** Elected by people belonging to one language community (Dutch, French, or German) regardless of where they live, with authority over cultural, educational, and language-related issues.\n• **5. Peaceful Unity Outcome:** Despite its complexity, this model avoided civic strife and linguistic division, leading to Brussels being chosen as the European Union headquarters.',
          markingTip: 'Include all 4 constitutional provisions + the Brussels EU outcome as the 5th point.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Explain the four major forms of power-sharing in modern democracies with suitable examples.',
          answer:
            'Power-sharing takes four major institutional forms in democracies:\n• **1. Horizontal Distribution (Among Organs of Govt):** Power is shared among Legislature, Executive, and Judiciary at the same level. Each organ checks the others (**system of checks and balances**); e.g., judges appointed by executive can review laws passed by legislature.\n• **2. Vertical Division (Among Governments at Different Levels):** Power is divided between a general government for the whole country (Union/Central Govt) and provincial/regional governments (State Govts), plus local bodies (Municipalities and Panchayats in India — **federal division**).\n• **3. Power-Sharing Among Social Groups:** Power may be shared among religious and linguistic groups to prevent alienation; e.g., **Community Government** in Belgium and **Reserved Constituencies** in India.\n• **4. Power-Sharing Among Political Parties, Pressure Groups & Movements:** Electoral competition ensures power does not stay in one hand; two or more parties form **coalition governments** (e.g., India/Germany), while interest groups (traders, farmers, industrial workers) influence decision-making via committees or protests.',
          markingTip: 'Write bold sub-headings for all 4 forms and always include at least one concrete example per form.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'Why is power-sharing desirable? Distinguish between its Prudential and Moral reasons.',
          answer:
            '• **Prudential Reasons (Based on Careful Calculation of Gains & Losses):** Power-sharing helps reduce the possibility of conflict between social groups. Since social conflict often leads to violence and political instability, power-sharing is a good way to ensure the stability of political order and long-term national unity.\n• **Moral Reasons (Based on Democratic Values):** Power-sharing is the very spirit of democracy. A democratic rule involves sharing power with those affected by its exercise, and citizens have a right to be consulted on how they are to be governed.\n• **Summary Contrast:** Prudential reasons stress **better outcomes** (stability), whereas Moral reasons emphasise the **intrinsic value** of sharing power.',
          markingTip: 'Quote the NCERT phrase *"Prudential stresses better outcomes; Moral emphasises the very act of power-sharing as valuable."*',
        },
      ],
    },
  ],
};
