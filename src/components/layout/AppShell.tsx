import { ReactNode, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { SidebarTree } from './SidebarTree';
import { TopBar } from './TopBar';
import { SearchModal } from './SearchModal';
import { WordSelectionAssistant } from '../content/WordSelectionAssistant';

interface AppShellProps {
  children: ReactNode;
  completedSubtopics: string[];
  theme: 'light' | 'dark';
  aiTeacherEnabled: boolean;
  leftSidebarCollapsed: boolean;
  rightRailCollapsed: boolean;
  isOnline: boolean;
  offlineReady: boolean;
  needRefresh: boolean;
  canInstall: boolean;
  onToggleTheme: () => void;
  onToggleAiTeacher: () => void;
  onToggleLeftSidebar: () => void;
  onToggleWideMode: () => void;
  onPromptInstall: () => void;
  onApplyUpdate: () => void;
}

export function AppShell({
  children,
  completedSubtopics,
  theme,
  aiTeacherEnabled,
  leftSidebarCollapsed,
  rightRailCollapsed,
  isOnline,
  offlineReady,
  needRefresh,
  canInstall,
  onToggleTheme,
  onToggleAiTeacher,
  onToggleLeftSidebar,
  onToggleWideMode,
  onPromptInstall,
  onApplyUpdate,
}: AppShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const mainRef = useRef<HTMLElement | null>(null);
  const isExpandedLayout = leftSidebarCollapsed || rightRailCollapsed;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((open) => !open);
      } else if (
        e.key === '/' &&
        !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)
      ) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <TopBar
        theme={theme}
        aiTeacherEnabled={aiTeacherEnabled}
        leftSidebarCollapsed={leftSidebarCollapsed}
        rightRailCollapsed={rightRailCollapsed}
        isOnline={isOnline}
        offlineReady={offlineReady}
        needRefresh={needRefresh}
        canInstall={canInstall}
        onToggleTheme={onToggleTheme}
        onToggleAiTeacher={onToggleAiTeacher}
        onToggleLeftSidebar={onToggleLeftSidebar}
        onToggleWideMode={onToggleWideMode}
        onOpenSearch={() => setSearchOpen(true)}
        onToggleMobileMenu={() => setMobileMenuOpen(true)}
        onPromptInstall={onPromptInstall}
        onApplyUpdate={onApplyUpdate}
      />

      <div
        className={`mx-auto flex ${
          isExpandedLayout ? 'max-w-none w-full' : 'max-w-[1440px]'
        }`}
      >
        {/* Desktop Left Tree Sidebar */}
        {!leftSidebarCollapsed && (
          <aside className="no-print hidden lg:block w-72 shrink-0 border-r border-slate-200 bg-white/70 sticky top-14 h-[calc(100vh-3.5rem)] dark:border-slate-800 dark:bg-slate-950/70">
            <SidebarTree
              completedSubtopics={completedSubtopics}
              onCollapseDesktop={onToggleLeftSidebar}
            />
          </aside>
        )}

        {/* Mobile Drawer Sidebar */}
        {mobileMenuOpen && (
          <div
            className="no-print fixed inset-0 z-50 flex lg:hidden bg-slate-950/50 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="w-80 max-w-[85vw] bg-white h-full shadow-2xl flex flex-col dark:bg-slate-950"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800">
                <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                  Curriculum Tree
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 cursor-pointer dark:hover:bg-slate-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <SidebarTree
                  completedSubtopics={completedSubtopics}
                  onNavigate={() => setMobileMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        )}

        {/* Main Content Canvas */}
        <main ref={mainRef} className="print-full-width flex-1 min-w-0 px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>

      <WordSelectionAssistant
        containerRef={mainRef}
        isOnline={isOnline}
        enabled={aiTeacherEnabled}
      />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
