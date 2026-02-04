# Fluxo WordPress – Bloco Currency Converter

## 1. Registro do bloco (PHP)

- **Arquivo:** `infomoney-blocks.php`
- **Hook:** `init` (prioridade 20)
- **Função:** `infomoney_cc_register_block()`
- **Ação:** `register_block_type( $block_dir )` com `$block_dir = __DIR__ . '/build/infomoney-currency-converter'`
- **Efeito:** WordPress lê `build/infomoney-currency-converter/block.json` e registra o bloco com os scripts/styles/render definidos ali.

---

## 2. Assets do design system (PHP)

- **Arquivo:** `infomoney-blocks.php`
- **Hooks:** `enqueue_block_assets` e `wp_enqueue_scripts`
- **Função:** `infomoney_cc_enqueue_assets()`
- **Ação:**
  - Registra e enfileira o script do design system: `assets/currency-converter/index.esm.js` (handle: `infomoney-currency-converter-ds`), com `type="module"`.
  - Enfileira o CSS: `assets/currency-converter/style.css`.
  - Injeta `window.INFOMONEY_CC_CONFIG` antes do script (inline).
- **Onde carrega:** Editor e frontend (sempre que o plugin está ativo).

---

## 3. O que o `block.json` define

- **editorScript:** `./index.js` → carrega só no **editor** (React do bloco no Gutenberg).
- **viewScriptModule:** `./view.js` → carrega só no **frontend** como ESM, quando o bloco aparece na página.
- **style:** `./style-index.css` → estilos do bloco (editor + front).
- **render:** `./render.php` → callback de renderização no servidor no front.

Todos os caminhos são relativos a `build/infomoney-currency-converter/`.

---

## 4. Frontend: quando a página tem o bloco

### 4.1 Servidor (PHP)

1. WordPress chama o **render** do bloco → `render.php`.
2. `render.php` usa `$attributes['baseCurrency']`, `$attributes['targetCurrency']`, gera um `wp_unique_id()` e monta um `<div>` com:
   - `id="infomoney-cc-{id}"`
   - `class="wp-block-infomoney-currency-converter"`
   - `data-base-currency`, `data-target-currency`, `data-config` (JSON com baseCurrency, targetCurrency, exchangeRates, etc.)
   - Bloco de fallback (HTML estático) e `<noscript>`.
3. Esse HTML é enviado na página.

### 4.2 Cliente (scripts)

1. **Design system** (opcional): `assets/currency-converter/index.esm.js` e `style.css` são enfileirados pelo plugin; o **view.js** do bloco já inclui o componente (bundle do build).
2. WordPress enfileira o **viewScriptModule** do bloco → `view.js` (porque o bloco está no conteúdo). O script é carregado como módulo (defer).
3. **view.js** roda no front:
   - Como módulos podem executar depois do `DOMContentLoaded`, o script verifica `document.readyState`: se já for `complete`/`interactive`, inicializa logo; senão, espera `DOMContentLoaded`. Ref: [Including Frontend JavaScript with a Block (10up)](https://gutenberg.10up.com/guides/including-frontend-javascript-with-a-block/).
   - Acha todos os `.wp-block-infomoney-currency-converter`;
   - Para cada um: lê `id`, `data-config`, monta props (fromValue, toValue, currencies, apiToken, etc.);
   - Obtém o elemento raiz `#{containerId}-root` (definido em `render.php`), usa `createRoot` (React 18) e renderiza `<CurrencyConverter {...props} />`.
4. O fallback HTML é ocultado e a raiz do React é exibida quando a renderização ocorre com sucesso; em erro, a mensagem é exibida no fallback.

---

## 5. Ordem objetiva no frontend

1. HTML da página (incluindo o output de `render.php`).
2. CSS do design system (`assets/currency-converter/style.css`) e do bloco (`style-index.css`).
3. Script inline `window.INFOMONEY_CC_CONFIG` (se design system for enfileirado).
4. Script do design system `index.esm.js` (módulo), quando enfileirado.
5. view.js do bloco (viewScriptModule) → dependências React/ReactDOM (wp.asset); o bundle inclui o CurrencyConverter. Ao executar, verifica `document.readyState`, localiza os blocos e monta o React em cada `#{id}-root`.

**Importante:** O view.js é um módulo (defer). Ele pode rodar depois do evento `DOMContentLoaded`. Por isso o código usa `document.readyState === 'loading' ? addEventListener('DOMContentLoaded', ...) : runBlockInit()` para garantir que a inicialização rode com o DOM disponível.

---

## 6. Referências – React em blocos Gutenberg

- **[Including Frontend JavaScript with a Block](https://gutenberg.10up.com/guides/including-frontend-javascript-with-a-block/)** (10up) – viewScript, enqueue apenas quando o bloco está na página.
- **[Creating dynamic blocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/)** – blocos dinâmicos, `save: null`, render via PHP.
- **[Script Modules in 6.5](https://make.wordpress.org/core/2024/03/04/script-modules-in-6-5/)** – viewScriptModule, ESM no frontend.
- **[createRoot (React 18)](https://react.dev/reference/react-dom/client/createRoot)** – montar React no frontend em um nó DOM.
- **DOMContentLoaded vs. módulos:** scripts `type="module"` são deferidos; usar `document.readyState` para não perder o evento.
