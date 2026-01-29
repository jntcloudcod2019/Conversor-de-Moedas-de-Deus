import React, { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { 
  CurrencyConverter,
  type CurrencyConverterProps,
  type Currency,
  type CurrencyConverterData,
  CurrencyMapper,
  type AllCurrenciesContract
} from '@infomoney/design-system-currency-converter';
import { ResponsiveProvider } from '@infomoney/design-system-currency-converter/contexts/ResponsiveContext';
import { SkeletonProvider } from '@infomoney/design-system-currency-converter/contexts/SkeletonContext';
import { DeviceProvider } from '@infomoney/design-system-currency-converter/contexts/DeviceContext';

// Declaração global para Window
declare global {
  interface Window {
    INFOMONEY_CC_CONFIG?: {
      endpoint?: string;
      apiKey?: string;
      baseCurrency?: string;
      targetCurrency?: string;
      exchangeRates?: Record<string, number>;
      lastUpdated?: string;
    };
  }
}

// Cache de roots para evitar recriar componentes
const rootCache = new Map<string, Root>();

// Verificar se os componentes foram importados corretamente
function verifyImports(): boolean {
  const requiredImports = {
    CurrencyConverter: typeof CurrencyConverter !== 'undefined',
    CurrencyMapper: typeof CurrencyMapper !== 'undefined',
    ResponsiveProvider: typeof ResponsiveProvider !== 'undefined',
    SkeletonProvider: typeof SkeletonProvider !== 'undefined',
    DeviceProvider: typeof DeviceProvider !== 'undefined',
  };

  const missing = Object.entries(requiredImports)
    .filter(([_, exists]) => !exists)
    .map(([name]) => name);

  if (missing.length > 0) {
    console.log('CurrencyConverter: Componentes não encontrados:', missing);
    return false;
  }

  console.log('CurrencyConverter: Todos os componentes e subcomponentes foram importados com sucesso');
  return true;
}

// Buscar elementos HTML por classe ou data attribute
function findCurrencyConverterElements(): HTMLElement[] {
  const selectors = [
    '.currency-converter',
    '.wp-block-infomoney-currency-converter',
    '[data-currency-converter]',
    '[data-cc-container]',
    '.infomoney-currency-converter-wrapper'
  ];

  const elements: HTMLElement[] = [];

  selectors.forEach(selector => {
    const found = document.querySelectorAll<HTMLElement>(selector);
    found.forEach(el => {
      if (!el.dataset.initialized) {
        elements.push(el);
      }
    });
  });

  return elements;
}

// Preparar props do componente baseado na configuração e elementos HTML
function prepareComponentProps(element: HTMLElement): CurrencyConverterProps {
  const config = window.INFOMONEY_CC_CONFIG || {};
  
  // Moedas padrão
  const defaultCurrencies: Currency[] = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'BRL', symbol: 'R$', name: 'Brazilian Real' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  ];

  // Obter moedas base e destino dos data attributes ou config
  const baseCurrencyCode = element.dataset.baseCurrency || config.baseCurrency || 'USD';
  const targetCurrencyCode = element.dataset.targetCurrency || config.targetCurrency || 'BRL';

  const fromCurrency = defaultCurrencies.find(c => c.code === baseCurrencyCode) || defaultCurrencies[0];
  const toCurrency = defaultCurrencies.find(c => c.code === targetCurrencyCode) || defaultCurrencies[1];

  // Calcular rate a partir de exchangeRates se disponível
  let rate: number | undefined;
  if (config.exchangeRates && Object.keys(config.exchangeRates).length > 0) {
    const toRate = config.exchangeRates[toCurrency.code] ?? 1;
    const fromRate = config.exchangeRates[fromCurrency.code] ?? 1;
    rate = toRate / fromRate;
  } else {
    // Fallback rates
    const fallbackRates: Record<string, number> = {
      USD: 1,
      BRL: 5.0,
      EUR: 0.9,
      GBP: 0.8,
      JPY: 150.0,
    };
    const toRate = fallbackRates[toCurrency.code] ?? 1;
    const fromRate = fallbackRates[fromCurrency.code] ?? 1;
    rate = toRate / fromRate;
  }

  // Preparar converterData se houver exchangeRates
  let converterData: CurrencyConverterData | undefined;
  if (config.exchangeRates && Object.keys(config.exchangeRates).length > 0) {
    converterData = {
      currencies: defaultCurrencies,
      exchangeRates: config.exchangeRates,
      lastUpdated: config.lastUpdated || new Date().toLocaleString('pt-BR'),
    };
  }

  // Handlers
  const handleFromValueChange = (value: number) => {
    console.log('From value changed:', value);
  };

  const handleToValueChange = (value: number) => {
    console.log('To value changed:', value);
  };

  const handleFromCurrencyChange = (currency: Currency) => {
    console.log('From currency changed:', currency);
    element.dataset.baseCurrency = currency.code;
  };

  const handleToCurrencyChange = (currency: Currency) => {
    console.log('To currency changed:', currency);
    element.dataset.targetCurrency = currency.code;
  };

  const handleSwap = (payload: any) => {
    console.log('Swap:', payload);
    const temp = element.dataset.baseCurrency;
    element.dataset.baseCurrency = element.dataset.targetCurrency;
    element.dataset.targetCurrency = temp;
  };

  return {
    fromValue: 1,
    toValue: 0,
    fromCurrency,
    toCurrency,
    rate,
    currencies: defaultCurrencies,
    exchangeRates: config.exchangeRates,
    lastUpdated: config.lastUpdated,
    onFromValueChange: handleFromValueChange,
    onToValueChange: handleToValueChange,
    onFromCurrencyChange: handleFromCurrencyChange,
    onToCurrencyChange: handleToCurrencyChange,
    onSwap: handleSwap,
    converterData,
  };
}

