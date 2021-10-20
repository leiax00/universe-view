import defaultSettings from '@/settings';
const state = {
  showSide: false,
  settings: {
    title: defaultSettings.title,
    version: defaultSettings.version,
    baseUrl: defaultSettings.baseUrl,
  },
};

const mutations = {
  CHANGE_SIDE_SHOW: (state) => {
    state.showSide = !state.showSide;
  },
};

const actions = {

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
