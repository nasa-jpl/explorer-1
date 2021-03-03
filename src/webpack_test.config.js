// NPM plugins
const autoprefixer = require("autoprefixer");
const WebpackNotifierPlugin = require("webpack-notifier");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: {
    main: "./scripts/entry.js",
  },
  output: {
    filename: "[name].bundle.js",
    publicPath: "./",
  },
  // watch: false,
  // externals: {
  //   jquery: "jQuery",
  // },
  // mode: "development",
  plugins: [
    // Notify when build succeeds
    new WebpackNotifierPlugin({ alwaysNotify: true }),

    // Extract any CSS from any javascript file to process it as LESS/SASS using a loader
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
    }),

    // Minify CSS assets
    new OptimizeCSSAssetsPlugin({}),

    // Use BrowserSync plugin for file changes. I.e. if a CSS/SASS/LESS file changes, the changes will be injected directly in the browser with no page load
    // new BrowserSyncPlugin(
    //   {
    //     proxy: "mysite.local",
    //     open: "external",
    //     host: "mysite.local",
    //     port: 3000,
    //     files: ["./dist/main.css", "./views", "./tailwind.js"],
    //   },
    //   {
    //     // disable reload from the webpack plugin since browser-sync will handle CSS injections and JS reloads
    //     reload: false,
    //   }
    // ),
  ],
  module: {
    rules: [
      {
        // Transpile ES6 scripts for browser support
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        // Extract any SCSS content and minimize
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
            options: {
              plugins: () => [autoprefixer()],
            },
          },
        ],
      },
      {
        // Extract any CSS content and minimize
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader" },
        ],
      },
    ],
  },
};
