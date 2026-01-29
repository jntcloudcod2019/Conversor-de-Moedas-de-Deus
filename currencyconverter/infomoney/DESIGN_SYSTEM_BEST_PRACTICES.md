# Design System para WordPress: Melhores Práticas
## React, JavaScript, Tailwind CSS e PHP

---

## 📚 Índice

1. [Arquitetura de Design System](#arquitetura-de-design-system)
2. [Build com Vite e Externalização do React](#build-com-vite-e-externalização-do-react)
3. [Integração WordPress: PHP e React](#integração-wordpress-php-e-react)
4. [Tailwind CSS em Plugins WordPress](#tailwind-css-em-plugins-wordpress)
5. [Padrões de Consumo: Global Window Pattern](#padrões-de-consumo-global-window-pattern)
6. [Estrutura de Monorepo](#estrutura-de-monorepo)
7. [Checklist de Implementação](#checklist-de-implementação)

---

## 🏗️ Arquitetura de Design System

### Princípios Fundamentais

1. **Separação de Responsabilidades**
   - **Design System**: Componentes React reutilizáveis, independentes de WordPress
   - **Plugin WordPress**: Consome o design system via build artifacts (`dist/`)
   - **Tema WordPress**: Pode consumir o mesmo design system

2. **Estrutura de Diretórios Recomendada**
   ```
   projeto/
   ├── design-system/          # Biblioteca de componentes
   │   ├── src/
   │   │   └── componentes/
   │   │       └── currency-converter/
   │   ├── dist/               # Build artifacts (JS, CSS, tipos)
   │   ├── vite.config.js
   │   └── package.json
   │
   └── wordpress/
       └── plugins/
           └── infomoney-blocks/
               ├── src/        # Código do plugin (PHP + JS)
               ├── build/      # Build do plugin (wp-scripts)
               └── assets/     # Assets copiados do design-system/dist
   ```

3. **Formato de Build**
   - **ES Modules (ESM)**: Para navegadores modernos e bundlers
   - **CommonJS (CJS)**: Para compatibilidade com Node.js e alguns sistemas
   - **UMD/IIFE**: Opcional, para exposição global direta

---

## ⚙️ Build com Vite e Externalização do React

### Configuração Crítica do Vite

**⚠️ ERRO COMUM**: Não externalizar `react/jsx-runtime` causa erro:
```
Cannot read property 'ReactCurrentDispatcher' of undefined
```

**✅ Configuração Correta** (`vite.config.js`):

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/componentes/currency-converter/index.ts'),
      name: 'InfomoneyCurrencyConverter',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'esm' : 'cjs'}.js`,
    },
    rollupOptions: {
      // ✅ EXTERNALIZAR React, ReactDOM E react/jsx-runtime
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        },
      },
    },
    outDir: 'dist/componentes/currency-converter',
    cssCodeSplit: false,
    cssMinify: true,
  },
});
```

### Quando Externalizar vs. Incluir no Bundle

**Externalizar React quando:**
- WordPress já fornece React via `wp-element`
- Múltiplos plugins compartilham o mesmo React
- Reduz tamanho do bundle

**Incluir React no bundle quando:**
- Componente funciona como módulo ES6 standalone
- Não há garantia de React disponível no ambiente
- Componente será usado fora do WordPress

**Para este projeto**: Como o componente precisa funcionar standalone, **não externalizar** React está correto.

---

## 🔌 Integração WordPress: PHP e React

### 1. Registro de Bloco (PHP)

```php
<?php
// register_block_type() no hook 'init'
add_action('init', function() {
    register_block_type(
        __DIR__ . '/build/infomoney-currency-converter',
        [
            'render_callback' => 'render_currency_converter',
        ]
    );
});

function render_currency_converter($attributes) {
    $config = [
        'baseCurrency' => $attributes['baseCurrency'] ?? 'USD',
        'targetCurrency' => $attributes['targetCurrency'] ?? 'BRL',
        'endpoint' => get_option('infomoney_api_endpoint', ''),
        'apiKey' => get_option('infomoney_api_key', ''),
    ];
    
    $block_id = 'infomoney-cc-' . uniqid();
    
    ob_start();
    ?>
    <div 
        id="<?php echo esc_attr($block_id); ?>"
        class="wp-block-infomoney-currency-converter"
        data-base-currency="<?php echo esc_attr($config['baseCurrency']); ?>"
        data-target-currency="<?php echo esc_attr($config['targetCurrency']); ?>"
        data-config="<?php echo esc_attr(json_encode($config)); ?>"
    >
        <!-- Fallback HTML estático -->
        <div class="infomoney-cc-fallback">
            <h3>Conversor de moedas</h3>
            <p>Carregando conversor...</p>
        </div>
    </div>
    <?php
    return ob_get_clean();
}
```

### 2. Enqueue de Scripts e Estilos (PHP)

```php
add_action('wp_enqueue_scripts', function() {
    // ✅ Enfileirar React do WordPress (se disponível)
    wp_enqueue_script('wp-element');
    
    // ✅ Enfileirar design system (build artifacts)
    wp_enqueue_script(
        'infomoney-currency-converter-ds',
        plugin_dir_url(__FILE__) . 'assets/currency-converter/index.esm.js',
        ['wp-element'], // Dependências
        '1.0.0',
        true
    );
    
    // ✅ Enfileirar CSS do design system
    wp_enqueue_style(
        'infomoney-currency-converter-ds-css',
        plugin_dir_url(__FILE__) . 'assets/currency-converter/style.css',
        [],
        '1.0.0'
    );
    
    // ✅ Script do bloco (view.tsx compilado)
    wp_enqueue_script(
        'infomoney-currency-converter-view',
        plugin_dir_url(__FILE__) . 'build/infomoney-currency-converter/view.js',
        ['infomoney-currency-converter-ds'],
        '1.0.0',
        true
    );
});
```

### 3. Padrão de Inicialização (JavaScript)

```typescript
// design-system/src/componentes/currency-converter/init.tsx
export function initCurrencyConverter(
  containerId: string,
  props: CurrencyConverterProps
): void {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <CurrencyConverter {...props} />
    </StrictMode>
  );
}

// Expor globalmente
if (typeof window !== 'undefined') {
  (window as any).InfomoneyCurrencyConverter = {
    initCurrencyConverter
  };
}
```

```typescript
// plugin/src/infomoney-currency-converter/view.tsx
(function() {
  function initBlocks() {
    const blocks = document.querySelectorAll('.wp-block-infomoney-currency-converter');
    
    blocks.forEach((block) => {
      const config = JSON.parse(block.getAttribute('data-config') || '{}');
      
      // ✅ Verificar se o módulo global está disponível
      if (window.InfomoneyCurrencyConverter?.initCurrencyConverter) {
        window.InfomoneyCurrencyConverter.initCurrencyConverter(
          block.id,
          {
            fromCurrency: { code: config.baseCurrency },
            toCurrency: { code: config.targetCurrency },
            // ... outras props
          }
        );
      }
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBlocks);
  } else {
    initBlocks();
  }
})();
```

---

## 🎨 Tailwind CSS em Plugins WordPress

### Configuração do Tailwind

**`tailwind.config.js`**:
```javascript
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './build/**/*.php', // Incluir templates PHP
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Build Process

**`package.json`** (design-system):
```json
{
  "scripts": {
    "build": "vite build && npm run build:types",
    "build:tailwind": "tailwindcss -i ./src/input.css -o ./dist/style.css",
    "build:watch": "vite build --watch"
  }
}
```

**`package.json`** (plugin):
```json
{
  "scripts": {
    "prebuild": "cp ../../design-system/dist/**/* assets/",
    "build": "wp-scripts build"
  }
}
```

### Integração com Vite

Vite processa Tailwind automaticamente via PostCSS:

**`postcss.config.js`**:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**CSS de entrada** (`src/input.css`):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🌐 Padrões de Consumo: Global Window Pattern

### Por que usar Global Window Pattern?

1. **Evita Bundle Bloat**: Não duplica dependências
2. **Compatibilidade**: Funciona com múltiplos plugins
3. **Performance**: Carrega dependências uma vez

### Implementação

**1. Design System expõe globalmente**:
```typescript
// design-system/src/componentes/currency-converter/index.ts
import { initCurrencyConverter } from './init';

if (typeof window !== 'undefined') {
  (window as any).InfomoneyCurrencyConverter = {
    initCurrencyConverter,
  };
}
```

**2. Plugin verifica disponibilidade**:
```typescript
// plugin/src/view.tsx
function hasModule(): boolean {
  return !!(window as any).InfomoneyCurrencyConverter?.initCurrencyConverter;
}

function initBlocks() {
  if (!hasModule()) {
    // Retry ou mostrar fallback
    setTimeout(initBlocks, 100);
    return;
  }
  
  // Inicializar blocos
}
```

**3. Fallback HTML**:
```html
<div class="wp-block-infomoney-currency-converter">
  <!-- Fallback estático -->
  <div class="infomoney-cc-fallback">
    <p>Carregando conversor...</p>
  </div>
</div>
```

---

## 📦 Estrutura de Monorepo

### Benefícios

1. **Versionamento Centralizado**: Uma versão para design system e plugins
2. **Build Sincronizado**: Mudanças no design system refletem nos plugins
3. **Desenvolvimento Unificado**: Testes e linting compartilhados

### Estrutura Recomendada

```
monorepo/
├── design-system/
│   ├── src/
│   ├── dist/              # Build artifacts
│   ├── package.json
│   └── vite.config.js
│
├── wordpress/
│   └── plugins/
│       └── infomoney-blocks/
│           ├── src/
│           ├── build/
│           ├── assets/     # Copiado de design-system/dist
│           └── package.json
│
└── package.json            # Root (opcional, para scripts compartilhados)
```

### Scripts de Build Coordenados

**Root `package.json`**:
```json
{
  "scripts": {
    "build:ds": "cd design-system && npm run build",
    "build:plugin": "cd wordpress/plugins/infomoney-blocks && npm run build",
    "build:all": "npm run build:ds && npm run build:plugin"
  }
}
```

**Plugin `package.json`**:
```json
{
  "scripts": {
    "prebuild": "mkdir -p assets/currency-converter && cp ../../design-system/dist/componentes/currency-converter/* assets/currency-converter/",
    "build": "wp-scripts build"
  }
}
```

---

## ✅ Checklist de Implementação

### Design System

- [ ] Vite configurado com `lib` mode
- [ ] React externalizado corretamente (incluindo `react/jsx-runtime`)
- [ ] Build gera ESM e CJS
- [ ] CSS compilado e minificado
- [ ] Tipos TypeScript gerados (`.d.ts`)
- [ ] Função `initCurrencyConverter` exposta globalmente
- [ ] Tailwind configurado e processado via PostCSS

### Plugin WordPress

- [ ] Bloco registrado via `register_block_type()`
- [ ] `render_callback` PHP gera HTML com `data-config`
- [ ] Scripts enfileirados com dependências corretas
- [ ] CSS do design system enfileirado
- [ ] `view.tsx` verifica disponibilidade do módulo global
- [ ] Fallback HTML exibido se React não carregar
- [ ] Assets copiados do design-system/dist no prebuild

### Testes

- [ ] Componente renderiza no WordPress
- [ ] Swap button funciona (mobile e desktop)
- [ ] Conversão de moedas funciona
- [ ] Fallback exibido se JavaScript desabilitado
- [ ] Múltiplos blocos na mesma página funcionam
- [ ] Sem erros no console

---

## 🔗 Referências

1. [WordPress React Components Guide](https://developer.wordpress.org/news/2024/03/how-to-use-wordpress-react-components-for-plugin-pages)
2. [WordPress Block Registration](https://developer.wordpress.org/block-editor/getting-started/fundamentals/registration-of-a-block/)
3. [Building React Component Library with Vite](https://medium.com/@jhaelrodriguez.331/building-a-react-component-library-with-vite-lessons-learned-5491f9c5963b)
4. [Tailwind CSS WordPress Integration](https://webdeveducation.com/using-tailwind-css-in-wordpress-blocks/)
5. [WordPress Monorepo Setup](https://wpelevator.com/guides/monorepos)

---

## 📝 Notas Finais

### Decisões Arquiteturais para Este Projeto

1. **React não externalizado**: Componente funciona standalone
2. **Global Window Pattern**: `window.InfomoneyCurrencyConverter.initCurrencyConverter`
3. **Build Artifacts**: Plugin consome `design-system/dist/`
4. **Fallback HTML**: Garante acessibilidade e SEO
5. **TypeScript**: Tipos compartilhados via `.d.ts`

### Próximos Passos Recomendados

1. ✅ Aplicar correções no `vite.config.js` (se necessário externalizar React)
2. ✅ Verificar paths de assets (SVG, CSS) no build
3. ✅ Testar swap button em mobile
4. ✅ Validar múltiplos blocos na mesma página
5. ✅ Documentar APIs públicas do design system

---

**Última atualização**: Janeiro 2026
**Versão**: 1.0.0
