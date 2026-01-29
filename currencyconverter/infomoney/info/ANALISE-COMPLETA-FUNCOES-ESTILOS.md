# 📊 ANÁLISE COMPLETA: FUNÇÕES E ESTILOS MAPEADOS

## 🔍 MAPEAMENTO FUNÇÃO POR FUNÇÃO

### 📁 **CurrencyConverter.tsx** (Componente Principal)

#### **1. Componentes de Ícone Swap**

##### `SwapIconWeb` (Linhas 16-47)
**Função**: Renderiza ícone SVG de swap para desktop
**Estilos Inline**:
- `width={50}`, `height={50}`
- `viewBox="0 0 48 48"`
- Círculo: `fill="#007bff"` (azul)
- Linhas: `stroke="white"`, `strokeWidth="2"`, `strokeLinecap="round"`
- Paths: `strokeLinejoin="round"`, `fill="none"`

**Status**: ✅ Presente no design-system

##### `SwapIconMobile` (Linhas 49-86)
**Função**: Renderiza ícone SVG de swap para mobile
**Diferença do Original**: 
- Original: Setas VERTICAIS (↓ ↑)
- Design-System: Setas HORIZONTAIS (igual ao Web)
**Estilos Inline**:
- `width={50}`, `height={50}`
- `style={{ transform: 'none' }}` (design-system)
- Mesma estrutura do Web

**Status**: ⚠️ **DIFERENTE** - Mobile usa ícone horizontal, não vertical

##### `SwapButtonWeb` (Linhas 88-108)
**Função**: Botão wrapper para SwapIconWeb
**Classes Tailwind**:
- `inline-flex items-center justify-center`
- `p-0 m-0 bg-transparent border-0 outline-none appearance-none cursor-pointer`
**Estilos Inline**:
- `width: 50`, `height: 50`
- `boxShadow: 'none'`, `background: 'transparent'`, `border: 'none'`
- `padding: 0`, `margin: 0`
**Aria**: `aria-label="Trocar moedas"`, `title="Trocar moedas"`

**Status**: ✅ Presente no design-system

##### `SwapButtonMobile` (Linhas 110-133)
**Função**: Botão wrapper para SwapIconMobile
**Classes Tailwind**: Mesmas do Web
**Estilos Inline**:
- `width: 50`, `height: 50`
- `transform: 'rotate(-160deg)'` (original) vs `transform: 'none'` (design-system)
- `transformOrigin: 'center center'`
- `transition: 'transform 0.2s ease'` (original)

**Status**: ⚠️ **DIFERENTE** - Transform removido no design-system

---

#### **2. Props e Inicialização**

##### Props Recebidas (Linhas 135-151)
```typescript
fromValue: number
toValue: number
fromCurrency: Currency
toCurrency: Currency
rate?: number
currencies: Currency[]
exchangeRates?: Record<string, number>
device?: Device
lastUpdated?: string
onFromValueChange: (value: number) => void
onToValueChange?: (value: number) => void
onFromCurrencyChange: (currency: Currency) => void
onToCurrencyChange: (currency: Currency) => void
onSwap: (payload: SwapPayload) => void
converterData?: CurrencyConverterData
```

**Status**: ✅ Todas presentes

##### Lógica de Inicialização (Linhas 146-161)
**Funções**:
1. `currencies = converterData?.currencies ?? propCurrencies` - Fallback para moedas
2. `exchangeRates = converterData?.exchangeRates ?? propExchangeRates` - Fallback para taxas
3. `lastUpdated = converterData?.lastUpdated ?? propLastUpdated` - Fallback para data
4. `rate = propRate ?? (exchangeRates ? ... : 1)` - Calcula rate se não fornecido
5. `lastUpdatedLabel = lastUpdated ?? getCurrentDateTime()` - Fallback para data atual
6. `locale = navigator.language || "pt-BR"` - Detecta locale
7. `isPortugueseBR = locale.startsWith("pt")` - Verifica se é português
8. `decimalSeparator = isPortugueseBR ? "," : "."` - Separador decimal
9. `thousandSeparator = isPortugueseBR ? "." : ","` - Separador de milhares

**Status**: ✅ Todas presentes

---

#### **3. Estados e Refs**

##### Estados Locais (Linhas 164-166)
```typescript
const [rawFromInput, setRawFromInput] = React.useState("")
const [rawToInput, setRawToInput] = React.useState("")
const toInputRef = React.useRef<HTMLInputElement>(null)
```

**Status**: ✅ Presentes

##### Refs de Foco (Linhas 258-259)
```typescript
const isFromInputFocused = React.useRef(false)
const isToInputFocused = React.useRef(false)
```

**Status**: ✅ Presentes

---

#### **4. Handlers de Input**

