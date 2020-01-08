const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./src/utils",
    output: {
        path: path.resolve(__dirname, "./"),
        filename: "index.js",
        library: "Dauphine JS",
        libraryTarget: "umd",
    },
    optimization: {
        namedModules: true,
        minimize: true,
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
    },
};