# Infomoney Blocks - Currency Converter

## Estrutura

```
infomoney-blocks/
├── src/
│   └── infomoney-currency-converter/
│       ├── block.json          # Metadados do bloco
│       ├── index.tsx           # Editor do bloco
│       ├── view.tsx            # Frontend do bloco
│       └── style.css           # Estilos do bloco
├── build/                      # Arquivos compilados (gerados)
│   └── infomoney-currency-converter/
│       ├── block.json
│       ├── index.js
│       ├── view.js
│       └── style.css
├── assets/
│   └── currency-converter/     # Bundle do design system
│       ├── index.esm.js
│       └── style.css
└── infomoney-blocks.php        # Bootstrap do plugin
```

## Build

1. Instalar dependências:
```bash
npm install
```

2. Compilar o bloco:
```bash
npm run build
```

Isso gera os arquivos em `build/infomoney-currency-converter/`.

## Uso do build do design-system

O **view.js** do bloco não inclui React nem o componente: só carrega o build do design-system (`index.esm.js`) via `import()` e chama `renderCurrencyConverter(container, config)` em cada bloco. A URL do build é passada pelo PHP em `data-ds-url` no script.

Para ter o build do design-system em `assets/currency-converter/`:

1. No design-system: `npm run build-and-copy` (copia `index.esm.js`, `index.cjs.js`, `style.css` para o plugin).
2. Ou copie manualmente de `design-system/dist/componentes/currency-converter/` para `plugins/infomoney-blocks/assets/currency-converter/`.

O PHP enfileira `theme-block.css` e `style.css` do design-system; o `index.esm.js` é carregado sob demanda pelo view.
