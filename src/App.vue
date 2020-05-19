<template>
  <div id="app" class="flex flex-col items-center justify-center h-screen antialiased bg-gray-300">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style src="./assets/styles/index.css"></style>
