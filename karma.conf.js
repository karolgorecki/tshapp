var webpack           = require('webpack');
var path              = require('path');
var cssnext           = require('cssnext');
var autoprefixer      = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var wpdev             = require('./wpdev.js');

module.exports = function (config) {
    config.set({
      browsers: ['Chrome','Firefox'],
      singleRun: true,
      frameworks: ['mocha'],
      files: [
        'wptest.js'
      ],
      reporters: ['progress','nyan'],
      preprocessors: {
        'wptest.js': ['webpack','sourcemap']
      },
      nyanReporter: {
        suppressErrorReport: true,
        suppressErrorHighlighting: true
      },
      webpack: wpdev,
      webpackServer: {
        noInfo: true
      }
    });
};
