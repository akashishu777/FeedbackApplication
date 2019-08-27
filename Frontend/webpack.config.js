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
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }, {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader?limit=100000' }]
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