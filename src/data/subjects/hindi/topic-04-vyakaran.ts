import { Topic } from '../../../types/curriculum';
import { vyakaran01ApathitGadyansh } from './vyakaran-01-apathit-gadyansh';
import { vyakaran02Padbandh } from './vyakaran-02-padbandh';
import { vyakaran03VakyaRupantaran } from './vyakaran-03-vakya-rupantaran';
import { vyakaran04Samas } from './vyakaran-04-samas';
import { vyakaran05Muhavre } from './vyakaran-05-muhavre';
import { vyakaran06BoardMastery } from './vyakaran-06-board-mastery';

export const topicApathitVyakaran: Topic = {
  id: 'topic-apathit-aur-vyakaran',
  slug: 'apathit-aur-vyakaran',
  order: 4,
  title: 'अपठित गद्यांश एवं व्यावहारिक व्याकरण (30 अंक)',
  description:
    'CBSE खंड ‘क’ (14 अंक: 2 अपठित गद्यांश + Word Lens) एवं खंड ‘ख’ (16 अंक: पदबंध, रचना के आधार पर वाक्य रूपांतरण, समास व मुहावरे) — नियम सारणियाँ, परीक्षक के जाल और 42-प्रश्नों की Interactive Vyakaran Lab।',
  ncertChapter: 'खंड ‘क’ (14 अंक) + खंड ‘ख’ (16 अंक) = 30 अंक',
  subtopics: [
    vyakaran01ApathitGadyansh,
    vyakaran02Padbandh,
    vyakaran03VakyaRupantaran,
    vyakaran04Samas,
    vyakaran05Muhavre,
    vyakaran06BoardMastery,
  ],
};
