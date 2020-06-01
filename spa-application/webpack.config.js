const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: './entry.js',

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
          presets: ['@babel/preset-env'],
          plugins: [
            ["@babel/plugin-transform-runtime"]
          ]
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
            camelcase: false,
            emitErrors: false,
            failOnHint: false,
            esversion: 8,
            globals: [
              'window',
              'document',
              'console',
              'addEventListener',
              'localStorage',
              'Handlebars',
              'VK'
            ]
          }
        }]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
