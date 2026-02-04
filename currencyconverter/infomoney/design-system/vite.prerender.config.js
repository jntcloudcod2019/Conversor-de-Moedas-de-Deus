import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: 'scripts/prerender-entry.ts',
    outDir: 'dist-ssr',
    rollupOptions: {
      input: resolve(__dirname, 'scripts/prerender-entry.ts'),
      output: {
        entryFileNames: 'prerender-entry.js',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
