import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLodash from 'vue-lodash';
import mixins from '@/mixins/mixins.js'
import filters from '@/filters/filters.js';

const options = { name: 'lodash' };
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueLodash, options);
Vue.mixin(mixins);
Vue.filter('filterDemo', filters);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
