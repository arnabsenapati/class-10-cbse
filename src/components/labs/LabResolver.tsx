import { LabWidgetId } from '../../types/curriculum';
import { AllelePairBuilder } from './AllelePairBuilder';
import { CbseQuizArena } from './CbseQuizArena';
import { CellToTraitExplorer } from './CellToTraitExplorer';
import { DihybridSimulator } from './DihybridSimulator';
import { EnglishLiteratureTrainerLab } from './EnglishLiteratureTrainerLab';
import { EnglishPoeticDevicesLab } from './EnglishPoeticDevicesLab';
import { HindiVyakaranLab } from './HindiVyakaranLab';
import { KavyaWordTrainerLab } from './KavyaWordTrainerLab';
import { MonohybridSimulator } from './MonohybridSimulator';
import { PeaTraitsExplorer } from './PeaTraitsExplorer';
import { PunnettTrainerLab } from './PunnettTrainerLab';
import { SexDeterminationLab } from './SexDeterminationLab';

interface LabResolverProps {
  labId: LabWidgetId;
  bestQuizScore?: { correct: number; total: number } | null;
  bestQuizScoresBySubject?: Record<string, { correct: number; total: number }>;
  onSaveQuizScore?: (correct: number, total: number, subjectSlug?: string) => void;
}

export function LabResolver({
  labId,
  bestQuizScore,
  bestQuizScoresBySubject,
  onSaveQuizScore,
}: LabResolverProps) {
  switch (labId) {
    case 'cell-to-trait':
      return <CellToTraitExplorer />;
    case 'allele-pair-builder':
      return <AllelePairBuilder />;
    case 'pea-traits-explorer':
      return <PeaTraitsExplorer />;
    case 'punnett-trainer':
      return <PunnettTrainerLab />;
    case 'monohybrid-simulator':
      return <MonohybridSimulator />;
    case 'dihybrid-simulator':
      return <DihybridSimulator />;
    case 'sex-determination-lab':
      return <SexDeterminationLab />;
    case 'kavya-word-flashcards':
      return <KavyaWordTrainerLab />;
    case 'hindi-vyakaran-lab':
      return <HindiVyakaranLab />;
    case 'hindi-kavya-quiz-arena':
      return (
        <CbseQuizArena
          subjectSlug="hindi"
          bestScore={bestQuizScoresBySubject?.hindi ?? null}
          onSaveScore={onSaveQuizScore}
        />
      );
    case 'english-quiz-arena':
      return (
        <CbseQuizArena
          subjectSlug="english"
          bestScore={bestQuizScoresBySubject?.english ?? null}
          onSaveScore={onSaveQuizScore}
        />
      );
    case 'english-poetic-devices-lab':
      return <EnglishPoeticDevicesLab />;
    case 'english-literature-trainer':
      return <EnglishLiteratureTrainerLab />;
    case 'english-grammar-lab':
      return (
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-5 text-xs sm:text-sm text-indigo-900 dark:border-indigo-900/60 dark:bg-indigo-950/30 dark:text-indigo-200">
          Interactive English Lab ({labId}) is scheduled for the upcoming milestone.
        </div>
      );
    case 'cbse-quiz-arena':
      return (
        <CbseQuizArena
          subjectSlug="biology"
          bestScore={bestQuizScoresBySubject?.biology ?? bestQuizScore ?? null}
          onSaveScore={onSaveQuizScore}
        />
      );
  }
}
