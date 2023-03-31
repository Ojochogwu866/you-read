<template>
  <div class="p-4 rounded-md text-left bg-white w-5/6 min-h-fit shadow-bx">
    <div
      class="border-b-2 pb-1 border-boxColor flex items-center gap-8 text-sm"
    >
      Current Goal

      <div
        @click="displayModal = true"
        class="bg-boxbg border-none px-2 py-1 hover:bg-boxColor cursor-pointer hover:text-white"
      >
        Set Goals
      </div>
      <Card
        v-bind:display-modal="displayModal"
        @update:display-modal="displayModal = $event"
      >
        <form
          @submit.prevent="createGoals"
          class="flex flex-col w-auto gap-y-3 bg-white shadow-typeBox px-4 py-6 rounded-md"
        >
          <div class="">
            Enter Book Details Below to keep track of your Adventure
          </div>
          <input
            class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
            type="text"
            placeholder="Total Year Read"
            v-model="goalsArgs.totalRead"
          />
          <input
            class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
            type="text"
            placeholder="No of Monthly Read"
            v-model="goalsArgs.monthlyRead"
          />
          <input
            type="text"
            placeholder="Pages to read per day"
            v-model="goalsArgs.pagesPerDay"
            class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
          />
          <input
            type="text"
            v-model="goalsArgs.pagesPerWeek"
            placeholder="Pages to read per week"
            class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
          />
          <div class="">
            <label for="" class="text-xs">Select book goal interval</label>
            <select
              v-model="goalsArgs.timeInterval"
              placeholder="Enter working Days"
              class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
            >
              <option :value="null">Select goal interval</option>
              <option value="1">1 Month</option>
              <option value="3">3 Month</option>
              <option value="6">6 Month</option>
              <option value="12">12 Month</option>
            </select>
          </div>
          <button
            class="rounded-sm px-4 py-2 font-medium bg-boxColor text-white text-sm outline-none hover:shadow-typeBox"
            type="submit"
          >
            Add Book
          </button>
        </form>
      </Card>
    </div>
    <div class="flex items-start justify-center">
      <div class="w-full text-sm grid grid-rows-5 gap-2 mt-2">
        <div class="text-sm">Year Total Read:</div>
        <div class="text-sm">Monthly Read:</div>
        <div class="text-sm">pages Per Day:</div>
        <div class="text-sm">Pages Per Week:</div>
        <div class="text-sm">Reading Interval:</div>
      </div>
      <div
        v-if="currentGoal"
        class="w-full text-sm grid grid-rows-5 gap-2 mt-2"
      >
        <div class="text-sm">{{ currentGoal.totalRead }}</div>
        <div class="text-sm">{{ currentGoal.monthlyRead }}</div>
        <div class="text-sm">{{ currentGoal.pagesPerDay }}</div>
        <div class="text-sm">{{ currentGoal.pagesPerWeek }}</div>
        <div class="text-sm">{{ currentGoal.timeInterval }}</div>
      </div>
    </div>
    <p class="text-xs mt-8">
      <span class="text-red-800">**</span>Note: You can only change your book
      reading goals after completion of current reading interval.
    </p>
    <div>
      <div class=""></div>
    </div>
  </div>
</template>
<script>
import Card from "../Card.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Card,
  },
  data() {
    return {
      query: "",
      displayModal: false,
      modal1: false,
      goalsArgs: {
        totalRead: "",
        pagesPerDay: "",
        pagesPerWeek: "",
        monthlyRead: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getUserGoals", "getUserBooks"]),
    currentGoal() {
      const goals = this.getUserGoals.books;
      if (!goals || !goals.length) {
        return null;
      }
      const sortedBooks = goals.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return sortedBooks[0];
    },
  },
  async mounted() {
    await this.bookGoal();
  },
  methods: {
    async createGoals() {
      let res = await this.$store.dispatch("post", {
        endpoint: `/book-goals/`,
        auth: true,
        payload: this.goalsArgs,
      });
      if (res.status == 201) {
      }
    },
    async bookGoal() {
      let res = await this.$store.dispatch("get", {
        endpoint: `/book-goals/`,
        auth: true,
      });
      if (!!res) {
        this.$store.commit("set", {
          type: "userGoals",
          data: res,
        });
      }
    },
  },
};
</script>
