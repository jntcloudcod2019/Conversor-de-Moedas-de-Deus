# Reduzir declarações de `const` no CurrencyConverter

Baseado na documentação oficial do React e em boas práticas (React Native usa os mesmos Hooks).

---

## 1. Constantes estáticas fora do componente

**Problema:** `titleStyles`, `titleWrapperStyles` e `containerClassName` são recriados em todo render.

**Solução (React):** Objetos e strings que não dependem de props/state devem ficar **fora do componente**, no nível do módulo.

```ts
// No topo do arquivo, fora do componente
const TITLE_STYLES: React.CSSProperties = {
  overflow: 'visible',
  textOverflow: 'clip',
  wordBreak: 'normal',
  maxWidth: 'none',
  width: '100%',
  display: 'block',
};

const TITLE_WRAPPER_STYLES: React.CSSProperties = {
  overflow: 'visible',
  maxWidth: 'none',
  width: '100%',
};

const CONTAINER_CLASS_NAME =
  "flex flex-col gap-5 bg-white border-2 border-wl-neutral-200 rounded-2xl ...";
```

Dentro do componente: usar `TITLE_STYLES`, `TITLE_WRAPPER_STYLES`, `CONTAINER_CLASS_NAME` (menos `const` e menos alocação por render).

---

## 2. Custom Hooks – concentrar lógica (documentação React)

