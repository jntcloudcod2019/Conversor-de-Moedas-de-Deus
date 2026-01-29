# 🔧 Correção: Erro "Failed to resolve module specifier 'react'"

## ❌ Erro Original

```
Uncaught TypeError: Failed to resolve module specifier "react". 
Relative references must start with either "/", "./", or "../".
```

## 🔍 Causa

O Vite estava configurado para **externalizar** React e ReactDOM (não incluí-los no bundle), mas quando o módulo ES6 é carregado no navegador, ele tenta importar `"react"` como um módulo bare (sem caminho relativo).

**Módulos ES6 no navegador não conseguem resolver imports bare** como `import React from "react"` - eles precisam de:
- Caminhos relativos: `"./react.js"`
- Caminhos absolutos: `"/react.js"`
- Import maps (não suportado em todos os navegadores)

## ✅ Solução Aplicada

### 1. Removida Externalização de React

Modificado `vite.config.js` para **incluir React e ReactDOM no bundle**:

**Antes:**
```js
rollupOptions: {
  external: ['react', 'react-dom'], // ❌ Externalizado
  output: {
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
}
```

**Depois:**
```js
rollupOptions: {
  // ✅ React/ReactDOM incluídos no bundle
  output: {
    assetFileNames: 'style.css',
  },
}
```

### 2. Rebuild do Design System

O bundle agora inclui React e ReactDOM, então não precisa de imports externos.

## 📦 Tamanho do Bundle

**Antes** (com React externalizado):
- `index.esm.js`: ~1.2MB (sem React)

**Depois** (com React incluído):
- `index.esm.js`: ~1.5-2MB (com React incluído)

**Nota**: O bundle fica maior, mas funciona como módulo ES6 no navegador.

## 🧪 Teste

Após a correção:

1. **Limpe o cache do navegador** (Ctrl+Shift+R)
2. **Recarregue a página**
3. **Verifique o console** - não deve mais ter o erro de "Failed to resolve module specifier"
4. **Verifique o componente** - deve renderizar corretamente

## 📝 O Que Mudou

**Antes:**
```js
// index.esm.js tentava importar:
import React from "react"; // ❌ Não funciona no navegador
```

**Depois:**
```js
// index.esm.js inclui React no bundle:
// React está incluído no código, não precisa importar externamente
```

## ✅ Resultado Esperado

- ✅ Sem erro "Failed to resolve module specifier"
- ✅ React incluído no bundle
- ✅ Módulo ES6 funciona no navegador
- ✅ `window.InfomoneyCurrencyConverter` disponível
- ✅ Componente renderiza no frontend

## 🐛 Se Ainda Não Funcionar

1. **Verifique se o novo bundle foi copiado**:
   ```bash
   ls -lh infomoney/wordpress/plugins/infomoney-blocks/assets/currency-converter/index.esm.js
   ```

2. **Verifique o tamanho do arquivo**:
   - Deve estar maior (~1.5-2MB) porque inclui React

3. **Limpe cache completamente**:
   - Ctrl+Shift+R (ou Cmd+Shift+R)
   - Ou desative cache no DevTools > Network

4. **Verifique o console**:
   - F12 > Console
   - Procure por novos erros

## 🎯 Alternativas (Não Usadas)

Se quisesse manter React externalizado, precisaria:

1. **Import Maps** (suporte limitado):
   ```html
   <script type="importmap">
   {
     "imports": {
       "react": "https://esm.sh/react@19",
       "react-dom": "https://esm.sh/react-dom@19"
     }
   }
   </script>
   ```

2. **Carregar React antes** e expor globalmente:
   ```html
   <script src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
   <script src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>
   ```

Mas a solução atual (incluir no bundle) é mais simples e confiável.

## 🎉 Próximos Passos

Após corrigir:
1. ✅ Módulo carrega sem erros
2. ✅ React disponível no bundle
3. ✅ `window.InfomoneyCurrencyConverter` disponível
4. ✅ `view.js` pode usar `initCurrencyConverter`
5. ✅ Componente renderiza no frontend

**O erro deve estar resolvido agora!** 🎉
