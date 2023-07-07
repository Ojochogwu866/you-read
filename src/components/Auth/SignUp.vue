<template>
  <div>
    <div
      @click="modal"
      class="text-[14px] cursor-pointer bg-[rgb(160,0,109)] rounded-[4px] px-4 py-1"
    >
      Sign Up
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
          <form @submit.prevent="signUp">
            <div class="text-sm font-normal mt-8">
              Hello, Welcome to You-Read.
            </div>
            <div class="text-sm font-normal">Create Reader Account</div>
            <input
              placeholder="Fullname"
              type="text"
              v-model="args.name"
              required
              class="rounded-md mt-6 border bg-transparent border-gray-400 text-sm text-gray-500 p-2 w-full"
            />
            <input
              placeholder="Email address"
              type="email"
              v-model="args.email"
              required
              class="rounded-md mt-6 border bg-transparent border-gray-400 text-sm text-gray-500 p-2 w-full"
            />
            <input
              placeholder="password"
              type="password"
              v-model="args.password"
              required
              class="rounded-md border bg-transparent border-gray-400 mt-2 text-sm text-gray-500 p-2 w-full"
            />
            <button
              type="submit"
              class="rounded-md mt-3 border bg-boxColor text-sm text-white p-3 w-full"
            >
              Sign Up
            </button>
          </form>
          <div class="mt-3 text-sm font-normal">or</div>
          <div class="w-full mt-3 gap-4 flex justify-center items-center">
            <button
              class="w-full gap-4 flex border border-gray-400 py-3 rounded-md justify-center items-center"
              @click="signUpWithGoogle"
            >
              <img class="w-5" src="@/assets/Images/google.png" alt="" /> Signup
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
export default {
  components: {
    Modal,
  },
  setup() {},
  data() {
    return {
      toggleModal: false,
      args: {
        email: "",
        password: "",
        name: "",
      },
    };
  },
  methods: {
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    modal() {
      this.toggleModal = true;
    },
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    async signUp() {
      let res = await this.$store.dispatch("post", {
        endpoint: "/auth/register",
        auth: false,
        payload: this.args,
      });
      if (res.status == 201 || 200) {
        this.$router.push("/reader/profile");
        this.reset();
      }
    },
    async signUpWithGoogle() {
      let res = await this.$store.dispatch("get", {
        endpoint: "/auth/google",
        auth: false,
      });
      if (res.status == 200) {
        window.location.href = res.data.authUrl;
      }
    },
  },
  async mounted() {
    const params = new URLSearchParams(this.$route.query);
    const code = params.get("code");
    if (code) {
      const tokens = await getTokenFromCode(code);
      this.$store.commit("set", {
        type: "accessToken",
        data: tokens.access_token,
      });
      this.$store.commit("set", {
        type: "refreshToken",
        data: tokens.refresh_token,
      });
      this.$router.push("/reader/profile");
    }
  },
};
</script>
<style scoped></style>
