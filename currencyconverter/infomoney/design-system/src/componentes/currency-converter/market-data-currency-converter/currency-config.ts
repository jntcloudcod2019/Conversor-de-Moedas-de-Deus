/**
 * currency-config – alinhado à estrutura infomoney/v2/services/market-data/currency-config.ts
 * Configuração de moedas e endpoints usada pelos serviços de currency.
 */

import BaseService from './currency-base-service';
import type { ApiConfig } from '../services/currencyApi';
import { getEnvironmentApiConfig } from '../services/currency-environment';

const CURRENCY_ENDPOINT = '/currencies';

/**
 * Retorna ApiConfig priorizando window["InfoMoneyPage"].api_marketdata.
 * Se não houver InfoMoneyPage, usa environment (dsv/hml/prd).
 */
export function getCurrencyApiConfig(): ApiConfig {
  const base = BaseService.getConfig();

  if (base.url) {
    return {
      baseUrl: base.url.replace(/\/+$/, ''),
      endpoint: CURRENCY_ENDPOINT,
      subscriptionKey: base.subscriptionkey || undefined,
    };
  }

  const env = getEnvironmentApiConfig();
  return {
    baseUrl: env.baseUrl,
    endpoint: env.endpoint ?? CURRENCY_ENDPOINT,
    subscriptionKey: env.subscriptionKey,
  };
}
