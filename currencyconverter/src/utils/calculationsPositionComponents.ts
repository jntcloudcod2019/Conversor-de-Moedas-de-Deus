
/**
 * Interface para cálculo de taxa de câmbio
 */
export interface CalculateExchangeRateParams {
  fromCurrencyCode: string;
  toCurrencyCode: string;
  exchangeRates: Record<string, number>;
}

/**
 * Interface para cálculo de rate a partir de exchangeRates
 */
export interface CalculateRateFromExchangeRatesParams {
  fromCurrencyCode: string;
  toCurrencyCode: string;
  exchangeRates: Record<string, number>;
  fallbackRate?: number;
}


/**
 * Interface para cálculo de taxas de câmbio a partir de bid/ask
 */
export interface CalculateExchangeRatesFromBidAskParams {
  currencies: Array<{ code: string; apiData: { symbol?: string; bid: number; ask: number } }>;
  baseCurrency?: string;
}

/**
 * Interface para resultado de taxas de câmbio
 */
export interface ExchangeRatesResult {
  exchangeRates: Record<string, number>;
}

/**
 * Interface para cálculo de data mais recente
 */
export interface CalculateLatestDateParams {
  tradeDates: string[];
  fallbackDate?: Date;
}

/**
 * Calcula taxa de câmbio entre duas moedas
 */
export async function calculateExchangeRate(
  params: CalculateExchangeRateParams
): Promise<string> {
  try {
    const { fromCurrencyCode, toCurrencyCode, exchangeRates } = params;

    if (!fromCurrencyCode || !toCurrencyCode) {
      return "-";
    }

    if (!exchangeRates || typeof exchangeRates !== 'object') {
      return "-";
    }

    const fromRate = exchangeRates[fromCurrencyCode];
    const toRate = exchangeRates[toCurrencyCode];

    if (fromRate === undefined || toRate === undefined || fromRate === null || toRate === null) {
      return "-";
    }

    if (typeof fromRate !== 'number' || typeof toRate !== 'number') {
      return "-";
    }

    if (fromRate === 0) {
      return "-";
    }

    const rate = toRate / fromRate;

    if (!Number.isFinite(rate) || Number.isNaN(rate)) {
      return "-";
    }

    return rate.toFixed(2);
  } catch (error) {
    return "-";
  }
}

/**
 * Calcula rate a partir de exchangeRates
 */
export async function calculateRateFromExchangeRates(
  params: CalculateRateFromExchangeRatesParams
): Promise<number | null> {
  try {
    const {
      fromCurrencyCode,
      toCurrencyCode,
      exchangeRates,
      fallbackRate = 1,
    } = params;

    if (!fromCurrencyCode || !toCurrencyCode) {
      return fallbackRate;
    }

    if (!exchangeRates || typeof exchangeRates !== 'object') {
      return fallbackRate;
    }

    const fromRate = exchangeRates[fromCurrencyCode];
    const toRate = exchangeRates[toCurrencyCode];

    if (fromRate === undefined || toRate === undefined || fromRate === null || toRate === null) {
      return fallbackRate;
    }

    if (typeof fromRate !== 'number' || typeof toRate !== 'number') {
      return fallbackRate;
    }

    if (fromRate === 0) {
      return fallbackRate;
    }

    const rate = toRate / fromRate;

    if (!Number.isFinite(rate) || Number.isNaN(rate)) {
      return fallbackRate;
    }

    return rate;
  } catch (error) {
    return null;
  }
}

/**
 * Calcula taxas de câmbio a partir de dados bid/ask da API
 */
export async function calculateExchangeRatesFromBidAsk(
  params: CalculateExchangeRatesFromBidAskParams
): Promise<ExchangeRatesResult | null> {
  try {
    const { currencies, baseCurrency = 'USD' } = params;

    if (!currencies || !Array.isArray(currencies) || currencies.length === 0) {
      return null;
    }

    const exchangeRates: Record<string, number> = {};
    
    const baseCurrencyData = currencies.find(
      (item) => item.apiData.symbol?.toUpperCase() === baseCurrency.toUpperCase()
    );
    
    const baseMidRate = baseCurrencyData && 
      typeof baseCurrencyData.apiData.bid === 'number' && 
      typeof baseCurrencyData.apiData.ask === 'number' &&
      Number.isFinite(baseCurrencyData.apiData.bid) &&
      Number.isFinite(baseCurrencyData.apiData.ask)
      ? (baseCurrencyData.apiData.bid + baseCurrencyData.apiData.ask) / 2
      : 1;

    if (!Number.isFinite(baseMidRate) || baseMidRate === 0) {
      return null;
    }

    currencies.forEach(({ apiData }) => {
      const code = apiData.symbol?.toUpperCase() || '';
      
      if (typeof apiData.bid !== 'number' || typeof apiData.ask !== 'number') {
        return;
      }

      if (!Number.isFinite(apiData.bid) || !Number.isFinite(apiData.ask)) {
        return;
      }

      const midRate = (apiData.bid + apiData.ask) / 2;
      
      if (!Number.isFinite(midRate)) {
        return;
      }

      exchangeRates[code] = code === baseCurrency.toUpperCase() ? 1 : midRate / baseMidRate;
    });

    return { exchangeRates };
  } catch (error) {
    return null;
  }
}

/**
 * Calcula a data mais recente a partir de um array de datas
 */
export async function calculateLatestDate(
  params: CalculateLatestDateParams
): Promise<string | null> {
  try {
    const { tradeDates, fallbackDate } = params;

    if (!tradeDates || !Array.isArray(tradeDates) || tradeDates.length === 0) {
      const fallback = fallbackDate || new Date();
      return fallback.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    }

    const dates = tradeDates
      .map((dateStr) => {
        try {
          return new Date(dateStr);
        } catch {
          return null;
        }
      })
      .filter((date): date is Date => date !== null && !isNaN(date.getTime()));

    if (dates.length === 0) {
      const fallback = fallbackDate || new Date();
      return fallback.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    }

    const latestDate = dates.sort((a, b) => b.getTime() - a.getTime())[0];

    return latestDate.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch (error) {
    return null;
  }
}
