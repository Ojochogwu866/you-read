import axios from "axios";

const apiKey = "";
export default {
  state: {
    modalState: false,
    searchBookResults: [],
  },

  getters: {
    currentModalState: (state) => state.modalState,
    searchBookResults: (state) => state.searchBookResults,
  },
  mutations: {
    setSearchBookResults(state, results) {
      state.searchBookResults = results;
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
  },
};
