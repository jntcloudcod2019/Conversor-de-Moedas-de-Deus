
import { getDecimals, formatNumber } from './currencyCalculators';

/**
 * Interface para cálculo de taxa de câmbio
 */
export interface CalculateExchangeRateParams {
  fromCurrencyCode: string;
  toCurrencyCode: string;
  exchangeRates: Record<string, number>;
}

/**
 * Interface para cálculo de posição do dropdown
 */
export interface CalculateDropdownPositionParams {
  rect: DOMRect;
  listboxWidth: number;
  listboxHeight?: number; // Altura estimada ou medida do dropdown
  itemCount?: number; // Número de itens para estimar altura se não fornecida
  offsetTop?: number;
  offsetLeft?: number;
  minListboxWidth?: number;
  preferAbove?: boolean; // Preferir posicionar acima do trigger
}

/**
 * Interface para cálculo de largura do listbox
 */
export interface CalculateListboxWidthParams {
  innerRect: DOMRect;
  minWidth?: number;
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
 * Interface para cálculo de valores de display
 */
export interface CalculateDisplayValuesParams {
  fromValue: number;
  toValue: number;
  fromCurrencyCode: string;
  toCurrencyCode: string;
  decimalSeparator?: string;
  thousandSeparator?: string;
}

/**
 * Interface para resultado de display values
 */
export interface DisplayValuesResult {
  displayFrom: string;
  displayTo: string;
}

/**
 * Interface para cálculo de valores efetivos
 */
export interface CalculateEffectiveValuesParams {
  fromValue: number;
  toValue: number;
  rate: number;
  lastEdited?: 'from' | 'to';
}

/**
 * Interface para resultado de valores efetivos
 */
export interface EffectiveValuesResult {
  effectiveFromValue: number;
  effectiveToValue: number;
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
 * Interface para resultado de posicionamento
 */
export interface DropdownPositionResult {
  top: number;
  left: number;
  position: 'below' | 'above';
  adjusted: boolean; // Se foi ajustado para caber na viewport
}

/**
 * Interface para limites da viewport
 */
interface ViewportBounds {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

/**
 * Obtém limites da viewport
 */
function getViewportBounds(): ViewportBounds {
  return {
    top: 0,
    left: 0,
    right: window.innerWidth,
    bottom: window.innerHeight,
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

/**
 * Estima altura do dropdown baseado no número de itens
 */
function estimateDropdownHeight(itemCount: number, itemHeight: number = 40): number {
  const maxVisibleItems = 6; // Altura máxima antes de scroll
  const visibleItems = Math.min(itemCount, maxVisibleItems);
  const padding = 8; // Padding do container
  return visibleItems * itemHeight + padding * 2;
}

/**
 * Valida se um DOMRect é válido
 */
function validateRect(rect: DOMRect | null): rect is DOMRect {
  if (!rect) return false;
  return (
    Number.isFinite(rect.top) &&
    Number.isFinite(rect.left) &&
    Number.isFinite(rect.right) &&
    Number.isFinite(rect.bottom) &&
    Number.isFinite(rect.width) &&
    Number.isFinite(rect.height)
  );
}

/**
 * Ajusta posição para caber na viewport
 */
function adjustPositionForViewport(
  position: { top: number; left: number },
  dropdownWidth: number,
  dropdownHeight: number,
  viewport: ViewportBounds,
  preferAbove: boolean = false
): { top: number; left: number } {
  let { top, left } = position;
  const MARGIN = 8; // Margem de segurança

  // Ajuste horizontal: garante que não saia das bordas
  if (left < viewport.left) {
    left = viewport.left + MARGIN;
  } else if (left + dropdownWidth > viewport.right) {
    left = viewport.right - dropdownWidth - MARGIN;
  }

  // Ajuste vertical: tenta posicionar acima se não couber embaixo
  const fitsBelow = top + dropdownHeight <= viewport.bottom;
  const fitsAbove = top - dropdownHeight >= viewport.top;

  if (!fitsBelow) {
    if (preferAbove || (fitsAbove && !fitsBelow)) {
      // Posiciona acima do trigger
      top = top - dropdownHeight - MARGIN;
    } else {
      // Limita ao fundo da viewport (com scroll interno)
      top = viewport.bottom - dropdownHeight - MARGIN;
    }
  }

  return { top, left };
}

/**
 * Calcula posição do dropdown baseado no elemento trigger
 * Agora com detecção de viewport e ajuste automático
 */
export function calculateDropdownPosition(
  params: CalculateDropdownPositionParams
): DropdownPositionResult | null {
  try {
    const {
      rect,
      listboxWidth,
      listboxHeight,
      itemCount,
      offsetTop = 12,
      offsetLeft = 0,
      minListboxWidth = 120,
      preferAbove = false,
    } = params;

    // Validação
    if (!validateRect(rect)) {
      return null;
    }

    const widthToUse = Math.max(listboxWidth, minListboxWidth);
    
    // Estima altura se não fornecida
    const heightToUse = listboxHeight ?? estimateDropdownHeight(itemCount ?? 10);

    // Posição inicial (abaixo do trigger, alinhado à direita)
    const initialLeft = rect.right - widthToUse + offsetLeft;
    const initialTop = rect.bottom + offsetTop;

    // Validação de valores finitos
    if (!Number.isFinite(initialLeft) || !Number.isFinite(initialTop)) {
      return null;
    }

    // Obtém limites da viewport
    const viewport = getViewportBounds();

    // Ajusta para caber na viewport
    const adjusted = adjustPositionForViewport(
      { top: initialTop, left: initialLeft },
      widthToUse,
      heightToUse,
      viewport,
      preferAbove
    );

    // Determina se está acima ou abaixo
    const position = adjusted.top < rect.bottom ? 'above' : 'below';

    return {
      top: adjusted.top,
      left: adjusted.left,
      position,
      adjusted: adjusted.top !== initialTop || adjusted.left !== initialLeft,
    };
  } catch (error) {
    return null;
  }
}

/**
 * Calcula largura do listbox baseado no conteúdo interno
 */
export function calculateListboxWidth(
  params: CalculateListboxWidthParams
): number | null {
  try {
    const { innerRect, minWidth = 120 } = params;

    if (!innerRect) {
      return null;
    }

    if (typeof innerRect.width !== 'number' || !Number.isFinite(innerRect.width)) {
      return null;
    }

    const calculatedWidth = Math.max(innerRect.width, minWidth);

    if (!Number.isFinite(calculatedWidth) || calculatedWidth <= 0) {
      return null;
    }

    return calculatedWidth;
  } catch (error) {
    return null;
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
 * Calcula valores de display formatados
 */
export async function calculateDisplayValues(
  params: CalculateDisplayValuesParams
): Promise<DisplayValuesResult | null> {
  try {
    const {
      fromValue,
      toValue,
      fromCurrencyCode,
      toCurrencyCode,
      decimalSeparator = ",",
      thousandSeparator = ".",
    } = params;

    if (typeof fromValue !== 'number' || typeof toValue !== 'number') {
      return null;
    }

    if (!Number.isFinite(fromValue) || !Number.isFinite(toValue)) {
      return null;
    }

    if (!fromCurrencyCode || !toCurrencyCode) {
      return null;
    }

    const fromDecimals = getDecimals(fromCurrencyCode);
    const toDecimals = getDecimals(toCurrencyCode);

    const displayFrom = formatNumber(
      fromValue,
      fromDecimals,
      decimalSeparator,
      thousandSeparator,
    );

    const displayTo = formatNumber(
      toValue,
      toDecimals,
      decimalSeparator,
      thousandSeparator,
    );

    return {
      displayFrom,
      displayTo,
    };
  } catch (error) {
    return null;
  }
}

/**
 * Calcula valores efetivos baseado em lastEdited
 */
export async function calculateEffectiveValues(
  params: CalculateEffectiveValuesParams
): Promise<EffectiveValuesResult | null> {
  try {
    const { fromValue, toValue, rate, lastEdited } = params;

    if (typeof fromValue !== 'number' || typeof toValue !== 'number' || typeof rate !== 'number') {
      return null;
    }

    if (!Number.isFinite(fromValue) || !Number.isFinite(toValue) || !Number.isFinite(rate)) {
      return null;
    }

    if (rate === 0) {
      return null;
    }

    let effectiveFromValue: number;
    let effectiveToValue: number;

    if (lastEdited === 'to') {
      effectiveFromValue = toValue / rate;
      effectiveToValue = toValue;
    } else {
      effectiveFromValue = fromValue;
      effectiveToValue = fromValue * rate;
    }

    if (!Number.isFinite(effectiveFromValue) || !Number.isFinite(effectiveToValue)) {
      return null;
    }

    return {
      effectiveFromValue,
      effectiveToValue,
    };
  } catch (error) {
    return null;
  }
}

/**
 * Calcula posição ajustada do dropdown após calcular largura
 * @deprecated Use calculateDropdownPosition com listboxWidth calculado
 * Mantido para compatibilidade durante migração
 */
export function calculateAdjustedDropdownPosition(
  params: CalculateDropdownPositionParams & { calculatedWidth: number }
): DropdownPositionResult | null {
  // Reutiliza calculateDropdownPosition com a largura calculada
  return calculateDropdownPosition({
    ...params,
    listboxWidth: params.calculatedWidth,
  });
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
