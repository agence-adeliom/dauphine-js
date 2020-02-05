const webpack = require("webpack");
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const webpack_rules = [];

const webpackOption = {
    mode: "production",
    entry: {
        index: './test/utils.js',
        emitter: './test/emitter.js'
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: '[name].js',
        sourceMapFilename: "[name].js.map",
        library: "Dauphine JS",
        libraryTarget: "umd",
    },
    devtool: "source-map",
    module: {
        rules: webpack_rules
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            sourceMap: true,
            terserOptions: {
                keep_classnames: true,
                keep_fnames: true,
                output: {
                    comments: true,
                },
            },
            extractComments: false
        })]
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