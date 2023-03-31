<template>
  <div class="w-11/12 mx-auto">
    <div class="h-[120vh] z-[1000] w-full py-8 overflow-x-hidden">
      <h2
        id="smooth-wrapper"
        class="text-7xl text-left ml-[10%] font-extrabold border-b-2 pb-4 border-[#7ec8e3]"
      >
        RECOMMENDED READS
      </h2>
      <p class="text-sm leading-7 w-[40%] ml-[20%] text-left mt-5">
        Our book recommendation order is based on most reads from several book
        genre's. We are at the moment not in patnership with any brand to
        promote their products for more audience.
      </p>
      <div class="w-full flex justify-center items-center">
        <div v-if="bestSellers" class="grid grid-cols-3 grid-flow-dense">
          <div class="mt-4" v-for="book in bestSellers" :key="book">
            <img
              :src="book.book_image"
              :alt="book.title"
              class="w-[300px] h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <button
        class="mt-5 rounded inline-flex items-center px-14 py-4 bg-[#CBD5E0]"
      >
        Click to view more
      </button>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { mapGetters } from "vuex";
export default {
  name: "Popular",
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
    return {};
  },
  computed: {
    ...mapGetters(["getBestSellers"]),
    bestSellers() {
      const books = this.getBestSellers.books;
      if (!books || !books.length) {
        return null;
      } else {
        return books.slice(0, Math.min(books.length, 6));
      }
    },
  },
  mounted() {
    this.$store.dispatch("fetchBestSellers");
  },
};
</script>
