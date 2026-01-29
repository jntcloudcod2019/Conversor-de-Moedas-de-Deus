# 🚨 SOLUÇÃO: Bloco Não Aparece

## 🔍 Diagnóstico

O bloco não aparece porque o **plugin não está ativo**!

## ✅ SOLUÇÃO RÁPIDA

### Passo 1: Ativar o Plugin

1. Acesse: **http://localhost:8888/wp-admin**
2. Vá em: **Plugins** > **Plugins Instalados**
3. Encontre: **"Infomoney Blocks"**
4. Clique: **"Ativar"**

### Passo 2: Limpar Cache

1. No navegador: **Ctrl+Shift+R** (ou Cmd+Shift+R no Mac)
2. Ou: **F12** > **Network** > Marque "Disable cache"

### Passo 3: Procurar o Bloco

1. Crie uma nova página/post
2. Clique no **`+`** para adicionar blocos
3. Procure: **"Infomoney Currency Converter"**
4. Categoria: **Widgets** 💰

## 🔧 Verificações Técnicas

### Verificar se Plugin Está Ativo

```bash
# Via SQL
docker-compose exec db mysql -u wordpress -pwordpress wordpress -e \
  "SELECT option_value FROM wp_options WHERE option_name = 'active_plugins';" | grep infomoney
```

Se retornar vazio = **Plugin não está ativo!**

### Verificar Arquivos do Bloco

```bash
# Verificar se arquivos existem
docker-compose exec wordpress ls -la \
  /var/www/html/wp-content/plugins/infomoney-blocks/build/infomoney-currency-converter/
```

Deve mostrar:
- ✅ `block.json`
- ✅ `index.js`
- ✅ `view.js`
- ✅ `render.php`

### Verificar Logs

```bash
# Ver logs do WordPress
docker-compose logs wordpress | grep -i "infomoney" | tail -20
```

## 🐛 Problemas Comuns

### 1. Plugin Não Ativo
**Sintoma**: Bloco não aparece na lista
**Solução**: Ativar o plugin (veja Passo 1 acima)

### 2. Cache do Navegador
**Sintoma**: Mudanças não aparecem
**Solução**: Limpar cache (Ctrl+Shift+R)

### 3. Erros JavaScript
**Sintoma**: Console mostra erros
**Solução**: 
- Abra F12 > Console
- Procure erros relacionados a `infomoney` ou `registerBlockType`
- Verifique se `index.js` está carregando

### 4. Arquivos Não Carregando
**Sintoma**: Network tab mostra 404
**Solução**:
- Verificar se arquivos existem no container
- Verificar permissões dos arquivos
- Rebuildar o plugin: `cd infomoney/wordpress/plugins/infomoney-blocks && npm run build`

## ✅ Checklist de Resolução

- [ ] **Plugin está ATIVO** (mais importante!)
- [ ] Cache do navegador limpo
- [ ] Editor Gutenberg recarregado
- [ ] Arquivos do bloco existem
- [ ] Sem erros no console
- [ ] Arquivos carregando no Network tab

## 🎯 Após Resolver

O bloco deve aparecer em:
- **Categoria**: Widgets
- **Nome**: Infomoney Currency Converter
- **Ícone**: 💰 (money-alt)
- **Descrição**: "Conversor de moedas usando o design system Infomoney."

**99% dos casos o problema é o plugin não estar ativo!** 🔌
