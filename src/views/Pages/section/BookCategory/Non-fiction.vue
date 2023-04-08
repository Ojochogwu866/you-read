<template>
  <div>
    <div class="" v-for="book in books" :key="book.rank">
      <img
        :src="book.book_image"
        :alt="book.title"
        class="w-[300px] h-[400px]"
      />
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
    this.routes.forEach((genre) => {
      this.fetchBooksByGenre(genre);
    });
  },
};
</script>
