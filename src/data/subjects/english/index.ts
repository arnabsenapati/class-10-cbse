import { Subject } from '../../../types/curriculum';
import { topicFirstFlightProse } from './topic-01-first-flight-prose';
import { topicFirstFlightPoetry } from './topic-02-first-flight-poetry';
import { topicFootprintsWithoutFeet } from './topic-03-footprints-without-feet';
import { topicReadingAndGrammar } from './topic-04-reading-and-grammar';
import { topicWritingSkills } from './topic-05-writing-skills';

export const englishSubject: Subject = {
  id: 'subject-english',
  slug: 'english',
  name: 'English Language & Literature',
  board: 'CBSE Class 10 (Code 184)',
  grade: 'Class 10',
  description:
    'Complete 80-mark CBSE English Language & Literature (Code 184) mastery across 5 units & 42 subtopics: Section A Reading (20M Discursive & Case-Based Factual Passages with Word Lens), Section B Grammar (10M rules + 50-Q Interactive Speed Lab) & Creative Writing (10M Formal Letters & Analytical Paragraphs), plus Section C Literature (First Flight Prose Ch 1–9, Poetry 1–10 & Footprints without Feet Ch 1–9 with optional NCERT reader & PDFs, Poetic Devices Lab, Character Evolution Trainer & 114-Q Quiz Arena).',
  accentColor: '#4f46e5',
  topics: [
    topicFirstFlightProse,
    topicFirstFlightPoetry,
    topicFootprintsWithoutFeet,
    topicReadingAndGrammar,
    topicWritingSkills,
  ],
};
