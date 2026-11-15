import { Subtopic } from '../../../types/curriculum';

export const sstEco01: Subtopic = {
  id: 'sst-eco-01',
  slug: 'development',
  title: 'Ch 1: Development',
  subtitle:
    'Economics | Different & Conflicting Goals, World Bank PCI vs. UNDP HDI, Haryana vs. Kerala Contrast, BMI Numericals & Sustainability',
  estimatedMinutes: 30,
  difficulty: 'Core CBSE',
  ncertSection: 'Understanding Economic Development — Chapter 1',
  learningObjectives: [
    'Illustrate how different persons can have different as well as conflicting developmental goals.',
    'Compare countries using World Bank’s Per Capita Income criterion and explain why averages hide income disparities.',
    'Contrast World Bank WDR (income-only) with UNDP’s Human Development Report / HDI (Health, Education, Income).',
    'Calculate and interpret Per Capita Income, Infant Mortality Rate (IMR), Literacy Rate, Net Attendance Ratio (NAR), and Body Mass Index (BMI).',
    'Explain why sustainability is critical using renewable (groundwater) and non-renewable (crude oil) NCERT data.',
  ],
  keywords: [
    'Development',
    'Conflicting goals',
    'Per Capita Income',
    'World Development Report',
    'UNDP',
    'HDI',
    'Infant Mortality Rate',
    'Net Attendance Ratio',
    'BMI',
    'Public Facilities',
    'Sustainability',
    'Kerala vs Haryana',
  ],
  sections: [
    {
      id: 'eco-01-formulas',
      title: 'Pillar 1: Core Indicators, Formulas & National Comparison Benchmarks',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Exam Glance',
          bullets: [
            'Two Core Principles of Development: (1) Different persons can have different developmental goals; (2) What may be development for one may NOT be development for the other — it may even be destructive (e.g., industrialists wanting more dams vs. displaced tribals wanting small check dams).',
            'Income + Non-Material Goals: People seek more income, but equally seek equal treatment, freedom, security, and respect from others (non-material things often matter more than money — e.g., safe work environment vs. distant high-pay insecure job).',
            'World Bank Criterion (WDR): Uses Per Capita Income (Average Income = Total Country Income ÷ Total Population) to classify countries as Rich/High-income vs. Low-income.',
            'UNDP Human Development Report (HDI): Compares countries on THREE criteria: (1) Educational levels of people, (2) Health status (Life Expectancy at Birth), and (3) Per Capita Income (in PPP USD).',
            'Public Facilities Rule: "Money in your pocket cannot buy all the goods and services that you may need to live well" — pollution-free environment, unadulterated medicines, protection from infectious diseases, and affordable schooling/PDS require collective public provision.',
          ],
        },
        {
          type: 'table',
          caption: 'Must-Memorise Economics Ch 1 Definitions & Formulas',
          headers: ['Indicator / Metric', 'Exact NCERT Formula / Definition', 'CBSE Exam Benchmark'],
          rows: [
            [
              'Per Capita Income (Average Income)',
              'Total Income of the Country ÷ Total Population',
              'Used by World Bank WDR; hides unequal income distribution',
            ],
            [
              'Infant Mortality Rate (IMR)',
              'Number of children that die before age 1 year as a proportion of 1,000 live children born in that particular year',
              'Lower IMR = Better healthcare (Kerala ~6 vs. Haryana ~28 in NCERT comparative table)',
            ],
            [
              'Literacy Rate',
              'Proportion of literate population in the 7-and-above age group',
              'Kerala ~94% vs. Bihar ~62% (NCERT benchmark table)',
            ],
            [
              'Net Attendance Ratio (NAR)',
              'Total number of children of age group 14 and 15 years attending school as a percentage of total number of children in the same age group',
              'Age group strictly 14–15 years (Class 9–10 secondary stage) — frequent 1M MCQ!',
            ],
            [
              'Body Mass Index (BMI)',
              'Weight (in kg) ÷ [Height (in metres)]²',
              '< 18.5 = Undernourished; 18.5–25 = Normal; > 25 = Overweight (not applied to growing children)',
            ],
            [
              'Life Expectancy at Birth',
              'Average expected length of life of a person at the time of birth',
              'Health pillar of UNDP Human Development Index (HDI)',
            ],
          ],
        },
      ],
    },
    {
      id: 'eco-01-contrast',
      title: 'Pillar 2: Paired Case Contrasts (Country A vs. B & Haryana vs. Kerala)',
      blocks: [
        {
          type: 'table',
          caption: 'Contrast 1 — Why Averages Hide Disparities (NCERT 5-Citizen Country Comparison)',
          headers: ['Country', 'Monthly Incomes of 5 Citizens (₹)', 'Average (PCI)', 'Real Conclusion'],
          rows: [
            [
              'Country A',
              '9,500 | 10,500 | 9,800 | 10,000 | 10,200',
              '₹10,000',
              'Equitable distribution — neither very rich nor desperately poor; most citizens prefer living here.',
            ],
            [
              'Country B',
              '500 | 500 | 500 | 500 | 48,000',
              '₹10,000',
              'Identical average, extreme inequality — 4 people extremely poor and 1 ultra-rich.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Contrast 2 — High Income ≠ High Human Development (Haryana vs. Kerala vs. Bihar)',
          headers: ['State', 'Per Capita Income Status', 'IMR / Literacy / Net Attendance', 'Why Kerala Outperforms Despite Lower PCI'],
          rows: [
            [
              'Haryana',
              'Highest PCI among the three states',
              'Higher IMR & lower literacy/NAR than Kerala',
              'Higher average income alone does not automatically deliver clean healthcare or universal secondary schooling.',
            ],
            [
              'Kerala',
              'Lower PCI than Haryana',
              'Lowest IMR, highest Literacy & highest NAR',
              'Adequate provision of basic health & educational public facilities plus well-functioning Public Distribution System (PDS).',
            ],
            [
              'Bihar',
              'Lowest PCI among the three states',
              'Highest IMR & lowest Literacy/NAR',
              'Acute deficit in both income and collective public facilities.',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'Sustainability of Development — Two NCERT Case Proofs',
          body: '"We have not inherited the world from our forefathers — we have borrowed it from our children."',
          bullets: [
            '1. Groundwater Overuse (Renewable Resource): Groundwater is replenished by rain, yet ~300 Indian districts report water-level declines over 4 metres in 20 years and nearly 1/3rd of the country is overusing groundwater (especially agriculturally prosperous Punjab, Western UP & hard-rock Deccan plateau).',
            '2. Exhaustion of Natural Resources (Non-Renewable Resource): Crude oil has a fixed stock that cannot be replenished; global reserves at current extraction rates are estimated to last roughly ~50 years (Middle East ~70 years, USA ~10.5 years), requiring clean-energy transition.',
          ],
        },
      ],
    },
    {
      id: 'eco-01-numericals',
      title: 'Pillar 3: Step-by-Step Numerical Workouts (PCI & BMI)',
      blocks: [
        {
          type: 'steps',
          title: 'Worked Board Numericals (Solve in 30 Seconds)',
          items: [
            {
              label: 'Numerical 1 — Missing Family Member Income (Standard 3M Board Question)',
              detail:
                'Suppose the average income of 4 families is ₹5,000. If incomes of three families are ₹4,000, ₹7,000, and ₹3,000, find the income of the fourth family.',
              example:
                'Total income of 4 families = 4 × ₹5,000 = ₹20,000. Sum of 3 families = 4,000 + 7,000 + 3,000 = ₹14,000. Fourth family = ₹20,000 − ₹14,000 = ₹6,000.',
            },
            {
              label: 'Numerical 2 — Calculating & Interpreting BMI (2M Question)',
              detail:
                'A student weighs 45 kg and is 1.5 m tall. Calculate their BMI and assess nutritional status.',
              example:
                'BMI = 45 ÷ (1.5)² = 45 ÷ 2.25 = 20.0 kg/m². Since 20.0 lies between 18.5 and 25, the person is normally nourished (healthy range).',
            },
          ],
        },
      ],
    },
    {
      id: 'eco-01-traps',
      title: 'Pillar 4: 4-Mark Case Extract & Assertion–Reason Trap Checkpoints',
      blocks: [
        {
          type: 'notebook-mistake',
          studentName: 'Dev',
          title: 'Trap: Mixing World Bank vs. UNDP Indicators & Wrong Units in BMI',
          wrongWork:
            '1) World Bank ranks countries using HDI. 2) BMI = Weight (kg) ÷ Height (cm).',
          teacherFix:
            '1) WORLD BANK uses ONLY Per Capita Income (WDR); UNDP uses HDI (Income + Health/Life Expectancy + Education). 2) Height in BMI MUST be converted to METRES and SQUARED: Weight (kg) ÷ [Height (m)]².',
          whyWrong:
            'Both errors appear in Section A 1-mark MCQs every single board cycle.',
        },
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the extract and answer the questions:\n"Groundwater is an example of renewable resources. These resources are replenished by nature as in the case of crops and plants. However, even these resources may be overused. For example, in the case of groundwater, if we use more than what is being replenished by rain then we would be overusing this resource. Non-renewable resources are those which will get exhausted after a few years of use. We have a fixed stock on earth which cannot be replenished. Consequences of environmental degradation do not respect national or state boundaries; this issue is no longer region or nation specific. Our future is linked together."\n\n(a) Differentiate between renewable and non-renewable resources with one example each. [1M]\n(b) When does overuse occur in a renewable resource like groundwater? [1M]\n(c) Why is sustainability called a global, cross-border issue rather than a local problem? Give two reasons. [2M]',
          answer:
            '(a) Renewable resources are replenished by nature (e.g., groundwater, crops), whereas non-renewable resources have a fixed stock that gets exhausted after use (e.g., crude oil, coal).\n(b) Overuse occurs when extraction exceeds the rate at which the resource is naturally replenished by rainfall.\n(c) (1) Pollution, carbon emissions, and resource depletion cross political borders and alter global climate for all nations; (2) Sustainable development requires collective global action and shared responsibility for future generations.',
          markingTip: 'Link part (c) to the NCERT quote *"Consequences of environmental degradation do not respect national or state boundaries."*',
        },
        {
          type: 'checkpoint',
          prompt:
            'What is the CORRECT age group considered when calculating Net Attendance Ratio (NAR) in NCERT Economics Ch 1?',
          options: [
            { id: 'a', label: '6 to 10 years' },
            { id: 'b', label: '7 years and above' },
            { id: 'c', label: '14 and 15 years' },
            { id: 'd', label: '18 to 22 years' },
          ],
          correctIds: ['c'],
          successMsg: 'Correct! NAR measures school attendance of children aged 14 and 15 years; 7 years and above is for Literacy Rate.',
          hintMsg: '7+ years is Literacy Rate — NAR specifically checks secondary-age adolescents.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Assertion (A): Kerala has a lower Infant Mortality Rate than Haryana despite having lower Per Capita Income.\nReason (R): Kerala has adequate provision of basic health and educational public facilities.',
          options: [
            { id: 'a', label: 'Both A and R are true, and R is the correct explanation of A' },
            { id: 'b', label: 'Both A and R are true, but R is NOT the correct explanation of A' },
            { id: 'c', label: 'A is true, but R is false' },
            { id: 'd', label: 'A is false, but R is true' },
          ],
          correctIds: ['a'],
          successMsg: 'Exact NCERT logic! Collective public facilities (clinics, schools, PDS) outperform raw per capita income alone.',
          hintMsg: 'Ask whether strong public health & schools explain why infant survival is higher in Kerala.',
        },
      ],
    },
    {
      id: 'eco-01-qa',
      title: 'Pillar 5: CBSE Sub-Headed Q&As (2M, 3M & 5M)',
      blocks: [
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'How does the UNDP criterion for measuring development differ from the criterion used by the World Bank? Explain.',
          answer:
            '• **1. World Bank Criterion (Narrow / Income-Only):** World Bank’s World Development Report classifies countries using **Per Capita Income** alone, ignoring health, education, and income distribution.\n• **2. UNDP Criterion (Broader / Human-Centred):** The United Nations Development Programme (UNDP) publishes the Human Development Report using **Human Development Index (HDI)** combining three pillars: (i) **Per Capita Income**, (ii) **Health Status** (Life Expectancy at Birth), and (iii) **Educational Levels** (mean/expected years of schooling).\n• **3. Why UNDP is Better:** It shows whether economic growth is actually improving human well-being and dignity (e.g., Sri Lanka outranking India on HDI despite similar development challenges).',
          markingTip: 'Clearly name **World Development Report (Per Capita Income)** vs. **Human Development Report (Health, Education, Income)**.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            '"Money in your pocket cannot buy all the goods and services that you may need to live well." Justify this statement with five concrete examples of public facilities.',
          answer:
            'Income by itself is an inadequate indicator of material and human well-being because many vital goods require collective **Public Facilities**:\n• **1. Pollution-Free Environment:** Individual wealth cannot buy a pollution-free atmosphere unless one shifts to a cleaner community; public regulation protects everyone’s air and water.\n• **2. Unadulterated Medicines & Food:** Individual money cannot guarantee unadulterated drugs or food without collective state quality enforcement.\n• **3. Protection Against Infectious Diseases:** Money cannot shield a single family from contagious outbreaks unless the whole community is vaccinated and sanitised together.\n• **4. Affordable Education & Security:** Collective provision of schools and neighbourhood security is far cheaper and more equitable than hiring private guards or tutors for every household.\n• **5. Public Distribution System (PDS):** Ration shops in states like Tamil Nadu and Kerala directly improve nutrition and lower Infant Mortality Rates.',
          markingTip: 'All 5 points come directly from NCERT’s *Public Facilities* sub-section.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            '"What may be development for one may not be development for the other." Support with three examples.',
          answer:
            '• **1. Dam Construction:** Industrialists want more dams for cheap electricity, whereas tribal communities and farmers oppose large dams because their lands are submerged and lives disrupted (preferring small check dams).\n• **2. Wage vs. Profit Conflict:** A landless rural labourer seeks higher wages and more workdays, while a prosperous farmer seeks higher support prices and cheap labour.\n• **3. Urban Girl vs. Brother:** An urban girl seeks as much freedom as her brother and wants him to share household chores, which the brother may resent.',
          markingTip: 'Give concrete NCERT stakeholder pairs rather than abstract theory.',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'Why is the issue of sustainability important for development? Give two reasons.',
          answer:
            '• **1. Prevents Exhaustion of Non-Renewable Stocks:** Fixed resources like crude oil and minerals will run out if exploited recklessly, endangering future economic survival.\n• **2. Protects Future Generations’ Inheritance:** Sustainable development ensures present needs are met without destroying groundwater, forests, and environmental quality borrowed from future generations.',
          markingTip: 'Keep under 40–50 words with crisp keywords (*fixed stock*, *future generations*).',
        },
      ],
    },
  ],
};
