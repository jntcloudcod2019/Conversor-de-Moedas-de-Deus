import { CurrencyCode } from '../types';
import { AllCurrenciesContract } from './currencyMapper';

/**
 * DTO - Modelo de resposta da API de cotações
 */
export interface CurrencyApiResponse {
  symbol: string;
  tradeDate: string;
  bid: number;
  ask: number;
  change: number;
  changeMonth: number;
  changeYear: number;
  change52w?: number;
}

/**
 * DTO - Configuração da API
 */
export interface ApiConfig {
  baseUrl: string;
  endpoint?: string;
  subscriptionKey?: string; // Ocp-Apim-Subscription-Key
  origin?: string; // Origin header
  referer?: string; // Referer header
}

/**
 * Interface para entrada do cache com timestamp
 */
interface CacheEntry {
  data: CurrencyApiResponse;
  timestamp: number;
}

// Cache em memória com TTL de 5 minutos
const CACHE_TTL = 5 * 60 * 1000; // 5 minutos em milissegundos
const cache = new Map<CurrencyCode, CacheEntry>();

/**
 * Método assíncrono para obter dados do cache (verifica se expirou)
 */
export async function getCachedRate(currencyCode: CurrencyCode): Promise<CurrencyApiResponse | undefined> {
  const entry = cache.get(currencyCode);
  if (!entry) {
    return undefined;
  }

  const now = Date.now();
  const age = now - entry.timestamp;

  // Se expirou (mais de 5 minutos), remove do cache
  if (age > CACHE_TTL) {
    cache.delete(currencyCode);
    return undefined;
  }

  return entry.data;
}

/**
 * Método assíncrono para obter dados do cache mesmo se expirado (fallback)
 */
export async function getCachedRateEvenExpired(currencyCode: CurrencyCode): Promise<CurrencyApiResponse | undefined> {
  const entry = cache.get(currencyCode);
  if (!entry) {
    return undefined;
  }

  // Retorna mesmo se expirado (para usar como fallback)
  return entry.data;
}

/**
 * Método assíncrono para armazenar dados no cache
 */
export async function setCachedRate(currencyCode: CurrencyCode, data: CurrencyApiResponse): Promise<void> {
  cache.set(currencyCode, {
    data,
    timestamp: Date.now(),
  });
}

/**
 * Constrói os headers da requisição conforme o modelo da API
 */
function buildRequestHeaders(config: ApiConfig): HeadersInit {
  const headers: HeadersInit = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
  };
  
  // Adiciona subscription key se fornecida
  if (config.subscriptionKey) {
    headers['Ocp-Apim-Subscription-Key'] = config.subscriptionKey;
  }
  
  // Adiciona Origin se fornecido
  if (config.origin) {
    headers['Origin'] = config.origin;
  }
  
  // Adiciona Referer se fornecido
  if (config.referer) {
    headers['Referer'] = config.referer;
  }
  
  return headers;
}

/**
 * Request - Busca a cotação de uma moeda específica
 * @param currencyCode - Código da moeda (CurrencyCode)
 * @param config - Configuração da API
 * @returns Promise com os dados da cotação ou null em caso de erro
 */
