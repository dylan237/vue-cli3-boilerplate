import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

// 導航守衛(當跳頁時觸發)
// to:要去的路由 / form:從哪個路由 / next:通過驗證 
// router.beforeEach((to, from, next) => {
//   // 如果要前往的頁面需要驗證(有在router.js的頁面元件設定to.meta.requiresAuth)
//   if (to.meta.requiresAuth) {
//     console.log('這個跳頁需要驗證')
//     //觸發驗證用的API
//     const api = `${process.env.VUE_APP_CUSTOMPATH}/api/user/check`;
//     // this.$http.post(api).then((response) => {
//     // 上一行是錯誤的示範，`this.$http`是在VUE元件內才可以呼叫的，在全域無法使用
//     axios.post(api).then((response) => {
//       console.log(`是否有登入：${response.data.success}`); // 伺服器回傳是否有持續登入
//       if(response.data.success) {
//         next();
//       } else {
//         next({
//           path: '/login' // 如果判斷沒有持續登入，用next帶入物件，並導向該物件的path屬性對應的值
//         })
//       }
//     })
//   } 
//   // 不需要驗證則放行
//   else {
//     next();
//   }
// });

export default router;
