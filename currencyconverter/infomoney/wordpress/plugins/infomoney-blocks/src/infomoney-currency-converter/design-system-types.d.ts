/**
 * Declarações de tipos do Design System
 * 
 * Este arquivo declara os tipos exportados pelo build do design system
 * que são expostos globalmente via window.InfomoneyCurrencyConverter
 * 
 * Segue a documentação do React DOM: https://legacy.reactjs.org/docs/react-dom.html
 * e WordPress Blocks: https://developer.wordpress.org/block-editor/getting-started/fundamentals/
 */

declare global {
  interface Window {
    InfomoneyCurrencyConverter?: {
      /**
       * Componente React CurrencyConverter
       */
      CurrencyConverter: React.ComponentType<any>;
      
      /**
       * Função de inicialização que usa createRoot do React DOM
       * Segue a documentação: https://legacy.reactjs.org/docs/react-dom.html#createroot
       * 
       * @param containerId - ID do elemento HTML onde o componente será renderizado
       * @param props - Props do CurrencyConverter (validadas pelo design system)
       */
      initCurrencyConverter: (
        containerId: string,
        props: CurrencyConverterProps
      ) => void;
    };
    
    /**
     * Configuração global do conversor (opcional)
     */
    INFOMONEY_CC_CONFIG?: BlockConfig;
  }
}

/**
 * Interface Currency - contrato do design system
 */
export interface Currency {
  code: string;
  symbol: string;
  name: string;
}

/**
 * Interface SwapPayload - contrato do design system
 */
export interface SwapPayload {
  fromValue: number;
  toValue: number;
  hasFromInput: boolean;
  hasToInput: boolean;
}

/**
 * Interface CurrencyConverterProps - contrato principal do design system
 * Usado para validar props antes de passar para o React
 */
export interface CurrencyConverterProps {
  fromValue: number;
  toValue: number;
  fromCurrency: Currency;
  toCurrency: Currency;
  rate?: number;
  currencies: Currency[];
  exchangeRates?: Record<string, number>;
  device?: 'web' | 'mobile';
  lastUpdated?: string;
  onFromValueChange: (value: number) => void;
  onToValueChange?: (value: number) => void;
  onFromCurrencyChange: (currency: Currency) => void;
  onToCurrencyChange: (currency: Currency) => void;
  onSwap: (payload: SwapPayload) => void;
  converterData?: CurrencyConverterData;
}

/**
 * Interface CurrencyConverterData - contrato do design system
 */
export interface CurrencyConverterData {
  currencies: Currency[];
  exchangeRates: Record<string, number>;
  lastUpdated: string;
}

/**
 * Interface BlockConfig - configuração do bloco WordPress
 */
export interface BlockConfig {
  baseCurrency?: string;
  targetCurrency?: string;
  exchangeRates?: Record<string, number>;
  endpoint?: string;
  apiKey?: string;
}

/**
 * Interface CurrencyState - estado interno do bloco
 */
export interface CurrencyState {
  fromValue: number;
  toValue: number;
  fromCurrency: Currency;
  toCurrency: Currency;
  lastEdited: 'from' | 'to';
}

export {};
