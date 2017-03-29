
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
    userInit (state,payload) {
      state.login = payload.login
      state.lastUser = payload.lastUser
    },
    userLogin (state,payload) {
      state.login = payload.login
      state.lastUser = payload.lastUser
    },
    userClearLoginInfo (state) {
      state.login = defaultLogin
    }
  },
  getters: {
    user_isLogin: state => {
      return state.login.id != null
    }
  },
  actions: {
    userLogin ({commit,state},data) {
      let loading = Loading.service({ fullscreen: true })
      return new Promise((resolve,reject) => {
        setTimeout(function(){
          Vue.http.get('login.php',data).then(function(res){
            loading.close()
            commit('userLogin',res.data)
            router.push(router.app.$route.query.redirect || '/')
            resolve()
          },function(){
            debugger
          })
        },100)
      })
    },
    userLogout (context,data) {
      context.commit('userClearLoginInfo')
      router.push('/logout')
    },
    userInit ({commit,state},data) {
      return new Promise((resolve,reject) => {
        Vue.http.get('userinfo.php').then(function(res){
          commit('userInit',res.data);
          resolve()
        },function(){
          debugger
        });
      })
    },
    userRegister ({commit,state},data) {
      console.log(data)
    },
    userForget ({commit,state},data) {
      console.log(data)
    }
  }
}