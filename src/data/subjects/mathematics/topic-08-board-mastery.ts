import { Topic } from '../../../types/curriculum';
import { mathMastery01SillyMistakeClinic } from './mastery-01-silly-mistake-clinic';
import { mathMastery02EndlessDrillAndBlueprint } from './mastery-02-endless-drill-and-80m-blueprint';

export const topicMathBoardMastery: Topic = {
  id: 'math-topic-8',
  slug: 'math-board-mastery',
  order: 8,
  title: '80M Board Mastery, Silly-Mistake Surgery & Endless Drill',
  description:
    'Spot-the-slip step clinic, unlimited parameterized Standard (041) screen-to-notebook drill engine with stopwatch & Silly-Mistake Radar, 15-day plan, and 75+ Q Quiz Arena.',
  ncertChapter: 'Complete 80-Mark Mathematics Standard (041) Readiness Hub',
  subtopics: [
    mathMastery01SillyMistakeClinic,
    mathMastery02EndlessDrillAndBlueprint,
  ],
};
