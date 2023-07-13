<template>
  <div class=" w-10/12 flex flex-col justify-center mx-auto items-center text-parentText">
    <Nav />
    <div class="">
      <SubNav
        class="w-full mx-auto flex justify-center items-center"
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
  created() {
    this.fetchBooksByGenre(this.routes[0]);
  },
  methods: {
  fetchBooksByGenre(genre) {
    this.$store.dispatch("fetchBooks", genre);
  },
 },
};
</script>
