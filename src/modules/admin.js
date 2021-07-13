export default {
  namespaced: true,
  state: {
    vinos_admin: null,
    resultOfSearch: null,
  },
  mutations: {
    setVinosAdmin(state, payload) {
      state.vinos_admin = payload;
    },
    setResultOfSearch(state, payload) {
      state.resultOfSearch = payload;
    },
  },
  actions: {
    actionSetVinosAdmin({ commit }, vinos) {
      commit("setVinosAdmin", vinos);
    },
    async actionSetResultOfSearch({ commit, state }, searched) {
      const mutation = "setResultOfSearch";
      if (searched.length) {
        try {
          const res = await fetch(`/api/index?searched=${searched}`);
          let arrayDeVinos = await res.json();
          commit(mutation, arrayDeVinos);
        } catch (err) {
          console.error(err);
        }
      }else{
        commit(mutation, state.vinos_admin)
      }
    },
  },
  getters: {},
};
