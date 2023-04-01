<template>
  <div
    class="flex justify-between py-4 items-center border-b-2 border-white bg-white pr-20"
  >
    <div></div>
    <div class="w-2/4" v-if="$route.name == 'book-recommendations'">
      <form @submit.prevent="search" class="flex justify-center items-center">
        <input
          v-model="query"
          @input="clearOutput"
          @keyup="getSuggestions"
          class="w-full outline-none text-sm bg-white rounded-lg border border-gray-400 p-2"
          placeholder="search for most recommended books by genres e.g fiction"
        />
      </form>
    </div>
    <div class="flex justify-center gap-6 items-center m-2">
      <div class="text-[14px] cursor-pointer hover:bg-gray-50">Advertise</div>
      <div class="text-[14px] cursor-pointer hover:bg-gray-50">
        Submit a book
      </div>
      <Login />
      <Signup />
    </div>
  </div>
</template>
<script>
import Modal from "./Modal.vue";
import Login from "../Auth/Login.vue";
import Signup from "../Auth/SignUp.vue";
export default {
  components: {
    Modal,
    Login,
    Signup,
  },
};
</script>
