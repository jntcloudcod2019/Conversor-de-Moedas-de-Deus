import React from "react";
import { CurrencyConverterProps, CurrencyConverterData, DEFAULT_CURRENCY_CODES } from "./types";
import { getCurrentDateTime } from "./utils/dateUtils";
import { calculateRateFromExchangeRates } from "./utils/calculationsPositionComponents";
import { CurrencyInputDropdown } from "./CurrencyInput";
import {
  formatNumber,
  getDecimals,
  parseFormattedNumber,
  sanitizeRawInput,
} from "./utils/currencyCalculators";
import { currencyService } from "./market-data- currency-converter";
import { SwapButtonWeb } from "./ChevronIcon";
import CurrencyConverterSkeleton from "./components/Skeleton/CurrencyConverterSkeleton";

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
}) => {
  const [loadedData, setLoadedData] = React.useState<CurrencyConverterData | null>(null);
  const [hasTriedLoadApi, setHasTriedLoadApi] = React.useState(false);
  const retryTimeoutRef = React.useRef<number | null>(null);
  const [showSkeleton, setShowSkeleton] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  
  // Estilos inline para prevenir truncamento - aplicados diretamente no JSX, sem timeouts
  const titleStyles: React.CSSProperties = {
    overflow: 'visible',
    textOverflow: 'clip',
    whiteSpace: 'normal',
    wordBreak: 'normal',
    maxWidth: 'none',
    width: '100%',
    display: 'block',
  };

  const titleWrapperStyles: React.CSSProperties = {
    overflow: 'visible',
    maxWidth: 'none',
    width: '100%',
  };

  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const titleWrapperRef = React.useRef<HTMLDivElement>(null);
  const protectionIntervalRef = React.useRef<number | null>(null);
  const observerRef = React.useRef<MutationObserver | null>(null);

  // Função para proteger o título
  const protectTitle = React.useCallback(() => {
    if (titleRef.current && titleRef.current.textContent !== 'Conversor de moedas') {
      titleRef.current.textContent = 'Conversor de moedas';
    }
  }, []);

  // Callback ref que é chamado quando o elemento é montado
  const titleRefCallback = React.useCallback((element: HTMLHeadingElement | null) => {
    titleRef.current = element;
    
    if (element) {
      element.textContent = 'Conversor de moedas';
      
      // Configura MutationObserver quando o elemento é montado
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' || mutation.type === 'characterData') {
            protectTitle();
          }
        });
      });

      observer.observe(element, {
        childList: true,
        subtree: true,
        characterData: true,
        characterDataOldValue: true,
      });
      
      observerRef.current = observer;

      // Fallback: verificação periódica a cada 500ms
      if (protectionIntervalRef.current) {
        clearInterval(protectionIntervalRef.current);
      }
      protectionIntervalRef.current = window.setInterval(protectTitle, 500);
    } else {
      // Elemento desmontado - limpa observers
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (protectionIntervalRef.current) {
        clearInterval(protectionIntervalRef.current);
        protectionIntervalRef.current = null;
      }
    }
  }, [protectTitle]);

  // Cleanup ao desmontar
  React.useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (protectionIntervalRef.current) {
        clearInterval(protectionIntervalRef.current);
      }
    };
  }, []);

  React.useLayoutEffect(() => {
    if (converterData) {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
        retryTimeoutRef.current = null;
      }
      return;
    }
    if (loadedData) {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
        retryTimeoutRef.current = null;
      }
      return;
    }
    if (currencyCodesToFetch.length === 0) {
      return;
    }
    if (hasTriedLoadApi) {
      return;
    }

    setHasTriedLoadApi(true);
    
    currencyService
      .getCurrencyConverterData([...currencyCodesToFetch], 'USD')
      .then((data: CurrencyConverterData | null) => {
        if (data) setLoadedData(data);
        if (retryTimeoutRef.current) {
          clearTimeout(retryTimeoutRef.current);
          retryTimeoutRef.current = null;
        }
      })
      .catch(() => {
        setHasTriedLoadApi(false);
        retryTimeoutRef.current = window.setTimeout(() => {
          setHasTriedLoadApi(false);
        }, 3000);
      });

    return () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
        retryTimeoutRef.current = null;
      }
    };
  }, [converterData, loadedData, currencyCodesToFetch, hasTriedLoadApi]);

  const currencies = converterData?.currencies ?? loadedData?.currencies ?? propCurrencies;
  const exchangeRates = converterData?.exchangeRates ?? loadedData?.exchangeRates ?? propExchangeRates;
  const lastUpdated = converterData?.lastUpdated ?? loadedData?.lastUpdated ?? propLastUpdated;

  const locale = navigator.language || "pt-BR";
  const isPortugueseBR = locale.startsWith("pt");
  const decimalSeparator = isPortugueseBR ? "," : ".";
  const thousandSeparator = isPortugueseBR ? "." : ",";

  const [rawFromInput, setRawFromInput] = React.useState("");
  const [rawToInput, setRawToInput] = React.useState("");
  const [rate, setRate] = React.useState<number>(propRate ?? 1);

  const displayFrom = React.useMemo(
    () => formatNumber(fromValue, getDecimals(fromCurrency.code), decimalSeparator, thousandSeparator),
    [fromValue, fromCurrency.code, decimalSeparator, thousandSeparator]
  );
  
  const displayTo = React.useMemo(
    () => formatNumber(toValue, getDecimals(toCurrency.code), decimalSeparator, thousandSeparator),
    [toValue, toCurrency.code, decimalSeparator, thousandSeparator]
  );
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
      return;
    }

    const numeric = parseFormattedNumber(
      raw,
      decimals,
      decimalSeparator,
    );
    
    if (Number.isNaN(numeric)) {
      onToValueChange(0);
      return;
    }

    onToValueChange(numeric);
  };

  const isFromInputFocused = React.useRef(false);
  const isToInputFocused = React.useRef(false);
  
  const fromInputContainerRef = React.useRef<HTMLDivElement>(null);
  const toInputContainerRef = React.useRef<HTMLDivElement>(null);
  const formatRawValue = (value: number, code: string): string => {
    if (value === 0) return "";
    return formatNumber(
      value,
      getDecimals(code),
      decimalSeparator,
      thousandSeparator,
    );
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
  
  React.useEffect(() => {
    if (isFromInputFocused.current) {
      return;
    }
    if (fromValue === 0) {
      setRawFromInput("");
    } else {
      const formatted = formatNumber(fromValue, getDecimals(fromCurrency.code), decimalSeparator, thousandSeparator);
      setRawFromInput(formatted);
    }
  }, [fromValue, fromCurrency.code, decimalSeparator, thousandSeparator]);

  React.useEffect(() => {
    if (isToInputFocused.current) {
      return;
    }
    if (toValue === 0) {
      setRawToInput("");
    } else {
      const formatted = formatNumber(toValue, getDecimals(toCurrency.code), decimalSeparator, thousandSeparator);
      setRawToInput(formatted);
    }
  }, [toValue, toCurrency.code, decimalSeparator, thousandSeparator]);

  const handleSwapClick = () => {
    syncRawInputs(toValue, fromValue, toCurrency.code, fromCurrency.code);
    onFromCurrencyChange(toCurrency);
    onToCurrencyChange(fromCurrency);
    onFromValueChange(toValue);
    if (onToValueChange) {
      onToValueChange(fromValue);
    }
  };


  const containerClassName = "flex flex-col gap-5 bg-white border-2 border-wl-neutral-200 rounded-2xl shadow-lg w-full max-w-md sm:max-w-6xl mx-auto p-4 sm:p-6 overflow-visible";

  return (
    <div className={containerClassName}>
      {showSkeleton ? (
        <CurrencyConverterSkeleton />
      ) : (
        <>
          <div 
            ref={titleWrapperRef}
            className="w-full px-3 sm:px-4 responsive-title-wrapper"
            style={{ ...titleWrapperStyles, textAlign: 'justify' }}
          >
            <h2 
              ref={titleRefCallback}
              className="font-inter font-medium text-xl sm:text-2xl leading-7 sm:leading-8 tracking-tight-xs text-wl-neutral-950 m-0"
              style={{ ...titleStyles, textAlign: 'justify' }}
            >
              Conversor de moedas
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-2 sm:gap-4 sm:gap-6 w-full">
            <div 
              ref={fromInputContainerRef}
              className="flex flex-row items-center w-full sm:flex-1 min-w-0 h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md relative transition-all overflow-hidden" 
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
                placeholder="0,00"
                className="font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 min-w-0 w-full sm:flex-1 max-w-[calc(100%-90px)] sm:max-w-none h-5 border-0 outline-none bg-transparent placeholder-wl-neutral-400"
              />
              <div className="shrink-0 ml-2">
                <CurrencyInputDropdown
                  currency={fromCurrency}
                  currencies={currencies}
                  onCurrencyChange={onFromCurrencyChange}
                />
              </div>
            </div>

            <div className="flex justify-center sm:justify-start">
              <SwapButtonWeb onClick={handleSwapClick} />
            </div>

            <div 
              ref={toInputContainerRef}
              className="flex flex-row items-center w-full sm:flex-1 min-w-0 h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md relative transition-all overflow-hidden" 
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
                  placeholder="0,00"
                  className="font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 min-w-0 w-full sm:flex-1 max-w-[calc(100%-90px)] sm:max-w-none h-5 border-0 outline-none bg-transparent placeholder-wl-neutral-400"
                />
              ) : (
                <span className="min-w-0 w-full sm:flex-1 max-w-[calc(100%-90px)] sm:max-w-none font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600">
                  {rawToInput}
                </span>
              )}
              <div className="shrink-0 ml-2">
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
              1 {fromCurrency.code} = {rate.toFixed(2)} {toCurrency.code} em {lastUpdatedLabel}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
