/**
 * CurrencyService – Serviço para buscar dados de cotação de moedas
 * Alinhado à estrutura infomoney/v2/src/services/market-data/currency-service.ts
 */

import { getCurrencyApiConfig } from './currency-config';
import {
  DEFAULT_CURRENCY_CODES,
  type CurrencyValuesResponse,
  type CurrencyValuesResponseItem,
  type CurrencyCode,
  type CurrencyConverterData,
} from '../types';
import { CurrencyMapper, type AllCurrenciesContract } from '../services/currencyMapper';
import type { CurrencyApiResponse } from '../services/currencyApi';

/**
 * Configurações de timeout e rate limiting
 */
const REQUEST_TIMEOUT = 30000; // 30 segundos
const MULTIPLE_REQUESTS_TIMEOUT = 20000; // 20 segundos para requisições múltiplas em paralelo
const CACHE_TTL = 3 * 60 * 60 * 1000; // 3 horas em milissegundos (para testes)
const REQUEST_INTERVAL = 15 * 60 * 1000; // 15 minutos - intervalo entre requisições
const RATE_LIMIT_DELAY = 100; // 100ms entre requisições
/**
 * Interface para entrada do cache
 */
interface CacheEntry {
  data: Record<CurrencyCode, CurrencyValuesResponseItem | null>;
  timestamp: number;
}

/**
 * Cache em memória para múltiplas moedas
 */
export const multipleCurrencyCache = new Map<string, CacheEntry>();

/**
 * Inicializa dados padrão no cache para evitar requisições desnecessárias durante testes
 * Formato exato do contrato da API: { result: [{ symbol, tradeDate, bid, ask, change, changeMonth, changeYear, change52w }] }
 */
export function getInitialData(): Record<CurrencyCode, CurrencyValuesResponseItem | null> {
  const now = new Date().toISOString();
  return {
    BRL: {
      symbol: 'BRL',
      tradeDate: now,
      bid: 5.3789,
      ask: 5.3795,
      change: 0.0576,
      changeMonth: -1.0612,
      changeYear: -1.0612,
      change52w: -11.3332, // Corrigido para corresponder ao formato da API
    },
    USD: {
      symbol: 'USD',
      tradeDate: now,
      bid: 1.0,
      ask: 1.0,
      change: 0.0,
      changeMonth: 0.0,
      changeYear: 0.0,
      change52w: 0.0,
    },
    EUR: {
      symbol: 'EUR',
      tradeDate: now,
      bid: 0.92,
      ask: 0.92,
      change: 0.01,
      changeMonth: -0.05,
      changeYear: -0.05,
      change52w: 0.02,
    },
    GBP: {
      symbol: 'GBP',
      tradeDate: now,
      bid: 0.79,
      ask: 0.79,
      change: 0.02,
      changeMonth: -0.08,
      changeYear: -0.08,
      change52w: 0.03,
    },
    JPY: {
      symbol: 'JPY',
      tradeDate: now,
      bid: 150.0,
      ask: 150.5,
      change: 1.5,
      changeMonth: -2.0,
      changeYear: -2.0,
      change52w: 0.5,
    },
    CNY: {
      symbol: 'CNY',
      tradeDate: now,
      bid: 7.2,
      ask: 7.25,
      change: 0.1,
      changeMonth: -0.3,
      changeYear: -0.3,
      change52w: 0.2,
    },
  };
}

/**
 * Inicializa cache com dados padrão (chamado no bootstrap do módulo)
 */
export function initCache(): void {
  const cacheKey: string = [...DEFAULT_CURRENCY_CODES].sort().join(',');
  multipleCurrencyCache.set(cacheKey, {
    data: getInitialData(),
    timestamp: Date.now(),
  });
}

// Inicializa cache ao carregar o módulo
initCache();
/**
 * Rate limiting: controla o tempo entre requisições
 */
export class RateLimiter {
  private lastRequestTime: number = 0;

