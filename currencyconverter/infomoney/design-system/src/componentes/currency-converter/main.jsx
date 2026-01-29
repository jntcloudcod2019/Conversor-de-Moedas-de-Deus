import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CurrencyConverter } from './CurrencyConverter'

// Busca configuração do WordPress se disponível
const config = window.INFOMONEY_CC_CONFIG || {};

// Props padrão - devem ser injetadas via wp_localize_script no WordPress
const defaultProps = {
  fromValue: 1,
  toValue: 0,
  fromCurrency: { code: config.baseCurrency || 'USD', symbol: '$', name: 'US Dollar' },
  toCurrency: { code: config.targetCurrency || 'BRL', symbol: 'R$', name: 'Brazilian Real' },
  rate: 5.0,
  currencies: [],
  onFromValueChange: () => {},
  onToValueChange: () => {},
  onFromCurrencyChange: () => {},
  onToCurrencyChange: () => {},
  onSwap: () => {},
};

// Tenta encontrar o container padrão ou usa 'root'
const containerId = config.containerId || 'infomoney-currency-converter-root';
const container = document.getElementById(containerId) || document.getElementById('root');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <CurrencyConverter {...defaultProps} />
    </StrictMode>,
  );
} else {
  console.log(`Container "${containerId}" ou "root" não encontrado`);
}
