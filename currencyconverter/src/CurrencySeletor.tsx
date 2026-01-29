import React, { useEffect, useRef, useState, useMemo } from "react";
import { Currency } from "./types";
import { FlagIcon } from "./FlagIcon";
import { ChevronIcon } from "./ChevronIcon";
import { getCountryCodeByCurrency } from "./utils/currencyToCountryMap";
import { getCurrentDateTime } from "./utils/dateUtils";
import { calculateExchangeRate } from "./utils/calculationsPositionComponents";

interface CurrencySelectorProps {
  currency: Currency;
  currencies: Currency[];
  onCurrencyChange: (currency: Currency) => void;
  listWidth?: number;
  fromValue?: number;
  exchangeRates?: Record<string, number>;
}

/**
 * Componente inline para exibir taxa de câmbio
 */
const CurrencyRateInline: React.FC<{
  fromCurrencyCode: string;
  toCurrencyCode: string;
  exchangeRates?: Record<string, number>;
  fromValue?: number;
  showValue?: boolean;
}> = ({ fromCurrencyCode, toCurrencyCode, exchangeRates = {}, fromValue, showValue = false }) => {
  const [rate, setRate] = useState<string>("-");

  useEffect(() => {
    calculateExchangeRate({
      fromCurrencyCode,
      toCurrencyCode,
      exchangeRates,
    }).then((calculatedRate) => {
      setRate(calculatedRate);
    });
  }, [fromCurrencyCode, toCurrencyCode, exchangeRates]);

  if (rate === "-") {
    return null;
  }

  if (showValue && fromValue !== undefined) {
    return (
      <span className="ml-auto text-xs text-gray-500">
        {fromValue} {fromCurrencyCode} = {rate} {toCurrencyCode}
      </span>
    );
  }

  return (
    <span className="ml-auto text-xs text-gray-500">
      {rate}
    </span>
  );
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
      <div className="relative flex items-center w-full" ref={rootRef} onKeyDown={onKeyDown}>
        {/* Trigger: flag + sigla + chevron */}
        <div
          className="inline-flex items-center gap-0.5 h-5"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="w-icon-xl h-icon-xl rounded-full overflow-hidden inline-flex items-center justify-center flex-none" aria-hidden>
            <FlagIcon countryCode={countryCode} />
          </span>
          <span className="font-inter font-semibold text-xs leading-5 text-icon-dark whitespace-nowrap" style={{ minWidth: 'fit-content' }}>{currency.code}</span>
          <button
            type="button"
            aria-label="Abrir lista de moedas"
            aria-expanded={isOpen}
            onClick={handleToggle}
            className="grid place-items-center w-icon-md h-icon-md bg-transparent border-0 p-0 cursor-pointer"
          >
            <ChevronIcon size={20} color="#525252" />
          </button>
        </div>

        {/* Popover: abaixo do trigger, largura alinhada e altura dinâmica */}
        {isOpen && (
          <div
            role="listbox"
            aria-label="Selecionar moeda"
            className="absolute z-50 top-[calc(100%+36px)] left-auto right-[-12px] min-w-[220px] w-max max-h-[240px] overflow-y-auto bg-white border border-wl-neutral-200 shadow-lg rounded-lg block scrollbar-thin"
            style={{
              width: listWidth ? `${listWidth}px` : undefined,
            }}
          >
            <ul className="m-0 p-0.5 list-none">
              {sortedCurrencies.map((curr, idx) => {
                const cc = getCountryCodeByCurrency(curr.code);
                const selected = curr.code === currency.code;
                const active = idx === activeIndex;
                return (
                  <li
                    key={curr.code}
                    role="option"
                    aria-selected={selected}
                    className={`flex items-center gap-0.5 px-1.5 py-1 rounded bg-white cursor-pointer select-none ${
                      active || selected ? 'bg-gray-100' : ''
                    } hover:bg-gray-100`}
                    data-active={active ? "true" : "false"}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => handleSelect(curr)}
                  >
                    {/* Flag na lista */}
                    <div className="w-icon-sm h-icon-sm rounded-full overflow-hidden inline-flex items-center justify-center flex-none">
                      <FlagIcon countryCode={cc} />
                    </div>
                    <span className="font-inter font-semibold text-[11px] leading-[14px] text-icon-dark">{curr.code}</span>
                    <CurrencyRateInline
                      fromCurrencyCode={currency.code}
                      toCurrencyCode={curr.code}
                      exchangeRates={exchangeRates}
                      fromValue={fromValue}
                      showValue={true}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {/* Rodapé com data e hora de atualização */}
      <div className="text-xs text-icon-gray mt-2">
        Atualizado em {getCurrentDateTime()}
      </div>
    </div>
  );
};
