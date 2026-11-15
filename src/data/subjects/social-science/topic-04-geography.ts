import { Topic } from '../../../types/curriculum';
import { sstGeo01 } from './geo-01-resources-and-development';
import { sstGeo02 } from './geo-02-forest-and-wildlife-resources';
import { sstGeo03 } from './geo-03-water-resources';
import { sstGeo04 } from './geo-04-agriculture';
import { sstGeo05 } from './geo-05-minerals-and-energy-resources';
import { sstGeo06 } from './geo-06-manufacturing-industries';
import { sstGeo07 } from './geo-07-lifelines-map-only';
import { sstGeo08BoardMastery } from './geo-08-board-mastery';

export const topicGeography: Topic = {
  id: 'topic-sst-geography',
  slug: 'sst-geography',
  order: 4,
  title: 'Geography: Contemporary India II (20 Marks)',
  description:
    'Complete CBSE Geography mastery: Ch 1–6 (Resources & Soil Profile, Forests & Wildlife, Water & 8 Map Dams, Agriculture & Crop Wheel, Minerals/Energy & 22 Map Pins, Manufacturing Industries & 19 Map Pins) + Ch 7 Lifelines (Strictly 16 Sea Port & Airport Map Pins Only).',
  ncertChapter: 'Contemporary India II: Ch 1–6 + Ch 7 (Map Only)',
  subtopics: [
    sstGeo01,
    sstGeo02,
    sstGeo03,
    sstGeo04,
    sstGeo05,
    sstGeo06,
    sstGeo07,
    sstGeo08BoardMastery,
  ],
};
