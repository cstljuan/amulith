# Landing page verification

Checked locally on 2026-10-11. Served the standalone `site/` directory with `python3 -m http.server 3000 --directory site`; no game, Remnant service, or deployment was used.

## Accessibility and layout

| Palette | Lighthouse mobile | Lighthouse desktop | axe WCAG violations |
| --- | --- | --- | --- |
| Bloom | 100 | 100 | 0 |
| Blight | 100 | 100 | 0 |

Lighthouse 13.5.0 accessibility-only audits ran in headless Chromium 154.0.8037.57. Desktop used the desktop preset; mobile used the default mobile preset. The selected palette persisted through each audit with storage reset disabled. See [lighthouse-results.json](lighthouse-results.json) for timestamps and scores.

Playwright 1.64.0 and axe-core 4.13.0 checked both palettes at 320, 390, 768, 1024, and 1440 CSS pixels. Each run had zero WCAG 2 A/AA and WCAG 2.1 AA violations, no horizontal overflow, and all images decoded successfully. See [browser-results.json](browser-results.json).

At 390px, increasing the root text size to 200% also produced no horizontal overflow. This check found and resolved min-content overflow in the faction panels and footer before the final capture.

## Interaction and loading

- Keyboard Tab reaches the visible skip link; Enter moves focus to the main content.
- Keyboard Tab and Enter activate Blight. `aria-pressed`, the document palette, and a polite status message update together.
- The selected palette survives a reload. Invalid stored values keep the default Bloom palette.
- Blocking localStorage does not prevent palette switching.
- With JavaScript disabled, the page remains readable and hides the inactive palette control.
- With `prefers-reduced-motion: reduce`, scroll behavior is `auto` and no animations run.
- All fragment targets exist. The local credits link returns HTTP 200. All image and font requests succeed, with no console errors, page errors, or failed requests during the browser checks.
- The GitHub project and Devpost homepage links were followed and returned HTTP 200. Devpost remains an explicitly labelled placeholder, not a claimed project submission.
- JavaScript syntax and `git diff --check` pass. The source has no em dashes or AI attribution trailers.

The test tooling was installed outside the repository. No test or runtime dependency was added to the site.

## Screenshots

Full-page captures use 1x device scale, desktop 1440px by 1000px viewport and phone 390px by 844px viewport. Each lazy image was scrolled into view and decoded before capture. The images were inspected for hierarchy, legibility, clipping, sprite sharpness, and complete art loading.

| Palette | Desktop | Phone |
| --- | --- | --- |
| Bloom | [bloom-desktop.png](bloom-desktop.png) | [bloom-390px.png](bloom-390px.png) |
| Blight | [blight-desktop.png](blight-desktop.png) | [blight-390px.png](blight-390px.png) |

## Remaining handoff items for Juan

Replace the Devpost homepage placeholder with the project submission URL. After choosing the deployment domain, make the Open Graph image URL absolute and add the canonical page URL. Vercel settings are in [../README.md](../README.md). No deployment or merge was performed.
