import { Topic } from '../../../types/curriculum';
import { englishPoem01 } from './poem-01-dust-of-snow';
import { englishPoem02 } from './poem-02-fire-and-ice';
import { englishPoem03 } from './poem-03-a-tiger-in-the-zoo';
import { englishPoem04 } from './poem-04-how-to-tell-wild-animals';
import { englishPoem05 } from './poem-05-the-ball-poem';
import { englishPoem06 } from './poem-06-amanda';
import { englishPoem07 } from './poem-07-the-trees';
import { englishPoem08 } from './poem-08-fog';
import { englishPoem09 } from './poem-09-the-tale-of-custard-the-dragon';
import { englishPoem10 } from './poem-10-for-anne-gregory';
import { englishPoem11Mastery } from './poem-11-board-mastery';

export const topicFirstFlightPoetry: Topic = {
  id: 'topic-eng-ff-poetry',
  slug: 'first-flight-poetry',
  order: 2,
  title: 'First Flight — Poetry (Poems 1–10)',
  description:
    'Complete 7-pillar mastery of all 10 rationalized First Flight poems: optional NCERT reader & PDFs, stanza-by-stanza RTC with inline Word Lens, exact rhyme schemes, poetic device cheat sheets, Interactive Poetic Devices Lab, and Prose × Poetry 6-mark blueprints.',
  ncertChapter: 'First Flight (Poems 1–10)',
  subtopics: [
    englishPoem01,
    englishPoem02,
    englishPoem03,
    englishPoem04,
    englishPoem05,
    englishPoem06,
    englishPoem07,
    englishPoem08,
    englishPoem09,
    englishPoem10,
    englishPoem11Mastery,
  ],
};
