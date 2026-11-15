import { Topic } from '../../../types/curriculum';
import { sstEco01 } from './eco-01-development';
import { sstEco02 } from './eco-02-sectors-of-indian-economy';
import { sstEco03 } from './eco-03-money-and-credit';
import { sstEco04 } from './eco-04-globalization-and-g20';
import { sstEco05BoardMastery } from './eco-05-board-mastery';

export const topicEconomics: Topic = {
  id: 'topic-sst-economics',
  slug: 'sst-economics',
  order: 3,
  title: 'Economics: Understanding Economic Development (20 Marks)',
  description:
    'Complete CBSE Economics mastery: Development (HDI/BMI/Sustainability), Sectors of the Indian Economy (GDP/MGNREGA), Money & Credit (RBI/SHGs), Globalization (What & Factors) + dedicated G20 exam module.',
  ncertChapter: 'Understanding Economic Development: Chapters 1–4 + G20',
  subtopics: [
    sstEco01,
    sstEco02,
    sstEco03,
    sstEco04,
    sstEco05BoardMastery,
  ],
};
