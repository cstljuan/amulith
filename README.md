# Amulith

A Knight Hacks IX game that lives inside an NVIDIA Jetson Orin Nano. Built at Knight Hacks IX (UCF, October 2026).

Something the shattered gem left behind is still awake under the roots. In Amulith it is real: an open-source language model running on the Jetson GPU, housed in a printed stone hill on the table. Place a Lenny figure on the shrine and the forest chooses a side.

Status: in development during the hackathon. Details land here as they are built.

## Repo layout

| Folder | What lives there |
|---|---|
| `game/` | The 2.5D paper-style web game (runs in a browser on the Jetson) |
| `remnant/` | Jetson service: LLM director, shrine vision, voice, Arduino bridge, telemetry |
| `firmware/relic/` | Arduino sketch for the relic (knob, button, green LED) |
| `case/` | Parametric CAD and STL for the printed hill |
| `protocol/` | The message contract between the game and the Jetson service |
| `tools/mock-remnant/` | Fake Jetson service so the game can be built on a laptop |

## Credits

Knight Hacks IX lore, Lenny, and T.K. belong to the Knight Hacks design team. This is a non-commercial fan project made at their event.
