import { Topic } from '../../../types/curriculum';
import { ch06Triangles } from './ch06-triangles';
import { ch10Circles } from './ch10-circles';

export const topicMathGeometry: Topic = {
  id: 'math-topic-4',
  slug: 'math-geometry',
  order: 4,
  title: 'Unit IV: Geometry (15 Marks)',
  description:
    'Complete 15-mark proof unit featuring BPT (Theorem 6.1), vertex-matched similarity (AAA, SAS, SSS), Theorems 10.1 & 10.2, circumscribed quads, and the 4 cm inradius Heron rider.',
  ncertChapter: 'Chapters 6 & 10: Triangles & Circles',
  subtopics: [ch06Triangles, ch10Circles],
};
