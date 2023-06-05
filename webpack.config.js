const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/cross-js-base.js",
    output: {
        path: path.resolve(__dirname, "./"),
        filename: "cross-js-base.js",
        library: "crossJsBase",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: 'babel-loader',
            },
          ]
    },
    optimization: {
        minimize: true
    }
};
