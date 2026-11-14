export type LabWidgetId =
  | 'cell-to-trait'
  | 'allele-pair-builder'
  | 'pea-traits-explorer'
  | 'punnett-trainer'
  | 'monohybrid-simulator'
  | 'dihybrid-simulator'
  | 'sex-determination-lab'
  | 'cbse-quiz-arena'
  | 'kavya-word-flashcards'
  | 'hindi-kavya-quiz-arena'
  | 'hindi-vyakaran-lab'
  | 'english-quiz-arena'
  | 'english-poetic-devices-lab'
  | 'english-literature-trainer'
  | 'english-grammar-lab';

export interface WordAnnotation {
  word: string;
  hindiMeaning?: string;
  englishMeaning: string;
  synonym?: string;
  grammarNote?: string;
  exampleSentence?: string;
}

export interface TranscriptSegment {
  label: string;
  hindiOriginal: string;
  englishText: string;
}

export interface MuhavraItem {
  idiom: string;
  hindiMeaning: string;
  englishMeaning: string;
  sourceLine?: string;
  examSentence: string;
}

export interface SamasItem {
  samastPad: string;
  vigrah: string;
  samasType: string;
  englishMeaning: string;
  examTrap?: string;
}

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
      tag:
        | 'NCERT'
        | 'CBSE Board Pattern'
        | 'Assertion-Reason'
        | 'Case-Based'
        | 'Numerical'
        | 'NCERT प्रश्न-अभ्यास'
        | 'पठित काव्यांश'
        | 'पठित गद्यांश'
        | 'संचयन मूल्यपरक'
        | 'व्यावहारिक व्याकरण'
        | 'रचनात्मक लेखन प्रारूप'
        | 'मूल्यपरक प्रश्न (Competency)'
        | 'RTC Extract (5 Marks)'
        | 'NCERT Oral Comprehension'
        | 'NCERT Thinking About Text'
        | 'Short Answer (40–50 Words)'
        | 'Competency / Cross-Chapter (6 Marks)'
        | 'Title & Theme Justification'
        | 'Thinking About Language'
        | 'Formal Writing Model';
      question: string;
      answer: string;
      markingTip?: string;
    }
  | {
      type: 'poetic-stanza';
      lang?: 'hi' | 'en';
      passageMode?: 'verse' | 'prose';
      stanzaLabel: string;
      stanzaText: string;
      dialectBadge?: string;
      prasang: string;
      bhavarthHindi: string;
      englishHelper: string;
      poeticDevices?: string[];
      words: WordAnnotation[];
    }
  | {
      type: 'writing-sample';
      lang?: 'hi' | 'en';
      formatType:
        | 'anuchchhed'
        | 'patra'
        | 'suchna'
        | 'vigyapan'
        | 'email'
        | 'laghukatha'
        | 'formal-letter'
        | 'analytical-paragraph';
      badge: string;
      title: string;
      prompt: string;
      wordTarget: string;
      marksSplit: string;
      metadataLines?: { label: string; value: string }[];
      centerHeading?: string;
      subHeading?: string;
      body: string;
      sloganOrHighlight?: string;
      footerLines?: string[];
      examinerNote?: string;
    }
  | {
      type: 'english-transcript';
      title: string;
      intro?: string;
      segments: TranscriptSegment[];
    }
  | {
      type: 'chapter-word-bank';
      lang?: 'hi' | 'en';
      title: string;
      intro?: string;
      extraWords?: WordAnnotation[];
    }
  | {
      type: 'ncert-reference';
      chapterKey: string;
      title: string;
      bookName: 'First Flight — Prose' | 'First Flight — Poetry' | 'Footprints without Feet';
      pdfPath: string;
      pdfStartPage: number;
      pdfEndPage?: number;
      note?: string;
    }
  | {
      type: 'muhavre-list';
      title: string;
      note?: string;
      items: MuhavraItem[];
    }
  | {
      type: 'samas-list';
      title: string;
      note?: string;
      items: SamasItem[];
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
  category:
    | 'Basics'
    | 'Alleles & Genes'
    | 'Punnett & Crosses'
    | 'Mendel Laws'
    | 'CBSE Exam'
    | 'सधुक्कड़ी व ब्रज शब्द'
    | 'तत्सम व साहित्यिक शब्द'
    | 'उर्दू-फ़ारसी काव्य शब्द'
    | 'काव्य-प्रतीक व अलंकार'
    | 'गद्य व कथा शब्दावली'
    | 'व्याकरण व लेखन शब्दावली'
    | 'Poetic & Literary Devices'
    | 'First Flight — Prose Vocab'
    | 'First Flight — Poetry Vocab'
    | 'Footprints — Supplementary Vocab'
    | 'Tone & Mood Descriptors'
    | 'Grammar & Writing Rules';
  simpleMeaning: string;
  englishMeaning?: string;
  grammarNote?: string;
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
  subjectSlug?: string;
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
