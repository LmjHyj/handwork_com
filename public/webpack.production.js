var webpack = require('webpack');
var merge = require('@ersinfotech/merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = require('./webpack.config');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackConfig, {
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: "css-loader",
      }),
      exclude: /components/,
    }],
  },
  output: {
    path: __dirname + '/_dist/pc/',
    filename: '[name]_[hash:8].js',
    chunkFilename: '[name]_[chunkhash:8].js',
    publicPath: '/pc/'
  },
  plugins: [
    new ExtractTextPlugin('[name]_[contenthash:8].css'),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,  // remove all comments
      },
      compress: {
        warnings: false,
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new HtmlWebpackPlugin({
      filename: 'myorder.ejs',
      template: __dirname + '/src/index.prod.html',
      favicon: __dirname + '/src/favicon.ico',
      inject: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: [
        'vendor',
        'react',
        'lodash',
        'common'
      ],
      minChunks: Infinity,
    }),
    new webpack.optimize.DedupePlugin()
  ],
});
