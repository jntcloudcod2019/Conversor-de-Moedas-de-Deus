import React, { useRef, useState, useEffect, useMemo } from "react";
import * as Flags from "country-flag-icons/react/3x2";
import { format, max, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Currency, CurrencyConverterProps, CurrencyConverterData, CurrencyCode, DEFAULT_CURRENCY_CODES, getCountryCodeByCurrency } from "./types";
import { currencyService } from "./market-data-currency-converter";

const PT_BR_DATE_TIME = "dd/MM/yyyy 'às' HH:mm";

/* ----- calculateRateFromExchangeRates (inlined from calculationsPositionComponents) ----- */
interface CalculateRateFromExchangeRatesParams {
  fromCurrencyCode: string;
  toCurrencyCode: string;
  exchangeRates: Record<string, number>;
  fallbackRate?: number;
}
export async function calculateRateFromExchangeRates(params: CalculateRateFromExchangeRatesParams): Promise<number | null> {
  try {
    const { fromCurrencyCode, toCurrencyCode, exchangeRates, fallbackRate = 1 } = params;
    if (!fromCurrencyCode || !toCurrencyCode || !exchangeRates || typeof exchangeRates !== "object") return fallbackRate;
    const fromRate = exchangeRates[fromCurrencyCode];
    const toRate = exchangeRates[toCurrencyCode];
    if (fromRate === undefined || toRate === undefined || fromRate === null || toRate === null || typeof fromRate !== "number" || typeof toRate !== "number" || fromRate === 0) return fallbackRate;
    const rate = toRate / fromRate;
    return Number.isFinite(rate) && !Number.isNaN(rate) ? rate : fallbackRate;
  } catch {
    return null;
  }
}

/* ----- calculateExchangeRatesFromBidAsk + calculateLatestDate (for currencyMapper) ----- */
interface CalculateExchangeRatesFromBidAskParams {
  currencies: Array<{ code: string; apiData: { symbol?: string; bid: number; ask: number } }>;
  baseCurrency?: string;
}
interface ExchangeRatesResult { exchangeRates: Record<string, number>; }
interface CalculateLatestDateParams { tradeDates: string[]; fallbackDate?: Date; }
export async function calculateLatestDate(params: CalculateLatestDateParams): Promise<string | null> {
  try {
    const { tradeDates, fallbackDate = new Date() } = params;
    const dates = (tradeDates ?? []).map((s) => parseISO(s)).filter((d) => !isNaN(d.getTime()));
    const latest = dates.length ? max(dates) : fallbackDate;
    return format(latest, PT_BR_DATE_TIME, { locale: ptBR });
  } catch {
    return null;
  }
}
export async function calculateExchangeRatesFromBidAsk(params: CalculateExchangeRatesFromBidAskParams): Promise<ExchangeRatesResult | null> {
  try {
    const { currencies, baseCurrency = "USD" } = params;
    if (!currencies?.length) return null;
    const base = currencies.find((c) => c.apiData.symbol?.toUpperCase() === baseCurrency.toUpperCase());
    const baseMidRate = base && typeof base.apiData.bid === "number" && typeof base.apiData.ask === "number" && Number.isFinite(base.apiData.bid) && Number.isFinite(base.apiData.ask)
      ? (base.apiData.bid + base.apiData.ask) / 2 : 1;
    if (!Number.isFinite(baseMidRate) || baseMidRate === 0) return null;
    const exchangeRates: Record<string, number> = {};
    currencies.forEach(({ apiData }) => {
      const code = apiData.symbol?.toUpperCase() || "";
      if (typeof apiData.bid !== "number" || typeof apiData.ask !== "number" || !Number.isFinite(apiData.bid) || !Number.isFinite(apiData.ask)) return;
      const mid = (apiData.bid + apiData.ask) / 2;
      if (!Number.isFinite(mid)) return;
      exchangeRates[code] = code === baseCurrency.toUpperCase() ? 1 : mid / baseMidRate;
    });
    return { exchangeRates };
  } catch {
    return null;
  }
}
/* ----- FlagIcon (inlined) ----- */
const FLAG_SIZE = 30;
const FlagIcon: React.FC<{ countryCode: string }> = ({ countryCode }) => {
  const normalizedCode = countryCode?.toUpperCase() || "";
  const FlagComponent = (Flags as Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties; title?: string }>>)[normalizedCode];
  if (!FlagComponent) {
    return (
      <div
        className="flex items-center justify-center rounded-full overflow-hidden shrink-0 bg-wl-neutral-200"
        style={{ width: `${FLAG_SIZE}px`, height: `${FLAG_SIZE}px`, fontSize: `${FLAG_SIZE * 0.6}px` }}
        title={`Bandeira não disponível: ${normalizedCode}`}
      >
        🌏
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center rounded-full overflow-hidden shrink-0" style={{ width: `${FLAG_SIZE}px`, height: `${FLAG_SIZE}px`, minWidth: `${FLAG_SIZE}px`, minHeight: `${FLAG_SIZE}px` }}>
      <FlagComponent className="w-full h-full" style={{ width: "100%", height: "100%", display: "block", objectFit: "cover", borderRadius: "50%" }} title={countryCode} />
    </div>
  );
};

