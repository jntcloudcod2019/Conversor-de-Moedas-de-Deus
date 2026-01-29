# ✅ Checklist de Validação Antes do Build

## 📋 Validação Completa do Componente

### 1. ✅ Estrutura de Arquivos
- [ ] Todos os arquivos do componente original copiados
- [ ] Estrutura de pastas mantida (calculators, contexts, components, services, etc)
- [ ] Imports corrigidos (caminhos relativos corretos)
- [ ] Nenhum arquivo faltando

### 2. 🚫 Remoção de CNY
- [ ] Removido de `types.ts` (CurrencyCode type)
- [ ] Removido de `currencyMapper.ts` (getCurrencySymbol e getCurrencyName)
- [ ] Removido de `view.tsx` (lista de moedas)
- [ ] Removido de `index.tsx` (bloco editor - lista de moedas)
- [ ] Verificado que não há mais referências a CNY

### 3. 🧹 Limpeza de Código
- [ ] Removidos logs de debug (fetch para 127.0.0.1:7242)
- [ ] Removidos comentários de agent log
- [ ] Código limpo e organizado
- [ ] Sem console.log desnecessários (exceto logs de inicialização)

### 4. 🔧 Funcionalidades Core

#### Input FROM
- [ ] Aceita entrada de texto
- [ ] Formata números corretamente (separadores pt-BR)
- [ ] Chama `onFromValueChange` quando valor muda
- [ ] Sincroniza `rawFromInput` com `fromValue`

#### Input TO
- [ ] Calcula automaticamente: `toValue = fromValue * rate`
- [ ] Aceita entrada manual se `onToValueChange` fornecido
- [ ] Formata números corretamente
- [ ] Sincroniza `rawToInput` com `toValue`

#### Botão Swap
- [ ] Troca moedas (from ↔ to)
- [ ] Troca valores (fromValue ↔ toValue)
- [ ] Chama `onSwap` com payload correto
- [ ] Recalcula rate após swap
- [ ] Sincroniza inputs após swap

#### Dropdown de Moedas
- [ ] Abre/fecha corretamente
- [ ] Seleciona moeda corretamente
- [ ] Chama `onFromCurrencyChange` ou `onToCurrencyChange`
- [ ] Recalcula valores ao trocar moeda

#### Conversão Automática
- [ ] Calcula `toValue = fromValue * rate` quando `fromValue` muda
- [ ] Calcula `fromValue = toValue / rate` quando `toValue` muda (se habilitado)
- [ ] Recalcula ao trocar moeda
- [ ] Recalcula ao trocar rate

### 5. 🎨 Estilos e Layout

#### Fontes
- [ ] Fonte Inter carregada (Google Fonts)
- [ ] Classe `font-inter` aplicada corretamente
- [ ] Fallback para system fonts

#### Cores
- [ ] Todas as cores `wl-neutral-*` funcionando
- [ ] `text-wl-neutral-600` aplicado
- [ ] `border-wl-neutral-200` aplicado
- [ ] `bg-white` aplicado

#### Layout Mobile
- [ ] Layout vertical correto
- [ ] Swap button vertical (mobile)
- [ ] Inputs empilhados
- [ ] Responsivo

#### Layout Web
- [ ] Layout horizontal correto
- [ ] Swap button horizontal (web)
- [ ] Inputs lado a lado
- [ ] Responsivo

#### Espaçamentos
- [ ] Gap correto entre elementos
- [ ] Padding correto
- [ ] Margin correto
- [ ] Letter spacing (`tracking-tight-*`) aplicado

### 6. 🔄 Estados e Hooks

#### useMemo
- [ ] `displayFrom` usa `useMemo`
- [ ] `displayTo` usa `useMemo`
- [ ] Dependências corretas

#### useDevice
- [ ] Detecta mobile/web corretamente
- [ ] Retorna `isMobile` correto

#### useSkeleton
- [ ] Controla loading state
- [ ] Mostra skeleton quando `isLoading = true`

#### useResponsive
- [ ] Funciona corretamente
- [ ] Classes responsivas aplicadas

#### Estados Locais
- [ ] `rawFromInput` sincronizado com `fromValue`
- [ ] `rawToInput` sincronizado com `toValue`
- [ ] `isFromInputFocused` controla quando atualizar
- [ ] `isToInputFocused` controla quando atualizar

### 7. 💱 Moedas e Taxas

#### Lista de Moedas
- [ ] USD presente
- [ ] BRL presente
- [ ] EUR presente
- [ ] GBP presente
- [ ] JPY presente
- [ ] CNY **NÃO** presente

#### Rate Calculation
- [ ] Calcula de `exchangeRates` se disponível
- [ ] Usa fallback se `exchangeRates` não disponível
- [ ] Recalcula ao trocar moeda
- [ ] Rate correto: `toRate / fromRate`

