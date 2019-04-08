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
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [{
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          "@babel/preset-react",
          "@babel/preset-env"
        ],
        plugins: [
          ["@babel/plugin-proposal-class-properties", { "loose": true }],
          ['import', { libraryName: "antd", style: true }],
        ]
      },
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!'
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
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};