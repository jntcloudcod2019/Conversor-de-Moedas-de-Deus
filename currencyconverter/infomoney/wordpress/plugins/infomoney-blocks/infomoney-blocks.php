<?php
/**
 * Plugin Name: Infomoney Blocks
 * Description: Blocos Gutenberg para Infomoney (Currency Converter).
 * Version: 0.1.0
 * Author: Infomoney
 */

if (!defined('ABSPATH')) {
    exit;
}

define('INFOMONEY_CC_HANDLE', 'infomoney-currency-converter');
define('INFOMONEY_CC_ASSET_PATH', __DIR__ . '/assets/currency-converter');
define('INFOMONEY_CC_ASSET_URL', plugin_dir_url(__FILE__) . 'assets/currency-converter');

/**
 * Enfileira o CSS do design system e o tema do conversor.
 * Ordem: 1) theme-block.css (variáveis do bloco), 2) style.css (design-system).
 * Dependências do editor vêm de index.asset.php (wp-blocks, wp-element, wp-block-editor, react, react-dom).
 */
function infomoney_cc_enqueue_assets() {
    $deps = array();
    $theme_file = INFOMONEY_CC_ASSET_PATH . '/theme-block.css';
    if (file_exists($theme_file)) {
        wp_enqueue_style(
            INFOMONEY_CC_HANDLE . '-theme',
            INFOMONEY_CC_ASSET_URL . '/theme-block.css',
            array(),
            filemtime($theme_file)
        );
        $deps[] = INFOMONEY_CC_HANDLE . '-theme';
    }

    $css_file = INFOMONEY_CC_ASSET_PATH . '/style.css';
    if (file_exists($css_file)) {
        wp_enqueue_style(
            INFOMONEY_CC_HANDLE . '-ds',
            INFOMONEY_CC_ASSET_URL . '/style.css',
            $deps,
            filemtime($css_file)
        );
    }
}
// Carregar assets tanto no editor quanto no frontend
add_action('enqueue_block_assets', 'infomoney_cc_enqueue_assets');
// Também carregar no frontend explicitamente
add_action('wp_enqueue_scripts', 'infomoney_cc_enqueue_assets');

/**
 * Registra o bloco usando a build em build/infomoney-currency-converter/.
 * O mesmo componente e CSS do design-system (assets/currency-converter) são usados no front.
 */
function infomoney_cc_register_block() {
    $block_dir = __DIR__ . '/build/infomoney-currency-converter';
    $block_json = $block_dir . '/block.json';
    if (!file_exists($block_json)) {
        return;
    }
    register_block_type($block_dir);

    $block_type = \WP_Block_Type_Registry::get_instance()->get_registered('infomoney/currency-converter');
    if ($block_type) {
        $view_module_handle = !empty($block_type->view_script_module_handle) ? $block_type->view_script_module_handle : null;
        $ds_url = INFOMONEY_CC_ASSET_URL . '/index.esm.js';
        add_filter('script_loader_tag', function ($tag, $handle) use ($view_module_handle, $ds_url) {
            if ($view_module_handle && $handle === $view_module_handle) {
                $tag = str_replace(' src', ' data-ds-url="' . esc_attr($ds_url) . '" src', $tag);
            }
            return $tag;
        }, 10, 2);
    }
}
add_action('init', 'infomoney_cc_register_block', 20);
