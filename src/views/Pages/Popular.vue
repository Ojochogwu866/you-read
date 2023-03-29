<template>
  <div class="h-[120vh] w-full py-8 overflow-x-hidden">
    <h2
      id="smooth-wrapper"
      class="text-7xl text-left ml-[10%] font-extrabold border-b-2 pb-4 border-[#7ec8e3]"
    >
      RECOMMENDED READS
    </h2>
    <p class="text-sm leading-7 w-[40%] ml-[20%] text-left mt-5">
      Our book recommendation order is based on most reads from each genre. We
      are at the moment not in patnership with any brand to promote their
      products for more audience.
    </p>
    <div v-if="bestSellers" class="">
      <div class="mt-4" v-for="book in bestSellers" :key="book">
        <img :src="book.book_image" :alt="book.title" />
        {{ book.title }}
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "HomeView",
  setup() {
    onMounted(() => {
      gsap.to("#smooth-wrapper", {
        scrollTrigger: "#smooth-wrapper",
        x: 100,
        pin: true,
        duration: 1,
      });
    });
  },
  data() {
    return {
      bestSellers: [],
    };
  },
  computed: {
    ...mapGetters(["getBestSellers"]),
    bestSellers() {
      const books = this.getBestSellers.books;
      if (!books || !books.length) {
        return null;
      } else {
        return books.slice(0, Math.min(books.length, 3));
      }
    },
  },
  methods: {
    ...mapActions(["fetchBestSellers"]),
  },
  mounted() {
    this.fetchBestSellers();
  },
};
</script>
