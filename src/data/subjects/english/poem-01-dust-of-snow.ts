import { Subtopic } from '../../../types/curriculum';

export const englishPoem01: Subtopic = {
  id: 'eng-ff-poem-01',
  slug: 'dust-of-snow',
  title: 'Poem 1: Dust of Snow',
  subtitle:
    'Robert Frost | abab cdcd (single 8-line enjambed sentence) — Negative omens (crow & hemlock) turned into quiet spiritual healing',
  estimatedMinutes: 20,
  difficulty: 'Board Mastery',
  ncertSection: 'First Flight — Poem 1',
  learningObjectives: [
    'Trace how Robert Frost crafts a single 8-line enjambed sentence across two quatrains (abab cdcd) to mirror an unbroken moment of inner renewal.',
    'Explain why Frost pairs a "crow" and a "hemlock tree" (conventional emblems of gloom and poison) instead of romantic birds or trees like a nightingale or maple.',
    'Interpret the central metaphor "dust of snow" as an effortless touch of nature that lifts regret ("rued") and redeems the rest of the day.',
    'Solve all NCERT Thinking about the Poem exercises on traditional bird/tree associations and Frost’s insight that "a little thing touches a larger thing."',
    'Write 5-mark RTC answers, 3-mark short answers (40–55 words), and 6-mark competency comparisons linking Poem 1 with A Letter to God and Fire and Ice.',
  ],
  keywords: [
    'Dust of Snow',
    'Robert Frost',
    'hemlock tree',
    'crow',
    'rued',
    'change of mood',
    'abab cdcd',
    'enjambment',
  ],
  sections: [
    {
      id: 'poem-01-ncert-glance',
      title: 'NCERT Reference, Quick Glance & Thematic Arc',
      blocks: [
        {
          type: 'ncert-reference',
          chapterKey: 'ff-poem-01',
          title: 'Poem 1: Dust of Snow — Original NCERT Text',
          bookName: 'First Flight — Poetry',
          pdfPath: '/ncert/english/jeff101.pdf',
          pdfStartPage: 14,
          pdfEndPage: 14,
          note: 'Read the 8-line poem alongside the NCERT glossary ("hemlock", "rued") and Thinking about the Poem questions.',
        },
        {
          type: 'quick-summary',
          title: '60-Second Exam Glance & Central Idea',
          bullets: [
            'Simple Incident, Deep Shift: On a wintry day weighed down by sorrow and regret, a crow perched on a poisonous hemlock tree shakes fine powdery snow ("dust of snow") onto the speaker.',
            'Subverting Dark Omens: Instead of choosing a cheerful songbird (nightingale, cuckoo) or an auspicious tree (oak, maple, pine), Frost deliberately selects a "crow" and a "hemlock tree" to prove that healing can emerge from bleak circumstances.',
            'Instant Emotional Turn: That brief, cold shower breaks the poet’s brooding gloom, gives his heart "a change of mood", and rescues the remaining hours of a day he had earlier "rued" (held in regret).',
            'Form Mirrors Meaning: The entire 8-line poem is a single unbroken sentence using enjambment across both stanzas (`abab cdcd`), enacting how one tiny natural motion flows directly into inner relief.',
            'Central Message (NCERT Note): As Frost observed elsewhere, "Always, always a larger significance... A little thing touches a larger thing"—small, ordinary encounters in nature hold quiet restorative power.',
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'Title Justification, Rhyme Scheme, Tone Shift & Symbolism',
          body: 'The title "Dust of Snow" spotlights the tiniest, seemingly inconsequential trigger in the poem—light, dry flakes shaken loose by a crow’s wing or movement—precisely because Frost wants to show that profound emotional recovery does not require grand miracles; small moments in nature can rescue a wasted day.',
          bullets: [
            'Rhyme Scheme: `abab cdcd` (`crow`/`snow`, `me`/`tree`; `heart`/`part`, `mood`/`rued`). Regular alternating rhymes lend musical calm to an anxious mind.',
            'Syntactic Architecture: Lines 1–4 form the adverbial/subject clause ("The way a crow / Shook down on me..."), while lines 5–8 deliver the main predicate ("Has given my heart..."). No comma or full stop interrupts lines 1–7.',
            'Tone Shift: Opens in cold, sombre stillness (Stanza 1: wintry hemlock and ominous crow) and pivots seamlessly into quiet gratitude, warmth of heart, and emotional salvage (Stanza 2).',
            'Core Symbols: Crow = gloom, harshness, unromantic reality; Hemlock tree = poison, sorrow, deathly bleakness; Dust of snow = unexpected grace, freshness, and cleansing wake-up call.',
          ],
        },
        {
          type: 'steps',
          title: 'Stanza-by-Stanza Emotional & Thematic Arc',
          items: [
            {
              label: '1. Depressive Backdrop & Unlikely Messengers (Lines 1–4)',
              detail:
                'The speaker stands beneath a snow-laden poisonous hemlock tree where a crow sits—two emblems of melancholy matching his depressed state of mind.',
              example: '"The way a crow / Shook down on me / The dust of snow / From a hemlock tree"',
            },
            {
              label: '2. Sensory Shock & Emotional Pivot (Lines 5–6)',
              detail:
                'Without any punctuation break, the falling snow touches the speaker physically and mentally, jolting his heart out of brooding inertia into a brighter mood.',
              example: '"Has given my heart / A change of mood"',
            },
            {
              label: '3. Salvaged Time & Quiet Optimism (Lines 7–8)',
              detail:
                'What had already passed in regret cannot be undone, yet the remaining portion of the day is reclaimed for hope and meaningful living.',
              example: '"And saved some part / Of a day I had rued."',
            },
          ],
        },
      ],
    },
    {
      id: 'poem-01-stanzas-rtc',
      title: 'Stanza-by-Stanza Verse, Word Lens & 5-Mark RTC Blueprint',
      blocks: [
        {
          type: 'poetic-stanza',
          lang: 'en',
          passageMode: 'verse',
          stanzaLabel: 'Stanza 1 — The Crow, the Hemlock & the Falling Snow (Lines 1–4)',
          stanzaText:
            'The way a crow\nShook down on me\nThe dust of snow\nFrom a hemlock tree',
          dialectBadge: 'Rhyme: abab | Bleak -> Unlikely Catalyst',
          prasang:
            'Spoken in the first person ("me"), the opening quatrain introduces an unnamed, dejected speaker outdoors in winter. With an alternating `abab` rhyme scheme and zero end-punctuation, the stanza captures a fleeting, seemingly trivial movement in nature that sets up the emotional transformation in Stanza 2.',
          bhavarthHindi:
            'Frost opens without melodrama: he simply records how a crow perched on a poisonous hemlock tree accidentally dislodged fine flakes of snow onto him. Notice what is omitted—neither why the poet was upset nor whether the crow fluttered intentionally. By placing himself beneath a hemlock with a black crow above, Frost uses traditional emblems of bad luck and death to mirror the speaker’s own heavy, joyless frame of mind before the snow falls.',
          englishHelper:
            '(i) Why does the speaker specifically mention a crow and a hemlock tree? [1M]\nAnswer: Both are traditional symbols of sorrow, ill omen, and gloom, reflecting the poet’s depressed mood and proving that comfort can arise even from bleak sources.\n(ii) What does "The way a crow / Shook down on me" reveal about the incident’s nature? [2M]\nAnswer: The phrasing stresses an effortless, unpremeditated natural movement—either flying off, shivering, or shifting on a twig—that accidentally showers fine snow on the poet, proving small ordinary moments can trigger deep mental shifts.\n(iii) Name the poetic device connecting lines 1 to 4 without punctuation. [1M]\nAnswer: Enjambment (the sentence runs continuously across line breaks and even into Stanza 2).\n(iv) Explain the metaphor "The dust of snow". [1M]\nAnswer: Light, powdery snow particles are likened to dry dust, highlighting their delicate, weightless fall.',
          poeticDevices: [
            'Enjambment: Lines 1–4 flow straight into Stanza 2 with no comma or full stop',
            'Symbolism (Inverted): "crow" (traditionally ill omen) and "hemlock tree" (poison/sorrow) act as agents of quiet renewal',
            'Metaphor: "The dust of snow" compares fine snow flakes to powdery dust',
            'Inversion (Syntax): Adverbial/subject phrase "The way a crow..." precedes the main verb "Has given" in Stanza 2',
          ],
          words: [
            {
              word: 'crow',
              englishMeaning: 'A large black bird often linked in folklore with gloom, death, or bad omens',
              synonym: 'raven-like omen, bleak messenger',
              grammarNote: 'Common noun; deliberately unromantic animal symbol',
              exampleSentence: 'Frost turns a humble crow into an unlikely herald of emotional relief.',
            },
            {
              word: 'Shook down',
              englishMeaning: 'Dislodged or caused light particles from above to fall onto someone below',
              synonym: 'showered, scattered downwards',
              grammarNote: 'Phrasal verb (past tense of shake down)',
              exampleSentence: 'A sudden movement of the bird shook down a cool spray of snow.',
            },
            {
              word: 'dust of snow',
              englishMeaning: 'Fine, powdery snow particles resembling soft dry dust',
              synonym: 'snowflakes, frost powder',
              grammarNote: 'Noun phrase functioning as a visual-tactile metaphor',
              exampleSentence: 'A delicate dust of snow startled the poet out of dark brooding.',
            },
            {
              word: 'hemlock tree',
              englishMeaning: 'A poisonous plant or tree bearing small white flowers (NCERT gloss)',
              synonym: 'toxic evergreen, emblem of sorrow',
              grammarNote: 'Compound noun phrase; contrasts with cheerful maple or oak',
              exampleSentence: 'Standing beneath a hemlock tree underscored the poet’s wintry despair.',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          lang: 'en',
          passageMode: 'verse',
          stanzaLabel: 'Stanza 2 — Change of Heart & Saved Remainder of the Day (Lines 5–8)',
          stanzaText:
            'Has given my heart\nA change of mood\nAnd saved some part\nOf a day I had rued.',
          dialectBadge: 'Rhyme: cdcd | Regret -> Quiet Hope',
          prasang:
            'Completing the poem’s single grammatical sentence in an alternating `cdcd` rhyme pattern, Stanza 2 shifts inward to the speaker’s psyche. The cold touch of snow dissolves lingering despair, restoring emotional balance and rescuing the rest of the day from wasted regret.',
          bhavarthHindi:
            'Here lies the poem’s emotional payoff: the tiny shower of snow "Has given my heart / A change of mood." Using "heart" (synecdoche for his whole spirit), Frost acknowledges that part of the day is already lost—he "had rued" (regretted) it—but the sudden sensory touch halts self-pity in its tracks. The ending is realistic rather than fairy-tale ecstatic: Frost claims only that it "saved some part" of the day, making the optimism deeply believable.',
          englishHelper:
            '(i) Which word best describes the speaker’s earlier mood before the snow fell? [1M]\nAnswer: Regretful / despondent (indicated by "Of a day I had rued").\n(ii) How did the falling snow change the poet’s day? [2M]\nAnswer: The sudden, gentle touch of snow refreshed his senses, gave his heart a positive change of mood, and stopped him from wasting the remaining hours of the day in gloom and regret.\n(iii) Identify the alliteration and synecdoche in Stanza 2. [1M]\nAnswer: Alliteration in "saved some part" (`/s/` sound) and "Has given my heart" (`/h/` sound); Synecdoche in "my heart" (standing for the poet’s whole mind and spirit).\n(iv) What does "rued" mean in the final line? [1M]\nAnswer: Held in regret; felt deep sorrow or remorse over.',
          poeticDevices: [
            'Alliteration: "And saved some part" (repetition of initial `/s/` sound) and "Has given my heart" (`/h/` sound)',
            'Synecdoche: "my heart" represents the speaker’s entire emotional self and state of mind',
            'Consonance: Repeated `/d/` endings in "mood / And saved ... had rued" create a calm sense of closure',
            'Enjambment: Continues uninterrupted from Stanza 1 through "rued."—the poem’s sole period',
          ],
          words: [
            {
              word: 'heart',
              englishMeaning: 'Inner emotional core, spirit, or state of mind (synecdoche for the whole person)',
              synonym: 'spirit, inner self',
              grammarNote: 'Singular noun used figuratively as the seat of feeling',
              exampleSentence: 'A brief brush with winter nature lifted the burden from the poet’s heart.',
            },
            {
              word: 'change of mood',
              englishMeaning: 'A sudden positive shift in feelings from dejection to calm cheerfulness',
              synonym: 'emotional renewal, uplift',
              grammarNote: 'Noun phrase acting as direct object of "Has given"',
              exampleSentence: 'Even a quiet walk outdoors can trigger an unexpected change of mood.',
            },
            {
              word: 'saved',
              englishMeaning: 'Rescued or prevented from being completely wasted in despair',
              synonym: 'redeemed, salvaged',
              grammarNote: 'Past participle parallel to "given" after auxiliary "Has"',
              exampleSentence: 'One kind gesture saved the afternoon from ending in bitterness.',
            },
            {
              word: 'some part',
              englishMeaning: 'The remaining hours or portion of the day still left to live well',
              synonym: 'remainder, remaining hours',
              grammarNote: 'Measured noun phrase highlighting realistic, partial redemption',
              exampleSentence: 'Though the morning felt bleak, he still saved some part of his day.',
            },
            {
              word: 'rued',
              englishMeaning: 'Held in regret; felt bitter sorrow or remorse over lost time (NCERT gloss)',
              synonym: 'regretted, mourned',
              grammarNote: 'Past perfect verb ("had rued") denoting prior dejection',
              exampleSentence: 'Before the snow fell, the speaker had rued every gloomy hour.',
            },
          ],
        },
      ],
    },
    {
      id: 'poem-01-devices-traps',
      title: 'Poetic Devices Cheat Sheet & Examiner Trap Alerts',
      blocks: [
        {
          type: 'table',
          caption: 'Complete Line-by-Line Poetic Devices Cheat Sheet',
          headers: ['Poetic Device', 'Exact Line / Phrase', 'Explanation & Poetic Effect'],
          rows: [
            [
              'Rhyme Scheme',
              'crow / me / snow / tree | heart / mood / part / rued',
              'Follows `abab cdcd`, creating tight musical balance across two crisp quatrains.',
            ],
            [
              'Enjambment',
              'Lines 1–8 (single unbroken sentence ending only at "rued.")',
              'Zero punctuation between lines lets the physical fall of snow flow smoothly into inner emotional change.',
            ],
            [
              'Symbolism (Inverted)',
              '"crow" and "hemlock tree" (Lines 1, 4)',
              'Traditionally emblems of ill omen and poison, here repurposed as unexpected agents of healing and joy.',
            ],
            [
              'Metaphor',
              '"The dust of snow" (Line 3)',
              'Compares fine, powdery snowflakes to dry dust—emphasising lightness, subtlety, and effortless grace.',
            ],
            [
              'Alliteration',
              '"saved some part" (Line 7); "Has given my heart" (Line 5)',
              'Repetition of `/s/` and `/h/` sounds lends gentle lyric softness to the moment of relief.',
            ],
            [
              'Synecdoche',
              '"Has given my heart" (Line 5)',
              'Part ("heart") stands for the poet’s entire being, stress-testing that the shift is deeply internal.',
            ],
            [
              'Consonance',
              '"mood / And saved ... had rued" (Lines 6–8)',
              'Repeated `/d/` consonant sounds anchor the ending with quiet finality.',
            ],
            [
              'Inversion & Situational Irony',
              '"The way a crow ... Has given my heart"',
              'Delayed main verb builds quiet suspense, while gloomy winter symbols ironically deliver emotional comfort.',
            ],
          ],
        },
        {
          type: 'notebook-mistake',
          studentName: 'Kabir (Class 10 Student)',
          title: 'Trap 1: Thinking the Crow Intentionally Cheered Up the Poet',
          wrongWork:
            'The wise crow saw that Robert Frost was sad under the hemlock tree, so it kindly shook snow on him to make him smile.',
          teacherFix:
            'The poem gives no hint that the crow understood or cared about the poet’s sadness. Frost writes "The way a crow / Shook down on me", leaving the bird’s motion ordinary and accidental—which makes nature’s unplanned healing power even more remarkable.',
          whyWrong:
            'Inventing human sympathy in the crow distorts Frost’s realism: nature heals not by plotting kindness, but simply by existing vividly when we notice it.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Ananya (Class 10 Student)',
          title: 'Trap 2: Misreading "Hemlock" or Treating "Dust of Snow" as Literal Dirt',
          wrongWork:
            'The crow dropped dirty snow mixed with dust from a peaceful pine tree onto Frost, ruining his coat.',
          teacherFix:
            '"Dust of snow" is a metaphor for fine, powdery snowflakes (not muddy dirt), and a "hemlock tree" is specifically a poisonous tree (not a peaceful pine). This sharp contrast between poisonous gloom and delicate snow is central to NCERT Question 2.',
          whyWrong:
            'Confusing metaphorical "dust" with literal dirt or misnaming the hemlock loses easy 1-mark and 3-mark points in NCERT textual questions.',
        },
      ],
    },
    {
      id: 'poem-01-vocab-language',
      title: 'Poetic Diction, Symbols & NCERT Textual Exercises',
      blocks: [
        {
          type: 'chapter-word-bank',
          lang: 'en',
          title: 'Poetic Diction, Symbols & Tone Bank',
          intro: 'Complement the clickable stanza words with these NCERT glossary terms and critical descriptors for board answers.',
          extraWords: [
            {
              word: 'hemlock',
              englishMeaning: 'A poisonous plant (tree) with small white flowers (verbatim NCERT glossary)',
              synonym: 'toxic evergreen, dark symbol',
              grammarNote: 'Noun used attributively in "hemlock tree"',
              exampleSentence: 'Frost selects a hemlock rather than an oak or maple to challenge poetic clichés.',
            },
            {
              word: 'inauspicious',
              englishMeaning: 'Traditionally thought to signal bad luck, sorrow, or misfortune',
              synonym: 'ominous, ill-starred',
              grammarNote: 'Board-level analytical adjective for crow & hemlock',
              exampleSentence: 'Through a crow and a hemlock, inauspicious symbols become vehicles of grace.',
            },
            {
              word: 'restorative',
              englishMeaning: 'Having the power to renew energy, hope, or emotional balance',
              synonym: 'healing, rejuvenating',
              grammarNote: 'Theme adjective for nature in Frost’s poem',
              exampleSentence: 'A brief winter shower reveals nature’s quiet restorative power.',
            },
            {
              word: 'dejection',
              englishMeaning: 'A low, gloomy state of sadness, disappointment, or hopelessness',
              synonym: 'melancholy, despondency',
              grammarNote: 'Abstract noun describing the speaker’s initial mood',
              exampleSentence: 'A single cold touch breaks the speaker’s morning dejection.',
            },
            {
              word: 'solace',
              englishMeaning: 'Comfort or consolation in a time of distress or sadness',
              synonym: 'comfort, relief',
              grammarNote: 'Abstract noun; pairs well with "unexpected solace"',
              exampleSentence: 'Ordinary scenes outdoors often bring solace when grand remedies fail.',
            },
            {
              word: 'enjambed',
              englishMeaning: 'Running on from one poetic line to the next without terminal punctuation',
              synonym: 'run-on, unbroken',
              grammarNote: 'Literary adjective describing all eight lines of the poem',
              exampleSentence: 'The enjambed syntax unites the crow’s movement with the poet’s changed heart.',
            },
          ],
        },
        {
          type: 'table',
          caption: 'NCERT Thinking About the Poem (Q2): Conventional Symbols vs. Frost’s Twist',
          headers: ['Poetic Element', 'Traditional / Expected Image', 'What Frost Actually Chooses & Why'],
          rows: [
            [
              'Bird',
              'Nightingale, dove, cuckoo, skylark (associated with melody, spring, beauty, peace)',
              'Crow — harsh-voiced black bird tied to gloom and ill omens, mirroring the speaker’s dark mood.',
            ],
            [
              'Tree',
              'Maple, oak, pine, willow (associated with shade, dignity, warmth, scenic beauty)',
              'Hemlock tree — a poisonous plant with small white flowers, reinforcing sorrow and bleakness.',
            ],
            [
              'Snow Action',
              'Cold storm or freezing discomfort',
              '"Dust of snow" — fine, gentle flakes that purify despair and unexpectedly save the rest of the day.',
            ],
          ],
        },
      ],
    },
    {
      id: 'poem-01-short-qa',
      title: 'Trap MCQ Checkpoint & 3-Mark Short Answers (NCERT + CBSE)',
      blocks: [
        {
          type: 'checkpoint',
          prompt:
            'Why did Robert Frost place a "crow" and a "hemlock tree" in "Dust of Snow" instead of a singing nightingale or a maple tree?',
          options: [
            {
              id: 'a',
              label: 'Only crows and hemlock trees survive winter snowfall in New England.',
            },
            {
              id: 'b',
              label: 'Both traditional emblems of gloom and poison match his depressed mood and show that healing can come even from bleak things.',
            },
            {
              id: 'c',
              label: 'He wanted to warn travellers against resting beneath poisonous plants during snowstorms.',
            },
            {
              id: 'd',
              label: 'A nightingale and a maple tree would not fit the poem’s abab cdcd rhyme scheme.',
            },
          ],
          correctIds: ['b'],
          multiSelect: false,
          successMsg:
            'Exact hit! Frost rejects conventional "pretty" nature symbols to prove that even traditionally sorrowful objects can refresh a heavy heart.',
          hintMsg:
            'Think about NCERT Q2(i)–(iii): what mood do crow and hemlock traditionally represent—joy or sorrow?',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT Thinking About Text',
          question:
            'What is a "dust of snow"? What does the poet say has changed his mood? How has the poet’s mood changed?',
          answer:
            'A "dust of snow" refers to fine, powdery flakes of snow resting on a hemlock tree. The poet says that the sudden fall of these snowflakes, shaken down by a crow, changed his mood. He shifts from deep dejection and regret ("rued") to quiet cheerfulness, saving the rest of his day.',
          markingTip:
            'Content (2M): Define "dust of snow" + identify trigger (crow shaking snow) + specify shift from regret to hope | Expression (1M): Crisp 45–50 words.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT Thinking About Text',
          question:
            'How does Frost present nature in this poem? Why does he avoid naming a nightingale or a maple, oak, or pine tree?',
          answer:
            'Frost presents nature as unsentimental yet deeply healing. By choosing a bleak crow and a poisonous hemlock tree instead of lovely birds or noble oaks and maples, he aligns setting with his sad mood and proves that even unpromising, sorrowful aspects of nature can bring unexpected joy.',
          markingTip:
            'Content (2M): Unconventional, non-romantic view of nature + contrast with pretty birds/trees | Expression (1M): Clear analytical focus.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT Thinking About Text',
          question:
            'What do the "crow" and "hemlock" represent—joy or sorrow? What does the dust of snow that the crow shakes off a hemlock tree stand for?',
          answer:
            'Traditionally, both the crow and the poisonous hemlock represent sorrow, darkness, and ill omen. Yet the dust of snow shaken off by the crow stands for unexpected joy, freshness, and spiritual awakening—showing that positive energy can emerge from the darkest circumstances.',
          markingTip:
            'Content (2M): Sorrow association of crow/hemlock + symbolic meaning of falling snow as renewal | Expression (1M): Direct two-part answer.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Short Answer (40–50 Words)',
          question:
            'How does the poem’s structure as a single sentence reinforce Frost’s statement: "A little thing touches a larger thing"?',
          answer:
            'Frost compresses the poem into one continuous eight-line enjambed sentence (`abab cdcd`). Lines 1–4 capture the tiny physical event (the crow shaking snow), which flows without punctuation into lines 5–8—the larger emotional outcome of rescuing the poet’s heart and saving his day from regret.',
          markingTip:
            'Content (2M): Mention single 8-line enjambed sentence + connect small physical trigger to large inner change | Expression (1M): Cohesive 45–50 words.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Title & Theme Justification',
          question:
            'Why has the poet titled the poem "Dust of Snow" rather than "A Winter Day" or "The Crow and the Hemlock"?',
          answer:
            'The title "Dust of Snow" centres attention on the delicate, ordinary catalyst that sparked the speaker’s transformation. Rather than dwelling on winter gloom or dark omens, Frost honours the humble powdery snow—proving that the smallest natural gesture can heal a burdened mind.',
          markingTip:
            'Content (2M): Focus on catalyst over gloom + theme that small things rescue mood | Expression (1M): Concise evaluation.',
        },
      ],
    },
    {
      id: 'poem-01-competency-long',
      title: '6-Mark Competency & Cross-Chapter Extrapolations',
      blocks: [
        {
          type: 'qa',
          marks: 6,
          tag: 'Competency / Cross-Chapter (6 Marks)',
          question:
            'In "A Letter to God", nature destroys Lencho’s cornfield with hail, whereas in "Dust of Snow", nature heals Frost’s gloom. Compare how both texts portray nature’s unexpected power over human emotions. (100–120 words)',
          answer:
            'Together, G.L. Fuentes’s "A Letter to God" and Robert Frost’s "Dust of Snow" reveal nature’s dual, unpredictable sway over human life. In Fuentes’s story, welcome raindrops—celebrated by Lencho as "new coins"—suddenly turn into an hour-long hailstorm of "frozen pearls", leaving the valley "white, as if covered with salt" and plunging the farmer into despair. Conversely, Frost presents winter not as a destroyer but as a quiet healer. Beneath an ominous hemlock tree, an accidental shower of "dust of snow" from a crow melts the speaker’s regret ("rued") and saves the rest of his day. While Lencho responds to nature’s fury by writing frantically to heaven, Frost shows that mindful receptivity to even tiny natural moments can restore inner peace.',
          markingTip:
            'Content (3M): Contrast hailstorm devastation ("new coins" -> "salt") with snow’s gentle healing ("dust of snow", "rued") | Expression (3M): Balanced comparative paragraph, 105–120 words.',
        },
        {
          type: 'qa',
          marks: 6,
          tag: 'Competency / Cross-Chapter (6 Marks)',
          question:
            'Robert Frost wrote both "Dust of Snow" and "Fire and Ice", placed side by side in First Flight. Compare the emotional tone and lesson about human mindset across these two poems. (100–120 words)',
          answer:
            'Though concise and deceptively simple, Frost’s paired poems "Dust of Snow" and "Fire and Ice" examine opposite possibilities of human attitude. "Dust of Snow" celebrates openness and hope: when an ordinary crow shakes snow from a hemlock tree, the poet allows that tiny moment to give his heart "a change of mood" and salvage his day from regret. In stark contrast, "Fire and Ice" warns of inner self-destruction when humans cling to extreme passions—unchecked "desire" (fire) or cold, rigid "hate" (ice)—capable of making the world "perish twice". Together, the poems teach that inner ruin begins with hardened emotion, whereas survival and peace begin when we remain receptive to grace, humility, and quiet renewal.',
          markingTip:
            'Content (3M): Accurate link between hopeful renewal in Poem 1 ("change of mood") and moral warning in Poem 2 ("desire" vs "hate") | Expression (3M): Tight thematic synthesis, 105–120 words.',
        },
      ],
    },
  ],
};
