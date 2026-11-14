import { useMemo, useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Layers,
  MessageSquareQuote,
  RotateCcw,
  Scale,
  ShieldCheck,
  Sparkles,
  Trophy,
  XCircle,
} from 'lucide-react';

type GrammarCategory = 'determiners' | 'tenses' | 'sva' | 'modals' | 'reported';
type GrammarTab = 'all' | GrammarCategory;

interface EnglishGrammarQuestion {
  id: string;
  category: GrammarCategory;
  formatBadge: string;
  before: string;
  highlight: string;
  after: string;
  prompt: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  shortcutRule: string;
}

const GRAMMAR_QUESTIONS: EnglishGrammarQuestion[] = [
  // ================= DETERMINERS (10) =================
  {
    id: 'det-1',
    category: 'determiners',
    formatBadge: 'Gap Fill — Quantifiers',
    before: 'Although the committee had ',
    highlight: '______',
    after: ' hope left, the two finalists refused to concede defeat.',
    prompt: 'Select the determiner meaning "scarcely any / almost none (negative sense)":',
    options: ['little', 'a little', 'the little', 'few'],
    correctIndex: 0,
    shortcutRule:
      'Use bare "little" (uncountable, negative sense = almost none). "A little" implies some positive amount, "the little" means all that remains, and "few" requires countable plurals.',
  },
  {
    id: 'det-2',
    category: 'determiners',
    formatBadge: 'Phonetic Article Trap',
    before: 'As ',
    highlight: '______',
    after: ' European exchange fellow, she stayed only half ______ hour after the seminar.',
    prompt: 'Choose the correct pair of indefinite articles:',
    options: ['an / a', 'a / an', 'an / an', 'a / a'],
    correctIndex: 1,
    shortcutRule:
      'Sound decides a/an, not spelling: "European" starts with the consonant /y/ sound ("a European"), whereas silent-h "hour" starts with a vowel sound ("an hour").',
  },
  {
    id: 'det-3',
    category: 'determiners',
    formatBadge: 'Error → Correction',
    before: 'Notice: Please ensure every students carry ',
    highlight: 'their',
    after: ' smart library card during practicals.',
    prompt: 'Identify the correct Editing fix for the determiner error in "every students":',
    options: [
      'students → student (every takes singular noun)',
      'every → all (keep students plural & verb plural)',
      'every → each of students',
      'No correction needed',
    ],
    correctIndex: 0,
    shortcutRule:
      '"Every" always precedes a singular countable noun ("every student carries"). Note also that in CBSE Editing questions, fixing "students → student" or "every → each" follows exact singular agreement.',
  },
  {
    id: 'det-4',
    category: 'determiners',
    formatBadge: 'Contextual Quantifier',
    before: 'We spent ',
    highlight: '______',
    after: ' savings we had left on purchasing solar lamps for the rural library.',
    prompt: 'Select the exact determiner phrase referring to "the entire small amount available":',
    options: ['a little', 'little', 'the little', 'some little'],
    correctIndex: 2,
    shortcutRule:
      '"The little + uncountable noun + defining clause (we had left)" means "not much, yet all of that limited quantity".',
  },
  {
    id: 'det-5',
    category: 'determiners',
    formatBadge: 'Offer / Request Trap',
    before: '"Good morning, Principal Ma’am. Would you care for ',
    highlight: '______',
    after: ' herbal tea before the assembly begins?"',
    prompt: 'Which determiner fits a polite offer even inside a question?',
    options: ['any', 'many', 'some', 'few'],
    correctIndex: 2,
    shortcutRule:
      'While most questions take "any", polite offers and requests ("Would you like...?", "Could I have...?") always take "some".',
  },
  {
    id: 'det-6',
    category: 'determiners',
    formatBadge: 'Countable Positive Meaning',
    before: 'Fortunately, ',
    highlight: '______',
    after: ' volunteers stayed back after dusk and managed to clear the entire trail.',
    prompt: 'Pick the quantifier indicating "at least a small, helpful number of people":',
    options: ['few', 'a few', 'little', 'the few'],
    correctIndex: 1,
    shortcutRule:
      '"Volunteers" is plural countable. "A few" expresses a positive sufficiency (several/enough to help), whereas bare "few" means almost nobody stayed.',
  },
  {
    id: 'det-7',
    category: 'determiners',
    formatBadge: 'Error → Correction',
    before: 'A tiger is a national animal, and ',
    highlight: 'most higher',
    after: ' you climb into the sanctuary, the cooler the wind feels.',
    prompt: 'Choose the correct Editing replacement for the highlighted error:',
    options: ['most higher → more higher', 'most higher → the higher', 'most higher → very high', 'most higher → a higher'],
    correctIndex: 1,
    shortcutRule:
      'Parallel comparative structures always take definite article "the" on both clauses: "The higher you climb, the cooler the wind feels."',
  },
  {
    id: 'det-8',
    category: 'determiners',
    formatBadge: 'Distributives (Two Only)',
    before: 'Both routes looked flooded, so ',
    highlight: '______',
    after: ' highway was declared safe for school buses that evening.',
    prompt: 'Fill in the blank to mean "not one and not the other of the two":',
    options: ['none', 'every', 'neither', 'any'],
    correctIndex: 2,
    shortcutRule:
      'For strictly TWO items, negative choice is "neither" + singular noun ("neither highway was"), never "none" or "every" (which require 3+).',
  },
  {
    id: 'det-9',
    category: 'determiners',
    formatBadge: 'Zero Article Rule',
    before: 'Rohan plays ',
    highlight: '______',
    after: ' violin brilliantly, though he rarely plays ______ chess on weekdays.',
    prompt: 'Choose the CBSE standard article pair for musical instruments vs games:',
    options: ['the / no article', 'a / the', 'no article / a', 'the / the'],
    correctIndex: 0,
    shortcutRule:
      'General practice of a musical instrument typically takes "the" ("play the violin/flute"), whereas names of games, meals, languages, and school subjects take ZERO article.',
  },
  {
    id: 'det-10',
    category: 'determiners',
    formatBadge: 'Error → Correction',
    before: 'Hardly ',
    highlight: 'some',
    after: ' students anticipated such an analytical case-study in Pre-Board II.',
    prompt: 'Select the accurate Error → Correction pair:',
    options: ['some → many', 'some → any', 'some → few', 'some → a little'],
    correctIndex: 1,
    shortcutRule:
      'Negative adverbs ("hardly", "scarcely", "barely", "seldom") carry negative polarity and therefore take "any", not "some".',
  },

  // ================= TENSES (10) =================
  {
    id: 'ten-1',
    category: 'tenses',
    formatBadge: 'Earlier of Two Past Actions',
    before: 'By the time the rescue boat reached the flooded jetty, the villagers ',
    highlight: '______',
    after: ' all cattle to higher ground.',
    prompt: 'Select the grammatically accurate tense:',
    options: ['shifted', 'have shifted', 'had shifted', 'were shifting'],
    correctIndex: 2,
    shortcutRule:
      'When two events happened in the past, the earlier completed action takes Past Perfect ("had + V3") while the later action takes Simple Past ("reached").',
  },
  {
    id: 'ten-2',
    category: 'tenses',
    formatBadge: 'Time Marker Trap',
    before: 'Our robotics mentor ',
    highlight: 'has conducted',
    after: ' a hands-on microcontroller workshop last Thursday.',
    prompt: 'Spot the Error → Correction required due to "last Thursday":',
    options: [
      'has conducted → conducted',
      'has conducted → had been conducting',
      'has conducted → conducts',
      'No error (Present Perfect is right)',
    ],
    correctIndex: 0,
    shortcutRule:
      'Specific finished past time markers ("yesterday", "last Thursday", "ago", "in 2021") forbid Present Perfect and strictly demand Simple Past ("conducted").',
  },
  {
    id: 'ten-3',
    category: 'tenses',
    formatBadge: 'Conditional Type 1 Trap',
    before: 'If the municipal tanker ',
    highlight: '______',
    after: ' before noon tomorrow, we will distribute filtered water to Block C.',
    prompt: 'Complete the open Conditionals (Type 1) clause accurately:',
    options: ['will arrive', 'arrived', 'arrives', 'had arrived'],
    correctIndex: 2,
    shortcutRule:
      'Type-1 Future Conditionals NEVER use "will" inside the "if"-clause: use Simple Present ("if... arrives") paired with "will + V1" in the main clause.',
  },
  {
    id: 'ten-4',
    category: 'tenses',
    formatBadge: 'Point vs Duration',
    before: 'The heritage observatory ',
    highlight: '______',
    after: ' continuous solar-flare logs since January 2018.',
    prompt: 'Choose the correct tense with "since January 2018":',
    options: [
      'records',
      'is recording',
      'has been recording',
      'had recorded',
    ],
    correctIndex: 2,
    shortcutRule:
      'An action begun at a past point ("since January 2018") and still continuing into the present takes Present Perfect Continuous ("has been recording").',
  },
  {
    id: 'ten-5',
    category: 'tenses',
    formatBadge: 'Conditional Type 3 (Unreal Past)',
    before: 'Had Ananya double-checked her laboratory calibration, she ',
    highlight: '______',
    after: ' the prize without any tie-breaker.',
    prompt: 'Select the matching main-clause verb form:',
    options: ['would win', 'will have won', 'would have won', 'had won'],
    correctIndex: 2,
    shortcutRule:
      'Inverted Type-3 Conditional ("Had + S + V3..." = "If Ananya had double-checked...") ALWAYS pairs with "would have + V3".',
  },
  {
    id: 'ten-6',
    category: 'tenses',
    formatBadge: 'Stative Verb Editing',
    before: 'Look at that notice: Meera ',
    highlight: 'is belonging',
    after: ' to the Inter-School Debate Society this term.',
    prompt: 'Fix the continuous-tense error on the stative verb:',
    options: [
      'is belonging → belongs',
      'is belonging → has been belonging',
      'is belonging → was belonging',
      'is belonging → will be belonging',
    ],
    correctIndex: 0,
    shortcutRule:
      'Stative verbs of possession, relationship, or state ("belong", "know", "own", "prefer", "resemble") resist continuous "-ing" forms; use Simple Present ("belongs").',
  },
  {
    id: 'ten-7',
    category: 'tenses',
    formatBadge: 'Hypothetical Subjunctive (Type 2)',
    before: 'If I ',
    highlight: '______',
    after: ' the Chief Librarian, I would extend weekend reading hours till 8 p.m.',
    prompt: 'Choose the formal CBSE Type-2 Conditional verb:',
    options: ['am', 'was', 'were', 'would be'],
    correctIndex: 2,
    shortcutRule:
      'Unreal present hypotheticals ("If I...") use the subjunctive "were" across all subjects paired with "would + V1".',
  },
  {
    id: 'ten-8',
    category: 'tenses',
    formatBadge: 'Future Perfect Deadline',
    before: 'By the time you submit your portfolio next Friday, the moderators ',
    highlight: '______',
    after: ' the first draft rubric.',
    prompt: 'Fill in the action completed prior to a future deadline:',
    options: ['finalise', 'will have finalised', 'have finalised', 'finalised'],
    correctIndex: 1,
    shortcutRule:
      '"By + future time marker / By the time + Simple Present" signals an action completed before that future point -> Future Perfect ("will have + V3").',
  },
  {
    id: 'ten-9',
    category: 'tenses',
    formatBadge: 'Sequence & Habit',
    before: 'Notice how every morning after dawn, the gardener ',
    highlight: '______',
    after: ' the saplings before the gate opens.',
    prompt: 'Pick the tense expressing a recurring present routine:',
    options: ['waters', 'is watering', 'watered', 'has watered'],
    correctIndex: 0,
    shortcutRule:
      'Adverbs of routine ("every morning", "usually", "always") take Simple Present ("waters").',
  },
  {
    id: 'ten-10',
    category: 'tenses',
    formatBadge: 'Past Interrupted Action',
    before: 'While the technician ',
    highlight: '______',
    after: ' the auditorium projector, a brief power surge tripped the main breaker.',
    prompt: 'Select the ongoing background action interrupted by a Simple Past event:',
    options: ['calibrated', 'has calibrated', 'was calibrating', 'calibrates'],
    correctIndex: 2,
    shortcutRule:
      '"While + Past Continuous" sets an ongoing background action interrupted mid-way by a Simple Past verb ("tripped").',
  },

  // ================= SUBJECT-VERB AGREEMENT (10) =================
  {
    id: 'sva-1',
    category: 'sva',
    formatBadge: 'Parenthetical Connector Rule',
    before: 'The orchestra conductor, accompanied by twelve violinists, ',
    highlight: '______',
    after: ' arriving for the national cultural gala tonight.',
    prompt: 'Choose the verb agreeing with the true subject:',
    options: ['are', 'were', 'is', 'have been'],
    correctIndex: 2,
    shortcutRule:
      'When two nouns are linked by "accompanied by", "as well as", "along with", or "together with", the verb agrees strictly with the FIRST subject ("conductor" -> singular "is").',
  },
  {
    id: 'sva-2',
    category: 'sva',
    formatBadge: 'Proximity Rule',
    before: 'Neither the Head Boy nor the four house captains ',
    highlight: '______',
    after: ' signed the rehearsal register yet.',
    prompt: 'Apply the Proximity Rule to fill in the auxiliary verb:',
    options: ['has', 'have', 'was', 'is'],
    correctIndex: 1,
    shortcutRule:
      'With correlative pairs ("neither...nor", "either...or", "not only...but also"), the verb matches the NEARER subject ("house captains" = plural -> "have").',
  },
  {
    id: 'sva-3',
    category: 'sva',
    formatBadge: 'A Number vs The Number',
    before: 'The number of Class 10 students opting for Skill Modules ',
    highlight: '______',
    after: ' steadily over the past three years.',
    prompt: 'Pick the verb agreeing with "The number of...":',
    options: ['have risen', 'are rising', 'has risen', 'were rising'],
    correctIndex: 2,
    shortcutRule:
      '"The number of + plural noun" denotes ONE statistical figure -> SINGULAR verb ("has risen"). Contrast: "A number of students HAVE opted" (= many -> plural).',
  },
  {
    id: 'sva-4',
    category: 'sva',
    formatBadge: 'Relative Clause Concord Trap',
    before: 'Priya is one of the fastest sprinters who ',
    highlight: '______',
    after: ' qualified for the CBSE National Cluster Meet.',
    prompt: 'Select the verb matching the antecedent of "who":',
    options: ['has', 'have', 'is', 'was'],
    correctIndex: 1,
    shortcutRule:
      'Compare carefully: "One of the sprinters HAS won" vs "One of the sprinters who HAVE qualified" — inside a relative clause, "who" refers back to plural "sprinters", so use plural "have"!',
  },
  {
    id: 'sva-5',
    category: 'sva',
    formatBadge: 'Error → Correction',
    before: 'Ten kilometres ',
    highlight: 'are',
    after: ' quite a steep uphill walk for elderly pilgrims without water stations.',
    prompt: 'Choose the right Editing correction for a single unit of distance:',
    options: ['are → is', 'are → were', 'are → have been', 'No correction needed'],
    correctIndex: 0,
    shortcutRule:
      'Sums of money, distances, weights, and periods treated as ONE collective unit ("Ten kilometres", "Five thousand rupees") always take a singular verb ("is").',
  },
  {
    id: 'sva-6',
    category: 'sva',
    formatBadge: 'Deceptive -s Noun',
    before: 'Although Economics and Statistics sound intimidating, good news ',
    highlight: '______',
    after: ' always welcomed before board results.',
    prompt: 'Select the singular verb required after uncountable "-s" nouns:',
    options: ['are', 'were', 'is', 'have been'],
    correctIndex: 2,
    shortcutRule:
      'Uncountable nouns ending in "-s" ("news", "mathematics", "physics", "economics", "politics", "measles", "innings") are ALWAYS singular in verb agreement ("is").',
  },
  {
    id: 'sva-7',
    category: 'sva',
    formatBadge: 'Article Repetition Test',
    before: 'The founder and chief architect of the community library ',
    highlight: '______',
    after: ' invited to unveil the plaque tomorrow.',
    prompt: 'Notice ONE article ("The") before two titles. Select the verb:',
    options: ['are', 'were', 'have been', 'is'],
    correctIndex: 3,
    shortcutRule:
      'One article before the first title ("The founder and chief architect") refers to ONE person holding both roles -> Singular ("is"). Two articles ("The founder and the architect") = two people -> Plural.',
  },
  {
    id: 'sva-8',
    category: 'sva',
    formatBadge: 'Indefinite Pronoun Rule',
    before: 'Each of the nominated short stories ',
    highlight: '______',
    after: ' evaluated on plot originality and linguistic economy.',
    prompt: 'Pick the verb agreeing with "Each of + plural noun":',
    options: ['were', 'are', 'is', 'have been'],
    correctIndex: 2,
    shortcutRule:
      '"Each of", "Either of", "Neither of", and "One of" + plural noun ALWAYS govern a SINGULAR verb ("is").',
  },
  {
    id: 'sva-9',
    category: 'sva',
    formatBadge: 'Pair Noun vs "A Pair Of"',
    before: 'A pair of precision lab scissors ',
    highlight: '______',
    after: ' missing from Workbench 4 since yesterday’s dissection drill.',
    prompt: 'Choose the right verb when "scissors" is preceded by "A pair of":',
    options: ['have been', 'were', 'are', 'has been'],
    correctIndex: 3,
    shortcutRule:
      'Bare "Scissors are sharp" (plural), BUT preceded by the singular head noun "A pair of...", it becomes singular ("A pair of... has been missing").',
  },
  {
    id: 'sva-10',
    category: 'sva',
    formatBadge: 'Divided Collective Noun',
    before: 'Because the twelve-member jury ',
    highlight: '______',
    after: ' sharply divided on three clauses, no single verdict emerged.',
    prompt: 'Select the verb reflecting disagreement among individual members:',
    options: ['was', 'were', 'has been', 'is'],
    correctIndex: 1,
    shortcutRule:
      'Collective nouns ("jury", "committee", "panel") take a singular verb when acting unanimously, but take a PLURAL verb ("were") when explicitly divided into disagreeing individuals.',
  },

  // ================= MODALS (10) =================
  {
    id: 'mod-1',
    category: 'modals',
    formatBadge: 'Prohibition vs Non-Necessity',
    before: 'Hospital Advisory: Visitors ',
    highlight: '______',
    after: ' park near the ambulance bay; it is strictly reserved for emergency vans.',
    prompt: 'Pick the modal expressing strict official PROHIBITION:',
    options: ['need not', 'must not', 'might not', 'would not'],
    correctIndex: 1,
    shortcutRule:
      'Classic CBSE Noticeboard Trap: "must not" = strictly forbidden (prohibited). Contrast "need not" = optional / not required.',
  },
  {
    id: 'mod-2',
    category: 'modals',
    formatBadge: 'Lack of Necessity',
    before: 'Students who scored 95% in the qualifier ',
    highlight: '______',
    after: ' attend the remedial bridge camp; their participation is optional.',
    prompt: 'Select the modal phrase showing NO obligation ("optional"):',
    options: ['must not', 'need not', 'cannot', 'daren’t'],
    correctIndex: 1,
    shortcutRule:
      'When an action is optional (allowed to skip without penalty), use "need not / don’t have to" — never "must not" (which bans attending!).',
  },
  {
    id: 'mod-3',
    category: 'modals',
    formatBadge: 'Bare Infinitive Trap',
    before: 'Notice: Parents ',
    highlight: 'ought submit',
    after: ' signed consent slips by Wednesday afternoon.',
    prompt: 'Fix the modal-syntax error:',
    options: [
      'ought submit → ought to submit',
      'ought submit → must to submit',
      'ought submit → ought submitting',
      'ought submit → can to submit',
    ],
    correctIndex: 0,
    shortcutRule:
      'Unlike "should/must/can" (which NEVER take "to"), semi-modal "ought" ALWAYS takes "to + V1" ("ought to submit").',
  },
  {
    id: 'mod-4',
    category: 'modals',
    formatBadge: 'Past Regret / Unfulfilled Duty',
    before: 'You ',
    highlight: '______',
    after: ' backed up your project slides on a pen drive before the server reset.',
    prompt: 'Express unfulfilled past advice / mild reproach:',
    options: ['should have', 'must', 'might', 'can have'],
    correctIndex: 0,
    shortcutRule:
      '"Should have + V3" expresses something desirable/advisable that was sadly NOT done in the past.',
  },
  {
    id: 'mod-5',
    category: 'modals',
    formatBadge: 'Logical Deduction',
    before: 'All classroom lights are off and the corridor is locked; everyone ',
    highlight: '______',
    after: ' left for the day.',
    prompt: 'Choose the modal expressing near-certain (~95%) logical conclusion about the past:',
    options: ['should have', 'must have', 'would have', 'need have'],
    correctIndex: 1,
    shortcutRule:
      'Strong evidence-based logical deduction about a past event uses "must have + V3". ("Can’t have + V3" expresses logical impossibility.)',
  },
  {
    id: 'mod-6',
    category: 'modals',
    formatBadge: 'Polite Formal Request',
    before: '"Excuse me, Inspector, ',
    highlight: '______',
    after: ' you please direct our bus driver to the Science Expo gate?"',
    prompt: 'Select the most polite formal request modal for a stranger/official:',
    options: ['Must', 'Shall', 'Could', 'Dare'],
    correctIndex: 2,
    shortcutRule:
      '"Could you please..." or "Would you please..." softens a request with high formal courtesy.',
  },
  {
    id: 'mod-7',
    category: 'modals',
    formatBadge: 'Discontinued Past Habit',
    before: 'Before the metro bridge opened in 2022, commuters ',
    highlight: '______',
    after: ' wait forty minutes for a ferry across the river.',
    prompt: 'Fill in the semi-modal for a former habit that no longer happens:',
    options: ['should', 'used to', 'need to', 'may'],
    correctIndex: 1,
    shortcutRule:
      '"Used to + V1" indicates a repeated past habit or state that has since ended.',
  },
  {
    id: 'mod-8',
    category: 'modals',
    formatBadge: 'Negative Deduction Trap',
    before: 'That ',
    highlight: '______',
    after: ' be Vikram’s handwriting — look at the slanted capitals; Vikram always prints neatly!',
    prompt: 'Select the modal showing logical impossibility ("definitely NOT"):',
    options: ['mustn’t', 'can’t', 'shouldn’t', 'needn’t'],
    correctIndex: 1,
    shortcutRule:
      'The opposite of epistemic deduction "must be" (certainly is) is "can’t be" (certainly cannot be) — NEVER "mustn’t be"!',
  },
  {
    id: 'mod-9',
    category: 'modals',
    formatBadge: 'Error → Correction',
    before: 'School Rule: Every cyclist ',
    highlight: 'must to wear',
    after: ' a BIS-certified helmet inside campus lanes.',
    prompt: 'Select the accurate Editing correction:',
    options: [
      'must to wear → must wear',
      'must to wear → must wearing',
      'must to wear → must wears',
      'must to wear → can to wear',
    ],
    correctIndex: 0,
    shortcutRule:
      'Pure modals ("must", "can", "may", "should", "will") are ALWAYS followed directly by a bare infinitive (V1), never "to + V1".',
  },
  {
    id: 'mod-10',
    category: 'modals',
    formatBadge: 'Apprehension / Purpose',
    before: 'Check every fuse twice ',
    highlight: 'lest',
    after: ' a short circuit ______ disrupt the robotics demo.',
    prompt: 'Choose the classical modal paired specifically with conjunction "lest":',
    options: ['would', 'could', 'should', 'might'],
    correctIndex: 2,
    shortcutRule:
      '"Lest" (for fear that) traditionally pairs ONLY with "should + V1" — and never with "not".',
  },

  // ================= REPORTED SPEECH (10) =================
  {
    id: 'rep-1',
    category: 'reported',
    formatBadge: 'Wh-Question Word Order',
    before: 'Coach asked Aarav: "Where did you keep the stopwatch yesterday?" -> Coach asked Aarav ',
    highlight: '______',
    after: '.',
    prompt: 'Pick the error-free Reported Speech transformation (check auxiliary + tense + time!):',
    options: [
      'where had he kept the stopwatch yesterday',
      'where he had kept the stopwatch the previous day',
      'that where he kept the stopwatch the previous day',
      'where did he keep the stopwatch the day before',
    ],
    correctIndex: 1,
    shortcutRule:
      '3-Step Wh-Question Rule: (1) NO "that" before wh-word, (2) Statement order Subject + Verb ("where he had kept", NEVER inverted "where had he kept" or "did"), (3) Backshift Simple Past -> Past Perfect + "yesterday" -> "the previous day".',
  },
  {
    id: 'rep-2',
    category: 'reported',
    formatBadge: 'Yes / No Question Trap',
    before: 'Receptionist: "Have you brought your Aadhaar photocopy?" -> The receptionist asked ',
    highlight: '______',
    after: '.',
    prompt: 'Choose the right Reported clause:',
    options: [
      'that if I had brought my Aadhaar photocopy',
      'whether I have brought my Aadhaar photocopy',
      'if I had brought my Aadhaar photocopy',
      'had I brought my Aadhaar photocopy',
    ],
    correctIndex: 2,
    shortcutRule:
      'Yes/No questions use "if" OR "whether" + Subject + backshifted Verb ("had brought"), NEVER "that if" and NEVER question inversion.',
  },
  {
    id: 'rep-3',
    category: 'reported',
    formatBadge: 'Universal Truth Exception',
    before: 'The physics teacher reminded us, "Light travels faster than sound." -> The teacher reminded us ',
    highlight: '______',
    after: '.',
    prompt: 'Select the accurate reporting form for a scientific truth:',
    options: [
      'that light travelled faster than sound',
      'that light had travelled faster than sound',
      'that light travels faster than sound',
      'whether light travels faster than sound',
    ],
    correctIndex: 2,
    shortcutRule:
      'Universal truths, scientific laws, and habitual proverbs do NOT backshift tense even after a past reporting verb ("reminded us that light travels...").',
  },
  {
    id: 'rep-4',
    category: 'reported',
    formatBadge: 'Negative Imperative ("Forbade" Trap)',
    before: 'Curator to students: "Do not touch the fragile fossil display." -> ',
    highlight: 'Choose the error-free sentence:',
    after: '',
    prompt: 'Identify the single valid imperative conversion:',
    options: [
      'The curator forbade the students not to touch the fragile fossil display.',
      'The curator advised the students to not touched the fragile fossil display.',
      'The curator warned the students not to touch the fragile fossil display.',
      'The curator ordered the students that not touch the fragile fossil display.',
    ],
    correctIndex: 2,
    shortcutRule:
      'Two clean options exist: "warned/told + object + NOT TO + V1" OR "forbade + object + TO + V1". Writing "forbade... not to" is a double-negative error!',
  },
  {
    id: 'rep-5',
    category: 'reported',
    formatBadge: 'Comic Dialogue Completion',
    before: 'Doctor: "Take this syrup twice tomorrow." Patient: "Will I need another check-up?" -> ',
    highlight: 'Reported completion:',
    after: ' The patient asked ______.',
    prompt: 'Report the patient’s question in context:',
    options: [
      'if he would need another check-up',
      'whether would he need another check-up',
      'that if he will need another check-up',
      'if he needed another check-up yesterday',
    ],
    correctIndex: 0,
    shortcutRule:
      'Drop inversion ("would he" -> "he would"), backshift "will" -> "would", and begin with "if/whether" without "that".',
  },
  {
    id: 'rep-6',
    category: 'reported',
    formatBadge: 'Present Reporting Verb',
    before: 'Riya says, "I am revising determiners right now." -> ',
    highlight: 'Riya says that ______.',
    after: '',
    prompt: 'Pick the sentence respecting the Present-Tense reporting verb "says":',
    options: [
      'she was revising determiners then',
      'she is revising determiners right now',
      'she had been revising determiners right now',
      'I am revising determiners right now',
    ],
    correctIndex: 1,
    shortcutRule:
      'When the reporting verb is in the Present or Future ("says", "has said", "will say"), update pronouns ("I" -> "she"), but keep the original tense and time marker intact!',
  },
  {
    id: 'rep-7',
    category: 'reported',
    formatBadge: '"Let’s" Proposal Rule',
    before: 'Kapil said to his team, "Let’s plant fifty saplings along the boundary wall." -> ',
    highlight: 'Kapil suggested ______.',
    after: '',
    prompt: 'Complete the CBSE standard indirect form for "Let’s":',
    options: [
      'his team to let plant fifty saplings',
      'to his team that they should plant fifty saplings along the boundary wall',
      'his team if they planted fifty saplings',
      'that he would let plant fifty saplings',
    ],
    correctIndex: 1,
    shortcutRule:
      'Proposals beginning with "Let’s" convert to "suggested/proposed (to + object) that they should + V1" (or "suggested + V-ing").',
  },
  {
    id: 'rep-8',
    category: 'reported',
    formatBadge: 'Time & Modal Backshift',
    before: 'Meena said to Dev, "I can finish these charts here today." -> ',
    highlight: 'Meena told Dev that ______.',
    after: '',
    prompt: 'Verify all FOUR shifts (Pronoun, Modal, Pointer, Adverb) together:',
    options: [
      'she could finish those charts there that day',
      'she can finish these charts there that day',
      'she could finish those charts here today',
      'I could finish those charts there that day',
    ],
    correctIndex: 0,
    shortcutRule:
      'Checklist: "I" -> "she"; "can" -> "could"; "these" -> "those"; "here" -> "there"; "today" -> "that day".',
  },
  {
    id: 'rep-9',
    category: 'reported',
    formatBadge: 'Exclamatory Sentence',
    before: 'Neha said, "Alas! Our school missed the trophy by one point!" -> ',
    highlight: 'Reported version:',
    after: '',
    prompt: 'Choose the cleanest CBSE conversion of an exclamation of grief:',
    options: [
      'Neha asked sorrowfully why their school had missed the trophy.',
      'Neha exclaimed with sorrow that their school had missed the trophy by one point.',
      'Neha exclaimed alas that their school missed the trophy.',
      'Neha told with sorrow that our school missed the trophy.',
    ],
    correctIndex: 1,
    shortcutRule:
      'Replace interjections ("Alas!", "Hurrah!", "Bravo!") with reporting phrases ("exclaimed with sorrow/joy/applause that...") + backshifted statement ("missed" -> "had missed").',
  },
  {
    id: 'rep-10',
    category: 'reported',
    formatBadge: '"Said to" → "Told" Object Rule',
    before: 'Editing Error: The librarian ',
    highlight: 'told to us',
    after: ' that overdue fines were waived for board examinees.',
    prompt: 'Pick the correct Editing fix:',
    options: [
      'told to us → told us (or said to us)',
      'told to us → asked to us',
      'told to us → exclaimed us',
      'No correction needed',
    ],
    correctIndex: 0,
    shortcutRule:
      'Golden Rule: "told" takes a direct personal object WITHOUT "to" ("told us that..."), whereas "said" requires "to" before an object ("said to us that...").',
  },
];