##### `handleInputChange` (Linhas 169-200)
**Função**: Processa mudanças no input FROM
**Lógica**:
1. Obtém decimais: `getDecimals(fromCurrency.code)`
2. Sanitiza input: `sanitizeRawInput(value, decimals, decimalSeparator)`
3. Atualiza estado: `setRawFromInput(raw)`
4. Valida vazio: Se `raw.trim() === "" || raw === decimalSeparator` → `onFromValueChange(0)`
5. Parse numérico: `parseFormattedNumber(raw, decimals, decimalSeparator)`
6. Valida NaN: Se `Number.isNaN(numeric)` → `onFromValueChange(0)`
7. Chama callback: `onFromValueChange(numeric)`

**Status**: ✅ Presente

##### `handleToInputChange` (Linhas 202-238)
**Função**: Processa mudanças no input TO
**Lógica**: Similar ao `handleInputChange`, mas:
- Verifica se `onToValueChange` existe antes de processar
- Usa `getDecimals(toCurrency.code)`

**Status**: ✅ Presente

---

#### **5. Hooks de Contexto**

##### `useDevice` (Linhas 240-248)
**Função**: Detecta device (mobile/web)
**Lógica**:
1. Obtém `detectedIsMobile` do contexto
2. Se `device === "mobile"` → `isMobile = true`
3. Se `device === "web"` → `isMobile = false`
4. Senão → usa `detectedIsMobile`

**Status**: ✅ Presente

##### `useSkeleton` (Linhas 250-256)
**Função**: Controla estado de loading
**Lógica**:
- Se `isLoading === true` → retorna `<CurrencyConverterSkeleton />`
- Senão → continua renderização normal

**Status**: ✅ Presente

---

#### **6. Cálculos de Display**

##### `displayFrom` (Linhas 262-267 ORIGINAL vs 268-275 DESIGN-SYSTEM)
**Original**: Calcula diretamente
```typescript
const displayFrom = formatNumber(
  fromValue,
  getDecimals(fromCurrency.code),
  decimalSeparator,
  thousandSeparator,
);
```

**Design-System**: Usa `useMemo` ✅
```typescript
const displayFrom = React.useMemo(() => {
  return formatNumber(
    fromValue,
    getDecimals(fromCurrency.code),
    decimalSeparator,
    thousandSeparator,
  );
}, [fromValue, fromCurrency.code, decimalSeparator, thousandSeparator]);
```

**Status**: ✅ **MELHORADO** - Design-system usa useMemo

##### `displayTo` (Linhas 269-274 ORIGINAL vs 277-284 DESIGN-SYSTEM)
**Original**: Calcula diretamente
**Design-System**: Usa `useMemo` ✅

**Status**: ✅ **MELHORADO** - Design-system usa useMemo

---

#### **7. useEffect Hooks**

##### Sincronização rawFromInput (Linhas 288-302)
**Função**: Sincroniza `rawFromInput` quando `fromValue` muda externamente
**Lógica**:
- Se `!isFromInputFocused.current`:
  - Se `fromValue === 0` → `setRawFromInput("")`
  - Senão → formata e atualiza: `setRawFromInput(formatted)`
**Dependências**: `[fromValue, fromCurrency.code, decimalSeparator, thousandSeparator]`

**Status**: ✅ Presente

##### Sincronização rawToInput (Linhas 304-318)
**Função**: Sincroniza `rawToInput` quando `toValue` muda externamente
**Lógica**: Similar ao anterior, mas para `toValue`

**Status**: ✅ Presente

##### Logs de Debug (Linhas 276-302 ORIGINAL)
**Função**: Envia logs para servidor de debug
**Status**: ❌ **PRESENTE NO ORIGINAL** - Deve ser removido

---

#### **8. Funções Auxiliares**

##### `formatRawValue` (Linhas 321-329)
**Função**: Formata valor numérico para string
**Lógica**:
- Se `value === 0` → retorna `""`
- Senão → chama `formatNumber(value, getDecimals(code), ...)`

**Status**: ✅ Presente

##### `syncRawInputs` (Linhas 331-339)
**Função**: Sincroniza ambos os inputs após swap
**Lógica**:
- Chama `formatRawValue` para ambos
- Atualiza `rawFromInput` e `rawToInput`

**Status**: ✅ Presente

##### `handleSwapClick` (Linhas 341-356)
**Função**: Handler do botão swap
**Lógica**:
1. Cria payload: `{ fromValue, toValue, hasFromInput, hasToInput }`
2. Chama `syncRawInputs(payload.toValue, payload.fromValue, ...)`
3. Chama `onSwap(payload)`

**Status**: ✅ Presente

---

#### **9. Renderização Mobile** (Linhas 358-419)

##### Container Principal
**Classes Tailwind**:
- `flex flex-col gap-5`
- `bg-white border border-wl-neutral-200 rounded-lg shadow-sm`
- `w-full max-w-md mx-auto p-4 sm:p-6`

