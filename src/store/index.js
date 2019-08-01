import Vue from 'vue'
import Vuex from 'vuex'

//動態載入
// eslint-disable-next-line no-undef
let mutationContext = require.context('./modules', true, /.*\.js/);
let modules = {}
mutationContext.keys().forEach(k => {
  let n = k.substring(2, k.length - 3)
  modules[n] = mutationContext(k).default
})

Vue.use(Vuex);

var store = new Vuex.Store({
  modules: modules,  
  // 嚴格模式，禁止直接修改 state
  strict: true
});

export default store
