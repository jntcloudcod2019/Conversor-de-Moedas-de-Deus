import { Currency, CurrencyConverterData } from '../types';
import { CurrencyApiResponse } from './currencyApi';
import { calculateExchangeRatesFromBidAsk, calculateLatestDate } from '../utils/calculationsPositionComponents';

/**
 * Contrato que armazena dados de todas as moedas da API
 */
export interface AllCurrenciesContract {
  currencies: Array<{
    code: string;
    apiData: CurrencyApiResponse;
  }>;
}

/**
 * AutoMapper - Converte dados da API para o formato usado pelo CurrencyConverter
 * Monta o objeto completo que será passado como props para o componente
 */
export class CurrencyMapper {
  /**
   * Mapeia uma resposta da API para o objeto Currency
   * Usa os dados reais da API (symbol da resposta)
   */
  static mapApiResponseToCurrency(
    currencyCode: string,
    apiResponse: CurrencyApiResponse
  ): Currency {
    // Usa o symbol da API como código da moeda (dados reais da API)
    const code = apiResponse.symbol?.toUpperCase() || currencyCode.toUpperCase();
    
    // Para símbolo monetário e nome, usa fallback mínimo
    // (a API não retorna esses dados, apenas o código/symbol)
    const currencySymbol = this.getCurrencySymbol(code);
    const currencyName = this.getCurrencyName(code);
    
    return {
      code: code, // Dados da API (apiResponse.symbol)
      symbol: currencySymbol, // Fallback (API não retorna)
      name: currencyName, // Fallback (API não retorna)
    };
  }

  /**
   * Obtém o símbolo monetário baseado no código (fallback mínimo)
   */
  private static getCurrencySymbol(code: string): string {
    const symbolMap: Record<string, string> = {
      BRL: 'R$',
      USD: '$',
      EUR: '€',
      GBP: '£',
      JPY: '¥',
      CNY: '¥',
    };
    return symbolMap[code.toUpperCase()] || code;
  }

  /**
   * Obtém o nome da moeda baseado no código (fallback mínimo)
   */
  private static getCurrencyName(code: string): string {
    const nameMap: Record<string, string> = {
      BRL: 'Real Brasileiro',
      USD: 'Dólar Americano',
      EUR: 'Euro',
      GBP: 'Libra Esterlina',
      JPY: 'Iene Japonês',
      CNY: 'Yuan Chinês',
    };
    return nameMap[code.toUpperCase()] || code;
  }

  /**
   * Mapeia múltiplas respostas da API para uma lista de Currency
   */
  static mapApiResponsesToCurrencies(
    apiResponses: Array<{ code: string; apiData: CurrencyApiResponse }>
  ): Currency[] {
    return apiResponses.map(({ code, apiData }) =>
      this.mapApiResponseToCurrency(code, apiData)
    );
  }

  /**
   * Converte o contrato AllCurrenciesContract para lista de strings (códigos)
   */
  static contractToCurrencyCodeList(contract: AllCurrenciesContract): string[] {
    return contract.currencies.map((item) => item.code.toUpperCase());
  }

  /**
   * Converte o contrato AllCurrenciesContract para lista de Currency
   */
  static contractToCurrencyList(contract: AllCurrenciesContract): Currency[] {
    return this.mapApiResponsesToCurrencies(contract.currencies);
  }

  /**
   * MÉTODO PRINCIPAL: Monta o objeto completo para usar no CurrencyConverter
   * Converte os dados da API em tudo que o componente precisa
   * NOTA: Este método é síncrono por compatibilidade, mas internamente usa métodos assíncronos
   * Para uso assíncrono completo, use mapContractToConverterDataAsync
   */
  static mapContractToConverterData(
    contract: AllCurrenciesContract,
    baseCurrency: string = 'USD'
  ): CurrencyConverterData {
    // 1. Mapeia as moedas da API para o formato Currency
    const currencies = this.mapApiResponsesToCurrencies(contract.currencies);

    // 2. Calcula as taxas de câmbio baseadas nos dados da API (bid/ask)
    // Usa cálculo síncrono para manter compatibilidade
    const exchangeRates: Record<string, number> = {};
    
    const baseCurrencyData = contract.currencies.find(
      (item) => item.apiData.symbol?.toUpperCase() === baseCurrency.toUpperCase()
    );
    
    const baseMidRate = baseCurrencyData
      ? (baseCurrencyData.apiData.bid + baseCurrencyData.apiData.ask) / 2
      : 1;

    contract.currencies.forEach(({ apiData }) => {
      const code = apiData.symbol?.toUpperCase() || '';
      const midRate = (apiData.bid + apiData.ask) / 2;
      exchangeRates[code] = code === baseCurrency.toUpperCase() ? 1 : midRate / baseMidRate;
    });

    // 3. Obtém a data mais recente das cotações
    const tradeDates = contract.currencies.map((item) => item.apiData.tradeDate);
    const latestDate = tradeDates
      .map((dateStr) => new Date(dateStr))
      .filter((date) => !isNaN(date.getTime()))
      .sort((a, b) => b.getTime() - a.getTime())[0];

    const lastUpdated = latestDate
      ? latestDate.toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })
      : new Date().toLocaleString('pt-BR');

    return {
      currencies,
      exchangeRates,
      lastUpdated,
    };
  }

  /**
   * Versão assíncrona do mapContractToConverterData
   * Usa métodos assíncronos de cálculo
   */
  static async mapContractToConverterDataAsync(
    contract: AllCurrenciesContract,
    baseCurrency: string = 'USD'
  ): Promise<CurrencyConverterData | null> {
    try {
      // 1. Mapeia as moedas da API para o formato Currency
      const currencies = this.mapApiResponsesToCurrencies(contract.currencies);

      // 2. Calcula as taxas de câmbio usando método assíncrono
      const exchangeRatesResult = await calculateExchangeRatesFromBidAsk({
        currencies: contract.currencies.map((item) => ({
          code: item.code,
          apiData: {
            symbol: item.apiData.symbol,
            bid: item.apiData.bid,
            ask: item.apiData.ask,
          },
        })),
        baseCurrency,
      });

      if (!exchangeRatesResult) {
        return null;
      }

      // 3. Calcula a data mais recente usando método assíncrono
      const tradeDates = contract.currencies.map((item) => item.apiData.tradeDate);
      const lastUpdated = await calculateLatestDate({
        tradeDates,
        fallbackDate: new Date(),
      });

      if (!lastUpdated) {
        return null;
      }

      return {
        currencies,
        exchangeRates: exchangeRatesResult.exchangeRates,
        lastUpdated,
      };
    } catch (error) {
      return null;
    }
  }
}
