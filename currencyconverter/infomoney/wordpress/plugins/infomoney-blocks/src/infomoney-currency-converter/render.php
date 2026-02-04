<?php
/**
 * Template de renderização do bloco no frontend
 *
 * Estratégia: montagem pura. O PHP emite apenas o container; o view.js usa
 * createRoot e monta o React do zero (sem prerender) para evitar React #31/#423.
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

// Token da AwesomeAPI (economia.awesomeapi.com.br): defina INFOMONEY_AWESOMEAPI_TOKEN em wp-config.php ou use update_option( 'infomoney_awesomeapi_token', 'seu-token' ).
$api_token = defined( 'INFOMONEY_AWESOMEAPI_TOKEN' ) ? INFOMONEY_AWESOMEAPI_TOKEN : get_option( 'infomoney_awesomeapi_token', '' );

$block_config = array(
	'baseCurrency'   => $base_currency,
	'targetCurrency' => $target_currency,
	'exchangeRates'  => array(),
	'endpoint'       => '',
	'apiKey'         => '',
	'apiToken'       => is_string( $api_token ) ? $api_token : '',
);
$config_json = wp_json_encode( $block_config );

// URL do build do design-system: constante do plugin ou fallback a partir do diretório do render.
if ( defined( 'INFOMONEY_CC_ASSET_URL' ) ) {
	$ds_url = INFOMONEY_CC_ASSET_URL . '/index.esm.js';
} else {
	$plugin_root = realpath( __DIR__ . '/../..' );
	$main_file   = $plugin_root . DIRECTORY_SEPARATOR . 'infomoney-blocks.php';
	$ds_url      = ( $plugin_root && file_exists( $main_file ) )
		? plugin_dir_url( $main_file ) . 'assets/currency-converter/index.esm.js'
		: '';
}
?>
<div
	id="<?php echo esc_attr( $container_id ); ?>"
	class="wp-block-infomoney-currency-converter"
	data-base-currency="<?php echo esc_attr( $base_currency ); ?>"
	data-target-currency="<?php echo esc_attr( $target_currency ); ?>"
	data-config="<?php echo esc_attr( $config_json ); ?>"
	data-ds-url="<?php echo esc_attr( $ds_url ); ?>"
	role="region"
	aria-label="<?php esc_attr_e( 'Conversor de moedas', 'infomoney' ); ?>"
>
	<div class="infomoney-cc-fallback" data-fallback="true">
		<p class="infomoney-cc-fallback-message"><?php esc_html_e( 'Carregando conversor...', 'infomoney' ); ?></p>
	</div>
	<noscript>
		<p><?php esc_html_e( 'Conversor de moedas. Ative o JavaScript para utilizar.', 'infomoney' ); ?></p>
	</noscript>
</div>
