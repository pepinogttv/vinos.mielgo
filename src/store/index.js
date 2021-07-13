import { createStore } from "vuex";
import admin from "../modules/admin";
import home from "../modules/home";
export default createStore({
  state: {
    resultOfSearch: null,
  },
  mutations: {
    setResultOfSearch(state, payload) {
      state.resultOfSearch = payload;
    },
  },
  actions: {
    actionSetResultOfSearch({ commit, state }, searched) {
      const mutation = "setResultOfSearch";
      if(!searched){
        commit(mutation, state.admin.vinos_admin ? state.admin.vinos_admin : state.home.vinos_state)
        return
      }
      console.log(searched)
      fetch(`/api/index?searched=${searched}`)
        .then((res) => res.json())
        .then((json) => {
          commit(mutation, json);
        })
        .catch((err) => console.error(err));
    },
  },
  modules: {
    admin,
    home,
  },
});
