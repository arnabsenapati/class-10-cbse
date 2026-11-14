import { Subtopic } from '../../../types/curriculum';

export const englishGrammar05Modals: Subtopic = {
  id: 'eng-rg-05',
  slug: 'modals',
  title: 'Modals: Obligation, Permission, Deduction & Past Modals',
  subtitle:
    'Complete CBSE Modal Function Matrix (14 auxiliaries), Golden Bare-Infinitive Law, the #1 Signage Trap (mustn’t vs needn’t), epistemic certainty scale, past modals (modal + have + V3), and board editing drills.',
  estimatedMinutes: 30,
  difficulty: 'Core CBSE',
  ncertSection: 'Section B — Grammar (Modals)',
  learningObjectives: [
    'Match every CBSE modal auxiliary (can, could, may, might, must, have to, should, ought to, need not, will, would, shall, used to, dare) to its exact communicative function.',
    'Distinguish clearly between strict prohibition (must not), optionality / absence of necessity (need not / don’t have to), internal command (must), and external rule (have to).',
    'Apply the Epistemic Deduction Scale (must be vs may/might/could be vs can’t be) and Past Modals (should/ought to/could/must/needn’t + have + V3) accurately in gap-filling.',
    'Spot and fix high-frequency CBSE editing errors: modal + to + V1, inflected modals or V2 after modals, double modals, and missing to after ought.',
  ],
  keywords: [
    'modals class 10 cbse',
    'must vs have to',
    'must not vs need not',
    'should vs ought to',
    'past modals should have could have',
    'deduction must be vs cant be',
    'cbse signage gap filling',
    'modal editing error correction',
  ],
  sections: [
    {
      id: 'rg-05-modal-function-matrix',
      title: '1. Complete CBSE Modal Function Matrix & Golden Structural Law',
      blocks: [
        {
          type: 'quick-summary',
          title: 'What Modals Do & How CBSE Tests Them (Code 184)',
          bullets: [
            '**Modal Auxiliaries** express a speaker’s **attitude or mood** — ability, permission, polite request, obligation, prohibition, absence of necessity, advice, certainty, or past habit.',
            '**Golden Formula:** Every standard modal takes the **bare infinitive (`V1` without `to`)** and **never changes form** for person or number (`She can swim`, NEVER `She cans swim` or `She can to swim`).',
            '**4 High-Frequency CBSE Question Types:** (1) Public noticeboard / school circular gap-fills (`must` vs `mustn’t` vs `needn’t`), (2) Polite dialogue completion (`Could`/`Would`/`May`), (3) Deduction & Past Regret gap-fills (`can’t be`, `should have + V3`), and (4) `Error | Correction` editing boxes.',
          ],
        },
        {
          type: 'table',
          caption: 'Master CBSE Modal Function Matrix — All 14 Modals & Semi-Modals',
          headers: [
            'Modal Auxiliary',
            'Core Functions Tested in CBSE',
            'Board-Style Example',
            'Key Exam Trap / Nuance',
          ],
          rows: [
            [
              '**`can`**',
              'Present ability; informal permission / request; general possibility.',
              'Riya **can** solve quadratic equations mentally. **Can** I borrow your ruler?',
              'Negative of ability = `cannot` (one word) / `can’t`; logical impossibility = `can’t be`.',
            ],
            [
              '**`could`**',
              'Past ability; very polite request; remote possibility.',
              'At six, he **could** swim across the pool. **Could** you pass the salt, please?',
              'In formal permission **replies**, use `may` (`Yes, you may`), NEVER `Yes, you could`.',
            ],
            [
              '**`may`**',
              'Formal permission (seeking/granting); factual possibility (~50%); formal wish/blessing.',
              '**May** I come in, Madam? Look at the clouds — it **may** rain. **May** you prosper!',
              'Formal permission always prefers `May I...?` over `Can I...?` in teacher–student dialogues.',
            ],
            [
              '**`might`**',
              'Weak / hesitant possibility (~25–35%); tentative suggestion; past of `may` in Reported Speech.',
              'He **might** join the trek if his ankle heals. She said it **might** snow.',
              'Use `might` when the sentence signals doubt (`perhaps`, `not sure`, `though`).',
            ],
            [
              '**`must`**',
              'Strong internal / official obligation; urgent necessity; ~95% logical certainty.',
              'Candidates **must** carry admit cards. Her lights are on — she **must** be awake.',
              'Has **no past form** for obligation (`had to` replaces it); negative deduction is `can’t be`, NOT `mustn’t be`.',
            ],
            [
              '**`have to`** *(semi-modal)*',
              'External obligation imposed by rules, schedules, or circumstances (`had to` in past).',
              'Because the bus broke down, commuters **had to** walk two kilometres.',
              'Unlike `must`, `have to` changes with tense/subject (`has to`, `had to`, `will have to`) and takes `do/does/did` in negatives (`don’t have to`).',
            ],
            [
              '**`should`**',
              'Moral or practical advice; mild duty; expectation (`ought to` synonym without `to`).',
              'You **should** verify your roll number before sealing the OMR sheet.',
              'NEVER write `should to`! Also appears in formal condition/advice (`Should you need help...`).',
            ],
            [
              '**`ought to`** *(semi-modal)*',
              'Strong moral, civic, or social duty; strong expectation.',
              'Every citizen **ought to** conserve groundwater and respect traffic rules.',
              '**ALWAYS carries `to`** before `V1` (`ought to respect`), NEVER bare `ought respect`.',
            ],
            [
              '**`need not` (`needn’t`)**',
              'Absence of necessity / no compulsion (optional action).',
              'Lunch is complimentary; delegates **need not** carry cash.',
              '**#1 Signage Trap:** `need not` = optional, NOT forbidden! Do NOT replace with `must not`.',
            ],
            [
              '**`will`**',
              'Future certainty / prediction; instant promise, determination, or willingness; habitual tendency.',
              'I **will** submit the lab journal by 4 p.m. Accidents **will** happen on wet roads.',
              'In `if`-clauses of Type 1 conditionals, avoid `will` (`If it rains`, NOT `If it will rain`).',
            ],
            [
              '**`would`**',
              'Polite request (`Would you...?`); discontinued past habit (action verbs); polite preference (`would rather`); unreal conditional result.',
              '**Would** you mind lowering the volume? Grandfather **would** tell us stories at dusk.',
              'Use `used to` (not `would`) for **past states** (`He used to live in Pune`, NOT `He would live`).',
            ],
            [
              '**`shall`**',
              'Offers & suggestions with `I / we` (`Shall I...?`, `Shall we...?`); formal legal/official rules.',
              '**Shall** I carry those heavy registers for you? The winner **shall** receive a trophy.',
              'In CBSE questions, `Shall I/we...?` is the signature pattern for **polite offers/suggestions**.',
            ],
            [
              '**`used to`** *(semi-modal)*',
              'Discontinued past habit or past state that no longer exists today.',
              'There **used to** be a banyan tree here before the flyover was built.',
              'Remember the `-d`: `used to + V1` for past habit (NEVER `use to` in affirmative past!).',
            ],
            [
              '**`dare`** *(semi-modal)*',
              'Courage or challenge (mostly in negatives/interrogatives: `dare not`, `How dare...?`).',
              'Nobody **dare** enter the principal’s office without permission. How **dare** you lie?',
              'As a pure modal in `dare not`, it takes bare `V1` (`He dare not speak`, no `-s`, no `to`).',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'Golden Structural Law: Modal + Bare Infinitive (V1)',
          body: 'In CBSE Error–Correction boxes, over 40% of modal errors violate the bare-infinitive structural rule. Memorize these four unbreakable laws:',
          bullets: [
            '**Law 1 — NEVER put `to` after a standard modal:** Write `must wear`, `could solve`, `should obey`, `may enter` — NEVER `must to wear`, `could to solve`, or `should to obey`. *(Only semi-modals `ought to`, `used to`, and `have to` require `to`.)*',
            '**Law 2 — NEVER attach `-s`, `-es`, `-ed`, or `-ing` to a modal OR the verb immediately after it:** Write `She can write`, `He could solve` — NEVER `She cans write`, `He could solved`, or `He must wearing`.',
            '**Law 3 — NEVER stack two standard modals together:** Write `You will be able to pass` or `He might have to leave` — NEVER `You will can pass` or `He might must leave`.',
            '**Law 4 — Negatives & Questions use the modal directly (no `do/does/did`):** Write `Must we stay?` / `You need not worry` — NEVER `Do we must stay?` or `You don’t must worry`. *(Semi-modal `have to` is the exception: `Do we have to stay?` / `You don’t have to worry`.)*',
          ],
        },
      ],
    },
    {
      id: 'rg-05-obligation-prohibition-necessity',
      title: '2. Obligation vs. Prohibition vs. Absence of Necessity & Politeness Scale',
      blocks: [
        {
          type: 'table',
          caption: 'The #1 CBSE Noticeboard & Signage Trap: Must vs Have To vs Mustn’t vs Needn’t',
          headers: [
            'Modal / Expression',
            'Exact Meaning',
            'Typical CBSE Notice / Signage Cue',
            'Contrast & Why Students Lose Marks',
          ],
          rows: [
            [
              '**`must`**',
              'Strong obligation (speaker’s authority, urgent command, official notice).',
              'Visitors **must** switch off mobile phones inside the ICU.',
              'Internal or authoritative rule where compliance is mandatory.',
            ],
            [
              '**`have to` / `has to` / `had to`**',
              'External obligation (rule forced by law, schedule, or situation).',
              'I **have to** submit my passport at the embassy by 10 a.m. *(Yesterday I **had to** queue for an hour.)*',
              'Use `had to` for ALL past obligations — `must` cannot show past obligation!',
            ],
            [
              '**`must not` (`mustn’t`)**',
              '**Strict Prohibition** — forbidden / illegal / dangerous to do.',
              'You **must not** lean out of a moving train window.',
              'Means **DO NOT DO THIS** (0% permission). Never use this for optional fees or free entry!',
            ],
            [
              '**`need not` (`needn’t`) / `don’t have to`**',
              '**Absence of Necessity** — optional; allowed if you want, not required.',
              'Entry is free; senior citizens **need not** purchase a pass.',
              'Choosing `must not` here changes the meaning to "banned from buying a pass" — instant mark loss!',
            ],
            [
              '**`should`**',
              'Practical advice, sensible recommendation, or general duty.',
              'Students **should** sleep for eight hours before a board exam.',
              'Softer than `must`; never followed by `to`.',
            ],
            [
              '**`ought to`**',
              'Moral, ethical, or civic duty — appeals to conscience or social values.',
              'We **ought to** protect public monuments from vandalism.',
              'Watch for missing `to`: if the blank already has `to` after it (`ought ___ help` ✗ vs `___ to help` ✓), check carefully!',
            ],
          ],
        },
        {
          type: 'steps',
          title: '4-Step Decision Protocol for CBSE Signage, Advice & Request Questions',
          items: [
            {
              label: 'Step 1 — Check Authority Source: `must` (Internal / Signage) vs. `have to` (External Circumstance)',
              detail:
                'When a noticeboard, principal, doctor, or speaker gives a direct command (`"You ___ wear helmets"`), choose **`must`**. When the sentence highlights external compulsion or past time (`"Since the lift was broken, we ___ climb six floors"`), choose **`have to` / `had to`**.',
              example:
                'Notice: "Examinees **must** report 30 minutes early." vs. Past Circumstance: "Because of the storm, the pilot **had to** divert the flight."',
            },
            {
              label: 'Step 2 — Separate Prohibition (`must not`) from Optionality (`need not / don’t have to`)',
              detail:
                'Ask one binary question: **"Is doing this action punishable/dangerous, or simply unnecessary?"** If punishable/dangerous → **`must not`**. If free/already provided/optional → **`need not`** (`needn’t`) or **`don’t have to`**.',
              example:
                '"Students **must not** carry smartwatches into the exam hall" (prohibited) vs. "Graph paper is supplied; you **need not** bring your own" (unnecessary).',
            },
            {
              label: 'Step 3 — Spot Moral Duty (`ought to`) vs. General Advice (`should`)',
              detail:
                'Both express advisability, but **`ought to`** is CBSE’s preferred answer when the sentence invokes **civic duty, elders, environment, honesty, or conscience** — and **`ought`** ALWAYS requires **`to`** before `V1`. Inspect the text right after the blank: if `to` is already printed (`We ___ to respect...`), **`ought`** is the ONLY modal that fits grammatically (besides `have/used`); if `to` is NOT printed (`We ___ respect...`), **`should`** or **`must`** fits (unless `ought to` is a single option).',
              example:
                '"We **ought** to keep our surroundings clean" (`to` follows the blank) vs. "You **should** revise the NCERT glossary twice" (no `to`).',
            },
            {
              label: 'Step 4 — Rank Polite Requests & Permission (`Could / Would` > `May` > `Can`)',
              detail:
                'CBSE dialogue questions reward matching the register of the speakers:\n' +
                '• **Highest Politeness (stranger / elder / request for favour):** `Could you please...?` / `Would you mind + V-ing...?` / `Would you please...?`\n' +
                '• **Formal Permission (student–teacher / employee–boss):** `May I...?` (answer: `Yes, you may` / `No, you may not`)\n' +
                '• **Informal / Peer Level (friends / siblings):** `Can I...?` / `Can you...?`',
              example:
                'Student to Librarian: "**May** I borrow two reference books?" | Stranger on train: "**Would** you mind shifting your bag slightly?"',
            },
          ],
        },
      ],
    },
    {
      id: 'rg-05-deduction-past-modals',
      title: '3. Epistemic Deduction Scale, Past Modals (`modal + have + V3`) & Editing Boxes',
      blocks: [
        {
          type: 'table',
          caption: 'Epistemic Deduction Scale — Certainty, Possibility & Logical Impossibility',
          headers: [
            'Certainty Level',
            'Modal Structure',
            'Meaning & Evidence Cue',
            'CBSE Exam Example & Trap Note',
          ],
          rows: [
            [
              '**~95% Logical Certainty**',
              '**`must be` / `must + V1`**',
              'Strong evidence leaves almost no other logical conclusion.',
              'He has walked 15 km without water; he **must be** exhausted.',
            ],
            [
              '**~75% Expectation**',
              '**`should be` / `ought to be`**',
              'Likely true based on normal schedule or routine.',
              'The express train left at 6 a.m.; it **should be** nearing Jaipur now.',
            ],
            [
              '**~50% Realistic Possibility**',
              '**`may be`**',
              'Genuine, balanced chance (`50–50`) of being true.',
              'The principal isn’t in her cabin; she **may be** inspecting Grade 10.',
            ],
            [
              '**~25–35% Remote Possibility**',
              '**`might be` / `could be`**',
              'Tentative guess; weaker or less likely than `may`.',
              'Don’t throw away that old ticket — it **might be** useful for reimbursement.',
            ],
            [
              '**~99% Logical Impossibility**',
              '**`can’t be` / `couldn’t be`**',
              'Evidence proves something is logically impossible.',
              'That **can’t be** Rohan at the gate — he flew to Chennai this morning! *(NEVER `mustn’t be`!)*',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Past Modals Mastery (`Modal + have + V3`) — Regret, Unused Ability & Deduction',
          headers: [
            'Past Modal Pattern',
            'Communicative Function',
            'Worked Example',
            'Board Contrast Note',
          ],
          rows: [
            [
              '**`must have + V3`**',
              'Strong logical deduction about a past event.',
              'The lawn is soaked; it **must have rained** heavily overnight.',
              'Answers *"What surely happened?"* based on visible present clues.',
            ],
            [
              '**`should have + V3` / `ought to have + V3`**',
              '**Regret, criticism, or unfulfilled duty** (right thing that was NOT done).',
              'You **should have checked** the barometer before sailing. We **ought to have helped** the injured cyclist.',
              'Negative: `shouldn’t have + V3` = regret over something foolish that WAS done.',
            ],
            [
              '**`could have + V3`**',
              '**Unused past ability or missed opportunity** (possible, didn’t happen).',
              'Our team **could have won** the finals, but poor fielding cost us the trophy.',
              'Unlike `was able to + V1` (actually succeeded), `could have + V3` means it **did not happen**.',
            ],
            [
              '**`may / might have + V3`**',
              'Uncertain possibility about a past event.',
              'She didn’t answer the doorbell; she **might have been** asleep upstairs.',
              'Use `might have + V3` in conditional/speculative contexts (`He might have missed the bus`).',
            ],
            [
              '**`needn’t have + V3`**',
              'Action **was performed**, though it turned out to be **unnecessary**.',
              'You **needn’t have brought** an umbrella — the weather stayed sunny all day.',
              'Contrast: `didn’t need to + V1` = unnecessary so it was usually *not* done; `needn’t have + V3` = done unnecessarily.',
            ],
            [
              '**`can’t have + V3`**',
              'Logical impossibility about a past event.',
              'Meera **can’t have leaked** the notice; she wasn’t even in town yesterday.',
              'Opposite of `must have + V3` in past deduction.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'CBSE Noticeboard & Circular Editing Drills (`Error | Correction`)',
          headers: ['Incorrect Board Sentence (Spot the Trap)', 'Error', 'Correction', 'Rule Applied'],
          rows: [
            [
              'Library membership is free; students **must not** pay any fee.',
              '`must not`',
              '`need not`',
              'Free entry signals **absence of necessity** (`need not`), not prohibition.',
            ],
            [
              'Every citizen **ought** respect the Constitution and public property.',
              '`ought`',
              '`ought to`',
              'Semi-modal `ought` **always requires `to`** before `V1` (`ought to respect`).',
            ],
            [
              'Citizens **should to** segregate wet and dry waste daily.',
              '`should to`',
              '`should`',
              'Standard modal `should` takes **bare `V1`** — never `to`.',
            ],
            [
              'With regular practice, Kabir **could solved** every puzzle quickly.',
              '`solved`',
              '`solve`',
              'Modal (`could`) is always followed by **`V1`**, never `V2`/`V3`.',
            ],
            [
              'With better coaching, she **will can** clear the Olympiad easily.',
              '`will can`',
              '`will be able to`',
              '**Double modals** (`will can`) are ungrammatical; replace `can` with `be able to`.',
            ],
            [
              'That **mustn’t** be Dr Verma’s car; his sedan is blue, not white.',
              '`mustn’t`',
              '`can’t`',
              'Negative **logical deduction** uses `can’t be`, never `mustn’t be`.',
            ],
          ],
        },
      ],
    },
    {
      id: 'rg-05-editing-board-drills',
      title: '4. Notebook Traps, Checkpoints & 8 Solved CBSE Modal Drills',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Kabir (Class 10)',
          title: 'Confusing Prohibition (mustn’t) with No Necessity (needn’t) & Wrong Negative Deduction',
          wrongWork:
            '1) Notice: "Free Wi-Fi Zone — Visitors must not pay for access."\n2) Logic: "Look at his uniform; he mustn’t be a visitor, he is a guard."',
          teacherFix:
            '1) Notice: "Free Wi-Fi Zone — Visitors need not / do not have to pay for access."\n2) Logic: "Look at his uniform; he can’t be a visitor, he must be a guard."',
          whyWrong:
            'In (1), `must not` prohibits paying (making it illegal to pay!), whereas free access means **no obligation to pay** → `need not` / `don’t have to`. In (2), the negative opposite of deductive `must be` is **`can’t be`**, never `mustn’t be`!',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Ananya (Class 10)',
          title: 'Inserting `to` After Modals, Using `V2` After `could`, and Double Modals',
          wrongWork:
            '1) We must to protect endangered wetlands.\n2) She could completed the science model on time.\n3) Next term, our class will can visit the planetarium.',
          teacherFix:
            '1) We must protect endangered wetlands.\n2) She could complete the science model on time.\n3) Next term, our class will be able to visit the planetarium.',
          whyWrong:
            'Standard modals (`must`, `could`, `should`, `can`, `may`, `might`, `will`, `would`, `shall`) ALWAYS take **bare infinitive `V1`** — no `to`, no `-ed`, and never two modals side by side (`will can` → `will be able to`).',
        },
        {
          type: 'checkpoint',
          prompt:
            'Choose the exact modal to complete this CBSE noticeboard line: **"Meals are included in the camp package; participants ______ bring extra tiffins from home."**',
          options: [
            { id: 'a', label: 'must not', sublabel: 'strict prohibition' },
            { id: 'b', label: 'need not', sublabel: 'absence of necessity' },
            { id: 'c', label: 'ought not', sublabel: 'moral disapproval' },
            { id: 'd', label: 'dare not', sublabel: 'lack of courage' },
          ],
          correctIds: ['b'],
          successMsg:
            'Spot on! Because meals are already provided, bringing tiffins is unnecessary/optional (`need not`), NOT banned (`must not`).',
          hintMsg:
            'Think carefully: if meals are included, are participants *forbidden* from carrying snacks, or is it simply *unnecessary*?',
        },
        {
          type: 'checkpoint',
          prompt:
            'Select the ONLY grammatically accurate option for this CBSE past-deduction / regret blank: **"The lights are completely off and the gate is padlocked; everyone ______ left for the auditorium."**',
          options: [
            { id: 'a', label: 'must have', sublabel: 'past certainty from clues' },
            { id: 'b', label: 'mustn’t have', sublabel: 'invalid deduction negative' },
            { id: 'c', label: 'should to have', sublabel: 'ungrammatical to after should' },
            { id: 'd', label: 'ought have', sublabel: 'missing required to' },
          ],
          correctIds: ['a'],
          successMsg:
            'Correct! Dark rooms + padlocked gate = ~95% logical conclusion about the past (`must have + V3`). Notice (c) fails `should + bare V1` and (d) omits `to` after `ought`!',
          hintMsg:
            'Look at the two physical clues (lights off, padlocked gate). Which modal expresses high certainty about a past action (`modal + have + V3`)?',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q1 (Signage Gap-Fill): Fill in the blank by choosing the correct option for the Museum Advisory:\n"Photography is strictly prohibited inside the manuscript gallery; visitors ______ use flash cameras here."\n(a) need not   (b) must not   (c) would not   (d) might not',
          answer: '**(b) must not**',
          markingTip:
            '"Strictly prohibited" is a direct CBSE cue for prohibition (`must not`), whereas `need not` would wrongly imply flash cameras are optional.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q2 (Noticeboard Gap-Fill — Absence of Necessity): Complete the school circular:\n"The Heritage Walk is completely sponsored by the Alumni Association, so students ______ pay any registration charges."\n(a) must not   (b) needn’t   (c) shouldn’t   (d) couldn’t',
          answer: '**(b) needn’t**',
          markingTip:
            'Since the event is sponsored (free), paying charges is **unnecessary** (`needn’t` / `don’t have to`), not forbidden.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q3 (Dialogue Completion — Polite Request): Read the dialogue at the railway enquiry counter and fill in the blank:\nPassenger: "Excuse me, sir. ______ you please confirm whether Platform 4 has a wheelchair ramp?"\n(a) May   (b) Should   (c) Could   (d) Must',
          answer: '**(c) Could**',
          markingTip:
            'When asking *another person* politely to do something (`___ you please...?`), use `Could` or `Would` — never `May you`!',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q4 (Epistemic Deduction Gap-Fill): Fill in the blank with the most accurate modal:\n"That signature ______ be Principal Rao’s; she has been on medical leave in Bengaluru since Monday."\n(a) mustn’t   (b) can’t   (c) shouldn’t   (d) needn’t',
          answer: '**(b) can’t**',
          markingTip:
            'Always remember: negative logical deduction / impossibility is **`can’t be`** (or `couldn’t be`), NEVER `mustn’t be`!',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q5 (Past Modal — Regret / Unfulfilled Duty): Complete the sentence using an appropriate past modal structure:\n"The streets flooded after just twenty minutes of rain; the civic body ______ cleaned the storm drains before the monsoon arrived."\n(a) should have   (b) must had   (c) need have   (d) can have',
          answer: '**(a) should have** (also `ought to have` if offered)',
          markingTip:
            '`should have + V3` expresses criticism or an unfulfilled obligation in the past (`cleaned` is already `V3`). Note `must had` is ungrammatical (`modal + have + V3`, never `had`).',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q6 (Editing — Error & Correction): Identify the error and supply the correction in the following sentence from a sports report:\n*"Despite an injured wrist, the young archer could hit the bullseye and could secured the silver medal."*',
          answer: '**Error:** `secured`   |   **Correction:** `secure`',
          markingTip:
            'A modal auxiliary (`could`) ALWAYS governs the **bare infinitive `V1` (`secure`)**, even when describing a past achievement or following `and`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q7 (Editing — Error & Correction): Identify the error and supply the correction in this civic-pledge banner:\n*"If we install rooftop rainwater harvesting today, future generations will can avoid acute summer water shortages."*',
          answer: '**Error:** `will can`   |   **Correction:** `will be able to`',
          markingTip:
            'English does not permit double modals (`will can`). Convert future ability into `will be able to + V1`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            'Q8 (Past Habit & Semi-Modal `ought to`): Fill BOTH blanks accurately:\n"Decades ago, villagers (i) ______ draw clean water from this stepwell; today, we (ii) ______ to revive such traditional water bodies before they vanish."',
          answer: '**(i) `used to`**   |   **(ii) `ought`** *(since `to` already follows blank ii!)*',
          markingTip:
            'Look right after blank (ii): the preposition `to` is already printed (`___ to revive`). That immediately eliminates `should` and `must` and locks in **`ought`** (`ought to revive`).',
        },
      ],
    },
  ],
};
