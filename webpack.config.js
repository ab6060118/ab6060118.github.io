const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (_env, options) => ({
  mode: 'development',
  devtool: options.mode === 'development' ? 'source-map' : false,
  entry: {
    index: './src/index.tsx',
  },
  output: {
    filename: 'js/[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
  ],
  optimization: {
    minimize: options.mode === 'production',
    // minimizer: [new CssMinimizerPlugin({ sourceMap: false }), new UglifyJsPlugin({ sourceMap: true })],
  },
  devServer: {
    contentBase: './',
    overlay: true,
    watchContentBase: true,
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    inline: true,
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
  },
});
