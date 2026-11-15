import { Subject } from '../../../types/curriculum';
import { topicHistory } from './topic-01-history';
import { topicCivics } from './topic-02-civics';
import { topicEconomics } from './topic-03-economics';
import { topicGeography } from './topic-04-geography';
import { topicMapMastery } from './topic-05-map-mastery';

export const socialScienceSubject: Subject = {
  id: 'subject-social-science',
  slug: 'social-science',
  name: 'Social Science',
  board: 'CBSE Class 10 (Code 087)',
  grade: 'Class 10',
  description:
    'Complete 80-mark CBSE Class 10 Social Science (23 Nov 2026) hub with discipline-specific study pillars and offline interactive tools — featuring all 5 active topics: History (20M: Ch 1, 2, 3[1–1.3], 5 + Chronology/Author Lab), Democratic Politics II / Civics (20M), Economics incl. G20 (20M), Geography (20M: Ch 1–6 + Ch 7 Map-Only), and Section F Interactive 88-Item India SVG Map Lab & 80M Blueprint.',
  accentColor: '#e11d48',
  topics: [topicHistory, topicCivics, topicEconomics, topicGeography, topicMapMastery],
};
