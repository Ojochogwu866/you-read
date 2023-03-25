<template>
  <div class="hero w-full h-[90vh] relative bg-cover flex p-10 items-center">
    <div
      class="overlay w-full absolute h-full top-0 left-0 flex justify-center flex-col"
    >
      <div class="w-11/12 mx-auto">
        <div class="text-left text-7xl font-extrabold">
          Read Better <span class="text-boxColor">&</span><br />
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
  background-position: 50% 50%;
  background-image: url("https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbiUyMHJlYWRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60");
}
.overlay {
  background-color: rgba(0, 0, 0, 0.496);
}
</style>