#### Currency Change
- [ ] Recalcula valores ao trocar moeda FROM
- [ ] Recalcula valores ao trocar moeda TO
- [ ] Mantém valores ou zera conforme lógica

#### Decimals
- [ ] JPY usa 0 decimais
- [ ] Outras moedas usam 2 decimais
- [ ] `getDecimals` retorna valores corretos

### 8. 🧮 Cálculos

#### formatNumber
- [ ] Formata com separadores corretos (pt-BR: vírgula/ponto)
- [ ] Aplica decimais corretos
- [ ] Formata milhares corretamente

#### parseFormattedNumber
- [ ] Parse corretamente números formatados
- [ ] Remove separadores de milhares
- [ ] Converte separador decimal para ponto

#### sanitizeRawInput
- [ ] Remove caracteres inválidos
- [ ] Mantém apenas dígitos e separadores
- [ ] Limita decimais conforme moeda

#### getDecimals
- [ ] Retorna 0 para JPY
- [ ] Retorna 2 para outras moedas
- [ ] Funciona para todas as moedas

### 9. 🔌 Integração WordPress

#### view.tsx
- [ ] Implementa lógica de conversão
- [ ] Gerencia estado local (fromValue, toValue, currencies)
- [ ] Calcula rate corretamente
- [ ] Implementa `onFromValueChange` funcional
- [ ] Implementa `onToValueChange` funcional
- [ ] Implementa `onSwap` funcional
- [ ] Implementa `onFromCurrencyChange` funcional
- [ ] Implementa `onToCurrencyChange` funcional
- [ ] Re-renderiza componente quando estado muda

#### Callbacks Funcionais
- [ ] `onFromValueChange`: Atualiza `fromValue` e recalcula `toValue`
- [ ] `onToValueChange`: Atualiza `toValue` e recalcula `fromValue` (se habilitado)
- [ ] `onSwap`: Troca moedas e valores
- [ ] `onFromCurrencyChange`: Troca moeda FROM e recalcula
- [ ] `onToCurrencyChange`: Troca moeda TO e recalcula

#### Estado Local
- [ ] Gerencia `fromValue` e `toValue`
- [ ] Gerencia `fromCurrency` e `toCurrency`
- [ ] Gerencia `lastEdited` ('from' | 'to')
- [ ] Calcula valores efetivos baseado em `lastEdited`

### 10. 📝 TypeScript
- [ ] Sem erros de tipo
- [ ] Imports corretos
- [ ] Types exportados corretamente
- [ ] Interfaces completas

### 11. 🎯 Testes Manuais (Após Build)

#### Funcionalidades
- [ ] Digitar valor no FROM atualiza TO automaticamente
- [ ] Trocar moeda FROM recalcula TO
- [ ] Trocar moeda TO recalcula FROM
- [ ] Botão swap troca moedas E valores
- [ ] Dropdown abre e seleciona moeda
- [ ] Formatação de números correta (pt-BR)

#### Layout
- [ ] Layout mobile funciona
- [ ] Layout web funciona
- [ ] Fontes corretas (Inter)
- [ ] Cores corretas
- [ ] Espaçamentos corretos

#### Edge Cases
- [ ] Valor 0 funciona
- [ ] Valores muito grandes funcionam
- [ ] Trocar moeda com valor 0 funciona
- [ ] Swap com valor 0 funciona

## 🚀 Comandos de Validação

### Antes do Build
```bash
# Verificar se CNY foi removido
grep -r "CNY" infomoney/design-system/src/ infomoney/wordpress/plugins/infomoney-blocks/src/

# Verificar se logs de debug foram removidos
grep -r "127.0.0.1:7242\|agent log" infomoney/design-system/src/

# Verificar se useMemo está presente
grep -r "useMemo" infomoney/design-system/src/componentes/currency-converter/CurrencyConverter.tsx
```

### Após o Build
```bash
# Verificar tamanho dos bundles
ls -lh infomoney/design-system/dist/componentes/currency-converter/*.{js,css}

# Verificar se não há erros de TypeScript
cd infomoney/design-system && npm run build:types
```

## ✅ Checklist Final

Antes de fazer o build final, verificar:

1. ✅ CNY removido de todos os arquivos
2. ✅ Logs de debug removidos
3. ✅ useMemo implementado para displayFrom/displayTo
4. ✅ view.tsx implementa lógica de conversão completa
5. ✅ Todos os callbacks funcionais
6. ✅ CurrencyConverter.tsx completo (copiado do original)
7. ✅ Sem erros de TypeScript
8. ✅ Todos os arquivos presentes

**Só fazer build após validar todos os itens!** ✅
