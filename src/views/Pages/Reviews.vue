<template>
  <div class=" text-gray-400 mt-8">
    <div class="h-auto py-6">
      <h2
        class="text-sm text-left font-normal pb-2 border-b-[1px] border-gray-800 text-white"
      >
        BOOK REVIEWS
      </h2>
      <div class="flex flex-col justify-center items-center mt-5">
        <div class="flex flex-col w-3/4">
          <div class="text-sm font-medium">
            Search book reviews by book title & reader
          </div>
          <form
            @submit.prevent="search"
            class="flex justify-center items-center mt-4"
          >
            <input
              v-model="query"
              @input="clearOutput"
              @keyup="getSuggestions"
              class="w-full outline-none text-sm bg-gray-200 rounded-md border border-gray-400 p-2"
              placeholder="e.g: Honey & Spice, Bolu Babalola, love"
            />
          </form>
        </div>
        <div class="grid grid-cols-3 gap-3 mt-6">
          <div
            class="flex flex-col max-w-sm shadow-lg bg-gray-400 backdrop-filter border-gray-200 
rounded-3xl  backdrop-blur-sm bg-opacity-10 text-left leading-6 p-5"
          >
            <div
              v-if="isMessageVisible"
              class="text-xs absolute backdrop-blur-md bg-black bg-opacity-10 p-3 left-[60px]"
            >
              Your book recommendation will be based on the user's you follow.
            </div>
            <div class="flex flex-col">
              <div
                class="text-xs cursor-pointer flex justify-between items-center"
              >
                <div>
                  <p>
                    Bolu Babalola
                    <span class="text-gray-500 text-[12px]"> @bolu_b</span>
                  </p>
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
            class="flex flex-col max-w-sm shadow-lg bg-gray-400 backdrop-filter border-gray-200 
rounded-3xl  backdrop-blur-sm bg-opacity-10 text-left leading-6 p-5"
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
            class="flex flex-col max-w-sm bg-gray-400 backdrop-filter border-gray-200 
rounded-3xl  backdrop-blur-sm bg-opacity-10 text-left leading-6 p-5"
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
