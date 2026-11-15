import { useState } from 'react';
import {
  Anchor,
  ArrowDown,
  ArrowLeftRight,
  ArrowRight,
  Building2,
  Coins,
  Compass,
  Crown,
  Droplets,
  Factory,
  Flag,
  Globe,
  Landmark,
  Layers,
  Scale,
  ScrollText,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Users,
} from 'lucide-react';
import { DiagramId } from '../../types/curriculum';

export type SstDiagramId =
  | 'gdp-vs-employment-bars'
  | 'bank-loan-mechanism-flow'
  | 'formal-vs-informal-credit-chart'
  | 'mnc-global-production-and-g20'
  | 'power-sharing-horizontal-vertical'
  | 'india-federal-lists-and-tiers'
  | 'civics-cartoon-gallery'
  | 'germania-and-marianne-symbols'
  | 'european-unification-lanes'
  | 'indian-movement-timeline-arc'
  | 'soil-profile-and-india-zones'
  | 'rainwater-harvesting-and-dams'
  | 'cropping-seasons-wheel'
  | 'coastline-ports-and-airports';

const SST_DIAGRAM_IDS = new Set<string>([
  'gdp-vs-employment-bars',
  'bank-loan-mechanism-flow',
  'formal-vs-informal-credit-chart',
  'mnc-global-production-and-g20',
  'power-sharing-horizontal-vertical',
  'india-federal-lists-and-tiers',
  'civics-cartoon-gallery',
  'germania-and-marianne-symbols',
  'european-unification-lanes',
  'indian-movement-timeline-arc',
  'soil-profile-and-india-zones',
  'rainwater-harvesting-and-dams',
  'cropping-seasons-wheel',
  'coastline-ports-and-airports',
]);

export function isSstDiagramId(id: DiagramId): id is SstDiagramId {
  return SST_DIAGRAM_IDS.has(id);
}