export async function fetchCurrencyRate(
  currencyCode: CurrencyCode,
  config: ApiConfig
): Promise<CurrencyApiResponse | null> {
  // Verifica cache antes de fazer requisição
  const cached = await getCachedRate(currencyCode);
  if (cached !== undefined) {
    return cached;
  }

  try {
    // Converte o código para minúsculas para a requisição
    const symbol = currencyCode.toLowerCase();
    const url = `${config.baseUrl}${config.endpoint || ''}/${symbol}`;
    
    // Headers da requisição conforme o modelo da API
    const headers = buildRequestHeaders(config);
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });
    
    // Só armazena no cache se a resposta for 200 (sucesso)
    if (response.status === 200) {
      const data: CurrencyApiResponse = await response.json();
      
      // Armazena no cache com TTL de 5 minutos
      await setCachedRate(currencyCode, data);
      
      return data;
    }
    
    // Se não for 200, verifica cache como fallback
    // Verifica se existe cache válido (não expirado) para usar como fallback
    const cachedFallback = await getCachedRate(currencyCode);
    if (cachedFallback !== undefined) {
      return cachedFallback;
    }
    
    // Se cache expirou ou não existe, faz uma nova requisição como fallback
    try {
      // Reutiliza os mesmos headers da requisição original
      const retryHeaders = buildRequestHeaders(config);
      
      const retryResponse = await fetch(url, {
        method: 'GET',
        headers: retryHeaders,
      });
      if (retryResponse.status === 200) {
        const retryData: CurrencyApiResponse = await retryResponse.json();
        await setCachedRate(currencyCode, retryData);
        return retryData;
      } else {
        // Se ainda não for 200, tenta usar cache expirado como último recurso
        const expiredCache = await getCachedRateEvenExpired(currencyCode);
        if (expiredCache !== undefined) {
          return expiredCache;
        }
      }
    } catch (retryError) {
      // Último recurso: tenta usar cache expirado
      const expiredCache = await getCachedRateEvenExpired(currencyCode);
      if (expiredCache !== undefined) {
        return expiredCache;
      }
    }
    
    return null;
  } catch (error) {
    // Não lança exceção, apenas retorna null
    return null;
  }
}

/**
 * Request - Busca cotações de múltiplas moedas (em paralelo)
 * IMPORTANTE: Faz todas as requisições em paralelo
 * Exemplo: Para 6 moedas (BRL, USD, EUR, GBP, JPY, CNY) = 6 requisições paralelas
 * @param currencyCodes - Array de códigos de moedas (CurrencyCode)
 * @param config - Configuração da API
 * @returns Promise com um objeto mapeando código da moeda para os dados da cotação
 */
export async function fetchMultipleCurrencyRates(
  currencyCodes: CurrencyCode[],
  config: ApiConfig
): Promise<Record<string, CurrencyApiResponse>> {
  // Faz todas as requisições em paralelo
  const promises = currencyCodes.map(async (currencyCode) => {
    const data = await fetchCurrencyRate(currencyCode, config);
    return { currencyCode, data };
  });
  
  const results = await Promise.all(promises);
  
  const rates: Record<string, CurrencyApiResponse> = {};
  results.forEach(({ currencyCode, data }) => {
    // Só adiciona se não for null (sucesso)
    if (data) {
      rates[currencyCode] = data;
    }
  });
  
  return rates;
}

/**
 * Request - Busca cotações de múltiplas moedas com fila (primeiro que chega, primeiro da lista)
 * Faz requisições em paralelo e enfileira os resultados conforme completam
 * 
 * NOTA: Esta função agora tenta usar o CurrencyApiService do WordPress se disponível,
 * caso contrário usa a implementação padrão com fetch.
 * 
 * @param currencyCodes - Array de códigos de moedas (CurrencyCode)
 * @param config - Configuração da API
 * @returns Promise com AllCurrenciesContract (dados enfileirados por ordem de chegada)
 */
export async function fetchMultipleCurrencyRatesWithQueue(
  currencyCodes: CurrencyCode[],
  config: ApiConfig
): Promise<AllCurrenciesContract> {
  // Implementação padrão com fetch
  const queue: Array<{ code: string; apiData: CurrencyApiResponse }> = [];
  
  // Faz todas as requisições em paralelo
  const promises = currencyCodes.map(async (currencyCode) => {
    const data = await fetchCurrencyRate(currencyCode, config);
    // Se a requisição foi bem-sucedida, adiciona à fila na ordem que chegou
    if (data) {
      queue.push({
        code: currencyCode,
        apiData: data,
      });
    }
  });
  
  // Aguarda todas as requisições paralelas completarem
  await Promise.all(promises);
  
  // Retorna o contrato com os dados enfileirados (primeiro que chega, primeiro da lista)
  return {
    currencies: queue,
  };
}
