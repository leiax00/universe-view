const defaultSettings = require('../src/settings.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const path = require('path');
const { DefinePlugin } = require("webpack");
const resolvePath = (_path) => path.resolve(__dirname, _path);

const baseConfig = {
  entry: resolvePath('../src/main.js'),
  output: {
    filename: 'bundle-[name].js',
    path: resolvePath('../dist'), // 输出的文件地址
    publicPath: defaultSettings.baseUrl,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
    alias: {
      '@': resolvePath('../src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('../public/index.html'),
      filename: 'index.html',
      title: 'Webpack React App',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:4].css',
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
    })
  ],
  module: {
    rules: [
      {
        test: /(\.(scss|sass|css))$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        // options: { name: "images/[name].[ext]" },
      },
    ],
  },
};

module.exports = {
  resolvePath,
  baseConfig,
};
