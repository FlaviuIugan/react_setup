const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./front/scripts/index.js",
  plugins: [new HtmlWebpackPlugin({
    template: "./front/template.html"
  })],
  module : {
    rules : [
      {
        test: /\.scss$/,
        use: ["style-loader","css-loader", "sass-loader"]
      },
      {
        test:  /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}