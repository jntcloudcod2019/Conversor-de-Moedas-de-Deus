<?php
/**
 * Configuração de API para Currency Converter
 * 
 * Este arquivo deve ser incluído no functions.php do tema ou carregado via wp_localize_script.
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Filtro para configurar a API de moedas
 */
function infomoney_cc_api_config() {
    return apply_filters('infomoney_cc_config', array(
        'endpoint' => get_option('infomoney_cc_api_endpoint', ''),
        'apiKey' => get_option('infomoney_cc_api_key', ''),
        'baseCurrency' => get_option('infomoney_cc_base_currency', 'USD'),
        'targetCurrency' => get_option('infomoney_cc_target_currency', 'BRL'),
        'cacheTimeout' => get_option('infomoney_cc_cache_timeout', 3600), // 1 hora
        'fallbackRates' => array(
            'USD' => 1,
            'BRL' => 5.0,
            'EUR' => 0.9,
            'GBP' => 0.8,
        ),
    ));
}
add_filter('infomoney_cc_config', 'infomoney_cc_api_config');

/**
 * Enfileira scripts e estilos do currency converter no tema
 */
function infomoney_cc_theme_enqueue() {
    $asset_path = get_template_directory() . '/v2/components/currency-converter';
    $asset_url = get_template_directory_uri() . '/v2/components/currency-converter';

    // Enfileira o bundle do design system se existir
    $js_file = $asset_path . '/currency-converter.js';
    $css_file = $asset_path . '/currency-converter.css';

    if (file_exists($js_file)) {
        wp_enqueue_script(
            'infomoney-cc-theme',
            $asset_url . '/currency-converter.js',
            array('react', 'react-dom'),
            filemtime($js_file),
            true
        );
    }

    if (file_exists($css_file)) {
        wp_enqueue_style(
            'infomoney-cc-theme',
            $asset_url . '/currency-converter.css',
            array(),
            filemtime($css_file)
        );
    }

    // Injeta configuração via wp_localize_script
    $config = infomoney_cc_api_config();
    if (wp_script_is('infomoney-cc-theme', 'enqueued')) {
        wp_localize_script('infomoney-cc-theme', 'INFOMONEY_CC_CONFIG', $config);
    }
}
add_action('wp_enqueue_scripts', 'infomoney_cc_theme_enqueue');
