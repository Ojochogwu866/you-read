<template>
  <div class="bg-profile text-parentText h-screen">
    <Nav />
    <SubNav
      class="w-11/12 m-auto px-4 flex justify-center items-center"
      :routes="routes"
    />
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
        "Fiction",
        "Romance",
        "Narrative",
        "Science-Fiction",
        "Non-Fiction",
        "Thriller",
        "Fantasy",
        "Mystery",
        "Poetry",
      ],
    };
  },
};
</script>
