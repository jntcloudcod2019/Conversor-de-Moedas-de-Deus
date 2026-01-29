import React, { useState, useMemo } from 'react';
import { CurrencyConverter } from '@infomoney/design-system-currency-converter';
import type { Currency, CurrencyConverterProps, SwapPayload } from '@infomoney/design-system-currency-converter';

interface ViewWrapperProps {
  baseCurrency: string;
  targetCurrency: string;
  containerId: string;
}

export function ViewWrapper({ baseCurrency, targetCurrency, containerId }: ViewWrapperProps) {
  const currencies: Currency[] = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "BRL", symbol: "R$", name: "Brazilian Real" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "GBP", symbol: "£", name: "British Pound" },
    { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  ];

  const fromCurrency = currencies.find(c => c.code === baseCurrency) || currencies[0];
  const toCurrency = currencies.find(c => c.code === targetCurrency) || currencies[1];

  const [fromValue, setFromValue] = useState(1);
  const [toValue, setToValue] = useState(0);
  const [currentFromCurrency, setCurrentFromCurrency] = useState(fromCurrency);
  const [currentToCurrency, setCurrentToCurrency] = useState(toCurrency);
  const [lastEdited, setLastEdited] = useState<'from' | 'to'>('from');

  const config = (window as any).INFOMONEY_CC_CONFIG ?? {};
  
  // Calcular rate
  const rate = useMemo(() => {
    if (config.exchangeRates && Object.keys(config.exchangeRates).length > 0) {
      const toRate = config.exchangeRates[currentToCurrency.code] ?? 1;
      const fromRate = config.exchangeRates[currentFromCurrency.code] ?? 1;
      return toRate / fromRate;
    }
    // Fallback: rates padrão
    const defaultRates: Record<string, number> = {
      USD: 1,
      BRL: 5.0,
      EUR: 0.9,
      GBP: 0.8,
      JPY: 150.0,
    };
    const toRate = defaultRates[currentToCurrency.code] ?? 1;
    const fromRate = defaultRates[currentFromCurrency.code] ?? 1;
    return toRate / fromRate;
  }, [currentFromCurrency.code, currentToCurrency.code, config.exchangeRates]);

  // Calcular valores efetivos
  const effectiveFromValue = useMemo(() => {
    return lastEdited === 'to' ? (toValue / rate) : fromValue;
  }, [fromValue, toValue, rate, lastEdited]);

  const effectiveToValue = useMemo(() => {
    return lastEdited === 'from' ? (fromValue * rate) : toValue;
  }, [fromValue, toValue, rate, lastEdited]);

  const handleFromValueChange = (value: number) => {
    setFromValue(value);
    setLastEdited('from');
  };

  const handleToValueChange = (value: number) => {
    setToValue(value);
    setLastEdited('to');
  };

  const handleFromCurrencyChange = (currency: Currency) => {
    setCurrentFromCurrency(currency);
    setLastEdited('from');
  };

  const handleToCurrencyChange = (currency: Currency) => {
    setCurrentToCurrency(currency);
    setLastEdited('from');
  };

  /**
   * Handler de swap seguindo a interface SwapPayload como contrato
   * Segue a documentação do React DOM: https://legacy.reactjs.org/docs/react-dom.html
   */
  const handleSwap = (payload: SwapPayload): void => {
    // Trocar moedas
    setCurrentFromCurrency(currentToCurrency);
    setCurrentToCurrency(currentFromCurrency);
    
    // Trocar valores seguindo o contrato SwapPayload
    setFromValue(payload.toValue);
    setToValue(payload.fromValue);
    
    setLastEdited('from');
  };

  return (
    <CurrencyConverter
      fromValue={effectiveFromValue}
      toValue={effectiveToValue}
      fromCurrency={currentFromCurrency}
      toCurrency={currentToCurrency}
      rate={rate}
      currencies={currencies}
      onFromValueChange={handleFromValueChange}
      onToValueChange={handleToValueChange}
      onFromCurrencyChange={handleFromCurrencyChange}
      onToCurrencyChange={handleToCurrencyChange}
      onSwap={handleSwap}
    />
  );
}
