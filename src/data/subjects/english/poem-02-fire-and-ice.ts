import { Subtopic } from '../../../types/curriculum';

export const englishPoem02: Subtopic = {
  id: 'eng-ff-poem-02',
  slug: 'fire-and-ice',
  title: 'Poem 2: Fire and Ice',
  subtitle:
    'Robert Frost | abaa bcbcb — Elemental symbols for unchecked human desire ("fire") vs. icy hatred & indifference ("ice")',
  estimatedMinutes: 20,
  difficulty: 'Board Mastery',
  ncertSection: 'First Flight — Poem 2',
  learningObjectives: [
    'Decode Frost’s elemental symbolism: "fire" as fiery human desire (greed, avarice, lust, conflict, fury) and "ice" as frozen hatred (cruelty, intolerance, rigidity, insensitivity, indifference).',
    'Analyze how the interlocked rhyme scheme `abaa bcbcb` weaves fire and ice together while underlining that either extreme destroys the world.',
    'Identify key poetic devices including anaphora ("Some say"), antithesis, enjambment, understatement ("Is also great / And would suffice"), and alliteration.',
    'Solve all NCERT Thinking about the Poem tasks—classifying the 12 NCERT emotion words and explaining the stanza rhyme pattern.',
    'Compose 5-mark RTC answers, 3-mark short answers, and 6-mark competency answers connecting Poem 2 with Nelson Mandela and The Sermon at Benares.',
  ],
  keywords: [
    'Fire and Ice',
    'Robert Frost',
    'desire',
    'hate',
    'perish twice',
    'suffice',
    'abaa bcbcb',
    'elemental symbolism',
  ],
  sections: [
    {
      id: 'poem-02-ncert-glance',
      title: 'NCERT Reference, Quick Glance & Thematic Arc',
      blocks: [
        {
          type: 'ncert-reference',
          chapterKey: 'ff-poem-02',
          title: 'Poem 2: Fire and Ice — Original NCERT Text',
          bookName: 'First Flight — Poetry',
          pdfPath: '/ncert/english/jeff101.pdf',
          pdfStartPage: 15,
          pdfEndPage: 15,
          note: 'Review the 9-line poem, NCERT glossary ("perish", "suffice"), and the Fire vs. Ice word classification box.',
        },
        {
          type: 'quick-summary',
          title: '60-Second Exam Glance & Central Idea',
          bullets: [
            'Scientific Debate Turned Moral Allegory: Starting from popular predictions about whether the world will end in extreme heat ("fire") or a deep freeze ("ice"), Frost turns cosmic science into a mirror of human psychology.',
            'Fire = Uncontrolled Desire: Drawing on personal human experience ("From what I’ve tasted of desire"), Frost sides first with "fire"—representing insatiable greed, avarice, lust, fury, and power-hunger.',
            'Ice = Cold Hatred: If the world had to "perish twice", Frost admits he knows "enough of hate" to confirm that "ice"—coldness, cruelty, intolerance, rigidity, and indifference—is equally capable of total ruin.',
            'Chilling Understatement: Describing icy destruction as "also great / And would suffice" delivers dark irony through calm, understated tone rather than loud preaching.',
            'Interlocked Form (`abaa bcbcb`): Nine compact lines using only three rhymes (`-ire`, `-ice`, `-ate`) prove that passionate violence and numb hatred are twin faces of the same human flaw.',
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'Title Justification, Rhyme Scheme, Tone Shift & Symbolism',
          body: 'The binary title "Fire and Ice" pairs two physically incompatible extremes—scorching heat and numbing frost—to dramatise the paradox at the poem’s heart: humanity does not need an asteroid or cosmic explosion to destroy Earth; either burning obsession or frozen apathy within us is enough.',
          bullets: [
            'Rhyme Scheme: `abaa bcbcb` (`fire`/`ice`/`desire`/`fire` | `twice`/`hate`/`ice`/`great`/`suffice`). Notice how the `b` rhyme (`ice`) originates in Stanza 1 and dominates Stanza 2, framing the entire poem.',
            'Tone Shift: Opens as casual philosophical speculation ("Some say..."), turns personal and confessional ("From what I’ve tasted"), and closes in cool, epigrammatic irony ("Is also great / And would suffice").',
            'Fire (NCERT Box Words): Greed, avarice, lust, conflict, fury — hot, impulsive passions that consume relationships and ignite wars.',
            'Ice (NCERT Box Words): Cruelty, intolerance, rigidity, insensitivity, coldness, indifference, hatred — silent, frozen emotions that dehumanise and slowly destroy society.',
          ],
        },
        {
          type: 'steps',
          title: 'Stanza-by-Stanza Emotional & Thematic Arc',
          items: [
            {
              label: '1. Rival Prophecies of Apocalypse (Lines 1–2)',
              detail:
                'Anaphora ("Some say...") sets up two competing popular theories of the world’s end—burning fire versus freezing ice.',
              example: '"Some say the world will end in fire / Some say in ice."',
            },
            {
              label: '2. Personal Verdict on Fiery Desire (Lines 3–4)',
              detail:
                'Having experienced the consuming power of human desire first-hand, the speaker initially votes with those predicting ruin by fire.',
              example: '"From what I’ve tasted of desire / I hold with those who favour fire."',
            },
            {
              label: '3. The Second Doom: Icy Hatred (Lines 5–9)',
              detail:
                'Considering a hypothetical second destruction, Frost soberly observes that cold hatred is just as potent—and quietly sufficient—to finish humanity.',
              example: '"To say that for destruction ice / Is also great / And would suffice."',
            },
          ],
        },
      ],
    },
    {
      id: 'poem-02-stanzas-rtc',
      title: 'Stanza-by-Stanza Verse, Word Lens & 5-Mark RTC Blueprint',
      blocks: [
        {
          type: 'poetic-stanza',
          lang: 'en',
          passageMode: 'verse',
          stanzaLabel: 'Stanza 1 — Elemental Prophecies & The Verdict of Desire (Lines 1–4)',
          stanzaText:
            'Some say the world will end in fire\nSome say in ice.\nFrom what I’ve tasted of desire\nI hold with those who favour fire.',
          dialectBadge: 'Rhyme: abaa | Speculative -> Convinced',
          prasang:
            'Opening the nine-line poem in a reflective, conversational voice, Frost presents two popular theories on how Earth might perish. Following an `abaa` rhyme pattern, he pivots immediately from external cosmology to human psychology ("tasted of desire").',
          bhavarthHindi:
            'Lines 1–2 mirror everyday debates—will Earth burn up in solar heat or freeze in an ice age? In line 3, Frost reframes the question morally: "From what I’ve tasted of desire" signals first-hand insight into how boundless craving—greed, ambition, anger, and lust—burns moral restraint away. Hence he aligns himself ("hold with") those who warn of "fire", treating unchecked human appetite as an apocalyptic flame.',
          englishHelper:
            '(i) What two opposing theories about the world’s end open the poem? [1M]\nAnswer: Some people believe the world will end in scorching heat ("fire"), while others predict it will perish in freezing cold ("ice").\n(ii) What does the speaker mean by "From what I’ve tasted of desire", and which side does he favour? [2M]\nAnswer: Having personally observed and experienced the destructive intensity of human cravings (greed, fury, lust), he agrees with ("hold with") those who say fiery desire will bring about the world’s ruin.\n(iii) Name two poetic devices used in Lines 1–4. [1M]\nAnswer: Anaphora ("Some say..." repeated at the start of lines 1–2) and Alliteration ("Some say", "world will", "favour fire").\n(iv) Pick a phrase from the stanza that means "agree with / support". [1M]\nAnswer: "hold with".',
          poeticDevices: [
            'Anaphora: "Some say" opens consecutive lines (Lines 1–2) to contrast two rival viewpoints',
            'Antithesis & Symbolism: "fire" (burning desire/passion) juxtaposed directly against "ice" (cold hatred)',
            'Alliteration: "Some say", "world will", and "favour fire" create crisp rhythmic punch',
            'Enjambment: "From what I’ve tasted of desire / I hold with those who favour fire." completes one fluid thought across lines 3–4',
          ],
          words: [
            {
              word: 'fire',
              englishMeaning: 'Elemental symbol for blazing, uncontrolled passions like greed, lust, and fury',
              synonym: 'ardent passion, consuming greed',
              grammarNote: 'Concrete noun used symbolically; repeated at lines 1 and 4',
              exampleSentence: 'Frost treats fire as an emblem of human greed that consumes everything in its path.',
            },
            {
              word: 'ice',
              englishMeaning: 'Elemental symbol for frozen emotions—hatred, intolerance, rigidity, and indifference',
              synonym: 'chilling apathy, cold hatred',
              grammarNote: 'Noun introducing the `b` rhyme carried across both stanzas',
              exampleSentence: 'Silent ice represents the heartless indifference that isolates human beings.',
            },
            {
              word: 'tasted',
              englishMeaning: 'Experienced personally or encountered directly in real life',
              synonym: 'experienced, sampled',
              grammarNote: 'Past participle after "I’ve"; metaphorical sensory verb',
              exampleSentence: 'Frost writes as one who has tasted how restless desire disturbs inner peace.',
            },
            {
              word: 'desire',
              englishMeaning: 'Intense, often unchecked craving for wealth, power, or gratification',
              synonym: 'avarice, yearning, greed',
              grammarNote: 'Abstract noun linked to the "fire" emotions in the NCERT box',
              exampleSentence: 'Blind desire fuels rivalry and conflict among nations.',
            },
            {
              word: 'hold with',
              englishMeaning: 'Agree with, endorse, or share the opinion of someone',
              synonym: 'agree with, side with',
              grammarNote: 'Idiomatic phrasal verb (formal/concise register)',
              exampleSentence: 'Realists hold with the view that moral decay threatens peace faster than nature.',
            },
            {
              word: 'favour',
              englishMeaning: 'Prefer, support, or incline toward one prediction over another',
              synonym: 'support, back',
              grammarNote: 'Transitive verb (British NCERT spelling "favour")',
              exampleSentence: 'Observing human ambition, the poet inclines to favour fire as the primary cause of ruin.',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          lang: 'en',
          passageMode: 'verse',
          stanzaLabel: 'Stanza 2 — Second Perishing & The Sufficiency of Hate (Lines 5–9)',
          stanzaText:
            'But if it had to perish twice,\nI think I know enough of hate\nTo say that for destruction ice\nIs also great\nAnd would suffice.',
          dialectBadge: 'Rhyme: bcbcb | Sober -> Chillingly Ironic',
          prasang:
            'Opening with the pivotal conjunction "But", Stanza 2 extends the stanza to five tight lines rhyming `bcbcb`. Shifting from fiery desire to its opposite, the speaker evaluates whether cold "hate" could finish the world a second time—and delivers a chillingly understated verdict.',
          bhavarthHindi:
            'Even though a world can literally die only once, Frost uses the hypothetical "if it had to perish twice" as a moral thought experiment: if desire failed to destroy humanity, hatred certainly would not. Notice the deceptive gentleness of "I think I know enough of hate"—understating how deep human cruelty, intolerance, and indifference run. Calling ice "great" (mighty/effective at destruction) and adding "And would suffice" creates razor-sharp verbal irony: frozen apathy needs no loud explosion to wipe out compassion.',
          englishHelper:
            '(i) What does "it" refer to in "But if it had to perish twice"? [1M]\nAnswer: The world / human civilisation.\n(ii) Why does the speaker conclude that "ice / Is also great / And would suffice"? [2M]\nAnswer: Knowing how pervasive and lethal human hatred, rigidity, and cold indifference are, he affirms that icy hate possesses just as much destructive power as fiery desire and would easily complete the world’s ruin.\n(iii) Identify the irony or understatement in Lines 7–9. [1M]\nAnswer: Describing catastrophic destruction as "great" and calmly concluding it "would suffice" uses chilling verbal irony / understatement to sharpen the warning.\n(iv) Find words from the stanza that mean (a) die and (b) be enough. [1M]\nAnswer: (a) "perish"; (b) "suffice".',
          poeticDevices: [
            'Verbal Irony & Understatement: Calling destructive ice "great" and "would suffice" contrasts polite phrasing with total apocalypse',
            'Symbolism: "ice" embodies cold hatred, cruelty, intolerance, and emotional insensitivity',
            'Enjambment: Lines 6–9 flow continuously ("I think I know enough of hate / To say that for destruction ice / Is also great / And would suffice.")',
            'Assonance: Repeated short `/ɪ/` in "if it" (Line 5) and crisp `-ice` rhymes (`twice`/`ice`/`suffice`) echo icy sharpness',
          ],
          words: [
            {
              word: 'perish',
              englishMeaning: 'Die, decay, or be completely destroyed (NCERT gloss: "die")',
              synonym: 'die, be annihilated',
              grammarNote: 'Infinitive verb after "had to"; formal/solemn diction',
              exampleSentence: 'Human empathy may perish quietly if hatred replaces dialogue.',
            },
            {
              word: 'twice',
              englishMeaning: 'Two times; here imagining a hypothetical second end of the world',
              synonym: 'a second time',
              grammarNote: 'Adverb of frequency introducing Frost’s hypothetical paradox',
              exampleSentence: 'Even if Earth could perish twice, both fire and ice wait inside human nature.',
            },
            {
              word: 'hate',
              englishMeaning: 'Deep, cold hostility and aversion toward others; counterpart to "ice"',
              synonym: 'animosity, malice, bitterness',
              grammarNote: 'Uncountable abstract noun rhyming with "great"',
              exampleSentence: 'Unchecked hate freezes compassion and divides communities.',
            },
            {
              word: 'destruction',
              englishMeaning: 'Complete ruin, devastation, or wiping out of life and order',
              synonym: 'annihilation, devastation',
              grammarNote: 'Abstract noun inside the prepositional phrase "for destruction"',
              exampleSentence: 'Nuclear weapons reflect how human conflict accelerates global destruction.',
            },
            {
              word: 'great',
              englishMeaning: 'Powerful, formidable, or thoroughly effective (used here with grim irony)',
              synonym: 'potent, formidable',
              grammarNote: 'Adjective used ironically—not praising goodness, but capacity to destroy',
              exampleSentence: 'Icy apathy is ironically called "great" for its silent power to break society.',
            },
            {
              word: 'suffice',
              englishMeaning: 'Be sufficient or adequate to achieve total ruin (NCERT gloss: "be sufficient")',
              synonym: 'be enough, serve the purpose',
              grammarNote: 'Intransitive formal verb closing the poem on a crisp, final note',
              exampleSentence: 'Where fury stops short, cold indifference alone would suffice to ruin peace.',
            },
          ],
        },
      ],
    },
    {
      id: 'poem-02-devices-traps',
      title: 'Poetic Devices Cheat Sheet & Examiner Trap Alerts',
      blocks: [
        {
          type: 'table',
          caption: 'Complete Line-by-Line Poetic Devices Cheat Sheet',
          headers: ['Poetic Device', 'Exact Line / Phrase', 'Explanation & Poetic Effect'],
          rows: [
            [
              'Rhyme Scheme',
              'fire / ice / desire / fire | twice / hate / ice / great / suffice',
              'Interlocked `abaa bcbcb` links Stanza 1 and Stanza 2 through the `b` rhyme (`ice`), unifying both opposing forces.',
            ],
            [
              'Symbolism',
              '"fire" (desire) and "ice" (hate)',
              'Natural elements stand for opposite moral vices: burning greed/fury vs. cold hatred/indifference.',
            ],
            [
              'Anaphora',
              '"Some say the world will end in fire / Some say in ice."',
              'Repetition of "Some say" at the start of lines 1–2 emphasises conflicting public forecasts.',
            ],
            [
              'Antithesis',
              'Title "Fire and Ice" & Lines 1–2',
              'Juxtaposes extreme heat against extreme cold to illustrate that opposite vices produce identical ruin.',
            ],
            [
              'Alliteration',
              '"Some say", "world will", "favour fire"',
              'Repetition of initial `/s/`, `/w/`, and `/f/` sounds adds epigrammatic punch and memorability.',
            ],
            [
              'Enjambment',
              'Lines 3–4 and Lines 6–9',
              'Thoughts spill smoothly over line breaks, accelerating toward the blunt conclusion "And would suffice."',
            ],
            [
              'Understatement / Verbal Irony',
              '"Is also great / And would suffice."',
              'Describing apocalypse with calm understatement makes the moral warning sharper than melodrama.',
            ],
            [
              'Assonance',
              '"I hold with those..." (`/oʊ/` in hold/those); "if it" (`/ɪ/`)',
              'Repeated vowel sounds link key words acoustically within tight two- to four-beat lines.',
            ],
          ],
        },
        {
          type: 'notebook-mistake',
          studentName: 'Rohan (Class 10 Student)',
          title: 'Trap 1: Interpreting "Fire and Ice" as Purely a Geography / Climate Poem',
          wrongWork:
            'Frost warns that global warming ("fire") or a second Ice Age ("ice") will destroy Earth physically, so people should protect the climate.',
          teacherFix:
            'While the poem opens with cosmic theories about Earth ending in fire or ice, Frost immediately turns "fire" into "desire" and "ice" into "hate". The poem is primarily an allegory of destructive human emotions—greed, fury, intolerance, and cold indifference.',
          whyWrong:
            'Stopping at literal climate disaster misses Frost’s explicit clues ("tasted of desire", "know enough of hate") and the entire NCERT classification box.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Diya (Class 10 Student)',
          title: 'Trap 2: Misreading "Is also great" as Praise for Ice',
          wrongWork:
            'Frost says ice is great because ice is cool, peaceful, and better than violent fire.',
          teacherFix:
            'In line 8, "great" means "great in destructive power"—an ironic understatement pairing with "for destruction ice / Is also great / And would suffice". Frost condemns ice (hatred and apathy) as fully equal to fire in ruining humanity.',
          whyWrong:
            'Reading "great" as positive praise reverses the sentence syntax ("for destruction ice / Is also great") and misses the verbal irony.',
        },
      ],
    },
    {
      id: 'poem-02-vocab-language',
      title: 'Poetic Diction, Symbols & NCERT Fire-vs-Ice Classification',
      blocks: [
        {
          type: 'chapter-word-bank',
          lang: 'en',
          title: 'Poetic Diction, Symbols & Tone Bank',
          intro: 'Master these NCERT box terms and analytical descriptors to upgrade 3-mark and 6-mark answers.',
          extraWords: [
            {
              word: 'avarice',
              englishMeaning: 'Extreme, insatiable greed for wealth or material possessions',
              synonym: 'rapacity, covetousness',
              grammarNote: 'Abstract noun (NCERT Fire box word)',
              exampleSentence: 'Avarice drives nations into resource wars—a classic form of Frost’s "fire".',
            },
            {
              word: 'intolerance',
              englishMeaning: 'Refusal to accept beliefs, identities, or views different from one’s own',
              synonym: 'bigotry, narrow-mindedness',
              grammarNote: 'Abstract noun (NCERT Ice box word)',
              exampleSentence: 'Religious and racial intolerance chills human sympathy like spreading ice.',
            },
            {
              word: 'rigidity',
              englishMeaning: 'Stubborn inflexibility of mind; refusal to forgive, adapt, or empathise',
              synonym: 'inflexibility, obstinacy',
              grammarNote: 'Abstract noun (NCERT Ice box word)',
              exampleSentence: 'Emotional rigidity locks adversaries into permanent coldness.',
            },
            {
              word: 'insensitivity',
              englishMeaning: 'Lack of concern or emotional responsiveness to others’ pain',
              synonym: 'callousness, numbness',
              grammarNote: 'Abstract noun (NCERT Ice box word)',
              exampleSentence: 'Silent insensitivity to injustice kills community warmth as surely as open hate.',
            },
            {
              word: 'indifference',
              englishMeaning: 'Complete lack of interest, care, or sympathy toward human suffering',
              synonym: 'apathy, detachment',
              grammarNote: 'Abstract noun (NCERT Ice box word)',
              exampleSentence: 'Indifference allows cruelty to grow unchecked behind closed doors.',
            },
            {
              word: 'epigrammatic',
              englishMeaning: 'Concise, witty, and pointed like a memorable moral proverb',
              synonym: 'aphoristic, pithy',
              grammarNote: 'Literary tone adjective describing Frost’s 9-line style',
              exampleSentence: 'The poem’s epigrammatic ending leaves an unforgettable moral sting.',
            },
          ],
        },
        {
          type: 'table',
          caption: 'NCERT Thinking About the Poem (Q2): Exact 12-Word Box — "Fire" vs. "Ice"',
          headers: ['Element', 'NCERT Box Words (All 12 Classified)', 'Why Each Emotion Fits Fire or Ice'],
          rows: [
            [
              'Fire (Desire & Hot Passion)',
              'greed, avarice, lust, conflict, fury',
              'Blazing, restless impulses that burn inward restraint, breed rivalry, and erupt into violent clashes.',
            ],
            [
              'Ice (Hate & Frozen Empathy)',
              'cruelty, intolerance, rigidity, insensitivity, coldness, indifference, hatred',
              'Hard, unyielding states of heart that freeze empathy, silence conscience, and destroy human bonds quietly.',
            ],
          ],
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT Thinking About Text',
          question:
            'What is the rhyme scheme of "Fire and Ice"? How does it help in bringing out the contrasting ideas in the poem?',
          answer:
            'The rhyme scheme is `abaa bcbcb`. Stanza 1 links "fire" (`a`) with "desire" (`a`), while introducing "ice" (`b`). Stanza 2 then repeats the `b` rhyme (`twice`, `ice`, `suffice`) around `hate`/`great` (`c`), showing how hot desire and cold hate—though opposites—interlock to seal the same doom.',
          markingTip:
            'Content (2M): Exact scheme `abaa bcbcb` + explain how `a` pairs fire/desire, `c` pairs hate/great, and shared `b` unites both endings | Expression (1M): Clear, concise structure.',
        },
      ],
    },
    {
      id: 'poem-02-short-qa',
      title: 'Trap MCQ Checkpoint & 3-Mark Short Answers (NCERT + CBSE)',
      blocks: [
        {
          type: 'checkpoint',
          prompt:
            'Which option accurately matches all 12 NCERT box words and the rhyme scheme of "Fire and Ice"?',
          options: [
            {
              id: 'a',
              label: 'Rhyme scheme `abab cdcdc`; Fire includes cruelty and hatred.',
            },
            {
              id: 'b',
              label: 'Rhyme scheme `abaa bcbcb`; Fire = greed, avarice, lust, conflict, fury; Ice = cruelty, intolerance, rigidity, insensitivity, coldness, indifference, hatred.',
            },
            {
              id: 'c',
              label: 'Rhyme scheme `aabb ccdcc`; Ice only stands for climate freezing.',
            },
            {
              id: 'd',
              label: 'Rhyme scheme `abaa bcbcb`; Fire = indifference and coldness; Ice = fury and avarice.',
            },
          ],
          correctIds: ['b'],
          multiSelect: false,
          successMsg:
            'Spot on! `abaa bcbcb` locks the two stanzas together, while hot grasping passions belong to Fire and frozen empathy/hostility belong to Ice.',
          hintMsg:
            'Check the rhyming words at lines 1–4 (`fire`, `ice`, `desire`, `fire`) and match hot vs. cold human emotions.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT Thinking About Text',
          question: 'There are many ideas about how the world will "end". What two contrasting physical ideas does Frost introduce, and how does he reinterpret them?',
          answer:
            'Frost introduces two popular predictions: the world may burn up if heat overwhelms it ("fire") or freeze completely if cold dominates ("ice"). He quickly turns these physical forces into moral metaphors—equating "fire" with uncontrollable desire and "ice" with cold human hatred—warning that inner vices endanger humanity first.',
          markingTip:
            'Content (2M): Both physical possibilities + symbolic shift to desire and hate | Expression (1M): 45–55 words.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Short Answer (40–50 Words)',
          question: 'Why does the poet initially "hold with those who favour fire"?',
          answer:
            'Frost supports the "fire" theory first because he has personally "tasted of desire"—witnessing how endless greed, ambition, anger, and lust consume self-control and spark bitter conflicts. Both personal experience and human history show that fiery, unchecked craving can quickly push societies toward self-destruction.',
          markingTip:
            'Content (2M): Reference "tasted of desire" + link desire to greed/conflict/destruction | Expression (1M): Crisp wording.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Short Answer (40–50 Words)',
          question: 'How can "ice" destroy the world if it has to "perish twice"?',
          answer:
            'Here "ice" symbolises cold hatred, intolerance, insensitivity, and rigid indifference. Frost knows "enough of hate" to realise that silent cruelty and lack of empathy erode human solidarity just as fatally as violent desire—making icy apathy completely sufficient to ruin civilisation.',
          markingTip:
            'Content (2M): Symbolism of ice (hatred/indifference/intolerance) + equality with fire in ruining humanity | Expression (1M): Clear 45–50 words.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Short Answer (40–50 Words)',
          question: 'What tone does Frost adopt in the final three lines, and why is it effective?',
          answer:
            'Frost closes with a calm, matter-of-fact, and darkly ironic tone—calling icy ruin "also great" and saying it "would suffice". This cool understatement contrasts sharply with the horror of world destruction, forcing readers to pause and reflect seriously on everyday hatred and apathy.',
          markingTip:
            'Content (2M): Identify understatement / dark irony + explain reader impact | Expression (1M): Analytical precision.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Title & Theme Justification',
          question: 'Justify the brevity and stark title of Robert Frost’s poem "Fire and Ice".',
          answer:
            'The two-word title "Fire and Ice" captures the stark opposition between blazing passion ("fire") and frozen hostility ("ice"). Delivering this warning in just nine tightly rhymed lines gives the poem epigrammatic force—proving that humanity’s survival hinges on mastering both extremes.',
          markingTip:
            'Content (2M): Contrast in title + link compact form to epigrammatic warning | Expression (1M): Concise 45–50 words.',
        },
      ],
    },
    {
      id: 'poem-02-competency-long',
      title: '6-Mark Competency & Cross-Chapter Extrapolations',
      blocks: [
        {
          type: 'qa',
          marks: 6,
          tag: 'Competency / Cross-Chapter (6 Marks)',
          question:
            'Both Robert Frost in "Fire and Ice" and Nelson Mandela in "Long Walk to Freedom" warn against the destructive power of human hatred. Compare how the two texts view hatred and the path to preserving humanity. (100–120 words)',
          answer:
            'Both "Fire and Ice" and Nelson Mandela’s "Long Walk to Freedom" recognise hatred as a lethal force capable of destroying human society from within. In Frost’s nine-line warning, "ice" symbolises hate, intolerance, rigidity, and cold insensitivity—quiet toxins that are "also great" for destruction and "would suffice" to ruin the world. Mandela echoes this insight from lived political struggle, observing that apartheid’s oppressors are locked "behind the bars of prejudice and narrowmindedness" and that both oppressor and oppressed are robbed of their humanity. Yet while Frost stops at a stark cautionary verdict, Mandela moves toward hope: no one is born hating, love comes more naturally to the human heart, and goodness is a flame that can overcome icy prejudice.',
          markingTip:
            'Content (3M): Connect Frost’s "ice"/hate to Mandela’s "bars of prejudice" + highlight Mandela’s hopeful resolution (love vs learned hate) | Expression (3M): Cohesive 105–120 words.',
        },
        {
          type: 'qa',
          marks: 6,
          tag: 'Competency / Cross-Chapter (6 Marks)',
          question:
            'In "Fire and Ice", unchecked "desire" threatens to end the world; in "The Sermon at Benares", Gautama Buddha teaches Kisa Gotami to surrender selfishness and attachment. Discuss how both texts diagnose human craving and offer moral insight. (100–120 words)',
          answer:
            'Robert Frost’s "Fire and Ice" and "The Sermon at Benares" converge on a shared truth: uncontrolled human craving causes devastating suffering. Frost draws on personal observation ("From what I’ve tasted of desire") to show how blazing passion—greed, avarice, and fury—acts like a fire that can consume the world. Centuries earlier, the Buddha offered a complementary spiritual diagnosis to grieving Kisa Gotami. Sending her to seek mustard-seed from a house untouched by death, he led her to see that selfish attachment deepens sorrow rather than healing it. While Frost warns ironically that desire and hate "would suffice" for destruction, the Buddha prescribes the cure: draw out the arrow of lamentation, overcome selfishness, and attain peace of mind.',
          markingTip:
            'Content (3M): Link Frost’s "fire" (desire/greed) with Buddha’s lesson on selfishness/attachment and drawing out the arrow of lamentation | Expression (3M): Balanced synthesis, 105–120 words.',
        },
      ],
    },
  ],
};
