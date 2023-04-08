<template>
  <div class="bg-profile text-parentText h-screen">
    <Nav />
    <div>
      <SubNav
        class="w-11/12 m-auto px-4 flex justify-center items-center"
        :routes="routes"
        :titles="titles"
        @selected-genre="fetchBooksByGenre"
      />
      <router-view class="pb-10 w-full m-auto sx:mt-10" />
    </div>
    <Footer class="absolute bottom-0" />
  </div>
</template>
<script>
import Nav from "@/components/Layouts/Nav.vue";
import Footer from "@/components/Layouts/footer.vue";
import SubNav from "./Subnavigation.vue";
export default {
  name: "Recommendations",
  components: {
    Nav,
    SubNav,
    Footer,
  },
  data() {
    return {
      routes: [
        "hardcover-fiction",
        "culture",
        "e-book-fiction",
        "science-fiction",
        "e-book-nonfiction",
        "crime-and-punishment",
        "fantasy",
        "mystery",
        "poetry",
        "others",
      ],
      titles: [
        "Fiction",
        "Culture",
        "E-Book fiction",
        "Science Fiction",
        "Non-Fiction",
        "Crime",
        "Fantasy",
        "Mystery",
        "Poetry",
        "Others",
      ],
    };
  },
  methods: {
    async fetchBooksByGenre(genre) {
      await this.$store.dispatch("fetchBooks", genre);
    },
  },
  mounted() {
    // Fetch books for the first genre in the routes array
    this.fetchBooksByGenre(this.routes[0]);
  },
};
</script>
