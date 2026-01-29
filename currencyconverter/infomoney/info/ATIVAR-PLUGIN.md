# 🔌 Como Ativar o Plugin Infomoney Blocks

## ⚠️ PROBLEMA: Plugin não está ativo!

O bloco não aparece porque o plugin **"Infomoney Blocks"** não está ativado.

## ✅ Solução: Ativar o Plugin

### Método 1: Via WordPress Admin (Recomendado)

1. **Acesse o WordPress Admin**:
   - URL: http://localhost:8888/wp-admin
   - Faça login se necessário

2. **Vá em Plugins**:
   - Menu lateral: `Plugins` > `Plugins Instalados`

3. **Encontre "Infomoney Blocks"**:
   - Procure na lista de plugins

4. **Clique em "Ativar"**:
   - Botão azul "Ativar" abaixo do nome do plugin

5. **Verifique**:
   - O plugin deve aparecer como "Ativo"
   - Status deve mudar de "Inativo" para "Ativo"

### Método 2: Via SQL (Alternativo)

Se não conseguir pelo admin, você pode ativar via SQL:

```bash
docker-compose exec db mysql -u wordpress -pwordpress wordpress -e "
UPDATE wp_options 
SET option_value = CONCAT(option_value, 'a:1:{i:0;s:35:\"infomoney-blocks/infomoney-blocks.php\";}')
WHERE option_name = 'active_plugins' 
AND option_value NOT LIKE '%infomoney-blocks%';
"
```

**⚠️ CUIDADO**: Este método pode corromper a serialização PHP se não for feito corretamente.

### Método 3: Via WP-CLI (Se disponível)

```bash
docker-compose exec wordpress wp plugin activate infomoney-blocks --allow-root
```

## 🔍 Verificar se Está Ativo

Após ativar, verifique:

1. **No Admin WordPress**:
   - Vá em `Plugins` > `Plugins Instalados`
   - Procure "Infomoney Blocks"
   - Deve mostrar status "Ativo"

2. **Via SQL**:
   ```bash
   docker-compose exec db mysql -u wordpress -pwordpress wordpress -e "SELECT option_value FROM wp_options WHERE option_name = 'active_plugins';" | grep infomoney
   ```

## 🎯 Após Ativar

1. **Limpe o cache do navegador** (Ctrl+Shift+R ou Cmd+Shift+R)
2. **Recarregue o editor Gutenberg**
3. **Procure o bloco**:
   - Clique no `+` para adicionar blocos
   - Procure "Infomoney Currency Converter"
   - Categoria: **Widgets**
   - Ícone: 💰 (money-alt)

## 🐛 Se Ainda Não Aparecer

1. **Verifique console do navegador** (F12):
   - Procure erros JavaScript
   - Verifique se `index.js` está carregando

2. **Verifique Network tab**:
   - Procure por `infomoney-currency-converter`
   - Verifique se os arquivos estão sendo carregados

3. **Verifique logs do WordPress**:
   ```bash
   docker-compose logs wordpress | grep -i "infomoney"
   ```

4. **Desative e reative o plugin**:
   - Desative
   - Limpe cache
   - Reative
   - Recarregue

## ✅ Checklist

- [ ] Plugin "Infomoney Blocks" está **ATIVO**
- [ ] Cache do navegador limpo
- [ ] Editor Gutenberg recarregado
- [ ] Bloco aparece na categoria "Widgets"
- [ ] Sem erros no console do navegador

**O problema mais comum é o plugin não estar ativo!** 🔌
