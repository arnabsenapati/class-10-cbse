import { useMemo, useState } from 'react';
import {
  CheckCircle2,
  Compass,
  Layers,
  MapPin,
  RotateCcw,
  Search,
  Target,
  XCircle,
} from 'lucide-react';

type PinCategory =
  | 'history'
  | 'dams'
  | 'minerals-oil'
  | 'power'
  | 'industries'
  | 'lifelines';

type AtlasCategoryFilter = PinCategory | 'soils-crops' | 'all-pins';

interface MapPinItem {
  id: string;
  name: string;
  category: PinCategory;
  subGroup: string;
  examSection: 'Q37a History (2M)' | 'Q37b Geography (3M)';
  taskType: 'Locate & Label' | 'Identification Only';
  stateOrRegion: string;
  lat: number;
  lon: number;
  dx?: number;
  dy?: number;
  boardClue: string;
  plottingAnchor: string;
}

interface MapZoneItem {
  id: string;
  name: string;
  group: 'Ch 1 Soil Types' | 'Ch 4 Agricultural Belts';
  statesCovered: string;
  boardClue: string;
  keyTrap: string;
  color: string;
  /** Polygons defined in real (lat, lon) coordinates so they stay locked to India's outline */
  polygons: [number, number][][];
  labelLatLon: [number, number];
}

interface DrillQuestion {
  id: string;
  examPart: 'Q37a History (2M)' | 'Q37b Geography (3M)';
  prompt: string;
  targetPinId: string;
  candidatePinIds: string[]; // 6 total (target + 5 realistic nearby/theme decoys)
  whyDecoysWrong: string;
}

interface CrowdCluster {
  id: string;
  title: string;
  subtitle: string;
  memoryRule: string;
  pinIds: string[];
  focusBox: { x: number; y: number; w: number; h: number };
}

const SVG_W = 600;
const SVG_H = 680;
const LON_MIN = 67.5;
const LON_MAX = 97.8;
const LAT_MIN = 6.5;
const LAT_MAX = 37.5;
const PAD_L = 42;
const PAD_R = 42;
const PAD_T = 34;
const PAD_B = 34;

function projectLatLon(lat: number, lon: number, dx = 0, dy = 0): { x: number; y: number } {
  const x =
    PAD_L + ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * (SVG_W - PAD_L - PAD_R) + dx;
  const y =
    SVG_H - PAD_B - ((lat - LAT_MIN) / (LAT_MAX - LAT_MIN)) * (SVG_H - PAD_T - PAD_B) + dy;
  return { x: Number(x.toFixed(1)), y: Number(y.toFixed(1)) };
}

function latLonPath(coords: [number, number][], close = true): string {
  const pts = coords.map(([lat, lon]) => projectLatLon(lat, lon));
  return (
    pts.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') +
    (close ? ' Z' : '')
  );
}

/**
 * India mainland outline vertices in real geographic [lat, lon] degrees
 * ensuring rivers, states, gulfs & coast ports fall strictly on authentic terrain.
 */
const INDIA_MAINLAND_COORDS: [number, number][] = [
  // Ladakh & Jammu–Kashmir (North-West → Karakoram → Aksai Chin)
  [37.05, 74.6],
  [36.5, 76.2],
  [35.6, 77.9],
  [34.9, 78.9],
  [33.8, 78.9],
  [32.6, 78.6],
  // Himachal & Uttarakhand Himalayan frontier
  [31.4, 78.9],
  [30.2, 80.9],
  // Nepal western border dip south-eastward
  [28.8, 80.1],
  [27.9, 81.9],
  [27.4, 83.4],
  [26.5, 85.4],
  [26.3, 87.9],
  // Sikkim notch rising north
  [27.1, 88.1],
  [27.9, 88.5],
  [27.2, 88.9],
  // Bhutan northern gap (West Bengal Duars → Assam)
  [26.8, 89.8],
  [26.8, 91.9],
  // Arunachal Pradesh NE frontier
  [27.6, 92.2],
  [28.7, 94.2],
  [29.2, 96.4],
  [28.2, 97.3],
  [27.2, 96.1],
  // Nagaland, Manipur & Mizoram eastern salient
  [26.1, 95.2],
  [24.9, 94.6],
  [23.8, 93.4],
  [22.1, 93.1],
  [22.4, 92.5],
  // Tripura protruding around Bangladesh border
  [23.2, 91.3],
  [24.1, 91.6],
  // Assam / Meghalaya southern boundary north of Bangladesh plain
  [25.1, 92.2],
  [25.2, 90.0],
  [25.9, 89.8],
  [26.3, 88.4],
  // West Bengal western corridor down to Hooghly / Sundarbans
  [25.2, 87.8],
  [24.3, 88.8],
  [22.9, 88.9],
  [21.6, 88.3],
  // East Coast (WB → Odisha → AP → TN down to Kanyakumari)
  [21.5, 87.0],
  [20.2, 86.7],
  [19.7, 85.6],
  [18.8, 84.5],
  [17.7, 83.3],
  [16.8, 82.3],
  [15.8, 80.9],
  [14.3, 80.1],
  [13.1, 80.3],
  [11.5, 79.8],
  [10.3, 79.9],
  [9.25, 79.3],
  [8.75, 78.2],
  [8.08, 77.55],
  // West Coast (Kerala → Karnataka → Goa → Maharashtra)
  [8.5, 76.9],
  [9.95, 76.22],
  [11.2, 75.75],
  [12.9, 74.82],
  [14.8, 74.12],
  [15.42, 73.78],
  [17.0, 73.25],
  [19.05, 72.83],
  [20.3, 72.85],
  // Gujarat: Gulf of Khambhat → Kathiawar/Saurashtra → Gulf of Kuchchh → Rann
  [21.6, 72.55],
  [22.25, 72.4],
  [20.85, 71.0],
  [20.9, 70.35],
  [22.2, 68.95],
  [22.9, 70.6],
  [23.02, 70.1],
  [22.8, 68.9],
  [23.8, 68.55],
  // Rajasthan–Gujarat & Thar desert border northward to Punjab & Kashmir
  [24.5, 71.1],
  [26.2, 70.2],
  [27.8, 70.5],
  [29.8, 73.6],
  [30.9, 74.5],
  [31.9, 74.6],
  [32.7, 74.6],
  [34.1, 73.8],
  [34.6, 74.8],
  [36.2, 73.7],
];

/** Faint internal river guides for dam & valley verification */
const RIVER_PATHS: { name: string; coords: [number, number][] }[] = [
  { name: 'Chenab', coords: [[32.7, 76.8], [33.14, 74.82], [32.7, 74.2]] },
  { name: 'Sutlej', coords: [[31.8, 78.6], [31.41, 76.43], [30.9, 74.6]] },
  { name: 'Ganga–Bhagirathi', coords: [[30.9, 78.9], [30.38, 78.48], [28.2, 78.38], [26.45, 80.33], [25.4, 83.0], [25.6, 86.2], [24.6, 87.9], [22.0, 88.2]] },
  { name: 'Chambal', coords: [[22.6, 75.7], [24.92, 75.58], [26.5, 78.2]] },
  { name: 'Narmada', coords: [[22.7, 81.7], [22.8, 77.6], [21.83, 73.75], [21.65, 72.65]] },
  { name: 'Mahanadi', coords: [[20.5, 81.9], [21.57, 83.87], [20.45, 85.9], [20.26, 86.67]] },
  { name: 'Krishna–Tungabhadra', coords: [[17.9, 73.7], [16.58, 79.31], [15.9, 80.85]] },
  { name: 'Tungabhadra', coords: [[13.9, 75.6], [15.26, 76.33], [15.95, 77.9]] },
  { name: 'Brahmaputra', coords: [[28.9, 95.3], [27.3, 95.1], [26.1, 91.7], [25.9, 89.9]] },
];

const CATEGORY_META: Record<
  PinCategory,
  { label: string; shortLabel: string; color: string; badgeBg: string; shape: 'circle' | 'diamond' | 'triangle' | 'square' }
> = {
  history: {
    label: 'Ch 2 History (INC + Centres)',
    shortLabel: 'History (9)',
    color: '#e11d48',
    badgeBg: 'bg-rose-100 text-rose-900 dark:bg-rose-950/60 dark:text-rose-200',
    shape: 'circle',
  },
  dams: {
    label: 'Ch 3 Water: Major Dams',
    shortLabel: 'Dams (8)',
    color: '#0284c7',
    badgeBg: 'bg-sky-100 text-sky-900 dark:bg-sky-950/60 dark:text-sky-200',
    shape: 'triangle',
  },
  'minerals-oil': {
    label: 'Ch 5A Iron, Coal & Oil Fields',
    shortLabel: 'Minerals & Oil (15)',
    color: '#d97706',
    badgeBg: 'bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-200',
    shape: 'diamond',
  },
  power: {
    label: 'Ch 5B Thermal & Nuclear Plants',
    shortLabel: 'Power Plants (7)',
    color: '#7c3aed',
    badgeBg: 'bg-violet-100 text-violet-900 dark:bg-violet-950/60 dark:text-violet-200',
    shape: 'square',
  },
  industries: {
    label: 'Ch 6 Cotton, Steel & Tech Parks',
    shortLabel: 'Industries (19)',
    color: '#059669',
    badgeBg: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200',
    shape: 'square',
  },
  lifelines: {
    label: 'Ch 7 Sea Ports & Intl Airports',
    shortLabel: 'Ports & Airports (16)',
    color: '#0d9488',
    badgeBg: 'bg-teal-100 text-teal-900 dark:bg-teal-950/60 dark:text-teal-200',
    shape: 'circle',
  },
};

