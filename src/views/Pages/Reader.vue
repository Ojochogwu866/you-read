<template>
  <div>
    <Nav />
    <div class="w-full flex flex-row bg-profile justify-start items-start">
      <div
        class="mt-6 w-10/12 flex flex-col justify-center items-center m-auto pb-5"
      >
        <div class="flex flex-col w-11/12">
          <div class="text-sm font-medium">
            Search Book by title, author and other keywords
          </div>
          <form
            @submit.prevent="search"
            class="flex justify-center items-center mt-4"
          >
            <input
              v-model="query"
              @input="clearOutput"
              @keyup="getSuggestions"
              class="w-full outline-none text-sm bg-white rounded-md border border-gray-400 p-2"
              placeholder="e.g: Honey & Spice, Bolu Babalola"
            />
            <button
              class="rounded-sm ml-4 px-4 py-2 font-medium bg-boxColor text-white text-sm outline-none hover:shadow-typeBox"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div class="">
          <ul
            v-for="result in searchBookResults"
            :key="result.id"
            class="list-none shadow-reader w-full m-auto text-left z-50"
          >
            <li
              class="bg-white cursor-pointer text-black text-sm font-normal border-b px-2 py-2"
            >
              {{ result.volumeInfo.title }}
            </li>
          </ul>
        </div>
        <History />
      </div>
      <div
        class="flex overflow-y-scroll flex-col gap-6 mt-5 justify-center items-center w-2/5"
      >
        <CurrentReading />
        <GoalHistory />
        <div
          class="p-4 rounded-md gap-6 text-left bg-white w-5/6 min-h-fit shadow-bx"
        >
          <div
            class="border-b-2 pb-1 border-boxColor flex items-center gap-8 text-sm"
          >
            See Book Stats
          </div>
          <div class="flex items-start justify-center">
            <div class="w-full text-sm grid grid-rows-3 gap-2 mt-2">
              <div class="text-sm">Books Completed:</div>
              <div class="text-sm">Total Pages Read:</div>
              <div class="text-sm">Total Time Spent:</div>
            </div>
            <div class="w-full text-sm grid grid-rows-5 gap-2 mt-2">
              <div class="text-sm">30</div>
              <div class="text-sm">30</div>
              <div class="text-sm">30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./Card.vue";
import History from "./History.vue";
import Nav from "./Nav.vue";
import CurrentReading from "./CurrentRead.vue";
import GoalHistory from "./currentGoal.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    History,
    CurrentReading,
    Card,
    Nav,
    GoalHistory,
  },
  data() {
    return {
      query: "",
      displayModal: false,
      modal1: false,
    };
  },
  computed: {
    ...mapGetters(["getUserGoals", "getUserBooks"]),
  },
  async mounted() {
    await this.bookGoal();
  },
  methods: {
    search() {
      this.searchBooks(this.query);
    },

    clearOutput() {
      if (!this.query) {
        this.clearSearchOutput();
      }
    },

    async getSuggestions() {
      if (!this.query) {
        this.fetchSearchSuggestions([]);
        return;
      }
      try {
        const searchBookResults = await this.fetchSearchSuggestions(this.query);
        this.fetchSearchSuggestions(this.searchBookResults);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
