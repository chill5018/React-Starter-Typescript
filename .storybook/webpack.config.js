const path = require("path");

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [{
      loader: require.resolve('awesome-typescript-loader')
    }]
  },{
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  },
  {
    test: /\.css/,
    include: /node_modules/,
    use: ['style-loader', 'css-loader'],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
