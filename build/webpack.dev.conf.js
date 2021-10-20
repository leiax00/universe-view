const { merge } = require('webpack-merge');
const { baseConfig } = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    hot: true,
    open: false,
  },
});
