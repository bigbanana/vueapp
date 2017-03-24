import css from './assets/less/app.less'
import polyfill from 'babel-polyfill'
import _ from 'lodash'
import Vue from 'vue'
import VueResource from 'vue-resource'
import store from './store'
import router from './router'
import * as Components from './components'
Vue.use(Components)
Vue.use(VueResource)
Vue.http.options.root = '/api'

window.V = Vue
window._ = _

let loading = Components.Loading.service({ fullscreen: true })

store.dispatch('user_init').then(()=>{
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
