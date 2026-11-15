import { Subtopic } from '../../../types/curriculum';

export const sstEco03: Subtopic = {
  id: 'sst-eco-03',
  slug: 'money-and-credit',
  title: 'Ch 3: Money and Credit',
  subtitle:
    'Economics | Double Coincidence of Wants, Demand Deposits & Bank Credit Flow, Salim vs. Swapna, Terms of Credit, RBI Supervision & SHGs',
  estimatedMinutes: 35,
  difficulty: 'Core CBSE',
  ncertSection: 'Understanding Economic Development — Chapter 3',
  learningObjectives: [
    'Explain how money eliminates the "double coincidence of wants" and why modern rupee notes/coins are accepted despite zero intrinsic value.',
    'Describe demand deposits, cheques, and how commercial banks mediate between depositors and borrowers (15% cash reserve & interest spread).',
    'Contrast Salim’s positive credit outcome with Swapna’s informal debt trap.',
    'State the four components of Terms of Credit and differentiate Formal (RBI-supervised) from Informal credit sources.',
    'Explain how Self-Help Groups (SHGs) overcome the collateral barrier and empower rural women socially and economically.',
  ],
  keywords: [
    'Double Coincidence of Wants',
    'Reserve Bank of India',
    'Demand Deposits',
    'Cheque',
    '15 percent cash reserve',
    'Salim and Swapna',
    'Debt trap',
    'Collateral',
    'Terms of Credit',
    'Formal vs Informal credit',
    'Self-Help Groups',
    'SHG',
    'Grameen Bank',
  ],
  sections: [
    {
      id: 'eco-03-formulas',
      title: 'Pillar 1: Money as Medium of Exchange, Modern Currency & Terms of Credit',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Exam Glance',
          bullets: [
            'Barter Limitation — Double Coincidence of Wants: Both parties must agree to sell and buy each other’s commodities simultaneously (e.g., shoe manufacturer must find a wheat farmer who also wants shoes). Money acts as an intermediate medium of exchange, removing this requirement.',
            'Modern Currency (Authorised Legal Tender): Paper notes and coins today have NO intrinsic use of their own (unlike grain, cattle, gold/silver coins). In India, the Reserve Bank of India (RBI) issues currency notes on behalf of the Central Government; no other person/organisation may issue currency, and no citizen can legally refuse payment in rupees.',
            'Demand Deposits & Cheques: Bank deposits that can be withdrawn on demand are called Demand Deposits — they share the essential features of money because payments can be made via a Cheque (a paper instructing the bank to pay a specific amount from the drawer’s account to the named person) without using cash.',
            'Terms of Credit (4 Elements): (1) Interest rate, (2) Collateral, (3) Documentation requirement, and (4) Mode of repayment — these vary substantially across formal and informal lenders.',
            'Collateral Definition: An asset that the borrower owns (land, building, vehicle, livestock, bank deposits) and uses as a guarantee to a lender until the loan is repaid; if the borrower defaults, the lender has the right to sell the asset.',
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'How the Reserve Bank of India (RBI) Supervises Formal Banks (Guaranteed 3M/5M)',
          body: 'Unlike moneylenders, formal banks and cooperatives face strict RBI oversight:',
          bullets: [
            '1. Minimum Cash Balance Monitoring: RBI ensures banks actually maintain the required ~15% minimum cash reserve out of total deposits.',
            '2. Equitable Credit Distribution: RBI sees that banks do not lend ONLY to profit-making big businesses and traders, but also give loans to small cultivators, small-scale industries, and small borrowers.',
            '3. Periodic Reporting: Banks must periodically submit data to RBI on how much they are lending, to whom, and at what interest rate.',
          ],
        },
      ],
    },
    {
      id: 'eco-03-visual',
      title: 'Pillar 2: NCERT Visual Models — Bank Mediation Flow & Urban Credit Share Chart',
      blocks: [
        {
          type: 'visual-diagram',
          diagramId: 'bank-loan-mechanism-flow',
          title: 'Loan Activities of Banks: 15% Cash Reserve & Interest Spread Income',
          caption:
            'Memorise how banks earn profit: Interest Charged from Borrowers − Interest Paid to Depositors.',
        },
        {
          type: 'visual-diagram',
          diagramId: 'formal-vs-informal-credit-chart',
          title: 'Formal vs. Informal Loans Across Urban Households (85% vs. 10% Informal Reliance)',
          caption:
            'Most tested NCERT chart in Ch 3: poor urban households take 85% of loans from informal sources, while rich households get 90% from formal banks.',
        },
      ],
    },
    {
      id: 'eco-03-contrast',
      title: 'Pillar 3: Paired Case Contrasts (Salim vs. Swapna & Formal vs. Informal)',
      blocks: [
        {
          type: 'table',
          caption: 'Contrast 1 — Two Faces of Credit (NCERT Case Studies: Salim vs. Swapna)',
          headers: ['Aspect', 'Salim (Shoe Manufacturer — Positive Role)', 'Swapna (Small Farmer — Debt Trap)'],
          rows: [
            [
              'Purpose & Source of Loan',
              'Receives festive order for 3,000 pairs; takes advance cash from large trader + credit from leather supplier',
              'Borrows from village moneylender to cultivate groundnuts on 3 acres, hoping harvest will repay',
            ],
            [
              'Outcome',
              'Delivers on time, pays off credit, and earns a healthy profit — credit made him BETTER OFF than before',
              'Pests hit crop → pesticides fail → crop fails; unable to repay, loan balloons → forced to sell part of her land',
            ],
            [
              'Core Exam Lesson',
              'Credit plays a vital and positive role when returns cover costs and earn surplus',
              'When crop risk meets high-interest informal credit, loan pushes the borrower into a DEBT TRAP (worse off than before)',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Contrast 2 — Formal Sector vs. Informal Sector Credit (Guaranteed 5-Mark Table)',
          headers: ['Basis', 'Formal Sector Loans', 'Informal Sector Loans'],
          rows: [
            [
              'Examples / Sources',
              'Commercial Banks and Cooperatives (e.g., Krishak Cooperative)',
              'Moneylenders, traders, employers, relatives, and friends',
            ],
            [
              'Supervision',
              'Strictly supervised by the Reserve Bank of India (RBI)',
              'NO organisation supervises their lending activities',
            ],
            [
              'Interest Rate & Recovery',
              'Low, fixed, reasonable interest rates; lawful recovery procedures',
              'Very high interest rates (e.g., 3%–5% per month = 36%–60% p.a.); unfair harassment or forced land/produce sale',
            ],
            [
              'Collateral & Accessibility',
              'Requires proper collateral & documentation (barrier for poor households)',
              'Often lends without collateral because they know borrowers personally — trapping them in perpetual debt',
            ],
          ],
        },
      ],
    },
    {
      id: 'eco-03-numericals',
      title: 'Pillar 4: Self-Help Groups (SHGs) Blueprint & Credit Comparison Drill',
      blocks: [
        {
          type: 'steps',
          title: 'How Self-Help Groups (SHGs) Solve Rural Poverty & Collateral Barriers (5-Mark Flow)',
          items: [
            {
              label: '1. Pool Small Regular Savings',
              detail:
                '15–20 members (usually poor rural women from the same neighbourhood) meet regularly and pool small savings of ₹25 to ₹100 or more per member.',
            },
            {
              label: '2. Internal Small Loans Without Collateral',
              detail:
                'Members take small loans from the group’s own savings at a reasonable rate fixed by the group (far cheaper than moneylenders).',
            },
            {
              label: '3. Collateral-Free Bank Loan to the Group',
              detail:
                'If regular in savings for 1–2 years, the SHG becomes eligible for a bank loan sanctioned IN THE NAME OF THE GROUP — overcoming the lack of individual collateral! Members actively ensure timely repayment.',
            },
            {
              label: '4. Productive Self-Employment & Women’s Empowerment',
              detail:
                'Loans fund releasing mortgaged land, working capital (seeds, fertiliser, bamboo, cloth, sewing machines, cattle) AND regular group meetings create a platform to discuss health, nutrition, and domestic violence.',
            },
            {
              label: '5. Global Benchmark — Grameen Bank (Bangladesh)',
              detail:
                'Founded by Nobel Peace laureate Prof. Muhammad Yunus (1970s); reached over 9 million borrowers across 81,600+ villages — almost all women who proved poor women are reliable borrowers.',
            },
          ],
        },
      ],
    },
    {
      id: 'eco-03-traps',
      title: 'Pillar 4B: 4-Mark Case Extract & Assertion–Reason Trap Checkpoints',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Kunal',
          title: 'Trap: Mixing "Demand Deposits" with "Fixed Deposits" & Misstating Who Issues Coins vs. Notes',
          wrongWork:
            '1) Banks hold 85% of deposits as cash reserve. 2) Any commercial bank can print currency notes if authorised.',
          teacherFix:
            '1) Banks keep only ~15% as CASH RESERVE and lend out the major portion (~85%). 2) ONLY the Reserve Bank of India (RBI) issues currency notes on behalf of the Central Government (no private bank or individual can issue currency).',
          whyWrong:
            'Section A MCQs frequently flip the 15% reserve vs. 85% lending split and test RBI’s sole currency monopoly.',
        },
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the extract and answer the questions:\n"Cheap and affordable credit is crucial for the country’s development. Higher cost of borrowing means a larger part of the earnings of the borrowers is used to repay the loan. Hence, borrowers have less income left for themselves. In certain cases, the high interest rate for borrowing can mean that the amount to be repaid is greater than the income of the borrower. This could lead to increasing debt and debt trap. For these reasons, banks and cooperative societies need to lend more."\n\n(a) What happens to a borrower’s disposable earnings when the interest rate is very high? [1M]\n(b) Explain the term "debt trap" in your own words based on the passage. [1M]\n(c) State two ways expanding formal bank and cooperative credit supports national development. [2M]',
          answer:
            '(a) A larger share of the borrower’s earnings goes toward loan repayment, leaving very little income for themselves.\n(b) A debt trap is a situation where high interest causes the repayment burden to exceed the borrower’s income, forcing them to borrow again or sell assets like land, leaving them worse off.\n(c) (1) Farmers and small entrepreneurs can affordably grow crops, set up small industries, and trade; (2) Dependence on exploitative informal moneylenders falls, raising real household incomes across poorer groups.',
          markingTip: 'Link *"cheap and affordable credit"* directly to higher retained income and lower moneylender exploitation.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Why do rural poor households hesitate to approach commercial banks for credit even when bank interest rates are much lower than moneylenders’ rates?',
          options: [
            { id: 'a', label: 'Banks refuse to serve villages under RBI rules' },
            { id: 'b', label: 'Absence of collateral and proper formal documentation' },
            { id: 'c', label: 'Banks charge 5% interest per month on crop loans' },
            { id: 'd', label: 'Moneylenders are supervised strictly by the RBI' },
          ],
          correctIds: ['b'],
          successMsg: 'Exact NCERT answer! Lack of collateral (land/property titles) and paperwork is the #1 barrier excluding poor borrowers from banks.',
          hintMsg: 'Check what commercial banks insist on under "Terms of Credit" that poor landless families do not own.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Assertion (A): Demand deposits share the essential features of money.\nReason (R): The facility of cheques against demand deposits makes it possible to directly settle payments without the use of cash.',
          options: [
            { id: 'a', label: 'Both A and R are true, and R is the correct explanation of A' },
            { id: 'b', label: 'Both A and R are true, but R is NOT the correct explanation of A' },
            { id: 'c', label: 'A is true, but R is false' },
            { id: 'd', label: 'A is false, but R is true' },
          ],
          correctIds: ['a'],
          successMsg: 'Spot on! Because cheque payments settle transactions directly against demand deposits without cash, demand deposits act as money alongside currency.',
          hintMsg: 'Think: why are demand deposits included in modern money? Because cheques replace physical cash.',
        },
      ],
    },
    {
      id: 'eco-03-qa',
      title: 'Pillar 5: CBSE Sub-Headed Q&As (2M, 3M & 5M)',
      blocks: [
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'What are Self-Help Groups (SHGs)? Explain how SHGs help rural poor, especially women, overcome the problem of lack of collateral.',
          answer:
            'A Self-Help Group (SHG) is a small community-based financial collective typically comprising 15–20 rural poor neighbours (mostly women) who meet regularly and pool their savings.\n• **1. Pooled Small Savings:** Members save ₹25 to ₹100 or more per person regularly depending on their capacity.\n• **2. Affordable Internal Loans:** Members borrow small sums from the group itself at interest rates far below what moneylenders charge.\n• **3. Collateral-Free Bank Loans:** After 1–2 years of regular savings, the bank sanctions a loan in the **name of the group without demanding individual collateral**, creating self-employment opportunities.\n• **4. Peer Accountability:** Any non-repayment is followed up seriously by fellow group members, making banks willing to lend to poor women despite zero physical assets.\n• **5. Social Empowerment:** Regular meetings serve as a platform to discuss and act on health, nutrition, and domestic violence.',
          markingTip: 'Underline **15–20 members**, **1–2 years**, **loan in the name of the group (no collateral)**, and **social platform**.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Explain the differences between Formal and Informal sources of credit in India. Why is it necessary to expand formal credit in rural areas?',
          answer:
            '• **1. Institutional Supervision:** Formal credit (banks, cooperatives) is supervised by the **RBI**, ensuring minimum cash reserves and fair rules; informal credit (moneylenders, traders, landlords) has **no supervisory body**.\n• **2. Interest Burden:** Formal loans carry low, regulated interest rates, whereas informal lenders charge exorbitant rates (often 36%–60% annually) that consume borrowers’ earnings.\n• **3. Risk of Debt Trap:** High informal rates can push borrowers like Swapna into selling land when crops fail; formal credit boosts net returns.\n• **4. Why Rural Expansion Is Vital — Equity:** Currently ~85% of poor urban/rural credit reliance falls on informal sources; cheap formal credit frees small farmers, artisans & SHGs from exploitation.\n• **5. National Development:** Affordable credit enables higher agricultural investment, small-scale industry growth, and rural employment.',
          markingTip: 'Always dedicate points 4 & 5 directly to the second half of the prompt (*why expansion is necessary*).',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'How does the Reserve Bank of India (RBI) supervise the functioning of banks? Why is this supervision necessary?',
          answer:
            '• **1. Monitors Cash Reserve:** RBI ensures banks maintain the mandatory minimum cash balance (~15%) out of deposits received.\n• **2. Ensures Inclusive Lending:** RBI verifies that banks extend loans not only to profit-making big businesses and traders, but also to small cultivators, small-scale industries, and small borrowers.\n• **3. Periodic Reporting:** Banks must periodically submit data to RBI on how much they lend, to whom, and at what interest rate — protecting depositors and ensuring equitable growth.',
          markingTip: 'Write all three RBI supervision points verbatim from NCERT.',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'What is meant by "Double Coincidence of Wants"? How does money solve this problem?',
          answer:
            '• **Meaning:** Double coincidence of wants is an essential condition of barter where both parties must agree to sell and buy each other’s commodities simultaneously.\n• **Solution via Money:** Money acts as an intermediate medium of exchange — a shoe seller simply sells shoes for money and uses that money to buy wheat from anyone.',
          markingTip: 'Include a 1-line example (shoes ↔ wheat) for full 2/2 clarity.',
        },
      ],
    },
  ],
};
