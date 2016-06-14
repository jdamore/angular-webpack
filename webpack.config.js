const webpack = require('webpack');

module.exports = {
  entry: './app/app.js',
  output: {
    path: 'bundle',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      // CSS Loader: style-loader, css-loader, sass-loader
      { 
        test: /\.scss$/, 
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.html$/, exclude: /node_modules/, loader: 'html-loader' },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      exclude: /\.spec.js?$|node_modules/,
      compress: {
        warnings: false,
      },
      mangle: {
        except: ['$super', '$', 'exports', 'require',]
      },
    }),
  ],
};
