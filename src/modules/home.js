export default {
  namespaced: true,
  state: {
    vinos_state: null,
    resultOfSearch: null,
  },
  mutations: {
    setVinos(state, payload) {
      state.vinos_state = payload;
    },
    setResultOfSearch(state, payload) {
      state.resultOfSearch = payload;
    },
  },
  actions: {
    actionSetVinos({ commit }, vinos) {
      commit("setVinos", vinos);
    },
    async actionSetResultOfSearch({ commit, state }, searched) {
      const mutation = "setResultOfSearch";
      if (searched) {
        try {
          const res = await fetch(`/api/index?searched=${searched}`);
          let arrayDeVinos = await res.json();
          commit(mutation, arrayDeVinos);
        } catch (err) {
          console.error(err);
        }
      }else{
        commit(mutation, state.vinos_state)
      }
    },
  },
  getters: {},
};
