/**
 * Entry para build SSR que gera prerender.html.
 * Vite build --ssr scripts/prerender-entry.ts
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { CurrencyConverter } from '../src/componentes/currency-converter/CurrencyConverter';

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

// Caminho absoluto: dist/componentes/currency-converter a partir da raiz do projeto
const rootDir = process.cwd();
const distDir = join(rootDir, 'dist', 'componentes', 'currency-converter');
if (typeof (globalThis as any).navigator === 'undefined') {
  (globalThis as any).navigator = { language: 'pt-BR' };
}
const html = renderToString(React.createElement(CurrencyConverter, defaultProps));
mkdirSync(distDir, { recursive: true });
const outPath = join(distDir, 'prerender.html');
writeFileSync(outPath, html, 'utf8');
console.log('prerender: escrito em', outPath);
