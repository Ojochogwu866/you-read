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
        <div
          class="p-4 rounded-md gap-6 text-left bg-white w-5/6 min-h-card shadow-bx"
        >
          <div
            class="border-b-2 pb-1 border-boxColor flex items-center gap-8 text-sm"
          >
            Current Reading
            <div
              @click="modal1 = true"
              class="bg-boxbg border-none px-2 py-1 hover:bg-boxColor cursor-pointer hover:text-white"
            >
              Add new book
            </div>
            <Card v-bind:modal-1="modal1" @update:modal-1="modal1 = $event">
              <form
                @submit.prevent="createBook"
                class="flex flex-col w-auto gap-y-3 bg-white shadow-typeBox px-4 py-6 rounded-md"
              >
                <div class="">
                  Enter Book Details Below to keep track of your Adventure
                </div>
                <input
                  class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                  type="text"
                  placeholder="Book title e.g purple hibiscus"
                  v-model="args.bookTitle"
                />
                <input
                  class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                  type="text"
                  placeholder="Author e.g chimamanda adichie"
                  v-model="args.bookAuthor"
                />
                <input
                  class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                  type="text"
                  placeholder="Book Genre"
                  v-model="args.bookGenre"
                />
                <input
                  type="text"
                  placeholder="Total pages"
                  v-model="args.bookPages"
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
          <div class="">
            <div class="flex items-start justify-center">
              <div class="w-full text-sm grid grid-rows-5 gap-2 mt-2">
                <div class="text-sm">Book Title:</div>
                <div class="text-sm">Book Author:</div>
                <div class="text-sm">Book Genre:</div>
                <div class="text-sm">Book Pages:</div>
              </div>
              <div
                v-if="latestBook"
                class="w-full text-sm grid grid-rows-5 gap-2 mt-2"
              >
                <div class="text-sm">{{ latestBook.bookTitle }}</div>
                <div class="text-sm">{{ latestBook.bookAuthor }}</div>
                <div class="text-sm">{{ latestBook.bookGenre }}</div>
                <div class="text-sm">{{ latestBook.bookPages }}</div>
              </div>
            </div>

            <div
              v-if="latestBook"
              class="flex w-full gap-3 justify-center mt-3"
            >
              <button
                v-if="!latestBook.completed"
                @click="markAsCompleted(latestBook._id)"
                class="rounded px-4 py-2 bg-boxColor text-sm text-white"
              >
                Mark as Completed
              </button>
              <button
                v-else
                disabled
                class="rounded cursor-not-allowed px-4 py-2 bg-boxbg text-sm text-black"
              >
                Completed
              </button>
              <button class="rounded px-4 py-2 bg-boxColor text-sm text-white">
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
            Current Goal

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
                @submit.prevent="createGoals"
                class="flex flex-col w-auto gap-y-3 bg-white shadow-typeBox px-4 py-6 rounded-md"
              >
                <div class="">
                  Enter Book Details Below to keep track of your Adventure
                </div>
                <input
                  class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                  type="text"
                  placeholder="Total Year Read"
                  v-model="goalsArgs.totalRead"
                />
                <input
                  class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                  type="text"
                  placeholder="No of Monthly Read"
                  v-model="goalsArgs.monthlyRead"
                />
                <input
                  type="text"
                  placeholder="Pages to read per day"
                  v-model="goalsArgs.pagesPerDay"
                  class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                />
                <input
                  type="text"
                  v-model="goalsArgs.pagesPerWeek"
                  placeholder="Pages to read per week"
                  class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                />
                <div class="">
                  <label for="" class="text-xs"
                    >Select book goal interval</label
                  >
                  <select
                    v-model="goalsArgs.interval"
                    placeholder="Enter working Days"
                    class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                  >
                    <option :value="null">Select goal interval</option>
                    <option value="1">1 Month</option>
                    <option value="3">3 Month</option>
                    <option value="6">6 Month</option>
                    <option value="12">12 Month</option>
                  </select>
                </div>
                <button
                  class="rounded-sm px-4 py-2 font-medium bg-boxColor text-white text-sm outline-none hover:shadow-typeBox"
                  type="submit"
                >
                  Add Book
                </button>
              </form>
            </Card>
          </div>
          <div class="flex items-start justify-center">
            <div class="w-full text-sm grid grid-rows-5 gap-2 mt-2">
              <div class="text-sm">Year Total Read:</div>
              <div class="text-sm">Monthly Read:</div>
              <div class="text-sm">pages Per Day:</div>
              <div class="text-sm">Pages Per Week:</div>
              <div class="text-sm">Reading Interval:</div>
            </div>
            <div
              v-if="currentGoal"
              class="w-full text-sm grid grid-rows-5 gap-2 mt-2"
            >
              <div class="text-sm">{{ currentGoal.totalRead }}</div>
              <div class="text-sm">{{ currentGoal.monthlyRead }}</div>
              <div class="text-sm">{{ currentGoal.pagesPerDay }}</div>
              <div class="text-sm">{{ currentGoal.pagesPerWeek }}</div>
              <div class="text-sm">{{ currentGoal.timeInterval }}</div>
            </div>
          </div>
          <p class="text-xs mt-8">
            <span class="text-red-800">**</span>Note: You can only change your
            book reading goals after completion of current reading interval.
          </p>
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
      args: {
        bookAuthor: "",
        bookGenre: "",
        bookTitle: "",
        bookPages: "",
      },
      goalsArgs: {
        totalRead: "",
        pagesPerDay: "",
        pagesPerWeek: "",
        monthlyRead: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getUserGoals", "getUserBooks"]),
    latestBook() {
      const books = this.getUserBooks.books;
      if (!books || !books.length) {
        return null;
      }
      const sortedBooks = books.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return sortedBooks[0];
    },
    currentGoal() {
      const goals = this.getUserGoals.books;
      if (!goals || !goals.length) {
        return null;
      }
      const sortedBooks = goals.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return sortedBooks[0];
    },
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

    async createBook() {
      let res = await this.$store.dispatch("post", {
        endpoint: `/books/`,
        auth: true,
        payload: this.args,
      });
      if (res.status == 201) {
        this.$store.commit("set", {
          type: "userBooks",
          data: res,
        });
      }
    },
    
    async markAsCompleted(bookId) {
      let res = await this.$store.dispatch("put", {
        endpoint: `/books/${bookId}`,
        auth: true,
        payload: {
          completed: true,
        },
      });
      if (res.status == 201) {
        this.$store.commit("set", {
          type: "userBooks",
          data: res,
        });
      }
    },


    async createGoals() {
      let res = await this.$store.dispatch("post", {
        endpoint: `/book-goals/`,
        auth: true,
        payload: this.goalsArgs,
      });
      if (res.status == 201) {
      }
    },

    async bookGoal() {
      let res = await this.$store.dispatch("get", {
        endpoint: `/book-goals/`,
        auth: true,
      });
      if (!!res) {
        this.$store.commit("set", {
          type: "userGoals",
          data: res,
        });
      }
    },
  },
};
</script>
