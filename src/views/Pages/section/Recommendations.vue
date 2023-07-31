<template>
  <div class=" md:w-10/12 w-11/12 sx:min-h-screen overflow-x-hidden flex 
  flex-col justify-center mx-auto items-center text-parentText">
    <Nav />
    <div class="w-full flex justify-center items-center mt-20">
      <el-scrollbar class="flex">
        <div class="flex">
          <SubNav
            class=" pb-3"
            :routes="routes"
            :titles="titles"
            @selected-genre="fetchBooksByGenre"
          />
        </div>
      </el-scrollbar>
    </div>
    <router-view class="pb-10 w-full m-auto mt-10" />
    <Footer />
  </div>
</template>
<script>
import Nav from "@/components/Layouts/Nav.vue";
import Footer from "@/components/Layouts/footer.vue";
import SubNav from "./Subnavigation.vue";
import { ElScrollbar } from 'element-plus'
export default {
  name: "RecommendationsTab",
  components: {
    Nav,
    SubNav,
    Footer,
    ElScrollbar
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
