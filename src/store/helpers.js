import axios from "axios";

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
    async searchBooks({ commit }) {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${this.query}`
        );
        commit("setSearchBookResults", response.data.items);
      } catch (error) {
        console.log(error);
      }
    },
    async makeSearch({ commit }) {
      if (this.query === "") {
        return;
      }
      this.commit("set", {
        type: "searchedUrl",
        data: this.query,
      });
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${this.query}`
        );
      } catch {}
    },
  },
};
