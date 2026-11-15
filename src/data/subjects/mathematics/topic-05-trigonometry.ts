import { Topic } from '../../../types/curriculum';
import { ch08IntroTrigonometry } from './ch08-intro-trigonometry';
import { ch09ApplicationsTrigonometry } from './ch09-applications-trigonometry';

export const topicMathTrigonometry: Topic = {
  id: 'math-topic-5',
  slug: 'math-trigonometry',
  order: 5,
  title: 'Unit V: Trigonometry (12 Marks)',
  description:
    'Standard-angle hand calculation (0°–90°), trigonometric identity proofs without cancelling slips, and 5-mark Heights & Distances two-angle sightline problems.',
  ncertChapter: 'Chapters 8 & 9: Introduction & Applications of Trigonometry',
  subtopics: [ch08IntroTrigonometry, ch09ApplicationsTrigonometry],
};
