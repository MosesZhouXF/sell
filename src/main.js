import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入主vue文件
import App from './App'
// 导入路由表
import routes from './routes'

// 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)
Vue.use(VueRouter)

// 实例路由
const router = new VueRouter({
  routes,
  linkActiveClass: 'active' // 被选中的class
})

// 将组件挂在到html标签上
/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: {App}
}).$mount('#app')

// 默认路由
router.push('/goods')
