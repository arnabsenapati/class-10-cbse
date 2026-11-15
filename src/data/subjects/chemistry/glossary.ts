import { GlossaryTerm, QuizQuestion } from '../../../types/curriculum';

export const chemistryGlossary: GlossaryTerm[] = [
  /* --------------------------------------------------------------------------
   * CATEGORY 1: Chemistry — Reactions, Redox & Corrosion (10 Terms)
   * -------------------------------------------------------------------------- */
  {
    id: 'chem-term-balanced-equation',
    term: 'Balanced Chemical Equation',
    symbol: 'LHS atoms = RHS atoms',
    category: 'Chemistry — Reactions, Redox & Corrosion',
    simpleMeaning: 'A chemical equation with equal counts of every element on both sides.',
    ncertDefinition:
      'A symbolic chemical equation satisfying the Law of Conservation of Mass, where the total number of atoms of each element in the reactants equals that in the products.',
    example: '3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g) (coefficients adjusted, subscripts untouched).',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-reactions-and-equations',
      subtopicSlug: 'chem01-balancing-combination-decomposition',
      sectionId: 'chem01-signs-and-balancing',
    },
  },
  {
    id: 'chem-term-exothermic',
    term: 'Exothermic Reaction',
    symbol: '+ Heat / Energy',
    category: 'Chemistry — Reactions, Redox & Corrosion',
    simpleMeaning: 'A reaction that gives out heat energy along with the products.',
    ncertDefinition:
      'A chemical reaction in which heat energy is released alongside the formation of products, raising the temperature of the surroundings.',
    example: 'CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat, and cellular respiration (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy).',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-reactions-and-equations',
      subtopicSlug: 'chem01-balancing-combination-decomposition',
      sectionId: 'chem01-combination-exothermic',
    },
  },
  {
    id: 'chem-term-endothermic',
    term: 'Endothermic Reaction',
    symbol: 'Δ / hν / Electricity',
    category: 'Chemistry — Reactions, Redox & Corrosion',
    simpleMeaning: 'A reaction that absorbs heat, light, or electrical energy to occur.',
    ncertDefinition:
      'A chemical reaction in which energy is absorbed by the reactants in the form of heat, light, or electricity.',
    example: 'All decomposition reactions (2Pb(NO₃)₂ —Δ→ 2PbO + 4NO₂ + O₂) and Ba(OH)₂ + 2NH₄Cl.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-reactions-and-equations',
      subtopicSlug: 'chem01-balancing-combination-decomposition',
      sectionId: 'chem01-combination-exothermic',
    },
  },
  {
    id: 'chem-term-thermal-decomposition',
    term: 'Thermal Decomposition',
    symbol: 'AB —Δ→ A + B',
    category: 'Chemistry — Reactions, Redox & Corrosion',
    simpleMeaning: 'Breaking down a single substance using heat.',
    ncertDefinition:
      'A decomposition reaction carried out by heating a single reactant into two or more simpler substances.',
    example: '2FeSO₄(s) —Δ→ Fe₂O₃(s) + SO₂(g) + SO₃(g); CaCO₃(s) —Δ→ CaO(s) + CO₂(g).',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-reactions-and-equations',
      subtopicSlug: 'chem01-balancing-combination-decomposition',
      sectionId: 'chem01-decomposition-trio',
    },
  },
  {
    id: 'chem-term-photolytic-decomposition',
    term: 'Photolytic Decomposition',
    symbol: '2AgCl —Sunlight→ 2Ag + Cl₂',
    category: 'Chemistry — Reactions, Redox & Corrosion',
    simpleMeaning: 'Decomposition driven by sunlight (light energy).',
    ncertDefinition:
      'A chemical reaction in which a single compound breaks down into simpler products upon exposure to sunlight.',
    example: '2AgBr(s) (pale yellow) —Sunlight→ 2Ag(s) (grey) + Br₂(g), used in black-and-white photography.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-reactions-and-equations',
      subtopicSlug: 'chem01-balancing-combination-decomposition',
      sectionId: 'chem01-decomposition-trio',
    },
  },
  {
    id: 'chem-term-precipitation',
    term: 'Precipitation Reaction',
    symbol: '↓ (Insoluble Solid)',
    category: 'Chemistry — Reactions, Redox & Corrosion',
    simpleMeaning: 'A reaction in water that produces an insoluble solid settling down.',
    ncertDefinition:
      'Any reaction (usually double displacement) that produces an insoluble solid called a precipitate which separates from the aqueous solution.',
    example: 'Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s)↓ (white) + 2NaCl(aq); Pb(NO₃)₂ + 2KI → PbI₂↓ (golden-yellow).',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-reactions-and-equations',
      subtopicSlug: 'chem01-displacement-redox-corrosion',
      sectionId: 'chem01-displacement-precipitation',
    },
  },
  {
    id: 'chem-term-redox-reaction',
    term: 'Redox Reaction',
    symbol: 'Oxidation + Reduction',
    category: 'Chemistry — Reactions, Redox & Corrosion',
    simpleMeaning: 'A reaction where one reactant gains oxygen/loses hydrogen while the other simultaneously does the opposite.',
    ncertDefinition:
      'A chemical reaction in which oxidation and reduction occur simultaneously: one reactant gets oxidised while another gets reduced.',
    example: 'CuO(s) + H₂(g) —Δ→ Cu(s) + H₂O(g) (CuO is reduced; H₂ is oxidised).',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-reactions-and-equations',
      subtopicSlug: 'chem01-displacement-redox-corrosion',
      sectionId: 'chem01-redox-agents-trap',
    },
  },
  {
    id: 'chem-term-oxidising-agent',
    term: 'Oxidising & Reducing Agents',
    category: 'Chemistry — Reactions, Redox & Corrosion',
    simpleMeaning: 'The reactant that gets reduced is the Oxidising Agent; the reactant that gets oxidised is the Reducing Agent.',
    ncertDefinition:
      'An oxidising agent supplies oxygen or removes hydrogen (and gets reduced itself), whereas a reducing agent supplies hydrogen or removes oxygen (and gets oxidised itself).',
    example: 'In MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂, MnO₂ is the oxidising agent and HCl is the reducing agent.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-reactions-and-equations',
      subtopicSlug: 'chem01-displacement-redox-corrosion',
      sectionId: 'chem01-redox-agents-trap',
    },
  },
  {
    id: 'chem-term-corrosion',
    term: 'Corrosion',
    symbol: 'Fe₂O₃·xH₂O | CuCO₃·Cu(OH)₂ | Ag₂S',
    category: 'Chemistry — Reactions, Redox & Corrosion',
    simpleMeaning: 'Slow eating away of a metal’s surface by air, moisture, or chemicals.',
    ncertDefinition:
      'The process by which metals are gradually attacked by substances around them such as moisture, oxygen, carbon dioxide, or acids.',
    example: 'Reddish-brown rust on Fe, green coating on Cu, and black Ag₂S tarnish on silver.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-reactions-and-equations',
      subtopicSlug: 'chem01-displacement-redox-corrosion',
      sectionId: 'chem01-corrosion-rancidity',
    },
  },
  {
    id: 'chem-term-rancidity',
    term: 'Rancidity',
    symbol: 'Prevented by N₂ Flushing',
    category: 'Chemistry — Reactions, Redox & Corrosion',
    simpleMeaning: 'Spoiling of oily or fatty foods due to oxidation, giving a bad smell and taste.',
    ncertDefinition:
      'Aerial oxidation of fats and oils present in food materials resulting in an unpleasant odour and taste.',
    example: 'Potato chips bags are flushed with unreactive Nitrogen (N₂) gas to prevent rancidity.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-reactions-and-equations',
      subtopicSlug: 'chem01-displacement-redox-corrosion',
      sectionId: 'chem01-corrosion-rancidity',
    },
  },

  /* --------------------------------------------------------------------------
   * CATEGORY 2: Chemistry — Acids, Bases, pH & Salts (10 Terms)
   * -------------------------------------------------------------------------- */
  {
    id: 'chem-term-olfactory-indicator',
    term: 'Olfactory Indicator',
    category: 'Chemistry — Acids, Bases, pH & Salts',
    simpleMeaning: 'A substance whose smell changes in acidic vs basic medium.',
    ncertDefinition:
      'Substances whose characteristic odour changes in acidic or basic solutions, useful especially for visually impaired students.',
    example: 'Finely chopped onion, vanilla essence, and clove oil keep their smell in acids but lose it in bases like NaOH.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-acids-bases-salts',
      subtopicSlug: 'chem02-indicators-reactions-ph',
      sectionId: 'chem02-indicators-and-metal-reactions',
    },
  },
  {
    id: 'chem-term-sodium-zincate',
    term: 'Sodium Zincate',
    symbol: 'Na₂ZnO₂',
    category: 'Chemistry — Acids, Bases, pH & Salts',
    simpleMeaning: 'The salt formed when Zinc reacts with hot Sodium hydroxide.',
    ncertDefinition:
      'Complex sodium salt formed when amphoteric metal Zinc reacts with strong aqueous alkali NaOH releasing Hydrogen gas.',
    example: '2NaOH(aq) + Zn(s) —Δ→ Na₂ZnO₂(aq) + H₂(g)↑.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-acids-bases-salts',
      subtopicSlug: 'chem02-indicators-reactions-ph',
      sectionId: 'chem02-indicators-and-metal-reactions',
    },
  },
  {
    id: 'chem-term-neutralisation',
    term: 'Neutralisation Reaction',
    symbol: 'H⁺(aq) + OH⁻(aq) → H₂O(l)',
    category: 'Chemistry — Acids, Bases, pH & Salts',
    simpleMeaning: 'Reaction between an acid and a base producing salt and water.',
    ncertDefinition:
      'The chemical reaction in which an acid reacts with a base to nullify each other’s properties, forming a salt and water with release of heat.',
    example: 'NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l).',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-acids-bases-salts',
      subtopicSlug: 'chem02-indicators-reactions-ph',
      sectionId: 'chem02-indicators-and-metal-reactions',
    },
  },
  {
    id: 'chem-term-hydronium-ion',
    term: 'Hydronium Ion (H⁺(aq))',
    symbol: 'H₃O⁺',
    category: 'Chemistry — Acids, Bases, pH & Salts',
    simpleMeaning: 'A hydrogen ion joined to a water molecule — the real ion giving acidic properties.',
    ncertDefinition:
      'The hydrated proton formed when an acid ionises in water (H⁺ + H₂O → H₃O⁺); hydrogen ions cannot exist alone in solution.',
    example: 'Dry HCl gas does NOT turn dry blue litmus red because H₃O⁺ ions form only in aqueous medium.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-acids-bases-salts',
      subtopicSlug: 'chem02-indicators-reactions-ph',
      sectionId: 'chem02-ions-dry-hcl-dilution',
    },
  },
  {
    id: 'chem-term-alkali',
    term: 'Alkali',
    symbol: 'OH⁻(aq) in water',
    category: 'Chemistry — Acids, Bases, pH & Salts',
    simpleMeaning: 'A base that dissolves in water.',
    ncertDefinition:
      'A water-soluble base that generates hydroxide ions (OH⁻(aq)) upon dissolving in water; soapy to touch, bitter, and corrosive.',
    example: 'NaOH, KOH, Ca(OH)₂, Mg(OH)₂ (all alkalis are bases, but Cu(OH)₂ is a base that is not an alkali).',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-acids-bases-salts',
      subtopicSlug: 'chem02-indicators-reactions-ph',
      sectionId: 'chem02-ions-dry-hcl-dilution',
    },
  },
  {
    id: 'chem-term-ph-scale',
    term: 'pH Scale',
    symbol: '0 (acidic) – 7 – 14 (basic)',
    category: 'Chemistry — Acids, Bases, pH & Salts',
    simpleMeaning: 'A 0 to 14 scale measuring how acidic or basic a water solution is.',
    ncertDefinition:
      'A scale for measuring hydrogen ion concentration in a solution ("p" from German *potenz* = power); pH 7 is neutral, < 7 acidic, and > 7 basic.',
    example: 'Tooth decay starts below pH 5.5; acid rain is < 5.6; human body works in pH 7.0–7.8.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-acids-bases-salts',
      subtopicSlug: 'chem02-indicators-reactions-ph',
      sectionId: 'chem02-ph-scale-biology',
    },
  },
  {
    id: 'chem-term-chlor-alkali',
    term: 'Chlor-Alkali Process',
    symbol: '2NaCl + 2H₂O → 2NaOH + Cl₂ + H₂',
    category: 'Chemistry — Acids, Bases, pH & Salts',
    simpleMeaning: 'Electrolysis of saltwater brine producing Chlorine, Hydrogen, and NaOH alkali.',
    ncertDefinition:
      'Industrial electrolysis of concentrated aqueous sodium chloride (brine) forming Sodium hydroxide (alkali) near cathode, Chlorine at anode, and Hydrogen at cathode.',
    example: 'Cl₂ disinfects water & makes bleaching powder; H₂ makes ammonia/margarine; NaOH makes soaps & paper.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-acids-bases-salts',
      subtopicSlug: 'chem02-chlor-alkali-and-salts',
      sectionId: 'chem02-salt-families-chlor-alkali',
    },
  },
  {
    id: 'chem-term-bleaching-powder',
    term: 'Bleaching Powder',
    symbol: 'CaOCl₂',
    category: 'Chemistry — Acids, Bases, pH & Salts',
    simpleMeaning: 'Disinfectant and bleaching agent made from Chlorine and dry slaked lime.',
    ncertDefinition:
      'Calcium oxychloride (CaOCl₂) prepared by the action of chlorine gas on dry slaked lime: Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O.',
    example: 'Used for bleaching cotton/linen, oxidising chemical reactions, and disinfecting drinking water.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-acids-bases-salts',
      subtopicSlug: 'chem02-chlor-alkali-and-salts',
      sectionId: 'chem02-five-salts-and-crystallisation',
    },
  },
  {
    id: 'chem-term-baking-powder',
    term: 'Baking Soda vs Baking Powder',
    symbol: 'NaHCO₃ + Tartaric Acid',
    category: 'Chemistry — Acids, Bases, pH & Salts',
    simpleMeaning: 'Baking soda is pure NaHCO₃; Baking powder mixes it with mild tartaric acid so cakes don’t taste bitter.',
    ncertDefinition:
      'Baking soda is Sodium hydrogencarbonate (NaHCO₃); Baking powder is a mixture of baking soda and a mild edible acid such as tartaric acid.',
    example: 'Acid neutralises bitter Na₂CO₃ formed on heating and releases CO₂ bubbles making cakes soft and spongy.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-acids-bases-salts',
      subtopicSlug: 'chem02-chlor-alkali-and-salts',
      sectionId: 'chem02-five-salts-and-crystallisation',
    },
  },
  {
    id: 'chem-term-plaster-of-paris',
    term: 'Plaster of Paris & Water of Crystallisation',
    symbol: 'CaSO₄·½H₂O | CuSO₄·5H₂O',
    category: 'Chemistry — Acids, Bases, pH & Salts',
    simpleMeaning: 'Fixed water molecules locked in crystal salts; POP forms by heating Gypsum at 373 K.',
    ncertDefinition:
      'Water of crystallisation is the fixed number of water molecules present in one formula unit of a salt. Heating Gypsum (CaSO₄·2H₂O) at 373 K forms Plaster of Paris (CaSO₄·½H₂O).',
    example: 'POP sets back into hard Gypsum on mixing water; CuSO₄·5H₂O turns white when heated and blue again with water.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-acids-bases-salts',
      subtopicSlug: 'chem02-chlor-alkali-and-salts',
      sectionId: 'chem02-five-salts-and-crystallisation',
    },
  },

  /* --------------------------------------------------------------------------
   * CATEGORY 3: Chemistry — Metals, Ionic Bonds & Metallurgy (10 Terms)
   * -------------------------------------------------------------------------- */
  {
    id: 'chem-term-amphoteric-oxide',
    term: 'Amphoteric Oxide',
    symbol: 'Al₂O₃, ZnO',
    category: 'Chemistry — Metals, Ionic Bonds & Metallurgy',
    simpleMeaning: 'A metal oxide that reacts with BOTH acids and bases to form salt and water.',
    ncertDefinition:
      'Metal oxides which react with both acids as well as bases to produce salts and water.',
    example: 'Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O AND Al₂O₃ + 2NaOH → 2NaAlO₂ (Sodium aluminate) + H₂O.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-metals-and-non-metals',
      subtopicSlug: 'chem03-properties-reactivity-series',
      sectionId: 'chem03-chemical-reactions-amphoteric',
    },
  },
  {
    id: 'chem-term-anodising',
    term: 'Anodising',
    symbol: 'Thick Al₂O₃ Coat',
    category: 'Chemistry — Metals, Ionic Bonds & Metallurgy',
    simpleMeaning: 'Coating Aluminium with a thick, corrosion-proof oxide layer using electrolysis.',
    ncertDefinition:
      'A process of forming a thick protective oxide layer on Aluminium by making clean Al the anode during electrolysis of dilute H₂SO₄.',
    example: 'Protects Al window frames and cookware from corrosion and allows the oxide film to be dyed attractively.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-metals-and-non-metals',
      subtopicSlug: 'chem03-properties-reactivity-series',
      sectionId: 'chem03-chemical-reactions-amphoteric',
    },
  },
  {
    id: 'chem-term-aqua-regia',
    term: 'Aqua Regia (Royal Water)',
    symbol: '3 conc. HCl : 1 conc. HNO₃',
    category: 'Chemistry — Metals, Ionic Bonds & Metallurgy',
    simpleMeaning: 'A 3:1 concentrated acid mixture strong enough to dissolve Gold and Platinum.',
    ncertDefinition:
      'A freshly prepared, highly corrosive fuming mixture of concentrated hydrochloric acid and concentrated nitric acid in the volume ratio 3 : 1.',
    example: 'Neither conc. HCl nor conc. HNO₃ alone dissolves Gold (Au) or Platinum (Pt), but Aqua regia dissolves both.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-metals-and-non-metals',
      subtopicSlug: 'chem03-properties-reactivity-series',
      sectionId: 'chem03-chemical-reactions-amphoteric',
    },
  },
  {
    id: 'chem-term-reactivity-series',
    term: 'Reactivity Series',
    symbol: 'K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au',
    category: 'Chemistry — Metals, Ionic Bonds & Metallurgy',
    simpleMeaning: 'Ranking of metals from most reactive (top) to least reactive (bottom).',
    ncertDefinition:
      'A list of metals arranged in the order of their decreasing chemical activities, predicting displacement reactions and extraction methods.',
    example: 'Fe displaces Cu from CuSO₄ because Fe sits above Cu; Cu cannot displace H₂ from dil. HCl because Cu sits below [H].',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-metals-and-non-metals',
      subtopicSlug: 'chem03-properties-reactivity-series',
      sectionId: 'chem03-reactivity-matrix-lab',
    },
  },
  {
    id: 'chem-term-ionic-bond',
    term: 'Ionic (Electrovalent) Compound',
    symbol: '[Na]⁺[Cl]⁻ | [Mg]²⁺2[Cl]⁻',
    category: 'Chemistry — Metals, Ionic Bonds & Metallurgy',
    simpleMeaning: 'Compound formed by full electron transfer from a metal to a non-metal.',
    ncertDefinition:
      'Compounds formed by the transfer of electrons from a metal to a non-metal, held together by strong electrostatic attraction between opposite ions.',
    example: 'High melting points, water-soluble, brittle solids that conduct electricity ONLY in molten or aqueous state.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-metals-and-non-metals',
      subtopicSlug: 'chem03-ionic-metallurgy-corrosion',
      sectionId: 'chem03-ionic-bonding-properties',
    },
  },
  {
    id: 'chem-term-gangue',
    term: 'Ore & Gangue',
    category: 'Chemistry — Metals, Ionic Bonds & Metallurgy',
    simpleMeaning: 'Ore is profitable metal-bearing mineral; Gangue is the unwanted sand/soil dirt mixed with it.',
    ncertDefinition:
      'Minerals from which metals can be profitably extracted are Ores; the unwanted earthy impurities (soil, sand, rock) contaminating mined ores are called Gangue.',
    example: 'Gangue is removed before metal extraction using physical/chemical enrichment processes.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-metals-and-non-metals',
      subtopicSlug: 'chem03-ionic-metallurgy-corrosion',
      sectionId: 'chem03-metallurgy-extraction-refining',
    },
  },
  {
    id: 'chem-term-roasting-calcination',
    term: 'Roasting vs Calcination',
    symbol: 'Sulphide + Excess Air vs Carbonate + Limited Air',
    category: 'Chemistry — Metals, Ionic Bonds & Metallurgy',
    simpleMeaning: 'Heating sulphide ores in excess air (Roasting) vs carbonate ores in limited air (Calcination) to get metal oxides.',
    ncertDefinition:
      'Roasting converts sulphide ores into oxides by heating strongly in excess air; Calcination converts carbonate ores into oxides by heating strongly in limited air.',
    example: 'Roasting: 2ZnS + 3O₂ → 2ZnO + 2SO₂; Calcination: ZnCO₃ —Δ→ ZnO + CO₂.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-metals-and-non-metals',
      subtopicSlug: 'chem03-ionic-metallurgy-corrosion',
      sectionId: 'chem03-metallurgy-extraction-refining',
    },
  },
  {
    id: 'chem-term-thermit-reaction',
    term: 'Thermit Reaction',
    symbol: 'Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃ + Heat',
    category: 'Chemistry — Metals, Ionic Bonds & Metallurgy',
    simpleMeaning: 'Highly exothermic Aluminium reduction producing molten Iron to weld railway tracks.',
    ncertDefinition:
      'The highly exothermic displacement reaction of Iron(III) oxide with Aluminium powder producing molten Iron used to join railway tracks and cracked machine parts.',
    example: 'Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + Heat.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-metals-and-non-metals',
      subtopicSlug: 'chem03-ionic-metallurgy-corrosion',
      sectionId: 'chem03-metallurgy-extraction-refining',
    },
  },
  {
    id: 'chem-term-anode-mud',
    term: 'Electrolytic Refining & Anode Mud',
    symbol: 'Anode: Impure Cu | Cathode: Pure Cu',
    category: 'Chemistry — Metals, Ionic Bonds & Metallurgy',
    simpleMeaning: 'Purifying copper electrically while precious insoluble metals (Ag, Au) settle under the anode.',
    ncertDefinition:
      'Purification of crude metals using an impure metal anode, thin pure metal cathode, and metal-salt electrolyte; insoluble noble impurities settling beneath the anode form Anode Mud.',
    example: 'In CuSO₄(aq) refining of Copper, Ag and Au settle as Anode Mud while Zn/Fe impurities remain in solution.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-metals-and-non-metals',
      subtopicSlug: 'chem03-ionic-metallurgy-corrosion',
      sectionId: 'chem03-metallurgy-extraction-refining',
    },
  },
  {
    id: 'chem-term-galvanisation-alloys',
    term: 'Galvanisation & Amalgam / Alloys',
    symbol: 'Zn coat on Fe | Amalgam = Alloy + Hg',
    category: 'Chemistry — Metals, Ionic Bonds & Metallurgy',
    simpleMeaning: 'Zinc-coating iron to stop rust (even if scratched), and blending metals into tougher/rust-proof alloys.',
    ncertDefinition:
      'Galvanisation protects steel and iron from rusting by coating them with a thin layer of Zinc. An alloy is a homogeneous mixture of two or more metals, or a metal and a non-metal; an alloy containing Mercury is an Amalgam.',
    example: 'Brass (Cu+Zn), Bronze (Cu+Sn), Solder (Pb+Sn), Stainless steel (Fe+Ni+Cr).',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-metals-and-non-metals',
      subtopicSlug: 'chem03-ionic-metallurgy-corrosion',
      sectionId: 'chem03-corrosion-prevention-alloys',
    },
  },

  /* --------------------------------------------------------------------------
   * CATEGORY 4: Chemistry — Carbon, Isomers & Functional Groups (10 Terms)
   * -------------------------------------------------------------------------- */
  {
    id: 'chem-term-covalent-bond',
    term: 'Covalent Bond',
    symbol: 'Shared Electron Pairs (–, =, ≡)',
    category: 'Chemistry — Carbon, Isomers & Functional Groups',
    simpleMeaning: 'A chemical bond formed when atoms share valence electrons rather than transferring them.',
    ncertDefinition:
      'Bonds formed by the sharing of electron pairs between two atoms so that both achieve stable noble-gas configurations; covalent molecules generally have low m.p./b.p. and do not conduct electricity.',
    example: 'Single bond in CH₄ (H–C), double bond in O₂ / C₂H₄ (C=C), triple bond in N₂ / C₂H₂ (C≡C).',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-carbon-and-compounds',
      subtopicSlug: 'chem04-bonding-allotropes-homologous',
      sectionId: 'chem04-covalent-allotropes',
    },
  },
  {
    id: 'chem-term-allotropes-carbon',
    term: 'Allotropes of Carbon',
    symbol: 'Diamond, Graphite, C-60',
    category: 'Chemistry — Carbon, Isomers & Functional Groups',
    simpleMeaning: 'Different structural forms of pure Carbon with identical chemical properties but vastly different physical properties.',
    ncertDefinition:
      'Different physical forms of the same element Carbon differing in the arrangement of carbon-carbon bonding: Diamond (3D tetrahedral insulator), Graphite (2D hexagonal slippery conductor), and Buckminsterfullerene (C-60 football cage).',
    example: 'Graphite conducts electricity because each C uses only 3 electrons in σ-bonds, leaving 1 free electron.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-carbon-and-compounds',
      subtopicSlug: 'chem04-bonding-allotropes-homologous',
      sectionId: 'chem04-covalent-allotropes',
    },
  },
  {
    id: 'chem-term-catenation',
    term: 'Catenation & Tetravalency',
    category: 'Chemistry — Carbon, Isomers & Functional Groups',
    simpleMeaning: 'Carbon’s superpower to self-link into long chains, branches, and rings while forming 4 bonds each.',
    ncertDefinition:
      'Catenation is the unique ability of Carbon to form strong covalent bonds with other Carbon atoms giving rise to large molecules; Tetravalency is Carbon’s valency of 4 allowing bonding with four other atoms.',
    example: 'Carbon chains can be straight, branched, or cyclic (Cyclohexane C₆H₁₂, Benzene C₆H₆).',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-carbon-and-compounds',
      subtopicSlug: 'chem04-bonding-allotropes-homologous',
      sectionId: 'chem04-catenation-isomers-rings',
    },
  },
  {
    id: 'chem-term-structural-isomers',
    term: 'Structural Isomers',
    symbol: 'Same Formula, Different Skeleton',
    category: 'Chemistry — Carbon, Isomers & Functional Groups',
    simpleMeaning: 'Compounds having the exact same molecular formula but different carbon chain structures.',
    ncertDefinition:
      'Compounds with identical molecular formula but different structural arrangements of atoms.',
    example: 'Butane (C₄H₁₀) has 2 isomers (n-butane & isobutane); Pentane (C₅H₁₂) has 3 isomers.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-carbon-and-compounds',
      subtopicSlug: 'chem04-bonding-allotropes-homologous',
      sectionId: 'chem04-catenation-isomers-rings',
    },
  },
  {
    id: 'chem-term-homologous-series',
    term: 'Homologous Series',
    symbol: 'Step = −CH₂− (14 u)',
    category: 'Chemistry — Carbon, Isomers & Functional Groups',
    simpleMeaning: 'A family of organic compounds sharing the same functional group where neighbours differ by −CH₂− (14 u).',
    ncertDefinition:
      'A series of carbon compounds in which the same functional group substitutes for hydrogen in a carbon chain, with consecutive members differing by a −CH₂− unit and 14 u mass.',
    example: 'Alkanes: CH₄, C₂H₆, C₃H₈, C₄H₁₀ (general formula CₙH₂ₙ₊₂).',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-carbon-and-compounds',
      subtopicSlug: 'chem04-bonding-allotropes-homologous',
      sectionId: 'chem04-homologous-functional-iupac',
    },
  },
  {
    id: 'chem-term-functional-group',
    term: 'Functional Group & Heteroatom',
    symbol: '−OH, −CHO, >C=O, −COOH, −Cl',
    category: 'Chemistry — Carbon, Isomers & Functional Groups',
    simpleMeaning: 'The reactive atom/group attached to a carbon chain that decides all its chemical properties.',
    ncertDefinition:
      'An atom or group of atoms (containing heteroatoms like O, Cl, Br) replacing hydrogen in a carbon chain that confers specific chemical properties regardless of chain length.',
    example: '−OH (Alcohol, -ol), −CHO (Aldehyde, -al), >C=O (Ketone, -one), −COOH (Carboxylic acid, -oic acid).',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-carbon-and-compounds',
      subtopicSlug: 'chem04-bonding-allotropes-homologous',
      sectionId: 'chem04-homologous-functional-iupac',
    },
  },
  {
    id: 'chem-term-hydrogenation',
    term: 'Addition (Hydrogenation) Reaction',
    symbol: 'C=C + H₂ —Ni/Pd→ C–C',
    category: 'Chemistry — Carbon, Isomers & Functional Groups',
    simpleMeaning: 'Adding H₂ across a C=C double bond using Nickel catalyst to turn liquid vegetable oil into solid fat.',
    ncertDefinition:
      'Addition of hydrogen to unsaturated hydrocarbons in the presence of catalysts such as Nickel (Ni) or Palladium (Pd) to yield saturated hydrocarbons.',
    example: 'Industrial conversion of liquid vegetable oils (unsaturated) into solid vanaspati/ghee (saturated).',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-carbon-and-compounds',
      subtopicSlug: 'chem04-reactions-ethanol-soap',
      sectionId: 'chem04-four-chemical-reactions',
    },
  },
  {
    id: 'chem-term-dehydration-ethanol',
    term: 'Dehydration of Ethanol',
    symbol: 'CH₃CH₂OH —(conc. H₂SO₄, 443 K)→ CH₂=CH₂ + H₂O',
    category: 'Chemistry — Carbon, Isomers & Functional Groups',
    simpleMeaning: 'Heating ethanol with conc. H₂SO₄ at 443 K removes water to make Ethene gas.',
    ncertDefinition:
      'Removal of a water molecule from ethanol upon heating at 443 K with excess concentrated sulphuric acid (acting as a dehydrating agent) to produce ethene.',
    example: 'Standard CBSE route to convert an alcohol (C₂H₅OH) into an unsaturated alkene (C₂H₄).',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-carbon-and-compounds',
      subtopicSlug: 'chem04-reactions-ethanol-soap',
      sectionId: 'chem04-ethanol-and-ethanoic-acid',
    },
  },
  {
    id: 'chem-term-esterification-saponification',
    term: 'Esterification & Saponification',
    symbol: 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O',
    category: 'Chemistry — Carbon, Isomers & Functional Groups',
    simpleMeaning: 'Acid + Alcohol makes a sweet-smelling Ester; treating Ester with NaOH reverses it into soap salt + alcohol.',
    ncertDefinition:
      'Esterification is the reaction of a carboxylic acid with an alcohol in presence of conc. H₂SO₄ to form a sweet-smelling ester; Saponification is its alkaline hydrolysis with NaOH back into alcohol and sodium salt of carboxylic acid.',
    example: 'CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH (used in soap manufacture).',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-carbon-and-compounds',
      subtopicSlug: 'chem04-reactions-ethanol-soap',
      sectionId: 'chem04-ethanol-and-ethanoic-acid',
    },
  },
  {
    id: 'chem-term-micelle-hard-water',
    term: 'Soap Micelle & Hard Water Scum',
    symbol: 'R–COO⁻Na⁺ + Ca²⁺/Mg²⁺ → Scum',
    category: 'Chemistry — Carbon, Isomers & Functional Groups',
    simpleMeaning: 'Spherical cluster of soap molecules trapping oil inside water-hating tails while water-loving heads rinse it out.',
    ncertDefinition:
      'A spherical aggregate formed by soap molecules in water where hydrophobic hydrocarbon tails dissolve inside an oil droplet and hydrophilic ionic ends (–COO⁻Na⁺) face outward into water; in hard water, Ca²⁺/Mg²⁺ ions precipitate soap as Scum whereas Detergents stay soluble.',
    example: 'Detergents (sulphonate/ammonium salts) lather effectively even in hard water without forming scum.',
    subtopicPath: {
      subjectSlug: 'chemistry',
      topicSlug: 'chem-carbon-and-compounds',
      subtopicSlug: 'chem04-reactions-ethanol-soap',
      sectionId: 'chem04-soap-micelles-3d',
    },
  },
];

