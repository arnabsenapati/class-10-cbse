import { Subtopic } from '../../../types/curriculum';

export const englishPoem08: Subtopic = {
  id: 'eng-ff-poem-08',
  slug: 'fog',
  title: 'Poem 8: Fog',
  subtitle:
    'Carl Sandburg | Free Verse (NO rhyme scheme) — Six-line imagist metaphor comparing stealthy fog to an observant cat',
  estimatedMinutes: 15,
  difficulty: 'Board Mastery',
  ncertSection: 'First Flight — Poem 8',
  learningObjectives: [
    'Appreciate how Carl Sandburg creates a vivid six-line imagist snapshot in just twenty-six words without rhyme or regular metre.',
    'Identify the three cat-like behaviours through which the fog is implicitly compared to a cat without using "like" or "as".',
    'Explain the significance of "free verse", enjambment, and transferred epithets ("little cat feet", "silent haunches").',
    'Complete the NCERT metaphor exercise (Storm, Train, Fire, School, Home) and compare subtle nature imagery across Fog and Dust of Snow.',
  ],
  keywords: [
    'Fog',
    'Carl Sandburg',
    'free verse',
    'extended metaphor',
    'little cat feet',
    'silent haunches',
    'harbour and city',
  ],
  sections: [
    {
      id: 'poem-08-ncert-glance',
      title: 'NCERT Reference, Quick Glance & Structural Arc',
      blocks: [
        {
          type: 'ncert-reference',
          chapterKey: 'ff-poem-08',
          title: 'Poem 8: Fog — Original NCERT Text',
          bookName: 'First Flight — Poetry',
          pdfPath: '/ncert/english/jeff106.pdf',
          pdfStartPage: 14,
          pdfEndPage: 14,
          note: 'Review the complete six-line poem, NCERT glossary ("on haunches"), and Thinking about the Poem metaphor exercises.',
        },
        {
          type: 'quick-summary',
          title: '60-Second Exam Glance & Central Idea',
          bullets: [
            'Imagist Brevity: In a single short stanza of six lines (26 words total), American poet Carl Sandburg turns an ordinary urban weather phenomenon into a quiet, living miniature.',
            'Stealthy Arrival: The fog enters silently and unexpectedly "on little cat feet", slipping into coastal and urban life without thunder, warning, or dramatic noise.',
            'Watchful Stillness: Like a curious cat crouching with knees bent ("on silent haunches"), the fog pauses motionless and looks calmly over both the "harbour and city".',
            'Unannounced Exit: Having lingered long enough to watch human activity below, it moves on just as quietly and independently as it arrived.',
            'Poetic Craft: Notice Sandburg NEVER says "like a cat" or "as a cat"—making the entire poem one sustained extended metaphor written in unrhymed free verse.',
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'Title Justification, Rhyme Scheme, Tone Shift & Symbolism',
          body: 'The single-word title "Fog" mirrors the poem’s minimalist precision: unobtrusive, understated, and free of ornament. Sandburg captures nature’s fleeting, unpredictable presence hovering briefly over human-built spaces before vanishing.',
          bullets: [
            'Rhyme Scheme: Free verse (NO rhyme scheme and NO rigid metre—as NCERT Question 3 explicitly highlights).',
            'Tone: Calm, detached, observational, and mysteriously quiet—neither frightening nor celebratory, simply attentive to nature’s rhythm.',
            'Three Cat-Fog Parallels: (1) Silent, soft arrival ("on little cat feet"); (2) Alert, crouched stillness surveying surroundings ("sits looking... on silent haunches"); (3) Independent, noiseless departure ("moves on").',
            'Urban vs. Natural Setting: Pairing "harbour" (ships, sea trade) and "city" (crowded human life) shows how a single wisp of natural mist effortlessly blankets bustling human spaces.',
          ],
        },
        {
          type: 'steps',
          title: 'Stanza-by-Stanza Emotional & Thematic Arc',
          items: [
            {
              label: '1. Stealthy Arrival (Lines 1–2)',
              detail:
                'Opening with a complete short sentence, the fog creeps in softly and unannounced, evoking the padded, soundless steps of a feline.',
              example: '"The fog comes / on little cat feet."',
            },
            {
              label: '2. Watchful Pause (Lines 3–5)',
              detail:
                'Personified as "It", the fog settles quietly over coastal docks and city rooftops, crouching patiently with bent knees like an observant sentinel.',
              example: '"It sits looking / over harbour and city / on silent haunches"',
            },
            {
              label: '3. Quiet Departure (Line 6)',
              detail:
                'Without lingering for permission or leaving a trace, the fog drifts away smoothly, reminding readers that natural moods and pauses are temporary.',
              example: '"and then moves on."',
            },
          ],
        },
      ],
    },
    {
      id: 'poem-08-stanzas-rtc',
      title: 'Two-Part Verbatim Text with Word Lens & 5-Mark RTC',
      blocks: [
        {
          type: 'poetic-stanza',
          lang: 'en',
          passageMode: 'verse',
          stanzaLabel: 'Lines 1–2: Silent Cat-Like Arrival',
          stanzaText: `The fog comes
on little cat feet.`,
          dialectBadge: 'Free Verse | Stealthy Metaphor',
          prasang:
            'In the opening two lines, Carl Sandburg introduces a coastal morning or evening mist through an immediate, unannounced metaphor—omitting "like" or "as" completely.',
          bhavarthHindi:
            'The fog arrives so softly and subtly that nobody hears or notices its entrance until it is already there—just like a cat stepping noiselessly on padded paws. "Little" suggests both delicacy and harmlessness, framing weather not as a violent storm but as a quiet, gentle visitor.',
          englishHelper:
            '(i) How does the fog arrive according to Sandburg? [2M]\nAnswer: It arrives silently, smoothly, and unexpectedly on "little cat feet", completely unannounced.\n(ii) Name and identify the poetic device used in these two lines. Why is it NOT a simile? [2M]\nAnswer: Metaphor (specifically an extended metaphor). Sandburg does not use comparative words like "like" or "as"—he directly attributes "little cat feet" to the fog.\n(iii) What mood do the words "little cat feet" create? [1M]\nAnswer: Quiet delicacy, mystery, and stealth.',
          poeticDevices: [
            'Metaphor (Extended): Fog is implicitly equated with a soft-footed cat without using "like" or "as".',
            'Transferred Epithet: "little cat feet" transfers the cat’s delicate paws to the creeping mist.',
            'Enjambment: Line 1 flows directly into Line 2 without punctuation until "feet.".',
          ],
          words: [
            {
              word: 'fog',
              englishMeaning: 'Thick cloud-like mist near the ground reducing visibility over land and sea',
              synonym: 'mist, haze',
              grammarNote: 'Subject noun opening the poem as a quiet living presence',
              exampleSentence: 'Dense morning fog crept silently across the coastal docks.',
            },
            {
              word: 'comes',
              englishMeaning: 'Arrives gently and unannounced without force or sound',
              synonym: 'approaches, arrives',
              grammarNote: 'Simple present tense conveying timeless, recurring natural rhythm',
              exampleSentence: 'Winter mist comes quietly before sunrise.',
            },
            {
              word: 'little',
              englishMeaning: 'Small, delicate, gentle, and unthreatening',
              synonym: 'tiny, soft, delicate',
              grammarNote: 'Adjective softening the weather phenomenon into something intimate',
              exampleSentence: 'Little signs of calm often escape busy city dwellers.',
            },
            {
              word: 'cat feet',
              englishMeaning: 'Soft, padded feline paws moving noiselessly and stealthily',
              synonym: 'padded paws, stealthy steps',
              grammarNote: 'Metaphorical noun phrase conveying silent movement',
              exampleSentence: 'Stepping as softly as on cat feet, the mist filled the lane.',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          lang: 'en',
          passageMode: 'verse',
          stanzaLabel: 'Lines 3–6: Watchful Pause & Quiet Departure',
          stanzaText: `It sits looking
over harbour and city
on silent haunches
and then moves on.`,
          dialectBadge: 'Free Verse | Extended Metaphor & Enjambment',
          prasang:
            'Continuing the single extended metaphor across four enjambed lines, Sandburg captures the fog’s still vigil above water and rooftops before its effortless departure.',
          bhavarthHindi:
            'Having settled in, the fog ("It") crouches patiently on "silent haunches" (bent hind legs like a seated cat) and gazes down over both the bustling harbour and the city. For a brief interlude, human industry sits beneath nature’s calm observation—and then, true to a cat’s independent nature, the fog shifts and moves away as quietly as it came.',
          englishHelper:
            '(i) What does "It" refer to in line 3, and what posture does it adopt? [2M]\nAnswer: "It" refers to the fog, which crouches "on silent haunches" (with knees bent like a sitting cat) while watching the harbour and city.\n(ii) What spaces does the fog overlook, and what does that highlight? [2M]\nAnswer: It overlooks both "harbour and city", showing nature quietly enveloping coastal trade and crowded urban life alike.\n(iii) Pick a phrase from the extract meaning "sitting with knees bent". [1M]\nAnswer: "on silent haunches" (NCERT glossary: "on haunches: sitting with knees bent").',
          poeticDevices: [
            'Personification / Zoomorphism: Fog "sits looking" and "moves on" like an observant living animal.',
            'Transferred Epithet: "silent haunches" transfers the cat/fog’s silence onto its bent hind legs.',
            'Enjambment: All four lines run continuously without pauses until the final full stop.',
            'Visual Imagery: Broad panorama of "harbour and city" held beneath crouched mist.',
          ],
          words: [
            {
              word: 'sits',
              englishMeaning: 'Rests steadily and patiently in one place above the landscape',
              synonym: 'settles, crouches, hovers',
              grammarNote: 'Present tense verb sustaining the cat-vigil image',
              exampleSentence: 'Low mist sits calmly over the valley before midday warmth arrives.',
            },
            {
              word: 'harbour',
              englishMeaning: 'Sheltered coastal port where ships dock and anchor',
              synonym: 'port, dockyard',
              grammarNote: 'Noun anchoring the poem’s maritime/coastal setting (British spelling in NCERT)',
              exampleSentence: 'Anchored boats disappeared briefly beneath the harbour mist.',
            },
            {
              word: 'city',
              englishMeaning: 'Densely populated urban centre bustling with human activity',
              synonym: 'town, metropolis',
              grammarNote: 'Noun paired with "harbour" to contrast human noise with natural silence',
              exampleSentence: 'Traffic lights glowed faintly as fog blanketed the city.',
            },
            {
              word: 'silent haunches',
              englishMeaning: 'Crouching with hind knees bent in quiet, alert stillness (transferred epithet)',
              synonym: 'bent hind legs, quiet crouch',
              grammarNote: 'NCERT Glossary ("on haunches: sitting with knees bent")',
              exampleSentence: 'Like a cat resting on silent haunches, the haze waited above rooftops.',
            },
            {
              word: 'moves on',
              englishMeaning: 'Departs calmly and effortlessly without leaving any trace',
              synonym: 'drifts away, vanishes',
              grammarNote: 'Phrasal verb highlighting impermanence and feline independence',
              exampleSentence: 'Just when commuters grow used to winter mist, it lifts and moves on.',
            },
          ],
        },
      ],
    },
    {
      id: 'poem-08-devices-traps',
      title: 'Line-by-Line Poetic Devices & Examiner Mistake Alerts',
      blocks: [
        {
          type: 'table',
          caption: 'Complete Line-by-Line Poetic Devices Cheat Sheet',
          headers: ['Poetic Device', 'Exact Line / Phrase', 'Explanation & Poetic Effect'],
          rows: [
            [
              'Extended Metaphor',
              'Entire poem ("cat feet" -> "sits looking" -> "haunches" -> "moves on")',
              'Sustains an implied comparison between fog and a cat across all six lines without once saying "like" or "as".',
            ],
            [
              'Personification / Zoomorphism',
              '"The fog comes", "It sits looking", "moves on"',
              'Gives inanimate weather conscious animal movement, patience, and detached curiosity.',
            ],
            [
              'Transferred Epithet',
              '"silent haunches" (and "little cat feet")',
              'Silence belongs to the fog/cat as a whole, yet the adjective "silent" is grammatically attached to "haunches".',
            ],
            [
              'Enjambment',
              '"It sits looking / over harbour and city / on silent haunches / and then moves on."',
              'Lines flow seamlessly across line breaks without commas, mimicking smooth, uninterrupted drift.',
            ],
            [
              'Free Verse',
              'All 6 lines (zero end-rhyme; irregular syllable count)',
              'Unpredictable, unmeasured structure mirrors fog’s spontaneous arrival and departure.',
            ],
            [
              'Visual & Tactile Imagery',
              '"little cat feet", "over harbour and city", "on silent haunches"',
              'Paints a vivid black-and-white coastal scene with soft, muffled silence.',
            ],
            [
              'Minimalism / Understatement',
              '26 plain everyday words, mostly monosyllabic',
              'Deliberate simplicity forces the reader to slow down and notice quiet natural moments.',
            ],
          ],
        },
        {
          type: 'notebook-mistake',
          studentName: 'Rohan (Class 10 Student)',
          title: 'Trap 1: Calling the Poem’s Central Device a "Simile"',
          wrongWork:
            'In "Fog", Carl Sandburg uses a simile by writing that the fog is like a cat coming on little cat feet.',
          teacherFix:
            'Sandburg NEVER uses "like" or "as" anywhere in the poem. As NCERT Question 1(iv) specifically points out, the poet suggests the cat indirectly through an extended metaphor ("little cat feet", "sits looking", "silent haunches").',
          whyWrong:
            'Confusing metaphor with simile costs the full 1-mark device question in RTC extracts whenever students quote words that are not in the poem.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Sanya (Class 10 Student)',
          title: 'Trap 2: Inventing a Rhyme Scheme for "Fog"',
          wrongWork:
            'The rhyme scheme of "Fog" is abcbdb because "feet" and "city" sound somewhat similar.',
          teacherFix:
            '"Fog" has NO rhyme scheme at all—it is written in free verse (comes / feet / looking / city / haunches / on share no structured rhyme or metrical pattern).',
          whyWrong:
            'NCERT Question 3 explicitly tests recognition of free verse; guessing a rhyme scheme like abcbdb (which belongs to Poem 10) is an instant zero.',
        },
      ],
    },
    {
      id: 'poem-08-vocab-language',
      title: 'Word Bank, NCERT Metaphor Table & Free-Verse Task',
      blocks: [
        {
          type: 'chapter-word-bank',
          lang: 'en',
          title: 'Poetic Diction, Symbols & Tone Bank',
          intro:
            'Every concrete noun and verb in Sandburg’s 26-word poem carries weighted visual precision.',
          extraWords: [
            {
              word: 'fog',
              englishMeaning: 'Dense water-droplet mist hovering close to land and sea',
              synonym: 'mist, vapour',
              grammarNote: 'Core subject; metaphorically equated with a cat',
              exampleSentence: 'Coastal fog blurred the outlines of docked ships.',
            },
            {
              word: 'cat feet',
              englishMeaning: 'Padded paws that allow silent, stealthy stepping',
              synonym: 'velvet paws',
              grammarNote: 'Implicit metaphor replacing "like a cat"',
              exampleSentence: 'Night fell as quietly as cat feet on stone.',
            },
            {
              word: 'harbour',
              englishMeaning: 'Protected port area for vessels along the shore',
              synonym: 'haven, port',
              grammarNote: 'Evokes maritime commerce momentarily hushed by mist',
              exampleSentence: 'Foghorn echoes drifted across the quiet harbour.',
            },
            {
              word: 'city',
              englishMeaning: 'Urban centre of human streets, buildings, and constant motion',
              synonym: 'urban skyline',
              grammarNote: 'Juxtaposed with natural mist to highlight quiet contrast',
              exampleSentence: 'Even a noisy city slows down beneath heavy fog.',
            },
            {
              word: 'haunches',
              englishMeaning: 'Hips and upper thighs; "on haunches" means sitting with knees bent',
              synonym: 'bent hind legs',
              grammarNote: 'NCERT Glossary ("on haunches: sitting with knees bent")',
              exampleSentence: 'The stray cat rested on silent haunches beside the gate.',
            },
            {
              word: 'moves on',
              englishMeaning: 'Slips onward quietly without abrupt drama',
              synonym: 'glides away, departs',
              grammarNote: 'Phrasal verb closing the poem’s cyclical arc',
              exampleSentence: 'Mist lingers briefly over valleys and then moves on.',
            },
          ],
        },
        {
          type: 'table',
          caption: 'NCERT Thinking About the Poem (Q2): Metaphor Comparisons & Shared Qualities',
          headers: ['Word', 'Metaphor', 'How They Are Alike (Shared Feature)'],
          rows: [
            [
              'Storm (NCERT model)',
              'tiger',
              'pounces over the fields, growls fiercely without warning',
            ],
            [
              'Train',
              'python / gliding dragon',
              'winds smoothly along long curving tracks, hisses and roars through tunnels',
            ],
            [
              'Fire',
              'hungry lion / leaping dancer',
              'crackles, sways wildly, and greedily devours everything in its path',
            ],
            [
              'School',
              'beehive / flourishing garden',
              'hums with purposeful energy where young minds gather knowledge and grow together',
            ],
            [
              'Home',
              'safe harbour / warm nest',
              'shelters and anchors family members safely away from outside storms',
            ],
          ],
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT Thinking About Text',
          question:
            'Does the poem have a rhyme scheme? What is such poetry called, and why does this form suit "Fog"? (NCERT Q3)',
          answer:
            'No, "Fog" has neither a rhyme scheme nor an obvious regular metre. Poetry without a fixed rhyme or rhythmic pattern is called "free verse". This loose, unhurried, unrhymed structure mirrors the fog itself—drifting in unpredictably, pausing silently without rules, and slipping away naturally.',
          markingTip:
            'Content (2M): Clear "No" + accurate definition of "free verse" + link between form and fog’s movement | Expression (1M): Crisp wording.',
        },
      ],
    },
    {
      id: 'poem-08-short-qa',
      title: 'Trap MCQ Checkpoint & 3-Mark Short Answers (NCERT + CBSE)',
      blocks: [
        {
          type: 'checkpoint',
          prompt:
            'Which statement accurately identifies the core poetic device in Carl Sandburg’s "Fog"?',
          options: [
            {
              id: 'a',
              label: 'Simile — because Sandburg explicitly writes "the fog is like a little cat".',
            },
            {
              id: 'b',
              label: 'Extended Metaphor — because cat-like traits ("cat feet", "haunches") run through all six lines without using "like" or "as".',
            },
            {
              id: 'c',
              label: 'Alliteration — because every line repeats identical consonant sounds.',
            },
            {
              id: 'd',
              label: 'Heroic Couplet — because the poem uses rhyming pairs in iambic pentameter.',
            },
          ],
          correctIds: ['b'],
          multiSelect: false,
          successMsg:
            'Spot on! Sandburg sustains an implicit cat comparison across all 6 lines in free verse without ever using "like" or "as".',
          hintMsg:
            'Check the exact text carefully: do the words "like" or "as" appear anywhere in the 6 lines?',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT Thinking About Text',
          question:
            'What does Sandburg think the fog is like, how does it arrive, and what does "It" in line 3 refer to? (NCERT Q1 i–iii)',
          answer:
            'Sandburg compares the fog to a stealthy, quiet cat. Rather than storming in loudly, the fog arrives silently and delicately "on little cat feet". In line 3, the pronoun "It" refers to the fog itself, which settles calmly and gazes out over the harbour and city.',
          markingTip:
            'Content (2M): Cat comparison + silent arrival phrase + "It" = fog | Expression (1M): Complete coverage of all three sub-parts.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT Thinking About Text',
          question:
            'Does the poet actually say that the fog is like a cat? Find three things that tell us the fog is like a cat. (NCERT Q1 iv)',
          answer:
            'No, Sandburg never uses the words "like a cat"; he conveys the comparison through an implied extended metaphor. Three cat-like traits are: (1) arriving noiselessly "on little cat feet", (2) crouching patiently "on silent haunches" to watch surroundings, and (3) departing calmly and independently ("moves on").',
          markingTip:
            'Content (2M): Explicit "No" + all 3 exact textual clues | Expression (1M): Enumerated clarity.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Short Answer (40–50 Words)',
          question:
            'Why does Sandburg mention both "harbour" and "city" when describing the fog’s pause?',
          answer:
            'By placing the fog above both the coastal "harbour" and the bustling "city", Sandburg captures nature gently blanketing maritime trade and busy urban streets alike. The juxtaposition highlights how effortlessly a silent natural phenomenon slows down and watches over restless human activity without disturbing it.',
          markingTip:
            'Content (2M): Maritime + urban scope + quiet contrast with human busyness | Expression (1M): 40–50 words.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Short Answer (40–50 Words)',
          question:
            'What message about change and patience is suggested by "on silent haunches / and then moves on"?',
          answer:
            'Sitting "on silent haunches" shows watchful stillness—nature pauses without anxiety or haste. When the fog calmly "moves on", it suggests that just as clouds or difficult phases settle silently over life’s harbour and city, they eventually lift on their own, encouraging quiet patience and calm observation.',
          markingTip:
            'Content (2M): Calm stillness + natural impermanence of phases/challenges | Expression (1M): Reflective tone.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Title & Theme Justification',
          question:
            'How do the title and minimalist six-line form of "Fog" reinforce Sandburg’s poetic theme?',
          answer:
            'The crisp one-word title "Fog" mirrors the subject’s unpretentious, quiet entrance. Using only twenty-six everyday words in six unrhymed free-verse lines, Sandburg avoids heavy ornament so the poem drifts in, pauses briefly for one memorable image, and ends cleanly—just as real fog appears and vanishes.',
          markingTip:
            'Content (2M): Title economy + link between short free-verse structure and fog’s fleeting nature | Expression (1M): Concise synthesis.',
        },
      ],
    },
    {
      id: 'poem-08-competency-long',
      title: '6-Mark Competency & Cross-Chapter Extrapolations',
      blocks: [
        {
          type: 'qa',
          marks: 6,
          tag: 'Competency / Cross-Chapter (6 Marks)',
          question:
            '"Small, quiet moments in nature carry deep poetic power." Compare Carl Sandburg’s "Fog" with Robert Frost’s "Dust of Snow" to show how both poets turn brief natural occurrences into memorable reflections. (100–120 words)',
          answer:
            'Both Carl Sandburg and Robert Frost prove that brief, quiet encounters with nature hold deeper beauty than loud spectacles. In "Fog", Sandburg needs just six unrhymed lines to transform coastal mist into an observant feline stepping softly on "little cat feet", crouching "on silent haunches" above harbour and city, and departing without commotion. Likewise, in "Dust of Snow", Robert Frost uses an ordinary crow shaking powdery snow from a poisonous hemlock tree to lift the speaker’s gloom and save "some part / Of a day I had rued." While Frost highlights nature’s sudden emotional healing and Sandburg celebrates detached stillness, both poems urge busy readers to slow down and notice everyday natural grace.',
          markingTip:
            'Content (3M): Specific details from Fog (cat feet, haunches, harbour/city) & Dust of Snow (crow, hemlock tree, rued day) | Expression (3M): Balanced comparison, 110–120 words.',
        },
        {
          type: 'qa',
          marks: 6,
          tag: 'Competency / Cross-Chapter (6 Marks)',
          question:
            'Imagine you are a harbour watchman who pauses work one misty morning as fog rolls across the docks and city. Write a reflective paragraph/diary note inspired by Sandburg’s imagery on why quiet pauses matter in fast-paced urban life. (100–120 words)',
          answer:
            'Tuesday, 6:45 a.m.\n\nBefore the cranes and sirens roared awake this morning, the fog crept across the water as silently as if walking on little cat feet. For twenty minutes, work at the harbour stopped. Looking over the pier, I felt as though the mist sat perched on silent haunches, calmly inspecting both anchored ships and sleeping city rooftops. In a world obsessed with constant speed and noise, that hushed white curtain forced everyone to pause, breathe, and watch without rushing. Just as effortlessly as it arrived, the veil lifted and moved on toward the sea—leaving me calmer and reminded that stillness is not wasted time, but space to see clearly.',
          markingTip:
            'Content (3M): Authentic coastal watchman perspective weaving in Sandburg’s core images | Expression (3M): Reflective, well-paced 110–120 words.',
        },
      ],
    },
  ],
};
