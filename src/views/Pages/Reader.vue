<template>
  <div>
    <Nav />
    <div class="w-full flex flex-row bg-profile justify-start items-start">
      <div
        class="mt-6 w-3/5 flex flex-col justify-center items-center m-auto pb-5"
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
        <div
          class="p-4 rounded-md gap-6 text-left bg-white w-5/6 min-h-card shadow-bx"
        >
          <div
            class="border-b-2 pb-1 border-boxColor flex items-center gap-8 text-sm"
          >
            Add Book To Read
            <div
              @click="modal1 = true"
              class="bg-boxbg border-none px-2 py-1 hover:bg-boxColor cursor-pointer hover:text-white"
            >
              Set Plan
            </div>
            <Card v-bind:modal-1="modal1" @update:modal-1="modal1 = $event">
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
                  class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                  type="text"
                  placeholder="Book Genre"
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
            </Card>
          </div>
          <div class="flex flex-col gap-y-2 items-start justify-center">
            <div class="text-sm mt-2">Book Title:</div>
            <div class="text-sm">Book Author:</div>
            <div class="text-sm">Book Genre:</div>
            <div class="text-sm">Book Pages:</div>
            <div class="text-sm">Pages Left:</div>
            <div class="text-sm">Days Left:</div>

            <div class="flex w-full gap-3 justify-center mt-3">
              <button
                class="rounded px-4 py-2 bg-boxColor text-sm font-bold text-white"
              >
                Completed
              </button>
              <button
                class="rounded px-4 py-2 bg-boxColor text-sm font-bold text-white"
              >
                Get Playlist
              </button>
            </div>
          </div>
          <div></div>
        </div>
        <div
          class="p-4 rounded-md text-left bg-white w-5/6 min-h-fit shadow-bx"
        >
          <div
            class="border-b-2 pb-1 border-boxColor flex items-center gap-8 text-sm"
          >
            Set Book Goals
            <div
              @click="displayModal = true"
              class="bg-boxbg border-none px-2 py-1 hover:bg-boxColor cursor-pointer hover:text-white"
            >
              Set Goals
            </div>
            <Card
              v-bind:display-modal="displayModal"
              @update:display-modal="displayModal = $event"
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
                  placeholder="Total Books for the year"
                />
                <input
                  class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                  type="text"
                  placeholder="Completed"
                />
                <input
                  type="text"
                  placeholder="Pages per week"
                  class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                />
                <input
                  type=""
                  placeholder="Chapters per month"
                  class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                />
                <button
                  class="rounded-sm px-4 py-2 font-medium bg-boxColor text-white text-sm outline-none hover:shadow-typeBox"
                  type="submit"
                >
                  Add Book
                </button>
              </form>
            </Card>
          </div>
          <div class="flex flex-col gap-y-2 items-start justify-center">
            <div class="text-sm mt-5">Year total read</div>
            <div class="text-sm">Completed</div>
            <div class="text-sm">Pages per Week</div>
            <div class="text-sm">Set Goal</div>
          </div>

          <div>
            <div class=""></div>
          </div>
        </div>
        <div
          class="p-4 rounded-md gap-6 text-left bg-white w-5/6 min-h-fit shadow-bx"
        >
          <div
            class="border-b-2 pb-1 border-boxColor flex items-center gap-8 text-sm"
          >
            Join/Create Club
            <div
              class="bg-boxbg border-none px-2 py-1 hover:bg-boxColor cursor-pointer hover:text-white"
            >
              Create
            </div>
          </div>
          <div class="gap-y-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./Card.vue";
import History from "./History.vue";
import Nav from "./Nav.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    History,
    Card,
    Nav,
  },
  data() {
    return {
      query: "",
      displayModal: false,
      modal1: false,
    };
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
