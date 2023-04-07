<template>
  <div class="bg-profile text-parentText h-screen">
    <Nav />
    <div>
      <SubNav
        class="w-11/12 m-auto px-4 flex justify-center items-center"
        :routes="routes"
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
        "love",
        "narrative",
        "science-fiction",
        "non-fiction",
        "thriller",
        "fantasy",
        "mystery",
        "poetry",
        "others",
      ],
    };
  },
  methods: {
    async fetchBooksByGenre(genre) {
      await this.$store.dispatch("fetchBooks", genre);
    },
  },
};
</script>
