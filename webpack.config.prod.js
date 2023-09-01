const { merge } = require('webpack-merge');
const commonConfigs = require('./webpack.config.common.js');

module.exports = merge(commonConfigs, {
  mode: 'production',
  devtool: 'source-map',
});
