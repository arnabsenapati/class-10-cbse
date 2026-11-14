import { LabWidgetId } from '../../types/curriculum';
import { AllelePairBuilder } from './AllelePairBuilder';
import { CbseQuizArena } from './CbseQuizArena';
import { CellToTraitExplorer } from './CellToTraitExplorer';
import { DihybridSimulator } from './DihybridSimulator';
import { MonohybridSimulator } from './MonohybridSimulator';
import { PeaTraitsExplorer } from './PeaTraitsExplorer';
import { PunnettTrainerLab } from './PunnettTrainerLab';
import { SexDeterminationLab } from './SexDeterminationLab';

interface LabResolverProps {
  labId: LabWidgetId;
  bestQuizScore?: { correct: number; total: number } | null;
  onSaveQuizScore?: (correct: number, total: number) => void;
}

export function LabResolver({
  labId,
  bestQuizScore,
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
    case 'cbse-quiz-arena':
      return (
        <CbseQuizArena
          bestScore={bestQuizScore}
          onSaveScore={onSaveQuizScore}
        />
      );
  }
}