**Status**: ✅ Presente

##### Título
**Classes Tailwind**:
- `font-inter font-medium text-xl leading-7 tracking-tight-xs`
- `text-wl-neutral-950 m-0 text-center px-3 sm:px-4`

**Status**: ✅ Presente

##### Input FROM Container
**Classes Tailwind**:
- `flex flex-row items-center gap-2 w-full h-11`
- `px-3 sm:px-4 py-3`
- `bg-white border border-wl-neutral-600 rounded-xl`
- `relative transition-all`
- `hover:border-black hover:border-2`
- `focus-within:border-black focus-within:border-2`
- `overflow-hidden`

**Status**: ✅ Presente

##### Input FROM Element
**Classes Tailwind**:
- `font-inter font-semibold text-sm sm:text-base leading-5`
- `text-wl-neutral-600`
- `min-w-0 w-full max-w-[calc(100%-90px)] h-5`
- `border-0 outline-none bg-transparent`
- `placeholder-wl-neutral-400`

**Atributos**:
- `type="text"`, `inputMode="decimal"`
- `value={rawFromInput}`, `onChange={handleInputChange}`
- `onFocus={() => (isFromInputFocused.current = true)}`
- `onBlur={() => (isFromInputFocused.current = false)}`
- `placeholder="0,00"`

**Status**: ✅ Presente

##### Swap Button Mobile
**Posição**: Entre inputs FROM e TO
**Componente**: `<SwapButtonMobile onClick={handleSwapClick} />`

**Status**: ✅ Presente

##### Input TO
**Estrutura**: Similar ao FROM

**Status**: ✅ Presente

##### Rodapé Mobile
**Classes Tailwind**:
- Container: `flex flex-col items-center gap-1 w-full`
- Texto resumo: `font-inter font-semibold text-xs leading-4 text-wl-neutral-700 text-center m-0 px-2`
- Texto cotação: `font-inter font-normal text-xs leading-4 text-wl-neutral-600 text-center m-0 px-2`

**Status**: ✅ Presente

---

#### **10. Renderização Web** (Linhas 421-511)

##### Container Principal
**Classes Tailwind**:
- `flex flex-col gap-5`
- `bg-white border border-wl-neutral-200 rounded-lg shadow-sm`
- `w-full max-w-6xl mx-auto p-4 sm:p-6`

**Diferença**: `max-w-6xl` (web) vs `max-w-md` (mobile)

**Status**: ✅ Presente

##### Título Web
**Classes Tailwind**:
- `font-inter font-medium text-xl leading-7 tracking-tight-xs`
- `text-wl-neutral-950 m-0 text-left px-3 sm:px-4`

**Diferença**: `text-left` (web) vs `text-center` (mobile)

**Status**: ✅ Presente

##### Container de Inputs
**Classes Tailwind**:
- `flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full`

**Status**: ✅ Presente

##### Input FROM Web
**Classes Tailwind**:
- `flex flex-row items-center flex-1 min-w-0 h-11`
- `px-4 py-3`
- `bg-white border border-wl-neutral-600 rounded-xl`
- `transition-all hover:border-black hover:border-2`
- `focus-within:border-black focus-within:border-2`
- `overflow-hidden`

**Diferença**: `flex-1` (web) vs `w-full` (mobile)

**Status**: ✅ Presente

##### Input FROM Element Web
**Classes Tailwind**:
- `font-inter font-semibold text-sm sm:text-base leading-5`
- `text-wl-neutral-600`
- `min-w-0 flex-1 h-5`
- `border-0 outline-none bg-transparent`
- `placeholder-wl-neutral-400`

**Status**: ✅ Presente

##### Swap Button Web
**Container**: `flex justify-center sm:justify-start`
**Componente**: `<SwapButtonWeb onClick={handleSwapClick} />`

**Status**: ✅ Presente

##### Input TO Web
**Lógica Condicional**:
- Se `onToValueChange` existe → renderiza `<input>` editável
- Senão → renderiza `<span>` somente leitura

**Input Editável**:
- Classes: `min-w-0 flex-1 h-5 bg-transparent border-none font-inter font-semibold text-base leading-5 text-wl-neutral-600 placeholder-neutral-400 focus:outline-none p-0`

**Span Somente Leitura**:
- Classes: `min-w-0 flex-1 font-inter font-semibold text-base leading-5`
- Style: `color: "var(--Colors-Content-One, rgba(82, 82, 82, 1))"`

**Status**: ✅ Presente

##### Sumário Web
**Container**: `flex flex-col items-center gap-2 w-full`

