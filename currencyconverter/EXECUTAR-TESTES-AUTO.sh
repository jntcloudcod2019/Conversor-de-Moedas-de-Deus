#!/bin/bash

# Script para executar os testes do CurrencyConverter (versão automática)
# Uso: ./EXECUTAR-TESTES-AUTO.sh [test|watch|coverage|all]

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

# Função para instalar dependências
install_dependencies() {
    echo "📦 Instalando dependências..."
    npm install
    
    if [ $? -ne 0 ]; then
        echo "❌ Erro ao instalar dependências."
        exit 1
    fi
    
    echo ""
    echo "✅ Dependências instaladas com sucesso!"
    echo ""
}

# Instala dependências se necessário
if [ ! -d "node_modules" ]; then
    install_dependencies
fi

# Obtém o comando do primeiro argumento ou usa padrão
COMMAND=${1:-test}

case $COMMAND in
    test)
        echo "🚀 Executando todos os testes..."
        npm test
        ;;
    watch)
        echo "👀 Executando testes em modo watch..."
        npm run test:watch
        ;;
    coverage)
        echo "📊 Executando testes com cobertura..."
        npm run test:coverage
        ;;
    all)
        echo "🚀 Executando todos os testes..."
        npm test
        echo ""
        echo "📊 Executando testes com cobertura..."
        npm run test:coverage
        ;;
    install)
        install_dependencies
        ;;
    *)
        echo "Uso: $0 [test|watch|coverage|all|install]"
        echo ""
        echo "Opções:"
        echo "  test      - Executa todos os testes (padrão)"
        echo "  watch     - Executa testes em modo watch"
        echo "  coverage  - Executa testes com cobertura"
        echo "  all       - Executa testes e cobertura"
        echo "  install   - Apenas instala dependências"
        exit 1
        ;;
esac

echo ""
echo "✅ Concluído!"
