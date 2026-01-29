export type CurrencyCode = 'BRL' | 'USD' |'EUR' |'GBP' |'JPY' 

export type Device = 'web' | 'mobile';


export interface Currency {
  code: string;
  symbol: string;
  name: string;
}

export interface SwapPayload {
  fromValue: number;
  toValue: number;
  hasFromInput: boolean;
  hasToInput: boolean;
}

/**
 * Objeto completo para usar no CurrencyConverter
 * Gerado a partir dos dados da API pelo AutoMapper
 */
export interface CurrencyConverterData {
  currencies: Currency[];
  exchangeRates: Record<string, number>;
  lastUpdated: string;
}

export interface CurrencyConverterProps {
  fromValue: number;
  toValue: number;
  fromCurrency: Currency;
  toCurrency: Currency;
  rate?: number; // Opcional: pode ser calculado a partir de exchangeRates
  currencies: Currency[];
  exchangeRates?: Record<string, number>; // Taxas de câmbio da API (gerado pelo AutoMapper)
  device?: Device;
  lastUpdated?: string;
  onFromValueChange: (value: number) => void;
  onToValueChange?: (value: number) => void;
  onFromCurrencyChange: (currency: Currency) => void;
  onToCurrencyChange: (currency: Currency) => void;
  onSwap: (payload: SwapPayload) => void;
  // Opção alternativa: receber o objeto completo do AutoMapper
  converterData?: CurrencyConverterData;
}

/**
 * Interface de contrato para a função initCurrencyConverter
 * Garante que as props sejam validadas antes de passar para o React
 */
export interface InitCurrencyConverterParams {
  containerId: string;
  props: CurrencyConverterProps;
}

/**
 * Interface de contrato para validação de props
 * Usada para garantir que todas as props obrigatórias estejam presentes
 */
export interface ValidatedCurrencyConverterProps extends Required<Pick<CurrencyConverterProps, 
  'fromValue' | 'toValue' | 'fromCurrency' | 'toCurrency' | 'currencies' | 
  'onFromValueChange' | 'onFromCurrencyChange' | 'onToCurrencyChange' | 'onSwap'
>> {
  rate?: number;
  onToValueChange?: (value: number) => void;
  exchangeRates?: Record<string, number>;
  device?: Device;
  lastUpdated?: string;
  converterData?: CurrencyConverterData;
}
