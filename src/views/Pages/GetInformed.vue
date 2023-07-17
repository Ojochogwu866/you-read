<template>
  <div class="w-full mt-10 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10">
    <div class="bg-patternBg pb-10">
      <div class="h-auto">
        <div class="w-full p-5 ">
          <h2 class="text-sm  text-left font-normal pb-2 border-b-[1px] border-gray-800 text-white">
            How it Works
          </h2> 
        </div>
        <slides
          v-for="(p, i) in gettingStarted"
          :key="i"
          class="cursor-pointer"
          :title="p.title"
          :src="p.image"
          :action="p.action"
        />
      </div>
    </div>
  </div>
</template>
  <script>
  import { onMounted } from "vue";
  import gsap from "gsap";
  import Slides from './Slide.vue'

  export default {
    name: "GetInformed",
    components: { Slides },
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
    data: () => ({
      cat: "actions",
      events:[
        {
        title: "Read",
        action:"Select books to Read: Search our book catalogue, and find interesting books, or add your own book.",
        image: require("@/assets/Images/bookreader.jpg"),
        category: ["actions"]
        },
        {
        title: "Review",
        action:"Review your targets: Set book reading target, document  your progress and monitor your reading time and goals.",
        image: require("@/assets/Images/book2.jpg"),
        category: ["actions"]
        },
        {
        title: "Document",
        action:"Give reviews on completed books: Let others know what you think abouy books you have read.",
        image: require("@/assets/Images/book1.jpg"),
        category: ["actions"]
        },
      ]
    }),
    computed: {
    gettingStarted() {
      return this.events.filter((event) =>
        event.category.includes(this.cat)
      );
    },
  },
  };
  </script>

  