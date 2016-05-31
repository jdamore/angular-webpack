module.exports = {
  target: 'node',
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.html$/, exclude: /node_modules/, loader: 'html-loader' },
    ],
  },
};
