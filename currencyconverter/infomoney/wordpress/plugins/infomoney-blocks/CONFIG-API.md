# Configuração da API de Cotações (AwesomeAPI)

Para o bloco **Conversor de moedas** buscar cotações reais, configure a chave da [AwesomeAPI (economia.awesomeapi.com.br)](https://economia.awesomeapi.com.br/). A API aceita a chave como `?token=` na URL ou como header `x-api-key`; o bloco envia os dois.

## WordPress (bloco no site)

**Opção 1 – wp-config.php (recomendado)**

No seu `wp-config.php` (antes da linha *"That's all, stop editing!"*), adicione:

```php
define( 'INFOMONEY_AWESOMEAPI_TOKEN', 'SUA_CHAVE_DE_API_AQUI' );
```

Substitua `SUA_CHAVE_DE_API_AQUI` pela chave que você obteve no painel da AwesomeAPI (Guia de início rápido → Chave de API).

**Opção 2 – Opção do WordPress**

Você pode definir a chave pela opção `infomoney_awesomeapi_token` (ex.: via código ou plugin de opções). O `render.php` do bloco usa essa opção quando a constante acima não está definida.

## App de referência (currencyconverter local)

No projeto `currencyconverter` (pasta raiz do monorepo), crie ou edite o arquivo `.env`:

```env
VITE_AWESOMEAPI_TOKEN=SUA_CHAVE_DE_API_AQUI
```

Depois rode `npm run dev`. O conversor usará a API real em vez do mock.
