<template>
  <div
    class="w-11/12 p-3 rounded-md gap-3 border border-gray-400 mt-8 flex justify-start items-start flex-col text-left"
  >
    <div class="text-sm font-semibold">Read History</div>

    <div class="grid grid-cols-5 w-full text-sm">
      <div class="">Book Title</div>
      <div class="">Book Author</div>
      <div class="">Book Genre</div>
      <div class="">Book Pages</div>
      <div class="">Status</div>
    </div>
    <div v-if="booksData.length">
      <div
        v-for="books in booksData"
        :key="books.id"
        class="grid grid-cols-5 w-full text-sm"
      >
        <div class="">{{ books.bookTitle }}</div>
        <div class="">{{ books.bookAuthor }}</div>
        <div class="">{{ books.bookGenre }}</div>
        <div class="">{{ books.bookPages }}</div>
        <div class="">Status</div>
      </div>
    </div>
    <div v-else class="flex justify-center items-center text-sm">
      <p>You have no book in your read history. Add books to get started.</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isDrawerOpen: false,
    };
  },
  computed: {
    ...mapGetters(["getUserBooks"]),
    booksData() {
      return this.getUserBooks.books;
    },
  },
  methods: {},
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
