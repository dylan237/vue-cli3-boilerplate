const webpack = require('webpack')
module.exports = {
  publicPath: './',
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  devServer: {
    // port: 8080,
    // https: false,
    // hotOnly: false,
    // proxy: null,
    // proxy: false,
    before: app => { }
  },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        // $: 'jquery',
        // jquery: 'jquery',
        // jQuery: 'jquery',
        // 'window.jQuery': 'jquery',
        _: 'lodash'
      })
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/main.scss";'
      }
    },
    sourceMap: true,
  },
  // images compressor
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  },
}
