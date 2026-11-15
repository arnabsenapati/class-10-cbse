import { Subtopic } from '../../../types/curriculum';

export const sstHist04: Subtopic = {
  id: 'sst-hist-04',
  slug: 'print-culture-and-the-modern-world',
  title: 'Ch 5: Print Culture and the Modern World',
  subtitle:
    'History | China–Japan Accordion Books & Diamond Sutra, Gutenberg 1448, Luther & Menocchio, French Revolution Debate, Goa 1556, Women & Caste Print + Vernacular Press Act 1878',
  estimatedMinutes: 48,
  difficulty: 'Core CBSE',
  ncertSection: 'History Chapter 5 — Print Culture and the Modern World',
  learningObjectives: [
    'Trace the earliest woodblock printing in China (AD 594, civil service exams, Shanghai) and Japan (AD 768–770, Diamond Sutra AD 868, Kitagawa Utamaro’s ukiyo).',
    'Explain Marco Polo’s 1295 transfer, why handwritten vellum manuscripts hit a bottleneck, and how Johann Gutenberg perfected movable metal type by 1448.',
    'Analyse the Print Revolution: oral–reading convergence, Martin Luther (1517) & Protestant Reformation, Menocchio & the 1558 Index, and three arguments linking print to the 1789 French Revolution.',
    'Review 19th-century transformations for children (1857 France press, Grimm Brothers 1812), women novelists, workers’ libraries, and Richard M. Hoe’s cylindrical press.',
    'Trace print’s arrival in India (Goa 1556, Hickey’s Bengal Gazette 1780), 19th-century religious/social debates (Rammohun Roy, Deoband, Rashsundari Debi, Jyotiba Phule, Kashibaba), and censorship (Vernacular Press Act 1878, Tilak’s Kesari).',
  ],
  keywords: [
    'Accordion book',
    'Diamond Sutra AD 868',
    'Kitagawa Utamaro ukiyo',
    'Marco Polo 1295',
    'Vellum',
    'Johann Gutenberg 1448',
    'Martin Luther 1517',
    'Menocchio Inquisition',
    'Index of Prohibited Books 1558',
    'Chapbooks Bibliotheque Bleue',
    'Louise-Sebastien Mercier',
    'Richard M. Hoe',
    'Bengal Gazette Hickey 1780',
    'Sambad Kaumudi 1821',
    'Amar Jiban Rashsundari Debi',
    'Gulamgiri Jyotiba Phule',
    'Chhote Aur Bade Ka Sawal',
    'Vernacular Press Act 1878',
  ],
  sections: [
    {
      id: 'hist-04-east-asia-and-gutenberg',
      title: 'Pillar 1 & 2: East Asia (China, Japan, Korea) → Marco Polo (1295) → Gutenberg (1448)',
      blocks: [
        {
          type: 'quick-summary',
          title: 'Earliest Print Technology in China, Japan & Korea (Pre-Gutenberg World)',
          bullets: [
            'China (AD 594 onwards): Books printed by rubbing paper (invented in China) against the inked surface of woodblocks. Because both sides of thin, porous sheets could not be printed, the traditional Chinese "accordion book" was folded and stitched at the side, copied by skilled calligraphers.',
            'Imperial Civil Service Exams & 17th-Century Urban Bloom: China’s vast bureaucratic state sponsored textbook printing in huge numbers; by the 17th century urban bloom, merchants used print for trade info, reading became leisure (fiction, poetry, plays), rich women began reading and publishing poetry/plays, and by late 19th century Shanghai became the hub of Western mechanical print.',
            'Japan (AD 768–770 & Diamond Sutra AD 868): Buddhist missionaries from China introduced hand-printing around AD 768–770. The oldest Japanese book, the Buddhist Diamond Sutra, was printed in AD 868 (6 sheets of text + woodcut illustrations). By late 18th century Edo (Tokyo), illustrated ukiyo ("pictures of the floating world") led by Kitagawa Utamaro (born 1753) depicted ordinary urban human experiences and later influenced European artists Manet, Monet, and Van Gogh.',
            'Korea Milestone: Mid-13th century Tripitaka Koreana (~80,000 woodblocks, UNESCO Memory of the World 2007) and late-14th century Jikji (among the world’s oldest surviving books printed with movable metal type).',
          ],
        },
        {
          type: 'steps',
          title: 'How Print Reached Europe: From Handwritten Manuscripts to Gutenberg’s 1448 Press',
          items: [
            {
              label: '11th Century & 1295 Marco Polo',
              detail:
                'Chinese paper reached Europe via the Silk Route in the 11th century, enabling manuscripts written by scribes. In 1295, after years in China, Marco Polo returned to Italy bringing woodblock printing knowledge; Italians soon produced woodblock books, and aristocrats still commissioned luxury editions on expensive vellum (parchment made from animal skin).',
            },
            {
              label: 'Three Bottlenecks of Handwritten Manuscripts (Why Mechanical Print Was Needed)',
              detail:
                '(1) Copying was expensive, laborious, and time-consuming; (2) Manuscripts were fragile, awkward to handle, and could not be carried around or read easily; (3) Circulation remained narrow even when booksellers hired 50+ scribes each.',
            },
            {
              label: '1430s–1448: Johann Gutenberg’s Breakthrough (Strasbourg & Mainz, Germany)',
              detail:
                'Growing up on an agricultural estate, Gutenberg knew wine and olive presses; he also mastered stone polishing, goldsmithing, and creating lead moulds for trinkets. He adapted the olive press into the printing press and used moulds to cast metal types for the 26 letters of the Roman alphabet.',
            },
            {
              label: '1448–1550: The Gutenberg Bible & Print Explosion',
              detail:
                'By 1448 Gutenberg perfected his system; his first printed book was the Bible — about 180 copies printed in 3 years (extraordinarily fast then). Printers decorated borders by hand with custom illumination for rich buyers. Between 1450 and 1550, presses spread across Europe, jumping output from 20 million books (late 15th c.) to ~200 million copies in the 16th century.',
            },
          ],
        },
      ],
    },
    {
      id: 'hist-04-print-revolution-reformation-french-rev',
      title: 'Pillar 3: Print Revolution — Reformation (1517), Menocchio & 1789 French Revolution',
      blocks: [
        {
          type: 'callout',
          variant: 'tip',
          title: 'How Did Oral Culture and Reading Culture Merge?',
          body: 'Before print, common people lived in an oral culture (listening to sacred texts, ballads, and folk tales collectively). Because European literacy stayed low until the 20th century, printers kept non-readers hooked by publishing popular ballads and folk tales profusely illustrated with pictures — sung and recited in villages and town taverns. Thus, oral culture entered print, and printed material was orally transmitted.',
        },
        {
          type: 'table',
          caption: 'Religious Upheaval & Censorship Triggered by the Print Revolution (16th–18th Century)',
          headers: ['Personality / Institution', 'Event / Quote', 'Historical Consequence'],
          rows: [
            [
              'Martin Luther (1517, Germany)',
              'Wrote Ninety Five Theses criticising Roman Catholic Church practices & rituals; posted a printed copy on Wittenberg church door.',
              'Reproduced rapidly; sparked division inside the Church and launched the Protestant Reformation. His New Testament translation sold 5,000 copies in weeks. Luther declared: "Printing is the ultimate gift of God and the greatest one."',
            ],
            [
              'Menocchio (16th-c. Italian Miller)',
              'Read locally available books and reinterpreted the Bible’s view of God and Creation in ways considered heretical.',
              'Hauled up twice by the Roman Catholic Inquisition (court for identifying & punishing heretics) and ultimately executed.',
            ],
            [
              'Roman Catholic Church (1558)',
              'Fearful of popular questioning of faith and spreading anti-religious/rebellious ideas.',
              'Imposed strict controls over publishers/booksellers and began maintaining an Index of Prohibited Books from 1558.',
            ],
            [
              'Chapbooks (England) & Bibliothèque Bleue (France)',
              '17th–18th c. Reading Mania (Churches set up village schools → 60–80% literacy in parts of Europe).',
              'England: penny chapbooks carried by travelling chapmen so even the poor bought books. France: Bibliothèque Bleue (low-priced small books on cheap paper with blue covers), plus almanacs, newspapers & Enlightenment science/philosophy (Newton, Paine, Voltaire, Rousseau).',
            ],
          ],
        },
        {
          type: 'steps',
          title: 'Did Print Culture Cause the 1789 French Revolution? (Guaranteed 5-Mark Board Answer)',
          items: [
            {
              label: 'Argument 1 — Popularised Ideas of Enlightenment Thinkers',
              detail:
                'Writings of Voltaire and Jean Jacques Rousseau were read widely, offering critical commentary on tradition, superstition, and despotism; they championed rule of reason and attacked the sacred authority of the Church and despotic state.',
            },
            {
              label: 'Argument 2 — Created a New Culture of Dialogue and Debate',
              detail:
                'All existing values, norms, and institutions were re-evaluated by a reasoning public; out of this debating public sphere emerged new ideas of social revolution (expressed by Louise-Sebastien Mercier: "Tremble, therefore, tyrants of the world! Tremble before the virtual writer!").',
            },
            {
              label: 'Argument 3 — Cartoons & Literature Mocked Royalty (1780s)',
              detail:
                'An outpouring of pamphlets, caricatures, and cartoons contrasted suffering commoners with a monarchy absorbed in sensual pleasures, turning public sentiment hostile against the Crown.',
            },
            {
              label: 'Essential Critical Nuance (Complete 5-Mark Balance)',
              detail:
                'Print did NOT directly dictate what people thought — people read monarchical/Church propaganda alongside Voltaire and Rousseau, accepting some ideas and rejecting others. Yet print opened up the possibility of thinking differently.',
            },
          ],
        },
      ],
    },
    {
      id: 'hist-04-nineteenth-century-readers-and-tech',
      title: 'Pillar 4: 19th-Century Readers (Children, Women, Workers) & Printing Technology Upgrades',
      blocks: [
        {
          type: 'table',
          caption: 'How 19th-Century Mass Literacy & Technological Innovations Transformed Publishing',
          headers: ['Reader Group / Tech Leap', 'Specific NCERT Milestones & Names'],
          rows: [
            [
              'Children',
              'Compulsory late-19th-c. primary education turned children into an important market; dedicated children’s press set up in France (1857); Grimm Brothers in Germany collected peasant folk tales for years and published edited children-friendly versions in 1812 (removing vulgar/unsuitable passages).',
            ],
            [
              'Women',
              'Became both eager readers and major writers; penny magazines & housekeeping manuals targeted women; leading 19th-c. women novelists — Jane Austen, the Brontë sisters, and George Eliot — portrayed women with will, strength of personality, determination, and the power to think.',
            ],
            [
              'Workers',
              'Lending libraries in England (active since 17th c.) educated white-collar workers, artisans, and lower-middle-class readers; shorter workdays from mid-19th c. enabled workers to write political tracts and autobiographies.',
            ],
            [
              'Mechanical Innovations (18th–20th c.)',
              'Late 18th c.: Metal printing presses; Mid-19th c.: Richard M. Hoe (New York) perfected the power-driven cylindrical press (8,000 sheets/hour — vital for newspapers); Late 19th c.: 6-colour offset press; Early 20th c.: electric presses, improved paper feeding, photoelectric colour controls.\nSelling innovations: Serialised novels in periodicals, 1920s Shilling Series, 20th-c. dust cover / book jacket, and 1930s Great Depression cheap paperback editions.',
            ],
          ],
        },
      ],
    },
    {
      id: 'hist-04-india-and-world-of-print',
      title: 'Pillar 5A: India & Print — Manuscripts, Goa (1556), Hickey (1780) & Religious Debates',
      blocks: [
        {
          type: 'steps',
          title: 'From Palm-Leaf Manuscripts to Printing Presses & Religious Polemics in India',
          items: [
            {
              label: 'Pre-Print Manuscripts & Memorisation Schools',
              detail:
                'Handwritten manuscripts in Sanskrit, Arabic, Persian, and vernacular languages were copied on palm leaves or handmade paper. Limitations: highly expensive, fragile, awkward to read (varied scripts) → not used in everyday life. In pre-colonial Bengal village schools, teachers dictated portions from memory so students became literate without ever reading printed texts.',
            },
            {
              label: '1556 Goa → Early South Indian Printing (1579–1713)',
              detail:
                'Printing first arrived in Goa in the mid-16th century (1556) with Portuguese Jesuit missionaries who learnt Konkani (~50 books in Konkani & Kanara printed by 1674). Catholic priests printed the first Tamil book (1579, Cochin) and first Malayalam book (1713); by 1710 Dutch Protestant missionaries had printed 32 Tamil texts.',
            },
            {
              label: '1780: James Augustus Hickey’s Bengal Gazette vs. Warren Hastings',
              detail:
                'Hickey launched the weekly Bengal Gazette ("a commercial paper open to all, but influenced by none") — independent of the English East India Company. He published slave-sale ads AND gossip about senior Company officials, prompting Governor-General Warren Hastings to persecute Hickey and promote officially sanctioned newspapers. Later, Indian newspapers appeared starting with Gangadhar Bhattacharya’s weekly Bengal Gazette.',
            },
            {
              label: 'Early 19th-Century Reform & Orthodoxy Battles in Print',
              detail:
                'Bengal: Raja Rammohun Roy launched Sambad Kaumudi (1821) debating sati, monotheism, and idolatry; Hindu orthodoxy launched Samachar Chandrika to counter him. From 1822: two Persian papers (Jam-i-Jahan Nama, Shamsul Akhbar) and Gujarati Bombay Samachar.',
            },
            {
              label: 'North India Ulama (Deoband 1867) & Vernacular Hindu Texts (1810 onwards)',
              detail:
                'Fearing colonial conversion and interference in Muslim personal laws, North Indian ulama used cheap lithographic presses for Persian/Urdu scripture translations; Deoband Seminary (founded 1867) published thousands of fatwas guiding everyday Muslim conduct. Among Hindus, Tulsidas’s Ramcharitmanas was first printed in Calcutta in 1810, and from the 1880s Naval Kishore Press (Lucknow) & Shri Venkateshwar Press (Bombay) mass-printed vernacular religious books — alongside Raja Ravi Varma’s mythological prints and 1870s social-political cartoons.',
            },
          ],
        },
      ],
    },
    {
      id: 'hist-04-women-poor-and-censorship',
      title: 'Pillar 5B: Women Readers/Writers, Caste & Workers in Print + Vernacular Press Act (1878)',
      blocks: [
        {
          type: 'table',
          caption: 'Key Indian Voices in Print (Books, Authors & Social Movements — Must-Memorise Matching)',
          headers: ['Author / Movement', 'Book / Journal / Year', 'Core Theme / Impact'],
          rows: [
            [
              'Rashsundari Debi (East Bengal)',
              'Amar Jiban (1876)',
              'Secretly learnt to read in her orthodox kitchen; wrote the FIRST full-length autobiography published in Bengali.',
            ],
            [
              'Kailashbashini Debi (1860s Bengal)',
              'Critical essays & books',
              'Exposed how women were imprisoned at home, kept in ignorance, forced into hard domestic labour & treated unjustly.',
            ],
            [
              'Tarabai Shinde & Pandita Ramabai (1880s Maharashtra)',
              'Passionate feminist tracts',
              'Wrote angrily about the miserable lives of upper-caste Hindu women, especially widows. (In Punjab, Ram Chaddha’s Istri Dharm Vichar & Khalsa Tract Society taught conservative obedience).',
            ],
            [
              'Jyotiba Phule (Maharashtra)',
              'Gulamgiri (1871)',
              'Maratha pioneer of anti-caste protest movements exposing the injustices of the caste system; later carried forward by Dr. B.R. Ambedkar (Maharashtra) & Periyar / E.V. Ramaswamy Naicker (Madras).',
            ],
            [
              'Kashibaba & Sudarshan Chakr (Kanpur) + Bangalore Workers',
              'Chhote Aur Bade Ka Sawal (1938) & Sacchi Kavitayan',
              'Kanpur millworker Kashibaba linked caste and class exploitation; Bangalore cotton millworkers set up self-education libraries in the 1930s (like Bombay workers) promoting literacy, temperance & nationalism.',
            ],
            [
              'Colonial Censorship → Vernacular Press Act (1878) & B.G. Tilak',
              'Irish Press Laws model → 1878 Act; Tilak’s Kesari (1907/1908)',
              'Earlier 1835 Bentinck–Macaulay rules restored press freedoms. Post-1857 revolt reversed this: Vernacular Press Act 1878 empowered government to censor vernacular editorials/reports; if a warning against "seditious" content was ignored, the press & machinery were seized. Yet nationalist press grew — B.G. Tilak’s sympathetic Kesari articles on 1907 Punjab revolutionaries led to his 1908 imprisonment and nationwide protests.',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'What Was Battala in Nineteenth-Century Calcutta?',
          body: 'Battala was an entire printing quarter in central Calcutta devoted to producing cheap, popular books — from religious tracts to scandalous stories — profusely illustrated with woodcuts and coloured lithographs. Pedlars carried Battala publications directly to homes so women could read them during leisure hours.',
        },
      ],
    },
    {
      id: 'hist-04-sources-and-board-qa',
      title: 'Pillar 6: NCERT 4M Source Box, Student Mistake Trap, Checkpoint & 2M/3M/5M Answers',
      blocks: [
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the extract and answer the questions (1 + 1 + 2 = 4 Marks):\n"Why, therefore, did the colonial government pass the Vernacular Press Act in 1878? After the revolt of 1857, the attitude to freedom of the press changed. Enraged Englishmen demanded a clampdown on the \'native\' press. As vernacular newspapers became assertively nationalist, the colonial government began debating measures of stringent control. In 1878, the Vernacular Press Act was passed, modelled on the Irish Press Laws. It provided the government with extensive rights to censor reports and editorials in the vernacular press."\n\nQuestions:\n(i) Which law served as the model for the Vernacular Press Act of 1878? (1M)\n(ii) What triggered English demands for clamping down on the "native" press? (1M)\n(iii) Explain the two-step punitive mechanism used against newspapers judged "seditious" under the Act. (2M)',
          answer:
            '(i) The Irish Press Laws served as the model for the Vernacular Press Act of 1878.\n(ii) The Revolt of 1857 and the increasingly assertive nationalist tone of vernacular newspapers triggered English demands for a clampdown.\n(iii) Two-step punitive mechanism: (1) The colonial government kept regular track of vernacular newspapers published across different provinces, and whenever a report was judged as "seditious", the newspaper was issued a warning; (2) If the warning was ignored, the press was liable to be seized and the printing machinery confiscated.',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Rohan',
          title: 'Three Common Mix-Ups in Print Culture Chapter 5',
          wrongWork:
            '1) "Gutenberg invented the world’s very first printed book, the Diamond Sutra."\n2) "James Augustus Hickey started the Bengali newspaper Sambad Kaumudi."\n3) "Tarabai Shinde wrote Amar Jiban in 1876."',
          teacherFix:
            '1) Woodblock hand-printing started in China (AD 594) and Japan; the Buddhist Diamond Sutra (AD 868) is the oldest Japanese woodblock book. Gutenberg (1448, Germany) printed the Bible using movable metal type.\n2) Hickey launched the English weekly Bengal Gazette (1780); Raja Rammohun Roy published Sambad Kaumudi (1821).\n3) Rashsundari Debi wrote Amar Jiban (1876, Bengali); Tarabai Shinde & Pandita Ramabai wrote in Maharashtra (1880s) on upper-caste widows.',
          whyWrong:
            'Book–author–year matching questions appear in almost every CBSE History Set A, B, and C paper.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Identify which of the following statements about Print Culture is FALSE:',
          options: [
            {
              id: 'a',
              label: 'Menocchio was an Italian miller executed by the Roman Catholic Church’s Inquisition for reinterpreting the Bible.',
            },
            {
              id: 'b',
              label: 'The Roman Catholic Church maintained the Index of Prohibited Books starting in 1558.',
            },
            {
              id: 'c',
              label: 'Governor-General Warren Hastings warmly supported James Augustus Hickey’s independent Bengal Gazette.',
              sublabel: 'Did Hastings support or persecute Hickey?',
            },
            {
              id: 'd',
              label: 'Kashibaba wrote Chhote Aur Bade Ka Sawal (1938) linking caste and class exploitation.',
            },
          ],
          correctIds: ['c'],
          multiSelect: false,
          successMsg:
            'Correct! Option C is FALSE: Warren Hastings persecuted Hickey for publishing gossip about senior Company officials and encouraged officially sanctioned newspapers instead.',
          hintMsg:
            'Check how Governor-General Warren Hastings reacted when Hickey criticised senior Company officials.',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'What is meant by "vellum"? Why did aristocratic circles in Europe initially prefer vellum over early printed books?',
          answer:
            '1. Meaning: Vellum is a fine parchment made from the skin of animals.\n2. Reason for Preference: Aristocratic circles and rich monastic libraries sneered at printed books as cheap vulgarities, preferring luxury handwritten editions on expensive vellum to preserve exclusivity and social prestige.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'Why could handwritten manuscripts not satisfy the ever-increasing demand for books in pre-print Europe or pre-colonial India?',
          answer:
            '1. Expensive & Time-Consuming: Copying by hand was slow, laborious, and costly, making books inaccessible to ordinary readers.\n2. Fragile & Awkward to Handle: Manuscripts (like vellum scrolls or palm-leaf bundles) were easily damaged, bulky to carry, and difficult to read due to varied handwritten scripts.\n3. Limited Circulation: Even when booksellers hired dozens of scribes, production could never keep pace with rising urban, university, and merchant demand.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Explain how print culture helped poor people, women, and social reformers challenge caste and gender inequalities in 19th- and early 20th-century India.',
          answer:
            '1. Women’s Secret Literacy & Autobiographies: Despite conservative taboos, Rashsundari Debi learnt to read secretly and wrote Amar Jiban (1876), the first Bengali autobiography; Kailashbashini Debi exposed domestic oppression in Bengal.\n2. Feminist Critique in Western India: In 1880s Maharashtra, Tarabai Shinde and Pandita Ramabai wrote angrily about the miserable conditions of upper-caste Hindu widows.\n3. Women’s Journals & Debate: Early 20th-century Hindi journals edited by women debated education, widow remarriage, and nationalism, while Battala presses in Calcutta brought illustrated leisure reading to women’s doorsteps.\n4. Anti-Caste Protest Literature: Jyotiba Phule’s Gulamgiri (1871) attacked caste injustice, followed in the 20th century by B.R. Ambedkar and E.V. Ramaswamy Naicker (Periyar) whose writings were read nationwide.\n5. Working-Class Voices & Libraries: Kanpur millworker Kashibaba published Chhote Aur Bade Ka Sawal (1938) linking caste and class exploitation, while 1930s Bangalore & Bombay millworkers opened libraries to foster literacy and nationalism.',
        },
      ],
    },
  ],
};
