<template>
    <div class="w-full mt-10 bg-gray-400 backdrop-filter
       backdrop-blur-sm bg-opacity-10">
    <div class="pp pb-10">
      <div class="h-auto">
        <div class="w-full p-5 ">
        <h2
          class="text-sm  text-left font-normal pb-2 border-b-[1px] border-gray-800 text-white"
        >
          How it Works
        </h2> 
        </div>
        <div class=" flex text-white justify-center w-full items-center mt-6 p-5">
            <div class=" h-[125px] w-[30%] text-left flex flex-col justify-center items-start left-0">
                <h1>Read</h1>
                <div class="flex gap-3">
                    <img src="@/assets/Images/Vector.svg" class=" w-[30px]" alt=""/>
                    <p class="text-[14px] pr-3">Select books to Read: Search our book catalogue, and find interesting books, or add your own book.</p>
                </div>
            </div>
            <div class=" h-[200px] w-[50%] exp flex justify-center items-center right-0 rounded-full backdrop-filter
       backdrop-blur-sm bg-opacity-10 ">
    <img src="@/assets/Images/bookreader.jpg" class="w-full -skew-x-[20deg] h-full object-contain" alt=""/>
    </div>
        </div>  
        <div class=" flex text-white justify-center w-full items-center mt-6 p-5">
            <div class=" h-[125px] w-[30%] text-left flex flex-col justify-center items-start left-0">
                <h1>Review</h1>
                <div class="flex gap-3">
                    <img src="@/assets/Images/Vector.svg" alt=""/>
                    <p class="text-[14px] pr-3">Review your targets: Set book reading target, document  your progress and monitor your reading time and goals.</p>
                </div>
            </div>
            <div class=" h-[200px] w-[50%] exp flex justify-center items-center right-0 rounded-full backdrop-filter
       backdrop-blur-sm bg-opacity-10 ">
    <img src="@/assets/Images/book2.jpg" class="w-full h-full skew-x-[20deg] object-contain" alt=""/>
    </div>
        </div>   
        <div class=" flex text-white justify-center w-full items-center mt-6 p-5">
            <div class=" h-[125px] w-[30%] text-left flex flex-col justify-center items-start left-0">
                <h1>Document</h1>
                <div class="flex gap-3">
                    <img src="@/assets/Images/Vector.svg" alt=""/>
                    <p class="text-[14px] pr-3">Give reviews on completed books: Let others know what you think abouy books you have read.</p>
                </div>
            </div>
            <div class=" h-[200px] w-[50%] exp flex justify-center items-center right-0 rounded-full backdrop-filter
       backdrop-blur-sm bg-opacity-10 ">
    <img src="@/assets/Images/book1.jpg" class="w-1/2 h-full -skew-x-[20deg] object-cover" alt=""/>
    </div>
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
  .exp{
    background: rgb(160,0,109);
    background: linear-gradient(328deg, rgba(160, 0, 109, 0.521) 0%,
     rgba(255, 255, 255, 0.493) 50%, rgba(252, 176, 69, 0.493) 100%);
  }
  </style>
  