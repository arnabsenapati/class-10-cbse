import { useCallback, useEffect, useRef, useState } from 'react';
import { registerSW } from 'virtual:pwa-register';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function usePwaStatus() {
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [offlineReady, setOfflineReady] = useState<boolean>(false);
  const [needRefresh, setNeedRefresh] = useState<boolean>(false);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const updateFnRef = useRef<((reloadPage?: boolean) => Promise<void>) | null>(null);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const standaloneMatch =
      window.matchMedia('(display-mode: standalone)').matches ||
      // @ts-expect-error Safari iOS standalone check
      Boolean(window.navigator.standalone);
    setIsInstalled(standaloneMatch);

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Check if an active service worker is already controlling this page
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      setOfflineReady(true);
    }

    const updateSW = registerSW({
      immediate: true,
      onOfflineReady() {
        setOfflineReady(true);
      },
      onNeedRefresh() {
        setNeedRefresh(true);
      },
      onRegisteredSW(_swUrl, registration) {
        if (registration?.active) {
          setOfflineReady(true);
        }
      },
    });
    updateFnRef.current = updateSW;

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const promptInstall = useCallback(async () => {
    if (!deferredPrompt) return false;
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    return choice.outcome === 'accepted';
  }, [deferredPrompt]);

  const applyUpdate = useCallback(() => {
    if (updateFnRef.current) {
      updateFnRef.current(true);
    }
  }, []);

  return {
    isOnline,
    offlineReady,
    needRefresh,
    isInstalled,
    canInstall: Boolean(deferredPrompt) && !isInstalled,
    promptInstall,
    applyUpdate,
  };
}
