<template>
  <main
    class="flex justify-between text-xs border-b sx:border-none sx:grid sx:gap-1 sx:grid-cols-2"
  >
    <router-link
      :to="{ name: route }"
      style="margin-bottom: -1.97px"
      class="text-sm"
      exact-active-class=" border-b-2 border-cliniDarkBlue  h-full  text-cliniDarkBlue  font-medium"
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
<style scoped>
@media screen and (max-width: 767px) {
  .mobile.active {
    background-color: #104c93;
    color: white;
  }
}
</style>
