import { Subtopic } from '../../../types/curriculum';

export const englishProse09: Subtopic = {
  id: 'eng-ff-prose-09',
  slug: 'the-proposal',
  title: 'Ch 9: The Proposal',
  subtitle:
    'Anton Chekhov (One-Act Play / Farce) | Chubukov, Natalya & Lomov — Oxen Meadows, Guess vs. Squeezer & aristocratic satire',
  estimatedMinutes: 40,
  difficulty: 'Board Mastery',
  ncertSection: 'First Flight — Chapter 9 (Prose / Drama)',
  learningObjectives: [
    'Analyse Anton Chekhov’s one-act farce as a social satire on nineteenth-century Russian landowning families who view marriage as an economic bargain.',
    'Trace how two trivial property quarrels—Oxen Meadows and hunting dogs Guess vs. Squeezer—repeatedly derail Lomov’s marriage proposal.',
    'Evaluate the comic contrast between superficial aristocratic politeness ("honoured", "my angel") and vulgar mudslinging ("pettifogger", "turnip-ghost").',
    'Convert direct play dialogue into indirect reported speech accurately, reflecting NCERT Thinking about Language rules and reporting verbs.',
  ],
  keywords: [
    'Anton Chekhov',
    'The Proposal',
    'Ivan Vassilevitch Lomov',
    'Natalya Stepanovna',
    'Stepan Stepanovitch Chubukov',
    'Oxen Meadows',
    'Guess vs. Squeezer',
    'One-Act Farce',
  ],
  sections: [
    {
      id: 'prose-09-ncert-glance',
      title: 'NCERT Reference, Quick Glance & Plot Arc',
      blocks: [
        {
          type: 'ncert-reference',
          chapterKey: 'ff-prose-09',
          title: 'Chapter 9: The Proposal — Original NCERT Text',
          bookName: 'First Flight — Prose',
          pdfPath: '/ncert/english/jeff109.pdf',
          pdfStartPage: 3,
          pdfEndPage: 15,
          note: 'Anton Chekhov’s one-act farce (originally written in Russian in 1888–89 as "Predlozheniye"), highlighting greed, vanity, and comic hysteria.',
        },
        {
          type: 'quick-summary',
          title: '60-Second Exam Glance',
          bullets: [
            'Thirty-five-year-old hypochondriac landowner Ivan Vassilevitch Lomov visits neighbour Stepan Stepanovitch Chubukov in formal dress-jacket and white gloves to propose to 25-year-old Natalya.',
            'Chubukov initially suspects Lomov came to borrow money, then joyfully embraces him upon hearing of the proposal—yet tells Natalya a "merchant" has come for his goods.',
            'While trying to propose, Lomov politely mentions "my Oxen Meadows" (5 dessiatins, ~300 roubles); Natalya erupts, claiming ownership for 300 years, and Chubukov joins a shouting match of ancestral insults until Lomov staggers out.',
            'Learning Lomov had come to propose, Natalya collapses into hysterics demanding him back; she concedes Oxen Meadows—only to spark a second quarrel over whose hunting dog is superior: Lomov’s lame Guess (125 roubles) or Chubukov’s overshot Squeezer (85 roubles).',
            'Overwhelmed by palpitations, a twitching eyebrow, and a numb foot, Lomov faints in an armchair; terrified he is dead, Natalya wails until he revives.',
            'Board Exam Focus: Chubukov forces their hands together shouting "Hurry up and get married... Kiss and be damned to you!", and even as the couple kisses, they immediately resume screaming "Better!" vs. "Worse!" over their dogs while Chubukov yells "Champagne!"',
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'Title Justification, Comic Irony & Must-Memorize Facts',
          body: 'The title "The Proposal" is bitingly ironic: although Lomov visits formally dressed to propose marriage to Natalya, neither love nor romance ever enters the room. Lomov seeks a "quiet and regular life" with a competent housekeeper because he is 35; Chubukov wants a wealthy neighbour off his hands ("what a burden, Lord, to be the father of a grown-up daughter!"); and Natalya wants a husband so desperately she turns hysterical—yet neither can resist fighting over tiny parcels of land and flawed dogs.',
          bullets: [
            'Characters & Ages: Lomov = 35 ("a critical age", large, hearty, very suspicious hypochondriac); Natalya = 25 ("excellent housekeeper, not bad-looking, well-educated", appears in apron and neglige shelling peas); Chubukov = landowner, quick-tempered hypocrite.',
            'Physical Symptoms of Lomov: Palpitations, trembling lips, twitch in right eyebrow, pull in left side shooting to shoulder and head (jumps up 20 times in bed), foot goes numb/asleep, sees stars and mist, faints.',
            'Dispute 1 — Oxen Meadows: 5 dessiatins (~13.5 acres), worth ~300 roubles, wedged between Chubukovs’ birchwoods and Burnt Marsh. Lomov cites 40 years’ free use for brick-making by peasants; Natalya claims nearly 300 years of ownership (and recalls lending her threshing-machine till November).',
            'Dispute 2 — Guess vs. Squeezer: Guess (lame; bought from Mironov for 125 roubles; Chubukov calls him old & short in muzzle; ran neck-and-neck with Count’s dog at Marusinsky hunt) vs. Squeezer (bought for 85 roubles; son of Harness and Chisels; overshot jaw per Lomov; whipped by Count’s whipper-in and left a verst behind worrying a sheep).',
            'Stagecraft & Satire: Chekhov uses rapid asides, frantic water-drinking, fainting, and "Champagne!" bookending mutual insults to expose aristocratic pettiness.',
          ],
        },
        {
          type: 'steps',
          title: 'Plot & Scene Progression',
          items: [
            {
              label: '1. Formal Arrival & Hypocritical Welcome',
              detail:
                'Lomov arrives in evening dress and white gloves. Suspecting a loan request, Chubukov privately vows not to lend a kopeck, then explodes with tears of joy upon learning it is a marriage proposal.',
              example: 'Chubukov calls Lomov "my angel" yet announces him to Natalya as a "merchant".',
            },
            {
              label: '2. Lomov’s Soliloquy on Practical Marriage',
              detail:
                'Alone for a moment, Lomov convinces himself not to seek "real love" or an ideal, since at 35 with palpitations and sleeplessness he needs Natalya as an orderly housekeeper.',
              example: 'Establishes marriage as cold calculation rather than romance.',
            },
            {
              label: '3. Quarrel 1: Oxen Meadows & Ancestral Mudslinging',
              detail:
                'Lomov’s polite preamble collapses the instant he says "my Oxen Meadows". Natalya and Chubukov trade property history and family slurs (embezzlement, lunacy, drinking, runaway aunt) until Lomov staggers out.',
              example: 'A 300-rouble strip eclipses a major estate marriage.',
            },
            {
              label: '4. Hysterical Reversal & False Truce',
              detail:
                'Hearing why Lomov came, Natalya screams in hysterics and forces her father to drag him back. She abruptly concedes Oxen Meadows and steers talk to shooting after harvest.',
              example: 'Comic turnaround exposes Natalya’s desperation beneath her pride.',
            },
            {
              label: '5. Quarrel 2: Guess vs. Squeezer & Lomov’s Collapse',
              detail:
                'Sympathy over Guess’s lameness turns instantly into bitter rivalry over Squeezer’s overshot jaw vs. Guess’s age. Personal abuse resumes until Lomov faints into an armchair.',
              example: 'Natalya believes he is dead; Chubukov begs for a knife or pistol.',
            },
            {
              label: '6. Forced Betrothal Amid Unresolved Bickering',
              detail:
                'As Lomov revives seeing stars, Chubukov shoves their hands together and demands champagne. Barely engaged, the couple resumes yelling "Better!" / "Worse!" as the curtain falls.',
              example: 'Farcical closing proves their married life will be perpetual quarrelling.',
            },
          ],
        },
      ],
    },
    {
      id: 'prose-09-rtc-extracts',
      title: 'High-Probability 5-Mark RTC Extracts',
      blocks: [
        {
          type: 'poetic-stanza',
          lang: 'en',
          passageMode: 'prose',
          stanzaLabel: 'Extract 1: Lomov’s Unromantic Soliloquy on Turning Thirty-Five',
          stanzaText:
            'LOMOV: It’s cold... I’m trembling all over, just as if I’d got an examination before me. The great thing is, I must have my mind made up. If I give myself time to think, to hesitate, to talk a lot, to look for an ideal, or for real love, then I’ll never get married. Brr... It’s cold! Natalya Stepanovna is an excellent housekeeper, not bad-looking, well-educated. What more do I want? But I’m getting a noise in my ears from excitement. [Drinks] And it’s impossible for me not to marry. In the first place, I’m already 35 — a critical age, so to speak. In the second place, I ought to lead a quiet and regular life. I suffer from palpitations, I’m excitable and always getting awfully upset; at this very moment my lips are trembling, and there’s a twitch in my right eyebrow.',
          dialectBadge: 'Lomov (Soliloquy) | Nervous, Pragmatic & Hypochondriac',
          prasang:
            'Left alone in Chubukov’s drawing-room while Natalya is summoned, Lomov speaks his inner doubts aloud, revealing his true motives for seeking marriage.',
          bhavarthHindi:
            'CBSE Value Points: (1) Satire on loveless aristocratic marriages: Lomov explicitly rejects "an ideal" or "real love" in favour of practicality. (2) Note his checklist of Natalya’s merits ("excellent housekeeper, not bad-looking, well-educated") and his self-centred health reasons (age 35, need for a quiet, regular life). (3) Comic contrast between wanting a "quiet" life and being an anxious hypochondriac.',
          englishHelper:
            '5-Mark CBSE RTC Blueprint:\n(i) How does Lomov describe his nervous condition before Natalya enters? [1M]\nAns: He says he is cold and trembling all over as if facing an examination, has a noise in his ears, trembling lips, and a twitch in his right eyebrow.\n(ii) Why does Lomov decide against waiting for "an ideal, or for real love"? [2M]\nAns: He fears that if he pauses to hesitate, overthink, or search for ideal romance, he will never marry; at thirty-five—what he calls a critical age—he wants practical companionship immediately.\n(iii) What three qualities make Natalya Stepanovna suitable in Lomov’s eyes? [1M]\nAns: She is an excellent housekeeper, not bad-looking, and well-educated.\n(iv) Find a word in the speech meaning "abnormally rapid or irregular heartbeats". [1M]\nAns: "palpitations".',
          poeticDevices: [
            'Simile: "just as if I’d got an examination before me" turns a romantic proposal into a dreaded school test.',
            'Comic Irony: Lomov seeks marriage for "a quiet and regular life", yet spends the entire play shouting, weeping, and fainting in hysterics.',
            'Stage Direction & Dramatic Soliloquy: "[Drinks]" plus broken pauses ("It’s cold...", "Brr...") expose his jittery physical state directly to the audience.',
          ],
          words: [
            {
              word: 'trembling',
              englishMeaning: 'Shaking uncontrollably from cold, fear, or nervous excitement.',
              synonym: 'quivering / shivering',
              grammarNote: 'Present participle in present continuous ("I’m trembling").',
              exampleSentence: 'Lomov stood trembling in his dress-jacket like a nervous student.',
            },
            {
              word: 'hesitate',
              englishMeaning: 'Pause indecisively before acting or speaking.',
              synonym: 'waver / falter',
              grammarNote: 'Infinitive verb ("to hesitate").',
              exampleSentence: 'Afraid he would back out, Lomov urged himself not to hesitate.',
            },
            {
              word: 'ideal',
              englishMeaning: 'A person or standard considered perfect in every way.',
              synonym: 'paragon / perfection',
              grammarNote: 'Countable noun ("look for an ideal").',
              exampleSentence: 'Lomov abandons searching for a romantic ideal at thirty-five.',
            },
            {
              word: 'critical',
              englishMeaning: 'Crucial, decisive, or marking a serious turning point.',
              synonym: 'decisive / pivotal',
              grammarNote: 'Adjective modifying "age".',
              exampleSentence: 'At thirty-five, Lomov felt he had reached a critical age to settle down.',
            },
            {
              word: 'palpitations',
              englishMeaning: 'Noticeably rapid, fluttering, or pounding beats of the heart.',
              synonym: 'racing heartbeat / throbbing',
              grammarNote: 'Plural noun commonly used for cardiac anxiety.',
              exampleSentence: 'Every argument triggered violent palpitations in Lomov’s chest.',
            },
            {
              word: 'excitable',
              englishMeaning: 'Easily agitated, provoked, or stirred into emotional turmoil.',
              synonym: 'high-strung / volatile',
              grammarNote: 'Predicate adjective.',
              exampleSentence: 'Being naturally excitable, Lomov loses self-control over trivial disputes.',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          lang: 'en',
          passageMode: 'prose',
          stanzaLabel: 'Extract 2: Oxen Meadows — Principle, Pride & Escalating Fury',
          stanzaText:
            'NATALYA: No, you’re simply joking, or making fun of me. What a surprise! We’ve had the land for nearly three hundred years, and then we’re suddenly told that it isn’t ours! Ivan Vassilevitch, I can hardly believe my own ears. These Meadows aren’t worth much to me. They only come to five dessiatins, and are worth perhaps 300 roubles, but I can’t stand unfairness. Say what you will, I can’t stand unfairness.\nLOMOV: Hear me out, I implore you! The peasants of your father’s grandfather, as I have already had the honour of explaining to you, used to bake bricks for my aunt’s grandmother. Now my aunt’s grandmother, wishing to make them a pleasant...\nNATALYA: I can’t make head or tail of all this about aunts and grandfathers and grandmothers. The Meadows are ours, that’s all.\nLOMOV: Mine.\nNATALYA: Ours! You can go on proving it for two days on end, you can go and put on fifteen dress jackets, but I tell you they’re ours, ours, ours! I don’t want anything of yours and I don’t want to give anything of mine. So there!\nLOMOV: Natalya Stepanovna, I don’t want the Meadows, but I am acting on principle. If you like, I’ll make you a present of them.\nNATALYA: I can make you a present of them myself, because they’re mine! Your behaviour, Ivan Vassilevitch, is strange, to say the least! Up to this we have always thought of you as a good neighbour, a friend; last year we lent you our threshing-machine, although on that account we had to put off our own threshing till November, but you behave to us as if we were gypsies. Giving me my own land, indeed! No, really, that’s not at all neighbourly! In my opinion, it’s even impudent, if you want to know.\nLOMOV: Then you make out that I’m a landgrabber? Madam, never in my life have I grabbed anybody else’s land and I shan’t allow anybody to accuse me of having done so. [Quickly steps to the carafe and drinks more water] Oxen Meadows are mine!',
          dialectBadge: 'Natalya & Lomov | Indignant, Stubborn & Rapidly Escalating',
          prasang:
            'While attempting to propose, Lomov casually calls Oxen Meadows his own. Natalya immediately disputes him, turning a friendly courtship visit into a fierce property battle.',
          bhavarthHindi:
            'CBSE Value Points: (1) Both insist the land is practically worthless ("only come to five dessiatins... 300 roubles"; "I don’t want the Meadows"), proving vanity and "principle" outweigh financial value. (2) Rapid stichomythia ("Mine." / "Ours!") accelerates comic tension. (3) Natalya’s sarcastic jab at his "fifteen dress jackets" mocks his formal proposal outfit.',
          englishHelper:
            '5-Mark CBSE RTC Blueprint:\n(i) According to Natalya, what is the size and approximate monetary value of Oxen Meadows? [1M]\nAns: The Meadows measure five dessiatins and are worth perhaps 300 roubles.\n(ii) If neither Natalya nor Lomov values the land highly, why do they quarrel so fiercely? [2M]\nAns: Both turn ownership into a point of stubborn pride: Natalya insists she cannot tolerate "unfairness", while Lomov declares he is "acting on principle" and refuses to be called a landgrabber.\n(iii) How does Natalya remind Lomov of past neighbourly goodwill, and what insult does she hurl at him? [1M]\nAns: She reminds him they lent him their threshing-machine the previous year—delaying their own threshing until November—and calls his offer to gift her own land "impudent".\n(iv) Find an idiom in the dialogue meaning "unable to understand anything at all". [1M]\nAns: "can’t make head or tail of".',
          poeticDevices: [
            'Hyperbole & Sarcasm: "put on fifteen dress jackets" ridicules Lomov’s formal attire while mocking his legalistic stubbornness.',
            'Repetition / Stichomythia: "ours, ours, ours!" and rapid single-word exchanges ("Mine." / "Ours!") heighten farcical rhythm.',
            'Dramatic Irony: Both fight savagely over 300-rouble meadows right before a marriage that would unite both estates anyway.',
          ],
          words: [
            {
              word: 'dessiatins',
              englishMeaning: 'Historical Russian land measurement units (one dessiatin equals roughly 2.7 acres).',
              synonym: 'Russian land units',
              grammarNote: 'Plural Russian loanword noun.',
              exampleSentence: 'Five dessiatins of meadowland sparked an hour of shouting.',
            },
            {
              word: 'roubles',
              englishMeaning: 'The basic monetary currency unit of Russia.',
              synonym: 'Russian currency',
              grammarNote: 'Plural noun.',
              exampleSentence: 'Oxen Meadows were valued at scarcely three hundred roubles.',
            },
            {
              word: 'implore',
              englishMeaning: 'To beg someone earnestly and desperately to listen or agree.',
              synonym: 'beseech / plead with',
              grammarNote: 'Formal transitive verb.',
              exampleSentence: 'Unable to finish his sentence, Lomov cried, "Hear me out, I implore you!"',
            },
            {
              word: 'principle',
              englishMeaning: 'A fundamental rule of rightness or personal integrity one refuses to compromise.',
              synonym: 'moral rule / conviction',
              grammarNote: 'Abstract noun inside idiom "acting on principle".',
              exampleSentence: 'Even when offering the land as a gift, Lomov claimed he stood on principle.',
            },
            {
              word: 'impudent',
              englishMeaning: 'Shamelessly bold, disrespectful, and lacking proper courtesy.',
              synonym: 'insolent / brazen',
              grammarNote: 'Adjective describing Lomov’s offer.',
              exampleSentence: 'Natalya branded his offer to gift her family’s land impudent.',
            },
            {
              word: 'carafe',
              englishMeaning: 'A wide-mouthed glass bottle or decanter used for serving water or wine.',
              synonym: 'decanter / pitcher',
              grammarNote: 'Noun inside stage direction.',
              exampleSentence: 'Flushed with rage, Lomov rushed to the carafe for another glass of water.',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          lang: 'en',
          passageMode: 'prose',
          stanzaLabel: 'Extract 3: Forced Betrothal & The Unending Dog Fight Over Champagne',
          stanzaText:
            'CHUBUKOV: Hurry up and get married and — well, to the devil with you! She’s willing! [He puts Lomov’s hand into his daughter’s] She’s willing and all that. I give you my blessing and so on. Only leave me in peace!\nLOMOV: [getting up] Eh? What? To whom?\nCHUBUKOV: She’s willing! Well? Kiss and be damned to you!\nNATALYA: [wails] He’s alive... Yes, yes, I’m willing.\nCHUBUKOV: Kiss each other!\nLOMOV: Eh? Kiss whom? [They kiss] Very nice, too. Excuse me, what’s it all about? Oh, now I understand ... my heart... stars... I’m happy. Natalya Stepanovna... [Kisses her hand] My foot’s gone to sleep.\nNATALYA: I... I’m happy too...\nCHUBUKOV: What a weight off my shoulders, ouf!\nNATALYA: But, still you will admit now that Guess is worse than Squeezer.\nLOMOV: Better!\nNATALYA: Worse!\nCHUBUKOV: Well, that’s a way to start your family bliss! Have some champagne!\nLOMOV: He’s better!\nNATALYA: Worse! Worse! Worse!\nCHUBUKOV: [trying to shout her down] Champagne! Champagne!\n[CURTAIN]',
          dialectBadge: 'Chubukov, Lomov & Natalya | Farcical, Chaotic & Satirical Climax',
          prasang:
            'The final moments of Chekhov’s one-act play: Lomov revives from fainting, Chubukov hastily forces the engagement through before another quarrel breaks out, yet the dog fight instantly erupts again.',
          bhavarthHindi:
            'CBSE Value Points: (1) Farce at its peak: Chubukov blesses them with curses ("to the devil with you!", "Kiss and be damned to you!") merely to offload responsibility ("What a weight off my shoulders, ouf!"). (2) Even during the romantic climax, Lomov complains "My foot’s gone to sleep." (3) The circular ending—"Better!" / "Worse!" drowned by "Champagne!"—proves marriage will not cure their quarrelsome vanity.',
          englishHelper:
            '5-Mark CBSE RTC Blueprint:\n(i) Why does Chubukov hurry to join Lomov’s and Natalya’s hands the moment Lomov regains consciousness? [1M]\nAns: Relieved that Lomov is alive and eager to rid himself of the burden of a grown-up daughter, Chubukov rushes the betrothal before they can fight again.\n(ii) What reveals Chubukov’s true relief and lack of tender sentiment in his "blessing"? [2M]\nAns: He mixes blessings with exasperated curses ("well, to the devil with you!", "Kiss and be damned to you!"), begs them to "leave me in peace", and sighs "What a weight off my shoulders, ouf!"\n(iii) How does the play’s ending prove that the couple’s marriage will remain stormy? [1M]\nAns: Seconds after kissing and claiming to be happy, Natalya insists Guess is worse than Squeezer and both start yelling "Better!" and "Worse!" again as the curtain falls.\n(iv) Explain the irony in Chubukov’s remark, "Well, that’s a way to start your family bliss!" [1M]\nAns: He uses the word "bliss" (supreme happiness) sarcastically while the newly engaged couple is already shouting furiously over their dogs.',
          poeticDevices: [
            'Sarcasm / Verbal Irony: "start your family bliss!" mocks the deafening argument erupting two seconds after their engagement kiss.',
            'Farcical Antithesis: Mixing sacred ritual ("blessing", "kiss") with impatience and curses ("to the devil with you", "be damned to you") strips the proposal of romance.',
            'Circular Structure: The curtain drops mid-argument ("Champagne! Champagne!"), leaving the dispute unresolved like life in Chekhov’s satirical world.',
          ],
          words: [
            {
              word: 'willing',
              englishMeaning: 'Ready and consenting to agree to something.',
              synonym: 'consenting / agreeable',
              grammarNote: 'Predicate adjective.',
              exampleSentence: 'Between wails, Natalya cried out that she was willing to marry Lomov.',
            },
            {
              word: 'blessing',
              englishMeaning: 'Formal parental approval, goodwill, and invocation of good fortune.',
              synonym: 'approval / benediction',
              grammarNote: 'Countable noun.',
              exampleSentence: 'Chubukov hastily gave his blessing just to restore peace.',
            },
            {
              word: 'wails',
              englishMeaning: 'Utters prolonged, high-pitched cries of grief, panic, or distress.',
              synonym: 'sobs / shrieks',
              grammarNote: 'Third-person singular present verb inside stage direction.',
              exampleSentence: 'Believing Lomov dead, Natalya wails helplessly in the armchair.',
            },
            {
              word: 'admit',
              englishMeaning: 'Confess or concede grudgingly that an opponent’s claim is true.',
              synonym: 'concede / acknowledge',
              grammarNote: 'Bare infinitive verb after modal "will".',
              exampleSentence: 'Even after kissing, Natalya demanded that Lomov admit Squeezer was superior.',
            },
            {
              word: 'bliss',
              englishMeaning: 'Complete joy, serenity, and heavenly happiness.',
              synonym: 'felicity / ecstasy',
              grammarNote: 'Abstract noun used ironically by Chubukov.',
              exampleSentence: 'Their shouting mocked any expectation of quiet family bliss.',
            },
            {
              word: 'champagne',
              englishMeaning: 'Sparkling celebratory wine traditionally toasted at engagements and weddings.',
              synonym: 'sparkling wine',
              grammarNote: 'Uncountable noun shouted as a stage refrain.',
              exampleSentence: 'Chubukov shouted for champagne to drown out their endless bickering.',
            },
          ],
        },
      ],
    },
    {
      id: 'prose-09-characters-traps',
      title: 'Character Sketches & Examiner Mistake Alerts',
      blocks: [
        {
          type: 'table',
          caption: 'Character Sketches & Board-Ready Power Adjectives',
          headers: [
            'Character',
            '4–5 Power Adjectives',
            'Textual Evidence / Key Actions',
            'Thematic Significance',
          ],
          rows: [
            [
              'Ivan Vassilevitch Lomov',
              'Nervous, hypochondriac, litigious, calculating, thin-skinned',
              'Proposes at 35 for a quiet life rather than love; obsesses over palpitations, eyebrow twitches, and a numb foot; threatens court over 300-rouble Meadows; drinks water frantically and faints.',
              'Satirises wealthy landowners who turn courtship into petty legalism and are physically undone by their own pettiness.',
            ],
            [
              'Natalya Stepanovna',
              'Pragmatic, argumentative, prideful, desperate, volatile',
              'Shells peas in an apron and frets over wet hay; screams over Oxen Meadows and Guess vs. Squeezer; collapses into hysterics on hearing Lomov came to propose; restarts the dog argument right after kissing.',
              'Exposes the clash between practical estate-management sharpness and social pressure on an unmarried 25-year-old woman.',
            ],
            [
              'Stepan Stepanovitch Chubukov',
              'Hypocritical, mercenary, hot-tempered, dramatic, opportunistic',
              'Fears Lomov wants a loan, then showers him with fake endearments ("my angel", "my treasure") before introducing him as a "merchant"; hurls grotesque insults ("stuffed sausage", "pettifogger"); forces marriage with champagne.',
              'Embodies bourgeois greed and double-faced hospitality—adoring a neighbour’s money while despising his person.',
            ],
          ],
        },
        {
          type: 'notebook-mistake',
          studentName: 'Siddharth',
          title: 'Trap 1: Swapping the Prices and Defects of Guess and Squeezer',
          wrongWork:
            'Lomov bought his dog Squeezer from Mironov for 85 roubles, while Chubukov’s Guess was overshot and worried a sheep during the Marusinsky hunt.',
          teacherFix:
            'Lomov owns GUESS (gone lame; bought from Mironov for 125 roubles; ran neck-and-neck with the Count’s dog at the Marusinsky hunt; Chubukov calls him old and short in the muzzle). Chubukov owns SQUEEZER (bought for 85 roubles; son of Harness and Chisels; Lomov claims he is overshot—lower jaw shorter than upper—and left a verst behind worrying a sheep).',
          whyWrong:
            'Almost every board MCQ or RTC on the second quarrel tests exact dog ownership, prices (125 vs. 85 roubles), and specific defects. Memorise "L-G-125" (Lomov–Guess–125) and "C-S-85" (Chubukov–Squeezer–85).',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Ishita',
          title: 'Trap 2: Claiming Chubukov Sincerely Loved Lomov Like a Son',
          wrongWork:
            'Chubukov was a very affectionate father figure who always called Lomov "my angel" and "my precious" because he genuinely loved him like his own son.',
          teacherFix:
            'Chubukov’s sweet endearments ("my angel", "my darling", "my precious") are purely superficial and hypocritical. Seconds earlier in an aside, he muttered "Shan’t give him any!" thinking Lomov wanted money; moments later he called Lomov a "stuffed sausage", "turnip-ghost", and "pettifogger".',
          whyWrong:
            'NCERT Thinking about the Play Q1 specifically asks whether Chubukov is sincere when calling Lomov "my angel". Ignoring his asides and later insults misses Chekhov’s central satire.',
        },
      ],
    },
    {
      id: 'prose-09-vocab-language',
      title: 'NCERT Vocabulary & Thinking About Language (Reported Speech)',
      blocks: [
        {
          type: 'chapter-word-bank',
          lang: 'en',
          title: 'Complete Chapter Vocabulary, Insults & Russian Cultural Terms',
          intro:
            'Master Chekhov’s Russian property terms, legal insults, and vivid stage diction tested in CBSE extracts and Thinking about Language.',
          extraWords: [
            {
              word: 'neglige',
              englishMeaning: 'Loose, casual indoor dressing gown or morning robe worn at home.',
              synonym: 'dressing gown / housecoat',
              grammarNote: 'French loanword noun ("excuse my apron and neglige").',
              exampleSentence: 'Caught shelling peas, Natalya apologised for appearing in her apron and neglige.',
            },
            {
              word: 'perpetuity',
              englishMeaning: 'An endless or indefinite duration of time without fixed termination.',
              synonym: 'permanence / eternity',
              grammarNote: 'Abstract noun inside legal phrase "in perpetuity".',
              exampleSentence: 'Lomov claimed his ancestor gave free use—not ownership in perpetuity.',
            },
            {
              word: 'pettifogger',
              englishMeaning: 'A petty, unscrupulous person or small-minded lawyer who quibbles over trivial legal details.',
              synonym: 'quibbler / shyster',
              grammarNote: 'Derogatory countable noun.',
              exampleSentence: 'Chubukov sneered at Lomov as a pettifogger eager to drag neighbours to court.',
            },
            {
              word: 'embezzlement',
              englishMeaning: 'Theft or dishonest misappropriation of money entrusted to one’s care.',
              synonym: 'misappropriation / fraud',
              grammarNote: 'Abstract legal noun.',
              exampleSentence: 'Lomov infuriated Chubukov by claiming his grandfather was tried for embezzlement.',
            },
            {
              word: 'overshot',
              englishMeaning: 'Having an upper jaw that protrudes markedly beyond a shorter lower jaw.',
              synonym: 'underbite-lacking / projecting upper jaw',
              grammarNote: 'Adjective describing hunting dogs.',
              exampleSentence: 'Lomov argued that an overshot dog cannot grip prey firmly.',
            },
            {
              word: 'verst',
              englishMeaning: 'An old Russian unit of distance equal to roughly 1.067 kilometres (0.66 miles).',
              synonym: 'Russian kilometre-unit',
              grammarNote: 'Noun of measurement.',
              exampleSentence: 'Squeezer allegedly lagged a whole verst behind the Count’s hunting dog.',
            },
            {
              word: 'whipper-in',
              englishMeaning: 'A huntsman’s assistant responsible for keeping hunting hounds in pack order using a whip.',
              synonym: 'hound-handler',
              grammarNote: 'Hyphenated compound noun.',
              exampleSentence: 'Chubukov complained that the Count’s whipper-in struck Squeezer unfairly.',
            },
            {
              word: 'milksop',
              englishMeaning: 'A weak, cowardly, or spineless man lacking manly grit.',
              synonym: 'weakling / coward',
              grammarNote: 'Insulting countable noun.',
              exampleSentence: 'During the dog row, Chubukov abused the fainting Lomov as a milksop.',
            },
          ],
        },
        {
          type: 'table',
          caption: 'NCERT Thinking About Language: Direct Play Dialogue -> Indirect Reported Speech',
          headers: [
            'Original Direct Speech (NCERT Play)',
            'Grammar Shift Triggered',
            'Board-Perfect Reported Speech',
          ],
          rows: [
            [
              'Chubukov: "Have you come to borrow money?" (adapted from aside: "He’s come to borrow money.")',
              'Present perfect -> Past perfect; aside motive',
              'Chubukov suspected to himself that Lomov had come to borrow money and vowed not to give him any.',
            ],
            [
              'Lomov: "I have come to ask the hand of your daughter, Natalya Stepanovna, in marriage."',
              '"I" -> he; "have come" -> had come; "your" -> his',
              'Lomov respectfully informed Chubukov that he had come to ask the hand of his daughter, Natalya Stepanovna, in marriage.',
            ],
            [
              'Natalya: "Why haven’t you been here for such a long time?"',
              'Wh-question drops auxiliary inversion; "haven’t" -> hadn’t; "here" -> there',
              'Natalya asked Lomov warmly why he had not been there for such a long time.',
            ],
            [
              'Lomov: "Oxen Meadows are mine! I’ll prove it to you!"',
              '"are" -> were; "mine" -> his; "will" -> would',
              'Lomov insisted hotly that Oxen Meadows were his and declared that he would prove it to her.',
            ],
            [
              'Natalya: "Papa, bring him back! Fetch him here!"',
              'Imperative command -> "implored/urged + to + V1"; "here" -> there',
              'Wailing in hysterics, Natalya begged her father to bring Lomov back and fetch him there at once.',
            ],
          ],
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Thinking About Language',
          question:
            'Rewrite this exchange from "The Proposal" in Reported Speech (NCERT Thinking about Language practice):\nChubukov: "What’s the matter? What are you shouting for?"\nNatalya: "Papa, please tell this gentleman who owns Oxen Meadows, we or he?"',
          answer:
            'Entering the room, Chubukov asked what the matter was and why they were shouting. Natalya appealed to her father and requested him to tell that gentleman (Lomov) who owned Oxen Meadows, whether it was they or he.',
          markingTip:
            'Key NCERT traps: convert "What’s the matter?" to "what the matter was" (no inversion!), "this gentleman" -> "that gentleman", and "please tell" -> "requested him to tell".',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Thinking About Language',
          question:
            'Chekhov pairs exaggerated Russian politeness with sudden vulgar abuse throughout the play. Give two examples of each and explain their satirical effect.',
          answer:
            'Characters shower fake honorifics and endearments—"honoured Stepan Stepanovitch", "my angel", "my precious"—yet within seconds hurl crude insults like "pettifogger", "stuffed sausage", "turnip-ghost", and "old rat". This whiplash exposes how shallow, transactional, and self-interested aristocratic courtesy is whenever money, land, or ego is challenged.',
          markingTip:
            'Quote exact terms from both registers to demonstrate Chekhov’s comedic contrast.',
        },
      ],
    },
    {
      id: 'prose-09-short-qa',
      title: 'Trap MCQ Checkpoint & 3-Mark Short Answers',
      blocks: [
        {
          type: 'checkpoint',
          prompt:
            'Identify the ONLY completely accurate statement regarding characters, numbers, and quarrels in Anton Chekhov’s "The Proposal".',
          options: [
            {
              id: 'a',
              label:
                'Lomov is 25 years old, owns Squeezer worth 85 roubles, and argues that Oxen Meadows belong to him because his family held them for 300 years.',
            },
            {
              id: 'b',
              label:
                'Chubukov welcomes Lomov sincerely thinking he came for a proposal, then joins Natalya in admitting Guess is better than Squeezer.',
            },
            {
              id: 'c',
              label:
                'Thirty-five-year-old Lomov wants a quiet, regular life with 25-year-old Natalya, argues over 5 dessiatins of Oxen Meadows, and later insists his 125-rouble Guess beats Chubukov’s 85-rouble Squeezer.',
            },
            {
              id: 'd',
              label:
                'Natalya refuses to speak to Lomov after his collapse and rejects Chubukov’s champagne toast at the curtain.',
            },
          ],
          correctIds: ['c'],
          multiSelect: false,
          successMsg:
            'Spot on! Lomov (35) + Guess (125 roubles) vs. Natalya (25) + Squeezer (85 roubles), 5 dessiatins / 300 roubles for Oxen Meadows, and Chubukov shouting "Champagne!" as they keep bickering.',
          hintMsg:
            'Double-check Lomov’s age (35 vs. Natalya’s 25), who claimed 300 years of ownership (Natalya), and the exact prices of Guess (125) and Squeezer (85).',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT Thinking About Text',
          question:
            'What does Chubukov at first suspect that Lomov has come for? Is he sincere when he later says "And I’ve always loved you, my angel, as if you were my own son"? Find reasons from the play.',
          answer:
            'At first, seeing Lomov’s nervous hesitation, Chubukov privately mutters in an aside that Lomov has come to borrow money and resolves not to give him any. His later gushing—"my angel, as if you were my own son"—is completely insincere: minutes later, he calls Lomov a "pettifogger", "stuffed sausage", and "turnip-ghost", caring only about offloading his daughter advantageously.',
          markingTip: 'Cite the opening aside ("Shan’t give him any!") plus at least two insults Chubukov uses later.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT Thinking About Text',
          question:
            'Chubukov says of Natalya: "as if she won’t consent! She’s in love; egad, she’s like a lovesick cat..." Would you agree? Find reasons for your answer.',
          answer:
            'No, Natalya is not romantically in love like a "lovesick cat". When Lomov enters, she speaks practically about shelling peas, wet hay, and a 300-rouble meadow, fighting fiercely until driving him out. Her later hysterics ("Bring him back!") stem from fear of losing a rare eligible match at age twenty-five rather than genuine affection.',
          markingTip: 'Contrast her practical material mindset and dog-quarrel stubbornness against Chubukov’s claim of romantic love.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Short Answer (40–50 Words)',
          question: 'Why does Lomov make up his mind to marry Natalya Stepanovna despite feeling nervous like sitting for an exam?',
          answer:
            'Lomov decides to marry strictly out of practical urgency, not romance. At thirty-five—what he calls a critical age—the excitable hypochondriac needs a quiet, regular life to manage his palpitations and sleeplessness. Since Natalya is an excellent housekeeper, not bad-looking, and well-educated, he stops searching for an ideal love.',
          markingTip: 'Include all three traits of Natalya plus Lomov’s age (35) and health-driven need for a regular life.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Short Answer (40–50 Words)',
          question: 'Contrast Lomov’s and Natalya’s claims regarding the ownership of Oxen Meadows.',
          answer:
            'Lomov claims legal deeds prove his aunt’s grandmother granted Natalya’s great-grandfather’s peasants free use of the five-dessiatin Meadows for forty years in return for baking bricks. Natalya counters that both her grandfather and great-grandfather held the land up to Burnt Marsh for nearly three hundred years, dismissing his documents.',
          markingTip: 'Mention exact NCERT details: 40 years brick-making (Lomov) vs. nearly 300 years up to Burnt Marsh (Natalya).',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Short Answer (40–50 Words)',
          question: 'How does the argument over Guess and Squeezer expose the pettiness of the characters?',
          answer:
            'Barely reconciled after Natalya’s hysterics, the couple ignites a furious row over hunting dogs. Lomov insults Chubukov’s 85-rouble Squeezer as overshot and distracted by sheep, while Natalya mocks Lomov’s lame 125-rouble Guess as a worn-out cab-horse—proving vanity and contradiction completely overshadow marriage.',
          markingTip: 'Include specific claims from both sides (overshot/sheep vs. old/lame/short muzzle).',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'Title & Theme Justification',
          question: 'Explain the dramatic irony of the ending when Chubukov shouts "Champagne! Champagne!" as the curtain falls.',
          answer:
            'Champagne traditionally celebrates romantic harmony and peaceful marital bliss. Here, Chubukov forces the engagement the instant Lomov wakes from fainting, only for the couple to resume yelling "Better!" and "Worse!" over their dogs. Shouted above their bickering, "Champagne!" highlights the hilarious failure of moneyed convenience to bring harmony.',
          markingTip: 'Connect the celebratory symbol of champagne with the unending Guess-vs-Squeezer shouting match.',
        },
      ],
    },
    {
      id: 'prose-09-competency-long',
      title: '6-Mark Competency & Cross-Chapter Extrapolations',
      blocks: [
        {
          type: 'qa',
          marks: 6,
          tag: 'Competency / Cross-Chapter (6 Marks)',
          question:
            'Though "The Proposal" is a rollicking farce filled with fainting, shouting, and dog fights, Anton Chekhov embeds sharp social criticism beneath the humour. Discuss how Chekhov satirises aristocratic attitudes toward marriage, wealth, and neighbourly pride.',
          answer:
            'Beneath slapstick comedy—frantic water-drinking, hysterics, and fainting spells—Chekhov’s "The Proposal" delivers biting satire on nineteenth-century Russian landowners who treat marriage as an economic merger. Neither Lomov nor Natalya mentions love; Lomov evaluates Natalya like estate inventory ("excellent housekeeper, not bad-looking, well-educated") because at thirty-five he needs a nurse-cum-manager, while Chubukov acts like a stressed broker eager to unload his twenty-five-year-old daughter.\n\nEqually absurd is their aristocratic vanity. Both sides admit five-dessiatin Oxen Meadows are worth a mere 300 roubles, yet abandon courtesy to hurl grotesque ancestral slurs over "principle" and "unfairness". Even after Chubukov shoves their hands together with champagne, they instantly quarrel over Guess and Squeezer—warning that marriages built on greed and ego guarantee lifelong discord.',
          markingTip:
            'Address all three satirical targets (marriage as business, false politeness/ego, unending discord) with textual evidence for 6/6.',
        },
        {
          type: 'qa',
          marks: 6,
          tag: 'Competency / Cross-Chapter (6 Marks)',
          question:
            'Imagine Natalya Stepanovna writes a candid diary entry that evening after Lomov leaves following their chaotic engagement. Reflect on her relief at getting engaged, her embarrassment over her tantrums, and why she still refuses to concede that Guess beats Squeezer.',
          answer:
            'Evening, Chubukov Estate\n\nDear Diary,\nWhat an exhausting, humiliating, yet triumphant day! When Papa announced a "merchant" had come, I marched out in my pea-shelling apron and nearly ruined everything within five minutes. How absurd that Ivan Vassilevitch and I screamed ourselves hoarse over a five-dessiatin strip like Oxen Meadows! When Papa blurted out he had come to propose, I thought I should die of regret—at twenty-five, losing an eligible neighbour over pride would have been unbearable.\n\nYet even after Papa forced our hands together and shouted for champagne, I could not swallow Ivan’s insult to my darling Squeezer! Calling the son of Harness and Chisels "overshot" when his own lame Guess was overpriced at 125 roubles is simply intolerable. We may start married life shouting, "Worse!"—but at least Oxen Meadows and Ivan Vassilevitch are staying in the family!\n\n— Natalya',
          markingTip:
            'Use authentic first-person voice matching Natalya’s sharp, stubborn, practical personality alongside accurate details (apron/peas, 5 dessiatins, age 25, Harness & Chisels, 125 roubles, champagne).',
        },
      ],
    },
  ],
};
