// Learn more about PostCSS:
// https://github.com/postcss/postcss

module.exports = function(ctx = {}) {
    const file = ctx.file
    const opts = ctx.options || {}
    const isProduction = (opts.env === "production") || (process.env.NODE_ENV === "production")
  
    return {
      plugins: {
        "autoprefixer": {},
      }
    }
  }
  