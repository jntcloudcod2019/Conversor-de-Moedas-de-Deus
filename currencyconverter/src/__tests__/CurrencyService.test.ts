/**
 * Testes para CurrencyService
 * Foca em casos de configuração e comportamento do serviço
 * 
 * IMPORTANTE: Este teste valida o comportamento quando a Base URL não está configurada.
 * O erro "CurrencyService: Base URL for API is not configured. Check environment settings."
 * é logado quando nem window.InfoMoneyPage nem o fallback de ambiente fornecem uma URL.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// Mock das dependências ANTES de importar qualquer coisa relacionada ao serviço
// Isso é crítico porque CurrencyService é instanciado quando o módulo é carregado
vi.mock('../market-data- currency-converter/currency-config', async () => {
  const actual = await vi.importActual('../market-data- currency-converter/currency-config')
  return {
    ...actual,
    getCurrencyApiConfig: vi.fn(),
  }
})

vi.mock('../market-data- currency-converter/currency-base-service', async () => {
  const actual = await vi.importActual('../market-data- currency-converter/currency-base-service')
  return {
    ...actual,
    default: {
      ...actual.default,
      getConfig: vi.fn(),
    },
  }
})

vi.mock('../services/currency-environment', async () => {
  const actual = await vi.importActual('../services/currency-environment')
  return {
    ...actual,
    getEnvironmentApiConfig: vi.fn(),
  }
})

// Importar os mocks para configurá-los
import { getCurrencyApiConfig } from '../market-data- currency-converter/currency-config'
import BaseService from '../market-data- currency-converter/currency-base-service'
import { getEnvironmentApiConfig } from '../services/currency-environment'

// Importar o serviço após os mocks
// NOTA: currencyService é uma instância singleton, mas podemos criar novas instâncias para teste
import { CurrencyService } from '../market-data- currency-converter/currency-service'

describe('CurrencyService - Configuração de Base URL', () => {
  const originalConsoleLog = console.log
  const consoleLogSpy = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    console.log = consoleLogSpy
  })

  afterEach(() => {
    console.log = originalConsoleLog
    vi.restoreAllMocks()
  })

  it('deve logar aviso quando Base URL não está configurada (sem window.InfoMoneyPage e sem ambiente)', () => {
    // Configura mocks para simular ausência de configuração
    ;(BaseService.getConfig as any).mockReturnValue({
      url: '',
      subscriptionkey: '',
    })

    ;(getEnvironmentApiConfig as any).mockReturnValue({
      baseUrl: '',
      endpoint: '/currencies',
      subscriptionKey: undefined,
    })

    ;(getCurrencyApiConfig as any).mockImplementation(() => {
      const base = BaseService.getConfig()
      if (base && base.url) {
        return {
          baseUrl: base.url.replace(/\/+$/, ''),
          endpoint: '/currencies',
          subscriptionKey: base.subscriptionkey || undefined,
        }
      }
      const env = getEnvironmentApiConfig()
      return {
        baseUrl: (env && env.baseUrl) || '',
        endpoint: (env && env.endpoint) ?? '/currencies',
        subscriptionKey: (env && env.subscriptionKey) || undefined,
      }
    })

    // Cria nova instância do serviço (que deve logar o aviso)
    const service = new CurrencyService()

    // Verifica que o console.log foi chamado com a mensagem correta
    expect(consoleLogSpy).toHaveBeenCalledWith(
      'CurrencyService: Base URL for API is not configured. Check environment settings.'
    )

    // Verifica que o serviço foi criado (não lançou exceção)
    expect(service).toBeInstanceOf(CurrencyService)
  })

  it('deve funcionar normalmente quando Base URL está configurada via window.InfoMoneyPage', () => {
    // Configura mock com URL válida
    ;(BaseService.getConfig as any).mockReturnValue({
      url: 'https://api.example.com',
      subscriptionkey: 'test-key',
    })

    ;(getCurrencyApiConfig as any).mockImplementation(() => {
      const base = BaseService.getConfig()
      if (base && base.url) {
        return {
          baseUrl: base.url.replace(/\/+$/, ''),
          endpoint: '/currencies',
          subscriptionKey: base.subscriptionkey || undefined,
        }
      }
      const env = getEnvironmentApiConfig()
      return {
        baseUrl: (env && env.baseUrl) || '',
        endpoint: (env && env.endpoint) ?? '/currencies',
        subscriptionKey: (env && env.subscriptionKey) || undefined,
      }
    })

    // Cria nova instância do serviço
    const service = new CurrencyService()

    // Verifica que NÃO foi logado o aviso
    expect(consoleLogSpy).not.toHaveBeenCalledWith(
      'CurrencyService: Base URL for API is not configured. Check environment settings.'
    )

    // Verifica que o serviço foi criado
    expect(service).toBeInstanceOf(CurrencyService)
  })

  it('deve funcionar normalmente quando Base URL está configurada via ambiente (fallback)', () => {
    // Configura mocks: BaseService retorna vazio, mas ambiente retorna URL
    ;(BaseService.getConfig as any).mockReturnValue({
      url: '',
      subscriptionkey: '',
    })

    ;(getEnvironmentApiConfig as any).mockReturnValue({
      baseUrl: 'https://api-hml.xpi.com.br/infomoney-services-marketdata/v1/api/v1',
      endpoint: '/currencies',
      subscriptionKey: undefined,
    })

    ;(getCurrencyApiConfig as any).mockImplementation(() => {
      const base = BaseService.getConfig()
      if (base && base.url) {
        return {
          baseUrl: base.url.replace(/\/+$/, ''),
          endpoint: '/currencies',
          subscriptionKey: base.subscriptionkey || undefined,
        }
      }
      const env = getEnvironmentApiConfig()
      return {
        baseUrl: (env && env.baseUrl) || '',
        endpoint: (env && env.endpoint) ?? '/currencies',
        subscriptionKey: (env && env.subscriptionKey) || undefined,
      }
    })

    // Cria nova instância do serviço
    const service = new CurrencyService()

    // Verifica que NÃO foi logado o aviso
    expect(consoleLogSpy).not.toHaveBeenCalledWith(
      'CurrencyService: Base URL for API is not configured. Check environment settings.'
    )

    // Verifica que o serviço foi criado
    expect(service).toBeInstanceOf(CurrencyService)
  })

  it('deve logar aviso apenas uma vez por instância', () => {
    // Configura mocks para simular ausência de configuração
    ;(BaseService.getConfig as any).mockReturnValue({
      url: '',
      subscriptionkey: '',
    })

    ;(getEnvironmentApiConfig as any).mockReturnValue({
      baseUrl: '',
      endpoint: '/currencies',
      subscriptionKey: undefined,
    })

    ;(getCurrencyApiConfig as any).mockImplementation(() => {
      const base = BaseService.getConfig()
      if (base && base.url) {
        return {
          baseUrl: base.url.replace(/\/+$/, ''),
          endpoint: '/currencies',
          subscriptionKey: base.subscriptionkey || undefined,
        }
      }
      const env = getEnvironmentApiConfig()
      return {
        baseUrl: (env && env.baseUrl) || '',
        endpoint: (env && env.endpoint) ?? '/currencies',
        subscriptionKey: (env && env.subscriptionKey) || undefined,
      }
    })

    // Limpa o spy antes de criar a instância
    consoleLogSpy.mockClear()

    // Cria nova instância do serviço
    const service = new CurrencyService()

    // Verifica que o aviso foi logado exatamente uma vez
    const warningCalls = consoleLogSpy.mock.calls.filter(
      (call: any[]) => call[0] === 'CurrencyService: Base URL for API is not configured. Check environment settings.'
    )
    expect(warningCalls.length).toBe(1)

    // Verifica que o serviço foi criado
    expect(service).toBeInstanceOf(CurrencyService)
  })
})
