# 🐛 Debug: Componente Não Aparece no Frontend

## ❌ Problema

O componente não está sendo exibido no elemento `main` da página, mesmo com os scripts carregando.

## 🔍 Verificações Feitas

### 1. Scripts Carregando ✅
- `index.esm.js` está sendo carregado com `type="module"` ✅
- `view.js` está sendo carregado ✅
- `INFOMONEY_CC_CONFIG` está sendo injetado ✅

### 2. Correções Aplicadas

#### A. Melhorado `view.js`
- Adicionado retry com limite (50 tentativas = 5 segundos)
- Adicionado logs de debug no console
- Melhorado tratamento de erros

#### B. Garantido Carregamento no Frontend
- Adicionado `wp_enqueue_scripts` além de `enqueue_block_assets`
- Garante que os scripts carregam no frontend mesmo se `enqueue_block_assets` não executar

## 🧪 Como Debuggar

### 1. Abrir Console do Navegador
- Pressione **F12**
- Vá na aba **Console**

### 2. Verificar Logs

Você deve ver mensagens como:
```
Infomoney Currency Converter: Encontrados 1 blocos
Infomoney Currency Converter: Inicializando bloco infomoney-cc-xxx
Infomoney Currency Converter: Bloco inicializado com sucesso
```

### 3. Verificar Elementos

- **F12** > **Elements**
- Procure por `.wp-block-infomoney-currency-converter`
- Deve existir no HTML

### 4. Verificar Network

- **F12** > **Network**
- Recarregue a página
- Procure por:
  - `index.esm.js` - Status 200 ✅
  - `view.js` - Status 200 ✅

### 5. Verificar Variáveis Globais

No console, digite:
```javascript
window.InfomoneyCurrencyConverter
```

Deve retornar um objeto com `CurrencyConverter` e `initCurrencyConverter`.

## 🐛 Problemas Comuns

### 1. Módulo Não Carregou
**Sintoma**: Console mostra "Módulo não carregou após 5000ms"
**Solução**: 
- Verifique se `index.esm.js` carregou (Network tab)
- Verifique se há erros no console
- Limpe cache (Ctrl+Shift+R)

### 2. Nenhum Bloco Encontrado
**Sintoma**: Console mostra "Nenhum bloco encontrado na página"
**Solução**:
- Verifique se o bloco foi adicionado à página
- Verifique se a página foi publicada
- Verifique se o HTML contém `.wp-block-infomoney-currency-converter`

### 3. Erro ao Inicializar
**Sintoma**: Console mostra "Erro ao inicializar bloco"
**Solução**:
- Verifique o erro completo no console
- Verifique se `initCurrencyConverter` existe
- Verifique se o container ID é válido

## ✅ Checklist de Debug

- [ ] `index.esm.js` carrega sem erros (Network tab)
- [ ] `view.js` carrega sem erros (Network tab)
- [ ] `window.InfomoneyCurrencyConverter` existe (Console)
- [ ] `.wp-block-infomoney-currency-converter` existe no HTML (Elements)
- [ ] Logs aparecem no console
- [ ] Sem erros no console

## 🎯 Próximos Passos

1. **Limpe cache** (Ctrl+Shift+R)
2. **Recarregue a página**
3. **Abra o console** (F12)
4. **Verifique os logs**
5. **Compartilhe os logs** se ainda não funcionar

## 📝 Logs Esperados

Se tudo estiver funcionando, você deve ver:

```
Infomoney Currency Converter: Encontrados 1 blocos
Infomoney Currency Converter: Inicializando bloco infomoney-cc-abc123
Infomoney Currency Converter: Bloco inicializado com sucesso
```

Se houver problemas, você verá mensagens de erro específicas.

**Use o console para identificar exatamente onde está falhando!** 🔍
