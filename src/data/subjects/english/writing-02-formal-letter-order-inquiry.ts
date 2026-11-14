import { Subtopic } from '../../../types/curriculum';

export const englishWriting02LettersB: Subtopic = {
  id: 'eng-wr-02',
  slug: 'formal-letter-placing-order-and-inquiry',
  title: 'Formal Letters II: Placing an Order & Letters of Inquiry',
  subtitle:
    'Master business-grade CBSE formal letters: 5-step Order checklist, Course vs. Tour Inquiry blueprint, 2 Order models (Bulk Order + Damaged/Short-Supply Replacement), 1 Coding/Robotics Inquiry model & trap drills.',
  estimatedMinutes: 30,
  difficulty: 'Core CBSE',
  ncertSection: 'Section B — Writing Skills (Formal Letter 5M)',
  learningObjectives: [
    'Structure a **Placing an Order** letter around all five commercial pillars: Quotation Reference, Itemised Specifications, Institutional Discount, Delivery Deadline, and Payment/Damage Clause.',
    'Draft a crisp **Order Follow-Up / Replacement** letter referencing original Order Number and Delivery Date to claim urgent damaged/short-supplied stock replacement.',
    'Write a structured **Letter of Inquiry** for courses, workshops, or educational tours with specific numbered queries rather than vague single-line requests.',
    'Maintain brisk, courteous commercial English within the **100–120 word** limit while following the left-aligned CBSE block layout (`5 Marks`).',
  ],
  keywords: [
    'placing an order letter class 10',
    'letter of inquiry cbse format',
    'damaged consignment replacement letter',
    'institutional discount order letter',
    'formal business letter code 184',
  ],
  sections: [
    {
      id: 'wr-02-order-letter-blueprint',
      title: '1. Placing an Order Checklist & Letter of Inquiry Blueprint',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Commercial Letter Mastery (Order & Inquiry • 5 Marks)',
          bullets: [
            '**Business Clarity Beats Rhetoric:** Unlike Editor letters, Order and Inquiry letters avoid emotional appeals—examiners reward **structured precision** (exact quantities, model specs, dates, fees, and clear terms).',
            '**5-Part Order Formula:** Never end an Order Letter right after listing items! Include (1) Quotation Ref, (2) Itemised List, (3) 10–15% Institutional Discount, (4) Firm Delivery Deadline, and (5) Payment after inspection + free damage replacement.',
            '**Structured Inquiry Formula:** Always cite how you learnt about the course/tour (e.g., newspaper advertisement or brochure), state your eligibility/group size, and ask **5–6 targeted questions** before requesting an updated prospectus/e-brochure.',
            '**Standard Sign-Off:** Address unknown commercial managers as `Sir/Madam,` and close with `Yours faithfully,` + Full Name + Designation (`Sports Secretary`, `Science Lab Coordinator`, etc.).',
          ],
        },
        {
          type: 'steps',
          title: 'Placing an Order — 5-Step Commercial Checklist',
          items: [
            {
              label: '1. Quotation & Catalogue Reference',
              detail:
                'Open by citing the vendor’s latest quotation number, catalogue code, and date so pricing and stock specifications are legally anchored.',
              example: 'With reference to your quotation No. AP/QTN/2026/88 dated 02 November 2026...',
            },
            {
              label: '2. Itemised Specification List / Grid',
              detail:
                'List every item with exact brand/grade, size or model, and unit count (pieces, pairs, sets, dozens) cleanly aligned—never write vague phrases like "some footballs and rackets".',
              example: '1. Official Match Basketballs (Size 7, Leather) — 12 Nos.',
            },
            {
              label: '3. Institutional / Bulk Discount (10–15%)',
              detail:
                'Explicitly remind the supplier of the agreed educational/bulk rebate and GST tax-invoice inclusion.',
              example: 'Kindly apply the agreed 15% institutional discount on the total bill.',
            },
            {
              label: '4. Delivery Deadline & Packaging Condition',
              detail:
                'Set a clear cut-off date before your school event and specify safe transit packaging.',
              example: 'Ensure insured delivery on or before 25 November 2026.',
            },
            {
              label: '5. Payment Mode & Damage-Replacement Clause',
              detail:
                'Protect the buyer: state that payment (school cheque/NEFT) will be released within 7 days of satisfactory inspection, and defective/short items must be replaced at supplier’s expense.',
              example: 'Damaged or substandard goods shall be returned at your cost.',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Letter of Inquiry Blueprint: Course / Workshop Inquiry vs. Educational Tour / Facility Inquiry',
          headers: [
            'Inquiry Component',
            'Course / Certification Inquiry',
            'Educational Tour / Facility Inquiry',
          ],
          rows: [
            [
              '**1. Reference & Purpose**',
              'Cite newspaper ad/website notice + your current class/qualification and target programme.',
              'Introduce school/institution, student group size (e.g., 45 Class X students + 4 teachers), and tentative travel dates.',
            ],
            [
              '**2. Core Questions (Ask 5–6)**',
              'Batch timings (weekday/weekend), course duration, fee structure & sibling/merit discount, mentor–student ratio, hardware/study kit, recognised certificate.',
              'Day-wise itinerary, transport & AC accommodation grade, meal hygiene & vegetarian options, per-student package tariff, safety/first-aid escort, cancellation refund policy.',
            ],
            [
              '**3. Closing Action**',
              'Request an updated e-brochure, demo-class link, and last date of registration.',
              'Request a formal printed/PDF tariff quotation and group-booking confirmation deadline.',
            ],
          ],
        },
      ],
    },
    {
      id: 'wr-02-order-letter-models',
      title: '2. Styled CBSE Models: Bulk Order & Damaged-Consignment Follow-Up',
      blocks: [
        {
          type: 'writing-sample',
          lang: 'en',
          formatType: 'formal-letter',
          badge: 'Model 4 • Placing an Institutional Bulk Order',
          title: 'Sports Secretary Ordering Annual Sports Meet Equipment with Spec List & Clauses',
          prompt:
            'You are Kabir Verma, Sports Secretary of Vidya Mandir Senior Secondary School, Jaipur. Your school needs sports equipment for its upcoming Annual Sports Meet. Write a letter in 100–120 words to the Sales Manager, Apex Sports Emporium, M.I. Road, Jaipur, placing a formal order based on their recent quotation and stating delivery and payment terms.',
          wordTarget: '100–120 words',
          marksSplit: 'Format 1 + Organisation 1 + Content 2 + Accuracy 1 = 5 Marks',
          metadataLines: [
            { label: 'Sender', value: 'Vidya Mandir Senior Secondary School, Jaipur' },
            { label: 'Date', value: '14 November 2026' },
            { label: 'To', value: 'The Sales Manager, Apex Sports Emporium, M.I. Road, Jaipur' },
          ],
          subHeading:
            'Subject: Order for Sports Equipment for Annual Sports Meet (Ref: AP/QTN/2026/88)',
          body:
            'Sir/Madam,\n\n' +
            'With reference to your quotation No. AP/QTN/2026/88 dated 02 November 2026, our school is pleased to place a bulk order for the following sports items:\n\n' +
            '1. Match Basketballs (Size 7, Genuine Composite) — 12 Nos.\n' +
            '2. Carbon-Graphite Badminton Rackets (Senior) — 16 Nos.\n' +
            '3. Tournament Feather Shuttlecocks (Box of 12) — 20 Boxes\n' +
            '4. Digital Split-Timer Stopwatches — 08 Nos.\n\n' +
            'Kindly apply the agreed 15% institutional discount and deliver the securely packed consignment on or before 25 November 2026. Any damaged or substandard items will be returned at your expense. Payment will be released via school NEFT within seven days of receipt and quality inspection.',
          footerLines: ['Yours faithfully,', 'Kabir Verma', '(Sports Secretary)'],
          examinerNote:
            'Every commercial clause is checked cleanly in ~105 words: Quotation No., exact units/sizes, 15% discount, firm deadline (25 November), damage-return clause, and inspection-linked NEFT payment.',
        },
        {
          type: 'writing-sample',
          lang: 'en',
          formatType: 'formal-letter',
          badge: 'Model 5 • Order Follow-Up / Damaged & Short-Supplied Replacement',
          title: 'Urgent Replacement of Cracked Lab Glassware & Missing Vernier Callipers',
          prompt:
            'You are Drishti Saxena, Science Lab Coordinator at Heritage Valley School, Lucknow. Your school received a consignment against Order No. VM/LAB/2026/19 on 09 November 2026 from Precision Scientific Suppliers, Aminabad, Lucknow, but several items arrived cracked or short-supplied. Write a letter in 100–120 words seeking urgent replacement before Annual Day and Pre-Board practicals.',
          wordTarget: '100–120 words',
          marksSplit: 'Format 1 + Organisation 1 + Content 2 + Accuracy 1 = 5 Marks',
          metadataLines: [
            { label: 'Sender', value: 'Science Department, Heritage Valley School, Lucknow' },
            { label: 'Date', value: '14 November 2026' },
            {
              label: 'To',
              value: 'The Dispatch Manager, Precision Scientific Suppliers, Aminabad, Lucknow',
            },
          ],
          subHeading:
            'Subject: Urgent Replacement of Damaged and Short-Supplied Items (Order No. VM/LAB/2026/19)',
          body:
            'Sir/Madam,\n\n' +
            'This is to bring to your immediate notice discrepancies in the science-lab consignment delivered on 09 November 2026 against our Order No. VM/LAB/2026/19 dated 20 October 2026.\n\n' +
            'Upon unpacking in the presence of our storekeeper, four 250 mL borosilicate beaker sets were found cracked due to inadequate cushioning, and only fourteen digital Vernier callipers were supplied against the twenty billed and ordered.\n\n' +
            'With CBSE Pre-Board practicals and Annual Day STEM exhibits scheduled next week, kindly arrange free replacement of the four damaged beaker sets and dispatch the six missing callipers within five working days. Final bill settlement awaits complete, undamaged delivery.',
          footerLines: ['Yours faithfully,', 'Drishti Saxena', '(Science Lab Coordinator)'],
          examinerNote:
            'Notice the disciplined balance: quotes both original Order No. and actual Delivery Date, gives exact damaged/short counts (4 cracked, 14 vs 20), withholds final payment politely until fulfilment, and sets a 5-day deadline.',
        },
      ],
    },
    {
      id: 'wr-02-inquiry-letter-models',
      title: '3. Styled CBSE Model: Letter of Inquiry (Certification Course)',
      blocks: [
        {
          type: 'writing-sample',
          lang: 'en',
          formatType: 'formal-letter',
          badge: 'Model 6 • Letter of Inquiry (Robotics & AI Certification)',
          title: 'Enquiring About Summer Robotics, Python & Embedded AI Certification Course',
          prompt:
            'You are Ishaan Deshmukh of 24, Shivaji Nagar, Nagpur, a Class X student interested in joining a certified Summer Robotics and Python course advertised by RoboSpark Institute of Technology, Dharampeth, Nagpur. Write a letter of inquiry in 100–120 words asking relevant details regarding schedule, fees, mentorship, and certification.',
          wordTarget: '100–120 words',
          marksSplit: 'Format 1 + Organisation 1 + Content 2 + Accuracy 1 = 5 Marks',
          metadataLines: [
            { label: 'Sender', value: '24, Shivaji Nagar, Nagpur' },
            { label: 'Date', value: '14 November 2026' },
            {
              label: 'To',
              value: 'The Director, RoboSpark Institute of Technology, Dharampeth, Nagpur',
            },
          ],
          subHeading:
            'Subject: Inquiry Regarding Summer Robotics and Python Certification Course',
          body:
            'Sir/Madam,\n\n' +
            'With reference to your advertisement in *The Times of India* dated 10 November 2026, I am a Class X student keen to enrol in your Summer Robotics, Python, and Embedded AI Certification Programme.\n\n' +
            'Before registering, I request clear details on the following points:\n' +
            '1. Course duration and availability of morning or weekend batches\n' +
            '2. Total fee structure, instalment options, and any sibling or merit discount\n' +
            '3. Whether individual microcontroller kits are included in the fee\n' +
            '4. Mentor-to-student ratio, faculty qualifications, and certificate accreditation\n\n' +
            'Kindly email the latest e-brochure, syllabus outline, and registration deadline at your earliest convenience so I may complete admission formalities promptly.',
          footerLines: ['Yours faithfully,', 'Ishaan Deshmukh'],
          examinerNote:
            'Numbered sub-queries inside the middle paragraph make every required content point instantly visible to the CBSE evaluator while keeping total body length tightly around ~104 words.',
        },
      ],
    },
    {
      id: 'wr-02-traps-checkpoints',
      title: '4. High-Cost Examiner Traps & Quick Checkpoints',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Tanvi (Class 10)',
          title: 'Trap 1: Writing an Order Letter Without Quantities, Deadline, or Payment/Damage Terms',
          wrongWork:
            'Dear Sir, Please send some cricket bats, footballs, and TT tables to our school quickly. Thank you.',
          whyWrong:
            'No supplier can process an order without exact quantities/models, quotation reference, delivery cut-off date, or payment and damage-replacement terms. CBSE deducts heavily under both Content (incomplete task) and Organisation (missing business clauses).',
          teacherFix:
            'Always include the 5 commercial anchors: Quotation No./Date + Itemised List with exact unit numbers + 10–15% Institutional Discount + Delivery Deadline + Payment after inspection & return of damaged goods at vendor cost.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Arjun (Class 10)',
          title: 'Trap 2: Asking Vague Single-Line Questions in an Inquiry Letter',
          wrongWork:
            'Sir, I saw your coding course ad and want to join. Please tell me everything about the course and fees as soon as possible.',
          whyWrong:
            '"Tell me everything" shifts the thinking onto the reader and fails CBSE’s Content rubric, which expects 4–5 specific inquiry parameters (duration, batch timings, fee & discounts, faculty/kit, certification, brochure).',
          teacherFix:
            'Introduce yourself + reference the advertisement, then list 4–5 crisp numbered queries covering schedule, total fee/discount, kit inclusion, mentor ratio/certification, and close by requesting an e-brochure.',
        },
        {
          type: 'checkpoint',
          prompt:
            'You are the Library In-charge placing an order for 60 NCERT reference sets and 15 atlas volumes. Which closing paragraph best protects your school under CBSE business-letter standards?',
          options: [
            {
              id: 'a',
              label: '"Send the books fast whenever you are free; we will pay cash to the delivery driver."',
            },
            {
              id: 'b',
              label: '"Kindly apply the 15% institutional discount and deliver the undamaged sets by 28 November 2026; payment via cheque will follow inspection, and defective copies will be returned at your cost."',
            },
            {
              id: 'c',
              label: '"Through your esteemed bookshop, I urge citizens to read more books daily. Yours truly,"',
            },
            {
              id: 'd',
              label: '"Please confirm if your bookstore has morning or weekend batches and sibling discounts."',
            },
          ],
          correctIds: ['b'],
          successMsg:
            'Exactly right! Option (b) covers discount, fixed delivery date, inspection-before-payment, and supplier-borne return of damaged stock.',
          hintMsg:
            'Look for the commercial safeguards every school buyer needs: discount, deadline, inspection-based payment, and damage clause.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Which opening + structure produces the highest score in a Letter of Inquiry for a summer German language certificate course?',
          options: [
            {
              id: 'a',
              label: 'Skipping Subject line and writing a single sentence: "Please share all course details."',
            },
            {
              id: 'b',
              label: 'Citing the advertisement date, stating your Grade/goal, asking 4–5 crisp points (duration, batch timings, fee/discount, faculty/certificate), and requesting an e-brochure.',
            },
            {
              id: 'c',
              label: 'Quoting an Invoice Number and demanding a refund within seven working days.',
            },
            {
              id: 'd',
              label: 'Writing 3 paragraphs praising the beauty of the German language without asking about fees or timings.',
            },
          ],
          correctIds: ['b'],
          successMsg:
            'Spot on! Anchoring to the ad/source and laying out 4–5 crisp inquiry points earns full Content and Organisation marks.',
          hintMsg:
            'Do not confuse an Inquiry Letter with a Complaint or an essay—an inquiry must ask concrete administrative questions.',
        },
      ],
    },
  ],
};