/* ----- ChevronIcon + SwapButtonWeb (inlined) ----- */
const ChevronIcon: React.FC<{ size?: number; color?: string; onClick?: () => void; className?: string }> = ({ size = 20, color = "#525252", onClick, className = "" }) => {
  const svg = (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M5 7.5L10 12.5L15 7.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  if (onClick) return <button type="button" onClick={onClick} className={`inline-flex items-center justify-center p-0 m-0 border-0 bg-transparent cursor-pointer hover:opacity-70 transition-opacity focus:outline-none focus:ring-0 active:bg-transparent ${className}`} style={{ width: size, height: size, minWidth: size, minHeight: size, backgroundColor: "transparent", border: "none", outline: "none", boxShadow: "none" }} aria-label="Abrir dropdown">{svg}</button>;
  return <span className={className}>{svg}</span>;
};
const SwapIconWeb: React.FC = () => (
  <svg width={50} height={50} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-swap-icon="web">
    <circle cx="24" cy="24" r="24" fill="#007bff" />
    <line x1="18" y1="18" x2="30" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 16 L18 18 L20 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="18" y1="30" x2="30" y2="30" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 28 L30 30 L28 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);
const SwapButtonWeb: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button type="button" onClick={onClick} title="Trocar moedas" className="inline-flex items-center justify-center p-0 m-0 bg-transparent border-0 outline-none appearance-none cursor-pointer" style={{ width: 50, height: 50, boxShadow: "none", background: "transparent", border: "none", padding: 0, margin: 0 }} aria-label="Trocar moedas" data-swap-button="web">
    <SwapIconWeb />
  </button>
);

/* ----- Skeleton + CurrencyConverterSkeleton (inlined) ----- */
interface SkeletonProps { width?: string | number; height?: string | number; className?: string; variant?: "text" | "circular" | "rectangular"; }
const Skeleton = React.memo<SkeletonProps>(({ width = "100%", height = "1rem", className = "", variant = "rectangular" }) => {
  const style = useMemo<React.CSSProperties>(() => ({ width: typeof width === "number" ? `${width}px` : width, height: typeof height === "number" ? `${height}px` : height }), [width, height]);
  const variantClasses = useMemo(() => {
    const base = "bg-gray-200 dark:bg-gray-700 animate-pulse";
    const variants = { text: "rounded", circular: "rounded-full", rectangular: "rounded-lg" };
    return `${base} ${variants[variant]}`;
  }, [variant]);
  return <div role="status" aria-label="Carregando..." className={`${variantClasses} ${className}`} style={style} />;
});
Skeleton.displayName = "Skeleton";
const CurrencyConverterSkeleton = React.memo(() => (
  <>
    <div className="w-full px-3 sm:px-4"><Skeleton variant="text" width="40%" height="28px" className="sm:w-60%" /></div>
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-2 sm:gap-4 sm:gap-6 w-full">
      <div className="flex flex-row items-center w-full sm:flex-1 min-w-0 h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md border-wl-neutral-200">
        <Skeleton variant="text" width="45%" height="20px" className="sm:w-55%" />
        <div className="flex items-center gap-1 ml-auto shrink-0"><Skeleton variant="circular" width={24} height={24} /><Skeleton variant="text" width="35px" height="18px" /><Skeleton variant="text" width="10px" height="10px" /></div>
      </div>
      <div className="flex justify-center sm:justify-start"><Skeleton variant="rectangular" width={48} height={48} className="rounded-full" /></div>
      <div className="flex flex-row items-center w-full sm:flex-1 min-w-0 h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md border-wl-neutral-200">
        <Skeleton variant="text" width="45%" height="20px" className="sm:w-55%" />
        <div className="flex items-center gap-1 ml-auto shrink-0"><Skeleton variant="circular" width={24} height={24} /><Skeleton variant="text" width="35px" height="18px" /><Skeleton variant="text" width="10px" height="10px" /></div>
      </div>
    </div>
    <div className="flex flex-col items-center gap-1 sm:gap-2 w-full mt-2">
      <div className="flex flex-row flex-wrap justify-center items-center gap-2 w-full px-2">
        <Skeleton variant="text" width="130px" height="44px" className="sm:h-12 lg:h-16" /><Skeleton variant="text" width="24px" height="36px" className="sm:h-8" /><Skeleton variant="text" width="130px" height="44px" className="sm:h-12 lg:h-16" />
      </div>
      <Skeleton variant="text" width="65%" height="16px" />
    </div>
  </>
));
CurrencyConverterSkeleton.displayName = "CurrencyConverterSkeleton";

