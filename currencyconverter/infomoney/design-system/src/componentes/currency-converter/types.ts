/**
 * Array padrão de códigos de moedas suportadas
 */
export const DEFAULT_CURRENCY_CODES = ['BRL', 'USD', 'EUR', 'GBP', 'JPY', 'CNY'] as const;

/**
 * Type derivado do array de códigos de moedas
 */
export type CurrencyCode = typeof DEFAULT_CURRENCY_CODES[number]; 

export type Device = 'web' | 'mobile';

export interface Currency {
  code: string;
  symbol: string;
  name: string;
}

/**
 * Objeto completo para usar no CurrencyConverter
 * Gerado a partir dos dados da API pelo AutoMapper
 */
export interface CurrencyConverterData {
  currencies: Currency[];
  exchangeRates: Record<string, number>;
  lastUpdated: string;
}

export interface CurrencyConverterProps {
  fromValue: number;
  toValue: number;
  fromCurrency: Currency;
  toCurrency: Currency;
  rate?: number; // Opcional: pode ser calculado a partir de exchangeRates
  currencies: Currency[];
  exchangeRates?: Record<string, number>; // Taxas de câmbio da API (gerado pelo AutoMapper)
  lastUpdated?: string;
  onFromValueChange: (value: number) => void;
  onToValueChange?: (value: number) => void;
  onFromCurrencyChange: (currency: Currency) => void;
  onToCurrencyChange: (currency: Currency) => void;
  // Opção alternativa: receber o objeto completo do AutoMapper
  converterData?: CurrencyConverterData;
  // Moedas para buscar da API na inicialização
  currencyCodesToFetch?: CurrencyCode[];
  /** Token para API de cotações (ex.: AwesomeAPI) */
  apiToken?: string;
}

/**
 * Tipos e interfaces para CurrencyService
 * Baseado na documentação do serviço WordPress
 */

/**
 * Item de resposta para valores de cotação de moedas
 * Formato exato retornado pela API: /market/currency/quote/last/{symbol}
 */
export interface CurrencyValuesResponseItem {
  symbol: string;         // Símbolo da moeda (ex: "USD", "EUR")
  tradeDate: string;     // Data da negociação (ISO string)
  bid: number;            // Preço de compra
  ask: number;             // Preço de venda
  change: number;         // Variação
  changeMonth: number;    // Variação mensal
  changeYear: number;     // Variação anual
  change52w?: number;     // Variação 52 semanas (opcional)
}

/**
 * Estrutura de resposta para valores de cotação de moedas
 */
export interface CurrencyValuesResponse {
  result?: CurrencyValuesResponseItem[]; // Array de itens de cotação
  pageInfo?: {
    hasNextPage: boolean; // Indica se há próxima página
  };
}

export const currencyToCountryMap: Record<string, string> = {
  BRL: "BR",
  USD: "US",
  EUR: "DE",
  GBP: "GB",
  JPY: "JP",
  CNY: "CN",
  OJY: "CN",
};

export const getCountryCodeByCurrency = (currencyCode: string): string =>
  currencyToCountryMap[currencyCode] || "US";
