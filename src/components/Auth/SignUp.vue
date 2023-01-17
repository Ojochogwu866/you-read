<template>
  <div class="w-full flex justify-center items-center flex-col">
    <Nav />
    <div class=" ">
      <h1 class="text-2xl text-cliniDarkBlue font-medium md:mt-32">Sign Up</h1>
      <p class="font-thin text-xs mt-16 sx:mt-2 md:mt-1">
        Create an account as a Patient
      </p>
      <p class="font-thin text-xs">Get health services at a finger Snap!</p>
      <form @submit.prevent="signUp" class="w-full sx:w-11/12 sx:m-auto">
        <div class="w-full mt-5" ii>
          <div class="flex flex-row sx:flex-col">
            <div class="w-96 sx:w-full">
              <p class="text-sm font-normal text-cliniDarkBlue text-left">
                First Name
              </p>
              <input
                type="text"
                required
                class="border sx:py-2 py-3 pl-2 text-sm leading-6 mt-1 rounded border-gray-900 w-full"
                v-model="args.patient_user_id.first_name"
              />
            </div>
            <div class="w-96 sx:w-full ml-4 sx:ml-0 sx:mt-2">
              <p class="text-sm font-normal text-cliniDarkBlue text-left">
                Last Name
              </p>
              <input
                type="text"
                required
                class="border sx:py-2 py-3 pl-2 text-sm leading-6 mt-1 rounded border-gray-900 w-full"
                v-model="args.patient_user_id.last_name"
              />
            </div>
          </div>
          <div class="flex flex-row sx:flex-col">
            <div class="w-96 sx:w-full mt-6 sx:mt-2">
              <p class="text-sm font-normal text-cliniDarkBlue text-left">
                Email Address
              </p>
              <input
                type="email"
                required
                class="border sx:py-2 py-3 pl-2 text-sm leading-6 mt-1 rounded border-gray-900 w-full"
                v-model="args.email"
              />
            </div>
            <div class="w-96 sx:w-full mt-6 sx:mt-2 ml-4 sx:ml-0">
              <p class="text-sm font-normal text-cliniDarkBlue text-left">
                Password
              </p>
              <input
                type="password"
                required
                class="border sx:py-2 py-3 pl-2 text-sm leading-6 mt-1 rounded border-gray-900 w-full"
                v-model="args.password"
              />
            </div>
          </div>
          <div class="w-96 sx:w-full mt-6 sx:mt-2 ml sx:ml-0">
            <p class="text-sm font-normal text-cliniDarkBlue text-left">
              Phone Number
            </p>
            <vue-tel-input
              v-bind="bindProps"
              id="phone"
              required
              type="string"
              class="border sx:py-2 py-3 pl-2 text-sm leading-6 mt-1 rounded border-gray-900 w-full"
              v-model="args.patient_user_id.phone_number"
            />
          </div>
        </div>
        <div class="w-full">
          <div class="flex items-center">
            <input
              required
              type="checkbox"
              class="my-5 w-5 h-5 bg-gray-500"
              name
              id
            />
            <p class="font-medium text-xs ml-3 sx:text-left">
              I agree and accept the
              <router-link class="text-blue-500 pr-1" to="/terms"
                >Terms and Conditions</router-link
              >and
              <router-link class="text-blue-500 pl-1" to="/privacy"
                >privacy policy</router-link
              >
            </p>
          </div>
          <button class="mt-3 py-3 text-white bg-cliniDarkBlue w-full rounded">
            Sign Up
          </button>
        </div>
      </form>
      <div class="w-full mt-5 border-t">
        <div class="mt-6 flex w-full justify-center items-center text-center">
          <p class="text-xs text-gray-500 font-normal">
            Already have an account ?
          </p>
          <router-link to="/userlogin">
            <p class="text-xs font-normal text-blue-500 pl-1">Login</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "./Nav.vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
export default {
  components: {
    Nav,
    VueTelInput,
  },
  data() {
    return {
      bindProps: {
        inputOptions: {
          showDialCode: true,
        },
      },
      args: {
        email: "",
        password: "",
        patient_user_id: {
          first_name: "",
          last_name: "",
          phone_number: "",
        },
        account_type: "patient user",
      },
    };
  },
  methods: {
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    async signUp() {
      let res = await this.$store.dispatch("post", {
        endpoint: "/account/patient-user-signup/",
        auth: false,
        payload: this.args,
      });
      if (res.status == 201) {
        this.$toast.success("Please Login to continue");
        this.$router.push("/userlogin");
        this.reset();
      }
    },
  },
};
</script>
