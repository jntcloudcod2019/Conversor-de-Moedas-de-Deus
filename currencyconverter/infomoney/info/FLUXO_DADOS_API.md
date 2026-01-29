# Fluxo de Dados da API para o Frontend

Este documento descreve o processo completo de como os dados retornados da API são processados e refletidos no frontend.

## 📊 Fluxo Completo

```
1. CurrencyConverter inicia
   ↓
2. currencyService.getMultipleCurrencyValues(['BRL', 'USD', 'EUR', 'GBP', 'JPY', 'CNY'])
   ↓
3. Verifica Cache (15 min)
   ├─ Cache válido? → Retorna cache (FIM)
   └─ Cache expirado/inexistente? → Continua
   ↓
4. Requisições Paralelas (timeout 20s)
   ├─ getCurrencyValues('BRL')
   ├─ getCurrencyValues('USD')
   ├─ getCurrencyValues('EUR')
   ├─ getCurrencyValues('GBP')
   ├─ getCurrencyValues('JPY')
   └─ getCurrencyValues('CNY')
   ↓
5. Retorna Record<CurrencyCode, CurrencyValuesResponseItem | null>
   {
     BRL: { symbol: 'BRL', tradeDate: '...', bid: 5.2, ask: 5.3, change: 0.5 },
     USD: { symbol: 'USD', tradeDate: '...', bid: 1.0, ask: 1.0, change: 0 },
     EUR: { symbol: 'EUR', tradeDate: '...', bid: 0.9, ask: 0.91, change: -0.2 },
     ...
   }
   ↓
6. CurrencyConverter processa os dados
   ↓
7. Converte para AllCurrenciesContract
   ↓
8. CurrencyMapper.mapContractToConverterDataAsync()
   ↓
9. Retorna CurrencyConverterData
   ↓
10. setApiLoadedData(data) → Atualiza estado React
   ↓
11. Componente re-renderiza com novos dados
   ↓
12. Dados refletidos no UI
```

---

## 🔄 Processo Detalhado

### **Etapa 1: Inicialização do Componente**

```typescript
// CurrencyConverter.tsx (linha 156-158)
React.useEffect(() => {
  if (!converterData && currencyCodesToFetch.length > 0) {
    setIsLoadingApi(true);
```

**O que acontece:**
- Componente verifica se não tem `converterData` fornecido via props
- Se não tiver, inicia o carregamento da API
- Define `isLoadingApi = true` (mostra skeleton)

---

### **Etapa 2: Chamada ao Serviço de API**

```typescript
// CurrencyConverter.tsx (linha 162-163)
currencyService.getMultipleCurrencyValues(currencyCodesToFetch)
```

**O que acontece:**
- Chama `currencyService.getMultipleCurrencyValues(['BRL', 'USD', 'EUR', 'GBP', 'JPY', 'CNY'])`
- O serviço verifica cache primeiro (15 minutos)
- Se cache válido, retorna imediatamente
- Se cache expirado, faz requisições em paralelo

---

### **Etapa 3: Requisições Paralelas (se necessário)**

```typescript
// currency-service.ts
const promises = validCurrencyCodes.map(async (code) => {
  const response = await this.getCurrencyValues(code);
  // Retorna [code, response.result[0]]
});
```

**O que acontece:**
- 6 requisições HTTP em paralelo (uma para cada moeda)
- Timeout de 20 segundos para todas
- Cada requisição retorna `CurrencyValuesResponseItem`

**Formato de retorno:**
```typescript
{
  BRL: {
    symbol: 'BRL',
    tradeDate: '2024-01-15T10:30:00Z',
    bid: 5.20,
    ask: 5.30,
    change: 0.5
  },
  USD: { ... },
  EUR: { ... },
  // ...
}
```

---

### **Etapa 4: Conversão para Formato Interno**

```typescript
// CurrencyConverter.tsx (linha 164-193)
currencyService
  .getMultipleCurrencyValues(currencyCodesToFetch)
  .then((currencyValuesMap) => {
    // Converte CurrencyValuesResponseItem → CurrencyApiResponse
    const currencies: Array<{ code: string; apiData: CurrencyApiResponse }> = [];
    
    Object.entries(currencyValuesMap).forEach(([code, item]) => {
      if (item) {
        const apiData: CurrencyApiResponse = {
          symbol: item.symbol || code,
          tradeDate: item.tradeDate || new Date().toISOString(),
          bid: item.bid,
          ask: item.ask,
          change: item.change || 0,
          changeMonth: 0,
          changeYear: 0,
          change52w: undefined,
        };
        
        currencies.push({ code: code as CurrencyCode, apiData });
      }
    });
    
    // Cria contrato
    const contract: AllCurrenciesContract = { currencies };
    
    // Mapeia para CurrencyConverterData
    return CurrencyMapper.mapContractToConverterDataAsync(contract, 'USD');
  })
```

