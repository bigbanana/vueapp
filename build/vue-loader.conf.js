var utils = require('./utils')
var config = require('../config')
var autoprefixer = require('autoprefixer')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    autoprefixer({
      browsers: ['IE >= 9']
    })
  ]
}
