<template>
  <main class="w-9/12 p-5 mx-auto flex justify-between">
    <router-link
      :to="{ name: route }"
      style="margin-bottom: -1.97px"
      class="text-sm m-2 flex justify-between items-center capitalize bg-[#CBD5E0] rounded cursor-pointer hover:shadow-typeBox p-2"
      exact-active-class=""
      v-for="(route, index) in routes"
      :key="index"
      >{{ route }}</router-link
    >
  </main>
</template>
<script>
export default {
  name: "Subnavigation",
  props: ["routes"],
};
</script>
<style scoped></style>
