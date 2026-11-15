import { FlatSubtopicEntry, Subject, Subtopic, Topic } from '../types/curriculum';
import { biologySubject } from './subjects/biology';
import { biologyGlossary, biologyQuizBank } from './subjects/biology/glossary';
import { chemistrySubject } from './subjects/chemistry';
import { chemistryGlossary, chemistryQuizBank } from './subjects/chemistry/glossary';
import { englishSubject } from './subjects/english';
import { englishGlossary, englishQuizBank } from './subjects/english/glossary';
import { hindiSubject } from './subjects/hindi';
import { hindiGlossary, hindiQuizBank } from './subjects/hindi/glossary';
import { mathematicsSubject } from './subjects/mathematics';
import { mathGlossary, mathQuizBank } from './subjects/mathematics/glossary';
import { physicsSubject } from './subjects/physics';
import { physicsGlossary, physicsQuizBank } from './subjects/physics/glossary';
import { socialScienceSubject } from './subjects/social-science';
import { sstGlossary, sstQuizBank } from './subjects/social-science/glossary';

/**
 * Central Modular Registry:
 * Add new Class 10 subjects here following Subject > Topic > Subtopic structure.
 */
export const SUBJECTS: Subject[] = [
  physicsSubject,
  chemistrySubject,
  biologySubject,
  mathematicsSubject,
  socialScienceSubject,
  englishSubject,
  hindiSubject,
];

export const ALL_GLOSSARY_TERMS = [
  ...physicsGlossary,
  ...chemistryGlossary,
  ...biologyGlossary,
  ...mathGlossary,
  ...sstGlossary,
  ...englishGlossary,
  ...hindiGlossary,
];
export const ALL_QUIZ_QUESTIONS = [
  ...physicsQuizBank,
  ...chemistryQuizBank,
  ...biologyQuizBank,
  ...mathQuizBank,
  ...sstQuizBank,
  ...englishQuizBank,
  ...hindiQuizBank,
];

export function buildSubtopicPath(
  subjectSlug: string,
  topicSlug: string,
  subtopicSlug: string
): string {
  return `/subject/${subjectSlug}/${topicSlug}/${subtopicSlug}`;
}

export function getSubjectBySlug(subjectSlug: string): Subject | undefined {
  return SUBJECTS.find((s) => s.slug === subjectSlug);
}

export function getTopicBySlugs(
  subjectSlug: string,
  topicSlug: string
): { subject: Subject; topic: Topic } | undefined {
  const subject = getSubjectBySlug(subjectSlug);
  if (!subject) return undefined;
  const topic = subject.topics.find((t) => t.slug === topicSlug);
  if (!topic) return undefined;
  return { subject, topic };
}

export function getSubtopicBySlugs(
  subjectSlug: string,
  topicSlug: string,
  subtopicSlug: string
): { subject: Subject; topic: Topic; subtopic: Subtopic } | undefined {
  const found = getTopicBySlugs(subjectSlug, topicSlug);
  if (!found) return undefined;
  const subtopic = found.topic.subtopics.find((st) => st.slug === subtopicSlug);
  if (!subtopic) return undefined;
  return { ...found, subtopic };
}

export function getFlattenedSubtopics(subjectSlug?: string): FlatSubtopicEntry[] {
  const entries: FlatSubtopicEntry[] = [];
  const list = subjectSlug ? SUBJECTS.filter((s) => s.slug === subjectSlug) : SUBJECTS;
  for (const subject of list) {
    for (const topic of subject.topics) {
      for (const subtopic of topic.subtopics) {
        entries.push({
          subject,
          topic,
          subtopic,
          path: buildSubtopicPath(subject.slug, topic.slug, subtopic.slug),
          index: entries.length,
        });
      }
    }
  }
  return entries;
}

export function getAdjacentSubtopics(
  subjectSlug: string,
  topicSlug: string,
  subtopicSlug: string
): { prev?: FlatSubtopicEntry; next?: FlatSubtopicEntry; current?: FlatSubtopicEntry } {
  const flat = getFlattenedSubtopics(subjectSlug);
  const currentPath = buildSubtopicPath(subjectSlug, topicSlug, subtopicSlug);
  const idx = flat.findIndex((item) => item.path === currentPath);
  if (idx === -1) return {};
  return {
    current: flat[idx],
    prev: idx > 0 ? flat[idx - 1] : undefined,
    next: idx < flat.length - 1 ? flat[idx + 1] : undefined,
  };
}
