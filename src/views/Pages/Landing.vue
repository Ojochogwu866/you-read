<template>
  <div class="h-auto py-10 justify-center flex flex-col items-center">
    <svg   class=" w-50 h-50 md:w-60 md:h-60 mt-20"  width="161" height="161" viewBox="0 0 161 161" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_4_4321)">
      <g opacity="0.4">
      <path d="M159.653 129.026V2.04443L32.6713 2.04443L32.6713 129.026H159.653Z" stroke="#E8E8E8"/>
      <path d="M128.636 160.045V33.0627L1.65374 33.0627L1.65374 160.045H128.636Z" stroke="#E8E8E8"/>
      <path d="M32.6718 1.89282L32.6717 129.026L1.65332 159.56V32.5781L32.6718 1.89282Z" stroke="#E8E8E8" stroke-linejoin="bevel"/>
      <path d="M159.654 1.89282V129.026L128.636 160.044V32.5781L159.654 1.89282Z" stroke="#E8E8E8" stroke-linejoin="bevel"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_4_4321">
      <rect width="160" height="160" fill="white" transform="translate(0.578125 0.96875)"/>
      </clipPath>
    </defs>
  </svg>
    <p class=" text-gray-400 font-normal text-[22px] mt-5 sm:text-[28px]" id="heading-1">
      You Read App
    </p>
    <h1 class=" sm:text-7xl text-4xl font-extrabold text-gray-300" id="heading-2">
      Read <span class=" text-gray-400">Better</span>
    </h1>
    <p class=" w-full sm:w-3/4 mx-auto text-gray-400 text-[14px] mt-8 sm:text-base leading-[28px]" id="description">
      People who read as an adventure find a way to document their beautiful escapade. With You-Read, we are creating a virtual experience
      for authors and readers to have a beautiful interface with their reading experience. Read, Review and Document. Its built for Authors and Book Readers
    </p>
    <p 
      class="mt-5 sm:text-sm text-[12px] text-white py-3 px-4 flex justify-center items-center gap-1 bg-gray-400 backdrop-filter border-gray-200 
      rounded-3xl  backdrop-blur-sm bg-opacity-10"
    >
      <svg 
        width="12" 
        height="12" 
        viewBox="0 0 42 42" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill-rule="evenodd" clip-rule="evenodd" 
          d="M41.5315 0.40625H1.53149V7.07295H30.1504L0.150391 37.0729L4.86449 41.7869L34.8648 11.7866V40.4062H41.5315V0.40625Z" fill="white"/>
      </svg>
      Learn More about what we are building, and who it is for
    </p>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import gsap from "gsap";

export default {
  name: "Landing",
  components:{
  },
  data() {
    return {
    };
  },
  setup() {
    onMounted(() => {
      gsap.fromTo(
    "#heading-1",
    {
      opacity: 0,
      y: "10%",
    },
    {
      duration: 3,
      opacity: 1,
      x: 0,
    }
  );
  gsap.fromTo(
    "#heading-2",
    {
      opacity: 0,
      y: "10%",
    },
    {
      duration: 7,
      opacity: 1,
      x: 0,
    }
  );
  gsap.fromTo(
    "#description",
    {
      opacity: 0,
      y: "10%",
    },
    {
      duration:11,
      opacity: 1,
      x: 0,
    }
  );
}
)},
  methods:{
  }
};
</script>