import { Subtopic } from '../../../types/curriculum';

export const sstMap01: Subtopic = {
  id: 'sst-map-01',
  slug: 'india-map-work-mastery-lab',
  title: 'Section F India SVG Map Lab: All 88 Pins & Clues (5 Marks)',
  subtitle:
    'Question 37a (History Ch 2 — 2 Marks) + Question 37b (Geography Ch 1, 3, 4, 5, 6 & Ch 7 Map-Only — 3 Marks): Interactive SVG Atlas, 15-Prompt Board Simulator & State Disambiguator',
  estimatedMinutes: 35,
  difficulty: 'Board Mastery',
  ncertSection: 'CBSE Code 087 — Section F Map Skill Based Question (Q37a + Q37b = 5 Marks)',
  learningObjectives: [
    'Practise all 74 official CBSE point pins and 14 regional soil/crop zones offline on the interactive India SVG Map Lab.',
    'Distinguish strictly between Identification-Only CBSE items (Soils, Crops, Iron/Coal/Oil, Q37a A/B) and Locating & Labelling items (Dams, Thermal/Nuclear, Steel/Cotton/STP, Sea Ports/Airports).',
    'Eliminate same-state cluster swaps in Gujarat (10 pins), Tamil Nadu (9 pins), Maharashtra, East Steel Belt, and Karnataka.',
  ],
  keywords: [
    'Q37a History map',
    'Q37b Geography map',
    'India outline map CBSE',
    'Identification vs Locating',
    'Kheda vs Ahmedabad',
    'Kakrapara vs Kalpakkam',
    'Sea ports international airports map',
  ],
  sections: [
    {
      id: 'sst-india-map-lab-section',
      title: 'Interactive Lab: 88-Item India SVG Map Atlas, Q37 Simulator & State Disambiguator',
      blocks: [
        {
          type: 'callout',
          variant: 'law',
          title: 'How CBSE Section F Awards 5 Guaranteed Marks (23 Nov 2026 Exam Blueprint)',
          body: 'Question 37 is split cleanly into two sub-questions tied strictly to official NCERT chapters:',
          bullets: [
            'Q37a (History — 2 Marks): Two pre-marked points A and B are printed on the political outline map of India from Ch 2 (Nationalism in India: 3 INC Sessions + 6 Satyagraha/Movement Centres). Identify both features and write their correct city names on the lines drawn near them.',
            'Q37b (Geography — 3 Marks): Attempt ANY THREE out of 4 printed items covering Ch 1 (Soils), Ch 3 (8 Dams), Ch 4 (Rice/Wheat/Cash Crops), Ch 5 (Iron/Coal/Oil + Thermal/Nuclear Plants), Ch 6 (Cotton/Steel/Software Parks), and Ch 7 (ONLY Map Pointing: 10 Sea Ports + 6 Intl Airports).',
          ],
        },
        {
          type: 'lab',
          labId: 'sst-india-map-lab',
          title: 'Section F Interactive India SVG Map Lab (All 88 Official CBSE Pins & Zones)',
          caption:
            'Explore all 74 point pins & 14 Soil/Crop zones, test your speed on 15 Q37 board prompts directly on the SVG map, and inspect Gujarat/TN/East India crowded clusters.',
        },
      ],
    },
    {
      id: 'map-01-master-checklist-and-traps',
      title: 'Identification vs. Locating Master Checklist, 5 Map Blunders & Q37 Model Practice',
      blocks: [
        {
          type: 'table',
          caption: 'Official CBSE Section F Map Classification — What Must Be Identified vs. Plotted?',
          headers: ['Chapter', 'Board Task Mode', 'Exact Features on 23-Nov-2026 CBSE Map Syllabus'],
          rows: [
            [
              'History Ch 2: Nationalism in India (Q37a — 2M)',
              'Labelling & Identification (normally pre-marked A & B)',
              'INC Sessions (3): Calcutta (Sep 1920), Nagpur (Dec 1920), Madras (1927). Centres (6): Champaran (Bihar), Kheda & Ahmedabad (GJ), Amritsar (PB), Chauri Chaura (UP), Dandi (GJ).',
            ],
            [
              'Geography Ch 1: Resources & Development',
              'Identification ONLY (shaded zone given)',
              'Major Soil Types (6): Alluvial, Black (Regur), Red & Yellow, Laterite, Arid, Forest & Mountain.',
            ],
            [
              'Geography Ch 2: Forest & Wildlife',
              'ZERO Map Items',
              'Theory only — no national parks or tiger reserves tested on Section F map.',
            ],
            [
              'Geography Ch 3: Water Resources',
              'Locating & Labelling (8 Dams)',
              'Salal (Chenab, J&K), Bhakra Nangal (Sutlej, HP/PB), Tehri (Bhagirathi, UK), Rana Pratap Sagar (Chambal, RJ), Sardar Sarovar (Narmada, GJ), Hirakud (Mahanadi, OD), Nagarjuna Sagar (Krishna, TS/AP), Tungabhadra (KA).',
            ],
            [
              'Geography Ch 4: Agriculture',
              'Identification ONLY (belts & leading states)',
              'Major Rice & Wheat areas + Largest/major producer states for Sugarcane (UP), Tea (Assam), Coffee (KA), Rubber (KL), Cotton (GJ/MH), Jute (WB).',
            ],
            [
              'Geography Ch 5A: Minerals & Oil',
              'Identification ONLY (15 pins)',
              'Iron Ore (5): Mayurbhanj, Durg, Bailadila, Bellary, Kudremukh | Coal (4): Raniganj, Bokaro, Talcher, Neyveli | Oil (6): Digboi, Naharkatiya, Mumbai High, Bassien, Kalol, Ankaleshwar.',
            ],
            [
              'Geography Ch 5B: Power Plants',
              'Locating & Labelling (7 pins)',
              'Thermal (3): Namrup (AS), Singrauli (MP), Ramagundam (TS) | Nuclear (4): Narora (UP), Kakrapara (GJ), Tarapur (MH), Kalpakkam (TN).',
            ],
            [
              'Geography Ch 6: Manufacturing',
              'Locating & Labelling (19 pins)',
              'Cotton (5): Mumbai, Indore, Surat, Kanpur, Coimbatore | Steel (6): Durgapur, Bokaro, Jamshedpur, Bhilai, Vijayanagar, Salem | STP (8): Noida, Gandhinagar, Mumbai, Pune, Hyderabad, Bengaluru, Chennai, Thiruvananthapuram.',
            ],
            [
              'Geography Ch 7: Lifelines (MAP ONLY)',
              'Locating & Labelling (16 pins — Zero Theory!)',
              '10 Major Sea Ports (W: Kandla, Mumbai, Marmagao, New Mangalore, Kochi | E: Tuticorin, Chennai, Vishakhapatnam, Paradwip, Haldia) + 6 Intl Airports (Amritsar–Raja Sansi, Delhi–IGIA, Mumbai–CSM, Chennai–Meenam Bakkam, Kolkata–NSCB, Hyderabad–Rajiv Gandhi).',
            ],
          ],
        },
        {
          type: 'notebook-mistake',
          studentName: 'Aarav',
          title: 'Five Classic Blank-Map Plotting Blunders That Cost Full Marks in Section F',
          wrongWork:
            '1) Marked Mumbai High & Bassien on the Maharashtra mainland coast.\n2) Labelled Hirakud Dam on the Odisha coast instead of NW Odisha Mahanadi basin.\n3) Swapped Kakrapara (Gujarat) with Kalpakkam (Tamil Nadu).\n4) Forgot to write both state-clue AND feature name clearly on the attached India map.\n5) Plotted all 4 Geography items in Q37b without leaving clarity on which 3 are best, or forgot tying the map inside the main answer booklet.',
          teacherFix:
            '1) Mumbai High & Bassien are OFFSHORE inside the Arabian Sea (Mumbai High farther WNW, Bassien closer to Vasai/Palghar coast).\n2) On the Odisha coast lies PARADWIP Port; inland north-west Odisha on River Mahanadi lies HIRAKUD Dam.\n3) KAKRAPARA = Gujarat (east of Surat on Tapi); KALPAKKAM = Tamil Nadu coast (south of Chennai).\n4) Use a sharp dark pencil/blue pen to put an exact dot (•), draw a neat horizontal leader arrow/line, and write BOTH the item number (e.g., "(ii) Hirakud Dam") and name legibly.\n5) Tie the detached outline India map firmly right behind your main Section F page!',
          whyWrong:
            'Examiners evaluate Section F directly by state boundary accuracy plus river/coastal alignment.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Section F Exam-Hall Verification: Select ALL THREE statements that are 100% accurate CBSE Map rules:',
          options: [
            {
              id: 'ch7-only-map',
              label: 'Geography Ch 7 (Lifelines of National Economy) tests ONLY Map Pointing (10 Sea Ports + 6 Airports) in Q37b — zero written theory.',
            },
            {
              id: 'bhakra-sutlej',
              label: 'Bhakra Nangal sits on River Sutlej along the HP–Punjab border, whereas Salal sits on River Chenab in J&K.',
            },
            {
              id: 'narora-up',
              label: 'Narora Nuclear Plant is in Uttar Pradesh, while Tarapur Nuclear Plant is on coastal Maharashtra north of Mumbai.',
            },
            {
              id: 'marmagao-ka',
              label: 'Marmagao Sea Port lies in Karnataka and New Mangalore Port lies in Goa.',
            },
          ],
          correctIds: ['ch7-only-map', 'bhakra-sutlej', 'narora-up'],
          multiSelect: true,
          successMsg:
            '100% Full 5-Mark Map Precision! You avoided the Marmagao (Goa) vs. New Mangalore (Karnataka) trap cleanly.',
          hintMsg:
            'Check West Coast port order: Kandla (GJ) → Mumbai (MH) → Marmagao (Goa) → New Mangalore (KA) → Kochi (KL).',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Board Section F Full Drill (2 + 3 = 5 Marks): Answer Q37a & Q37b using exact Board-style clues:\n(a) Identify these two History features (2 Marks):\n  A: Place in Gujarat where Mahatma Gandhi launched a Satyagraha for cotton mill workers in 1918.\n  B: Place where the December 1920 Indian National Congress Session formally adopted Non-Cooperation.\n(b) State exact State/Location & one identifying hallmark for these three Geography pins (3 Marks):\n  (i) The nuclear power station located in Gujarat.\n  (ii) The deepest landlocked, well-protected sea port on India’s East Coast.\n  (iii) The iron and steel plant situated in Chhattisgarh fed by Durg–Bastar hematite ore.',
          answer:
            '(a) Q37a History Identification (2 Marks):\n• Feature A: Ahmedabad (Central Gujarat — Cotton Mill Workers Satyagraha, 1918).\n• Feature B: Nagpur (Eastern Maharashtra / Vidarbha — December 1920 INC Session).\n\n(b) Q37b Geography Locating & Labelling (3 Marks):\n• (i) Kakrapara Nuclear Power Station — South Gujarat (east of Surat on River Tapi).\n• (ii) Vishakhapatnam Sea Port — Northern Andhra Pradesh coast (handles Bailadila high-grade iron-ore exports).\n• (iii) Bhilai Iron & Steel Plant — Central Chhattisgarh plateau (near Durg/Raipur).',
          markingTip:
            'Write clear Q37a A/B answers in BOTH your answer sheet (if instructed) AND beside lines A & B on the outline India map.',
        },
      ],
    },
  ],
};