**O que acontece:**
- Converte `CurrencyValuesResponseItem` (formato da API) para `CurrencyApiResponse` (formato interno)
- Cria `AllCurrenciesContract` com todas as moedas
- Chama `CurrencyMapper` para processar

---

### **Etapa 5: Processamento pelo CurrencyMapper**

```typescript
// currencyMapper.ts - mapContractToConverterDataAsync()
static async mapContractToConverterDataAsync(
  contract: AllCurrenciesContract,
  baseCurrency: string = 'USD'
): Promise<CurrencyConverterData | null>
```

**Processo interno:**

#### 5.1. Mapeia Moedas
```typescript
const currencies = this.mapApiResponsesToCurrencies(contract.currencies);
// Retorna: Currency[]
// [
//   { code: 'BRL', symbol: 'R$', name: 'Real Brasileiro' },
//   { code: 'USD', symbol: '$', name: 'Dólar Americano' },
//   ...
// ]
```

#### 5.2. Calcula Taxas de Câmbio
```typescript
const exchangeRatesResult = await calculateExchangeRatesFromBidAsk({
  currencies: contract.currencies.map(...),
  baseCurrency: 'USD',
});
// Retorna: { exchangeRates: Record<string, number> }
// {
//   'USD': 1.0,
//   'BRL': 5.25,  // (bid + ask) / 2 / baseMidRate
//   'EUR': 0.91,
//   ...
// }
```

#### 5.3. Calcula Data Mais Recente
```typescript
const lastUpdated = await calculateLatestDate({
  tradeDates: ['2024-01-15T10:30:00Z', '2024-01-15T10:29:00Z', ...],
  fallbackDate: new Date(),
});
// Retorna: "15/01/2024, 10:30"
```

#### 5.4. Retorna CurrencyConverterData
```typescript
return {
  currencies: Currency[],           // Lista de moedas com símbolos e nomes
  exchangeRates: Record<string, number>, // Taxas calculadas
  lastUpdated: string,              // Data formatada
};
```

---

### **Etapa 6: Atualização do Estado React**

```typescript
// CurrencyConverter.tsx (linha 195-198)
.then((data) => {
  if (data) {
    setApiLoadedData(data);  // ← Atualiza estado React
  }
})
.finally(() => {
  setIsLoadingApi(false);     // ← Remove skeleton
});
```

**O que acontece:**
- `setApiLoadedData(data)` atualiza o estado `apiLoadedData`
- `setIsLoadingApi(false)` remove o skeleton
- React detecta mudança de estado e re-renderiza o componente

---

### **Etapa 7: Priorização de Dados**

```typescript
// CurrencyConverter.tsx (linha 210-213)
// Prioridade: converterData > apiLoadedData > props
const currencies = converterData?.currencies ?? apiLoadedData?.currencies ?? propCurrencies;
const exchangeRates = converterData?.exchangeRates ?? apiLoadedData?.exchangeRates ?? propExchangeRates;
const lastUpdated = converterData?.lastUpdated ?? apiLoadedData?.lastUpdated ?? propLastUpdated;
```

**Ordem de prioridade:**
1. **`converterData`** (se fornecido via props) - maior prioridade
2. **`apiLoadedData`** (dados carregados da API) - segunda prioridade
3. **`props`** (props individuais) - fallback

---

### **Etapa 8: Cálculo da Taxa de Câmbio**

```typescript
// CurrencyConverter.tsx (linha 218-239)
React.useEffect(() => {
  if (exchangeRates && Object.keys(exchangeRates).length > 0) {
    calculateRateFromExchangeRates({
      fromCurrencyCode: fromCurrency.code,  // Ex: 'USD'
      toCurrencyCode: toCurrency.code,      // Ex: 'BRL'
      exchangeRates,                        // { USD: 1.0, BRL: 5.25, ... }
      fallbackRate: 1,
    }).then((calculatedRate) => {
      if (calculatedRate !== null) {
        setRate(calculatedRate);  // Ex: 5.25 (1 USD = 5.25 BRL)
      }
    });
  }
}, [propRate, exchangeRates, fromCurrency.code, toCurrency.code]);
```

