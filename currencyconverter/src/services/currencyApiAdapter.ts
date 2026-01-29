import type { CurrencyCode } from '../types';
import type { CurrencyApiResponse, ApiConfig } from './currencyApi';
import type { AllCurrenciesContract } from './currencyMapper';

/**
 * Interface para o modelo de resposta do CurrencyApiService do WordPress
 * Baseado na estrutura do serviço existente em plugins/infomoney-blocks/services/market-data/CurrencyApiService.tsx
 */
interface CurrencyItemModel {
  DateBr: string;
  BuyOffer: number;
  BuyOfferFormated: string;
  SellOffer: number;
  SellOfferFormated: string;
  Oscilation: number;
  OscilationFormated: string;
  StockCode: string;
  StockName: string;
  StockNameFormated: string;
}

interface CurrencyModel {
  items: CurrencyItemModel[];
}

/**
 * Adapter para integrar com o CurrencyApiService do WordPress
 * Este adapter converte os dados do formato WordPress para o formato usado pelo CurrencyConverter
 */
export class CurrencyApiAdapter {
  private currencyApiService: any; // CurrencyApiService do WordPress

  constructor(currencyApiService?: any) {
    this.currencyApiService = currencyApiService;
  }

  /**
   * Converte CurrencyItemModel (WordPress) para CurrencyApiResponse (formato atual)
   * 
   * Mapeamento dos campos:
   * - StockCode -> symbol
   * - DateBr -> tradeDate
   * - BuyOffer -> bid
   * - SellOffer -> ask
   * - Oscilation -> change
   */
  private convertItemToApiResponse(item: CurrencyItemModel): CurrencyApiResponse {
    const symbol = item.StockCode?.toUpperCase() || '';
    
    // Converte DateBr para ISO string se necessário
    let tradeDate = item.DateBr || new Date().toISOString();
    if (tradeDate && !tradeDate.includes('T')) {
      // Se for formato brasileiro (DD/MM/YYYY), converte para ISO
      try {
        const [day, month, year] = tradeDate.split('/');
        if (day && month && year) {
          tradeDate = new Date(`${year}-${month}-${day}`).toISOString();
        }
      } catch {
        // Se falhar, usa a data atual
        tradeDate = new Date().toISOString();
      }
    }
    
    return {
      symbol,
      tradeDate,
      bid: typeof item.BuyOffer === 'number' ? item.BuyOffer : parseFloat(String(item.BuyOffer || 0)) || 0,
      ask: typeof item.SellOffer === 'number' ? item.SellOffer : parseFloat(String(item.SellOffer || 0)) || 0,
      change: typeof item.Oscilation === 'number' ? item.Oscilation : parseFloat(String(item.Oscilation || 0)) || 0,
      changeMonth: Date.UTC( new Date().getMonth()), // Não disponível no modelo WordPress
      changeYear: Date.UTC( new Date().getFullYear()), // Não disponível no modelo WordPress
      change52w: undefined, // Não disponível no modelo WordPress
    };
  }

  /**
   * Busca dados usando o CurrencyApiService do WordPress
   */
  async fetchDataFromWordPressService(): Promise<CurrencyModel | null> {
    try {
      if (!this.currencyApiService) {
        return null;
      }

      const model = await this.currencyApiService.getData();
      return model || null;
    } catch (error) {
      return null;
    }
  }

  /**
   * Converte CurrencyModel (WordPress) para AllCurrenciesContract
   */
  async convertToAllCurrenciesContract(
    currencyModel: CurrencyModel,
    currencyCodes: CurrencyCode[]
  ): Promise<AllCurrenciesContract> {
    const currencies: Array<{ code: string; apiData: CurrencyApiResponse }> = [];

    currencyModel.items.forEach((item) => {
      const code = item.StockCode?.toUpperCase() as CurrencyCode;
      
      // Só adiciona se o código estiver na lista solicitada
      if (code && currencyCodes.includes(code)) {
        const apiResponse = this.convertItemToApiResponse(item);
        currencies.push({
          code,
          apiData: apiResponse,
        });
      }
    });

    return { currencies };
  }

  /**
   * Método principal: busca dados usando o serviço WordPress e converte para o formato esperado
   */
  async fetchMultipleCurrencyRatesWithQueue(
    currencyCodes: CurrencyCode[],
    _config?: ApiConfig
  ): Promise<AllCurrenciesContract> {
    // Se o serviço WordPress estiver disponível, usa ele
    if (this.currencyApiService) {
      const currencyModel = await this.fetchDataFromWordPressService();
      
      if (currencyModel) {
        return await this.convertToAllCurrenciesContract(currencyModel, currencyCodes);
      }
    }

    // Fallback: retorna estrutura vazia se não conseguir usar o serviço WordPress
    return { currencies: [] };
  }
}

/**
 * Factory function para criar o adapter
 * Tenta obter o CurrencyApiService do WordPress se disponível
 * 
 * O serviço pode estar disponível via:
 * 1. Import dinâmico do módulo WordPress
 * 2. Objeto global window.wp.infomoney.services
 * 3. Objeto global window.InfomoneyServices
 */
export function createCurrencyApiAdapter(): CurrencyApiAdapter {
  let currencyApiService: any = null;

  if (typeof window !== 'undefined') {
    // Tenta obter do objeto global WordPress (padrão)
    const wpServices = (window as any).wp?.infomoney?.services;
    if (wpServices?.CurrencyApiService) {
      currencyApiService = new wpServices.CurrencyApiService();
    }
    
    // Tenta obter do objeto global alternativo
    if (!currencyApiService) {
      const infomoneyServices = (window as any).InfomoneyServices;
      if (infomoneyServices?.CurrencyApiService) {
        currencyApiService = new infomoneyServices.CurrencyApiService();
      }
    }

    // Tenta obter diretamente do caminho do plugin WordPress
    if (!currencyApiService) {
      const pluginServices = (window as any).infomoneyBlocks?.services?.marketData;
      if (pluginServices?.CurrencyApiService) {
        currencyApiService = new pluginServices.CurrencyApiService();
      }
    }
  }

  return new CurrencyApiAdapter(currencyApiService);
}
