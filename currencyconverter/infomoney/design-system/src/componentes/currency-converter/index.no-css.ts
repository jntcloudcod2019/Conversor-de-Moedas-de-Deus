/**
 * Entry point sem import de CSS para consumo pelo plugin WordPress (view.js).
 * Garante uma única instância do React no bundle.
 */
export {
  CurrencyConverter,
  calculateRateFromExchangeRates,
  getCurrentDateTime,
  useCurrencyConverterData,
} from './CurrencyConverter';
export type { UseCurrencyConverterDataResult } from './CurrencyConverter';
export type {
  Currency,
  CurrencyCode,
  CurrencyConverterProps,
  CurrencyConverterData,
  Device,
} from './types';
export { DEFAULT_CURRENCY_CODES } from './types';
export { CurrencyMapper } from './services/currencyMapper';
