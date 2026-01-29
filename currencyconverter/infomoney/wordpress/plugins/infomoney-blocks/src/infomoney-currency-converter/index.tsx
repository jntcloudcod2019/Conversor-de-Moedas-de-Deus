import React from "react";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import "./style.css";

// Importar o componente do design system
// O bundle será carregado via wp_enqueue_script no PHP
declare global {
  interface Window {
    InfomoneyCurrencyConverter?: {
      CurrencyConverter: React.ComponentType<any>;
      initCurrencyConverter: (containerId: string, props: any) => void;
    };
  }
}

type Attributes = {
  baseCurrency: string;
  targetCurrency: string;
};

registerBlockType("infomoney/currency-converter", {
  edit: ({ attributes, setAttributes }: { attributes: Attributes; setAttributes: (attrs: Partial<Attributes>) => void }) => {
    const blockProps = useBlockProps();
    const [rates, setRates] = useState<Record<string, number>>({
      USD: 1,
      BRL: 5.0,
      EUR: 0.9
    });
    const config = (window as any).INFOMONEY_CC_CONFIG ?? {};

    useEffect(() => {
      // Aqui você pode buscar a API real e atualizar `rates`.
      // fetch(config.endpoint, { headers: { "x-api-key": config.apiKey } })
      //   .then((r) => r.json())
      //   .then((data) => setRates(data.rates));
    }, []);

    const CurrencyConverter = window.InfomoneyCurrencyConverter?.CurrencyConverter;

    if (!CurrencyConverter) {
      return (
        <div {...blockProps}>
          <p>{__("Carregando Currency Converter...", "infomoney")}</p>
        </div>
      );
    }

    // Mock de props - em produção viria da API
    const currencies = [
      { code: "USD", symbol: "$", name: "US Dollar" },
      { code: "BRL", symbol: "R$", name: "Brazilian Real" },
      { code: "EUR", symbol: "€", name: "Euro" },
      { code: "GBP", symbol: "£", name: "British Pound" },
      { code: "JPY", symbol: "¥", name: "Japanese Yen" },
      { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
    ];

    const fromCurrency = currencies.find(c => c.code === attributes.baseCurrency) || currencies[0];
    const toCurrency = currencies.find(c => c.code === attributes.targetCurrency) || currencies[1];
    const rate = rates[toCurrency.code] / rates[fromCurrency.code] || 1;

    return (
      <div {...blockProps}>
        <CurrencyConverter
          fromValue={1}
          toValue={rate}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          rate={rate}
          currencies={currencies}
          onFromValueChange={() => {}}
          onFromCurrencyChange={(curr: any) => setAttributes({ baseCurrency: curr.code })}
          onToCurrencyChange={(curr: any) => setAttributes({ targetCurrency: curr.code })}
          onSwap={() => {
            setAttributes({
              baseCurrency: attributes.targetCurrency,
              targetCurrency: attributes.baseCurrency,
            });
          }}
        />
      </div>
    );
  },
  save: ({ attributes }: { attributes: Attributes }) => {
    const blockProps = useBlockProps.save();
    return (
      <div 
        {...blockProps} 
        className="wp-block-infomoney-currency-converter"
        data-base-currency={attributes.baseCurrency}
        data-target-currency={attributes.targetCurrency}
      >
        {/* Renderizado no frontend via view.js */}
      </div>
    );
  },
});
