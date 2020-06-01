const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },

  devtool: 'eval',

  devServer: {
    port: 4200
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [{
          loader: 'jshint-loader',
          query: {
            undef: true,
            unused: true,
            jquery: true,
            camelcase: true,
            emitErrors: false,
            failOnHint: false,
            esversion: 6,
            globals: ['window', 'document', 'console']
          }
        }]
      }
    ]
  },

  resolve: {
    alias: {
      'framework': path.join(__dirname, 'src/framework')
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