// Renderizar componente em um elemento HTML
function renderComponent(element: HTMLElement, props: CurrencyConverterProps): void {
  const containerId = element.id || `currency-converter-${Math.random().toString(36).substr(2, 9)}`;
  if (!element.id) {
    element.id = containerId;
  }

  // Adicionar classe wrapper se não tiver
  if (!element.classList.contains('infomoney-currency-converter-wrapper')) {
    element.classList.add('infomoney-currency-converter-wrapper');
  }

  // Verificar se já existe root para este elemento
  let root: Root | undefined = rootCache.get(containerId);

  if (root) {
    // Tentar re-renderizar
    try {
      root.render(
        React.createElement(StrictMode, null,
          React.createElement(DeviceProvider, null,
            React.createElement(ResponsiveProvider, null,
              React.createElement(SkeletonProvider, null,
                React.createElement(CurrencyConverter, props)
              )
            )
          )
        )
      );
      return;
    } catch (error) {
      console.warn(`Root inválido para ${containerId}, recriando...`, error);
      rootCache.delete(containerId);
      root = undefined;
    }
  }

  // Criar novo root se não existir
  if (!root) {
    try {
      root = createRoot(element);
      rootCache.set(containerId, root);

      root.render(
        React.createElement(StrictMode, null,
          React.createElement(DeviceProvider, null,
            React.createElement(ResponsiveProvider, null,
              React.createElement(SkeletonProvider, null,
                React.createElement(CurrencyConverter, props)
              )
            )
          )
        )
      );

      // Marcar como inicializado
      element.dataset.initialized = 'true';
      console.log(`CurrencyConverter: Componente inicializado em ${containerId}`);
    } catch (error) {
      console.log(`Erro ao criar root para ${containerId}:`, error);
      rootCache.delete(containerId);
    }
  }
}

// Componente principal que busca e renderiza os conversores
export const CurrencyCurrentComponent = {
  /**
   * Inicializa todos os conversores de moeda encontrados na página
   */
  init: (): void => {
    // Verificar se os imports foram carregados
    if (!verifyImports()) {
      console.log('CurrencyConverter: Não foi possível inicializar - componentes não encontrados');
      return;
    }

    // Buscar elementos HTML
    const elements = findCurrencyConverterElements();

    if (elements.length === 0) {
      console.log('CurrencyConverter: Nenhum elemento encontrado para inicializar');
      return;
    }

    console.log(`CurrencyConverter: Encontrados ${elements.length} elemento(s) para inicializar`);

    // Renderizar cada elemento
    elements.forEach((element) => {
      try {
        const props = prepareComponentProps(element);
        renderComponent(element, props);
      } catch (error) {
        console.log('Erro ao inicializar componente:', error);
      }
    });
  },

  /**
   * Inicializa um conversor específico por ID ou elemento
   */
  initElement: (elementOrId: HTMLElement | string): void => {
    if (!verifyImports()) {
      console.log('CurrencyConverter: Não foi possível inicializar - componentes não encontrados');
      return;
    }

    let element: HTMLElement | null = null;

    if (typeof elementOrId === 'string') {
      element = document.getElementById(elementOrId);
    } else {
      element = elementOrId;
    }

    if (!element) {
      console.log(`CurrencyConverter: Elemento não encontrado: ${elementOrId}`);
      return;
    }

    if (element.dataset.initialized) {
      console.log('CurrencyConverter: Elemento já inicializado');
      return;
    }

    try {
      const props = prepareComponentProps(element);
      renderComponent(element, props);
    } catch (error) {
      console.log('Erro ao inicializar componente:', error);
    }
  },
};

// Auto-inicialização quando o DOM estiver pronto
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      CurrencyCurrentComponent.init();
    });
  } else {
    // DOM já está pronto
    CurrencyCurrentComponent.init();
  }
}