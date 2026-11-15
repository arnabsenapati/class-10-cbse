import { Topic } from '../../../types/curriculum';

export const topicChemMastery: Topic = {
  id: 'chem-topic-5',
  slug: 'chem-board-mastery',
  order: 5,
  title: 'Chemistry Board Mastery (Ch 1–4 — 25 Marks)',
  description:
    'Deleted Syllabus Alert (Old Ch 5 Periodic Classification!), Master NCERT Colour/Gas/Precipitate Lookup Table, 12 "Identify Compound X, Y, Z" Board Detective Puzzles, and the 48-Question Chemistry Quiz Arena.',
  ncertChapter: 'Chemistry Board Mastery (Ch 1–4 — 25 Marks)',
  subtopics: [
    {
      id: 'chem-observation-vault-detective-quiz',
      slug: 'chem-observation-vault-detective-quiz',
      title: 'Observation Vault, X-Y-Z Detective Puzzles & 48-Q Quiz Arena',
      subtitle:
        'Rationalized CBSE 2026–27 Scope Shield, Instant Colour/Gas/Precipitate Matrix, 12 Classic "Identify X, Y, Z" Board Mysteries & Full 25-Mark Practice',
      estimatedMinutes: 55,
      difficulty: 'Board Mastery',
      ncertSection: 'CBSE Class 10 Science (Code 086) — Unit I: Chemical Substances (25 Marks)',
      learningObjectives: [
        'Avoid wasting study hours on the completely deleted Periodic Classification of Elements (old NCERT Chapter 5).',
        'Use the Master Colour/Gas/Precipitate Lookup Table to crack "Identify X, Y, Z" competency questions in seconds.',
        'Score 90%+ across 48 CBSE Board MCQs, Assertion–Reason traps, and Case-Based puzzles in the Chemistry Quiz Arena.',
      ],
      keywords: [
        'Periodic Classification deleted',
        'Identify X Y Z chemistry',
        'Precipitate colour chart',
        'Gas tests CBSE',
        '25 marks chemistry blueprint',
        'Chemistry quiz arena',
      ],
      sections: [
        {
          id: 'chem-deleted-syllabus-and-blueprint',
          title: '1. CBSE 2026–27 Rationalized Syllabus Warning & 25-Mark Blueprint',
          blocks: [
            {
              type: 'callout',
              variant: 'trap',
              title: 'DELETED CHAPTER ALERT — DO NOT Study "Periodic Classification of Elements"!',
              body: '**Periodic Classification of Elements (old NCERT Chapter 5)** — including Döbereiner’s Triads, Newlands’ Law of Octaves, Mendeleev’s Periodic Table, and Modern Periodic Table trends (valency, atomic size, metallic character) — has been **COMPLETELY DELETED** from the rationalized NCERT textbook and **will NOT be asked in CBSE 2026–27 Class 10 Board Exams**! Focus 100% of your Chemistry revision exclusively on **Chapters 1, 2, 3, and 4**.',
            },
            {
              type: 'table',
              caption: 'CBSE Science (Code 086) Unit I: Chemical Substances — Nature & Behaviour (25 Marks / 80)',
              headers: ['Rationalized NCERT Chapter', 'Estimated Marks', 'Highest-Probability 3M / 5M Questions'],
              rows: [
                [
                  '**Ch 1: Chemical Reactions & Equations**',
                  '`6 – 7 Marks`',
                  'Balancing `Fe + H₂O`, Thermal `FeSO₄` / `Pb(NO₃)₂`, Water electrolysis `2:1`, `AgCl/AgBr`, Redox agent traps (`CuO + H₂`, `MnO₂ + HCl`), Corrosion & `N₂` rancidity.',
                ],
                [
                  '**Ch 2: Acids, Bases and Salts**',
                  '`6 – 7 Marks`',
                  '`Zn + NaOH`, `CO₂` milky → excess clear, Dry `HCl` + `CaCl₂` guard tube, Acid into Water dilution, Tooth/Digestive pH, Chlor-Alkali + all 5 `NaCl` salts (`POP 373 K`, Baking Powder).',
                ],
                [
                  '**Ch 3: Metals and Non-metals**',
                  '`6 Marks`',
                  'Physical exceptions (`Ga, Hg, I₂, Graphite`), Amphoteric `Al₂O₃/ZnO`, `Mg/Mn + HNO₃`, `Aqua Regia`, Ionic dot (`MgCl₂`), Roasting vs Calcination, Thermit, Cu refining (`Anode mud`), 3-tube rusting, Alloys.',
                ],
                [
                  '**Ch 4: Carbon and its Compounds**',
                  '`6 Marks`',
                  'Why no `C⁴⁺/C⁴⁻`, Diamond vs Graphite, Isomers (`C₄H₁₀`, `C₅H₁₂`), Cyclohexane vs Benzene, Homologous `−CH₂−`, Ethanol (`Na`, `443 K` dehydration), Ethanoic acid (`Esterification/Saponification`), Micelle & hard water scum.',
                ],
              ],
            },
          ],
        },
        {
          id: 'chem-master-observation-table',
          title: '2. Master Colour, Gas & Precipitate Quick-Lookup Table (Ch 1–4)',
          blocks: [
            {
              type: 'table',
              caption: 'One-Glance NCERT Lab Observation Decoder for Board Exams',
              headers: ['Clue Seen in Question', 'Exact Substance / Species', 'Confirming NCERT Reaction / Test'],
              rows: [
                ['**Dazzling white flame → White ash**', '`Mg` burning → **`MgO`**', '`2Mg + O₂ → 2MgO` (ash dissolves slightly to give basic `Mg(OH)₂`).'],
                ['**Golden-yellow precipitate**', '**`PbI₂(s)`** (Lead(II) iodide)', '`Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃`.'],
                ['**White precipitate insoluble in HCl**', '**`BaSO₄(s)`** (Barium sulphate)', '`Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl`.'],
                ['**Blue solution → Pale green + brown nail**', '`CuSO₄` → **`FeSO₄ + Cu`**', '`Fe + CuSO₄ → FeSO₄ + Cu`.'],
                ['**Green crystals → White → Brown + burning sulphur**', '**`FeSO₄·7H₂O` → `Fe₂O₃ + SO₂ + SO₃`**', '`2FeSO₄ —Δ→ Fe₂O₃ + SO₂ + SO₃`.'],
                ['**White salt → Yellow residue + Brown fumes**', '**`Pb(NO₃)₂` → `PbO + NO₂(brown)`**', '`2Pb(NO₃)₂ —Δ→ 2PbO + 4NO₂ + O₂`.'],
                ['**White / Pale-yellow powder → Grey in sun**', '**`AgCl` / `AgBr` → `Ag(s)`**', '`2AgCl —hν→ 2Ag + Cl₂` (B&W photography).'],
                ['**Shiny brown metal turns Black on heating**', '**`Cu` → `CuO(s)`**', '`2Cu + O₂ —Δ→ 2CuO`; reversed by `H₂` gas!'],
                ['**Blue crystals → White powder on heating**', '**`CuSO₄·5H₂O` → `CuSO₄`**', 'Restores blue colour upon adding 2 drops of water!'],
                ['**Gas burns with a POP sound**', '**`H₂(g)`**', 'Metal + dil. acid, `Zn + NaOH`, Ethanol + `Na`, Cathode of water electrolysis.'],
                ['**Gas relights glowing wooden splint**', '**`O₂(g)`**', 'Anode of water electrolysis (`1:2` vs `H₂`), `2HgO —Δ→ 2Hg + O₂`.'],
                ['**Gas turns limewater milky (clear in excess)**', '**`CO₂(g)`**', 'Carbonates/bicarbonates + acid; forms `CaCO₃↓`, then soluble `Ca(HCO₃)₂`.'],
                ['**Greenish-yellow pungent gas (bleaches)**', '**`Cl₂(g)`**', '`MnO₂ + 4HCl`, Chlor-Alkali Anode (+), `AgCl` photolysis.'],
                ['**Green coating on Copper; Black on Silver**', '**`CuCO₃·Cu(OH)₂`** | **`Ag₂S`**', 'Atmospheric corrosion in moist air (`CO₂` for Cu; `H₂S` for Ag).'],
                ['**Sweet fruity-smelling liquid**', '**Ester (`CH₃COOC₂H₅`)**', '`CH₃COOH + C₂H₅OH ⇌(conc. H₂SO₄) CH₃COOC₂H₅ + H₂O`.'],
              ],
            },
          ],
        },
        {
          id: 'chem-xyz-detective-puzzles',
          title: '3. 12 "Identify Compound X, Y, Z" CBSE Detective Puzzles',
          blocks: [
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                '**Puzzle 1:** A solution of substance `X` is used for whitewashing.\n(i) Name `X` and write its formula.\n(ii) Write the reaction of `X` with water to form `Y`.\n(iii) Why do walls shine brightly after 2–3 days?',
              answer:
                '(i) `X` = **Quicklime / Calcium oxide (`CaO`)**.\n(ii) `CaO(s) + H₂O(l) → Ca(OH)₂(aq)` (`Y` = Slaked lime).\n(iii) `Ca(OH)₂` reacts slowly with atmospheric `CO₂` forming a thin, shiny layer of **Calcium carbonate (`CaCO₃`)**: `Ca(OH)₂ + CO₂ → CaCO₃ + H₂O`.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                '**Puzzle 2:** Pale green crystals `X` on gentle heating become dirty white `Y`, and on strong heating leave a reddish-brown residue `Z` with gases smelling like burning sulphur. Identify `X, Y, Z`.',
              answer:
                '• `X` = **Hydrated Ferrous sulphate (`FeSO₄·7H₂O`)**\n• `Y` = **Anhydrous Ferrous sulphate (`FeSO₄`)**\n• `Z` = **Ferric oxide (`Fe₂O₃`)**\nGases = **`SO₂` and `SO₃`**. Equation: `2FeSO₄(s) —Δ→ Fe₂O₃(s) + SO₂(g) + SO₃(g)`.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                '**Puzzle 3:** A white crystalline salt `X` on strong heating gives a yellow residue `Y`, oxygen gas, and a brown gas `Z`. On dissolving `X` in water and adding `KI`, a bright yellow precipitate `W` forms. Identify `X, Y, Z, W`.',
              answer:
                '• `X` = **Lead(II) nitrate (`Pb(NO₃)₂`)**\n• `Y` = **Lead(II) oxide (`PbO`)**\n• `Z` = **Nitrogen dioxide (`NO₂`)**\n• `W` = **Lead(II) iodide (`PbI₂`)** (`Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃`).',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                '**Puzzle 4:** Compound `X` (used in B&W photography) turns grey `Y` when left in sunlight, releasing greenish-yellow gas `Z`. Identify `X, Y, Z` (give the classic pale-yellow halide too).',
              answer:
                '• `X` = **Silver chloride (`AgCl`, white)** or **Silver bromide (`AgBr`, pale yellow)**\n• `Y` = **Metallic Silver (`Ag`, grey)**\n• `Z` = **`Cl₂` (or `Br₂` for AgBr)**.\nEquation: `2AgBr(s) —Sunlight→ 2Ag(s) + Br₂(g)`.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                '**Puzzle 5:** Electrolysis of aqueous solution `X` (Brine) yields alkali `Y`, gas `G₁` at anode, and gas `G₂` at cathode. When `G₁` is passed over dry slaked lime, disinfectant `Z` is formed. Identify `X, Y, G₁, G₂, Z`.',
              answer:
                '• `X` = **Aqueous `NaCl` (Brine)**\n• `Y` = **Sodium hydroxide (`NaOH`)**\n• `G₁` (Anode) = **`Cl₂(g)`**, `G₂` (Cathode) = **`H₂(g)`**\n• `Z` = **Bleaching powder (`CaOCl₂`)**: `Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O`.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                '**Puzzle 6:** A white powder `X` used by doctors to support fractured bones reacts with water to set into a hard mass `Y`. Heating `Y` strictly at `373 K` regenerates `X`, whereas overheating above `400 K` makes useless `Z`. Identify `X, Y, Z`.',
              answer:
                '• `X` = **Plaster of Paris (`CaSO₄·½H₂O`)**\n• `Y` = **Gypsum (`CaSO₄·2H₂O`)**\n• `Z` = **Anhydrous `CaSO₄` (Dead-burnt plaster)**.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                '**Puzzle 7:** Salt `X` is added to make crispy pakoras and antacids. On heating, `X` decomposes into `Y`, water, and `CO₂`. Recrystallising `Y` with 10 water molecules produces `Z` (used to remove permanent water hardness). Identify `X, Y, Z`.',
              answer:
                '• `X` = **Baking soda (`NaHCO₃`)**\n• `Y` = **Soda ash / Anhydrous Sodium carbonate (`Na₂CO₃`)**\n• `Z` = **Washing soda (`Na₂CO₃·10H₂O`)**.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                '**Puzzle 8:** A metal `M` kept under kerosene reacts violently with cold water forming alkali `A` and gas `G` which catches a golden-yellow flame. Identify `M, A, G`.',
              answer:
                '• `M` = **Sodium (`Na`)** (lilac flame would be `K`)\n• `A` = **Sodium hydroxide (`NaOH`)**\n• `G` = **Hydrogen (`H₂`)**: `2Na + 2H₂O → 2NaOH + H₂ + Heat`.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                '**Puzzle 9:** Oxide `X` of a silvery metal `M` reacts with BOTH `HCl` and `NaOH` to give salt and water. Metal `M` also reacts with `Fe₂O₃` in a dramatic molten-iron railway welding reaction. Identify `M`, `X`, and the sodium salt formed.',
              answer:
                '• `M` = **Aluminium (`Al`)** (Thermit reaction: `Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃ + Heat`)\n• `X` = **Aluminium oxide (`Al₂O₃` — Amphoteric oxide)**\n• Sodium salt with `NaOH` = **Sodium aluminate (`NaAlO₂`)**: `Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O`.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                '**Puzzle 10:** Metal `M` exists as a sulphide ore `MS` (Calamine is `MCO₃`). Roasting `MS` gives oxide `MO`, which on reduction with Carbon gives `M`, used to galvanise iron! Identify `M`, `MS`, `MCO₃`, and `MO`.',
              answer:
                '• `M` = **Zinc (`Zn`)** (used in Galvanisation)\n• `MS` = **Zinc blende (`ZnS`)**\n• `MCO₃` = **Calamine (`ZnCO₃`)**\n• `MO` = **Zinc oxide (`ZnO`)**.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                '**Puzzle 11:** Compound `A` (`C₂H₆O`) oxidises with alkaline `KMnO₄` to form carboxylic acid `B` (`C₂H₄O₂`, freezes at `290 K`). When `A` and `B` are warmed with `conc. H₂SO₄`, a fruity-smelling compound `C` forms. Identify `A, B, C`.',
              answer:
                '• `A` = **Ethanol (`CH₃CH₂OH`)**\n• `B` = **Ethanoic acid (`CH₃COOH` — glacial acetic acid)**\n• `C` = **Ethyl ethanoate (`CH₃COOC₂H₅`)**.',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                '**Puzzle 12:** An unsaturated hydrocarbon `X` (`C₂H₄`) adds `H₂` over Nickel catalyst to form `Y` (`C₂H₆`). When `Y` reacts with `Cl₂` in sunlight, `Z` (`C₂H₅Cl`) forms. Meanwhile, `X` itself is obtained by heating `A` (`C₂H₅OH`) with `conc. H₂SO₄` at `443 K`. Identify `X, Y, Z, A`.',
              answer:
                '• `A` = **Ethanol (`CH₃CH₂OH`)**\n• `X` = **Ethene (`C₂H₄`)**\n• `Y` = **Ethane (`C₂H₆`)**\n• `Z` = **Chloroethane (`C₂H₅Cl`)**.',
            },
          ],
        },
        {
          id: 'chemistry-quiz-section',
          title: '4. Chemistry 48-Q Board Exam Quiz Arena',
          blocks: [
            {
              type: 'paragraph',
              text: 'Test your complete Ch 1–4 command offline! Filter by chapter or Question Type (MCQs, Assertion–Reason traps, and Case-Based competency passages) and save your best Chemistry percentage score.',
            },
            {
              type: 'lab',
              labId: 'chemistry-quiz-arena',
              title: 'Chemistry 48-Q Board Exam Quiz Arena',
              caption: '48 curated CBSE Class 10 Chemistry questions across all 4 rationalized chapters and X-Y-Z mastery.',
            },
          ],
        },
      ],
    },
  ],
};
