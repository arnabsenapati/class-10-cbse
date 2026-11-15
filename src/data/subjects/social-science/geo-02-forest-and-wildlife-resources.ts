import { Subtopic } from '../../../types/curriculum';

export const sstGeo02: Subtopic = {
  id: 'sst-geo-02',
  slug: 'forest-and-wildlife-resources',
  title: 'Ch 2: Forest and Wildlife Resources',
  subtitle:
    'Geography | Rationalised NCERT: Wildlife Protection Act 1972, Project Tiger 1973, Reserved–Protected–Unclassed Forests, JFM (Odisha 1988) & Sacred Groves',
  estimatedMinutes: 30,
  difficulty: 'Core CBSE',
  ncertSection: 'Geography Chapter 2 — Forest and Wildlife Resources (Theory Only — Zero Map Items)',
  learningObjectives: [
    'Explain why conservation of forests and wildlife is critical to preserve ecological diversity and life-support systems (water, air, soil).',
    'Outline key provisions of the Indian Wildlife (Protection) Act, 1972 and Project Tiger (1973) with 6 major tiger reserves.',
    'Classify Indian forests into Reserved (>50%), Protected (~1/3rd), and Unclassed forests with regional state distribution (MP 75%, NE states).',
    'Analyse Community Conservation case studies (Sariska, Bhairodev Dakav Sonchuri, Chipko, Beej Bachao Andolan, JFM Odisha 1988, Sacred Groves).',
  ],
  keywords: [
    'Biodiversity',
    'Wildlife Protection Act 1972',
    'Project Tiger 1973',
    'Reserved Forests',
    'Protected Forests',
    'Unclassed Forests',
    'Bhairodev Dakav Sonchuri',
    'Chipko Movement',
    'Beej Bachao Andolan Navdanya',
    'Joint Forest Management 1988',
    'Sacred Groves',
  ],
  sections: [
    {
      id: 'geo-02-wildlife-act-and-project-tiger',
      title: 'Pillar 1: Biodiversity, Wildlife (Protection) Act 1972 & Project Tiger (1973)',
      blocks: [
        {
          type: 'callout',
          variant: 'tip',
          title: 'Scope Note: Theory-Only Chapter (Zero CBSE Map Pointing Items)',
          body: 'Forest and Wildlife Resources follows the rationalised NCERT syllabus and has ZERO items on the CBSE Class 10 Map List. Focus completely on conservation Acts, Project Tiger reserves, forest categories, JFM, and community movements.',
        },
        {
          type: 'quick-summary',
          title: 'Why Conserve Forests & Wildlife? + Indian Wildlife (Protection) Act, 1972',
          bullets: [
            'Ecological Web & Biodiversity: Biodiversity is immensely rich in wildlife and cultivated species, closely integrated in a complex ecological web; forests/wildlife preserve ecological diversity and our life support systems (water, air, soil) as well as genetic diversity of crops & aquatic fisheries.',
            'Indian Wildlife (Protection) Act, 1972: Enacted after 1960s–70s conservationist demands with an All-India list of protected species: (1) banned hunting, (2) gave legal protection to wildlife habitats, and (3) restricted trade in wildlife, alongside establishing central/state national parks and wildlife sanctuaries.',
            'Specific Threatened Animals Protected: Tiger, one-horned rhinoceros, Kashmir stag (hangul), three types of crocodiles (freshwater, saltwater, gharial), Asiatic lion, plus recent full/partial legal protection to Indian elephant, black buck (chinkara), great Indian bustard (godawan) & snow leopard.',
            '1980, 1986 & 1991 Schedule Expansions: Wildlife Act notifications of 1980 and 1986 added several hundred butterflies, moths, beetles, and one dragonfly; in 1991, for the first time, PLANTS were also added starting with six species.',
          ],
        },
        {
          type: 'table',
          caption: 'Project Tiger (1973) & Six Major NCERT Tiger Reserves',
          headers: ['Conservation Pillar', 'Key NCERT Facts & Reserve State Pairs'],
          rows: [
            [
              'Why Project Tiger Was Launched (1973)',
              'Tiger population dropped from an estimated 55,000 at turn of century to 1,827 in 1973 due to poaching for trade (skins, bones in traditional Asian medicines), shrinking habitat, depletion of prey base species & growing human population. India & Nepal host ~two-thirds of world tigers.',
            ],
            [
              'Six Important Tiger Reserves Named in NCERT',
              '1. Corbett National Park — Uttarakhand\n2. Sunderbans National Park — West Bengal\n3. Bandhavgarh National Park — Madhya Pradesh\n4. Sariska Wildlife Sanctuary — Rajasthan\n5. Manas Tiger Reserve — Assam\n6. Periyar Tiger Reserve — Kerala',
            ],
          ],
        },
      ],
    },
    {
      id: 'geo-02-forest-categories',
      title: 'Pillar 2: Types & Distribution of Forests in India (Reserved, Protected, Unclassed)',
      blocks: [
        {
          type: 'table',
          caption: 'Administrative Classification of Forests by the Forest Department (Sure-Shot 3M/5M)',
          headers: ['Forest Category', 'Share & Conservation Status', 'Major States / Regions'],
          rows: [
            [
              'Reserved Forests',
              'More than HALF (>50%) of India’s total forest land; regarded as the MOST VALUABLE as far as conservation of forest and wildlife resources is concerned.',
              'Jammu & Kashmir, Andhra Pradesh, Uttarakhand, Kerala, Tamil Nadu, West Bengal, and Maharashtra have large percentages.',
            ],
            [
              'Protected Forests',
              'Almost ONE-THIRD (~33%) of total forest area as declared by the Forest Department; forest land protected from any further depletion.',
              'Bihar, Haryana, Punjab, Himachal Pradesh, Odisha, and Rajasthan have a bulk of their forests under protected status.',
            ],
            [
              'Unclassed Forests',
              'Other forests and wastelands belonging to BOTH government and private individuals and communities (least restricted).',
              'All North-Eastern states and parts of Gujarat have a very high percentage of their forests as unclassed forests managed by local communities.',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'What Are "Permanent Forest Estates"? State Leader Alert!',
          body: 'Reserved and Protected forests together are referred to as Permanent Forest Estates, maintained for producing timber and other forest produce and for protective reasons. Madhya Pradesh has the LARGEST area under permanent forests, constituting 75% of its total forest area.',
        },
      ],
    },
    {
      id: 'geo-02-community-and-sacred-grooves',
      title: 'Pillar 3 & 4: Community Conservation, JFM (Odisha 1988) & Sacred Groves',
      blocks: [
        {
          type: 'steps',
          title: 'Five Real-World Examples Where Local Communities Protected Nature',
          items: [
            {
              label: '1. Sariska Tiger Reserve (Rajasthan) & Bhairodev Dakav "Sonchuri" (Alwar)',
              detail:
                'Villagers in Sariska fought against mining by citing the Wildlife Protection Act. In Alwar district (Rajasthan), inhabitants of five villages declared 1,200 hectares of forest as Bhairodev Dakav "Sonchuri", enforcing their own strict rules banning hunting and protecting wildlife against outside encroachments.',
            },
            {
              label: '2. Chipko Movement (Himalayas)',
              detail:
                'Successfully resisted deforestation in several areas and also showed that community afforestation with indigenous species can be enormously successful.',
            },
            {
              label: '3. Beej Bachao Andolan (Tehri) & Navdanya',
              detail:
                'Farmers and citizen groups showed that adequate levels of diversified crop production without using synthetic chemicals are both ecologically possible and economically viable.',
            },
            {
              label: '4. Joint Forest Management (JFM) — First Resolution in Odisha (1988)',
              detail:
                'Formal programme involving local communities in management and restoration of degraded forests since 1988 (when Odisha passed the FIRST JFM resolution). Depends on village-level local institutions protecting degraded forest land managed by the Forest Department; in return, members receive intermediary benefits (non-timber forest produces) and a share in timber harvested by "successful protection".',
            },
            {
              label: '5. Sacred Groves — Virgin Forests Preserved Through Reverence',
              detail:
                'Centuries-old nature worship kept patches of pristine virgin forests untouched (any human interference banned). Examples: Mundas & Santhals of Chota Nagpur worship mahua and kadamba trees; tribals of Odisha and Bihar worship tamarind and mango trees during weddings; Bishnois around Rajasthan villages herd blackbuck (chinkara), nilgai, and peacocks as part of community heritage; peepal & banyan trees revered nationwide, plus langurs/macaques fed around temples.',
            },
          ],
        },
      ],
    },
    {
      id: 'geo-02-board-qa',
      title: 'Pillar 5 & 6: 4M Source Box, Student Mistake Trap, Checkpoint & 2M/3M/5M Answers',
      blocks: [
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the extract on Sacred Groves and answer (1 + 1 + 2 = 4 Marks):\n"Nature worship is an age old tribal belief based on the premise that all creations of nature have to be protected. Such beliefs have preserved several virgin forests in pristine form called Sacred Groves (the forests of God and Goddesses). These patches of forest or parts of large forests have been left untouched by the local people and any interference with them is banned."\n\nQuestions:\n(i) What are Sacred Groves? (1M)\n(ii) Name the two trees worshipped by the Mundas and Santhals of the Chota Nagpur region. (1M)\n(iii) Explain two ways in which religious beliefs and Bishnoi traditions in India aid wildlife conservation. (2M)',
          answer:
            '(i) Sacred Groves ("forests of God and Goddesses") are pristine patches of virgin forest left completely untouched by local communities where any human interference is banned.\n(ii) Mahua (Bassia latifolia) and Kadamba (Anthocaphalus cadamba).\n(iii) Two ways: (1) Tribal communities in Odisha/Bihar revere tamarind & mango trees during weddings, while people across India consider peepal and banyan sacred, saving old canopy habitats; (2) Around Bishnoi villages in Rajasthan, herds of blackbuck (chinkara), nilgai, and peacocks are protected as an integral part of the community so nobody harms them.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Dev',
          title: 'Two Subtle Traps in Geography Chapter 2',
          wrongWork:
            '1) "Madhya Pradesh has 75% Unclassed forests, whereas North-Eastern states hold mostly Reserved forests."\n2) "The Joint Forest Management (JFM) programme began formally in Uttarakhand in 1972."',
          teacherFix:
            '1) Reverse! Madhya Pradesh has 75% PERMANENT FORESTS (Reserved + Protected combined). North-Eastern states & parts of Gujarat hold high shares of UNCLASSED forests.\n2) JFM existed informally earlier, but came into formal existence in 1988 when ODISHA passed the first JFM resolution (1972 was the Wildlife Protection Act).',
          whyWrong:
            'Board Assertion–Reason and MCQ items routinely swap 1972 (Wildlife Act), 1973 (Project Tiger), and 1988 (Odisha JFM).',
        },
        {
          type: 'checkpoint',
          prompt:
            'Spot the TRUE statements about forest conservation in India (select TWO):',
          options: [
            {
              id: 'plants-1991',
              label: 'In 1991, plants were added for the first time to the Wildlife Protection list, starting with six species.',
            },
            {
              id: 'sonchuri',
              label: 'Five villages in Alwar (Rajasthan) declared 1,200 ha of forest as Bhairodev Dakav "Sonchuri" banning hunting.',
            },
            {
              id: 'unclassed-half',
              label: 'Unclassed forests cover over half of India’s total forest area.',
            },
            {
              id: 'sariska-map',
              label: 'Sariska Tiger Reserve is located in Kerala.',
            },
          ],
          correctIds: ['plants-1991', 'sonchuri'],
          multiSelect: true,
          successMsg:
            'Correct! Plants joined the Wildlife Act in 1991 (after butterflies/beetles in 1980 & 1986), and Bhairodev Dakav Sonchuri is in Alwar, Rajasthan. Reserved forests (not Unclassed) cover >50%, and Sariska is in Rajasthan (Periyar is in Kerala).',
          hintMsg:
            'Check which category exceeds half (>50%) of forest land and which state hosts Sariska.',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'Mention any two steps taken by the Indian Wildlife (Protection) Act of 1972 to protect biodiversity.',
          answer:
            '1. Legal Habitat Protection & Hunting Ban: Published an all-India list of protected species, banned hunting across India, and gave legal protection to wildlife habitats.\n2. Trade Curbs & Sanctuaries: Restricted trade in wildlife products and led central and state governments to establish national parks and wildlife sanctuaries (later launching specific species projects like Project Tiger in 1973).',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'Write a short note on Joint Forest Management (JFM) in India.',
          answer:
            '1. Origin (Odisha, 1988): JFM began formally in 1988 when Odisha passed the first resolution for joint management and restoration of degraded forests.\n2. Community–Department Partnership: Works through formation of local/village institutions undertaking protection activities mostly on degraded forest land managed by the Forest Department.\n3. Shared Incentives: In return for safeguarding forests, community members are entitled to intermediary benefits like non-timber forest produce and a share in timber harvested by "successful protection".',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Classify India’s forests into three categories on the basis of ownership/management and explain their state distribution.',
          answer:
            '1. Reserved Forests (>50% Share): Over half of India’s total forest land is declared Reserved Forest — considered the most valuable for conserving forest and wildlife resources.\n2. Distribution of Reserved Forests: Jammu & Kashmir, Andhra Pradesh, Uttarakhand, Kerala, Tamil Nadu, West Bengal, and Maharashtra have large shares.\n3. Protected Forests (~1/3rd Share): Almost one-third of forest area is Protected Forest, safeguarded against any further depletion; major shares lie in Bihar, Haryana, Punjab, Himachal Pradesh, Odisha, and Rajasthan.\n4. Permanent Forest Estates Note: Together, Reserved and Protected forests form Permanent Forest Estates, with Madhya Pradesh holding the largest share (75% of its forest area).\n5. Unclassed Forests: Forests and wastelands belonging to government as well as private individuals and local communities; very high shares occur in all North-Eastern states and parts of Gujarat.',
        },
      ],
    },
  ],
};
