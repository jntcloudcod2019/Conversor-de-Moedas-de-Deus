/**
 * Wrapper para uso do CurrencyConverter em blocos (ex.: Gutenberg).
 * Gerencia estado (fromValue, toValue, fromCurrency, toCurrency) e repassa
 * config (apiToken, baseCurrency, targetCurrency) para o componente e para a API.
 * Sincroniza toValue com fromValue * rate para o valor convertido refletir no campo destino e no swap.
 */

import React from "react";
import { createRoot } from "react-dom/client";
import { CurrencyConverter, calculateRateFromExchangeRates, useCurrencyConverterData } from "./CurrencyConverter";
import type { Currency, CurrencyConverterProps } from "./types";
import { DEFAULT_CURRENCY_CODES } from "./types";

function getDecimals(code: string): number {
  const decimals: Record<string, number> = { JPY: 0, KRW: 0 };
  return decimals[code] ?? 2;
}

function roundToDecimals(value: number, decimals: number): number {
  if (!Number.isFinite(value)) return 0;
  if (decimals <= 0) return Math.round(value);
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

/** Lista de moedas igual ao referência (CurrencyMapper): código, símbolo e nome. */
const DEFAULT_CURRENCIES: Currency[] = [
  { code: "BRL", symbol: "R$", name: "Real Brasileiro" },
  { code: "USD", symbol: "$", name: "Dólar Americano" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "Libra Esterlina" },
  { code: "JPY", symbol: "¥", name: "Iene Japonês" },
  { code: "CNY", symbol: "¥", name: "Yuan Chinês" },
];

export interface CurrencyConverterBlockConfig {
  apiToken?: string;
  baseCurrency?: string;
  targetCurrency?: string;
}

function getInitialCurrencies(
  list: Currency[],
  fromCode: string | null,
  toCode: string | null
): { from: Currency; to: Currency } {
  const from = fromCode ? list.find((c) => c.code === fromCode) ?? list[0] : list[0];
  const to = toCode
    ? (list.find((c) => c.code === toCode && c.code !== from.code) ??
       list.find((c) => c.code !== from.code) ??
       list[0])
    : (list.find((c) => c.code !== from.code) ?? list[0]);
  return { from, to };
}

const BlockRoot: React.FC<CurrencyConverterBlockConfig> = (config) => {
  const baseCurrency = config.baseCurrency ?? "USD";
  const targetCurrency = config.targetCurrency ?? "BRL";
  const { from: initialFrom, to: initialTo } = getInitialCurrencies(
    DEFAULT_CURRENCIES,
    baseCurrency,
    targetCurrency
  );

  const [fromValue, setFromValue] = React.useState(0);
  const [toValue, setToValue] = React.useState(0);
  const [fromCurrency, setFromCurrency] = React.useState(initialFrom);
  const [toCurrency, setToCurrency] = React.useState(initialTo);
  const [rate, setRate] = React.useState(1);

  const { data: loadedData } = useCurrencyConverterData(
    Array.from(DEFAULT_CURRENCY_CODES),
    "USD",
    { apiToken: config.apiToken }
  );
  const exchangeRates = loadedData?.exchangeRates;

  React.useEffect(() => {
    if (!exchangeRates || Object.keys(exchangeRates).length === 0) {
      setRate(1);
      return;
    }
    calculateRateFromExchangeRates({
      fromCurrencyCode: fromCurrency.code,
      toCurrencyCode: toCurrency.code,
      exchangeRates,
      fallbackRate: 1,
    }).then((r) => {
      if (r != null) setRate(r);
    });
  }, [exchangeRates, fromCurrency.code, toCurrency.code]);

  /* Sincroniza valor de destino com origem * taxa (ex.: 67 BRL → 12,73 USD) e reflete no swap */
  React.useEffect(() => {
    const toDecimals = getDecimals(toCurrency.code);
    const effectiveRate = Number.isFinite(rate) && rate > 0 ? rate : 1;
    const converted = roundToDecimals(fromValue * effectiveRate, toDecimals);
    setToValue(converted);
  }, [fromValue, rate, fromCurrency.code, toCurrency.code]);

  const props: CurrencyConverterProps = {
    fromValue,
    toValue,
    fromCurrency,
    toCurrency,
    rate: undefined,
    currencies: DEFAULT_CURRENCIES,
    exchangeRates: undefined,
    converterData: loadedData ?? undefined,
    apiToken: config.apiToken,
    currencyCodesToFetch: Array.from(DEFAULT_CURRENCY_CODES),
    onFromValueChange: setFromValue,
    onToValueChange: setToValue,
    onFromCurrencyChange: setFromCurrency,
    onToCurrencyChange: setToCurrency,
  };

  return React.createElement(CurrencyConverter, props);
};

/**
 * Monta o conversor em um container (ex.: elemento do bloco Gutenberg).
 * Usa o build do design-system: um único componente com estado e integração à API.
 */
export function renderCurrencyConverter(
  container: HTMLElement,
  config: CurrencyConverterBlockConfig
): void {
  const rootEl = document.createElement("div");
  rootEl.className = "infomoney-cc-root";
  container.innerHTML = "";
  container.appendChild(rootEl);
  container.classList.add("infomoney-cc-loaded");
  const root = createRoot(rootEl);
  root.render(React.createElement(BlockRoot, config));
}