**O que acontece:**
- Calcula taxa de câmbio entre `fromCurrency` e `toCurrency`
- Usa `exchangeRates` para fazer a conversão
- Atualiza estado `rate` que será usado nos cálculos

**Exemplo:**
- `fromCurrency = USD` (exchangeRates['USD'] = 1.0)
- `toCurrency = BRL` (exchangeRates['BRL'] = 5.25)
- `rate = 5.25 / 1.0 = 5.25`

---

### **Etapa 9: Cálculo dos Valores de Display**

```typescript
// CurrencyConverter.tsx (linha 241-260)
React.useEffect(() => {
  calculateDisplayValues({
    fromValue,
    toValue,
    fromCurrencyCode: fromCurrency.code,
    toCurrencyCode: toCurrency.code,
    exchangeRates,
    rate,
  }).then((display) => {
    if (display) {
      setDisplayFrom(display.displayFrom);  // Ex: "1,00"
      setDisplayTo(display.displayTo);      // Ex: "5,25"
    }
  });
}, [fromValue, toValue, fromCurrency.code, toCurrency.code, exchangeRates, rate]);
```

**O que acontece:**
- Formata valores para exibição no formato brasileiro
- `displayFrom`: valor formatado do input "FROM" (Ex: "1,00")
- `displayTo`: valor formatado do input "TO" (Ex: "5,25")

---

### **Etapa 10: Renderização no UI**

Os dados são refletidos em vários lugares do componente:

#### 10.1. Dropdown de Moedas
```typescript
// CurrencyConverter.tsx (linha 613, 634, 678, 715)
<InputCurrencyDropdown
  currencies={currencies}  // ← Lista de moedas da API
  selectedCurrency={fromCurrency}
  onCurrencyChange={handleFromCurrencyChange}
/>
```

#### 10.2. Taxa de Câmbio
```typescript
// CurrencyConverter.tsx (linha 645, 738)
1 {fromCurrency.code} = {rate.toFixed(2)} {toCurrency.code} · Atualizado em {lastUpdatedLabel}
// Exibe: "1 USD = 5.25 BRL · Atualizado em 15/01/2024, 10:30"
```

#### 10.3. Valores dos Inputs
```typescript
// CurrencyConverter.tsx
<CurrencyInput
  value={displayFrom}  // ← Valor formatado
  currency={fromCurrency}
  onChange={handleFromInputChange}
/>
```

---

## 🔄 Re-renderização Automática

Quando `apiLoadedData` é atualizado:

1. **React detecta mudança de estado** (`setApiLoadedData`)
2. **Componente re-renderiza** automaticamente
3. **Novos dados são aplicados:**
   - `currencies` atualiza dropdowns
   - `exchangeRates` atualiza cálculos
   - `rate` atualiza taxa exibida
   - `lastUpdated` atualiza timestamp
4. **UI reflete os novos dados** instantaneamente

---

## 📝 Resumo do Fluxo

| Etapa | Entrada | Processamento | Saída |
|-------|---------|---------------|-------|
| 1. API | `['BRL', 'USD', ...]` | Requisições paralelas | `Record<CurrencyCode, CurrencyValuesResponseItem>` |
| 2. Conversão | `CurrencyValuesResponseItem` | Mapeamento | `CurrencyApiResponse` |
| 3. Contrato | `CurrencyApiResponse[]` | Agrupamento | `AllCurrenciesContract` |
| 4. Mapper | `AllCurrenciesContract` | Processamento | `CurrencyConverterData` |
| 5. Estado | `CurrencyConverterData` | `setApiLoadedData` | Estado React atualizado |
| 6. Priorização | `apiLoadedData` + `props` | Merge | Dados finais |
| 7. Cálculos | `exchangeRates` | Cálculo de taxa | `rate` |
| 8. Formatação | `rate` + `values` | Formatação | `displayFrom`, `displayTo` |
| 9. Renderização | Dados finais | React render | UI atualizada |

---

## 🎯 Pontos Importantes

1. **Cache de 15 minutos**: Dados são armazenados e reutilizados
2. **Requisições paralelas**: Todas as moedas são buscadas simultaneamente
3. **Timeout de 20s**: Proteção contra requisições travadas
4. **Fallback em erro**: Se API falhar, usa cache como fallback
5. **Re-renderização automática**: React atualiza UI quando dados mudam
6. **Priorização**: `converterData` > `apiLoadedData` > `props`
