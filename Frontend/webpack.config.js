var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry: {
        'bundle': './src/app/app.ts'
    },
    output: {
        path: path.resolve("./release/dest/"),
        filename: "[name].js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' }
        ]
    }
}