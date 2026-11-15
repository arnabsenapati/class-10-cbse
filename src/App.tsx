import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { SubtopicView } from './components/content/SubtopicView';
import { GlossaryPage } from './components/pages/GlossaryPage';
import { HomeDashboard } from './components/pages/HomeDashboard';
import { SearchPage } from './components/pages/SearchPage';
import { SubjectOverview } from './components/pages/SubjectOverview';
import { TopicOverview } from './components/pages/TopicOverview';
import { useOfflineProgress } from './hooks/useOfflineProgress';
import { usePwaStatus } from './hooks/usePwaStatus';

function SubtopicRoute({
  completedSubtopics,
  bookmarkedSubtopics,
  bestQuizScore,
  bestQuizScoresBySubject,
  rightRailCollapsed,
  isWideMode,
  onToggleComplete,
  onToggleBookmark,
  onVisitPath,
  onSaveQuizScore,
  onToggleRightRail,
  onToggleWideMode,
}: {
  completedSubtopics: string[];
  bookmarkedSubtopics: string[];
  bestQuizScore?: { correct: number; total: number } | null;
  bestQuizScoresBySubject?: Record<string, { correct: number; total: number }>;
  rightRailCollapsed: boolean;
  isWideMode: boolean;
  onToggleComplete: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onVisitPath: (path: string) => void;
  onSaveQuizScore: (correct: number, total: number, subjectSlug?: string) => void;
  onToggleRightRail: () => void;
  onToggleWideMode: () => void;
}) {
  const { subjectSlug = '', topicSlug = '', subtopicSlug = '' } = useParams();
  return (
    <SubtopicView
      subjectSlug={subjectSlug}
      topicSlug={topicSlug}
      subtopicSlug={subtopicSlug}
      completedSubtopics={completedSubtopics}
      bookmarkedSubtopics={bookmarkedSubtopics}
      bestQuizScore={bestQuizScore}
      bestQuizScoresBySubject={bestQuizScoresBySubject}
      rightRailCollapsed={rightRailCollapsed}
      isWideMode={isWideMode}
      onToggleComplete={onToggleComplete}
      onToggleBookmark={onToggleBookmark}
      onVisitPath={onVisitPath}
      onSaveQuizScore={onSaveQuizScore}
      onToggleRightRail={onToggleRightRail}
      onToggleWideMode={onToggleWideMode}
    />
  );
}

export function App() {
  const {
    state,
    toggleCompleted,
    toggleBookmark,
    recordVisitedPath,
    recordQuizScore,
    toggleTheme,
    toggleAiTeacher,
    toggleLeftSidebar,
    toggleRightRail,
    toggleWideMode,
    resetProgress,
  } = useOfflineProgress();

  const pwa = usePwaStatus();
  const isWideMode = state.leftSidebarCollapsed && state.rightRailCollapsed;

  return (
    <BrowserRouter>
      <AppShell
        completedSubtopics={state.completedSubtopics}
        theme={state.theme}
        aiTeacherEnabled={state.aiTeacherEnabled}
        leftSidebarCollapsed={state.leftSidebarCollapsed}
        rightRailCollapsed={state.rightRailCollapsed}
        isOnline={pwa.isOnline}
        offlineReady={pwa.offlineReady}
        needRefresh={pwa.needRefresh}
        canInstall={pwa.canInstall}
        onToggleTheme={toggleTheme}
        onToggleAiTeacher={toggleAiTeacher}
        onToggleLeftSidebar={toggleLeftSidebar}
        onToggleWideMode={toggleWideMode}
        onPromptInstall={pwa.promptInstall}
        onApplyUpdate={pwa.applyUpdate}
      >
        <Routes>
          <Route
            path="/"
            element={
              <HomeDashboard
                progress={state}
                isOnline={pwa.isOnline}
                offlineReady={pwa.offlineReady}
                canInstall={pwa.canInstall}
                onPromptInstall={pwa.promptInstall}
                onResetProgress={resetProgress}
              />
            }
          />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route
            path="/subject/:subjectSlug"
            element={
              <SubjectOverview completedSubtopics={state.completedSubtopics} />
            }
          />
          <Route
            path="/subject/:subjectSlug/:topicSlug"
            element={
              <TopicOverview completedSubtopics={state.completedSubtopics} />
            }
          />
          <Route
            path="/subject/:subjectSlug/:topicSlug/:subtopicSlug"
            element={
              <SubtopicRoute
                completedSubtopics={state.completedSubtopics}
                bookmarkedSubtopics={state.bookmarkedSubtopics}
                bestQuizScore={state.bestQuizScore}
                bestQuizScoresBySubject={state.bestQuizScoresBySubject}
                rightRailCollapsed={state.rightRailCollapsed}
                isWideMode={isWideMode}
                onToggleComplete={toggleCompleted}
                onToggleBookmark={toggleBookmark}
                onVisitPath={recordVisitedPath}
                onSaveQuizScore={recordQuizScore}
                onToggleRightRail={toggleRightRail}
                onToggleWideMode={toggleWideMode}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
