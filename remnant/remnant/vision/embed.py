"""Optional backup vote: a pretrained image embedding with nearest-neighbour matching.

Model: MediaPipe's MobileNetV3-Small image embedder (Apache-2.0), a plain ImageNet
feature extractor. It is not trained on our figures; we only store embeddings of
a few desk captures per figure (the gallery) and compare by cosine similarity.
OpenCV's DNN module reads the .tflite file directly, so no extra runtime is needed.

Fetch: `python -m remnant.vision fetch-model` (checks the SHA-256 below).
"""

from __future__ import annotations

import hashlib
import urllib.request
from pathlib import Path

import cv2
import numpy as np

MODEL_URL = "https://storage.googleapis.com/mediapipe-models/image_embedder/mobilenet_v3_small/float32/latest/mobilenet_v3_small.tflite"
MODEL_SHA256 = "bbbb4c51a55a53905af1daec995ca1aae355046f8839bb8c9f5ce9271394bc40"
REMNANT_DIR = Path(__file__).resolve().parents[2]
MODEL_PATH = REMNANT_DIR / "models" / "mobilenet_v3_small.tflite"
GALLERY_PATH = REMNANT_DIR / "models" / "shrine_gallery.npz"


def fetch_model(path: Path = MODEL_PATH) -> Path:
    path.parent.mkdir(parents=True, exist_ok=True)
    if not path.exists():
        urllib.request.urlretrieve(MODEL_URL, path)
    digest = hashlib.sha256(path.read_bytes()).hexdigest()
    if digest != MODEL_SHA256:
        path.unlink()
        raise RuntimeError(f"embedder checksum mismatch: {digest}")
    return path


def crop_square(roi_bgr: np.ndarray, box: tuple[int, int, int, int], pad: float = 0.15) -> np.ndarray:
    x, y, w, h = box
    side = int(max(w, h) * (1 + 2 * pad))
    cx, cy = x + w // 2, y + h // 2
    H, W = roi_bgr.shape[:2]
    x0, y0 = max(0, cx - side // 2), max(0, cy - side // 2)
    x1, y1 = min(W, x0 + side), min(H, y0 + side)
    return roi_bgr[y0:y1, x0:x1]


class Embedder:
    def __init__(self, model_path: Path = MODEL_PATH, gallery_path: Path | None = GALLERY_PATH) -> None:
        digest = hashlib.sha256(Path(model_path).read_bytes()).hexdigest()
        if digest != MODEL_SHA256:
            raise RuntimeError("embedder weights do not match the pinned checksum")
        self.net = cv2.dnn.readNetFromTFLite(str(model_path))
        self.gallery: dict[str, np.ndarray] = {}
        if gallery_path is not None and Path(gallery_path).exists():
            data = np.load(gallery_path)
            self.gallery = {k: data[k] for k in data.files}

    def embed(self, crop_bgr: np.ndarray) -> np.ndarray:
        # [0, 1] RGB matches MediaPipe ImageEmbedder output (cosine 1.0000 on the Jetson, 11 frames).
        blob = cv2.dnn.blobFromImage(crop_bgr, 1 / 255.0, (224, 224), (0, 0, 0), swapRB=True)
        self.net.setInput(blob)
        v = self.net.forward().ravel().astype(np.float32)
        return v / (np.linalg.norm(v) + 1e-6)

    def score(self, roi_bgr: np.ndarray, box) -> float | None:
        """Positive means closer to angry, negative closer to sleepy; None without a gallery."""
        if "sleepy" not in self.gallery or "angry" not in self.gallery:
            return None
        crop = crop_square(roi_bgr, box)
        if crop.size == 0:
            return None
        v = self.embed(crop)

        def sim(label: str) -> float:
            s = self.gallery[label] @ v
            return float(np.sort(s)[-3:].mean())  # mean of the 3 nearest

        return sim("angry") - sim("sleepy")

    @staticmethod
    def save_gallery(path: Path, gallery: dict[str, list[np.ndarray]]) -> None:
        path.parent.mkdir(parents=True, exist_ok=True)
        np.savez(path, **{k: np.stack(v) for k, v in gallery.items() if v})
