<template>
  <div
    v-show="displayModal || modal1"
    class="bg-black absolute flex justify-center bottom-0 left-0 items-center bg-opacity-10 w-full h-full"
  >
    <div
      v-if="displayModal || modal1"
      class="flex flex-col w-auto gap-y-3 bg-white shadow-typeBox px-4 py-6 rounded-md"
    >
      <div class="">
        <button @click="closeModal">
          <img class="w-8" src="@/assets/Images/Rectangle(4).svg" alt="" />
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
  props: {
    displayModal: {
      type: Boolean,
      default: false,
    },
    modal1: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("update:displayModal", false);
    },
  },
};
</script>
