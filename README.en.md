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
- inserts the visitor into Supabase with duplicate protection
- reads the total visitor count from Supabase
- returns the visitor's ordinal position plus the total count

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

## Project Structure

- `src/components/` reusable UI and section components
- `src/pages/` route-level pages
- `src/data/` portfolio content for projects, experience, socials, and tech
- `src/lib/` shared utilities including fingerprint generation
- `api/` Vercel serverless endpoints
- `public/` static assets

## Notes

- The app currently uses Vite rewrites so `/api/*` goes to the serverless
  handler and all other routes fall back to `index.html`.
- Most of the main page content is data-driven, so updating `src/data/*`
  changes the public portfolio content without touching layout code.
