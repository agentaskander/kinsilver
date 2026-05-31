# kinSilver Styling Decision

## Current Approach

kinSilver uses Tailwind CSS utility classes throughout the routed React app, with a small global stylesheet in `src/styles/site.css` for Tailwind directives, design tokens, and shared component classes such as `page-shell`, `display`, `button-primary`, and `editorial-card`.

## Decision

Keep Tailwind, pinned to v3.4.17.

Tailwind is not incidental in this app. The route pages and reusable components rely heavily on utility classes for layout, spacing, responsive grids, typography, color, and interaction states. Removing Tailwind would require a broad visual rewrite and would create more risk than it removes for the current demo-ready build.

## Build Hardening

- `tailwindcss` is pinned exactly to `3.4.17` in `package.json`.
- `package.json` includes an `overrides.tailwindcss` entry to prevent accidental v4 resolution.
- `postcss.config.js` uses the Tailwind v3 plugin form: `tailwindcss: {}`.
- Do not install `@tailwindcss/postcss`; that package is for Tailwind v4 and previously caused CSS build breakage with this codebase.
- If Tailwind is upgraded later, do it as an explicit migration task with `npm run build` and route smoke checks before accepting the change.

## Avoiding Future CSS Breakage

- Keep `tailwind.config.js`, `postcss.config.js`, and `package-lock.json` reviewed together.
- Reject dependency updates that add `@tailwindcss/postcss` or move `tailwindcss` to v4 without a planned migration.
- Run `npm run test`, `npm run build`, and production preview route checks after any styling dependency change.
