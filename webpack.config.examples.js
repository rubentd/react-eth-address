const path = require('path');

module.exports = {
  entry: './examples/demo.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'examples'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader' ],
      }
    ],
  },
  target: 'web',
};
