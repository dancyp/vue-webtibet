import Vue from 'vue'
import Router from 'vue-router'
import HelloPage from '@/components/hello'
import Login from '../components/login.vue'
import Cho from '../components/cho.vue'
import List from '../components/ccom/list.vue'
import Dict from '../components/dict.vue'
import Sep from '../components/sep.vue'
import Cholang from '../components/cholang.vue'
import Uploadfile from '../components/uploadfile.vue'
import Newlogin from '../components/newlogin.vue'
import Filemanage from '../components/filemanage.vue'
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
    path:'/cho/:language',
    component:Cho
  },{
    path:'/dict/:language',
    component:Dict
  },{
    path:'/sep/:view/:language',
    component:Sep
  },{
    path:'/cholang',
    component:Cholang
  },{
    path:'/uploadfile',
    component:Uploadfile
  },{
    path:'/newlogin',
    component:Newlogin
  },{
    path:'/filemanage/:language',
    component:Filemanage
  }
  ]
})
