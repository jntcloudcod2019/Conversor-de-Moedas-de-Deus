# Como Verificar se o Bloco Está Funcionando

## ✅ Checklist de Verificação

### 1. Verificar Arquivos no WordPress
```bash
# Verificar se o bloco está montado
docker-compose exec wordpress ls -la /var/www/html/wp-content/plugins/infomoney-blocks/build/infomoney-currency-converter/

# Deve mostrar:
# - block.json ✅
# - index.js ✅
# - view.js ✅
# - render.php ✅
# - style-index.css ✅
```

### 2. Verificar Plugin Ativo
1. Acesse http://localhost:8888/wp-admin
2. Vá em **Plugins**
3. Verifique se **"Infomoney Blocks"** está **Ativo**

### 3. Verificar no Editor
1. Crie uma nova página/post
2. Clique no **+** para adicionar blocos
3. Procure por **"Infomoney Currency Converter"** ou **"Currency Converter"**
4. Verifique na categoria **Widgets**

### 4. Se Não Aparecer - Debug

#### A. Verificar Console do Navegador
1. Abra o editor Gutenberg
2. Pressione F12 (DevTools)
3. Vá na aba **Console**
4. Procure por erros relacionados a:
   - `infomoney`
   - `currency-converter`
   - `registerBlockType`

#### B. Verificar Network Tab
1. No DevTools, vá na aba **Network**
2. Recarregue a página (Ctrl+R)
3. Procure por:
   - `index.js` (do bloco)
   - `index.esm.js` (do design system)
   - `style.css`

#### C. Verificar Logs do WordPress
```bash
docker-compose logs wordpress | grep -i "infomoney\|block\|error" | tail -20
```

#### D. Limpar Cache
1. No WordPress admin: **Plugins > Infomoney Blocks > Desativar > Ativar**
2. Ou via terminal:
```bash
docker-compose exec wordpress wp cache flush --allow-root
```

### 5. Verificar Dependências
O bloco precisa de:
- ✅ `wp-blocks` (registro do bloco)
- ✅ `wp-element` (React no editor)
- ✅ `wp-block-editor` (useBlockProps)
- ✅ `wp-i18n` (tradução)
- ✅ `react` e `react-dom` (para o bundle do design system)

## 🔍 Comandos Úteis

```bash
# Ver status dos containers
docker-compose ps

# Ver logs em tempo real
docker-compose logs -f wordpress

# Reiniciar WordPress
docker-compose restart wordpress

# Acessar shell do WordPress
docker-compose exec wordpress bash
```

## 📝 Notas Importantes

- O bloco aparece na categoria **Widgets**
- O ícone é **money-alt**
- O título é **"Infomoney Currency Converter"**
- Se ainda não aparecer, pode ser cache do navegador - limpe com Ctrl+Shift+R
