FROM wordpress:latest

# Instalar dependências do sistema
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Configurar permissões
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html

# Expor porta
EXPOSE 80

# Comando padrão do WordPress
CMD ["apache2-foreground"]
