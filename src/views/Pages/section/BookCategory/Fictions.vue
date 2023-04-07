<template>
  <div>
    <h2>{{ genre }}</h2>
    <ul>
      <li v-for="book in books" :key="book.rank">
        {{ book.rank }}. {{ book.title }}
      </li>
    </ul>
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
