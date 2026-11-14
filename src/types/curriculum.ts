export type LabWidgetId =
  | 'cell-to-trait'
  | 'allele-pair-builder'
  | 'pea-traits-explorer'
  | 'punnett-trainer'
  | 'monohybrid-simulator'
  | 'dihybrid-simulator'
  | 'sex-determination-lab'
  | 'cbse-quiz-arena';

export type DiagramId =
  | 'meiosis-halving'
  | 'dominant-masking'
  | 'blend-vs-lego'
  | 'foil-arcs'
  | 'monohybrid-visual'
  | 'dihybrid-visual';

export type CalloutVariant = 'analogy' | 'ncert' | 'tip' | 'trap' | 'law';

export type ContentBlock =
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'quick-summary';
      title: string;
      bullets: string[];
    }
  | {
      type: 'dig-deeper';
      title: string;
      summary: string;
      bullets?: string[];
    }
  | {
      type: 'visual-diagram';
      diagramId: DiagramId;
      title: string;
      caption?: string;
    }
  | {
      type: 'notebook-mistake';
      studentName: string;
      title: string;
      wrongWork: string;
      teacherFix: string;
      whyWrong: string;
    }
  | {
      type: 'checkpoint';
      prompt: string;
      options: { id: string; label: string; sublabel?: string }[];
      correctIds: string[];
      multiSelect?: boolean;
      successMsg: string;
      hintMsg: string;
    }
  | {
      type: 'callout';
      variant: CalloutVariant;
      title: string;
      body: string;
      bullets?: string[];
    }
  | {
      type: 'steps';
      title?: string;
      items: {
        label: string;
        detail: string;
        example?: string;
      }[];
    }
  | {
      type: 'table';
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | {
      type: 'key-points';
      title?: string;
      items: string[];
    }
  | {
      type: 'cross-flow';
      title: string;
      parents: string;
      gametes: string;
      f1: string;
      f1Selfing?: string;
      f2Summary?: string;
      ratios?: { label: string; value: string }[];
    }
  | {
      type: 'qa';
      marks: number;
      tag: 'NCERT' | 'CBSE Board Pattern' | 'Assertion-Reason' | 'Case-Based' | 'Numerical';
      question: string;
      answer: string;
      markingTip?: string;
    }
  | {
      type: 'lab';
      labId: LabWidgetId;
      title: string;
      caption?: string;
    };

export interface LessonSection {
  id: string;
  title: string;
  blocks: ContentBlock[];
}

export interface Subtopic {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  difficulty: 'Beginner' | 'Core CBSE' | 'Board Mastery';
  ncertSection: string;
  learningObjectives: string[];
  keywords: string[];
  sections: LessonSection[];
}

export interface Topic {
  id: string;
  slug: string;
  order: number;
  title: string;
  description: string;
  ncertChapter: string;
  subtopics: Subtopic[];
}

export interface Subject {
  id: string;
  slug: string;
  name: string;
  board: string;
  grade: string;
  description: string;
  accentColor: string;
  topics: Topic[];
}

export interface GlossaryTerm {
  id: string;
  term: string;
  symbol?: string;
  category: 'Basics' | 'Alleles & Genes' | 'Punnett & Crosses' | 'Mendel Laws' | 'CBSE Exam';
  simpleMeaning: string;
  ncertDefinition: string;
  example: string;
  subtopicPath: {
    subjectSlug: string;
    topicSlug: string;
    subtopicSlug: string;
    sectionId?: string;
  };
}

export interface QuizQuestion {
  id: string;
  topicSlug: string;
  subtopicTitle: string;
  type: 'mcq' | 'assertion-reason' | 'case-based';
  marks: number;
  casePassage?: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  commonMistake?: string;
}

export interface FlatSubtopicEntry {
  subject: Subject;
  topic: Topic;
  subtopic: Subtopic;
  path: string;
  index: number;
}

export type SearchResultKind = 'subject' | 'topic' | 'subtopic' | 'section' | 'glossary' | 'quiz';

export interface SearchHit {
  id: string;
  kind: SearchResultKind;
  title: string;
  breadcrumb: string;
  snippet: string;
  path: string;
  score: number;
  badge: string;
}
