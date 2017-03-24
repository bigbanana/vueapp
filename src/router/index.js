import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from '../pages'
import store from '../store'
import { Loading } from '../components'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:Routes
})

router.beforeEach((to,from,next) => {

  //let loading = Loading.service({ fullscreen: true })
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.getters.user_isLogin){
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if(to.matched.some(record => record.meta.requiresNoAuth)){
    if(store.getters.user_isLogin){
      next({
        path: '/'
      })
    } else {
      next()
    }
  }else{
    next()
  }



})

export default router
