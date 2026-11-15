import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  HelpCircle,
  RotateCcw,
  ScrollText,
  Shuffle,
  XCircle,
} from 'lucide-react';

interface ChronologyEvent {
  id: string;
  label: string;
  year: string;
  sortKey: number;
}

interface ChronologySet {
  id: string;
  chapter: string;
  title: string;
  mnemonic: string;
  events: ChronologyEvent[]; // stored in arbitrary shuffled order; sorted by sortKey
}

const CHRONOLOGY_SETS: ChronologySet[] = [
  {
    id: 'ch1-early-europe',
    chapter: 'Ch 1: Europe',
    title: 'From French Revolution to Zollverein',
    mnemonic: '1789 Revolution → 1804 Napoleon Code → 1815 Vienna → 1834 Zollverein.',
    events: [
      { id: 'c1-vienna', label: 'Treaty of Vienna hosted by Duke Metternich', year: '1815', sortKey: 1815 },
      { id: 'c1-code', label: 'Napoleonic Civil Code introduced', year: '1804', sortKey: 1804 },
      { id: 'c1-zoll', label: 'Prussia initiates Zollverein customs union', year: '1834', sortKey: 1834 },
      { id: 'c1-frrev', label: 'Outbreak of the French Revolution', year: '1789', sortKey: 1789 },
    ],
  },
  {
    id: 'ch1-revolutions-unification',
    chapter: 'Ch 1: Europe',
    title: '1830s Revolutions to European Nation-States',
    mnemonic: '1832 Greece Free → 1848 Frankfurt Parliament → 1861 United Italy → 1871 German Empire.',
    events: [
      { id: 'c2-italy', label: 'Victor Emmanuel II proclaimed King of united Italy', year: '1861', sortKey: 1861 },
      { id: 'c2-greece', label: 'Treaty of Constantinople recognises independent Greece', year: '1832', sortKey: 1832 },
      { id: 'c2-germany', label: 'Kaiser William I proclaimed German Emperor at Versailles', year: 'Jan 1871', sortKey: 1871 },
      { id: 'c2-frankfurt', label: '831 deputies meet at St Paul’s Church, Frankfurt', year: 'May 1848', sortKey: 1848 },
    ],
  },
  {
    id: 'ch1-britain-balkans',
    chapter: 'Ch 1: Europe',
    title: 'Forging Britain to the Balkan Explosion',
    mnemonic: '1688 Parliament → 1707 Scotland Union → 1801 Ireland → 1914 WWI.',
    events: [
      { id: 'c3-ireland', label: 'Forcible incorporation of Ireland into the UK', year: '1801', sortKey: 1801 },
      { id: 'c3-ww1', label: 'Balkan imperial rivalry triggers First World War', year: '1914', sortKey: 1914 },
      { id: 'c3-1688', label: 'English Parliament seizes power from the monarchy', year: '1688', sortKey: 1688 },
      { id: 'c3-1707', label: 'Act of Union between England and Scotland', year: '1707', sortKey: 1707 },
    ],
  },
  {
    id: 'ch2-early-satyagraha',
    chapter: 'Ch 2: India',
    title: 'Return of Gandhiji to Amritsar Tragedy',
    mnemonic: 'Jan 1915 Return → 1917 Champaran → 1918 Ahmedabad Mills → Apr 1919 Jallianwala.',
    events: [
      { id: 'c4-ahmedabad', label: 'Ahmedabad Cotton Mill Workers Satyagraha', year: '1918', sortKey: 1918 },
      { id: 'c4-jallianwala', label: 'Jallianwala Bagh Massacre under General Dyer', year: '13 Apr 1919', sortKey: 1919.3 },
      { id: 'c4-return', label: 'Mahatma Gandhi returns to India from South Africa', year: 'Jan 1915', sortKey: 1915 },
      { id: 'c4-champaran', label: 'Champaran Indigo Planters Satyagraha in Bihar', year: '1917', sortKey: 1917 },
    ],
  },
  {
    id: 'ch2-ncm-arc',
    chapter: 'Ch 2: India',
    title: 'Non-Cooperation Launch to Suspension',
    mnemonic: 'Sep 1920 Calcutta → Dec 1920 Nagpur → Jan 1921 Launch → Feb 1922 Chauri Chaura.',
    events: [
      { id: 'c5-chauri', label: 'Chauri Chaura violence forces NCM withdrawal', year: 'Feb 1922', sortKey: 1922.2 },
      { id: 'c5-nagpur', label: 'Nagpur Congress Session adopts Non-Cooperation', year: 'Dec 1920', sortKey: 1920.9 },
      { id: 'c5-launch', label: 'Non-Cooperation–Khilafat Movement begins nationwide', year: 'Jan 1921', sortKey: 1921.1 },
      { id: 'c5-calcutta', label: 'Calcutta Special Congress Session backs NCM idea', year: 'Sep 1920', sortKey: 1920.7 },
    ],
  },
  {
    id: 'ch2-cdm-arc',
    chapter: 'Ch 2: India',
    title: 'Road to Civil Disobedience & Poona Pact',
    mnemonic: '1928 Simon Boycott → Dec 1929 Lahore → Apr 1930 Dandi → Sep 1932 Poona Pact.',
    events: [
      { id: 'c6-dandi', label: 'Gandhiji breaks Salt Law at Dandi after 240-mile march', year: '6 Apr 1930', sortKey: 1930.3 },
      { id: 'c6-poona', label: 'Poona Pact signed between Gandhiji & Dr. B.R. Ambedkar', year: 'Sep 1932', sortKey: 1932.7 },
      { id: 'c6-simon', label: 'All-British Simon Commission greeted with "Go Back Simon"', year: '1928', sortKey: 1928 },
      { id: 'c6-lahore', label: 'Lahore Congress formalises demand for Purna Swaraj', year: 'Dec 1929', sortKey: 1929.9 },
    ],
  },
  {
    id: 'ch3-global-premodern',
    chapter: 'Ch 3 (1–1.3): Global World',
    title: 'Pre-Modern Exchanges to European Ascent',
    mnemonic: '3000 BCE Indus → Pre-15th c. China isolation begins → 16th c. Americas Smallpox → Mid-1840s Irish Famine.',
    events: [
      { id: 'c7-famine', label: 'Irish Potato Famine starves hundreds of thousands', year: 'Mid-1840s', sortKey: 1845 },
      { id: 'c7-indus', label: 'Coastal trade links Indus Valley with West Asia', year: '3000 BCE', sortKey: -3000 },
      { id: 'c7-smallpox', label: 'Spanish smallpox accelerates conquest of the Americas', year: 'Mid-1500s', sortKey: 1550 },
      { id: 'c7-china-iso', label: 'China restricts overseas contacts, turning into isolation', year: '15th century', sortKey: 1430 },
    ],
  },
  {
    id: 'ch5-world-print',
    chapter: 'Ch 5: Print Culture',
    title: 'Woodblocks in East Asia to Gutenberg & Luther',
    mnemonic: 'AD 868 Diamond Sutra → 1295 Marco Polo → 1448 Gutenberg Bible → 1517 Martin Luther.',
    events: [
      { id: 'c8-luther', label: 'Martin Luther writes Ninety Five Theses sparking Reformation', year: '1517', sortKey: 1517 },
      { id: 'c8-marco', label: 'Marco Polo brings woodblock knowledge to Italy', year: '1295', sortKey: 1295 },
      { id: 'c8-sutra', label: 'Buddhist Diamond Sutra printed in Japan', year: 'AD 868', sortKey: 868 },
      { id: 'c8-guten', label: 'Johann Gutenberg prints ~180 copies of the Bible', year: '1448', sortKey: 1448 },
    ],
  },
  {
    id: 'ch5-india-early-print',
    chapter: 'Ch 5: Print Culture',
    title: 'Arrival of Print in India to Early Vernacular Press',
    mnemonic: '1556 Goa → 1780 Hickey Gazette → 1810 Ramcharitmanas → 1821 Sambad Kaumudi.',
    events: [
      { id: 'c9-sambad', label: 'Raja Rammohun Roy launches Sambad Kaumudi', year: '1821', sortKey: 1821 },
      { id: 'c9-hickey', label: 'James Augustus Hickey starts weekly Bengal Gazette', year: '1780', sortKey: 1780 },
      { id: 'c9-goa', label: 'Portuguese Jesuits bring first printing press to Goa', year: '1556', sortKey: 1556 },
      { id: 'c9-tulsi', label: 'First printed edition of Ramcharitmanas from Calcutta', year: '1810', sortKey: 1810 },
    ],
  },
  {
    id: 'ch5-india-reform-censorship',
    chapter: 'Ch 5: Print Culture',
    title: 'Social Reform Print & Colonial Clampdown (1871–1938)',
    mnemonic: '1871 Gulamgiri → 1876 Amar Jiban → 1878 Vernacular Press Act → 1938 Kashibaba.',
    events: [
      { id: 'c10-vpa', label: 'British pass Vernacular Press Act (Irish Press Laws model)', year: '1878', sortKey: 1878 },
      { id: 'c10-kashi', label: 'Kanpur millworker Kashibaba publishes Chhote Aur Bade Ka Sawal', year: '1938', sortKey: 1938 },
      { id: 'c10-phule', label: 'Jyotiba Phule writes anti-caste classic Gulamgiri', year: '1871', sortKey: 1871 },
      { id: 'c10-amar', label: 'Rashsundari Debi publishes Bengali autobiography Amar Jiban', year: '1876', sortKey: 1876 },
    ],
  },
];

