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
- `src/app/app.routes.ts` defines the route table (currently empty).
- Components are standalone (`imports: [...]` directly on the `@Component` decorator) and colocate `.ts`, `.html`, `.css`, and `.spec.ts` files per component, e.g. `src/app/first/`.
- Component class field/style conventions follow Angular CLI defaults: signals for local state (e.g. `signal('sportaling')` in `App`), `styleUrl`/`templateUrl` pointing at sibling files.

Code style is enforced via Prettier (`.prettierrc`: 100 print width, single quotes, Angular parser for `.html` files) and `.editorconfig` (2-space indent, single quotes in `.ts`).
