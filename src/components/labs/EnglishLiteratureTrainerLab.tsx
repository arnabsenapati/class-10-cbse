import { useMemo, useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  GitBranch,
  RotateCcw,
  Search,
  Sparkles,
  Trophy,
  Users,
  XCircle,
} from 'lucide-react';

type LabTab = 'characters' | 'matrix' | 'drill';
type CharacterRole =
  | 'All'
  | 'Transformed'
  | 'Mentor / Foil'
  | 'Deceiver / Antagonist'
  | 'Satirical Figure';

interface CharacterEvolutionItem {
  id: string;
  chapterNum: number;
  chapterTitle: string;
  name: string;
  role: Exclude<CharacterRole, 'All'>;
  adjectives: string[];
  beforeState: string;
  turningPoint: string;
  afterState: string;
  keyQuote: string;
  boardTip: string;
}

interface ChapterTwistRow {
  chapterNum: number;
  title: string;
  author: string;
  genre: string;
  centralTwist: string;
  mustKnowFacts: string;
  crossBookLink: string;
}

interface LitDrillQuestion {
  id: string;
  chapter: string;
  extract: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  rationale: string;
}

const ROLE_CATEGORIES: CharacterRole[] = [
  'All',
  'Transformed',
  'Mentor / Foil',
  'Deceiver / Antagonist',
  'Satirical Figure',
];