interface MatchPair {
  id: string;
  personOrWork: string;
  roleOrSignificance: string;
}

interface MatchRound {
  id: string;
  title: string;
  pairs: MatchPair[];
}

const MATCH_ROUNDS: MatchRound[] = [
  {
    id: 'round-1',
    title: 'Round 1: Europe & National Iconography (Ch 1–2)',
    pairs: [
      { id: 'm1', personOrWork: 'Frédéric Sorrieu (1848)', roleOrSignificance: '4-print utopian series showing peoples marching past Statue of Liberty' },
      { id: 'm2', personOrWork: 'Ernst Renan (1882)', roleOrSignificance: 'Defined a nation as large-scale solidarity & a "daily plebiscite"' },
      { id: 'm3', personOrWork: 'Giuseppe Mazzini', roleOrSignificance: 'Founded underground societies Young Italy (Marseilles) & Young Europe (Berne)' },
      { id: 'm4', personOrWork: 'Duke Metternich', roleOrSignificance: 'Austrian Chancellor who hosted the 1815 Congress of Vienna' },
      { id: 'm5', personOrWork: 'Abanindranath Tagore (1905)', roleOrSignificance: 'Painted Swadeshi Bharat Mata as an ascetic, calm, divine & spiritual figure' },
    ],
  },
  {
    id: 'round-2',
    title: 'Round 2: Leaders & Cultural Revival in India (Ch 2)',
    pairs: [
      { id: 'm6', personOrWork: 'Bankim Chandra Chattopadhyay', roleOrSignificance: 'Composed hymn Vande Mataram (1870s), later included in novel Anandamath' },
      { id: 'm7', personOrWork: 'Natesa Sastri (Madras)', roleOrSignificance: 'Published four-volume Tamil collection The Folklore of Southern India' },
      { id: 'm8', personOrWork: 'Baba Ramchandra', roleOrSignificance: 'Ex-Fiji indentured labourer who led Awadh peasants against talukdars & begar' },
      { id: 'm9', personOrWork: 'Alluri Sitaram Raju', roleOrSignificance: 'Led militant guerrilla tribal struggle in Gudem Hills, Andhra Pradesh (executed 1924)' },
      { id: 'm10', personOrWork: 'Dr. B.R. Ambedkar', roleOrSignificance: 'Organised Depressed Classes Association (1930) & signed 1932 Poona Pact' },
    ],
  },
  {
    id: 'round-3',
    title: 'Round 3: World Print Revolution & Colonial Pioneer (Ch 5)',
    pairs: [
      { id: 'm11', personOrWork: 'Kitagawa Utamaro (Edo)', roleOrSignificance: 'Japanese artist famed for ukiyo ("pictures of the floating world") woodblock prints' },
      { id: 'm12', personOrWork: 'Johann Gutenberg (1448)', roleOrSignificance: 'Adapted olive press & lead moulds in Germany to print ~180 copies of the Bible' },
      { id: 'm13', personOrWork: 'Martin Luther (1517)', roleOrSignificance: 'Wrote Ninety Five Theses sparking Protestant Reformation; praised print as God’s ultimate gift' },
      { id: 'm14', personOrWork: 'Menocchio (16th-c. Italy)', roleOrSignificance: 'Miller executed by Catholic Inquisition for reinterpreting biblical creation' },
      { id: 'm15', personOrWork: 'James Augustus Hickey (1780)', roleOrSignificance: 'Edited Bengal Gazette; published Company official gossip & faced Warren Hastings’ ire' },
    ],
  },
  {
    id: 'round-4',
    title: 'Round 4: Indian Print Reformers, Women & Censorship (Ch 5)',
    pairs: [
      { id: 'm16', personOrWork: 'Raja Rammohun Roy (1821)', roleOrSignificance: 'Launched Sambad Kaumudi debating sati & orthodoxy (opposed by Samachar Chandrika)' },
      { id: 'm17', personOrWork: 'Rashsundari Debi (1876)', roleOrSignificance: 'Secretly learnt to read in her kitchen & wrote Amar Jiban, first Bengali autobiography' },
      { id: 'm18', personOrWork: 'Jyotiba Phule (1871)', roleOrSignificance: 'Wrote Gulamgiri attacking caste injustices in Western India' },
      { id: 'm19', personOrWork: 'Kashibaba (1938)', roleOrSignificance: 'Kanpur millworker who linked caste & class exploitation in Chhote Aur Bade Ka Sawal' },
      { id: 'm20', personOrWork: 'Bal Gangadhar Tilak (1907)', roleOrSignificance: 'Imprisoned in 1908 after defending Punjab revolutionaries in his newspaper Kesari' },
    ],
  },
];

