import { Topic } from '../../../types/curriculum';
import { englishWriting01LettersA } from './writing-01-formal-letter-editor-complaint';
import { englishWriting02LettersB } from './writing-02-formal-letter-order-inquiry';
import { englishWriting03Analytical } from './writing-03-analytical-paragraph';
import { englishWriting04Mastery } from './writing-04-board-mastery-80m';

export const topicWritingSkills: Topic = {
  id: 'topic-eng-writing-skills',
  slug: 'english-writing-skills',
  order: 5,
  title: 'Creative Writing Skills & 80M Strategy (10 Marks)',
  description:
    'Master 5-mark Formal Letters (Editor, Complaint, Order, Inquiry) and 5-mark Analytical Paragraphs (Charts, Tables, SWOT & Maps) with 10 styled CBSE models plus the complete 80-mark 180-minute board execution blueprint.',
  ncertChapter: 'Section B Writing (Formal Letter 5M + Analytical Paragraph 5M) & Full Paper Blueprint',
  subtopics: [
    englishWriting01LettersA,
    englishWriting02LettersB,
    englishWriting03Analytical,
    englishWriting04Mastery,
  ],
};
