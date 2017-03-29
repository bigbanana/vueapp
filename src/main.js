import css from './assets/less/app.less'
import polyfill from 'babel-polyfill'
import _ from 'lodash'
import Vue from 'vue'
import axios from 'axios'
import store from './store'
import qs from 'qs'
import router from './router'
import { Loading } from './components'
Vue.http = axios
Vue.http.defaults.baseURL = '/api'
Vue.http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/*Vue.http.defaults.transformRequest.push((data) => {
  debugger
  console.log(qs.stringify(JSON.parse(data)))
  return qs.stringify(data)
})*/

window.V = Vue
window._ = _
window.S = store
window.R = router
window.qs = qs

let loading = Loading.service({ fullscreen: true })

store.dispatch('userInit').then(()=>{
  loading.close()
  const app = new Vue({
    router,
    store,
    watch: {
      '$route': function(to){
      }
    }
  }).$mount(document.getElementById('app'))
});
