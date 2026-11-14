import { GlossaryTerm, QuizQuestion } from '../../../types/curriculum';

export const englishGlossary: GlossaryTerm[] = [
  // Poetic & Literary Devices (10)
  {
    id: 'eng-gl-dev-situational-irony',
    term: 'Situational Irony',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'A stark reversal between what a character or reader expects to happen and what actually unfolds.',
    englishMeaning:
      'Outcome opposite to intention or expectation, exposing blind spots in human judgement.',
    grammarNote: 'Literary Device (Noun Phrase)',
    ncertDefinition:
      'Used by G. L. Fuentes in A Letter to God when Lencho calls the very post-office employees who donated seventy pesos "a bunch of crooks".',
    example:
      'The charity meant to rescue Lencho’s family becomes the source of his bitter accusation — classic situational irony.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'a-letter-to-god',
      sectionId: 'prose-01-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-dev-dramatic-irony',
    term: 'Dramatic Irony',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'When the reader or audience knows a crucial truth that the characters on stage or in the story do not.',
    englishMeaning:
      'Audience possesses superior knowledge over a character, creating tension or humour.',
    grammarNote: 'Literary & Dramatic Device',
    ncertDefinition:
      'Central to The Proposal (as Natalya drives Lomov out before discovering he had come to propose) and A Letter to God (the reader sees the postmaster’s collection while Lencho blames postal staff).',
    example:
      'The audience laughs at Chubukov and Natalya insulting Lomov moments before begging him to propose.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'the-proposal',
      sectionId: 'prose-09-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-dev-farce',
    term: 'Farce',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'A fast-paced comedy built on exaggerated tempers, absurd misunderstandings, and physical clowning.',
    englishMeaning:
      'Comic drama using improbable situations, stereotyping, and horseplay to satirise human folly.',
    grammarNote: 'Dramatic Genre (Noun)',
    ncertDefinition:
      'Chekhov’s one-act play The Proposal is a biting farce exposing how Russian landowners turn courtship into petty quarrels over Oxen Meadows and hunting dogs.',
    example:
      'Lomov’s theatrical fainting spells and water-gulping turn a serious marriage proposal into uproarious farce.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'the-proposal',
      sectionId: 'prose-09-ncert-glance',
    },
  },
  {
    id: 'eng-gl-dev-paradox',
    term: 'Paradox',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'A seemingly self-contradictory statement that reveals a deep psychological or moral truth.',
    englishMeaning:
      'Apparent contradiction that proves true on closer reflection.',
    grammarNote: 'Rhetorical Device (Noun)',
    ncertDefinition:
      'In Long Walk to Freedom, Mandela observes that both the oppressor and the oppressed are robbed of their humanity, and that courage is not the absence of fear but the triumph over it.',
    example:
      'Mandela’s statement that "the oppressor must be liberated just as surely as the oppressed" is a powerful moral paradox.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'nelson-mandela-long-walk-to-freedom',
      sectionId: 'prose-02-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-dev-metaphor',
    term: 'Extended Metaphor',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'An implied comparison equating two unlike things directly, often sustained across several images.',
    englishMeaning:
      'Implicit comparison without "like" or "as", developed through connected imagery.',
    grammarNote: 'Figurative Device (Noun)',
    ncertDefinition:
      'Seen in A Letter to God (raindrops equated with "new coins", hailstones with "frozen pearls") and The Sermon at Benares (grief compared to a hidden "arrow of lamentation").',
    example:
      'Referring to large ten-cent and small five-cent coins highlights how deeply a farmer’s livelihood depends on timely rain.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'a-letter-to-god',
      sectionId: 'prose-01-vocab-language',
    },
  },
  {
    id: 'eng-gl-dev-symbolism',
    term: 'Symbolism',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'Using an everyday object, scene, or journey to stand for a larger abstract idea or inner transformation.',
    englishMeaning:
      'Representation of deeper philosophical or psychological ideas through concrete images.',
    grammarNote: 'Literary Technique (Noun)',
    ncertDefinition:
      'The seagull’s first plunge symbolises conquering self-doubt; Kisa Gotami’s flickering Benares city lights symbolise the fleeting cycle of mortal human lives.',
    example:
      'For Valli, the dead cow by the highway acts as a sobering symbol of life’s sudden fragility.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'the-sermon-at-benares',
      sectionId: 'prose-08-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-dev-antithesis',
    term: 'Antithesis',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'Placing two sharply contrasting ideas side by side in balanced phrasing for rhetorical punch.',
    englishMeaning:
      'Juxtaposition of opposing words or clauses in parallel grammatical structure.',
    grammarNote: 'Rhetorical Device (Noun)',
    ncertDefinition:
      'Mandela frequently uses antithesis in his inauguration speech, such as contrasting "depths of oppression" with "heights of character".',
    example:
      'The contrast between "extraordinary human disaster" and "glorious human achievement" gives Mandela’s speech oratorical grandeur.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'nelson-mandela-long-walk-to-freedom',
      sectionId: 'prose-02-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-dev-foreshadowing',
    term: 'Foreshadowing',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'Subtle narrative hints early in a story that prepare the reader for a dramatic turn later.',
    englishMeaning:
      'Advance clue signalling an upcoming crisis or revelation.',
    grammarNote: 'Narrative Technique (Noun)',
    ncertDefinition:
      'Lencho’s remark that "it was getting really bad now" before huge hailstones fall, and the elderly woman’s warning in Madam Rides the Bus prepare the shift in mood.',
    example:
      'The ominous black storm clouds towering like mountains foreshadowed the Dakota pilot’s crisis of failing instruments.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'two-stories-about-flying',
      sectionId: 'prose-03-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-dev-allusion',
    term: 'Allusion & Folk Legend',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'A brief reference to history, myth, or cultural legend to enrich context without retelling everything.',
    englishMeaning:
      'Indirect or concise invocation of well-known historical or mythological lore.',
    grammarNote: 'Literary Device (Noun)',
    ncertDefinition:
      'Glimpses of India weaves Alexander’s army and Arabic trade legends into Coorg, plus Bodhidharma and the 2700 B.C. Chinese emperor legends into Tea from Assam.',
    example:
      'Linking Kodavus’ embroidered black waist-belt (kuppia) to the Arab kuffia connects architecture and attire to cultural migration.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'glimpses-of-india',
      sectionId: 'prose-05-ncert-glance',
    },
  },
  {
    id: 'eng-gl-dev-satire',
    term: 'Social Satire',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'Using wit, ridicule, and exaggeration to critique foolish social customs or hypocrisy.',
    englishMeaning:
      'Mocking exposure of institutional or class vanity to prompt reflection.',
    grammarNote: 'Literary Mode (Noun)',
    ncertDefinition:
      'Anne Frank gently satirises frantic exam-eve classroom betting and rigid teachers, while Chekhov sharply satirises wealthy Russian landowners marrying purely for estate consolidation.',
    example:
      'Chekhov uses Chubukov’s sudden switches from calling Lomov "angel" to "villain" as satire against hypocritical etiquette.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'the-proposal',
      sectionId: 'prose-09-characters-traps',
    },
  },

  // Tone & Mood Descriptors (10)
  {
    id: 'eng-gl-tone-amiable',
    term: 'Amiable',
    category: 'Tone & Mood Descriptors',
    simpleMeaning:
      'Warm, good-natured, and genuinely friendly in manner or speech.',
    englishMeaning:
      'Displaying friendliness and pleasant warmth toward others.',
    grammarNote: 'Adjective (Board Character Word)',
    ncertDefinition:
      'G. L. Fuentes describes the postmaster as "a fat, amiable fellow" whose initial laughter turns swiftly into deep respect and silent generosity.',
    example:
      'Even after breaking out laughing at the address, the amiable postmaster refused to shake Lencho’s faith.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'a-letter-to-god',
      sectionId: 'prose-01-characters-traps',
    },
  },
  {
    id: 'eng-gl-tone-indignant',
    term: 'Indignant',
    category: 'Tone & Mood Descriptors',
    simpleMeaning:
      'Filled with righteous anger at what one believes is unfair or dishonest treatment.',
    englishMeaning:
      'Feeling or expressing anger over perceived injustice.',
    grammarNote: 'Adjective / Tone Descriptor for RTC',
    ncertDefinition:
      'Lencho’s reaction upon counting only seventy pesos in the envelope — he feels neither gratitude nor shock, only indignation that someone stole thirty pesos.',
    example:
      'CBSE marking schemes specifically reward "indignant" or "disappointed yet suspicious" over "sad" when describing Lencho’s second letter.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'a-letter-to-god',
      sectionId: 'prose-01-characters-traps',
    },
  },
  {
    id: 'eng-gl-tone-solemn',
    term: 'Solemn & Magnanimous',
    category: 'Tone & Mood Descriptors',
    simpleMeaning:
      'Dignified, deeply serious, and noble-spirited enough to forgive former enemies.',
    englishMeaning:
      'Grave, ceremonial, and generous of spirit in victory.',
    grammarNote: 'Adjective Pair (Tone Descriptor)',
    ncertDefinition:
      'Characterises Nelson Mandela’s 10 May 1994 inaugural address as he honours fallen anti-apartheid heroes and calls for non-racial reconciliation.',
    example:
      'Instead of triumphalism, Mandela adopts a solemn, magnanimous tone recognising shared human dignity.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'nelson-mandela-long-walk-to-freedom',
      sectionId: 'prose-02-characters-traps',
    },
  },
  {
    id: 'eng-gl-tone-candid',
    term: 'Candid & Witty',
    category: 'Tone & Mood Descriptors',
    simpleMeaning:
      'Frankly honest about one’s flaws and emotions while staying playful and clever.',
    englishMeaning:
      'Unfiltered sincerity combined with sharp verbal humour.',
    grammarNote: 'Adjective Pair (Tone Descriptor)',
    ncertDefinition:
      'Defines Anne Frank’s diary voice: she admits feeling lonely despite thirty people she calls friends and disarms Mr Keesing with humorous verse.',
    example:
      'Anne’s candid confession that paper has more patience than people resonates with adolescent readers.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'from-the-diary-of-anne-frank',
      sectionId: 'prose-04-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-tone-nostalgic',
    term: 'Nostalgic',
    category: 'Tone & Mood Descriptors',
    simpleMeaning:
      'Looking back fondly and wistfully at simpler, cherished times from the past.',
    englishMeaning:
      'Sentimental longing for bygone childhood or cultural traditions.',
    grammarNote: 'Adjective (Tone Descriptor)',
    ncertDefinition:
      'Lucio Rodrigues opens A Baker from Goa with village elders "reminiscing nostalgically" about the good old Portuguese days and the pader’s jingling bamboo.',
    example:
      'Remembering how children ran for bread-bangles without brushing their teeth gives Part I a warm, nostalgic tone.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'glimpses-of-india',
      sectionId: 'prose-05-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-tone-resolute',
    term: 'Resolute & Self-Reliant',
    category: 'Tone & Mood Descriptors',
    simpleMeaning:
      'Firmly determined and unwilling to lean on others when pursuing a goal.',
    englishMeaning:
      'Steadfastly purposeful and proud of managing independently.',
    grammarNote: 'Adjective Pair (Character Tone)',
    ncertDefinition:
      'Captures eight-year-old Valli saving sixty paise despite fairground temptations and refusing both the conductor’s hand and his free cold drink.',
    example:
      'Her crisp reply, "I can take care of myself," captures Valli’s resolute pride.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'madam-rides-the-bus',
      sectionId: 'prose-07-characters-traps',
    },
  },
  {
    id: 'eng-gl-tone-poignant',
    term: 'Poignant',
    category: 'Tone & Mood Descriptors',
    simpleMeaning:
      'Deeply touching and bittersweet, evoking tender sorrow mixed with sudden maturity.',
    englishMeaning:
      'Emotionally moving with a sharp sense of sadness or loss.',
    grammarNote: 'Adjective (Tone Shift Descriptor)',
    ncertDefinition:
      'Describes the tonal shift in Madam Rides the Bus when Valli sees the previously cheerful cow lying dead by the roadside.',
    example:
      'Valli sitting glued to her seat in heavy silence lends the ending a poignant realism.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'madam-rides-the-bus',
      sectionId: 'prose-07-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-tone-philosophical',
    term: 'Philosophical & Serene',
    category: 'Tone & Mood Descriptors',
    simpleMeaning:
      'Calm, reflective, and focused on universal truths rather than panic or personal blame.',
    englishMeaning:
      'Tranquil wisdom facing existential questions with detachment.',
    grammarNote: 'Adjective Pair (Tone Descriptor)',
    ncertDefinition:
      'Defines the closing tone of The Sermon at Benares, where the Buddha gently guides mourners from blinding grief toward composure.',
    example:
      'Comparing mortals to ripe fruits waiting to fall reinforces a serene, philosophical acceptance of impermanence.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'the-sermon-at-benares',
      sectionId: 'prose-08-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-tone-belligerent',
    term: 'Quarrelsome & Hypocritical',
    category: 'Tone & Mood Descriptors',
    simpleMeaning:
      'Eager to pick petty arguments while disguising self-interest behind fake politeness.',
    englishMeaning:
      'Pugnacious temperament masked by hollow social pleasantries.',
    grammarNote: 'Adjective Pair (Character Tone)',
    ncertDefinition:
      'Fits Chubukov and Natalya in The Proposal as they flip effortlessly from sweet endearments to ferocious property insults within seconds.',
    example:
      'Calling Lomov "petty-fogger" one minute and "my dear fellow" the next exposes Chubukov’s hypocritical tone.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'the-proposal',
      sectionId: 'prose-09-characters-traps',
    },
  },
  {
    id: 'eng-gl-tone-wistful',
    term: 'Apprehensive Yet Determined',
    category: 'Tone & Mood Descriptors',
    simpleMeaning:
      'Feeling anxious about real danger yet driven forward by desire or necessity.',
    englishMeaning:
      'Fearful awareness balanced by urgent motivation.',
    grammarNote: 'Adjective Phrase (Tone Descriptor)',
    ncertDefinition:
      'Applies both to the young seagull teetering on the cliff brink before hunger triggers flight and the Dakota pilot risking the storm for an English breakfast.',
    example:
      'In both parts of Two Stories about Flying, hesitation transforms into decisive movement when safety nets vanish.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'two-stories-about-flying',
      sectionId: 'prose-03-characters-traps',
    },
  },

  // First Flight — Prose Vocab (20 terms across Ch 1-9)
  {
    id: 'eng-gl-p1-crest',
    term: 'Crest',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'The top or highest ridge of a hill, mountain, or wave.',
    englishMeaning: 'Summit or crown of an elevated landform.',
    grammarNote: 'Noun (Ch 1: A Letter to God)',
    ncertDefinition:
      'Lencho’s isolated house sat on "the crest of a low hill", overlooking the river and his ripe cornfield.',
    example:
      'From the crest of the hill, the farmer watched rain clouds roll in from the north-east.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'a-letter-to-god',
      sectionId: 'prose-01-vocab-language',
    },
  },
  {
    id: 'eng-gl-p1-conscience',
    term: 'Conscience',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'An inner moral sense guiding right and wrong.',
    englishMeaning: 'Internal ethical compass judging one’s own conduct.',
    grammarNote: 'Abstract Noun (Ch 1: A Letter to God)',
    ncertDefinition:
      'Lencho stayed awake thinking of his one hope even though he was an "ox of a man", because he had been instructed that God’s eyes see deep into one’s conscience.',
    example:
      'Answering a stranger’s naive letter became an act of goodwill driven by the postmaster’s conscience.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'a-letter-to-god',
      sectionId: 'prose-01-vocab-language',
    },
  },
  {
    id: 'eng-gl-p2-besieged',
    term: 'Besieged',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'Closely surrounded on all sides (here, pleasantly crowded by well-wishers).',
    englishMeaning: 'Encircled densely by people, visitors, or pressing demands.',
    grammarNote: 'Verb — Past Tense / Participle (Ch 2: Nelson Mandela)',
    ncertDefinition:
      'Mandela writes he had been "pleasantly besieged by dignitaries and world leaders" arriving in Pretoria before 10 May 1994.',
    example:
      'Normally "besieged" denotes military attack, so pairing it with "pleasantly" underlines historic diplomatic celebration.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'nelson-mandela-long-walk-to-freedom',
      sectionId: 'prose-02-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-p2-emancipation',
    term: 'Emancipation',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'Liberation from political oppression, legal bondage, or social restriction.',
    englishMeaning: 'Freedom from systemic servitude, poverty, and discrimination.',
    grammarNote: 'Abstract Noun (Ch 2: Nelson Mandela)',
    ncertDefinition:
      'Mandela pledges South Africa to liberate every citizen from "poverty, deprivation, suffering, gender and other discrimination" after achieving political emancipation.',
    example:
      'Achieving democracy was only the starting line of full social and economic emancipation.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'nelson-mandela-long-walk-to-freedom',
      sectionId: 'prose-02-vocab-language',
    },
  },
  {
    id: 'eng-gl-p2-resilience',
    term: 'Resilience',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'The capacity to endure brutal hardship and bounce back without breaking.',
    englishMeaning: 'Toughness to recover strength amid adversity.',
    grammarNote: 'Abstract Noun (Ch 2: Nelson Mandela)',
    ncertDefinition:
      'Witnessing comrades withstand torture without breaking taught Mandela a courage and resilience that "defies the imagination".',
    example:
      'Decades of apartheid inadvertently forged extraordinary moral resilience among freedom fighters.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'nelson-mandela-long-walk-to-freedom',
      sectionId: 'prose-02-vocab-language',
    },
  },
  {
    id: 'eng-gl-p3-upbraiding',
    term: 'Upbraiding',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'Scolding or rebuking sharply for cowardice or failure.',
    englishMeaning: 'Reproaching harshly to spur action.',
    grammarNote: 'Present Participle / Verb (Ch 3-I: His First Flight)',
    ncertDefinition:
      'The seagull’s parents flew around "calling to him shrilly, upbraiding him" and threatening to let him starve unless he flew.',
    example:
      'Beneath their harsh upbraiding lay anxious parental urgency to help him survive.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'two-stories-about-flying',
      sectionId: 'prose-03-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-p3-soaring',
    term: 'Soaring & Skimming',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'Rising effortlessly high in the air vs. gliding lightly just above a surface.',
    englishMeaning: 'Distinct flight motions tested in NCERT vocabulary exercises.',
    grammarNote: 'Participles / Motion Verbs (Ch 3: Two Stories about Flying)',
    ncertDefinition:
      'NCERT Contrast: "skimming" means moving lightly just above the waves; "soaring" means rising steeply upwards; "banking" means tilting one wing while turning.',
    example:
      'Once terror vanished, the young seagull was no longer falling headlong — he was soaring upwards smoothly.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'two-stories-about-flying',
      sectionId: 'prose-03-vocab-language',
    },
  },
  {
    id: 'eng-gl-p4-incorrigible',
    term: 'Incorrigible',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'Unable to be corrected, reformed, or stopped from a bad habit.',
    englishMeaning: 'Habitually persistent beyond correction (used humourlessly by Mr Keesing).',
    grammarNote: 'Adjective (Ch 4: From the Diary of Anne Frank)',
    ncertDefinition:
      'After Anne defended talking as an inherited female trait, Mr Keesing assigned a second essay titled "An Incorrigible Chatterbox".',
    example:
      'The adjective "incorrigible" signals Mr Keesing’s mock exasperation with Anne’s irrepressible wit.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'from-the-diary-of-anne-frank',
      sectionId: 'prose-04-vocab-language',
    },
  },
  {
    id: 'eng-gl-p4-quaking',
    term: 'Quaking in Its Boots',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'Trembling uncontrollably with nervous fear and anxiety.',
    englishMeaning: 'Shaking visibly due to dread about an uncertain outcome.',
    grammarNote: 'Idiomatic Expression (Ch 4: From the Diary of Anne Frank)',
    ncertDefinition:
      'Anne describes the whole class "quaking in its boots" before the teachers’ meeting deciding promotion.',
    example:
      'Notice the singular possessive "its" treating "class" as a collective noun.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'from-the-diary-of-anne-frank',
      sectionId: 'prose-04-vocab-language',
    },
  },
  {
    id: 'eng-gl-p5-reminiscing',
    term: 'Reminiscing',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'Indulging in fond recollection of cherished past experiences.',
    englishMeaning: 'Recalling old times nostalgically in conversation.',
    grammarNote: 'Verb — Present Participle (Ch 5-I: A Baker from Goa)',
    ncertDefinition:
      'Goan elders are heard "reminiscing nostalgically about those good old Portuguese days" and the famous loaves of bread.',
    example:
      'Village bakers have vanished in number, yet locals still remember them while reminiscing over morning tea.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'glimpses-of-india',
      sectionId: 'prose-05-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-p5-kabai',
    term: 'Kabai & Kuppia',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'Traditional regional garments: pader’s single-piece frock (Goa) vs Kodavu embroidered coat (Coorg).',
    englishMeaning: 'Distinct cultural attire terms frequently tested in 1-mark MCQs.',
    grammarNote: 'Cultural Nouns (Ch 5-I & II: Glimpses of India)',
    ncertDefinition:
      'Goan bakers wore the "kabai" (a single-piece frock reaching the knees), whereas Kodavus wear the long black coat with an embroidered waist-belt called "kuppia", resembling the Arab "kuffia".',
    example:
      'Do not confuse Goan baker attire (kabai) with Coorgi warrior attire (kuppia).',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'glimpses-of-india',
      sectionId: 'prose-05-ncert-glance',
    },
  },
  {
    id: 'eng-gl-p5-second-flush',
    term: 'Second Flush',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'The second seasonal sprouting period (May to July) yielding the finest Assam tea.',
    englishMeaning: 'Mid-year harvest of young tender shoots producing top-grade tea.',
    grammarNote: 'Noun Phrase / Agriculture Term (Ch 5-III: Tea from Assam)',
    ncertDefinition:
      'Rajvir surprises Pranjol’s father, Mr Barua, by knowing that "the second-flush or sprouting period" lasts from May to July and yields the best tea.',
    example:
      'Rajvir’s homework before arriving at Dhekiabari Tea Estate shows genuine intellectual curiosity.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'glimpses-of-india',
      sectionId: 'prose-05-vocab-language',
    },
  },
  {
    id: 'eng-gl-p6-thralldom',
    term: 'Thralldom',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'Being completely captivated or spellbound in a lifelong bond of attachment.',
    englishMeaning: 'Condition of being figuratively held captive by devotion or fascination.',
    grammarNote: 'Abstract Noun (Ch 6: Mijbil the Otter)',
    ncertDefinition:
      'Opening the sack began a lifelong phase for Gavin Maxwell — "a thralldom to otters" shared by nearly everyone who owns one.',
    example:
      'Mijbil’s playful affection turned Maxwell’s grief over losing his dog into joyous thralldom.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'mijbil-the-otter',
      sectionId: 'prose-06-vocab-language',
    },
  },
  {
    id: 'eng-gl-p6-compulsive',
    term: 'Compulsive Habits',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'Fixed, repetitive rituals carried out every time without fail, out of quirk or habit.',
    englishMeaning: 'Irresistible routine behaviours repeated in identical sequence.',
    grammarNote: 'Adjective + Noun (Ch 6: Mijbil the Otter)',
    ncertDefinition:
      'Just as children avoid pavement cracks or touch every seventh upright railing, Mijbil tugged Maxwell onto the 2-foot primary-school wall in London and galloped all thirty yards of it.',
    example:
      'Comparing Mijbil’s school-wall gallop to schoolchildren’s paving-block games humanises the otter’s mischief.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'mijbil-the-otter',
      sectionId: 'prose-06-vocab-language',
    },
  },
  {
    id: 'eng-gl-p7-slack-time',
    term: 'Slack Time & Wistfully',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'Quiet off-peak afternoon hours when traffic is sparse; "wistfully" means longingly.',
    englishMeaning: 'Low-demand afternoon lull paired with yearning curiosity.',
    grammarNote: 'Noun Phrase + Adverb (Ch 7: Madam Rides the Bus)',
    ncertDefinition:
      'The conductor calls the 1 p.m. afternoon trip "slack time" because few villagers travel then, letting Valli gaze wistfully before riding.',
    example:
      'Standing on her doorway, Valli watched regular passengers wistfully until she turned daydreams into calculations.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'madam-rides-the-bus',
      sectionId: 'prose-07-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-p7-haughtily',
    term: 'Haughtily',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'With proud disdain or stiff dignity, resisting condescension.',
    englishMeaning: 'Proudly and sharply, insisting on equal respect.',
    grammarNote: 'Adverb (Ch 7: Madam Rides the Bus)',
    ncertDefinition:
      'When an elderly passenger calls her "child", Valli interrupts haughtily that there is nobody on the bus who is a child since she paid thirty paise like everyone else.',
    example:
      'Valli answers haughtily not out of malice, but to defend the adult independence she worked months to earn.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'madam-rides-the-bus',
      sectionId: 'prose-07-vocab-language',
    },
  },
  {
    id: 'eng-gl-p8-inscrutable',
    term: 'Inscrutable & Lamentation',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'Impossible to understand or fathom; passionate weeping and expression of grief.',
    englishMeaning: 'Deep mystery beyond full mortal comprehension; outward mourning.',
    grammarNote: 'Adjective + Noun (Ch 8: The Sermon at Benares)',
    ncertDefinition:
      'The Buddha calls mortal life troubled and brief ("combined with pain") and urges mourners to draw out the "arrow of lamentation, and complaint, and grief".',
    example:
      'Because mortal fate can seem inscrutable, clinging to lamentation only deepens suffering without saving the dead.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'the-sermon-at-benares',
      sectionId: 'prose-08-vocab-language',
    },
  },
  {
    id: 'eng-gl-p8-affliction',
    term: 'Afflicted',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'Stricken deeply by pain, sorrow, or overwhelming loss.',
    englishMeaning: 'Severely distressed or burdened by suffering.',
    grammarNote: 'Verb / Past Participle (Ch 8: The Sermon at Benares)',
    ncertDefinition:
      'In the Benares sermon, "the world is afflicted with death and decay, therefore the wise do not grieve, knowing the terms of the world".',
    example:
      'Only after discovering every household was equally afflicted by loss did Kisa Gotami grasp the universal truth.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'the-sermon-at-benares',
      sectionId: 'prose-08-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-p9-palpitations',
    term: 'Palpitations',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'Rapid, heavy, fluttering heartbeats brought on by anxiety or hypochondria.',
    englishMeaning: 'Nervous racing of the heart accompanied by twitching and coldness.',
    grammarNote: 'Plural Noun (Ch 9: The Proposal)',
    ncertDefinition:
      'At thirty-five, Lomov obsesses over his "palpitations", twitching right eyebrow, and numb foot pulling twenty times before falling asleep.',
    example:
      'Lomov’s recurring palpitations make his clumsy decision to fight over Oxen Meadows even more ridiculous.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'the-proposal',
      sectionId: 'prose-09-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-p9-dessiatins',
    term: 'Dessiatins & Oxen Meadows',
    category: 'First Flight — Prose Vocab',
    simpleMeaning: 'Old Russian land-area measure (~2.7 acres per dessiatin); five dessiatins (~13.5 acres) spark Quarrel 1.',
    englishMeaning: 'Contested border meadow wedged between birchwoods and the Burnt Marsh.',
    grammarNote: 'Historical Unit & Proper Noun (Ch 9: The Proposal)',
    ncertDefinition:
      'Although Oxen Meadows are "only five dessiatins" worth roughly 300 roubles, both Lomov and Natalya argue over the "principle" for nearly half the play.',
    example:
      'The trivial 300-rouble value of Oxen Meadows underscores Chekhov’s satire on aristocratic ego.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-prose',
      subtopicSlug: 'the-proposal',
      sectionId: 'prose-09-ncert-glance',
    },
  },

  // Poetic Devices (Milestone 2: First Flight — Poetry, 10 terms)
  {
    id: 'eng-gl-poet-enjambment',
    term: 'Enjambment',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'Continuing a single sentence cleanly across two or more verse lines or stanzas without end punctuation.',
    englishMeaning:
      'Syntactic run-on across line breaks so rhythm accelerates uninterrupted.',
    grammarNote: 'Poetic Structure Device',
    ncertDefinition:
      'Defines Robert Frost’s Dust of Snow (all 8 lines form one continuous sentence without full stops until the end) as well as Carl Sandburg’s Fog and Adrienne Rich’s The Trees.',
    example:
      'Frost uses enjambment from "The way a crow" straight through "Of a day I had rued." to capture an effortless change of mood.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'dust-of-snow',
      sectionId: 'poem-01-devices-traps',
    },
  },
  {
    id: 'eng-gl-poet-oxymoron',
    term: 'Oxymoron',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'Placing two directly opposite words right next to each other to highlight inner tension.',
    englishMeaning:
      'Compressed verbal paradox pairing contradictory words side by side.',
    grammarNote: 'Poetic Device (Figure of Speech)',
    ncertDefinition:
      'In A Tiger in the Zoo, Leslie Norris describes the caged animal pacing "In his quiet rage" — silent outside yet boiling with suppressed fury inside.',
    example:
      '"Quiet rage" is an oxymoron revealing how concrete confinement suppresses wild energy without extinguishing it.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'a-tiger-in-the-zoo',
      sectionId: 'poem-03-devices-traps',
    },
  },
  {
    id: 'eng-gl-poet-transferred-epithet',
    term: 'Transferred Epithet',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'Shifting a descriptive adjective from the living subject who feels it onto an adjacent body part or object.',
    englishMeaning:
      'Grammatical displacement of a human emotion/quality onto a noun nearby.',
    grammarNote: 'Poetic Device (Exam Favourite)',
    ncertDefinition:
      'Tested repeatedly via John Berryman’s "desperate eyes" (The Ball Poem), Robin Klein’s "hushed, bare feet" (Amanda!), and Carl Sandburg’s "silent haunches" (Fog).',
    example:
      'The grieving boy is desperate, not his eyes independently — making "desperate eyes" a textbook transferred epithet.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'the-ball-poem',
      sectionId: 'poem-05-devices-traps',
    },
  },
  {
    id: 'eng-gl-poet-anaphora',
    term: 'Anaphora',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'Deliberately repeating the same opening word or phrase at the start of two or more neighbouring lines.',
    englishMeaning:
      'Consecutive clause-initial repetition building rhetorical force or emotional insistence.',
    grammarNote: 'Poetic Device (Repetition)',
    ncertDefinition:
      'Appears in Fire and Ice ("Some say... / Some say..."), The Ball Poem ("What is... / What, what..."), Amanda! ("Don’t... / Don’t..." and "Did you... / Did you..."), and The Trees ("no bird... / no insect... / no sun...").',
    example:
      'Beginning three lines with "Don’t..." makes the parent’s nagging in Amanda! feel inescapable.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'amanda',
      sectionId: 'poem-06-devices-traps',
    },
  },
  {
    id: 'eng-gl-poet-licence',
    term: 'Poetic Licence',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'A poet’s deliberate bending of standard spelling, pronunciation, or grammar to serve rhyme, metre, or humour.',
    englishMeaning:
      'Intentional departure from strict spelling or syntax for stylistic impact.',
    grammarNote: 'Craft Technique (Poem 4 & 9)',
    ncertDefinition:
      'Used humorously by Carolyn Wells ("dyin’" to rhyme with "lion"; "lept" and "lep" from leopard) and Ogden Nash ("realio, trulio", "winda" for window, "mouseholed").',
    example:
      'Twisting "leap" into "lep" lets How to Tell Wild Animals keep its playful cadence even during an ambush.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'how-to-tell-wild-animals',
      sectionId: 'poem-04-devices-traps',
    },
  },
  {
    id: 'eng-gl-poet-synecdoche',
    term: 'Synecdoche',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'Using a specific part or attribute of something to stand for the entire person or creature.',
    englishMeaning:
      'Part-for-whole (or defining quality for whole) figurative substitution.',
    grammarNote: 'Figurative Device',
    ncertDefinition:
      'Robert Frost writes "Has given my heart / A change of mood" (heart stands for his whole mood/being), and Leslie Norris writes "His strength behind bars" for the imprisoned tiger.',
    example:
      'Saying "my heart" received a change of mood uses a part of the speaker to represent the entire individual.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'dust-of-snow',
      sectionId: 'poem-01-devices-traps',
    },
  },
  {
    id: 'eng-gl-poet-assonance',
    term: 'Assonance & Consonance',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'Close repetition of matching internal vowel sounds (assonance) or internal/ending consonant sounds (consonance).',
    englishMeaning:
      'Acoustic echoing within neighbouring words distinct from initial alliteration.',
    grammarNote: 'Sound Devices',
    ncertDefinition:
      'Dust of Snow opens with dark /o/ vowel assonance ("Shook down on me") and closes with crisp /d/ consonance ("saved... had rued"), heightening musical unity.',
    example:
      'Check vowel sounds inside words ("hold with those who favour") for assonance rather than only initial letters.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'fire-and-ice',
      sectionId: 'poem-02-devices-traps',
    },
  },
  {
    id: 'eng-gl-poet-onomatopoeia',
    term: 'Onomatopoeia',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'Words whose spoken pronunciation directly imitates real-life sounds or animal cries.',
    englishMeaning:
      'Phonetic imitation of natural, mechanical, or vocal noises.',
    grammarNote: 'Sound Device',
    ncertDefinition:
      'Richly used in The Tale of Custard the Dragon ("Weeck!", "Meowch!", "snorting", "clatter", "clank", "jangling") and A Tiger in the Zoo ("snarling").',
    example:
      'Ogden Nash’s "clatter and a clank" brings the dragon’s metallic charge vividly to life.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'the-tale-of-custard-the-dragon',
      sectionId: 'poem-09-devices-traps',
    },
  },
  {
    id: 'eng-gl-poet-free-verse',
    term: 'Blank & Free Verse',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'Poetry written completely without a fixed rhyme scheme; free verse also discards regular metre.',
    englishMeaning:
      'Unrhymed poetic form relying on natural speech cadence, imagery, and enjambment.',
    grammarNote: 'Poetic Form (3 NCERT Poems)',
    ncertDefinition:
      'Examiners test that The Ball Poem, The Trees, and Fog have NO rhyme scheme, contrasting sharply with rhyming lyrics like Dust of Snow (`abab cdcd`).',
    example:
      'When asked "What is the rhyme scheme of Fog?" in a 1-mark MCQ, always answer "No rhyme scheme / Free verse".',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'fog',
      sectionId: 'poem-08-ncert-glance',
    },
  },
  {
    id: 'eng-gl-poet-ballad',
    term: 'Mock-Heroic Ballad',
    category: 'Poetic & Literary Devices',
    simpleMeaning:
      'A story-telling song/poem using heroic ballad rhythm humorously to poke fun at trivial bravery or vanity.',
    englishMeaning:
      'Narrative verse parodying traditional tales of knights, monsters, and boasters.',
    grammarNote: 'Poetic Genre (Poem 9)',
    ncertDefinition:
      'NCERT introduces The Tale of Custard the Dragon explicitly as a "humorous ballad close to a parody" mocking Belinda’s bragging household.',
    example:
      'Despite traditional ballads praising daring knights, this mock ballad lets a gentle, cage-loving dragon defeat the pirate alone.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'the-tale-of-custard-the-dragon',
      sectionId: 'poem-09-ncert-glance',
    },
  },

  // First Flight — Poetry Vocab (16 terms across Poems 1–10)
  {
    id: 'eng-gl-pm1-hemlock',
    term: 'Hemlock',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      'A toxic tree/plant bearing tiny white flowers, traditionally linked with poison and gloom.',
    englishMeaning: 'Poisonous tree chosen by Frost deliberately over cheerful pines or oaks.',
    grammarNote: 'Noun (Poem 1: Dust of Snow)',
    ncertDefinition:
      'NCERT Glossary: "A poisonous plant (tree) with small white flowers." Frost pairs it with the crow to show even dark elements of nature can heal sorrow.',
    example:
      'Shaking snow from a hemlock tree subverts superstition by uplifting the speaker’s heavy mood.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'dust-of-snow',
      sectionId: 'poem-01-vocab-language',
    },
  },
  {
    id: 'eng-gl-pm1-rued',
    term: 'Rued',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      'Held in bitter regret or wasted in gloom and sorrow.',
    englishMeaning: 'Felt remorseful over; wished had not happened.',
    grammarNote: 'Verb — Past Tense / Participle (Poem 1: Dust of Snow)',
    ncertDefinition:
      'NCERT Glossary: "held in regret." The snowflake saved at least "some part" of a day the poet had otherwise regretted wasting.',
    example:
      'Before the crow’s gesture, the poet had spent hours feeling the whole day had been rued.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'dust-of-snow',
      sectionId: 'poem-01-stanzas-rtc',
    },
  },
  {
    id: 'eng-gl-pm2-suffice',
    term: 'Perish & Suffice',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      '"Perish" means to be destroyed utterly; "suffice" means to be completely sufficient.',
    englishMeaning: 'Undergo ruin or extinction vs. serve adequately for a deadly end.',
    grammarNote: 'Verbs (Poem 2: Fire and Ice)',
    ncertDefinition:
      'Frost pairs "perish twice" with the icy understatement that cold hatred is more than capable ("would suffice") of destroying human civilisation.',
    example:
      'Cold indifference does not blaze noisily like desire, yet it would amply suffice to bring human ruin.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'fire-and-ice',
      sectionId: 'poem-02-vocab-language',
    },
  },
  {
    id: 'eng-gl-pm3-stalks',
    term: 'Stalks & Lurking',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      '"Stalks" means pacing slowly and stiffly in frustrated pride; "lurking" means hiding silently while hunting.',
    englishMeaning: 'Majestic yet restless pacing inside bars vs. camouflaged wild ambush.',
    grammarNote: 'Contrasting Action Verbs (Poem 3: A Tiger in the Zoo)',
    ncertDefinition:
      'Leslie Norris contrasts captive pacing ("He stalks in his vivid stripes") against the natural stealth a free tiger exercises ("lurking in shadow") near water holes.',
    example:
      'Using "stalks" emphasises cramped monotony confined to "the few steps of his cage".',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'a-tiger-in-the-zoo',
      sectionId: 'poem-03-vocab-language',
    },
  },
  {
    id: 'eng-gl-pm4-tawny',
    term: 'Tawny',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      'Warm orange-brown or yellowish-tan colour characteristic of the Asian Lion’s coat.',
    englishMeaning: 'Rich golden-brown hue blending into sunlit dry scrubland.',
    grammarNote: 'Adjective (Poem 4: How to Tell Wild Animals)',
    ncertDefinition:
      'Carolyn Wells identifies the Asian Lion as a "large and tawny beast" roaring as you meet your end in eastern jungles.',
    example:
      'Contrast the "tawny" Asian Lion with the yellow-and-black stripes of the Bengal Tiger and spotted hide of the Leopard.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'how-to-tell-wild-animals',
      sectionId: 'poem-04-stanzas-rtc',
    },
  },
  {
    id: 'eng-gl-pm4-nonplus',
    term: 'Discern & Nonplus',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      '"Discern" means recognise or distinguish clearly; "nonplus" means puzzle or bewilder someone completely.',
    englishMeaning: 'Identify accurately vs. leave a beginner baffled.',
    grammarNote: 'Verbs (Poem 4: How to Tell Wild Animals)',
    ncertDefinition:
      'NCERT Glossary defines "discern" as make out/identify and notes "nonplus" is ordinarily used passively to mean puzzled or confused.',
    example:
      'Even a confused novice can discern a smiling hyena from a weeping crocodile — though neither ends safely!',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'how-to-tell-wild-animals',
      sectionId: 'poem-04-vocab-language',
    },
  },
  {
    id: 'eng-gl-pm5-epistemology',
    term: 'Epistemology of Loss',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      'Deep philosophical understanding of what losing something means and how humans endure it.',
    englishMeaning: 'Understanding the true nature, permanence, and acceptance of loss.',
    grammarNote: 'Philosophical Noun Phrase (Poem 5: The Ball Poem)',
    ncertDefinition:
      'NCERT Glossary traces Greek "episteme" ("knowledge") to explain the boy’s awakening — learning "how to stand up" when money cannot recover childhood.',
    example:
      'Quoting "epistemology of loss" accurately in a 3-mark answer immediately signals strong textual command.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'the-ball-poem',
      sectionId: 'poem-05-ncert-glance',
    },
  },
  {
    id: 'eng-gl-pm5-intrude',
    term: 'Intrude On',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      'To step uninvited into another person’s private space or grief.',
    englishMeaning: 'Enter a sensitive personal moment where outside interference does not belong.',
    grammarNote: 'Phrasal Verb (Poem 5: The Ball Poem)',
    ncertDefinition:
      'The speaker refuses to interrupt the mourning boy ("I would not intrude on him") because trivial comfort ("another ball") would rob him of self-reliant growth.',
    example:
      'Choosing not to intrude honours the child’s private confrontation with first responsibility.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'the-ball-poem',
      sectionId: 'poem-05-vocab-language',
    },
  },
  {
    id: 'eng-gl-pm6-languid',
    term: 'Languid & Tranquil',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      '"Languid" means unhurried and deeply relaxed; "tranquil" means peaceful and free of agitation.',
    englishMeaning: 'Soothingly slow and calm, contrasting sharply with sharp adult scolding.',
    grammarNote: 'Adjectives (Poem 6: Amanda!)',
    ncertDefinition:
      'Amanda pictures drifting blissfully in a "languid, emerald sea" and dwelling in Rapunzel’s "tranquil and rare" tower life.',
    example:
      'Both adjectives reveal Amanda’s inner hunger for stillness rather than rebellion.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'amanda',
      sectionId: 'poem-06-stanzas-rtc',
    },
  },
  {
    id: 'eng-gl-pm7-disengage',
    term: 'Disengage & Lichen',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      '"Disengage" means pull free or detach from confinement; "lichen" is a slow-growing crusty moss/fungus-algae coat on bark.',
    englishMeaning: 'Work oneself loose vs. earthy woodland scent permeating the indoor air.',
    grammarNote: 'Verb + Botanical Noun (Poem 7: The Trees)',
    ncertDefinition:
      'At night, roots "work to disengage themselves from the cracks" while the pungent aroma of "leaves and lichen" drifts like a lingering voice into the writer’s rooms.',
    example:
      'Every botanical detail in Stanzas 2–3 anchors the nocturnal prison-break of indoor trees.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'the-trees',
      sectionId: 'poem-07-vocab-language',
    },
  },
  {
    id: 'eng-gl-pm7-boughs',
    term: 'Long-Cramped Boughs',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      'Heavy main tree branches bent and stiffened from growing inside a low-ceilinged room.',
    englishMeaning: 'Woody limbs restricted too long beneath artificial roofs.',
    grammarNote: 'Compound Modifier + Plural Noun (Poem 7: The Trees)',
    ncertDefinition:
      'Rich compares "long-cramped boughs shuffling under the roof" to dazed patients stumbling eagerly out through clinic exits.',
    example:
      'The image captures both biological distortion and feminist struggle against domestic confinement.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'the-trees',
      sectionId: 'poem-07-stanzas-rtc',
    },
  },
  {
    id: 'eng-gl-pm8-haunches',
    term: 'Haunches',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      'The muscular hindquarters/hips of an animal sitting alertly with bent knees.',
    englishMeaning: 'Crouching posture ready either to rest quietly or spring away cleanly.',
    grammarNote: 'Plural Noun (Poem 8: Fog)',
    ncertDefinition:
      'NCERT Glossary notes "on haunches" means sitting with knees bent — sustaining Sandburg’s cat image watching silently over harbour and city.',
    example:
      'Resting "on silent haunches" shows the fog pauses only briefly without owning the city.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'fog',
      sectionId: 'poem-08-stanzas-rtc',
    },
  },
  {
    id: 'eng-gl-pm9-flagon',
    term: 'Grog & Flagon',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      '"Grog" is watery rum drunk by sailors/pirates; a "flagon" is a sturdy metal or leather flask/container.',
    englishMeaning: 'Nautical liquor and its pocket bottle.',
    grammarNote: 'Nautical Nouns (Poem 9: The Tale of Custard the Dragon)',
    ncertDefinition:
      'Stunned by Custard’s attack, the wooden-legged pirate "gulped some grog from his pocket flagon" before firing two missed shots.',
    example:
      'Ogden Nash uses archaic pirate vocabulary ("cutlass", "grog", "flagon") for lively comic atmosphere.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'the-tale-of-custard-the-dragon',
      sectionId: 'poem-09-vocab-language',
    },
  },
  {
    id: 'eng-gl-pm9-gyrate',
    term: 'Gyrate',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      'To spin, dance, or whirl cheerfully in excited circles.',
    englishMeaning: 'Revolve rapidly in celebratory rings.',
    grammarNote: 'Verb (Poem 9: The Tale of Custard the Dragon)',
    ncertDefinition:
      'NCERT Glossary: "to move around in circles." Right after Custard swallows the pirate, Ink and Blink "in glee did gyrate" — only to resume bragging seconds later.',
    example:
      'Pairing "gyrate" with "pirate" adds whimsical musical bounce to the aftermath.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'the-tale-of-custard-the-dragon',
      sectionId: 'poem-09-vocab-language',
    },
  },
  {
    id: 'eng-gl-pm9-percival',
    term: 'Percival (Chivalric Allusion)',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      'Mocking nickname referring to Sir Percival, a famed knight of King Arthur’s Round Table.',
    englishMeaning: 'Sarcastic nickname teasing someone seen as cowardly.',
    grammarNote: 'Proper Noun / Allusion (Poem 9: The Tale of Custard the Dragon)',
    ncertDefinition:
      'Because timid Custard begged for a safe cage, Belinda’s loud-mouthed pets "rudely called him Percival" while laughing in the red wagon.',
    example:
      'The irony doubles later when fake "knights" Mustard, Ink, and Blink vanish while "Percival" actually slays the pirate.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'the-tale-of-custard-the-dragon',
      sectionId: 'poem-09-devices-traps',
    },
  },
  {
    id: 'eng-gl-pm10-ramparts',
    term: 'Honey-Coloured Ramparts',
    category: 'First Flight — Poetry Vocab',
    simpleMeaning:
      'Anne Gregory’s golden-blonde locks framed like broad protective fortress walls around her face.',
    englishMeaning: 'Metaphor depicting outward physical beauty as a wall obscuring inner character.',
    grammarNote: 'Metaphorical Noun Phrase (Poem 10: For Anne Gregory)',
    ncertDefinition:
      'NCERT Glossary defines "ramparts" as "the high, wide walls around a castle or fort". Yeats uses them to symbolise dazzling hair that blinds suitors to her true soul.',
    example:
      'She offers to dye her golden ramparts brown, black, or carrot so admirers look inward.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'first-flight-poetry',
      subtopicSlug: 'for-anne-gregory',
      sectionId: 'poem-10-stanzas-rtc',
    },
  },

  // Footprints — Supplementary Vocab (27 terms across Chapters 1–9)
  {
    id: 'eng-gl-fp1-convalescing',
    term: 'Convalescing & Rheumy',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      '"Convalescing" means steadily regaining strength after sickness; "rheumy" means watery/discharge-filled around eyes or nose.',
    englishMeaning: 'Recovering gradually after illness vs. dull, watery ocular discharge from sluggish health.',
    grammarNote: 'Participle / Adjective (Footprints Ch 1: A Triumph of Surgery)',
    ncertDefinition:
      'NCERT Glossary: "convalescing: recovering from an illness; rheumy: a watery discharge from a mucous membrane especially of the nose or eyes."',
    example:
      'When Herriot said Tricki was convalescing, Mrs Pumphrey flooded the surgery with eggs, wine, and brandy.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'a-triumph-of-surgery',
      sectionId: 'footprints-01-vocab-language',
    },
  },
  {
    id: 'eng-gl-fp1-scrimmage',
    term: 'Scrimmage & Lithe',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      '"Scrimmage" is a playful rough-and-tumble tussle; "lithe" means lean, supple, and athletic.',
    englishMeaning: 'Friendly pack tussling that transformed a bloated pet into a muscular hound.',
    grammarNote: 'Noun + Adjective (Footprints Ch 1: A Triumph of Surgery)',
    ncertDefinition:
      'NCERT Glossary defines "scrimmage: rough or confused struggle" and "lithe: flexible." Tricki became a "lithe, hard-muscled animal" within two weeks.',
    example:
      'Friendly yard scrimmages with Joe and the pack achieved the true "triumph of surgery".',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'a-triumph-of-surgery',
      sectionId: 'footprints-01-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-fp1-distraught',
    term: 'Listless & Distraught',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      '"Listless" means drained of energy and spirit; "distraught" means frantic with worry.',
    englishMeaning: 'Lethargic slump from overfeeding vs. Mrs Pumphrey’s panic when Tricki stops eating.',
    grammarNote: 'Adjectives (Footprints Ch 1: A Triumph of Surgery)',
    ncertDefinition:
      'NCERT Glossary: "listless: lacking energy and enthusiasm; distraught: extremely worried."',
    example:
      'Seeing listless Tricki pant on the rug, distraught Mrs Pumphrey finally consented to a fortnight away.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'a-triumph-of-surgery',
      sectionId: 'footprints-01-vocab-language',
    },
  },
  {
    id: 'eng-gl-fp2-flattery',
    term: 'Flattery & Appealing',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      '"Flattery" is insincere strategic praise; "appealing" describes a charming, winning look used to disarm suspicion.',
    englishMeaning: 'Verbal charm deployed by young Hari Singh to earn Anil’s initial goodwill.',
    grammarNote: 'Noun + Adjective (Footprints Ch 2: The Thief’s Story)',
    ncertDefinition:
      'NCERT Glossary: "flattery: insincere praise; appealing: attractive." Hari admits "A little flattery helps in making friends."',
    example:
      'Calling lean Anil a wrestler was calculated flattery, yet Hari’s final closing smile came effortlessly.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'the-thiefs-story',
      sectionId: 'footprints-02-vocab-language',
    },
  },
  {
    id: 'eng-gl-fp2-unlined',
    term: 'Unlined Face',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      'A calm, smooth face free from stress wrinkles or criminal scars — reflecting inner peace.',
    englishMeaning: 'Sign of pure anxiety-free conscience contrasting with Hari Singh’s own scarred face.',
    grammarNote: 'Compound Adjective (Footprints Ch 2: The Thief’s Story)',
    ncertDefinition:
      'NCERT Glossary: "unlined: (here) showing no sign of worry or anxiety." Anil slept calmly with the notes under his mattress.',
    example:
      'Observing Anil’s clear, unlined sleeping face intensified Hari’s silent guilt later on the cold platform.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'the-thiefs-story',
      sectionId: 'footprints-02-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-fp2-fits-starts',
    term: 'By Fits and Starts',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      'Happening irregularly in bursts with quiet gaps rather than earning a steady monthly salary.',
    englishMeaning: 'Uneven freelance income typical of Anil’s magazine-writing livelihood.',
    grammarNote: 'Idiomatic Prepositional Phrase (Footprints Ch 2: The Thief’s Story)',
    ncertDefinition:
      'Ruskin Bond notes Anil "made money by fits and starts" — borrowing one week and lending the next as cheques arrived.',
    example:
      'Precisely because Anil earned by fits and starts, keeping ₹600 stolen from his mattress weighed heavier on Hari.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'the-thiefs-story',
      sectionId: 'footprints-02-ncert-glance',
    },
  },
  {
    id: 'eng-gl-fp3-espionage',
    term: 'Espionage & Passably',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      '"Espionage" means secret intelligence spying; "passably" means tolerably well rather than flawlessly.',
    englishMeaning: 'Cloak-and-dagger spy world vs. Ausable’s ordinary multilingual competence.',
    grammarNote: 'Noun + Adverb (Footprints Ch 3: The Midnight Visitor)',
    ncertDefinition:
      'NCERT Glossary: "espionage: spying; passably: just well enough; tolerably well."',
    example:
      'Though Ausable spoke French and German passably with a Boston accent, his quick-witted espionage instincts outmatched Max.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'the-midnight-visitor',
      sectionId: 'footprints-03-vocab-language',
    },
  },
  {
    id: 'eng-gl-fp3-prosaic',
    term: 'Prosaic & Wheezed',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      '"Prosaic" means dull and unromantic; "wheezed" means spoke with noisy, heavy shortness of breath.',
    englishMeaning: 'Anti-heroic traits that lull rival spy Max and writer Fowler into underestimating Ausable.',
    grammarNote: 'Adjective + Verb (Footprints Ch 3: The Midnight Visitor)',
    ncertDefinition:
      'NCERT Glossary: "prosaic: ordinary; wheezed: spoke breathing noisily and heavily."',
    example:
      'Fowler found Ausable’s top-floor French hotel corridor prosaic until the fat agent wheezed an effortless bluff.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'the-midnight-visitor',
      sectionId: 'footprints-03-characters-traps',
    },
  },
  {
    id: 'eng-gl-fp3-authentic-thrill',
    term: 'Authentic Thrill',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      'Genuine, real-life suspense contrasting with melodramatic spy clichés in popular books.',
    englishMeaning: 'Ausable’s understated promise to Fowler right before encountering gun-wielding Max.',
    grammarNote: 'Collocation (Footprints Ch 3: The Midnight Visitor)',
    ncertDefinition:
      'Ausable promises disillusioned Fowler he will witness his "first authentic thrill of the day" once the missile paper arrives.',
    example:
      'Max’s midnight ambush inside room six delivers Fowler’s first authentic thrill without any mysterious dark-eyed beauties.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'the-midnight-visitor',
      sectionId: 'footprints-03-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-fp4-hay-fever',
    term: 'Hay Fever',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      'Allergic irritation of the nose and throat triggered by pollen or dust, causing sudden sneezes.',
    englishMeaning: 'Physical vulnerability that exposes meticulous locksmith-burglar Horace Danby inside Shotover Grange.',
    grammarNote: 'Compound Medical Noun (Footprints Ch 4: A Question of Trust)',
    ncertDefinition:
      'NCERT Glossary: "hay fever: a disorder affecting the nose and throat, caused by allergy to pollen or dust."',
    example:
      'A big bowl of flowers on the table tickled Horace’s hay fever, drawing the sharp young woman in red.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'a-question-of-trust',
      sectionId: 'footprints-04-vocab-language',
    },
  },
  {
    id: 'eng-gl-fp4-honour-thieves',
    term: 'Honour Among Thieves',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      'Proverb claiming criminals follow an unwritten loyalty code not to betray or rob each other.',
    englishMeaning: 'The bitter situational irony mocking Horace Danby in prison after the Shotover Grange double-cross.',
    grammarNote: 'Idiomatic Proverb (Footprints Ch 4: A Question of Trust)',
    ncertDefinition:
      'Victor Canning concludes that Horace, now assistant prison librarian, grows furious whenever anyone mentions "honour among thieves".',
    example:
      'Trickery by a smoother fellow burglar shattered Horace’s complacent faith in professional trust.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'a-question-of-trust',
      sectionId: 'footprints-04-ncert-glance',
    },
  },
  {
    id: 'eng-gl-fp4-ornaments',
    term: 'Deceptive Poise',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      'Calm, authoritative manners used convincingly to masquerade as rightful ownership.',
    englishMeaning: 'The woman in red adjusting ornaments and calming Sherry the dog to mimic Shotover Grange’s hostess.',
    grammarNote: 'Thematic Literary Term (Footprints Ch 4: A Question of Trust)',
    ncertDefinition:
      'Small domestic gestures ("Down, Sherry", straightening mantelpiece ornaments) persuade cautious Horace without force.',
    example:
      'Her deceptive poise tricked him into taking off his gloves to light her cigarette.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'a-question-of-trust',
      sectionId: 'footprints-04-characters-traps',
    },
  },
  {
    id: 'eng-gl-fp5-eccentric',
    term: 'Eccentric',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      'Unconventional, strange, or odd in habits and personal appearance compared with everyday villagers.',
    englishMeaning: 'How Mrs Hall excuses Griffin’s winter arrival, bandaged face, and furious demand for solitude.',
    grammarNote: 'Adjective (Footprints Ch 5: Footprints without Feet)',
    ncertDefinition:
      'Prepared to overlook his "strange habits and irritable temper" because he paid in advance, Mrs Hall calls Griffin an eccentric scientist.',
    example:
      'Dismissing criminal behaviour as mere eccentricity leaves the Iping innkeepers helpless when furniture flies.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'footprints-without-feet',
      sectionId: 'footprints-05-vocab-language',
    },
  },
  {
    id: 'eng-gl-fp5-transparent',
    term: 'Transparent as Glass',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      'Permitting light to pass completely through yet remaining physically solid to touch and winter cold.',
    englishMeaning: 'Simile describing the terrifying yet vulnerable result of Griffin’s invisibility formula.',
    grammarNote: 'Simile / Physical Paradox (Footprints Ch 5: Footprints without Feet)',
    ncertDefinition:
      'H.G. Wells notes Griffin’s body became "as transparent as a sheet of glass" — yet stayed as solid as glass and froze without clothes.',
    example:
      'Walking through January mud forced the transparent scientist to reveal telltale footprints.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'footprints-without-feet',
      sectionId: 'footprints-05-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-fp5-lawless',
    term: 'Lawless Person',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      'Someone who deliberately breaks moral boundaries and civic rules whenever convenient.',
    englishMeaning: 'Narrator’s direct judgment on Griffin despite his undisputed brilliance in experimental chemistry.',
    grammarNote: 'Noun Phrase / Character Key (Footprints Ch 5: Footprints without Feet)',
    ncertDefinition:
      'NCERT introduces Griffin starkly: "Brilliant scientist though he was, Griffin was rather a lawless person."',
    example:
      'Arson, burglary at Drury Lane and Iping, and assaulting Constable Jaffers expose the danger of lawless science.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'footprints-without-feet',
      sectionId: 'footprints-05-characters-traps',
    },
  },
  {
    id: 'eng-gl-fp6-entomology',
    term: 'Entomology & Eureka',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      '"Entomology" is the scientific study of insects; "Eureka!" is a joyous shout of triumph upon making a discovery.',
    englishMeaning: 'Field of research launched by Ebright’s monarch butterflies + his famous DNA hormone breakthrough.',
    grammarNote: 'Nouns (Footprints Ch 6: The Making of a Scientist)',
    ncertDefinition:
      'NCERT Glossary: "entomology: the study of insects; eureka: a cry of triumph at a discovery (originally attributed to Archimedes)."',
    example:
      'Looking at X-ray photos of the monarch hormone, Ebright felt no urge to shout "Eureka!" yet solved how cells read DNA.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'the-making-of-a-scientist',
      sectionId: 'footprints-06-vocab-language',
    },
  },
  {
    id: 'eng-gl-fp6-blueprint',
    term: 'DNA Blueprint',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      'Master hereditary instruction code inside cell nuclei determining an organism’s form and life processes.',
    englishMeaning: 'Concept unlocked when Ebright linked monarch pupa hormone structure to cell transcription.',
    grammarNote: 'Scientific Metaphor (Footprints Ch 6: The Making of a Scientist)',
    ncertDefinition:
      'Peterson explains DNA is the substance in the nucleus that controls heredity — "the blueprint for life".',
    example:
      'Studying twelve tiny gold spots on a pupa became the stepping stone to Ebright’s cellular DNA paper in PNAS.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'the-making-of-a-scientist',
      sectionId: 'footprints-06-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-fp6-competitive',
    term: 'Right Reasons (Competitiveness)',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      'Striving to excel out of genuine curiosity and pride in doing one’s best rather than beating rivals for trophies.',
    englishMeaning: 'Social studies teacher Mr Weiherer’s third crucial quality separating true scientists from mere medal-hunters.',
    grammarNote: 'Thematic Value Concept (Footprints Ch 6: The Making of a Scientist)',
    ncertDefinition:
      'Mr Weiherer noted Ebright "wasn’t interested in winning for winning’s sake" — he competed to do the very best job possible.',
    example:
      'A first-rate mind, curiosity, and winning for the right reasons define the making of a scientist.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'the-making-of-a-scientist',
      sectionId: 'footprints-06-characters-traps',
    },
  },
  {
    id: 'eng-gl-fp7-incessantly',
    term: 'Incessantly & Vexation',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      '"Incessantly" means without stopping; "vexation" means intense distress or irritation.',
    englishMeaning: 'Matilda’s chronic unhappiness over modest living conditions and lacking jewellery for the ball.',
    grammarNote: 'Adverb + Noun (Footprints Ch 7: The Necklace)',
    ncertDefinition:
      'NCERT Glossary: "incessantly: continuously; vexation: state of being distressed."',
    example:
      'Matilda suffered incessantly over worn chairs and wept in vexation when the ministerial invite arrived.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'the-necklace',
      sectionId: 'footprints-07-vocab-language',
    },
  },
  {
    id: 'eng-gl-fp7-ruinous',
    term: 'Usurers & Ruinous',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      '"Usurers" are predatory moneylenders charging crushing interest; "ruinous" means utterly devastating financially.',
    englishMeaning: 'Debt-trap mechanism that turned a single night’s vanity into a decade of grinding labour for the Loisels.',
    grammarNote: 'Plural Noun + Adjective (Footprints Ch 7: The Necklace)',
    ncertDefinition:
      'NCERT Glossary: "ruinous: disastrous; usurers: money-lenders, especially those who lend money on a high rate of interest."',
    example:
      'Signing ruinous notes with usurers forced M. Loisel to copy pages at five sous each for ten years.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'the-necklace',
      sectionId: 'footprints-07-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-fp7-error-destiny',
    term: 'Error of Destiny',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      'Matilda’s dramatic self-pitying belief that fate wrongly placed an aristocratic soul inside a humble clerk family.',
    englishMeaning: 'Ironical illusion propelling Matilda’s restlessness vs. reality taught by ten lost years.',
    grammarNote: 'Narrative Metaphor (Footprints Ch 7: The Necklace)',
    ncertDefinition:
      'Maupassant opens framing her as born "as if through an error of destiny, into a family of clerks" — craving luxury beyond her means.',
    example:
      'Believing herself an error of destiny prevented Matilda from enjoying a loving husband and simple comfort.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'the-necklace',
      sectionId: 'footprints-07-ncert-glance',
    },
  },
  {
    id: 'eng-gl-fp8-simpleton',
    term: 'Simpleton & Numberdar',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      '"Simpleton" is an unfair label for someone easily fooled; "numberdar" is a village revenue-collecting official.',
    englishMeaning: 'Patriarchal village hierarchy vs. Sulekha’s childhood nickname "Bholi".',
    grammarNote: 'Nouns (Footprints Ch 8: Bholi)',
    ncertDefinition:
      'NCERT Glossary: "simpleton: a foolish person easily tricked by others; numberdar: an official who collects revenue."',
    example:
      'Numberdar Ramlal feared nobody would marry Bholi, yet education transformed the "simpleton" into fearless Sulekha.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'bholi',
      sectionId: 'footprints-08-vocab-language',
    },
  },
  {
    id: 'eng-gl-fp8-downcast',
    term: 'Downcast vs. Masterpiece',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      '"Downcast" means gazing downward in shame/timidity; "masterpiece" celebrates a teacher’s finished triumph of human dignity.',
    englishMeaning: 'Bookend contrast measuring Bholi’s entire inner transformation from scared girl to resolute adult.',
    grammarNote: 'Contrasting Nouns/Adjectives (Footprints Ch 8: Bholi)',
    ncertDefinition:
      'NCERT Glossary: "downcast: looking downwards." In the finale, the teacher watches calmly like an artist admiring her completed "masterpiece".',
    example:
      'Having shed her downcast stare after five years of learning, Sulekha looked straight into Bishamber’s greedy eyes.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'bholi',
      sectionId: 'footprints-08-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-fp8-contemptible',
    term: 'Contemptible Coward',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      'Deserving utter scorn and disrespect for shameless, dishonourable selfishness.',
    englishMeaning: 'Sulekha’s fluent, stammer-free indictment of ageing dowry-demander Bishamber Nath.',
    grammarNote: 'Adjective + Noun (Footprints Ch 8: Bholi)',
    ncertDefinition:
      'Speaking before startled wedding guests without stammering, Sulekha calls Bishamber a "mean, greedy and contemptible coward".',
    example:
      'Refusing to marry a contemptible coward marks Sulekha’s moral victory over rural dowry hypocrisy.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'bholi',
      sectionId: 'footprints-08-characters-traps',
    },
  },
  {
    id: 'eng-gl-fp9-riffling',
    term: 'Riffling & Decipher',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      '"Riffling" means flipping rapidly through a book’s pages; "decipher" means decoding confusing text or symbols.',
    englishMeaning: 'Confused Martian crew members handling earthly print inside Centerville Public Library.',
    grammarNote: 'Gerund / Verb (Footprints Ch 9: The Book That Saved the Earth)',
    ncertDefinition:
      'NCERT Glossary: "riffling: quickly turning over the pages of a book; decipher: find the meaning of something which is puzzling or difficult to understand."',
    example:
      'Sergeant Oop keeps riffling through Mother Goose until intelligence vitamins help the crew decipher simple verses.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'the-book-that-saved-the-earth',
      sectionId: 'footprints-09-vocab-language',
    },
  },
  {
    id: 'eng-gl-fp9-haberdashery',
    term: 'Haberdashery & Barn',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      '"Haberdashery" is a small shop selling clothing accessories/hats; a "barn" is a rural storehouse for hay and livestock.',
    englishMeaning: 'Comical settings Sergeant Oop guesses before identifying Earth books at Centerville Library.',
    grammarNote: 'Nouns (Footprints Ch 9: The Book That Saved the Earth)',
    ncertDefinition:
      'NCERT Glossary: "haberdashery: shop which sells clothing, small articles of dress, pins, cotton, etc.; barn: covered building for storing hay."',
    example:
      'Because Martian Probe One thinks libraries are refreshment stands or haberdasheries, reading books looks completely alien.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'the-book-that-saved-the-earth',
      sectionId: 'footprints-09-rtc-extracts',
    },
  },
  {
    id: 'eng-gl-fp9-peevishly',
    term: 'Peevishly & Levity',
    category: 'Footprints — Supplementary Vocab',
    simpleMeaning:
      '"Peevishly" means snapping irritably; "levity" means flippantly joking about something meant to be serious.',
    englishMeaning: 'Think-Tank’s petulant vanity whenever subordinates question his pompous guesses or burst out laughing.',
    grammarNote: 'Adverb + Noun (Footprints Ch 9: The Book That Saved the Earth)',
    ncertDefinition:
      'NCERT Glossary: "peevishly: irritably; levity: tendency to treat serious matters without respect; lack of seriousness."',
    example:
      'Snapping peevishly at Noodle’s gentle corrections exposes Think-Tank’s thin-skinned ignorance.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'footprints-without-feet',
      subtopicSlug: 'the-book-that-saved-the-earth',
      sectionId: 'footprints-09-vocab-language',
    },
  },

  // Grammar & Writing Rules + Tone Descriptors (Milestone 4: 22 terms -> 115 total)
  {
    id: 'eng-gl-rg-discursive-vs-factual',
    term: 'Discursive vs. Case-Based Factual Passage',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      'Discursive passages (400–450 words) explore opinions, reasoning, and argument shifts; factual passages (200–250 words) pair crisp facts with statistical tables/charts.',
    englishMeaning: 'Section A Reading Comprehension pair (10 + 10 = 20 Marks in CBSE Code 184).',
    grammarNote: 'Reading Blueprint (Section A — 20 Marks)',
    ncertDefinition:
      'CBSE Blueprint: Q1 Discursive tests vocabulary in context, tone, and 2-mark rationale; Q2 Case-Based tests objective data comparison and visual-input inference.',
    example:
      'Before reading Q2 options, verify axis units and percentage-point gaps inside the embedded survey table.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'unseen-passages-discursive-factual',
      sectionId: 'rg-01-blueprint-strategy',
    },
  },
  {
    id: 'eng-gl-rg-contextual-vocab',
    term: 'Contextual Vocabulary Inference',
    category: 'Tone & Mood Descriptors',
    simpleMeaning:
      'Selecting what a word means inside the author’s exact sentence rather than picking its most common standalone dictionary meaning.',
    englishMeaning: 'Key 1-mark Section A MCQ skill where distractors mimic out-of-context meanings.',
    grammarNote: 'Unseen Passage Vocabulary Rule',
    ncertDefinition:
      'CBSE Reading Strategy: Substitute each option directly back into the target sentence to verify tense, part of speech, and connotation match.',
    example:
      'If a passage describes "measured optimism", "measured" means restrained/balanced — NOT arithmetically calculated.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'unseen-passages-discursive-factual',
      sectionId: 'rg-01-discursive-model',
    },
  },
  {
    id: 'eng-gl-rg-didactic-cautionary-sceptical',
    term: 'Didactic, Cautionary & Sceptical Tones',
    category: 'Tone & Mood Descriptors',
    simpleMeaning:
      'Didactic aims to teach a moral lesson; cautionary warns against looming harm; sceptical questions sweeping claims pending stronger proof.',
    englishMeaning: 'Three high-frequency tone answers in CBSE Section A Unseen Passages.',
    grammarNote: 'Authorial Tone Classification',
    ncertDefinition:
      'Tone Decoder: Look at modal verbs ("must beware" -> cautionary), rhetorical questions ("can an algorithm replace empathy?" -> sceptical), or imperative guidance (-> didactic).',
    example:
      'Notice how "sobering" or "cautionary" differs sharply from "cynical": caution seeks improvement rather than mocking hope.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'unseen-passages-discursive-factual',
      sectionId: 'rg-01-traps-drills',
    },
  },
  {
    id: 'eng-gl-rg-phonetic-articles',
    term: 'Phonetic Article Rule (a vs. an)',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      'Choose "a" before an opening consonant SOUND (even vowel letters u/eu -> /y/, o -> /w/) and "an" before a vowel SOUND (including silent-h or acronyms M, L, F, H, S).',
    englishMeaning: 'Prevents classic Determiner gap-fill errors like writing "an European" or "a honest".',
    grammarNote: 'Determiners (Articles)',
    ncertDefinition:
      'Core Grammar Rule: Sound decides "a/an", never spelling alone ("a university", "a one-way street" vs. "an hour", "an MLA", "an heirloom").',
    example:
      'Wait an hour outside a university gate before meeting a European guest and an NCC cadet.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'determiners',
      sectionId: 'rg-02-overview-articles',
    },
  },
  {
    id: 'eng-gl-rg-little-a-the',
    term: 'Little / A Little / The Little (& Few Variants)',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      'Bare "little/few" = almost none (negative); "a little/a few" = some small positive amount; "the little/the few" = not much/many, yet ALL that exists.',
    englishMeaning: 'High-frequency CBSE determiner contrast (uncountable "little" vs countable "few").',
    grammarNote: 'Determiners (Quantifiers)',
    ncertDefinition:
      'CBSE Quantifier Distinction: Uncountable nouns take little/a little/the little; plural countable nouns take few/a few/the few.',
    example:
      'Although little hope remained earlier, a few volunteers pooled the little money they had saved.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'determiners',
      sectionId: 'rg-02-quantifiers-little-few',
    },
  },
  {
    id: 'eng-gl-rg-each-every-neither',
    term: 'Each, Every, Either & Neither',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      '"Each" highlights individuals inside a group of 2+; "every" treats all members (3+) collectively; "either/neither" apply strictly to 2 choices.',
    englishMeaning: 'Distributive determiners that govern singular countable nouns and singular verbs.',
    grammarNote: 'Determiners (Distributives)',
    ncertDefinition:
      'Agreement Rule: "Each", "every", "either", and "neither" followed by a singular noun (or "of + plural noun") ALWAYS take a singular verb.',
    example:
      'Neither candidate was disqualified, though each speaker had been briefed on strict timings.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'determiners',
      sectionId: 'rg-02-distributives-demonstratives',
    },
  },
  {
    id: 'eng-gl-rg-past-perf-vs-simple',
    term: 'Simple Past vs. Present Perfect vs. Past Perfect',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      'Finished past time markers (yesterday, ago, in 2020) force Simple Past (V2); unfinished relevance takes Present Perfect; the EARLIER of two past events takes Past Perfect (had + V3).',
    englishMeaning: 'Prevents the two biggest Section B tense editing traps in CBSE papers.',
    grammarNote: 'Tenses & Sequence',
    ncertDefinition:
      'Board Tense Law: Never combine Present Perfect ("has/have + V3") with finished past adverbials like "yesterday" or "last week".',
    example:
      'Correct: "She submitted her essay yesterday" (NOT "has submitted yesterday"). Compare: "The bell had rung before we entered."',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'tenses',
      sectionId: 'rg-03-past-present-traps',
    },
  },
  {
    id: 'eng-gl-rg-conditionals-0-3',
    term: 'Conditional Sentences (Types 0, 1, 2 & 3)',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      'Type 0: If+V1 -> V1 (facts); Type 1: If+V1 -> will+V1; Type 2: If+V2/were -> would+V1 (unreal present); Type 3: If+had+V3 -> would have+V3 (unreal past).',
    englishMeaning: 'Structural pairing law tested heavily in board gap-fills and editing.',
    grammarNote: 'Conditionals Matrix',
    ncertDefinition:
      'Zero Future-in-If Rule: Never put "will" or "would" directly inside the standard "if" condition clause ("If it rains...", NOT "If it will rain...").',
    example:
      'Had the municipality cleared the drains earlier (Type 3), commuters would not have faced waterlogging.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'tenses',
      sectionId: 'rg-03-conditionals-sequence',
    },
  },
  {
    id: 'eng-gl-rg-stative-verbs',
    term: 'Stative Verbs (No Continuous -ing)',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      'Verbs denoting mental states, possession, senses, or belonging (know, belong, own, prefer, believe, seem) resist continuous "-ing" forms in standard grammar.',
    englishMeaning: 'Frequent CBSE Error -> Correction line item (e.g., "is belonging -> belongs").',
    grammarNote: 'Tenses (Aspect Restriction)',
    ncertDefinition:
      'Grammar Exception: Replace progressive "is owning / is knowing / is resembling" with Simple Present or Past ("owns / knew / resembles").',
    example:
      'This heritage silver medal belongs (NOT "is belonging") to our school museum.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'tenses',
      sectionId: 'rg-03-tense-matrix',
    },
  },
  {
    id: 'eng-gl-rg-first-subj-vs-proximity',
    term: 'First-Subject Rule vs. Proximity Concord Rule',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      'Parenthetical linkers (as well as, along with, together with) agree with the FIRST subject; correlatives (either...or, neither...nor, not only...but also) agree with the NEARER subject.',
    englishMeaning: 'Essential pair of Subject–Verb Agreement laws tested annually by CBSE.',
    grammarNote: 'Subject–Verb Concord',
    ncertDefinition:
      'Concord Contrast: "The captain, along with his players, IS ready" vs. "Neither the captain nor his players ARE ready."',
    example:
      'Spot the connector first ("along with" vs. "nor") before checking singular vs. plural on the verb.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'subject-verb-agreement',
      sectionId: 'rg-04-golden-concord-rules',
    },
  },
  {
    id: 'eng-gl-rg-the-number-of',
    term: '"A Number Of" vs. "The Number Of" (& Indefinites)',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      '"A number of + plural noun" means "several" (Plural verb); "The number of + plural noun" denotes ONE statistical figure (Singular verb).',
    englishMeaning: 'Includes "one of the + plural noun -> singular verb" vs relative "who" trap.',
    grammarNote: 'Subject–Verb Concord',
    ncertDefinition:
      'Relative Antecedent Trap: "One of the books IS torn", BUT "She is one of the students who HAVE qualified" ("who" refers to plural "students").',
    example:
      'A number of participants are waiting outside, while the number of vacant seats is dropping.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'subject-verb-agreement',
      sectionId: 'rg-04-indefinite-collective-nouns',
    },
  },
  {
    id: 'eng-gl-rg-deceptive-s-nouns',
    term: 'Deceptive "-s" Singular Nouns vs. Unit Subjects',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      'Subjects/illnesses/news ending in "-s" (news, physics, mathematics, politics, measles, innings) take singular verbs; sums, distances, and weights as ONE unit are also singular.',
    englishMeaning: 'Also contrasts bare plural pair-nouns ("scissors are") vs "a pair of scissors is".',
    grammarNote: 'Subject–Verb Concord',
    ncertDefinition:
      'CBSE Concord Rule: Always check whether "-s" belongs to an uncountable singular concept or a plural pair instrument.',
    example:
      'Ten thousand rupees was donated, and today’s physics news is encouraging.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'subject-verb-agreement',
      sectionId: 'rg-04-tricky-exceptions',
    },
  },
  {
    id: 'eng-gl-rg-mustnt-vs-neednt',
    term: 'Prohibition ("Must Not") vs. Non-Necessity ("Need Not")',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      '"Must not" means strictly forbidden / banned; "need not / don’t have to" means optional / not compulsory.',
    englishMeaning: 'Critical modal distinction on CBSE hospital, school, and metro signage questions.',
    grammarNote: 'Modals (Obligation & Prohibition)',
    ncertDefinition:
      'Modal Syntax Law: Modals always take bare V1 (never "must to wear"); only "ought" and "used" require "to + V1".',
    example:
      'Examinees must not carry mobile phones into the hall, though they need not bring their own graph sheets.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'modals',
      sectionId: 'rg-05-obligation-prohibition-necessity',
    },
  },
  {
    id: 'eng-gl-rg-epistemic-past-modals',
    term: 'Deduction & Past Modals (Must Have / Should Have)',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      '"Must have + V3" states high-confidence deduction from clues; "should have + V3" marks unfulfilled past duty; "can’t be" marks logical impossibility.',
    englishMeaning: 'Evaluates modal certainty in past contexts and negative deductions.',
    grammarNote: 'Modals (Epistemic & Past)',
    ncertDefinition:
      'Deduction Pair: Opposite of epistemic "He must be home" is "He can’t be home" — never "He mustn’t be home".',
    example:
      'Seeing dark puddles outside, Rahul realised it must have rained heavily overnight.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'modals',
      sectionId: 'rg-05-deduction-past-modals',
    },
  },
  {
    id: 'eng-gl-rg-son-backshift',
    term: 'Pronoun SON Rule & Tense Backshift Chart',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      '1st person follows Subject, 2nd person follows Object, 3rd stays unchanged; past reporting verbs shift present -> past, V2 -> had + V3, will -> would, and now -> then.',
    englishMeaning: 'Core mechanics of converting direct speech / dialogue into indirect narration.',
    grammarNote: 'Reported Speech Fundamentals',
    ncertDefinition:
      'Exceptions: Universal truths and sentences with present/future reporting verbs ("says", "will say") keep original verb tenses unchanged.',
    example:
      'She told me that she had completed those slides the previous evening.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'reported-speech',
      sectionId: 'rg-06-core-shift-charts',
    },
  },
  {
    id: 'eng-gl-rg-wh-no-inversion',
    term: 'No-Inversion Rule & Negative Commands ("Forbade")',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      'Reported questions restore statement order (wh-word + Subject + Verb, NO "do/did" and NO "that"); negative imperatives use either "warned not to" OR "forbade + obj + to" (never "forbade not to").',
    englishMeaning: 'Eliminates the top two 1-mark reported-speech mistakes in Class 10 board exams.',
    grammarNote: 'Reported Speech (Questions & Imperatives)',
    ncertDefinition:
      'CBSE Reported Question Law: Convert "Where did you go?" into "...asked where he had gone", never "...asked where had he gone".',
    example:
      'Notice: "forbade" already contains "not", so follow it cleanly with positive infinitive "to + V1".',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'reported-speech',
      sectionId: 'rg-06-commands-requests-exclamations',
    },
  },
  {
    id: 'eng-gl-wr-formal-letter-8parts',
    term: '8-Part Block-Left Formal Letter Layout',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      'Sender’s Address -> Expanded Date -> Receiver’s Designation & Address -> Crisp Subject -> Salutation (Sir/Madam) -> 3-Paragraph Body -> Complimentary Close -> Sender Name.',
    englishMeaning: 'CBSE 5-Mark Layout (Format 1 + Organisation 1 + Content 2 + Accuracy 1) in 100–120 words.',
    grammarNote: 'Writing Format (Letter to Editor / Complaint)',
    ncertDefinition:
      'CBSE Standard Conventions: Write full dates ("14 November 2026"), avoid apostrophe in "Yours", and use "Yours truly" for Editors.',
    example:
      'Remember: The Newspaper Editor publishes your letter to build public civic pressure — never command the Editor to repair roads directly!',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-writing-skills',
      subtopicSlug: 'formal-letter-editor-and-complaint',
      sectionId: 'wr-01-cbse-format-blueprint',
    },
  },
  {
    id: 'eng-gl-wr-order-vs-inquiry',
    term: 'Placing an Order vs. Letter of Inquiry Blueprint',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      'Order letters specify item details, quantities, institutional discount, delivery deadline & damage-replacement terms; Inquiry letters cite an ad/notice and ask crisp structured questions.',
    englishMeaning: 'Two high-scoring commercial formal letter formats in CBSE Question 4.',
    grammarNote: 'Commercial Formal Letters (5 Marks)',
    ncertDefinition:
      'Content Check: An Order Letter without an itemized table/list or payment-on-delivery terms loses Content marks.',
    example:
      'Close inquiry letters with a polite request for the latest brochure and fee schedule.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-writing-skills',
      subtopicSlug: 'formal-letter-placing-order-and-inquiry',
      sectionId: 'wr-02-order-letter-blueprint',
    },
  },
  {
    id: 'eng-gl-wr-analytical-single-para',
    term: 'Analytical Paragraph: Single-Para Data Synthesis',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      'A unified 100–120 word paragraph combining an overview sentence, grouped comparisons/extremes from visual/SWOT cues, and a data-backed takeaway — without personal "I/we" opinions.',
    englishMeaning: 'CBSE Question 5 (5 Marks: Content 2 + Organisation/Cohesion 2 + Accuracy 1).',
    grammarNote: 'Analytical Paragraph Architecture',
    ncertDefinition:
      'CBSE Rubric Rule: Never copy every data cell sequentially like a shopping list; group highs, lows, anomalies, and percentages proportionally.',
    example:
      'Replace informal filler with precision verbs: "surged sharply", "plateaued", "outpaced", "accounted for nearly two-fifths".',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-writing-skills',
      subtopicSlug: 'analytical-paragraph-writing',
      sectionId: 'wr-03-analytical-blueprint-lexicon',
    },
  },
  {
    id: 'eng-gl-wr-swot-objective-eval',
    term: 'SWOT & Argument-Cue Objective Evaluation',
    category: 'Tone & Mood Descriptors',
    simpleMeaning:
      'Analytical tone weighs Strengths, Weaknesses, Opportunities, and Threats neutrally ("While advocates highlight..., critics warn...") instead of declaring personal votes.',
    englishMeaning: 'Distinguishes CBSE Analytical Paragraphs from persuasive debates or speeches.',
    grammarNote: 'Analytical Writing Tone',
    ncertDefinition:
      'Objectivity Rule: Every claim must trace directly back to a cue or figure given in the prompt box.',
    example:
      'Conclude SWOT analyses by noting how success hinges on mitigating highlighted operational risks.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-writing-skills',
      subtopicSlug: 'analytical-paragraph-writing',
      sectionId: 'wr-03-swot-cue-map-models',
    },
  },
  {
    id: 'eng-gl-wr-180min-time-plan',
    term: '80-Mark / 180-Minute CBSE Code 184 Pacing Plan',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      '15-min Reading Scan + Sec A Reading (40m) + Sec B Grammar & Writing (40m) + Sec C Literature (85m) + 15-min Spelling, Concord & Presentation Audit.',
    englishMeaning: 'Prevents rushing 6-mark Literature answers at the end of the 3-hour exam.',
    grammarNote: 'Exam Time Management',
    ncertDefinition:
      'Board Strategy: Use the 15-minute Reading Time strictly to skim Section A questions and shortlist internal choices in Writing & Literature.',
    example:
      'Underline one key phrase per bullet point cleanly with pencil/pen during the final 15-minute audit.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-writing-skills',
      subtopicSlug: 'writing-and-80-mark-board-strategy',
      sectionId: 'wr-04-180min-time-plan',
    },
  },
  {
    id: 'eng-gl-rg-board-editing-audit',
    term: 'Board Error–Correction Audit Checklist',
    category: 'Grammar & Writing Rules',
    simpleMeaning:
      'Five-point check for every CBSE Editing box line: (1) Concord (singular/plural verb), (2) Determiner (a/an/the/little/any), (3) Tense marker, (4) Modal bare V1, (5) Preposition/Linkers.',
    englishMeaning: 'Systematic elimination grid for solving 10 out of 12 Section B grammar questions cleanly.',
    grammarNote: 'Section B Exam Audit',
    ncertDefinition:
      'Answer-Sheet Format: Always write BOTH columns side by side — `Error` word on left, `Correction` word on right.',
    example:
      'Attempting all 12 instead of carefully checking the clearest 10 wastes minutes needed for 6-mark answers.',
    subtopicPath: {
      subjectSlug: 'english',
      topicSlug: 'english-reading-grammar',
      subtopicSlug: 'reading-grammar-board-mastery',
      sectionId: 'rg-07-cheat-sheet',
    },
  },
];

