const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "production",
  entry: "./index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html"
    }),
    new CleanWebpackPlugin()
  ],
  module:{
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(ttf|woff|eot)$/,
        use: ["file-loader"]
      }
    ]
  }
};
