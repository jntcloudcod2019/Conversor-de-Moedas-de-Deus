#!/bin/bash

echo "🔍 VALIDAÇÃO PRÉ-BUILD DO COMPONENTE"
echo "======================================"
echo ""

ERRORS=0

# 1. Verificar se CNY foi removido
echo "1. Verificando remoção de CNY..."
CNY_COUNT=$(grep -r "CNY" infomoney/design-system/src/ infomoney/wordpress/plugins/infomoney-blocks/src/ 2>/dev/null | grep -v "node_modules" | wc -l | tr -d ' ')
if [ "$CNY_COUNT" -gt "0" ]; then
    echo "   ❌ CNY ainda encontrado em $CNY_COUNT lugares"
    grep -r "CNY" infomoney/design-system/src/ infomoney/wordpress/plugins/infomoney-blocks/src/ 2>/dev/null | grep -v "node_modules"
    ERRORS=$((ERRORS + 1))
else
    echo "   ✅ CNY removido completamente"
fi
echo ""

# 2. Verificar se logs de debug foram removidos
echo "2. Verificando remoção de logs de debug..."
DEBUG_COUNT=$(grep -r "127.0.0.1:7242\|agent log" infomoney/design-system/src/componentes/currency-converter/ 2>/dev/null | wc -l | tr -d ' ')
if [ "$DEBUG_COUNT" -gt "0" ]; then
    echo "   ❌ Logs de debug ainda encontrados: $DEBUG_COUNT"
    grep -r "127.0.0.1:7242\|agent log" infomoney/design-system/src/componentes/currency-converter/ 2>/dev/null
    ERRORS=$((ERRORS + 1))
else
    echo "   ✅ Logs de debug removidos"
fi
echo ""

# 3. Verificar se useMemo está presente
echo "3. Verificando useMemo para displayFrom/displayTo..."
USE_MEMO=$(grep -c "useMemo" infomoney/design-system/src/componentes/currency-converter/CurrencyConverter.tsx 2>/dev/null || echo "0")
if [ "$USE_MEMO" -lt "2" ]; then
    echo "   ❌ useMemo não encontrado ou incompleto"
    ERRORS=$((ERRORS + 1))
else
    echo "   ✅ useMemo implementado ($USE_MEMO ocorrências)"
fi
echo ""

# 4. Verificar se view.tsx tem lógica de conversão
echo "4. Verificando lógica de conversão no view.tsx..."
HAS_CONVERSION=$(grep -c "calculateRate\|effectiveFrom\|effectiveTo\|lastEdited" infomoney/wordpress/plugins/infomoney-blocks/src/infomoney-currency-converter/view.tsx 2>/dev/null || echo "0")
if [ "$HAS_CONVERSION" -lt "3" ]; then
    echo "   ❌ Lógica de conversão incompleta no view.tsx"
    ERRORS=$((ERRORS + 1))
else
    echo "   ✅ Lógica de conversão implementada"
fi
echo ""

# 5. Verificar se callbacks estão funcionais
echo "5. Verificando callbacks funcionais..."
HAS_CALLBACKS=$(grep -c "onFromValueChange.*=>\|onSwap.*=>\|handleFromValueChange\|handleSwap" infomoney/wordpress/plugins/infomoney-blocks/src/infomoney-currency-converter/view.tsx 2>/dev/null || echo "0")
if [ "$HAS_CALLBACKS" -lt "4" ]; then
    echo "   ❌ Callbacks não implementados corretamente"
    ERRORS=$((ERRORS + 1))
else
    echo "   ✅ Callbacks implementados"
fi
echo ""

# 6. Verificar se CurrencyConverter.tsx está completo
echo "6. Verificando CurrencyConverter.tsx..."
FILE_SIZE=$(wc -l < infomoney/design-system/src/componentes/currency-converter/CurrencyConverter.tsx 2>/dev/null || echo "0")
if [ "$FILE_SIZE" -lt "500" ]; then
    echo "   ❌ CurrencyConverter.tsx parece incompleto ($FILE_SIZE linhas)"
    ERRORS=$((ERRORS + 1))
else
    echo "   ✅ CurrencyConverter.tsx completo ($FILE_SIZE linhas)"
fi
echo ""

# Resultado final
echo "======================================"
if [ "$ERRORS" -eq "0" ]; then
    echo "✅ VALIDAÇÃO PASSOU! Pode fazer o build."
    exit 0
else
    echo "❌ VALIDAÇÃO FALHOU! $ERRORS erro(s) encontrado(s)."
    echo "   Corrija os erros antes de fazer o build."
    exit 1
fi
