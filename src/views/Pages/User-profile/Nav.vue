<template>
  <div class="w-full bg-gradient-to-tl from-pink-100 to-zinc-200">
    <div class="flex items-center py-6 w-[90%] justify-between mx-auto">
      <div class="text-[15px] text-slate-900 font-semibold">Hi, {{ getUserInformation.user.name }}</div>
      <div class="flex justify-center items-center gap-3">
        <div
          class="bg-boxbg border-none rounded-sm text-sm px-2 py-2
           hover:bg-boxColor cursor-pointer hover:text-white text-slate-900"
        >
          Join a book club
        </div>
        <div class="cursor-pointer" @click="isDrawerOpen = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 532 532"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <g>
                <circle
                  cx="270.759"
                  cy="260.92941"
                  r="86.34897"
                  fill="#a0616a"
                />
                <polygon
                  points="199.2879 366.61365 217.2879 320.61365 310.2879 306.61365 320.28003 408.44043 226.28003 410.44043 199.2879 366.61365"
                  fill="#a0616a"
                />
              </g>
              <path
                d="M357.94449,276.8613c-1.12067,4.48965-3.38602,15.17972-6.9238,15.23233-2.89023,.04208-5.65668-46.33466-2.76953-54.00568,3.31638-8.81271-5.39886-19.96062-11.96411-25.6832-11.80423-10.2894-38.00696,11.80466-64.65118,1.79587-.70633-.26482-.56558-.23502-8.97934-3.59174-25.88966-10.32974-27.2506-10.62788-28.73386-10.77521-12.55046-1.24167-27.86705,9.02844-34.12146,21.55038-6.50168,13.01653-1.06937,24.18106-7.18346,55.67184-.71246,3.67065-1.83138,8.90216-3.59174,8.97934-3.21819,.14029-6.3605-17.04846-7.18346-21.55038-3.44792-18.86186-6.7722-37.04675,0-57.46771,.73878-2.22729,5.29158-10.49458,14.36693-26.93799,13.0744-23.68825,19.65018-35.57709,21.55038-37.7132,13.62859-15.32624,38.43575-29.30734,59.26357-23.34626,10.52704,3.01299,8.63953,7.85691,21.55038,12.57105,23.00821,8.40057,43.00476-1.87303,46.69254,5.3876,1.9537,3.84602-3.51236,7.01686-3.59174,14.36693-.13593,12.6114,15.81424,16.25575,25.14212,28.73386,5.01447,6.70819,13.59753,6.78012-8.87228,96.78212l.00003,.00003Z"
                fill="#2f2e41"
              />
            </g>
            <path
              d="M464.92017,442.61035c-3.48022,3.91016-7.09009,7.74023-10.83008,11.48047-50.23999,50.23926-117.04004,77.90918-188.09009,77.90918-61.40991,0-119.63989-20.66992-166.75-58.71973-.03003-.01953-.05005-.04004-.07983-.07031-6.25-5.03906-12.30005-10.39941-18.14014-16.05957,.10986-.87988,.22998-1.75,.35986-2.61035,.82007-5.7998,1.73022-11.33008,2.75-16.41992,8.3501-41.71973,118.22021-85.51953,121.08008-86.66016,.04004-.00977,.06006-.01953,.06006-.01953,0,0,14.14014,52.12012,74.72998,51.4502,41.27002-.4502,33.27002-51.4502,33.27002-51.4502,0,0,.5,.09961,1.43994,.2998,11.91992,2.53027,94.68018,20.70996,127.33008,45.52051,9.94995,7.55957,17.08984,23.66016,22.21997,42.85938,.21997,.82031,.42993,1.66016,.65015,2.49023Z"
              fill="#A0006D"
            />
            <path
              d="M454.09009,77.91016C403.8501,27.6709,337.05005,0,266,0S128.15015,27.6709,77.90991,77.91016C27.67017,128.15039,0,194.9502,0,266c0,64.85059,23.05005,126.16016,65.29004,174.57031,4.03003,4.62988,8.23999,9.13965,12.61987,13.52051,1.03003,1.0293,2.07007,2.05957,3.12012,3.05957,5.84009,5.66016,11.89014,11.02051,18.14014,16.05957,.02979,.03027,.0498,.05078,.07983,.07031,47.11012,38.0498,105.3401,58.71973,166.75001,58.71973,71.05005,0,137.8501-27.66992,188.09009-77.90918,3.73999-3.74023,7.34985-7.57031,10.83008-11.48047,43.36987-48.71973,67.07983-110.83984,67.07983-176.61035,0-71.0498-27.66992-137.84961-77.90991-188.08984Zm10.17993,362.20996c-7.86987,8.9502-16.33008,17.37012-25.33008,25.18066-17.06982,14.84961-36.06982,27.5293-56.55981,37.62988-7.19019,3.5498-14.56006,6.7793-22.1001,9.66992-29.29004,11.24023-61.08008,17.39941-94.28003,17.39941-32.04004,0-62.76001-5.73926-91.18994-16.23926-11.67017-4.30078-22.94995-9.41016-33.78003-15.26074-1.59009-.85938-3.16992-1.72949-4.73999-2.61914-8.26001-4.68066-16.25-9.79004-23.91992-15.31055-10.98999-7.87988-21.3501-16.58984-30.98022-26.03027-5.3999-5.29004-10.55981-10.7998-15.48975-16.5293C26.09009,391.77051,2,331.65039,2,266,2,120.43066,120.42993,2,266,2s264,118.43066,264,264c0,66.66016-24.82983,127.62012-65.72998,174.12012Z"
              fill="#3f3d56"
            />
          </svg>
        </div>
        <p class="text-[15px] text-slate-900 font-semibold cursor-pointer" @click="logout">
          Logout
        </p>
      </div>
    </div>
    <div
      v-show="isDrawerOpen"
      class="fixed inset-y-0 w-full bg-white bg-opacity-80 shadow-lg z-20"
    >
      <div
        class="absolute inset-y-0 md:max-w-lg bg-white right-0 shadow-lg z-20"
      >
        <div
          class="flex items-center justify-between px-4 py-3 border-b border-gray-200"
        >
          <div class="text-sm text-gray-900 font-semibold">Profile Details</div>
          <button
            @click="isDrawerOpen = false"
            class="text-gray-600 focus:outline-none focus:text-gray-800"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="px-4 py-6">
          <div class="">
            <form @submit.prevent="updateUser">
              <div class="gap-y-4 w-[80%] mx-auto text-left">
                <div class="w-full">
                  <label for="" class="text-xs">Name</label>
                  <input
                    placeholder="Full Name"
                    v-model="name"
                    class="w-full bg-transparent text-sm border border-gray-400 text-black outline-none p-2 rounded-sm"
                  >
                </div>
                <div class="mt-2 w-full">
                  <label class="text-xs mt-2" for="">Email Address</label>
                  <input
                    disabled
                    v-model="email"
                    placeholder="Email address"
                    class="w-full cursor-not-allowed text-sm bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                  >
                </div>
                <div class="mt-2">
                  <label class="text-xs mt-2" for="">Phone</label>
                  <input
                    v-model="phone_number"
                    placeholder="Phone Number"
                    class="w-full text-sm bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                  >
                </div>
                <div class="mt-2">
                  <label class="text-xs mt-4" for="">Country</label>
                  <input
                    v-model="country"
                    placeholder="country"
                    class="w-full text-sm bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                  >
                </div>
                <div class="mt-2 w-full">
                  <label class="text-xs mt-4" for="">Socials</label>
                  <input
                    v-model="twitter_handle"
                    placeholder="@twitter"
                    class="w-full text-sm bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                  >

                  <input
                    v-model="facebook_handle"
                    placeholder="@facebook"
                    class="w-full text-sm mt-3 bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
                  >
                </div>
                <button
                  class="rounded-sm w-full mt-4 px-4 py-2 font-medium bg-boxColor text-white text-sm outline-none hover:shadow-typeBox"
                  type="submit"
                >
                  Save profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { mapGetters } from "vuex";
