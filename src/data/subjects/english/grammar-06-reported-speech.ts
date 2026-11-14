import { Subtopic } from '../../../types/curriculum';

export const englishGrammar06ReportedSpeech: Subtopic = {
  id: 'eng-rg-06',
  slug: 'reported-speech',
  title: 'Reported Speech: Statements, Questions, Commands & Dialogues',
  subtitle:
    'Complete CBSE conversion system: SON Pronoun Rule, Tense Backshift Chart & Universal-Truth exceptions, Time/Place shifts, Statement/Yes-No/Wh-question word-order laws, Imperatives/Let’s/Exclamations, and comic-strip dialogue narration.',
  estimatedMinutes: 35,
  difficulty: 'Core CBSE',
  ncertSection: 'Section B — Grammar (Reported Speech: Commands, Requests, Statements & Questions)',
  learningObjectives: [
    'Apply the 3-step Direct → Indirect engine: Reporting Verb + Linker, SON Pronoun mapping, Tense Backshift (and when NOT to shift), and Time/Place pointer shifts.',
    'Convert Statements, Yes/No Questions, and Wh-Questions cleanly into Assertive word order (Subject + Verb), eliminating CBSE’s #1 inversion trap (*where did he live* → *where he lived*).',
    'Report Commands, Requests, Negative Imperatives (`not to` vs `forbade + to`), Proposals (`Let’s...`), and Exclamations/Wishes without double-negative or linker errors.',
    'Score full marks on CBSE comic-strip and two-speaker dialogue completion tasks (Teacher–Student, Doctor–Patient, Customer–Shopkeeper).',
  ],
  keywords: [
    'reported speech class 10 cbse',
    'direct and indirect speech rules',
    'son rule pronouns',
    'tense backshift chart',
    'wh question inversion trap',
    'forbade vs not to imperative',
    'dialogue completion reported speech',
  ],
  sections: [
    {
      id: 'rg-06-core-shift-charts',
      title: '1. The 3 Essential Shift Charts: SON Pronouns, Tense Backshift & Time/Place Pointers',
      blocks: [
        {
          type: 'quick-summary',
          title: 'The 4-Part Reported Speech Engine (CBSE Section B)',
          bullets: [
            '**Rule 1 — Reporting Verb & Linker:** Match the reporting verb to sentence type (`told + that` for statements; `asked + if/wh-word` for questions; `requested/advised/ordered + to V1` for imperatives) and **remove quotation marks (`"..."`) and `?` / `!`**.',
            '**Rule 2 — Pronouns Follow SON:** `1`st person → **S**ubject of reporting verb; `2`nd person → **O**bject; `3`rd person → **N**o change.',
            '**Rule 3 — Tense Backshift:** When the reporting verb is in the **Past (`said`, `asked`, `told`)**, shift the verb one step back into the past — **EXCEPT** for Universal/Scientific Truths or Present/Future reporting verbs (`says`, `will say`).',
            '**Rule 4 — Time & Place Shift:** Near pointers (`now`, `today`, `yesterday`, `tomorrow`, `here`, `this`) step back to distant pointers (`then`, `that day`, `the previous day`, `the next day`, `there`, `that`).',
          ],
        },
        {
          type: 'table',
          caption: 'Chart 1 — Pronoun Conversion: The S-O-N Rule',
          headers: [
            'Person Inside Quotes (`"..."`)',
            'Changes According To',
            'Pronoun Family Examples',
            'Worked Conversion Example',
          ],
          rows: [
            [
              '**1st Person (`S`)**',
              '**Subject** of Reporting Verb',
              '`I, me, my, mine, we, us, our, ours`',
              '**Rohan** said, "**I** lost **my** pass." → **Rohan** said that **he** had lost **his** pass.',
            ],
            [
              '**2nd Person (`O`)**',
              '**Object** of Reporting Verb',
              '`you, your, yours` *(If object is omitted, assume `me` or 3rd person from context)*',
              'She said to **Meera**, "**You** forgot **your** file." → She told **Meera** that **she** had forgotten **her** file.',
            ],
            [
              '**3rd Person (`N`)**',
              '**No Change**',
              '`he, him, his, she, her, it, they, them, their` + Proper Nouns',
              'Amit said, "**They** praised **her** essay." → Amit said that **they** had praised **her** essay.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Chart 2 — Complete Tense Backshift Table + Mandatory No-Backshift Exceptions',
          headers: [
            'Direct Speech Tense / Modal',
            'Indirect Speech (When Reporting Verb Is Past)',
            'Direct → Indirect Board Example',
          ],
          rows: [
            [
              '**Simple Present (`V1` / `V1+s`)**',
              '**Simple Past (`V2`)**',
              '"I **write** neatly." → He said that he **wrote** neatly.',
            ],
            [
              '**`is / am / are`**',
              '**`was / were`**',
              '"The lab **is** locked." → She said that the lab **was** locked.',
            ],
            [
              '**Present Continuous (`is/am/are + V-ing`)**',
              '**Past Continuous (`was/were + V-ing`)**',
              '"We **are revising** modals." → They said that they **were revising** modals.',
            ],
            [
              '**Present Perfect (`has/have + V3`)**',
              '**Past Perfect (`had + V3`)**',
              '"Ritu **has submitted** the form." → He told me that Ritu **had submitted** the form.',
            ],
            [
              '**Simple Past (`V2` / `did + V1`)**',
              '**Past Perfect (`had + V3`)**',
              '"I **visited** Hampi last month." → She said that she **had visited** Hampi the previous month.',
            ],
            [
              '**Past Continuous (`was/were + V-ing`)**',
              '**Past Perfect Continuous (`had been + V-ing`)**',
              '"It **was drizzling** at dawn." → He said that it **had been drizzling** at dawn.',
            ],
            [
              '**Past Perfect (`had + V3`)**',
              '**No Change (`had + V3`)**',
              '"The train **had left**." → She said that the train **had left**.',
            ],
            [
              '**`will` / `shall` / `can` / `may` / `must`**',
              '**`would` / `should` or `would` / `could` / `might` / `had to`**',
              '"I **will** help; you **must** wait." → He said he **would** help and I **had to** wait.',
            ],
            [
              '**EXCEPTION 1: Present/Future Reporting Verb** (`says`, `tells`, `has said`, `will say`)',
              '**NO Tense Backshift** *(only SON pronouns change)*',
              'Mother **says**, "Dinner **is** ready." → Mother **says** that dinner **is** ready.',
            ],
            [
              '**EXCEPTION 2: Universal / Scientific Truth / Proverb / Permanent Habit**',
              '**NO Tense Backshift** *(keep Simple Present)*',
              'Teacher said, "Water **boils** at 100°C." → Teacher said that water **boils** at 100°C.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Chart 3 — Time, Place & Demonstrative Pointer Shifts',
          headers: ['Direct Speech Word', 'Indirect Speech Equivalent', 'Direct Speech Word', 'Indirect Speech Equivalent'],
          rows: [
            ['**`now`**', '`then` *(or omitted if unnatural)*', '**`here`**', '`there`'],
            ['**`today`**', '`that day`', '**`this`**', '`that`'],
            ['**`tonight`**', '`that night`', '**`these`**', '`those`'],
            ['**`yesterday`**', '`the previous day` / `the day before`', '**`ago`**', '`before`'],
            ['**`tomorrow`**', '`the next day` / `the following day`', '**`last week / month / year`**', '`the previous week / month / year` *(or `...before`)*'],
            ['**`next week / month`**', '`the following week / month`', '**`thus`**', '`so`'],
          ],
        },
      ],
    },
    {
      id: 'rg-06-statements-questions',
      title: '2. Statements, Yes/No Questions & Wh-Questions (The #1 Inversion Trap)',
      blocks: [
        {
          type: 'steps',
          title: '5-Step Conversion Blueprint for Statements & Interrogatives',
          items: [
            {
              label: 'Step 1 — Statements: Keep `said`, or Turn `said to + Object` into `told + Object`',
              detail:
                'Use **`said that...`** when there is NO listener (`He said, "I am tired"` → `He said that he was tired`). When a listener is named (`said to me`), convert to **`told me that...`** — NEVER write `told to me` or `said me`!',
              example:
                'Direct: Priya said to Arjun, "I have booked the tickets." → Indirect: Priya **told Arjun that** she **had booked** the tickets.',
            },
            {
              label: 'Step 2 — Yes/No Questions: Use `asked / inquired (of)` + `if` / `whether` + `Subject + Verb`',
              detail:
                'Questions beginning with an auxiliary (`Do, Does, Did, Is, Are, Was, Have, Can, Will`) take **`if`** or **`whether`** (prefer `whether` when `"or not"` appears). NEVER combine **`that + if`** (`asked that if` is 100% wrong!).',
              example:
                'Direct: He asked me, "Are you attending the seminar?" → Indirect: He asked me **if I was attending** the seminar.',
            },
            {
              label: 'Step 3 — Drop `do / does / did` in Positive Questions & Shift the Main Verb',
              detail:
                'In positive Direct questions (`"Do you like...?""`, `"Did she finish...?"`), `do/does/did` exists ONLY to ask a question. When you turn the clause into an assertive statement in Indirect speech, **delete `do/does/did`** and backshift the main verb: `Do/Does + V1` → **`V2`**; `Did + V1` → **`had + V3`**! *(Keep `don’t/doesn’t/didn’t` in negative questions, shifting to `didn’t + V1` or `hadn’t + V3`.)*',
              example:
                'Direct: "Did you lock the gate?" → Delete `did`, shift `lock` to `had locked` → He asked **if I had locked** the gate.',
            },
            {
              label: 'Step 4 — Wh-Questions: Repeat the `Wh-word` (NO `that`, NO `if`)',
              detail:
                'Questions starting with `what, where, when, why, who, whom, whose, which, how` keep the exact `wh-word` as the connector. NEVER insert `that` before the `wh-word` (`asked that where` ✗).',
              example:
                'Direct: She asked, "Why are you whispering?" → Indirect: She asked **why I was whispering**.',
            },
            {
              label: 'Step 5 — Lock Assertive Word Order (`Subject + Verb`, NEVER `Verb + Subject`)',
              detail:
                'This is CBSE’s #1 question-reporting trap! Once a question enters Indirect speech, it ceases to be a question — end with a **full stop (`.`)** and put the **Subject BEFORE the Verb (`where he lived`, `what the time was`, `when the bus would arrive`)**.',
              example:
                'Direct: "Where do you live?" → Correct: He asked **where I lived**. (WRONG: *He asked where did I live* / *where lived I*!)',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Side-by-Side Comparison: Statements vs Yes/No Questions vs Wh-Questions',
          headers: [
            'Sentence Type',
            'Reporting Verb + Linker',
            'Direct Speech',
            'Full-Mark Indirect Speech',
          ],
          rows: [
            [
              '**Statement (no object)**',
              '`said that`',
              'Neha said, "I finished my project yesterday."',
              'Neha **said that** she **had finished** her project **the previous day**.',
            ],
            [
              '**Statement (with object)**',
              '`told + Object + that`',
              'Coach said to the team, "Practice starts at 6 a.m."',
              'Coach **told the team that** practice **started** at 6 a.m.',
            ],
            [
              '**Yes/No Question (`Do/Does`)**',
              '`asked + Object + if/whether`',
              'Riya said to me, "Do you need my calculator?"',
              'Riya **asked me if** I **needed** her calculator.',
            ],
            [
              '**Yes/No Question (`Did`)**',
              '`asked + Object + if/whether`',
              'Officer asked, "Did the courier arrive on time?"',
              'The officer **asked whether** the courier **had arrived** on time.',
            ],
            [
              '**Wh-Question (Inversion Trap)**',
              '`asked + (Object) + wh-word`',
              'Tourist said to the guide, "When does the museum open?"',
              'The tourist **asked the guide when** the museum **opened**.',
            ],
            [
              '**Wh-Question (Past `did`)**',
              '`asked + (Object) + wh-word`',
              'Mother asked Aryan, "Where did you keep the spare key?"',
              'Mother **asked Aryan where** he **had kept** the spare key.',
            ],
          ],
        },
      ],
    },
    {
      id: 'rg-06-commands-requests-exclamations',
      title: '3. Commands, Requests, Negative Imperatives, `Let’s` Proposals & Exclamations',
      blocks: [
        {
          type: 'steps',
          title: 'Rules for Imperatives, Proposals, Exclamations & Wishes',
          items: [
            {
              label: '1. Positive Commands, Requests & Advice → `Reporting Verb + Object + to + V1`',
              detail:
                'Choose the reporting verb by speaker tone: **`ordered / commanded`** (boss/officer/authority), **`requested`** (drop `"Please"` / `"Kindly"`!), **`advised / urged`** (doctor/elder/teacher), **`warned / reminded`** (safety/memory). Always include the listener (`Object`) before `to + V1`.',
              example:
                'Doctor to patient: "Please take this syrup twice daily." → The doctor **advised/requested** the patient **to take** that syrup twice daily.',
            },
            {
              label: '2. Negative Imperatives (`Don’t...`) → `not to + V1` OR `forbade + Object + to + V1`',
              detail:
                'Two valid paths — pick ONE cleanly:\n' +
                '• **Path A (Safest):** `told / advised / warned / ordered + Object + not to + V1` (`not` goes BEFORE `to`, never `to not`).\n' +
                '• **Path B (`forbade`):** `forbade + Object + to + V1` (since `forbade` already means *"ordered not to"*, **NEVER add `not`** after `forbade`!).',
              example:
                'Direct: Warden said to boys, "Don’t leave the hostel after 8 p.m." → The warden **ordered the boys not to leave**... OR **forbade the boys to leave** the hostel after 8 p.m.',
            },
            {
              label: '3. Proposals (`Let’s...`) → `suggested / proposed that they/we should + V1` (or `+ V-ing`)',
              detail:
                'For suggestions starting with **`Let us / Let’s`**, use **`suggested that they/we should + V1`** or **`suggested + V-ing`**. Watch the preposition trap: write **`suggested to me`** (NEVER `suggested me that...` or `suggested me to go`!). For permissive `"Let me/him..."` (`"Let me speak"`), use `requested to let him/her + V1` or `requested that he might be allowed to + V1`.',
              example:
                'Direct: Ankit said to friends, "Let’s organise a book drive." → Ankit **suggested to his friends that they should organise** a book drive (or Ankit **suggested organising** a book drive).',
            },
            {
              label: '4. Exclamations & Wishes → `exclaimed with [emotion] that...` / `wished / prayed that...`',
              detail:
                'Replace interjections with emotion labels: `Hurrah! / Bravo!` → **`exclaimed with joy / applauded... saying that`**; `Alas! / Oh no!` → **`exclaimed with sorrow / regret that`**; `What a...! / How...!` → **`exclaimed with wonder/surprise that` + Subject + Past Verb + `very / great`**! For prayers/blessings (`"May God bless you!"`), use **`prayed / wished that`** + `Subject + might + V1`.',
              example:
                'Direct: Tourist said, "What a magnificent stepwell this is!" → Indirect: The tourist **exclaimed with wonder that it was a very magnificent stepwell**.',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Imperatives, Proposals & Exclamations — Quick Conversion Matrix',
          headers: ['Direct Mood & Cue', 'Exact Indirect Structure', 'Board-Pattern Example'],
          rows: [
            [
              '**Request (`Please / Kindly`)**',
              '`requested + Object + to + V1` *(delete `please`)*',
              '"Please lend me your atlas." → She **requested me to lend** her my atlas.',
            ],
            [
              '**Command / Instruction**',
              '`ordered / instructed / directed + Object + to + V1`',
              '"Stand in a single queue." → The monitor **instructed the students to stand** in a single queue.',
            ],
            [
              '**Negative (`Don’t...`)**',
              '`warned / told + Object + not to + V1` OR `forbade + Object + to + V1`',
              '"Don’t touch live wires." → The electrician **warned us not to touch** live wires.',
            ],
            [
              '**Proposal (`Let’s...`)**',
              '`suggested (to + Obj) that they/we should + V1` / `+ V-ing`',
              '"Let’s plant saplings." → Meera **suggested that they should plant** saplings.',
            ],
            [
              '**Exclamation (`What / How`)**',
              '`exclaimed (with wonder) that + S + was/were + very/great...`',
              '"How swiftly the cheetah runs!" → He **exclaimed that** the cheetah **ran very swiftly**.',
            ],
            [
              '**Wish / Blessing (`May...`)**',
              '`wished / prayed that + S + might + V1`',
              '"May you win the scholarship!" → Grandpa **prayed that I might win** the scholarship.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'CBSE Reported Speech Editing Traps (`Error | Correction`)',
          headers: ['Faulty Indirect Sentence', 'Error', 'Correction', 'Why CBSE Deducts Marks'],
          rows: [
            [
              'Rohan **told to me** that the quiz was postponed.',
              '`told to me`',
              '`told me`',
              '`tell/told` is transitive — NEVER insert `to` before its object.',
            ],
            [
              'She **asked that if** I had brought the lab manual.',
              '`that if`',
              '`if`',
              'Never stack `that` + `if/whether` or `that` + `wh-word`.',
            ],
            [
              'The policeman asked the lost child **where did he live**.',
              '`did he live`',
              '`he lived`',
              '**#1 Inversion Trap:** Indirect questions require `Subject + Verb` order and drop `did`.',
            ],
            [
              'The curator **forbade visitors not to touch** the fossils.',
              '`not to`',
              '`to`',
              '`forbade` already carries negation; `forbade ... not to` is an invalid double negative.',
            ],
            [
              'Our physics teacher said that light **travelled** faster than sound.',
              '`travelled`',
              '`travels`',
              'Universal / scientific truths NEVER backshift into past tense.',
            ],
            [
              'Kiran **suggested me to join** the robotics club.',
              '`me to join`',
              '`that I should join` *(or `joining`)*',
              '`suggest` does not take `Object + to-infinitive`; use `that + clause` or `V-ing`.',
            ],
          ],
        },
      ],
    },
    {
      id: 'rg-06-dialogue-board-drills',
      title: '4. Notebook Traps, Checkpoints & 8 Solved CBSE Dialogue-Narration Drills',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Dev (Class 10)',
          title: 'Stacking `that` Before `if/wh-word` & Keeping Question Inversion (`did he go`)',
          wrongWork:
            '1) The receptionist asked the guest that if he had a reservation.\n2) The conductor asked the boy that where did he want to get off.',
          teacherFix:
            '1) The receptionist asked the guest if / whether he had a reservation.\n2) The conductor asked the boy where he wanted to get off.',
          whyWrong:
            'Two fatal CBSE errors: (1) `that` NEVER precedes `if`, `whether`, or any `wh-word`; (2) In Indirect questions, **delete `do/does/did`** and place the **Subject before the Verb** (`where he wanted`, NOT `where did he want`).',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Sanya (Class 10)',
          title: 'Double-Negative `forbade ... not to` & Redundant `told to me`',
          wrongWork:
            '1) The doctor told to me to take rest and forbade me not to eat fried food.\n2) Our geography teacher told that the earth revolved around the sun.',
          teacherFix:
            '1) The doctor told me to take rest and forbade me to eat fried food (or advised me not to eat fried food).\n2) Our geography teacher said / told us that the earth revolves around the sun.',
          whyWrong:
            'Three board rules violated: (1) `told` never takes `to` (`told me`), and always requires an object (`said that` when no listener is named); (2) `forbade` already means *ordered not to* — adding `not` reverses the meaning; (3) Scientific facts (`revolves`) stay in Simple Present.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Report this Direct question accurately: **Father said to Aarav, "Why did you return so late from tuition?"**',
          options: [
            { id: 'a', label: 'Father asked Aarav why did he return so late from tuition.' },
            { id: 'b', label: 'Father asked Aarav that why he had returned so late from tuition.' },
            { id: 'c', label: 'Father asked Aarav why he had returned so late from tuition.' },
            { id: 'd', label: 'Father asked Aarav why returned he so late from tuition.' },
          ],
          correctIds: ['c'],
          successMsg:
            'Perfect! You dropped `that`, removed `did`, placed Subject (`he`) before Verb, and backshifted Simple Past (`did return`) → Past Perfect (`had returned`).',
          hintMsg:
            'Eliminate options with `did` inversion, `that why`, or `Verb + Subject` order. Also shift Simple Past (`did + V1`) to Past Perfect (`had + V3`).',
        },
        {
          type: 'checkpoint',
          prompt:
            'Choose the ONLY correct indirect reporting of: **The lifeguard shouted to the swimmers, "Don’t swim beyond the red buoys!"**',
          options: [
            { id: 'a', label: 'The lifeguard forbade the swimmers not to swim beyond the red buoys.' },
            { id: 'b', label: 'The lifeguard warned the swimmers not to swim beyond the red buoys.' },
            { id: 'c', label: 'The lifeguard warned the swimmers to not swam beyond the red buoys.' },
            { id: 'd', label: 'The lifeguard said the swimmers don’t swim beyond the red buoys.' },
          ],
          correctIds: ['b'],
          successMsg:
            'Correct! `warned + Object + not to + V1` is clean and unambiguous. Note (a) is a double negative (`forbade not to`), and (c) wrongly uses `swam` after `to`.',
          hintMsg:
            'Remember: `forbade` must NEVER pair with `not to`, and `to` always takes bare `V1` (`swim`), with `not` placed before `to`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q1 (Comic-Strip Statement + Time Shift — Teacher–Student Dialogue):\nRead the dialogue and complete the passage:\nTeacher: "Why haven’t you brought your geometry box today?"\nStudent: "I left it on my study table last night, Ma’am."\n\nReport the **Student’s** reply: *The student respectfully replied that ______.*',
          answer:
            'The student respectfully replied that **he/she had left it on his/her study table the previous night (or the night before)**.',
          markingTip:
            'Full 1 mark checks three shifts: `I` → `he/she` (and `my` → `his/her`), Simple Past `left` → Past Perfect `had left`, and `last night` → `the previous night / the night before`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q2 (Doctor–Patient Dialogue — Yes/No Question + Imperative):\nDoctor: "Have you been taking the prescribed iron tablets regularly?"\nPatient: "Yes, Doctor, I take one every morning."\n\nReport the **Doctor’s** question: *The doctor asked the patient ______.*',
          answer:
            'The doctor asked the patient **if / whether he (or she) had been taking the prescribed iron tablets regularly**.',
          markingTip:
            'Yes/No question → `if / whether` + Subject (`he/she`) BEFORE verb + Present Perfect Continuous (`have been taking`) → Past Perfect Continuous (`had been taking`). No question mark!',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q3 (Comic-Strip Wh-Question + Inversion Trap — Mother & Son):\nMother: "Where are you going in such a hurry with your cricket kit?"\nKabir: "Our coach has called an extra practice match today."\n\nComplete the narration: *Mother asked Kabir ______.*',
          answer:
            'Mother asked Kabir **where he was going in such a hurry with his cricket kit**.',
          markingTip:
            'Watch ALL three conversions: `are you going` → `he was going` (assertive order, NO `was he going`!), `your` → `his`, and end with a full stop.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q4 (Shopkeeper–Customer Dialogue — Polite Request / Modal Backshift):\nCustomer: "Could you show me a cotton kurta in sky blue?"\nShopkeeper: "Certainly, sir. I will bring our newest stock right now."\n\nReport BOTH utterances:\n(i) *The customer politely requested the shopkeeper ______.*\n(ii) *The shopkeeper agreed warmly and added that ______.*',
          answer:
            '**(i)** ...**to show him/her a cotton kurta in sky blue** *(or asked if he could show him/her...)*.\n**(ii)** ...**he would bring their newest stock right then (or immediately)**.',
          markingTip:
            '`Could you...?` requests convert naturally via `requested + Object + to + V1`! In (ii), `will` → `would`, `our` → `their`, and `now` → `then`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q5 (Negative Imperative — Librarian & Student):\nLibrarian: "Do not underline sentences in library reference books."\nStudent: "Sorry, Ma’am. I will use sticky notes from tomorrow."\n\nReport the **Librarian’s** instruction in two valid CBSE ways: *The librarian ______.*',
          answer:
            '• **Option 1:** The librarian **warned / instructed the student not to underline** sentences in library reference books.\n• **Option 2:** The librarian **forbade the student to underline** sentences in library reference books.',
          markingTip:
            'Never mix the two (`forbade ... not to` = 0 marks). Keep either `not to` OR `forbade ... to`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q6 (Proposal with `Let’s` — Two Friends):\nAnanya said to Priya, "Let’s visit the National Science Centre this Sunday instead of staying indoors."\nRewrite in Reported Speech.',
          answer:
            'Ananya **suggested / proposed to Priya that they should visit** the National Science Centre **that Sunday** instead of staying indoors *(or: Ananya suggested **visiting** the National Science Centre that Sunday instead of staying indoors)*.',
          markingTip:
            'Remember: `suggested to Priya` (never `suggested Priya`), `should visit` for `Let’s`, and `this Sunday` → `that Sunday`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q7 (Universal Truth & Present Reporting Verb Trap):\nConvert BOTH sentences carefully:\n(a) Grandma says, "Honesty always wins respect in the end."\n(b) The biology teacher said, "Chlorophyll absorbs red and blue light during photosynthesis."',
          answer:
            '**(a)** Grandma **says** that honesty always **wins** respect in the end.\n**(b)** The biology teacher said that chlorophyll **absorbs** red and blue light during photosynthesis.',
          markingTip:
            'In (a), the reporting verb `says` is Present tense → NO backshift. In (b), even though `said` is Past, the quoted statement is a scientific fact → keep `absorbs` in Simple Present!',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q8 (Exclamatory Comic-Strip Panel — Coach & Team):\nAfter the final whistle, the coach cheered, "Hurrah! What a courageous comeback you have staged today!"\nReport the coach’s reaction.',
          answer:
            'After the final whistle, the coach **exclaimed with joy that they had staged a very courageous comeback that day**.',
          markingTip:
            'Score every mark point: `Hurrah!` → `exclaimed with joy that`, `What a...!` → `a very...`, `you` → `they`, `have staged` → `had staged`, and `today` → `that day`.',
        },
      ],
    },
  ],
};
