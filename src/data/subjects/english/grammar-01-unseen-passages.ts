import { Subtopic } from '../../../types/curriculum';

export const englishGrammar01Passages: Subtopic = {
  id: 'eng-rg-01',
  slug: 'unseen-passages-discursive-factual',
  title: 'Unseen Passages: Discursive & Case-Based Factual (20 Marks)',
  subtitle:
    'Complete CBSE Section A mastery: 10M Discursive & 10M Case-Based Factual blueprints, 8-minute active skimming method, Tone & Attitude decoder, full original model passages with Word Lens, and board-pattern solved Q&As.',
  estimatedMinutes: 35,
  difficulty: 'Core CBSE',
  ncertSection: 'Section A — Reading Comprehension (Q1 Discursive 10M + Q2 Factual 10M)',
  learningObjectives: [
    'Decode the CBSE Section A 20-mark split across Q1 (Discursive, 400–450 words) and Q2 (Case-Based Factual with visual/tabular data, 200–250 words).',
    'Apply the 8-Minute Active Skimming & Elimination Method to locate textual evidence without importing outside assumptions.',
    'Identify authorial tone and attitude (Objective, Analytical, Laudatory, Didactic, Cautionary, Sardonic, Nostalgic, Sceptical) using linguistic signal clues.',
    'Write crisp ~40-word 2-mark rationalisation and data-inference answers in your own words backed by exact passage evidence.',
    'Avoid high-frequency board traps such as verbatim sentence-dumping, literal dictionary substitution, and Assertion–Reason misreads.',
  ],
  keywords: [
    'Unseen Passages Class 10',
    'Section A 20 Marks CBSE',
    'Discursive Passage',
    'Case-Based Factual Passage',
    'Tone and Attitude',
    'Assertion Reason Reading',
    'Vocabulary in Context',
  ],
  sections: [
    {
      id: 'rg-01-blueprint-strategy',
      title: '1. Section A 20-Mark Blueprint, 8-Minute Method & Tone Decoder',
      blocks: [
        {
          type: 'table',
          caption: 'CBSE Class 10 English (Code 184) — Section A: Reading Skills Blueprint (20 Marks)',
          headers: ['Feature', 'Q1: Discursive Passage (10 Marks)', 'Q2: Case-Based Factual Passage (10 Marks)'],
          rows: [
            ['**Text Length & Format**', '400–450 words of continuous opinionated, reflective, or argumentative prose.', '200–250 words paired with a table, bar/line chart, survey graphic, or infographic.'],
            ['**Core Focus**', 'Central thesis, authorial tone, paragraph-wise argument flow, inference & contextual vocabulary.', 'Statistical trends, comparative percentages, cause–effect links between text and data, objective synthesis.'],
            ['**Question Mix (CBSE Pattern)**', 'Mix of 1-mark objective items (MCQ, Assertion–Reason, True/False, Vocab, Sentence Completion) + two 2-mark ~40-word rationalisation/inference answers.', 'Mix of 1-mark data-extraction items (MCQ, gap-fill, True/False, Vocab) + two 2-mark comparative evidence-backed explanations.'],
            ['**Ideal Time Budget**', '18–20 minutes (including 2-minute option check).', '16–18 minutes (cross-checking numbers against chart labels).'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The Golden Rule of CBSE Reading Comprehension',
          body: 'Treat the passage as a sealed courtroom exhibit: only facts, logic, and attitudes stated or strongly implied inside the text count as valid evidence.',
          bullets: [
            '**Prime Your Radar First:** Read the stem of every question (skipping the four options for 10 seconds) before reading Para 1 so your brain flags keywords automatically.',
            '**Never Import Outside Knowledge:** Even if you know extra climate or health statistics, an option contradicting the passage is always wrong.',
            '**Synthesise for 2-Mark Answers:** Examiners penalise blind copy-pasting of entire sentences. Paraphrase the core reasoning cleanly in 35–45 words.',
          ],
        },
        {
          type: 'steps',
          title: 'The 8-Minute Active Skimming & Elimination Method (Per Passage)',
          items: [
            {
              label: 'Step 1 — Question-Stem Scan (60 Seconds)',
              detail:
                'Skim all question stems and underline anchor nouns, paragraph numbers (`[Para 2]`), and data years (`2022–2026`). Do not read MCQ options yet so distractors do not bias your first reading.',
              example: 'Spot cues like "Tone in Para 3", "synonym for relentless in Para 1", or "Class 10 Urban sleep gap".',
            },
            {
              label: 'Step 2 — Structured Paragraph Mapping (2.5 Minutes)',
              detail:
                'Read the passage once steadily, tagging the margin mentally with one 3-word label per paragraph (Problem / Evidence / Counter-view / Resolution). Circle contrast pivots such as *however, yet, conversely, paradoxically*.',
              example: 'Contrast markers almost always signal where a 2-mark inference or Assertion–Reason answer hides.',
            },
            {
              label: 'Step 3 — Precision Evidence Pinning for 1-Mark Items (2 Minutes)',
              detail:
                'Return to the exact paragraph or table row for each 1-mark item. Eliminate options that are **too extreme** (*always, never, completely*), **half-true**, or **out of scope**.',
              example: 'For Vocab-in-Context, plug your chosen word directly into the sentence to verify grammar and tone.',
            },
            {
              label: 'Step 4 — Draft 40-Word 2-Mark Rationalisations (2 Minutes)',
              detail:
                'Structure every 2-mark response in two crisp beats: **(1) Direct Claim** answering the "why/how", followed by **(2) Textual/Data Proof** paraphrased accurately.',
              example: 'State the trend first ("Urban Class 10 students sleep less because...") then cite exact figures ("6.3 hrs vs 7.0 hrs").',
            },
            {
              label: 'Step 5 — Assertion–Reason & Final Sanity Check (30 Seconds)',
              detail:
                'Test `A` and `R` independently as True/False first. Only if both are True, insert **"because"** between `A` and `R` to verify whether `R` genuinely explains `A`.',
              example: 'If `R` states another true fact from a different paragraph without causing `A`, choose "Both true, R is NOT the correct explanation".',
            },
          ],
        },
        {
          type: 'table',
          caption: 'CBSE Tone & Attitude Decoder — 8 High-Frequency Exam Tones',
          headers: ['Tone', 'Linguistic Signal Words & Cues', 'Board Meaning & How to Spot'],
          rows: [
            ['**Objective**', 'Reported statistics, third-person verbs (*shows, indicates, records*), zero emotional adjectives.', 'Neutral, fact-based reporting without taking personal sides.'],
            ['**Analytical**', '*Consequently, whereas, correlates with, this suggests, underlying factor*.', 'Breaks a phenomenon into causes, effects, and logical patterns.'],
            ['**Laudatory**', '*Remarkable, pioneering, admirable, commendable, milestone, inspiring*.', 'Openly praises an achievement, person, tradition, or reform.'],
            ['**Didactic**', '*Must, ought to, reminds us, essential lesson, cultivate, ethical duty*.', 'Aims to teach a moral, civic, or lifestyle lesson to the reader.'],
            ['**Cautionary**', '*Alarming, risk, erode, warning sign, unchecked, unless we act*.', 'Alerts readers to a looming danger or unintended consequence.'],
            ['**Sardonic**', 'Sharp irony, biting contrast, mocking quotation marks (*so-called "progress"*).', 'Critiques foolishness or hypocrisy with dry, pointed mockery.'],
            ['**Nostalgic**', '*Bygone evenings, cherished, once echoed, simpler decades, fondly recalled*.', 'Looks back with warm affection and mild longing for the past.'],
            ['**Sceptical**', '*Purportedly, remains unproven, raises doubts, far from guaranteed, overstated*.', 'Questions bold claims and demands stronger evidence before accepting them.'],
          ],
        },
      ],
    },
    {
      id: 'rg-01-discursive-model',
      title: '2. Model Q1: Full 10-Mark Discursive Passage with Word Lens & Solved Q&As',
      blocks: [
        {
          type: 'poetic-stanza',
          lang: 'en',
          passageMode: 'prose',
          stanzaLabel: 'Model Discursive Passage (401 Words) — Slow-Living, Digital Minimalism & Deep Attention',
          dialectBadge: 'Q1 Pattern | 4 Paragraphs | Reflective–Analytical Prose',
          stanzaText:
            '[Para 1] Walk into any metropolitan railway coach, crowded waiting room, or school canteen today and you will witness a curious uniformity: rows of heads tilted downward toward glowing rectangles. Notifications arrive with relentless regularity, slicing an ordinary afternoon into fragile, thirty-second fragments. In an economy built to harvest human eyeballs, stillness has quietly turned suspicious. Many teenagers confess that waiting five minutes for a bus without checking a feed feels oddly uncomfortable, as though unscheduled silence were an embarrassing fault in the day rather than a natural, restorative breathing space for the wandering mind.\n\n[Para 2] Yet human cognition was never wired for perpetual interruption. Psychologists distinguish sharply between shallow browsing—the rapid skimming of headlines, short-form reels, and urgent alerts—and sustained attention, the unhurried mental immersion required to grasp a dense science concept, untangle a tricky geometry proof, or enter the emotional world of a classic novel. Every time a chime pulls our gaze mid-sentence, the brain pays an invisible switching tax. Even after the screen goes dark, traces of that scattered focus linger, leaving readers feeling strangely exhausted despite having absorbed remarkably little from hours of passive scrolling.\n\n[Para 3] In response to this ubiquitous noise, a quiet counter-movement known as digital minimalism is gaining traction among thoughtful students, educators, and software designers alike. Far from rejecting modern technology altogether, advocates of slow-living practise deliberate boundaries in their daily routines. Some keep smartphones parked outside the bedroom at night and rediscover the tactile pleasure of paper books, fountain pens, and handwritten journals. Others reserve the first hour after waking—or a leisurely evening walk beneath neighbourhood trees—strictly for offline reflection and quiet observation. Far from falling behind their peers, learners who fiercely protect these calm pockets report sharper memory recall, steadier moods, and deeper conversations around the family dining table.\n\n[Para 4] Ultimately, the challenge before our hyper-connected generation is not to smash every screen or romanticise a mythical golden past, but to recover quiet discernment. A pocket device becomes an indispensable ally when it summons an entire library, bridges distant friends, or maps an unfamiliar street; it turns into an adversary only when we surrender our curiosity to its default settings and endless autoplay queues. Choosing slowness in an age of instant feeds is neither laziness nor timid nostalgia. It is a courageous act of self-ownership—one that steadily restores intellectual depth to our learning, genuine warmth to our daily relationships, and unhurried wonder to ordinary, sunlit days.',
          prasang:
            'This original 401-word CBSE-format discursive passage examines how constant algorithmic interruptions fracture concentration, contrasts shallow browsing with sustained cognitive depth, and argues for digital minimalism as balanced discernment rather than anti-technology nostalgia.',
          bhavarthHindi:
            'Passage Architecture & Exam Map: [Para 1] opens with a vivid everyday scene of screen absorption and introduces the "attention economy" where silence feels awkward. [Para 2] supplies the psychological mechanism—comparing shallow browsing vs. sustained attention and explaining the cognitive "switching tax". [Para 3] presents practical digital minimalism habits (phone-free bedrooms, offline morning hours, handwritten journals) and their academic/emotional rewards. [Para 4] resolves the tension with a balanced, analytical-didactic takeaway: technology is a tool ("ally"), not a master ("adversary"), and slowness represents deliberate discernment rather than backward nostalgia.',
          englishHelper:
            'Paragraph-by-Paragraph Value Points:\n• Para 1: Ubiquitous screen habit; relentless notifications create 30-second fragments; silence mistakenly treated as discomfort.\n• Para 2: Shallow browsing vs. sustained attention; "switching tax" leaves readers tired with low retention.\n• Para 3: Digital minimalism = deliberate boundaries, NOT total rejection; benefits include sharper recall, calmer moods, real conversations.\n• Para 4: Core thesis — discernment separates device as "ally" vs. "adversary"; choosing slowness is self-ownership, not laziness or nostalgia.',
          poeticDevices: [
            'Opening Visual Snapshot ("glowing rectangles", "curious uniformity") grounds an abstract cognitive issue in relatable daily observation.',
            'Economic Metaphor ("harvest human eyeballs", "invisible switching tax") clarifies how attention has measurable cost.',
            'Balanced Antithesis ("ally" vs. "adversary", "neither laziness nor nostalgia") signals a nuanced, non-extremist CBSE discursive conclusion.',
          ],
          words: [
            {
              word: 'relentless',
              englishMeaning: 'Unceasingly intense, harsh, or continuous without slowing down',
              synonym: 'incessant, persistent',
              grammarNote: 'Adjective modifying "regularity" (Para 1)',
              exampleSentence: 'The relentless buzz of group chats disrupted her evening revision.',
            },
            {
              word: 'sustained',
              englishMeaning: 'Continuing steadily over an extended period without interruption',
              synonym: 'prolonged, uninterrupted',
              grammarNote: 'Participle adjective paired with "attention" (Para 2)',
              exampleSentence: 'Solving multi-step board problems demands sustained concentration.',
            },
            {
              word: 'linger',
              englishMeaning: 'Stay or remain present longer than expected after the main event ends',
              synonym: 'persist, remain',
              grammarNote: 'Intransitive verb describing residual distraction (Para 2)',
              exampleSentence: 'Doubts linger whenever students skip foundational grammar rules.',
            },
            {
              word: 'ubiquitous',
              englishMeaning: 'Seeming to appear everywhere at the same time; omnipresent',
              synonym: 'omnipresent, pervasive',
              grammarNote: 'Formal adjective qualifying "noise" (Para 3)',
              exampleSentence: 'QR codes have become ubiquitous across textbooks and transit stations.',
            },
            {
              word: 'deliberate',
              englishMeaning: 'Done consciously, carefully, and with clear intention rather than by impulse',
              synonym: 'intentional, calculated',
              grammarNote: 'Adjective before "boundaries" (Para 3)',
              exampleSentence: 'Top scorers take deliberate breaks instead of aimlessly scrolling.',
            },
            {
              word: 'tactile',
              englishMeaning: 'Relating to or perceived directly through the sense of touch',
              synonym: 'physical, tangible',
              grammarNote: 'Adjective modifying "pleasure" (Para 3)',
              exampleSentence: 'Turning crisp textbook pages offers a tactile satisfaction screens lack.',
            },
            {
              word: 'discernment',
              englishMeaning: 'The ability to judge wisely, distinguish value, and make thoughtful choices',
              synonym: 'judgement, wisdom',
              grammarNote: 'Abstract noun formed from "discern" (Para 4)',
              exampleSentence: 'Choosing credible sources online requires calm discernment.',
            },
            {
              word: 'adversary',
              englishMeaning: 'An opponent, rival, or force working against one’s best interests',
              synonym: 'opponent, foe',
              grammarNote: 'Noun contrasted directly with "ally" (Para 4)',
              exampleSentence: 'Procrastination becomes a silent adversary during board preparation.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'How the 6 Solved Q&As Below Model the 10-Mark Q1 Pattern',
          body: 'In the CBSE board paper, Q1 contains eight items totalling 10 marks (six 1-mark objective/short items + two 2-mark ~40-word answers). Below are 6 high-yield solved items representing every question subtype tested in Q1.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Tone & Central Thesis MCQ) Which option best captures the author’s overall tone and stance in the passage?\n(A) Sardonic dismissal of all modern smartphones as harmful toys\n(B) Nostalgic longing for pre-digital villages without electricity\n(C) Analytical yet balanced advocacy for mindful boundaries with technology\n(D) Alarmist warning that young people can no longer read books',
          answer:
            '**(C) Analytical yet balanced advocacy for mindful boundaries with technology.**\n\n*Why others fail:* (A) and (D) exaggerate into anti-tech extremism, whereas Para 3 explicitly states "Far from rejecting technology altogether" and Para 4 rejects "romanticising a mythical golden past" (ruling out B).',
          markingTip: '1M for exact option (C). Watch for extreme verbs like "smash", "reject all", or "no longer" in distractors.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Vocabulary in Context) Select the word from **[Para 4]** that serves as the closest **antonym** of *"thoughtless carelessness"* and fits the author’s call for wise digital choices.',
          answer:
            '**discernment** — In Para 4 ("recover discernment"), it denotes wise judgement and the ability to distinguish when a device is helpful versus intrusive.',
          markingTip: '1M for writing the exact word "discernment" from Para 4 without altering its part of speech.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Complete the Sentence — Cause & Effect) Even after switching off a phone notification, readers often feel tired despite low comprehension because ________________________________________.',
          answer:
            '...the brain pays an invisible **"switching tax"** when interrupted, and **traces of scattered focus linger** even after the screen goes dark (Para 2).',
          markingTip: '1M: Must link residual/scattered focus or switching tax directly to low absorption/fatigue.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'Assertion-Reason',
          question:
            '**Assertion (A):** Digital minimalism requires students to discard smartphones permanently during school years.\n**Reason (R):** Practitioners of digital minimalism keep phones out of bedrooms at night and reserve offline windows to improve recall and conversation.\n\nChoose the correct option:\n(A) Both A and R are true, and R is the correct explanation of A.\n(B) Both A and R are true, but R is NOT the correct explanation of A.\n(C) A is true, but R is false.\n(D) A is false, but R is true.',
          answer:
            '**(D) A is false, but R is true.**\n\nPara 3 explicitly clarifies that digital minimalism is *"far from rejecting technology altogether"*—it sets deliberate boundaries such as phone-free bedrooms and offline study/walk windows.',
          markingTip: '1M: Always verify A and R independently before testing the "because" link.',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'Case-Based',
          question:
            '(Rationalisation / Inference — ~40 Words) Contrast *"shallow browsing"* with *"sustained attention"* as presented in **[Para 2]**, and explain why the difference matters for Class 10 learners.',
          answer:
            'Shallow browsing involves rapid skimming of reels, alerts, and headlines, whereas sustained attention demands unhurried mental immersion. This distinction matters because deep academic tasks—such as mastering science concepts, solving complex geometry proofs, or absorbing literature—collapse when fragmented by frequent screen interruptions.',
          markingTip: 'Content (1M): Clear contrast of rapid skimming vs. unhurried immersion + academic impact | Expression (1M): Synthesised in 40–45 words without blind copying.',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'Case-Based',
          question:
            '(Inference & Synthesis — ~40 Words) Why does the author insist in **[Para 4]** that *"choosing slowness... is neither laziness nor nostalgia"*? Support your answer with ideas from the text.',
          answer:
            'The author defines slowness as active self-ownership rather than passive retreat. Rather than idolising the past or refusing useful tools like digital maps and libraries, deliberate pauses reclaim mental clarity, deepen learning, and strengthen warm, distraction-free family conversations.',
          markingTip: 'Content (1M): Explains self-ownership + balanced view of tools vs. distractions | Expression (1M): Concise, cohesive 38–45 word synthesis.',
        },
      ],
    },
    {
      id: 'rg-01-factual-case-model',
      title: '3. Model Q2: Case-Based Factual Passage, Survey Dataset & Data-Inference Q&As',
      blocks: [
        {
          type: 'poetic-stanza',
          lang: 'en',
          passageMode: 'prose',
          stanzaLabel: 'Model Case-Based Factual Passage (223 Words) — Adolescent Sleep & Screen Habits (2022–2026)',
          dialectBadge: 'Q2 Pattern | 3 Paragraphs + Paired Table | Quantitative Report',
          stanzaText:
            '[Para 1] A four-year longitudinal study conducted by the National School Wellness Consortium across 4,800 learners in twelve Indian states tracked how changing digital habits affect adolescent rest and classroom alertness. Researchers systematically compared student cohorts in Classes 8, 10, and 12 across urban metro neighbourhoods and semi-urban towns between 2022 and 2026. Over the four-year survey window, average weekday sleep declined in every surveyed group, though the downward drop was noticeably sharper in metropolitan clusters.\n\n[Para 2] Survey data from 2026 reveals a pronounced urban–semi-urban divide across regions. Urban Class 10 students averaged 3.4 hours of daily recreational screen time—the highest across all six cohorts—and slept just 6.3 hours per school night, down 0.7 hours from 2022. While Urban Class 12 students spent slightly less time on recreational apps (3.1 hours) due to intensive board-exam coaching schedules, their pre-bedtime device exposure climbed to 81%, dragging their weekday sleep to a survey low of 5.9 hours.\n\n[Para 3] Crucially, late-night screen exposure correlates strongly with eroded classroom alertness. Urban Class 12 recorded the lowest Morning First-Period Focus Score (61 out of 100), whereas Semi-Urban Class 8 students—who slept 7.7 hours and kept pre-bedtime phone use below half (46%)—scored 82. Encouragingly, partner schools that introduced device-free evening study charters saw clear gains, proving that structured household routines can reliably buffer students against chronic sleep debt and steadily mitigate morning fatigue.',
          prasang:
            'This original 223-word CBSE Q2 Case-Based Factual passage pairs a 2022–2026 adolescent wellness survey with a multi-variable dataset comparing Urban Metro and Semi-Urban cohorts across Classes 8, 10, and 12.',
          bhavarthHindi:
            'Data Story & Cross-Verification Guide: Always read the prose alongside the table columns. Notice three sharp statistical anchors: (1) Universal sleep decline from 2022 to 2026 across all 6 cohorts; (2) Peak recreational screen time belongs to Urban Class 10 (3.4 hrs), whereas lowest sleep (5.9 hrs), highest bedtime device exposure (81%), and lowest Focus Score (61) occur in Urban Class 12; (3) Every Semi-Urban grade outperforms its Urban counterpart in sleep duration and Morning Focus.',
          englishHelper:
            'Key Statistical Checkpoints:\n• Sample: 4,800 learners across 12 states (2022–2026).\n• Biggest 2022–2026 sleep drop: Urban Class 10 & Class 12 (both -0.7 hrs) vs. Semi-Urban Class 8 (-0.4 hrs).\n• Distinction trap: Urban Class 10 has highest *recreational* screen time (3.4 hrs), NOT lowest sleep—Urban Class 12 sleeps least (5.9 hrs) due to late-night study + device overlap (81%).',
          words: [
            {
              word: 'longitudinal',
              englishMeaning: 'Conducted by observing the same subjects or variables repeatedly over several years',
              synonym: 'multi-year, ongoing',
              grammarNote: 'Adjective modifying "study" (Para 1)',
              exampleSentence: 'A longitudinal health survey tracks habits across multiple academic terms.',
            },
            {
              word: 'pronounced',
              englishMeaning: 'Very noticeable, distinct, or clearly marked',
              synonym: 'marked, striking',
              grammarNote: 'Adjective modifying "divide" (Para 2)',
              exampleSentence: 'The survey revealed a pronounced gap between weekday and weekend sleep.',
            },
            {
              word: 'climbed',
              englishMeaning: 'Increased steadily or rose to a higher percentage or level',
              synonym: 'rose, escalated',
              grammarNote: 'Action verb showing upward data trend (Para 2)',
              exampleSentence: 'Pre-bedtime screen usage climbed past 80 percent among senior students.',
            },
            {
              word: 'correlates',
              englishMeaning: 'Shows a consistent mutual relationship or statistical connection with another factor',
              synonym: 'links, corresponds',
              grammarNote: 'Present simple verb + preposition "with" (Para 3)',
              exampleSentence: 'Earlier lights-out consistently correlates with higher morning test accuracy.',
            },
            {
              word: 'eroded',
              englishMeaning: 'Gradually worn away, weakened, or diminished over time',
              synonym: 'diminished, undermined',
              grammarNote: 'Participle adjective before "classroom alertness" (Para 3)',
              exampleSentence: 'Fragmented sleep slowly eroded students’ patience during long mock tests.',
            },
            {
              word: 'buffer',
              englishMeaning: 'Protect or shield against a harmful impact or sudden shock',
              synonym: 'shield, safeguard',
              grammarNote: 'Transitive verb meaning to cushion from harm (Para 3)',
              exampleSentence: 'Regular outdoor sports help buffer teenagers against exam stress.',
            },
            {
              word: 'mitigate',
              englishMeaning: 'Make something harmful, unpleasant, or severe less intense',
              synonym: 'alleviate, reduce',
              grammarNote: 'Formal verb paired with "morning fatigue" (Para 3)',
              exampleSentence: 'Turning off notifications after 9 p.m. can mitigate daytime drowsiness.',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Survey Dataset: All-India Urban vs Semi-Urban Student Sleep, Screen Time & Morning Focus (2022–2026)',
          headers: [
            'Cohort & Setting',
            '2022 Avg Sleep (hrs/night)',
            '2026 Avg Sleep (hrs/night)',
            '2026 Recreational Screen Time',
            'Pre-Bedtime Device Use (2026)',
            'Morning Focus Score (/100)',
          ],
          rows: [
            ['**Class 8 (Urban Metro)**', '7.6 hrs', '7.1 hrs', '2.8 hrs/day', '64%', '74'],
            ['**Class 8 (Semi-Urban)**', '8.1 hrs', '7.7 hrs', '1.9 hrs/day', '46%', '82'],
            ['**Class 10 (Urban Metro)**', '7.0 hrs', '6.3 hrs', '3.4 hrs/day', '78%', '65'],
            ['**Class 10 (Semi-Urban)**', '7.5 hrs', '7.0 hrs', '2.3 hrs/day', '58%', '76'],
            ['**Class 12 (Urban Metro)**', '6.6 hrs', '5.9 hrs', '3.1 hrs/day', '81%', '61'],
            ['**Class 12 (Semi-Urban)**', '7.1 hrs', '6.6 hrs', '2.2 hrs/day', '62%', '72'],
          ],
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Data Comparison MCQ) Which cohort logged the **highest daily recreational screen time** in 2026, yet still slept **0.4 hours longer** per night than Urban Class 12 students?\n(A) Class 8 (Urban Metro)\n(B) Class 10 (Urban Metro)\n(C) Class 10 (Semi-Urban)\n(D) Class 12 (Semi-Urban)',
          answer:
            '**(B) Class 10 (Urban Metro).**\n\nCheck the table: Urban Class 10 leads all groups in recreational screen time (`3.4 hrs/day`) and sleeps `6.3 hrs/night`, which is `0.4 hrs` more than Urban Class 12 (`5.9 hrs/night`).',
          markingTip: '1M: Always verify both halves of a two-condition MCQ against the exact table cells.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(True / False with Justification Clue) State whether the following statement is **TRUE** or **FALSE** based on the table and passage:\n*"Every Semi-Urban cohort in 2026 recorded at least 7.0 hours of nightly sleep and outscored its Urban grade-level counterpart in Morning Focus."*',
          answer:
            '**FALSE.** Although every Semi-Urban cohort did outscore its Urban grade-level counterpart in Morning Focus (`82 vs 74`, `76 vs 65`, `72 vs 61`), Semi-Urban **Class 12** averaged **6.6 hours** of sleep in 2026—below the 7.0-hour claim.',
          markingTip: '1M: Watch out for universal quantifiers like "Every" or "All"—check the bottom row (Class 12) carefully.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Complete the Analogy / Data Pattern) Just as Urban Class 10 saw a **0.7-hour** sleep decline from 2022 to 2026, Semi-Urban Class 10 experienced a ______-hour decline, keeping its 2026 sleep identical to Urban Class 10’s ______ baseline.',
          answer:
            '**0.5-hour** decline (`7.5` to `7.0 hrs`), keeping its 2026 sleep (`7.0 hrs`) identical to Urban Class 10’s **2022** baseline (`7.0 hrs`).',
          markingTip: '1M (0.5 + 0.5): Exact arithmetic subtraction and year reference required.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Vocabulary in Context) Replace the underlined phrase in the sentence below with **one word** from **[Para 3]**:\n*"Consistent bedtime limits help **lessen the severity of** early-morning classroom tiredness."*',
          answer:
            '**mitigate** — Used in Para 3 ("mitigate morning fatigue"), meaning to reduce the intensity or severity of an undesirable effect.',
          markingTip: '1M: Choose "mitigate" (not "eroded", which means worn away, or "buffer", which requires "against").',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'Case-Based',
          question:
            '(Comparative Evidence Answer — ~40 Words) Urban Class 12 students report *lower* recreational screen time than Urban Class 10 (`3.1` vs `3.4 hrs/day`), yet they suffer the worst sleep (`5.9 hrs`) and lowest Focus Score (`61`). Explain this apparent paradox using the passage and table.',
          answer:
            'Although board-exam coaching trims Urban Class 12’s recreational screen time slightly to 3.1 hours, their pre-bedtime device exposure hits a survey peak of 81%. Using devices right before sleep compresses rest to 5.9 hours, directly dragging first-period alertness down to 61.',
          markingTip: 'Content (1M): Links coaching-trimmed recreational time to peak 81% pre-bedtime usage + 5.9h sleep/61 score | Expression (1M): Crisp comparative phrasing.',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'Case-Based',
          question:
            '(Evidence-Backed Policy Inference — ~40 Words) Using comparative figures from Class 8 and Class 10, justify why schools should promote device-free evening study charters for both Urban and Semi-Urban families.',
          answer:
            'Across both grades, higher pre-bedtime screen use matches lower focus: Semi-Urban Class 8 restricts bedtime device use to 46% and achieves an 82 Focus Score, whereas Urban Class 10 hits 78% and drops to 65. Device-free evening charters curb late-night exposure and protect morning alertness.',
          markingTip: 'Content (1M): Cites paired percentages and focus scores accurately | Expression (1M): Clear policy rationale tied to Para 3.',
        },
      ],
    },
    {
      id: 'rg-01-traps-drills',
      title: '4. Examiner Traps (Notebook Fixes) & Timed 10-Second Checkpoints',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Aarav',
          title: 'Trap 1: Copying Verbatim Passage Sentences for a 2-Mark Inference Answer',
          wrongWork:
            'Q: Why did Urban Class 12 score lowest in Morning Focus? Ans: "While Urban Class 12 students spent slightly less time on recreational apps (3.1 hours) due to board-exam coaching schedules, their pre-bedtime device exposure climbed to 81%, dragging their weekday sleep to a survey low of 5.9 hours. Urban Class 12 recorded the lowest Morning First-Period Focus Score."',
          teacherFix:
            'Urban Class 12 recorded the lowest Focus Score (61/100) because, despite slightly reduced recreational browsing (3.1 hrs), peak pre-bedtime device use (81%) cut their nightly sleep to just 5.9 hours, leaving them fatigued in the first period.',
          whyWrong:
            'Dumping 55+ words lifted straight from two paragraphs shows poor comprehension synthesis and risks losing expression marks under CBSE’s 40-word limit.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Diya',
          title: 'Trap 2: Picking a Literal Dictionary Meaning Instead of Contextual Synonym',
          wrongWork:
            'Q: In Para 3, "tactile pleasure of paper books" — choose the synonym of "tactile": Student picked "fragile / delicate" because paper books are delicate, or wrote "sharp" for "pronounced" because pronunciation relates to speech.',
          teacherFix:
            'Always test the word inside its exact sentence frame: "tactile pleasure" contrasts holding physical paper against flat glowing glass, so "tactile" means "physical / relating to touch". Likewise, "pronounced divide" means "clear, noticeable gap".',
          whyWrong:
            'CBSE vocabulary distractors deliberately use secondary or look-alike meanings ("pronounced" as spoken vs. noticeable). Plugging the candidate word back into the passage catches 100% of these traps.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Read this mini-assertion based on Q2’s dataset:\nAssertion (A): Semi-Urban Class 10 students are slightly more rested and alert in morning classes than Urban Class 10 students.\nReason (R): Semi-Urban Class 10 has 20 percentage points lower pre-bedtime device use (58% vs 78%) and 0.7 hours more nightly sleep (7.0 vs 6.3 hrs). Which option is accurate?',
          options: [
            { id: 'a', label: 'Option A', sublabel: 'Both A and R are true, and R correctly explains A' },
            { id: 'b', label: 'Option B', sublabel: 'Both A and R are true, but R does NOT explain A' },
            { id: 'c', label: 'Option C', sublabel: 'A is true, but R is false' },
            { id: 'd', label: 'Option D', sublabel: 'A is false, but R is true' },
          ],
          correctIds: ['a'],
          multiSelect: false,
          successMsg:
            'Correct! Semi-Urban Class 10 scores 76 vs 65 in Morning Focus (A is true), and 78% - 58% = 20 percentage points less bedtime screen use plus 0.7 hrs more sleep (R is true and directly explains A).',
          hintMsg:
            'Compare the Class 10 Urban and Semi-Urban rows across columns 3, 5, and 6, then insert "because" between A and R.',
        },
        {
          type: 'checkpoint',
          prompt:
            'In a discursive passage, the author writes: "Our hyper-efficient gadgets promised spare hours; ironically, we now guard every spare second against silence." Which tone best describes this sentence?',
          options: [
            { id: 'a', label: 'Laudatory', sublabel: 'Praising gadget speed' },
            { id: 'b', label: 'Nostalgic', sublabel: 'Fondly recalling childhood' },
            { id: 'c', label: 'Analytical–Ironic', sublabel: 'Pointing out a sharp contradiction' },
            { id: 'd', label: 'Objective', sublabel: 'Purely neutral statistic' },
          ],
          correctIds: ['c'],
          multiSelect: false,
          successMsg:
            'Spot on! The contrast between "promised spare hours" and "guard every spare second against silence" signals an analytical–ironic observation.',
          hintMsg:
            'Look at the pivot word "ironically" and the contradiction between promised leisure and avoiding quietness.',
        },
      ],
    },
  ],
};
