#!/usr/bin/env bash
# Starts llama-server on loopback with the director model. Model path can be overridden.
set -euo pipefail
MODEL="${AMULITH_MODEL:-$HOME/models/qwen2.5-3b-instruct-q4_k_m.gguf}"
exec "$HOME/llama.cpp/build/bin/llama-server" \
  -m "$MODEL" --host 127.0.0.1 --port 8080 \
  -ngl 99 -c 2048 -np 1 --no-webui
