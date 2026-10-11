# Agent rules for Amulith

Read this, `DECISIONS.md`, and `protocol/` before any task. Skills are installed per machine (not in this repo); use the ones relevant to your lane.

## Coordination

- Tasks live in GitHub Issues. One issue per feature, labelled with its lane (`lane:platform`, `lane:game-core`, `lane:game-rules`, `lane:visuals`, `lane:ui-audio`, `lane:case`, `lane:firmware`). Claim an issue by assigning it before you start.
- Work on a branch named `<lane>/<topic>`. Never commit to `main` directly. Open a pull request that says `Closes #<issue>`.
- Stay inside your lane's folder. If you must touch another lane's files, comment on that lane's issue first.
- `protocol/` is owned by the platform lane. Do not change message shapes; open an issue asking for the change.
- `main` must always build and run.
- Log each work session at the top of `TEAM-LOG.md`.

## Hard rules

- No secrets in Git (API keys live in `.env` on the Jetson only; `.env` is ignored). This repo is public.
- No em dashes in code comments, docs, or commit messages.
- Commits are authored by the human running the agent. No AI attribution lines, no Co-Authored-By.
- Never invent metrics or claims in docs or UI. Label scripted or illustrative content honestly.
- Do not add decorative dot grids or halftone textures to the visuals.
- Only add a dependency if the pull request says why.

## Deadlines (Sunday)

Devpost submission 10:00 AM (team target 9:00 AM). Final code push 11:00 AM. No commits after 11:00 AM.
