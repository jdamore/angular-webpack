const webpack = require('webpack');

module.exports = {
  entry: './app/app.js',
  output: {
    path: 'bundle',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.html$/, exclude: /node_modules/, loader: 'html-loader' },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      exclude: /\.spec.js?$|node_modules/,
      compress: {
        warning: false,
      },
      mangle: {
        except: ['$super', '$', 'exports', 'require',]
      },
    }),
  ],
};
