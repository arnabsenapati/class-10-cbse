import { LabWidgetId } from '../../types/curriculum';
import { AllelePairBuilder } from './AllelePairBuilder';
import { Bio3dDnaAndEcoPyramidLab } from './Bio3dDnaAndEcoPyramidLab';
import { BioLifeProcessesAnimatorLab } from './BioLifeProcessesAnimatorLab';
import { BioNeuroEndocrineLab } from './BioNeuroEndocrineLab';
import { BioReproductionLab } from './BioReproductionLab';
import { CbseQuizArena } from './CbseQuizArena';
import { CellToTraitExplorer } from './CellToTraitExplorer';
import { Chemistry3dMoleculesLab } from './Chemistry3dMoleculesLab';
import { ChemistryMetallurgyIonicLab } from './ChemistryMetallurgyIonicLab';
import { ChemistryReactionBenchLab } from './ChemistryReactionBenchLab';
import { DihybridSimulator } from './DihybridSimulator';
import { EnglishGrammarLab } from './EnglishGrammarLab';
import { EnglishLiteratureTrainerLab } from './EnglishLiteratureTrainerLab';
import { EnglishPoeticDevicesLab } from './EnglishPoeticDevicesLab';
import { HindiVyakaranLab } from './HindiVyakaranLab';
import { KavyaWordTrainerLab } from './KavyaWordTrainerLab';
import { MathEndlessDrillLab } from './MathEndlessDrillLab';
import { MathSillyMistakeClinicLab } from './MathSillyMistakeClinicLab';
import { MonohybridSimulator } from './MonohybridSimulator';
import { PeaTraitsExplorer } from './PeaTraitsExplorer';
import { PhysicsCircuitSimulatorLab } from './PhysicsCircuitSimulatorLab';
import { PhysicsMagnetism3dLab } from './PhysicsMagnetism3dLab';
import { PhysicsOpticsBenchLab } from './PhysicsOpticsBenchLab';
import { PunnettTrainerLab } from './PunnettTrainerLab';
import { SexDeterminationLab } from './SexDeterminationLab';
import { SstIndiaMapLab } from './SstIndiaMapLab';
import { SstTimelineAndMatcherLab } from './SstTimelineAndMatcherLab';

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
    case 'bio-life-processes-animator':
      return <BioLifeProcessesAnimatorLab />;
    case 'bio-neuro-endocrine-lab':
      return <BioNeuroEndocrineLab />;
    case 'bio-reproduction-3d-lab':
      return <BioReproductionLab />;
    case 'bio-3d-dna-eco-pyramid':
      return <Bio3dDnaAndEcoPyramidLab />;
    case 'physics-optics-bench':
      return <PhysicsOpticsBenchLab />;
    case 'physics-circuit-simulator':
      return <PhysicsCircuitSimulatorLab />;
    case 'physics-magnetism-3d':
      return <PhysicsMagnetism3dLab />;
    case 'physics-quiz-arena':
      return (
        <CbseQuizArena
          subjectSlug="physics"
          bestScore={bestQuizScoresBySubject?.physics ?? null}
          onSaveScore={onSaveQuizScore}
        />
      );
    case 'chemistry-reaction-bench':
      return <ChemistryReactionBenchLab />;
    case 'chemistry-metallurgy-ionic-lab':
      return <ChemistryMetallurgyIonicLab />;
    case 'chemistry-3d-molecules':
      return <Chemistry3dMoleculesLab />;
    case 'chemistry-quiz-arena':
      return (
        <CbseQuizArena
          subjectSlug="chemistry"
          bestScore={bestQuizScoresBySubject?.chemistry ?? null}
          onSaveScore={onSaveQuizScore}
        />
      );
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
      return <EnglishGrammarLab />;
    case 'sst-quiz-arena':
      return (
        <CbseQuizArena
          subjectSlug="social-science"
          bestScore={bestQuizScoresBySubject?.['social-science'] ?? null}
          onSaveScore={onSaveQuizScore}
        />
      );
    case 'sst-timeline-lab':
      return <SstTimelineAndMatcherLab />;
    case 'sst-india-map-lab':
      return <SstIndiaMapLab />;
    case 'math-endless-drill':
      return <MathEndlessDrillLab />;
    case 'math-silly-mistake-clinic':
      return <MathSillyMistakeClinicLab />;
    case 'math-quiz-arena':
      return (
        <CbseQuizArena
          subjectSlug="mathematics"
          bestScore={bestQuizScoresBySubject?.mathematics ?? null}
          onSaveScore={onSaveQuizScore}
        />
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
