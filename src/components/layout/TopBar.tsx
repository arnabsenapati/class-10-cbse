import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Download,
  GraduationCap,
  Maximize2,
  Menu,
  Minimize2,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  RefreshCw,
  Search,
  Sparkles,
  Sun,
  Wifi,
  WifiOff,
} from 'lucide-react';

interface TopBarProps {
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
  onOpenSearch: () => void;
  onToggleMobileMenu: () => void;
  onPromptInstall: () => void;
  onApplyUpdate: () => void;
}

export function TopBar({
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
  onOpenSearch,
  onToggleMobileMenu,
  onPromptInstall,
  onApplyUpdate,
}: TopBarProps) {
  const isExpandedLayout = leftSidebarCollapsed || rightRailCollapsed;
  const isWideMode = leftSidebarCollapsed && rightRailCollapsed;

  return (
    <header className="no-print sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-slate-800 dark:bg-slate-950/90">
      <div
        className={`mx-auto flex h-14 items-center justify-between gap-2 px-3 sm:px-5 ${
          isExpandedLayout ? 'max-w-none' : 'max-w-[1440px]'
        }`}
      >
        {/* Left: Mobile drawer + Desktop sidebar toggle + Brand */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleMobileMenu}
            aria-label="Open curriculum menu"
            className="lg:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 cursor-pointer dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Menu className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={onToggleLeftSidebar}
            aria-label={leftSidebarCollapsed ? 'Show curriculum sidebar' : 'Hide curriculum sidebar'}
            title={leftSidebarCollapsed ? 'Show curriculum sidebar' : 'Hide curriculum sidebar'}
            className={`hidden lg:inline-flex items-center justify-center rounded-lg border p-2 transition cursor-pointer ${
              leftSidebarCollapsed
                ? 'border-teal-300 bg-teal-50 text-teal-800 hover:bg-teal-100 dark:border-teal-800 dark:bg-teal-950/60 dark:text-teal-300 dark:hover:bg-teal-900/70'
                : 'border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800'
            }`}
          >
            {leftSidebarCollapsed ? (
              <PanelLeftOpen className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </button>

          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-teal-700 text-white shadow-xs">
              <GraduationCap className="h-4 w-4" />
            </span>
            <div className="hidden sm:block">
              <div className="text-sm font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
                Class 10 CBSE Hub
              </div>
              <div className="text-[10px] font-semibold text-teal-700 dark:text-teal-400 whitespace-nowrap">
                Subject › Topic › Subtopic • Offline PWA
              </div>
            </div>
          </Link>
        </div>

        {/* Center: Search Trigger */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex flex-1 min-w-0 max-w-md items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-left text-xs text-slate-500 hover:border-teal-400 hover:bg-white transition cursor-pointer dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-teal-600 dark:hover:bg-slate-800"
        >
          <span className="flex items-center gap-2 truncate">
            <Search className="h-3.5 w-3.5 shrink-0 text-slate-400" />
            <span className="truncate">Search Mirror Formula, Chlor-Alkali, Nephron, BPT, कबीर...</span>
          </span>
          <kbd className="hidden md:inline-block rounded border border-slate-300 bg-white px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            Ctrl K
          </kbd>
        </button>

        {/* Right: Wide View, AI Teacher Switch, PWA Status, Install, Theme */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            aria-pressed={isWideMode}
            onClick={onToggleWideMode}
            title={
              isWideMode
                ? 'Exit Wide View — restore left curriculum & full right outline'
                : 'Wide View — hide left sidebar & collapse right outline to icons'
            }
            className={`hidden lg:inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
              isWideMode
                ? 'border-teal-400 bg-teal-50 text-teal-800 hover:bg-teal-100 dark:border-teal-700 dark:bg-teal-950/70 dark:text-teal-200 dark:hover:bg-teal-900/80'
                : 'border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
            }`}
          >
            {isWideMode ? (
              <Minimize2 className="h-3.5 w-3.5 shrink-0" />
            ) : (
              <Maximize2 className="h-3.5 w-3.5 shrink-0" />
            )}
            <span>Wide View</span>
          </button>

          <button
            type="button"
            role="switch"
            aria-checked={aiTeacherEnabled}
            onClick={onToggleAiTeacher}
            title={
              aiTeacherEnabled
                ? 'AI Teacher Word Lookup is ON (highlight any word to explain) — click to turn OFF'
                : 'AI Teacher Word Lookup is OFF — click to turn ON'
            }
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
              aiTeacherEnabled
                ? 'border-indigo-300 bg-indigo-50 text-indigo-800 hover:bg-indigo-100 hover:text-indigo-950 dark:border-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-200 dark:hover:bg-indigo-900/80 dark:hover:text-white'
                : 'border-slate-200 bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Sparkles
              className={`h-3 w-3 shrink-0 ${
                aiTeacherEnabled
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-400 dark:text-slate-500'
              }`}
            />
            <span className="hidden md:inline">AI Teacher</span>
            <span className="md:hidden">AI</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[9px] font-extrabold leading-none uppercase tracking-wider ${
                aiTeacherEnabled
                  ? 'bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white'
                  : 'bg-slate-300 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
              }`}
            >
              {aiTeacherEnabled ? 'ON' : 'OFF'}
            </span>
          </button>

          {/* Online / Offline + Cached Status */}
          <div
            title={
              offlineReady
                ? 'All lessons & simulators cached on this device for offline study'
                : isOnline
                ? 'Connected online'
                : 'Offline mode active'
            }
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold border ${
              !isOnline
                ? 'border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                : offlineReady
                ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300'
                : 'border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
            }`}
          >
            {!isOnline ? (
              <>
                <WifiOff className="h-3 w-3" />
                <span>Offline Mode</span>
              </>
            ) : offlineReady ? (
              <>
                <CheckCircle className="h-3 w-3" />
                <span>Offline Ready</span>
              </>
            ) : (
              <>
                <Wifi className="h-3 w-3" />
                <span>Online</span>
              </>
            )}
          </div>

          {needRefresh && (
            <button
              type="button"
              onClick={onApplyUpdate}
              className="inline-flex items-center gap-1 rounded-lg bg-sky-600 px-2.5 py-1.5 text-xs font-bold text-white hover:bg-sky-700 cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" /> Update
            </button>
          )}

          {canInstall && (
            <button
              type="button"
              onClick={onPromptInstall}
              className="inline-flex items-center gap-1 rounded-lg bg-teal-700 px-2.5 py-1.5 text-xs font-bold text-white hover:bg-teal-800 cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Install App</span>
            </button>
          )}

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-100 cursor-pointer dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
