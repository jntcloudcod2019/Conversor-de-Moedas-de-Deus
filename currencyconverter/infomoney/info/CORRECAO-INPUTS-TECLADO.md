# 🔧 CORREÇÃO: Inputs Não Respondem ao Teclado

## 🐛 Problema

Os inputs do componente não respondiam ao teclado - não era possível digitar nem apagar.

## 🔍 Causa Raiz

O problema estava em **duas partes**:

### 1. **Recriação do Componente a Cada Mudança**

No `view.tsx`, toda vez que `handleFromValueChange` ou `handleToValueChange` eram chamados, a função `rerender()` era executada, que chamava `initCurrencyConverter()` novamente. Isso causava:

- ❌ Recriação do root React
- ❌ Desmontagem e remontagem do componente
- ❌ Perda do foco do input
- ❌ Perda do estado de digitação

### 2. **Falta de Cache de Roots**

O `init.tsx` criava um novo `createRoot()` toda vez, mesmo para o mesmo container, causando múltiplas instâncias e conflitos.

## ✅ Correções Aplicadas

### 1. **Cache de Roots no `init.tsx`**

```typescript
// Cache de roots para evitar recriar componentes
const rootCache = new Map<string, Root>();

export function initCurrencyConverter(
  containerId: string,
  props: CurrencyConverterProps
): void {
  // ...
  
  // Verificar se já existe um root para este container
  let root = rootCache.get(containerId);
  
  if (!root) {
    // Criar novo root apenas na primeira vez
    root = createRoot(container);
    rootCache.set(containerId, root);
  }
  
  // Sempre usar root.render() para atualizar props, não recriar
  root.render(/* ... */);
}
```

**Benefícios**:
- ✅ Root é criado apenas uma vez
- ✅ `root.render()` atualiza props sem desmontar o componente
- ✅ Estado interno do React é preservado
- ✅ Foco do input é mantido

### 2. **Remoção de `rerender()` Durante Digitação**

No `view.tsx`, removido `rerender()` dos handlers de mudança de valor:

```typescript
// ANTES ❌
const handleFromValueChange = (value: number) => {
  state.fromValue = value;
  state.lastEdited = 'from';
  rerender(); // ❌ Causava recriação do componente
};

// DEPOIS ✅
const handleFromValueChange = (value: number) => {
  state.fromValue = value;
  state.lastEdited = 'from';
  // ✅ Não chama rerender() - deixa o React gerenciar internamente
};
```

**Por que funciona**:
- ✅ O componente React gerencia seu próprio estado (`rawFromInput`, `rawToInput`)
- ✅ A conversão é feita internamente através dos callbacks
- ✅ Não há necessidade de re-renderizar externamente durante digitação
- ✅ `rerender()` é chamado apenas quando necessário (troca de moeda, swap)

### 3. **`rerender()` Apenas Quando Necessário**

Mantido `rerender()` apenas para:
- ✅ Troca de moeda (`handleFromCurrencyChange`, `handleToCurrencyChange`)
- ✅ Swap de moedas (`handleSwap`)

Nesses casos, é necessário atualizar os props do componente para refletir as mudanças.

## 📊 Fluxo Corrigido

### Durante Digitação ✅
1. Usuário digita no input
2. `handleInputChange` atualiza `rawFromInput` (estado local do React)
3. `onFromValueChange(value)` é chamado
4. `handleFromValueChange` atualiza `state.fromValue` (estado externo)
5. **NÃO chama `rerender()`** - componente gerencia internamente
6. Componente recalcula `toValue` baseado no `rate` e atualiza `rawToInput`
7. Input mantém foco e estado

### Durante Troca de Moeda ✅
1. Usuário troca moeda
2. `handleFromCurrencyChange` atualiza `state.fromCurrency`
3. **Chama `rerender()`** para atualizar props do componente
4. Componente recalcula valores com nova moeda
5. Input mantém foco (root não é recriado)

## 🧪 Como Testar

1. **Limpar cache** (Ctrl+Shift+R)
2. **Abrir página com componente**
3. **Clicar no input "De"**
4. **Digitar números**:
   - ✅ Deve aparecer no input imediatamente
   - ✅ Deve permitir apagar (Backspace/Delete)
   - ✅ Deve calcular valor "Para" automaticamente
   - ✅ Input deve manter foco durante digitação
5. **Clicar no input "Para"**:
   - ✅ Deve permitir digitar
   - ✅ Deve calcular valor "De" automaticamente
6. **Trocar moedas**:
   - ✅ Deve recalcular valores
   - ✅ Inputs devem continuar funcionando

## 📝 Arquivos Modificados

- ✅ `init.tsx` - Adicionado cache de roots
- ✅ `view.tsx` - Removido `rerender()` dos handlers de valor
- ✅ Build realizado
- ✅ Arquivos copiados
- ✅ WordPress reiniciado

**Correção aplicada! Os inputs agora respondem corretamente ao teclado.** 🎉
