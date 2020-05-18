<template>
  <div 
    class="inline-block px-4 py-6 transition-colors duration-150 ease-in-out scale-100 cursor-pointer md:px-8 md:py-12 lg:px-16 lg:py-20 group"
    :class="[ isDark ? 'bg-black' : 'bg-transparent' ]" 
    >
      <div class="flex items-center justify-between">
      <p 
        :class="[ isDark ? 'text-white' : 'text-orange-600' ]" 
        class="mb-0 text-xl text-white lg:text-4xl md:text-3xl">
          {{ buttonText }}
      </p>
      <div 
        class="flex items-center justify-center w-8 h-8 p-1 ml-4 transition-colors transition-transform duration-300 ease-in-out transform bg-transparent border-2 rounded-full md:w-10 md:h-10 group-hover:scale-150" 
        :class="[ isDark ? 'border-white group-hover:bg-teal-500 group-hover:border-teal-500' : 'border-black group-hover:bg-black' ]" 
        >
        <svg 
            class="inline-block transition-colors duration-150 ease-in-out fill-current" 
            :class="[ isDark ? 'text-teal-500 group-hover:text-white' : 'text-orange-600 group-hover:text-white' ]" 
            fill="none" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
        >
          <path d="M14 5l7 7m0 0l-7 7m7-7H3">
          </path>
        </svg>  
      </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
      // this controls if the button is light or dark
      isDark: {
           type: Boolean,
           default: true,
      },
      buttonText: {
          type: String,
          default: null
      }
  }

}
</script>