"""Reads tegrastats and keeps the latest timestamped sample. Missing fields stay None."""

import asyncio
import re
import shutil
import time

_RAM = re.compile(r"RAM (\d+)/(\d+)MB")
_CPU = re.compile(r"CPU \[([^\]]*)\]")
_GPU = re.compile(r"GR3D_FREQ (\d+)%")
_TEMP = re.compile(r"(?:tj|gpu|cpu)@([\d.]+)C")
_POWER = re.compile(r"VDD_IN (\d+)mW")


def parse(line: str) -> dict:
    out = {"gpu_pct": None, "cpu_pct": None, "ram_used_mb": None, "ram_total_mb": None, "power_mw": None, "temp_c": None}
    if m := _RAM.search(line):
        out["ram_used_mb"], out["ram_total_mb"] = int(m[1]), int(m[2])
    if m := _CPU.search(line):
        loads = [int(x) for x in re.findall(r"(\d+)%@", m[1])]
        if loads:
            out["cpu_pct"] = round(sum(loads) / len(loads))
    if m := _GPU.search(line):
        out["gpu_pct"] = int(m[1])
    temps = [float(t) for t in _TEMP.findall(line)]
    if temps:
        out["temp_c"] = round(max(temps), 1)
    if m := _POWER.search(line):
        out["power_mw"] = int(m[1])
    return out


class Telemetry:
    def __init__(self) -> None:
        self.sample: dict | None = None
        self.at = 0.0

    def latest(self) -> dict | None:
        if self.sample is None or time.monotonic() - self.at > 3.0:
            return None
        return self.sample

    async def run(self) -> None:
        exe = shutil.which("tegrastats") or "/usr/bin/tegrastats"
        while True:
            try:
                proc = await asyncio.create_subprocess_exec(
                    exe, "--interval", "1000", stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.DEVNULL
                )
                assert proc.stdout
                while line := await proc.stdout.readline():
                    self.sample = parse(line.decode(errors="ignore")[:2000])
                    self.at = time.monotonic()
            except Exception:
                pass
            await asyncio.sleep(2)
