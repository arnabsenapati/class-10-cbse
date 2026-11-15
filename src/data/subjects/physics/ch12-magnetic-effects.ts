import { Topic } from '../../../types/curriculum';

export const topicMagnetism: Topic = {
  id: 'phy-topic-4',
  slug: 'phy-magnetic-effects',
  order: 4,
  title: 'Ch 12: Magnetic Effects of Electric Current',
  description:
    'Magnetic field lines, Right-Hand Thumb Rule, circular loop & solenoid electromagnets, Fleming’s Left-Hand Rule (with electron vs alpha beam trap), and India 220V domestic electric circuits.',
  ncertChapter: 'Chapter 12: Magnetic Effects of Electric Current',
  subtopics: [
    {
      id: 'phy12-field-lines-solenoid',
      slug: 'phy12-field-lines-solenoid',
      title: 'Magnetic Field Lines, Straight Conductor, Circular Loop & Solenoid',
      subtitle:
        'Closed N→S / S→N Loops, Never-Intersecting Proof, Right-Hand Thumb Rule, Clock-Face Rule & Soft-Iron Electromagnets',
      estimatedMinutes: 40,
      difficulty: 'Core CBSE',
      ncertSection: 'NCERT Class 10 Science — Chapter 12 (Sections 12.1 – 12.2)',
      learningObjectives: [
        'List all 4 properties of magnetic field lines and prove why two magnetic field lines NEVER intersect.',
        'Apply Maxwell’s Right-Hand Thumb Rule to determine magnetic field direction around a straight current-carrying wire.',
        'Describe magnetic field of a circular loop (`B ∝ I, B ∝ N, B ∝ 1/r`) and use the Clock-Face Rule on a solenoid.',
        'Compare an electromagnet (soft-iron core, temporary, reversible) with a permanent bar magnet (hard steel).',
      ],
      keywords: [
        'Magnetic field lines',
        'Right-hand thumb rule',
        'Circular loop',
        'Solenoid',
        'Electromagnet',
        'Clock-face rule',
      ],
      sections: [
        {
          id: 'phy12-field-laws',
          title: '1. Magnetic Field Lines, Oersted, Right-Hand Thumb Rule & Solenoid',
          blocks: [
            {
              type: 'quick-summary',
              title: '60-Second Ch 12 Magnetic Fields & Solenoids Summary',
              bullets: [
                '**Magnetic Field Line Rules:** (1) Continuous **closed curves** — emerge from **North (`N`)** and merge into **South (`S`)** **OUTSIDE**, and travel **`S → N` INSIDE** the magnet; (2) **Relative strength** shown by degree of closeness/crowding (strongest at poles); (3) **NEVER intersect** (intersection would mean a compass needle points in two directions simultaneously at one point — impossible!).',
                '**Straight Conductor (`B ∝ I / r`):** Field lines are **concentric circles** centred on the wire. Direction given by **Right-Hand Thumb Rule** (Thumb = current `I`, curled fingers = magnetic field `B`).',
                '**Circular Loop:** For `n` circular turns, field at the centre becomes **`n` times** stronger (`B ∝ n`, `B ∝ I`, `B ∝ 1/r`) because currents in every turn flow in the same sense and add up.',
                '**Solenoid:** Coil of many circular turns wrapped closely in a **cylinder** shape. Field inside is **uniform** (parallel straight lines pointing `S → N`). Outside, its field pattern is **identical to a bar magnet**!',
                '**Clock-Face Pole Rule:** Looking straight at an end face of a coil/solenoid — **Clockwise** current = **South (`S`) Pole**; **Anticlockwise** current = **North (`N`) Pole**.',
              ],
            },
            {
              type: 'table',
              caption: 'Electromagnet vs Permanent Bar Magnet (Guaranteed 2M/3M Comparison)',
              headers: ['Feature', 'Electromagnet (Soft-Iron Solenoid)', 'Permanent Magnet (Steel / Alnico)'],
              rows: [
                ['Nature of Magnetism', '**Temporary** (magnetism vanishes when current switches OFF)', '**Permanent** (retains magnetism without current)'],
                ['Strength', 'Can be made **very strong** & varied by changing `I` or turns `N`', 'Fixed, comparatively weaker strength'],
                ['Polarity (`N` & `S`)', '**Easily reversed** by reversing battery terminals', '**Fixed** poles; cannot be reversed'],
                ['Core Material', '**Soft iron** (high permeability, zero retentivity)', '**Hard steel / Alnico** (high retentivity)'],
              ],
            },
          ],
        },
        {
          id: 'phy12-magnet-3d-lab',
          title: '2. Bar Magnet Atlas & 3D Straight-Wire / Solenoid Lab',
          blocks: [
            {
              type: 'visual-diagram',
              diagramId: 'domestic-circuit-and-bar-magnet',
              title: 'Bar Magnet Closed Loops & Domestic Wiring Reference',
              caption: 'Part A highlights the closed S → N internal return path inside a bar magnet (never stopping at the poles!).',
            },
            {
              type: 'lab',
              labId: 'physics-magnetism-3d',
              title: 'Interactive 3D Straight Wire & Solenoid Electromagnet Lab (Scenes 1 & 2)',
              caption: 'Orbit 360° in Scene 1 (flip current ↑/↓ to see Right-Hand Thumb curl) and Scene 2 (toggle Soft-Iron Core & reverse solenoid poles)!',
            },
          ],
        },
        {
          id: 'phy12-field-notebook-clinic',
          title: '3. Pole & Field-Direction Mistake Clinic',
          blocks: [
            {
              type: 'notebook-mistake',
              studentName: 'Arjun',
              title: 'Saying Field Lines Inside a Magnet Go N → S',
              wrongWork: 'Magnetic field lines start at North pole and end at South pole (everywhere N -> S).',
              teacherFix: 'OUTSIDE: N -> S; INSIDE magnet/solenoid: S -> N (so field lines form CLOSED continuous loops!)',
              whyWrong:
                'Electric field lines start on `+` and end on `−`, whereas **magnetic field lines have NO starting or ending point** — they ALWAYS form closed loops going `N → S` outside and `S → N` inside!',
            },
            {
              type: 'notebook-mistake',
              studentName: 'Diya',
              title: 'Applying Right-Hand Rule Backward for Horizontal East–West Wire',
              wrongWork: 'Current flows East to West in an overhead power line -> field directly BELOW the wire is East to West.',
              teacherFix: 'Point RIGHT thumb West (towards left on paper) -> fingers curl DOWN in front, and point SOUTH (into/toward viewer) or NORTH depending on observer view: strictly curl OVER top -> South, UNDER wire -> North!',
              whyWrong:
                'Verify carefully with your **right hand**: stand facing North, point right thumb **West** (your left). Your fingers go **down** in front of the wire (South side) and **curl toward North directly BELOW the wire**!',
            },
          ],
        },
        {
          id: 'phy12-field-qa',
          title: '4. CBSE Board Exam Q&As (Field Lines & Solenoids)',
          blocks: [
            {
              type: 'qa',
              marks: 2,
              tag: 'NCERT',
              question: 'Why don’t two magnetic field lines intersect each other?',
              answer:
                'If two magnetic field lines were to intersect at a point, it would mean that at the point of intersection, a **compass needle would point in two different directions simultaneously**, which is physically impossible (magnetic field at any point has one unique direction).',
              markingTip: 'Underline **"compass needle would point in two directions simultaneously — impossible"**!',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question: 'What is a solenoid? List three ways to increase the strength of the magnetic field inside a current-carrying solenoid.',
              answer:
                'A **solenoid** is a coil of many circular turns of insulated copper wire wrapped closely in the shape of a cylinder.\nThree ways to increase its magnetic field strength:\n1. **Increase the magnitude of electric current (`I`)** flowing through it.\n2. **Increase the number of turns per unit length (`n`)**.\n3. **Insert a soft-iron core** inside the solenoid (forming a strong electromagnet).',
              markingTip: 'Also state that the field inside a solenoid is **uniform** (parallel straight lines) — very frequent 1M MCQ!',
            },
          ],
        },
      ],
    },
    {
      id: 'phy12-force-fleming-domestic',
      slug: 'phy12-force-fleming-domestic',
      title: 'Force on Conductor, Fleming’s Left-Hand Rule & Domestic Circuits',
      subtitle:
        'Kicking Wire Experiment (F = BIl, Max at 90°), Fleming’s Left-Hand Rule, Electron vs α²⁺ Beam Trap, Deleted Motor/EMI Alert & India 220V Domestic Safety',
      estimatedMinutes: 40,
      difficulty: 'Board Mastery',
      ncertSection: 'NCERT Class 10 Science — Chapter 12 (Sections 12.3 – 12.4)',
      learningObjectives: [
        'State when force on a current-carrying conductor in a magnetic field is maximum (90°) and zero (0° or 180°).',
        'Apply Fleming’s Left-Hand Rule accurately to protons, alpha particles (current = velocity), and electrons (current = OPPOSITE to velocity!).',
        'Recognize the deleted CBSE topics in Ch 12 so zero exam prep time is wasted on Electric Motor, EMI, or Generator.',
        'Explain India’s 220 V, 50 Hz domestic wiring: Live (Red), Neutral (Black), Earth (Green), parallel 5A/15A circuits, Fuse, Overloading & Short-circuiting.',
      ],
      keywords: [
        'Fleming’s left-hand rule',
        'Force on conductor',
        'Domestic electric circuits',
        'Live Neutral Earth wires',
        'Overloading',
        'Short-circuiting',
        'Electric fuse',
      ],
      sections: [
        {
          id: 'phy12-deleted-alert-fleming',
          title: '1. Deleted CBSE Scope Alert + Fleming’s Left-Hand Rule',
          blocks: [
            {
              type: 'callout',
              variant: 'trap',
              title: 'DELETED TOPICS ALERT (Rationalized CBSE 2026–27 Ch 12)',
              body: 'The following topics from older NCERT editions are **COMPLETELY DELETED** and WILL NOT be tested in CBSE 2026–27 Board Exams:\n• **Electric Motor** (working, split-ring commutator)\n• **Electromagnetic Induction (EMI)** (Faraday’s coil–magnet experiments)\n• **Fleming’s Right-Hand Rule**\n• **Electric Generator** (AC & DC generators)\n**DO INCLUDE:** Magnetic Field Lines, Straight Wire/Loop/Solenoid, Force on Current-Carrying Conductor, **Fleming’s Left-Hand Rule**, and **Domestic Electric Circuits**!',
            },
            {
              type: 'quick-summary',
              title: '60-Second Force & Fleming’s Left-Hand Rule (FBI) Key',
              bullets: [
                '**Force Magnitude:** A conductor of length `l` carrying current `I` in field `B` experiences maximum force when **`I ⊥ B` (`90°`)**, and **ZERO force** when `I` is **parallel or anti-parallel** (`0°` or `180°`) to `B`!',
                '**Fleming’s Left-Hand Rule (Father–Mother–Child / F–B–I):** Stretch thumb, forefinger, and middle finger of your **LEFT hand** mutually perpendicular: **Forefinger → Magnetic Field (`B`)**, **Middle/Central finger → Current (`I`)**, **Thumb → Force / Motion (`F`)**.',
                '**#1 Charge Beam Trap:** Positive beams (**proton `p⁺`**, **alpha particle `α²⁺`**) ⇒ Conventional current `I` is in the **SAME** direction as motion. **Electron (`e⁻`) / beta (`β⁻`) beam** ⇒ Conventional current `I` is in the **OPPOSITE** direction to electron motion!',
                '**AC vs DC in India:** Household supply is **Alternating Current (`AC`)** at **`220 V`, frequency `50 Hz`** (reverses direction **`100` times per second**, i.e., every `1/100 s`!).',
              ],
            },
          ],
        },
        {
          id: 'phy12-domestic-wiring-3d',
          title: '2. India 220 V Domestic Circuits & 3D Fleming’s Left-Hand Lab',
          blocks: [
            {
              type: 'lab',
              labId: 'physics-magnetism-3d',
              title: 'Interactive 3D Fleming’s Left-Hand Rule Lab (Switch to Scene 3)',
              caption: 'Select Scene 3 and toggle between Conventional Current I, Proton (α²⁺) Beam, and Electron (e⁻) Beam to see why F flips for electrons!',
            },
            {
              type: 'table',
              caption: 'India 220 V, 50 Hz Domestic Wiring & Safety Architecture (NCERT Fig. 12.14)',
              headers: ['Wire / Safety Feature', 'Insulation Colour & Voltage', 'Critical Function & CBSE Exam Rule'],
              rows: [
                ['**Live Wire (Phase)**', '**Red** | **`220 V`**', 'Brings AC power in. **Main Switch & Electric Fuse MUST be on Live wire** so turning off/melting disconnects high voltage completely!'],
                ['**Neutral Wire**', '**Black** | **`0 V`**', 'Completes the return circuit back to substation (`ΔV = 220 V − 0 V = 220 V`).'],
                ['**Earth Wire**', '**Green** | **`0 V` (Safety)**', 'Connected to a copper plate deep in earth AND to **metallic bodies** (iron, toaster, geyser, fridge). Provides a **low-resistance conducting path** for leakage current → keeps appliance body at earth potential (`0 V`), preventing fatal electric shock!'],
                ['**Two Parallel Ratings**', '**`5 A`** & **`15 A`**', '**`5 A`** circuit: bulbs, fans, TV. **`15 A`** circuit: high-power appliances (geyser, AC, iron, heater). All sockets wired in **parallel**.'],
                ['**Short-Circuiting**', 'Live touches Neutral directly', 'Resistance drops nearly to **zero** → current shoots up abruptly → sparks/fire if fuse doesn’t blow.'],
                ['**Overloading**', 'Excess current > safe rating', 'Caused by (1) connecting **too many appliances to a single socket**, (2) **accidental hike in supply voltage**, or (3) live–neutral contact.'],
              ],
            },
            {
              type: 'visual-diagram',
              diagramId: 'domestic-circuit-and-bar-magnet',
              title: 'India 220 V, 50 Hz Domestic Electric Circuit Schematic (Part B)',
              caption: 'Trace Live (Red) through Board Fuse → kWh Meter → Distribution Box → Parallel 5 A & 15 A sockets, with Earth (Green) protecting metal bodies.',
            },
          ],
        },
        {
          id: 'phy12-fleming-notebook-clinic',
          title: '3. Electron vs Alpha-Particle & Fuse Placement Clinic',
          blocks: [
            {
              type: 'notebook-mistake',
              studentName: 'Pranav',
              title: 'Pointing Middle Finger Along Electron Velocity Instead of Opposite',
              wrongWork: 'An electron enters West-to-East in a downward B field -> I = East, B = Down -> Thumb points North.',
              teacherFix: 'Electron moves East => Conventional Current I points WEST (opposite!) -> B = Down -> Force F points SOUTH!',
              whyWrong:
                'Fleming’s Left-Hand Rule uses **Conventional Current `I`** (direction of **positive** charge flow). Because electrons carry **negative** charge, ALWAYS point your middle finger **opposite** to the electron arrow (whereas for **protons or alpha `α²⁺` particles**, middle finger points along their arrow)!',
            },
            {
              type: 'notebook-mistake',
              studentName: 'Kavya',
              title: 'Placing the Fuse or Switch on the Neutral Wire',
              wrongWork: 'Electric fuse works in series anywhere, so connecting fuse on Neutral wire is equally safe.',
              teacherFix: 'Fuse and Switch MUST be connected ONLY on the LIVE (220 V) wire!',
              whyWrong:
                'If the fuse melts (or switch is OFF) on the Neutral wire, the appliance remains directly connected to the **`220 V` Live wire** — anyone touching an exposed internal fault still gets a lethal shock!',
            },
          ],
        },
        {
          id: 'phy12-domestic-qa',
          title: '4. CBSE Board Exam Q&As (Fleming’s Rule & Domestic Safety)',
          blocks: [
            {
              type: 'qa',
              marks: 3,
              tag: 'NCERT',
              question: 'An alpha particle (positively charged) projected towards west is deflected towards north by a magnetic field. Find the direction of the magnetic field.',
              answer:
                '• Since the alpha particle (`α²⁺`) is **positively charged**, conventional current **`I` is towards West** (same as motion).\n• Deflection / Force **`F` is towards North**.\n• Applying **Fleming’s Left-Hand Rule**: point middle finger (`I`) towards **West** and thumb (`F`) towards **North** — your forefinger (`B`) points **Vertically Upwards**!',
              markingTip: 'Verify by hand in exam! West (`−x`), Up (`+y`), North (`+z`? Wait on horizontal map: East `+x`, North `+y`, Up `+z` out of paper): `I = (−1,0,0)`, `B = (0,0,+1)` ⇒ `I × B = (−1,0,0) × (0,0,1) = (0,+1,0) = North` ✓!',
            },
            {
              type: 'qa',
              marks: 3,
              tag: 'CBSE Board Pattern',
              question: 'What is the function of an earth wire? Why is it necessary to earth metallic appliances?',
              answer:
                '• The **earth wire** (green insulation) connects the metallic body of an appliance (like an electric iron, toaster, or refrigerator) directly to a metal plate buried deep in the earth.\n• It provides a **low-resistance conducting path** for current. If any insulation breaks and the live wire touches the metallic casing, the casing remains at **earth potential (`0 V`)**, preventing a severe electric shock to the user, and a large current flows straight to earth melting the fuse immediately.',
              markingTip: 'Must include both magic phrases: **"low-resistance conducting path"** and **"keeps metallic body at earth potential (prevents electric shock)"**.',
            },
          ],
        },
      ],
    },
  ],
};
