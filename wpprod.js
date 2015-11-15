// WEBPACK PRODUCTION CONFIG
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./webpack.config.js');

cssLoader = { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader','css-loader?importLoaders=1&modules!postcss-loader')};
config.module.loaders.push(cssLoader);
module.exports = config;
