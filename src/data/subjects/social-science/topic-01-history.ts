import { Topic } from '../../../types/curriculum';
import { sstHist01 } from './hist-01-nationalism-in-europe';
import { sstHist02 } from './hist-02-nationalism-in-india';
import { sstHist03 } from './hist-03-making-of-global-world';
import { sstHist04 } from './hist-04-print-culture-modern-world';
import { sstHist05BoardMastery } from './hist-05-board-mastery';

export const topicHistory: Topic = {
  id: 'topic-sst-history',
  slug: 'sst-history',
  order: 1,
  title: 'History: India and the Contemporary World II (20 Marks)',
  description:
    'Complete CBSE History mastery aligned to your 23-Nov-2026 syllabus: Ch 1 Nationalism in Europe, Ch 2 Nationalism in India (+ 2M Map items), Ch 3 The Making of a Global World (strictly 1 to 1.3), and Ch 5 Print Culture & the Modern World, with interactive Chronology & Author Matcher Lab.',
  ncertChapter: 'History: Ch 1, Ch 2, Ch 3 (1–1.3) & Ch 5',
  subtopics: [
    sstHist01,
    sstHist02,
    sstHist03,
    sstHist04,
    sstHist05BoardMastery,
  ],
};
