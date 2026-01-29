/**
 * BaseService – alinhado à estrutura infomoney/v2/src/services/market-data/base-service.ts
 * Obtém config de window["InfoMoneyPage"]?.api_marketdata
 */

export interface MarketDataConfig {
  url: string;
  subscriptionkey: string;
}

declare global {
  interface Window {
    InfoMoneyPage?: {
      api_marketdata?: {
        base_api_marketdata?: string;
        ocp_apin_subscription_key?: string;
      };
      environment_tag?: string;
    };
  }
}

export default class BaseService {
  /**
   * Retorna url e subscriptionkey de window["InfoMoneyPage"].api_marketdata
   */
  static getConfig(): MarketDataConfig {
    const api = typeof window !== 'undefined' ? window['InfoMoneyPage']?.api_marketdata : undefined;
    return {
      url: api?.base_api_marketdata ?? '',
      subscriptionkey: api?.ocp_apin_subscription_key ?? '',
    };
  }

  /**
   * Constrói query string a partir das props.
   * Converte arrays em strings separadas por vírgula.
   */
  static getParams(props: Record<string, unknown>): string {
    const acc = Object.entries(props)
      .filter(([, value]) => value !== undefined)
      .reduce<Record<string, string>>((acc, [key, value]) => {
        acc[key] = Array.isArray(value) ? value.join(',') : String(value);
        return acc;
      }, {});

    return new URLSearchParams(acc).toString();
  }
}
