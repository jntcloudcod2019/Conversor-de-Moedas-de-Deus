# 🔧 Correção: Erro "Cannot use import statement outside a module"

## ❌ Erro Original

```
Uncaught SyntaxError: Cannot use import statement outside a module 
(at index.esm.js?ver=1768471205:1:1)
```

## 🔍 Causa

O arquivo `index.esm.js` é um **módulo ES6** (ES Module), mas estava sendo carregado como um script JavaScript normal. Módulos ES6 precisam do atributo `type="module"` na tag `<script>`.

## ✅ Solução Aplicada

### 1. Modificado `infomoney-blocks.php`

Adicionado filtro para injetar `type="module"` no script:

```php
// Adicionar atributo type="module" ao script
add_filter('script_loader_tag', function($tag, $handle) {
    if ($handle === INFOMONEY_CC_HANDLE . '-ds') {
        // Substituir o tag do script para adicionar type="module"
        $tag = str_replace('<script ', '<script type="module" ', $tag);
    }
    return $tag;
}, 10, 2);
```

### 2. Removidas Dependências

Módulos ES6 não podem usar dependências do WordPress (`wp-element`, `react`, etc.) da mesma forma. O módulo carrega suas próprias dependências.

### 3. Config Injetada Corretamente

A configuração `INFOMONEY_CC_CONFIG` agora é injetada como script inline **antes** do módulo, usando `wp_add_inline_script` com `'before'`.

## 🧪 Teste

Após a correção:

1. **Limpe o cache do navegador** (Ctrl+Shift+R)
2. **Recarregue a página**
3. **Verifique o console** - não deve mais ter o erro
4. **Verifique o HTML** - o script deve ter `type="module"`:

```html
<script type="module" src=".../index.esm.js?ver=..."></script>
```

## 📝 O Que Mudou

**Antes:**
```html
<script src=".../index.esm.js?ver=..."></script>
```

**Depois:**
```html
<script type="module" src=".../index.esm.js?ver=..."></script>
```

## ✅ Resultado Esperado

- ✅ Sem erro "Cannot use import statement"
- ✅ Módulo ES6 carrega corretamente
- ✅ `window.InfomoneyCurrencyConverter` disponível
- ✅ Componente renderiza no frontend

## 🐛 Se Ainda Não Funcionar

1. **Verifique o HTML gerado**:
   - F12 > Elements
   - Procure por `index.esm.js`
   - Deve ter `type="module"`

2. **Verifique o console**:
   - F12 > Console
   - Procure por novos erros

3. **Verifique Network tab**:
   - F12 > Network
   - Procure por `index.esm.js`
   - Status deve ser 200
   - Content-Type deve ser `application/javascript` ou `text/javascript`

4. **Limpe cache**:
   - Ctrl+Shift+R (ou Cmd+Shift+R)
   - Ou desative cache no DevTools

## 🎯 Próximos Passos

Após corrigir:
1. ✅ Módulo carrega sem erros
2. ✅ `window.InfomoneyCurrencyConverter` disponível
3. ✅ `view.js` pode usar `initCurrencyConverter`
4. ✅ Componente renderiza no frontend

**O erro deve estar resolvido agora!** 🎉
