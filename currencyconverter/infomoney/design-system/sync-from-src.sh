#!/bin/sh
# Sincroniza currencyconverter/src com design-system (componente conversor).
# Rodar a partir de: infomoney/design-system/
set -e
ROOT="../../src"
CC="src/componentes/currency-converter"

cp "$ROOT/CurrencyConverter.tsx" "$CC/"
cp "$ROOT/types.ts" "$CC/"
rm -rf "$CC/market-data-currency-converter"
cp -r "$ROOT/market-data- currency-converter" "$CC/market-data-currency-converter"
cp "$ROOT/services/currencyMapper.ts" "$ROOT/services/awesomeApi.ts" "$ROOT/services/currency-environment.ts" "$CC/services/"
# currencyApi.ts no design-system fica o mínimo (tipos); não sobrescrever com o de src
sed -i '' 's|"./market-data- currency-converter"|"./market-data-currency-converter"|g' "$CC/CurrencyConverter.tsx"
echo "Sync OK: src -> design-system"
