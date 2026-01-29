<?php
/**
 * Template de renderização do bloco no frontend
 *
 * Toda a config, ID único e fallback ficam DENTRO do bloco.
 * Nenhuma dependência de PHP do plugin (enqueue, filters, etc.).
 *
 * @var array    $attributes Atributos do bloco.
 * @var string   $content    Conteúdo do bloco.
 * @var WP_Block $block      Instância do bloco.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$base_currency   = $attributes['baseCurrency'] ?? 'USD';
$target_currency = $attributes['targetCurrency'] ?? 'BRL';
$container_id    = 'infomoney-cc-' . wp_unique_id();

$block_config = array(
	'baseCurrency'   => $base_currency,
	'targetCurrency' => $target_currency,
	'exchangeRates'  => array(),
	'endpoint'       => '',
	'apiKey'         => '',
);
$config_json = wp_json_encode( $block_config );
?>

<div
	id="<?php echo esc_attr( $container_id ); ?>"
	class="wp-block-infomoney-currency-converter"
	data-base-currency="<?php echo esc_attr( $base_currency ); ?>"
	data-target-currency="<?php echo esc_attr( $target_currency ); ?>"
	data-config="<?php echo esc_attr( $config_json ); ?>"
	role="region"
	aria-label="<?php esc_attr_e( 'Conversor de moedas', 'infomoney' ); ?>"
>
	<!-- Fallback HTML estático - exibido se React não carregar -->
	<div class="infomoney-cc-fallback" data-fallback="true">
		<h3 class="infomoney-cc-fallback-title">
			<?php esc_html_e( 'Conversor de moedas', 'infomoney' ); ?>
		</h3>
		<div class="infomoney-cc-fallback-content">
			<p class="infomoney-cc-fallback-message">
				<?php esc_html_e( 'Carregando conversor...', 'infomoney' ); ?>
			</p>
			<p class="infomoney-cc-fallback-info">
				<?php
				printf(
					/* translators: %1$s: base currency, %2$s: target currency */
					esc_html__( 'Taxa: 1 %1$s = ? %2$s', 'infomoney' ),
					esc_html( $base_currency ),
					esc_html( $target_currency )
				);
				?>
			</p>
		</div>
	</div>
	
	<noscript>
		<div class="infomoney-cc-noscript">
			<p class="infomoney-cc-noscript-message">
				<?php esc_html_e( 'Conversor de moedas. Ative o JavaScript para utilizar.', 'infomoney' ); ?>
			</p>
		</div>
	</noscript>
	
	<!-- Conteúdo hidratado via view.js - substitui o fallback quando React carrega -->
</div>
