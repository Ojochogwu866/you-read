import { createStore } from "vuex";
import auth from "./auth";
import createPersistedState from "vuex-persistedstate";
import helpers from "./helpers";

export default createStore({
  modules: {
    auth,
    helpers,
  },
  plugins: [
    createPersistedState({
      paths: ["auth.isLoggedIn", "auth.userProfile", "auth.userInformation"],
    }),
  ],
});
