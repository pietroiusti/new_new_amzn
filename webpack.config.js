const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins


module.exports = {
  mode: 'development',
  //entry: {index: './src/js/index.js'},
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  //plugins: [new HtmlWebpackPlugin({ template: './src/shop_template.html', inject: true, chunks: ['index'] })],
  plugins: [new HtmlWebpackPlugin({ template: './src/shop_template.html' })],
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    port: 8080,
  },
};
