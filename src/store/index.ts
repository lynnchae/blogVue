import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: {}
  },
  mutations: {
    ['setToken'](state,token){
      sessionStorage.setItem('token',token)
      state.token = token
    },
    ['removeToken'](state,token){
      sessionStorage.removeItem('token')
      state.token = ''
    },
    ['setUserInfo'](state,user){
      sessionStorage.setItem('userInfo',JSON.stringify(user))
      state.userInfo = user
    }

  },
  actions: {
  },
  modules: {
  },
  getters:{
    userInfo: function (state) {
      // @ts-ignore
      state.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
      return state.userInfo
    }
  }
})
