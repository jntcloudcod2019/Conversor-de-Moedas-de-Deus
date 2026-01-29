import React, { useRef, useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { Currency } from "./types";
import { FlagIcon } from "./FlagIcon";
import { getCountryCodeByCurrency } from "./utils/services";
import { ChevronIcon } from "./ChevronIcon";
import { calculateDropdownPosition } from "./utils/calculationsPositionComponents";

interface CurrencyInputProps {
  value: number | "";
  currency: Currency;
  currencies: Currency[];
  disabled?: boolean;
  onValueChange: (value: number) => void;
  onCurrencyChange: (currency: Currency) => void;
  // Props opcionais para o dropdown
  exchangeRates?: Record<string, number>;
  // Se true, mostra apenas o input sem dropdown (variação)
  showDropdown?: boolean;
}

/**
 * Componente interno do dropdown de seleção de moeda
 */
const CurrencyDropdown: React.FC<{
  currency: Currency;
  currencies: Currency[];
  onCurrencyChange: (currency: Currency) => void;
  exchangeRates?: Record<string, number>;
}> = ({ currency, currencies, onCurrencyChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [listboxWidth, setListboxWidth] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listboxInnerRef = useRef<HTMLDivElement>(null);
  const flagRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLSpanElement>(null);
  const currencyItemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  
  const sortedCurrencies = useMemo(() => 
    [...currencies].sort((a, b) => a.code.localeCompare(b.code)),
    [currencies]
  );

  const handleSelectCurrency = (selectedCurrency: Currency) => {
    onCurrencyChange(selectedCurrency);
    setIsOpen(false);
  };

  // Calcula a posição do dropdown quando abre - abaixo da borda do input, alinhado à direita
  useEffect(() => {
    if (isOpen && rootRef.current) {
      const rect = rootRef.current.getBoundingClientRect();
      
      const result = calculateDropdownPosition({
        rect,
        listboxWidth: listboxWidth ?? 100,
        itemCount: sortedCurrencies.length,
        offsetTop: 12,
        offsetLeft: 0,
        minListboxWidth: 100,
      });
      
      if (result) {
        setPosition({ top: result.top, left: result.left });
      }
    }
  }, [isOpen, listboxWidth, sortedCurrencies.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        rootRef.current &&
        !rootRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  // Calcula a largura do listbox baseado no conteúdo interno e ajusta posição
  useEffect(() => {
    if (!isOpen || !listboxInnerRef.current || !rootRef.current || !dropdownRef.current) {
      return;
    }

    // Usa requestAnimationFrame para garantir que o DOM está atualizado
    requestAnimationFrame(() => {
      if (!listboxInnerRef.current || !rootRef.current || !dropdownRef.current) {
        return;
      }

      // Usa scrollWidth para medir o conteúdo completo (incluindo overflow)
      const innerWidth = listboxInnerRef.current.scrollWidth;
      // Adiciona pequena margem para evitar corte, mas mantém compacto
      const calculatedWidth = Math.max(innerWidth + 2, 100);
      
      // Só atualiza se o valor realmente mudou (evita loop infinito)
      setListboxWidth((prevWidth) => {
        if (prevWidth === calculatedWidth) {
          return prevWidth;
        }
        return calculatedWidth;
      });
      
      // Recalcula a posição com a largura correta e detecção de viewport
      const triggerRect = rootRef.current.getBoundingClientRect();
      if (triggerRect && listboxInnerRef.current) {
        // Estima altura baseada no conteúdo renderizado
        const listboxHeight = listboxInnerRef.current.scrollHeight;
        
        const adjustedPosition = calculateDropdownPosition({
          rect: triggerRect,
          listboxWidth: calculatedWidth,
          listboxHeight,
          itemCount: sortedCurrencies.length,
          offsetTop: 12,
          offsetLeft: 0,
          minListboxWidth: 100,
        });
        
        if (adjustedPosition) {
          setPosition((prevPosition) => {
            const newPosition = { top: adjustedPosition.top, left: adjustedPosition.left };
            // Só atualiza se a posição realmente mudou (evita loop infinito)
            if (prevPosition.top === newPosition.top && prevPosition.left === newPosition.left) {
              return prevPosition;
            }
            return newPosition;
          });
        }
      }
    });
  }, [isOpen, sortedCurrencies.length]);

  // Debug: Verifica scroll após renderização
  useEffect(() => {
    if (isOpen && dropdownRef.current && listboxInnerRef.current) {
      // Aguarda um frame para garantir que o DOM está atualizado
      requestAnimationFrame(() => {
        if (dropdownRef.current && listboxInnerRef.current) {
        }
      });
    }
  }, [isOpen, sortedCurrencies.length]);

  // Controla animação de entrada/saída e scroll para item selecionado
  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      // Inicia com estado inicial (invisível)
      dropdownRef.current.style.opacity = '0';
      dropdownRef.current.style.transform = 'translateY(-8px) scale(0.98)';
      
      // Após um frame, anima para estado final (visível)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (dropdownRef.current) {
            dropdownRef.current.style.opacity = '1';
            dropdownRef.current.style.transform = 'translateY(0) scale(1)';
            
            // Scroll para o item selecionado após a animação
            const selectedItemRef = currencyItemRefs.current.get(currency.code);
            if (selectedItemRef && listboxInnerRef.current) {
              selectedItemRef.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
              });
            }
          }
        });
      });
    }
  }, [isOpen, currency.code]);

  const listboxContent = isOpen ? (
    <div
      ref={dropdownRef}
      role="listbox"
      aria-label="Selecionar moeda"
      className="fixed bg-white border border-gray-200 rounded-lg shadow-lg"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: listboxWidth ? `${listboxWidth}px` : 'auto',
        minWidth: '100px',
        maxHeight: '400px',
        overflowY: 'auto',
        overflowX: 'hidden',
        zIndex: 9999,
        opacity: 0,
        transform: 'translateY(-8px) scale(0.98)',
        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
        scrollbarWidth: 'thin',
        scrollbarColor: '#cbd5e0 #f7fafc',
      }}
    >
      <div ref={listboxInnerRef} className="py-1">
        {sortedCurrencies.map((curr) => (
          <button
            key={curr.code}
            ref={(el) => {
              if (el) {
                currencyItemRefs.current.set(curr.code, el);
              } else {
                currencyItemRefs.current.delete(curr.code);
              }
            }}
            type="button"
            role="option"
            aria-selected={curr.code === currency.code}
            onClick={(e) => {
              e.stopPropagation();
              handleSelectCurrency(curr);
            }}
            className={`w-full py-2 bg-white hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors ${
              curr.code === currency.code ? "font-semibold" : ""
            }`}
            style={{
              minHeight: '40px',
              backgroundColor: 'white',
              paddingLeft: '12px',
              paddingRight: '12px',
            }}
          >
            {/* Flag na lista */}
            <div className="w-5 h-5 shrink-0 rounded-full overflow-hidden flex items-center justify-center">
              <FlagIcon
                countryCode={getCountryCodeByCurrency(curr.code)}
              />
            </div>
            <span className="font-inter text-sm text-center">{curr.code}</span>
          </button>
        ))}
      </div>
    </div>
  ) : null;

  return (
    <>
      <div
        ref={rootRef}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Selecionar moeda"
        className="relative w-auto min-w-[90px] sm:min-w-[100px] h-5 flex items-center justify-end gap-1 shrink-0 cursor-pointer"
        style={{ overflow: 'visible' }}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        {/* Flag no botão dropdown */}
        <div
          ref={flagRef}
          className="w-5 h-5 shrink-0 rounded-full overflow-hidden flex items-center justify-center"
        >
          <FlagIcon
            countryCode={getCountryCodeByCurrency(currency.code)}
          />
        </div>
        <span
          ref={codeRef}
          className="font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 whitespace-nowrap"
          style={{ minWidth: 'fit-content' }}
        >
          {currency.code}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="cursor-pointer bg-transparent border-0 p-0 m-0 outline-none"
          aria-label="Abrir menu de seleção de moeda"
          aria-expanded={isOpen}
        >
          <ChevronIcon
            color="#525252"
          />
        </button>
      </div>
      {typeof document !== "undefined" && createPortal(listboxContent, document.body)}
    </>
  );
};

