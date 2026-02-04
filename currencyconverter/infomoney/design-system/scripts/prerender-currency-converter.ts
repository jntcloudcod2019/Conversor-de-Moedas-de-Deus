/**
 * Gera HTML estático do CurrencyConverter para hidratação no WordPress.
 * Executado após o build (npm run build). Saída: dist/componentes/currency-converter/prerender.html
 * Usa o código-fonte do componente para evitar o bundle ESM que depende de window.React.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { CurrencyConverter } from '../src/componentes/currency-converter/CurrencyConverter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist', 'componentes', 'currency-converter');

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

function run() {
  if (typeof globalThis.navigator === 'undefined') {
    (globalThis as any).navigator = { language: 'pt-BR' };
  }
  const html = renderToString(React.createElement(CurrencyConverter, defaultProps));
  mkdirSync(distDir, { recursive: true });
  const outPath = join(distDir, 'prerender.html');
  writeFileSync(outPath, html, 'utf8');
  console.log('prerender: escrito em', outPath);
}

run();
