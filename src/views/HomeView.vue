<template>
  <div class="bg-profile text-parentText h-screen">
    <Nav />
    <div class="">
      <Landing />
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Layouts/Nav.vue";
import Landing from "./Pages/Landing.vue";
import Footer from "@/components/Layouts/footer.vue";
export default {
  name: "HomeView",
  components: {
    Nav,
    Landing,
    Footer,
  },
};
</script>
