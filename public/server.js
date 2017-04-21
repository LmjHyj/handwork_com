const express = require('express');
const webpack = require('webpack');
const devMid = require('webpack-dev-middleware');
const hotMid = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.development');

const app = express();
const compiler = webpack(webpackConfig);

app.use(devMid(compiler, {
  noInfo: true,
  stats: {
    colors: true,
  },
}));
app.use(hotMid(compiler));

app.set('port', process.env.PORT || 4001);

app.listen(app.get('port'), function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Port is ' + app.get('port') + ', please wait to build ...');
});
