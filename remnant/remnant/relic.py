"""Serial bridge to the Arduino relic (firmware/relic). One thread owns the port.

Arduino -> host: "K <0-1023>", "B 1" / "B 0", "H" heartbeat, "R amulith-relic 1".
Host -> Arduino: "L <i|t|n|s|o> <0-255>".
"""

import asyncio
import glob
import queue
import threading
import time

import serial

BAUD = 115200
HEARTBEAT_TIMEOUT_S = 3.0
MODES = {"idle": "i", "thinking": "t", "near": "n", "solid": "s", "off": "o"}


def find_port() -> str | None:
    by_id = sorted(glob.glob("/dev/serial/by-id/*Arduino*"))
    if by_id:
        return by_id[0]
    acm = sorted(glob.glob("/dev/ttyACM*"))
    return acm[0] if acm else None


class Relic:
    def __init__(self, loop: asyncio.AbstractEventLoop, on_event) -> None:
        self.loop = loop
        self.on_event = on_event  # async callable(dict)
        self.out: queue.Queue[str] = queue.Queue(maxsize=8)
        self.last_seen = 0.0
        self.knob: float | None = None
        self.button = "up"
        threading.Thread(target=self._run, daemon=True).start()

    @property
    def ready(self) -> bool:
        return time.monotonic() - self.last_seen < HEARTBEAT_TIMEOUT_S

    def set_led(self, mode: str, level: float = 1.0) -> None:
        code = MODES.get(mode)
        if code is None:
            return
        lv = max(0, min(255, int(level * 255)))
        try:
            self.out.put_nowait(f"L {code} {lv}\n")
        except queue.Full:
            pass

    def _emit(self, msg: dict) -> None:
        asyncio.run_coroutine_threadsafe(self.on_event(msg), self.loop)

    def _run(self) -> None:
        backoff = 1.0
        while True:
            port = find_port()
            if not port:
                time.sleep(backoff)
                backoff = min(backoff * 2, 10)
                continue
            try:
                with serial.Serial(port, BAUD, timeout=0.1, write_timeout=0.5) as s:
                    backoff = 1.0
                    self.knob, self.button = None, "up"
                    with self.out.mutex:
                        self.out.queue.clear()
                    buf = b""
                    while True:
                        while not self.out.empty():
                            s.write(self.out.get_nowait().encode())
                        chunk = s.read(64)
                        if not chunk and self.last_seen and time.monotonic() - self.last_seen > 10:
                            raise serial.SerialException("relic silent")
                        buf += chunk
                        if len(buf) > 256:
                            buf = buf[-64:]
                        while b"\n" in buf:
                            line, buf = buf.split(b"\n", 1)
                            self._line(line.decode(errors="ignore").strip())
            except (serial.SerialException, OSError):
                self.last_seen = 0.0
                time.sleep(backoff)
                backoff = min(backoff * 2, 10)

    def _line(self, line: str) -> None:
        if not line or len(line) > 32:
            return
        self.last_seen = time.monotonic()
        if line.startswith("K "):
            try:
                raw = int(line[2:])
            except ValueError:
                return
            if 0 <= raw <= 1023:
                self.knob = round(raw / 1023, 2)
                self._emit({"type": "relic", "knob": self.knob, "button": self.button})
        elif line in ("B 1", "B 0"):
            self.button = "down" if line == "B 1" else "up"
            self._emit({"type": "relic", "knob": self.knob if self.knob is not None else 0.5, "button": self.button})
