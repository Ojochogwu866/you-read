import { createStore } from "vuex";
import helper from "./helpers";
import {
  getAuth,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import router from "../router/index";
export default createStore({
  state: {
    user: null,
    error: null,
    status: null,
  },
  getters: { user: (state) => state.user },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setStatus(state, payload) {
      state.status = payload;
    },
  },
  actions: {
    async signup({ commit }, payload) {
      try {
        const auth = getAuth();
        createUserWithEmailAndPassword(
          auth,
          payload.email,
          payload.password
        ).then((response) => {
          router.replace("/reader/profile");
          commit("setUser", userCredentials.user.uid);
          commit("setStatus", "Success");
        });
      } catch (error) {
        throw error;
      }
    },
    async login({ commit }, payload) {
      try {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, payload.email, payload.password).then(
          (response) => {
            router.replace("/reader/profile");
            commit("setUser", userCredentials.user.uid);
            commit("setStatus", "Success");
          }
        );
      } catch (error) {
        throw error;
      }
    },
    async logout({ commit }) {
      try {
        const auth = getAuth();
        signOut(auth).then(() => {});
      } catch (error) {}
    },
    async handleSocialLogin({ commit }, provider) {
      try {
        if (provider === "google") {
          const auth = getAuth();
          const provider = new GoogleAuthProvider();
          signInWithPopup(auth, provider)
            .then((result) => {
              router.replace("/reader/profile");
              const credential =
                GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              const user = result.user;
              this.$router.go({ name: "reader-profile" });
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
              router.replace("/reader/profile");
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
