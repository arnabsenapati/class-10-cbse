import { Topic } from '../../../types/curriculum';
import { ch02Polynomials } from './ch02-polynomials';
import { ch03LinearEquations } from './ch03-linear-equations';
import { ch04QuadraticEquations } from './ch04-quadratic-equations';
import { ch05ArithmeticProgressions } from './ch05-arithmetic-progressions';

export const topicMathAlgebra: Topic = {
  id: 'math-topic-2',
  slug: 'math-algebra',
  order: 2,
  title: 'Unit II: Algebra (20 Marks)',
  description:
    'High-weightage 20-mark unit covering Polynomial zeroes (α, β), Linear Pairs (graphs & consistency), Quadratics (D = b² − 4ac & speed/tap problems), and Arithmetic Progressions.',
  ncertChapter: 'Chapters 2, 3, 4 & 5: Polynomials, Linear Pairs, Quadratics & APs',
  subtopics: [
    ch02Polynomials,
    ch03LinearEquations,
    ch04QuadraticEquations,
    ch05ArithmeticProgressions,
  ],
};
