import { Topic } from '../../../types/curriculum';
import { lekhan01Anuchchhed } from './lekhan-01-anuchchhed';
import { lekhan02Patra } from './lekhan-02-patra';
import { lekhan03Suchna } from './lekhan-03-suchna';
import { lekhan04Vigyapan } from './lekhan-04-vigyapan';
import { lekhan05Email } from './lekhan-05-email';
import { lekhan06Laghukatha } from './lekhan-06-laghukatha';
import { lekhan07BoardMastery } from './lekhan-07-board-mastery';

export const topicRachanatmakLekhan: Topic = {
  id: 'topic-rachanatmak-lekhan',
  slug: 'rachanatmak-lekhan',
  order: 5,
  title: 'रचनात्मक लेखन (खंड ‘घ’ — 22 अंक)',
  description:
    'CBSE Class 10 Hindi Course B के सभी 6 लेखन प्रारूप—अनुच्छेद (5), औपचारिक पत्र (5), सूचना (4), विज्ञापन (3), औपचारिक ई-मेल व लघुकथा (5)—3-3 आदर्श मॉडल सैंपल, बॉक्स प्रारूप और 80-अंक 180-मिनट परीक्षा रणनीति के साथ।',
  ncertChapter: 'खंड ‘घ’ • सृजनात्मक लेखन (22 अंक)',
  subtopics: [
    lekhan01Anuchchhed,
    lekhan02Patra,
    lekhan03Suchna,
    lekhan04Vigyapan,
    lekhan05Email,
    lekhan06Laghukatha,
    lekhan07BoardMastery,
  ],
};
