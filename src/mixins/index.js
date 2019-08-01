import Vue from 'vue';

const requireMixins = require.context('./modules', true, /\.js$/)

requireMixins.keys().forEach(filePath => {
  const mixinConfig = requireMixins(filePath)
  Vue.mixin(mixinConfig.default)
})

// > mixin檔不可取名為 **index.js**