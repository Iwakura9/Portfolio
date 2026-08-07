# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun install          # install deps (package-lock.json and bun.lock are both committed — pick one manager, don't let them diverge)
bun run dev           # vite dev server on :5173, proxies /api to localhost:3000
bun run build          # tsc -b && vite build
bun run lint            # eslint .
bun run preview          # preview production build
```

No test suite is configured. There is no single-test command.

## Architecture

React 19 + Vite SPA, single-page portfolio with a few sub-routes, deployed to Vercel with one serverless function.

**Routing** (`src/main.tsx`): `BrowserRouter` wraps everything in `ThemeProvider` (next-themes) → `LanguageProvider` (custom i18n) → `SmoothScroll` (lenis). Routes: `/`, `/projects`, `/projects/:slug`, `/experiencia`, `/experiencia/:slug`, `/contact`. Navbar/Footer render outside `<Routes>` so they persist across pages.

**Content is data-driven**: everything under `src/data/*.ts` (projects, experience, tech, socials, quote, site) is the source of truth for page content. To add/edit a project, experience entry, or tech badge, edit these files — don't touch layout components. Each entry carries its own `slug: string` field (hand-written, not derived) that both the list page and the `/projects/:slug` detail page match against.

**i18n** (`src/i18n/`): custom-built, not a library. `dictionaries.ts` holds `pt`/`en` copy; `LanguageContext` + `useI18n()` expose the current language and a `t()`-like accessor. Content in `src/data/*` uses a `Localized<T>` type (`{ pt: T; en: T }`) so bilingual strings live next to the data itself rather than in the dictionaries. `LanguageProvider` persists the choice to `localStorage` under `lang` and imperatively updates `document.documentElement.lang`, `document.title`, and the meta description on change (needed because `index.html` is static).

**Theming**: `next-themes` (`class` attribute, `system` default). Icons that must flip between themes use `ThemedIcon` and swap via CSS (`dark:`) instead of reading theme state in JS, to avoid a flash on first paint.

**Perf**: below-the-fold home sections (`ProjectSection`, `ExperienceSection`, `Stats`, `QuoteSection`) are lazy-loaded via `React.lazy` + `Suspense` in `App.tsx`, each wrapped in `FadeIn` for a scroll-reveal effect.

**Visitor counter** (footer): two-part flow.
- Client: `src/lib/fingerprint.ts` derives a local hash from `navigator.userAgent`, `navigator.language`, screen size, timezone, `hardwareConcurrency`, `deviceMemory`, and a canvas hash. Stored once in `localStorage.visitor_id` and reused on subsequent visits. Raw fingerprint inputs never leave the browser — only the hashed id is sent.
- Server: `api/visitors.ts` (Vercel serverless function) validates the id format, inserts into Supabase with duplicate-ignore, and computes the visitor's ordinal position via a `count=exact` query rather than downloading the table. Missing Supabase env vars or a failed request degrade silently (footer just omits the count) — don't add error UI for this path.
- Env vars `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` are server-only, read in `api/visitors.ts`. Never expose the service-role key via a `VITE_*` var or client code — it grants full database access.

**Path alias**: `@/*` → `src/*` (configured in both `vite.config.ts` and `tsconfig`).

**shadcn/ui**: `components.json` uses style `radix-nova`, `neutral` base color, no Tailwind prefix. UI primitives live in `src/components/ui`; app-level composed components live in `src/components`, one-off presentational utilities in `src/components/helpers`.

**ESLint**: `src/**/*.{ts,tsx}` uses browser globals; `api/**/*.ts` and `*.config.{ts,js}` use Node globals (serverless functions and config run in Node, not the browser) — see `eslint.config.js` if adding new server-side files outside `api/`.

## Conventions

- Components: `PascalCase.tsx`. Utilities/data: `camelCase.ts`.
- Asset filenames: lowercase, no spaces or accents.
- `vercel.json` rewrites `/api/*` to the serverless functions and falls back everything else to `index.html` for SPA routing.
