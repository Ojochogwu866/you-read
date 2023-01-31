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
        <div class="h-3/4 shadow-form w-96 bg-white px-8 py-4">
          <form @submit.prevent="submit">
            <div class="mt-8">LOGO</div>
            <div class="text-sm font-medium mt-8">
              Hello, Welcome to You-Read.
            </div>
            <div class="text-sm font-semibold">Login to Continue</div>
            <input
              placeholder="Email address"
              type="email"
              v-model="email"
              required
              class="rounded-md mt-6 border bg-transparent border-gray-400 text-sm text-gray-500 p-2 w-full"
            />
            <input
              placeholder="password"
              type="password"
              v-model="password"
              required
              class="rounded-md border bg-transparent border-gray-400 mt-2 text-sm text-gray-500 p-2 w-full"
            />
            <button
              type="submit"
              class="rounded-md mt-3 border bg-boxColor text-sm text-white p-3 w-full"
            >
              Continue
            </button>
          </form>
          <div class="">or</div>
          <div class="w-full mt-6 gap-4 flex justify-center items-center">
            <button @click="signupWithFacebook" type="button">
              <img class="w-8" src="@/assets/Images/facebook.png" alt="" />
            </button>
            <button class="w-8" @click="signupWithGoogle" type="button">
              <img src="@/assets/Images/google.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
import Modal from "../Layouts/Modal.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Modal,
  },
  setup() {},
  data() {
    return {
      toggleModal: false,
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSignup() {
      await this.signup({ email: this.email, password: this.password });
    },
    modal() {
      this.toggleModal = true;
    },
    ...mapActions([
      "signup",
      "login",
      "signupWithEmail",
      "signupWithFacebook",
      "signupWithGoogle",
    ]),
    async submit() {
      try {
        await this.login({ email: this.email, password: this.password });
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped></style>
