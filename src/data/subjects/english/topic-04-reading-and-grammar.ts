import { Topic } from '../../../types/curriculum';
import { englishGrammar01Passages } from './grammar-01-unseen-passages';
import { englishGrammar02Determiners } from './grammar-02-determiners';
import { englishGrammar03Tenses } from './grammar-03-tenses';
import { englishGrammar04Sva } from './grammar-04-subject-verb-agreement';
import { englishGrammar05Modals } from './grammar-05-modals';
import { englishGrammar06ReportedSpeech } from './grammar-06-reported-speech';
import { englishGrammar07Mastery } from './grammar-07-board-mastery';

export const topicReadingAndGrammar: Topic = {
  id: 'topic-eng-reading-grammar',
  slug: 'english-reading-grammar',
  order: 4,
  title: 'Reading Comprehension & Grammar (30 Marks)',
  description:
    'Complete Section A (20M Discursive & Case-Based Factual Unseen Passages with Word Lens) + Section B Grammar (10M Determiners, Tenses, Subject–Verb Agreement, Modals & Reported Speech) plus the 50-Q Interactive Grammar Speed Lab.',
  ncertChapter: 'Section A (Unseen Passages 20M) & Section B (Grammar 10M)',
  subtopics: [
    englishGrammar01Passages,
    englishGrammar02Determiners,
    englishGrammar03Tenses,
    englishGrammar04Sva,
    englishGrammar05Modals,
    englishGrammar06ReportedSpeech,
    englishGrammar07Mastery,
  ],
};
