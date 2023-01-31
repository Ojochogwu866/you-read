<template>
  <div
    class="flex justify-between items-center border-b-2 border-white bg-white pr-20"
  >
    <div></div>
    <div class="flex justify-center gap-8 items-center m-6">
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
    login() {
      this.$auth.loginWithRedirect({ screen_hint: "signup" });
    },
    signup() {
      this.$auth.loginWithRedirect({
        screen_hint: "signup",
      });
    },
  },
};
</script>
