import { Subject } from '../../../types/curriculum';
import { topicLight } from './ch09-light-reflection-refraction';
import { topicHumanEye } from './ch10-human-eye-colourful-world';
import { topicElectricity } from './ch11-electricity';
import { topicMagnetism } from './ch12-magnetic-effects';
import { topicPhysicsMastery } from './phy-mastery';

export const physicsSubject: Subject = {
  id: 'subject-physics',
  slug: 'physics',
  name: 'Physics',
  board: 'CBSE Class 10 (Code 086)',
  grade: 'Class 10',
  description:
    'Complete 25-Mark rationalized CBSE Class 10 Physics (NCERT Ch 9–12) with interactive ray-bench optics, animated electron-drift & fuse simulators, 3D electromagnetism labs, New-Cartesian sign-shields, and 48-Q Board Mastery.',
  accentColor: '#0891b2',
  topics: [
    topicLight,
    topicHumanEye,
    topicElectricity,
    topicMagnetism,
    topicPhysicsMastery,
  ],
};
