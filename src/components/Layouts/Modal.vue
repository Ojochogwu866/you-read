<template>
  <main>
    <div class="">
      <div
        v-if="center"
        class="absolute h-screen bg-black bg-opacity-10 overflow-y-hidden inset-0 flex justify-end items-end z-50 w-full mx-auto rounded shadow-xs"
      >
        <div class="w-full">
          <slot name="header" />
        </div>
        <main class="flex items-start justify-start">
          <div class="mt-14 absolute ml-20">
            <svg
              @click="close"
              class="w-3 h-3 cursor-pointer"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.09 7.02l5.73-5.85a.68.68 0 00-.96-.95L7.13 6.06 1.17.2a.68.68 0 10-.95.97l5.95 5.84-5.95 5.84a.68.68 0 00.95.96l5.96-5.85 5.73 5.84a.68.68 0 00.96-.95L8.1 7.02z"
                fill="#505050"
              />
            </svg>
          </div>
          <slot />
        </main>
      </div>
      <div v-click-outside="toggleModalState" v-else>
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <slot />
        </transition>
      </div>
    </div>
  </main>
</template>

<script>
import ClickOutside from "vue-click-outside";
import { mapGetters } from "vuex";
export default {
  props: {
    center: {
      default: true,
    },
    css: String,
  },
  methods: {
    close() {
      this.$emit("close");
    },
    toggleModalState() {
      this.$store.commit("change", {
        type: "modalState",
        data: !this.currentState,
      });
    },
  },
  directives: {
    ClickOutside,
  },
  computed: {
    ...mapGetters(["currentModalState"]),
    currentState() {
      return this.currentModalState;
    },
  },
  mounted() {
    document.body.style.setProperty("overflow", "hidden");
  },
  destroyed() {
    document.body.style.removeProperty("overflow");
  },
};
</script>

<style></style>
