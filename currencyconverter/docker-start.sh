#!/bin/bash

echo "🚀 Iniciando WordPress com Docker Compose..."

# Verificar se Docker está rodando
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker não está rodando. Por favor, inicie o Docker Desktop primeiro."
    exit 1
fi

# Parar containers existentes se houver
echo "🛑 Parando containers existentes..."
docker-compose down

# Construir e iniciar containers
echo "🔨 Construindo e iniciando containers..."
docker-compose up -d

# Aguardar WordPress ficar pronto
echo "⏳ Aguardando WordPress ficar pronto..."
sleep 10

# Verificar status
echo "📊 Status dos containers:"
docker-compose ps

echo ""
echo "✅ WordPress está rodando!"
echo ""
echo "🌐 URLs:"
echo "   Site: http://localhost:8888"
echo "   Admin: http://localhost:8888/wp-admin"
echo "   phpMyAdmin: http://localhost:8080"
echo ""
echo "👤 Credenciais padrão:"
echo "   Usuário: admin"
echo "   Senha: password"
echo ""
echo "📝 Para ver os logs:"
echo "   docker-compose logs -f wordpress"
echo ""
echo "🛑 Para parar:"
echo "   docker-compose down"
