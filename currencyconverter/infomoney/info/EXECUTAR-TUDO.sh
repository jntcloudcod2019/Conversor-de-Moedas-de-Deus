#!/bin/bash

echo "🚀 EXECUTANDO BUILD COMPLETO DO PROJETO"
echo "========================================"
echo ""

# 1. Build Design System
echo "📦 1/4 - Buildando Design System..."
cd infomoney/design-system
npm run build
if [ $? -eq 0 ]; then
    echo "   ✅ Design System buildado com sucesso!"
else
    echo "   ❌ Erro ao buildar Design System"
    exit 1
fi
cd ../..

# 2. Build Plugin WordPress
echo ""
echo "🔌 2/4 - Buildando Plugin WordPress..."
cd infomoney/wordpress/plugins/infomoney-blocks
npm run build
if [ $? -eq 0 ]; then
    echo "   ✅ Plugin buildado com sucesso!"
else
    echo "   ❌ Erro ao buildar Plugin"
    exit 1
fi
cd ../../../../..

# 3. Copiar arquivos
echo ""
echo "📋 3/4 - Copiando arquivos..."
cp infomoney/design-system/dist/componentes/currency-converter/index.esm.js \
   infomoney/wordpress/plugins/infomoney-blocks/assets/currency-converter/ && \
cp infomoney/design-system/dist/componentes/currency-converter/style.css \
   infomoney/wordpress/plugins/infomoney-blocks/assets/currency-converter/ && \
cp infomoney/design-system/dist/componentes/currency-converter/index.esm.js \
   infomoney/wordpress/themes/infomoney/v2/components/currency-converter/currency-converter.js && \
cp infomoney/design-system/dist/componentes/currency-converter/style.css \
   infomoney/wordpress/themes/infomoney/v2/components/currency-converter/currency-converter.css

if [ $? -eq 0 ]; then
    echo "   ✅ Arquivos copiados com sucesso!"
else
    echo "   ❌ Erro ao copiar arquivos"
    exit 1
fi

# 4. Reiniciar WordPress
echo ""
echo "🔄 4/4 - Reiniciando WordPress..."
docker-compose restart wordpress > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "   ✅ WordPress reiniciado!"
else
    echo "   ⚠️  WordPress pode não estar rodando (docker-compose up -d)"
fi

echo ""
echo "========================================"
echo "✅ TUDO EXECUTADO COM SUCESSO!"
echo ""
echo "📊 URLs:"
echo "   WordPress: http://localhost:8888"
echo "   Admin: http://localhost:8888/wp-admin"
echo "   phpMyAdmin: http://localhost:8080"
echo ""
echo "🎯 Próximos passos:"
echo "   1. Acesse http://localhost:8888/wp-admin"
echo "   2. Ative o plugin 'Infomoney Blocks'"
echo "   3. Crie uma página/post"
echo "   4. Adicione o bloco 'Infomoney Currency Converter'"
echo ""