const CHARACTER_ARCS: CharacterEvolutionItem[] = [
  {
    id: 'char-tricki',
    chapterNum: 1,
    chapterTitle: 'A Triumph of Surgery',
    name: 'Tricki',
    role: 'Transformed',
    adjectives: ['Overfed', 'Listless', 'Greedy', 'Adaptable', 'Rejuvenated'],
    beforeState:
      'Bloated like a "sausage with a leg at each corner", rheumy-eyed, panting on a rug, refusing even favourite dishes with bouts of vomiting.',
    turningPoint:
      'Two days on water only (zero food/medicine) at Mr Herriot’s surgery + joining Joe the greyhound and the pack’s rough scrimmages.',
    afterState:
      'In a fortnight turns into a "lithe, hard-muscled animal" racing across the lawn and leaping joyfully into Mrs Pumphrey’s lap.',
    keyQuote: '"Tricki’s only fault was greed. He had never been known to refuse food."',
    boardTip:
      'Emphasise that his cure came purely from diet moderation and active pack play — zero surgery or medicine.',
  },
  {
    id: 'char-pumphrey',
    chapterNum: 1,
    chapterTitle: 'A Triumph of Surgery',
    name: 'Mrs Pumphrey',
    role: 'Satirical Figure',
    adjectives: ['Affluent', 'Over-indulgent', 'Naive', 'Anxious', 'Unrealistic'],
    beforeState:
      'Mistakes laziness from overfeeding for malnutrition; piles malt, cod-liver oil, Horlicks, cream cakes, chocolates & wardrobes of coats onto Tricki.',
    turningPoint:
      'Reluctantly agrees to fortnight hospitalisation while sending 2 dozen fresh eggs, wine bottles, and brandy "to build up Tricki’s strength".',
    afterState:
      'Tearfully attributes natural recovery to medical magic ("This is a triumph of surgery!"), unaware the staff feasted on her hampers.',
    keyQuote: '"Oh, Mr Herriot, how can I ever thank you? This is a triumph of surgery!"',
    boardTip:
      'Quote her misconception ("malnutrition") to illustrate how blinded pampering harms loved ones.',
  },
  {
    id: 'char-herriot',
    chapterNum: 1,
    chapterTitle: 'A Triumph of Surgery',
    name: 'Mr James Herriot',
    role: 'Mentor / Foil',
    adjectives: ['Observant', 'Practical', 'Tactful', 'Compassionate', 'Witty'],
    beforeState:
      'Diagnoses overfeeding immediately and sees Tricki tottering in tweed; anticipates the inevitable call and prepares his treatment plan in advance.',
    turningPoint:
      'Removes Tricki smoothly for 14 days, restricts meals for 48 hours, and diplomatically withholds upsetting details during Mrs Pumphrey’s dozen daily calls.',
    afterState:
      'Resists the comic temptation to keep Tricki (plus eggs, wine, brandy) as a "permanent guest" and restores a healthy dog to his mistress.',
    keyQuote: '"You haven’t a kick in you but I think I know a cure for you."',
    boardTip:
      'NCERT Q1 directly asks whether Herriot is tactful as well as full of common sense — cite both!',
  },
  {
    id: 'char-hari-singh',
    chapterNum: 2,
    chapterTitle: 'The Thief’s Story',
    name: 'Hari Singh (Narrator)',
    role: 'Transformed',
    adjectives: ['Resourceful', 'Opportunistic', 'Observant', 'Conflicted', 'Reformable'],
    beforeState:
      '15-year-old "experienced and fairly successful" thief who changes names monthly ("Hari Singh") to dodge police and flatters Anil at a wrestling match.',
    turningPoint:
      'Steals ₹600 in fifties and reaches the moving 10:30 Lucknow Express, yet hesitates on the chilly November rain-swept platform remembering Anil’s lessons.',
    afterState:
      'Realises writing whole sentences can bring far more than a few hundred rupees; quietly slips the damp notes back under the mattress and earns an effortless smile.',
    keyQuote: '"I knew that once I could write like an educated man there would be no limit to what I could achieve."',
    boardTip:
      'Contrast his opening practiced "appealing smile" with his closing unforced, genuine smile.',
  },
  {
    id: 'char-anil',
    chapterNum: 2,
    chapterTitle: 'The Thief’s Story',
    name: 'Anil',
    role: 'Mentor / Foil',
    adjectives: ['Trusting', 'Easy-going', 'Patient', 'Generous', 'Forgiving'],
    beforeState:
      '25-year-old tall, lean magazine writer living "by fits and starts" in a room over Jumna Sweet Shop; feeds the dog Hari’s terrible meal without anger.',
    turningPoint:
      'Hands Hari a door key, ignores the daily one-rupee shopping skim, and begins teaching him cooking, writing his name, and arithmetic.',
    afterState:
      'Noticeably discovers the ₹50 note is still damp from night rain yet calmly pays Hari and resumes lessons without naming the theft.',
    keyQuote: '"His face was clear and unlined... He was the most trusting person I had ever met."',
    boardTip:
      'Explain HOW Anil’s silent trust broke Hari’s cynic logic ("careless man... takes all the pleasure out of work").',
  },
  {
    id: 'char-ausable',
    chapterNum: 3,
    chapterTitle: 'The Midnight Visitor',
    name: 'Ausable',
    role: 'Mentor / Foil',
    adjectives: ['Shrewd', 'Unassuming', 'Quick-witted', 'Composed', 'Inventive'],
    beforeState:
      'Fat, wheezy secret agent in a gloomy 6th-floor French hotel corridor with an American Boston accent, disappointing mystery-writer Fowler.',
    turningPoint:
      'Returns to find pistol-wielding Max inside; seamlessly fabricates a believable complaint about an adjoining non-existent balcony under the window.',
    afterState:
      'Turns waiter Henry’s pre-ordered knock into the "police" checking on the missile report, driving Max to leap out into nothingness.',
    keyQuote: '"You are disillusioned... Wait till we have waited for an authentic thrill."',
    boardTip:
      'Contrast brains vs brawn: Ausable defeats an armed rival using zero weapons — only fabricated detail.',
  },
  {
    id: 'char-max',
    chapterNum: 3,
    chapterTitle: 'The Midnight Visitor',
    name: 'Max',
    role: 'Deceiver / Antagonist',
    adjectives: ['Crafty', 'Restless', 'Overconfident', 'Gullible', 'Hasty'],
    beforeState:
      'Slender, fox-faced rival agent carrying a small automatic pistol; snuck in smoothly using a passkey to intercept the 12:30 missile report.',
    turningPoint:
      'Swallows Ausable’s detailed complaint about the balcony without checking out the window — terrified of the imagined police raid.',
    afterState:
      'Swings a leg onto the sill expecting a drop-down ledge and plunges six floors down with a single shrill scream.',
    keyQuote: '"No, I had a passkey. I did not know about the balcony. It might have saved me some trouble had I known."',
    boardTip:
      'Note the ironical clue: Max himself admits he used a passkey, proving Ausable planted the balcony lie purely in Max’s head.',
  },
  {
    id: 'char-horace',
    chapterNum: 4,
    chapterTitle: 'A Question of Trust',
    name: 'Horace Danby',
    role: 'Deceiver / Antagonist',
    adjectives: ['Meticulous', 'Cultured', 'Self-deluded', 'Naive', 'Indignant'],
    beforeState:
      '50-year-old unmarried locksmith seen as honest yet cracks one safe every year via secret agent to fund his love for rare expensive books.',
    turningPoint:
      'Hay fever sneezes expose him in Shotover Grange’s drawing room; removes gloves out of flattery/trust to hand the young lady in red a cigarette lighter.',
    afterState:
      'Arrested two days later from fresh fingerprints across the room; becomes assistant prison librarian furious whenever "honour among thieves" is mentioned.',
    keyQuote: '"Horace Danby was good and respectable — but not completely honest."',
    boardTip:
      'Highlight double irony: he stole without gloves for an even sharper thief and left fingerprints opening someone else’s jewel haul!',
  },
  {
    id: 'char-lady-red',
    chapterNum: 4,
    chapterTitle: 'A Question of Trust',
    name: 'The Young Lady in Red',
    role: 'Deceiver / Antagonist',
    adjectives: ['Poised', 'Theatrical', 'Manipulative', 'Observant', 'Ruthless'],
    beforeState:
      'Appears calmly in Shotover Grange doorway soothing dog Sherry by name and tidying mantelpiece ornaments like an authentic mistress of the house.',
    turningPoint:
      'Exploits Horace’s panic and hay fever, claiming she returned from London just for her jewels to wear at a party but "forgot the numbers" on the safe.',
    afterState:
      'Walks away cleanly with £15,000 in jewels while leaving gloveless Horace’s fingerprints behind — revealed later against the real 60-year-old grey-haired wife.',
    keyQuote: '"I didn’t expect to meet a burglar... Open the safe for me and I’ll let you go."',
    boardTip:
      'Explain why Sherry stayed calm around her too — she studied the house and dog routine just as thoroughly as Horace.',
  },
  {
    id: 'char-griffin',
    chapterNum: 5,
    chapterTitle: 'Footprints without Feet',
    name: 'Griffin',
    role: 'Deceiver / Antagonist',
    adjectives: ['Brilliant', 'Lawless', 'Vindictive', 'Solitary', 'Irresponsible'],
    beforeState:
      'Gifted scientist who discovers rare drugs making flesh transparent "as a sheet of glass", yet burns down his landlord’s house out of spite.',
    turningPoint:
      'Wanders freezing January London streets, raids a store and Drury Lane costume shop (assaulting and robbing the shopkeeper), then settles at Coach and Horses inn, Iping.',
    afterState:
      'Robs clergyman’s housekeeping cash, hurls Mrs Hall’s furniture as "witchcraft", and knocks out Constable Jaffers when unmasked as a headless man.',
    keyQuote: '"Griffin, the scientist, had carried out experiment after experiment to prove that the human body could become invisible."',
    boardTip:
      'Anchor on H.G. Wells’s core theme: science divorced from moral conscience breeds terror, isolation, and criminality.',
  },
  {
    id: 'char-ebright',
    chapterNum: 6,
    chapterTitle: 'The Making of a Scientist',
    name: 'Richard H. Ebright',
    role: 'Transformed',
    adjectives: ['Curious', 'Persistent', 'Analytical', 'Methodical', 'Competitive'],
    beforeState:
      'Fatherless boy north of Reading, Pennsylvania collecting all 25 butterfly species by Grade 2, guided early by his mother and *The Travels of Monarch X*.',
    turningPoint:
      'Losing the 7th-grade County Science Fair with mere frog-tissue microscope slides teaches him real science requires live hypotheses and experiments.',
    afterState:
      'Decodes gold-spot monarch pupa hormone (linking to how cells read DNA blueprints) and publishes in *PNAS* with James R. Wong at age 22.',
    keyQuote: '"He didn’t win anything... Wait: that was the first time he got a hint of what real science is."',
    boardTip:
      'List all 3 NCERT ingredients: (1) first-rate mind, (2) curiosity, (3) will to win for the right reasons.',
  },
  {
    id: 'char-matilda',
    chapterNum: 7,
    chapterTitle: 'The Necklace',
    name: 'Matilda (Mme Loisel)',
    role: 'Transformed',
    adjectives: ['Vain', 'Discontented', 'Passionate', 'Resilient', 'Tragic'],
    beforeState:
      'Pretty clerk’s wife who suffers incessantly over shabby walls, "error of destiny" marriage, and lack of jewels despite M. Loisel’s tender devotion.',
    turningPoint:
      'Shines briefly till 4 a.m. at the Ministry ball, drops Mme Forestier’s borrowed diamond necklace on the walk home, and borrows 36,000 francs to replace it.',
    afterState:
      'Endures 10 years of garret poverty — turning red-handed and coarse — only to hear the original jewels were cheap paste worth 500 francs.',
    keyQuote: '"Oh, my poor Matilda! Mine were false. They were not worth over five hundred francs!"',
    boardTip:
      'Point out both sides: vanity caused her ruin, yet her heroic honesty in working 10 years to pay every debt shows unexpected grit.',
  },
  {
    id: 'char-mloisel',
    chapterNum: 7,
    chapterTitle: 'The Necklace',
    name: 'Monsieur Loisel',
    role: 'Mentor / Foil',
    adjectives: ['Contented', 'Selfless', 'Loyal', 'Patient', 'Hardworking'],
    beforeState:
      'Simple petty clerk in the Board of Education who delights in domestic comfort ("Oh! the good potpie!") and brings home an exclusive Minister’s invite.',
    turningPoint:
      'Gives up 400 francs saved for a Nanterre hunting gun so Matilda buys a dress, hunts freezing Paris streets at night for the lost jewel, and pledges his father’s 18,000 francs.',
    afterState:
      'Copies manuscripts at five sous a page and works evenings for a full decade without once reproaching Matilda.',
    keyQuote: '"Ah! the good potpie! I know nothing better than that..."',
    boardTip:
      'Contrast his quiet gratitude and selfless loyalty against Matilda’s opening materialism.',
  },
  {
    id: 'char-bholi',
    chapterNum: 8,
    chapterTitle: 'Bholi',
    name: 'Bholi / Sulekha',
    role: 'Transformed',
    adjectives: ['Timid', 'Mocked', 'Receptive', 'Dignified', 'Courageous'],
    beforeState:
      'Neglected "simpleton" disfigured by smallpox at 2, stammering after a 10-month cot fall, dressed in hand-me-downs and ignored by her own parents.',
    turningPoint:
      'Sent to village primary school to appease the Tehsildar; her teacher’s soft, encouraging voice helps her spell out "Bholi" and trust her own voice.',
    afterState:
      'Grown into an educated young woman, she throws the garland into the wedding fire when Bishamber demands ₹5,000 dowry — speaking flawlessly as "Sulekha".',
    keyQuote: '"Pitaji! Take back your money. I am not going to marry this man."',
    boardTip:
      'Trace the name shift explicitly: "Bholi" (simpleton passive child) reclaims her birth name "Sulekha" (fine writing / self-respecting adult).',
  },
  {
    id: 'char-teacher',
    chapterNum: 8,
    chapterTitle: 'Bholi',
    name: 'Bholi’s Teacher',
    role: 'Mentor / Foil',
    adjectives: ['Empathetic', 'Gentle', 'Patient', 'Inspiring', 'Visionary'],
    beforeState:
      'Meets a sobbing, terrified child crouching in the classroom corner, unlike harsh elders at home or noisy peers.',
    turningPoint:
      'Never mocks Bholi’s stammer; pronounces her name soothingly, hands her a picture book, and nurtures confidence quietly over years.',
    afterState:
      'Stands quietly smiling at the wedding pandal "like an artist contemplating the completion of her masterpiece" as Sulekha rejects dowry.',
    keyQuote: '"In one month you will be able to read this book. Then I will give you a bigger book..."',
    boardTip:
      'Compare her transformative mentorship directly with Anne Sullivan or Anil — compassion unlocks hidden dignity.',
  },
  {
    id: 'char-bishamber',
    chapterNum: 8,
    chapterTitle: 'Bholi',
    name: 'Bishamber Nath',
    role: 'Deceiver / Antagonist',
    adjectives: ['Greedy', 'Hypocritical', 'Aged', 'Cowardly', 'Opportunistic'],
    beforeState:
      'Prosperous middle-aged grocer from another village with a limp and grown children; agrees to marry Bholi without dowry only because she appears compliant.',
    turningPoint:
      'Catching a glimpse of pockmarks as her veil slips before garlanding, he shamelessly extorts ₹5,000 from desperate Numberdar Ramlal.',
    afterState:
      'Publicly humiliated as a "mean, greedy and contemptible coward" when Sulekha rejects him, forced to leave quietly with his brass band.',
    keyQuote: '"If you are to marry her, you must give me five thousand rupees."',
    boardTip:
      'Note the social satire: age, limp, and second marriage go uncriticised in men, yet a girl’s scars become an excuse for extortion.',
  },
  {
    id: 'char-think-tank',
    chapterNum: 9,
    chapterTitle: 'The Book That Saved the Earth',
    name: 'Think-Tank',
    role: 'Satirical Figure',
    adjectives: ['Arrogant', 'Pompous', 'Ignorant', 'Paranoid', 'Cowardly'],
    beforeState:
      'Balloon-brained Commander-in-Chief obsessed with mirror flattery ("Mirror, mirror, in my hand...") calling Earth "an insignificant place".',
    turningPoint:
      'Misreads Centerville library books successively as sandwiches, ear-comms, and coded plans — then sees "Humpty Dumpty" matching his own balloon skull!',
    afterState:
      'Cancels the 2040 Earth invasion immediately and flees 100 million miles away to Alpha Centauri.',
    keyQuote: '"Had a great fall! That means they plan to capture Mars Central Control and me!"',
    boardTip:
      'Illustrates the danger of "half-baked knowledge" — vanity turns a preschool nursery rhyme into a cosmic panic.',
  },
  {
    id: 'char-noodle',
    chapterNum: 9,
    chapterTitle: 'The Book That Saved the Earth',
    name: 'Apprentice Noodle',
    role: 'Mentor / Foil',
    adjectives: ['Tactful', 'Intelligent', 'Humble', 'Observant', 'Diplomatic'],
    beforeState:
      'Subordinate officer in Mars Space Control dealing gracefully with a tyrannical boss who demands long-winded titles on every sentence.',
    turningPoint:
      'Gently feeds correct insights ("just an insignificant bit of data floating in my mind" — chemical vitamins, eye communication) while letting Think-Tank take credit.',
    afterState:
      'Replaces fleeing Think-Tank 500 years later as the "wise and wonderful Noodle", fostering friendship and Earth-Mars libraries in Marsopolis.',
    keyQuote: '"It’s just a cloudy piece of information twirling round in my head..."',
    boardTip:
      'Contrast Noodle’s quiet diplomacy and curiosity with Think-Tank’s bluster — explaining why the future historian honours him.',
  },
];