function GdpVsEmploymentChart() {
  const [period, setPeriod] = useState<'comparison' | '1977' | '2017'>('comparison');

  const rows = [
    {
      sector: 'Primary (Agriculture & Allied)',
      color: 'bg-emerald-600',
      textColor: 'text-emerald-700 dark:text-emerald-400',
      gdp1977: 40,
      emp1977: 71,
      gdp2017: 18,
      emp2017: 44,
    },
    {
      sector: 'Secondary (Manufacturing & Construction)',
      color: 'bg-amber-500',
      textColor: 'text-amber-700 dark:text-amber-400',
      gdp1977: 24,
      emp1977: 11,
      gdp2017: 25,
      emp2017: 25,
    },
    {
      sector: 'Tertiary (Services, IT, Banking, Trade)',
      color: 'bg-indigo-600',
      textColor: 'text-indigo-700 dark:text-indigo-400',
      gdp1977: 36,
      emp1977: 18,
      gdp2017: 57,
      emp2017: 31,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
          <TrendingUp className="h-4 w-4 text-rose-600" />
          NCERT Graph 2 &amp; 3 Comparison: Output (GDP %) vs. Workforce (Employment %)
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'comparison' as const, label: 'Both Eras Side-by-Side' },
            { id: '1977' as const, label: '1977–78 Snapshot' },
            { id: '2017' as const, label: '2017–18 Snapshot' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setPeriod(tab.id)}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
                period === tab.id
                  ? 'bg-rose-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-rose-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {(period === 'comparison' || period === '1977') && (
          <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 dark:border-slate-800 dark:bg-slate-950">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              1977–78 Era (Primary Dominant in Both)
            </div>
            {rows.map((r) => (
              <div key={r.sector} className="space-y-1.5">
                <div className={`text-xs font-bold ${r.textColor}`}>{r.sector}</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="w-20 shrink-0 font-semibold text-slate-500">GDP Share</span>
                    <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden dark:bg-slate-800">
                      <div className={`h-full rounded-full ${r.color}`} style={{ width: `${r.gdp1977}%` }} />
                    </div>
                    <span className="w-9 text-right font-mono font-bold text-slate-800 dark:text-slate-200">
                      ~{r.gdp1977}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="w-20 shrink-0 font-semibold text-slate-500">Employment</span>
                    <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden dark:bg-slate-800">
                      <div
                        className={`h-full rounded-full opacity-65 ${r.color}`}
                        style={{ width: `${r.emp1977}%` }}
                      />
                    </div>
                    <span className="w-9 text-right font-mono font-bold text-slate-800 dark:text-slate-200">
                      {r.emp1977}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {(period === 'comparison' || period === '2017') && (
          <div className="rounded-xl border border-rose-200 bg-white p-4 space-y-3 dark:border-rose-900/60 dark:bg-slate-950">
            <div className="text-xs font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-400">
              2017–18 Era (The Structural Mismatch!)
            </div>
            {rows.map((r) => (
              <div key={r.sector} className="space-y-1.5">
                <div className={`text-xs font-bold ${r.textColor}`}>{r.sector}</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="w-20 shrink-0 font-semibold text-slate-500">GDP Share</span>
                    <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden dark:bg-slate-800">
                      <div className={`h-full rounded-full ${r.color}`} style={{ width: `${r.gdp2017}%` }} />
                    </div>
                    <span className="w-9 text-right font-mono font-bold text-slate-800 dark:text-slate-200">
                      ~{r.gdp2017}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="w-20 shrink-0 font-semibold text-slate-500">Employment</span>
                    <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden dark:bg-slate-800">
                      <div
                        className={`h-full rounded-full opacity-65 ${r.color}`}
                        style={{ width: `${r.emp2017}%` }}
                      />
                    </div>
                    <span className="w-9 text-right font-mono font-bold text-slate-800 dark:text-slate-200">
                      {r.emp2017}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-3 text-xs text-amber-950 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-200">
        <strong>CBSE Exam Takeaway — Why Disguised Unemployment Exists:</strong> While Secondary &amp; Tertiary output grew
        exponentially (Services now generate over <strong>55% of GDP</strong>), job creation in industry/services did not match
        output growth. Roughly <strong>44% of workers remain in Primary agriculture</strong> producing under one-fifth of GDP —
        so removing surplus workers from a farm would not reduce total output.
      </div>
    </div>
  );
}

function BankLoanMechanismFlow() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-3 items-stretch">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 space-y-2 dark:border-emerald-900/60 dark:bg-emerald-950/30">
          <div className="flex items-center justify-between">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <Users className="h-4 w-4" />
            </span>
            <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-extrabold text-emerald-800 dark:bg-slate-900 dark:text-emerald-300">
              Surplus Funds
            </span>
          </div>
          <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">
            1. Depositors
          </h5>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-4">
            <li>Deposit extra cash safely in bank accounts.</li>
            <li>Earn <strong>lower interest</strong> (~3–6% p.a.) from the bank.</li>
            <li>Can withdraw anytime via cash or <strong>cheque (Demand Deposit)</strong>.</li>
          </ul>
        </div>

        <div className="rounded-xl border-2 border-indigo-300 bg-white p-4 space-y-2.5 shadow-xs dark:border-indigo-800 dark:bg-slate-950">
          <div className="flex items-center justify-between">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Landmark className="h-4 w-4" />
            </span>
            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-extrabold text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
              Mediator
            </span>
          </div>
          <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">
            2. Commercial Banks (Supervised by RBI)
          </h5>
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] font-bold">
              <span className="text-amber-700 dark:text-amber-400">15% Cash Reserve</span>
              <span className="text-indigo-700 dark:text-indigo-400">85% Loaned Out</span>
            </div>
            <div className="flex h-3 w-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              <div className="bg-amber-500 h-full" style={{ width: '15%' }} title="15% Cash Reserve" />
              <div className="bg-indigo-600 h-full" style={{ width: '85%' }} title="85% Extended as Loans" />
            </div>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
            Banks keep <strong>~15%</strong> as cash to pay daily depositors and lend the major portion to borrowers.
          </p>
        </div>

        <div className="rounded-xl border border-rose-200 bg-rose-50/80 p-4 space-y-2 dark:border-rose-900/60 dark:bg-rose-950/30">
          <div className="flex items-center justify-between">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose-600 text-white">
              <Coins className="h-4 w-4" />
            </span>
            <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-extrabold text-rose-800 dark:bg-slate-900 dark:text-rose-300">
              Need Credit
            </span>
          </div>
          <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">
            3. Borrowers
          </h5>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-4">
            <li>Borrow for farming, factories, housing, or trade.</li>
            <li>Submit collateral, documentation &amp; repayment schedule.</li>
            <li>Pay <strong>higher interest</strong> (~9–14% p.a.) back to bank.</li>
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-3 flex flex-wrap items-center justify-center gap-2 text-xs font-extrabold text-indigo-950 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
        <span>Bank&apos;s Main Income</span>
        <ArrowRight className="h-4 w-4" />
        <span className="rounded-lg bg-white px-2.5 py-1 border border-indigo-200 dark:bg-slate-900 dark:border-indigo-800">
          Interest Charged from Borrowers
        </span>
        <span>−</span>
        <span className="rounded-lg bg-white px-2.5 py-1 border border-indigo-200 dark:bg-slate-900 dark:border-indigo-800">
          Interest Paid to Depositors
        </span>
      </div>
    </div>
  );
}

function FormalVsInformalCreditChart() {
  const groups = [
    { group: 'Poor Households', informal: 85, formal: 15 },
    { group: 'Households with Few Assets', informal: 53, formal: 47 },
    { group: 'Well-off Households', informal: 28, formal: 72 },
    { group: 'Rich Households', informal: 10, formal: 90 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="font-bold text-slate-700 dark:text-slate-200">
          NCERT Graph 2: Share of Loans by Urban Household Category
        </span>
        <div className="flex items-center gap-3 text-[11px] font-bold">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm bg-rose-600 inline-block" /> Informal (Moneylenders/Traders)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm bg-teal-600 inline-block" /> Formal (Banks/Cooperatives)
          </span>
        </div>
      </div>

      <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
        {groups.map((g) => (
          <div key={g.group} className="space-y-1">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-800 dark:text-slate-200">{g.group}</span>
              <span className="font-mono text-[11px] text-slate-500">
                {g.informal}% Informal • {g.formal}% Formal
              </span>
            </div>
            <div className="flex h-6 w-full rounded-lg overflow-hidden text-[11px] font-extrabold text-white shadow-xs">
              <div
                className="bg-rose-600 flex items-center justify-center transition-all"
                style={{ width: `${g.informal}%` }}
              >
                {g.informal >= 15 ? `${g.informal}%` : ''}
              </div>
              <div
                className="bg-teal-600 flex items-center justify-center transition-all"
                style={{ width: `${g.formal}%` }}
              >
                {g.formal >= 15 ? `${g.formal}%` : ''}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-3 text-xs text-rose-950 dark:border-rose-900/60 dark:bg-rose-950/30 dark:text-rose-200">
        <strong>Why Poor Urban &amp; Rural Households Depend on Informal Credit (85%):</strong> Lack of{' '}
        <strong>collateral</strong> and formal documents bars them from banks, forcing them to borrow from moneylenders at
        exploitative interest rates. This is why <strong>Self-Help Groups (SHGs)</strong> and cheaper formal credit expansion
        are critical for equitable development.
      </div>
    </div>
  );
}

function MncAndG20Visual() {
  return (
    <div className="space-y-4">
      {/* Panel A: MNC Value Chain */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Factory className="h-4 w-4" />
          Part A — How an MNC Spreads Production Across the Globe (50–60% Cost Savings)
        </div>
        <div className="grid gap-2.5 sm:grid-cols-4">
          {[
            {
              step: '1. Research & Design',
              place: 'USA',
              why: 'Advanced R&D centres & design patents',
              cls: 'border-indigo-200 bg-indigo-50/70 dark:border-indigo-900 dark:bg-indigo-950/30',
            },
            {
              step: '2. Cheap Manufacturing',
              place: 'China',
              why: 'Low-cost labour & massive component hubs',
              cls: 'border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/30',
            },
            {
              step: '3. Market Assembly',
              place: 'Mexico & E. Europe',
              why: 'Closeness to major US & EU consumer markets',
              cls: 'border-sky-200 bg-sky-50/70 dark:border-sky-900 dark:bg-sky-950/30',
            },
            {
              step: '4. Engineering & Support',
              place: 'India',
              why: 'Skilled engineers & English-speaking IT/call centres',
              cls: 'border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/30',
            },
          ].map((node) => (
            <div key={node.step} className={`rounded-xl border p-3 space-y-1 ${node.cls}`}>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {node.step}
              </div>
              <div className="text-sm font-extrabold text-slate-900 dark:text-white">{node.place}</div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">{node.why}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Panel B: G20 Visual Card */}
      <div className="rounded-xl border-2 border-amber-300 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/80 p-4 space-y-3 dark:border-amber-800 dark:from-amber-950/30 dark:via-slate-950 dark:to-emerald-950/30">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs font-extrabold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
            <Globe className="h-4 w-4 text-amber-600" />
            Part B — G20 &amp; India&apos;s Presidency (Special Exam Module)
          </div>
          <span className="rounded-full bg-amber-600 px-2.5 py-0.5 text-[10px] font-extrabold text-white">
            Vasudhaiva Kutumbakam • One Earth, One Family, One Future
          </span>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-3 text-center">
          {[
            { metric: '~85%', label: 'of Global GDP' },
            { metric: '>75%', label: 'of Global Trade' },
            { metric: '~2/3rd', label: 'of World Population' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-amber-200 bg-white/90 p-2.5 dark:border-amber-900/50 dark:bg-slate-900"
            >
              <div className="font-mono text-lg font-extrabold text-amber-700 dark:text-amber-400">
                {s.metric}
              </div>
              <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-2 sm:grid-cols-2 text-xs">
          <div className="rounded-lg bg-white/90 border border-slate-200 p-2.5 dark:bg-slate-900 dark:border-slate-800">
            <strong>Membership (19 + 2 Unions):</strong> 19 major economies + <strong>European Union (EU)</strong> +{' '}
            <strong>African Union (AU)</strong> admitted permanently at New Delhi Summit (Sept 2023).
          </div>
          <div className="rounded-lg bg-white/90 border border-slate-200 p-2.5 dark:bg-slate-900 dark:border-slate-800">
            <strong>Key Indian Presidency Priorities:</strong> Voice of Global South, Digital Public Infrastructure
            (UPI/Aadhaar stack), Green Development &amp; LiFE, Women-led Development, Global Biofuels Alliance.
          </div>
        </div>
      </div>
    </div>
  );
}

function PowerSharingDiagram() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Horizontal */}
      <div className="rounded-xl border border-indigo-200 bg-white p-4 space-y-3 dark:border-indigo-900/60 dark:bg-slate-950">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
            1. Horizontal Distribution (Checks &amp; Balances)
          </span>
          <ArrowLeftRight className="h-4 w-4 text-indigo-600" />
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { name: 'Legislature', role: 'Makes laws (Parliament)' },
            { name: 'Executive', role: 'Implements laws (Ministers)' },
            { name: 'Judiciary', role: 'Interprets & checks (Courts)' },
          ].map((o) => (
            <div
              key={o.name}
              className="rounded-lg border border-indigo-200 bg-indigo-50/70 p-2.5 dark:border-indigo-900 dark:bg-indigo-950/30"
            >
              <div className="text-xs font-extrabold text-indigo-900 dark:text-indigo-200">{o.name}</div>
              <div className="text-[10px] text-slate-600 dark:text-slate-400 mt-0.5">{o.role}</div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-slate-600 dark:text-slate-300">
          All three organs sit at the <strong>same level</strong>. Each checks the others so none wields unlimited power.
        </p>
      </div>

      {/* Vertical */}
      <div className="rounded-xl border border-teal-200 bg-white p-4 space-y-2.5 dark:border-teal-900/60 dark:bg-slate-950">
        <div className="text-xs font-extrabold uppercase tracking-wider text-teal-700 dark:text-teal-400">
          2. Vertical Division (Federal Tiers)
        </div>
        <div className="flex flex-col items-center space-y-1.5 text-center">
          <div className="w-full rounded-lg bg-teal-700 px-3 py-1.5 text-xs font-bold text-white">
            Union / Central Government (Entire Country)
          </div>
          <ArrowDown className="h-3.5 w-3.5 text-teal-600" />
          <div className="w-5/6 rounded-lg bg-teal-600 px-3 py-1.5 text-xs font-bold text-white">
            State / Provincial Governments (Regional Level)
          </div>
          <ArrowDown className="h-3.5 w-3.5 text-teal-600" />
          <div className="w-4/6 rounded-lg bg-teal-500 px-3 py-1.5 text-xs font-bold text-white">
            Local Self-Govt (Panchayats &amp; Municipalities)
          </div>
        </div>
      </div>

      {/* Forms 3 & 4 */}
      <div className="md:col-span-2 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-xs dark:border-amber-900/60 dark:bg-amber-950/30">
          <strong className="text-amber-900 dark:text-amber-300">3. Among Social Groups:</strong> Belgium&apos;s{' '}
          <em>Community Government</em> (Dutch/French/German) &amp; India&apos;s <em>Reserved Constituencies</em> give
          minorities &amp; weaker sections a fair voice.
        </div>
        <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-3 text-xs dark:border-rose-900/60 dark:bg-rose-950/30">
          <strong className="text-rose-900 dark:text-rose-300">4. Among Parties &amp; Pressure Groups:</strong> Competition
          ensures power changes hands; alliances form <em>Coalition Governments</em>; trade unions &amp; farmer groups
          influence policy.
        </div>
      </div>
    </div>
  );
}

function IndiaFederalListsAndTiers() {
  return (
    <div className="grid gap-4 lg:grid-cols-12">
      {/* 4 Lists */}
      <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-white p-4 space-y-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Scale className="h-4 w-4" />
          Indian Constitution: 3-Fold Distribution + Residuary Subjects
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2 text-xs">
          <div className="rounded-lg border border-indigo-200 bg-indigo-50/60 p-3 dark:border-indigo-900 dark:bg-indigo-950/30">
            <div className="font-extrabold text-indigo-900 dark:text-indigo-200">1. Union List (Centre Alone)</div>
            <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
              National importance: <strong>Defence, Foreign Affairs, Banking, Communications, Currency</strong>.
            </p>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-3 dark:border-emerald-900 dark:bg-emerald-950/30">
            <div className="font-extrabold text-emerald-900 dark:text-emerald-200">2. State List (States Alone)</div>
            <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
              State &amp; local importance: <strong>Police, Trade, Commerce, Agriculture, Irrigation</strong>.
            </p>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-3 dark:border-amber-900 dark:bg-amber-950/30">
            <div className="font-extrabold text-amber-900 dark:text-amber-200">
              3. Concurrent List (Both — Union Prevails)
            </div>
            <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
              Common interest: <strong>Education, Forest, Trade Unions, Marriage, Adoption, Succession</strong>.
            </p>
          </div>
          <div className="rounded-lg border border-rose-200 bg-rose-50/60 p-3 dark:border-rose-900 dark:bg-rose-950/30">
            <div className="font-extrabold text-rose-900 dark:text-rose-200">
              4. Residuary Subjects (Union Alone)
            </div>
            <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
              New subjects after Constitution: <strong>Computer Software, E-commerce, Cyber Laws</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* 3-Tier Decentralisation */}
      <div className="lg:col-span-5 rounded-xl border border-teal-200 bg-teal-50/50 p-4 space-y-2.5 dark:border-teal-900/60 dark:bg-teal-950/20">
        <div className="text-xs font-extrabold uppercase tracking-wider text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
          <Building2 className="h-4 w-4" />
          1992 Decentralisation Pyramid (3rd Tier)
        </div>
        <div className="space-y-1.5 text-xs">
          <div className="rounded-lg bg-white border border-teal-200 p-2 dark:bg-slate-900 dark:border-teal-900">
            <strong>District Level:</strong> <em>Zilla Parishad</em> (Rural) / <em>Municipal Corporation</em> (Big Cities —{' '}
            <strong>Mayor</strong>)
          </div>
          <div className="rounded-lg bg-white border border-teal-200 p-2 dark:bg-slate-900 dark:border-teal-900">
            <strong>Block / Town Level:</strong> <em>Panchayat Samiti / Mandal</em> (Rural) / <em>Municipality</em> (Towns —{' '}
            <strong>Chairperson</strong>)
          </div>
          <div className="rounded-lg bg-white border border-teal-200 p-2 dark:bg-slate-900 dark:border-teal-900">
            <strong>Village Level:</strong> <em>Gram Panchayat</em> (Ward Panchs + <strong>Sarpanch</strong>), supervised
            by <strong>Gram Sabha</strong> (all adult voters, meets 2–3×/yr)
          </div>
        </div>
        <div className="rounded-lg bg-teal-700 px-3 py-1.5 text-[11px] font-bold text-white flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 shrink-0" />
          1992 Mandatory: Regular polls + SC/ST/OBC + ≥1/3rd Women seats + State EC
        </div>
      </div>
    </div>
  );
}

function CivicsCartoonGallery() {
  const [active, setActive] = useState(0);

  const cartoons = [
    {
      title: '1. The Two-Steering-Wheel Car (German Coalition)',
      chapter: 'Ch 1: Power-sharing',
      visualCue: 'A Volkswagen car labeled "German Government" with TWO steering wheels held by rival drivers.',
      svg: (
        <svg viewBox="0 0 260 110" className="w-full max-w-[260px] mx-auto" aria-label="Two steering wheels car">
          <rect x="30" y="45" width="200" height="36" rx="12" fill="#e0e7ff" stroke="#4338ca" strokeWidth="2.5" />
          <path d="M65 45 L90 20 L175 20 L198 45 Z" fill="#c7d2fe" stroke="#4338ca" strokeWidth="2.5" />
          <circle cx="75" cy="84" r="14" fill="#1e293b" />
          <circle cx="185" cy="84" r="14" fill="#1e293b" />
          <circle cx="106" cy="36" r="8" fill="none" stroke="#dc2626" strokeWidth="2.5" />
          <circle cx="154" cy="36" r="8" fill="none" stroke="#0f766e" strokeWidth="2.5" />
          <text x="106" y="64" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">CDU ←</text>
          <text x="154" y="64" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0f766e">→ SPD</text>
        </svg>
      ),
      meaning:
        'Depicts Germany’s 2005 Grand Coalition between historic rivals Christian Democratic Union (CDU) & Social Democratic Party (SPD) when neither won a clear majority.',
      cbseAnswer:
        'Shows how Coalition Power-Sharing forces rival parties with divergent views to share executive control — making steering harder, yet ensuring stable governance.',
    },
    {
      title: '2. "Reining in Democracy" (Putin & Bush Horse)',
      chapter: 'Ch 1: Power-sharing',
      visualCue: 'Vladimir Putin and George W. Bush riding the "Democracy" horse while pulling tight reins.',
      svg: (
        <svg viewBox="0 0 260 110" className="w-full max-w-[260px] mx-auto" aria-label="Tight rein democracy">
          <rect x="45" y="40" width="170" height="44" rx="10" fill="#fef3c7" stroke="#b45309" strokeWidth="2.5" />
          <text x="130" y="60" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">DEMOCRACY</text>
          <text x="130" y="75" textAnchor="middle" fontSize="9" fill="#b45309">Tight Reins = No Power-Sharing</text>
          <line x1="25" y1="30" x2="70" y2="55" stroke="#dc2626" strokeWidth="3" />
          <line x1="235" y1="30" x2="190" y2="55" stroke="#dc2626" strokeWidth="3" />
          <circle cx="25" cy="24" r="9" fill="#dc2626" />
          <circle cx="235" cy="24" r="9" fill="#dc2626" />
        </svg>
      ),
      meaning:
        'Satirises leaders who expanded central/executive powers (e.g., Russia/USA) while claiming to uphold democracy.',
      cbseAnswer:
        'Concentration of power in one leader or office directly contradicts the core principle of democracy: that people are the source of all political power.',
    },
    {
      title: '3. States Queuing with Begging Bowls (Federalism)',
      chapter: 'Ch 2: Federalism',
      visualCue: 'Chief Ministers holding bowls labelled "More Powers" before a powerful Centre vs. Coalition era.',
      svg: (
        <svg viewBox="0 0 260 110" className="w-full max-w-[260px] mx-auto" aria-label="States queuing for powers">
          <rect x="18" y="18" width="70" height="68" rx="8" fill="#0f766e" />
          <text x="53" y="48" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff">CENTRE</text>
          <text x="53" y="62" textAnchor="middle" fontSize="8" fill="#ccfbf1">Pre-1990</text>
          {[118, 162, 206].map((x, idx) => (
            <g key={x}>
              <circle cx={x} cy="42" r="9" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
              <path d={`M ${x - 12} 66 Q ${x} 80 ${x + 12} 66 Z`} fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" />
              <text x={x} y="96" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#475569">
                State {idx + 1}
              </text>
            </g>
          ))}
        </svg>
      ),
      meaning:
        'Contrasts pre-1990 one-party dominance (when Centre frequently dismissed state governments using Art. 356) with post-1990 Coalition Federalism.',
      cbseAnswer:
        'After 1990, the rise of regional parties and coalition governments at the Centre plus Supreme Court safeguards made India’s federalism genuinely respectful of state autonomy.',
    },
    {
      title: '4. Locked Parliament Gate & Corporate/Caste Vote Banks',
      chapter: 'Ch 3 & 4: Gender & Parties',
      visualCue: 'Male MPs guarding a locked Parliament gate against Women’s Reservation / Voters seen only as caste blocs.',
      svg: (
        <svg viewBox="0 0 260 110" className="w-full max-w-[260px] mx-auto" aria-label="Parliament gate and reservation">
          <rect x="60" y="18" width="140" height="72" rx="10" fill="#ffe4e6" stroke="#be123c" strokeWidth="2.5" />
          <line x1="100" y1="18" x2="100" y2="90" stroke="#be123c" strokeWidth="2" />
          <line x1="130" y1="18" x2="130" y2="90" stroke="#be123c" strokeWidth="2" />
          <line x1="160" y1="18" x2="160" y2="90" stroke="#be123c" strokeWidth="2" />
          <rect x="92" y="42" width="76" height="24" rx="6" fill="#be123c" />
          <text x="130" y="57" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#ffffff">
            33% WOMEN BILL
          </text>
        </svg>
      ),
      meaning:
        'Highlights the gap between women’s low historic share in Parliament/Assemblies and the long delay before the 2023 Women’s Reservation Act (Nari Shakti Vandan Adhiniyam).',
      cbseAnswer:
        'While local bodies reserve 1/3rd seats for women since 1992, parties long resisted giving tickets to women in legislatures; legal quotas are key to equal representation.',
    },
  ];

  const current = cartoons[active];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {cartoons.map((c, idx) => (
          <button
            key={c.title}
            type="button"
            onClick={() => setActive(idx)}
            className={`rounded-lg px-2.5 py-1.5 text-[11px] font-bold transition cursor-pointer ${
              active === idx
                ? 'bg-rose-600 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:border-rose-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
            }`}
          >
            Cartoon {idx + 1}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 grid gap-4 md:grid-cols-12 items-center dark:border-slate-800 dark:bg-slate-950">
        <div className="md:col-span-5 rounded-xl bg-slate-50 border border-slate-200 p-3 dark:bg-slate-900 dark:border-slate-800">
          {current.svg}
          <p className="mt-2 text-[11px] text-center text-slate-500 dark:text-slate-400">
            {current.visualCue}
          </p>
        </div>
        <div className="md:col-span-7 space-y-2 text-xs">
          <span className="inline-block rounded bg-rose-50 px-2 py-0.5 text-[10px] font-extrabold uppercase text-rose-800 dark:bg-rose-950 dark:text-rose-300">
            {current.chapter}
          </span>
          <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">{current.title}</h5>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>Context:</strong> {current.meaning}
          </p>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-2.5 text-emerald-950 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-200">
            <strong>CBSE 1M/2M Model Answer:</strong> {current.cbseAnswer}
          </div>
        </div>
      </div>
    </div>
  );
}

function GermaniaAndMarianneSymbols() {
  const [tab, setTab] = useState<'germania' | 'marianne' | 'bharat'>('germania');

  const germaniaAttributes = [
    {
      symbol: 'Broken chains',
      meaning: 'Being freed',
      tip: 'Emancipation from absolutist monarchies & feudal bondage.',
    },
    {
      symbol: 'Breastplate with eagle',
      meaning: 'Symbol of the German empire — strength',
      tip: 'Often paired with the imperial eagle motif.',
    },
    {
      symbol: 'Crown of oak leaves',
      meaning: 'Heroism',
      tip: 'Classical German oak stands for bravery & sacrifice.',
    },
    {
      symbol: 'Sword',
      meaning: 'Readiness to fight',
      tip: 'In Lorenz Clasen’s 1860 painting: "The German sword protects the German Rhine."',
    },
    {
      symbol: 'Olive branch around the sword',
      meaning: 'Willingness to make peace',
      tip: 'Frequent CBSE Section A trap: Sword alone = fight; Olive branch = peace.',
    },
    {
      symbol: 'Black, red and gold tricolour',
      meaning: 'Flag of the liberal-nationalists in 1848',
      tip: 'Banned by the Dukes of the German states before 1848.',
    },
    {
      symbol: 'Rays of the rising sun',
      meaning: 'Beginning of a new era',
      tip: 'Signals dawn of unified constitutional nationalism.',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
          <Crown className="h-4 w-4" /> Female Allegories &amp; National Iconography (Ch 1 &amp; Ch 2)
        </span>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'germania' as const, label: 'Germania (Germany)' },
            { id: 'marianne' as const, label: 'Marianne (France)' },
            { id: 'bharat' as const, label: 'Bharat Mata (India)' },
          ].map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => setTab(btn.id)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
                tab === btn.id
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'germania' && (
        <div className="grid gap-4 md:grid-cols-12 items-start">
          <div className="md:col-span-4 rounded-xl border border-amber-200 bg-amber-50/50 p-3 dark:border-amber-900/60 dark:bg-amber-950/20">
            <svg viewBox="0 0 220 195" className="w-full h-44">
              {/* Rising sun rays */}
              <circle cx="110" cy="48" r="26" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
              <line x1="110" y1="8" x2="110" y2="20" stroke="#f59e0b" strokeWidth="2" />
              <line x1="72" y1="22" x2="82" y2="30" stroke="#f59e0b" strokeWidth="2" />
              <line x1="148" y1="22" x2="138" y2="30" stroke="#f59e0b" strokeWidth="2" />
              <line x1="60" y1="48" x2="74" y2="48" stroke="#f59e0b" strokeWidth="2" />
              <line x1="146" y1="48" x2="160" y2="48" stroke="#f59e0b" strokeWidth="2" />
              <text x="110" y="51" textAnchor="middle" fontSize="8" fontWeight="800" fill="#92400e">
                NEW ERA SUN
              </text>

              {/* Oak Crown */}
              <path
                d="M78,80 Q110,64 142,80"
                fill="none"
                stroke="#15803d"
                strokeWidth="4"
                strokeDasharray="6 3"
              />
              <text x="110" y="70" textAnchor="middle" fontSize="8" fontWeight="700" fill="#166534">
                Oak Crown (Heroism)
              </text>

              {/* Breastplate & Eagle Shield */}
              <rect x="78" y="88" width="64" height="52" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="2" />
              <text x="110" y="109" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fbbf24">
                EAGLE SHIELD
              </text>
              <text x="110" y="122" textAnchor="middle" fontSize="7.5" fill="#e2e8f0">
                German Empire Strength
              </text>

              {/* 1848 Black-Red-Gold Flag */}
              <rect x="20" y="76" width="38" height="9" fill="#0f172a" />
              <rect x="20" y="85" width="38" height="9" fill="#dc2626" />
              <rect x="20" y="94" width="38" height="9" fill="#eab308" />
              <line x1="20" y1="74" x2="20" y2="148" stroke="#64748b" strokeWidth="2.5" />
              <text x="39" y="114" textAnchor="middle" fontSize="7" fontWeight="700" fill="#475569">
                1848 Flag
              </text>

              {/* Sword + Olive branch */}
              <line x1="176" y1="68" x2="176" y2="144" stroke="#334155" strokeWidth="3.5" />
              <line x1="165" y1="126" x2="187" y2="126" stroke="#334155" strokeWidth="3.5" />
              <path
                d="M170,115 Q186,105 170,95 Q186,85 170,76"
                fill="none"
                stroke="#16a34a"
                strokeWidth="2.5"
              />
              <text x="176" y="156" textAnchor="middle" fontSize="7" fontWeight="700" fill="#166534">
                Sword + Olive
              </text>

              {/* Broken chains */}
              <circle cx="82" cy="170" r="8" fill="none" stroke="#64748b" strokeWidth="2.5" strokeDasharray="16 6" />
              <circle cx="138" cy="170" r="8" fill="none" stroke="#64748b" strokeWidth="2.5" strokeDasharray="16 6" />
              <line x1="92" y1="170" x2="104" y2="170" stroke="#dc2626" strokeWidth="2" />
              <line x1="116" y1="170" x2="128" y2="170" stroke="#dc2626" strokeWidth="2" />
              <text x="110" y="188" textAnchor="middle" fontSize="8" fontWeight="800" fill="#334155">
                Broken Chains = Being Freed
              </text>
            </svg>
            <p className="mt-1 text-[11px] text-amber-900 dark:text-amber-200 leading-relaxed">
              Painted by <strong>Philip Veit (1848)</strong> for St. Paul’s Church, Frankfurt (later <em>The Fallen Germania</em> by Julius Hübner, 1850; <em>Germania Guarding the Rhine</em> by Lorenz Clasen, 1860).
            </p>
          </div>

          <div className="md:col-span-8 grid gap-2 sm:grid-cols-2">
            {germaniaAttributes.map((attr) => (
              <div
                key={attr.symbol}
                className="rounded-xl border border-slate-200 bg-white p-2.5 text-xs dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="font-extrabold text-slate-900 dark:text-white">{attr.symbol}</div>
                <div className="mt-0.5 font-bold text-rose-700 dark:text-rose-400">
                  → {attr.meaning}
                </div>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{attr.tip}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'marianne' && (
        <div className="rounded-xl border border-indigo-200 bg-white p-4 grid gap-4 md:grid-cols-12 items-center dark:border-indigo-900/60 dark:bg-slate-950">
          <div className="md:col-span-4 rounded-xl bg-indigo-50/70 p-3 dark:bg-indigo-950/30">
            <svg viewBox="0 0 200 150" className="w-full h-36">
              {/* Phrygian Red Cap */}
              <path d="M55,75 Q80,22 125,35 Q132,48 118,52 L145,75 Z" fill="#dc2626" />
              <text x="100" y="92" textAnchor="middle" fontSize="9" fontWeight="800" fill="#991b1b">
                Phrygian Red Cap
              </text>
              {/* Tricolour Cockade */}
              <circle cx="52" cy="118" r="18" fill="#1d4ed8" />
              <circle cx="52" cy="118" r="12" fill="#f8fafc" />
              <circle cx="52" cy="118" r="6" fill="#dc2626" />
              <text x="52" y="145" textAnchor="middle" fontSize="8" fontWeight="700" fill="#1e293b">
                Cockade
              </text>
              {/* Tricolour Flag */}
              <rect x="108" y="102" width="20" height="28" fill="#1d4ed8" />
              <rect x="128" y="102" width="20" height="28" fill="#ffffff" stroke="#cbd5e1" />
              <rect x="148" y="102" width="20" height="28" fill="#dc2626" />
              <text x="138" y="145" textAnchor="middle" fontSize="8" fontWeight="700" fill="#1e293b">
                French Tricolour
              </text>
            </svg>
          </div>
          <div className="md:col-span-8 space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <h5 className="text-sm font-extrabold text-indigo-900 dark:text-indigo-300">
              Marianne — Female Allegory of the French Republic
            </h5>
            <ul className="space-y-1.5 list-disc pl-4">
              <li>
                <strong>Popular Christian Name:</strong> Named <em>Marianne</em> to underline the idea of a <strong>people’s nation</strong> rather than a dynastic monarchy.
              </li>
              <li>
                <strong>3 Attributes Drawn from Liberty &amp; the Republic:</strong> The <strong>red cap</strong> (Phrygian liberty cap), the <strong>tricolour</strong>, and the <strong>cockade</strong>.
              </li>
              <li>
                <strong>Public Memory &amp; Everyday Circulation:</strong> Statues erected in <strong>public squares</strong> to remind citizens of national unity; Marianne images printed on <strong>postage stamps and coins</strong> (e.g., 1850 stamp).
              </li>
            </ul>
          </div>
        </div>
      )}

      {tab === 'bharat' && (
        <div className="grid gap-3 md:grid-cols-3 text-xs">
          <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-3.5 dark:border-orange-900/60 dark:bg-orange-950/20">
            <div className="font-extrabold text-orange-900 dark:text-orange-300">
              1870s: Bankim Chandra Chattopadhyay
            </div>
            <p className="mt-1.5 text-slate-700 dark:text-slate-300 leading-relaxed">
              First visualised India as Bharat Mata and wrote the hymn <em>Vande Mataram</em> as a tribute to the motherland (later included in his novel <strong>Anandamath</strong> and sung widely during the Swadeshi movement in Bengal).
            </p>
          </div>
          <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-3.5 dark:border-teal-900/60 dark:bg-teal-950/20">
            <div className="font-extrabold text-teal-900 dark:text-teal-300">
              1905: Abanindranath Tagore
            </div>
            <p className="mt-1.5 text-slate-700 dark:text-slate-300 leading-relaxed">
              Moved by the Swadeshi movement, painted Bharat Mata as an <strong>ascetic figure</strong> — calm, composed, divine, and spiritual — holding mala beads and dispensing learning, food, and clothing.
            </p>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-3.5 dark:border-rose-900/60 dark:bg-rose-950/20">
            <div className="font-extrabold text-rose-900 dark:text-rose-300">
              Later Popular Mass Prints
            </div>
            <p className="mt-1.5 text-slate-700 dark:text-slate-300 leading-relaxed">
              As cheap prints circulated, Bharat Mata acquired varied forms — depicted carrying a <strong>trishul</strong> and standing beside a <strong>lion and an elephant</strong>, both symbols of power and authority.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function EuropeanUnificationLanes() {
  const [focus, setFocus] = useState<'all' | 'germany' | 'italy' | 'britain'>('all');

  const lanes = [
    {
      id: 'germany' as const,
      title: 'Germany (1866–1871)',
      badge: 'Prussian Army & Bureaucracy',
      color: 'border-amber-200 bg-amber-50/40 dark:border-amber-900/60 dark:bg-amber-950/20',
      headerColor: 'text-amber-900 dark:text-amber-300',
      steps: [
        '1848 Failure: Liberal middle-class Frankfurt Parliament suppressed by monarchy, military & Prussian Junkers (large landowners).',
        'Architect: Prussian Chief Minister Otto von Bismarck led unification using the Prussian army and bureaucracy.',
        '3 Wars in 7 Years: Defeated Denmark, Austria, and France — ending in Prussian victory.',
        '18 Jan 1871: Prussian King Kaiser William I proclaimed German Emperor in the Hall of Mirrors, Palace of Versailles.',
        'Post-1871 Standardisation: Prussia-led Germany modernised currency, banking, legal, and judicial systems.',
      ],
    },
    {
      id: 'italy' as const,
      title: 'Italy (1859–1861)',
      badge: '4 Architects • 7 Divided States',
      color: 'border-emerald-200 bg-emerald-50/40 dark:border-emerald-900/60 dark:bg-emerald-950/20',
      headerColor: 'text-emerald-900 dark:text-emerald-300',
      steps: [
        'Mid-19th c. Fragmentation: 7 states; ONLY Sardinia-Piedmont ruled by an Italian princely house (North = Austrian Habsburgs; Centre = Pope; South = Bourbon Kings of Spain).',
        'Giuseppe Mazzini: 1830s revolutionary vision; founded secret society Young Italy; 1831 & 1848 uprisings failed.',
        'Chief Minister Cavour: Not a democrat or revolutionary; spoke French better than Italian; struck diplomatic alliance with France and defeated Austrian forces in 1859.',
        'Giuseppe Garibaldi: 1860 — led armed volunteers ("Red Shirts") into South Italy & Kingdom of Two Sicilies, winning local peasant support to oust Spanish rulers.',
        '1861 Culmination: Victor Emmanuel II proclaimed King of united Italy (many illiterate peasants ironically mistook "La Talia" for the King’s wife!).',
      ],
    },
    {
      id: 'britain' as const,
      title: 'Strange Case of Britain (1688–1801)',
      badge: 'Gradual Parliamentary Forging',
      color: 'border-indigo-200 bg-indigo-50/40 dark:border-indigo-900/60 dark:bg-indigo-950/20',
      headerColor: 'text-indigo-900 dark:text-indigo-300',
      steps: [
        'Long-Drawn-Out Process: Unlike France/Germany, NO sudden revolution or upheaval created the British nation-state.',
        '1688 Shift: English Parliament seized power from the monarchy after prolonged conflict.',
        '1707 Act of Union: United England & Scotland into "United Kingdom of Great Britain" — English dominance suppressed Scottish Highlanders’ Gaelic language & national dress.',
        '1801 Ireland Forcibly Incorporated: Catholic majority suppressed with British support for Protestants; 1798 Wolfe Tone & United Irishmen revolt crushed.',
        'Forcing "Britishness": Propagated Union Jack flag, "God Save Our Noble King" anthem & English language.',
      ],
    },
  ];

  const visibleLanes = focus === 'all' ? lanes : lanes.filter((l) => l.id === focus);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
          <Compass className="h-4 w-4 text-rose-600" /> Three Pathways to Nation-State Formation (Ch 1)
        </span>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'all' as const, label: 'Compare All 3' },
            { id: 'germany' as const, label: 'Germany' },
            { id: 'italy' as const, label: 'Italy' },
            { id: 'britain' as const, label: 'Britain' },
          ].map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => setFocus(btn.id)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
                focus === btn.id
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className={`grid gap-3 ${visibleLanes.length > 1 ? 'md:grid-cols-3' : 'grid-cols-1'}`}>
        {visibleLanes.map((lane) => (
          <div key={lane.id} className={`rounded-xl border p-3.5 space-y-2.5 ${lane.color}`}>
            <div>
              <span className="inline-block rounded bg-white/80 px-2 py-0.5 text-[10px] font-extrabold text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                {lane.badge}
              </span>
              <h5 className={`mt-1 text-sm font-extrabold ${lane.headerColor}`}>{lane.title}</h5>
            </div>
            <ol className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {lane.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white dark:bg-slate-200 dark:text-slate-900">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

function IndianMovementTimelineArc() {
  const [phase, setPhase] = useState<'all' | 'early' | 'ncm' | 'cdm'>('all');
  const [selectedIdx, setSelectedIdx] = useState<number>(4);

  const milestones = [
    {
      date: 'Jan 1915',
      phase: 'early' as const,
      title: 'Mahatma Gandhi returns from South Africa',
      place: 'India (National)',
      detail:
        'Brought the tested technique of Satyagraha — non-violent insistence on truth appealing to the oppressor’s conscience rather than physical force.',
    },
    {
      date: '1917',
      phase: 'early' as const,
      title: 'Champaran Indigo Satyagraha',
      place: 'Champaran District, Bihar (CBSE Map Pin)',
      detail:
        'Inspiring Bihar indigo peasants to struggle against the oppressive European plantation (tinkathia) system.',
    },
    {
      date: '1917',
      phase: 'early' as const,
      title: 'Kheda Peasant Revenue Satyagraha',
      place: 'Kheda District, Gujarat (CBSE Map Pin)',
      detail:
        'Supported Kheda peasants hit by crop failure and plague epidemic who demanded relaxation in British land-revenue collection.',
    },
    {
      date: '1918',
      phase: 'early' as const,
      title: 'Ahmedabad Cotton Mill Workers Satyagraha',
      place: 'Ahmedabad, Gujarat (CBSE Map Pin)',
      detail:
        'Organised cotton mill workers demanding fair plague-bonus & wage hike.',
    },
    {
      date: 'Mar–13 Apr 1919',
      phase: 'early' as const,
      title: 'Rowlatt Act & Jallianwala Bagh Massacre',
      place: 'Amritsar, Punjab (CBSE Map Pin)',
      detail:
        'Rowlatt Act permitted detention without trial for 2 years. Martial law imposed in Amritsar; on 13 Apr 1919 (Baisakhi), General Dyer blocked exits and fired on peaceful villagers to "produce a moral effect" of terror.',
    },
    {
      date: 'Sep & Dec 1920',
      phase: 'ncm' as const,
      title: 'Calcutta (Sep) & Nagpur (Dec) Congress Sessions',
      place: 'Calcutta & Nagpur (CBSE Map Pins)',
      detail:
        'At Calcutta (Sep 1920), Gandhiji convinced leaders to back NCM alongside Khilafat (Ali brothers); at Nagpur (Dec 1920), compromise was worked out and the Non-Cooperation programme was formally adopted.',
    },
    {
      date: 'Jan 1921',
      phase: 'ncm' as const,
      title: 'Non-Cooperation–Khilafat Movement Launched',
      place: 'Towns, Awadh, Gudem Hills & Assam',
      detail:
        'Joined by urban students/lawyers, Baba Ramchandra’s Awadh peasants, Alluri Sitaram Raju’s Gudem tribals (guerrilla struggle), and Assam tea plantation workers (defying Inland Emigration Act 1859).',
    },
    {
      date: 'Feb 1922',
      phase: 'ncm' as const,
      title: 'Chauri Chaura Incident — NCM Withdrawn',
      place: 'Chauri Chaura, Gorakhpur, UP (CBSE Map Pin)',
      detail:
        'Peaceful demonstration turned violent in a bazaar; police station set ablaze (22 policemen killed). Gandhiji halted NCM sensing satyagrahis needed training before mass struggles.',
    },
    {
      date: '1928–Dec 1929',
      phase: 'cdm' as const,
      title: 'Simon Commission ("Go Back Simon") & Lahore Purna Swaraj',
      place: 'Lahore (Dec 1929 Congress Session)',
      detail:
        'All-British Statutory Commission greeted with "Go Back Simon" (1928). In Dec 1929 under Jawaharlal Nehru, Lahore Congress formalised Purna Swaraj and fixed 26 January 1930 as Independence Day.',
    },
    {
      date: '12 Mar–6 Apr 1930',
      phase: 'cdm' as const,
      title: 'Dandi Salt March — Civil Disobedience Begins',
      place: 'Sabarmati Ashram to Dandi, Gujarat (CBSE Map Pin)',
      detail:
        '240 miles walked over 24 days with 78 trusted volunteers (~10 miles/day). Breaking the salt law at Dandi (6 Apr 1930) launched CDM: not just non-cooperation, but active breaking of colonial laws.',
    },
    {
      date: '5 Mar 1931 & Sep 1932',
      phase: 'cdm' as const,
      title: 'Gandhi–Irwin Pact (1931) & Poona Pact (1932)',
      place: 'London (2nd RTC) & Yerwada Jail, Poona',
      detail:
        'Gandhi–Irwin Pact suspended CDM for 2nd Round Table Conference. Later, Dr. B.R. Ambedkar’s demand for separate Dalit electorates led to Gandhiji’s fast unto death and the Sep 1932 Poona Pact (reserved seats via general electorate).',
    },
  ];

  const filtered =
    phase === 'all' ? milestones : milestones.filter((m) => m.phase === phase);
  const active = filtered[selectedIdx] ?? filtered[0];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
          <Flag className="h-4 w-4 text-rose-600" /> Interactive Chronology Ribbon (1915–1932)
        </span>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'all' as const, label: 'Full Timeline (11)' },
            { id: 'early' as const, label: '1915–1919 Early Satyagraha' },
            { id: 'ncm' as const, label: '1920–1922 Non-Cooperation' },
            { id: 'cdm' as const, label: '1928–1932 Civil Disobedience' },
          ].map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => {
                setPhase(btn.id);
                setSelectedIdx(0);
              }}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
                phase === btn.id
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {filtered.map((item, idx) => {
          const isCurrent = active.date === item.date && active.title === item.title;
          return (
            <button
              key={`${item.date}-${item.title}`}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`rounded-lg border px-2.5 py-1.5 text-left text-[11px] font-bold transition cursor-pointer ${
                isCurrent
                  ? 'border-rose-500 bg-rose-50 text-rose-900 dark:border-rose-500 dark:bg-rose-950/50 dark:text-rose-200'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300'
              }`}
            >
              <span className="font-mono text-rose-700 dark:text-rose-400">{item.date}</span>
              <span className="ml-1.5">{item.title.split('—')[0].slice(0, 26)}</span>
            </button>
          );
        })}
      </div>

      {active && (
        <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2 text-xs dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-2.5 py-0.5 font-mono text-[11px] font-extrabold text-rose-900 dark:bg-rose-950 dark:text-rose-300">
              <ScrollText className="h-3 w-3" /> {active.date}
            </span>
            <span className="rounded bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-900 dark:bg-amber-950/60 dark:text-amber-300">
              {active.place}
            </span>
          </div>
          <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">{active.title}</h5>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{active.detail}</p>
        </div>
      )}
    </div>
  );
}

function SoilProfileAndIndiaZones() {
  const [tab, setTab] = useState<'profile' | 'soils'>('profile');
  const [selectedSoil, setSelectedSoil] = useState<string>('alluvial');

  const soilTypes = [
    {
      id: 'alluvial',
      name: 'Alluvial Soil',
      badge: 'Northern Plains + E. Coastal Deltas',
      swatch: 'bg-amber-200 border-amber-400',
      features:
        'Most widespread & fertile (Indus–Ganga–Brahmaputra + Mahanadi, Godavari, Krishna, Kaveri deltas). Age subtypes: Bangar (old, more kankar nodules, slightly less fertile) vs. Khadar (new, finer particles, more fertile). Upper piedmont plains: Duars, Chos & Terai.',
      nutrientsCrops:
        'Adequate potash, phosphoric acid & lime; ideal for Sugarcane, Paddy, Wheat, Cereals & Pulses.',
    },
    {
      id: 'black',
      name: 'Black Soil (Regur)',
      badge: 'Deccan Trap Basalt',
      swatch: 'bg-slate-800 border-slate-950',
      features:
        'Made of lava flows over Deccan trap (Maharashtra, Saurashtra, Malwa, MP, Chhattisgarh). Extremely clayey; famous for moisture-holding capacity. Develops deep cracks in hot weather aiding proper aeration, and turns sticky when wet.',
      nutrientsCrops:
        'Rich in calcium carbonate, magnesium, potash & lime; POOR in phosphoric content. Ideal for Cotton ("Black Cotton Soil").',
    },
    {
      id: 'red',
      name: 'Red & Yellow Soil',
      badge: 'Low-Rainfall E & S Deccan',
      swatch: 'bg-orange-600 border-orange-800',
      features:
        'Develops on crystalline igneous rocks in areas of low rainfall in eastern & southern Deccan Plateau (Odisha, Chhattisgarh, southern Middle Ganga plain, Western Ghats piedmont). Red colour comes from iron diffusion in crystalline/metamorphic rocks; looks YELLOW in hydrated form.',
      nutrientsCrops:
        'Supports millets, pulses, groundnut, and tobacco under proper fertilisation & irrigation.',
    },
    {
      id: 'laterite',
      name: 'Laterite Soil',
      badge: 'High Temp + Heavy Rain Leaching',
      swatch: 'bg-rose-700 border-rose-900',
      features:
        'From Latin "later" = brick. Develops under tropical/subtropical climate with alternate wet & dry seasons via intense leaching from heavy rain. Deep to very deep, acidic (pH < 6.0), generally deficient in plant nutrients (humus-rich in evergreen forests, humus-poor in sparse vegetation).',
      nutrientsCrops:
        'Prone to erosion unless terraced: Tea & Coffee in Karnataka, Kerala & Tamil Nadu; Red laterite supports Cashew nut in Tamil Nadu, Andhra Pradesh & Kerala.',
    },
    {
      id: 'arid',
      name: 'Arid Soil',
      badge: 'Western Rajasthan',
      swatch: 'bg-yellow-300 border-yellow-500',
      features:
        'Ranges from red to brown, generally sandy in texture and saline in nature (common salt obtained by evaporating water in some areas). Dry climate & high temperature cause fast evaporation; lacks humus & moisture. Lower horizons contain KANKAR nodules from rising downward calcium content, restricting water infiltration.',
      nutrientsCrops:
        'After proper irrigation (e.g., Indira Gandhi Canal in W. Rajasthan), becomes cultivable for bajra, pulses & cotton.',
    },
    {
      id: 'forest',
      name: 'Forest Soil',
      badge: 'Hilly & Mountainous Areas',
      swatch: 'bg-emerald-700 border-emerald-900',
      features:
        'Texture varies with mountain environment: loamy and silty in valley sides, and coarse grained in upper slopes. In snow-covered Himalayan areas, these soils experience denudation and are acidic with low humus content; river-terrace & alluvial-fan soils in lower valleys are fertile.',
      nutrientsCrops:
        'Supports temperate fruits, spices, maize, tea, and forest cover.',
    },
  ];

  const activeSoil = soilTypes.find((s) => s.id === selectedSoil) ?? soilTypes[0];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
          <Layers className="h-4 w-4" /> Soil Profile Horizons &amp; 6 Indian Soil Zones (Ch 1)
        </span>
        <div className="flex gap-1.5">
          {[
            { id: 'profile' as const, label: 'Soil Profile (4 Layers)' },
            { id: 'soils' as const, label: '6 India Soil Types (CBSE Map)' },
          ].map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setTab(b.id)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
                tab === b.id
                  ? 'bg-emerald-700 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'profile' && (
        <div className="grid gap-4 md:grid-cols-12 items-center rounded-xl border border-emerald-200 bg-white p-4 dark:border-emerald-900/60 dark:bg-slate-950">
          <div className="md:col-span-6">
            <svg viewBox="0 0 320 205" className="w-full h-48 rounded-lg border border-slate-200 dark:border-slate-800">
              {/* Horizon 1: Topsoil */}
              <rect x="10" y="10" width="300" height="40" rx="4" fill="#78350f" />
              <text x="160" y="28" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fef3c7">
                1. Topsoil (Upper Soil Layer)
              </text>
              <text x="160" y="42" textAnchor="middle" fontSize="8" fill="#fde68a">
                Rich in humus, roots &amp; living organisms
              </text>

              {/* Horizon 2: Subsoil */}
              <rect x="10" y="54" width="300" height="42" rx="4" fill="#b45309" />
              <text x="160" y="72" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff">
                2. Subsoil (Weathered Rocks, Sand &amp; Silt Clay)
              </text>
              <text x="160" y="86" textAnchor="middle" fontSize="8" fill="#fef3c7">
                Lower organic matter; mineral accumulation
              </text>

              {/* Horizon 3: Substratum */}
              <rect x="10" y="100" width="300" height="42" rx="4" fill="#78716c" />
              <text x="160" y="118" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff">
                3. Substratum (Weathered Parent Rock Material)
              </text>
              <text x="160" y="132" textAnchor="middle" fontSize="8" fill="#e7e5e4">
                Broken rock fragments awaiting further weathering
              </text>

              {/* Horizon 4: Bedrock */}
              <rect x="10" y="146" width="300" height="48" rx="4" fill="#334155" />
              <text x="160" y="167" textAnchor="middle" fontSize="10" fontWeight="800" fill="#f8fafc">
                4. Unweathered Parent Bed Rock
              </text>
              <text x="160" y="182" textAnchor="middle" fontSize="8" fill="#cbd5e1">
                Solid base rock determining mineral composition
              </text>
            </svg>
          </div>
          <div className="md:col-span-6 space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <h5 className="text-sm font-extrabold text-emerald-900 dark:text-emerald-300">
              5 Key Factors of Soil Formation (NCERT Figure 1.5)
            </h5>
            <ul className="space-y-1.5 list-disc pl-4 leading-relaxed">
              <li>
                <strong>Relief, Parent Rock / Bed Rock, Climate, Vegetation &amp; Other Forms of Life, and Time</strong> shape every soil profile.
              </li>
              <li>
                Forces of nature — temperature change, running water, wind, glaciers, and decomposers — act over millions of years to produce even a few centimetres of topsoil.
              </li>
              <li>
                <strong>Classification Basis in India:</strong> Colour, thickness, texture, age, chemical and physical properties yield 6 major Indian soil groups (Map Identification).
              </li>
            </ul>
          </div>
        </div>
      )}

      {tab === 'soils' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {soilTypes.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedSoil(s.id)}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-bold transition cursor-pointer ${
                  selectedSoil === s.id
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-950 dark:border-emerald-500 dark:bg-emerald-950/50 dark:text-emerald-200'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300'
                }`}
              >
                <span className={`inline-block h-3 w-3 rounded-full border ${s.swatch}`} />
                {s.name}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2 text-xs dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">
                {activeSoil.name}
              </h5>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">
                {activeSoil.badge}
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Formation &amp; Properties:</strong> {activeSoil.features}
            </p>
            <div className="rounded-lg bg-amber-50/80 border border-amber-200 p-2.5 text-amber-950 dark:bg-amber-950/30 dark:border-amber-900/60 dark:text-amber-200">
              <strong>Nutrients &amp; Major Crops:</strong> {activeSoil.nutrientsCrops}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function RainwaterHarvestingAndDams() {
  const [tab, setTab] = useState<'harvesting' | 'dams'>('harvesting');

  const dams = [
    { name: 'Salal', river: 'Chenab', state: 'Jammu & Kashmir (North-most pin)' },
    { name: 'Bhakra Nangal', river: 'Sutlej (Satluj)', state: 'Himachal Pradesh / Punjab border' },
    { name: 'Tehri', river: 'Bhagirathi (Ganga)', state: 'Uttarakhand (Himalayan belt)' },
    { name: 'Rana Pratap Sagar', river: 'Chambal', state: 'Rajasthan (South-East, Kota region)' },
    { name: 'Sardar Sarovar', river: 'Narmada', state: 'Gujarat (Eastern Gujarat)' },
    { name: 'Hirakud', river: 'Mahanadi', state: 'Odisha (Western/Sambalpur region)' },
    { name: 'Nagarjuna Sagar', river: 'Krishna', state: 'Telangana / Andhra Pradesh border' },
    { name: 'Tungabhadra', river: 'Tungabhadra (Krishna trib.)', state: 'Karnataka (Central-East)' },
  ];

  const systems = [
    {
      title: 'Guls or Kuls',
      region: 'Western Himalayas (Hills & Mountains)',
      detail: 'Diversion channels built by hill/mountain communities to carry glacial & stream water for agriculture.',
    },
    {
      title: 'Khadins & Johads',
      region: 'Arid/Semi-Arid Rajasthan (Jaisalmer & other parts)',
      detail: 'Agricultural fields converted into rain-fed storage structures moistening soil naturally for crops.',
    },
    {
      title: 'Underground Tankas (Palar Pani)',
      region: 'Bikaner, Phalodi & Barmer (Semi-Arid Rajasthan)',
      detail:
        'Big underground room-sized cisterns connected to sloping roofs via pipes. First shower cleans roof/pipes; stored rain ("palar pani") is India’s purest natural water and cools underground living rooms in summer.',
    },
    {
      title: 'Bamboo Drip Irrigation',
      region: 'Meghalaya (200-Year-Old System)',
      detail:
        'Perennial hill springs (18–20 L/min) tapped via split-bamboo channels over hundreds of metres, delivering 20–80 drops per minute straight to plant roots.',
    },
    {
      title: 'Gendathur (Mysuru) & Tamil Nadu Law',
      region: 'Karnataka & Tamil Nadu',
      detail:
        'Gendathur: ~200 households harvest ~1,00,000 L annually per home (50,000 L net use @ 80% collection efficiency). Tamil Nadu is the FIRST Indian state making rooftop rainwater harvesting compulsory for all houses nationwide.',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-sky-800 dark:text-sky-300 uppercase tracking-wider">
          <Droplets className="h-4 w-4" /> Rainwater Harvesting Mechanics &amp; 8 Map Dams (Ch 3)
        </span>
        <div className="flex gap-1.5">
          {[
            { id: 'harvesting' as const, label: 'Rooftop Tanka & Traditional Systems' },
            { id: 'dams' as const, label: 'All 8 CBSE Map Dams' },
          ].map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setTab(b.id)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
                tab === b.id
                  ? 'bg-sky-700 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'harvesting' && (
        <div className="space-y-3">
          <div className="rounded-xl border border-sky-200 bg-white p-3.5 dark:border-sky-900/60 dark:bg-slate-950">
            <svg viewBox="0 0 360 110" className="w-full h-28">
              {/* Sloping Roof */}
              <polygon points="15,42 95,12 135,42" fill="#0369a1" />
              <text x="75" y="33" textAnchor="middle" fontSize="8" fontWeight="800" fill="#ffffff">
                Sloping Rooftop
              </text>
              {/* Pipe to filter */}
              <path d="M135,42 L155,42 L155,70 L180,70" fill="none" stroke="#0284c7" strokeWidth="4" />
              {/* Filter box */}
              <rect x="180" y="54" width="60" height="32" rx="5" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
              <text x="210" y="68" textAnchor="middle" fontSize="8" fontWeight="800" fill="#92400e">
                Sand &amp; Brick
              </text>
              <text x="210" y="79" textAnchor="middle" fontSize="7.5" fill="#78350f">
                Filter Chamber
              </text>
              {/* Pipe to Tanka */}
              <line x1="240" y1="70" x2="268" y2="70" stroke="#0284c7" strokeWidth="4" />
              {/* Underground Tanka */}
              <rect x="268" y="45" width="78" height="52" rx="6" fill="#0ea5e9" fillOpacity="0.2" stroke="#0369a1" strokeWidth="2" />
              <text x="307" y="66" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#0c4a6e">
                Tanka / Sump
              </text>
              <text x="307" y="79" textAnchor="middle" fontSize="7" fill="#0369a1">
                Palar Pani Storage
              </text>
              <text x="307" y="90" textAnchor="middle" fontSize="7" fill="#0369a1">
                + Borewell Recharge
              </text>
              <text x="75" y="62" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#475569">
                First shower discarded
              </text>
              <text x="75" y="73" textAnchor="middle" fontSize="7.5" fill="#475569">
                to clean roof &amp; pipes
              </text>
            </svg>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 text-xs">
            {systems.map((sys) => (
              <div
                key={sys.title}
                className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="text-[10px] font-extrabold uppercase text-sky-700 dark:text-sky-400">
                  {sys.region}
                </div>
                <div className="mt-0.5 font-extrabold text-slate-900 dark:text-white">
                  {sys.title}
                </div>
                <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {sys.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'dams' && (
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4 text-xs">
          {dams.map((d, i) => (
            <div
              key={d.name}
              className="rounded-xl border border-sky-200 bg-white p-3 space-y-1 dark:border-sky-900/60 dark:bg-slate-950"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-extrabold text-sky-700 dark:text-sky-400">
                  DAM #{i + 1}
                </span>
                <span className="rounded bg-sky-50 px-1.5 py-0.5 text-[10px] font-bold text-sky-900 dark:bg-sky-950 dark:text-sky-300">
                  {d.river}
                </span>
              </div>
              <div className="text-sm font-extrabold text-slate-900 dark:text-white">{d.name}</div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400">{d.state}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CroppingSeasonsWheel() {
  const [tab, setTab] = useState<'seasons' | 'crops'>('seasons');
  const [cropFilter, setCropFilter] = useState<'all' | 'Kharif' | 'Rabi' | 'Annual'>('all');

  const crops = [
    { name: 'Rice (Kharif Staple)', season: 'Kharif', tempRain: '>25°C | >100 cm rain | Alluvial plains/deltas', states: 'WB, UP, Punjab, Haryana, Odisha, Bihar (3 crops: Aus, Aman, Boro)' },
    { name: 'Wheat (2nd Cereal)', season: 'Rabi', tempRain: 'Cool growing season + bright sunshine ripening | 50–75 cm rain', states: 'Punjab, Haryana, UP, MP, Bihar, Rajasthan' },
    { name: 'Millets (Jowar, Bajra, Ragi)', season: 'Kharif', tempRain: 'Rain-fed coarse grains (Ragi = rich in iron & calcium)', states: 'Jowar: MH, KA; Bajra: RJ, UP, MH; Ragi: KA, TN, HP' },
    { name: 'Maize', season: 'Kharif', tempRain: '21°C–27°C | Old alluvial soil (grown in Rabi in Bihar)', states: 'KA, MP, UP, Bihar, AP, Telangana' },
    { name: 'Sugarcane', season: 'Annual', tempRain: '21°C–27°C | 75–100 cm | Needs nearly a full year', states: 'UP, MH, KA, TN, AP, Bihar, Punjab' },
    { name: 'Tea (Beverage)', season: 'Annual', tempRain: 'Deep fertile humus-rich soil + warm moist frost-free climate', states: 'Assam, Darjeeling & Jalpaiguri (WB), TN, Kerala' },
    { name: 'Coffee (Arabica)', season: 'Annual', tempRain: 'Cool tropical highlands (Arabica brought from Yemen)', states: 'Nilgiris in Karnataka, Kerala & Tamil Nadu (Baba Budan Hills)' },
    { name: 'Rubber (Equatorial)', season: 'Annual', tempRain: '>25°C | >200 cm rain | Moist & humid conditions', states: 'Kerala, Tamil Nadu, Karnataka, A&N Islands, Garo Hills (Meghalaya)' },
    { name: 'Cotton (Fibre)', season: 'Kharif', tempRain: 'Black soil (Deccan) | High temp, light rain, 210 frost-free days', states: 'Maharashtra, Gujarat, MP, Karnataka, AP, Telangana, Punjab, Haryana' },
    { name: 'Jute (Golden Fibre)', season: 'Kharif', tempRain: 'High temp | Well-drained fertile floodplain soil renewed yearly', states: 'West Bengal, Bihar, Assam, Odisha, Meghalaya' },
  ];

  const visibleCrops = cropFilter === 'all' ? crops : crops.filter((c) => c.season === cropFilter);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-lime-800 dark:text-lime-300 uppercase tracking-wider">
          <Sprout className="h-4 w-4" /> Indian Cropping Seasons &amp; Crop Climate Matrix (Ch 4)
        </span>
        <div className="flex gap-1.5">
          {[
            { id: 'seasons' as const, label: 'Rabi • Kharif • Zaid Wheel' },
            { id: 'crops' as const, label: '10 Crop Climate & State Cards' },
          ].map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setTab(b.id)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
                tab === b.id
                  ? 'bg-lime-700 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'seasons' && (
        <div className="grid gap-3 md:grid-cols-3 text-xs">
          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-3.5 space-y-1.5 dark:border-amber-900/60 dark:bg-amber-950/20">
            <div className="font-mono text-[10px] font-extrabold text-amber-800 dark:text-amber-300">
              OCT–DEC SOWING → APR–JUN HARVEST
            </div>
            <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">Rabi Season</h5>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Crops:</strong> Wheat, barley, peas, gram, mustard. Winter precipitation from western temperate cyclones &amp; Green Revolution (Punjab, Haryana, W. UP) ensure high yields.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3.5 space-y-1.5 dark:border-emerald-900/60 dark:bg-emerald-950/20">
            <div className="font-mono text-[10px] font-extrabold text-emerald-800 dark:text-emerald-300">
              JUN–JUL MONSOON → SEP–OCT HARVEST
            </div>
            <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">Kharif Season</h5>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Crops:</strong> Paddy (<em>Aus, Aman, Boro</em> in Assam/WB/Odisha), maize, jowar, bajra, tur (arhar), moong, urad, cotton, jute, groundnut, soyabean.
            </p>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-3.5 space-y-1.5 dark:border-rose-900/60 dark:bg-rose-950/20">
            <div className="font-mono text-[10px] font-extrabold text-rose-800 dark:text-rose-300">
              MAR–JUN SHORT SUMMER WINDOW
            </div>
            <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">Zaid Season</h5>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Crops:</strong> Watermelon, muskmelon, cucumber, vegetables &amp; fodder crops grown in the short summer gap between Rabi and Kharif. (Sugarcane takes almost an entire year!).
            </p>
          </div>
        </div>
      )}

      {tab === 'crops' && (
        <div className="space-y-2.5">
          <div className="flex flex-wrap gap-1.5">
            {(['all', 'Kharif', 'Rabi', 'Annual'] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setCropFilter(f)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
                  cropFilter === f
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {f === 'all' ? 'All Crops (10)' : f}
              </button>
            ))}
          </div>
          <div className="grid gap-2 sm:grid-cols-2 text-xs">
            {visibleCrops.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-slate-200 bg-white p-3 space-y-1 dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-extrabold text-slate-900 dark:text-white">{c.name}</span>
                  <span className="rounded bg-lime-100 px-2 py-0.5 text-[10px] font-bold text-lime-900 dark:bg-lime-950 dark:text-lime-300">
                    {c.season}
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300">{c.tempRain}</div>
                <div className="text-[11px] font-semibold text-emerald-800 dark:text-emerald-400">
                  Producers: {c.states}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CoastlinePortsAndAirports() {
  const [tab, setTab] = useState<'ports' | 'airports'>('ports');

  const westPorts = [
    { name: 'Kandla (Deendayal)', state: 'Gujarat', clue: 'Tidal port in Kuchchh; first developed after Independence to ease Mumbai after Karachi went to Pakistan.' },
    { name: 'Mumbai', state: 'Maharashtra', clue: 'Biggest port with a spacious natural and well-sheltered harbour.' },
    { name: 'Marmagao', state: 'Goa', clue: 'Premier iron ore exporting port (~50% of India’s iron ore export).' },
    { name: 'New Mangalore', state: 'Karnataka', clue: 'Exports iron ore concentrates from Kudremukh mines.' },
    { name: 'Kochi (Kochchi)', state: 'Kerala', clue: 'Extreme south-western port located at the entrance of a lagoon with a natural harbour.' },
  ];

  const eastPorts = [
    { name: 'Tuticorin (Thoothukudi)', state: 'Tamil Nadu', clue: 'Extreme south-eastern port; natural harbour & rich hinterland.' },
    { name: 'Chennai', state: 'Tamil Nadu', clue: 'One of the oldest artificial ports in India (ranks next to Mumbai in trade volume).' },
    { name: 'Vishakhapatnam', state: 'Andhra Pradesh', clue: 'Deepest landlocked and well-protected port (originally iron-ore export outlet).' },
    { name: 'Paradwip (Paradip)', state: 'Odisha', clue: 'Major port specialising in export of iron ore.' },
    { name: 'Haldia', state: 'West Bengal', clue: 'Developed as a subsidiary riverine port to relieve growing pressure on Kolkata port.' },
  ];

  const airports = [
    { city: 'Amritsar', officialName: 'Raja Sansi (Sri Guru Ram Dass Jee)', state: 'Punjab (NW Border)' },
    { city: 'Delhi', officialName: 'Indira Gandhi International', state: 'NCR Delhi' },
    { city: 'Mumbai', officialName: 'Chhatrapati Shivaji Maharaj International', state: 'Maharashtra (West Coast)' },
    { city: 'Chennai', officialName: 'Meenam Bakkam International', state: 'Tamil Nadu (SE Coast)' },
    { city: 'Kolkata', officialName: 'Netaji Subhash Chandra Bose International', state: 'West Bengal (East)' },
    { city: 'Hyderabad', officialName: 'Rajiv Gandhi International', state: 'Telangana (Deccan)' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-cyan-800 dark:text-cyan-300 uppercase tracking-wider">
          <Anchor className="h-4 w-4" /> Ch 7 Map-Only Guide: 10 Major Sea Ports &amp; 6 International Airports
        </span>
        <div className="flex gap-1.5">
          {[
            { id: 'ports' as const, label: '10 Sea Ports (West vs. East)' },
            { id: 'airports' as const, label: '6 International Airports' },
          ].map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setTab(b.id)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
                tab === b.id
                  ? 'bg-cyan-700 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'ports' && (
        <div className="grid gap-4 md:grid-cols-2 text-xs">
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/40 p-3.5 space-y-2 dark:border-indigo-900/60 dark:bg-indigo-950/20">
            <div className="font-extrabold text-indigo-900 dark:text-indigo-300">
              West Coast (Arabian Sea • North → South)
            </div>
            {westPorts.map((p, i) => (
              <div key={p.name} className="rounded-lg bg-white p-2.5 border border-indigo-100 dark:bg-slate-950 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-slate-900 dark:text-white">
                    {i + 1}. {p.name}
                  </span>
                  <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-400">
                    {p.state}
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] text-slate-600 dark:text-slate-400">{p.clue}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-teal-200 bg-teal-50/40 p-3.5 space-y-2 dark:border-teal-900/60 dark:bg-teal-950/20">
            <div className="font-extrabold text-teal-900 dark:text-teal-300">
              East Coast (Bay of Bengal • South → North)
            </div>
            {eastPorts.map((p, i) => (
              <div key={p.name} className="rounded-lg bg-white p-2.5 border border-teal-100 dark:bg-slate-950 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-slate-900 dark:text-white">
                    {i + 6}. {p.name}
                  </span>
                  <span className="text-[10px] font-bold text-teal-700 dark:text-teal-400">
                    {p.state}
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] text-slate-600 dark:text-slate-400">{p.clue}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'airports' && (
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 text-xs">
          {airports.map((a) => (
            <div
              key={a.city}
              className="rounded-xl border border-cyan-200 bg-white p-3.5 space-y-1 dark:border-cyan-900/60 dark:bg-slate-950"
            >
              <span className="rounded bg-cyan-50 px-2 py-0.5 text-[10px] font-bold text-cyan-900 dark:bg-cyan-950 dark:text-cyan-300">
                {a.state}
              </span>
              <div className="text-sm font-extrabold text-slate-900 dark:text-white">{a.city}</div>
              <div className="text-[11px] font-semibold text-cyan-800 dark:text-cyan-400">
                {a.officialName}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function SstConceptDiagram({ diagramId }: { diagramId: SstDiagramId }) {
  switch (diagramId) {
    case 'gdp-vs-employment-bars':
      return <GdpVsEmploymentChart />;
    case 'bank-loan-mechanism-flow':
      return <BankLoanMechanismFlow />;
    case 'formal-vs-informal-credit-chart':
      return <FormalVsInformalCreditChart />;
    case 'mnc-global-production-and-g20':
      return <MncAndG20Visual />;
    case 'power-sharing-horizontal-vertical':
      return <PowerSharingDiagram />;
    case 'india-federal-lists-and-tiers':
      return <IndiaFederalListsAndTiers />;
    case 'civics-cartoon-gallery':
      return <CivicsCartoonGallery />;
    case 'germania-and-marianne-symbols':
      return <GermaniaAndMarianneSymbols />;
    case 'european-unification-lanes':
      return <EuropeanUnificationLanes />;
    case 'indian-movement-timeline-arc':
      return <IndianMovementTimelineArc />;
    case 'soil-profile-and-india-zones':
      return <SoilProfileAndIndiaZones />;
    case 'rainwater-harvesting-and-dams':
      return <RainwaterHarvestingAndDams />;
    case 'cropping-seasons-wheel':
      return <CroppingSeasonsWheel />;
    case 'coastline-ports-and-airports':
      return <CoastlinePortsAndAirports />;
    default:
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
          Diagram (<code>{diagramId}</code>) not found.
        </div>
      );
  }
}
