import React, { useEffect, useRef, useState, useMemo } from "react";
import { Currency } from "./types";
import { FlagIcon } from "./FlagIcon";
import { ChevronIcon } from "./ChevronIcon";
import { getCountryCodeByCurrency } from "./currencyToCountryMap";
import { getCurrentDateTime } from "./dateUtils";
import "./CurrencySeletor.css";

interface CurrencySelectorProps {
  currency: Currency;
  currencies: Currency[];
  onCurrencyChange: (currency: Currency) => void;
  listWidth?: number;
  fromValue?: number;
  exchangeRates?: Record<string, number>;
}

const calculateExchangeRate = (
  fromCurrencyCode: string,
  toCurrencyCode: string,
  exchangeRates: Record<string, number>
): string => {
  const fromRate = exchangeRates[fromCurrencyCode];
  const toRate = exchangeRates[toCurrencyCode];
  if (!fromRate || !toRate) return "-";
  const rate = toRate / fromRate;
  return rate.toFixed(2);
};

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  currency,
  currencies,
  onCurrencyChange,
  listWidth,
  fromValue = 1,
  exchangeRates = {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const sortedCurrencies = useMemo(
    () => [...currencies].sort((a, b) => a.code.localeCompare(b.code)),
    [currencies]
  );

  const countryCode = getCountryCodeByCurrency(currency.code);

  const closeOnOutsideClick = (evt: MouseEvent) => {
    if (!rootRef.current) return;
    if (!rootRef.current.contains(evt.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setActiveIndex(-1);
  };

  const handleSelect = (selectedCurrency: Currency) => {
    onCurrencyChange(selectedCurrency);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setActiveIndex(0);
        return;
      }
      const curr = sortedCurrencies[activeIndex];
      if (curr) handleSelect(curr);
      return;
    }

    if (!isOpen) return;

    if (e.key === "Escape") {
      setIsOpen(false);
      setActiveIndex(-1);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % sortedCurrencies.length);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + sortedCurrencies.length) % sortedCurrencies.length);
      return;
    }
  };

  return (
    <div>
      <div className="cs-root" ref={rootRef} onKeyDown={onKeyDown}>
        {/* Trigger: flag + sigla + chevron */}
        <div
          className="cs-trigger"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="cs-flag" aria-hidden>
            <FlagIcon countryCode={countryCode} />
          </span>
          <span className="cs-code">{currency.code}</span>
          <button
            type="button"
            aria-label="Abrir lista de moedas"
            aria-expanded={isOpen}
            onClick={handleToggle}
            className="cs-chevron"
          >
            <ChevronIcon size={20} color="#525252" />
          </button>
        </div>

        {/* Popover: abaixo do trigger, largura alinhada e altura dinâmica */}
        {isOpen && (
          <div
            role="listbox"
            aria-label="Selecionar moeda"
            className="cs-popover"
            style={{
              background: "#fff",
              width: listWidth ? `${listWidth}px` : undefined,
            }}
          >
            <ul className="cs-list">
              {sortedCurrencies.map((curr, idx) => {
                const cc = getCountryCodeByCurrency(curr.code);
                const selected = curr.code === currency.code;
                const active = idx === activeIndex;
                const exchangeRate = calculateExchangeRate(
                  currency.code,
                  curr.code,
                  exchangeRates
                );
                return (
                  <li
                    key={curr.code}
                    role="option"
                    aria-selected={selected}
                    className="cs-option"
                    data-active={active ? "true" : "false"}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => handleSelect(curr)}
                  >
                    {/* Flag na lista - mesma definição do InputCurrencyDropdown */}
                    <div className="w-5 h-5 shrink-0 rounded-full overflow-hidden flex items-center justify-center">
                      <FlagIcon countryCode={cc} />
                    </div>
                    <span className="cs-option-code">{curr.code}</span>
                    {exchangeRate !== "-" && (
                      <span className="cs-option-rate">
                        {fromValue} {currency.code} = {exchangeRate} {curr.code}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {/* Rodapé com data e hora de atualização */}
      <div className="text-xs text-[#888888] mt-2">
        Atualizado em {getCurrentDateTime()}
      </div>
    </div>
  );
};
