import { Subtopic } from '../../../types/curriculum';

export const englishWriting01LettersA: Subtopic = {
  id: 'eng-wr-01',
  slug: 'formal-letter-editor-and-complaint',
  title: 'Formal Letters I: Letter to the Editor & Complaint Letters',
  subtitle:
    'Master the 5-mark CBSE left-aligned block format with 8 mandatory steps, power-phrase banks, 2 Editor models, 1 Defective-Product Complaint model, municipal complaint contrast, and examiner trap drills.',
  estimatedMinutes: 30,
  difficulty: 'Core CBSE',
  ncertSection: 'Section B — Writing Skills (Formal Letter 5M)',
  learningObjectives: [
    'Apply the 8-step left-aligned CBSE block format (`Format 1 + Organisation 1 + Content 2 + Accuracy 1 = 5 Marks`) without punctuation errors.',
    'Distinguish the indirect awareness-raising tone of a **Letter to the Editor** from the direct redressal tone of **Commercial** and **Municipal Complaint Letters**.',
    'Draft 100–120 word formal letters quoting concrete evidence, invoice/model references, and actionable solutions.',
    'Avoid high-frequency board traps such as numeric dates (`14/11/26`), apostrophe typos (`Your\'s`), wrong sign-offs, and asking the Editor to perform civic repairs.',
  ],
  keywords: [
    'letter to the editor class 10',
    'complaint letter format cbse',
    'formal letter 5 marks code 184',
    'defective product complaint letter',
    'cbse left aligned letter format',
    'yours truly vs yours faithfully',
  ],
  sections: [
    {
      id: 'wr-01-cbse-format-blueprint',
      title: '1. CBSE 5-Mark Marking Split, 8-Step Layout & Power-Phrase Bank',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Formal Letter Essentials (Question 4 • 5 Marks)',
          bullets: [
            '**Strict Left-Aligned Block Style:** Every single component—Sender’s Address, Date, Receiver’s Address, Subject, Salutation, Paragraphs, and Sign-Off—starts flush against the left margin with one blank line separating blocks.',
            '**Word Limit (`100–120 words`):** Applies to the **body** of the letter (three tight paragraphs of roughly 30 + 60 + 25 words), keeping the entire letter crisp on a single fresh page.',
            '**Tone Split Matters:** In a **Letter to the Editor**, you appeal to authorities/citizens *through the newspaper*; in a **Complaint Letter**, you demand concrete action, repair, or replacement directly from the responsible official or vendor.',
            '**Realistic Persona Rule:** Use the sender name, designation, and address printed in the question prompt; when omitted, supply realistic civic details (e.g., `House No. 42, Sector 14, Gurugram`) rather than placeholders like `ABC`.',
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'Official CBSE Code 184 Marking Split (Total: 5 Marks)',
          body: 'Examiners evaluate Question 4 (100–120 words, 1 out of 2 internal choice) across four weighted rubrics. Crucially, the **1 mark for Format is awarded ONLY if relevant content is written**—an empty skeleton receives zero.',
          bullets: [
            '**Format (`1 Mark`):** Sender’s address, expanded date, receiver’s designation & address, concise Subject, Salutation, and correct Complimentary Close + Signature.',
            '**Organisation of Ideas (`1 Mark`):** Logical 3-paragraph progression (Purpose/Problem -> Causes & Impact -> Constructive Appeal/Remedy) with formal cohesion.',
            '**Content (`2 Marks`):** Full coverage of all prompt cues, specific facts/invoice details where applicable, and appropriate audience register.',
            '**Accuracy of Spelling & Grammar (`1 Mark`):** Error-free formal syntax, tense consistency, subject–verb agreement, and accurate punctuation.',
          ],
        },
        {
          type: 'steps',
          title: 'Strict 8-Step Left-Aligned CBSE Block Layout',
          items: [
            {
              label: '1. Sender’s Address (2–3 concise lines)',
              detail:
                'Place only the house/flat number, colony/institution, and city at the top left. Never write the sender’s name above the address or add end-of-line commas in modern open punctuation.',
              example: 'House No. 42, Sector 14, Gurugram',
            },
            {
              label: '2. Expanded Date (leave 1 blank line above and below)',
              detail:
                'Always write the day, full month name, and four-digit year. Avoid numeric slashes (`14/11/26`) or ordinal suffixes (`14th Nov.`).',
              example: '14 November 2026',
            },
            {
              label: '3. Receiver’s Designation & Official Address',
              detail:
                'Address the exact role (`The Editor`, `The Customer Relations Manager`, `The Municipal Commissioner`) followed by the organisation and city.',
              example: 'The Editor, The Hindustan Times, New Delhi',
            },
            {
              label: '4. Crisp Subject Line (6–10 words)',
              detail:
                'State the core issue or grievance in one scannable noun phrase immediately after `Subject:`—never write a multi-sentence explanation here.',
              example: 'Subject: Urgent Need for Decentralised E-Waste Collection Drives',
            },
            {
              label: '5. Formal Salutation',
              detail:
                'Use `Sir/Madam,` (or `Dear Sir/Madam,`) on a new line. Avoid informal greetings (`Hello`) or redundant honorifics (`Respected Sir/Madam`).',
              example: 'Sir/Madam,',
            },
            {
              label: '6. Three-Paragraph Body (100–120 words total)',
              detail:
                'Paragraph 1 states purpose/reference; Paragraph 2 analyses causes, evidence, or defect symptoms; Paragraph 3 specifies remedies, civic appeal, or a firm deadline.',
              example: 'Para 1 (~25w) + Para 2 (~60w) + Para 3 (~30w)',
            },
            {
              label: '7. Audience-Matched Complimentary Close',
              detail:
                'Write `Yours truly,` for Letters to the Editor and `Yours faithfully,` for commercial/official complaints addressed to `Sir/Madam`. Never insert an apostrophe in `Yours`.',
              example: 'Yours truly, (Editor) | Yours faithfully, (Complaint)',
            },
            {
              label: '8. Signature, Full Name & Role Tag',
              detail:
                'Sign off with your name and optional bracketed capacity (`Concerned Resident`, `Academic Media Coordinator`) matching the prompt persona.',
              example: 'Meera Nair / (Concerned Resident)',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Opening & Closing Power-Phrase Bank Across Three Letter Types',
          headers: [
            'Letter Category',
            'High-Scoring Opening Hook (Para 1)',
            'Middle-Body Priority (Para 2)',
            'Closing Appeal & Sign-Off (Para 3)',
          ],
          rows: [
            [
              '**Letter to the Editor**\n*(Public Awareness)*',
              '`Through the columns of your esteemed daily, I wish to draw the attention of the concerned authorities and citizens toward...`',
              'Cite ground impact, statistics/trends, health or safety risks, and systemic root causes objectively.',
              '`I hope this letter finds space in your widely read columns to awaken civic accountability and prompt timely action.`\n**Close:** `Yours truly,`',
            ],
            [
              '**Municipal / Civic Complaint**\n*(Local Authority)*',
              '`I wish to bring to your urgent notice the deteriorating civic conditions regarding... in Ward/Sector...`',
              'Specify duration of neglect, exact street/landmark affected, public health/commute hazards, and prior unaddressed calls.',
              '`Kindly depute a sanitation/maintenance team within 48 hours to resolve this grievance and prevent further hardship.`\n**Close:** `Yours faithfully,`',
            ],
            [
              '**Defective Product Complaint**\n*(Commercial Vendor)*',
              '`I regret to inform you that the [Product & Model], purchased vide Invoice No. ... dated ..., has developed serious defects within the warranty period.`',
              'List exact technical malfunctions, serial number, warranty status, and disruption caused despite proper usage.',
              '`I request you to arrange an engineer inspection and issue a free replacement or full refund within seven working days.`\n**Close:** `Yours faithfully,`',
            ],
          ],
        },
      ],
    },
    {
      id: 'wr-01-letter-to-editor-models',
      title: '2. Styled CBSE Models: Letters to the Editor (Environmental & Youth Safety)',
      blocks: [
        {
          type: 'writing-sample',
          lang: 'en',
          formatType: 'formal-letter',
          badge: 'Model 1 • Letter to the Editor (Civic & Environment)',
          title: 'Unsegregated E-Waste and Open Plastic Burning Choking Urban Drains',
          prompt:
            'You are Meera Nair, a resident of House No. 42, Sector 14, Gurugram. Discarded electronic gadgets and burnt plastic packaging are clogging stormwater drains in your neighbourhood, worsening monsoon waterlogging and toxic smoke. Write a letter in 100–120 words to the Editor of *The Hindustan Times*, New Delhi, highlighting the hazard and suggesting practical community remedies.',
          wordTarget: '100–120 words',
          marksSplit: 'Format 1 + Organisation 1 + Content 2 + Accuracy 1 = 5 Marks',
          metadataLines: [
            { label: 'Sender', value: 'House No. 42, Sector 14, Gurugram' },
            { label: 'Date', value: '14 November 2026' },
            { label: 'To', value: 'The Editor, The Hindustan Times, New Delhi' },
          ],
          subHeading:
            'Subject: Urgent Need for Decentralised E-Waste Collection and Drain Clearance',
          body:
            'Sir/Madam,\n\n' +
            'Through the columns of your esteemed daily, I wish to draw the attention of civic authorities and citizens to the reckless dumping of electronic waste and open burning of plastic across Sector 14, Gurugram.\n\n' +
            'Discarded chargers, batteries, and single-use wrappers routinely choke roadside stormwater drains, triggering severe waterlogging and foul stagnation after every shower. Worse still, unregulated evening burning releases acrid fumes that aggravate asthma among children and senior citizens while leaching heavy metals into groundwater.\n\n' +
            'The Municipal Corporation must install colour-coded e-waste drop boxes at Resident Welfare Association offices, partner with certified recyclers for monthly doorstep drives, and impose strict fines on open burning. I hope publishing this appeal spurs swift municipal action.',
          footerLines: ['Yours truly,', 'Meera Nair', '(Concerned Resident)'],
          examinerNote:
            'Body sits right at ~114 words across three sharp paragraphs: (1) formal editorial framing, (2) concrete environmental and health harms, and (3) three actionable remedies without asking the Editor to clean the drains personally.',
        },
        {
          type: 'writing-sample',
          lang: 'en',
          formatType: 'formal-letter',
          badge: 'Model 2 • Letter to the Editor (Youth & Digital Safety)',
          title: 'Rising Cyber-Phishing, Deepfake Scams & Digital Fatigue Among Teenagers',
          prompt:
            'You are Rohan Kulkarni of 18, Sahyadri Apartments, Kothrud, Pune. Alarmed by rising phishing links, impersonation scams, and late-night screen exhaustion among school students, write a letter in 100–120 words to the Editor of *The Indian Express*, Pune, urging structured cyber-hygiene education and parental vigilance.',
          wordTarget: '100–120 words',
          marksSplit: 'Format 1 + Organisation 1 + Content 2 + Accuracy 1 = 5 Marks',
          metadataLines: [
            { label: 'Sender', value: '18, Sahyadri Apartments, Kothrud, Pune' },
            { label: 'Date', value: '14 November 2026' },
            { label: 'To', value: 'The Editor, The Indian Express, Pune' },
          ],
          subHeading:
            'Subject: Safeguarding Teenagers Against Cyber-Phishing and Digital Fatigue',
          body:
            'Sir/Madam,\n\n' +
            'Through the columns of your respected newspaper, I wish to voice growing concern over teenage vulnerability to cyber-phishing, manipulated deepfake videos, and chronic screen fatigue.\n\n' +
            'Many adolescents click unverified scholarship or gaming links, inadvertently exposing family banking credentials and personal photographs to extortionists. Simultaneously, compulsive late-night scrolling disrupts sleep cycles, erodes classroom concentration, and fuels avoidable anxiety among board-exam aspirants.\n\n' +
            'Schools should collaborate with local cyber-police cells to host mandatory digital-safety workshops, teach two-factor verification habits, and promote screen-free evening study hours with parental support. I trust your esteemed columns will spark timely awareness among educators, parents, and young netizens alike.',
          footerLines: ['Yours truly,', 'Rohan Kulkarni', '(Class X Student & Peer Mentor)'],
          examinerNote:
            'Notice how every sentence matches the prompt cues—phishing, deepfakes, sleep/focus fatigue, and school–parent–police partnership—within 102 words while closing with `Yours truly,`.',
        },
      ],
    },
    {
      id: 'wr-01-complaint-letter-models',
      title: '3. Styled Complaint Letter Model & Municipal vs Commercial Comparison',
      blocks: [
        {
          type: 'writing-sample',
          lang: 'en',
          formatType: 'formal-letter',
          badge: 'Model 3 • Commercial Defective Product Complaint',
          title: 'Faulty Classroom Smart-Projector Malfunctioning Within Two-Year Warranty',
          prompt:
            'You are Siddharth Menon, Academic Media Coordinator at Kendriya Public School, Kochi. Three months ago, your school purchased an EduBeam Pro-X4 smart-projector from BrightVision Electronics Pvt. Ltd., Ernakulam (Invoice No. EP/2026/4182 dated 18 August 2026). It now shuts down abruptly and fails to project clearly. Write a formal complaint letter in 100–120 words demanding inspection and replacement or refund.',
          wordTarget: '100–120 words',
          marksSplit: 'Format 1 + Organisation 1 + Content 2 + Accuracy 1 = 5 Marks',
          metadataLines: [
            { label: 'Sender', value: 'Academic Media Room, Kendriya Public School, Kochi' },
            { label: 'Date', value: '14 November 2026' },
            {
              label: 'To',
              value:
                'The Customer Relations Manager, BrightVision Electronics Pvt. Ltd., Ernakulam',
            },
          ],
          subHeading:
            'Subject: Complaint Regarding Defective EduBeam Pro-X4 Projector (Invoice No. EP/2026/4182)',
          body:
            'Sir/Madam,\n\n' +
            'I wish to lodge a formal complaint regarding the EduBeam Pro-X4 smart-projector (Serial No. EBX-90412) purchased by our school vide Invoice No. EP/2026/4182 dated 18 August 2026.\n\n' +
            'Although the unit was installed by your technician and remains well within its two-year comprehensive warranty, it has developed persistent faults over the past ten days. The projector overheats and shuts down automatically after fifteen minutes, displays severe colour distortion, and fails to detect HDMI input, disrupting scheduled audio-visual lessons.\n\n' +
            'Kindly depute an authorised service engineer to inspect the unit immediately and arrange a free replacement or full refund within seven working days. Copies of the invoice and warranty card are enclosed.',
          footerLines: ['Yours faithfully,', 'Siddharth Menon', '(Academic Media Coordinator)'],
          examinerNote:
            'Examiners look for five mandatory anchors in a commercial complaint: Invoice/Bill No., Purchase Date, Model/Serial No., specific defect symptoms, and a clear 7-day replacement/refund timeline with `Yours faithfully,`.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Commercial Product Complaint vs. Municipal Civic Complaint — Key Contrast',
          body: 'Do not mix up the proof elements of a commercial complaint with a civic authority complaint. Adapt your middle paragraph and closing demand to match the recipient:',
          bullets: [
            '**Commercial Product Complaint:** Quotes **Invoice/Cash Memo No.**, **Date of Purchase**, **Model/Serial No.**, **Warranty Status**, and demands **free repair, replacement, or refund within 7 working days**.',
            '**Municipal / Civic Complaint** *(e.g., to Municipal Commissioner, Water Board, Traffic Inspector)*: Cites **exact Ward/Sector/Street landmark**, **duration of disruption**, **public safety or disease risk** (e.g., open manhole, erratic water supply, non-functional streetlights), and demands **urgent field-team deployment or fogging within 48–72 hours**.',
            '**Letter to the Editor (Contrast):** Cites the same civic issue publicly, **never** quotes an invoice or demands the Editor send workers—instead requests **publication** to move officials and citizens.',
          ],
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'Formal Writing Model',
          question:
            'How should you adapt the body of a Municipal Complaint Letter (100–120 words) to the Sanitary Inspector regarding irregular garbage collection and choked drains in Shastri Nagar, Agra?',
          answer:
            '**Opening (Para 1):** State the exact grievance directly without newspaper phrasing: *"I wish to bring to your urgent notice the alarming breakdown of sanitation along Lane 4, Shastri Nagar, Agra, over the past two weeks."*\n\n' +
            '**Impact & Evidence (Para 2):** Give observable facts: *"Door-to-door collection vans have skipped our block for twelve days, leaving overflowing bins that attract stray cattle and clog open storm drains. Stagnant water has triggered foul odour and an upsurge in mosquito breeding, putting children and elderly residents at high risk of dengue."*\n\n' +
            '**Redressal Demand (Para 3):** Specify immediate action and deadline: *"Kindly deploy a sanitation squad within 48 hours for thorough waste clearance, drain desilting, and anti-larval fogging, and restore daily collection schedules."* Close with `Yours faithfully,` + Name + `(Resident, Shastri Nagar)`.',
          markingTip:
            'Direct complaint letters earn full 2/2 Content marks when they pair **exact location + duration** with **measurable health/safety impact** and a **clear action timeline**.',
        },
      ],
    },
    {
      id: 'wr-01-traps-checkpoints',
      title: '4. High-Cost Examiner Traps & Quick Checkpoints',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Kabir (Class 10)',
          title: 'Trap 1: Asking the Newspaper Editor to Personally Fix Roads or Drains',
          wrongWork:
            'Sir, our Sector 14 drains are completely choked with plastic. Please send your municipal workers tomorrow to clean the drains and fine the shopkeepers immediately.',
          whyWrong:
            'A newspaper editor is a journalist, not a municipal officer! Commanding the Editor to dispatch workers, install streetlights, or impose fines misunderstands the purpose of a Letter to the Editor and immediately loses Content and Organisation marks.',
          teacherFix:
            'Address the Editor as an amplifier of public voice: *"Through your esteemed columns, I urge the Municipal Corporation to clear the choked drains and enforce anti-dumping fines."* Save direct work orders for Municipal Complaint letters.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Neha (Class 10)',
          title: 'Trap 2: Abbreviated Numeric Dates, Apostrophe in "Your’s" & Wrong Sign-Off',
          wrongWork:
            'Date: 14/11/26\nRespected Sir,\n... [body] ...\nYour\'s faithfully,\nNeha (Editor Letter)',
          whyWrong:
            'Three format deductions in six lines! Numeric dates (`14/11/26`) and `Respected Sir` violate modern CBSE block conventions; `Your\'s` with an apostrophe is a classic grammar error (`Yours` is already possessive); and `Yours faithfully` is misplaced on a Letter to the Editor where CBSE expects `Yours truly,`.',
          teacherFix:
            'Write the expanded date (`14 November 2026`), clean salutation (`Sir/Madam,`), zero apostrophe (`Yours`), and match the close: **`Yours truly,`** for Letters to the Editor and **`Yours faithfully,`** for Official/Commercial Complaints.',
        },
        {
          type: 'checkpoint',
          prompt:
            'While drafting a Letter to the Editor on unsafe pedestrian crossings near school zones, which closing sentence and complimentary close will earn full CBSE marks?',
          options: [
            {
              id: 'a',
              label: '"Please construct a zebra crossing outside our school gate by Monday. Your\'s faithfully,"',
              sublabel: 'Direct command to Editor + apostrophe typo',
            },
            {
              id: 'b',
              label: '"I hope publishing this letter urges traffic authorities to paint zebra crossings and deploy wardens. Yours truly,"',
              sublabel: 'Awareness framing + accurate Editor sign-off',
            },
            {
              id: 'c',
              label: '"Kindly refund the school bus fee and publish this notice in bold. Yours obediently,"',
              sublabel: 'Wrong demand + student-principal close',
            },
            {
              id: 'd',
              label: '"Thanking you in anticipation of your immediate road repair. Yours sincerely,"',
              sublabel: 'Expects Editor to repair road + redundant filler',
            },
          ],
          correctIds: ['b'],
          successMsg:
            'Spot on! You respectfully request publication to move the traffic authorities and sign off cleanly with "Yours truly,".',
          hintMsg:
            'Remember: Editors publish articles to build public pressure—they do not repair roads themselves—and "Yours" never takes an apostrophe.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Which set of details is strictly essential in the Format and Content of a Defective Product Complaint Letter?',
          options: [
            {
              id: 'a',
              label: 'Numeric date (`14/11/26`), "Respected Sir", and a vague note that "the machine stopped working"',
            },
            {
              id: 'b',
              label: 'Expanded date (`14 November 2026`), Invoice No. & Purchase Date, Model/Serial No., exact defect symptoms, and a 7-day replacement/refund demand',
            },
            {
              id: 'c',
              label: 'A request to "publish this defect in your esteemed newspaper" followed by "Yours truly,"',
            },
            {
              id: 'd',
              label: 'An itemised price quotation for 20 future units and an institutional 15% discount clause',
            },
          ],
          correctIds: ['b'],
          successMsg:
            'Correct! Commercial complaints succeed on verifiable proof (Invoice No., Purchase Date, Model, Warranty) plus concrete defect symptoms and a firm deadline.',
          hintMsg:
            'Think like a Customer Relations Manager: what transaction proof and specific malfunction details must appear before you can demand replacement or refund?',
        },
      ],
    },
  ],
};
