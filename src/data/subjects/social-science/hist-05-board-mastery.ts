import { Subtopic } from '../../../types/curriculum';

export const sstHist05BoardMastery: Subtopic = {
  id: 'sst-hist-mastery',
  slug: 'history-board-mastery',
  title: 'History Board Mastery: Chronology, Authors & Quiz Arena',
  subtitle:
    'Master Revision Sheet Across Ch 1, Ch 2, Ch 3 (1–1.3) & Ch 5 + Interactive Chronology Sorter & Book/Author Matcher Lab + Offline Social Science Quiz Arena',
  estimatedMinutes: 35,
  difficulty: 'Board Mastery',
  ncertSection: 'History — Ch 1, 2, 3 (1–1.3) & 5 Synthesis',
  learningObjectives: [
    'Lock down every crucial History date, book/newspaper, personality, treaty, and Ch 2 map pin on one rapid revision sheet.',
    'Sort 10 CBSE Section-A chronological event sets accurately using the interactive History Timeline Lab.',
    'Match 20 high-frequency History books, authors, symbols, and leaders without confusing similar names.',
    'Practice 28 History board-pattern MCQs, Chronology traps, Assertion–Reason & 4M source questions in the Quiz Arena.',
  ],
  keywords: [
    'History chronology lab',
    'Match the following History',
    'History cheat sheet',
    'History quiz arena',
    'CBSE History dates',
    'Books and authors Class 10',
  ],
  sections: [
    {
      id: 'hist-mastery-cheatsheet',
      title: 'All-4-Chapters Master Dates, Personalities, Treaties & Traps Cheat Sheet',
      blocks: [
        {
          type: 'table',
          caption: 'Rapid 20-Mark History Revision Grid (Aligned Strictly to 23-Nov-2026 Exam Syllabus)',
          headers: ['Chapter & Exam Weight', 'Essential Years, Books & Personalities', 'High-Frequency Section A Trap to Avoid'],
          rows: [
            [
              'Ch 1: Nationalism in Europe',
              '1789 French Rev | 1804 Civil Code | 1815 Treaty of Vienna (Metternich) | 1832 Treaty of Constantinople (Greece) | 1834 Zollverein | 1848 Sorrieu Print & Frankfurt Parliament (831) | 1859–61 Italy (Mazzini–Cavour–Garibaldi–Victor Emmanuel II) | 18 Jan 1871 Germany (Bismarck, William I, Versailles) | 1707 Act of Union & 1801 Ireland.',
              'Olive branch around sword = peace (NOT war); Frankfurt Parliament denied women voting rights; ONLY Sardinia-Piedmont was ruled by an Italian house.',
            ],
            [
              'Ch 2: Nationalism in India (+ 2M Map)',
              'Jan 1915 Gandhi returns | 1917 Champaran & Kheda | 1918 Ahmedabad | 13 Apr 1919 Jallianwala Bagh | Sep 1920 Calcutta & Dec 1920 Nagpur INC | Jan 1921 NCM | Feb 1922 Chauri Chaura | 1927 Madras INC & FICCI | 1928 Simon Commission | Dec 1929 Lahore Purna Swaraj (26 Jan 1930) | 12 Mar–6 Apr 1930 Dandi (240 miles, 78 volunteers) | 5 Mar 1931 Gandhi–Irwin | Sep 1932 Poona Pact.',
              'Map Swaps: Calcutta = Sep 1920, Nagpur = Dec 1920; Kheda = Peasants, Ahmedabad = Mill workers, Champaran = Indigo; Baba Ramchandra = Awadh vs. Alluri Sitaram Raju = Gudem Hills.',
            ],
            [
              'Ch 3: Global World (STRICTLY 1 to 1.3 ONLY)',
              '3000 BCE Indus–West Asia | Maldives cowries | Silk Routes (land & sea: Chinese silk/pottery + Indian spices ↔ European gold/silver + Buddhism/Christianity/Islam) | Columbus → potato, maize, tomato, chillies, soya, groundnuts | Mid-1840s Irish Potato Famine | 16th-c. Peru/Mexico silver, El Dorado, Smallpox conquest (John Winthrop 1634) | China isolation → Europe rises.',
              'ONLY Sections 1 to 1.3 are in syllabus (Ch 3 Sec 2–4 & Ch 4 omitted)! Potato/tomato/maize came FROM the Americas, NOT India.',
            ],
            [
              'Ch 5: Print Culture & the Modern World',
              'AD 594 China accordion woodblock | AD 768–70 Japan | AD 868 Diamond Sutra | Utamaro ukiyo | 1295 Marco Polo | 1448 Gutenberg Bible (180 copies) | 1517 Martin Luther 95 Theses | Menocchio & 1558 Index | Chapbooks & Bibliothèque Bleue | 1812 Grimm Brothers | Richard Hoe | 1556 Goa | 1780 Hickey Bengal Gazette | 1821 Sambad Kaumudi | 1867 Deoband | 1871 Gulamgiri | 1876 Amar Jiban | 1878 Vernacular Press Act (Irish laws) | 1907/08 Tilak Kesari | 1938 Kashibaba.',
              'First printed book in Japan = Diamond Sutra (AD 868), NOT Gutenberg; Hickey was persecuted by Warren Hastings; Vernacular Press Act (1878) followed Irish Press Laws.',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Last-Minute 1-to-1 Author & Work Memory Keys',
          body: 'Anandamath / Vande Mataram → Bankim Chandra Chattopadhyay | 1905 Ascetic Bharat Mata → Abanindranath Tagore | Hind Swaraj (1909) → Mahatma Gandhi | Folklore of Southern India → Natesa Sastri | Bengal Gazette (1780) → James Augustus Hickey | Sambad Kaumudi (1821) → Raja Rammohun Roy | Gulamgiri (1871) → Jyotiba Phule | Amar Jiban (1876) → Rashsundari Debi | Chhote Aur Bade Ka Sawal (1938) → Kashibaba | Kesari → Bal Gangadhar Tilak.',
        },
      ],
    },
    {
      id: 'sst-timeline-lab-section',
      title: 'Interactive Lab: History Chronology Order Sorter, Book/Author Matcher & Acts Drill',
      blocks: [
        {
          type: 'lab',
          labId: 'sst-timeline-lab',
          title: 'History Chronology Sorter & Book/Author/Treaty Matcher Lab',
          caption:
            'Practice CBSE Section-A chronological ordering questions (10 sets), match 20 iconic History personalities & books across 4 rounds, and test 12 Acts & Treaties.',
        },
      ],
    },
    {
      id: 'sst-history-quiz-section',
      title: 'Social Science Offline Quiz Arena (All 5 Topics: History • Civics • Economics • Geography • Map Mastery — 125 Qs)',
      blocks: [
        {
          type: 'lab',
          labId: 'sst-quiz-arena',
          title: 'CBSE Class 10 Social Science (Code 087) Self-Test & Source Arena',
          caption:
            'Select the "History" filter above the quiz to drill all 28 History board-pattern MCQs, Chronology traps & 4M source passages, or practice all 125 questions across all 5 SST topics.',
        },
      ],
    },
  ],
};
