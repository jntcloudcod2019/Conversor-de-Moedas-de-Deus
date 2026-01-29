import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { vi } from 'vitest'
import { Currency, CurrencyConverterProps, CurrencyConverterData } from '../types'

/**
 * Cria uma moeda mock
 */
export const createMockCurrency = (code: string, symbol: string, name: string): Currency => ({
  code,
  symbol,
  name,
})

/**
 * Cria exchangeRates mock
 */
export const createMockExchangeRates = (): Record<string, number> => ({
  BRL: 5.3789,
  USD: 1.0,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 150.0,
  CNY: 7.2,
})

/**
 * Cria CurrencyConverterData mock
 */
export const createMockConverterData = (): CurrencyConverterData => ({
  currencies: [
    createMockCurrency('BRL', 'R$', 'Real Brasileiro'),
    createMockCurrency('USD', '$', 'Dólar Americano'),
    createMockCurrency('EUR', '€', 'Euro'),
    createMockCurrency('GBP', '£', 'Libra Esterlina'),
    createMockCurrency('JPY', '¥', 'Iene Japonês'),
    createMockCurrency('CNY', '¥', 'Yuan Chinês'),
  ],
  exchangeRates: createMockExchangeRates(),
  lastUpdated: '23/01/2026 às 10:30',
})

/**
 * Cria props padrão para CurrencyConverter
 */
export const createMockProps = (overrides?: Partial<CurrencyConverterProps>): CurrencyConverterProps => {
  const defaultCurrencies = [
    createMockCurrency('BRL', 'R$', 'Real Brasileiro'),
    createMockCurrency('USD', '$', 'Dólar Americano'),
    createMockCurrency('EUR', '€', 'Euro'),
  ]

  return {
    fromValue: 100,
    toValue: 537.89,
    fromCurrency: createMockCurrency('BRL', 'R$', 'Real Brasileiro'),
    toCurrency: createMockCurrency('USD', '$', 'Dólar Americano'),
    rate: 5.3789,
    currencies: defaultCurrencies,
    exchangeRates: createMockExchangeRates(),
    device: 'web', // Fornece device por padrão para evitar detecção automática inconsistente nos testes
    lastUpdated: '23/01/2026 às 10:30',
    onFromValueChange: vi.fn(),
    onToValueChange: vi.fn(),
    onFromCurrencyChange: vi.fn(),
    onToCurrencyChange: vi.fn(),
    onSwap: vi.fn(),
    ...overrides,
  }
}

/**
 * Renderiza componente com providers necessários
 */
export const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, options)
}

/**
 * Aguarda um tempo específico (útil para aguardar efeitos assíncronos)
 */
export const waitForAsync = (ms: number = 0) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Fixtures de moedas comuns
 */
export const currencyFixtures = {
  BRL: createMockCurrency('BRL', 'R$', 'Real Brasileiro'),
  USD: createMockCurrency('USD', '$', 'Dólar Americano'),
  EUR: createMockCurrency('EUR', '€', 'Euro'),
  GBP: createMockCurrency('GBP', '£', 'Libra Esterlina'),
  JPY: createMockCurrency('JPY', '¥', 'Iene Japonês'),
  CNY: createMockCurrency('CNY', '¥', 'Yuan Chinês'),
}
