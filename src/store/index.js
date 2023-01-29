import { createStore } from "vuex";
import helper from "./helpers";
import {
  initAuth0,
  loginWithEmailAndPassword,
  loginWithFacebook,
  loginWithGoogle,
} from "@/auth/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    async login({ commit }, { email, password }) {
      try {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password);
        commit("setUser", userCredentials.user);
      } catch (error) {
        throw error;
      }
    },
    async signupWithEmail({ commit }, { email, password }) {
      try {
        await signupWithEmail(email, password);
        commit("setUser", email);
      } catch (e) {
        console.log(e);
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
        await auth0.loginWithRedirect({
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
