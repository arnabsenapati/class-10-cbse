import { Topic } from '../../../types/curriculum';

export const topicElectricity: Topic = {
  id: 'phy-topic-3',
  slug: 'phy-electricity',
  order: 3,
  title: 'Ch 11: Electricity',
  description:
    'Electric charge, current, potential difference, all 11 circuit symbols, Ohm’s law & V–I vs I–V slope traps, resistivity ρL/A, series/parallel networks, Joule heating, fuse & kWh power bills.',
  ncertChapter: 'Chapter 11: Electricity',
  subtopics: [
    {
      id: 'phy11-current-ohms-resistivity',
      slug: 'phy11-current-ohms-resistivity',
      title: 'Charge, Current, Potential, Ohm’s Law & Resistivity ρL/A',
      subtitle:
        'Q = ne, I = Q/t, V = W/Q, All 11 NCERT Circuit Symbols, Ohm’s Law V = IR, V–I vs I–V Slope Trap & Wire-Stretching 4R Rule',
      estimatedMinutes: 45,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT Class 10 Science — Chapter 11 (Sections 11.1 – 11.5)',
      learningObjectives: [
        'Define 1 Coulomb, 1 Ampere, 1 Volt, and 1 Ohm verbatim in CBSE exam style.',
        'Draw all 11 NCERT Table 11.1 circuit symbols and connect Ammeter (series, low R) & Voltmeter (parallel, high R) properly.',
        'Decode V–I vs I–V graph slopes without falling into the axis-swap trap.',
        'Distinguish Resistance R (depends on L, A, material, T) from Resistivity ρ (depends ONLY on material & temperature!), including volume-constant stretching problems.',
      ],
      keywords: [
        'Electric current',
        'Potential difference',
        'Ohm’s law',
        'Electrical resistivity',
        'V-I graph',
        'Ammeter and Voltmeter',
        'Wire stretching',
      ],
      sections: [
        {
          id: 'phy11-ohms-laws-symbols',
          title: '1. Charge, Current, Potential Difference, Ohm’s Law & Resistivity',
          blocks: [
            {
              type: 'quick-summary',
              title: '60-Second Ch 11 Core Laws & Definitions',
              bullets: [
                '**Quantisation of Charge:** `Q = n·e` (`e = 1.6 × 10⁻¹⁹ C`). Hence `1 C` contains `1 / (1.6 × 10⁻¹⁹) = 6.25 × 10¹⁸` (or `~6 × 10¹⁸`) electrons.',
                '**Electric Current:** `I = Q / t` (SI unit **Ampere `A`**; `1 A = 1 C / 1 s`). Conventional current flows **`+ → −`**, OPPOSITE to electron drift (`− → +`). Measured by **Ammeter** in **series**.',
                '**Potential Difference:** `V = W / Q` (SI unit **Volt `V`**; `1 V = 1 J / 1 C`). Measured by **Voltmeter** in **parallel**.',
                '**Ohm’s Law:** At constant temperature, current `I` through a metallic conductor is directly proportional to potential difference `V` across its ends: `V ∝ I` ⇒ **`V = I·R`** (`1 Ω = 1 V / 1 A`).',
                '**Resistance (`R`):** `R = ρ · L / A` (depends on **length `L`**, **area `A`**, **nature of material**, and **temperature**). **Resistivity (`ρ`):** `ρ = R·A / L` (SI unit **`Ω·m`** — independent of `L` or `A`; depends ONLY on **material & temperature**!).',
              ],
            },
            {
              type: 'table',
              caption: 'Ammeter vs Voltmeter & Resistance vs Resistivity Comparison',
              headers: ['Parameter', 'Ammeter / Resistance R', 'Voltmeter / Resistivity ρ'],
              rows: [
                ['Connection in Circuit', '**Ammeter:** Always in **Series**', '**Voltmeter:** Always in **Parallel**'],
                ['Internal Resistance', 'Very **low** (ideally zero) so total current stays unchanged', 'Very **high** (ideally infinite) so negligible current branches into it'],
                ['Dependency on Dimensions', '**Resistance `R`** changes with length `L` and thickness `A` (`R ∝ L/A`)', '**Resistivity `ρ`** NEVER changes if you cut or stretch the wire (`ρ` depends only on material & `T`)!'],
              ],
            },
          ],
        },
        {
          id: 'phy11-symbols-vi-lab',
          title: '2. Circuit Symbols, V–I Slope Trap & Electron Drift Simulator',
          blocks: [
            {
              type: 'visual-diagram',
              diagramId: 'circuit-symbols-and-vi-graphs',
              title: 'All 11 NCERT Circuit Symbols + V–I vs I–V Slope Trap + Series/Parallel Overview',
              caption: 'Master all 11 standard symbols and always check which quantity is on the vertical Y-axis before comparing resistances!',
            },
            {
              type: 'lab',
              labId: 'physics-circuit-simulator',
              title: 'Interactive Electron Drift, Ohm’s Law & R = ρL/A Wire Lab (Tab 1)',
              caption: 'Watch electrons (− → +) vs conventional current (+ → −), toggle "Stretch Wire to 2L → 4R", and see live (V, I) points move along the V–I line.',
            },
          ],
        },
        {
          id: 'phy11-resistivity-notebook-clinic',
          title: '3. Sign & Graph Slip Clinic (V–I vs I–V & 4R Wire Stretch)',
          blocks: [
            {
              type: 'notebook-mistake',
              studentName: 'Siddharth',
              title: 'Swapping Resistance Order on an I–V Graph',
              wrongWork: 'On an I-V graph (I on y-axis), line A is steeper than line B => R_A > R_B',
              teacherFix: 'When I is on Y-axis, Slope = I/V = 1/R! Steeper line A has LOWER resistance (R_B > R_A).',
              whyWrong:
                'Always check BOTH axis labels first! On a **`V–I` graph (`V` vertical)**, Slope `= V/I = R` (steeper = higher `R`). On an **`I–V` graph (`I` vertical)**, Slope `= I/V = 1/R` (flatter = higher `R`!).',
            },
            {
              type: 'notebook-mistake',
              studentName: 'Tanvi',
              title: 'Forgetting Area Halves When Stretching a Wire to Double Length',
              wrongWork: 'Wire of 10 ohm stretched to 2L -> R_new = 2 * 10 = 20 ohm; resistivity rho also doubles!',
              teacherFix: 'Volume A*L is constant => L becomes 2L AND A becomes A/2 => R_new = rho(2L)/(A/2) = 4R = 40 ohm; rho stays SAME!',
              whyWrong:
                'Two classic traps combined: (1) **Stretching** preserves total volume (`A₁L₁ = A₂L₂`), so doubling `L` halves `A`, giving `2 ÷ (1/2) = 4×` resistance! (2) **Resistivity `ρ`** is an intrinsic material constant — stretching never changes `ρ`!',
            },
          ],
        },
        {
          id: 'phy11-ohms-hand-practice',
          title: '4. Screen-to-Notebook Numericals (Ohm’s Law & Resistivity)',
          blocks: [
            {
              type: 'hand-practice',
              title: 'Ch 11 Part 1 — Graded Board Numericals (Solve in Notebook First)',
              subtitle: 'Convert `minutes → seconds` and `mm → m` (`× 10⁻³`) on Line 1 before plugging into `I = Q/t` or `R = ρL/A`.',
              problems: [
                {
                  id: 'phy11-p1',
                  numberLabel: 'Elec 11.1',
                  marks: 2,
                  timeMinutes: 2,
                  tag: 'Charge & Current',
                  question:
                    'Calculate the number of electrons constituting `1 coulomb` of charge. Also find the electric current when `300 C` of charge flows through a filament for `5 minutes`.',
                  copyCheck: '`e = 1.6 × 10⁻¹⁹ C`; convert `t = 5 min = 5 × 60 = 300 s`.',
                  step1Setup: '`n = Q / e = 1 / (1.6 × 10⁻¹⁹)` and `I = Q / t`.',
                  midwayCheckpoint: '`n = 6.25 × 10¹⁸` electrons; `t = 300 s`.',
                  finalAnswer: '`6.25 × 10¹⁸` electrons constitute `1 C`; current `I = 1.0 A`.',
                  fullSolution:
                    '1. `Q = n·e ⇒ n = 1 / (1.6 × 10⁻¹⁹) = 6.25 × 10¹⁸` electrons [1M]\n2. `t = 5 × 60 = 300 s`; `I = Q/t = 300 C / 300 s = 1.0 A` [1M].',
                  sillyTrapNote: 'Dividing `300 / 5 = 60 A` skips converting minutes into SI seconds!',
                },
                {
                  id: 'phy11-p2',
                  numberLabel: 'Elec 11.2',
                  marks: 2,
                  timeMinutes: 2,
                  tag: 'NCERT Ohm’s Law',
                  question:
                    'The potential difference between the terminals of an electric heater is `60 V` when it draws a current of `4 A` from the source. What current will the heater draw if the potential difference is increased to `120 V`?',
                  copyCheck: 'Resistance `R` of the heater coil stays constant (`R = V / I`).',
                  step1Setup: '`R = 60 V / 4 A = 15 Ω`.',
                  midwayCheckpoint: 'New `I\' = V\' / R = 120 / 15`.',
                  finalAnswer: '`R = 15 Ω`, new current `I\' = 8 A`.',
                  fullSolution:
                    '1. Given: `V = 60 V`, `I = 4 A` ⇒ `R = V/I = 60/4 = 15 Ω` [1M]\n2. At `V\' = 120 V`: `I\' = V\'/R = 120/15 = 8 A` [1M]. (Double `V` ⇒ double `I`!).',
                  sillyTrapNote: 'Assuming current halves or stays `4 A` ignores `I ∝ V`.',
                },
                {
                  id: 'phy11-p3',
                  numberLabel: 'Elec 11.3',
                  marks: 3,
                  timeMinutes: 4,
                  tag: 'CBSE 4R Wire-Stretch Trap',
                  question:
                    'A wire of resistance `10 Ω`, length `l`, and cross-sectional area `A` is **stretched** uniformly so that its length becomes double (`2l`) while keeping volume constant. Find its new resistance and state what happens to its resistivity `ρ`.',
                  copyCheck: 'Volume `V = A·l = A\'·(2l)` ⇒ `A\' = A/2`.',
                  step1Setup: '`R\' = ρ · l\' / A\' = ρ · (2l) / (A/2)`.',
                  midwayCheckpoint: '`R\' = 4 · (ρl / A) = 4R`.',
                  finalAnswer: 'New resistance `R\' = 40 Ω`; resistivity `ρ` **remains unchanged**.',
                  fullSolution:
                    '1. Volume stays constant: `A·l = A\'·(2l) ⇒ A\' = A/2` [1M]\n2. `R\' = ρ(2l)/(A/2) = 4(ρl/A) = 4 × 10 = 40 Ω` [1.5M]\n3. Resistivity `ρ` depends only on material & temperature, so `ρ` remains **unchanged** [½M].',
                  sillyTrapNote: 'Compare carefully with **"doubled on itself"** (folded in half): folding gives `l\' = l/2, A\' = 2A ⇒ R\' = R/4`!',
                },
                {
                  id: 'phy11-p4',
                  numberLabel: 'Elec 11.4',
                  marks: 3,
                  timeMinutes: 4,
                  tag: 'NCERT Resistivity',
                  question:
                    'Resistance of a metal wire of length `1 m` is `26 Ω` at `20 °C`. If the diameter of the wire is `0.3 mm`, what will be the resistivity of the metal at that temperature?',
                  copyCheck: 'Diameter `d = 0.3 mm` ⇒ Radius `r = 0.15 mm = 1.5 × 10⁻⁴ m`!',
                  step1Setup: '`A = πr² = (22/7) × (1.5 × 10⁻⁴)²` and `ρ = R·A / l`.',
                  midwayCheckpoint: '`A ≈ 7.07 × 10⁻⁸ m²`.',
                  finalAnswer: '`ρ ≈ 1.84 × 10⁻⁶ Ω·m`.',
                  fullSolution:
                    '1. `r = 0.3/2 mm = 0.15 × 10⁻³ m = 1.5 × 10⁻⁴ m` [1M]\n2. `A = πr² = 3.1416 × 2.25 × 10⁻⁸ = 7.07 × 10⁻⁸ m²` [1M]\n3. `ρ = (R·A)/l = (26 × 7.07 × 10⁻⁸)/1 = 1.84 × 10⁻⁶ Ω·m` [1M].',
                  sillyTrapNote: 'Plugging diameter `0.3 mm` directly as radius `r` makes `A` and `ρ` `4×` too big!',
                },
              ],
            },
          ],
        },
        {
          id: 'phy11-ohms-qa',
          title: '5. CBSE Board Exam Q&As (Ohm’s Law & Resistivity)',
          blocks: [
            {
              type: 'qa',
              marks: 2,
              tag: 'NCERT',
              question: 'Will current flow more easily through a thick wire or a thin wire of the same material, when connected to the same source? Why?',
              answer:
                'Current flows more easily through a **thick wire** because resistance `R = ρL/A` is **inversely proportional to cross-sectional area `A`**. A thicker wire has larger `A`, hence **lower resistance** and higher current for the same voltage.',
              markingTip: 'Quote `R ∝ 1/A` explicitly!',
            },
            {
              type: 'qa',
              marks: 2,
              tag: 'CBSE Board Pattern',
              question: 'A copper wire of resistivity `ρ` is cut into three equal parts. What is the resistivity of each cut piece? Does resistance change?',
              answer:
                '• **Resistivity (`ρ`):** Remains **unchanged**, because resistivity is a characteristic property of the material (depends only on nature & temperature, NOT dimensions).\n• **Resistance (`R`):** Becomes **one-third (`R/3`)** for each piece because length `L` is reduced to `L/3` (`R ∝ L`).',
              markingTip: 'Never confuse `R` (changes with geometry) with `ρ` (material constant)!',
            },
          ],
        },
      ],
    },
    {
      id: 'phy11-circuits-heating-power',
      slug: 'phy11-circuits-heating-power',
      title: 'Series/Parallel Combinations, Joule Heating, Fuse, Electric Power & kWh Bills',
      subtitle:
        'Equivalent Resistance R_s & R_p, Why Houses Use Parallel, Joule’s Law H = I²Rt, Tungsten/Argon Bulbs, Nichrome Heaters, Sn–Pb Fuse & Commercial kWh Billing',
      estimatedMinutes: 45,
      difficulty: 'Board Mastery',
      ncertSection: 'NCERT Class 10 Science — Chapter 11 (Sections 11.6 – 11.8)',
      learningObjectives: [
        'Derive and apply Series (`R_s = R₁+R₂+R₃`) and Parallel (`1/R_p = 1/R₁+1/R₂+1/R₃`) laws without forgetting the final reciprocal invert.',
        'List 4 CBSE advantages of parallel circuits over series circuits for domestic appliances.',
        'Apply Joule’s Law of Heating (`H = I²Rt = VIt = V²t/R`) and explain Tungsten/N₂–Ar bulbs, Nichrome heating elements, and Sn–Pb fuse wires.',
        'Compute electric power (`P = VI = I²R = V²/R`), voltage-drop bulb power (`P ∝ V²`), and monthly `kWh` electricity bills (`1 kWh = 3.6 × 10⁶ J`).',
      ],
      keywords: [
        'Series and parallel resistors',
        'Joule heating',
        'Electric fuse',
        'Electric power',
        'Kilowatt hour',
        'Nichrome',
        'Tungsten filament',
      ],
      sections: [
        {
          id: 'phy11-series-parallel-heating',
          title: '1. Series/Parallel Laws, Joule’s Law I²Rt, Alloys, Fuse & kWh',
          blocks: [
            {
              type: 'quick-summary',
              title: '60-Second Circuits, Heating & Power Formula Vault',
              bullets: [
                '**Series:** `I` is **SAME** everywhere; `V = V₁ + V₂ + V₃`; `R_s = R₁ + R₂ + R₃` (always **greater** than the largest single resistor).',
                '**Parallel:** `V` is **SAME** across each branch; `I = I₁ + I₂ + I₃`; `1/R_p = 1/R₁ + 1/R₂ + 1/R₃` (always **smaller** than the smallest single resistor!). For 2 resistors: `R_p = (R₁·R₂)/(R₁ + R₂)`.',
                '**Joule’s Law of Heating:** `H = I²Rt = V·I·t = (V²/R)t`. Heat produced in a resistor is directly proportional to (i) `I²`, (ii) `R`, and (iii) time `t`.',
                '**Electric Power (`P`):** `P = W/t = V·I = I²R = V²/R` (SI unit **Watt `W`**; `1 W = 1 J/s`; `1 kW = 1000 W`).',
                '**Commercial Unit of Energy:** `1 kWh` (`1 unit`) `= 1000 W × 3600 s = 3.6 × 10⁶ J`. Always compute Energy in `kWh = [Power(W) × hours] / 1000`.',
              ],
            },
            {
              type: 'table',
              caption: 'Practical Applications of Heating Effect (Guaranteed 2M/3M CBSE Reasons)',
              headers: ['Device / Component', 'Material Used', 'Essential Properties (Write Both!)'],
              rows: [
                [
                  '**Electric Bulb Filament**',
                  '**Tungsten** (`W`) + **N₂/Argon** gas',
                  'Extremely **high melting point (`3380 °C`)** & high resistivity; bulbs are filled with chemically **inactive Nitrogen / Argon** to prevent oxidation and prolong filament life.',
                ],
                [
                  '**Heater / Toaster / Iron Coil**',
                  '**Nichrome** (Alloy of Ni, Cr, Mn, Fe)',
                  '(1) **High resistivity `ρ`** → produces large heat `I²Rt`; (2) **Does NOT oxidise (burn) readily** at red-hot temperatures.',
                ],
                [
                  '**Electric Safety Fuse**',
                  '**Lead–Tin (Pb–Sn) alloy** or pure **Cu/Al** calibrated wire',
                  '**Appropriate melting point** (low m.p. to melt quickly at rated current e.g. `1A, 2A, 3A, 5A, 15A`) and **high resistance**; ALWAYS connected in **series on the LIVE wire**!',
                ],
              ],
            },
          ],
        },
        {
          id: 'phy11-network-fuse-lab',
          title: '2. Interactive Series/Parallel & Fuse Blowout Simulator',
          blocks: [
            {
              type: 'lab',
              labId: 'physics-circuit-simulator',
              title: 'Series vs Parallel Network, Joule Heating & Fuse Blowout Lab (Tab 2)',
              caption: 'Open Tab 2 to compare branch current splitting (Parallel) vs voltage division (Series), resistor glow H = I²Rt, and live 5A/15A fuse meltdown!',
            },
          ],
        },
        {
          id: 'phy11-power-notebook-clinic',
          title: '3. Circuit & Power Bill Slip Clinic',
          blocks: [
            {
              type: 'notebook-mistake',
              studentName: 'Vikram',
              title: 'Forgetting to Invert 1/R_p at the Final Step',
              wrongWork: '6 ohm and 3 ohm in parallel -> 1/R_p = 1/6 + 1/3 = 3/6 = 1/2 -> R_p = 0.5 ohm!',
              teacherFix: '1/R_p = 1/2 => FLIP BOTH SIDES => R_p = 2 ohm (always smaller than 3 ohm!)',
              whyWrong:
                'Leaving `1/R_p = 1/2` and writing `R_p = 0.5 Ω` is the single most frequent Ch 11 arithmetic blunder. Sanity check: `R_p` MUST be less than the smallest resistor (`3 Ω`), and for two resistors use **`(R₁×R₂)/(R₁+R₂)`** directly (`18/9 = 2 Ω`)!',
            },
            {
              type: 'notebook-mistake',
              studentName: 'Sneha',
              title: 'Halving Power When Supply Voltage Halves (Bulb Trap!)',
              wrongWork: 'A 220 V, 100 W bulb runs on 110 V -> voltage halved so power = 100 / 2 = 50 W',
              teacherFix: 'Bulb resistance R = V²/P = 220²/100 = 484 ohm is fixed -> at 110 V, P_new = 110²/484 = 25 W (1/4th!)',
              whyWrong:
                'When a fixed-resistance bulb moves from `220 V` to `110 V`, BOTH voltage AND current halve (`P = V²/R`), so power drops by `(1/2)² = 1/4` → **`25 W`**, NOT `50 W`!',
            },
          ],
        },
        {
          id: 'phy11-power-hand-practice',
          title: '4. Screen-to-Notebook Numericals (Circuits, Heating & Bills)',
          blocks: [
            {
              type: 'hand-practice',
              title: 'Ch 11 Part 2 — Circuits, Heating & kWh Bills',
              subtitle: 'Show parallel branch checks (`I = I₁+I₂+I₃`) and convert Watts to `kW` (`÷ 1000`) for billing!',
              problems: [
                {
                  id: 'phy11-p5',
                  numberLabel: 'Circuit 11.5',
                  marks: 3,
                  timeMinutes: 4,
                  tag: 'NCERT Parallel Network',
                  question:
                    'In a circuit diagram, three resistors `R₁ = 5 Ω`, `R₂ = 10 Ω`, and `R₃ = 30 Ω` are connected in **parallel** across a `12 V` battery. Calculate:\n(a) the current through each resistor,\n(b) the total current in the circuit, and\n(c) the total circuit resistance.',
                  copyCheck: 'Parallel ⇒ `V = 12 V` across EACH resistor.',
                  step1Setup: '`I₁ = 12/5`, `I₂ = 12/10`, `I₃ = 12/30`.',
                  midwayCheckpoint: '`I_total = 2.4 + 1.2 + 0.4 = 4.0 A`.',
                  finalAnswer: '(a) `2.4 A, 1.2 A, 0.4 A`; (b) `I_total = 4.0 A`; (c) `R_p = 3 Ω`.',
                  fullSolution:
                    '1. (a) `I₁ = 12/5 = 2.4 A`, `I₂ = 12/10 = 1.2 A`, `I₃ = 12/30 = 0.4 A` [1.5M]\n2. (b) `I_total = 2.4 + 1.2 + 0.4 = 4.0 A` [½M]\n3. (c) `1/R_p = 1/5 + 1/10 + 1/30 = (6+3+1)/30 = 10/30 = 1/3 ⇒ R_p = 3 Ω` [1M].',
                  sillyTrapNote: 'Forgetting to invert `1/R_p = 1/3` gives `0.33 Ω` instead of `3 Ω`!',
                },
                {
                  id: 'phy11-p6',
                  numberLabel: 'Circuit 11.6',
                  marks: 3,
                  timeMinutes: 4,
                  tag: 'CBSE Classic 3×6Ω',
                  question:
                    'Show with neat calculations how you would connect **three resistors**, each of resistance `6 Ω`, so that the combination has a total resistance of:\n(i) `9 Ω`, and\n(ii) `4 Ω`.',
                  copyCheck: 'Try two-in-parallel + one-in-series vs two-in-series + one-in-parallel.',
                  step1Setup: '(i) `6 || 6 = 3 Ω`, then `+ 6 = 9 Ω`. (ii) `6 + 6 = 12 Ω`, then `12 || 6`.',
                  midwayCheckpoint: '(ii) `(12 × 6) / (12 + 6) = 72 / 18`.',
                  finalAnswer: '(i) Two `6 Ω` in parallel + third `6 Ω` in series (`9 Ω`); (ii) Two `6 Ω` in series + third `6 Ω` in parallel (`4 Ω`).',
                  fullSolution:
                    '1. **(i) For `9 Ω`:** Connect two `6 Ω` resistors in parallel (`R_p = (6×6)/(6+6) = 3 Ω`), then connect this combination in series with the third `6 Ω` resistor: `R_eq = 3 + 6 = 9 Ω` [1.5M]\n2. **(ii) For `4 Ω`:** Connect two `6 Ω` resistors in series (`R_s = 6 + 6 = 12 Ω`), then connect this in parallel with the third `6 Ω` resistor: `1/R_eq = 1/12 + 1/6 = 3/12 = 1/4 ⇒ R_eq = 4 Ω` [1.5M].',
                  sillyTrapNote: 'Note: All 3 in series gives `18 Ω`, all 3 in parallel gives `2 Ω` — only mixed combos give `9 Ω` and `4 Ω`!',
                },
                {
                  id: 'phy11-p7',
                  numberLabel: 'Heat 11.7',
                  marks: 3,
                  timeMinutes: 4,
                  tag: 'Joule Heating & Fuse Check',
                  question:
                    '(a) `100 J` of heat is produced each second in a `4 Ω` resistance. Find the potential difference across the resistor.\n(b) An electric oven of `2 kW` power rating is operated in a domestic circuit (`220 V`) that has a current rating of `5 A`. What result do you expect? Explain.',
                  copyCheck: '(a) `H = 100 J`, `R = 4 Ω`, `t = 1 s`; (b) `P = 2000 W`, `V = 220 V`.',
                  step1Setup: '(a) `H = I²Rt ⇒ 100 = I²(4)(1)`. (b) `I = P / V = 2000 / 220`.',
                  midwayCheckpoint: '(a) `I = 5 A`; (b) `I = 9.09 A`.',
                  finalAnswer: '(a) `V = 20 V`; (b) Current `9.09 A > 5 A` → **Circuit overloads and 5 A fuse melts/blows**!',
                  fullSolution:
                    '1. (a) `H = I²Rt ⇒ 100 = I² × 4 × 1 ⇒ I² = 25 ⇒ I = 5 A` [1M]; `V = IR = 5 × 4 = 20 V` [½M]\n2. (b) `I = P/V = 2000 W / 220 V = 9.09 A` [1M]. Since `9.09 A` exceeds the `5 A` fuse limit, excess Joule heating melts the fuse wire and breaks the circuit [½M].',
                  sillyTrapNote: 'Using `P = 2 W` instead of `2000 W` misses `1 kW = 1000 W`!',
                },
                {
                  id: 'phy11-p8',
                  numberLabel: 'Bill 11.8',
                  marks: 4,
                  timeMinutes: 5,
                  tag: 'kWh Bill + Bulb Rating Trap',
                  question:
                    '(a) An electric refrigerator rated `400 W` operates `8 hours/day` and an electric iron rated `1000 W` operates `2 hours/day`. Calculate the cost of energy to operate them for `30 days` at `₹ 5.00` per `kWh`.\n(b) An electric bulb is rated `220 V` and `100 W`. When operated on `110 V`, what will be the power consumed?',
                  copyCheck: 'Convert Watts to `kW` (`÷ 1000`)! For (b), compute fixed `R = V²/P` first.',
                  step1Setup: '(a) Daily `E = (400×8 + 1000×2)/1000 kWh`. (b) `R = 220² / 100`.',
                  midwayCheckpoint: '(a) `5.2 kWh/day × 30 = 156 kWh`. (b) `R = 484 Ω`.',
                  finalAnswer: '(a) `156 units (kWh)`, Cost = `₹ 780`; (b) Power consumed at `110 V` = `25 W`.',
                  fullSolution:
                    '1. (a) Daily energy `= (400×8 + 1000×2) Wh = 5200 Wh = 5.2 kWh` [1M]\n2. Energy in `30` days `= 5.2 × 30 = 156 kWh`; Cost `= 156 × ₹5 = ₹ 780` [1M]\n3. (b) Bulb resistance `R = V²/P = 220²/100 = 484 Ω` [1M]\n4. At `110 V`, `P\' = V\'²/R = 110²/484 = 12100/484 = 25 W` [1M].',
                  sillyTrapNote: 'Answering `50 W` for part (b) is the #1 CBSE MCQ blunder (`P ∝ V²`, NOT `P ∝ V`!).',
                },
              ],
            },
          ],
        },
        {
          id: 'phy11-power-qa',
          title: '5. CBSE Board Exam Q&As (Circuits, Heating & Bills)',
          blocks: [
            {
              type: 'qa',
              marks: 3,
              tag: 'NCERT',
              question: 'Why are parallel circuits preferred over series circuits for connecting domestic electrical appliances? Give 3 distinct reasons.',
              answer:
                '1. **Full Rated Voltage:** Every appliance receives the full `220 V` mains potential difference independently (in series, voltage splits).\n2. **Independent Switching:** Each appliance has its own switch and can be turned ON/OFF without affecting others (in series, one switch/fault turns everything OFF).\n3. **Lower Effective Resistance:** Total parallel resistance `R_p` decreases (`1/R_p = Σ 1/Rᵢ`), allowing each appliance (e.g., high-power geyser vs low-power LED) to draw its own required current (`Iᵢ = V/Rᵢ`).',
              markingTip: 'Any 3 clear points earn full 3 marks!',
            },
            {
              type: 'qa',
              marks: 2,
              tag: 'CBSE Board Pattern',
              question: 'Why does the cord of an electric heater not glow while its heating element (Nichrome coil) glows red-hot?',
              answer:
                'Both the copper cord and Nichrome heating coil are in series, so the **same current `I`** passes through both. By Joule’s Law `H = I²Rt`, heat produced is proportional to resistance (`H ∝ R`). The Nichrome coil has **much higher resistance** than the low-resistance thick copper cord, so it generates enormous heat and glows red-hot while the cord stays cool.',
              markingTip: 'Must state: **"same current `I` in series"** + **"`H = I²Rt ⇒ H ∝ R`"** + **"`R_nichrome ≫ R_copper`"**.',
            },
          ],
        },
      ],
    },
  ],
};
