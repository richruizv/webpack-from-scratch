const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'awesome.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new BundleAnalyzerPlugin()
  ],
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: 9000
  }
};