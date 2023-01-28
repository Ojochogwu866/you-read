import { createStore } from "vuex";
import helper from "./helpers";
import {
  initAuth0,
  loginWithEmailAndPassword,
  loginWithFacebook,
  loginWithGoogle,
} from "@/auth/auth";

export default createStore({
  state: {
    user: null,
  },
  getters: { user: (state) => state.user },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async signupWithEmail({ commit }, { email, password }) {
      await initAuth0();
      try {
        await loginWithEmailAndPassword(email, password);
        commit("setUser", email);
      } catch (error) {
        throw error;
      }
    },
    async signupWithFacebook({ commit }) {
      try {
        const user = await loginWithFacebook();
        commit("setUser", user);
      } catch (error) {
        console.error(error);
      }
    },
    async signupWithGoogle({ commit }) {
      try {
        const user = await loginWithGoogle();
        commit("setUser", user);
      } catch (error) {
        console.error(error);
      }
    },
    async loginWithEmailAndPassword({ commit }, { email, password }) {
      try {
        const auth0 = await initAuth0();
        await auth0.loginWithRedirect({
          connection: "Username-Password-Authentication",
          email,
          password,
        });
        const user = await auth0.getUser();
        commit("setUser", user);
      } catch (error) {
        console.log(error);
      }
    },
    async loginWithFacebook({ commit }) {
      try {
        const auth0 = await initAuth0();
        await auth0.loginWithPopup({
          connection: "facebook",
        });
        const user = await auth0.getUser();
        commit("setUser", user);
      } catch (error) {
        console.log(error);
      }
    },
    // ....
    async loginWithGoogle({ commit }) {
      try {
        const auth0 = await initAuth0();
        await auth0.loginWithPopup({
          connection: "google-oauth2",
        });
        const user = await auth0.getUser();
        commit("setUser", user);
      } catch (error) {
        console.log(error);
      }
      // ....
    },
    async logout({ commit }) {
      try {
        const auth0 = getAuth0Client();
        await auth0.logout();
        commit("setUser", null);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: { helper },
});
