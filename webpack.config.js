const webpack = require("webpack");
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const webpack_rules = [];

const webpackOption = {
    mode: "production",
    entry: {
        index: './src/utils.js',
        emitter: './src/emitter.js'
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: '[name].js',
        library: "Dauphine JS",
        libraryTarget: "amd",
    },
    module: {
        rules: webpack_rules
    },
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin({
            terserOptions: {
                keep_classnames: true,
                keep_fnames: true,
                output: {
                    comments: false,
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