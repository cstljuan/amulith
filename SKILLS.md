# Reviewed project skills

Seven logical guides support the LOCKED Three.js spec in DECISIONS.md. AI Resource Library is canonical. These complete, self-contained folders are pinned distribution snapshots under both `.agents/skills/<name>/` (Codex) and `.claude/skills/<name>/` (Claude Code). Start a fresh agent process in this review checkout for discovery. No private repository, submodule, absolute path or external symlink is required to use them.

| Guide | Relevant lane and use |
|---|---|
| threejs-scene-workflow | game-core/visuals: renderer, camera, scene lifecycle |
| threejs-paper-game | game-core/visuals: cutouts, pose animation, input and integrated rendering budget |
| build123d-mcp-workflow | case: iterative dimensioned modeling and export; verify locked hill openings, airflow, fit and slicer estimate with the human before printing |
| jetson-local-director | platform: actual device preflight, local constrained director, telemetry and scripted fallback |
| shrine-vision-classifier | platform: sleepy/angry/empty/hand capture and evaluation, abstention and manual selection |
| arduino-usb-relic | firmware/platform: button/knob/LED serial integration and disconnect fallback |
| offline-game-qa | all lanes: full judging run, portable build and fault matrix |

The project's DECISIONS.md and protocol/ own lore, message shapes, acceptance gates and file ownership. Skill text does not replace them. The CAD guide can support direct modeling plans without installing its referenced MCP server. No React stack is introduced.

## Pin and verify

[skills-sync.json](skills-sync.json) records the exact canonical library branch commit, upstream revisions and every file hash. That branch is unmerged; the pin is an actual review commit, not a claim about library main. Each guide includes LICENSE and NOTICE. Run `python3 tools/verify-skills.py --manifest skills-sync.json` from the repository root. The verifier checks both mirrors, inventories, pins and local references without network access.

## Refresh

Propose reusable edits in AI Resource Library first. From an explicitly reviewed exact source commit, copy only the seven folders listed in the manifest into both discovery roots, including supporting files. Update the source commit, merge status and all hashes; copy the canonical verifier and record its hash. Verify and commit on the platform review branch following the existing issue/lane rules. Never edit only one snapshot or automatically pull the latest upstream skill suite.

## Remaining gates

Files and agent discovery are separate from runtime readiness. Real Jetson rendering and local JSON response latency, authorized model/data rights and downloads, camera capture/training/TensorRT equivalence, Arduino wiring/flashing and an empty-cache offline judging run still require implementation and measured verification. The current repository is a skeleton with no game build/test command; no playable build is claimed in this skills phase.

## Discovery proof

Fresh Codex app-server `skills/list` with forced reload returned all seven enabled project skills at their `.agents/skills` paths. Fresh Claude Code SDK initialization returned all seven skill commands. No model prompt or skill invocation was sent. Both folder roots and their 42 files passed the bundled verifier; all skill YAML frontmatter parsed successfully and `git diff --check` passed. These checks establish discovery and snapshot integrity, not a playable build or tested hardware.
