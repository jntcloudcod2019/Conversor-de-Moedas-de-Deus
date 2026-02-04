# Diagnóstico: Falha de Renderização do Bloco Conversor de Moedas

## 3 causas mais prováveis

### 1. Conflito de duas instâncias do React (editor)

O script do **editor** (`index.js`) importava o build do design-system (`index.esm.js`), que já inclui React no bundle. O WordPress enfileira o editor com dependência `wp-element` (React). Resultado: duas instâncias do React no mesmo contexto → "Invalid hook call", árvore quebrada e layout falhando.

**Correção:** O webpack do plugin foi ajustado para que o editor use o **código-fonte** do design-system (alias do `index.esm.js` para `index.no-css.ts`). Assim o editor usa apenas o React do WordPress (externals do `@wordpress/scripts`).

### 2. Ordem de enfileiramento e escopo de CSS

Se o tema ou outro CSS aplicar `display: none` ou sobrescrever Flexbox no container do bloco, o layout quebra. Além disso, as variáveis do design-system (Tailwind) precisam estar definidas no escopo do bloco.

**Correção:** O PHP enfileira na ordem: 1) `theme-block.css` (variáveis e escopo `.wp-block-infomoney-currency-converter`), 2) `style.css` do design-system. O container no `render.php` usa a classe `wp-block-infomoney-currency-converter` (e opcionalmente `id="infomoney-cc-{id}"`); o view usa `querySelectorAll('.wp-block-infomoney-currency-converter')`, sem depender do ID.

### 3. Falha no carregamento do módulo ou da API (frontend)

Se o `import()` do `index.esm.js` falhar (404, CORS, rede) ou o `renderCurrencyConverter` lançar, o usuário ficava só com "Carregando conversor...".

**Correção:** Fallback no view: em caso de erro no `import()` ou na chamada a `renderCurrencyConverter`, o bloco recebe a classe `infomoney-cc-error`, o fallback ganha `data-error="true"` e a mensagem passa a: "Falha ao carregar o conversor. Verifique sua conexão ou tente recarregar a página." Foi adicionado também um timeout (10s): se o módulo não carregar nesse tempo, o mesmo fallback é exibido.

---

## Trechos de código corrigidos

### Registro do bloco (editor) – uso da fonte do design-system

O `index.tsx` do editor continua importando do path do build; o **webpack** redireciona esse path para a fonte:

```ts
// src/infomoney-currency-converter/index.tsx
import { CurrencyConverter } from "../../../../../design-system/dist/componentes/currency-converter/index.esm.js";
// ↑ No build do editor, o webpack resolve isso para o código-fonte (index.no-css.ts)
// para compartilhar o React do wp-element.
```

No `webpack.config.js` (editor):

```js
resolve: {
  ...baseConfig.resolve,
  alias: {
    ...(baseConfig.resolve && baseConfig.resolve.alias),
    [path.resolve(__dirname, '../../../design-system/dist/componentes/currency-converter/index.esm.js')]: path.join(designSystemSrc, 'index.no-css.ts'),
  },
},
```

### Enfileiramento no PHP

As dependências do **editor** vêm do `index.asset.php` gerado pelo `@wordpress/scripts` (ex.: `wp-blocks`, `wp-element`, `wp-block-editor`, `react`, `react-dom`). O bloco é registrado com `register_block_type($block_dir)`, então o core enfileira o `editorScript` com essas dependências. O plugin só enfileira os CSS na ordem correta:

```php
// 1) Tema (variáveis) → 2) Design system
$deps = array();
wp_enqueue_style(INFOMONEY_CC_HANDLE . '-theme', ...);
$deps[] = INFOMONEY_CC_HANDLE . '-theme';
wp_enqueue_style(INFOMONEY_CC_HANDLE . '-ds', ..., $deps, ...);
```

E o view script (módulo) recebe `data-ds-url` para o dynamic import:

```php
add_filter('script_loader_tag', function ($tag, $handle) use ($view_module_handle, $ds_url) {
    if ($view_module_handle && $handle === $view_module_handle) {
        $tag = str_replace(' src', ' data-ds-url="' . esc_attr($ds_url) . '" src', $tag);
    }
    return $tag;
}, 10, 2);
```

### Fallback quando o conversor não carrega

- **View:** Se `data-ds-url` estiver ausente, o import falhar ou `renderCurrencyConverter` lançar, todos os blocos da página recebem o estado de erro (classe `infomoney-cc-error`, fallback com `data-error` e mensagem de falha). Um timeout de 10s aplica o mesmo estado se o módulo não tiver carregado.
- **API de conversão:** O componente do design-system usa `useCurrencyConverterData`, que já trata erro da API e expõe `error` e `retry`. O fallback de “falha ao carregar” no view cobre falha de **script/módulo**; falhas só da API podem ser tratadas no próprio componente (ex.: exibir mensagem e botão “Tentar novamente” usando `error` e `retry`).

---

## Verificações rápidas

| Item | O que checar |
|------|-------------------------------|
| **index.asset.php** | Dependências: `react`, `react-dom`, `wp-block-editor`, `wp-blocks`, `wp-element`. |
| **DOM** | Container com classe `wp-block-infomoney-currency-converter` e `data-config`; view usa essa classe, não depende de ID. |
| **CSS** | `theme-block.css` carregado antes de `style.css`; sem regras do tema sobrescrevendo o bloco com `display: none` ou quebrando flex. |
| **CORS / Rede** | Se o conversor não aparecer, verificar no DevTools (Rede/Console) se `index.esm.js` retorna 200 e se não há erro de CORS. |
