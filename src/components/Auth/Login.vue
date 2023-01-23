<template>
  <div>
    <div
      @click="modal"
      class="rounded-md border border-parentText px-7 py-2 hover:bg-gray-50"
    >
      Login
    </div>
    <Modal v-if="toggleModal" @close="toggleModal = false">
      <template v-slot:header>
        <div></div>
      </template>
      <div
        class="h-screen rounded shadow-2xl flex flex-col justify-center items-center w-full"
      >
        <div class="h-3/4 shadow-form w-96 bg-white px-8 py-4">
          <form @submit.prevent="loginWithEmail">
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
              @click="login"
              class="rounded-md mt-3 border bg-boxColor text-sm text-white p-3 w-full"
            >
              Continue
            </button>
          </form>
          <div class="">
            <button @click="loginWithGoogle">
              <img src="@/assets/Images/facebook.png" alt="" />
            </button>
            <button @click="loginWithFacebook">
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
import { useStore } from "vuex";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-vue";
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
  setup() {
    const store = useStore();
    const { loginWithPopup } = useAuth0();
    async function loginWithEmail() {
      try {
        // Send the login request with email and password to the Node.js server
        const response = await axios.post("/login", { email, password });
        // Set the authenticated state and user data
        store.commit("auth/setAuthenticated", true);
        store.commit("auth/setUser", response.data.user);
        // Save the token to the local storage
        localStorage.setItem("token", response.data.token);
      } catch (error) {
        console.error(error);
      }
    }
    async function loginWithGoogle() {
      try {
        await loginWithPopup({
          connection: "google-oauth2",
        });
      } catch (error) {
        console.error(error);
      }
    }
    async function loginWithFacebook() {
      try {
        await loginWithPopup({
          connection: "facebook",
        });
      } catch (error) {
        console.error(error);
      }
    }
    return {
      email,
      password,
      loginWithEmail,
      loginWithGoogle,
      loginWithFacebook,
    };
  },
  methods: {
    modal() {
      this.toggleModal = true;
    },
  },
};
</script>
