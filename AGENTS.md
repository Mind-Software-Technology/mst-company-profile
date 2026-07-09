<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Repo-specific

## Stack
- **Next.js 16** (App Router), React 19.2, TypeScript 5, Tailwind CSS v4, ESLint 9 (flat config)
- **Turbopack** default for `dev` and `build`. Use `--webpack` to opt out.
- **Static export** — `next.config.ts` sets `output: "export"`. No server runtime, no API routes, no server actions.
- **PostCSS** — `@tailwindcss/postcss` plugin.
- **Fonts** — Inter (body) + Space Grotesk (display), loaded via `next/font/google` as CSS variables (`--font-inter`, `--font-space-grotesk`).
- **Icons** — Lucide React. **Animations** — Framer Motion.

## Commands
| Command | Action |
|---------|--------|
| `npm run dev` | `next dev` (Turbopack) |
| `npm run build` | `next build` (Turbopack) |
| `npm run start` | `next start` |
| `npm run lint` | `eslint` (not `next lint` — removed in v16) |
| `npx tsc --noEmit` | Type-check (no npm script) |

No test framework configured.

## Next.js 16 quirks
- **Async Request APIs** — `params`, `searchParams`, `cookies()`, `headers()`, `draftMode()` are all async. Always `await`.
- **Tailwind v4** — `@import "tailwindcss"` + `@theme inline {}`. No `tailwind.config.*`. Brand colors are CSS custom properties in `app/globals.css`.
- **Path alias**: `@/*` → repo root.
- **No webpack config** — adding one breaks build unless `--webpack` flag is passed.

## Structure
- `app/` — root layout + single-page home. All components are `"use client"`.
- `app/_components/` — `Navbar`, `Hero`, `HeroHeadline`, `About`, `Services`, `Portfolio`, `Clients`, `Team`, `Testimonials`, `CTA`, `Contact`, `Footer`, `FloatingWhatsApp`, `ScrollBackground` (dynamic import, `ssr: false`), `ThemeProvider`.
- Single package, no monorepo, no `src/`.

## Design
- **Dark/light theme** via custom `ThemeProvider` (React context, not next-themes). Persists to `localStorage` key `mst-theme`.
- **Theme CSS variables** in `@theme inline`: `--color-brand-indigo`, `-indigo-light`, `-indigo-dark`, `-cyan`, `-cyan-light`, `-surface`, `-dark`, `-text`, `-muted`, `-border`. Also `--font-display` (Space Grotesk) and `--font-body` (Inter). Components also use raw `#6366f1` / `#06b6d4` directly with opacity modifiers.
- **Glassmorphism**: `backdrop-blur-*` + semi-transparent bg + thin `border-white/10`.
- **Animations**: Framer Motion. Per-component `fadeUp(delay)` helper returns `{ initial, whileInView, viewport: { once: true }, transition }` spread onto `motion.*` elements. All scroll-triggered.
- **Content**: Indonesian (`lang="id"`, all text in Bahasa Indonesia).

## Git-ignored
- `.env*`, `AGENTS.md`, `CLAUDE.md`, `design.md`, `rule.md` — won't be committed. Reference docs exist for agent use only.

## Reference docs (gitignored, repo-local)
- `design.md` — full design system spec (colors, typography, component specs, interactions)
- `rule.md` — PRD/TRD and brand identity guidelines
