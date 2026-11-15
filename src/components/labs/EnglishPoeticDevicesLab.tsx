import { useMemo, useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Feather,
  RotateCcw,
  Search,
  Sparkles,
  Trophy,
  XCircle,
} from 'lucide-react';

type LabTab = 'explorer' | 'drill';

type DeviceCategory =
  | 'All'
  | 'Metaphor'
  | 'Simile'
  | 'Personification'
  | 'Oxymoron'
  | 'Transferred Epithet'
  | 'Enjambment'
  | 'Alliteration'
  | 'Assonance / Consonance'
  | 'Anaphora'
  | 'Allusion'
  | 'Poetic Licence'
  | 'Synecdoche'
  | 'Onomatopoeia'
  | 'Irony / Parody';

interface PoemSummaryRow {
  num: number;
  title: string;
  poet: string;
  rhymeScheme: string;
  form: string;
  keySymbol: string;
}

interface DeviceEntry {
  id: string;
  poemNum: number;
  poemTitle: string;
  device: Exclude<DeviceCategory, 'All'>;
  line: string;
  explanation: string;
}

interface SpotQuestion {
  id: string;
  poem: string;
  quote: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  rationale: string;
}

const POEM_MATRIX: PoemSummaryRow[] = [
  {
    num: 1,
    title: 'Dust of Snow',
    poet: 'Robert Frost',
    rhymeScheme: 'abab cdcd',
    form: '2 Quatrains (1 continuous 8-line sentence)',
    keySymbol: 'Crow & hemlock (dark omens) -> healing renewal',
  },
  {
    num: 2,
    title: 'Fire and Ice',
    poet: 'Robert Frost',
    rhymeScheme: 'abaa bcbcb',
    form: '9-line epigrammatic lyric',
    keySymbol: 'Fire = desire/greed; Ice = cold hate/indifference',
  },
  {
    num: 3,
    title: 'A Tiger in the Zoo',
    poet: 'Leslie Norris',
    rhymeScheme: 'abcb',
    form: '5 Quatrains (Zoo -> Jungle -> Zoo)',
    keySymbol: 'Concrete cell vs. jungle water hole & brilliant stars',
  },
  {
    num: 4,
    title: 'How to Tell Wild Animals',
    poet: 'Carolyn Wells',
    rhymeScheme: 'ababcc',
    form: '6 Sestets (humorous didactic parody)',
    keySymbol: 'Absurd "field guide" satire & archaic wordplay',
  },
  {
    num: 5,
    title: 'The Ball Poem',
    poet: 'John Berryman',
    rhymeScheme: 'Blank / Free Verse (No rhyme)',
    form: '18-line unrhymed meditation',
    keySymbol: 'Lost ball = fleeting childhood; "money is external"',
  },
  {
    num: 6,
    title: 'Amanda!',
    poet: 'Robin Klein',
    rhymeScheme: 'aaba + (ccc) fantasies',
    form: 'Alternating parental quatrains & bracketed tercets',
    keySymbol: 'Mermaid, orphan, Rapunzel = longing for silence/freedom',
  },
  {
    num: 7,
    title: 'The Trees',
    poet: 'Adrienne Rich',
    rhymeScheme: 'Free Verse (No rhyme)',
    form: '4 narrative/allegorical stanzas',
    keySymbol: 'Indoor plants breaking glass = feminist/nature liberation',
  },
  {
    num: 8,
    title: 'Fog',
    poet: 'Carl Sandburg',
    rhymeScheme: 'Free Verse (No rhyme)',
    form: '6-line imagist extended metaphor',
    keySymbol: 'Silent cat crouching over harbour & city',
  },
  {
    num: 9,
    title: 'The Tale of Custard the Dragon',
    poet: 'Ogden Nash',
    rhymeScheme: 'aabb (Stanza 13: aabbcc)',
    form: 'Mock-heroic humorous ballad',
    keySymbol: 'Cage-craving dragon vs. loud cowardly pets',
  },
  {
    num: 10,
    title: 'For Anne Gregory',
    poet: 'W. B. Yeats',
    rhymeScheme: 'abcbdb',
    form: '3 conversational 6-line stanzas',
    keySymbol: 'Honey-coloured ramparts = superficial physical attraction',
  },
];

const DEVICE_CATEGORIES: DeviceCategory[] = [
  'All',
  'Metaphor',
  'Simile',
  'Personification',
  'Oxymoron',
  'Transferred Epithet',
  'Enjambment',
  'Alliteration',
  'Assonance / Consonance',
  'Anaphora',
  'Allusion',
  'Poetic Licence',
  'Synecdoche',
  'Onomatopoeia',
  'Irony / Parody',
];

