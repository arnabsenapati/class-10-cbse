import {
  ALL_GLOSSARY_TERMS,
  ALL_QUIZ_QUESTIONS,
  SUBJECTS,
  buildSubtopicPath,
} from '../data/registry';
import { ContentBlock, SearchHit, SearchResultKind } from '../types/curriculum';

interface IndexedDocument {
  id: string;
  kind: SearchResultKind;
  title: string;
  breadcrumb: string;
  path: string;
  badge: string;
  subjectSlug: string;
  topicSlug: string;
  keywordsText: string;
  bodyText: string;
}

function stripMarkdown(input: string): string {
  return input
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractBlockText(block: ContentBlock): string {
  switch (block.type) {
    case 'paragraph':
      return stripMarkdown(block.text);
    case 'quick-summary':
      return stripMarkdown([block.title, ...block.bullets].join(' '));
    case 'dig-deeper':
      return stripMarkdown(
        [block.title, block.summary, ...(block.bullets ?? [])].join(' ')
      );
    case 'visual-diagram':
      return stripMarkdown(`${block.title} ${block.caption ?? ''}`);
    case 'notebook-mistake':
      return stripMarkdown(
        `${block.studentName} ${block.title} ${block.wrongWork} ${block.teacherFix} ${block.whyWrong}`
      );
    case 'checkpoint':
      return stripMarkdown(
        [
          block.prompt,
          ...block.options.map((o) => `${o.label} ${o.sublabel ?? ''}`),
          block.successMsg,
          block.hintMsg,
        ].join(' ')
      );
    case 'callout':
      return stripMarkdown(
        [block.title, block.body, ...(block.bullets ?? [])].join(' ')
      );
    case 'steps':
      return stripMarkdown(
        [
          block.title ?? '',
          ...block.items.map((i) => `${i.label} ${i.detail} ${i.example ?? ''}`),
        ].join(' ')
      );
    case 'table':
      return stripMarkdown(
        [
          block.caption ?? '',
          ...block.headers,
          ...block.rows.flat(),
        ].join(' ')
      );
    case 'key-points':
      return stripMarkdown([block.title ?? '', ...block.items].join(' '));
    case 'cross-flow':
      return stripMarkdown(
        [
          block.title,
          block.parents,
          block.gametes,
          block.f1,
          block.f1Selfing ?? '',
          block.f2Summary ?? '',
          ...(block.ratios ?? []).map((r) => `${r.label} ${r.value}`),
        ].join(' ')
      );
    case 'qa':
      return stripMarkdown(
        `${block.tag} ${block.question} ${block.answer} ${block.markingTip ?? ''}`
      );
    case 'poetic-stanza':
      return stripMarkdown(
        [
          block.stanzaLabel,
          block.stanzaText,
          block.dialectBadge ?? '',
          block.prasang,
          block.bhavarthHindi,
          block.englishHelper,
          ...(block.poeticDevices ?? []),
          ...block.words.map(
            (w) =>
              `${w.word} ${w.hindiMeaning ?? ''} ${w.englishMeaning} ${w.synonym ?? ''} ${
                w.grammarNote ?? ''
              } ${w.exampleSentence ?? ''}`
          ),
        ].join(' ')
      );
    case 'english-transcript':
      return stripMarkdown(
        [
          block.title,
          block.intro ?? '',
          ...block.segments.map(
            (s) => `${s.label} ${s.hindiOriginal} ${s.englishText}`
          ),
        ].join(' ')
      );
    case 'chapter-word-bank':
      return stripMarkdown(
        [
          block.title,
          block.intro ?? '',
          ...(block.extraWords ?? []).map(
            (w) =>
              `${w.word} ${w.hindiMeaning ?? ''} ${w.englishMeaning} ${w.synonym ?? ''} ${
                w.grammarNote ?? ''
              } ${w.exampleSentence ?? ''}`
          ),
        ].join(' ')
      );
    case 'ncert-reference':
      return stripMarkdown(`${block.title} ${block.bookName} ${block.note ?? ''}`);
    case 'muhavre-list':
      return stripMarkdown(
        [
          block.title,
          block.note ?? '',
          ...block.items.map(
            (m) =>
              `${m.idiom} ${m.hindiMeaning} ${m.englishMeaning} ${m.sourceLine ?? ''} ${
                m.examSentence
              }`
          ),
        ].join(' ')
      );
    case 'samas-list':
      return stripMarkdown(
        [
          block.title,
          block.note ?? '',
          ...block.items.map(
            (s) =>
              `${s.samastPad} ${s.vigrah} ${s.samasType} ${s.englishMeaning} ${
                s.examTrap ?? ''
              }`
          ),
        ].join(' ')
      );
    case 'writing-sample':
      return stripMarkdown(
        [
          block.badge,
          block.title,
          block.prompt,
          block.centerHeading ?? '',
          block.subHeading ?? '',
          block.sloganOrHighlight ?? '',
          ...(block.metadataLines ?? []).map((m) => `${m.label} ${m.value}`),
          block.body,
          ...(block.footerLines ?? []),
          block.examinerNote ?? '',
        ].join(' ')
      );
    case 'lab':
      return stripMarkdown(`${block.title} ${block.caption ?? ''}`);
  }
}

function buildSearchIndex(): IndexedDocument[] {
  const docs: IndexedDocument[] = [];

  for (const subject of SUBJECTS) {
    docs.push({
      id: `subject:${subject.id}`,
      kind: 'subject',
      title: `${subject.name} (${subject.board})`,
      breadcrumb: subject.name,
      path: `/subject/${subject.slug}`,
      badge: 'Subject',
      subjectSlug: subject.slug,
      topicSlug: '',
      keywordsText: `${subject.name} ${subject.board} ${subject.grade}`.toLowerCase(),
      bodyText: stripMarkdown(subject.description),
    });

    for (const topic of subject.topics) {
      docs.push({
        id: `topic:${topic.id}`,
        kind: 'topic',
        title: topic.title,
        breadcrumb: `${subject.name} › Topic ${topic.order}`,
        path: `/subject/${subject.slug}/${topic.slug}`,
        badge: 'Topic',
        subjectSlug: subject.slug,
        topicSlug: topic.slug,
        keywordsText: `${topic.title} ${topic.ncertChapter}`.toLowerCase(),
        bodyText: stripMarkdown(topic.description),
      });

      for (const subtopic of topic.subtopics) {
        const subPath = buildSubtopicPath(subject.slug, topic.slug, subtopic.slug);
        const allSectionsText = subtopic.sections
          .map((sec) => `${sec.title} ${sec.blocks.map(extractBlockText).join(' ')}`)
          .join(' ');

        docs.push({
          id: `subtopic:${subtopic.id}`,
          kind: 'subtopic',
          title: subtopic.title,
          breadcrumb: `${subject.name} › ${topic.title} › ${subtopic.title}`,
          path: subPath,
          badge: 'Subtopic',
          subjectSlug: subject.slug,
          topicSlug: topic.slug,
          keywordsText: `${subtopic.title} ${subtopic.subtitle} ${subtopic.keywords.join(' ')}`.toLowerCase(),
          bodyText: stripMarkdown(`${subtopic.subtitle} ${allSectionsText}`),
        });

        for (const section of subtopic.sections) {
          const secText = section.blocks.map(extractBlockText).join(' ');
          docs.push({
            id: `section:${subtopic.id}:${section.id}`,
            kind: 'section',
            title: section.title,
            breadcrumb: `${subject.name} › ${topic.title} › ${subtopic.title}`,
            path: `${subPath}#${section.id}`,
            badge: 'Section',
            subjectSlug: subject.slug,
            topicSlug: topic.slug,
            keywordsText: `${section.title} ${subtopic.title}`.toLowerCase(),
            bodyText: secText,
          });
        }
      }
    }
  }

  for (const term of ALL_GLOSSARY_TERMS) {
    const path = `${buildSubtopicPath(
      term.subtopicPath.subjectSlug,
      term.subtopicPath.topicSlug,
      term.subtopicPath.subtopicSlug
    )}${term.subtopicPath.sectionId ? `#${term.subtopicPath.sectionId}` : ''}`;

    docs.push({
      id: `glossary:${term.id}`,
      kind: 'glossary',
      title: `${term.term}${term.symbol ? ` (${term.symbol})` : ''}`,
      breadcrumb: `Glossary › ${term.category}`,
      path,
      badge: 'Key Term',
      subjectSlug: term.subtopicPath.subjectSlug,
      topicSlug: term.subtopicPath.topicSlug,
      keywordsText: `${term.term} ${term.symbol ?? ''} ${term.category} ${
        term.englishMeaning ?? ''
      } ${term.grammarNote ?? ''}`.toLowerCase(),
      bodyText: stripMarkdown(
        `${term.simpleMeaning} ${term.englishMeaning ?? ''} ${
          term.grammarNote ?? ''
        } ${term.ncertDefinition} Example: ${term.example}`
      ),
    });
  }

  for (const q of ALL_QUIZ_QUESTIONS) {
    const subj = q.subjectSlug ?? 'biology';
    const isHindi = subj === 'hindi';
    const isEnglish = subj === 'english';
    const quizPath = isEnglish
      ? q.topicSlug === 'first-flight-poetry'
        ? `/subject/english/first-flight-poetry/poetry-board-mastery#english-poetry-quiz-section`
        : q.topicSlug === 'footprints-without-feet'
        ? `/subject/english/footprints-without-feet/footprints-board-mastery#english-footprints-quiz-section`
        : q.topicSlug === 'english-writing-skills'
        ? `/subject/english/english-writing-skills/exam-strategy-and-countdown#english-full-quiz-section`
        : `/subject/english/first-flight-prose/first-flight-prose-mastery#english-prose-quiz-section`
      : isHindi
      ? q.topicSlug === 'sparsh-gadyakhand'
        ? `/subject/hindi/sparsh-gadyakhand/gadyakhand-board-mastery#hindi-gadya-quiz-section`
        : q.topicSlug === 'sanchayan-bhag-2'
        ? `/subject/hindi/sanchayan-bhag-2/sanchayan-board-mastery#hindi-sanchayan-quiz-section`
        : q.topicSlug === 'apathit-aur-vyakaran'
        ? `/subject/hindi/apathit-aur-vyakaran/vyakaran-board-mastery#hindi-vyakaran-quiz-section`
        : q.topicSlug === 'rachanatmak-lekhan'
        ? `/subject/hindi/rachanatmak-lekhan/lekhan-board-mastery#hindi-full-syllabus-quiz-section`
        : `/subject/hindi/sparsh-kavyakhand/kavyakhand-board-mastery#hindi-kavya-quiz-section`
      : `/subject/biology/cbse-exam-mastery/cbse-traps-question-bank-and-quiz#interactive-cbse-quiz-section`;

    docs.push({
      id: `quiz:${q.id}`,
      kind: 'quiz',
      title: stripMarkdown(q.question).slice(0, 95) + (q.question.length > 95 ? '...' : ''),
      breadcrumb: isEnglish
        ? `English (Code 184) › Quiz Arena › ${q.subtopicTitle}`
        : isHindi
        ? `Hindi (Course B) › स्पर्श Quiz Arena › ${q.subtopicTitle}`
        : `Biology › CBSE Quiz Arena › ${q.subtopicTitle}`,
      path: quizPath,
      badge: 'CBSE Quiz',
      subjectSlug: subj,
      topicSlug: q.topicSlug,
      keywordsText: `${q.subtopicTitle} ${q.type}`.toLowerCase(),
      bodyText: stripMarkdown(`${q.casePassage ?? ''} ${q.question} ${q.options.join(' ')} ${q.explanation}`),
    });
  }

  return docs;
}

const INDEXED_DOCS = buildSearchIndex();

function buildSnippet(text: string, tokens: string[], maxLen = 155): string {
  const lower = text.toLowerCase();
  let bestIdx = -1;
  for (const tok of tokens) {
    const idx = lower.indexOf(tok);
    if (idx !== -1 && (bestIdx === -1 || idx < bestIdx)) {
      bestIdx = idx;
    }
  }

  if (bestIdx <= 0) {
    return text.length > maxLen ? `${text.slice(0, maxLen).trim()}...` : text;
  }

  const start = Math.max(0, bestIdx - 40);
  const slice = text.slice(start, start + maxLen).trim();
  const prefix = start > 0 ? '...' : '';
  const suffix = start + maxLen < text.length ? '...' : '';
  return `${prefix}${slice}${suffix}`;
}

export interface SearchFilterOptions {
  kind?: SearchResultKind | 'all';
  subjectSlug?: string;
  limit?: number;
}

export function searchCurriculum(
  rawQuery: string,
  options: SearchFilterOptions = {}
): SearchHit[] {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return [];

  const tokens = query.split(/\s+/).filter(Boolean);
  const { kind = 'all', subjectSlug, limit = 30 } = options;

  const hits: SearchHit[] = [];

  for (const doc of INDEXED_DOCS) {
    if (kind !== 'all' && doc.kind !== kind) continue;
    if (subjectSlug && doc.subjectSlug !== subjectSlug) continue;

    const titleLower = doc.title.toLowerCase();
    const breadcrumbLower = doc.breadcrumb.toLowerCase();
    const bodyLower = doc.bodyText.toLowerCase();
    const combined = `${titleLower} ${doc.keywordsText} ${breadcrumbLower} ${bodyLower}`;

    // Require all tokens to match somewhere in the indexed document
    const allMatch = tokens.every((tok) => combined.includes(tok));
    if (!allMatch) continue;

    let score = 0;
    if (titleLower === query) score += 120;
    else if (titleLower.includes(query)) score += 65;

    for (const tok of tokens) {
      if (titleLower.includes(tok)) score += 30;
      if (doc.keywordsText.includes(tok)) score += 18;
      if (breadcrumbLower.includes(tok)) score += 10;
      if (bodyLower.includes(tok)) score += 5;
    }

    // Slight priority ordering by hierarchy clarity
    const kindBonus: Record<SearchResultKind, number> = {
      subtopic: 16,
      glossary: 14,
      topic: 12,
      subject: 10,
      section: 6,
      quiz: 4,
    };
    score += kindBonus[doc.kind];

    hits.push({
      id: doc.id,
      kind: doc.kind,
      title: doc.title,
      breadcrumb: doc.breadcrumb,
      snippet: buildSnippet(doc.bodyText, tokens),
      path: doc.path,
      score,
      badge: doc.badge,
    });
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
}

export const POPULAR_SEARCH_SUGGESTIONS = [
  'A Letter to God',
  'Nelson Mandela',
  'Anne Frank',
  'Glimpses of India',
  'Madam Rides the Bus',
  'The Proposal',
  'Irony',
  'हरिहर काका',
  'टोपी शुक्ला',
  'पदबंध',
  'समास',
  'मुहावरे',
  'कबीर साखी',
  'allele',
  'punnett square',
  '9:3:3:1',
];
