"""Shrine vision CLI.

  python -m remnant.vision preview            camera -> annotated JPEG frames on stdout (pipe to mpv);
                                              use only when the remnant service is not holding the camera
  python -m remnant.vision eval <captures>    per-class tables on saved captures, with room shifts
  python -m remnant.vision gallery <captures> build the embedding gallery from the first 30% of each figure folder
  python -m remnant.vision fetch-model        download the pinned embedder weights
"""

from __future__ import annotations

import argparse
import sys
import time
from pathlib import Path

import cv2


def preview(args) -> None:
    from .camera import ShrineCamera
    cam = ShrineCamera(on_change=lambda s, c: print(f"shrine -> {s} {c:.2f}", file=sys.stderr, flush=True),
                       device=args.device, fps=args.fps).start()
    out = sys.stdout.buffer
    last = None
    while True:
        jpg = cam.debug_jpeg()
        if jpg is not None and jpg is not last:
            out.write(jpg)
            out.flush()
            last = jpg
        time.sleep(0.05)


def main() -> None:
    ap = argparse.ArgumentParser(prog="python -m remnant.vision")
    sub = ap.add_subparsers(dest="cmd", required=True)
    p = sub.add_parser("preview")
    p.add_argument("--device", default="/dev/video0")
    p.add_argument("--fps", type=float, default=5.0)
    e = sub.add_parser("eval")
    e.add_argument("root", type=Path)
    e.add_argument("--session", default="desk1")
    e.add_argument("--embed", action="store_true", help="add the embedding vote (needs model + gallery)")
    e.add_argument("--no-reference", action="store_true", help="figure-only cues, no empty reference")
    e.add_argument("--shift", action="append", help="limit to these shifts")
    g = sub.add_parser("gallery")
    g.add_argument("root", type=Path)
    g.add_argument("--session", default="desk1")
    sub.add_parser("fetch-model")
    args = ap.parse_args()

    if args.cmd == "preview":
        preview(args)
    elif args.cmd == "eval":
        from .evaluate import table
        emb = None
        if args.embed:
            from .embed import Embedder
            emb = Embedder()
        print(table(args.root, args.session, emb, args.shift, calibrate=not args.no_reference))
    elif args.cmd == "gallery":
        from .embed import GALLERY_PATH, Embedder
        from .evaluate import build_gallery
        emb = Embedder(gallery_path=None)
        gal = build_gallery(args.root, args.session, emb)
        Embedder.save_gallery(GALLERY_PATH, gal)
        print({k: len(v) for k, v in gal.items()}, "->", GALLERY_PATH)
    elif args.cmd == "fetch-model":
        from .embed import fetch_model
        print(fetch_model())


if __name__ == "__main__":
    cv2.setNumThreads(2)
    main()