const DEVICE_ENTRIES: DeviceEntry[] = [
  // Poem 1: Dust of Snow
  {
    id: 'd1',
    poemNum: 1,
    poemTitle: 'Dust of Snow',
    device: 'Enjambment',
    line: 'The way a crow / Shook down on me / ... Of a day I had rued.',
    explanation:
      'One single grammatical sentence flows across all 8 lines without mid-poem punctuation, mirroring the swift, seamless emotional lift.',
  },
  {
    id: 'd2',
    poemNum: 1,
    poemTitle: 'Dust of Snow',
    device: 'Assonance / Consonance',
    line: '"Shook down on me" / "Has given my heart"',
    explanation:
      'Prominent repetition of the "o" vowel sound ("Shook down on") creates soft winter heaviness; recurring "d" consonants add crisp finality.',
  },
  {
    id: 'd3',
    poemNum: 1,
    poemTitle: 'Dust of Snow',
    device: 'Synecdoche',
    line: '"Has given my heart / A change of mood"',
    explanation:
      '"My heart" (one part/organ) stands for the speaker’s entire inner self and mental state.',
  },
  {
    id: 'd4',
    poemNum: 1,
    poemTitle: 'Dust of Snow',
    device: 'Alliteration',
    line: '"Has given my heart" / "And saved some part"',
    explanation:
      'Repetition of initial /h/ ("Has... heart") and /s/ ("saved some") tightens the short dimeter rhythm.',
  },
  {
    id: 'd5',
    poemNum: 1,
    poemTitle: 'Dust of Snow',
    device: 'Irony / Parody',
    line: 'The crow + hemlock tree save his ruined day',
    explanation:
      'Situational irony: two traditional symbols of gloom and poison unexpectedly become catalysts of joy.',
  },

  // Poem 2: Fire and Ice
  {
    id: 'd6',
    poemNum: 2,
    poemTitle: 'Fire and Ice',
    device: 'Anaphora',
    line: '"Some say the world will end in fire / Some say in ice."',
    explanation:
      'Repeating "Some say" at the start of consecutive lines captures polarized public predictions.',
  },
  {
    id: 'd7',
    poemNum: 2,
    poemTitle: 'Fire and Ice',
    device: 'Metaphor',
    line: '"fire" = desire, greed, fury; "ice" = cold hatred, indifference',
    explanation:
      'Elemental extremes directly equate destructive human passions and apathetic cruelty with cosmic apocalypse.',
  },
  {
    id: 'd8',
    poemNum: 2,
    poemTitle: 'Fire and Ice',
    device: 'Alliteration',
    line: '"Some say", "world will", "favour fire"',
    explanation:
      'Sharp /s/, /w/, and /f/ initial consonants lend epigrammatic punch to Frost’s warning.',
  },
  {
    id: 'd9',
    poemNum: 2,
    poemTitle: 'Fire and Ice',
    device: 'Enjambment',
    line: '"I think I know enough of hate / To say that for destruction ice / Is also great"',
    explanation:
      'Thought runs across lines 6–9 before landing on the chillingly clipped understatement "And would suffice."',
  },
  {
    id: 'd10',
    poemNum: 2,
    poemTitle: 'Fire and Ice',
    device: 'Irony / Parody',
    line: '"for destruction ice / Is also great / And would suffice."',
    explanation:
      'Grim understatement: pairing the cheerful word "great" with global "destruction" intensifies the dark irony.',
  },

  // Poem 3: A Tiger in the Zoo
  {
    id: 'd11',
    poemNum: 3,
    poemTitle: 'A Tiger in the Zoo',
    device: 'Personification',
    line: '"He stalks in his vivid stripes" / "Ignoring visitors"',
    explanation:
      'Pronoun "he" and proud human attitude ("ignoring visitors") endow the captive tiger with regal dignity.',
  },
  {
    id: 'd12',
    poemNum: 3,
    poemTitle: 'A Tiger in the Zoo',
    device: 'Metaphor',
    line: '"On pads of velvet quiet"',
    explanation:
      'Tiger’s padded paws are implicitly likened to soft velvet for noiseless pacing — no "like" or "as".',
  },
  {
    id: 'd13',
    poemNum: 3,
    poemTitle: 'A Tiger in the Zoo',
    device: 'Oxymoron',
    line: '"In his quiet rage"',
    explanation:
      'Combines contradictory ideas — "quiet" (silent, restrained) and "rage" (violent fury) — capturing suppressed captivity.',
  },
  {
    id: 'd14',
    poemNum: 3,
    poemTitle: 'A Tiger in the Zoo',
    device: 'Synecdoche',
    line: '"His strength behind bars"',
    explanation:
      '"Strength" (an attribute) or body-in-miniature represents the whole majestic tiger caged behind concrete walls.',
  },
  {
    id: 'd15',
    poemNum: 3,
    poemTitle: 'A Tiger in the Zoo',
    device: 'Alliteration',
    line: '"plump deer pass", "concrete cell", "behind bars"',
    explanation:
      'Repeating /p/, hard /k/ ("concrete cell"), and /b/ sounds emphasise lush prey vs. brutal imprisonment.',
  },

  // Poem 4: How to Tell Wild Animals
  {
    id: 'd16',
    poemNum: 4,
    poemTitle: 'How to Tell Wild Animals',
    device: 'Poetic Licence',
    line: '"dyin’" (for lion), "lept" & "lep" (for leopard)',
    explanation:
      'Intentional distortion of standard spelling/pronunciation to maintain comic rhythm and bouncy rhymes.',
  },
  {
    id: 'd17',
    poemNum: 4,
    poemTitle: 'How to Tell Wild Animals',
    device: 'Irony / Parody',
    line: '"Just notice if he eats you" / "one more caress"',
    explanation:
      'Deadpan understatement disguises lethal mauling by a Bengal tiger or crushing bear hug as polite social greetings.',
  },
  {
    id: 'd18',
    poemNum: 4,
    poemTitle: 'How to Tell Wild Animals',
    device: 'Alliteration',
    line: '"roaming round", "lep and lep again", "very, very hard", "hugs you"',
    explanation:
      'Playful sound echoes create a light-hearted nursery-rhyme bounce despite fatal scenarios.',
  },
  {
    id: 'd19',
    poemNum: 4,
    poemTitle: 'How to Tell Wild Animals',
    device: 'Assonance / Consonance',
    line: '"you should go... to jungles", "strolling forth... spots"',
    explanation:
      'Long "o" assonance and crisp plosive consonants keep the mock-educational tone lively.',
  },

  // Poem 5: The Ball Poem
  {
    id: 'd20',
    poemNum: 5,
    poemTitle: 'The Ball Poem',
    device: 'Transferred Epithet',
    line: '"behind his desperate eyes"',
    explanation:
      'The boy himself feels hopeless and desperate, not literally his eyes — the adjective is transferred from person to body part.',
  },
  {
    id: 'd21',
    poemNum: 5,
    poemTitle: 'The Ball Poem',
    device: 'Anaphora',
    line: '"What is the boy now... / What, what is he to do?"',
    explanation:
      'Repeating "What" at the start of adjacent lines conveys shock and empathy as the ball vanishes.',
  },
  {
    id: 'd22',
    poemNum: 5,
    poemTitle: 'The Ball Poem',
    device: 'Metaphor',
    line: '"staring down / All his young days into the harbour" / "Balls, balls will be lost"',
    explanation:
      'The lost ball equals fleeting childhood and cherished memories; "balls" stand for worldly possessions and loved attachments.',
  },
  {
    id: 'd23',
    poemNum: 5,
    poemTitle: 'The Ball Poem',
    device: 'Alliteration',
    line: '"buys a ball back"',
    explanation:
      'Hard /b/ thuds ("buys... ball back") reinforce the blunt finality of external money’s limits.',
  },
  {
    id: 'd24',
    poemNum: 5,
    poemTitle: 'The Ball Poem',
    device: 'Assonance / Consonance',
    line: '"He is learning, well behind his desperate eyes"',
    explanation:
      'Repeated /e/ vowel sounds and soft /s/ consonants underscore quiet, painful inward maturation.',
  },

  // Poem 6: Amanda!
  {
    id: 'd25',
    poemNum: 6,
    poemTitle: 'Amanda!',
    device: 'Allusion',
    line: '"I am a mermaid..." / "I am Rapunzel..."',
    explanation:
      'Alludes to folklore/fairy-tale figures representing complete solitude and rescue-free autonomy (vowing never to let hair down!).',
  },
  {
    id: 'd26',
    poemNum: 6,
    poemTitle: 'Amanda!',
    device: 'Anaphora',
    line: '"Don’t bite your nails... / Don’t hunch..." ; "Did you finish... / Did you tidy..."',
    explanation:
      'Relentless repeated imperatives ("Don’t...", "Did you...") mimic exhausting parental micro-management.',
  },
  {
    id: 'd27',
    poemNum: 6,
    poemTitle: 'Amanda!',
    device: 'Metaphor',
    line: '"The silence is golden, the freedom is sweet"',
    explanation:
      'Equates peaceful silence directly to precious gold and liberty to sweetness — no comparison words used.',
  },
  {
    id: 'd28',
    poemNum: 6,
    poemTitle: 'Amanda!',
    device: 'Transferred Epithet',
    line: '"my hushed, bare feet"',
    explanation:
      '"Hushed" describes Amanda’s quiet, unharried emotional refuge projected onto her bare feet patterning soft dust.',
  },
  {
    id: 'd29',
    poemNum: 6,
    poemTitle: 'Amanda!',
    device: 'Alliteration',
    line: '"Stop that slouching and sit up straight"',
    explanation:
      'Crisp hissing /s/ sounds mirror sharp, scolding parental commands.',
  },

  // Poem 7: The Trees
  {
    id: 'd30',
    poemNum: 7,
    poemTitle: 'The Trees',
    device: 'Simile',
    line: '"like newly discharged patients / half-dazed, moving / to the clinic doors"',
    explanation:
      'Uses "like" to compare stiff, cramped branches awkwardly shuffling out after captivity to recovering hospital patients.',
  },
  {
    id: 'd31',
    poemNum: 7,
    poemTitle: 'The Trees',
    device: 'Simile',
    line: '"The moon is broken like a mirror"',
    explanation:
      'Explicitly uses "like" as leafy oak branches visually fracture the full moon’s disc into gleaming shards.',
  },
  {
    id: 'd32',
    poemNum: 7,
    poemTitle: 'The Trees',
    device: 'Personification',
    line: '"no sun bury its feet in shadow" / "roots work / to disengage themselves"',
    explanation:
      'Sunlight is given human feet, while roots, leaves, twigs, and winds act with conscious nocturnal urgency.',
  },
  {
    id: 'd33',
    poemNum: 7,
    poemTitle: 'The Trees',
    device: 'Anaphora',
    line: '"where no bird could sit / no insect hide / no sun bury its feet"',
    explanation:
      'Parallel repetition of "no" builds a stark catalogue of ecological sterility in an empty forest.',
  },
  {
    id: 'd34',
    poemNum: 7,
    poemTitle: 'The Trees',
    device: 'Enjambment',
    line: '"long-cramped boughs shuffling under the roof / like newly discharged patients / half-dazed, moving"',
    explanation:
      'Unbroken free-verse flow mirrors the steady, unstoppable midnight exodus out past shattering glass.',
  },

  // Poem 8: Fog
  {
    id: 'd35',
    poemNum: 8,
    poemTitle: 'Fog',
    device: 'Metaphor',
    line: '"The fog comes / on little cat feet... on silent haunches"',
    explanation:
      'Extended metaphor across all 6 lines — never uses "like" or "as" — equating weather’s silent poise directly with a cat.',
  },
  {
    id: 'd36',
    poemNum: 8,
    poemTitle: 'Fog',
    device: 'Personification',
    line: '"It sits looking / over harbour and city... and then moves on"',
    explanation:
      'Grants the inanimate fog deliberate observation and calm agency as it watches before slipping away.',
  },
  {
    id: 'd37',
    poemNum: 8,
    poemTitle: 'Fog',
    device: 'Transferred Epithet',
    line: '"on silent haunches"',
    explanation:
      'Silence belongs to the noiseless atmosphere/cat’s nature, attributed directly to its crouching haunches.',
  },
  {
    id: 'd38',
    poemNum: 8,
    poemTitle: 'Fog',
    device: 'Enjambment',
    line: 'Lines 1–6 unpunctuated except periods after "feet." and "on."',
    explanation:
      'Smooth line breaks mimic creeping mist drifting without sudden interruption.',
  },

  // Poem 9: The Tale of Custard the Dragon
  {
    id: 'd39',
    poemNum: 9,
    poemTitle: 'The Tale of Custard the Dragon',
    device: 'Simile',
    line: '"Mouth like a fireplace", "brave as a barrel full of bears", "like a robin at a worm"',
    explanation:
      'Rich comical similes using "like"/"as" contrast hollow boasts ("brave as a tiger") with Custard’s sudden fierce efficiency.',
  },
  {
    id: 'd40',
    poemNum: 9,
    poemTitle: 'The Tale of Custard the Dragon',
    device: 'Metaphor',
    line: '"chimney for a nose" / "daggers on his toes"',
    explanation:
      'Directly identifies smoke-belching nostrils as a chimney and sharp claws as literal daggers.',
  },
  {
    id: 'd41',
    poemNum: 9,
    poemTitle: 'The Tale of Custard the Dragon',
    device: 'Onomatopoeia',
    line: '"Weeck!", "Meowch!", "snorting", "With a clatter and a clank"',
    explanation:
      'Sound-imitating words energise mouse/cat reactions and Custard’s metallic charge against the pirate.',
  },
  {
    id: 'd42',
    poemNum: 9,
    poemTitle: 'The Tale of Custard the Dragon',
    device: 'Allusion',
    line: '"they rudely called him Percival"',
    explanation:
      'Ironic allusion to King Arthur’s legendary knight Sir Percival, mocking timid Custard’s peaceful nature.',
  },
  {
    id: 'd43',
    poemNum: 9,
    poemTitle: 'The Tale of Custard the Dragon',
    device: 'Poetic Licence',
    line: '"realio, trulio", "winda" (for window), "mouseholed"',
    explanation:
      'Coined distortions and non-standard spellings preserve playful ballad metre and rhyme ("Belinda / winda").',
  },
  {
    id: 'd44',
    poemNum: 9,
    poemTitle: 'The Tale of Custard the Dragon',
    device: 'Irony / Parody',
    line: 'After Mustard/Ink/Blink flee, Custard agrees "everybody is braver than me."',
    explanation:
      'Ballad parody peaks when boastful cowards reclaim bravado while the true hero calmly asks again for his "nice safe cage".',
  },

  // Poem 10: For Anne Gregory
  {
    id: 'd45',
    poemNum: 10,
    poemTitle: 'For Anne Gregory',
    device: 'Metaphor',
    line: '"great honey-coloured / Ramparts at your ear"',
    explanation:
      'Equates Anne’s golden curls framing her face to fortified castle ramparts guarding her inner self from true affection.',
  },
  {
    id: 'd46',
    poemNum: 10,
    poemTitle: 'For Anne Gregory',
    device: 'Alliteration',
    line: '"your yellow", "Brown, or black", "he had", "set such"',
    explanation:
      'Crisp consonant pairings ("Brown, or black") give the brisk dialogue musical polish.',
  },
  {
    id: 'd47',
    poemNum: 10,
    poemTitle: 'For Anne Gregory',
    device: 'Anaphora',
    line: 'Refrain closing every stanza: "Love you for yourself alone / And not your yellow hair."',
    explanation:
      'Notice: exact refrain repetition across all 3 stanzas hammers the central philosophical question of outer vs. inner beauty.',
  },
  {
    id: 'd48',
    poemNum: 10,
    poemTitle: 'For Anne Gregory',
    device: 'Synecdoche',
    line: '"your yellow hair"',
    explanation:
      'One physical feature ("yellow hair") stands for all superficial physical attractiveness.',
  },
];

