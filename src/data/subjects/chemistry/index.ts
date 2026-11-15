import { Subject } from '../../../types/curriculum';
import { topicReactions } from './ch01-chemical-reactions-equations';
import { topicAcidsBases } from './ch02-acids-bases-salts';
import { topicMetals } from './ch03-metals-and-non-metals';
import { topicCarbon } from './ch04-carbon-and-its-compounds';
import { topicChemMastery } from './chem-mastery';

export const chemistrySubject: Subject = {
  id: 'subject-chemistry',
  slug: 'chemistry',
  name: 'Chemistry',
  board: 'CBSE Class 10 (Code 086)',
  grade: 'Class 10',
  description:
    'Complete 25-Mark rationalized CBSE Class 10 Chemistry (NCERT Chapters 1–4): Chemical Reactions & Equations, Acids/Bases/Salts, Metals & Non-metals, Carbon Compounds, Interactive 2D/3D Labs, X-Y-Z Detective Puzzles, and 48-Q Board Quiz Arena.',
  accentColor: '#7c3aed',
  topics: [
    topicReactions,
    topicAcidsBases,
    topicMetals,
    topicCarbon,
    topicChemMastery,
  ],
};
