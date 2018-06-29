const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

process.env.NODE_ENV = 'development'

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
    open: true,
    overlay: true,
  },
  module: {
    rules: [
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
      }
    ]
  }
})