/* ----- CurrencyInputDropdown: absolute inline no bloco (evita transform do editor WP que quebra fixed) ----- */
const CurrencyInputDropdown: React.FC<{ currency: Currency; currencies: Currency[]; onCurrencyChange: (currency: Currency) => void }> = ({ currency, currencies, onCurrencyChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listboxInnerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currencyItemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const listboxId = React.useId();
  const sortedCurrencies = useMemo(
    () => (Array.isArray(currencies) ? [...currencies] : []).sort((a, b) => a.code.localeCompare(b.code)),
    [currencies]
  );

  const handleSelectCurrency = (selectedCurrency: Currency) => {
    onCurrencyChange(selectedCurrency);
    setIsOpen(false);
    setActiveIndex(-1);
    rootRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (isOpen && wrapperRef.current && !wrapperRef.current.contains(target)) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const first = sortedCurrencies[0];
    if (first) {
      requestAnimationFrame(() => {
        currencyItemRefs.current.get(currency.code)?.scrollIntoView({ behavior: "auto", block: "nearest", inline: "center" });
        currencyItemRefs.current.get(first.code)?.focus();
      });
    }
  }, [isOpen, currency.code, sortedCurrencies]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) return;
    if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
      setActiveIndex(-1);
      rootRef.current?.focus();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => {
        const next = (prev + 1) % sortedCurrencies.length;
        const nextCurrency = sortedCurrencies[next];
        currencyItemRefs.current.get(nextCurrency.code)?.scrollIntoView({ block: "nearest", behavior: "smooth" });
        currencyItemRefs.current.get(nextCurrency.code)?.focus();
        return next;
      });
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => {
        const next = prev <= 0 ? sortedCurrencies.length - 1 : prev - 1;
        const nextCurrency = sortedCurrencies[next];
        currencyItemRefs.current.get(nextCurrency.code)?.scrollIntoView({ block: "nearest", behavior: "smooth" });
        currencyItemRefs.current.get(nextCurrency.code)?.focus();
        return next;
      });
    }
  };

  const listboxContent = isOpen ? (
    <div
      ref={dropdownRef}
      role="listbox"
      id={listboxId}
      aria-label="Selecionar moeda"
      className="absolute left-0 top-full bg-white border border-gray-200 rounded-lg shadow-lg z-[9999] min-w-[100px] max-h-[400px] overflow-auto"
      style={{ marginTop: "6px" }}
    >
      <div ref={listboxInnerRef} className="py-1">
        {sortedCurrencies.map((curr, idx) => {
          const isSelected = curr.code === currency.code;
          const isActive = idx === activeIndex;
          return (
            <button
              key={curr.code}
              ref={(el) => { if (el) currencyItemRefs.current.set(curr.code, el); else currencyItemRefs.current.delete(curr.code); }}
              type="button"
              role="option"
              aria-selected={isSelected}
              tabIndex={isActive ? 0 : -1}
              onClick={(e) => { e.stopPropagation(); handleSelectCurrency(curr); }}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`w-full py-2 bg-white hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset ${isSelected ? "font-semibold" : ""} ${isActive ? "bg-gray-100" : ""}`}
              style={{ minHeight: "40px", backgroundColor: "white", paddingLeft: "12px", paddingRight: "12px" }}
            >
              <div className="w-5 h-5 shrink-0 rounded-full overflow-hidden flex items-center justify-center"><FlagIcon countryCode={getCountryCodeByCurrency(curr.code)} /></div>
              <span className="font-inter text-sm text-center">{curr.code}</span>
            </button>
          );
        })}
      </div>
    </div>
  ) : null;

  return (
    <div
      ref={wrapperRef}
      className="infomoney-cc-currency-dropdown-wrapper relative inline-block shrink-0"
      style={{ overflow: "visible", width: "fit-content", maxWidth: "100%", background: "#ffffff", border: "none", boxShadow: "none" }}
    >
      <div
        ref={rootRef}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Selecionar moeda"
        aria-controls={listboxId}
        tabIndex={0}
        className="relative w-auto min-w-[90px] sm:min-w-[100px] h-5 flex items-center justify-end gap-1 shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded z-10 bg-white"
        style={{ overflow: "visible", backgroundColor: "#ffffff" }}
        onClick={(e) => {
          e.stopPropagation();
          requestAnimationFrame(() => setIsOpen((prev) => !prev));
        }}
        onKeyDown={handleKeyDown}
      >
        <div className="w-5 h-5 shrink-0 rounded-full overflow-hidden flex items-center justify-center"><FlagIcon countryCode={getCountryCodeByCurrency(currency.code)} /></div>
        <span className="font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 whitespace-nowrap" style={{ minWidth: "fit-content" }}>{currency.code}</span>
        <span className="inline-flex items-center justify-center pointer-events-none" aria-hidden="true">
          <ChevronIcon color="#525252" />
        </span>
      </div>
      {listboxContent}
    </div>
  );
};

