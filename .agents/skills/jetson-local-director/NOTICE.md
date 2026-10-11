# License and provenance

Original AI Resource Library documentation by Juan Castillo, reviewed for distribution on 2026-10-10. The accompanying MIT LICENSE applies to this guide only. No upstream code, scripts, skill text, models, datasets or assets are redistributed. Upstream software and assets retain their separate terms.

AI Resource Library is canonical. Team/game copies are pinned distribution snapshots; propose guide edits to the canonical source and refresh all copies from a reviewed commit. The enclosing snapshot manifest records that commit and every file hash. No access to a private repository is required to use these files.

## Pinned reference sources

- [NVIDIA/skills](https://github.com/NVIDIA/skills/tree/14a98ae278cec7e867695189d0f4003c08e4f765), revision `14a98ae278cec7e867695189d0f4003c08e4f765`. Terms observed: README: documentation CC-BY-4.0, code Apache-2.0; selected SKILL frontmatter Apache-2.0. Relationship: reference only.
- [huggingface/skills](https://github.com/huggingface/skills/tree/c3ff942be3e07116b475253f0a8fc4f54682c1a8), revision `c3ff942be3e07116b475253f0a8fc4f54682c1a8`. Terms observed: Apache-2.0. Relationship: reference only.
- [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp/tree/23b0202a189c44a54625aadcb37a946dd1d6278d), revision `23b0202a189c44a54625aadcb37a946dd1d6278d`. Terms observed: MIT. Relationship: server documentation reference only.

NVIDIA review was limited to jetson-diagnostic (complete entrypoint, five scripts, two references) and jetson-llm-benchmark (complete entrypoint and llama.cpp wrapper). Other benchmark wrappers, installers and unrelated Jetson skills were not reviewed. Hugging Face review covered huggingface-local-models and its three references. No upstream commands were run; these skills are not installed. Version labels and illustrative performance tables do not prove target-device compatibility.
