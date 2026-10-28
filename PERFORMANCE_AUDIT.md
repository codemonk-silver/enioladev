# Portfolio mobile performance audit

## Source audit: problems addressed

| Area | Before | After |
|---|---|---|
| Pointer glow | React state update on every mouse movement | Passive desktop pointer listener + at most one DOM transform update per frame; zero pointer listeners on touch |
| Scroll progress | React state update on each scroll event + width layout change | `requestAnimationFrame` + `scaleX` transform, no React render |
| Active nav state | Synchronous section bounding boxes at every scroll event | Once-per-frame scheduled updates with unchanged state preserved |
| Animation runtime | Framer Motion imported in many page sections/components | CSS transitions; no application imports of Framer Motion |
| Above-fold visibility | Hero/card entry transitions delayed key content | Hero content and hero card render immediately |
| Background noise | Screen-covering SVG turbulence filter | 9.4KB static noise texture, disabled on mobile |
| Blur effects | Blur on every card / mobile header | Static opaque mobile cards and mobile header |
| Image delivery | Single JPG for all portrait sizes; project JPGs | Responsive WebP variants + lazy project image decoding/loading |
| Fonts | Duplicated Google Fonts requests in CSS and HTML | Single request in HTML, swap enabled |
| Navigation interaction | Motion runtime mobile drawer; several animated elements | CSS-transform drawer, Escape-to-close, reduced-motion support |

## Image payload examples (file sizes)

| Asset | Previously | Optimized |
|---|---:|---:|
| Hero portrait | `profile.jpg`: 81,385 bytes | `profile-320.webp`: 9,216 bytes (normal mobile density) / `profile-640.webp`: 37,386 bytes (high density) |
| Restaurant project | `project-1.jpeg`: 49,543 bytes | `project-1-640.webp`: 14,860 bytes (mobile) |
| Event booking project | `projec.jpeg`: 49,510 bytes | `projec-640.webp`: 9,798 bytes (mobile) |

Browser selection varies based on viewport, CSS image sizes, and device pixel ratio. These are file-size comparisons, not measured network transfer totals.

## Verification and limitations

- **Source syntax:** All 25 TypeScript and TSX source files parsed/transpiled without syntax errors using the TypeScript compiler API.
- **Local asset references:** Validated that referenced images and résumé exist in `public/`.
- **Production build / Lighthouse:** Not run here. The package registry was unavailable when attempting to install dependencies (`EAI_AGAIN`). Do not treat this as a completed end-to-end build or a verified Lighthouse performance score.
- **Device testing:** Must still be performed on physical Android and iOS devices or through Chrome DevTools mobile emulation after deploying the updated source.

## Recommended acceptance checks after deployment

1. Run `npm ci && npm run lint && npm run build` in a network-enabled environment.
2. Open Chrome DevTools → Lighthouse → Mobile, use at least 3 runs on a clean cache, and compare medians with the original deployment.
3. Inspect Core Web Vitals (LCP under 2.5s, INP under 200ms, CLS under 0.1 as goals rather than guarantees).
4. Profile mobile scrolling (Performance tab), particularly project-grid images and the menu. Use CPU throttling to simulate a mid-range Android phone.
5. Test reduced-motion preference, touch menu, Escape key, contact link, all external project links, résumé download, and anchors.

Performance is device- and network-dependent; "zero lag" cannot be guaranteed.
