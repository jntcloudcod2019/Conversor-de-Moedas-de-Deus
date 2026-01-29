import React from "react";
import { Currency } from "./types";
import { InputCurrencyDropdown } from "./input-currency-dropdown/InputcurrencyDropdown";

interface CurrencyInputProps {
  value: number | "";
  currency: Currency;
  currencies: Currency[];
  disabled?: boolean;
  onValueChange: (value: number) => void;
  onCurrencyChange: (currency: Currency) => void;
}

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

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
  value,
  currency,
  currencies,
  disabled = false,
  onValueChange,
  onCurrencyChange,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(Number(e.target.value) || 0);
  };

  return (
    <div className={getContainerClasses(disabled)}>
      <InputCurrencyDropdown
        currency={currency}
        currencies={currencies}
        onCurrencyChange={onCurrencyChange}
      />
      <div className="w-px h-6 bg-[#cccccc] shrink-0" />
      <input
        type="number"
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
