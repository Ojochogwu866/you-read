<template>
  <div
    class="flex  backdrop-filter backdrop-blur-sm bg-opacity-30 z-50 fixed 
    top-0 justify-between items-center w-10/12 mx-auto text-white
    py-3 border-b-[1px] border-gray-800 "
  >
    <div class="flex gap-5 justify-center items-center">
      <div class="text-[14px] cursor-pointer ">
        You Read
      </div>
      <div class="text-[14px] cursor-pointer ">
        For Authors
      </div>
      <div class="text-[14px] cursor-pointer ">
        For Readers 
      </div> 
      <div class="text-[14px] cursor-pointer flex justify-center items-center ">
        Company
        <svg viewBox="0 0 1024 1024" class=" w-5 ml-1" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg>
      </div>
      <form 
        class=" w-[400px] px-2 py-2 text-sm flex justify-center rounded-[6px] bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-30">
        <svg viewBox="0 0 1024 1024" class=" w-5 mr-1" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path></svg>
        <input 
          placeholder="Search Books" 
          class="   outline-none bg-transparent w-full h-full"
        >
      </form>
    </div>
    <div class="flex justify-center gap-6 items-center m-2">
      <Login />
      <Signup />
    </div>
  </div>
</template>
<script>
import Login from "../Auth/Login.vue";
import Signup from "../Auth/SignUp.vue";
export default {
  components: {
    Login,
    Signup,
  },
};
</script>
