const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");

const env = process.env.NODE_ENV;

module.exports = {
  mode: env,
  entry: "./src/index.js",
  output: {
    publicPath: "/",
    filename: "js/jpl-ds.min.js",
    chunkFilename: "js/chunk.[name].js",
  },

  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //     name: "vendor",
  //   },
  // },

  module: {
    rules: [
      // scripts
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // styles
      {
        test: /\.(sc|c)ss$/,
        use: [
          // "style-loader",
          env === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 2, sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js"),
              },
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      // webfonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new WebpackBuildNotifierPlugin(),

    new MiniCssExtractPlugin({
      filename: "css/jpl-ds.[name].min.css",
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/html/index.html",
    }),
  ],
};
