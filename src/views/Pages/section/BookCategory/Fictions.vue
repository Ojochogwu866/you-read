<template>
    <div class="w-10/12 mx-auto">
      <div v-if="books" class="sx:grid-cols-sx-column m-[2%] grid-cols-columns grid gap-[30px]">
        <div v-for="book in books.slice(0, 20)" :key="book.rank" class="section-card">
          <img
            :src="book.book_image"
            :alt="book.title"
          />
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    genre: {
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
    this.$store.dispatch("fetchBooks", this.genre);
  },
};
</script>