const MAP_PINS: MapPinItem[] = [
  // =====================================
  // 1. HISTORY CH 2 (9 PINS)
  // =====================================
  {
    id: 'hist-calcutta',
    name: 'Calcutta (Sep 1920 INC Session)',
    category: 'history',
    subGroup: 'INC Session',
    examSection: 'Q37a History (2M)',
    taskType: 'Identification Only',
    stateOrRegion: 'West Bengal',
    lat: 22.57,
    lon: 88.36,
    dx: -5,
    dy: -4,
    boardClue: 'Place where the Special Session of Indian National Congress was held in September 1920 (convinced leaders for Non-Cooperation–Khilafat).',
    plottingAnchor: 'Head of Bay of Bengal Coast along River Hooghly (West Bengal).',
  },
  {
    id: 'hist-nagpur',
    name: 'Nagpur (Dec 1920 INC Session)',
    category: 'history',
    subGroup: 'INC Session',
    examSection: 'Q37a History (2M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Maharashtra (East / Vidarbha)',
    lat: 21.15,
    lon: 79.09,
    boardClue: 'Congress Session in December 1920 where the Non-Cooperation Programme was formally adopted.',
    plottingAnchor: 'Zero-Mile Centre of India in eastern Maharashtra just north of Telangana.',
  },
  {
    id: 'hist-madras',
    name: 'Madras (1927 INC Session)',
    category: 'history',
    subGroup: 'INC Session',
    examSection: 'Q37a History (2M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Tamil Nadu Coast',
    lat: 13.08,
    lon: 80.27,
    dx: -6,
    dy: -5,
    boardClue: '1927 INC Session calling for boycott of the Simon Commission and passing independence resolution.',
    plottingAnchor: 'Northern Tamil Nadu coast near Andhra border (now Chennai).',
  },
  {
    id: 'hist-champaran',
    name: 'Champaran (Indigo Satyagraha 1917)',
    category: 'history',
    subGroup: 'National Movement Centre',
    examSection: 'Q37a History (2M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Bihar (North-West)',
    lat: 26.65,
    lon: 84.9,
    boardClue: 'Movement of Indigo Planters led by Mahatma Gandhi in 1917 against the oppressive Tinkathia plantation system.',
    plottingAnchor: 'North-West corner of Bihar hugging the UP–Nepal border.',
  },
  {
    id: 'hist-kheda',
    name: 'Kheda (Peasant Satyagraha 1917)',
    category: 'history',
    subGroup: 'National Movement Centre',
    examSection: 'Q37a History (2M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Gujarat (Central)',
    lat: 22.75,
    lon: 72.68,
    dx: 5,
    dy: 4,
    boardClue: 'Peasant Satyagraha in Gujarat demanding revenue relaxation after crop failure & plague epidemic (1917).',
    plottingAnchor: 'Just SOUTH-EAST of Ahmedabad in central Gujarat north of Gulf of Khambhat.',
  },
  {
    id: 'hist-ahmedabad',
    name: 'Ahmedabad (Cotton Mill Satyagraha 1918)',
    category: 'history',
    subGroup: 'National Movement Centre',
    examSection: 'Q37a History (2M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Gujarat (Central)',
    lat: 23.02,
    lon: 72.57,
    dx: -5,
    dy: -3,
    boardClue: 'Place where Gandhiji organised the 1918 Satyagraha amongst cotton mill workers for wage hike.',
    plottingAnchor: 'North of Kheda right below the Tropic of Cancer curve in Gujarat.',
  },
  {
    id: 'hist-amritsar',
    name: 'Amritsar (Jallianwala Bagh 1919)',
    category: 'history',
    subGroup: 'National Movement Centre',
    examSection: 'Q37a History (2M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Punjab (North-West Border)',
    lat: 31.63,
    lon: 74.87,
    dx: -4,
    dy: -4,
    boardClue: 'Site of the tragic Jallianwala Bagh incident (13 April 1919) ordered by General Dyer.',
    plottingAnchor: 'North-West border tip of Punjab right below J&K boundary.',
  },
  {
    id: 'hist-chauri-chaura',
    name: 'Chauri Chaura (Calling off NCM, Feb 1922)',
    category: 'history',
    subGroup: 'National Movement Centre',
    examSection: 'Q37a History (2M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Uttar Pradesh (Eastern UP)',
    lat: 26.65,
    lon: 83.59,
    boardClue: 'Place in Gorakhpur where violent clash at a police station forced Gandhiji to withdraw the Non-Cooperation Movement.',
    plottingAnchor: 'Eastern UP just west of the Bihar (Champaran) border.',
  },
  {
    id: 'hist-dandi',
    name: 'Dandi (Civil Disobedience / Salt March 1930)',
    category: 'history',
    subGroup: 'National Movement Centre',
    examSection: 'Q37a History (2M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Gujarat (South Coast)',
    lat: 20.89,
    lon: 72.8,
    dx: -4,
    dy: 4,
    boardClue: 'Coastal village where Gandhiji ceremonially broke the Salt Law on 6 April 1930 starting Civil Disobedience.',
    plottingAnchor: 'South Gujarat coast slightly south of Surat (Navsari coast).',
  },

  // =====================================
  // 2. GEOGRAPHY CH 3 DAMS (8 PINS)
  // =====================================
  {
    id: 'dam-salal',
    name: 'Salal Dam',
    category: 'dams',
    subGroup: 'River Chenab',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Jammu & Kashmir (Reasi)',
    lat: 33.14,
    lon: 74.82,
    boardClue: 'Hydroelectric dam project built across River Chenab in Jammu & Kashmir.',
    plottingAnchor: 'North of Punjab/Pathankot in southern Jammu & Kashmir.',
  },
  {
    id: 'dam-bhakra-nangal',
    name: 'Bhakra Nangal Dam',
    category: 'dams',
    subGroup: 'River Sutlej (Satluj)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Himachal Pradesh / Punjab Border',
    lat: 31.41,
    lon: 76.43,
    boardClue: 'Monumental multi-purpose dam on River Sutlej serving Punjab, Haryana & Rajasthan.',
    plottingAnchor: 'On the eastern Himachal Pradesh–Punjab boundary along River Sutlej.',
  },
  {
    id: 'dam-tehri',
    name: 'Tehri Dam',
    category: 'dams',
    subGroup: 'River Bhagirathi',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Uttarakhand',
    lat: 30.38,
    lon: 78.48,
    boardClue: 'India’s tallest rock-fill dam on River Bhagirathi (sparked Tehri Dam Andolan).',
    plottingAnchor: 'Western–central Uttarakhand north-east of Dehradun/Rishikesh.',
  },
  {
    id: 'dam-rana-pratap-sagar',
    name: 'Rana Pratap Sagar Dam',
    category: 'dams',
    subGroup: 'River Chambal',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Rajasthan (South-East)',
    lat: 24.92,
    lon: 75.58,
    boardClue: 'Chambal Valley dam project located near Kota/Rawatbhata in south-eastern Rajasthan.',
    plottingAnchor: 'SE corner of Rajasthan near the western bulge of Madhya Pradesh.',
  },
  {
    id: 'dam-sardar-sarovar',
    name: 'Sardar Sarovar Dam',
    category: 'dams',
    subGroup: 'River Narmada',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Gujarat (Eastern Narmada)',
    lat: 21.83,
    lon: 73.75,
    boardClue: 'Largest Narmada Valley project serving Gujarat, MP, MH & Rajasthan (Narmada Bachao Andolan focus).',
    plottingAnchor: 'Eastern Gujarat near the Gujarat–Maharashtra–MP tri-junction.',
  },
  {
    id: 'dam-hirakud',
    name: 'Hirakud Dam',
    category: 'dams',
    subGroup: 'River Mahanadi',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Odisha (Sambalpur)',
    lat: 21.57,
    lon: 83.87,
    boardClue: 'Longest earthen dam across the Mahanadi river basin integrating flood control & irrigation.',
    plottingAnchor: 'North-western Odisha just east of Chhattisgarh along Mahanadi.',
  },
  {
    id: 'dam-nagarjuna-sagar',
    name: 'Nagarjuna Sagar Dam',
    category: 'dams',
    subGroup: 'River Krishna',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Telangana / Andhra Pradesh Border',
    lat: 16.58,
    lon: 79.31,
    boardClue: 'Major masonry dam straddling Telangana and Andhra Pradesh across River Krishna.',
    plottingAnchor: 'Directly on the Telangana–Andhra Pradesh boundary south-east of Hyderabad.',
  },
  {
    id: 'dam-tungabhadra',
    name: 'Tungabhadra Dam',
    category: 'dams',
    subGroup: 'River Tungabhadra',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Karnataka (Hosapete / Ballari)',
    lat: 15.26,
    lon: 76.33,
    boardClue: 'Joint Karnataka–Andhra dam on the Tungabhadra tributary of the Krishna River.',
    plottingAnchor: 'Central-eastern Karnataka right near Ballari & Hampi.',
  },

  // =====================================
  // 3. GEOGRAPHY CH 5A MINERALS & OIL (15 PINS)
  // =====================================
  {
    id: 'ore-mayurbhanj',
    name: 'Mayurbhanj Iron Ore Belt',
    category: 'minerals-oil',
    subGroup: 'Iron Ore Mine',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Odisha (Badampahar)',
    lat: 21.93,
    lon: 86.72,
    boardClue: 'Part of the high-grade Odisha–Jharkhand Hematite belt (Badampahar mines).',
    plottingAnchor: 'Extreme north-eastern Odisha bordering Jharkhand & West Bengal.',
  },
  {
    id: 'ore-durg',
    name: 'Durg Iron Ore Mine',
    category: 'minerals-oil',
    subGroup: 'Iron Ore Mine',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Chhattisgarh (Dalli-Rajhara)',
    lat: 21.19,
    lon: 81.28,
    dx: -5,
    dy: -3,
    boardClue: 'Durg–Bastar–Chandrapur belt supply feeding nearby Bhilai Steel Plant.',
    plottingAnchor: 'Central Chhattisgarh immediately west of Bhilai.',
  },
  {
    id: 'ore-bailadila',
    name: 'Bailadila Iron Ore Mine',
    category: 'minerals-oil',
    subGroup: 'Iron Ore Mine',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Chhattisgarh (Bastar, South)',
    lat: 18.71,
    lon: 81.22,
    boardClue: 'Super high-grade Hematite hills ("hump of an ox") exported to Japan/S. Korea via Vishakhapatnam port.',
    plottingAnchor: 'Southern tip of Chhattisgarh pointing toward Odisha & Telangana.',
  },
  {
    id: 'ore-bellary',
    name: 'Bellary (Ballari) Iron Ore Mine',
    category: 'minerals-oil',
    subGroup: 'Iron Ore Mine',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Karnataka (East)',
    lat: 15.14,
    lon: 76.92,
    dx: 6,
    dy: 3,
    boardClue: 'Ballari–Chitradurga–Chikkamagaluru–Tumakuru belt feeding Vijayanagar steel plant.',
    plottingAnchor: 'Eastern Karnataka near Andhra Pradesh border (adjacent to Tungabhadra).',
  },
  {
    id: 'ore-kudremukh',
    name: 'Kudremukh Iron Ore Mine',
    category: 'minerals-oil',
    subGroup: 'Iron Ore Mine',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Karnataka (Western Ghats)',
    lat: 13.22,
    lon: 75.25,
    boardClue: '100% export unit; ore moves as slurry through pipeline to port near Mangaluru.',
    plottingAnchor: 'South-western Karnataka in the Western Ghats inland from New Mangalore port.',
  },
  {
    id: 'coal-raniganj',
    name: 'Raniganj Coalfield',
    category: 'minerals-oil',
    subGroup: 'Coal Mine',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Identification Only',
    stateOrRegion: 'West Bengal (Damodar Valley)',
    lat: 23.62,
    lon: 87.12,
    dx: -5,
    dy: -4,
    boardClue: 'Oldest Gondwana coalfield of India located in the Damodar valley.',
    plottingAnchor: 'Western West Bengal right beside Durgapur north of Tropic of Cancer.',
  },
  {
    id: 'coal-bokaro',
    name: 'Bokaro Coalfield',
    category: 'minerals-oil',
    subGroup: 'Coal Mine',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Jharkhand (Damodar Valley)',
    lat: 23.67,
    lon: 86.15,
    dx: -5,
    dy: -4,
    boardClue: 'Prime Gondwana coking-coal hub in Jharkhand’s Damodar basin.',
    plottingAnchor: 'Eastern Jharkhand slightly west of the West Bengal border.',
  },
  {
    id: 'coal-talcher',
    name: 'Talcher Coalfield',
    category: 'minerals-oil',
    subGroup: 'Coal Mine',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Odisha (Mahanadi / Brahmani)',
    lat: 20.95,
    lon: 85.22,
    boardClue: 'Major Odisha coalfield located in the Mahanadi–Brahmani valley belt.',
    plottingAnchor: 'Central Odisha north-west of Cuttack/Paradwip.',
  },
  {
    id: 'coal-neyveli',
    name: 'Neyveli Lignite Coalfield',
    category: 'minerals-oil',
    subGroup: 'Coal Mine (Lignite)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Tamil Nadu (East)',
    lat: 11.61,
    lon: 79.49,
    boardClue: 'Principal LIGNITE (low-grade brown coal) reserve in Tamil Nadu used for electricity generation.',
    plottingAnchor: 'Coastal/east-central Tamil Nadu inland from Cuddalore & south of Kalpakkam.',
  },
  {
    id: 'oil-digboi',
    name: 'Digboi Oil Field',
    category: 'minerals-oil',
    subGroup: 'Oil Field',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Assam (Upper Assam)',
    lat: 27.39,
    lon: 95.63,
    boardClue: 'Oldest oil-producing region of India located in upper Assam (easternmost Assam corner).',
    plottingAnchor: 'Extreme north-eastern corner of Assam bordering Arunachal.',
  },
  {
    id: 'oil-naharkatiya',
    name: 'Naharkatiya Oil Field',
    category: 'minerals-oil',
    subGroup: 'Oil Field',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Assam (Upper Assam)',
    lat: 27.28,
    lon: 95.33,
    dx: -5,
    dy: 5,
    boardClue: 'Major onshore Assam oilfield lying south-west of Digboi near Namrup.',
    plottingAnchor: 'Upper Assam just south-west of Digboi along the Brahmaputra basin.',
  },
  {
    id: 'oil-mumbai-high',
    name: 'Mumbai High Offshore Field',
    category: 'minerals-oil',
    subGroup: 'Offshore Oil Field',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Offshore Arabian Sea (~160 km WNW of Mumbai)',
    lat: 19.4,
    lon: 71.3,
    boardClue: 'India’s largest offshore petroleum & gas field in the Arabian Sea.',
    plottingAnchor: 'OUT IN THE ARABIAN SEA well west of the Mumbai coast (further offshore than Bassien).',
  },
  {
    id: 'oil-bassien',
    name: 'Bassien (Vasai) Offshore Field',
    category: 'minerals-oil',
    subGroup: 'Offshore Oil & Gas Field',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Offshore Arabian Sea (between Mumbai High & Coast)',
    lat: 19.5,
    lon: 72.1,
    boardClue: 'Offshore oil/gas field in Arabian Sea feeding the HVJ Natural Gas Pipeline.',
    plottingAnchor: 'Offshore in Arabian Sea closer to coast than Mumbai High, slightly SW of Tarapur.',
  },
  {
    id: 'oil-kalol',
    name: 'Kalol Oil Field',
    category: 'minerals-oil',
    subGroup: 'Oil Field',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Gujarat (North of Ahmedabad)',
    lat: 23.25,
    lon: 72.49,
    dx: -6,
    dy: -5,
    boardClue: 'Major onshore Gujarat oil field located near Gandhinagar/Ahmedabad.',
    plottingAnchor: 'Directly north of Ahmedabad near the Tropic of Cancer in central Gujarat.',
  },
  {
    id: 'oil-ankaleshwar',
    name: 'Ankaleshwar Oil Field',
    category: 'minerals-oil',
    subGroup: 'Oil Field',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Identification Only',
    stateOrRegion: 'Gujarat (South Gujarat / Narmada estuary)',
    lat: 21.63,
    lon: 73.02,
    dx: -5,
    dy: -3,
    boardClue: 'Most important onshore oilfield of Gujarat situated near Bharuch/Narmada river.',
    plottingAnchor: 'South Gujarat north of Surat near the Gulf of Khambhat coast.',
  },

  // =====================================
  // 4. GEOGRAPHY CH 5B POWER PLANTS (7 PINS)
  // =====================================
  {
    id: 'pwr-namrup',
    name: 'Namrup Thermal Plant',
    category: 'power',
    subGroup: 'Thermal Power Plant',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Assam (Upper Assam)',
    lat: 27.18,
    lon: 95.35,
    dx: 4,
    dy: 7,
    boardClue: 'Major gas-based Thermal Power Plant in Upper Assam near Naharkatiya.',
    plottingAnchor: 'Upper Assam south of Digboi & close to Nagaland/Arunachal corner.',
  },
  {
    id: 'pwr-singrauli',
    name: 'Singrauli Thermal Plant',
    category: 'power',
    subGroup: 'Thermal Power Plant',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Madhya Pradesh (Eastern Border)',
    lat: 24.2,
    lon: 82.67,
    boardClue: 'Energy-hub coal Thermal Power Plant on the eastern MP–UP Sonbhadra border.',
    plottingAnchor: 'Far eastern tip of Madhya Pradesh meeting southern UP & northern Chhattisgarh.',
  },
  {
    id: 'pwr-ramagundam',
    name: 'Ramagundam Thermal Plant',
    category: 'power',
    subGroup: 'Thermal Power Plant',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Telangana (North-East)',
    lat: 18.76,
    lon: 79.47,
    boardClue: 'Pit-head coal Thermal Power Plant on the Godavari belt in Telangana.',
    plottingAnchor: 'North-eastern Telangana north-east of Hyderabad along River Godavari.',
  },
  {
    id: 'nuc-narora',
    name: 'Narora Nuclear Plant',
    category: 'power',
    subGroup: 'Nuclear Power Plant',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Uttar Pradesh (Western UP)',
    lat: 28.2,
    lon: 78.38,
    boardClue: 'Nuclear Atomic Power Station located in western Uttar Pradesh on the Ganga bank.',
    plottingAnchor: 'Western Uttar Pradesh east-south-east of Delhi/Noida.',
  },
  {
    id: 'nuc-kakrapara',
    name: 'Kakrapara Nuclear Plant',
    category: 'power',
    subGroup: 'Nuclear Power Plant',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Gujarat (South / Tapi River)',
    lat: 21.24,
    lon: 73.35,
    boardClue: 'Nuclear power station in South Gujarat east of Surat on the Tapi river.',
    plottingAnchor: 'South-eastern Gujarat inland east of Surat & Ankaleshwar.',
  },
  {
    id: 'nuc-tarapur',
    name: 'Tarapur Nuclear Plant',
    category: 'power',
    subGroup: 'Nuclear Power Plant',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Maharashtra (North Coast)',
    lat: 19.83,
    lon: 72.66,
    boardClue: 'India’s first commercial Nuclear Power Station situated on the Konkan coast north of Mumbai.',
    plottingAnchor: 'Coastal Maharashtra north of Mumbai just below Gujarat’s southern border.',
  },
  {
    id: 'nuc-kalpakkam',
    name: 'Kalpakkam Nuclear Plant',
    category: 'power',
    subGroup: 'Nuclear Power Plant',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Tamil Nadu Coast (South of Chennai)',
    lat: 12.56,
    lon: 80.17,
    boardClue: 'Madras Atomic Power Station (MAPS) located on the Coromandel coast just south of Chennai.',
    plottingAnchor: 'Tamil Nadu East Coast slightly south of Chennai & north of Neyveli.',
  },

  // =====================================
  // 5. GEOGRAPHY CH 6 INDUSTRIES (19 PINS)
  // =====================================
  {
    id: 'cot-mumbai',
    name: 'Mumbai Cotton Textile Centre',
    category: 'industries',
    subGroup: 'Cotton Textile (5)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Maharashtra',
    lat: 19.08,
    lon: 72.88,
    dx: -6,
    dy: -4,
    boardClue: 'Site of India’s FIRST successful modern Cotton Textile Mill (1854) in humid black-soil belt.',
    plottingAnchor: 'Konkan coast in western Maharashtra.',
  },
  {
    id: 'cot-indore',
    name: 'Indore Cotton Textile Centre',
    category: 'industries',
    subGroup: 'Cotton Textile (5)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Madhya Pradesh (West)',
    lat: 22.72,
    lon: 75.86,
    boardClue: 'Major Malwa plateau black-soil Cotton Textile industrial centre in MP.',
    plottingAnchor: 'Western Madhya Pradesh just below the Tropic of Cancer.',
  },
  {
    id: 'cot-surat',
    name: 'Surat Cotton Textile Centre',
    category: 'industries',
    subGroup: 'Cotton Textile (5)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Gujarat (South Coast)',
    lat: 21.17,
    lon: 72.83,
    dx: -4,
    dy: -2,
    boardClue: 'Leading Gujarat cotton & synthetic textile manufacturing hub near the Tapi mouth.',
    plottingAnchor: 'South Gujarat coast between Ankaleshwar (north) and Dandi (south).',
  },
  {
    id: 'cot-kanpur',
    name: 'Kanpur Cotton Textile Centre',
    category: 'industries',
    subGroup: 'Cotton Textile (5)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Uttar Pradesh (Central)',
    lat: 26.45,
    lon: 80.33,
    boardClue: 'Traditional northern Cotton Textile centre in the Ganga plain (UP).',
    plottingAnchor: 'Central Uttar Pradesh on the Ganga south-west of Lucknow.',
  },
  {
    id: 'cot-coimbatore',
    name: 'Coimbatore Cotton Textile Centre',
    category: 'industries',
    subGroup: 'Cotton Textile (5)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Tamil Nadu (West)',
    lat: 11.02,
    lon: 76.96,
    boardClue: 'Southern Cotton Textile spinning & weaving hub ("Manchester of South India").',
    plottingAnchor: 'Western Tamil Nadu near the Kerala Palakkad gap border.',
  },
  {
    id: 'stl-durgapur',
    name: 'Durgapur Iron & Steel Plant',
    category: 'industries',
    subGroup: 'Iron & Steel Plant (6)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'West Bengal',
    lat: 23.52,
    lon: 87.31,
    dx: 6,
    dy: 4,
    boardClue: 'Integrated public-sector Iron & Steel Plant in West Bengal’s Damodar coal belt.',
    plottingAnchor: 'Western West Bengal right next to Raniganj coalfield.',
  },
  {
    id: 'stl-bokaro',
    name: 'Bokaro Iron & Steel Plant',
    category: 'industries',
    subGroup: 'Iron & Steel Plant (6)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Jharkhand',
    lat: 23.67,
    lon: 86.15,
    dx: 5,
    dy: 4,
    boardClue: 'Chhotanagpur Iron & Steel Plant located in eastern Jharkhand on Damodar coking coal.',
    plottingAnchor: 'Eastern Jharkhand slightly west of West Bengal boundary.',
  },
  {
    id: 'stl-jamshedpur',
    name: 'Jamshedpur (TISCO) Steel Plant',
    category: 'industries',
    subGroup: 'Iron & Steel Plant (6)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Jharkhand (South-East)',
    lat: 22.8,
    lon: 86.2,
    boardClue: 'Historic Subarnarekha confluence Iron & Steel Plant in south-eastern Jharkhand.',
    plottingAnchor: 'South-east Jharkhand right below the Tropic of Cancer above Odisha.',
  },
  {
    id: 'stl-bhilai',
    name: 'Bhilai Iron & Steel Plant',
    category: 'industries',
    subGroup: 'Iron & Steel Plant (6)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Chhattisgarh',
    lat: 21.21,
    lon: 81.38,
    dx: 5,
    dy: 4,
    boardClue: 'Major Chhattisgarh Iron & Steel Plant fed by Durg/Dalli-Rajhara iron ore.',
    plottingAnchor: 'Central Chhattisgarh just east of Durg near Raipur.',
  },
  {
    id: 'stl-vijayanagar',
    name: 'Vijayanagar Iron & Steel Plant',
    category: 'industries',
    subGroup: 'Iron & Steel Plant (6)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Karnataka (Ballari / Toranagallu)',
    lat: 15.19,
    lon: 76.67,
    dx: -5,
    dy: -3,
    boardClue: 'Integrated Iron & Steel Plant in Karnataka utilising Ballari–Hospet iron ore.',
    plottingAnchor: 'Central-eastern Karnataka right beside Tungabhadra Dam & Ballari.',
  },
  {
    id: 'stl-salem',
    name: 'Salem Iron & Steel Plant',
    category: 'industries',
    subGroup: 'Iron & Steel Plant (6)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Tamil Nadu (Central-North)',
    lat: 11.66,
    lon: 78.15,
    boardClue: 'Stainless/speciality Steel Plant in inland Tamil Nadu.',
    plottingAnchor: 'Interior northern-central Tamil Nadu between Coimbatore (W) & Neyveli (E).',
  },
  {
    id: 'stp-noida',
    name: 'Noida Software Technology Park',
    category: 'industries',
    subGroup: 'Software Technology Park (8)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Uttar Pradesh (Delhi NCR Border)',
    lat: 28.54,
    lon: 77.39,
    dx: 5,
    dy: 3,
    boardClue: 'Northern Software Technology Park located in UP directly east of New Delhi.',
    plottingAnchor: 'Extreme western UP corner touching eastern border of Delhi NCR.',
  },
  {
    id: 'stp-gandhinagar',
    name: 'Gandhinagar Software Technology Park',
    category: 'industries',
    subGroup: 'Software Technology Park (8)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Gujarat (State Capital)',
    lat: 23.22,
    lon: 72.64,
    dx: 5,
    dy: -3,
    boardClue: 'Western Software Technology Park at Gujarat’s capital just north of Ahmedabad.',
    plottingAnchor: 'Immediately north-east of Ahmedabad near the Tropic of Cancer.',
  },
  {
    id: 'stp-mumbai',
    name: 'Mumbai Software Technology Park',
    category: 'industries',
    subGroup: 'Software Technology Park (8)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Maharashtra',
    lat: 19.08,
    lon: 72.88,
    dx: 6,
    dy: -4,
    boardClue: 'Major western Software Technology & IT export centre on Maharashtra coast.',
    plottingAnchor: 'Maharashtra Konkan coast.',
  },
  {
    id: 'stp-pune',
    name: 'Pune Software Technology Park',
    category: 'industries',
    subGroup: 'Software Technology Park (8)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Maharashtra (Western Deccan)',
    lat: 18.52,
    lon: 73.86,
    boardClue: 'IT & engineering Software Technology Park situated in western Maharashtra south-east of Mumbai.',
    plottingAnchor: 'Slightly inland & south-east of Mumbai across the Western Ghats.',
  },
  {
    id: 'stp-hyderabad',
    name: 'Hyderabad Software Technology Park',
    category: 'industries',
    subGroup: 'Software Technology Park (8)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Telangana',
    lat: 17.39,
    lon: 78.49,
    dx: -5,
    dy: -3,
    boardClue: 'Deccan Software Technology Park in central Telangana.',
    plottingAnchor: 'Central Telangana midway between Nagpur (N) and Bengaluru (S).',
  },
  {
    id: 'stp-bengaluru',
    name: 'Bengaluru Software Technology Park',
    category: 'industries',
    subGroup: 'Software Technology Park (8)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Karnataka ("Electronic Capital")',
    lat: 12.97,
    lon: 77.59,
    boardClue: 'India’s Electronic Capital and flagship Software Technology Park.',
    plottingAnchor: 'South-eastern Karnataka slightly west of the Tamil Nadu boundary.',
  },
  {
    id: 'stp-chennai',
    name: 'Chennai Software Technology Park',
    category: 'industries',
    subGroup: 'Software Technology Park (8)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Tamil Nadu',
    lat: 13.08,
    lon: 80.27,
    dx: 5,
    dy: -4,
    boardClue: 'Major East Coast IT & Software Technology Park in northern Tamil Nadu.',
    plottingAnchor: 'Coromandel coast at northern edge of Tamil Nadu.',
  },
  {
    id: 'stp-thiruvananthapuram',
    name: 'Thiruvananthapuram Software Technology Park',
    category: 'industries',
    subGroup: 'Software Technology Park (8)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Kerala (Southern Capital)',
    lat: 8.52,
    lon: 76.94,
    boardClue: 'India’s southernmost Software Technology Park near the tip of Kerala.',
    plottingAnchor: 'Near the extreme south-western coast slightly north-west of Kanyakumari.',
  },

  // =====================================
  // 6. GEOGRAPHY CH 7 LIFELINES (16 PINS — MAP ONLY)
  // =====================================
  {
    id: 'port-kandla',
    name: 'Kandla (Deendayal) Sea Port',
    category: 'lifelines',
    subGroup: 'Major Sea Port — West Coast',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Gujarat (Gulf of Kuchchh)',
    lat: 23.03,
    lon: 70.22,
    boardClue: 'First tidal port developed right after Independence to ease Mumbai’s load after Karachi went to Pakistan.',
    plottingAnchor: 'Inner north shore of the Gulf of Kuchchh in western Gujarat.',
  },
  {
    id: 'port-mumbai',
    name: 'Mumbai Sea Port',
    category: 'lifelines',
    subGroup: 'Major Sea Port — West Coast',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Maharashtra',
    lat: 18.95,
    lon: 72.84,
    dx: -5,
    dy: 4,
    boardClue: 'Biggest port in India with a spacious natural and well-sheltered harbour.',
    plottingAnchor: 'Mid-northern Konkan coast in Maharashtra.',
  },
  {
    id: 'port-marmagao',
    name: 'Marmagao Sea Port',
    category: 'lifelines',
    subGroup: 'Major Sea Port — West Coast',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Goa',
    lat: 15.41,
    lon: 73.8,
    boardClue: 'Premier iron-ore exporting port accounting for roughly 50% of India’s iron ore export.',
    plottingAnchor: 'Tiny Goa coastal bulge between Maharashtra (N) and Karnataka (S).',
  },
  {
    id: 'port-new-mangalore',
    name: 'New Mangalore Sea Port',
    category: 'lifelines',
    subGroup: 'Major Sea Port — West Coast',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Karnataka Coast',
    lat: 12.92,
    lon: 74.81,
    boardClue: 'West-coast port catering to export of iron ore concentrates from Kudremukh mines.',
    plottingAnchor: 'Southern Karnataka coast near northern Kerala boundary.',
  },
  {
    id: 'port-kochi',
    name: 'Kochi Sea Port',
    category: 'lifelines',
    subGroup: 'Major Sea Port — West Coast',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Kerala Coast',
    lat: 9.97,
    lon: 76.27,
    boardClue: 'Extreme south-western port located at the entrance of a lagoon with a natural harbour.',
    plottingAnchor: 'Central Kerala Malabar coast (middle of Kerala).',
  },
  {
    id: 'port-tuticorin',
    name: 'Tuticorin (Thoothukudi) Sea Port',
    category: 'lifelines',
    subGroup: 'Major Sea Port — East Coast',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Tamil Nadu (SE Tip)',
    lat: 8.76,
    lon: 78.13,
    boardClue: 'Extreme south-eastern natural port handling trade with neighbouring Sri Lanka & Maldives.',
    plottingAnchor: 'Far south-eastern Tamil Nadu coast just north-east of Kanyakumari.',
  },
  {
    id: 'port-chennai',
    name: 'Chennai Sea Port',
    category: 'lifelines',
    subGroup: 'Major Sea Port — East Coast',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Tamil Nadu (North Coast)',
    lat: 13.08,
    lon: 80.29,
    dx: 6,
    dy: 4,
    boardClue: 'One of the oldest ARTIFICIAL ports of the country (second only to Mumbai in cargo volume).',
    plottingAnchor: 'Northern Tamil Nadu coast.',
  },
  {
    id: 'port-vishakhapatnam',
    name: 'Vishakhapatnam Sea Port',
    category: 'lifelines',
    subGroup: 'Major Sea Port — East Coast',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Andhra Pradesh (North Coast)',
    lat: 17.69,
    lon: 83.29,
    boardClue: 'Deepest LANDLOCKED and well-protected East Coast port (handles Bailadila iron-ore exports).',
    plottingAnchor: 'Northern Andhra Pradesh coast south-east of Chhattisgarh.',
  },
  {
    id: 'port-paradwip',
    name: 'Paradwip (Paradip) Sea Port',
    category: 'lifelines',
    subGroup: 'Major Sea Port — East Coast',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Odisha Coast',
    lat: 20.26,
    lon: 86.67,
    boardClue: 'Major Odisha deep-water port near the Mahanadi delta specialising in iron-ore exports.',
    plottingAnchor: 'Central Odisha coastal curve right at the Mahanadi delta.',
  },
  {
    id: 'port-haldia',
    name: 'Haldia Sea Port',
    category: 'lifelines',
    subGroup: 'Major Sea Port — East Coast',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'West Bengal',
    lat: 22.03,
    lon: 88.06,
    boardClue: 'Subsidiary riverine port developed on the Hooghly estuary to relieve pressure on Kolkata.',
    plottingAnchor: 'On the Hooghly estuary just south-west of Kolkata near the Bay of Bengal.',
  },
  {
    id: 'air-amritsar',
    name: 'Amritsar — Raja Sansi Airport',
    category: 'lifelines',
    subGroup: 'International Airport (6)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Punjab (North-West)',
    lat: 31.71,
    lon: 74.8,
    dx: 5,
    dy: 4,
    boardClue: 'Raja Sansi (Sri Guru Ram Dass Jee International Airport).',
    plottingAnchor: 'North-west border of Punjab.',
  },
  {
    id: 'air-delhi',
    name: 'Delhi — Indira Gandhi Airport',
    category: 'lifelines',
    subGroup: 'International Airport (6)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Delhi NCR',
    lat: 28.56,
    lon: 77.1,
    dx: -4,
    dy: -3,
    boardClue: 'Indira Gandhi International Airport (IGI) — Northern Hub.',
    plottingAnchor: 'Inside Delhi enclave bounded by Haryana & UP (just west of Noida).',
  },
  {
    id: 'air-mumbai',
    name: 'Mumbai — Chhatrapati Shivaji Airport',
    category: 'lifelines',
    subGroup: 'International Airport (6)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Maharashtra',
    lat: 19.09,
    lon: 72.87,
    dx: 5,
    dy: 5,
    boardClue: 'Chhatrapati Shivaji Maharaj International Airport — Western Hub.',
    plottingAnchor: 'Konkan coast in western Maharashtra.',
  },
  {
    id: 'air-chennai',
    name: 'Chennai — Meenam Bakkam Airport',
    category: 'lifelines',
    subGroup: 'International Airport (6)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Tamil Nadu',
    lat: 12.99,
    lon: 80.17,
    dx: -4,
    dy: 6,
    boardClue: 'Meenam Bakkam International Airport — Southern Coastal Hub.',
    plottingAnchor: 'Northern Tamil Nadu coast (just north of Kalpakkam).',
  },
  {
    id: 'air-kolkata',
    name: 'Kolkata — Netaji Subhash Chandra Bose Airport',
    category: 'lifelines',
    subGroup: 'International Airport (6)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'West Bengal',
    lat: 22.65,
    lon: 88.45,
    dx: 6,
    dy: 4,
    boardClue: 'Netaji Subhash Chandra Bose International Airport (Dum Dum) — Eastern Hub.',
    plottingAnchor: 'River Hooghly plain in southern West Bengal just above Haldia.',
  },
  {
    id: 'air-hyderabad',
    name: 'Hyderabad — Rajiv Gandhi Airport',
    category: 'lifelines',
    subGroup: 'International Airport (6)',
    examSection: 'Q37b Geography (3M)',
    taskType: 'Locate & Label',
    stateOrRegion: 'Telangana',
    lat: 17.24,
    lon: 78.43,
    dx: 5,
    dy: 4,
    boardClue: 'Rajiv Gandhi International Airport (Shamshabad) — Deccan Hub.',
    plottingAnchor: 'Central Telangana just south of Hyderabad city centre.',
  },
];

