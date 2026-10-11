"""Debug preview of the shrine detector, as JPEG frames on stdout (standard library only).

The remnant service owns the camera, so this polls its annotated frame instead of
opening /dev/video0. From the laptop:

  ssh ubuntu@192.168.55.1 'python3 ~/amulith/vision/shrine_preview.py' | \\
    mpv --title="Amulith shrine camera" --no-cache --untimed --profile=low-latency --demuxer-lavf-format=mjpeg -
"""

import sys
import time
import urllib.error
import urllib.request

URL = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8765/vision/debug.jpg"
out = sys.stdout.buffer
last = b""
while True:
    try:
        with urllib.request.urlopen(URL, timeout=2) as r:
            jpg = r.read()
        if jpg and jpg != last:
            out.write(jpg)
            out.flush()
            last = jpg
        time.sleep(0.1)
    except urllib.error.HTTPError:
        time.sleep(0.5)  # 503: the camera has not produced an overlay yet
    except (urllib.error.URLError, OSError):
        time.sleep(1.0)  # service restarting
