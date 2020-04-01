const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const base = require('./webpack.config.base.js')

module.exports = {
    ...base, // 把base 里的属性都复制过来
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
