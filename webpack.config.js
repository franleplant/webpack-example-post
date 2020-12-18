const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const tsRules = {
  test: /\.ts$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [
        ["@babel/preset-env", { targets: "defaults" }],
        "@babel/preset-typescript",
      ],
    },
  },
};

const svgRules = {
  test: /\.svg$/,
  use: {
    loader: "url-loader",
    options: {
      limit: Infinity,
    },
  },
};

const cssRules = {
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, "css-loader"],
};

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  // This is just to make it easier
  // to read the output
  devtool: false,
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".js", ".ts"],
  },

  module: {
    rules: [tsRules, svgRules, cssRules],
  },
  plugins: [new MiniCssExtractPlugin()],
};
