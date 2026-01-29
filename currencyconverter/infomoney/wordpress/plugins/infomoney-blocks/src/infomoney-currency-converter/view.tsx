/**
 * Frontend script do bloco – inicializa o CurrencyConverter em cada instância.
 *
 * Config, deps e ordem são resolvidos DENTRO do bloco:
 * - Config vem de data-config (render.php) > window.INFOMONEY_CC_CONFIG > {}
 * - ID do container vem do render.php (data-config + id no div)
 * - Não depende de PHP do plugin (enqueue, filters, etc.)
 * 
 * Segue a documentação do React DOM: https://legacy.reactjs.org/docs/react-dom.html
 * Usa as interfaces de contratos do design system via design-system-types.d.ts
 */

/// <reference path="./design-system-types.d.ts" />

/**
 * Interfaces como contratos - importadas do design system
 * As interfaces são declaradas em design-system-types.d.ts que referencia
 * os tipos exportados pelo build do design system
 */

(function () {
  let retryCount = 0;
  const MAX_RETRIES = 50;
  const TIMEOUT_MS = 5000; // 5 segundos para timeout total

  // Rastrear blocos que falharam para mostrar fallback
  const failedBlocks = new Set<string>();

  /**
   * Obtém a configuração do bloco seguindo a interface BlockConfig como contrato
   */
  function getBlockConfig(block: HTMLElement): BlockConfig {
    const raw = block.getAttribute('data-config');
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as BlockConfig;
        if (parsed && typeof parsed === 'object') return parsed;
      } catch {
        /* ignore */
      }
    }
    const global = (window as unknown as { INFOMONEY_CC_CONFIG?: BlockConfig }).INFOMONEY_CC_CONFIG;
    return global && typeof global === 'object' ? global : {};
  }

  /**
   * Mostra fallback HTML estático quando React não carrega
   */
  function showFallback(block: HTMLElement, error?: string) {
    const containerId = block.id || `infomoney-cc-${Math.random().toString(36).substr(2, 9)}`;
    if (failedBlocks.has(containerId)) return; // Já mostrou fallback
    failedBlocks.add(containerId);

    const fallback = block.querySelector<HTMLElement>('.infomoney-cc-fallback');
    if (!fallback) return;

    const messageEl = fallback.querySelector<HTMLElement>('.infomoney-cc-fallback-message');
    if (messageEl) {
      if (error) {
        messageEl.textContent = 'Erro ao carregar conversor. Recarregue a página.';
        messageEl.style.color = '#d63638';
      } else {
        messageEl.textContent = 'Conversor não disponível. Verifique sua conexão.';
      }
    }

    // Adicionar classe para estilização de erro
    block.classList.add('infomoney-cc-error');
    fallback.setAttribute('data-error', error || 'timeout');
  }

  /**
   * Verifica se o módulo React carregou
   * Segue a documentação do React DOM para verificação de módulos
   */
  function hasReactModule(): boolean {
    const win = window as unknown as {
      InfomoneyCurrencyConverter?: {
        initCurrencyConverter: (id: string, props: CurrencyConverterProps) => void;
      };
    };
    return !!win.InfomoneyCurrencyConverter?.initCurrencyConverter;
  }

  function initCurrencyConverters() {
    const hasModule = hasReactModule();
    
    if (!hasModule) {
      retryCount++;
      const elapsed = retryCount * 100;
      
      // Se passou do timeout, mostrar fallback para todos os blocos
      if (elapsed >= TIMEOUT_MS) {
        const blocks = document.querySelectorAll<HTMLElement>('.wp-block-infomoney-currency-converter');
        blocks.forEach((block) => {
          if (!block.dataset.initialized && !block.dataset.fallbackShown) {
            block.dataset.fallbackShown = 'true';
            showFallback(block, 'timeout');
          }
        });
        return;
      }
      
      if (retryCount < MAX_RETRIES) {
        setTimeout(initCurrencyConverters, 100);
      } else {
        // Máximo de retries atingido - mostrar fallback
        const blocks = document.querySelectorAll<HTMLElement>('.wp-block-infomoney-currency-converter');
        blocks.forEach((block) => {
          if (!block.dataset.initialized && !block.dataset.fallbackShown) {
            block.dataset.fallbackShown = 'true';
            showFallback(block, 'module_not_found');
          }
        });
      }
      return;
    }

    const blocks = document.querySelectorAll<HTMLElement>('.wp-block-infomoney-currency-converter');
    if (blocks.length === 0) return;

    blocks.forEach((block) => {
      if (block.dataset.initialized) return;
      block.dataset.initialized = 'true';

      const containerId = block.id || `infomoney-cc-${Math.random().toString(36).substr(2, 9)}`;
      if (!block.id) block.id = containerId;

      const config = getBlockConfig(block);
      const baseCurrency = (block.dataset.baseCurrency || config.baseCurrency || 'USD') as string;
      const targetCurrency = (block.dataset.targetCurrency || config.targetCurrency || 'BRL') as string;

      const currencies: Currency[] = [
        { code: 'USD', symbol: '$', name: 'US Dollar' },
        { code: 'BRL', symbol: 'R$', name: 'Brazilian Real' },
        { code: 'EUR', symbol: '€', name: 'Euro' },
        { code: 'GBP', symbol: '£', name: 'British Pound' },
        { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
      ];

      const fromCurrency: Currency = currencies.find((c) => c.code === baseCurrency) || currencies[0];
      const toCurrency: Currency = currencies.find((c) => c.code === targetCurrency) || currencies[1];

      const state: CurrencyState = {
        fromValue: 1,
        toValue: 0,
        fromCurrency,
        toCurrency,
        lastEdited: 'from',
      };

      const calculateRate = (from: Currency, to: Currency): number => {
        const rates = config.exchangeRates && Object.keys(config.exchangeRates).length > 0
          ? config.exchangeRates
          : { USD: 1, BRL: 5, EUR: 0.9, GBP: 0.8, JPY: 150 };
        const toRate = rates[to.code] ?? 1;
        const fromRate = rates[from.code] ?? 1;
        return fromRate === 0 ? 1 : toRate / fromRate;
      };

      const getEffectiveValues = () => {
        const rate = calculateRate(state.fromCurrency, state.toCurrency);
        const effectiveFrom = state.lastEdited === 'to' ? state.toValue / rate : state.fromValue;
        const effectiveTo = state.lastEdited === 'from' ? state.fromValue * rate : state.toValue;
        return { effectiveFrom, effectiveTo, rate };
      };

      const rerender = () => {
        requestAnimationFrame(() => {
          // Verificar se o container ainda existe antes de re-renderizar
          const containerElement = document.getElementById(containerId);
          if (!containerElement || !containerElement.isConnected) {
            console.warn(`Container "${containerId}" não encontrado ou desconectado durante rerender`);
            return;
          }

          // Verificar se o módulo ainda existe
          if (!hasReactModule()) {
            return;
          }

          const { effectiveFrom, effectiveTo, rate } = getEffectiveValues();
          const win = window as unknown as {
            InfomoneyCurrencyConverter: {
              initCurrencyConverter: (id: string, props: CurrencyConverterProps) => void;
            };
          };

          // Criar objeto de props seguindo a interface CurrencyConverterProps como contrato
          const props: CurrencyConverterProps = {
            fromValue: effectiveFrom,
            toValue: effectiveTo,
            fromCurrency: state.fromCurrency,
            toCurrency: state.toCurrency,
            rate,
            currencies,
            exchangeRates: config.exchangeRates,
            onFromValueChange: handleFromValueChange,
            onToValueChange: handleToValueChange,
            onFromCurrencyChange: handleFromCurrencyChange,
            onToCurrencyChange: handleToCurrencyChange,
            onSwap: handleSwap,
          };

          try {
            win.InfomoneyCurrencyConverter.initCurrencyConverter(containerId, props);
          } catch (rerenderError) {
            console.error('Erro ao re-renderizar:', rerenderError);
          }
        });
      };

      const handleFromValueChange = (value: number) => {
        state.fromValue = value;
        state.lastEdited = 'from';
      };

      const handleToValueChange = (value: number) => {
        state.toValue = value;
        state.lastEdited = 'to';
      };

      const handleFromCurrencyChange = (currency: Currency): void => {
        state.fromCurrency = currency;
        state.lastEdited = 'from';
        rerender();
      };

      const handleToCurrencyChange = (currency: Currency): void => {
        state.toCurrency = currency;
        state.lastEdited = 'from';
        rerender();
      };

      const handleSwap = (payload: SwapPayload): void => {
        const t = state.fromCurrency;
        state.fromCurrency = state.toCurrency;
        state.toCurrency = t;
        state.fromValue = payload.toValue;
        state.toValue = payload.fromValue;
        state.lastEdited = 'from';
        rerender();
      };

      const { effectiveFrom, effectiveTo, rate } = getEffectiveValues();

      try {
        // Verificar novamente se o módulo existe antes de chamar
        if (!hasReactModule()) {
          showFallback(block, 'module_not_found');
          return;
        }

        const win = window as unknown as {
          InfomoneyCurrencyConverter: {
            initCurrencyConverter: (id: string, props: CurrencyConverterProps) => void;
          };
        };

        // Verificar se o container ainda existe antes de inicializar
        const containerElement = document.getElementById(containerId);
        if (!containerElement || !containerElement.isConnected) {
          console.warn(`Container "${containerId}" não encontrado ou desconectado do DOM`);
          return;
        }

        // Criar objeto de props seguindo a interface CurrencyConverterProps como contrato
        const props: CurrencyConverterProps = {
          fromValue: effectiveFrom,
          toValue: effectiveTo,
          fromCurrency: state.fromCurrency,
          toCurrency: state.toCurrency,
          rate,
          currencies,
          exchangeRates: config.exchangeRates,
          onFromValueChange: handleFromValueChange,
          onToValueChange: handleToValueChange,
          onFromCurrencyChange: handleFromCurrencyChange,
          onToCurrencyChange: handleToCurrencyChange,
          onSwap: handleSwap,
        };

        // Usar requestAnimationFrame para garantir que o DOM está pronto
        // Segue a documentação do React DOM: https://legacy.reactjs.org/docs/react-dom.html
        requestAnimationFrame(() => {
          // Verificar novamente se o container ainda existe
          const containerCheck = document.getElementById(containerId);
          if (!containerCheck || !containerCheck.isConnected) {
            console.warn(`Container "${containerId}" foi removido antes da inicialização`);
            return;
          }

          try {
            // Tentar inicializar o React com props tipadas seguindo a interface como contrato
            win.InfomoneyCurrencyConverter.initCurrencyConverter(containerId, props);
          } catch (initError) {
            console.error('Erro ao chamar initCurrencyConverter:', initError);
            showFallback(block, initError instanceof Error ? initError.message : 'init_error');
          }
        });

        // Se chegou aqui, React foi montado com sucesso - ocultar fallback
        const fallback = block.querySelector<HTMLElement>('.infomoney-cc-fallback');
        if (fallback) {
          fallback.style.display = 'none';
        }
        block.classList.remove('infomoney-cc-error');
        block.classList.add('infomoney-cc-loaded');
      } catch (e) {
        // Erro ao inicializar React - mostrar fallback
        console.error('Infomoney Currency Converter: Erro ao inicializar', e);
        block.dataset.initialized = '';
        showFallback(block, e instanceof Error ? e.message : 'initialization_error');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCurrencyConverters);
  } else {
    initCurrencyConverters();
  }
})();
