const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./src/utils",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "utils.js",
        library: "Dauphine JS",
        libraryTarget: "umd",
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                keep_fnames: true,
                output: {
                    comments: false,
                },
            },
            extractComments: false
        })],
    },
};