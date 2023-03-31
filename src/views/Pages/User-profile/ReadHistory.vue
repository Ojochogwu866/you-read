<template>
  <div
    class="w-full p-3 rounded-md gap-3 border border-gray-400 mt-8 flex justify-start items-start flex-col text-left"
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
        class="grid grid-cols-6 mt-3 w-full text-sm"
      >
        <div class="px-2">{{ books.bookTitle }}</div>
        <div class="px-2">{{ books.bookAuthor }}</div>
        <div class="px-2">{{ books.bookGenre }}</div>
        <div class="px-2">{{ books.bookPages }}</div>
        <div class="px-1">
          <span class="cursor-pointer" @click="displayModal = true"
            ><button @click="editBooks(books._id)">Edit</button></span
          >
          /
          <span class="cursor-pointer" @click="removeCurrentBook(books._id)"
            >Delete</span
          >
        </div>
        <div class="px-1">
          <span v-if="books.completed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 443.57 607.17"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <circle cx="296.07" cy="186.91" r="68.31" fill="#00f24c" />
                <path
                  d="m277.9,388.33c3.53,6.91,7.06,13.83,10.59,20.74,1.01,1.99,3.98,1.36,4.57-.6,4.63-15.44,13.23-29.51,24.82-40.7,2.32-2.24-1.22-5.77-3.54-3.54-12.2,11.78-21.23,26.67-26.11,42.91l4.57-.6c-3.53-6.91-7.06-13.83-10.59-20.74-1.46-2.87-5.78-.34-4.32,2.52h0Z"
                  fill="#fff"
                />
              </g>
              <g></g>
            </svg>
          </span>
          <span v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 443.57 607.17"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <circle cx="296.07" cy="186.91" r="68.31" fill="#870000" />
                <path
                  d="m277.9,388.33c3.53,6.91,7.06,13.83,10.59,20.74,1.01,1.99,3.98,1.36,4.57-.6,4.63-15.44,13.23-29.51,24.82-40.7,2.32-2.24-1.22-5.77-3.54-3.54-12.2,11.78-21.23,26.67-26.11,42.91l4.57-.6c-3.53-6.91-7.06-13.83-10.59-20.74-1.46-2.87-5.78-.34-4.32,2.52h0Z"
                  fill="#fff"
                />
              </g>
              <g></g>
            </svg>
          </span>
        </div>
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
        @submit.prevent="updateBook"
        class="flex flex-col w-auto gap-y-3 bg-white shadow-typeBox px-4 py-6 rounded-md"
      >
        <div class="">
          Enter Book Details Below to keep track of your Adventure
        </div>
        <input
          v-model="bookTitle"
          class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
          type="text"
          placeholder="Book title e.g purple hibiscus"
        />
        <input
          v-model="bookAuthor"
          class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
          type="text"
          placeholder="Author e.g chimamanda adichie"
        />
        <input
          class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
          type="text"
          placeholder="Book Genre"
          v-model="bookGenre"
        />
        <input
          type="text"
          v-model="bookPages"
          placeholder="Total pages"
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
import moment from "moment";
export default {
    name: "Read History",
  components: {
    Card,
  },
  data() {
    return {
      isDrawerOpen: false,
      modal1: false,
      displayModal: false,
      moment,
    };
  },
  computed: {
    ...mapGetters(["getUserBooks", "getBookData"]),
    booksData() {
      return this.getUserBooks.books;
    },
    bookTitle: {
      get() {
        return this.getBookData.book.bookTitle;
      },
      set(value) {
        this.$store.commit("set", {
          type: "bookData",
          data: {
            ...this.getBookData,
            book: { ...this.getBookData.book, bookTitle: value },
          },
        });
      },
    },
    bookAuthor: {
      get() {
        return this.getBookData.book.bookAuthor;
      },
      set(value) {
        this.$store.commit("set", {
          type: "bookData",
          data: {
            ...this.getBookData,
            book: { ...this.getBookData.book, bookAuthor: value },
          },
        });
      },
    },
    bookGenre: {
      get() {
        return this.getBookData.book.bookGenre;
      },
      set(value) {
        this.$store.commit("set", {
          type: "bookData",
          data: {
            ...this.getBookData,
            book: { ...this.getBookData.book, bookGenre: value },
          },
        });
      },
    },
    bookPages: {
      get() {
        return this.getBookData.book.bookPages;
      },
      set(value) {
        this.$store.commit("set", {
          type: "bookData",
          data: {
            ...this.getBookData,
            book: { ...this.getBookData.book, bookPages: value },
          },
        });
      },
    },
  },
  methods: {
    async removeCurrentBook(x) {
      let res = await this.$store.dispatch("remove", {
        endpoint: `/books/${x}/`,
      });
      if (res.status == 201) {
      }
    },
    async editBooks(booksId) {
      let res = await this.$store.dispatch("get", {
        endpoint: `/books/${booksId}`,
        auth: true,
      });
      if (!!res) {
        this.$store.commit("set", {
          type: "bookData",
          data: res,
        });
      }
    },
    async updateBook() {
      let bookId = this.getBookData.book._id;
      let res = await this.$store.dispatch("put", {
        endpoint: `/books/${bookId}/`,
        auth: true,
        payload: this.getBookData.book,
      });
      if (res.status == 200) {
        this.$store.commit("set", {
          type: "userBook",
          data: res,
        });
      }
    },
  },
};
</script>
