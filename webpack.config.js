const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WriteFilePlugin(),
        new CopyWebpackPlugin([            
            {
                from: './index.html',
                to: 'index.html'
            },
            {
                from: './images',
                to: 'images'
            }
        ])
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'resolve-url-loader']
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    
    devServer: {
        contentBase: './dist',
        hot: true
    }
};