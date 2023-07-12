<template>
  <div class="w-full mt-10 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 p-5">
    <div class="h-[100vh] overflow-y-hidden  overflow-x-hidden">
      <div 
        class="flex justify-between items-center pb-2 border-b-[1px] border-gray-800 "
      >
        <h2
          class="text-sm text-left font-normal  text-white"
        >
          RECOMMENDED READS
        </h2>
        <div class="flex justify-center gap-3 items-center">
          <span class=" w-3 h-3 rounded-full bg-yellow-300" />
          <span class=" w-3 h-3 rounded-full bg-red-800" />
          <span class=" w-3 h-3 rounded-full bg-orange-900" />
        </div>
      </div>
      <div class="flex">
        <p class="text-base leading-7 w-[40%] text-left mt-5 text-white">
          Our book recommendation order is based on most reads from several book
          genre's. We are at the moment not in patnership with any brand to
          promote their products for more audience. Use the suggest button to
          recommend books you think people should read.
        </p>
        <scroll container=" h-[100vh] px-10">
          <div 
            class="w-full flex justify-center items-center"
          >
            <div 
              v-if="bestSellers" 
              class="grid gap-2 grid-cols-3 grid-flow-dense"
            >
              <div 
                v-for="book in bestSellers" 
                :key="book" 
                class="mt-4"
              >
                <img
                  :src="book.book_image"
                  :alt="book.title"
                  class="w-[250px] h-[270px]"
                >
              </div>
            </div>
          </div>
          </scroll>
      </div>
    </div>
    <div>
      <router-link
        to="/book-recommendations"
        class="mt-5 rounded inline-flex items-center px-14 py-3 bg-[#CBD5E0]"
      >
        Click to view more
      </router-link>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import gsap from "gsap";
import { mapGetters } from "vuex";
import Scroll from './Scroll'
export default {
  name: "PopularBooks",
  components:{
    Scroll
  },
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
        return books.slice(0, Math.min(books.length, 12));
      }
    },
  },
  mounted() {
    this.$store.dispatch("fetchBestSellers");
  },
};
</script>
