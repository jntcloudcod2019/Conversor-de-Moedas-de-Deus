import React from "react";
import { CurrencyConverterProps } from "./types";
import { getCurrentDateTime } from "./dateUtils";
import { InputCurrencyDropdown } from "./input-currency-dropdown/InputcurrencyDropdown";
import { useDeviceService, useSkeletonService } from "./utils/services";
import {
  formatNumber,
  getDecimals,
  parseFormattedNumber,
  sanitizeRawInput,
} from "./calculators/currencyCalculators";

// Ícone de setas bidirecionais - Versão Web (seta esquerda em cima, seta direita embaixo)
const SwapIconWeb: React.FC = () => (
  <svg
    width={50}
    height={50}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Círculo de fundo azul */}
    <circle cx="24" cy="24" r="24" fill="#007bff" />
    {/* Linha horizontal superior com seta apontando para esquerda */}
    <line x1="18" y1="18" x2="30" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M20 16 L18 18 L20 20"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Linha horizontal inferior com seta apontando para direita */}
    <line x1="18" y1="30" x2="30" y2="30" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M28 28 L30 30 L28 32"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Ícone de setas bidirecionais - Versão Mobile (setas HORIZONTAIS - idêntico ao Web)
const SwapIconMobile: React.FC = () => (
  <svg
    width={50}
    height={50}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: 'none' }}
  >
    {/* Círculo de fundo azul */}
    <circle cx="24" cy="24" r="24" fill="#007bff" />
    {/* Linha horizontal superior com seta apontando para esquerda */}
    <line x1="18" y1="18" x2="30" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M20 16 L18 18 L20 20"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Linha horizontal inferior com seta apontando para direita */}
    <line x1="18" y1="30" x2="30" y2="30" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M28 28 L30 30 L28 32"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Botão Swap para Web - usa ícone horizontal
const SwapButtonWeb: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    title="Trocar moedas"
    className="inline-flex items-center justify-center p-0 m-0 bg-transparent border-0 outline-none appearance-none cursor-pointer"
    style={{
      width: 50,
      height: 50,
      boxShadow: 'none',
      background: 'transparent',
      border: 'none',
      padding: 0,
      margin: 0,
    }}
    aria-label="Trocar moedas"
  >
    <SwapIconWeb />
  </button>
);

