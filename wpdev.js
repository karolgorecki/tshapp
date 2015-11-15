// WEBPACK DEV CONFIG
var config = require('./webpack.config.js');

cssLoader = { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader?importLoaders=1&&localIdentName=[path]--[name]__[local]&modules&!postcss-loader'};
eslintLoader = { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/};
config.module.loaders.push(cssLoader);
config.module.loaders.push(eslintLoader);
config.devServer = {contentBase: 'app'};
module.exports = config;