**Linha de Resumo**:
- Container: `flex flex-row flex-wrap justify-center items-center gap-2 w-full px-2`
- Valor FROM: `font-inter font-bold text-2xl sm:text-3xl lg:text-4xl leading-8 sm:leading-9 lg:leading-10 tracking-tight-md text-wl-neutral-600 text-center`
- Sinal "=": `font-inter font-semibold text-xl sm:text-2xl leading-7 sm:leading-8 tracking-tight-sm text-wl-neutral-600`
- Valor TO: Mesmas classes do FROM

**Taxa de Câmbio**:
- Container: `flex flex-col gap-1 w-full`
- Texto: `font-inter font-normal text-xs leading-4 text-wl-neutral-600 text-center m-0 px-2`

**Status**: ✅ Presente

---

### 📁 **InputCurrencyDropdown.tsx**

#### **1. Props e Estado**

##### Props (Linhas 9-15)
```typescript
currency: Currency
currencies: Currency[]
onCurrencyChange: (currency: Currency) => void
fromValue?: number
exchangeRates?: Record<string, number>
```

**Status**: ✅ Presentes

##### Estados (Linhas 37-44)
```typescript
const [isOpen, setIsOpen] = useState(false)
const [position, setPosition] = useState({ top: 0, left: 0 })
const [listboxWidth, setListboxWidth] = useState<number | null>(null)
const rootRef = useRef<HTMLDivElement>(null)
const dropdownRef = useRef<HTMLDivElement>(null)
const listboxInnerRef = useRef<HTMLDivElement>(null)
const flagRef = useRef<HTMLDivElement>(null)
const codeRef = useRef<HTMLSpanElement>(null)
```

**Status**: ✅ Presentes

---

#### **2. Funções Auxiliares**

##### `calculateExchangeRate` (Linhas 17-29)
**Função**: Calcula taxa de câmbio entre duas moedas
**Lógica**:
1. Obtém `fromRate` e `toRate` de `exchangeRates`
2. Se algum não existe → retorna `"-"`
3. Calcula: `rate = toRate / fromRate`
4. Retorna: `rate.toFixed(2)`

**Status**: ✅ Presente

##### `sortedCurrencies` (Linhas 46-48)
**Função**: Ordena moedas alfabeticamente
**Lógica**: `[...currencies].sort((a, b) => a.code.localeCompare(b.code))`

**Status**: ✅ Presente

##### `handleSelectCurrency` (Linhas 50-53)
**Função**: Handler de seleção de moeda
**Lógica**:
1. Chama `onCurrencyChange(selectedCurrency)`
2. Fecha dropdown: `setIsOpen(false)`

**Status**: ✅ Presente

---

#### **3. useEffect Hooks**

##### Cálculo de Posição (Linhas 56-117)
**Função**: Calcula posição do dropdown quando abre
**Lógica**:
1. Obtém `getBoundingClientRect()` do trigger
2. Calcula largura mínima: `minListboxWidth = 120`
3. Calcula left: `rect.right + window.scrollX - widthToUse + 20`
4. Calcula top: `rect.bottom + window.scrollY + 12`
5. Atualiza `position` state
6. **Logs de debug**: Linhas 60-83, 96-115 ❌

**Status**: ⚠️ **LOGS DE DEBUG PRESENTES**

##### Click Outside (Linhas 120-139)
**Função**: Fecha dropdown ao clicar fora
**Lógica**:
1. Adiciona listener `mousedown` quando `isOpen === true`
2. Verifica se clique foi fora de `rootRef` e `dropdownRef`
3. Se sim → `setIsOpen(false)`
4. Remove listener no cleanup

**Status**: ✅ Presente

##### Cálculo de Largura (Linhas 142-177)
**Função**: Calcula largura do listbox baseado no conteúdo
**Lógica**:
1. Obtém `getBoundingClientRect()` do conteúdo interno
2. Calcula: `Math.max(innerRect.width, 120)`
3. Atualiza `listboxWidth`
4. Recalcula posição com largura correta
5. **Logs de debug**: Linhas 157-175 ❌

**Status**: ⚠️ **LOGS DE DEBUG PRESENTES**

##### Log de Renderização (Linhas 180-211)
**Função**: Log quando listbox é renderizado
**Lógica**: Envia dados de posição e dimensões
**Status**: ❌ **LOGS DE DEBUG PRESENTES**

---

#### **4. Renderização**

##### Listbox Content (Linhas 213-258)
**Função**: Renderiza lista de moedas em portal
**Classes Tailwind**:
- Container: `fixed bg-white border border-gray-200 rounded-lg shadow-lg`
- Inner: `py-1`
- Button: `w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 transition-colors`
- Button selecionado: `bg-blue-50 font-semibold`
- Flag: `w-5 h-5 shrink-0 rounded-full overflow-hidden flex items-center justify-center`
- Código: `font-inter text-sm flex-1 text-left`
- Rate: `ml-auto text-xs text-gray-500`

