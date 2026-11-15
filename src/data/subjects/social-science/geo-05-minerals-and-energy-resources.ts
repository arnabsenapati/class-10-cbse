import { Subtopic } from '../../../types/curriculum';

export const sstGeo05: Subtopic = {
  id: 'sst-geo-05',
  slug: 'minerals-and-energy-resources',
  title: 'Ch 5: Minerals and Energy Resources (+ 22 Map Pins)',
  subtitle:
    'Geography | 5 Modes of Occurrence, Rat-Hole Mining, Ferrous/Non-Ferrous Belts (Kudremukh, Bailadila, Koraput, Mica), Coal/Oil/HVJ + Non-Conventional Energy & 22 Map Pins',
  estimatedMinutes: 46,
  difficulty: 'Core CBSE',
  ncertSection: 'Geography Chapter 5 — Minerals and Energy Resources (+ 22 Map Pins)',
  learningObjectives: [
    'Explain all five modes of mineral occurrence in rocks and oceans, and state why the NGT banned rat-hole mining in Meghalaya.',
    'Differentiate Magnetite vs. Hematite iron ore grades and locate India’s four major iron-ore belts plus copper, bauxite (Panchpatmali) and mica belts.',
    'Classify Coal (Peat → Anthracite; Gondwana 200M yrs vs. Tertiary 55M yrs), Petroleum & 1,700 km HVJ Natural Gas pipeline.',
    'Highlight Non-Conventional sources (Nuclear/Thorium in Kerala Monazite sands, Solar, Wind, Biogas twin benefits, Tidal, Geothermal at Manikaran & Puga Valley) and learn all 22 CBSE Map Pins.',
  ],
  keywords: [
    'Veins and Lodes',
    'Placer Deposits',
    'Rat-Hole Mining NGT',
    'Magnetite Hematite',
    'Bailadila Kudremukh',
    'Panchpatmali Bauxite',
    'Mica Koderma Nellore',
    'Gondwana vs Tertiary Coal',
    'HVJ Pipeline',
    'Monazite Thorium Geothermal',
    '22 Map Pins Ch 5',
  ],
  sections: [
    {
      id: 'geo-05-modes-and-ferrous',
      title: 'Pillar 1: 5 Modes of Occurrence, Rat-Hole Mining & Iron Ore / Manganese Belts',
      blocks: [
        {
          type: 'steps',
          title: 'Five Modes of Occurrence of Minerals + Meghalaya Rat-Hole Ban',
          items: [
            {
              label: '1. Igneous & Metamorphic Rocks — Veins & Lodes',
              detail:
                'Minerals occur in cracks, crevices, faults or joints. Smaller occurrences are called VEINS and larger ones LODES, formed when molten/gaseous minerals forced upward cool and solidify (e.g., tin, copper, zinc, lead).',
            },
            {
              label: '2. Sedimentary Rocks — Beds & Layers (+ Evaporation)',
              detail:
                'Formed as a result of deposition, accumulation, and concentration in horizontal strata under long periods of great heat and pressure (coal, some iron ore); others like gypsum, potash salt, and sodium salt form via evaporation especially in arid regions.',
            },
            {
              label: '3. Decomposition of Surface Rocks — Residual Weathered Mass',
              detail:
                'Soluble constituents are removed leaving a residual mass of weathered material containing ores — BAUXITE is formed this way.',
            },
            {
              label: '4. Alluvial / Placer Deposits (Valley Floors & Hill Bases)',
              detail:
                'Minerals that are NOT corroded by water found in sands of valley floors and base of hills: gold, silver, tin, and platinum.',
            },
            {
              label: '5. Ocean Waters & Beds + Tribal Rat-Hole Mining Alert',
              detail:
                'Ocean waters yield common salt, magnesium, and bromine; ocean beds are rich in manganese nodules.\nNGT Trap Alert: In Meghalaya (Jowai & Cherapunjee), coal mining done by family members via long narrow tunnels ("Rat-hole mining") was declared ILLEGAL by the National Green Tribunal (NGT).',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Ferrous Minerals (~3/4th of India’s Metallic Mineral Value): Iron Ore Grades, 4 Belts & Manganese',
          headers: ['Grade / Belt', 'Exact Districts, Ports & Industrial Facts'],
          rows: [
            [
              'Magnetite vs. Hematite Grades',
              'Magnetite: Finest iron ore with very high iron content up to 70%; excellent magnetic qualities valuable in electrical industry.\nHematite: Most important industrial iron ore in quantity used, slightly lower iron content (50–60%).',
            ],
            [
              '1. Odisha–Jharkhand Belt',
              'High-grade hematite found in Badampahar mines (Mayurbhanj & Kendujhar districts, Odisha) and Gua & Noamundi mines (Singhbhum district, Jharkhand).',
            ],
            [
              '2. Durg–Bastar–Chandrapur Belt',
              'Chhattisgarh & Maharashtra. Famous Bailadila range of hills (Bastar district, Chhattisgarh — shaped like hump of an ox) has 14 deposits of super high-grade hematite; exported to Japan & South Korea via Vishakhapatnam port.',
            ],
            [
              '3. Ballari–Chitradurga–Chikkamagaluru–Tumakuru Belt',
              'Karnataka. Kudremukh mines in Western Ghats (100% export unit — one of world’s largest deposits); ore transported as SLURRY through a pipeline to a port near Mangaluru.',
            ],
            [
              '4. Maharashtra–Goa Belt + Manganese',
              'Goa & Ratnagiri district (Maharashtra); efficiently exploited & exported through Marmagao port.\nManganese: Used to make steel & ferro-manganese alloy (~10 kg manganese needed to manufacture 1 tonne of steel), plus bleaching powder, insecticides & paints.',
            ],
          ],
        },
      ],
    },
    {
      id: 'geo-05-nonferrous-nonmetallic-conservation',
      title: 'Pillar 2: Non-Ferrous (Copper, Bauxite), Mica, Limestone & Mineral Conservation',
      blocks: [
        {
          type: 'table',
          caption: 'Non-Ferrous, Non-Metallic & Rock Minerals — Exact NCERT Centres & Uses',
          headers: ['Mineral', 'Key Properties & Uses', 'Leading Producers & Centres'],
          rows: [
            [
              'Copper (Non-Ferrous)',
              'Critically deficient in India; malleable, ductile & good conductor → electrical cables, electronics & chemical industries.',
              'Balaghat mines (MP), Khetri mines (Rajasthan), and Singhbhum district (Jharkhand).',
            ],
            [
              'Bauxite → Aluminium',
              'Clay-like substance yielding alumina & aluminium (extreme lightness + strength + conductivity + malleability).',
              'Amarkantak plateau, Maikal hills & Bilaspur–Katni plateau. ODISHA is largest producer; Panchpatmali deposits in Koraput district are most important.',
            ],
            [
              'Mica (Non-Metallic)',
              'Series of thin plates/leaves (1,000 sheets layer just a few cm); clear/black/green/red/yellow/brown. INDISPENSABLE in electric & electronic industries for excellent di-electric strength, low power loss factor, insulating properties & high-voltage resistance.',
              'Northern edge of Chota Nagpur plateau (Koderma–Gaya–Hazaribagh belt of Jharkhand = leading producer), Ajmer (Rajasthan) & Nellore mica belt (Andhra Pradesh).',
            ],
            [
              'Limestone (Rock Mineral)',
              'Found with calcium/magnesium carbonates in sedimentary rocks; BASIC raw material for CEMENT industry & essential for smelting iron ore in the blast furnace.',
              'Widely spread across limestone sedimentary belts.',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'trap',
          title: 'Mining: Why Is It Called a "Killer Industry" & Why Conserve Minerals?',
          body: 'Workable mineral deposits constitute barely 1% of the earth’s crust, taking millions of years to form while extraction from greater depths lowers quality and raises cost:',
          bullets: [
            'Health & Safety Hazards: Dust and noxious fumes cause pulmonary diseases; constant threat of collapsing mine roofs, inundation & fires in coalmines; dumping waste/slurry contaminates water sources, land & streams.',
            'Conservation Remedies: Planned sustainable use, improved technologies allowing low-grade ores at low costs, recycling metals, using scrap metals and substitutes.',
          ],
        },
      ],
    },
    {
      id: 'geo-05-energy-and-map-pins',
      title: 'Pillar 3 & 4: Conventional vs. Non-Conventional Energy + All 22 CBSE Map Pins (Ch 5)',
      blocks: [
        {
          type: 'table',
          caption: 'Conventional vs. Non-Conventional Energy Resources in India',
          headers: ['Energy Source', 'Key Scientific / Geological Classifications & Indian Sites'],
          rows: [
            [
              'Coal (Conventional)',
              'Four grades by carbon & depth: Peat (low carbon, high moisture) → Lignite (soft brown coal; principal reserves in Neyveli, TN for electricity) → Bituminous (most popular commercial coal; metallurgical coal = high-grade bituminous for iron smelting) → Anthracite (highest-quality hard coal).\nTwo Ages: Gondwana (>200 million yrs — Damodar valley: Jharia, Raniganj, Bokaro + Godavari/Mahanadi/Son/Wardha) vs. Tertiary (~55 million yrs — Meghalaya, Assam, Arunachal, Nagaland).',
            ],
            [
              'Petroleum & Natural Gas',
              'Petroleum (tertiary anticlines & fault traps; "nodal industry"): Mumbai High, Gujarat (Ankaleshwar, Kalol), Assam (oldest producer: Digboi, Naharkatiya, Moran-Hugrijan).\nNatural Gas: Clean low-CO₂ fuel; Krishna–Godavari basin & Mumbai High; 1,700 km Hazira–Vijaipur–Jagdishpur (HVJ) pipeline linking Mumbai High/Bassein to W/N fertiliser & power plants.',
            ],
            [
              'Nuclear / Atomic Energy',
              'Uranium & Thorium in Jharkhand & Aravalli ranges of Rajasthan; Monazite sands of Kerala are rich in THORIUM.',
            ],
            [
              'Solar, Wind, Biogas, Tidal & Geothermal',
              'Solar: Photovoltaic converts sunlight directly to electricity.\nWind: Largest cluster Nagarcoil to Madurai (Tamil Nadu) + AP, KA, GJ, KL, MH, Lakshadweep; Nagarcoil & Jaisalmer famed.\nBiogas (Gobar gas): Higher thermal efficiency; twin benefits to farmers — energy + improved manure, saving trees & soil-nutrient dung.\nTidal: Gulf of Khambhat, Gulf of Kuchchh (Gujarat) & Gangetic delta Sunderbans (WB).\nGeothermal: Parvati Valley near Manikaran (HP) & Puga Valley (Ladakh).',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'COMPULSORY CBSE MAP LIST — Chapter 5 Minerals & Energy (All 22 Items)',
          headers: ['Category', 'Exact NCERT / CBSE Map Pins & States'],
          rows: [
            ['Iron Ore Mines (5 — Identification)', 'Mayurbhanj (Odisha) | Durg (Chhattisgarh) | Bailadila (Chhattisgarh) | Bellary / Ballari (Karnataka) | Kudremukh (Karnataka)'],
            ['Coal Mines (4 — Identification)', 'Raniganj (West Bengal) | Bokaro (Jharkhand) | Talcher (Odisha) | Neyveli (Tamil Nadu — Lignite!)'],
            ['Oil Fields (6 — Identification)', 'Digboi (Assam) | Naharkatiya (Assam) | Mumbai High (Offshore MH) | Bassien (Offshore MH) | Kalol (Gujarat) | Ankaleshwar (Gujarat)'],
            ['Thermal Power Plants (3 — Locating & Labelling)', 'Namrup (Assam) | Singrauli (Madhya Pradesh — SE border) | Ramagundam (Telangana)'],
            ['Nuclear Power Plants (4 — Locating & Labelling)', 'Narora (Uttar Pradesh) | Kakrapara (Gujarat) | Tarapur (Maharashtra) | Kalpakkam (Tamil Nadu)'],
          ],
        },
      ],
    },
    {
      id: 'geo-05-board-qa',
      title: 'Pillar 5 & 6: 4M Case Box, Student Mistake Trap, Checkpoint & 2M/3M/5M Answers',
      blocks: [
        {
          type: 'qa',
          marks: 4,
          tag: 'Section E Source/Case (4 Marks)',
          question:
            'Read the extract on energy conservation and answer (1 + 1 + 2 = 4 Marks):\n"Energy saved is energy produced. India is presently one of the least energy efficient countries in the world. We have to adopt a cautious approach for the judicious use of our limited energy resources. As concerned citizens we can do our bit by using public transport systems instead of individual vehicles, switching off electricity when not in use, using power-saving devices and using non-conventional sources of energy."\n\nQuestions:\n(i) Name the two minerals found in the Monazite sands of Kerala or Aravalli ranges of Rajasthan used for nuclear power generation. (1M)\n(ii) Identify India’s two experimental geothermal energy sites. (1M)\n(iii) Explain two reasons why India must shift rapidly from conventional fossil fuels to non-conventional renewable sources like solar and biogas. (2M)',
          answer:
            '(i) Thorium (abundant in Monazite sands of Kerala) and Uranium (Jharkhand & Aravalli ranges of Rajasthan).\n(ii) Parvati Valley near Manikaran (Himachal Pradesh) and Puga Valley (Ladakh).\n(iii) Two reasons: (1) Rising oil/gas prices, potential shortages, and fossil-fuel pollution create serious environmental & energy-security risks; (2) India has abundant sunlight, wind, tidal inlets, and biomass — non-conventional sources are renewable, clean, and provide rural twin benefits (e.g., Gobar gas gives both fuel and high-quality manure without burning dung cakes).',
        },
        {
          type: 'notebook-mistake',
          studentName: 'Kabir',
          title: 'Three Frequent Ch 5 Mineral & Map Traps',
          wrongWork:
            '1) "Neyveli in Tamil Nadu is a Gondwana bituminous coalfield."\n2) "Kakrapara nuclear plant is in Tamil Nadu, and Kalpakkam is in Gujarat."\n3) "HVJ Pipeline carries crude petroleum from Assam to Punjab."',
          teacherFix:
            '1) Neyveli (Tamil Nadu) holds LIGNITE (low-grade brown coal) reserves for electricity, whereas Gondwana bituminous coalfields are mainly in Damodar valley (Jharia, Raniganj, Bokaro).\n2) KAKRAPARA = Gujarat; KALPAKKAM = Tamil Nadu (near Chennai); NARORA = Uttar Pradesh; TARAPUR = Maharashtra.\n3) The 1,700 km Hazira–Vijaipur–Jagdishpur (HVJ) cross-country pipeline carries NATURAL GAS from Mumbai High & Bassein to western/northern fertiliser and power plants.',
          whyWrong:
            'Both "Ka-" nuclear plants (Kakrapara vs. Kalpakkam) are almost annually tested in Q37b locating/labelling map questions.',
        },
        {
          type: 'checkpoint',
          prompt:
            'Verify which TWO statements about Geography Ch 5 are completely correct:',
          options: [
            {
              id: 'bauxite-koraput',
              label: 'Odisha is India’s largest bauxite producer, with Panchpatmali deposits in Koraput district being most important.',
            },
            {
              id: 'kudremukh',
              label: 'Iron ore from Kudremukh (Karnataka) is transported as slurry through a pipeline to a port near Mangaluru for export.',
            },
            {
              id: 'tertiary-200',
              label: 'Tertiary coal deposits are over 200 million years old and occur mainly in the Damodar valley.',
            },
            {
              id: 'magnetite-50',
              label: 'Hematite has higher iron content (70%) and better magnetic quality than Magnetite.',
            },
          ],
          correctIds: ['bauxite-koraput', 'kudremukh'],
          multiSelect: true,
          successMsg:
            'Exact! Panchpatmali (Odisha bauxite) and Kudremukh slurry pipeline (Karnataka) are spot-on. Gondwana coal is >200M years (Tertiary = ~55M years in NE India), and Magnetite holds up to 70% iron.',
          hintMsg:
            'Check the geological ages of Gondwana vs. Tertiary coal and the iron percentage of Magnetite vs. Hematite.',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE 2-Mark (40 Words)',
          question:
            'Why is Mica indispensable for the electric and electronic industries? Name one major mica belt in India.',
          answer:
            '1. Key Properties: Due to its excellent di-electric strength, low power loss factor, insulating properties, and resistance to high voltage, mica is one of the most indispensable minerals in electric and electronic industries.\n2. Major Belt: Koderma–Gaya–Hazaribagh belt of Jharkhand (Chota Nagpur northern edge; also Ajmer in Rajasthan & Nellore in AP).',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'CBSE 3-Mark (60 Words)',
          question:
            'Distinguish between Ferrous and Non-Ferrous minerals, and explain two ways to conserve mineral resources.',
          answer:
            '1. Ferrous vs. Non-Ferrous: Ferrous minerals contain iron (e.g., iron ore, manganese, chromite) and form ~3/4th of India’s metallic mineral output, providing the base for metallurgical industries; Non-Ferrous minerals lack iron (e.g., copper, bauxite, lead, zinc, gold) and are vital in electrical, engineering, and metallurgical roles.\n2. Two Conservation Ways: Recycling metals & using scrap/substitutes, and evolving improved technologies allowing use of low-grade ores at low costs.',
        },
        {
          type: 'qa',
          marks: 5,
          tag: 'CBSE 5-Mark (120 Words)',
          question:
            'Compare Gondwana and Tertiary coal formations in India, and explain the four varieties of coal based on carbon content and depth of burial.',
          answer:
            'Two Geological Coal Ages:\n1. Gondwana Coal (~200+ Million Years Old): Metallurgical coal found mainly in the Damodar valley (West Bengal–Jharkhand: Jharia, Raniganj, Bokaro) as well as Godavari, Mahanadi, Son, and Wardha valleys.\n2. Tertiary Coal (~55 Million Years Old): Occurs in the North-Eastern states of Meghalaya, Assam, Arunachal Pradesh, and Nagaland.\nFour Grades of Coal:\n3. Peat & Lignite: Decaying swamp plants form peat (low carbon, high moisture, low heating capacity), while lignite is a low-grade soft brown coal with high moisture (major reserves in Neyveli, Tamil Nadu for electricity).\n4. Bituminous Coal: Deeply buried coal subjected to higher temperatures; the most popular commercial coal (high-grade metallurgical bituminous is vital for smelting iron in blast furnaces).\n5. Anthracite: The highest-quality hard coal with maximum carbon content.',
        },
      ],
    },
  ],
};
