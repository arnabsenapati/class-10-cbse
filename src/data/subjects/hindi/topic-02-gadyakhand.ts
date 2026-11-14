import { Topic } from '../../../types/curriculum';
import { gadya01BadeBhaiSahab } from './gadya-01-bade-bhai-sahab';
import { gadya02DiaryKaEkPanna } from './gadya-02-diary-ka-ek-panna';
import { gadya03TataraVamiroKatha } from './gadya-03-tatara-vamiro-katha';
import { gadya04TeesriKasam } from './gadya-04-teesri-kasam';
import { gadya05AbKahanDoosre } from './gadya-05-ab-kahan-doosre';
import { gadya06PatjharMeinTootiPattiyan } from './gadya-06-patjhar-mein-tooti-pattiyan';
import { gadya07Kartoos } from './gadya-07-kartoos';
import { gadya08BoardMastery } from './gadya-08-board-mastery';

export const topicSparshGadyakhand: Topic = {
  id: 'topic-sparsh-gadyakhand',
  slug: 'sparsh-gadyakhand',
  order: 2,
  title: 'स्पर्श भाग-2: गद्यखंड (Prose)',
  description:
    'All 7 CBSE Class 10 Hindi Course B prose lessons (प्रेमचंद से हबीब तनवीर तक) — every chapter includes Word Lens hover meanings on NCERT passages, Scene-by-Scene English Transcript, Searchable Word Bank, Muhavre, Samas-Vigrah, and NCERT Q&As.',
  ncertChapter: 'स्पर्श भाग-2 (पाठ 1 से 7 — संपूर्ण गद्यखंड)',
  subtopics: [
    gadya01BadeBhaiSahab,
    gadya02DiaryKaEkPanna,
    gadya03TataraVamiroKatha,
    gadya04TeesriKasam,
    gadya05AbKahanDoosre,
    gadya06PatjharMeinTootiPattiyan,
    gadya07Kartoos,
    gadya08BoardMastery,
  ],
};