const CURRENCY_DECIMALS: Record<string, number> = {
  JPY: 0, KRW: 0, VND: 0, HUF: 0, CLP: 0, ISK: 0, TWD: 0,
  KWD: 3, BHD: 3, JOD: 3, OMR: 3, TND: 3, LYD: 3,
};

function getDecimals(code: string): number {
  return CURRENCY_DECIMALS[code] ?? 2;
}

/** Arredonda valor para N casas decimais (evita ruído de ponto flutuante) */
function roundToDecimals(value: number, decimals: number): number {
  if (!Number.isFinite(value)) return 0;
  if (decimals <= 0) return Math.round(value);
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

/** Placeholder do input conforme casas decimais da moeda (ex.: JPY "0", BRL "0,00") */
function getPlaceholder(decimals: number, decimalSeparator: string): string {
  if (decimals === 0) return "0";
  return `0${decimalSeparator}${"0".repeat(decimals)}`;
}

function detectDecimalSeparator(raw: string, defaultSeparator: string): string {
  const lastComma = raw.lastIndexOf(",");
  const lastDot = raw.lastIndexOf(".");
  if (lastComma > lastDot && lastComma !== -1) return ",";
  if (lastDot > lastComma && lastDot !== -1) return ".";
  return defaultSeparator;
}

function formatNumber(num: number, decimals: number, decSep: string, thouSep: string): string {
  if (num === 0) return decimals > 0 ? `0${decSep}${"0".repeat(decimals)}` : "0";
  const fixed = num.toFixed(decimals);
  const [integerPart, decimalPart = ""] = fixed.split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thouSep);
  return decimalPart ? `${formattedInteger}${decSep}${decimalPart}` : formattedInteger;
}

function sanitizeRawInput(value: string, decimals: number, decimalSeparator: string): string {
  let raw = value.replace(/[^\d.,]/g, "");
  if (raw === "") return "";
  if (decimals === 0) return raw;
  const decSep = detectDecimalSeparator(raw, decimalSeparator);
  const parts = raw.split(decSep);
  const intPart = parts[0];
  const decPart = parts.slice(1).join("");
  if (parts.length === 1) return intPart;
  if (decPart === "") return `${intPart}${decSep}`;
  return `${intPart}${decSep}${decPart}`;
}