/**
 * Componente de input de moeda com dropdown integrado
 * Variações:
 * - showDropdown=true (padrão): mostra dropdown de seleção de moeda
 * - showDropdown=false: mostra apenas o código da moeda (sem dropdown)
 */
export const CurrencyInput: React.FC<CurrencyInputProps> = ({
  value,
  currency,
  currencies,
  disabled = false,
  onValueChange,
  onCurrencyChange,
  exchangeRates,
  showDropdown = true,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(Number(e.target.value) || 0);
  };

  const getContainerClasses = (disabled: boolean): string => {
    return [
      "flex",
      "flex-row",
      "items-center",
      "gap-2",
      "w-[525px]",
      "h-11",
      "px-4",
      "py-3",
      "bg-white",
      "border",
      "border-[#525252]",
      "rounded-[12px]",
      "transition-all",
      "hover:ring-2",
      "hover:ring-black",
      "focus-within:ring-2",
      "focus-within:ring-black",
      "ring-offset-0",
      disabled ? "bg-[#F5F5F5] cursor-not-allowed" : "cursor-text",
    ].join(" ");
  };

  const getInputClasses = (disabled: boolean): string => {
    return [
      "flex-1",
      "bg-transparent",
      "font-inter",
      "font-semibold",
      "text-base",
      "leading-5",
      "placeholder-[#ABABA8]",
      "focus:outline-none",
      "border-none",
      disabled ? "cursor-not-allowed text-[#AAAAAA]" : "",
    ]
      .filter(Boolean)
      .join(" ");
  };

  return (
    <div className={getContainerClasses(disabled)}>
      {showDropdown ? (
        <CurrencyDropdown
          currency={currency}
          currencies={currencies}
          onCurrencyChange={onCurrencyChange}
          exchangeRates={exchangeRates}
        />
      ) : (
        <div className="relative w-auto min-w-[90px] sm:min-w-[100px] h-5 flex items-center justify-end gap-1 shrink-0">
          <div className="w-5 h-5 shrink-0 rounded-full overflow-hidden flex items-center justify-center">
            <FlagIcon
              countryCode={getCountryCodeByCurrency(currency.code)}
            />
          </div>
          <span className="font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 whitespace-nowrap">
            {currency.code}
          </span>
        </div>
      )}
      <div className="w-px h-6 bg-[#cccccc] shrink-0" />
      <input
        type="number"
        id={showDropdown ? `currency-input-${currency.code.toLowerCase()}` : undefined}
        name={showDropdown ? `currency-${currency.code.toLowerCase()}` : undefined}
        value={value || ""}
        onChange={handleInputChange}
        disabled={disabled}
        placeholder="0,00"
        className={getInputClasses(disabled)}
        style={{
          color: "var(--colors-Content-one, #525252)",
          opacity: 1,
        }}
      />
    </div>
  );
};

/**
 * Exporta também o componente dropdown separado para compatibilidade
 * @deprecated Use CurrencyInput com showDropdown=true
 */
export const InputCurrencyDropdown: React.FC<{
  currency: Currency;
  currencies: Currency[];
  onCurrencyChange: (currency: Currency) => void;
  exchangeRates?: Record<string, number>;
}> = ({ currency, currencies, onCurrencyChange, exchangeRates }) => {
  return (
    <CurrencyDropdown
      currency={currency}
      currencies={currencies}
      onCurrencyChange={onCurrencyChange}
      exchangeRates={exchangeRates}
    />
  );
};
