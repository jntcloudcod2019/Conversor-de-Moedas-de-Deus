import React from "react";
import { CurrencyConverterProps, CurrencyConverterData, DEFAULT_CURRENCY_CODES } from "./types";
import { getCurrentDateTime } from "./utils/services";
import { calculateRateFromExchangeRates } from "./utils/calculationsPositionComponents";
import { InputCurrencyDropdown } from "./CurrencyInput";
import { useDeviceService, useSkeletonService } from "./utils/services";
import {
  formatNumber,
  getDecimals,
  parseFormattedNumber,
  sanitizeRawInput,
} from "./utils/currencyCalculators";
import { currencyService } from "./market-data- currency-converter";
import { SwapButtonWeb, SwapButtonMobile } from "./ChevronIcon";

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  fromValue,
  toValue,
  fromCurrency,
  toCurrency,
  rate: propRate,
  currencies: propCurrencies,
  exchangeRates: propExchangeRates,
  device,
  lastUpdated: propLastUpdated,
  onFromValueChange,
  onToValueChange,
  onFromCurrencyChange,
  onToCurrencyChange,
  onSwap,
  converterData,
  currencyCodesToFetch = DEFAULT_CURRENCY_CODES,
}) => {
  const [loadedData, setLoadedData] = React.useState<CurrencyConverterData | null>(null);
  const [hasTriedLoadApi, setHasTriedLoadApi] = React.useState(false);
  const retryTimeoutRef = React.useRef<number | null>(null);
  const debugDelayTimeoutRef = React.useRef<number | null>(null);
  const { isLoading, setIsLoading } = useSkeletonService();
  
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

  const titleRefMobile = React.useRef<HTMLHeadingElement>(null);
  const titleRefWeb = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const CORRECT_TEXT = 'Conversor de moedas';
    
    const protectTitle = (element: HTMLElement | null) => {
      if (!element) return;
      
      // Verifica e corrige o texto se necessário
      if (element.textContent !== CORRECT_TEXT && element.innerText !== CORRECT_TEXT) {
        element.textContent = CORRECT_TEXT;
      }
    };

    // Monitora e protege contra modificações
    const observeAndProtect = (element: HTMLElement | null) => {
      if (!element) return null;
      
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' || mutation.type === 'characterData') {
            const currentText = element.textContent || '';
            if (currentText !== CORRECT_TEXT) {
              element.textContent = CORRECT_TEXT;
            }
          }
        });
      });

      observer.observe(element, {
        childList: true,
        characterData: true,
        subtree: true,
      });

      return observer;
    };

    // Protege ambos os títulos
    protectTitle(titleRefMobile.current);
    protectTitle(titleRefWeb.current);
    
    const observerMobile = observeAndProtect(titleRefMobile.current);
    const observerWeb = observeAndProtect(titleRefWeb.current);

    // Verifica periodicamente (fallback caso o observer não capture)
    const intervalId = setInterval(() => {
      protectTitle(titleRefMobile.current);
      protectTitle(titleRefWeb.current);
    }, 100);

    return () => {
      observerMobile?.disconnect();
      observerWeb?.disconnect();
      clearInterval(intervalId);
    };
  }, [isLoading]);

  React.useLayoutEffect(() => {
    // #region agent log: useLayoutEffect entry
    fetch('http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CurrencyConverter.tsx:useLayoutEffect',message:'useLayoutEffect ENTRY',data:{hasConverterData:!!converterData,hasLoadedData:!!loadedData,hasTriedLoadApi,currencyCodesToFetchLength:currencyCodesToFetch.length,note:'Entrada do useLayoutEffect'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'SKELETON-FLOW'})}).catch(()=>{});
    // #endregion

    // FORÇA skeleton por 1.5s para teste (mesmo se tiver converterData)
    setIsLoading(true);
    
    // #region agent log: Skeleton - forcing loading state for test
    fetch('http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CurrencyConverter.tsx:useLayoutEffect',message:'Skeleton - forcing loading state for test',data:{isLoading:true,hasConverterData:!!converterData,hasLoadedData:!!loadedData,currencyCodesToFetch,note:'FORÇANDO isLoading=true por 1.5s para testar skeleton'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'SKELETON-LOAD'})}).catch(()=>{});
    // #endregion
    
    // Delay para testar skeleton (1.5 segundos) - SEMPRE executa para testar
    debugDelayTimeoutRef.current = window.setTimeout(() => {
      // #region agent log: Skeleton - delay ended, hiding skeleton
      fetch('http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CurrencyConverter.tsx:useLayoutEffect',message:'Skeleton - delay ended, hiding skeleton',data:{delay:1500,hasConverterData:!!converterData,hasLoadedData:!!loadedData,note:'Delay de 1.5s terminou, escondendo skeleton'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'SKELETON-DELAY'})}).catch(()=>{});
      // #endregion
      
      // Após o delay, verifica os dados normalmente
      if (converterData) {
        setIsLoading(false);
        if (retryTimeoutRef.current) {
          clearTimeout(retryTimeoutRef.current);
          retryTimeoutRef.current = null;
        }
        return;
      }
      if (loadedData) {
        setIsLoading(false);
        if (retryTimeoutRef.current) {
          clearTimeout(retryTimeoutRef.current);
          retryTimeoutRef.current = null;
        }
        return;
      }
      if (currencyCodesToFetch.length === 0) {
        setIsLoading(false);
        return;
      }
      if (hasTriedLoadApi) {
        setIsLoading(false);
        return;
      }

      setHasTriedLoadApi(true);
      
      currencyService
        .getCurrencyConverterData([...currencyCodesToFetch], 'USD')
        .then((data: CurrencyConverterData | null) => {
          // #region agent log: Skeleton - API success, hiding skeleton
          fetch('http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CurrencyConverter.tsx:useLayoutEffect',message:'Skeleton - API success, hiding skeleton',data:{hasData:!!data,note:'API retornou dados, escondendo skeleton'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'SKELETON-API'})}).catch(()=>{});
          // #endregion
          setIsLoading(false);
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
    }, 1500);

    return () => {
      if (debugDelayTimeoutRef.current) {
        clearTimeout(debugDelayTimeoutRef.current);
        debugDelayTimeoutRef.current = null;
      }
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

  const deviceService = useDeviceService(device);
  const { device: detectedDevice } = deviceService;
  
  const isMobile = device === "mobile" 
    ? true 
    : device === "web" 
    ? false 
    : detectedDevice === "mobile";
  

  const isFromInputFocused = React.useRef(false);
  const isToInputFocused = React.useRef(false);
  
  const fromInputContainerRefMobile = React.useRef<HTMLDivElement>(null);
  const toInputContainerRefMobile = React.useRef<HTMLDivElement>(null);
  const fromInputContainerRefWeb = React.useRef<HTMLDivElement>(null);
  const toInputContainerRefWeb = React.useRef<HTMLDivElement>(null);
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
  
  const currentFromNumeric = fromValue;
  const currentToNumeric = toValue;
  
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
    const currentHasFromRaw = rawFromInput.trim() !== "";
    const currentHasToRaw = rawToInput.trim() !== "";
    
    syncRawInputs(toValue, fromValue, toCurrency.code, fromCurrency.code);
    
    if (onSwap) {
      onSwap({
        fromValue: currentFromNumeric,
        toValue: currentToNumeric,
        hasFromInput: currentHasFromRaw,
        hasToInput: currentHasToRaw,
      });
    }
  };

  // Componente SkeletonElement com animação
  const SkeletonElement: React.FC<{ 
    width?: string | number; 
    height?: string | number; 
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular';
  }> = ({ width = '100%', height = '1rem', className = '', variant = 'rectangular' }) => {
    const style: React.CSSProperties = {
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      borderRadius: variant === 'circular' ? '50%' : variant === 'text' ? '4px' : '8px',
    };

    const variantClasses = {
      text: 'rounded',
      circular: 'rounded-full',
      rectangular: 'rounded-lg',
    };

    return (
      <div 
        role="status" 
        aria-label="Carregando..."
        className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${variantClasses[variant]} ${className}`}
        style={style}
      />
    );
  };

  
  const containerClassName = isMobile
    ? "flex flex-col gap-5 bg-white border-2 border-wl-neutral-200 rounded-2xl shadow-lg w-full max-w-md mx-auto p-4 sm:p-6 overflow-visible"
    : "flex flex-col gap-5 bg-white border-2 border-wl-neutral-200 rounded-2xl shadow-lg w-full max-w-6xl mx-auto p-4 sm:p-6 overflow-visible";
  
  const containerStyle: React.CSSProperties = {
    borderColor: 'rgba(0, 0, 0, 0.35)',
    borderWidth: '2px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  };

  // #region agent log: Skeleton render decision and DOM verification
  React.useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CurrencyConverter.tsx:render',message:'Skeleton render decision',data:{isLoading,isMobile,hasConverterData:!!converterData,hasLoadedData:!!loadedData,willShowSkeleton:isLoading,note:'Decisão de renderização: skeleton ou conteúdo real'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'SKELETON-RENDER'})}).catch(()=>{});
    
    // Verifica se os elementos skeleton estão no DOM
    if (isLoading) {
      setTimeout(() => {
        const skeletonElements = document.querySelectorAll('[role="status"][aria-label="Carregando..."]');
        fetch('http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CurrencyConverter.tsx:render',message:'Skeleton DOM verification',data:{skeletonElementsCount:skeletonElements.length,isLoading,isMobile,note:'Verificando se elementos skeleton estão no DOM'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'SKELETON-DOM'})}).catch(()=>{});
      }, 100);
    }
  }, [isLoading, isMobile, converterData, loadedData]);
  // #endregion

  return (
    <div className={containerClassName} style={containerStyle}>
      {/* Se estiver carregando (skeleton service), mostra o skeleton */}
      {isLoading ? (
        <>
          {(() => {
            // #region agent log: Skeleton mobile render
            fetch('http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CurrencyConverter.tsx:render-skeleton-mobile',message:'Skeleton mobile render',data:{isLoading,isMobile,note:'Renderizando skeleton versão mobile'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'SKELETON-MOBILE'})}).catch(()=>{});
            // #endregion
            return null;
          })()}
          {isMobile ? (
            <>
              {/* Skeleton Título */}
              <div className="w-full px-3 sm:px-4">
                <SkeletonElement variant="text" width="60%" height="28px" />
              </div>
              
              <div className="flex flex-col items-center gap-2 w-full">
                {/* Skeleton Input FROM */}
                <div className="flex flex-row items-center gap-2 w-full h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md" style={{ borderColor: 'rgba(0, 0, 0, 0.35)', borderWidth: '2px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }}>
                  <SkeletonElement variant="text" width="45%" height="20px" />
                  <div className="flex items-center gap-1 ml-auto">
                    <SkeletonElement variant="circular" width={24} height={24} />
                    <SkeletonElement variant="text" width="35px" height="18px" />
                    <SkeletonElement variant="text" width="10px" height="10px" />
                  </div>
                </div>
                
                {/* Skeleton Swap Button */}
                <SkeletonElement variant="rectangular" width={48} height={48} className="rounded-full" />
                
                {/* Skeleton Input TO */}
                <div className="flex flex-row items-center gap-2 w-full h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md" style={{ borderColor: 'rgba(0, 0, 0, 0.35)', borderWidth: '2px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }}>
                  <SkeletonElement variant="text" width="45%" height="20px" />
                  <div className="flex items-center gap-1 ml-auto">
                    <SkeletonElement variant="circular" width={24} height={24} />
                    <SkeletonElement variant="text" width="35px" height="18px" />
                    <SkeletonElement variant="text" width="10px" height="10px" />
                  </div>
                </div>
                
                {/* Skeleton Summary */}
                <div className="flex flex-col items-center gap-1 w-full mt-2">
                  <SkeletonElement variant="text" width="75%" height="16px" />
                  <SkeletonElement variant="text" width="65%" height="14px" />
                </div>
              </div>
            </>
          ) : (
            <>
              {(() => {
                // #region agent log: Skeleton web render
                fetch('http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CurrencyConverter.tsx:render-skeleton-web',message:'Skeleton web render',data:{isLoading,isMobile,note:'Renderizando skeleton versão web'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'SKELETON-WEB'})}).catch(()=>{});
                // #endregion
                return null;
              })()}
              {/* Skeleton Título */}
              <div 
                className="w-full px-3 sm:px-4" 
                style={{ ...titleWrapperStyles, textAlign: 'justify' }}
              >
                <SkeletonElement variant="text" width="40%" height="28px" />
              </div>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full">
                {/* Skeleton Input FROM */}
                <div className="flex flex-row items-center flex-1 min-w-0 h-11 px-4 py-3 bg-white border-2 rounded-2xl shadow-md transition-all overflow-hidden" style={{ borderColor: 'rgba(0, 0, 0, 0.35)', borderWidth: '2px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }}>
                  <SkeletonElement variant="text" width="55%" height="20px" />
                  <div className="flex items-center gap-1 ml-auto shrink-0">
                    <SkeletonElement variant="circular" width={24} height={24} />
                    <SkeletonElement variant="text" width="35px" height="18px" />
                    <SkeletonElement variant="text" width="10px" height="10px" />
                  </div>
                </div>
                
                {/* Skeleton Swap Button */}
                <div className="flex justify-center sm:justify-start">
                  <SkeletonElement variant="rectangular" width={48} height={48} className="rounded-full" />
                </div>
                
                {/* Skeleton Input TO */}
                <div className="flex flex-row items-center flex-1 min-w-0 h-11 px-4 py-3 bg-white border-2 rounded-2xl shadow-md transition-all overflow-hidden" style={{ borderColor: 'rgba(0, 0, 0, 0.35)', borderWidth: '2px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }}>
                  <SkeletonElement variant="text" width="55%" height="20px" />
                  <div className="flex items-center gap-1 ml-auto shrink-0">
                    <SkeletonElement variant="circular" width={24} height={24} />
                    <SkeletonElement variant="text" width="35px" height="18px" />
                    <SkeletonElement variant="text" width="10px" height="10px" />
                  </div>
                </div>
              </div>
              
              {/* Skeleton Summary */}
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="flex flex-row flex-wrap justify-center items-center gap-2 w-full px-2">
                  <SkeletonElement variant="text" width="130px" height="44px" className="sm:h-12 lg:h-16" />
                  <SkeletonElement variant="text" width="24px" height="36px" className="sm:h-8" />
                  <SkeletonElement variant="text" width="130px" height="44px" className="sm:h-12 lg:h-16" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <SkeletonElement variant="text" width="65%" height="16px" />
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {/* Conteúdo principal do componente */}
          {isMobile ? (
            <>
              <div 
                className="w-full px-3 sm:px-4" 
                style={{ ...titleWrapperStyles, textAlign: 'justify' }}
              >
                <h2 
                  ref={titleRefMobile}
                  className="font-inter font-medium text-xl leading-7 tracking-tight-xs text-wl-neutral-950 m-0"
                  style={{ ...titleStyles, textAlign: 'justify' }}
                >
                  Conversor de moedas
                </h2>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                {/* Input FROM */}
                <div 
                  ref={fromInputContainerRefMobile}
                  className="flex flex-row items-center gap-2 w-full h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md relative transition-all overflow-hidden" 
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
                    className="font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 min-w-0 w-full max-w-[calc(100%-90px)] h-5 border-0 outline-none bg-transparent placeholder-wl-neutral-400"
                  />
                  <InputCurrencyDropdown
                    currency={fromCurrency}
                    currencies={currencies}
                    onCurrencyChange={onFromCurrencyChange}
                    exchangeRates={exchangeRates}
                  />
                </div>

                <SwapButtonMobile onClick={handleSwapClick} />

                {/* Input TO */}
                <div 
                  ref={toInputContainerRefMobile}
                  className="flex flex-row items-center gap-2 w-full h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md relative transition-all overflow-hidden" 
                  style={{ borderColor: 'rgba(0, 0, 0, 0.35)', borderWidth: '2px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }}
                >
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
                    className="font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 min-w-0 w-full max-w-[calc(100%-90px)] h-5 border-0 outline-none bg-transparent placeholder-wl-neutral-400"
                  />
                  <InputCurrencyDropdown
                    currency={toCurrency}
                    currencies={currencies}
                    onCurrencyChange={onToCurrencyChange}
                    exchangeRates={exchangeRates}
                  />
                </div>

                {/* Rodapé dinâmico: valores atuais e cotação */}
                <div className="flex flex-col items-center gap-1 w-full" key={`summary-mobile-${fromValue}-${toValue}-${fromCurrency.code}-${toCurrency.code}`}>
                  <p className="font-inter font-semibold text-xs leading-4 text-wl-neutral-700 text-center m-0 px-2" key={`summary-text-${displayFrom}-${displayTo}`}>
                    {fromCurrency.symbol} {displayFrom} = {toCurrency.symbol} {displayTo}
                  </p>
                  <p className="font-inter font-normal text-xs leading-4 text-wl-neutral-600 text-center m-0 px-2 whitespace-nowrap">
                    1 {fromCurrency.code} = {rate.toFixed(2)} {toCurrency.code} em {lastUpdatedLabel}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div 
                className="w-full px-3 sm:px-4" 
                style={{ ...titleWrapperStyles, textAlign: 'justify' }}
              >
                <h2 
                  ref={titleRefWeb}
                  className="font-inter font-medium text-xl leading-7 tracking-tight-xs text-wl-neutral-950 m-0"
                  style={{ ...titleStyles, textAlign: 'justify' }}
                >
                  Conversor de moedas
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full">
                {/* Input FROM */}
                <div 
                  ref={fromInputContainerRefWeb}
                  className="flex flex-row items-center flex-1 min-w-0 h-11 px-4 py-3 bg-white border-2 rounded-2xl shadow-md transition-all overflow-hidden" 
                  style={{ borderColor: 'rgba(0, 0, 0, 0.35)', borderWidth: '2px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }}
                >
                  <input
                    type="text"
                    inputMode="decimal"
                    id="currency-converter-from-input-web"
                    name="fromValue"
                    value={rawFromInput}
                    onChange={handleInputChange}
                    onFocus={() => { isFromInputFocused.current = true; }}
                    onBlur={() => { isFromInputFocused.current = false; }}
                    placeholder="0,00"
                    className="font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 min-w-0 flex-1 h-5 border-0 outline-none bg-transparent placeholder-wl-neutral-400"
                  />
                  <div className="shrink-0 ml-2">
                    <InputCurrencyDropdown
                      currency={fromCurrency}
                      currencies={currencies}
                      onCurrencyChange={onFromCurrencyChange}
                      exchangeRates={exchangeRates}
                    />
                  </div>
                </div>

                <div className="flex justify-center sm:justify-start">
                  <SwapButtonWeb onClick={handleSwapClick} />
                </div>

                {/* Input TO */}
                <div 
                  ref={toInputContainerRefWeb}
                  className="flex flex-row items-center flex-1 min-w-0 h-11 px-4 py-3 bg-white border-2 rounded-2xl shadow-md transition-all overflow-hidden" 
                  style={{ borderColor: 'rgba(0, 0, 0, 0.35)', borderWidth: '2px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }}
                >
                  {onToValueChange ? (
                    <input
                      type="text"
                      inputMode="decimal"
                      id="currency-converter-to-input-web"
                      name="toValue"
                      value={rawToInput}
                      onChange={handleToInputChange}
                      onFocus={() => { isToInputFocused.current = true; }}
                      onBlur={() => { isToInputFocused.current = false; }}
                      placeholder="0,00"
                      className="font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 min-w-0 flex-1 h-5 border-0 outline-none bg-transparent placeholder-wl-neutral-400"
                    />
                  ) : (
                    <span className="min-w-0 flex-1 font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600">
                      {rawToInput}
                    </span>
                  )}
                  <div className="shrink-0 ml-2">
                    <InputCurrencyDropdown
                      currency={toCurrency}
                      currencies={currencies}
                      onCurrencyChange={onToCurrencyChange}
                      exchangeRates={exchangeRates}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 w-full" key={`summary-${fromValue}-${toValue}-${fromCurrency.code}-${toCurrency.code}`}>
                {/* Linha de resumo: "R$ X = $ Y" */}
                <div className="flex flex-row flex-wrap justify-center items-center gap-2 w-full px-2">
                  <span className="font-inter font-bold text-2xl sm:text-3xl lg:text-4xl leading-8 sm:leading-9 lg:leading-10 tracking-tight-md text-wl-neutral-600 text-center whitespace-nowrap" key={`from-${displayFrom}-${fromCurrency.code}`}>
                    {fromCurrency.symbol} {displayFrom}
                  </span>
                  <span className="font-inter font-semibold text-xl sm:text-2xl leading-7 sm:leading-8 tracking-tight-sm text-wl-neutral-600 whitespace-nowrap">
                    =
                  </span>
                  <span className="font-inter font-bold text-2xl sm:text-3xl lg:text-4xl leading-8 sm:leading-9 lg:leading-10 tracking-tight-md text-wl-neutral-600 text-center whitespace-nowrap" key={`to-${displayTo}-${toCurrency.code}`}>
                    {toCurrency.symbol} {displayTo}
                  </span>
                </div>
                {/* Taxa de câmbio base e data de atualização */}
                <div className="flex flex-col gap-1 w-full">
                  <p className="font-inter font-normal text-xs leading-4 text-wl-neutral-600 text-center m-0 px-2 whitespace-nowrap">
                    1 {fromCurrency.code} = {rate.toFixed(2)} {toCurrency.code} em {lastUpdatedLabel}
                  </p>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
