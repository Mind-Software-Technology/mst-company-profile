<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Repo-specific

## Stack
- **Next.js 16** (App Router), React 19.2, TypeScript 5, Tailwind CSS v4, ESLint 9 (flat config)
- Bundler: **Turbopack by default** (both dev & build). Use `--webpack` flag to opt out.

## Commands (`npm run`)
| Command | What it does |
|---------|-------------|
| `dev` | `next dev` (Turbopack) |
| `build` | `next build` (Turbopack) |
| `start` | `next start` |
| `lint` | `eslint` (not `next lint` — that was dropped in v16) |
| `npx tsc --noEmit` | Type-check (no dedicated script for this) |

No test framework is configured.

## Key v16 quirks
- **Async Request APIs** — `params`, `searchParams`, `cookies()`, `headers()`, `draftMode()` are all async (sync access fully removed). Always `await` them.
- **Lint** — `eslint` CLI, not `next lint`. Config: `eslint.config.mjs` (flat config).
- **Tailwind v4** — uses `@import "tailwindcss"` + `@theme inline {}` in CSS. No `tailwind.config.*`.
- **Path alias**: `@/*` maps to repo root.
- **PPR** — use `cacheComponents` config, not `experimental_ppr`.
- **`revalidateTag`** now requires a second arg (`cacheLife` profile). Use `updateTag` for immediate refresh in Server Actions.
- **No webpack config** — project uses only Turbopack. If adding a webpack config, builds will fail unless you pass `--webpack`.
- **Middleware** → `proxy.ts` convention (the old `middleware.ts` file is deprecated).

## Structure
- `app/` — App Router routes (currently only root layout + home page)
- Single package, no monorepo, no `src/` directory
- `.env*` files are gitignored
