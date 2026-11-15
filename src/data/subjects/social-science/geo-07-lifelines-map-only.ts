import { Subtopic } from '../../../types/curriculum';

export const sstGeo07: Subtopic = {
  id: 'sst-geo-07',
  slug: 'lifelines-of-national-economy-map',
  title: 'Ch 7: Lifelines of the National Economy (Only Map Pointing)',
  subtitle:
    'Geography | STRICT 23-Nov-2026 Exam Scope: MAP POINTING ONLY (Zero Theory!) — 10 Major Sea Ports (5 West Coast, 5 East Coast) & 6 International Airports',
  estimatedMinutes: 22,
  difficulty: 'Core CBSE',
  ncertSection: 'Geography Chapter 7 — Lifelines of the National Economy (ONLY Map Pointing)',
  learningObjectives: [
    'Observe the strict syllabus guardrail: prepare Chapter 7 exclusively for Q37b India Map Pointing (10 Major Sea Ports + 6 International Airports).',
    'Order all 5 West Coast Sea Ports (Kandla → Mumbai → Marmagao → New Mangalore → Kochi) North-to-South.',
    'Order all 5 East Coast Sea Ports (Tuticorin → Chennai → Vishakhapatnam → Paradwip → Haldia) South-to-North with harbour clues.',
    'Match all 6 International Airports by both City and Official Name (Raja Sansi, Indira Gandhi, Chhatrapati Shivaji, Meenam Bakkam, Netaji Subhash Chandra Bose, Rajiv Gandhi).',
  ],
  keywords: [
    'Map Pointing Only Ch 7',
    'Kandla Deendayal Tidal Port',
    'Marmagao New Mangalore',
    'Kochi Lagoon Port',
    'Tuticorin Chennai Vishakhapatnam',
    'Paradwip Haldia',
    'Raja Sansi Amritsar',
    'Meenam Bakkam Chennai',
    'Rajiv Gandhi Hyderabad',
  ],
  sections: [
    {
      id: 'geo-07-scope-and-ports-visual',
      title: 'Pillar 1: Strict CBSE Scope Guardrail & Interactive Coastline/Airport Explorer',
      blocks: [
        {
          type: 'callout',
          variant: 'trap',
          title: 'STRICT 23-NOV-2026 EXAM SCOPE: ONLY MAP POINTING FOR CHAPTER 7',
          body: 'Your official Social Science exam syllabus specifies: "Chapter 7. Lifelines of the National Economy (Only map pointing)". Do NOT waste revision hours memorising road-density or railway-gauge theory from this chapter — master the 10 Major Sea Ports and 6 International Airports below for Section F Map Pointing (Q37b)!',
        },
        {
          type: 'visual-diagram',
          diagramId: 'coastline-ports-and-airports',
          title: 'Interactive Coastline Decoder: 10 Major Sea Ports & 6 International Airports',
          caption:
            'Switch between the West vs. East Coast Ports and the 6 International Airports to lock in exact Board map clues.',
        },
      ],
    },
    {
      id: 'geo-07-ports-and-airports-tables',
      title: 'Pillar 2: Master 10 Ports + 6 Airports Clue Sheet, Mistake Trap & Map Checkpoint',
      blocks: [
        {
          type: 'table',
          caption: 'All 10 Major CBSE Sea Ports — State, Coast & Typical Board Map Prompt Clues',
          headers: ['Major Sea Port', 'Coast & State', 'CBSE Q37b Identification / Locating Clue'],
          rows: [
            ['1. Kandla (Deendayal Port)', 'West Coast — Gujarat (Gulf of Kuchchh)', 'First tidal port developed soon after Independence to ease Mumbai’s load after Karachi went to Pakistan.'],
            ['2. Mumbai', 'West Coast — Maharashtra', 'Biggest port in India with a spacious natural and well-sheltered harbour.'],
            ['3. Marmagao', 'West Coast — Goa', 'Premier iron ore exporting port (~50% of India’s iron ore exports).'],
            ['4. New Mangalore', 'West Coast — Karnataka', 'Caters to export of iron ore concentrates from Kudremukh mines.'],
            ['5. Kochi (Kochchi)', 'West Coast — Kerala', 'Extreme south-western port located at the entrance of a lagoon with a natural harbour.'],
            ['6. Tuticorin (Thoothukudi)', 'East Coast — Tamil Nadu (SE tip)', 'Extreme south-eastern port with a natural harbour and rich hinterland handling Sri Lanka/Maldives trade.'],
            ['7. Chennai', 'East Coast — Tamil Nadu', 'One of the oldest ARTIFICIAL ports of the country (next to Mumbai in trade volume).'],
            ['8. Vishakhapatnam', 'East Coast — Andhra Pradesh', 'Deepest landlocked and well-protected port (handles Bailadila iron-ore exports).'],
            ['9. Paradwip (Paradip)', 'East Coast — Odisha', 'Major East-coast port located in Odisha specialising in the export of iron ore.'],
            ['10. Haldia', 'East Coast — West Bengal', 'Subsidiary riverine port developed to relieve growing pressure on the Kolkata port.'],
          ],
        },
        {
          type: 'table',
          caption: 'All 6 Major International Airports on CBSE Class 10 Map List',
          headers: ['City & Region', 'Official Airport Name (Frequently Used Directly as Clue)', 'State'],
          rows: [
            ['1. Amritsar (NW India)', 'Raja Sansi (Sri Guru Ram Dass Jee International Airport)', 'Punjab (North-West border)'],
            ['2. Delhi (Northern Hub)', 'Indira Gandhi International Airport', 'Delhi NCR'],
            ['3. Mumbai (Western Hub)', 'Chhatrapati Shivaji Maharaj International Airport', 'Maharashtra'],
            ['4. Chennai (Southern Coast)', 'Meenam Bakkam International Airport', 'Tamil Nadu'],
            ['5. Kolkata (Eastern Hub)', 'Netaji Subhash Chandra Bose International Airport', 'West Bengal'],
            ['6. Hyderabad (Deccan Hub)', 'Rajiv Gandhi International Airport', 'Telangana'],
          ],
        },
        {
          type: 'notebook-mistake',
          studentName: 'Riya',
          title: 'Four Classic Ch 7 Map Label Mix-Ups',
          wrongWork:
            '1) Labelled Goa port as "New Mangalore" and Karnataka port as "Marmagao".\n2) Wrote "Chennai = deepest landlocked port" and "Vishakhapatnam = oldest artificial port".\n3) Marked "Raja Sansi Airport" in New Delhi.',
          teacherFix:
            '1) Goa = MARMAGAO ("M-Goa"); Karnataka = NEW MANGALORE ("Mangaluru").\n2) CHENNAI = oldest ARTIFICIAL port; VISHAKHAPATNAM = deepest LANDLOCKED well-protected port.\n3) Raja Sansi Airport is in AMRITSAR (Punjab); Delhi is Indira Gandhi International; Chennai is Meenam Bakkam.',
          whyWrong:
            'In Question 37b, CBSE frequently prints ONLY the clue ("Oldest artificial port", "Tidal port in Kuchchh", "Raja Sansi Airport") without printing the city name!',
        },
        {
          type: 'checkpoint',
          prompt:
            'Quick Map-Clue Drill: Select the TWO completely accurate Sea Port / Airport clues:',
          options: [
            {
              id: 'kandla',
              label: 'Kandla (Gujarat) was the first tidal port developed after Independence following the loss of Karachi port.',
            },
            {
              id: 'meenam',
              label: 'Meenam Bakkam International Airport is located in Chennai (Tamil Nadu).',
            },
            {
              id: 'kochi-se',
              label: 'Kochi is an extreme south-eastern artificial port located on the Odisha coast.',
            },
            {
              id: 'haldia-guj',
              label: 'Haldia was built in Gujarat as a subsidiary port to Mumbai.',
            },
          ],
          correctIds: ['kandla', 'meenam'],
          multiSelect: true,
          successMsg:
            '100% Spot On! Kandla (Gujarat) and Meenam Bakkam (Chennai) are locked in. Kochi is extreme SW (Kerala lagoon), and Haldia is in West Bengal (subsidiary to Kolkata).',
          hintMsg:
            'Check the coastline table: Kochi is in Kerala (West Coast) and Haldia relieves Kolkata (East Coast).',
        },
      ],
    },
  ],
};
