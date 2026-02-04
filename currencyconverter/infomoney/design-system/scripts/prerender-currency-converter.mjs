/**
 * Gera HTML estático do CurrencyConverter para hidratação no WordPress.
 * Executado após o build (npm run build). Saída: dist/componentes/currency-converter/prerender.html
 */
import React from 'react';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { mkdirSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist', 'componentes', 'currency-converter');

// O bundle ESM do design-system espera React e browser globals (build para browser)
globalThis.window = globalThis.window ?? {};
globalThis.window.React = React;
globalThis.window.ReactDOM = { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {} };
globalThis.window.location = globalThis.window.location ?? { hostname: '', href: '', pathname: '/' };
globalThis.document = globalThis.document ?? { createElement: () => ({}), body: {} };

// Mock para SSR (useLocaleSeparators usa navigator.language)
if (typeof globalThis.navigator === 'undefined') {
  globalThis.navigator = { language: 'pt-BR' };
}

const DEFAULT_CURRENCIES = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'BRL', symbol: 'R$', name: 'Brazilian Real' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
];

const defaultProps = {
  fromValue: 1,
  toValue: 5,
  fromCurrency: DEFAULT_CURRENCIES[0],
  toCurrency: DEFAULT_CURRENCIES[1],
  rate: 5,
  currencies: DEFAULT_CURRENCIES,
  exchangeRates: { USD: 1, BRL: 5, EUR: 0.9, GBP: 0.8, JPY: 150, CNY: 7.2 },
  onFromValueChange: () => {},
  onToValueChange: () => {},
  onFromCurrencyChange: () => {},
  onToCurrencyChange: () => {},
};

async function run() {
  // Caminho relativo ao script (scripts/ -> ../dist/...)
  const modulePath = join(__dirname, '..', 'dist', 'componentes', 'currency-converter', 'index.esm.js');
  const { pathToFileURL } = await import('url');
  let CurrencyConverter;
  try {
    const mod = await import(pathToFileURL(modulePath).href);
    CurrencyConverter = mod.CurrencyConverter ?? mod.default;
  } catch (err) {
    console.error('prerender: não foi possível carregar o componente. Rode "npm run build" antes.', err.message);
    process.exit(1);
  }

  if (!CurrencyConverter) {
    console.error('prerender: CurrencyConverter não encontrado no módulo.');
    process.exit(1);
  }

  const html = renderToString(createElement(CurrencyConverter, defaultProps));
  mkdirSync(distDir, { recursive: true });
  const outPath = join(distDir, 'prerender.html');
  writeFileSync(outPath, html, 'utf8');
  console.log('prerender: escrito em', outPath);
}

run().catch((err) => {
  console.error('prerender:', err);
  process.exit(1);
});
