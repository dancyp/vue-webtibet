import Vue from 'vue'
import Router from 'vue-router'
import HelloPage from '@/components/hello'
import Login from '../components/login.vue'
import Cho from '../components/cho.vue'
import List from '../components/ccom/list.vue'
import Dict from '../components/dict.vue'
import Sep from '../components/sep.vue'
import Table from '../components/table.vue'
import Cholang from '../components/cholang.vue'
import Newlog from '../components/newlog.vue'
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
    path:'/cho',
    component:Cho
  },{
    path:'/list',
    component:List
  },{
    path:'/dict',
    component:Dict
  },{
    path:'/sep',
    component:Sep
  },{
    path:'/table',
    component:Table
  },{
    path:'/cholang',
    component:Cholang
  },{
    path:'/newlog',
    component:Newlog
  }
  ]
})
