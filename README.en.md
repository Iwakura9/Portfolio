🇺🇸 English | 🇧🇷 [Português](README.md)

# Portfolio — Gabriel Cavalcante

Personal portfolio built with React and Vite to showcase projects, academic
experience, background, technologies, and GitHub activity.

## Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- React Router
- next-themes
- Vercel serverless functions
- Supabase for visitor storage

## What It Includes

- Home page with an introduction, technologies, projects, academic experience,
  GitHub activity, and achievements
- Dedicated pages for `projects`, `experiencia`, and `contact`
- Detail routes for projects and experience entries
- Theme switching with system, light, and dark support
- Smooth scrolling and motion-driven section reveals
- Footer visitor tracking with a locally generated fingerprint

## Routes

- `/` home
- `/projects` all projects
- `/projects/:slug` project detail
- `/experiencia` academic background
- `/experiencia/:slug` experience detail
- `/contact` contact page

## Visitor Tracking

The footer visitor counter is handled in two parts:

- The client creates a local fingerprint in `src/lib/fingerprint.ts`.
- That fingerprint is sent to the serverless endpoint at `api/visitors.ts`.

### User-Agent Tracking

The **user-agent is explicitly part of the fingerprint input**. It is read
from `navigator.userAgent`, combined with other browser/device signals, hashed
locally, and stored in `localStorage` under `visitor_id`.

The fingerprint inputs are:

- `navigator.userAgent`
- `navigator.language`
- `screen.width x screen.height`
- browser timezone from `Intl.DateTimeFormat().resolvedOptions().timeZone`
- `navigator.hardwareConcurrency`
- `navigator.deviceMemory` when available
- a canvas-based hash generated in the browser

Important behavior:

- If `localStorage.visitor_id` already exists, the app reuses it.
- The raw fingerprint inputs are not sent to the API.
- Only the hashed `visitor_id` is posted to `/api/visitors`.

### Backend Behavior

The visitor API:

- accepts `POST` requests with `{ visitor_id }`
- validates the `visitor_id` format before touching the database
- inserts the visitor into Supabase with duplicate protection
- reads the total visitor count from Supabase
- returns the visitor's ordinal position plus the total count

The ordinal position is counted in the database itself (via `count=exact` over
earlier rows) rather than downloading the visitors table on every page load.

If Supabase env vars are missing or the API fails, the UI falls back
gracefully and keeps the footer quiet.

## Local Development

1. Install dependencies:
   ```bash
   bun install
   ```
2. Start the dev server:
   ```bash
   bun run dev
   ```
3. Build for production:
   ```bash
   bun run build
   ```

## Environment Variables

The visitor endpoint expects:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Both are read server-side only, in `api/visitors.ts`, and never reach the client
bundle. Set them in the Vercel dashboard; locally, use a `.env` file (Git
ignored). The Supabase `service_role` key grants full database access — never
commit it or expose it through a `VITE_*` variable.

## Project Structure

```
api/                    Vercel serverless endpoints
  visitors.ts           visitor counter (reads/writes Supabase)
public/                 assets served as-is
  assets/               photo, cover art, and player track
  projects/             project cover images
  social/               social network icons
  tech/                 technology icons
src/
  assets/               bundler-imported files (resume)
  components/           sections and UI components
    helpers/            presentational utility components
    ui/                 shadcn/ui primitives
  data/                 portfolio content (projects, experience, etc.)
  lib/                  shared utilities
  pages/                route-level pages
  providers/            context providers (theme)
  App.tsx               home page composition
  main.tsx              entry point and route definitions
```

## Conventions

- Components use `PascalCase.tsx`; utilities and data use `camelCase.ts`.
- Asset filenames are lowercase, with no spaces or accents.
- All portfolio content lives in `src/data/*` — updating those files changes the
  site without touching layout code.
- Theme-aware icons go through `ThemedIcon`, which swaps variants via CSS
  (`dark:`) instead of reading the theme in JavaScript, avoiding a flash on
  first paint.
- Project slugs are derived from the name by `slugify` (`src/lib/slug.ts`), used
  both to build and to resolve the URLs.

## Notes

- `vercel.json` routes `/api/*` to the serverless functions and falls back to
  `index.html` for every other route (SPA).
- Both `package-lock.json` and `bun.lock` are committed. Stick to a single
  package manager so the lockfiles don't drift.
