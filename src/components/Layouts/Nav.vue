<template>
  <div
    class="flex backdrop-filter backdrop-blur-sm bg-opacity-30 z-50 fixed 
    top-0 justify-between items-center w-10/12 mx-auto text-white
    py-3 sx:py-2 sx:w-11/12  border-b-[1px] border-gray-800 "
  >
    <div class=" antialiased w-full">
      <nav class="flex  items-center justify-between  flex-wrap bg-teal">
        <div class="no-underline  mt-4 flex justify-center items-center sm:mt-0 text-teal-lighter hover:text-white mr-4">
          You Read
        </div>
        <div class="block sm:hidden">     
          <button 
            class="flex items-center px-2 py-2 border rounded text-teal-lighter 
            border-teal-light hover:text-white hover:border-white"
            @click="toggle" 
          >
            <svg 
              class="fill-current h-3 w-3" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
              />
            </svg>
          </button>
        </div>
        <div 
          :class="open ? 'block': 'hidden'" 
          class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
        >
          <div class="text-sm sm:flex-grow  flex sx:flex-col sx:items-start sx:justify-start">
            <div class="no-underline  mt-4 flex justify-center items-center sm:mt-0 text-teal-lighter hover:text-white mr-4">
              For Authors
            </div>
            <div class="no-underline flex justify-center items-center mt-4  sm:mt-0 text-teal-lighter hover:text-white mr-4">
              For Readers
            </div>
            <div class="no-underline flex justify-center items-center mt-4  sm:mt-0 text-teal-lighter hover:text-white mr-4">
              Company
              <svg 
                viewBox="0 0 1024 1024" 
                class=" w-5 ml-1" 
                xmlns="http://www.w3.org/2000/svg" 
                data-v-ea893728=""
              >
                <path 
                  fill="currentColor" 
                  d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                />              
              </svg>
            </div>
            <form 
              class=" w-[400px] sx:w-11/12 sx:mt-4 px-2 py-2 text-sm flex justify-center rounded-[6px] bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-30">
              <svg 
                viewBox="0 0 1024 1024" 
                class=" w-5 mr-1" 
                xmlns="http://www.w3.org/2000/svg" 
                data-v-ea893728=""
              >
                <path 
                  fill="currentColor" 
                  d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
                /></svg>
              <input 
                placeholder="Search Books" 
                class="   outline-none bg-transparent w-full h-full"
              >
            </form>
          </div>
          <div>
            <div class="flex justify-center sx:mt-4 gap-6 items-center m-2">
              <Login />
              <Signup />
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import Login from "../Auth/Login.vue";
import Signup from "../Auth/SignUp.vue";
export default {
  name: "NavComponent",
  components: {
    Login,
    Signup,
  },
  data() {
    return {
  	open: false,
    }
  },
    methods: {
  	toggle() {
    	this.open = !this.open
    }
  }
};
</script>