// Botão Swap para Mobile - usa ícone horizontal (sem rotação)
const SwapButtonMobile: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    title="Trocar moedas"
    className="inline-flex items-center justify-center p-0 m-0 bg-transparent border-0 outline-none appearance-none cursor-pointer"
    style={{
      width: 50,
      height: 50,
      transform: 'none',
      boxShadow: 'none',
      background: 'transparent',
      border: 'none',
      padding: 0,
      margin: 0,
    }}
    aria-label="Trocar moedas"
  >
    <SwapIconMobile />
  </button>
);

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  fromValue,
  toValue,
  fromCurrency,
  toCurrency,
  rate: propRate,
  currencies: propCurrencies,
  exchangeRates: propExchangeRates,
  device = "web",
  lastUpdated: propLastUpdated,
  onFromValueChange,
  onToValueChange,
  onFromCurrencyChange,
  onToCurrencyChange,
  onSwap,
  converterData,
}) => {
  // Se converterData foi fornecido (objeto do AutoMapper), usa seus dados
  const currencies = converterData?.currencies ?? propCurrencies;
  const exchangeRates = converterData?.exchangeRates ?? propExchangeRates;
  const lastUpdated = converterData?.lastUpdated ?? propLastUpdated;
  
  // Calcula rate a partir de exchangeRates se não foi fornecido diretamente
  const rate = propRate ?? (exchangeRates ? 
    (exchangeRates[toCurrency.code] ?? 1) / (exchangeRates[fromCurrency.code] ?? 1) : 
    1
  );
  
  const lastUpdatedLabel = lastUpdated ?? getCurrentDateTime();
  const locale = navigator.language || "pt-BR";
  const isPortugueseBR = locale.startsWith("pt");
  const decimalSeparator = isPortugueseBR ? "," : ".";
  const thousandSeparator = isPortugueseBR ? "." : ",";
  
  // Estado local para controlar o texto dos inputs
  const [rawFromInput, setRawFromInput] = React.useState("");
  const [rawToInput, setRawToInput] = React.useState("");
  
  // Handler robusto (não trava ao apagar)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const decimals = getDecimals(fromCurrency.code);
    const raw = sanitizeRawInput(
      e.target.value,
      decimals,
      decimalSeparator,
    );


    // Sempre reflete o texto digitado
    setRawFromInput(raw);

    // Se vazio ou só separador, zera
    if (raw.trim() === "" || raw === decimalSeparator) {
      
      onFromValueChange(0);
      return;
    }

    const numeric = parseFormattedNumber(
      raw,
      decimals,
      decimalSeparator,
    );
    
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

  // Serviço para detectar device automaticamente
  const { isMobile: detectedIsMobile } = useDeviceService(device);
  
  // Se device for especificado manualmente via props, usa ele, senão usa o serviço
  const isMobile = device === "mobile" 
    ? true 
    : device === "web" 
    ? false 
    : detectedIsMobile;

  // Serviço para skeleton/loading
  const { isLoading, setIsLoading } = useSkeletonService();
  const skeletonTimeoutRef = React.useRef<number | null>(null);

  // Proteção do título contra truncamento
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
  
  // Inicializa com skeleton SEMPRE na primeira renderização (força por 2.5s)
  React.useLayoutEffect(() => {
    // FORÇA skeleton por 2.5s (mesmo se tiver converterData)
    setIsLoading(true);
    
    // Limpa timeout anterior se existir
    if (skeletonTimeoutRef.current) {
      clearTimeout(skeletonTimeoutRef.current);
      skeletonTimeoutRef.current = null;
    }
    
    // Delay de 2.5 segundos - SEMPRE executa
    skeletonTimeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);
      skeletonTimeoutRef.current = null;
    }, 2500);

    return () => {
      if (skeletonTimeoutRef.current) {
        clearTimeout(skeletonTimeoutRef.current);
        skeletonTimeoutRef.current = null;
      }
    };
  }, []); // Executa apenas uma vez na montagem

  const isFromInputFocused = React.useRef(false);
  const isToInputFocused = React.useRef(false);
  
  const fromInputContainerRefMobile = React.useRef<HTMLDivElement>(null);
  const toInputContainerRefMobile = React.useRef<HTMLDivElement>(null);
  const fromInputContainerRefWeb = React.useRef<HTMLDivElement>(null);
  const toInputContainerRefWeb = React.useRef<HTMLDivElement>(null);

  // Sumário e payload baseados diretamente nos valores numéricos vindos do App
  const hasFromRaw = rawFromInput.trim() !== "";
  const hasToRaw = rawToInput.trim() !== "";
  const currentFromNumeric = fromValue;
  const currentToNumeric = toValue;
  
  // Calcula displayFrom e displayTo diretamente no render para garantir atualização em tempo real
  const displayFrom = formatNumber(
    fromValue,
    getDecimals(fromCurrency.code),
    decimalSeparator,
    thousandSeparator,
  );
  
  const displayTo = formatNumber(
    toValue,
    getDecimals(toCurrency.code),
    decimalSeparator,
    thousandSeparator,
  );

  // Sincroniza rawInputs quando valores mudam externamente (swap, etc)
  React.useEffect(() => {
    if (!isFromInputFocused.current) {
      if (fromValue === 0) {
        setRawFromInput("");
      } else {
        const formatted = formatNumber(
          fromValue,
          getDecimals(fromCurrency.code),
          decimalSeparator,
          thousandSeparator,
        );
        setRawFromInput(formatted);
      }
    }
  }, [fromValue, fromCurrency.code, decimalSeparator, thousandSeparator]);

  React.useEffect(() => {
    if (!isToInputFocused.current) {
      if (toValue === 0) {
        setRawToInput("");
      } else {
        const formatted = formatNumber(
          toValue,
          getDecimals(toCurrency.code),
          decimalSeparator,
          thousandSeparator,
        );
        setRawToInput(formatted);
      }
    }
  }, [toValue, toCurrency.code, decimalSeparator, thousandSeparator]);


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

  const handleSwapClick = () => {
    const payload = {
      fromValue: currentFromNumeric,
      toValue: currentToNumeric,
      hasFromInput: hasFromRaw,
      hasToInput: hasToRaw,
    };
    
    syncRawInputs(
      payload.toValue,
      payload.fromValue,
      toCurrency.code,
      fromCurrency.code,
    );
    onSwap(payload);
  };

  // Estilos inline para prevenir truncamento - aplicados diretamente no JSX, sem timeouts
  const titleStyles: React.CSSProperties = {
    overflow: 'visible',
    wordBreak: 'normal',
    textOverflow: 'clip',
    whiteSpace: 'normal',
    hyphens: 'none',
    textWrap: 'wrap',
    display: 'block',
  };

  const titleWrapperStyles: React.CSSProperties = {
    overflow: 'visible',
    maxWidth: 'none',
    width: '100%',
  };

  const titleRefMobile = React.useRef<HTMLHeadingElement>(null);
  const titleRefWeb = React.useRef<HTMLHeadingElement>(null);

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
    : "flex flex-col gap-5 bg-white border-2 border-wl-neutral-200 rounded-2xl shadow-lg w-full max-w-4xl mx-auto p-4 sm:p-6 overflow-visible";
  
  const containerStyle: React.CSSProperties = {
    borderColor: 'rgba(0, 0, 0, 0.35)',
    borderWidth: '2px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    // Garantir max-width via inline style para versão web (sobrescreve qualquer CSS do WordPress)
    // max-w-4xl = 56rem = 896px (tamanho mais adequado para o conversor)
    ...(isMobile ? {} : { maxWidth: '56rem' }),
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  };


  return (
    <div className={containerClassName} style={containerStyle}>
      {/* Se estiver carregando (skeleton service), mostra o skeleton */}
      {isLoading ? (
        <>
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