import { useState } from 'react';
import { Eye, EyeOff, HelpCircle, CheckCircle2 } from 'lucide-react';
import { DiagramId } from '../../types/curriculum';

export type BiologyDiagramId =
  | 'human-digestive-and-respiratory-atlas'
  | 'xylem-transpiration-vs-phloem-translocation'
  | 'neuron-and-reflex-arc-diagram'
  | 'human-reproductive-and-seed-atlas'
  | 'food-web-and-ozone-depletion-visual';

const BIOLOGY_DIAGRAM_IDS = new Set<string>([
  'human-digestive-and-respiratory-atlas',
  'xylem-transpiration-vs-phloem-translocation',
  'neuron-and-reflex-arc-diagram',
  'human-reproductive-and-seed-atlas',
  'food-web-and-ozone-depletion-visual',
]);

export function isBiologyDiagramId(id: DiagramId): id is BiologyDiagramId {
  return BIOLOGY_DIAGRAM_IDS.has(id);
}

function SelfTestHeader({
  title,
  hideLabels,
  onToggle,
  lettersCount,
  revealedLetters,
  onToggleLetter,
}: {
  title: string;
  hideLabels: boolean;
  onToggle: () => void;
  lettersCount?: number;
  revealedLetters?: Record<string, boolean>;
  onToggleLetter?: (letter: string) => void;
}) {
  const letters = lettersCount
    ? Array.from({ length: lettersCount }, (_, i) => String.fromCharCode(65 + i))
    : [];

  return (
    <div className="no-word-lookup select-none flex flex-wrap items-center justify-between gap-2 rounded-xl border border-teal-200/80 bg-white/90 px-3 py-2 dark:border-teal-900/60 dark:bg-slate-950/90">
      <div className="flex items-center gap-2 text-xs font-extrabold text-teal-800 dark:text-teal-300">
        <HelpCircle className="h-4 w-4 shrink-0" />
        <span>{title}</span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {hideLabels && letters.length > 0 && onToggleLetter && (
          <div className="flex flex-wrap items-center gap-1">
            <span className="text-[10px] font-bold uppercase text-slate-500 mr-0.5">
              Peek:
            </span>
            {letters.map((l) => {
              const isRev = Boolean(revealedLetters?.[l]);
              return (
                <button
                  key={l}
                  type="button"
                  onClick={() => onToggleLetter(l)}
                  className={`h-6 w-6 rounded-md font-mono text-[11px] font-extrabold transition cursor-pointer ${
                    isRev
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-100 text-amber-900 hover:bg-amber-200 dark:bg-amber-950 dark:text-amber-300'
                  }`}
                >
                  {l}
                </button>
              );
            })}
          </div>
        )}
        <button
          type="button"
          onClick={onToggle}
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-extrabold transition cursor-pointer ${
            hideLabels
              ? 'bg-amber-600 text-white hover:bg-amber-700'
              : 'bg-teal-700 text-white hover:bg-teal-800'
          }`}
        >
          {hideLabels ? (
            <>
              <Eye className="h-3.5 w-3.5" /> Exam Self-Test: Reveal Labels
            </>
          ) : (
            <>
              <EyeOff className="h-3.5 w-3.5" /> Exam Self-Test: Hide Labels
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function HumanDigestiveAndRespiratoryAtlas() {
  const [hideLabels, setHideLabels] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [panel, setPanel] = useState<'both' | 'digestive' | 'respiratory'>('both');

  const toggleHide = () => {
    setHideLabels((h) => !h);
    setRevealed({});
  };

  const toggleLetter = (k: string) =>
    setRevealed((prev) => ({ ...prev, [k]: !prev[k] }));

  const lbl = (code: string, text: string) =>
    !hideLabels || revealed[code] ? text : `[ ${code} ]`;

  const digestiveKey = [
    { code: 'A', name: 'Mouth & Salivary Glands', note: 'Salivary amylase: Starch → Maltose' },
    { code: 'B', name: 'Oesophagus', note: 'Peristaltic muscular wave pushes food' },
    { code: 'C', name: 'Stomach', note: 'HCl (acidic pH) + Pepsin (protein) + Mucus' },
    { code: 'D', name: 'Liver & Gall Bladder', note: 'Bile juice (NO enzyme; emulsifies fat)' },
    { code: 'E', name: 'Pancreas', note: 'Trypsin (protein), Lipase (fat), Amylase' },
    { code: 'F', name: 'Small Intestine (Villi)', note: 'Complete digestion + absorption via villi' },
    { code: 'G', name: 'Large Intestine', note: 'Absorbs excess water; Rectum/Anus' },
  ];

  const respKey = [
    { code: 'H', name: 'Nasal Passage', note: 'Fine hairs & mucus filter/warm air' },
    { code: 'I', name: 'Pharynx & Larynx', note: 'Common throat & voice box' },
    { code: 'J', name: 'Trachea (Cartilage Rings)', note: 'C-shaped rings prevent collapse' },
    { code: 'K', name: 'Bronchi & Bronchioles', note: 'Branching air tubes into left/right lungs' },
    { code: 'L', name: 'Alveoli + Capillaries', note: '80 m² exchange surface: O₂ in, CO₂ out' },
    { code: 'M', name: 'Diaphragm', note: 'Flattens on inhalation; domes on exhalation' },
  ];

  return (
    <div className="space-y-3 no-word-lookup select-none">
      <SelfTestHeader
        title="CBSE Diagram Practice: Identify A–M"
        hideLabels={hideLabels}
        onToggle={toggleHide}
        lettersCount={13}
        revealedLetters={revealed}
        onToggleLetter={toggleLetter}
      />

      <div className="flex flex-wrap gap-1.5">
        {[
          { id: 'both' as const, label: 'Both Systems Side-by-Side' },
          { id: 'digestive' as const, label: 'Alimentary Canal Only' },
          { id: 'respiratory' as const, label: 'Respiratory Tract Only' },
        ].map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setPanel(t.id)}
            className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
              panel === t.id
                ? 'bg-teal-700 text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-teal-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={`grid gap-4 ${panel === 'both' ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
        {(panel === 'both' || panel === 'digestive') && (
          <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
            <div className="text-xs font-extrabold text-teal-700 dark:text-teal-400 mb-2">
              (A) Human Alimentary Canal &amp; Digestive Glands
            </div>
            <svg viewBox="0 0 380 330" className="w-full h-auto" aria-label="Human Digestive System">
              {/* Head/Torso silhouette */}
              <path
                d="M120 18 C145 10, 175 18, 178 44 C180 62, 168 72, 166 84 L198 98 C222 110, 232 140, 232 200 L226 305 L82 305 L78 200 C78 140, 88 110, 114 98 L124 84 C112 76, 108 60, 112 42 Z"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              {/* Mouth / Buccal cavity */}
              <ellipse cx="144" cy="48" rx="18" ry="9" fill="#fda4af" stroke="#e11d48" strokeWidth="2" />
              {/* Oesophagus */}
              <path d="M144 57 L144 132" stroke="#fb7185" strokeWidth="9" strokeLinecap="round" />
              <path d="M144 57 L144 132" stroke="#ffe4e6" strokeWidth="4" strokeLinecap="round" />
              {/* Stomach (J-shaped) */}
              <path
                d="M142 132 C164 128, 192 142, 190 166 C188 188, 152 192, 146 176 C142 164, 134 156, 136 142 Z"
                fill="#fdba74"
                stroke="#ea580c"
                strokeWidth="2.2"
              />
              {/* Liver (upper right of stomach, anatomical left-right) */}
              <path
                d="M92 134 C110 120, 138 124, 142 138 C134 154, 102 158, 92 146 Z"
                fill="#b45309"
                stroke="#78350f"
                strokeWidth="2"
              />
              {/* Gall bladder */}
              <ellipse cx="122" cy="153" rx="7" ry="4.5" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
              {/* Pancreas (leaf-shaped below stomach) */}
              <path
                d="M142 184 Q172 178 192 190 Q170 202 142 194 Z"
                fill="#fde047"
                stroke="#ca8a04"
                strokeWidth="1.8"
              />
              {/* Large Intestine frame */}
              <path
                d="M110 264 L106 208 C106 198, 198 198, 200 208 L200 264 C200 278, 156 276, 154 294"
                fill="none"
                stroke="#d97706"
                strokeWidth="13"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.7"
              />
              {/* Small Intestine coiled inside */}
              <path
                d="M124 216 C148 212, 178 216, 178 226 C178 236, 126 232, 126 242 C126 252, 180 248, 178 258 C176 266, 134 264, 114 264"
                fill="none"
                stroke="#ec4899"
                strokeWidth="6.5"
                strokeLinecap="round"
              />

              {/* Leader Lines & Interactive Labels */}
              {/* A: Mouth */}
              <line x1="162" y1="48" x2="232" y2="38" stroke="#0f766e" strokeWidth="1.5" />
              <rect x="232" y="25" width="140" height="24" rx="6" className="fill-teal-50 stroke-teal-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="302" y="40" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-teal-900 dark:fill-teal-300">
                {lbl('A', 'A: Mouth (Amylase)')}
              </text>

              {/* B: Oesophagus */}
              <line x1="149" y1="95" x2="232" y2="85" stroke="#0f766e" strokeWidth="1.5" />
              <rect x="232" y="72" width="140" height="24" rx="6" className="fill-slate-50 stroke-slate-400 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="302" y="87" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-slate-800 dark:fill-slate-200">
                {lbl('B', 'B: Oesophagus (Peristalsis)')}
              </text>

              {/* C: Stomach */}
              <line x1="188" y1="158" x2="232" y2="142" stroke="#ea580c" strokeWidth="1.5" />
              <rect x="232" y="128" width="140" height="26" rx="6" className="fill-orange-50 stroke-orange-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="302" y="144" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-orange-900 dark:fill-orange-300">
                {lbl('C', 'C: Stomach (HCl+Pepsin)')}
              </text>

              {/* D: Liver + Gall Bladder */}
              <line x1="94" y1="140" x2="68" y2="132" stroke="#92400e" strokeWidth="1.5" />
              <rect x="4" y="114" width="84" height="34" rx="6" className="fill-amber-50 stroke-amber-600 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="46" y="129" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-amber-900 dark:fill-amber-300">
                {lbl('D', 'D: Liver')}
              </text>
              <text x="46" y="141" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-amber-800 dark:fill-amber-400">
                {!hideLabels || revealed['D'] ? '(Bile: No enzyme)' : 'Gall bladder'}
              </text>

              {/* E: Pancreas */}
              <line x1="192" y1="190" x2="232" y2="190" stroke="#ca8a04" strokeWidth="1.5" />
              <rect x="232" y="176" width="140" height="26" rx="6" className="fill-yellow-50 stroke-yellow-600 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="302" y="192" textAnchor="middle" fontSize="9.2" fontWeight="800" className="fill-yellow-900 dark:fill-yellow-300">
                {lbl('E', 'E: Pancreas (Tryp/Lipase)')}
              </text>

              {/* F: Small Intestine */}
              <line x1="178" y1="242" x2="232" y2="242" stroke="#db2777" strokeWidth="1.5" />
              <rect x="232" y="228" width="140" height="26" rx="6" className="fill-pink-50 stroke-pink-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="302" y="244" textAnchor="middle" fontSize="9.2" fontWeight="800" className="fill-pink-900 dark:fill-pink-300">
                {lbl('F', 'F: Small Intestine (Villi)')}
              </text>

              {/* G: Large Intestine */}
              <line x1="106" y1="250" x2="78" y2="258" stroke="#b45309" strokeWidth="1.5" />
              <rect x="4" y="245" width="84" height="26" rx="6" className="fill-amber-50 stroke-amber-700 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="46" y="261" textAnchor="middle" fontSize="8.8" fontWeight="800" className="fill-amber-900 dark:fill-amber-300">
                {lbl('G', 'G: Large Intestine')}
              </text>
            </svg>
          </div>
        )}

        {(panel === 'both' || panel === 'respiratory') && (
          <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
            <div className="text-xs font-extrabold text-sky-700 dark:text-sky-400 mb-2">
              (B) Human Respiratory Tract &amp; Alveolar Exchange
            </div>
            <svg viewBox="0 0 380 330" className="w-full h-auto" aria-label="Human Respiratory System">
              {/* Nasal + Pharynx + Larynx */}
              <path d="M125 32 Q145 28 152 46 L152 72" fill="none" stroke="#0284c7" strokeWidth="10" strokeLinecap="round" />
              <rect x="142" y="64" width="20" height="16" rx="4" fill="#7dd3fc" stroke="#0369a1" strokeWidth="1.8" />
              {/* Trachea with C-shaped Cartilage Rings */}
              <rect x="145" y="82" width="14" height="58" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.8" />
              {[90, 99, 108, 117, 126, 134].map((y) => (
                <path key={y} d={`M143 ${y} Q152 ${y + 3} 161 ${y}`} fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" />
              ))}

              {/* Left & Right Lungs */}
              <path
                d="M138 128 C98 134, 72 182, 74 236 C76 254, 108 260, 140 248 Z"
                fill="#fecdd3"
                stroke="#e11d48"
                strokeWidth="2.2"
              />
              <path
                d="M166 128 C206 134, 232 182, 230 236 C228 254, 196 260, 164 248 Z"
                fill="#fecdd3"
                stroke="#e11d48"
                strokeWidth="2.2"
              />

              {/* Bronchi & Bronchioles */}
              <path d="M152 140 L122 170 L98 205 M122 170 L126 218" fill="none" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
              <path d="M152 140 L182 170 L206 205 M182 170 L178 218" fill="none" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />

              {/* Alveoli cluster in right lung */}
              <circle cx="206" cy="208" r="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />
              <circle cx="212" cy="216" r="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />
              <circle cx="200" cy="217" r="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />

              {/* Diaphragm */}
              <path d="M74 264 Q152 246 230 264" fill="none" stroke="#b91c1c" strokeWidth="6" strokeLinecap="round" />

              {/* Zoomed Alveolus + Capillary Inset */}
              <rect x="242" y="198" width="132" height="106" rx="12" className="fill-sky-50/70 stroke-sky-400 dark:fill-slate-900" strokeWidth="1.4" />
              <text x="308" y="213" textAnchor="middle" fontSize="8.8" fontWeight="800" className="fill-sky-900 dark:fill-sky-300">
                Alveolus Zoom
              </text>
              <circle cx="294" cy="246" r="21" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
              <path d="M254 276 Q294 268 342 276" fill="none" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
              <path d="M290 250 L290 268" stroke="#059669" strokeWidth="2" />
              <polygon points="290,271 286,264 294,264" fill="#059669" />
              <path d="M304 270 L304 252" stroke="#dc2626" strokeWidth="2" />
              <polygon points="304,249 300,256 308,256" fill="#dc2626" />
              <text x="275" y="244" fontSize="8.5" fontWeight="800" fill="#047857">O₂ ↓</text>
              <text x="310" y="256" fontSize="8.5" fontWeight="800" fill="#dc2626">CO₂ ↑</text>
              <text x="308" y="294" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-slate-600 dark:fill-slate-300">
                {lbl('L', 'L: Alveoli + Capillary')}
              </text>

              {/* Labels H..M */}
              <line x1="152" y1="36" x2="235" y2="36" stroke="#0284c7" strokeWidth="1.5" />
              <rect x="235" y="24" width="138" height="23" rx="6" className="fill-sky-50 stroke-sky-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="304" y="38" textAnchor="middle" fontSize="9.2" fontWeight="800" className="fill-sky-900 dark:fill-sky-300">
                {lbl('H', 'H: Nasal Passage')}
              </text>

              <line x1="162" y1="72" x2="235" y2="72" stroke="#0284c7" strokeWidth="1.5" />
              <rect x="235" y="60" width="138" height="23" rx="6" className="fill-sky-50 stroke-sky-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="304" y="74" textAnchor="middle" fontSize="9.2" fontWeight="800" className="fill-sky-900 dark:fill-sky-300">
                {lbl('I', 'I: Pharynx & Larynx')}
              </text>

              <line x1="160" y1="110" x2="235" y2="110" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="235" y="96" width="138" height="26" rx="6" className="fill-amber-50 stroke-amber-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="304" y="112" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-amber-900 dark:fill-amber-300">
                {lbl('J', 'J: Trachea (Cartilage)')}
              </text>

              <line x1="194" y1="162" x2="235" y2="152" stroke="#0284c7" strokeWidth="1.5" />
              <rect x="235" y="138" width="138" height="25" rx="6" className="fill-sky-50 stroke-sky-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="304" y="154" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-sky-900 dark:fill-sky-300">
                {lbl('K', 'K: Bronchi / Bronchioles')}
              </text>

              <line x1="152" y1="264" x2="152" y2="288" stroke="#b91c1c" strokeWidth="1.5" />
              <rect x="82" y="288" width="142" height="24" rx="6" className="fill-rose-50 stroke-rose-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="153" y="303" textAnchor="middle" fontSize="9.2" fontWeight="800" className="fill-rose-900 dark:fill-rose-300">
                {lbl('M', 'M: Diaphragm (Sheet)')}
              </text>
            </svg>
          </div>
        )}
      </div>

      {hideLabels && (
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-xs space-y-2 dark:border-amber-900 dark:bg-amber-950/30">
          <div className="font-extrabold text-amber-900 dark:text-amber-300">
            Self-Test Answer Key — Click any letter above or below to verify:
          </div>
          <div className="grid gap-1.5 sm:grid-cols-2">
            {[...digestiveKey, ...respKey].map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => toggleLetter(item.code)}
                className="flex items-start gap-2 rounded-lg bg-white/90 px-2.5 py-1.5 text-left border border-amber-200 hover:border-amber-400 cursor-pointer dark:bg-slate-900 dark:border-amber-900/60"
              >
                <span className="font-mono font-extrabold text-amber-700 dark:text-amber-400">
                  {item.code}:
                </span>
                <span className="text-slate-700 dark:text-slate-200">
                  {revealed[item.code] ? (
                    <>
                      <strong>{item.name}</strong> — {item.note}
                    </>
                  ) : (
                    <span className="italic text-slate-400">Tap to reveal structure &amp; enzyme/role</span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function XylemVsPhloemAndVertebrateHearts() {
  const [hideLabels, setHideLabels] = useState(false);

  return (
    <div className="space-y-4 no-word-lookup select-none">
      <SelfTestHeader
        title="Plant Vascular Transport & Vertebrate Heart Evolution"
        hideLabels={hideLabels}
        onToggle={() => setHideLabels((h) => !h)}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {/* Xylem */}
        <div className="rounded-xl border border-sky-200 bg-white p-3.5 space-y-2 dark:border-sky-900/60 dark:bg-slate-950">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-sky-700 dark:text-sky-400">
              {hideLabels ? '[ A ] Water & Mineral Transport' : 'XYLEM — Unidirectional Transpiration Pull'}
            </span>
            <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-bold text-sky-800 dark:bg-sky-950 dark:text-sky-300">
              0 ATP Needed (Physical)
            </span>
          </div>
          <svg viewBox="0 0 300 180" className="w-full h-40" aria-label="Xylem Transpiration">
            {/* Hollow vessel tube */}
            <rect x="60" y="18" width="52" height="142" rx="6" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.5" />
            <line x1="60" y1="65" x2="72" y2="65" stroke="#0284c7" strokeWidth="2" />
            <line x1="100" y1="65" x2="112" y2="65" stroke="#0284c7" strokeWidth="2" />
            <line x1="60" y1="112" x2="72" y2="112" stroke="#0284c7" strokeWidth="2" />
            <line x1="100" y1="112" x2="112" y2="112" stroke="#0284c7" strokeWidth="2" />
            {/* Upward arrows only */}
            <path d="M86 146 L86 30" stroke="#0369a1" strokeWidth="4" strokeLinecap="round" />
            <polygon points="86,20 79,34 93,34" fill="#0369a1" />
            {/* Leaf evaporation */}
            <ellipse cx="86" cy="14" rx="28" ry="8" fill="#4ade80" stroke="#15803d" strokeWidth="1.5" />
            <text x="130" y="34" fontSize="9.5" fontWeight="800" className="fill-sky-900 dark:fill-sky-300">
              {hideLabels ? '1. [ ? ] suction' : '1. Transpiration Pull (Day)'}
            </text>
            <text x="130" y="50" fontSize="8.5" className="fill-slate-600 dark:fill-slate-400">
              Water evaporates via stomata
            </text>
            <text x="130" y="88" fontSize="9.5" fontWeight="800" className="fill-slate-800 dark:fill-slate-200">
              {hideLabels ? '2. Dead [ ? ] tubes' : '2. Dead Vessels & Tracheids'}
            </text>
            <text x="130" y="104" fontSize="8.5" className="fill-slate-600 dark:fill-slate-400">
              Open end-walls → continuous column
            </text>
            <text x="130" y="142" fontSize="9.5" fontWeight="800" className="fill-teal-800 dark:fill-teal-300">
              {hideLabels ? '3. [ ? ] Pressure (Night)' : '3. Root Pressure (Night)'}
            </text>
            <text x="130" y="158" fontSize="8.5" className="fill-slate-600 dark:fill-slate-400">
              Active ion uptake draws water in
            </text>
          </svg>
        </div>

        {/* Phloem */}
        <div className="rounded-xl border border-emerald-200 bg-white p-3.5 space-y-2 dark:border-emerald-900/60 dark:bg-slate-950">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400">
              {hideLabels ? '[ B ] Food / Sucrose Translocation' : 'PHLOEM — Bidirectional ATP Translocation'}
            </span>
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-900 dark:bg-amber-950 dark:text-amber-300">
              Uses ATP Energy!
            </span>
          </div>
          <svg viewBox="0 0 300 180" className="w-full h-40" aria-label="Phloem Translocation">
            {/* Sieve tube + companion cell */}
            <rect x="44" y="20" width="46" height="140" rx="6" fill="#d1fae5" stroke="#059669" strokeWidth="2.5" />
            <rect x="94" y="34" width="20" height="112" rx="5" fill="#fef3c7" stroke="#d97706" strokeWidth="1.8" />
            {/* Sieve plates */}
            <line x1="44" y1="68" x2="90" y2="68" stroke="#059669" strokeWidth="3" strokeDasharray="4 3" />
            <line x1="44" y1="116" x2="90" y2="116" stroke="#059669" strokeWidth="3" strokeDasharray="4 3" />
            {/* Bidirectional arrows */}
            <path d="M60 144 L60 36" stroke="#047857" strokeWidth="3" />
            <polygon points="60,28 54,39 66,39" fill="#047857" />
            <path d="M74 36 L74 144" stroke="#b45309" strokeWidth="3" />
            <polygon points="74,152 68,141 80,141" fill="#b45309" />

            <text x="124" y="38" fontSize="9.5" fontWeight="800" className="fill-emerald-900 dark:fill-emerald-300">
              {hideLabels ? '1. [ ? ] + Companion Cell' : '1. Living Sieve Tubes + Companion'}
            </text>
            <text x="124" y="54" fontSize="8.5" className="fill-slate-600 dark:fill-slate-400">
              Carries Sucrose &amp; Amino acids
            </text>
            <text x="124" y="88" fontSize="9.5" fontWeight="800" className="fill-amber-800 dark:fill-amber-300">
              {hideLabels ? '2. Loaded via [ ? ]' : '2. Active Loading via ATP'}
            </text>
            <text x="124" y="104" fontSize="8.5" className="fill-slate-600 dark:fill-slate-400">
              Water enters → high osmotic pressure
            </text>
            <text x="124" y="138" fontSize="9.5" fontWeight="800" className="fill-slate-800 dark:fill-slate-200">
              3. Bidirectional (↑ Buds &amp; ↓ Roots)
            </text>
            <text x="124" y="154" fontSize="8.5" className="fill-slate-600 dark:fill-slate-400">
              Moves from Source → Sink by need
            </text>
          </svg>
        </div>
      </div>

      {/* Vertebrate Heart Evolution Strip */}
      <div className="rounded-xl border border-rose-200 bg-white p-3.5 dark:border-rose-900/60 dark:bg-slate-950">
        <div className="text-xs font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-3">
          Vertebrate Heart Evolution Strip (2-Chamber → 3-Chamber → 4-Chamber)
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              title: hideLabels ? '[ 1 ] Fishes (2-Chambered)' : '1. Fishes (2-Chambered)',
              chambers: '1 Atrium + 1 Ventricle',
              flow: 'Single Circulation (Heart → Gills → Body → Heart)',
              note: 'Cold-blooded; blood passes heart ONCE per cycle.',
              color: 'border-sky-200 bg-sky-50/50 dark:border-sky-900 dark:bg-sky-950/20',
              svg: (
                <svg viewBox="0 0 110 60" className="w-28 h-14 mx-auto">
                  <rect x="20" y="8" width="32" height="44" rx="8" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                  <rect x="58" y="8" width="32" height="44" rx="8" fill="#7dd3fc" stroke="#0369a1" strokeWidth="2" />
                  <text x="36" y="34" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0c4a6e">A</text>
                  <text x="74" y="34" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0c4a6e">V</text>
                </svg>
              ),
            },
            {
              title: hideLabels ? '[ 2 ] Amphibians & Reptiles (3-Ch)' : '2. Amphibians & Reptiles (3-Ch)',
              chambers: '2 Atria + 1 Shared Ventricle',
              flow: 'Incomplete Double Circulation (Mixing in Ventricle)',
              note: 'Cold-blooded (ectothermic); tolerate slight O₂/CO₂ mixing.',
              color: 'border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/20',
              svg: (
                <svg viewBox="0 0 110 60" className="w-28 h-14 mx-auto">
                  <rect x="18" y="6" width="34" height="22" rx="6" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="1.8" />
                  <rect x="58" y="6" width="34" height="22" rx="6" fill="#fca5a5" stroke="#dc2626" strokeWidth="1.8" />
                  <rect x="22" y="32" width="66" height="22" rx="7" fill="#c084fc" stroke="#7e22ce" strokeWidth="1.8" />
                  <text x="35" y="21" textAnchor="middle" fontSize="9" fontWeight="800" fill="#1e3a8a">RA</text>
                  <text x="75" y="21" textAnchor="middle" fontSize="9" fontWeight="800" fill="#7f1d1d">LA</text>
                  <text x="55" y="47" textAnchor="middle" fontSize="9" fontWeight="800" fill="#3b0764">Mixed V</text>
                </svg>
              ),
            },
            {
              title: hideLabels ? '[ 3 ] Birds & Mammals (4-Ch)' : '3. Birds & Mammals (4-Chambered)',
              chambers: '2 Atria + 2 Ventricles + Septum',
              flow: 'Complete Double Circulation (Zero Mixing!)',
              note: 'Warm-blooded (endothermic); high O₂ keeps body temp constant.',
              color: 'border-rose-200 bg-rose-50/50 dark:border-rose-900 dark:bg-rose-950/20',
              svg: (
                <svg viewBox="0 0 110 60" className="w-28 h-14 mx-auto">
                  <rect x="18" y="6" width="34" height="22" rx="6" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="1.8" />
                  <rect x="58" y="6" width="34" height="22" rx="6" fill="#fca5a5" stroke="#dc2626" strokeWidth="1.8" />
                  <rect x="18" y="32" width="34" height="22" rx="6" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="1.8" />
                  <rect x="58" y="32" width="34" height="22" rx="6" fill="#f87171" stroke="#dc2626" strokeWidth="1.8" />
                  <text x="35" y="21" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#1e3a8a">RA</text>
                  <text x="75" y="21" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#7f1d1d">LA</text>
                  <text x="35" y="47" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#1e3a8a">RV</text>
                  <text x="75" y="47" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#7f1d1d">LV</text>
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.title} className={`rounded-xl border p-3 text-center space-y-1.5 ${item.color}`}>
              <div className="text-xs font-extrabold text-slate-900 dark:text-white">{item.title}</div>
              {item.svg}
              <div className="text-[11px] font-bold text-slate-700 dark:text-slate-200">{item.chambers}</div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300">{item.flow}</div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NeuronAndReflexArcDiagram() {
  const [hideLabels, setHideLabels] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggleHide = () => {
    setHideLabels((h) => !h);
    setRevealed({});
  };

  const toggleLetter = (k: string) =>
    setRevealed((prev) => ({ ...prev, [k]: !prev[k] }));

  const lbl = (code: string, text: string) =>
    !hideLabels || revealed[code] ? text : `[ ${code} ]`;

  const keys = [
    { code: 'A', name: 'Dendrite', note: 'Acquires chemical information & converts to electrical impulse' },
    { code: 'B', name: 'Cell Body (Cyton) + Nucleus', note: 'Integrates impulse & houses nucleus' },
    { code: 'C', name: 'Axon', note: 'Long fibre carrying electrical impulse away from cell body' },
    { code: 'D', name: 'Nerve Ending + Synapse', note: 'Electrical signal → neurotransmitter chemicals across gap' },
    { code: 'E', name: 'Receptor (Skin)', note: 'Thermoreceptor/pain receptor detects hot stimulus' },
    { code: 'F', name: 'Sensory Neuron', note: 'Carries impulse from receptor TO spinal cord' },
    { code: 'G', name: 'Relay Neuron (Spinal Cord)', note: 'Connects sensory to motor directly for fast reflex' },
    { code: 'H', name: 'Motor Neuron', note: 'Carries impulse from spinal cord TO effector muscle' },
    { code: 'I', name: 'Effector (Biceps Muscle)', note: 'Contracts immediately to withdraw hand' },
    { code: 'J', name: 'Message to Brain', note: 'Sent upward too — thinking happens AFTER arm pulls away' },
  ];

  return (
    <div className="space-y-3 no-word-lookup select-none">
      <SelfTestHeader
        title="CBSE Diagram Self-Test: Neuron & Reflex Arc (Identify A–J)"
        hideLabels={hideLabels}
        onToggle={toggleHide}
        lettersCount={10}
        revealedLetters={revealed}
        onToggleLetter={toggleLetter}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {/* (A) Neuron */}
        <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
          <div className="text-xs font-extrabold text-indigo-700 dark:text-indigo-400 mb-2">
            (A) Structure of a Neuron &amp; Synapse Direction
          </div>
          <svg viewBox="0 0 380 215" className="w-full h-auto" aria-label="Neuron structure">
            {/* Dendrites */}
            <path d="M58 95 L28 70 M58 95 L22 95 M58 95 L28 122 M40 80 L24 56 M40 110 L24 134" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
            {/* Cell Body */}
            <polygon points="55,74 86,62 110,85 110,106 86,128 55,116" fill="#c7d2fe" stroke="#4338ca" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="82" cy="95" r="11" fill="#4338ca" />
            {/* Axon */}
            <line x1="110" y1="95" x2="292" y2="95" stroke="#4f46e5" strokeWidth="5" />
            {/* Myelin sheaths */}
            {[128, 178, 228].map((x) => (
              <rect key={x} x={x} y="84" width="38" height="22" rx="10" fill="#fde68a" stroke="#d97706" strokeWidth="1.8" />
            ))}
            {/* Nerve Endings */}
            <path d="M292 95 L322 72 M292 95 L326 95 M292 95 L322 118" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
            <circle cx="325" cy="71" r="4" fill="#db2777" />
            <circle cx="329" cy="95" r="4" fill="#db2777" />
            <circle cx="325" cy="119" r="4" fill="#db2777" />
            {/* Next dendrite across Synapse gap */}
            <path d="M342 75 L360 88 M342 115 L360 102 M360 88 L360 102" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />

            {/* Impulse direction arrow */}
            <path d="M75 152 L280 152" stroke="#059669" strokeWidth="2.5" />
            <polygon points="288,152 276,146 276,158" fill="#059669" />
            <text x="180" y="168" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-emerald-700 dark:fill-emerald-400">
              One-Way Impulse: Electrical → Chemical (Synapse) → Electrical
            </text>

            {/* Labels A-D */}
            <rect x="6" y="18" width="92" height="24" rx="6" className="fill-indigo-50 stroke-indigo-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="52" y="34" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-indigo-900 dark:fill-indigo-300">
              {lbl('A', 'A: Dendrite')}
            </text>
            <line x1="45" y1="42" x2="36" y2="70" stroke="#4f46e5" strokeWidth="1.4" />

            <rect x="108" y="18" width="106" height="24" rx="6" className="fill-indigo-50 stroke-indigo-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="161" y="34" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-indigo-900 dark:fill-indigo-300">
              {lbl('B', 'B: Cell Body + Nucleus')}
            </text>
            <line x1="130" y1="42" x2="94" y2="74" stroke="#4f46e5" strokeWidth="1.4" />

            <rect x="160" y="114" width="92" height="22" rx="6" className="fill-amber-50 stroke-amber-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="206" y="128" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-amber-900 dark:fill-amber-300">
              {lbl('C', 'C: Axon')}
            </text>

            <rect x="242" y="18" width="132" height="24" rx="6" className="fill-pink-50 stroke-pink-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="308" y="34" textAnchor="middle" fontSize="8.8" fontWeight="800" className="fill-pink-900 dark:fill-pink-300">
              {lbl('D', 'D: Nerve End + Synapse')}
            </text>
            <line x1="322" y1="42" x2="334" y2="72" stroke="#db2777" strokeWidth="1.4" />
          </svg>
        </div>

        {/* (B) Reflex Arc */}
        <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
          <div className="text-xs font-extrabold text-rose-700 dark:text-rose-400 mb-2">
            (B) Spinal Cord Reflex Arc (Hot Plate Stimulus → Arm Withdrawal)
          </div>
          <svg viewBox="0 0 380 215" className="w-full h-auto" aria-label="Spinal Reflex Arc">
            {/* Hot object + Hand/Arm */}
            <rect x="14" y="140" width="44" height="18" rx="4" fill="#ef4444" stroke="#991b1b" strokeWidth="1.8" />
            <text x="36" y="152" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#ffffff">HOT PAN</text>
            <path d="M40 120 Q52 108 64 126 L70 134" fill="none" stroke="#f59e0b" strokeWidth="10" strokeLinecap="round" />

            {/* Spinal Cord cross-section */}
            <ellipse cx="290" cy="112" rx="52" ry="44" fill="#fef3c7" stroke="#b45309" strokeWidth="2.2" />
            <path
              d="M275 84 Q290 100 305 84 Q314 112 305 140 Q290 124 275 140 Q266 112 275 84 Z"
              fill="#d97706"
              opacity="0.45"
            />

            {/* Message to Brain arrow */}
            <path d="M290 66 L290 22" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="4 3" />
            <polygon points="290,14 284,25 296,25" fill="#6366f1" />
            <rect x="216" y="6" width="152" height="22" rx="6" className="fill-indigo-50 stroke-indigo-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="292" y="20" textAnchor="middle" fontSize="8.8" fontWeight="800" className="fill-indigo-900 dark:fill-indigo-300">
              {lbl('J', 'J: Message to Brain (Later)')}
            </text>

            {/* Sensory neuron (Top path) */}
            <path d="M68 124 Q140 62 276 92" fill="none" stroke="#0284c7" strokeWidth="3" />
            <polygon points="278,93 266,86 268,97" fill="#0284c7" />
            {/* Relay neuron */}
            <path d="M278 96 Q298 112 278 128" fill="none" stroke="#7c3aed" strokeWidth="3.5" />
            {/* Motor neuron (Bottom path) */}
            <path d="M276 130 Q180 158 115 148" fill="none" stroke="#059669" strokeWidth="3" />
            <polygon points="110,147 122,143 120,154" fill="#059669" />

            {/* Biceps Effector */}
            <ellipse cx="94" cy="148" rx="18" ry="10" fill="#fb7185" stroke="#be123c" strokeWidth="2" />

            {/* Labels E-I */}
            <rect x="6" y="88" width="90" height="22" rx="6" className="fill-rose-50 stroke-rose-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="51" y="102" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-rose-900 dark:fill-rose-300">
              {lbl('E', 'E: Receptor (Skin)')}
            </text>

            <rect x="116" y="48" width="102" height="22" rx="6" className="fill-sky-50 stroke-sky-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="167" y="62" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-sky-900 dark:fill-sky-300">
              {lbl('F', 'F: Sensory Neuron')}
            </text>

            <rect x="242" y="164" width="130" height="22" rx="6" className="fill-purple-50 stroke-purple-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="307" y="178" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-purple-900 dark:fill-purple-300">
              {lbl('G', 'G: Relay Neuron (Spinal)')}
            </text>

            <rect x="122" y="164" width="104" height="22" rx="6" className="fill-emerald-50 stroke-emerald-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="174" y="178" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-emerald-900 dark:fill-emerald-300">
              {lbl('H', 'H: Motor Neuron')}
            </text>

            <rect x="6" y="174" width="104" height="22" rx="6" className="fill-rose-50 stroke-rose-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="58" y="188" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-rose-900 dark:fill-rose-300">
              {lbl('I', 'I: Effector (Muscle)')}
            </text>
          </svg>
        </div>
      </div>

      {hideLabels && (
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-xs space-y-2 dark:border-amber-900 dark:bg-amber-950/30">
          <div className="font-extrabold text-amber-900 dark:text-amber-300">
            Self-Test Answer Key — Tap any badge to reveal:
          </div>
          <div className="grid gap-1.5 sm:grid-cols-2">
            {keys.map((k) => (
              <button
                key={k.code}
                type="button"
                onClick={() => toggleLetter(k.code)}
                className="flex items-start gap-2 rounded-lg bg-white/90 px-2.5 py-1.5 text-left border border-amber-200 hover:border-amber-400 cursor-pointer dark:bg-slate-900 dark:border-amber-900/60"
              >
                <span className="font-mono font-extrabold text-amber-700 dark:text-amber-400">
                  {k.code}:
                </span>
                <span className="text-slate-700 dark:text-slate-200">
                  {revealed[k.code] ? (
                    <>
                      <strong>{k.name}</strong> — {k.note}
                    </>
                  ) : (
                    <span className="italic text-slate-400">Tap to reveal part &amp; role</span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function HumanReproductiveAndSeedAtlas() {
  const [panel, setPanel] = useState<'flower' | 'seed' | 'human'>('flower');
  const [hideLabels, setHideLabels] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggleHide = () => {
    setHideLabels((h) => !h);
    setRevealed({});
  };

  const toggleLetter = (k: string) =>
    setRevealed((prev) => ({ ...prev, [k]: !prev[k] }));

  const lbl = (code: string, text: string) =>
    !hideLabels || revealed[code] ? text : `[ ${code} ]`;

  return (
    <div className="space-y-3 no-word-lookup select-none">
      <SelfTestHeader
        title="CBSE Reproduction Diagram Atlas (3 Panels + Hide Labels)"
        hideLabels={hideLabels}
        onToggle={toggleHide}
        lettersCount={panel === 'flower' ? 7 : panel === 'seed' ? 4 : 8}
        revealedLetters={revealed}
        onToggleLetter={toggleLetter}
      />

      <div className="flex flex-wrap gap-1.5">
        {[
          { id: 'flower' as const, label: '1. Bisexual Flower (L.S.)' },
          { id: 'seed' as const, label: '2. Germinating Dicot Seed' },
          { id: 'human' as const, label: '3. Male & Female Human Systems' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setPanel(tab.id);
              setRevealed({});
            }}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              panel === tab.id
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:border-teal-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {panel === 'flower' && (
        <div className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-950">
          <svg viewBox="0 0 420 260" className="w-full max-w-xl mx-auto h-auto" aria-label="Longitudinal Bisexual Flower">
            {/* Stem & Receptacle */}
            <rect x="204" y="210" width="12" height="40" fill="#15803d" />
            <path d="M180 202 Q210 218 240 202 L226 196 Q210 204 194 196 Z" fill="#16a34a" />
            {/* Sepals */}
            <path d="M185 202 Q155 190 152 174 Q175 182 192 198 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
            <path d="M235 202 Q265 190 268 174 Q245 182 228 198 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
            {/* Petals */}
            <path d="M194 196 C140 162, 128 82, 168 62 C188 78, 198 148, 200 192 Z" fill="#f9a8d4" stroke="#db2777" strokeWidth="2" />
            <path d="M226 196 C280 162, 292 82, 252 62 C232 78, 222 148, 220 192 Z" fill="#f9a8d4" stroke="#db2777" strokeWidth="2" />
            {/* Stamens (Filament + Anther) */}
            <path d="M192 184 Q165 130 168 86" fill="none" stroke="#ca8a04" strokeWidth="3" />
            <ellipse cx="168" cy="82" rx="10" ry="6" fill="#facc15" stroke="#a16207" strokeWidth="1.8" />
            <path d="M228 184 Q255 130 252 86" fill="none" stroke="#ca8a04" strokeWidth="3" />
            <ellipse cx="252" cy="82" rx="10" ry="6" fill="#facc15" stroke="#a16207" strokeWidth="1.8" />
            {/* Pistil: Ovary, Style, Stigma */}
            <ellipse cx="210" cy="172" rx="22" ry="26" fill="#bbf7d0" stroke="#15803d" strokeWidth="2.2" />
            <ellipse cx="210" cy="174" rx="11" ry="15" fill="#fde68a" stroke="#d97706" strokeWidth="1.6" />
            <circle cx="210" cy="176" r="4" fill="#ef4444" />
            <rect x="204" y="72" width="12" height="78" rx="4" fill="#86efac" stroke="#15803d" strokeWidth="2" />
            <ellipse cx="210" cy="64" rx="17" ry="8" fill="#4ade80" stroke="#15803d" strokeWidth="2" />

            {/* Labels A-G */}
            <line x1="176" y1="78" x2="112" y2="54" stroke="#a16207" strokeWidth="1.4" />
            <rect x="10" y="38" width="104" height="24" rx="6" className="fill-amber-50 stroke-amber-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="62" y="54" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-amber-900 dark:fill-amber-300">
              {lbl('A', 'A: Anther (Pollen)')}
            </text>

            <line x1="172" y1="120" x2="114" y2="112" stroke="#a16207" strokeWidth="1.4" />
            <rect x="10" y="98" width="104" height="24" rx="6" className="fill-amber-50 stroke-amber-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="62" y="114" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-amber-900 dark:fill-amber-300">
              {lbl('B', 'B: Filament (Stamen)')}
            </text>

            <line x1="145" y1="145" x2="110" y2="152" stroke="#db2777" strokeWidth="1.4" />
            <rect x="10" y="140" width="100" height="24" rx="6" className="fill-pink-50 stroke-pink-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="60" y="156" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-pink-900 dark:fill-pink-300">
              {lbl('C', 'C: Petal (Corolla)')}
            </text>

            <line x1="164" y1="186" x2="110" y2="196" stroke="#15803d" strokeWidth="1.4" />
            <rect x="10" y="184" width="100" height="24" rx="6" className="fill-emerald-50 stroke-emerald-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="60" y="200" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emerald-900 dark:fill-emerald-300">
              {lbl('D', 'D: Sepal (Calyx)')}
            </text>

            {/* Pistil side */}
            <line x1="227" y1="64" x2="292" y2="50" stroke="#15803d" strokeWidth="1.4" />
            <rect x="292" y="36" width="118" height="24" rx="6" className="fill-emerald-50 stroke-emerald-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="351" y="52" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emerald-900 dark:fill-emerald-300">
              {lbl('E', 'E: Stigma (Sticky top)')}
            </text>

            <line x1="216" y1="112" x2="292" y2="108" stroke="#15803d" strokeWidth="1.4" />
            <rect x="292" y="95" width="118" height="24" rx="6" className="fill-emerald-50 stroke-emerald-500 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="351" y="111" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emerald-900 dark:fill-emerald-300">
              {lbl('F', 'F: Style (Pollen path)')}
            </text>

            <line x1="222" y1="172" x2="292" y2="168" stroke="#15803d" strokeWidth="1.4" />
            <rect x="292" y="152" width="118" height="32" rx="6" className="fill-teal-50 stroke-teal-600 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="351" y="166" textAnchor="middle" fontSize="8.8" fontWeight="800" className="fill-teal-900 dark:fill-teal-300">
              {lbl('G', 'G: Ovary → Fruit')}
            </text>
            <text x="351" y="178" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-rose-700 dark:fill-rose-300">
              {!hideLabels || revealed['G'] ? 'Ovule inside → Seed' : 'Ovule inside'}
            </text>
          </svg>
        </div>
      )}

      {panel === 'seed' && (
        <div className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-950">
          <svg viewBox="0 0 380 210" className="w-full max-w-lg mx-auto h-auto" aria-label="Germinating Dicot Seed">
            {/* Opened dicot seed halves */}
            <path d="M128 54 C96 54, 80 100, 96 144 C112 178, 154 176, 166 138 L166 72 C156 56, 142 54, 128 54 Z" fill="#fef08a" stroke="#a16207" strokeWidth="2.5" />
            <path d="M214 54 C246 54, 262 100, 246 144 C230 178, 188 176, 176 138 L176 72 C186 56, 200 54, 214 54 Z" fill="#fde047" stroke="#a16207" strokeWidth="2.5" />
            {/* Plumule (Future Shoot) */}
            <path d="M170 86 Q162 56 178 44 Q188 64 174 86 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.8" />
            <path d="M168 86 Q152 62 158 48 Q170 62 170 86 Z" fill="#4ade80" stroke="#15803d" strokeWidth="1.6" />
            {/* Radicle (Future Root) */}
            <path d="M168 128 Q166 160 156 184 Q172 172 176 128 Z" fill="#fdba74" stroke="#c2410c" strokeWidth="1.8" />

            {/* Labels A-D */}
            <line x1="176" y1="54" x2="255" y2="38" stroke="#15803d" strokeWidth="1.5" />
            <rect x="255" y="24" width="118" height="26" rx="6" className="fill-emerald-50 stroke-emerald-600 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="314" y="40" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emerald-900 dark:fill-emerald-300">
              {lbl('A', 'A: Plumule (Future Shoot)')}
            </text>

            <line x1="234" y1="108" x2="258" y2="108" stroke="#a16207" strokeWidth="1.5" />
            <rect x="258" y="94" width="115" height="26" rx="6" className="fill-yellow-50 stroke-yellow-600 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="315" y="110" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-yellow-900 dark:fill-yellow-300">
              {lbl('B', 'B: Cotyledon (Food)')}
            </text>

            <line x1="162" y1="166" x2="255" y2="168" stroke="#c2410c" strokeWidth="1.5" />
            <rect x="255" y="155" width="118" height="26" rx="6" className="fill-orange-50 stroke-orange-600 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="314" y="171" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-orange-900 dark:fill-orange-300">
              {lbl('C', 'C: Radicle (Future Root)')}
            </text>

            <line x1="90" y1="120" x2="66" y2="120" stroke="#78350f" strokeWidth="1.5" />
            <rect x="6" y="106" width="66" height="26" rx="6" className="fill-amber-50 stroke-amber-700 dark:fill-slate-900" strokeWidth="1.2" />
            <text x="39" y="122" textAnchor="middle" fontSize="8.8" fontWeight="800" className="fill-amber-900 dark:fill-amber-300">
              {lbl('D', 'D: Seed Coat')}
            </text>
          </svg>
        </div>
      )}

      {panel === 'human' && (
        <div className="grid gap-4 md:grid-cols-2">
          {/* Male */}
          <div className="rounded-xl border border-sky-200 bg-white p-3 dark:border-sky-900/60 dark:bg-slate-950">
            <div className="text-xs font-extrabold text-sky-700 dark:text-sky-400 mb-2">
              Human Male Reproductive System
            </div>
            <svg viewBox="0 0 320 220" className="w-full h-auto" aria-label="Male Reproductive System">
              {/* Bladder */}
              <ellipse cx="132" cy="56" rx="28" ry="20" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
              {/* Seminal vesicle + Prostate */}
              <ellipse cx="164" cy="74" rx="12" ry="7" fill="#fde68a" stroke="#ca8a04" strokeWidth="1.5" />
              <circle cx="144" cy="92" r="11" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.8" />
              {/* Vas deferens loop */}
              <path d="M104 164 C84 110, 96 42, 134 32 C164 26, 174 52, 152 84" fill="none" stroke="#0f766e" strokeWidth="3.5" />
              {/* Urethra inside Penis */}
              <path d="M142 78 L142 152" stroke="#0284c7" strokeWidth="4" />
              <rect x="132" y="102" width="20" height="54" rx="8" fill="none" stroke="#64748b" strokeWidth="2" />
              {/* Scrotum + Testis */}
              <ellipse cx="104" cy="176" rx="18" ry="22" fill="#fecdd3" stroke="#be123c" strokeWidth="2" />
              <ellipse cx="104" cy="176" rx="10" ry="13" fill="#fb7185" stroke="#9f1239" strokeWidth="1.6" />

              {/* Labels A-D */}
              <rect x="182" y="22" width="130" height="24" rx="6" className="fill-teal-50 stroke-teal-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="247" y="37" textAnchor="middle" fontSize="8.8" fontWeight="800" className="fill-teal-900 dark:fill-teal-300">
                {lbl('A', 'A: Vas deferens (Tube)')}
              </text>
              <line x1="164" y1="36" x2="182" y2="34" stroke="#0f766e" strokeWidth="1.3" />

              <rect x="182" y="64" width="130" height="28" rx="6" className="fill-amber-50 stroke-amber-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="247" y="81" textAnchor="middle" fontSize="8.3" fontWeight="800" className="fill-amber-900 dark:fill-amber-300">
                {lbl('B', 'B: Seminal Vesicle + Prostate')}
              </text>
              <line x1="172" y1="78" x2="182" y2="78" stroke="#ca8a04" strokeWidth="1.3" />

              <rect x="182" y="114" width="130" height="24" rx="6" className="fill-sky-50 stroke-sky-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="247" y="129" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-sky-900 dark:fill-sky-300">
                {lbl('C', 'C: Urethra (Urine + Sperm)')}
              </text>
              <line x1="152" y1="126" x2="182" y2="126" stroke="#0284c7" strokeWidth="1.3" />

              <rect x="164" y="164" width="148" height="28" rx="6" className="fill-rose-50 stroke-rose-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="238" y="181" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-rose-900 dark:fill-rose-300">
                {lbl('D', 'D: Testis in Scrotum (−2.5°C)')}
              </text>
              <line x1="122" y1="178" x2="164" y2="178" stroke="#be123c" strokeWidth="1.3" />
            </svg>
          </div>

          {/* Female */}
          <div className="rounded-xl border border-pink-200 bg-white p-3 dark:border-pink-900/60 dark:bg-slate-950">
            <div className="text-xs font-extrabold text-pink-700 dark:text-pink-400 mb-2">
              Human Female Reproductive System
            </div>
            <svg viewBox="0 0 320 220" className="w-full h-auto" aria-label="Female Reproductive System">
              {/* Uterus */}
              <path d="M116 58 Q155 44 194 58 L174 134 Q155 144 136 134 Z" fill="#fbcfe8" stroke="#be185d" strokeWidth="2.4" />
              {/* Cervix & Vagina */}
              <rect x="142" y="136" width="26" height="16" rx="4" fill="#f472b6" stroke="#9d174d" strokeWidth="1.8" />
              <rect x="139" y="152" width="32" height="46" rx="6" fill="#fce7f3" stroke="#be185d" strokeWidth="2" />
              {/* Oviducts (Fallopian tubes) */}
              <path d="M118 64 C82 54, 62 72, 68 94" fill="none" stroke="#db2777" strokeWidth="6" strokeLinecap="round" />
              <path d="M192 64 C228 54, 248 72, 242 94" fill="none" stroke="#db2777" strokeWidth="6" strokeLinecap="round" />
              {/* Ovaries */}
              <ellipse cx="80" cy="108" rx="14" ry="9" fill="#fde047" stroke="#b45309" strokeWidth="1.8" />
              <ellipse cx="230" cy="108" rx="14" ry="9" fill="#fde047" stroke="#b45309" strokeWidth="1.8" />

              {/* Labels E-H */}
              <rect x="184" y="14" width="130" height="28" rx="6" className="fill-pink-50 stroke-pink-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="249" y="27" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-pink-900 dark:fill-pink-300">
                {lbl('E', 'E: Oviduct (Fallopian)')}
              </text>
              <text x="249" y="38" textAnchor="middle" fontSize="7.6" fontWeight="700" className="fill-rose-700 dark:fill-rose-300">
                {!hideLabels || revealed['E'] ? 'Site of Fertilization!' : 'Key CBSE Site'}
              </text>
              <line x1="218" y1="58" x2="232" y2="42" stroke="#db2777" strokeWidth="1.3" />

              <rect x="200" y="126" width="114" height="24" rx="6" className="fill-amber-50 stroke-amber-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="257" y="141" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-amber-900 dark:fill-amber-300">
                {lbl('F', 'F: Ovary (Egg + Estrogen)')}
              </text>
              <line x1="234" y1="116" x2="246" y2="126" stroke="#b45309" strokeWidth="1.3" />

              <rect x="6" y="128" width="116" height="26" rx="6" className="fill-rose-50 stroke-rose-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="64" y="144" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-rose-900 dark:fill-rose-300">
                {lbl('G', 'G: Uterus (Implantation)')}
              </text>
              <line x1="122" y1="138" x2="140" y2="108" stroke="#be185d" strokeWidth="1.3" />

              <rect x="190" y="170" width="124" height="24" rx="6" className="fill-pink-50 stroke-pink-500 dark:fill-slate-900" strokeWidth="1.2" />
              <text x="252" y="185" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-pink-900 dark:fill-pink-300">
                {lbl('H', 'H: Cervix & Vagina')}
              </text>
              <line x1="171" y1="170" x2="190" y2="180" stroke="#be185d" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

function FoodWebAndOzoneVisual() {
  const [webMode, setWebMode] = useState<'terrestrial' | 'aquatic'>('terrestrial');
  const [hideLabels, setHideLabels] = useState(false);

  return (
    <div className="space-y-4 no-word-lookup select-none">
      <SelfTestHeader
        title="Food Web Energy Flow & Stratospheric Ozone Shield"
        hideLabels={hideLabels}
        onToggle={() => setHideLabels((h) => !h)}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Panel 1: Food Web */}
        <div className="rounded-xl border border-emerald-200 bg-white p-3.5 space-y-2.5 dark:border-emerald-900/60 dark:bg-slate-950">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400">
              Interconnected Food Web (Unidirectional Flow →)
            </span>
            <div className="flex gap-1">
              {(['terrestrial', 'aquatic'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setWebMode(m)}
                  className={`rounded-md px-2 py-0.5 text-[11px] font-bold capitalize cursor-pointer ${
                    webMode === m
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {webMode === 'terrestrial' ? (
            <svg viewBox="0 0 360 200" className="w-full h-auto" aria-label="Terrestrial Food Web">
              <defs>
                <marker id="fwArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#059669" />
                </marker>
              </defs>
              {/* Arrows */}
              <line x1="78" y1="156" x2="128" y2="124" stroke="#059669" strokeWidth="2" markerEnd="url(#fwArrow)" />
              <line x1="78" y1="164" x2="128" y2="164" stroke="#059669" strokeWidth="2" markerEnd="url(#fwArrow)" />
              <line x1="78" y1="148" x2="128" y2="76" stroke="#059669" strokeWidth="2" markerEnd="url(#fwArrow)" />
              <line x1="196" y1="120" x2="238" y2="95" stroke="#059669" strokeWidth="2" markerEnd="url(#fwArrow)" />
              <line x1="196" y1="164" x2="238" y2="132" stroke="#059669" strokeWidth="2" markerEnd="url(#fwArrow)" />
              <line x1="196" y1="74" x2="294" y2="54" stroke="#059669" strokeWidth="2" markerEnd="url(#fwArrow)" />
              <line x1="286" y1="95" x2="310" y2="68" stroke="#059669" strokeWidth="2" markerEnd="url(#fwArrow)" />
              <line x1="286" y1="132" x2="318" y2="68" stroke="#059669" strokeWidth="2" markerEnd="url(#fwArrow)" />
              <line x1="196" y1="122" x2="294" y2="58" stroke="#059669" strokeWidth="1.6" strokeDasharray="3 2" markerEnd="url(#fwArrow)" />

              {/* Trophic Nodes */}
              <rect x="8" y="142" width="70" height="36" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.8" />
              <text x="43" y="159" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#14532d">
                {hideLabels ? 'T₁' : 'Grass / Plants'}
              </text>
              <text x="43" y="171" textAnchor="middle" fontSize="7.8" fontWeight="700" fill="#15803d">Producer (1% Sun)</text>

              <rect x="130" y="56" width="66" height="30" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.6" />
              <text x="163" y="75" textAnchor="middle" fontSize="9" fontWeight="800" fill="#713f12">
                {hideLabels ? 'T₂ (A)' : 'Rabbit'}
              </text>

              <rect x="130" y="104" width="66" height="30" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.6" />
              <text x="163" y="123" textAnchor="middle" fontSize="9" fontWeight="800" fill="#713f12">
                {hideLabels ? 'T₂ (B)' : 'Mouse'}
              </text>

              <rect x="130" y="148" width="66" height="30" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.6" />
              <text x="163" y="167" textAnchor="middle" fontSize="9" fontWeight="800" fill="#713f12">
                {hideLabels ? 'T₂ (C)' : 'Grasshopper'}
              </text>

              <rect x="238" y="78" width="52" height="28" rx="8" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.6" />
              <text x="264" y="96" textAnchor="middle" fontSize="9" fontWeight="800" fill="#7c2d12">
                {hideLabels ? 'T₃ (D)' : 'Snake'}
              </text>

              <rect x="238" y="118" width="52" height="28" rx="8" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.6" />
              <text x="264" y="136" textAnchor="middle" fontSize="9" fontWeight="800" fill="#7c2d12">
                {hideLabels ? 'T₃ (E)' : 'Frog'}
              </text>

              <rect x="292" y="34" width="62" height="34" rx="8" fill="#fecaca" stroke="#dc2626" strokeWidth="1.8" />
              <text x="323" y="50" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7f1d1d">
                {hideLabels ? 'T₄' : 'Hawk / Eagle'}
              </text>
              <text x="323" y="61" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#991b1b">Top Carnivore</text>

              <text x="180" y="194" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-slate-600 dark:fill-slate-400">
                Sun → T₁ → T₂ → T₃ → T₄ (Energy never flows backwards!)
              </text>
            </svg>
          ) : (
            <svg viewBox="0 0 360 200" className="w-full h-auto" aria-label="Aquatic Food Web">
              <defs>
                <marker id="fwArrow2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#0284c7" />
                </marker>
              </defs>
              <line x1="88" y1="145" x2="128" y2="112" stroke="#0284c7" strokeWidth="2" markerEnd="url(#fwArrow2)" />
              <line x1="88" y1="155" x2="128" y2="155" stroke="#0284c7" strokeWidth="2" markerEnd="url(#fwArrow2)" />
              <line x1="196" y1="112" x2="232" y2="88" stroke="#0284c7" strokeWidth="2" markerEnd="url(#fwArrow2)" />
              <line x1="196" y1="155" x2="232" y2="136" stroke="#0284c7" strokeWidth="2" markerEnd="url(#fwArrow2)" />
              <line x1="286" y1="88" x2="310" y2="58" stroke="#0284c7" strokeWidth="2" markerEnd="url(#fwArrow2)" />
              <line x1="286" y1="136" x2="316" y2="58" stroke="#0284c7" strokeWidth="2" markerEnd="url(#fwArrow2)" />

              <rect x="8" y="132" width="80" height="38" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="1.8" />
              <text x="48" y="149" textAnchor="middle" fontSize="9" fontWeight="800" fill="#064e3b">
                {hideLabels ? 'T₁' : 'Phytoplankton'}
              </text>
              <text x="48" y="162" textAnchor="middle" fontSize="7.6" fontWeight="700" fill="#047857">Water 0.003 ppb</text>

              <rect x="130" y="96" width="66" height="32" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.6" />
              <text x="163" y="116" textAnchor="middle" fontSize="8.8" fontWeight="800" fill="#0c4a6e">
                {hideLabels ? 'T₂' : 'Zooplankton'}
              </text>

              <rect x="130" y="140" width="66" height="32" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.6" />
              <text x="163" y="160" textAnchor="middle" fontSize="8.8" fontWeight="800" fill="#0c4a6e">Insect Larvae</text>

              <rect x="232" y="72" width="56" height="30" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.6" />
              <text x="260" y="91" textAnchor="middle" fontSize="9" fontWeight="800" fill="#78350f">
                {hideLabels ? 'T₃' : 'Small Fish'}
              </text>

              <rect x="232" y="120" width="56" height="30" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.6" />
              <text x="260" y="139" textAnchor="middle" fontSize="9" fontWeight="800" fill="#78350f">Big Fish</text>

              <rect x="294" y="26" width="60" height="34" rx="8" fill="#fecaca" stroke="#dc2626" strokeWidth="1.8" />
              <text x="324" y="42" textAnchor="middle" fontSize="8.8" fontWeight="800" fill="#7f1d1d">
                {hideLabels ? 'T₄' : 'Fish Bird'}
              </text>
              <text x="324" y="53" textAnchor="middle" fontSize="7.4" fontWeight="800" fill="#991b1b">DDT 25 ppm!</text>
            </svg>
          )}
        </div>

        {/* Panel 2: Stratospheric Ozone */}
        <div className="rounded-xl border border-indigo-200 bg-white p-3.5 space-y-2.5 dark:border-indigo-900/60 dark:bg-slate-950">
          <div className="text-xs font-extrabold text-indigo-700 dark:text-indigo-400">
            Stratospheric Ozone (O₃) Shield vs. CFC Depletion
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-2.5 dark:border-emerald-900 dark:bg-emerald-950/30">
              <div className="text-[11px] font-extrabold text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Upper Stratosphere (Good Shield)
              </div>
              <div className="mt-1.5 font-mono text-xs font-bold text-slate-900 dark:text-white space-y-1">
                <div>1. O₂ —(UV)→ O + O</div>
                <div>2. O + O₂ → O₃ (Ozone)</div>
              </div>
              <p className="mt-1 text-[11px] text-emerald-900 dark:text-emerald-200">
                Absorbs lethal UV rays → prevents <strong>skin cancer</strong> &amp; cataracts.
              </p>
            </div>

            <div className="rounded-lg border border-rose-200 bg-rose-50/70 p-2.5 dark:border-rose-900 dark:bg-rose-950/30">
              <div className="text-[11px] font-extrabold text-rose-800 dark:text-rose-300">
                Ground Level (Deadly Poison!)
              </div>
              <p className="mt-1.5 text-[11px] text-rose-900 dark:text-rose-200 leading-relaxed">
                At the surface, <code className="font-mono font-bold">O₃</code> is a toxic pollutant that damages lungs &amp; crops. Yet high up, it protects all life on Earth!
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-sky-200 bg-sky-50/70 p-2.5 text-xs space-y-1 dark:border-sky-900 dark:bg-sky-950/30">
            <div className="font-extrabold text-sky-900 dark:text-sky-300">
              CFC Culprit &amp; 1987 UNEP Montreal Protocol
            </div>
            <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
              Synthetic <strong>Chlorofluorocarbons (CFCs)</strong> used in refrigerators, ACs, and fire extinguishers drifted up and broke down ozone sharply in the 1980s. In <strong>1987</strong>, the <strong>UNEP (United Nations Environment Programme)</strong> forged an international agreement to freeze CFC production at 1986 levels and mandate CFC-free appliances.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BiologyConceptDiagram({ diagramId }: { diagramId: BiologyDiagramId }) {
  switch (diagramId) {
    case 'human-digestive-and-respiratory-atlas':
      return <HumanDigestiveAndRespiratoryAtlas />;
    case 'xylem-transpiration-vs-phloem-translocation':
      return <XylemVsPhloemAndVertebrateHearts />;
    case 'neuron-and-reflex-arc-diagram':
      return <NeuronAndReflexArcDiagram />;
    case 'human-reproductive-and-seed-atlas':
      return <HumanReproductiveAndSeedAtlas />;
    case 'food-web-and-ozone-depletion-visual':
      return <FoodWebAndOzoneVisual />;
  }
}
