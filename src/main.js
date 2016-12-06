import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueBus from 'vue-bus'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueBus)

// 导入主vue文件
import App from './App'
// 导入路由表
import routes from './routes'

// 引入全局css
import 'common/stylus/index.styl'

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
// router.push('/goods')
