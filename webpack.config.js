// WEBPACK BASE CONFIG
var path              = require('path');
var cssnext           = require('cssnext');
var autoprefixer      = require('autoprefixer');
var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  context: path.resolve(__dirname, 'app/'),
  entry: './index',
  output: {
    filename: 'bundle.js',
    path: path.resolve('build/'),
    publicPath: '/build/'
  },
  module: {
      loaders: [
        { test: /\.(png|jpg|ttf|eot|otf|woff|woff2|otf)$/, exclude: /node_modules/, loader: 'url-loader?limit=20000&name=[name]-[hash].[ext]'},
        { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot','babel-loader']}
      ]
  },
  postcss: function () {
      return [autoprefixer, cssnext()];
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery", "window.jQuery": "jquery"})
  ],
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".css"]
  }
};
