import { Subtopic } from '../../../types/curriculum';

export const sstEco05BoardMastery: Subtopic = {
  id: 'sst-eco-mastery',
  slug: 'economics-board-mastery',
  title: 'Economics Board Mastery: Data Tables, Numericals & G20',
  subtitle:
    'All-4-Chapters Formulas, NCERT Case Characters (Laxmi, Kanta, Kamal, Salim, Swapna, Cargill) & G20 Cheat Sheet + Offline Quiz Arena',
  estimatedMinutes: 30,
  difficulty: 'Board Mastery',
  ncertSection: 'Understanding Economic Development — Chapters 1–4 + G20 Synthesis',
  learningObjectives: [
    'Review every Economics formula (PCI, BMI, IMR, NAR, GDP Final Goods, Bank 15% Reserve) on one page.',
    'Recall all NCERT textbook case characters and company examples instantly for Section A MCQs and 4M case questions.',
    'Avoid the top 8 Economics examiner traps across all four chapters + G20.',
    'Complete the 52-question Social Science Quiz Arena filtered to Economics or full syllabus.',
  ],
  keywords: [
    'Economics formulas',
    'Laxmi',
    'Kanta and Kamal',
    'Salim and Swapna',
    'Cargill Parakh Foods',
    'Shyamal Arun Rama',
    'G20 cheat sheet',
    'Economics quiz',
  ],
  sections: [
    {
      id: 'eco-mastery-cheatsheet',
      title: 'All-4-Chapters Formula, Benchmark & Case-Character Cheat Sheet',
      blocks: [
        {
          type: 'table',
          caption: 'NCERT Case Characters & Real-World Examples (High-Frequency Section A & E MCQs)',
          headers: ['Chapter', 'NCERT Character / Case Example', 'Concept Demonstrated'],
          rows: [
            [
              'Ch 1: Development',
              'Country A vs. Country B (5 citizens, both PCI ₹10,000)\nHaryana vs. Kerala vs. Bihar',
              'Averages hide income disparities; income alone cannot buy public health, literacy & low IMR.',
            ],
            [
              'Ch 2: Sectors',
              'Laxmi (2-ha unirrigated plot, 5 family members)\nKanta (office) vs. Kamal (grocery shop)\nWheat ₹20 → Flour ₹25 → Biscuit ₹80',
              'Disguised unemployment (underemployment); Organised vs. Unorganised benefits; Final Goods vs. Double Counting.',
            ],
            [
              'Ch 3: Money & Credit',
              'Salim (3,000 shoes order) vs. Swapna (groundnuts)\nShyamal (trader 5%/mo), Arun (bank 8.5%/yr), Rama (landlord 5%/mo)\nKrishak Cooperative & Grameen Bank (M. Yunus)',
              'Positive credit vs. informal Debt Trap; Formal vs. Informal Terms of Credit; Cooperative & SHG collateral-free lending.',
            ],
            [
              'Ch 4: Globalization + G20',
              'Cargill Foods buying Parakh Foods\nFord Motors + Mahindra & Mahindra (Chennai)\nChinese toys in India; London magazine printed in Delhi\nG20 New Delhi 2023 (+ African Union)',
              'MNC acquisition; Joint production & Foreign Investment; Foreign trade price equalisation; ICT/Containerisation; G20 Vasudhaiva Kutumbakam.',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'trap',
          title: 'Top 8 Economics Board Exam Traps to Never Fall For',
          body: 'Check these 8 high-frequency Section A pitfalls right before submitting your paper:',
          bullets: [
            '1. Literacy Rate checks age **7+**, whereas Net Attendance Ratio (NAR) checks strictly **14 and 15 years**.',
            '2. BMI height MUST be in **metres squared** (`kg / m²`) and applies to adults, NOT growing children.',
            '3. World Bank WDR uses **ONLY Per Capita Income**; **UNDP** publishes **HDI** (Health + Education + Income).',
            '4. GDP sums ONLY **Final Goods & Services** produced within a country during a year — never intermediate wheat/flour.',
            '5. Primary sector employs **~44%** of India’s workforce while producing under **1/5th of GDP**; Tertiary produces **>55% of GDP** with **~31%** workforce.',
            '6. Banks keep **15%** as cash reserve to meet daily withdrawals and lend **85%**; **RBI** supervises formal banks, whereas **nobody** supervises informal moneylenders.',
            '7. Tax on imports is a **Trade Barrier**; REMOVING it (started in **1991**) is **Liberalisation**.',
            '8. G20 has **NO permanent secretariat**; it now includes **19 countries + EU + African Union (2023)**.',
          ],
        },
      ],
    },
    {
      id: 'sst-economics-quiz-section',
      title: 'Social Science Offline Quiz Arena (All 5 Topics: History • Civics • Economics • Geography • Map Mastery — 125 Qs)',
      blocks: [
        {
          type: 'lab',
          labId: 'sst-quiz-arena',
          title: 'CBSE Class 10 Social Science (Code 087) Self-Test Arena',
          caption:
            'Filter by "Economics + G20" or challenge yourself across all 125 questions spanning History, Civics, Economics, Geography & India Map Mastery.',
        },
      ],
    },
  ],
};
