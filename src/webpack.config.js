const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          "style-loader",
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
            options: { implementation: require("sass"), sourceMap: true },
          },
        ],
      },

      // {
      //   test: /\.css$/,
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: {
      //         sourceMap: true,
      //         url: true,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: "style-loader",
      //     },
      //     {
      //       loader: "css-loader",
      //     },
      //     {
      //       loader: "sass-loader",
      //     },
      //   ],
      // },

      // --------------------------- this sort of works
      // {
      //   test: /\.scss$/,
      //   include: path.resolve(__dirname, "scss/"),
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: {
      //         sourceMap: true,
      //         url: true,
      //       },
      //     },
      //     {
      //       loader: "postcss-loader",
      //       options: {
      //         postcssOptions: {
      //           config: path.resolve(__dirname, "postcss.config.js"),
      //         },
      //       },
      //     },
      //     {
      //       loader: "sass-loader",
      //       options: {
      //         sourceMap: true,
      //       },
      //     },
      //   ],
      // },
    ],
  },
};
