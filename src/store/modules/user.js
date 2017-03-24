
import Vue from 'vue'
import router from '../../router'
import { Loading } from '../../components'

const defaultLogin = {
  id: null,
  name: ""
}

export default {
  state:{
    login: defaultLogin,
    lastUser: {
      username: "",
      password: ""
    }
  },
  mutations: {
    user_init (state,payload) {
      state.login = payload.login
      state.lastUser = payload.lastUser
    },
    user_login (state,payload) {
      state.login = payload.login
      state.lastUser = payload.lastUser
    },
    user_clearLoginInfo (state) {
      state.login = defaultLogin
    }
  },
  getters: {
    user_isLogin: state => {
      return state.login.id != null
    }
  },
  actions: {
    user_login ({commit,state},data) {
      let loading = Loading.service({ fullscreen: true })
      return new Promise((resolve,reject) => {
        setTimeout(function(){
          Vue.http.get('login.php',data).then(function(res){
            loading.close()
            commit('user_login',res.body)
            router.push(router.app.$route.query.redirect || '/')
            resolve()
          },function(){
            debugger
          })
        },100)
      })
    },
    user_logout (context,data) {
      context.commit('user_clearLoginInfo')
      router.push('/logout')
    },
    user_init ({commit,state},data) {
      return new Promise((resolve,reject) => {
        //Vue.http.get('userinfo.php').then(function(res){
        Vue.http.delete('login.php').then(function(res){
          commit('user_init',res.body);
          resolve()
        },function(){
          debugger
        });
      })
        
    },
    user_register ({commit,state},data) {
      console.log(data)
    },
    user_forget ({commit,state},data) {
      console.log(data)
    }
  }
}