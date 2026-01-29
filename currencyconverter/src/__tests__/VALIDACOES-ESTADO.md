# Validações de Ações Esperadas - Lógica de Estado

Este documento descreve os testes adicionados para validar ações esperadas baseadas na lógica do componente, especialmente focando no impacto do `React.useState` e sincronização de estados.

## 📋 Categorias de Validação

### 1. Sincronização de rawInputs com valores externos

Testa como o componente sincroniza os inputs formatados (`rawFromInput`, `rawToInput`) quando os valores numéricos (`fromValue`, `toValue`) mudam externamente.

**Testes:**
- ✅ Sincronização quando input não está focado
- ✅ Sincronização mesmo quando input está focado (comportamento atual)
- ✅ Limpeza quando valor é 0
- ✅ Atualização quando moeda muda (formatação diferente)

**Observação Importante:**
O código atual (linhas 251-265) não verifica se o input está focado antes de sincronizar. Isso significa que mudanças externas podem sobrescrever o que o usuário está digitando, o que pode causar problemas de UX.

### 2. Estado de Loading da API

Valida o comportamento do estado `isLoadingApi` e o carregamento assíncrono de dados.

**Testes:**
- ✅ `isLoadingApi` é `true` durante carregamento
- ✅ `isLoadingApi` é `false` após sucesso
- ✅ `isLoadingApi` é `false` após erro
- ✅ Não carrega se `converterData` existe
- ✅ Não tenta carregar mais de uma vez (`hasTriedLoadApi`)

### 3. Cálculo e Atualização de Rate

Valida como a taxa de câmbio é calculada e atualizada.

**Testes:**
- ✅ Atualização quando `propRate` muda
- ✅ Cálculo a partir de `exchangeRates` quando `propRate` não existe
- ✅ Uso de fallback rate 1 quando `exchangeRates` está vazio
- ✅ Recálculo quando moedas mudam

### 4. Sincronização durante Swap

Valida o comportamento do swap de moedas e valores.

**Testes:**
- ✅ Sincronização de `rawInputs` ANTES de chamar `onSwap`
- ✅ Uso de valores atuais no payload (`currentFromNumeric`, `currentToNumeric`)
- ✅ Inclusão correta de `hasFromInput` e `hasToInput` no payload

### 5. Comportamento de useMemo para Display Values

Valida que os valores de display são recalculados corretamente usando `useMemo`.

**Testes:**
- ✅ Recalcula `displayFrom` quando `fromValue` muda
- ✅ Recalcula `displayTo` quando `toValue` muda
- ✅ Recalcula quando moeda muda (decimais diferentes)

### 6. Prioridade de Dados

Valida a lógica de prioridade: `converterData > loadedData > props`

**Testes:**
- ✅ Usa `converterData` quando fornecido (maior prioridade)
- ✅ Usa `loadedData` quando `converterData` não existe
- ✅ Usa `props` quando `converterData` e `loadedData` não existem

### 7. Prevenção de Race Conditions

Documenta comportamentos que podem causar problemas de sincronização.

**Testes:**
- ✅ Documenta comportamento de sincronização durante digitação (pode causar conflito)

## 🔍 Problemas Identificados

### Problema 1: Sincronização durante digitação

**Localização:** Linhas 251-265 do `CurrencyConverter.tsx`

**Descrição:**
Os `useEffect` que sincronizam `rawFromInput` e `rawToInput` não verificam se o input está focado antes de sincronizar. Isso significa que:

1. Usuário começa a digitar no input FROM
2. Um cálculo externo atualiza `fromValue`
3. O `useEffect` sincroniza e sobrescreve o que o usuário está digitando

**Impacto:**
- UX ruim: usuário perde o que estava digitando
- Pode causar loops infinitos se houver feedback entre input e cálculo

**Solução Sugerida:**
```typescript
React.useEffect(() => {
  if (!isFromInputFocused.current) { // Adicionar verificação
    if (fromValue === 0) setRawFromInput("");
    else setRawFromInput(
      formatNumber(fromValue, getDecimals(fromCurrency.code), decimalSeparator, thousandSeparator)
    );
  }
}, [fromValue, fromCurrency.code, decimalSeparator, thousandSeparator]);
```

### Problema 2: Refs não utilizados

**Localização:** Linhas 221-222, 397-398, 418-419, 454-455, 481-482

**Descrição:**
Os refs `isFromInputFocused` e `isToInputFocused` são definidos e atualizados nos eventos `onFocus`/`onBlur`, mas não são usados nos `useEffect` de sincronização.

**Impacto:**
- Código morto (refs não têm efeito)
- Perda da funcionalidade de prevenir sincronização durante digitação

## 📊 Cobertura Adicional

Com esses novos testes, a cobertura inclui:

- **Sincronização de estado**: 8 testes
- **Loading assíncrono**: 5 testes
- **Cálculo de taxas**: 4 testes
- **Swap**: 3 testes
- **Display values**: 3 testes
- **Prioridade de dados**: 3 testes
- **Race conditions**: 1 teste

**Total: 27 novos testes focados em lógica de estado**

## 🎯 Como Usar

Execute os testes normalmente:

```bash
npm test
```

Para focar apenas nos testes de validação de estado:

```bash
npm test -- --grep "Validação de Ações Esperadas"
```

## 📝 Notas

- Os testes documentam o comportamento **atual** do código
- Alguns testes identificam comportamentos que podem ser melhorados
- Use os testes como documentação viva do comportamento do componente
- Considere refatorar o código baseado nos problemas identificados

---

**Última atualização:** 23/01/2026