const CHAPTER_TWIST_MATRIX: ChapterTwistRow[] = [
  {
    chapterNum: 1,
    title: 'A Triumph of Surgery',
    author: 'James Herriot',
    genre: 'Humorous Veterinary Fiction',
    centralTwist:
      'Recovery happens through fasting + exercise — zero surgery — while vet staff feast on eggs, wine & brandy meant for the dog.',
    mustKnowFacts: '14-day stay; 2 days water-only; Joe the greyhound; 2 dozen fresh eggs.',
    crossBookLink: 'A Letter to God (misplaced credit vs quiet real action)',
  },
  {
    chapterNum: 2,
    title: 'The Thief’s Story',
    author: 'Ruskin Bond',
    genre: 'Confessional Moral Narrative',
    centralTwist:
      'Hari returns ₹600 at night; Anil notices the wet ₹50 note next morning yet silently forgives and raises him via trust and literacy.',
    mustKnowFacts: 'Hari 15 yrs; Anil 25 yrs; ₹600 in 50s; 10:30 Lucknow Express; Jumna Sweet Shop.',
    crossBookLink: 'Dust of Snow / Mandela (goodness & moral awakening)',
  },
  {
    chapterNum: 3,
    title: 'The Midnight Visitor',
    author: 'Robert Arthur',
    genre: 'Suspense Spy Thriller',
    centralTwist:
      'There is NO balcony outside the 6th-floor window; "police knocking" is pre-ordered wine delivered by waiter Henry.',
    mustKnowFacts: 'French hotel 6th floor; Boston accent; 12:30 missile report; Max entered via passkey.',
    crossBookLink: 'The Tale of Custard the Dragon (unimpressive exterior hiding sharp mettle)',
  },
  {
    chapterNum: 4,
    title: 'A Question of Trust',
    author: 'Victor Canning',
    genre: 'Ironic Caper Mystery',
    centralTwist:
      'The gracious "mistress" at Shotover Grange is a fellow thief; gloveless Horace opens the safe and is jailed on his own fingerprints.',
    mustKnowFacts: 'Age 50; rare books; £15,000 jewels; hay fever; real wife is 60, grey-haired.',
    crossBookLink: 'For Anne Gregory (deceptive outer appearance masking real intent)',
  },
  {
    chapterNum: 5,
    title: 'Footprints without Feet',
    author: 'H.G. Wells',
    genre: 'Science Fiction Cautionary Tale',
    centralTwist:
      'Conquering physical laws to vanish grants zero power or peace — Griffin becomes a hunted, freezing fugitive defeated by ordinary townsfolk.',
    mustKnowFacts: 'January mid-winter; London store + Drury Lane shop; Iping Mrs Hall; Constable Jaffers.',
    crossBookLink: 'Fire and Ice (desire/knowledge unchecked by empathy turns destructive)',
  },
  {
    chapterNum: 6,
    title: 'The Making of a Scientist',
    author: 'Robert W. Peterson',
    genre: 'Biographical Essay',
    centralTwist:
      'Defeat at the 7th-grade science fair with static slides flips his trajectory into genuine experimental breakthroughs on monarch hormones & DNA.',
    mustKnowFacts: '25 butterfly species by Grade 2; Dr Urquhart; 12 gold spots on pupa; PNAS at age 22.',
    crossBookLink: 'His First Flight / Anne Frank (mentors & perseverance converting setbacks)',
  },
  {
    chapterNum: 7,
    title: 'The Necklace',
    author: 'Guy de Maupassant',
    genre: 'Realist Situational Irony',
    centralTwist:
      'The borrowed diamond necklace repaid through 10 miserable years of 36,000-franc debt was imitation paste worth at most 500 francs.',
    mustKnowFacts: '400 francs dress; 36,000 fr replacement (18,000 inheritance + loan sharks); Champs-Élysées.',
    crossBookLink: 'Madam Rides the Bus / Sermon at Benares (fantasy vs real cost & acceptance)',
  },
  {
    chapterNum: 8,
    title: 'Bholi',
    author: 'K.A. Abbas',
    genre: 'Social Reform Drama',
    centralTwist:
      'Sent to school merely as a "burdensome" simpleton, Sulekha grows fearless through education and rejects a greedy dowry-seeking groom at the altar.',
    mustKnowFacts: '4th daughter (Radha, Mangla, Champa, Bholi); smallpox at 2; ₹5,000 dowry; returns to teach.',
    crossBookLink: 'Nelson Mandela / The Trees (breaking silent oppression through voice & agency)',
  },
  {
    chapterNum: 9,
    title: 'The Book That Saved the Earth',
    author: 'Claire Boiko',
    genre: 'Sci-Fi Comic Play',
    centralTwist:
      'Mighty Martian armies flee Earth not from missiles, but from "Mother Goose" nursery rhymes misread as lethal military code!',
    mustKnowFacts: '25th-century Historian; 2040 invasion; Centerville Library; Humpty Dumpty -> Alpha Centauri.',
    crossBookLink: 'How to Tell Wild Animals / The Proposal (farce, pomposity & literal misreading)',
  },
];

