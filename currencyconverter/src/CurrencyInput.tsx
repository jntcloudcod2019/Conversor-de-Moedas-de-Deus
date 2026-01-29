import React, { useRef, useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { Currency } from "./types";
import { FlagIcon } from "./FlagIcon";
import { getCountryCodeByCurrency } from "./utils/currencyToCountryMap";
import { ChevronIcon } from "./ChevronIcon";

interface CurrencyInputProps {
  value: number | "";
  currency: Currency;
  currencies: Currency[];
  disabled?: boolean;
  onValueChange: (value: number) => void;
  onCurrencyChange: (currency: Currency) => void;
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
}> = ({ currency, currencies, onCurrencyChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [listboxWidth, setListboxWidth] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listboxInnerRef = useRef<HTMLDivElement>(null);
  const currencyItemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  
  const sortedCurrencies = useMemo(() => 
    [...currencies].sort((a, b) => a.code.localeCompare(b.code)),
    [currencies]
  );

  const handleSelectCurrency = (selectedCurrency: Currency) => {
    onCurrencyChange(selectedCurrency);
    setIsOpen(false);
    setActiveIndex(-1);
    rootRef.current?.focus();
  };

  useEffect(() => {
    if (isOpen && rootRef.current) {
      const rect = rootRef.current.getBoundingClientRect();
      const widthToUse = Math.max(listboxWidth ?? 100, 100);
      const offsetTop = 12;
      
      // Posição inicial: abaixo do trigger, alinhado à direita
      let left = rect.right - widthToUse;
      let top = rect.bottom + offsetTop;
      
      // Ajuste horizontal básico: garante que não saia das bordas
      const MARGIN = 8;
      if (left < MARGIN) {
        left = MARGIN;
      } else if (left + widthToUse > window.innerWidth - MARGIN) {
        left = window.innerWidth - widthToUse - MARGIN;
      }
      
      setPosition({ top, left });
    }
  }, [isOpen, listboxWidth, sortedCurrencies.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isClickInsideRoot = rootRef.current?.contains(target);
      const isClickInsideDropdown = dropdownRef.current?.contains(target);
      
      if (isOpen && !isClickInsideRoot && !isClickInsideDropdown) {
        setIsOpen(false);
        setActiveIndex(-1);
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
      
      // Recalcula a posição com a largura correta
      const triggerRect = rootRef.current.getBoundingClientRect();
      if (triggerRect) {
        const offsetTop = 12;
        const MARGIN = 8;
        
        // Posição inicial: abaixo do trigger, alinhado à direita
        let left = triggerRect.right - calculatedWidth;
        let top = triggerRect.bottom + offsetTop;
        
        // Ajuste horizontal básico: garante que não saia das bordas
        if (left < MARGIN) {
          left = MARGIN;
        } else if (left + calculatedWidth > window.innerWidth - MARGIN) {
          left = window.innerWidth - calculatedWidth - MARGIN;
        }
        
        // Ajuste vertical: se não couber embaixo, limita ao fundo da viewport
        const listboxHeight = listboxInnerRef.current.scrollHeight;
        const spaceBelow = window.innerHeight - triggerRect.bottom - offsetTop;
        if (spaceBelow < listboxHeight) {
          top = window.innerHeight - listboxHeight - MARGIN;
        }
        
        setPosition((prevPosition) => {
          const newPosition = { top, left };
          // Só atualiza se a posição realmente mudou (evita loop infinito)
          if (prevPosition.top === newPosition.top && prevPosition.left === newPosition.left) {
            return prevPosition;
          }
          return newPosition;
        });
      }
    });
  }, [isOpen, sortedCurrencies.length]);

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
            
            // Foca no primeiro item para navegação por teclado
            const firstItem = sortedCurrencies[0];
            if (firstItem) {
              const firstItemRef = currencyItemRefs.current.get(firstItem.code);
              firstItemRef?.focus();
            }
          }
        });
      });
    } else {
      setActiveIndex(-1);
    }
  }, [isOpen, currency.code, sortedCurrencies]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) {
      return;
    }

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setActiveIndex(-1);
        rootRef.current?.focus();
        break;
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((prev) => {
          const next = (prev + 1) % sortedCurrencies.length;
          const nextCurrency = sortedCurrencies[next];
          const nextItemRef = currencyItemRefs.current.get(nextCurrency.code);
          nextItemRef?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          nextItemRef?.focus();
          return next;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((prev) => {
          const next = prev <= 0 ? sortedCurrencies.length - 1 : prev - 1;
          const nextCurrency = sortedCurrencies[next];
          const nextItemRef = currencyItemRefs.current.get(nextCurrency.code);
          nextItemRef?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          nextItemRef?.focus();
          return next;
        });
        break;
    }
  };

  const listboxContent = isOpen ? (
    <div
      ref={dropdownRef}
      role="listbox"
      id="currency-dropdown-listbox"
      aria-label="Selecionar moeda"
      className="fixed bg-white border border-gray-200 rounded-lg shadow-lg z-[9999]"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: listboxWidth ? `${listboxWidth}px` : 'auto',
        minWidth: '100px',
        maxHeight: '400px'
      }}
    >
      <div ref={listboxInnerRef} className="py-1">
        {sortedCurrencies.map((curr, idx) => {
          const isSelected = curr.code === currency.code;
          const isActive = idx === activeIndex;
          return (
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
              aria-selected={isSelected}
              tabIndex={isActive ? 0 : -1}
              onClick={(e) => {
                e.stopPropagation();
                handleSelectCurrency(curr);
              }}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`w-full py-2 bg-white hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset ${
                isSelected ? "font-semibold" : ""
              } ${isActive ? "bg-gray-100" : ""}`}
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
          );
        })}
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
        aria-controls="currency-dropdown-listbox"
        tabIndex={0}
        className="relative w-auto min-w-[90px] sm:min-w-[100px] h-5 flex items-center justify-end gap-1 shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
        style={{ overflow: 'visible' }}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onKeyDown={handleKeyDown}
      >
        {/* Flag no botão dropdown */}
        <div
          className="w-5 h-5 shrink-0 rounded-full overflow-hidden flex items-center justify-center"
        >
          <FlagIcon
            countryCode={getCountryCodeByCurrency(currency.code)}
          />
        </div>
        <span
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

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
  value,
  currency,
  currencies,
  disabled = false,
  onValueChange,
  onCurrencyChange,
  showDropdown = true,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Permite limpar o campo
    if (newValue === "") {
      onValueChange(0);
      return;
    }
    
    // Permite digitação de decimais (ex: "10.", "10.5")
    // Remove caracteres não numéricos exceto ponto/vírgula
    const cleanedValue = newValue.replace(/[^\d.,]/g, '');
    
    // Converte vírgula para ponto para parseFloat
    const normalizedValue = cleanedValue.replace(',', '.');
    
    // Verifica se é um número válido
    const numValue = parseFloat(normalizedValue);
    if (!isNaN(numValue) && isFinite(numValue)) {
      onValueChange(numValue);
    } else if (cleanedValue === '' || cleanedValue === '.' || cleanedValue === ',') {
      // Permite digitação parcial (ex: "10." antes de completar)
      onValueChange(0);
    }
  };

  const getContainerClasses = (disabled: boolean): string => {
    return [
      "flex",
      "flex-row",
      "items-center",
      "gap-2",
      "w-full",
      "max-w-[525px]",
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
        type="text"
        inputMode="decimal"
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
        onWheel={(e) => {
          // Previne mudança de valor ao usar scroll wheel
          if (document.activeElement === e.currentTarget) {
            e.currentTarget.blur();
          }
        }}
      />
    </div>
  );
};

/**
 * Exporta também o componente dropdown separado para compatibilidade
 * @deprecated Use CurrencyInput com showDropdown=true
 */
export const CurrencyInputDropdown: React.FC<{
  currency: Currency;
  currencies: Currency[];
  onCurrencyChange: (currency: Currency) => void;
}> = ({ currency, currencies, onCurrencyChange }) => {
  return (
    <CurrencyDropdown
      currency={currency}
      currencies={currencies}
      onCurrencyChange={onCurrencyChange}
    />
  );
};