const TAB_CONFIG: Record<
  GrammarTab,
  {
    label: string;
    badge: string;
    tip: string;
  }
> = {
  all: {
    label: 'All 50 Drills',
    badge: 'Complete Section B (10M)',
    tip: 'Practice all 50 CBSE Class 10 Grammar items mixing Determiners, Tenses, Subject–Verb Concord, Modals & Reported Speech.',
  },
  determiners: {
    label: 'Determiners (10)',
    badge: 'Articles & Quantifiers',
    tip: 'Watch out for phonetic a/an sounds, little/a little/the little, few/a few, and "any" with negative adverbs like "hardly".',
  },
  tenses: {
    label: 'Tenses (10)',
    badge: 'Sequence & Conditionals',
    tip: 'Check time markers first: "last week/ago" forbids Present Perfect; "earlier of two past actions" requires had + V3.',
  },
  sva: {
    label: 'Subject–Verb (10)',
    badge: 'Concord Rules',
    tip: 'Distinguish "as well as" (1st subject wins) from "neither...nor" (nearer subject wins) and "The number of" (singular) vs "A number of" (plural).',
  },
  modals: {
    label: 'Modals (10)',
    badge: 'Signage & Deduction',
    tip: 'Remember: "must not" = strictly forbidden, whereas "need not" = optional; pure modals always take bare V1 (never "to + V1").',
  },
  reported: {
    label: 'Reported Speech (10)',
    badge: 'Dialogue Transformations',
    tip: 'No "that" before if/whether/wh-words; restore Statement order (S + V) inside reported questions; keep Universal Truths un-shifted.',
  },
};