  async waitIfNeeded(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    
    if (timeSinceLastRequest < RATE_LIMIT_DELAY) {
      const waitTime = RATE_LIMIT_DELAY - timeSinceLastRequest;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
    
    this.lastRequestTime = Date.now();
  }
}

/**
 * Classe CurrencyService para buscar dados de cotação e históricos de moedas
 */
class CurrencyService {
  private baseUrl: string;
  private subscriptionKey: string;
  private rateLimiter: RateLimiter;

  constructor() {
    // Usa getCurrencyApiConfig que tem fallback para detecção de ambiente
    const config = getCurrencyApiConfig();
    this.baseUrl = config.baseUrl || '';
    this.subscriptionKey = config.subscriptionKey || '';
    this.rateLimiter = new RateLimiter();

    if (!this.baseUrl) {
      // Base URL não configurada - usará cache
    }
  }

  /**
   * Monta os headers padrão para requisições
   */
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (this.subscriptionKey) {
      headers['Ocp-Apim-Subscription-Key'] = this.subscriptionKey;
    }

    return headers;
  }

  /**
   * Cria um AbortController com timeout
   */
  private createTimeoutController(): { controller: AbortController; timeoutId: NodeJS.Timeout } {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, REQUEST_TIMEOUT);
    return { controller, timeoutId };
  }

  /**
   * Realiza uma requisição HTTP com tratamento de erros e timeout
   * NÃO faz retry automático - retorna null em caso de erro para usar cache como fallback
   */
  private async fetchWithErrorHandling<T>(
    endpoint: string,
    errorContext: string
  ): Promise<T | null> {
    if (!this.baseUrl) {
      return null;
    }

    // Rate limiting: aguarda antes de fazer a requisição
    await this.rateLimiter.waitIfNeeded();

    try {
      const url = `${this.baseUrl}${endpoint}`;
      const { controller, timeoutId } = this.createTimeoutController();

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: this.getHeaders(),
          credentials: 'omit',
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          // Log detalhado do erro
          return null;
        }

        const data: T = await response.json();
        return data;
      } catch (fetchError: any) {
        clearTimeout(timeoutId);

        if (fetchError.name === 'AbortError') {
          return null;
        }

        return null;
      }
    } catch (error) {
      return null;
    }
  }

  /**
   * Busca os valores atuais de cotação para uma moeda específica
   * @param symbol Símbolo da moeda (ex: 'USD', 'EUR')
   * @returns Promise com os dados de cotação atual ou null em caso de erro
   */
  public async getCurrencyValues(symbol: string): Promise<CurrencyValuesResponse | null> {
    if (!this.baseUrl) {
      return null;
    }

    if (!symbol || typeof symbol !== 'string') {
      console.error('CurrencyService.getCurrencyValues: Invalid symbol parameter');
      return null;
    }

    const endpoint = `/market/currency/quote/last/${symbol.toUpperCase()}`;
    return this.fetchWithErrorHandling<CurrencyValuesResponse>(
      endpoint,
      'getCurrencyValues'
    );
  }

  /**
   * Gera chave única para o cache baseada nos códigos de moedas
   */
  private getCacheKey(currencyCodes: CurrencyCode[]): string {
    return currencyCodes.sort().join(',');
  }

  /**
   * Verifica se o cache é válido (não expirou - 3 horas para testes)
   */
  private isCacheValid(entry: CacheEntry | undefined): boolean {
    if (!entry) return false;
    const now = Date.now();
    const age = now - entry.timestamp;
    return age < CACHE_TTL;
  }

  /**
   * Verifica se deve fazer uma nova requisição (passou 15 minutos desde a última)
   */
  private shouldMakeRequest(entry: CacheEntry | undefined): boolean {
    if (!entry) return true; // Se não tem cache, deve fazer requisição
    const now = Date.now();
    const age = now - entry.timestamp;
    return age >= REQUEST_INTERVAL; // Passou 15 minutos
  }

  /**
   * Obtém dados do cache se válido
   * Tenta encontrar cache mesmo se a chave não corresponder exatamente (busca em todas as chaves do cache)
   */
  private getCachedData(cacheKey: string, requestedCodes: CurrencyCode[]): Record<CurrencyCode, CurrencyValuesResponseItem | null> | null {
    // Primeiro tenta com a chave exata
    let entry = multipleCurrencyCache.get(cacheKey);
    if (entry && this.isCacheValid(entry)) {
      // Retorna apenas os dados solicitados
      const result: Record<CurrencyCode, CurrencyValuesResponseItem | null> = {} as Record<CurrencyCode, CurrencyValuesResponseItem | null>;
      requestedCodes.forEach(code => {
        result[code] = entry!.data[code] || null;
      });
      return result;
    }
    
    // Se não encontrou com chave exata, busca em todas as chaves do cache
    // (útil quando cache foi inicializado com todas as moedas mas foi solicitado um subconjunto)
    for (const [, cachedEntry] of multipleCurrencyCache.entries()) {
      if (this.isCacheValid(cachedEntry)) {
        // Verifica se o cache tem todas as moedas solicitadas
        const hasAllRequested = requestedCodes.every(code => cachedEntry.data[code] !== undefined);
        if (hasAllRequested) {
          // Retorna apenas os dados solicitados
          const result: Record<CurrencyCode, CurrencyValuesResponseItem | null> = {} as Record<CurrencyCode, CurrencyValuesResponseItem | null>;
          requestedCodes.forEach(code => {
            result[code] = cachedEntry.data[code] || null;
          });
          return result;
        }
      }
    }
    
    return null;
  }

  /**
   * Salva dados no cache
   */
  private setCachedData(cacheKey: string, data: Record<CurrencyCode, CurrencyValuesResponseItem | null>): void {
    multipleCurrencyCache.set(cacheKey, {
      data,
      timestamp: Date.now(),
    });
  }

  /**
   * Limpa o cache (apenas em caso de requisição bem-sucedida)
   */
  private clearCache(cacheKey: string): void {
    multipleCurrencyCache.delete(cacheKey);
  }

  /**
   * Busca os valores atuais de cotação para múltiplas moedas em paralelo
   * Implementa cache de 3 horas com fallback em caso de erro
   * @param currencyCodes Array de códigos de moedas ('BRL' | 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY')
   * @returns Promise com um objeto contendo os dados de todas as moedas solicitadas
   */
  public async getMultipleCurrencyValues(
    currencyCodes: CurrencyCode[]
  ): Promise<Record<CurrencyCode, CurrencyValuesResponseItem | null>> {

    
    if (!this.baseUrl) {
      const cacheKey = this.getCacheKey(currencyCodes);
      const validCodes: CurrencyCode[] = [...DEFAULT_CURRENCY_CODES];
      const validCurrencyCodes = currencyCodes.filter(code => validCodes.includes(code)) as CurrencyCode[];
      const cached = this.getCachedData(cacheKey, validCurrencyCodes);
      if (cached) {
        return cached;
      }
      return {} as Record<CurrencyCode, CurrencyValuesResponseItem | null>;
    }

    if (!currencyCodes || !Array.isArray(currencyCodes) || currencyCodes.length === 0) {
      console.error('CurrencyService.getMultipleCurrencyValues: Invalid currencyCodes parameter', { currencyCodes });
      return {} as Record<CurrencyCode, CurrencyValuesResponseItem | null>;
    }

    // Valida se todos os códigos são válidos
    const validCodes: CurrencyCode[] = [...DEFAULT_CURRENCY_CODES];
    
    // Filtra apenas códigos válidos
    const validCurrencyCodes = currencyCodes.filter(code => validCodes.includes(code)) as CurrencyCode[];

    if (validCurrencyCodes.length === 0) {
      return {} as Record<CurrencyCode, CurrencyValuesResponseItem | null>;
    }

    const cacheKey = this.getCacheKey(validCurrencyCodes);

    // PRIMEIRO: Verifica se tem cache válido (3 horas)
    const cachedData = this.getCachedData(cacheKey, validCurrencyCodes);
    if (cachedData) {
      // Tem cache válido, retorna imediatamente
      return cachedData;
    }

    const cacheEntry = multipleCurrencyCache.get(cacheKey);
    
    if (!this.shouldMakeRequest(cacheEntry)) {
      // Ainda não passou 15 minutos desde a última tentativa, retorna cache mesmo expirado
      if (cacheEntry) {
        return cacheEntry.data;
      }
    }

    // Faz requisições em paralelo para todas as moedas
    const promises = validCurrencyCodes.map(async (code): Promise<[CurrencyCode, CurrencyValuesResponseItem | null]> => {
      try {
        const response = await this.getCurrencyValues(code);
        
        // Extrai o primeiro item do resultado, se disponível
        if (response?.result && response.result.length > 0) {
          return [code, response.result[0]];
        }
        
        return [code, null];
      } catch (error) {
        return [code, null];
      }
    });

    // Cria um timeout de 20 segundos
    const timeoutPromise = new Promise<[CurrencyCode, CurrencyValuesResponseItem | null][]>((_, reject) => {
      setTimeout(() => {
        reject(new Error(`getMultipleCurrencyValues: Timeout after ${MULTIPLE_REQUESTS_TIMEOUT}ms`));
      }, MULTIPLE_REQUESTS_TIMEOUT);
    });

    // Aguarda todas as requisições em paralelo com timeout de 20 segundos
    let results: [CurrencyCode, CurrencyValuesResponseItem | null][];
    let requestSuccess = false;
    
    try {
      results = await Promise.race([
        Promise.all(promises),
        timeoutPromise,
      ]);
      requestSuccess = true; // Se chegou aqui, a requisição foi bem-sucedida
    } catch (error) {
      // Se timeout ou erro, tenta obter resultados parciais
      
      // Tenta obter resultados parciais usando Promise.allSettled
      const settledResults = await Promise.allSettled(promises);
      results = settledResults.map((result, index) => {
        if (result.status === 'fulfilled') {
          return result.value;
        } else {
          const code = validCurrencyCodes[index];
          return [code, null] as [CurrencyCode, CurrencyValuesResponseItem | null];
        }
      });
      
      // Verifica se pelo menos uma requisição foi bem-sucedida
      requestSuccess = results.some(([_, data]) => data !== null);
    }

    // Converte array de tuplas em objeto Record
    const resultMap = results.reduce((acc, [code, data]) => {
      acc[code] = data;
      return acc;
    }, {} as Record<CurrencyCode, CurrencyValuesResponseItem | null>);

    // Verifica se houve sucesso (pelo menos um dado válido)
    const hasValidData = Object.values(resultMap).some(data => data !== null);

    if (requestSuccess && hasValidData) {
      // Requisição bem-sucedida: limpa cache antigo e salva novo
      this.clearCache(cacheKey);
      this.setCachedData(cacheKey, resultMap);
      return resultMap;
    } else {
      const expiredCache = multipleCurrencyCache.get(cacheKey);
      if (expiredCache) {
        return expiredCache.data;
      }
      
      return resultMap;
    }
  }

  public async getCurrencyConverterData(
    currencyCodes: CurrencyCode[],
    baseCurrency: string = 'USD'
  ): Promise<CurrencyConverterData | null> {
    try {
      const currencyValuesMap = await this.getMultipleCurrencyValues(currencyCodes);
      const currencies: Array<{ code: string; apiData: CurrencyApiResponse }> = [];
      
      Object.entries(currencyValuesMap).forEach(([code, item]) => {
        if (item) {
          const apiData: CurrencyApiResponse = {
            symbol: item.symbol || code,
            tradeDate: item.tradeDate || new Date().toISOString(),
            bid: item.bid,
            ask: item.ask,
            change: item.change ?? 0,
            changeMonth: item.changeMonth ?? 0,
            changeYear: item.changeYear ?? 0,
            change52w: item.change52w,
          };
          
          currencies.push({
            code: code as CurrencyCode,
            apiData,
          });
        }
      });
      
      if (currencies.length === 0) {
        return null;
      }
      
      const contract: AllCurrenciesContract = { currencies };
      const converterData = await CurrencyMapper.mapContractToConverterDataAsync(contract, baseCurrency);
      
      return converterData;
    } catch (error) {
      return null;
    }
  }
}

// Exporta uma instância singleton da classe para fácil uso
export const currencyService = new CurrencyService();

// Exporta também a classe para permitir criação de múltiplas instâncias se necessário
export { CurrencyService };