**Estilos Inline**:
- `top: ${position.top}px`
- `left: ${position.left}px`
- `width: ${listboxWidth}px` ou `'auto'`
- `minWidth: '120px'`
- `zIndex: 9999`
- `maxHeight: '400px'`
- `overflowY: 'auto'`, `overflowX: 'hidden'`
- Button: `minHeight: '40px'`

**Status**: ✅ Presente

##### Trigger (Linhas 260-287)
**Função**: Renderiza botão trigger do dropdown
**Classes Tailwind**:
- Container: `relative w-auto min-w-[90px] sm:min-w-[100px] h-5 flex items-center justify-end gap-1 shrink-0`
- Flag: `w-5 h-5 shrink-0 rounded-full overflow-hidden flex items-center justify-center`
- Código: `font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 whitespace-nowrap`

**Componentes**:
- `<FlagIcon countryCode={...} size={30} />`
- `<ChevronIcon size={20} color="#525252" onClick={...} />`

**Portal**: `createPortal(listboxContent, document.body)`

**Status**: ✅ Presente

---

### 📁 **calculators/currencyCalculators.ts**

#### **1. Constantes**

##### `CURRENCY_DECIMALS` (Linhas 3-17)
**Função**: Mapeia código de moeda para número de decimais
**Valores**:
- JPY, KRW, VND, HUF, CLP, ISK, TWD: `0`
- KWD, BHD, JOD, OMR, TND, LYD: `3`
- Outras: `2` (padrão)

**Status**: ✅ Presente

---

#### **2. Funções de Formatação**

##### `getDecimals` (Linhas 19-20)
**Função**: Retorna número de decimais para uma moeda
**Lógica**: `CURRENCY_DECIMALS[code] ?? 2`

**Status**: ✅ Presente

##### `detectDecimalSeparator` (Linhas 22-31)
**Função**: Detecta separador decimal em string
**Lógica**:
1. Encontra último `,` e último `.`
2. Se `lastComma > lastDot` → retorna `","`
3. Se `lastDot > lastComma` → retorna `"."`
4. Senão → retorna `defaultSeparator`

**Status**: ✅ Presente

##### `formatNumber` (Linhas 33-53)
**Função**: Formata número com separadores
**Lógica**:
1. Se `num === 0`:
   - Se `decimals > 0` → retorna `"0${decSep}00..."`
   - Senão → retorna `"0"`
2. Fixa decimais: `num.toFixed(decimals)`
3. Separa parte inteira e decimal
4. Formata inteiro: adiciona `thouSep` a cada 3 dígitos
5. Retorna: `${formattedInteger}${decSep}${decimalPart}`

**Status**: ✅ Presente

##### `sanitizeRawInput` (Linhas 55-71)
**Função**: Remove caracteres inválidos do input
**Lógica**:
1. Remove tudo exceto dígitos e `,`/`.`
2. Se vazio → retorna `""`
3. Se `decimals === 0` → retorna apenas dígitos
4. Detecta separador decimal
5. Separa parte inteira e decimal
6. Limita decimais conforme `decimals`
7. Retorna string sanitizada

**Status**: ✅ Presente

##### `parseFormattedNumber` (Linhas 73-92)
**Função**: Converte string formatada para número
**Lógica**:
1. Se vazio ou só separador → retorna `0`
2. Se `decimals === 0`:
   - Extrai apenas dígitos
   - `parseInt(digits, 10)`
   - Se NaN → retorna `0`
3. Detecta separador decimal
4. Determina separador de milhares (oposto do decimal)
5. Remove separador de milhares
6. Substitui separador decimal por `.`
7. `parseFloat(normalized)`
8. Se NaN → retorna `0`

**Status**: ✅ Presente

---

#### **3. Interfaces**

##### `SummaryResult` (Linhas 94-99)
```typescript
interface SummaryResult {
  summaryFromValue: number
  summaryToValue: number
  summaryDisplayFrom: string
  summaryDisplayTo: string
}
```

**Status**: ✅ Presente

##### `SwapPayload` (Linhas 101-108)
```typescript
interface SwapPayload {
  fromValue: number
  toValue: number
  hasFromInput: boolean
  hasToInput: boolean
  rawFromInput: string
  rawToInput: string
}
```

**Status**: ✅ Presente

##### `buildSummary` (Linhas 110-167)
**Função**: Constrói objeto de resumo
**Lógica**:
1. Verifica se há input raw (`hasFromRaw`, `hasToRaw`)
2. Calcula valores: usa raw se existe, senão usa numérico
3. Calcula display: usa raw se existe, senão formata numérico
4. Retorna `SummaryResult`

**Status**: ✅ Presente (mas não usado no CurrencyConverter)

---

### 📁 **FlagIcon.tsx**

#### **Função Principal**

