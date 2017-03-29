import Vue from 'vue'
import _ from 'lodash'
import qs from 'qs'
import router from '../../router'

function getArrayQuery(key){
  var res = []
  if(router.app.$route.query[key]){
    if(_.isArray(router.app.$route.query[key])){
      res = router.app.$route.query[key].map(item => {
        return parseInt(item)
      })
    }else{
      res = [parseInt(router.app.$route.query[key])]
    }
  }
  return res
}

const sendRequest = _.debounce((commit, state) => {
  router.push({ path: 'list', query: state.snapshot})
}, 2000, {leading: true})

const getResult = _.debounce((commit, state) => {
  var snapshot = state.snapshot
  commit('searchLoading', true)
  Vue.http.post('list.php',qs.stringify(snapshot)).then(function({ data }){
    if(snapshot != state.snapshot) return
    commit('searchLoading', false)
    commit('searchResult', data.data)
  },function(){
    debugger
  })
}, 1000, {leading:true})

export default {
  state: {
    keyword: '',
    tType: [],
    date: [],
    proposer: [],
    loading: false,
    snapshot: {},
    result: []
  },
  mutations: {
    searchTType (state, payload) {
      state.tType = payload
    },
    searchDate (state, payload) {
      state.date = payload
    },
    searchProposer (state, payload) {
      state.proposer = payload
    },
    searchLoading (state, payload) {
      state.loading = payload
    },
    searchResult (state, payload) {
      state.result = payload
    },
    searchSnapshot (state, payload) {
      state.snapshot = payload
    }
  },
  actions: {
    searchTType: ({commit, state, dispatch}, payload) => {
      commit('searchTType', payload)
      dispatch('searchCommit')
    },
    searchDate: ({commit, state, dispatch}, payload) => {
      commit('searchDate', payload)
      dispatch('searchCommit')
    },
    searchProposer: ({commit, state, dispatch}, payload) => {
      commit('searchProposer', payload)
      dispatch('searchCommit')
    },
    searchSnapshot: ({commit, state, dispatch}, payload) => {
      var snapshot = {
        keyword: state.keyword,
        tType: state.tType,
        date: state.date,
        proposer: state.proposer
      }
      // 设置快照(可能会被debounce)
      commit('searchSnapshot', snapshot)
    },
    searchCommit: ({commit, state, dispatch}, payload) => {
      dispatch('searchSnapshot')
      sendRequest(commit, state)
    },
    searchFetch: ({commit, state, dispatch}, payload) => {
      getResult(commit, state)
    },
    searchInit ({commit, state, dispatch}, payload) {
      commit('searchTType', getArrayQuery('tType'))
      commit('searchDate', getArrayQuery('date'))
      commit('searchProposer', getArrayQuery('proposer'))
      dispatch('searchSnapshot')
      dispatch('searchFetch')
    }
  }
}
