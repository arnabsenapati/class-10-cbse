import { Subtopic } from '../../../types/curriculum';

export const englishGrammar02Determiners: Subtopic = {
  id: 'eng-rg-02',
  slug: 'determiners',
  title: 'Determiners: Articles, Quantifiers & Distributives',
  subtitle:
    'Master Section B Determiners: phonetic sound rules for a/an, Definite vs. Zero Article traps, some/any, little/a little/the little vs. few/a few/the few, distributives, and CBSE gap-fill & editing drills.',
  estimatedMinutes: 30,
  difficulty: 'Core CBSE',
  ncertSection: 'Section B — Grammar (Determiners)',
  learningObjectives: [
    'Select a or an strictly by initial pronunciation (consonant sound vs. vowel sound), never by spelling alone.',
    'Distinguish when the definite article "the" is mandatory (unique nouns, superlatives, double comparatives, musical instruments) versus forbidden (Zero Article before meals, languages, sports, subjects).',
    'Apply some vs. any, much vs. many, less vs. fewer, and the three-tier little/a little/the little and few/a few/the few rules accurately in gap-fills.',
    'Use distributives (each, every, either, neither, all, both, whole), possessives (its vs. it’s), demonstratives, and interrogatives (which/what/whose) cleanly in CBSE error-correction tasks.',
  ],
  keywords: [
    'Determiners Class 10 CBSE',
    'Articles a an the Zero Article',
    'Little A Little The Little',
    'Few A Few The Few',
    'Some vs Any',
    'Each vs Every',
    'CBSE Editing and Gap Filling',
  ],
  sections: [
    {
      id: 'rg-02-overview-articles',
      title: '1. Determiner Overview, Phonetic Sound Rule (a / an) & Definite vs. Zero Article',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Determiner Map',
          bullets: [
            '**What is a Determiner?** A word placed *before* a noun (or before adjective + noun) to clarify **which one**, **whose**, or **how many/much** (e.g., *this old book*, *some clean water*, *every student*).',
            '**The One-Slot Rule:** Most central determiners cannot stack together—never write `*my this pen*` or `*the some boys*` (say *this pen of mine* or *some of the boys*).',
            '**Five CBSE Exam Families:** (1) **Articles** (`a, an, the`), (2) **Demonstratives** (`this, that, these, those`), (3) **Possessives** (`my, our, your, his, her, its, their`), (4) **Quantifiers** (`some, any, much, many, little, few, less, fewer, enough`), and (5) **Distributives & Interrogatives** (`each, every, either, neither, all, both, whole, which, what, whose`).',
          ],
        },
        {
          type: 'callout',
          variant: 'law',
          title: 'Golden Phonetic Sound Rule for Indefinite Articles (a / an)',
          body: 'Choose `a` or `an` strictly by the **FIRST SPOKEN SOUND** of the very next word—not by its written first letter. Both `a` and `an` work ONLY with singular countable nouns.',
          bullets: [
            'Use **`a`** before a **consonant sound**—even if spelled with `u`, `e`, or `o`: *a university* (`/juː/`), *a European* (`/juː/`), *a useful tip*, *a uniform*, *a one-rupee note* (`/wʌn/`), *a one-eyed deer*.',
            'Use **`an`** before a **vowel sound**—even if spelled with silent `h` or consonant-letter abbreviations: *an hour* (`/aʊ/`), *an heir*, *an honest officer*, *an MLA* (`/em/`), *an FIR* (`/ef/`), *an X-ray* (`/eks/`), *an NCC cadet* (`/en/`).',
          ],
        },
        {
          type: 'table',
          caption: 'Phonetic Sound Decider: Spelling Traps Tested in CBSE Papers',
          headers: ['Word / Phrase', 'Opening Sound', 'Correct Article', 'Exam Trap Alert'],
          rows: [
            ['`university / union / uniform / European`', 'Consonant `/j/` ("yoo")', '**a** university, **a** European', 'Starts with letter `u`/`e` but sounds like `y` in *you*.'],
            ['`one-rupee note / one-way street`', 'Consonant `/w/` ("wa")', '**a** one-rupee note', 'Starts with `o` but sounds like `w` in *won*.'],
            ['`hour / heir / honour / honest officer`', 'Vowel (silent `h`)', '**an** hour, **an** honest officer', 'Silent `h`; compare **a** *hotel* / **a** *historical* (pronounced `/h/`).'],
            ['`MLA / MP / FIR / SOS / X-ray / umbrella`', 'Vowel (`/e/`, `/a/`, `/ʌ/`)', '**an** MLA, **an** FIR, **an** umbrella', 'Read abbreviations letter-by-letter aloud! (*a B.A.*, *an M.A.*).'],
          ],
        },
        {
          type: 'table',
          caption: 'Definite Article ("the") vs. Zero Article (No Article) — Complete CBSE Comparison',
          headers: ['Category', 'Use "the" When...', 'Use ZERO Article (×) When...'],
          rows: [
            ['**Meals**', 'Referring to a specific event: *The dinner hosted by the Principal was memorable.*', 'General daily meals: *We eat × breakfast at 7:30 a.m.* / *Let us have × lunch.*'],
            ['**Languages & Subjects**', 'Followed by the word "language" or narrowed down: *The French of Quebec differs slightly.*', 'Standalone names: *She speaks × Sanskrit and studies × Physics.*'],
            ['**Sports & Games**', 'Specific match/equipment: *The cricket match at Eden Gardens thrilled fans.*', 'Playing/naming the sport generally: *He plays × football every evening.*'],
            ['**Abstract & Plural Nouns**', 'Specified by a phrase/clause: *The honesty of the boy won praise.* / *The books on that shelf...*', 'General truths or plural categories: *× Honesty is the best policy.* / *× Tigers are endangered.*'],
            ['**Unique, Superlatives & Ordinals**', 'Always: *the Sun, the Earth, the tallest building, the first chapter, the only solution*.', 'Never omit before true superlatives (*He is × best player* is WRONG).'],
            ['**Double Comparatives**', 'Paired cause–effect rise/fall: "**The** higher you go, **the** colder it gets." / "**The** more we read, **the** wiser we grow."', 'Ordinary single comparatives without "of the two": *She is taller than Riya.*'],
            ['**Musical Instruments**', 'Skill/playing an instrument: "Meera plays **the** sitar" / "learning **the** piano".', 'Countable object sold/owned in plural: *× Pianos are expensive.*'],
            ['**Geography**', 'Rivers, seas, oceans, mountain ranges, deserts, plural/union nations: *the Ganga, the Himalayas, the USA, the UK*.', 'Single peaks, single lakes, continents, most countries & streets: *× Mount Everest, × Dal Lake, × India, × Asia*.'],
          ],
        },
      ],
    },
    {
      id: 'rg-02-quantifiers-little-few',
      title: '2. Quantifiers Master Matrix: some/any, much/many & little/few',
      blocks: [
        {
          type: 'table',
          caption: 'CBSE Quantifiers Master Table (Countable vs. Uncountable Rules)',
          headers: ['Quantifier Pair', 'Noun Type', 'Core Grammar Rule', 'Board-Ready Examples'],
          rows: [
            ['**some** vs. **any**', 'Plural countable & uncountable', '**some**: affirmative sentences + polite offers/requests expecting "yes". **any**: negatives, neutral questions, `if`-clauses, and semi-negatives (*hardly, scarcely, seldom, without*).', '✓ "I bought **some** mangoes." ✓ "Would you like **some** tea?" ✓ "Is there **any** ink left?" ✓ "She **hardly** has **any** spare time."'],
            ['**much** vs. **many**', '`much` = uncountable; `many` = plural countable', 'Used heavily in negatives, questions, and formal statements (*too much, so many, how much/many*).', '✓ "How **much** sugar do we need?" ✓ "How **many** chapters remain?"'],
            ['**little / a little / the little**', 'Uncountable nouns ONLY', '**little** = almost none (negative); **a little** = a small, sufficient amount (positive); **the little** = all the small amount available (specific).', '✓ "He had **little** hope of winning." (almost none) ✓ "Add **a little** salt." (small helpful bit) ✓ "**The little** milk left turned sour."'],
            ['**few / a few / the few**', 'Plural countable nouns ONLY', '**few** = hardly any (negative); **a few** = some, a small positive number; **the few** = all the specific few that exist.', '✓ "**Few** people know this secret." (almost nobody) ✓ "I read **a few** poems." (some) ✓ "**The few** friends he had stood by him."'],
            ['**less** vs. **fewer**', '`less` = uncountable; `fewer` = plural countable', 'Use **fewer** for items you can count (`1, 2, 3...`); use **less** for bulk quantity, time, money, or degree.', '✓ "**Fewer** students attended today." (NOT *less students*) ✓ "This bottle holds **less** water."'],
            ['**a lot of / plenty of / enough**', 'Both countable plural & uncountable', 'Natural positive alternatives to *much/many*; **enough** sits *before* a noun (`enough time`) but *after* an adjective (`fast enough`).', '✓ "There is **plenty of** evidence." ✓ "She has **enough** confidence to speak well."'],
          ],
        },
        {
          type: 'callout',
          variant: 'trap',
          title: 'The 3-Step Exam Test for little / a little / the little vs. few / a few / the few',
          body: 'CBSE Section B loves putting a context clue right after the blank. Run this three-question checklist before locking your answer:',
          bullets: [
            '**Step 1 (Noun Check):** Can you count it (`1, 2, 3`)? Plural countable (*mistakes, days, volunteers*) takes **few / a few / the few**. Uncountable (*patience, information, luggage, money, advice*) takes **little / a little / the little**.',
            '**Step 2 (Tone Check):** Does the second half show disappointment/failure (*"so we cannot bake the cake"*, *"hardly anyone came"*)? Pick bare **`little`** or **`few`**. Does it show optimism/success (*"enough to manage"*, *"improved noticeably"*)? Pick **`a little`** or **`a few`**.',
            '**Step 3 (Relative-Clause Check):** Does a defining clause (*"that she saved"*, *"who stayed back"*, *"left in the jar"*) point to the entire small remainder? Pick **`the little`** or **`the few`**.',
          ],
        },
      ],
    },
    {
      id: 'rg-02-distributives-demonstratives',
      title: '3. Distributives, Possessives, Demonstratives & Board Editing Table',
      blocks: [
        {
          type: 'table',
          caption: 'Distributives, Possessives, Demonstratives & Interrogatives — Distinction Guide',
          headers: ['Determiner Group', 'Exact Usage Rule', 'Contrast & CBSE Trap Example'],
          rows: [
            ['**each** vs. **every**', '**each**: 2 or more, focuses individually; works as pronoun (`each of the two`). **every**: 3 or more, focuses collectively as a whole group; NEVER takes `of` directly (*every of* is wrong).', '✓ "Each of the **two** runners received a medal." ✓ "Every citizen in the **nation** shares this duty."'],
            ['**either** vs. **neither**', '**either**: 1 of 2 (or both sides in *on either side*); **neither**: 0 of 2. Always followed by a **singular noun** (`either road`) or `of the + plural noun` (`neither of the plans`) + **singular verb**.', '✓ "Neither answer **is** accurate." ✓ "Trees lined **either** side of the avenue."'],
            ['**all / both / whole**', '**both**: 2 items (`both my hands`); **all**: 3+ countables or uncountables (`all the students`, `all day`); **whole**: complete single unit (*the whole class*, article BEFORE *whole*).', '✗ *Whole the village celebrated.* -> ✓ "**The whole** village celebrated." / ✓ "**All the** villagers celebrated."'],
            ['**its** vs. **it’s**', '**its** (no apostrophe) = possessive determiner (*belonging to it*). **it’s** = contraction of *it is* or *it has*.', '✓ "The dog wagged **its** tail." (NOT *it’s tail*) | ✓ "**It’s** raining outside."'],
            ['**this / that / these / those**', 'Near vs. far + singular vs. plural agreement with the head noun.', '✗ *These kind of errors* -> ✓ "**This kind** of error" OR "**These kinds** of errors".'],
            ['**which / what / whose**', '**which**: limited/known set of options; **what**: open/unlimited choice; **whose**: possessive (*belonging to whom*), distinct from *who’s* (*who is*).', '✓ "**Which** of these three routes is shorter?" ✓ "**Whose** notebook is lying on the bench?"'],
          ],
        },
        {
          type: 'key-points',
          title: '5 Quick Checks Before Submitting a Determiner Answer',
          items: [
            'Check whether the noun is **uncountable** (`advice, furniture, luggage, news, information, bread`)—never pair it with `a/an`, `many`, or `few`.',
            'Spot **`hardly, scarcely, barely, seldom, never, without`**—these hidden negatives require **`any`**, not `some`.',
            'Watch polite offers/requests starting with **`Would you like... / Could you pass... / Can I get you...`**—these expect "yes", so use **`some`**, not `any`.',
            'Check **`each / every / either / neither`** + noun -> always **singular noun + singular verb** (*Each boy has*, not *Each boys have*).',
            'Verify whether **`its`** (possessive) was wrongly typed as **`it’s`** (*it is*) in Editing tasks.',
          ],
        },
        {
          type: 'table',
          caption: 'CBSE Board Editing Drill Preview (Line | Incorrect | Correction)',
          headers: ['Line Text (with 1 Error)', 'Incorrect Word', 'Correction'],
          rows: [
            ['(a) **An** European delegation visited Jaipur yesterday.', '`An`', '`A`'],
            ['(b) There is **few** milk left, so we cannot prepare tea.', '`few`', '`little`'],
            ['(c) Every of the **two** contestants spoke fluently.', '`Every`', '`Each`'],
            ['(d) **The** Honesty builds lasting trust among classmates.', '`The` (before Honesty)', 'Omit `The` (Zero Article) / `Honesty`'],
            ['(e) Could you lend me **any** clean sheets of paper?', '`any`', '`some`'],
            ['(f) **Less** participants registered for the quiz this term.', '`Less`', '`Fewer`'],
            ['(g) The committee reviewed **it’s** earlier decision today.', '`it’s`', '`its`'],
          ],
        },
      ],
    },
    {
      id: 'rg-02-editing-board-drills',
      title: '4. Notebook Traps, Checkpoints & 8 Solved CBSE Board Drills',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Kabir',
          title: 'Trap 1: Confusing "little" (Negation) with "a little" (Positive Sufficiency)',
          wrongWork:
            'Sentence: "Don’t worry—we still have little time before the bell, so let us revise the map neatly."',
          teacherFix:
            'Don’t worry—we still have a little time before the bell, so let us revise the map neatly.',
          whyWrong:
            'Bare "little" carries a negative meaning ("practically zero time left"), which clashes directly with "Don’t worry" and "let us revise". Whenever a small quantity suffices to accomplish something, use "a little".',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Sneha',
          title: 'Trap 2: "an European" + "every of the two" + Plural Noun After "one of my"',
          wrongWork:
            'Sentence: "An European coach praised every of the two finalists, calling her one of his best student."',
          teacherFix:
            'A European coach praised each of the two finalists, calling her one of his best students.',
          whyWrong:
            'Three classic CBSE traps in one line: (1) "European" starts with consonant sound `/j/`, taking "A"; (2) "every" never precedes "of" and applies to 3+, whereas two items take "each of"; (3) "one of my/his" always requires a plural noun ("students").',
        },
        {
          type: 'checkpoint',
          prompt:
            'Choose the exact determiner to complete the sentence:\n"______ knowledge he possessed about first aid proved enough to save the injured cyclist."',
          options: [
            { id: 'a', label: 'A little', sublabel: 'Small unspecified amount' },
            { id: 'b', label: 'Little', sublabel: 'Hardly any knowledge' },
            { id: 'c', label: 'The little', sublabel: 'All that small amount he had' },
            { id: 'd', label: 'The few', sublabel: 'Specific countable items' },
          ],
          correctIds: ['c'],
          multiSelect: false,
          successMsg:
            'Spot on! "Knowledge" is uncountable (ruling out "the few"), and the defining clause "he possessed about first aid" points to ALL that specific small amount—requiring "The little".',
          hintMsg:
            'Ask two questions: Is "knowledge" countable or uncountable? And does "he possessed" specify a definite remainder?',
        },
        {
          type: 'checkpoint',
          prompt:
            'Pick the ONLY grammatically accurate option for this CBSE gap-fill:\n"Scarcely ______ student in the auditorium missed ______ opportunity to greet the astronaut."',
          options: [
            { id: 'a', label: 'some / a', sublabel: 'Affirmative + consonant article' },
            { id: 'b', label: 'any / an', sublabel: 'Negative-adverb concord + vowel sound' },
            { id: 'c', label: 'any / the', sublabel: 'Negative adverb + definite event' },
            { id: 'd', label: 'many / an', sublabel: 'Plural quantifier + singular noun' },
          ],
          correctIds: ['b'],
          multiSelect: false,
          successMsg:
            'Excellent! "Scarcely" is a negative adverb requiring "any" (with singular "student"), and "opportunity" opens with a vowel sound so the general singular expression takes "an".',
          hintMsg:
            'Notice the opening negative adverb "Scarcely" and the singular noun "student", plus the vowel opening of "opportunity".',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Gap-Fill MCQ) Fill in the blank with the most appropriate determiner:\n*"______ honest effort, even on a modest scale, beats ______ hours of idle planning."*\n(A) A / much   (B) An / many   (C) The / little   (D) An / much',
          answer:
            '**(B) An / many.**\n"Honest" begins with a silent `h` (vowel sound), taking **An**; "hours" is a plural countable noun, taking **many**.',
          markingTip: '1M: Test phonetic sound first (`an honest`) and noun countability second (`many hours`).',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Dialogue Completion — Polite Offer) Mother: *"You have been revising since dawn. Would you like ______ warm soup before your mock paper?"*\nChoose: `(any / some / few / many)`',
          answer:
            '**some** — Although the sentence is a question, it is a **polite offer** expecting an affirmative answer ("yes"), and "soup" is uncountable.',
          markingTip: '1M: Polite offers/requests (`Would you like...`, `Could you pass...`) always take "some", never "any".',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Error & Correction — Editing) Identify the error in the line below and supply the correction:\n*"The higher you climb up the Himalayan ridge, thinner the mountain air becomes."*',
          answer:
            '**Error:** `thinner` (missing article before second comparative) | **Correction:** `the thinner`\n\nRule: Double comparatives follow the parallel pattern "**The** + comparative ..., **the** + comparative ...".',
          markingTip: '1M: Both halves of a proportional comparative require "the".',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Gap-Fill) Complete the sentence with `few`, `a few`, or `the few`:\n*"______ volunteers who stayed back after the storm cleared the entire school courtyard by dusk."*',
          answer:
            '**The few** — "Volunteers" is plural countable, and the defining clause *"who stayed back after the storm"* identifies the entire specific small group.',
          markingTip: '1M: Relative clause specifying "all of that small group" = "The few".',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Error & Correction — Editing) Spot the error and write the correction:\n*"During the lockdown, less tourists visited the hill station than in previous summers."*',
          answer:
            '**Error:** `less` | **Correction:** `fewer`\n\nRule: "Tourists" is a countable plural noun, which must take **fewer** (reserve *less* for uncountable quantities like water, time, or noise).',
          markingTip: '1M: Countable plural -> "fewer"; uncountable -> "less".',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Gap-Fill) Choose the right determiner from the brackets:\n*"______ (Each / Every / Both) of the two laboratories on the second floor has been equipped with new microscopes."*',
          answer:
            '**Each** — Two objects are specified ("the two laboratories"), and the singular verb *"has been equipped"* confirms individual focus; "every" cannot precede "of", and "both" requires plural *"have"* (and drops *"of"*).',
          markingTip: '1M: "Each of the two + singular verb" is a top CBSE favourite.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Error & Correction — Editing) Find the determiner error in this notice line:\n*"Whole the school gathered in the assembly hall to celebrate National Science Day."*',
          answer:
            '**Error:** `Whole the` | **Correction:** `The whole` (or `All the`)\n\nRule: `the` precedes `whole` (*the whole school*), whereas `all` precedes `the` (*all the students*).',
          markingTip: '1M: Remember word-order contrast: `all + the + noun` vs. `the + whole + noun`.',
        },
        {
          type: 'qa',
          marks: 1,
          tag: 'CBSE Board Pattern',
          question:
            '(Gap-Fill — Zero Article vs. "the") Fill in the blanks with `a`, `an`, `the`, or `×` (Zero Article):\n*"My sister plays ______ violin beautifully, though she never eats ______ heavy breakfast before a concert."*',
          answer:
            '**the** / **a** — Musical instruments played as a skill take **the** (`plays the violin`), while a meal modified by an adjective (*heavy breakfast*) takes **a** (unlike unmodified general meals: *eats × breakfast*).',
          markingTip: '1M (0.5 + 0.5): Unmodified meal = Zero Article (`have breakfast`); adjective + meal = `a/an` (`a heavy breakfast`).',
        },
      ],
    },
  ],
};
