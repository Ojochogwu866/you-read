<template>
  <div 
    v-if="type === 'actions'" 
    class=" flex text-white justify-center w-full items-center mt-6" 
  >
    <div 
      class=" md:h-[200px] h-[160px] md:w-[90%] sx:w-full exp flex 
      justify-center items-center pr-24 sx:pr-[10px] rounded-r-full
      backdrop-filter backdrop-blur-sm bg-opacity-10 "
    >
    <div 
        class="w-1/2 h-auto flex flex-col text-left md:p-5 p-4"
      >
      <h1 
        class=" md:text-[14px] text-[12px] "
      > 
        {{ title }} 
      </h1>
        <p class="md:text-[14px] text-[12px] "> 
          {{ action }} 
        </p>
      </div>
      <img 
        :src="src" 
        :alt="alt" 
        class="w-1/2 sx:w-[40%]  h-full right-[20%] sx:right-[0%] sx:rounded-r-full object-cover" 
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
