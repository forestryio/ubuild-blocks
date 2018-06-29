const path = require('path')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'ubuild.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  }
}