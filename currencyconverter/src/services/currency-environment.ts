import type { ApiConfig } from './currencyApi';

/**
 * Hostnames de produção - todos os outros são considerados homologação/dev
 */
const PRODUCTION_HOSTNAMES = ['www.infomoney.com.br'];

/**
 * Detecta se está em ambiente de produção
 */
function isProduction(): boolean {
  if (typeof window === 'undefined') return true; // SSR assume produção
  
  const hostname = window.location.hostname;
  
  // Verifica se está no objeto global (prioridade)
  const globalTag = (window as any)?.InfoMoneyPage?.environment_tag;
  if (globalTag === 'prd' || (typeof globalTag === 'object' && globalTag?.type === 'prd')) {
    return true;
  }
  if (globalTag === 'hml' || globalTag === 'dsv' || (typeof globalTag === 'object' && (globalTag?.type === 'hml' || globalTag?.type === 'dsv'))) {
    return false;
  }
  
  // Fallback: detecta pelo hostname
  return PRODUCTION_HOSTNAMES.includes(hostname);
}

/**
 * Retorna a configuração da API baseada no ambiente atual
 * Usado como fallback quando window.InfoMoneyPage.api_marketdata não está disponível
 */
export function getEnvironmentApiConfig(): ApiConfig {
  const isProd = isProduction();
  
  return {
    baseUrl: isProd
      ? 'https://api.xpi.com.br/infomoney-services-marketdata/v1/api/v1'
      : 'https://api-hml.xpi.com.br/infomoney-services-marketdata/v1/api/v1',
    endpoint: '/currencies',
  };
}
