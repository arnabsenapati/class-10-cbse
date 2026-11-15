import { Topic } from '../../../types/curriculum';
import { sstMap01 } from './map-01-india-map-mastery-lab';
import { sstMap02BoardBlueprint } from './map-02-80m-board-blueprint';

export const topicMapMastery: Topic = {
  id: 'topic-sst-map-mastery',
  slug: 'sst-map-mastery',
  order: 5,
  title: 'Section F Map Work & 80-Mark Board Mastery (5M Map + Blueprint)',
  description:
    'Master Section F (Q37a History + Q37b Geography = 5 Marks) via the Interactive 88-Item India SVG Map Lab, follow the 80M Section A–F Blueprint, and drill all 125 offline board MCQs.',
  ncertChapter: 'Section F (Q37a + Q37b) India Map + 80M Exam Synthesis',
  subtopics: [sstMap01, sstMap02BoardBlueprint],
};
