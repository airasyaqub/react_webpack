const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const CleanWebpackPlugin = require("clean-webpack-plugin");

const WebpackMd5Hash = require("webpack-md5-hash");

const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.scss|.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin("dist", {
      verbose: true
    }),

    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css"
    }),

    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: "./public/index.html",
      filename: "index.html"
    }),

    new WebpackMd5Hash(),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NamedModulesPlugin()
  ],

  devtool: "inline-source-map",

  devServer: {
    contentBase: "./dist",
    hot: true
  }
};
