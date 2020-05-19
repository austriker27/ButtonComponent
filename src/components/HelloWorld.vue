<template>
  <div class="hello">
      <div class="mb-10 max-w-12">
        <label class="block mb-2 text-sm font-bold text-gray-700" for="username" >
        Button text here
        </label>
        <input 
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
            type="text" 
            placeholder="type anything" 
            v-model="buttonText"
        >
      </div>
    <div class="flex flex-wrap justify-between">
        <AppButton
            :buttonText="buttonText"
            :isDark="false"
        />
        <div class="m-4">

        </div>
        <AppButton
            :buttonText="buttonText"
            isDark="true"
        />
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
export default {
  name: 'HelloWorld',
  components: {
      AppButton
  },
  data: function() {
      return {
          buttonText: 'button text'
      }
  }
}
</script>