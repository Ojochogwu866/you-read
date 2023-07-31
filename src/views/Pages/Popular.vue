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
      <div class="flex flex-col">
        <p class="text-[14px] leading-7 w-[70%] sx:w-full text-left mt-5 text-white">
          Our book recommendation order is based on most reads from several book
          genre's. We are at the moment not in patnership with any brand to
          promote their products for more audience. Use the suggest button to
          recommend books you think people should read.
        </p>
        <el-scrollbar height="80vh">
          <TransitionGroup name="list" tag="ul">
          <div 
            class=" main"
          >
            <div 
              v-for="book in bestSellers" 
              :key="book"
              class="card"
            >
              <div 
                v-if="book.book_image" 
                class="relative w-full image"
              >
                <img
                  :src="book.book_image"
                  :alt="book.title"
                  class="w-[200px] h-[270px] sm:w-[250px] sm:h-[270px]"
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
        return books.slice(0, Math.min(books.length, 20));
      }
    },
  },
  mounted() {
    this.$store.dispatch("fetchBestSellers");
    const loading = ref(true);
  },
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
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.main{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  grid-gap: 10px;
  counter-reset: rank;
  margin: 2%;
  .card{
        counter-increment: rank;
        position: relative;
        background: #2b2a34;
        box-shadow: 0 1px 5px rgba(0,0,0,0.2);
        border-radius: 4px;
        overflow: hidden;
        animation: mouseOut 0.3s ease-in;
        .image{
          &:after {
                content: '';
                display: block;
                padding-bottom: 10%;
            }
            &:before {
                content: '•••';
                font-size: 24px;
                position: absolute;
                display: flex;
                width: 100%;
                height: 100%;
                align-items: center;
                justify-content: center;
                color: rgba(white, 0.1);
                z-index: 0;
            }
            img{
              &.active {
                    animation: imageFadeIn 0.5s ease-in forwards;
                    animation-delay: 0.5s;
                }
            }
          }
        }
        .card:hover {
        animation: mouseOver 0.3s ease-in forwards;
    }
}
@keyframes mouseOver {
    0% {
        top: 0;
    }
    100% {
        top: -5px;
    }
}

@keyframes mouseOut {
    0% {
        top: -5px;
    }
    100% {
        top: 0;
    }
}

@keyframes imageFadeIn {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.1;
    }
    100% {
        opacity: 1;
    }
}
.card-enter {
    opacity: 0;
}
.card-enter-to {
    opacity: 1;
}
.card-enter-active {
    transition: opacity 0.3s ease-in;
}

</style>