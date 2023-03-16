import Api from "@/auth/api";
import router from "../router";

const getDefaultState = () => {
  return {
    isLoggedIn: false,
    userProfile: "",
    userInformation: "",
    userBooks: "",
  };
};
const state = getDefaultState();
const actions = {
  get: async ({ commit, dispatch }, { endpoint, auth }) => {
    if (auth) {
      commit("set", {
        type: "loading",
        data: true,
      });
      let res = await Api.get(endpoint, true);
      commit("set", {
        type: "loading",
        data: false,
      });
      return res;
    } else {
      commit("set", {
        type: "loading",
        data: true,
      });
      let res = await Api.get(endpoint);
      commit("set", {
        type: "loading",
        data: false,
      });
      return res;
    }
  },
  post: async ({ commit, dispatch }, { endpoint, auth, payload }) => {
    if (auth) {
      commit("set", {
        type: "loading",
        data: true,
      });
      let response = await Api.post(endpoint, payload, true);
      commit("set", {
        type: "loading",
        data: false,
      });
      return response;
    } else {
      commit("set", {
        type: "loading",
        data: true,
      });
      let res = await Api.post(endpoint, payload);
      commit("set", {
        type: "loading",
        data: false,
      });
      return res;
    }
  },

  put: async ({ commit, dispatch }, { endpoint, auth, payload }) => {
    if (auth) {
      commit("set", {
        type: "loading",
        data: true,
      });
      let response = await Api.put(endpoint, payload, true);
      commit("set", {
        type: "loading",
        data: false,
      });
      return response;
    } else {
      commit("set", {
        type: "loading",
        data: true,
      });
      let res = await Api.put(endpoint, payload);
      commit("set", {
        type: "loading",
        data: false,
      });
      return res;
    }
  },
  //   async getUserProfile({ commit }) {
  //     const response = await Api.getProfile();
  //     const userProfile = response.data;
  //     commit("setUserProfile", userProfile);
  //   },
  //   async getUserInformation({ commit }) {
  //     const response = await Api.getInformation();
  //     const userInformation = response.data;
  //     commit("setUserInformation", userInformation);
  //   },
  remove: async ({ commit, dispatch }, { endpoint }) => {
    commit("set", {
      type: "loading",
      data: true,
    });
    let res = await Api.delete(endpoint);
    commit("set", {
      type: "loading",
      data: false,
    });
    return res;
  },
};

const mutations = {
  set: (state, { type, data }) => {
    const keys = Object.keys(state);
    for (let i = 0; i < keys.length; i++) {
      state[keys[i]] = keys[i] === type ? data : state[keys[i]];
    }
    return state;
  },
  logOut: (state) => {
    localStorage.removeItem("token");
    localStorage.removeItem("token");
    Object.assign(state, getDefaultState());
    router.push("/");
  },
};
export default {
  state,
  getters: {
    authStatus: (state) => state.isLoggedIn,
    getUserProfile: (state) => state.userProfile,
    getUserInformation: (state) => state.userInformation,
    getUserBooks: (state) => state.userBooks,
  },
  actions,
  mutations,
};
