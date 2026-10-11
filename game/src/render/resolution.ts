import type { WebGLRenderer } from 'three';

// The LLM shares the Jetson GPU, so the drawing buffer never exceeds 1080p worth of pixels.
// A 4K TV renders at half resolution and the browser upscales the canvas.
// ?render=720 (or 900, 1080) lowers the cap further on the TV.
const renderRows = Number(new URLSearchParams(window.location.search).get('render')) || 1080;
export const MAX_RENDER_PIXELS = Math.round(renderRows * 16 / 9) * renderRows;

export function renderPixelRatio(cssWidth: number, cssHeight: number, devicePixelRatio: number, maxPixels = MAX_RENDER_PIXELS): number {
  const area = Math.max(1, cssWidth * cssHeight);
  return Math.min(devicePixelRatio, 2, Math.sqrt(maxPixels / area));
}

// Drop-in replacement for setPixelRatio + setSize in the resize handler.
export function sizeRenderer(renderer: WebGLRenderer, cssWidth: number, cssHeight: number, devicePixelRatio = window.devicePixelRatio, maxPixels = MAX_RENDER_PIXELS): void {
  renderer.setPixelRatio(renderPixelRatio(cssWidth, cssHeight, devicePixelRatio, maxPixels));
  renderer.setSize(cssWidth, cssHeight);
}
