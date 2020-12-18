const path = require("path");

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

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".js", ".ts"],
  },

  module: {
    rules: [tsRules, svgRules],
  },
};