export const englishQuizBank: QuizQuestion[] = [
  // Ch 1: A Letter to God (3 questions)
  {
    id: 'eng-q-01',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 1: A Letter to God',
    type: 'case-based',
    marks: 5,
    casePassage:
      'Lencho showed not the slightest surprise on seeing the money; such was his confidence — but he became angry when he counted the money. God could not have made a mistake, nor could he have denied Lencho what he had requested.',
    question:
      'Why does the narrator say Lencho showed "not the slightest surprise" on opening the envelope, yet felt angry?',
    options: [
      'He knew the postmaster had raised funds but resented getting coins instead of notes.',
      'His absolute, childlike faith expected God to send the full 100 pesos, so receiving 70 seemed like theft by the staff.',
      'He believed hailstones were less damaging than his wife claimed and wanted extra compensation.',
      'He secretly suspected the envelope had been addressed to another farmer in the valley.',
    ],
    correctIndex: 1,
    explanation:
      'Lencho’s uncritical belief treats divine help as guaranteed. Therefore finding 70 pesos instead of 100 provokes immediate indignation rather than gratitude — the heart of Fuentes’s situational irony.',
    commonMistake:
      'Students often choose options mentioning disappointment at "coins" or "surprise" — the text explicitly states he felt zero surprise.',
  },
  {
    id: 'eng-q-02',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 1: A Letter to God',
    type: 'mcq',
    marks: 1,
    question:
      'Which metaphorical pair in "A Letter to God" shifts Lencho’s mood from hopeful prosperity to total ruin?',
    options: [
      '"Ox of a man" shifting to "bunch of crooks"',
      '"Huge mountains of clouds" shifting to "north-east valley"',
      '"New silver coins" (raindrops) shifting to "frozen pearls" and "a layer of salt" (hailstones)',
      '"Crest of a low hill" shifting to "postmaster’s desk"',
    ],
    correctIndex: 2,
    explanation:
      'Raindrops initially symbolise wealth ("ten cent" and "five cent" pieces / "new coins"), whereas the hour-long hailstorm resembles "frozen pearls" that turn the valley white "as if covered with salt".',
  },
  {
    id: 'eng-q-03',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 1: A Letter to God',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): The postmaster signed the letter simply as "God".\nReason (R): He wanted Lencho to worship him personally instead of sending another envelope.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 2,
    explanation:
      'The postmaster signed "God" strictly to preserve Lencho’s extraordinary faith ("in order not to shake the writer’s faith in God") and felt the quiet satisfaction of someone performing a good deed — never seeking personal praise.',
  },

  // Ch 2: Nelson Mandela (3 questions)
  {
    id: 'eng-q-04',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 2: Nelson Mandela: Long Walk to Freedom',
    type: 'case-based',
    marks: 5,
    casePassage:
      'No one is born hating another person because of the colour of his skin, or his background, or his religion. People must learn to hate, and if they can learn to hate, they can be taught to love, for love comes more naturally to the human heart than its opposite.',
    question:
      'What core conviction about human nature does Mandela express in this extract from 10 May 1994?',
    options: [
      'Racial hatred is genetically inherited and requires military force to erase.',
      'Love is innate while prejudice is socially conditioned, making reconciliation realistic and teachable.',
      'Only victims of apartheid possess the capacity to feel genuine compassion.',
      'Forgiveness is impossible until every former oppressor leaves South Africa.',
    ],
    correctIndex: 1,
    explanation:
      'Mandela argues from natural human goodness: because hatred is learned, empathy and love can also be taught, justifying non-racial nation-building rather than vengeance.',
    commonMistake:
      'Confusing this optimistic view of love with passivity — Mandela immediately notes elsewhere that courage is conquering fear, not lacking it.',
  },
  {
    id: 'eng-q-05',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 2: Nelson Mandela: Long Walk to Freedom',
    type: 'mcq',
    marks: 1,
    question:
      'Why were TWO national anthems sung at the Union Buildings amphitheatre on 10 May 1994?',
    options: [
      'One honoured foreign diplomats from 140 countries while the second honoured Mandela’s family.',
      'White South Africans sang "Nkosi Sikelel -iAfrika" and Black South Africans sang "Die Stem" by mistake.',
      'Singing both anthems symbolised equality, unity, and mutual respect between the newly reconciled Black and White communities.',
      'The military jets interfered with the first anthem, so a second one had to replace it.',
    ],
    correctIndex: 2,
    explanation:
      'Whites sang "Nkosi Sikelel -iAfrika" and Blacks sang the old republic anthem "Die Stem" — uniting both traditions as a public symbol of South Africa’s non-racial democracy.',
  },
  {
    id: 'eng-q-06',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 2: Nelson Mandela: Long Walk to Freedom',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): In apartheid South Africa, a Black man attempting to fulfil his obligations to family and community was inevitably isolated.\nReason (R): Living as a human being meant being torn away from home into a twilight existence of secrecy and rebellion.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'Mandela explicitly explains that under apartheid, trying to serve one’s people meant separation from family, forcing individuals to choose duty to country over domestic peace.',
  },

  // Ch 3: Two Stories about Flying (3 questions)
  {
    id: 'eng-q-07',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 3: Two Stories about Flying',
    type: 'mcq',
    marks: 1,
    question:
      'In "His First Flight", why did the mother seagull stop mid-air with the piece of fish just out of reach instead of landing on the ledge?',
    options: [
      'She wanted to punish the young seagull by eating the fish in front of his siblings.',
      'Strong winds from the green sea prevented her wings from touching the stone ledge.',
      'Maddened by 24 hours of hunger, the young seagull was forced to dive for food — triggering the instinct to open his wings and fly.',
      'She expected his brothers to dive down and carry him off the cliff.',
    ],
    correctIndex: 2,
    explanation:
      'What looked like cruelty was calculated parental wisdom: using intense hunger to push the terrified fledgling off the ledge so he discovered his wings would support him.',
  },
  {
    id: 'eng-q-08',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 3: Two Stories about Flying',
    type: 'case-based',
    marks: 5,
    casePassage:
      'Inside the clouds, everything was suddenly black. It was impossible to see anything outside the aeroplane. The old aeroplane jumped and twisted in the air. I looked at the compass. I couldn’t believe my eyes: the compass was turning round and round and round. It was dead.',
    question:
      'Why did the narrator fly straight into these storm clouds instead of turning back to Paris?',
    options: [
      'His radio instructed him to fly straight north towards Scotland for fuel.',
      'Paris was 150 km behind, there wasn’t enough fuel to fly around the clouds, and he eagerly wanted to reach England in time for his holiday breakfast.',
      'A storm alert had already closed every runway in France.',
      'The black aeroplane ordered him by radio before his compass failed.',
    ],
    correctIndex: 1,
    explanation:
      'With Paris 150 km behind and insufficient fuel in either tank to fly north or south around the towering clouds, homesickness for a big English breakfast drove him to risk the storm.',
    commonMistake:
      'Thinking the black aeroplane appeared BEFORE he entered the storm — it appeared AFTER his compass and radio died inside the storm.',
  },
  {
    id: 'eng-q-09',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 3: Two Stories about Flying',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): The woman in the control centre looked strangely at the narrator and laughed when he asked who the other pilot was.\nReason (R): On the stormy night radar screen, only his own old Dakota DS 088 was visible in the sky.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'Because radar picked up only one aeroplane during the storm, his rescue without compass, radio, or fuel remains an uncanny mystery.',
  },

  // Ch 4: From the Diary of Anne Frank (3 questions)
  {
    id: 'eng-q-10',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 4: From the Diary of Anne Frank',
    type: 'mcq',
    marks: 1,
    question:
      'How did Anne finally change strict Mr Keesing’s attitude after his third punishment ("Quack, Quack, Quack, Said Mistress Chatterbox")?',
    options: [
      'She apologised formally in front of Sanne and stopped speaking in Maths class completely.',
      'She argued politely that talkativeness is a hereditary trait she could never cure.',
      'With Sanne’s help, she turned the joke around in humorous verse about a father swan biting three noisy ducklings to death.',
      'Mrs Kuperus intervened and exempted Anne from homework essays.',
    ],
    correctIndex: 2,
    explanation:
      'Mr Keesing tried to play a joke on Anne with the third title; Anne used her friend Sanne’s help to compose the duckling-and-swan poem, and Mr Keesing took the joke sportingly, reading it across classes.',
  },
  {
    id: 'eng-q-11',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 4: From the Diary of Anne Frank',
    type: 'case-based',
    marks: 5,
    casePassage:
      '“Paper has more patience than people.” I thought of this saying on one of those days when I was feeling a little depressed and was sitting at home with my chin in my hands, bored and listless, wondering whether to stay in or go out.',
    question:
      'What deeper emotional gap in Anne’s life explains why she names her diary "Kitty" despite having family and ~30 acquaintances?',
    options: [
      'Her classmates banned her from sitting with them after failing Maths.',
      'Although she had loving relatives and playful peers, she lacked "one true friend" with whom she could share deep, unguarded thoughts rather than ordinary surface talk.',
      'Her sister Margot refused to speak with her after moving from Frankfurt to Holland.',
      'She believed diaries could later win literary awards in Amsterdam.',
    ],
    correctIndex: 1,
    explanation:
      'Anne explicitly notes she has loving parents, a sister Margot, and about thirty people she calls friends, yet cannot bring herself to talk about anything beyond ordinary everyday things — so paper listens without judgement.',
  },
  {
    id: 'eng-q-12',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 4: From the Diary of Anne Frank',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Anne opened her diary with a brief sketch of her family and early schooling in Frankfurt and Aachen before Amsterdam.\nReason (R): She feared no one reading her musings years later would understand why a thirteen-year-old felt lonely without background context.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'Anne explicitly writes that plunging straight into her thoughts for Kitty would seem abrupt to future readers unless she first provided a brief life sketch.',
  },

  // Ch 5: Glimpses of India (3 questions)
  {
    id: 'eng-q-13',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 5: Glimpses of India',
    type: 'mcq',
    marks: 1,
    question:
      'Which statement accurately distinguishes the three cultural regions in "Glimpses of India"?',
    options: [
      'Goa is known for monsoon coffee estates; Coorg for kabai bakers; Assam for General Cariappa.',
      'In Goa, no feast/engagement is complete without bol/bread; Coorg hosts Kodavus (only Indians allowed firearms without a licence); Assam’s Dhekiabari estate thrives during the May–July second flush.',
      'Bodhidharma belonged to Coorg’s Buddhist Bylakuppe monastery rather than the tea legend.',
      'Coorg receives its heaviest tourist influx during the pouring June–August monsoons.',
    ],
    correctIndex: 1,
    explanation:
      'Part I highlights Goan baker traditions (`bol`, `bolinhas`, `kabai`); Part II highlights Coorg’s Kodavu firearms privilege, Cariappa, and September–March peak season; Part III covers Dhekiabari Tea Estate and the May–July second flush.',
  },
  {
    id: 'eng-q-14',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 5: Glimpses of India',
    type: 'case-based',
    marks: 5,
    casePassage:
      'Even today any person with a jackfruit-like physical appearance is easily compared to a baker.',
    question:
      'What does this humorous closing observation reveal about the social standing of the traditional Goan baker (pader)?',
    options: [
      'Bakers were criticised by villagers for hoarding flour during feasts.',
      'Baking was a profitable, respected livelihood where a plump build served as visible proof that neither the baker nor his family and servants ever starved.',
      'Portuguese rulers forced bakers to grow jackfruit trees near furnaces.',
      'Bakers wore loose single-piece frocks solely to conceal stolen loaves.',
    ],
    correctIndex: 1,
    explanation:
      'Collecting monthly pencil-recorded accounts on walls kept baking prosperous; thus a "jackfruit-like" plump physique became a traditional badge of financial well-being.',
  },
  {
    id: 'eng-q-15',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 5: Glimpses of India',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Pranjol barely looked up from his detective book as the train rolled past lush green Assamese tea bushes.\nReason (R): Having been born and brought up on a plantation, tea gardens were familiar everyday scenery to him unlike to city-boy Rajvir.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'Pranjol’s relaxed familiarity contrasts sharply with Rajvir’s wide-eyed excitement ("a sea of tea bushes") and pre-trip research on Bodhidharma and tea flushes.',
  },

  // Ch 6: Mijbil the Otter (3 questions)
  {
    id: 'eng-q-16',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 6: Mijbil the Otter',
    type: 'mcq',
    marks: 1,
    question:
      'How did Mijbil respond during his first forty-eight hours with Gavin Maxwell in Basra?',
    options: [
      'He attacked the Consul-General’s mail immediately upon leaving the sack.',
      'He stayed aloof and indifferent on the floor the first night, came onto Maxwell’s bed the second night, and went wild with joy overturning water bowls in the bathroom.',
      'He refused all food until Maxwell transported him to Camusfearna.',
      'He escaped out of the Consulate bedroom window and swam back to the Tigris marshes.',
    ],
    correctIndex: 1,
    explanation:
      'For the first 24 hours Mijbil was neither hostile nor friendly ("aloof and indifferent"), warmed up on the second night, and discovered his passion for keeping water in motion in the bathroom.',
  },
  {
    id: 'eng-q-17',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 6: Mijbil the Otter',
    type: 'case-based',
    marks: 5,
    casePassage:
      'I was not too far from the airport... I hurried back to the box with only ten minutes left, only to find an appalling spectacle of trickling blood around the airholes.',
    question:
      'What caused the blood around Mijbil’s 18-inch transport box, and who rescued the crisis aboard the plane to London?',
    options: [
      'Airport security pierced the lid, and the pilot put Mijbil in the cargo hold.',
      'Mijbil tore the sharp zinc/metal lining in panic, injuring himself; aboard the plane, an empathetic air hostess ("the very queen of her kind") let Maxwell keep Mij on his knee.',
      'The driver braked sharply five miles from the airport, and Pranjol helped bandage him.',
      'Mijbil chewed through a wire cage, forcing the British airline to cancel the flight.',
    ],
    correctIndex: 1,
    explanation:
      'Locked alone while Maxwell grabbed a quick meal, Mijbil shredded the zinc lining in distress and cut himself. Maxwell had to clean up just before boarding and was later comforted by the sympathetic air hostess.',
  },
  {
    id: 'eng-q-18',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 6: Mijbil the Otter',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Gavin Maxwell laughed hardest at the London labourer’s glare, "Here, Mister — what is that supposed to be?"\nReason (R): Londoners easily recognised otters, so only that single labourer appeared confused.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 2,
    explanation:
      'A is true, but R is false: otters were almost unknown in London, leading passersby to make wildly funny guesses including "baby seal", "squirrel", "walrus", "hippo", "beaver", "bear cub", and even "a brontosaur"!',
  },

  // Ch 7: Madam Rides the Bus (3 questions)
  {
    id: 'eng-q-19',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 7: Madam Rides the Bus',
    type: 'mcq',
    marks: 1,
    question:
      'What inner strength enabled eight-year-old Valli to turn her doorway daydream into a real bus trip?',
    options: [
      'She borrowed sixty paise from her South Street aunt without telling her mother.',
      'Discreet observation of passengers’ conversations combined with disciplined self-denial — resisting peppermints, toys, balloons, and the village merry-go-round.',
      'The jolly conductor let her travel free because her house sat close to the bus stop.',
      'She waited until winter holidays when the afternoon highway bus dropped fares by half.',
    ],
    correctIndex: 1,
    explanation:
      'Valli quietly gathered exact fare/time data (6 miles, 30 paise each way, 45 minutes one way) and saved every stray coin while sacrificing fairground treats.',
  },
  {
    id: 'eng-q-20',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 7: Madam Rides the Bus',
    type: 'case-based',
    marks: 5,
    casePassage:
      'She had seen the same young cow running right in front of the bus earlier with tail high in the air. Now, on the return trip, the lovable, beautiful creature suddenly looked so horrible and frightening lying motionless by the roadside.',
    question:
      'How does seeing the dead cow transform Valli’s experience of the town bus ride?',
    options: [
      'It makes her angry at the conductor for refusing to stop and let her walk home.',
      'Her infectious excitement vanishes instantly; haunted by life’s fragility, she stays glued to her seat and stops gazing eagerly out the window.',
      'She forgets the incident as soon as she sees her mother talking with her aunt.',
      'It convinces her never to trust elderly passengers or conductors again.',
    ],
    correctIndex: 1,
    explanation:
      'The contrast between the frantic, funny living cow and its spread-eagled corpse shatters Valli’s carefree wonder — an abrupt, poignant encounter with mortality.',
  },
  {
    id: 'eng-q-21',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 7: Madam Rides the Bus',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Valli smiled secretly to herself when her mother said so many things happen outside without our knowledge.\nReason (R): She had just returned from a secret solo bus ride that neither her mother nor her talkative aunt suspected.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'Both mother and aunt completely miss the double meaning of their own proverb, unaware that eight-year-old Valli has literally just returned from town.',
  },

  // Ch 8: The Sermon at Benares (3 questions)
  {
    id: 'eng-q-22',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 8: The Sermon at Benares',
    type: 'mcq',
    marks: 1,
    question:
      'Why did Kisa Gotami fail to bring the Buddha even a single handful of mustard-seed?',
    options: [
      'Benares villagers hated strangers and locked their doors at dusk.',
      'Every household gladly offered mustard-seed, yet no family had escaped the loss of a child, husband, parent, or friend.',
      'The Buddha specifically demanded mustard-seed grown inside the royal palace.',
      'She spent seven days sitting under the peepal tree instead of visiting houses.',
    ],
    correctIndex: 1,
    explanation:
      'Crucial board trap: neighbours did NOT refuse mustard-seed out of stinginess — it was the second condition ("where no one has lost a loved one") that could not be met anywhere.',
  },
  {
    id: 'eng-q-23',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 8: The Sermon at Benares',
    type: 'case-based',
    marks: 5,
    casePassage:
      'Kisa Gotami became weary and hopeless, and sat down at the wayside watching the lights of the city, as they flickered up and were extinguished again. At last the darkness of the night reigned everywhere.',
    question:
      'What transformative realisation strikes Kisa Gotami while watching the city lights flicker and go out?',
    options: [
      'That the Buddha had fooled her into wasting an entire day walking alone.',
      'That human lives mirror city lamps — flaring briefly before extinguishing — and she had been selfish in clinging to private grief when death is universal.',
      'That only wealthy households deserve to escape sorrow.',
      'That moving to a brighter town would revive her only son.',
    ],
    correctIndex: 1,
    explanation:
      'The extinguished city lights awaken Kisa Gotami to impermanence: realising she had been "selfish in her grief", she sees death as "the valley of desolation" leading to immortality only for those who surrender selfishness.',
  },
  {
    id: 'eng-q-24',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 8: The Sermon at Benares',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): According to the Buddha, weeping and grieving neither restore the dead nor comfort the mourner.\nReason (R): Prolonged sorrow harms one’s own body and mind, while only those who "draw out the arrow of lamentation" attain peace.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'In the Benares sermon, the Buddha explains practically and compassionately that grief makes the mourner "sick and pale" without saving the dead, whereas composed acceptance brings peace of mind.',
  },

  // Ch 9: The Proposal (3 questions)
  {
    id: 'eng-q-25',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 9: The Proposal',
    type: 'mcq',
    marks: 1,
    question:
      'Which combination accurately captures the TWO material quarrels and property details in Chekhov’s "The Proposal"?',
    options: [
      'Quarrel 1: Oxen Meadows (5 dessiatins, ~300 roubles); Quarrel 2: Guess (125 roubles, old/lame) vs Squeezer (85 roubles, overshot jaw).',
      'Quarrel 1: Birchwoods (85 roubles); Quarrel 2: Burnt Marsh (300 roubles).',
      'Quarrel 1: Guess (85 roubles, overshot jaw) vs Squeezer (125 roubles, lame); Quarrel 2: Oxen Meadows.',
      'Quarrel 1: Natalya’s dress-jacket vs Lomov’s gloves; Quarrel 2: Chubukov’s champagne.',
    ],
    correctIndex: 0,
    explanation:
      'First comes the boundary feud over Oxen Meadows (5 dessiatins, 300 roubles); after Lomov returns, Natalya triggers the hunting-dog quarrel contrasting Lomov’s purebred Guess (125 roubles) with Chubukov’s overshot Squeezer (85 roubles).',
  },
  {
    id: 'eng-q-26',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 9: The Proposal',
    type: 'case-based',
    marks: 5,
    casePassage:
      'It’s cold... I’m trembling all over, just as if I’d got an examination before me. The great thing is, I must have my mind made up. If I give myself time to think, to hesitate, to talk a lot, to look for an ideal, or for real love, then I’ll never get married.',
    question:
      'What does Lomov’s private monologue reveal about the true basis of marriage in Chekhov’s play?',
    options: [
      'Lomov is swept away by passionate romantic poetry for Natalya.',
      'Lomov approaches marriage pragmatically as a social necessity — valuing Natalya as an "excellent housekeeper, not bad-looking, well-educated" at age thirty-five rather than waiting for "real love".',
      'Lomov is forced into the visit solely because Chubukov threatened to seize his farm.',
      'Lomov fears failing a formal Russian land-law test before the wedding.',
    ],
    correctIndex: 1,
    explanation:
      'Lomov’s cool checklist ("excellent housekeeper", age 35 = "a critical age", need for a quiet regular life) highlights Chekhov’s satire of marriage as pragmatic estate-pairing stripped of genuine romance.',
  },
  {
    id: 'eng-q-27',
    subjectSlug: 'english',
    topicSlug: 'first-flight-prose',
    subtopicTitle: 'Ch 9: The Proposal',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Even after Chubukov forces Lomov and Natalya’s hands together and calls for champagne, peace is not restored.\nReason (R): Within seconds of agreeing to "family bliss", both resume screaming over whether Squeezer is better or worse than Guess.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'Chekhov ends the curtain on delicious comic irony: Chubukov cries "Champagne!" and wishes them "family bliss" while the engaged couple shout "He’s worse!" / "He’s better!" nonstop.',
  },

  // =========================================================================
  // Milestone 2: First Flight — Poetry (Poems 1–10: 30 questions, eng-q-28..57)
  // =========================================================================

  // Poem 1: Dust of Snow (3)
  {
    id: 'eng-q-28',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 1: Dust of Snow',
    type: 'case-based',
    marks: 5,
    casePassage:
      'Has given my heart / A change of mood / And saved some part / Of a day I had rued.',
    question:
      'Which combination accurately captures BOTH the dominant figure of speech in "given my heart" and the mood shift in this closing stanza?',
    options: [
      'Simile + cheerful -> sorrowful',
      'Synecdoche ("heart" stands for the whole speaker) + bitter regret ("rued") -> quiet relief & renewal',
      'Oxymoron + fearless -> panicked',
      'Hyperbole + proud -> boastful',
    ],
    correctIndex: 1,
    explanation:
      'Calling the speaker’s entire inner self "my heart" is Synecdoche, while Frost moves from regret ("day I had rued") to grateful relief that the remaining hours were rescued.',
    commonMistake:
      'Do NOT say the poet wasted the entire day after the snow fell — snow fell off the hemlock and SAVED the remaining part of his day.',
  },
  {
    id: 'eng-q-29',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 1: Dust of Snow',
    type: 'mcq',
    marks: 1,
    question:
      'Why did Robert Frost purposefully place a crow and a hemlock tree in "Dust of Snow" instead of a nightingale and an oak?',
    options: [
      'He wanted to show that bad omens ruined his winter walk permanently.',
      'Both crow and hemlock symbolise gloom and poison in folklore, making it ironic and uplifting that nature’s darkest agents healed his sadness.',
      'Crow and hemlock only grow together in desert landscapes.',
      'Only crows can shake heavy hailstones off evergreen pine needles.',
    ],
    correctIndex: 1,
    explanation:
      'Frost rejects clichéd pleasant nature symbols precisely to prove that humble, seemingly gloomy aspects of nature hold unexpected restorative power.',
  },
  {
    id: 'eng-q-30',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 1: Dust of Snow',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): "Dust of Snow" employs continuous Enjambment from Line 1 through Line 8.\nReason (R): There is no end-stop punctuation until the period at the end of the eighth line, keeping both stanzas one single grammatical sentence.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'Notice zero commas or periods appear before "rued." — one seamless grammatical thought unifies cause (Stanza 1) and healing effect (Stanza 2).',
  },

  // Poem 2: Fire and Ice (3)
  {
    id: 'eng-q-31',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 2: Fire and Ice',
    type: 'mcq',
    marks: 1,
    question:
      'Identify the EXACT rhyme scheme of Robert Frost’s nine-line "Fire and Ice":',
    options: ['abab cdcd e', 'aabb ccdd e', 'abaa bcbcb', 'Free verse (no rhyme scheme)'],
    correctIndex: 2,
    explanation:
      'Checking end-words carefully: fire (a), ice (b), desire (a), fire (a) | twice (b), hate (c), ice (b), great (c), suffice (b) -> abaa bcbcb.',
    commonMistake:
      'Students often guess `abab cdcd` by confusing it with Dust of Snow — verify line by line carefully.',
  },
  {
    id: 'eng-q-32',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 2: Fire and Ice',
    type: 'case-based',
    marks: 5,
    casePassage:
      'But if it had to perish twice, / I think I know enough of hate / To say that for destruction ice / Is also great / And would suffice.',
    question:
      'What human vices are represented by "ice", and what tone does calling ice "great / And would suffice" create?',
    options: [
      'Ice symbolises playful childishness; the tone is festive.',
      'Ice symbolises cold hatred, intolerance, rigidity, and indifference; pairing "great" with "destruction" creates grim, understated irony.',
      'Ice symbolises extreme generosity; the tone is romantic.',
      'Ice literally predicts an upcoming geological ice age with zero moral meaning.',
    ],
    correctIndex: 1,
    explanation:
      'Consistent with NCERT Thinking about the Poem: "fire" stands for greed/avarice/lust/fury, whereas "ice" captures coldness/indifference/hatred. Saying it is "great" for destruction is biting understatement.',
  },
  {
    id: 'eng-q-33',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 2: Fire and Ice',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Frost opens by aligning with "those who favour fire" based on what he has tasted of desire.\nReason (R): He knows from personal observation how consuming human passion and greed can burn relationships and civilisations swiftly.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      '"From what I’ve tasted of desire" grounds his claim in first-hand human psychology: fiery craving destroys rapidly, though icy hate destroys just as surely.',
  },

  // Poem 3: A Tiger in the Zoo (3)
  {
    id: 'eng-q-34',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 3: A Tiger in the Zoo',
    type: 'case-based',
    marks: 5,
    casePassage:
      'He stalks in his vivid stripes / The few steps of his cage, / On pads of velvet quiet, / In his quiet rage.',
    question:
      'Identify the TWO distinct poetic devices in Lines 3 and 4 ("pads of velvet quiet" & "quiet rage"):',
    options: [
      'Simile + Allusion',
      'Metaphor ("pads of velvet quiet") + Oxymoron ("quiet rage")',
      'Onomatopoeia + Poetic Licence',
      'Refrain + Epistrophe',
    ],
    correctIndex: 1,
    explanation:
      'Soft paws are likened implicitly to velvet (Metaphor, no "like/as"), while "quiet rage" welds opposing states together (Oxymoron) to convey imprisoned dignity.',
    commonMistake:
      'Calling "pads of velvet quiet" a Simile — there is no "like" or "as" anywhere in the phrase.',
  },
  {
    id: 'eng-q-35',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 3: A Tiger in the Zoo',
    type: 'mcq',
    marks: 1,
    question:
      'Why does the caged tiger ignore visitors and stare silently at the "brilliant stars" at night?',
    options: [
      'He is blinded by zoo spotlights and cannot see visitors.',
      'Ignoring curiosity-seekers shows dignified contempt for captivity, while staring at boundless stars expresses deep yearning for natural freedom.',
      'He has grown too old to hunt deer near water holes.',
      'Patrolling zoo cars feed him every night after closing hours.',
    ],
    correctIndex: 1,
    explanation:
      'By contrasting man-made "patrolling cars" and concrete bars against distant "brilliant stars", Leslie Norris mirrors the tiger’s brilliant eyes longing for wide open skies.',
  },
  {
    id: 'eng-q-36',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 3: A Tiger in the Zoo',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): In Stanzas 2 and 3, the tiger is actively terrifying a real village near the zoo.\nReason (R): Leslie Norris uses "should be lurking" and "should be snarling" to contrast the tiger’s rightful wild instinct against his present concrete cell.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 3,
    explanation:
      'A is false, but R is true! Crucial trap: the tiger is locked in a concrete cell throughout the poem — Stanzas 2–3 imagine where he SHOULD be if free.',
  },

  // Poem 4: How to Tell Wild Animals (3)
  {
    id: 'eng-q-37',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 4: How to Tell Wild Animals',
    type: 'mcq',
    marks: 1,
    question:
      'Which literary technique explains Carolyn Wells’s odd spellings "dyin’", "lept", and "lep"?',
    options: [
      'Printing errors in the anthology',
      'Transferred Epithet',
      'Poetic Licence (intentional spelling twist to enforce ababcc rhyme and comic metre)',
      'Synecdoche',
    ],
    correctIndex: 2,
    explanation:
      'Wells bends standard spelling ("dyin’" to rhyme with "lion"; "lept"/"lep" echoing "leopard") to keep her playful mock-textbook rhythm bouncy.',
  },
  {
    id: 'eng-q-38',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 4: How to Tell Wild Animals',
    type: 'case-based',
    marks: 5,
    casePassage:
      'The Crocodile you always may / Tell from the Hyena thus: / Hyenas come with merry smiles; / But if they weep they’re Crocodiles.',
    question:
      'What makes this identification "tip" doubly humorous for someone trying not to be "nonplussed" in the wild?',
    options: [
      'Crocodiles only live in domestic yards alongside bears.',
      'It plays on two famous idioms — manic "hyena laughter" and insincere "crocodile tears" — offering fatal trivia to a helpless novice.',
      'Hyenas actually greet human travellers harmlessly like pets.',
      'The verse uses unrhymed free verse to sound scientific.',
    ],
    correctIndex: 1,
    explanation:
      'Beneath cheerful rhyming advice (`ababcc`), identifying a predator only by its deceptive "smiles" or "tears" satirises absurd wildlife guides with dark wit.',
  },
  {
    id: 'eng-q-39',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 4: How to Tell Wild Animals',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): The poem calls a bear’s crushing squeeze "one more caress" and eating a victim a "simple rule" to spot a Bengal Tiger.\nReason (R): Deadpan understatement and dark irony make lethal encounters absurdly funny.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'Calling a fatal hug a loving "caress" exemplifies Wells’s tongue-in-cheek irony — distinguishing wild beasts at the cost of the reader’s life!',
  },

  // Poem 5: The Ball Poem (3)
  {
    id: 'eng-q-40',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 5: The Ball Poem',
    type: 'mcq',
    marks: 1,
    question:
      'Why does the poet in "The Ball Poem" refuse to intrude on the boy or buy him another ball with "a dime"?',
    options: [
      'The boy asked strangers not to talk to him.',
      'Because "money is external" — a replacement ball cannot bring back the boy’s lost memories or teach him the internal "epistemology of loss".',
      'Dimes could not be spent near harbour shops.',
      'The poet dislikes children playing near water.',
    ],
    correctIndex: 1,
    explanation:
      'Buying a duplicate trivialises grief and blocks self-reliance; sensing "first responsibility" requires facing irreplaceable loss directly.',
  },
  {
    id: 'eng-q-41',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 5: The Ball Poem',
    type: 'case-based',
    marks: 5,
    casePassage:
      'He is learning, well behind his desperate eyes, / The epistemology of loss, how to stand up / Knowing what every man must one day know',
    question:
      'Identify the poetic device in "desperate eyes" AND explain what "the epistemology of loss" means here:',
    options: [
      'Simile + learning how to swim in a harbour',
      'Transferred Epithet ("desperate" shifts from the boy to his eyes) + understanding the universal nature of loss and resilience',
      'Oxymoron + memorising textbook prices of toys',
      'Poetic Licence + blaming careless friends',
    ],
    correctIndex: 1,
    explanation:
      'The boy himself is desperate ("desperate eyes" = Transferred Epithet), and "epistemology of loss" (from Greek episteme, knowledge) denotes grasping how to endure inevitable losses across life.',
    commonMistake:
      'Defining "epistemology" simply as "sadness" drops full marks — specify understanding/knowledge of the nature of loss.',
  },
  {
    id: 'eng-q-42',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 5: The Ball Poem',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): "The Ball Poem" uses strict abab rhyme to imitate a child’s bouncing toy.\nReason (R): John Berryman writes in unrhymed blank/free verse so the speaker’s quiet meditation feels authentic rather than artificial.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 3,
    explanation:
      'A is false, but R is true: NCERT explicitly confirms "The Ball Poem" does NOT have a rhyme scheme.',
  },

  // Poem 6: Amanda! (3)
  {
    id: 'eng-q-43',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 6: Amanda!',
    type: 'case-based',
    marks: 5,
    casePassage:
      '(I am Rapunzel, I have not a care; / life in a tower is tranquil and rare; / I’ll certainly never let down my bright hair!)',
    question:
      'Why does Amanda playfully rewrite the Rapunzel fairy tale so she will NEVER let down her hair?',
    options: [
      'She prefers cutting her hair short to avoid parental nagging about shoes.',
      'She craves uninterrupted solitary peace ("tranquil and rare") free of ANY outsider — even a prince — climbing in to disturb or control her.',
      'She wants the parent to climb the tower to check her homework.',
      'Because Rapunzel in the original tale refused to grow long hair.',
    ],
    correctIndex: 1,
    explanation:
      'Unlike the fairy-tale maiden waiting for rescue, Amanda treasures total solitude: parentheses isolate her peaceful refuge away from constant scolding.',
    commonMistake:
      'Writing that Amanda hopes to be rescued from the tower — she explicitly says she will NEVER let down her bright hair.',
  },
  {
    id: 'eng-q-44',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 6: Amanda!',
    type: 'mcq',
    marks: 1,
    question:
      'Is Amanda literally an orphan roaming the streets? Why does Stanza 4 depict that daydream?',
    options: [
      'Yes, her guardians abandoned her in a tower.',
      'No — she is overwhelmed by relentless nagging ("tidy your room", "clean your shoes") and momentarily equates motherless wandering with quiet liberty where "silence is golden".',
      'Yes, she lost both parents before starting school.',
      'No — she hopes to become a famous street artist drawing dust patterns.',
    ],
    correctIndex: 1,
    explanation:
      'Only excessive micro-management makes even orphanhood look preferable in a child’s momentary fantasy ("the silence is golden, the freedom is sweet").',
  },
  {
    id: 'eng-q-45',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 6: Amanda!',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): In the final stanza, the speaker tells Amanda to stop sulking because others might think the speaker nagged her.\nReason (R): The parent ironically cares more about appearing blameless to outsiders than understanding how wearying the constant stream of commands has felt to Amanda.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      '"Anyone would think that I nagged at you, Amanda!" delivers peak dramatic irony after three relentless stanzas of pure nagging!',
  },

  // Poem 7: The Trees (3)
  {
    id: 'eng-q-46',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 7: The Trees',
    type: 'case-based',
    marks: 5,
    casePassage:
      'long-cramped boughs shuffling under the roof / like newly discharged patients / half-dazed, moving / to the clinic doors.',
    question:
      'Identify the poetic device in lines 2–3 AND explain what this image conveys beyond literal houseplants:',
    options: [
      'Metaphor + gardeners trimming winter roses',
      'Simile ("like newly discharged patients") + symbolic recovery of women/nature emerging stiff yet determined out of long domestic confinement',
      'Oxymoron + doctors visiting an empty forest',
      'Poetic Licence + trees growing inside a hospital ward',
    ],
    correctIndex: 1,
    explanation:
      'Through the Simile, Adrienne Rich captures both botanical malformation indoors and feminist/human liberation moving cautiously yet steadily toward open skies.',
  },
  {
    id: 'eng-q-47',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 7: The Trees',
    type: 'mcq',
    marks: 1,
    question:
      'Why is the moon "broken like a mirror" at the climax of "The Trees", flashing now in "the crown of the tallest oak"?',
    options: [
      'A storm blew away the moon before sunrise.',
      'The rising leafy oak branches visually fracture the circular full moon from behind the glass as the forest reclaims open nature outside.',
      'The speaker shattered a bedroom mirror while writing long letters.',
      'Birds nested across the moon inside the empty veranda.',
    ],
    correctIndex: 1,
    explanation:
      'Previously the whole moon shone in an empty unobstructed sky; once tall oaks rush forward past breaking glass, their leafy "crown" breaks its disc like mirror fragments.',
  },
  {
    id: 'eng-q-48',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 7: The Trees',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): In Stanza 3, the poet writes long letters openly celebrating the trees’ dramatic escape.\nReason (R): She explicitly notes she "scarcely mention[s] the departure of the forest from the house", reflecting quiet solidarity or society’s refusal to acknowledge silent emancipation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 3,
    explanation:
      'A is false, but R is true: she SCARCELY mentions the departure in her letters even though her head is full of whispers ("tomorrow will be silent").',
  },

  // Poem 8: Fog (3)
  {
    id: 'eng-q-49',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 8: Fog',
    type: 'mcq',
    marks: 1,
    question:
      'Which combination accurately describes BOTH the poetic form and primary figure of speech in Carl Sandburg’s "Fog"?',
    options: [
      'Rhyming couplets (`aabb`) + Simile',
      'Free Verse (NO rhyme scheme) + Extended Metaphor & Personification',
      'Alternating quatrains (`abab`) + Oxymoron',
      'Heroic Ballad + Poetic Licence',
    ],
    correctIndex: 1,
    explanation:
      'All six short lines run in unrhymed Free Verse, building one extended Metaphor (cat-feet/silent haunches — no "like/as") plus Personification ("sits looking... moves on").',
    commonMistake:
      'Calling "The fog comes on little cat feet" a Simile costs 1 mark immediately.',
  },
  {
    id: 'eng-q-50',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 8: Fog',
    type: 'case-based',
    marks: 5,
    casePassage:
      'It sits looking / over harbour and city / on silent haunches / and then moves on.',
    question:
      'Why are "little cat feet" and "silent haunches" such effective parallels for coastal fog?',
    options: [
      'Both fog and cats announce their arrival loudly across empty docks.',
      'Like an independent cat, fog arrives softly without warning, pauses briefly watching harbour and city in calm detachment, and vanishes silently on its own terms.',
      'Cats enjoy swimming across misty harbours every winter morning.',
      'The poem warns fishermen to keep pets indoors during fog.',
    ],
    correctIndex: 1,
    explanation:
      'Stealth, watchful calm ("sits looking... on silent haunches"), and effortless departure mirror feline independence and nature’s gentle transience.',
  },
  {
    id: 'eng-q-51',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 8: Fog',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): In Line 3 of "Fog", the pronoun "It" refers to the harbour.\nReason (R): "It" refers directly to the fog, which silently crouches above both the harbour and the city before drifting away.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 3,
    explanation:
      'A is false, but R is true: directly tested in NCERT Question 1(iii) — "It" refers to "the fog" looking down over harbour and city.',
  },

  // Poem 9: The Tale of Custard the Dragon (3)
  {
    id: 'eng-q-52',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 9: The Tale of Custard the Dragon',
    type: 'mcq',
    marks: 1,
    question:
      'Match Belinda’s four pets in Ogden Nash’s mock-heroic ballad accurately:',
    options: [
      'Black kitten Ink, grey mouse Mustard, yellow dog Blink, brave dragon Percival.',
      'Black kitten Ink, grey mouse Blink, little yellow dog Mustard, gentle dragon Custard.',
      'White kitten Custard, grey mouse Ink, yellow dog Blink, dragon Mustard.',
      'Black mouse Ink, grey kitten Blink, brown dog Mustard, pet crocodile Custard.',
    ],
    correctIndex: 1,
    explanation:
      'Tested straight from NCERT Q1: Ink = black kitten, Blink = grey mouse, Mustard = yellow dog ("sharp as Mustard"), Custard = dragon.',
  },
  {
    id: 'eng-q-53',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 9: The Tale of Custard the Dragon',
    type: 'case-based',
    marks: 5,
    casePassage:
      'With a clatter and a clank and a jangling squirm, / He went at the pirate like a robin at a worm.',
    question:
      'Which TWO poetic devices energise Custard’s sudden transformation against the pirate in these lines?',
    options: [
      'Oxymoron + Free Verse',
      'Onomatopoeia ("clatter", "clank", "jangling") + Simile ("like a robin at a worm")',
      'Transferred Epithet + Refrain',
      'Paradox + Blank Verse',
    ],
    correctIndex: 1,
    explanation:
      'Loud metallic sound effects (Onomatopoeia) combine humorously with a brisk Simile ("like a robin at a worm") showing how effortlessly Custard devours the armed pirate.',
  },
  {
    id: 'eng-q-54',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 9: The Tale of Custard the Dragon',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): After slaying the pirate, Custard boasts that he was thrice as brave as Ink, Blink, and Mustard.\nReason (R): Mustard claims he was merely "flustered" and Ink and Blink claim three times the bravery, while modest Custard readily agrees everybody else is braver than him.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 3,
    explanation:
      'A is false, but R is true: true bravery needs no boasting — Custard calmly agrees everyone else is braver and still asks for his safe cage!',
  },

  // Poem 10: For Anne Gregory (3)
  {
    id: 'eng-q-55',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 10: For Anne Gregory',
    type: 'case-based',
    marks: 5,
    casePassage:
      'By those great honey-coloured / Ramparts at your ear, / Love you for yourself alone / And not your yellow hair.',
    question:
      'What does the Metaphor "great honey-coloured / Ramparts at your ear" suggest about outward physical beauty?',
    options: [
      'Her golden curls act like ancient castle walls guarding inner beauty — dazzling suitors so they fall in love with appearance rather than her true soul.',
      'She works as a beekeeper beside an old religious fort in Dublin.',
      'Brown or black hair cannot grow near honey-coloured ears.',
      'Ramparts are literal stone earrings worn by medieval queens.',
    ],
    correctIndex: 0,
    explanation:
      'Comparing golden locks framing her ear to wide fortress walls ("ramparts") shows how external glamour obscures genuine inner worth from human eyes.',
  },
  {
    id: 'eng-q-56',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 10: For Anne Gregory',
    type: 'mcq',
    marks: 1,
    question:
      'Why does Anne propose dyeing her hair "Brown, or black, or carrot" in Stanza 2?',
    options: [
      'She dislikes honey-blonde curls and wants to imitate an old religious man.',
      'To test whether changing superficial hair colour might force young men to love her genuinely for her inner self alone.',
      'Because "brown, or black, or carrot" ruins the poem’s abcbdb rhyme scheme.',
      'To hide from admirers at an evening carnival.',
    ],
    correctIndex: 1,
    explanation:
      'Anne argues spirit over surface: if beauty lies only in transient yellow hair, duller colours should make suitors look past external glamour — though the speaker’s final stanza implies mortals still struggle to transcend appearances.',
  },
  {
    id: 'eng-q-57',
    subjectSlug: 'english',
    topicSlug: 'first-flight-poetry',
    subtopicTitle: 'Poem 10: For Anne Gregory',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): In Stanza 3, the speaker concludes that "only God, my dear, / Could love you for yourself alone".\nReason (R): According to the "old religious man’s" text, human affection is easily swayed by physical charm, whereas divine love alone values the pure inner soul unconditionally.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'Both A and R capture Yeats’s closing contrast (`abcbdb` rhyme scheme): even hair-dye swaps one appearance for another, so only spiritual/divine love loves the essential self untouched by looks.',
  },

  // Footprints without Feet — 27 Questions (Ch 1–9: MCQ + Case-Based + Assertion-Reason)
  // Ch 1: A Triumph of Surgery (3)
  {
    id: 'eng-q-58',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 1: A Triumph of Surgery',
    type: 'case-based',
    marks: 5,
    casePassage:
      'He had become hugely fat, like a bloated sausage with a leg at each corner. His eyes, bloodshot and rheumy, stared straight ahead and his tongue lolled from his jaws.',
    question:
      'Why was Mrs Pumphrey’s explanation ("suffering from malnutrition") completely mistaken regarding Tricki’s lethargy?',
    options: [
      'Tricki had lost all appetite because the surgery refused to feed him.',
      'Tricki was overfed malt, cod-liver oil, Horlicks, cream cakes & chocolates with zero vigorous exercise, making greed the real sickness.',
      'Tricki suffered from hereditary anaemia requiring daily glasses of red wine.',
      'Hodgkin the gardener had placed Tricki on a water-only diet.',
    ],
    correctIndex: 1,
    explanation:
      'Over-indulgence masked as caring nutrition caused obesity and vomiting; cutting extras plus pack play cured him naturally.',
    commonMistake:
      'Do NOT accept Mrs Pumphrey’s claim of malnutrition — Mr Herriot explicitly notes "Tricki’s only fault was greed."',
  },
  {
    id: 'eng-q-59',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 1: A Triumph of Surgery',
    type: 'mcq',
    marks: 1,
    question:
      'Which combination accurately captures Mr Herriot’s actual 14-day treatment at the veterinary surgery?',
    options: [
      'Immediate abdominal operation + daily brandy tonic',
      'Two days of strict water-only fasting (no medicine), gradual bowl competition, and vigorous pack scrimmages on the lawn',
      'Separate warm padded cushions + three tweed coats + morning boiled eggs',
      'Total isolation from Joe the greyhound and indoor rest',
    ],
    correctIndex: 1,
    explanation:
      'Herriot famously uses ZERO medicinal or surgical intervention — turning the closing exclamation "a triumph of surgery" into gentle irony.',
  },
  {
    id: 'eng-q-60',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 1: A Triumph of Surgery',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): During Tricki’s convalescence, Mr Herriot refused Mrs Pumphrey’s fresh eggs, wine, and brandy at the clinic door.\nReason (R): Keeping Tricki on a lean dog-pack diet while the veterinary staff joyfully consumed the luxury hampers is a comic highlight of the story.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 3,
    explanation:
      'A is false, but R is true: Herriot never returned the hampers — he and his partners happily ate two eggs at breakfast and drank wine at lunch!',
  },

  // Ch 2: The Thief's Story (3)
  {
    id: 'eng-q-61',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 2: The Thief’s Story',
    type: 'case-based',
    marks: 5,
    casePassage:
      'Whole sentences, I knew, could one day bring me more than a few hundred rupees. It was a simple matter to steal — and sometimes just as simple to be caught. But to be a really big man, a clever and respected man, was something else.',
    question:
      'What decisive inner shift pushes 15-year-old Hari Singh back toward Anil’s room after missing the 10:30 Express to Lucknow?',
    options: [
      'He realises the railway ticket checker would arrest him without a valid ticket.',
      'He understands genuine literacy and social respect offer limitless growth far outweighing a quick ₹600 theft.',
      'He fears Anil has already woken up and locked the Jumna Sweet Shop balcony.',
      'He decides ₹600 is too little because Anil earns fixed steady bank salaries.',
    ],
    correctIndex: 1,
    explanation:
      'Hari had every physical chance to jump onto the slow-moving train yet hesitated because Anil’s trust and teaching awakened long-term ambition and conscience.',
  },
  {
    id: 'eng-q-62',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 2: The Thief’s Story',
    type: 'mcq',
    marks: 1,
    question:
      'How does Hari Singh notice next morning that Anil knows about the midnight theft?',
    options: [
      'Anil angrily locks the mattress and counts the bundle aloud.',
      'The fifty-rupee note Anil extends toward him is still damp from the night’s November drizzle, though Anil says nothing harsh.',
      'A police constable waits outside the room over Jumna Sweet Shop.',
      'Anil stops teaching Hari how to add numbers and dismisses him.',
    ],
    correctIndex: 1,
    explanation:
      'Anil’s silent grace ("Today we’ll start writing sentences") without shaming Hari seals his permanent transformation ("my smile came by itself, without any effort").',
  },
  {
    id: 'eng-q-63',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 2: The Thief’s Story',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Hari admits it is much harder to rob a careless, trusting man like Anil than a greedy man.\nReason (R): A careless man sometimes fails even to notice he has been robbed, stripping away a thief’s pride and awakening guilt instead.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'Directly grounded in Bond’s psychology: cynical thieves thrive against alert or greedy targets; total vulnerability ("most trusting person") disarms them.',
  },

  // Ch 3: The Midnight Visitor (3)
  {
    id: 'eng-q-64',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 3: The Midnight Visitor',
    type: 'mcq',
    marks: 1,
    question:
      'Why was young romantic writer Fowler initially "let down" upon meeting secret agent Ausable?',
    options: [
      'Ausable refused to answer questions in English or German.',
      'Instead of espionage glamour and dark-eyed beauties, Ausable was fat, sloppy, wheezy, lived in a dull 6th-floor room, and kept an American Boston accent.',
      'Max attacked Fowler immediately inside the hotel lobby.',
      'Ausable did not possess any confidential missile documents.',
    ],
    correctIndex: 1,
    explanation:
      'Robert Arthur sets up Fowler’s stereotypical thrill-seeker expectations specifically to showcase real-world wit over Hollywood appearance.',
  },
  {
    id: 'eng-q-65',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 3: The Midnight Visitor',
    type: 'case-based',
    marks: 5,
    casePassage:
      '"And as the black-clothed waiter put the tray down, Ausable said coolly: You were thinking, perhaps, that the police were at the door? Max won’t be returning."',
    question:
      'Identify the TWO psychological bluffs Ausable combined to neutralise armed Max without touching a weapon:',
    options: [
      'Hidden hotel guards + bulletproof glass window',
      'Inventing a non-existent balcony below the sixth-floor sill + passing off pre-ordered waiter Henry’s knock as armed police',
      'Turning off room lights + throwing the tray at Max',
      'Locking Max inside the bathroom + phoning Boston headquarters',
    ],
    correctIndex: 1,
    explanation:
      'By planting frustration ("second time in a month someone has got into my room through that nuisance of a balcony") and adding urgent police knocking, Ausable triggered Max’s fatal leap.',
    commonMistake:
      'Stating Max climbed IN via the balcony — Max explicitly confirms "No, I had a passkey."',
  },
  {
    id: 'eng-q-66',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 3: The Midnight Visitor',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Ausable’s invention of the balcony worked because he delivered it as an irritated everyday complaint rather than a boast.\nReason (R): Overconfident Max, holding a pistol and focusing on the 12:30 missile report, checked neither the window exterior nor Henry’s identity.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'Calm, mundane plausibility disarmed Max’s suspicion completely under sudden deadline stress.',
  },

  // Ch 4: A Question of Trust (3)
  {
    id: 'eng-q-67',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 4: A Question of Trust',
    type: 'mcq',
    marks: 1,
    question:
      'Though society saw Horace Danby as "good and respectable", what hidden illegal habit funded his quiet life?',
    options: [
      'Forging rare manuscripts inside prison libraries',
      'Locksmithing by day and robbing one carefully researched safe every year to buy rare, expensive books through an agent',
      'Selling stolen flowers to jewel collectors',
      'Assisting burglars in London every summer week',
    ],
    correctIndex: 1,
    explanation:
      'Horace rationalised his annual burglary ("steal enough for twelve months") as victimless theft against wealthy homeowners.',
  },
  {
    id: 'eng-q-68',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 4: A Question of Trust',
    type: 'case-based',
    marks: 5,
    casePassage:
      'She laughed, and he begged, thinking that he had persuaded her, "Look, I have no right to ask you for anything, but I’m desperate." ... He took off his gloves and gave her his cigarette lighter.',
    question:
      'Why was the young woman in red even sharper than careful Horace Danby at Shotover Grange?',
    options: [
      'She brought two police officers concealed in the kitchen.',
      'Studying the household routine just as well (even dog Sherry’s name), she acted calmly as the lady of the house, let Horace take off his gloves and crack the £15,000 safe for her, then vanished.',
      'She was actually the real 60-year-old grey-haired mistress’s daughter.',
      'She allergic-tested the room flowers to stop his burglary.',
    ],
    correctIndex: 1,
    explanation:
      'Canning crafts crisp situational irony: the veteran safecracker opens the safe bare-handed for a fellow thief and hands police his own fingerprints!',
  },
  {
    id: 'eng-q-69',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 4: A Question of Trust',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Two days after the Shotover Grange burglary, Horace Danby went back to normal lock-making happily.\nReason (R): Fresh fingerprints across the drawing room exposed him immediately, returning him to prison as assistant librarian furious at "honour among thieves".',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 3,
    explanation:
      'A is false, but R is true: nobody believed his story that the owner’s wife asked him to break her own safe, especially since the real wife was a sharp-tongued 60-year-old.',
  },

  // Ch 5: Footprints without Feet (3)
  {
    id: 'eng-q-70',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 5: Footprints without Feet',
    type: 'mcq',
    marks: 1,
    question:
      'How did Griffin lose the comfort of the warm London department store on his first night of winter invisibility?',
    options: [
      'A fire alarm rang after he lit his landlord’s stove.',
      'He overslept on a pile of quilts until assistants arrived next morning, forcing him to shed all stolen clothes and flee naked into January chill again.',
      'Mrs Hall tracked his muddy bootprints across the counter.',
      'Constable Jaffers caught him eating cold meat in the grocery aisle.',
    ],
    correctIndex: 1,
    explanation:
      'Wearing clothes instantly restores visibility, creating Griffin’s ironic trap throughout Wells’s story: warmth makes him seen, invisibility leaves him freezing!',
  },
  {
    id: 'eng-q-71',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 5: Footprints without Feet',
    type: 'case-based',
    marks: 5,
    casePassage:
      'Mrs Hall almost fell down the stairs in hysterics. She was convinced that the room was haunted by spirits, and that the stranger had somehow caused these to enter into her furniture.',
    question:
      'What two unexplained incidents at Iping convinced superstitious Mrs Hall that Griffin practised "witchcraft"?',
    options: [
      'Invisible footprints in snow + a burning landlord’s roof',
      'Griffin’s sudden transformation without bandages + Mrs Hall’s bedroom hat leaping and chair charging straight at her and her husband out of empty air',
      'Talking books sliding across Centerville Public Library',
      'A glowing blue test tube inside the clergyman’s cellar',
    ],
    correctIndex: 1,
    explanation:
      'Right after the clergyman noticed stolen housekeeping money ("Extraordinary affair!"), the innkeepers entered Griffin’s suddenly empty room and were attacked unseen by the hat and chair.',
  },
  {
    id: 'eng-q-72',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 5: Footprints without Feet',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Constable Jaffers immediately stopped trying to arrest Griffin once the stranger removed his bandages and false nose.\nReason (R): Dutiful Jaffers still attempted to handcuff a "headless man", struggling bravely until invisible blows knocked him unconscious.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 3,
    explanation:
      'A is false, but R is true: Jaffers insisted his warrant meant capturing the suspect "with or without his head".',
  },

  // Ch 6: The Making of a Scientist (3)
  {
    id: 'eng-q-73',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 6: The Making of a Scientist',
    type: 'mcq',
    marks: 1,
    question:
      'Which book gifted by Richard Ebright’s mother opened the wider world of genuine scientific research to him?',
    options: [
      'Principles of Molecular Heredity',
      'The Travels of Monarch X (inviting readers to tag monarchs for Dr Frederick A. Urquhart)',
      'Butterflies of Eastern Pennsylvania',
      'Proceedings of the National Academy of Science',
    ],
    correctIndex: 1,
    explanation:
      'After Richard collected all 25 local butterfly species by second grade, that book connected him directly with Dr Urquhart at the University of Toronto.',
  },
  {
    id: 'eng-q-74',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 6: The Making of a Scientist',
    type: 'case-based',
    marks: 5,
    casePassage:
      'Starting with a first-rate mind, add curiosity, and mix in the will to win for the right reasons. Ebright has these qualities. From the time the book... opened the world of science to him, Richard Ebright has never lost his scientific curiosity.',
    question:
      'What crucial lesson turned Richard’s 7th-grade science fair defeat into a launchpad for discovering how cells read DNA?',
    options: [
      'Memorising thicker encyclopaedia entries beats laboratory equipment.',
      'Real science demands testing live hypotheses via real experiments (discovering the 12 gold spots’ hormone rather than merely displaying neatly mounted frog-tissue slides).',
      'Raising thousands of butterflies indoors sells better than starling feeding tests.',
      'Avoiding speech and debate clubs saves lab time.',
    ],
    correctIndex: 1,
    explanation:
      'Peterson highlights how failure taught Ebright method, while Mr Weiherer praised both his balanced range (champion debater, canoeist, photographer) and genuine love of excellence.',
  },
  {
    id: 'eng-q-75',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 6: The Making of a Scientist',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Richard Ebright proved that the twelve tiny gold spots on a monarch pupa produce a hormone essential for full butterfly development.\nReason (R): Identifying that hormone’s chemical structure later helped Ebright and roommate James R. Wong see how a cell can read its DNA blueprint.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 1,
    explanation:
      'Both statements are true facts of his high-school-to-Harvard arc; while R describes the subsequent breakthrough triggered by studying X-ray photos of the chemical structure (not why the pupa needed the hormone), both milestones appear directly in NCERT.',
  },

  // Ch 7: The Necklace (3)
  {
    id: 'eng-q-76',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 7: The Necklace',
    type: 'mcq',
    marks: 1,
    question:
      'How did the Loisels raise the 36,000 francs demanded at the Palais-Royal shop to replace Mme Forestier’s necklace?',
    options: [
      'Borrowed the entire amount interest-free from the Minister of Public Instruction',
      'Used M. Loisel’s 18,000-franc inheritance from his father and borrowed the rest through ruinous deals with usurers and lenders',
      'Sold their suburban villa near Nanterre for 40,000 francs',
      'Confessed to Mme Forestier and shared a 500-franc jewel repair fee',
    ],
    correctIndex: 1,
    explanation:
      'Pride kept Matilda silent, committing the couple to a small garret, dismissed maid, and ten gruelling years of repayment.',
  },
  {
    id: 'eng-q-77',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 7: The Necklace',
    type: 'case-based',
    marks: 5,
    casePassage:
      'Mme Forestier was touched and took both her hands as she replied, "Oh! My poor Matilda! Mine were false. They were not worth over five hundred francs!"',
    question:
      'Which two character traits of Matilda caused this tragic downfall — and what unexpected virtue shines during her ten-year penance?',
    options: [
      'Laziness & dishonesty — yet clever bargaining at Champs-Élysées',
      'Social vanity & discontentment (refusing natural chic flowers M. Loisel suggested) caused her ruin, while fierce pride/honesty in paying every franc back without begging reveals tragic resilience',
      'Hatred of dancing & extreme stinginess',
      'Blind trust in cab drivers — plus poetic ambition',
    ],
    correctIndex: 1,
    explanation:
      'This balanced dual judgment hits every CBSE 5M/6M rubric point for Maupassant’s masterpiece.',
    commonMistake:
      'Saying Matilda spent 500 francs on the replacement — 500 francs was the cheap worth of Forestier’s PASTE original; the Loisels paid 36,000 francs!',
  },
  {
    id: 'eng-q-78',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 7: The Necklace',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Monsieur Loisel angrily blamed Matilda for the loss during their ten years of garret poverty.\nReason (R): Loving and contented even with "potpie", M. Loisel silently gave up his 400-franc gun savings, combed freezing Paris streets at night, and worked evening bookkeeping without reproach.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 3,
    explanation:
      'A is false, but R is true: M. Loisel stands as one of Maupassant’s most steadfast, uncomplaining foils.',
  },

  // Ch 8: Bholi (3)
  {
    id: 'eng-q-79',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 8: Bholi',
    type: 'mcq',
    marks: 1,
    question:
      'On her very first morning of school, why did young Bholi suddenly suspect school might be a BETTER place than home?',
    options: [
      'Her sisters Radha and Mangla gave her new silk saris.',
      'For the first time she was bathed, her dry hair oiled and combed, and dressed in a clean old dress of Champa’s — before seeing colourful pictures and hearing a kind voice.',
      'Her father promised to buy her a sweet shop in the new tin shed.',
      'Bishamber Nath sent flowers to welcome her.',
    ],
    correctIndex: 1,
    explanation:
      'Having feared being dragged out like old family cow Lakshmi, small clean care plus the soft-spoken teacher transformed her terror into hope.',
  },
  {
    id: 'eng-q-80',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 8: Bholi',
    type: 'case-based',
    marks: 5,
    casePassage:
      'With one swift movement of her hand, she flung the garland into the fire. She got up and threw away the veil. "Pitaji!" said Bholi in a clear loud voice; and her father, mother, sisters, brothers, relations and neighbours were startled to hear her speak without even the slightest stammer.',
    question:
      'What dual significance does the narrator attach to calling her "Sulekha" again right after this confrontation?',
    options: [
      'She secretly planned to marry another villager on the spot.',
      'Reclaiming her birth name signals total victory over childhood ridicule ("simpleton"), stammering fear, and patriarchal dowry extortion — becoming her teacher’s true "masterpiece".',
      'Ramlal disowned her immediately after paying Bishamber ₹5,000.',
      'Villagers mocked her schooling as useless levity.',
    ],
    correctIndex: 1,
    explanation:
      'Notice she both protects her ageing parents ("I will serve you and Mother") and commits to teaching in the very school that gave her courage.',
  },
  {
    id: 'eng-q-81',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 8: Bholi',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Ramlal proudly invited Bishamber Nath because he was a young, educated doctor from a progressive family.\nReason (R): Bishamber was an aged grocer from another village with a limp and grown-up children, accepted merely because he initially demanded no dowry for pockmarked Bholi.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 3,
    explanation:
      'A is false, but R is true: Ramlal’s double standard highlights how dowry pressure devalues daughters’ education and well-being.',
  },

  // Ch 9: The Book That Saved the Earth (3)
  {
    id: 'eng-q-82',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 9: The Book That Saved the Earth',
    type: 'mcq',
    marks: 1,
    question:
      'In Claire Boiko’s play, which specific 20th-century book literally stopped Think-Tank’s 2040 Martian invasion of Earth?',
    options: [
      'Encyclopaedia of Solar Rockets',
      'Mother Goose (a children’s book of nursery rhymes)',
      'History of Ancient Marsopolis',
      'The Adventures of Humpty Think-Tank',
    ],
    correctIndex: 1,
    explanation:
      'Set at the 25th-century Museum of Ancient History, the Historian reveals a dusty volume of Mother Goose terrified Mars’s vain commander.',
  },
  {
    id: 'eng-q-83',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 9: The Book That Saved the Earth',
    type: 'case-based',
    marks: 5,
    casePassage:
      'THINK-TANK : (screaming and holding his head) It’s me! It’s my Great and Mighty Balloon Brain. The Earthlings have seen me, and they’re after me. "Had a great fall!" — That means they plan to capture Mars Central Control and me!',
    question:
      'Contrast Think-Tank’s interpretation of nursery rhymes with Apprentice Noodle’s leadership style:',
    options: [
      'Think-Tank speaks wisely while Noodle panics about cows on the moon.',
      'Think-Tank’s colossal vanity + literal ignorance turn rhymes into terrifying warfare plots until he flees 100M miles to Alpha Centauri, while modest, diplomatic Noodle later builds friendly Earth-Mars ties in Marsopolis.',
      'Both Martians demand Earthlings stop eating sandwiches.',
      'Noodle secretly programmed the space probe to bomb Centerville Public Library.',
    ],
    correctIndex: 1,
    explanation:
      'Directly ties together character contrast (pompous pedantry vs quiet wisdom) with the anti-authoritarian comic resolution.',
  },
  {
    id: 'eng-q-84',
    subjectSlug: 'english',
    topicSlug: 'footprints-without-feet',
    subtopicTitle: 'Ch 9: The Book That Saved the Earth',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Think-Tank himself first discovered that Earthlings open books with their eyes after taking chemical vitamins.\nReason (R): Apprentice Noodle tactfully suggested "that trifling bit of data" as a "cloudy piece of information", letting vain Think-Tank claim the credit.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 3,
    explanation:
      'A is false, but R is true: every time Think-Tank reaches a smart answer (like eye communication or vitamins), Noodle politely whispers it first.',
  },

  // =========================================================================
  // Milestone 4: Section A Reading & Section B Grammar (18 questions, eng-q-85..102)
  // =========================================================================
  {
    id: 'eng-q-85',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Unseen Passages (Discursive)',
    type: 'case-based',
    marks: 5,
    casePassage:
      'In our hyper-connected age, every spare sixty seconds at a bus stop or traffic signal is instinctively colonised by glowing feeds. Yet neuroscientists warn that continuous partial attention leaves young minds paradoxically overstimulated yet creatively impoverished, because original insight germinates in quiet boredom rather than algorithmic novelty.',
    question:
      'What does the author imply by saying spare moments are "instinctively colonised by glowing feeds"?',
    options: [
      'Students use phones mainly to study historical colonisation maps outdoors.',
      'Reflexive screen scrolling automatically occupies every brief pause, squeezing out restful mental downtime needed for original thought.',
      'Smartphones physically damage batteries when opened near traffic signals.',
      'Social media networks legally prohibit offline reading during bus commutes.',
    ],
    correctIndex: 1,
    explanation:
      'Calling feeds "colonising" spare minutes highlights involuntary habit displacement of quiet, restorative daydreaming — consistent with the author’s warning against "continuous partial attention".',
    commonMistake:
      'Picking literal definitions of "colonised" or "traffic signal" instead of interpreting the metaphor in context.',
  },
  {
    id: 'eng-q-86',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Unseen Passages (Tone & Attitude)',
    type: 'mcq',
    marks: 1,
    question:
      'Which adjective BEST captures a writer’s tone when an unseen discursive essay acknowledges AI’s medical breakthroughs while still cautioning against unverified diagnostic shortcuts?',
    options: ['Cynical and dismissive', 'Measured and cautionary', 'Sardonic and mocking', 'Euphoric and uncritical'],
    correctIndex: 1,
    explanation:
      'Acknowledging real benefits alongside specific risks reflects a balanced ("measured") yet alert ("cautionary") academic tone — distinct from bitterness ("cynical") or mockery ("sardonic").',
  },
  {
    id: 'eng-q-87',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Unseen Passages (Case-Based Factual)',
    type: 'case-based',
    marks: 5,
    casePassage:
      'Survey of 1,200 Urban Class 10 Students (2025): Daily physical library visits rose from 14% to 29% only in schools pairing quiet reading periods with zero-phone zones, whereas schools merely displaying posters saw library use remain flat at 15%. Meanwhile, sleep under 6.5 hours fell from 48% to 31% among zero-phone evening households.',
    question:
      'Based strictly on the passage data, which conclusion is best supported?',
    options: [
      'Wall posters alone doubled daily library visits across urban schools.',
      'Structured environment changes (zero-phone zones + dedicated time) measurably boosted library habits more than passive posters alone.',
      'All 1,200 surveyed students eliminated digital textbooks completely.',
      'Zero-phone evenings increased sleep deprivation from 31% to 48%.',
    ],
    correctIndex: 1,
    explanation:
      'Comparing 14% -> 29% (structural rules) vs. flat 15% (posters only) cleanly proves environmental design outperformed passive slogans; watch the reversed numbers trap in Option D.',
  },
  {
    id: 'eng-q-88',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Unseen Passages (Reading Strategy)',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): In a 2-mark Unseen Passage inference question, copying two sentences verbatim rarely fetches full marks.\nReason (R): CBSE marking schemes reward concise synthesis in the student’s own words supported by specific textual reasoning within 30–40 words.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'Blindly lifting raw lines fails to answer "why" or "how" in inferential 2-mark questions; paraphrased synthesis anchored in evidence scores 2/2.',
  },
  {
    id: 'eng-q-89',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Grammar — Determiners',
    type: 'mcq',
    marks: 1,
    question:
      'Complete accurately: "Having waited for ______ hour in vain, ______ European journalist took a cab to the press club."',
    options: ['a / an', 'an / a', 'an / an', 'a / a'],
    correctIndex: 1,
    explanation:
      'Initial consonant/vowel SOUND governs a/an: silent-h "hour" starts with a vowel sound ("an hour"), while "European" starts with the consonant /y/ sound ("a European").',
  },
  {
    id: 'eng-q-90',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Grammar — Determiners (Quantifiers)',
    type: 'mcq',
    marks: 1,
    question:
      'Choose the determiner meaning "the entire small amount available": "Rather than complaining, Meera used ______ confidence she had gathered to address the assembly."',
    options: ['little', 'a little', 'the little', 'the few'],
    correctIndex: 2,
    explanation:
      '"Confidence" is uncountable and modified by a defining clause ("she had gathered"), requiring "the little" (all of that small quantity).',
  },
  {
    id: 'eng-q-91',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Grammar — Determiners',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): "Hardly any student forgot to bring the atlas" is grammatically accurate.\nReason (R): Adverbs such as "hardly", "scarcely", and "seldom" carry negative force, so they pair with "any" rather than "some".',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'Semi-negative adverbs attract negative-polarity "any" instead of "some".',
  },
  {
    id: 'eng-q-92',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Grammar — Tenses',
    type: 'mcq',
    marks: 1,
    question:
      'Fill in the blank: "No sooner had the chief guest stepped onto the podium than the choir ______ the welcome hymn."',
    options: ['has sung', 'sang', 'had sung', 'was singing'],
    correctIndex: 1,
    explanation:
      'With "No sooner had + S + V3... than...", the second immediate consecutive past action takes Simple Past ("sang").',
  },
  {
    id: 'eng-q-93',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Grammar — Tenses (Conditionals)',
    type: 'mcq',
    marks: 1,
    question:
      'Complete the Type-3 Conditional: "If the volunteers had reinforced the bund before midnight, floodwater ______ the library basement."',
    options: [
      'will not enter',
      'would not enter',
      'would not have entered',
      'had not entered',
    ],
    correctIndex: 2,
    explanation:
      'Type-3 Unreal Past ("If + had + V3") always pairs with "would (not) have + V3" in the result clause.',
  },
  {
    id: 'eng-q-94',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Grammar — Tenses (Editing)',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): In "Our debate team has won the regional trophy last November", "has won" must be edited to "won".\nReason (R): Specific finished past time markers ("last November", "yesterday", "two years ago") forbid Present Perfect.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'An explicit finished past time adverbial anchors the event purely in Simple Past ("won").',
  },
  {
    id: 'eng-q-95',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Grammar — Subject–Verb Agreement',
    type: 'mcq',
    marks: 1,
    question:
      'Select the grammatically sound sentence following CBSE Concord Rules:',
    options: [
      'Neither the science coordinator nor the two lab assistants has arrived yet.',
      'The principal, together with twelve prefects, are inspecting the stalls.',
      'Aarav is one of those debaters who always cite verified statistics.',
      'The number of electric buses in our town have tripled since 2023.',
    ],
    correctIndex: 2,
    explanation:
      'In Option C, "who" refers back to plural "debaters" -> plural verb "cite" is exact! Options A ("have arrived" by proximity), B ("is" by first subject), and D ("has tripled" for "The number of") contain classic traps.',
  },
  {
    id: 'eng-q-96',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Grammar — Subject–Verb Agreement',
    type: 'mcq',
    marks: 1,
    question:
      'Complete accurately: "Forty thousand rupees ______ a generous budget for the annual science exhibition, though every team of finalists ______ submitted receipts."',
    options: ['are / have', 'is / has', 'were / have', 'is / have'],
    correctIndex: 1,
    explanation:
      'A monetary sum treated as ONE budget takes singular "is", and singular head noun "every team" takes singular "has".',
  },
  {
    id: 'eng-q-97',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Grammar — Modals',
    type: 'mcq',
    marks: 1,
    question:
      'Noticeboard: "Entry passes are complimentary for senior citizens; therefore, retirees ______ queue at Ticket Counter 3."',
    options: ['must not', 'need not', 'cannot', 'ought not'],
    correctIndex: 1,
    explanation:
      'Complimentary entry means queuing is NOT required (optional), which requires "need not" — whereas "must not" implies strict legal prohibition.',
  },
  {
    id: 'eng-q-98',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Grammar — Modals (Past & Deduction)',
    type: 'mcq',
    marks: 1,
    question:
      'Fill in the blank expressing unfulfilled past responsibility: "Raghav ______ checked the microscope lens cap before locking the cupboard yesterday."',
    options: ['must be', 'should have', 'ought check', 'could been'],
    correctIndex: 1,
    explanation:
      '"Should have + V3" conveys moral reproach or advice about a duty neglected in the past.',
  },
  {
    id: 'eng-q-99',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Grammar — Modals',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): In "Walk carefully lest you should slip on the wet corridor", "should" is the standard formal pairing.\nReason (R): Conjunction "lest" carries an inherent negative warning meaning ("for fear that ... might not"), so "not" is omitted after it.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      '"Lest" always takes "should + V1" (positive verb form, zero "not").',
  },
  {
    id: 'eng-q-100',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Grammar — Reported Speech (Questions)',
    type: 'case-based',
    marks: 5,
    casePassage:
      'Dialogue:\nTraffic Warden: "Why did you park your bicycle outside the marked bay this morning?"\nStudent: "Sorry, sir! I did not notice the freshly painted yellow sign."',
    question:
      'Choose the error-free Reported Speech completion of the Traffic Warden’s question:',
    options: [
      'The traffic warden asked the student why had he parked his bicycle outside the marked bay that morning.',
      'The traffic warden asked the student that why he parked his bicycle outside the marked bay this morning.',
      'The traffic warden asked the student why he had parked his bicycle outside the marked bay that morning.',
      'The traffic warden asked the student why did he park his bicycle outside the marked bay that morning.',
    ],
    correctIndex: 2,
    explanation:
      'All four CBSE shifts work together: (1) NO "that", (2) statement word order ("he had parked", NOT "had he parked" or "did he park"), (3) Simple Past -> Past Perfect, (4) "this morning" -> "that morning".',
  },
  {
    id: 'eng-q-101',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Grammar — Reported Speech (Imperatives)',
    type: 'mcq',
    marks: 1,
    question:
      'Identify the ONLY grammatically valid conversion of: Mother said to Kabir, "Do not leave the geyser switched on overnight."',
    options: [
      'Mother forbade Kabir not to leave the geyser switched on overnight.',
      'Mother advised Kabir to do not leave the geyser switched on overnight.',
      'Mother forbade Kabir to leave the geyser switched on overnight.',
      'Mother warned Kabir that he does not leave the geyser switched on overnight.',
    ],
    correctIndex: 2,
    explanation:
      '"Forbade" already means "ordered NOT to", so pairing it with bare infinitive "to leave" is crisp and error-free; writing "forbade... not to" is a double-negative trap.',
  },
  {
    id: 'eng-q-102',
    subjectSlug: 'english',
    topicSlug: 'english-reading-grammar',
    subtopicTitle: 'Grammar — Reported Speech (Statements)',
    type: 'mcq',
    marks: 1,
    question:
      'Convert accurately: My geography teacher says, "The Himalayan rivers sustain nearly half of northern India’s plains."',
    options: [
      'My geography teacher says that the Himalayan rivers sustained nearly half of northern India’s plains.',
      'My geography teacher says that the Himalayan rivers sustain nearly half of northern India’s plains.',
      'My geography teacher said whether the Himalayan rivers sustain northern India’s plains.',
      'My geography teacher told that the Himalayan rivers are sustaining northern India’s plains.',
    ],
    correctIndex: 1,
    explanation:
      'Two independent guards keep "sustain" unchanged: (1) Present reporting verb "says", AND (2) enduring geographical truth.',
  },

  // =========================================================================
  // Milestone 4: Section B Writing Skills (12 questions, eng-q-103..114)
  // =========================================================================
  {
    id: 'eng-q-103',
    subjectSlug: 'english',
    topicSlug: 'english-writing-skills',
    subtopicTitle: 'Formal Letter (Format Rules)',
    type: 'mcq',
    marks: 1,
    question:
      'According to CBSE Class 10 block-left conventions, which trio of Formal Letter elements is 100% accurate?',
    options: [
      'Date: 14/11/26 | Subject: Long 3-line summary | Close: Your’s sincerely',
      'Date: 14 November 2026 | Subject: Crisp 6–8 words | Close: Yours truly (to Editor)',
      'Sender address on top-right | Salutation: Respected Sirji | Close: Yours lovingly',
      'Receiver address omitted | Subject underlined in red | Close: Your obediently',
    ],
    correctIndex: 1,
    explanation:
      'CBSE awards full Format marks only for left-aligned block structure, expanded date ("14 November 2026"), concise Subject, plain "Sir/Madam", and apostrophe-free "Yours truly / Yours sincerely".',
  },
  {
    id: 'eng-q-104',
    subjectSlug: 'english',
    topicSlug: 'english-writing-skills',
    subtopicTitle: 'Letter to the Editor (Content)',
    type: 'case-based',
    marks: 5,
    casePassage:
      'Prompt: As Kabir/Kavita of 19 Civil Lines, Jaipur, write a letter to the Editor of a national daily expressing concern over open burning of autumn leaves and plastic packaging in residential parks.',
    question:
      'Which closing appeal is MOST appropriate for the final paragraph of a Letter to the Editor?',
    options: [
      'Kindly send two municipal sanitation vans to our park by 9 a.m. tomorrow without fail.',
      'I request you to publish this concern in your esteemed daily so that residents adopt composting and municipal authorities enforce anti-burning bylaws.',
      'Please refund my municipal park maintenance tax within seven working days.',
      'Kindly grant our colony permission to cut down all park trees next month.',
    ],
    correctIndex: 1,
    explanation:
      'A newspaper Editor is a catalyst for public awareness and civic accountability — never a municipal contractor who directly clears garbage!',
    commonMistake:
      'Commanding the Editor ("You must clean our street immediately") drops Content & Organisation marks.',
  },
  {
    id: 'eng-q-105',
    subjectSlug: 'english',
    topicSlug: 'english-writing-skills',
    subtopicTitle: 'Complaint Letter (Defective Goods)',
    type: 'mcq',
    marks: 1,
    question:
      'Which combination of details is MANDATORY inside a commercial Complaint Letter about a malfunctioning school projector?',
    options: [
      'Student hobbies, picnic dates, and personal apology',
      'Invoice/Bill No., Date of Purchase, specific fault symptoms, warranty reference, and exact remedy (repair/replacement deadline)',
      'Newspaper circulation figures and poetry couplets',
      'Asking the Sales Manager to install a public library instead',
    ],
    correctIndex: 1,
    explanation:
      'Commercial complaints succeed on verifiable transaction evidence (Invoice No., Date, Defect specifics, Warranty period) paired with a polite, firm action deadline.',
  },
  {
    id: 'eng-q-106',
    subjectSlug: 'english',
    topicSlug: 'english-writing-skills',
    subtopicTitle: 'Placing an Order Letter',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): An Order Letter from a School Sports Secretary must state the delivery deadline, institutional discount, and condition for returning damaged items.\nReason (R): Clear commercial specifications protect the institution against delayed consignments, billing disputes, or faulty sports gear.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'Without itemized quantities, agreed institutional discount, delivery deadline, and replacement terms, an order letter remains legally and practically incomplete.',
  },
  {
    id: 'eng-q-107',
    subjectSlug: 'english',
    topicSlug: 'english-writing-skills',
    subtopicTitle: 'Letter of Inquiry',
    type: 'mcq',
    marks: 1,
    question:
      'When drafting a Letter of Inquiry for a weekend Robotics & AI Boot Camp, which structure earns full Organisation (1M) + Content (2M) marks?',
    options: [
      'Writing one 250-word unbroken paragraph listing childhood memories.',
      'Citing the advertisement/brochure source, clearly bulleting key queries (duration, batch timings, fee structure, certification, prerequisites), and requesting the prospectus.',
      'Demanding immediate cash refund before enrolling.',
      'Addressing the letter "To Whom It May Concern" with no sender address.',
    ],
    correctIndex: 1,
    explanation:
      'Organised, specific queries grouped neatly under a clear reference sentence earn immediate examiner appreciation.',
  },
  {
    id: 'eng-q-108',
    subjectSlug: 'english',
    topicSlug: 'english-writing-skills',
    subtopicTitle: 'Analytical Paragraph (Structure & Tone)',
    type: 'mcq',
    marks: 1,
    question:
      'Which opening sentence follows CBSE Analytical Paragraph standards BEST for a bar graph comparing Metro vs. Small-Town rooftop solar installations (2020–2025)?',
    options: [
      'Dear Examiner, today I am going to tell you why we all should buy solar panels.',
      'The provided bar graph illustrates rooftop solar adoption across Metro and Small-Town households between 2020 and 2025, revealing sustained growth in both segments.',
      'In 2020 Metro was 18% and Small-Town was 9% and in 2021 it was 22% and 12% and 2022 was 29%.',
      'I believe electricity boards are lazy not to subsidise panels everywhere.',
    ],
    correctIndex: 1,
    explanation:
      'Option B delivers a crisp, objective 3rd-person overview naming the visual format, variables, and overarching trend without subjective "I/we" chatter or mechanical number-listing.',
  },
  {
    id: 'eng-q-109',
    subjectSlug: 'english',
    topicSlug: 'english-writing-skills',
    subtopicTitle: 'Analytical Paragraph (Data Synthesis)',
    type: 'case-based',
    marks: 5,
    casePassage:
      'Survey Data — Teen Evening Activity Hours (% of Daily Free Time): Metro Cities -> Digital Entertainment 46%, Outdoor Sports 18%, Print Reading 11%, Hobbies/Music 25%. Tier-2 Towns -> Digital Entertainment 33%, Outdoor Sports 32%, Print Reading 17%, Hobbies/Music 18%.',
    question:
      'Which analytical sentence synthesises the data MOST effectively using proportional & comparative vocabulary?',
    options: [
      'Teens in both cities wasted time every evening.',
      'While digital entertainment commands the lion’s share in Metro cities (nearly half at 46%), Tier-2 teens allocate almost equal time to outdoor sports (32%) and screens (33%).',
      'Metro hobbies are 25% and Tier-2 hobbies are 18% and print reading is 11% and 17%.',
      'Outdoor sports should be made compulsory by schools at 5 p.m. daily.',
    ],
    correctIndex: 1,
    explanation:
      'Notice how Option B compares contrasting proportions ("lion’s share... nearly half" vs "almost equal") cleanly while remaining strictly anchored in data.',
  },
  {
    id: 'eng-q-110',
    subjectSlug: 'english',
    topicSlug: 'english-writing-skills',
    subtopicTitle: 'Analytical Paragraph (SWOT Cues)',
    type: 'case-based',
    marks: 5,
    casePassage:
      'SWOT Cues for Campus Rainwater Harvesting Plan: Strengths — low annual upkeep, cuts tanker dependency 40%; Weaknesses — high initial civil piping cost; Opportunities — state green-school grant subsidy; Threats — clogging during heavy leaf-fall without quarterly filter checks.',
    question:
      'How should a student frame the concluding line of this SWOT Analytical Paragraph?',
    options: [
      'Therefore, the Principal must immediately sanction rupees five lakh today.',
      'Overall, the long-term water savings and grant eligibility outweigh capital hurdles provided seasonal filter maintenance prevents system clogging.',
      'In conclusion, rain is good and students love monsoon holidays.',
      'Strengths are good, weaknesses are bad, and threats should not exist.',
    ],
    correctIndex: 1,
    explanation:
      'Strong SWOT conclusions weigh net trade-offs objectively and link risk mitigation ("seasonal filter maintenance") directly to the given cues.',
  },
  {
    id: 'eng-q-111',
    subjectSlug: 'english',
    topicSlug: 'english-writing-skills',
    subtopicTitle: 'Analytical Paragraph (Common Mistakes)',
    type: 'assertion-reason',
    marks: 1,
    question:
      'Assertion (A): Breaking an Analytical Paragraph into four separate mini-paragraphs with bullet headings hurts Organisation marks.\nReason (R): CBSE expects a single cohesive 100–120 word paragraph using smooth transition linkers between overview, data comparison, and conclusion.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is NOT the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    correctIndex: 0,
    explanation:
      'By definition, an Analytical Paragraph is ONE unified paragraph using cohesive linkers ("Whereas", "Conversely", "In stark contrast", "Overall") rather than a multi-heading report.',
  },
  {
    id: 'eng-q-112',
    subjectSlug: 'english',
    topicSlug: 'english-writing-skills',
    subtopicTitle: 'Writing Skills — Word Limit & Marks',
    type: 'mcq',
    marks: 1,
    question:
      'Which marks breakdown matches Official CBSE Class 10 English (Code 184) Section B Creative Writing?',
    options: [
      'Formal Letter (10 Marks, 250 words) + Analytical Paragraph (10 Marks, 250 words)',
      'Formal Letter (5 Marks, 100–120 words) + Analytical Paragraph (5 Marks, 100–120 words) = 10 Marks total',
      'Informal Letter (5 Marks) + Story Writing (5 Marks)',
      'Notice Writing (4 Marks) + Advertisement (6 Marks)',
    ],
    correctIndex: 1,
    explanation:
      'Unlike Hindi Course B (which covers Anuchchhed/Suchna/Vigyapan/Email/Laghukatha), English Code 184 Section B Writing carries 10 Marks: one 5M Formal Letter + one 5M Analytical Paragraph (both 100–120 words, each with an A/B choice).',
  },
  {
    id: 'eng-q-113',
    subjectSlug: 'english',
    topicSlug: 'english-writing-skills',
    subtopicTitle: '80-Mark Board Exam Strategy',
    type: 'mcq',
    marks: 1,
    question:
      'In the CBSE Code 184 Question Paper, how many total Grammar items appear vs. how many should you attempt?',
    options: [
      'Attempt 8 out of 10 (16 Marks)',
      'Attempt ANY 10 out of 12 (10 Marks total)',
      'Attempt all 15 compulsory items (15 Marks)',
      'Attempt 5 out of 6 (5 Marks)',
    ],
    correctIndex: 1,
    explanation:
      'Section B Grammar prints 12 diverse 1-mark items and instructs candidates to attempt ANY 10 — always pick the 10 items you verify with 100% certainty.',
  },
  {
    id: 'eng-q-114',
    subjectSlug: 'english',
    topicSlug: 'english-writing-skills',
    subtopicTitle: '80-Mark 180-Min Pacing Plan',
    type: 'mcq',
    marks: 1,
    question:
      'Which time allocation keeps adequate margin for BOTH 6-mark Literature answers and a 15-minute final audit?',
    options: [
      'Section A Reading: 75 min | Section B: 60 min | Section C Literature: 45 min | Audit: 0 min',
      'Section A Reading: 40 min | Section B Grammar & Writing: 40 min | Section C Literature: 85 min | Revision Audit: 15 min',
      'Section C Literature first for 150 min | Reading & Writing rushed in last 30 min',
      'Spend 45 min rewriting the Formal Letter three times',
    ],
    correctIndex: 1,
    explanation:
      '40m Reading (20M) + 40m Grammar & Writing (20M) + 85m Literature (40M) = 165m, leaving 15 full minutes inside 180m for Subject–Verb Concord, spelling, and underlining.',
  },
];