// 14 Regional Soil & Crop Identification Zones (Ch 1 Soils [6] + Ch 4 Crops [8])
const MAP_ZONES: MapZoneItem[] = [
  {
    id: 'soil-alluvial',
    name: 'Alluvial Soil Belt',
    group: 'Ch 1 Soil Types',
    statesCovered: 'Punjab, Haryana, UP, Bihar, West Bengal, Assam + East-coast Mahanadi/Godavari/Krishna deltas',
    boardClue: 'Fertile northern river plains (Indus–Ganga–Brahmaputra) rich in Potash, Phosphoric acid & Lime; divided into Khadar & Bangar.',
    keyTrap: 'Also stretches into Rajasthan/Gujarat via a narrow corridor AND forms all major East Coast deltas!',
    color: '#10b981',
    labelLatLon: [27.3, 81.5],
    polygons: [
      [[31.8, 74.6], [30.2, 78.5], [27.3, 83.2], [26.2, 88.0], [22.2, 88.5], [22.0, 87.2], [25.0, 85.2], [26.3, 79.0], [29.4, 74.8]],
      [[26.7, 90.0], [27.3, 95.3], [26.5, 95.0], [25.9, 90.5]],
    ],
  },
  {
    id: 'soil-black',
    name: 'Black (Regur) Soil',
    group: 'Ch 1 Soil Types',
    statesCovered: 'Maharashtra, Saurashtra/Malwa (GJ/MP), Chhattisgarh plateau & NW Deccan',
    boardClue: 'Volcanic basalt lava traps ideal for Cotton; develops self-aerating deep summer cracks, poor in phosphoric content.',
    keyTrap: 'Classic Trap: Black soil holds moisture and is rich in calcium carbonate, magnesium, potash & lime — POOR in phosphoric content.',
    color: '#475569',
    labelLatLon: [20.4, 76.2],
    polygons: [
      [[23.8, 74.5], [23.6, 78.8], [21.0, 79.8], [17.8, 77.8], [16.8, 74.5], [19.8, 73.2], [22.4, 70.0], [22.0, 72.2]],
    ],
  },
  {
    id: 'soil-red-yellow',
    name: 'Red & Yellow Soil',
    group: 'Ch 1 Soil Types',
    statesCovered: 'Odisha, Chhattisgarh, Southern Ganga plain, Tamil Nadu, Karnataka plateau & NE hills',
    boardClue: 'Develops on crystalline igneous rocks in low-rainfall Deccan parts (Red from diffused iron, Yellow when hydrated).',
    keyTrap: 'Do not confuse inland Deccan Red & Yellow soil with thin coastal Laterite stripes.',
    color: '#ea580c',
    labelLatLon: [14.6, 78.2],
    polygons: [
      [[22.0, 82.0], [21.5, 86.2], [17.0, 82.0], [10.0, 78.5], [11.5, 76.5], [16.5, 77.5], [20.5, 80.5]],
    ],
  },
  {
    id: 'soil-laterite',
    name: 'Laterite Soil',
    group: 'Ch 1 Soil Types',
    statesCovered: 'Karnataka, Kerala, Tamil Nadu Western Ghats + hilly Odisha/Assam/Meghalaya',
    boardClue: 'Formed under high temperature & heavy rainfall causing intense leaching; yields Tea, Coffee & Red Cashew nuts.',
    keyTrap: 'Requires heavy manure/fertilisers except under evergreen forests because intense rain leaches nutrients.',
    color: '#b45309',
    labelLatLon: [12.3, 75.3],
    polygons: [
      [[17.2, 73.3], [14.5, 74.4], [10.5, 76.5], [10.0, 77.2], [13.8, 75.5], [17.0, 74.0]],
    ],
  },
  {
    id: 'soil-arid',
    name: 'Arid Soil',
    group: 'Ch 1 Soil Types',
    statesCovered: 'Western Rajasthan (Thar Desert)',
    boardClue: 'Sandy texture, saline nature & Kankar horizon beneath surface restricting water infiltration.',
    keyTrap: 'Becomes cultivable after proper irrigation (e.g., Indira Gandhi Canal in western Rajasthan).',
    color: '#eab308',
    labelLatLon: [26.8, 71.8],
    polygons: [
      [[29.5, 73.6], [28.0, 74.8], [25.0, 72.2], [25.5, 70.5], [27.5, 70.4]],
    ],
  },
  {
    id: 'soil-forest',
    name: 'Forest & Mountain Soil',
    group: 'Ch 1 Soil Types',
    statesCovered: 'J&K, Ladakh, Himachal Pradesh, Uttarakhand, Sikkim & Arunachal',
    boardClue: 'Loamy & silty on valley sides, coarse-grained on upper slopes, and acidic/low-humus under Himalayan snow.',
    keyTrap: 'Texture changes sharply with mountain altitude!',
    color: '#15803d',
    labelLatLon: [33.5, 76.8],
    polygons: [
      [[36.6, 75.8], [34.4, 78.5], [31.5, 78.6], [30.2, 80.6], [30.9, 77.2], [33.4, 74.8], [35.4, 74.2]],
    ],
  },
  {
    id: 'crop-rice',
    name: 'Major Rice Belt (Kharif >25°C, >100 cm)',
    group: 'Ch 4 Agricultural Belts',
    statesCovered: 'WB, Odisha, coastal AP & TN, Bihar, E. UP, Assam (+ irrigated PB/HR)',
    boardClue: 'Plains of north & north-eastern India, coastal areas & deltaic regions — India ranks 2nd globally.',
    keyTrap: 'West Bengal grows THREE rice crops a year: Aus, Aman & Boro!',
    color: '#06b6d4',
    labelLatLon: [22.2, 85.4],
    polygons: [
      [[26.4, 83.2], [25.5, 88.8], [21.5, 88.2], [17.0, 82.4], [12.0, 79.8], [11.5, 78.8], [18.5, 81.8], [23.8, 82.8]],
    ],
  },
  {
    id: 'crop-wheat',
    name: 'Major Wheat Belt (Rabi, 50–75 cm)',
    group: 'Ch 4 Agricultural Belts',
    statesCovered: 'Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, Bihar & Rajasthan',
    boardClue: 'Ganga–Sutlej plains in the north-west and black-soil region of the Deccan (cool growing season + bright ripening sun).',
    keyTrap: 'Never swap Wheat (50–75 cm, Rabi, Ganga–Sutlej) with Rice (>100 cm, Kharif, East/Coast)!',
    color: '#f59e0b',
    labelLatLon: [29.4, 76.6],
    polygons: [
      [[31.8, 74.8], [30.5, 77.8], [27.6, 81.2], [24.2, 78.6], [25.5, 74.8], [29.5, 73.9]],
    ],
  },
  {
    id: 'crop-sugarcane',
    name: 'Sugarcane — Largest Producer: Uttar Pradesh',
    group: 'Ch 4 Agricultural Belts',
    statesCovered: 'Uttar Pradesh (leader) + Maharashtra & Karnataka',
    boardClue: 'Tropical & sub-tropical hot-humid crop (21°–27°C, 75–100 cm rain); raw material for sugar, gur, khandsari & molasses.',
    keyTrap: 'UP is the largest producer overall, though newer co-op mills are shifting south/west to Maharashtra.',
    color: '#84cc16',
    labelLatLon: [27.4, 79.8],
    polygons: [
      [[29.7, 77.4], [28.6, 81.8], [25.6, 83.5], [25.8, 79.0], [27.9, 77.5]],
    ],
  },
  {
    id: 'crop-tea',
    name: 'Tea — Largest Producer: Assam',
    group: 'Ch 4 Agricultural Belts',
    statesCovered: 'Assam (+ WB Darjeeling/Jalpaiguri, Tamil Nadu & Kerala hills)',
    boardClue: 'Plantation agriculture needing deep fertile well-drained soil rich in humus + warm frost-free climate + frequent showers.',
    keyTrap: 'Processed INSIDE the tea garden itself to restore leaf freshness; requires abundant skilled cheap labour.',
    color: '#16a34a',
    labelLatLon: [26.6, 93.1],
    polygons: [
      [[27.8, 92.2], [27.7, 95.8], [26.0, 94.4], [25.9, 90.2], [26.9, 90.3]],
    ],
  },
  {
    id: 'crop-coffee',
    name: 'Coffee — Largest Producer: Karnataka',
    group: 'Ch 4 Agricultural Belts',
    statesCovered: 'Karnataka (Baba Budan Hills, Nilgiris) + Kerala & Tamil Nadu',
    boardClue: 'Indian Arabica variety initially brought from Yemen — globally famed quality cultivated on Baba Budan Hills.',
    keyTrap: 'Karnataka leads Indian Coffee; Assam leads Tea!',
    color: '#78350f',
    labelLatLon: [13.5, 76.1],
    polygons: [
      [[15.2, 74.6], [14.8, 77.2], [11.8, 77.2], [12.1, 75.0]],
    ],
  },
  {
    id: 'crop-rubber',
    name: 'Rubber — Largest Producer: Kerala',
    group: 'Ch 4 Agricultural Belts',
    statesCovered: 'Kerala (main) + Tamil Nadu, Karnataka & A&N / Garo hills',
    boardClue: 'Equatorial industrial crop requiring >200 cm rainfall and moist humid climate above 25°C.',
    keyTrap: 'Auto tyres & tubes consume the largest share of natural rubber (~44%+).',
    color: '#0f766e',
    labelLatLon: [9.9, 76.7],
    polygons: [
      [[12.2, 75.2], [11.4, 76.6], [8.3, 77.3], [8.6, 76.8]],
    ],
  },
  {
    id: 'crop-cotton',
    name: 'Cotton — Leading Belt: Gujarat & Maharashtra',
    group: 'Ch 4 Agricultural Belts',
    statesCovered: 'Gujarat & Maharashtra (Deccan Black Soil)',
    boardClue: 'Kharif fibre crop taking 6–8 months to mature; needs high temp, light rain & 210 frost-free sunny days.',
    keyTrap: 'Do not mark West Bengal (Jute) instead of Gujarat/Maharashtra (Cotton)!',
    color: '#6366f1',
    labelLatLon: [21.3, 75.4],
    polygons: [
      [[23.8, 70.0], [23.6, 76.6], [19.4, 78.6], [18.4, 73.4], [21.2, 71.2]],
    ],
  },
  {
    id: 'crop-jute',
    name: 'Jute ("Golden Fibre") — Largest Producer: West Bengal',
    group: 'Ch 4 Agricultural Belts',
    statesCovered: 'West Bengal (Hooghly basin) + Bihar, Assam, Odisha & Meghalaya',
    boardClue: 'Grows well on well-drained fertile flood-plain soils renewed annually — facing stiff competition from synthetic nylon.',
    keyTrap: 'Needs annually renewed flood-plain alluvium like the Hooghly delta of West Bengal.',
    color: '#d97706',
    labelLatLon: [23.4, 88.2],
    polygons: [
      [[26.3, 88.0], [25.2, 88.6], [22.0, 88.7], [22.1, 87.2], [24.8, 87.6]],
    ],
  },
];

