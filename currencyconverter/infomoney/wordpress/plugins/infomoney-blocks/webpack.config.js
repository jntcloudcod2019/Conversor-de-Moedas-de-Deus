const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
  ...defaultConfig,
  entry: {
    'infomoney-currency-converter/index': './src/infomoney-currency-converter/index.tsx',
    'infomoney-currency-converter/view': './src/infomoney-currency-converter/view.tsx',
  },
  output: {
    ...defaultConfig.output,
    path: __dirname + '/build',
  },
};