function parseFormattedNumber(formatted: string, decimals: number, decimalSeparator: string): number {
  const raw = formatted.trim();
  if (raw === "" || raw === decimalSeparator) return 0;
  if (decimals === 0) {
    const digits = raw.replace(/[^\d]/g, "");
    if (digits === "") return 0;
    const num = parseInt(digits, 10);
    return Number.isNaN(num) ? 0 : num;
  }
  const decimalSep = detectDecimalSeparator(raw, decimalSeparator);
  const thousandSep = decimalSep === "," ? "." : ",";
  const cleaned = raw.replace(new RegExp(`\\${thousandSep}`, "g"), "");
  const normalized = cleaned.replace(new RegExp(`\\${decimalSep}`), ".");
  const num = parseFloat(normalized);
  return Number.isNaN(num) ? 0 : num;
}

export function getCurrentDateTime(): string {
  return format(new Date(), PT_BR_DATE_TIME, { locale: ptBR });
}

const TITLE_STYLES: React.CSSProperties = {
  overflow: "visible",
  textOverflow: "clip",
  whiteSpace: "normal",
  wordBreak: "normal",
  maxWidth: "none",
  width: "100%",
  display: "block",
};

const TITLE_WRAPPER_STYLES: React.CSSProperties = {
  overflow: "visible",
  maxWidth: "none",
  width: "100%",
};

const CONTAINER_CLASS_NAME =
  "flex flex-col gap-5 bg-white border-2 border-wl-neutral-200 rounded-2xl shadow-lg w-full max-w-md sm:max-w-6xl mx-auto p-4 sm:p-6 overflow-visible";

function useTitleProtection() {
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const observerRef = React.useRef<MutationObserver | null>(null);

  const protectTitle = React.useCallback(() => {
    if (titleRef.current && titleRef.current.textContent !== "Conversor de moedas") {
      titleRef.current.textContent = "Conversor de moedas";
    }
  }, []);

  const titleRefCallback = React.useCallback((element: HTMLHeadingElement | null) => {
    titleRef.current = element;
    if (element) {
      element.textContent = "Conversor de moedas";
      if (observerRef.current) observerRef.current.disconnect();
      const observer = new MutationObserver(() => {
        requestAnimationFrame(protectTitle);
      });
      observer.observe(element, {
        childList: true,
        subtree: true,
        characterData: true,
        characterDataOldValue: true,
      });
      observerRef.current = observer;
    } else {
      observerRef.current?.disconnect();
      observerRef.current = null;
    }
  }, [protectTitle]);

  React.useEffect(
    () => () => observerRef.current?.disconnect(),
    []
  );

  return { titleRefCallback };
}

function useLocaleSeparators() {
  return React.useMemo(() => {
    const locale = navigator.language || "pt-BR";
    const isPortugueseBR = locale.startsWith("pt");
    return {
      decimalSeparator: isPortugueseBR ? "," : ".",
      thousandSeparator: isPortugueseBR ? "." : ",",
    };
  }, []);
}

function useConverterData(props: {
  converterData?: CurrencyConverterData | null;
  loadedData: CurrencyConverterData | null;
  propCurrencies: Currency[];
  propExchangeRates?: Record<string, number>;
  propLastUpdated?: string;
}) {
  return React.useMemo(
    () => ({
      currencies: props.converterData?.currencies ?? props.loadedData?.currencies ?? props.propCurrencies ?? [],
      exchangeRates: props.converterData?.exchangeRates ?? props.loadedData?.exchangeRates ?? props.propExchangeRates,
      lastUpdated: props.converterData?.lastUpdated ?? props.loadedData?.lastUpdated ?? props.propLastUpdated,
    }),
    [
      props.converterData,
      props.loadedData,
      props.propCurrencies,
      props.propExchangeRates,
      props.propLastUpdated,
    ]
  );
}

export interface UseCurrencyConverterDataResult {
  data: CurrencyConverterData | null;
  loading: boolean;
  error: Error | null;
  retry: () => void;
}

/**
 * Hook de resposta da API: centraliza chamada ao serviço externo e retorna data/loading/error/retry.
 * Mantém serviços de API fora do componente; o componente usa apenas este hook.
 */
