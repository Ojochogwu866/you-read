<template>
  <div
    class="hero w-full h-[90vh] bg-[#080E1A] relative bg-contain flex p-10 items-center"
  >
    <div
      class="w-[50%] h-[300px] absolute bg-[#080e1a]/50 bg-opacity-10 skew-y-12 top-[15%]"
    />
    <div
      class="w-[50%] h-[200px] absolute left-0 bg-[#7ec8e3]/20 bg-opacity-10 skew-y-12 top-[45%]"
    />
    <div
      class="overlay w-full absolute h-full top-0 left-0 flex justify-center flex-col"
    >
      <div class="w-11/12 mx-auto">
        <div class="text-left text-7xl font-extrabold text-white">
          Read Better <span class="text-[#00B4FF]">&</span><br />
          Cover more Books<br />
          Easily
        </div>
        <div class="flex items-center py-2 mt-6 z-50">
          <div class="border-b-4 w-100 absolute border-boxColor" />
          <div class="border-r-8 border-parentText" />
          <div class="z-20 gap-6 flex justify-center items-center">
            <div
              class="bg-boxbg cursor-pointer hover:shadow-typeBox p-2 text-sm"
              @click="setReader()"
            >
              Set reading plan
            </div>

            <div
              class="bg-boxbg cursor-pointer hover:shadow-typeBox p-2 text-sm"
              @click="setReader()"
            >
              Join Book Club
            </div>
            <div
              class="cursor-pointer bg-boxbg hover:shadow-typeBox p-2 text-sm"
              @click="setReader()"
            >
              Set Book Goals
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    setReader(x) {
      this.$store.commit("set", {
        type: "profiles",
        data: x,
      });
      this.$router.push({ name: "reader-profile" });
    },
  },
};
</script>
<style scoped>
.hero {
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("@/assets/Images/undraw_books_re_8gea.svg");
}
.overlay {
  background-color: #080e1aa6;
}
</style>