const DRILL_QUESTIONS: DrillQuestion[] = [
  {
    id: 'dq-01',
    examPart: 'Q37a History (2M)',
    prompt: 'Identify & click the pin where the Special Session of INC was held in September 1920 to endorse Non-Cooperation.',
    targetPinId: 'hist-calcutta',
    candidatePinIds: ['hist-calcutta', 'hist-nagpur', 'hist-madras', 'hist-champaran', 'hist-chauri-chaura', 'hist-ahmedabad'],
    whyDecoysWrong: 'Nagpur was December 1920 ("CN-Sep-Dec": Calcutta = Sep, Nagpur = Dec); Madras was 1927.',
  },
  {
    id: 'dq-02',
    examPart: 'Q37a History (2M)',
    prompt: 'Click the Gujarat centre where Mahatma Gandhi led the 1917 Peasant Satyagraha against revenue collection after crop failure.',
    targetPinId: 'hist-kheda',
    candidatePinIds: ['hist-kheda', 'hist-ahmedabad', 'hist-dandi', 'hist-champaran', 'hist-chauri-chaura', 'hist-amritsar'],
    whyDecoysWrong: 'Ahmedabad (1918) was Cotton Mill Workers just north of Kheda; Dandi (1930) is on the south Gujarat coast.',
  },
  {
    id: 'dq-03',
    examPart: 'Q37a History (2M)',
    prompt: 'Click the UP site where violence forced Mahatma Gandhi to call off the Non-Cooperation Movement in February 1922.',
    targetPinId: 'hist-chauri-chaura',
    candidatePinIds: ['hist-chauri-chaura', 'hist-champaran', 'hist-amritsar', 'hist-nagpur', 'hist-calcutta', 'hist-kheda'],
    whyDecoysWrong: 'Chauri Chaura is in eastern UP (west of Champaran in Bihar); Amritsar is Jallianwala Bagh (1919).',
  },
  {
    id: 'dq-04',
    examPart: 'Q37a History (2M)',
    prompt: 'Click the 1927 Indian National Congress session city that called for the boycott of the Simon Commission.',
    targetPinId: 'hist-madras',
    candidatePinIds: ['hist-madras', 'hist-calcutta', 'hist-nagpur', 'hist-dandi', 'hist-amritsar', 'hist-champaran'],
    whyDecoysWrong: 'Madras hosted the 1927 INC Session on the northern Tamil Nadu coast.',
  },
  {
    id: 'dq-05',
    examPart: 'Q37b Geography (3M)',
    prompt: 'Locate the Dam built across River Mahanadi in Odisha (longest earthen dam in India).',
    targetPinId: 'dam-hirakud',
    candidatePinIds: ['dam-hirakud', 'dam-salal', 'dam-bhakra-nangal', 'dam-tehri', 'dam-sardar-sarovar', 'dam-nagarjuna-sagar'],
    whyDecoysWrong: 'Hirakud lies in north-western Odisha on River Mahanadi (never Jharkhand or Chhattisgarh!).',
  },
  {
    id: 'dq-06',
    examPart: 'Q37b Geography (3M)',
    prompt: 'Locate the Dam built across River Chenab in Jammu & Kashmir.',
    targetPinId: 'dam-salal',
    candidatePinIds: ['dam-salal', 'dam-bhakra-nangal', 'dam-tehri', 'dam-rana-pratap-sagar', 'dam-hirakud', 'dam-tungabhadra'],
    whyDecoysWrong: 'Salal is in J&K (Chenab); Bhakra Nangal is on Sutlej (HP/PB); Tehri is on Bhagirathi (Uttarakhand).',
  },
  {
    id: 'dq-07',
    examPart: 'Q37b Geography (3M)',
    prompt: 'Locate the Tamil Nadu LIGNITE coalfield used predominantly for electricity generation.',
    targetPinId: 'coal-neyveli',
    candidatePinIds: ['coal-neyveli', 'coal-raniganj', 'coal-bokaro', 'coal-talcher', 'nuc-kalpakkam', 'stl-salem'],
    whyDecoysWrong: 'Neyveli is in inland coastal Tamil Nadu south of Kalpakkam (Kalpakkam is a Nuclear plant; Salem is a Steel plant west of it).',
  },
  {
    id: 'dq-08',
    examPart: 'Q37b Geography (3M)',
    prompt: 'Click the OFFSHORE oilfield located farthest west in the Arabian Sea (~160 km WNW of Mumbai).',
    targetPinId: 'oil-mumbai-high',
    candidatePinIds: ['oil-mumbai-high', 'oil-bassien', 'oil-ankaleshwar', 'oil-kalol', 'nuc-tarapur', 'port-mumbai'],
    whyDecoysWrong: 'Mumbai High sits farthest offshore in the Arabian Sea; Bassien is closer to the coast; Ankaleshwar & Kalol are onshore in Gujarat.',
  },
  {
    id: 'dq-09',
    examPart: 'Q37b Geography (3M)',
    prompt: 'Do NOT mix the two "Ka-" Nuclear Plants! Click the Nuclear Power Plant located in GUJARAT.',
    targetPinId: 'nuc-kakrapara',
    candidatePinIds: ['nuc-kakrapara', 'nuc-kalpakkam', 'nuc-tarapur', 'nuc-narora', 'dam-sardar-sarovar', 'oil-ankaleshwar'],
    whyDecoysWrong: 'Kakrapara = Gujarat (east of Surat); Kalpakkam = Tamil Nadu coast (south of Chennai); Tarapur = Maharashtra; Narora = UP.',
  },
  {
    id: 'dq-10',
    examPart: 'Q37b Geography (3M)',
    prompt: 'Click the pit-head Thermal Power Plant located in north-eastern TELANGANA.',
    targetPinId: 'pwr-ramagundam',
    candidatePinIds: ['pwr-ramagundam', 'pwr-singrauli', 'pwr-namrup', 'dam-nagarjuna-sagar', 'stp-hyderabad', 'stl-bhilai'],
    whyDecoysWrong: 'Ramagundam is in NE Telangana north-east of Hyderabad; Singrauli is in eastern MP; Namrup is in Upper Assam.',
  },
  {
    id: 'dq-11',
    examPart: 'Q37b Geography (3M)',
    prompt: 'Click the Integrated Iron & Steel Plant situated in CHHATTISGARH (Durg–Raipur belt).',
    targetPinId: 'stl-bhilai',
    candidatePinIds: ['stl-bhilai', 'stl-bokaro', 'stl-jamshedpur', 'stl-durgapur', 'stl-vijayanagar', 'stl-salem'],
    whyDecoysWrong: 'Bhilai = Chhattisgarh; Bokaro & Jamshedpur = Jharkhand; Durgapur = West Bengal; Vijayanagar = Karnataka; Salem = Tamil Nadu.',
  },
  {
    id: 'dq-12',
    examPart: 'Q37b Geography (3M)',
    prompt: 'Click India’s southern-most Software Technology Park located near the tip of Kerala.',
    targetPinId: 'stp-thiruvananthapuram',
    candidatePinIds: ['stp-thiruvananthapuram', 'stp-bengaluru', 'stp-chennai', 'stp-hyderabad', 'port-kochi', 'port-tuticorin'],
    whyDecoysWrong: 'Thiruvananthapuram is at Kerala’s southern tip (Kochi port sits midway up Kerala; Tuticorin port is on SE Tamil Nadu).',
  },
  {
    id: 'dq-13',
    examPart: 'Q37b Geography (3M)',
    prompt: 'Click the first TIDAL Sea Port developed after Independence in the Gulf of Kuchchh (Gujarat).',
    targetPinId: 'port-kandla',
    candidatePinIds: ['port-kandla', 'port-mumbai', 'port-marmagao', 'port-new-mangalore', 'port-haldia', 'port-paradwip'],
    whyDecoysWrong: 'Kandla (Deendayal Port) is inside the Gulf of Kuchchh in Gujarat; Mumbai is natural harbour in Maharashtra.',
  },
  {
    id: 'dq-14',
    examPart: 'Q37b Geography (3M)',
    prompt: 'Click India’s DEEPEST LANDLOCKED & well-protected East Coast Sea Port (exports Bailadila ore).',
    targetPinId: 'port-vishakhapatnam',
    candidatePinIds: ['port-vishakhapatnam', 'port-chennai', 'port-paradwip', 'port-haldia', 'port-tuticorin', 'port-marmagao'],
    whyDecoysWrong: 'Vishakhapatnam (AP) = deepest landlocked; Chennai (TN) = oldest artificial; Paradwip = Odisha; Haldia = West Bengal.',
  },
  {
    id: 'dq-15',
    examPart: 'Q37b Geography (3M)',
    prompt: 'Click the city where "Meenam Bakkam International Airport" is located.',
    targetPinId: 'air-chennai',
    candidatePinIds: ['air-chennai', 'air-hyderabad', 'air-kolkata', 'air-mumbai', 'air-delhi', 'air-amritsar'],
    whyDecoysWrong: 'Meenam Bakkam = Chennai; Rajiv Gandhi = Hyderabad; Netaji Subhash Chandra Bose = Kolkata; Raja Sansi = Amritsar.',
  },
];

