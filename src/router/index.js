import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
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

const router = new Router({
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
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component:Cho
  },{
    path:'/dict/:language',
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component:Dict
  },{
    path:'/sep/:view/:language',
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component:Sep
  },{
    path:'/cholang',
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component:Cholang
  },{
    path:'/uploadfile',
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component:Uploadfile
  },{
    path:'/newlogin',
    component:Newlogin
  },{
    path:'/filemanage/:language',
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component:Filemanage
  }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
      if (window.sessionStorage.token) {  // 通过vuex state获取当前的token是否存在
          next();
      }
      else {
          next({
              path: '/newlogin',
              query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
  }
  else {
      next();
  }
})

export default router