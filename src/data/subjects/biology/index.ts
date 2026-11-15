import { Subject } from '../../../types/curriculum';
import { topicLifeProcessesPart1 } from './ch05-life-processes-part1';
import { topicLifeProcessesPart2 } from './ch05-life-processes-part2';
import { topicControlAndCoordination } from './ch06-control-and-coordination';
import { topicReproduction } from './ch07-how-do-organisms-reproduce';
import { topicBasicsAndAlleles } from './topic-01-basics-alleles';
import { topicMendelAndPunnett } from './topic-02-mendel-punnett';
import { topicMonohybridCross } from './topic-03-monohybrid-cross';
import { topicDihybridCross } from './topic-04-dihybrid-cross';
import { topicCbseExamMastery } from './topic-05-cbse-exam-mastery';
import { topicOurEnvironmentAndMastery } from './ch13-our-environment-and-mastery';

export const biologySubject: Subject = {
  id: 'subject-biology',
  slug: 'biology',
  name: 'Biology',
  board: 'CBSE Class 10',
  grade: 'Class 10',
  description:
    'Complete rationalized CBSE Class 10 Science Code 086 Biology (30 Marks): Life Processes (Ch 5), Control & Coordination (Ch 6), Reproduction (Ch 7), Heredity (Ch 8), and Our Environment + 80M Science Blueprint (Ch 13).',
  accentColor: '#0f766e',
  topics: [
    topicLifeProcessesPart1,
    topicLifeProcessesPart2,
    topicControlAndCoordination,
    topicReproduction,
    topicBasicsAndAlleles,
    topicMendelAndPunnett,
    topicMonohybridCross,
    topicDihybridCross,
    topicCbseExamMastery,
    topicOurEnvironmentAndMastery,
  ],
};
