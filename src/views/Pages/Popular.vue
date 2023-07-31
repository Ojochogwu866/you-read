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
      <div class="flex sx:flex-col">
        <p class="text-[14px] sm:text-base leading-7 w-[40%] sx:w-full text-left mt-5 text-white">
          Our book recommendation order is based on most reads from several book
          genre's. We are at the moment not in patnership with any brand to
          promote their products for more audience. Use the suggest button to
          recommend books you think people should read.
        </p>
        <el-scrollbar height="100vh">
          <div class=" w-full grid grid-cols-3 gap-[1px] px-5 items-center" v-if="bestSellers">
          <el-skeleton 
            :count="6"
            class=""
            :loading="loading" 
            animated
          >
      <template #template>
        <el-skeleton-item variant="image" style="width: 240px;
          height: 240px; background: #00394e43" />
        <div style="padding: 8px">
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
          <div 
            v-else
            class="w-full flex justify-center px-5 items-center"
          >
            <div 
              v-if="!bestSellers" 
              class="grid gap-2 sm:grid-cols-3
              grid-cols-2 grid-flow-dense"
            >
              <div 
                v-for="book in bestSellers" 
                :key="book" 
                class="mt-4"
              >
                <img
                  :src="book.book_image"
                  :alt="book.title"
                  class="w-[200px] h-[200px] sm:w-[250px] sm:h-[270px]"
                >
              </div>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>
    <div>
      <router-link
        to="/book-recommendations"
        class="mt-5 next-button rounded inline-flex text-sm
        items-center px-6 py-2 sm:px-14 sm:py-3 text-white"
      >
        Click to view more
      </router-link>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { mapGetters } from "vuex";
import { ElScrollbar } from 'element-plus'
export default {
  name: "PopularBooks",
  components:{
    ElScrollbar
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
    const loading = ref(true);
  },
};
</script>
<style scoped>
.next-button {
  transition: all 0.8s;
  position: relative;
}
.next-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255,255,255,0.1);
  transition: all 0.3s;
}
.net-button:hover::before {
  opacity: 0 ;
  transform: scale(0.5,0.5);
}
.next-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(255,255,255,0.5);
  transform: scale(1.2,1.2);
}
.next-button:hover::after {
  opacity: 1;
  transform: scale(1,1);
}
</style>