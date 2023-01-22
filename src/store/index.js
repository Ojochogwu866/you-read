import { createStore } from "vuex";
import helper from "./helpers";

export default createStore({
  state: {
    authenticated: false,
    user: null,
  },
  getters: {},
  mutations: {
    setAuthenticated(state, isAuthenticated) {
      state.authenticated = isAuthenticated;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {},
  modules: { helper },
});