export function EnglishGrammarLab() {
  const [activeTab, setActiveTab] = useState<GrammarTab>('all');
  const [indices, setIndices] = useState<Record<GrammarTab, number>>({
    all: 0,
    determiners: 0,
    tenses: 0,
    sva: 0,
    modals: 0,
    reported: 0,
  });
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showCheatStrip, setShowCheatStrip] = useState(false);

  const questions = useMemo(() => {
    if (activeTab === 'all') return GRAMMAR_QUESTIONS;
    return GRAMMAR_QUESTIONS.filter((q) => q.category === activeTab);
  }, [activeTab]);

  const currentIdx = indices[activeTab] % questions.length;
  const currentQ = questions[currentIdx];
  const selectedOpt = answers[currentQ.id];
  const tabInfo = TAB_CONFIG[activeTab];

  const totalAnswered = Object.keys(answers).length;
  const totalCorrect = useMemo(
    () =>
      GRAMMAR_QUESTIONS.filter((q) => answers[q.id] === q.correctIndex).length,
    [answers]
  );

  const tabAnswered = useMemo(
    () => questions.filter((q) => answers[q.id] !== undefined).length,
    [questions, answers]
  );
  const tabCorrect = useMemo(
    () => questions.filter((q) => answers[q.id] === q.correctIndex).length,
    [questions, answers]
  );

  const setTabIdx = (nextIdx: number) => {
    setIndices((prev) => ({ ...prev, [activeTab]: nextIdx }));
  };

  const selectOption = (optIndex: number) => {
    if (selectedOpt !== undefined) return;
    setAnswers((prev) => ({ ...prev, [currentQ.id]: optIndex }));
  };

  const TabIcon =
    activeTab === 'determiners'
      ? BookOpen
      : activeTab === 'tenses'
      ? Clock
      : activeTab === 'sva'
      ? Scale
      : activeTab === 'modals'
      ? ShieldCheck
      : activeTab === 'reported'
      ? MessageSquareQuote
      : Layers;

  return (
    <div
      id="english-grammar-speed-lab"
      className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/60 via-white to-sky-50/40 p-4 sm:p-6 shadow-xs dark:border-indigo-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 space-y-5"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-indigo-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <Layers className="h-5 w-5" />
          </span>
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              CBSE 10-Mark Integrated English Grammar Lab (50 Drills)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Determiners • Tenses • Subject–Verb Concord • Modals • Reported Speech — Gap-Fill, Error Correction &amp; Dialogue Shifts (100% Offline)
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {totalAnswered > 0 && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-extrabold text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300">
              <Trophy className="h-3.5 w-3.5" />
              Overall: {totalCorrect}/{totalAnswered} (
              {Math.round((totalCorrect / totalAnswered) * 100)}%)
            </span>
          )}
          <button
            type="button"
            onClick={() => setShowCheatStrip((prev) => !prev)}
            className="inline-flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50 px-2.5 py-1.5 text-xs font-bold text-indigo-800 hover:bg-indigo-100 cursor-pointer dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-200"
          >
            {showCheatStrip ? (
              <>
                <ChevronUp className="h-3.5 w-3.5" /> Hide Rule Strip
              </>
            ) : (
              <>
                <ChevronDown className="h-3.5 w-3.5" /> Quick Rule Strip
              </>
            )}
          </button>
          <button
            type="button"
            onClick={() => setAnswers({})}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset All
          </button>
        </div>
      </div>

      {/* Collapsible Quick Rule & Backshift Cheat Strip */}
      {showCheatStrip && (
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5 rounded-xl border border-indigo-200/80 bg-white/95 p-3.5 text-[11px] leading-relaxed text-slate-700 dark:border-indigo-900/60 dark:bg-slate-950/80 dark:text-slate-300">
          <div className="rounded-lg border border-slate-200 p-2.5 dark:border-slate-800">
            <div className="font-extrabold text-indigo-700 dark:text-indigo-400">
              1. Determiners
            </div>
            <div>
              <strong>a</strong> (/y/ sound: European) vs <strong>an</strong> (hour, MLA);{' '}
              <strong>little/few</strong> (≈0) vs <strong>a little/a few</strong> (some) vs{' '}
              <strong>the little/the few</strong> (all left).
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 p-2.5 dark:border-slate-800">
            <div className="font-extrabold text-indigo-700 dark:text-indigo-400">
              2. Tenses
            </div>
            <div>
              <em>ago/yesterday</em> → Simple Past (never Pres. Perf); earlier of 2 past events →{' '}
              <strong>had + V3</strong>; Type-1 <em>If + V1 → will + V1</em>.
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 p-2.5 dark:border-slate-800">
            <div className="font-extrabold text-indigo-700 dark:text-indigo-400">
              3. Concord (SVA)
            </div>
            <div>
              <em>as well as / along with</em> → 1st subj; <em>neither...nor</em> → nearer subj;{' '}
              <em>Each/Every/The number of</em> → Singular; <em>news/physics</em> → Singular.
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 p-2.5 dark:border-slate-800">
            <div className="font-extrabold text-indigo-700 dark:text-indigo-400">
              4. Modals
            </div>
            <div>
              <strong>mustn’t</strong> (banned) vs <strong>needn’t</strong> (optional);{' '}
              <strong>ought to + V1</strong>; Modal + bare V1 always (never <em>must to</em>).
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 p-2.5 dark:border-slate-800">
            <div className="font-extrabold text-indigo-700 dark:text-indigo-400">
              5. Reported Speech
            </div>
            <div>
              No <em>that if/what</em>; restore S+V order; <em>today→that day</em>,{' '}
              <em>yesterday→previous day</em>; <em>forbade + obj + to</em> (no <em>not</em>).
            </div>
          </div>
        </div>
      )}

      {/* 6 Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {(Object.keys(TAB_CONFIG) as GrammarTab[]).map((key) => {
          const cfg = TAB_CONFIG[key];
          const active = activeTab === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`rounded-xl px-3.5 py-2 text-xs font-extrabold transition cursor-pointer ${
                active
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-indigo-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200'
              }`}
            >
              {cfg.label}
            </button>
          );
        })}
      </div>

      {/* Golden Tip & Section Score Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-indigo-200/80 bg-white/90 px-3.5 py-2.5 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300">
        <div className="flex items-start gap-2">
          <TabIcon className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
          <span>{tabInfo.tip}</span>
        </div>
        <span className="font-bold text-indigo-700 dark:text-indigo-400 shrink-0">
          Tab Score: {tabCorrect}/{tabAnswered} ({questions.length} Qs)
        </span>
      </div>

      {/* Question Number Pills */}
      <div className="flex flex-wrap gap-1.5">
        {questions.map((q, idx) => {
          const ans = answers[q.id];
          const isCurrent = idx === currentIdx;
          let pillStyle =
            'bg-white border-slate-200 text-slate-600 hover:border-indigo-400 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300';
          if (ans !== undefined) {
            pillStyle =
              ans === q.correctIndex
                ? 'bg-emerald-100 border-emerald-400 text-emerald-900 dark:bg-emerald-950/60 dark:border-emerald-700 dark:text-emerald-300'
                : 'bg-rose-100 border-rose-400 text-rose-900 dark:bg-rose-950/60 dark:border-rose-700 dark:text-rose-300';
          }
          if (isCurrent) {
            pillStyle += ' ring-2 ring-indigo-500';
          }
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => setTabIdx(idx)}
              className={`h-7 min-w-[2rem] px-2 rounded-lg border text-xs font-extrabold transition cursor-pointer ${pillStyle}`}
            >
              Q{idx + 1}
            </button>
          );
        })}
      </div>

      {/* Active Question Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 space-y-4 shadow-2xs dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-md bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 text-[11px] font-extrabold text-indigo-800 dark:bg-indigo-950/60 dark:border-indigo-800 dark:text-indigo-300">
            Question {currentIdx + 1} / {questions.length} • {currentQ.formatBadge}
          </span>
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
            {TAB_CONFIG[currentQ.category].badge}
          </span>
        </div>

        {/* Highlighted Target Span */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/40 px-4 py-3.5 text-sm sm:text-base font-medium leading-relaxed text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
          {currentQ.before}
          <span className="rounded bg-amber-200/80 border-b-2 border-amber-700 px-1.5 py-0.5 font-extrabold text-slate-950 dark:bg-amber-500/30 dark:border-amber-300 dark:text-amber-200">
            {currentQ.highlight}
          </span>
          {currentQ.after}
        </div>

        <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
          {currentQ.prompt}
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {currentQ.options.map((opt, oi) => {
            const isPicked = selectedOpt === oi;
            const isRight = oi === currentQ.correctIndex;
            let btnStyle =
              'border-slate-200 bg-slate-50/70 text-slate-800 hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200';
            if (selectedOpt !== undefined) {
              if (isRight) {
                btnStyle =
                  'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold dark:bg-emerald-950/60 dark:text-emerald-200';
              } else if (isPicked && !isRight) {
                btnStyle =
                  'border-rose-500 bg-rose-50 text-rose-950 dark:bg-rose-950/60 dark:text-rose-200';
              }
            }

            return (
              <button
                key={oi}
                type="button"
                disabled={selectedOpt !== undefined}
                onClick={() => selectOption(oi)}
                className={`w-full text-left rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm font-semibold transition flex items-start justify-between gap-2 cursor-pointer disabled:cursor-default ${btnStyle}`}
              >
                <span>
                  <span className="font-mono text-xs opacity-70 mr-1.5">
                    {String.fromCharCode(65 + oi)}.
                  </span>
                  {opt}
                </span>
                {selectedOpt !== undefined && isRight && (
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                )}
                {selectedOpt !== undefined && isPicked && !isRight && (
                  <XCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {selectedOpt !== undefined && (
          <div
            className={`rounded-xl border p-3 text-xs space-y-1 ${
              selectedOpt === currentQ.correctIndex
                ? 'border-emerald-200 bg-emerald-50/80 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200'
                : 'border-rose-200 bg-rose-50/80 text-rose-950 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-200'
            }`}
          >
            <div className="flex items-center gap-1.5 font-extrabold">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              {selectedOpt === currentQ.correctIndex
                ? 'Correct! CBSE Shortcut Rule:'
                : `Correct Answer: ${currentQ.options[currentQ.correctIndex]}`}
            </div>
            <div className="leading-relaxed">{currentQ.shortcutRule}</div>
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={() =>
              setTabIdx((currentIdx - 1 + questions.length) % questions.length)
            }
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            ← Previous
          </button>
          <button
            type="button"
            onClick={() => setTabIdx((currentIdx + 1) % questions.length)}
            className="rounded-lg bg-indigo-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 cursor-pointer"
          >
            Next Question →
          </button>
        </div>
      </div>
    </div>
  );
}
