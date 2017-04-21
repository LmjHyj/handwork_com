
module.exports = {
  entry: {
    app: [__dirname + '/src/app'],
    vendor: [
      'redux',
      'react-redux',
      'react-router',
      'react-router-redux'
    ],
    react: [
      'react',
      'react-dom'
    ],
    lodash: 'lodash',
    common: [
      'bluebird',
    ]
  },
  resolve: {
    modules: [
      __dirname + '/src',
      __dirname + '/node_modules',
      __dirname,
    ],
    extensions: ['.js'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader?importLoaders=1', {
        loader: 'postcss-loader',
        options: {
          plugins: () => {
            return [
              require('precss'),
              require('autoprefixer')
            ];
          }
        },
      }],
      include: /components/,
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader?importLoaders=1', 'less-loader', {
        loader: 'postcss-loader',
        options: {
          plugins: () => {
            return [
              require('precss'),
              require('autoprefixer')
            ];
          }
        },
      }]
    }, {
      test: /\.(jpe?g|png|gif|svg|ico)/i,
      loader: 'file-loader?name=img_[hash:8].[ext]',
    }, {
      test: /\.(ttf|eot|woff|woff2)/,
      loader: 'file-loader',
    }, {
      test: /\.(pdf)/,
      loader: 'file-loader',
    }, {
      test: /\.(swf|xap)/,
      loader: 'file-loader',
    }],
  },
};
