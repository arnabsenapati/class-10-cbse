import { Topic } from '../../../types/curriculum';

export const topicCarbon: Topic = {
  id: 'chem-topic-4',
  slug: 'chem-carbon-and-compounds',
  order: 4,
  title: 'Ch 4: Carbon and its Compounds',
  description:
    'Master why Carbon shares electrons (covalent bonding), Diamond/Graphite/C-60 allotropes, Catenation, Butane/Pentane structural isomers, Cyclohexane vs Benzene, Homologous series, Functional groups, Ethanol, Ethanoic acid, and 3D Soap Micelles.',
  ncertChapter: 'Chapter 4: Carbon and its Compounds',
  subtopics: [
    {
      id: 'chem04-bonding-allotropes-homologous',
      slug: 'chem04-bonding-allotropes-homologous',
      title: 'Covalent Bonding, Allotropes, Isomers & Homologous Series',
      subtitle:
        'Why No C⁴⁺/C⁴⁻ Ions, Electron-Dot Diagrams (CH₄, C₂H₄, C₂H₂, CO₂, N₂, S₈), Diamond vs Graphite vs C-60, Isomers, Cyclohexane vs Benzene, Homologous Series & IUPAC Rules',
      estimatedMinutes: 50,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT Ch 4 — Sections 4.1 to 4.2.5',
      learningObjectives: [
        'Explain in exact NCERT words why Carbon forms covalent bonds instead of `C⁴⁺` cations or `C⁴⁻` anions.',
        'Draw electron-dot structures and distinguish structural isomers of Butane (`2`) and Pentane (`3`), plus Cyclohexane (`C₆H₁₂`) vs Benzene (`C₆H₆`).',
        'Predict members of a Homologous Series (`−CH₂−` / `14 u`) and name organic molecules using Halo, Alcohol, Aldehyde, Ketone, and Carboxylic acid suffixes/prefixes.',
      ],
      keywords: [
        'Covalent bonding',
        'Catenation and Tetravalency',
        'Diamond and Graphite',
        'Structural isomers',
        'Cyclohexane vs Benzene',
        'Homologous series 14 u',
        'IUPAC nomenclature',
      ],
      sections: [
        {
          id: 'chem04-covalent-allotropes',
          title: '1. Why Carbon Shares Electrons & Carbon Allotropes',
          blocks: [
            {
              type: 'callout',
              variant: 'ncert',
              title: 'Why Carbon CANNOT Form C⁴⁻ Anion or C⁴⁺ Cation (Guaranteed 3M Question)',
              body: 'Carbon (`Z = 6`, electronic configuration **`2, 4`**) has 4 valence electrons:\n1. **Why NOT `C⁴⁻`?** Gaining 4 electrons makes `10` electrons around a nucleus with only `6` protons — it is **difficult for 6 protons to hold onto 4 extra electrons**.\n2. **Why NOT `C⁴⁺`?** Removing 4 electrons requires a **huge amount of energy** leaving behind a tiny cation with `6` protons holding just `2` electrons.\n3. **Solution:** Carbon shares its 4 valence electrons with other C atoms or atoms like `H, O, N, S, Cl` forming **Covalent Bonds**!',
            },
            {
              type: 'table',
              caption: 'Covalent Compounds Properties & The 3 Allotropes of Carbon',
              headers: ['Allotrope / Concept', '3D Bonding Architecture', 'Key Physical Properties & Uses'],
              rows: [
                [
                  '**Covalent Compounds** (`CH₄`, `C₂H₅OH`)',
                  'Strong bonds *within* molecules; **weak intermolecular forces** between molecules',
                  'Low melting & boiling points; **poor conductors of electricity** (no free ions!).',
                ],
                [
                  '**Diamond**',
                  'Each C covalently bonded to **4 other C** atoms in a **rigid 3D tetrahedral network**',
                  '**Hardest natural substance**; non-conductor of electricity (no free electrons!).',
                ],
                [
                  '**Graphite**',
                  'Each C bonded to **3 other C** atoms in flat **hexagonal layers** (1 double-bond character / free electron per C!)',
                  '**Smooth & slippery** (layers slide over each other) + **good conductor of electricity** (delocalised π-electrons!).',
                ],
                [
                  '**Buckminsterfullerene (`C-60`)**',
                  '`60` C atoms arranged in pentagons & hexagons shaped like a **football (geodesic dome)**',
                  'Named after architect **Buckminster Fuller**; molecular cage allotrope.',
                ],
              ],
            },
          ],
        },
        {
          id: 'chem04-catenation-isomers-rings',
          title: '2. Catenation, Electron-Dot Gallery, Isomers & Rings',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Two Reasons Carbon Forms Millions of Compounds',
              bullets: [
                '**1. Catenation:** Unique ability of Carbon to form strong covalent bonds with **other Carbon atoms**, creating long straight chains, branched chains, and closed rings (`C–C` bond is extraordinarily strong due to Carbon’s small atomic size — unlike `Si`, whose chains beyond `7–8` atoms become very reactive!).',
                '**2. Tetravalency (`Valency = 4`):** Each Carbon atom can bond with 4 other atoms of Carbon or heteroatoms (`O, N, S, Cl, H`).',
                '**Saturated vs Unsaturated:** Single `C–C` bonds (**Alkanes: `CₙH₂ₙ₊₂`**) are saturated and less reactive; `C=C` (**Alkenes: `CₙH₂ₙ`**) and `C≡C` (**Alkynes: `CₙH₂ₙ₋₂`**) are unsaturated and more reactive!',
              ],
            },
            {
              type: 'visual-diagram',
              diagramId: 'electron-dot-and-isomers-gallery',
              title: 'Interactive Electron-Dot Gallery (10 Molecules) + Isomers & Rings',
              caption: 'Switch between Electron-Dot diagrams (`CH₄, C₂H₄, C₂H₂, CO₂, N₂, S₈, NaCl, MgCl₂`) and Butane/Pentane Structural Isomers & Cyclohexane vs Benzene!',
            },
            {
              type: 'notebook-mistake',
              studentName: 'Aarav',
              title: 'Counting "Bent Drawings" of Propane as Isomers',
              wrongWork: 'C–C–C (straight) and L-shaped C–C–C are 2 isomers of Propane (C₃H₈)!',
              teacherFix: 'Propane (C₃H₈) has ONLY 1 isomer! Structural isomerism begins from Butane (C₄H₁₀).',
              whyWrong:
                'Bending a chain at 90° does NOT change atom connectivity — it is still the same unbranched 3-carbon skeleton! **Butane (`C₄H₁₀`) has `2` isomers** (`n-butane`, `isobutane`); **Pentane (`C₅H₁₂`) has `3` isomers** (`n-pentane`, `isopentane`, `neopentane`)!',
            },
          ],
        },
        {
          id: 'chem04-homologous-functional-iupac',
          title: '3. Homologous Series, Functional Groups & IUPAC Naming',
          blocks: [
            {
              type: 'key-points',
              title: '4 Defining Rules of a Homologous Series',
              items: [
                'All members share the **same general formula** (e.g., Alkanes `CₙH₂ₙ₊₂`, Alkenes `CₙH₂ₙ`, Alcohols `CₙH₂ₙ₊₁OH`) and **same functional group**.',
                'Any two consecutive members differ by **`−CH₂−` group** in formula and **`14 u`** (`12 + 2 × 1`) in molecular mass!',
                'All members show **similar chemical properties** (governed by the functional group).',
                'Physical properties (**melting point, boiling point, density**) increase **gradually** with molecular mass, while solubility in water generally decreases.',
              ],
            },
            {
              type: 'table',
              caption: 'NCERT Functional Groups & IUPAC Naming Rules (With Traps!)',
              headers: ['Functional Group', 'Formula / Heteroatom', 'Prefix / Suffix', 'Worked IUPAC Example (3-Carbon Chain)'],
              rows: [
                ['**Halo (Chloro / Bromo)**', '`−Cl` or `−Br`', 'Prefix: **chloro- / bromo-**', '`CH₃–CH₂–CH₂–Cl` → **1-Chloropropane** (`C₃H₇Cl`)'],
                ['**Alcohol**', '`−OH`', 'Suffix: **-ol** (drop `e`)', '`CH₃–CH₂–CH₂–OH` → **Propanol** (`C₃H₇OH`)'],
                ['**Aldehyde**', '`−CHO` (terminal `C=O` with `H`)', 'Suffix: **-al**', '`CH₃–CH₂–CHO` → **Propanal** (`C₂H₅CHO`)'],
                ['**Ketone**', '`>C=O` (ALWAYS on non-terminal C!)', 'Suffix: **-one**', '`CH₃–CO–CH₃` → **Propanone** (simplest ketone needs **3** carbons!)'],
                ['**Carboxylic Acid**', '`−COOH`', 'Suffix: **-oic acid**', '`CH₃–CH₂–COOH` → **Propanoic acid** (`C₂H₅COOH`)'],
              ],
            },
            {
              type: 'checkpoint',
              prompt:
                'Which functional group is present in **`CH₃COCH₃`** (Acetone), and what is its correct IUPAC name?',
              options: [
                { id: '1', label: 'Aldehyde; Propanal' },
                { id: '2', label: 'Ketone; Propanone' },
                { id: '3', label: 'Carboxylic acid; Ethanoic acid' },
                { id: '4', label: 'Alcohol; Propanol' },
              ],
              correctIds: ['2'],
              successMsg: 'Correct! `>C=O` flanked by two carbons (`CH₃–CO–CH₃`) is a **Ketone** with 3 carbons total → **Propanone** (note: Methanone and Ethanone cannot exist!).',
              hintMsg: 'Check whether the `C=O` carbon is bonded to a Hydrogen (`−CHO`, aldehyde) or to two Carbon atoms (`−CO−`, ketone).',
            },
            {
              type: 'qa',
              marks: 2,
              tag: 'CBSE Board Pattern',
              question:
                'Write the formula and IUPAC name of the **2nd** and **3rd** members of the alkene homologous series (`CₙH₂ₙ`). Why does "Methene" (`n = 1`) not exist?',
              answer:
                '• **1st member (`n = 2`):** Ethene (`C₂H₄`)\n• **2nd member (`n = 3`):** **Propene (`C₃H₆`)**\n• **3rd member (`n = 4`):** **Butene (`C₄H₈`)**\n"Methene" (`CH₂`) does not exist because a **`C=C` double bond requires at least two Carbon atoms**!',
            },
          ],
        },
      ],
    },
    {
      id: 'chem04-reactions-ethanol-soap',
      slug: 'chem04-reactions-ethanol-soap',
      title: '4 Chemical Reactions, Ethanol, Ethanoic Acid & 3D Soap Micelles',
      subtitle:
        'Clean vs Sooty Flame, Alkaline KMnO₄ Oxidation, Ni Hydrogenation, Substitution, Ethanol 443 K Dehydration, Glacial Acetic Acid, Esterification/Saponification & Hard Water Micelles',
      estimatedMinutes: 50,
      difficulty: 'Board Mastery',
      ncertSection: 'NCERT Ch 4 — Sections 4.3 to 4.5',
      learningObjectives: [
        'Compare the 4 core organic reactions: Combustion (blue vs yellow sooty flame), Oxidation, Addition (Hydrogenation of vegetable oils), and Substitution.',
        'Recall key Ethanol (`Na`, `conc. H₂SO₄` at `443 K`) and Ethanoic acid (`NaOH`, `Na₂CO₃`, `NaHCO₃`, Esterification, Saponification) equations.',
        'Explain Soap Micelle cleansing action in 3D and why Detergents lather in hard water (`Ca²⁺/Mg²⁺`) while Soaps form insoluble scum.',
      ],
      keywords: [
        'Combustion blue vs sooty flame',
        'Alkaline KMnO4 oxidation',
        'Hydrogenation Ni catalyst',
        'Dehydration 443 K',
        'Esterification and Saponification',
        'Soap micelle hard water scum',
      ],
      sections: [
        {
          id: 'chem04-four-chemical-reactions',
          title: '1. The 4 Classic Reactions of Carbon Compounds',
          blocks: [
            {
              type: 'table',
              caption: 'Combustion, Oxidation, Addition & Substitution (Complete NCERT Matrix)',
              headers: ['Reaction Type', 'Reagents & Balanced Equation', 'Board Exam Concept / Trap'],
              rows: [
                [
                  '**1. Combustion**',
                  '`CH₄ + 2O₂ → CO₂ + 2H₂O + Heat + Light`\n`CH₃CH₂OH + 3O₂ → 2CO₂ + 3H₂O + Heat + Light`',
                  'Saturated hydrocarbons give a **clean blue flame**; **unsaturated** hydrocarbons (or **blocked gas-stove air holes** causing incomplete combustion!) give a **yellow sooty flame** that blackens vessels!',
                ],
                [
                  '**2. Oxidation**',
                  '`CH₃CH₂OH —(Alkaline KMnO₄ + Δ  OR  Acidified K₂Cr₂O₇ + Δ)→ CH₃COOH`',
                  'Purple `KMnO₄` colour disappears dropwise until ethanol is completely oxidised to ethanoic acid, then purple persists!',
                ],
                [
                  '**3. Addition (Hydrogenation)**',
                  '`R₂C=CR₂ + H₂ —(Ni / Pd catalyst)→ R₂CH–CHR₂`',
                  'Converts unsaturated **vegetable oils** (healthy liquid) into saturated **animal/vanaspati fats** (solid). **Why vegetable oils are healthier:** unsaturated fatty acids are recommended over saturated animal fats!',
                ],
                [
                  '**4. Substitution**',
                  '`CH₄(g) + Cl₂(g) —Sunlight→ CH₃Cl(g) + HCl(g)`',
                  'Saturated alkanes are normally unreactive, except with `Cl₂` in **sunlight**, where Cl substitutes H atoms one by one.',
                ],
              ],
            },
          ],
        },
        {
          id: 'chem04-ethanol-and-ethanoic-acid',
          title: '2. Ethanol (`C₂H₅OH`) & Ethanoic Acid (`CH₃COOH`)',
          blocks: [
            {
              type: 'table',
              caption: 'Essential Equations of Ethanol & Ethanoic Acid',
              headers: ['Compound & Fact', 'Balanced Chemical Equation', 'Key Role / Exam Question'],
              rows: [
                [
                  '**Ethanol + Sodium**',
                  '`2Na + 2CH₃CH₂OH → 2CH₃CH₂O⁻Na⁺ + H₂↑`',
                  'Produces **Sodium ethoxide** + **`H₂` gas** (burns with pop sound — lab test for alcohol!).',
                ],
                [
                  '**Dehydration of Ethanol (`443 K`)**',
                  '`CH₃–CH₂OH —(Hot conc. H₂SO₄, 443 K)→ CH₂=CH₂ + H₂O`',
                  '**`conc. H₂SO₄` acts as a dehydrating agent**, removing water to convert saturated Ethanol into unsaturated **Ethene**!',
                ],
                [
                  '**Glacial Acetic Acid**',
                  '`5–8%` `CH₃COOH` in water = **Vinegar**',
                  'Pure Ethanoic acid has melting point **`290 K`** (`17 °C`), so it freezes into ice-like crystals in cold winters → **Glacial acetic acid**.',
                ],
                [
                  '**Esterification**',
                  '`CH₃COOH + CH₃CH₂OH ⇌(conc. H₂SO₄) CH₃COOC₂H₅ + H₂O`',
                  'Forms **sweet-smelling Ester** (**Ethyl ethanoate**) used in perfumes & flavourings; `conc. H₂SO₄` acts as catalyst & dehydrating agent.',
                ],
                [
                  '**Saponification**',
                  '`CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH`',
                  'Alkaline hydrolysis of esters with `NaOH` yielding alcohol + **Sodium ethanoate** (basis of soap making from fats/oils!).',
                ],
                [
                  '**Ethanoic Acid + Base / Carbonates**',
                  '`CH₃COOH + NaOH → CH₃COONa + H₂O`\n`2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂↑`\n`CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑`',
                  'Note: Ethanoic acid is a **weak acid** (partially ionised) yet still reacts briskly with `Na₂CO₃` / `NaHCO₃` releasing `CO₂` (turns limewater milky) — **how to distinguish Ethanoic acid from Ethanol!**',
                ],
              ],
            },
            {
              type: 'callout',
              variant: 'trap',
              title: 'Denatured Alcohol & Methanol Hazard',
              body: 'Industrial Ethanol is made unfit for drinking (**denatured alcohol**) by adding poisonous **Methanol (`CH₃OH`)** and blue dye (copper sulphate). Even small amounts of Methanol are oxidised in the liver to **Methanal (`HCHO`)**, which coagulates protoplasm and damages the **optic nerve (causing blindness)** and death!',
            },
          ],
        },
        {
          id: 'chem04-soap-micelles-3d',
          title: '3. Interactive 3D Molecules, Allotropes & Soap Micelle Cleansing',
          blocks: [
            {
              type: 'quick-summary',
              title: 'Soaps vs Detergents & Micelle Mechanism',
              bullets: [
                '**Soap Molecule (`R–COO⁻Na⁺`):** Sodium/potassium salts of long-chain carboxylic acids. Has a **hydrophilic (water-loving) ionic head (`–COO⁻Na⁺`)** and a **hydrophobic (water-repelling, oil-loving) hydrocarbon tail (`R–`)**.',
                '**Micelle Structure:** In water around an oily dirt spot, hydrophobic tails point **inward into the oil droplet**, while hydrophilic ionic heads stick **outward into water** — forming a spherical **Micelle** emulsion that stays suspended in water and rinses clean upon agitation!',
                '**Hard Water Scum Problem:** Hard water contains dissolved **`Ca²⁺` and `Mg²⁺` ions**, which react with soap to form an insoluble curdy precipitate called **Scum** (wasting soap!).',
                '**Why Detergents Win in Hard Water:** Detergents are Sodium salts of **sulphonic acids** or **ammonium salts** with `Cl⁻`/`Br⁻` ions — their charged ends do **NOT** form insoluble precipitates with `Ca²⁺`/`Mg²⁺`, so they lather easily even in hard water!',
              ],
            },
            {
              type: 'lab',
              labId: 'chemistry-3d-molecules',
              title: '3D Molecular Geometry, Diamond/Graphite & Animated 3D Micelle Lab',
              caption: 'Drag to orbit Methane (109.5°), Ethene (C=C), Ethyne (C≡C), Butane isomers, Cyclohexane vs Benzene, Diamond, Graphite (π-e⁻), and click "Agitate / Rinse Away" on the 3D Soap Micelle!',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                'An organic compound `A` (`C₂H₆O`) is heated with excess `conc. H₂SO₄` at `443 K` to give an unsaturated compound `B`. `B` on addition of 1 mole of `H₂` in presence of Nickel catalyst gives saturated compound `C` (`C₂H₆`). Identify `A, B, C` and write all chemical equations.',
              answer:
                '• `A` = **Ethanol (`CH₃CH₂OH`)**\n• `B` = **Ethene (`CH₂=CH₂`)**\n• `C` = **Ethane (`CH₃–CH₃`)**\nEquations:\n1) `CH₃CH₂OH —(conc. H₂SO₄, 443 K)→ CH₂=CH₂ + H₂O`\n2) `CH₂=CH₂ + H₂ —(Ni)→ CH₃–CH₃`',
              markingTip: 'Always specify `443 K` + `conc. H₂SO₄` on arrow 1 and `Ni` catalyst on arrow 2 for full 3 marks!',
            },
            {
              type: 'qa',
              marks: 2,
              tag: 'NCERT',
              question:
                'Why is a micelle NOT formed when soap is dissolved in an organic solvent such as Ethanol?',
              answer:
                'The hydrocarbon (hydrophobic) tail of soap is **soluble in Ethanol** (whereas it is insoluble in water). Because both ends dissolve happily in ethanol without needing to hide inside an oil core, soap molecules remain dispersed and **no micelle forms**!',
            },
          ],
        },
      ],
    },
  ],
};
