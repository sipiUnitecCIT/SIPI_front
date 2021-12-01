const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output:{
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
    publicPath: "/",
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  context: __dirname,
  optimization:{
    minimize: true,
    minimizer:[
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.s?css$/,
        use:[
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html"
    }),
    // new CleanWebpackPlugin()
  ]
}