const CROWD_CLUSTERS: CrowdCluster[] = [
  {
    id: 'cluster-gujarat',
    title: 'Gujarat (10 Pins — Top to Bottom Ladder)',
    subtitle: 'Prevent swapping Kheda vs. Ahmedabad, Kandla vs. Surat, Kalol vs. Ankaleshwar & Kakrapara!',
    memoryRule:
      'North → South Ladder: (1) Kalol Oil + Gandhinagar STP [N of Ahmedabad] → (2) Ahmedabad Mill Satyagraha → (3) Kheda Peasant [SE of Ahmedabad] | West Coast: Kandla Tidal Port [Gulf of Kuchchh] → (4) Sardar Sarovar Dam [East Narmada] + Ankaleshwar Oil [North of Surat] → (5) Surat Cotton + Kakrapara Nuclear [E of Surat] → (6) Dandi Salt March [South Gujarat Coast].',
    pinIds: [
      'oil-kalol',
      'stp-gandhinagar',
      'hist-ahmedabad',
      'hist-kheda',
      'port-kandla',
      'dam-sardar-sarovar',
      'oil-ankaleshwar',
      'cot-surat',
      'nuc-kakrapara',
      'hist-dandi',
    ],
    focusBox: projectLatLon(24.8, 68.4),
  },
  {
    id: 'cluster-tamilnadu',
    title: 'Tamil Nadu (9 Pins — Coast vs. Interior)',
    subtitle: 'Separate Chennai/Madras, Kalpakkam, Neyveli, Salem, Coimbatore & Tuticorin cleanly!',
    memoryRule:
      'North-East Coast Southward: Chennai (1927 Madras INC / Sea Port / STP / Meenam Bakkam Airport) → just south is Kalpakkam Nuclear → inland south-west is Neyveli Lignite → Extreme SE tip is Tuticorin Port. Interior West: Salem Steel (central) → Coimbatore Cotton (near Kerala border).',
    pinIds: [
      'hist-madras',
      'stp-chennai',
      'port-chennai',
      'air-chennai',
      'nuc-kalpakkam',
      'coal-neyveli',
      'stl-salem',
      'cot-coimbatore',
      'port-tuticorin',
    ],
    focusBox: projectLatLon(14.5, 76.2),
  },
  {
    id: 'cluster-maharashtra',
    title: 'Maharashtra & Goa (Offshore vs. Coast vs. Vidarbha)',
    subtitle: 'Don’t drown Mumbai High offshore or confuse Tarapur with Kakrapara!',
    memoryRule:
      'Arabian Sea Offshore: Mumbai High (farther WNW in sea) & Bassien (closer to coast). North → South Coast: Tarapur Nuclear → Mumbai (Cotton, STP, Sea Port, Chhatrapati Shivaji Airport) → Pune STP (inland SE of Mumbai) → Marmagao Port (Goa bulge). Far East (Vidarbha): Nagpur (Dec 1920 INC).',
    pinIds: [
      'oil-mumbai-high',
      'oil-bassien',
      'nuc-tarapur',
      'cot-mumbai',
      'stp-mumbai',
      'port-mumbai',
      'air-mumbai',
      'stp-pune',
      'hist-nagpur',
      'port-marmagao',
    ],
    focusBox: projectLatLon(22.4, 70.6),
  },
  {
    id: 'cluster-east-belt',
    title: 'East Mineral–Steel Belt (WB • Jharkhand • Odisha • CG)',
    subtitle: 'Chhotanagpur & Bastar plateau pins — never swap Bokaro, Jamshedpur, Durgapur & Bhilai!',
    memoryRule:
      'West Bengal: Durgapur Steel + Raniganj Coal (west); Calcutta 1920 INC + Dum Dum Airport + Haldia Port (Hooghly mouth). Jharkhand: Bokaro Coal/Steel (north Damodar); Jamshedpur Steel (SE tip). Odisha: Mayurbhanj Iron (NE) → Hirakud Dam (NW) → Talcher Coal (central) → Paradwip Port (coast). Chhattisgarh: Durg + Bhilai Steel (central) → Bailadila Iron (south tip).',
    pinIds: [
      'coal-raniganj',
      'stl-durgapur',
      'hist-calcutta',
      'air-kolkata',
      'port-haldia',
      'coal-bokaro',
      'stl-bokaro',
      'stl-jamshedpur',
      'ore-mayurbhanj',
      'dam-hirakud',
      'coal-talcher',
      'port-paradwip',
      'ore-durg',
      'stl-bhilai',
      'ore-bailadila',
    ],
    focusBox: projectLatLon(25.2, 80.5),
  },
  {
    id: 'cluster-karnataka-deccan',
    title: 'Karnataka, Telangana & AP (West vs. East Deccan)',
    subtitle: 'Pin Ballari/Vijayanagar/Tungabhadra inland vs. Kudremukh/New Mangalore West Coast!',
    memoryRule:
      'East Karnataka Hub: Tungabhadra Dam + Bellary Iron Ore + Vijayanagar Steel all cluster near Hampi/AP border. SW Ghats & Coast: Kudremukh Iron Mine (W. Ghats) piped to New Mangalore Port. South: Bengaluru STP. Telangana–AP: Ramagundam Thermal (NE TS) → Hyderabad (STP/Airport) → Nagarjuna Sagar Dam (TS/AP border) → Vishakhapatnam Port (NE AP Coast).',
    pinIds: [
      'dam-tungabhadra',
      'ore-bellary',
      'stl-vijayanagar',
      'ore-kudremukh',
      'port-new-mangalore',
      'stp-bengaluru',
      'pwr-ramagundam',
      'stp-hyderabad',
      'air-hyderabad',
      'dam-nagarjuna-sagar',
      'port-vishakhapatnam',
    ],
    focusBox: projectLatLon(20.0, 73.6),
  },
].map((c) => ({
  ...c,
  focusBox: { x: c.focusBox.x, y: c.focusBox.y, w: 180, h: 180 },
}));

