<template>
  <div class="w-full mt-10 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 p-5">
    <div class="h-[100vh] overflow-y-hidden">
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
      <div class="flex flex-col">
        <p class="text-[14px]  w-[70%] sx:w-full text-left mt-5 text-white">
          Our book recommendation order is based on most reads from several book
          genre's. We are at the moment not in patnership with any brand to
          promote their products for more audience. Use the suggest button to
          recommend books you think people should read.
        </p>
        
        <el-scrollbar height="90vh" >
          <TransitionGroup name="list" tag="ul">
          <div 
            class="grid-cols-sx-column m-[2%] sm:grid-cols-columns grid gap-[10px] md:gap-[30px]"
          >
            <div 
              v-for="book in bestSellers" 
              :key="book"
              class="relative bg-[#2b2a34] rounded-[4px] overflow-hidden animate-mouseOut hover:animate-mouseOver"
            >
              <div 
                v-if="book.book_image" 
                class="relative w-full before:content-['...'] before:text-24px before:absolute before:flex before:w-full 
                before:h-full before:items-center before:justify-center before:z-0 before:text-[rgba(white, 0.1)] 
                after:content-[''] after:pb-[5%] md:after:pb-[7%] after:block"
              >
                <img
                  :src="book.book_image"
                  :alt="book.title"
                  class="cursor-pointer top-0 left-0 h-[250px] md:h-[300px] w-full z-10 opacity-0 animate-imageFadeIn delay-[0.5s]"
                  v-on:load="isLoaded()" v-bind:class="{ active: isActive }"
                >
              </div>
              <div 
                v-else 
                class="relative w-full image"
              >
        <el-skeleton style="width: 250px; height: 270px;" :count="8" :loading="loading" animated>
          <template #template>
        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <div style="padding: 14px">
          <el-skeleton-item variant="h3" style="width: 50%" />
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
            </div>
          </div>
          </TransitionGroup>
        </el-scrollbar>
      </div>
    </div>
    <div>
      <router-link
        to="/book-recommendations"
        class="mt-5 next-button transition-all relative before:content-[''] 
        before:absolute before:top-0 before:left-0 rounded inline-flex text-sm bfore:w-full
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
    return {
      isActive: false
    };
  },
  computed: {
    ...mapGetters(["getBestSellers"]),
    bestSellers() {
      const books = this.getBestSellers.books;
      if (!books || !books.length) {
        return null;
      } else {
        return books.slice(0, Math.min(books.length, 20));
      }
    },
  },
  mounted() {
    this.$store.dispatch("fetchBestSellers");
    const loading = ref(true);
  },
  methods:{
    isLoaded: function() {
            this.isActive = true;
        },
  }
};
</script>
<style lang="scss" scoped>
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
.next-button:hover::before {
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
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>