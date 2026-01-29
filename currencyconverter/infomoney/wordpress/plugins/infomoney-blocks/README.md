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

## Notas

- O bundle do design system deve estar em `assets/currency-converter/`
- O bloco consome o bundle via `window.InfomoneyCurrencyConverter`
- O CSS do design system é enfileirado automaticamente
