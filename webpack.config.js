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
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    optimization: {
        minimize: true
    }
};
