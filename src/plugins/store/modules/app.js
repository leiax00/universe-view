import settings from '@/settings.yaml'
import { themeManager } from '@/utils/theme'

const state = {
  showSide: false,
  settings: settings,
  themeManager: themeManager.fillCtx({ themeList: settings.define.theme }),
  auth: {
    token: '',
    user: {}
  },
  headerCtl: {
    showArticle: false
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
  auth: state => state.auth,
  headerCtl: state => state.headerCtl
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}