const LIT_DRILL_QUESTIONS: LitDrillQuestion[] = [
  {
    id: 'fp-drill-01',
    chapter: 'Ch 1: A Triumph of Surgery',
    extract: '"He became hugely fat, like a bloated sausage with a leg at each corner."',
    prompt: 'Which root habit did Mr Herriot identify as "Tricki’s only fault"?',
    options: [
      'Aggressive barking at greyhounds',
      'Greed — he had never been known to refuse food at any hour',
      'Refusing to wear tweed raincoats outdoors',
      'Chronic infection requiring surgical removal',
    ],
    correctIndex: 1,
    rationale: 'Combined with Mrs Pumphrey’s over-pampering, Tricki’s inability to turn down sweets caused severe obesity.',
  },
  {
    id: 'fp-drill-02',
    chapter: 'Ch 1: A Triumph of Surgery',
    extract: 'Mrs Pumphrey sent fresh eggs, two bottles of wine, and brandy to the surgery.',
    prompt: 'Why was Mr Herriot tempted to keep Tricki as "a permanent guest"?',
    options: [
      'Because the surgery suffered a winter food shortage',
      'Because he and his partners enjoyed eggs for breakfast, midday wine, and evening brandy meant for Tricki',
      'Because Tricki chased off stray dogs from the henhouse',
      'Because Mrs Pumphrey refused to collect him after two weeks',
    ],
    correctIndex: 1,
    rationale: 'Herriot diplomatically kept Tricki strictly on lean pack meals while his household humour-filledly consumed the luxury gifts.',
  },
  {
    id: 'fp-drill-03',
    chapter: 'Ch 2: The Thief’s Story',
    extract: '"It’s easy to rob a greedy man... but it’s difficult to rob a careless man."',
    prompt: 'According to Hari Singh, why does robbing a "careless man" lose all pleasure?',
    options: [
      'Careless men always lock money in steel safes',
      'Sometimes he does not even notice he has been robbed',
      'Greedy men call the police within minutes',
      'Poor men accept robbery gracefully',
    ],
    correctIndex: 1,
    rationale: 'Hari notes greedy people show fear, rich people anger, poor people acceptance — but trusting, careless Anil makes a thief feel guilty.',
  },
  {
    id: 'fp-drill-04',
    chapter: 'Ch 2: The Thief’s Story',
    extract: '"His hand was extended towards me. There was a fifty-rupee note between his fingers."',
    prompt: 'How did Hari realise that Anil secretly knew about the midnight theft?',
    options: [
      'Anil threatened to hand him over to the police near Lucknow',
      'The fifty-rupee note was still damp from the night’s November rain',
      'Anil counted only 550 rupees inside the mattress',
      'Anil changed the door lock above the Jumna Sweet Shop',
    ],
    correctIndex: 1,
    rationale: 'Without uttering a word of reproach, Anil’s wet note and quiet promise to teach sentences seal Hari’s genuine reform.',
  },
  {
    id: 'fp-drill-05',
    chapter: 'Ch 3: The Midnight Visitor',
    extract: '"Max’s face was black with anger as he backed swiftly towards the window."',
    prompt: 'How had Max ACTUALLY entered Ausable’s sixth-floor hotel room earlier that night?',
    options: [
      'Climbing along the balcony of the adjoining room',
      'Using a passkey through the main corridor door',
      'Pushing open the room door behind waiter Henry',
      'Hiding behind Fowler outside the musty corridor',
    ],
    correctIndex: 1,
    rationale: 'Max himself admits "No, I had a passkey" — proving Ausable bluffed about a balcony that did not exist.',
  },
  {
    id: 'fp-drill-06',
    chapter: 'Ch 3: The Midnight Visitor',
    extract: '"The door opened and there stood a waiter with a tray, a bottle and two glasses."',
    prompt: 'Why had Ausable claimed earlier that the knock at the door must be the police?',
    options: [
      'He secretly phoned Paris police from the lobby',
      'To panic Max into climbing onto the non-existent balcony rather than shooting or hiding inside',
      'Because Fowler requested police security for his interview',
      'Because the hotel manager always inspected rooms at 12:30',
    ],
    correctIndex: 1,
    rationale: 'Knowing he had pre-ordered drinks from Henry, Ausable weaponised the knock to force Max onto the imaginary ledge.',
  },
  {
    id: 'fp-drill-07',
    chapter: 'Ch 4: A Question of Trust',
    extract: '"Horace took off his gloves and gave her his cigarette lighter."',
    prompt: 'What single fatal mistake got meticulous Horace Danby arrested two days later?',
    options: [
      'Leaving his spectacles near the magazine article',
      'Opening the safe bare-handed without gloves, leaving his fingerprints all over the room',
      'Calling the dog Sherry loudly so neighbours woke up',
      'Forgetting the combination written inside his prison book',
    ],
    correctIndex: 1,
    rationale: 'Flattered and intimidated by the poised woman in red, he removed his gloves — sealing his arrest once the real 60-year-old mistress denied authorizing him.',
  },
  {
    id: 'fp-drill-08',
    chapter: 'Ch 4: A Question of Trust',
    extract: '"Horace gets very angry when anyone talks about ‘honour among thieves’."',
    prompt: 'Why does that proverb infuriate Horace while working as assistant prison librarian?',
    options: [
      'Because he never stole anything except cheap paperbacks',
      'Because a fellow thief tricked him into cracking the Shotover Grange safe so she could steal £15,000 safely herself',
      'Because the servants testified against him in court',
      'Because he caught hay fever inside the prison library',
    ],
    correctIndex: 1,
    rationale: 'The "victim" deceived the burglar cleanly, proving thieves double-cross one another without loyalty.',
  },
  {
    id: 'fp-drill-09',
    chapter: 'Ch 5: Footprints without Feet',
    extract: '"The two boys started in surprise at the fresh muddy imprints of a pair of bare feet."',
    prompt: 'How did the invisible man first leave visible evidence on a London staircase?',
    options: [
      'White bandages unwrapped around his forehead in fog',
      'Having stepped into wet mud while barefoot in mid-winter London, leaving ascending/descending footmarks',
      'Wearing overshoes stolen from Drury Lane',
      'Spilling stolen ink across Mrs Hall’s carpet',
    ],
    correctIndex: 1,
    rationale: 'Griffin had just set his landlord’s house on fire and fled naked into January chill, inadvertently stepping in mud.',
  },
  {
    id: 'fp-drill-10',
    chapter: 'Ch 5: Footprints without Feet',
    extract: '"Mrs Hall was convinced that the room was haunted by spirits."',
    prompt: 'What actually hurled Mrs Hall’s bedroom chair at her and hit her husband?',
    options: [
      'Drafts blowing open the locked inn doors during winter wind',
      'Invisible Griffin tossing furniture around once he flung off his bandages and disguise',
      'Clergyman’s stolen housekeeping coins rattling across the desk',
      'Constable Jaffers forcing his way into the parlour',
    ],
    correctIndex: 1,
    rationale: 'Superstitious villagers blamed "witchcraft", whereas Griffin was physically throwing the chair unseen.',
  },
  {
    id: 'fp-drill-11',
    chapter: 'Ch 6: The Making of a Scientist',
    extract: '"It was the first time this important scientific journal had ever published the work of college students."',
    prompt: 'How did losing the 7th-grade County Science Fair reshape Richard Ebright’s mindset?',
    options: [
      'He stopped studying insects and switched to coin collecting',
      'Watching winners perform real experiments taught him display slides alone aren’t true science — inspiring competitive testing',
      'Mr Weiherer advised him to quit debating',
      'Dr Urquhart told him butterflies carried no hormonal value',
    ],
    correctIndex: 1,
    rationale: 'From Grade 8 onward, Ebright tested hypotheses experimentally — leading eventually to discovering monarch hormone structure and cell DNA control.',
  },
  {
    id: 'fp-drill-12',
    chapter: 'Ch 6: The Making of a Scientist',
    extract: '"Those twelve tiny gold spots on a monarch pupa weren’t merely ornamental."',
    prompt: 'What monumental theory grew out of Ebright’s study of that insect hormone’s chemical structure?',
    options: [
      'Why starlings prefer eating viceroy butterflies',
      'How cells can "read" the blueprint of their DNA to guide heredity and function',
      'How migratory birds locate Toronto in winter',
      'Why caterpillars catch viral diseases every few years',
    ],
    correctIndex: 1,
    rationale: 'Examining X-ray photos of the hormone sparked his "Eureka!" insight into how DNA directs cell life.',
  },
  {
    id: 'fp-drill-13',
    chapter: 'Ch 7: The Necklace',
    extract: '"He possessed four hundred francs... saved to buy a gun to join some hunting parties."',
    prompt: 'How does M. Loisel react when Matilda complains she has nothing suitable to wear to the ball?',
    options: [
      'He scolds her for ingratitude and cancels the invitation',
      'He turns pale slightly yet cheerfully sacrifices all 400 francs saved for his hunting gun near Nanterre',
      'He immediately approaches usurers for 36,000 francs',
      'He asks Mme Forestier to lend Matilda a ball gown',
    ],
    correctIndex: 1,
    rationale: 'This quiet gesture reveals M. Loisel’s selfless tenderness compared with Matilda’s restless pride.',
  },
  {
    id: 'fp-drill-14',
    chapter: 'Ch 7: The Necklace',
    extract: '"Instead of 40,000 francs, the Palais-Royal shopkeeper agreed to sell it for 36,000."',
    prompt: 'Why does the ending on the Champs-Élysées make those ten years doubly heartbreaking?',
    options: [
      'Matilda had misplaced the replacement necklace too',
      'Mme Forestier reveals the original necklace was false paste worth under 500 francs — preventable had Matilda confessed immediately',
      'The Minister refused to pay M. Loisel’s pension',
      'Forestier had borrowed the diamonds from another friend',
    ],
    correctIndex: 1,
    rationale: 'De Maupassant nails harsh realist irony: vanity + silence turned a minor 500-franc loss into a decade of ruin.',
  },
  {
    id: 'fp-drill-15',
    chapter: 'Ch 8: Bholi',
    extract: '"For the first time in her life she heard someone call her name softly without scolding."',
    prompt: 'For what cynical reason did Ramlal and his wife agree to send Bholi to the new primary school?',
    options: [
      'They dreamed she would become the village schoolteacher',
      'Tehsildar ordered Ramlal to set a civic example, and her mother thought ugly, witless Bholi had little prospect of marriage anyway',
      'Her elder sisters Champa and Mangla begged to study beside her',
      'She requested new blue books after seeing Lakshmi the cow',
    ],
    correctIndex: 1,
    rationale: 'Ironically, parental neglect ("let the teachers at school worry about her") became the doorway to Sulekha’s empowerment.',
  },
  {
    id: 'fp-drill-16',
    chapter: 'Ch 8: Bholi',
    extract: '"A silent satisfaction shone in the teacher’s eyes, like an artist contemplating her masterpiece."',
    prompt: 'Which two words show Sulekha’s final victory at her wedding ceremony?',
    options: [
      'Running home in silence while Ramlal cried',
      'Refusing a greedy man cleanly WITHOUT a single stammer and choosing to teach in the same school while caring for ageing parents',
      'Accepting half the dowry for Champa’s family',
      'Moving immediately to a city university alone',
    ],
    correctIndex: 1,
    rationale: 'Educated self-worth cures her lifelong stammer at the decisive moral test — transforming frightened "Bholi" back into dignified "Sulekha".',
  },
  {
    id: 'fp-drill-17',
    chapter: 'Ch 9: The Book That Saved the Earth',
    extract: '"It is quite obvious to the meanest intelligence that these are sandwiches!"',
    prompt: 'Identify the exact sequence of Think-Tank’s THREE hilarious misinterpretations of Earth books:',
    options: [
      'Nuclear weapons -> Radio towers -> Poetry manuscripts',
      'Sandwiches (food) -> Ear communication devices -> Eye communication requiring vitamins to decipher',
      'Children’s hats -> Television screens -> Military maps',
      'Spy cameras -> Musical boxes -> Space helmets',
    ],
    correctIndex: 1,
    rationale: 'Tested straight from NCERT: only after Noodle’s gentle hints about "vitamins" does Think-Tank adopt the reading hypothesis.',
  },
  {
    id: 'fp-drill-18',
    chapter: 'Ch 9: The Book That Saved the Earth',
    extract: '"Humpty Dumpty had a great fall... Stop! Cancel the invasion!"',
    prompt: 'Why did a children’s illustration of Humpty Dumpty terrify the Mighty Think-Tank?',
    options: [
      'Captain Omega dropped the book onto Mars radar controls',
      'Think-Tank mistook the egg-shaped cartoon for his own "great and mighty balloon brain", imagining Earthlings plotted to topple him',
      'Noodle laughed openly at his shiny Martian helmet',
      'Sergeant Oop discovered explosive silver bells inside the barn',
    ],
    correctIndex: 1,
    rationale: 'His colossal vanity plus half-baked literalism turned a harmless nursery book into the panic that saved 21st-century Earth.',
  },
  {
    id: 'fp-drill-19',
    chapter: 'Cross-Chapter Foil Synthesis',
    extract: 'Three quiet mentors transform three troubled lives: Anil, Bholi’s Teacher, and Ebright’s Mother.',
    prompt: 'What common pedagogical secret unites all three mentors across *Footprints without Feet*?',
    options: [
      'Strict physical punishment and competitive scolding',
      'Patient trust, unconditional encouragement, and equipping learners with knowledge rather than lecturing or mocking',
      'Sending apprentices away to distant cities immediately',
      'Concealing failures so learners never feel discomfort',
    ],
    correctIndex: 1,
    rationale: 'Core CBSE 6-mark synthesis point: empathy + patient opportunity awakens honesty (Hari), courage (Sulekha), and genius (Ebright).',
  },
  {
    id: 'fp-drill-20',
    chapter: 'Cross-Chapter Irony Audit',
    extract: 'Deceptive appearances backfire across Chapters 1, 3, 4, and 7.',
    prompt: 'Which character below is the ONLY one undone because their OWN hubris or crime blinds them to simple truth?',
    options: [
      'Tricki at Mr Herriot’s surgery',
      'Horace Danby believing the calm woman in red was the housemistress and removing his gloves',
      'M. Loisel sacrificing 400 francs for his wife',
      'Apprentice Noodle gently correcting Think-Tank',
    ],
    correctIndex: 1,
    rationale: 'Horace prided himself on planning "two weeks" cleanly, yet vanity and gullibility made him take off his gloves for another burglar.',
  },
];

