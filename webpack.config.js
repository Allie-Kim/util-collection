var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080/',
        './js/index.js'
    ],
    output: {
        filename: './build/bundle.js',
        sourceMapFilename: './build/bundle.map'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: './'
    }
};
