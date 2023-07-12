<template>
  <div 
    v-if="type === 'actions'" 
    class=" flex text-white justify-center w-full items-center mt-6 p-5" 
  >
    <div class=" h-[125px] w-[30%] text-left flex flex-col justify-center items-start left-0">
      <h1 
        class=" text-base"
      > 
        {{ title }} 
      </h1>
      <div 
        class="flex gap-3"
      >
        <img 
          src="@/assets/Images/Vector.svg" 
          class=" w-[30px]" 
          alt="more" 
        >
        <p class="text-[14px] pr-3"> 
          {{ action }} 
        </p>
      </div>
    </div>
    <div class=" h-[200px] w-[50%] exp flex justify-center items-center right-0 rounded-full backdrop-filter backdrop-blur-sm bg-opacity-10 ">
      <img 
        :src="src" 
        :alt="alt" 
        class="w-1/2 -skew-x-[20deg] h-full object-cover" 
      >
    </div>
  </div> 
</template>
<script>
export default {
  name: 'SlideComponent',
  props: {
    list: Array,
    title: {
      type: String, 
      default:''
    },
    src: {
       type: String,
       default: ''
    },
     action :{
      type: String,
      default:''
    },
    type: {
      type: String,
      default: 'actions'
    }
  },
  data: () => ({

  }),
  methods: {
        getPictureUrl (url) {
        return require(`@/assets/Images/${url}`)
    },
}
}
</script>
<style scoped>
.exp{
  background: rgb(160,0,109);
  background: linear-gradient(328deg, rgba(160, 0, 109, 0.521) 0%,
  rgba(255, 255, 255, 0.493) 50%, rgba(252, 176, 69, 0.493) 100%);
}
</style>
