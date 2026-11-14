import { Topic } from '../../../types/curriculum';
import { englishProse01 } from './prose-01-letter-to-god';
import { englishProse02 } from './prose-02-nelson-mandela';
import { englishProse03 } from './prose-03-two-stories-flying';
import { englishProse04 } from './prose-04-anne-frank';
import { englishProse05 } from './prose-05-glimpses-of-india';
import { englishProse06 } from './prose-06-mijbil-the-otter';
import { englishProse07 } from './prose-07-madam-rides-the-bus';
import { englishProse08 } from './prose-08-sermon-at-benares';
import { englishProse09 } from './prose-09-the-proposal';
import { englishProse10Mastery } from './prose-10-board-mastery';

export const topicFirstFlightProse: Topic = {
  id: 'topic-eng-ff-prose',
  slug: 'first-flight-prose',
  order: 1,
  title: 'First Flight — Prose (Chapters 1–9)',
  description:
    'Complete 7-pillar board mastery of all 9 rationalized First Flight prose chapters: optional verbatim NCERT reader & PDFs, 5-mark RTC extracts with Word Lens, character adjectives, NCERT Q&As, 6-mark competency answers, and interactive RTC Quiz Arena.',
  ncertChapter: 'First Flight (Prose Chapters 1–9)',
  subtopics: [
    englishProse01,
    englishProse02,
    englishProse03,
    englishProse04,
    englishProse05,
    englishProse06,
    englishProse07,
    englishProse08,
    englishProse09,
    englishProse10Mastery,
  ],
};
