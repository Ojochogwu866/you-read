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
              @click="displayModal = !displayModal"
              class="bg-boxbg border-none px-2 py-1 hover:bg-boxColor cursor-pointer hover:text-white"
            >
              Book Details
            </div>
            <div
              v-if="displayModal"
              class="bg-black absolute flex justify-center bottom-0 left-0 items-center bg-opacity-10 w-full h-full"
            >
              <form
                class="flex flex-col w-auto gap-y-3 bg-white shadow-typeBox px-4 py-6 rounded-md"
              >
                <div class="">
                  Enter Book Details Below to keep track of your Adventure
                </div>
                <input
                  class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                  type="text"
                  placeholder="Book title e.g purple hibiscus"
                />
                <input
                  class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                  type="text"
                  placeholder="Author e.g chimamanda adichie"
                />
                <input
                  type="text"
                  placeholder="total pages"
                  class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                />
                <input
                  type=""
                  placeholder="pages per day"
                  class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                />
                <button
                  class="rounded-sm px-4 py-2 font-medium bg-boxColor text-white text-sm outline-none hover:shadow-typeBox"
                  type="submit"
                >
                  Add Book
                </button>
              </form>
            </div>
          </div>
          <div class="gap-y-3">
            <div class="text-sm font-bold">Current Read</div>
            <div class="text-sm">Book Title:</div>
            <div class="text-sm">Total Pages:</div>
            <div class="mt-1 gap-y-3">
              <div class="font-semibold text-sm">SCHEDULE</div>
              <div class="text-sm">Total time daily:</div>
              <div class="text-sm">Pages to Cover:</div>
              <div class="text-sm">Days Left:</div>
              <div class="text-sm">24 Days To Cover</div>
            </div>
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
          <div>
            <div class=""></div>
          </div>
        </div>
      </div>
    </div>
    <History />
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
import History from "./History.vue";
export default {
  components: {
    History,
  },
  data() {
    return {
      query: "",
      displayModal: false,
    };
  },
  computed: {
    ...mapGetters(["searchBookResults", "query"]),
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
};
</script>
