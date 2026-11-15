import { Subtopic } from '../../../types/curriculum';

export const sstHist02: Subtopic = {
  id: 'sst-hist-02',
  slug: 'nationalism-in-india',
  title: 'Ch 2: Nationalism in India (+ 2M Map Pointing)',
  subtitle:
    'History | WWI Impact, Satyagraha, Rowlatt & Jallianwala Bagh, NCM Streams (Towns/Awadh/Gudem/Assam), Salt March & CDM Social Matrix, Poona Pact, Collective Belonging & 9 CBSE Map Items',
  estimatedMinutes: 50,
  difficulty: 'Core CBSE',
  ncertSection: 'History Chapter 2 — Nationalism in India (+ 2M Map)',
  learningObjectives: [
    'Trace how WWI economic hardship, the Rowlatt Act (1919), Jallianwala Bagh (13 Apr 1919), and the Khilafat issue sparked mass nationalism.',
    'Contrast how different social groups understood Swaraj during NCM (Towns, Baba Ramchandra in Awadh, Alluri Sitaram Raju in Gudem Hills, Assam plantation workers).',
    'Compare Non-Cooperation (1921–22) and Civil Disobedience (1930–34), including the Salt March (240 miles, 78 volunteers) and Gandhi–Irwin Pact (1931).',
    'Evaluate diverse participation & limits of CDM across Rich Peasants, Poor Peasants, Business Classes (FICCI), Workers, Women, Dalits (Poona Pact Sep 1932), and Muslim organisations.',
    'Explain cultural processes of Collective Belonging (Bharat Mata, Folklore, Flags, History) and master all 9 compulsory CBSE Ch 2 Map Pointing items (2 Marks).',
  ],
  keywords: [
    'Satyagraha',
    'Champaran Kheda Ahmedabad',
    'Rowlatt Act 1919',
    'Jallianwala Bagh',
    'Khilafat Movement',
    'Hind Swaraj 1909',
    'Baba Ramchandra',
    'Alluri Sitaram Raju',
    'Inland Emigration Act 1859',
    'Chauri Chaura 1922',
    'Simon Commission 1928',
    'Lahore Purna Swaraj 1929',
    'Dandi Salt March 1930',
    'Gandhi Irwin Pact',
    'Poona Pact 1932',
    'Bharat Mata',
    'Natesa Sastri',
    'History Map Pointing',
  ],
  sections: [
    {
      id: 'hist-02-ww1-satyagraha-rowlatt',
      title: 'Pillar 1 & 2: Chronology Arc, WWI Shock, Satyagraha & 1919 Rowlatt–Khilafat Turning Point',
      blocks: [
        {
          type: 'visual-diagram',
          diagramId: 'indian-movement-timeline-arc',
          title: 'Interactive Chronology Ribbon: Indian National Movement (1915–1932)',
          caption:
            'Filter by phase (Early Satyagraha, NCM, CDM) and click any milestone to inspect exact dates, places, and CBSE map pins.',
        },
        {
          type: 'quick-summary',
          title: 'How the First World War (1914–1918) Created a New Economic & Political Situation in India',
          bullets: [
            '1. Huge Defence Expenditure: Financed by war loans and increasing taxes — customs duties were raised and income tax was introduced.',
            '2. Price Explosion (1913–1918): Prices nearly doubled during the war years, leading to extreme hardship for the common people.',
            '3. Forced Recruitment in Rural Areas: Villages were called upon to supply soldiers, causing widespread anger across the countryside.',
            '4. Crop Failure & Influenza Epidemic (1918–1921): Acute food shortages accompanied by an influenza epidemic; according to the 1921 census, 12 to 13 million people perished due to famines and the epidemic.',
          ],
        },
        {
          type: 'steps',
          title: 'The Idea of Satyagraha & Mahatma Gandhi’s Three Early Localised Campaigns (1917–1918)',
          items: [
            {
              label: 'Meaning of Satyagraha (Returned Jan 1915 from South Africa)',
              detail:
                'Emphasised the power of truth and the need to search for truth. Without seeking vengeance or being aggressive, a satyagrahi could win the battle through non-violence by appealing to the conscience of the oppressor rather than forcing them to accept truth via violence.',
            },
            {
              label: '1917 — Champaran Satyagraha (Bihar)',
              detail:
                'Gandhiji travelled to Champaran to inspire indigo peasants to struggle against the oppressive European plantation system.',
            },
            {
              label: '1917 — Kheda Satyagraha (Gujarat)',
              detail:
                'Supported Kheda peasants affected by crop failure and a plague epidemic who could not pay revenue and demanded revenue collection be relaxed.',
            },
            {
              label: '1918 — Ahmedabad Cotton Mill Workers Satyagraha (Gujarat)',
              detail:
                'Organised a satyagraha movement among cotton mill workers in Ahmedabad demanding fair wages and plague bonus.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'law',
          title: '1919 Rowlatt Act, Jallianwala Bagh Massacre & Khilafat–Hind Swaraj Convergence',
          body: 'Four interconnected events turned local satyagrahas into a nationwide mass struggle:',
          bullets: [
            'Rowlatt Act (1919): Hurriedly passed through the Imperial Legislative Council despite united Indian opposition; gave the government enormous powers to repress political activities and allowed detention of political prisoners without trial for TWO years.',
            '13 April 1919 — Jallianwala Bagh Massacre (Amritsar, Punjab): After 10 April police firing & martial law under General Dyer, a large crowd gathered inside enclosed Jallianwala Bagh (some to protest, many villagers to attend the annual Baisakhi fair, unaware of martial law). Dyer blocked the exit points and opened fire killing hundreds to "produce a moral effect" of terror and awe in satyagrahis’ minds. Rabindranath Tagore later renounced his knighthood.',
            'Khilafat Issue (March 1919 Bombay Committee): After Ottoman Turkey’s defeat in WWI, harsh peace terms were rumoured against the Ottoman emperor (Khalifa — spiritual head of the Islamic world). Young Muslim leaders Muhammad Ali and Shaukat Ali discussed united mass action with Gandhiji to bring Hindus and Muslims under a unified national umbrella.',
            'Hind Swaraj (1909): In this famous book, Gandhiji declared British rule was established in India with the cooperation of Indians and survived ONLY because of that cooperation — if Indians refused to cooperate, British rule would collapse within a year and Swaraj would come.',
          ],
        },
      ],
    },
    {
      id: 'hist-02-ncm-streams',
      title: 'Pillar 3: Non-Cooperation in Motion — Differing Strands & Chauri Chaura Halt (1921–22)',
      blocks: [
        {
          type: 'table',
          caption: 'How Different Social Groups Interpreted Non-Cooperation (Adopted at Nagpur Session, Dec 1920)',
          headers: ['Stream / Region', 'Leaders & Grievances', 'Actions Taken & Why It Slowed / Ended'],
          rows: [
            [
              'Towns (Middle Class)',
              'Students, teachers, headmasters, lawyers & council voters (Calcutta/Nagpur mandate; ONLY Justice Party of Madras non-Brahmans contested elections to enter Councils).',
              'Left govt schools/colleges, resigned legal practices, boycotted foreign cloth (imports halved from Rs 102 crore to Rs 57 crore in 1921–22), burnt liquor shops.\nWhy it slowed: Khadi cloth was more expensive than mill cloth; lack of alternative Indian schools/courts forced students & lawyers back.',
            ],
            [
              'Awadh Peasants (Countryside)',
              'Led by Baba Ramchandra (sanyasi who had worked in Fiji as indentured labourer) against talukdars & landlords demanding exorbitantly high rents, cesses, and begar (forced unpaid labour) with no security of tenure.',
              'Demanded revenue reduction, abolition of begar, social boycott of oppressive landlords (nai-dhobi bandhs). Oct 1920: Oudh Kisan Sabha set up by Jawaharlal Nehru & Baba Ramchandra (300+ branches in a month).\nCongress discomfort: Peasants attacked talukdar houses, looted bazaars & hoarded grain invoking Gandhi’s name.',
            ],
            [
              'Gudem Hills Tribals (Andhra Pradesh)',
              'Inspired by charismatic Alluri Sitaram Raju (claimed special astrological/healing powers, wore khadi, urged giving up drinking — yet believed India could be liberated only by force). Colonial forest laws barred grazing/fuelwood/shifting cultivation & forced begar for road building.',
              'Militant guerrilla warfare in early 1920s: attacked police stations, attempted to kill British officials, carried on armed struggle for Swaraj. Raju was captured and executed in 1924 (became a folk hero).',
            ],
            [
              'Assam Plantation Workers',
              'Bound by Inland Emigration Act of 1859 — prohibited from leaving tea gardens without permission (rarely granted).',
              'For them, freedom meant right to move freely & keep link with home villages. Hearing of NCM, thousands defied authorities, left plantations, and headed home believing "Gandhi Raj" would give everyone land in their own villages. Stranded by railway/steamer strike, caught and brutally beaten by police.',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'trap',
          title: 'February 1922: Why Did Mahatma Gandhi Withdraw Non-Cooperation?',
          body: 'At Chauri Chaura in Gorakhpur (Uttar Pradesh), a peaceful demonstration in a bazaar turned into a violent clash with police, and demonstrators set fire to a police station killing 22 policemen. Sensing the movement was turning violent in many places and satyagrahis needed proper training before mass struggles, Gandhiji immediately halted Non-Cooperation.',
        },
      ],
    },
    {
      id: 'hist-02-salt-march-and-cdm',
      title: 'Pillar 3B: Towards Civil Disobedience (Simon → Lahore 1929) & The Dandi Salt March (1930)',
      blocks: [
        {
          type: 'steps',
          title: '1922–1931 Sequence: From Swaraj Party Debate to Gandhi–Irwin Pact',
          items: [
            {
              label: 'Swaraj Party vs. Radical Youth (1923–28)',
              detail:
                'C.R. Das and Motilal Nehru formed the Swaraj Party within Congress to argue for return to provincial council elections and oppose British policies from inside. Younger leaders like Jawaharlal Nehru and Subhas Chandra Bose pressed for more radical mass agitation and full independence.',
            },
            {
              label: 'Two Factors Shaping Late-1920s Politics',
              detail:
                '(1) Effect of the worldwide economic depression (agricultural prices fell from 1926 and collapsed after 1930, ruining peasants); (2) Tory government in Britain constituted the all-British Statutory Commission under Sir John Simon (arrived 1928) with NOT a single Indian member — greeted everywhere with "Go back Simon" (Lala Lajpat Rai fatally injured in Lahore lathi charge).',
            },
            {
              label: 'December 1929 — Lahore Congress Session (Purna Swaraj)',
              detail:
                'Under the presidency of Jawaharlal Nehru, Congress formalised the demand of "Purna Swaraj" (full independence) and declared that 26 January 1930 would be celebrated as Independence Day (citizens asked to take a pledge to struggle for complete independence).',
            },
            {
              label: '12 March – 6 April 1930: Why Salt & The Dandi March',
              detail:
                'On 31 Jan 1930 Gandhiji sent Viceroy Irwin 11 demands (general + class-specific); abolishing the salt tax was the most stirring because salt was consumed by rich and poor alike — a government monopoly revealing British oppression’s most oppressive face. When Irwin refused to negotiate, Gandhiji walked 240 miles over 24 days (~10 miles/day) from Sabarmati Ashram to coastal Dandi with 78 trusted volunteers, and ceremonially boiled seawater to manufacture salt on 6 April 1930.',
            },
            {
              label: '5 March 1931: Gandhi–Irwin Pact & 1932–34 Phase',
              detail:
                'Facing brutal repression (~100,000 arrested including Abdul Ghaffar Khan & Gandhiji, women/children beaten), Gandhiji called off CDM and signed the Gandhi–Irwin Pact: consented to attend the 2nd Round Table Conference in London (Dec 1931) while government agreed to release political prisoners. Talks failed; returning to repressed India, Gandhiji relaunched CDM, which lost momentum by 1934.',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Must-Memorise 3M/5M Comparison: Non-Cooperation Movement (NCM) vs. Civil Disobedience Movement (CDM)',
          headers: ['Criterion', 'Non-Cooperation Movement (1921–22)', 'Civil Disobedience Movement (1930–34)'],
          rows: [
            ['Core Aim', 'Swaraj (self-rule) + redressal of Punjab/Jallianwala & Khilafat wrongs.', 'Purna Swaraj (complete independence from British rule).'],
            ['Core Method', 'Refusing to cooperate with British institutions (schools, courts, titles, councils, foreign cloth).', 'Not ONLY refusing cooperation, but actively BREAKING colonial laws (Salt Law, forest laws, refusing chaukidari & revenue taxes).'],
            ['Muslim Participation', 'High unity due to Khilafat alliance led by Ali brothers.', 'Much lower after NCM collapse & Congress–League alienation over separate electorates.'],
            ['Women’s Role', 'Comparatively limited urban protest.', 'Large-scale public participation: salt-making, picketing foreign cloth & liquor shops, going to jail (high-caste urban + rich peasant rural women).'],
          ],
        },
      ],
    },
    {
      id: 'hist-02-social-groups-and-limits',
      title: 'Pillar 4: Social-Group Participation Matrix & The Limits of Civil Disobedience',
      blocks: [
        {
          type: 'table',
          caption: 'How Different Social Groups Saw Civil Disobedience (Guaranteed 5-Mark Board Question)',
          headers: ['Social Group', 'Why They Joined CDM', 'Limits / Why Enthusiasm Cooled Later'],
          rows: [
            [
              'Rich Peasant Communities (Patidars of Gujarat, Jats of UP)',
              'Producers of commercial crops hit hard by Great Depression & falling prices; cash income disappeared making govt revenue demand impossible; wanted reduction in revenue.',
              'Deeply disappointed when CDM was called off in 1931 without revenue rates being revised; many refused to participate when restarted in 1932.',
            ],
            [
              'Poorer Peasantry (Small Tenants)',
              'Cultivated land rented from landlords; Depression collapsed incomes, making rent unpaid; wanted UNPAID RENT to landlords remitted.',
              'Joined radical socialist/communist movements; Congress was unwilling to support "no rent" campaigns in most places for fear of upsetting rich peasants and landlords.',
            ],
            [
              'Business Classes (Purshottamdas Thakurdas, G.D. Birla)',
              'Made huge WWI profits; opposed colonial import restrictions; wanted protection against foreign goods & rupee-sterling ratio discouraging imports. Formed Indian Industrial & Commercial Congress (1920) & FICCI (1927). Saw Swaraj as ending trade curbs.',
              'Apprehensive after Round Table failure; feared militant activities, prolonged business disruption, and growing socialist influence among younger Congress members.',
            ],
            [
              'Industrial Working Class (Except Nagpur)',
              'Did NOT participate in large numbers (except Nagpur region); some workers adopted Gandhian boycott/low-wage/poor-condition strikes (railway 1930, dockworkers 1932, Chotanagpur tin-miners in Gandhi caps).',
              'As industrialists came closer to Congress, workers stayed aloof; Congress was reluctant to include workers’ demands inside its struggle lest it alienate industrialists and divide anti-imperial forces.',
            ],
            [
              'Women',
              'Moved by Gandhiji’s call, saw national service as a sacred duty — thousands came out of homes during Salt March, picketed liquor/foreign-cloth shops, went to jail (urban high-caste + rural rich peasant families).',
              'Increased public visibility brought no radical change in status: Gandhiji believed women’s primary duty remained home, hearth & motherhood; Congress was reluctant to give women positions of authority inside the organisation (symbolic presence only).',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'Two Crucial Structural Limits of Civil Disobedience: Dalits (Poona Pact) & Muslim Alienation',
          body: 'Not all social groups were moved by the abstract concept of Swaraj:',
          bullets: [
            '1. Dalits ("Untouchables") & the Poona Pact (September 1932): Long ignored by Congress for fear of offending conservative high-caste sanatanis, Gandhiji called them Harijans ("children of God"), organised satyagraha for temple/well/road entry, and cleaned toilets himself. However, Dalit leaders demanded political empowerment via reserved seats and separate electorates. Dr. B.R. Ambedkar (who organised the Depressed Classes Association in 1930) clashed with Gandhiji at the 2nd RTC; when Britain conceded separate electorates, Gandhiji began a fast unto death believing it would slow Dalit integration into society. Ambedkar accepted the Poona Pact (Sep 1932): Depressed Classes (Scheduled Castes) got reserved seats in provincial & central legislative councils, but to be voted in by the GENERAL electorate.',
            '2. Muslim Political Organisations: After Non-Cooperation-Khilafat declined, many Muslims felt alienated as Congress came to appear visibly associated with Hindu religious nationalist groups like Hindu Mahasabha. Communal clashes deepened distrust. In 1927, Muhammad Ali Jinnah offered to drop separate electorates IF Muslims got reserved seats in Central Assembly & proportional representation in Muslim-majority Bengal & Punjab; all hopes collapsed at the 1928 All Parties Conference when M.R. Jayakar (Hindu Mahasabha) strongly opposed compromise — creating an atmosphere of suspicion during CDM.',
          ],
        },
      ],
    },
    {
      id: 'hist-02-collective-belonging-and-map',
      title: 'Pillar 5: Sense of Collective Belonging + All 9 Compulsory CBSE Ch 2 Map Items (2M)',
      blocks: [
        {
          type: 'steps',
          title: 'Four Cultural Processes That Forged Collective Belonging in India (5-Mark Sure-Shot)',
          items: [
            {
              label: '1. Figure / Image of Bharat Mata & Vande Mataram',
              detail:
                'Bankim Chandra Chattopadhyay wrote Vande Mataram (1870s) and included it in his novel Anandamath. Abanindranath Tagore painted Bharat Mata (1905) as an ascetic figure — calm, composed, divine, and spiritual (later popular prints added trishul, lion, and elephant). Devotion to this mother figure became evidence of nationalism.',
            },
            {
              label: '2. Revival of Indian Folklore',
              detail:
                'Nationalists recorded folk tales sung by bards and villagers to recover traditional culture corrupted by outside forces. In Bengal, Rabindranath Tagore collected ballads, nursery rhymes, and myths; in Madras, Natesa Sastri published a massive four-volume Tamil collection, The Folklore of Southern India.',
            },
            {
              label: '3. National Icons & Flags (1905 Swadeshi vs. 1921 Swaraj Flag)',
              detail:
                'During the Swadeshi movement in Bengal, a tricolour flag (red, green, yellow) was designed with 8 lotuses (representing 8 provinces of British India) and a crescent moon (Hindus and Muslims). By 1921, Gandhiji designed the Swaraj flag — also a tricolour (red, green, white) with a spinning wheel (charkha) in the centre representing the Gandhian ideal of self-help.',
            },
            {
              label: '4. Reinterpretation of History',
              detail:
                'To counter British claims that Indians were backward and incapable of self-rule, nationalists wrote of glorious ancient achievements in art, architecture, science, maths, religion, law, and crafts — followed by a history of decline when India was colonised (caveat: when glories glorified mainly Hindu past, other communities felt left out).',
            },
          ],
        },
        {
          type: 'table',
          caption: 'COMPULSORY 2-MARK CBSE HISTORY MAP POINTING LIST (Nationalism in India — All 9 Items)',
          headers: ['Category & Map Pin', 'Exact Date / Context Clue in Question Paper', 'State / Exact Location to Locate & Label'],
          rows: [
            ['I. INC Session (1)', 'Calcutta — September 1920 (Special Session convincing Congress for NCM–Khilafat)', 'West Bengal (Kolkata coast/Hooghly)'],
            ['I. INC Session (2)', 'Nagpur — December 1920 (Non-Cooperation Programme formally adopted)', 'Maharashtra (Eastern Maharashtra — Vidarbha)'],
            ['I. INC Session (3)', 'Madras — 1927 (Resolution calling boycott of Simon Commission & Purna Swaraj debate)', 'Tamil Nadu (Chennai coast)'],
            ['II. Movement Centre (1)', 'Champaran — Satyagraha of Indigo Planters (1917)', 'Bihar (North-West Bihar near Nepal border)'],
            ['II. Movement Centre (2)', 'Kheda — Peasant Satyagraha against revenue collection (1917)', 'Gujarat (Central Gujarat, south-east of Ahmedabad)'],
            ['II. Movement Centre (3)', 'Ahmedabad — Cotton Mill Workers Satyagraha (1918)', 'Gujarat (Central Gujarat, north of Kheda)'],
            ['II. Movement Centre (4)', 'Amritsar — Jallianwala Bagh Massacre (13 April 1919)', 'Punjab (North-West border of Punjab)'],
            ['II. Movement Centre (5)', 'Chauri Chaura — Calling off of Non-Cooperation Movement (Feb 1922)', 'Uttar Pradesh (Eastern UP, Gorakhpur district)'],
            ['II. Movement Centre (6)', 'Dandi — Civil Disobedience / Breaking the Salt Law (6 April 1930)', 'Gujarat (Southern Gujarat coast, Navsari)'],
          ],
        },
      ],
    },
    {
      id: 'hist-02-board-qa',
      title: 'Pillar 6: NCERT 4M Source Box, Student Map Mistake, Checkpoint & 2M/3M/5M Answers',
      blocks: [
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the Independence Day Pledge (26 January 1930) source extract and answer (1 + 1 + 2 = 4 Marks):\n"We believe that it is the inalienable right of the Indian people, as of any other people, to have freedom and to enjoy the fruits of their toil and have the necessities of life, so that they may have full opportunities of growth. We believe also that if any government deprives a people of these rights and oppresses them, the people have a further right to alter it or to abolish it. The British Government in India has not only deprived the Indian people of their freedom but has based itself on the exploitation of the masses, and has ruined India economically, politically, culturally, and spiritually. We believe, therefore, that India must sever the British connection and attain Purna Swaraj or Complete Independence."\n\nQuestions:\n(i) When and by which Congress session was 26 January 1930 fixed as Independence Day? (1M)\n(ii) Mention any two spheres in which the pledge states the British ruined India. (1M)\n(iii) Why does the pledge declare that Indians have a moral right to abolish British rule? Explain in two points. (2M)',
          answer:
            '(i) The Lahore Congress Session of December 1929 (presided over by Jawaharlal Nehru) fixed 26 January 1930 as Independence Day for Purna Swaraj.\n(ii) Economically and politically (also culturally and spiritually).\n(iii) Two reasons: (1) Every people holds an inalienable right to freedom, fruits of toil, and growth — if a government deprives citizens of these rights and oppresses them, people have a right to alter or abolish it; (2) British rule relied on systematic exploitation of the Indian masses, leaving Complete Independence (Purna Swaraj) as the only remedy.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Meera',
          title: 'Two Fatal Map & Session Mistakes Students Make in Ch 2',
          wrongWork:
            '1) Marked Nagpur for "September 1920 INC Session" and Calcutta for "December 1920 INC Session".\n2) Marked Ahmedabad for "Peasant Satyagraha" and Kheda for "Cotton Mill Workers Satyagraha".',
          teacherFix:
            '1) Memory Trick "CN-Sep-Dec": C comes before N and September (Calcutta) comes before December (Nagpur)! Madras is 1927.\n2) Memory Trick "A for Ahmedabad Mill Workers (factory city), K for Kheda Kisans (peasants), C for Champaran Indigo Planters (Bihar)".',
          whyWrong:
            'Question 37a (History Map, 2 Marks) regularly tests the September vs. December 1920 Congress sessions OR Kheda vs. Ahmedabad in Gujarat.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Match which statement about History Ch 2 is INCORRECT (spot the false claim):',
          options: [
            {
              id: 'a',
              label: 'Alluri Sitaram Raju inspired Awadh peasants to demand nai-dhobi bandhs.',
              sublabel: 'Check the region and leader!',
            },
            {
              id: 'b',
              label: 'The Inland Emigration Act of 1859 forbade Assam tea plantation workers from leaving without permission.',
            },
            {
              id: 'c',
              label: 'The Poona Pact (September 1932) granted reserved seats for Depressed Classes voted by the general electorate.',
            },
            {
              id: 'd',
              label: 'Natesa Sastri published The Folklore of Southern India in four Tamil volumes.',
            },
          ],
          correctIds: ['a'],
          multiSelect: false,
          successMsg:
            'Correct! Option A is FALSE: Baba Ramchandra led the Awadh peasant movement (and nai-dhobi bandhs), whereas Alluri Sitaram Raju led the Gudem Hills tribal guerrilla struggle in Andhra Pradesh.',
          hintMsg:
            'Remember Baba Ramchandra (Awadh/Fiji) vs. Alluri Sitaram Raju (Gudem Hills, Andhra Pradesh).',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'Why did Gandhiji choose "Salt" as the central symbol to launch the Civil Disobedience Movement in 1930?',
          answer:
            '1. Universal Essential Item: Salt was consumed by rich and poor alike as one of the most essential items of food — making it a unifying symbol across castes and classes.\n2. Exposed Colonial Oppression: The tax on salt and government monopoly over its production revealed the most oppressive face of British rule.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'How did the First World War help in the growth of the National Movement in India?',
          answer:
            '1. Heavy Taxes & Doubled Prices: Huge defence expenditure led to war loans, higher customs duties, income tax, and doubling of prices (1913–18), causing severe hardship.\n2. Forced Recruitment: Compulsory conscription of rural youth into the British army bred deep resentment across villages.\n3. Crop Failures & Epidemic: 1918–21 crop failures and influenza epidemic (12–13 million deaths) shattered hopes of post-war relief, readying people for Gandhian Satyagraha.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            '"Nationalism spreads when people begin to believe that they are all part of the same nation." Explain how culture and history helped create this sense of collective belonging in India.',
          answer:
            '1. Image of Bharat Mata: First created by Bankim Chandra Chattopadhyay (with Vande Mataram in Anandamath) and painted as a serene ascetic figure by Abanindranath Tagore (1905), making devotion to the Motherland tangible.\n2. Revival of Indian Folklore: Rabindranath Tagore in Bengal and Natesa Sastri in Madras (The Folklore of Southern India, 4 volumes) collected folk tales and ballads to preserve authentic Indian culture.\n3. National Flags: From the 1905 Swadeshi red-green-yellow tricolour (8 lotuses, crescent moon) to Gandhiji’s 1921 Swaraj tricolour (red-green-white with charkha), carrying the flag symbolised defiance.\n4. Reinterpretation of History: Indian writers highlighted glorious ancient achievements in science, maths, art, architecture, and trade to refute British portrayals of Indian backwardness.\n5. Political Struggles & Shared Experience: Though cultural symbols sometimes risked alienating minorities when drawn heavily from one tradition, united mass struggles slowly forged shared national consciousness.',
        },
      ],
    },
  ],
};
