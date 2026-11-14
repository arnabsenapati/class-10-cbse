import { Topic } from '../../../types/curriculum';
import { englishFootprints01 } from './footprints-01-triumph-of-surgery';
import { englishFootprints02 } from './footprints-02-thiefs-story';
import { englishFootprints03 } from './footprints-03-midnight-visitor';
import { englishFootprints04 } from './footprints-04-question-of-trust';
import { englishFootprints05 } from './footprints-05-footprints-without-feet';
import { englishFootprints06 } from './footprints-06-making-of-a-scientist';
import { englishFootprints07 } from './footprints-07-the-necklace';
import { englishFootprints08 } from './footprints-08-bholi';
import { englishFootprints09 } from './footprints-09-book-that-saved-the-earth';
import { englishFootprints10Mastery } from './footprints-10-board-mastery';

export const topicFootprintsWithoutFeet: Topic = {
  id: 'topic-eng-footprints',
  slug: 'footprints-without-feet',
  order: 3,
  title: 'Footprints without Feet (Ch 1–9)',
  description:
    'Complete 7-pillar mastery of all 9 supplementary reader chapters: optional NCERT reader & PDFs, 5-mark RTC extracts with Word Lens, character evolution arcs, examiner trap alerts, 6-mark cross-book blueprints, and Interactive Character & Twist Trainer.',
  ncertChapter: 'Footprints without Feet (Chapters 1–9)',
  subtopics: [
    englishFootprints01,
    englishFootprints02,
    englishFootprints03,
    englishFootprints04,
    englishFootprints05,
    englishFootprints06,
    englishFootprints07,
    englishFootprints08,
    englishFootprints09,
    englishFootprints10Mastery,
  ],
};
