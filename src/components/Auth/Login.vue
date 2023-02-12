<template>
  <div>
    <div
      @click="modal"
      class="rounded-md cursor-pointer border border-parentText px-7 py-2 hover:bg-gray-50"
    >
      Login
    </div>
    <Modal v-if="toggleModal" @close="toggleModal = false">
      <template v-slot:header>
        <div></div>
      </template>
      <div
        class="h-screen rounded shadow-2xl flex flex-col justify-center items-end w-full px-20"
      >
        <div
          class="h-3/4 shadow-form flex flex-col justify-center w-96 bg-white px-8 py-4"
        >
          <form @submit.prevent="submit">
            <div class="text-sm font-normal mt-8">
              Hello, Welcome to You-Read.
            </div>
            <div class="text-sm font-normal">Login to Continue</div>
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
              @click="login"
              class="rounded-md mt-3 border bg-boxColor text-sm text-white p-3 w-full"
            >
              Continue
            </button>
          </form>
          <div class="mt-3 text-sm font-normal">or</div>
          <div class="w-full mt-3 gap-4 flex justify-center items-center">
            <!-- <button @click="handleSocialLogin('facebook')">
              <img class="w-8" src="@/assets/Images/facebook.png" alt="" />
            </button> -->
            <button
              class="w-full gap-4 flex border border-gray-400 py-3 rounded-md justify-center items-center"
              @click="handleSocialLogin('google')"
            >
              <img class="w-5" src="@/assets/Images/google.png" alt="" /> Login
              With Google
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
  data() {
    return {
      toggleModal: false,
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login", "handleSocialLogin"]),
    modal() {
      this.toggleModal = true;
    },
    async submit() {
      try {
        await this.login({ email: this.email, password: this.password });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
