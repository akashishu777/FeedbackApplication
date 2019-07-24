var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
            // Inject bundles and CSS directly into the HTML template
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './index.html'),
          inject: 'body'
        }),
      ],
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };