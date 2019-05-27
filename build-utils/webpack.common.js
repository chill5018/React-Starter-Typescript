/* eslint-disable */
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const commonPaths = require('./common-paths');

const config = {
  node: {
    fs: "empty"
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
            },
          },
        ],
      },
      // More advanced SVG configs: https://www.robinwieruch.de/react-svg-icon-components/#react-svg-icon-components-webpack
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      // fixes https://github.com/graphql/graphql-js/issues/1272
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: ['*', '.mjs', '.ts', '.tsx', '.js', '.jsx', '.json', '.gql', '.graphql']
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new Dotenv({
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true // hide any errors
    })
  ]
};

module.exports = config;