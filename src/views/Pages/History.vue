<template>
  <div class="w-11/12">
    <div
      class="w-full p-3 rounded-md gap-3 border border-gray-400 mt-8 flex justify-start items-start flex-col text-left"
    >
      <div class="text-sm font-semibold">Read History</div>

      <div class="grid grid-cols-6 w-full text-sm">
        <div class="px-2 py-1 bg-[#ffcdef56] rounded-md h-fit w-fit">
          Book Title
        </div>
        <div class="px-2 py-1 bg-[#ffcdef56] rounded-md h-fit w-fit">
          Book Author
        </div>
        <div class="px-2 py-1 bg-[#ffcdef56] rounded-md h-fit w-fit">
          Book Genre
        </div>
        <div class="px-2 py-1 bg-[#ffcdef56] rounded-md h-fit w-fit">
          Book Pages
        </div>
        <div class="px-1 py-1 bg-[#ffcdef56] rounded-md h-fit w-fit">Props</div>
        <div class="px-1 py-1 bg-[#ffcdef56] rounded-md h-fit w-fit">
          Status
        </div>
      </div>

      <div v-if="booksData" class="w-full">
        <div
          v-for="books in booksData"
          :key="books.id"
          class="grid grid-cols-6 mt-3 w-full text-sm"
        >
          <div class="px-2">{{ books.bookTitle }}</div>
          <div class="px-2">{{ books.bookAuthor }}</div>
          <div class="px-2">{{ books.bookGenre }}</div>
          <div class="px-2">{{ books.bookPages }}</div>
          <div class="px-1">
            <span class="cursor-pointer" @click="displayModal = true"
              >Edit</span
            >
            /
            <span class="cursor-pointer" @click="removeCurrentBook(books._id)"
              >Delete</span
            >
          </div>
          <div class="px-1">Status</div>
        </div>
      </div>
      <div v-else class="flex justify-center items-center text-sm">
        <p>You have no book in your read history. Add books to get started.</p>
      </div>
      <Card
        v-bind:display-modal="displayModal"
        @update:display-modal="displayModal = $event"
      >
        <form
          @submit.prevent="createBook"
          class="flex flex-col w-auto gap-y-3 bg-white shadow-typeBox px-4 py-6 rounded-md"
        >
          <div class="">
            Enter Book Details Below to keep track of your Adventure
          </div>
          <input
            class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
            type="text"
            placeholder="Book title e.g purple hibiscus"
          />
          <input
            class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
            type="text"
            placeholder="Author e.g chimamanda adichie"
          />
          <input
            class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
            type="text"
            placeholder="Book Genre"
          />
          <input
            type="text"
            placeholder="total pages"
            class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
          />
          <button
            class="rounded-sm px-4 py-2 font-medium bg-boxColor text-white text-sm outline-none hover:shadow-typeBox"
            type="submit"
          >
            Add Book
          </button>
        </form>
      </Card>
    </div>
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
              ><button @click="editBooks(books._id)">Edit</button></span
            >
            /
            <span class="cursor-pointer" @click="removeCurrentBook(books._id)"
              >Delete</span
            >
          </div>
        </div>
      </div>
      <Card v-bind:modal-1="modal1" @update:modal-1="modal1 = $event">
        <form
          @submit.prevent="createBook"
          class="flex flex-col w-auto gap-y-3 bg-white shadow-typeBox px-4 py-6 rounded-md"
        >
          <div class="">
            Enter Book Details Below to keep track of your Adventure
          </div>
          <input
            class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
            type="text"
            placeholder="Book title e.g purple hibiscus"
          />
          <input
            class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
            type="text"
            placeholder="Author e.g chimamanda adichie"
          />
          <input
            class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
            type="text"
            placeholder="Book Genre"
          />
          <input
            type="text"
            placeholder="total pages"
            class="w-full bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
          />
          <button
            class="rounded-sm px-4 py-2 font-medium bg-boxColor text-white text-sm outline-none hover:shadow-typeBox"
            type="submit"
          >
            Add Book
          </button>
        </form>
      </Card>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Card from "./Card.vue";
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
      editBooks: {},
    };
  },
  computed: {
    ...mapGetters(["getUserBooks", "getUserGoals"]),
    booksData() {
      return this.getUserBooks.books;
    },
  },
  async mounted() {},
  methods: {
    async removeCurrentBook(x) {
      let res = await this.$store.dispatch("remove", {
        endpoint: `/books/${x}/`,
      });
      if (res.status == 201) {
      }
    },
    async editBooks() {
      let res = await this.$store.dispatch("get", {
        endpoint: `/book-goals/${this.getUserBooks.bookId}`,
        auth: true,
      });
      if (!!res) {
        this.$store.commit("set", {
          type: "userBooks",
          data: res,
        });
      }
    },
  },
  async created() {
    let res = await this.$store.dispatch("get", {
      endpoint: `/books/`,
      auth: true,
    });
    if (!!res) {
      this.$store.commit("set", {
        type: "userBooks",
        data: res,
      });
    }
  },
};
</script>