const SPOT_DRILL_QUESTIONS: SpotQuestion[] = [
  {
    id: 'sd-01',
    poem: 'Poem 3: A Tiger in the Zoo',
    quote: '"On pads of velvet quiet"',
    prompt: 'Identify the poetic device used in the highlighted image above:',
    options: ['Simile', 'Metaphor', 'Oxymoron', 'Transferred Epithet'],
    correctIndex: 1,
    rationale:
      'The tiger’s soft padded feet are directly equated with velvet without "like" or "as" — making it a Metaphor.',
  },
  {
    id: 'sd-02',
    poem: 'Poem 3: A Tiger in the Zoo',
    quote: '"In his quiet rage"',
    prompt: 'Which poetic device pairs two contradictory terms here?',
    options: ['Alliteration', 'Oxymoron', 'Transferred Epithet', 'Anaphora'],
    correctIndex: 1,
    rationale:
      '"Quiet" (silence/restraint) and "rage" (fierce fury) directly contradict each other, forming a classic Oxymoron.',
  },
  {
    id: 'sd-03',
    poem: 'Poem 5: The Ball Poem',
    quote: '"behind his desperate eyes"',
    prompt: 'Which device shifts an emotional adjective from the boy to his eyes?',
    options: ['Transferred Epithet', 'Synecdoche', 'Simile', 'Onomatopoeia'],
    correctIndex: 0,
    rationale:
      'It is the grieving boy — not literally his eyes — who feels desperate. Transferring the epithet is a key board question!',
  },
  {
    id: 'sd-04',
    poem: 'Poem 7: The Trees',
    quote: '"The moon is broken like a mirror"',
    prompt: 'Spot the primary figure of speech in this closing image:',
    options: ['Metaphor', 'Simile', 'Oxymoron', 'Allusion'],
    correctIndex: 1,
    rationale:
      'Explicit comparison using the word "like" makes this a Simile.',
  },
  {
    id: 'sd-05',
    poem: 'Poem 8: Fog',
    quote: '"The fog comes / on little cat feet"',
    prompt: 'Does Carl Sandburg use a Simile or Metaphor across "Fog"?',
    options: [
      'Simile (compares with "as")',
      'Extended Metaphor (implicit equation without "like" or "as")',
      'Oxymoron',
      'Poetic Licence',
    ],
    correctIndex: 1,
    rationale:
      'Because "like" and "as" never appear, fog = stealthy cat is an Extended Metaphor + Personification ("sits looking").',
  },
  {
    id: 'sd-06',
    poem: 'Poem 4: How to Tell Wild Animals',
    quote: '"As soon as he has lept on you... He’ll only lep and lep again."',
    prompt: 'Why are "lept" and "lep" spelt non-standardly here?',
    options: [
      'Printing error in NCERT',
      'Transferred Epithet',
      'Poetic Licence (intentional distortion for comic rhythm)',
      'Historical Allusion',
    ],
    correctIndex: 2,
    rationale:
      'Carolyn Wells uses Poetic Licence to twist "leapt/leap" into "lept/lep" (and "dying" into "dyin’") for humour and rhyme.',
  },
  {
    id: 'sd-07',
    poem: 'Poem 6: Amanda!',
    quote: '"(I am Rapunzel, I have not a care... I’ll certainly never let down my bright hair!)"',
    prompt: 'Referring to a well-known fairy-tale character exemplifies:',
    options: ['Allusion', 'Anaphora', 'Onomatopoeia', 'Oxymoron'],
    correctIndex: 0,
    rationale:
      'Invoking the Grimm fairy-tale figure Rapunzel — while humorously twisting it so no prince rescues her — is an Allusion.',
  },
  {
    id: 'sd-08',
    poem: 'Poem 9: The Tale of Custard the Dragon',
    quote: '"Ink, Blink and Mustard, they rudely called him Percival"',
    prompt: 'Mockingly nicknaming Custard after King Arthur’s brave knight is both Sarcasm and:',
    options: ['Onomatopoeia', 'Transferred Epithet', 'Allusion', 'Enjambment'],
    correctIndex: 2,
    rationale:
      'Sir Percival is a knight of the Round Table — an ironic Allusion mocking Custard’s gentle timidity.',
  },
  {
    id: 'sd-09',
    poem: 'Poem 1: Dust of Snow',
    quote: 'The entire 8-line poem flows with zero punctuation until the final full stop.',
    prompt: 'Sentences continuing smoothly across line/stanza breaks without end-stop marks demonstrate:',
    options: ['Anaphora', 'Enjambment', 'Free Verse', 'Assonance'],
    correctIndex: 1,
    rationale:
      'One syntactic sentence spanning stanzas without punctuation pauses is textbook Enjambment.',
  },
  {
    id: 'sd-10',
    poem: 'Poem 7: The Trees',
    quote: '"where no bird could sit / no insect hide / no sun bury its feet in shadow"',
    prompt: 'Repeating "no..." at the start of consecutive lines PLUS giving the sun "feet" combines:',
    options: [
      'Anaphora + Personification',
      'Simile + Poetic Licence',
      'Oxymoron + Allusion',
      'Rhyme + Refrain',
    ],
    correctIndex: 0,
    rationale:
      '"no bird / no insect / no sun" at line openings is Anaphora; giving the sun "feet" is Personification.',
  },
  {
    id: 'sd-11',
    poem: 'Poem 10: For Anne Gregory',
    quote: '"By those great honey-coloured / Ramparts at your ear"',
    prompt: 'Comparing golden curls beside her ear to defensive fort walls without "like/as" is:',
    options: ['Simile', 'Metaphor', 'Onomatopoeia', 'Oxymoron'],
    correctIndex: 1,
    rationale:
      'Golden curls are directly called "Ramparts" — a Metaphor suggesting beauty acts as a barrier concealing her inner soul.',
  },
  {
    id: 'sd-12',
    poem: 'Poem 9: The Tale of Custard the Dragon',
    quote: '"Mouth like a fireplace, chimney for a nose"',
    prompt: 'In this single line, the TWO halves respectively use:',
    options: [
      'Metaphor followed by Simile',
      'Simile ("like a fireplace") followed by Metaphor ("chimney for a nose")',
      'Both Oxymorons',
      'Personification followed by Allusion',
    ],
    correctIndex: 1,
    rationale:
      'Exam favourite: first half uses "like" (Simile); second half drops comparison words ("chimney for a nose" = Metaphor).',
  },
  {
    id: 'sd-13',
    poem: 'Poem 2: Fire and Ice',
    quote: '"Some say the world will end in fire / Some say in ice."',
    prompt: 'Which pair accurately names BOTH the opening repetition device and the rhyme scheme of Poem 2?',
    options: [
      'Epistrophe + abab cdcd',
      'Anaphora + abaa bcbcb',
      'Transferred Epithet + Free Verse',
      'Onomatopoeia + ababcc',
    ],
    correctIndex: 1,
    rationale:
      'Repeating "Some say" opens both lines (Anaphora); fire/ice/desire/fire + twice/hate/ice/great/suffice traces abaa bcbcb.',
  },
  {
    id: 'sd-14',
    poem: 'Poem 9: The Tale of Custard the Dragon',
    quote: '"With a clatter and a clank and a jangling squirm"',
    prompt: 'Words like "clatter", "clank", "Weeck!", and "Meowch!" produce vivid sound through:',
    options: ['Onomatopoeia', 'Assonance', 'Synecdoche', 'Transferred Epithet'],
    correctIndex: 0,
    rationale:
      'Words whose pronunciation imitates real physical/animal sounds are Onomatopoeia.',
  },
  {
    id: 'sd-15',
    poem: 'Poem 1: Dust of Snow',
    quote: '"Shook down on me"',
    prompt: 'The strong repetition of the internal vowel sound "o" in close proximity illustrates:',
    options: ['Alliteration', 'Assonance', 'Onomatopoeia', 'Oxymoron'],
    correctIndex: 1,
    rationale:
      'Repeating stressed vowel sounds inside neighbouring words ("Shook... on") is Assonance.',
  },
  {
    id: 'sd-16',
    poem: 'Poem 5: The Ball Poem',
    quote: '"A dime, another ball, is worthless... Money is external."',
    prompt: 'Why is John Berryman’s "The Ball Poem" a trap question on CBSE Rhyme Scheme MCQs?',
    options: [
      'It follows abab cdcd strictly',
      'It follows abcb across quatrains',
      'It is written in Free / Blank Verse with NO rhyme scheme',
      'It uses rhyming couplets aabb',
    ],
    correctIndex: 2,
    rationale:
      'Along with "The Trees" and "Fog", "The Ball Poem" has NO rhyme scheme — reflecting raw, unornamented emotional realism.',
  },
  {
    id: 'sd-17',
    poem: 'Poem 6: Amanda!',
    quote: '"The silence is golden, the freedom is sweet."',
    prompt: 'Equating abstract concepts ("silence", "freedom") to gold and sweetness showcases:',
    options: ['Simile', 'Metaphor', 'Poetic Licence', 'Oxymoron'],
    correctIndex: 1,
    rationale:
      'Direct equating ("is golden", "is sweet") without "like" or "as" is Metaphor.',
  },
  {
    id: 'sd-18',
    poem: 'Poem 8: Fog',
    quote: '"on silent haunches"',
    prompt: 'Attributing quietness directly to the cat-like posture of the fog is:',
    options: ['Transferred Epithet', 'Irony', 'Simile', 'Allusion'],
    correctIndex: 0,
    rationale:
      '"Silent" qualifies the fog’s stealthy manner but grammatically attaches to "haunches" — Transferred Epithet.',
  },
  {
    id: 'sd-19',
    poem: 'Poem 3: A Tiger in the Zoo',
    quote: '"His strength behind bars"',
    prompt: 'Aside from /b/ alliteration ("behind bars"), using the abstract quality "strength" to signify the caged animal is:',
    options: ['Synecdoche / Metonymy', 'Poetic Licence', 'Simile', 'Refrain'],
    correctIndex: 0,
    rationale:
      'Standing an essential quality ("strength") for the whole creature underscores how concrete bars confine raw majesty.',
  },
  {
    id: 'sd-20',
    poem: 'Poem 6: Amanda!',
    quote: 'Alternating outer aaba commands with inner parenthetical (ccc) escapes',
    prompt: 'What is the specific structural effect of placing Amanda’s fantasies inside parentheses `( ... )`?',
    options: [
      'Shows Amanda speaking loudly to neighbours',
      'Graphically depicts Amanda retreating into private unspoken daydreams amid constant nagging',
      'Indicates comic parody like Ogden Nash',
      'Marks poetic licence for defective rhymes',
    ],
    correctIndex: 1,
    rationale:
      'Brackets isolate Amanda’s muted interior world visually from the loud outer commands ending in "Amanda!"',
  },
];

