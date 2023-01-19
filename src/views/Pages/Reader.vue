<template>
  <div class="w-full flex flex-col justify-start items-start">
    <div></div>
    <div class="text-sm font-semibold">Hi, Olajide, Welcome Back</div>
    <div class="flex flex-col justify-center w-full items-center">
      <div class="mt-6 w-3/5 m-auto pb-5">
        <div class="text-sm font-medium">
          Search Book by title, author and other keywords
        </div>
        <form @submit.prevent="search">
          <input
            v-model="query"
            class="w-4/5 m-auto outline-none text-sm bg-white rounded-md border border-gray-400 p-2 mt-2"
            placeholder="e.g: Honey & Spice, Bolu Babalola"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div class="flex gap-6 justify-center w-full">
        <div class="p-3 rounded-md gap-3 border text-left border-gray-400 w-90">
          <div class="border-b-2 pb-1 border-boxColor text-sm">
            Set Reading Plan
          </div>
          <div class="text-sm mt-2">Book Title:</div>
          <div class="text-sm">Total Pages:</div>
          <div class="mt-2">
            <div class="font-semibold leading-5 text-sm">SCHEDULE</div>
            <div class="text-sm leading-6">Total time daily:</div>
            <div class="text-sm leading-6">Pages to Cover:</div>
            <div class="text-sm leading-6">24 Days To Cover</div>
          </div>
          <div></div>
        </div>
        <div class="p-3 rounded-md gap-3 border text-left border-gray-400 w-90">
          <div class="border-b-2 pb-1 border-boxColor text-sm">
            Join/Create Club
          </div>
          <div></div>
        </div>
        <div class="p-3 rounded-md gap-3 border text-left border-gray-400 w-90">
          <div class="border-b-2 pb-1 border-boxColor text-sm">
            Set Book Goals
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <History />
    <div
      class="absolute bg-black opacity-70 w-full h-full flex justify-center items-center"
    >
      <ul class="list-none bg-white bg-opacity-100 text-left">
        <li
          class="bg-black"
          v-for="result in searchBookResults"
          :key="result.id"
        >
          {{ result.volumeInfo.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import History from "./History.vue";
export default {
  components: {
    History,
  },
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions(["searchBooks"]),
    search() {
      this.searchBooks(this.query);
    },
  },
  computed: {
    ...mapGetters(["searchBookResults"]),
  },
};
</script>
