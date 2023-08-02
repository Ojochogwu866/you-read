<template>
    <div class="w-10/12 mx-auto">
      <div v-if="books" class="sx:grid-cols-sx-column m-[2%] grid-cols-columns grid gap-[30px]">
        <div v-for="book in books.slice(0, 20)" :key="book.rank" class="relative w-full before:content-['...'] before:text-24px before:absolute before:flex before:w-full 
                before:h-full before:items-center before:justify-center before:z-0 before:text-[rgba(white, 0.1)] 
                after:content-[''] after:pb-[5%] md:after:pb-[7%] after:block">
          <img
            :src="book.book_image"
            :alt="book.title"
            class="h-full"
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
