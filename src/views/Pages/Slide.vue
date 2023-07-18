<template>
  <div 
    v-if="type === 'actions'" 
    class=" flex text-white justify-center w-full items-center mt-6" 
  >
    <div class=" md:h-[125px] w-[50%] md:w-[30%] text-left flex flex-col justify-center items-start left-0">
      <h1 
        class=" sx:hidden text-base sx:text-[14px]"
      > 
        {{ title }} 
      </h1>
      <div 
        class="flex gap-3"
      >
        <img 
          src="@/assets/Images/Vector.svg" 
          class=" w-[30px] sx:w-[14px]" 
          alt="more" 
        >
        <p class="text-[14px] pr-1 md:pr-3"> 
          {{ action }} 
        </p>
      </div>
    </div>
    <div 
      class=" md:h-[200px] h-[160px] w-[160px]  md:w-[50%] exp flex 
      justify-center items-center right-0 rounded-full 
      backdrop-filter backdrop-blur-sm bg-opacity-10 "
    >
      <img 
        :src="src" 
        :alt="alt" 
        class="md:w-1/2 w-[150px] h-[150px] md:-skew-x-[20deg] md:h-full sx:rounded-full object-cover" 
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
