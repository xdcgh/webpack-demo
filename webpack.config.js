var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: "index.[contenthash].js"
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Webpack App",
        template: "src/assets/index.html"
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }
};
