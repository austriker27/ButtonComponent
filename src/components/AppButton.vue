<template>
  <div 
    class="inline-block px-4 py-6 transition-colors duration-150 ease-in-out scale-100 cursor-pointer app-button md:px-8 md:py-12 lg:px-16 lg:py-20 group"
    :class="[ isDark ? 'bg-black' : 'bg-transparent' ]" 
    >
      <div class="flex items-center justify-between">
      <p 
        v-if="buttonText"
        :class="[ isDark ? 'text-white' : 'text-orange-600' ]" 
        class="mb-0 text-xl text-white lg:text-4xl md:text-3xl">
          {{ buttonText }}
      </p>
      <div 
        class="relative flex items-center justify-center w-8 h-8 p-2 ml-4 transition-colors transition-transform duration-700 ease-in-out transform bg-transparent border-2 rounded-full app-button__background md:w-12 md:h-12 group-hover:scale-125" 
        :class="[ isDark ? 'border-white group-hover:bg-teal-500 group-hover:border-teal-500' : 'border-black group-hover:bg-black' ]" 
        >
        <svg 
            class="relative inline-block transition-colors transition-transform duration-150 duration-700 ease-in-out transform fill-current group-hover:scale-80" 
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

<style scoped>

.app-button:hover .app-button__background::before {
    animation: effect_ripple 1s ease-out;
}

.app-button__background::before {
    content: '';
    background-color: aliceblue;
    border-radius: 50%;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scale(0.001, 0.001);
}

@keyframes effect_ripple {
  50% {
    transform: scale(1.5, 1.5);
    opacity: 0;
  }
  99% {
    transform: scale(0.001, 0.001);
    opacity: 0;
  }
  100% {
    transform: scale(0.001, 0.001);
    opacity: 1;
  }
}
</style>
