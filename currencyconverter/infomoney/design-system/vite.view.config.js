import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

/**
 * Build para consumo pelo view.js do WordPress: React/ReactDOM externalizados
 * para que o view use uma única instância do React (evita "useState" null).
 */
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': '{}',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    'process': JSON.stringify({ env: {} }),
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/componentes/currency-converter/index.ts'),
      name: 'InfomoneyCurrencyConverter',
      formats: ['es'],
      fileName: () => 'index.esm.view.js',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', 'react-dom/client'],
      output: {
        assetFileNames: 'style.css',
      },
    },
    outDir: 'dist/componentes/currency-converter',
    emptyOutDir: false,
    cssCodeSplit: false,
    cssMinify: true,
  },
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
  css: { postcss: './postcss.config.js' },
});
