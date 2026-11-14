import { Subtopic } from '../../../types/curriculum';

export const englishGrammar07Mastery: Subtopic = {
  id: 'eng-rg-07-mastery',
  slug: 'reading-grammar-board-mastery',
  title: 'Reading & Grammar Board Mastery + 50-Q Speed Lab',
  subtitle:
    'Integrated 30-mark revision for Section A (20M Unseen Passages) & Section B (10M Grammar): Top 10 Examiner Traps, 60-Second Pre-Submission Audit, 50-Question Interactive Grammar Speed Lab, full 12-Q CBSE Mock Paper (Attempt any 10), and English Quiz Arena.',
  estimatedMinutes: 30,
  difficulty: 'Board Mastery',
  ncertSection: 'Section A & Section B Integrated Board Revision',
  learningObjectives: [
    'Eliminate the Top 10 CBSE examiner traps across Discursive/Case-Based Unseen Passages (20M) and Applied Grammar (10M).',
    'Execute a 60-second pre-submission audit across Determiners, Tenses, Subject–Verb Agreement, Modals, and Reported Speech.',
    'Complete 50 high-frequency board drills in the Interactive Grammar Speed Lab covering all 5 Section B topics.',
    'Benchmark full-paper readiness on a realistic 12-question CBSE Section B Mock Set (`Attempt ANY 10 of 12`) and the English Quiz Arena.',
  ],
  keywords: [
    'cbse class 10 english grammar mastery',
    'reading comprehension board traps',
    'english grammar 50 question lab',
    'section b grammar mock paper',
    'determiners tenses sva modals reported speech',
    'error correction cbse class 10',
  ],
  sections: [
    {
      id: 'rg-07-cheat-sheet',
      title: '1. Top 10 CBSE Reading & Grammar Examiner Traps + 60-Second Audit',
      blocks: [
        {
          type: 'quick-summary',
          title: '30-Mark Section A + Section B Scoring Blueprint (CBSE Code 184)',
          bullets: [
            '**Section A — Reading Skills (`20 Marks`):** Two passages × 10 marks each — Passage 1 **Discursive** (400–450 words) + Passage 2 **Case-Based Factual** with charts/data (200–250 words). Mix of 1-mark objective/inferential MCQs and 2-mark 30–40 word analytical responses.',
            '**Section B — Grammar (`10 Marks`):** **12 questions set; attempt ANY 10** (`10 × 1 = 10 marks`). Tested strictly in context via **Gap-Filling**, **Editing (`Error | Correction` box)**, and **Transformation / Dialogue Reporting** across 5 pillars: Determiners, Tenses, Subject–Verb Agreement, Modals, and Reported Speech.',
            '**Time Budget:** Spend **35–40 minutes** on Section A (skim questions first, verify numbers/tones from the text) and **10–12 minutes** on Section B (answer your 10 strongest questions cleanly, never leave blanks!).',
          ],
        },
        {
          type: 'table',
          caption: 'Top 10 CBSE Examiner Traps Across Section A (Reading) & Section B (Grammar)',
          headers: ['#', 'Topic & Trap Zone', 'What Costs Students Marks', 'Full-Mark Examiner Fix'],
          rows: [
            [
              '**1**',
              '**Unseen Passage: Outside Knowledge**',
              'Answering from personal opinion or general knowledge instead of what the passage actually states or implies.',
              'Anchor every MCQ and 2-mark answer to a **specific paragraph line**; reject options containing extreme absolutes (`always`, `never`, `all`) absent from the text.',
            ],
            [
              '**2**',
              '**Unseen Passage: Vocabulary POS Mismatch**',
              'Picking a word with a similar meaning whose **Part of Speech** (noun vs verb vs adjective) does not match the prompt word.',
              'Verify **same POS + exact contextual sense** (`stagnant` = adj → `motionless`, NOT `stagnation` noun).',
            ],
            [
              '**3**',
              '**Case-Based Data: Misreading Axes / Units**',
              'Confusing percentages with raw counts, or missing a peak/decline reversal in a specific year column.',
              'Read **title, axis labels, units (`%` vs `million`), and footnotes** before evaluating any Assertion/Inference MCQ.',
            ],
            [
              '**4**',
              '**Determiners: `few` / `a few` / `little` / `a little`**',
              'Treating `few`/`little` (= almost none, negative) as `a few`/`a little` (= some, positive), or using `much` with countable nouns.',
              'Check noun type (**Countable plural → `few`/`many`**; **Uncountable → `little`/`much`**) and tone (**nearly zero** vs **some/sufficient**).',
            ],
            [
              '**5**',
              '**Determiners: `each` / `every` + `the` with Superlatives/Unique Nouns**',
              'Using plural verb after `each`/`every`, or omitting `the` before superlatives, rivers, mountain ranges, and `the + adjective` groups.',
              '`Each / Every + singular noun` ALWAYS takes a **singular verb**; verify articles before acronyms (`an M.P.`, `a university` by **sound**, not letter!).',
            ],
            [
              '**6**',
              '**Tenses: Past Time Marker + Present Perfect**',
              'Writing *"He has submitted the report yesterday"* or using `is working` with `since 2021`.',
              'Finished past marker (`yesterday`, `ago`, `in 2020`, `last week`) locks **Simple Past (`V2`)**; `since`/`for` + ongoing action locks **`has/have been + V-ing`** (or `has/have + V3` for stative verbs).',
            ],
            [
              '**7**',
              '**Tenses: Two-Past-Actions & Conditional Mix-ups**',
              'Using `had + V3` for both clauses, or putting `would` inside the `if`-clause (*"If he would study..."*).',
              '**Earlier** of two past actions = **`had + V3`**, **later** action = **`V2`**. Never put `will/would` inside an `if`-clause (`If I were...`, `If he had studied, he would have passed`).',
            ],
            [
              '**8**',
              '**SVA: Intervening Prepositions & Correlatives**',
              'Agreeing the verb with the nearest noun after `of / along with / as well as` (*"The quality of the mangoes were poor"*).',
              'Look **before `of / with / as well as`** for the true head subject; for **`Either...or / Neither...nor / Not only...but also`**, match the verb to the **nearest subject**. Note: `A number of` + plural verb vs `The number of` + singular verb.',
            ],
            [
              '**9**',
              '**Modals: `mustn’t` vs `needn’t` & Bare `V1`**',
              'Writing `must not` on free-entry / optional notices, `can’t` vs `mustn’t` in deductions, `ought` without `to`, or `could solved`.',
              '**Prohibition = `must not`**; **Optional = `need not`**; **Negative deduction = `can’t be`**; **Modal + bare `V1`** (only `ought to`, `used to`, `have to` take `to`).',
            ],
            [
              '**10**',
              '**Reported Speech: Inversion, `that if` & `forbade not to`**',
              'Writing *"asked that if"*, *"asked where did he live"*, *"forbade not to"*, or backshifting universal truths.',
              'Always enforce **`Subject + Verb`** order after `if/wh-word`, drop `do/does/did`, never stack `that + if`, keep universal truths in Simple Present, and never double-negate `forbade`.',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'trap',
          title: '60-Second Pre-Submission Grammar Audit (Check Before Turning the Page)',
          body: 'Before moving from Section B to Section C, run this rapid 6-point scan over your 10 grammar answers:',
          bullets: [
            '**1. Question Count & Numbering:** Have you attempted **10** (or your cleanest 10 of 12) with exact board serial numbers `(i)–(xii)`?',
            '**2. SVA Check:** Does every verb match its **true head subject** (especially across `of`, `with`, `Either...or`, `One of the + plural noun + singular verb`)?',
            '**3. Modal Check:** Is every modal followed by **bare `V1`** (no `to` after `should/must/can`, no `-ed`), and does `mustn’t` vs `needn’t` match prohibition vs optionality?',
            '**4. Tense Anchor Check:** Did any `yesterday/last/ago` accidentally sneak into `has/have + V3`, or did `since/for` stay stuck in Simple Present?',
            '**5. Reported Speech Word Order:** Read every reported question aloud mentally — is it **`Subject + Verb` with a full stop** (NEVER `where did he...` or `that if`)?',
            '**6. `Error | Correction` Box Format:** Did you write the **exact faulty word** and its **single-word / exact replacement** side by side (`Error` | `Correction`), rather than rewriting the whole paragraph without highlighting the fix?',
          ],
        },
      ],
    },
    {
      id: 'rg-07-interactive-grammar-lab',
      title: '2. 10-Mark CBSE Grammar 50-Question Interactive Speed Lab',
      blocks: [
        {
          type: 'paragraph',
          text: 'Master all five CBSE Section B grammar pillars in one place. This offline interactive speed trainer organizes **50 board-pattern questions** (**10 each** on **Determiners**, **Tenses**, **Subject–Verb Agreement**, **Modals**, and **Reported Speech**) with instant shortcut rules and trap explanations after every attempt.',
        },
        {
          type: 'lab',
          labId: 'english-grammar-lab',
          title: '10-Mark CBSE Grammar 50-Question Interactive Speed Lab',
          caption:
            'Practice 50 board-pattern drills (10 each on Determiners, Tenses, Subject–Verb Agreement, Modals, and Reported Speech) with instant shortcut rules.',
        },
      ],
    },
    {
      id: 'rg-07-mock-12q-set',
      title: '3. Full 12-Question CBSE Section B Mock Paper (Attempt ANY 10 of 12 — 10 Marks)',
      blocks: [
        {
          type: 'callout',
          variant: 'tip',
          title: 'Official CBSE Board Format — Section B (Grammar: 10 Marks)',
          body: 'In the CBSE Class 10 English (Code 184) question paper, Section B presents **12 one-mark items** across Determiners, Tenses, Modals, Subject–Verb Agreement, and Reported Speech, from which you must attempt **ANY 10**. Attempt all 12 below as timed practice, then verify every single marking note!',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(i) Fill in the blank by using the correct form of the word in the bracket, for the given portion of a school magazine report:\n*"Our school’s Robotics Club ______ (design) autonomous solar rovers since 2022 and recently won the national prototype trophy."*',
          answer: '**`has been designing`**',
          markingTip:
            'Because `since 2022` connects a past starting point to the present ongoing activity (`Robotics Club` = singular collective unit), **Present Perfect Continuous (`has been designing`)** is required.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(ii) Read the conversation between a traffic warden and a cyclist. Complete the sentence by reporting the cyclist’s reply correctly:\nWarden: "Why are you riding without a front reflector after sunset?"\nCyclist: "I noticed the broken clamp only ten minutes ago, sir."\n\n*The warden asked the cyclist why he was riding without a front reflector after sunset, to which the cyclist respectfully replied that ______.*',
          answer:
            '**he had noticed the broken clamp only ten minutes before** *(or `earlier`)*.',
          markingTip:
            'Three mandatory shifts checked for 1 mark: `I` → `he`, Simple Past `noticed` → Past Perfect `had noticed`, and `ago` → `before`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(iii) Select the correct option to fill in the blank for the given line from an Eco-Park Entry Pass:\n*"Entry to the Butterfly Conservatory is covered under the main museum ticket; visitors ______ buy a separate pass at this gate."*\n(a) must not   (b) need not   (c) ought not   (d) dare not',
          answer: '**(b) need not**',
          markingTip:
            'Already covered by the main ticket = **absence of necessity** (`need not`), NOT prohibition (`must not`).',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(iv) Select the option that identifies the **error** and supplies the **correction** for the following line from a youth sports newsletter:\n*"Neither the captain nor the senior defenders was willing to concede an early penalty during the semi-final."*\n(a) Error: `Neither` | Correction: `Either`\n(b) Error: `nor` | Correction: `or`\n(c) Error: `was` | Correction: `were`\n(d) Error: `to concede` | Correction: `conceding`',
          answer: '**(c) Error: `was` | Correction: `were`**',
          markingTip:
            'With **`Neither ... nor`**, the verb agrees with the **nearest subject (`senior defenders` = plural)** → `were`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(v) Complete the given narrative by filling in the blank with the correct option:\n*"Although the drought ruined most of the village crops, ______ hope still remained among the farmers after the weather office forecast rain."*\n(a) little   (b) a little   (c) few   (d) many',
          answer: '**(b) a little**',
          markingTip:
            '`hope` is an uncountable noun (ruling out `few`/`many`), and `"still remained... after forecast rain"` signals a **positive, small amount** → `a little` (not negative `little`).',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(vi) Report the dialogue between a librarian and a student by completing the sentence:\nLibrarian: "Please keep your mobile phone on silent mode inside the reading hall."\nStudent: "Certainly, Ma’am. I will switch it off right away."\n\n*The librarian politely requested the student ______.*',
          answer:
            '**to keep his/her mobile phone on silent mode inside the reading hall**.',
          markingTip:
            'Imperative with `Please` → `requested + Object + to + V1` (drop `Please`, shift `your` → `his/her`).',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(vii) Identify the error and supply the correction in the given sentence from a school annual report:\n*"The number of students enrolling in classical music classes have risen sharply after the new auditorium opened."*\n\nUse format: **Error | Correction**',
          answer: '**Error:** `have`   |   **Correction:** `has`',
          markingTip:
            'CBSE SVA Classic: **`The number of`** + plural noun takes a **singular verb (`has`)** *(whereas `A number of` takes plural `have`)*.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(viii) Fill in the blank with the most appropriate modal for the situation:\n*"Wait! Your backpack is lying right by the door and the corridor is locked — Priya ______ left the campus yet."*\n(a) mustn’t have   (b) can’t have   (c) shouldn’t have   (d) needn’t have',
          answer: '**(b) can’t have**',
          markingTip:
            'Strong logical **impossibility** in the past (`locked corridor` + `bag still here`) takes **`can’t have + V3`**, never `mustn’t have`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(ix) Transform the following direct question into reported speech:\n*Inspector Rao said to the witness, "Which route did the delivery van take after crossing the bridge?"*',
          answer:
            '*Inspector Rao asked the witness **which route the delivery van had taken after crossing the bridge**.*',
          markingTip:
            'Do NOT write `did the delivery van take` or `that which`! Delete `did`, place Subject (`the delivery van`) before Verb, and backshift `did take` → `had taken`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(x) Identify the error and supply the correction in the given public-health banner:\n*"Every citizen ought obey traffic signals even when the intersection appears completely empty late at night."*\n\nUse format: **Error | Correction**',
          answer: '**Error:** `ought`   |   **Correction:** `ought to` *(or `should`)*',
          markingTip:
            'Unlike `should`/`must`, the semi-modal `ought` **always requires `to`** before `V1` (`ought to obey`).',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(xi) Fill in the blank by choosing the correct option to complete a news brief:\n*"By the time the rescue boat reached the flooded riverbank, the volunteers ______ all forty stranded villagers to higher ground."*\n(a) moved   (b) have moved   (c) had moved   (d) were moving',
          answer: '**(c) had moved**',
          markingTip:
            '`By the time + Simple Past (reached)` signals an action already completed **before** that past point → **Past Perfect (`had moved`)**.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(xii) Identify the error and supply the correction in the given classroom announcement:\n*"The teacher reminded the Grade 10 batch yesterday that boiling water at sea level always happened at 100 degrees Celsius."*\n\nUse format: **Error | Correction**',
          answer: '**Error:** `happened`   |   **Correction:** `happens`',
          markingTip:
            'Even though the reporting verb (`reminded`) is in the past tense, a **scientific / universal truth** never backshifts — keep Simple Present (`happens`).',
        },
      ],
    },
    {
      id: 'rg-07-quiz-arena',
      title: '4. CBSE English Quiz Arena — Reading, Grammar & Full Syllabus',
      blocks: [
        {
          type: 'paragraph',
          text: 'Test your accuracy offline in the **CBSE English Quiz Arena**. Use the unit selector inside the arena to isolate **Reading & Grammar** or **Writing Skills**, or challenge yourself across all 5 Class 10 English (Code 184) units together.',
        },
        {
          type: 'lab',
          labId: 'english-quiz-arena',
          title: 'CBSE English Quiz Arena — Reading, Grammar & Full Syllabus',
          caption:
            'Filter by Reading & Grammar or Writing Skills, or mix all 5 CBSE units offline.',
        },
      ],
    },
  ],
};
