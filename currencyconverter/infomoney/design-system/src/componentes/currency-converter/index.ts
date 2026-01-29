// Importar CSS primeiro para garantir que seja incluído no build
import './index.css';

// Exportar componentes
export { CurrencyConverter } from "./CurrencyConverter";
export { CurrencyInput } from "./CurrencyInput";
export { CurrencySelector } from "./CurrencySeletor";
export { FlagIcon } from "./FlagIcon";
export { ChevronIcon } from "./ChevronIcon";

export type {
  Currency,
  CurrencyCode,
  CurrencyConverterProps,
  CurrencyConverterData,
  Device,
  SwapPayload,
  ValidatedCurrencyConverterProps,
  InitCurrencyConverterParams,
} from "./types";

// Exportar função de inicialização
export { initCurrencyConverter } from "./init";

// Exportar serviços
export { CurrencyMapper } from "./services/currencyMapper";
export * from "./services/currencyApi";

// Expor globalmente para WordPress (apenas no browser)
if (typeof window !== 'undefined') {
  // Carregar assincronamente para evitar problemas de ordem
  Promise.all([
    import("./CurrencyConverter"),
    import("./init")
  ]).then(([{ CurrencyConverter }, { initCurrencyConverter }]) => {
    (window as any).InfomoneyCurrencyConverter = {
      CurrencyConverter,
      initCurrencyConverter,
    };
  });
}