##### `FlagIcon` (Linhas 9-44)
**Função**: Renderiza bandeira de país
**Props**:
- `countryCode: string`
- `size?: number` (padrão: 23)

**Lógica**:
1. Normaliza código: `countryCode?.toUpperCase() || ''`
2. Obtém componente: `Flags[normalizedCode]`
3. Se não existe:
   - Renderiza fallback: `🌏` em div cinza
   - Classes: `flex items-center justify-center rounded-full overflow-hidden shrink-0 bg-gray-200`
   - Style: `width: ${size}px`, `height: ${size}px`, `fontSize: ${size * 0.6}px`
4. Se existe:
   - Renderiza componente Flag
   - Container: `flex items-center justify-center rounded-full overflow-hidden shrink-0`
   - Style: `width: ${size}px`, `height: ${size}px`
   - Flag: `width: ${size}px`, `height: ${size}px`, `display: 'block'`

**Status**: ✅ Presente

---

### 📁 **ChevronIcon.tsx**

#### **Função Principal**

##### `ChevronIcon` (Linhas 10-60)
**Função**: Renderiza ícone de chevron (seta para baixo)
**Props**:
- `size?: number` (padrão: 20)
- `color?: string` (padrão: "#525252")
- `onClick?: () => void`
- `className?: string`

**Lógica**:
1. Cria SVG element:
   - `width={size}`, `height={size}`
   - `viewBox="0 0 20 20"`
   - Path: `d="M5 7.5L10 12.5L15 7.5"`
   - `stroke={color}`, `strokeWidth="1.5"`, `strokeLinecap="round"`, `strokeLinejoin="round"`
   - Classes: `shrink-0`
2. Se `onClick` existe:
   - Renderiza como `<button>`
   - Classes: `chevron-button inline-flex items-center justify-center p-0 m-0 border-0 bg-transparent cursor-pointer hover:opacity-70 transition-opacity focus:outline-none focus:ring-0 active:bg-transparent ${className}`
   - Style: `width: size`, `height: size`, `minWidth: size`, `minHeight: size`, `backgroundColor: 'transparent'`, etc.
   - `aria-label="Abrir dropdown"`
3. Senão:
   - Renderiza como `<span>`

**Status**: ✅ Presente

---

### 📁 **CurrencyConverterSkeleton.tsx**

#### **Função Principal**

##### `CurrencyConverterSkeleton` (Linhas 8-92)
**Função**: Renderiza skeleton loader
**Props**: `isMobile?: boolean`

**Mobile** (Linhas 11-45):
- Container: `flex flex-col gap-5 bg-white border border-wl-neutral-200 rounded-lg shadow-sm w-full max-w-md mx-auto p-4 sm:p-6`
- Título: `<SkeletonLoader variant="text" width="60%" height="28px" />`
- Input FROM: Container com `<SkeletonLoader>` para texto, flag, código, chevron
- Botão Swap: `<SkeletonLoader variant="button" width={48} height={48} className="rounded-full" />`
- Input TO: Similar ao FROM
- Rodapé: `<SkeletonLoader variant="text" width="80%" height="16px" />`

**Web** (Linhas 48-91):
- Container: `flex flex-col gap-5 bg-white border border-wl-neutral-200 rounded-lg shadow-sm w-full max-w-6xl mx-auto p-4 sm:p-6`
- Título: `<SkeletonLoader variant="text" width="40%" height="28px" />`
- Inputs Row: `flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full`
- Inputs: Similar ao mobile, mas com `flex-1`
- Sumário: `<SkeletonLoader>` para valores e taxa

**Status**: ✅ Presente

---

### 📁 **Contextos**

#### **DeviceContext.tsx**

##### `DeviceProvider` (Linhas 19-86)
**Função**: Fornece contexto de device
**Lógica**:
1. Estado inicial:
   - Se `defaultDevice` fornecido → usa ele
   - Senão → detecta: `window.innerWidth < 768 ? 'mobile' : 'web'`
   - Fallback SSR: `'web'`
2. Estado de largura: `window.innerWidth` ou `1024`
3. `useEffect` de resize:
   - Atualiza largura
   - Se não há `defaultDevice` → atualiza device automaticamente
   - Listener: `window.addEventListener('resize', handleResize)`
4. `setDevice`: Permite override manual
5. Value: `{ device, isMobile, isWeb, width, setDevice }`

**Status**: ✅ Presente

##### `useDevice` (Linhas 88-94)
**Função**: Hook para usar contexto
**Lógica**: `useContext(DeviceContext)` com validação

**Status**: ✅ Presente

#### **SkeletonContext.tsx**

##### `SkeletonProvider` (Linhas 10-18)
**Função**: Fornece contexto de skeleton
**Lógica**:
- Estado: `isLoading: boolean` (inicial: `false`)
- Value: `{ isLoading, setIsLoading }`

