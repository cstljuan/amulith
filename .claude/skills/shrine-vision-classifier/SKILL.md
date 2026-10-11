---
name: shrine-vision-classifier
description: "Build a local camera classifier for sleepy/angry figures, empty shrine and reaching hand, with session-separated data, temporal stability, abstention and manual fallback."
---

# Shrine vision classifier

Use for a fixed-camera physical selection interface. The target project defines event shapes, faction mapping and transitions. This guide covers capture, model evaluation and failure handling without adding lore or a new wire schema.

## Capture and rights

Confirm the camera identity, backend, actual resolution/frame rate, crop and mounting geometry. Check successful reads and frame timestamps. Requested camera settings may not be honored by the backend. Define a small fixed region of interest around the shrine and evaluate exposure/focus under the actual room lighting.

Use the labels `sleepy`, `angry`, `empty` and `hand` when those are the project's four classes. Include occlusion, partial placement, glare, shadows, sleeve changes and unrelated objects. Keep capture-session IDs and split by session or scene condition; adjacent video frames must not leak into both train and evaluation sets. Balance examples without claiming that a few hundred nearly identical frames establish generalization.

Before capture or sharing, confirm rights for figures/art, pretrained model weights and recorded data separately. Keep bystanders out of frame, minimize hand/person data and avoid committing raw captures. Dataset/model publication is a separate authorized action after consent, license and privacy review. Noncommercial fan-project status is not automatic permission to publish others' art.

## Local inference and decisions

- Establish a simple baseline and per-class confusion matrix on held-out sessions, then select a small pretrained classifier that fits alongside rendering and the local director.
- Record preprocessing, crop, label order, model revision and weight hash. Check model load behavior for remote code and network calls before runtime use.
- Treat `hand` as an occlusion class, and `empty` as an observed scene class. Low confidence, unknown objects, frozen frames and camera failure need abstention, not a forced empty or figure prediction.
- Gate events by a measured confidence threshold and stable time window, with hysteresis. Reset stability on stale frames and reconnect. Thresholds are calibrated on held-out captures; scores are not assumed calibrated probabilities.
- Preserve the last accepted game state only as the project specifies. A lost camera must surface a hardware fault and offer controller/keyboard selection rather than inventing a removal event.
- If training/export is authorized later, validate converted TensorRT outputs against the baseline on the target Jetson. Engines are tied to runtime/device compatibility; do not treat successful export as evidence of live accuracy.

## Acceptance

Replay unseen sessions for each class and unknown/occluded cases. Test placement, removal, both figures, reaching hand, bad lighting, unplug/replug and stale-frame behavior. Record confusion counts, false transitions, abstentions and capture-to-event latency. Repeat with the browser and director running. A template or marker fallback must be labelled as such; do not call it a trained classifier.

Deliver label/preprocessing metadata, data and model rights, held-out results and manual-fallback evidence. Capture, training, weight download and Hub publication remain separate implementation actions.

## References

- [OpenCV VideoCapture](https://docs.opencv.org/4.13.0/d8/dfe/classcv_1_1VideoCapture.html).
- [Hugging Face model cards](https://huggingface.co/docs/hub/model-cards) and [dataset cards](https://huggingface.co/docs/hub/datasets-cards).
- [License and provenance](NOTICE.md). This document ships no model, dataset or capture script.
