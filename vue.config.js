const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: path.join(__dirname, './src')
      }
    }
  }
}