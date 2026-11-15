import { Subtopic } from '../../../types/curriculum';

export const sstGeo03: Subtopic = {
  id: 'sst-geo-03',
  slug: 'water-resources',
  title: 'Ch 3: Water Resources (+ 8 Map Dams)',
  subtitle:
    'Geography | Quantitative & Qualitative Scarcity, Jal Jeevan Mission, Dams Pros vs. Objections, Rainwater Harvesting (Tankas, Bamboo Drip, Tamil Nadu) & 8 CBSE Map Dams',
  estimatedMinutes: 38,
  difficulty: 'Core CBSE',
  ncertSection: 'Geography Chapter 3 — Water Resources (+ 8 Map Dams)',
  learningObjectives: [
    'Distinguish between quantitative water scarcity and qualitative water scarcity even in regions with abundant water.',
    'List ancient Indian hydraulic marvels alongside modern multi-purpose river projects ("temples of modern India") and 5 ecological/social objections.',
    'Explain regional rainwater harvesting techniques: Guls/Kuls, Khadins/Johads, Tankas (Palar Pani), Gendathur, Tamil Nadu compulsory law & Meghalaya Bamboo Drip.',
    'Pinpoint the exact River and State for all 8 compulsory CBSE Map Dams.',
  ],
  keywords: [
    'Water Scarcity',
    'Jal Jeevan Mission',
    'Atal Bhujal Yojana',
    'Temples of Modern India Dams',
    'Narmada Bachao Andolan',
    'Krishna Godavari Dispute',
    'Palar Pani Tankas',
    'Bamboo Drip Irrigation',
    'Gendathur Mysuru',
    '8 Map Dams',
  ],
  sections: [
    {
      id: 'geo-03-scarcity-and-jjm',
      title: 'Pillar 1: Quantitative vs. Qualitative Water Scarcity & National Water Missions',
      blocks: [
        {
          type: 'quick-summary',
          title: 'Why Can Regions With Ample Rainfall or Water Resources Still Suffer Water Scarcity?',
          bullets: [
            'Quantitative Over-Exploitation Causes: (1) Large & growing population demanding higher domestic use and more food grain (expanding irrigated agriculture → farmers’ own wells & tube-wells depleting falling groundwater tables); (2) Intensive industrialisation & urbanisation — heavy water use + cooling + hydroelectric power (~22% of total Indian electricity); housing societies pumping out groundwater directly.',
            'Qualitative Water Scarcity: Even when ample water is physically available, water quality drops because domestic and industrial wastes, chemicals, pesticides, and agricultural fertilisers render water hazardous for human use.',
            'Conservation Milestones: Atal Bhujal Yojana (Atal Jal) drives conservation in water-stressed gram panchayats across 7 states; Jal Jeevan Mission (JJM) aims to supply assured potable piped water @ 55 litres per capita per day to every rural household; Pradhan Mantri Krishi Sinchaee Yojana pushes "Har Khet Ko Pani" & "Per Drop More Crop".',
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'Four Famous Hydraulic Structures of Ancient India (1M/3M Question)',
          body: 'Sophisticated water conservation dates back millennia in India:',
          bullets: [
            '1st Century BCE: Sringaverapura (near Allahabad/Prayagraj) had an advanced harvesting system channelling flood water of the river Ganga.',
            'Chandragupta Maurya’s Time: Dams, lakes, and irrigation systems were extensively built (alongside ancient works in Kalinga, Nagarjunakonda, Bennur, Kolhapur).',
            '11th Century: Bhopal Lake — one of the largest artificial lakes of its time.',
            '14th Century: Tank in Hauz Khas (Delhi) constructed by Iltutmish to supply water to the Siri Fort area.',
          ],
        },
      ],
    },
    {
      id: 'geo-03-dams-pros-and-objections',
      title: 'Pillar 2: Multi-Purpose River Projects — Pros vs. Ecological & Social Objections',
      blocks: [
        {
          type: 'table',
          caption: 'Multi-Purpose River Valley Projects: Jawaharlal Nehru’s Vision vs. Contemporary Critique',
          headers: ['Why Dams Were Called "Temples of Modern India" (Benefits)', 'Five Core Objections & Ecological/Social Consequences'],
          rows: [
            [
              'Built not merely for irrigation, but integrated electricity generation (hydroelectricity), water supply for domestic/industrial use, flood control, recreation, inland navigation, and fish breeding (e.g., Bhakra–Nangal on Sutlej–Beas; Hirakud on Mahanadi).',
              '1. Sedimentation & Aquatic Habitat Harm: Regulating and damming affects natural river flow causing poorer sediment flow, excessive reservoir-bottom siltation, rockier stream beds, and blocked aquatic migration for spawning.',
            ],
            [
              'Nehru hoped integrated dam development would blend agriculture and village economy with rapid industrialisation and growth of the urban economy.',
              '2. Submergence & Social Displacement: Reservoirs submerge existing vegetation and fertile soil; sparked movements like Narmada Bachao Andolan (Sardar Sarovar Dam) and Tehri Dam Andolan over uncompensated loss of tribal/peasant livelihoods.',
            ],
            [
              'Canal irrigation transforms arid regions by supporting perennial agriculture and drinking supply.',
              '3. Cropping Shift & Salinisation: Assured irrigation lets farmers shift to water-intensive commercial crops causing soil salinisation & widening rich-landowner vs. landless-poor gaps.\n4. Inter-State Disputes & Sediment Floods: E.g., Krishna–Godavari dispute (Koyna diversion by Maharashtra) + reservoir silt release triggering devastating floods (2006 Maharashtra/Gujarat) and soil erosion.',
            ],
          ],
        },
      ],
    },
    {
      id: 'geo-03-rainwater-and-map-dams',
      title: 'Pillar 3 & 4: Rainwater Harvesting Visual + All 8 Compulsory CBSE Map Dams',
      blocks: [
        {
          type: 'visual-diagram',
          diagramId: 'rainwater-harvesting-and-dams',
          title: 'Interactive Diagram: Rooftop Rainwater Harvesting + Traditional Systems + 8 Map Dams',
          caption:
            'Inspect rooftop Tanka mechanics on Tab 1, then click Tab 2 to memorise the exact River & State of all 8 compulsory Board dams.',
        },
        {
          type: 'table',
          caption: 'COMPULSORY CBSE MAP LIST — 8 Multi-Purpose Dams (Q37b Locating & Labelling)',
          headers: ['Dam Name', 'River', 'State / Exact Location Clue on India Map'],
          rows: [
            ['1. Salal', 'Chenab', 'Jammu & Kashmir (North-most dam pin)'],
            ['2. Bhakra Nangal', 'Sutlej (Satluj)', 'Himachal Pradesh / Punjab border'],
            ['3. Tehri', 'Bhagirathi (Ganga)', 'Uttarakhand (Central Himalayas)'],
            ['4. Rana Pratap Sagar', 'Chambal', 'Rajasthan (South-Eastern Rajasthan)'],
            ['5. Sardar Sarovar', 'Narmada', 'Gujarat (Eastern Narmada valley)'],
            ['6. Hirakud', 'Mahanadi', 'Odisha (North-Western Odisha — longest earthen dam)'],
            ['7. Nagarjuna Sagar', 'Krishna', 'Telangana / Andhra Pradesh border'],
            ['8. Tungabhadra', 'Tungabhadra (Krishna tributary)', 'Karnataka (Central-East Karnataka)'],
          ],
        },
      ],
    },
    {
      id: 'geo-03-board-qa',
      title: 'Pillar 5 & 6: 4M Case Box, Student Map Mistake, Checkpoint & 2M/3M/5M Answers',
      blocks: [
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the Gendathur case study and answer (1 + 1 + 2 = 4 Marks):\n"In Gendathur, a remote backward village in Mysuru, Karnataka, villagers have installed, in their household’s rooftop, rainwater harvesting system to meet their water needs. Nearly 200 households have installed this system and the village has earned the rare distinction of being rich in rainwater. Gendathur receives an annual precipitation of 1,000 mm, and with 80 per cent of collection efficiency and of about 10 fillings, every house can collect and use about 50,000 litres of water annually."\n\nQuestions:\n(i) In which state is Gendathur village located, and which Indian state first made rooftop rainwater harvesting legally compulsory for all houses? (1M)\n(ii) What total amount of water is harvested by the 200 houses combined every year? (1M)\n(iii) Compare Gendathur’s modern rooftop method with traditional underground "tankas" in Phalodi/Barmer in two points. (2M)',
          answer:
            '(i) Gendathur is in Karnataka; Tamil Nadu is the first Indian state making rooftop rainwater harvesting legally compulsory across all houses.\n(ii) 200 houses × 50,000 litres = 1,00,00,000 litres (or as NCERT rounds/notes, 1,00,000 litres net cumulative units noted at household scale; 50,000 L × 200 households = 1 crore litres).\n(iii) Two points: (1) Both collect sloping-roof rainfall through PVC/pipes (cleaning the roof with the first shower) into underground storage; (2) In arid Rajasthan (Phalodi, Bikaner, Barmer), stored rainwater ("palar pani") also cools adjoining underground rooms built beside the tanka to beat summer heat, whereas Gendathur meets year-round household drinking/domestic demand in semi-humid Mysuru.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Nikhil',
          title: 'Two Dam Map & Term Traps in Geography Ch 3',
          wrongWork:
            '1) Marked "Hirakud Dam" in Jharkhand and "Tehri Dam" on River Sutlej.\n2) Wrote "Palar Pani is polluted groundwater pumped from tubewells."',
          teacherFix:
            '1) Hirakud Dam is on the MAHANADI river in ODISHA. Tehri Dam is on River BHAGIRATHI in UTTARAKHAND (Bhakra Nangal is on River Sutlej in HP/Punjab).\n2) Palar Pani is the Rajasthani folk term for rainwater — considered the PUREST form of natural water stored inside underground tankas.',
          whyWrong:
            'Map questions ask either directly by dam name or by river-and-state clue — matching Dam ↔ River ↔ State eliminates confusion.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Verify which TWO statements about Water Resources are completely accurate:',
          options: [
            {
              id: 'tamil-law',
              label: 'Tamil Nadu is the first state in India to make rooftop rainwater harvesting compulsory for all houses across the state.',
            },
            {
              id: 'bamboo-drip',
              label: 'Meghalaya uses a 200-year-old bamboo drip irrigation system tapping hill springs to deliver 20–80 drops/min to plant roots.',
            },
            {
              id: 'koyna-narmada',
              label: 'The Krishna–Godavari inter-state dispute arose over the Narmada Sardar Sarovar project.',
            },
            {
              id: 'salal-kaveri',
              label: 'Salal Dam is built on the Kaveri river in Tamil Nadu.',
            },
          ],
          correctIds: ['tamil-law', 'bamboo-drip'],
          multiSelect: true,
          successMsg:
            'Spot on! Tamil Nadu’s compulsory harvesting law and Meghalaya’s 200-year bamboo drip system are guaranteed MCQs. Krishna–Godavari involved Koyna diversion (Maharashtra), and Salal is on River Chenab (J&K).',
          hintMsg:
            'Check the dams table carefully: Salal is in the extreme north (J&K, Chenab river).',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'What is a "tanka" and what does "palar pani" mean in arid/semi-arid Rajasthan?',
          answer:
            '1. Tanka: Large underground room-sized tank (e.g., in Bikaner, Phalodi, Barmer) built inside the house or courtyard and connected to sloping rooftops via a pipe to store rainwater.\n2. Palar Pani: The local term in Rajasthan for rainwater stored in tankas, regarded as the purest form of natural water and a vital drinking reserve until the next monsoon.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'Explain why Shillong faces acute water shortage despite being just 55 km from Cherrapunjee and Mawsynram, and name two ways rooftop harvesting works in India.',
          answer:
            '1. Shillong Paradox: Although Cherrapunjee and Mawsynram receive the world’s highest rainfall, Shillong lies in a rain-shadow/steep hill terrain with rapid runoff; rooftop harvesting supplies 15–25% of household water needs.\n2. Roof-to-Tanka System: Sloping roofs channel rainwater through pipes (first shower flushed to clean pipes) into sand-brick filters and underground tankas.\n3. Legal Mandate (Tamil Nadu) & Gendathur: Tamil Nadu mandates rooftop harvesting legally for every building, while Gendathur (Karnataka) supplies ~200 households efficiently.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'In recent years, multi-purpose projects and large dams have come under great scrutiny and opposition for a variety of reasons. Explain any five reasons.',
          answer:
            '1. Altered Sediment Flow & Aquatic Habitats: Damming disrupts natural flow, trapping sediment in reservoirs while leaving downstream beds rockier and starving aquatic habitats.\n2. Blocked Fish Migration: Dams fragment rivers, preventing aquatic fauna from migrating upstream and downstream to spawn.\n3. Submergence of Forest & Soil: Impoundments submerge existing vegetation and rich soils, leading to slow organic decomposition.\n4. Social Displacement & Movements: Large-scale displacement of tribal and farming communities without adequate rehabilitation sparked resistance like Narmada Bachao Andolan and Tehri Dam Andolan.\n5. Cropping Shifts, Disputes & Floods: Water-intensive commercial cropping triggers soil salinisation, inter-state rivalries (Krishna–Godavari Koyna dispute), and even flood damage when heavy rains force sudden releases from silted reservoirs.',
        },
      ],
    },
  ],
};
