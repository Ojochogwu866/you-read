<template>
  <div 
    class="overflow-y-scroll container"
    :class="container"
  >
    <div 
      ref="scrollable"
    >
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "ScrollTab",
  props:['container'],
  mounted() {
    this.scrollToTop(); // Scroll to top on component mount
  },
  updated() {
    this.scrollToTop(); // Scroll to top on component update
  },
  methods: {
    scrollToTop() {
      this.$refs.scrollable.scrollTop = 0;
    },
  },
};
</script>
<style scoped>
  .container {
    scrollbar-width: thin;
    scrollbar-color: #A0006D; 
  }
  .container::-webkit-scrollbar {
    width: thin;
  }
  .container::-webkit-scrollbar-thumb {
    background-color: #a0006d;
  }
  .container::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
  }
</style>
  