<template>
  <div class="w-full flex flex-col justify-start items-start">
    <div class="p-5">
      <div class="text-sm font-semibold">Hi, Olajide, Welcome Back</div>
    </div>
    <div class="flex flex-col justify-center w-full items-center">
      <div class="mt-6 w-3/5 m-auto pb-5">
        <div class="text-sm font-medium">
          Search Book by title, author and other keywords
        </div>
        <form @submit.prevent="search">
          <input
            v-model="query"
            @input="clearOutput"
            @keyup="getSuggestions"
            class="w-4/5 m-auto outline-none text-sm bg-white rounded-md border border-gray-400 p-2 mt-2"
            placeholder="e.g: Honey & Spice, Bolu Babalola"
          />
          <button
            class="rounded-sm ml-4 px-4 py-2 font-medium bg-boxColor text-white text-sm outline-none hover:shadow-typeBox"
            type="submit"
          >
            Submit
          </button>
        </form>
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
      </div>
      <div class="flex gap-6 mt-5 justify-center w-full">
        <div class="p-3 rounded-md gap-3 border text-left border-gray-400 w-90">
          <div
            class="border-b-2 pb-1 border-boxColor flex items-center gap-8 text-sm"
          >
            Set Reading Plan
            <div
              class="bg-boxbg border-none px-2 py-1 hover:bg-boxColor cursor-pointer hover:text-white"
            >
              Book Details
            </div>
          </div>
          <div class="text-sm mt-2">Book Title:</div>
          <div class="text-sm">Total Pages:</div>
          <div class="mt-2">
            <div class="font-semibold leading-5 text-sm">SCHEDULE</div>
            <div class="text-sm leading-6">Total time daily:</div>
            <div class="text-sm leading-6">Pages to Cover:</div>
            <div class="text-sm leading-6">24 Days To Cover</div>
          </div>
          <div></div>
        </div>
        <div class="p-3 rounded-md gap-3 border text-left border-gray-400 w-90">
          <div class="border-b-2 pb-1 border-boxColor text-sm">
            Join/Create Club
          </div>
          <div></div>
        </div>
        <div class="p-3 rounded-md gap-3 border text-left border-gray-400 w-90">
          <div class="border-b-2 pb-1 border-boxColor text-sm">
            Set Book Goals
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <History />
    <!-- <div
      class="w-full absolute h-full bg-black bg-opacity-75 overflow-y-scroll"
    >
      <ul
        v-for="result in searchBookResults"
        :key="result.id"
        class="list-none w-1/2 m-auto bg-opacity-100 text-left"
      >
        <li
          class="bg-black bg-opacity-90 text-white text-sm font-normal border-b px-2 py-2"
        >
          {{ result.volumeInfo.title }}
        </li>
      </ul>
    </div> -->
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import History from "./History.vue";
export default {
  components: {
    History,
  },
  data() {
    return {
      query: "",
      searchBookResults: [],
    };
  },
  methods: {
    ...mapActions([
      "searchBooks",
      "clearSearchOutput",
      "fetchSearchSuggestions",
    ]),
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
  computed: {
    ...mapGetters(["searchBookResults", "query"]),
  },
};
</script>
