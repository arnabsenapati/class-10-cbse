import { Subject } from '../../../types/curriculum';
import { topicSparshKavyakhand } from './topic-01-kavyakhand';
import { topicSparshGadyakhand } from './topic-02-gadyakhand';
import { topicSanchayanBhag2 } from './topic-03-sanchayan';
import { topicApathitVyakaran } from './topic-04-vyakaran';
import { topicRachanatmakLekhan } from './topic-05-lekhan';

export const hindiSubject: Subject = {
  id: 'subject-hindi',
  slug: 'hindi',
  name: 'Hindi Course B (हिंदी - ब)',
  board: 'CBSE Class 10 (Code 085)',
  grade: 'Class 10',
  description:
    'Complete 80-mark CBSE Class 10 Hindi Course B (Code 085) preparation with English conceptual bridge and exam-safe मानक हिंदी answers — covers स्पर्श भाग-2 (14 lessons), संचयन भाग-2 (3 stories), अपठित गद्यांश एवं व्याकरण (42-question Interactive Lab) and all 6 रचनात्मक लेखन formats.',
  accentColor: '#b45309',
  topics: [
    topicSparshKavyakhand,
    topicSparshGadyakhand,
    topicSanchayanBhag2,
    topicApathitVyakaran,
    topicRachanatmakLekhan,
  ],
};