export function SstIndiaMapLab() {
  const [mode, setMode] = useState<'explore' | 'locate-drill' | 'clusters'>('explore');
  const [atlasFilter, setAtlasFilter] = useState<AtlasCategoryFilter>('history');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPinId, setSelectedPinId] = useState<string>('hist-calcutta');
  const [selectedZoneId, setSelectedZoneId] = useState<string>('soil-black');

  // Drill mode states
  const [drillIdx, setDrillIdx] = useState(0);
  const [drillAnswers, setDrillAnswers] = useState<Record<string, string>>({});

  // Clusters mode state
  const [activeClusterId, setActiveClusterId] = useState<string>('cluster-gujarat');

  const indiaMainlandPath = useMemo(() => latLonPath(INDIA_MAINLAND_COORDS, true), []);

  const tropicStart = useMemo(() => projectLatLon(23.5, 68.4), []);
  const tropicEnd = useMemo(() => projectLatLon(23.5, 93.4), []);

  const filteredPins = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (q) {
      return MAP_PINS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.stateOrRegion.toLowerCase().includes(q) ||
          p.subGroup.toLowerCase().includes(q) ||
          p.boardClue.toLowerCase().includes(q)
      );
    }
    if (atlasFilter === 'soils-crops') return [];
    if (atlasFilter === 'all-pins') return MAP_PINS;
    return MAP_PINS.filter((p) => p.category === atlasFilter);
  }, [atlasFilter, searchTerm]);

  const currentDrill = DRILL_QUESTIONS[drillIdx];
  const currentDrillPick = drillAnswers[currentDrill.id];
  const drillCorrectCount = useMemo(
    () =>
      DRILL_QUESTIONS.filter((dq) => drillAnswers[dq.id] === dq.targetPinId).length,
    [drillAnswers]
  );

  const activeCluster = useMemo(
    () => CROWD_CLUSTERS.find((c) => c.id === activeClusterId) ?? CROWD_CLUSTERS[0],
    [activeClusterId]
  );

  const visiblePins = useMemo(() => {
    if (mode === 'explore') return filteredPins;
    if (mode === 'locate-drill') {
      return currentDrill.candidatePinIds
        .map((id) => MAP_PINS.find((p) => p.id === id))
        .filter((p): p is MapPinItem => Boolean(p));
    }
    return activeCluster.pinIds
      .map((id) => MAP_PINS.find((p) => p.id === id))
      .filter((p): p is MapPinItem => Boolean(p));
  }, [mode, filteredPins, currentDrill, activeCluster]);

  const activePin = useMemo(
    () => MAP_PINS.find((p) => p.id === selectedPinId) ?? visiblePins[0] ?? MAP_PINS[0],
    [selectedPinId, visiblePins]
  );

  const activeZone = useMemo(
    () => MAP_ZONES.find((z) => z.id === selectedZoneId) ?? MAP_ZONES[0],
    [selectedZoneId]
  );

  const candidateLetterMap = useMemo(() => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const map: Record<string, string> = {};
    currentDrill.candidatePinIds.forEach((id, i) => {
      map[id] = letters[i] ?? String(i + 1);
    });
    return map;
  }, [currentDrill]);

  const handleSelectPin = (pin: MapPinItem) => {
    if (mode === 'locate-drill') {
      if (!drillAnswers[currentDrill.id]) {
        setDrillAnswers((prev) => ({ ...prev, [currentDrill.id]: pin.id }));
      }
    } else {
      setSelectedPinId(pin.id);
    }
  };

  return (
    <div className="rounded-2xl border border-rose-200 bg-white p-4 sm:p-5 space-y-4 shadow-xs dark:border-rose-900/60 dark:bg-slate-900">
      {/* Lab Top Header + Mode Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-400">
            <MapPin className="h-3.5 w-3.5" /> Section F Interactive India SVG Map Lab (Q37a + Q37b — 5 Marks)
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
            All 88 Official CBSE Map Items: 74 Point Pins + 14 Soil &amp; Crop Identification Zones
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'explore' as const, label: '88-Item SVG Map Atlas', icon: Compass },
            { id: 'locate-drill' as const, label: 'Q37 Board Pin Simulator (15)', icon: Target },
            { id: 'clusters' as const, label: 'Crowded State Disambiguator', icon: Layers },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = mode === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setMode(tab.id)}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                  active
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mode 1 Filter Pills & Search */}
      {mode === 'explore' && (
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center gap-1.5">
            {(
              [
                { id: 'history', label: 'Ch 2 History (9)' },
                { id: 'dams', label: 'Ch 3 Dams (8)' },
                { id: 'minerals-oil', label: 'Ch 5A Minerals & Oil (15)' },
                { id: 'power', label: 'Ch 5B Power Plants (7)' },
                { id: 'industries', label: 'Ch 6 Industries (19)' },
                { id: 'lifelines', label: 'Ch 7 Ports & Airports (16)' },
                { id: 'soils-crops', label: 'Ch 1 Soils & Ch 4 Crops (14 Zones)' },
                { id: 'all-pins', label: 'All 74 Pins' },
              ] as { id: AtlasCategoryFilter; label: string }[]
            ).map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => {
                  setAtlasFilter(btn.id);
                  setSearchTerm('');
                  if (btn.id !== 'soils-crops') {
                    const first =
                      btn.id === 'all-pins'
                        ? MAP_PINS[0]
                        : MAP_PINS.find((p) => p.category === btn.id);
                    if (first) setSelectedPinId(first.id);
                  }
                }}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
                  atlasFilter === btn.id && !searchTerm
                    ? 'bg-teal-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                if (atlasFilter === 'soils-crops' && e.target.value.trim()) {
                  setAtlasFilter('all-pins');
                }
              }}
              placeholder="Search any CBSE map pin across all 74 points (e.g., Kakrapara, Kudremukh, Champaran, Kandla, Salem, Neyveli)..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 py-2 text-xs text-slate-900 focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>
        </div>
      )}

      {/* Mode 3 Cluster Tabs */}
      {mode === 'clusters' && (
        <div className="flex flex-wrap gap-1.5">
          {CROWD_CLUSTERS.map((cluster) => (
            <button
              key={cluster.id}
              type="button"
              onClick={() => {
                setActiveClusterId(cluster.id);
                setSelectedPinId(cluster.pinIds[0]);
              }}
              className={`rounded-lg px-2.5 py-1.5 text-[11px] font-bold transition cursor-pointer ${
                activeClusterId === cluster.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cluster.title.split(' (')[0]}
            </button>
          ))}
        </div>
      )}

      {/* Main Split Canvas: SVG India Map + Interactive Right Panel */}
      <div className="grid gap-4 lg:grid-cols-12 items-start">
        {/* Left: SVG Cartographic Map */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-sky-50/70 p-2 sm:p-3 dark:border-slate-800 dark:bg-slate-950">
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            role="img"
            aria-label="Interactive CBSE Class 10 Outline Map of India"
            className="w-full h-auto max-h-[560px] select-none rounded-xl bg-sky-50 dark:bg-slate-950"
          >
            {/* Water Backdrop Grid */}
            <defs>
              <pattern id="sst-map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.06"
                  strokeWidth="1"
                  className="text-sky-700 dark:text-sky-300"
                />
              </pattern>
            </defs>
            <rect width={SVG_W} height={SVG_H} fill="url(#sst-map-grid)" rx="12" />

            {/* Ocean Labels */}
            <text
              x={96}
              y={470}
              className="fill-sky-700/55 dark:fill-sky-400/45 text-[10px] font-extrabold tracking-widest"
            >
              ARABIAN SEA
            </text>
            <text
              x={396}
              y={475}
              className="fill-sky-700/55 dark:fill-sky-400/45 text-[10px] font-extrabold tracking-widest"
            >
              BAY OF BENGAL
            </text>
            <text
              x={210}
              y={654}
              className="fill-sky-700/55 dark:fill-sky-400/45 text-[10px] font-extrabold tracking-widest"
            >
              INDIAN OCEAN
            </text>

            {/* India Mainland Silhouette */}
            <path
              d={indiaMainlandPath}
              className="fill-amber-50/90 stroke-slate-500 dark:fill-slate-900 dark:stroke-slate-500"
              strokeWidth={1.8}
              strokeLinejoin="round"
            />

            {/* Lakshadweep & Andaman-Nicobar Island Groups */}
            {[
              [11.2, 72.7],
              [10.6, 72.6],
              [10.1, 73.0],
              [9.4, 73.1],
            ].map(([lat, lon], idx) => {
              const p = projectLatLon(lat, lon);
              return (
                <circle
                  key={`lak-${idx}`}
                  cx={p.x}
                  cy={p.y}
                  r={2.2}
                  className="fill-amber-200 stroke-slate-500 dark:fill-slate-700"
                  strokeWidth={0.8}
                />
              );
            })}
            <text
              x={projectLatLon(8.5, 71.1).x}
              y={projectLatLon(8.5, 71.1).y}
              className="fill-slate-500 dark:fill-slate-400 text-[8px] font-semibold"
            >
              Lakshadweep
            </text>

            {[
              [13.2, 92.9],
              [12.3, 92.8],
              [11.6, 92.7],
              [9.1, 92.8],
              [7.2, 93.8],
            ].map(([lat, lon], idx) => {
              const p = projectLatLon(lat, lon);
              return (
                <ellipse
                  key={`an-${idx}`}
                  cx={p.x}
                  cy={p.y}
                  rx={2.5}
                  ry={4.5}
                  className="fill-amber-200 stroke-slate-500 dark:fill-slate-700"
                  strokeWidth={0.8}
                />
              );
            })}
            <text
              x={projectLatLon(10.8, 93.3).x}
              y={projectLatLon(10.8, 93.3).y}
              className="fill-slate-500 dark:fill-slate-400 text-[8px] font-semibold"
            >
              Andaman &amp; Nicobar
            </text>

            {/* Tropic of Cancer Dashed Reference Line */}
            <line
              x1={tropicStart.x}
              y1={tropicStart.y}
              x2={tropicEnd.x}
              y2={tropicEnd.y}
              stroke="#e11d48"
              strokeWidth={1.1}
              strokeDasharray="5 4"
              strokeOpacity={0.55}
            />
            <text
              x={tropicStart.x + 2}
              y={tropicStart.y - 4}
              fill="#be123c"
              fillOpacity={0.8}
              className="text-[8.5px] font-bold"
            >
              23°30′N Tropic of Cancer
            </text>

            {/* Faint River Guides */}
            {RIVER_PATHS.map((rv) => (
              <path
                key={rv.name}
                d={latLonPath(rv.coords, false)}
                fill="none"
                stroke="#0ea5e9"
                strokeWidth={1.2}
                strokeOpacity={0.38}
              />
            ))}

            {/* Soil & Crop Identification Zones Layer */}
            {mode === 'explore' &&
              atlasFilter === 'soils-crops' &&
              !searchTerm &&
              MAP_ZONES.map((zone) => {
                const isSel = zone.id === activeZone.id;
                const labelPt = projectLatLon(zone.labelLatLon[0], zone.labelLatLon[1]);
                return (
                  <g
                    key={zone.id}
                    onClick={() => setSelectedZoneId(zone.id)}
                    className="cursor-pointer"
                  >
                    {zone.polygons.map((poly, idx) => (
                      <path
                        key={`${zone.id}-${idx}`}
                        d={latLonPath(poly, true)}
                        fill={zone.color}
                        fillOpacity={isSel ? 0.45 : 0.16}
                        stroke={zone.color}
                        strokeWidth={isSel ? 2.2 : 1}
                        strokeDasharray={isSel ? undefined : '3 2'}
                      />
                    ))}
                    {isSel && (
                      <g transform={`translate(${labelPt.x}, ${labelPt.y})`}>
                        <rect
                          x={-54}
                          y={-11}
                          width={108}
                          height={20}
                          rx={5}
                          fill="#0f172a"
                          fillOpacity={0.85}
                        />
                        <text
                          textAnchor="middle"
                          y={3}
                          fill="#ffffff"
                          className="text-[9px] font-bold"
                        >
                          {zone.name.split(' (')[0].slice(0, 20)}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}

            {/* Cluster Highlight Box in Modes where Cluster Focus Helps */}
            {mode === 'clusters' && (
              <rect
                x={activeCluster.focusBox.x}
                y={activeCluster.focusBox.y}
                width={activeCluster.focusBox.w}
                height={activeCluster.focusBox.h}
                rx={10}
                fill="#f59e0b"
                fillOpacity={0.07}
                stroke="#d97706"
                strokeWidth={1.4}
                strokeDasharray="4 3"
              />
            )}

            {/* Point Pins Layer */}
            {visiblePins.map((pin) => {
              const pt = projectLatLon(pin.lat, pin.lon, pin.dx ?? 0, pin.dy ?? 0);
              const meta = CATEGORY_META[pin.category];
              const isSelected = mode !== 'locate-drill' && activePin?.id === pin.id;

              let fill = meta.color;
              let ringColor = meta.color;
              if (mode === 'locate-drill') {
                if (currentDrillPick) {
                  if (pin.id === currentDrill.targetPinId) {
                    fill = '#059669';
                    ringColor = '#059669';
                  } else if (pin.id === currentDrillPick) {
                    fill = '#e11d48';
                    ringColor = '#e11d48';
                  } else {
                    fill = '#64748b';
                    ringColor = '#64748b';
                  }
                } else {
                  fill = '#0f766e';
                  ringColor = '#0f766e';
                }
              }

              const showLabel =
                mode === 'locate-drill' ||
                mode === 'clusters' ||
                isSelected ||
                visiblePins.length <= 16;

              return (
                <g
                  key={pin.id}
                  transform={`translate(${pt.x}, ${pt.y})`}
                  onClick={() => handleSelectPin(pin)}
                  className="cursor-pointer"
                >
                  {(isSelected || (mode === 'locate-drill' && currentDrillPick && pin.id === currentDrill.targetPinId)) && (
                    <circle r={11} fill="none" stroke={ringColor} strokeWidth={1.8} strokeOpacity={0.55} />
                  )}

                  {meta.shape === 'triangle' && mode !== 'locate-drill' ? (
                    <polygon
                      points="0,-6.5 6,5 -6,5"
                      fill={fill}
                      stroke="#ffffff"
                      strokeWidth={1.4}
                    />
                  ) : meta.shape === 'diamond' && mode !== 'locate-drill' ? (
                    <polygon
                      points="0,-6.5 6,0 0,6.5 -6,0"
                      fill={fill}
                      stroke="#ffffff"
                      strokeWidth={1.4}
                    />
                  ) : meta.shape === 'square' && mode !== 'locate-drill' ? (
                    <rect
                      x={-5}
                      y={-5}
                      width={10}
                      height={10}
                      rx={2}
                      fill={fill}
                      stroke="#ffffff"
                      strokeWidth={1.4}
                    />
                  ) : (
                    <circle
                      r={mode === 'locate-drill' ? 9.5 : isSelected ? 6.5 : 5}
                      fill={fill}
                      stroke="#ffffff"
                      strokeWidth={1.5}
                    />
                  )}

                  {mode === 'locate-drill' && (
                    <text
                      textAnchor="middle"
                      y={3.2}
                      fill="#ffffff"
                      className="text-[10px] font-extrabold pointer-events-none"
                    >
                      {candidateLetterMap[pin.id]}
                    </text>
                  )}

                  {showLabel && mode !== 'locate-drill' && (
                    <text
                      x={8}
                      y={3}
                      className={`text-[9px] font-bold pointer-events-none ${
                        isSelected
                          ? 'fill-slate-950 dark:fill-white'
                          : 'fill-slate-700/85 dark:fill-slate-300/90'
                      }`}
                    >
                      {pin.name.split(' (')[0].split(' — ')[0].slice(0, 18)}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Compact Legend Bar */}
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2 px-1 text-[10px] text-slate-600 dark:text-slate-400">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-600 inline-block" /> History / Ports
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2.5 w-2.5 bg-sky-600 inline-block rotate-45" /> Dams / Minerals
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-xs bg-emerald-600 inline-block" /> Steel / STP / Power
              </span>
            </div>
            <span>74 Point Pins + 14 Soil/Crop Zones = 88 Official CBSE Items</span>
          </div>
        </div>

        {/* Right: Mode-Specific Interactive Inspector / Quiz / Cluster Guide */}
        <div className="lg:col-span-5 space-y-3">
          {mode === 'explore' && atlasFilter === 'soils-crops' && !searchTerm ? (
            <div className="space-y-3">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 space-y-2 dark:border-emerald-900/60 dark:bg-emerald-950/30">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md bg-emerald-700 px-2 py-0.5 text-[10px] font-extrabold text-white">
                    {activeZone.group}
                  </span>
                  <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                    CBSE Mode: Identification ONLY
                  </span>
                </div>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                  {activeZone.name}
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  <strong>States / Regions:</strong> {activeZone.statesCovered}
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  <strong>NCERT Identity Clue:</strong> {activeZone.boardClue}
                </p>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-2.5 text-[11px] text-amber-950 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200">
                  <strong>Exam Trap Alert:</strong> {activeZone.keyTrap}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                  Click Any Soil or Crop Belt (14 Official Identification Regions)
                </div>
                <div className="grid gap-1.5 sm:grid-cols-2 max-h-64 overflow-y-auto pr-1">
                  {MAP_ZONES.map((z) => (
                    <button
                      key={z.id}
                      type="button"
                      onClick={() => setSelectedZoneId(z.id)}
                      className={`text-left rounded-lg px-2.5 py-1.5 text-[11px] font-bold border transition cursor-pointer ${
                        selectedZoneId === z.id
                          ? 'border-emerald-600 bg-emerald-600 text-white'
                          : 'border-slate-200 bg-white text-slate-800 hover:border-emerald-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'
                      }`}
                    >
                      {z.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : mode === 'explore' ? (
            <div className="space-y-3">
              {activePin && (
                <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-4 space-y-2 dark:border-teal-900/60 dark:bg-teal-950/30">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-extrabold ${
                        CATEGORY_META[activePin.category].badgeBg
                      }`}
                    >
                      {activePin.examSection} • {activePin.subGroup}
                    </span>
                    <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-extrabold text-slate-800 border border-slate-200 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200">
                      {activePin.taskType}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                    {activePin.name}
                  </h4>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    <strong>State / Exact Location:</strong> {activePin.stateOrRegion}
                  </p>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    <strong>CBSE Exam Clue:</strong> {activePin.boardClue}
                  </p>
                  <div className="rounded-xl border border-indigo-200 bg-white/90 p-2.5 text-[11px] text-indigo-950 dark:border-indigo-900/60 dark:bg-slate-950 dark:text-indigo-200">
                    <strong>Blank-Map Plotting Anchor:</strong> {activePin.plottingAnchor}
                  </div>
                </div>
              )}

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                  Visible Pins ({visiblePins.length}) — Click on Map or List
                </div>
                {visiblePins.length === 0 ? (
                  <p className="text-xs text-slate-500 py-4 text-center">
                    No map pins match &ldquo;{searchTerm}&rdquo;. Try another city, dam, mineral, or port name.
                  </p>
                ) : (
                  <div className="grid gap-1.5 sm:grid-cols-2 max-h-60 overflow-y-auto pr-1">
                    {visiblePins.map((pin) => (
                      <button
                        key={pin.id}
                        type="button"
                        onClick={() => setSelectedPinId(pin.id)}
                        className={`text-left rounded-lg px-2.5 py-1.5 text-[11px] font-bold border transition cursor-pointer ${
                          activePin?.id === pin.id
                            ? 'border-teal-600 bg-teal-700 text-white'
                            : 'border-slate-200 bg-white text-slate-800 hover:border-teal-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'
                        }`}
                      >
                        <div className="truncate">{pin.name}</div>
                        <div
                          className={`text-[10px] font-normal truncate ${
                            activePin?.id === pin.id
                              ? 'text-teal-100'
                              : 'text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          {pin.stateOrRegion}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : mode === 'locate-drill' ? (
            <div className="space-y-3">
              {/* Progress Bar */}
              <div className="flex items-center justify-between rounded-xl bg-slate-100 px-3.5 py-2 text-xs font-bold dark:bg-slate-800">
                <span className="text-slate-700 dark:text-slate-200">
                  Prompt {drillIdx + 1} / {DRILL_QUESTIONS.length} ({currentDrill.examPart})
                </span>
                <span className="text-emerald-700 dark:text-emerald-400">
                  Score: {drillCorrectCount} / {Object.keys(drillAnswers).length}
                </span>
              </div>

              {/* Prompt Card */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3 dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug">
                  {currentDrill.prompt}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Click marker <strong>A–F directly on the India SVG map</strong> or choose its pin button below:
                </p>

                <div className="grid gap-1.5 sm:grid-cols-2">
                  {currentDrill.candidatePinIds.map((id) => {
                    const pin = MAP_PINS.find((p) => p.id === id);
                    if (!pin) return null;
                    const letter = candidateLetterMap[id];
                    const isPicked = currentDrillPick === id;
                    const isTarget = id === currentDrill.targetPinId;

                    let cls =
                      'border-slate-200 bg-white text-slate-800 hover:border-teal-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200';
                    if (currentDrillPick) {
                      if (isTarget) {
                        cls =
                          'border-emerald-600 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/50 dark:text-emerald-200';
                      } else if (isPicked) {
                        cls =
                          'border-rose-600 bg-rose-50 text-rose-950 dark:bg-rose-950/50 dark:text-rose-200';
                      } else {
                        cls =
                          'border-slate-200 bg-white/50 text-slate-400 dark:border-slate-800 dark:bg-slate-900/40';
                      }
                    }

                    return (
                      <button
                        key={id}
                        type="button"
                        disabled={Boolean(currentDrillPick)}
                        onClick={() => handleSelectPin(pin)}
                        className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-xs font-bold transition ${cls} ${
                          !currentDrillPick ? 'cursor-pointer' : 'cursor-default'
                        }`}
                      >
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[10px] font-extrabold text-white dark:bg-slate-700">
                          {letter}
                        </span>
                        <span className="truncate">
                          {currentDrillPick ? pin.name.split(' (')[0] : `Pin ${letter}`}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {currentDrillPick && (
                  <div
                    className={`rounded-xl border p-3 text-xs space-y-1 ${
                      currentDrillPick === currentDrill.targetPinId
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200'
                        : 'border-rose-300 bg-rose-50 text-rose-950 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-200'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-extrabold">
                      {currentDrillPick === currentDrill.targetPinId ? (
                        <>
                          <CheckCircle2 className="h-4 w-4 shrink-0" />
                          Spot-On Map Pin! Full Marks ({candidateLetterMap[currentDrill.targetPinId]}).
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4 shrink-0" />
                          Correct Pin is {candidateLetterMap[currentDrill.targetPinId]}:{' '}
                          {MAP_PINS.find((p) => p.id === currentDrill.targetPinId)?.name}
                        </>
                      )}
                    </div>
                    <p>{currentDrill.whyDecoysWrong}</p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={() => setDrillIdx((i) => (i > 0 ? i - 1 : DRILL_QUESTIONS.length - 1))}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    ← Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setDrillAnswers({});
                      setDrillIdx(0);
                    }}
                    className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 cursor-pointer dark:text-slate-400"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Reset Drill
                  </button>
                  <button
                    type="button"
                    onClick={() => setDrillIdx((i) => (i + 1) % DRILL_QUESTIONS.length)}
                    className="rounded-lg bg-teal-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-teal-800 cursor-pointer"
                  >
                    Next Prompt →
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 space-y-2 dark:border-amber-900/60 dark:bg-amber-950/30">
                <h4 className="text-sm sm:text-base font-extrabold text-amber-950 dark:text-amber-200">
                  {activeCluster.title}
                </h4>
                <p className="text-xs font-semibold text-amber-900/80 dark:text-amber-300">
                  {activeCluster.subtitle}
                </p>
                <div className="rounded-xl border border-amber-200 bg-white/90 p-3 text-xs text-slate-800 leading-relaxed dark:border-amber-900/50 dark:bg-slate-950 dark:text-slate-200">
                  <strong>Disambiguation Ladder:</strong> {activeCluster.memoryRule}
                </div>
              </div>

              {activePin && activeCluster.pinIds.includes(activePin.id) && (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs space-y-1 dark:border-slate-800 dark:bg-slate-950">
                  <div className="font-extrabold text-slate-900 dark:text-white">{activePin.name}</div>
                  <div className="text-slate-600 dark:text-slate-300">{activePin.plottingAnchor}</div>
                </div>
              )}

              <div className="grid gap-1.5 sm:grid-cols-2 max-h-52 overflow-y-auto pr-1">
                {visiblePins.map((pin) => (
                  <button
                    key={pin.id}
                    type="button"
                    onClick={() => setSelectedPinId(pin.id)}
                    className={`text-left rounded-lg px-2.5 py-1.5 text-[11px] font-bold border transition cursor-pointer ${
                      activePin?.id === pin.id
                        ? 'border-amber-600 bg-amber-600 text-white'
                        : 'border-slate-200 bg-white text-slate-800 hover:border-amber-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'
                    }`}
                  >
                    {pin.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
