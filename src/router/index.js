import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/content/Home.vue' // 首页
import Rank from '../components/content/Rank.vue' // 排行榜
import UserCenter from '../components/content/user-Center.vue' // 个人中心
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: UserCenter
    }
  ]
})
