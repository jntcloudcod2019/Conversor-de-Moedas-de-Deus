# 🎯 Guia Completo - Currency Converter WordPress

## ✅ Status: TUDO PRONTO E FUNCIONANDO!

### 📦 Estrutura do Projeto

```
infomoney/
├── design-system/                          # Design System React
│   ├── src/componentes/currency-converter/ # Código fonte completo
│   └── dist/componentes/currency-converter/ # Build (ESM + CJS + CSS)
│
├── wordpress/
│   ├── plugins/infomoney-blocks/          # Plugin Gutenberg
│   │   ├── src/infomoney-currency-converter/ # Código fonte do bloco
│   │   ├── build/infomoney-currency-converter/ # Build do bloco
│   │   └── assets/currency-converter/     # Bundle do design system
│   │
│   └── themes/infomoney/v2/components/currency-converter/
│       ├── config.php                      # Configuração de API
│       ├── currency-converter.js          # Bundle do design system
│       └── currency-converter.css          # CSS do design system
```

## 🚀 Scripts Disponíveis

### 1. Executar Tudo (Build Completo)
```bash
./infomoney/EXECUTAR-TUDO.sh
```

Este script:
- ✅ Builda o Design System
- ✅ Builda o Plugin WordPress
- ✅ Copia todos os arquivos necessários
- ✅ Reinicia o WordPress

### 2. Verificar Banco de Dados
```bash
./infomoney/verificar-banco.sh
```

### 3. Build Manual

#### Design System
```bash
cd infomoney/design-system
npm run build
```

#### Plugin WordPress
```bash
cd infomoney/wordpress/plugins/infomoney-blocks
npm run build
```

## 🔧 Configuração do Ambiente

### Docker Compose

**Serviços:**
- `wordpress` - WordPress na porta 8888
- `db` - MySQL 8.0
- `phpmyadmin` - phpMyAdmin na porta 8080

**Iniciar:**
```bash
docker-compose up -d
```

**Parar:**
```bash
docker-compose down
```

**Reiniciar:**
```bash
docker-compose restart
```

### Banco de Dados

- **Host**: `db` (nome do container)
- **Database**: `wordpress`
- **User**: `wordpress`
- **Password**: `wordpress`
- **Root Password**: `rootpassword`

**Acesso phpMyAdmin**: http://localhost:8080

## 📝 Como Usar

### 1. Primeira Vez

1. **Inicie o Docker**:
   ```bash
   docker-compose up -d
   ```

2. **Execute o build completo**:
   ```bash
   ./infomoney/EXECUTAR-TUDO.sh
   ```

3. **Acesse WordPress**:
   - URL: http://localhost:8888
   - Admin: http://localhost:8888/wp-admin

4. **Instale WordPress** (se primeira vez):
   - Siga o assistente de instalação
   - Ou use as credenciais existentes

5. **Ative o Plugin**:
   - Vá em `Plugins`
   - Ative "Infomoney Blocks"

6. **Use o Bloco**:
   - Crie uma página/post
   - Adicione o bloco "Infomoney Currency Converter"
   - Publique e visualize

### 2. Após Mudanças no Código

```bash
# Opção 1: Script automático
./infomoney/EXECUTAR-TUDO.sh

# Opção 2: Manual
cd infomoney/design-system && npm run build && cd ../..
cd infomoney/wordpress/plugins/infomoney-blocks && npm run build && cd ../../../../..
# Copiar arquivos manualmente...
```

## 🐛 Troubleshooting

### Bloco não aparece no editor

1. **Limpe cache do navegador** (Ctrl+Shift+R)
2. **Desative e reative o plugin**
3. **Verifique console do navegador** (F12)
4. **Verifique Network tab** - arquivos carregando?

### Erros de build

```bash
# Limpar node_modules e reinstalar
cd infomoney/design-system
rm -rf node_modules package-lock.json
npm install

cd ../wordpress/plugins/infomoney-blocks
rm -rf node_modules package-lock.json
npm install
```

### WordPress não conecta ao banco

```bash
# Verificar containers
docker-compose ps

# Ver logs
docker-compose logs wordpress
docker-compose logs db

# Reiniciar
docker-compose restart
```

## 📊 Arquivos Importantes

### Design System
- **Entry**: `src/componentes/currency-converter/index.ts`
- **Build Output**: `dist/componentes/currency-converter/`
  - `index.esm.js` (ES Module)
  - `index.cjs.js` (CommonJS)
  - `style.css` (CSS compilado)

### Plugin WordPress
- **PHP**: `infomoney-blocks.php`
- **Block Source**: `src/infomoney-currency-converter/`
- **Block Build**: `build/infomoney-currency-converter/`
- **Assets**: `assets/currency-converter/`

### Tema
- **Config**: `config.php`
- **Bundle**: `currency-converter.js` e `currency-converter.css`

## ✅ Checklist Final

- [x] Design System buildado
- [x] Plugin WordPress buildado
- [x] Arquivos copiados para plugin e tema
- [x] Docker rodando
- [x] Banco de dados configurado
- [x] WordPress instalado
- [x] Plugin ativado
- [x] Bloco disponível no editor

## 🎉 Tudo Pronto!

O projeto está **100% funcional**. Você pode:

1. ✅ Usar o bloco no editor Gutenberg
2. ✅ Publicar páginas com o conversor
3. ✅ Ver o componente renderizado no frontend
4. ✅ Customizar via Inspector Controls (em desenvolvimento)

**Boa sorte com o projeto!** 🚀
