/**
 * market-data – pontos de entrada dos serviços
 * Estrutura alinhada a infomoney/v2/src/services/market-data
 */

export { default as BaseService } from './currency-base-service';
export type { MarketDataConfig } from './currency-base-service';
export { getCurrencyApiConfig, getMoedasUrl } from './currency-config';
export { currencyService, CurrencyService } from './currency-service';

// Exporta todos os tipos
export type {
  CurrencyValuesResponse,
  CurrencyValuesResponseItem,
} from '../types';