interface TreatyCard {
  name: string;
  year: string;
  chapter: string;
  provision: string;
  trap: string;
}

const TREATY_CARDS: TreatyCard[] = [
  {
    name: 'Civil Code (Napoleonic Code)',
    year: '1804',
    chapter: 'Ch 1',
    provision: 'Abolished birth privileges, established equality before law, secured right to property, and ended feudalism & guild curbs.',
    trap: 'In conquered lands, administrative reform was overshadowed by higher taxes, censorship, and forced conscription.',
  },
  {
    name: 'Treaty / Congress of Vienna',
    year: '1815',
    chapter: 'Ch 1',
    provision: 'Britain, Russia, Prussia, and Austria met under Duke Metternich to restore the Bourbon dynasty and draw containment states around France.',
    trap: 'Left Napoleon’s 39-state German Confederation UNTOUCHED.',
  },
  {
    name: 'Treaty of Constantinople',
    year: '1832',
    chapter: 'Ch 1',
    provision: 'Recognised Greece as an independent nation after a decade-long nationalist war against the Ottoman Empire (since 1821).',
    trap: 'Poet Lord Byron supported Greece with funds and died of fever in 1824 before independence.',
  },
  {
    name: 'Zollverein Customs Union',
    year: '1834',
    chapter: 'Ch 1',
    provision: 'Formed at Prussia’s initiative and joined by most German states; abolished tariff barriers and reduced currencies from over 30 to 2.',
    trap: 'Economic union (1834), NOT a military alliance.',
  },
  {
    name: 'Act of Union (England & Scotland)',
    year: '1707',
    chapter: 'Ch 1',
    provision: 'Resulted in formation of the "United Kingdom of Great Britain", enabling English dominance over Scottish Highlanders.',
    trap: 'Scottish Highlanders were forbidden to speak Gaelic or wear national dress.',
  },
  {
    name: 'Inland Emigration Act',
    year: '1859',
    chapter: 'Ch 2',
    provision: 'Barred plantation workers in Assam from leaving tea gardens without permission (rarely granted).',
    trap: 'During NCM 1921, workers broke out believing "Gandhi Raj" would give them land in home villages.',
  },
  {
    name: 'Rowlatt Act',
    year: '1919',
    chapter: 'Ch 2',
    provision: 'Passed hurriedly despite Indian Council opposition; empowered government to repress politics & detain prisoners without trial for 2 years.',
    trap: 'Sparked 6 April 1919 Rowlatt Satyagraha and Martial Law / Jallianwala Bagh (13 April 1919).',
  },
  {
    name: 'Gandhi–Irwin Pact',
    year: '5 March 1931',
    chapter: 'Ch 2',
    provision: 'Gandhiji agreed to call off Civil Disobedience and attend the 2nd Round Table Conference in London; Britain agreed to release political prisoners.',
    trap: 'London talks failed (Dec 1931); Gandhiji relaunched CDM on return.',
  },
  {
    name: 'Poona Pact',
    year: 'September 1932',
    chapter: 'Ch 2',
    provision: 'Compromise between Mahatma Gandhi and Dr. B.R. Ambedkar giving Depressed Classes (SCs) reserved seats in provincial & central councils voted by general electorate.',
    trap: 'Rejected separate Dalit electorates while securing reserved seats.',
  },
  {
    name: 'Index of Prohibited Books',
    year: '1558',
    chapter: 'Ch 5',
    provision: 'Maintained by the Roman Catholic Church alongside Inquisition trials (e.g., Menocchio) to control publishers and suppress heretical ideas.',
    trap: 'Began in 1558, roughly a century after Gutenberg’s Bible (~1448).',
  },
  {
    name: 'Vernacular Press Act',
    year: '1878',
    chapter: 'Ch 5',
    provision: 'Modelled on Irish Press Laws; empowered colonial government to censor vernacular newspapers, issue warnings, and seize presses/machinery if deemed seditious.',
    trap: 'Targeted ONLY vernacular (Indian-language) newspapers after post-1857 nationalist critique.',
  },
  {
    name: 'Irish Potato Famine',
    year: 'Mid-1840s',
    chapter: 'Ch 3 (1.2)',
    provision: 'Severe crop disease destroyed Ireland’s potato harvest, starving hundreds of thousands of poorest peasants dependent on a single crop.',
    trap: 'Potato was NOT native to Ireland — it travelled from the Americas after Columbus.',
  },
];

