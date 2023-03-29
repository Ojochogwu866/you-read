import axios from "axios";

const apiKey = process.env.API_KEY;
const nytApi = process.env.NYT_API_KEY;
export default {
  state: {
    modalState: false,
    searchBookResults: [],
    query: "",
    bestSellers: [],
  },
  getters: {
    currentModalState: (state) => state.modalState,
    searchBookResults: (state) => state.searchBookResults,
    getBestSellers: (state) => state.bestSellers,
  },
  mutations: {
    change: (state, { type, data }) => {
      const keys = Object.keys(state);
      for (let i = 0; i < keys.length; i++) {
        state[keys[i]] = keys[i] === type ? data : state[keys[i]];
      }
      return state;
    },
    setBestSellers(state, data) {
      state.bestSellers = data;
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
    async fetchBestSellers({ commit }) {
      try {
        const response = await axios.get(
          "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json",
          {
            params: {
              "api-key": "NmiyS3By5IgYNhHhgp67GewNMdHbsVps",
            },
          }
        );
        commit("setBestSellers", response.data.results);
      } catch (error) {
        console.error(error);
      }
    },

    clearSearchOutput({ commit }) {
      commit("clearSearchOutput");
    },
    async fetchSearchSuggestions({ commit }, query) {
      try {
        const searchBookResults = await fetch(
          `https://api.nytimes.com/svc/books/v3/lists.json?q=${query}:keyes&key=${nytApi}`
        );
        commit("setSearchSuggestions", searchBookResults);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
