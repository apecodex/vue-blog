import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      toggleMenuFlag: true

    }
  },
  mutations: {
    clickToggleMenuFlag(state) {
      state.toggleMenuFlag = !state.toggleMenuFlag
    }
  }
});