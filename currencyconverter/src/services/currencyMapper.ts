import { Currency, CurrencyConverterData } from '../types';
import { CurrencyApiResponse } from './currencyApi';
import { calculateExchangeRatesFromBidAsk, calculateLatestDate } from '../CurrencyConverter';

/**
 * Contrato que armazena dados de todas as moedas da API
 */
export interface AllCurrenciesContract {
  currencies: Array<{
    code: string;
    apiData: CurrencyApiResponse;
  }>;
}

/** Perfil de mapeamento: fonte → destino (estilo AutoMapper C#) */
const CurrencyProfile = {
  /** Mapa código → símbolo monetário */
  symbol: (code: string): string =>
    ({ BRL: 'R$', USD: '$', EUR: '€', GBP: '£', JPY: '¥', CNY: '¥' }[code?.toUpperCase()] ?? code),
  /** Mapa código → nome da moeda */
  name: (code: string): string =>
    ({
      BRL: 'Real Brasileiro',
      USD: 'Dólar Americano',
      EUR: 'Euro',
      GBP: 'Libra Esterlina',
      JPY: 'Iene Japonês',
      CNY: 'Yuan Chinês',
    }[code?.toUpperCase()] ?? code),
};

/**
 * CreateMap<CurrencyApiResponse + code, Currency>
 * Regra explícita: uma entrada da API → Currency
 */
function mapToCurrency(code: string, api: CurrencyApiResponse): Currency {
  const codeNorm = api.symbol?.toUpperCase() || code.toUpperCase();
  return {
    code: codeNorm,
    symbol: CurrencyProfile.symbol(codeNorm),
    name: CurrencyProfile.name(codeNorm),
  };
}

/**
 * CreateMap<AllCurrenciesContract, Currency[]>
 * Lista de entradas da API → lista de Currency
 */
function mapToCurrencyList(contract: AllCurrenciesContract): Currency[] {
  return contract.currencies.map(({ code, apiData }) => mapToCurrency(code, apiData));
}

/**
 * CreateMap<AllCurrenciesContract, CurrencyConverterData>
 * Contrato da API → objeto completo do conversor (síncrono, fallback simples)
 */
function mapToConverterDataSync(
  contract: AllCurrenciesContract,
  baseCurrency: string = 'USD'
): CurrencyConverterData {
  const currencies = mapToCurrencyList(contract);
  const base = contract.currencies.find(
    (c) => c.apiData.symbol?.toUpperCase() === baseCurrency.toUpperCase()
  );
  const baseMid = base ? (base.apiData.bid + base.apiData.ask) / 2 : 1;
  const exchangeRates: Record<string, number> = {};
  contract.currencies.forEach(({ apiData }) => {
    const code = apiData.symbol?.toUpperCase() || '';
    const mid = (apiData.bid + apiData.ask) / 2;
    exchangeRates[code] = code === baseCurrency.toUpperCase() ? 1 : mid / baseMid;
  });
  const dates = contract.currencies
    .map((c) => c.apiData.tradeDate)
    .map((s) => new Date(s))
    .filter((d) => !isNaN(d.getTime()))
    .sort((a, b) => b.getTime() - a.getTime());
  const lastUpdated = dates[0]
    ? dates[0].toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : new Date().toLocaleString('pt-BR');

  return { currencies, exchangeRates, lastUpdated };
}

/**
 * CreateMap<AllCurrenciesContract, CurrencyConverterData> (async)
 * Usa calculateExchangeRatesFromBidAsk e calculateLatestDate
 */
async function mapToConverterDataAsync(
  contract: AllCurrenciesContract,
  baseCurrency: string
): Promise<CurrencyConverterData | null> {
  const currencies = mapToCurrencyList(contract);
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
  if (!exchangeRatesResult) return null;

  const tradeDates = contract.currencies.map((c) => c.apiData.tradeDate);
  const lastUpdated = await calculateLatestDate({
    tradeDates,
    fallbackDate: new Date(),
  });
  if (!lastUpdated) return null;

  return {
    currencies,
    exchangeRates: exchangeRatesResult.exchangeRates,
    lastUpdated,
  };
}

/**
 * AutoMapper – mapeia quaisquer moedas usadas; baseCurrency obrigatório (sem default).
 */
export class CurrencyMapper {
  static mapContractToConverterData(
    contract: AllCurrenciesContract,
    baseCurrency: string
  ): CurrencyConverterData {
    return mapToConverterDataSync(contract, baseCurrency);
  }

  static async mapContractToConverterDataAsync(
    contract: AllCurrenciesContract,
    baseCurrency: string
  ): Promise<CurrencyConverterData | null> {
    return mapToConverterDataAsync(contract, baseCurrency);
  }
}
