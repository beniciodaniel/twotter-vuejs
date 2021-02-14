export const UserModule = {
  namespaced: true,

  state: {
    user: null,
  },

  // functions that effect state
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },

  // functions that you call throught your application that call mutations
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
  },
};
