<template>
  <div
    class="w-full p-3 rounded-md gap-3 border border-gray-400 mt-8 flex justify-start items-start flex-col text-left"
  >
    <div class="text-sm font-semibold">Goals History</div>

    <div class="grid grid-cols-6 w-full text-sm">
      <div class="px-2 py-1 bg-[#cdffee56] rounded-md h-fit w-fit">
        Date started
      </div>
      <div class="px-2 py-1 bg-[#cdffee56] rounded-md h-fit w-fit">
        Year Total Read
      </div>
      <div class="px-2 py-1 bg-[#cdffee56] rounded-md h-fit w-fit">
        Monthly Read
      </div>
      <div class="px-2 py-1 bg-[#cdffee56] rounded-md h-fit w-fit">
        Pages Per Day
      </div>
      <div class="px-2 py-1 bg-[#cdffee56] rounded-md h-fit w-fit">
        Pages Per Week
      </div>
      <div class="px-1 py-1 bg-[#cdffee56] rounded-md h-fit w-fit">Props</div>
    </div>
    <div class="w-full">
      <div
        v-for="books in getUserGoals.books"
        :key="books.id"
        class="grid grid-cols-6 mt-3 w-full text-sm"
      >
        <div class="px-2">
          {{ moment(books.createdAt).format("DD-MM-YYYY") }} +
          {{ books.timeInterval }}
        </div>
        <div class="px-2">{{ books.totalRead }}</div>
        <div class="px-2">{{ books.monthlyRead }}</div>
        <div class="px-2">{{ books.pagesPerDay }}</div>
        <div class="px-2">{{ books.pagesPerWeek }}</div>

        <div class="px-1">
          <span class="cursor-pointer" @click="modal1 = true"
            ><button @click="editGoal(books._id)">Edit</button></span
          >
          /
          <span class="cursor-pointer" @click="removeCurrentGoal(books._id)"
            >Delete</span
          >
        </div>
      </div>
    </div>
    <Card v-bind:modal-1="modal1" @update:modal-1="modal1 = $event">
      <form
        @submit.prevent="updateGoal"
        class="flex flex-col w-auto gap-y-3 bg-white shadow-typeBox px-4 py-6 rounded-md"
      >
        <div class="">Update Book Goals</div>
        <input
          class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
          type="text"
          placeholder="Total Year Read"
          v-model="totalRead"
        />
        <input
          class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
          type="text"
          placeholder="No of Monthly Read"
          v-model="monthlyRead"
        />
        <input
          type="text"
          placeholder="Pages to read per day"
          v-model="pagesPerDay"
          class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
        />
        <input
          type="text"
          v-model="pagesPerWeek"
          placeholder="Pages to read per week"
          class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
        />
        <div class="">
          <label for="" class="text-xs">Select book goal interval</label>
          <select
            v-model="timeInterval"
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
          Update Goal
        </button>
      </form>
    </Card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Card from "../Card.vue";
import moment from "moment";
export default {
  components: {
    Card,
  },
  data() {
    return {
      isDrawerOpen: false,
      modal1: false,
      displayModal: false,
      moment,
    };
  },
  computed: {
    ...mapGetters(["getBookData", "getUserGoals"]),
    totalRead: {
      get() {
        return this.getBookData.book.totalRead;
      },
      set(value) {
        this.$store.commit("set", {
          type: "bookData",
          data: {
            ...this.getBookData,
            book: { ...this.getBookData.book, totalRead: value },
          },
        });
      },
    },
    monthlyRead: {
      get() {
        return this.getBookData.book.monthlyRead;
      },
      set(value) {
        this.$store.commit("set", {
          type: "bookData",
          data: {
            ...this.getBookData,
            book: { ...this.getBookData.book, monthlyRead: value },
          },
        });
      },
    },
    pagesPerDay: {
      get() {
        return this.getBookData.book.pagesPerDay;
      },
      set(value) {
        this.$store.commit("set", {
          type: "bookData",
          data: {
            ...this.getBookData,
            book: { ...this.getBookData.book, pagesPerDay: value },
          },
        });
      },
    },
    pagesPerWeek: {
      get() {
        return this.getBookData.book.pagesPerWeek;
      },
      set(value) {
        this.$store.commit("set", {
          type: "bookData",
          data: {
            ...this.getBookData,
            book: { ...this.getBookData.book, pagesPerWeek: value },
          },
        });
      },
    },
    timeInterval: {
      get() {
        return this.getBookData.book.timeInterval;
      },
      set(value) {
        this.$store.commit("set", {
          type: "bookData",
          data: {
            ...this.getBookData,
            book: { ...this.getBookData.book, timeInterval: value },
          },
        });
      },
    },
  },
  methods: {
    customFormatter(date) {
      return moment(date).format("DD-MM-yy");
    },
    async removeCurrentGoal(x) {
      let res = await this.$store.dispatch("remove", {
        endpoint: `/book-goals/${x}/`,
      });
      if (res.status == 201) {
      }
    },
    async editGoal(booksId) {
      let res = await this.$store.dispatch("get", {
        endpoint: `/book-goals/${booksId}`,
        auth: true,
      });
      if (!!res) {
        this.$store.commit("set", {
          type: "bookData",
          data: res,
        });
      }
    },
    async updateGoal() {
      let bookId = this.getBookData.book._id;
      let res = await this.$store.dispatch("put", {
        endpoint: `/book-goals/${bookId}/`,
        auth: true,
        payload: this.getBookData.book,
      });
      if (res.status == 200) {
        this.$store.commit("set", {
          type: "userBook",
          data: res,
        });
      }
    },
  },
};
</script>
