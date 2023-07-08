<template>
  <div class=" w-10/12 flex flex-col justify-center mx-auto items-center text-parentText">
    <Nav />
    <div>
      <Landing />
    </div>
    <Reads />
    <GetInformed/>
    <Review />
    <Overview />
    <Prelim />
    <Footer />
  </div>
</template>

<script>
import Reads from "./Pages/Popular.vue";
import Nav from "@/components/Layouts/Nav.vue";
import Landing from "./Pages/Landing.vue";
import Footer from "@/components/Layouts/footer.vue";
import GetInformed from "./Pages/GetInformed.vue";
import Prelim from "./Pages/Premlim.vue";
import Overview from "./Pages/Overview.vue";
import Review from "./Pages/Reviews.vue";
export default {
  name: "HomeView",
  components: {
    Nav,
    Landing,
    Reads,
    Prelim,
    GetInformed,
    Review,
    Overview,
    Footer,
  },
};
</script>
