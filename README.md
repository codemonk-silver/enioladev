# Eniola Olajugbagbe — Portfolio (mobile-optimized)

React 19 + TypeScript + Vite + Tailwind CSS 4 portfolio. This is an updated source-code project, not a deployed website.

## Run locally

Requires Node.js compatible with Vite 8 (Node.js 20.19+ or 22.12+).

```bash
npm ci
npm run dev
```

## Production deployment

```bash
npm run lint
npm run build
npm run preview
```

Deploy to Vercel as a Vite project: build command `npm run build`, output directory `dist`.

## Mobile performance work

- Replaced repeated scroll-driven React rendering in `ScrollProgress` with a single compositor-friendly transform per animation frame.
- Updated `Navbar` to throttle scroll work to animation frames and avoid redundant state changes.
- Rebuilt the mobile navigation drawer and back-to-top interactions with lightweight CSS transitions. No application component imports Framer Motion, so bundlers can omit that animation runtime from client JavaScript.
- Replaced cursor glow React re-renders with a desktop-only, direct-DOM animated element. No pointer tracking is installed for touch/low-motion devices.
- Replaced a tiled SVG turbulence filter with a tiny static noise PNG, disabled on mobile.
- Removed card backdrop filters and complex hover effects on touch devices while preserving the dark aesthetic.
- Removed redundant above-the-fold entrance animations; headline/portrait render immediately.
- Generated responsive WebP images (`640px` and `1200px` project variants, plus portrait variants), lazy-loaded project imagery, and prioritized the portrait preload.
- Removed duplicate font stylesheet request. Fonts still load from Google Fonts using `display=swap`.
- Added reduced-motion handling, mobile section scroll offsets, and corrected résumé/email links.
- Removed obsolete JPEGs, unused hero PNG, and an unrelated screenshot from the source package.

See `PERFORMANCE_AUDIT.md` for verification status and next measurements.

## Notes

The original content, layout, portfolio projects and outbound links were retained. `package.json` and `package-lock.json` were not changed; the `framer-motion` and `react-icons` packages remain listed as dependencies for lockfile compatibility, but are no longer imported by the app. Optionally prune them later using `npm uninstall framer-motion react-icons` in a network-enabled development environment.
