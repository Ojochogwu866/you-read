<template>
  <main class=" flex ">
    <router-link
      v-for="(route, index) in routes"
      :key="index"
      :to="{ name: route }"
      style="margin-bottom: -1.97px"
      class=" shrink-0 flex justify-start items-center w-auto m-2 capitalize  
      rounded cursor-pointer  p-2 text-gray-400 font-semibold text-sm text-center"
      exact-active-class=" line-through"
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
