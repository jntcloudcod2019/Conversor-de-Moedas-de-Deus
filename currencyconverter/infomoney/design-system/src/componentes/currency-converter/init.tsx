import React, { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { CurrencyConverter } from './CurrencyConverter';
import type { CurrencyConverterProps, ValidatedCurrencyConverterProps } from './types';

// Cache de roots para evitar recriar componentes
const rootCache = new Map<string, Root>();

/**
 * Valida as props do CurrencyConverter antes de renderizar
 * Garante que todas as props obrigatórias estejam presentes e válidas
 */
function validateProps(props: unknown): props is ValidatedCurrencyConverterProps {
  if (!props || typeof props !== 'object') {
    console.warn('initCurrencyConverter: props deve ser um objeto', props);
    return false;
  }

  const p = props as Record<string, unknown>;

  // Validar props obrigatórias
  if (typeof p.fromValue !== 'number' || isNaN(p.fromValue)) {
    console.warn('initCurrencyConverter: fromValue deve ser um número válido', p.fromValue);
    return false;
  }

  if (typeof p.toValue !== 'number' || isNaN(p.toValue)) {
    console.warn('initCurrencyConverter: toValue deve ser um número válido', p.toValue);
    return false;
  }

  if (!p.fromCurrency || typeof p.fromCurrency !== 'object' || !('code' in p.fromCurrency)) {
    console.warn('initCurrencyConverter: fromCurrency deve ser um objeto Currency válido', p.fromCurrency);
    return false;
  }

  if (!p.toCurrency || typeof p.toCurrency !== 'object' || !('code' in p.toCurrency)) {
    console.warn('initCurrencyConverter: toCurrency deve ser um objeto Currency válido', p.toCurrency);
    return false;
  }

  if (!Array.isArray(p.currencies) || p.currencies.length === 0) {
    console.warn('initCurrencyConverter: currencies deve ser um array não vazio', p.currencies);
    return false;
  }

  if (typeof p.onFromValueChange !== 'function') {
    console.warn('initCurrencyConverter: onFromValueChange deve ser uma função', p.onFromValueChange);
    return false;
  }

  if (typeof p.onFromCurrencyChange !== 'function') {
    console.warn('initCurrencyConverter: onFromCurrencyChange deve ser uma função', p.onFromCurrencyChange);
    return false;
  }

  if (typeof p.onToCurrencyChange !== 'function') {
    console.warn('initCurrencyConverter: onToCurrencyChange deve ser uma função', p.onToCurrencyChange);
    return false;
  }

  if (typeof p.onSwap !== 'function') {
    console.warn('initCurrencyConverter: onSwap deve ser uma função', p.onSwap);
    return false;
  }

  return true;
}

/**
 * Inicializa o CurrencyConverter em um elemento DOM
 * Segue a documentação do React DOM: https://legacy.reactjs.org/docs/react-dom.html
 * 
 * @param containerId - ID do elemento HTML onde o componente será renderizado
 * @param props - Props do CurrencyConverter (será validado antes de renderizar)
 */
export function initCurrencyConverter(
  containerId: string,
  props: CurrencyConverterProps | unknown
): void {
  // Validar containerId
  if (!containerId || typeof containerId !== 'string') {
    console.warn('initCurrencyConverter: containerId inválido', containerId);
    return;
  }

  // Validar props usando interface como contrato
  if (!validateProps(props)) {
    console.error('initCurrencyConverter: Props inválidas. Verifique o console para detalhes.', props);
    return;
  }

  // Props validadas - garantir tipagem correta
  const validatedProps = props as ValidatedCurrencyConverterProps;

  // Usar requestAnimationFrame para garantir que o DOM está pronto
  requestAnimationFrame(() => {
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`Elemento com ID "${containerId}" não encontrado`);
      rootCache.delete(containerId);
      return;
    }

    // Verificar se o container ainda está no DOM
    if (!container.isConnected) {
      console.warn(`Container "${containerId}" não está conectado ao DOM`);
      rootCache.delete(containerId);
      return;
    }

    // Adicionar classe wrapper para garantir estilos
    if (!container.classList.contains('infomoney-currency-converter-wrapper')) {
      container.classList.add('infomoney-currency-converter-wrapper');
    }

    // Verificar se já existe um root para este container
    let root: Root | undefined = rootCache.get(containerId);
    
    // Verificar se o root ainda é válido (container não foi removido do DOM)
    if (root) {
      try {
        // Verificar se o container ainda está no DOM antes de renderizar
        if (!container.isConnected) {
          throw new Error('Container desconectado do DOM');
        }
        
        // Tentar renderizar para verificar se o root ainda é válido
        root.render(
          React.createElement(StrictMode, null,
            React.createElement(CurrencyConverter, props)
          )
        );
        return; // Root válido, renderização bem-sucedida
      } catch (error) {
        console.warn(`Root inválido para ${containerId}, recriando...`, error);
        rootCache.delete(containerId);
        root = undefined;
      }
    }
    
    if (!root) {
      // Verificar novamente se o container ainda está no DOM
      if (!container.isConnected) {
        console.warn(`Container "${containerId}" foi desconectado antes de criar root`);
        return;
      }

      // Criar novo root
      try {
        root = createRoot(container);
        rootCache.set(containerId, root);
        
        // Renderizar pela primeira vez
        root.render(
          React.createElement(StrictMode, null,
            React.createElement(CurrencyConverter, validatedProps)
          )
        );
      } catch (error) {
        console.error(`Erro ao criar root para ${containerId}:`, error);
        rootCache.delete(containerId);
      }
    }
  });
}
