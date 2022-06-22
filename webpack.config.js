const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: {
    index: "./src/pages/index.js",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    // clean: true,
    publicPath: "",
  },

  target: ["web", "es5"],
  stats: { children: true },

  mode: "development",
  devServer: {
    // contentBase: path.resolve(__dirname, "./dist"),
    static: path.resolve(__dirname, "./dist"),
    port: 8080,
    compress: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        // apply this rule only to CSS files
        test: /\.css$/,
        // to process tese files, use
        // MiniCssExtractPlugin.loader and css-loader
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            // add an options object
            options: { importLoaders: 1 },
          },
          // add postcss-loaderr
          "postcss-loader",
        ],
      },
      {
        // add the rule for processing files
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: "./src/index.html",
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
