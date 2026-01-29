#!/bin/bash

# Script para executar os testes do CurrencyConverter

echo "🧪 Executando Testes Unitários - CurrencyConverter"
echo "=================================================="
echo ""

# Verifica se npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm não encontrado. Por favor, instale Node.js e npm primeiro."
    exit 1
fi

# Verifica se está no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ package.json não encontrado. Execute este script no diretório currencyconverter."
    exit 1
fi

echo "📦 Instalando dependências..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erro ao instalar dependências."
    exit 1
fi

echo ""
echo "✅ Dependências instaladas com sucesso!"
echo ""

# Pergunta qual comando executar
echo "Escolha uma opção:"
echo "1) Executar todos os testes"
echo "2) Executar testes em modo watch"
echo "3) Executar testes com cobertura"
echo "4) Executar todos os comandos acima"
read -p "Digite o número da opção (1-4): " option

case $option in
    1)
        echo ""
        echo "🚀 Executando todos os testes..."
        npm test
        ;;
    2)
        echo ""
        echo "👀 Executando testes em modo watch..."
        npm run test:watch
        ;;
    3)
        echo ""
        echo "📊 Executando testes com cobertura..."
        npm run test:coverage
        ;;
    4)
        echo ""
        echo "🚀 Executando todos os testes..."
        npm test
        echo ""
        echo "📊 Executando testes com cobertura..."
        npm run test:coverage
        ;;
    *)
        echo "❌ Opção inválida."
        exit 1
        ;;
esac

echo ""
echo "✅ Concluído!"
