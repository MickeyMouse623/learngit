import * as types from '../mutation-types'

const state = {
  userInfo: JSON.parse(localStorage.getItem('CB_USERINFO')) || {}
}

const getters = {
  GetUserInfo: state => state.userInfo
}

const mutations = {
  [types.USERINFO] (state, user) {
    state.userInfo = localStorage.setItem(JSON.parse(user))
  }
}

const actions = {
  UserInfo ({commit}, user) {
    commit(types.USERINFO)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
