import { Topic } from '../../../types/curriculum';

export const topicAcidsBases: Topic = {
  id: 'chem-topic-2',
  slug: 'chem-acids-bases-salts',
  order: 2,
  title: 'Ch 2: Acids, Bases and Salts',
  description:
    'Master indicators (natural, synthetic, olfactory), Sodium zincate & CO₂-excess equations, Dry HCl + CaCl₂ guard-tube rule, Acid-into-Water dilution, biological pH, Chlor-Alkali process, and all 5 NaCl-derived salts.',
  ncertChapter: 'Chapter 2: Acids, Bases and Salts',
  subtopics: [
    {
      id: 'chem02-indicators-reactions-ph',
      slug: 'chem02-indicators-reactions-ph',
      title: 'Indicators, Reactions, Dry HCl Trap & Everyday pH',
      subtitle:
        'Litmus/Phenolphthalein/Methyl Orange/Olfactory Indicators, Zn + NaOH Sodium Zincate, Dry HCl Guard-Tube Rule, Acid-into-Water Dilution & Biological pH',
      estimatedMinutes: 45,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT Ch 2 — Sections 2.1 to 2.3',
      learningObjectives: [
        'Predict exact colour or odour changes across Natural, Synthetic, and Olfactory indicators (and use them for visually impaired students!).',
        'Write balanced equations for Acids/Bases with Metals (including Na₂ZnO₂), Metal Carbonates/Hydrogencarbonates, and Metal/Non-metal Oxides.',
        'Explain why dry HCl gas fails to change dry blue litmus paper, why glucose/alcohol do not conduct electricity, and why acid is always added slowly into water.',
      ],
      keywords: [
        'Olfactory indicators',
        'Sodium zincate',
        'Limewater excess CO2',
        'Anhydrous CaCl2 guard tube',
        'Dilution exothermic rule',
        'Tooth decay pH 5.5',
      ],
      sections: [
        {
          id: 'chem02-indicators-and-metal-reactions',
          title: '1. Indicators & Chemical Reactions of Acids and Bases',
          blocks: [
            {
              type: 'table',
              caption: 'Complete NCERT Indicator Reference Matrix (Natural, Synthetic & Olfactory)',
              headers: ['Indicator Type & Name', 'In Acidic Solution', 'In Basic / Alkaline Solution', 'Board Exam Detail'],
              rows: [
                [
                  '**Litmus** (Natural — purple dye from **Lichen**, Thallophyta)',
                  'Turns **Red**',
                  'Turns **Blue**',
                  'Neutral colour is **purple** when neither acidic nor basic.',
                ],
                [
                  '**Turmeric** (Natural)',
                  'Stays **Yellow**',
                  'Turns **Reddish-Brown**',
                  'Why curry stain on a white shirt turns reddish-brown when washed with basic soap, and turns yellow again on rinsing with plenty of water!',
                ],
                [
                  '**Red Cabbage / Petunia / Hydrangea / Geranium**',
                  'Red / Pink (Hydrangea: Blue in acidic soil)',
                  'Green / Yellow (Hydrangea: Pink in basic soil)',
                  'Named explicitly in NCERT Section 2.1 as natural indicators.',
                ],
                [
                  '**Phenolphthalein** (Synthetic)',
                  '**Colourless**',
                  'Turns **Pink / Magenta**',
                  'Classic titration indicator (colourless in neutral too!).',
                ],
                [
                  '**Methyl Orange** (Synthetic)',
                  'Turns **Red / Pink**',
                  'Turns **Yellow**',
                  'Orange in neutral medium.',
                ],
                [
                  '**Olfactory:** Onion, Vanilla essence, Clove oil',
                  '**Odour persists** (smell remains)',
                  '**Odour vanishes** (characteristic smell destroyed)',
                  'Ideal for **visually impaired** students to test acids vs bases!',
                ],
              ],
            },
            {
              type: 'table',
              caption: '5 Core Reactions of Acids & Bases (With CBSE Exceptions Highlighted)',
              headers: ['Reaction Pattern', 'Balanced NCERT Equation', 'Key Observation / Trap'],
              rows: [
                [
                  '**Acid + Metal → Salt + H₂↑**',
                  '`Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)↑`',
                  'Hydrogen bubbles passed through soap solution burn with a **pop sound**.',
                ],
                [
                  '**Strong Base + Zn/Al (TRAP!)**',
                  '`2NaOH(aq) + Zn(s) —Δ→ Na₂ZnO₂(aq) + H₂(g)↑`',
                  'Forms **Sodium zincate (`Na₂ZnO₂`)** + `H₂(g)`! Note: **Not all metals** react this way — only amphoteric metals like `Zn` and `Al`!',
                ],
                [
                  '**Metal Carbonate / Bicarbonate + Acid**',
                  '`Na₂CO₃(s) + 2HCl → 2NaCl + H₂O + CO₂↑`\n`NaHCO₃(s) + HCl → NaCl + H₂O + CO₂↑`',
                  'Brisk effervescence of `CO₂`: turns limewater **milky (`CaCO₃`)**, and **excess `CO₂`** turns it **clear (`Ca(HCO₃)₂`)**!',
                ],
                [
                  '**Neutralisation (Acid + Base)**',
                  '`HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)`',
                  'Exothermic reaction (`H⁺(aq) + OH⁻(aq) → H₂O(l)`).',
                ],
                [
                  '**Metal Oxide vs Non-Metal Oxide**',
                  '`CuO(s) + 2HCl → CuCl₂(aq) + H₂O`\n`Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O`',
                  '**Metallic oxides are BASIC** (`CuO` black dissolves → **bluish-green `CuCl₂`**); **Non-metallic oxides are ACIDIC**!',
                ],
              ],
            },
            {
              type: 'callout',
              variant: 'trap',
              title: 'Why Are Curd and Sour Substances NOT Kept in Brass or Copper Vessels?',
              body: 'Curd and sour foods contain organic acids (like lactic acid or citric acid) that react with Copper (`Cu`) and Brass (`Cu + Zn`) vessels to form **toxic soluble metal salts** that spoil food and cause food poisoning!',
            },
          ],
        },
        {
          id: 'chem02-ions-dry-hcl-dilution',
          title: '2. Why Aqueous Medium Matters: Dry HCl Trap & Acid-into-Water Rule',
          blocks: [
            {
              type: 'quick-summary',
              title: 'The Ion Rule (Arrhenius Concept in NCERT)',
              bullets: [
                '**What all acids share:** Acids ionise ONLY in water to produce hydrated **`H⁺(aq)`** or **Hydronium (`H₃O⁺`)** ions: `HCl + H₂O → H₃O⁺ + Cl⁻`.',
                '**Glucose (`C₆H₁₂O₆`) & Alcohol (`C₂H₅OH`) Trap:** Both contain Hydrogen atoms in their formula, yet the bulb in an electrical circuit **does NOT glow** because they do **not** dissociate into `H⁺(aq)` ions in water!',
                '**Alkalis:** Bases that dissolve in water are called **Alkalis** (e.g., `NaOH`, `KOH`, `Ca(OH)₂`, `NH₄OH`). All alkalis are bases, but **not all bases are alkalis** (e.g., `Cu(OH)₂`, `Fe(OH)₃` are insoluble bases).',
              ],
            },
            {
              type: 'notebook-mistake',
              studentName: 'Kabir',
              title: 'Two Fatal NCERT Lab Mistakes (Dry HCl & Dilution)',
              wrongWork: '1) Dry HCl gas turns dry blue litmus red.  2) Add water quickly into conc. H₂SO₄ to dilute it.',
              teacherFix:
                '1) Dry HCl changes ONLY MOIST blue litmus (needs H₂O to form H₃O⁺).  2) ALWAYS add ACID slowly into WATER with constant stirring!',
              whyWrong:
                'On a humid day, HCl gas is passed through a **guard tube packed with anhydrous Calcium chloride (`CaCl₂`)** to absorb moisture so dry litmus stays blue! And adding water into concentrated acid releases massive local heat instantly, splashing corrosive acid onto your face/skin and even cracking the glass beaker.',
            },
            {
              type: 'checkpoint',
              prompt:
                'When a concentrated acid solution is diluted with water, what happens to the concentration of Hydronium ions (`H₃O⁺`) **per unit volume**?',
              options: [
                { id: 'inc', label: 'Increases sharply' },
                { id: 'dec', label: 'Decreases per unit volume' },
                { id: 'same', label: 'Remains unchanged' },
                { id: 'zero', label: 'Becomes zero immediately' },
              ],
              correctIds: ['dec'],
              successMsg: 'Correct! Total moles of `H₃O⁺` stay similar (or increase slightly for weak acids), while volume rises — so `[H₃O⁺]` **per unit volume decreases**, raising pH toward 7.',
              hintMsg: 'Check the exact wording: "per unit volume" — adding water increases the denominator (volume)!',
            },
          ],
        },
        {
          id: 'chem02-ph-scale-biology',
          title: '3. The pH Scale (0–14) & Everyday Biological pH',
          blocks: [
            {
              type: 'paragraph',
              text: 'The **p** in **pH** stands for *potenz* (German for power). On the `0` to `14` scale, `pH = 7` is neutral, `pH < 7` is acidic (higher `[H⁺(aq)]`), and `pH > 7` is basic/alkaline (higher `[OH⁻(aq)]`). Remember: **lower the pH number, stronger the acid**!',
            },
            {
              type: 'visual-diagram',
              diagramId: 'ph-scale-and-chlor-alkali-map',
              title: 'Interactive pH Spectrum (0–14) & Chlor-Alkali 5-Salt Hub',
              caption: 'Click any biological pH marker above (Tooth Decay < 5.5, Blood 7.4, Milk of Magnesia 10) and explore all 5 NaCl-derived salts below!',
            },
            {
              type: 'table',
              caption: '5 Everyday Biological & Environmental pH Applications (Direct CBSE 3M Questions)',
              headers: ['System', 'Critical pH / Acid', 'Chemical Remedy / Consequence'],
              rows: [
                [
                  '**Human & Aquatic Survival**',
                  'Human body: **`7.0 – 7.8`**; Acid rain: **`pH < 5.6`**',
                  'Acid rain lowers river pH, making survival of aquatic organisms difficult.',
                ],
                [
                  '**Soil pH for Crops**',
                  'Neutral / slightly acidic optimum',
                  'If soil is too acidic, farmers treat it with **Quicklime (`CaO`)**, **Slaked lime (`Ca(OH)₂`)**, or **Chalk (`CaCO₃`)**.',
                ],
                [
                  '**Digestive System**',
                  'Stomach produces **`HCl`** (`pH ~1.2`)',
                  'Indigestion causes excess acid pain → treated with mild base **Antacids** like **Milk of Magnesia (`Mg(OH)₂`)** or Baking soda.',
                ],
                [
                  '**Tooth Decay**',
                  'Mouth **`pH < 5.5`**',
                  'Bacteria ferment leftover sugars into acid, corroding **Calcium hydroxyapatite** (enamel — hardest body substance). **Basic toothpastes** neutralise excess acid!',
                ],
                [
                  '**Self-Defence Stings**',
                  'Bee sting & **Nettle leaves** inject **Methanoic acid (`HCOOH`)**',
                  'Rub **Baking soda (`NaHCO₃`)** on bee sting; traditionally rubbed with **Dock plant** leaf (basic sap) growing beside nettle!',
                ],
              ],
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                'A student took two solutions `A` (pH 3) and `B` (pH 9) and tested both with universal indicator.\n(a) Which has higher `[H⁺]` concentration?\n(b) Which turns phenolphthalein pink?\n(c) What happens if `A` and `B` are mixed in proper proportions?',
              answer:
                '(a) **Solution `A` (pH 3)** has much higher `[H⁺(aq)]` ion concentration (lower pH = more acidic).\n(b) **Solution `B` (pH 9)** is basic and turns phenolphthalein **pink**.\n(c) Mixing them causes **neutralisation**, producing salt and water with pH approaching **7**.',
            },
          ],
        },
      ],
    },
    {
      id: 'chem02-chlor-alkali-and-salts',
      slug: 'chem02-chlor-alkali-and-salts',
      title: 'Salt pH Families, Chlor-Alkali & All 5 Salts + Water of Crystallisation',
      subtitle:
        'Predicting Salt pH (NH₄Cl vs CH₃COONa), Chlor-Alkali Electrolysis of Brine, Bleaching Powder, Baking vs Washing Soda, and Plaster of Paris (373 K)',
      estimatedMinutes: 40,
      difficulty: 'Board Mastery',
      ncertSection: 'NCERT Ch 2 — Section 2.4',
      learningObjectives: [
        'Classify any given salt as neutral (pH 7), acidic (pH < 7), or basic (pH > 7) from its parent acid and base.',
        'Trace the Chlor-Alkali electrolysis of aqueous brine (`NaCl`) into `NaOH`, `Cl₂` (anode), and `H₂` (cathode).',
        'Write exact preparation equations, formulae, and uses of Bleaching Powder, Baking Soda vs Baking Powder, Washing Soda, and Plaster of Paris.',
      ],
      keywords: [
        'Chlor-alkali process',
        'Bleaching powder CaOCl2',
        'Baking soda vs Baking powder',
        'Washing soda Na2CO3.10H2O',
        'Plaster of Paris 373 K',
        'Water of crystallisation',
      ],
      sections: [
        {
          id: 'chem02-salt-families-chlor-alkali',
          title: '1. Salt pH Classification & The Chlor-Alkali Process',
          blocks: [
            {
              type: 'table',
              caption: 'Predicting Salt pH from Parent Acid & Base (1M/3M Board Staple)',
              headers: ['Parent Acid + Parent Base', 'Salt Nature & pH', 'NCERT Examples'],
              rows: [
                [
                  '**Strong Acid + Strong Base**',
                  '**Neutral (`pH = 7`)**',
                  '`NaCl` (`HCl + NaOH`), `K₂SO₄`, `Na₂SO₄`, `KNO₃`',
                ],
                [
                  '**Strong Acid + Weak Base**',
                  '**Acidic (`pH < 7`)**',
                  '`NH₄Cl` (`HCl + NH₄OH`), `CuSO₄`, `AlCl₃`',
                ],
                [
                  '**Weak Acid + Strong Base**',
                  '**Basic (`pH > 7`)**',
                  '`CH₃COONa` (`CH₃COOH + NaOH`), `Na₂CO₃`, `NaHCO₃`',
                ],
              ],
            },
            {
              type: 'callout',
              variant: 'ncert',
              title: 'Chlor-Alkali Process (Brine Electrolysis)',
              body: 'Passing electricity through concentrated aqueous **`NaCl` (Brine)** decomposes it to form **Sodium hydroxide (`NaOH`)** + **Chlorine (`Cl₂`)** + **Hydrogen (`H₂`)**:\n`2NaCl(aq) + 2H₂O(l) —Electricity→ 2NaOH(aq) + Cl₂(g)↑ + H₂(g)↑`\n• **Anode (+):** `Cl₂(g)` (water treatment, swimming pools, PVC, disinfectants, CFCs, pesticides)\n• **Cathode (−):** `H₂(g)` (fuels, margarine, ammonia for fertilizers)\n• **Near Cathode:** `NaOH(aq)` (degreasing metals, soaps/detergents, paper, artificial fibres)',
            },
          ],
        },
        {
          id: 'chem02-five-salts-and-crystallisation',
          title: '2. The 5 Essential Salts & Water of Crystallisation',
          blocks: [
            {
              type: 'table',
              caption: 'Master Salt Synthesis & Equation Vault (All 5 CBSE Salts)',
              headers: ['Common Name & Chemical Formula', 'Preparation Equation', 'Key Uses & Exam Trap'],
              rows: [
                [
                  '**Bleaching Powder**\nCalcium oxychloride (`CaOCl₂`)',
                  '`Ca(OH)₂(s) + Cl₂(g) → CaOCl₂(s) + H₂O(l)`\n(Chlorine on **dry slaked lime**)',
                  'Bleaching cotton/linen/wood pulp, oxidising agent, **disinfecting drinking water** to kill germs.',
                ],
                [
                  '**Baking Soda**\nSodium hydrogencarbonate (`NaHCO₃`)',
                  '`NaCl + H₂O + CO₂ + NH₃ → NH₄Cl + NaHCO₃`\nOn heating: `2NaHCO₃ —Δ→ Na₂CO₃ + H₂O + CO₂↑`',
                  'Mild non-corrosive basic salt: **Antacid**, **soda-acid fire extinguisher**, crisp pakoras!',
                ],
                [
                  '**Washing Soda**\nSodium carbonate decahydrate (`Na₂CO₃·10H₂O`)',
                  '`Na₂CO₃(s) + 10H₂O(l) → Na₂CO₃·10H₂O(s)`\n(Recrystallisation of soda ash)',
                  'Glass, soap & paper industry; **borax** manufacture; **removing permanent hardness of water**!',
                ],
                [
                  '**Plaster of Paris (POP)**\nCalcium sulphate hemihydrate (`CaSO₄·½H₂O`)',
                  '`CaSO₄·2H₂O —373 K→ CaSO₄·½H₂O + 1½H₂O`\nSetting: `CaSO₄·½H₂O + 1½H₂O → CaSO₄·2H₂O` (Gypsum)',
                  'Setting **fractured bones**, toys, decorative ceilings. **TRAP:** Stored in **moisture-proof containers** so it doesn’t set into hard Gypsum prematurely!',
                ],
              ],
            },
            {
              type: 'notebook-mistake',
              studentName: 'Aarav',
              title: 'Confusing Baking Soda vs Baking Powder (and Dead-Burnt Plaster)',
              wrongWork: 'Baking soda = Baking powder. Also, heating Gypsum at 500 K gives faster-setting POP.',
              teacherFix:
                'Baking Powder = Baking Soda (NaHCO₃) + Mild edible acid (Tartaric acid). Heat Gypsum strictly at 373 K!',
              whyWrong:
                '1) Heating pure `NaHCO₃` alone leaves **bitter** `Na₂CO₃` in cake! Adding **tartaric acid** neutralises `Na₂CO₃` into sodium tartrate and generates extra `CO₂` bubbles (`NaHCO₃ + H⁺ → CO₂ + H₂O + Na⁺ salt`) making bread **soft and spongy**!\n2) Heating Gypsum **above `373 K`** drives out ALL water, forming anhydrous **`CaSO₄` ("dead-burnt plaster")** which loses the ability to set with water!',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'Water of Crystallisation — Are "Dry" Crystals Truly Dry?',
              body: '**Water of crystallisation** is the fixed number of water molecules chemically bound in one formula unit of a crystalline salt (`CuSO₄·5H₂O` = **5** blue → turns **white** anhydrous `CuSO₄` on heating, regains blue colour on adding 2 drops of water!; `FeSO₄·7H₂O` = **7** green; `Na₂CO₃·10H₂O` = **10**; `CaSO₄·2H₂O` = **2**). Note: `½ H₂O` in POP means **two formula units of `CaSO₄` share one molecule of `H₂O`** (`2CaSO₄·H₂O`).',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question:
                'A dry pellet of a common base `B`, when kept in open air, absorbs moisture and turns sticky. `B` is also a by-product of the Chlor-Alkali process. Identify `B`. What happens when `B` is treated with an acidic oxide `CO₂`? Write a balanced equation.',
              answer:
                'Base `B` is **Sodium hydroxide (`NaOH`)** (deliquescent pellets).\nWhen treated with `CO₂`, neutralisation-like acid-base reaction forms Sodium carbonate:\n`2NaOH(aq) + CO₂(g) → Na₂CO₃(aq) + H₂O(l)`.',
            },
            {
              type: 'qa',
              marks: 2,
              tag: 'NCERT',
              question:
                'How does a baker make cake batter soft and spongy without leaving a bitter soapy taste? Write the chemical reaction involved.',
              answer:
                'The baker uses **Baking Powder** (a mixture of **Baking soda `NaHCO₃`** + a mild edible acid such as **Tartaric acid**).\nUpon heating or mixing with water: `NaHCO₃ + H⁺ (from acid) → CO₂(g)↑ + H₂O(l) + Sodium salt of acid`.\nThe trapped `CO₂` bubbles make the cake rise and turn spongy, while the acid neutralises any bitter `Na₂CO₃`!',
            },
          ],
        },
      ],
    },
  ],
};
