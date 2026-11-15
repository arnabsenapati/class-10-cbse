import { Topic } from '../../../types/curriculum';
import { ch01RealNumbers } from './ch01-real-numbers';

export const topicMathNumberSystems: Topic = {
  id: 'math-topic-1',
  slug: 'math-number-systems',
  order: 1,
  title: 'Unit I: Number Systems (6 Marks)',
  description:
    'Master prime factorisation, HCF × LCM = a × b, remainder/bell word problems, and verbatim contradiction proofs for √2, √3, √5 & 3 + 2√5.',
  ncertChapter: 'Chapter 1: Real Numbers (Rationalized)',
  subtopics: [ch01RealNumbers],
};
