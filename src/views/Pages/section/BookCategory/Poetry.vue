<template>
  <div class="w-10/12 mx-auto">
    <div class="w-full flex justify-center items-center">
      <div v-if="books" class="grid grid-cols-4 space-y-2 grid-flow-dense">
        <div v-for="book in books.slice(0, 10)" :key="book.rank">
          <img
            :src="book.book_image"
            :alt="book.title"
            class="w-[250px] h-[350px]"
          />
        </div>
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
