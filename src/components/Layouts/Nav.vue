<template>
  <div class="flex justify-between items-center border-b-2 border-white pr-20">
    <div></div>
    <div class="flex justify-center gap-8 items-center m-6">
      <div
        @click="modal"
        class="rounded-md border border-parentText px-7 py-2 hover:bg-gray-50"
      >
        Login
      </div>
      <Modal
        css="h-screen overflow-y-hidden inset-0 flex justify-center items-center z-50 "
        v-if="toggleModal"
        @close="toggleModal = false"
      >
        <template v-slot:header>
          <div></div>
        </template>
        <div
          class="bg-white absolute h-screen rounded shadow-2xl flex flex-col justify-center items-center w-full mx-auto"
        >
          <form class="h-3/4 shadow-form w-96 bg-white px-8 py-4">
            <div class="mt-8">LOGO</div>
            <div class="text-sm font-medium mt-8">
              Hello, Welcome to You-Read.
            </div>
            <div class="text-sm font-semibold">Login to Continue</div>
            <input
              placeholder="Email address"
              type="email"
              class="rounded-md mt-6 border bg-transparent border-gray-400 text-sm text-gray-500 p-3 w-full"
            />
            <button
              class="rounded-md mt-3 border bg-boxColor text-sm text-white p-3 w-full"
            >
              Continue
            </button>
          </form>
        </div>
        <!-- </div>
        </div> -->
      </Modal>
      <div
        class="rounded-md border border-parentText px-7 py-2 hover:bg-gray-50"
      >
        Sign Up
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "./Modal.vue";
import ClickOutside from "vue-click-outside";
export default {
  component: {
    Modal,
  },
  setup() {},
  data() {
    return {
      toggleModal: false,
    };
  },
  directives: {
    ClickOutside,
  },
  methods: {
    modal() {
      this.toggleModal = true;
    },
    // login() {
    //   this.$auth.loginWithRedirect({ screen_hint: "signup" });
    // },
  },
};
</script>
