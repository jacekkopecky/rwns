import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/shoot-em',
  plugins: [
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
    }),
  ],
  build: {
    chunkSizeWarningLimit: '2000',
    outDir: 'docs',
  },
});
