const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const resolve = function (filepath) {
  return path.join(__dirname, filepath)
}
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  configureWebpack: {

  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "${resolve('src/styles/common.less')}";`
          }
        }
      }
    }
  }
})
