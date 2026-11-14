import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: {
    host: true,
    port: 4174,
  },
  preview: {
    host: true,
    port: 4174,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalized = id.replace(/\\/g, '/');
          if (
            normalized.includes('/node_modules/react/') ||
            normalized.includes('/node_modules/react-dom/') ||
            normalized.includes('/node_modules/react-router/') ||
            normalized.includes('/node_modules/react-router-dom/') ||
            normalized.includes('/node_modules/scheduler/')
          ) {
            return 'react-vendor';
          }
          if (normalized.includes('/node_modules/lucide-react/')) {
            return 'icons-vendor';
          }
          if (normalized.includes('/src/data/subjects/biology/')) {
            return 'data-biology';
          }
          if (normalized.includes('/src/data/subjects/hindi/gadya-')) {
            return 'data-hindi-gadya';
          }
          if (normalized.includes('/src/data/subjects/hindi/kavya-')) {
            return 'data-hindi-kavya';
          }
          if (normalized.includes('/src/data/subjects/hindi/sanchayan-')) {
            return 'data-hindi-sanchayan';
          }
          if (normalized.includes('/src/data/subjects/hindi/vyakaran-')) {
            return 'data-hindi-vyakaran';
          }
          if (normalized.includes('/src/data/subjects/hindi/lekhan-')) {
            return 'data-hindi-lekhan';
          }
          if (normalized.includes('/src/data/subjects/hindi/')) {
            return 'data-hindi-meta';
          }
        },
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'icons/pwa-192x192.png',
        'icons/pwa-512x512.png',
        'icons/maskable-icon-512x512.png',
        'icons/apple-touch-icon.png',
      ],
      manifest: {
        name: 'Class 10 CBSE Study Hub — Hindi Course B & Biology',
        short_name: 'Class 10 Study Hub',
        description:
          'Offline-ready Class 10 CBSE study companion featuring Complete 80-Mark Hindi Course B (Sparsh Bhag-2, Sanchayan Bhag-2, Apathit & 42-Q Vyakaran Lab, all 6 Creative Writing formats) and Biology (Heredity Punnett labs).',
        theme_color: '#0f766e',
        background_color: '#f8fafc',
        display: 'standalone',
        orientation: 'any',
        scope: '/',
        start_url: '/',
        categories: ['education', 'books', 'reference'],
        icons: [
          {
            src: '/icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icons/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2,json}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        navigateFallback: '/index.html',
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
});
