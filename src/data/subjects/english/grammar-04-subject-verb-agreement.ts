import { Subtopic } from '../../../types/curriculum';

export const englishGrammar04Sva: Subtopic = {
  id: 'eng-rg-04',
  slug: 'subject-verb-agreement',
  title: 'Subject–Verb Agreement (12 Golden CBSE Concord Rules)',
  subtitle:
    'Complete CBSE Section B Subject–Verb Concord guide: the 12 Golden Rules, additive vs. proximity connectors, true-subject filtering, relative-clause traps, a number of vs. the number of, deceptive -s nouns, pair nouns, units, and board editing drills.',
  estimatedMinutes: 30,
  difficulty: 'Core CBSE',
  ncertSection: 'Section B — Grammar (Subject–Verb Concord)',
  learningObjectives: [
    'Locate the true head subject inside long prepositional phrases ("The quality of these mangoes is...") before selecting the verb.',
    'Apply the First-Subject Rule (as well as, along with, accompanied by) versus the Proximity Rule (either...or, neither...nor, not only...but also) without confusion.',
    'Master high-frequency CBSE traps: "one of the + plural noun + singular verb", relative-clause antecedents ("one of the students who work"), "a number of" vs. "the number of", and unanimous vs. divided collective nouns.',
    'Distinguish deceptive -s singular nouns (news, physics, innings), pair nouns (scissors vs. a pair of scissors), single-unit quantities (fifty kilometres, five lakh rupees), "many a", and "more than one".',
  ],
  keywords: [
    'Subject Verb Agreement Class 10',
    'Subject Verb Concord CBSE',
    '12 Golden Concord Rules',
    'Neither Nor Proximity Rule',
    'A Number Of vs The Number Of',
    'One of the Plural Noun Trap',
    'CBSE Error Correction Concord',
  ],
  sections: [
    {
      id: 'rg-04-golden-concord-rules',
      title: '1. The 12 Golden CBSE Concord Rules: Connectors, Compound Subjects & Head-Noun Filter',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Concord Core Principle',
          bullets: [
            '**The Core Law:** A finite verb ALWAYS agrees in **number** (singular/plural) and **person** (`I, you, he/she/it, they`) with its **true grammatical subject**—never with a nearby noun trapped inside a prepositional phrase or parenthetical modifier.',
            '**Verb S-Trap Reminder:** Adding **`-s/-es`** to a **noun** makes it *plural* (*boys, books*); adding **`-s/-es`** to a **present-tense verb** makes it *singular* (*runs, writes, has, does*).',
            '**Two-Second Strip Test:** Cross out phrases starting with `of, with, along with, in addition to, besides, except`—whatever remains to the left of the verb dictates `is/are`, `has/have`, or `V1/V1+s`.',
          ],
        },
        {
          type: 'table',
          caption: 'The 12 Golden CBSE Subject–Verb Concord Rules (Complete Exam Checklist)',
          headers: ['# & Rule Name', 'Exact Grammar Pattern', 'Board-Ready Examples'],
          rows: [
            ['**Rule 1: True-Subject Filter**', 'Subject + `of / in / on / with` + Object -> Verb agrees with the **head noun BEFORE the preposition**, never the object.', '✓ "**The quality** of these mangoes **is** remarkable." (Head = *quality*, NOT *mangoes*)'],
            ['**Rule 2: Additive Connectors (1st Subject Wins)**', '`S1 + as well as / along with / together with / accompanied by / besides / in addition to + S2` -> Verb obeys **`S1`**.', '✓ "**The captain**, along with his twelve teammates, **was** awarded." | ✓ "**The players**, as well as the coach, **are** ready."'],
            ['**Rule 3: Proximity Rule (`or / nor / but also`)**', '`either S1 or S2` / `neither S1 nor S2` / `not only S1 but also S2` -> Verb obeys the **nearer subject (`S2`)**.', '✓ "Neither the teacher nor **the students were** informed." | ✓ "Either the boys or **Riya has** the key."'],
            ['**Rule 4: Single Idea / Dish (`and`)**', 'Two nouns joined by `and` expressing **one joint dish, concept, or pair** -> **Singular verb**.', '✓ "**Bread and butter is** her daily breakfast." | ✓ "**Slow and steady wins** the race." | ✓ "**Time and tide waits** for none."'],
            ['**Rule 5: Article Repetition (`and`)**', '`The N1 and N2` (1 article = **1 person/role**) -> **Singular**. `The N1 and the N2` (2 articles = **2 people**) -> **Plural**.', '✓ "**The poet and philosopher has** arrived." (1 person)\n✓ "**The poet and the philosopher have** arrived." (2 distinct people)'],
            ['**Rule 6: Indefinite Pronouns**', '`each, every, everyone, everybody, someone, anyone, nobody, nothing` -> ALWAYS **Singular verb**.', '✓ "**Everyone** in the three sections **has** submitted the project." | ✓ "**Each** girl and boy **was** cheered."'],
            ['**Rule 7: `one of / either of / neither of`**', '`one of / each of / either of / neither of + Plural Noun` -> **Plural noun**, **Singular verb**.', '✓ "**One of** my closest friends **lives** in Kochi." | ✓ "**Neither of** the two proposals **looks** feasible."'],
            ['**Rule 8: Relative-Clause Antecedent**', '`one of the + Plural Noun + who/which/that` -> Verb in the relative clause agrees with the **Plural Noun** right before `who/that`!', '✓ "Riya is one of the **students who work** tirelessly." (NOT *works*)\n*Contrast:* ✓ "Riya is **the only one** of the students who **works** tirelessly."'],
            ['**Rule 9: `a number of` vs. `the number of`**', '**`A number of`** + Plural Noun (= *many*) -> **Plural verb**.\n**`The number of`** + Plural Noun (= *the count*) -> **Singular verb**.', '✓ "**A number of** saplings **were** planted today." | ✓ "**The number of** applicants **has** doubled."'],
            ['**Rule 10: Collective Nouns**', '*jury, committee, team, audience, family*: acting **as one unit** -> **Singular**; **divided / acting individually** -> **Plural**.', '✓ "The jury **has** reached a unanimous verdict." | ✓ "The jury **are** divided in their opinions."'],
            ['**Rule 11: Deceptive `-s` vs. Pair Nouns**', 'Subjects/diseases/news ending in `-s` (*news, physics, mathematics, economics, measles, innings*) -> **Singular**. Two-part pair nouns (*scissors, trousers, spectacles, binoculars*) -> **Plural** (unless after `a pair of`).', '✓ "No **news is** good news." | ✓ "These **scissors are** blunt." | ✓ "**A pair of** scissors **is** missing."'],
            ['**Rule 12: Units, `Many a` & `More than one`**', 'Sums of **distance, money, time, weight** as a single total -> **Singular**. **`Many a` + Singular Noun** -> **Singular**. **`More than one` + Singular Noun** -> **Singular**.', '✓ "**Fifty kilometres is** a long drive." | ✓ "**Many a** soldier **was** honoured." | ✓ "**More than one** file **is** missing."'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'How to Never Mix Up "along with" (Rule 2) and "neither...nor" (Rule 3)',
          body: 'Use a simple visual rule: **`with / as well as` belong to a side-car** (ignore everything inside commas/side-cars and agree with Subject 1), whereas **`or / nor` create a fork** (agree with whichever subject touches the verb!).',
        },
      ],
    },
    {
      id: 'rg-04-indefinite-collective-nouns',
      title: '2. Deep Dive: Indefinite Pronouns, Relative-Clause Traps, "a/the number of" & Collective Nouns',
      blocks: [
        {
          type: 'callout',
          variant: 'trap',
          title: 'The #1 Board Trap: "One of the + Plural Noun" vs. "One of the + Plural Noun + who"',
          body: 'Look closely at what immediately governs the verb—both patterns sit side-by-side in CBSE editing passages:',
          bullets: [
            '**Pattern A (Main Verb):** "One of the **athletes** in our squad **was** selected." -> Subject is **One**, so verb is singular (**was**). (Trap: writing *one of my friend*, forgetting the plural noun *friends*!).',
            '**Pattern B (Relative Clause Verb):** "Meera is one of the **athletes who practise** at dawn." -> Inside the `who`-clause, the antecedent of `who` is **athletes** (plural), so the verb MUST be plural (**practise**)!',
            '**Pattern C ("The only one" Twist):** "Meera is **the only one** of the athletes who **practises** at dawn." -> "the only one" shifts the antecedent back to singular **one**, making **practises** singular!',
          ],
        },
        {
          type: 'table',
          caption: 'Indefinite Pronouns, Quantifier Idioms & Collective Nouns — Detailed Decision Matrix',
          headers: ['Pattern / Word', 'Verb Number', 'Crucial Nuance & CBSE Example'],
          rows: [
            ['`each, every, everyone, somebody, nobody, neither of, either of`', '**Always Singular**', 'Even when followed by plural phrases: ✓ "**Neither of** the routes **leads** to the museum." | ✓ "**Somebody has** left a blazer."'],
            ['`a number of` + Plural Noun', '**Plural**', 'Functions like *several/many*: ✓ "**A number of** rare birds **visit** Chilika Lake each winter."'],
            ['`the number of` + Plural Noun', '**Singular**', 'Focuses on the single numerical figure/count: ✓ "**The number of** electric buses **is** rising steadily."'],
            ['`none of` + Noun', '**Singular** (uncountable) or **Plural/Singular** (countable)', 'With uncountable -> strictly **singular** ("None of the ink **is** left"). With plural countable -> CBSE prefers **plural** when meaning "not any of them" ("None of the guests **have** arrived") or singular in formal strictness ("None of them **has** failed").'],
            ['`plenty of / a lot of / most of / some of / half of` + Noun', 'Follows the **Noun after `of`**', 'Fraction/portion quantifiers mirror the noun inside `of`: ✓ "Half of the **cake is** eaten." vs. ✓ "Half of the **apples are** ripe."'],
            ['Collective Nouns (*jury, committee, team, family, herd, crew*)', '**Singular** (united) / **Plural** (divided)', 'Watch for pronoun clues (`its` = singular; `their` = plural): ✓ "The committee **has** submitted **its** report." vs. ✓ "The committee **are** arguing over **their** seats."'],
          ],
        },
        {
          type: 'key-points',
          title: 'Inverted Word-Order Traps ("There is / There are" & "Each...and each...")',
          items: [
            '**Dummy `There` / `Here`:** `There` is NOT the subject—look *after* the verb! ✓ "There **are** several reasons for the delay." vs. ✓ "There **is** a pair of boots in the corridor."',
            '**Repeated `Each` / `Every`:** Even when joined by `and`, `each` and `every` keep the verb **singular**: ✓ "**Each** bench and **each** desk **was** sanitised before the exam."',
            '**`Everyone` vs. `Every one of`:** `Everyone` (one word, people only) and `every one of + plural noun` (people or things) BOTH take a **singular verb**: ✓ "Every one of these poems **carries** a moral."',
          ],
        },
      ],
    },
    {
      id: 'rg-04-tricky-exceptions',
      title: '3. Tricky Exceptions: Deceptive -s Nouns, Pair Nouns, Units, "Many a" & Editing Table',
      blocks: [
        {
          type: 'table',
          caption: 'Six High-Yield CBSE Exceptions That Fool Ear-Based Guessing',
          headers: ['Exception Category', 'Key Words', 'Rule & Nuanced Examples'],
          rows: [
            ['**1. Deceptive `-s` Singular Nouns**', '*news, mathematics, physics, economics, politics, statistics, athletics, measles, mumps, billiards, innings*', 'Look plural (`-s`) but denote **one** field, disease, or game -> **Singular verb**.\n✓ "Mathematics **requires** steady practice." | ✓ "The first innings **was** decisive."\n*Nuance:* When referring to personal calculations/traits (*His mathematics*, *The statistics in the chart*), plural verb applies: ✓ "His mathematics **are** weak."'],
            ['**2. Pluralia Tantum (Pair Nouns)**', '*scissors, trousers, spectacles, binoculars, pliers, tongs, jeans, shoes, shorts*', 'Two-part items take a **Plural verb** when standing alone, BUT take a **Singular verb** after `a pair of`.\n✓ "My spectacles **are** on the desk." | ✓ "**A pair of** spectacles **is** lying on the desk."'],
            ['**3. Units as a Single Whole**', '*Fifty kilometres, Five lakh rupees, Ten years, Three kilograms*', 'When treated as one **single sum, distance, duration, or weight**, use a **Singular verb**.\n✓ "Fifty kilometres **is** too far to cycle in noon heat." | ✓ "Five lakh rupees **was** sanctioned for the lab."'],
            ['**4. `Many a` vs. `Many`**', '`Many a + Singular Noun` vs. `Many + Plural Noun`', '`Many a` emphasises one individual after another -> **Singular noun + Singular verb**.\n✓ "**Many a** student **dreams** of national honours." vs. ✓ "**Many** students **dream** of national honours."'],
            ['**5. `More than one`**', '`More than one + Singular Noun` vs. `More than two + Plural Noun`', 'Though meaning plural, **`More than one` + singular noun** takes a **Singular verb** by formal concord; `More than two` takes plural.\n✓ "**More than one** candidate **has** withdrawn." | ✓ "**More than two** candidates **have** withdrawn."'],
            ['**6. `The + Adjective` (Class Noun)**', '*the poor, the rich, the elderly, the injured, the brave*', '`The + adjective` naming an entire group of people takes a **Plural verb** (no `-s` added!).\n✓ "**The elderly deserve** respectful care." | ✓ "**The injured were** rushed to the clinic."'],
          ],
        },
        {
          type: 'table',
          caption: 'CBSE Board Editing Drill Preview: Subject–Verb Concord (Error | Correction)',
          headers: ['Line Text (with 1 Concord Error)', 'Incorrect', 'Correction'],
          rows: [
            ['(a) The **price** of imported solar panels **have** fallen sharply.', '`have`', '`has`'],
            ['(b) Neither the coach nor the **players was** satisfied with the pitch.', '`was`', '`were`'],
            ['(c) **The number of** electric scooters on city roads **are** increasing.', '`are`', '`is`'],
            ['(d) Riya is one of the debaters who **speaks** with calm clarity.', '`speaks`', '`speak`'],
            ['(e) Ten thousand rupees **were** spent on repairing the library roof.', '`were`', '`was`'],
            ['(f) **Many a** young scientist **have** drawn inspiration from Dr. Kalam.', '`have`', '`has`'],
            ['(g) A pair of sharp **scissors were** placed beside the ribbon.', '`were`', '`was`'],
          ],
        },
      ],
    },
    {
      id: 'rg-04-editing-board-drills',
      title: '4. Notebook Traps, Checkpoints & 8 Solved CBSE Board Drills',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Tanvi',
          title: 'Trap 1: Letting the Nearer Plural Noun inside an "of" Phrase Hijack the Verb',
          wrongWork:
            'Sentence: "A bouquet of fresh red roses were presented to the chief guest alongside a pair of spectacles that were engraved."',
          teacherFix:
            'A bouquet of fresh red roses was presented to the chief guest alongside a pair of spectacles that was engraved.',
          whyWrong:
            'In both clauses, a prepositional phrase ("of fresh red roses", "of spectacles") tricks the ear into choosing plural "were". Strip out the `of`-phrases: the true subjects are singular "A bouquet" and singular "a pair"!',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Vivaan',
          title: 'Trap 2: Confusing "along with" (1st Subject) and "who" Antecedent in Relative Clauses',
          wrongWork:
            'Sentence: "The Prime Minister, along with two cabinet ministers, are visiting tomorrow, and Kabir is one of the volunteers who is coordinating the stage."',
          teacherFix:
            'The Prime Minister, along with two cabinet ministers, is visiting tomorrow, and Kabir is one of the volunteers who are coordinating the stage.',
          whyWrong:
            '"Along with" is an additive connector—the verb obeys the FIRST subject ("The Prime Minister" -> singular "is"). Conversely, in "one of the volunteers who...", the pronoun "who" refers back to plural "volunteers" -> plural "are".',
        },
        {
          type: 'checkpoint',
          prompt:
            'Choose the exact verb pair to complete this dual-trap CBSE sentence:\n"Not only the captain but also the reserve bowlers ______ worried, because a number of vital matches ______ been washed out."',
          options: [
            { id: 'a', label: 'was / has', sublabel: 'Both singular' },
            { id: 'b', label: 'were / has', sublabel: 'Plural proximity + singular number' },
            { id: 'c', label: 'were / have', sublabel: 'Plural proximity + plural "a number of"' },
            { id: 'd', label: 'was / have', sublabel: 'Singular 1st subject + plural' },
          ],
          correctIds: ['c'],
          multiSelect: false,
          successMsg:
            'Spot on! "Not only...but also" obeys the nearer subject ("the reserve bowlers" -> plural "were"), and "a number of" (= many) always takes a plural verb ("have").',
          hintMsg:
            'Apply Rule 3 (Proximity Rule for "not only...but also") on the first blank, and Rule 9 ("a number of" vs. "the number of") on the second.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Which sentence below follows CBSE Subject–Verb Concord rules with ZERO errors?',
          options: [
            { id: 'a', label: 'The poet and the dramatist has won the Sahitya Akademi award.', sublabel: 'Two articles + singular verb' },
            { id: 'b', label: 'Slow and steady win the race.', sublabel: 'Single proverb + plural verb' },
            { id: 'c', label: 'More than one participant has submitted a working robotics model.', sublabel: '"More than one" + singular verb' },
            { id: 'd', label: 'The latest news from the border stations are reassuring.', sublabel: '"news" + plural verb' },
          ],
          correctIds: ['c'],
          multiSelect: false,
          successMsg:
            'Correct! "More than one + singular noun" takes a singular verb ("has"). In (a) two articles = two people -> "have"; in (b) joint proverb -> "wins"; in (d) "news" is always singular -> "is".',
          hintMsg:
            'Check how many people are named in (a), whether (b) is one proverb idea, and whether "news" in (d) is ever plural.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Gap-Fill MCQ) Fill in the blank with the right option:\n*"The Principal, accompanied by senior science teachers, ______ inspecting the newly built astronomy observatory."*\n(A) are   (B) were   (C) is   (D) have been',
          answer:
            '**(C) is.**\n`accompanied by` follows the **First-Subject Rule**: ignore `"accompanied by senior science teachers"` and match the singular head subject `"The Principal"`.',
          markingTip: '1M: Treat `as well as`, `along with`, and `accompanied by` identically—only Subject 1 controls the verb.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Error & Correction — Editing) Spot the concord error in this sentence and provide the correction:\n*"Neither the lab manual nor the test tubes was stored in the upper cabinet."*',
          answer:
            '**Error:** `was` | **Correction:** `were`\n\nRule: Under the **Proximity Rule** for `neither...nor`, the verb matches the nearer subject (`the test tubes`, plural -> `were`).',
          markingTip: '1M: Always look at the noun sitting *immediately after* `nor` or `or`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Gap-Fill — Relative Clause Trap) Complete the sentence with the correct verb form:\n*"Arjun is one of those rare debaters who never ______ (lose) composure under tough questioning."*',
          answer:
            '**lose** — In `one of those rare debaters who...`, the relative pronoun `who` refers to the plural antecedent `debaters`, requiring the plural verb **`lose`**.',
          markingTip: '1M: Only when `"the only one"` appears before `of` does the verb revert to singular (`loses`).',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Error & Correction — Editing) Identify the error and supply the correction:\n*"The number of community libraries across semi-urban towns have grown dramatically since 2023."*',
          answer:
            '**Error:** `have` | **Correction:** `has`\n\nRule: **`The number of`** + plural noun refers to a single numerical total and takes a **singular** verb (`has`), unlike `a number of`.',
          markingTip: '1M: Memorise the contrast: `A number of ... are/have` vs. `The number of ... is/has`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Gap-Fill — Collective Noun Cue) Choose the correct verb:\n*"After an hour of heated debate, the editorial committee ______ (was / were) divided over which cover photograph to print."*',
          answer:
            '**were** — The clue `"divided"` proves the members are acting as opposing individuals rather than a unanimous single body, requiring plural **`were`**.',
          markingTip: '1M: Look for context signals like *unanimous / its* (singular) vs. *divided / their* (plural).',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Error & Correction — Editing) Spot the error and write the correction:\n*"Three hours are more than enough time to complete Section A and Section B carefully."*',
          answer:
            '**Error:** `are` | **Correction:** `is`\n\nRule: A duration measured as one unified block (`Three hours`) takes a **singular** verb (`is`).',
          markingTip: '1M: Same unit rule applies to distance (*Twenty kilometres is*), weight (*Five kilos is*), and money (*Ten thousand rupees was*).',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Gap-Fill — Pair Noun vs. Deceptive `-s`) Fill in both blanks cleanly:\n*"His new binoculars ______ (is / are) powerful, whereas athletics ______ (remain / remains) his favourite morning sport."*',
          answer:
            '**are** / **remains**\n\n`binoculars` (without `a pair of`) is a plural two-part item (`are`); `athletics` is a deceptive `-s` singular discipline (`remains`).',
          markingTip: '1M (0.5 + 0.5): `binoculars` = plural; `a pair of binoculars` = singular; `athletics / gymnastics / news` = singular.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Error & Correction — Editing) Find the error and supply the correction:\n*"Many a tourist have marvelled at the geometric perfection of Rani ki Vav at sunrise."*',
          answer:
            '**Error:** `have` | **Correction:** `has`\n\nRule: `Many a` + singular noun (`tourist`) always takes a **singular** verb (`has`).',
          markingTip: '1M: Contrast `Many a tourist has...` (singular) with `Many tourists have...` (plural).',
        },
      ],
    },
  ],
};
