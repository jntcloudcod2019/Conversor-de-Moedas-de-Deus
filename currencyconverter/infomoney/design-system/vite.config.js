import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Definir variáveis globais do Node.js para o navegador
    'process.env': '{}',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    'process': JSON.stringify({ env: {} }),
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/componentes/currency-converter/index.ts'),
      name: 'InfomoneyCurrencyConverter',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'esm' : 'cjs'}.js`,
    },
    rollupOptions: {
      // Não externalizar React/ReactDOM - incluir no bundle para funcionar como módulo ES6 no navegador
      // external: ['react', 'react-dom'],
      output: {
        assetFileNames: 'style.css',
      },
    },
    outDir: 'dist/componentes/currency-converter',
    emptyOutDir: true,
    cssCodeSplit: false,
    cssMinify: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
});
