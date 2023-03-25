<template>
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

      <div v-if="latestBook" class="flex w-full gap-3 justify-center mt-3">
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
        <button
          @click="fetchPlaylist"
          class="rounded px-4 py-2 bg-boxColor text-sm text-white"
        >
          Get Music Playlist
        </button>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import Card from "./Card.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    History,
    Card,
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
  },
  async mounted() {},
  methods: {
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
  },
};
</script>
