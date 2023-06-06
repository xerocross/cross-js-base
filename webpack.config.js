const path = require("path");

module.exports = {
    entry : "./src/cross-js-base.js",
    mode : "production",
    output : {
        path : path.resolve(__dirname, "./"),
        filename : "cross-js-base.js",
        library : "crossJsBase",
        libraryTarget : "umd",
        umdNamedDefine : true
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : "babel-loader"
            }
        ]
    },
    optimization : {
        minimize : true
    }
};