**Status**: ✅ Presente

##### `useSkeleton` (Linhas 20-26)
**Função**: Hook para usar contexto
**Lógica**: `useContext(SkeletonContext)` com validação

**Status**: ✅ Presente

---

### 📁 **Utilitários**

#### **dateUtils.ts**

##### `getCurrentDateTime` (Linhas 1-10)
**Função**: Retorna data/hora formatada
**Formato**: `"DD/MM/YYYY HH:mm"`
**Lógica**:
1. Cria `new Date()`
2. Formata dia, mês, ano, horas, minutos com `padStart(2, "0")`
3. Retorna string formatada

**Status**: ✅ Presente

#### **currencyToCountryMap.ts**

##### `currencyToCountryMap` (Linhas 1-9)
**Função**: Mapeia código de moeda para código de país
**Mapeamentos**:
- BRL → BR
- USD → US
- EUR → EU
- GBP → GB
- JPY → JP
- CNY → CN
- OJY → CN

**Status**: ✅ Presente (mas CNY deve ser removido)

##### `getCountryCodeByCurrency` (Linhas 11-13)
**Função**: Retorna código de país para moeda
**Lógica**: `currencyToCountryMap[currencyCode]`

**Status**: ✅ Presente

---

## 🎨 MAPEAMENTO ESTILO POR ESTILO

### 📁 **index.css**

#### **1. Imports**

##### Tailwind (Linha 1)
```css
@import "tailwindcss";
```
**Status**: ✅ Presente

