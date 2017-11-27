import Vue from 'vue'
import Router from 'vue-router'
import HelloPage from '@/components/hello'
import Login from '../components/login.vue'
import Register from '../components/register.vue'
import Cho from '../components/cho.vue'
import Header from '../components/ccom/header.vue'
import List from '../components/ccom/list.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloPage
    },{
		path:'/login',
		component:Login
	},{
		path:'/register',
		component:Register
	},{
    path:'/cho',
    component:Cho
  },{
    path:'/header',
    component:Header
  },{
    path:'/list',
    component:List
  }
  ]
})
