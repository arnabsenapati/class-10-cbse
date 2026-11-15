import { Topic } from '../../../types/curriculum';

export const topicReactions: Topic = {
  id: 'chem-topic-1',
  slug: 'chem-reactions-and-equations',
  order: 1,
  title: 'Ch 1: Chemical Reactions & Equations',
  description:
    'Master balancing equations by hit-and-trial, exothermic vs endothermic energetics, Thermal/Electrolytic/Photolytic decomposition, displacement, redox agent traps, corrosion, and rancidity.',
  ncertChapter: 'Chapter 1: Chemical Reactions and Equations',
  subtopics: [
    {
      id: 'chem01-balancing-combination-decomposition',
      slug: 'chem01-balancing-combination-decomposition',
      title: 'Balancing Equations, Combination & Decomposition Trio',
      subtitle:
        'Macroscopic signs of change, Law of Conservation of Mass, Exothermic Respiration/Whitewashing, and Thermal / Electrolytic / Photolytic Decomposition',
      estimatedMinutes: 40,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT Ch 1 — Sections 1.1 to 1.2.2',
      learningObjectives: [
        'Identify the 4 visible laboratory indicators of a chemical reaction (state, colour, gas evolution, temperature change, precipitate).',
        'Balance chemical equations systematically without altering subscripts inside molecular formulae.',
        'Classify Combination, Exothermic (Respiration, Slaking lime), Endothermic, and all three Decomposition pathways (Heat, Electricity, Sunlight).',
      ],
      keywords: [
        'Balanced chemical equation',
        'Law of Conservation of Mass',
        'Exothermic reaction',
        'Thermal decomposition',
        'Electrolysis of water',
        'Photolytic decomposition',
      ],
      sections: [
        {
          id: 'chem01-signs-and-balancing',
          title: '1. Signs of Reaction & Balancing Without Breaking Formulae',
          blocks: [
            {
              type: 'quick-summary',
              title: '60-Second Ch 1 Reaction Essentials',
              bullets: [
                '**4 Lab Signs of Chemical Change:** Change in **state**, change in **colour**, **evolution of a gas**, or **change in temperature** (plus formation of an insoluble **precipitate**).',
                '**Magnesium Ribbon Cleaning Rule:** Before burning Mg ribbon, rub it with sandpaper to remove the protective basic magnesium carbonate/oxide coating (`MgO / MgCO₃`).',
                '**Law of Conservation of Mass:** Total mass of reactants = total mass of products → **number of atoms of each element must be equal on both sides**.',
                '**Golden Balancing Rule:** Change **ONLY the coefficient** in front of a formula — **NEVER change subscripts** inside a formula!',
              ],
            },
            {
              type: 'steps',
              title: 'Step-by-Step Hit-and-Trial Balancing (NCERT Classic: Fe + H₂O → Fe₃O₄ + H₂)',
              items: [
                {
                  label: 'Draw boxes around every formula (Do NOT touch inside the boxes!)',
                  detail: '`[Fe] + [H₂O] → [Fe₃O₄] + [H₂]`. Subscripts (`2`, `3`, `4`) are locked permanently.',
                },
                {
                  label: 'Start with the compound containing the maximum number of atoms',
                  detail: 'Pick `Fe₃O₄`, and pick **Oxygen (4 atoms)** first. Multiply `H₂O` on LHS by **4**: `Fe + 4H₂O → Fe₃O₄ + H₂`.',
                },
                {
                  label: 'Balance Hydrogen next',
                  detail: 'LHS now has `4 × 2 = 8` H atoms; RHS has `2`. Multiply `H₂` on RHS by **4**: `Fe + 4H₂O → Fe₃O₄ + 4H₂`.',
                },
                {
                  label: 'Balance Iron last & add physical states/conditions',
                  detail: 'RHS has `3` Fe atoms → multiply `Fe` on LHS by **3**. Final equation: **`3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)`**.',
                  example: 'Notice `(g)` on `H₂O` — Iron reacts ONLY with STEAM, not cold/hot liquid water!',
                },
              ],
            },
            {
              type: 'notebook-mistake',
              studentName: 'Aarav',
              title: 'Changing Subscripts Instead of Coefficients',
              wrongWork: 'H₂ + O₂ → H₂O₂ (balanced oxygen by turning water into peroxide!)',
              teacherFix: '2H₂(g) + O₂(g) → 2H₂O(l)',
              whyWrong:
                '`H₂O₂` is Hydrogen peroxide (a bleaching/antiseptic chemical), NOT water (`H₂O`)! Always place integers **in front** of intact chemical formulae.',
            },
            {
              type: 'checkpoint',
              prompt:
                'In the balanced equation `a Pb(NO₃)₂(s) —Δ→ b PbO(s) + c NO₂(g) + d O₂(g)`, what are the simplest integer values `(a, b, c, d)`?',
              options: [
                { id: 'opt-1', label: '(1, 1, 2, 1)' },
                { id: 'opt-2', label: '(2, 2, 4, 1)' },
                { id: 'opt-3', label: '(2, 2, 2, 2)' },
                { id: 'opt-4', label: '(1, 1, 2, 2)' },
              ],
              correctIds: ['opt-2'],
              successMsg: 'Spot on! LHS has 2 Pb, 4 N, and 12 O; RHS has 2 Pb, 4 N, and (2 + 8 + 2 = 12) O!',
              hintMsg: 'Count Oxygen atoms carefully: `Pb(NO₃)₂` has `2 × 3 = 6` O atoms per unit; `PbO + NO₂ + O₂` needs an even number of `Pb(NO₃)₂` units.',
            },
          ],
        },
        {
          id: 'chem01-combination-exothermic',
          title: '2. Combination Reactions, Whitewashing & Exothermic Respiration',
          blocks: [
            {
              type: 'paragraph',
              text: 'A **Combination Reaction** occurs when two or more reactants (elements or compounds) combine to form a **single product** (`A + B → AB`). Most combination reactions are **Exothermic** (release heat alongside products).',
            },
            {
              type: 'table',
              caption: 'High-Yield CBSE Combination & Exothermic Equations',
              headers: ['Reaction Name', 'Balanced Equation', 'Key Board Observation / Concept'],
              rows: [
                [
                  '**Slaking of Quicklime**',
                  '`CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat`',
                  'Vigorous hissing sound; beaker becomes very hot (**Exothermic Combination**).',
                ],
                [
                  '**Whitewashing Finish**',
                  '`Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l)`',
                  'Slowly reacts over 2–3 days with air `CO₂` to give a **shiny white finish** (`CaCO₃`, same formula as marble!).',
                ],
                [
                  '**Burning Coal / Natural Gas**',
                  '`C(s) + O₂(g) → CO₂(g)` | `CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) + Heat`',
                  'Combustion of fuels is always exothermic.',
                ],
                [
                  '**Cellular Respiration**',
                  '`C₆H₁₂O₆(aq) + 6O₂(aq) → 6CO₂(aq) + 6H₂O(l) + Energy`',
                  'NCERT favourite: **Why is respiration considered an exothermic reaction?** Because glucose oxidises in cells releasing usable energy!',
                ],
                [
                  '**Compost Decomposition**',
                  'Vegetable matter → Compost + Heat',
                  'Even though biological decay breaks matter down, it releases heat → **Exothermic**!',
                ],
              ],
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'Endothermic vs Exothermic Rule of Thumb',
              body: '**Exothermic reactions** release energy (`+ Heat` on product side: Respiration, `CaO + H₂O`, Neutralisation, Dilution of acid). **Endothermic reactions** absorb energy (`Δ`, Electricity, or Sunlight on arrow: ALL Decomposition reactions, `Ba(OH)₂ + 2NH₄Cl → BaCl₂ + 2NH₃ + 2H₂O` which makes the flask ice-cold, and Photosynthesis!).',
            },
          ],
        },
        {
          id: 'chem01-decomposition-trio',
          title: '3. The Decomposition Trio: Thermal, Electrolytic (2:1) & Photolytic',
          blocks: [
            {
              type: 'paragraph',
              text: 'A **Decomposition Reaction** (`AB → A + B + ...`) is the exact opposite of combination: a **single reactant breaks down into simpler products** when supplied with external energy in one of three forms — **Heat (Thermal)**, **Electricity (Electrolytic)**, or **Sunlight (Photolytic)**.',
            },
            {
              type: 'visual-diagram',
              diagramId: 'decomposition-trio-visual',
              title: 'Interactive Decomposition Trio: Heat vs Electricity (2:1) vs Sunlight',
              caption: 'Switch between FeSO₄ & Pb(NO₃)₂ thermal tubes, toggle the 6V electrolysis switch to see double H₂ volume, and expose AgCl/AgBr to sunlight!',
            },
            {
              type: 'table',
              caption: 'Macroscopic NCERT Observation Matrix — Decomposition Reactions',
              headers: ['Type & Energy', 'Balanced Equation', 'Colour Shift & Gas / Residue'],
              rows: [
                [
                  '**Thermal (Δ)**',
                  '`FeSO₄·7H₂O(s) —Δ→ FeSO₄(s) + 7H₂O(g)`\n`2FeSO₄(s) —Δ→ Fe₂O₃(s) + SO₂(g) + SO₃(g)`',
                  'Pale green crystals → dirty white anhydrous → **reddish-brown `Fe₂O₃`** + choking **burning-sulphur** smell (`SO₂/SO₃`).',
                ],
                [
                  '**Thermal (Δ)**',
                  '`CaCO₃(s) —Δ→ CaO(s) + CO₂(g)`',
                  'Limestone decomposes to **Quicklime (`CaO`)** for cement manufacture + `CO₂` (turns limewater milky).',
                ],
                [
                  '**Thermal (Δ)**',
                  '`2Pb(NO₃)₂(s) —Δ→ 2PbO(s) + 4NO₂(g) + O₂(g)`',
                  'White salt crackles → **yellow `PbO`** residue + swirling **reddish-brown `NO₂` fumes**.',
                ],
                [
                  '**Electrolytic**',
                  '`2H₂O(l) —Electricity→ 2H₂(g) + O₂(g)`',
                  '**2:1 gas volume ratio**: double `H₂` at **Cathode (−)** (burns with pop sound) vs `O₂` at **Anode (+)** (relights glowing splint). Few drops of dil. `H₂SO₄` make water conductive.',
                ],
                [
                  '**Photolytic (hν)**',
                  '`2AgCl(s) —Sunlight→ 2Ag(s) + Cl₂(g)`\n`2AgBr(s) —Sunlight→ 2Ag(s) + Br₂(g)`',
                  'White `AgCl` (or pale yellow `AgBr`) turns **grey `Ag`** in sunlight. Used in **Black & White photography**; stored in dark bottles!',
                ],
              ],
            },
            {
              type: 'lab',
              labId: 'chemistry-reaction-bench',
              title: 'Interactive NCERT Wet-Lab Bench & Equation Balancer',
              caption: 'Run all 10 animated reactions in Tab 1, and practice CBSE hit-and-trial balancing + 6 indicators in Tab 2!',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                'During electrolysis of acidified water, why is the volume of gas collected in one test tube double the volume collected in the other? Name both gases and their respective electrodes.',
              answer:
                'In `2H₂O(l) —Electricity→ 2H₂(g) + O₂(g)`, water contains Hydrogen and Oxygen atoms in a **2 : 1** molar/volume ratio. Therefore, **Hydrogen (`H₂`)** collected at the **Cathode (negative electrode)** has exactly **double** the volume of **Oxygen (`O₂`)** collected at the **Anode (positive electrode)**.',
              markingTip: 'Always state the balanced equation + "Cathode = H₂ (2 vol)" + "Anode = O₂ (1 vol)" for full 3 marks.',
            },
            {
              type: 'qa',
              marks: 2,
              tag: 'NCERT',
              question:
                'A white silver salt `X` turns grey when placed in sunlight in a china dish. Identify `X`, write the balanced chemical equation, and state one commercial application of a similar reaction.',
              answer:
                'Salt `X` is **Silver chloride (`AgCl`)**.\nEquation: `2AgCl(s) —Sunlight→ 2Ag(s) + Cl₂(g)` (photolytic decomposition).\nApplication: Both `AgCl` and **`AgBr` (`2AgBr → 2Ag + Br₂`)** are used in **Black & White photography**.',
            },
          ],
        },
      ],
    },
    {
      id: 'chem01-displacement-redox-corrosion',
      slug: 'chem01-displacement-redox-corrosion',
      title: 'Displacement, Redox Agent Traps, Corrosion & Rancidity',
      subtitle:
        'Single vs Double Displacement Precipitation, CuO/ZnO/MnO₂ Redox Equations, Oxidising vs Reducing Agent Identification, and Real-Life Prevention',
      estimatedMinutes: 40,
      difficulty: 'Board Mastery',
      ncertSection: 'NCERT Ch 1 — Sections 1.2.3 to 1.3',
      learningObjectives: [
        'Distinguish single displacement (reactivity-driven) from double displacement (ion-exchange precipitation).',
        'Identify oxidised/reduced species and oxidising/reducing agents accurately without swapping them.',
        'Explain corrosion of Iron, Copper, and Silver with chemical formulae and list anti-rancidity methods.',
      ],
      keywords: [
        'Single displacement',
        'Double displacement',
        'Precipitation reaction',
        'Redox reaction',
        'Oxidising agent',
        'Reducing agent',
        'Corrosion and Rancidity',
      ],
      sections: [
        {
          id: 'chem01-displacement-precipitation',
          title: '1. Single Displacement vs Double Displacement (Precipitation)',
          blocks: [
            {
              type: 'paragraph',
              text: 'In a **Single Displacement Reaction**, a more reactive element pushes a less reactive element out of its compound (`A + BC → AC + B`). In a **Double Displacement Reaction**, two aqueous ionic compounds exchange their ions (`AB + CD → AD + CB`), almost always forming an insoluble solid called a **precipitate**!',
            },
            {
              type: 'table',
              caption: 'NCERT Displacement & Precipitation Benchmarks',
              headers: ['Category', 'Balanced Equation', 'Visible Observation'],
              rows: [
                [
                  '**Single Displacement**',
                  '`Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)`',
                  'Blue `CuSO₄` fades to **pale green `FeSO₄`**; **reddish-brown `Cu`** coats iron nail.',
                ],
                [
                  '**Single Displacement**',
                  '`Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)`',
                  'Blue solution turns **colourless**; brown copper deposits on zinc.',
                ],
                [
                  '**Single Displacement**',
                  '`Pb(s) + CuCl₂(aq) → PbCl₂(aq) + Cu(s)`',
                  'Bluish-green `CuCl₂` fades to colourless; brown `Cu` deposits on lead.',
                ],
                [
                  '**Double Displacement (Ppt)**',
                  '`Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s)↓ + 2NaCl(aq)`',
                  'Instantaneous **white precipitate** of Barium sulphate (`BaSO₄`) insoluble in dil. `HCl`.',
                ],
                [
                  '**Double Displacement (Ppt)**',
                  '`Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s)↓ + 2KNO₃(aq)`',
                  'Dense **golden-yellow precipitate** of Lead(II) iodide (`PbI₂`).',
                ],
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'Is Double Displacement Always a Redox Reaction?',
              body: '**NO!** Precipitation reactions like `Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl` and Neutralisation (`HCl + NaOH → NaCl + H₂O`) involve simple **ion exchange** with NO change in oxidation state — they are **non-redox** reactions!',
            },
          ],
        },
        {
          id: 'chem01-redox-agents-trap',
          title: '2. Redox Reactions & The Oxidising vs Reducing Agent Trap',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Oxidation vs Reduction Memory Anchor (OIL-RIG / O-H Rule)',
              bullets: [
                '**Oxidation:** Gain of **Oxygen**, OR loss of **Hydrogen**, OR loss of **electrons**.',
                '**Reduction:** Loss of **Oxygen**, OR gain of **Hydrogen**, OR gain of **electrons**.',
                '**Redox Reaction:** Whenever one reactant gets oxidised, the other simultaneously gets reduced.',
                '**Golden Agent Flip Rule:** The substance that gets **Oxidised** acts as the **Reducing Agent**; the substance that gets **Reduced** acts as the **Oxidising Agent**!',
              ],
            },
            {
              type: 'table',
              caption: 'The 4 Most-Tested NCERT Redox Equations (Memorise Every Column!)',
              headers: ['Balanced Equation', 'Substance Oxidised (= Reducing Agent)', 'Substance Reduced (= Oxidising Agent)', 'Visual Clue'],
              rows: [
                [
                  '`2Cu(s) + O₂(g) —Δ→ 2CuO(s)`',
                  '`Cu` (gains O → `CuO`)',
                  '`O₂` (oxidises Cu)',
                  'Shiny brown Cu surface turns **black `CuO`**!',
                ],
                [
                  '`CuO(s) + H₂(g) —Δ→ Cu(s) + H₂O(g)`',
                  '`H₂` (gains O → `H₂O`)',
                  '`CuO` (loses O → `Cu`)',
                  'Black `CuO` reverts to **brown `Cu`**!',
                ],
                [
                  '`ZnO(s) + C(s) → Zn(s) + CO(g)`',
                  '`C` (gains O → `CO`)',
                  '`ZnO` (loses O → `Zn`)',
                  'Carbon extraction of Zinc.',
                ],
                [
                  '`MnO₂(s) + 4HCl(aq) → MnCl₂(aq) + 2H₂O(l) + Cl₂(g)`',
                  '`HCl` (loses H → `Cl₂`)',
                  '`MnO₂` (loses O → `MnCl₂`)',
                  'Greenish-yellow pungent `Cl₂` gas released.',
                ],
              ],
            },
            {
              type: 'notebook-mistake',
              studentName: 'Riya',
              title: 'Picking Products Instead of Reactants as Agents',
              wrongWork: 'In CuO + H₂ → Cu + H₂O: Oxidised = H₂O, Reduced = Cu, Oxidising Agent = Cu',
              teacherFix: 'Oxidised = H₂ (Reducing Agent); Reduced = CuO (Oxidising Agent)',
              whyWrong:
                '**ALL four answers** (substance oxidised, substance reduced, oxidising agent, reducing agent) MUST come from the **LEFT-HAND SIDE (Reactants)**, NEVER from the products!',
            },
            {
              type: 'checkpoint',
              prompt:
                'In the reaction `MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂`, identify the **Oxidising Agent** and the **Substance Oxidised**:',
              options: [
                { id: 'a', label: 'Oxidising Agent = MnO₂ ; Substance Oxidised = HCl' },
                { id: 'b', label: 'Oxidising Agent = HCl ; Substance Oxidised = MnO₂' },
                { id: 'c', label: 'Oxidising Agent = MnCl₂ ; Substance Oxidised = Cl₂' },
                { id: 'd', label: 'Oxidising Agent = H₂O ; Substance Oxidised = MnO₂' },
              ],
              correctIds: ['a'],
              successMsg: 'Nailed it! `MnO₂` loses oxygen (gets reduced → Oxidising Agent), while `HCl` loses hydrogen to become `Cl₂` (gets oxidised → Reducing Agent).',
              hintMsg: 'Check LHS reactants only: which reactant loses oxygen (`MnO₂`) and which loses hydrogen (`HCl`)?',
            },
          ],
        },
        {
          id: 'chem01-corrosion-rancidity',
          title: '3. Everyday Oxidation: Corrosion & Rancidity',
          blocks: [
            {
              type: 'table',
              caption: 'Corrosion of Metals — Formulae & Colours Tested in MCQs',
              headers: ['Metal', 'Tarnish / Corrosion Product', 'Colour Observed', 'Chemical Cause'],
              rows: [
                [
                  '**Iron (Fe)**',
                  'Hydrated iron(III) oxide: **`Fe₂O₃·xH₂O`** (Rust)',
                  'Reddish-brown flaky powder',
                  'Moist air (`O₂ + H₂O`) slowly oxidises iron.',
                ],
                [
                  '**Copper (Cu)**',
                  'Basic copper carbonate: **`CuCO₃·Cu(OH)₂`**',
                  'Green coating',
                  'Moist air + `CO₂` + `O₂` + `H₂O`.',
                ],
                [
                  '**Silver (Ag)**',
                  'Silver sulphide: **`Ag₂S`**',
                  'Black tarnish',
                  'Traces of Hydrogen sulphide (`H₂S`) gas in air.',
                ],
              ],
            },
            {
              type: 'key-points',
              title: 'Rancidity (Oxidation of Fats & Oils) & 4 Prevention Methods',
              items: [
                '**What is Rancidity?** Aerial oxidation of fats and oils in food, changing their smell and taste unpleasantly.',
                '**Method 1 — Flushing with Nitrogen (`N₂`):** Manufacturers flush bags of potato chips with **unreactive Nitrogen (`N₂`) gas** to displace oxygen and prevent oxidation.',
                '**Method 2 — Antioxidants:** Adding substances that slow oxidation (e.g., BHA, BHT, Vitamin E/C) directly to fatty foods.',
                '**Method 3 & 4 — Airtight Containers & Refrigeration:** Keeps oxygen out and lowers temperature to slow oxidation rate.',
              ],
            },
            {
              type: 'qa',
              marks: 2,
              tag: 'NCERT',
              question:
                'A shiny brown element `X` on heating in air becomes black in colour. Name element `X` and the black compound formed. How can the black compound be turned back into `X`?',
              answer:
                'Element `X` is **Copper (`Cu`)** and the black compound is **Copper(II) oxide (`CuO`)**: `2Cu + O₂ —Δ→ 2CuO`.\nPassing **Hydrogen (`H₂`) gas** over heated `CuO` reduces it back to shiny brown Copper: `CuO + H₂ —Δ→ Cu + H₂O`.',
              markingTip: 'Write both balanced equations and name the colours (shiny brown → black → brown) for full marks.',
            },
            {
              type: 'qa',
              marks: 1,
              tag: 'Assertion-Reason',
              question:
                '**Assertion (A):** Chips manufacturers flush bags of chips with Nitrogen gas.\n**Reason (R):** Nitrogen is highly reactive and combines with oil to improve taste.',
              answer:
                '**A is true, but R is false.** Nitrogen is an **unreactive (inert)** gas at room temperature; it prevents oxidation (rancidity) by displacing oxygen.',
            },
          ],
        },
      ],
    },
  ],
};
