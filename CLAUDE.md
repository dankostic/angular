# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` / `ng serve` — run the dev server at `http://localhost:4200/`, live-reloads on file changes
- `ng build` — production build, output to `dist/`
- `ng build --configuration development` — unoptimized dev build (also via `npm run watch` for watch mode)
- `ng test` — run unit tests via Vitest (uses the `@angular/build:unit-test` builder)
- `ng generate component <name>` — scaffold a new component (run `ng generate --help` for other schematics)

There is no configured lint script and no e2e test framework set up.

## Architecture

This is an Angular 22 application using the modern standalone-component APIs (no `NgModule`s):

- `src/main.ts` bootstraps `App` (`src/app/app.ts`) using `appConfig` from `src/app/app.config.ts`.
- `src/app/app.config.ts` wires up global providers: `provideBrowserGlobalErrorListeners()` and `provideRouter(routes)`.
- `src/app/app.routes.ts` defines the route table: `''` (Home), `matches`, `teams`, `stats`, each mapped to a page component, plus a wildcard redirect back to `''`.
- Components are standalone (`imports: [...]` directly on the `@Component` decorator) and colocate `.ts`, `.html`, `.css`, and `.spec.ts` files per component, split across two directories by role:
  - `src/app/components/<name>/` — reusable, presentational section components (`Navbar`, `Hero`, `Stats`, `MatchCard`, `Standings`, `Testimonials`, `Faq`, `Cta`, `Footer`). These are self-contained with their own sample data via `input()` signals with defaults (e.g. `Stats`, `Standings`, `Testimonials`); `MatchCard` takes a required input (`input.required<Match>()`) instead. Nothing here knows about routes.
  - `src/app/pages/<name>/<name>.ts` — route targets, one per entry in `app.routes.ts` (`Home`, `Matches`, `Teams`, `StatsPage`). Each page's only job is composing `components/` pieces for its route; page-level data that belongs to a specific screen (e.g. the `matches` array) lives on the page component, not on `App`.
- `App` (`src/app/app.ts` / `app.html`) is just the persistent shell: `Navbar`, a `<router-outlet />` in `<main>`, and `Footer`. `Navbar` links to routes via `routerLink`/`routerLinkActive` rather than hash anchors.
- Local interactive state uses signals (e.g. `Navbar`'s mobile menu toggle, `Faq`'s open-accordion index, `Cta`'s submitted flag) rather than services — there is no shared/global state layer yet.
- `src/styles.css` defines the global design system as CSS custom properties on `:root` (colors, radii, shadows, container width) plus shared utility classes (`.container`, `.section`, `.btn`, `.btn-primary`, `.btn-ghost`, `.eyebrow`) that components rely on instead of redefining them locally.

Code style is enforced via Prettier (`.prettierrc`: 100 print width, single quotes, Angular parser for `.html` files) and `.editorconfig` (2-space indent, single quotes in `.ts`).
