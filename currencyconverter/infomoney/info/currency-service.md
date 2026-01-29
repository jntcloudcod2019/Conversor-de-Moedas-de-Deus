# Documentação do CurrencyService

Este documento detalha o `CurrencyService` para integração de dados de cotação de moedas, alinhado à estrutura do WordPress `infomoney/v2/src/services/market-data/`.

## Visão Geral

O `CurrencyService` é um serviço TypeScript que fornece métodos para buscar:
- Cotações atuais de moedas
- Dados históricos diários
- Dados de gráficos históricos
- Dados intradiários (dentro do dia)

## Endpoints Utilizados

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `getCurrencyValues` | `market/currency/quote/last/{symbol}` | Cotação atual |
| `getDaily` | `currency/quote/daily/{symbol}` | Dados históricos diários |
| `getCurrencyChart` | `currency/quote/daily/chart/{symbol}` | Dados para gráficos |
| `getIntradayCurrency` | `currency/quote/intraday/{symbol}` | Dados intradiários |

## Métodos da Classe

### `getCurrencyValues(symbol: string)`

Busca os valores atuais de cotação para uma moeda específica.

**Parâmetros:**
- `symbol (string)`: Símbolo da moeda a ser buscada (ex: 'USD', 'EUR')

**Retorno:**
- `Promise<CurrencyValuesResponse | null>`: Dados de cotação atual ou null em caso de erro

**Exemplo de uso:**
```typescript
try {
  const usd = await CurrencyService.getCurrencyValues('USD');
  if (usd?.result?.[0]) {
    const { bid, ask, tradeDate } = usd.result[0];
    console.log(`USD em ${tradeDate}: Compra R$ ${bid}, Venda R$ ${ask}`);
  }
} catch (error) {
  console.log('Erro ao buscar cotação do USD:', error);
}
```

---

### `getDaily(symbol: string, props: DailyProps)`

Busca dados históricos diários para uma moeda específica.

**Parâmetros:**
- `symbol (string)`: Símbolo da moeda
- `props (DailyProps)`: Parâmetros da consulta
  - `Page: number` (obrigatório)
  - `PageSize?: number` (opcional)
  - `StartDate?: string` (ISO string, opcional)
  - `EndDate?: string` (ISO string, opcional)

**Retorno:**
- `Promise<DailyResponse | null>`: Dados históricos ou null em caso de erro

**Exemplo de uso:**
```typescript
const lastMonth = new Date();
lastMonth.setMonth(lastMonth.getMonth() - 1);

const props: DailyProps = {
  Page: 1,
  PageSize: 31,
  StartDate: lastMonth.toISOString(),
  EndDate: new Date().toISOString()
};

const eurHistory = await CurrencyService.getDaily('EUR', props);
if (eurHistory?.result) {
  eurHistory.result.forEach(item => {
    console.log(`${item.tradeDate}: ${item.bid} - ${item.ask}`);
  });
}
```

---

### `getCurrencyChart(symbol: string, props: CurrencyChartProps)`

Busca dados de gráfico histórico para uma moeda específica com diferentes intervalos de tempo.

**Parâmetros:**
- `symbol (string)`: Símbolo da moeda
- `props (CurrencyChartProps)`: Parâmetros da consulta incluindo o intervalo
  - `Interval: 'FiveDays' | 'OneMonth' | 'SixMonths' | 'OneYear' | 'ThreeYears' | 'FiveYears'`

**Retorno:**
- `Promise<CurrencyChartResponse | null>`: Dados do gráfico ou null em caso de erro

**Exemplo de uso:**
```typescript
const chartProps: CurrencyChartProps = {
  Interval: 'SixMonths'
};

const chartData = await CurrencyService.getCurrencyChart('EUR', chartProps);
if (chartData?.result) {
  console.log(`Pontos retornados: ${chartData.result.length}`);
  chartData.result.forEach(item => {
    console.log(`${item.date}: R$ ${item.value}`);
  });
}
```

---

### `getIntradayCurrency(symbol: string, props?: IntradayCurrencyProps)`

Busca dados intradiários para uma moeda específica.

**Parâmetros:**
- `symbol (string)`: Símbolo da moeda
- `props (IntradayCurrencyProps)`: Parâmetros opcionais
  - `Order: 'Asc' | 'Desc'` (ordem dos dados)
  - `Interval: 'OneDay' | 'ThreeDays' | 'FiveDays'` (intervalo de tempo)
  - `Page: number` (número da página)
  - `PageSize?: number` (tamanho da página, opcional)

**Retorno:**
- `Promise<IntradayCurrencyResponse | null>`: Dados intradiários ou null em caso de erro

**Exemplo de uso:**
```typescript
const intradayData = await CurrencyService.getIntradayCurrency('USD');
if (intradayData?.result) {
  intradayData.result.forEach(item => {
    console.log(`${item.tradeDate}: ${item.bid} (${item.change}%)`);
  });
}
```

**Exemplo de monitoramento:**
```typescript
const monitorCurrency = async (symbol: string) => {
  const data = await CurrencyService.getIntradayCurrency(symbol);
  
  if (data?.result) {
    const latestQuote = data.result[data.result.length - 1];
    
    if (Math.abs(latestQuote.change) > 2) {
      console.log(`ALERTA: ${symbol} variou ${latestQuote.change}%`);
    }
  }
};
```

---

## Tratamento de Erros

Todos os métodos implementam tratamento de erros robusto:

- **Logs de erro:** Erros são registrados no console com detalhes
- **Retorno seguro:** Métodos retornam `null` em caso de falha
- **Validação de resposta:** Verifica se a resposta HTTP está OK
- **Timeout:** Herda configurações de timeout do `BaseService`

## Dependências

- **`BaseService`:** Fornece configuração base e utilitários para chamadas de API
- **Fetch API:** Utilizada para requisições HTTP

## Configuração

O serviço utiliza configurações do `BaseService`:

- **URL base da API:** Configurada via `BaseService.getConfig()` (prioriza `window["InfoMoneyPage"].api_marketdata.base_api_marketdata`)
- **Chave de assinatura (`Ocp-Apim-Subscription-Key`):** Configurada via `BaseService.getConfig()` (prioriza `window["InfoMoneyPage"].api_marketdata.ocp_apin_subscription_key`)
- **Headers padrão:** Configurados implicitamente via `BaseService`

## Casos de Uso por Método

| Método | Uso | Dados | Ideal Para |
|--------|-----|-------|------------|
| `getCurrencyValues` | Cotação atual para exibição em tempo real | Bid/Ask atual com data da negociação | Widgets de cotação, dashboards |
| `getCurrencyChart` | Dados históricos para gráficos de linha/área | Série temporal simplificada (data/valor) | Gráficos de tendência, análise histórica |
| `getDaily` | Análise histórica detalhada | Bid/Ask histórico com variações | Gráficos candlestick, análise fundamentalista |
| `getIntradayCurrency` | Monitoramento intradiário | Movimentos do dia com variações | Trading, alertas de variação |

## Melhorias Sugeridas

1. **Unificação:** Considerar unificar estruturas de resposta entre métodos
2. **Validação:** Adicionar validação de parâmetros de entrada
3. **Cache:** Implementar cache para requisições frequentes
4. **Retry:** Implementar retry automático para falhas de rede
5. **TypeScript:** Melhorar tipagem com tipos mais específicos
6. **Rate Limiting:** Documentar e implementar controles de rate limit
