import { useState, useEffect, useMemo } from 'react'
import React from 'react'
import { CurrencyConverter, calculateRateFromExchangeRates } from './CurrencyConverter'
import { CurrencyMapper } from './services/currencyMapper'
import { DEFAULT_CURRENCY_CODES } from './types'

/**
 * Simula dados da API para inicialização do componente
 * Retorna dados no formato que a API retornaria
 */
function simulateApiResponse() {
  const now = new Date().toISOString();
  
  const mockApiData = {
    BRL: {
      symbol: 'BRL',
      tradeDate: now,
      bid: 5.3789,
      ask: 5.3795,
      change: 0.0576,
      changeMonth: -1.0612,
      changeYear: -1.0612,
      change52w: -11.3332,
    },
    USD: {
      symbol: 'USD',
      tradeDate: now,
      bid: 1.0,
      ask: 1.0,
      change: 0.0,
      changeMonth: 0.0,
      changeYear: 0.0,
      change52w: 0.0,
    },
    EUR: {
      symbol: 'EUR',
      tradeDate: now,
      bid: 0.92,
      ask: 0.92,
      change: 0.01,
      changeMonth: -0.05,
      changeYear: -0.05,
      change52w: 0.02,
    },
    GBP: {
      symbol: 'GBP',
      tradeDate: now,
      bid: 0.79,
      ask: 0.79,
      change: 0.02,
      changeMonth: -0.08,
      changeYear: -0.08,
      change52w: 0.03,
    },
    JPY: {
      symbol: 'JPY',
      tradeDate: now,
      bid: 150.0,
      ask: 150.5,
      change: 1.5,
      changeMonth: -2.0,
      changeYear: -2.0,
      change52w: 0.5,
    },
    CNY: {
      symbol: 'CNY',
      tradeDate: now,
      bid: 7.2,
      ask: 7.25,
      change: 0.1,
      changeMonth: -0.3,
      changeYear: -0.3,
      change52w: 0.2,
    },
  };

  return {
    currencies: Object.entries(mockApiData).map(([code, apiData]) => ({
      code,
      apiData,
    })),
  };
}

function App() {
  const mockApiContract = useMemo(() => simulateApiResponse(), []);
  const converterData = useMemo(
    () => CurrencyMapper.mapContractToConverterData(mockApiContract, 'USD'),
    [mockApiContract]
  );
  
  // Obtém a lista de moedas do AutoMapper - MEMOIZA para evitar recriação
  const currencyList = useMemo(() => converterData.currencies, [converterData]);
  
  // Usa API real quando VITE_AWESOMEAPI_TOKEN está definido no .env
  const useApiFlow = Boolean(typeof import.meta !== 'undefined' && import.meta.env?.VITE_AWESOMEAPI_TOKEN);

  // Função dinâmica para obter moedas iniciais - aceita qualquer combinação
  const getInitialCurrencies = (
    list,
    fromCode = null,  // null = usa primeiro da lista
    toCode = null     // null = usa primeiro diferente de from
  ) => {
    // Se fromCode não foi fornecido, usa o primeiro da lista
    const from = fromCode 
      ? list.find((c) => c.code === fromCode) ?? list[0]
      : list[0]
    
    // Se toCode não foi fornecido, usa o primeiro diferente de from
    // Se toCode foi fornecido, tenta encontrar, senão usa primeiro diferente
    const to = toCode
      ? (list.find((c) => c.code === toCode && c.code !== from.code) ?? 
         list.find((c) => c.code !== from.code) ?? 
         list[0])
      : (list.find((c) => c.code !== from.code) ?? list[0])
    
    return { from, to }
  }

  // Exemplo de uso dinâmico - pode passar qualquer combinação:
  // getInitialCurrencies(currencyList, 'USD', 'EUR')  -> USD e EUR
  // getInitialCurrencies(currencyList, 'JPY')         -> JPY e primeiro diferente
  // getInitialCurrencies(currencyList)                -> Primeiro e segundo da lista
  const { from: initialFromCurrency, to: initialToCurrency } = getInitialCurrencies(
    currencyList
    // Você pode passar valores aqui: getInitialCurrencies(currencyList, 'EUR', 'GBP')
  )

  // Estado de valores e moedas (parametrizado pelas moedas escolhidas)
  const [fromValue, setFromValue] = useState(0)
  const [fromCurrency, setFromCurrency] = useState(initialFromCurrency)
  const [toCurrency, setToCurrency] = useState(initialToCurrency)
  const [toValue, setToValue] = useState(0)
  const [lastEdited, setLastEdited] = useState('from')
  
  const [rate, setRate] = useState(1);

  useEffect(() => {
    if (!converterData?.exchangeRates) return;
    calculateRateFromExchangeRates({
      fromCurrencyCode: fromCurrency.code,
      toCurrencyCode: toCurrency.code,
      exchangeRates: converterData.exchangeRates,
      fallbackRate: 1,
    }).then((calculatedRate) => {
      if (calculatedRate != null) setRate(calculatedRate);
    });
  }, [fromCurrency.code, toCurrency.code, converterData]);

  const effectiveFromValue = useMemo(() => {
    if (typeof rate !== 'number' || !Number.isFinite(rate) || rate === 0) return 0;
    return lastEdited === 'to' ? toValue / rate : fromValue;
  }, [fromValue, toValue, rate, lastEdited]);

  const effectiveToValue = useMemo(() => {
    if (typeof rate !== 'number' || !Number.isFinite(rate) || rate === 0) return 0;
    return lastEdited === 'to' ? toValue : fromValue * rate;
  }, [fromValue, toValue, rate, lastEdited]);

  const handleFromValueChange = (value) => {
    setFromValue(value);
    setLastEdited('from');
  };

  const handleToValueChange = (value) => {
    setToValue(value);
    setLastEdited('to');
  };

  const handleFromCurrencyChange = (currency) => {
    setFromCurrency(currency)
    // Após troca de moeda, manter referência no campo de origem
    setLastEdited('from')
  }

  const handleToCurrencyChange = (currency) => {
    setToCurrency(currency)
    // Após troca de moeda destino, recalcula a partir do from
    setLastEdited('from')
  }

  const handleSwap = ({ fromValue: swapFromValue, toValue: swapToValue }) => {
    const newFromValue = typeof swapToValue === 'number' ? swapToValue : effectiveToValue;
    const newToValue = typeof swapFromValue === 'number' ? swapFromValue : effectiveFromValue;
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromValue(newFromValue);
    setToValue(newToValue);
    setLastEdited('from');
  };

  return (
    <div
     
    >
  

      <CurrencyConverter
        fromValue={effectiveFromValue}
        toValue={effectiveToValue}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        rate={useApiFlow ? undefined : rate}
        converterData={useApiFlow ? undefined : converterData}
        currencyCodesToFetch={DEFAULT_CURRENCY_CODES}
        onFromValueChange={handleFromValueChange}
        onToValueChange={handleToValueChange}
        onFromCurrencyChange={handleFromCurrencyChange}
        onToCurrencyChange={handleToCurrencyChange}
        onSwap={handleSwap}
      />
    </div>
  )
}

export default App
