<template>
    <div class="w-full mt-10 bg-gray-400 backdrop-filter
       backdrop-blur-sm bg-opacity-10">
    <div class="pp p-5">
      <div class="h-[100vh]">
        <h2
          class="text-sm text-left font-normal pb-2 border-b-[1px] border-gray-800 text-white"
        >
          How it Works
        </h2> 
        <div class="">
            <div class=" h-[20%] w-[30%] left-0 rounded-r-full backdrop-filter
       backdrop-blur-sm bg-opacity-30 "></div>
            <div class=""></div>
        </div>  
      </div>
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
  };
  </script>
  <style scoped>
  .pp{
    background-image: url('@/assets/Images/Rectangle.svg');
  }
  </style>
  