const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  publicPath: '',
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
      disableHostCheck: true
    }
  }
})

