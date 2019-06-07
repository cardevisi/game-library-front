import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/admin/Login'
import Projects from '@/components/admin/Projects'

// import About from '@/components/About'
// import Coins from '@/components/Coins.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'Hello',
      component: Hello
    }
  ]
})