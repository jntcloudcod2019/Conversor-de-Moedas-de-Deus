# Referências e documentação oficial

## Vídeo do curso (React nos blocos Gutenberg)

- **Vídeo:** [Utilizar React para reutilizar código entre blocos Gutenberg](https://www.youtube.com/watch?v=BVT4-oReVJk)
- **Conteúdo:** Como usar React para reutilizar código entre blocos Gutenberg e facilitar a manutenção.
- **Curso completo:** [Playlist – Curso de Criação de Blocos Gutenberg (Fellyph)](https://www.youtube.com/watch?v=LIlTCpE4Zsk&list=PLmIA3VZysEqQCPqIFmHO7zMUTqdjYFfBC)
- **Repositório do curso:** [fellyph/curso-gutenberg](https://github.com/fellyph/curso-gutenberg)  
  - Estrutura: `build/`, `src/`, `block.json`, `meu-primeiro-block.php`
  - Aulas em `/aulas`; docs em `/docs` (wp-scripts, currículo)

## Documentação oficial WordPress (block.json e frontend)

- **Metadata em block.json (referência completa):**  
  [developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/)
  - `viewScript`: script só no frontend (desde WP 5.9); usa `.asset.php` ao lado do JS.
  - `viewScriptModule`: módulo ES no frontend (desde WP 6.5); para Interactivity API ou módulos.
  - `render`: `file:./render.php` para renderização no servidor; variáveis: `$attributes`, `$content`, `$block`.
  - Assets com `file:./` são registrados automaticamente; CSS/JS de frontend só são enfileirados quando o bloco está na página.

- **Incluindo JavaScript no frontend do bloco:**  
  [gutenberg.10up.com/guides/including-frontend-javascript-with-a-block](https://gutenberg.10up.com/guides/including-frontend-javascript-with-a-block/)

- **viewScriptModule (WP 6.5):**  
  [make.wordpress.org/core/2024/03/04/block-metadata-viewscriptmodule-field-in-6-5](https://make.wordpress.org/core/2024/03/04/block-metadata-viewscriptmodule-field-in-6-5/)

## API de cotações (AwesomeAPI)

- **Documentação oficial – API de Cotações:**  
  [docs.awesomeapi.com.br/api-de-moedas](https://docs.awesomeapi.com.br/api-de-moedas/)
  - Endpoint em tempo real: `GET https://economia.awesomeapi.com.br/json/last/:moedas`  
    Ex.: `USD-BRL,EUR-BRL,BTC-BRL`
  - Sem API Key: cache de 1 minuto. Com API Key: até 100.000 requisições/mês sem cache.

- **Instruções API Key:**  
  [docs.awesomeapi.com.br/instrucoes-api-key](https://docs.awesomeapi.com.br/instrucoes-api-key/)
  - Token na query: `?token=SEU_API_KEY`
  - Ou no header: `x-api-key: SEU_API_KEY`

- **Moedas disponíveis:**  
  [economia.awesomeapi.com.br/xml/available](https://economia.awesomeapi.com.br/xml/available)  
  [economia.awesomeapi.com.br/xml/available/uniq](https://economia.awesomeapi.com.br/xml/available/uniq)

## Alinhamento deste plugin

- O bloco usa **React** no frontend via `view.js` (bundle com React + componente do design-system), reutilizando o mesmo código do conversor.
- `block.json` usa `viewScriptModule` (ou `viewScript` conforme a build) e `render` com `render.php`.
- A AwesomeAPI é chamada com token em query (`?token=...`) conforme a documentação oficial.
