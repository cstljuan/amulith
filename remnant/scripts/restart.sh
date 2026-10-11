#!/usr/bin/env bash
# Restarts the remnant service on the Jetson (llama-server is left running).
cd "$(dirname "$0")/.."
if [ -f /tmp/remnant.pid ]; then kill "$(cat /tmp/remnant.pid)" 2>/dev/null; sleep 1; fi
setsid nohup .venv/bin/uvicorn remnant.server:app --host 0.0.0.0 --port 8765 > /tmp/remnant.log 2>&1 < /dev/null &
echo $! > /tmp/remnant.pid
for i in $(seq 1 15); do curl -sf localhost:8765/health && exit 0; sleep 1; done
echo "remnant did not come up"; tail -20 /tmp/remnant.log; exit 1
