# Exemplo de implementação: Hook de resposta + consolidação

## O que foi implementado e validado

### 1. Hook `useCurrencyConverterData` (em CurrencyConverter.tsx)

- **Assinatura:** `useCurrencyConverterData(currencyCodes, baseCurrency?, options?)`
- **Retorno:** `{ data, loading, error, retry }`
- **Uso:** O componente chama apenas este hook; o serviço de API (`currencyService`) fica externo e é acessado só dentro do hook.

```ts
// Exemplo de uso no componente
const { data: loadedData } = useCurrencyConverterData(
  currencyCodesToFetch,
  "USD",
  { skip: !!converterData }
);
const currencies = converterData?.currencies ?? loadedData?.currencies ?? propCurrencies;
```

- **Comportamento:** Se `options.skip` for true (ex.: quando `converterData` é passado), não faz fetch. Em erro, agenda retry após 3s e atualiza `retryTrigger` para o effect rodar de novo. `retry()` permite tentar manualmente.

### 2. Refatoração do CurrencyConverter

- Removido: `useState(loadedData)`, `useState(hasTriedLoadApi)`, `retryTimeoutRef` e o `useLayoutEffect` que chamava `currencyService.getCurrencyConverterData` diretamente.
- Incluído: Uso de `useCurrencyConverterData(currencyCodesToFetch, "USD", { skip: !!converterData })` e derivação de `currencies`/`exchangeRates`/`lastUpdated` a partir de `loadedData` como antes.

### 3. Validação

- **Build:** `npm run build` concluído com sucesso (Vite, 49 módulos).
- **Linter:** Sem erros; tipos ajustados (`ReadonlyArray<CurrencyCode>` no hook para aceitar `DEFAULT_CURRENCY_CODES`).
- **Testes:** Os testes existentes mockam `currencyService.getCurrencyConverterData`; o hook chama o mesmo método, então os mocks continuam válidos.

## Próximos passos (plano de 3 arquivos)

Para chegar aos 3 arquivos (CurrencyConverter.tsx, types.ts, index.ts):

1. Inline em CurrencyConverter.tsx: helpers (getCurrentDateTime, getCountryCodeByCurrency, formatNumber, getDecimals, parseFormattedNumber, sanitizeRawInput, calculateRateFromExchangeRates, calculateExchangeRate), FlagIcon, ChevronIcon, Skeleton, CurrencyConverterSkeleton, CurrencyInput/CurrencyDropdown, CurrencySelector/CurrencyRateInline.
2. Remover: CurrencyInput.tsx, CurrencySeletor.tsx, FlagIcon.tsx, ChevronIcon.tsx, components/Skeleton/*, utils/* (os usados pelo componente).
3. Manter types.ts e index.ts; index reexporta apenas o que for público a partir de CurrencyConverter e types.

O hook de resposta já está em uso e validado; a consolidação dos demais arquivos segue o plano em `.cursor/plans/consolidar_em_3_arquivos_eba5bd31.plan.md`.
