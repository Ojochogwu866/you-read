<template>
  <div class="h-[120vh] py-8 overflow-x-hidden">
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
  </div>
</template>
<script>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
};
</script>
