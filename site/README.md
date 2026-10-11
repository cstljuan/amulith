# Amulith landing page

Standalone HTML, CSS, and JavaScript. No framework, runtime dependencies, build step, remote fonts, or game service required. All visible art and fonts live in `assets/`.

## Local preview

From the repository root:

```sh
npx serve site
```

Or use Python without installing a package:

```sh
python3 -m http.server 3000 --directory site
```

Open http://localhost:3000. The Bloom/Blight buttons change the page palette and remember the choice when browser storage is available. Both paths remain described on the page. Without JavaScript, the page uses Bloom and hides the inactive control. There is no automatic motion; reduced motion also disables smooth scrolling.

## Vercel configuration for Juan's session

Do not deploy from this branch/session. When Juan is ready:

| Setting | Value |
| --- | --- |
| Framework preset | Other |
| Root directory | `site` |
| Build command | None, leave blank |
| Output directory | `.` (the root of `site`) |
| Install command | None, leave blank |

The site does not need environment variables. Connect the domain separately in Juan's deployment session.

## Placeholders

- The Devpost link intentionally points to https://devpost.com/ and is labelled as a homepage placeholder. Replace its `href`, remove the placeholder description and comment, and update this note after Juan supplies the project submission URL.
- The Open Graph image uses a relative path because the deployment hostname is not known. After choosing the final domain, use its absolute image URL and add `og:url` and a canonical URL. The page itself works without these.

## Content sources and honesty

Facts were checked against main at `2e45670`, with the authorized handoff in `cstljuan/kh-skills` at `handoffs/2026-10-11-landing-page.md`.

| Page content | Source |
| --- | --- |
| Knight Hacks IX, UCF, game on Jetson, Lenny figure and shrine premise | Root `README.md` |
| Shattered gem, roots, sleeping T.K., Bloom destroys shards, Blight gathers them | `DECISIONS.md`, locked spec sections 1, 2 and 4 |
| Sleepy/angry camera choice, lantern knob, relic button and green LED | `DECISIONS.md`, locked spec sections 3 and 4 |
| Jetson, on-device open-source model, llama.cpp/CUDA, structured director, scripted fallback | `DECISIONS.md`, locked spec sections 1 and 5 |
| Three.js, TypeScript, Vite, Python service and local WebSocket | `DECISIONS.md`, locked spec section 6 |
| Offline game path, cached/local voice and optional online voice | `DECISIONS.md`, locked spec sections 1 and 5; offline browser validation in `TEAM-LOG.md`, 4:05 AM review and 1:42 AM audio entry |
| HD-2D diorama and pixel-art direction | `DECISIONS.md`, 12:20 AM entry; `game/public/art/STYLE.md` |
| Bloom golden day and Blight violet night palette | `game/src/render/lighting.ts` DAY/NIGHT; UI parchment, gold and chartreuse from `game/src/ui/ui.css` |
| Noto Serif title face | Authorized handoff and `game/src/ui/fonts/LICENSE.md` |
| Juan Castillo and Lawrence Capistrano | `DECISIONS.md`, locked spec authors; authorized handoff |
| Design team names and fan-project credit | Authorized handoff; ownership confirmed in root `README.md` and `game/public/art/CREDITS.md` |

The hardware flow is labelled as the locked design with integration still in development. The team log does not establish a completed physical-camera/relic test. The hero is labelled concept art. No live AI or playable game is embedded in this landing page, and no performance metrics, testimonials, awards, or fabricated outcomes are published.

## Design choices and skills

Selected from Juan's `cstljuan/AI-Resource-Library` on main at `8499fe1a93df3c16b7a3dd9479f0f4da9955dfa7`: `.agents/skills/frontend-design/SKILL.md` for a subject-specific, art-led layout and `.agents/skills/frontend-ui-engineering/SKILL.md` for semantic markup, keyboard controls, responsive behavior and accessibility verification.

The game itself supplied the references: shrine key art, title/faction UI, and DAY/NIGHT lighting. Noto Serif carries titles, Noto Sans carries explanations. Bloom uses `#fff1d6` sky, green-ground-derived text and `#e4e6cf` surfaces; Blight uses `#15102a` fog, `#1e1230` ground, `#f3ead2` parchment and `#c7dc45` veins. The split art is the page's main visual; surrounding sections explain the sequence of play and the physical build without decorative textures or stock feature cards. Text is left-aligned below the centered game title. On narrow screens, navigation wraps and content becomes a single column. Faction names, shape icons and `aria-pressed` state accompany the color change.

The handoff's explicit scope takes precedence over the repo's usual TEAM-LOG edit. Session notes, verification and screenshots stay in `site/` and the PR; only one linking line is added to the root README.

## Verification

See [review/verification.md](review/verification.md) for the completed checks and [review/](review/) for desktop and 390px screenshots in both palettes.
