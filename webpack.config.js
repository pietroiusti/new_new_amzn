const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins


module.exports = {
  mode: 'development',
  //devtool: 'inline-source-map', // option best for development, map is put in the bundle
  devtool: 'source-map', // good for production, map is put in a different file
  entry: {
    index: './src/js/index.js',
    helloEntry: './src/js/test.js',
  },
  //before: entry: './src/js/index.js',
  output: {
    filename: '[id]_bundle.js',
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
  plugins: [new HtmlWebpackPlugin({ template: './src/shop_template.html', inject: true, chunks: ['index', 'helloEntry'] })],
  //before: plugins: [new HtmlWebpackPlugin({ template: './src/shop_template.html' })],
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    port: 8080,
  },
};