export function EnglishPoeticDevicesLab() {
  const [tab, setTab] = useState<LabTab>('explorer');
  const [showMatrixStrip, setShowMatrixStrip] = useState(true);
  const [selectedDevice, setSelectedDevice] = useState<DeviceCategory>('All');
  const [selectedPoem, setSelectedPoem] = useState<number>(0);
  const [query, setQuery] = useState('');

  // Spot Drill state
  const [drillAnswers, setDrillAnswers] = useState<Record<string, number>>({});
  const [drillSubmitted, setDrillSubmitted] = useState(false);

  const filteredDevices = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DEVICE_ENTRIES.filter((item) => {
      if (selectedDevice !== 'All' && item.device !== selectedDevice) return false;
      if (selectedPoem !== 0 && item.poemNum !== selectedPoem) return false;
      if (!q) return true;
      return (
        item.line.toLowerCase().includes(q) ||
        item.device.toLowerCase().includes(q) ||
        item.poemTitle.toLowerCase().includes(q) ||
        item.explanation.toLowerCase().includes(q)
      );
    });
  }, [selectedDevice, selectedPoem, query]);

  const drillAnswered = SPOT_DRILL_QUESTIONS.filter(
    (q) => drillAnswers[q.id] !== undefined
  ).length;
  const drillCorrect = SPOT_DRILL_QUESTIONS.filter(
    (q) => drillAnswers[q.id] === q.correctIndex
  ).length;

  return (
    <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 p-4 sm:p-6 dark:border-indigo-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-indigo-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs">
            <Feather className="h-4.5 w-4.5" />
          </span>
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              First Flight Poetry — Poetic Devices Explorer &amp; 20-Q Speed Drill
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              All 10 rationalized NCERT poems • Rhyme schemes, 48 curated line examples &amp; live board-trap drill
            </p>
          </div>
        </div>

        <div className="inline-flex rounded-xl border border-indigo-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-800">
          <button
            type="button"
            onClick={() => setTab('explorer')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              tab === 'explorer'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-indigo-700 dark:text-slate-300'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            Explorer &amp; 10-Poem Matrix
          </button>
          <button
            type="button"
            onClick={() => setTab('drill')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              tab === 'drill'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-indigo-700 dark:text-slate-300'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Spot-the-Device Drill (20 Qs)
          </button>
        </div>
      </div>

      {tab === 'explorer' ? (
        <div className="mt-4 space-y-5">
          {/* 10-Poem Quick Strip */}
          <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <button
              type="button"
              onClick={() => setShowMatrixStrip((s) => !s)}
              className="w-full flex items-center justify-between px-4 py-2.5 text-left cursor-pointer hover:bg-slate-50/80 dark:hover:bg-slate-800/40 rounded-xl"
            >
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-800 dark:text-indigo-300 flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5" />
                10-Poem Rhyme Scheme &amp; Form Quick Strip
              </span>
              {showMatrixStrip ? (
                <ChevronUp className="h-4 w-4 text-slate-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-slate-500" />
              )}
            </button>

            {showMatrixStrip && (
              <div className="border-t border-slate-100 overflow-x-auto dark:border-slate-800">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 dark:bg-slate-950/60 dark:border-slate-800">
                      <th className="px-3 py-2 font-bold text-slate-700 dark:text-slate-300">#</th>
                      <th className="px-3 py-2 font-bold text-slate-700 dark:text-slate-300">
                        Poem &amp; Poet
                      </th>
                      <th className="px-3 py-2 font-bold text-slate-700 dark:text-slate-300">
                        Rhyme Scheme
                      </th>
                      <th className="px-3 py-2 font-bold text-slate-700 dark:text-slate-300">
                        Form &amp; Key Symbol
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {POEM_MATRIX.map((row) => (
                      <tr
                        key={row.num}
                        onClick={() =>
                          setSelectedPoem((curr) => (curr === row.num ? 0 : row.num))
                        }
                        className={`cursor-pointer transition ${
                          selectedPoem === row.num
                            ? 'bg-indigo-50 dark:bg-indigo-950/40'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800/30'
                        }`}
                      >
                        <td className="px-3 py-1.5 font-mono font-bold text-indigo-700 dark:text-indigo-400">
                          {row.num}
                        </td>
                        <td className="px-3 py-1.5 font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                          {row.title}{' '}
                          <span className="font-normal text-slate-500 dark:text-slate-400">
                            — {row.poet}
                          </span>
                        </td>
                        <td className="px-3 py-1.5 font-mono text-[11px] font-bold text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                          {row.rhymeScheme}
                        </td>
                        <td className="px-3 py-1.5 text-slate-600 dark:text-slate-300">
                          {row.form} • <span className="text-slate-800 dark:text-slate-200">{row.keySymbol}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Filter Controls */}
          <div className="space-y-3">
            <div className="grid gap-2.5 sm:grid-cols-12">
              <div className="sm:col-span-7 relative">
                <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search line, device, poem title, or exam note..."
                  className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>
              <div className="sm:col-span-5">
                <select
                  value={selectedPoem}
                  onChange={(e) => setSelectedPoem(Number(e.target.value))}
                  aria-label="Filter by poem"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 focus:border-indigo-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                >
                  <option value={0}>All 10 Poems (48 Examples)</option>
                  {POEM_MATRIX.map((p) => (
                    <option key={p.num} value={p.num}>
                      Poem {p.num}: {p.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {DEVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedDevice(cat)}
                  className={`rounded-full px-2.5 py-1 text-[11px] font-bold border transition cursor-pointer ${
                    selectedDevice === cat
                      ? 'border-indigo-600 bg-indigo-600 text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Filtered Entries */}
          <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
            Showing {filteredDevices.length} of {DEVICE_ENTRIES.length} poetic device entries
          </div>

          {filteredDevices.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-xs text-slate-500 dark:border-slate-700">
              No matching device entries. Clear search or reset filters to view all 48 examples.
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {filteredDevices.map((entry) => (
                <div
                  key={entry.id}
                  className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-2 shadow-2xs dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-[11px] font-extrabold text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                      Poem {entry.poemNum}: {entry.poemTitle}
                    </span>
                    <span className="rounded-full bg-amber-50 border border-amber-200 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-900 dark:bg-amber-950/60 dark:border-amber-800 dark:text-amber-300">
                      {entry.device}
                    </span>
                  </div>
                  <div className="rounded-lg bg-slate-50 border border-slate-200/80 px-2.5 py-1.5 text-xs font-bold italic text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-100">
                    {entry.line}
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {entry.explanation}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Tab 2: 20-Question Spot-the-Device Speed Drill */
        <div className="mt-4 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-indigo-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-xs text-slate-700 dark:text-slate-300">
              Answered: <strong className="text-slate-900 dark:text-white">{drillAnswered} / {SPOT_DRILL_QUESTIONS.length}</strong>
              {drillSubmitted && (
                <span className="ml-3 inline-flex items-center gap-1 font-extrabold text-emerald-700 dark:text-emerald-400">
                  <Trophy className="h-3.5 w-3.5" />
                  Score: {drillCorrect} / {SPOT_DRILL_QUESTIONS.length}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {!drillSubmitted ? (
                <button
                  type="button"
                  onClick={() => setDrillSubmitted(true)}
                  disabled={drillAnswered === 0}
                  className="rounded-lg bg-indigo-600 px-3.5 py-1.5 text-xs font-extrabold text-white hover:bg-indigo-700 disabled:opacity-40 cursor-pointer"
                >
                  Check All Answers ({drillAnswered}/{SPOT_DRILL_QUESTIONS.length})
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
            {SPOT_DRILL_QUESTIONS.map((q, idx) => {
              const picked = drillAnswers[q.id];
              const isCorrect = picked === q.correctIndex;
              return (
                <div
                  key={q.id}
                  className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                      Q{idx + 1} • {q.poem}
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

                  <div className="rounded-lg bg-indigo-50/70 border border-indigo-200/70 px-3 py-2 text-xs font-bold italic text-indigo-950 dark:bg-indigo-950/30 dark:border-indigo-900 dark:text-indigo-200">
                    {q.quote}
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
                              ? 'border-indigo-600 bg-indigo-50 text-indigo-950 dark:bg-indigo-950/50 dark:text-indigo-200'
                              : 'border-slate-200 bg-slate-50/70 text-slate-800 hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-950/50 dark:text-slate-200'
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
