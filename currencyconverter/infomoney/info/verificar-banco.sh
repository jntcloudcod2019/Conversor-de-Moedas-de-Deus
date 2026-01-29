#!/bin/bash

echo "🔍 Verificando configuração do banco de dados..."
echo ""

# Verificar containers
echo "1. Status dos containers:"
docker-compose ps | grep -E "infomoney-db|infomoney-wp|infomoney-phpmyadmin"
echo ""

# Verificar banco
echo "2. Verificando banco de dados:"
docker-compose exec -T db mysql -u wordpress -pwordpress -e "SHOW DATABASES;" 2>/dev/null | grep wordpress
echo ""

# Verificar tabelas
echo "3. Verificando tabelas do WordPress:"
TABLES=$(docker-compose exec -T db mysql -u wordpress -pwordpress wordpress -e "SHOW TABLES;" 2>/dev/null | wc -l)
if [ "$TABLES" -gt "1" ]; then
    echo "✅ WordPress está instalado ($TABLES tabelas encontradas)"
    docker-compose exec -T db mysql -u wordpress -pwordpress wordpress -e "SHOW TABLES;" 2>/dev/null | head -5
else
    echo "❌ WordPress não está instalado"
fi
echo ""

# Verificar conexão WordPress
echo "4. Verificando configuração do WordPress:"
docker-compose exec -T wordpress cat /var/www/html/wp-config.php 2>/dev/null | grep -E "DB_NAME|DB_USER|DB_HOST" | head -3
echo ""

# URLs de acesso
echo "5. URLs de acesso:"
echo "   WordPress: http://localhost:8888"
echo "   phpMyAdmin: http://localhost:8080"
echo ""

echo "✅ Verificação concluída!"
