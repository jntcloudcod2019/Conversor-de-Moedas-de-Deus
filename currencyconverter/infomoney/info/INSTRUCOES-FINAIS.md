# 🎯 INSTRUÇÕES FINAIS - Bloco Não Aparece

## ⚠️ PROBLEMA IDENTIFICADO

O bloco não aparece porque:
1. ❌ **Plugin não está ativo** (principal causa)
2. ⚠️ Erro de sintaxe PHP corrigido (constantes)

## ✅ SOLUÇÃO IMEDIATA

### 1. Ativar o Plugin Manualmente

**Acesse o WordPress Admin:**
- URL: **http://localhost:8888/wp-admin**
- Faça login

**Vá em Plugins:**
- Menu lateral: `Plugins` > `Plugins Instalados`
- Procure: **"Infomoney Blocks"**
- Clique: **"Ativar"** (botão azul)

### 2. Limpar Cache do Navegador

- **Windows/Linux**: `Ctrl + Shift + R`
- **Mac**: `Cmd + Shift + R`

### 3. Procurar o Bloco

1. Crie uma nova página/post
2. Clique no **`+`** para adicionar blocos
3. Procure: **"Infomoney Currency Converter"**
4. **Categoria**: **Widgets** 💰

## 🔍 Verificar Status

### Plugin Está Ativo?

```bash
# Verificar via SQL
docker-compose exec db mysql -u wordpress -pwordpress wordpress -e \
  "SELECT option_value FROM wp_options WHERE option_name = 'active_plugins';" | grep infomoney
```

**Se retornar vazio = Plugin NÃO está ativo!**

### Arquivos do Bloco Existem?

```bash
docker-compose exec wordpress ls -la \
  /var/www/html/wp-content/plugins/infomoney-blocks/build/infomoney-currency-converter/
```

Deve mostrar:
- ✅ `block.json`
- ✅ `index.js`  
- ✅ `view.js`
- ✅ `render.php`

## 🐛 Se Ainda Não Funcionar

### 1. Verificar Console do Navegador
- Pressione **F12**
- Vá na aba **Console**
- Procure erros relacionados a:
  - `infomoney`
  - `registerBlockType`
  - `index.js`

### 2. Verificar Network Tab
- **F12** > **Network**
- Recarregue a página
- Procure por:
  - `infomoney-currency-converter`
  - `index.js`
  - `index.esm.js`

### 3. Desativar e Reativar Plugin
1. Vá em `Plugins` > `Plugins Instalados`
2. Clique em **"Desativar"** no Infomoney Blocks
3. Limpe cache (Ctrl+Shift+R)
4. Clique em **"Ativar"** novamente
5. Recarregue o editor

## ✅ Checklist Final

- [ ] Plugin "Infomoney Blocks" está **ATIVO** ✅
- [ ] Cache do navegador limpo ✅
- [ ] Editor Gutenberg recarregado ✅
- [ ] Bloco aparece na categoria "Widgets" ✅
- [ ] Sem erros no console ✅
- [ ] Arquivos carregando no Network tab ✅

## 📝 Onde Encontrar o Bloco

Após ativar o plugin:

- **Nome**: Infomoney Currency Converter
- **Categoria**: Widgets
- **Ícone**: 💰 (money-alt)
- **Descrição**: "Conversor de moedas usando o design system Infomoney."

## 🎉 Próximos Passos

1. ✅ Ativar o plugin
2. ✅ Adicionar o bloco em uma página
3. ✅ Configurar moedas base e destino
4. ✅ Publicar e visualizar no frontend

**O problema mais comum é simplesmente o plugin não estar ativo!** 

**Ative o plugin e o bloco aparecerá!** 🔌✨
