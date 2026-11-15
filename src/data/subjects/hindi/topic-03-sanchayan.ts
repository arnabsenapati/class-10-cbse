import { Topic } from '../../../types/curriculum';
import { sanchayan01HariharKaka } from './sanchayan-01-harihar-kaka';
import { sanchayan02SapnonKeSeDin } from './sanchayan-02-sapnon-ke-se-din';
import { sanchayan03TopiShukla } from './sanchayan-03-topi-shukla';
import { sanchayan04BoardMastery } from './sanchayan-04-board-mastery';

export const topicSanchayanBhag2: Topic = {
  id: 'topic-sanchayan-bhag-2',
  slug: 'sanchayan-bhag-2',
  order: 3,
  title: 'संचयन भाग-2 (पूरक पाठ्यपुस्तक — 6 अंक)',
  description:
    'CBSE Class 10 Hindi Course B की पूरक पुस्तक के तीनों पाठ (हरिहर काका, सपनों के-से दिन, टोपी शुक्ला) — Official NCERT PDF preview & link, Word Lens, Complete English Transcript, आंचलिक Word Bank, मुहावरे, समास व 3-अंक मूल्यपरक प्रश्नोत्तर।',
  ncertChapter: 'संचयन भाग-2 (पाठ 1 से 3 — संपूर्ण पूरक पुस्तक)',
  subtopics: [
    sanchayan01HariharKaka,
    sanchayan02SapnonKeSeDin,
    sanchayan03TopiShukla,
    sanchayan04BoardMastery,
  ],
};
