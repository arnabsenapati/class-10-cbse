import { Subtopic } from '../../../types/curriculum';

export const englishWriting03Analytical: Subtopic = {
  id: 'eng-wr-03',
  slug: 'analytical-paragraph-writing',
  title: 'Analytical Paragraph: Charts, Tables, SWOT Cues & Maps',
  subtitle:
    'Decode bar/line trends, dual-share tables, SWOT decision matrices, and spatial map transformations in 100–120 words—with 5-mark CBSE blueprint, objective lexicon, 4 paired data+model sets, and examiner traps.',
  estimatedMinutes: 35,
  difficulty: 'Core CBSE',
  ncertSection: 'Section B — Writing Skills (Analytical Paragraph 5M)',
  learningObjectives: [
    'Organise data interpretation into a **single unified paragraph** (`100–120 words`) featuring a clear Topic Sentence, grouped comparisons/extremes, and a data-backed concluding insight.',
    'Maintain strictly **objective third-person academic tone**—zero first-person pronouns (`I think`, `we should`), zero exclamation marks, and zero letter salutations.',
    'Deploy precise lexical sets for **upward/downward trends, fractions/proportions, contrast linkers, and SWOT evaluation verbs**.',
    'Synthesise all four CBSE visual/cue formats: Multi-Year Charts, Comparative Tables, SWOT Decision Prompts, and Spatial Map Redesigns.',
  ],
  keywords: [
    'analytical paragraph class 10',
    'cbse analytical paragraph 5 marks',
    'swot analytical paragraph cbse',
    'chart table map interpretation english',
    'analytical paragraph vocabulary',
  ],
  sections: [
    {
      id: 'wr-03-analytical-blueprint-lexicon',
      title: '1. Official CBSE Blueprint, Single-Paragraph Rule & Analytical Lexicon',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Analytical Paragraph Formula (Question 5 • 5 Marks)',
          bullets: [
            '**Single Paragraph Only (`100–120 words`):** Never split an analytical paragraph into multiple paragraphs, bullet lists, or sub-headings—join sentences seamlessly with contrast and additive linkers.',
            '**Three-Move Internal Arc:** (1) **Topic Sentence** naming what the chart/table/map depicts; (2) **Body Analysis** grouping major highs, lows, crossovers, or trade-offs; (3) **Synthesis Line** stating the overarching pattern without inventing outside facts.',
            '**Interpret, Don’t Transcribe:** Examiners already see the numbers—earn full marks by naming **trends** (*nearly tripled*, *dropped by 19 percentage points*), **proportions** (*over one-third*), and **contrasts** (*whereas*, *conversely*).',
            '**SWOT & Map Golden Rule:** For SWOT/argument cues, weigh strengths/opportunities objectively against weaknesses/threats; for maps, sweep systematically by compass zone (North -> Centre -> East -> South).',
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'Official CBSE 5-Mark Blueprint & Tone Discipline',
          body: 'Question 5 tests factual compression and neutral synthesis in **100–120 words** (`Content 2M + Organisation & Cohesion 2M + Accuracy 1M = 5 Marks`). Stick strictly to a **SINGLE unified paragraph** in objective **third-person** prose:',
          bullets: [
            '**Content (`2 Marks`):** Captures all salient trends, highest/lowest extremes, and key cue points accurately without copying raw cells mechanically or fabricating missing figures.',
            '**Organisation & Cohesion (`2 Marks`):** Written as **one unbroken paragraph** (plus an optional crisp 4–7 word title) threaded smoothly via analytical linkers.',
            '**Accuracy (`1 Mark`):** Consistent verb tense (present tense for static shares/SWOT; past tense for completed historical trends/2018–2026 redesigns), exact prepositions (`rose from X to Y`, `rose by Z`), and zero spelling slips.',
            '**Forbidden Register:** NEVER write `"I think"`, `"In my opinion"`, `"we must wake up!"`, `"Dear Sir"`, or personal moralising slogans.',
          ],
        },
        {
          type: 'table',
          caption: 'High-Scoring Analytical Vocabulary Bank (Code 184 Power Lexicon)',
          headers: [
            'Analytical Function',
            'High-Scoring Verbs & Expressions',
            'Ready-to-Use Exam Sentence Frame',
          ],
          rows: [
            [
              '**Upward & Surge Trends**',
              '`witnessed a steady climb`, `surged nearly threefold`, `peaked at`, `edged upward`, `registered a sharp upswing`',
              '*Audiobook usage **surged nearly threefold**, climbing from 8% in 2021 to 22% by 2026.*',
            ],
            [
              '**Downward & Plateau Trends**',
              '`experienced a steady decline`, `dipped marginally`, `tapered off`, `remained relatively stagnant`, `bottomed out at`',
              '*Print-book share **experienced a steady decline**, dropping by 19 percentage points while e-books **remained relatively stagnant**.*',
            ],
            [
              '**Proportions & Fractions**',
              '`accounted for over one-third`, `constituted a fifth`, `outstripped`, `comprised nearly a quarter`, `held the lion’s share`',
              '*Housing **accounted for over one-third** (34%) of Metro budgets, **outstripping** Tier-2 rent outlays (20%).*',
            ],
            [
              '**Contrast & Synthesis Linkers**',
              '`Conversely`, `In stark contrast`, `Whereas`, `Simultaneously`, `Collectively, the data underscores`',
              '***Conversely**, Tier-2 households channelled substantially larger shares toward groceries and schooling.*',
            ],
            [
              '**SWOT & Decision Verbs**',
              '`merits phased consideration`, `counterbalanced by`, `poses a credible bottleneck`, `hinges upon`, `yields dual gains`',
              '*These pedagogical strengths are **counterbalanced by** high procurement expenses, so viability **hinges upon** prior safeguards.*',
            ],
          ],
        },
      ],
    },
    {
      id: 'wr-03-chart-graph-models',
      title: '2. Paired Data + Models: Multi-Year Trends & Dual-Share Comparisons',
      blocks: [
        {
          type: 'table',
          caption: 'Data Set 1 (Bar / Line Trend Source): Evolution of Urban Teen Reading Formats (% of Weekly Reading Hours, Ages 13–17)',
          headers: ['Reading Format', '2021', '2023', '2025', '2026'],
          rows: [
            ['**Print Books**', '54%', '46%', '39%', '35%'],
            ['**E-Books**', '22%', '24%', '25%', '24%'],
            ['**Audiobooks**', '8%', '13%', '18%', '22%'],
            ['**Short Micro-Articles / Feeds**', '16%', '17%', '18%', '19%'],
          ],
        },
        {
          type: 'writing-sample',
          lang: 'en',
          formatType: 'analytical-paragraph',
          badge: 'Model 7 • Multi-Year Bar/Line Trend Analysis',
          title: 'Shifting Teen Reading Preferences Across Print, E-Books, Audio & Micro-Feeds (2021–2026)',
          prompt:
            'The table above tracks shifts in weekly reading hours among urban teenagers aged 13–17 between 2021 and 2026. Study the data carefully and write an analytical paragraph in 100–120 words summarising the key trends and comparisons.',
          wordTarget: '100–120 words',
          marksSplit: 'Content 2 + Organisation & Cohesion 2 + Accuracy 1 = 5 Marks',
          centerHeading: 'Shifting Teen Reading Preferences (2021–2026)',
          body:
            'The given data illustrates a notable shift in urban teenagers’ weekly reading formats between 2021 and 2026. Although print books retained the largest single share throughout the five-year span, their dominance declined steadily by 19 percentage points, falling from 54% in 2021 to 35% in 2026. Conversely, audiobooks recorded the sharpest expansion, nearly tripling from a modest 8% to 22% and overtaking micro-articles by 2026. Meanwhile, e-book consumption remained relatively stable, hovering near a quarter of total reading time and peaking marginally at 25% in 2025, while bite-sized micro-articles edged upward gradually from 16% to 19%. Overall, the figures reveal a clear diversification away from exclusive print reliance toward audio-friendly and screen-based formats.',
          examinerNote:
            '113 words in a single unified paragraph: calculates the 19-point drop (`54% -> 35%`), identifies the fastest gainer (`nearly tripling from 8% to 22%`), notes e-book stability (`hovering near a quarter`), and closes with a crisp synthesis sentence.',
        },
        {
          type: 'table',
          caption: 'Data Set 2 (Dual Pie / Share Comparison Source): Monthly Household Budget Allocation (% Share, 2026 Survey)',
          headers: ['Expenditure Head', 'Metro Households (%)', 'Tier-2 Town Households (%)'],
          rows: [
            ['**Housing & Rent**', '34%', '20%'],
            ['**Groceries & Food**', '20%', '28%'],
            ['**Education & Coaching**', '18%', '22%'],
            ['**Transport & Fuel**', '12%', '11%'],
            ['**Healthcare & Insurance**', '8%', '11%'],
            ['**Digital Utilities & Connectivity**', '8%', '8%'],
          ],
        },
        {
          type: 'writing-sample',
          lang: 'en',
          formatType: 'analytical-paragraph',
          badge: 'Model 8 • Dual Pie / Comparative Household Share Analysis',
          title: 'Monthly Household Budget Allocation: Metro vs. Tier-2 Towns (2026)',
          prompt:
            'The comparative survey table above presents the percentage allocation of monthly income across six categories for Metro and Tier-2 town households in 2026. Write an analytical paragraph in 100–120 words highlighting major contrasts and similarities.',
          wordTarget: '100–120 words',
          marksSplit: 'Content 2 + Organisation & Cohesion 2 + Accuracy 1 = 5 Marks',
          centerHeading: 'Monthly Household Spending: Metro vs. Tier-2 Towns',
          body:
            'The comparative data contrasts monthly household expenditure patterns across six essentials in Metro cities and Tier-2 towns in 2026. Housing represents the single biggest divergence: Metro families allocate over one-third of their income (34%) to rent, whereas Tier-2 households spend only a fifth (20%). Consequently, Tier-2 families channel substantially larger proportions toward groceries (28% versus 20%) and education (22% versus 18%), alongside a slightly higher healthcare share (11% compared with 8%). By contrast, both cohorts devote nearly identical shares to transport (12% in Metros and 11% in Tier-2 towns) and an exact 8% each to digital utilities. Collectively, the figures underscore how steep urban shelter costs compress discretionary spending on food and schooling.',
          examinerNote:
            '113 words: converts raw percentages into vivid proportional language (`over one-third`, `only a fifth`), groups similarities (`transport` and `exact 8% digital utilities`) cleanly, and explains the structural trade-off objectively.',
        },
      ],
    },
    {
      id: 'wr-03-swot-cue-map-models',
      title: '3. Paired Cues + Models: SWOT Decision Evaluation & Spatial Map Redesign',
      blocks: [
        {
          type: 'table',
          caption: 'Data Set 3 (SWOT Decision Cues): School Proposal to Replace Printed Weekly Tests with Tablet Assessments',
          headers: ['SWOT Quadrant', 'Provided Decision Cues'],
          rows: [
            [
              '**Strengths**',
              'Instant auto-grading & topic-wise error analytics; eliminates ~1.2 lakh paper sheets per year.',
            ],
            [
              '**Weaknesses**',
              'High upfront tablet procurement & repair costs; screen-glare eye strain; Wi-Fi & charging dependency.',
            ],
            [
              '**Opportunities**',
              'Prepares students early for CBT competitive exams; enables zoom & audio accessibility tools.',
            ],
            [
              '**Threats**',
              'Tab-switching malpractice risks without kiosk locks; uneven home digital readiness among families.',
            ],
          ],
        },
        {
          type: 'writing-sample',
          lang: 'en',
          formatType: 'analytical-paragraph',
          badge: 'Model 9 • SWOT / Decision-Cue Objective Evaluation',
          title: 'Weighing Printed Weekly Tests Against Tablet-Based Assessments via SWOT Cues',
          prompt:
            'Your school management is evaluating a proposal to replace printed weekly tests with tablet-based assessments. Using all four quadrants of the SWOT matrix above, write an analytical paragraph in 100–120 words assessing the viability of the proposal objectively.',
          wordTarget: '100–120 words',
          marksSplit: 'Content 2 + Organisation & Cohesion 2 + Accuracy 1 = 5 Marks',
          centerHeading: 'Evaluating Tablet-Based Weekly Assessments',
          body:
            'An analysis of the SWOT matrix for replacing printed weekly tests with tablet-based assessments highlights a compelling balance between instructional efficiency and operational risk. On the positive side, automated grading delivers instant diagnostic feedback while eliminating roughly 1.2 lakh paper sheets annually, simultaneously preparing learners for computer-based entrance examinations and offering built-in accessibility tools. However, these pedagogical strengths are counterbalanced by substantial upfront procurement costs, ongoing battery or Wi-Fi maintenance, and potential eye fatigue. Furthermore, without locked kiosk software, tab-switching malpractice and uneven home digital readiness pose credible threats to fairness. Overall, the proposal merits phased implementation rather than an abrupt switch, provided technical safeguards and school-owned charging infrastructure are secured beforehand.',
          examinerNote:
            '112 words: integrates every single SWOT quadrant neutrally without saying "I vote Yes" or "Teachers must buy tablets"—concluding logically with "merits phased implementation... provided technical safeguards are secured".',
        },
        {
          type: 'table',
          caption: 'Data Set 4 (Spatial Map Transformation Cues): Lakeside School Library & Courtyard (2018 vs. 2026)',
          headers: ['Campus Zone', '2018 Layout', '2026 Redesigned Layout'],
          rows: [
            [
              '**North Wing**',
              'Dense print-book stacks & manual card-catalogue drawers',
              'Digitised self-checkout hub flanked by hybrid e-reading pods',
            ],
            [
              '**Central Courtyard**',
              'Open, unshaded concrete quadrangle',
              'Shaded semi-circular amphitheatre & rainwater-fed botanical reading garden',
            ],
            [
              '**East Corner**',
              'Single librarian desk & locked storage closet',
              'Acoustic group-discussion booths & wheelchair-accessible ramp entrance',
            ],
            [
              '**South Perimeter**',
              'Steep narrow staircase & disused cycle shed',
              'Solar-roofed STEM maker-space & tactile Braille resource corner',
            ],
          ],
        },
        {
          type: 'writing-sample',
          lang: 'en',
          formatType: 'analytical-paragraph',
          badge: 'Model 10 • Spatial Campus Redesign / Map Transformation',
          title: 'Lakeside School Library & Courtyard Spatial Transformation (2018 vs. 2026)',
          prompt:
            'The zone comparison table above summarises two architectural maps of Lakeside School Library and Courtyard in 2018 and 2026. Write an analytical paragraph in 100–120 words describing the spatial transformation and functional shift.',
          wordTarget: '100–120 words',
          marksSplit: 'Content 2 + Organisation & Cohesion 2 + Accuracy 1 = 5 Marks',
          centerHeading: 'Spatial Transformation of Lakeside School Library (2018–2026)',
          body:
            'The comparative campus plans illustrate a comprehensive modernisation of Lakeside School Library and Courtyard between 2018 and 2026, shifting from passive book storage to interactive, sustainable learning. In the north wing, traditional print racks and manual card catalogues gave way to a digitised self-checkout hub flanked by hybrid e-reading pods. Simultaneously, the once-bare central concrete quadrangle was transformed into a shaded amphitheatre surrounded by a rainwater-fed botanical reading garden. Along the east corner, a cramped storage room and lone desk were replaced with acoustic group-discussion booths and an accessible ramp entrance. Finally, converting the disused southern cycle shed into a solar-roofed maker-space and Braille corner underscores a decisive commitment to inclusivity and green design.',
          examinerNote:
            '114 words: marches smoothly across all four compass zones (`north wing -> central quadrangle -> east corner -> southern perimeter`) in clean past-tense transition verbs (`gave way to`, `was transformed into`, `were replaced with`) and lands on a strong thematic takeaway.',
        },
      ],
    },
    {
      id: 'wr-03-traps-checkpoints',
      title: '4. High-Cost Examiner Traps & Quick Checkpoints',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Riya (Class 10)',
          title: 'Trap 1: Mechanical Cell-by-Cell Listing Without Trends, Extremes, or Grouping',
          wrongWork:
            'In 2021 print was 54%, e-books 22%, audiobooks 8%, micro-articles 16%. In 2023 print was 46%, e-books 24%, audiobooks 13%, micro-articles 17%. In 2025 print was 39%...',
          whyWrong:
            'Simply converting every table cell into robotic sentences shows zero analytical synthesis! Examiners cap mechanical transcription at 2.5–3/5 because no comparisons, overall drops/surges, or patterns are identified.',
          teacherFix:
            'Group by category and interpret magnitude: *"Print books lost 19 percentage points over five years (54% to 35%), while audiobooks nearly tripled from 8% to 22%, and e-books stayed stable around one-fourth."*',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Devansh (Class 10)',
          title: 'Trap 2: Injecting First-Person Opinion ("I Feel") or Emotional Moralising ("Citizens Must Wake Up!")',
          wrongWork:
            'I strongly feel Metro rents are terribly unfair! Citizens must wake up and stop spending 34% on housing immediately, or we will all suffer!!',
          whyWrong:
            'An analytical paragraph is an objective data report—never an editorial speech or diary entry. First-person pronouns (`I`, `we`), exclamation marks, and moral commands breach register and lose both Content and Accuracy marks.',
          teacherFix:
            'Replace emotional exhortations with neutral analytical cause-and-effect: *"Collectively, the data underscores how steep Metro housing costs (34%) compress budgets available for groceries and education compared with Tier-2 towns."*',
        },
        {
          type: 'checkpoint',
          prompt:
            'Which structural and tonal choice strictly matches the CBSE Class 10 Analytical Paragraph rubric (Question 5)?',
          options: [
            {
              id: 'a',
              label: 'Three separate short paragraphs with bullet points inside the SWOT evaluation, ending with "Yours truly,"',
            },
            {
              id: 'b',
              label: 'One unified 100–120 word paragraph written in neutral third-person prose with smooth transition linkers',
            },
            {
              id: 'c',
              label: 'A 180-word persuasive speech opening with "Good morning judges, I think tablets are awesome!"',
            },
            {
              id: 'd',
              label: 'Copying every single number in chronological order without noting any rise, drop, or contrast',
            },
          ],
          correctIds: ['b'],
          successMsg:
            'Correct! One unbroken paragraph (`100–120 words`), neutral third-person voice, and cohesive comparison/trend linkers secure 5/5.',
          hintMsg:
            'Remember: Analytical Paragraphs never split into multiple paragraphs, never use "I/we", and never list figures without interpreting relationships.',
        },
        {
          type: 'checkpoint',
          prompt:
            'When evaluating a SWOT cue prompt on extending school library hours until 6:30 p.m., which concluding sentence demonstrates mature analytical synthesis?',
          options: [
            {
              id: 'a',
              label: '"I completely agree with the principal—please keep the library open till 6:30 p.m. from tomorrow!"',
            },
            {
              id: 'b',
              label: '"Overall, extending hours offers valuable study equity for quiet-space seekers, provided staffing costs and safe evening transport safeguards are addressed first."',
            },
            {
              id: 'c',
              label: '"Strengths are two points, weaknesses are two points, opportunities are two points, and threats are two points."',
            },
            {
              id: 'd',
              label: '"Thanking you in anticipation of late library hours. Yours faithfully, Student."',
            },
          ],
          correctIds: ['b'],
          successMsg:
            'Spot on! Option (b) balances opportunity against operational constraints objectively in formal third-person prose.',
          hintMsg:
            'Avoid first-person voting ("I agree") or letter closings; instead weigh the main benefit against the key condition/constraint.',
        },
      ],
    },
  ],
};
