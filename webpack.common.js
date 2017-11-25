/* eslint-disable */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// the relative path to the build dir
const buildDirPath = './public/build/js';

module.exports = {
  entry: path.join(__dirname, 'src/react/App/index.jsx'),
  plugins: [
    new CleanWebpackPlugin([buildDirPath]),
  ],
  output: {
    path: path.resolve(__dirname, buildDirPath),
    filename: 'bundle.js',
    publicPath: buildDirPath,
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          },
        },
      },
    ],
  },
};
