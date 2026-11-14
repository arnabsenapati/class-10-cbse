import { Subtopic } from '../../../types/curriculum';

export const englishGrammar03Tenses: Subtopic = {
  id: 'eng-rg-03',
  slug: 'tenses',
  title: 'Tenses, Sequence & Conditionals',
  subtitle:
    'Complete CBSE Section B Tenses blueprint: 12-tense formula & time-signal matrix, Simple Past vs. Present Perfect, Past Perfect two-action rule, since/for, stative verbs, Sequence of Tenses, all 4 Conditionals, and CBSE editing drills.',
  estimatedMinutes: 35,
  difficulty: 'Core CBSE',
  ncertSection: 'Section B — Grammar (Tenses)',
  learningObjectives: [
    'Match every tense form (Simple, Continuous, Perfect, Perfect Continuous across Present, Past, and Future) to its exact CBSE time-signal words.',
    'Eliminate top CBSE errors: mixing Present Perfect with finished past markers ("yesterday", "in 2021"), misusing "since" vs. "for", and using "-ing" on stative verbs.',
    'Sequence two past events using Past Perfect ("had + V3") for the earlier action and Simple Past ("V2") for the later action.',
    'Apply Sequence of Tenses (including the Universal Truth exception) and all four Conditional structures (Types 0, 1, 2, 3) accurately in gap-fills and editing.',
  ],
  keywords: [
    'Tenses Class 10 CBSE',
    '12 Tenses Matrix',
    'Simple Past vs Present Perfect',
    'Past Perfect Two Actions',
    'Stative Verbs',
    'Sequence of Tenses',
    'Conditionals Type 0 1 2 3',
  ],
  sections: [
    {
      id: 'rg-03-tense-matrix',
      title: '1. Complete 12-Tense Formula & Time-Signal Matrix',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Tense Architecture',
          bullets: [
            '**Three Time Frames × Four Aspects = 12 Tenses:** Time (**Present, Past, Future**) tells *when*; Aspect (**Simple, Continuous, Perfect, Perfect Continuous**) tells *how* an action unfolds (habit, ongoing, completed, or continuing from earlier until now).',
            '**Exam Hack — Time Signals First:** In 80% of CBSE Section B gap-fills, a single adverbial marker (*yesterday, since 2020, already, while, by next Monday*) locks the tense before you even translate the sentence.',
            '**Verb Form Shorthand:** `V1` = base verb (`go`), `V1+s/es` = 3rd-person singular (`goes`), `V2` = simple past (`went`), `V3` = past participle (`gone`), `V-ing` = present participle (`going`).',
          ],
        },
        {
          type: 'table',
          caption: 'The 12-Tense Master Matrix — Structure, Function & CBSE Time-Signal Markers',
          headers: ['Tense', 'Affirmative Structure', 'Core Usage', 'CBSE Time Signals & Example'],
          rows: [
            ['**1. Simple Present**', '`S + V1 / V1+s/es` (`do/does` in Q/-)', 'Habits, routines, universal truths, fixed timetables.', '*always, daily, seldom, every day, usually* — "Water **boils** at 100 °C."'],
            ['**2. Present Continuous**', '`S + is/am/are + V-ing`', 'Action happening right now or temporary current trend.', '*now, at present, right now, currently, Look!* — "She **is drafting** her report right now."'],
            ['**3. Present Perfect**', '`S + has/have + V3`', 'Past action completed with present relevance; unspecified past time.', '*just, already, yet, ever, never, recently, so far* — "I **have already submitted** the form."'],
            ['**4. Present Perfect Continuous**', '`S + has/have + been + V-ing`', 'Action started in the past and still continuing into the present.', '*since + point*, *for + duration*, *all morning* — "They **have been practising** since 6 a.m."'],
            ['**5. Simple Past**', '`S + V2` (`did + V1` in Q/-)', 'Completed action at a definite finished past time.', '*yesterday, ago, last night, in 2021, once* — "We **visited** Hampi last winter."'],
            ['**6. Past Continuous**', '`S + was/were + V-ing`', 'Action in progress at a specific past moment or interrupted by `V2`.', '*while, when, at 8 p.m. yesterday, all evening* — "I **was reading** when the lights went out."'],
            ['**7. Past Perfect**', '`S + had + V3`', 'Earlier of two completed past actions (before another past event).', '*before, after, when, already, by the time + V2* — "The train **had left** before I reached."'],
            ['**8. Past Perfect Continuous**', '`S + had + been + V-ing`', 'Ongoing action continuing up to a specific point in the past.', '*for / since ... before + V2* — "She **had been studying** for three hours before dinner."'],
            ['**9. Simple Future**', '`S + will/shall + V1`', 'Predictions, spontaneous decisions, promises, future facts.', '*tomorrow, soon, next week, in 2030, I think* — "The board **will announce** dates soon."'],
            ['**10. Future Continuous**', '`S + will be + V-ing`', 'Action predicted to be in progress at a future point.', '*at this time tomorrow, next Sunday at 10 a.m.* — "We **will be writing** our exam at 11 a.m."'],
            ['**11. Future Perfect**', '`S + will have + V3`', 'Action expected to finish *before* a future deadline or event.', '*by next Monday, by 2028, by the time + V1* — "By June, he **will have finished** the syllabus."'],
            ['**12. Future Perfect Continuous**', '`S + will have been + V-ing`', 'Duration of an ongoing action measured up to a future milestone.', '*by next year ... for five years* — "By May, she **will have been teaching** here for ten years."'],
          ],
        },
      ],
    },
    {
      id: 'rg-03-past-present-traps',
      title: '2. High-Yield CBSE Tense Traps: Past vs. Perfect, Since/For & Stative Verbs',
      blocks: [
        {
          type: 'callout',
          variant: 'trap',
          title: 'The #1 Board Trap: Mixing Present Perfect with a Finished Past Time Word',
          body: 'Present Perfect (`has/have + V3`) connects a past event to the *present*. The instant a sentence locks the event to a **finished past timestamp** (*yesterday, last week, two hours ago, in 2021*), `has/have` becomes illegal—you MUST switch to **Simple Past (`V2`)**.',
          bullets: [
            '**Wrong:** ✗ "He **has visited** Jaipur yesterday." | **Right:** ✓ "He **visited** Jaipur yesterday."',
            '**Wrong:** ✗ "India **has won** independence in 1947." | **Right:** ✓ "India **won** independence in 1947."',
            '**Right Present Perfect (no finished time marker):** ✓ "He **has visited** Jaipur twice so far."',
          ],
        },
        {
          type: 'table',
          caption: 'Five High-Frequency CBSE Tense Rules & Error Traps',
          headers: ['Rule / Contrast', 'Precise Board Law', 'Trap (Wrong) vs. Fix (Right)'],
          rows: [
            ['**Simple Past vs. Present Perfect**', 'Finished past marker (`yesterday, ago, last night, in 2021`) = **Simple Past (`V2`)**. Unfinished/recent relevance (`just, already, yet, ever, since, for`) = **Present Perfect (`has/have + V3`)**.', '✗ "Did you finish yet?" (in formal CBSE) -> ✓ "**Have** you **finished** yet?"\n✗ "She **has arrived** an hour ago." -> ✓ "She **arrived** an hour ago."'],
            ['**Past Perfect: Earlier of Two Past Actions**', 'When two past events appear together, **Action 1 (earlier)** takes `had + V3`; **Action 2 (later)** takes `V2`. Never put BOTH clauses in `had + V3`!', '✓ "When I **reached** (Action 2) the station, the train **had already left** (Action 1)."\n✓ "Before the doctor **arrived**, the patient **had fainted**."'],
            ['**`since` vs. `for` + Perfect Continuous**', '`since` = exact **starting point** (*since Monday, since 2019, since 7 a.m.*). `for` = total **duration** (*for three hours, for five years*). With `since/for` continuing to now, never use simple Continuous (`is/was + V-ing`)!', '✗ "She **is living** here **since** 2020." -> ✓ "She **has been living** here **since** 2020."\n✗ "Wait here **since** two hours." -> ✓ "...**for** two hours."'],
            ['**Stative Verbs (No `-ing`)**', 'Verbs of mental state, possession, emotion, and senses (*know, believe, own, belong, prefer, smell, taste, love, seem, consist, understand*) describe states, not physical actions—use Simple or Perfect, NOT `-ing` (except temporary deliberate actions like *tasting the soup*).', '✗ "I **am knowing** him for years." -> ✓ "I **have known** him for years."\n✗ "This box **is belonging** to Meera." -> ✓ "This box **belongs** to Meera."'],
            ['**Future Perfect (`by + future time`)**', 'Deadline expressions (`by next Monday`, `by 5 p.m. tomorrow`, `by the time + Simple Present V1`) take **`will have + V3`**—never `will + V1` in the `by the time` time-clause!', '✓ "By next Monday, we **will have submitted** the project."\n✓ "By the time you **arrive** (V1, NOT `will arrive`), dinner **will have cooled**."'],
          ],
        },
        {
          type: 'dig-deeper',
          title: '"It is high time / It is time" & "Hardly...when / No sooner...than" Structures',
          summary:
            'CBSE higher-order editing questions occasionally test two classic past-tense idioms that mislead students who translate word-for-word.',
          bullets: [
            '**`It is time / It is high time + Subject + V2`:** Takes Simple Past (`V2`) even though the meaning is present urgency: ✓ "It is high time we **started** revising seriously." (NOT `start`).',
            '**`No sooner had + S + V3 ... than` & `Hardly/Scarcely had + S + V3 ... when`:** Notice inverted `had` before the subject and exact correlative pairs (`No sooner ... than`, `Hardly ... when`): ✓ "No sooner **had** the bell **rung** than the students stood up."',
          ],
        },
      ],
    },
    {
      id: 'rg-03-conditionals-sequence',
      title: '3. Sequence of Tenses, All 4 Conditionals & CBSE Editing Table',
      blocks: [
        {
          type: 'callout',
          variant: 'law',
          title: 'Sequence of Tenses (Subordinate Clause Rule)',
          body: 'When the **main verb is in a Past Tense** (*said, told, noticed, hoped, realised*), the verb in the subordinate clause normally shifts into a corresponding **Past Tense**—**EXCEPT** for Universal Truths, Scientific Facts, Proverbs, and Ongoing Habitual Facts.',
          bullets: [
            '**Normal Past Shift:** "He said that he **was** exhausted" (NOT `is`); "She promised she **would** call" (NOT `will`); "They realised the thief **had escaped**" (NOT `has escaped`).',
            '**Universal Truth Exception:** "Galileo proved that the Earth **revolves** around the Sun" (Simple Present stays because it remains permanently true).',
            '**Time-Clause Future Rule:** In future sentences starting with `when, before, after, until, as soon as, unless`, use **Simple Present (`V1`)** in the time-clause, NOT `will`: ✓ "Wait here until the rain **stops**." (NOT `will stop`).',
          ],
        },
        {
          type: 'table',
          caption: 'All 4 Conditionals (If-Clauses) — CBSE Formulas, Meanings & Top Trap',
          headers: ['Conditional Type', 'If-Clause Formula', 'Main Clause Formula', 'Meaning & Board Example'],
          rows: [
            ['**Type 0 (Zero)**\n*General / Scientific Truth*', '`If + Simple Present (V1)`', '`Simple Present (V1)`', 'Always true whenever condition occurs.\n"If you **heat** ice, it **melts**."'],
            ['**Type 1 (First)**\n*Real / Likely Future*', '`If + Simple Present (V1)`\n*(NEVER `will` after `if`!)*', '`will / shall / can / may + V1`', 'Realistic future possibility.\n"If it **rains**, we **will postpone** the match." (✗ `If it will rain...`)'],
            ['**Type 2 (Second)**\n*Unreal / Hypothetical Present*', '`If + Simple Past (V2)` OR `If + S + were`', '`would / could / might + V1`', 'Imaginary present or unlikely wish.\n"If I **were** the Principal, I **would extend** library hours."'],
            ['**Type 3 (Third)**\n*Unreal Past / Regret*', '`If + Past Perfect (had + V3)`', '`would / could + have + V3`', 'Unfulfilled past condition (cannot be changed now).\n"If he **had left** earlier, he **would have caught** the flight."'],
          ],
        },
        {
          type: 'table',
          caption: 'CBSE Board Error–Correction Preview: Tenses, Sequence & Conditionals',
          headers: ['Sentence with Error', 'Incorrect', 'Correction'],
          rows: [
            ['(a) My uncle **has returned** from Bengaluru last Tuesday.', '`has returned`', '`returned`'],
            ['(b) If it **will rain** tomorrow, the assembly will move indoors.', '`will rain`', '`rains`'],
            ['(c) She **is learning** classical dance since the age of six.', '`is learning`', '`has been learning`'],
            ['(d) I **am believing** every word of her speech.', '`am believing`', '`believe`'],
            ['(e) If I **was** a bird, I would soar above the valley.', '`was`', '`were`'],
            ['(f) Before the fire brigade arrived, neighbours **extinguished** the flames.', '`extinguished`', '`had extinguished`'],
            ['(g) If she had revised notes, she **will** have scored full marks.', '`will`', '`would`'],
          ],
        },
      ],
    },
    {
      id: 'rg-03-editing-board-drills',
      title: '4. Notebook Traps, Checkpoints & 8 Solved CBSE Board Drills',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Rohan',
          title: 'Trap 1: Using Present Perfect with "yesterday" + Putting "will" inside an If-Clause',
          wrongWork:
            'Sentence: "Riya has bought this atlas yesterday, and if it will help her, she will lend it to me."',
          teacherFix:
            'Riya bought this atlas yesterday, and if it helps her, she will lend it to me.',
          whyWrong:
            'Two classic errors: (1) "yesterday" marks a finished past event, forcing Simple Past ("bought"), not "has bought"; (2) Type 1 Conditional forbids "will" inside the "if"-clause ("if it helps", never "if it will help").',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Ananya',
          title: 'Trap 2: Using Present Continuous with "since" & Putting "had + V3" in BOTH Past Clauses',
          wrongWork:
            'Sentence: "We are waiting since noon, and when the bus had arrived, everyone had cheered."',
          teacherFix:
            'We have been waiting since noon, and when the bus arrived, everyone cheered (or: the passengers had already packed before the bus arrived).',
          whyWrong:
            '"Since noon" requires Present Perfect Continuous ("have been waiting"). Also, sequential single actions in the past take Simple Past ("arrived... cheered"); Past Perfect ("had + V3") is reserved strictly for an action completed *prior* to another past event.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Complete the Type 3 Conditional cleanly:\n"If the wicketkeeper ______ that sharp catch, India ______ the final by ten runs."',
          options: [
            { id: 'a', label: 'held / would win', sublabel: 'Type 2 Unreal Present' },
            { id: 'b', label: 'had held / would have won', sublabel: 'Type 3 Unreal Past' },
            { id: 'c', label: 'had held / will have won', sublabel: 'Mixed Future Perfect' },
            { id: 'd', label: 'would hold / had won', sublabel: 'Reversed would in if-clause' },
          ],
          correctIds: ['b'],
          multiSelect: false,
          successMsg:
            'Spot on! Type 3 Conditional pairs `If + had + V3` (`had held`) with `would have + V3` (`would have won`) for an unfulfilled past match.',
          hintMsg:
            'Remember the Type 3 symmetry rule: `had + V3` goes in the `if`-clause, and `would have + V3` goes in the main clause.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Select the ONLY grammatically valid sentence for CBSE Section B Editing:',
          options: [
            { id: 'a', label: 'The teacher told us that honesty was the best policy.', sublabel: 'Backshifted proverb' },
            { id: 'b', label: 'By the time the guests will reach, we decorated the hall.', sublabel: 'Future + Past mismatch' },
            { id: 'c', label: 'My brother has been owning this bicycle for four years.', sublabel: 'Stative verb in -ing' },
            { id: 'd', label: 'By next Friday, the council will have published the final schedule.', sublabel: 'Future Perfect deadline' },
          ],
          correctIds: ['d'],
          multiSelect: false,
          successMsg:
            'Correct! "By next Friday" signals completion before a future deadline -> `will have + V3`. (a) wrongly backshifts a proverb; (b) wrongly puts `will` in `by the time`; (c) wrongly puts stative `own` in `-ing`.',
          hintMsg:
            'Check Universal Truth rules (a), `by the time` rules (b), stative verbs like `own` (c), and `by + future time` (d).',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Gap-Fill MCQ) Fill in the blank with the correct verb form:\n*"By the time the rescue helicopter ______ the valley tomorrow morning, the hikers will have lit signal flares."*\n(A) will reach   (B) reached   (C) reaches   (D) has been reaching',
          answer:
            '**(C) reaches.**\nIn a future deadline sentence (`will have lit` in the main clause), the time-clause starting with `by the time` takes **Simple Present (`V1+s/es`)**, never `will`.',
          markingTip: '1M: Never put `will` after `by the time`, `when`, `until`, or `before` when referring to the future.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Gap-Fill — Earlier of Two Past Actions) Supply the correct tense of the verbs in brackets:\n*"When Meera ______ (open) the science kit, she realised someone ______ (already / take) the convex lens."*',
          answer:
            '**opened** / **had already taken**\n\nOpening the kit (`V2`) happened *after* someone had taken the lens (`had + V3`).',
          markingTip: '1M (0.5 + 0.5): Action 1 (earlier) = `had + V3`; Action 2 (later) = `V2`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Error & Correction — Editing) Spot the error and write the correction:\n*"Mr. Verma is teaching physics in Kendriya Vidyalaya since 2016."*',
          answer:
            '**Error:** `is teaching` | **Correction:** `has been teaching`\n\nRule: An action starting in the past (`since 2016`) and still ongoing requires **Present Perfect Continuous**, not Present Continuous.',
          markingTip: '1M: Watch for `is/are + V-ing` paired with `since` or `for`—a top CBSE editing staple.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Error & Correction — Stative Verb) Identify the error and supply the correction:\n*"She is preferring handwritten flashcards to digital summaries during revision."*',
          answer:
            '**Error:** `is preferring` | **Correction:** `prefers`\n\nRule: `prefer` is a stative verb expressing a mental attitude/preference and does not normally take `-ing` continuous forms.',
          markingTip: '1M: Other stative verbs tested similarly: `know, belong, own, believe, resemble, consist`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Gap-Fill — Type 2 Conditional) Complete the sentence cleanly:\n*"If I ______ (be) fluent in Mandarin, I would apply for the student exchange fellowship."*',
          answer:
            '**were** — Hypothetical present conditions (Type 2) use subjunctive **`were`** even with singular subjects like `I, he, she`.',
          markingTip: '1M: Standard CBSE formal writing prefers `If I were`, not `If I was`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Error & Correction — Sequence of Tenses) Spot the error and write the correction:\n*"Our astronomy mentor explained that light travelled at nearly 300,000 kilometres per second."*',
          answer:
            '**Error:** `travelled` | **Correction:** `travels`\n\nRule: Even after a past reporting verb (`explained`), scientific facts and universal truths stay in **Simple Present**.',
          markingTip: '1M: Always preserve Simple Present for permanent laws of nature and proverbs.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Gap-Fill — Past Perfect vs. Simple Past) Choose the correct option:\n*"Although the theatre ______ (close) its gates ten years ago, the old clock tower still ______ (stand) intact."*',
          answer:
            '**closed** / **stands**\n\n"Ten years ago" locks the first verb to **Simple Past (`closed`)**, while "still" signals a continuing present fact (**Simple Present `stands`**).',
          markingTip: '1M (0.5 + 0.5): `ago` = Simple Past; `still` + present state = Simple Present.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Error & Correction — Reported/Sequence Drill) Identify the tense error in this CBSE dialogue sentence:\n*"Arjun asked Priya whether she will attend the Robotics Club orientation on Saturday."*',
          answer:
            '**Error:** `will` | **Correction:** `would`\n\nRule: Under Sequence of Tenses, the past reporting verb `asked` shifts `will` into `would` inside the reported clause.',
          markingTip: '1M: In indirect speech after `said/asked/told`, `will -> would`, `can -> could`, `may -> might`.',
        },
      ],
    },
  ],
};
