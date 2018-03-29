const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: ['fe/src/index.js']
  },
  output: {
    path: resolve('dist'),
    filename: '[name].[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      chunks: ['index'],
      template: resolve('./fe/public/index.html'),
      filename: 'index.html',
    })]
};