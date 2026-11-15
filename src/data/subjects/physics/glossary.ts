import { GlossaryTerm, QuizQuestion } from '../../../types/curriculum';

export const physicsGlossary: GlossaryTerm[] = [
  // =========================================================================
  // CATEGORY 1: Physics — Light: Reflection & Mirrors (10)
  // =========================================================================
  {
    id: 'phy-term-laws-reflection',
    term: 'Laws of Reflection',
    symbol: '∠i = ∠r',
    category: 'Physics — Light: Reflection & Mirrors',
    simpleMeaning: 'Angle of incidence equals angle of reflection, and incident ray, reflected ray & normal lie in the same plane.',
    ncertDefinition:
      '(1) The angle of incidence is equal to the angle of reflection. (2) The incident ray, the normal to the mirror at the point of incidence, and the reflected ray all lie in the same plane. Applicable to plane and spherical mirrors alike.',
    example: 'If a ray strikes a concave mirror along the normal (through C), ∠i = 0° ⇒ ∠r = 0° (retraces its path).',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-light-reflection-refraction',
      subtopicSlug: 'phy09-mirrors-and-reflection',
      sectionId: 'phy09-mirror-laws-signs',
    },
  },
  {
    id: 'phy-term-pole',
    term: 'Pole (P) & Principal Axis',
    symbol: 'P (0, 0)',
    category: 'Physics — Light: Reflection & Mirrors',
    simpleMeaning: 'Centre of the spherical mirror’s reflecting surface; used as the origin for New-Cartesian coordinates.',
    ncertDefinition:
      'The centre of the reflecting surface of a spherical mirror is a point called the pole (P). The straight line passing through the pole and the centre of curvature is the principal axis.',
    example: 'All mirror distances (u, v, f) are measured horizontally starting from Pole P.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-light-reflection-refraction',
      subtopicSlug: 'phy09-mirrors-and-reflection',
      sectionId: 'phy09-mirror-laws-signs',
    },
  },
  {
    id: 'phy-term-centre-curvature',
    term: 'Centre of Curvature (C) & Radius (R)',
    symbol: 'R = 2f',
    category: 'Physics — Light: Reflection & Mirrors',
    simpleMeaning: 'Centre and radius of the hollow sphere of which the mirror’s reflecting surface is a part.',
    ncertDefinition:
      'The reflecting surface of a spherical mirror forms a part of a sphere whose centre is the centre of curvature (C) and radius is R. For small-aperture mirrors, R = 2f.',
    example: 'If R = +3.0 m for a convex rear-view mirror, then f = +1.5 m.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-light-reflection-refraction',
      subtopicSlug: 'phy09-mirrors-and-reflection',
      sectionId: 'phy09-mirror-laws-signs',
    },
  },
  {
    id: 'phy-term-principal-focus-mirror',
    term: 'Principal Focus (F) of Spherical Mirror',
    symbol: 'f = R / 2',
    category: 'Physics — Light: Reflection & Mirrors',
    simpleMeaning: 'Point where rays parallel to the principal axis actually meet (concave) or appear to diverge from (convex) after reflection.',
    ncertDefinition:
      'Rays parallel to the principal axis converge to a point F on the axis (concave mirror) or appear to come from a point F behind the mirror (convex mirror) after reflection.',
    example: 'Concave mirror f is negative (−); convex mirror f is positive (+).',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-light-reflection-refraction',
      subtopicSlug: 'phy09-mirrors-and-reflection',
      sectionId: 'phy09-mirror-laws-signs',
    },
  },
  {
    id: 'phy-term-aperture',
    term: 'Aperture of a Spherical Mirror',
    symbol: 'MN',
    category: 'Physics — Light: Reflection & Mirrors',
    simpleMeaning: 'Effective diameter of the reflecting circular rim of a spherical mirror.',
    ncertDefinition:
      'The diameter of the reflecting surface of a spherical mirror is called its aperture. NCERT Class 10 treats mirrors whose aperture is much smaller than the radius of curvature.',
    example: 'Covering half of a mirror’s aperture reduces image brightness but still yields a complete image.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-light-reflection-refraction',
      subtopicSlug: 'phy09-mirrors-and-reflection',
      sectionId: 'phy09-mirror-laws-signs',
    },
  },
  {
    id: 'phy-term-new-cartesian',
    term: 'New-Cartesian Sign Convention',
    symbol: 'u < 0 always',
    category: 'Physics — Light: Reflection & Mirrors',
    simpleMeaning: 'Distances against incident light (left of P/O) are negative; along light (right) are positive; upward is positive, downward is negative.',
    ncertDefinition:
      'Object is placed to the left of the mirror/lens; all distances parallel to the principal axis are measured from P (or O). Distances measured in the direction of incident light are +, opposite are −; heights upward are +, downward are −.',
    example: 'Object 25 cm in front ⇒ u = −25 cm; inverted image 6 cm tall ⇒ h′ = −6 cm.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-light-reflection-refraction',
      subtopicSlug: 'phy09-mirrors-and-reflection',
      sectionId: 'phy09-mirror-laws-signs',
    },
  },
  {
    id: 'phy-term-mirror-formula',
    term: 'Mirror Formula',
    symbol: '1/v + 1/u = 1/f',
    category: 'Physics — Light: Reflection & Mirrors',
    simpleMeaning: 'Relates image distance v, object distance u, and focal length f of any spherical mirror using a PLUS sign.',
    ncertDefinition:
      'In a spherical mirror, the distance of the object u, distance of the image v, and focal length f are related by 1/v + 1/u = 1/f under New-Cartesian signs.',
    example: 'With f = −15 cm and u = −25 cm: 1/v = −1/15 + 1/25 = −2/75 ⇒ v = −37.5 cm.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-light-reflection-refraction',
      subtopicSlug: 'phy09-mirrors-and-reflection',
      sectionId: 'phy09-mirror-laws-signs',
    },
  },
  {
    id: 'phy-term-mirror-magnification',
    term: 'Mirror Magnification (m)',
    symbol: 'm = h′/h = −v/u',
    category: 'Physics — Light: Reflection & Mirrors',
    simpleMeaning: 'Ratio of image height to object height; negative m means real & inverted, positive m means virtual & erect.',
    ncertDefinition:
      'Magnification produced by a spherical mirror gives the relative extent to which the image is magnified: m = height of image (h′) / height of object (h) = −v / u.',
    example: 'A 3× magnified real image means m = −3 (not +3!).',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-light-reflection-refraction',
      subtopicSlug: 'phy09-mirrors-and-reflection',
      sectionId: 'phy09-mirror-notebook-clinic',
    },
  },
  {
    id: 'phy-term-real-vs-virtual',
    term: 'Real Image vs Virtual Image',
    symbol: 'Real (−m) | Virtual (+m)',
    category: 'Physics — Light: Reflection & Mirrors',
    simpleMeaning: 'Real images actually converge rays and can be caught on a screen (always inverted); virtual images only appear to diverge and cannot hit a screen (always erect).',
    ncertDefinition:
      'A real image is formed by actual intersection of reflected/refracted rays and can be obtained on a screen. A virtual image is formed when rays appear to diverge from a point and cannot be projected onto a screen.',
    example: 'Convex mirror & concave lens ONLY form virtual, erect, diminished images.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-light-reflection-refraction',
      subtopicSlug: 'phy09-mirrors-and-reflection',
      sectionId: 'phy09-mirror-diagrams-lab',
    },
  },
  {
    id: 'phy-term-mirror-uses',
    term: 'Concave vs Convex Mirror Applications',
    symbol: 'Headlight vs Rear-View',
    category: 'Physics — Light: Reflection & Mirrors',
    simpleMeaning: 'Concave focuses parallel beams or magnifies close faces (dentist/headlight); convex gives erect wide field of view (rear-view).',
    ncertDefinition:
      'Concave mirrors are used in torches, searchlights, vehicle headlights (bulb at F), shaving/dentist mirrors (object inside F), and solar furnaces. Convex mirrors are used as rear-view mirrors in vehicles.',
    example: 'Dentist holds a concave mirror closer than f to see an erect, magnified tooth image.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-light-reflection-refraction',
      subtopicSlug: 'phy09-mirrors-and-reflection',
      sectionId: 'phy09-mirror-qa',
    },
  },

  // =========================================================================
  // CATEGORY 2: Physics — Refraction, Lenses & Human Eye (10)
  // =========================================================================
  {
    id: 'phy-term-snells-law',
    term: 'Snell’s Law of Refraction',
    symbol: 'sin i / sin r = n₂₁',
    category: 'Physics — Refraction, Lenses & Human Eye',
    simpleMeaning: 'Ratio of sine of angle of incidence to sine of angle of refraction is constant for a given light colour & media pair.',
    ncertDefinition:
      'The ratio of sine of angle of incidence to the sine of angle of refraction is a constant, for the light of a given colour and for the given pair of media: sin i / sin r = constant.',
    example: 'If light enters crown glass (n = 1.52) at i = 30°, sin r = 0.5 / 1.52 ⇒ r ≈ 19.2°.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-light-reflection-refraction',
      subtopicSlug: 'phy09-refraction-lenses-power',
      sectionId: 'phy09-snell-refractive-index',
    },
  },
  {
    id: 'phy-term-refractive-index',
    term: 'Absolute & Relative Refractive Index',
    symbol: 'n = c / v | n₂₁ = v₁ / v₂',
    category: 'Physics — Refraction, Lenses & Human Eye',
    simpleMeaning: 'Measures how much a transparent medium slows light down compared to vacuum (c/v) or another medium (v₁/v₂).',
    ncertDefinition:
      'Absolute refractive index of a medium is nₘ = c / v (ratio of speed of light in vacuum/air to speed in the medium). Relative refractive index n₂₁ = v₁ / v₂ = n₂ / n₁.',
    example: 'Diamond has n = 2.42, meaning speed of light inside diamond is c / 2.42 ≈ 1.24 × 10⁸ m/s.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-light-reflection-refraction',
      subtopicSlug: 'phy09-refraction-lenses-power',
      sectionId: 'phy09-snell-refractive-index',
    },
  },
  {
    id: 'phy-term-lateral-displacement',
    term: 'Lateral Displacement (Glass Slab)',
    symbol: '∠e = ∠i',
    category: 'Physics — Refraction, Lenses & Human Eye',
    simpleMeaning: 'Perpendicular sideways shift of an emergent ray from the original path after passing through a parallel-sided glass slab.',
    ncertDefinition:
      'When light refracts through a rectangular glass slab, the bending at the opposite parallel faces is equal and opposite, so the emergent ray travels parallel to the incident ray, shifted laterally.',
    example: 'Increases with thicker glass slab, larger angle of incidence i, or higher refractive index n.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-light-reflection-refraction',
      subtopicSlug: 'phy09-refraction-lenses-power',
      sectionId: 'phy09-snell-refractive-index',
    },
  },
  {
    id: 'phy-term-lens-formula',
    term: 'Thin Lens Formula & Magnification',
    symbol: '1/v − 1/u = 1/f | m = +v/u',
    category: 'Physics — Refraction, Lenses & Human Eye',
    simpleMeaning: 'Connects u, v, and f for spherical lenses using a MINUS sign, and magnification with a PLUS sign.',
    ncertDefinition:
      'For any spherical lens of small aperture, 1/v − 1/u = 1/f and linear magnification m = h′/h = v/u. Convex lens f is +, concave lens f is −.',
    example: 'With f = +10 cm, u = −15 cm: 1/v = 1/10 − 1/15 = +1/30 ⇒ v = +30 cm, m = −2.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-light-reflection-refraction',
      subtopicSlug: 'phy09-refraction-lenses-power',
      sectionId: 'phy09-lens-diagrams-lab',
    },
  },
  {
    id: 'phy-term-power-lens',
    term: 'Power of a Lens & Dioptre (D)',
    symbol: 'P = 1/f(m) = 100/f(cm)',
    category: 'Physics — Refraction, Lenses & Human Eye',
    simpleMeaning: 'Degree of convergence or divergence of a lens; reciprocal of focal length in METRES, measured in Dioptres (D).',
    ncertDefinition:
      'The power P of a lens is the reciprocal of its focal length in metres: P = 1/f. Its SI unit is dioptre (D), where 1 D is the power of a lens of focal length 1 m. Net power in contact: P = P₁ + P₂.',
    example: 'A convex lens with f = +25 cm has P = 100 / 25 = +4.0 D.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-light-reflection-refraction',
      subtopicSlug: 'phy09-refraction-lenses-power',
      sectionId: 'phy09-lens-notebook-clinic',
    },
  },
  {
    id: 'phy-term-accommodation',
    term: 'Power of Accommodation & Near Point',
    symbol: '25 cm to ∞',
    category: 'Physics — Refraction, Lenses & Human Eye',
    simpleMeaning: 'Ability of the eye’s crystalline lens (via ciliary muscles) to adjust its focal length to see objects from 25 cm to infinity.',
    ncertDefinition:
      'The ability of the eye lens to adjust its focal length is called accommodation. The minimum distance at which objects can be seen most distinctly without strain is the near point (25 cm for a normal adult eye); the far point is infinity.',
    example: 'Looking at a far tree relaxes ciliary muscles (thin lens, longer f); reading contracts them (thick lens, shorter f).',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-human-eye-colourful-world',
      subtopicSlug: 'phy10-eye-and-defects',
      sectionId: 'phy10-eye-structure',
    },
  },
  {
    id: 'phy-term-myopia-hypermetropia',
    term: 'Myopia, Hypermetropia & Presbyopia',
    symbol: 'Myopia (−D) | Hyper (+D)',
    category: 'Physics — Refraction, Lenses & Human Eye',
    simpleMeaning: 'Myopia focuses far rays in front of retina (fixed by concave −D lens); Hypermetropia focuses near rays behind retina (fixed by convex +D lens).',
    ncertDefinition:
      'Myopia (near-sightedness) is corrected using a concave lens of suitable power. Hypermetropia (far-sightedness) is corrected using a convex lens. Presbyopia is loss of accommodation with ageing, often corrected by bifocal lenses.',
    example: 'Myopic far point 80 cm ⇒ u = −∞, v = −80 cm ⇒ f = −0.8 m ⇒ P = −1.25 D.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-human-eye-colourful-world',
      subtopicSlug: 'phy10-eye-and-defects',
      sectionId: 'phy10-eye-structure',
    },
  },
  {
    id: 'phy-term-dispersion-prism',
    term: 'Dispersion of White Light (VIBGYOR)',
    symbol: '∠i + ∠e = ∠A + ∠D',
    category: 'Physics — Refraction, Lenses & Human Eye',
    simpleMeaning: 'Splitting of white light into 7 colours in a prism because violet slows and bends most while red bends least.',
    ncertDefinition:
      'The splitting of light into its component colours (VIBGYOR) on passing through a triangular glass prism is dispersion. Violet bends the most and red bends the least because different wavelengths travel at different speeds in glass.',
    example: 'Newton placed an inverted second prism P₂ behind P₁ to recombine VIBGYOR back into white light.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-human-eye-colourful-world',
      subtopicSlug: 'phy10-prism-rainbow-scattering',
      sectionId: 'phy10-prism-dispersion',
    },
  },
  {
    id: 'phy-term-rainbow',
    term: 'Rainbow Formation (3 Steps)',
    symbol: 'Refract+Disp → Reflect → Refract',
    category: 'Physics — Refraction, Lenses & Human Eye',
    simpleMeaning: 'Natural spectrum opposite the Sun formed by water droplets acting as tiny prisms via refraction+dispersion, internal reflection, and final refraction.',
    ncertDefinition:
      'Water droplets refract and disperse incident sunlight, then reflect it internally, and finally refract it again when it comes out of the raindrop towards the observer’s eye.',
    example: 'Rainbows always appear in the direction opposite to the Sun after a rain shower.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-human-eye-colourful-world',
      subtopicSlug: 'phy10-prism-rainbow-scattering',
      sectionId: 'phy10-prism-dispersion',
    },
  },
  {
    id: 'phy-term-atmospheric-tyndall',
    term: 'Atmospheric Refraction & Tyndall Scattering',
    symbol: '+2 min + 2 min = 4 min',
    category: 'Physics — Refraction, Lenses & Human Eye',
    simpleMeaning: 'Atmospheric refraction causes stars to twinkle and 4 min extra daylight; scattering by fine particles makes the sky blue and danger lights red.',
    ncertDefinition:
      'Continuous bending of light by Earth’s atmosphere causes star twinkling (point source) and 2-min advance sunrise & delayed sunset. Scattering of light by colloidal/air particles (Tyndall effect) scatters shorter blue wavelengths most and longest red wavelengths least.',
    example: 'Astronauts see a black sky in space because there is no atmosphere to scatter sunlight.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-human-eye-colourful-world',
      subtopicSlug: 'phy10-prism-rainbow-scattering',
      sectionId: 'phy10-atmosphere-scattering',
    },
  },

  // =========================================================================
  // CATEGORY 3: Physics — Electricity & Circuits (10)
  // =========================================================================
  {
    id: 'phy-term-charge-current',
    term: 'Electric Charge (Q) & Current (I)',
    symbol: 'Q = ne | I = Q / t',
    category: 'Physics — Electricity & Circuits',
    simpleMeaning: 'Rate of flow of electric charge; 1 Ampere is 1 Coulomb passing per second (6.25 × 10¹⁸ electrons/s).',
    ncertDefinition:
      'Electric current is the rate of flow of electric charges through any cross-section: I = Q / t. SI unit is ampere (A), where 1 A = 1 C / 1 s. Conventional current flows opposite to electron flow.',
    example: '300 C flowing in 5 minutes (300 s) gives I = 300 / 300 = 1.0 A.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-electricity',
      subtopicSlug: 'phy11-current-ohms-resistivity',
      sectionId: 'phy11-ohms-laws-symbols',
    },
  },
  {
    id: 'phy-term-potential-difference',
    term: 'Electric Potential Difference (V)',
    symbol: 'V = W / Q (Volt)',
    category: 'Physics — Electricity & Circuits',
    simpleMeaning: 'Work done per unit positive charge moving between two points; measured in Volts by a parallel Voltmeter.',
    ncertDefinition:
      'Potential difference between two points in a current-carrying circuit is the work done to move a unit charge from one point to the other: V = W / Q. 1 Volt = 1 Joule / 1 Coulomb.',
    example: 'Moving 2 C across a 12 V battery requires W = V·Q = 12 × 2 = 24 J of work.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-electricity',
      subtopicSlug: 'phy11-current-ohms-resistivity',
      sectionId: 'phy11-ohms-laws-symbols',
    },
  },
  {
    id: 'phy-term-ohms-law',
    term: 'Ohm’s Law & Resistance (R)',
    symbol: 'V = I·R (Ω)',
    category: 'Physics — Electricity & Circuits',
    simpleMeaning: 'At constant temperature, potential difference V is directly proportional to current I; ratio V/I is constant resistance R.',
    ncertDefinition:
      'At constant temperature, the potential difference V across the ends of a given metallic wire is directly proportional to the current I flowing through it: V = I·R. 1 Ω = 1 V / 1 A.',
    example: 'On a V–I graph (V on y-axis), slope = R; on an I–V graph (I on y-axis), slope = 1/R!',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-electricity',
      subtopicSlug: 'phy11-current-ohms-resistivity',
      sectionId: 'phy11-ohms-laws-symbols',
    },
  },
  {
    id: 'phy-term-resistivity',
    term: 'Electrical Resistivity (ρ)',
    symbol: 'R = ρL / A (Ω·m)',
    category: 'Physics — Electricity & Circuits',
    simpleMeaning: 'Intrinsic opposition of a material (Ω·m) independent of wire length or area; changes ONLY with material and temperature.',
    ncertDefinition:
      'Resistivity ρ = R·A / L is a characteristic property of the material itself. Metals and alloys have very low resistivity (10⁻⁸ to 10⁻⁶ Ω·m), whereas insulators like glass/rubber have 10¹² to 10¹⁷ Ω·m.',
    example: 'Stretching a wire to 2L makes R = 4R (since A halves), while resistivity ρ stays completely unchanged.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-electricity',
      subtopicSlug: 'phy11-current-ohms-resistivity',
      sectionId: 'phy11-resistivity-notebook-clinic',
    },
  },
  {
    id: 'phy-term-rheostat',
    term: 'Variable Resistance (Rheostat)',
    symbol: 'Rh',
    category: 'Physics — Electricity & Circuits',
    simpleMeaning: 'Component used to regulate circuit current smoothly without changing the voltage source.',
    ncertDefinition:
      'A component used to regulate current without changing the voltage source is called variable resistance; in an electric circuit, a device called rheostat is often used to change the resistance in the circuit.',
    example: 'Sliding the rheostat jockey changes effective wire length L, varying R and I.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-electricity',
      subtopicSlug: 'phy11-current-ohms-resistivity',
      sectionId: 'phy11-symbols-vi-lab',
    },
  },
  {
    id: 'phy-term-series-combination',
    term: 'Resistors in Series',
    symbol: 'R_s = R₁ + R₂ + R₃',
    category: 'Physics — Electricity & Circuits',
    simpleMeaning: 'Same current I flows through all resistors; total voltage splits across them and total resistance adds directly.',
    ncertDefinition:
      'When resistors are joined end-to-end in series, the current I is identical in every resistor, V = V₁ + V₂ + V₃, and equivalent resistance R_s equals the sum of individual resistances.',
    example: 'Three 6 Ω resistors in series give R_s = 18 Ω (greater than any single resistor).',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-electricity',
      subtopicSlug: 'phy11-circuits-heating-power',
      sectionId: 'phy11-series-parallel-heating',
    },
  },
  {
    id: 'phy-term-parallel-combination',
    term: 'Resistors in Parallel',
    symbol: '1/R_p = 1/R₁ + 1/R₂ + 1/R₃',
    category: 'Physics — Electricity & Circuits',
    simpleMeaning: 'Same voltage V across each branch; total current splits (I = I₁+I₂+I₃) and R_p is ALWAYS smaller than the smallest resistor.',
    ncertDefinition:
      'In a parallel combination, potential difference V across each resistor is equal, total current equals the sum of branch currents, and 1/R_p = 1/R₁ + 1/R₂ + 1/R₃. Used for all household wiring.',
    example: '5 Ω, 10 Ω, and 30 Ω in parallel give 1/R_p = 10/30 ⇒ R_p = 3 Ω (< 5 Ω!).',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-electricity',
      subtopicSlug: 'phy11-circuits-heating-power',
      sectionId: 'phy11-series-parallel-heating',
    },
  },
  {
    id: 'phy-term-joules-law',
    term: 'Joule’s Law of Heating',
    symbol: 'H = I²Rt',
    category: 'Physics — Electricity & Circuits',
    simpleMeaning: 'Heat generated in a resistor equals I²Rt — proportional to square of current, resistance, and duration.',
    ncertDefinition:
      'Joule’s law states that heat produced in a resistor is directly proportional to (i) the square of current for a given R, (ii) resistance for a given I, and (iii) the time for which current flows: H = I²Rt.',
    example: 'Heaters use Nichrome (high ρ, no oxidation at red heat); bulbs use Tungsten (m.p. 3380 °C) + inactive N₂/Ar gas.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-electricity',
      subtopicSlug: 'phy11-circuits-heating-power',
      sectionId: 'phy11-series-parallel-heating',
    },
  },
  {
    id: 'phy-term-electric-power',
    term: 'Electric Power (P)',
    symbol: 'P = VI = I²R = V²/R (W)',
    category: 'Physics — Electricity & Circuits',
    simpleMeaning: 'Rate at which electrical energy is consumed or dissipated; 1 Watt = 1 Volt × 1 Ampere = 1 Joule/second.',
    ncertDefinition:
      'The rate of doing electric work or consuming electric energy is electric power: P = VI = I²R = V²/R. SI unit is Watt (W).',
    example: 'A 220 V, 100 W bulb has R = 484 Ω, so at 110 V it consumes P = 110²/484 = 25 W (not 50 W!).',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-electricity',
      subtopicSlug: 'phy11-circuits-heating-power',
      sectionId: 'phy11-power-notebook-clinic',
    },
  },
  {
    id: 'phy-term-kwh',
    term: 'Kilowatt-Hour (kWh / Commercial Unit)',
    symbol: '1 kWh = 3.6 × 10⁶ J',
    category: 'Physics — Electricity & Circuits',
    simpleMeaning: '1 commercial "unit" on an electricity bill — energy consumed by a 1000 W appliance running for 1 hour.',
    ncertDefinition:
      'One kilowatt-hour (1 kWh), commonly called 1 "unit", is the commercial unit of electrical energy equal to 1000 watt × 3600 second = 3.6 × 10⁶ joules.',
    example: 'A 2 kW heater running 3 hours uses 2 × 3 = 6 kWh (6 units).',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-electricity',
      subtopicSlug: 'phy11-circuits-heating-power',
      sectionId: 'phy11-series-parallel-heating',
    },
  },

  // =========================================================================
  // CATEGORY 4: Physics — Magnetism & Domestic Circuits (10)
  // =========================================================================
  {
    id: 'phy-term-magnetic-field-lines',
    term: 'Magnetic Field & Field Lines',
    symbol: 'B (N→S out, S→N in)',
    category: 'Physics — Magnetism & Domestic Circuits',
    simpleMeaning: 'Closed curves showing magnetic force direction on a compass North pole; crowded near poles and NEVER intersect.',
    ncertDefinition:
      'The region surrounding a magnet in which its force can be detected is a magnetic field. Field lines are closed curves emerging from North and merging at South outside, running S→N inside, and never intersecting each other.',
    example: 'If two lines intersected, a compass needle would point in two directions at once — impossible!',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-magnetic-effects',
      subtopicSlug: 'phy12-field-lines-solenoid',
      sectionId: 'phy12-field-laws',
    },
  },
  {
    id: 'phy-term-right-hand-thumb',
    term: 'Right-Hand Thumb Rule (Maxwell)',
    symbol: 'Thumb = I | Fingers = B',
    category: 'Physics — Magnetism & Domestic Circuits',
    simpleMeaning: 'Hold straight wire in right hand with thumb along current I; curled fingers give direction of concentric magnetic field circles.',
    ncertDefinition:
      'Imagine holding a current-carrying straight conductor in your right hand such that the thumb points towards the direction of current; then your fingers wrap around the conductor in the direction of the field lines.',
    example: 'Current upwards ⇒ concentric B circles look anticlockwise from above (strength B ∝ I/r).',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-magnetic-effects',
      subtopicSlug: 'phy12-field-lines-solenoid',
      sectionId: 'phy12-field-laws',
    },
  },
  {
    id: 'phy-term-solenoid',
    term: 'Solenoid & Uniform Internal Field',
    symbol: 'S → N inside (parallel)',
    category: 'Physics — Magnetism & Domestic Circuits',
    simpleMeaning: 'Cylindrical coil of many insulated turns behaving like a bar magnet outside, with a uniform parallel magnetic field inside.',
    ncertDefinition:
      'A coil of many circular turns of insulated copper wire wrapped closely in the shape of a cylinder is a solenoid. Magnetic field lines inside a solenoid are parallel straight lines, indicating a uniform field at all points inside.',
    example: 'End face with anticlockwise current acts as North pole; clockwise acts as South pole.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-magnetic-effects',
      subtopicSlug: 'phy12-field-lines-solenoid',
      sectionId: 'phy12-field-laws',
    },
  },
  {
    id: 'phy-term-electromagnet',
    term: 'Electromagnet (Soft-Iron Core)',
    symbol: 'Soft Iron + Solenoid',
    category: 'Physics — Magnetism & Domestic Circuits',
    simpleMeaning: 'Temporary strong magnet created by placing a soft-iron core inside a current-carrying solenoid; polarity flips when battery reverses.',
    ncertDefinition:
      'A strong magnetic field produced inside a solenoid can be used to magnetise a piece of magnetic material like soft iron when placed inside the coil. The magnet so formed is called an electromagnet.',
    example: 'Cranes, electric bells, and MRI magnets use electromagnets because strength & poles are controllable.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-magnetic-effects',
      subtopicSlug: 'phy12-field-lines-solenoid',
      sectionId: 'phy12-field-laws',
    },
  },
  {
    id: 'phy-term-flemings-left-hand',
    term: 'Fleming’s Left-Hand Rule',
    symbol: 'Thumb(F) ⊥ Fore(B) ⊥ Mid(I)',
    category: 'Physics — Magnetism & Domestic Circuits',
    simpleMeaning: 'Left-hand Forefinger = Magnetic field B, Middle finger = Conventional Current I, Thumb = Force/Motion F (max at 90°).',
    ncertDefinition:
      'Stretch the thumb, forefinger, and middle finger of your left hand mutually perpendicular. If forefinger points in the direction of magnetic field and middle finger in the direction of current, the thumb points in the direction of motion or force acting on the conductor.',
    example: 'For an electron beam, point middle finger OPPOSITE to electron motion; for protons/alpha, point ALONG motion!',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-magnetic-effects',
      subtopicSlug: 'phy12-force-fleming-domestic',
      sectionId: 'phy12-deleted-alert-fleming',
    },
  },
  {
    id: 'phy-term-ac-dc-india',
    term: 'Alternating Current (AC) vs Direct Current (DC)',
    symbol: 'India: 220 V, 50 Hz',
    category: 'Physics — Magnetism & Domestic Circuits',
    simpleMeaning: 'DC flows steadily in one direction; AC reverses direction periodically (India AC is 220 V, 50 Hz, reversing 100 times/s).',
    ncertDefinition:
      'Direct current (DC) flows in one direction only (cells/batteries), whereas alternating current (AC) reverses its direction periodically. In India, domestic AC power is supplied at 220 V and 50 Hz.',
    example: 'Because 1 cycle (50 Hz) has 2 reversals, Indian AC reverses direction 2 × 50 = 100 times every second!',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-magnetic-effects',
      subtopicSlug: 'phy12-force-fleming-domestic',
      sectionId: 'phy12-deleted-alert-fleming',
    },
  },
  {
    id: 'phy-term-live-neutral-earth',
    term: 'Live, Neutral & Earth Wires',
    symbol: 'Red (220V) | Black (0V) | Green',
    category: 'Physics — Magnetism & Domestic Circuits',
    simpleMeaning: 'Red Live brings 220 V; Black Neutral returns at 0 V; Green Earth grounds metallic appliance bodies for shock safety.',
    ncertDefinition:
      'Domestic wiring uses three insulated wires: Live (positive, red insulation, 220 V), Neutral (negative, black insulation, 0 V), and Earth (green insulation, connected to an earth plate and metallic appliance bodies to provide a low-resistance leakage path).',
    example: 'All switches and fuses are placed strictly on the Red Live wire.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-magnetic-effects',
      subtopicSlug: 'phy12-force-fleming-domestic',
      sectionId: 'phy12-domestic-wiring-3d',
    },
  },
  {
    id: 'phy-term-domestic-circuits-5a-15a',
    term: 'Domestic 5 A & 15 A Parallel Circuits',
    symbol: '5 A (Lights) | 15 A (Power)',
    category: 'Physics — Magnetism & Domestic Circuits',
    simpleMeaning: 'Houses use two separate parallel ratings: 5 A for bulbs/fans and 15 A for high-power geysers/ACs/irons.',
    ncertDefinition:
      'Two separate circuits are used in homes: a 15 A rating for appliances with higher power ratings (geysers, air coolers) and a 5 A rating for bulbs, fans, etc., all connected in parallel across Live and Neutral.',
    example: 'Each socket stays at 220 V and operates independently.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-magnetic-effects',
      subtopicSlug: 'phy12-force-fleming-domestic',
      sectionId: 'phy12-domestic-wiring-3d',
    },
  },
  {
    id: 'phy-term-electric-fuse',
    term: 'Electric Fuse (Overcurrent Protection)',
    symbol: 'Series on Live Wire',
    category: 'Physics — Magnetism & Domestic Circuits',
    simpleMeaning: 'Safety wire of high R and calibrated low melting point in series on the Live wire that melts via I²Rt heating during faults.',
    ncertDefinition:
      'An electric fuse is a safety device connected in series with the live wire that prevents damage to appliances and circuits due to overloading or short-circuiting by melting via Joule heating and breaking the circuit.',
    example: 'A 2 kW oven on 220 V draws 9.09 A and immediately melts a 5 A fuse.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-magnetic-effects',
      subtopicSlug: 'phy12-force-fleming-domestic',
      sectionId: 'phy12-domestic-wiring-3d',
    },
  },
  {
    id: 'phy-term-overloading-short-circuit',
    term: 'Overloading & Short-Circuiting',
    symbol: 'R → 0 ⇒ I → ∞',
    category: 'Physics — Magnetism & Domestic Circuits',
    simpleMeaning: 'Short-circuit occurs when bare Live and Neutral touch (R ≈ 0); overloading occurs when total current exceeds safe circuit rating.',
    ncertDefinition:
      'Short-circuiting happens when damaged insulation causes direct contact between live and neutral wires, making current spike abruptly. Overloading also occurs from accidental hike in supply voltage or connecting too many appliances to a single socket.',
    example: 'Running an iron, microwave, and heater simultaneously from one 5 A socket causes overloading.',
    subtopicPath: {
      subjectSlug: 'physics',
      topicSlug: 'phy-magnetic-effects',
      subtopicSlug: 'phy12-force-fleming-domestic',
      sectionId: 'phy12-domestic-wiring-3d',
    },
  },
];