export default {
  name: 'UserNav',
  data() {
    return {
      isDrawerOpen: false,
    };
  },
  computed: {
    ...mapGetters(["getUserProfile", "getUserInformation"]),
    name: {
      get() {
        return this.getUserInformation.user.name;
      },
      set(value) {
        this.$store.commit("set", {
          type: "userInformation",
          data: {
            ...this.getUserInformation,
            user: { ...this.getUserInformation.user, name: value },
          },
        });
      },
    },
    email: {
      get() {
        return this.getUserInformation.user.email;
      },
      set(value) {
        this.$store.commit("set", {
          type: "userInformation",
          data: {
            ...this.getUserInformation,
            user: { ...this.getUserInformation.user, email: value },
          },
        });
      },
    },
    phone_number: {
      get() {
        return this.getUserInformation.user.phone_number;
      },
      set(value) {
        this.$store.commit("set", {
          type: "userInformation",
          data: {
            ...this.getUserInformation,
            user: { ...this.getUserInformation.user, phone_number: value },
          },
        });
      },
    },
    twitter_handle: {
      get() {
        return this.getUserInformation.user.twitter_handle;
      },
      set(value) {
        this.$store.commit("set", {
          type: "userInformation",
          data: {
            ...this.getUserInformation,
            user: { ...this.getUserInformation.user, twitter_handle: value },
          },
        });
      },
    },
    facebook_handle: {
      get() {
        return this.getUserInformation.user.facebook_handle;
      },
      set(value) {
        this.$store.commit("set", {
          type: "userInformation",
          data: {
            ...this.getUserInformation,
            user: { ...this.getUserInformation.user, facebook_handle: value },
          },
        });
      },
    },
    country: {
      get() {
        return this.getUserInformation.user.country;
      },
      set(value) {
        this.$store.commit("set", {
          type: "userInformation",
          data: {
            ...this.getUserInformation,
            user: { ...this.getUserInformation.user, country: value },
          },
        });
      },
    },
  },
  methods: {
    logout() {
      this.$store.commit("logOut");
    },
    async updateUser() {
      let id = this.getUserInformation.user.id;
      let res = await this.$store.dispatch("put", {
        endpoint: `/auth/profile/${id}/`,
        auth: true,
        payload: this.getUserInformation.user,
      });
      if (res.status == 200) {
        this.$store.commit("set", {
          type: "userInformation",
          data: res,
        });
      }
    },
  },
  async created() {
    let id = this.getUserInformation.user.id;
    let res = await this.$store.dispatch("get", {
      endpoint: `/auth/profile/${id}`,
      auth: true,
    });
    if (!!res) {
      this.$store.commit("set", {
        type: "userProfile",
        data: res,
      });
    }
  },
};
</script>
