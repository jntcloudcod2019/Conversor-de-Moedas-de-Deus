import React from "react";
import { registerBlockType } from "@wordpress/blocks";
import { useEffect, useState } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import { CurrencyConverter } from "../../../../../design-system/dist/componentes/currency-converter/index.esm.js";
import "./style.css";

type Attributes = {
  baseCurrency: string;
  targetCurrency: string;
};

const CURRENCIES = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "BRL", symbol: "R$", name: "Brazilian Real" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
];

registerBlockType("infomoney/currency-converter", {
  edit: ({ attributes, setAttributes }: { attributes: Attributes; setAttributes: (attrs: Partial<Attributes>) => void }) => {
    const blockProps = useBlockProps();
    const [rates] = useState<Record<string, number>>({
      USD: 1,
      BRL: 5.0,
      EUR: 0.9,
      GBP: 0.8,
      JPY: 150,
      CNY: 7.2,
    });

    useEffect(() => {
      // Opcional: buscar cotações reais da API
    }, []);

    const fromCurrency = CURRENCIES.find(c => c.code === attributes.baseCurrency) || CURRENCIES[0];
    const toCurrency = CURRENCIES.find(c => c.code === attributes.targetCurrency) || CURRENCIES[1];
    const rate = (rates[toCurrency.code] ?? 1) / (rates[fromCurrency.code] ?? 1) || 1;

    return (
      <div {...blockProps}>
        <CurrencyConverter
          fromValue={1}
          toValue={rate}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          rate={rate}
          currencies={CURRENCIES}
          exchangeRates={rates}
          onFromValueChange={() => {}}
          onToValueChange={() => {}}
          onFromCurrencyChange={(curr) => setAttributes({ baseCurrency: curr.code })}
          onToCurrencyChange={(curr) => setAttributes({ targetCurrency: curr.code })}
        />
      </div>
    );
  },
  save: () => null,
});
