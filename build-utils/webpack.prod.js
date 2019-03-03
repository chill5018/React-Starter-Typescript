const CopyPlugin = require('copy-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const commonPaths = require('./common-paths');

const config = {
  entry: [
    commonPaths.entryPath,
  ],
  module: {
    rules: [
      {
        test: /\.s(c|a)ss/,
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
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    }),
    new UglifyJsWebpackPlugin({
      sourceMap: true,
    }),
    new CompressionWebpackPlugin({
      algorithm: 'gzip',
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CopyPlugin([
      { from: 'src/assets/favicon', to: './favicon' },
    ]),
  ],
  devtool: 'source-map',
};

module.exports = config;
