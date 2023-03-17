<template>
  <div
    class="w-11/12 p-3 rounded-md gap-3 border border-gray-400 mt-8 flex justify-start items-start flex-col text-left"
  >
    <div class="text-sm font-semibold">Read History</div>

    <div class="grid grid-cols-6 w-full text-sm">
      <div class="px-2 py-1 bg-[#ffcdef56] rounded-md h-fit w-fit">
        Book Title
      </div>
      <div class="px-2 py-1 bg-[#ffcdef56] rounded-md h-fit w-fit">
        Book Author
      </div>
      <div class="px-2 py-1 bg-[#ffcdef56] rounded-md h-fit w-fit">
        Book Genre
      </div>
      <div class="px-2 py-1 bg-[#ffcdef56] rounded-md h-fit w-fit">
        Book Pages
      </div>
      <div class="px-1 py-1 bg-[#ffcdef56] rounded-md h-fit w-fit">Props</div>
      <div class="px-1 py-1 bg-[#ffcdef56] rounded-md h-fit w-fit">Status</div>
    </div>
    <div v-if="booksData" class="w-full">
      <div
        v-for="books in booksData"
        :key="books.id"
        class="grid grid-cols-6 gap-y-2 w-full text-sm"
      >
        <div class="px-2">{{ books.bookTitle }}</div>
        <div class="px-2">{{ books.bookAuthor }}</div>
        <div class="px-2">{{ books.bookGenre }}</div>
        <div class="px-2">{{ books.bookPages }}</div>
        <div class="">
          <span class="cursor-pointer" @click="displayModal = true">Edit</span>
          /
          <span class="cursor-pointer" @click="removeCurrentBook(books._id)"
            >Delete</span
          >
        </div>
        <div class="px-1">Status</div>
      </div>
    </div>
    <div v-else class="flex justify-center items-center text-sm">
      <p>You have no book in your read history. Add books to get started.</p>
    </div>
    <Card
      v-bind:display-modal="displayModal"
      @update:display-modal="displayModal = $event"
    >
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
        <button
          class="rounded-sm px-4 py-2 font-medium bg-boxColor text-white text-sm outline-none hover:shadow-typeBox"
          type="submit"
        >
          Add Book
        </button>
      </form>
    </Card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      isDrawerOpen: false,
      displayModal: false,
    };
  },
  computed: {
    ...mapGetters(["getUserBooks"]),
    booksData() {
      return this.getUserBooks.books;
    },
  },
  async mounted() {
    await this.getBook();
  },
  methods: {
    async removeCurrentBook(x) {
      let res = await this.$store.dispatch("remove", {
        endpoint: `/books/${x}/`,
      });
      if (res.status == 201) {
      }
    },
    async getBook() {
      let res = await this.$store.dispatch("get", {
        endpoint: `/books/`,
        auth: true,
      });
      if (!!res) {
        this.$store.commit("set", {
          type: "userBooks",
          data: res,
        });
      }
    },
  },
  async created() {
    let res = await this.$store.dispatch("get", {
      endpoint: `/books/`,
      auth: true,
    });
    if (!!res) {
      this.$store.commit("set", {
        type: "userBooks",
        data: res,
      });
    }
  },
};
</script>
