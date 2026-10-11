# Amulith world bible

This is the writing reference for the Amulith fan project. Read [the world bible](world-bible.md) for places, history, characters, factions and vocabulary, then [the Remnant voice guide](remnant-voice.md) before writing spoken lines.

`DECISIONS.md` is the source of truth. Its locked lore records the project's understanding of Knight Hacks IX canon. This folder distinguishes those established facts from our additions; it is not an independent official lore source. Lenny, T.K. and the Knight Hacks lore belong to the Knight Hacks design team. Amulith is a non-commercial fan project.

The content modules in `game/src/lore/` supply proposed text for the game. Documentation does not imply that NPCs, collectibles, intro cards or a codex have been implemented. UI wiring belongs to the UI session, map and progression wiring to the level session, and art to the art session.

## Names and contracts

Progression levels and the existing wire zones are different namespaces. Never translate between them by spelling alone.

| Progression ID | Player-facing level | Writing role |
|---|---|---|
| `grove` | Shrine Grove | The existing hero area around the stone-circle shrine |
| `hollow` | Mushroom Hollow | A deeper level under crowded mushroom caps |
| `deepwood` | Rootdeep | The deepest level, where roots surround the remaining pieces |

The protocol retains `hollow`, `glade` and `rootdeep`, displayed in the existing game as Mushroom Hollow, Petal Glade and Rootdeep. `deepwood` is not a wire value; `grove` does not rename `glade`. The level integration must decide which existing zone a location occupies. No message shape changes are requested.

`game/src/lore/levels.ts` defines the shared `LevelId` and `LEVEL_LORE` contract. Consumers should import its display names and intro/outro text rather than duplicate them. Changes to its shape require coordination on its PR.
