<template>
  <div class="w-11/12 mx-auto mt-10">
    <div class="h-[70vh] w-full py-8 overflow-x-hidden">
      <h2
        id="smooth-wrapper"
        class="text-7xl text-left ml-[10%] font-extrabold border-b-2 pb-4 border-[#7ec8e3]"
      >
        BOOK REVIEWS
      </h2>
      <div class="flex flex-col justify-center items-center mt-5">
        <div class="flex flex-col w-3/4">
          <div class="text-sm font-medium">
            Search book reviews by book author, title & genre
          </div>
          <form
            @submit.prevent="search"
            class="flex justify-center items-center mt-4"
          >
            <input
              v-model="query"
              @input="clearOutput"
              @keyup="getSuggestions"
              class="w-full outline-none text-sm bg-white rounded-md border border-gray-400 p-2"
              placeholder="e.g: Honey & Spice, Bolu Babalola, love"
            />
          </form>
        </div>
        <div class="grid grid-cols-3 gap-3 mt-3">
          <div
            class="flex flex-col max-w-sm shadow-lg rounded text-left leading-6 p-5"
          >
            <div
              v-if="isMessageVisible"
              class="text-xs absolute backdrop-blur-md bg-black bg-opacity-10 p-3 left-[60px]"
            >
              Your book recommendation will be based on the user's you follow.
            </div>
            <div class="flex flex-col">
              <div class="text-xs cursor-pointer flex justify-between">
                <div>
                  <img src="" alt="" />
                  <span>Bolu Babalola</span>
                </div>
                <div>
                  <button
                    class="text-xs cursor-pointer inline-block relative"
                    @mouseover="showMessage()"
                    @mouseout="hideMessage()"
                    @click="followReader()"
                  >
                    Follow+
                  </button>
                  <span> 64</span>
                </div>
              </div>
              <span class="italic text-xs mt-2"
                >"Two weeks before his twenty-first birthday, Las Vegas native
                Bobby Ingersoll finds out he’s inherited a crushing gambling
                debt from his scumbag father."</span
              >
              <span class="text-xs mt-4"
                >Review On: Legendary magic duo Penn & Teller: a rollicking
                crime caper that will bend your mind like a spoon</span
              >
            </div>
          </div>
          <div
            class="flex flex-col max-w-sm shadow-lg rounded text-left leading-6 p-4"
          >
            <div class=""></div>
            <div class="flex flex-col">
              <span class="italic text-xs"
                >"Two weeks before his twenty-first birthday, Las Vegas native
                Bobby Ingersoll finds out he’s inherited a crushing gambling
                debt from his scumbag father."</span
              >
              <span class="text-xs mt-4"
                >Review On: Legendary magic duo Penn & Teller: a rollicking
                crime caper that will bend your mind like a spoon</span
              >
            </div>
          </div>
          <div
            class="flex flex-col max-w-sm shadow-lg rounded text-left leading-6 p-4"
          >
            <div class=""></div>
            <div class="flex flex-col">
              <span class="italic text-xs"
                >"Two weeks before his twenty-first birthday, Las Vegas native
                Bobby Ingersoll finds out he’s inherited a crushing gambling
                debt from his scumbag father."</span
              >
              <span class="text-xs mt-4"
                >Review On: Legendary magic duo Penn & Teller: a rollicking
                crime caper that will bend your mind like a spoon</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Reviews",
  data() {
    return {
      isMessageVisible: false,
      messageTimeout: null,
    };
  },
  methods: {
    showMessage() {
      this.isMessageVisible = true;
      this.messageTimeout = setTimeout(() => {
        this.hideMessage();
      }, 3000);
    },
    hideMessage() {
      clearTimeout(this.messageTimeout);
      this.isMessageVisible = false;
    },
  },
};
</script>
<style scoped></style>
