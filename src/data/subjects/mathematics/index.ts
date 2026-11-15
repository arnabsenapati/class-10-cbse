import { Subject } from '../../../types/curriculum';
import { topicMathNumberSystems } from './topic-01-number-systems';
import { topicMathAlgebra } from './topic-02-algebra';
import { topicMathCoordinateGeometry } from './topic-03-coordinate-geometry';
import { topicMathGeometry } from './topic-04-geometry';
import { topicMathTrigonometry } from './topic-05-trigonometry';
import { topicMathMensuration } from './topic-06-mensuration';
import { topicMathStatsProbability } from './topic-07-stats-probability';
import { topicMathBoardMastery } from './topic-08-board-mastery';

export const mathematicsSubject: Subject = {
  id: 'subject-mathematics',
  slug: 'mathematics',
  name: 'Mathematics (Standard)',
  board: 'CBSE Class 10 Standard (Code 041)',
  grade: 'Class 10',
  description:
    'Complete 80-Mark rationalized CBSE Class 10 Mathematics Standard (Ch 1–14) engineered for Screen-to-Notebook hand-practice with anti-spoiler Mid-Way Checkpoints, Silly-Mistake Surgery Clinic, and Unlimited Drill Generator.',
  accentColor: '#2563eb',
  topics: [
    topicMathNumberSystems,
    topicMathAlgebra,
    topicMathCoordinateGeometry,
    topicMathGeometry,
    topicMathTrigonometry,
    topicMathMensuration,
    topicMathStatsProbability,
    topicMathBoardMastery,
  ],
};
