# Class 10 CBSE Study Hub — Modular Offline-First PWA

An interactive, offline-ready Progressive Web App (PWA) for Class 10 CBSE students, organized cleanly by **Subject › Topic › Subtopic**.

## Features

- **Subject › Topic › Subtopic Hierarchy:** Breadcrumb navigation, collapsible curriculum tree, and completion tracking saved offline in `localStorage`.
- **Biology — Chapter 8: Heredity (From Absolute Basics):**
  1. **Foundations: DNA, Genes & Alleles** (Cell → Nucleus → Chromosome → DNA → Gene → Protein/Hormone; Gene vs. Allele; Dominant vs. Recessive; Homozygous vs. Heterozygous; Genotype vs. Phenotype).
  2. **Mendel & Punnett Square Mastery** (Why *Pisum sativum*; 7 Contrasting Traits; 4-Step Punnett Method; FOIL Gamete Splitter & Blank Grid Practice Trainer).
  3. **Monohybrid Cross** (`TT × tt` → `F₁` `Tt` → `F₂` `3:1` & `1:2:1`; Law of Dominance & Segregation; Test Cross `1:1`; Live 2×2 Simulator).
  4. **Dihybrid Cross** (`RRYY × rryy` → `F₁` `RrYy` → `F₂` `9:3:3:1`; 16-box Interactive Explorer; Parental vs. New Recombinant combinations; Law of Independent Assortment; Seed-Count Numerical Predictor).
  5. **CBSE Board Exam Mastery** (Human `XX`/`XY` Sex Determination Lab; Rationalized CBSE Syllabus Scope; Top 8 Examiner Traps; Solved 1–5 Mark Q&As; Interactive Offline CBSE Quiz Arena).
- **Instant Offline Search (`Ctrl+K` / `/` or `/search`):** Searches across subjects, topics, subtopics, sections, glossary terms, and CBSE quiz questions.
- **PWA & Offline Support:** Precached via Workbox Service Worker (`vite-plugin-pwa`), installable on desktop & mobile, with live Online/Offline status indicator and clean Print-to-PDF stylesheets.

## Running Locally

```bash
npm install
npm run dev        # Development server
npm run build      # Production build + Service Worker (dist/)
npm run preview    # Preview production PWA locally (http://localhost:4174)
```

## Running as a Background Startup Service (Windows)

A single-process Node server launcher ([`scripts/service-runner.mjs`](scripts/service-runner.mjs)) and Windows setup scripts are included:

- **Boot Service Mode (recommended, Administrator PowerShell):** Starts automatically at system boot (even before login) and opens Windows Firewall TCP port `4174`:
  ```powershell
  powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\install-startup.ps1
  ```
- **User Logon Mode (no Administrator required):** Starts automatically when you sign into Windows:
  ```powershell
  powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\install-startup.ps1 -Mode UserLogon
  ```
- **Uninstall:**
  ```powershell
  powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\uninstall-startup.ps1 -RemoveFirewall
  ```

Logs are written to `logs/pwa-service.log` (automatically rotated at 1 MiB).

## Adding More Subjects or Topics

Add new subject modules under `src/data/subjects/<subject>/` following `src/types/curriculum.ts` and register them in `src/data/registry.ts`.
