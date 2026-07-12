# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo layout

The actual product is entirely inside `portfolio/` — a Vite + React 19 + TypeScript single-page site (Cameron Nesbitt's music producer portfolio). Everything at the repo root outside `portfolio/` is incidental:

- Root `package.json`/`package-lock.json` only pin a `node` version — not part of the app, don't add app dependencies there.
- Root `.gitignore` covers `node_modules/`, `dist/`, `.env`, etc. for the whole repo.

All commands below assume `cd portfolio` first.

## Commands

```bash
npm run dev       # start Vite dev server (HMR)
npm run build     # tsc -b (typecheck) && vite build — run this to catch type errors
npm run lint      # eslint .
npm run preview   # serve the production build locally
```

There is no test suite configured in this project.

## Architecture

**Single-page scroll site, no router.** Section navigation (Home / Artist / Contact) is handled by `react-scroll`'s `Element`/`Link` components, not `react-router`. `App.tsx` wraps each section in an `<Element name="Home|Artist|Contact">`; `Nav.tsx` links scroll to those names with `smooth`/`duration`. When adding a new section, follow this same `Element` + `Link` pairing rather than introducing routing.

**Styling is Tailwind v4, CSS-first — there is no `tailwind.config.js`.** The Vite plugin (`@tailwindcss/vite`) is registered in `vite.config.ts`; all theme customization lives in `src/index.css`. Notably, custom breakpoints (`xs` 420px, `tablet` 824px, `wide` 1400px, `ultrawide` 1820px — chosen to match the original design's breakpoints) are defined via an `@theme` block there, generating variants like `tablet:` and `max-tablet:`. Add new design tokens there, not in a JS config.

**Data-driven artist gallery.** `src/data/artists.ts` exports a typed `Artist[]` (id, name, image import, Spotify `liveDemo` link); `Gallery.tsx` maps over it and renders `ArtistCard.tsx` per entry. To add/edit a featured artist, edit this data file — don't hardcode a new card in `Gallery.tsx`.

**Contact form → SMTP.js → SweetAlert2.** `ContactForm.tsx` is a controlled form; validation logic (required fields + email regex) lives in `lib/validateContactForm.ts` as a pure function, kept separate from the component so it can be reasoned about/tested independently. Submission goes through `lib/sendEmail.ts`, which calls the global `window.Email.send(...)` provided by the SMTP.js script tag in `index.html` (typed via the ambient declaration in `src/types/smtpjs.d.ts` — there's no official npm package for SMTP.js). The SMTP secure token is read from `import.meta.env.VITE_SMTP_TOKEN`, defined in `portfolio/.env` (gitignored; see `.env.example` for the key name) — never hardcode the token in source. On successful send, `Swal.fire(...)` (SweetAlert2) shows a confirmation popup.

**Images are ES module imports from `src/assets/img/`, not `public/`.** Only truly static, non-imported assets (currently just `favicon.ico`) belong in `public/`. Background images that come from imports are set via inline `style={{ backgroundImage: \`url(${img})\` }}` rather than Tailwind's `bg-[url(...)]`, since the latter needs a static string at build time and doesn't compose with a dynamically-resolved import path.

**Sticky header** is a small custom hook, `hooks/useStickyHeader.ts` (tracks `window.scrollY > 0`), consumed by `Nav.tsx` to toggle its background/padding on scroll — not a CSS-only or IntersectionObserver-based approach.

## TypeScript conventions

`tsconfig.app.json` has `strict`, `noUnusedLocals`, `noUnusedParameters`, and `verbatimModuleSyntax` on. `verbatimModuleSyntax` means type-only imports must use `import type { Foo } from "..."` (or inline `import { type Foo, bar } from "..."`) — a plain `import { Foo }` for a type-only symbol will fail the build, not just lint.

## Git workflow

Commit and push work as you go — don't let finished work sit uncommitted. This is standing authorization to commit and push without asking each time, scoped to the current branch:

- After completing a discrete unit of work (a feature, fix, or logical chunk), stage the relevant files (never `git add -A`/`.` blindly — review what's staged), commit with a clean, conventional message (short imperative subject, body only if the "why" isn't obvious), and push to the tracked remote branch.
- Never force-push, never push to `main` directly without the user asking, never rewrite/amend already-pushed commits.
- If a commit would include anything that looks like a secret or credential, stop and flag it instead of committing.
- This authorization covers routine commit/push — still confirm before any destructive or history-rewriting git operation.
