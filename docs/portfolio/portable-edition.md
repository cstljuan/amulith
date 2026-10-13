# Amulith portable edition and portfolio audit

Audit base: `amulith/main` ae3d46756d60119c02340d4c0a201880a47db700. Request: October 12, 2026 in America/New_York. Implementation: October 13 UTC. Tracking: issue #44.

## What was already built

The merged game has three progression levels, a pixel-sprite diorama, faction lighting, land conversion, a lantern, A* enemies, controller/keyboard input, dash, shard holds, endings, local music/effects, codex and reduced motion. Its main README still said the game was in hackathon development. Its offline director repeated one line per faction and offline asks could charge land without producing an answer.

The original `remnant/` contains a FastAPI/WebSocket service, constrained local inference, telemetry, serial bridge and layered shrine detector. Later logs supersede the original vision-training plan: no vision model was fine-tuned or published to the Hub. Voice synthesis remained planned. The printed hill existed as CAD work; do not infer a physical print from the spec's intention.

## Sources checked

- Amulith agent rules, dated decisions, protocol, all team-log entries, current source and test records.
- kh-skills current README, agent rules, seven logical guides, pinned manifest, verifier and all 14 Markdown handoffs. The pinned canonical collection is 8499fe1a93df3c16b7a3dd9479f0f4da9955dfa7. Its seven-guide, three-root, 63-file snapshot verifier passed after materialization preserved exact source bytes. These guides are a reviewed snapshot, not a claim to track latest upstream releases. No guide refresh was needed for a game implementation change.
- 36 relevant vault notes: project, hardware, skills, visual/audio, progression, world-building, Figma, Devpost, demo-video and session handoffs. The historical tasks are not rewritten as though they described today's edition.
- Amulith Figma's actual 12 historical pages, variables, typography, components and placeholder notes, then the new identity page and shipped source art.
- Current public-page retrieval attempts and the latest saved Devpost draft. Public Devpost access was unavailable from this environment, so live page contents are not independently certified. The latest saved record supplies the exact project URL and draft/submission outcome.

## Stale claims corrected in this branch

| Earlier claim | Current wording |
|---|---|
| The game requires a Jetson | Original hardware edition used one; portable play does not |
| In development during the hackathon | Original integrated build plus post-hackathon portable story edition |
| Two offline lines | 696 distinct authored beats across ambient, reactions, conversations and endings |
| Hardware dialogue source in every ending | Scripted edition is labeled, with original local-inference history credited |
| Trained shrine model and Hub publication | Layered detector with pretrained tie-breaker; no training/publication claimed |
| Online/cached/Piper voice as shipped | Planned, not claimed; bundled music and subtitles are present |
| Devpost submission link coming soon | Exact portfolio page, with competition entry not finalized |
| Figma proposals are a finished logo | Identity 02 is the implemented portable identity; original proposals remain historical |

## What this edition adds

The story explores shelter versus ownership through the gem's possessive voice, six original spirits and the Wanderer's questions. Bloom is not framed as painless, and Blight's attraction does not erase its closing treeline. The official starting lore remains credited. T.K. and Lenny receive no invented spoken biography. A run still resolves three selected sites from a six-shard world; no new six-level campaign is implied.

All authored content is in `game/src/story/`. `docs/story-script.md` is generated from those executable banks and scenes. Its 696 unique beats and 7,913 words describe the complete authored corpus, not the amount spoken in one short run. Optional conversations, two routes and replay expose different portions. There is no live inference in portable mode.

Default play uses no WebSocket and requires no account or key. An explicit `remnant` URL keeps original hardware connectivity available. Subtitle source labels distinguish scripted content from an actual model reply. Faction choices, talk, ask, lantern, pulse, dash and pause have keyboard/controller controls. Pointer controls cover title, pause, reading and replay. This is a desktop-browser game; touch movement is not claimed.

The PWA caches all shipped game files after a successful initial load. A downloaded package serves the exact build from localhost using Python 3, with no additional Python packages. Browser installation depends on the browser's PWA support. An initial online visit is required for hosted offline caching; the complete download needs no internet.

## Portfolio narrative and roles

Lead with the playable work, then the hardware case study: a narrative game that began with a local AI mind in a borrowed board and became accessible after the board was returned. Show a short Bloom/Blight comparison, an actual conversation and ending, then venue footage of the original Jetson setup. Label the original footage separately from the portable script.

Juan directed the concept, hardware setup/platform integration, art and visual direction, UI/audio, lore coordination, Figma and portfolio presentation. Lawrence built/integrated game-core and game-rules work, level progression, enemies/navigation and merge verification. Git history and session logs remain the precise evidence; neither person's role is described as solo creation.

The GPU contention investigation is strong case-study material: source logs report the original game's rendering reduced model throughput, and frame throttling during thinking recovered part of it. If quoting numbers, link the original logs and state that these were device/workload samples, not new benchmarks or universal performance results.

Amulith was built at Knight Hacks IX. The saved Devpost project was not finalized as a competition entry. Do not describe it as judged, prize-winning or officially submitted.

## Verification

41 Node tests and production build passed locally. New tests exercise absent sockets, corpus uniqueness/voice limits, all six NPC route pairs, per-level banks, event queue limits, reset isolation, immediate ask replies and actual shard targets. The Figma identity passed visual inspection after its auto-layout fix.

Browser checks run in `.github/workflows/portable-preview.yml`. They cover two three-level wins, real hold inputs with controlled positions, conversation choices, chronicle, endings, replay and fresh-cache offline production reload. Their fixture is not a human playtime or physical-controller measurement. All browser checks passed in GitHub Actions run 38349622031 against source 58fd812, including recovery with WebGL unavailable and the complete bundled story reader. Local Chromium was unavailable; the CI artifact is the verification evidence.

## Launch package

- Verified playable preview: https://cstljuan.github.io/amulith/story/play/
- Review PR containing executable story, brand exports, static landing page and launch tooling.
- Figma: https://www.figma.com/design/rn6yGida1u6Qg3KAK0vSnB/Untitled?node-id=17-3
- LinkedIn draft in `linkedin.md`, paired with the new social cover and actual gameplay/venue footage.
- Follow-up improvements: measured human balance/playtime, native desktop packaging if desired, richer spirit-specific sprites, campaign checkpoints and a finished narrated demo. These are not claims about the current build.

Figma identity includes editable logo variants, app icons and a social cover. The source gallery documents all 23 shipped PNGs, with 22 native image previews and a repository reference for the oversized shrine texture. Existing character and environment pixels remain preserved; a complete new sprite set is not claimed.