// Deterministic non-matching permutation of indices [0..4] -> [2, 0, 4, 1, 3]
const RIGHT_SHUFFLE_MAP = [2, 0, 4, 1, 3];

export function SstTimelineAndMatcherLab() {
  const [mode, setMode] = useState<'chronology' | 'matcher' | 'treaties'>('chronology');

  // Mode 1: Chronology Sorter state
  const [setIdx, setSetIdx] = useState(0);
  const [pickedIds, setPickedIds] = useState<string[]>([]);
  const [chronoSubmitted, setChronoSubmitted] = useState(false);
  const [solvedSets, setSolvedSets] = useState<Record<string, boolean>>({});

  // Mode 2: Matcher state
  const [roundIdx, setRoundIdx] = useState(0);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [wrongMatchMsg, setWrongMatchMsg] = useState<string | null>(null);
  const [totalPairsMatched, setTotalPairsMatched] = useState(0);

  // Mode 3: Treaties Drill state
  const [quizHideMode, setQuizHideMode] = useState(false);
  const [revealedCards, setRevealedCards] = useState<Record<string, boolean>>({});

  const activeSet = CHRONOLOGY_SETS[setIdx];
  const expectedOrder = useMemo(
    () => [...activeSet.events].sort((a, b) => a.sortKey - b.sortKey),
    [activeSet]
  );

  const handleToggleEvent = (eventId: string) => {
    if (chronoSubmitted) return;
    setPickedIds((prev) =>
      prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]
    );
  };

  const handleCheckChronology = () => {
    if (pickedIds.length !== 4) return;
    setChronoSubmitted(true);
    const allMatch = pickedIds.every((id, idx) => id === expectedOrder[idx].id);
    if (allMatch) {
      setSolvedSets((prev) => ({ ...prev, [activeSet.id]: true }));
    }
  };

  const handleSelectSet = (idx: number) => {
    setSetIdx(idx);
    setPickedIds([]);
    setChronoSubmitted(false);
  };

  const activeRound = MATCH_ROUNDS[roundIdx];
  const rightColumnItems = useMemo(
    () => RIGHT_SHUFFLE_MAP.map((origIdx) => activeRound.pairs[origIdx]),
    [activeRound]
  );

  const handleRightClick = (rightPairId: string) => {
    if (!selectedLeft || matchedIds.includes(rightPairId)) return;
    if (selectedLeft === rightPairId) {
      const next = [...matchedIds, rightPairId];
      setMatchedIds(next);
      setSelectedLeft(null);
      setWrongMatchMsg(null);
      setTotalPairsMatched((c) => c + 1);
    } else {
      setWrongMatchMsg('Not quite — check the chapter/book clue on both cards and try again!');
    }
  };

  const handleSwitchRound = (idx: number) => {
    setRoundIdx(idx);
    setSelectedLeft(null);
    setMatchedIds([]);
    setWrongMatchMsg(null);
  };

  const chronoSolvedCount = Object.values(solvedSets).filter(Boolean).length;

  return (
    <div className="rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50/60 to-white p-4 sm:p-6 dark:border-rose-900/60 dark:from-slate-900 dark:to-slate-900 space-y-5">
      {/* Header & Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-rose-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-600 text-white">
            <ScrollText className="h-4.5 w-4.5" />
          </span>
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              History Interactive Lab: Chronology Sorter • Author Matcher • Acts Drill
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Built specifically for CBSE Section A chronological ordering, match-the-following &amp; treaty/act MCQs across Ch 1, 2, 3 (1–1.3) &amp; 5.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setMode('chronology')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              mode === 'chronology'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
            }`}
          >
            <Clock className="h-3.5 w-3.5" />
            1. Chronology Sorter ({chronoSolvedCount}/10)
          </button>
          <button
            type="button"
            onClick={() => setMode('matcher')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              mode === 'matcher'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
            }`}
          >
            <Shuffle className="h-3.5 w-3.5" />
            2. Author/Leader Matcher ({totalPairsMatched})
          </button>
          <button
            type="button"
            onClick={() => setMode('treaties')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              mode === 'treaties'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            3. Treaties &amp; Acts (12)
          </button>
        </div>
      </div>

      {/* MODE 1: CHRONOLOGY ORDER SORTER */}
      {mode === 'chronology' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {CHRONOLOGY_SETS.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleSelectSet(idx)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
                    idx === setIdx
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                      : solvedSets[s.id]
                      ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-rose-300 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-300'
                  }`}
                >
                  Set {idx + 1}
                  {solvedSets[s.id] ? ' ✓' : ''}
                </button>
              ))}
            </div>
            <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-[11px] font-extrabold text-rose-900 dark:bg-rose-950 dark:text-rose-300">
              {activeSet.chapter}
            </span>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 dark:border-slate-800 dark:bg-slate-950">
            <div>
              <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Set {setIdx + 1}: {activeSet.title}
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Click the 4 historical events in order from <strong>Earliest (1st)</strong> to <strong>Latest (4th)</strong>. Click an already-numbered card to unpick it.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {activeSet.events.map((ev) => {
                const pickedPosition = pickedIds.indexOf(ev.id);
                const isPicked = pickedPosition !== -1;
                const correctPos = expectedOrder.findIndex((e) => e.id === ev.id);
                const slotCorrect = chronoSubmitted && pickedPosition === correctPos;
                const slotWrong = chronoSubmitted && pickedPosition !== correctPos;

                return (
                  <button
                    key={ev.id}
                    type="button"
                    disabled={chronoSubmitted}
                    onClick={() => handleToggleEvent(ev.id)}
                    className={`rounded-xl border p-3 text-left text-xs transition flex items-start gap-2.5 cursor-pointer disabled:cursor-default ${
                      slotCorrect
                        ? 'border-emerald-500 bg-emerald-50 dark:border-emerald-500 dark:bg-emerald-950/40'
                        : slotWrong
                        ? 'border-rose-500 bg-rose-50 dark:border-rose-500 dark:bg-rose-950/40'
                        : isPicked
                        ? 'border-amber-500 bg-amber-50 dark:border-amber-500 dark:bg-amber-950/30'
                        : 'border-slate-200 bg-slate-50/70 hover:border-rose-300 dark:border-slate-800 dark:bg-slate-900'
                    }`}
                  >
                    <span
                      className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-extrabold ${
                        slotCorrect
                          ? 'bg-emerald-600 text-white'
                          : slotWrong
                          ? 'bg-rose-600 text-white'
                          : isPicked
                          ? 'bg-amber-600 text-white'
                          : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}
                    >
                      {isPicked ? pickedPosition + 1 : '?'}
                    </span>
                    <div className="space-y-1 flex-1">
                      <div className="font-bold text-slate-900 dark:text-white leading-snug">
                        {ev.label}
                      </div>
                      {chronoSubmitted && (
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className="font-bold text-rose-700 dark:text-rose-400">
                            Year: {ev.year}
                          </span>
                          <span className="text-slate-500">
                            Correct Rank: #{correctPos + 1}
                          </span>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled={pickedIds.length !== 4 || chronoSubmitted}
                  onClick={handleCheckChronology}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-rose-600 px-4 py-2 text-xs font-extrabold text-white hover:bg-rose-700 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed transition"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Check Chronology Order
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPickedIds([]);
                    setChronoSubmitted(false);
                  }}
                  className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Reset Set
                </button>
              </div>
              {setIdx < CHRONOLOGY_SETS.length - 1 && (
                <button
                  type="button"
                  onClick={() => handleSelectSet(setIdx + 1)}
                  className="inline-flex items-center gap-1 rounded-xl bg-slate-900 px-3 py-2 text-xs font-bold text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 cursor-pointer"
                >
                  Next Set <ArrowRight className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {chronoSubmitted && (
              <div
                className={`rounded-xl border p-3 text-xs space-y-1 ${
                  pickedIds.every((id, idx) => id === expectedOrder[idx].id)
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-200'
                    : 'border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-200'
                }`}
              >
                <div className="font-extrabold flex items-center gap-1.5">
                  {pickedIds.every((id, idx) => id === expectedOrder[idx].id) ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      100% Correct Sequence!
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4 w-4 text-rose-600" />
                      Correct Sequence Review:
                    </>
                  )}
                </div>
                <p className="font-mono font-bold">
                  Mnemonic: {activeSet.mnemonic}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODE 2: WHO WROTE / FOUNDED / LED IT MATCHER */}
      {mode === 'matcher' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {MATCH_ROUNDS.map((r, idx) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => handleSwitchRound(idx)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
                    idx === roundIdx
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-rose-300 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-300'
                  }`}
                >
                  Round {idx + 1}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleSwitchRound(roundIdx)}
              className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 hover:underline dark:text-rose-400 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset Round
            </button>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">
                {activeRound.title}
              </h5>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                {matchedIds.length} / {activeRound.pairs.length} Matched
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Step 1: Click a <strong>Person / Book (Left)</strong> → Step 2: Click its matching <strong>Achievement / Work (Right)</strong>.
            </p>

            {wrongMatchMsg && (
              <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-bold text-rose-900 dark:border-rose-900/60 dark:bg-rose-950/30 dark:text-rose-200">
                {wrongMatchMsg}
              </div>
            )}

            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-2">
                {activeRound.pairs.map((p) => {
                  const isMatched = matchedIds.includes(p.id);
                  const isSelected = selectedLeft === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      disabled={isMatched}
                      onClick={() => {
                        setSelectedLeft(p.id);
                        setWrongMatchMsg(null);
                      }}
                      className={`w-full rounded-xl border p-3 text-left text-xs font-extrabold transition cursor-pointer disabled:cursor-default ${
                        isMatched
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300'
                          : isSelected
                          ? 'border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-200 dark:border-rose-500 dark:bg-rose-950/40 dark:text-white'
                          : 'border-slate-200 bg-slate-50 text-slate-900 hover:border-rose-300 dark:border-slate-800 dark:bg-slate-900 dark:text-white'
                      }`}
                    >
                      {p.personOrWork} {isMatched ? '✓' : ''}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2">
                {rightColumnItems.map((p) => {
                  const isMatched = matchedIds.includes(p.id);
                  return (
                    <button
                      key={p.id}
                      type="button"
                      disabled={isMatched}
                      onClick={() => handleRightClick(p.id)}
                      className={`w-full rounded-xl border p-3 text-left text-xs transition cursor-pointer disabled:cursor-default ${
                        isMatched
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300'
                          : selectedLeft
                          ? 'border-amber-300 bg-amber-50/40 text-slate-800 hover:border-rose-500 dark:border-amber-800/60 dark:bg-slate-900 dark:text-slate-200'
                          : 'border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                      }`}
                    >
                      {p.roleOrSignificance}
                    </button>
                  );
                })}
              </div>
            </div>

            {matchedIds.length === activeRound.pairs.length && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-950 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-200">
                <span className="inline-flex items-center gap-1.5 font-extrabold">
                  <Award className="h-4 w-4 text-emerald-600" /> Round {roundIdx + 1} Cleared!
                </span>
                {roundIdx < MATCH_ROUNDS.length - 1 && (
                  <button
                    type="button"
                    onClick={() => handleSwitchRound(roundIdx + 1)}
                    className="inline-flex items-center gap-1 rounded-lg bg-emerald-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-800 cursor-pointer"
                  >
                    Next Round ({roundIdx + 2}/4) <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODE 3: TREATIES, ACTS & PACTS FLASH DRILL */}
      {mode === 'treaties' && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Master all 12 Treaties, Acts, Pacts &amp; Events frequently paired in CBSE Chronology and Assertion–Reason MCQs.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuizHideMode((v) => !v);
                setRevealedCards({});
              }}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                quizHideMode
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-900 text-white dark:bg-slate-800'
              }`}
            >
              <HelpCircle className="h-3.5 w-3.5" />
              {quizHideMode ? 'Self-Test Active (Click Cards to Reveal)' : 'Switch to Self-Test Flashcards'}
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TREATY_CARDS.map((card) => {
              const hidden = quizHideMode && !revealedCards[card.name];
              return (
                <button
                  key={card.name}
                  type="button"
                  onClick={() =>
                    quizHideMode &&
                    setRevealedCards((prev) => ({
                      ...prev,
                      [card.name]: !prev[card.name],
                    }))
                  }
                  className={`rounded-xl border border-slate-200 bg-white p-3.5 text-left space-y-1.5 dark:border-slate-800 dark:bg-slate-950 ${
                    quizHideMode ? 'cursor-pointer hover:border-rose-400' : 'cursor-default'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded bg-rose-50 px-2 py-0.5 text-[10px] font-extrabold text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                      {card.chapter}
                    </span>
                    <span className="font-mono text-xs font-extrabold text-slate-800 dark:text-amber-300">
                      {hidden ? 'Year: ???' : card.year}
                    </span>
                  </div>
                  <h6 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    {card.name}
                  </h6>
                  {hidden ? (
                    <p className="text-[11px] font-bold text-amber-700 dark:text-amber-400 pt-1">
                      Recall the year, core provision &amp; exam trap — click card to reveal!
                    </p>
                  ) : (
                    <>
                      <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                        {card.provision}
                      </p>
                      <p className="text-[11px] font-bold text-rose-700 dark:text-rose-400">
                        Trap Alert: {card.trap}
                      </p>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
