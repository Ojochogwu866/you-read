import axios from "axios";

const apiKey = process.env.API_KEY;
export default {
  state: {
    modalState: false,
    searchBookResults: [],
    query: "",
  },
  getters: {
    currentModalState: (state) => state.modalState,
    searchBookResults: (state) => state.searchBookResults,
  },
  mutations: {
    change: (state, { type, data }) => {
      const keys = Object.keys(state);
      for (let i = 0; i < keys.length; i++) {
        state[keys[i]] = keys[i] === type ? data : state[keys[i]];
      }
      return state;
    },
    setSearchBookResults(state, results) {
      state.searchBookResults = results;
    },
    clearSearchOutput(state) {
      state.searchBookResults = "";
    },
    setSearchSuggestions(state, searchBookResults) {
      state.searchBookResults = searchBookResults;
    },
  },

  actions: {
    async searchBooks({ commit }, query) {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=${apiKey}`
        );
        commit("setSearchBookResults", response.data.items);
      } catch (error) {
        console.log(error);
      }
    },
    clearSearchOutput({ commit }) {
      commit("clearSearchOutput");
    },
    async fetchSearchSuggestions({ commit }, query) {
      try {
        const searchBookResults = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=${apiKey}`
        );
        commit("setSearchSuggestions", searchBookResults);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
