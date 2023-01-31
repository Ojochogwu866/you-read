import { createStore } from "vuex";
import helper from "./helpers";
import {
  getAuth,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
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
        if (provider === "google") {
          const auth = getAuth();
          const provider = new GoogleAuthProvider();
          signInWithPopup(auth, provider)
            .then((result) => {
              if (result.status == 200) {
                this.$router.push("/reader/profile");
              }
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
          const auth = getAuth();
          const provider = new FacebookAuthProvider();
          signInWithPopup(auth, provider)
            .then((result) => {
              this.$router.push("/reader/profile");
              const credential =
                FacebookAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              const user = result.user;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              const email = error.customData.email;
              const credential = GoogleAuthProvider.credentialFromError(error);
            });
        }
      } catch (error) {
        throw error;
      }
    },
  },
  modules: { helper },
});
