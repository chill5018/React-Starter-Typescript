/* eslint-disable */
const webpack = require('webpack');
const commonPaths = require('./common-paths');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

const config = {
  entry: [
    'react-hot-loader/patch',
    commonPaths.entryPath,
  ],
  module: {
    rules: [
      {
        test: /\.s(a|c)ss/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(envKeys)
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 4000,
    publicPath: '/',
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
};

module.exports = config;
