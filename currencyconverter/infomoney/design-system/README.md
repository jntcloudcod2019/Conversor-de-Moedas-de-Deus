Design System – currency-converter
==================================

Estrutura para empacotar o componente `currency-converter` consumido por WordPress/Gutenberg.

## Estrutura

```
design-system/
├── src/componentes/currency-converter/  # Código fonte React/TypeScript
│   ├── calculators/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── input-currency-dropdown/
│   ├── services/
│   ├── utils/
│   ├── assets/
│   ├── CurrencyConverter.tsx
│   ├── index.ts
│   ├── index.css
│   └── main.jsx
└── dist/componentes/currency-converter/  # Build output (gerado)
    ├── index.esm.js
    ├── index.cjs.js
    └── style.css
```

## Como usar

### 1. Instalar dependências

```bash
cd infomoney/design-system
npm install
```

### 2. Build do componente

```bash
npm run build
```

Isso gera os arquivos em `dist/componentes/currency-converter/`:
- `index.esm.js` - Bundle ESM
- `index.cjs.js` - Bundle CommonJS
- `style.css` - CSS compilado do Tailwind

### 3. Copiar para WordPress

Copie os arquivos de `dist/componentes/currency-converter/` para:
- Plugin: `wordpress/plugins/infomoney-blocks/assets/currency-converter/`
- Tema: `wordpress/themes/infomoney/v2/components/currency-converter/`

## Notas

- Tailwind: classes utilitárias são compiladas na saída de CSS do bundler.
- React/ReactDOM são externalizados (não incluídos no bundle).
- O componente exporta `CurrencyConverter` e `initCurrencyConverter()` para inicialização.
