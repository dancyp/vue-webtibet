// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import uploader from 'vue-simple-uploader'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import FileUpload from 'vue-upload-component/dist/vue-upload-component.part.js'
import axios from 'axios'

//Vue.use(axios)
Vue.use(FileUpload)
Vue.use(ElementUI)
Vue.use(uploader)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  
  render(createElement) {
    return createElement(App)
  }

})
