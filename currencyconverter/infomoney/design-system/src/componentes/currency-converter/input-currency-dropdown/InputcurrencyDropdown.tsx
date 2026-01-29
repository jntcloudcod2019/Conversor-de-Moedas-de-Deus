import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Currency } from "../types";
import { FlagIcon } from "../FlagIcon";
import { getCountryCodeByCurrency } from "../currencyToCountryMap";
import { ChevronIcon } from "../ChevronIcon";
import "./InputcurrencyDropdown.css";

interface InputCurrencyDropdownProps {
  currency: Currency;
  currencies: Currency[];
  onCurrencyChange: (currency: Currency) => void;
  fromValue?: number;
  exchangeRates?: Record<string, number>;
}

export const InputCurrencyDropdown: React.FC<InputCurrencyDropdownProps> = ({
  currency,
  currencies,
  onCurrencyChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [listboxWidth, setListboxWidth] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listboxInnerRef = useRef<HTMLDivElement>(null);
  const flagRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLSpanElement>(null);
  const currencyItemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  
  const sortedCurrencies = [...currencies].sort((a, b) =>
    a.code.localeCompare(b.code)
  );

  const handleSelectCurrency = (selectedCurrency: Currency) => {
    onCurrencyChange(selectedCurrency);
    setIsOpen(false);
  };

  // Calcula a posição do dropdown quando abre - abaixo da borda do input, alinhado à direita
  useEffect(() => {
    if (isOpen && rootRef.current) {
      const rect = rootRef.current.getBoundingClientRect();
      
      // Posiciona completamente abaixo da borda inferior do input, alinhado à direita do trigger
      // A largura será ajustada depois que o conteúdo interno for medido
      const minListboxWidth = 100;
      const widthToUse = listboxWidth || minListboxWidth;
      // Para position: fixed, não precisa adicionar window.scrollX/Y pois é relativo à viewport
      const calculatedLeft = rect.right - widthToUse;
      setPosition({
        top: rect.bottom + 12, // 12px de margem abaixo da borda
        left: calculatedLeft,
      });
    }
  }, [isOpen, listboxWidth]);

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
    if (isOpen && listboxInnerRef.current && rootRef.current && dropdownRef.current) {
      // Usa scrollWidth para medir o conteúdo completo (incluindo overflow)
      const innerWidth = listboxInnerRef.current.scrollWidth;
      // Adiciona pequena margem para evitar corte, mas mantém compacto
      const calculatedWidth = Math.max(innerWidth + 2, 100);
      
      setListboxWidth(calculatedWidth);
      
      // Recalcula a posição com a largura correta
      const triggerRect = rootRef.current.getBoundingClientRect();
      if (triggerRect) {
        // Calcula posição final
        const calculatedLeft = triggerRect.right - calculatedWidth;
        setPosition({
          top: triggerRect.bottom + 12,
          left: calculatedLeft,
        });
      }
    }
  }, [isOpen, sortedCurrencies]);

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