export function EnglishLiteratureTrainerLab() {
  const [tab, setTab] = useState<LabTab>('characters');
  const [query, setQuery] = useState('');
  const [chapterFilter, setChapterFilter] = useState<number>(0);
  const [roleFilter, setRoleFilter] = useState<CharacterRole>('All');

  const [drillAnswers, setDrillAnswers] = useState<Record<string, number>>({});
  const [drillSubmitted, setDrillSubmitted] = useState(false);

  const filteredCharacters = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CHARACTER_ARCS.filter((c) => {
      if (chapterFilter !== 0 && c.chapterNum !== chapterFilter) return false;
      if (roleFilter !== 'All' && c.role !== roleFilter) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.chapterTitle.toLowerCase().includes(q) ||
        c.adjectives.some((a) => a.toLowerCase().includes(q)) ||
        c.beforeState.toLowerCase().includes(q) ||
        c.turningPoint.toLowerCase().includes(q) ||
        c.afterState.toLowerCase().includes(q) ||
        c.boardTip.toLowerCase().includes(q)
      );
    });
  }, [query, chapterFilter, roleFilter]);

  const drillAnswered = LIT_DRILL_QUESTIONS.filter(
    (q) => drillAnswers[q.id] !== undefined
  ).length;
  const drillCorrect = LIT_DRILL_QUESTIONS.filter(
    (q) => drillAnswers[q.id] === q.correctIndex
  ).length;

  return (
    <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50/70 via-white to-slate-50 p-4 sm:p-6 dark:border-teal-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-teal-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-white shadow-xs">
            <Users className="h-4.5 w-4.5" />
          </span>
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              Footprints without Feet — Character Evolution, Twist Matrix &amp; 20-Q Trainer
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              All 9 supplementary chapters • 18 Before→After arcs, 5-adjective packs &amp; situational irony drill
            </p>
          </div>
        </div>

        <div className="inline-flex flex-wrap rounded-xl border border-teal-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-800">
          <button
            type="button"
            onClick={() => setTab('characters')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              tab === 'characters'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-teal-700 dark:text-slate-300'
            }`}
          >
            <GitBranch className="h-3.5 w-3.5" />
            Character Arcs (18)
          </button>
          <button
            type="button"
            onClick={() => setTab('matrix')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              tab === 'matrix'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-teal-700 dark:text-slate-300'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            9-Chapter Twist Matrix
          </button>
          <button
            type="button"
            onClick={() => setTab('drill')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              tab === 'drill'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-teal-700 dark:text-slate-300'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            20-Q Twist &amp; Trait Drill
          </button>
        </div>
      </div>

      {tab === 'characters' && (
        <div className="mt-4 space-y-4">
          <div className="grid gap-2.5 sm:grid-cols-12">
            <div className="sm:col-span-7 relative">
              <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search character, power adjective, turning point, or chapter..."
                className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </div>
            <div className="sm:col-span-5">
              <select
                value={chapterFilter}
                onChange={(e) => setChapterFilter(Number(e.target.value))}
                aria-label="Filter by chapter"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                <option value={0}>All 9 Chapters (18 Characters)</option>
                {CHAPTER_TWIST_MATRIX.map((ch) => (
                  <option key={ch.chapterNum} value={ch.chapterNum}>
                    Ch {ch.chapterNum}: {ch.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {ROLE_CATEGORIES.map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => setRoleFilter(role)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold border transition cursor-pointer ${
                  roleFilter === role
                    ? 'border-teal-600 bg-teal-600 text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-teal-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
            Showing {filteredCharacters.length} of {CHARACTER_ARCS.length} character evolution profiles
          </div>

          {filteredCharacters.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-xs text-slate-500 dark:border-slate-700">
              No matching characters. Reset search or role filters to view all 18 profiles.
            </div>
          ) : (
            <div className="grid gap-3 md:grid-cols-2">
              {filteredCharacters.map((char) => (
                <div
                  key={char.id}
                  className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5 shadow-2xs dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                        Ch {char.chapterNum}: {char.chapterTitle}
                      </span>
                      <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        {char.name}
                      </h5>
                    </div>
                    <span className="rounded-full border border-teal-200 bg-teal-50 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-teal-900 dark:border-teal-800 dark:bg-teal-950/60 dark:text-teal-300">
                      {char.role}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {char.adjectives.map((adj) => (
                      <span
                        key={adj}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                      >
                        {adj}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    <p>
                      <strong className="text-slate-900 dark:text-white">Before:</strong>{' '}
                      {char.beforeState}
                    </p>
                    <p>
                      <strong className="text-indigo-700 dark:text-indigo-400">Turning Point:</strong>{' '}
                      {char.turningPoint}
                    </p>
                    <p>
                      <strong className="text-emerald-700 dark:text-emerald-400">After:</strong>{' '}
                      {char.afterState}
                    </p>
                  </div>

                  <div className="rounded-lg bg-teal-50/70 border border-teal-200/70 px-2.5 py-1.5 text-xs italic font-semibold text-teal-950 dark:bg-teal-950/30 dark:border-teal-900 dark:text-teal-200">
                    {char.keyQuote}
                  </div>

                  <p className="text-[11px] text-slate-600 dark:text-slate-400">
                    <Award className="inline h-3.5 w-3.5 text-amber-600 mr-1 -mt-0.5" />
                    <strong className="text-slate-800 dark:text-slate-200">CBSE Tip:</strong>{' '}
                    {char.boardTip}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'matrix' && (
        <div className="mt-4 rounded-xl border border-slate-200 bg-white overflow-x-auto dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 dark:bg-slate-950/60 dark:border-slate-800">
                <th className="px-3 py-2.5 font-extrabold text-slate-800 dark:text-slate-200">
                  # &amp; Chapter
                </th>
                <th className="px-3 py-2.5 font-extrabold text-slate-800 dark:text-slate-200">
                  Author &amp; Genre
                </th>
                <th className="px-3 py-2.5 font-extrabold text-slate-800 dark:text-slate-200">
                  Central Irony / Turning Twist
                </th>
                <th className="px-3 py-2.5 font-extrabold text-slate-800 dark:text-slate-200">
                  Must-Memorize Facts
                </th>
                <th className="px-3 py-2.5 font-extrabold text-slate-800 dark:text-slate-200">
                  First Flight 6M Pairing
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {CHAPTER_TWIST_MATRIX.map((row) => (
                <tr
                  key={row.chapterNum}
                  className="hover:bg-teal-50/40 dark:hover:bg-slate-800/30"
                >
                  <td className="px-3 py-2.5 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                    Ch {row.chapterNum}: {row.title}
                  </td>
                  <td className="px-3 py-2.5 text-slate-600 dark:text-slate-300">
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      {row.author}
                    </div>
                    <div className="text-[11px]">{row.genre}</div>
                  </td>
                  <td className="px-3 py-2.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                    {row.centralTwist}
                  </td>
                  <td className="px-3 py-2.5 font-medium text-teal-900 dark:text-teal-300">
                    {row.mustKnowFacts}
                  </td>
                  <td className="px-3 py-2.5 text-indigo-800 dark:text-indigo-300">
                    {row.crossBookLink}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'drill' && (
        <div className="mt-4 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-teal-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-xs text-slate-700 dark:text-slate-300">
              Answered:{' '}
              <strong className="text-slate-900 dark:text-white">
                {drillAnswered} / {LIT_DRILL_QUESTIONS.length}
              </strong>
              {drillSubmitted && (
                <span className="ml-3 inline-flex items-center gap-1 font-extrabold text-emerald-700 dark:text-emerald-400">
                  <Trophy className="h-3.5 w-3.5" />
                  Score: {drillCorrect} / {LIT_DRILL_QUESTIONS.length}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {!drillSubmitted ? (
                <button
                  type="button"
                  onClick={() => setDrillSubmitted(true)}
                  disabled={drillAnswered === 0}
                  className="rounded-lg bg-teal-600 px-3.5 py-1.5 text-xs font-extrabold text-white hover:bg-teal-700 disabled:opacity-40 cursor-pointer"
                >
                  Check All Answers ({drillAnswered}/{LIT_DRILL_QUESTIONS.length})
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setDrillAnswers({});
                    setDrillSubmitted(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-800 hover:bg-slate-100 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Reset Drill
                </button>
              )}
            </div>
          </div>

          <div className="space-y-3">
            {LIT_DRILL_QUESTIONS.map((q, idx) => {
              const picked = drillAnswers[q.id];
              const isCorrect = picked === q.correctIndex;
              return (
                <div
                  key={q.id}
                  className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                      Q{idx + 1} • {q.chapter}
                    </span>
                    {drillSubmitted && picked !== undefined && (
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-bold ${
                          isCorrect
                            ? 'text-emerald-700 dark:text-emerald-400'
                            : 'text-rose-700 dark:text-rose-400'
                        }`}
                      >
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="h-3.5 w-3.5" /> Correct
                          </>
                        ) : (
                          <>
                            <XCircle className="h-3.5 w-3.5" /> Review
                          </>
                        )}
                      </span>
                    )}
                  </div>

                  <div className="rounded-lg bg-teal-50/70 border border-teal-200/70 px-3 py-2 text-xs font-bold italic text-teal-950 dark:bg-teal-950/30 dark:border-teal-900 dark:text-teal-200">
                    {q.extract}
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {q.prompt}
                  </p>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {q.options.map((opt, oIdx) => {
                      const chosen = picked === oIdx;
                      const showRight = drillSubmitted && oIdx === q.correctIndex;
                      const showWrong = drillSubmitted && chosen && !isCorrect;
                      return (
                        <button
                          key={oIdx}
                          type="button"
                          onClick={() => {
                            if (drillSubmitted) return;
                            setDrillAnswers((prev) => ({ ...prev, [q.id]: oIdx }));
                          }}
                          className={`rounded-lg border px-3 py-2 text-left text-xs font-semibold transition cursor-pointer ${
                            showRight
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-200'
                              : showWrong
                              ? 'border-rose-500 bg-rose-50 text-rose-950 dark:bg-rose-950/40 dark:text-rose-200'
                              : chosen
                              ? 'border-teal-600 bg-teal-50 text-teal-950 dark:bg-teal-950/50 dark:text-teal-200'
                              : 'border-slate-200 bg-slate-50/70 text-slate-800 hover:border-teal-300 dark:border-slate-700 dark:bg-slate-950/50 dark:text-slate-200'
                          }`}
                        >
                          {String.fromCharCode(65 + oIdx)}. {opt}
                        </button>
                      );
                    })}
                  </div>

                  {drillSubmitted && (
                    <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-700 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-300">
                      <strong className="text-slate-900 dark:text-white">CBSE Key:</strong>{' '}
                      {q.rationale}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
