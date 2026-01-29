# 🔧 Correção: Erro "process is not defined"

## ❌ Erro Original

```
Uncaught ReferenceError: process is not defined
    at Vz (index.esm.js?ver=1768471999:1476:25)
```

## 🔍 Causa

O código está tentando acessar `process.env` ou `process`, que é uma variável global do **Node.js**, mas não existe no **navegador**. Isso geralmente acontece quando:

1. Alguma dependência (como React) tenta acessar `process.env.NODE_ENV`
2. O código foi transpilado mas as referências a `process` não foram substituídas
3. O Vite não está definindo essas variáveis para o navegador

## ✅ Solução Aplicada

### Adicionado `define` no `vite.config.js`

Configurado o Vite para substituir `process` e `process.env` durante o build:

```js
define: {
  // Definir variáveis globais do Node.js para o navegador
  'process.env': '{}',
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  'process': JSON.stringify({ env: {} }),
},
```

### Como Funciona

O Vite substitui todas as referências a `process.env` e `process` no código durante o build:

**Antes (código fonte):**
```js
if (process.env.NODE_ENV === 'development') {
  // ...
}
```

**Depois (código buildado):**
```js
if ("production" === 'development') {
  // ...
}
```

Ou simplesmente remove a referência se não for usada.

## 🧪 Teste

Após a correção:

1. **Limpe o cache do navegador** (Ctrl+Shift+R)
2. **Recarregue a página**
3. **Verifique o console** - não deve mais ter o erro "process is not defined"
4. **Verifique o componente** - deve renderizar corretamente

## 📝 O Que Mudou

**Antes:**
```js
// Código tentava acessar:
process.env.NODE_ENV // ❌ Erro: process is not defined
```

**Depois:**
```js
// Vite substitui por:
"production" // ✅ Funciona no navegador
```

## ✅ Resultado Esperado

- ✅ Sem erro "process is not defined"
- ✅ Variáveis do Node.js substituídas durante o build
- ✅ Código funciona no navegador
- ✅ Componente renderiza corretamente

## 🐛 Se Ainda Não Funcionar

1. **Verifique se o novo build foi copiado**:
   ```bash
   ls -lh infomoney/wordpress/plugins/infomoney-blocks/assets/currency-converter/index.esm.js
   ```

2. **Limpe cache completamente**:
   - Ctrl+Shift+R (ou Cmd+Shift+R)
   - Ou desative cache no DevTools > Network

3. **Verifique o console**:
   - F12 > Console
   - Procure por novos erros

4. **Verifique se há outras referências a `process`**:
   - Procure no código fonte por `process.`
   - Adicione mais definições no `vite.config.js` se necessário

## 🎯 Próximos Passos

Após corrigir:
1. ✅ Sem erro "process is not defined"
2. ✅ Módulo ES6 carrega sem erros
3. ✅ `window.InfomoneyCurrencyConverter` disponível
4. ✅ `view.js` pode usar `initCurrencyConverter`
5. ✅ Componente renderiza no frontend

**O erro deve estar resolvido agora!** 🎉
