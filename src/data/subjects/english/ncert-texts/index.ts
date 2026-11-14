import type { NcertReferenceEntry } from './types';
import { FIRST_FLIGHT_PROSE_TEXTS } from './first-flight-prose-texts';
import { FIRST_FLIGHT_POETRY_TEXTS } from './first-flight-poetry-texts';
import { FOOTPRINTS_TEXTS } from './footprints-texts';

export type { NcertReferenceEntry, NcertReferenceSection } from './types';

export const NCERT_ENGLISH_TEXTS: Record<string, NcertReferenceEntry> = {
  ...FIRST_FLIGHT_PROSE_TEXTS,
  ...FIRST_FLIGHT_POETRY_TEXTS,
  ...FOOTPRINTS_TEXTS,
};
