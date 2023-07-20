<template>
  <div class="w-10/12 mx-auto">
    <div class="w-full flex justify-center items-center">
      <div v-if="books" class="grid sm:grid-cols-4 grid-cols-2 sm:gap-3 gap-2 space-y-2 grid-flow-dense">
        <div v-for="book in books.slice(0, 10)" :key="book.rank">
          <img
            :src="book.book_image"
            :alt="book.title"
            class="w-[200px] h-[200px] sm:w-[250px] sm:h-[350px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    routes: {
      type: String,
      required: true,
    },
  },
  computed: {
    books() {
      return this.$store.getters.getBooksByGenre(this.genre);
    },
  },
  created() {
    this.$store.dispatch("fetchBooks", this.routes);
  },
};
</script>
