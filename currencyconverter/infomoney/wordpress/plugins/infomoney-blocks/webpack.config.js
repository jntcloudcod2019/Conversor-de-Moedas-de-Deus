const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const baseConfig = Array.isArray(defaultConfig) ? defaultConfig[0] : defaultConfig;

/** Código-fonte do design-system (sem bundle pré-construído) para uma única instância do React. */
const designSystemSrc = path.resolve(__dirname, '../../../design-system/src/componentes/currency-converter');

/**
 * Plugin que emite view.asset.php com dependencies vazias (React bundleado no view.js).
 * Usado no view para compatibilidade com CSP sem unsafe-eval.
 */
function ViewAssetPlugin() {}
ViewAssetPlugin.prototype.apply = function (compiler) {
  compiler.hooks.thisCompilation.tap('ViewAssetPlugin', (compilation) => {
    compilation.hooks.processAssets.tap(
      { name: 'ViewAssetPlugin', stage: compilation.PROCESS_ASSETS_STAGE_ANALYSE },
      () => {
        const chunk = Array.from(compilation.chunks).find((c) => c.name === 'infomoney-currency-converter/view');
        if (!chunk) return;
        const jsFile = Array.from(chunk.files).find((f) => /\.js$/.test(f));
        if (!jsFile) return;
        const asset = compilation.getAsset(jsFile);
        if (!asset) return;
        const crypto = require('crypto');
        const hash = crypto.createHash('sha256').update(asset.source.buffer()).digest('hex').slice(0, 12);
        const php = `<?php return array('dependencies' => array(), 'version' => '${hash}');\n`;
        compilation.emitAsset(jsFile.replace(/\.js$/, '.asset.php'), new webpack.sources.RawSource(php));
      }
    );
  });
};

/**
 * View script: carrega o build do design-system (index.esm.js) via dynamic import
 * e chama renderCurrencyConverter em cada bloco. Não inclui React nem fonte do DS.
 * Saída em formato ES module (viewScriptModule).
 */
const viewConfig = {
  ...baseConfig,
  entry: {
    'infomoney-currency-converter/view': './src/infomoney-currency-converter/view.tsx',
  },
  output: {
    ...baseConfig.output,
    path: __dirname + '/build',
    library: { type: 'module' },
  },
  experiments: {
    ...(baseConfig.experiments || {}),
    outputModule: true,
  },
  resolve: {
    ...baseConfig.resolve,
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: baseConfig.resolve && baseConfig.resolve.alias ? { ...baseConfig.resolve.alias } : {},
  },
  externals: {},
  plugins: baseConfig.plugins
    .filter((p) => !(p instanceof DependencyExtractionWebpackPlugin))
    .concat(new ViewAssetPlugin()),
};

/**
 * Editor: usa código-fonte do design-system (alias) para compartilhar o React do
 * WordPress (wp-element). Evita dupla instância do React que quebra hooks e layout.
 */
const editorConfig = {
  ...baseConfig,
  entry: {
    'infomoney-currency-converter/index': './src/infomoney-currency-converter/index.tsx',
  },
  output: {
    ...baseConfig.output,
    path: __dirname + '/build',
  },
  resolve: {
    ...baseConfig.resolve,
    alias: {
      ...(baseConfig.resolve && baseConfig.resolve.alias),
      // Redirecionar import do build ESM para a fonte (sem CSS) → um único React (externals do wp-scripts).
      [path.resolve(__dirname, '../../../design-system/dist/componentes/currency-converter/index.esm.js')]: path.join(designSystemSrc, 'index.no-css.ts'),
    },
  },
};

module.exports = [ editorConfig, viewConfig ];
