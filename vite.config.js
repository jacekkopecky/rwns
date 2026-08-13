import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/rwns',
  plugins: [
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg}'],
      },
      manifest: {
        name: 'RWNS',
        short_name: 'RWNS',
        description: 'Robots Walking and Shooting – a simple free game',
        theme_color: '#f3e9b9',
        background_color: '#f3e9b9',
        icons: [
          {
            src: 'icon.svg',
            sizes: 'any',
          },
        ],
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: '2000',
    outDir: 'docs-v2',
  },
});
