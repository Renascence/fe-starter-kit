/* eslint-disable */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/build",
    filename: '[name].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: "7000",
    inline: true,
    historyApiFallback: true,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ['import', { libraryName: "antd", style: true }],
        ]
      },
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
      }, {
        loader: "css-loader"
      }, {
        loader: "less-loader"
      }]
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
};