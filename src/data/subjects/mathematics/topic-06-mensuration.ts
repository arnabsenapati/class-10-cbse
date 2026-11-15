import { Topic } from '../../../types/curriculum';
import { ch11AreasRelatedToCircles } from './ch11-areas-related-to-circles';
import { ch12SurfaceAreasAndVolumes } from './ch12-surface-areas-and-volumes';

export const topicMathMensuration: Topic = {
  id: 'math-topic-6',
  slug: 'math-mensuration',
  order: 6,
  title: 'Unit VI: Mensuration (10 Marks)',
  description:
    'Sectors, sector perimeters (l + 2r), 60°/90°/120° segments, and exposed CSA vs volume of combined 3D solids while keeping π symbolic until cancellation.',
  ncertChapter: 'Chapters 11 & 12: Areas Related to Circles & Surface Areas/Volumes',
  subtopics: [ch11AreasRelatedToCircles, ch12SurfaceAreasAndVolumes],
};
