<template>
  <div
    class="flex  backdrop-filter backdrop-blur-sm bg-opacity-30 z-50 fixed 
    top-0 justify-between items-center w-10/12 mx-auto text-white
    py-3 border-b-[1px] border-gray-800 "
  >
    <div class="flex gap-5 justify-center items-center">
    <div class="text-[14px] cursor-pointer hover:bg-gray-50">You Read</div>
    <div class="text-[14px] cursor-pointer hover:bg-gray-50">For Authors</div>
    <div class="text-[14px] cursor-pointer hover:bg-gray-50">For Readers </div> 
    <div class="text-[14px] cursor-pointer hover:bg-gray-50">Company</div>
    <form>
      <input placeholder="Search Books" class=" w-[400px] px-2 py-2 text-sm rounded-[6px] bg-gray-400 backdrop-filter
       backdrop-blur-sm bg-opacity-30  outline-none"/>
    </form>
    </div>
    <div class="flex justify-center gap-6 items-center m-2">
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
};
</script>