export function useCurrencyConverterData(
  currencyCodes: ReadonlyArray<CurrencyCode>,
  baseCurrency: string = "USD",
  options?: { skip?: boolean; apiToken?: string }
): UseCurrencyConverterDataResult {
  const [data, setData] = React.useState<CurrencyConverterData | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);
  const retryTimeoutRef = React.useRef<number | null>(null);
  const hasTriedRef = React.useRef(false);
  const [retryTrigger, setRetryTrigger] = React.useState(0);

  const fetchData = React.useCallback(() => {
    if (currencyCodes.length === 0) return;
    hasTriedRef.current = true;
    setLoading(true);
    setError(null);
    currencyService
      .getCurrencyConverterData([...currencyCodes], baseCurrency, options?.apiToken)
      .then((result) => {
        setData(result ?? null);
        setLoading(false);
        if (retryTimeoutRef.current) {
          clearTimeout(retryTimeoutRef.current);
          retryTimeoutRef.current = null;
        }
      })
      .catch((err) => {
        setError(err instanceof Error ? err : new Error(String(err)));
        setLoading(false);
        if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);
        retryTimeoutRef.current = window.setTimeout(() => {
          retryTimeoutRef.current = null;
          hasTriedRef.current = false;
          setRetryTrigger((t) => t + 1);
        }, 3000);
      });
  }, [currencyCodes.join(","), baseCurrency, options?.apiToken]);

  React.useLayoutEffect(() => {
    if (options?.skip) return;
    if (currencyCodes.length === 0) return;
    if (hasTriedRef.current) return;
    fetchData();
    return () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
        retryTimeoutRef.current = null;
      }
    };
  }, [options?.skip, currencyCodes.length, fetchData, retryTrigger]);

  const retry = React.useCallback(() => {
    hasTriedRef.current = false;
    fetchData();
  }, [fetchData]);

  return { data, loading, error, retry };
}

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  fromValue,
  toValue,
  fromCurrency,
  toCurrency,
  rate: propRate,
  currencies: propCurrencies,
  exchangeRates: propExchangeRates,
  lastUpdated: propLastUpdated,
  onFromValueChange,
  onToValueChange,
  onFromCurrencyChange,
  onToCurrencyChange,
  converterData,
  currencyCodesToFetch = DEFAULT_CURRENCY_CODES,
  apiToken,
}) => {
  const { data: loadedData } = useCurrencyConverterData(
    currencyCodesToFetch,
    "USD",
    { skip: !!converterData, apiToken }
  );
  const { titleRefCallback } = useTitleProtection();
  const { decimalSeparator, thousandSeparator } = useLocaleSeparators();
  const { currencies, exchangeRates, lastUpdated } = useConverterData({
    converterData,
    loadedData,
    propCurrencies,
    propExchangeRates,
    propLastUpdated,
  });

  const [showSkeleton, setShowSkeleton] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setShowSkeleton(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const [rawFromInput, setRawFromInput] = React.useState("");
  const [rawToInput, setRawToInput] = React.useState("");
  const [rate, setRate] = React.useState<number>(propRate ?? 1);

  const displayFrom = React.useMemo(() => {
    const dec = getDecimals(fromCurrency.code);
    return formatNumber(roundToDecimals(fromValue, dec), dec, decimalSeparator, thousandSeparator);
  }, [fromValue, fromCurrency.code, decimalSeparator, thousandSeparator]);

  const displayTo = React.useMemo(() => {
    const dec = getDecimals(toCurrency.code);
    return formatNumber(roundToDecimals(toValue, dec), dec, decimalSeparator, thousandSeparator);
  }, [toValue, toCurrency.code, decimalSeparator, thousandSeparator]);
  const lastUpdatedLabel = React.useMemo(
    () => lastUpdated ?? getCurrentDateTime(),
    [lastUpdated]
  );

  React.useEffect(() => {
    if (propRate !== undefined) {
      setRate(propRate);
      return;
    }

    if (exchangeRates && Object.keys(exchangeRates).length > 0) {
      calculateRateFromExchangeRates({
        fromCurrencyCode: fromCurrency.code,
        toCurrencyCode: toCurrency.code,
        exchangeRates,
        fallbackRate: 1,
      }).then((r) => {
        if (r != null) setRate(r);
      });
    } else {
      setRate(1);
    }
  }, [propRate, exchangeRates, fromCurrency.code, toCurrency.code]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const decimals = getDecimals(fromCurrency.code);
    const raw = sanitizeRawInput(e.target.value, decimals, decimalSeparator);
    setRawFromInput(raw);
    if (raw.trim() === "" || raw === decimalSeparator) {
      onFromValueChange(0);
          return;
        }
    const numeric = parseFormattedNumber(raw, decimals, decimalSeparator);
    if (Number.isNaN(numeric)) {
      onFromValueChange(0);
      return;
    }
    onFromValueChange(numeric);
  };

  const handleToInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onToValueChange) return;
    
    const decimals = getDecimals(toCurrency.code);
    const raw = sanitizeRawInput(
      e.target.value,
      decimals,
      decimalSeparator,
    );

    setRawToInput(raw);

    if (raw.trim() === "" || raw === decimalSeparator) {
      onToValueChange(0);
      onFromValueChange(0);
      return;
    }

    const numeric = parseFormattedNumber(
      raw,
      decimals,
      decimalSeparator,
    );
    
    if (Number.isNaN(numeric)) {
      onToValueChange(0);
      onFromValueChange(0);
      return;
    }

    onToValueChange(numeric);
    /* Conversão inversa: manter "from" em sync quando o usuário edita "to" */
    const effectiveRate = Number.isFinite(rate) && rate > 0 ? rate : 1;
    const fromDec = getDecimals(fromCurrency.code);
    onFromValueChange(roundToDecimals(numeric / effectiveRate, fromDec));
  };

  const isFromInputFocused = React.useRef(false);
  const isToInputFocused = React.useRef(false);
  
  const fromInputContainerRef = React.useRef<HTMLDivElement>(null);
  const toInputContainerRef = React.useRef<HTMLDivElement>(null);
  const formatRawValue = (value: number, code: string): string => {
    if (value === 0) return "";
    const dec = getDecimals(code);
    return formatNumber(roundToDecimals(value, dec), dec, decimalSeparator, thousandSeparator);
  };

  const syncRawInputs = (
    fromVal: number,
    toVal: number,
    fromCode: string,
    toCode: string,
  ) => {
    setRawFromInput(formatRawValue(fromVal, fromCode));
    setRawToInput(formatRawValue(toVal, toCode));
  };
  
  const fromDecimals = getDecimals(fromCurrency.code);
  const toDecimals = getDecimals(toCurrency.code);
  const fromPlaceholder = getPlaceholder(fromDecimals, decimalSeparator);
  const toPlaceholder = getPlaceholder(toDecimals, decimalSeparator);

  React.useEffect(() => {
    if (isFromInputFocused.current) {
      return;
    }
    if (fromValue === 0) {
      setRawFromInput("");
    } else {
      const rounded = roundToDecimals(fromValue, fromDecimals);
      const formatted = formatNumber(rounded, fromDecimals, decimalSeparator, thousandSeparator);
      setRawFromInput(formatted);
    }
  }, [fromValue, fromCurrency.code, decimalSeparator, thousandSeparator, fromDecimals]);

  React.useEffect(() => {
    if (isToInputFocused.current) {
      return;
    }
    if (toValue === 0) {
      setRawToInput("");
    } else {
      const rounded = roundToDecimals(toValue, toDecimals);
      const formatted = formatNumber(rounded, toDecimals, decimalSeparator, thousandSeparator);
      setRawToInput(formatted);
    }
  }, [toValue, toCurrency.code, decimalSeparator, thousandSeparator, toDecimals]);

  const handleSwapClick = () => {
    syncRawInputs(toValue, fromValue, toCurrency.code, fromCurrency.code);
    onFromCurrencyChange(toCurrency);
    onToCurrencyChange(fromCurrency);
    onFromValueChange(toValue);
    if (onToValueChange) {
      onToValueChange(fromValue);
    }
  };


  return (
    <div className={CONTAINER_CLASS_NAME}>
      {showSkeleton ? (
        <CurrencyConverterSkeleton />
      ) : (
        <>
          <div
            className="w-full px-3 sm:px-4 responsive-title-wrapper"
            style={{ ...TITLE_WRAPPER_STYLES, textAlign: "justify" }}
          >
            <h2
              ref={titleRefCallback}
              className="font-inter font-medium text-xl sm:text-2xl leading-7 sm:leading-8 tracking-tight-xs text-wl-neutral-950 m-0"
              style={{ ...TITLE_STYLES, textAlign: "justify" }}
            >
              Conversor de moedas
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-2 sm:gap-4 sm:gap-6 w-full">
            <div 
              ref={fromInputContainerRef}
              className="flex flex-row items-center w-full sm:flex-1 min-w-0 h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md relative transition-all overflow-visible" 
              style={{ borderColor: 'rgba(0, 0, 0, 0.35)', borderWidth: '2px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }}
            >
              <input
                type="text"
                inputMode="decimal"
                id="currency-converter-from-input"
                name="fromValue"
              value={rawFromInput}
                onChange={handleInputChange}
                onFocus={() => { isFromInputFocused.current = true; }}
                onBlur={() => { isFromInputFocused.current = false; }}
                placeholder={fromPlaceholder}
                className="font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 min-w-0 w-full sm:flex-1 max-w-[calc(100%-90px)] sm:max-w-none h-5 border-0 outline-none bg-transparent placeholder-wl-neutral-400 pl-1 pr-2"
              />
              <div className="infomoney-cc-dropdown-cell shrink-0 ml-2 relative z-10">
                <CurrencyInputDropdown
              currency={fromCurrency}
              currencies={currencies}
                  onCurrencyChange={onFromCurrencyChange}
            />
              </div>
            </div>

            <div className="flex justify-center sm:justify-start">
              <SwapButtonWeb onClick={() => requestAnimationFrame(handleSwapClick)} />
            </div>

            <div 
              ref={toInputContainerRef}
              className="flex flex-row items-center w-full sm:flex-1 min-w-0 h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md relative transition-all overflow-visible" 
              style={{ borderColor: 'rgba(0, 0, 0, 0.35)', borderWidth: '2px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }}
            >
              {onToValueChange ? (
                <input
                  type="text"
                  inputMode="decimal"
                  id="currency-converter-to-input"
                  name="toValue"
              value={rawToInput}
                  onChange={handleToInputChange}
                  onFocus={() => { isToInputFocused.current = true; }}
                  onBlur={() => { isToInputFocused.current = false; }}
                  placeholder={toPlaceholder}
                  className="font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 min-w-0 w-full sm:flex-1 max-w-[calc(100%-90px)] sm:max-w-none h-5 border-0 outline-none bg-transparent placeholder-wl-neutral-400 pl-1 pr-2"
                />
              ) : (
                <span className="min-w-0 w-full sm:flex-1 max-w-[calc(100%-90px)] sm:max-w-none font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 pl-1 pr-2 block">
                  {rawToInput}
                </span>
              )}
              <div className="infomoney-cc-dropdown-cell shrink-0 ml-2 relative z-10">
                <CurrencyInputDropdown
              currency={toCurrency}
              currencies={currencies}
                  onCurrencyChange={onToCurrencyChange}
            />
          </div>
            </div>
            </div>

          <div className="flex flex-col items-center gap-1 sm:gap-2 w-full" key={`summary-${fromValue}-${toValue}-${fromCurrency.code}-${toCurrency.code}`}>
            <div className="flex flex-row flex-wrap justify-center items-center gap-2 w-full px-2">
              <span className="font-inter font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-7 sm:leading-8 lg:leading-9 xl:leading-10 tracking-tight-md text-wl-neutral-600 text-center whitespace-nowrap" key={`from-${displayFrom}-${fromCurrency.code}`}>
                {fromCurrency.symbol} {displayFrom}
              </span>
              <span className="font-inter font-semibold text-lg sm:text-xl lg:text-2xl leading-6 sm:leading-7 lg:leading-8 tracking-tight-sm text-wl-neutral-600 whitespace-nowrap">
                =
              </span>
              <span className="font-inter font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-7 sm:leading-8 lg:leading-9 xl:leading-10 tracking-tight-md text-wl-neutral-600 text-center whitespace-nowrap" key={`to-${displayTo}-${toCurrency.code}`}>
                {toCurrency.symbol} {displayTo}
              </span>
            </div>
            <p className="font-inter font-normal text-xs leading-4 text-wl-neutral-600 text-center m-0 px-2 whitespace-nowrap">
              1 {fromCurrency.code} = {formatNumber(roundToDecimals(rate, toDecimals), toDecimals, decimalSeparator, thousandSeparator)} {toCurrency.code} em {lastUpdatedLabel}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
