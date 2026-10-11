import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  base: './',
  resolve: {
    // Avoid native realpath failures in restricted Windows workspaces.
    preserveSymlinks: true,
    alias: { '@protocol': fileURLToPath(new URL('../protocol', import.meta.url)) },
  },
});
