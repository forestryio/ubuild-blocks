const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = 'development'

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
    overlay: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html"
    })
  ],
  module: {
    rules: [
      { test: /\.(html)$/,
        include: path.resolve(__dirname, 'src/html'),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      },
      { test: /\.png$/, use: [ "file-loader" ] },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  }
})
