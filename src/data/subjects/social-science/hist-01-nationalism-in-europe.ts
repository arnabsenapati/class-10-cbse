import { Subtopic } from '../../../types/curriculum';

export const sstHist01: Subtopic = {
  id: 'sst-hist-01',
  slug: 'rise-of-nationalism-in-europe',
  title: 'Ch 1: The Rise of Nationalism in Europe',
  subtitle:
    'History | 1789 French Revolution, 1804 Napoleonic Code, 1815 Vienna, Romanticism, 1848 Liberals, Germany–Italy–Britain Unification, Allegories & Balkans',
  estimatedMinutes: 45,
  difficulty: 'Core CBSE',
  ncertSection: 'History Chapter 1 — The Rise of Nationalism in Europe',
  learningObjectives: [
    'Decode Frédéric Sorrieu’s 1848 utopian print and Ernst Renan’s definition of a nation as a "daily plebiscite".',
    'List the measures introduced by French revolutionaries to create collective identity and evaluate the Civil Code of 1804.',
    'Explain liberal nationalism (1834 Zollverein), the 1815 Treaty of Vienna (Duke Metternich), and Romanticism (Herder, Karol Kurpinski, Polish language).',
    'Compare the unifications of Germany (Bismarck), Italy (Mazzini–Cavour–Garibaldi), and the "strange case" of Britain.',
    'Decode Marianne and Germania attributes and explain why the Balkans became the explosive powder keg of 1914.',
  ],
  keywords: [
    'Frédéric Sorrieu 1848',
    'Ernst Renan Plebiscite',
    'Civil Code of 1804',
    'Napoleonic Code',
    'Zollverein 1834',
    'Treaty of Vienna 1815',
    'Duke Metternich',
    'Giuseppe Mazzini',
    'Young Italy',
    'Greek War of Independence',
    'Romanticism Herder',
    'Frankfurt Parliament 1848',
    'Otto von Bismarck',
    'Cavour Garibaldi',
    'Act of Union 1707',
    'Marianne Germania',
    'Balkans 1914',
  ],
  sections: [
    {
      id: 'hist-01-french-rev-napoleon',
      title: 'Pillar 1: Sorrieu’s Vision, 1789 French Revolution & Napoleonic Code (1804)',
      blocks: [
        {
          type: 'quick-summary',
          title: '60-Second Era Snapshot: From Dynastic Empires to Nation-States',
          bullets: [
            'Frédéric Sorrieu (1848): French artist prepared a 4-print series ("The Pact Between Nations"). People of Europe and America march in a long train offering homage to the Statue of Liberty (holding the torch of Enlightenment in one hand and the Charter of the Rights of Man in the other).',
            'Symbols in Sorrieu’s Print: Shattered remains of absolutist institutions lie in the foreground; leading the procession are the USA and Switzerland (already nation-states); France arrives with the revolutionary tricolour; Germany follows with the black-red-gold flag (expression of 1848 liberal hopes, though not yet united); Christ, saints and angels gaze from above symbolising fraternity.',
            'Ernst Renan (1882 Sorbonne Lecture — "What is a Nation?"): Argued a nation is NOT formed by common language, race, religion, or territory alone — rather by shared glories in the past, common will in the present, and mutual solidarity ("A nation is a large-scale solidarity; its existence is a daily plebiscite").',
            'First Clear Expression of Nationalism — French Revolution (1789): Sovereign power shifted from the French monarch to a body of French citizens; revolutionaries proclaimed that the people henceforth constituted the nation and shaped its destiny.',
          ],
        },
        {
          type: 'steps',
          title: 'Pillar 2: French Revolution Measures to Create Collective Identity (Frequent 5M Question)',
          items: [
            {
              label: '1. Ideas of la patrie & le citoyen',
              detail:
                'Emphasised the notion of a united community enjoying equal rights under a single constitution (la patrie = the fatherland; le citoyen = the citizen).',
            },
            {
              label: '2. New National Flag & National Assembly',
              detail:
                'A new French tricolour replaced the former royal standard; the Estates General was elected by active citizens and renamed the National Assembly.',
            },
            {
              label: '3. New Hymns, Oaths & Commemoration of Martyrs',
              detail:
                'New hymns were composed, oaths taken, and martyrs commemorated, all in the name of the nation.',
            },
            {
              label: '4. Centralised Administration, Uniform Laws & Language',
              detail:
                'Formulated uniform laws for all citizens; abolished internal customs duties and dues; adopted a uniform system of weights and measures; discouraged regional dialects and promoted French (as spoken and written in Paris) as the common national language.',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Civil Code of 1804 (Napoleonic Code): Positive Reforms vs. Hostile Reactions in Conquered Territories',
          headers: ['Progressive Reforms Exported by Napoleon', 'Why Local Populations Turned Hostile (e.g., Holland, Switzerland, Milan)'],
          rows: [
            [
              'Did away with all privileges based on birth, established equality before the law, and secured the right to property.',
              'Increased taxation levied on conquered regions to fund French wars.',
            ],
            [
              'Simplified administrative divisions, abolished the feudal system, and freed peasants from serfdom and manorial dues.',
              'Strict censorship of the press and political expression.',
            ],
            [
              'Removed guild restrictions in towns and dramatically improved transport and communication systems.',
              'Forced conscription into the French armies required to conquer the rest of Europe — administrative freedom did not go hand in hand with political freedom.',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: '3 Must-Quote NCERT Definitions from Pages 3–4',
          body: 'Use these exact NCERT definitions in 1-mark and 2-mark answers:',
          bullets: [
            'Absolutist: Literally, a government or system of rule that has no restraints on the power exercised; in history, a monarchical government that was centralised, militarised, and repressive.',
            'Utopian: A vision of a society that is so ideal that it is unlikely to actually exist.',
            'Plebiscite: A direct vote by which all the people of a region are asked to accept or reject a proposal.',
          ],
        },
      ],
    },
    {
      id: 'hist-01-liberalism-conservatism',
      title: 'Pillar 3: Liberal Nationalism (Zollverein 1834) vs. 1815 Conservatism & Mazzini',
      blocks: [
        {
          type: 'table',
          caption: 'Dated Chronology Ribbon (1797–1834): Shifting Power in Europe',
          headers: ['Year', 'Turning-Point Event', 'CBSE Board Significance'],
          rows: [
            ['1797', 'Napoleon invades Italy; Napoleonic Wars begin', 'Marks beginning of French expansion across Europe.'],
            ['1804', 'Napoleonic Civil Code promulgated', 'Ended birth privileges & feudalism across French-controlled territories.'],
            ['1815', 'Defeat of Napoleon (Waterloo) & Congress of Vienna', 'Hosted by Austrian Chancellor Duke Metternich; redrew Europe’s map on conservative lines.'],
            ['1821–1832', 'Greek War of Independence → Treaty of Constantinople (1832)', 'Greece recognised as an independent nation against the Ottoman Empire.'],
            ['1830 (July)', 'July Revolution in France & Belgian Independence', 'Overthrew Bourbons; Metternich warned: "When France sneezes, Europe catches cold."'],
            ['1834', 'Formation of Zollverein (Customs Union)', 'Initiated by Prussia & joined by most German states; abolished tariffs & cut 30+ currencies to 2.'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'What Did Liberal Nationalism Stand For? (Political + Economic Dimensions)',
          body: 'Derived from Latin liber ("free"), early 19th-century European liberalism carried distinct political and economic meanings for the new middle classes (industrialists, businessmen, professionals):',
          bullets: [
            'Politically: Stood for freedom for the individual, equality of all before the law, government by consent, end of autocracy and clerical privileges, a constitution, and representative government through parliament.',
            'Political Limitation (Crucial Trap!): Equality before the law did NOT stand for universal suffrage. Revolutionary France only allowed property-owning men to vote; all women and non-propertied men were excluded (except briefly under Jacobins; Napoleon later reduced women to the status of minors).',
            'Economically: Stood for freedom of markets and abolition of state-imposed restrictions on movement of goods and capital. In Napoleon’s 39-state German confederation, a merchant travelling Hamburg to Nuremberg in 1833 faced 11 customs barriers (~5% duty each) and varying elle cloth measurements (e.g., Frankfurt 54.7 cm vs. Mainz 55.1 cm).',
            '1834 Solution — Zollverein: Initiated by Prussia, it abolished tariff barriers and reduced the number of currencies from over 30 to just 2, alongside expanding railways — praised by economist Friedrich List for binding Germans economically into a nation.',
          ],
        },
        {
          type: 'quick-summary',
          title: '1815 Treaty of Vienna (Duke Metternich) & Revolutionary Underground (Giuseppe Mazzini)',
          bullets: [
            'Conservatism Belief: Preserving traditional institutions (monarchy, Church, social hierarchies, property, family) — yet post-1815 conservatives did NOT seek total return to pre-1789 ways; Napoleon’s modernisation could actually strengthen autocratic monarchies.',
            'Key Provisions of 1815 Treaty of Vienna (Britain, Russia, Prussia, Austria): (1) Bourbon dynasty restored in France and France lost territories annexed under Napoleon; (2) Buffer states set up on French boundaries — Kingdom of the Netherlands (incl. Belgium) in the north, Genoa added to Piedmont in the south; (3) Prussia gained new western territories and part of Saxony; Austria got control of Northern Italy; Russia got part of Poland; (4) Crucial exception: German confederation of 39 states set up by Napoleon was left untouched.',
            'Conservative Repression: Autocratic regimes did not tolerate criticism or dissent and imposed censorship laws controlling newspapers, books, plays, and songs reflecting ideas of liberty.',
            'Giuseppe Mazzini (Italian Revolutionary): Member of the secret society Carbonari; exiled at 24 in 1831 for attempting a revolution in Liguria. Founded two underground societies: Young Italy in Marseilles and Young Europe in Berne. Believed God intended nations to be natural units of mankind. Metternich called him "the most dangerous enemy of our social order."',
          ],
        },
      ],
    },
    {
      id: 'hist-01-revolutions-romanticism',
      title: 'Pillar 4: Age of Revolutions (1830–1848), Romanticism & Hunger/Hardship',
      blocks: [
        {
          type: 'steps',
          title: 'Cultural & Economic Forces Reshaping Europe (1830–1848)',
          items: [
            {
              label: 'July 1830 & Greek War of Independence (1821–1832)',
              detail:
                'Liberal revolutionaries overthrew Bourbon kings in July 1830 and installed constitutional monarch Louis Philippe; Brussels broke away from the UK of Netherlands. Meanwhile, Greek nationalists (supported by West European philhellenes and poet Lord Byron, who raised funds and died of fever in 1824) fought the Ottoman Empire, culminating in the Treaty of Constantinople (1832).',
            },
            {
              label: 'Romanticism — Culture, Folk Tradition & Language as Weapons',
              detail:
                'Romantic artists/poets rejected glorification of pure reason and science, focusing instead on emotions, intuition, and mystical feelings to build collective heritage. German philosopher Johann Gottfried Herder argued true German culture lay among the common people (das volk) via folk songs, poetry and dances (volksgeist).',
            },
            {
              label: 'Polish National Identity Kept Alive via Music & Language',
              detail:
                'Though Poland was partitioned at the end of the 18th century (Russia, Prussia, Austria) and no longer existed as an independent territory, Karol Kurpinski celebrated national struggle through operas and music, turning folk dances like polonaise and mazurka into nationalist symbols. Under Russian occupation, Polish was forced out of schools and Russian imposed. After the crushed 1831 armed rebellion, Polish clergy used the Polish language for church gatherings and religious instruction — many priests/bishops were jailed or sent to Siberia, turning Polish into a symbol of anti-Russian struggle.',
            },
            {
              label: '1830s Hunger, Hardship & 1845 Silesian Weavers',
              detail:
                'Rapid population growth outpaced jobs; rural migrants crowded into slums; cheap British machine-made textiles crushed small urban producers; feudal dues + rising food prices triggered widespread pauperism. In 1845, weavers in Silesia revolted against contractors who drastically reduced payments (reported by Wilhelm Wolff).',
            },
            {
              label: '1848 Paris Barricades & 18 May 1848 Frankfurt Parliament (Germany)',
              detail:
                'In Feb 1848, food shortages and unemployment brought Parisians onto the streets; Louis Philippe fled; the National Assembly proclaimed a Republic, granted suffrage to all adult males above 21, and set up National Workshops. In Germany, 831 middle-class deputies convened at St. Paul’s Church, Frankfurt (18 May 1848) and drafted a constitution for a constitutional monarchy; Prussian King Friedrich Wilhelm IV rejected the crown, Junkers and troops disbanded the assembly. Women (who formed associations and newspapers) were denied voting rights and kept merely as observers in the visitors’ gallery.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'What Changed After 1848 Even Though Liberal Revolts Were Suppressed?',
          body: 'Autocratic monarchs of Central and Eastern Europe realised they could not halt cycles of revolution through repression alone. Consequently, serfdom and bonded labour were abolished both in the Habsburg dominions and in Russia, and Habsburg rulers granted greater autonomy to the Hungarians in 1867.',
        },
      ],
    },
    {
      id: 'hist-01-unifications-allegories-balkans',
      title: 'Pillar 5: Unification of Germany, Italy & Britain + Allegories & Balkans (1914)',
      blocks: [
        {
          type: 'visual-diagram',
          diagramId: 'european-unification-lanes',
          title: 'Interactive Pathway Comparator: Germany vs. Italy vs. The Strange Case of Britain',
          caption:
            'Click individual tabs or compare all three side-by-side — a guaranteed 3-mark or 5-mark Board topic.',
        },
        {
          type: 'visual-diagram',
          diagramId: 'germania-and-marianne-symbols',
          title: 'Female Allegories Decoder: Germania (7 NCERT Attributes), Marianne & Bharat Mata',
          caption:
            'Review every symbol-to-meaning pair (especially Sword vs. Olive Branch around Sword).',
        },
        {
          type: 'callout',
          variant: 'law',
          title: 'Why Did the Balkans Become the Most Serious Source of Nationalist Tension After 1871?',
          body: 'CBSE frequently asks a 5-mark question on "How did nationalism aligned with imperialism lead Europe to disaster in 1914 (Balkan conflict)?":',
          bullets: [
            '1. Ethnic & Geographical Powder Keg: Included modern-day Romania, Bulgaria, Albania, Greece, Macedonia, Croatia, Bosnia-Herzegovina, Slovenia, Serbia, and Montenegro — whose inhabitants were broadly known as Slavs.',
            '2. Collapse of the Ottoman Empire: A large part of the Balkans was under Ottoman control; Romantic nationalism combined with Ottoman disintegration made the region highly explosive despite Ottoman modernisation attempts.',
            '3. Breakaway Independence Claims: European subject nationalities broke away one by one, basing their claims for independence on history — arguing they had once been independent before being subjugated by foreign powers.',
            '4. Mutual Jealousy Among Balkan States: As Slavic nationalities struggled to define their identity and borders, Balkan states became fiercely jealous of each other and each hoped to gain more territory at the others’ expense.',
            '5. Big Power Imperial Rivalry → WWI (1914): Russia, Germany, England, and Austro-Hungary were all keen on countering other powers’ hold over the Balkans for trade, colonies, and naval/military might — sparking a series of wars and finally the First World War in 1914.',
          ],
        },
      ],
    },
    {
      id: 'hist-01-sources-and-traps',
      title: 'Pillar 6: NCERT 4M Source Box (Ernst Renan), Student Mistake & Checkpoint',
      blocks: [
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the extract and answer the questions that follow (1 + 1 + 2 = 4 Marks):\n"A nation is the culmination of a long past of endeavours, sacrifice and devotion. A heroic past, great men, glory, that is the social capital upon which one bases a national idea. To have common glories in the past, to have a common will in the present, to have performed great deeds together, to wish to perform still more, these are the essential conditions of being a people... A nation never has any real interest in annexing or holding on to a country against its will. The existence of nations is a good thing, a necessity even. Their existence is a guarantee of liberty, which would be lost if the world had only one law and only one master." — Ernst Renan, 1882\n\nQuestions:\n(i) According to Ernst Renan, what is "social capital" for a national idea? (1M)\n(ii) What would happen if the world had only one law and only one master? (1M)\n(iii) Why does Renan argue that a nation should never annex or hold a country against its will? Explain with two points. (2M)',
          answer:
            '(i) A heroic past, great men, glory, and a long past of endeavours, sacrifice and devotion constitute the social capital upon which a national idea is based.\n(ii) Liberty would be lost if the world had only one law and only one master.\n(iii) Two reasons: (1) A nation is built on a common will in the present and mutual consent ("a daily plebiscite"), not coercion; (2) The existence of independent nations guarantees liberty and diversity of self-determination.',
          markingTip: 'Do NOT simply copy long lines verbatim for part (iii) — frame Renan’s idea of "common will / daily plebiscite" and "guarantee of liberty".',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Kabir',
          title: 'Three Classic History Ch 1 Traps in Board Answers',
          wrongWork:
            '1) "Zollverein was a political treaty signed at Vienna in 1815 to restore monarchy."\n2) "The olive branch around Germania’s sword symbolises readiness to fight."\n3) "The 1848 Frankfurt Parliament granted voting rights to German women."',
          teacherFix:
            '1) Treaty of Vienna (1815, Duke Metternich) restored conservative monarchies; Zollverein (1834, initiated by Prussia) was an ECONOMIC customs union abolishing tariffs & reducing 30+ currencies to 2.\n2) Sword = readiness to fight; Olive branch AROUND the sword = willingness to make peace.\n3) At St Paul’s Church Frankfurt (1848), women were DENIED suffrage rights and admitted only as observers in the visitors’ gallery.',
          whyWrong:
            'Examiners deliberately pair contrasting symbols and 1815 vs. 1834 agreements in Assertion–Reason and match-the-column MCQs.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Which THREE of the following statements about 19th-century European nationalism are historically TRUE according to NCERT?',
          options: [
            {
              id: 'zollverein',
              label: 'Zollverein (1834) reduced German currencies from over 30 to 2 and abolished tariff barriers.',
            },
            {
              id: 'vienna-39',
              label: 'The 1815 Treaty of Vienna left Napoleon’s 39-state German Confederation untouched.',
            },
            {
              id: 'ital-north',
              label: 'In Italy before unification, all 7 Italian states were ruled by Italian princely houses.',
              sublabel: 'Careful — only ONE state was!',
            },
            {
              id: 'garibaldi',
              label: 'Giuseppe Garibaldi led armed volunteers ("Red Shirts") into South Italy in 1860 to drive out Spanish Bourbon rulers.',
            },
          ],
          correctIds: ['zollverein', 'vienna-39', 'garibaldi'],
          multiSelect: true,
          successMsg:
            'Spot on! Only Sardinia-Piedmont was ruled by an Italian princely house (North = Austrian Habsburgs, Centre = Pope, South = Bourbon Kings of Spain).',
          hintMsg:
            'Check the third option: in mid-19th-century Italy, ONLY Sardinia-Piedmont was under an Italian princely house.',
        },
      ],
    },
    {
      id: 'hist-01-board-qa',
      title: 'CBSE Board Corner: Point-Wise 2M, 3M & 5M Answers',
      blocks: [
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'Explain what is meant by the 1848 revolution of the liberals. What were the political, social and economic ideas supported by the liberals?',
          answer:
            '1. Meaning: Parallel to revolts by peasants and workers in 1848, educated middle-class liberals led revolutions across Europe demanding constitutionalism and national unification (e.g., Frankfurt Parliament).\n2. Ideas Supported: Politically — constitutional government, parliamentary democracy, freedom of press & association; Socially — end of autocracy, serfdom and aristocratic privileges (though women’s suffrage was split); Economically — freedom of markets and abolition of state-imposed customs barriers.',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'How did Romanticism and culture play an important role in creating the idea of the nation in Europe? Give three examples.',
          answer:
            '1. Johann Gottfried Herder & Volksgeist: Claimed true German culture was discovered among common people (das volk) through folk songs, poetry, and dances, while Grimm Brothers collected German folktales.\n2. Music in Partitioned Poland: Karol Kurpinski celebrated national struggle through operas and turned folk dances like polonaise and mazurka into nationalist symbols.\n3. Language as Resistance: After Russian occupation forced Russian into Polish schools, Polish clergy deliberately used the Polish language in church gatherings and religious instruction as a weapon of resistance.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Briefly trace the process of German unification (1848–1871).',
          answer:
            '1. Failure of 1848 Liberal Attempt: Middle-class Germans tried to unite German confederation states through the elected Frankfurt Parliament (1848), but were repressed by combined forces of monarchy, military, and large Prussian landowners (Junkers).\n2. Prussian Leadership: Prussia took on leadership of national unification under its Chief Minister Otto von Bismarck, who became the chief architect of this process.\n3. Architect Tools — Army & Bureaucracy: Bismarck carried out unification with the help of the Prussian army and bureaucracy.\n4. Three Wars Over Seven Years: Prussia fought three wars over seven years against Austria, Denmark, and France, ending in decisive Prussian victory and completing unification.\n5. Proclamation at Versailles (18 Jan 1871): Prussian King William I was proclaimed German Emperor in a ceremony held in the Hall of Mirrors at the Palace of Versailles; Prussia’s modernised currency, banking, and legal/judicial systems became the national model.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'In Britain, the formation of the nation-state was not the result of a sudden upheaval or revolution. Validate this statement with five points.',
          answer:
            '1. Primary Ethnic Identities: Prior to the 18th century, there was no British nation; primary identities were ethnic — English, Welsh, Scot, or Irish, each with distinct cultural and political traditions.\n2. Ascendancy of English Parliament (1688): As the English nation grew in wealth and power, the English Parliament seized power from the monarchy in 1688 and became the instrument to forge a nation-state with England at its centre.\n3. Act of Union (1707): Union between England and Scotland formed the "United Kingdom of Great Britain", enabling England to dominate Scotland’s British Parliament; Scottish Highlanders’ Catholic clans faced repression, and their Gaelic language and national dress were forbidden.\n4. Forcible Incorporation of Ireland (1801): English rulers helped Protestants establish dominance over a largely Catholic Ireland; after a failed 1798 revolt led by Wolfe Tone and his United Irishmen, Ireland was forcibly incorporated into the UK in 1801.\n5. Propagation of British Symbols: A new "British nation" was forged through propagation of a dominant English culture, the British flag (Union Jack), the national anthem ("God Save Our Noble King"), and the English language, reducing older nations to subordinate partners.',
        },
      ],
    },
  ],
};
