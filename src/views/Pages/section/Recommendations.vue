<template>
  <div class="bg-profile text-parentText h-screen">
    <Nav />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Layouts/Nav.vue";
import Footer from "@/components/Layouts/footer.vue";
export default {
  name: "HomeView",
  components: {
    Nav,

    Footer,
  },
};
</script>
