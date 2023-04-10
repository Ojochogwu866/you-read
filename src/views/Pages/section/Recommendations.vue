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
    </div>
    <router-view class="pb-10 w-full m-auto mt-10" />
    <Footer />
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
        "science",
        "e-book-nonfiction",
        "crime-and-punishment",
        "religion-spirituality-and-faith",
        "series-books",
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
        "Faith",
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
    this.fetchBooksByGenre(this.routes[0]);
  },
};
</script>
