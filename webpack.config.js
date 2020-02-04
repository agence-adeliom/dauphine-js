const webpack = require("webpack");
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const webpack_rules = [];

const webpackOption = {
    mode: "production",
    entry: "./src/utils",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js",
        library: "Dauphine JS",
        libraryTarget: "umd",
    },
    module: {
        rules: webpack_rules
    }
};

let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    }
};

webpack_rules.push(babelLoader);
module.exports = webpackOption;