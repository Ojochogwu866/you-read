<template>
  <div class="bg-profile text-parentText h-screen">
    <Nav />
    <div class="">
      <Landing />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Layouts/Nav.vue";
import Landing from "./Pages/Landing.vue";
export default {
  name: "HomeView",
  components: {
    Nav,
    Landing,
  },
};
</script>
