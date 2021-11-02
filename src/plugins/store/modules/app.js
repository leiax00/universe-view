import settings from '@/settings.yaml'
const state = {
  showSide: false,
  settings: settings,
  auth: {
    token: '',
    user: {}
  }
}

const mutations = {
  CHANGE_SIDE_SHOW: (state) => {
    state.showSide = !state.showSide
  }
}

const actions = {}

const getters = {
  roleChange: state => {
    // todo: 根据用户角色的变化进行设置该值
    return true
  },
  auth: state => state.auth
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}