/* ============================================================================
 * CHEMISTRY 48-QUESTION CBSE BOARD QUIZ BANK (Ch 1–4 + Mastery)
 * ========================================================================== */
export const chemistryQuizBank: QuizQuestion[] = [
  /* --------------------------------------------------------------------------
   * CHAPTER 1: Chemical Reactions & Equations (10 Questions)
   * -------------------------------------------------------------------------- */
  {
    id: 'chem-q-01',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-reactions-and-equations',
    subtopicTitle: 'Balancing Equations',
    type: 'mcq',
    marks: 1,
    question:
      'What are the values of `x, y, z` in the balanced equation `x Fe(s) + y H₂O(g) → Fe₃O₄(s) + z H₂(g)`?',
    options: [
      '`x = 3, y = 4, z = 4`',
      '`x = 2, y = 3, z = 3`',
      '`x = 3, y = 4, z = 2`',
      '`x = 1, y = 4, z = 4`',
    ],
    correctIndex: 0,
    explanation:
      'Balancing O first gives `4H₂O`, balancing H gives `4H₂`, and balancing Fe gives `3Fe`: `3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)`.',
    commonMistake: 'Students sometimes count O as 4 on RHS and forget to multiply `H₂` by 4 after setting `4H₂O`.',
  },
  {
    id: 'chem-q-02',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-reactions-and-equations',
    subtopicTitle: 'Magnesium Ribbon Precaution',
    type: 'mcq',
    marks: 1,
    question:
      'Why should a magnesium ribbon be cleaned by rubbing with sandpaper before burning it in air?',
    options: [
      'To polish it so it looks shiny under the burner flame',
      'To remove the protective layer of basic magnesium carbonate/oxide from its surface',
      'To coat it with silica crystals that speed up ignition',
      'To convert magnesium metal into magnesium hydroxide',
    ],
    correctIndex: 1,
    explanation:
      'Magnesium slowly reacts with moist atmospheric air/CO₂ to form a dull coating of basic magnesium carbonate / MgO that slows burning unless rubbed off.',
  },
  {
    id: 'chem-q-03',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-reactions-and-equations',
    subtopicTitle: 'Thermal Decomposition of Ferrous Sulphate',
    type: 'mcq',
    marks: 1,
    question:
      'When pale green `FeSO₄·7H₂O` crystals are heated strongly in a dry boiling tube, what residue colour and gas odour are observed?',
    options: [
      'Yellow residue with reddish-brown pungent fumes',
      'Reddish-brown solid (`Fe₂O₃`) with a smell of burning sulphur (`SO₂` & `SO₃`)',
      'Black solid (`CuO`) with sweet fruity odour',
      'Grey solid (`Ag`) with greenish-yellow gas',
    ],
    correctIndex: 1,
    explanation:
      '`2FeSO₄(s) —Δ→ Fe₂O₃(s) (reddish-brown) + SO₂(g) + SO₃(g)` (choking burning-sulphur smell).',
    commonMistake: 'Do not confuse `FeSO₄` (brown `Fe₂O₃` + colourless `SO₂/SO₃`) with `Pb(NO₃)₂` (yellow `PbO` + brown `NO₂` fumes).',
  },
  {
    id: 'chem-q-04',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-reactions-and-equations',
    subtopicTitle: 'Electrolysis of Water',
    type: 'mcq',
    marks: 1,
    question:
      'During electrolysis of acidified water, gas `A` collected at the cathode has double the volume of gas `B` collected at the anode. Identify `A` and `B`.',
    options: [
      '`A` = Oxygen (`O₂`), `B` = Hydrogen (`H₂`)',
      '`A` = Hydrogen (`H₂`), `B` = Oxygen (`O₂`)',
      '`A` = Chlorine (`Cl₂`), `B` = Hydrogen (`H₂`)',
      '`A` = Steam (`H₂O`), `B` = Oxygen (`O₂`)',
    ],
    correctIndex: 1,
    explanation:
      '`2H₂O(l) → 2H₂(g) + O₂(g)`: Hydrogen (`H⁺` reduced at negative Cathode) is produced in `2:1` volume ratio compared to Oxygen (at positive Anode).',
  },
  {
    id: 'chem-q-05',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-reactions-and-equations',
    subtopicTitle: 'Double Displacement Precipitation',
    type: 'mcq',
    marks: 1,
    question:
      'Mixing aqueous solutions of Lead(II) nitrate and Potassium iodide immediately produces a dense precipitate. What is its chemical formula and colour?',
    options: [
      '`KNO₃` — White precipitate',
      '`PbI₂` — Golden-yellow precipitate',
      '`BaSO₄` — White precipitate',
      '`PbO` — Reddish-brown precipitate',
    ],
    correctIndex: 1,
    explanation:
      '`Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s)↓ (golden-yellow) + 2KNO₃(aq)`.',
  },
  {
    id: 'chem-q-06',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-reactions-and-equations',
    subtopicTitle: 'Redox Agent Identification',
    type: 'mcq',
    marks: 1,
    question:
      'In the reaction `MnO₂(s) + 4HCl(aq) → MnCl₂(aq) + 2H₂O(l) + Cl₂(g)`, which substance acts as the **Oxidising Agent** and which is **Oxidised**?',
    options: [
      'Oxidising Agent = `HCl`; Oxidised = `MnO₂`',
      'Oxidising Agent = `MnO₂`; Oxidised = `HCl`',
      'Oxidising Agent = `MnCl₂`; Oxidised = `Cl₂`',
      'Oxidising Agent = `Cl₂`; Oxidised = `H₂O`',
    ],
    correctIndex: 1,
    explanation:
      '`MnO₂` loses oxygen (gets reduced → Oxidising Agent); `HCl` loses hydrogen to become `Cl₂` (gets oxidised → Reducing Agent).',
    commonMistake: 'Never pick a product (`MnCl₂` or `Cl₂`) as the oxidising/reducing agent — agents are ALWAYS reactants on the LHS!',
  },
  {
    id: 'chem-q-07',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-reactions-and-equations',
    subtopicTitle: 'Exothermic Respiration',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** Cellular respiration is considered an exothermic process.\n**Reason (R):** During digestion, carbohydrates break into glucose, which combines with oxygen in cells to release energy.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      '`C₆H₁₂O₆(aq) + 6O₂(aq) → 6CO₂(aq) + 6H₂O(l) + Energy` releases energy to keep the body warm and power cell processes, making respiration exothermic.',
  },
  {
    id: 'chem-q-08',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-reactions-and-equations',
    subtopicTitle: 'Photolytic Silver Halides',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** Silver bromide (`AgBr`) is stored in dark amber-coloured bottles in laboratories.\n**Reason (R):** Sunlight decomposes pale yellow `AgBr` into metallic grey Silver and Bromine gas.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Dark bottles block light energy (`hν`) and prevent photolytic decomposition: `2AgBr(s) —Sunlight→ 2Ag(s) + Br₂(g)`.',
  },
  {
    id: 'chem-q-09',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-reactions-and-equations',
    subtopicTitle: 'Corrosion of Metals',
    type: 'mcq',
    marks: 1,
    question:
      'Old copper statues often turn green in humid city air, while silver anklets turn black. What are the respective chemical formulas of these coatings?',
    options: [
      '`CuO` (green) and `AgCl` (black)',
      '`CuCO₃·Cu(OH)₂` (green) and `Ag₂S` (black)',
      '`CuSO₄` (green) and `Ag₂O` (black)',
      '`Cu(NO₃)₂` (green) and `AgBr` (black)',
    ],
    correctIndex: 1,
    explanation:
      'Moist `CO₂` forms green basic copper carbonate `CuCO₃·Cu(OH)₂`; atmospheric `H₂S` forms black silver sulphide `Ag₂S`.',
  },
  {
    id: 'chem-q-10',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-reactions-and-equations',
    subtopicTitle: 'Lead Nitrate Case Study',
    type: 'case-based',
    marks: 2,
    casePassage:
      'A student heated `2 g` of white Lead(II) nitrate powder in a dry boiling tube over a Bunsen flame. Crackling sounds occurred, yellow solid remained at the bottom, and thick brown fumes poured from the mouth.',
    question:
      'In the balanced decomposition equation `2Pb(NO₃)₂(s) → 2PbO(s) + 4X(g) + Y(g)`, identify gases `X` and `Y`.',
    options: [
      '`X` = `NO₂` (brown), `Y` = `O₂` (relights glowing splint)',
      '`X` = `SO₂`, `Y` = `SO₃`',
      '`X` = `N₂`, `Y` = `CO₂`',
      '`X` = `NO` (brown), `Y` = `H₂`',
    ],
    correctIndex: 0,
    explanation:
      '`2Pb(NO₃)₂ —Δ→ 2PbO(yellow) + 4NO₂(brown gas) + O₂(colourless gas)`.',
  },

  /* --------------------------------------------------------------------------
   * CHAPTER 2: Acids, Bases and Salts (10 Questions)
   * -------------------------------------------------------------------------- */
  {
    id: 'chem-q-11',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-acids-bases-salts',
    subtopicTitle: 'Olfactory Indicators',
    type: 'mcq',
    marks: 1,
    question:
      'Which indicator set can be used reliably by a visually impaired student to distinguish between dilute `HCl` and dilute `NaOH`?',
    options: [
      'Blue litmus and Methyl orange',
      'Phenolphthalein and Turmeric',
      'Vanilla essence and Clove oil (olfactory indicators)',
      'Red cabbage extract and Hydrangea petals',
    ],
    correctIndex: 2,
    explanation:
      'Vanilla essence, onion, and clove oil are olfactory indicators: their characteristic smell remains in acids (`HCl`) and disappears in bases (`NaOH`).',
  },
  {
    id: 'chem-q-12',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-acids-bases-salts',
    subtopicTitle: 'Zinc + Strong Alkali',
    type: 'mcq',
    marks: 1,
    question:
      'When granulated Zinc is warmed with concentrated `NaOH` solution, a gas burning with a pop sound evolves along with a salt `X`. Identify `X`.',
    options: [
      '`Zn(OH)₂` (Zinc hydroxide)',
      '`Na₂ZnO₂` (Sodium zincate)',
      '`NaZnO` (Sodium zinc oxide)',
      '`ZnO` (Zinc oxide)',
    ],
    correctIndex: 1,
    explanation:
      '`2NaOH(aq) + Zn(s) —Δ→ Na₂ZnO₂(aq) + H₂(g)↑`. Remember: Not all metals undergo this reaction with bases!',
  },
  {
    id: 'chem-q-13',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-acids-bases-salts',
    subtopicTitle: 'CO2 Through Limewater',
    type: 'mcq',
    marks: 1,
    question:
      'Passing `CO₂` gas turns clear limewater milky; passing **excess `CO₂`** turns it clear again due to the formation of:',
    options: [
      'Insoluble `CaCO₃`',
      'Soluble `Ca(HCO₃)₂` (Calcium hydrogencarbonate)',
      'Soluble `Ca(OH)₂`',
      'Insoluble `CaO`',
    ],
    correctIndex: 1,
    explanation:
      'First step forms insoluble white `CaCO₃(s)`; excess `CO₂` reacts: `CaCO₃(s) + H₂O(l) + CO₂(g) → Ca(HCO₃)₂(aq)` (soluble & colourless).',
  },
  {
    id: 'chem-q-14',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-acids-bases-salts',
    subtopicTitle: 'Dry HCl Guard-Tube Trap',
    type: 'mcq',
    marks: 1,
    question:
      'On a humid day, HCl gas generated from `NaCl + conc. H₂SO₄` is passed through a guard tube packed with anhydrous `CaCl₂` before testing with dry blue litmus paper. What is observed and why?',
    options: [
      'Dry blue litmus turns red immediately because `HCl` is a strong acid gas',
      'Dry blue litmus shows NO colour change because `CaCl₂` removes moisture, preventing `H⁺(aq)` / `H₃O⁺` ion formation',
      'Dry blue litmus turns yellow because `CaCl₂` neutralises HCl',
      'Dry blue litmus bleaches white due to `Cl₂` release',
    ],
    correctIndex: 1,
    explanation:
      'Acidic character appears ONLY in aqueous solution (`H₃O⁺` ions). Anhydrous `CaCl₂` dries HCl gas completely, so dry litmus stays blue!',
  },
  {
    id: 'chem-q-15',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-acids-bases-salts',
    subtopicTitle: 'Acid Dilution & pH Biology',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** To dilute concentrated sulphuric acid, acid must always be added slowly to water with constant stirring.\n**Reason (R):** Dissolution of concentrated acid in water is strongly exothermic; adding water into acid can cause explosive splashing and glass breakage.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Water has high heat capacity; adding acid dropwise into a large volume of water absorbs generated heat safely without local boiling/splashing.',
  },
  {
    id: 'chem-q-16',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-acids-bases-salts',
    subtopicTitle: 'Everyday Biological pH',
    type: 'mcq',
    marks: 1,
    question:
      'Which pair correctly matches a biological condition with its critical pH / chemical remedy?',
    options: [
      'Tooth decay starts when mouth pH rises above `8.5` → treat with lemon juice',
      'Nettle leaf sting injects Methanoic acid → rub with basic Dock plant leaf or Baking soda',
      'Acid rain occurs when rainwater pH exceeds `7.8` → add HCl',
      'Indigestion pain → treat with strong alkali `NaOH` pellets',
    ],
    correctIndex: 1,
    explanation:
      'Tooth decay starts `< 5.5`; acid rain is `< 5.6`; `NaOH` is corrosive (use mild `Mg(OH)₂`); nettle sting injects methanoic acid neutralised by Dock leaf/baking soda.',
  },
  {
    id: 'chem-q-17',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-acids-bases-salts',
    subtopicTitle: 'Salt pH Families',
    type: 'mcq',
    marks: 1,
    question:
      'Which aqueous salt solution has a **pH less than 7** (acidic)?',
    options: [
      '`NaCl`',
      '`CH₃COONa` (Sodium ethanoate)',
      '`NH₄Cl` (Ammonium chloride)',
      '`Na₂CO₃` (Sodium carbonate)',
    ],
    correctIndex: 2,
    explanation:
      '`NH₄Cl` is formed from a strong acid (`HCl`) and a weak base (`NH₄OH`), so its aqueous solution is acidic (`pH < 7`). `CH₃COONa` and `Na₂CO₃` are basic (`> 7`).',
  },
  {
    id: 'chem-q-18',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-acids-bases-salts',
    subtopicTitle: 'Chlor-Alkali Process',
    type: 'mcq',
    marks: 1,
    question:
      'During the Chlor-Alkali electrolysis of aqueous brine (`NaCl(aq)`), which three products are obtained at the Anode, Cathode, and Solution near Cathode respectively?',
    options: [
      'Anode: `H₂` | Cathode: `Cl₂` | Solution: `NaOH`',
      'Anode: `Cl₂` | Cathode: `H₂` | Solution: `NaOH`',
      'Anode: `O₂` | Cathode: `Na` | Solution: `HCl`',
      'Anode: `Cl₂` | Cathode: `Na` | Solution: `Na₂CO₃`',
    ],
    correctIndex: 1,
    explanation:
      '`2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + Cl₂(g) [Anode +] + H₂(g) [Cathode −]`.',
  },
  {
    id: 'chem-q-19',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-acids-bases-salts',
    subtopicTitle: 'Plaster of Paris & Water of Crystallisation',
    type: 'mcq',
    marks: 1,
    question:
      'What happens if Gypsum (`CaSO₄·2H₂O`) is accidentally heated far above `373 K` (say `473 K`) instead of carefully at `373 K`?',
    options: [
      'It forms faster-setting Plaster of Paris',
      'It loses ALL water of crystallisation to form anhydrous `CaSO₄` ("dead-burnt plaster") which cannot set with water',
      'It turns into Bleaching powder `CaOCl₂`',
      'It transforms into Washing soda `Na₂CO₃·10H₂O`',
    ],
    correctIndex: 1,
    explanation:
      'Strict control at `373 K` leaves `½H₂O` per `CaSO₄`; overheating strips all water leaving dead-burnt `CaSO₄`.',
  },
  {
    id: 'chem-q-20',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-acids-bases-salts',
    subtopicTitle: '5-Salt Hub Case Study',
    type: 'case-based',
    marks: 2,
    casePassage:
      'A bakery chemist prepares fluffy bread using mixture `P` (`NaHCO₃` + mild edible acid `Q`), while the laundry department uses hydrated sodium carbonate `R` to remove permanent hardness of water.',
    question:
      'Identify acid `Q` and the exact formula of salt `R`.',
    options: [
      '`Q` = Tartaric acid; `R` = `Na₂CO₃·10H₂O` (Washing soda)',
      '`Q` = Sulphuric acid; `R` = `CaOCl₂`',
      '`Q` = Hydrochloric acid; `R` = `NaHCO₃`',
      '`Q` = Nitric acid; `R` = `CaSO₄·2H₂O`',
    ],
    correctIndex: 0,
    explanation:
      'Baking powder = `NaHCO₃` + mild edible acid like **Tartaric acid** (neutralises bitter `Na₂CO₃`). Washing soda (`Na₂CO₃·10H₂O`) removes permanent water hardness.',
  },

  /* --------------------------------------------------------------------------
   * CHAPTER 3: Metals and Non-metals (10 Questions)
   * -------------------------------------------------------------------------- */
  {
    id: 'chem-q-21',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-metals-and-non-metals',
    subtopicTitle: 'Physical Property Exceptions',
    type: 'mcq',
    marks: 1,
    question:
      'Identify the pair of metals that have melting points so low they melt even on your palm, AND the non-metal that is lustrous and conducts electricity:',
    options: [
      '`Na, K` and Diamond',
      '`Ga, Cs` and Graphite',
      '`Hg, Pb` and Iodine',
      '`Al, Mg` and Sulphur',
    ],
    correctIndex: 1,
    explanation:
      'Gallium (`Ga`) and Caesium (`Cs`) melt around `30°C` (body heat!); Graphite is a lustrous, electrically conducting non-metal allotrope of Carbon.',
  },
  {
    id: 'chem-q-22',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-metals-and-non-metals',
    subtopicTitle: 'Amphoteric Oxides',
    type: 'mcq',
    marks: 1,
    question:
      'Which pair consists ONLY of **amphoteric oxides** that react with both `HCl` and `NaOH`?',
    options: [
      '`Na₂O` and `CaO`',
      '`Al₂O₃` and `ZnO`',
      '`Fe₂O₃` and `CuO`',
      '`SO₂` and `CO₂`',
    ],
    correctIndex: 1,
    explanation:
      '`Al₂O₃` forms `AlCl₃` / `NaAlO₂`; `ZnO` forms `ZnCl₂` / `Na₂ZnO₂` when reacting with acid and alkali respectively.',
  },
  {
    id: 'chem-q-23',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-metals-and-non-metals',
    subtopicTitle: 'Water & Steam Reactivity',
    type: 'mcq',
    marks: 1,
    question:
      'Why does Calcium (`Ca`) start floating when dropped into cold water, and why does Iron (`Fe`) NOT react with cold or hot water?',
    options: [
      'Ca has lower density than water; Fe reacts only with steam to form `Fe₃O₄ + H₂`',
      'Bubbles of `H₂` gas stick to Ca’s surface making it float; Fe reacts only with steam forming `Fe₃O₄ + H₂`',
      'Ca burns with a golden flame lifting it; Fe dissolves silently as `Fe(OH)₂`',
      'Ca forms insoluble `CaO` skin; Fe never reacts with water at any temperature',
    ],
    correctIndex: 1,
    explanation:
      'In both `Ca` (cold water) and `Mg` (hot water), evolved `H₂` gas bubbles cling to the metal surface, lifting it to float! Iron requires steam: `3Fe + 4H₂O(g) ⇌ Fe₃O₄ + 4H₂`.',
  },
  {
    id: 'chem-q-24',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-metals-and-non-metals',
    subtopicTitle: 'Dilute HNO3 Exception',
    type: 'mcq',
    marks: 1,
    question:
      'Which two metals are the ONLY exceptions that evolve Hydrogen (`H₂`) gas when treated with **very dilute Nitric acid (`HNO₃`)**?',
    options: [
      'Sodium (`Na`) and Potassium (`K`)',
      'Magnesium (`Mg`) and Manganese (`Mn`)',
      'Zinc (`Zn`) and Iron (`Fe`)',
      'Copper (`Cu`) and Silver (`Ag`)',
    ],
    correctIndex: 1,
    explanation:
      '`HNO₃` is a strong oxidising agent that oxidises `H₂ → H₂O` for almost all metals — ONLY **`Mg` and `Mn`** liberate `H₂` with very dilute `HNO₃`.',
  },
  {
    id: 'chem-q-25',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-metals-and-non-metals',
    subtopicTitle: 'Aqua Regia',
    type: 'mcq',
    marks: 1,
    question:
      'A goldsmith dips tarnished gold bangles into a freshly prepared mixture of two concentrated acids to dissolve the outer gold layer. What is the exact acid ratio of this solution (**Aqua Regia**)?',
    options: [
      '`1` part `conc. HCl` : `3` parts `conc. HNO₃`',
      '`3` parts `conc. HCl` : `1` part `conc. HNO₃`',
      '`2` parts `conc. H₂SO₄` : `1` part `conc. HCl`',
      '`3` parts `conc. HNO₃` : `1` part `conc. H₂SO₄`',
    ],
    correctIndex: 1,
    explanation:
      'Aqua regia is `3 : 1` by volume of concentrated Hydrochloric acid (`HCl`) and concentrated Nitric acid (`HNO₃`).',
  },
  {
    id: 'chem-q-26',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-metals-and-non-metals',
    subtopicTitle: 'Ionic Compound Conductivity',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** Solid sodium chloride (`NaCl`) does not conduct electricity, whereas molten `NaCl` conducts strongly.\n**Reason (R):** In the solid state, `Na⁺` and `Cl⁻` ions are held rigidly by strong electrostatic forces and cannot move freely until melted or dissolved.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Movement of free ions is mandatory for electrolytic conduction; melting/dissolving frees the locked crystal ions.',
  },
  {
    id: 'chem-q-27',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-metals-and-non-metals',
    subtopicTitle: 'Roasting vs Calcination & Thermit',
    type: 'mcq',
    marks: 1,
    question:
      'Which pair of steps correctly describes extracting Zinc from **Calamine (`ZnCO₃`)** and **Zinc blende (`ZnS`)** respectively?',
    options: [
      'Roasting in excess air for `ZnCO₃`; Calcination in limited air for `ZnS`',
      'Calcination in limited air for `ZnCO₃`; Roasting in excess air for `ZnS` — both followed by Carbon reduction of `ZnO`',
      'Electrolysis of molten `ZnCO₃`; Heating `ZnS` alone without air',
      'Thermit welding for both `ZnCO₃` and `ZnS`',
    ],
    correctIndex: 1,
    explanation:
      'Carbonate ores undergo **Calcination** (limited air → `ZnO + CO₂`); Sulphide ores undergo **Roasting** (excess air → `ZnO + SO₂`).',
  },
  {
    id: 'chem-q-28',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-metals-and-non-metals',
    subtopicTitle: 'High Reactivity Extraction',
    type: 'mcq',
    marks: 1,
    question:
      'Why cannot Carbon (Coke) reduce Sodium oxide (`Na₂O`) or Aluminium oxide (`Al₂O₃`) to pure metal?',
    options: [
      'Carbon melts below room temperature',
      'Sodium and Aluminium have higher affinity for Oxygen than Carbon does',
      'Carbon forms explosive carbides with oxygen only',
      'Sodium and Aluminium are below Hydrogen in the reactivity series',
    ],
    correctIndex: 1,
    explanation:
      'Metals at the top of the reactivity series (`K, Na, Ca, Mg, Al`) bind oxygen more tightly than Carbon, so **electrolytic reduction of molten salts** is required.',
  },
  {
    id: 'chem-q-29',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-metals-and-non-metals',
    subtopicTitle: 'Galvanisation & 3-Tube Rusting Proof',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** A galvanised iron sheet does not rust even if its zinc coating gets scratched and exposes the underlying iron.\n**Reason (R):** Zinc is more reactive than iron and undergoes oxidation preferentially, sacrificing itself to protect iron.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Zinc acts as a sacrificial anode because `Zn > Fe` in the reactivity series — even a scratched galvanised surface protects iron!',
  },
  {
    id: 'chem-q-30',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-metals-and-non-metals',
    subtopicTitle: 'Electrolytic Refining & Alloys Case',
    type: 'case-based',
    marks: 2,
    casePassage:
      'During electrolytic refining of blister copper in acidified `CuSO₄(aq)`, pure copper builds up on one electrode while insoluble noble metals settle at the tank bottom. Meanwhile, an electrical technician uses a low-melting alloy `S` to join broken circuit wires.',
    question:
      'Identify where pure copper deposits, what collects at the bottom below the anode, and the constituents of alloy `S` (Solder).',
    options: [
      'Pure Cu at Cathode (−); `Anode mud (Ag, Au)` at bottom; Solder = `Pb + Sn`',
      'Pure Cu at Anode (+); `ZnSO₄` mud at bottom; Solder = `Cu + Zn`',
      'Pure Cu at Cathode (−); `CuO` mud at bottom; Solder = `Cu + Sn`',
      'Pure Cu at Anode (+); `Ag, Au` at Cathode; Solder = `Fe + Cr`',
    ],
    correctIndex: 0,
    explanation:
      'Pure `Cu` deposits on the thin **Cathode (−)**; insoluble `Ag, Au` fall from the thick impure Anode as **Anode Mud**; Solder (`Pb + Sn`) has a low melting point for electrical welding.',
  },

  /* --------------------------------------------------------------------------
   * CHAPTER 4: Carbon and its Compounds (10 Questions)
   * -------------------------------------------------------------------------- */
  {
    id: 'chem-q-31',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-carbon-and-compounds',
    subtopicTitle: 'Covalent Bonding in Carbon',
    type: 'mcq',
    marks: 1,
    question:
      'Why does Carbon (`Z = 6`) form covalent compounds instead of forming `C⁴⁺` or `C⁴⁻` ions?',
    options: [
      'Carbon has zero valence electrons in its outer shell',
      '6 protons cannot easily hold 10 electrons (`C⁴⁻`), and removing 4 electrons (`C⁴⁺`) requires huge energy',
      'Carbon reacts exclusively with noble gases like Argon',
      'Carbon has a large atomic radius that repels shared electron pairs',
    ],
    correctIndex: 1,
    explanation:
      'Both `C⁴⁻` (unstable electron repulsion around 6 protons) and `C⁴⁺` (prohibitively high ionisation energy) are energetically unfavourable — so Carbon shares 4 electrons.',
  },
  {
    id: 'chem-q-32',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-carbon-and-compounds',
    subtopicTitle: 'Bond Counting & Electron Dot',
    type: 'mcq',
    marks: 1,
    question:
      'How many total **single covalent bonds** are present in a molecule of **Propane (`C₃H₈`)** and **Cyclohexane (`C₆H₁₂`)** respectively?',
    options: [
      '`8` and `12`',
      '`10` and `18`',
      '`11` and `16`',
      '`7` and `15`',
    ],
    correctIndex: 1,
    explanation:
      'Propane (`CH₃–CH₂–CH₃`) has `2` C–C + `8` C–H = **`10`** covalent bonds. Cyclohexane has `6` C–C ring bonds + `12` C–H = **`18`** covalent bonds.',
    commonMistake: 'Students often forget to count the `C–C` single bonds alongside the `C–H` bonds!',
  },
  {
    id: 'chem-q-33',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-carbon-and-compounds',
    subtopicTitle: 'Diamond vs Graphite Allotropes',
    type: 'mcq',
    marks: 1,
    question:
      'Why does Graphite conduct electricity while Diamond is an insulator, even though both are pure Carbon?',
    options: [
      'Diamond contains ionic impurities whereas Graphite is a metal',
      'In Graphite, each C bonds to only 3 other C atoms leaving 1 free delocalised electron; in Diamond all 4 valence electrons are locked in 3D covalent bonds',
      'Graphite has a cubic lattice with trapped sodium ions',
      'Diamond melts before electricity can pass',
    ],
    correctIndex: 1,
    explanation:
      'Free electrons in Graphite’s hexagonal layers conduct electricity and allow layers to slide as a dry lubricant.',
  },
  {
    id: 'chem-q-34',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-carbon-and-compounds',
    subtopicTitle: 'Structural Isomers',
    type: 'mcq',
    marks: 1,
    question:
      'How many structural isomers exist for **Butane (`C₄H₁₀`)** and **Pentane (`C₅H₁₂`)** respectively?',
    options: [
      '`1` and `2`',
      '`2` and `3`',
      '`3` and `4`',
      '`2` and `5`',
    ],
    correctIndex: 1,
    explanation:
      'Butane (`C₄H₁₀`) has **`2`** (`n-butane`, `isobutane`); Pentane (`C₅H₁₂`) has **`3`** (`n-pentane`, `isopentane`, `neopentane`).',
  },
  {
    id: 'chem-q-35',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-carbon-and-compounds',
    subtopicTitle: 'Homologous Series & Functional Groups',
    type: 'mcq',
    marks: 1,
    question:
      'Two consecutive members of a homologous series differ in molecular formula and molecular mass by:',
    options: [
      '`−CH₃` and `15 u`',
      '`−CH₂−` and `14 u`',
      '`−C₂H₄−` and `28 u`',
      '`−CH−` and `13 u`',
    ],
    correctIndex: 1,
    explanation:
      'One `C` (`12 u`) + two `H` (`2 × 1 u`) = `−CH₂−` (`14 u`).',
  },
  {
    id: 'chem-q-36',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-carbon-and-compounds',
    subtopicTitle: 'Combustion & Flame Colour',
    type: 'mcq',
    marks: 1,
    question:
      'While cooking on a gas stove, the bottom of a clean steel vessel starts getting blackened with soot. What does this indicate?',
    options: [
      'The fuel is pure saturated methane burning cleanly',
      'The air holes are blocked, causing incomplete combustion due to insufficient oxygen supply',
      'Too much oxygen is entering the burner',
      'The steel vessel is undergoing galvanisation',
    ],
    correctIndex: 1,
    explanation:
      'Blocked burner air holes starve the flame of oxygen, leading to incomplete combustion with a yellow sooty flame depositing unburnt carbon.',
  },
  {
    id: 'chem-q-37',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-carbon-and-compounds',
    subtopicTitle: 'Dehydration of Ethanol',
    type: 'mcq',
    marks: 1,
    question:
      'Heating Ethanol (`CH₃CH₂OH`) at `443 K` with excess concentrated `H₂SO₄` produces Ethene (`CH₂=CH₂`). What is the exact role of `conc. H₂SO₄` here?',
    options: [
      'Oxidising agent',
      'Dehydrating agent (removes water molecule)',
      'Reducing agent',
      'Hydrogenation catalyst',
    ],
    correctIndex: 1,
    explanation:
      'Concentrated `H₂SO₄` acts as a dehydrating agent, stripping `−H` and `−OH` as `H₂O` to yield `CH₂=CH₂`.',
  },
  {
    id: 'chem-q-38',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-carbon-and-compounds',
    subtopicTitle: 'Glacial Acetic Acid & Esterification',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** Pure ethanoic acid is commonly called "glacial acetic acid".\n**Reason (R):** Pure ethanoic acid has a melting point of `290 K` (`17 °C`), so it often freezes into ice-like crystals during cold winters.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Because `290 K` (`17 °C`) is typical winter room temperature in cold climates, pure `CH₃COOH` solidifies cleanly into glacial crystals.',
  },
  {
    id: 'chem-q-39',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-carbon-and-compounds',
    subtopicTitle: 'Hard Water & Detergents',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** Soaps fail to form abundant lather in hard water, leaving a curdy white scum, whereas detergents wash effectively.\n**Reason (R):** `Ca²⁺` and `Mg²⁺` ions in hard water precipitate soap molecules as insoluble salts, whereas detergent sulphonate/ammonium ends stay soluble.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Detergents do not form insoluble precipitates with dissolved `Ca²⁺` or `Mg²⁺` ions in hard water.',
  },
  {
    id: 'chem-q-40',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-carbon-and-compounds',
    subtopicTitle: 'Organic Transformations Case',
    type: 'case-based',
    marks: 2,
    casePassage:
      'Compound `A` (`C₂H₅OH`) is oxidised using alkaline `KMnO₄` + heat to form compound `B`. Warming `A` and `B` together with a few drops of `conc. H₂SO₄` produces a sweet-smelling liquid `C`, which reacts with `NaOH` to regenerate `A` and sodium salt `D`.',
    question:
      'Identify `B`, `C`, and the reaction converting `C` back into `A + D` using `NaOH`.',
    options: [
      '`B` = Ethanoic acid; `C` = Ethyl ethanoate; Reaction = Saponification',
      '`B` = Ethene; `C` = Ethane; Reaction = Hydrogenation',
      '`B` = Methanoic acid; `C` = Ethyl methanoate; Reaction = Dehydration',
      '`B` = Propanone; `C` = Ethanol; Reaction = Combustion',
    ],
    correctIndex: 0,
    explanation:
      '`CH₃CH₂OH` oxidises to `CH₃COOH` (`B`); esterification forms sweet-smelling Ethyl ethanoate `CH₃COOC₂H₅` (`C`); alkaline hydrolysis with `NaOH` is **Saponification**.',
  },

  /* --------------------------------------------------------------------------
   * CHAPTER 5 / TOPIC 5: Chemistry Board Mastery & X-Y-Z Puzzles (8 Questions)
   * -------------------------------------------------------------------------- */
  {
    id: 'chem-q-41',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-board-mastery',
    subtopicTitle: 'Rationalized Syllabus Check',
    type: 'mcq',
    marks: 1,
    question:
      'According to the rationalized NCERT Class 10 Science (Code 086) Chemistry syllabus, which chapter/topic is **COMPLETELY DELETED** and excluded from Board Exams?',
    options: [
      'Carbon and its Compounds (Homologous Series & Micelles)',
      'Periodic Classification of Elements (Triads, Octaves, Modern Periodic Trends)',
      'Metals and Non-metals (Electrolytic Refining & Alloys)',
      'Acids, Bases and Salts (Chlor-Alkali & POP)',
    ],
    correctIndex: 1,
    explanation:
      'Periodic Classification of Elements (old Chapter 5) is deleted completely in the rationalized syllabus; focus 100% on Chapters 1–4.',
  },
  {
    id: 'chem-q-42',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-board-mastery',
    subtopicTitle: 'Whitewashing & Shiny Finish X-Y',
    type: 'mcq',
    marks: 1,
    question:
      'Quicklime `X` reacts vigorously with water to produce slaked lime `Y`, which on walls reacts with `CO₂` over 2 days to leave a shiny white coat `Z`. What are `X, Y, Z`?',
    options: [
      '`CaCO₃`, `CaO`, `Ca(OH)₂`',
      '`CaO`, `Ca(OH)₂`, `CaCO₃`',
      '`Ca(OH)₂`, `CaOCl₂`, `CaSO₄`',
      '`CaO`, `CaCl₂`, `CaCO₃`',
    ],
    correctIndex: 1,
    explanation:
      '`CaO` (`X`) + `H₂O` → `Ca(OH)₂` (`Y`); `Ca(OH)₂` + `CO₂` → `CaCO₃` (`Z`, shiny marble-like finish) + `H₂O`.',
  },
  {
    id: 'chem-q-43',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-board-mastery',
    subtopicTitle: 'Brown Metal Cu → CuO → Cu',
    type: 'mcq',
    marks: 1,
    question:
      'Heating shiny reddish-brown copper powder in a china dish coats it with black `X`. Passing `H₂` gas over heated `X` restores the brown metal. Identify `X` and the two reaction types.',
    options: [
      '`X` = `CuS`; Combination followed by Neutralisation',
      '`X` = `CuO`; Oxidation (`Cu → CuO`) followed by Redox reduction (`CuO + H₂ → Cu + H₂O`)',
      '`X` = `CuCO₃`; Decomposition followed by Displacement',
      '`X` = `Cu₂O`; Electrolytic reduction',
    ],
    correctIndex: 1,
    explanation:
      '`2Cu + O₂ —Δ→ 2CuO (black)`; `CuO + H₂ —Δ→ Cu (brown) + H₂O`.',
  },
  {
    id: 'chem-q-44',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-board-mastery',
    subtopicTitle: 'Distinguishing Ethanol vs Ethanoic Acid',
    type: 'mcq',
    marks: 1,
    question:
      'Two colourless liquid bottles lost their labels: one is **Ethanol** and the other is **Ethanoic acid**. Which single lab reagent cleanly distinguishes them via brisk gas effervescence?',
    options: [
      'Adding `Na` metal (only one reacts)',
      'Adding Sodium hydrogencarbonate (`NaHCO₃`) — brisk `CO₂` effervescence occurs ONLY with Ethanoic acid!',
      'Adding distilled water',
      'Adding Sodium chloride solution',
    ],
    correctIndex: 1,
    explanation:
      'Both react with `Na`, so `Na` cannot distinguish them via gas alone! Adding `NaHCO₃` or `Na₂CO₃` gives brisk `CO₂` bubbles ONLY with Ethanoic acid (and blue litmus turns red ONLY with Ethanoic acid).',
    commonMistake: 'Do NOT use `Na` metal to distinguish Ethanol and Ethanoic acid — BOTH react with `Na` to evolve `H₂`!',
  },
  {
    id: 'chem-q-45',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-board-mastery',
    subtopicTitle: 'X-Y-Z Metal Reactivity Mystery',
    type: 'case-based',
    marks: 2,
    casePassage:
      'A silvery metal `M` does not react with cold or hot water, reacts with steam only when heated, and forms an amphoteric oxide `MO_x` that dissolves in `NaOH` to give Sodium aluminate. It also reduces `Fe₂O₃` to molten iron on railway tracks.',
    question:
      'Identify metal `M`, its oxide `MO_x`, and the type of reaction with `Fe₂O₃`.',
    options: [
      '`M` = Zinc (`Zn`), `ZnO`, Roasting',
      '`M` = Aluminium (`Al`), `Al₂O₃`, Thermit Exothermic Displacement',
      '`M` = Iron (`Fe`), `Fe₃O₄`, Calcination',
      '`M` = Magnesium (`Mg`), `MgO`, Combination',
    ],
    correctIndex: 1,
    explanation:
      'Sodium aluminate (`NaAlO₂`) + railway track Thermit welding (`Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃ + Heat`) uniquely identify **`Al` and `Al₂O₃`**!',
  },
  {
    id: 'chem-q-46',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-board-mastery',
    subtopicTitle: '3-Test-Tube Rusting Control',
    type: 'mcq',
    marks: 1,
    question:
      'In NCERT Activity 3.14, three iron nails are placed in Tube A (tap water + open air), Tube B (boiled distilled water + floating oil layer + cork), and Tube C (dry air + anhydrous `CaCl₂` + cork). Which nail(s) rust after one week?',
    options: [
      'Tubes A and B only',
      'Tube A only (requires BOTH air/O₂ and water/moisture)',
      'Tubes A and C only',
      'All three tubes A, B, and C',
    ],
    correctIndex: 1,
    explanation:
      'Tube B lacks dissolved/atmospheric `O₂` (blocked by boiling & oil); Tube C lacks moisture (absorbed by `CaCl₂`). Only Tube A has both `O₂` and `H₂O`!',
  },
  {
    id: 'chem-q-47',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-board-mastery',
    subtopicTitle: 'Cyclohexane vs Benzene Formula Trap',
    type: 'mcq',
    marks: 1,
    question:
      'Compare the saturation and total double bonds in **Cyclohexane (`C₆H₁₂`)** versus **Benzene (`C₆H₆`)**:',
    options: [
      'Cyclohexane is unsaturated with `3` `C=C` bonds; Benzene is saturated with `0` `C=C` bonds',
      'Cyclohexane is a saturated ring (`0` `C=C` bonds); Benzene is an unsaturated ring with `3` alternating `C=C` double bonds',
      'Both are unsaturated rings with `3` `C=C` bonds',
      'Both are saturated rings because all rings follow `CₙH₂ₙ₊₂`',
    ],
    correctIndex: 1,
    explanation:
      'Cyclohexane (`C₆H₁₂`) has ONLY single bonds (`6` C–C + `12` C–H). Benzene (`C₆H₆`) has `3` alternating `C=C` double bonds + `3` `C–C` single bonds + `6` `C–H` bonds.',
  },
  {
    id: 'chem-q-48',
    subjectSlug: 'chemistry',
    topicSlug: 'chem-board-mastery',
    subtopicTitle: 'Master Observation Assertion-Reason',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** Blue crystals of Copper sulphate (`CuSO₄·5H₂O`) turn white on heating and turn blue again when moistened with a few drops of water.\n**Reason (R):** Heating removes the 5 molecules of water of crystallisation to yield anhydrous `CuSO₄`, and adding water restores the hydrated blue lattice.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Water of crystallisation gives `CuSO₄·5H₂O` its blue colour; reversible dehydration/rehydration demonstrates fixed crystalline water.',
  },
];
