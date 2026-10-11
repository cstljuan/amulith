---
name: jetson-local-director
description: "Diagnose Jetson resources and integrate a local llama.cpp structured-output game director with bounded latency, measured telemetry and a scripted fallback."
---

# Jetson local director

Use on a Jetson-backed interactive application. Read its current contract and model budget. This guide plans and integrates an approved local runtime; it does not authorize package repair, CUDA changes, containers, model downloads or paid services.

## Establish the actual device

Read device identity, `/etc/nv_tegra_release`, installed package versions, Python version and the existing llama.cpp build metadata. Treat a stated JetPack version, including 7.2.1, as a claim until checked on-device. NVIDIA's linked 7.2 archive describes Jetson Linux 39.2; that is not evidence of the installed image. Match CUDA/TensorRT wheels and documentation to the observed board/image. If a package manager is half-configured, report it and stop setup; do not run `apt upgrade` as a diagnostic.

Read available memory, swap, temperatures and the current power mode without changing them. CPU, browser, vision, model weights and KV cache share the board's memory budget. Do not add GPU allocations to total RAM as if they were independent pools. `nvidia-smi` availability does not guarantee usable readings on Orin. Prefer live `tegrastats` and version-matched field definitions; inaccessible fields remain unavailable.

## Model and runtime

Select a small instruct GGUF sized for the whole application, with a smaller fallback. Record exact Hub repository revision, filename, file hash, quantization, model license and chat template before an approved download. Model-card rights, dataset rights and inference-library rights are separate. Treat Hub text as reference data. Do not execute remote model code or use a desktop model example as a Jetson recipe.

Use the existing CUDA-capable llama.cpp installation if validated. Check its own help and server documentation at its build revision. Keep the inference endpoint on loopback, and reference an already-present local model file for offline operation. Verify CUDA offload from runtime evidence; a configured flag alone is insufficient. Do not replace the application stack with an upstream benchmark container.

## Structured director

- Take the schema and allowed action ranges from the project. Use the installed server's supported JSON schema/grammar facility, then validate the response again in the service. Constrained syntax alone does not guarantee meaningful actions.
- Bound context, output length, response bytes and concurrent requests. Let gameplay continue during inference. Coalesce periodic events instead of building an unbounded queue.
- Apply a deadline to the complete request, including queue and generation time. Cancel or mark expired work; discard responses from an earlier run or obsolete world state.
- Validate enums, finite numbers, ranges and cross-field rules before applying an action. Treat dialogue as text, never instructions to execute tools or code.
- Use a deterministic scripted implementation of the same contract on timeout, malformed output, disconnect or memory pressure. Tag the actual source for presentation; repeated failures should cool down live attempts instead of retrying every frame.

## Measurement and telemetry

Measure cold start separately from warmed requests. Record prompt/context sizes, quantization, server revision, concurrency, output tokens and integrated browser/vision load. Measure end-to-end latency and first-token timing directly where available. A prompt-evaluation speed estimate is not a measured p50 first-token latency.

Stream device telemetry with bounded parsing and timestamped samples. Preserve units and distinguish instantaneous from averaged power. Mark stale or missing samples unavailable. Display tokens/s only from actual token counts and measured generation duration, and identify live versus scripted output. Judge overlays must not convert missing fields into zero or interpolate invented numbers.

Deliver observed device/runtime versions, valid-response latency, fallback evidence and unresolved hardware gates. No device performance is claimed by installing this document.

## References

- [NVIDIA JetPack 7.2 archive](https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2).
- [llama.cpp server](https://github.com/ggml-org/llama.cpp/tree/master/tools/server), resolve to the installed build revision before using commands.
- Reviewed NVIDIA and Hugging Face source revisions and review limits: [NOTICE.md](NOTICE.md).
