import { Subtopic } from '../../../types/curriculum';

export const sstCiv06BoardMastery: Subtopic = {
  id: 'sst-civ-mastery',
  slug: 'civics-board-mastery',
  title: 'Civics Board Mastery: Cartoons, Lists & 5M Blueprint',
  subtitle:
    'Interactive NCERT Political Cartoon Decoder, All-5-Chapters Numbers & Comparison Cheat Sheet, Top 8 Traps & Offline Civics Quiz Arena',
  estimatedMinutes: 35,
  difficulty: 'Board Mastery',
  ncertSection: 'Democratic Politics II — Chapters 1–5 Synthesis',
  learningObjectives: [
    'Decode all four high-probability NCERT Democratic Politics II political cartoons in 1M/2M CBSE format.',
    'Review every key Civics percentage, constitutional amendment year, legislative list, and party recognition rule on one sheet.',
    'Eliminate the top 8 Civics Section A Assertion–Reason and classification traps.',
    'Score 90%+ on the filterable Social Science Quiz Arena (Civics unit).',
  ],
  keywords: [
    'Civics cartoons',
    'Two steering wheels',
    'Tight rein democracy',
    'Begging bowl states',
    'Women reservation cartoon',
    'Civics quiz',
    'Democratic Politics revision',
  ],
  sections: [
    {
      id: 'civ-mastery-cartoons',
      title: 'Interactive NCERT Political Cartoon Decoder (Ch 1–4)',
      blocks: [
        {
          type: 'visual-diagram',
          diagramId: 'civics-cartoon-gallery',
          title: 'Top 4 CBSE Board Civics Cartoons — Visual Clue + Model Answer',
          caption:
            'Click Cartoon 1–4 above to review the exact context and 1M/2M examiner wording for picture-based Section A/B questions.',
        },
      ],
    },
    {
      id: 'civ-mastery-cheatsheet',
      title: 'All-5-Chapters Rapid Numbers, Lists & Traps Cheat Sheet',
      blocks: [
        {
          type: 'table',
          caption: 'Civics Must-Memorise Numbers, Dates & Rules at a Glance',
          headers: ['Chapter', 'Key Benchmark / Year / Rule', 'CBSE Exam Pitfall to Avoid'],
          rows: [
            [
              'Ch 1: Power-sharing',
              'Belgium: 59% Dutch, 40% French, 1% German; Brussels: 80% French, 20% Dutch; 4 Amendments (1970–93).\nSri Lanka: 74% Sinhala, 18% Tamils (13% SL + 5% Indian); 1956 Official Language Act.',
              'Horizontal = 3 organs (Checks & Balances); Vertical = 3 tiers (Federalism). Do not swap them!',
            ],
            [
              'Ch 2: Federalism',
              '22 Scheduled Languages (Hindi + 21 others); Union/State/Concurrent/Residuary; 1992 Decentralisation (≥1/3rd women, State EC); 2/3rd Parliament + ≥50% States to amend federal structure.',
              'Hindi is an Official Language, NOT National Language; Education & Forests = Concurrent List; Software = Residuary (Union).',
            ],
            [
              'Ch 3: Gender, Religion & Caste',
              'Literacy: 54% women vs. 76% men; Equal Remuneration Act 1976; Child Sex Ratio 919; Women’s Reservation Act 2023 (33% Lok Sabha & Assemblies); 5 Secular features.',
              'Gandhiji meant moral ethics from religions, NOT communal politics; Indian Secularism ALLOWS State reform (e.g., banning untouchability).',
            ],
            [
              'Ch 4: Political Parties',
              'State Party: 6% State votes + 2 seats.\nNational Party: 6% LS/4-State votes + 4 LS seats.\n6 National Parties: INC (1885), CPI-M (1964), BJP (1980), BSP (1984), AAP (2012), NPP (2013).',
              'Separate 3 Enacted Reforms (Anti-Defection, SC Affidavit, EC ITR/internal poll order) from Suggested Reforms (State funding, 1/3rd party ticket quota).',
            ],
            [
              'Ch 5: Outcomes of Democracy',
              'Accountable + Responsive + Legitimate; Transparency = right to examine decision process; 2 Conditions for Social Diversity; 1950–2000 growth data nuance.',
              'Political equality (1 vote) has NOT cured economic inequality; citizen complaints prove democracy’s success, not failure.',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'trap',
          title: '5-Mark Answer Presentation Rule for Civics',
          body: 'Write every 5-mark Civics answer as **5 numbered, bold-headed bullet points** (~25 words each = ~120 words total), placing the NCERT keyword first (e.g., **1. Community Government:** ...). Avoid single dense paragraphs.',
        },
      ],
    },
    {
      id: 'sst-civics-quiz-section',
      title: 'Social Science Offline Quiz Arena (All 5 Topics: History • Civics • Economics • Geography • Map Mastery — 125 Qs)',
      blocks: [
        {
          type: 'lab',
          labId: 'sst-quiz-arena',
          title: 'CBSE Class 10 Social Science (Code 087) Self-Test Arena',
          caption:
            'Filter by "History", "Democratic Politics II (Civics)", "Economics + G20", "Geography", or "India Map & Mastery" (125 Qs total) with instant NCERT explanations & Assertion–Reason trap alerts.',
        },
      ],
    },
  ],
};
