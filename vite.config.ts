import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { createAskTeacherMiddleware } from './scripts/ask-teacher-middleware.mjs';

const projectRoot = dirname(fileURLToPath(import.meta.url));

function askTeacherApiPlugin(): Plugin {
  const middleware = createAskTeacherMiddleware({ projectRoot });
  return {
    name: 'ask-teacher-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/ask-teacher', middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/ask-teacher', middleware);
    },
  };
}

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
          if (normalized.includes('/src/data/subjects/physics/')) {
            return 'data-physics';
          }
          if (normalized.includes('/src/data/subjects/chemistry/')) {
            return 'data-chemistry';
          }
          if (normalized.includes('/src/data/subjects/biology/')) {
            return 'data-biology';
          }
          if (normalized.includes('/src/data/subjects/social-science/civ-')) {
            return 'data-sst-civics';
          }
          if (normalized.includes('/src/data/subjects/social-science/eco-')) {
            return 'data-sst-economics';
          }
          if (normalized.includes('/src/data/subjects/social-science/hist-')) {
            return 'data-sst-history';
          }
          if (normalized.includes('/src/data/subjects/social-science/geo-')) {
            return 'data-sst-geography';
          }
          if (normalized.includes('/src/data/subjects/social-science/map-')) {
            return 'data-sst-map';
          }
          if (normalized.includes('/src/data/subjects/social-science/')) {
            return 'data-sst-meta';
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
          if (normalized.includes('/src/data/subjects/english/ncert-texts/')) {
            return 'data-english-ncert';
          }
          if (normalized.includes('/src/data/subjects/english/prose-')) {
            return 'data-english-ff-prose';
          }
          if (normalized.includes('/src/data/subjects/english/poem-')) {
            return 'data-english-ff-poetry';
          }
          if (normalized.includes('/src/data/subjects/english/footprints-')) {
            return 'data-english-footprints';
          }
          if (normalized.includes('/src/data/subjects/english/grammar-')) {
            return 'data-english-grammar';
          }
          if (normalized.includes('/src/data/subjects/english/writing-')) {
            return 'data-english-writing';
          }
          if (
            normalized.includes('/src/data/subjects/mathematics/ch01-') ||
            normalized.includes('/src/data/subjects/mathematics/ch02-') ||
            normalized.includes('/src/data/subjects/mathematics/ch03-') ||
            normalized.includes('/src/data/subjects/mathematics/ch04-') ||
            normalized.includes('/src/data/subjects/mathematics/ch05-')
          ) {
            return 'data-math-num-alg';
          }
          if (
            normalized.includes('/src/data/subjects/mathematics/ch06-') ||
            normalized.includes('/src/data/subjects/mathematics/ch07-') ||
            normalized.includes('/src/data/subjects/mathematics/ch10-')
          ) {
            return 'data-math-geo-coord';
          }
          if (
            normalized.includes('/src/data/subjects/mathematics/ch08-') ||
            normalized.includes('/src/data/subjects/mathematics/ch09-')
          ) {
            return 'data-math-trig';
          }
          if (
            normalized.includes('/src/data/subjects/mathematics/ch11-') ||
            normalized.includes('/src/data/subjects/mathematics/ch12-') ||
            normalized.includes('/src/data/subjects/mathematics/ch13-') ||
            normalized.includes('/src/data/subjects/mathematics/ch14-')
          ) {
            return 'data-math-mens-stats';
          }
          if (normalized.includes('/src/data/subjects/mathematics/')) {
            return 'data-math-mastery';
          }
          if (normalized.includes('/src/data/subjects/english/')) {
            return 'data-english-meta';
          }
          if (normalized.includes('/src/data/subjects/hindi/')) {
            return 'data-hindi-meta';
          }
        },
      },
    },
  },
  plugins: [
    askTeacherApiPlugin(),
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
        name: 'Class 10 CBSE Study Hub — Science (086 — Physics, Chemistry & Biology 2D/3D Labs), Maths, SST, English & Hindi',
        short_name: 'Class 10 Study Hub',
        description:
          'Offline-ready Class 10 CBSE study companion featuring Complete 80-Mark Science (Code 086 — Physics Ch 9-12 Ray Optics/Circuits/3D Solenoid, Chemistry Ch 1-4 Wet-Lab/Electrolysis/3D Carbon & Micelles, Biology Ch 5-8 & 13 Life Processes/Reflex Arc/3D Flower & DNA), Complete 80-Mark Mathematics Standard (041), Social Science (087), English (184), and Hindi Course B (085).',
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
        navigateFallbackDenylist: [/^\/api\//, /^\/ncert\//i],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: /^\/api\//,
            handler: 'NetworkOnly',
          },
          {
            urlPattern: /^\/ncert\/.*\.pdf$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'ncert-pdfs-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 180,
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
});
