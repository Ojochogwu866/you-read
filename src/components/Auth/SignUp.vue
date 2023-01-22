<template>
  <div>
    <div
      @click="modal"
      class="rounded-md border border-parentText px-7 py-2 hover:bg-gray-50"
    >
      Sign Up
    </div>
    <Modal v-if="toggleModal" @close="toggleModal = false">
      <template v-slot:header>
        <div></div>
      </template>
      <div
        class="h-screen rounded shadow-2xl flex flex-col justify-center items-center w-full"
      >
        <form class="h-3/4 shadow-form w-96 bg-white px-8 py-4">
          <div class="mt-8">LOGO</div>
          <div class="text-sm font-medium mt-8">
            Hello, Welcome to You-Read.
          </div>
          <div class="text-sm font-semibold">Sign Up to Continue</div>
          <input
            placeholder="Email address"
            type="email"
            class="rounded-md mt-6 border bg-transparent border-gray-400 text-sm text-gray-500 p-3 w-full"
          />
          <input
            placeholder="password"
            type="email"
            class="rounded-md mt-6 border bg-transparent border-gray-400 text-sm text-gray-500 p-3 w-full"
          />
          <span class="text-xs"
            ><input
              type="checkbox"
              class="mr-3 rounded border-2 border-black"
            />Agree with our privacy policy to continue</span
          >
          <button
            @click="signup"
            class="rounded-md mt-3 border bg-boxColor text-sm text-white p-3 w-full"
          >
            Continue
          </button>
        </form>
      </div>
    </Modal>
  </div>
</template>
<script>
import Modal from "../Layouts/Modal.vue";
export default {
  components: {
    Modal,
  },
  setup() {},
  data() {
    return {
      toggleModal: false,
    };
  },
  methods: {
    modal() {
      this.toggleModal = true;
    },
    signup() {
      this.$auth.loginWithRedirect({
        screen_hint: "signup",
      });
    },
  },
};
</script>
<style scoped></style>
