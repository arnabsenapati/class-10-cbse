import { Subject } from '../../../types/curriculum';
import { topicFirstFlightProse } from './topic-01-first-flight-prose';
import { topicFirstFlightPoetry } from './topic-02-first-flight-poetry';
import { topicFootprintsWithoutFeet } from './topic-03-footprints-without-feet';

export const englishSubject: Subject = {
  id: 'subject-english',
  slug: 'english',
  name: 'English Language & Literature',
  board: 'CBSE Class 10 (Code 184)',
  grade: 'Class 10',
  description:
    'Complete 40-mark CBSE Literature mastery: First Flight Prose (Ch 1–9), First Flight Poetry (Poems 1–10) & Footprints without Feet (Ch 1–9), optional verbatim NCERT reader & PDFs, 5-mark Word Lens RTC extracts, Poetic Devices & Character Evolution Labs, 6-mark competency answers, and 84-Q Quiz Arena.',
  accentColor: '#4f46e5',
  topics: [topicFirstFlightProse, topicFirstFlightPoetry, topicFootprintsWithoutFeet],
};