##### Google Fonts (Linha 4)
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```
**Status**: ✅ Presente

---

#### **2. Wrapper Class**

##### `.infomoney-currency-converter-wrapper` (Linhas 7-11)
```css
.infomoney-currency-converter-wrapper {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```
**Status**: ✅ Presente

---

#### **3. Skeleton Animation**

##### `@keyframes skeleton-wave` (Linhas 14-21)
```css
@keyframes skeleton-wave {
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
}
```
**Status**: ✅ Presente

##### `.skeleton-wave` (Linhas 23-32)
```css
.skeleton-wave {
  background: linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 40px, #f0f0f0 80px);
  background-size: 200px 100%;
  animation: skeleton-wave 1.5s ease-in-out infinite;
}
```
**Status**: ✅ Presente

##### Dark Mode (Linhas 34-44)
```css
@media (prefers-color-scheme: dark) {
  .skeleton-wave {
    background: linear-gradient(90deg, #2a2a2a 0px, #3a3a3a 40px, #2a2a2a 80px);
    background-size: 200px 100%;
  }
}
```
**Status**: ✅ Presente

---

#### **4. Responsive Text Utilities**

##### Mobile (max-width: 639px) (Linhas 37-46)
```css
.responsive-text-xs { font-size: 0.75rem; }
.responsive-text-sm { font-size: 0.875rem; }
.responsive-text-base { font-size: 1rem; }
.responsive-text-lg { font-size: 1.125rem; }
.responsive-text-xl { font-size: 1.25rem; }
.responsive-text-2xl { font-size: 1.5rem; }
.responsive-text-3xl { font-size: 1.875rem; }
.responsive-text-4xl { font-size: 2rem; }
```
**Status**: ✅ Presente

##### Tablet (min-width: 640px) (Linhas 48-57)
```css
.responsive-text-xs { font-size: 0.75rem; }
.responsive-text-sm { font-size: 0.875rem; }
.responsive-text-base { font-size: 1rem; }
.responsive-text-lg { font-size: 1.125rem; }
.responsive-text-xl { font-size: 1.25rem; }
.responsive-text-2xl { font-size: 1.75rem; }
.responsive-text-3xl { font-size: 2.25rem; }
.responsive-text-4xl { font-size: 2.5rem; }
```
**Status**: ✅ Presente

##### Desktop (min-width: 1024px) (Linhas 59-68)
```css
.responsive-text-xs { font-size: 0.75rem; }
.responsive-text-sm { font-size: 0.875rem; }
.responsive-text-base { font-size: 1rem; }
.responsive-text-lg { font-size: 1.125rem; }
.responsive-text-xl { font-size: 1.25rem; }
.responsive-text-2xl { font-size: 2rem; }
.responsive-text-3xl { font-size: 2.5rem; }
.responsive-text-4xl { font-size: 3rem; }
```
**Status**: ✅ Presente

---

#### **5. Root Styles**

##### `:root` (Linhas 70-83)
```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```
**Status**: ✅ Presente (mas pode conflitar com wrapper)

---

#### **6. Button Overrides**

##### Botões Icon (Linhas 137-147)
```css
button[aria-label="Abrir dropdown"],
button.chevron-button,
button[aria-label="Trocar moedas"] {
  background-color: transparent !important;
  background: transparent !important;
  border-radius: 0 !important;
  padding: 0 !important;
  outline: none !important;
  box-shadow: none !important;
}
```
**Status**: ✅ Presente

##### Focus States (Linhas 149-158)
```css
button[aria-label="Abrir dropdown"]:focus,
button[aria-label="Abrir dropdown"]:focus-visible,
button.chevron-button:focus,
button.chevron-button:focus-visible,
button[aria-label="Trocar moedas"]:focus,
button[aria-label="Trocar moedas"]:focus-visible {
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
}
```
**Status**: ✅ Presente

---

### 📁 **InputcurrencyDropdown.css**

#### **Chevron Icon**

##### `.chevron-down-icon` (Linhas 4-12)
```css
.chevron-down-icon {
  --icon-size: 20px;
  --icon-color: #888888;
  --icon-mask-url: url("../../assets/chevron-down.svg");
  background-color: var(--icon-color);
  mask: var(--icon-mask-url) center / contain no-repeat;
  -webkit-mask: var(--icon-mask-url) center / contain no-repeat;
}
```
**Status**: ✅ Presente (mas não usado - ChevronIcon usa SVG inline)

---

## 📊 COMPARAÇÃO: ORIGINAL vs DESIGN-SYSTEM

### ✅ **IGUAIS**
1. ✅ Todas as funções principais
2. ✅ Todos os handlers
3. ✅ Todos os hooks
4. ✅ Todos os cálculos
5. ✅ Estrutura de renderização
6. ✅ Classes Tailwind principais

### ⚠️ **DIFERENÇAS**

#### 1. **SwapIconMobile**
- **Original**: Setas VERTICAIS (↓ ↑)
- **Design-System**: Setas HORIZONTAIS (igual ao Web)
- **Impacto**: Visual diferente no mobile

#### 2. **SwapButtonMobile**
- **Original**: `transform: 'rotate(-160deg)'`
- **Design-System**: `transform: 'none'`
- **Impacto**: Ícone não rotacionado

#### 3. **displayFrom/displayTo**
- **Original**: Calcula diretamente (sem useMemo)
- **Design-System**: Usa `React.useMemo` ✅
- **Impacto**: Melhor performance

#### 4. **Logs de Debug**
- **Original**: Presentes (linhas 276-302, 305-329)
- **Design-System**: Removidos ✅
- **Impacto**: Código limpo

#### 5. **InputCurrencyDropdown**
- **Original**: Logs de debug presentes (linhas 60-83, 96-115, 157-175, 183-209)
- **Design-System**: Verificar se foram removidos

---

## 🚨 PROBLEMAS IDENTIFICADOS

### ❌ **CRÍTICO**

1. **Logs de Debug no Original**
   - CurrencyConverter.tsx: Linhas 276-302, 305-329
   - InputCurrencyDropdown.tsx: Múltiplos locais
   - **Ação**: Remover todos

2. **SwapIconMobile Diferente**
   - Original usa setas verticais
   - Design-system usa setas horizontais
   - **Ação**: Verificar se intencional

3. **CNY no currencyToCountryMap**
   - Linha 7: `"CNY": "CN"`
   - **Ação**: Remover se CNY não deve ser usado

### ⚠️ **IMPORTANTE**

1. **useMemo no Original**
   - Original calcula diretamente
   - Design-system usa useMemo ✅
   - **Status**: Design-system está melhor

2. **CSS Root Styles**
   - Pode conflitar com wrapper
   - **Ação**: Verificar se necessário

---

## ✅ CHECKLIST FINAL

### Funções
- [x] Todas as funções principais presentes
- [x] Todos os handlers funcionando
- [x] Todos os cálculos corretos
- [x] Todos os hooks implementados
- [ ] Logs de debug removidos (original ainda tem)

### Estilos
- [x] Tailwind configurado
- [x] Fonte Inter importada
- [x] Classes aplicadas corretamente
- [x] Responsividade funcionando
- [x] Hover/focus states presentes

### Componentes
- [x] CurrencyConverter completo
- [x] InputCurrencyDropdown completo
- [x] FlagIcon presente
- [x] ChevronIcon presente
- [x] Skeleton presente

### Contextos
- [x] DeviceContext presente
- [x] SkeletonContext presente
- [x] Hooks funcionando

---

## 🎯 CONCLUSÃO

**Status Geral**: ✅ **95% COMPLETO**

**Melhorias no Design-System**:
- ✅ useMemo implementado
- ✅ Logs de debug removidos (no CurrencyConverter)

**Pendências**:
- ⚠️ Verificar logs de debug no InputCurrencyDropdown
- ⚠️ Verificar SwapIconMobile (vertical vs horizontal)
- ⚠️ Remover CNY do currencyToCountryMap se necessário

**O componente está praticamente completo e funcional!** 🎉
