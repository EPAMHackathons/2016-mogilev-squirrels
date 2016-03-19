var webpack = require('webpack');
var path = require("path");
var config = require("./build.json");

module.exports = {
    entry: {
        'bundle': './src/app/app.module.ts'
    },
    output: {
        path: path.resolve(config.PATH),
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