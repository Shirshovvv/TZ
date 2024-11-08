const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
     {
      test: /\.(scss|css)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader',],
     },
     {
      test: /\.(ttf|otf|eot|woff|woff2)$/,
      use: ['file-loader']
     }
    ]
  },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'template.html'),
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new CopyPlugin({
        patterns: [{
              from: path.resolve(__dirname, 'src/img'),
              to:   path.resolve(__dirname, 'dist/img')
            }]
        })
    ]
  };