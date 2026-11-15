import { Topic } from '../../../types/curriculum';
import { sstCiv01 } from './civ-01-power-sharing';
import { sstCiv02 } from './civ-02-federalism';
import { sstCiv03 } from './civ-03-gender-religion-caste';
import { sstCiv04 } from './civ-04-political-parties';
import { sstCiv05 } from './civ-05-outcomes-of-democracy';
import { sstCiv06BoardMastery } from './civ-06-board-mastery';

export const topicCivics: Topic = {
  id: 'topic-sst-civics',
  slug: 'sst-civics',
  order: 2,
  title: 'Democratic Politics II (Civics — 20 Marks)',
  description:
    'Complete 5-chapter CBSE Civics mastery (Power-sharing, Federalism, Gender-Religion-Caste, Political Parties & Outcomes of Democracy) with institutional diagrams, NCERT cartoon decoders, 4-mark source extracts, and 5-mark sub-headed answers.',
  ncertChapter: 'Democratic Politics II: Chapters 1–5',
  subtopics: [
    sstCiv01,
    sstCiv02,
    sstCiv03,
    sstCiv04,
    sstCiv05,
    sstCiv06BoardMastery,
  ],
};
