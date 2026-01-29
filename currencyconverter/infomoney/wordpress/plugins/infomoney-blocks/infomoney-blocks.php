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
 * Enfileira o bundle do design system (JS/CSS) tanto no editor quanto no front.
 */
function infomoney_cc_enqueue_assets() {
    $js_file = INFOMONEY_CC_ASSET_PATH . '/index.esm.js';
    $css_file = INFOMONEY_CC_ASSET_PATH . '/style.css';

    if (file_exists($js_file)) {
        // Registrar o script
        wp_register_script(
            INFOMONEY_CC_HANDLE . '-ds',
            INFOMONEY_CC_ASSET_URL . '/index.esm.js',
            array(), // Sem dependências - módulo ES6 carrega suas próprias
            filemtime($js_file),
            true
        );
        
        // Adicionar atributo type="module" ao script
        add_filter('script_loader_tag', function($tag, $handle) {
            if ($handle === INFOMONEY_CC_HANDLE . '-ds') {
                // Substituir o tag do script para adicionar type="module"
                $tag = str_replace('<script ', '<script type="module" ', $tag);
            }
            return $tag;
        }, 10, 2);
        
        // Enfileirar o script
        wp_enqueue_script(INFOMONEY_CC_HANDLE . '-ds');
        
        // Configs de API (usar wp_add_inline_script com type="module" não funciona bem)
        // Vamos injetar via script separado
        $config = apply_filters('infomoney_cc_config', array(
            'endpoint' => '',
            'apiKey' => '',
            'baseCurrency' => 'USD',
            'targetCurrency' => 'BRL',
        ));
        
        // Adicionar config como script inline ANTES do módulo
        wp_add_inline_script(
            INFOMONEY_CC_HANDLE . '-ds',
            'window.INFOMONEY_CC_CONFIG = ' . json_encode($config) . ';',
            'before'
        );
    }

    if (file_exists($css_file)) {
        wp_enqueue_style(
            INFOMONEY_CC_HANDLE . '-ds',
            INFOMONEY_CC_ASSET_URL . '/style.css',
            array(),
            filemtime($css_file)
        );
    }

    // Configs de API podem ser injetadas aqui via wp_localize_script.
    $config = apply_filters('infomoney_cc_config', array(
        'endpoint' => '',
        'apiKey' => '',
        'baseCurrency' => 'USD',
        'targetCurrency' => 'BRL',
    ));

    if (wp_script_is(INFOMONEY_CC_HANDLE . '-ds', 'enqueued')) {
        wp_localize_script(INFOMONEY_CC_HANDLE . '-ds', 'INFOMONEY_CC_CONFIG', $config);
    }
}
// Carregar assets tanto no editor quanto no frontend
add_action('enqueue_block_assets', 'infomoney_cc_enqueue_assets');
// Também carregar no frontend explicitamente
add_action('wp_enqueue_scripts', 'infomoney_cc_enqueue_assets');

/**
 * Registra o bloco usando a build em build/infomoney-currency-converter/.
 */
function infomoney_cc_register_block() {
    $block_dir = __DIR__ . '/build/infomoney-currency-converter';
    $block_json = $block_dir . '/block.json';

    // Debug: verificar caminhos
    error_log('Infomoney Blocks: Tentando registrar bloco...');
    error_log('Infomoney Blocks: Diretório: ' . $block_dir);
    error_log('Infomoney Blocks: block.json existe: ' . (file_exists($block_json) ? 'SIM' : 'NÃO'));

    if (!file_exists($block_json)) {
        error_log('Infomoney Blocks: block.json não encontrado em: ' . $block_json);
        // Listar arquivos do diretório para debug
        if (is_dir($block_dir)) {
            $files = scandir($block_dir);
            error_log('Infomoney Blocks: Arquivos no diretório: ' . implode(', ', $files));
        }
        return;
    }

    $result = register_block_type($block_dir);
    
    if (is_wp_error($result)) {
        error_log('Infomoney Blocks: Erro ao registrar bloco: ' . $result->get_error_message());
    } else {
        error_log('Infomoney Blocks: Bloco registrado com sucesso: infomoney/currency-converter');
        error_log('Infomoney Blocks: Resultado: ' . print_r($result, true));
    }
}
add_action('init', 'infomoney_cc_register_block', 20);
