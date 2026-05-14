# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server at localhost:4321
npm run build     # build to ./dist/
npm run preview   # preview production build locally
npx astro check  # TypeScript type-check all .astro files
```

No test suite exists.

## Stack

- **Astro 5** — file-based routing, `.astro` pages, TypeScript in `<script lang="ts">` blocks
- **Tailwind CSS v3** via `@astrojs/tailwind`
- **No framework components** (no React/Vue/Svelte) — plain Astro + vanilla JS/TS

## Architecture

### Data layer
All site content lives in `src/data/collections.ts` — hardcoded TypeScript objects, no CMS or API. Key exports: `websiteSettings`, typed collections of `Asset`, `Serie`, `Artist`, `Collection`. Images are imported at build time via `import.meta.glob` from `src/assets/collections/`.

### Pages → routes
Each file in `src/pages/` maps 1:1 to a URL. No dynamic routes currently. Pages import `websiteSettings` from the data file and `Header` from components.

### Components
`src/components/Header.astro` is the only reusable component. Props:
- `siteName: string`
- `variant?: 'transparent' | 'solid'` — controls background
- `textColor?: 'white' | 'black' | 'adaptive'` — controls nav link color

No layouts directory exists — pages compose `Header` directly and write their own `<html>` shell.

### Assets
- `src/assets/` — images processed by Astro (used via `import.meta.glob`)
- `public/assets/` — static images served as-is
- `public/media/videos/` — video files

### Styles / scripts
- `src/styles/global.css` — imported at the top of every page
- `src/scripts/modal.js` — standalone modal logic imported where needed

## Deployment

Docker Compose (`docker-compose.yml`) runs two services:
1. `xpose-astro` — Astro app built in production mode, exposed internally on port 4321
2. `xpose-caddy` — Caddy reverse proxy, handles TLS, serves `aleixdiazzz.com`

The `xpose-network` Docker network must exist externally before `docker compose up`.
