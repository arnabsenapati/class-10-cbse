import { Topic } from '../../../types/curriculum';
import { ch13Statistics } from './ch13-statistics';
import { ch14Probability } from './ch14-probability';

export const topicMathStatsProbability: Topic = {
  id: 'math-topic-7',
  slug: 'math-statistics-probability',
  order: 7,
  title: 'Unit VII: Statistics & Probability (11 Marks)',
  description:
    'Mean (Assumed/Step-Deviation), Mode, Median with missing frequencies (x, y) & ±0.5 adjustment, Empirical relation, plus coins, 2 dice, cards & leap-year probability.',
  ncertChapter: 'Chapters 13 & 14: Statistics & Probability (Rationalized)',
  subtopics: [ch13Statistics, ch14Probability],
};
