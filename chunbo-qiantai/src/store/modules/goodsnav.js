import { GetData } from '../../config/GetDataClass'
import * as types from '../mutation-types'

const state = {
  GoodsMenu: {}
}

const getters = {
  GoodsMenu: state => state.GoodsMenu
}

const mutations = {
  [types.GOODS_MENU] (state, goodsnav) {
    state.GoodsMenu = goodsnav
  }
}

const actions = {
  GetGoodsMenu ({commit}, goodsnav) {
    GetData('/goodsnav', (res) => {
      commit(types.GOODS_MENU, res)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
