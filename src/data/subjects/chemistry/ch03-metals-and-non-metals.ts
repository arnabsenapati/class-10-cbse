import { Topic } from '../../../types/curriculum';

export const topicMetals: Topic = {
  id: 'chem-topic-3',
  slug: 'chem-metals-and-non-metals',
  order: 3,
  title: 'Ch 3: Metals and Non-metals',
  description:
    'Master physical & chemical exceptions (Ga/Cs, Hg, I₂, Graphite, Amphoteric oxides, Mg/Mn + HNO₃, Aqua Regia), Ionic bonding, Complete Metallurgy Extraction Tree, Electrolytic Refining, Rusting Proof, and Alloys.',
  ncertChapter: 'Chapter 3: Metals and Non-metals',
  subtopics: [
    {
      id: 'chem03-properties-reactivity-series',
      slug: 'chem03-properties-reactivity-series',
      title: 'Physical Exceptions, Amphoteric Oxides & Reactivity Series',
      subtitle:
        'All NCERT Physical Exceptions, Cold/Hot Water vs Steam Reactions, Amphoteric Al₂O₃ & ZnO, Dil. HNO₃ Trap, Aqua Regia & Interactive 9×9 Displacement Matrix',
      estimatedMinutes: 45,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT Ch 3 — Sections 3.1 to 3.2.5',
      learningObjectives: [
        'Recall every NCERT physical property exception among metals and non-metals (Hg, Br₂, Ga/Cs, Na/K, I₂, Diamond, Graphite).',
        'Distinguish Basic vs Amphoteric Oxides (`Al₂O₃`, `ZnO`) with balanced equations for both HCl and NaOH.',
        'Predict exact products and reactivity order across Cold Water, Hot Water, Steam, Dil. HCl, Dil. HNO₃ (`Mg, Mn`), Aqua Regia, and Metal Salt Solutions.',
      ],
      keywords: [
        'Amphoteric oxides',
        'Sodium aluminate',
        'Aqua regia 3:1',
        'Reactivity series',
        'Gallium and Caesium',
        'Mg and Mn with HNO3',
      ],
      sections: [
        {
          id: 'chem03-physical-exceptions',
          title: '1. Physical Properties & All CBSE Board Exceptions',
          blocks: [
            {
              type: 'table',
              caption: 'NCERT Physical Properties vs Mandatory Exceptions (Guaranteed 1M–2M MCQs)',
              headers: ['Property', 'General Metal vs Non-Metal Rule', 'CBSE Exam Exception(s) to Memorise!'],
              rows: [
                [
                  '**Physical State (Room Temp)**',
                  'Metals: Solids | Non-metals: Solids or Gases',
                  '**Mercury (`Hg`)** is the only **liquid metal**; **Bromine (`Br₂`)** is the only **liquid non-metal**!',
                ],
                [
                  '**Melting Point**',
                  'Metals: Very High | Non-metals: Low',
                  '**Gallium (`Ga`) & Caesium (`Cs`)** have such low m.p. (`~30°C`) they **melt on your palm**! **Diamond (C)** is a non-metal with extremely high m.p. & hardness!',
                ],
                [
                  '**Hardness & Density**',
                  'Metals: Hard & Dense',
                  'Alkali metals (**`Li, Na, K`**) are so soft they can be **cut with a knife** and have low densities (`< 1 g/cm³`).',
                ],
                [
                  '**Lustre (Shine)**',
                  'Metals: Lustrous | Non-metals: Dull',
                  '**Iodine (`I₂`)** and **Graphite** are lustrous (shiny) non-metals!',
                ],
                [
                  '**Electrical Conduction**',
                  'Metals: Conduct (`Ag, Cu` best; `Pb, Hg` poor) | Non-metals: Insulators',
                  '**Graphite** (an allotrope of carbon, a non-metal) is a **good conductor** of electricity!',
                ],
                [
                  '**Malleability & Ductility**',
                  'Beaten into sheets / drawn into wires (`Au` most ductile: `2 km` from `1 g`!)',
                  'Non-metals are brittle (shatter on hammering).',
                ],
              ],
            },
          ],
        },
        {
          id: 'chem03-chemical-reactions-amphoteric',
          title: '2. Chemical Reactions: Amphoteric Oxides, Water, HNO₃ Trap & Aqua Regia',
          blocks: [
            {
              type: 'quick-summary',
              title: '5 High-Trap Chemical Rules in NCERT Ch 3',
              bullets: [
                '**Amphoteric Oxides (`Al₂O₃`, `ZnO`):** Metal oxides that show **BOTH acidic and basic behaviour**, reacting with both `HCl` and `NaOH` to form salt + water!',
                '**Anodising:** Process of forming a thick protective `Al₂O₃` layer on Aluminium (made anode in dil. `H₂SO₄` electrolysis) to resist corrosion & allow attractive dyeing.',
                '**Water Reactivity Ladder:** `K, Na` react violently with **cold water** (catch fire); `Ca` reacts gently with **cold water & floats**; `Mg` reacts with **hot water & floats**; `Al, Zn, Fe` react ONLY with **steam** forming oxides (`Fe → Fe₃O₄`); `Pb, Cu, Ag, Au` **never react with water**!',
                '**`HNO₃` Oxidising Exception:** Metals normally do **NOT** evolve `H₂` with `HNO₃` because `HNO₃` oxidises `H₂ → H₂O` (reducing to `N₂O, NO, NO₂`). **ONLY `Mg` and `Mn`** evolve `H₂` with **very dilute `HNO₃`**!',
                '**Aqua Regia ("Royal Water"):** Freshly prepared **`3 : 1` mixture of conc. `HCl` and conc. `HNO₃`** — corrosive fuming liquid that dissolves noble metals **`Au` (Gold) and `Pt` (Platinum)**!',
              ],
            },
            {
              type: 'table',
              caption: 'Amphoteric Oxide Equations (Verbatim CBSE Marking Scheme)',
              headers: ['Amphoteric Oxide', 'Reaction as Basic Oxide (with Acid)', 'Reaction as Acidic Oxide (with Alkali)'],
              rows: [
                [
                  '**Aluminium Oxide (`Al₂O₃`)**',
                  '`Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O`',
                  '`Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O`\n(Product: **Sodium aluminate**)',
                ],
                [
                  '**Zinc Oxide (`ZnO`)**',
                  '`ZnO + 2HCl → ZnCl₂ + H₂O`',
                  '`ZnO + 2NaOH → Na₂ZnO₂ + H₂O`\n(Product: **Sodium zincate**)',
                ],
              ],
            },
            {
              type: 'notebook-mistake',
              studentName: 'Riya',
              title: 'Wrong Product When Iron Reacts With Steam',
              wrongWork: '2Fe(s) + 3H₂O(g) → Fe₂O₃(s) + 3H₂(g)',
              teacherFix: '3Fe(s) + 4H₂O(g) ⇌ Fe₃O₄(s) + 4H₂(g)',
              whyWrong:
                'Red-hot Iron reacting with steam forms **Iron(II, III) oxide (`Fe₃O₄`)**, NOT `Fe₂O₃`! And remember why **Calcium** and **Magnesium** float in water: **`H₂` gas bubbles stick to the metal surface**, not because their density is less than water!',
            },
          ],
        },
        {
          id: 'chem03-reactivity-matrix-lab',
          title: '3. Reactivity Series & Interactive Displacement Matrix Lab',
          blocks: [
            {
              type: 'callout',
              variant: 'tip',
              title: 'Memory Mnemonic for the CBSE Reactivity Series',
              body: '**`K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au`**\nMnemonic: *"Please Stop Calling Me A Zebra In Places Having Copper Mercury Silver Gold"* (`K` Potassium, `Na` Sodium, `Ca` Calcium, `Mg` Magnesium, `Al` Aluminium, `Zn` Zinc, `Fe` Iron, `Pb` Lead, `[H]`, `Cu`, `Hg`, `Ag`, `Au`). Only metals **above `[H]`** displace `H₂` from dilute acids!',
            },
            {
              type: 'lab',
              labId: 'chemistry-metallurgy-ionic-lab',
              title: 'Interactive Reactivity Matrix, Ionic Transfer & Cu Refining Lab',
              caption: 'Test any metal against Cold H₂O, Hot H₂O, Steam, Dil. HCl, Dil. HNO₃, and salt solutions in Tab 1 — or run Ionic Electron Transfer & Copper Refining in Tab 2!',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                'Samples of four metals `A, B, C, D` were added to solutions:\n• `A` displaces `Cu` from `CuSO₄` but gives no reaction with `FeSO₄`.\n• `B` displaces `Fe` from `FeSO₄`.\n• `C` displaces `Ag` from `AgNO₃` but gives no reaction with `CuSO₄`.\n• `D` shows no reaction with any salt.\nArrange `A, B, C, D` in decreasing order of reactivity.',
              answer:
                '`B > Fe > A > Cu > C > Ag > D` → Decreasing order: **`B > A > C > D`**.\n• `B` is most reactive (above `Fe`).\n• `A` lies between `Fe` and `Cu`.\n• `C` lies between `Cu` and `Ag`.\n• `D` is least reactive (below `Ag`).',
            },
          ],
        },
      ],
    },
    {
      id: 'chem03-ionic-metallurgy-corrosion',
      slug: 'chem03-ionic-metallurgy-corrosion',
      title: 'Ionic Compounds, Metallurgy Extraction Tree, Corrosion & Alloys',
      subtitle:
        'Electron-Dot Transfer (NaCl, MgCl₂), Why Solid Ionic Salts Don’t Conduct, Roasting vs Calcination, Thermit Welding, Copper Refining, 3-Tube Rusting Proof & Alloys',
      estimatedMinutes: 45,
      difficulty: 'Board Mastery',
      ncertSection: 'NCERT Ch 3 — Sections 3.3 to 3.5',
      learningObjectives: [
        'Draw electron-dot transfer diagrams for `NaCl` and `MgCl₂` and explain high melting point, brittleness, and molten/aqueous conductivity.',
        'Trace the complete Metallurgy extraction flowchart separating Low, Medium (Roasting vs Calcination + Thermit), and High (molten electrolysis) reactivity metals.',
        'Explain Electrolytic Refining of Copper (including Anode Mud), the 3-tube rusting proof, Galvanisation, and compositions of all CBSE alloys.',
      ],
      keywords: [
        'Ionic bond properties',
        'Roasting vs Calcination',
        'Thermit reaction',
        'Electrolytic refining anode mud',
        'Galvanisation',
        'Brass Bronze Solder Amalgam',
      ],
      sections: [
        {
          id: 'chem03-ionic-bonding-properties',
          title: '1. Ionic Bonding & Properties of Electrovalent Compounds',
          blocks: [
            {
              type: 'paragraph',
              text: '**Ionic (Electrovalent) Compounds** are formed by the **complete transfer of electrons** from a metal atom (forming a positive **Cation**) to a non-metal atom (forming a negative **Anion**). Example: `Na (2,8,1) → Na⁺ (2,8) + e⁻` and `Cl (2,8,7) + e⁻ → Cl⁻ (2,8,8)` yielding `[Na]⁺[Cl]⁻`.',
            },
            {
              type: 'table',
              caption: '4 Properties of Ionic Compounds & CBSE "Why" Explanations',
              headers: ['Property', 'Behaviour', 'NCERT Molecular Reason'],
              rows: [
                [
                  '**Physical Nature**',
                  'Hard crystalline solids, yet **brittle** (shatter under pressure)',
                  'Strong electrostatic forces hold opposite ions rigid; hammering shifts layers so like charges align and repel!',
                ],
                [
                  '**Melting & Boiling Points**',
                  '**Very High** (`NaCl` m.p. `1074 K`)',
                  'Considerable heat energy is required to overcome strong inter-ionic electrostatic attractions.',
                ],
                [
                  '**Solubility**',
                  '**Soluble in water**; **insoluble** in organic solvents (kerosene, petrol)',
                  'Polar water molecules weaken electrostatic pull and hydrate ions.',
                ],
                [
                  '**Electrical Conduction**',
                  'Conducts ONLY in **molten** or **aqueous** state — **NEVER in solid state**!',
                  'In solid state, ions are locked in a rigid crystal lattice and cannot move; melting or dissolving frees the ions to carry current!',
                ],
              ],
            },
          ],
        },
        {
          id: 'chem03-metallurgy-extraction-refining',
          title: '2. Metallurgy Extraction Flowchart & Electrolytic Refining',
          blocks: [
            {
              type: 'visual-diagram',
              diagramId: 'metallurgy-flowchart-and-rusting',
              title: 'Interactive Metallurgy Extraction Tree & 3-Tube Rusting Proof',
              caption: 'Switch between High, Medium (Roasting vs Calcination), and Low reactivity extraction paths, and click Tubes A/B/C below!',
            },
            {
              type: 'table',
              caption: 'Roasting vs Calcination (Guaranteed 3-Mark Comparison Table)',
              headers: ['Feature', 'Roasting', 'Calcination'],
              rows: [
                [
                  '**Ore Type**',
                  '**Sulphide ores** (e.g., Zinc blende `ZnS`, Cinnabar `HgS`)',
                  '**Carbonate ores** (e.g., Calamine `ZnCO₃`)',
                ],
                [
                  '**Air Supply**',
                  'Heated strongly in **excess air (`O₂`)**',
                  'Heated strongly in **limited air** (or absence of air)',
                ],
                [
                  '**Gas Released**',
                  'Sulphur dioxide (`SO₂` — choking smell)',
                  'Carbon dioxide (`CO₂` — turns limewater milky)',
                ],
                [
                  '**Equation**',
                  '`2ZnS(s) + 3O₂(g) —Δ→ 2ZnO(s) + 2SO₂(g)`',
                  '`ZnCO₃(s) —Δ→ ZnO(s) + CO₂(g)`',
                ],
              ],
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'Thermit Welding & Molten Electrolysis Rules',
              body: '• **Thermit Reaction:** Strongly exothermic displacement using Aluminium powder to reduce Iron(III) oxide:\n`Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + Heat` — molten Iron produced is poured to weld **railway tracks** and cracked machine parts!\n• **High Reactivity Trap:** Metals like `Na, Mg, Ca, Al` have **higher affinity for oxygen than Carbon**, so Coke (`C`) CANNOT reduce `Na₂O` or `Al₂O₃`. They are obtained by **electrolytic reduction of MOLTEN chlorides/oxides** (`NaCl` must be molten, NOT aqueous, or `H₂` evolves instead of `Na`!).\n• **Electrolytic Refining of Cu:** Thick **impure Cu = Anode (+)**, thin **pure Cu = Cathode (−)**, Electrolyte = **acidified `CuSO₄(aq)`**. Precious insoluble `Ag, Au` settle beneath anode as **Anode Mud**.',
            },
          ],
        },
        {
          id: 'chem03-corrosion-prevention-alloys',
          title: '3. Corrosion Prevention, Galvanisation & All NCERT Alloys',
          blocks: [
            {
              type: 'key-points',
              title: 'How Corrosion Is Prevented (Especially Galvanisation)',
              items: [
                '**Rusting Requirement (3-Tube Proof):** BOTH **Oxygen (air)** AND **Water (moisture)** are simultaneously necessary (`Tube A` rusts; `Tube B` boiled water + oil = no O₂ = no rust; `Tube C` dry air + anhydrous `CaCl₂` = no moisture = no rust).',
                '**Galvanisation:** Coating steel/iron with a thin layer of **Zinc (`Zn`)**. **CBSE Trap:** Even if the zinc coat is **scratched**, iron STILL does NOT rust because Zinc is **more reactive** than iron and gets oxidised preferentially!',
                '**Other Methods:** Painting, oiling, greasing, chrome plating, anodising, and **alloying** (mixing iron with Ni & Cr gives rust-proof **Stainless steel**!).',
              ],
            },
            {
              type: 'table',
              caption: 'Complete CBSE Alloy Composition & Property Chart',
              headers: ['Alloy Name', 'Exact Constituent Elements', 'Special Property / Board Use'],
              rows: [
                ['**Stainless Steel**', '`Fe` + small `C` + **Nickel (`Ni`) + Chromium (`Cr`)**', 'Hard and **does not rust** (surgical tools, cutlery).'],
                ['**Brass**', '**Copper (`Cu`) + Zinc (`Zn`)**', 'Poor electrical conductor compared to pure Cu; decorative hardware, musical instruments.'],
                ['**Bronze**', '**Copper (`Cu`) + Tin (`Sn`)**', 'Hard, corrosion-resistant; medals, statues, ship propellers.'],
                ['**Solder**', '**Lead (`Pb`) + Tin (`Sn`)**', '**Low melting point** — used for **welding electrical wires** together!'],
                ['**Amalgam**', '**Mercury (`Hg`)** + any other metal', 'Remember the definition: *If one metal in an alloy is Mercury, it is called an Amalgam* (e.g., dental amalgam).'],
                ['**22-Carat Gold**', '`22` parts pure **`Au`** + `2` parts **`Cu` or `Ag`**', 'Pure `24`-carat gold is too soft for jewellery; alloying makes it hard!'],
              ],
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                'Why cannot Carbon be used to obtain Sodium from Sodium oxide or Aluminium from Aluminium oxide? How is Sodium extracted commercially instead? Write electrode reactions.',
              answer:
                'Sodium and Aluminium have a **much higher affinity for Oxygen than Carbon**, so Carbon cannot reduce `Na₂O` or `Al₂O₃`.\nSodium is extracted by **electrolytic reduction of MOLTEN Sodium chloride (`NaCl`)**:\n• **Cathode (−):** `Na⁺ + e⁻ → Na(l)`\n• **Anode (+):** `2Cl⁻ → Cl₂(g)↑ + 2e⁻`',
              markingTip: 'Emphasize the word "molten" — aqueous brine yields NaOH and H₂, not metallic Sodium!',
            },
            {
              type: 'qa',
              marks: 2,
              tag: 'NCERT',
              question:
                'What is **Anode Mud** in the electrolytic refining of copper, and why does it form below the anode?',
              answer:
                'During electrolytic refining of impure Copper, pure `Cu` oxidises into solution (`Cu → Cu²⁺ + 2e⁻`), more reactive impurities (`Zn, Fe`) remain dissolved as ions, while **less reactive insoluble impurities like Gold (`Au`) and Silver (`Ag`)** drop down and collect beneath the anode as **Anode Mud**.',
            },
          ],
        },
      ],
    },
  ],
};
