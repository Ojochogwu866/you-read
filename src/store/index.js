import { createStore } from "vuex";
import helper from "./helpers";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
    async signup({ commit }, { email, password }) {
      try {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password);
        commit("setUser", userCredentials.user);
      } catch (error) {
        throw error;
      }
    },
    async login({ commit }, { email, password }) {
      try {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password);
        commit("setUser", user);
      } catch (error) {
        throw error;
      }
    },
    async logout({ commit }) {
      try {
        await firebase.auth().signOut();
        commit("setUser", null);
      } catch (error) {
        throw error;
      }
    },
    async handleSocialLogin({ commit }, provider) {
      try {
        let providerObject;
        if (provider === "google") {
          const auth = getAuth();
          signInWithPopup(auth, provider)
            .then((result) => {
              const credential =
                GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              const user = result.user;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              const email = error.customData.email;
              const credential = GoogleAuthProvider.credentialFromError(error);
            });
        } else if (provider === "facebook") {
          provider = new firebase.auth.FacebookAuthProvider();
        }
        const { user } = await firebase.auth().signInWithPopup(providerObject);
        commit("setUser", user);
      } catch (error) {
        throw error;
      }
    },
  },
  modules: { helper },
});
