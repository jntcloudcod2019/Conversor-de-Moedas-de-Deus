/**
 * View mínimo: carrega o build do design-system (index.esm.js) e chama
 * renderCurrencyConverter em cada bloco. Fallback se o import ou a API falhar.
 */
const FALLBACK_ERROR_MSG =
  'Falha ao carregar o conversor. Verifique sua conexão ou tente recarregar a página.';

function setBlockError(block: HTMLElement): void {
  if (block.classList.contains('infomoney-cc-loaded')) return;
  block.classList.add('infomoney-cc-error');
  const fallback = block.querySelector('.infomoney-cc-fallback');
  if (fallback) fallback.setAttribute('data-error', 'true');
  const msg = block.querySelector('.infomoney-cc-fallback-message');
  if (msg) msg.textContent = FALLBACK_ERROR_MSG;
}

// Em scripts type="module", document.currentScript é null (especificação HTML).
// A URL do build vem do container do bloco (data-ds-url) definido no render.php.
const blocks = document.querySelectorAll<HTMLElement>('.wp-block-infomoney-currency-converter');
const dsUrl =
  blocks[0]?.getAttribute?.('data-ds-url') ||
  (document.currentScript as HTMLScriptElement | null)?.getAttribute?.('data-ds-url') ||
  (document.currentScript as HTMLScriptElement & { dataset?: { dsUrl?: string } } | null)?.dataset?.dsUrl ||
  '';

if (!dsUrl) {
  console.warn('infomoney-currency-converter: data-ds-url não definido. Defina INFOMONEY_CC_ASSET_URL no plugin.');
  blocks.forEach(setBlockError);
} else {
  const LOAD_TIMEOUT_MS = 10000;

  const timeoutId = window.setTimeout(() => {
    blocks.forEach((block) => {
      if (!block.classList.contains('infomoney-cc-loaded')) setBlockError(block);
    });
  }, LOAD_TIMEOUT_MS);

  import(/* webpackIgnore: true */ dsUrl)
    .then((m) => {
      window.clearTimeout(timeoutId);
      blocks.forEach((block) => {
        let config: Record<string, unknown> = {};
        try {
          const raw = block.getAttribute('data-config');
          if (raw) config = JSON.parse(raw) as Record<string, unknown>;
        } catch (_) {
          /* ignorar */
        }
        try {
          m.renderCurrencyConverter(block, config);
        } catch (err) {
          console.error('infomoney-currency-converter: erro ao montar', err);
          setBlockError(block);
        }
      });
    })
    .catch((err) => {
      console.error('infomoney-currency-converter: falha ao carregar módulo', dsUrl, err);
      window.clearTimeout(timeoutId);
      blocks.forEach(setBlockError);
    });
}
