import { Topic } from '../../../types/curriculum';
import { subtopicKabirKiSakhi } from './kavya-01-kabir';
import { subtopicMeeraKePad } from './kavya-02-meera';
import { subtopicManushyata } from './kavya-03-manushyata';
import { subtopicParvatPradesh } from './kavya-04-parvat-pradesh';
import { subtopicTop } from './kavya-05-top';
import { subtopicKarChaleHumFida } from './kavya-06-kar-chale';
import { subtopicAatmatran } from './kavya-07-aatmatran';
import { subtopicKavyakhandMastery } from './kavya-08-board-mastery';

export const topicSparshKavyakhand: Topic = {
  id: 'topic-sparsh-kavyakhand',
  slug: 'sparsh-kavyakhand',
  order: 1,
  title: 'स्पर्श भाग-2 — काव्यखंड (पद्य खंड)',
  description:
    'सभी 7 NCERT कविताओं का छंदवार अध्ययन: Inline Hover/Tap Word Lens (मानक हिंदी अर्थ, English Helper, व्याकरण व वाक्य प्रयोग), सरल भावार्थ, प्रमुख अलंकार व CBSE बोर्ड प्रश्नोत्तर।',
  ncertChapter: 'Sparsh Part 2 • Chapters 1–7 (11 Marks in Board)',
  subtopics: [
    subtopicKabirKiSakhi,
    subtopicMeeraKePad,
    subtopicManushyata,
    subtopicParvatPradesh,
    subtopicTop,
    subtopicKarChaleHumFida,
    subtopicAatmatran,
    subtopicKavyakhandMastery,
  ],
};