**Fonte:** [Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

Cada Hook encapsula estado + efeitos + callbacks e retorna **um único valor (ou um objeto)**. O componente fica com menos `const` e mais legível.

### 2.1 Hook para proteção do título

Todo o bloco (refs + `protectTitle` + `titleRefCallback` + `useEffect` de cleanup) vira um Hook:

```ts
function useTitleProtection() {
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const observerRef = React.useRef<MutationObserver | null>(null);
  const protectionIntervalRef = React.useRef<number | null>(null);

  const protectTitle = React.useCallback(() => {
    if (titleRef.current?.textContent !== 'Conversor de moedas') {
      titleRef.current!.textContent = 'Conversor de moedas';
    }
  }, []);

  const titleRefCallback = React.useCallback((el: HTMLHeadingElement | null) => {
    titleRef.current = el;
    if (el) {
      const observer = new MutationObserver(() => protectTitle());
      observer.observe(el, { childList: true, subtree: true, characterData: true });
      observerRef.current = observer;
      protectionIntervalRef.current = window.setInterval(protectTitle, 500);
    } else {
      observerRef.current?.disconnect();
      if (protectionIntervalRef.current) clearInterval(protectionIntervalRef.current);
    }
  }, [protectTitle]);

  React.useEffect(() => () => {
    observerRef.current?.disconnect();
    if (protectionIntervalRef.current) clearInterval(protectionIntervalRef.current);
  }, []);

  return { titleRefCallback };
}
```

No componente: **um único** `const { titleRefCallback } = useTitleProtection();` no lugar de vários refs e callbacks.

### 2.2 Hook para separadores de locale

```ts
function useLocaleSeparators() {
  return React.useMemo(() => {
    const locale = navigator.language || "pt-BR";
    const isPortugueseBR = locale.startsWith("pt");
    return {
      decimalSeparator: isPortugueseBR ? "," : ".",
      thousandSeparator: isPortugueseBR ? "." : ",",
    };
  }, []);
}
```

No componente: `const { decimalSeparator, thousandSeparator } = useLocaleSeparators();` (1 linha em vez de 4 `const`).

### 2.3 Hook para dados derivados (currencies, exchangeRates, lastUpdated)

```ts
function useConverterData(props: {
  converterData?: CurrencyConverterData | null;
  loadedData: CurrencyConverterData | null;
  propCurrencies: Currency[];
  propExchangeRates?: Record<string, number>;
  propLastUpdated?: string;
}) {
  return React.useMemo(
    () => ({
      currencies: props.converterData?.currencies ?? props.loadedData?.currencies ?? props.propCurrencies,
      exchangeRates: props.converterData?.exchangeRates ?? props.loadedData?.exchangeRates ?? props.propExchangeRates,
      lastUpdated: props.converterData?.lastUpdated ?? props.loadedData?.lastUpdated ?? props.propLastUpdated,
    }),
    [props.converterData, props.loadedData, props.propCurrencies, props.propExchangeRates, props.propLastUpdated]
  );
}
```

No componente: `const { currencies, exchangeRates, lastUpdated } = useConverterData({ ... });` (1 linha em vez de 3 `const`).

---

## 3. useReducer – vários estados relacionados (documentação React)

**Fonte:** [Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)

Quando há **muitas atualizações de estado** em vários handlers, concentrar em um reducer reduz `useState` e deixa a intenção (“o que aconteceu”) mais clara.

No seu caso, `rawFromInput`, `rawToInput`, `rate`, `showSkeleton` podem ser um único estado + reducer:

```ts
type ConverterUIState = {
  rawFromInput: string;
  rawToInput: string;
  rate: number;
  showSkeleton: boolean;
};

function converterUIReducer(state: ConverterUIState, action: { type: string; payload?: unknown }) {
  switch (action.type) {
    case 'SET_RAW_FROM': return { ...state, rawFromInput: action.payload as string };
    case 'SET_RAW_TO': return { ...state, rawToInput: action.payload as string };
    case 'SET_RATE': return { ...state, rate: action.payload as number };
    case 'HIDE_SKELETON': return { ...state, showSkeleton: false };
    default: return state;
  }
}

// No componente:
const [uiState, dispatch] = useReducer(converterUIReducer, {
  rawFromInput: '',
  rawToInput: '',
  rate: propRate ?? 1,
  showSkeleton: true,
});
```

Assim você troca 4 `useState` + vários `setX` por **1** `useReducer` e `dispatch`. Handlers passam a fazer `dispatch({ type: 'SET_RAW_FROM', payload: raw })` em vez de vários `setRawFromInput`, etc.

---

## 4. useMemo / useCallback – manter só onde vale a pena

**Fonte:** [useMemo](https://react.dev/reference/react/useMemo), [useCallback](https://react.dev/reference/react/useCallback)

- **useMemo:** você já usa bem para `displayFrom`, `displayTo`, `lastUpdatedLabel`. Manter para valores derivados “caros” ou que precisam de referência estável.
- **useCallback:** usar para handlers que são passados a filhos (ex.: `handleInputChange`, `handleToInputChange`) para evitar re-renders desnecessários. Não é obrigatório criar `useCallback` para cada função; priorize as que vão em props de filhos.

Não é necessário “encapsular” tudo em useMemo/useCallback; a documentação recomenda usar para cálculos mais pesados ou quando a referência estável importa.

---

## 5. Resumo prático (ordem sugerida)

| O que fazer | Efeito |
|-------------|--------|
| Mover `titleStyles`, `titleWrapperStyles`, `containerClassName` para constantes no topo do módulo | Menos `const` por render, código mais limpo |
| Extrair `useTitleProtection()` | Um `const { titleRefCallback }` no lugar de vários refs + callbacks + effects |
| Extrair `useLocaleSeparators()` | Um `const { decimalSeparator, thousandSeparator }` no lugar de 4 const |
| Extrair `useConverterData(...)` | Um `const { currencies, exchangeRates, lastUpdated }` no lugar de 3 const |
| (Opcional) useReducer para `rawFromInput`, `rawToInput`, `rate`, `showSkeleton` | 1 estado + dispatch em vez de 4 useState |

Com isso, o componente passa a ter menos declarações de `const` e a intenção (“uso proteção do título”, “uso dados do conversor”, “uso locale”) fica explícita nos nomes dos Hooks, alinhado à documentação do React e ao uso dos mesmos Hooks no React Native.
