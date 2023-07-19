<template>
  <main class="w-full p-5 mt-20 sx:mt-10 mx-auto flex justify-between">
    <router-link
      v-for="(route, index) in routes"
      :key="index"
      :to="{ name: route }"
      style="margin-bottom: -1.97px"
      class="text-sm m-2 
      capitalize bg-[#CBD5E0] flex sx:bg-[transparent] rounded 
      cursor-pointer hover:shadow-typeBox p-2"
      exact-active-class=" bg-[#A0006D] "
      @click="
        selectedGenre = route;
        $emit('selected-genre', route);
      "
    > 
      {{ titles[index] }}
    </router-link>
  </main>
</template>
<script>
export default {
  name: "SubNavigation",
  props: {
    routes: {
      type: Array,
      required: true,
    },
    titles: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedGenre: null,
    };
  },
};
</script>
<style scoped></style>
