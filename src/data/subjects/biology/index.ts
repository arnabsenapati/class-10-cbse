import { Subject } from '../../../types/curriculum';
import { topicBasicsAndAlleles } from './topic-01-basics-alleles';
import { topicMendelAndPunnett } from './topic-02-mendel-punnett';
import { topicMonohybridCross } from './topic-03-monohybrid-cross';
import { topicDihybridCross } from './topic-04-dihybrid-cross';
import { topicCbseExamMastery } from './topic-05-cbse-exam-mastery';

export const biologySubject: Subject = {
  id: 'subject-biology',
  slug: 'biology',
  name: 'Biology',
  board: 'CBSE Class 10',
  grade: 'Class 10',
  description:
    'Complete NCERT Chapter 8 (Heredity) built from absolute basics: DNA & Alleles, Punnett Square Mastery, Monohybrid Cross, Dihybrid Cross, and CBSE Exam Practice.',
  accentColor: '#0f766e',
  topics: [
    topicBasicsAndAlleles,
    topicMendelAndPunnett,
    topicMonohybridCross,
    topicDihybridCross,
    topicCbseExamMastery,
  ],
};
