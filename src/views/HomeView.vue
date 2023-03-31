<template>
  <div class="bg-profile text-parentText h-screen">
    <Nav />
    <div class="">
      <Landing />
    </div>
    <Reads />
    <Review />
    <Prelim />
    <Footer />
  </div>
</template>

<script>
import Reads from "./Pages/Popular.vue";
import Nav from "@/components/Layouts/Nav.vue";
import Landing from "./Pages/Landing.vue";
import Footer from "@/components/Layouts/footer.vue";
import Prelim from "./Pages/Premlim.vue";
import Review from "./Pages/Reviews.vue";
export default {
  name: "HomeView",
  components: {
    Nav,
    Landing,
    Reads,
    Prelim,
    Review,
    Footer,
  },
};
</script>