export const physicsQuizBank: QuizQuestion[] = [
  // =========================================================================
  // TOPIC 1: CH 9 LIGHT – REFLECTION & REFRACTION (12 Qs)
  // =========================================================================
  {
    id: 'phy-q1',
    subjectSlug: 'physics',
    topicSlug: 'phy-light-reflection-refraction',
    subtopicTitle: 'Ch 9: Concave Mirror Real Magnification',
    type: 'mcq',
    marks: 1,
    question:
      'A concave mirror forms a **real, inverted, and same-size** image of an object. Where should the object be placed in front of the mirror?',
    options: [
      'At the principal focus F',
      'Between pole P and focus F',
      'At the centre of curvature C',
      'Beyond the centre of curvature C',
    ],
    correctIndex: 2,
    explanation:
      'At `u = −2f` (Centre of Curvature `C`), `v = −2f` (at `C`), giving `m = −v/u = −1` (real, inverted, same size).',
    commonMistake: 'Confusing `C` (same size real, `m = −1`) with `F` (image at `∞`).',
  },
  {
    id: 'phy-q2',
    subjectSlug: 'physics',
    topicSlug: 'phy-light-reflection-refraction',
    subtopicTitle: 'Ch 9: Dentists & Shaving Mirrors',
    type: 'mcq',
    marks: 1,
    question:
      'No matter how far you stand from a mirror, your image ALWAYS appears **erect and diminished**. Which type of mirror is it likely to be?',
    options: [
      'Concave mirror only',
      'Plane mirror only',
      'Convex mirror only',
      'Either plane or concave mirror',
    ],
    correctIndex: 2,
    explanation:
      'A **convex mirror** ALWAYS produces a virtual, erect, and diminished image (`0 < m < +1`) for all real object positions. (Plane mirror gives same size `m = +1`).',
  },
  {
    id: 'phy-q3',
    subjectSlug: 'physics',
    topicSlug: 'phy-light-reflection-refraction',
    subtopicTitle: 'Ch 9: Mirror Formula Numerical',
    type: 'mcq',
    marks: 1,
    question:
      'An object is placed `30 cm` in front of a concave mirror of focal length `20 cm`. At what distance from the mirror is a sharp real image formed?',
    options: ['60 cm in front', '60 cm behind', '12 cm in front', '30 cm in front'],
    correctIndex: 0,
    explanation:
      '`u = −30 cm`, `f = −20 cm`. `1/v = 1/(−20) − 1/(−30) = −1/20 + 1/30 = (−3 + 2)/60 = −1/60 ⇒ v = −60 cm` (`60 cm` in front).',
    commonMistake: 'Using `+1/20` or subtracting `−1/30` wrongly gives `−12 cm`!',
  },
  {
    id: 'phy-q4',
    subjectSlug: 'physics',
    topicSlug: 'phy-light-reflection-refraction',
    subtopicTitle: 'Ch 9: Magnification Sign Audit',
    type: 'mcq',
    marks: 1,
    question:
      'The magnification produced by a spherical mirror is `m = −0.5`. The image formed by this mirror is:',
    options: [
      'Virtual, erect, and half the size',
      'Real, inverted, and enlarged',
      'Real, inverted, and diminished',
      'Virtual, erect, and enlarged',
    ],
    correctIndex: 2,
    explanation:
      'Negative `m` means **real and inverted**; `|m| = 0.5 < 1` means **diminished** (concave mirror with object beyond `C`).',
  },
  {
    id: 'phy-q5',
    subjectSlug: 'physics',
    topicSlug: 'phy-light-reflection-refraction',
    subtopicTitle: 'Ch 9: Speed of Light in Diamond',
    type: 'mcq',
    marks: 1,
    question:
      'The refractive index of diamond is `2.42` and speed of light in vacuum is `3 × 10⁸ m/s`. Approximately what is the speed of light inside diamond?',
    options: ['7.26 × 10⁸ m/s', '2.42 × 10⁸ m/s', '1.24 × 10⁸ m/s', '0.81 × 10⁸ m/s'],
    correctIndex: 2,
    explanation: '`n = c / v ⇒ v = c / n = (3 × 10⁸) / 2.42 ≈ 1.24 × 10⁸ m/s`.',
    commonMistake: 'Never multiply `c × n` — speed of light inside any medium is ALWAYS `< c`!',
  },
  {
    id: 'phy-q6',
    subjectSlug: 'physics',
    topicSlug: 'phy-light-reflection-refraction',
    subtopicTitle: 'Ch 9: Optical vs Mass Density',
    type: 'mcq',
    marks: 1,
    question:
      'Light enters obliquely from water (`n = 1.33`) into kerosene (`n = 1.44`). Which statement is TRUE?',
    options: [
      'Light speeds up and bends away from the normal',
      'Light slows down and bends towards the normal',
      'Light travels undeviated because kerosene floats on water',
      'Angle of refraction is greater than angle of incidence',
    ],
    correctIndex: 1,
    explanation:
      'Kerosene has higher refractive index (`1.44 > 1.33`), so it is **optically denser** even though its mass density is lower! Hence light slows down and bends **towards** the normal.',
  },
  {
    id: 'phy-q7',
    subjectSlug: 'physics',
    topicSlug: 'phy-light-reflection-refraction',
    subtopicTitle: 'Ch 9: Lens Power Combination',
    type: 'mcq',
    marks: 1,
    question:
      'A convex lens of focal length `25 cm` is kept in contact with a concave lens of focal length `50 cm`. What is the net power of the combination?',
    options: ['+6.0 D', '+2.0 D', '−2.0 D', '+0.02 D'],
    correctIndex: 1,
    explanation:
      '`P₁ = 100 / (+25) = +4.0 D`; `P₂ = 100 / (−50) = −2.0 D`. Net `P = P₁ + P₂ = +4.0 + (−2.0) = +2.0 D`.',
    commonMistake: 'Forgetting `f` in cm needs `100/f` (or giving `+6.0 D` by ignoring concave `-` sign).',
  },
  {
    id: 'phy-q8',
    subjectSlug: 'physics',
    topicSlug: 'phy-light-reflection-refraction',
    subtopicTitle: 'Ch 9: Lens Case Identification',
    type: 'mcq',
    marks: 1,
    question:
      'To use a convex lens of focal length `15 cm` as a **magnifying glass** (virtual, erect, enlarged image), where should a coin be placed?',
    options: [
      'At 30 cm from the lens',
      'At 20 cm from the lens',
      'At 15 cm from the lens',
      'At 10 cm from the lens',
    ],
    correctIndex: 3,
    explanation:
      'A convex lens acts as a magnifying glass ONLY when the object lies between optical centre `O` and focus `F₁` (`|u| < f = 15 cm`), so `10 cm` is the only valid option.',
  },
  {
    id: 'phy-q9',
    subjectSlug: 'physics',
    topicSlug: 'phy-light-reflection-refraction',
    subtopicTitle: 'Ch 9: Assertion–Reason (Mirror vs Lens Sign)',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** A concave lens ALWAYS forms a virtual, erect, and diminished image for a real object placed anywhere in front of it.\n**Reason (R):** A concave lens diverges incident parallel rays so that they always appear to come from its virtual focus on the same side as the object.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Because a concave lens is diverging (`f < 0`), refracted rays never converge on the right; their backward extensions intersect between `F₁` and `O` on the left, producing a virtual, erect, diminished image.',
  },
  {
    id: 'phy-q10',
    subjectSlug: 'physics',
    topicSlug: 'phy-light-reflection-refraction',
    subtopicTitle: 'Ch 9: Assertion–Reason (Glass Slab)',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** A ray of light passing through a rectangular glass slab suffers zero lateral displacement.\n**Reason (R):** At the two parallel opposite faces of the rectangular slab, the extent of bending at the air–glass interface is equal and opposite to the bending at the glass–air interface, making `∠e = ∠i`.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 3,
    explanation:
      'A is **false** (a ray entering obliquely DOES experience sideways **lateral displacement**, though angular deviation is zero!), while R is **true** (`∠e = ∠i` makes the emergent ray parallel).',
  },
  {
    id: 'phy-q11',
    subjectSlug: 'physics',
    topicSlug: 'phy-light-reflection-refraction',
    subtopicTitle: 'Ch 9: Case-Based (Projector Lens)',
    type: 'case-based',
    marks: 2,
    casePassage:
      'A student sets up a classroom projector using a thin **convex lens** of focal length `20 cm` and places an illuminated slide `30 cm` in front of the lens.',
    question: 'At what distance behind the lens must the projection screen be placed, and what will be the linear magnification?',
    options: [
      'v = +60 cm, m = −2',
      'v = +12 cm, m = −0.4',
      'v = −60 cm, m = +2',
      'v = +60 cm, m = +2',
    ],
    correctIndex: 0,
    explanation:
      '`u = −30 cm`, `f = +20 cm`. `1/v = 1/20 + 1/(−30) = (3 − 2)/60 = +1/60 ⇒ v = +60 cm`. Magnification `m = +v/u = (+60)/(−30) = −2` (real, inverted, `2×` enlarged).',
  },
  {
    id: 'phy-q12',
    subjectSlug: 'physics',
    topicSlug: 'phy-light-reflection-refraction',
    subtopicTitle: 'Ch 9: Case-Based (Covered Lens)',
    type: 'case-based',
    marks: 2,
    casePassage:
      'In an optics lab activity, a student focuses a distant tree sharply on a white sheet using a convex lens of `f = +15 cm`. She then pastes opaque black tape over the **lower half** of the lens.',
    question: 'What will she observe on the white sheet now?',
    options: [
      'Only the upper half of the tree is visible',
      'Only the lower half of the tree is visible',
      'The complete image of the tree is formed, but with reduced brightness',
      'No image is formed because half the rays are blocked',
    ],
    correctIndex: 2,
    explanation:
      'Light rays from every part of the tree pass through the uncovered upper half and still focus at `v = +15 cm` to form the **complete image**, only dimmer (lower intensity).',
  },

  // =========================================================================
  // TOPIC 2: CH 10 HUMAN EYE & COLOURFUL WORLD (10 Qs)
  // =========================================================================
  {
    id: 'phy-q13',
    subjectSlug: 'physics',
    topicSlug: 'phy-human-eye-colourful-world',
    subtopicTitle: 'Ch 10: Power of Accommodation',
    type: 'mcq',
    marks: 1,
    question:
      'When a normal eye shifts focus from a distant mountain to reading a textbook held at `25 cm`, what happens to the ciliary muscles and eye lens?',
    options: [
      'Ciliary muscles relax, lens becomes thinner, focal length increases',
      'Ciliary muscles contract, lens becomes thicker (more curved), focal length decreases',
      'Ciliary muscles contract, lens becomes thinner, focal length increases',
      'Image distance to the retina increases significantly',
    ],
    correctIndex: 1,
    explanation:
      'Focusing on nearby objects requires shorter focal length (higher converging power), achieved by **ciliary muscles contracting** so the crystalline lens becomes **thicker/more curved**.',
  },
  {
    id: 'phy-q14',
    subjectSlug: 'physics',
    topicSlug: 'phy-human-eye-colourful-world',
    subtopicTitle: 'Ch 10: Myopia Correction Numerical',
    type: 'mcq',
    marks: 1,
    question:
      'A person cannot see objects distinctly beyond `1.2 m` from his eye. What power of corrective lens is needed to restore clear distant vision?',
    options: ['+0.83 D (Convex)', '−0.83 D (Concave)', '−1.20 D (Concave)', '+1.20 D (Convex)'],
    correctIndex: 1,
    explanation:
      'Myopia: `u = −∞`, `v = −1.2 m ⇒ f = −1.2 m`. Power `P = 1 / (−1.2) = −0.83 D` (Concave lens).',
    commonMistake: 'Writing `−1.2 D` confuses `f` (`−1.2 m`) with `P = 1/f` (`−0.83 D`)!',
  },
  {
    id: 'phy-q15',
    subjectSlug: 'physics',
    topicSlug: 'phy-human-eye-colourful-world',
    subtopicTitle: 'Ch 10: Hypermetropia Correction Numerical',
    type: 'mcq',
    marks: 1,
    question:
      'The near point of a hypermetropic eye is `50 cm`. What lens power is required to read a book placed at the normal near point of `25 cm`?',
    options: ['−2.0 D', '+2.0 D', '+4.0 D', '+6.0 D'],
    correctIndex: 1,
    explanation:
      '`u = −25 cm`, `v = −50 cm`. `1/f = 1/(−50) − 1/(−25) = −1/50 + 2/50 = +1/50 cm⁻¹ ⇒ f = +50 cm = +0.5 m ⇒ P = +2.0 D`.',
  },
  {
    id: 'phy-q16',
    subjectSlug: 'physics',
    topicSlug: 'phy-human-eye-colourful-world',
    subtopicTitle: 'Ch 10: Iris vs Cornea Function',
    type: 'mcq',
    marks: 1,
    question:
      'Which part of the human eye causes **most of the refraction** of incoming light rays, and which part **controls the size of the pupil**?',
    options: [
      'Crystalline lens causes most refraction; Retina controls pupil',
      'Cornea (outer surface) causes most refraction; Iris controls pupil',
      'Iris causes most refraction; Ciliary muscles control pupil',
      'Retina causes most refraction; Optic nerve controls pupil',
    ],
    correctIndex: 1,
    explanation:
      'Per NCERT Ch 10: Most of the refraction occurs at the outer surface of the **cornea**, while the muscular **iris** controls the size of the **pupil**.',
  },
  {
    id: 'phy-q17',
    subjectSlug: 'physics',
    topicSlug: 'phy-human-eye-colourful-world',
    subtopicTitle: 'Ch 10: Rainbow Formation Steps',
    type: 'mcq',
    marks: 1,
    question:
      'Which sequence of optical phenomena inside tiny water droplets produces a rainbow?',
    options: [
      'Reflection → Refraction → Dispersion',
      'Refraction & Dispersion → Internal Reflection → Refraction',
      'Dispersion → Refraction → Scattering',
      'Diffraction → Scattering → Internal Reflection',
    ],
    correctIndex: 1,
    explanation:
      'Sunlight entering a raindrop undergoes (1) **refraction and dispersion**, then (2) **internal reflection** at the back inner wall, and (3) **refraction** again upon exiting toward the observer.',
  },
  {
    id: 'phy-q18',
    subjectSlug: 'physics',
    topicSlug: 'phy-human-eye-colourful-world',
    subtopicTitle: 'Ch 10: Atmospheric Daylight Extension',
    type: 'mcq',
    marks: 1,
    question:
      'Due to atmospheric refraction, the Sun becomes visible `2 minutes` before actual sunrise and remains visible `2 minutes` after actual sunset. How much total time does this add to the apparent length of the day?',
    options: ['Zero minutes', '2 minutes', '4 minutes', '8 minutes'],
    correctIndex: 2,
    explanation: '`+2 min` at sunrise and `+2 min` at sunset = **4 minutes** total extra apparent daylight.',
  },
  {
    id: 'phy-q19',
    subjectSlug: 'physics',
    topicSlug: 'phy-human-eye-colourful-world',
    subtopicTitle: 'Ch 10: Assertion–Reason (Prism Deviation)',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** When white light passes through a glass prism, violet light bends more than red light.\n**Reason (R):** In glass, violet light has a shorter wavelength and travels slower than red light, giving glass a higher refractive index for violet.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Different colours travel at different speeds in glass; violet slows down most (`n_violet > n_red`), so it bends most toward the prism base.',
  },
  {
    id: 'phy-q20',
    subjectSlug: 'physics',
    topicSlug: 'phy-human-eye-colourful-world',
    subtopicTitle: 'Ch 10: Assertion–Reason (Danger Signals)',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** Danger signal lights at airports, railway tracks, and towers are coloured red.\n**Reason (R):** Red light has the shortest wavelength, so it is scattered the maximum by fog or smoke.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 2,
    explanation:
      'A is **true**, whereas R is **false**: red has the **longest** visible wavelength (`~700 nm`), so it is scattered the **least** by fog or smoke and penetrates farthest!',
  },
  {
    id: 'phy-q21',
    subjectSlug: 'physics',
    topicSlug: 'phy-human-eye-colourful-world',
    subtopicTitle: 'Ch 10: Case-Based (Bifocal Prescription)',
    type: 'case-based',
    marks: 2,
    casePassage:
      'An elderly teacher’s optical prescription states: Upper lens `P₁ = −2.0 D`, Lower lens `P₂ = +2.5 D`.',
    question: 'Identify his eye condition and the focal lengths of the upper and lower parts of his bifocal lens.',
    options: [
      'Presbyopia; upper f₁ = −50 cm (concave), lower f₂ = +40 cm (convex)',
      'Myopia only; upper f₁ = −20 cm, lower f₂ = +25 cm',
      'Hypermetropia only; upper f₁ = +50 cm, lower f₂ = −40 cm',
      'Presbyopia; upper f₁ = −2.0 cm, lower f₂ = +2.5 cm',
    ],
    correctIndex: 0,
    explanation:
      'Requiring both distant (`−D`) and reading (`+D`) correction indicates **Presbyopia** (bifocal lens). `f₁ = 100/(−2.0) = −50 cm` (concave); `f₂ = 100/(+2.5) = +40 cm` (convex).',
  },
  {
    id: 'phy-q22',
    subjectSlug: 'physics',
    topicSlug: 'phy-human-eye-colourful-world',
    subtopicTitle: 'Ch 10: Case-Based (Night Sky Observation)',
    type: 'case-based',
    marks: 2,
    casePassage:
      'Through a backyard telescope on a crisp night, Meera observes both Mars and distant bright stars. She notices the stars flicker continuously, while Mars shines with a steady glow.',
    question: 'Which physical explanation best accounts for why Mars does NOT twinkle?',
    options: [
      'Mars lies outside Earth’s atmosphere so refraction never touches its light',
      'Mars acts as an extended source (collection of many point-sized sources) whose intensity fluctuations average out to zero',
      'Planets emit monochromatic red light that bypasses atmospheric refraction',
      'Light from Mars travels faster than starlight in vacuum',
    ],
    correctIndex: 1,
    explanation:
      'Because Mars is much closer than stars, it acts as a collection of a large number of point-sized sources; total variation in light entering the eye averages out to zero.',
  },

  // =========================================================================
  // TOPIC 3: CH 11 ELECTRICITY (12 Qs)
  // =========================================================================
  {
    id: 'phy-q23',
    subjectSlug: 'physics',
    topicSlug: 'phy-electricity',
    subtopicTitle: 'Ch 11: Charge & Electron Count',
    type: 'mcq',
    marks: 1,
    question:
      'A current of `0.5 A` is drawn by a filament of an electric bulb for `10 minutes`. How much electric charge flows through the circuit?',
    options: ['5 C', '30 C', '300 C', '600 C'],
    correctIndex: 2,
    explanation: '`t = 10 × 60 = 600 s`. `Q = I × t = 0.5 × 600 = 300 C`.',
    commonMistake: 'Forgetting `10 min = 600 s` gives `0.5 × 10 = 5 C`!',
  },
  {
    id: 'phy-q24',
    subjectSlug: 'physics',
    topicSlug: 'phy-electricity',
    subtopicTitle: 'Ch 11: V–I vs I–V Graph Slope Trap',
    type: 'mcq',
    marks: 1,
    question:
      'In an **I–V graph** (**current `I` on the vertical Y-axis** and **potential difference `V` on the horizontal X-axis**), straight line `P` makes a steeper angle (`60°`) than line `Q` (`30°`). Which conductor has HIGHER resistance?',
    options: [
      'Conductor P, because steeper slope always means higher R',
      'Conductor Q, because on an I–V graph slope = 1/R (flatter line = higher R)',
      'Both have identical resistance',
      'Cannot be determined without knowing wire length',
    ],
    correctIndex: 1,
    explanation:
      'Since `I` is on the Y-axis, `Slope = ΔI/ΔV = 1/R`. Flatter line `Q` has smaller slope `1/R`, meaning **larger resistance `R_Q > R_P`**!',
  },
  {
    id: 'phy-q25',
    subjectSlug: 'physics',
    topicSlug: 'phy-electricity',
    subtopicTitle: 'Ch 11: Wire Stretching 4R Rule',
    type: 'mcq',
    marks: 1,
    question:
      'A cylindrical wire of resistance `5 Ω` is stretched uniformly until its length is **tripled (`3L`)** while keeping volume constant. What are its new resistance and resistivity?',
    options: [
      '15 Ω; resistivity triples',
      '45 Ω; resistivity remains unchanged',
      '45 Ω; resistivity triples',
      '5/9 Ω; resistivity remains unchanged',
    ],
    correctIndex: 1,
    explanation:
      'Volume `A·L` constant ⇒ `L′ = 3L` makes `A′ = A/3`. `R′ = ρ(3L)/(A/3) = 9R = 9 × 5 = 45 Ω`. Resistivity `ρ` depends only on material & temperature, so it stays unchanged.',
  },
  {
    id: 'phy-q26',
    subjectSlug: 'physics',
    topicSlug: 'phy-electricity',
    subtopicTitle: 'Ch 11: Parallel Minimum Resistance',
    type: 'mcq',
    marks: 1,
    question:
      'What is the **minimum** total resistance that can be obtained by combining five resistors each of value `1/5 Ω`?',
    options: ['1/5 Ω', '1 Ω', '1/25 Ω', '25 Ω'],
    correctIndex: 2,
    explanation:
      'Minimum resistance comes from **parallel** connection: `1/R_p = 5 × [1 / (1/5)] = 5 × 5 = 25 ⇒ R_p = 1/25 Ω`! (Maximum in series would be `5 × 1/5 = 1 Ω`).',
    commonMistake: 'Classical NCERT Exemplar MCQ! Many students answer `1/5` or `25` instead of `1/25 Ω`.',
  },
  {
    id: 'phy-q27',
    subjectSlug: 'physics',
    topicSlug: 'phy-electricity',
    subtopicTitle: 'Ch 11: Heating Ratio Series vs Parallel',
    type: 'mcq',
    marks: 1,
    question:
      'Two conducting wires of the same material and equal lengths and diameters are first connected in **series** and then in **parallel** across the same potential difference `V`. What is the ratio of heat produced in series to parallel (`H_s : H_p`) in equal time?',
    options: ['1 : 2', '2 : 1', '1 : 4', '4 : 1'],
    correctIndex: 2,
    explanation:
      'Let each wire have resistance `R`. `R_s = 2R` and `R_p = R/2`. Across same voltage `V`, `H = V²t / R`, so `H_s / H_p = R_p / R_s = (R/2) / (2R) = 1 : 4`!',
    commonMistake: 'Using `H = I²Rt` blindly assumes `I` is equal in both circuits — `V` is constant across the battery, NOT `I`!',
  },
  {
    id: 'phy-q28',
    subjectSlug: 'physics',
    topicSlug: 'phy-electricity',
    subtopicTitle: 'Ch 11: Bulb Power at Half Voltage',
    type: 'mcq',
    marks: 1,
    question:
      'An electric bulb is rated `220 V` and `100 W`. When it is operated on `110 V`, the power consumed will be:',
    options: ['100 W', '75 W', '50 W', '25 W'],
    correctIndex: 3,
    explanation:
      'Filament resistance `R = V²/P = 220²/100 = 484 Ω`. At `110 V`, `P′ = 110² / 484 = 100 / 4 = 25 W`.',
  },
  {
    id: 'phy-q29',
    subjectSlug: 'physics',
    topicSlug: 'phy-electricity',
    subtopicTitle: 'Ch 11: Bulb Gas & Filament',
    type: 'mcq',
    marks: 1,
    question:
      'Which pair correctly explains why **Tungsten** is used for bulb filaments and **Nitrogen/Argon** fills the glass bulb?',
    options: [
      'Low melting point; oxygen-rich gas increases glow',
      'High melting point (3380 °C); chemically inactive gas prevents oxidation',
      'Lowest resistivity among metals; nitrogen conducts current',
      'High flexibility; argon cools the tungsten below 100 °C',
    ],
    correctIndex: 1,
    explanation:
      'Tungsten melts only at `3380 °C` and doesn’t melt while white-hot; chemically inactive Nitrogen & Argon stop the hot filament from oxidising.',
  },
  {
    id: 'phy-q30',
    subjectSlug: 'physics',
    topicSlug: 'phy-electricity',
    subtopicTitle: 'Ch 11: Commercial Energy Conversion',
    type: 'mcq',
    marks: 1,
    question: 'One kilowatt-hour (`1 kWh`) of electrical energy equals:',
    options: ['3.6 × 10³ J', '3.6 × 10⁵ J', '3.6 × 10⁶ J', '1000 J'],
    correctIndex: 2,
    explanation: '`1 kWh = 1000 J/s × 3600 s = 3,600,000 J = 3.6 × 10⁶ J`.',
  },
  {
    id: 'phy-q31',
    subjectSlug: 'physics',
    topicSlug: 'phy-electricity',
    subtopicTitle: 'Ch 11: Assertion–Reason (Ammeter vs Voltmeter)',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** An ammeter is always connected in series in a circuit, while a voltmeter is connected in parallel.\n**Reason (R):** An ideal ammeter has very high resistance and an ideal voltmeter has nearly zero resistance.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 2,
    explanation:
      'A is **true**, whereas R is **false** (reversed!): an ammeter must have **very low** resistance so it doesn’t reduce current, and a voltmeter must have **very high** resistance so it draws negligible current.',
  },
  {
    id: 'phy-q32',
    subjectSlug: 'physics',
    topicSlug: 'phy-electricity',
    subtopicTitle: 'Ch 11: Assertion–Reason (Nichrome Alloys)',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** Alloys like Nichrome are commonly used in electrical heating devices such as toasters and electric irons.\n**Reason (R):** Alloys generally have higher resistivity than their constituent pure metals and do not oxidise (burn) readily at high temperatures.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation: 'Both A and R are true and R directly gives both NCERT reasons for using Nichrome in heating coils.',
  },
  {
    id: 'phy-q33',
    subjectSlug: 'physics',
    topicSlug: 'phy-electricity',
    subtopicTitle: 'Ch 11: Case-Based (Fuse Check on Geyser)',
    type: 'case-based',
    marks: 2,
    casePassage:
      'A bathroom geyser rated `2.2 kW, 220 V` is plugged into a socket protected by a `5 A` fuse.',
    question: 'Calculate the current drawn by the geyser and predict what happens when it is switched ON.',
    options: [
      'Draws 10 A; the 5 A fuse melts and breaks the circuit',
      'Draws 5 A; the geyser operates safely',
      'Draws 0.1 A; no heating occurs',
      'Draws 22 A; the neutral wire breaks first',
    ],
    correctIndex: 0,
    explanation:
      '`I = P / V = 2200 W / 220 V = 10 A`. Because `10 A > 5 A`, the `5 A` fuse melts immediately via Joule heating (`I²Rt`) — a `15 A` power socket is required!',
  },
  {
    id: 'phy-q34',
    subjectSlug: 'physics',
    topicSlug: 'phy-electricity',
    subtopicTitle: 'Ch 11: Case-Based (Electricity Bill)',
    type: 'case-based',
    marks: 2,
    casePassage:
      'A study room runs two `50 W` LED tubes for `5 hours` daily and one `100 W` fan for `10 hours` daily throughout the month of April (`30 days`).',
    question: 'How many commercial units (`kWh`) are consumed in April?',
    options: ['15 units', '30 units', '45 units', '60 units'],
    correctIndex: 2,
    explanation:
      'Daily energy `= (2 × 50 W × 5 h) + (100 W × 10 h) = 500 + 1000 = 1500 Wh = 1.5 kWh/day`. In `30 days`: `1.5 × 30 = 45 kWh` (`45 units`).',
  },

  // =========================================================================
  // TOPIC 4: CH 12 MAGNETIC EFFECTS OF ELECTRIC CURRENT (10 Qs — STRICT RATIONALIZED)
  // =========================================================================
  {
    id: 'phy-q35',
    subjectSlug: 'physics',
    topicSlug: 'phy-magnetic-effects',
    subtopicTitle: 'Ch 12: Inside a Solenoid',
    type: 'mcq',
    marks: 1,
    question: 'The magnetic field inside a long straight solenoid carrying electric current:',
    options: [
      'Is zero everywhere along the axis',
      'Decreases rapidly as we move towards its ends',
      'Increases towards its outer walls only',
      'Is the same at all points (uniform, parallel field lines)',
    ],
    correctIndex: 3,
    explanation:
      'Exact NCERT Exercise Q3: Field lines inside a solenoid are parallel straight lines, showing the magnetic field is **the same (uniform) at all points inside**.',
  },
  {
    id: 'phy-q36',
    subjectSlug: 'physics',
    topicSlug: 'phy-magnetic-effects',
    subtopicTitle: 'Ch 12: Closed Field Loops',
    type: 'mcq',
    marks: 1,
    question: 'Which statement about magnetic field lines of a bar magnet is **INCORRECT**?',
    options: [
      'They emerge from the North pole and merge at the South pole outside the magnet',
      'Inside the magnet, their direction is from South pole to North pole',
      'Two magnetic field lines can intersect right at the midpoint of the magnet',
      'Crowded field lines near the poles indicate a stronger magnetic field',
    ],
    correctIndex: 2,
    explanation:
      'Two magnetic field lines **NEVER intersect anywhere** — intersection would mean a compass needle points in two different directions at the same point!',
  },
  {
    id: 'phy-q37',
    subjectSlug: 'physics',
    topicSlug: 'phy-magnetic-effects',
    subtopicTitle: 'Ch 12: Right-Hand Thumb Rule',
    type: 'mcq',
    marks: 1,
    question:
      'A straight vertical wire carries current **vertically upwards**. Viewed from directly above the wire, what is the direction of the magnetic field circles around it?',
    options: [
      'Clockwise concentric circles',
      'Anticlockwise concentric circles',
      'Straight lines pointing away from the wire',
      'Zero magnetic field in horizontal plane',
    ],
    correctIndex: 1,
    explanation:
      'By Maxwell’s Right-Hand Thumb Rule, pointing right thumb **upwards** curls fingers in **anticlockwise** circles when viewed from above.',
  },
  {
    id: 'phy-q38',
    subjectSlug: 'physics',
    topicSlug: 'phy-magnetic-effects',
    subtopicTitle: 'Ch 12: Fleming Left-Hand — Alpha Beam',
    type: 'mcq',
    marks: 1,
    question:
      'A positively charged **alpha particle (`α²⁺`)** projected towards **West** is deflected towards **North** by a magnetic field. The direction of the magnetic field is:',
    options: ['Towards South', 'Towards East', 'Downwards', 'Upwards'],
    correctIndex: 3,
    explanation:
      'Positive `α²⁺` moving West ⇒ middle finger (`I`) = **West**; Force (`F`, thumb) = **North**. By Fleming’s Left-Hand Rule, forefinger (`B`) points **Upwards**!',
  },
  {
    id: 'phy-q39',
    subjectSlug: 'physics',
    topicSlug: 'phy-magnetic-effects',
    subtopicTitle: 'Ch 12: Electron Beam Trap',
    type: 'mcq',
    marks: 1,
    question:
      'An **electron beam (`e⁻`)** moves horizontally from **West to East** in a magnetic field directed **vertically downwards** into the table. Using Fleming’s Left-Hand Rule, in which direction is the electron beam deflected?',
    options: ['Towards North', 'Towards South', 'Vertically Upwards', 'Zero deflection'],
    correctIndex: 1,
    explanation:
      'Electron moves West→East ⇒ Conventional Current `I` points **East→West** (OPPOSITE!). With `B` **Downwards** and `I` **West**, Left-Hand Thumb (`F`) points **South**!',
    commonMistake: 'Answering "North" forgets that electron flow is OPPOSITE to conventional current `I`!',
  },
  {
    id: 'phy-q40',
    subjectSlug: 'physics',
    topicSlug: 'phy-magnetic-effects',
    subtopicTitle: 'Ch 12: Domestic Wire Colour Coding',
    type: 'mcq',
    marks: 1,
    question:
      'In India’s `220 V, 50 Hz` domestic wiring, what are the standard insulation colours of **Live**, **Neutral**, and **Earth** wires respectively?',
    options: [
      'Black, Red, Green',
      'Red, Black, Green',
      'Green, Black, Red',
      'Red, Green, Black',
    ],
    correctIndex: 1,
    explanation: 'Standard CBSE/NCERT colour convention: **Live = Red**, **Neutral = Black**, **Earth = Green**.',
  },
  {
    id: 'phy-q41',
    subjectSlug: 'physics',
    topicSlug: 'phy-magnetic-effects',
    subtopicTitle: 'Ch 12: Assertion–Reason (Short-Circuiting)',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** At the time of a short circuit, the current in the circuit increases abruptly to a very large value.\n**Reason (R):** During a short circuit, the live wire and neutral wire come into direct contact, making the effective resistance of the circuit nearly zero.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation: 'By `I = V/R`, direct live–neutral contact reduces `R → 0`, causing current to surge dangerously until the fuse melts.',
  },
  {
    id: 'phy-q42',
    subjectSlug: 'physics',
    topicSlug: 'phy-magnetic-effects',
    subtopicTitle: 'Ch 12: Assertion–Reason (AC Reversals)',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** Domestic alternating current in India (`50 Hz`) reverses its direction `50` times every second.\n**Reason (R):** Alternating current reverses its direction twice during each complete cycle.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 3,
    explanation:
      'R is **true** (2 reversals per cycle), making A **false**: at `50 Hz`, Indian AC reverses `2 × 50 = 100` times per second (every `1/100 s`)!',
  },
  {
    id: 'phy-q43',
    subjectSlug: 'physics',
    topicSlug: 'phy-magnetic-effects',
    subtopicTitle: 'Ch 12: Case-Based (Soft-Iron Electromagnet)',
    type: 'case-based',
    marks: 2,
    casePassage:
      'A student winds `50` turns of insulated copper wire around a soft-iron nail and connects it to a `6 V` battery. Looking straight at the left end of the nail, current flows **anticlockwise**.',
    question: 'Which magnetic pole forms at the left end, and how can she flip the poles without rewinding the coil?',
    options: [
      'South pole forms; reverse battery polarity to flip poles',
      'North pole forms; reverse battery polarity to flip poles',
      'North pole forms; replace soft-iron with plastic rod to flip poles',
      'Both ends become North poles simultaneously',
    ],
    correctIndex: 1,
    explanation:
      'Clock-Face Rule: **Anticlockwise = North (`N`) Pole**, Clockwise = South (`S`) Pole. Reversing the battery terminals flips current direction and swaps the `N` & `S` poles!',
  },
  {
    id: 'phy-q44',
    subjectSlug: 'physics',
    topicSlug: 'phy-magnetic-effects',
    subtopicTitle: 'Ch 12: Case-Based (Earthing Safety)',
    type: 'case-based',
    marks: 2,
    casePassage:
      'While ironing clothes, Riya notices a tiny frayed spot where the internal `220 V` red wire touches the metal soleplate of a three-pin steam iron properly connected to an **earthed (`Green`) wall socket**.',
    question: 'What happens the moment the live wire touches the metal body of a properly earthed iron?',
    options: [
      'The metal body stays at 220 V and shocks Riya mildly',
      'The earth wire offers a low-resistance path keeping the body near 0 V and triggering a high fault current that blows the Live fuse',
      'Nothing happens because the Neutral wire carries earth current slowly',
      'Only the green insulation melts without affecting the fuse',
    ],
    correctIndex: 1,
    explanation:
      'The **earth wire** offers a low-resistance conducting path to earth, keeping the iron’s metallic casing at earth potential (`0 V`) and drawing heavy fault current that blows the Live fuse safely.',
  },

  // =========================================================================
  // TOPIC 5: PHYSICS BOARD MASTERY — CROSS-CHAPTER AUDIT (4 Qs)
  // =========================================================================
  {
    id: 'phy-q45',
    subjectSlug: 'physics',
    topicSlug: 'phy-board-mastery',
    subtopicTitle: 'Mastery Audit: Mirror vs Lens Magnification',
    type: 'mcq',
    marks: 1,
    question:
      'An optical device produces a virtual, erect image with magnification **`m = +2.5`** for an object placed `12 cm` in front of it. Identify the optical device!',
    options: [
      'Convex mirror OR Concave lens',
      'Concave mirror (inside F) OR Convex lens (inside F₁)',
      'Plane mirror only',
      'Convex lens with object beyond 2F₁',
    ],
    correctIndex: 1,
    explanation:
      'Only **Concave Mirror** (object between `P` & `F`) and **Convex Lens** (object between `O` & `F₁`) produce virtual, erect, **magnified** (`m > +1`) images! Convex mirror & concave lens always give `0 < m < +1`.',
  },
  {
    id: 'phy-q46',
    subjectSlug: 'physics',
    topicSlug: 'phy-board-mastery',
    subtopicTitle: 'Mastery Audit: SI Unit Pairs',
    type: 'mcq',
    marks: 1,
    question:
      'Which row correctly matches the physical quantity with its **exact SI unit**?',
    options: [
      'Resistivity → Ω | Power of lens → cm⁻¹ | Electric energy → Watt',
      'Resistivity → Ω·m | Power of lens → Dioptre (m⁻¹) | Commercial energy → kWh',
      'Charge → Ampere | Potential difference → Joule | Resistance → V·A',
      'Refractive index → m/s | Magnification → cm | Power → Joule',
    ],
    correctIndex: 1,
    explanation:
      'Resistivity is `Ω·m` (Ohm-metre), Power of a lens is `Dioptre` (`1 D = 1 m⁻¹`), and commercial unit of electric energy is `kWh` (`3.6 × 10⁶ J`).',
  },
  {
    id: 'phy-q47',
    subjectSlug: 'physics',
    topicSlug: 'phy-board-mastery',
    subtopicTitle: 'Mastery Audit: Assertion–Reason (Force Zero Angle)',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** A current-carrying conductor placed **parallel** to a uniform magnetic field experiences **zero** magnetic force.\n**Reason (R):** The magnetic force on a current-carrying conductor is maximum when the direction of current is perpendicular (`90°`) to the magnetic field and drops to zero at `0°` or `180°`.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 0,
    explanation:
      'Magnetic force `F = B·I·l·sin θ`: at `θ = 90°`, `sin 90° = 1` (maximum); at `θ = 0°` or `180°` (parallel/anti-parallel), `sin θ = 0` ⇒ **zero force**.',
  },
  {
    id: 'phy-q48',
    subjectSlug: 'physics',
    topicSlug: 'phy-board-mastery',
    subtopicTitle: 'Mastery Audit: Assertion–Reason (Deleted Syllabus Check)',
    type: 'assertion-reason',
    marks: 1,
    question:
      '**Assertion (A):** When a straight conductor carries current in a magnetic field, its direction of force is found using Fleming’s **Left-Hand** Rule.\n**Reason (R):** In a household circuit, the main fuse is always wired in series on the Neutral (Black) wire so appliances never lose 220 V supply.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    correctIndex: 2,
    explanation:
      'A is **true**, whereas R is **false**: the fuse MUST be wired in series on the **Live (Red, 220 V)** wire — putting a fuse on the Neutral wire leaves the appliance dangerously live at `220 V` even after the fuse blows!',
  },
];
