import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

//import App from './App.vue'
//import router from './router'
import Home from './Home.vue'
import Projects from './components/admin/Projects'
import HomeAdmin from './components/admin/Home'
import LoginAdmin from './components/admin/Login'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/admin', component: HomeAdmin },
    { path: '/admin/login', component: LoginAdmin },
    { path: '/admin/projects', component: Projects }
  ]
})

new Vue({
  router
}).$mount('#app')

